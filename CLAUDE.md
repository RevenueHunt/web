# RevenueHunt web

Astro 6 marketing site for `revenuehunt.com`. Replaces the legacy WordPress + Yoast site.

**PRD:** `../PRD-Website-Astro-Migration.md` — source of truth for direction. Read first.

**Reference implementation:** `/Users/libertas/Projects/MetricSpot/web/` — the same playbook executed for MetricSpot. Most patterns here are lifted from there, minus i18n.

## Stack

| Layer | Choice |
|---|---|
| Framework | Astro 6, `output: "static"`, `trailingSlash: "always"` |
| Package manager | Bun |
| Styling | Tailwind v4 (via `@tailwindcss/vite`) + `@tailwindcss/typography` |
| i18n | English only |
| Content | Astro Content Collections for `/blog/*` (migrated from WordPress in Phase 2) |
| Host | Cloudflare Pages |

## Quick reference

```bash
bun install
bun run dev          # astro dev on :4321
bun run build        # static output to dist/
bun run preview      # serve dist/
bun run typecheck    # astro check
bun run scrape       # scripts/scrape-wp.ts (Phase 2)
bun run test:e2e     # Playwright
```

## Conventions

- **Sentence case** for all titles, headings, buttons, nav items. Only capitalize first word + proper nouns/acronyms (RevenueHunt, Shopify, URL, PDF, SEO).
- **Real copy**, lifted from current revenuehunt.com. No lorem.
- **Preserve all existing URLs.** Every `revenuehunt.com/<path>/` must continue to resolve — either via an Astro route or a `redirects` entry in `astro.config.mjs`.
- **SEO basics:** sitemap (auto via `@astrojs/sitemap`), `robots.txt` with explicit AI-bot allow, `llms.txt`, OG images per page, JSON-LD on every page.
- **No `localhost` in prod HTML.** `Base.astro` reads `PUBLIC_SITE_URL` from env. Always set it at build time.

## Folder layout

```
src/
├── pages/             # File-based routing
├── layouts/Base.astro # Head, OG, JSON-LD slot
├── components/        # Shared Astro components
├── content/blog/      # Migrated WP posts (Phase 2)
├── content.config.ts  # Zod schema for blog
├── lib/site.ts        # SITE constants
└── styles/global.css  # Tailwind entry
public/
├── robots.txt         # Explicit AI-bot allow
├── llms.txt / agents.txt
└── og/                # Pre-rendered OG PNGs (Satori)
scripts/
└── scrape-wp.ts       # WP REST API → Markdown migration (Phase 2)
```
