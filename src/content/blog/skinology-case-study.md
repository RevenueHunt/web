---
title: "Skinology case study: AI plus dermatologist personalised skincare"
description: "How Chilean brand Skinology pairs an in-house AI model with a dermatologist sign-off to formulate bespoke skincare, with the repurchase quiz still running on RevenueHunt."
pubDate: 2024-10-25T07:19:46Z
updatedDate: 2026-06-12T10:00:00Z
tags: ["case study", "personalisation", "skincare", "AI", "quiz strategy"]
categories:
  - "Case Studies"
  - "eCommerce"
  - "Shopify Apps"
author: "Paulina Chodura"
legacySlug: "skinology-case-study"
legacyId: 10429
legacyUrl: "https://revenuehunt.com/skinology-and-shop-quiz-crafting-personalized-skincare-journeys-online/"
featuredImage: "/img/blog/skinology-case-study/blogtiles_skinology.png"
draft: false
---

[Skincare](/solutions/skincare/) is a category where the questions a customer needs answered before buying are particularly hard to solve on a generic product page. [Skinology](https://skinology.cl/), a Chilean brand founded in Santiago by Antonia Schlesinger, built a personalised quiz to bridge that gap: a dermatologist-designed assessment that feeds an in-house AI model and produces a bespoke formula for every customer. The brand currently runs a **two-quiz architecture**: a custom in-house quiz handles initial discovery and formulation, and a follow-up [repurchase quiz on RevenueHunt's Shopify Legacy app](/first-party-shopify-quiz-analytics/) captures evolving needs at every reorder. Both quizzes were originally built on RevenueHunt; the discovery quiz has since migrated to a bespoke build, and the repurchase flow has stayed on RevenueHunt because the cadence-aware reorder loop is exactly what the platform was designed for. In this case study Antonia walks us through how the quiz, the AI, and the dermatologist sign-off work together.

<div class="aspect-video overflow-hidden rounded-xl bg-slate-900 not-prose my-6"><button type="button" class="yt-facade group relative block h-full w-full cursor-pointer overflow-hidden" data-yt-id="YwXyjQouBxA" aria-label="Play video"><picture><source srcset="https://i.ytimg.com/vi_webp/YwXyjQouBxA/maxresdefault.webp" type="image/webp" /><img src="https://i.ytimg.com/vi/YwXyjQouBxA/maxresdefault.jpg" alt="" width="1280" height="720" loading="lazy" decoding="async" class="h-full w-full object-cover" /></picture><span class="absolute inset-0 flex items-center justify-center bg-black/10 transition group-hover:bg-black/20"><span class="flex h-20 w-20 items-center justify-center rounded-full bg-black/70 shadow-lg transition group-hover:scale-105 group-hover:bg-[#FF0000]"><svg class="ml-0.5 h-9 w-9 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg></span></span></button></div>

<div style="margin:32px 0;padding:24px 28px;background:#f8fafc;border-left:4px solid #16161D;border-radius:6px;">
  <p style="margin:0 0 14px;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;">What you'll learn</p>
  <ul style="list-style:none;padding:0;margin:0;">
    <li style="display:flex;gap:14px;padding:6px 0;font-size:15px;color:#0f172a;line-height:1.55;"><span style="flex-shrink:0;color:#16161D;font-weight:700;">→</span><span>How an online quiz can replicate the questions a dermatologist asks in a clinic.</span></li>
    <li style="display:flex;gap:14px;padding:6px 0;font-size:15px;color:#0f172a;line-height:1.55;"><span style="flex-shrink:0;color:#16161D;font-weight:700;">→</span><span>Pairing an AI model with a human expert reviewer: where each adds value, and where the hand-off lives.</span></li>
    <li style="display:flex;gap:14px;padding:6px 0;font-size:15px;color:#0f172a;line-height:1.55;"><span style="flex-shrink:0;color:#16161D;font-weight:700;">→</span><span>Why a follow-up quiz on every reorder is a stronger retention lever than a static subscription.</span></li>
    <li style="display:flex;gap:14px;padding:6px 0;font-size:15px;color:#0f172a;line-height:1.55;"><span style="flex-shrink:0;color:#16161D;font-weight:700;">→</span><span>How quiz answers feed retargeting and segmented marketing once the data is on the customer record.</span></li>
  </ul>
</div>

<div class="not-prose my-12 rounded-3xl bg-gradient-to-br from-[#0f1419] to-[#16161D] p-8 sm:p-10 text-white shadow-2xl ring-1 ring-white/10">
  <p class="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-400 mb-8">Skinology, the repurchase quiz disclosed signals</p>
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 sm:divide-x sm:divide-white/10">
    <div class="sm:pr-6">
      <p class="text-5xl sm:text-6xl font-bold text-emerald-400 tracking-tight leading-none">~50<span class="text-3xl sm:text-4xl">%</span></p>
      <p class="text-[11px] font-semibold uppercase tracking-widest text-slate-400 mt-3">repeat-buyer rate</p>
      <p class="text-sm text-slate-300 mt-3 leading-relaxed">Around half of Skinology's customers are repeat buyers, which the founder treats as the strongest signal that the personalisation model works once shoppers understand it.</p>
    </div>
    <div class="sm:px-6">
      <p class="text-5xl sm:text-6xl font-bold text-emerald-400 tracking-tight leading-none">~47<span class="text-3xl sm:text-4xl">%</span></p>
      <p class="text-[11px] font-semibold uppercase tracking-widest text-slate-400 mt-3">repurchase quiz completion</p>
      <p class="text-sm text-slate-300 mt-3 leading-relaxed">Around 47% of starts on the repurchase quiz reach the results page in a recent 90-day window, with thousands of lifetime responses captured.</p>
    </div>
    <div class="sm:pl-6">
      <p class="text-5xl sm:text-6xl font-bold text-emerald-400 tracking-tight leading-none">2<span class="text-3xl sm:text-4xl">-quiz</span></p>
      <p class="text-[11px] font-semibold uppercase tracking-widest text-slate-400 mt-3">architecture</p>
      <p class="text-sm text-slate-300 mt-3 leading-relaxed">Discovery (custom in-house) plus repurchase (RevenueHunt on Shopify Legacy). Each touchpoint feeds the same AI model (Liam) and dermatologist sign-off (Lia).</p>
    </div>
  </div>
</div>

### Case at a glance

| | |
|---|---|
| **Brand** | [Skinology](https://skinology.cl/), founded by Antonia Schlesinger in Santiago, Chile |
| **Vertical** | Personalised compounded skincare, dermatologist-led |
| **Platform** | Shopify (RevenueHunt running on the [Legacy app version](/first-party-shopify-quiz-analytics/) for the repurchase flow) |
| **Quiz architecture** | Two-stage: custom in-house quiz for discovery, RevenueHunt quiz for repurchase |
| **AI + human layer** | Liam (in-house AI) drafts every formulation; Lia (dermatologist) reviews and signs off before the lab produces it |
| **Disclosed repeat-buyer rate** | ~50% of customers are repeat buyers |
| **Disclosed repurchase-quiz completion** | ~47% in a recent 90-day window, with thousands of lifetime responses captured |
| **ESP / CRM connected** | Klaviyo on the repurchase quiz; email also captured |
| **Geographic scope** | Chile, with Latin American expansion planned |
| **Data source** | RevenueHunt Analytics on the repurchase quiz (Shopify Legacy attribution model, see [first-party Shopify quiz analytics](/first-party-shopify-quiz-analytics/) for the same-session caveat) |

## The vision behind Skinology

Antonia, the founder, was tired of trial-and-error skincare and the overwhelming choice on the shelf. She joined forces with Lia, an experienced dermatologist, to build a skincare line that feels as personal as a clinic visit. Together they designed an interactive online quiz that mimics the questions Lia would ask her patients in person: pregnancy, hormonal conditions, lifestyle, skin reactions.

![Skinology personalised skincare quiz](/img/blog/skinology-case-study/quiz-screenshot.webp)

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 01</span> &nbsp;The Skinology discovery quiz mirrors the questions Lia would ask a patient in clinic: pregnancy, hormonal conditions, lifestyle, skin reactions.</p>

The quiz responses are reviewed by Lia and by **Liam**, an in-house AI model whose name combines Lia with the brand's CTO's initials. Liam acts as the brain behind each formulation: it synthesises the customer's responses and proposes the ideal ingredients and concentrations. Lia then reviews the AI's proposal for accuracy and safety, and once approved the formula is prepared in the lab for that individual.

It's a high-tech approach to personalisation backed by hands-on dermatology expertise, and a useful pattern for any brand thinking about how to combine an AI layer with a human expert.

> "We're trying to simplify skincare, so you use fewer, more effective products. That's why every question in the quiz matters: a different combination of answers can lead to vastly different formulations."

"People find it difficult to understand what tailored skincare means. It's not a one-size-fits-all; every ingredient has a purpose," Antonia noted during our conversation.

## A routine that evolves

What sets Skinology apart from traditional skincare brands is that the formulation itself evolves. Customers as young as four can begin a Skinology journey, receiving products that adapt as their skin develops. After the first set of products, the app prompts customers to retake a follow-up quiz when they reorder. The follow-up explores how earlier products performed, any changes in skin condition, and lifestyle factors. Every reorder means a reformulated product, matched to the customer's current needs.

<div class="product-grid">
<div class="product-card">
<a href="https://skinology.cl/products/contorno-de-ojos"><img src="/img/blog/skinology-case-study/product-contorno-de-ojos.webp" alt="Contorno de Ojos" loading="lazy" /></a>
<p><strong>Contorno de Ojos</strong></p>
<a href="https://skinology.cl/products/contorno-de-ojos">View product</a>
</div>
<div class="product-card">
<a href="https://skinology.cl/products/serum"><img src="/img/blog/skinology-case-study/product-serum.webp" alt="Serum" loading="lazy" /></a>
<p><strong>Serum</strong></p>
<a href="https://skinology.cl/products/serum">View product</a>
</div>
<div class="product-card">
<a href="https://skinology.cl/products/crema-dia"><img src="/img/blog/skinology-case-study/product-crema-dia.webp" alt="Crema de Día" loading="lazy" /></a>
<p><strong>Crema de Día</strong></p>
<a href="https://skinology.cl/products/crema-dia">View product</a>
</div>
<div class="product-card">
<a href="https://skinology.cl/products/crema-noche"><img src="/img/blog/skinology-case-study/product-crema-noche.webp" alt="Crema de Noche" loading="lazy" /></a>
<p><strong>Crema de Noche</strong></p>
<a href="https://skinology.cl/products/crema-noche">View product</a>
</div>
</div>

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 02</span> &nbsp;A selection of Skinology's bespoke compounded products. Each is freshly formulated per customer rather than picked off a SKU list.</p>

"For example, we had a customer experiencing menopause-related acne for the first time in her life," Antonia recalled. "She had never struggled with acne before, but due to the hormonal changes, her skin reacted. Using Skinology, she was able to regain control of her skin, and the acne disappeared."

Every product Skinology delivers is freshly formulated and designed to last just long enough until the next evolution: a new phase in skincare for a continually changing life.

## Data-driven skincare, powered by the quiz and Liam

Skinology originally built both the discovery and the repurchase quizzes on [RevenueHunt: Recommender Quiz for Shopify](/product-recommendation-quiz/) (the [Legacy](/first-party-shopify-quiz-analytics/) version, before [Built for Shopify](/revenuehunt-built-for-shopify/) shipped). Over time the brand moved the discovery quiz to a custom in-house build, where it could control the formulation logic end-to-end. The **repurchase quiz still runs on RevenueHunt**: the cadence-aware reorder loop, the [Klaviyo zero-party data sync](/klaviyo-zero-party-data/), and the lifecycle segmentation are exactly what the platform was designed for, and rebuilding that in-house didn't pencil.

The two systems work hand-in-hand: the quiz (whichever stage) captures the inputs, Liam translates them into a draft formulation, Lia signs off. Each customer ends up with something the brand could not have produced from browsing behaviour alone.

<div class="not-prose my-10"><svg viewBox="0 0 1200 540" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="skin-flow-title skin-flow-desc" style="width:100%;height:auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#eef2ff;border-radius:16px;padding:32px 28px;box-sizing:border-box;"><title id="skin-flow-title">Skinology two-quiz architecture with AI plus dermatologist sign-off</title><desc id="skin-flow-desc">First-buy and repurchase quizzes both feed Liam the in-house AI, which proposes a formulation that Lia the dermatologist reviews before the lab produces the bespoke product.</desc><text x="40" y="56" font-size="32" font-weight="700" fill="#0f172a">The Skinology workflow</text><text x="40" y="92" font-size="18" fill="#475569">Two quiz touchpoints, one AI plus dermatologist hand-off, lab-compounded bespoke products.</text><text x="40" y="160" font-size="15" font-weight="700" fill="#64748b" letter-spacing="1.5">FIRST-BUY PATH</text><rect x="40" y="178" width="220" height="78" rx="10" fill="#0F9E9C"/><text x="150" y="214" font-size="18" font-weight="700" fill="#ffffff" text-anchor="middle">Discovery quiz</text><text x="150" y="236" font-size="14" fill="#ffffff" text-anchor="middle">(custom in-house)</text><line x1="265" y1="217" x2="305" y2="217" stroke="#16161D" stroke-width="2"/><polygon points="305,217 300,213 300,221" fill="#16161D"/><rect x="310" y="178" width="220" height="78" rx="10" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/><text x="420" y="214" font-size="18" font-weight="700" fill="#0f172a" text-anchor="middle">Liam (AI)</text><text x="420" y="236" font-size="14" fill="#475569" text-anchor="middle">proposes ingredients</text><line x1="535" y1="217" x2="575" y2="217" stroke="#16161D" stroke-width="2"/><polygon points="575,217 570,213 570,221" fill="#16161D"/><rect x="580" y="178" width="220" height="78" rx="10" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/><text x="690" y="214" font-size="18" font-weight="700" fill="#0f172a" text-anchor="middle">Lia (dermatologist)</text><text x="690" y="236" font-size="14" fill="#475569" text-anchor="middle">reviews and signs off</text><line x1="805" y1="217" x2="845" y2="217" stroke="#16161D" stroke-width="2"/><polygon points="845,217 840,213 840,221" fill="#16161D"/><rect x="850" y="178" width="220" height="78" rx="10" fill="#FFD23F" stroke="#16161D" stroke-width="2"/><text x="960" y="214" font-size="18" font-weight="700" fill="#16161D" text-anchor="middle">Lab compounds</text><text x="960" y="236" font-size="14" fill="#16161D" text-anchor="middle">bespoke formula ships</text><text x="40" y="340" font-size="15" font-weight="700" fill="#64748b" letter-spacing="1.5">REPURCHASE PATH (RUNS ON REVENUEHUNT)</text><rect x="40" y="358" width="220" height="78" rx="10" fill="#1d4ed8"/><text x="150" y="394" font-size="18" font-weight="700" fill="#ffffff" text-anchor="middle">Repurchase quiz</text><text x="150" y="416" font-size="14" fill="#ffffff" text-anchor="middle">(RevenueHunt Legacy)</text><line x1="265" y1="397" x2="305" y2="397" stroke="#16161D" stroke-width="2"/><polygon points="305,397 300,393 300,401" fill="#16161D"/><rect x="310" y="358" width="220" height="78" rx="10" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/><text x="420" y="394" font-size="18" font-weight="700" fill="#0f172a" text-anchor="middle">Liam (AI)</text><text x="420" y="416" font-size="14" fill="#475569" text-anchor="middle">updates the formula</text><line x1="535" y1="397" x2="575" y2="397" stroke="#16161D" stroke-width="2"/><polygon points="575,397 570,393 570,401" fill="#16161D"/><rect x="580" y="358" width="220" height="78" rx="10" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/><text x="690" y="394" font-size="18" font-weight="700" fill="#0f172a" text-anchor="middle">Lia (dermatologist)</text><text x="690" y="416" font-size="14" fill="#475569" text-anchor="middle">reviews and signs off</text><line x1="805" y1="397" x2="845" y2="397" stroke="#16161D" stroke-width="2"/><polygon points="845,397 840,393 840,401" fill="#16161D"/><rect x="850" y="358" width="220" height="78" rx="10" fill="#FFD23F" stroke="#16161D" stroke-width="2"/><text x="960" y="394" font-size="18" font-weight="700" fill="#16161D" text-anchor="middle">Lab reformulates</text><text x="960" y="416" font-size="14" fill="#16161D" text-anchor="middle">updated formula ships</text><text x="40" y="500" font-size="16" font-weight="600" fill="#0f172a">Klaviyo receives every quiz answer as a custom property, so retention emails reference the actual stated context.</text></svg></div>

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 03</span> &nbsp;Skinology's two-quiz workflow. Both first-buy and repurchase routes feed the same Liam (AI) and Lia (dermatologist) hand-off; the repurchase quiz continues to run on RevenueHunt's Shopify Legacy app, which captures cadence-aware reorder context and syncs every answer to Klaviyo.</p>

![Skinology quiz data flow into Liam and the lab](/img/blog/skinology-case-study/quiz-data-flow.webp)

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 04</span> &nbsp;The quiz data feeds Liam (in-house AI), which proposes ingredients and concentrations; Lia (the dermatologist) signs each formulation off before the lab produces it.</p>

"The quiz collects important data points like name, last name, and a national ID, which we need for our custom formulations. But each piece of information has a purpose: it's all about crafting the best solution for that individual," explained Jessica, Skinology's head of marketing.

The quiz also drives marketing. Because each customer's answers, recommendations, and follow-ups live on a unified customer record, Skinology can segment by skin profile, lifestyle, or stage of journey, and run retargeting and email flows that match where the customer actually is. For the broader argument on why interrupt-style popups don't produce segmentable lists (and why quizzes do), see [why popups are walls and quizzes are doors](/why-popups-are-walls-and-quizzes-are-doors-rethinking-lead-capture-for-dtc/). For a disclosed-numbers worked example of cold Meta traffic landing on a qualifying quiz, one DTC beauty brand's quiz funnel produced 9.8% quiz-to-purchase CVR, +42.64% AOV lift, $691,128 in 90 days.

> "We're still learning and fine-tuning our approach, but as soon as we find our footing, we're ready to scale up."

## Challenges and the future

Skinology has faced the marketing challenges that come with any new, highly personalised model. "It's been difficult to explain our concept in the short attention spans you get online. When you're explaining something complex like tailor-made skincare, it's not easy to condense that into a few seconds for an ad," Antonia admitted.

The brand currently relies on word-of-mouth, social ads, beauty-event appearances, and SEO focused on sensitive skin and allergic reactions. Around 50% of customers are repeat buyers, which Antonia treats as the strongest signal that the model works once shoppers understand it. Geographic expansion across Latin America is the next step.

"We're still learning and fine-tuning our approach, but as soon as we find our footing, we're ready to scale up."

## What other natural-skincare brands can borrow

Three transferable patterns from how Skinology built this:

- **Mirror the in-clinic consultation.** The quiz questions are the questions a dermatologist actually asks. That makes the quiz feel like care, not a marketing funnel, and it makes the data downstream genuinely useful for formulation.
- **AI proposes, human approves.** Liam drafts every formulation; Lia signs each one off. The pattern handles scale without removing the expert from the loop, and gives customers the dermatological reassurance the category needs.
- **Re-quiz on every reorder.** Skin changes; subscriptions don't. A short follow-up before each reformulation captures lifecycle signals (menopause, pregnancy, climate change, lifestyle shifts) that a static subscription would miss entirely.

## FAQ

### How is Skinology's quiz different from a typical product-finder quiz?

It's designed as a dermatology consultation, not a product picker. The questions mirror what Lia would ask in clinic, and the answers feed an AI formulator (Liam) and a dermatologist sign-off rather than mapping directly to existing SKUs. The output is a bespoke formula made in the lab for that customer.

### How does the evolving-formula model work on repurchase?

Before each reorder, the customer takes a short follow-up quiz: how did the last formula perform, did anything change in your skin or lifestyle, are there new concerns. The new answers feed Liam and Lia, who adjust the formulation. Every shipment is therefore freshly formulated and current.

### What role does the AI model play, and where does the dermatologist sign off?

Liam ingests the quiz responses and proposes the ingredient mix and concentrations. Lia then reviews the proposal for safety and clinical fit before the lab produces it. The AI handles scale; the dermatologist owns the final call.

### What data does the quiz collect, and why?

The quiz captures contact details (name, last name, national ID for the compounded prescription), lifestyle and hormonal context (pregnancy, menopause, contraception), skin history, and reaction patterns. Each field has a downstream purpose in either the formulation or the customer-care flow.

### How does Skinology use quiz data outside the formula?

Quiz answers and recommendations attach to the customer record, which lets Skinology segment by skin profile and lifestyle for retargeting, email flows, and re-engagement campaigns timed to the natural reorder cadence.

## Next steps

- For the other long-form brand case study in the cluster (niche quizzes for high-AOV play equipment): [Extreme Kids World case study](/extreme-kids-world-case-study/).
- For the strategy pillars behind the quiz-vs-catalogue argument: [why popups are walls and quizzes are doors](/why-popups-are-walls-and-quizzes-are-doors-rethinking-lead-capture-for-dtc/) and [quiz funnels vs collection pages](/quiz-funnels-vs-collection-pages-why-your-paid-traffic-bounces/).
- For the data categories the quiz captures: [zero-party data](/zero-party-data/) and [first-party data](/first-party-data/).
- For why Pixel and GA4 miss revenue and how to reconcile against Shopify Orders: [first-party Shopify quiz analytics](/first-party-shopify-quiz-analytics/).
- For 11 funnel patterns in production: [ecommerce sales funnel examples](/ecommerce-sales-funnel-examples/).
- For the underlying recommendation logic options Skinology and brands like it pick from: [product quiz recommendation systems](/product-quiz-recommendation-systems/).
- For the category context (the 5 quiz formats Skinology's pair fits inside): [the umbrella guide](/ecommerce-quiz/).
- For the data layer behind segmented marketing: [customer tags in product quizzes](/how-to-use-customer-tags-in-product-quizzes-to-maximize-sales/) and [Klaviyo zero-party data](/klaviyo-zero-party-data/).
- For consent collection at quiz time: [marketing consent in your quiz](/product-quiz-marketing-consent/).
- For the strategy this fits into: [build a sales funnel on a Shopify store](/build-sales-funnel-shopify-store/).
- For the broader playbook: [how to build a successful ecommerce quiz](/how-to-build-a-successful-ecommerce-quiz/) and [product quiz mistakes ranked by industry data](/quiz-creation-mistakes-that-hurt-your-ecommerce-sales/).
- Estimate the lift on your own store with the [quiz ROI calculator](/quiz-roi-calculator/).

_To learn more, visit Skinology on [Facebook](https://www.facebook.com/people/Skinology/61556855081603/), [Instagram](http://instagram.com/skinology.cl), [TikTok](https://www.tiktok.com/@skinologychile), [YouTube](https://www.youtube.com/watch?v=IMEzFLHMJdI) or their [website](https://skinology.cl)._

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How is Skinology's quiz different from a typical product-finder quiz?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It's designed as a dermatology consultation, not a product picker. The questions mirror what the dermatologist would ask in clinic, and the answers feed an in-house AI formulator and a dermatologist sign-off rather than mapping directly to existing SKUs. The output is a bespoke formula made in the lab for that customer."
      }
    },
    {
      "@type": "Question",
      "name": "How does the evolving-formula model work on repurchase?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Before each reorder, the customer takes a short follow-up quiz: how did the last formula perform, did anything change in skin or lifestyle, are there new concerns. The new answers feed the AI model and the dermatologist, who adjust the formulation. Every shipment is freshly formulated and current."
      }
    },
    {
      "@type": "Question",
      "name": "What role does the AI model play, and where does the dermatologist sign off?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Liam, the in-house AI, ingests the quiz responses and proposes the ingredient mix and concentrations. Lia, the dermatologist, reviews the proposal for safety and clinical fit before the lab produces it. The AI handles scale; the dermatologist owns the final call."
      }
    },
    {
      "@type": "Question",
      "name": "What data does the Skinology quiz collect, and why?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The quiz captures contact details (name, last name, national ID for the compounded prescription), lifestyle and hormonal context (pregnancy, menopause, contraception), skin history, and reaction patterns. Each field has a downstream purpose in either the formulation or the customer-care flow."
      }
    },
    {
      "@type": "Question",
      "name": "How does Skinology use quiz data outside the formula itself?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Quiz answers and recommendations attach to the customer record, which lets Skinology segment by skin profile and lifestyle for retargeting, email flows, and re-engagement campaigns timed to the natural reorder cadence."
      }
    }
  ]
}
</script>
