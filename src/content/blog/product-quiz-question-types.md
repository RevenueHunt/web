---
title: "Product quiz question types: 19 explained"
description: "All 19 question types in the RevenueHunt Quiz Builder, grouped by purpose: messages, choices, scales, text, numeric, personal info, legal and file upload."
pubDate: 2024-08-08T06:36:50Z
updatedDate: 2026-06-19T13:00:00Z
tags:
  - "ecommerce"
  - "product recommendation quiz"
  - "shopify"
  - "quiz design"
  - "zero-party data"
categories:
  - "eCommerce"
  - "Tips &amp; Tricks"
author: "Paulina Chodura"
legacySlug: "product-quiz-question-types"
legacyId: 9235
legacyUrl: "https://revenuehunt.com/questions-every-product-recommendation-quiz-should-have-and-how-to-build-them/"
featuredImage: "/img/blog/product-quiz-question-types/blogtile_quiz-questions.webp"
draft: false
---

The RevenueHunt Quiz Builder ships with **19 question types** organised into seven functional groups: message slides, choice questions, scale and rating questions, open text inputs, numeric and date inputs, personal info collection, legal/GDPR, and file upload. Together they're how a [shoppable quiz](/glossary/shoppable-quiz/) collects the right signal for the recommendation. This reference walks through each one with what it does, when to use it, and an example. All 19 types are available with identical capability on every platform ([Built for Shopify](/revenuehunt-built-for-shopify/), Shopify Legacy, WooCommerce, Magento, BigCommerce and Standalone).

<div class="aspect-video overflow-hidden rounded-xl bg-slate-900 not-prose my-6"><button type="button" class="yt-facade group relative block h-full w-full cursor-pointer overflow-hidden" data-yt-id="pizAes15vWg" aria-label="Play video"><picture><source srcset="https://i.ytimg.com/vi_webp/pizAes15vWg/maxresdefault.webp" type="image/webp" /><img src="https://i.ytimg.com/vi/pizAes15vWg/maxresdefault.jpg" alt="" width="1280" height="720" loading="lazy" decoding="async" class="h-full w-full object-cover" /></picture><span class="absolute inset-0 flex items-center justify-center bg-black/10 transition group-hover:bg-black/20"><span class="flex h-20 w-20 items-center justify-center rounded-full bg-black/70 shadow-lg transition group-hover:scale-105 group-hover:bg-[#FF0000]"><svg class="ml-0.5 h-9 w-9 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg></span></span></button></div>

<div style="margin:32px 0;padding:24px 28px;background:#f8fafc;border-left:4px solid #16161D;border-radius:6px;">
  <p style="margin:0 0 14px;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;">What you'll learn</p>
  <ul style="list-style:none;padding:0;margin:0;">
    <li style="display:flex;gap:14px;padding:8px 0;font-size:15px;color:#0f172a;line-height:1.55;border-top:1px solid #e2e8f0;"><span style="flex-shrink:0;font-variant-numeric:tabular-nums;font-weight:700;color:#16161D;min-width:24px;">01</span><span>All 19 question types in the Quiz Builder, with a use case and example for each.</span></li>
    <li style="display:flex;gap:14px;padding:8px 0;font-size:15px;color:#0f172a;line-height:1.55;border-top:1px solid #e2e8f0;"><span style="flex-shrink:0;font-variant-numeric:tabular-nums;font-weight:700;color:#16161D;min-width:24px;">02</span><span>Which question types are best for which goal: routing logic, data capture, segmentation, social proof, compliance.</span></li>
    <li style="display:flex;gap:14px;padding:8px 0;font-size:15px;color:#0f172a;line-height:1.55;border-top:1px solid #e2e8f0;"><span style="flex-shrink:0;font-variant-numeric:tabular-nums;font-weight:700;color:#16161D;min-width:24px;">03</span><span>When to combine question types (joined slides for personal info, picture choice for visual decisions, scales for quantifiable preferences).</span></li>
    <li style="display:flex;gap:14px;padding:8px 0;font-size:15px;color:#0f172a;line-height:1.55;border-top:1px solid #e2e8f0;"><span style="flex-shrink:0;font-variant-numeric:tabular-nums;font-weight:700;color:#16161D;min-width:24px;">04</span><span>Best practices for clear, visual, personalised question design that compounds completion rate and downstream segmentation.</span></li>
  </ul>
</div>

For the foundations that produce a high-converting quiz, see [how to build a successful product recommendation quiz](https://revenuehunt.com/how-to-build-a-successful-ecommerce-quiz/). For the platform data on optimal question count (6-12, with 9-12 the sweet spot at 11.0% conversion), see the same guide.

**Table of contents:**

- [Message slides (3 types)](#message-slides-3-types)
- [Choice questions (4 types)](#choice-questions-4-types)
- [Scale and rating questions (3 types)](#scale-and-rating-questions-3-types)
- [Open text questions (2 types)](#open-text-questions-2-types)
- [Numeric and date inputs (2 types)](#numeric-and-date-inputs-2-types)
- [Personal information collection (3 types)](#personal-information-collection-3-types)
- [Legal and compliance (1 type)](#legal-and-compliance-1-type)
- [File upload (1 type)](#file-upload-1-type)
- [Best practices for designing questions](#best-practices-for-designing-questions)
- [Frequently asked questions](#frequently-asked-questions)
- [Where this fits](#where-this-fits)

## Message slides (3 types)

Message slides don't ask a question; they set context. Use them at the start, in the middle, and at the end of the quiz to frame the experience. Every [product recommendation quiz](/) benefits from at least one message slide to orient the customer before the questions begin.

### Welcome Message

The first slide. Explains the quiz's purpose, sets a positive tone, and encourages the customer to start. The "Start Quiz" button is built in.

![Quiz Builder Welcome Message slide with introductory text and the Start Quiz button](/img/blog/product-quiz-question-types/welcomeslide.gif)

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 01</span> &nbsp;The Welcome Message slide. The opening frame of every quiz: sets the tone, states the value exchange, and primes the customer with the Start Quiz button.</p>

**Example:** "Welcome to our personalised skincare quiz. Answer a few questions to find the perfect products for your skin type."

<div style="margin:24px 0;padding:18px 24px;background:#f8fafc;border-left:4px solid #16161D;border-radius:6px;">
  <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;">Tip</p>
  <p style="margin:0 0 6px;font-size:15px;line-height:1.55;color:#0f172a;"><a href="https://docs.revenuehunt.com/how-to-guides/customize-quiz-design/#adding-images-and-videos" style="color:#16161D;text-decoration:underline;">Upload an introduction video</a> to the welcome slide to grab attention and reduce drop-off. See <a href="https://revenuehunt.com/video-quizzes/" style="color:#16161D;text-decoration:underline;">video quizzes: a revenue-led alternative to video tools</a> for the per-slide video playbook.</p>
</div>

### Statement

A text-and-button slide that delivers context or instructions mid-quiz. Use it between question groups as a soft transition, or before a personal-info ask to explain why you're asking.

![Quiz Builder Statement slide with explanatory text and a Continue button](/img/blog/product-quiz-question-types/statmentslide.webp)

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 02</span> &nbsp;A Statement slide used mid-quiz. No question, just context: a soft transition between question groups or a short explainer before an unusual ask.</p>

**Example:** "Great, now let's get into some details about your skin."

### Thank You Message

The last slide before the results page. Closes the quiz on a positive note, optionally lets the customer revise answers, and routes them to the recommendation.

![Quiz Builder Thank You Message slide with closing text and the See Results button](/img/blog/product-quiz-question-types/thankyouslide.gif)

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 03</span> &nbsp;The Thank You Message slide. The closing frame before the recommendation lands: a moment to reinforce the brand voice and to offer a final revise-answers option.</p>

**Example:** "Thank you for completing the quiz. Click below to see your personalised product recommendations."

## Choice questions (4 types)

The workhorse questions of the quiz. Use these for routing logic and tag-based segmentation.

### Multiple Choice

Several clickable options; the customer picks one or many. Configurable as single-select or multi-select in question settings. The most-used question type across the platform.

![Quiz Builder Multiple Choice slide with single-select clickable options](/img/blog/product-quiz-question-types/multiplechoiceslide2.gif)

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 04</span> &nbsp;The Multiple Choice question type. The workhorse for routing logic and tag-driven segmentation; configurable as single- or multi-select.</p>

**Example:** "Which skincare products do you currently use?" with options Cleanser / Toner / Serum / Moisturiser.

<div style="margin:24px 0;padding:18px 24px;background:#f8fafc;border-left:4px solid #16161D;border-radius:6px;">
  <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;">Tip</p>
  <p style="margin:0 0 6px;font-size:15px;line-height:1.55;color:#0f172a;">Toggle multi-select on any choice slide via <a href="https://docs.revenuehunt.com/reference/quiz-builder/#question-settings" style="color:#16161D;text-decoration:underline;">question settings</a>. 3-6 answer choices is the sweet spot per platform data.</p>
</div>

### Picture Choice

Multiple choice rendered with images as the clickable answer tiles. Best for decisions that are easier to make visually than to describe in words: style preference, foundation undertone, hair texture, product packaging.

![Quiz Builder Picture Choice slide with image-based clickable answer options](/img/blog/product-quiz-question-types/picturechoiceslide.webp)

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 05</span> &nbsp;A Picture Choice question. Best for decisions easier made visually than verbally: style preferences, undertone, room aesthetic, packaging.</p>

**Example:** "Which of these styles appeals to you the most?" with 4 styled-room photos.

### Dropdown

Multiple choice rendered as a compact dropdown menu. Best when you have many options (10+) that don't fit comfortably as clickable tiles: country list, specific health concerns, skin tones, ingredient sensitivities.

![Quiz Builder Dropdown slide with a collapsed dropdown showing many options on click](/img/blog/product-quiz-question-types/dropdownslide.webp)

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 06</span> &nbsp;The Dropdown question. Compact list for large option sets (10+), where clickable tiles would overwhelm the slide.</p>

**Example:** "What is your primary skin concern?" with options Acne / Aging / Dryness / Sensitivity / Brightness / etc.

### Yes/No

Binary choice with two clickable options. Best for qualifying questions ("Do you use sunscreen daily?") and for marketing-consent questions where the choice should feel low-stakes.

![Quiz Builder Yes/No slide with two clickable options](/img/blog/product-quiz-question-types/Screenshot-2024-07-02-092209.webp)

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 07</span> &nbsp;The Yes/No question. Binary choice for qualifying gates and low-stakes consent moments.</p>

**Example:** "Do you use sunscreen daily?"

## Scale and rating questions (3 types)

Use these when the customer's answer is on a continuum rather than a discrete option. Particularly useful for capturing intensity preferences (mild vs strong) or satisfaction levels.

### Slider bar

A horizontal slider that lets the customer pick a value between two extremes. Good for "How much…" type questions where any integer in the range is a valid answer.

**Example:** "How important is it for the products to be unscented?" on a 1-to-10 slider.

### Buttons scale

A row of value buttons (typically 1-5 or 1-10) that the customer clicks to indicate intensity or frequency. Faster to answer than a slider on mobile because the tap target is bigger.

**Example:** "How often do you wear makeup?" on a 1-5 scale (Never to Daily).

### Rating scale

A star-rating scale (typically 1-5 stars) for satisfaction or quality questions. Best for asking customers to rate their current experience (with a product, with their skin, with their routine) before recommending an improvement.

**Example:** "How satisfied are you with your current haircare routine?" 1-5 stars.

## Open text questions (2 types)

Use these sparingly. Open text is harder to segment on than structured choices, but it's the right tool when you need the customer's specific phrasing (a goal, a concern, a product they tried).

### Short-text

A single-line text input for brief answers (a goal, a product name, a city).

![Quiz Builder Short-text slide with a single-line text input field](/img/blog/product-quiz-question-types/shorttextslide2.webp)

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 08</span> &nbsp;A Short-text input. For brief open-ended answers: a goal, a product name, a city. Use sparingly; open text is harder to segment on than structured choices.</p>

**Example:** "What is your main skincare goal?"

### Multi-line Text

A multi-line text area for longer answers (a routine description, detailed feedback, a custom requirement).

![Quiz Builder Multi-line Text slide with a multi-line text area for longer responses](/img/blog/product-quiz-question-types/openlongquestion.gif)

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 09</span> &nbsp;The Multi-line Text area. For longer-form open input: a routine description, a custom requirement, detailed feedback.</p>

**Example:** "Describe your current skincare routine."

## Numeric and date inputs (2 types)

### Number

A numeric input for quantifiable answers (count, age, frequency, income tier).

![Quiz Builder Number slide with a numeric input field](/img/blog/product-quiz-question-types/numberslide.webp)

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 10</span> &nbsp;The Number input. Quantifiable answers: count, age, frequency, income tier.</p>

**Example:** "How many skincare products do you use daily?"

### Date

A date picker for time-specific answers (birthday, subscription start date, event date, last refresh of a routine).

![Quiz Builder Date slide with a date picker showing calendar selection](/img/blog/product-quiz-question-types/dateslide.gif)

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 11</span> &nbsp;The Date picker. Time-specific answers like birthday, subscription start, or last routine refresh.</p>

**Example:** "When is your birthday?"

## Personal information collection (3 types)

These are the conversion-critical fields. Email capture in particular is the single highest-leverage field: platform data shows **71% of top-converting quizzes collect email** and **75% of those make it required**.

<div style="margin:24px 0;padding:18px 24px;background:#f8fafc;border-left:4px solid #16161D;border-radius:6px;">
  <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;">Tip</p>
  <p style="margin:0 0 6px;font-size:15px;line-height:1.55;color:#0f172a;"><a href="https://docs.revenuehunt.com/how-to-guides/join-questions/" style="color:#16161D;text-decoration:underline;">Join Name + Email + Phone into a single slide</a> for smoother personal-data collection rather than three separate steps.</p>
</div>

![Quiz Builder showing Name, Email and Phone questions joined into a single slide](/img/blog/product-quiz-question-types/joinedslides.webp)

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 12</span> &nbsp;Name, Email and Phone joined into a single slide via the Quiz Builder's join-questions feature. Reduces the perceived friction of the personal-info ask and consistently improves completion rate vs three separate steps.</p>

### Name

Captures the customer's first name (or full name) for personalisation in subsequent slides and downstream email flows.

![Quiz Builder Name slide with a single-line input field](/img/blog/product-quiz-question-types/nameslide.webp)

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 13</span> &nbsp;The Name question. Captures the customer's first or full name for downstream personalisation in later slides and email flows.</p>

**Example:** "What is your name?"

### Email Address

Captures the customer's email. Almost always the most important field on the quiz. Make it required unless you have a specific reason not to. See [smart ways to ask for marketing consent in a product quiz](https://revenuehunt.com/product-quiz-marketing-consent/) for the consent-design playbook.

![Quiz Builder Email Address slide with an email input field and consent options](/img/blog/product-quiz-question-types/emailslide.webp)

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 14</span> &nbsp;The Email Address question. The single highest-leverage capture on the quiz; platform data shows 71% of top-converting quizzes collect email and 75% of those make it required.</p>

**Example:** "What is your email address?" or "Get the most out of our recommendations. Sign up to receive expert advice and your personalised results."

### Phone Number

Captures the customer's phone number for SMS marketing or customer-support callbacks. Only request this if you have an SMS flow set up that justifies the higher friction; mandatory phone fields measurably drop completion rate on most stores.

![Quiz Builder Phone Number slide with a phone-format input field](/img/blog/product-quiz-question-types/phoneslide.webp)

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 15</span> &nbsp;The Phone Number question. Raises friction; only request when an SMS flow is configured to use it.</p>

**Example:** "What is your phone number?" or "Get the recommendations on your phone. Leave your number below."

## Legal and compliance (1 type)

### Legal Terms/GDPR

A slide presenting legal terms or GDPR-related information with options to accept or decline. Use it to capture explicit marketing-data-processing consent for EU customers. For the full consent-design playbook including placement (before vs after the quiz), see [smart ways to ask for marketing consent in a product quiz](https://revenuehunt.com/product-quiz-marketing-consent/).

![Quiz Builder Legal/GDPR slide with terms text and Accept/Decline buttons](/img/blog/product-quiz-question-types/legalslide.webp)

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 16</span> &nbsp;The Legal Terms / GDPR question. Captures explicit consent with Accept and Decline options and a privacy-policy link, satisfying the four GDPR consent pillars at the quiz layer.</p>

**Example:** "Do you agree to receive our personalised recommendations and updates?" with Accept / Decline buttons and a link to the privacy policy.

<div style="margin:24px 0;padding:18px 24px;background:#f8fafc;border-left:4px solid #16161D;border-radius:6px;">
  <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;">Tip</p>
  <p style="margin:0 0 6px;font-size:15px;line-height:1.55;color:#0f172a;">Link to your privacy policy inside the consent text using <a href="https://docs.revenuehunt.com/how-to-guides/use-markdown/" style="color:#16161D;text-decoration:underline;">Markdown</a> so the customer can review the policy without leaving the quiz.</p>
</div>

## File upload (1 type)

### File Upload

Lets the customer upload a file as their response. Useful for before/after photos (skincare consultations), document submission (custom orders, professional service intake), or visual context (room photos for furniture, hair photos for haircare).

![Quiz Builder File Upload slide with a file selector for image and document uploads](/img/blog/product-quiz-question-types/fileuploadslide.webp)

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 17</span> &nbsp;The File Upload question. For photos, documents or visual context: skincare consultation snapshots, room photos for furniture, hair photos for haircare.</p>

**Example:** "Upload a photo of your skin for a more accurate recommendation."

## Best practices for designing questions

A few principles that apply across every question type:

**Keep it simple.** Use clear, plain language. Avoid jargon that the customer wouldn't recognise. "Which of the following dermatological presentations affects you?" is wrong; "What's your main skin concern?" is right.

**Make it visual where it helps.** Picture Choice and image-rich Multiple Choice consistently produce higher completion rates than pure text. But don't force images where text is more direct; "How often do you exercise?" doesn't need photo answer choices.

**Personalise with information recalls.** Pull the customer's name, stated concern, or preference from earlier answers into later slides and the results page. This makes the experience feel like a consultation rather than a form.

<div style="margin:24px 0;padding:18px 24px;background:#f8fafc;border-left:4px solid #16161D;border-radius:6px;">
  <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;">Tip</p>
  <p style="margin:0 0 6px;font-size:15px;line-height:1.55;color:#0f172a;">Use <a href="https://docs.revenuehunt.com/how-to-guides/use-information-recalls/" style="color:#16161D;text-decoration:underline;">Information Recalls</a> to reference the customer's earlier answers throughout the rest of the quiz and on the results page.</p>
</div>

**Tag every choice.** Every quiz answer that should influence the recommendation or trigger downstream segmentation needs a [customer tag](https://revenuehunt.com/how-to-use-customer-tags-in-product-quizzes-to-maximize-sales/) attached to it. The tags become the structured filter logic that powers Klaviyo segmentation and Shopify Flow automations.

**Stay in the 6-12 question sweet spot.** Platform data across 20,000+ stores shows the 9-12 band converts highest at 11.0%, with 6-8 at 10.4% and 1-5 underperforming at 9.8%. Shorter is not better; relevant is better.

## Frequently asked questions

### How many question types are in the RevenueHunt Quiz Builder?

19 types, grouped into seven functional categories: message slides (Welcome, Statement, Thank You), choice questions (Multiple Choice, Picture Choice, Dropdown, Yes/No), scale and rating questions (Slider bar, Buttons scale, Rating scale), open text inputs (Short-text, Multi-line Text), numeric and date inputs (Number, Date), personal info collection (Name, Email, Phone), legal/compliance (Legal/GDPR), and file upload.

### Are all question types available on every platform?

Yes. All 19 question types are available with identical capability on Built for Shopify, Shopify Legacy, WooCommerce, Magento, BigCommerce and the Standalone version. There are no platform-specific feature gates on question types.

### Which question types should every product quiz include?

At a minimum: a Welcome Message (to set the tone), 4-8 Multiple Choice questions (for the routing logic that produces the recommendation), an Email Address slide (the single highest-leverage capture), and a Thank You Message before the results. Picture Choice, scales, Number, Date and Legal/GDPR are situational and depend on your category.

### What's the difference between Slider bar, Buttons scale and Rating scale?

All three capture a value along a continuum, but they differ in interaction model. Slider bar uses a drag-to-position control (good on desktop, sometimes fiddly on mobile). Buttons scale is a row of value buttons (faster taps on mobile). Rating scale uses stars (best for satisfaction or quality questions where the metaphor matches).

### Can I combine multiple question types on one slide?

Yes, for personal information collection. The Quiz Builder's "join questions" feature lets you combine Name + Email + Phone (or any subset) into a single slide rather than three separate steps. This reduces the perceived friction and consistently improves the completion rate of the personal-info ask.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How many question types are in the RevenueHunt Quiz Builder?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "19 types, grouped into seven functional categories: message slides (Welcome, Statement, Thank You), choice questions (Multiple Choice, Picture Choice, Dropdown, Yes/No), scale and rating questions (Slider bar, Buttons scale, Rating scale), open text inputs (Short-text, Multi-line Text), numeric and date inputs (Number, Date), personal info collection (Name, Email, Phone), legal/compliance (Legal/GDPR), and file upload."
      }
    },
    {
      "@type": "Question",
      "name": "Are all question types available on every platform?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. All 19 question types are available with identical capability on Built for Shopify, Shopify Legacy, WooCommerce, Magento, BigCommerce and the Standalone version. There are no platform-specific feature gates on question types."
      }
    },
    {
      "@type": "Question",
      "name": "Which question types should every product quiz include?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "At a minimum: a Welcome Message (to set the tone), 4-8 Multiple Choice questions (for the routing logic that produces the recommendation), an Email Address slide (the single highest-leverage capture), and a Thank You Message before the results. Picture Choice, scales, Number, Date and Legal/GDPR are situational and depend on your category."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between Slider bar, Buttons scale and Rating scale?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All three capture a value along a continuum, but they differ in interaction model. Slider bar uses a drag-to-position control (good on desktop, sometimes fiddly on mobile). Buttons scale is a row of value buttons (faster taps on mobile). Rating scale uses stars (best for satisfaction or quality questions where the metaphor matches)."
      }
    },
    {
      "@type": "Question",
      "name": "Can I combine multiple question types on one slide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, for personal information collection. The Quiz Builder's join-questions feature lets you combine Name, Email and Phone (or any subset) into a single slide rather than three separate steps. This reduces the perceived friction and consistently improves the completion rate of the personal-info ask."
      }
    }
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "RevenueHunt Quiz Builder question types",
  "description": "All 19 question types available in the RevenueHunt Quiz Builder, grouped into seven functional categories.",
  "numberOfItems": 19,
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Welcome Message", "description": "Opening message slide with a Start Quiz button; sets context and tone."},
    {"@type": "ListItem", "position": 2, "name": "Statement", "description": "Mid-quiz text-and-button slide that delivers context or instructions between question groups."},
    {"@type": "ListItem", "position": 3, "name": "Thank You Message", "description": "Closing message slide before the results page; routes the customer to the recommendation."},
    {"@type": "ListItem", "position": 4, "name": "Multiple Choice", "description": "Single- or multi-select clickable answer options; the workhorse question type for routing logic and tagging."},
    {"@type": "ListItem", "position": 5, "name": "Picture Choice", "description": "Multiple choice rendered with images as the clickable tiles; best for visual decisions."},
    {"@type": "ListItem", "position": 6, "name": "Dropdown", "description": "Multiple choice rendered as a compact dropdown menu; best when there are many options (10+)."},
    {"@type": "ListItem", "position": 7, "name": "Yes/No", "description": "Binary choice with two clickable options; best for qualifying questions and low-stakes consent."},
    {"@type": "ListItem", "position": 8, "name": "Slider bar", "description": "Horizontal slider for picking a value between two extremes; good for any-integer-in-range answers."},
    {"@type": "ListItem", "position": 9, "name": "Buttons scale", "description": "Row of value buttons (1-5 or 1-10) for intensity or frequency; faster on mobile than a slider."},
    {"@type": "ListItem", "position": 10, "name": "Rating scale", "description": "Star-rating scale (typically 1-5 stars) for satisfaction or quality questions."},
    {"@type": "ListItem", "position": 11, "name": "Short-text", "description": "Single-line text input for brief open-ended answers (a goal, a product name, a city)."},
    {"@type": "ListItem", "position": 12, "name": "Multi-line Text", "description": "Multi-line text area for longer open-ended answers (a routine description, custom requirement)."},
    {"@type": "ListItem", "position": 13, "name": "Number", "description": "Numeric input for quantifiable answers (count, age, frequency, income tier)."},
    {"@type": "ListItem", "position": 14, "name": "Date", "description": "Date picker for time-specific answers (birthday, subscription start, event date)."},
    {"@type": "ListItem", "position": 15, "name": "Name", "description": "Captures first or full name for personalisation in later slides and email flows."},
    {"@type": "ListItem", "position": 16, "name": "Email Address", "description": "Captures the email; the single highest-leverage capture field on the quiz."},
    {"@type": "ListItem", "position": 17, "name": "Phone Number", "description": "Captures phone number for SMS marketing or callbacks; make optional unless SMS is configured."},
    {"@type": "ListItem", "position": 18, "name": "Legal Terms/GDPR", "description": "Slide presenting legal terms with Accept/Decline buttons for explicit consent capture."},
    {"@type": "ListItem", "position": 19, "name": "File Upload", "description": "Lets the customer upload a file as a response (photos for consultations, documents, visual context)."}
  ]
}
</script>

## Where this fits

Question type selection is upstream of every downstream quiz mechanic. The right question types make tag-based segmentation precise, the recommendations confident, and the email follow-up personalised. The wrong question types (or too many of any one type) compound friction at every step.

For the foundations of a high-converting quiz, see [how to build a successful product recommendation quiz](/how-to-build-a-successful-ecommerce-quiz/). For the mistakes that erode quiz conversion, see [product quiz mistakes ranked by industry data](/quiz-creation-mistakes-that-hurt-your-ecommerce-sales/). For the customer-tag layer that makes question answers into Klaviyo segments, see [how to use customer tags in product quizzes](/how-to-use-customer-tags-in-product-quizzes-to-maximize-sales/). For the discount, video and consent layers, see [product quiz discounts](/product-quiz-discounts/), [video quizzes](/video-quizzes/) and [product quiz marketing consent](/product-quiz-marketing-consent/). For the underlying recommendation engine choices that match question types to outcomes, see [voting, scoring or fixed: 6 product quiz recommendation systems compared](/product-quiz-recommendation-systems/). For the specifics of scoring and personality-type quizzes, see [scoring and personality-type quiz setup on RevenueHunt](/scoring-quiz-setup/).

[Install RevenueHunt: Recommender Quiz for Shopify](https://apps.shopify.com/product-recommendation-quiz-revenuehunt/install?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=question_types) and start building your first quiz today. Free plan available.
