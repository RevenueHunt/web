/**
 * Exhaustive smoke test: every URL in dist/sitemap-0.xml must return 200,
 * have a non-empty <title>, canonical pointing back to itself, OG meta,
 * header + footer rendered, and a non-trivial body.
 *
 * Uses Playwright's `request` fixture (HTTP only, no browser) for speed —
 * regex assertions against the raw HTML are sufficient for these checks.
 * Browser-based content-fidelity is a separate spec.
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
  test(`GET ${path}`, async ({ request }) => {
    const res = await request.get(path);
    expect(res.status(), `${path} should return 200`).toBe(200);
    const html = await res.text();

    const title = html.match(/<title>([^<]+)<\/title>/)?.[1]?.trim() ?? "";
    expect(title.length, `${path} should have a non-empty title`).toBeGreaterThan(5);
    expect(title, `${path} should have a real title, not "Astro"`).not.toBe("Astro");

    const canonical = html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/)?.[1] ?? "";
    expect(canonical, `${path} should have <link rel=canonical>`).toBeTruthy();
    expect(new URL(canonical).pathname, `${path} canonical should match path`).toBe(path);

    expect(html, `${path} should have og:title`).toMatch(/<meta[^>]+property="og:title"/);
    expect(html, `${path} should have og:description`).toMatch(/<meta[^>]+property="og:description"/);
    expect(html, `${path} should render <header>`).toMatch(/<header[^>]*>/);
    expect(html, `${path} should render <footer>`).toMatch(/<footer[^>]*>/);

    // Strip tags + whitespace to estimate visible content length
    const text = html.replace(/<script[\s\S]*?<\/script>/g, "")
                     .replace(/<style[\s\S]*?<\/style>/g, "")
                     .replace(/<[^>]+>/g, " ")
                     .replace(/\s+/g, " ")
                     .trim();
    expect(text.length, `${path} should have non-trivial body content`).toBeGreaterThan(500);

    // No accidental noindex. /message-sent/ is intentionally noindex (form
    // confirmation page); allowlist it.
    const ALLOW_NOINDEX = new Set(["/message-sent/"]);
    if (!ALLOW_NOINDEX.has(path)) {
      expect(html, `${path} should not be noindex by default`).not.toMatch(
        /<meta[^>]+name="robots"[^>]+content="[^"]*noindex/i,
      );
    }
  });
}
