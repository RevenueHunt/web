---
title: "Automate post-quiz emails with Shopify Flow"
description: "Connect your quiz to Shopify Customers, tag responses, and trigger Shopify Flow automations for personalised post-quiz email campaigns. Setup, by platform."
pubDate: 2024-07-25T06:09:19Z
updatedDate: 2026-06-19T14:00:00Z
tags:
  - "ecommerce"
  - "product recommendation quiz"
  - "shopify"
  - "shopify flows"
  - "email marketing"
categories:
  - "eCommerce"
  - "Sales Funnels"
  - "Shopify Apps"
author: "Paulina Chodura"
legacySlug: "how-to-automate-post-quiz-emails-using-shopify-flows"
legacyId: 9389
legacyUrl: "https://revenuehunt.com/how-to-automate-post-quiz-emails-using-shopify-flows/"
featuredImage: "/img/blog/how-to-automate-post-quiz-emails-using-shopify-flows/blogtile_shopify-flows.webp"
draft: false
---

Shopify Flow turns every quiz completion into an automation trigger inside a [quiz funnel](/glossary/quiz-funnel/): when a customer finishes the RevenueHunt: Recommender Quiz, their email, name, phone number and quiz-derived tags sync to the Shopify Customers list, and Shopify Flow can fire a personalised follow-up email based on any combination of those tags. This guide walks through the full setup end to end, including the **platform-specific differences** between [Built for Shopify](/revenuehunt-built-for-shopify/) and Shopify Legacy (the integration is Shopify-only; WooCommerce, Magento, BigCommerce and Standalone use the [Klaviyo path](https://revenuehunt.com/klaviyo-zero-party-data/) instead).

<div class="aspect-video overflow-hidden rounded-xl bg-slate-900 not-prose my-6"><button type="button" class="yt-facade group relative block h-full w-full cursor-pointer overflow-hidden" data-yt-id="GcxUgLyZUZc" aria-label="Play video"><picture><source srcset="https://i.ytimg.com/vi_webp/GcxUgLyZUZc/maxresdefault.webp" type="image/webp" /><img src="https://i.ytimg.com/vi/GcxUgLyZUZc/maxresdefault.jpg" alt="" width="1280" height="720" loading="lazy" decoding="async" class="h-full w-full object-cover" /></picture><span class="absolute inset-0 flex items-center justify-center bg-black/10 transition group-hover:bg-black/20"><span class="flex h-20 w-20 items-center justify-center rounded-full bg-black/70 shadow-lg transition group-hover:scale-105 group-hover:bg-[#FF0000]"><svg class="ml-0.5 h-9 w-9 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg></span></span></button></div>

<div style="margin:32px 0;padding:24px 28px;background:#f8fafc;border-left:4px solid #16161D;border-radius:6px;">
  <p style="margin:0 0 14px;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;">What you'll learn</p>
  <ul style="list-style:none;padding:0;margin:0;">
    <li style="display:flex;gap:14px;padding:8px 0;font-size:15px;color:#0f172a;line-height:1.55;border-top:1px solid #e2e8f0;"><span style="flex-shrink:0;font-variant-numeric:tabular-nums;font-weight:700;color:#16161D;min-width:24px;">01</span><span>The 5-step setup: build the quiz, tag the choices, connect to Shopify Customers, create the Shopify Flow, monitor performance.</span></li>
    <li style="display:flex;gap:14px;padding:8px 0;font-size:15px;color:#0f172a;line-height:1.55;border-top:1px solid #e2e8f0;"><span style="flex-shrink:0;font-variant-numeric:tabular-nums;font-weight:700;color:#16161D;min-width:24px;">02</span><span>Platform-specific connect paths: Built for Shopify (App Settings or Connect tab, no prefix) vs Shopify Legacy (Connect tab, automatic <code>prq_</code> prefix on tags).</span></li>
    <li style="display:flex;gap:14px;padding:8px 0;font-size:15px;color:#0f172a;line-height:1.55;border-top:1px solid #e2e8f0;"><span style="flex-shrink:0;font-variant-numeric:tabular-nums;font-weight:700;color:#16161D;min-width:24px;">03</span><span>The exact Flow condition syntax for each platform (the <code>prq_</code> prefix question matters).</span></li>
    <li style="display:flex;gap:14px;padding:8px 0;font-size:15px;color:#0f172a;line-height:1.55;border-top:1px solid #e2e8f0;"><span style="flex-shrink:0;font-variant-numeric:tabular-nums;font-weight:700;color:#16161D;min-width:24px;">04</span><span>Why marketing-consent state differs between Built for Shopify (default subscribed) and Shopify Legacy (configurable opt-in level).</span></li>
  </ul>
</div>

For the broader Klaviyo-based equivalent that works on every platform, see [how Klaviyo segmentation unlocks once zero-party data lands in profiles](https://revenuehunt.com/klaviyo-zero-party-data/). For the customer-tag design that powers the segmentation, see [how to use customer tags in product quizzes](https://revenuehunt.com/how-to-use-customer-tags-in-product-quizzes-to-maximize-sales/).

**Table of contents:**

- [How the integration works](#how-the-integration-works)
- [Setting up the post-quiz Shopify Flow automation](#setting-up-the-post-quiz-shopify-flow-automation)
- [What about WooCommerce, Magento, BigCommerce and Standalone?](#what-about-woocommerce-magento-bigcommerce-and-standalone)
- [Frequently asked questions](#frequently-asked-questions)
- [Where this fits](#where-this-fits)

## How the integration works

Two products, working together. The **[RevenueHunt: Recommender Quiz](https://apps.shopify.com/product-recommendation-quiz-revenuehunt)** captures customer email, name, phone number and structured tags from quiz responses. **[Shopify Flow](https://apps.shopify.com/flow)** is Shopify's native automation engine: trigger an action when a specific event happens (in this case, when a new customer profile lands in Shopify Customers with a specific tag combination).

The integration syncs every quiz completion to Shopify Customers, and Shopify Flow watches that list for new customers matching your tag conditions. When the conditions match, Flow fires the action you configured (typically a personalised marketing email, but it can also add segments, route to teams, or stack multiple actions).

Why this matters for revenue: a customer who completed the quiz has just told you (via tags) what they care about. Segmented post-quiz email campaigns earn **over 3x the revenue per recipient** of generic sends (Klaviyo segmentation benchmark), and across the platform **1 in 5 quiz-attributed orders lands more than 30 days after the quiz** ([benchmark report](/state-of-product-recommendation-quizzes/)). The Shopify Flow path captures the same lift on Shopify-native stacks.

**Why set up post-quiz email automation:**

- **Personalised follow-up.** Tailored emails based on stated quiz preferences ("for your dry, sensitivity-prone skin") consistently outperform generic newsletters on open rate, click rate and revenue per recipient.
- **Higher conversion.** Targeted product recommendations from tag data turn quiz-completers who didn't buy on the results page into buyers via the email channel.
- **Better customer insights.** Quiz tags accumulate over time into a structured customer profile that your marketing team can segment, your support team can reference, and your buying team can use for assortment decisions.
- **Workflow automation.** The whole sequence runs without manual touch once configured. Set it up once, monitor the metrics, refine the templates quarterly.

### Platform capability matrix

| Capability | Built for Shopify | Shopify Legacy | WooCommerce | Magento | BigCommerce | Standalone |
|---|---|---|---|---|---|---|
| Sync leads to Shopify Customers | Yes | Yes | No | No | No | No |
| Shopify Flow trigger available | Yes | Yes | No | No | No | No |
| Customer-tag prefix on sync | None | `prq_` automatic | n/a | n/a | n/a | n/a |
| Configurable consent state | Subscribed by default | Yes (per question) | n/a | n/a | n/a | n/a |
| Klaviyo alternative path | Yes | Yes | Yes | Yes | Yes | Yes |
| Mailchimp alternative path | No | Yes | Yes | Yes | Yes | Yes |
| Omnisend alternative path | No | Yes | Yes | Yes | Yes | Yes |

## Setting up the post-quiz Shopify Flow automation

### Create a product quiz with the RevenueHunt app

Using [RevenueHunt: Recommender Quiz for Shopify](https://apps.shopify.com/product-recommendation-quiz-revenuehunt) app, design an interactive quiz to gather customer preferences. Make sure to ask relevant questions that will help lead the customer towards the products that meet all their criteria.

![Quiz Builder showing a product recommendation quiz that has been created on Built for Shopify](/img/blog/how-to-automate-post-quiz-emails-using-shopify-flows/bfs_customertags_quizcreated.png)

<div style="margin:24px 0;padding:18px 24px;background:#f8fafc;border-left:4px solid #16161D;border-radius:6px;">
  <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;">Tip</p>
  <p style="margin:0 0 6px;font-size:15px;line-height:1.55;color:#0f172a;">Check out <a href="https://docs.revenuehunt.com/tutorials/" style="color:#16161D;text-decoration:underline;">this video guide</a> on how to create your first Product Recommendation Quiz using the <a href="https://apps.shopify.com/product-recommendation-quiz-revenuehunt" style="color:#16161D;text-decoration:underline;">RevenueHunt: Recommender Quiz for Shopify</a> app.</p>
</div>

### Add customer tags to choices

Assign [customer tags](https://revenuehunt.com/how-to-use-customer-tags-in-product-quizzes-to-maximize-sales/) to each quiz answer choice. Tags are the structured filter logic Shopify Flow will use later: a customer who selects "oily skin" gets the `oily_skin` tag, a customer who selects "dry skin" gets `dry_skin`, and so on. Each customer typically ends up with 5 to 10 tags by the end of the quiz, which gives Flow plenty of precision to target each segment.

![Quiz Builder Choice Settings panel on Built for Shopify with customer tags attached to a quiz answer](/img/blog/how-to-automate-post-quiz-emails-using-shopify-flows/bfs_customertags_added.png)

> **Note:** There's no cap on the number of tags per choice or choices per tag. The setup flow for adding tags differs between Built for Shopify (Choice Settings panel) and the legacy / multi-platform versions (dedicated Customer Tags section); see the [customer tags walkthrough](https://revenuehunt.com/how-to-use-customer-tags-in-product-quizzes-to-maximize-sales/) for the full per-platform steps.

### Connect your quiz to Shopify Customers

The setup path differs slightly between Built for Shopify and Shopify Legacy. Pick the one that matches your install. (Non-Shopify platforms don't have this native integration; see the closing note below.)

#### On Built for Shopify

Two equivalent paths:

- **App Settings → Shopify Customers tab.** Toggle "Enable pushing quiz leads to Shopify Customers" and click Save. Once on, every quiz completion pushes the customer's email, name, phone number and tags to the Shopify Customers list automatically.
- **Or via the quiz Connect tab.** Open the quiz in the Quiz Builder, click the Connect tab, click Connect in the Shopify Customers section, then Publish to push the change live.

Tags from quiz choices pass through to Shopify Customers **without a prefix**. A tag named `oily_skin` in the Quiz Builder lands on the customer profile as `oily_skin`.

#### On Shopify Legacy

One path:

- **Quiz Builder → Connect tab.** Click Connect in the Shopify Customers section, authorise the integration, then Publish.

Tags from quiz choices land on the customer profile with an **automatic `prq_` prefix**. A tag named `oily_skin` in the Quiz Builder lands on the customer profile as `prq_oily_skin`. This matters for the Flow condition syntax in the next step.

Both versions sync the same data fields: email, name, phone number and customer tags.

#### Marketing-consent state

Both versions add the customer to Shopify Customers as **subscribed** by default (which is what enables Shopify Flow's Marketing email action to fire). One platform difference worth knowing:

- **Built for Shopify** defaults to subscribed and doesn't expose consent-state controls in the Quiz Builder.
- **Shopify Legacy** lets you override the default in the email or phone question settings: set the **Consent state** to `subscribed` or `non-subscribed`, and the **Opt-in level** to `confirmed_opt_in` (the customer confirms via a follow-up email before the flow fires) or `single_opt_in` (the customer receives one results email and isn't added to ongoing marketing).

For the broader playbook on consent design inside the quiz itself, see [smart ways to ask for marketing consent in a product quiz](https://revenuehunt.com/product-quiz-marketing-consent/).

### Create a new automation in Shopify Flow

In your Shopify admin: **Marketing → Automations → View templates → Create custom automation**.

1.  **Set the trigger.** Choose **Customer created**. This starts the automation whenever a new customer profile is created (which happens on every quiz completion that captures email).
2.  **Add conditions.** Click Then → Condition → add a variable → select Customer → select Tags. Then build the condition: "At least one customer / tags includes tags_item" + your tag name.
3.  **Configure the action.** Click Then → Action → **Send marketing email** → choose the email template you want sent to this segment.
4.  **Save and activate.** Save the automation and toggle it on.

**The Flow condition syntax differs by platform.** For a tag named `oily_skin` in the Quiz Builder:

- **Built for Shopify**: condition is `tags_item "oily_skin"` (no prefix).
- **Shopify Legacy**: condition is `tags_item "prq_oily_skin"` (the prefix is added automatically when the tag is synced).

Get this wrong and the Flow trigger silently never fires. If you're debugging a Flow that should be active and isn't firing on new quiz completions, check the prefix first.

### Monitor and improve

Once the Flow is live, watch the metrics that matter: open rate, click-through rate and revenue per email per segment. The per-segment view is what tells you whether the segmentation is doing real work or just adding complexity. If one segment converts at 12% and another at 3%, the gap is a signal: refine the low-performing template, or consider whether the segment is too small to justify its own treatment.

For the broader set of quiz metrics worth tracking, see [product quiz metrics: what to track to convert better](https://revenuehunt.com/product-quiz-metrics-what-to-track-to-convert-better/). For the mistakes that quietly leak conversion in the quiz itself before the Flow even fires, see [quiz creation mistakes that hurt your ecommerce sales](https://revenuehunt.com/quiz-creation-mistakes-that-hurt-your-ecommerce-sales/).

<div style="margin:24px 0;padding:18px 24px;background:#f8fafc;border-left:4px solid #16161D;border-radius:6px;">
  <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;">Tip</p>
  <p style="margin:0 0 6px;font-size:15px;line-height:1.55;color:#0f172a;">Implement <a href="https://docs.revenuehunt.com/how-to-guides/ab-test-quiz/" style="color:#16161D;text-decoration:underline;">A/B testing</a> to compare different quiz and email strategies and determine which ones are most effective.</p>
</div>

## What about WooCommerce, Magento, BigCommerce and Standalone?

Shopify Flow and the Shopify Customers integration are Shopify-only. If you're running RevenueHunt on WooCommerce, Magento, BigCommerce or the Standalone version, this exact stack isn't available, but the equivalent automation pattern is: connect the quiz to Klaviyo (or Mailchimp / ActiveCampaign / HubSpot) and build segmented flows there. The data captured is identical (email, name, phone, customer tags as profile properties); only the automation layer is different.

For the Klaviyo path end to end, see [how Klaviyo segmentation unlocks once zero-party data lands in profiles](https://revenuehunt.com/klaviyo-zero-party-data/). For the customer-tag design that drives the segmentation, see [how to use customer tags in product quizzes](https://revenuehunt.com/how-to-use-customer-tags-in-product-quizzes-to-maximize-sales/).

## Frequently asked questions

### Which platforms support sending quiz leads to Shopify Customers?

Built for Shopify and Shopify Legacy. The integration is Shopify-only because it relies on Shopify's native Customers list and the Shopify Customer Created event. WooCommerce, Magento, BigCommerce and Standalone don't support this exact path; their equivalent is connecting the quiz to Klaviyo (or another email platform) and running the post-quiz automation there.

### What's the prq_ prefix and do I need to worry about it?

On Shopify Legacy, every customer tag synced from the quiz is automatically prefixed with `prq_` (so a tag named `oily_skin` in the Quiz Builder appears as `prq_oily_skin` on the Shopify customer profile). On Built for Shopify, no prefix is added. This matters because Shopify Flow conditions match tag names literally: you need to include the `prq_` prefix in your Flow condition on Legacy, and omit it on Built for Shopify.

### Why isn't my Shopify Flow firing on new quiz completions?

Three common causes, in order of frequency: (1) the Flow condition has the wrong tag name (missing the `prq_` prefix on Legacy or including it on Built for Shopify); (2) the integration isn't connected (check App Settings → Shopify Customers on Built for Shopify, or the Connect tab in the Quiz Builder on either version); (3) the customer didn't capture an email (Flow only fires on Customer Created events, which require an email).

### Can I configure the marketing-consent state from the Quiz Builder?

On Shopify Legacy, yes: set Consent state and Opt-in level in the email or phone question settings. On Built for Shopify, the consent state defaults to subscribed and isn't currently exposed as a Quiz Builder setting. For full consent-design guidance, see [smart ways to ask for marketing consent in a product quiz](https://revenuehunt.com/product-quiz-marketing-consent/).

### How does this compare to using Klaviyo instead of Shopify Flow?

Both work; the choice depends on your existing stack. Shopify Flow is free and built into Shopify, making it the cheapest path for Shopify-native stores. Klaviyo is more powerful for ecommerce-specific email automation (per-segment flows, behavioural triggers, advanced reporting) and works across every platform RevenueHunt supports. Most stores end up using both: Shopify Flow for the immediate post-quiz follow-up, Klaviyo for the longer-term nurture sequences.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Which platforms support sending quiz leads to Shopify Customers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Built for Shopify and Shopify Legacy. The integration is Shopify-only because it relies on Shopify's native Customers list and the Shopify Customer Created event. WooCommerce, Magento, BigCommerce and Standalone don't support this exact path; their equivalent is connecting the quiz to Klaviyo (or another email platform) and running the post-quiz automation there."
      }
    },
    {
      "@type": "Question",
      "name": "What's the prq_ prefix and do I need to worry about it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "On Shopify Legacy, every customer tag synced from the quiz is automatically prefixed with prq_ (so a tag named oily_skin in the Quiz Builder appears as prq_oily_skin on the Shopify customer profile). On Built for Shopify, no prefix is added. This matters because Shopify Flow conditions match tag names literally: you need to include the prq_ prefix in your Flow condition on Legacy, and omit it on Built for Shopify."
      }
    },
    {
      "@type": "Question",
      "name": "Why isn't my Shopify Flow firing on new quiz completions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Three common causes, in order of frequency: the Flow condition has the wrong tag name (missing the prq_ prefix on Legacy or including it on Built for Shopify); the integration isn't connected (check App Settings on Built for Shopify, or the Connect tab in the Quiz Builder on either version); or the customer didn't capture an email (Flow only fires on Customer Created events, which require an email)."
      }
    },
    {
      "@type": "Question",
      "name": "Can I configure the marketing-consent state from the Quiz Builder?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "On Shopify Legacy, yes: set Consent state and Opt-in level in the email or phone question settings. On Built for Shopify, the consent state defaults to subscribed and isn't currently exposed as a Quiz Builder setting."
      }
    },
    {
      "@type": "Question",
      "name": "How does this compare to using Klaviyo instead of Shopify Flow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Both work; the choice depends on your existing stack. Shopify Flow is free and built into Shopify, making it the cheapest path for Shopify-native stores. Klaviyo is more powerful for ecommerce-specific email automation (per-segment flows, behavioural triggers, advanced reporting) and works across every platform RevenueHunt supports. Most stores end up using both: Shopify Flow for the immediate post-quiz follow-up, Klaviyo for the longer-term nurture sequences."
      }
    }
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Automate post-quiz emails with Shopify Flow",
  "description": "Connect a RevenueHunt product recommendation quiz to Shopify Customers, tag responses, and trigger Shopify Flow automations for personalised post-quiz email campaigns.",
  "totalTime": "PT60M",
  "supply": [
    {"@type": "HowToSupply", "name": "A Shopify store with Shopify Flow installed (free from the Shopify App Store)"},
    {"@type": "HowToSupply", "name": "A RevenueHunt quiz on Built for Shopify or Shopify Legacy"},
    {"@type": "HowToSupply", "name": "A marketing email template configured in Shopify Email"}
  ],
  "step": [
    {"@type": "HowToStep", "name": "Create a product quiz with the RevenueHunt app", "text": "Install RevenueHunt: Recommender Quiz for Shopify and build a quiz that gathers the customer preferences you want to use for segmentation."},
    {"@type": "HowToStep", "name": "Add customer tags to choices", "text": "In the Quiz Builder, attach a descriptive customer tag to each answer choice that should drive segmentation (e.g. oily_skin, dry_skin, acne_concern)."},
    {"@type": "HowToStep", "name": "Connect the quiz to Shopify Customers", "text": "On Built for Shopify, toggle App Settings, Shopify Customers, Enable pushing quiz leads. On Shopify Legacy, open the Quiz Builder Connect tab and click Connect in the Shopify Customers section, then Publish."},
    {"@type": "HowToStep", "name": "Create a Shopify Flow automation", "text": "In Shopify admin go to Marketing, Automations, Create custom automation. Set trigger to Customer created. Add a Customer Tags condition matching your tag (with prq_ prefix on Legacy, no prefix on Built for Shopify). Add a Send marketing email action."},
    {"@type": "HowToStep", "name": "Monitor and improve", "text": "Watch open rate, click-through rate and revenue per email per segment. Refine low-performing templates or consolidate segments that are too small to justify their own treatment."}
  ]
}
</script>

## Where this fits

Shopify Flow is the cheapest path to post-quiz email automation for Shopify-native stores: free, built in, and integrated end to end with the customer record. The pattern works because the quiz already does the heavy lifting (capturing structured intent), and Flow just fires the right message at the right person. It all starts with a [product recommendation quiz for Shopify](/product-recommendation-quiz-shopify/) that captures those quiz-derived tags in the first place. The Klaviyo path produces the same outcome with more flexibility for multi-step nurture sequences and works on every platform RevenueHunt supports.

For the foundation that makes both paths work, see [how to build a successful product recommendation quiz](https://revenuehunt.com/how-to-build-a-successful-ecommerce-quiz/). For the metrics worth tracking after launch, see [product quiz metrics: what to track to convert better](https://revenuehunt.com/product-quiz-metrics-what-to-track-to-convert-better/). For the discount layer that compounds on top of the post-quiz email, see [product quiz discounts: the conversion playbook](https://revenuehunt.com/product-quiz-discounts/). For the Mailchimp path on non-Shopify platforms, see [Mailchimp for post-quiz email marketing](https://revenuehunt.com/how-to-use-mailchimp-for-post-quiz-email-marketing/). For the Omnisend path, see [Omnisend quiz integration](https://revenuehunt.com/omnisend-quiz-integration/).

[Install RevenueHunt: Recommender Quiz for Shopify](https://apps.shopify.com/product-recommendation-quiz-revenuehunt/install?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=shopify_flows) and configure your first Flow today. Free plan available. Full docs: [send quiz leads to Shopify Customers](https://docs.revenuehunt.com/how-to-guides/send-leads-to-shopify-customers/).
