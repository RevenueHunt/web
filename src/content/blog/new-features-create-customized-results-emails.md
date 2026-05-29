---
title: "Send quiz results emails on Shopify, WooCommerce and more"
description: "Set up branded HTML quiz results emails inside the RevenueHunt app on Shopify, WooCommerce, Magento, BigCommerce or standalone: setup, tokens, SMTP."
pubDate: 2022-03-24T09:29:37Z
updatedDate: 2026-05-28T16:00:00Z
tags:
  - "ecommerce"
  - "product recommendation quiz"
  - "email marketing"
  - "shopify"
  - "woocommerce"
categories:
  - "App New Features"
author: "Paulina Chodura"
legacySlug: "new-features-create-customized-results-emails"
legacyId: 6269
legacyUrl: "https://revenuehunt.com/new-features-create-customized-results-emails/"
featuredImage: "/img/blog/new-features-create-customized-results-emails/66.webp"
draft: false
---

The RevenueHunt app sends branded HTML quiz results emails directly to the customer the moment they finish your quiz, without requiring a separate ESP integration. The same setup works across all five supported platforms: the new **Built for Shopify** version, **Shopify Legacy**, **WooCommerce**, **Magento**, **BigCommerce** and **standalone** deployments. The UI is slightly different on each, but the underlying mechanic is the same: collect the email inside the quiz, configure the template inside the app, and route the send through your own SMTP for proper deliverability.

This guide covers the setup for every platform, the personalisation tokens you can use in the template, the SMTP configuration that turns the email from "generic transactional" into "branded follow-up," and where the in-app email stops making sense and a full ESP integration takes over.

## When the in-app email is the right choice

The in-app email is the fastest path to a working follow-up on a new quiz. Three scenarios where it's the right tool:

- **You're launching a quiz on a brand-new store** and want a personalised follow-up live the same day, without an ESP setup task.
- **You don't have Klaviyo, Omnisend or Mailchimp yet,** and you want to validate the quiz funnel before committing to an ESP.
- **You're running a low-volume specialty store** and a single results email covers your retention needs.

For most growing brands, the in-app email is the starting point. Once you need multi-email sequences, conditional flow splits, SMS alongside email, or segmentation beyond a single quiz, the right move is to graduate to a native ESP integration. RevenueHunt syncs to Klaviyo, Omnisend, Mailchimp, HubSpot and ActiveCampaign as custom properties so the same quiz answers power those flows. The mapping chain is covered in [how Klaviyo segmentation unlocks once zero-party data lands in profiles](https://revenuehunt.com/klaviyo-zero-party-data/), and the full follow-up sequence is in [quiz follow-up emails: the revenue lever you're missing](https://revenuehunt.com/product-quiz-success-why-its-necessary-to-send-follow-up-emails/).

## What you can configure

The Notifications panel gives you the following controls on every platform:

- **FROM email on your own brand's domain** so messages don't come from a generic RevenueHunt sender
- **Subject line with information recalls** (e.g. `Your routine for @{answer:skin-type}` resolves to "Your routine for oily" when the customer selected "oily")
- **Body format toggle**: plain text (highest deliverability) or HTML (full brand styling)
- **Recommended products block** that pulls from the quiz results, with control over which product fields are displayed (title, image, price, URL)
- **Customer metadata tokens** for the recipient's name, the quiz answers, and a direct link back to their results page

## Setup: Built for Shopify (current version)

The Built for Shopify version of the app puts the email controls inside **Quiz Settings → Emails to respondents.**

1. **Add an email question** to your quiz via the Quiz Builder.
2. Navigate to **Quiz Settings → Emails to respondents.**
3. Enable **Send email when someone completes the quiz.**
4. **Select which email question** the email should send to (relevant if your quiz collects more than one email).
5. **Set the reply-to address** to your brand's support inbox.
6. **Edit the subject line.** Use information-recall tokens to personalise it with quiz answers.
7. **Choose the email format**: Basic text or Advanced HTML.
8. **Configure the email content** using the provided template as a starting point.
9. **Add SMTP credentials** via **App Settings → SMTP** so emails send from your domain (strongly recommended; see SMTP section below).
10. **Save** using the top-right button.
11. **Preview the quiz** to test the email trigger end-to-end.

<div class="aspect-video overflow-hidden rounded-xl bg-slate-900 not-prose my-6"><button type="button" class="yt-facade group relative block h-full w-full cursor-pointer overflow-hidden" data-yt-id="3AWbHe1aTac" aria-label="Watch: setting up quiz results emails in Built for Shopify"><picture><source srcset="https://i.ytimg.com/vi_webp/3AWbHe1aTac/maxresdefault.webp" type="image/webp" /><img src="https://i.ytimg.com/vi/3AWbHe1aTac/maxresdefault.jpg" alt="Setting up quiz results emails in the Built for Shopify version of RevenueHunt" width="1280" height="720" loading="lazy" decoding="async" class="h-full w-full object-cover" /></picture><span class="absolute inset-0 flex items-center justify-center bg-black/10 transition group-hover:bg-black/20"><span class="flex h-20 w-20 items-center justify-center rounded-full bg-black/70 shadow-lg transition group-hover:scale-105 group-hover:bg-[#FF0000]"><svg class="ml-0.5 h-9 w-9 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg></span></span></button></div>

*Walkthrough: setting up quiz results emails in the Built for Shopify version, from adding the email question through to the SMTP connection.*

## Setup: Shopify Legacy, WooCommerce, Magento, BigCommerce, standalone

On Shopify Legacy and all non-Shopify platforms, the controls sit under **Notifications → TO RESPONDENT.** The capability is the same; the menu path differs.

1. **Configure SMTP credentials first** via **App Settings → SMTP.** On these platforms, SMTP setup is the prerequisite for reliable delivery.
2. **Add an email question** to your quiz.
3. Navigate to **Notifications → TO RESPONDENT.**
4. **Toggle the email notification on.**
5. **Set the reply-to address.**
6. **Select the target email question** if your quiz collects more than one.
7. **Edit the subject line.** Use `@` information recalls to personalise from earlier quiz answers.
8. **Choose Basic (text) or Advanced (HTML)** as the body format.
9. **Customise the email content** using the provided sample.
10. **Publish** via the top-right button.

![Advanced HTML email editor with a brand-styled quiz results template](/img/blog/new-features-create-customized-results-emails/BlogA_emails2.gif)

## Personalisation tokens

The token syntax differs by platform group because the Built for Shopify version uses Shopify's native Liquid templating, while the other platforms use Handlebars.

### Built for Shopify (Liquid)

The Built for Shopify metadata structure is richer than the legacy version. Available tokens:

**Customer fields:**

- `{{ person.firstName }}`
- `{{ person.fullName }}`
- `{{ person.email }}`

**Quiz answers:**

- Single answer by question ID: `{{ person.answersByBlock['question-id'].value }}`
- Loop over all answers: `{% for question_id, block in person.answersByBlock %} … {% endfor %}`

**Recommended products by results slot:**

- `{{ person.recommendationsBySlot['slot-id'] }}`
- Product fields: `product.title`, `product.image.url`, `product.price.amount`, `product.handle`

**Results page content blocks:**

- `{{ person.resultContentByBlock['block-id'].content }}`

**System data:**

- `{{ person.responseId }}` (use to deep-link the customer back to their results page)
- `{{ person.createdAt }}` (completion timestamp)

### Shopify Legacy, WooCommerce, Magento, BigCommerce, standalone (Handlebars)

**Customer fields:**

- `{{first_name}}`

**Recommended products:**

- `{{products}}` (array)
- Per-product fields: `{{product.name}}`, `{{product.image_url}}`, `{{product.price}}`
- Loop: `{{#each products}} … {{/each}}`

**Conditional logic on block type:**

- `{{#eq block.type "SlotsBlock"}} … {{/eq}}`
- Target a specific block by ID: `{{#eq block.id "A4TeY9"}} … {{/eq}}`

**Utility helpers:**

- Truncate text: `{{truncate product.name 7}}`

For a fuller list of tokens with worked examples, see the [results-email reference in the docs](https://docs.revenuehunt.com/how-to-guides/send-result-emails/).

## SMTP: send from your own domain

Connecting your own SMTP server is the single most important step for making the in-app email work in production. Without it, emails send from RevenueHunt's transactional infrastructure, which works but lacks the brand authority of mail sent from your own domain. With SMTP configured, every results email comes from your store's address (e.g. `hello@yourbrand.com`), respects your domain's authentication records (SPF, DKIM, DMARC), and lands in inboxes at a much higher rate.

The SMTP configuration lives in **App Settings → SMTP** on every platform. You'll need:

- SMTP host (e.g. `smtp.gmail.com`, `smtp.sendgrid.net`, your domain's mail provider)
- Port (commonly 587 for TLS or 465 for SSL)
- Username and password from your email provider

If you're not sure which credentials to use, check your email provider's documentation (look for "SMTP") or contact their support team.

## Common pitfalls

A few constraints to know before you ship a custom HTML template:

- **HTML email clients render differently.** Outlook, Gmail, Apple Mail and the major mobile clients all parse HTML slightly differently. Test your template in at least Gmail (desktop + iOS) and Apple Mail before publishing.
- **Inline CSS only.** Email clients strip `<style>` blocks and external stylesheets. Every style must be set as an inline `style="…"` attribute on the element.
- **No JavaScript.** Email clients block JS for security. Use plain HTML and tokens; don't try to use scripts for personalisation.
- **Plain text deliverability is highest.** If brand styling isn't critical for your first version, the Basic text template gets through filters with the fewest issues.

![Sample branded quiz results email with the personalised recommendation](/img/blog/new-features-create-customized-results-emails/image-23.webp)

![Sample plain-text quiz results email with the same product recommendation](/img/blog/new-features-create-customized-results-emails/image-24.webp)

## Admin notifications (TO SELF)

Alongside the customer-facing email, you can configure a notification to yourself or your team via **Notifications → TO SELF.** Same template editor, same tokens; the message is sent to your team's inbox each time a customer completes the quiz. Useful for high-touch categories where you want to follow up manually within the goodwill window.

## When to move from the in-app email to Klaviyo or another ESP

The in-app email is excellent for one-off personalised follow-ups. The moment you need any of the following, graduate to an ESP integration:

- **Multi-step sequences** (welcome series, replenishment, win-back)
- **Conditional flow splits** based on quiz answers (acne flow vs anti-aging flow)
- **SMS alongside email** for the same customer journey
- **A/B testing** of subject lines, send times or content variants
- **Audience exclusions** so the same customer doesn't get two competing campaigns

RevenueHunt syncs natively to Klaviyo, Omnisend, Mailchimp, HubSpot and ActiveCampaign. Quiz answers flow as custom properties, which means the same data that powered the in-app email now drives segmented flows across your entire retention stack. For the architecture, see our [zero-party data guide](https://revenuehunt.com/zero-party-data/). For the strategic framing of where the email fits in a complete funnel, see our [step-by-step funnel build guide](https://revenuehunt.com/build-sales-funnel-shopify-store/).

## Get started

[Install RevenueHunt: Recommender Quiz for Shopify](https://apps.shopify.com/product-recommendation-quiz-revenuehunt/install?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=platform_hero) and the results-email panel is live the same day. Free plan available. Already on Shopify Legacy, WooCommerce, Magento, BigCommerce or standalone? The same email feature is built in.

For the full results-email reference, see the [docs guide](https://docs.revenuehunt.com/how-to-guides/send-result-emails/).
