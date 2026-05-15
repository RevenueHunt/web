/**
 * Blog archives: every category and tag derived from blog frontmatter
 * resolves to a /cat/<slug>/ or /tag/<slug>/ page with the right h1
 * and at least one post link.
 */
import { test, expect } from "@playwright/test";
import { readdirSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const blogRoot = join(__dirname, "..", "src", "content", "blog");

function decode(s: string): string {
  return s
    .replace(/&#0?38;/g, "&")
    .replace(/&amp;/g, "&")
    .replace(/&#0?39;/g, "'")
    .replace(/&apos;/g, "'");
}

function slugify(s: string): string {
  return decode(s)
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/&/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function display(s: string): string {
  return decode(s);
}

function readList(fm: string, key: string): string[] {
  const m = fm.match(new RegExp(`^${key}:\\s*\\n((?:\\s+-\\s.*\\n?)*)`, "m"));
  if (!m) return [];
  return Array.from(m[1].matchAll(/^\s+-\s*"((?:[^"\\]|\\.)*)"/gm)).map((x) =>
    x[1].replace(/\\"/g, '"'),
  );
}

const categories = new Map<string, string>();
const tags = new Map<string, string>();

for (const file of readdirSync(blogRoot).filter((f) => f.endsWith(".md"))) {
  const md = readFileSync(join(blogRoot, file), "utf-8");
  const fm = md.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? "";
  for (const c of readList(fm, "categories")) {
    const s = slugify(c);
    if (s && !categories.has(s)) categories.set(s, display(c));
  }
  for (const t of readList(fm, "tags")) {
    const s = slugify(t);
    if (s && !tags.has(s)) tags.set(s, display(t));
  }
}

test("at least 5 categories and 10 tags discovered", () => {
  expect(categories.size).toBeGreaterThanOrEqual(5);
  expect(tags.size).toBeGreaterThanOrEqual(10);
});

for (const [slug, name] of categories) {
  test(`GET /cat/${slug}/`, async ({ request }) => {
    const res = await request.get(`/cat/${slug}/`);
    expect(res.status()).toBe(200);
    const html = await res.text();
    const h1 = decode(
      html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1]?.replace(/<[^>]+>/g, "").trim() ?? "",
    );
    expect(h1).toBe(name);
    // At least one post link present
    expect(html).toMatch(/href="\/[^"]+\/"[^>]*class="group/);
  });
}

for (const [slug, name] of tags) {
  test(`GET /tag/${slug}/`, async ({ request }) => {
    const res = await request.get(`/tag/${slug}/`);
    expect(res.status()).toBe(200);
    const html = await res.text();
    const h1 = decode(
      html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1]?.replace(/<[^>]+>/g, "").trim() ?? "",
    );
    expect(h1).toBe(`#${name}`);
    expect(html).toMatch(/href="\/[^"]+\/"[^>]*class="group/);
  });
}

test("/blog/ hosts the inline Pagefind search input", async ({ request }) => {
  const res = await request.get("/blog/");
  expect(res.status()).toBe(200);
  const html = await res.text();
  expect(html).toMatch(/id="blog-search"/);
  expect(html).toMatch(/\/pagefind\/pagefind-ui\.css/);
});

test("Pagefind bundle was emitted into dist/pagefind/", async ({ request }) => {
  const res = await request.get("/pagefind/pagefind-ui.js");
  expect(res.status()).toBe(200);
});
