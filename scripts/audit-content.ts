#!/usr/bin/env bun
/**
 * Build-time content audit. Walks every content collection entry, verifies:
 *   1. dist/<slug>/index.html exists
 *   2. that HTML contains the title from frontmatter
 *   3. every <img> referenced in the rendered HTML resolves to a file under dist/
 *
 * Reports a pass/fail count and a list of misses. Exit code != 0 if any miss.
 *
 * Usage:
 *   bun run build && bun scripts/audit-content.ts
 */
import { readdirSync, readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const DIST = join(ROOT, "dist");
const CONTENT_DIRS: { dir: string; collection: string }[] = [
  { dir: "src/content/blog", collection: "blog" },
  { dir: "src/content/pages", collection: "pages" },
];

interface Miss { slug: string; collection: string; reason: string }
const misses: Miss[] = [];
let checked = 0;
let imagesChecked = 0;
let imageMisses = 0;

for (const { dir, collection } of CONTENT_DIRS) {
  const root = join(ROOT, dir);
  if (!existsSync(root)) continue;
  for (const file of readdirSync(root).filter((f) => f.endsWith(".md"))) {
    const md = readFileSync(join(root, file), "utf-8");
    const fm = md.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? "";
    const title = fm.match(/^title:\s*"((?:[^"\\]|\\.)*)"/m)?.[1]?.replace(/\\"/g, '"') ?? "";
    const slug = fm.match(/^legacySlug:\s*"((?:[^"\\]|\\.)*)"/m)?.[1] ?? file.replace(/\.md$/, "");

    // Hand-built routes — these have their own copy that doesn't need to match
    // the scraped frontmatter title. Keep in sync with explicitlyOverridden
    // in src/pages/[slug]/index.astro.
    const HAND_BUILT = new Set([
      "home", "blog", "integrations", "pricing",
      "demo", "newsletter", "sign-up", "message-sent", "jobs",
      "why-your-traffic-isnt-converting",
    ]);
    if (HAND_BUILT.has(slug)) continue;

    checked++;
    const htmlPath = join(DIST, slug, "index.html");
    if (!existsSync(htmlPath)) {
      misses.push({ slug, collection, reason: `dist/${slug}/index.html does not exist` });
      continue;
    }
    const html = readFileSync(htmlPath, "utf-8");

    // Title check (must appear in HTML — could be inside <h1>, <title>, etc.)
    if (!html.includes(title) && !html.includes(escapeHtml(title))) {
      misses.push({ slug, collection, reason: `rendered HTML missing title "${title.slice(0, 60)}"` });
    }

    // Image existence check. Browsers URL-decode src paths before filesystem lookup,
    // so we must too — e.g. %E2%80%91 → ‑ (non-breaking hyphen).
    for (const m of html.matchAll(/<img[^>]+src=["'](\/[^"']+)["']/g)) {
      imagesChecked++;
      const decoded = decodeURIComponent(m[1].split("?")[0]);
      const imgPath = join(DIST, decoded);
      if (!existsSync(imgPath)) {
        imageMisses++;
        misses.push({ slug, collection, reason: `image not found at dist${decoded}` });
      }
    }
  }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

console.log(`Checked ${checked} content entries (${imagesChecked} image refs).`);
if (misses.length === 0) {
  console.log("✓ All content rendered with expected title + images.");
  process.exit(0);
}
console.log(`✗ ${misses.length} misses (${imageMisses} image misses):\n`);
const grouped = new Map<string, Miss[]>();
for (const m of misses) {
  const k = `${m.collection}/${m.slug}`;
  grouped.set(k, [...(grouped.get(k) ?? []), m]);
}
for (const [k, ms] of grouped) {
  console.log(`  ${k}`);
  for (const m of ms) console.log(`    - ${m.reason}`);
}
process.exit(1);
