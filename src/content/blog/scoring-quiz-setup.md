---
title: "Scoring and personality-type quiz setup on RevenueHunt"
description: "Build a scoring or personality-type quiz: native variables and display logic on Built for Shopify, plus the custom-JavaScript path for other platforms."
pubDate: 2025-01-16T08:44:00Z
updatedDate: 2026-06-12T10:00:00Z
tags: ["scoring quiz", "personality quiz", "quiz design", "variables", "display logic"]
categories:
  - "Tips & Tricks"
author: "Paulina Chodura"
legacySlug: "scoring-quiz-setup"
legacyId: 10706
legacyUrl: "https://revenuehunt.com/guide-to-building-a-personality-type-quiz-with-revenuehunt/"
featuredImage: "/img/blog/scoring-quiz-setup/blogtile_scoring-quiz.webp"
draft: false
---

A scoring quiz routes shoppers to a result based on the **pattern of answers**, not on which products got voted up the most. A dosha test, a personality type quiz, a "what's your skin type" quiz, a wine-pairing quiz that returns a single style based on a 0-40 boldness score: these all share the same underlying mechanic. Variables and numeric scores attach to choices, and either Display Logic or Jump Logic uses the tally to decide what the customer sees on the Results Page.

The RevenueHunt platform supports this natively on the [Built for Shopify](/revenuehunt-built-for-shopify/) (BFS) version. On Shopify Legacy, WooCommerce, Magento, BigCommerce and Standalone, the same outcome is achievable with a small custom-JavaScript layer that watches choices and writes to the Results Page. This guide walks the three scoring patterns, their per-platform setup, and the simpler alternatives if your quiz doesn't actually need scoring.

For context on how scoring fits alongside the platform's other recommendation systems (Voting, Fixed, Slots, Display Logic), see the [product quiz recommendation systems](/product-quiz-recommendation-systems/) decision tree.

<div style="margin:32px 0;padding:24px 28px;background:#f8fafc;border-left:4px solid #16161D;border-radius:6px;">
  <p style="margin:0 0 14px;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;">What you'll learn</p>
  <ul style="list-style:none;padding:0;margin:0;">
    <li style="display:flex;gap:14px;padding:6px 0;font-size:15px;color:#0f172a;line-height:1.55;"><span style="flex-shrink:0;color:#16161D;font-weight:700;">→</span><span>The three scoring patterns: Winning Variable, Scoring with one results page, Scoring with multiple results pages.</span></li>
    <li style="display:flex;gap:14px;padding:6px 0;font-size:15px;color:#0f172a;line-height:1.55;"><span style="flex-shrink:0;color:#16161D;font-weight:700;">→</span><span>Which patterns are supported natively on Built for Shopify, and which need a branching tree or a custom-JavaScript workaround on the other platforms.</span></li>
    <li style="display:flex;gap:14px;padding:6px 0;font-size:15px;color:#0f172a;line-height:1.55;"><span style="flex-shrink:0;color:#16161D;font-weight:700;">→</span><span>The exact Quiz Builder steps: where to add scores, where Display Logic and Jump Logic live, how to wire sections to score ranges.</span></li>
    <li style="display:flex;gap:14px;padding:6px 0;font-size:15px;color:#0f172a;line-height:1.55;"><span style="flex-shrink:0;color:#16161D;font-weight:700;">→</span><span>A clean <code>prq.getSlideValue</code> code template for the platforms without native scoring.</span></li>
    <li style="display:flex;gap:14px;padding:6px 0;font-size:15px;color:#0f172a;line-height:1.55;"><span style="flex-shrink:0;color:#16161D;font-weight:700;">→</span><span>When a simpler approach (Information Recalls, one pivotal question, fewer outcomes) beats a full scoring setup.</span></li>
  </ul>
</div>

<div class="not-prose my-10 rounded-3xl bg-[#16161D] p-8 text-white shadow-xl">
  <p class="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-6">Why the routing layer pays back</p>
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
    <div>
      <p class="text-4xl font-bold text-emerald-400">5.5%</p>
      <p class="text-sm text-slate-300 mt-2">of shoppers who finish a quiz place an order, about 1 in 18, 2.75x a typical 2% store (<a href="/state-of-product-recommendation-quizzes/" class="underline decoration-emerald-400/40 hover:decoration-emerald-400">RevenueHunt benchmark, 45M+ responses</a>)</p>
    </div>
    <div>
      <p class="text-4xl font-bold text-emerald-400">+11-15%</p>
      <p class="text-sm text-slate-300 mt-2">within-store AOV uplift on quiz orders vs non-quiz orders. A correctly-tuned scoring layer routes higher-intent shoppers to the right bundle.</p>
    </div>
    <div>
      <p class="text-4xl font-bold text-emerald-400">1 in 5</p>
      <p class="text-sm text-slate-300 mt-2">quiz-attributed orders land more than 30 days later, so the outcome a scoring quiz writes to each profile keeps converting through email for months</p>
    </div>
  </div>
</div>

## Platform support at a glance

<div class="not-prose my-10"><svg viewBox="0 0 1280 540" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="scoring-matrix-title" style="width:100%;height:auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#eef2ff;border-radius:16px;padding:24px 16px;box-sizing:border-box;"><title id="scoring-matrix-title">Scoring system support across RevenueHunt platform versions</title><rect x="20" y="20" width="320" height="64" rx="10" fill="#16161D"/><text x="180" y="60" text-anchor="middle" fill="#fff" font-size="18" font-weight="600">Platform</text><rect x="360" y="20" width="600" height="64" rx="10" fill="#16161D"/><text x="660" y="60" text-anchor="middle" fill="#fff" font-size="18" font-weight="600">Native scoring system</text><rect x="980" y="20" width="280" height="64" rx="10" fill="#16161D"/><text x="1120" y="60" text-anchor="middle" fill="#fff" font-size="18" font-weight="600">Workaround</text><rect x="20" y="104" width="320" height="100" rx="10" fill="#fff" stroke="#cbd5e1"/><text x="180" y="161" text-anchor="middle" fill="#0f172a" font-size="19" font-weight="700">Built for Shopify</text><rect x="360" y="104" width="600" height="100" rx="10" fill="#0F9E9C"/><text x="660" y="145" text-anchor="middle" fill="#fff" font-size="18" font-weight="700">Yes ✓  variables + scores + Display / Jump Logic</text><text x="660" y="175" text-anchor="middle" fill="#fff" font-size="16">Choice Settings → Scores and calculations</text><rect x="980" y="104" width="280" height="100" rx="10" fill="#fff" stroke="#cbd5e1"/><text x="1120" y="161" text-anchor="middle" fill="#0f172a" font-size="17">Not needed</text><rect x="20" y="220" width="320" height="100" rx="10" fill="#f8fafc" stroke="#cbd5e1"/><text x="180" y="265" text-anchor="middle" fill="#0f172a" font-size="19" font-weight="700">Shopify Legacy</text><text x="180" y="290" text-anchor="middle" fill="#0f172a" font-size="19" font-weight="700">WooCommerce</text><rect x="360" y="220" width="600" height="100" rx="10" fill="#F87171"/><text x="660" y="261" text-anchor="middle" fill="#fff" font-size="18" font-weight="700">Not natively</text><text x="660" y="291" text-anchor="middle" fill="#fff" font-size="16">No Scores and calculations panel</text><rect x="980" y="220" width="280" height="100" rx="10" fill="#FFD23F" stroke="#16161D" stroke-width="2"/><text x="1120" y="261" text-anchor="middle" fill="#16161D" font-size="18" font-weight="700">Yes ✓</text><text x="1120" y="290" text-anchor="middle" fill="#16161D" font-size="16">Branching tree or custom JS</text><rect x="20" y="336" width="320" height="100" rx="10" fill="#fff" stroke="#cbd5e1"/><text x="180" y="381" text-anchor="middle" fill="#0f172a" font-size="19" font-weight="700">Magento</text><text x="180" y="406" text-anchor="middle" fill="#0f172a" font-size="19" font-weight="700">BigCommerce</text><rect x="360" y="336" width="600" height="100" rx="10" fill="#F87171"/><text x="660" y="377" text-anchor="middle" fill="#fff" font-size="18" font-weight="700">Not natively</text><text x="660" y="407" text-anchor="middle" fill="#fff" font-size="16">No Scores and calculations panel</text><rect x="980" y="336" width="280" height="100" rx="10" fill="#FFD23F" stroke="#16161D" stroke-width="2"/><text x="1120" y="377" text-anchor="middle" fill="#16161D" font-size="18" font-weight="700">Yes ✓</text><text x="1120" y="406" text-anchor="middle" fill="#16161D" font-size="16">Branching tree or custom JS</text><rect x="20" y="452" width="320" height="64" rx="10" fill="#f8fafc" stroke="#cbd5e1"/><text x="180" y="491" text-anchor="middle" fill="#0f172a" font-size="19" font-weight="700">Standalone</text><rect x="360" y="452" width="600" height="64" rx="10" fill="#F87171"/><text x="660" y="491" text-anchor="middle" fill="#fff" font-size="18" font-weight="700">Not natively, workaround only</text><rect x="980" y="452" width="280" height="64" rx="10" fill="#FFD23F" stroke="#16161D" stroke-width="2"/><text x="1120" y="491" text-anchor="middle" fill="#16161D" font-size="18" font-weight="700">Yes ✓ Branching or JS</text></svg></div>

## The three scoring patterns

Pick the pattern that matches the shape of the outcome you want, then jump to the platform-specific setup below.

### 1. Winning Variable Quiz (Most Voted Variable)

**For:** personality types, dosha tests, archetype quizzes, "what's your X" tests where the result is a single category determined by the variable that received the most hits.

**How it works:** every choice attaches to one of N variables (e.g. `dry skin`, `oily skin`, `combination skin`). The variable with the highest count at the end wins, and Display Logic shows the corresponding section on the Results Page.

<div class="not-prose my-6"><img src="/img/blog/scoring-quiz-setup/diagram-winning-variable.png" alt="Winning variable scoring diagram" style="max-width:460px;width:100%;height:auto;display:block;" loading="lazy" /></div>

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 01</span> &nbsp;The winning-variable scoring model: every answer adds a count to one of N variables (skin type, hair type, body type) and the variable with the highest count at the end picks the recommendation. Best for personality-type quizzes where each shopper has one dominant answer.</p>

### 2. Scoring quiz with one results page

**For:** quizzes where the outcome is a single result that varies by a numeric score range (a wine-pairing quiz that returns one of five styles, a skin-type quiz where the band 13-17 means "oily").

**How it works:** every choice adds points to one or more numeric variables. The Results Page has multiple sections, each gated by Display Logic on a score range. One section is visible at a time.

<div class="not-prose my-6"><img src="/img/blog/scoring-quiz-setup/diagram-scoring-one-page.png" alt="Scoring quiz with one results page diagram" style="max-width:460px;width:100%;height:auto;display:block;" loading="lazy" /></div>

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 02</span> &nbsp;Numeric scoring with a single results page: each answer adds points to one or more variables, and Display Logic on the results page reveals different sections depending on the score range. Same page, different visible content.</p>

### 3. Scoring quiz with multiple results pages

**For:** when the result is substantial enough to deserve its own dedicated page (a full routine, a multi-product stack, a long-form personality description with hero imagery).

**How it works:** numeric scores accumulate the same way, but instead of toggling sections on one page, **Jump Logic** on the last question routes the shopper to one of several full results pages.

<div class="not-prose my-6"><img src="/img/blog/scoring-quiz-setup/diagram-scoring-multi-page.png" alt="Scoring quiz with multiple results pages diagram" style="max-width:460px;width:100%;height:auto;display:block;" loading="lazy" /></div>

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 03</span> &nbsp;Numeric scoring with multiple results pages: Jump Logic on the last question routes the shopper to one of several full results pages. Useful when each outcome deserves its own visual identity or product set.</p>

## Built for Shopify: the native setup

All three patterns work natively in the **Built for Shopify** version. There's also a pre-built **Scoring Quiz template** under Quiz Templates on the Dashboard, which is the fastest start.

For a worked example of these mechanics in a real qualifying funnel, see the [anti-ageing device case study](/anti-aging-beauty-brand-quiz-funnel-case-study/) (the 7-question / 5-persuasion-screen architecture routes shoppers into a single qualified outcome and produces 9.8% CVR on cold Meta traffic). Whichever pattern you choose, the outcome variable can sync as a Klaviyo custom property: see [your Klaviyo list is a graveyard](/klaviyo-zero-party-data/) for how the outcome becomes a segmented welcome flow downstream.

### Step 1: design the questions and map the outcomes

Decide the outcomes first, then build the quiz around them. For a skin-type quiz, the outcomes are typically Dry / Normal / Oily / Combination / Sensitive. Map every choice in every question to either a variable (Pattern 1) or a numeric score (Patterns 2 and 3) for each outcome.

A Google Sheet works for simple mappings; [Miro](https://miro.com/) handles the larger matrices.

<div class="not-prose my-6"><img src="/img/blog/scoring-quiz-setup/mapping-matrix.webp" alt="Outcome mapping matrix in a spreadsheet" style="max-width:520px;width:100%;height:auto;display:block;" loading="lazy" /></div>

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 04</span> &nbsp;The outcome mapping matrix: choices on one axis, variables on the other, point values in the cells. Build this in a spreadsheet before touching the Quiz Builder. The matrix is what makes the scoring logic reviewable, debuggable and easy to tune later.</p>

### Step 2: add scores or variables to choices

1. Open the **Quiz Builder** and add your multiple-choice questions.
2. On any choice, open **Choice Settings** and find **Scores and calculations**.
3. The default `score` variable can be adjusted with the up/down arrows (negative values allowed).
4. To create a new named variable (e.g. `dry skin`), click the **Search or create variable** bar, type the name, then click **Create a new variable** in the dropdown.
5. Assign a numeric score to the new variable for that choice. Repeat for every other choice in the question, then move to the next question.

### Step 3: build the Results Page

The Results Page structure differs by pattern.

**Pattern 1, Winning Variable:** add one Section per outcome (Dry Skin, Oily Skin, etc.). Each Section contains a Heading, Text, and a Product Block with the **Recommendation System** set to **Fixed Recommendations** and the matching products selected. Then attach **Display Logic** to each section: "If the variable with the highest score is `dry skin`, this section is visible; default is hidden." Repeat for every variable.

**Pattern 2, One results page with score ranges:** same Sections-and-Display-Logic structure, but the condition uses **The score of the variable…** with a numeric range (e.g. "Total score is between 13 and 17"). One Section per band.

**Pattern 3, Multiple results pages:** create multiple Results Pages via **+ Add Results Page**. Each gets its own content and Product Blocks. Then open **Conditional Logic > Jump Logic** on the last question and route to the right Results Page based on the score ranges.

### Step 4: save and test

Click **Save** top-right. Publish the quiz on a real page (preview mode handles scoring but not subscription components, so use a real page for full QA) and run through enough answer paths to confirm every outcome fires.

## Shopify Legacy, WooCommerce, Magento, BigCommerce, Standalone

Native scoring isn't available on these platforms; there's no **Scores and calculations** panel in Choice Settings. There are **two workarounds**, both well-trodden by merchants. The first is no-code and uses the conditional-logic system the platforms already ship. The second is a small JavaScript layer.

### Option 1: a branching quiz with linked products (no code)

This is the path most non-BFS merchants pick, especially when there's no developer on-site. It trades upfront effort for a permanently no-code maintenance story: once the tree is built and the products are linked, the quiz just works.

The idea is to replace the score with **branching**. Use **Jump Logic** on every question to route the shopper down a path that corresponds to one outcome. Every branch terminates at a final question whose choices are linked to the products you want that outcome to surface. The platform's regular recommendation algorithm then shows those products at the end.

**Setup, end to end:**

1. **Sketch the tree first.** Every branch should terminate at one outcome (Dry skin, Oily skin, etc.). Draw it on paper or in [Miro](https://miro.com/) before touching the builder; this is the part where a missed branch becomes hours of fix-up later.
2. **Build the questions.** Each multiple-choice question represents a node in the tree.
3. **Wire Jump Logic on each question's choices.** Choice A jumps to question 3; Choice B jumps to question 4; Choice C jumps to question 5. The branches converge at the right final question per outcome.
4. **Add a final question per outcome path.** It can be a real diagnostic question or a hidden one ("Confirm your match" with one auto-select choice).
5. **Link products to each choice on the final question.** That's where the recommendation surfaces. Every outcome path has its own final question, and its choices carry the products that map to that result.
6. **Use Information Recalls on the Results Page** to echo the answer back ("Based on your answer, your skin is `dry`") if you want the result-page copy to feel personalised without scoring logic.

The trade-off is honest: the tree gets large quickly (5 outcomes × 3 binary branches = up to 8 final questions). For 4-6 outcomes it's manageable. Past that, the JavaScript path is usually less work to maintain.

### Option 2: custom JavaScript on the Results Page

When the tree gets too big to maintain by hand, a small script accumulates points and writes the result. The mechanism uses `prq.getSlideValue(slideId)`, which returns the value selected on a given slide. The script accumulates points per outcome and displays the winner.

```js
document.addEventListener("DOMContentLoaded", function () {
  // Map slide IDs to per-choice point values.
  // Find the slide IDs by inspecting the quiz elements in your browser.
  var slidePoints = {
    "mGiOjOq": { "Yes": 3, "No": 1 },
    // Add more slides and per-choice mappings here.
  };

  var totalPoints = 0;
  for (var slideId in slidePoints) {
    if (!slidePoints.hasOwnProperty(slideId)) continue;
    var value = prq.getSlideValue(slideId);
    if (value && slidePoints[slideId][value] !== undefined) {
      totalPoints += slidePoints[slideId][value];
    }
  }

  // Render the result into a container you've placed on the Results Page.
  var el = document.getElementById("quizResults");
  if (el) el.innerHTML = "Total points: " + totalPoints;
});
```

The script goes in **Results Page Settings > Advanced > Custom JavaScript**.

<div class="not-prose my-6"><img src="/img/blog/scoring-quiz-setup/results-page-custom-js.webp" alt="Custom JavaScript field on the Results Page" style="max-width:520px;width:100%;height:auto;display:block;" loading="lazy" /></div>

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 05</span> &nbsp;The Custom JavaScript field on the Results Page settings. Drop the headline-personalisation script here so each variant of the winning variable produces its own headline copy, without duplicating the entire page per outcome.</p>

For the full custom-JS reference, see our [custom CSS and JavaScript guide](/custom-css-and-javascript-for-product-recommendation-quizzes/). For multi-outcome quizzes, extend the script to accumulate per-variable counts (one total per outcome) and write the winning category into the Results Page DOM.

> **Tip:** ChatGPT or a similar assistant can adapt this template to your specific outcomes if you describe the variables and the per-choice point values. Paste the snippet, list the slide IDs, list the choice → score mapping per slide, and ask for the extended version.

### Which option to pick

- **3-6 outcomes and no developer on hand:** the branching tree. Slow upfront, free to maintain forever, no code in the page.
- **More than 6 outcomes, weighted scoring, or some answers should count more than others:** the JavaScript path. Faster to build at scale, but you'll want someone comfortable with JavaScript whenever the logic changes.

## Simpler alternatives that often work

Before you commit to a full scoring setup, three lighter alternatives are worth trying. They cover a surprising share of quizzes that look like they need scoring at first glance.

### Information Recalls (echo the answer)

Insert the customer's actual answer into the Results Page copy: "Based on your answer, your skin tends to be `dry`." No scoring system needed. Type `@` in any text block to insert an Information Recall. Customers feel the quiz understood them without any logic firing under the hood.

### Predefined product descriptions

If the recommendation copy lives on the product itself ("This moisturiser is perfect for dry skin, providing deep hydration"), you don't need the Results Page to repeat it; the product card on the results carries the message. Set **Results Page Settings > Individual Product Settings > Show description** to surface them.

<div class="not-prose my-6"><img src="/img/blog/scoring-quiz-setup/individual-product-settings.webp" alt="Show description toggle in Individual Product Settings" style="max-width:520px;width:100%;height:auto;display:block;" loading="lazy" /></div>

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 06</span> &nbsp;The Show description toggle inside Individual Product Settings on the Results Page. If the recommendation copy already lives on the product, enabling this surfaces it on the result card instead of duplicating it as a separate section.</p>

### Base results on a single pivotal question

Often, one question carries more diagnostic weight than the others. If "How does your skin feel by midday?" determines the outcome almost on its own, just use **block logic on that one question's answer**. The other questions enrich the customer profile but don't drive the routing. Faster to build, easier to maintain, very nearly as accurate.

## FAQ

### Can I build a scoring quiz on platforms other than Built for Shopify?

Yes, via one of two well-trodden routes. The **no-code option** is a branching quiz: build a conditional logic tree with Jump Logic, and link products to the choices on each branch's final question. The **code option** is a small `prq.getSlideValue` script on the Results Page that accumulates points. Plenty of merchants ship the branching version once and never touch it again; the JavaScript version scales better when the tree gets large.

### What's the difference between the Winning Variable pattern and the Scoring with One Results Page pattern?

The **Winning Variable** pattern picks the variable that received the most hits (each answer adds 1). The **Scoring** pattern accumulates **numeric points** per variable, and the result is determined by which range the score falls into. Use Winning Variable for "what type are you" outcomes (dosha, personality), Scoring for cases where some answers should count more than others.

### Should I use scoring or the Voting / Fixed Recommendation systems?

If the outcome is "this customer is a [type]", use scoring. If the outcome is "show the top-voted products across all the customer's answers", use the [Voting System](/product-quiz-recommendation-systems/). The recommendation-systems decision tree walks the full choice.

### How many outcomes is too many?

If you have more than 6-8 outcomes, the time to maintain the score ranges, sections and product mappings grows faster than the benefit. Consider collapsing rare outcomes into the nearest neighbour, or routing the long-tail to a generic results page.

### Why is my scoring quiz showing the wrong section?

Three usual causes. First, a choice has no score on a variable: every choice needs at least one score assignment for the variable it should influence. Second, the score ranges in Display Logic overlap (two sections set "5-7" and "6-9"). Third, the Default visibility on the section was left as **Visible** instead of **Hidden**, so the section shows even when its condition isn't met.

## Next steps

- For the broader decision of which recommendation system fits your quiz: [product quiz recommendation systems](/product-quiz-recommendation-systems/).
- For custom-JS reference and the rest of the `prq.*` API: [custom CSS and JavaScript guide](/custom-css-and-javascript-for-product-recommendation-quizzes/).
- For the data layer behind segmenting by outcome: [customer tags in product quizzes](/how-to-use-customer-tags-in-product-quizzes-to-maximize-sales/) and [zero-party data](/zero-party-data/).
- For 11 funnels in production that use scoring or scoring-adjacent patterns (HUM Nutrition, Stitch Fix, Casper, the anti-ageing brand): [ecommerce sales funnel examples](/ecommerce-sales-funnel-examples/).
- For the strategic context (why personalised post-click routing beats catalogue browsing on paid traffic): [quiz funnels vs collection pages](/quiz-funnels-vs-collection-pages-why-your-paid-traffic-bounces/) and [why popups are walls and quizzes are doors](/why-popups-are-walls-and-quizzes-are-doors-rethinking-lead-capture-for-dtc/).
- For the full strategy this fits into: [build a sales funnel on a Shopify store](/build-sales-funnel-shopify-store/).
- For the operating mode this fits into: [how to build a successful ecommerce quiz](/how-to-build-a-successful-ecommerce-quiz/).
- Estimate the lift on your own store: [quiz ROI calculator](/quiz-roi-calculator/).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I build a scoring quiz on platforms other than Built for Shopify?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, via one of two routes. The no-code option is a branching quiz: build a conditional logic tree with Jump Logic and link products to the choices on each branch's final question. The code option is a small prq.getSlideValue script on the Results Page that accumulates points. The branching version is heavy upfront but free to maintain; the JavaScript version scales better when the tree gets large."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between the Winning Variable pattern and the Scoring with One Results Page pattern?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Winning Variable pattern picks the variable that received the most hits (each answer adds 1). The Scoring pattern accumulates numeric points per variable, and the result is determined by which range the score falls into. Use Winning Variable for what-type-are-you outcomes (dosha, personality), Scoring for cases where some answers should count more than others."
      }
    },
    {
      "@type": "Question",
      "name": "Should I use scoring or the Voting / Fixed Recommendation systems?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If the outcome is 'this customer is a [type]', use scoring. If the outcome is 'show the top-voted products across all the customer's answers', use the Voting System. The recommendation-systems decision tree walks the full choice."
      }
    },
    {
      "@type": "Question",
      "name": "How many outcomes is too many for a scoring quiz?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you have more than 6-8 outcomes, the time to maintain the score ranges, sections and product mappings grows faster than the benefit. Consider collapsing rare outcomes into the nearest neighbour, or routing the long-tail to a generic results page."
      }
    },
    {
      "@type": "Question",
      "name": "Why is my scoring quiz showing the wrong section?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Three usual causes. First, a choice has no score on a variable: every choice needs at least one score assignment for the variable it should influence. Second, the score ranges in Display Logic overlap. Third, the Default visibility on the section was left as Visible instead of Hidden."
      }
    }
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to build a scoring or personality-type quiz on Built for Shopify",
  "description": "Build a scoring or personality-type quiz natively on the Built for Shopify version of RevenueHunt. Variables and numeric scores attach to choices, and either Display Logic or Jump Logic uses the tally to route the shopper to the matching outcome. Supports three patterns: Winning Variable, Scoring with one results page, and Scoring with multiple results pages.",
  "totalTime": "PT30M",
  "tool": [
    {"@type": "HowToTool", "name": "RevenueHunt: Recommender Quiz app (Built for Shopify)"},
    {"@type": "HowToTool", "name": "Shopify admin"},
    {"@type": "HowToTool", "name": "Outcome mapping matrix (Google Sheet or Miro)"}
  ],
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Design the questions and map the outcomes",
      "text": "Decide the outcomes first, then build the quiz around them. For a skin-type quiz, the outcomes are typically Dry / Normal / Oily / Combination / Sensitive. Map every choice in every question to either a variable (Winning Variable pattern) or a numeric score (Scoring patterns) for each outcome. A Google Sheet handles simple mappings; Miro handles larger matrices."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Add scores or variables to choices in the Quiz Builder",
      "text": "Open the Quiz Builder and add your multiple-choice questions. On any choice, open Choice Settings and find Scores and calculations. Adjust the default score variable with the up/down arrows (negative values allowed), or click 'Search or create variable' and create a new named variable (e.g. dry skin). Assign numeric scores per choice. Repeat for every choice in every question."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Build the Results Page by pattern",
      "text": "Pattern 1 (Winning Variable): add one Section per outcome, set the Product Block recommendation system to Fixed Recommendations, attach Display Logic 'If the variable with the highest score is X, this section is visible'. Pattern 2 (One results page with score ranges): same Sections + Display Logic structure but the condition uses 'The score of the variable...' with a numeric range. Pattern 3 (Multiple results pages): create multiple Results Pages, then open Conditional Logic > Jump Logic on the last question to route to the right Results Page based on score ranges."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Save, publish, and test",
      "text": "Click Save in the top-right. Publish the quiz on a real page (preview mode handles scoring but not subscription components, so use a real page for full QA) and run through enough answer paths to confirm every outcome fires."
    }
  ]
}
</script>
