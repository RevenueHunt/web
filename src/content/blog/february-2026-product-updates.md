---
title: "FEBRUARY 2026 – More capable Copilot, flexible slots, and faster catalogue syncs"
description: "February focused on giving you more visibility into what’s happening under the hood: tracking integration events per response, redesigning catalogue management, and rolling out a more capable Copilot engine — plus a batch of builder and reliability improvements across the board."
pubDate: 2026-03-02T10:34:52Z
updatedDate: 2026-03-25T20:52:57Z
tags: []
categories:
  - "Product Updates"
author: "Paulina Chodura"
legacySlug: "february-2026-product-updates"
legacyId: 12010
legacyUrl: "https://revenuehunt.com/february-2026-product-updates/"
featuredImage: "/img/blog/february-2026-product-updates/1.png"
draft: false
---

February focused on giving you more visibility into what’s happening under the hood: tracking integration events per response, redesigning catalogue management, and rolling out a more capable Copilot engine — plus a batch of builder and reliability improvements across the board.

We shipped integration event tracking on every response, virtual collections for product slots, a redesigned catalogue settings page with faster imports, a new Copilot engine with cross-session memory, and fixes for embedded quiz dropdowns, translations, and validation.

## Highlights

-   **Response integration tracking** – Response detail pages now show which integrations fired (Klaviyo, Zapier, etc.) and whether they succeeded or failed. There’s also a new column in the responses table, so you can spot integration issues at a glance without digging into individual responses. [Read more](https://docs.revenuehunt.com/reference/quiz-builder/metrics/#response-analysis)
-   **Virtual collections in product slots** – You can now build product slots based on tags, vendors, or variants (not just Shopify collections). This is especially useful for stores that don’t have tightly organized collection structures but still want precise product recommendations. [Read more](https://docs.revenuehunt.com/reference/quiz-builder/results-page/#results-slot)
-   **Redesigned catalogue settings** – The catalogue settings page has been completely redesigned. You’ll now see import history, stale data detection, a manual refresh button, and clearer status indicators, making it much easier to understand what’s happening with your product sync. [Read more](https://docs.revenuehunt.com/reference/app-settings/#catalogue)
-   **Faster, more reliable catalogue imports** – Product catalogue downloads are now streamed instead of loaded into memory, which significantly reduces timeouts for shops with large catalogues. We’ve also added concurrency guards to prevent import pile-ups when multiple shops trigger syncs at once.
-   **Multiple notification emails** – You can now set multiple notification emails instead of a single one. Look for “Best Emails” in your app settings to configure who gets notified. [Read more](https://docs.revenuehunt.com/reference/app-settings/#general)
-   **New Copilot engine**  – We’re rolling out a more capable AI engine for Quiz Copilot. It uses a workspace-based editing model with better validation, translation support, and quiz review capabilities. Copilot can now remember context across sessions, so you don’t have to repeat yourself every time you come back to work on your quiz. Fewer “empty intent” misunderstandings, no more translation errors, better CSS guidance with simpler selectors and expanded file upload support. Copilot also now warns when a feature requires a plan upgrade. [Read more](https://docs.revenuehunt.com/how-to-guides/use-quiz-copilot/)
-   **Embedded quiz dropdown fix** – Dropdowns inside shadow DOM (embedded quiz widgets) weren’t registering selections. This is now fixed, so embedded quizzes with dropdowns should work reliably again.
-   **Builder validation improvements** – Quiz validation now catches issues in custom CSS, JavaScript, and tags during quiz creation (not just edits). We’ve also fixed false validation errors that appeared when editing content with special characters.
-   **Liquid template error handling** – If your email template has a Liquid syntax error, you’ll now see a clear, descriptive error message instead of the template silently breaking. [Read more](https://docs.revenuehunt.com/reference/quiz-builder/notifications/)
-   **Date picker expanded range** – The date question block previously blocked future years. It now allows dates up to 100 years ahead, so you can remove any workarounds you had in place. [Read more](https://docs.revenuehunt.com/reference/quiz-builder/questions/#date)
-   **Friendlier analytics empty states** – Instead of showing a blank page or crashing, analytics now displays a helpful empty state when a quiz isn’t found or has no data yet. [Read more](https://docs.revenuehunt.com/reference/quiz-builder/metrics/#analytics)

## What’s coming

-   **Klaviyo OAuth integration** – Native OAuth connection to Klaviyo, no API key required.
-   **Messaging app integrations (Beta)** – Your quiz will soon run as a native conversation inside the channels where your customers already talk to you: **WhatsApp, Instagram DMs, Facebook Messenger**, TikTok, SMS, and tools like Gorgias or Shopify Inbox. Customers answer questions, get personalized product recommendations with Add to Cart links, and leads get captured in Klaviyo — all without visiting your store. We’re already onboarding early beta merchants and would love to hear which channels matter most to you. **[Contact support to request early access →](https://revenuehunt.com/contact/)**

**🚀 Coming soon: Quiz integrations for WhatsApp, Instagram DMs & more**

Run your quiz as a native conversation inside the channels where your customers already talk to you — no store visit required. Leads captured automatically in Klaviyo.

**Already 25+ merchants signed up for early access.** [Contact support to join the beta →](https://revenuehunt.com/contact/)

## Conclusion

February’s updates bring much-needed visibility into your integration health, more flexible ways to build product recommendations, and a Copilot that’s smarter, more reliable, and actually remembers your last conversation. Together, these changes make it easier to debug, customize, and scale your quizzes with confidence.
