/**
 * Generate Open Graph PNGs for the site.
 *
 * Reads page titles from src/content/pages/* and bespoke routes, renders each
 * with Satori into an SVG, then converts to PNG via @resvg/resvg-js, and
 * writes to public/og/<slug>.png. Also emits /og-default.png.
 *
 * Run before `astro build`. Idempotent.
 */
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";

// fileURLToPath handles Windows drive letters; `.pathname` would yield
// "/C:/..." which breaks path joins and mkdir on Windows.
const ROOT = fileURLToPath(new URL("..", import.meta.url));
const OUT_DIR = join(ROOT, "public", "og");
const FONTS_DIR = join(ROOT, "public", "fonts");

const W = 1200;
const H = 630;

interface OgPage {
  slug: string; // file slug, "" for default
  title: string;
  subtitle: string;
}

function frontmatter(md: string): Record<string, string> {
  const m = md.match(/^---\n([\s\S]+?)\n---/);
  if (!m) return {};
  const out: Record<string, string> = {};
  for (const line of m[1]!.split("\n")) {
    const kv = line.match(/^(\w+):\s*"?([^"]*?)"?\s*$/);
    if (kv) out[kv[1]!] = kv[2]!;
  }
  return out;
}

const TAGLINE = "Product recommendation quizzes that turn browsers into buyers";

const BESPOKE: OgPage[] = [
  { slug: "default", title: "RevenueHunt", subtitle: TAGLINE },
  { slug: "index", title: "RevenueHunt", subtitle: TAGLINE },
  {
    slug: "pricing",
    title: "Pricing",
    subtitle: "Free plan. Paid plans from $39/mo. 15-day free trial.",
  },
  { slug: "demo", title: "Book a demo", subtitle: "30-minute walkthrough of the quiz builder, live on a real store." },
  { slug: "contact", title: "Contact", subtitle: "Support, sales, and partnership inquiries — replies in ~2-3 hours." },
  { slug: "blog", title: "Blog", subtitle: "Guides, case studies, and tactics for eCommerce quiz funnels." },
  { slug: "integrations", title: "Integrations", subtitle: "Klaviyo, Mailchimp, GA4, Meta Pixel, Zapier, and more." },
  { slug: "testimonials", title: "Testimonials", subtitle: "What 20,000+ merchants say about RevenueHunt." },
  { slug: "templates", title: "Quiz templates", subtitle: "Ready-to-use templates for skincare, supplements, fashion, and more." },
  { slug: "partners", title: "Partners & affiliates", subtitle: "Grow your agency with our partner program." },
  { slug: "for-beauty-brands", title: "For beauty brands", subtitle: "Resources, tutorials, and strategies for beauty eCommerce." },
  { slug: "zero-party-data", title: "Zero-party data", subtitle: "Why and how to collect data your customers volunteer." },
  { slug: "first-party-data", title: "First-party data", subtitle: "What it is, how to collect it on Shopify, and why it matters in 2026." },
  { slug: "ecommerce-sales-funnel-examples", title: "11 ecommerce funnel examples", subtitle: "Real DTC funnels that convert — Function of Beauty, Stitch Fix, Casper, and more." },
  { slug: "faqs", title: "FAQs", subtitle: "Answers to common questions about RevenueHunt." },
  {
    slug: "how-it-works",
    title: "How it works",
    subtitle: "From shopper question to results page — how the recommendation engine maps answers to products.",
  },
  {
    slug: "quiz-readiness-assessment",
    title: "Quiz readiness assessment",
    subtitle: "3-minute assessment + a step-by-step plan to grow eCommerce sales.",
  },
  { slug: "jobs", title: "Jobs", subtitle: "Join a small, distributed team building quizzes for 20,000+ brands." },
  { slug: "compare-octane-ai", title: "RevenueHunt vs Octane AI", subtitle: "The Octane AI alternative for Shopify — free plan, no watermark, unlimited quizzes." },
  { slug: "compare-typeform", title: "RevenueHunt vs Typeform", subtitle: "The ecommerce product quiz Typeform isn't — recommends real products on Shopify." },
  { slug: "compare-zoovu", title: "RevenueHunt vs Zoovu", subtitle: "A focused, self-serve Shopify quiz — not an enterprise discovery suite." },
  { slug: "compare-jebbit", title: "RevenueHunt vs Jebbit", subtitle: "A standalone, self-serve Shopify quiz — Jebbit is now part of BlueConic." },
  { slug: "compare-nosto", title: "RevenueHunt vs Nosto", subtitle: "A focused, self-serve zero-party quiz — not an enterprise personalization suite." },
  { slug: "compare-tolstoy", title: "RevenueHunt vs Tolstoy", subtitle: "A quiz-first product recommendation tool — not a video platform with a quiz add-on." },
];

const PLATFORM_TITLES: Record<string, string> = {
  "product-recommendation-quiz-shopify": "Quiz for Shopify",
  "product-recommendation-quiz-woocommerce": "Quiz for WooCommerce",
  "product-recommendation-quiz-bigcommerce": "Quiz for BigCommerce",
  "product-recommendation-quiz-standalone-google-product-feed":
    "Quiz with Google Product Feed",
  "product-recommendation-quiz-wix-stores": "Quiz for Wix Stores",
  "product-recommendation-quiz-for-squarespace-commerce": "Quiz for Squarespace",
  "product-recommendation-quiz-for-magento": "Quiz for Magento",
};

function svgTemplate({ title, subtitle }: { title: string; subtitle: string }) {
  return {
    type: "div",
    props: {
      style: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        padding: "72px 80px",
        background: "linear-gradient(135deg, #0F0F14 0%, #16161D 50%, #1F1F2A 100%)",
        color: "white",
        fontFamily: "Inter",
      },
      children: [
        {
          type: "div",
          props: {
            style: { display: "flex", fontSize: 32, fontWeight: 700, letterSpacing: "-0.02em" },
            children: "RevenueHunt",
          },
        },
        {
          type: "div",
          props: {
            style: { display: "flex", flexDirection: "column", gap: "20px" },
            children: [
              {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    fontSize: 76,
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                    lineHeight: 1.05,
                  },
                  children: title,
                },
              },
              {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    fontSize: 32,
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.72)",
                    lineHeight: 1.3,
                  },
                  children: subtitle,
                },
              },
            ],
          },
        },
      ],
    },
  } as const;
}

async function loadFonts() {
  const [bold, semiBold] = await Promise.all([
    readFile(join(FONTS_DIR, "Inter-Bold.ttf")),
    readFile(join(FONTS_DIR, "Inter-SemiBold.ttf")),
  ]);
  return [
    { name: "Inter", data: bold, weight: 700, style: "normal" },
    { name: "Inter", data: semiBold, weight: 600, style: "normal" },
  ] as const;
}

async function renderOne(page: OgPage, fonts: Awaited<ReturnType<typeof loadFonts>>) {
  const svg = await satori(svgTemplate(page), {
    width: W,
    height: H,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fonts: fonts as any,
  });
  const png = new Resvg(svg, { fitTo: { mode: "width", value: W } })
    .render()
    .asPng();
  const fname = page.slug === "default" ? "og-default.png" : `${page.slug}.png`;
  const outPath = page.slug === "default" ? join(ROOT, "public", fname) : join(OUT_DIR, fname);
  await writeFile(outPath, png);
  return outPath;
}

async function main() {
  if (!existsSync(OUT_DIR)) await mkdir(OUT_DIR, { recursive: true });

  const fonts = await loadFonts();

  // Collect content-page titles to expand coverage beyond the bespoke list.
  const pagesDir = join(ROOT, "src", "content", "pages");
  const files = await readdir(pagesDir);
  const fromMarkdown: OgPage[] = [];
  for (const f of files) {
    if (!f.endsWith(".md")) continue;
    const slug = f.replace(/\.md$/, "");
    if (BESPOKE.some((b) => b.slug === slug)) continue;
    const md = await readFile(join(pagesDir, f), "utf8");
    const fm = frontmatter(md);
    const title = PLATFORM_TITLES[slug] ?? fm.title ?? slug;
    const subtitle = fm.description?.slice(0, 140) ?? TAGLINE;
    fromMarkdown.push({ slug, title, subtitle });
  }

  const all = [...BESPOKE, ...fromMarkdown];
  console.log(`Rendering ${all.length} OG images → public/og/`);

  for (const page of all) {
    const out = await renderOne(page, fonts);
    console.log(`  ✓ ${out.replace(ROOT, "")}`);
  }
}

await main();
