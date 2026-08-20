// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { execSync } from "node:child_process";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

/** Build a slug → most-recent-date map for sitemap lastmod by scraping
 *  frontmatter dates out of content/{blog,pages}/*.md. We can't use the
 *  astro:content virtual module from astro.config, so parse YAML by hand. */
function readLastmodMap() {
  /** @type {Record<string, string>} */
  const map = {};
  for (const dir of ["src/content/blog", "src/content/pages"]) {
    let files = [];
    try { files = readdirSync(dir).filter((f) => f.endsWith(".md")); } catch { continue; }
    for (const f of files) {
      const slug = f.replace(/\.md$/, "");
      const txt = readFileSync(join(dir, f), "utf8");
      const fm = txt.match(/^---\n([\s\S]*?)\n---/);
      if (!fm) continue;
      const get = (/** @type {string} */ k) => {
        const m = fm[1].match(new RegExp(`^${k}:\\s*['\"]?([^'\"\\n]+)['\"]?$`, "m"));
        return m ? m[1].trim() : null;
      };
      const date = get("updatedDate") || get("pubDate");
      if (date) map[slug] = new Date(date).toISOString();
    }
  }
  return map;
}

/** Last git commit date (ISO) for a file, cached. Returns null when git or the
 *  file's history is unavailable (e.g. a shallow CI clone) so the build never
 *  breaks — lastmod is simply omitted for that URL. `:(literal)` keeps the
 *  `[slug]` dynamic-route dirs from being read as glob character classes. */
const _gitDateCache = new Map();
/** @param {string} file */
function gitDate(file) {
  if (_gitDateCache.has(file)) return _gitDateCache.get(file);
  let iso = null;
  try {
    const out = execSync(`git log -1 --format=%cI -- ${JSON.stringify(":(literal)" + file)}`, {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    if (out) iso = out;
  } catch { /* git unavailable */ }
  _gitDateCache.set(file, iso);
  return iso;
}

/** Source file(s) whose git history reflects a route's content. The most recent
 *  commit across them becomes the sitemap lastmod. Data-driven dynamic pages
 *  pair their [slug] template with the data module that actually holds the copy.
 *  @param {string} pathname */
function sourceFilesFor(pathname) {
  const clean = pathname.replace(/^\//, "").replace(/\/$/, "");
  if (clean === "") return ["src/pages/index.astro"];
  const seg = clean.split("/");
  /** @type {Record<string, string>} */
  const collections = {
    solutions: "src/lib/solutions.ts",
    compare: "src/lib/competitors.ts",
    glossary: "src/lib/glossary.ts",
  };
  if (seg.length === 2 && collections[seg[0]]) {
    return [`src/pages/${seg[0]}/[slug]/index.astro`, collections[seg[0]]];
  }
  return [`src/pages/${clean}/index.astro`, `src/pages/${clean}.astro`];
}

/** Remove the first H1 from each Markdown document — the [slug] layout
 *  already renders frontmatter title as an H1, and most scraped pages
 *  open with their own H1. Without this, every marketing page has two. */
function stripLeadingH1Remark() {
  return (/** @type {{ children: Array<{ type: string; depth?: number }> }} */ tree) => {
    let stripped = false;
    tree.children = tree.children.filter((node) => {
      if (stripped) return true;
      if (node.type === "heading" && node.depth === 1) {
        stripped = true;
        return false;
      }
      if (node.type !== "yaml" && node.type !== "html" && node.type !== "definition") {
        stripped = true;
      }
      return true;
    });
  };
}

/** Same intent, but operates on the HAST (post-remark) tree. Catches H1s
 *  that came in as raw HTML — e.g. pages whose content was sourced via
 *  the scraper's HTML fallback (testimonials, shop, etc.) and ended up
 *  as a single html node that the remark plugin can't introspect. */
function stripLeadingH1Rehype() {
  return (/** @type {{ children: Array<any> }} */ tree) => {
    /** @param {any} node */
    function walk(node) {
      if (!node || !Array.isArray(node.children)) return false;
      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        if (child.type === "element" && child.tagName === "h1") {
          node.children.splice(i, 1);
          return true;
        }
        if (child.type === "element" && walk(child)) return true;
      }
      return false;
    }
    walk(tree);
  };
}

/** Promote the first content heading from H3 → H2 when no H2 precedes it.
 *  Most scraped posts open with `### …` directly under the rendered H1,
 *  which Lighthouse flags as a heading-order skip. When promoting, cascade
 *  the shift across every heading in the doc (H3→H2, H4→H3, H5→H4, H6→H5)
 *  so the author's relative hierarchy is preserved — otherwise the next
 *  H4 under the promoted H2 becomes a new heading-order skip. */
function promoteFirstHeadingRehype() {
  return (/** @type {{ children: Array<any> }} */ tree) => {
    /** @type {string | null} */
    let firstTag = null;
    /** @param {any} node */
    function findFirst(node) {
      if (firstTag) return;
      if (!node || !Array.isArray(node.children)) return;
      for (const child of node.children) {
        if (child.type !== "element") continue;
        if (/^h[1-6]$/.test(child.tagName)) { firstTag = child.tagName; return; }
        findFirst(child);
        if (firstTag) return;
      }
    }
    findFirst(tree);
    if (firstTag !== "h3") return; // Only act when the doc opens at H3.
    /** @param {any} node */
    function cascade(node) {
      if (!node || !Array.isArray(node.children)) return;
      for (const child of node.children) {
        if (child.type === "element" && /^h[3-6]$/.test(child.tagName)) {
          child.tagName = `h${parseInt(child.tagName.slice(1), 10) - 1}`;
        }
        cascade(child);
      }
    }
    cascade(tree);
  };
}

/** Open external links in a new browser tab. Any <a> whose href points to a
 *  host other than revenuehunt.com (or a subdomain) gets target=_blank +
 *  rel="noopener". Internal, relative, anchor and mailto links are untouched.
 *  rel keeps "noopener" only (NOT noreferrer) so the Referer + UTMs still reach
 *  the destination for attribution. Site-wide across all markdown content
 *  (demo-store quiz links, external citations, in-content install links). */
function externalLinksNewTabRehype() {
  /** @param {string} href */
  const isExternal = (href) =>
    /^https?:\/\//i.test(href) &&
    !/^https?:\/\/([a-z0-9-]+\.)*revenuehunt\.com([/:?#]|$)/i.test(href);
  return (/** @type {{ children: Array<any> }} */ tree) => {
    /** @param {any} node */
    function walk(node) {
      if (!node || !Array.isArray(node.children)) return;
      for (const child of node.children) {
        if (
          child.type === "element" &&
          child.tagName === "a" &&
          child.properties &&
          typeof child.properties.href === "string" &&
          isExternal(child.properties.href)
        ) {
          child.properties.target = "_blank";
          const rel = Array.isArray(child.properties.rel)
            ? child.properties.rel.slice()
            : String(child.properties.rel ?? "").split(/\s+/).filter(Boolean);
          if (!rel.includes("noopener")) rel.push("noopener");
          child.properties.rel = rel;
        }
        walk(child);
      }
    }
    walk(tree);
  };
}

/** Generate the Pagefind search index as part of every `astro build`, so
 *  /pagefind/ always ships — regardless of which npm script or host build
 *  command triggered the build. Uses Pagefind's Node API, so there is no
 *  separate CLI step that can be forgotten or misconfigured on the host. */
function pagefindIntegration() {
  /** @type {import('astro').AstroIntegration} */
  const integration = {
    name: "pagefind",
    hooks: {
      "astro:build:done": async ({ dir, logger }) => {
        const { createIndex, close } = await import("pagefind");
        const sitePath = fileURLToPath(dir);
        const { index } = await createIndex();
        if (!index) throw new Error("Pagefind: createIndex returned no index");
        const { errors: addErrors, page_count } = await index.addDirectory({
          path: sitePath,
        });
        if (addErrors.length) throw new Error(`Pagefind: ${addErrors.join("; ")}`);
        const { errors: writeErrors } = await index.writeFiles({
          outputPath: join(sitePath, "pagefind"),
        });
        if (writeErrors.length) throw new Error(`Pagefind: ${writeErrors.join("; ")}`);
        await close();
        logger.info(`search index built — ${page_count} pages`);
      },
    },
  };
  return integration;
}

export default defineConfig({
  site: "https://revenuehunt.com",
  output: "static",
  trailingSlash: "always",
  // English is the default locale at the root (no prefix); other languages live
  // under /<lang>/ via physical folders in src/pages/. hreflang alternates are
  // emitted per-page in Base.astro (not via sitemap i18n) so English-only pages
  // like the blog don't advertise non-existent localized URLs.
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es", "fr", "de", "pt", "it", "nl", "sv", "fi", "pl", "cs", "ar", "he"],
    routing: { prefixDefaultLocale: false },
  },
  redirects: {
    // Populate via scripts/scrape-wp.ts output. Any URL in the live
    // sitemap.xml that no Astro route produces must redirect here (or 410).
    // Unpublished 2026-08-20 at the merchant's request: the case study
    // disclosed their store's revenue and quiz screenshots without consent.
    // Redirected rather than 404'd to keep ~20 inbound internal links alive.
    "/anti-aging-beauty-brand-quiz-funnel-case-study/":
      "/quiz-funnels-vs-collection-pages-why-your-paid-traffic-bounces/",
    "/video-10-golden-rules-of-a-successful-product-recommendation-quiz/":
      "/how-to-build-a-successful-ecommerce-quiz/",
    "/conversational-marketing-ecommerce/":
      "/guided-selling-quiz/",
    // Long-form blog post merged into the /guided-selling-quiz/ landing page,
    // which is the canonical authority page for this topic (40+ inbound vs 1).
    "/how-to-use-guided-selling-via-product-recommendation-quiz-to-increase-your-revenue/":
      "/guided-selling-quiz/",
    // Blog "how to add a Shopify quiz" synthesis page redirected to the
    // product landing page (canonical for "Shopify quiz app" head term).
    // Setup walkthroughs live on docs.revenuehunt.com.
    "/shopify-quiz-app/":
      "/product-recommendation-quiz-shopify/",
    // Magento 2 setup blog redirected to the Standalone / Google Product Feed
    // landing page, which covers RH's Magento support via the feed mechanism.
    "/try-magento-2-product-recommendation-quiz-app-to-boost-your-conversions/":
      "/product-recommendation-quiz-standalone-google-product-feed/",
    // In-app results-email setup article merged into the follow-up emails
    // hub article (now at /quiz-follow-up-emails/). Repointed directly to
    // the new slug so the redirect does not chain.
    "/new-features-create-customized-results-emails/":
      "/quiz-follow-up-emails/",
    // Hub article renamed to a shorter, keyword-focused slug. Old slug carried
    // SEO authority worth preserving via 301; new slug matches the cluster
    // naming convention (quiz-X / product-quiz-X).
    "/product-quiz-success-why-its-necessary-to-send-follow-up-emails/":
      "/quiz-follow-up-emails/",
    "/interesting-examples-of-product-recommendation-quizzes-in-ecommerce/":
      "/10-brands-that-need-a-product-recommendation-quiz-with-examples/",
    "/introducing-dynamic-discount-codes-enhance-your-shop-quiz-app-for-shopify/":
      "/product-quiz-discounts/",
    "/introducing-video-quizzes-the-future-of-customer-engagement-in-ecommerce/":
      "/video-quizzes/",
    "/the-only-product-recommendation-app-for-headless-ecommerce-2024/":
      "/headless-ecommerce-product-quiz/",
    "/smart-ways-to-ask-for-marketing-data-processing-consent-in-your-product-recommendation-quiz/":
      "/product-quiz-marketing-consent/",
    "/why-shopify-merchants-love-the-shop-quiz-product-recommender-app-hear-from-them/":
      "/shopify-merchant-reviews-revenuehunt/",
    "/practical-guide-create-a-video-quiz-for-your-e-commerce-website/":
      "/video-quizzes/",
    "/why-your-product-quiz-is-not-converting-well/":
      "/quiz-creation-mistakes-that-hurt-your-ecommerce-sales/",
    "/questions-every-product-recommendation-quiz-should-have-and-how-to-build-them/":
      "/product-quiz-question-types/",
    "/why-product-recommendation-quiz-app-maintains-a-50-review-score-in-woocommerce-find-out-here/":
      "/woocommerce-plugin-reviews-revenuehunt/",
    "/quick-tips-before-you-build-your-first-product-recommendation-quiz-from-revenuehunt-team/":
      "/how-to-build-a-successful-ecommerce-quiz/",
    "/product-quiz-quick-tips/":
      "/how-to-build-a-successful-ecommerce-quiz/",
    "/help-us-shape-the-future-of-our-product-recommendation-quiz-app/":
      "/contact/",
    "/hubspot-shop-quiz-a-proven-strategy-to-increase-conversions/":
      "/hubspot-quiz-integration/",
    "/how-to-recommend-products-on-shopify-with-shop-quiz-a-step-by-step-guide-for-merchants/":
      "/product-quiz-recommendation-systems/",
    "/skinology-and-shop-quiz-crafting-personalized-skincare-journeys-online/":
      "/skinology-case-study/",
    "/shopifys-data-goldmine-essential-tools-for-ecommerce-in-2025/":
      "/shopify-data-collection-tools/",
    "/extreme-kids-world-leading-e-commerce-with-interactive-personalization/":
      "/extreme-kids-world-case-study/",
    "/automating-quiz-follow-ups-with-omnisend-to-drive-sales/":
      "/omnisend-quiz-integration/",
    "/quiz-driven-subscriptions-transforming-casual-browsers-into-loyal-subscribers/":
      "/product-quiz-subscriptions/",
    "/guide-to-building-a-personality-type-quiz-with-revenuehunt/":
      "/scoring-quiz-setup/",
    "/make-your-facebook-ads-smarter-with-revenuehunts-quiz-integration/":
      "/meta-pixel-quiz-integration/",
    "/how-to-track-and-maximize-quiz-driven-revenue-in-shopify/":
      "/first-party-shopify-quiz-analytics/",
    "/revenuehunt-activecampaign-integration/":
      "/activecampaign-quiz-integration/",
    "/new-built-for-shopify-revenuehunt-app-is-out-now/":
      "/revenuehunt-built-for-shopify/",
    "/shopify-quiz-revenue-tracking/":
      "/first-party-shopify-quiz-analytics/",
    "/ecommerce-website-design-tips-that-move-revenue/":
      "/build-sales-funnel-shopify-store/",
    "/shopify-quiz-analytics-vs-ga4-meta-pixel/":
      "/first-party-shopify-quiz-analytics/",
    // mark-orders article merged into customer-tags as the canonical home for
    // the Legacy Connect-tab order-tagging and customers-sync walkthroughs.
    "/mark-orders-and-collect-zero-party-data-for-your-shopify-store/":
      "/how-to-use-customer-tags-in-product-quizzes-to-maximize-sales/",
    // Off-brand sponsored post: 2,604 imp / 0 clicks, doesn't convert,
    // not aligned with the brand. PRD W6: redirect into the W2b funnel pillar.
    "/shopify-shipping-apps/":
      "/build-sales-funnel-shopify-store/",
    // Sponsored PR backlink post for a Fulfillman YouTube mention.
    // Carried stale stats (15K stores / 40M / $1.3B) that conflict with
    // canonical 20K+ / 45M+ / $370M+; no SEO value of its own.
    "/fulfillman-features-revenuehunt-best-product-quiz-app-for-shopify/":
      "/shopify-quiz-app/",
    "/shop/": "/product-recommendation-quiz-shopify/",
  },
  integrations: [
    (() => {
      const lastmodMap = readLastmodMap();
      return sitemap({
        // Keep noindex pages out of the sitemap. Tag/category/author archives
        // are noindex (see BlogArchive.astro), and /message-sent/ is a form
        // confirmation page — listing any of them trips Search Console's
        // "submitted URL marked noindex" error.
        filter: (page) =>
          !/\/(tag|cat|author)\/[^/]+\//.test(page) && !page.endsWith("/message-sent/"),
        serialize(item) {
          const url = new URL(item.url);
          const path = url.pathname.replace(/^\//, "").replace(/\/$/, "");
          // 1) Content collections (blog + pages) carry frontmatter dates. Blog
          //    posts live under /blog/<slug>/ but key the map by bare filename.
          const contentSlug = path.startsWith("blog/") ? path.slice(5) : path;
          if (lastmodMap[contentSlug]) {
            item.lastmod = lastmodMap[contentSlug];
            return item;
          }
          // 2) Everything else: most-recent git commit across the route's sources.
          const dates = sourceFilesFor(url.pathname).filter(existsSync).map(gitDate).filter(Boolean);
          if (dates.length) {
            item.lastmod = dates.reduce((a, b) => (new Date(b) > new Date(a) ? b : a));
          }
          return item;
        },
      });
    })(),
    pagefindIntegration(),
  ],
  markdown: {
    remarkPlugins: [stripLeadingH1Remark],
    rehypePlugins: [stripLeadingH1Rehype, promoteFirstHeadingRehype, externalLinksNewTabRehype],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
