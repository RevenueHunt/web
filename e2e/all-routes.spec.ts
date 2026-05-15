/**
 * Exhaustive smoke test: every URL in dist/sitemap-0.xml must return 200,
 * have a non-empty <title>, have a meaningful <main> body, and have
 * canonical + OG meta. Catches broken routes, missing content collection
 * entries, and accidental noindex flags.
 *
 * Read URLs from the built sitemap rather than hard-coding — that way the
 * test list stays in sync with the actual build output.
 */
import { test, expect } from "@playwright/test";
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const sitemapPath = join(__dirname, "..", "dist", "sitemap-0.xml");
const sitemap = readFileSync(sitemapPath, "utf-8");
const urls = Array.from(sitemap.matchAll(/<loc>([^<]+)<\/loc>/g))
  .map((m) => new URL(m[1]).pathname);

test(`sitemap has at least 100 URLs`, () => {
  expect(urls.length).toBeGreaterThanOrEqual(100);
});

for (const path of urls) {
  test(`GET ${path}`, async ({ page }) => {
    const res = await page.goto(path);
    expect(res?.status(), `${path} should return 200`).toBe(200);

    // Title present and not the default Astro placeholder
    const title = await page.title();
    expect(title.length, `${path} should have a non-empty title`).toBeGreaterThan(5);
    expect(title).not.toBe("Astro");

    // Canonical link points back to the same path
    const canonical = await page.locator('link[rel="canonical"]').getAttribute("href");
    expect(canonical, `${path} should have <link rel=canonical>`).toBeTruthy();
    expect(new URL(canonical!).pathname).toBe(path);

    // OG meta
    const ogTitle = await page.locator('meta[property="og:title"]').getAttribute("content");
    expect(ogTitle, `${path} should have og:title`).toBeTruthy();

    // Body has real content (not just chrome). Header + Footer plus content
    // should put any real page well above 500 chars; an empty page would be
    // ~150 chars (header text only).
    const bodyText = (await page.locator("body").innerText()).trim();
    expect(bodyText.length, `${path} should have non-trivial body content`).toBeGreaterThan(500);

    // Header + Footer present (every page should render full chrome)
    await expect(page.locator("header").first()).toBeVisible();
    await expect(page.locator("footer").first()).toBeVisible();

    // No accidental noindex on production pages
    const robots = await page.locator('meta[name="robots"]').first().getAttribute("content").catch(() => null);
    expect(robots, `${path} should not be noindex by default`).not.toMatch(/noindex/i);
  });
}
