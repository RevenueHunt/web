/** Data for the /compare/<slug>/ competitor comparison pages.
 *  One template (components/pages/ComparePage.astro) renders every entry.
 *
 *  RevenueHunt facts are sourced from product-compendium.md and
 *  docs.revenuehunt.com (plans-pricing). Competitor facts are from each
 *  vendor's own public site, captured on the date in `verifiedAsOf` — keep
 *  comparisons factual and dated (Google structured-data + fairness policy).
 *
 *  Cell value convention in `rows[].rh` / `rows[].them`:
 *    "yes" → green check · "no" → gray dash · any other string → literal text.
 */

export interface CompareRow {
  feature: string;
  rh: string;
  them: string;
}

export interface CompareCard {
  title: string;
  body: string;
}

export interface CompareFaq {
  question: string;
  answer: string;
}

export interface Competitor {
  slug: string;
  /** Display name, e.g. "Octane AI". */
  name: string;
  /** What the competitor is, in a few words, for the breadcrumb chip + prose. */
  category: string;
  /** SEO <title> (without the " - RevenueHunt" suffix the layout appends). */
  title: string;
  /** Meta description. */
  description: string;
  /** H1. */
  h1: string;
  /** Hero sub-headline (answer-first, 1 sentence). */
  heroSubtitle: string;
  /** 1-2 short paragraphs: the honest framing of what the competitor is. */
  intro: string[];
  /** Feature comparison table rows. */
  rows: CompareRow[];
  /** "Why merchants switch" cards — factual RevenueHunt advantages. */
  whySwitch: CompareCard[];
  /** Honest "who the competitor is a good fit for" — credibility/fairness. */
  bestFor: string;
  /** Short "switching" paragraph. */
  migration: string;
  /** FAQ — rendered visibly AND as FAQPage JSON-LD. */
  faqs: CompareFaq[];
  /** Date the competitor facts were last checked. */
  verifiedAsOf: string;
}

// Shared RevenueHunt column values (compendium + docs verified). Kept as
// named constants so every competitor table tells the same RH story.
const RH = {
  freePlan: "yes",
  startingPaid: "$39/mo",
  ecommerceRecs: "yes",
  catalogRecs: "yes",
  shopifyNative: "yes",
  multiPlatform: "yes",
  branching: "yes",
  analytics: "yes",
  emailIntegrations: "yes",
  aiBuilder: "yes",
  noForcedBranding: "yes",
  unlimitedQuizzes: "yes",
  transparentPricing: "yes",
} as const;

export const COMPETITORS: Record<string, Competitor> = {
  "octane-ai": {
    slug: "octane-ai",
    name: "Octane AI",
    category: "Shopify quiz app",
    title: "RevenueHunt vs Octane AI — Octane AI alternative",
    description:
      "RevenueHunt vs Octane AI: free plan, no Shopify watermark, and unlimited quizzes from $39/mo. The Octane AI alternative for product quizzes.",
    h1: "RevenueHunt vs Octane AI",
    heroSubtitle:
      "Both build product recommendation quizzes for Shopify. RevenueHunt adds a free plan, unlimited quizzes, and no watermark — at a fraction of the price.",
    intro: [
      "Octane AI is a product quiz and personalization app built for Shopify, with credit-based pricing that starts at $50/month and no free plan. It's a capable tool — especially for larger beauty brands — but the entry plan caps you at two quizzes and keeps the Octane AI logo on your quiz until you reach the $200/month Plus plan.",
      "RevenueHunt is the product recommendation quiz used by 20,000+ brands (4.9★, 450+ reviews). It starts free, never adds a watermark to your Shopify quiz on any plan, lets you build unlimited quizzes from day one, and works beyond Shopify — on WooCommerce, BigCommerce, Magento, Wix, and more.",
    ],
    rows: [
      { feature: "Free plan", rh: RH.freePlan, them: "no" },
      { feature: "Starting paid price", rh: RH.startingPaid, them: "$50/mo" },
      { feature: "Pricing model", rh: "Flat, by responses", them: "Credit-based + overage" },
      { feature: "Unlimited quizzes on the entry plan", rh: RH.unlimitedQuizzes, them: "no" },
      { feature: "No provider watermark on Shopify (any plan)", rh: RH.noForcedBranding, them: "Logo until $200/mo Plus" },
      { feature: "Recommends real products from your catalog", rh: RH.catalogRecs, them: "yes" },
      { feature: "Native Shopify app (Built for Shopify)", rh: RH.shopifyNative, them: "yes" },
      { feature: "Works on WooCommerce, BigCommerce, Magento, Wix & more", rh: RH.multiPlatform, them: "no" },
      { feature: "AI quiz builder (60-second setup)", rh: RH.aiBuilder, them: "yes" },
      { feature: "Unlimited conditional / branching logic", rh: RH.branching, them: "yes" },
      { feature: "Question-by-question drop-off analytics", rh: RH.analytics, them: "yes" },
      { feature: "Klaviyo & email / CRM integrations", rh: RH.emailIntegrations, them: "yes" },
    ],
    whySwitch: [
      {
        title: "Start free, then pay a flat price",
        body: "Octane AI has no free plan and starts at $50/month on credits, with $0.10 per-credit overages once you run out. RevenueHunt has a genuinely free plan and flat pricing by responses from $39/month — no credit math, no surprise overages.",
      },
      {
        title: "Keep your branding from day one",
        body: "Octane AI shows its logo on your quiz until you upgrade to the $200/month Plus plan. RevenueHunt never adds a watermark to Shopify quizzes — on any plan, including Free.",
      },
      {
        title: "Build as many quizzes as you need",
        body: "Octane AI's entry plan limits you to two quizzes. RevenueHunt lets you create unlimited quizzes on every plan, so you can run a quiz per collection, campaign, or landing page.",
      },
      {
        title: "Sell anywhere, not just Shopify",
        body: "Octane AI is Shopify-only. RevenueHunt runs natively on Shopify and also on WooCommerce, BigCommerce, Magento, Wix, Squarespace, and as a standalone hosted quiz.",
      },
    ],
    bestFor:
      "Octane AI is a reasonable fit for enterprise beauty brands already on Shopify Plus that want deep AI personalization and have the budget for $200/month and up. If you want a free plan, flat pricing, unbranded quizzes, or multi-platform support, RevenueHunt is the better fit.",
    migration:
      "Switching from Octane AI is quick: rebuild your quiz in RevenueHunt's drag-and-drop builder (or generate it in 60 seconds with our AI Copilot), embed it, and connect Klaviyo. Most stores are live the same day — and our support team helps you migrate.",
    faqs: [
      {
        question: "Is RevenueHunt cheaper than Octane AI?",
        answer:
          "Yes. RevenueHunt has a free plan and paid plans from $39/month with flat, response-based pricing. Octane AI has no free plan, starts at $50/month on a credit system, and charges $0.10 per credit for overages.",
      },
      {
        question: "Does RevenueHunt add its logo to my quiz like Octane AI?",
        answer:
          "No. RevenueHunt never adds a watermark to Shopify quizzes on any plan. Octane AI keeps its logo on your quiz until you upgrade to the $200/month Plus plan.",
      },
      {
        question: "Does RevenueHunt work on platforms other than Shopify?",
        answer:
          "Yes. RevenueHunt works on Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace, and as a standalone hosted quiz. Octane AI is Shopify-only.",
      },
      {
        question: "Can I migrate my Octane AI quiz to RevenueHunt?",
        answer:
          "Yes. Recreate your quiz in RevenueHunt's builder or generate it with the AI Quiz Copilot, then connect your email tool. Most merchants are live the same day, and our team helps with the migration.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  digioh: {
    slug: "digioh",
    name: "Digioh",
    category: "enterprise personalization platform",
    title: "RevenueHunt vs Digioh — a self-serve alternative",
    description:
      "RevenueHunt vs Digioh: a focused, self-serve product quiz app with a free plan and pricing from $39/mo — no enterprise sales call required.",
    h1: "RevenueHunt vs Digioh",
    heroSubtitle:
      "Digioh is a sales-led enterprise personalization platform. RevenueHunt is a focused product quiz app you can install today — free to start, transparent pricing, live the same day.",
    intro: [
      "Digioh is a broad personalization platform that combines product quizzes, pop-ups, identity recognition, and onsite personalization, with 300+ integrations. It's aimed at enterprise teams and sold through demos and custom contracts — there's no public pricing and no free plan.",
      "RevenueHunt is a focused product recommendation quiz used by 20,000+ brands (4.9★, 450+ reviews). It does one thing extremely well — turn shopper answers into the right product recommendations — with transparent pricing, a free plan, and same-day setup, no sales call required.",
    ],
    rows: [
      { feature: "Free plan", rh: RH.freePlan, them: "no" },
      { feature: "Transparent public pricing", rh: RH.transparentPricing, them: "Custom / request a demo" },
      { feature: "Starting price", rh: RH.startingPaid, them: "Sales-led (enterprise)" },
      { feature: "Self-serve setup (no sales call)", rh: "yes", them: "no" },
      { feature: "Purpose-built for product recommendation quizzes", rh: RH.ecommerceRecs, them: "Quiz is one module of a platform" },
      { feature: "Recommends real products from your catalog", rh: RH.catalogRecs, them: "yes" },
      { feature: "Native Shopify app (Built for Shopify)", rh: RH.shopifyNative, them: "Via integration" },
      { feature: "AI quiz builder (60-second setup)", rh: RH.aiBuilder, them: "no" },
      { feature: "Unlimited quizzes", rh: RH.unlimitedQuizzes, them: "yes" },
      { feature: "Unlimited conditional / branching logic", rh: RH.branching, them: "yes" },
      { feature: "Question-by-question drop-off analytics", rh: RH.analytics, them: "yes" },
      { feature: "Klaviyo & email / CRM integrations", rh: RH.emailIntegrations, them: "yes" },
    ],
    whySwitch: [
      {
        title: "Self-serve, not a sales call",
        body: "Digioh is sold through demos and custom enterprise contracts with no public pricing. RevenueHunt is install-and-go: pick a plan, build your quiz, and publish — no contracts, no procurement.",
      },
      {
        title: "Live in minutes, not weeks",
        body: "Digioh is a full personalization platform that layers across your stack and typically needs onboarding. RevenueHunt is a focused quiz app most merchants launch the same day, with an AI Copilot that scaffolds a full quiz in 60 seconds.",
      },
      {
        title: "Pricing that fits a growing brand",
        body: "Enterprise contracts are overkill for most stores. RevenueHunt starts free and scales by responses from $39/month — you only pay for what your quizzes actually do.",
      },
      {
        title: "Depth where it counts: recommendations",
        body: "RevenueHunt's upvote-and-exclusion engine maps answers to the exact products, variants, and collections from your live catalog, with conditional results blocks and direct add-to-cart — purpose-built for product discovery rather than a quiz bolted onto a platform.",
      },
    ],
    bestFor:
      "Digioh fits enterprise teams that want a single platform for identity, pop-ups, and onsite personalization across many channels, and have the budget and team for a sales-led rollout. If you want a focused, affordable, self-serve product quiz, RevenueHunt is the better fit.",
    migration:
      "Moving from Digioh is straightforward: build your quiz in RevenueHunt (or generate it with the AI Copilot), embed it, and connect Klaviyo or your CRM. No implementation project — most stores are live the same day, and support helps you get there.",
    faqs: [
      {
        question: "How much does RevenueHunt cost compared to Digioh?",
        answer:
          "RevenueHunt has a free plan and transparent paid plans from $39/month. Digioh does not publish pricing — it's a sales-led enterprise platform that quotes custom pricing after a demo.",
      },
      {
        question: "Is RevenueHunt a full personalization platform like Digioh?",
        answer:
          "No — and that's the point. Digioh bundles quizzes, pop-ups, identity, and onsite personalization. RevenueHunt focuses on product recommendation quizzes and does that one job exceptionally well, with self-serve setup and no sales call.",
      },
      {
        question: "How long does setup take versus Digioh?",
        answer:
          "Most RevenueHunt merchants launch the same day. The AI Quiz Copilot can scaffold a complete quiz — questions, logic, and product mappings — in about 60 seconds. Digioh is typically an onboarded, sales-led implementation.",
      },
      {
        question: "Does RevenueHunt collect zero-party data like Digioh?",
        answer:
          "Yes. Every quiz answer is zero-party data your shoppers volunteer. RevenueHunt syncs responses and customer tags to Klaviyo, Mailchimp, Omnisend, HubSpot, and more for segmentation and personalized marketing.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  typeform: {
    slug: "typeform",
    name: "Typeform",
    category: "general form & survey builder",
    title: "RevenueHunt vs Typeform for ecommerce quizzes",
    description:
      "RevenueHunt vs Typeform: a Built-for-Shopify quiz that recommends real products and drives sales — not just a form. Free plan, from $39/mo.",
    h1: "RevenueHunt vs Typeform",
    heroSubtitle:
      "Typeform builds beautiful forms and surveys. RevenueHunt builds product recommendation quizzes that connect to your Shopify catalog and turn answers into sales.",
    intro: [
      "Typeform is a general-purpose online form and survey builder. It's great for surveys, lead forms, and research, with conversational, one-question-at-a-time design — but it has no native Shopify integration, no product catalog sync, and no recommendation engine. It collects answers; it doesn't recommend products.",
      "RevenueHunt is a Built-for-Shopify product recommendation quiz used by 20,000+ brands (4.9★, 450+ reviews). It maps each shopper's answers to the right products from your live catalog, shows a personalized results page with direct add-to-cart, and captures leads to Klaviyo — a sales funnel, not just a form.",
    ],
    rows: [
      { feature: "Free plan", rh: RH.freePlan, them: "yes (limited)" },
      { feature: "Starting paid price", rh: RH.startingPaid, them: "$29/mo" },
      { feature: "Built for ecommerce product recommendations", rh: RH.ecommerceRecs, them: "no" },
      { feature: "Recommends real products from your store catalog", rh: RH.catalogRecs, them: "no" },
      { feature: "Product catalog sync", rh: "yes", them: "no" },
      { feature: "Native Shopify app (Built for Shopify)", rh: RH.shopifyNative, them: "no" },
      { feature: "Results page with direct add-to-cart", rh: "yes", them: "no" },
      { feature: "AI quiz builder (60-second setup)", rh: RH.aiBuilder, them: "yes (AI forms)" },
      { feature: "Conditional / branching logic", rh: RH.branching, them: "yes (logic jumps)" },
      { feature: "Question-by-question drop-off analytics", rh: RH.analytics, them: "yes" },
      { feature: "Klaviyo & email / CRM integrations", rh: RH.emailIntegrations, them: "yes" },
      { feature: "Works on WooCommerce, BigCommerce, Magento & more", rh: RH.multiPlatform, them: "no" },
    ],
    whySwitch: [
      {
        title: "Recommends products, not just collects answers",
        body: "Typeform records responses and stops there. RevenueHunt's recommendation engine ranks the exact products, variants, and collections from your catalog based on each shopper's answers and shows them on a personalized results page.",
      },
      {
        title: "Built for Shopify and ecommerce",
        body: "Typeform has no native Shopify integration and no catalog sync. RevenueHunt is a Built-for-Shopify app with real-time catalog sync and automatic localization of product titles, descriptions, and prices via Shopify Markets.",
      },
      {
        title: "A funnel, not a form",
        body: "RevenueHunt turns a quiz into a sales path: personalized results, direct add-to-cart, discount blocks, and email capture to Klaviyo — so the quiz actually drives revenue, not just data.",
      },
      {
        title: "Made for merchants",
        body: "Skip generic form-building. Use ready-made quiz templates for skincare, supplements, fashion, and more, or let the AI Copilot build a complete product quiz from a description of your store in about 60 seconds.",
      },
    ],
    bestFor:
      "Typeform is excellent for surveys, lead-gen forms, feedback, and research where you don't need to recommend products. If your goal is to help Shopify shoppers find the right product and buy it, RevenueHunt is purpose-built for that.",
    migration:
      "Already using a Typeform quiz? Rebuild it in RevenueHunt in minutes — or generate it with the AI Copilot — link your products, and connect Klaviyo. You keep the conversational feel and add a real recommendation engine and add-to-cart.",
    faqs: [
      {
        question: "Can Typeform recommend products like RevenueHunt?",
        answer:
          "No. Typeform is a general form and survey builder with no product catalog sync or recommendation engine. RevenueHunt maps quiz answers to real products from your store and shows them on a personalized results page with add-to-cart.",
      },
      {
        question: "Does RevenueHunt integrate with Shopify and Typeform doesn't?",
        answer:
          "RevenueHunt is a Built-for-Shopify app with real-time catalog sync and Shopify Markets localization. Typeform has no native Shopify product-recommendation integration — it's not built for ecommerce product discovery.",
      },
      {
        question: "Is RevenueHunt better than Typeform for an ecommerce quiz?",
        answer:
          "For product recommendation quizzes, yes — RevenueHunt is purpose-built for it. For general surveys and lead forms, Typeform is a fine choice. They solve different problems.",
      },
      {
        question: "Can I capture leads and send them to Klaviyo?",
        answer:
          "Yes. RevenueHunt captures emails in the quiz and syncs responses and customer tags to Klaviyo, Mailchimp, Omnisend, HubSpot, and more, so you can follow up with personalized campaigns.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  zoovu: {
    slug: "zoovu",
    name: "Zoovu",
    category: "enterprise product-discovery platform",
    title: "RevenueHunt vs Zoovu — a self-serve alternative",
    description:
      "RevenueHunt vs Zoovu: a focused, self-serve Shopify product quiz with a free plan and pricing from $39/mo — not an enterprise, sales-led discovery suite.",
    h1: "RevenueHunt vs Zoovu",
    heroSubtitle:
      "Zoovu is an enterprise product-discovery and guided-selling platform sold by demo. RevenueHunt is a focused product quiz you can install today — free to start, transparent pricing, live the same day.",
    intro: [
      "Zoovu is an enterprise product-discovery platform that bundles AI search, guided selling, product recommendations, and visual configurators (CPQ) for large B2C and B2B brands with huge, complex catalogs. It's platform-agnostic, sold through demos with custom enterprise pricing, and has no free plan or self-serve signup.",
      "RevenueHunt is a focused product recommendation quiz used by 20,000+ brands (4.9★, 450+ reviews). Instead of an enterprise discovery suite, it does one thing exceptionally well — guide Shopify shoppers to the right product — with transparent pricing, a free plan, and same-day setup, no sales call required.",
    ],
    rows: [
      { feature: "Free plan", rh: RH.freePlan, them: "no" },
      { feature: "Transparent public pricing", rh: RH.transparentPricing, them: "Custom / request a demo" },
      { feature: "Starting price", rh: RH.startingPaid, them: "Sales-led (enterprise)" },
      { feature: "Self-serve setup (no sales call)", rh: "yes", them: "no" },
      { feature: "Purpose-built for product recommendation quizzes", rh: RH.ecommerceRecs, them: "Quiz is one module of a discovery suite" },
      { feature: "Recommends real products from your catalog", rh: RH.catalogRecs, them: "yes" },
      { feature: "Native Shopify app (Built for Shopify)", rh: RH.shopifyNative, them: "Via integration" },
      { feature: "AI quiz builder (60-second setup)", rh: RH.aiBuilder, them: "Enterprise AI suite" },
      { feature: "Unlimited quizzes", rh: RH.unlimitedQuizzes, them: "yes" },
      { feature: "Unlimited conditional / branching logic", rh: RH.branching, them: "yes" },
      { feature: "Question-by-question drop-off analytics", rh: RH.analytics, them: "yes" },
      { feature: "Klaviyo & email / CRM integrations", rh: RH.emailIntegrations, them: "yes" },
    ],
    whySwitch: [
      {
        title: "Self-serve, not a sales call",
        body: "Zoovu is sold through demos and custom enterprise contracts with no public pricing. RevenueHunt is install-and-go: pick a plan, build your quiz, and publish — no procurement, no implementation project.",
      },
      {
        title: "Live in minutes, not a rollout",
        body: "Zoovu is a heavyweight discovery suite that spans search, configurators, and guided selling across many systems. RevenueHunt is a focused quiz app most merchants launch the same day, with an AI Copilot that scaffolds a full quiz in 60 seconds.",
      },
      {
        title: "Pricing that fits a growing brand",
        body: "Enterprise discovery platforms are priced for global catalogs and big teams. RevenueHunt starts free and scales by responses from $39/month — right-sized for Shopify and Shopify Plus brands.",
      },
      {
        title: "Built-for-Shopify simplicity",
        body: "RevenueHunt is a Built-for-Shopify app with real-time catalog sync and Shopify Markets localization, rated 4.9★ by 450+ merchants — the depth you need for product discovery without enterprise overhead.",
      },
    ],
    bestFor:
      "Zoovu fits large enterprises with massive, complex catalogs — consumer electronics, appliances, industrial, B2B — that need configurators, CPQ, and guided selling across many systems, with the budget and team for an enterprise rollout. If you want a focused, affordable, self-serve Shopify quiz, RevenueHunt is the better fit.",
    migration:
      "Moving from Zoovu is straightforward: build your quiz in RevenueHunt (or generate it with the AI Copilot), embed it, and connect Klaviyo or your CRM. No implementation project — most stores are live the same day, and support helps you get there.",
    faqs: [
      {
        question: "How much does RevenueHunt cost compared to Zoovu?",
        answer:
          "RevenueHunt has a free plan and transparent paid plans from $39/month. Zoovu does not publish pricing — it's an enterprise, sales-led platform that quotes custom pricing after a demo.",
      },
      {
        question: "Is RevenueHunt an enterprise discovery platform like Zoovu?",
        answer:
          "No — and that's the point. Zoovu bundles AI search, configurators, CPQ, and guided selling for large catalogs. RevenueHunt focuses on product recommendation quizzes for Shopify and does that one job exceptionally well, with self-serve setup and no sales call.",
      },
      {
        question: "Does RevenueHunt do guided selling like Zoovu?",
        answer:
          "Yes. A RevenueHunt quiz is guided selling: it asks the right questions and maps answers to the exact products from your catalog, with a personalized results page and direct add-to-cart — without enterprise pricing or a rollout.",
      },
      {
        question: "How long does setup take versus Zoovu?",
        answer:
          "Most RevenueHunt merchants launch the same day, and the AI Quiz Copilot can scaffold a complete quiz in about 60 seconds. Zoovu is typically a sales-led enterprise implementation.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  jebbit: {
    slug: "jebbit",
    name: "Jebbit",
    category: "enterprise declared-data platform (now part of BlueConic)",
    title: "RevenueHunt vs Jebbit — a self-serve alternative",
    description:
      "RevenueHunt vs Jebbit: a standalone, self-serve Shopify product quiz with a free plan from $39/mo. Jebbit is now part of BlueConic's enterprise CDP.",
    h1: "RevenueHunt vs Jebbit",
    heroSubtitle:
      "Jebbit is now part of BlueConic's enterprise customer-data platform, sold by demo. RevenueHunt is a standalone, self-serve product quiz — free to start, Shopify-native, live the same day.",
    intro: [
      "Jebbit builds interactive quizzes, product finders, and preference flows to collect declared (zero-party) data. It was acquired and is now “Experiences by Jebbit,” part of BlueConic's customer-data platform — aimed at enterprise and mid-market B2C brands (L'Oréal, Express, Heineken), platform-agnostic, and sold through demos with no public pricing or free plan.",
      "RevenueHunt is a standalone product recommendation quiz used by 20,000+ brands (4.9★, 450+ reviews). You don't have to buy a CDP to use it: it's a focused, Built-for-Shopify quiz with transparent pricing, a free plan, and same-day setup — self-serve, no sales call.",
    ],
    rows: [
      { feature: "Free plan", rh: RH.freePlan, them: "no" },
      { feature: "Transparent public pricing", rh: RH.transparentPricing, them: "Custom / request a demo" },
      { feature: "Starting price", rh: RH.startingPaid, them: "Sales-led (enterprise)" },
      { feature: "Self-serve setup (no sales call)", rh: "yes", them: "no" },
      { feature: "Standalone product (no platform purchase required)", rh: "yes", them: "Now part of BlueConic CDP" },
      { feature: "Recommends real products from your catalog", rh: RH.catalogRecs, them: "yes" },
      { feature: "Native Shopify app (Built for Shopify)", rh: RH.shopifyNative, them: "Via integration" },
      { feature: "AI quiz builder (60-second setup)", rh: RH.aiBuilder, them: "no" },
      { feature: "Unlimited quizzes", rh: RH.unlimitedQuizzes, them: "yes" },
      { feature: "Unlimited conditional / branching logic", rh: RH.branching, them: "yes" },
      { feature: "Question-by-question drop-off analytics", rh: RH.analytics, them: "yes" },
      { feature: "Captures zero-party / declared data", rh: "yes", them: "yes" },
    ],
    whySwitch: [
      {
        title: "A standalone quiz, not a platform purchase",
        body: "Jebbit is now “Experiences by Jebbit” inside BlueConic's CDP. RevenueHunt is a focused app you can run on its own — no customer-data platform to buy or implement.",
      },
      {
        title: "Self-serve, not a sales call",
        body: "Jebbit/BlueConic is sold through demos and custom enterprise contracts with no public pricing. RevenueHunt is install-and-go with a free plan and transparent pricing from $39/month.",
      },
      {
        title: "Built for Shopify, live the same day",
        body: "RevenueHunt is a Built-for-Shopify app with real-time catalog sync and direct add-to-cart, and an AI Copilot that scaffolds a full quiz in 60 seconds — most merchants launch the same day.",
      },
      {
        title: "Still own your zero-party data",
        body: "Every quiz answer is zero-party data your shoppers volunteer. RevenueHunt syncs responses and customer tags to Klaviyo, Mailchimp, Omnisend, HubSpot, and more — no CDP required to put it to work.",
      },
    ],
    bestFor:
      "Jebbit, as part of BlueConic, fits enterprise B2C brands that want declared-data experiences tightly coupled to a full customer-data platform and activated across many channels, with the budget for a CDP. If you want a standalone, affordable, self-serve Shopify quiz, RevenueHunt is the better fit.",
    migration:
      "Moving off Jebbit — or evaluating BlueConic — is simple: build your quiz in RevenueHunt (or generate it with the AI Copilot), embed it, and connect Klaviyo or your CRM. Most stores are live the same day, and your zero-party data keeps flowing to your email tools.",
    faqs: [
      {
        question: "Is Jebbit still available on its own?",
        answer:
          "Jebbit is now “Experiences by Jebbit,” part of BlueConic's customer-data platform. RevenueHunt is a standalone product quiz you can use without buying a CDP — self-serve, with a free plan from $39/month.",
      },
      {
        question: "How much does RevenueHunt cost compared to Jebbit?",
        answer:
          "RevenueHunt has a free plan and transparent paid plans from $39/month. Jebbit/BlueConic does not publish pricing — it's an enterprise, sales-led platform that quotes custom pricing after a demo.",
      },
      {
        question: "Does RevenueHunt collect zero-party (declared) data like Jebbit?",
        answer:
          "Yes. Every quiz answer is zero-party data your shoppers volunteer. RevenueHunt syncs responses and customer tags to Klaviyo, Mailchimp, Omnisend, HubSpot, and more for segmentation and personalized marketing.",
      },
      {
        question: "How long does setup take versus Jebbit?",
        answer:
          "Most RevenueHunt merchants launch the same day, and the AI Quiz Copilot can scaffold a complete quiz in about 60 seconds. Jebbit/BlueConic is typically a sales-led enterprise implementation.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },
};

/** Stable order for sibling "other comparisons" links. */
export const COMPETITOR_ORDER = ["octane-ai", "digioh", "zoovu", "jebbit", "typeform"] as const;
