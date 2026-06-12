---
title: "RevenueHunt is Built for Shopify: what's different vs Legacy"
description: "What's different in the Built for Shopify version of RevenueHunt: native embed, collections, Shopify Markets, drag-and-drop builder, and which integrations work today."
pubDate: 2025-03-13T08:14:13Z
updatedDate: 2026-06-02T10:00:00Z
tags: ["Built for Shopify", "BFS", "Shopify", "product updates", "app comparison"]
categories:
  - "App New Features"
author: "Paulina Chodura"
legacySlug: "revenuehunt-built-for-shopify"
legacyId: 11057
legacyUrl: "https://revenuehunt.com/new-built-for-shopify-revenuehunt-app-is-out-now/"
featuredImage: "/img/blog/revenuehunt-built-for-shopify/blogtile_bfs.webp"
draft: false
---

The Built for Shopify (BFS) version of the RevenueHunt app is the modern, recommended way to run a product recommendation quiz on Shopify. It replaces the Legacy app for new installs, embeds natively into the storefront instead of an iframe, supports Shopify Markets for multi-language and multi-currency stores, and recommends entire collections (not just products). This guide covers what's different vs the Legacy app, which integrations work today, and how to switch.

<div class="aspect-video overflow-hidden rounded-xl bg-slate-900 not-prose my-6"><button type="button" class="yt-facade group relative block h-full w-full cursor-pointer overflow-hidden" data-yt-id="MeWGbfCLnEw" aria-label="Play video"><picture><source srcset="https://i.ytimg.com/vi_webp/MeWGbfCLnEw/maxresdefault.webp" type="image/webp" /><img src="https://i.ytimg.com/vi/MeWGbfCLnEw/maxresdefault.jpg" alt="" width="1280" height="720" loading="lazy" decoding="async" class="h-full w-full object-cover" /></picture><span class="absolute inset-0 flex items-center justify-center bg-black/10 transition group-hover:bg-black/20"><span class="flex h-20 w-20 items-center justify-center rounded-full bg-black/70 shadow-lg transition group-hover:scale-105 group-hover:bg-[#FF0000]"><svg class="ml-0.5 h-9 w-9 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg></span></span></button></div>

<div style="margin:32px 0;padding:24px 28px;background:#f8fafc;border-left:4px solid #16161D;border-radius:6px;">
  <p style="margin:0 0 14px;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;">What you'll learn</p>
  <ul style="list-style:none;padding:0;margin:0;">
    <li style="display:flex;gap:14px;padding:6px 0;font-size:15px;color:#0f172a;line-height:1.55;"><span style="flex-shrink:0;color:#16161D;font-weight:700;">→</span><span>What "Built for Shopify" means, and why it matters for performance, tracking and theme compatibility.</span></li>
    <li style="display:flex;gap:14px;padding:6px 0;font-size:15px;color:#0f172a;line-height:1.55;"><span style="flex-shrink:0;color:#16161D;font-weight:700;">→</span><span>The six features BFS adds vs Legacy: native embed, Shopify Markets, collections, fixed + dynamic recommendations, drag-and-drop logic, large-catalogue support.</span></li>
    <li style="display:flex;gap:14px;padding:6px 0;font-size:15px;color:#0f172a;line-height:1.55;"><span style="flex-shrink:0;color:#16161D;font-weight:700;">→</span><span>Which integrations work natively on BFS today, and which are still coming.</span></li>
    <li style="display:flex;gap:14px;padding:6px 0;font-size:15px;color:#0f172a;line-height:1.55;"><span style="flex-shrink:0;color:#16161D;font-weight:700;">→</span><span>How to switch from the Legacy app to the BFS version, and how to switch back if needed.</span></li>
    <li style="display:flex;gap:14px;padding:6px 0;font-size:15px;color:#0f172a;line-height:1.55;"><span style="flex-shrink:0;color:#16161D;font-weight:700;">→</span><span>What to do if you need an integration that hasn't shipped on BFS yet.</span></li>
  </ul>
</div>

## What "Built for Shopify" means

Built for Shopify is Shopify's highest performance and quality designation for apps. To earn the badge, an app has to meet specific bars on load speed, native theme integration, accessibility, and security. Most apps are standard installs that load inside an iframe and have limited access to Shopify primitives. **BFS apps render directly as Shopify blocks**, integrate seamlessly with the theme editor, and behave like first-party Shopify features.

For a quiz app, the practical effect is large: the quiz inherits your theme's typography and colour tokens, fires Shopify-native events that all your existing tracking already understands, plays correctly with Shopify Markets and Shop Pay, and gets indexed properly by search engines because the content isn't behind an iframe.

![Built for Shopify quiz running natively inside a Shopify theme](/img/blog/revenuehunt-built-for-shopify/bfs-overview.gif)

## Core functionality: what BFS adds vs Legacy

<div class="not-prose my-6 overflow-x-auto">
  <table class="w-full border-collapse text-sm">
    <thead>
      <tr style="background:#16161D;color:#fff;">
        <th style="border:1px solid #cbd5e1;padding:12px;text-align:left;font-weight:600;">Feature</th>
        <th style="border:1px solid #cbd5e1;padding:12px;text-align:left;font-weight:600;">Legacy app</th>
        <th style="border:1px solid #cbd5e1;padding:12px;text-align:left;font-weight:600;">Built for Shopify</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background:#fff;color:#0f172a;"><td style="border:1px solid #cbd5e1;padding:12px;">Build quizzes</td><td style="border:1px solid #cbd5e1;padding:12px;">✓</td><td style="border:1px solid #cbd5e1;padding:12px;">✓</td></tr>
      <tr style="background:#f8fafc;color:#0f172a;"><td style="border:1px solid #cbd5e1;padding:12px;">Recommend products and variants</td><td style="border:1px solid #cbd5e1;padding:12px;">✓</td><td style="border:1px solid #cbd5e1;padding:12px;">✓</td></tr>
      <tr style="background:#fff;color:#0f172a;"><td style="border:1px solid #cbd5e1;padding:12px;"><strong>Recommend entire collections</strong></td><td style="border:1px solid #cbd5e1;padding:12px;">✗</td><td style="border:1px solid #cbd5e1;padding:12px;color:#0F9E9C;font-weight:600;">✓ new</td></tr>
      <tr style="background:#f8fafc;color:#0f172a;"><td style="border:1px solid #cbd5e1;padding:12px;"><strong>Fixed recommendations</strong></td><td style="border:1px solid #cbd5e1;padding:12px;">✗</td><td style="border:1px solid #cbd5e1;padding:12px;color:#0F9E9C;font-weight:600;">✓ new</td></tr>
      <tr style="background:#fff;color:#0f172a;"><td style="border:1px solid #cbd5e1;padding:12px;"><strong>Large product catalogue support</strong></td><td style="border:1px solid #cbd5e1;padding:12px;">limited to 5K SKUs</td><td style="border:1px solid #cbd5e1;padding:12px;color:#0F9E9C;font-weight:600;">✓ unlimited</td></tr>
      <tr style="background:#f8fafc;color:#0f172a;"><td style="border:1px solid #cbd5e1;padding:12px;"><strong>Shopify Markets support</strong></td><td style="border:1px solid #cbd5e1;padding:12px;">✗</td><td style="border:1px solid #cbd5e1;padding:12px;color:#0F9E9C;font-weight:600;">✓ new</td></tr>
      <tr style="background:#fff;color:#0f172a;"><td style="border:1px solid #cbd5e1;padding:12px;">Add product to cart</td><td style="border:1px solid #cbd5e1;padding:12px;">✓</td><td style="border:1px solid #cbd5e1;padding:12px;">✓</td></tr>
      <tr style="background:#f8fafc;color:#0f172a;"><td style="border:1px solid #cbd5e1;padding:12px;">Send result emails</td><td style="border:1px solid #cbd5e1;padding:12px;">✓</td><td style="border:1px solid #cbd5e1;padding:12px;">✓</td></tr>
    </tbody>
  </table>
</div>

### Shopify Markets support

BFS integrates with Shopify Markets, which is the native way to serve different quizzes by region, currency and language. You create a separate quiz per market (or per language), and the right one auto-loads when a shopper visits from the matching region. The recommendations also surface only the products available in that market, so you don't end up recommending a SKU the shopper can't buy.

<div class="not-prose my-6"><img src="/img/blog/revenuehunt-built-for-shopify/shopify-markets-support.webp" alt="Shopify Markets configuration in the BFS app showing per-market quizzes" style="max-width:760px;width:100%;height:auto;display:block;" loading="lazy" /></div>

For the full walkthrough on multi-market and multi-language setup, see our [how to adapt product quizzes for different markets and languages](/how-to-adapt-product-quizzes-for-different-markets-and-languages/) guide.

### Fixed and dynamic recommendations

BFS supports the full recommendation-system flexibility documented in our [product quiz recommendation systems](/product-quiz-recommendation-systems/) decision tree. The defaults: **dynamic** (the algorithm picks based on answers) and **fixed** (you set the same recommendation for all takers). You can mix the two per result slot. So a five-slot result can fire the bestseller in slot 1, dynamic in slots 2-4, and another fixed pick in slot 5.

<div class="not-prose my-6"><img src="/img/blog/revenuehunt-built-for-shopify/fixed-and-dynamic-recommendations.webp" alt="Fixed vs dynamic recommendations options in BFS" style="max-width:380px;width:100%;height:auto;display:block;" loading="lazy" /></div>

### Recommend entire collections

A BFS-only feature. Instead of recommending individual SKUs, the quiz can route the shopper to a curated collection page. Useful for skincare routines, gift sets, seasonal lines, or any case where the customer should land on a selection rather than a single product. Shopify keeps the collection content fresh as you add or remove SKUs.

<div class="not-prose my-6"><img src="/img/blog/revenuehunt-built-for-shopify/collection-recommendations.webp" alt="Collection recommendation block on the BFS results page" style="max-width:760px;width:100%;height:auto;display:block;" loading="lazy" /></div>

## Design and publishing

<div class="not-prose my-6 overflow-x-auto">
  <table class="w-full border-collapse text-sm">
    <thead>
      <tr style="background:#16161D;color:#fff;">
        <th style="border:1px solid #cbd5e1;padding:12px;text-align:left;font-weight:600;">Feature</th>
        <th style="border:1px solid #cbd5e1;padding:12px;text-align:left;font-weight:600;">Legacy app</th>
        <th style="border:1px solid #cbd5e1;padding:12px;text-align:left;font-weight:600;">Built for Shopify</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background:#fff;color:#0f172a;"><td style="border:1px solid #cbd5e1;padding:12px;"><strong>Quiz embed</strong></td><td style="border:1px solid #cbd5e1;padding:12px;">iframe</td><td style="border:1px solid #cbd5e1;padding:12px;color:#0F9E9C;font-weight:600;">✓ native block or popup</td></tr>
      <tr style="background:#f8fafc;color:#0f172a;"><td style="border:1px solid #cbd5e1;padding:12px;"><strong>Modern templates</strong></td><td style="border:1px solid #cbd5e1;padding:12px;">✗</td><td style="border:1px solid #cbd5e1;padding:12px;color:#0F9E9C;font-weight:600;">✓</td></tr>
      <tr style="background:#fff;color:#0f172a;"><td style="border:1px solid #cbd5e1;padding:12px;"><strong>In-app design customisation</strong></td><td style="border:1px solid #cbd5e1;padding:12px;">limited</td><td style="border:1px solid #cbd5e1;padding:12px;color:#0F9E9C;font-weight:600;">✓ extensive</td></tr>
      <tr style="background:#f8fafc;color:#0f172a;"><td style="border:1px solid #cbd5e1;padding:12px;"><strong>Drag-and-drop block builder</strong></td><td style="border:1px solid #cbd5e1;padding:12px;">✗</td><td style="border:1px solid #cbd5e1;padding:12px;color:#0F9E9C;font-weight:600;">✓</td></tr>
      <tr style="background:#fff;color:#0f172a;"><td style="border:1px solid #cbd5e1;padding:12px;">Custom CSS and JavaScript</td><td style="border:1px solid #cbd5e1;padding:12px;">✓</td><td style="border:1px solid #cbd5e1;padding:12px;">✓</td></tr>
      <tr style="background:#f8fafc;color:#0f172a;"><td style="border:1px solid #cbd5e1;padding:12px;">Mobile-friendly</td><td style="border:1px solid #cbd5e1;padding:12px;">✓</td><td style="border:1px solid #cbd5e1;padding:12px;">✓</td></tr>
    </tbody>
  </table>
</div>

### Native quiz embed (no iframe)

The biggest single technical upgrade. On Legacy, the quiz loaded inside an iframe, which introduced the usual iframe problems: load latency, third-party tracking missing events, awkward styling boundaries, accessibility quirks. On BFS, the quiz is a **native Shopify block** (or a popup), which means it inherits theme styles, fires events all your existing tracking already understands, and gets indexed by search engines properly.

<div class="not-prose my-6"><img src="/img/blog/revenuehunt-built-for-shopify/native-quiz-embed.webp" alt="BFS quiz embedded natively as a Shopify block" style="max-width:760px;width:100%;height:auto;display:block;" loading="lazy" /></div>

### Extensive design customisation

Full in-app control over typography, colour tokens, button styles, layout, and spacing. No theme code changes required for any of it. If the brand changes later, update the design tokens once and every quiz on the store inherits the change.

<div class="not-prose my-6"><img src="/img/blog/revenuehunt-built-for-shopify/design-customisation.webp" alt="BFS quiz design customisation panel" style="max-width:760px;width:100%;height:auto;display:block;" loading="lazy" /></div>

### Drag-and-drop block builder

Modelled on Shopify's own theme editor. Add or remove blocks for question types, content, product recommendations, and custom HTML. Drag to reorder. The same block primitives appear on the question pages and the results page.

<div class="not-prose my-6"><img src="/img/blog/revenuehunt-built-for-shopify/block-builder.webp" alt="Drag-and-drop block builder in BFS" style="max-width:760px;width:100%;height:auto;display:block;" loading="lazy" /></div>

### Drag-and-drop conditional logic

The biggest UX upgrade beyond the block builder. Jump logic, skip logic and branching all live in a visual graph that you build by drag-and-drop. The original Legacy interface was a list of if-then-else rules; the BFS interface shows the actual decision tree, which makes complex quizzes orders of magnitude easier to maintain.

<div class="not-prose my-6"><img src="/img/blog/revenuehunt-built-for-shopify/conditional-logic.webp" alt="Drag-and-drop conditional logic editor in BFS" style="max-width:760px;width:100%;height:auto;display:block;" loading="lazy" /></div>

## Integrations

The integration story has matured significantly since BFS first shipped. Most of what was "Coming Soon" at launch has shipped.

<div class="not-prose my-6 overflow-x-auto">
  <table class="w-full border-collapse text-sm">
    <thead>
      <tr style="background:#16161D;color:#fff;">
        <th style="border:1px solid #cbd5e1;padding:12px;text-align:left;font-weight:600;">Integration</th>
        <th style="border:1px solid #cbd5e1;padding:12px;text-align:left;font-weight:600;">Legacy app</th>
        <th style="border:1px solid #cbd5e1;padding:12px;text-align:left;font-weight:600;">Built for Shopify</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background:#fff;color:#0f172a;"><td style="border:1px solid #cbd5e1;padding:12px;">Shopify Discounts</td><td style="border:1px solid #cbd5e1;padding:12px;">✓</td><td style="border:1px solid #cbd5e1;padding:12px;">✓</td></tr>
      <tr style="background:#f8fafc;color:#0f172a;"><td style="border:1px solid #cbd5e1;padding:12px;">Product Metafields Sync</td><td style="border:1px solid #cbd5e1;padding:12px;">✓</td><td style="border:1px solid #cbd5e1;padding:12px;">✓</td></tr>
      <tr style="background:#fff;color:#0f172a;"><td style="border:1px solid #cbd5e1;padding:12px;"><a href="/product-quiz-subscriptions/">ReCharge Subscriptions</a></td><td style="border:1px solid #cbd5e1;padding:12px;">✓</td><td style="border:1px solid #cbd5e1;padding:12px;">✓</td></tr>
      <tr style="background:#f8fafc;color:#0f172a;"><td style="border:1px solid #cbd5e1;padding:12px;"><a href="/shopify-quiz-revenue-tracking/">Google Analytics 4</a></td><td style="border:1px solid #cbd5e1;padding:12px;">✓</td><td style="border:1px solid #cbd5e1;padding:12px;">✓</td></tr>
      <tr style="background:#fff;color:#0f172a;"><td style="border:1px solid #cbd5e1;padding:12px;"><a href="/meta-pixel-quiz-integration/">Meta (Facebook) Pixel</a></td><td style="border:1px solid #cbd5e1;padding:12px;">✓</td><td style="border:1px solid #cbd5e1;padding:12px;">✓</td></tr>
      <tr style="background:#f8fafc;color:#0f172a;"><td style="border:1px solid #cbd5e1;padding:12px;"><a href="/klaviyo-zero-party-data/">Klaviyo</a></td><td style="border:1px solid #cbd5e1;padding:12px;">✓</td><td style="border:1px solid #cbd5e1;padding:12px;">✓</td></tr>
      <tr style="background:#fff;color:#0f172a;"><td style="border:1px solid #cbd5e1;padding:12px;"><a href="/hubspot-quiz-integration/">HubSpot</a></td><td style="border:1px solid #cbd5e1;padding:12px;">✓</td><td style="border:1px solid #cbd5e1;padding:12px;">✓</td></tr>
      <tr style="background:#f8fafc;color:#0f172a;"><td style="border:1px solid #cbd5e1;padding:12px;"><a href="/omnisend-quiz-integration/">Omnisend</a></td><td style="border:1px solid #cbd5e1;padding:12px;">✓</td><td style="border:1px solid #cbd5e1;padding:12px;">✓</td></tr>
      <tr style="background:#fff;color:#0f172a;"><td style="border:1px solid #cbd5e1;padding:12px;">Webhooks</td><td style="border:1px solid #cbd5e1;padding:12px;">✓</td><td style="border:1px solid #cbd5e1;padding:12px;">✓</td></tr>
      <tr style="background:#f8fafc;color:#0f172a;"><td style="border:1px solid #cbd5e1;padding:12px;"><a href="/shopify-quiz-revenue-tracking/">Shopify Revenue Tracking</a></td><td style="border:1px solid #cbd5e1;padding:12px;">manual setup</td><td style="border:1px solid #cbd5e1;padding:12px;color:#0F9E9C;font-weight:600;">✓ automatic</td></tr>
      <tr style="background:#fff;color:#0f172a;"><td style="border:1px solid #cbd5e1;padding:12px;"><a href="/how-to-use-mailchimp-for-post-quiz-email-marketing/">Mailchimp</a></td><td style="border:1px solid #cbd5e1;padding:12px;">✓</td><td style="border:1px solid #cbd5e1;padding:12px;color:#ca8a04;">coming soon</td></tr>
      <tr style="background:#f8fafc;color:#0f172a;"><td style="border:1px solid #cbd5e1;padding:12px;"><a href="/activecampaign-quiz-integration/">ActiveCampaign</a></td><td style="border:1px solid #cbd5e1;padding:12px;">✓</td><td style="border:1px solid #cbd5e1;padding:12px;color:#ca8a04;">coming soon</td></tr>
    </tbody>
  </table>
</div>

The ones still listed as "coming soon" (Mailchimp, ActiveCampaign) have workarounds documented in their respective guides: route the quiz payload through the **Webhooks** integration, which is natively supported on BFS and can fire to any service that accepts a webhook.

## Why BFS converts and Legacy doesn't (the platform numbers)

<div class="not-prose my-10 rounded-3xl bg-[#16161D] p-8 text-white shadow-xl">
  <p class="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-6">What quiz traffic looks like across the platform</p>
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
    <div>
      <p class="text-4xl font-bold text-emerald-400">5.5%</p>
      <p class="text-sm text-slate-300 mt-2">of shoppers who finish a quiz place an order, about 1 in 18, 2.75x a typical 2% store (<a href="/state-of-product-recommendation-quizzes/" class="underline decoration-emerald-400/40 hover:decoration-emerald-400">RevenueHunt benchmark, 45M+ responses</a>)</p>
    </div>
    <div>
      <p class="text-4xl font-bold text-emerald-400">+11-15%</p>
      <p class="text-sm text-slate-300 mt-2">within-store AOV uplift on quiz orders vs non-quiz orders, holding in roughly 7 in 10 stores</p>
    </div>
    <div>
      <p class="text-4xl font-bold text-emerald-400">1 in 5</p>
      <p class="text-sm text-slate-300 mt-2">quiz-attributed orders land more than 30 days later, so the segmentation layer keeps converting through email and ads for months</p>
    </div>
  </div>
</div>

The native embed, automatic Shopify revenue tracking, and Shopify Markets support are the three biggest reasons BFS converts higher than Legacy in practice. Tracking that fires on the iframe Legacy used to lose events; the BFS native block doesn't.

## How to switch from Legacy to BFS

If you already have the RevenueHunt app installed:

1. In your Shopify admin, open **Apps** and click **RevenueHunt: Recommender Quiz**.
2. From the right-hand menu, select **Switch to Built for Shopify**.
3. Confirm app access and permissions.

<div class="not-prose my-6"><img src="/img/blog/revenuehunt-built-for-shopify/switch-to-bfs.webp" alt="Switch to Built for Shopify option in the RevenueHunt app menu" style="max-width:380px;width:100%;height:auto;display:block;" loading="lazy" /></div>

If you don't have the app installed yet, [install RevenueHunt: Recommender Quiz for Shopify](https://apps.shopify.com/product-recommendation-quiz-revenuehunt) from the Shopify App Store; new installs land on the BFS version by default.

> **Quizzes don't migrate automatically.** BFS is a fresh start. You'll need to rebuild any existing quizzes in the new builder. The new interface is faster to build in than the Legacy editor, so the rebuild is usually quicker than expected, but plan for it.

> **You can switch back to Legacy** any time from the same menu if you need a Legacy-only integration that hasn't shipped on BFS yet. We continue to maintain the Legacy app.

## FAQ

### Is the Legacy app going away?

No. The Legacy app is still actively maintained. New installs land on BFS by default and we're investing the bulk of our roadmap there, but Legacy is supported for existing merchants for the foreseeable future.

### Do my Legacy quizzes carry over to BFS?

No. BFS is a fresh start, so quizzes need to be rebuilt in the new interface. The good news: the new builder is meaningfully faster than the Legacy editor, so the rebuild is usually quicker than the original build was.

### What if I need an integration that's only listed as "coming soon" on BFS?

Two options. The cleanest is the **Webhooks** integration: BFS supports it natively, and webhooks can route the quiz payload to any service that accepts them (Mailchimp, ActiveCampaign, or anything else). The other is to stay on the Legacy app until the native integration ships on BFS; you can switch back any time from the app menu.

### Why is BFS faster than the Legacy iframe?

The Legacy app loaded the quiz inside an iframe, which adds load latency, blocks the host page's tracking from seeing events, and limits styling. The BFS quiz is a native Shopify block, so the quiz renders as part of the page rather than as a nested document. Faster first paint, better tracking, cleaner styling, search-engine indexable.

### Can I run both Legacy and BFS on the same store?

You can have both apps installed but only run quizzes on one at a time. The app menu toggle ("Switch to Built for Shopify" / "Switch to Legacy") swaps which version is live. Switching is reversible at any time.

## Next steps

- For the full integration cluster on BFS: [HubSpot](/hubspot-quiz-integration/), [Klaviyo](/klaviyo-zero-party-data/), [Omnisend](/omnisend-quiz-integration/), [Meta Pixel](/meta-pixel-quiz-integration/), [Shopify Flow](/how-to-automate-post-quiz-emails-using-shopify-flows/), [ActiveCampaign workaround](/activecampaign-quiz-integration/).
- For the recommendation system options BFS unlocks: [product quiz recommendation systems](/product-quiz-recommendation-systems/).
- For scoring and personality-type quizzes: [scoring quiz setup](/scoring-quiz-setup/).
- For Shopify-specific revenue attribution that's automatic on BFS: [Shopify quiz revenue tracking](/shopify-quiz-revenue-tracking/).
- For ReCharge subscriptions on BFS: [product quiz subscriptions](/product-quiz-subscriptions/).
- For the full benchmark dataset behind every stat: [the state of product recommendation quizzes](/state-of-product-recommendation-quizzes/).
- Estimate the lift on your own store: [quiz ROI calculator](/quiz-roi-calculator/).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is the RevenueHunt Legacy Shopify app going away?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. The Legacy app is still actively maintained. New installs land on Built for Shopify by default and the bulk of the roadmap is invested there, but Legacy continues to be supported for existing merchants for the foreseeable future."
      }
    },
    {
      "@type": "Question",
      "name": "Do my Legacy quizzes carry over to Built for Shopify?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Built for Shopify is a fresh start, so quizzes need to be rebuilt in the new interface. The new builder is meaningfully faster than the Legacy editor, so the rebuild is usually quicker than the original build was."
      }
    },
    {
      "@type": "Question",
      "name": "What if I need an integration that's only listed as Coming Soon on BFS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Two options. The cleanest is the Webhooks integration: BFS supports it natively and webhooks can route the quiz payload to any service that accepts them. The other is to stay on the Legacy app until the native integration ships on BFS; you can switch back any time."
      }
    },
    {
      "@type": "Question",
      "name": "Why is BFS faster than the Legacy iframe?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Legacy loaded the quiz inside an iframe, which adds load latency, blocks the host page's tracking from seeing events, and limits styling. The BFS quiz is a native Shopify block, so the quiz renders as part of the page rather than as a nested document. Faster first paint, better tracking, cleaner styling, search-engine indexable."
      }
    },
    {
      "@type": "Question",
      "name": "Can I run both Legacy and BFS on the same Shopify store?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can have both apps installed but only run quizzes on one at a time. The app menu toggle swaps which version is live. Switching is reversible at any time."
      }
    }
  ]
}
</script>
