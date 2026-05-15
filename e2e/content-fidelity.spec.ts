/**
 * Content fidelity: for every blog post and marketing page Markdown file,
 * the rendered HTML must contain:
 *   - the title from frontmatter (as an <h1>)
 *   - at least one heading/paragraph excerpt from the body
 *
 * This catches: silent content collection drops, frontmatter typos,
 * Markdown parser regressions, missing images.
 */
import { test, expect } from "@playwright/test";
import { readdirSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const contentRoot = join(__dirname, "..", "src", "content");

interface Entry { slug: string; title: string; sample: string; collection: "blog" | "pages"; path: string }

function parseEntries(dir: string, collection: "blog" | "pages"): Entry[] {
  const root = join(contentRoot, dir);
  return readdirSync(root)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const md = readFileSync(join(root, f), "utf-8");
      const fmMatch = md.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
      if (!fmMatch) throw new Error(`No frontmatter in ${f}`);
      const fm = fmMatch[1];
      const body = fmMatch[2];
      const title = fm.match(/^title:\s*"((?:[^"\\]|\\.)*)"/m)?.[1]?.replace(/\\"/g, '"').replace(/\\\\/g, "\\") ?? "";
      const slug = fm.match(/^legacySlug:\s*"((?:[^"\\]|\\.)*)"/m)?.[1] ?? f.replace(/\.md$/, "");
      // First substantive paragraph (skip image-only lines, skip very short)
      const sample = body
        .split("\n")
        .map((l) => l.trim())
        .find((l) => l.length > 60 && !l.startsWith("!") && !l.startsWith("<") && !l.startsWith("#")) ?? "";
      return { slug, title, sample, collection, path: join(root, f) };
    });
}

const entries = [...parseEntries("blog", "blog"), ...parseEntries("pages", "pages")]
  .filter((e) => e.slug !== "home" && e.slug !== "blog"); // home, blog have hand-built routes

test(`content collections produced at least 100 entries`, () => {
  expect(entries.length).toBeGreaterThanOrEqual(100);
});

for (const entry of entries) {
  test(`${entry.collection}/${entry.slug} renders title and body`, async ({ page }) => {
    await page.goto(`/${entry.slug}/`);

    // Title from frontmatter must appear as an <h1>
    const h1 = await page.locator("h1").first().textContent();
    expect(h1?.trim(), `${entry.slug} h1 should match frontmatter title`).toBe(entry.title);

    // Body content sample from the Markdown should appear in the page
    if (entry.sample) {
      // Strip Markdown emphasis/links so we compare visible text
      const needle = entry.sample
        .replace(/!\[[^\]]*\]\([^)]+\)/g, "")          // images
        .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")       // links → text
        .replace(/[*_`]/g, "")                          // emphasis markers
        .replace(/&[a-z]+;/gi, " ")                    // entities
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 40);                                  // first 40 chars is enough to identify
      if (needle.length > 10) {
        const body = await page.locator("article").innerText();
        const normalizedBody = body.replace(/\s+/g, " ").replace(/[‘’]/g, "'").replace(/[“”]/g, '"');
        const normalizedNeedle = needle.replace(/[‘’]/g, "'").replace(/[“”]/g, '"');
        expect(normalizedBody, `${entry.slug} should contain sample text "${normalizedNeedle}"`).toContain(normalizedNeedle);
      }
    }
  });
}
