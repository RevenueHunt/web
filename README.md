# web

Static marketing site for **revenuehunt.com** — Astro 6 + Bun + Tailwind v4. Replaces the legacy WordPress + Yoast install.

- **Repo:** [`RevenueHunt/web`](https://github.com/RevenueHunt/web) (private)
- **Source of truth:** `../PRD-Website-Astro-Migration.md`
- **Conventions for agents:** `CLAUDE.md`
- **Reference implementation:** `/Users/libertas/Projects/MetricSpot/web/` (same playbook, minus i18n)

## Status

| | |
|---|---|
| Build | 142 routes (79 blog posts · 34 marketing pages · 10 category archives · 18 tag archives · 8 paginated blog pages · feed, sitemap, llms.txt) |
| Tests | 286 Playwright cases pass in ~1.3s · `scripts/audit-content.ts` 0 misses |
| Phase | 3 — polish & bespoke layouts (per PRD); Cloudflare cutover deferred |

## Quick start

```bash
bun install
bun run dev                          # astro dev on :4321
PUBLIC_SITE_URL=https://revenuehunt.com bun run build
bun run preview --port 4321          # serve dist/ for e2e
```

## Commands

| Command | What it does |
|---|---|
| `bun run dev` | Astro dev server (HMR, no Pagefind index) |
| `bun run build` | `astro build` + `pagefind --site dist` (search index) |
| `bun run preview` | Serve `dist/` |
| `bun run typecheck` | `astro check` — must report 0 errors |
| `bun run scrape` | Re-pull live WP content into `src/content/` (idempotent) |
| `bun run test:e2e` | Playwright suite (browserless `request` fixture) |
| `bun scripts/audit-content.ts` | Verify every collection entry rendered + every image resolves |

## Architecture

**Static output.** `output: "static"`, `trailingSlash: "always"`. No SSR, no API routes.

**Routing.** File-based, three patterns:

- `src/pages/<name>/index.astro` — hand-built bespoke routes (home, pricing, integrations, testimonials, …)
- `src/pages/[slug]/index.astro` — catch-all for every other URL. Detects whether the entry is a blog post (max-w-3xl prose + TOC + share + prev/next + related) or a marketing page (hero + max-w-5xl prose + bottom CTA).
- `src/pages/blog/[...page].astro`, `src/pages/cat/[slug]/index.astro`, `src/pages/tag/[slug]/index.astro` — paginated index + WP-compatible category/tag archives (`/cat/<slug>/` and `/tag/<slug>/`, matching legacy URLs).

**Catch-all skip-list.** Slugs with bespoke routes are listed in three places that must stay in sync:
- `explicitlyOverridden` in `src/pages/[slug]/index.astro`
- `HAND_BUILT` in `scripts/audit-content.ts`
- `HAND_BUILT` in `e2e/content-fidelity.spec.ts`

**Markdown pipeline.** Two custom plugins (in `astro.config.mjs`) strip the leading `<h1>` from every Markdown doc — scraped content arrives with its own H1 that would duplicate the frontmatter title.

**Search.** [Pagefind](https://pagefind.app) runs after `astro build` and indexes any element marked `data-pagefind-body`. Only blog post `<article>` tags carry that attribute, so search returns posts and posts only. The drop-in UI lives in the `/blog/` hero — no top-level search page.

## Content

Two Astro Content Collections:

- `blog` — 79 posts in `src/content/blog/*.md`, schema in `src/content.config.ts` (title, description, pubDate, updatedDate, tags, categories, author, legacySlug, legacyId, featuredImage)
- `pages` — 34 marketing pages in `src/content/pages/*.md`, same schema minus the blog-specific bits

**Editing.** Posts and pages are plain Markdown with frontmatter — edit in any editor, commit, push. No CMS.

**Scraping.** `scripts/scrape-wp.ts` pulls live WP content via the public REST API (`/wp-json/wp/v2/`), with an HTML fallback for pages where `content.rendered` is empty. Idempotent — re-running wipes and rewrites `src/content/blog/` and `src/content/pages/` without touching `src/pages/`. Featured images and inline media land under `public/img/`.

## Environment

| Variable | Used for | Required |
|---|---|---|
| `PUBLIC_SITE_URL` | `<link rel="canonical">`, OG meta, sitemap, JSON-LD `url` | **Yes** in prod & during build for staging — never let `localhost` leak into emitted HTML |
| `PUBLIC_APP_URL` | CTA links into the RevenueHunt app | Optional — defaults to `https://app.revenuehunt.com` |

## SEO & AI discoverability

- `@astrojs/sitemap` auto-emits `/sitemap-index.xml` + `/sitemap-0.xml`
- `public/robots.txt` explicitly allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot, anthropic-ai, cohere-ai
- `public/llms.txt` and `public/agents.txt` are hand-curated indices for AI crawlers
- JSON-LD on every page: `Organization`, `WebSite` (with `SearchAction`), `Article` on blog posts, `BreadcrumbList` everywhere, `Product` + `Offer` on pricing
- RSS at `/feed.xml`

## Testing

| Spec | Coverage |
|---|---|
| `e2e/all-routes.spec.ts` | Every URL in `dist/sitemap-0.xml` returns 200; title, canonical, OG, header/footer, ≥500 chars body |
| `e2e/content-fidelity.spec.ts` | Every collection entry renders its frontmatter title + a body excerpt |
| `e2e/chrome-links.spec.ts` | Every internal href in header + footer resolves; external links HTTPS-only and rel-safe |
| `e2e/discovery.spec.ts` | `robots.txt` / `llms.txt` / `agents.txt` / sitemap / RSS |
| `e2e/blog-archives.spec.ts` | Every `/cat/<slug>/` and `/tag/<slug>/` returns 200 with the right h1 and at least one post |
| `scripts/audit-content.ts` | Build-time: every entry has its title in rendered HTML; every `<img src>` resolves under `dist/` |

Run the full suite against the local preview:

```bash
PUBLIC_SITE_URL=https://revenuehunt.com bun run build
bun run preview --port 4321 &
BASE_URL=http://localhost:4321 bunx playwright test --workers=8 --reporter=line
```

## Deployment

Cloudflare Pages, single project `revenuehunt-web`:

- Build: `bun run build`
- Output: `dist`
- `PUBLIC_SITE_URL=https://revenuehunt.com` (production) / `https://web.revenuehunt.com` (staging)
- `public/_redirects` handles legacy WP URLs (incl. AMP strip + www→apex)
- `public/_headers` sets CSP, HSTS, cache directives

DNS cutover and WP decommission are tracked in the PRD (Phase 4–5) — not yet executed.

## Folder layout

```
src/
├── pages/
│   ├── [slug]/index.astro        # Catch-all (blog post or marketing page)
│   ├── blog/[...page].astro      # Paginated blog index (10/page)
│   ├── cat/[slug]/index.astro    # Category archive — legacy /cat/<slug>/
│   ├── tag/[slug]/index.astro    # Tag archive — legacy /tag/<slug>/
│   ├── <bespoke>/index.astro     # home, pricing, integrations, …
│   └── feed.xml.ts               # RSS
├── layouts/Base.astro            # Head, OG, JSON-LD, header/footer
├── components/
│   ├── Header.astro / Footer.astro
│   └── pages/                    # Per-page subcomponents (PlatformPage, BlogArchive, PlanCards, …)
├── content/{blog,pages}/         # Migrated Markdown content
├── content.config.ts             # Zod schemas
├── lib/                          # site, schema, blog, plans, platforms, og
└── styles/global.css             # Tailwind entry
public/
├── img/                          # 717+ self-hosted images
├── favicon.ico · favicon-{16,32}.png
├── robots.txt · llms.txt · agents.txt
└── _redirects · _headers         # Cloudflare Pages config
scripts/
├── scrape-wp.ts                  # WP REST API → Markdown
└── audit-content.ts              # Build-time content check
e2e/                              # Playwright suite (286 cases)
dist/pagefind/                    # Search index — emitted post-build by `pagefind`
```

## License

Private — © RevenueHunt.
