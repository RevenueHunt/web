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

/**
 * Accent palette, taken from the RevenueHunt logo.
 *   primary   = the logo's darkest color (the wordmark)  -> main highlight
 *   secondary = the logo's lightest blue hue            -> secondary highlight
 *   gray      = de-emphasized / "the rest"
 */
export const COLORS = {
  primary: "#616eff",
  secondary: "#4dcaff",
  gray: "#CBD5E1",
};

/** Source band (dark) — what the report is built on. */
export const SOURCE = {
  apps: "22,546",
  appsNote: "live apps in the snapshot",
  countries: "115",
  countriesNote: "countries building them",
  reviewless: "51%",
  reviewlessNote: "with zero reviews",
  free: "47%",
  freeNote: "completely free, no paid plan",
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
    "Cumulative live apps by launch year. The Shopify App Store has roughly 10x'd since 2020 and added more than 6,000 apps in the last 12 months alone, about 1 in 4 of everything live today.",
};

/** Review distribution across all 22,546 apps (the "traction" donut). */
export const REVIEWS = {
  labels: ["Fewer than 10", "10–99", "100–999", "1,000+"],
  values: [81.4, 13.2, 4.7, 0.7],
  colors: [COLORS.gray, COLORS.secondary, "#579cff", COLORS.primary],
  avgRating: 4.43,
  avgReviews: 77,
  medianReviews: 5,
  ratedCount: "11,040",
  caption:
    "Half the Shopify App Store has never earned a single review. Three in four apps have fewer than five. A review is the clearest public proxy for a real, retained merchant, and most apps never get one.",
};

/**
 * Estimated-revenue concentration. `donut` = top 1% vs the rest; `bars` =
 * cumulative share earned by the top N apps. Revenue is modelled from pricing +
 * review/install signals, not billing data.
 */
export const REVENUE = {
  donut: { labels: ["Top 1% of apps", "The other 99%"], values: [72.2, 27.8], colors: [COLORS.primary, COLORS.gray] },
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
  colors: [COLORS.gray, COLORS.secondary, COLORS.primary],
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
  caption: [
    "Our own category proves the same point. Shopify's quiz search returns 149 apps, but trust pools at the top here exactly like it does across the store. The three apps that got here first and never left, RevenueHunt, Octane AI and Quiz Kit, hold 45% of every review in the category; RevenueHunt alone holds about a quarter, and the bottom half have none at all.",
    "We didn't code our way to the top. Reviews are the residue of the operational scar tissue behind them: six years of answering support, getting on calls with merchants who would never pay, and earning trust one store at a time. Octane AI and Quiz Kit put in the same hard work for years, and we respect them for it. Honorable mention to Lantern and Quizell, both just over 120 reviews.",
  ],
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
    answerHtml:
      "This report is the full-data companion to our LinkedIn field note on the app economy. The figures come from a snapshot we keep of every live Shopify app: launch dates, reviews, pricing, the Built for Shopify badge, and developer country. If you build on Shopify and want a specific cut, <a href=\"/contact/\" class=\"font-medium text-[#16161D] underline decoration-slate-500 underline-offset-2 hover:decoration-[#16161D]\">get in touch</a>.",
  },
];

/**
 * Translated Chart.js legend/segment labels, keyed by locale. The chart script
 * reads `document.documentElement.lang` and picks the matching set (falling back
 * to `en`). Numbers/values stay in the language-neutral exports above; only the
 * human-readable category labels are localized. Country names (GEOGRAPHY.labels)
 * stay as-is. Order matches REVIEWS.labels / REVENUE.donut.labels /
 * REVENUE.bars.labels / PRICING.labels.
 */
export interface ChartLabels {
  reviews: string[];
  revenueDonut: [string, string];
  revenueBars: [string, string, string];
  pricing: [string, string, string];
  /** Top builder countries, same order as GEOGRAPHY.labels. Country names. */
  geography: string[];
}

export const CHART_LABELS: Record<string, ChartLabels> = {
  en: {
    reviews: ["Fewer than 10", "10–99", "100–999", "1,000+"],
    revenueDonut: ["Top 1% of apps", "The other 99%"],
    revenueBars: ["Top 10 apps", "Top 100 apps", "Top 1% (225 apps)"],
    pricing: ["Free", "Free trial", "Paid up front"],
    geography: ["US", "India", "UK", "Canada", "Vietnam", "China", "Japan", "Germany", "Australia", "France"],
  },
  es: {
    reviews: ["Menos de 10", "10–99", "100–999", "1,000+"],
    revenueDonut: ["1% superior de apps", "El otro 99%"],
    revenueBars: ["Top 10 apps", "Top 100 apps", "1% superior (225 apps)"],
    pricing: ["Gratis", "Prueba gratis", "De pago por adelantado"],
    geography: ["EE. UU.", "India", "Reino Unido", "Canadá", "Vietnam", "China", "Japón", "Alemania", "Australia", "Francia"],
  },
  de: {
    reviews: ["Weniger als 10", "10–99", "100–999", "1,000+"],
    revenueDonut: ["Top 1% der Apps", "Die anderen 99%"],
    revenueBars: ["Top 10 Apps", "Top 100 Apps", "Top 1% (225 Apps)"],
    pricing: ["Kostenlos", "Kostenlose Testversion", "Vorab kostenpflichtig"],
    geography: ["USA", "Indien", "UK", "Kanada", "Vietnam", "China", "Japan", "Deutschland", "Australien", "Frankreich"],
  },
  fr: {
    reviews: ["Moins de 10", "10–99", "100–999", "1,000+"],
    revenueDonut: ["Top 1% des apps", "Les 99% restants"],
    revenueBars: ["Top 10 apps", "Top 100 apps", "Top 1% (225 apps)"],
    pricing: ["Gratuit", "Essai gratuit", "Payant d'avance"],
    geography: ["États-Unis", "Inde", "Royaume-Uni", "Canada", "Vietnam", "Chine", "Japon", "Allemagne", "Australie", "France"],
  },
  it: {
    reviews: ["Meno di 10", "10–99", "100–999", "1,000+"],
    revenueDonut: ["Top 1% delle app", "L'altro 99%"],
    revenueBars: ["Top 10 app", "Top 100 app", "Top 1% (225 app)"],
    pricing: ["Gratis", "Prova gratuita", "A pagamento in anticipo"],
    geography: ["USA", "India", "Regno Unito", "Canada", "Vietnam", "Cina", "Giappone", "Germania", "Australia", "Francia"],
  },
  nl: {
    reviews: ["Minder dan 10", "10–99", "100–999", "1,000+"],
    revenueDonut: ["Top 1% van apps", "De andere 99%"],
    revenueBars: ["Top 10 apps", "Top 100 apps", "Top 1% (225 apps)"],
    pricing: ["Gratis", "Gratis proefperiode", "Vooraf betaald"],
    geography: ["VS", "India", "VK", "Canada", "Vietnam", "China", "Japan", "Duitsland", "Australië", "Frankrijk"],
  },
  sv: {
    reviews: ["Färre än 10", "10–99", "100–999", "1,000+"],
    revenueDonut: ["Topp 1% av apparna", "De övriga 99%"],
    revenueBars: ["Topp 10 appar", "Topp 100 appar", "Topp 1% (225 appar)"],
    pricing: ["Gratis", "Gratis provperiod", "Betalning i förskott"],
    geography: ["USA", "Indien", "Storbritannien", "Kanada", "Vietnam", "Kina", "Japan", "Tyskland", "Australien", "Frankrike"],
  },
  fi: {
    reviews: ["Alle 10", "10–99", "100–999", "1,000+"],
    revenueDonut: ["Top 1% sovelluksista", "Loput 99%"],
    revenueBars: ["Top 10 sovellusta", "Top 100 sovellusta", "Top 1% (225 sovellusta)"],
    pricing: ["Ilmainen", "Ilmainen kokeilu", "Maksullinen etukäteen"],
    geography: ["USA", "Intia", "Britannia", "Kanada", "Vietnam", "Kiina", "Japani", "Saksa", "Australia", "Ranska"],
  },
  pl: {
    reviews: ["Mniej niż 10", "10–99", "100–999", "1,000+"],
    revenueDonut: ["1% najlepszych aplikacji", "Pozostałe 99%"],
    revenueBars: ["Top 10 aplikacji", "Top 100 aplikacji", "Top 1% (225 aplikacji)"],
    pricing: ["Za darmo", "Bezpłatny okres próbny", "Płatne z góry"],
    geography: ["USA", "Indie", "Wielka Brytania", "Kanada", "Wietnam", "Chiny", "Japonia", "Niemcy", "Australia", "Francja"],
  },
  cs: {
    reviews: ["Méně než 10", "10–99", "100–999", "1,000+"],
    revenueDonut: ["1% nejlepších aplikací", "Zbylých 99%"],
    revenueBars: ["Top 10 aplikací", "Top 100 aplikací", "Top 1% (225 aplikací)"],
    pricing: ["Zdarma", "Zkušební verze zdarma", "Placené předem"],
    geography: ["USA", "Indie", "Velká Británie", "Kanada", "Vietnam", "Čína", "Japonsko", "Německo", "Austrálie", "Francie"],
  },
  pt: {
    reviews: ["Menos de 10", "10–99", "100–999", "1,000+"],
    revenueDonut: ["1% no topo das apps", "Os outros 99%"],
    revenueBars: ["Top 10 apps", "Top 100 apps", "Top 1% (225 apps)"],
    pricing: ["Grátis", "Teste grátis", "Pago antecipadamente"],
    geography: ["EUA", "Índia", "Reino Unido", "Canadá", "Vietname", "China", "Japão", "Alemanha", "Austrália", "França"],
  },
  ar: {
    reviews: ["أقل من 10", "10–99", "100–999", "1,000+"],
    revenueDonut: ["أعلى 1% من التطبيقات", "الـ99% الأخرى"],
    revenueBars: ["أفضل 10 تطبيقات", "أفضل 100 تطبيق", "أعلى 1% (225 تطبيقًا)"],
    pricing: ["مجاني", "تجربة مجانية", "مدفوع مقدمًا"],
    geography: ["الولايات المتحدة", "الهند", "المملكة المتحدة", "كندا", "فيتنام", "الصين", "اليابان", "ألمانيا", "أستراليا", "فرنسا"],
  },
  he: {
    reviews: ["פחות מ-10", "10–99", "100–999", "1,000+"],
    revenueDonut: ["1% העליון של האפליקציות", "99% הנותרים"],
    revenueBars: ["10 האפליקציות המובילות", "100 האפליקציות המובילות", "1% העליון (225 אפליקציות)"],
    pricing: ["חינם", "ניסיון חינם", "בתשלום מראש"],
    geography: ["ארצות הברית", "הודו", "בריטניה", "קנדה", "וייטנאם", "סין", "יפן", "גרמניה", "אוסטרליה", "צרפת"],
  },
};
