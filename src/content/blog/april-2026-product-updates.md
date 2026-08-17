---
title: "APRIL 2026 – Safer quizzes, smoother popups, and backend-powered saves"
description: "RevenueHunt product update: backend-powered saves, safer dynamic content rendering, smoother popup behavior, cart attributes in custom JS, and a smarter Copilot."
pubDate: 2026-05-01T07:35:20Z
updatedDate: 2026-05-01T07:35:20Z
tags: []
categories:
  - "Product Updates"
author: "Paulina Chodura"
legacySlug: "april-2026-product-updates"
legacyId: 12455
legacyUrl: "https://revenuehunt.com/april-2026-product-updates/"
featuredImage: "/img/blog/april-2026-product-updates/april_26_product_update.webp"
draft: false
---

April focused on trust and reliability: quiz saves now happen server-side for better stability, quiz data is more securely isolated, user-submitted answers are sanitized before rendering, and popups behave more predictably across navigation patterns, plus cleaner legacy migration and a more helpful Copilot.

We shipped backend-powered quiz saves, XSS protection for dynamic answers, stronger shop-level data isolation, cleaner popup URL handling, more accurate retakes on branching quizzes, cart attribute support in custom JS, and a batch of migration and Copilot improvements.

## Highlights

-   **Quiz saving moved to the backend** – When you save or publish a quiz, the work now happens server-side instead of inside the browser. Everything looks the same, but it's more reliable for large quizzes.
-   **XSS protection for dynamic answers** – If your quiz displays a customer's answer back to them (e.g., "Hi {{ first\_name }}!" via Liquid recall), any HTML in that answer is now safely encoded before rendering.
-   **Cleaner popup behavior** – Quiz popups opened from links like `#quiz` or response links are now handled more consistently. When a shopper closes the popup, the `#quiz` fragment is removed from the URL, preventing accidental reopens on refresh or back navigation.
-   **More accurate retakes on branching quizzes** – Previous answers from a different quiz path no longer leak into a new retake flow. If your quiz uses branching logic, retakes should now produce results based only on the current path's answers.
-   **Cart attributes from custom JavaScript** – Merchants writing custom JS can now update Shopify cart attributes directly from quiz answers. This makes it easy to pass quiz data through to checkout, downstream apps, or Shopify Flow. Custom JS also now defaults to Shopify's official Ajax cart APIs for more consistent behavior across themes. [Read more](https://docs.revenuehunt.com/how-to-guides/add-javascript/)
-   **Better V1 quiz migration** – Importing legacy quizzes into the Built for Shopify app now gives you clearer messaging about whether a quiz is ready to import or needs manual follow-up for CSS, JS, integrations, or unmappable products. Rich text from older quizzes also carries over more reliably, preserving line breaks and markup. [Read more](https://docs.revenuehunt.com/how-to-guides/migrate-shopify-legacy-quiz/)
-   **Copilot links directly to Shopify theme editor** – Instead of only giving manual instructions, Copilot can now provide clickable Shopify admin links for enabling app embeds or adding inline quiz blocks. [Read more](https://docs.revenuehunt.com/how-to-guides/use-quiz-copilot/)
-   **Legacy response CSV exports are now async** – When exporting legacy quiz responses to CSV, you'll receive an email with a download link instead of getting the file as an attachment. This is more reliable for large exports and eliminates bounced-attachment issues. [Read more](https://docs.revenuehunt.com/how-to-guides/download-quiz-responses/)

## What's coming

-   **Klaviyo OAuth integration** – Native OAuth connection to Klaviyo, no API key required.

## Conclusion

April's updates make your quizzes more secure, your saves more reliable, and your popups more predictable. With backend-powered saves laying the groundwork for version history, and Copilot getting smarter about guiding you through Shopify setup, the platform keeps getting sturdier underneath while staying simple on the surface.
