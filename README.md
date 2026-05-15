# revenuehunt-web

Astro 6 marketing site for `revenuehunt.com`. Migration target from WordPress + Yoast — see `../PRD-Website-Astro-Migration.md` for full context.

## Commands

```bash
bun install
bun run dev          # http://localhost:4321
bun run build        # static output to dist/
bun run preview      # serve dist/ locally
bun run typecheck    # astro check
bun run scrape       # scripts/scrape-wp.ts — pulls live WP content
bun run test:e2e     # Playwright
```

## Environment

| Variable | Build-time | Required |
|---|---|---|
| `PUBLIC_SITE_URL` | Canonical URL used for `<link rel="canonical">`, OG, sitemap | Yes in CI/prod |
| `PUBLIC_APP_URL` | Used by CTA links into the RevenueHunt app | Optional, defaults to `https://app.revenuehunt.com` |

## Deployment

Cloudflare Pages. Production: `revenuehunt.com`. Staging: `web.revenuehunt.com`. Push to `main` triggers deploy.

See `CLAUDE.md` for conventions and folder layout.
