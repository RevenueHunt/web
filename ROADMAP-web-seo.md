# Roadmap — revenuehunt.com SEO / audit follow-ups

**Scope:** Technical/SEO follow-ups for this Astro site (revenuehunt.com), driven by MetricSpot audits.
**Latest audit:** `17208`, 2026-06-01 — total **84/100** (up from 80 at the start of the day). Baseline PDF: `~/Downloads/revenuehunt.com-audit.pdf`.
**Owner:** Alex / Claude.

---

## Priority summary

| # | Item | Priority | Status | Where |
|---|------|----------|--------|-------|
| 1 | About page (→ trust pages 4/4) | **P1** | Open | this repo |
| 2 | HSTS preload submission | **P1** | Open | infra — see `PRD-hsts-preload.md` |
| 3 | Cookie consent banner | P2 | Open | this repo / GTM |
| 4 | LCP-WebP audit check | — | Won't-fix (noted) | this repo |
| 5 | `≥95 content entries` e2e test (got 93) | P3 | Open (pre-existing) | `src/content/` |
| 6 | E-E-A-T / AI-readability polish | P3 | Backlog | `src/` |

---

## 1. About page — P1

**Why:** `modern_seo.trust_pages_linked` wants about + contact + privacy + terms. We link contact, privacy, and terms (`/tos/`) → **3/4, passing**, but there is **no `/about/` page**, so it can't reach 4/4.

**Steps:**
1. Create `/about/` on revenuehunt.com (Astro route or a `content/pages` entry).
2. Link it from the footer trust/legal row (which already lists Contact · Terms · Privacy · Security) and optionally from the Resources nav.
3. **Copy is public-facing → draft via the `tone-of-voice` skill** before publishing. Use real facts already in the repo: Dairy Capital Limited (trading as RevenueHunt), the homepage proof stats (20,000+ brands, 40M+ quizzes, $1.3B+ merchant revenue, 450+ five-star reviews), and the product mission.
4. Re-run the MetricSpot audit → confirm `trust_pages_linked` = 4/4.

## 2. HSTS preload submission — P1

See **`PRD-hsts-preload.md`**. Header is already preload-ready; the open work is the subdomain pre-flight (`www`/`web` don't serve HTTPS yet) and the one-time, near-irreversible submission at hstspreload.org (Alex-driven, guided).

## 3. Cookie consent banner — P2

`privacy.cookie_banner` fails: GA4 + GTM + Facebook Pixel load with **no consent banner**, so EU/UK visitors get non-essential cookies before opting in (GDPR / ePrivacy exposure). Add a consent layer — a lightweight CMP, or Google Consent Mode v2 wired through GTM — that gates the marketing/analytics tags until consent. (Same gap is tracked on the demo store.)

## 4. LCP-WebP check — won't-fix (noted)

`astro.webp_or_avif_lcp` still flags the page, **but the actual hero LCP image is already a same-origin WebP**, loaded `eager` + `fetchpriority="high"` (shipped 2026-06-01). The check keys off the first above-the-fold `<img>`, which is the **header logo SVG** (the pillar icons are SVG too). Rasterizing a vector logo to WebP would be a downgrade, so we leave it. PSI was unavailable at audit time → no real-world LCP regression; this is a heuristic limitation. Revisit only if we later move the hero through Astro's `<Image>` pipeline.

## 5. `≥95 content entries` test — P3 (pre-existing)

`e2e/content-fidelity.spec.ts` asserts ≥95 content-collection entries; current content yields **93**. This is **pre-existing** (byte-identical on `main` before the 2026-06-01 audit work) and content-owned. Resolve by publishing 2+ more posts/pages or recalibrating the threshold to the real floor. Not blocking deploys.

## 6. E-E-A-T / AI-readability polish — P3 (backlog)

Info-level audit findings, mostly content-side:
- `modern_seo.title_ctr` — homepage title has no CTR hook (number / year / power word / `Brand | Topic`).
- `modern_seo.author_byline` + `ai.author_attribution` — add a visible "By {name}" byline and an `author` field in the blog Article schema.
- `ai.last_updated_visible` — add `datePublished` / `dateModified` to the Article schema.
- `ai.answer_first` — homepage first paragraph is 29 words; aim for 30–80 that summarize the page.
- `organic_traffic.*` — sessions −17% vs prior 28d, avg position 14.1, 8 striking-distance queries (pos 11–20), ~60 lost clicks to weak CTR. Search Console / content-ops work, not code.

---

## Done (2026-06-01)

Shipped to this repo and to MetricSpot prod. **Total 80 → 84**; modern_seo 75 → 88; social 85 → 100; on-page 93 → 100; accessibility 81 → 94.

**revenuehunt.com** (commits `6ddc289`, `a2a0a5d`, `6146e84`, `d4fa5d1`, `733ce35`):
- Single `<main>` landmark sitewide (Base owns it; per-template `<main>` demoted to `<div>`).
- Apple-touch-icon (180) + PWA icons (192/512) + `manifest.webmanifest` + `theme-color` (#16161D).
- Keyword alt on all 45 homepage images (19 empty → 0); hero poster → same-origin WebP, `eager` + `fetchpriority="high"`.
- Sitemap excludes noindex archives (`/tag/ /cat/ /author/`, `/message-sent/`) — fixes "submitted URL marked noindex" and a 53-case e2e smoke-test failure.
- Footer: **Contact** added to the trust/legal row → trust pages **3/4 (passing)**; dropped the inactive **X/Twitter** link (also removed from JSON-LD `sameAs`); **LinkedIn** → `/company/revenuehuntapps/`; added **GitHub** (`github.com/RevenueHunt/`) → `sameAs` back to 3 profiles (`organization_sameas` passes again); copyright → `© RevenueHunt {year}`.

**MetricSpot** (deployed to app.metricspot.com; 234 audit tests pass):
- `modern_seo` trust-page matcher recognizes slug aliases (`/tos/` = terms, `/contact-us/`, `/privacy-policy/`, `/about-us/`, …).
- Trust matcher restricted to **internal links** — fixes a false positive where an external `linkedin.com/company/` satisfied "about".
