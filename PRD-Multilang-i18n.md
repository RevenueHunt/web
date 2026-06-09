# PRD — Multi-language (i18n) for RevenueHunt

Status tracker for adding a MetricSpot-style language dropdown + translated pages to the
RevenueHunt Astro site. This file is the source of truth for scope and progress.

## Goal

Add a language dropdown (matching the MetricSpot pattern) and translate the main / money /
product pages — **not** the blog — into 5 languages. English stays at the root with no prefix;
every other language lives under a `/<lang>/` prefix. All existing English URLs and redirects
are preserved unchanged.

## Languages

| Lang | Prefix | Label | Phase |
|------|--------|-------|-------|
| English | (root) | English | base |
| Spanish | `/es/` | Español | 1 |
| French | `/fr/` | Français | 1 |
| German | `/de/` | Deutsch | 2 |
| Portuguese | `/pt/` | Português | 2 |
| Italian | `/it/` | Italiano | 2 |

(No Catalan.)

## Architecture (mirrors `MetricSpot/web`)

- `src/lib/i18n.ts` — `Lang` type, `LANGS`, `LANG_LABELS`, `langPrefix()`, `altLangUrl()`, UI string dict `t[lang]`.
- `astro.config.mjs` — `i18n` block (`defaultLocale: en`, `prefixDefaultLocale: false`) + sitemap i18n alternates.
- `Base.astro` — `lang` prop → `<html lang>`, `og:locale`, `hreflang` alternates + `x-default`, apex redirect script.
- `Header.astro` / `Footer.astro` — `lang`-aware labels + links, `<details>` language dropdown (desktop + mobile).
- Slugs stay English under the locale prefix (e.g. `/es/pricing/`). No translated slugs.

Two page mechanisms:
- **A. Hand-built `.astro`** → refactor into `src/components/pages/<Name>Page.astro` taking `lang`, copy moved to `src/lib/content/<name>.ts` keyed by locale. Locale wrappers under `src/pages/<lang>/…`.
- **B. Markdown** (`src/content/pages/*.md`) → add `lang` field, translated files under `src/content/pages/<lang>/…`, locale-aware `[slug]` routes. `PlatformPage.astro` made `lang`-aware.

## In-scope pages (translate ×5)

### Hand-built (`.astro`)
- [ ] `/` (home)
- [ ] `/pricing/`
- [ ] `/contact/`
- [ ] `/demo/`
- [ ] `/integrations/`
- [ ] `/partners/`
- [ ] `/testimonials/`
- [ ] `/templates/`
- [ ] `/solutions/` (hub)
- [ ] `/quiz-roi-calculator/` (interactive — user-required)
- [ ] `/state-of-product-recommendation-quizzes/` (benchmark report — user-required)

### Markdown product / platform
- [ ] `product-recommendation-quiz`
- [ ] `product-finder-quiz`
- [ ] `guided-selling-quiz`
- [ ] `zero-party-data-quiz`
- [ ] `for-beauty-brands`
- [ ] `product-recommendation-quiz-shopify` (user-required)
- [ ] `product-recommendation-quiz-woocommerce` (user-required)
- [ ] `product-recommendation-quiz-bigcommerce` (user-required)
- [ ] `product-recommendation-quiz-standalone-google-product-feed` (user-required)
- [ ] `product-recommendation-quiz-wix-stores`
- [ ] `product-recommendation-quiz-for-magento`
- [ ] `product-recommendation-quiz-for-squarespace-commerce`
- [ ] `product-recommendation-quiz-pos-tablet-stands`

### English-only (NOT translated)
Blog (all 70 posts), legal/utility (`tos`, `privacy`, `dpa`, `security`, `message-sent`, `sign-up`,
`call-scheduled`, `404`), long-tail SEO (`solutions/[slug]`, `compare` + `compare/[slug]`,
`glossary` + `glossary/[slug]`). Borderline-deferred: `jobs`, `whats-new`, `newsletter`,
`why-your-traffic-isnt-converting`, `quiz-readiness-assessment`.

## Translation approach

Multiple parallel translator subagents (one per page), each given a shared **translation brief**
(brand voice via the `tone-of-voice` skill, glossary of terms that stay English, informal tone,
formatting rules) and the page's extracted English source. Opus 4.8 generates copy; Alex reviews.

## Execution phases

### Phase 0 — Infrastructure (no visual change, English only)
- [ ] `src/lib/i18n.ts` (`LANGS = [en, es, fr]` to start)
- [ ] `astro.config.mjs` i18n + sitemap alternates
- [ ] `Base.astro` lang/hreflang/og:locale/apex script
- [ ] `Header.astro` lang-aware + dropdown
- [ ] `Footer.astro` lang-aware
- [ ] `pages` collection schema `lang` field
- [ ] Build green, English output unchanged

### Phase 1 — Spanish + French
- [x] Infra: i18n.ts, astro.config i18n, Base (hreflang/og:locale/lang), Header (+dropdown), Footer
- [x] Content schema `lang` field + locale-aware markdown `[slug]` routes (`/es/[slug]`, `/fr/[slug]`)
- [x] Translation brief
- [x] 12 markdown product/platform pages → ES + FR (subagents) + localized PlatformPage/ContentPage chrome (CHROME dict)
- [x] typecheck clean + build green (243 pages, hreflang verified, dropdown verified)
- [x] Hand-built pages → ES + FR locale duplicates (subagents): home, pricing, contact, demo, integrations, partners, testimonials, templates, solutions hub, quiz-roi-calculator, state-of-…
- [x] PlanCards + Reviews + plans.ts (`PLANS_BY_LANG`) locale-aware (subagent)
- [x] English in-scope pages emit reciprocal hreflang (`translated={true}`)
- [x] final typecheck (0 errors) + build green (265 pages) + e2e (351 passed)
- [x] **Committed** (Phase 1 complete)

Note: `for-beauty-brands` deferred (borderline vertical page, not in required set).

Pre-existing e2e failures (NOT from this work, untouched files): `all-routes` flags
`/call-scheduled/` (a `noindex` confirmation page the test never allowlisted), and
`content-fidelity` expects ≥95 collection entries but the repo currently has ~91
top-level non-hand-built entries. Both are independent of i18n.

Phase-2 note: `.translation-brief.md` (repo root) is the shared brief for translators —
reuse it for DE/PT/IT, then delete before the final commit.

### Phase 2 — German + Portuguese + Italian
- [ ] Expand `LANGS` to all 6
- [ ] Translate all in-scope pages → DE + PT + IT (subagents)
- [ ] Locale wrappers `/de/…`, `/pt/…`, `/it/…`
- [ ] typecheck + build + e2e green
- [ ] **Commit, push, deploy**

## Notes / decisions
- OG images: translated pages reuse existing English `/og/<slug>.png` (no localized OG art).
- Existing English URLs unchanged; redirects untouched.
</content>
</invoke>
