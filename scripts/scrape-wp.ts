#!/usr/bin/env bun
/**
 * Pulls revenuehunt.com WordPress content into the Astro project.
 *
 * Blog posts → src/content/blog/<slug>.md (with Zod-validated frontmatter)
 * Pages      → _scraped/<slug>.html (reference only; rebuild in Astro+Tailwind by hand)
 * Images     → public/img/blog/<slug>/*
 *
 * Idempotent: wipes src/content/blog/ and _scraped/ on each run. Never touches src/pages/.
 *
 * Usage:
 *   bun run scrape                       # all content
 *   bun run scrape -- --posts            # blog only
 *   bun run scrape -- --pages            # marketing pages only
 *   bun run scrape -- --limit=5          # first N items per kind (smoke test)
 */
import { mkdir, rm, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";
import TurndownService from "turndown";

const SITE = "https://revenuehunt.com";
const PROJECT_ROOT = new URL("..", import.meta.url).pathname;
const BLOG_DIR = join(PROJECT_ROOT, "src/content/blog");
const PAGES_DIR = join(PROJECT_ROOT, "src/content/pages");
const SCRAPED_DIR = join(PROJECT_ROOT, "_scraped");
const IMG_DIR = join(PROJECT_ROOT, "public/img/blog");
const PAGE_IMG_DIR = join(PROJECT_ROOT, "public/img/pages");

const args = process.argv.slice(2);
const ONLY_POSTS = args.includes("--posts");
const ONLY_PAGES = args.includes("--pages");
const LIMIT = (() => {
  const a = args.find((x) => x.startsWith("--limit="));
  return a ? parseInt(a.split("=")[1], 10) : Infinity;
})();

interface WPPost {
  id: number;
  date_gmt: string;
  modified_gmt: string;
  slug: string;
  link: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  featured_media: number;
  categories: number[];
  tags: number[];
  yoast_head_json?: { description?: string; og_image?: { url: string }[] };
  _embedded?: {
    author?: { name: string }[];
    "wp:featuredmedia"?: { source_url: string; alt_text?: string }[];
    "wp:term"?: { name: string; taxonomy: string }[][];
  };
}

interface WPPage extends WPPost {}

const turndown = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
  bulletListMarker: "-",
  emDelimiter: "_",
});
// Preserve <table>, <iframe>, <video>, <pre> as raw HTML (Turndown's table support is brittle).
turndown.keep(["table", "iframe", "video", "pre", "figure"]);
// Strip WP/Yoast cruft.
turndown.remove(["script", "style", "noscript"]);

function decodeEntities(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&hellip;/g, "…")
    .replace(/&mdash;/g, "—")
    .replace(/&ndash;/g, "–")
    .replace(/&nbsp;/g, " ")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(parseInt(n, 10)));
}

function htmlToText(html: string): string {
  return decodeEntities(html.replace(/<[^>]+>/g, "")).trim();
}

function ymlEscape(s: string): string {
  return `"${s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, " ").trim()}"`;
}

async function fetchAll<T>(endpoint: string): Promise<T[]> {
  const out: T[] = [];
  let page = 1;
  let totalPages = 1;
  do {
    const url = `${SITE}/wp-json/wp/v2/${endpoint}?per_page=100&page=${page}&_embed=true`;
    const res = await fetch(url, { headers: { "User-Agent": "revenuehunt-web-scraper/1" } });
    if (!res.ok) throw new Error(`${url} → ${res.status} ${res.statusText}`);
    totalPages = parseInt(res.headers.get("x-wp-totalpages") ?? "1", 10);
    const batch = (await res.json()) as T[];
    out.push(...batch);
    page++;
  } while (page <= totalPages && out.length < LIMIT);
  return out.slice(0, LIMIT);
}

function sanitizeFilename(raw: string): string {
  // Decode any URL-encoded chars (catches Substack/WP proxy URLs that smuggle
  // an inner URL through the path) and force safe filesystem chars.
  let name = raw;
  try { name = decodeURIComponent(name); } catch { /* leave as-is */ }
  // If decoding revealed an embedded URL, keep only its tail segment.
  if (name.includes("://")) {
    const parts = name.split("/");
    name = parts[parts.length - 1] || "image";
  }
  name = name.replace(/[^a-zA-Z0-9._-]+/g, "_");
  if (name.length > 150) name = name.slice(-150);
  if (!name || name === "_") name = "image";
  return name;
}

async function downloadImage(url: string, destDir: string): Promise<string | null> {
  try {
    const rawTail = url.split("/").pop()?.split("?")[0] ?? "image";
    const filename = sanitizeFilename(rawTail);
    const dest = join(destDir, filename);
    if (existsSync(dest)) return filename;
    const res = await fetch(url);
    if (!res.ok) return null;
    await mkdir(destDir, { recursive: true });
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(dest, buf);
    return filename;
  } catch {
    return null;
  }
}

function rewriteInlineImages(html: string, kind: "blog" | "pages", slug: string, downloads: { src: string; localName: string }[]): string {
  let out = html;
  for (const d of downloads) {
    const escapedSrc = d.src.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    out = out.replace(new RegExp(escapedSrc, "g"), `/img/${kind}/${slug}/${d.localName}`);
  }
  return out;
}

async function collectInlineImageUrls(html: string): Promise<string[]> {
  const urls = new Set<string>();
  for (const m of html.matchAll(/<img[^>]+src=["']([^"']+)["']/g)) urls.add(m[1]);
  return Array.from(urls).filter((u) => u.startsWith("http"));
}

async function writePost(p: WPPost): Promise<void> {
  const author = p._embedded?.author?.[0]?.name ?? "RevenueHunt";
  const featured = p._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? null;
  const terms = (p._embedded?.["wp:term"] ?? []).flat();
  const categories = terms.filter((t) => t.taxonomy === "category").map((t) => t.name);
  const tags = terms.filter((t) => t.taxonomy === "post_tag").map((t) => t.name);
  const title = decodeEntities(p.title.rendered);
  const description = htmlToText(p.yoast_head_json?.description ?? p.excerpt.rendered).slice(0, 280);

  // Download featured image + inline images
  const slugDir = join(IMG_DIR, p.slug);
  let featuredLocal: string | null = null;
  if (featured) featuredLocal = await downloadImage(featured, slugDir);

  const inlineUrls = await collectInlineImageUrls(p.content.rendered);
  const downloads: { src: string; localName: string }[] = [];
  for (const u of inlineUrls) {
    const localName = await downloadImage(u, slugDir);
    if (localName) downloads.push({ src: u, localName });
  }

  const rewritten = rewriteInlineImages(p.content.rendered, "blog", p.slug, downloads);
  const md = turndown.turndown(rewritten);

  const fm = [
    "---",
    `title: ${ymlEscape(title)}`,
    `description: ${ymlEscape(description)}`,
    `pubDate: ${p.date_gmt}Z`,
    `updatedDate: ${p.modified_gmt}Z`,
    tags.length ? `tags:\n${tags.map((t) => `  - ${ymlEscape(t)}`).join("\n")}` : "tags: []",
    categories.length ? `categories:\n${categories.map((c) => `  - ${ymlEscape(c)}`).join("\n")}` : "categories: []",
    `author: ${ymlEscape(author)}`,
    `legacySlug: ${ymlEscape(p.slug)}`,
    `legacyId: ${p.id}`,
    `legacyUrl: ${ymlEscape(p.link)}`,
    featuredLocal ? `featuredImage: ${ymlEscape(`/img/blog/${p.slug}/${featuredLocal}`)}` : "featuredImage: null",
    "draft: false",
    "---",
    "",
    md,
    "",
  ].join("\n");

  await writeFile(join(BLOG_DIR, `${p.slug}.md`), fm);
}

/** Fall back to scraping live HTML when the REST API returns empty or thin
 *  content. Some WP pages (testimonials, FAQ, message-sent) render entirely
 *  via templates/plugins outside of content.rendered. */
async function htmlFallbackBody(pageUrl: string): Promise<string | null> {
  try {
    const res = await fetch(pageUrl, { headers: { "User-Agent": "Mozilla/5.0 revenuehunt-web-scraper/1" } });
    if (!res.ok) return null;
    const html = await res.text();
    // Strip scripts/styles before any matching — they often span large ranges
    // and confuse greedy regexes.
    let clean = html
      .replace(/<script[\s\S]*?<\/script>/gi, "")
      .replace(/<style[\s\S]*?<\/style>/gi, "")
      .replace(/<noscript[\s\S]*?<\/noscript>/gi, "");

    // Try several common WP content container patterns. The last pattern
    // (slice between </header> and <footer>) is RevenueHunt's custom theme.
    const containers: RegExp[] = [
      /<main[^>]*id=["']main-content["'][^>]*>([\s\S]*?)<\/main>/i,
      /<main[^>]*>([\s\S]*?)<\/main>/i,
      /<article[^>]*>([\s\S]*?)<\/article>/i,
      /<div[^>]+class=["'][^"']*(?:entry-content|page-content|site-content)[^"']*["'][^>]*>([\s\S]*?)<\/div>\s*<\/(?:main|article|section)>/i,
      // Last-resort: everything between </header> and <footer> (catches custom themes)
      /<\/header>([\s\S]*?)<footer/i,
    ];
    for (const re of containers) {
      const m = clean.match(re);
      if (m && m[1].replace(/<[^>]+>/g, "").trim().length > 200) {
        return m[1];
      }
    }
    return null;
  } catch {
    return null;
  }
}

async function writePage(p: WPPage): Promise<void> {
  const featured = p._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? null;
  const slugDir = join(PAGE_IMG_DIR, p.slug);
  let featuredLocal: string | null = null;
  if (featured) featuredLocal = await downloadImage(featured, slugDir);

  let sourceHtml = p.content.rendered;
  const visibleLen = sourceHtml.replace(/<[^>]+>/g, "").trim().length;
  if (visibleLen < 200) {
    const fallback = await htmlFallbackBody(p.link);
    if (fallback) {
      sourceHtml = fallback;
      console.log(`\n  ↳ HTML fallback used for ${p.slug} (REST was ${visibleLen} chars)`);
    }
  }

  const inlineUrls = await collectInlineImageUrls(sourceHtml);
  const downloads: { src: string; localName: string }[] = [];
  for (const u of inlineUrls) {
    const localName = await downloadImage(u, slugDir);
    if (localName) downloads.push({ src: u, localName });
  }
  const rewritten = rewriteInlineImages(sourceHtml, "pages", p.slug, downloads);

  // Reference HTML (raw, for diffing against the rebuilt Astro page)
  const html = [
    `<!-- legacyId=${p.id} legacySlug=${p.slug} legacyUrl=${p.link} -->`,
    `<!-- title: ${decodeEntities(p.title.rendered)} -->`,
    `<!-- pubDate=${p.date_gmt} modified=${p.modified_gmt} -->`,
    `<!-- yoastDescription: ${(p.yoast_head_json?.description ?? "").replace(/-->/g, "--&gt;")} -->`,
    "",
    rewritten,
    "",
  ].join("\n");
  await writeFile(join(SCRAPED_DIR, `${p.slug}.html`), html);

  // Content collection entry: rendered as a real route by [...slug].astro until a hand-built version replaces it.
  const title = decodeEntities(p.title.rendered);
  const description = htmlToText(p.yoast_head_json?.description ?? p.excerpt.rendered).slice(0, 280);
  const md = turndown.turndown(rewritten);
  const fm = [
    "---",
    `title: ${ymlEscape(title)}`,
    `description: ${ymlEscape(description)}`,
    `pubDate: ${p.date_gmt}Z`,
    `updatedDate: ${p.modified_gmt}Z`,
    `legacySlug: ${ymlEscape(p.slug)}`,
    `legacyId: ${p.id}`,
    `legacyUrl: ${ymlEscape(p.link)}`,
    featuredLocal ? `featuredImage: ${ymlEscape(`/img/pages/${p.slug}/${featuredLocal}`)}` : "featuredImage: null",
    "draft: false",
    "---",
    "",
    md,
    "",
  ].join("\n");
  await writeFile(join(PAGES_DIR, `${p.slug}.md`), fm);
}

async function main() {
  const doPosts = !ONLY_PAGES;
  const doPages = !ONLY_POSTS;

  if (doPosts) {
    if (existsSync(BLOG_DIR)) await rm(BLOG_DIR, { recursive: true, force: true });
    await mkdir(BLOG_DIR, { recursive: true });
    if (existsSync(IMG_DIR)) await rm(IMG_DIR, { recursive: true, force: true });
    await mkdir(IMG_DIR, { recursive: true });
  }
  if (doPages) {
    if (existsSync(SCRAPED_DIR)) await rm(SCRAPED_DIR, { recursive: true, force: true });
    await mkdir(SCRAPED_DIR, { recursive: true });
    if (existsSync(PAGES_DIR)) await rm(PAGES_DIR, { recursive: true, force: true });
    await mkdir(PAGES_DIR, { recursive: true });
    if (existsSync(PAGE_IMG_DIR)) await rm(PAGE_IMG_DIR, { recursive: true, force: true });
    await mkdir(PAGE_IMG_DIR, { recursive: true });
  }

  if (doPosts) {
    console.log("Fetching posts…");
    const posts = await fetchAll<WPPost>("posts");
    console.log(`  got ${posts.length} posts`);
    let i = 0;
    for (const p of posts) {
      i++;
      process.stdout.write(`\r  writing ${i}/${posts.length}: ${p.slug}${" ".repeat(40)}`);
      await writePost(p);
    }
    console.log(`\n  done. → ${BLOG_DIR}`);
  }

  if (doPages) {
    console.log("Fetching pages…");
    const pages = await fetchAll<WPPage>("pages");
    console.log(`  got ${pages.length} pages`);
    let i = 0;
    for (const p of pages) {
      i++;
      process.stdout.write(`\r  writing ${i}/${pages.length}: ${p.slug}${" ".repeat(40)}`);
      await writePage(p);
    }
    console.log(`\n  done. → ${SCRAPED_DIR}`);
  }
}

await main();
