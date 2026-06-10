/**
 * Data for "The state of the Shopify app economy" report.
 *
 * Single source of truth for the report page
 * (src/pages/state-of-the-shopify-app-economy/index.astro) and its Chart.js
 * charts. Computed from a snapshot of the public Shopify App Store: 22,546 live
 * apps (business-intelligence/shopify-app-store/apps.csv), June 2026.
 *
 * All figures are from public App Store listings. Revenue is ESTIMATED from
 * published pricing tiers and review/install signals (a model, not billing
 * data) and is always labelled as such. Launch dates use each listing's
 * published launch date; the source clustered ~2,800 dates in May 2026, so the
 * growth curve is read as cumulative-by-year and the "last 12 months" figure
 * strips that artifact (see METHODOLOGY).
 *
 * This is the full-data companion to the LinkedIn flagship post
 * ("the code was never the moat"). Provenance + the LinkedIn pipeline live in
 * PRD-Octane-AI-SEO-Reverse-Engineering.md and the business-intelligence repo.
 */

export const REPORT = {
  title: "The state of the Shopify app economy",
  eyebrow: "Field notes",
  slug: "state-of-the-shopify-app-economy",
  datePublished: "2026-06-10",
  dateModified: "2026-06-10",
  description:
    "22,546 apps are live on the Shopify App Store and almost none get anywhere. A data report on growth, reviews, revenue concentration, pricing and who builds them, from a snapshot of every live app.",
};

/** Accent palette shared by the page chrome and the Chart.js datasets. */
export const COLORS = {
  ink: "#16161D",
  indigo: "#6366F1",
  green: "#5B8A3A",
  gray: "#CBD5E1",
  grayMid: "#94A3B8",
};

/** Source band (dark) — what the report is built on. */
export const SOURCE = {
  apps: "22,546",
  appsNote: "live apps in the snapshot",
  countries: "115",
  countriesNote: "countries building them",
  reviewless: "51%",
  reviewlessNote: "with zero reviews",
};

/** Headline stat cards. */
export const HEADLINE = [
  { stat: "22,546", label: "apps live on the store", note: "Up roughly 10x since 2020." },
  { stat: "51%", label: "have zero reviews", note: "Three in four have fewer than five." },
  { stat: "72%", label: "of revenue earned by the top 1%", note: "225 apps. Estimated." },
  { stat: "4.5%", label: "charge money up front", note: "Only 1 in 20. Nearly half are free." },
];

/**
 * Cumulative live apps by year-end (derived from each listing's launch date).
 * Endpoint is the true current total, 22,546.
 */
export const GROWTH = {
  labels: ["2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026"],
  cumulative: [2080, 3151, 4482, 6146, 8574, 11808, 17053, 22546],
  caption:
    "Cumulative live apps by launch year. The store has roughly 10x'd since 2020 and added more than 6,000 apps in the last 12 months alone, about 1 in 4 of everything live today.",
};

/** Review distribution across all 22,546 apps (the "traction" donut). */
export const REVIEWS = {
  labels: ["Zero reviews", "One to five", "More than five"],
  values: [51.0, 25.5, 23.5],
  colors: [COLORS.ink, COLORS.gray, COLORS.green],
  avgRating: 4.43,
  ratedCount: "11,040",
  caption:
    "Half the App Store has never earned a single review. Three in four apps have fewer than five. A review is the clearest public proxy for a real, retained merchant, and most apps never get one.",
};

/**
 * Estimated-revenue concentration. `donut` = top 1% vs the rest; `bars` =
 * cumulative share earned by the top N apps. Revenue is modelled from pricing +
 * review/install signals, not billing data.
 */
export const REVENUE = {
  donut: { labels: ["Top 1% of apps", "The other 99%"], values: [72.2, 27.8], colors: [COLORS.green, COLORS.gray] },
  bars: {
    labels: ["Top 10 apps", "Top 100 apps", "Top 1% (225 apps)"],
    values: [28.5, 59.0, 72.2],
  },
  earnAnything: "36%",
  caption:
    "Estimated monthly revenue is brutally top-heavy. The top 1% of apps (225 of them) take an estimated 72% of it; the top 10 alone take nearly a third. Only about 36% of apps look like they earn anything at all.",
};

/** Pricing model split + the permanent-free-tier figure (the pricing donut). */
export const PRICING = {
  labels: ["Free", "Free trial", "Paid up front"],
  values: [46.9, 48.6, 4.5],
  colors: [COLORS.green, COLORS.indigo, COLORS.ink],
  permanentFree: "44.8%",
  caption:
    "Nearly half the store charges nothing up front, and fewer than 1 in 20 apps ask for money before the first install. Almost 45% offer a permanent free tier. Freemium is not a strategy here, it is the table stakes.",
};

/** Top builder countries by app count (the geography bar chart). 115 in total. */
export const GEOGRAPHY = {
  labels: ["US", "India", "UK", "Canada", "Vietnam", "China", "Japan", "Germany", "Australia", "France"],
  values: [3582, 2105, 779, 766, 507, 416, 401, 389, 370, 326],
  builtForShopify: "6.7%",
  builtForShopifyCount: "1,502",
  caption:
    "Apps come from 115 countries, but two dominate: the US (16%) and India (9%) build a quarter of the store between them. And after years of Shopify pushing the standard, only 6.7% of live apps (about 1,500) carry the Built for Shopify badge.",
};

/** The quiz category — RevenueHunt's own lane, the tie-back to the flagship. */
export const QUIZ_LANE = {
  shopifySearch: "149",
  searchUrl: "https://apps.shopify.com/search?q=quiz",
  dedicatedApps: 65,
  revenueHuntReviews: 417,
  octaneReviews: 193,
  quizKitReviews: 171,
  top3Share: "45%",
  caption:
    "Our own category proves the same point. Shopify's quiz search returns 149 apps, but trust pools at the top here exactly like it does across the store. The three apps that got here first and never left, RevenueHunt, Octane AI and Quiz Kit, hold 45% of every review in the category; RevenueHunt alone holds about a quarter, and half the rest have none at all. That lead is not code. Reviews are the residue of the operational scar tissue behind them: six years of answering support, getting on calls with merchants who would never pay, and earning trust one store at a time. Octane AI and Quiz Kit put in those years too, and the respect is real. Honorable mention to Lantern and Quizell, the next two putting in the work, each just over 120 reviews. Past them, every other quiz app is under 100.",
};

export const METHODOLOGY = [
  "Source: a snapshot of the public Shopify App Store, 22,546 live app listings, taken in June 2026. Every field comes from the public listing, not from Shopify's internal data or any merchant's account.",
  "Revenue is estimated, not measured. It is modelled from each app's published pricing tiers together with review and install signals. Treat the revenue figures as a directional model of how concentrated earnings are, not as billing data. They are labelled \"estimated\" wherever they appear.",
  "Growth uses each listing's published launch date. The source clustered roughly 2,800 launch dates in May 2026, so the curve is read as cumulative live apps by year (the endpoint is the true current total), and the \"6,000+ in the last 12 months\" figure strips that single-month artifact.",
  "Reviews are a proxy for traction, not a perfect one: a great app can be new, and review counts lag real usage. We use them because they are the clearest public, comparable signal of a real merchant base across 22,546 apps.",
  "Categories on the App Store are feature tags an app can self-apply, and many apps carry several or none, so we report the cuts that are unambiguous (reviews, pricing, launch date, developer country) and avoid over-reading the tag taxonomy.",
];

export interface FaqItem {
  question: string;
  answer: string;
  answerHtml?: string;
}

export const FAQ: FaqItem[] = [
  {
    question: "How many apps are on the Shopify App Store?",
    answer:
      "22,546 live apps in this June 2026 snapshot. The store has grown roughly 10x since 2020 and added more than 6,000 apps in the last 12 months alone, about 1 in 4 of everything live today. AI-assisted development turned what used to be a six-month build into a weekend.",
  },
  {
    question: "Why do most Shopify apps fail?",
    answer:
      "Building is no longer the constraint, so the store floods with apps that never find a merchant base. 51% have zero reviews and 74% have fewer than five. The scarce thing is distribution and trust: answering support, earning reviews one merchant at a time, showing up for years. That is the part AI cannot do for you.",
  },
  {
    question: "How much do Shopify apps earn?",
    answer:
      "Earnings are extremely concentrated. By our estimate, the top 1% of apps (225 of them) take about 72% of all app revenue, and the top 10 alone take nearly a third. Only around 36% of apps look like they earn anything. Revenue here is estimated from public pricing and usage signals, not billing data.",
  },
  {
    question: "Are most Shopify apps free?",
    answer:
      "Effectively, yes. 46.9% are free and another 48.6% lead with a free trial; only 4.5% charge money up front. Almost 45% offer a permanent free tier. On the Shopify App Store a free entry point is not a growth tactic, it is the baseline expectation.",
  },
  {
    question: "Where can I see the underlying data?",
    answer:
      "This report is the full-data companion to our LinkedIn field note on the app economy. The figures come from a snapshot we keep of every live Shopify app: launch dates, reviews, pricing, the Built for Shopify badge, and developer country. If you build on Shopify and want a specific cut, get in touch.",
  },
];
