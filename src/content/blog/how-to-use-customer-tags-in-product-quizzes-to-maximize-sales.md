---
title: "Customer tags in product quizzes"
description: "Tag every quiz answer, sync the tags to Klaviyo, build segments, ship tailored campaigns. The full walkthrough with a haircare example, end to end."
pubDate: 2024-06-13T06:00:17Z
updatedDate: 2026-06-22T20:00:00Z
tags:
  - "ecommerce"
  - "product recommendation quiz"
  - "klaviyo"
  - "zero-party data"
  - "shopify"
  - "marketing"
  - "sales funnel"
categories:
  - "eCommerce"
  - "Sales Funnels"
  - "Tips &amp; Tricks"
author: "Paulina Chodura"
legacySlug: "how-to-use-customer-tags-in-product-quizzes-to-maximize-sales"
legacyId: 8659
legacyUrl: "https://revenuehunt.com/how-to-use-customer-tags-in-product-quizzes-to-maximize-sales/"
featuredImage: "/img/blog/how-to-use-customer-tags-in-product-quizzes-to-maximize-sales/blogtile_customertags.webp"
draft: false
---

Customer tags are how a product recommendation quiz becomes a [customer segmentation](/glossary/customer-segmentation/) engine instead of a one-off lead capture. Every quiz choice gets tagged with a structured label (Curly Hair, Dry Skin, Vegan, Budget Tier 2), the tags flow into Klaviyo as profile properties on the customer record, and the Klaviyo flows you build against those properties turn into personalised email sequences that consistently outperform generic blast campaigns. **Segmented Klaviyo campaigns earn over 3x the revenue per recipient of generic sends** (Klaviyo segmentation benchmark), and across the platform 1 in 5 quiz-attributed orders lands more than 30 days after the quiz ([benchmark report](/state-of-product-recommendation-quizzes/)).

This guide walks through the full implementation end to end, using a haircare store as the worked example.

<div class="aspect-video overflow-hidden rounded-xl bg-slate-900 not-prose my-6"><button type="button" class="yt-facade group relative block h-full w-full cursor-pointer overflow-hidden" data-yt-id="rB9MPFHa5K4" aria-label="Play video"><picture><source srcset="https://i.ytimg.com/vi_webp/rB9MPFHa5K4/maxresdefault.webp" type="image/webp" /><img src="https://i.ytimg.com/vi/rB9MPFHa5K4/maxresdefault.jpg" alt="" width="1280" height="720" loading="lazy" decoding="async" class="h-full w-full object-cover" /></picture><span class="absolute inset-0 flex items-center justify-center bg-black/10 transition group-hover:bg-black/20"><span class="flex h-20 w-20 items-center justify-center rounded-full bg-black/70 shadow-lg transition group-hover:scale-105 group-hover:bg-[#FF0000]"><svg class="ml-0.5 h-9 w-9 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg></span></span></button></div>

<div style="margin:32px 0;padding:24px 28px;background:#f8fafc;border-left:4px solid #16161D;border-radius:6px;">
  <p style="margin:0 0 14px;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;">What you'll learn</p>
  <ul style="list-style:none;padding:0;margin:0;">
    <li style="display:flex;gap:14px;padding:8px 0;font-size:15px;color:#0f172a;line-height:1.55;border-top:1px solid #e2e8f0;"><span style="flex-shrink:0;font-variant-numeric:tabular-nums;font-weight:700;color:#16161D;min-width:24px;">01</span><span>What customer tags are, what they're used for, and why segmented marketing built on them outperforms blast campaigns.</span></li>
    <li style="display:flex;gap:14px;padding:8px 0;font-size:15px;color:#0f172a;line-height:1.55;border-top:1px solid #e2e8f0;"><span style="flex-shrink:0;font-variant-numeric:tabular-nums;font-weight:700;color:#16161D;min-width:24px;">02</span><span>How to create and link tags in the RevenueHunt Quiz Builder (3-minute setup).</span></li>
    <li style="display:flex;gap:14px;padding:8px 0;font-size:15px;color:#0f172a;line-height:1.55;border-top:1px solid #e2e8f0;"><span style="flex-shrink:0;font-variant-numeric:tabular-nums;font-weight:700;color:#16161D;min-width:24px;">03</span><span>The 6-step end-to-end haircare worked example: quiz, tags, Klaviyo, segments, tailored campaigns, measurement.</span></li>
    <li style="display:flex;gap:14px;padding:8px 0;font-size:15px;color:#0f172a;line-height:1.55;border-top:1px solid #e2e8f0;"><span style="flex-shrink:0;font-variant-numeric:tabular-nums;font-weight:700;color:#16161D;min-width:24px;">04</span><span>A quarterly review workflow to keep tags accurate and segments performing over time.</span></li>
  </ul>
</div>

This article focuses on the haircare worked example. For the broader strategy of why this segmentation is the highest-leverage thing your quiz does, see [how Klaviyo segmentation unlocks once zero-party data lands in profiles](https://revenuehunt.com/klaviyo-zero-party-data/). For the foundations of the quiz itself, see [how to build a successful product recommendation quiz](https://revenuehunt.com/how-to-build-a-successful-ecommerce-quiz/).

![Customer tags illustration: quiz answers becoming tags, tags becoming Klaviyo segment filters](/img/blog/how-to-use-customer-tags-in-product-quizzes-to-maximize-sales/blogtile_customertags.webp)

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 01</span> &nbsp;How customer tags compound: every quiz answer becomes a tag, every tag becomes a Klaviyo segment filter. Five answers in the quiz produce a profile a generic email-marketing list cannot build.</p>

**Table of contents:**

- [Customer tags 101](#customer-tags-101)
- [The haircare worked example: end to end](#the-haircare-worked-example-end-to-end)
- [A quarterly review process for tags and segments](#a-quarterly-review-process-for-tags-and-segments)
- [Frequently asked questions](#frequently-asked-questions)
- [Where this fits](#where-this-fits)

## Customer tags 101

### What are customer tags?

**Customer tags** are structured labels you attach to individual quiz answer choices. When a customer picks an answer, the corresponding tag is added to their customer record in your CRM. A single quiz typically produces 5 to 10 tags per completion (skin type, concerns, goals, preferences, budget tier), and those tags become the structured filter logic everything downstream depends on.

### What are customer tags used for?

Three things, in order of revenue impact:

1. **Segmenting your email list** by stated preferences, so welcome flows, replenishment reminders and win-back campaigns reference the customer's actual answers ("for your dry, sensitivity-prone skin") rather than a generic newsletter.
2. **Personalising the on-site experience** via Shopify customer tag conditions, Klaviyo on-site flows or third-party personalisation engines.
3. **Triggering automation** in Klaviyo flows where a specific tag combination (e.g. "Sensitive Skin" + "Vegan") qualifies the customer for a specific sequence.

The bigger framing is the same one as the [zero-party data guide](https://revenuehunt.com/zero-party-data/): the data the customer explicitly told you converts better than the data you observed, because the customer trusts the result the brand returns.

### Why segmented marketing matters

Segmented campaigns consistently outperform blast campaigns on every measurable axis: open rate, click-through, revenue per recipient, unsubscribe rate. The reason is structural rather than incidental: when the message references something the customer told you, the open-decision is "is this for me?" rather than "is this spam?", and the answer is more often yes.

Our own platform data, drawn from 45M+ responses across 20,000+ stores running RevenueHunt quizzes ([2026 benchmark report](/state-of-product-recommendation-quizzes/)), is the cleanest first-party signal:

<div style="margin:24px 0;padding:28px 32px;background:#16161D;border-radius:8px;color:#fff;">
  <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#94a3b8;">Why segmentation compounds (RevenueHunt + Klaviyo benchmarks)</p>
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:24px;margin-top:14px;">
    <div><p style="margin:0;font-size:32px;font-weight:800;line-height:1;color:#16a34a;">3x</p><p style="margin:6px 0 0;font-size:13px;color:#cbd5e1;line-height:1.4;">revenue per recipient on segmented Klaviyo campaigns vs generic sends</p></div>
    <div><p style="margin:0;font-size:32px;font-weight:800;line-height:1;color:#16a34a;">1 in 5</p><p style="margin:6px 0 0;font-size:13px;color:#cbd5e1;line-height:1.4;">quiz-attributed orders land more than 30 days after the quiz</p></div>
    <div><p style="margin:0;font-size:32px;font-weight:800;line-height:1;color:#16a34a;">71%</p><p style="margin:6px 0 0;font-size:13px;color:#cbd5e1;line-height:1.4;">of top-converting quizzes collect email as part of the flow (75% of those make it required)</p></div>
  </div>
</div>

The structural difference between an integrated and unintegrated quiz isn't the data captured (it's the same), it's whether the data ever gets activated. Customer tags are the activation key.

### Creating and adding customer tags

The setup flow differs between the [Built for Shopify](/revenuehunt-built-for-shopify/) version and the legacy / multi-platform versions: Built for Shopify exposes tags inside each choice's Settings panel, while the older versions use a dedicated Customer Tags section in the Quiz Builder with a per-choice input bar.

#### On Built for Shopify

1.  Open the Quiz Builder and go to **Questions**.
2.  Select a multiple-choice question, then click the specific answer choice you want to tag.
3.  Open the **Choice Settings** panel, find the **Customer tags** section and click to expand it.
4.  Click **Search or create tags**. Either pick an existing tag from the list, or start typing to create a new one.
5.  Confirm by clicking **Create new tag**. Linked tags appear as grey labels below the input field.

Repeat for every choice that should carry a tag, and link the same tag to multiple choices when the same audience should receive the same downstream treatment. Full reference: [Customer Tags docs (Built for Shopify tab)](https://docs.revenuehunt.com/reference/quiz-builder/customer-tags/).

#### On Shopify Legacy, WooCommerce, Magento, BigCommerce and Standalone

The older versions use a dedicated Customer Tags section in the Quiz Builder rather than per-choice settings panels.

1.  Open the [Customer Tags section](https://docs.revenuehunt.com/reference/quiz-builder/customer-tags/) of the Quiz Builder.
2.  Find the quiz choice you want to tag in the list.
3.  Type the tag name into the input bar next to the choice and confirm by clicking **Add this as a new customer tag**.

    ![Quiz Builder Customer Tags section showing how to add a new tag against a quiz choice](/img/blog/how-to-use-customer-tags-in-product-quizzes-to-maximize-sales/manual_quizbuilder_customertags_addtag.webp)

    <p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 02</span> &nbsp;The Customer Tags section on Shopify Legacy and the multi-platform versions. Tags are added via the input bar next to each quiz choice; once created, a tag becomes selectable for any other choice across the quiz.</p>

4.  Once a tag exists, it becomes available as a selectable option for any other choice across the quiz. There's no limit on tags per choice or choices per tag.

    ![Quiz Builder showing a customer tag linked to a quiz choice with the green confirmation state](/img/blog/how-to-use-customer-tags-in-product-quizzes-to-maximize-sales/manual_quizbuilder_customertags_tagadded.webp)

    <p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 03</span> &nbsp;Tag confirmation state once a customer tag is linked to a quiz choice. The green confirmation is the signal that the tag will flow into Klaviyo on every completion that touches this choice.</p>

## The haircare worked example: end to end

Imagine a haircare store selling shampoos, conditioners, hair treatments and styling products. The store runs a RevenueHunt: Recommender Quiz for Shopify quiz to help customers find the right products based on hair type, concerns and goals. Here's the full setup, end to end, for a tag-driven Klaviyo campaign.

### Build the quiz

Create a quiz with questions about hair type (e.g. curly, straight, wavy), hair concerns (e.g. dandruff, dryness, frizz) and hair goals (e.g. volume, shine, repair). Make sure to add an email-capture question as the final slide or just before the results page, and make it required: platform data shows 71% of top-converting quizzes collect email this way and 75% of those make it mandatory.

For the foundations of a well-built quiz, see [how to build a successful product recommendation quiz](https://revenuehunt.com/how-to-build-a-successful-ecommerce-quiz/). For the mistakes that quietly leak conversion, see [product quiz mistakes ranked by industry data](https://revenuehunt.com/quiz-creation-mistakes-that-hurt-your-ecommerce-sales/).

### Create and link customer tags to choices

As you set up each question, attach a relevant tag to each answer choice. For the haircare example, you'd typically tag:

- Hair-type answers with: `Curly Hair`, `Straight Hair`, `Wavy Hair`, `Coily Hair`
- Concern answers with: `Dry Hair`, `Frizz`, `Dandruff`, `Damage`
- Goal answers with: `Volume`, `Shine`, `Repair`, `Anti-Frizz`

A single customer might end up tagged with three or four of these (e.g. `Curly Hair` + `Dry Hair` + `Anti-Frizz`), which is exactly what makes the segmentation precise downstream. The setup flow for adding each tag is covered in the [Creating and adding customer tags](#creating-and-adding-customer-tags) section above (the steps differ slightly between Built for Shopify and the legacy / multi-platform versions).

![Quiz Builder Customer Tags view showing the haircare quiz with tags linked to each choice](/img/blog/how-to-use-customer-tags-in-product-quizzes-to-maximize-sales/Screenshot-2024-06-06-153844.webp)

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 04</span> &nbsp;The Quiz Builder Customer Tags view on a haircare quiz: each answer choice has a descriptive tag attached. These tags flow into Klaviyo as profile properties on every quiz completion.</p>

### Connect the quiz to Klaviyo

Follow the [Klaviyo integration instructions](https://docs.revenuehunt.com/how-to-guides/send-leads-to-klaviyo/) in the docs. Once connected, every completed quiz response automatically sends the customer's email, quiz answers and applied customer tags to Klaviyo, where they're stored as profile properties on the customer record. No Zapier glue, no manual export, no custom integration code.

### Create segments in Klaviyo

In Klaviyo, create segments by filtering on the tag properties you just synced. For the haircare example:

- **Curly Hair segment**: customers tagged with `Curly Hair`.
- **Dry Hair segment**: customers tagged with `Dry Hair`.
- **Volume goal segment**: customers tagged with `Volume`.
- **Anti-Frizz segment**: customers tagged with `Anti-Frizz`.
- **Repair segment**: customers tagged with `Repair`.

You can also compound segments (e.g. `Curly Hair` + `Dry Hair`) to target specific persona overlaps that warrant a more specific message.

![Klaviyo segment editor showing the filter condition based on the Curly Hair customer tag from the quiz](/img/blog/how-to-use-customer-tags-in-product-quizzes-to-maximize-sales/kalviyo-segement.webp)

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 05</span> &nbsp;Klaviyo's segment editor reading the Curly Hair customer tag from the quiz. The segment auto-populates as new quiz responses come in; no manual list curation required.</p>

> **🧐 Tip:** The [follow-up emails Klaviyo tutorial](https://docs.revenuehunt.com/tutorials/follow-up-emails-klaviyo/) walks through segment creation step by step with screenshots.

### Design tailored email campaigns

Build [email flows or campaigns](https://help.klaviyo.com/hc/en-us/articles/115002774932) specifically tailored to each segment. The principle is the same one that makes the quiz work in the first place: the message references something the customer actively told you, not something the brand assumed.

Per-segment example treatments:

- **Curly Hair segment.** Curl-enhancing shampoos, conditioners, styling creams. Curl-routine tips, exclusive offers on curl care bundles.
- **Dry Hair segment.** Moisturising shampoos, conditioners, deep-conditioning treatments. Hydration tips, discounts on hydrating sets.
- **Volume goal segment.** Volumising shampoos, conditioners, styling products. Volume-building tips, volume-boosting kits.
- **Anti-Frizz segment.** Anti-frizz serums, creams, treatments. Frizz-management advice, anti-frizz bundle deals.
- **Repair segment.** Reparative treatments, masks, serums. Repair routines, repair-focused bundle offers.

Two sample campaign templates that illustrate the per-segment treatment:

<div style="display:flex;gap:20px;flex-wrap:wrap;margin:24px 0;">
  <figure style="flex:1 1 200px;max-width:240px;margin:0;">
    <img src="/img/blog/how-to-use-customer-tags-in-product-quizzes-to-maximize-sales/curly-campaign-212x300.webp" alt="Sample Klaviyo email campaign tailored to the Curly Hair segment with curl-care product recommendations" loading="lazy" style="width:100%;height:auto;border:1px solid #e2e8f0;border-radius:6px;display:block;" />
    <figcaption style="margin-top:8px;font-size:13px;color:#64748b;text-align:center;">Sample Curly Hair email</figcaption>
  </figure>
  <figure style="flex:1 1 200px;max-width:240px;margin:0;">
    <img src="/img/blog/how-to-use-customer-tags-in-product-quizzes-to-maximize-sales/dry-campaign-212x300.webp" alt="Sample Klaviyo email campaign tailored to the Dry Hair segment with hydrating product recommendations" loading="lazy" style="width:100%;height:auto;border:1px solid #e2e8f0;border-radius:6px;display:block;" />
    <figcaption style="margin-top:8px;font-size:13px;color:#64748b;text-align:center;">Sample Dry Hair email</figcaption>
  </figure>
</div>

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 06</span> &nbsp;Two per-segment campaign templates side by side. Same brand, same send window, two different sets of products and supporting copy. The customer-tag layer is what makes each campaign feel like it was written for the recipient.</p>

For the discount layer that compounds on top of these segmented sequences, see [product quiz discounts: the conversion playbook](https://revenuehunt.com/product-quiz-discounts/).

### Monitor and analyse campaign performance

Track the performance of each segmented campaign in Klaviyo. Watch open rates, click-through rates and conversion rates per segment, not just the aggregate, because the whole point of segmentation is that the numbers vary meaningfully between groups. If one segment converts at 12% and another at 3%, that's the signal to either retire the low-performing campaign or restructure it around what the high-performing one is doing.

For the broader set of quiz metrics worth tracking across all your campaigns, see [product quiz metrics: track what converts](https://revenuehunt.com/product-quiz-metrics-what-to-track-to-convert-better/).

## A quarterly review process for tags and segments

Tags and segments need ongoing maintenance, or they accumulate redundancy: duplicate tags with slightly different spellings, segments that no longer represent meaningful customer groups, tags applied to choices that have since been retired from the quiz. A simple quarterly review keeps the segmentation precise.

<table style="width:100%;border-collapse:collapse;font-size:14px;margin:24px 0;">
  <thead>
    <tr>
      <th style="background:#16161D;color:#fff;padding:12px 14px;text-align:left;font-size:11px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;">Step</th>
      <th style="background:#16161D;color:#fff;padding:12px 14px;text-align:left;font-size:11px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;">What to do</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;background:#fff;color:#334155;vertical-align:top;"><strong>1. Prepare</strong></td><td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;background:#fff;color:#334155;">Set the objective for this quarter (improve tag accuracy, update segments, find new personalisation opportunities). Pull tag-usage and segment-performance data from Klaviyo and the RevenueHunt Metrics panel.</td></tr>
    <tr><td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;background:#f8fafc;color:#334155;vertical-align:top;"><strong>2. Audit</strong></td><td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;background:#f8fafc;color:#334155;">Review every tag for accuracy and relevance. Merge near-duplicates (e.g. "Anti-Frizz" and "AntiFrizz"). Identify tags that haven't been applied in the last 90 days; archive or remove them. Review segment performance against the previous quarter.</td></tr>
    <tr><td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;background:#fff;color:#334155;vertical-align:top;"><strong>3. Implement</strong></td><td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;background:#fff;color:#334155;">Update the tag set: rename, merge or remove as needed. Create new segments for emerging customer groups the data has revealed. A/B test any non-trivial change before rolling out to the full list.</td></tr>
    <tr><td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;background:#f8fafc;color:#334155;vertical-align:top;"><strong>4. Monitor</strong></td><td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;background:#f8fafc;color:#334155;">Deploy updated tags and segments, then watch the metrics that matter (open rate, click rate, revenue per recipient) for two to four weeks. Flag anomalies early.</td></tr>
    <tr><td style="padding:12px 14px;background:#fff;color:#334155;vertical-align:top;"><strong>5. Document</strong></td><td style="padding:12px 14px;background:#fff;color:#334155;">Note what changed and why. Future-you (or the next person on the marketing team) will need the context when a segment behaves unexpectedly six months later.</td></tr>
  </tbody>
</table>

## Frequently asked questions

### What are customer tags in a product recommendation quiz?

Customer tags are structured labels you attach to individual quiz answer choices. When a customer picks an answer, the corresponding tag is added to their customer record in your CRM (most commonly Klaviyo). A single quiz typically produces 5 to 10 tags per completion across attributes like skin type, concerns, goals, preferences and budget tier, which become the filter logic for downstream segmentation.

### How are customer tags different from quiz answers stored as Klaviyo properties?

Tags and properties both come from the quiz, but they serve different purposes. Quiz answers stored as Klaviyo properties are the raw response data (e.g. `hair_type: curly`); tags are higher-level abstractions you control (e.g. `Curly Hair`, applied across multiple paths through the quiz that should be treated as the same audience). Tags are easier to compose into Klaviyo segment filters and easier to maintain because the tag taxonomy stays stable even when the quiz questions change.

### Do I need Klaviyo, or can I use a different CRM?

The same strategy works on any CRM that integrates with RevenueHunt directly or accepts a Zapier webhook for new quiz completions. Klaviyo is the most common pairing because it's purpose-built for ecommerce email and SMS segmentation, and because the native integration sends quiz tags as Klaviyo profile properties without any glue code. Mailchimp, ActiveCampaign, Sendlane and HubSpot all work with comparable mechanics.

### How many tags should I create per quiz?

There's no hard cap, but the practical sweet spot is between 8 and 20 distinct tags for a typical quiz. Fewer than 8 means the segmentation isn't granular enough to drive meaningfully different campaigns; more than 20 produces segments so small they don't justify a separate campaign. Start with a small set per question (3 to 5 tags) and add only when a new tag would clearly unlock a campaign you couldn't build otherwise.

### When will I see results from tag-based segmentation?

The Klaviyo flow itself starts converting from the first email the customer receives after completing the quiz. The compounding return on the segmentation effort takes 30 to 90 days to become visible, as you accumulate enough volume per segment to see statistically meaningful differences in open rate, click rate and revenue per recipient. Segmented Klaviyo campaigns earn over 3x the revenue per recipient of generic sends (Klaviyo segmentation benchmark) over comparable periods.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are customer tags in a product recommendation quiz?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Customer tags are structured labels you attach to individual quiz answer choices. When a customer picks an answer, the corresponding tag is added to their customer record in your CRM (most commonly Klaviyo). A single quiz typically produces 5 to 10 tags per completion across attributes like skin type, concerns, goals, preferences and budget tier, which become the filter logic for downstream segmentation."
      }
    },
    {
      "@type": "Question",
      "name": "How are customer tags different from quiz answers stored as Klaviyo properties?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tags and properties both come from the quiz, but they serve different purposes. Quiz answers stored as Klaviyo properties are the raw response data; tags are higher-level abstractions you control, applied across multiple paths through the quiz that should be treated as the same audience. Tags are easier to compose into Klaviyo segment filters and easier to maintain because the tag taxonomy stays stable even when the quiz questions change."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need Klaviyo, or can I use a different CRM?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The same strategy works on any CRM that integrates with RevenueHunt directly or accepts a Zapier webhook for new quiz completions. Klaviyo is the most common pairing because it's purpose-built for ecommerce email and SMS segmentation, and because the native integration sends quiz tags as Klaviyo profile properties without any glue code. Mailchimp, ActiveCampaign, Sendlane and HubSpot all work with comparable mechanics."
      }
    },
    {
      "@type": "Question",
      "name": "How many tags should I create per quiz?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There's no hard cap, but the practical sweet spot is between 8 and 20 distinct tags for a typical quiz. Fewer than 8 means the segmentation isn't granular enough to drive meaningfully different campaigns; more than 20 produces segments so small they don't justify a separate campaign. Start with a small set per question (3 to 5 tags) and add only when a new tag would clearly unlock a campaign you couldn't build otherwise."
      }
    },
    {
      "@type": "Question",
      "name": "When will I see results from tag-based segmentation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Klaviyo flow itself starts converting from the first email the customer receives after completing the quiz. The compounding return on the segmentation effort takes 30 to 90 days to become visible, as you accumulate enough volume per segment to see statistically meaningful differences in open rate, click rate and revenue per recipient. Segmented Klaviyo campaigns earn over 3x the revenue per recipient of generic sends (Klaviyo segmentation benchmark)."
      }
    }
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Use customer tags in a product recommendation quiz to drive Klaviyo segmentation",
  "description": "Build a quiz with descriptive customer tags on every relevant answer choice, sync the tags to Klaviyo, build segments on the tag combinations, and run tailored email campaigns. The end-to-end haircare worked example.",
  "totalTime": "PT2H",
  "supply": [
    {"@type": "HowToSupply", "name": "A RevenueHunt: Recommender Quiz account (free plan covers 100 responses per month)"},
    {"@type": "HowToSupply", "name": "A connected Klaviyo account with API permissions"},
    {"@type": "HowToSupply", "name": "A product catalogue in your store admin (Shopify, WooCommerce, Magento, BigCommerce, or via Google Product Feed for Standalone)"}
  ],
  "step": [
    {"@type": "HowToStep", "name": "Build the quiz", "text": "Create the question flow with relevant choices for your category (hair type, hair concern, hair goal for haircare). Add an email-capture question as the final slide or just before the results page and make it required."},
    {"@type": "HowToStep", "name": "Create and link customer tags to choices", "text": "On Built for Shopify, attach tags via each choice's Settings panel. On Shopify Legacy / WooCommerce / Magento / BigCommerce / Standalone, use the dedicated Customer Tags section with the per-choice input bar. A typical quiz produces 5-10 tags per completion."},
    {"@type": "HowToStep", "name": "Connect the quiz to Klaviyo", "text": "In the Quiz Builder Connect tab, authorise the Klaviyo integration. Tags flow into Klaviyo as profile properties on every quiz completion that captures email."},
    {"@type": "HowToStep", "name": "Create segments in Klaviyo", "text": "Build Klaviyo segments by filtering the audience on tag combinations: customers tagged with curly_hair AND dry_hair for one segment, customers tagged with damage_concern for another. Segments auto-populate as new responses come in."},
    {"@type": "HowToStep", "name": "Design tailored email campaigns", "text": "For each segment, design email templates that reference the customer's stated quiz preferences directly in the subject line and body. Generic newsletter templates underperform tag-referenced ones on every metric."},
    {"@type": "HowToStep", "name": "Monitor and analyse campaign performance", "text": "Track per-segment open rate, click-through rate, revenue per email and unsubscribe rate. Refine low-performing segments or consolidate ones that are too small to justify their own treatment."}
  ]
}
</script>

## Where this fits

Customer tags are the activation layer for everything zero-party data makes possible. The quiz captures the data; the tags structure it; Klaviyo segments operationalise it; the campaigns convert it. Each layer compounds the value of the one underneath, which is why the lift on a Klaviyo-integrated quiz funnel is so consistently larger than any single tactic in isolation.

For the data category underneath this whole architecture, see our [zero-party data guide](https://revenuehunt.com/zero-party-data/). For concrete examples of zero-party data mechanisms across real brands, see [12 zero-party data examples](https://revenuehunt.com/zero-party-data-examples/). For the underlying privacy-data taxonomy, see [first-party vs third-party data: what is the difference](https://revenuehunt.com/first-party-data-vs-third-party-data/). For the full segmentation chain end to end, see [how Klaviyo segmentation unlocks once zero-party data lands in profiles](https://revenuehunt.com/klaviyo-zero-party-data/). For the consent moment that gates the whole system, see [marketing consent in a product quiz](https://revenuehunt.com/product-quiz-marketing-consent/). For the discount layer that compounds on top, see [product quiz discounts](https://revenuehunt.com/product-quiz-discounts/). For the broader funnel mechanics, see [11 ecommerce sales funnel examples that convert in 2026](https://revenuehunt.com/ecommerce-sales-funnel-examples/). For where this entire stack fits strategically, see [the 10 strategies that compound retention](/customer-retention-ecommerce-guide/).

For more on our integrations, visit [our integrations page](https://revenuehunt.com/integrations/).

[Install RevenueHunt: Recommender Quiz for Shopify](https://apps.shopify.com/product-recommendation-quiz-revenuehunt/install?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=customer_tags) and start tagging your first quiz response today. Free plan available.
