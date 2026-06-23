---
title: "Meta Pixel quiz integration: retarget quiz takers, build better lookalikes"
description: "Connect a RevenueHunt quiz to Meta (Facebook) Pixel: setup by platform, the full tracked-events table, custom audiences, and reviewing custom events."
pubDate: 2025-02-06T07:59:08Z
updatedDate: 2026-06-12T10:00:00Z
tags: ["Meta Pixel", "Facebook Pixel", "integrations", "advertising", "retargeting"]
categories:
  - "eCommerce"
  - "Shopify Apps"
  - "Tips & Tricks"
author: "Paulina Chodura"
legacySlug: "meta-pixel-quiz-integration"
legacyId: 10818
legacyUrl: "https://revenuehunt.com/make-your-facebook-ads-smarter-with-revenuehunts-quiz-integration/"
featuredImage: "/img/blog/meta-pixel-quiz-integration/blogtile_meta-pixel.webp"
draft: false
---

Meta Pixel (the tool formerly called Facebook Pixel) is the tracking layer that makes Facebook and Instagram ads accountable: it tells you who visited, what they did, and which actions correlate with a sale. A product recommendation quiz fires a much richer set of events than a plain catalogue page does. Wired together, the two unlock the two ad audiences that consistently outperform cold prospecting: **retargeting quiz takers who didn't buy** and **lookalike audiences built from people who completed the quiz**.

This guide covers how to connect a RevenueHunt quiz to Meta Pixel on every platform version, the **real** list of events the integration fires (the docs version, not the marketing version), the required "Review Custom Events" step most setups forget, and the two ad audiences that pay back the setup cost.

![Meta Pixel quiz integration](/img/blog/meta-pixel-quiz-integration/meta-pixel-quiz-hero.webp)

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 01</span> &nbsp;The Meta Pixel quiz integration: every quiz step fires a Pixel event so the Lead and Add-to-Cart events Meta's algorithm optimises against include the quiz funnel's actual signal, not just the storefront's last touch.</p>

<div style="margin:32px 0;padding:24px 28px;background:#f8fafc;border-left:4px solid #16161D;border-radius:6px;">
  <p style="margin:0 0 14px;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;">What you'll learn</p>
  <ul style="list-style:none;padding:0;margin:0;">
    <li style="display:flex;gap:14px;padding:6px 0;font-size:15px;color:#0f172a;line-height:1.55;"><span style="flex-shrink:0;color:#16161D;font-weight:700;">→</span><span>How to connect Meta Pixel on Built for Shopify (multi-step), Shopify Legacy, and the simpler WooCommerce / Magento / BigCommerce / Standalone flow.</span></li>
    <li style="display:flex;gap:14px;padding:6px 0;font-size:15px;color:#0f172a;line-height:1.55;"><span style="flex-shrink:0;color:#16161D;font-weight:700;">→</span><span>The 10 events the integration fires automatically, with the exact <code>fbq</code> action, event name, and parameter payload.</span></li>
    <li style="display:flex;gap:14px;padding:6px 0;font-size:15px;color:#0f172a;line-height:1.55;"><span style="flex-shrink:0;color:#16161D;font-weight:700;">→</span><span>The <em>Review Custom Events</em> step that most setups forget, and why your <code>RetakeQuiz</code> / <code>EmailLead</code> audiences sit empty without it.</span></li>
    <li style="display:flex;gap:14px;padding:6px 0;font-size:15px;color:#0f172a;line-height:1.55;"><span style="flex-shrink:0;color:#16161D;font-weight:700;">→</span><span>The two ad audiences that actually convert (retargeting quiz takers, lookalikes of quiz completers) and how to build them.</span></li>
    <li style="display:flex;gap:14px;padding:6px 0;font-size:15px;color:#0f172a;line-height:1.55;"><span style="flex-shrink:0;color:#16161D;font-weight:700;">→</span><span>When to use the custom <code>prqQuizCallback</code> function instead of the built-in integration.</span></li>
  </ul>
</div>

## Why a quiz pairs with Meta Pixel

The standard Shopify Pixel setup fires `PageView` and `AddToCart` for everyone who lands on the store. Useful, but the shopper is anonymous: you don't know whether they're a serious match for your products or a bounce who clicked the wrong ad. A quiz changes that. By the time someone has answered three questions and reached the results page, you know their skin type, their concern, their budget band, and what you recommended. The Pixel attaches all of that to the customer record. You can now retarget by **specific concern**, not "people who saw a product page."

For a worked example of this in production (a US anti-ageing device brand sending cold Meta ad traffic directly into a quiz instead of a collection page), see the [anti-ageing device case study](/anti-aging-beauty-brand-quiz-funnel-case-study/) (9.8% quiz-to-purchase CVR on cold Meta traffic, +42.64% AOV lift, $691,128 in 90 days). The strategic argument behind the architecture is [quiz funnels vs collection pages](/quiz-funnels-vs-collection-pages-why-your-paid-traffic-bounces/); the popup-vs-quiz lead-capture pillar is [why popups are walls and quizzes are doors](/why-popups-are-walls-and-quizzes-are-doors-rethinking-lead-capture-for-dtc/).

<div class="not-prose my-10 rounded-3xl bg-[#16161D] p-8 text-white shadow-xl">
  <p class="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-6">Why quiz-driven ad audiences convert</p>
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
    <div>
      <p class="text-4xl font-bold text-emerald-400">5.5%</p>
      <p class="text-sm text-slate-300 mt-2">of shoppers who finish a quiz place an order, about 1 in 18, 2.75x a typical 2% store (<a href="/state-of-product-recommendation-quizzes/" class="underline decoration-emerald-400/40 hover:decoration-emerald-400">RevenueHunt benchmark, 45M+ responses</a>)</p>
    </div>
    <div>
      <p class="text-4xl font-bold text-emerald-400">71%</p>
      <p class="text-sm text-slate-300 mt-2">of top-converting quizzes collect email (75% make it required), which is the seed list for Meta lookalike audiences</p>
    </div>
    <div>
      <p class="text-4xl font-bold text-emerald-400">1 in 5</p>
      <p class="text-sm text-slate-300 mt-2">quiz-attributed orders land more than 30 days later, so the retargeting layer keeps converting for months after the visit</p>
    </div>
  </div>
</div>

## Setup paths by platform

The setup is **multi-step on Shopify** (because the Pixel itself lives in Shopify's Customer Events, not in the RevenueHunt app), and **single-step on the multi-platform versions** (paste the Pixel ID and you're done).

### [Built for Shopify](/revenuehunt-built-for-shopify/)

1. **Connect the Pixel to Shopify.** In Shopify admin, **Settings > Customer events**. If Meta Pixel isn't already integrated, install the [Facebook and Instagram Meta app](https://apps.shopify.com/facebook-and-instagram-meta-app).
2. **Configure the Facebook and Instagram app.** Open it in Shopify, go to **Settings**, set **Shared data** to **Maximum** so custom events come through. Choose or create a **data set** for tracking.

   <div class="not-prose my-6 ml-0 sm:ml-8"><img src="/img/blog/meta-pixel-quiz-integration/facebook-app-settings.png" alt="Facebook and Instagram app settings in Shopify with Shared data set to Maximum" style="max-width:520px;width:100%;height:auto;display:block;" loading="lazy" /></div>

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 02</span> &nbsp;Facebook and Instagram app settings in Shopify with Shared data set to Maximum. Required for custom events from the quiz to reach Meta; the default Standard level strips the `content_category` and `content_name` tags the quiz fires.</p>

3. **Publish the quiz on a dedicated page.** Pixel tracking is most reliable when the quiz lives on its own landing page rather than embedded as a widget on the homepage. See [publish quiz inline](https://docs.revenuehunt.com/how-to-guides/publish-quiz-inline/) for the embed.
4. **Activate the integration in the quiz.** Open **Quiz Settings > Integrations**, find the **Meta Pixel** section and click **Activate**. Save. The quiz now binds to whichever Pixel is already firing on your store.

   <div class="not-prose my-6 ml-0 sm:ml-8"><img src="/img/blog/meta-pixel-quiz-integration/integrations-meta-pixel.png" alt="Meta Pixel section in the Integrations tab" style="max-width:520px;width:100%;height:auto;display:block;" loading="lazy" /></div>

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 03</span> &nbsp;The Meta Pixel section inside Quiz Settings, Integrations. Activate the toggle to bind the quiz to whichever Pixel is already firing on the store; the integration then fires PageView, ViewContent, Lead and AddToCart per slide automatically.</p>

5. **Test.** In Shopify admin > Facebook and Instagram app > Settings > open your data set in Meta Events Manager > **Test events**. Enter your quiz page URL, take the quiz, and confirm events appear (`ViewContent`, `Lead`, custom events).
6. **Review Custom Events.** The custom events (`RetakeQuiz`, `EmailLead`) are **not usable in ads or audiences until you review them**. See the section below.

### Shopify Legacy

Same Shopify-side prep (Customer events + Facebook & Instagram app + data set), then in RevenueHunt:

1. Open the **Connect** tab in the Quiz Builder.
2. Find the **Meta Pixel** section, click **Connect**, paste your **Pixel ID**, save.
3. Test in Events Manager. Review Custom Events afterwards.

### WooCommerce, Magento, BigCommerce, Standalone

Simplest of the lot: no Shopify-app step.

1. Open the **Connect** tab in the Quiz Builder.
2. Find the **Meta Pixel** section, click **Connect**, paste your **Pixel ID**, save.
3. Test in Events Manager. Review Custom Events afterwards.

> **Set up the Pixel itself first.** All platforms assume you already have a Pixel created in Meta Business. If you don't, follow [Meta's setup guide](https://www.facebook.com/business/help/952192354843755?id=1205376682832142) before configuring the quiz integration.

## The events the integration fires

The events table that matters. Every interaction below fires automatically once the integration is active, with no manual scripting required.

<div class="not-prose my-6 overflow-x-auto">
  <table class="w-full border-collapse text-sm">
    <thead>
      <tr style="background:#16161D;color:#fff;">
        <th style="border:1px solid #cbd5e1;padding:12px;text-align:left;font-weight:600;">User action</th>
        <th style="border:1px solid #cbd5e1;padding:12px;text-align:left;font-weight:600;">fbq action</th>
        <th style="border:1px solid #cbd5e1;padding:12px;text-align:left;font-weight:600;">Event</th>
        <th style="border:1px solid #cbd5e1;padding:12px;text-align:left;font-weight:600;">Payload</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background:#fff;color:#0f172a;">
        <td style="border:1px solid #cbd5e1;padding:12px;">Starts a quiz</td>
        <td style="border:1px solid #cbd5e1;padding:12px;"><code>track</code></td>
        <td style="border:1px solid #cbd5e1;padding:12px;"><code>ViewContent</code></td>
        <td style="border:1px solid #cbd5e1;padding:12px;"><code>{ content_name: quiz_name, content_category: 'quiz' }</code></td>
      </tr>
      <tr style="background:#f8fafc;color:#0f172a;">
        <td style="border:1px solid #cbd5e1;padding:12px;">Views a question</td>
        <td style="border:1px solid #cbd5e1;padding:12px;"><code>track</code></td>
        <td style="border:1px solid #cbd5e1;padding:12px;"><code>ViewContent</code></td>
        <td style="border:1px solid #cbd5e1;padding:12px;"><code>{ content_name: question_title, content_category: 'question' }</code></td>
      </tr>
      <tr style="background:#fff;color:#0f172a;">
        <td style="border:1px solid #cbd5e1;padding:12px;">Clicks a choice</td>
        <td style="border:1px solid #cbd5e1;padding:12px;"><code>track</code></td>
        <td style="border:1px solid #cbd5e1;padding:12px;"><code>ViewContent</code></td>
        <td style="border:1px solid #cbd5e1;padding:12px;"><code>{ content_name: choice_text, content_category: 'choice' }</code></td>
      </tr>
      <tr style="background:#f8fafc;color:#0f172a;">
        <td style="border:1px solid #cbd5e1;padding:12px;">Submits email</td>
        <td style="border:1px solid #cbd5e1;padding:12px;"><code>trackCustom</code></td>
        <td style="border:1px solid #cbd5e1;padding:12px;"><code>EmailLead</code></td>
        <td style="border:1px solid #cbd5e1;padding:12px;"><code>{ content_name: quiz_name, content_category: 'lead' }</code></td>
      </tr>
      <tr style="background:#fff;color:#0f172a;">
        <td style="border:1px solid #cbd5e1;padding:12px;">Submits phone</td>
        <td style="border:1px solid #cbd5e1;padding:12px;"><code>trackCustom</code></td>
        <td style="border:1px solid #cbd5e1;padding:12px;"><code>PhoneLead</code></td>
        <td style="border:1px solid #cbd5e1;padding:12px;"><code>{ content_name: quiz_name, content_category: 'lead' }</code></td>
      </tr>
      <tr style="background:#f8fafc;color:#0f172a;">
        <td style="border:1px solid #cbd5e1;padding:12px;">Reaches results page</td>
        <td style="border:1px solid #cbd5e1;padding:12px;"><code>track</code></td>
        <td style="border:1px solid #cbd5e1;padding:12px;"><code>ViewContent</code> + <code>Lead</code></td>
        <td style="border:1px solid #cbd5e1;padding:12px;"><code>{ content_name: results_page_title, content_category: 'results' }</code></td>
      </tr>
      <tr style="background:#fff;color:#0f172a;">
        <td style="border:1px solid #cbd5e1;padding:12px;">A product is recommended on the results page</td>
        <td style="border:1px solid #cbd5e1;padding:12px;"><code>track</code></td>
        <td style="border:1px solid #cbd5e1;padding:12px;"><code>ViewContent</code></td>
        <td style="border:1px solid #cbd5e1;padding:12px;"><code>{ content_name, content_type: 'recommendation', content_ids: [sku], value: price, currency }</code></td>
      </tr>
      <tr style="background:#f8fafc;color:#0f172a;">
        <td style="border:1px solid #cbd5e1;padding:12px;">Adds product to cart</td>
        <td style="border:1px solid #cbd5e1;padding:12px;"><code>track</code></td>
        <td style="border:1px solid #cbd5e1;padding:12px;"><code>AddToCart</code></td>
        <td style="border:1px solid #cbd5e1;padding:12px;"><code>{ content_name, content_type: 'recommendation', content_ids: [sku], value: price, currency }</code></td>
      </tr>
      <tr style="background:#fff;color:#0f172a;">
        <td style="border:1px solid #cbd5e1;padding:12px;">Proceeds to checkout</td>
        <td style="border:1px solid #cbd5e1;padding:12px;"><code>track</code></td>
        <td style="border:1px solid #cbd5e1;padding:12px;"><code>InitiateCheckout</code></td>
        <td style="border:1px solid #cbd5e1;padding:12px;"><code>{ num_items, currency, value }</code></td>
      </tr>
      <tr style="background:#f8fafc;color:#0f172a;">
        <td style="border:1px solid #cbd5e1;padding:12px;">Retakes the quiz</td>
        <td style="border:1px solid #cbd5e1;padding:12px;"><code>trackCustom</code></td>
        <td style="border:1px solid #cbd5e1;padding:12px;"><code>RetakeQuiz</code></td>
        <td style="border:1px solid #cbd5e1;padding:12px;"><code>{ content_name: quiz_name, content_category: 'quiz' }</code></td>
      </tr>
    </tbody>
  </table>
</div>

The `content_category` tag on every `ViewContent` event is what lets you build precise audiences. Filtering on `content_category = 'results'` gives you everyone who reached the results page. Filtering on `content_category = 'choice'` with `content_name = "Oily skin"` gives you everyone who picked that specific answer.

<div class="not-prose my-6"><img src="/img/blog/meta-pixel-quiz-integration/events-manager-dashboard.png" alt="Meta Events Manager dashboard showing quiz events" style="max-width:520px;width:100%;height:auto;display:block;" loading="lazy" /></div>

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 04</span> &nbsp;Meta Events Manager showing quiz events arriving live. The `content_category` tag (results / choice / question) is what makes precise audiences possible: filter on category = results for completers, or category = choice with a specific content_name for answer-level retargeting.</p>

## Review Custom Events (the step everyone misses)

The two custom events the integration fires, `RetakeQuiz` and `EmailLead`, **don't show up in Meta's ad audience builder until you've reviewed them**. New setups often end up with empty custom audiences and no obvious reason why.

The fix:

1. In Meta Events Manager, open your data source. Look for the notification "Custom events can't be used with ads features."
2. Click **Review**.
3. **Acknowledge** the terms and select which custom events you want enabled (both `RetakeQuiz` and `EmailLead` are recommended).
4. Click **Next**, then **Confirm**.
5. Refresh Events Manager. The notification should be gone and the events become available in **Audiences > Create Audience**.

   <div class="not-prose my-6 ml-0 sm:ml-8"><img src="/img/blog/meta-pixel-quiz-integration/review-custom-events.png" alt="Review Custom Events notification in Meta Events Manager" style="max-width:520px;width:100%;height:auto;display:block;" loading="lazy" /></div>

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 05</span> &nbsp;The Review Custom Events notification in Meta Events Manager. Easy to miss; until it's actioned, the quiz events stay in pending status and don't become available for audience building. Click through, Confirm, and the events unlock in Audiences > Create Audience.</p>

This is a one-time step per data source.

## The two ad audiences worth building

Most of the integration's value lands in two audiences. Build them once, refresh them on a cadence, and let the Meta delivery system take over.

### 1. Retarget quiz takers who didn't buy

The highest-intent retargeting audience you can build on a quiz-driven store. Anyone who reached the results page invested 60-90 seconds telling you their preferences. If they didn't buy, the friction was somewhere downstream (price, shipping, second-guessing), exactly the friction a retargeting ad can address with a specific message.

**How to build it:** Audience definition in Meta = "People who fired `Lead` event in the last 30 days" AND "did NOT fire `Purchase` event in the last 30 days." Ad creative shows the **specific product the quiz recommended** (use a dynamic product ad pulling from the same catalogue) and the **stated concern** from their quiz answer where you have it.

### 2. Lookalike audience from quiz completers

The seed list is small but unusually high-quality. People who completed your quiz are by definition higher-intent than your store's overall traffic, which means the Meta lookalike model has a sharper signal to fit on.

**How to build it:** Source audience = "People who fired `EmailLead` in the last 90 days." Build a 1% lookalike for prospecting cold traffic. The 1-2% bands work better than 5-10% for niche stores. If your quiz is large enough (a few thousand completions), source on `Lead` instead and you'll get an even better-fit seed.

## When to use the Custom Pixel callback instead

If you need to track an event the built-in integration doesn't expose (a specific choice combination, a custom-named action, an event with a payload structured for a non-standard ad platform), use the `prqQuizCallback` function instead of the built-in connector.

The pattern: deactivate the built-in Meta Pixel integration in the Connect tab, then add a script sitewide that defines `prqQuizCallback`. The callback runs on every quiz interaction with the response payload, letting you fire whatever `fbq` call (or any other tracking call) you need.

```html
<script>
function prqQuizCallback(quizResponse){
  // Inspect quizResponse for the event you care about
  // and fire your own fbq() call here.
  window.fbq('track', 'CustomEvent', { /* params */ });
}
</script>
```

See the [callback function reference](https://docs.revenuehunt.com/how-to-guides/use-callback-function/) for the full signature. For most stores the built-in integration handles 95% of use cases; the callback is for the long tail.

## Where Meta Pixel fits in the stack

Pixel handles **ad-side tracking and audiences**. It doesn't replace the email and CRM integrations that turn quiz answers into segmented follow-up flows, and it's **not the right tool for revenue attribution post-iOS 14.5** (the [first-party Shopify quiz analytics](/first-party-shopify-quiz-analytics/) pillar covers why Pixel under-reports 20-40% of attributed orders and what to do about it). The clean operating rule: **Pixel for audiences, first-party analytics for revenue.** With that out of the way, the clean separation:

- **Meta Pixel** for retargeting and lookalike audiences (this article).
- **[Klaviyo](/klaviyo-zero-party-data/)** or **[HubSpot](/hubspot-quiz-integration/)** for email + flow personalisation built on quiz answers.
- **[Omnisend](/omnisend-quiz-integration/)** if you want email + SMS + web-push in one tool.
- **[Mailchimp](/how-to-use-mailchimp-for-post-quiz-email-marketing/)** for non-ecommerce-first audiences, on platforms other than Built for Shopify.
- **[Shopify Flow](/how-to-automate-post-quiz-emails-using-shopify-flows/)** for tag-driven automations that stay inside Shopify.

Most stores run Pixel + one email integration; the rare advanced setup runs Pixel + Klaviyo + HubSpot.

## FAQ

### Why are my custom events (RetakeQuiz, EmailLead) not appearing in Audiences?

Because you haven't reviewed them yet. Meta gates custom events from ads features until you explicitly acknowledge them. Open Events Manager > your data source > **Review** > Acknowledge > select RetakeQuiz and EmailLead > Confirm. The events become available in the Audience builder afterwards.

### Do I need a separate Pixel for the quiz?

No. The integration binds to whichever Pixel is already firing on your storefront. On Built for Shopify it picks up the Pixel configured in Customer Events; on Legacy and the multi-platform versions you paste the Pixel ID directly.

### Should the quiz live on its own page or be embedded inline?

For Pixel tracking accuracy, a **dedicated page** is recommended. Page-level events (URL, title) are cleaner when the page only contains the quiz, and ad-attribution windows work better when the conversion URL is distinct from the rest of the store.

### What's the difference between this and Shopify's own Customer Events?

Shopify Customer Events tracks store-wide actions: page views, add-to-cart, checkout, purchase. The quiz integration adds the **quiz-specific layer** on top: which question was viewed, which choice was clicked, when the email was submitted, when the user retook the quiz. Both fire on the same Pixel, so audiences can combine them.

### Can I use the Conversions API instead of (or alongside) the Pixel?

The built-in integration fires client-side via the Pixel script. For server-side Conversions API events, use the [Custom Pixel callback](#when-to-use-the-custom-pixel-callback-instead) approach to fire your own CAPI calls server-side, in addition to or instead of the built-in Pixel events. Most stores don't need this; Shopify's Customer Events handles purchase-side CAPI by default on Built for Shopify.

## Next steps

- For the email/CRM side of the post-quiz stack: [HubSpot](/hubspot-quiz-integration/), [Klaviyo](/klaviyo-zero-party-data/), [Omnisend](/omnisend-quiz-integration/), [Mailchimp](/how-to-use-mailchimp-for-post-quiz-email-marketing/) integration guides.
- For tag-driven Shopify automations: [Shopify Flow](/how-to-automate-post-quiz-emails-using-shopify-flows/).
- For the data layer the audiences are built on: [customer tags in product quizzes](/how-to-use-customer-tags-in-product-quizzes-to-maximize-sales/) and [zero-party data](/zero-party-data/).
- For consent at quiz time so the Pixel can legally fire: [marketing consent in your quiz](/product-quiz-marketing-consent/).
- For the full strategy this audience layer fits into: [build a sales funnel on a Shopify store](/build-sales-funnel-shopify-store/).
- Estimate the lift on your own store: [quiz ROI calculator](/quiz-roi-calculator/).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why are my custom events (RetakeQuiz, EmailLead) not appearing in Audiences?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Because you haven't reviewed them yet. Meta gates custom events from ads features until you explicitly acknowledge them. Open Events Manager, your data source, Review, Acknowledge, select RetakeQuiz and EmailLead, Confirm. The events become available in the Audience builder afterwards."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need a separate Meta Pixel for the quiz?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. The integration binds to whichever Pixel is already firing on your storefront. On Built for Shopify it picks up the Pixel configured in Customer Events; on Legacy and the multi-platform versions you paste the Pixel ID directly."
      }
    },
    {
      "@type": "Question",
      "name": "Should the quiz live on its own page or be embedded inline for Pixel tracking?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For Pixel tracking accuracy, a dedicated page is recommended. Page-level events are cleaner when the page only contains the quiz, and ad-attribution windows work better when the conversion URL is distinct from the rest of the store."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between Meta Pixel quiz events and Shopify Customer Events?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Shopify Customer Events tracks store-wide actions: page views, add-to-cart, checkout, purchase. The quiz integration adds the quiz-specific layer on top: which question was viewed, which choice was clicked, when the email was submitted, when the user retook the quiz. Both fire on the same Pixel, so audiences can combine them."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use the Meta Conversions API instead of the Pixel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The built-in integration fires client-side via the Pixel script. For server-side Conversions API events, use the Custom Pixel callback approach to fire your own CAPI calls server-side. Most stores don't need this; Shopify's Customer Events handles purchase-side CAPI by default on Built for Shopify."
      }
    }
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to connect Meta Pixel to a RevenueHunt quiz on Built for Shopify",
  "description": "Connect a RevenueHunt product recommendation quiz to Meta (Facebook) Pixel on the Built for Shopify version of the app. The Pixel must already be configured in Shopify Customer Events via the Facebook and Instagram Meta app; the quiz integration then binds to it and fires 10 quiz-specific events including ViewContent, Lead, EmailLead and RetakeQuiz.",
  "totalTime": "PT10M",
  "tool": [
    {"@type": "HowToTool", "name": "RevenueHunt: Recommender Quiz app (Built for Shopify)"},
    {"@type": "HowToTool", "name": "Shopify admin"},
    {"@type": "HowToTool", "name": "Facebook and Instagram Meta app for Shopify"},
    {"@type": "HowToTool", "name": "Meta Business Manager"},
    {"@type": "HowToTool", "name": "Meta Events Manager"}
  ],
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Connect the Pixel to Shopify",
      "text": "In Shopify admin, open Settings > Customer events. If Meta Pixel isn't already integrated, install the Facebook and Instagram Meta app from the Shopify App Store."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Configure the Facebook and Instagram app",
      "text": "Open the Facebook and Instagram Meta app in Shopify, go to Settings, set Shared data to Maximum so custom events come through. Choose or create a data set for tracking."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Publish the quiz on a dedicated page",
      "text": "Pixel tracking is most reliable when the quiz lives on its own landing page rather than embedded as a widget on the homepage."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Activate the integration in the quiz",
      "text": "In RevenueHunt, open Quiz Settings > Integrations, find the Meta Pixel section and click Activate. Save. The quiz now binds to whichever Pixel is already firing on your store."
    },
    {
      "@type": "HowToStep",
      "position": 5,
      "name": "Test in Meta Events Manager",
      "text": "Open Shopify admin > Facebook and Instagram app > Settings > open your data set in Meta Events Manager > Test events. Enter your quiz page URL, take the quiz, and confirm events appear (ViewContent, Lead, custom events)."
    },
    {
      "@type": "HowToStep",
      "position": 6,
      "name": "Review Custom Events",
      "text": "The custom events (RetakeQuiz, EmailLead) are not usable in ads or audiences until you review them. In Events Manager open your data source, click Review on the 'Custom events can't be used with ads features' notification, acknowledge the terms, select both RetakeQuiz and EmailLead, and confirm. One-time step per data source."
    }
  ]
}
</script>
