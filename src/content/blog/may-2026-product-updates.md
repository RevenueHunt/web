---
title: "MAY 2026: Klaviyo OAuth, more reliable tracking, and a wave of stability fixes"
description: "RevenueHunt product update: native Klaviyo OAuth, tracking that fires before redirects, smoother popups, plus a long list of quiz builder and Copilot reliability fixes."
pubDate: 2026-06-01T08:00:00Z
updatedDate: 2026-06-01T08:00:00Z
tags: []
categories:
  - "Product Updates"
author: "Paulina Chodura"
legacySlug: "may-2026-product-updates"
legacyUrl: "https://revenuehunt.com/may-2026-product-updates/"
featuredImage: "/img/blog/may-2026-product-updates/may_26_product_update.webp"
draft: false
---

May was all about integrations and reliability: the long-awaited native Klaviyo OAuth connection is here, and we made tracking more dependable when quizzes redirect visitors, on top of a long list of quiz builder, popup, and Copilot stability fixes.

We shipped native Klaviyo OAuth at the shop level, more reliable pixel/tracking before redirects, smoother and safer popups, a batch of quiz builder persistence and navigation fixes, and a more reliable Copilot Manager.

## Highlights

-   **Native Klaviyo OAuth connection.** You can now connect Klaviyo once at the shop level with a secure OAuth flow, no more copying API keys into every quiz. Connect, reconnect, and disconnect from **Settings → Integrations → Klaviyo**, with a clear connection status and a confirmation step before disconnecting. Your existing quiz-level Klaviyo API keys keep working during the transition, but the new OAuth setup is the recommended way to connect. [Read more](https://docs.revenuehunt.com/how-to-guides/send-leads-to-klaviyo/)
-   **More reliable tracking before redirects.** Pixel and tracking events now fire *before* a quiz redirects a visitor to another URL, so you stop losing analytics events on quizzes that send shoppers straight to a product, collection, or external page.
-   **Smoother, safer popups.** The quiz popup got better touch handling on mobile, along with a security fix for unsafe popup DOM handling. We also fixed a case where answers could be cleared by a disabled progress refresh.
-   **Quiz builder reliability fixes.** A batch of fixes for the people building quizzes all day: drafts save more reliably (no more incorrectly hydrated draft state), the logic editor remembers and focuses the last page you were viewing, drag-and-drop uploads in the media picker work again, a builder modal no longer reopens after menu navigation, and creating previews from past responses is more dependable.
-   **Integration and settings clarity.** Shopify Customers settings now appear correctly when enabled globally, and Loox users are clearly warned that review sync needs to be handled manually.
-   **A smarter, more stable Copilot.** Older frontend Copilot sessions now show as read-only while the new Copilot Manager takes over, and the Manager itself got internal runtime fixes for more reliable sessions. Copilot also has better guidance for Loox, response retention, CSS references, quiz payload settings, and info-only questions. [Read more](https://docs.revenuehunt.com/how-to-guides/use-quiz-copilot/)

## What's coming

-   **Mailchimp integration.** A native Mailchimp connection is on its way, so Mailchimp users will be able to automatically capture quiz leads in their Mailchimp lists. We're putting the finishing touches on it and will let you know as soon as it's ready to connect.

-   **Messaging app integrations (Beta).** Your quiz will soon run as a native conversation inside the channels where your customers already talk to you: **WhatsApp, Instagram DMs, Facebook Messenger**, TikTok, SMS, and tools like Gorgias or Shopify Inbox. Customers answer questions, get personalized product recommendations with Add to Cart links, and leads get captured in Klaviyo, all without visiting your store. We're already onboarding early beta merchants and would love to hear which channels matter most to you. **[Contact support to request early access →](https://revenuehunt.com/contact/)**

**🚀 Coming soon: Quiz integrations for WhatsApp, Instagram DMs & more**

Run your quiz as a native conversation inside the channels where your customers already talk to you, no store visit required. Leads captured automatically in Klaviyo.

**Already 25+ merchants signed up for early access.** [Contact support to join the beta →](https://revenuehunt.com/contact/)

## Conclusion

May closed the loop on one of our most-requested features: native Klaviyo OAuth, so merchants can connect and route quiz leads without touching an API key. Pair that with more reliable tracking through redirects and a long list of builder, popup, and Copilot fixes, and your quizzes are easier to connect, easier to build, and more dependable end to end. With a native Mailchimp connection up next, more merchants will be able to capture quiz leads automatically soon.
