---
title: "More speed equals more sales: an ecommerce playbook"
description: "Why page speed is the foundation of ecommerce conversion, where Shopify stores actually lose seconds, and the three audits that win them back."
pubDate: 2023-12-15T10:23:30Z
updatedDate: 2026-05-29T16:00:00Z
tags:
  - "ecommerce"
  - "shopify"
  - "conversion optimisation"
  - "page speed"
  - "performance"
categories:
  - "eCommerce"
  - "Tips &amp; Tricks"
author: "alex"
legacySlug: "more-speed-equals-more-sales"
legacyId: 7603
legacyUrl: "https://revenuehunt.com/more-speed-equals-more-sales/"
featuredImage: "/img/blog/more-speed-equals-more-sales/blogtile_speedsales.webp"
draft: false
---

Page speed is the foundation everything else sits on. If a customer clicks your ad and never sees the landing page because it's loading for eternity, they leave before any of your design decisions, copywriting, quiz placements or discount offers have a chance to do their work. Over half of online purchases now come from mobile, where connection quality is unpredictable, which makes the speed of those first few seconds the highest-leverage thing you can fix this week.

This article covers where Shopify stores actually lose those seconds, how to measure it, and the three deeper audits that recover them: image lazy-loading and asset optimisation, third-party script auditing, and font-loading strategy.

<div style="margin:28px 0;padding:18px 22px;background:#f1f5f9;border-radius:8px;display:flex;align-items:flex-start;gap:16px;font-size:14px;color:#475569;line-height:1.6;">
  <span style="display:inline-flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:50%;background:#16161D;color:#fff;font-weight:700;font-size:15px;flex-shrink:0;letter-spacing:0.02em;">A</span>
  <span><strong style="color:#0f172a;">Written by Alex, co-founder of RevenueHunt.</strong> Tactics drawn from years of speed-auditing Shopify stores at every scale: where the seconds actually go, which ones are recoverable without a re-platform, and which ones aren't worth the engineering hours.</span>
</div>

For the broader CRO playbook this sits inside, see [10 ecommerce conversion optimisation tips that move revenue](https://revenuehunt.com/ecommerce-conversion-optimization-tips/). For the funnel architecture, see our [step-by-step funnel build guide](https://revenuehunt.com/build-sales-funnel-shopify-store/).

## Why speed is the priority that comes before everything else

The single most overlooked truth about ecommerce CRO is that the rest of the funnel doesn't matter if the page doesn't load. A 4-second page that converts at 5% beats a 1-second page that converts at 10% only on paper: the 4-second page never gets the chance, because half the traffic has already bounced.

Mobile makes this worse. Mobile shoppers are on flaky networks (commuting, low-coverage areas, congested wifi), and they have substantially less patience for a slow page than desktop users. Industry studies consistently show conversion drops sharply as load time increases past two seconds. Every speed gain compounds because it's a multiplier on every downstream funnel mechanic you've spent time perfecting.

## How to measure: three tools, three angles

Each tool measures something slightly different. Use all three, not just one.

**[Google PageSpeed Insights](https://pagespeed.web.dev/)** measures field data (real Chrome users on your live site) and lab data (a synthetic Lighthouse test). Field data is what Google uses for ranking; lab data is what you debug against. Run it on your three highest-traffic URLs: homepage, top product, top collection.

**Shopify Online Store Speed report.** From the Shopify admin, navigate to Reports and search for "Online store speed". Shopify runs a weighted-average Lighthouse test against your homepage, top-visited product page, and top-visited collection page. Useful as a single number to track over time, less useful for diagnosing specific issues.

![Shopify admin Reports section showing the Online store speed entry](/img/blog/more-speed-equals-more-sales/1e416992-b406-4f06-b109-a06708698749_1260x728.webp)

**Shopify Partners dashboard performance.** If you have Partner access (yours or your developer's), open Stores, find the store, click "More actions" → "View store performance". Same underlying Lighthouse engine, but cleaner historical tracking and a comparison view across multiple stores you manage.

![Shopify Partners dashboard with the View store performance option in the More actions dropdown](/img/blog/more-speed-equals-more-sales/a0aa04cd-4649-4ebf-8b17-5abea5fb6d43_1606x934.webp)

The score itself is a weighted average across three pages: the home page, the top-visited product page and the top-visited collection page. It's a useful trend line, but the diagnosis happens elsewhere.

![Shopify speed score breakdown showing the weighted average across home, product and collection pages](/img/blog/more-speed-equals-more-sales/a09a91cf-0aad-40f8-acc1-e2dd46c17e50_1266x750.webp)

What actually matters is the Core Web Vitals underneath: **Largest Contentful Paint (LCP) under 2.5s**, **Cumulative Layout Shift (CLS) under 0.1**, **Interaction to Next Paint (INP) under 200ms**. Optimise for those targets, not for the headline score.

## Where Shopify stores actually lose speed

Shopify's hosting infrastructure is excellent: CDN-served images, fast theme rendering, native lazy-loading, automatic format optimisation. The store you start with is fast. The store you end up with after twelve months of app installs is the one that's slow. Five things consistently cause that drift:

1. **Too many tracking pixels.** GA4, Meta, TikTok, Pinterest, Klaviyo, every retargeting platform's own snippet. Each one loads JavaScript. Stack five of them and your first contentful paint slips half a second.
2. **Poorly coded or bloated themes.** Every additional theme section, animation, and decorative carousel adds CSS and JS that loads on every page. The same look can usually be achieved with half the code.
3. **Too many apps, even good ones.** Most Shopify apps inject their JavaScript globally rather than only where it's needed. An app that powers a single feature on one product page often loads on your homepage too.
4. **Large media files.** A 4 MB hero image at 2000px width when the device is rendering it at 400px. A 30-second product GIF when a 4-second video would do.
5. **Poorly coded apps that inject globally.** The worst case of #3: an app whose JS bundle is itself bloated and runs on every page, every time.

The fix is rarely "buy a faster theme". The fix is auditing what you've added since launch and pruning what's not earning its weight.

## Audit 1: image lazy-loading and asset optimisation

Shopify lazy-loads images below the fold automatically via the `loading="lazy"` attribute. That covers most of the work, but three places trip people up:

**Hero images shouldn't be lazy-loaded.** Your homepage hero is the Largest Contentful Paint candidate. If it's lazy-loaded, the browser delays fetching it, which delays LCP, which hurts Core Web Vitals. Override with `loading="eager"` and ideally `fetchpriority="high"` on the single most important above-the-fold image per page.

**Use Shopify's image URL filters.** Liquid's `image_url` filter (and the older `img_url`) can automatically serve WebP and AVIF formats when supported, and resize images to whatever width you actually need. A hero image embedded at 1200px wide should be served at 1200px wide, not at 4000px and then scaled down by CSS. Audit your theme for raw `<img src="…">` tags and convert them to use the filter.

**Stop hotlinking from external sources.** Substack-hotlinked images, Imgur images, hotlinked stock photos — they bypass Shopify's CDN and image optimisation entirely. Re-upload to the Shopify CDN or the theme's asset folder.

**One overlooked file**: video. A 15-second product video is often 8-10 MB. If you're showing video on the homepage, either compress it aggressively (H.264 at 1500 kbps for 720p is usually fine) or use the YouTube embed pattern instead of self-hosting, which lets YouTube's CDN handle delivery. The [video quizzes piece](https://revenuehunt.com/video-quizzes/) covers the upload-vs-embed decision in more depth.

## Audit 2: third-party script audit

This is the audit that recovers the most time on most stores. Open Chrome DevTools → Network panel → Reload → sort by Transfer size.

Anything over 100 KB needs a justification. Anything over 250 KB needs to be defended out loud to your future self. Most stores find:

- Two or three review apps loading simultaneously (only one is actually being used).
- A popup app whose JS loads on every page even though the popup only fires on the product page.
- An upsell app that loads on the homepage despite only running in the cart drawer.
- Multiple analytics pixels duplicating each other's data collection.
- An abandoned A/B testing tool still injecting its bundle months after the experiment ended.

**Three rules for cutting:**

1. **One review app, not three.** Pick the one whose UI lives on your product pages and uninstall the others completely (not just disable, which often leaves the snippet behind).
2. **Defer non-critical scripts.** Tag-manager tags can usually be set to "Window Loaded" instead of "Page View" without losing any data fidelity.
3. **Question every "free" app.** Free apps frequently monetise via tracking, which means more JS than paid alternatives.

Tracking pixels are necessary but should be consolidated through Google Tag Manager (or a server-side equivalent) rather than each platform getting its own page-load slot. GTM lets you defer, conditionally fire, and prune in one place.

## Audit 3: font loading strategy

Custom fonts are pretty but expensive. A typical custom font (one family, four weights) adds 200-400 KB to first load and can block text rendering until it arrives.

**Use `font-display: swap` always.** This tells the browser to render text in a fallback font immediately, then swap to the custom font when it loads. Without this, you get a "flash of invisible text" where the page appears blank for half a second. Most themes already do this; some legacy themes don't.

**Preconnect to your font CDN.** If you load fonts from Google Fonts, drop this in your `<head>` ahead of the actual font request:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

This starts the DNS lookup and TLS handshake early so the font request lands faster when it fires.

**Subset to what you actually use.** Most Latin-only stores don't need the full Google Fonts character set with Cyrillic, Greek and Vietnamese ranges. Use the `&subset=latin` parameter or self-host a subset file.

**Two weights for body, one for headings, max.** Every additional weight is another file download. The store with Regular + Medium + Bold loads faster than the store with Regular + Light + Medium + Semibold + Bold + Black, and the visual difference is rarely worth the seconds lost.

## Where the quiz fits in the speed conversation

Speed matters disproportionately at the moments of highest conversion leverage: homepage hero, quiz load, results page, checkout. A quiz that takes three seconds to render (because it's iframe-embedded and adds an extra HTTP request, plus the visual "flash" as the external frame loads) materially reduces completion rates. This is the structural weakness of many iframe-based quiz tools.

RevenueHunt's **Built for Shopify** version embeds the quiz natively into the Shopify theme as a block: no iframes, no extra HTTP request, no visual flash. The quiz loads at theme speed and inherits the brand's typography and colours automatically, which means it doesn't even need its own CSS payload. For the full quiz foundations, see [how to build a successful product recommendation quiz](https://revenuehunt.com/how-to-build-a-successful-ecommerce-quiz/).

## Quick tools and resources

**Page speed checks:** [Google PageSpeed Insights](https://pagespeed.web.dev/), Shopify Reports → "Online store speed", Shopify Partners → "View store performance".

**App audit shortcut.** Uninstall any unused apps from your store (not just disable: fully uninstall so the snippet is removed). This is the single highest-yield 10-minute task you can run today.

**Cart conversion app I rate.** Built by ex-Shopify employees I know personally, [Flash Cart](https://apps.shopify.com/flash-cart) leverages a customisable side cart to upsell and cross-sell products without adding the heavy global JS of most upsell apps. 14-day free trial.

**Inspiration source:** [Thingstesting](https://thingtesting.com/) for product ideas and design references. The [Getting Real](https://basecamp.com/gettingreal) book by Basecamp remains the best framing for "build less, ship faster" thinking that applies as much to a store as it does to a software product.

## Frequently asked questions

### What page speed score should I aim for on Shopify?

The score itself is less important than the underlying Core Web Vitals. Target Largest Contentful Paint (LCP) under 2.5 seconds, Cumulative Layout Shift (CLS) under 0.1, and Interaction to Next Paint (INP) under 200ms. Shopify's Online Store Speed report and Google PageSpeed Insights both surface these. Most well-optimised Shopify stores land in the 70-90 Lighthouse range; chasing 100 typically costs more engineering hours than the marginal conversion lift is worth.

### Are Shopify apps actually slowing my store down that much?

Often yes, but it depends on the app. The audit is straightforward: open Chrome DevTools, go to the Network panel, reload the page, sort by Transfer size and look for entries over 100 KB. Each one needs a justification. Apps that inject their JavaScript globally (loading on every page) cost more than apps scoped to specific templates. The single fastest fix on most Shopify stores is uninstalling apps that are no longer in active use.

### Will switching themes solve my speed problem?

Sometimes, but it's rarely the root cause. The store you start with on any modern Shopify theme is fast; what slows it down is everything added since: apps, tracking pixels, oversized images and theme customisations. Audit those first. Switch themes only if the theme itself is genuinely bloated (some older third-party themes carry significant CSS and JS weight) and a switch is the simpler fix.

### Does the RevenueHunt quiz slow down my store?

The Built for Shopify version embeds the quiz natively into your theme as a block, with no iframe and no extra HTTP request for an external widget. It loads at theme speed and inherits your store's typography and colours, which means it doesn't ship its own CSS payload. The Shopify Legacy version uses an iframe pattern and has a small load-time overhead by comparison; if speed is a top priority, the Built for Shopify version is the right install.

### Should I optimise for the Lighthouse score or for real-user metrics?

Real-user metrics (the "field data" Google shows in PageSpeed Insights and in Search Console's Core Web Vitals report) are what affect ranking and what your customers actually experience. The Lighthouse synthetic score is a debugging tool: it identifies what to fix and lets you test the impact of a change before it goes live. Use field data to decide what's worth fixing; use lab data to verify the fix worked.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What page speed score should I aim for on Shopify?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The score itself is less important than the underlying Core Web Vitals. Target Largest Contentful Paint (LCP) under 2.5 seconds, Cumulative Layout Shift (CLS) under 0.1, and Interaction to Next Paint (INP) under 200ms. Shopify's Online Store Speed report and Google PageSpeed Insights both surface these. Most well-optimised Shopify stores land in the 70-90 Lighthouse range; chasing 100 typically costs more engineering hours than the marginal conversion lift is worth."
      }
    },
    {
      "@type": "Question",
      "name": "Are Shopify apps actually slowing my store down that much?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Often yes, but it depends on the app. The audit is straightforward: open Chrome DevTools, go to the Network panel, reload the page, sort by Transfer size and look for entries over 100 KB. Each one needs a justification. Apps that inject their JavaScript globally cost more than apps scoped to specific templates. The single fastest fix on most Shopify stores is uninstalling apps that are no longer in active use."
      }
    },
    {
      "@type": "Question",
      "name": "Will switching themes solve my speed problem?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sometimes, but it's rarely the root cause. The store you start with on any modern Shopify theme is fast; what slows it down is everything added since: apps, tracking pixels, oversized images and theme customisations. Audit those first. Switch themes only if the theme itself is genuinely bloated and a switch is the simpler fix."
      }
    },
    {
      "@type": "Question",
      "name": "Does the RevenueHunt quiz slow down my store?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Built for Shopify version embeds the quiz natively into your theme as a block, with no iframe and no extra HTTP request for an external widget. It loads at theme speed and inherits your store's typography and colours, which means it doesn't ship its own CSS payload. The Shopify Legacy version uses an iframe pattern and has a small load-time overhead by comparison; if speed is a top priority, the Built for Shopify version is the right install."
      }
    },
    {
      "@type": "Question",
      "name": "Should I optimise for the Lighthouse score or for real-user metrics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Real-user metrics (the field data Google shows in PageSpeed Insights and in Search Console's Core Web Vitals report) are what affect ranking and what your customers actually experience. The Lighthouse synthetic score is a debugging tool: it identifies what to fix and lets you test the impact of a change before it goes live. Use field data to decide what's worth fixing; use lab data to verify the fix worked."
      }
    }
  ]
}
</script>

## A founder's note on the skill stack this requires

Image optimisation, JavaScript auditing and font-loading discipline are three different technical specialties. As a founder running a small team, you can't realistically be a 100% specialist in any of them, and you don't have to be. What you do need is reasonable proficiency across all three: an 80% generalist's grasp of each beats a 100% expert in only one when the problem is store-wide rather than function-specific.

This is the **80/20 rule** applied to founder skill development. With the same effort, a specialist becomes 100% proficient in one area while a generalist reaches roughly 80% across five. For a store operator, the second profile compounds harder because every problem touches multiple disciplines at once.

David Epstein's *Range: Why Generalists Triumph in a Specialized World* is the best framing of this tradeoff I've read. Recommended for any founder weighing depth versus breadth in their own skill stack:

<iframe loading="lazy" title="Range: Why Generalists Triumph in a Specialized World" type="text/html" width="500" height="550" frameborder="0" allowfullscreen="" style="max-width:100%" src="https://read.amazon.com/kp/card?preview=inline&amp;linkCode=kpd&amp;ref_=k4w_oembed_3CAKi0IKeDeCG8&amp;asin=0735214484&amp;tag=kpembed-20"></iframe>

Till Musshoff articulates a related idea: digital literacy as a meta-skill that compounds across all the other digital specialties a modern operator needs. The framing here is directly applicable to ecommerce speed work, where the operator who can read a Network panel, identify a bloated app and edit a Liquid template comfortably will always ship faster than the one who has to outsource each step.

<div class="aspect-video overflow-hidden rounded-xl bg-slate-900 not-prose my-6"><button type="button" class="yt-facade group relative block h-full w-full cursor-pointer overflow-hidden" data-yt-id="29oyOLh6PNE" aria-label="Play video"><picture><source srcset="https://i.ytimg.com/vi_webp/29oyOLh6PNE/maxresdefault.webp" type="image/webp" /><img src="https://i.ytimg.com/vi/29oyOLh6PNE/maxresdefault.jpg" alt="" width="1280" height="720" loading="lazy" decoding="async" class="h-full w-full object-cover" /></picture><span class="absolute inset-0 flex items-center justify-center bg-black/10 transition group-hover:bg-black/20"><span class="flex h-20 w-20 items-center justify-center rounded-full bg-black/70 shadow-lg transition group-hover:scale-105 group-hover:bg-[#FF0000]"><svg class="ml-0.5 h-9 w-9 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg></span></span></button></div>

## Where this fits

Speed is the discipline that makes everything else possible. It can't replace a strong product-page hierarchy, a well-built quiz, or a discount strategy that earns its margin sacrifice. But every other tactic in the funnel compounds its return when the foundation underneath is fast.

For the broader CRO playbook, see [10 ecommerce conversion optimisation tips](https://revenuehunt.com/ecommerce-conversion-optimization-tips/). For the funnel-design architecture this sits inside, see [10 ecommerce design decisions that actually move revenue](https://revenuehunt.com/ecommerce-website-design-tips-that-move-revenue/). For the data the quiz captures at speed, see our [zero-party data guide](https://revenuehunt.com/zero-party-data/).

[Install RevenueHunt: Recommender Quiz for Shopify](https://apps.shopify.com/product-recommendation-quiz-revenuehunt/install?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=more_speed) and add the only quiz that loads at native theme speed. Free plan available.
