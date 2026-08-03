---
title: "JULY 2026: Shopify Flow automation, Mailchimp is live, and more reliable lead delivery"
description: "RevenueHunt product update: a new Shopify Flow Quiz Completed trigger, native Mailchimp OAuth, explicit marketing opt-out, trackable saved-result links, and sturdier Klaviyo delivery."
pubDate: 2026-08-01T08:00:00Z
updatedDate: 2026-08-01T08:00:00Z
tags: []
categories:
  - "Product Updates"
author: "Paulina Chodura"
legacySlug: "july-2026-product-updates"
legacyUrl: "https://revenuehunt.com/july-2026-product-updates/"
featuredImage: "/img/blog/july-2026-product-updates/july_26_product_update.webp"
draft: false
---

July was all about automation and dependable lead delivery: you can now trigger Shopify Flow workflows when a quiz is completed, the native Mailchimp OAuth connection is live, marketing opt-outs finally stick, and lead delivery to Klaviyo and Mailchimp is more reliable with far clearer diagnostics.

We shipped a Shopify Flow "Quiz Completed" trigger, a native Mailchimp OAuth connection, an explicit Shopify marketing opt-out, trackable saved-result links, more resilient Klaviyo and Mailchimp delivery, and flexible legacy app response exports.

## Highlights

-   **Automate actions after a quiz with Shopify Flow.** A new **Quiz Completed** trigger lets Shopify merchants kick off a Flow workflow when a quiz is completed, passing customer details, answers, recommendations, and quiz results straight into the workflow. The Shopify Customers settings page now shows whether the workflow is active, inactive, or not yet detected, with links to Shopify Flow and the setup guide, and response details include translated Flow and consent statuses with a Flow event ID when available. [Automate quiz completions with Shopify Flow](https://docs.revenuehunt.com/how-to-guides/automate-quiz-completions-with-shopify-flow/) · [Send leads to Shopify Customers](https://docs.revenuehunt.com/how-to-guides/send-leads-to-shopify-customers/)
-   **Native Mailchimp OAuth connection.** Mailchimp is now a first-class integration with a secure OAuth flow, no API keys to copy: connect your account once, pick an audience, and capture quiz leads automatically, with clear delivery results on each response. [Read more](https://docs.revenuehunt.com/how-to-guides/send-leads-to-mailchimp/)
-   **Marketing opt-out now stays off.** Unchecking Shopify marketing subscription on an email or phone question now saves an explicit opt-out. Consent updates are also more reliable, with temporary Shopify failures retried separately to cut down on duplicate customer-sync work.
-   **Trackable saved-result links in Klaviyo.** Results links can now use `?response_id=...`, which works better with Klaviyo and email click tracking than URL fragments that some services rewrite. Existing `#response-...` links keep working, and Copilot can help you create the new tracked format.
-   **More reliable lead delivery, clearer diagnostics.** Temporary Klaviyo and Mailchimp failures are now retried automatically, so leads don't get lost to a passing outage. Oversized Klaviyo events still get delivered by dropping optional data first, and each response shows clearly what was sent and what, if anything, was left out.
-   **A more helpful Copilot for integrations.** Copilot can now inspect a response's integration events and explain whether Mailchimp, Klaviyo, Shopify, HubSpot, Zapier, webhooks, or email delivery succeeded or failed, making it far quicker to troubleshoot why a lead didn't arrive. [Read more](https://docs.revenuehunt.com/how-to-guides/use-quiz-copilot/)
-   **Flexible legacy response exports.** Legacy app merchants can now export responses from the last 1, 3, or 6 months instead of one fixed period, request a fresh export as soon as the previous job finishes, and are safely guided to a smaller range when an export would exceed 100,000 responses. [Read more](https://docs.revenuehunt.com/how-to-guides/download-quiz-responses/)

## What's coming

-   **Messaging app integrations (Beta).** Your quiz will soon run as a native conversation inside the channels where your customers already talk to you: **WhatsApp, Instagram DMs, Facebook Messenger**, TikTok, SMS, and tools like Gorgias or Shopify Inbox. Customers answer questions, get personalized product recommendations with Add to Cart links, and leads get captured in Klaviyo, all without visiting your store. We're already onboarding early beta merchants and would love to hear which channels matter most to you. **[Contact support to request early access →](https://revenuehunt.com/contact/)**

-   **Agent-ready commerce.** We're working on making your quiz's personal-shopper logic available beyond your store, so the same tailored guidance can reach customers wherever they start their shopping, including the AI assistants they increasingly turn to. More on this soon.

**🚀 Coming soon: Quiz integrations for WhatsApp, Instagram DMs & more**

Run your quiz as a native conversation inside the channels where your customers already talk to you, no store visit required. Leads captured automatically in Klaviyo.

**Already 25+ merchants signed up for early access.** [Contact support to join the beta →](https://revenuehunt.com/contact/)

## Conclusion

July connected your quizzes to the tools that act on their results: a Shopify Flow trigger to automate what happens after a completion, a native Mailchimp connection to sit alongside Klaviyo, and marketing consent that finally behaves the way you set it. Underneath, lead delivery got noticeably tougher, with automatic retries, stable identifiers, and payload fallbacks that keep the essential event flowing, plus a Copilot that can tell you exactly where a lead went. Your quiz data now reaches more destinations, more reliably, with far less guesswork when something goes wrong.
</content>
