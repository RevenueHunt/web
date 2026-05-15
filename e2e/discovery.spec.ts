/**
 * Discovery files: robots.txt, llms.txt, agents.txt, sitemap-index.xml,
 * feed.xml. Must all serve 200 with the right content-type and contain
 * the canonical site URL.
 */
import { test, expect } from "@playwright/test";

test("robots.txt allows AI bots and references sitemap", async ({ request }) => {
  const res = await request.get("/robots.txt");
  expect(res.status()).toBe(200);
  const body = await res.text();
  for (const bot of ["GPTBot", "ClaudeBot", "PerplexityBot", "Google-Extended", "CCBot", "anthropic-ai", "cohere-ai"]) {
    expect(body, `robots.txt should allow ${bot}`).toMatch(new RegExp(`User-agent:\\s*${bot}[\\s\\S]*?Allow:\\s*/`));
  }
  expect(body).toMatch(/Sitemap:\s+https:\/\/revenuehunt\.com\//);
});

test("llms.txt present and references key pages", async ({ request }) => {
  const res = await request.get("/llms.txt");
  expect(res.status()).toBe(200);
  const body = await res.text();
  expect(body).toContain("# RevenueHunt");
  expect(body).toContain("/pricing/");
  expect(body).toContain("/blog/");
});

test("agents.txt present", async ({ request }) => {
  const res = await request.get("/agents.txt");
  expect(res.status()).toBe(200);
});

test("sitemap-index.xml lists at least one sub-sitemap with >=100 URLs", async ({ request }) => {
  const index = await request.get("/sitemap-index.xml");
  expect(index.status()).toBe(200);
  const indexBody = await index.text();
  const sub = indexBody.match(/<loc>([^<]+)<\/loc>/)?.[1];
  expect(sub, "sitemap-index should contain at least one <loc>").toBeTruthy();
  const subPath = new URL(sub!).pathname;
  const subRes = await request.get(subPath);
  expect(subRes.status()).toBe(200);
  const subBody = await subRes.text();
  const urlCount = (subBody.match(/<loc>/g) ?? []).length;
  expect(urlCount).toBeGreaterThanOrEqual(100);
});

test("feed.xml is valid RSS with posts", async ({ request }) => {
  const res = await request.get("/feed.xml");
  expect(res.status()).toBe(200);
  const body = await res.text();
  expect(body).toContain("<rss");
  expect(body).toContain("<channel>");
  const itemCount = (body.match(/<item>/g) ?? []).length;
  expect(itemCount).toBeGreaterThanOrEqual(50);
});
