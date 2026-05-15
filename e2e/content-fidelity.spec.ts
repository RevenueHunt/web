/**
 * Content fidelity: for every blog post and marketing page Markdown file,
 * the rendered HTML must contain:
 *   - the title from frontmatter (as an <h1>)
 *   - at least one substantive text excerpt from the body
 *
 * Uses request fixture (HTTP only) for speed. Decodes HTML entities so
 * the comparison is against visible text, not raw markup.
 */
import { test, expect } from "@playwright/test";
import { readdirSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const contentRoot = join(__dirname, "..", "src", "content");

interface Entry { slug: string; title: string; sample: string; collection: "blog" | "pages" }

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
      const title =
        fm.match(/^title:\s*"((?:[^"\\]|\\.)*)"/m)?.[1]?.replace(/\\"/g, '"').replace(/\\\\/g, "\\") ?? "";
      const slug = fm.match(/^legacySlug:\s*"((?:[^"\\]|\\.)*)"/m)?.[1] ?? f.replace(/\.md$/, "");
      // First substantive paragraph: skip images, raw HTML, headings, list
      // items, blockquotes — those render with structural wrappers that don't
      // survive plain-text extraction cleanly.
      const sample =
        body
          .split("\n")
          .map((l) => l.trim())
          .find(
            (l) =>
              l.length > 60 &&
              !l.startsWith("!") &&
              !l.startsWith("<") &&
              !l.startsWith("#") &&
              !l.startsWith("- ") &&
              !l.startsWith("-\t") &&
              !l.startsWith("* ") &&
              !l.startsWith("+ ") &&
              !l.startsWith("> ") &&
              !/^\d+\.\s/.test(l),
          ) ?? "";
      return { slug, title, sample, collection };
    });
}

function decodeHtmlEntities(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&hellip;/g, "…")
    .replace(/&mdash;/g, "—")
    .replace(/&ndash;/g, "–");
}

function htmlToText(html: string): string {
  return decodeHtmlEntities(
    html
      .replace(/<script[\s\S]*?<\/script>/g, "")
      .replace(/<style[\s\S]*?<\/style>/g, "")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " "),
  ).trim();
}

// Slugs that have hand-built routes (not rendered from Markdown). Keep in
// sync with the `explicitlyOverridden` set in src/pages/[slug]/index.astro.
const HAND_BUILT = new Set([
  "home",
  "blog",
  "integrations",
  "pricing",
  "demo",
  "newsletter",
  "sign-up",
  "message-sent",
  "jobs",
  "why-your-traffic-isnt-converting",
  "testimonials",
  "templates",
  "for-beauty-brands",
  "partners",
  "contact",
]);
const entries = [...parseEntries("blog", "blog"), ...parseEntries("pages", "pages")]
  .filter((e) => !HAND_BUILT.has(e.slug));

test(`content collections produced at least 95 entries`, () => {
  expect(entries.length).toBeGreaterThanOrEqual(95);
});

for (const entry of entries) {
  test(`${entry.collection}/${entry.slug} renders title and body`, async ({ request }) => {
    const res = await request.get(`/${entry.slug}/`);
    expect(res.status()).toBe(200);
    const html = await res.text();

    // H1 must match frontmatter title
    const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
    expect(h1Match, `${entry.slug} should render <h1>`).toBeTruthy();
    const h1Text = decodeHtmlEntities(h1Match![1].replace(/<[^>]+>/g, "")).trim();
    expect(h1Text, `${entry.slug} h1 should match frontmatter title`).toBe(entry.title);

    // Body sample text should appear in the visible page text.
    // We compare a whitespace-and-punctuation-normalized version on both sides
    // — rendered HTML often introduces extra whitespace around inline tags
    // (e.g. `<a>e-commerce</a>,` strips to `e-commerce ,`).
    if (entry.sample) {
      const normalize = (s: string) =>
        s
          .replace(/[‘’]/g, "'")
          .replace(/[“”]/g, '"')
          .replace(/[\s ]+/g, "")
          .toLowerCase();
      const rawNeedle = entry.sample
        .replace(/!\[[^\]]*\]\([^)]+\)/g, "")
        .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
        .replace(/[*_`]/g, "")
        .trim()
        .slice(0, 60);
      const needle = normalize(rawNeedle);
      if (needle.length > 10) {
        const haystack = normalize(htmlToText(html));
        expect(haystack, `${entry.slug} should contain "${rawNeedle}" (whitespace-normalized)`).toContain(needle);
      }
    }
  });
}
