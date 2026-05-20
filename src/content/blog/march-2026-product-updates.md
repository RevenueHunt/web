---
title: "MARCH 2026 – Legacy quiz import, pre-fill on retake, and the new Copilot engine for everyone"
description: "March was a big month for builder usability and Copilot maturity: we shipped legacy Shopify quiz import, added pre-fill on retake, gave the builder better navigation tools, and fully rolled out the new Copilot engine to all new conversations – plus a long list of widget stability"
pubDate: 2026-04-01T10:23:36Z
updatedDate: 2026-04-01T10:50:40Z
tags: []
categories:
  - "Product Updates"
author: "Paulina Chodura"
legacySlug: "march-2026-product-updates"
legacyId: 12169
legacyUrl: "https://revenuehunt.com/march-2026-product-updates/"
featuredImage: "/img/blog/march-2026-product-updates/blog_tile_product_update_march_20261.png"
draft: false
---

March was a big month for builder usability and Copilot maturity: we shipped legacy Shopify quiz import, added pre-fill on retake, gave the builder better navigation tools, and fully rolled out the new Copilot engine to all new conversations – plus a long list of widget stability fixes across RTL, popups, multi-quiz pages, and more.

We shipped legacy Shopify quiz import into the Built for Shopify RevenueHunt app, answer pre-fill on retake, unit price blocks in product results, collapse/expand all in the builder sidebar, question admin labels, the new Copilot engine for all new sessions and dozens of widget and builder fixes.

## Highlights

-   **Legacy Shopify quiz import** – You can now pick an older quiz from the legacy Shopify app and import it directly into the Built for Shopify RevenueHunt quiz builder. Base quiz content: questions, choices, result pages – comes across automatically. Advanced customizations like custom CSS, JavaScript, or unusual product mappings may still need manual cleanup after import, but the heavy lifting is done for you. [Read more](https://docs.revenuehunt.com/how-to-guides/migrate-shopify-legacy-quiz/)
-   **Pre-fill answers on retake** – New setting: when a customer retakes a quiz, all their previous answers are pre-filled so they only need to change what's different. Works with choices, text fields, dates, and more. Enable or disable it in Quiz Settings → Behavior → "Pre-fill answers on retake." Off by default for existing quizzes, on by default for newly created ones. [Read more](https://docs.revenuehunt.com/reference/quiz-builder/quiz-settings/#general)
-   **Unit price block in product results** – You can now add a unit price block to product result cards. This shows Shopify's per-unit pricing (e.g., "$5.00/L" or "€2.50/100g") – useful for food, beverage, cosmetics, and other shops that sell by weight or volume. Products need unit pricing configured in Shopify for the block to display. [Read more](https://docs.revenuehunt.com/reference/quiz-builder/results-page/#slot-item-composition)
-   **Collapse/expand all in the builder sidebar** – A new toggle button in the sidebar header lets you collapse or expand all question and result cards at once. A big quality-of-life improvement for merchants managing large quizzes with 15+ questions or result pages. [Read more](https://docs.revenuehunt.com/reference/quiz-builder/)
-   **Question names** – You can now give each question an admin label (e.g., "Skin type question") that shows in the builder sidebar as "Q3: Skin type question." These labels are only visible to you: quiz takers never see them. [Read more](https://docs.revenuehunt.com/reference/quiz-builder/questions/#question-settings)
-   **Smarter, more reliable Copilot –** Copilot got a major upgrade this month. It now gives you clearer summaries of what changed, auto-loads quiz edits for review, and better understands which quiz you're working onv – even from Settings or Analytics. It's also more stable: no more getting stuck mid-edit, no more losing work when you send a follow-up message, and smarter self-correction when it encounters unfamiliar settings. New merchants will also see Copilot open automatically on their first visit to help them get started. [Read more](https://docs.revenuehunt.com/how-to-guides/use-quiz-copilot/)
-   **RTL language transitions fixed** – Quizzes in Arabic, Hebrew, and other right-to-left languages now animate correctly when navigating between questions. Back/forward chevrons also flip properly.
-   **Multi-quiz pages fixed** – Pages with multiple quiz embeds no longer have messages leak between quiz instances. If you have both an inline quiz and a popup quiz on the same page, the popup no longer causes the inline quiz to resize unexpectedly.
-   **Liquid reference validation** – The builder now checks that variables used in notification emails (like `{{quiz.name}}`) actually exist. If something looks off, you'll see a yellow warning with the exact line number but it won't block saving. Liquid and CSS syntax errors now show the exact line and point to the problem, instead of a generic message. [Read more](https://docs.revenuehunt.com/reference/quiz-builder/questions/#dynamic-content-javascript-reference)
-   **Analytics date picker uses local timezone** – The analytics date range picker now uses your local timezone instead of UTC, so date boundaries match what you'd expect. The date question block previously blocked future years. It now allows dates up to 100 years ahead. [Read more](https://docs.revenuehunt.com/reference/quiz-builder/metrics/#analytics)
-   **Settings help text** – All checkboxes in quiz behavior, accessibility, and payload settings now have explanatory descriptions underneath. [Read more](https://docs.revenuehunt.com/reference/accessibility/)
-   **Improved network detection** – The app is smarter about detecting connection drops and new version availability. Fewer false "you're offline" situations, and a longer grace period before prompting you to refresh.
-   **Widget fixes** – Modal results now scroll correctly in popup quizzes. Slider buttons no longer overflow on narrow screens. Long button labels on scale questions wrap properly instead of clipping. Product ID tags render as clean badges instead of raw code.

## What's coming

-   **Klaviyo OAuth integration** – Native OAuth connection to Klaviyo, no API key required.

-   **Messaging app integrations (Beta)** – Your quiz will soon run as a native conversation inside the channels where your customers already talk to you: **WhatsApp, Instagram DMs, Facebook Messenger**, TikTok, SMS, and tools like Gorgias or Shopify Inbox. Customers answer questions, get personalized product recommendations with Add to Cart links, and leads get captured in Klaviyo - all without visiting your store. We're already onboarding early beta merchants and would love to hear which channels matter most to you. **[Contact support to request early access →](https://revenuehunt.com/contact/)**

**🚀 Coming soon: Quiz integrations for WhatsApp, Instagram DMs & more**

Run your quiz as a native conversation inside the channels where your customers already talk to you - no store visit required. Leads captured automatically in Klaviyo.

**Already 25+ merchants signed up for early access.** [Contact support to join the beta →](https://revenuehunt.com/contact/)

## Conclusion

March's updates make it easier to get started (legacy import, Copilot auto-open), easier to build (collapse/expand, question names, better errors), and easier to trust your quizzes across languages and devices (RTL fixes, multi-quiz isolation, pre-fill on retake). With the new Copilot engine now live for everyone, you've got a smarter assistant backing every session.
