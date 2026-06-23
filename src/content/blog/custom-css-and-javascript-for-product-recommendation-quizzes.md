---
title: "Custom CSS and JavaScript for product quizzes"
description: "Customise the RevenueHunt quiz with CSS and JavaScript: selectors, sample code, and the Built for Shopify vs Legacy API split that catches most developers off-guard."
pubDate: 2024-09-12T06:17:01Z
updatedDate: 2026-05-29T22:30:00Z
tags:
  - "ecommerce"
  - "product recommendation quiz"
  - "shopify"
  - "custom code"
  - "developers"
categories:
  - "eCommerce"
  - "Shopify Apps"
  - "Tips &amp; Tricks"
author: "Paulina Chodura"
legacySlug: "custom-css-and-javascript-for-product-recommendation-quizzes"
legacyId: 9740
legacyUrl: "https://revenuehunt.com/custom-css-and-javascript-for-product-recommendation-quizzes/"
featuredImage: "/img/blog/custom-css-and-javascript-for-product-recommendation-quizzes/blogtile_css-js.webp"
draft: false
---

Two layers of customisation extend the RevenueHunt quiz beyond its built-in design panel: **custom CSS** for visual styling (selectors, fonts, animations, layout tweaks), and **custom JavaScript** for behavioural logic (computed fields, integrations, callback functions). The CSS layer works almost identically on every platform. The JavaScript layer **differs significantly between [Built for Shopify](/revenuehunt-built-for-shopify/) and the legacy / multi-platform versions**: they use entirely different global objects (`quiz` + `actions` on Built for Shopify, `prq` on Legacy / Woo / Magento / BC / Standalone). Knowing which API you're targeting before you write the first line of code is the difference between five minutes and five hours of debugging.

<div class="aspect-video overflow-hidden rounded-xl bg-slate-900 not-prose my-6"><button type="button" class="yt-facade group relative block h-full w-full cursor-pointer overflow-hidden" data-yt-id="RpwgLOL4Uy8" aria-label="Play video"><picture><source srcset="https://i.ytimg.com/vi_webp/RpwgLOL4Uy8/maxresdefault.webp" type="image/webp" /><img src="https://i.ytimg.com/vi/RpwgLOL4Uy8/maxresdefault.jpg" alt="" width="1280" height="720" loading="lazy" decoding="async" class="h-full w-full object-cover" /></picture><span class="absolute inset-0 flex items-center justify-center bg-black/10 transition group-hover:bg-black/20"><span class="flex h-20 w-20 items-center justify-center rounded-full bg-black/70 shadow-lg transition group-hover:scale-105 group-hover:bg-[#FF0000]"><svg class="ml-0.5 h-9 w-9 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg></span></span></button></div>

<div style="margin:32px 0;padding:24px 28px;background:#f8fafc;border-left:4px solid #16161D;border-radius:6px;">
  <p style="margin:0 0 14px;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;">What you'll learn</p>
  <ul style="list-style:none;padding:0;margin:0;">
    <li style="display:flex;gap:14px;padding:6px 0;font-size:15px;color:#0f172a;line-height:1.55;"><span style="flex-shrink:0;color:#16161D;font-weight:700;">→</span><span>Where to put custom CSS in the Quiz Builder, with sample selectors for backgrounds, fonts, buttons and picture-choice grids.</span></li>
    <li style="display:flex;gap:14px;padding:6px 0;font-size:15px;color:#0f172a;line-height:1.55;"><span style="flex-shrink:0;color:#16161D;font-weight:700;">→</span><span>The Built for Shopify JavaScript API (<code>quiz</code> + <code>actions</code>): native Shopify cart, shadow DOM access, event handlers.</span></li>
    <li style="display:flex;gap:14px;padding:6px 0;font-size:15px;color:#0f172a;line-height:1.55;"><span style="flex-shrink:0;color:#16161D;font-weight:700;">→</span><span>The Legacy and multi-platform JavaScript API (<code>prq</code>): Vue.js-based, slide IDs found via console, callback-function pattern for storefront integration.</span></li>
    <li style="display:flex;gap:14px;padding:6px 0;font-size:15px;color:#0f172a;line-height:1.55;"><span style="flex-shrink:0;color:#16161D;font-weight:700;">→</span><span>An API comparison table so you know which method on one platform maps to which method on the other.</span></li>
  </ul>
</div>

<img src="/img/blog/custom-css-and-javascript-for-product-recommendation-quizzes/featuredimageCSS1.gif" alt="Animated demo showing a quiz styled with custom CSS to match a brand visual identity" width="1080" height="1080" decoding="async" style="width:100%;height:auto;border-radius:8px;" />

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 01</span> &nbsp;A quiz styled with custom CSS to match a brand identity. Same Quiz Builder engine, completely bespoke surface: typography, palette, spacing, motion all customised beyond what the theme-inherited defaults provide.</p>

For the foundations of a high-converting quiz, see [how to build a successful product recommendation quiz](https://revenuehunt.com/how-to-build-a-successful-ecommerce-quiz/). For the question types you can style, see [product quiz question types: the complete reference](https://revenuehunt.com/product-quiz-question-types/).

**Why customise with CSS and JavaScript:**

- **Brand consistency.** Match the quiz to your store's typography, colour palette and motion language so it feels like part of the storefront rather than a third-party widget. A well-styled [product recommendation quiz](/) reads as a native part of the shopping experience, not a bolt-on.
- **User experience refinement.** Tighten layouts, adjust touch targets for mobile, or rework specific question slides to fit your category's expectations.
- **Custom functionality.** Computed fields (BMI, dosage, fit), conditional content, third-party analytics events, and callback-driven integrations that don't ship with the Quiz Builder by default.

<img src="/img/blog/custom-css-and-javascript-for-product-recommendation-quizzes/Screenshot-2020-09-29-at-20.34.03-1024x594.webp" alt="Quiz interface showing how custom CSS can reshape the design to match a brand identity" width="1024" height="594" loading="lazy" decoding="async" style="width:100%;height:auto;border-radius:8px;" />

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 02</span> &nbsp;Custom CSS reshapes the default quiz layout to match a brand identity that the design panel alone cannot reach. Useful when the brand has strong visual rules that require pixel-level control.</p>

**Jump to:**

- [Styling with CSS](#styling-with-css)
- [Adding custom features with JavaScript](#adding-custom-features-with-javascript)

## Styling with CSS

Custom CSS lets you override any default styling on the quiz. The setup path is the same on every platform, and the CSS itself behaves the same on every platform.

### Step 1: open the custom CSS editor

1. Open the **Quiz Builder**.
2. Navigate to the [**Quiz Design**](https://docs.revenuehunt.com/reference/quiz-builder/#quiz-design) tab.
3. Scroll to the **Custom CSS** section and click **Add** to open the CSS console.

<img src="/img/blog/custom-css-and-javascript-for-product-recommendation-quizzes/Screenshot-2024-08-19-105145.webp" alt="Quiz Builder Quiz Design tab showing the Custom CSS section with the Add button" width="1494" height="1036" loading="lazy" decoding="async" style="width:100%;height:auto;border-radius:8px;" />

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 03</span> &nbsp;The Custom CSS console inside the Quiz Builder Quiz Design tab. Click Add to open the editor; styles publish on the next quiz save and apply instantly across every embed.</p>

### Step 2: basic customisations

In the CSS editor, you can insert any custom styling rules to adjust the quiz appearance. You can modify elements of the quiz or the results page such as fonts, colors, and layouts.

**How do I find CSS selectors of quiz elements?**

To find the correct CSS selector for any quiz element, simply right-click the element on your browser and select **Inspect**. This will open the browser's Developer Tools, where you can view the HTML and locate the exact selector to target.

<img src="/img/blog/custom-css-and-javascript-for-product-recommendation-quizzes/Screenshot-2024-08-30-091646.webp" alt="Browser DevTools showing how to inspect a quiz element to find its CSS selector" width="1526" height="866" loading="lazy" decoding="async" style="width:100%;height:auto;border-radius:8px;" />

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 04</span> &nbsp;Browser DevTools inspecting a quiz element. Right-click any quiz element and Inspect to surface the exact selector you need for a custom rule.</p>

<img src="/img/blog/custom-css-and-javascript-for-product-recommendation-quizzes/Screenshot-2024-08-30-091731.webp" alt="Browser DevTools elements panel highlighting the selector for a specific quiz element" width="724" height="869" loading="lazy" decoding="async" style="width:100%;height:auto;border-radius:8px;" />

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 05</span> &nbsp;The DevTools elements panel highlighting the specific selector for a quiz element. Copy the selector into the Custom CSS console; the rule applies to every instance of that element across the quiz.</p>

Here are some sample CSS codes you can use in your quiz:

<table style="width:100%;border-collapse:collapse;font-size:14px;margin:24px 0;"><thead><tr><th style="background:#16161D;color:#fff;padding:12px 14px;text-align:left;font-size:11px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;">Action</th><th style="background:#16161D;color:#fff;padding:12px 14px;text-align:left;font-size:11px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;">Code</th></tr></thead><tbody><tr><td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;background:#fff;color:#334155;vertical-align:top;">Change the background color</td><td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;background:#fff;color:#334155;vertical-align:top;"><pre style="background:#f1f5f9;color:#0f172a;padding:12px;border-radius:6px;font-size:12px;white-space:pre-wrap;margin:0;">.lq-quiz {
  background-color: #f0f0f0;
}
</pre></td></tr><tr><td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;background:#fff;color:#334155;vertical-align:top;">Modify the font style and size</td><td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;background:#fff;color:#334155;vertical-align:top;"><pre style="background:#f1f5f9;color:#0f172a;padding:12px;border-radius:6px;font-size:12px;white-space:pre-wrap;margin:0;">.lq-quiz h1 {
  font-family: 'Arial, sans-serif';
  font-size: 18px;
}
</pre></td></tr><tr><td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;background:#fff;color:#334155;vertical-align:top;">Uploading a Google Font</td><td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;background:#fff;color:#334155;vertical-align:top;"><ol style="padding-left: 18px; margin-bottom: 8px; font-size: 13px;"><li>Find the desired font on Google Fonts.</li><li>Copy the import URL and font family CSS rules.</li><li>Add the CSS code to the custom CSS section in the Quiz Design tab.</li></ol><pre style="background:#f1f5f9;color:#0f172a;padding:12px;border-radius:6px;font-size:12px;white-space:pre-wrap;margin:0;">@import url('https://fonts.googleapis.com/css2?family=Quicksand&amp;display=swap');

.quicksand-bold { 
  font-family: "Quicksand", sans-serif; 
  font-optical-sizing: auto; 
  font-weight: 400; 
  font-style: normal; 
}

h1, h2, h3, h4, h5, h6, p, button, div{
  font-family: 'Quicksand', sans-serif;
}
</pre></td></tr><tr><td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;background:#fff;color:#334155;vertical-align:top;">Style the buttons</td><td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;background:#fff;color:#334155;vertical-align:top;"><pre style="background:#f1f5f9;color:#0f172a;padding:12px;border-radius:6px;font-size:12px;white-space:pre-wrap;margin:0;">#cta {
  background-color: #333;
  color: #ffffff;
  border-radius: 5px;
}
</pre></td></tr></tbody></table>

<div style="margin:24px 0;padding:18px 24px;background:#f8fafc;border-left:4px solid #16161D;border-radius:6px;">
  <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;">Tip</p>
  <p style="margin:0 0 6px;font-size:15px;line-height:1.55;color:#0f172a;"><strong>Use Markdown for Text Styling</strong></p>
  <p style="margin:0 0 6px;font-size:15px;line-height:1.55;color:#0f172a;">You don't always need custom CSS to style your quiz. You can use <a href="https://docs.revenuehunt.com/how-to-guides/use-markdown/" style="color:#16161D;text-decoration:underline;">Markdown language</a> to format text within the quiz for basic styling such as headings, bold, italics, links, images, and videos.</p>
</div>

### Step 3: advanced CSS customisations

For more complex design customizations, you may want to target specific quiz elements using advanced CSS selectors, pseudo-classes, or even animations.

**Add specificity to your CSS rules**

You can add specificity to your CSS rules, so that they are applied only to the quiz or a certain question. For example:

```
#quiz  p {color: red;}
```

will change the color of all the paragraphs in the quiz to red.

```
#question-AbC7Zde  p {color: red;}
```

will change the color of a paragraph to red ONLY for question `AbC7Zde`, where `AbC7Zde` is the question ID. You can find a specific question ID in Quiz Builder > [Question settings](https://docs.revenuehunt.com/reference/quiz-builder/#question-settings).

Here are some examples of advanced CSS customizations you can apply to your quiz:

<table style="width:100%;border-collapse:collapse;font-size:14px;margin:24px 0;"><thead><tr><th style="background:#16161D;color:#fff;padding:12px 14px;text-align:left;font-size:11px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;">Action</th><th style="background:#16161D;color:#fff;padding:12px 14px;text-align:left;font-size:11px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;">Code</th></tr></thead><tbody><tr><td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;background:#fff;color:#334155;vertical-align:top;">Change Picture Choices to Icons</td><td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;background:#fff;color:#334155;vertical-align:top;"><pre style="background:#f1f5f9;color:#0f172a;padding:12px;border-radius:6px;font-size:12px;white-space:pre-wrap;margin:0;">/* Change Picture Choices to Icons */

.lq-images li, .widget .lq-images li {
  max-width: none !important;
}

.lq-choices .lq-img, .widget .lq-choices .lq-img {
  width: 48px !important;
  height: 48px !important;
  padding-top: 0 !important;
  background-size: 48px !important;
  background-position: left;
  margin-top: 4px;
  margin-right: 8px;
  margin-bottom: 2px;
}

.lq-picture-choice .lq-letter {
  display: none;
}

.lq-picture-choice li div {
  width: calc(100% - 65px) !important;
  margin-top: 12px;
}

@media (pointer: fine) {
  .lq-picture-choice li:hover {
    background-color: #333 !important;
  }

  .lq-picture-choice li:hover div {
    color: #fff !important;
  }

  .lq-picture-choice li:hover .lq-img {
    content: "";
    width: 100%;
    height: 100%;
    background-color: black;
    filter: invert(100%);
    -webkit-filter: invert(100%);
  }
}

.lq-images li, .widget .lq-images li {
  width: calc(100% - 8px) !important;
}

@media (min-width: 768px) {
  .builder-container-preview .lq-images li, .widget .lq-images li {
    width: calc(50% - 8px) !important;
  }
}
</pre></td></tr><tr><td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;background:#fff;color:#334155;vertical-align:top;">Hide Product Variants</td><td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;background:#fff;color:#334155;vertical-align:top;"><pre style="background:#f1f5f9;color:#0f172a;padding:12px;border-radius:6px;font-size:12px;white-space:pre-wrap;margin:0;">/* this hides the product variants */
.no-variants-dropdown {
  display: none;
}

.lq-variants-dropdown {
  display: none;
}

.lq-results .el-input, .lq-results .el-input__inner {
  display: none;
}
</pre></td></tr></tbody></table>

### Step 4: customisation examples

To enhance the appearance of your quiz, here are a few real creative customization ideas:

<img src="/img/blog/custom-css-and-javascript-for-product-recommendation-quizzes/Screenshot-2021-04-14-at-04.14.16.webp" alt="Creative CSS customisation example: quiz styled with a brand-specific colour palette and typography" width="1343" height="744" loading="lazy" decoding="async" style="width:100%;height:auto;border-radius:8px;" />

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 06</span> &nbsp;Creative example: a quiz styled with a brand-specific palette and typography. The colour and type system carries through every slide so the quiz reads as native to the brand, not a third-party embed.</p>

<img src="/img/blog/custom-css-and-javascript-for-product-recommendation-quizzes/Screenshot-2020-10-20-at-11.41.36.webp" alt="Creative CSS customisation example: quiz with a custom layout and visual treatment" width="1678" height="973" loading="lazy" decoding="async" style="width:100%;height:auto;border-radius:8px;" />

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 07</span> &nbsp;Creative example: a quiz with a custom layout and visual treatment that goes beyond the default slide structure. CSS positions, spacing and decorative elements rebuild the slide to fit the brand world.</p>

<img src="/img/blog/custom-css-and-javascript-for-product-recommendation-quizzes/Screenshot-2020-10-20-at-11.33.57.webp" alt="Creative CSS customisation example: results page styled to match a brand's full visual identity" width="1700" height="933" loading="lazy" decoding="async" style="width:100%;height:auto;border-radius:8px;" />

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 08</span> &nbsp;Creative example: the results page styled to match the brand's full visual identity. The recommendation lands inside a frame that feels designed-for not assembled-from; the page reads as part of the brand, not a third-party widget.</p>

## Adding custom features with JavaScript

JavaScript enables interactivity and dynamic content in your quiz: computed fields based on previous answers, third-party analytics events, callback-driven storefront integrations, custom DOM manipulation, and more.

**The critical platform note:** Built for Shopify and the legacy / multi-platform versions ship completely different JavaScript APIs. They expose different global objects, different cart-integration paths, and different patterns for accessing the DOM. Pick the right one before writing code.

### Quick API comparison

<table style="width:100%;border-collapse:collapse;font-size:14px;margin:24px 0;">
  <thead>
    <tr>
      <th style="background:#16161D;color:#fff;padding:12px 14px;text-align:left;font-size:11px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;">Concern</th>
      <th style="background:#16161D;color:#fff;padding:12px 14px;text-align:left;font-size:11px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;">Built for Shopify</th>
      <th style="background:#16161D;color:#fff;padding:12px 14px;text-align:left;font-size:11px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;">Legacy / WooCommerce / Magento / BigCommerce / Standalone</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;background:#fff;color:#334155;">Global object</td><td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;background:#fff;color:#334155;"><code>quiz</code> (read-only data) + <code>actions</code> (methods)</td><td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;background:#fff;color:#334155;"><code>prq</code> (Vue.js)</td></tr>
    <tr><td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;background:#f8fafc;color:#334155;">Block / slide references</td><td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;background:#f8fafc;color:#334155;">Block IDs visible in Quiz Builder UI (copy icon)</td><td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;background:#f8fafc;color:#334155;">Slide IDs via <code>prq.quizSlides()</code> in browser console</td></tr>
    <tr><td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;background:#fff;color:#334155;">Read an answer</td><td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;background:#fff;color:#334155;"><code>quiz.answers.byBlock['ref'].value</code></td><td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;background:#fff;color:#334155;"><code>prq.getSlideValue(slideId)</code></td></tr>
    <tr><td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;background:#f8fafc;color:#334155;">Recommended products</td><td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;background:#f8fafc;color:#334155;"><code>quiz.resultContext.slotItems</code></td><td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;background:#f8fafc;color:#334155;"><code>prq.recommendedProducts()</code></td></tr>
    <tr><td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;background:#fff;color:#334155;">Cart operations</td><td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;background:#fff;color:#334155;">Native Shopify AJAX: <code>/cart/add.js</code> + <code>actions.syncCart()</code></td><td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;background:#fff;color:#334155;"><code>prq.addAllToCart()</code></td></tr>
    <tr><td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;background:#f8fafc;color:#334155;">DOM access</td><td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;background:#f8fafc;color:#334155;"><code>window.quiz.querySelector()</code> (shadow DOM)</td><td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;background:#f8fafc;color:#334155;">Standard <code>document.querySelector()</code></td></tr>
    <tr><td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;background:#fff;color:#334155;">Event handler</td><td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;background:#fff;color:#334155;"><code>window.quiz.onChange = (event) =&gt; {...}</code></td><td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;background:#fff;color:#334155;">Standard DOM event listeners</td></tr>
    <tr><td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;background:#f8fafc;color:#334155;">Discount code</td><td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;background:#f8fafc;color:#334155;">Native Shopify discount AJAX</td><td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;background:#f8fafc;color:#334155;"><code>prq.setDiscountCode('CODE')</code></td></tr>
    <tr><td style="padding:12px 14px;background:#fff;color:#334155;">Liquid in custom code</td><td style="padding:12px 14px;background:#fff;color:#334155;">Available (Shopify)</td><td style="padding:12px 14px;background:#fff;color:#334155;">Not available</td></tr>
  </tbody>
</table>

### Where to put the code (same UI path on every platform)

Both APIs are accessed from the same two places in the Quiz Builder:

**On the results page:**

1. Navigate to **Results Page Settings** in the Quiz Builder.
2. Open **Advanced Settings**.
3. Find the **Custom JavaScript** section and click **Add**.

**On a specific question:**

1. Open the **question settings** for the slide where you want the script to run.
2. Open **Advanced Settings**.
3. Find the **Custom JavaScript** section and click **Add**.

The toggle button (▷ / ❚❚) next to the editor enables or disables the script without deleting it, which is useful for debugging. Click **Save** (Built for Shopify) or **Publish** (other platforms) to push the code live.

For accelerated authoring, click **✨ Get help with custom JavaScript** to open Quiz Copilot, which can generate platform-appropriate code from a natural-language prompt (e.g. "calculate BMI from the weight and height question and display it on the results page").

## On Built for Shopify

The Built for Shopify version exposes two globals:

- `quiz`: read-only context (answers, variables, progress, current result, recommended products).
- `actions`: methods that mutate state (navigation, answer updates, cart operations).

### Reading quiz state

```javascript
// Get an answer by block reference (copy from the Quiz Builder UI)
const skinType = quiz.answers.byBlock['skin-type'].value;

// Access score variables
const sensitivity = quiz.variables.scores.sensitivity;

// Track quiz progress
const percent = quiz.progress.percentComplete;

// Current results-page data
const slot = quiz.resultContext.slotItems[0];
```

### Triggering navigation and answer mutations

```javascript
// Advance to the next question
actions.next();

// Jump to a specific question or result
actions.overrideNext('results-page-A');

// Set or clear an answer programmatically
actions.setAnswer('budget-tier', 'tier-2');
actions.clearAnswer('budget-tier');
```

### Cart operations (Shopify-native)

```javascript
// Add a product variant to the cart
await fetch('/cart/add.js', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ id: variantId, quantity: 1 }),
});

// Refresh the quiz UI to reflect the cart change
actions.syncCart();
```

### Shadow DOM access

Built for Shopify renders the quiz inside a shadow DOM, which means `document.querySelector()` from the storefront page won't reach quiz internals. Use the quiz's own scoped selector:

```javascript
const myButton = window.quiz.querySelector('#custom-cta');
const someElement = window.quiz.getElementById('bmi-display');
```

### Event handler

```javascript
window.quiz.onChange = (event) => {
  // event.blockRef, event.value, event.selectedLabel
  console.log('Answer changed on', event.blockRef, 'to', event.value);
};
```

### BMI calculator example (Built for Shopify)

```javascript
const weight = quiz.answers.byBlock['weight'].value;
const height = quiz.answers.byBlock['height'].value;
const bmi = weight / (height * height);

const display = window.quiz.getElementById('bmi-result');
display.innerHTML = bmi.toFixed(2);
```

## On Shopify Legacy, WooCommerce, Magento, BigCommerce and Standalone

These platforms use the `prq` global object (Vue.js based). The API is broader in surface area but uses a different conceptual model.

### Inspecting the prq object

Open browser DevTools (F12) → Console and type:

```javascript
console.log(prq);
```

This displays all available methods and properties in the `prq` scope, letting you inspect the quiz data in real time.

### Reading quiz state

```javascript
// List all slides and their responses
prq.quizSlides();

// Get a specific question value (find slide ID via prq.quizSlides() in console)
const skinType = prq.getSlideValue('rgiq0oE');

// Participant info
const email = prq.leadEmail();
const phone = prq.leadPhone();
const name = prq.leadName();

// Results-page data
const results = prq.resultsPage();
const recs = prq.recommendedProducts();
const topPick = prq.mostVotedProduct();
```

### Cart operations and discounts

```javascript
// Add all recommended products to cart
prq.addAllToCart();

// Apply a discount code
prq.setDiscountCode('QUIZ10');

// Proceed to checkout
prq.checkout();
```

### Sample customisations

<table style="width:100%;border-collapse:collapse;font-size:14px;margin:24px 0;">
  <thead>
    <tr>
      <th style="background:#16161D;color:#fff;padding:12px 14px;text-align:left;font-size:11px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;">Action</th>
      <th style="background:#16161D;color:#fff;padding:12px 14px;text-align:left;font-size:11px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;">Code</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;background:#fff;color:#334155;vertical-align:top;">Alert on answer selection</td><td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;background:#fff;color:#334155;"><pre style="background:#f1f5f9;color:#0f172a;padding:12px;border-radius:6px;font-size:12px;white-space:pre-wrap;margin:0;">document.querySelectorAll('.quiz-answer').forEach(answer =&gt; {
  answer.addEventListener('click', () =&gt; {
    alert('Answer selected: ' + answer.textContent);
  });
});</pre></td></tr>
    <tr><td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;background:#f8fafc;color:#334155;vertical-align:top;">Send to Google Analytics</td><td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;background:#f8fafc;color:#334155;"><pre style="background:#f1f5f9;color:#0f172a;padding:12px;border-radius:6px;font-size:12px;white-space:pre-wrap;margin:0;">document.querySelectorAll('.quiz-answer').forEach(answer =&gt; {
  answer.addEventListener('click', () =&gt; {
    gtag('event', 'quiz_answer', {
      event_category: 'Quiz',
      event_label: answer.textContent,
      value: 1
    });
  });
});</pre></td></tr>
    <tr><td style="padding:12px 14px;background:#fff;color:#334155;vertical-align:top;">BMI calculator</td><td style="padding:12px 14px;background:#fff;color:#334155;"><pre style="background:#f1f5f9;color:#0f172a;padding:12px;border-radius:6px;font-size:12px;white-space:pre-wrap;margin:0;">var element = document.getElementById("body_mass_index_calculation");
var weight = prq.getSlideValue("rgiq0oE");
var height = prq.getSlideValue("0Mi2qLN");
var bmi = weight / (height * height);
element.innerHTML = bmi.toFixed(2);</pre></td></tr>
  </tbody>
</table>

### Callback function for storefront-side integrations

For storefront integrations (custom results pages, third-party analytics, ad-platform conversion events), use the callback-function pattern. Add this to your store's theme, ideally just before the closing `</head>` tag:

```html
<script>
  function prqQuizCallback(quizResponse) {
    console.log(quizResponse);
    // quizResponse is a JSON object containing:
    // - all questions asked
    // - customer's responses
    // - customer tags assigned
    // - products recommended
    // - results page block layout
  }
</script>
```

The callback fires when the quiz is completed, giving you access to the full response JSON for downstream use (custom analytics events, server-side webhook posts, alternative results-page rendering, etc.).

## Best practices

A few principles that apply across both APIs and both layers:

- **Use browser DevTools.** Inspect elements with right-click → Inspect to find the right CSS selector, and use the Console tab to debug JavaScript in real time. On Built for Shopify, remember that DOM queries scoped to the quiz need `window.quiz.querySelector()` rather than the regular `document.querySelector()` because the quiz lives inside a shadow DOM.
- **Version your changes.** Use the [quiz version history](https://docs.revenuehunt.com/how-to-guides/restore-quiz-progress/) to track CSS/JS changes across published versions; you can roll back to the most successful version if a customisation regresses conversion.
- **Optimise for performance.** Minify large CSS blocks, avoid excessive DOM manipulation in JS, debounce event handlers. The quiz already loads fast natively; don't undo that with bloated custom code.
- **Test across browsers and devices.** Most quiz traffic is mobile; test on iOS Safari and Android Chrome specifically. Picture-choice question grids and animated transitions are the two areas most likely to render differently between browsers.
- **Comment your code.** The next person who edits the custom-CSS block on your quiz will thank you. Especially if that next person is future-you in six months.

## Frequently asked questions

### Which JavaScript API do I use on my platform?

If you're on **Built for Shopify**, use the `quiz` (data) and `actions` (methods) globals. If you're on **Shopify Legacy, WooCommerce, Magento, BigCommerce, or Standalone**, use the `prq` global. The two are not interchangeable: `prq` won't exist on Built for Shopify, and `quiz` / `actions` won't exist on the legacy platforms. Confirm which one is available by typing `console.log(quiz)` or `console.log(prq)` in your browser console with the quiz open.

### Where do I find a block reference (Built for Shopify) or slide ID (Legacy)?

On **Built for Shopify**: Block IDs are visible directly in the Quiz Builder settings panel for each question, with a copy icon next to them. On **Legacy / multi-platform**: open the quiz in preview or live, open browser DevTools (F12), go to Console, type `prq.quizSlides()` and expand the results to find each slide's `id` property.

### Can I use Liquid in custom code blocks?

Only on **Built for Shopify** (because Liquid is a Shopify-only templating layer). The legacy / multi-platform versions support JavaScript and HTML only. The docs explicitly state: "Liquid is not available in WooCommerce / Magento / BigCommerce / Standalone."

### How do I add a product to the cart from custom JavaScript?

On **Built for Shopify**: use the native Shopify Cart AJAX API (`fetch('/cart/add.js', {...})`) and call `actions.syncCart()` afterwards to refresh the quiz UI with the updated cart state. On **Legacy / multi-platform**: use `prq.addAllToCart()` to add all recommended products, or call `prq.addToCart(productId, quantity)` for a specific product.

### How do I debug if my custom code isn't running?

Three quick checks: (1) confirm the script is enabled via the ▷ / ❚❚ toggle in the editor; (2) confirm you published / saved the change (Save on Built for Shopify, Publish on others); (3) open browser DevTools Console, where `prq is not defined` means you're using the wrong API for your platform and `quiz is not defined` means the same in the opposite direction. The third common cause is querying the DOM with `document.querySelector()` on Built for Shopify, where the quiz lives inside a shadow DOM and needs `window.quiz.querySelector()` instead.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Which JavaScript API do I use on my platform?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you're on Built for Shopify, use the quiz (data) and actions (methods) globals. If you're on Shopify Legacy, WooCommerce, Magento, BigCommerce, or Standalone, use the prq global. The two are not interchangeable: prq won't exist on Built for Shopify, and quiz / actions won't exist on the legacy platforms. Confirm which one is available by typing console.log(quiz) or console.log(prq) in your browser console with the quiz open."
      }
    },
    {
      "@type": "Question",
      "name": "Where do I find a block reference (Built for Shopify) or slide ID (Legacy)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "On Built for Shopify: Block IDs are visible directly in the Quiz Builder settings panel for each question, with a copy icon. On Legacy / multi-platform: open the quiz in preview or live, open browser DevTools, go to Console, type prq.quizSlides() and expand the results to find each slide's id property."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use Liquid in custom code blocks?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Only on Built for Shopify (because Liquid is a Shopify-only templating layer). The legacy / multi-platform versions support JavaScript and HTML only. The docs explicitly state Liquid is not available in WooCommerce, Magento, BigCommerce or Standalone."
      }
    },
    {
      "@type": "Question",
      "name": "How do I add a product to the cart from custom JavaScript?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "On Built for Shopify: use the native Shopify Cart AJAX API and call actions.syncCart() afterwards to refresh the quiz UI with the updated cart state. On Legacy / multi-platform: use prq.addAllToCart() to add all recommended products, or call prq.addToCart(productId, quantity) for a specific product."
      }
    },
    {
      "@type": "Question",
      "name": "How do I debug if my custom code isn't running?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Three quick checks: confirm the script is enabled via the play/pause toggle in the editor; confirm you published or saved the change; open browser DevTools Console (prq is not defined means you're using the wrong API for your platform, quiz is not defined means the same in the opposite direction). The third common cause is querying the DOM with document.querySelector() on Built for Shopify, where the quiz lives inside a shadow DOM and needs window.quiz.querySelector() instead."
      }
    }
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to customise a RevenueHunt product quiz with CSS",
  "description": "Style a RevenueHunt product recommendation quiz with custom CSS, from opening the editor to advanced selectors and animations.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Open the custom CSS editor",
      "text": "In the Quiz Builder, go to the Quiz Design tab, scroll to the Custom CSS section, and click Add to open the CSS console.",
      "url": "https://revenuehunt.com/custom-css-and-javascript-for-product-recommendation-quizzes/#styling-with-css"
    },
    {
      "@type": "HowToStep",
      "name": "Add basic customisations",
      "text": "Insert CSS rules to change fonts, colours, backgrounds, and buttons. Find any element's selector by right-clicking it and choosing Inspect in your browser's Developer Tools."
    },
    {
      "@type": "HowToStep",
      "name": "Apply advanced selectors and animations",
      "text": "Scope rules to the whole quiz or a single question using the question ID (for example #question-AbC7Zde), and use pseudo-classes and animations for effects like converting picture choices to icons or hiding product variants."
    }
  ]
}
</script>

## Where this fits

Custom CSS and JavaScript are the safety valve when the Quiz Builder's built-in design and logic panels don't cover an edge case. Most stores never need to write a line of custom code; the ones that do are usually agencies running multi-brand setups, developers integrating with a bespoke storefront, or teams chasing the last few percentage points of conversion through fine-grained behavioural tweaks.

If you write something interesting and want to share it, or want help getting a specific customisation working, [reach out to our team](https://revenuehunt.com/contact/). We love seeing how merchants extend the quiz, and we'll happily review code or suggest the cleanest pattern for what you're trying to do.

For the foundations, see [how to build a successful product recommendation quiz](https://revenuehunt.com/how-to-build-a-successful-ecommerce-quiz/). For the question types you can target with custom selectors, see [product quiz question types: the complete reference](https://revenuehunt.com/product-quiz-question-types/). For the recommendation logic your custom code reads from, see [the six recommendation systems compared](/product-quiz-recommendation-systems/), and for the platform split behind the two JavaScript APIs, see [RevenueHunt is Built for Shopify: what's different vs Legacy](/revenuehunt-built-for-shopify/). For deeper docs:

- [Customise quiz design](https://docs.revenuehunt.com/how-to-guides/customize-quiz-design/)
- [Add JavaScript to the quiz](https://docs.revenuehunt.com/how-to-guides/add-javascript/)
- [Use the callback function](https://docs.revenuehunt.com/how-to-guides/use-callback-function/)
