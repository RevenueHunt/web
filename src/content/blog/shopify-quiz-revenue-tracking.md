---
title: "Shopify quiz revenue tracking: native on Built for Shopify, manual on Legacy"
description: "How to track quiz-driven revenue on Shopify: native on Built for Shopify, the manual setup and same-session caveat on Legacy, GA4 for everywhere else."
pubDate: 2025-02-20T07:20:43Z
updatedDate: 2026-06-12T10:00:00Z
tags: ["Shopify", "revenue attribution", "analytics", "GA4", "Built for Shopify"]
categories:
  - "eCommerce"
  - "Sales Funnels"
  - "Shopify Apps"
  - "Tips & Tricks"
author: "Paulina Chodura"
legacySlug: "shopify-quiz-revenue-tracking"
legacyId: 10841
legacyUrl: "https://revenuehunt.com/how-to-track-and-maximize-quiz-driven-revenue-in-shopify/"
featuredImage: "/img/blog/shopify-quiz-revenue-tracking/blogtile_revenue-tracking.webp"
draft: false
---

The biggest difference between the [Built for Shopify](/revenuehunt-built-for-shopify/) (BFS) version of RevenueHunt and the **Shopify Legacy** version is how they handle revenue attribution. On Built for Shopify, the app connects to Shopify Orders automatically the moment it's installed; quiz-attributed orders, total order value and average order value land in the Analytics tab with zero configuration. On Shopify Legacy, the same data requires a multi-step setup **and** a same-session attribution caveat that's easy to miss until your numbers come up flat. On WooCommerce, Magento, BigCommerce and Standalone, the revenue layer is GA4-only.

This guide covers what's automatic on BFS, what to configure on Legacy (including the caveat), and where GA4 fits for everyone else.

![Shopify quiz revenue tracking](/img/blog/shopify-quiz-revenue-tracking/revenue-tracking-hero.webp)

<div style="margin:32px 0;padding:24px 28px;background:#f8fafc;border-left:4px solid #16161D;border-radius:6px;">
  <p style="margin:0 0 14px;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;">What you'll learn</p>
  <ul style="list-style:none;padding:0;margin:0;">
    <li style="display:flex;gap:14px;padding:6px 0;font-size:15px;color:#0f172a;line-height:1.55;"><span style="flex-shrink:0;color:#16161D;font-weight:700;">→</span><span>Why Built for Shopify gives you quiz revenue out of the box and Legacy requires explicit setup.</span></li>
    <li style="display:flex;gap:14px;padding:6px 0;font-size:15px;color:#0f172a;line-height:1.55;"><span style="flex-shrink:0;color:#16161D;font-weight:700;">→</span><span>The same-session attribution caveat on Shopify Legacy and how to configure around it.</span></li>
    <li style="display:flex;gap:14px;padding:6px 0;font-size:15px;color:#0f172a;line-height:1.55;"><span style="flex-shrink:0;color:#16161D;font-weight:700;">→</span><span>Where quiz answers appear inside the Shopify Orders tab, and how to use the tags for segmented marketing.</span></li>
    <li style="display:flex;gap:14px;padding:6px 0;font-size:15px;color:#0f172a;line-height:1.55;"><span style="flex-shrink:0;color:#16161D;font-weight:700;">→</span><span>How the GA4 integration covers the platforms without native Shopify tracking.</span></li>
    <li style="display:flex;gap:14px;padding:6px 0;font-size:15px;color:#0f172a;line-height:1.55;"><span style="flex-shrink:0;color:#16161D;font-weight:700;">→</span><span>Where this data lives in the rest of the analytics stack, and which downstream tools turn it into action.</span></li>
  </ul>
</div>

## Platform support at a glance

<div class="not-prose my-10"><svg viewBox="0 0 1280 540" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="rev-matrix-title" style="width:100%;height:auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#eef2ff;border-radius:16px;padding:24px 16px;box-sizing:border-box;"><title id="rev-matrix-title">Quiz revenue attribution across RevenueHunt platform versions</title><rect x="20" y="20" width="320" height="64" rx="10" fill="#16161D"/><text x="180" y="60" text-anchor="middle" fill="#fff" font-size="18" font-weight="600">Platform</text><rect x="360" y="20" width="600" height="64" rx="10" fill="#16161D"/><text x="660" y="60" text-anchor="middle" fill="#fff" font-size="18" font-weight="600">Native Shopify revenue attribution</text><rect x="980" y="20" width="280" height="64" rx="10" fill="#16161D"/><text x="1120" y="60" text-anchor="middle" fill="#fff" font-size="18" font-weight="600">GA4 fallback</text><rect x="20" y="104" width="320" height="100" rx="10" fill="#fff" stroke="#cbd5e1"/><text x="180" y="161" text-anchor="middle" fill="#0f172a" font-size="19" font-weight="700">Built for Shopify</text><rect x="360" y="104" width="600" height="100" rx="10" fill="#0F9E9C"/><text x="660" y="145" text-anchor="middle" fill="#fff" font-size="18" font-weight="700">Yes ✓ automatic on install</text><text x="660" y="175" text-anchor="middle" fill="#fff" font-size="16">Analytics tab + Orders tab tagged natively</text><rect x="980" y="104" width="280" height="100" rx="10" fill="#fff" stroke="#cbd5e1"/><text x="1120" y="161" text-anchor="middle" fill="#0f172a" font-size="17">Optional, for granular detail</text><rect x="20" y="220" width="320" height="100" rx="10" fill="#f8fafc" stroke="#cbd5e1"/><text x="180" y="277" text-anchor="middle" fill="#0f172a" font-size="19" font-weight="700">Shopify Legacy</text><rect x="360" y="220" width="600" height="100" rx="10" fill="#FFD23F" stroke="#16161D" stroke-width="2"/><text x="660" y="261" text-anchor="middle" fill="#16161D" font-size="18" font-weight="700">Yes, manual setup + caveat</text><text x="660" y="291" text-anchor="middle" fill="#16161D" font-size="16">Same-session purchases only</text><rect x="980" y="220" width="280" height="100" rx="10" fill="#f8fafc" stroke="#cbd5e1"/><text x="1120" y="277" text-anchor="middle" fill="#0f172a" font-size="17">Recommended for delayed orders</text><rect x="20" y="336" width="320" height="100" rx="10" fill="#fff" stroke="#cbd5e1"/><text x="180" y="381" text-anchor="middle" fill="#0f172a" font-size="19" font-weight="700">WooCommerce</text><text x="180" y="406" text-anchor="middle" fill="#0f172a" font-size="19" font-weight="700">Magento</text><rect x="360" y="336" width="600" height="100" rx="10" fill="#F87171"/><text x="660" y="377" text-anchor="middle" fill="#fff" font-size="18" font-weight="700">Not available</text><text x="660" y="407" text-anchor="middle" fill="#fff" font-size="16">No native Shopify-style integration</text><rect x="980" y="336" width="280" height="100" rx="10" fill="#0F9E9C"/><text x="1120" y="385" text-anchor="middle" fill="#fff" font-size="18" font-weight="700">Yes ✓ GA4 only</text><rect x="20" y="452" width="320" height="64" rx="10" fill="#f8fafc" stroke="#cbd5e1"/><text x="180" y="491" text-anchor="middle" fill="#0f172a" font-size="19" font-weight="700">BigCommerce, Standalone</text><rect x="360" y="452" width="600" height="64" rx="10" fill="#F87171"/><text x="660" y="491" text-anchor="middle" fill="#fff" font-size="18" font-weight="700">Not available</text><rect x="980" y="452" width="280" height="64" rx="10" fill="#0F9E9C"/><text x="1120" y="491" text-anchor="middle" fill="#fff" font-size="18" font-weight="700">Yes ✓ GA4 only</text></svg></div>

## Built for Shopify: revenue tracking is automatic

On the Built for Shopify version, RevenueHunt connects to Shopify Orders the moment you install. There's no Connect tab toggle, no consent flow, no Order Notes prerequisite. Open the **Analytics** tab, pick the quiz and time window, and the orders + revenue numbers are there.

<div class="not-prose my-6"><img src="/img/blog/shopify-quiz-revenue-tracking/bfs-analytics-panel.png" alt="Built for Shopify Analytics tab with quiz responses, orders, and revenue" style="max-width:560px;width:100%;height:auto;display:block;" loading="lazy" /></div>

The Analytics tab surfaces by default:

- **Total quiz responses** for the chosen quiz and period
- **Number of orders** attributed to the quiz
- **Total value** of those orders

You can [customise the dashboard](https://docs.revenuehunt.com/reference/quiz-builder/metrics/#customize) to add **Average Order Value**, **Number of Carts**, and other secondary metrics.

### Quiz answers in the Shopify Orders tab

Every order that came through a quiz is automatically marked in your Shopify **Orders** tab. Open any of them and the quiz answers appear on the order record, so support, fulfilment and marketing can all see the customer's stated preferences without leaving Shopify.

<div class="not-prose my-6"><img src="/img/blog/shopify-quiz-revenue-tracking/shopify-orders-with-quiz-tags.png" alt="Shopify order detail showing the quiz answers attached to the order" style="max-width:560px;width:100%;height:auto;display:block;" loading="lazy" /></div>

This is the data that powers downstream segmentation. Pipe the same answers to [Klaviyo](/klaviyo-zero-party-data/), [HubSpot](/hubspot-quiz-integration/) or [Omnisend](/omnisend-quiz-integration/) and your post-purchase flows can address the actual stated concern, not just "thanks for your order." For a worked example of this exact setup driving $691K in 90 days on cold Meta traffic (verified through this revenue-tracking layer), see the [anti-ageing device case study](/anti-aging-beauty-brand-quiz-funnel-case-study/). For the broader strategy on [zero-party data](/zero-party-data/) as a category, and why interrupt-style popups don't produce segmentable lists, see [why popups are walls and quizzes are doors](/why-popups-are-walls-and-quizzes-are-doors-rethinking-lead-capture-for-dtc/).

## Shopify Legacy: manual setup, plus the same-session caveat

On the Legacy app, revenue attribution is opt-in **and** has a behavioural constraint that's easy to overlook. Read the warning below before the setup, not after.

<div style="margin:32px 0;padding:24px 28px;background:#fef2f2;border-left:4px solid #dc2626;border-radius:6px;">
  <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#dc2626;">Critical caveat</p>
  <p style="margin:0;font-size:15px;line-height:1.55;color:#0f172a;">On Shopify Legacy, Shopify Revenue Tracking and Orders Tagging only attribute a purchase to the quiz if the customer (a) adds products to cart <strong>directly from the quiz results page</strong>, (b) <strong>proceeds immediately to cart</strong> after the quiz, and (c) <strong>completes the purchase in the same session</strong>. Delayed purchases (next day, after an email, after re-engagement) will <strong>not</strong> be attributed. Your Results Page Checkout setting must be <code>proceed to cart</code>, not <code>proceed to checkout</code> or <code>link to product</code>. If most of your sales close on a later visit, you'll see a much smaller revenue figure than the quiz actually deserves; route the delayed-attribution case through GA4 (below) instead.</p>
</div>

### Setup on Legacy

1. **Enable Order Notes** in your Shopify Theme Settings (the integration uses Order Notes as the data carrier). Follow [Shopify's instructions](https://help.shopify.com/en/manual/online-store/themes/themes-by-shopify/vintage-themes/customizing-vintage-themes/get-more-information-with-order-notes) or ask your theme developer.
2. In the RevenueHunt app, open the **Connect** tab and find **Shopify Revenue Report**. Click **Connect**.
3. **Grant consent** when prompted. This authorises the app to read your order data.
4. Click **Publish** in the top-right to apply the changes.

<div class="not-prose my-6"><img src="/img/blog/shopify-quiz-revenue-tracking/legacy-revenue-report-connect.webp" alt="Shopify Revenue Report Connect button in the Connect tab" style="max-width:560px;width:100%;height:auto;display:block;" loading="lazy" /></div>

### View the data

Once connected, **Metrics > Analytics** in the RevenueHunt app shows:

- **Number of Orders**: orders placed after a quiz completion (subject to the same-session caveat)
- **Total Orders Value**: cumulative revenue from those orders
- **Avg. Order Value**: average value of post-quiz orders

<div class="not-prose my-6"><img src="/img/blog/shopify-quiz-revenue-tracking/legacy-analytics-revenue.png" alt="Shopify Legacy Analytics dashboard with revenue metrics" style="max-width:560px;width:100%;height:auto;display:block;" loading="lazy" /></div>

### Show quiz answers in Shopify Orders on Legacy

Legacy also supports surfacing quiz answers on the Shopify order record, but it's a separate toggle in the Connect tab (look for **Shopify Orders Tagging**). The mechanic is the same as BFS once enabled. See the [docs page on showing quiz answers in orders](https://docs.revenuehunt.com/how-to-guides/show-quiz-answers-in-orders/) for the per-platform walkthrough.

## WooCommerce, Magento, BigCommerce, Standalone: GA4 only

No native Shopify-style revenue integration exists on these platforms. The supported path is **Google Analytics 4**, which works identically across every RevenueHunt version, doesn't have the Legacy same-session caveat, and gives you attribution back as far as your GA4 reporting window allows.

## GA4 integration: the cross-platform option

Even on BFS, GA4 is worth adding once revenue starts to matter. The native Shopify integration is good for "did the quiz produce a sale today?" GA4 answers the harder questions: which traffic source drove the highest-value quiz takers, which question is the biggest drop-off point, and what does the path to purchase look like for someone who took the quiz two weeks ago.

### Setup

1. In the RevenueHunt app, open the **Connect** tab and find **Google Analytics**.
2. In GA4, open **Admin > Data Streams** and copy your **Measurement ID** (format `G-XXXXXXX`).
3. Paste the Measurement ID into RevenueHunt and save.
4. Publish the quiz to activate tracking.

### What you get in GA4

- Quiz starts, question views, completion rates
- Choices selected and products recommended
- Add-to-cart actions and checkouts
- Revenue from quiz-driven sales (Engagement > Conversions > Purchase, filter `source = revenuehunt`)

<div class="not-prose my-6"><img src="/img/blog/shopify-quiz-revenue-tracking/ga4-revenue.png" alt="GA4 conversions report filtered by source revenuehunt" style="max-width:560px;width:100%;height:auto;display:block;" loading="lazy" /></div>

For advanced custom events, embed the [`prqQuizCallback`](https://docs.revenuehunt.com/how-to-guides/integrate-google-analytics/#add-custom-trackers) function in your theme to fire your own `gtag` calls for specific choices or answer combinations.

## What the data is for

<div class="not-prose my-10 rounded-3xl bg-[#16161D] p-8 text-white shadow-xl">
  <p class="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-6">What the typical quiz-driven Shopify store looks like</p>
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
      <p class="text-sm text-slate-300 mt-2">quiz-attributed orders land more than 30 days later, so use GA4 alongside native Shopify tracking to capture the long tail</p>
    </div>
  </div>
</div>

The numbers in the Analytics tab give you the headline. What makes them act on you is the downstream activation:

- **Identify the high-converting answer paths.** Sort responses by which choices correlate with the best [average order value](/glossary/average-order-value/) and double down on those paths in your quiz design.
- **Tag every quiz answer for [customer segmentation](/glossary/customer-segmentation/) in email and ads.** The Shopify order tags + Klaviyo / HubSpot custom properties are the activation surface. See [customer tags in product quizzes](/how-to-use-customer-tags-in-product-quizzes-to-maximize-sales/).
- **Retarget the shoppers who took the quiz but didn't buy.** Build a Meta audience on `Lead` event but not `Purchase`. The [Meta Pixel quiz integration guide](/meta-pixel-quiz-integration/) covers the full setup.
- **Watch the metrics that diagnose what to fix next.** Use [product quiz metrics: what to track to convert better](/product-quiz-metrics-what-to-track-to-convert-better/) as the troubleshooting playbook when a number lands below benchmark.

## FAQ

### Do I need to set anything up to see quiz revenue on Built for Shopify?

No. The Built for Shopify version connects to Shopify Orders automatically when installed. Open **Analytics**, pick the quiz, set the time window, and the orders + revenue numbers are there. Customise the dashboard if you want secondary metrics like AOV or carts.

### Why is my Shopify Legacy revenue tracking showing low numbers?

The same-session attribution rule. On Legacy, only purchases made in the same session as the quiz completion get attributed. If most of your buyers complete the purchase later (after an email, after a re-engagement ad), GA4 is the right tool. Add it via the Connect tab and use the GA4 Purchase event filtered by `source = revenuehunt` for the full picture.

### Can I see which Shopify order came from which quiz answer?

Yes, on both Built for Shopify and Shopify Legacy. On BFS the quiz answers appear on the Shopify order record by default. On Legacy you enable **Shopify Orders Tagging** in the Connect tab and the answers attach the same way. Support and fulfilment can read the stated preferences without leaving Shopify.

### Does any of this work on WooCommerce, Magento, BigCommerce or Standalone?

No native Shopify-style revenue layer exists on those platforms, but the GA4 integration works on all of them. Set the Measurement ID in the Connect tab and revenue lands under **Engagement > Conversions > Purchase** in GA4, filtered by `source = revenuehunt`.

### Should I run native Shopify tracking AND GA4?

On Built for Shopify, often yes. The native Shopify integration is the daily "did the quiz work today" check; GA4 handles delayed attribution, traffic-source attribution, and cohort analysis that the Shopify Analytics tab doesn't cover. On Legacy with the same-session caveat, treating GA4 as the source-of-truth is usually safer.

## Next steps

- For the metrics to diagnose against once revenue is flowing: [product quiz metrics: what to track to convert better](/product-quiz-metrics-what-to-track-to-convert-better/).
- For the ad-side audiences this data unlocks: [Meta Pixel quiz integration](/meta-pixel-quiz-integration/).
- For the segmentation layer downstream: [customer tags in product quizzes](/how-to-use-customer-tags-in-product-quizzes-to-maximize-sales/) and [Klaviyo zero-party data](/klaviyo-zero-party-data/).
- For the recommendation logic that determines what shoppers see: [product quiz recommendation systems](/product-quiz-recommendation-systems/).
- For the full strategy this attribution layer fits into: [build a sales funnel on a Shopify store](/build-sales-funnel-shopify-store/).
- Estimate the revenue lift on your own store: [quiz ROI calculator](/quiz-roi-calculator/).
- The benchmark report behind every stat: [the state of product recommendation quizzes](/state-of-product-recommendation-quizzes/).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do I need to set anything up to see quiz revenue on Built for Shopify?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. The Built for Shopify version connects to Shopify Orders automatically when installed. Open Analytics, pick the quiz, set the time window, and the orders and revenue numbers are there."
      }
    },
    {
      "@type": "Question",
      "name": "Why is my Shopify Legacy revenue tracking showing low numbers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The same-session attribution rule. On Legacy, only purchases made in the same session as the quiz completion get attributed. If most of your buyers complete the purchase later, GA4 is the right tool. Add it via the Connect tab and use the GA4 Purchase event filtered by source = revenuehunt for the full picture."
      }
    },
    {
      "@type": "Question",
      "name": "Can I see which Shopify order came from which quiz answer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, on both Built for Shopify and Shopify Legacy. On BFS the quiz answers appear on the Shopify order record by default. On Legacy you enable Shopify Orders Tagging in the Connect tab and the answers attach the same way."
      }
    },
    {
      "@type": "Question",
      "name": "Does revenue tracking work on WooCommerce, Magento, BigCommerce or Standalone?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No native Shopify-style revenue layer exists on those platforms, but the GA4 integration works on all of them. Set the Measurement ID in the Connect tab and revenue lands under Engagement > Conversions > Purchase in GA4, filtered by source = revenuehunt."
      }
    },
    {
      "@type": "Question",
      "name": "Should I run native Shopify tracking and GA4 together?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "On Built for Shopify, often yes. The native Shopify integration is the daily check; GA4 handles delayed attribution, traffic-source attribution, and cohort analysis. On Legacy with the same-session caveat, treating GA4 as the source-of-truth is usually safer."
      }
    }
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to connect Google Analytics 4 to a RevenueHunt quiz",
  "description": "Connect a RevenueHunt product recommendation quiz to Google Analytics 4 to track quiz starts, completions, recommendations, add-to-cart actions and quiz-driven revenue. Works on every RevenueHunt platform version (Built for Shopify, Shopify Legacy, WooCommerce, Magento, BigCommerce, Standalone).",
  "totalTime": "PT3M",
  "tool": [
    {"@type": "HowToTool", "name": "RevenueHunt: Recommender Quiz app"},
    {"@type": "HowToTool", "name": "Google Analytics 4 property"}
  ],
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Open the Connect tab in the RevenueHunt app",
      "text": "In the RevenueHunt app, open the quiz, then the Connect tab, and find Google Analytics."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Copy your GA4 Measurement ID",
      "text": "In GA4, open Admin > Data Streams and copy your Measurement ID (format G-XXXXXXX)."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Paste the Measurement ID into RevenueHunt",
      "text": "Paste the GA4 Measurement ID into RevenueHunt and save."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Publish the quiz to activate tracking",
      "text": "Publish the quiz. Quiz events will now appear in GA4 under Engagement > Conversions > Purchase, filtered by source = revenuehunt."
    }
  ]
}
</script>
