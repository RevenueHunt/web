/**
 * Data for the "State of product recommendation quizzes" benchmark report.
 *
 * Single source of truth for three deliverables that must stay in sync:
 *   - the report page  (src/pages/state-of-product-recommendation-quizzes/index.astro)
 *   - the PDF          (scripts/generate-benchmark-report.ts -> public/reports/*.pdf)
 *   - the stat cards   (scripts/generate-stat-cards.ts -> public/reports/cards/*.png)
 *
 * Every figure is aggregate and anonymized (no individual store is identifiable),
 * pooled across thousands of responses / hundreds of stores, with RevenueHunt's
 * own demo shops excluded. Provenance + method live in PRD-Octane-AI-SEO-
 * Reverse-Engineering.md (W7 deep-dive). Public numbers signed off by Alex
 * 2026-06-08: strong verticals shown individually with exact rate + sample size;
 * weak/high-ticket verticals collapsed into one grouped line.
 *
 * All conversion figures are FLOORS: attribution is still attaching (9% of first
 * orders land 30+ days out) and cross-device / untracked orders never attach.
 */

export const REPORT = {
  title: "The state of product recommendation quizzes",
  subtitle: "2026 benchmark report",
  slug: "state-of-product-recommendation-quizzes",
  // ISO dates; dateModified is updated on every substantive edit.
  datePublished: "2026-06-08",
  dateModified: "2026-06-08",
  description:
    "How product recommendation quizzes really perform: conversion, completion, and average order value, benchmarked from 45M+ real quiz responses across 20,000+ ecommerce stores.",
  pdfPath: "/reports/state-of-product-recommendation-quizzes-2026.pdf",
};

/** Dataset the report is built on (already public on the homepage). */
export const DATASET = {
  responses: "45M+",
  responsesNote: "quiz responses analyzed",
  revenue: "$370M+",
  revenueNote: "in merchant revenue generated",
  brands: "20,000+",
  brandsNote: "ecommerce stores",
  platforms: "Shopify, WooCommerce, BigCommerce, Magento, Wix and standalone",
};

/**
 * Headline funnel. `completedConv` is the load-bearing stat: orders attributed
 * to a quiz response / completed quizzes. It is a quiz-TAKER rate, not a
 * site-wide rate (see methodology). `baselinePct` is a round 2% store average.
 */
export const HEADLINE = {
  completedConv: 5.5, // %
  completedOneIn: 18, // "1 in 18"
  completionRate: 69, // % of starters who finish
  abandonRate: 31, // % who drop before results
  startedConv: 3.8, // % of starters who order
  startedOneIn: 26, // "1 in 26"
  baselinePct: 2, // round store-average baseline used for the multiple
  multiple: 2.75, // 5.5 / 2
  multiplePct: 275,
};

export interface VerticalRow {
  vertical: string;
  /** Conversion rate, response -> order, as a percentage. */
  rate: number;
  /** Sample size (responses) for this row; null for the pooled total. */
  n: number | null;
  /** "consumable" verticals are the strong cluster; "grouped" is the high-ticket roll-up. */
  kind: "consumable" | "considered" | "grouped" | "total";
  note?: string;
}

/**
 * Conversion by category (response -> order). Strong + mid verticals shown
 * individually with exact rate + n; the high-ticket / high-consideration set is
 * collapsed into one grouped row (Alex's call: keep it honest and complete
 * without listing six unflattering category names as citable rows). Pooled
 * across 9 settled response-id slices (~167k responses); demo shops excluded.
 */
export const VERTICAL_CONVERSION: VerticalRow[] = [
  { vertical: "Fragrance", rate: 6.9, n: 3989, kind: "consumable" },
  { vertical: "Haircare", rate: 6.7, n: 7980, kind: "consumable" },
  { vertical: "Supplements & health", rate: 6.2, n: 1046, kind: "consumable" },
  { vertical: "Beauty & skincare", rate: 6.1, n: 16225, kind: "consumable" },
  { vertical: "Coffee & tea", rate: 5.0, n: 1725, kind: "consumable" },
  { vertical: "CBD", rate: 4.3, n: 719, kind: "considered" },
  {
    vertical: "Other sectors",
    rate: 3.6,
    n: 4500,
    kind: "grouped",
    note: "Everything outside the named categories, including generic and higher-consideration quizzes. Measured at about 3.6%, around 180% of a typical store.",
  },
  {
    vertical: "All quiz categories (pooled)",
    rate: 5.5,
    n: null,
    kind: "total",
    note: "The platform headline: 5.5% (1 in 18), about 275% of a typical 2% store. Generic, unnamed quizzes (~78% of responses) are excluded from the per-category rows and drag the all-in number down to ~4%.",
  },
];

export interface AovRow {
  vertical: string;
  /** Median within-store AOV uplift, %. null = flat. */
  uplift: number | null;
  /** Share of stores in this vertical where quiz AOV beat non-quiz AOV. */
  storesUp: number | null;
  n: number | null;
  note?: string;
}

/**
 * Within-store (paired) AOV uplift: same store, median quiz-attributed order
 * value vs median non-quiz order value. Currency-robust (both cohorts share the
 * store's currency) and controls for store-mix. Triangulated across 3 runs at
 * +11% / +15% / +14% median. Per-vertical from the two largest runs combined.
 */
export const AOV_UPLIFT = {
  headlineLow: 11, // %
  headlineHigh: 15, // %
  storesUpLow: 68, // %
  storesUpHigh: 74, // %
  perVertical: [
    { vertical: "Beauty & skincare", uplift: 20, storesUp: 80, n: 234 },
    { vertical: "Haircare", uplift: 14, storesUp: 82, n: 75 },
    { vertical: "Supplements & health", uplift: 14, storesUp: null, n: 28 },
    { vertical: "Fragrance", uplift: null, storesUp: null, n: null, note: "flat" },
    { vertical: "Coffee & tea", uplift: null, storesUp: null, n: null, note: "flat" },
    { vertical: "Other sectors", uplift: 10, storesUp: 65, n: null },
  ] as AovRow[],
};

/** First-order attribution lag + the long-tail LTV stat. */
export const ATTRIBUTION = {
  sameDay: 67, // % of first quiz-attributed orders
  within7: 88,
  within30: 91,
  after30: 9,
  ltvAfter30: 20, // % of ALL quiz-attributed orders that land 30+ days later
};

/** External, cited site-wide store conversion baselines (third-party). */
export const BASELINES = [
  { source: "Statista", rate: "1.6%", scope: "Global, 2025", href: "https://www.statista.com/statistics/439576/online-shopper-conversion-rate-worldwide/" },
  { source: "IRP Commerce", rate: "1.7-1.8%", scope: "UK/IE live merchant data, 2025", href: "https://www.irpcommerce.com/ecommercemarketdata.aspx" },
  { source: "Dynamic Yield", rate: "2.66%", scope: "400+ mid-to-large brands, 2025", href: "https://marketing.dynamicyield.com/benchmarks/conversion-rate/" },
  { source: "Shopify", rate: "2-3%", scope: "Shopify's own published guidance", href: "https://www.shopify.com/blog/ecommerce-conversion-rate" },
];

/** Honest method + caveats. Drives the methodology section and the PDF appendix. */
export const METHODOLOGY = [
  "Source: RevenueHunt's own platform, across every ecommerce platform we support. Aggregate and anonymized: no individual store is identifiable, and our own demo stores are excluded everywhere.",
  "Conversion is a quiz-taker rate: orders attributed to a quiz response, divided by completed quizzes. It is not a site-wide rate. Quiz takers are self-selected and more engaged than the average visitor, so this is not a like-for-like comparison to a store's overall conversion rate. We say so wherever we make the comparison.",
  "Category is derived from the merchant-authored quiz name (for example \"Skincare quiz\", \"Dog food quiz\"). About 78% of responses come from generic or unnamed quizzes and are excluded from every per-category figure.",
  "Average order value uplift is measured within-store: the same store's median quiz order value against its median non-quiz order value. This is currency-robust and removes the store-mix bias that washes the effect out in a naive platform-wide average.",
  "Every conversion figure is a floor. Attribution is still attaching as merchants sync orders (9% of first orders land more than 30 days after the quiz), and cross-device or untracked orders never attach at all. The real numbers are higher, not lower.",
];

export interface FaqItem {
  question: string;
  /** Plain-text answer; used for the FAQPage schema. */
  answer: string;
  /** Optional HTML answer (may contain links); used for on-page display. Falls back to `answer`. */
  answerHtml?: string;
}

export const FAQ: FaqItem[] = [
  {
    question: "How is quiz conversion measured?",
    answer:
      "Orders attributed to a quiz response, divided by completed quizzes. Across the platform, 5.5% of shoppers who finish a quiz (about 1 in 18) place a tracked order. It is a quiz-taker rate, not a site-wide rate: quiz takers are more engaged than the average visitor, so it is not directly comparable to a store's overall conversion rate.",
  },
  {
    question: "Why is the quiz conversion rate so much higher than the average store?",
    answer:
      "Two reasons. First, the quiz itself: it replaces an overwhelming catalog with a short conversation and a clear recommendation, which removes the indecision that leaks sales. Second, what happens after the answers come in: every quiz captures zero-party data and tags the shopper, which powers segmented follow-up flows and retargeting. Segmented campaigns earn more than 3x the revenue per recipient of generic sends (Klaviyo segmentation benchmark), so a quiz keeps converting through personalized email and ads, not just on the results page.",
    answerHtml:
      "Two reasons. First, the quiz itself: it replaces an overwhelming catalog with a short conversation and a clear recommendation, which removes the indecision that leaks sales. Second, what happens after the answers come in: every quiz captures zero-party data and tags the shopper, which powers segmented follow-up flows and retargeting. Segmented campaigns earn more than 3x the revenue per recipient of generic sends (<a href=\"https://www.klaviyo.com/marketing-resources/segmentation-benchmark-report\" target=\"_blank\" rel=\"external noopener nofollow\" class=\"font-medium text-[#16161D] underline decoration-slate-500 underline-offset-2 hover:decoration-[#16161D]\">Klaviyo segmentation benchmark</a>), so a quiz keeps converting through personalized email and ads, not just on the results page.",
  },
  {
    question: "Do quiz shoppers really spend more per order?",
    answer:
      "On average, yes, measured like for like. Within the same store, orders that came through a quiz run about 11% to 15% higher than orders that did not, and that holds in roughly 7 in 10 stores. It is not universal, though: it is strongest in beauty and skincare (about +20%), flatter in categories like fragrance and coffee.",
  },
  {
    question: "How do these benchmarks apply to my store?",
    answer:
      "Plug your own traffic, average order value, and current conversion rate into our quiz ROI calculator. It runs these same benchmarks (the 5.5% quiz-taker rate, the per-category conversion, the AOV uplift) against your numbers to estimate the extra revenue a quiz could add.",
    answerHtml:
      "Plug your own traffic, average order value, and current conversion rate into our <a href=\"/quiz-roi-calculator/\" class=\"font-medium text-[#16161D] underline decoration-slate-500 underline-offset-2 hover:decoration-[#16161D]\">quiz ROI calculator</a>. It runs these same benchmarks (the 5.5% quiz-taker rate, the per-category conversion, the AOV uplift) against your numbers to estimate the extra revenue a quiz could add.",
  },
  {
    question: "Is the data anonymized?",
    answer:
      "Yes. Every figure is aggregate and pooled across millions of responses and thousands of stores. No individual store is identifiable. The report exists to share what the dataset says, not to expose any merchant.",
  },
  {
    question: "Can I use these numbers?",
    answer:
      "Yes. Cite them with a link to this page. The report is free and ungated, the PDF is downloadable, and the headline stats are available as shareable cards.",
  },
];

/** Hero stats rendered as downloadable PNG cards (scripts/generate-stat-cards.ts). */
export interface StatCard {
  /** File slug -> public/reports/cards/<id>.png */
  id: string;
  stat: string;
  label: string;
  note: string;
}

export const STAT_CARDS: StatCard[] = [
  {
    id: "quiz-conversion",
    stat: "5.5%",
    label: "of shoppers who finish a product recommendation quiz place an order",
    note: "About 1 in 18, roughly 2.75x a typical store",
  },
  {
    id: "aov-uplift",
    stat: "+11-15%",
    label: "higher average order value, measured within the same store",
    note: "Holds in roughly 7 in 10 stores",
  },
  {
    id: "completion-rate",
    stat: "69%",
    label: "of shoppers who start a product recommendation quiz finish it",
    note: "About 7 in 10 reach the results page",
  },
  {
    id: "ltv-tail",
    stat: "1 in 5",
    label: "quiz-attributed orders land more than 30 days later",
    note: "The quiz keeps driving revenue for months",
  },
];
