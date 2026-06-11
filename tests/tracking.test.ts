// Analytics & ads tracking presence checks.
//
// All tracking is injected by the single shared layout (src/layouts/Base.astro)
// behind `isProd = import.meta.env.PROD && SITE.site_url === "https://revenuehunt.com"`.
// So a normal `astro dev` / staging build has tracking OFF on purpose, and these
// tests must build the site as *production* to see the tags. We build into temp
// outDirs (never touching ./dist) and assert against the generated HTML, since
// every page on this static site gets its <head> from Base.astro.
//
// Run with:  bun run test:tracking
//
// If you rotate any tracking ID, update the constants below AND Base.astro — the
// "config drift" test ties these two together so they can't silently diverge.

import { afterAll, beforeAll, describe, expect, test } from "bun:test";
import { execSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, rmSync } from "node:fs";
import { join } from "node:path";

const ROOT = join(import.meta.dir, "..");
const PROD_OUT = join(ROOT, ".tracking-build-prod");
const STAGING_OUT = join(ROOT, ".tracking-build-staging");

// Must mirror src/layouts/Base.astro.
const GA4_ID = "G-62LE891EM2"; // GA4 measurement ID
const ADS_ID = "AW-391009741"; // Google Ads conversion/remarketing account
const GTM_ID = "GTM-TDNVZDJ"; // Google Tag Manager container
const META_PIXEL_ID = "433027517883243"; // Meta (Facebook) Pixel

// Each signature must appear in a tracked page's HTML.
const SIGNATURES: { name: string; needle: string }[] = [
  { name: "GA4 gtag.js loader", needle: `gtag/js?id=${GA4_ID}` },
  { name: "GA4 measurement ID", needle: GA4_ID },
  { name: "Google Ads tag (AW account)", needle: ADS_ID },
  { name: "Google Tag Manager container", needle: GTM_ID },
  { name: "Meta Pixel", needle: META_PIXEL_ID },
  { name: "Shopify install conversion event", needle: "shopify_app_install" },
];

function build(outDir: string, siteUrl: string): void {
  rmSync(outDir, { recursive: true, force: true });
  try {
    execSync(`bunx astro build --outDir "${outDir}"`, {
      cwd: ROOT,
      // `bun test` exports NODE_ENV=test; the child build must run as production
      // or Vite's import.meta.env.PROD is false and Base.astro gates tracking off
      // for the wrong reason (defeating the domain-gate assertions below).
      env: { ...process.env, NODE_ENV: "production", PUBLIC_SITE_URL: siteUrl },
      stdio: "pipe",
    });
  } catch (e: any) {
    const out = (e?.stdout?.toString() ?? "") + (e?.stderr?.toString() ?? "");
    throw new Error(`astro build failed (PUBLIC_SITE_URL=${siteUrl}):\n${out}`);
  }
}

function read(outDir: string, rel: string): string {
  const f = join(outDir, rel);
  if (!existsSync(f)) throw new Error(`expected built page is missing: ${rel}`);
  return readFileSync(f, "utf8");
}

function missingSignatures(html: string): string[] {
  return SIGNATURES.filter((s) => !html.includes(s.needle)).map((s) => s.name);
}

// Pick a real, published blog article from the build output (filename == slug for
// the vast majority; skip any whose route didn't render, e.g. drafts).
function firstBuiltArticle(outDir: string): string {
  const slugs = readdirSync(join(ROOT, "src/content/blog"))
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""))
    .sort();
  const rel = slugs.map((s) => `${s}/index.html`).find((r) => existsSync(join(outDir, r)));
  if (!rel) throw new Error("could not find a built blog article to sample");
  return rel;
}

describe("tracking is present on a production build", () => {
  beforeAll(() => build(PROD_OUT, "https://revenuehunt.com"));

  // One representative page per type the marketing site ships.
  const pages: Record<string, string> = {
    "home": "index.html",
    "core page (pricing)": "pricing/index.html",
    "partners page": "partners/index.html",
    "blog archive": "blog/index.html",
    "platform / SEO page": "product-recommendation-quiz-shopify/index.html",
    "localized home (es)": "es/index.html",
  };

  for (const [label, rel] of Object.entries(pages)) {
    test(`${label} has GA4 + Google Ads + GTM + Meta Pixel`, () => {
      expect(missingSignatures(read(PROD_OUT, rel))).toEqual([]);
    });
  }

  test("blog article has GA4 + Google Ads + GTM + Meta Pixel", () => {
    expect(missingSignatures(read(PROD_OUT, firstBuiltArticle(PROD_OUT)))).toEqual([]);
  });

  test("every real built HTML page carries GA4 (sitewide coverage)", () => {
    // Astro emits tiny <meta http-equiv="refresh"> stubs for the `redirects:` map
    // in astro.config.mjs (old WordPress URLs -> canonical). Those are noindex and
    // redirect instantly, so they intentionally have no layout/tracking — skip them.
    const offenders: string[] = [];
    let scanned = 0;
    let redirects = 0;
    for (const rel of new Bun.Glob("**/*.html").scanSync(PROD_OUT)) {
      const html = readFileSync(join(PROD_OUT, rel), "utf8");
      if (html.includes('http-equiv="refresh"')) {
        redirects++;
        continue;
      }
      scanned++;
      if (!html.includes(GA4_ID)) offenders.push(rel);
    }
    // Guardrails: make sure we actually scanned the site and didn't just skip it all.
    expect(scanned).toBeGreaterThan(500);
    expect(redirects).toBeGreaterThan(0);
    expect({ count: offenders.length, sample: offenders.slice(0, 20) }).toEqual({ count: 0, sample: [] });
  });
});

describe("tracking is gated off outside production", () => {
  beforeAll(() => build(STAGING_OUT, "https://web.revenuehunt.com"));

  test("a staging build (non-prod domain) ships NO tracking tags", () => {
    const home = read(STAGING_OUT, "index.html");
    const leaked = [GA4_ID, ADS_ID, GTM_ID, META_PIXEL_ID].filter((id) => home.includes(id));
    expect(leaked).toEqual([]);
  });
});

describe("test IDs match the source of truth", () => {
  test("Base.astro still references the IDs these tests assert", () => {
    const base = readFileSync(join(ROOT, "src/layouts/Base.astro"), "utf8");
    const drifted = [GA4_ID, ADS_ID, GTM_ID, META_PIXEL_ID].filter((id) => !base.includes(id));
    expect(drifted).toEqual([]);
  });
});

afterAll(() => {
  rmSync(PROD_OUT, { recursive: true, force: true });
  rmSync(STAGING_OUT, { recursive: true, force: true });
});
