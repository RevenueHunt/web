/**
 * Every internal link in the site chrome (header + footer) must resolve.
 * Catches: silent typo'd hrefs, renamed slugs, orphaned nav entries.
 * External links (docs.revenuehunt.com, app.revenuehunt.com) are skipped —
 * they live on other systems.
 */
import { test, expect } from "@playwright/test";

test("every internal href on / resolves to 200", async ({ request }) => {
  const home = await request.get("/");
  expect(home.status()).toBe(200);
  const html = await home.text();

  // Collect every href in <header>...</header> and <footer>...</footer>
  const chunks = [
    html.match(/<header[\s\S]*?<\/header>/)?.[0] ?? "",
    html.match(/<footer[\s\S]*?<\/footer>/)?.[0] ?? "",
  ].join("\n");
  const hrefs = Array.from(chunks.matchAll(/href="([^"]+)"/g)).map((m) => m[1]);

  const internal = Array.from(
    new Set(
      hrefs.filter(
        (h) =>
          h.startsWith("/") &&
          !h.startsWith("//") &&
          !h.startsWith("/feed.xml") === false || h === "/feed.xml" || (h.startsWith("/") && !h.startsWith("//")),
      ),
    ),
  ).filter((h) => h.startsWith("/") && !h.startsWith("//"));

  expect(internal.length, "chrome should expose several internal links").toBeGreaterThan(10);

  const broken: { href: string; status: number }[] = [];
  for (const href of internal) {
    const res = await request.get(href);
    if (res.status() !== 200) broken.push({ href, status: res.status() });
  }
  expect(broken, `broken chrome links: ${JSON.stringify(broken)}`).toEqual([]);
});

test("external chrome links use HTTPS, and target=_blank links have rel=noopener", async ({ request }) => {
  const home = await request.get("/");
  const html = await home.text();
  const chunks = [
    html.match(/<header[\s\S]*?<\/header>/)?.[0] ?? "",
    html.match(/<footer[\s\S]*?<\/footer>/)?.[0] ?? "",
  ].join("\n");

  const externals = Array.from(
    chunks.matchAll(/<a[^>]+href="(https?:\/\/[^"]+)"[^>]*>/g),
  ).map((m) => ({ href: m[1], tag: m[0] }));

  const issues: string[] = [];
  for (const a of externals) {
    if (!a.href.startsWith("https://")) {
      issues.push(`${a.href} should be https`);
    }
    // rel=noopener (or external/nofollow which implies it) only needed when target=_blank.
    const opensNewTab = /target="_blank"/i.test(a.tag);
    if (opensNewTab && !/rel="[^"]*(?:external|noopener|nofollow)/i.test(a.tag)) {
      issues.push(`${a.href} opens new tab without rel=external|noopener|nofollow`);
    }
  }
  expect(issues, issues.join("\n")).toEqual([]);
});
