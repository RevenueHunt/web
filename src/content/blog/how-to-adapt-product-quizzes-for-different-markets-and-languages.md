---
title: "Adapt product quizzes for markets and languages"
description: "Localise a product quiz across markets, languages and currencies. Built for Shopify uses Shopify Markets natively; other platforms need JS routing."
pubDate: 2024-08-29T06:26:08Z
updatedDate: 2026-06-19T10:00:00Z
tags:
  - "ecommerce"
  - "product recommendation quiz"
  - "shopify"
  - "shopify markets"
  - "localisation"
categories:
  - "eCommerce"
  - "Shopify Apps"
  - "WooCommerce Plugins"
  - "Tips &amp; Tricks"
author: "Paulina Chodura"
legacySlug: "how-to-adapt-product-quizzes-for-different-markets-and-languages"
legacyId: 9865
legacyUrl: "https://revenuehunt.com/how-to-adapt-product-quizzes-for-different-markets-and-languages/"
featuredImage: "/img/blog/how-to-adapt-product-quizzes-for-different-markets-and-languages/blogtile_markets-languages.webp"
draft: false
---

Adapting a product recommendation quiz to a multi-market store involves three layers: **cultural content** (questions, copy, imagery), **language and currency** (questions translated, prices in the local currency), and **technical routing** (showing the right quiz version to each visitor). The setup is dramatically simpler on **[Built for Shopify](/revenuehunt-built-for-shopify/)**, which integrates natively with Shopify Markets to detect the visitor's market and serve the right quiz, language and currency automatically. On Shopify Legacy, WooCommerce, Magento, BigCommerce and Standalone, you build the same outcome via JavaScript routing and duplicate-quiz workarounds.

![Diagram showing a product quiz adapting questions, language and currency to different markets across regions](/img/blog/how-to-adapt-product-quizzes-for-different-markets-and-languages/Quizzes-for-markets.webp)

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 01</span> &nbsp;A single quiz adapts questions, language and currency per market. Built for Shopify handles the detection-and-routing automatically via Shopify Markets; the other platforms achieve the same outcome with duplicate quizzes plus JavaScript routing.</p>

<div style="margin:32px 0;padding:24px 28px;background:#f8fafc;border-left:4px solid #16161D;border-radius:6px;">
  <p style="margin:0 0 14px;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;">What you'll learn</p>
  <ul style="list-style:none;padding:0;margin:0;">
    <li style="display:flex;gap:14px;padding:8px 0;font-size:15px;color:#0f172a;line-height:1.55;border-top:1px solid #e2e8f0;"><span style="flex-shrink:0;font-variant-numeric:tabular-nums;font-weight:700;color:#16161D;min-width:24px;">01</span><span>Cultural and content adaptation: what changes per market beyond translation (visuals, imagery, regulatory disclosures).</span></li>
    <li style="display:flex;gap:14px;padding:8px 0;font-size:15px;color:#0f172a;line-height:1.55;border-top:1px solid #e2e8f0;"><span style="flex-shrink:0;font-variant-numeric:tabular-nums;font-weight:700;color:#16161D;min-width:24px;">02</span><span>Built for Shopify path: native Shopify Markets integration handles language, currency and market detection automatically.</span></li>
    <li style="display:flex;gap:14px;padding:8px 0;font-size:15px;color:#0f172a;line-height:1.55;border-top:1px solid #e2e8f0;"><span style="flex-shrink:0;font-variant-numeric:tabular-nums;font-weight:700;color:#16161D;min-width:24px;">03</span><span>Other platforms (Legacy, WooCommerce, Magento, BigCommerce, Standalone): three JavaScript-based workarounds for multi-language and multi-currency routing.</span></li>
    <li style="display:flex;gap:14px;padding:8px 0;font-size:15px;color:#0f172a;line-height:1.55;border-top:1px solid #e2e8f0;"><span style="flex-shrink:0;font-variant-numeric:tabular-nums;font-weight:700;color:#16161D;min-width:24px;">04</span><span>Regulatory and compliance specifics (GDPR consent, German PAngV per-100ml pricing, Canadian CASL).</span></li>
  </ul>
</div>

**Table of contents:**

- [Content and design](#content-and-design)
- [Technical setup, by platform](#technical-setup-by-platform)
- [Built for Shopify: native Shopify Markets integration](#on-built-for-shopify-native-shopify-markets-integration)
- [Shopify Legacy, WooCommerce, Magento, BigCommerce and Standalone](#on-shopify-legacy-woocommerce-magento-bigcommerce-and-standalone)
- [Frequently asked questions](#frequently-asked-questions)
- [Where this fits](#where-this-fits)

## Content and design

### Understanding cultural nuances

Localisation begins with understanding the cultural context of your target market. **What resonates with customers in one country may not work in another**. For instance, color symbolism can vary widely; red might signify good fortune in China, while it can symbolize danger in Western cultures. It's essential to research and adapt your quiz design and content accordingly.

Emerging markets present unique opportunities but also come with distinct challenges. When entering these markets, it's crucial to **take a culturally sensitive approach** and be patient with the process of gaining consumer trust.

As you adapt your quizzes to different cultural contexts, it's also important to ensure the content remains appropriate for diverse audiences. Review every translated question and answer choice with a native speaker (not just a translation tool) before publishing.

**Key points:**

- **Start with a basic version of your quiz** and gradually introduce more localised elements as you learn more about the market.
- Building a presence in an emerging market takes time. **Be prepared for a long-term commitment** to fully capitalize on the potential.
- Tailor quiz questions and outcomes to **reflect local customs and values**. For example, avoid questions that may be considered intrusive or inappropriate in certain cultures.
- Recognise that **preferences for certain products can differ** by region. Customise your recommendations based on local trends and consumer behaviour.
- **Adapt visuals**, such as images and color schemes, to reflect local tastes.

<div style="margin:24px 0;padding:18px 24px;background:#f8fafc;border-left:4px solid #16161D;border-radius:6px;">
  <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;">Tip</p>
  <p style="margin:0 0 6px;font-size:15px;line-height:1.55;color:#0f172a;">With <a href="https://revenuehunt.com/product-recommendation-quiz/" style="color:#16161D;text-decoration:underline;">RevenueHunt: Recommender Quiz for Shopify</a> you can create multiple duplicates of your quiz and style them differently for different markets. You can easily add images and videos, change colors of questions and buttons based on your target market. You can even add custom CSS or JavaScript code to make the quiz pop. Check <a href="https://docs.revenuehunt.com/how-to-guides/customize-quiz-design/" style="color:#16161D;text-decoration:underline;">here</a> for more details about styling your multi-language quiz.</p>
</div>

![Quiz Builder design panel showing per-market visual customisation options](/img/blog/how-to-adapt-product-quizzes-for-different-markets-and-languages/Screenshot-2024-08-26-091327.webp)

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 02</span> &nbsp;The Quiz Builder design panel: colours, typography and per-question visuals all customise per quiz duplicate. Each market gets its own visual identity without rebuilding the question flow.</p>

<div style="margin:24px 0;padding:18px 24px;background:#f8fafc;border-left:4px solid #16161D;border-radius:6px;">
  <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;">Tip</p>
  <p style="margin:0 0 6px;font-size:15px;line-height:1.55;color:#0f172a;">All the quizzes created with <a href="https://revenuehunt.com/product-recommendation-quiz/" style="color:#16161D;text-decoration:underline;">RevenueHunt: Recommender Quiz for Shopify</a> can be changed easily any time and the app keeps a <a href="https://docs.revenuehunt.com/how-to-guides/restore-quiz-progress/#accessing-version-history" style="color:#16161D;text-decoration:underline;">version history</a> of every published change. This way you can always roll-back to the most successful version of your quiz easily.</p>
</div>

### Language translation best practices

Effective localisation requires more than a direct translation of text. It's crucial to maintain the integrity of your brand's voice while ensuring the language feels natural to native speakers.

**Key points:**

- Invest in **professional translation** services rather than relying solely on machine translation. This helps to avoid awkward phrasing and errors that can detract from the user experience.
- **Be mindful of idiomatic expressions** that may not translate well. Replace or rephrase them to convey the intended meaning in the local language.
- Ensure that the **tone of the quiz aligns with your brand's voice**, whether it's formal, casual, or playful, across all languages.

<div style="margin:24px 0;padding:18px 24px;background:#f8fafc;border-left:4px solid #16161D;border-radius:6px;">
  <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;">Tip</p>
  <p style="margin:0 0 6px;font-size:15px;line-height:1.55;color:#0f172a;">Navigate to <code style="background:#f1f5f9;padding:1px 6px;border-radius:4px;font-size:0.92em;">Quiz Settings &gt; Messages</code> in the <a href="https://revenuehunt.com/product-recommendation-quiz/" style="color:#16161D;text-decoration:underline;">RevenueHunt: Recommender Quiz</a> app to modify the language of interactive elements like buttons and popups. The translation of these elements can be done automatically and then adjusted manually where necessary for each button or popup message.</p>
  <p style="margin:0 0 6px;font-size:15px;line-height:1.55;color:#0f172a;">Note that questions and choices need manual translation, which allows for full flexibility when creating your localised quiz.</p>
</div>

![Quiz Builder Messages settings panel where UI button labels and system messages can be translated](/img/blog/how-to-adapt-product-quizzes-for-different-markets-and-languages/Screenshot-2024-08-26-091452.webp)

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 03</span> &nbsp;The Messages panel in Quiz Settings: button labels and system messages translate automatically per language. Question and answer text still need manual translation, which is what gives the quiz its localised voice.</p>

### Legal and regulatory compliance

Each market has its own set of regulations that you must adhere to, especially regarding data privacy and advertising standards. For example, in Germany, it's required to show the "grundpreis" or \`per 100ml\` price for cosmetic products.

**Key points:**

- Comply with local **data protection laws**, such as GDPR in Europe, which dictate how you collect and use customer data.
- Be aware of **regional advertising standards** and ensure that your quiz content does not violate any local laws or guidelines.

<div style="margin:24px 0;padding:18px 24px;background:#f8fafc;border-left:4px solid #16161D;border-radius:6px;">
  <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;">Tip</p>
  <p style="margin:0 0 6px;font-size:15px;line-height:1.55;color:#0f172a;">To show the "grundpreis" or \<code style="background:#f1f5f9;padding:1px 6px;border-radius:4px;font-size:0.92em;">per 100ml\</code> price for cosmetic products <a href="https://revenuehunt.com/product-recommendation-quiz/" style="color:#16161D;text-decoration:underline;">RevenueHunt: Recommender Quiz for Shopify</a> allows you to show these values by automatically <a href="https://docs.revenuehunt.com/how-to-guides/add-product-metafields/" style="color:#16161D;text-decoration:underline;">syncing the metafields/attributes of products</a> from your store.</p>
  <p style="margin:0 0 6px;font-size:15px;line-height:1.55;color:#0f172a;"><strong>Tip:</strong> <a href="https://revenuehunt.com/product-quiz-marketing-consent/" style="color:#16161D;text-decoration:underline;">This article</a> explains in depth all the different ways you can ask for marketing and data processing consent in your RevenueHunt: Recommender Quiz for Shopify.</p>
</div>

![Product metafields configuration in the Quiz Builder for displaying German PAngV per-100ml unit prices](/img/blog/how-to-adapt-product-quizzes-for-different-markets-and-languages/Screenshot-2024-08-26-091730.webp)

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 04</span> &nbsp;Product metafields configuration for displaying German PAngV per-100ml unit prices. The quiz pulls these synced metafields automatically so the legally-required reference price renders on every product card in EEA markets.</p>

## Technical setup, by platform

The technical setup for routing customers to the right quiz, language and currency depends heavily on which version of the RevenueHunt app you're running. Built for Shopify integrates natively with Shopify Markets; the legacy and multi-platform versions need JavaScript workarounds.

### Platform capability matrix

| Capability | Built for Shopify | Shopify Legacy | WooCommerce | Magento | BigCommerce | Standalone |
|---|---|---|---|---|---|---|
| Native Shopify Markets detection | Yes | No | No | No | No | No |
| Auto currency by market | Yes | Manual | Manual | Manual | Manual | Manual |
| Auto language by market | Yes | JS routing | JS routing | JS routing | JS routing | JS routing |
| Quiz Copilot translation | Yes | No | No | No | No | No |
| Product translations via Storefront API | Yes | No | No | No | No | No |
| EEA compare-at-price compliance | Inherits Shopify Markets | Manual | Manual | Manual | Manual | Manual |
| Setup time (typical) | 30–60 min | 2–4 h | 2–4 h | 2–4 h | 2–4 h | 2–4 h |
| Requires JS workarounds | No | Yes | Yes | Yes | Yes | Yes |

## On Built for Shopify: native Shopify Markets integration

The Built for Shopify version of the app is fully integrated with **Shopify Markets**, which means three things happen automatically:

- **Market detection.** Shopify identifies the visitor's market based on their location and serves the right quiz version assigned to that market.
- **Product translations.** Product titles and descriptions display in the customer's active language automatically, as long as you have translations set up via Shopify's [Translate & Adapt](https://apps.shopify.com/translate-and-adapt) app. The quiz pulls translated product data via the Shopify Storefront API using the detected locale.
- **Currency conversion.** Prices show in the currency assigned to the visitor's market, including any per-market custom formatting you've configured.

### Setup steps

1. Build your primary quiz until it hits the conversion targets you want.
2. From the Dashboard, **duplicate the quiz** (click the `...` menu on the quiz tile → **Duplicate**) once per target market.
3. Translate the questions, answer choices and results-page text in each duplicated quiz. Questions don't translate automatically; only the UI buttons and system messages translate via Quiz Settings.
4. Open **App Settings → Shopify Markets** and assign the correct quiz to each market using the dropdowns.
5. Toggle **Show all locales** if you need to assign different quiz versions to different languages within the same market (e.g. French Canada vs English Canada).
6. Preview each market via the Shopify storefront (not via the in-app preview, which doesn't trigger Shopify Markets routing).

### Quiz Copilot for accelerated translation

The Built for Shopify version includes Quiz Copilot, which can machine-translate every question, answer choice and results-page text in one prompt: "Translate all questions, answer choices, and results page text in this quiz from English to French." Human review is still recommended for brand voice and idiomatic accuracy, but it cuts the initial-pass time from hours to minutes.

### Currency and compare-at-prices on Built for Shopify

Configure currency per market in **App Settings → Shopify Markets**. The default formatting follows Shopify's market settings; you can override with templates like `{{amount}} EUR` or `${{amount}}` for region-specific display preferences.

Note for EEA markets: Shopify Markets may hide compare-at prices in certain regions due to legal restrictions. This is configured in **Shopify Admin → Settings → Markets → Preferences**, not in the RevenueHunt app.

## On Shopify Legacy, WooCommerce, Magento, BigCommerce and Standalone

These versions don't have native market detection. You build the same outcome via a duplicate-quiz-per-language pattern plus JavaScript or subdomain routing.

> **Important limitations on Shopify Legacy and non-Shopify platforms:**
>
> - The quiz can only sync **base products** from your store (main language and main currency).
> - Translation plugins like Weglot or Langify don't assign unique product IDs to translated versions, so the quiz can't sync the translated catalogue automatically.
> - You build per-language quizzes manually; each gets a unique quiz ID.

### Setup pattern: duplicate per language, route via JavaScript or subdomain

1. **Translate manually.** Duplicate the primary quiz once per target language and translate the questions, answer choices and results-page copy in each. Each duplicate gets its own quiz ID.
2. **Use Quiz Settings → Messages** to translate UI button labels and system messages (these can be auto-translated then adjusted).
3. **Publish each translated quiz** on a language-specific page or subdomain: `yourstore.com/en/quiz`, `yourstore.com/fr/quiz`, `yourstore.com/de/quiz`.
4. **Route visitors** to the correct quiz via one of the three workarounds below.

![Quiz duplication and language settings panel in the Quiz Builder for Shopify Legacy and non-Shopify platforms](/img/blog/how-to-adapt-product-quizzes-for-different-markets-and-languages/Screenshot-2024-08-26-092134.webp)

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 05</span> &nbsp;Quiz duplication and language settings on Shopify Legacy and the multi-platform versions. Each language gets its own quiz duplicate with its own quiz ID; the storefront routes to the right one via JavaScript.</p>

### Workaround 1: display the correct quiz based on browser language

Use JavaScript on your storefront to detect the browser's language and load the matching quiz ID. The script should:

- Detect the browser's `navigator.language` value.
- Map the detected language to the corresponding quiz ID from your dashboard.
- Update the quiz embed (script tag or iframe) to point to the correct quiz version.

For the full sample script, see [the docs walkthrough on change-quiz-language](https://docs.revenuehunt.com/how-to-guides/change-quiz-language/#step-2-display-the-correct-quiz-based-on-browser-language).

### Workaround 2: hide the price, redirect to the product page

For multi-currency stores, the simplest workaround is to hide the price on the results page and use "Link to product" as the checkout action. The customer clicks through to the product page on your storefront, where the storefront platform shows the correct currency.

Steps:

1. Open the **Quiz Builder** → **Results Page** → **Results Page Settings**.
2. In **Basic Settings**, find the **Checkout Settings** section and select **Link to product**.
3. Scroll to **Individual Product Settings** and toggle off **Show price**.

The customer now sees the recommendation without a price on the quiz results page, clicks through to the product page on your storefront, and the storefront handles the regional currency natively.

### Workaround 3: redirect to translated product URL via JavaScript

If your storefront serves translated product pages at predictable URLs (e.g. `/en/products/`, `/fr/products/`, `/de/products/`), use JavaScript to rewrite the product links from the quiz results page on the fly:

- Base URL: `https://www.example.com/products/productA`
- Rewritten for French visitors: `https://www.example.com/fr/products/productA`

For the full sample script, see [the docs walkthrough on translated-product-URL redirects](https://docs.revenuehunt.com/how-to-guides/change-quiz-language/#step-3-redirect-to-translated-product-url).

### Alternative: separate storefronts per market

If you operate one storefront per market (e.g. `yourstore.com`, `yourstore.fr`, `yourstore.de`), the simplest setup is to install the quiz app separately on each storefront. Each installation syncs its own base products and you don't need any JavaScript routing. RevenueHunt offers a special pricing arrangement for multi-store setups; [contact the team](https://revenuehunt.com/contact/) if this applies to you.

### Summary of the workarounds

- **Separate domains per market:** no JavaScript needed. Each store has its own quiz install.
- **Single domain, multi-language:** use Workaround 1 (browser-language detection routing).
- **Single domain, multi-currency:** use Workaround 2 (hide price + link to product page).
- **Single domain, both:** combine Workaround 1 + Workaround 3 (browser-detect routing + translated product URL rewrites).

### Testing and optimisation

Localisation doesn't end with the launch of your quiz. Continuous testing and optimisation are necessary to ensure that it performs well in different markets.

**Key points:**

- Conduct **A/B tests for different versions of the quiz** in various markets to determine what works best.
- Collect and **analyse feedback from users** in different regions to identify areas for improvement.
- Regularly **review [quiz performance metrics](https://revenuehunt.com/product-quiz-metrics-what-to-track-to-convert-better/),** such as completion rates and conversion rates, by market to make data-driven adjustments.

<div style="margin:24px 0;padding:18px 24px;background:#f8fafc;border-left:4px solid #16161D;border-radius:6px;">
  <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;">Tip</p>
  <p style="margin:0 0 6px;font-size:15px;line-height:1.55;color:#0f172a;"><a href="https://revenuehunt.com/product-recommendation-quiz/" style="color:#16161D;text-decoration:underline;">RevenueHunt: Recommender Quiz for Shopify</a> app provides detailed analytics of your quiz engagement and responses.</p>
</div>

![Quiz Builder Analytics panel for tracking per-market quiz performance](/img/blog/how-to-adapt-product-quizzes-for-different-markets-and-languages/manual_quizbuilder_metrics_analytics.webp)

<p class="not-prose mt-2 mb-6 text-xs text-slate-500 leading-snug"><span class="font-semibold uppercase tracking-wider text-slate-600">Fig. 06</span> &nbsp;The Quiz Builder analytics panel: per-market completion, drop-off and conversion metrics in one view. The per-market breakdown is what tells you which localisation choices are working and which need another iteration.</p>

## Frequently asked questions

### Which RevenueHunt platforms support Shopify Markets natively?

Only the **Built for Shopify** version. It detects the visitor's market via Shopify Markets and serves the right quiz, language and currency automatically, with product titles and descriptions pulled in the visitor's locale via the Shopify Storefront API (when set up via Translate & Adapt). The Shopify Legacy, WooCommerce, Magento, BigCommerce and Standalone versions don't have native market detection and rely on JavaScript routing or separate storefronts per market.

### Do questions and answer choices translate automatically?

No on every platform. The Quiz Builder UI elements (button labels, system messages) translate automatically and can be adjusted per language; questions, answer choices and results-page copy require manual translation. On Built for Shopify, Quiz Copilot can machine-translate the entire quiz in one prompt to accelerate the first pass. Human review is recommended for brand voice and idiomatic accuracy.

### How does multi-currency work?

On Built for Shopify, currency follows Shopify Markets natively: prices display in the visitor's market currency with optional custom formatting templates (`{{amount}} EUR`, `${{amount}}`, etc.) configured in **App Settings → Shopify Markets**. On the other platforms, the quiz syncs only the base currency from your store; the workaround is to hide the price on the results page and use "Link to product" so the visitor sees the correct regional currency on the product page itself.

### What about EU compare-at prices in EEA markets?

Shopify Markets handles this at the platform level: certain EEA markets restrict compare-at-price display due to legal requirements, and the relevant toggle lives in **Shopify Admin → Settings → Markets → Preferences** (not in the RevenueHunt app). The quiz inherits whatever Shopify Markets is configured to do.

### Do automatic translation plugins like Weglot or Langify work with the quiz?

Not directly. These plugins translate the storefront but don't assign unique product IDs to the translated catalogue, which means the quiz can't sync the translated products as distinct entries. The supported workarounds are: separate quiz installs per language with manual translation, JavaScript-based browser-language routing, or hide-price-and-link-to-product for multi-currency.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Which RevenueHunt platforms support Shopify Markets natively?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Only the Built for Shopify version. It detects the visitor's market via Shopify Markets and serves the right quiz, language and currency automatically, with product titles and descriptions pulled in the visitor's locale via the Shopify Storefront API. The Shopify Legacy, WooCommerce, Magento, BigCommerce and Standalone versions don't have native market detection and rely on JavaScript routing or separate storefronts per market."
      }
    },
    {
      "@type": "Question",
      "name": "Do questions and answer choices translate automatically?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No on every platform. The Quiz Builder UI elements translate automatically and can be adjusted per language; questions, answer choices and results-page copy require manual translation. On Built for Shopify, Quiz Copilot can machine-translate the entire quiz in one prompt to accelerate the first pass. Human review is recommended for brand voice."
      }
    },
    {
      "@type": "Question",
      "name": "How does multi-currency work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "On Built for Shopify, currency follows Shopify Markets natively: prices display in the visitor's market currency with optional custom formatting templates configured in App Settings, Shopify Markets. On the other platforms, the quiz syncs only the base currency from your store; the workaround is to hide the price on the results page and use Link to product so the visitor sees the correct regional currency on the product page."
      }
    },
    {
      "@type": "Question",
      "name": "What about EU compare-at prices in EEA markets?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Shopify Markets handles this at the platform level: certain EEA markets restrict compare-at-price display due to legal requirements, and the relevant toggle lives in Shopify Admin, Settings, Markets, Preferences (not in the RevenueHunt app). The quiz inherits whatever Shopify Markets is configured to do."
      }
    },
    {
      "@type": "Question",
      "name": "Do automatic translation plugins like Weglot or Langify work with the quiz?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not directly. These plugins translate the storefront but don't assign unique product IDs to the translated catalogue, which means the quiz can't sync the translated products as distinct entries. The supported workarounds are: separate quiz installs per language with manual translation, JavaScript-based browser-language routing, or hide-price-and-link-to-product for multi-currency."
      }
    }
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Adapt a product quiz for different markets and languages",
  "description": "Localise a RevenueHunt product recommendation quiz across markets, languages and currencies on Built for Shopify or other platforms.",
  "totalTime": "PT45M",
  "step": [
    {"@type": "HowToStep", "name": "Enable Shopify Markets", "text": "In Shopify Admin, enable Markets for each region you sell to."},
    {"@type": "HowToStep", "name": "Add languages", "text": "Under Shopify Settings, Languages, add and publish each target language via Translate & Adapt."},
    {"@type": "HowToStep", "name": "Duplicate the quiz per market", "text": "From the RevenueHunt Dashboard, duplicate the quiz once per target market."},
    {"@type": "HowToStep", "name": "Translate with Quiz Copilot", "text": "Open Quiz Copilot and run a translate-all prompt for each duplicated quiz, then human-review for brand voice."},
    {"@type": "HowToStep", "name": "Assign quizzes to markets", "text": "In App Settings, Shopify Markets, assign each translated quiz to its corresponding market."},
    {"@type": "HowToStep", "name": "Verify currency display", "text": "Confirm prices display in the visitor's market currency on the results page."},
    {"@type": "HowToStep", "name": "Publish", "text": "Publish each quiz; Shopify Markets routes visitors to the right version automatically."}
  ]
}
</script>

## Where this fits

Localisation is not one-size-fits-all. Each market deserves a tailored approach reflecting its cultural context, language, currency and regulatory environment. Built for Shopify makes this dramatically easier via the native Shopify Markets integration; on other platforms the same outcome takes manual setup and JavaScript glue, but the same outcome is achievable.

For the foundations of the quiz itself, see [how to build a successful product recommendation quiz](https://revenuehunt.com/how-to-build-a-successful-ecommerce-quiz/). For per-market consent design (GDPR / CASL / regional opt-in patterns), see [smart ways to ask for marketing consent in a product quiz](https://revenuehunt.com/product-quiz-marketing-consent/). For per-market quiz performance tracking, see [product quiz metrics: what to track to convert better](https://revenuehunt.com/product-quiz-metrics-what-to-track-to-convert-better/). For the broader category and use cases, see [the ecommerce quiz guide](https://revenuehunt.com/ecommerce-quiz/), and for clever per-market data-capture patterns see [zero-party data examples](https://revenuehunt.com/zero-party-data-examples/).

[Install RevenueHunt: Recommender Quiz for Shopify](https://apps.shopify.com/product-recommendation-quiz-revenuehunt/install?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=markets_languages) and start building your first multi-market quiz today. Free plan available. Full setup reference: [adapt quizzes to markets](https://docs.revenuehunt.com/customer-success/adapt-quizzes-to-markets/).
