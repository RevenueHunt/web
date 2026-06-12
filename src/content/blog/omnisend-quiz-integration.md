---
title: "Omnisend quiz integration: segment leads by quiz answers"
description: "Connect a product recommendation quiz to Omnisend: setup, what data lands in customer profiles, segmenting by quiz answers, and templated follow-ups."
pubDate: 2024-12-05T09:27:30Z
updatedDate: 2026-06-12T10:00:00Z
tags: ["Omnisend", "integrations", "email marketing", "lead capture", "marketing automation"]
categories:
  - "eCommerce"
  - "Shopify Apps"
  - "Tips & Tricks"
  - "WooCommerce Plugins"
author: "Paulina Chodura"
legacySlug: "omnisend-quiz-integration"
legacyId: 10597
legacyUrl: "https://revenuehunt.com/automating-quiz-follow-ups-with-omnisend-to-drive-sales/"
featuredImage: "/img/blog/omnisend-quiz-integration/blogtile_omnisend.webp"
draft: false
---

A product recommendation quiz captures [zero-party data](/zero-party-data/) while shoppers are actively engaged: stated preferences, skin types, goals, gift recipients, budget bands. Omnisend turns that into segmented email and SMS flows. Wired together, the two run as one [customer segmentation](/glossary/customer-segmentation/) and [lead generation quiz](/glossary/lead-generation-quiz/) pipeline.

This guide covers the **exact setup paths** by platform, the **data fields** that land on the Omnisend contact, how to segment shoppers by quiz answer, and how the existing template library plugs into the workflow.

![Omnisend quiz integration](/img/blog/omnisend-quiz-integration/omnisend-quiz-hero.webp)

<div style="margin:32px 0;padding:24px 28px;background:#f8fafc;border-left:4px solid #16161D;border-radius:6px;">
  <p style="margin:0 0 14px;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;">What you'll learn</p>
  <ul style="list-style:none;padding:0;margin:0;">
    <li style="display:flex;gap:14px;padding:6px 0;font-size:15px;color:#0f172a;line-height:1.55;"><span style="flex-shrink:0;color:#16161D;font-weight:700;">→</span><span>How to connect Omnisend on Built for Shopify and on Shopify Legacy, WooCommerce, Magento, BigCommerce and Standalone.</span></li>
    <li style="display:flex;gap:14px;padding:6px 0;font-size:15px;color:#0f172a;line-height:1.55;"><span style="flex-shrink:0;color:#16161D;font-weight:700;">→</span><span>Which contact fields and custom properties auto-create in Omnisend when a shopper finishes a quiz.</span></li>
    <li style="display:flex;gap:14px;padding:6px 0;font-size:15px;color:#0f172a;line-height:1.55;"><span style="flex-shrink:0;color:#16161D;font-weight:700;">→</span><span>How to segment by quiz answer and trigger workflows from those segments.</span></li>
    <li style="display:flex;gap:14px;padding:6px 0;font-size:15px;color:#0f172a;line-height:1.55;"><span style="flex-shrink:0;color:#16161D;font-weight:700;">→</span><span>How to plug the existing Slots and Products List email templates into the workflow.</span></li>
    <li style="display:flex;gap:14px;padding:6px 0;font-size:15px;color:#0f172a;line-height:1.55;"><span style="flex-shrink:0;color:#16161D;font-weight:700;">→</span><span>When Omnisend is the right call versus Klaviyo, Shopify Flow, Mailchimp or HubSpot.</span></li>
  </ul>
</div>

## Why pair a quiz with Omnisend

Quizzes capture interest at its peak: the moment a shopper is actively choosing. Omnisend handles what happens next: segmentation, automation, email + SMS + web-push in one workflow tool. Three things change when you connect them:

**Zero-party data lands on the Omnisend contact record automatically.** Every answer a shopper selects, every tag the quiz logic assigns, every product the quiz recommends ends up as a custom property on the contact. No CSV exports, no Zapier middle layer.

**Segments stay accurate by themselves.** Segments defined on quiz custom properties update as new responses come in, so "oily skin shoppers in the mid budget band" is always the current set.

**Templates from the docs library plug in directly.** RevenueHunt publishes three Google-Doc HTML templates (Basic Slots, Advanced Slots, Products List) you can drop into Omnisend as custom HTML blocks once the property names match your quiz.

For the strategy this fits into (why an interrupt-style popup doesn't produce segmentable lists, why a quiz funnel does), see [why popups are walls and quizzes are doors](/why-popups-are-walls-and-quizzes-are-doors-rethinking-lead-capture-for-dtc/). For a worked example of the full pipeline running in production, see the [anti-ageing device case study](/anti-aging-beauty-brand-quiz-funnel-case-study/) (9.8% quiz-to-purchase CVR on cold Meta traffic, +42.64% AOV lift, $691,128 in 90 days, every answer synced to the brand's ESP).

<div class="not-prose my-10 rounded-3xl bg-[#16161D] p-8 text-white shadow-xl">
  <p class="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-6">Why personalised follow-up converts</p>
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
    <div>
      <p class="text-4xl font-bold text-emerald-400">5.5%</p>
      <p class="text-sm text-slate-300 mt-2">of shoppers who finish a quiz place an order, about 1 in 18, roughly 2.75x a typical 2% store (<a href="/state-of-product-recommendation-quizzes/" class="underline decoration-emerald-400/40 hover:decoration-emerald-400">RevenueHunt benchmark, 45M+ responses</a>)</p>
    </div>
    <div>
      <p class="text-4xl font-bold text-emerald-400">3x</p>
      <p class="text-sm text-slate-300 mt-2">revenue per recipient on segmented email campaigns vs generic sends (Omnisend and Klaviyo segmentation benchmarks both report a similar shape)</p>
    </div>
    <div>
      <p class="text-4xl font-bold text-emerald-400">1 in 5</p>
      <p class="text-sm text-slate-300 mt-2">quiz-attributed orders land more than 30 days after the quiz, so the segmentation layer keeps converting through email for months</p>
    </div>
  </div>
</div>

## Setup paths by platform

The Omnisend connection is **API-key based on every platform**. The fields the integration sends are identical. The only difference is where the connection UI lives.

### [Built for Shopify](/revenuehunt-built-for-shopify/)

1. In Omnisend, open **Store Settings > API** and create a new API key with all permissions.
2. In the RevenueHunt app, open the quiz, then **Settings > Integrations** and select the **Omnisend** tab.
3. Paste the API key into the input field and click **Save**.

### Shopify Legacy, WooCommerce, Magento, BigCommerce, Standalone

1. In Omnisend, open **Store Settings > API** and create a new API key with all permissions.
2. In the RevenueHunt app, open the quiz, then the **Connect** tab and find the Omnisend section.
3. Click **Connect**, paste the API key, click **Save**, then **Publish** the quiz from the top-right button.

> **Heads-up:** the integration only fires when a quiz completion includes an email address. Without an email there's no Omnisend contact to attach the answers to. Make the email question **required** if Omnisend follow-up is the goal of the quiz.

To verify the integration is firing correctly against your store's actual order data (rather than against the Omnisend side alone), cross-reference the quiz response count and revenue against the [first-party Shopify quiz analytics](/first-party-shopify-quiz-analytics/) dashboard.

## What lands on the Omnisend contact

The sync fires when a shopper **finishes the quiz and provides an email address**. The customer's contact details and all their answers post to Omnisend in a single payload.

Each completed response sends:

**Standard contact fields**

- `email`
- `firstname`, `lastname`
- `phone` (when collected)

**Quiz-specific custom properties** (naming convention `quiz_{id}_{field}`)

- `quiz_{id}_quiz_name`
- `quiz_{id}_response_id`, the unique response identifier, useful for building a deep-link back to the personalised results page
- Per-question answers, recommended products (with names, links and images), assigned tags, [variable scores](/scoring-quiz-setup/) if the quiz uses scoring
- `permalink_quiz_id`, the property segments are typically built on

You don't need to pre-create these in Omnisend. They **auto-create** the first time a response is posted.

## Segmenting by quiz answer

1. In Omnisend, open **Audience > Segments** and click **Create segment**.
2. Add a filter on the custom property the quiz creates, for example `quiz_12345_tag_oily_skin is true` AND `quiz_12345_variable_scores contains "budget:under_40"`.
3. Name the segment (e.g. **Oily skin · under £40**) and save.

![Omnisend segment builder filtering on a quiz custom property](/img/blog/omnisend-quiz-integration/omnisend-segment-builder.png)

To target only people who completed a specific quiz, filter on `permalink_quiz_id` for that quiz's ID. To target shoppers across all quizzes, filter on `quiz_{id}_response_id is known`.

## Building the workflow + email template

Once the segment exists, the workflow does the actual sending.

1. In Omnisend go to **Automations** and create a new workflow.
2. Choose the **Segment-based** trigger and pick the segment.
3. Add an **Email** step. If the email doesn't exist yet, create one from **Campaigns > Create campaign**.
4. Add a **Delay** between steps (e.g. 1 day, then 3 days, then 7 days).
5. In the email editor, drop in a **Custom HTML block** and paste in one of the RevenueHunt template HTML files.
6. Match the template's custom-property names to your actual quiz ID (the templates ship with placeholder IDs that need to be replaced).
7. Test, then turn the workflow on.

![Omnisend automation workflow triggered by a segment of quiz takers](/img/blog/omnisend-quiz-integration/omnisend-automation-workflow.png)

<div class="not-prose my-6"><img src="/img/blog/omnisend-quiz-integration/omnisend-template-example.webp" alt="Omnisend email built from the quiz-result HTML template" style="max-width:480px;width:100%;height:auto;display:block;margin:0 auto;border-radius:8px;" loading="lazy" /></div>

### Template starting points

Three ready-made HTML templates ship as reference docs:

- [Basic Slots Template (4-Step Skincare Routine)](https://docs.google.com/document/d/1wy-_nb0nGyU0_NsWB6YZMiXbXiA2sMyrGu6ks7TqzjQ/edit?usp=sharing)
- [Advanced Slots Template (Morning & Night Routine)](https://docs.google.com/document/d/1RIXL2zF0ErGbUX5IwCRXjnr8bNV3wXuZQuuy3NmbL_I/edit?usp=sharing)
- [Products List Template (Coffee Recommendations)](https://docs.google.com/document/d/175YmJpZ_iTahGFip46MGb6fcn5cupNsCEuZFxMnFCAg/edit?usp=sharing)

These won't render correctly by copy/paste alone: the placeholder property names (and the quiz ID baked into them) need to be replaced with the actual ones from your quiz. A developer with five minutes of Omnisend familiarity can do this in one pass.

## Omnisend vs Klaviyo (and the other options)

Omnisend is the right call when:

- You're **already on Omnisend** for email + SMS + web-push and want one platform across all three channels.
- You're on **WooCommerce, Magento, BigCommerce or Standalone** and Klaviyo's pricing is overkill for the list size.
- You want a quick segment-and-send setup without the depth of Klaviyo's flow logic.

**Klaviyo** generally wins on Shopify when segmentation depth matters: deeper conditional splits, larger template library, native Shopify event triggers (browse abandonment, replenishment, win-back). For most Shopify DTC stores, Klaviyo is the default choice. See [Klaviyo zero-party data](/klaviyo-zero-party-data/) for the activation chain.

**[Shopify Flow](/how-to-automate-post-quiz-emails-using-shopify-flows/)** is the right tool when the trigger is tag-driven and the action lives entirely inside Shopify: add to customer segments, route to teams, fire transactional email.

**[Mailchimp](/how-to-use-mailchimp-for-post-quiz-email-marketing/)** suits non-ecommerce-first audiences and works on Legacy / Woo / Magento / BigCommerce / Standalone but doesn't connect on Built for Shopify.

**[HubSpot](/hubspot-quiz-integration/)** is the right call when the quiz feeds a CRM with sales follow-up alongside marketing.

## FAQ

### Does Omnisend's quiz integration work the same on Built for Shopify and the Legacy / multi-platform versions?

The data fields and the sync trigger are identical. The only difference is the menu path: **Settings > Integrations > Omnisend** on Built for Shopify, **Connect tab > Omnisend** on Legacy and the multi-platform versions.

### What data does the integration send to Omnisend?

Standard contact fields (email, first name, last name, phone) plus quiz-specific custom properties: quiz name, response ID, per-question answers, recommended products with names and links, assigned tags, and variable scores. Every property auto-creates in Omnisend the first time a response is posted.

### Why aren't my quiz contacts showing up in Omnisend?

Three usual causes. First, the quiz isn't capturing an email; the sync only fires when one is captured. Second, the API key permissions are too narrow; recreate the key with all permissions granted in Omnisend's API settings. Third, the quiz hasn't been published since the connection was saved (on Legacy / multi-platform you have to hit **Publish** explicitly).

### How do I send the personalised recommendation in the follow-up email?

Use one of the published HTML templates ([Basic Slots](https://docs.google.com/document/d/1wy-_nb0nGyU0_NsWB6YZMiXbXiA2sMyrGu6ks7TqzjQ/edit?usp=sharing), [Advanced Slots](https://docs.google.com/document/d/1RIXL2zF0ErGbUX5IwCRXjnr8bNV3wXuZQuuy3NmbL_I/edit?usp=sharing), [Products List](https://docs.google.com/document/d/175YmJpZ_iTahGFip46MGb6fcn5cupNsCEuZFxMnFCAg/edit?usp=sharing)). Drop the HTML into a custom block in Omnisend's email editor, then swap the placeholder property names for the ones your quiz actually emits. Five minutes of search-and-replace, no developer required.

### Should I pick Omnisend or Klaviyo for a Shopify store?

If you're already paying for Omnisend's SMS or web-push, keep Omnisend and skip the migration. If you're starting from scratch on Shopify DTC, Klaviyo is the default: deeper segmentation, larger template library, native Shopify event triggers. The migration from Omnisend to Klaviyo is well-trodden if you outgrow it later.

## Next steps

- Decide upstream what data the quiz must capture: [marketing consent in your quiz](/product-quiz-marketing-consent/) before Omnisend starts emailing.
- Use the answers and tags to drive segments: [customer tags in product quizzes](/how-to-use-customer-tags-in-product-quizzes-to-maximize-sales/).
- Compare with [Klaviyo zero-party data](/klaviyo-zero-party-data/), [Shopify Flow automations](/how-to-automate-post-quiz-emails-using-shopify-flows/), [Mailchimp](/how-to-use-mailchimp-for-post-quiz-email-marketing/) and [HubSpot](/hubspot-quiz-integration/) before you commit to one stack.
- Avoid the design traps that nullify the data: [quiz creation mistakes that hurt your ecommerce sales](/quiz-creation-mistakes-that-hurt-your-ecommerce-sales/).
- Track the right numbers post-launch: [product quiz metrics](/product-quiz-metrics-what-to-track-to-convert-better/).
- For the full strategy this fits into: [build a sales funnel on a Shopify store](/build-sales-funnel-shopify-store/) and [11 ecommerce sales funnel examples](/ecommerce-sales-funnel-examples/).
- Estimate the lift on your own store: [quiz ROI calculator](/quiz-roi-calculator/).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does Omnisend's quiz integration work the same on Built for Shopify and the Legacy / multi-platform versions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The data fields and the sync trigger are identical. The only difference is the menu path: Settings > Integrations > Omnisend on Built for Shopify, Connect tab > Omnisend on Legacy and the multi-platform versions."
      }
    },
    {
      "@type": "Question",
      "name": "What data does the integration send to Omnisend?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standard contact fields (email, first name, last name, phone) plus quiz-specific custom properties: quiz name, response ID, per-question answers, recommended products with names and links, assigned tags, and variable scores. Every property auto-creates in Omnisend the first time a response is posted."
      }
    },
    {
      "@type": "Question",
      "name": "Why aren't my quiz contacts showing up in Omnisend?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Three usual causes. First, the quiz isn't capturing an email; the sync only fires when one is captured. Second, the API key permissions are too narrow; recreate the key with all permissions granted in Omnisend's API settings. Third, the quiz hasn't been published since the connection was saved (on Legacy / multi-platform you have to hit Publish explicitly)."
      }
    },
    {
      "@type": "Question",
      "name": "How do I send the personalised recommendation in the Omnisend follow-up email?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use one of the published HTML templates (Basic Slots, Advanced Slots, Products List). Drop the HTML into a custom block in Omnisend's email editor, then swap the placeholder property names for the ones your quiz actually emits. Five minutes of search-and-replace, no developer required."
      }
    },
    {
      "@type": "Question",
      "name": "Should I pick Omnisend or Klaviyo for a Shopify store?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you're already paying for Omnisend's SMS or web-push, keep Omnisend and skip the migration. If you're starting from scratch on Shopify DTC, Klaviyo is the default: deeper segmentation, larger template library, native Shopify event triggers. The migration from Omnisend to Klaviyo is well-trodden if you outgrow it later."
      }
    }
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to connect a RevenueHunt quiz to Omnisend on Built for Shopify",
  "description": "Connect a RevenueHunt product recommendation quiz to Omnisend on the Built for Shopify version using an API key. Once connected, quiz responses sync to Omnisend contact records with standard fields plus auto-created custom properties (quiz_{id}_{field}) covering per-question answers, recommended products, assigned tags and variable scores. The sync only fires when the quiz captures an email address.",
  "totalTime": "PT3M",
  "tool": [
    {"@type": "HowToTool", "name": "RevenueHunt: Recommender Quiz app (Built for Shopify)"},
    {"@type": "HowToTool", "name": "Omnisend account"}
  ],
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Create an Omnisend API key",
      "text": "In Omnisend, open Store Settings > API and create a new API key with all permissions enabled."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Open the Omnisend integration in the quiz",
      "text": "In the RevenueHunt app, open the quiz, then Settings > Integrations and select the Omnisend tab."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Paste the API key and save",
      "text": "Paste the Omnisend API key into the input field and click Save. The integration is now live; the next quiz completion that captures an email will sync to Omnisend, auto-creating the quiz_{id}_{field} custom properties on the contact."
    }
  ]
}
</script>
