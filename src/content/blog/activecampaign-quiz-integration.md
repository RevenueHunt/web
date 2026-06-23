---
title: "ActiveCampaign quiz integration: send leads and segment by quiz answers"
description: "Connect a RevenueHunt quiz to ActiveCampaign on Shopify Legacy, WooCommerce, Magento, BigCommerce, Standalone, plus the Built for Shopify workaround."
pubDate: 2025-03-06T09:30:20Z
updatedDate: 2026-06-02T10:00:00Z
tags: ["ActiveCampaign", "integrations", "email marketing", "CRM", "lead capture"]
categories:
  - "eCommerce"
  - "Shopify Apps"
  - "Tips & Tricks"
author: "Paulina Chodura"
legacySlug: "activecampaign-quiz-integration"
legacyId: 10918
legacyUrl: "https://revenuehunt.com/revenuehunt-activecampaign-integration/"
featuredImage: "/img/blog/activecampaign-quiz-integration/blogtile_activecampaign.webp"
draft: false
---

A product recommendation quiz captures zero-party data while shoppers are actively engaged: stated preferences, skin types, goals, gift recipients, budget bands. ActiveCampaign turns that into a CXA (Customer Experience Automation) pipeline: CRM records, segmented contacts, [lead generation quiz](/glossary/lead-generation-quiz/) flows, and trigger-based automations.

The catch worth knowing before you start: **Built for Shopify (the new RevenueHunt app on Shopify) does not currently have a native ActiveCampaign integration**. Shopify Legacy, WooCommerce, Magento, BigCommerce and Standalone all do. BFS merchants can still get quiz data into ActiveCampaign via the Webhooks integration or a manual CSV upload; both are covered below.

This guide walks the **exact setup paths** by platform, the **10 data fields** that land on the contact record, the recommended-products limitation worth knowing about, and how to wire the data into an automation.

![ActiveCampaign quiz integration](/img/blog/activecampaign-quiz-integration/activecampaign-hero.webp)

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 01</span> &nbsp;The ActiveCampaign quiz integration: ten fields from each quiz response land on the contact record as both standard fields and custom-field tags. The whole sequence becomes available to ActiveCampaign automations as the contact is created.</p>

<div style="margin:32px 0;padding:24px 28px;background:#f8fafc;border-left:4px solid #16161D;border-radius:6px;">
  <p style="margin:0 0 14px;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;">What you'll learn</p>
  <ul style="list-style:none;padding:0;margin:0;">
    <li style="display:flex;gap:14px;padding:6px 0;font-size:15px;color:#0f172a;line-height:1.55;"><span style="flex-shrink:0;color:#16161D;font-weight:700;">→</span><span>Which RevenueHunt platform versions have a native ActiveCampaign integration and which need a workaround.</span></li>
    <li style="display:flex;gap:14px;padding:6px 0;font-size:15px;color:#0f172a;line-height:1.55;"><span style="flex-shrink:0;color:#16161D;font-weight:700;">→</span><span>The two setup paths: from the RevenueHunt Connect tab or from the ActiveCampaign Apps menu (and the branding-toggle gotcha if the Apps page won't appear).</span></li>
    <li style="display:flex;gap:14px;padding:6px 0;font-size:15px;color:#0f172a;line-height:1.55;"><span style="flex-shrink:0;color:#16161D;font-weight:700;">→</span><span>The 10 contact fields that auto-populate from the quiz, and how to map them.</span></li>
    <li style="display:flex;gap:14px;padding:6px 0;font-size:15px;color:#0f172a;line-height:1.55;"><span style="flex-shrink:0;color:#16161D;font-weight:700;">→</span><span>How to trigger a follow-up automation on quiz submission, and the recommended-products limitation to plan around.</span></li>
    <li style="display:flex;gap:14px;padding:6px 0;font-size:15px;color:#0f172a;line-height:1.55;"><span style="flex-shrink:0;color:#16161D;font-weight:700;">→</span><span>When Webhooks, Zapier or CSV are the better path over the native integration.</span></li>
  </ul>
</div>

## Platform support at a glance

<div class="not-prose my-10"><svg viewBox="0 0 1280 560" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="ac-matrix-title" style="width:100%;height:auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#eef2ff;border-radius:16px;padding:24px 16px;box-sizing:border-box;"><title id="ac-matrix-title">ActiveCampaign integration support across RevenueHunt platform versions</title><rect x="20" y="20" width="320" height="64" rx="10" fill="#16161D"/><text x="180" y="60" text-anchor="middle" fill="#fff" font-size="18" font-weight="600">Platform</text><rect x="360" y="20" width="600" height="64" rx="10" fill="#16161D"/><text x="660" y="60" text-anchor="middle" fill="#fff" font-size="18" font-weight="600">Native ActiveCampaign integration</text><rect x="980" y="20" width="280" height="64" rx="10" fill="#16161D"/><text x="1120" y="60" text-anchor="middle" fill="#fff" font-size="18" font-weight="600">Workarounds</text><rect x="20" y="104" width="320" height="100" rx="10" fill="#fff" stroke="#cbd5e1"/><text x="180" y="161" text-anchor="middle" fill="#0f172a" font-size="19" font-weight="700">Built for Shopify</text><rect x="360" y="104" width="600" height="100" rx="10" fill="#F87171"/><text x="660" y="145" text-anchor="middle" fill="#fff" font-size="18" font-weight="700">Not yet supported</text><text x="660" y="175" text-anchor="middle" fill="#fff" font-size="16">No Connect tab option</text><rect x="980" y="104" width="280" height="100" rx="10" fill="#FFD23F" stroke="#16161D" stroke-width="2"/><text x="1120" y="145" text-anchor="middle" fill="#16161D" font-size="18" font-weight="700">Webhooks or CSV</text><text x="1120" y="175" text-anchor="middle" fill="#16161D" font-size="16">Both fully working</text><rect x="20" y="220" width="320" height="100" rx="10" fill="#f8fafc" stroke="#cbd5e1"/><text x="180" y="277" text-anchor="middle" fill="#0f172a" font-size="19" font-weight="700">Shopify Legacy</text><rect x="360" y="220" width="600" height="100" rx="10" fill="#0F9E9C"/><text x="660" y="261" text-anchor="middle" fill="#fff" font-size="18" font-weight="700">Yes ✓ via Connect tab</text><text x="660" y="291" text-anchor="middle" fill="#fff" font-size="16">API token, two-way setup (RevenueHunt or AC Apps)</text><rect x="980" y="220" width="280" height="100" rx="10" fill="#f8fafc" stroke="#cbd5e1"/><text x="1120" y="277" text-anchor="middle" fill="#0f172a" font-size="17">Zapier, Webhooks, CSV</text><rect x="20" y="336" width="320" height="100" rx="10" fill="#fff" stroke="#cbd5e1"/><text x="180" y="381" text-anchor="middle" fill="#0f172a" font-size="19" font-weight="700">WooCommerce</text><text x="180" y="406" text-anchor="middle" fill="#0f172a" font-size="19" font-weight="700">Magento</text><rect x="360" y="336" width="600" height="100" rx="10" fill="#0F9E9C"/><text x="660" y="377" text-anchor="middle" fill="#fff" font-size="18" font-weight="700">Yes ✓ via Connect tab</text><text x="660" y="407" text-anchor="middle" fill="#fff" font-size="16">Same flow as Shopify Legacy</text><rect x="980" y="336" width="280" height="100" rx="10" fill="#fff" stroke="#cbd5e1"/><text x="1120" y="393" text-anchor="middle" fill="#0f172a" font-size="17">Zapier, Webhooks, CSV</text><rect x="20" y="452" width="320" height="64" rx="10" fill="#f8fafc" stroke="#cbd5e1"/><text x="180" y="491" text-anchor="middle" fill="#0f172a" font-size="19" font-weight="700">BigCommerce, Standalone</text><rect x="360" y="452" width="600" height="64" rx="10" fill="#0F9E9C"/><text x="660" y="491" text-anchor="middle" fill="#fff" font-size="18" font-weight="700">Yes ✓ via Connect tab</text><rect x="980" y="452" width="280" height="64" rx="10" fill="#f8fafc" stroke="#cbd5e1"/><text x="1120" y="491" text-anchor="middle" fill="#0f172a" font-size="17">Zapier, Webhooks, CSV</text></svg></div>

## Why pair a quiz with ActiveCampaign

Quizzes capture interest at its peak: the moment a shopper is actively choosing. ActiveCampaign handles what happens next: contacts, segments, CXA flows, predictive sending. Three things change when you connect them:

**[Zero-party data](/zero-party-data/) lands on the contact record automatically** (on every supported platform). Email, name, every tag the quiz logic assigned, and the recommended product IDs all flow into ActiveCampaign as custom fields on the contact. This is the same data layer the [first-party data guide](/first-party-data/) covers in depth, and the same data that powers the [popups-vs-quizzes argument](/why-popups-are-walls-and-quizzes-are-doors-rethinking-lead-capture-for-dtc/) on why interrupt-style popups don't produce segmentable lists.

**Segments stay accurate by themselves.** Filter on a custom field (e.g. `quiz_tags contains "oily_skin"`) and the segment updates as new quiz responses arrive.

**Automations trigger directly off quiz submission.** ActiveCampaign exposes a native "Product Recommendation Quiz" trigger in the Automations builder once the integration is connected, with no separate webhook plumbing required (on supported platforms).

<div class="not-prose my-10 rounded-3xl bg-[#16161D] p-8 text-white shadow-xl">
  <p class="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-6">Why post-quiz email automation pays off</p>
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
    <div>
      <p class="text-4xl font-bold text-emerald-400">5.5%</p>
      <p class="text-sm text-slate-300 mt-2">of shoppers who finish a quiz place an order: about 1 in 18, 2.75x a typical 2% store (<a href="/state-of-product-recommendation-quizzes/" class="underline decoration-emerald-400/40 hover:decoration-emerald-400">RevenueHunt benchmark, 45M+ responses</a>)</p>
    </div>
    <div>
      <p class="text-4xl font-bold text-emerald-400">71%</p>
      <p class="text-sm text-slate-300 mt-2">of top-converting quizzes collect email (75% make it required), which is the seed the ActiveCampaign segments are built on</p>
    </div>
    <div>
      <p class="text-4xl font-bold text-emerald-400">1 in 5</p>
      <p class="text-sm text-slate-300 mt-2">quiz-attributed orders land more than 30 days later, so the segmentation layer keeps converting for months</p>
    </div>
  </div>
</div>

## Built for Shopify: the workaround paths

Native integration isn't available on Built for Shopify yet. Two well-trodden workarounds get you to the same outcome.

### Option 1: Webhooks (recommended)

The cleanest path. RevenueHunt's Webhooks integration fires a payload on every quiz completion that you can route into ActiveCampaign via ActiveCampaign's own webhook receiver.

1. In RevenueHunt, open the quiz, then the **Connect** tab and find the **Webhooks** section. Configure a webhook to fire on quiz completion.
2. In ActiveCampaign, set up a webhook listener that maps incoming fields to ActiveCampaign contact properties. See [ActiveCampaign's webhooks docs](https://developers.activecampaign.com/page/webhooks).
3. Test by completing the quiz; confirm the contact appears in ActiveCampaign with the expected custom fields populated.

You can route any of the [10 fields](#what-lands-on-the-activecampaign-contact) the quiz emits, including custom tags and the recommended product IDs.

### Option 2: manual CSV upload

For low-volume quizzes or one-off campaigns. Export quiz responses as CSV from **Metrics > Responses** in the RevenueHunt app, then upload to ActiveCampaign as a new contact list.

Neither workaround triggers the "Product Recommendation Quiz" automation trigger that native integrations get; on BFS you trigger automations off custom-field changes or list additions instead.

## Native setup: Shopify Legacy, WooCommerce, Magento, BigCommerce, Standalone

All five platforms use the same flow. There are two starting points: from the RevenueHunt app, or from the ActiveCampaign Apps menu.

### Starting from the RevenueHunt Connect tab

1. Open the quiz in the **Quiz Builder** and click the **Connect** tab.
2. Find the **ActiveCampaign** section and copy the **API Token** shown there. You'll paste it into ActiveCampaign in a moment.
3. Click **Connect**. You'll be redirected to ActiveCampaign.

<div class="not-prose my-6"><img src="/img/blog/activecampaign-quiz-integration/connect-tab-activecampaign.png" alt="ActiveCampaign section in the RevenueHunt Connect tab" style="max-width:540px;width:100%;height:auto;display:block;" loading="lazy" /></div>

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 02</span> &nbsp;The ActiveCampaign section inside the RevenueHunt Connect tab. Copy the API Token shown here, click Connect, and complete the authorisation in ActiveCampaign.</p>

4. In ActiveCampaign, click **Add an account**.

<div class="not-prose my-6"><img src="/img/blog/activecampaign-quiz-integration/ac-add-account.png" alt="Add an account screen in ActiveCampaign" style="max-width:540px;width:100%;height:auto;display:block;" loading="lazy" /></div>

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 03</span> &nbsp;The Add an account screen in ActiveCampaign. Click Add an account, then paste in the API Token copied from the Connect tab.</p>

5. Paste the **API Token**.

<div class="not-prose my-6"><img src="/img/blog/activecampaign-quiz-integration/ac-api-token.png" alt="API Token entry in ActiveCampaign" style="max-width:540px;width:100%;height:auto;display:block;" loading="lazy" /></div>

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 04</span> &nbsp;Pasting the API Token in ActiveCampaign authorises the connection. The next screen lets you pick the specific quiz to sync.</p>

6. Select the quiz you want to sync and click **Continue**.
7. **Map the quiz response fields** to ActiveCampaign contact fields. Each quiz field on the left pairs to the corresponding ActiveCampaign field on the right.

<div class="not-prose my-6"><img src="/img/blog/activecampaign-quiz-integration/ac-field-mapping.png" alt="Field mapping screen between quiz and ActiveCampaign" style="max-width:540px;width:100%;height:auto;display:block;" loading="lazy" /></div>

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 05</span> &nbsp;The field mapping screen. Each quiz response field on the left pairs to the matching ActiveCampaign contact field on the right. Map the ten standard fields first, then add custom fields for the quiz-specific signals you want to drive automations on.</p>

Save the configuration. The quiz is connected. New responses will land in ActiveCampaign with the mapped fields populated. To verify the integration is firing correctly against your own order data (rather than against the ActiveCampaign side alone), cross-reference the quiz response count and revenue against the [first-party Shopify quiz analytics](/first-party-shopify-quiz-analytics/) dashboard.

### Starting from the ActiveCampaign Apps menu

1. In ActiveCampaign, open the **Apps** menu and search for **Product Recommendation Quiz**.
2. Select the quiz app and follow the setup. When prompted for the **API Token**, copy it from the RevenueHunt **Connect tab > ActiveCampaign** section.

> **If the Apps page won't appear in ActiveCampaign,** check that ActiveCampaign branding isn't disabled for your account. Toggle it off and back on in account settings; the Apps page should reappear. The Apps menu is gated on branding being enabled.

## What lands on the ActiveCampaign contact

When a quiz completes, the integration posts the following fields to ActiveCampaign:

| Field | Description |
|---|---|
| `Email` | Shopper's email address (mandatory; sync only fires when an email is captured) |
| `First Name` | First name from the quiz |
| `Full Name` | Full name from the quiz |
| `Quiz ID` | Internal identifier for the quiz |
| `Quiz Name` | Display name of the quiz |
| `Response ID` | Unique identifier per response (useful as a primary key for downstream segmentation) |
| `Tags` | Quiz-assigned tags (e.g. `oily_skin`, `dry_hair`, `over_40`) |
| `Permalink` | URL to view the shopper's specific results page |
| `Permalink Hash` | Short hash version of the Permalink |
| `Recommended Product IDs` | The SKU or product IDs the quiz recommended |

All ten fields auto-populate on the contact record after mapping. To add a new custom field that doesn't exist yet in ActiveCampaign, navigate to **Lists > Manage fields > Add Field** in ActiveCampaign first, then revisit the mapping screen in the quiz integration to point to it.

<div class="not-prose my-6"><img src="/img/blog/activecampaign-quiz-integration/ac-new-field.png" alt="Adding a new custom field in ActiveCampaign" style="max-width:540px;width:100%;height:auto;display:block;" loading="lazy" /></div>

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 06</span> &nbsp;Adding a new custom field in ActiveCampaign (Lists, Manage fields, Add Field). Create the field in ActiveCampaign first, then revisit the mapping screen so the quiz integration can point to it.</p>

## Triggering a follow-up automation

Once the integration is connected on a supported platform, the **Product Recommendation Quiz** trigger becomes available in the Automations builder.

1. In ActiveCampaign, open **Automations > New automation**.
2. Choose the **Product Recommendation Quiz** trigger (under **Apps**) and select your quiz.
3. Build the email sequence. Use **Personalization tags** to drop quiz fields into the email body. For example: `%QUIZ_NAME%`, `%TAGS%`, or the **Permalink** to link the shopper to their personalised results page.
4. Add Wait steps and conditional branches based on tag values (e.g. branch on `Tags contains "oily_skin"`).
5. Activate the automation.

On Built for Shopify (Webhooks workaround), trigger off custom-field changes or new contacts entering a specific list instead; the native trigger isn't exposed without the Connect-tab integration.

## The recommended-products limitation

Worth knowing before designing the follow-up email: **only the recommended Product IDs come through to ActiveCampaign, not the full product details** (name, image, description, price). To show actual product cards in the email, you'll need to connect ActiveCampaign directly to your store (Shopify, WooCommerce, Magento or BigCommerce) so ActiveCampaign can pull live product data on its own.

Once connected, you can add a Product block in the email, filter the block by collection, and use the Recommended Product IDs as the filter input. Some merchants use multiple Product blocks with show/hide conditions based on which IDs the shopper received, though this configuration isn't always plug-and-play.

For a simpler email design, link to the **Permalink** (the shopper's personalised results page on your store) instead of trying to recreate the recommendation inside the email. The link drives clicks back to the store where the recommendation is already rendered.

## When Webhooks, Zapier or CSV are the better path

Even on platforms with native integration, the workaround methods are sometimes the right call:

- **Webhooks** when you want **full control over the payload structure** or need to fan-out the data to multiple systems beyond ActiveCampaign at once. The Webhooks integration fires once and you route it however you want.
- **Zapier** when you want **a no-code way to add steps between the quiz and ActiveCampaign**: filter by tag values, enrich with third-party data, write to other tools. Available on Shopify Legacy, WooCommerce, Magento, BigCommerce and Standalone.
- **CSV upload** when you're running a **one-off campaign** or doing the initial backfill for a list that already has historic quiz takers.

## Where ActiveCampaign fits in the stack

ActiveCampaign is **CXA**: CRM, email, automation, sales pipeline, all in one. It shines when the post-quiz journey crosses email + a sales hand-off, or when the automations need branching logic deeper than most ESPs expose. Stores running on Shopify with high transactional email volume often prefer [Klaviyo](/klaviyo-zero-party-data/) for the deeper Shopify-native triggers. For sales-pipeline-driven follow-up, [HubSpot](/hubspot-quiz-integration/) is the heavier-weight option. For email + SMS + web-push in one tool, [Omnisend](/omnisend-quiz-integration/) is purpose-built for ecommerce.

If you're already on ActiveCampaign and need email + CRM with quiz-driven CXA, this integration is the cleanest path (on the platforms that support it natively). If you're choosing greenfield on Built for Shopify, the lack of native ActiveCampaign integration is worth factoring in.

## FAQ

### Does ActiveCampaign integrate with the new Built for Shopify version of RevenueHunt?

Not natively yet. The Connect tab on Built for Shopify does not have an ActiveCampaign section. The supported workarounds are the **Webhooks** integration (route the quiz payload to ActiveCampaign's webhook receiver) or a **manual CSV upload** from Metrics > Responses. Both get the same data into ActiveCampaign.

### Why can't I see the Apps page in ActiveCampaign?

Likely because ActiveCampaign branding is disabled in your account settings. The Apps menu is gated on branding being enabled. Toggle the branding setting off and back on in account settings, then check whether the Apps page appears.

### What customer fields can the quiz send to ActiveCampaign?

Ten fields: Email, First Name, Full Name, Quiz ID, Quiz Name, Response ID, Tags, Permalink, Permalink Hash, Recommended Product IDs. All ten auto-populate on the contact record after mapping. Use **Lists > Manage fields > Add Field** in ActiveCampaign to add new custom fields, then map them.

### Why can't I show the recommended products inside the ActiveCampaign email?

The integration sends only the Recommended Product IDs, not the full product details (name, image, price). To render products in the email, connect ActiveCampaign directly to your store (Shopify, WooCommerce, Magento, BigCommerce) so ActiveCampaign can fetch live product data. Alternatively, link to the **Permalink** (the shopper's personalised results page) and let the store render the products.

### Should I use Klaviyo or ActiveCampaign?

If you're on Shopify and your tooling is transactional email plus on-store automation, [Klaviyo](/klaviyo-zero-party-data/) is usually the better pick: deeper Shopify-native triggers and a larger ecommerce-focused template library. If you need CRM + sales hand-off as part of the same platform, or you're on WooCommerce / Magento / BigCommerce / Standalone and want the CXA toolkit (predictive sending, lead scoring, deep automation logic), ActiveCampaign is the cleaner fit.

## Next steps

- Compare with [HubSpot](/hubspot-quiz-integration/), [Klaviyo](/klaviyo-zero-party-data/), [Omnisend](/omnisend-quiz-integration/) and [Mailchimp](/how-to-use-mailchimp-for-post-quiz-email-marketing/) before committing to one platform.
- For tag-driven Shopify-native automations: [Shopify Flow](/how-to-automate-post-quiz-emails-using-shopify-flows/).
- For the data layer downstream: [customer tags in product quizzes](/how-to-use-customer-tags-in-product-quizzes-to-maximize-sales/).
- For consent collection at quiz time: [marketing consent in your quiz](/product-quiz-marketing-consent/).
- For the full strategy this integration fits into: [build a sales funnel on a Shopify store](/build-sales-funnel-shopify-store/).
- Estimate the lift on your own store: [quiz ROI calculator](/quiz-roi-calculator/).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does ActiveCampaign integrate with Built for Shopify?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not natively yet. The Connect tab on Built for Shopify does not have an ActiveCampaign section. The supported workarounds are the Webhooks integration (route the quiz payload to ActiveCampaign's webhook receiver) or a manual CSV upload from Metrics > Responses."
      }
    },
    {
      "@type": "Question",
      "name": "Why can't I see the Apps page in ActiveCampaign?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Likely because ActiveCampaign branding is disabled in your account settings. The Apps menu is gated on branding being enabled. Toggle the branding setting off and back on in account settings, then check whether the Apps page appears."
      }
    },
    {
      "@type": "Question",
      "name": "What fields does the quiz send to ActiveCampaign?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ten fields: Email, First Name, Full Name, Quiz ID, Quiz Name, Response ID, Tags, Permalink, Permalink Hash, Recommended Product IDs. All ten auto-populate on the contact record after mapping. New custom fields can be added in ActiveCampaign via Lists > Manage fields > Add Field, then mapped."
      }
    },
    {
      "@type": "Question",
      "name": "Why can't I show the recommended products inside the ActiveCampaign email?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The integration sends only the Recommended Product IDs, not the full product details. To render products in the email, connect ActiveCampaign directly to your store so ActiveCampaign can fetch live product data. Alternatively, link to the Permalink (the shopper's personalised results page) and let the store render the products."
      }
    },
    {
      "@type": "Question",
      "name": "Should I use Klaviyo or ActiveCampaign for a quiz funnel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you're on Shopify and your tooling is transactional email plus on-store automation, Klaviyo is usually the better pick: deeper Shopify-native triggers and a larger ecommerce-focused template library. If you need CRM and sales hand-off as part of the same platform, or you're on WooCommerce / Magento / BigCommerce / Standalone and want the CXA toolkit, ActiveCampaign is the cleaner fit."
      }
    }
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to connect a RevenueHunt quiz to ActiveCampaign",
  "description": "Connect a RevenueHunt product recommendation quiz to ActiveCampaign on Shopify Legacy, WooCommerce, Magento, BigCommerce or Standalone using the Connect tab. Quiz responses sync to ActiveCampaign contact records with 10 custom fields including Tags and Recommended Product IDs.",
  "totalTime": "PT5M",
  "tool": [
    {"@type": "HowToTool", "name": "RevenueHunt: Recommender Quiz app"},
    {"@type": "HowToTool", "name": "ActiveCampaign account"}
  ],
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Open the Connect tab in the Quiz Builder",
      "text": "In RevenueHunt, open the quiz in the Quiz Builder and click the Connect tab."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Copy the ActiveCampaign API Token",
      "text": "Find the ActiveCampaign section in the Connect tab and copy the API Token shown there."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Click Connect to redirect to ActiveCampaign",
      "text": "Click Connect. You will be redirected to ActiveCampaign."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Add an account in ActiveCampaign",
      "text": "In ActiveCampaign, click Add an account."
    },
    {
      "@type": "HowToStep",
      "position": 5,
      "name": "Paste the API Token",
      "text": "Paste the API Token you copied from the RevenueHunt Connect tab."
    },
    {
      "@type": "HowToStep",
      "position": 6,
      "name": "Select the quiz and continue",
      "text": "Select the quiz you want to sync and click Continue."
    },
    {
      "@type": "HowToStep",
      "position": 7,
      "name": "Map quiz response fields to ActiveCampaign contact fields",
      "text": "Pair each quiz field on the left with the corresponding ActiveCampaign field on the right, then save. New responses will land in ActiveCampaign with the mapped fields populated."
    }
  ]
}
</script>
