---
title: "DECEMBER 2025 – Chart blocks, lighter quizzes, and a much smarter Copilot."
description: "December was all about power plus performance: making quizzes lighter and faster, giving you deeper analytics, and massively upgrading how you customize with code, Liquid, and JS — all backed by a much smarter Quiz Copilot."
pubDate: 2025-12-11T09:50:39Z
updatedDate: 2026-03-25T20:55:55Z
tags: []
categories:
  - "Product Updates"
author: "Paulina Chodura"
legacySlug: "december-2025-product-updates"
legacyId: 11878
legacyUrl: "https://revenuehunt.com/december-2025-product-updates/"
featuredImage: "/img/blog/december-2025-product-updates/3.png"
draft: false
---

December was all about _power plus performance_: making quizzes lighter and faster, giving you deeper analytics, and massively upgrading how you customize with code, Liquid, and JS — all backed by a **much smarter Quiz Copilot**.

We shipped fully customizable chart blocks, refactored sliders into flexible building blocks, cut the quiz renderer size almost in half, and overhauled Copilot so it can validate Klaviyo templates, quiz logic, and more with much higher accuracy.

### Highlights

-   ****Massive Copilot refactor –**** We’ve rebuilt Quiz Copilot behind the scenes so it behaves more like a smart assistant that “gets it right” the first time. Copilot responds quicker and is less likely to “forget” context in longer conversations. Whether you ask it to debug analytics, build a quiz from scratch, or fix a template, it now picks the _right_ tools for the job instead of trying everything at once. You’ll see fewer irrelevant suggestions and more precise, step-by-step guidance tailored to what you’re actually trying to do. [Read more](https://docs.revenuehunt.com/how-to-guides/use-quiz-copilot/)
-   **One place to ask for help** – We’ve moved support into the Copilot chat, so you can build quizzes, fix issues, and ask questions from a single conversation. [Read more](https://docs.revenuehunt.com/how-to-guides/use-quiz-copilot/)
-   **Chart blocks in questions and results** – You can now add chart blocks directly inside quiz questions and result sections, including bar, radar, and gauge-style charts. Use them to visualize routines, scores, or “before/after” states with fully brand-aligned styling. [Read more](https://docs.revenuehunt.com/reference/quiz-builder/questions/#block-settings)
-   **Refactored sliders** – Sliders are now three independent blocks: Slider (continuous values); Button scale (discrete options like 1–5); Rating (stars or similar). nThis gives you a lot more control over how you collect scaled answers and how they look. [Read more](https://docs.revenuehunt.com/reference/quiz-builder/questions/#block-settings)
-   **Smarter image loading** – Quiz images are now preloaded more intelligently, reducing layout shifts and improving perceived speed on both desktop and mobile.
-   **Shopify-inspired UX for building quizzes** – The popovers for “Add block” (questions);  “Add block” (result sections); “Add question” have all been redesigned with a Shopify-inspired look and feel, making the builder more familiar and easier to navigate. [Read more](https://docs.revenuehunt.com/reference/quiz-builder/questions/)
-   **Deeper Drop-off analytics** – The quizzes dashboard analytics widgets have been refactored, with Drop-off now front and center. The Drop-off table also got a visual and content overhaul, making it easier to see exactly where people leave the quiz and what to optimize next. [Read more](https://docs.revenuehunt.com/reference/quiz-builder/metrics/#drop-off)
-   **JavaScript and Liquid in Custom HTML (questions & results)** –Custom HTML blocks can now include `<script></script>` tags, so you can execute JavaScript directly from Custom HTML when needed. This unlocks advanced interactions and tracking, while still keeping things centralized in the builder. Custom HTML blocks on questions and result pages now support **Liquid** with access to quiz answers and variables. That means you can, for example, show or hide content based on specific choices or scores, render personalized messages and scores on the fly or  use conditions and loops for more advanced layouts. [Read more](https://docs.revenuehunt.com/reference/quiz-builder/questions/#dynamic-content-javascript-reference)
-   **New Custom HTML block in Product Slots** – There’s a brand-new Custom HTML block inside Product Slots with access to quiz answers and variables and all the item (product) information in that slot. Perfect for building on-brand product layouts, labels, badges, or “Why we recommended this” sections – all powered by quiz data. [Read more](https://docs.revenuehunt.com/reference/quiz-builder/results-page/#product-components-layout)
-   **Plans & pricing: clearer upgrade badges & access rules** – Advanced features like integrations (Klaviyo, Webhooks, Omnisend, etc.), custom elements (HTML, JS, CSS, Product Slot), and quiz emails (to self and respondent) are now only available on any paid plan or during the 15-day trial. Upgrade badges appear next to these features so it’s immediately clear when an upgrade is required. [Read more](https://docs.revenuehunt.com/customer-success/plans-pricing-faq/#feature-availability-for-paid-only-options)
-   **Shopify Customers moved to App Settings.** The Shopify Customers connection has been moved out of per-quiz integrations and into App Settings, where it logically belongs. This simplifies configuration and makes it clearer that the connection applies at the store level, not per quiz. [Read more](https://docs.revenuehunt.com/how-to-guides/send-leads-to-shopify-customers/)
-   **Run JavaScript directly in the builder** – You can now execute JavaScript inside the Quiz Builder, not just in the preview, using a new “play” button. This makes debugging and iterating on custom logic much faster. (As always: only run JS you trust.) [Read more](https://docs.revenuehunt.com/how-to-guides/add-javascript/)
-   **Stronger Klaviyo template validation** – Real Django template checks, key existence validation (e.g. `ANSWER_BY_BLOCK-{ref}-{quizId}`), plus an AI “judge” layer mean far fewer broken or mis-wired Klaviyo templates.

### Conclusion

December wrapped up the year by making quizzes much more than a product selector – with charts, new analytics and more customizable UX. With the revamped Quiz Copilot, you can launch and optimize quizzes with more confidence, spending less time fixing issues and more time driving conversions.
