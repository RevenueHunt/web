---
title: "Product quiz recommendation systems: which logic to choose"
description: "Six recommendation systems for product quizzes compared: fixed lists, voting funnel, slot routines, personality scoring, and matrix logic with exceptions."
pubDate: 2024-10-14T10:00:34Z
updatedDate: 2026-06-02T10:00:00Z
tags: ["recommendation logic", "quiz design", "product quiz", "scoring", "voting system"]
categories:
  - "eCommerce"
  - "Shopify Apps"
  - "Tips & Tricks"
author: "Paulina Chodura"
legacySlug: "product-quiz-recommendation-systems"
legacyId: 10201
legacyUrl: "https://revenuehunt.com/how-to-recommend-products-on-shopify-with-shop-quiz-a-step-by-step-guide-for-merchants/"
featuredImage: "/img/blog/product-quiz-recommendation-systems/blogtile_recommendation-systems.webp"
draft: false
---

The single biggest decision when you build a product recommendation quiz is which recommendation **logic** to use. It controls how customer answers translate into the products on the results page, and it dictates how the quiz scales when you add more questions, more products, or more exceptions later.

RevenueHunt's [product recommendation engine](/glossary/product-recommendation-engine/) supports **six distinct recommendation systems**: fixed lists, voting, slot routines, two scoring systems, and display logic. They're not interchangeable. Some are right for a 12-SKU candle store; others are designed for dosha quizzes or matrix-driven [skincare routines](/solutions/skincare/).

This guide walks the decision tree, explains each system, and gives you the platform-by-platform setup path.

<div style="margin:32px 0;padding:24px 28px;background:#f8fafc;border-left:4px solid #16161D;border-radius:6px;">
  <p style="margin:0 0 14px;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;">What you'll learn</p>
  <ul style="list-style:none;padding:0;margin:0;">
    <li style="display:flex;gap:14px;padding:6px 0;font-size:15px;color:#0f172a;line-height:1.55;"><span style="flex-shrink:0;color:#16161D;font-weight:700;">→</span><span>The six recommendation systems and the kind of quiz each one is designed for.</span></li>
    <li style="display:flex;gap:14px;padding:6px 0;font-size:15px;color:#0f172a;line-height:1.55;"><span style="flex-shrink:0;color:#16161D;font-weight:700;">→</span><span>The decision tree: a flowchart that points you to the right system in under a minute.</span></li>
    <li style="display:flex;gap:14px;padding:6px 0;font-size:15px;color:#0f172a;line-height:1.55;"><span style="flex-shrink:0;color:#16161D;font-weight:700;">→</span><span>How votes, scores, variables, and display logic actually compute the result.</span></li>
    <li style="display:flex;gap:14px;padding:6px 0;font-size:15px;color:#0f172a;line-height:1.55;"><span style="flex-shrink:0;color:#16161D;font-weight:700;">→</span><span>Platform differences: what Built for Shopify, Shopify Legacy, WooCommerce, Magento, BigCommerce, and Standalone each support.</span></li>
    <li style="display:flex;gap:14px;padding:6px 0;font-size:15px;color:#0f172a;line-height:1.55;"><span style="flex-shrink:0;color:#16161D;font-weight:700;">→</span><span>The setup walkthrough (link products, edit the results page, test) and the advanced patterns: slots, matrix, ReCharge, always-on products, explanations.</span></li>
  </ul>
</div>

## The decision tree

Start at the top. Three questions narrow you down to one of six systems.

<div class="not-prose my-10"><svg viewBox="0 0 1260 1130" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="rec-tree-title" style="width:100%;height:auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#eef2ff;border-radius:16px;padding:24px 12px;box-sizing:border-box;"><title id="rec-tree-title">Decision tree: which RevenueHunt recommendation system fits your quiz</title><g fill="none" stroke="#16161D" stroke-width="2"><polyline points="550,115 550,160 200,160 200,240" /><polyline points="550,115 550,160 770,160 770,235" /><polyline points="770,325 770,380 400,380 400,450" /><polyline points="770,325 770,380 950,380 950,450" /><polyline points="400,570 400,625 220,625 220,705" /><polyline points="400,570 400,625 560,625 560,740" /><polyline points="950,570 950,625 840,625 840,735" /><polyline points="950,570 950,625 1130,625 1130,725" /><polyline points="220,815 220,870 95,870 95,980" /><polyline points="220,815 220,870 335,870 335,980" /><polyline points="840,825 840,870 700,870 700,965" /><polyline points="840,825 840,870 980,870 980,980" /></g><rect x="310" y="25" width="480" height="90" rx="10" fill="#16161D"/><text x="550" y="62" text-anchor="middle" fill="#fff" font-size="15" font-weight="500"><tspan x="550" dy="0">Do you want the recommended products</tspan><tspan x="550" dy="22">to adapt dynamically to customer choices?</tspan></text><rect x="170" y="180" width="60" height="30" rx="15" fill="#fff" stroke="#16161D" stroke-width="1.5"/><text x="200" y="200" text-anchor="middle" fill="#16161D" font-size="13" font-weight="600">No</text><rect x="740" y="180" width="60" height="30" rx="15" fill="#FFD23F" stroke="#16161D" stroke-width="1.5"/><text x="770" y="200" text-anchor="middle" fill="#16161D" font-size="13" font-weight="600">Yes</text><rect x="95" y="240" width="210" height="70" rx="10" fill="#0F9E9C"/><text x="200" y="272" text-anchor="middle" fill="#fff" font-size="14" font-weight="600"><tspan x="200" dy="0">Fixed</tspan><tspan x="200" dy="20">Recommendations</tspan></text><rect x="540" y="235" width="460" height="90" rx="10" fill="#16161D"/><text x="770" y="272" text-anchor="middle" fill="#fff" font-size="15" font-weight="500"><tspan x="770" dy="0">Do you want to show custom text</tspan><tspan x="770" dy="22">based on the recommended product?</tspan></text><rect x="370" y="400" width="60" height="30" rx="15" fill="#fff" stroke="#16161D" stroke-width="1.5"/><text x="400" y="420" text-anchor="middle" fill="#16161D" font-size="13" font-weight="600">No</text><rect x="920" y="400" width="60" height="30" rx="15" fill="#FFD23F" stroke="#16161D" stroke-width="1.5"/><text x="950" y="420" text-anchor="middle" fill="#16161D" font-size="13" font-weight="600">Yes</text><rect x="190" y="450" width="420" height="120" rx="10" fill="#16161D"/><text x="400" y="482" text-anchor="middle" fill="#fff" font-size="15" font-weight="500"><tspan x="400" dy="0">Do you need complex recommendation</tspan><tspan x="400" dy="22">logic? Are results highly specific or</tspan><tspan x="400" dy="22">rule-based with exceptions?</tspan></text><rect x="190" y="645" width="60" height="30" rx="15" fill="#fff" stroke="#16161D" stroke-width="1.5"/><text x="220" y="665" text-anchor="middle" fill="#16161D" font-size="13" font-weight="600">No</text><rect x="530" y="645" width="60" height="30" rx="15" fill="#FFD23F" stroke="#16161D" stroke-width="1.5"/><text x="560" y="665" text-anchor="middle" fill="#16161D" font-size="13" font-weight="600">Yes</text><rect x="740" y="450" width="420" height="120" rx="10" fill="#16161D"/><text x="950" y="482" text-anchor="middle" fill="#fff" font-size="15" font-weight="500"><tspan x="950" dy="0">Are you building a personality-type or</tspan><tspan x="950" dy="22">dosha quiz? Should results depend on</tspan><tspan x="950" dy="22">how many A, B or C choices are made?</tspan></text><rect x="810" y="645" width="60" height="30" rx="15" fill="#fff" stroke="#16161D" stroke-width="1.5"/><text x="840" y="665" text-anchor="middle" fill="#16161D" font-size="13" font-weight="600">No</text><rect x="1100" y="645" width="60" height="30" rx="15" fill="#FFD23F" stroke="#16161D" stroke-width="1.5"/><text x="1130" y="665" text-anchor="middle" fill="#16161D" font-size="13" font-weight="600">Yes</text><rect x="30" y="705" width="380" height="110" rx="10" fill="#16161D"/><text x="220" y="740" text-anchor="middle" fill="#fff" font-size="15" font-weight="500"><tspan x="220" dy="0">Do you need to arrange results</tspan><tspan x="220" dy="22">into a step-by-step routine or</tspan><tspan x="220" dy="22">different categories?</tspan></text><rect x="455" y="740" width="210" height="80" rx="10" fill="#0F9E9C"/><text x="560" y="773" text-anchor="middle" fill="#fff" font-size="14" font-weight="600"><tspan x="560" dy="0">Fixed Recommendations</tspan><tspan x="560" dy="20">with Display Logic</tspan></text><rect x="1030" y="725" width="200" height="105" rx="10" fill="#F87171"/><text x="1130" y="753" text-anchor="middle" fill="#fff" font-size="14" font-weight="600"><tspan x="1130" dy="0">Custom Scoring</tspan><tspan x="1130" dy="20">System</tspan><tspan x="1130" dy="20">(Most Voted Variable)</tspan></text><rect x="680" y="735" width="320" height="90" rx="10" fill="#16161D"/><text x="840" y="770" text-anchor="middle" fill="#fff" font-size="15" font-weight="500"><tspan x="840" dy="0">Do your recommendation rules</tspan><tspan x="840" dy="22">have a lot of exceptions?</tspan></text><rect x="65" y="885" width="60" height="30" rx="15" fill="#fff" stroke="#16161D" stroke-width="1.5"/><text x="95" y="905" text-anchor="middle" fill="#16161D" font-size="13" font-weight="600">No</text><rect x="305" y="885" width="60" height="30" rx="15" fill="#FFD23F" stroke="#16161D" stroke-width="1.5"/><text x="335" y="905" text-anchor="middle" fill="#16161D" font-size="13" font-weight="600">Yes</text><rect x="670" y="885" width="60" height="30" rx="15" fill="#fff" stroke="#16161D" stroke-width="1.5"/><text x="700" y="905" text-anchor="middle" fill="#16161D" font-size="13" font-weight="600">No</text><rect x="950" y="885" width="60" height="30" rx="15" fill="#FFD23F" stroke="#16161D" stroke-width="1.5"/><text x="980" y="905" text-anchor="middle" fill="#16161D" font-size="13" font-weight="600">Yes</text><rect x="0" y="980" width="190" height="80" rx="10" fill="#8B5CF6"/><text x="95" y="1012" text-anchor="middle" fill="#fff" font-size="14" font-weight="600"><tspan x="95" dy="0">Voting System</tspan><tspan x="95" dy="20">(Funnel Quiz)</tspan></text><rect x="230" y="980" width="210" height="80" rx="10" fill="#8B5CF6"/><text x="335" y="1012" text-anchor="middle" fill="#fff" font-size="14" font-weight="600"><tspan x="335" dy="0">Voting System</tspan><tspan x="335" dy="20">(Funnel Quiz with Slots)</tspan></text><rect x="595" y="965" width="210" height="100" rx="10" fill="#F87171"/><text x="700" y="993" text-anchor="middle" fill="#fff" font-size="14" font-weight="600"><tspan x="700" dy="0">Custom Scoring</tspan><tspan x="700" dy="20">System</tspan><tspan x="700" dy="20">(Score + Variable)</tspan></text><rect x="875" y="980" width="210" height="80" rx="10" fill="#0F9E9C"/><text x="980" y="1012" text-anchor="middle" fill="#fff" font-size="14" font-weight="600"><tspan x="980" dy="0">Fixed Recommendations</tspan><tspan x="980" dy="20">with Display Logic</tspan></text></svg></div>

## The six systems

Each system is suited to a different shape of problem. Read them in order; the complexity grows as you go down.

### 1. Fixed Recommendations

<div class="not-prose my-6"><img src="/img/blog/product-quiz-recommendation-systems/diagram-fixed.png" alt="Fixed recommendations diagram" style="max-width:420px;width:100%;height:auto;display:block;" loading="lazy" /></div>

**Best for:** simple stores with a small catalogue, lead-magnet quizzes, or content-first quizzes where the recommendation is more or less the same for everyone.

**How it works:** you set a static product list on the results page. Every shopper sees those products in that order, regardless of what they answered.

**Computes:** nothing. The list is hard-coded.

**Complexity:** very low. **Maintenance:** low, but the recommendation is the same for everyone.

**Example:** a tea brand with one bestseller bundle they want every quiz finisher to see, with a one-question quiz used purely as a lead-capture form.

### 2. Voting System (Funnel Quiz)

<div class="not-prose my-6"><img src="/img/blog/product-quiz-recommendation-systems/diagram-funnel.png" alt="Voting funnel quiz diagram" style="max-width:420px;width:100%;height:auto;display:block;" loading="lazy" /></div>

**Best for:** the majority of product quizzes. Skincare, supplements, pet food, wine, fragrance, anything where the catalogue is 20-500 SKUs and the recommendation should adapt to answers.

**How it works:** you link products (or collections, or tags) to each **choice** in the quiz. When the shopper selects a choice, every linked product receives **one vote**. The results page shows the most-voted products, sorted by vote count. Ties resolve randomly (or by the collection's product order, depending on the platform).

**Computes:** vote tally per product. Optional minimum-vote threshold filters out low-relevance products. Exclusions hard-veto a product regardless of votes.

**Complexity:** low to medium. **Maintenance:** low. Adding new products just means linking them to the relevant choices.

**Example:** a customer picks **dry skin** and **30+ age group**. The hydrating serum is linked to both choices, so it gets two votes. The age-specific moisturiser is linked to one, so it gets one. The serum is recommended first.

### 3. Voting System (Funnel Quiz with Slots)

<div class="not-prose my-6"><img src="/img/blog/product-quiz-recommendation-systems/diagram-funnel-slots.png" alt="Funnel quiz with slots diagram" style="max-width:420px;width:100%;height:auto;display:block;" loading="lazy" /></div>

**Best for:** multi-step routines where the result is a bundle, not a single product. Think skincare routines (cleanser + toner + serum + moisturiser) or pet kits (food + treats + supplement).

**How it works:** same vote tally as the standard voting system, but the results page uses **Product Slot Blocks** instead of a single Product Block. Each slot has its own filter (typically a tag or collection): "cleanser slot", "toner slot", "serum slot". Within each slot, the most-voted matching product wins.

**Computes:** votes accumulate across the whole quiz, but each slot picks its top-voted product **within the slot's category filter**.

**Complexity:** medium. **Maintenance:** medium. Products need correct slot tags or collection membership.

**Example:** the quiz returns one cleanser, one toner, one moisturiser. Each is the most-voted item that matches its slot's tag filter.

### 4. Fixed Recommendations with Display Logic

<div class="not-prose my-6"><img src="/img/blog/product-quiz-recommendation-systems/diagram-fixed-display-logic.png" alt="Fixed recommendations with display logic diagram" style="max-width:420px;width:100%;height:auto;display:block;" loading="lazy" /></div>

**Best for:** quizzes with **specific, rule-based outcomes** that aren't a smooth function of votes. "If they answered A and not B, show this exact set." Highly curated catalogues, or merchants who want absolute control over which products appear in which scenario.

**How it works:** you build multiple result sections (or multiple results pages), each with its own fixed product list. **Display logic conditions** evaluate the shopper's answers and show the right section (or route to the right page).

**Computes:** boolean expressions over the answer set, for example `answer X is "oily" AND answer Y is "20-30"` → show section A.

**Complexity:** high. **Maintenance:** high. Every catalogue change means revisiting the rules.

**Example:** a hair-care brand with **exactly 6 hair profiles**; each profile maps to a fixed three-product set, and there's no overlap or gradient between them.

### 5. Custom Scoring System (Most Voted Variable)

<div class="not-prose my-6"><img src="/img/blog/product-quiz-recommendation-systems/diagram-scoring-mvv.png" alt="Most voted variable scoring diagram" style="max-width:420px;width:100%;height:auto;display:block;" loading="lazy" /></div>

**Best for:** personality-type quizzes, archetype quizzes, dosha (Vata/Pitta/Kapha), enneagram-style, or any quiz where the outcome is **a single category determined by majority vote**.

**How it works:** instead of linking products to choices, you attach **variables** (A, B, C) to choices. The variable with the most "hits" wins, and the results page shows the products tied to that winning variable.

**Computes:** per-shopper tally of each variable; pick the variable with the highest count; show its associated products. Ties handled by display-logic rules you define.

**Complexity:** medium. **Maintenance:** low. Products are bound to the variable, not to individual choices.

**Example:** a yoga-mat brand runs a dosha quiz. 12 questions, each answer adds to Vata, Pitta, or Kapha. The winning dosha decides which three mats to recommend.

### 6. Custom Scoring System (Score + Variable)

<div class="not-prose my-6"><img src="/img/blog/product-quiz-recommendation-systems/diagram-scoring-sv.png" alt="Score plus variable scoring diagram" style="max-width:420px;width:100%;height:auto;display:block;" loading="lazy" /></div>

**Best for:** weighted quizzes that need **fine-grained numerical scoring** mixed with conditional rules. Think wine-pairing quizzes that compute a "boldness score" out of 50, or supplement quizzes that need a "needs-iron-score" plus "is-vegan" gate.

**How it works:** each choice contributes points to one or more numeric variables. Display logic on the results page uses those scores: `if boldness_score > 35, show full-bodied reds; else show medium-bodied`. You can layer multiple scores and combine them with boolean rules.

**Computes:** numeric accumulation per variable, then conditional sections fire based on the totals.

**Complexity:** medium to high. **Maintenance:** medium. The score thresholds need re-validating when you add new products.

**Example:** a wine quiz. Tannin = 0–40, fruitiness = 0–40, body = 0–40. Display sections fire on bands: `tannin > 25 AND body > 30` → bold reds; `fruitiness > 25 AND tannin < 15` → light fruity reds; etc.

## At-a-glance comparison

<div class="not-prose my-6 overflow-x-auto">
  <table class="w-full border-collapse text-sm">
    <thead>
      <tr style="background:#16161D;color:#fff;">
        <th style="border:1px solid #cbd5e1;padding:12px;text-align:left;font-weight:600;">System</th>
        <th style="border:1px solid #cbd5e1;padding:12px;text-align:left;font-weight:600;">Adapts to answers?</th>
        <th style="border:1px solid #cbd5e1;padding:12px;text-align:left;font-weight:600;">Best for</th>
        <th style="border:1px solid #cbd5e1;padding:12px;text-align:left;font-weight:600;">Complexity</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background:#fff;color:#0f172a;">
        <td style="border:1px solid #cbd5e1;padding:12px;"><strong>Fixed Recommendations</strong></td>
        <td style="border:1px solid #cbd5e1;padding:12px;">No</td>
        <td style="border:1px solid #cbd5e1;padding:12px;">Lead-magnet quizzes, single bestseller</td>
        <td style="border:1px solid #cbd5e1;padding:12px;">Very low</td>
      </tr>
      <tr style="background:#f8fafc;color:#0f172a;">
        <td style="border:1px solid #cbd5e1;padding:12px;"><strong>Voting System (Funnel)</strong></td>
        <td style="border:1px solid #cbd5e1;padding:12px;">Yes</td>
        <td style="border:1px solid #cbd5e1;padding:12px;">Most product finders, 20-500 SKUs</td>
        <td style="border:1px solid #cbd5e1;padding:12px;">Low–medium</td>
      </tr>
      <tr style="background:#fff;color:#0f172a;">
        <td style="border:1px solid #cbd5e1;padding:12px;"><strong>Voting + Slots</strong></td>
        <td style="border:1px solid #cbd5e1;padding:12px;">Yes</td>
        <td style="border:1px solid #cbd5e1;padding:12px;">Routines, bundles, multi-category kits</td>
        <td style="border:1px solid #cbd5e1;padding:12px;">Medium</td>
      </tr>
      <tr style="background:#f8fafc;color:#0f172a;">
        <td style="border:1px solid #cbd5e1;padding:12px;"><strong>Fixed + Display Logic</strong></td>
        <td style="border:1px solid #cbd5e1;padding:12px;">Yes (rules)</td>
        <td style="border:1px solid #cbd5e1;padding:12px;">Curated, low-product-count outcomes</td>
        <td style="border:1px solid #cbd5e1;padding:12px;">High</td>
      </tr>
      <tr style="background:#fff;color:#0f172a;">
        <td style="border:1px solid #cbd5e1;padding:12px;"><strong>Custom Scoring (Most Voted Variable)</strong></td>
        <td style="border:1px solid #cbd5e1;padding:12px;">Yes</td>
        <td style="border:1px solid #cbd5e1;padding:12px;">Personality and dosha quizzes</td>
        <td style="border:1px solid #cbd5e1;padding:12px;">Medium</td>
      </tr>
      <tr style="background:#f8fafc;color:#0f172a;">
        <td style="border:1px solid #cbd5e1;padding:12px;"><strong>Custom Scoring (Score + Variable)</strong></td>
        <td style="border:1px solid #cbd5e1;padding:12px;">Yes (weighted)</td>
        <td style="border:1px solid #cbd5e1;padding:12px;">Weighted scoring, multi-variable gates</td>
        <td style="border:1px solid #cbd5e1;padding:12px;">Medium–high</td>
      </tr>
    </tbody>
  </table>
</div>

## Platform capabilities

What you can recommend varies slightly by platform. The voting algorithm is the same; the displayable units differ.

<div class="not-prose my-6 overflow-x-auto">
  <table class="w-full border-collapse text-sm">
    <thead>
      <tr style="background:#16161D;color:#fff;">
        <th style="border:1px solid #cbd5e1;padding:12px;text-align:left;font-weight:600;">Platform</th>
        <th style="border:1px solid #cbd5e1;padding:12px;text-align:left;font-weight:600;">Variants</th>
        <th style="border:1px solid #cbd5e1;padding:12px;text-align:left;font-weight:600;">Main products</th>
        <th style="border:1px solid #cbd5e1;padding:12px;text-align:left;font-weight:600;">Collections</th>
        <th style="border:1px solid #cbd5e1;padding:12px;text-align:left;font-weight:600;">Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background:#fff;color:#0f172a;">
        <td style="border:1px solid #cbd5e1;padding:12px;"><strong>Built for Shopify</strong></td>
        <td style="border:1px solid #cbd5e1;padding:12px;">✓</td>
        <td style="border:1px solid #cbd5e1;padding:12px;">✓</td>
        <td style="border:1px solid #cbd5e1;padding:12px;">✓</td>
        <td style="border:1px solid #cbd5e1;padding:12px;"><em>Recommendations Type</em> block setting lets you pick Products, Variants, or Collections</td>
      </tr>
      <tr style="background:#f8fafc;color:#0f172a;">
        <td style="border:1px solid #cbd5e1;padding:12px;"><strong>Shopify Legacy</strong></td>
        <td style="border:1px solid #cbd5e1;padding:12px;">✓</td>
        <td style="border:1px solid #cbd5e1;padding:12px;">✓</td>
        <td style="border:1px solid #cbd5e1;padding:12px;">✗</td>
        <td style="border:1px solid #cbd5e1;padding:12px;">Category-specific products supported via slots, not as direct collection output</td>
      </tr>
      <tr style="background:#fff;color:#0f172a;">
        <td style="border:1px solid #cbd5e1;padding:12px;"><strong>WooCommerce</strong></td>
        <td style="border:1px solid #cbd5e1;padding:12px;">✓ (one type)</td>
        <td style="border:1px solid #cbd5e1;padding:12px;">✓</td>
        <td style="border:1px solid #cbd5e1;padding:12px;">✗</td>
        <td style="border:1px solid #cbd5e1;padding:12px;">Variable products can only sync one variant type at a time</td>
      </tr>
      <tr style="background:#f8fafc;color:#0f172a;">
        <td style="border:1px solid #cbd5e1;padding:12px;"><strong>Magento, BigCommerce, Standalone</strong></td>
        <td style="border:1px solid #cbd5e1;padding:12px;">✓</td>
        <td style="border:1px solid #cbd5e1;padding:12px;">✓</td>
        <td style="border:1px solid #cbd5e1;padding:12px;">✗</td>
        <td style="border:1px solid #cbd5e1;padding:12px;">No collection or category recommendations</td>
      </tr>
    </tbody>
  </table>
</div>

> ReCharge subscription products are supported across all platforms via the **Connect** tab; sync the catalogue once, then link subscription items to choices the same way you would regular products.

## Setting up product recommendations

Before you start, finish adding all your quiz questions and choices. The recommendation step depends on the choices existing.

<div style="margin:24px 0;padding:18px 24px;background:#f8fafc;border-left:4px solid #16161D;border-radius:6px;">
  <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;">Tip</p>
  <p style="margin:0 0 6px;font-size:15px;line-height:1.55;color:#0f172a;">New to the builder? Start with our <a href="/how-to-build-a-successful-ecommerce-quiz/" style="color:#16161D;text-decoration:underline;">guide to building a successful ecommerce quiz</a>, then come back here for the recommendation step.</p>
</div>

The flow is the same across platforms; the menu names are nearly identical.

**1. Link products to choices.** In the **Quiz Builder**, open the **Link Products** tab (or **Link Collections** if you're using collection-based linking on Built for Shopify). For each choice, attach the products that should vote when that choice is selected.

**2. Edit the results page.** Open the **Results Page** tab. Add a **Product Block** for a single ranked list, or one or more **Product Slot Blocks** if you want a routine or category-bundle layout.

![Add block menu on the results page](/img/blog/product-quiz-recommendation-systems/results-page-add-block.webp)

**3. Test and troubleshoot.** Click **Preview** in the top menu and run the quiz with the answer paths that matter. If a product doesn't appear when it should, check the **Metrics > Responses** view to confirm the vote tally for that response.

![Quiz Builder top menu with Preview](/img/blog/product-quiz-recommendation-systems/quiz-builder-top-menu.webp)

> **Troubleshooting checklist:** every choice has at least one linked product; no products are accidentally excluded; the minimum-vote threshold (if set) isn't filtering out otherwise good matches; for slots, the slot filter (tag or collection) actually matches the products you expect to land in it.

### Refinements

**Minimum votes.** Set a threshold so only products with at least N votes appear. Stops one-vote products diluting the list on short quizzes.

**Exclusions.** A choice can **exclude** specific products. Excluded products never appear, even if they accumulated votes elsewhere. Useful for allergens, price ceilings, or stock-control rules.

## Advanced patterns

### Skincare routines with Product Slots

Add multiple **Product Slot Blocks** to the results page. Each slot represents a step in the routine (cleanser, toner, serum, moisturiser). Tag the products with the matching slot tag, and each slot will show the highest-voted product carrying that tag.

<div style="margin:24px 0;padding:18px 24px;background:#f8fafc;border-left:4px solid #16161D;border-radius:6px;">
  <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;">Tip</p>
  <p style="margin:0 0 6px;font-size:15px;line-height:1.55;color:#0f172a;">For a full walkthrough see <a href="https://docs.revenuehunt.com/how-to-guides/recommend-skincare-routine-slots/" style="color:#16161D;text-decoration:underline;">the slots setup guide</a> in the docs.</p>
</div>

### Matrix criteria

For combinations like "age + skin type", build collections that represent each segment (e.g. "teens with oily skin") and link each collection to the appropriate combined choices. Branching logic can route shoppers through different question paths to keep the matrix manageable.

![Recommendation matrix table](/img/blog/product-quiz-recommendation-systems/matrix-table.webp)

### Subscription products (ReCharge)

ReCharge integrates via **Connect > ReCharge > Connect**, followed by a catalogue sync. Subscription items then appear in the **Link Products** tab alongside regular products. The **Results Page > Basic > Checkout Settings** lets you route to cart, to the product page, or to a direct subscription flow.

If you use a non-ReCharge subscription app, create one-time-purchase versions of the subscription SKUs, link those to the quiz, and route checkout to the product page where shoppers pick the subscription option.

### Always-on products

Two ways to guarantee a product appears on the results page:

- **Link it to every choice in one question.** The product will accumulate at least one vote from any path, so it will always rank.
- **Put it in a dedicated slot.** A standalone Product Slot, filled by a tag or collection that contains only that product, will always show it without affecting the voted recommendations elsewhere.

Use this sparingly. A results page packed with "always-on" items dilutes the personalisation the quiz is meant to deliver, and platform data shows that quizzes with **more focused result sets convert better**.

### Explaining why a product was recommended

The app doesn't auto-generate explanations, but three patterns work well:

- **Information recalls.** Pull the answer back into the results-page copy: "You said *dry skin*, so we picked this hydrating serum." Light touch, no logic needed.
- **Block logic.** Show or hide explanation blocks based on which choice the shopper selected. Different blocks for different answer paths.
- **Custom JavaScript.** When you need fully dynamic, per-product reasoning. See the [custom CSS and JavaScript guide](/custom-css-and-javascript-for-product-recommendation-quizzes/).

## Choosing well

Three rules-of-thumb after building hundreds of quizzes:

1. **Default to the Voting System.** It scales with the catalogue, adapts to answers, and needs almost no rule maintenance. Drop down to Fixed only when the catalogue is tiny; step up to Display Logic only when the rules are genuinely uncodifiable as votes.
2. **Use slots only when the result is a bundle.** If you're not actually recommending a kit or routine, a single Product Block is cleaner and converts better.
3. **Reach for scoring when answers are weighted, not just counted.** "Three picks of A makes you a Vata" is Most Voted Variable. "How bold do you like your wine, on a 0-40 scale" is Score + Variable.

The wrong system isn't a hard failure; most quizzes can be made to work with any of them. But the right system collapses days of rule-maintenance into a single configuration. To estimate the lift on your own store, use our [quiz ROI calculator](/quiz-roi-calculator/).

## FAQ

### Which system should a new Shopify merchant start with?

The **Voting System (Funnel Quiz)**. It's the default for a reason: it adapts to answers, scales with the catalogue, and requires almost no rule maintenance. Switch to slots if you're recommending a routine; switch to scoring only if the answer pattern genuinely calls for it (personality types or weighted scoring).

### Can I combine systems in one quiz?

Yes, within limits. A Voting System quiz can use **slots** for one section of the results page and a regular **Product Block** for another. A Score + Variable system uses display logic, which can also gate **Fixed Recommendations** sections. You can't run two voting algorithms in parallel, though; the choice is one or the other.

### What's the difference between Most Voted Variable and Score + Variable?

**Most Voted Variable** counts hits (each answer adds 1 to a variable; the winner is the variable with the most hits). **Score + Variable** adds weighted points (an answer might add 3 to *boldness* and 1 to *fruitiness*), and display logic then evaluates the numeric totals. Use Most Voted for "what type are you" outcomes, Score + Variable when answers should count by more than one.

### Can the quiz recommend Shopify collections directly?

**On Built for Shopify, yes**: set the block's **Recommendations Type** to **Collections**. On Shopify Legacy, WooCommerce, Magento, BigCommerce, and Standalone, the quiz recommends product variants or main products only; you can use collections internally to **organise** linking, but the output on the results page will be products.

### How do I make sure new products show up in recommendations after a catalogue change?

For voting-based systems, link the new product to every relevant choice and run a **catalogue sync** under the **Connect** tab. For Fixed Recommendations or Fixed + Display Logic systems, you need to manually edit the results page and add the new product to the right section.

## Next steps

- New to product quizzes? Start with [how to build a successful ecommerce quiz](/how-to-build-a-successful-ecommerce-quiz/).
- Use customer answers to drive personalisation post-quiz: [customer tags in product quizzes](/how-to-use-customer-tags-in-product-quizzes-to-maximize-sales/).
- Avoid the design traps that kill conversion: [quiz creation mistakes that hurt your ecommerce sales](/quiz-creation-mistakes-that-hurt-your-ecommerce-sales/).
- Send quiz answers downstream: [HubSpot](/hubspot-quiz-integration/), [Klaviyo](/klaviyo-zero-party-data/), [Shopify Flows](/how-to-automate-post-quiz-emails-using-shopify-flows/).
- Track post-launch with the right metrics: [product quiz metrics](/product-quiz-metrics-what-to-track-to-convert-better/).
- Reward completion to lift email capture and conversion: [product quiz discounts](/product-quiz-discounts/).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Which recommendation system should a new Shopify merchant start with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Voting System (Funnel Quiz). It's the default for a reason: it adapts to answers, scales with the catalogue, and requires almost no rule maintenance. Switch to slots if you're recommending a routine; switch to scoring only if the answer pattern genuinely calls for it (personality types or weighted scoring)."
      }
    },
    {
      "@type": "Question",
      "name": "Can I combine recommendation systems in one quiz?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes within limits. A Voting System quiz can use slots for one section of the results page and a regular Product Block for another. A Score + Variable system uses display logic, which can also gate Fixed Recommendations sections. You can't run two voting algorithms in parallel; the choice is one or the other."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between Most Voted Variable and Score + Variable scoring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most Voted Variable counts hits (each answer adds 1 to a variable; the winner is the variable with the most hits). Score + Variable adds weighted points (an answer might add 3 to boldness and 1 to fruitiness), and display logic then evaluates the numeric totals. Use Most Voted for what-type-are-you outcomes; use Score + Variable when answers should count by more than one."
      }
    },
    {
      "@type": "Question",
      "name": "Can the quiz recommend Shopify collections directly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "On Built for Shopify, yes: set the block's Recommendations Type to Collections. On Shopify Legacy, WooCommerce, Magento, BigCommerce, and Standalone, the quiz recommends product variants or main products only; you can use collections to organise linking internally, but the results page outputs products."
      }
    },
    {
      "@type": "Question",
      "name": "How do I make sure new products show up in recommendations after a catalogue change?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For voting-based systems, link the new product to every relevant choice and run a catalogue sync under the Connect tab. For Fixed Recommendations or Fixed with Display Logic systems, manually edit the results page and add the new product to the right section."
      }
    }
  ]
}
</script>
