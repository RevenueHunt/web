---
title: "HubSpot quiz integration: send & segment leads"
description: "How to connect a product recommendation quiz to HubSpot: setup paths for Shopify and other platforms, the data sent, list segmentation, and workflows."
pubDate: 2024-10-03T06:12:07Z
updatedDate: 2026-06-02T10:00:00Z
tags: ["HubSpot", "integrations", "email marketing", "lead capture", "marketing automation"]
categories:
  - "eCommerce"
  - "Shopify Apps"
author: "Paulina Chodura"
legacySlug: "hubspot-quiz-integration"
legacyId: 10082
legacyUrl: "https://revenuehunt.com/hubspot-shop-quiz-a-proven-strategy-to-increase-conversions/"
featuredImage: "/img/blog/hubspot-quiz-integration/blogtile_hubspot.webp"
draft: false
---

<div style="margin:0 0 28px;padding:20px 24px;background:#f8fafc;border-left:4px solid #16161D;border-radius:6px;">
  <p style="margin:0 0 10px;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;">Quick answer</p>
  <p style="margin:0;font-size:16px;color:#0f172a;line-height:1.6;">To send quiz leads to HubSpot, connect RevenueHunt to your HubSpot account and each completed quiz response syncs automatically: the shopper's email, the answers they chose, the tags the quiz assigned, and the products it recommended all land on the HubSpot contact as custom properties. No Zapier, no CSV exports. From there you build active lists and list-based workflows that segment and email people based on those properties.</p>
</div>

A product recommendation quiz captures zero-party data while shoppers are actively engaged: stated preferences, skin types, goals, gift recipients, budget bands. HubSpot turns that into segmented lists, scored leads, and automated nurture flows. Wired together, the two run as one [customer segmentation](/glossary/customer-segmentation/) and [lead generation quiz](/glossary/lead-generation-quiz/) pipeline.

This guide covers the **exact setup paths**, the **data fields** that land on the contact record, and the **platform differences** you need to know before you wire it up.

<div style="margin:32px 0;padding:24px 28px;background:#f8fafc;border-left:4px solid #16161D;border-radius:6px;">
  <p style="margin:0 0 14px;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;">What you'll learn</p>
  <ul style="list-style:none;padding:0;margin:0;">
    <li style="display:flex;gap:14px;padding:6px 0;font-size:15px;color:#0f172a;line-height:1.55;"><span style="flex-shrink:0;color:#16161D;font-weight:700;">→</span><span>How to connect HubSpot to a quiz on Built for Shopify, Shopify Legacy, WooCommerce, Magento, BigCommerce, and Standalone.</span></li>
    <li style="display:flex;gap:14px;padding:6px 0;font-size:15px;color:#0f172a;line-height:1.55;"><span style="flex-shrink:0;color:#16161D;font-weight:700;">→</span><span>Which contact fields and custom properties auto-create in HubSpot when a shopper finishes a quiz.</span></li>
    <li style="display:flex;gap:14px;padding:6px 0;font-size:15px;color:#0f172a;line-height:1.55;"><span style="flex-shrink:0;color:#16161D;font-weight:700;">→</span><span>Where list segmentation lives, and which platforms don't support it inside the app.</span></li>
    <li style="display:flex;gap:14px;padding:6px 0;font-size:15px;color:#0f172a;line-height:1.55;"><span style="flex-shrink:0;color:#16161D;font-weight:700;">→</span><span>How to build a segmented HubSpot list and a list-based email workflow from quiz answers.</span></li>
    <li style="display:flex;gap:14px;padding:6px 0;font-size:15px;color:#0f172a;line-height:1.55;"><span style="flex-shrink:0;color:#16161D;font-weight:700;">→</span><span>How to insert quiz-answer personalisation tokens into HubSpot email templates.</span></li>
  </ul>
</div>

## Why pair a quiz with HubSpot

Quizzes capture interest at its peak: the moment someone is actively choosing. HubSpot handles what happens next: segmentation, scoring, nurture. Three things change when you connect them:

**Zero-party data lands on the contact record automatically.** Every answer the shopper selects, every tag the quiz assigns, every product the quiz recommends ends up as a custom property on the HubSpot contact. No spreadsheet exports, no Zapier middle layer.

**Segments stay accurate by themselves.** Active lists update as new quiz responses come in, so "oily skin + under £40 budget" is always the current set, not a snapshot from last week.

**Personalisation tokens make the follow-up email match the quiz result.** The product the quiz recommended is the product the welcome email features.

<div class="not-prose my-10 rounded-3xl bg-[#16161D] p-8 text-white shadow-xl">
  <p class="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-6">Why personalised follow-up converts</p>
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
    <div>
      <p class="text-4xl font-bold text-emerald-400">71%</p>
      <p class="text-sm text-slate-300 mt-2">of high-performing quizzes collect email; 75% make it required (<a href="/state-of-product-recommendation-quizzes/" class="underline decoration-emerald-400/40 hover:decoration-emerald-400">RevenueHunt platform data, 45M+ responses</a>)</p>
    </div>
    <div>
      <p class="text-4xl font-bold text-emerald-400">10.6%</p>
      <p class="text-sm text-slate-300 mt-2">conversion rate when the quiz uses a single results page versus 7.1% when it splits across 11+ pages</p>
    </div>
    <div>
      <p class="text-4xl font-bold text-emerald-400">3–5x</p>
      <p class="text-sm text-slate-300 mt-2">revenue uplift on targeted versus untargeted emails (McKinsey)</p>
    </div>
  </div>
</div>

## Setup paths by platform

The connection lives in **different places** depending on which version of the app you run. The trigger and the data sent are the same; the UI is not.

<div class="not-prose my-6 overflow-x-auto">
  <table class="w-full border-collapse text-sm">
    <thead>
      <tr class="bg-[#16161D] text-white">
        <th class="border border-slate-300 p-3 text-left font-semibold"></th>
        <th class="border border-slate-300 p-3 text-left font-semibold">Built for Shopify and Shopify Legacy</th>
        <th class="border border-slate-300 p-3 text-left font-semibold">WooCommerce, Magento, BigCommerce, Standalone</th>
      </tr>
    </thead>
    <tbody>
      <tr class="bg-white">
        <td class="border border-slate-300 p-3 text-slate-900"><strong>Where you connect</strong></td>
        <td class="border border-slate-300 p-3 text-slate-900">Quiz Settings &gt; Integrations</td>
        <td class="border border-slate-300 p-3 text-slate-900">Quiz Builder &gt; Connect tab</td>
      </tr>
      <tr class="bg-slate-50">
        <td class="border border-slate-300 p-3 text-slate-900"><strong>Connection scope</strong></td>
        <td class="border border-slate-300 p-3 text-slate-900">Store-level (authorise once)</td>
        <td class="border border-slate-300 p-3 text-slate-900">Per-quiz</td>
      </tr>
      <tr class="bg-white">
        <td class="border border-slate-300 p-3 text-slate-900"><strong>Per-quiz opt-in</strong></td>
        <td class="border border-slate-300 p-3 text-slate-900">Required (disabled by default)</td>
        <td class="border border-slate-300 p-3 text-slate-900">Automatic on authorise</td>
      </tr>
      <tr class="bg-slate-50">
        <td class="border border-slate-300 p-3 text-slate-900"><strong>In-app "Select a list" dropdown</strong></td>
        <td class="border border-slate-300 p-3 text-slate-900">Available</td>
        <td class="border border-slate-300 p-3 text-slate-900">Not available (segment in HubSpot)</td>
      </tr>
    </tbody>
  </table>
</div>

### Built for Shopify (and Shopify Legacy)

The HubSpot connection is **store-level**: you authorise once for the whole store, then opt each quiz in.

1. Open **Quiz Settings > Integrations**.
2. In the **Mailing & CRMs** section find the **HubSpot** card and click **Connect**.
3. HubSpot's authorisation page opens. Pick your HubSpot account and click **Choose Account**.
4. Review the requested scopes and click **Connect app**.
5. You're returned to the app. The HubSpot card now shows **Connected** with your Portal ID.

After the first connection HubSpot is **disabled** on each quiz by default. For every quiz where you want leads to flow through, open that quiz's settings and tick **Enable HubSpot for this quiz**, then **Save**.

### WooCommerce, Magento, BigCommerce, and Standalone

The connection is **per-quiz** and enabled automatically the moment you authorise.

1. Open the quiz in the **Quiz Builder** and click the **Connect** tab.
2. Find the HubSpot integration and click **Connect**.
3. A new tab opens for HubSpot authorisation. Pick your HubSpot account.
4. The confirmation page returns; the quiz is now wired up.

To disconnect, return to the **Connect** tab and click **Disconnect**.

> **Heads-up for Shopify merchants:** if you build a new quiz after the initial connection, remember to tick **Enable HubSpot for this quiz** in that quiz's integration settings. The store-level authorisation does not auto-opt new quizzes in.

## What lands on the HubSpot contact

The sync fires when a shopper **finishes the quiz and provides an email address**. The email is mandatory: without it, no contact, no properties.

Each completed response sends:

**Standard contact fields**

- `email`
- `firstname`, `lastname`
- `phone` (when collected)

**Quiz-specific custom properties** (naming convention `quiz_{id}_{field}`)

- `quiz_{id}_response_id` — unique response identifier, the workhorse for list segmentation
- `quiz_{id}_quiz_name`
- `quiz_{id}_result_ref` and `quiz_{id}_result_page_name`
- `quiz_{id}_created_at` — completion timestamp
- `quiz_{id}_tags` — every tag the quiz logic assigned to this respondent
- `quiz_{id}_variable_scores` — variable values (skin-type score, fitness score, etc.)
- `quiz_{id}_answer_by_block_{block_ref}` — per-question answer text
- `quiz_{id}_choice_{choice_ref}` — boolean per choice
- `quiz_{id}_tag_{tag_name}` — boolean per tag
- `quiz_{id}_products` — names of recommended products
- `quiz_{id}_products_count`

You don't have to create any of these in HubSpot in advance. **The app creates them automatically** the first time a response is posted.

![Custom quiz properties on a HubSpot contact](/img/blog/hubspot-quiz-integration/properties-on-contact.webp)

![Product Recommendation Quiz section under custom properties](/img/blog/hubspot-quiz-integration/custom-properties-section.webp)

## List segmentation: in-app versus HubSpot-side

There are two ways to get a contact into a HubSpot list. **Which one is available depends on the platform.**

<div class="not-prose my-6 overflow-x-auto">
  <table class="w-full border-collapse text-sm">
    <thead>
      <tr class="bg-[#16161D] text-white">
        <th class="border border-slate-300 p-3 text-left font-semibold">Approach</th>
        <th class="border border-slate-300 p-3 text-left font-semibold">Built for Shopify and Shopify Legacy</th>
        <th class="border border-slate-300 p-3 text-left font-semibold">WooCommerce, Magento, BigCommerce, Standalone</th>
      </tr>
    </thead>
    <tbody>
      <tr class="bg-white">
        <td class="border border-slate-300 p-3 text-slate-900"><strong>Pick a HubSpot list on the email question</strong></td>
        <td class="border border-slate-300 p-3 text-slate-900">✓ Email block settings include a <em>Select a list</em> dropdown</td>
        <td class="border border-slate-300 p-3 text-slate-900">✗ Not available; the dropdown does not appear</td>
      </tr>
      <tr class="bg-slate-50">
        <td class="border border-slate-300 p-3 text-slate-900"><strong>Build a HubSpot list from custom properties</strong></td>
        <td class="border border-slate-300 p-3 text-slate-900">✓ Works everywhere; recommended for behaviour-based segments</td>
        <td class="border border-slate-300 p-3 text-slate-900">✓ The only option</td>
      </tr>
    </tbody>
  </table>
</div>

If the in-app dropdown doesn't show your lists, the list was likely created after the integration was authorised. Open **Quiz Settings > Integrations** and click **Reconnect** to refresh the list catalogue.

## Build a segmented HubSpot list from quiz answers

This is the universal path: it works on every platform and gives you finer control than the in-app dropdown.

1. In HubSpot, open **Contacts > Lists**.
2. Click **Create List** (top-right).
3. Choose **Active List** (recalculates as new responses come in) or **Static List** (a frozen snapshot).
4. Add filter criteria on the custom properties the quiz created — for example `quiz_12345_tag_oily_skin is true` AND `quiz_12345_variable_scores contains "budget:under_40"`.
5. Name the list (e.g. **Oily skin · under £40**) and **Save**.

![Segmented list builder](/img/blog/hubspot-quiz-integration/segmented-list-builder.webp)

![List criteria with quiz properties](/img/blog/hubspot-quiz-integration/list-criteria.webp)

## Build a list-based workflow

Once the list exists, the workflow does the actual sending.

1. In HubSpot go to **Automation > Workflows**.
2. Click **Create workflow > From scratch**.
3. Choose **List-based** and pick the list you just created.
4. Add an **Email** action; if you don't have the email yet, create it under **Marketing > Email > Create email**.
5. Insert a **Delay** between steps (e.g. 1 day, then 3 days, then 7 days).
6. Customise each email using personalisation tokens for the quiz answers (next section).
7. Test the workflow and turn it on.

![HubSpot workflow builder](/img/blog/hubspot-quiz-integration/workflow-builder.webp)

## Personalise emails with quiz-answer tokens

Quiz custom properties behave like any other HubSpot contact property: they're available as personalisation tokens in any email template.

1. In the email editor click **Insert > Personalization Token**.
2. Find the quiz property you want — for example `quiz_12345_products` or `quiz_12345_result_page_name`.
3. Drop the token into the subject line, the body, or both.

![Personalization Token picker](/img/blog/hubspot-quiz-integration/personalization-token.webp)

Use **Preview as a specific contact** to confirm the token renders for a real quiz respondent before you turn the workflow on.

![Email preview with rendered tokens](/img/blog/hubspot-quiz-integration/email-preview.webp)

> **Note on images:** HubSpot personalisation tokens render text, not images. If you want the email to show the recommended product image, you typically need to attach that data through HubSpot's product catalog or use programmable email; you can't drop a product image straight from a quiz token.

## Marketing consent and the HubSpot sync

The HubSpot sync sends the **contact details and the answers**. It does not, on its own, set the marketing-subscription status on the HubSpot contact. If you need explicit consent on record before nurturing:

- Add a **marketing-consent question** to the quiz (see [marketing consent in your quiz](/product-quiz-marketing-consent/)).
- The shopper's answer arrives as a quiz tag (e.g. `consent_yes`).
- Build a HubSpot list filtered on that tag and use **only that list** to feed the nurture workflow.

This keeps non-consenting contacts out of marketing sends even though their data is on the contact record.

## When to use HubSpot versus Klaviyo or Shopify Flow

HubSpot is the right fit when **CRM, lead scoring, and sales follow-up** matter as much as email — typical for B2B catalogues, considered-purchase niches, or merchants who need a single contact record across email and a sales pipeline. For pure-play DTC where the goal is transactional email and SMS at scale on Shopify, [Klaviyo](/klaviyo-zero-party-data/) generally wins on segmentation depth and Shopify-native triggers. For tag-driven automations confined to Shopify itself (order tags, customer tags, fulfilment routing), [Shopify Flow](/how-to-automate-post-quiz-emails-using-shopify-flows/) keeps the logic where the orders live.

## FAQ

### Does the HubSpot integration work the same on Built for Shopify and Shopify Legacy?

The setup path is identical (**Quiz Settings > Integrations > HubSpot**) and so are the fields sent. The only quirk to remember on both is that HubSpot is **disabled per quiz by default** after you authorise; you tick **Enable HubSpot for this quiz** to opt each quiz in.

### Can I send leads to HubSpot from WooCommerce, Magento, or BigCommerce?

Yes. The connection lives under **Quiz Builder > Connect**, and once authorised the quiz starts sending leads automatically — no per-quiz toggle. The only feature you don't get is the in-app **Select a list** dropdown on the email block; you segment inside HubSpot instead.

### What if the email is optional in my quiz?

The HubSpot sync **only fires when an email is captured**. Responses without an email don't create contacts. If lead capture is the whole point of the integration, make the email question **required** and place it before the results page — platform data shows 75% of high-performing quizzes require email.

### Do I need to create the custom properties in HubSpot first?

No. The integration **auto-creates** every `quiz_{id}_*` property the first time a response is posted, including the per-question answer fields and per-tag booleans.

### Why don't my HubSpot lists show up in the in-app dropdown?

Two common causes. First, the lists were created after the integration was authorised; reconnect via **Quiz Settings > Integrations > Reconnect**. Second, you're on WooCommerce, Magento, BigCommerce, or Standalone — the in-app list picker is Shopify-only. Build the lists from custom properties inside HubSpot instead.

## Next steps

- Decide upstream what data the quiz must capture: [marketing consent in your quiz](/product-quiz-marketing-consent/) before HubSpot starts emailing.
- Use the answers and tags to drive segments: [customer tags in product quizzes](/how-to-use-customer-tags-in-product-quizzes-to-maximize-sales/).
- Compare with [Klaviyo zero-party data](/klaviyo-zero-party-data/) and [Shopify Flow automations](/how-to-automate-post-quiz-emails-using-shopify-flows/) before you commit to one stack.
- Avoid the design traps that kill quiz conversion: [quiz creation mistakes](/quiz-creation-mistakes-that-hurt-your-ecommerce-sales/).
- Track the right numbers post-launch: [product quiz metrics](/product-quiz-metrics-what-to-track-to-convert-better/).
- New to quizzes? Start with [how to build a successful ecommerce quiz](/how-to-build-a-successful-ecommerce-quiz/).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does the HubSpot integration work the same on Built for Shopify and Shopify Legacy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The setup path is identical (Quiz Settings > Integrations > HubSpot) and so are the fields sent. The only quirk on both is that HubSpot is disabled per quiz by default after you authorise; you tick Enable HubSpot for this quiz to opt each quiz in."
      }
    },
    {
      "@type": "Question",
      "name": "Can I send leads to HubSpot from WooCommerce, Magento, or BigCommerce?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The connection lives under Quiz Builder > Connect, and once authorised the quiz starts sending leads automatically with no per-quiz toggle. The only feature unavailable is the in-app Select a list dropdown on the email block; you segment inside HubSpot instead."
      }
    },
    {
      "@type": "Question",
      "name": "What if the email is optional in my quiz?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The HubSpot sync only fires when an email is captured. Responses without an email don't create contacts. If lead capture is the goal of the integration, make the email question required and place it before the results page; platform data shows 75% of high-performing quizzes require email."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to create the custom properties in HubSpot first?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. The integration auto-creates every quiz_{id}_* property the first time a response is posted, including the per-question answer fields and per-tag booleans."
      }
    },
    {
      "@type": "Question",
      "name": "Why don't my HubSpot lists show up in the in-app dropdown?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Two common causes. First, the lists were created after the integration was authorised; reconnect via Quiz Settings > Integrations > Reconnect. Second, you're on WooCommerce, Magento, BigCommerce, or Standalone, where the in-app list picker is Shopify-only. Build the lists from custom properties inside HubSpot instead."
      }
    }
  ]
}
</script>
