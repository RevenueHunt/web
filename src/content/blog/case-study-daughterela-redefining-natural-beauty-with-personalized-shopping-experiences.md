---
title: "Daughterela teardown: how to build a beauty finder"
description: "A teardown of Daughterela's two Shopify product finders: a flat lipstick quiz and a branching foundation matcher, and how to choose which to build."
pubDate: 2024-09-26T05:59:40Z
updatedDate: 2026-06-17T10:00:00Z
tags:
  - "ecommerce"
  - "case study"
  - "product recommendation quiz"
  - "beauty"
  - "quiz logic"
  - "shade matching"
categories:
  - "Case Studies"
  - "eCommerce"
author: "Paulina Chodura"
legacySlug: "case-study-daughterela-redefining-natural-beauty-with-personalized-shopping-experiences"
legacyId: 10234
legacyUrl: "https://revenuehunt.com/case-study-daughterela-redefining-natural-beauty-with-personalized-shopping-experiences/"
featuredImage: "/img/blog/case-study-daughterela-redefining-natural-beauty-with-personalized-shopping-experiences/blogtile_daughtrella.png"
draft: false
---

[Daughterela](https://www.daughterela.com/), a natural, talc-free cosmetics brand on Shopify, runs two product finders that happen to be textbook opposites. The lipstick finder is **flat**: every shopper answers the same four questions in the same order. The foundation finder is **branching**: the first answer (skin tone) routes each shopper down a different path. This is a teardown of how both are built and a guide to choosing the right architecture for your own [cosmetics store](/solutions/beauty/).

This piece is about the build, not the numbers. For the conversion data behind product quizzes, see the [benchmark report](/state-of-product-recommendation-quizzes/) (45M+ responses across 20,000+ stores), and for a disclosed-results case study see [Extreme Kids World](/extreme-kids-world-case-study/). What Daughterela gives us is a clean, copyable look at the two quiz architectures every cosmetics merchant has to choose between.

<div class="not-prose my-12 rounded-3xl bg-gradient-to-br from-[#0f1419] to-[#16161D] p-8 sm:p-10 text-white shadow-2xl ring-1 ring-white/10">
  <p class="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-400 mb-8">The build at a glance</p>
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 sm:divide-x sm:divide-white/10">
    <div class="sm:pr-6">
      <p class="text-3xl sm:text-4xl font-bold text-emerald-400 tracking-tight leading-none">Flat</p>
      <p class="text-[11px] font-semibold uppercase tracking-widest text-slate-400 mt-3">Lipstick Color Finder</p>
      <p class="text-sm text-slate-300 mt-3 leading-relaxed">Four attribute questions, one path for everyone. Use it when any combination of answers is valid.</p>
    </div>
    <div class="sm:px-6">
      <p class="text-3xl sm:text-4xl font-bold text-emerald-400 tracking-tight leading-none">Branching</p>
      <p class="text-[11px] font-semibold uppercase tracking-widest text-slate-400 mt-3">Foundation Finder</p>
      <p class="text-sm text-slate-300 mt-3 leading-relaxed">Skin tone routes each shopper to a tailored shade-match screen. Use it when the next question depends on the last.</p>
    </div>
    <div class="sm:pl-6">
      <p class="text-3xl sm:text-4xl font-bold text-emerald-400 tracking-tight leading-none">1 match</p>
      <p class="text-[11px] font-semibold uppercase tracking-widest text-slate-400 mt-3">Both finders</p>
      <p class="text-sm text-slate-300 mt-3 leading-relaxed">Each ends on a single confident recommendation, an optional consent email, and a results-page discount.</p>
    </div>
  </div>
</div>

<div style="margin:32px 0;padding:24px 28px;background:#f8fafc;border-left:4px solid #16161D;border-radius:6px;">
  <p style="margin:0 0 14px;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;">What you'll learn</p>
  <ul style="list-style:none;padding:0;margin:0;">
    <li style="display:flex;gap:14px;padding:6px 0;font-size:15px;color:#0f172a;line-height:1.55;"><span style="flex-shrink:0;color:#16161D;font-weight:700;">→</span><span>The difference between a flat quiz and a branching quiz, torn down from two real finders.</span></li>
    <li style="display:flex;gap:14px;padding:6px 0;font-size:15px;color:#0f172a;line-height:1.55;"><span style="flex-shrink:0;color:#16161D;font-weight:700;">→</span><span>A decision rule for which architecture to build for a given cosmetics category.</span></li>
    <li style="display:flex;gap:14px;padding:6px 0;font-size:15px;color:#0f172a;line-height:1.55;"><span style="flex-shrink:0;color:#16161D;font-weight:700;">→</span><span>The three ways to map a quiz answer to products (variant, collection, tag) and when to use each.</span></li>
    <li style="display:flex;gap:14px;padding:6px 0;font-size:15px;color:#0f172a;line-height:1.55;"><span style="flex-shrink:0;color:#16161D;font-weight:700;">→</span><span>Where to place email capture and discounts so they help conversion instead of blocking it.</span></li>
    <li style="display:flex;gap:14px;padding:6px 0;font-size:15px;color:#0f172a;line-height:1.55;"><span style="flex-shrink:0;color:#16161D;font-weight:700;">→</span><span>A transferable checklist for setting up the same pattern on your own store.</span></li>
  </ul>
</div>

## 01 · The brand

Daughterela sells natural, talc-free, hypoallergenic makeup and skincare: lipsticks, foundations, powders, eyeshadows, mascaras, blushes, bronzers, and skincare products, all formulated to be beneficial for the skin rather than just cosmetic. The catalogue is the kind where shade and ingredient questions are genuinely hard to resolve on a product page, which is exactly the situation a product finder is built for.

The store runs on Shopify (the [Legacy](/revenuehunt-built-for-shopify/) version of RevenueHunt) and uses two published finders to do the consultative work an in-store associate would normally do: help a shopper land on the right lipstick shade, and match a skin tone to the right foundation.

## 02 · Two finder architectures in one store

The interesting thing about Daughterela's setup is that the two finders are built on opposite logic models. One is flat, one branches. Seeing them side by side is the clearest way to understand the single most important decision you make when building a product quiz.

<div class="not-prose my-10"><svg viewBox="0 0 1200 700" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="arch-title arch-desc" style="width:100%;height:auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#16161D;border-radius:16px;padding:32px 20px;box-sizing:border-box;"><title id="arch-title">Flat versus branching quiz architecture</title><desc id="arch-desc">The flat lipstick finder asks four questions in a fixed order; the branching foundation finder routes shoppers by skin tone before converging.</desc><defs><linearGradient id="rh-grad-arch" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#6464ff"/><stop offset="1" stop-color="#4bd5ff"/></linearGradient></defs><text x="600" y="54" text-anchor="middle" fill="#F5F7FA" font-size="32" font-weight="800" letter-spacing="-0.5">Two finder architectures, one store</text>
<g stroke="#5AB2FF" stroke-width="3" fill="none" opacity="0.7"><line x1="315" y1="200" x2="315" y2="232"/><line x1="315" y1="288" x2="315" y2="320"/><line x1="315" y1="376" x2="315" y2="408"/><line x1="315" y1="464" x2="315" y2="520"/></g>
<g fill="#5AB2FF" opacity="0.7"><polygon points="315,232 307,218 323,218"/><polygon points="315,320 307,306 323,306"/><polygon points="315,408 307,394 323,394"/><polygon points="315,520 307,506 323,506"/></g>
<text x="315" y="118" text-anchor="middle" fill="#34d399" font-size="15" font-weight="800" letter-spacing="2">FLAT · LIPSTICK FINDER</text>
<text x="315" y="146" text-anchor="middle" fill="#94a3b8" font-size="15">Same path for every shopper</text>
<g><rect x="135" y="160" width="360" height="44" rx="10" fill="#1F1F29" stroke="rgba(255,255,255,0.12)"/><text x="315" y="188" text-anchor="middle" fill="#F5F7FA" font-size="17" font-weight="600">1 · Skin tone</text></g>
<g><rect x="135" y="248" width="360" height="44" rx="10" fill="#1F1F29" stroke="rgba(255,255,255,0.12)"/><text x="315" y="276" text-anchor="middle" fill="#F5F7FA" font-size="17" font-weight="600">2 · Shade family</text></g>
<g><rect x="135" y="336" width="360" height="44" rx="10" fill="#1F1F29" stroke="rgba(255,255,255,0.12)"/><text x="315" y="364" text-anchor="middle" fill="#F5F7FA" font-size="17" font-weight="600">3 · Finish</text></g>
<g><rect x="135" y="424" width="360" height="44" rx="10" fill="#1F1F29" stroke="rgba(255,255,255,0.12)"/><text x="315" y="452" text-anchor="middle" fill="#F5F7FA" font-size="17" font-weight="600">4 · Pigmentation</text></g>
<g><rect x="135" y="520" width="360" height="48" rx="10" fill="url(#rh-grad-arch)"/><text x="315" y="550" text-anchor="middle" fill="#16161D" font-size="17" font-weight="800">One lipstick match</text></g>
<line x1="600" y1="100" x2="600" y2="600" stroke="rgba(255,255,255,0.10)" stroke-width="1"/>
<text x="885" y="118" text-anchor="middle" fill="#34d399" font-size="15" font-weight="800" letter-spacing="2">BRANCHING · FOUNDATION FINDER</text>
<text x="885" y="146" text-anchor="middle" fill="#94a3b8" font-size="15">Path depends on skin tone</text>
<g><rect x="755" y="160" width="260" height="44" rx="10" fill="#1F1F29" stroke="rgba(255,255,255,0.12)"/><text x="885" y="188" text-anchor="middle" fill="#F5F7FA" font-size="17" font-weight="600">Skin tone</text></g>
<g stroke="#5AB2FF" stroke-width="2.5" fill="none" opacity="0.6"><line x1="885" y1="204" x2="675" y2="256"/><line x1="885" y1="204" x2="780" y2="256"/><line x1="885" y1="204" x2="885" y2="256"/><line x1="885" y1="204" x2="990" y2="256"/><line x1="885" y1="204" x2="1095" y2="256"/></g>
<g font-size="13" font-weight="700" fill="#F5F7FA"><g><rect x="635" y="258" width="80" height="40" rx="8" fill="#26263340" stroke="#5AB2FF" stroke-width="1.5"/><text x="675" y="283" text-anchor="middle">Light</text></g><g><rect x="740" y="258" width="80" height="40" rx="8" fill="#26263340" stroke="#5AB2FF" stroke-width="1.5"/><text x="780" y="283" text-anchor="middle">L-Med</text></g><g><rect x="845" y="258" width="80" height="40" rx="8" fill="#26263340" stroke="#5AB2FF" stroke-width="1.5"/><text x="885" y="283" text-anchor="middle">Medium</text></g><g><rect x="950" y="258" width="80" height="40" rx="8" fill="#26263340" stroke="#5AB2FF" stroke-width="1.5"/><text x="990" y="283" text-anchor="middle">M-Deep</text></g><g><rect x="1055" y="258" width="80" height="40" rx="8" fill="#26263340" stroke="#5AB2FF" stroke-width="1.5"/><text x="1095" y="283" text-anchor="middle">Deep</text></g></g>
<g stroke="#5AB2FF" stroke-width="2.5" fill="none" opacity="0.6"><line x1="675" y1="298" x2="885" y2="352"/><line x1="780" y1="298" x2="885" y2="352"/><line x1="885" y1="298" x2="885" y2="352"/><line x1="990" y1="298" x2="885" y2="352"/><line x1="1095" y1="298" x2="885" y2="352"/></g>
<g><rect x="705" y="356" width="360" height="44" rx="10" fill="#1F1F29" stroke="rgba(255,255,255,0.12)"/><text x="885" y="384" text-anchor="middle" fill="#F5F7FA" font-size="16" font-weight="600">Tone-matched shade screen</text></g>
<g stroke="#5AB2FF" stroke-width="3" fill="none" opacity="0.7"><line x1="885" y1="400" x2="885" y2="432"/><line x1="885" y1="476" x2="885" y2="520"/></g>
<g fill="#5AB2FF" opacity="0.7"><polygon points="885,432 877,418 893,418"/><polygon points="885,520 877,506 893,506"/></g>
<g><rect x="705" y="436" width="360" height="44" rx="10" fill="#1F1F29" stroke="rgba(255,255,255,0.12)"/><text x="885" y="464" text-anchor="middle" fill="#F5F7FA" font-size="16" font-weight="600">Coverage + finish</text></g>
<g><rect x="705" y="520" width="360" height="48" rx="10" fill="url(#rh-grad-arch)"/><text x="885" y="550" text-anchor="middle" fill="#16161D" font-size="17" font-weight="800">One foundation match</text></g>
<text x="600" y="640" text-anchor="middle" fill="#94a3b8" font-size="16" font-style="italic">Same builder, same store. The only difference is whether one answer changes the questions that follow.</text></svg></div>

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 01</span> &nbsp;The lipstick finder runs four fixed questions for everyone. The foundation finder uses skin tone as a router: each tone jumps to its own shade-match screen, then the paths converge on coverage and finish. Choosing between these two shapes is the first decision in any quiz build.</p>

<img src="/img/blog/case-study-daughterela-redefining-natural-beauty-with-personalized-shopping-experiences/Screenshot-2024-09-19-115627.webp" alt="Daughterela's product finder on their Shopify storefront" width="521" height="269" loading="lazy" decoding="async" style="width:100%;height:auto;border-radius:8px;" />

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 02</span> &nbsp;The finder as it appears on Daughterela's storefront. Both quizzes inherit the brand's colours through a custom theme, so they read as native rather than bolted on.</p>

Neither finder was built from scratch. Both started from RevenueHunt's ready-made quiz templates (the quizzes are still named as copies), which is how a small team shipped two finders without a developer. The templates are free to install and fully editable: you swap the questions, answers, images, and product mappings to fit your own catalogue. You can take a live foundation matcher for a spin on the [demo store](https://productrecommendationquiz.com/pages/foundation-match) and browse the full set on the [quiz templates page](/templates/).

## 03 · Architecture 1, the flat lipstick finder

The Lipstick Color Finder asks four questions, in the same order, of every shopper:

1. **Skin tone** (picture choice: fair, light, medium, dark, deep, deeper)
2. **Shade family** (pink, peach, nude, red, plum)
3. **Finish** (picture choice: glossy, matte, semi-matte, creamy)
4. **Pigmentation** (sheer or full)

There is no logic in this quiz. No answer changes what comes next, because for lipstick it does not need to. Shade and finish are independent attributes: any combination is valid (a sheer pink gloss and a full matte red are both real, sensible results). When every combination of answers maps to a real product, a flat quiz is the right and simpler choice. It is faster to build, easier to maintain, and shorter for the shopper.

Two question-type decisions are worth copying. Skin tone, finish, and pigmentation use **picture choice** so shoppers pick from swatches rather than reading words, which is how people actually shop for colour. Shade family uses a plain **multiple choice** because the names (pink, nude, red) are unambiguous. For the full menu of question types and when each fits, see [product quiz question types](/product-quiz-question-types/).

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:20px;margin:28px 0;">
  <div style="border:1px solid #e2e8f0;border-radius:10px;padding:20px;text-align:center;background:#ffffff;">
    <img src="/img/blog/case-study-daughterela-redefining-natural-beauty-with-personalized-shopping-experiences/lipstick-AE5551_e8a7d536-bcee-41be-837f-af8ee378a2d0.webp" alt="Daughterela satin lipstick, a possible finder result" style="max-width:150px;width:100%;height:auto;margin:0 auto 12px;display:block;border-radius:6px;" loading="lazy" />
    <h3 style="margin:0 0 8px;font-size:15px;font-weight:700;color:#0f172a;">Satin lipstick</h3>
    <p style="margin:0;font-size:13px;color:#475569;line-height:1.5;">A "creamy finish" answer maps here via the satin-lipstick collection.</p>
  </div>
  <div style="border:1px solid #e2e8f0;border-radius:10px;padding:20px;text-align:center;background:#ffffff;">
    <img src="/img/blog/case-study-daughterela-redefining-natural-beauty-with-personalized-shopping-experiences/compact-translucent-powder-FFFFFF_78af93aa-fb36-47cc-b2f9-d98aa0a8208c.webp" alt="Daughterela translucent compact powder" style="max-width:150px;width:100%;height:auto;margin:0 auto 12px;display:block;border-radius:6px;" loading="lazy" />
    <h3 style="margin:0 0 8px;font-size:15px;font-weight:700;color:#0f172a;">Translucent powder</h3>
    <p style="margin:0;font-size:13px;color:#475569;line-height:1.5;">Catalogue breadth is why a finder beats a grid here.</p>
  </div>
  <div style="border:1px solid #e2e8f0;border-radius:10px;padding:20px;text-align:center;background:#ffffff;">
    <img src="/img/blog/case-study-daughterela-redefining-natural-beauty-with-personalized-shopping-experiences/serum-vitamin-e-F99808_3398af09-10d9-40f9-8a8c-4cd342eb57d9.webp" alt="Daughterela vitamin E skincare applicator" style="max-width:150px;width:100%;height:auto;margin:0 auto 12px;display:block;border-radius:6px;" loading="lazy" />
    <h3 style="margin:0 0 8px;font-size:15px;font-weight:700;color:#0f172a;">Vitamin E applicator</h3>
    <p style="margin:0;font-size:13px;color:#475569;line-height:1.5;">A skincare finder (unpublished here) would route to products like this.</p>
  </div>
</div>

## 04 · Architecture 2, the branching foundation matcher

The Foundation Finder solves a different problem. Foundation is not a free combination of attributes: the shopper's skin tone determines which shades are even worth showing. So the quiz uses **conditional jump logic**. The first question, skin tone, routes the shopper to a tone-specific "get your match" screen (a Light shopper never sees Deep shades, and vice versa). After the tone-specific screen, every path converges on two shared questions, coverage and finish, before delivering a single foundation match.

That is the signature of a branching quiz: an early answer changes the questions that follow, then the paths rejoin. It is more screens to build and maintain, but for shade matching it is the difference between a relevant recommendation and a near-miss. For the deeper mechanics of scoring and routing logic, see [the six recommendation systems compared](/product-quiz-recommendation-systems/) and [scoring and personality-type quiz setup](/scoring-quiz-setup/).

<img src="/img/blog/case-study-daughterela-redefining-natural-beauty-with-personalized-shopping-experiences/Screenshot-2024-09-19-121057.webp" alt="Daughterela's personalised recommendation on the results page" width="792" height="783" loading="lazy" decoding="async" style="width:100%;height:auto;border-radius:8px;" />

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 03</span> &nbsp;Both finders end on a single confident match rather than a wall of options. The single-results-page pattern is consistently the higher-converting structure in the <a href="/state-of-product-recommendation-quizzes/" class="underline decoration-slate-300 hover:decoration-slate-500">platform benchmark</a>.</p>

## 05 · Flat vs branching: how to choose

The teardown reduces to one decision rule. Does an early answer change which questions or products make sense next?

| Build a flat quiz when | Build a branching quiz when |
|---|---|
| Attributes are independent and any combination is valid | The right next question depends on a previous answer |
| Every answer combination maps to a real product | Some answers make other options irrelevant or wrong |
| You want the fastest build and the shortest flow | A correct match requires a routing decision first |
| **Example:** lipstick (shade family × finish × pigmentation) | **Example:** foundation (skin tone decides the shade set) |

Most cosmetics catalogues need both, eventually. The pragmatic path is to start with one flat finder for your most attribute-driven category, prove it converts, then add a branching finder where matching genuinely requires routing. For the foundational rules that apply to either, see [how to build a successful product recommendation quiz](/how-to-build-a-successful-ecommerce-quiz/).

## 06 · Three ways to map answers to products

Architecture decides the flow. Mapping decides what the shopper actually gets recommended. Daughterela's two finders use all three methods RevenueHunt supports, which is a useful catalogue of the options.

<div class="not-prose my-10"><svg viewBox="0 0 1200 520" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="map-title map-desc" style="width:100%;height:auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#16161D;border-radius:16px;padding:32px 20px;box-sizing:border-box;"><title id="map-title">Three ways to map a quiz answer to products</title><desc id="map-desc">A quiz answer can map to an exact product variant, to a collection, or to a tag used for segmentation.</desc><defs><linearGradient id="rh-grad-map" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#6464ff"/><stop offset="1" stop-color="#4bd5ff"/></linearGradient></defs><text x="600" y="52" text-anchor="middle" fill="#F5F7FA" font-size="30" font-weight="800" letter-spacing="-0.5">Three ways to map an answer to products</text>
<g><rect x="60" y="210" width="220" height="90" rx="14" fill="url(#rh-grad-map)"/><text x="170" y="250" text-anchor="middle" fill="#16161D" font-size="18" font-weight="800">Quiz answer</text><text x="170" y="276" text-anchor="middle" fill="#16161D" font-size="13" font-weight="600">e.g. "Matte" finish</text></g>
<g stroke="#5AB2FF" stroke-width="3" fill="none" opacity="0.7"><line x1="280" y1="255" x2="420" y2="135"/><line x1="280" y1="255" x2="420" y2="255"/><line x1="280" y1="255" x2="420" y2="375"/></g>
<g fill="#5AB2FF" opacity="0.7"><polygon points="420,135 404,131 408,147"/><polygon points="420,255 406,249 406,265"/><polygon points="420,375 408,363 404,379"/></g>
<g><rect x="430" y="96" width="710" height="78" rx="12" fill="#1F1F29" stroke="rgba(255,255,255,0.12)"/><text x="452" y="128" fill="#34d399" font-size="14" font-weight="800" letter-spacing="1.5">VARIANT ID</text><text x="452" y="154" fill="#F5F7FA" font-size="16">Pins one exact product or variant. Use for a precise SKU per answer.</text></g>
<g><rect x="430" y="216" width="710" height="78" rx="12" fill="#1F1F29" stroke="rgba(255,255,255,0.12)"/><text x="452" y="248" fill="#34d399" font-size="14" font-weight="800" letter-spacing="1.5">COLLECTION</text><text x="452" y="274" fill="#F5F7FA" font-size="16">Recommends from a whole collection. Use when many SKUs share an attribute.</text></g>
<g><rect x="430" y="336" width="710" height="78" rx="12" fill="#1F1F29" stroke="rgba(255,255,255,0.12)"/><text x="452" y="368" fill="#34d399" font-size="14" font-weight="800" letter-spacing="1.5">TAG</text><text x="452" y="394" fill="#F5F7FA" font-size="16">Labels the response and customer for segmentation and email, not just display.</text></g>
<text x="600" y="470" text-anchor="middle" fill="#94a3b8" font-size="15" font-style="italic">Daughterela uses all three: variant IDs for lipstick shades, collections for finishes and foundation tones, tags for skin tone.</text></svg></div>

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 04</span> &nbsp;The three mapping methods, all present in Daughterela's build.</p>

| Method | What it does | Use when | Daughterela example |
|---|---|---|---|
| **Variant ID** | Pins an exact product or variant to an answer | One specific SKU is the right answer | Lipstick shade answers map to specific product variants |
| **Collection** | Recommends from a Shopify collection | Many SKUs share the attribute | "Matte" finish maps to the matte-lipstick collection; foundation tone maps to a "Formula" collection |
| **Tag** | Labels the response and customer record | You want segmentation, not just a recommendation | Skin tone answers carry tags like `light` and `medium_deep` for Klaviyo |

Tags are the underrated one. A tag does nothing for the on-page recommendation, but it turns every completion into a segment you can email. For the full walkthrough, see [how to use customer tags in product quizzes](/how-to-use-customer-tags-in-product-quizzes-to-maximize-sales/), and for the activation payoff, [your Klaviyo list is a graveyard](/klaviyo-zero-party-data/).

## 07 · Capture and activation

Both finders handle the email ask the right way: it comes at the **end**, as an optional step, with explicit consent language ("by leaving your email you agree to receive marketing communication"), after the shopper has done the work and wants the result. That is the opposite of an entry popup, and it produces a contact captured at a moment of stated intent. For why this outperforms popups, see [why popups are walls and quizzes are doors](/why-popups-are-walls-and-quizzes-are-doors-rethinking-lead-capture-for-dtc/), and for consent design, [smart ways to ask for marketing consent in a product quiz](/product-quiz-marketing-consent/).

The results page pairs the recommendation with a discount code (the lipstick finder offers a 10% code), and the brand sends a follow-up email containing the recommended products, the code, and a permalink back to the result. Those tagged answers are what make the follow-up worth sending: segmented sends consistently outperform one-size-fits-all batches ([Klaviyo segmentation benchmark](https://www.klaviyo.com/marketing-resources/segmentation-benchmark-report)). The store also has Recharge connected, so subscription products can be offered as subscribe-and-save on the results page.

<img src="/img/blog/case-study-daughterela-redefining-natural-beauty-with-personalized-shopping-experiences/Screenshot-2024-09-19-121903-e1726741332211.webp" alt="Daughterela's post-quiz email and marketing module" width="1016" height="320" loading="lazy" decoding="async" style="width:100%;height:auto;border-radius:8px;" />

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 05</span> &nbsp;The post-quiz email returns the recommendation plus a discount code, turning the finder into an email-capture and re-engagement channel, not just an on-page tool.</p>

## 08 · What the platform data says about these choices

This teardown deliberately avoids Daughterela's own numbers, but the architectural choices it describes are not arbitrary. Each one tracks a measurable pattern in the [RevenueHunt platform benchmark](/state-of-product-recommendation-quizzes/).

| Build choice in this teardown | What the benchmark shows |
|---|---|
| One confident match, not a grid | Quizzes with a single results page convert at **10.6%** vs **7.1%** for multiple results pages |
| 6 to 12 focused questions | Quizzes in the **6 to 12** question range convert at roughly **10.4 to 11.0%** |
| Every answer mapped to a product or collection | Top converters map every answer; an unmapped answer is a missed signal |
| Email capture synced to Klaviyo | Klaviyo-connected quizzes convert at **12.0%** vs **9.7%**, and drive around **66% more orders** |

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Source</span> &nbsp;RevenueHunt platform benchmark. These are platform-wide averages, not Daughterela's figures. See <a href="/state-of-product-recommendation-quizzes/" class="underline decoration-slate-300 hover:decoration-slate-500">the state of product recommendation quizzes</a> for the full dataset.</p>

One honest optimisation falls out of this. Daughterela places the email step at the end of each finder with explicit consent, which already beats an entry popup. But the step is **optional**, and across the platform 75% of the top-converting quizzes use a **required** email tied to a CRM. Making email required and confirming the Klaviyo sync is the single highest-leverage change available to a finder built like this one.

## What this means for your cosmetics store

Stripped to a checklist any beauty merchant can apply:

- **Pick the architecture from the decision rule.** Independent attributes (lipstick, blush, gloss) want a flat quiz; tone or skin matching (foundation, concealer, BB) wants branching.
- **Use picture choice for anything visual.** Skin tone and finish are decided by eye, so show swatches, not words.
- **Map deliberately.** Variant IDs for exact SKUs, collections for shared attributes, tags for everything you want to segment on later.
- **End on one confident match**, not a grid. The single-results-page pattern converts better and removes decision fatigue.
- **Ask for email last, with consent**, and pair the result with a code. Capture intent, do not block entry.
- **Start from a template, not a blank canvas.** Daughterela's finders began as editable RevenueHunt templates; install one, swap the questions and product mappings, and you have a working finder the same day. Try the [demo store](https://productrecommendationquiz.com/) or browse the [templates](/templates/).
- **Start with one finder**, prove it, then add the next. Daughterela began with attribute-driven colour finders before the harder matching flows.

## Frequently asked questions

### Should I build one quiz or several finders for a cosmetics store?

Several focused finders usually beat one catch-all quiz in beauty, because each category has its own decision. Daughterela runs separate finders for lipstick and foundation rather than a single makeup quiz, so each one asks only the questions that category needs. Start with one finder for your most attribute-driven category, prove it converts, then add others.

### When should a product quiz use branching logic instead of a flat flow?

Use branching when an early answer changes which questions or products make sense next. Foundation is the classic case: skin tone determines the shade set, so the quiz routes each tone to its own match screen. Use a flat flow when attributes are independent and any combination is valid, like lipstick shade and finish, because branching there only adds complexity with no benefit.

### How do I connect quiz answers to the right products?

Three ways. Map an answer to a specific variant ID when one exact SKU is correct, to a Shopify collection when many products share the attribute (a "matte" finish maps to the matte-lipstick collection), or to a tag when you want to segment the customer for email rather than only display a product. Daughterela uses all three in its two finders.

### Where should I capture email in a product finder?

At the end, as an optional step with explicit consent language, after the shopper has invested effort and wants the result. An entry popup interrupts before any value is delivered; an end-of-quiz ask captures a contact at a moment of stated intent and pairs naturally with a results-page discount code.

### Does this work on Shopify Legacy or only the newer version?

Both. Daughterela runs on the Legacy version of RevenueHunt, and everything in this teardown (flat and branching logic, variant/collection/tag mapping, consent email, discounts, Recharge) is available there. The newer [Built for Shopify](/revenuehunt-built-for-shopify/) version adds native revenue tracking and a no-iframe block; see [first-party Shopify quiz analytics](/first-party-shopify-quiz-analytics/) for the difference.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Should I build one quiz or several finders for a cosmetics store?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Several focused finders usually beat one catch-all quiz in beauty, because each category has its own decision. Daughterela runs separate finders for lipstick and foundation rather than a single makeup quiz, so each one asks only the questions that category needs. Start with one finder for your most attribute-driven category, prove it converts, then add others."
      }
    },
    {
      "@type": "Question",
      "name": "When should a product quiz use branching logic instead of a flat flow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use branching when an early answer changes which questions or products make sense next. Foundation is the classic case: skin tone determines the shade set, so the quiz routes each tone to its own match screen. Use a flat flow when attributes are independent and any combination is valid, like lipstick shade and finish, because branching there only adds complexity with no benefit."
      }
    },
    {
      "@type": "Question",
      "name": "How do I connect quiz answers to the right products?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Three ways. Map an answer to a specific variant ID when one exact SKU is correct, to a Shopify collection when many products share the attribute (a matte finish maps to the matte-lipstick collection), or to a tag when you want to segment the customer for email rather than only display a product. Daughterela uses all three in its two finders."
      }
    },
    {
      "@type": "Question",
      "name": "Where should I capture email in a product finder?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "At the end, as an optional step with explicit consent language, after the shopper has invested effort and wants the result. An entry popup interrupts before any value is delivered; an end-of-quiz ask captures a contact at a moment of stated intent and pairs naturally with a results-page discount code."
      }
    },
    {
      "@type": "Question",
      "name": "Does this work on Shopify Legacy or only the newer version?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Both. Daughterela runs on the Legacy version of RevenueHunt, and everything in this teardown (flat and branching logic, variant/collection/tag mapping, consent email, discounts, Recharge) is available there. The newer Built for Shopify version adds native revenue tracking and a no-iframe block."
      }
    }
  ]
}
</script>

## Where this fits

This teardown is the worked example behind the broader guides. For the rules that make any quiz convert, see [how to build a successful product recommendation quiz](/how-to-build-a-successful-ecommerce-quiz/). For the logic models in depth, [the six recommendation systems compared](/product-quiz-recommendation-systems/). For the proof that the pattern pays off, [Extreme Kids World](/extreme-kids-world-case-study/), and the [benchmark report](/state-of-product-recommendation-quizzes/). For the category overview, the [beauty solutions page](/solutions/beauty/).

[Install RevenueHunt: Recommender Quiz for Shopify](https://apps.shopify.com/product-recommendation-quiz-revenuehunt/install?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=case_study_daughterela) and build your first finder this week. Free plan available.

* * *

_To explore Daughterela's products and brand, visit their [website](https://www.daughterela.com/)._
