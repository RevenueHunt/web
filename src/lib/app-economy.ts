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
  countries: "131",
  countriesNote: "countries building them",
  reviewless: "51%",
  reviewlessNote: "with zero reviews",
  free: "47%",
  freeNote: "completely free, no paid plan",
};

/** Headline stat cards. */
export const HEADLINE = [
  { stat: "22,546", label: "apps live on the store", note: "Up roughly 10x since 2020." },
  { stat: "51%", label: "have zero reviews", note: "Four in five have fewer than 10." },
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
  labels: ["0", "1–9", "10–99", "100–999", "1,000+"],
  values: [51.0, 30.4, 13.2, 4.7, 0.7],
  counts: [11495, 6859, 2980, 1054, 158],
  colors: ["#e2e8f0", COLORS.gray, COLORS.secondary, "#579cff", COLORS.primary],
  avgRating: 4.43,
  medianReviews: 5,
  ratedCount: "11,040",
  caption:
    "Half the Shopify App Store has never earned a single review. Four in five apps have fewer than 10. A review is the clearest public proxy for a real, retained merchant, and most apps never get one.",
};

/**
 * Estimated-revenue concentration. `donut` = top 1% vs the rest; `bars` =
 * cumulative share earned by the top N apps. Revenue is modelled from pricing +
 * review/install signals, not billing data.
 */
export const REVENUE = {
  donut: { labels: ["Top 10 apps", "Rest of the top 1%", "The other 99%"], values: [28.5, 43.7, 27.8], colors: [COLORS.primary, COLORS.secondary, COLORS.gray] },
  countries: {
    values: [41.0, 16.0, 7.5, 4.8, 4.6, 4.0, 3.9, 3.0, 1.4, 13.8],
    colors: ["#616eff", "#6a7dff", "#738bff", "#7c9aff", "#85a8ff", "#8eb7ff", "#97c5ff", "#a0d4ff", "#a9e2ff", COLORS.gray],
  },
  earnAnything: "36%",
  caption:
    "Estimated monthly revenue is brutally top-heavy. The top 1% of apps (225 of them) take an estimated 72% of it, and just 10 of those apps take nearly 30% of all app revenue on their own. Only about 36% of apps look like they earn anything at all. And it clusters by geography: <strong>the US and Canada alone take an estimated 57%</strong> of the Shopify App Store revenue.",
  klaviyoNote:
    "One name towers over the whole ecosystem: an app which draws an estimated 78% of its roughly $1B in annual revenue from Shopify merchants. Yes, we're looking at you, <a href='https://www.sec.gov/Archives/edgar/data/1835830/000162828023030618/klaviyoincs-1.htm' target='_blank' rel='external noopener nofollow' class='font-medium text-[#16161D] underline decoration-slate-500 underline-offset-2 hover:decoration-[#16161D]'>Klaviyo</a>.",
};

/**
 * Pricing model split + the permanent-free-tier figure (the pricing donut).
 * Four mutually exclusive entry-level tiers, derived from each listing's
 * pricing_type + has_free_plan flags across all 22,546 live apps:
 *   completely free (no paid plan)        4,733  = 21.0%
 *   free plan available (freemium)       10,105  = 44.8%  (= permanentFree)
 *   free trial (paid, leads with trial)   6,689  = 29.7%
 *   paid up front (no free entry)         1,019  =  4.5%
 *
 * entryPrice/entryPriceCount describe the cheapest non-zero monthly plan
 * ("entry price") across the 15,170 apps that have a paid plan: $9.99 is both
 * the median and the single most common entry price (1,447 apps).
 */
export const PRICING = {
  labels: ["Completely free", "Free plan available", "Free trial", "Paid up front"],
  values: [21.0, 44.8, 29.7, 4.5],
  colors: [COLORS.gray, COLORS.secondary, "#579cff", COLORS.primary],
  permanentFree: "44.8%",
  completelyFree: "21%",
  entryPrice: "$9.99",
  entryPriceCount: "1,447",
  caption:
    "Nearly half the store charges nothing up front, and fewer than 1 in 20 apps ask for money before the first install. 57% of paid apps offer a free plan. Freemium is not a strategy here, it is the table stakes.",
};

/**
 * Who builds them, on complete developer-country data. The original snapshot was
 * missing a country for ~37% of listings (absent from JSON-LD); it was recovered
 * from each listing's HTML location line, lifting coverage to 100% and 131
 * countries. `labels`/`values` are the legacy single-bar series still read by the
 * locale pages; English uses `builders` (stacked by review tier).
 */
export const GEOGRAPHY = {
  labels: ["US", "India", "UK", "Canada", "Vietnam", "China", "Japan", "Germany", "Australia", "France"],
  values: [3582, 2105, 779, 766, 507, 416, 401, 389, 370, 326],
  builtForShopify: "6.7%",
  builtForShopifyCount: "1,502",
  usIndiaShare: "39%",
  vietnamSignal: "46%",
  /**
   * Builder pool, each split into five review tiers (absolute counts), matching
   * the REVIEWS donut cuts: 0, 1–9, 10–99, 100–999, 1,000+. The chart shows the
   * top 10 by whatever tiers are toggled on, so this is the 16-country union of
   * every tier-combination's top 10, not just the top 10 by total. Ordered by
   * total apps. The default view (all tiers) shows the first 10; Pakistan
   * (zero-review "noise"), Israel/Singapore (10+ traction) and Hong Kong/
   * Lithuania/Romania (which only surface when the 100–999 or 1,000+ tier is
   * isolated) appear when the ranking changes. Mirrors apps.csv with the cuts.
   */
  builders: {
    labels: ["US", "India", "UK", "Canada", "Vietnam", "Germany", "Japan", "China", "Australia", "France", "Pakistan", "Israel", "Singapore", "Hong Kong", "Lithuania", "Romania"],
    zero: [2463, 1882, 646, 514, 215, 338, 468, 374, 300, 251, 287, 157, 139, 151, 65, 88],
    low: [1690, 1049, 421, 324, 169, 236, 125, 164, 194, 180, 146, 136, 97, 85, 55, 51],
    mid: [804, 412, 174, 191, 163, 85, 46, 44, 86, 93, 40, 66, 59, 40, 33, 24],
    high: [348, 128, 59, 84, 130, 19, 3, 12, 9, 14, 4, 39, 27, 15, 17, 3],
    vhigh: [50, 11, 9, 18, 33, 0, 0, 1, 3, 1, 0, 2, 8, 1, 6, 3],
  },
  caption:
    "Two dominate: <strong>the US (24%) and India (15%) build two in five</strong> of the store between them. But <strong>volume is not traction</strong>. Rank countries only by the apps that cleared 10+ reviews and the leaderboard redraws - <strong>Vietnam</strong>, a mid-size builder, lands more apps with real traction than its size suggests.",
};

/**
 * Niche-level signal vs noise. Eight broad sectors (an app is counted in a
 * sector if it carries any of the sector's self-applied feature tags, deduped
 * per app), each split into the five REVIEWS tiers. `tiers` rows are [0, 1-9,
 * 10-99, 100-999, 1,000+]; the row sum is the sector's app count. The chart
 * draws bars at absolute length and sorts largest-first, re-sorting by the
 * visible total whenever a tier is toggled, so stored order here is arbitrary.
 * Mirrors apps.csv.
 */
export const NICHES = {
  labels: ["Localization", "Pricing & discounts", "Marketing & pop-ups", "Store design & theme", "Analytics & reporting", "Upsell & recommendations", "Shipping & fulfillment", "Chat & support"],
  tiers: [
    [279, 484, 571, 398, 78],
    [455, 563, 520, 285, 69],
    [523, 680, 625, 340, 68],
    [777, 1003, 785, 409, 73],
    [566, 735, 558, 294, 61],
    [286, 333, 239, 145, 31],
    [1423, 1353, 721, 294, 50],
    [252, 174, 91, 42, 4],
  ],
  deadNicheSub10: "89%",
  bestNicheTraction: "58%",
  topSectorApps: "3,841",
  caption:
    "The store's busiest lanes are its worst bets. Builders pour into shipping and chat, commodity utilities, and almost none get traction: <strong>nearly 9 in 10 third-party logistics apps have fewer than 10 reviews</strong>. The apps that break through cluster where the work compounds - <strong>localization, pricing and dev-level customization</strong>, the tools that become load-bearing once a merchant installs them.",
};

/** The quiz category — RevenueHunt's own lane, the tie-back to the flagship. */
export const QUIZ_LANE = {
  shopifySearch: "149",
  searchUrl: "https://apps.shopify.com/search?q=quiz",
  dedicatedApps: 65,
  revenueHuntReviews: 422,
  octaneReviews: 193,
  quizKitReviews: 171,
  top3Share: "45%",
  caption: [
    "Our own category proves the same point. Shopify's \"quiz\" search returns 149 apps, but trust pools at the top here exactly like it does across the store. The three apps that got here first and never left, RevenueHunt, Octane AI and Quiz Kit, hold 45% of every review in the category; RevenueHunt alone holds about a quarter, and the bottom half have none at all.",
    "We didn't code our way to the top. Reviews are the symptom of the operational grind behind them: six years of answering support, getting on calls with merchants who would never pay, and earning trust one store at a time. Octane AI and Quiz Kit put in the same hard work for years, and we respect them for it. Honorable mention to Lantern and Quizell, both just over 120 reviews.",
  ],
};

export const METHODOLOGY = [
  "Source: a snapshot of the public Shopify App Store, 22,546 live app listings, taken in June 2026. Every field comes from the public listing, not from Shopify's internal data or any merchant's account.",
  "Revenue is estimated, not measured. It is modelled from each app's published pricing tiers together with review and install signals. Treat the revenue figures as a directional model of how concentrated earnings are, not as billing data. They are labelled \"estimated\" wherever they appear.",
  "Growth uses each listing's published launch date. The source clustered roughly 2,800 launch dates in May 2026, so the curve is read as cumulative live apps by year (the endpoint is the true current total), and the \"6,000+ in the last 12 months\" figure strips that single-month artifact.",
  "Reviews are a proxy for traction, not a perfect one: a great app can be new, and review counts lag real usage. We use them because they are the clearest public, comparable signal of a real merchant base across 22,546 apps.",
  "Categories on the App Store are feature tags an app can self-apply, and many apps carry several or none. For the sector view we group related tags into broad lanes and dedupe apps within each; an app can belong to more than one, so sectors overlap and are not mutually exclusive, and we read them as directional. Everywhere else we lean on the unambiguous cuts (reviews, pricing, launch date, developer country).",
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
      "Building is no longer the constraint, so the store floods with apps that never find a merchant base. 51% have zero reviews and 81% have fewer than 10. The scarce thing is distribution and trust: answering support, earning reviews one merchant at a time, showing up for years. That is the part AI cannot do for you.",
  },
  {
    question: "How much do Shopify apps earn?",
    answer:
      "Earnings are extremely concentrated. By our estimate, the top 1% of apps (225 of them) take about 72% of all app revenue, and the top 10 alone take nearly 30%. Only around 36% of apps look like they earn anything. Revenue here is estimated from public pricing and usage signals, not billing data.",
  },
  {
    question: "Are most Shopify apps free?",
    answer:
      "Effectively, yes. 46.9% are free and another 48.6% lead with a free trial; only 4.5% charge money up front. 57% of paid apps offer a free plan. On the Shopify App Store a free entry point is not a growth tactic, it is the baseline expectation.",
  },
  {
    question: "Where can I see the underlying data?",
    answer:
      "The figures come from a snapshot we keep of every live Shopify app: launch dates, reviews, pricing, the Built for Shopify badge, and developer country. If you build on Shopify and want the full report, get in touch.",
    answerHtml:
      "The figures come from a snapshot we keep of every live Shopify app: launch dates, reviews, pricing, the Built for Shopify badge, and developer country. If you build on Shopify and want the full report, <a href=\"/contact/\" class=\"font-medium text-[#16161D] underline decoration-slate-500 underline-offset-2 hover:decoration-[#16161D]\">get in touch</a>.",
  },
];

/**
 * Translated Chart.js legend/segment labels, keyed by locale. The chart script
 * reads `document.documentElement.lang` and picks the matching set (falling back
 * to `en`). Numbers/values stay in the language-neutral exports above; only the
 * human-readable category labels are localized. Country names (GEOGRAPHY.labels)
 * stay as-is. Order matches REVIEWS.labels / REVENUE.donut.labels /
 * REVENUE.countries / PRICING.labels.
 */
export interface ChartLabels {
  reviews: string[];
  reviewsTip: { title: string; body: string };
  revenueDonut: [string, string, string];
  revenueCountries: string[];
  revenueCountriesFull: string[];
  pricing: [string, string, string, string];
  /** Top builder countries, same order as GEOGRAPHY.labels. Country names. */
  geography: string[];
  /** Niche/sector names, same order as NICHES.labels. Optional until locale fan-out. */
  niches?: string[];
  /** Stacked geography chart: review-tier legend. Optional until locale fan-out. */
  geoTiers?: [string, string, string, string, string];
  /**
   * Localized country names, keyed by the English name used in
   * GEOGRAPHY.builders. Looked up per country so the localized label
   * travels with each bar through the stacked chart's dynamic re-sort. English
   * (en) omits this and falls back to the English keys.
   */
  geoCountries?: Record<string, string>;
}

export const CHART_LABELS: Record<string, ChartLabels> = {
  en: {
    niches: ["Localization", "Pricing & discounts", "Marketing & pop-ups", "Store design & theme", "Analytics & reporting", "Upsell & recommendations", "Shipping & fulfillment", "Chat & support"],
    reviews: ["0", "1–9", "10–99", "100–999", "1,000+"],
    revenueDonut: ["Top 10 apps", "Rest of the top 1%", "The other 99%"],
    revenueCountries: ["🇺🇸 US", "🇨🇦 CA", "🇻🇳 VN", "🇮🇳 IN", "🇬🇧 UK", "🇮🇱 IL", "🇸🇬 SG", "🇫🇷 FR", "🇱🇹 LT", "Rest of world"],
    revenueCountriesFull: ["🇺🇸 United States", "🇨🇦 Canada", "🇻🇳 Vietnam", "🇮🇳 India", "🇬🇧 United Kingdom", "🇮🇱 Israel", "🇸🇬 Singapore", "🇫🇷 France", "🇱🇹 Lithuania", "Rest of world"],
    pricing: ["Completely free", "Free plan available", "Free trial", "Paid up front"],
    geography: ["US", "India", "UK", "Canada", "Vietnam", "China", "Japan", "Germany", "Australia", "France"],
    reviewsTip: { title: "Apps with {x} reviews", body: "{n} apps ({p}%)" },
    geoTiers: ["0 reviews", "1–9 reviews", "10–99 reviews", "100–999 reviews", "1,000+ reviews"],
  },
  es: {
    niches: ["Localización", "Precios y descuentos", "Marketing y pop-ups", "Diseño de tienda", "Analítica e informes", "Upsell y recomendaciones", "Envío y logística", "Chat y soporte"],
    reviews: ["0", "1–9", "10–99", "100–999", "1,000+"],
    revenueDonut: ["Las 10 primeras apps", "Resto del 1% superior", "El otro 99%"],
    revenueCountries: ["🇺🇸 US", "🇨🇦 CA", "🇻🇳 VN", "🇮🇳 IN", "🇬🇧 UK", "🇮🇱 IL", "🇸🇬 SG", "🇫🇷 FR", "🇱🇹 LT", "Resto del mundo"],
    revenueCountriesFull: ["🇺🇸 Estados Unidos", "🇨🇦 Canadá", "🇻🇳 Vietnam", "🇮🇳 India", "🇬🇧 Reino Unido", "🇮🇱 Israel", "🇸🇬 Singapur", "🇫🇷 Francia", "🇱🇹 Lituania", "Resto del mundo"],
    pricing: ["Totalmente gratis", "Plan gratis disponible", "Prueba gratis", "De pago por adelantado"],
    geography: ["EE. UU.", "India", "Reino Unido", "Canadá", "Vietnam", "China", "Japón", "Alemania", "Australia", "Francia"],
    reviewsTip: { title: "Apps con {x} reseñas", body: "{n} apps ({p}%)" },
    geoTiers: ["0 reseñas", "1–9 reseñas", "10–99 reseñas", "100–999 reseñas", "1,000+ reseñas"],
    geoCountries: { US: "EE. UU.", India: "India", UK: "Reino Unido", Canada: "Canadá", Vietnam: "Vietnam", Germany: "Alemania", Japan: "Japón", China: "China", Australia: "Australia", France: "Francia", Pakistan: "Pakistán", Israel: "Israel", Singapore: "Singapur", "Hong Kong": "Hong Kong", Lithuania: "Lituania", Romania: "Rumanía" },
  },
  de: {
    niches: ["Lokalisierung", "Preise & Rabatte", "Marketing & Pop-ups", "Shop-Design", "Analytics & Reporting", "Upsell & Empfehlungen", "Versand & Fulfillment", "Chat & Support"],
    reviews: ["0", "1–9", "10–99", "100–999", "1,000+"],
    revenueDonut: ["Die Top 10 Apps", "Rest der Top 1%", "Die anderen 99%"],
    revenueCountries: ["🇺🇸 US", "🇨🇦 CA", "🇻🇳 VN", "🇮🇳 IN", "🇬🇧 UK", "🇮🇱 IL", "🇸🇬 SG", "🇫🇷 FR", "🇱🇹 LT", "Übrige Welt"],
    revenueCountriesFull: ["🇺🇸 Vereinigte Staaten", "🇨🇦 Kanada", "🇻🇳 Vietnam", "🇮🇳 Indien", "🇬🇧 Vereinigtes Königreich", "🇮🇱 Israel", "🇸🇬 Singapur", "🇫🇷 Frankreich", "🇱🇹 Litauen", "Übrige Welt"],
    pricing: ["Komplett kostenlos", "Kostenloser Tarif verfügbar", "Kostenlose Testversion", "Vorab kostenpflichtig"],
    geography: ["USA", "Indien", "UK", "Kanada", "Vietnam", "China", "Japan", "Deutschland", "Australien", "Frankreich"],
    reviewsTip: { title: "Apps mit {x} Bewertungen", body: "{n} Apps ({p}%)" },
    geoTiers: ["0 Bewertungen", "1–9 Bewertungen", "10–99 Bewertungen", "100–999 Bewertungen", "1,000+ Bewertungen"],
    geoCountries: { US: "USA", India: "Indien", UK: "UK", Canada: "Kanada", Vietnam: "Vietnam", Germany: "Deutschland", Japan: "Japan", China: "China", Australia: "Australien", France: "Frankreich", Pakistan: "Pakistan", Israel: "Israel", Singapore: "Singapur", "Hong Kong": "Hongkong", Lithuania: "Litauen", Romania: "Rumänien" },
  },
  fr: {
    niches: ["Localisation", "Prix & remises", "Marketing & pop-ups", "Design de boutique", "Analytics & reporting", "Upsell & recommandations", "Expédition & logistique", "Chat & support"],
    reviews: ["0", "1–9", "10–99", "100–999", "1,000+"],
    revenueDonut: ["Le top 10 des apps", "Reste du top 1%", "Les 99% restants"],
    revenueCountries: ["🇺🇸 US", "🇨🇦 CA", "🇻🇳 VN", "🇮🇳 IN", "🇬🇧 UK", "🇮🇱 IL", "🇸🇬 SG", "🇫🇷 FR", "🇱🇹 LT", "Reste du monde"],
    revenueCountriesFull: ["🇺🇸 États-Unis", "🇨🇦 Canada", "🇻🇳 Vietnam", "🇮🇳 Inde", "🇬🇧 Royaume-Uni", "🇮🇱 Israël", "🇸🇬 Singapour", "🇫🇷 France", "🇱🇹 Lituanie", "Reste du monde"],
    pricing: ["Entièrement gratuit", "Forfait gratuit disponible", "Essai gratuit", "Payant d'avance"],
    geography: ["États-Unis", "Inde", "Royaume-Uni", "Canada", "Vietnam", "Chine", "Japon", "Allemagne", "Australie", "France"],
    reviewsTip: { title: "Apps avec {x} avis", body: "{n} apps ({p}%)" },
    geoTiers: ["0 avis", "1–9 avis", "10–99 avis", "100–999 avis", "1,000+ avis"],
    geoCountries: { US: "États-Unis", India: "Inde", UK: "Royaume-Uni", Canada: "Canada", Vietnam: "Vietnam", Germany: "Allemagne", Japan: "Japon", China: "Chine", Australia: "Australie", France: "France", Pakistan: "Pakistan", Israel: "Israël", Singapore: "Singapour", "Hong Kong": "Hong Kong", Lithuania: "Lituanie", Romania: "Roumanie" },
  },
  it: {
    niches: ["Localizzazione", "Prezzi & sconti", "Marketing & pop-up", "Design del negozio", "Analisi & report", "Upsell & raccomandazioni", "Spedizione & logistica", "Chat & assistenza"],
    reviews: ["0", "1–9", "10–99", "100–999", "1,000+"],
    revenueDonut: ["Le prime 10 app", "Resto del top 1%", "L'altro 99%"],
    revenueCountries: ["🇺🇸 US", "🇨🇦 CA", "🇻🇳 VN", "🇮🇳 IN", "🇬🇧 UK", "🇮🇱 IL", "🇸🇬 SG", "🇫🇷 FR", "🇱🇹 LT", "Resto del mondo"],
    revenueCountriesFull: ["🇺🇸 Stati Uniti", "🇨🇦 Canada", "🇻🇳 Vietnam", "🇮🇳 India", "🇬🇧 Regno Unito", "🇮🇱 Israele", "🇸🇬 Singapore", "🇫🇷 Francia", "🇱🇹 Lituania", "Resto del mondo"],
    pricing: ["Completamente gratis", "Piano gratuito disponibile", "Prova gratuita", "A pagamento in anticipo"],
    geography: ["USA", "India", "Regno Unito", "Canada", "Vietnam", "Cina", "Giappone", "Germania", "Australia", "Francia"],
    reviewsTip: { title: "App con {x} recensioni", body: "{n} app ({p}%)" },
    geoTiers: ["0 recensioni", "1–9 recensioni", "10–99 recensioni", "100–999 recensioni", "1,000+ recensioni"],
    geoCountries: { US: "USA", India: "India", UK: "Regno Unito", Canada: "Canada", Vietnam: "Vietnam", Germany: "Germania", Japan: "Giappone", China: "Cina", Australia: "Australia", France: "Francia", Pakistan: "Pakistan", Israel: "Israele", Singapore: "Singapore", "Hong Kong": "Hong Kong", Lithuania: "Lituania", Romania: "Romania" },
  },
  nl: {
    niches: ["Lokalisatie", "Prijzen & kortingen", "Marketing & pop-ups", "Winkelontwerp", "Analytics & rapportage", "Upsell & aanbevelingen", "Verzending & fulfilment", "Chat & support"],
    reviews: ["0", "1–9", "10–99", "100–999", "1,000+"],
    revenueDonut: ["De top 10 apps", "Rest van de top 1%", "De andere 99%"],
    revenueCountries: ["🇺🇸 US", "🇨🇦 CA", "🇻🇳 VN", "🇮🇳 IN", "🇬🇧 UK", "🇮🇱 IL", "🇸🇬 SG", "🇫🇷 FR", "🇱🇹 LT", "Rest van de wereld"],
    revenueCountriesFull: ["🇺🇸 Verenigde Staten", "🇨🇦 Canada", "🇻🇳 Vietnam", "🇮🇳 India", "🇬🇧 Verenigd Koninkrijk", "🇮🇱 Israël", "🇸🇬 Singapore", "🇫🇷 Frankrijk", "🇱🇹 Litouwen", "Rest van de wereld"],
    pricing: ["Volledig gratis", "Gratis abonnement beschikbaar", "Gratis proefperiode", "Vooraf betaald"],
    geography: ["VS", "India", "VK", "Canada", "Vietnam", "China", "Japan", "Duitsland", "Australië", "Frankrijk"],
    reviewsTip: { title: "Apps met {x} reviews", body: "{n} apps ({p}%)" },
    geoTiers: ["0 reviews", "1–9 reviews", "10–99 reviews", "100–999 reviews", "1,000+ reviews"],
    geoCountries: { US: "VS", India: "India", UK: "VK", Canada: "Canada", Vietnam: "Vietnam", Germany: "Duitsland", Japan: "Japan", China: "China", Australia: "Australië", France: "Frankrijk", Pakistan: "Pakistan", Israel: "Israël", Singapore: "Singapore", "Hong Kong": "Hongkong", Lithuania: "Litouwen", Romania: "Roemenië" },
  },
  sv: {
    niches: ["Lokalisering", "Priser & rabatter", "Marknadsföring & pop-ups", "Butiksdesign", "Analys & rapportering", "Merförsäljning & rekommendationer", "Frakt & logistik", "Chatt & support"],
    reviews: ["0", "1–9", "10–99", "100–999", "1,000+"],
    revenueDonut: ["De 10 främsta apparna", "Resten av topp 1%", "De övriga 99%"],
    revenueCountries: ["🇺🇸 US", "🇨🇦 CA", "🇻🇳 VN", "🇮🇳 IN", "🇬🇧 UK", "🇮🇱 IL", "🇸🇬 SG", "🇫🇷 FR", "🇱🇹 LT", "Övriga världen"],
    revenueCountriesFull: ["🇺🇸 USA", "🇨🇦 Kanada", "🇻🇳 Vietnam", "🇮🇳 Indien", "🇬🇧 Storbritannien", "🇮🇱 Israel", "🇸🇬 Singapore", "🇫🇷 Frankrike", "🇱🇹 Litauen", "Övriga världen"],
    pricing: ["Helt gratis", "Gratisplan tillgänglig", "Gratis provperiod", "Betalning i förskott"],
    geography: ["USA", "Indien", "Storbritannien", "Kanada", "Vietnam", "Kina", "Japan", "Tyskland", "Australien", "Frankrike"],
    reviewsTip: { title: "Appar med {x} recensioner", body: "{n} appar ({p}%)" },
    geoTiers: ["0 recensioner", "1–9 recensioner", "10–99 recensioner", "100–999 recensioner", "1,000+ recensioner"],
    geoCountries: { US: "USA", India: "Indien", UK: "Storbritannien", Canada: "Kanada", Vietnam: "Vietnam", Germany: "Tyskland", Japan: "Japan", China: "Kina", Australia: "Australien", France: "Frankrike", Pakistan: "Pakistan", Israel: "Israel", Singapore: "Singapore", "Hong Kong": "Hongkong", Lithuania: "Litauen", Romania: "Rumänien" },
  },
  fi: {
    niches: ["Lokalisointi", "Hinnat & alennukset", "Markkinointi & ponnahdusikkunat", "Kaupan ulkoasu", "Analytiikka & raportointi", "Lisämyynti & suositukset", "Toimitus & logistiikka", "Chat & tuki"],
    reviews: ["0", "1–9", "10–99", "100–999", "1,000+"],
    revenueDonut: ["10 parasta sovellusta", "Loput top 1%:sta", "Loput 99%"],
    revenueCountries: ["🇺🇸 US", "🇨🇦 CA", "🇻🇳 VN", "🇮🇳 IN", "🇬🇧 UK", "🇮🇱 IL", "🇸🇬 SG", "🇫🇷 FR", "🇱🇹 LT", "Muu maailma"],
    revenueCountriesFull: ["🇺🇸 Yhdysvallat", "🇨🇦 Kanada", "🇻🇳 Vietnam", "🇮🇳 Intia", "🇬🇧 Britannia", "🇮🇱 Israel", "🇸🇬 Singapore", "🇫🇷 Ranska", "🇱🇹 Liettua", "Muu maailma"],
    pricing: ["Täysin ilmainen", "Ilmainen taso saatavilla", "Ilmainen kokeilu", "Maksullinen etukäteen"],
    geography: ["USA", "Intia", "Britannia", "Kanada", "Vietnam", "Kiina", "Japani", "Saksa", "Australia", "Ranska"],
    reviewsTip: { title: "Sovellukset, joilla on {x} arvostelua", body: "{n} sovellusta ({p}%)" },
    geoTiers: ["0 arvostelua", "1–9 arvostelua", "10–99 arvostelua", "100–999 arvostelua", "1,000+ arvostelua"],
    geoCountries: { US: "USA", India: "Intia", UK: "Britannia", Canada: "Kanada", Vietnam: "Vietnam", Germany: "Saksa", Japan: "Japani", China: "Kiina", Australia: "Australia", France: "Ranska", Pakistan: "Pakistan", Israel: "Israel", Singapore: "Singapore", "Hong Kong": "Hongkong", Lithuania: "Liettua", Romania: "Romania" },
  },
  pl: {
    niches: ["Lokalizacja", "Ceny i rabaty", "Marketing i pop-upy", "Projekt sklepu", "Analityka i raporty", "Upsell i rekomendacje", "Wysyłka i logistyka", "Czat i wsparcie"],
    reviews: ["0", "1–9", "10–99", "100–999", "1,000+"],
    revenueDonut: ["10 najlepszych aplikacji", "Reszta z 1% najlepszych", "Pozostałe 99%"],
    revenueCountries: ["🇺🇸 US", "🇨🇦 CA", "🇻🇳 VN", "🇮🇳 IN", "🇬🇧 UK", "🇮🇱 IL", "🇸🇬 SG", "🇫🇷 FR", "🇱🇹 LT", "Reszta świata"],
    revenueCountriesFull: ["🇺🇸 Stany Zjednoczone", "🇨🇦 Kanada", "🇻🇳 Wietnam", "🇮🇳 Indie", "🇬🇧 Wielka Brytania", "🇮🇱 Izrael", "🇸🇬 Singapur", "🇫🇷 Francja", "🇱🇹 Litwa", "Reszta świata"],
    pricing: ["Całkowicie za darmo", "Dostępny darmowy plan", "Bezpłatny okres próbny", "Płatne z góry"],
    geography: ["USA", "Indie", "Wielka Brytania", "Kanada", "Wietnam", "Chiny", "Japonia", "Niemcy", "Australia", "Francja"],
    reviewsTip: { title: "Aplikacje z {x} recenzjami", body: "{n} aplikacji ({p}%)" },
    geoTiers: ["0 recenzji", "1–9 recenzji", "10–99 recenzji", "100–999 recenzji", "1,000+ recenzji"],
    geoCountries: { US: "USA", India: "Indie", UK: "Wielka Brytania", Canada: "Kanada", Vietnam: "Wietnam", Germany: "Niemcy", Japan: "Japonia", China: "Chiny", Australia: "Australia", France: "Francja", Pakistan: "Pakistan", Israel: "Izrael", Singapore: "Singapur", "Hong Kong": "Hongkong", Lithuania: "Litwa", Romania: "Rumunia" },
  },
  cs: {
    niches: ["Lokalizace", "Ceny a slevy", "Marketing a pop-upy", "Design obchodu", "Analytika a reporty", "Upsell a doporučení", "Doprava a logistika", "Chat a podpora"],
    reviews: ["0", "1–9", "10–99", "100–999", "1,000+"],
    revenueDonut: ["Prvních 10 aplikací", "Zbytek z 1% nejlepších", "Zbylých 99%"],
    revenueCountries: ["🇺🇸 US", "🇨🇦 CA", "🇻🇳 VN", "🇮🇳 IN", "🇬🇧 UK", "🇮🇱 IL", "🇸🇬 SG", "🇫🇷 FR", "🇱🇹 LT", "Zbytek světa"],
    revenueCountriesFull: ["🇺🇸 Spojené státy", "🇨🇦 Kanada", "🇻🇳 Vietnam", "🇮🇳 Indie", "🇬🇧 Spojené království", "🇮🇱 Izrael", "🇸🇬 Singapur", "🇫🇷 Francie", "🇱🇹 Litva", "Zbytek světa"],
    pricing: ["Zcela zdarma", "Bezplatný tarif k dispozici", "Zkušební verze zdarma", "Placené předem"],
    geography: ["USA", "Indie", "Velká Británie", "Kanada", "Vietnam", "Čína", "Japonsko", "Německo", "Austrálie", "Francie"],
    reviewsTip: { title: "Aplikace s {x} recenzemi", body: "{n} aplikací ({p}%)" },
    geoTiers: ["0 recenzí", "1–9 recenzí", "10–99 recenzí", "100–999 recenzí", "1,000+ recenzí"],
    geoCountries: { US: "USA", India: "Indie", UK: "Velká Británie", Canada: "Kanada", Vietnam: "Vietnam", Germany: "Německo", Japan: "Japonsko", China: "Čína", Australia: "Austrálie", France: "Francie", Pakistan: "Pákistán", Israel: "Izrael", Singapore: "Singapur", "Hong Kong": "Hongkong", Lithuania: "Litva", Romania: "Rumunsko" },
  },
  pt: {
    niches: ["Localização", "Preços e descontos", "Marketing e pop-ups", "Design da loja", "Análises e relatórios", "Upsell e recomendações", "Envio e logística", "Chat e suporte"],
    reviews: ["0", "1–9", "10–99", "100–999", "1,000+"],
    revenueDonut: ["As 10 primeiras apps", "Resto do 1% do topo", "Os outros 99%"],
    revenueCountries: ["🇺🇸 US", "🇨🇦 CA", "🇻🇳 VN", "🇮🇳 IN", "🇬🇧 UK", "🇮🇱 IL", "🇸🇬 SG", "🇫🇷 FR", "🇱🇹 LT", "Resto do mundo"],
    revenueCountriesFull: ["🇺🇸 Estados Unidos", "🇨🇦 Canadá", "🇻🇳 Vietname", "🇮🇳 Índia", "🇬🇧 Reino Unido", "🇮🇱 Israel", "🇸🇬 Singapura", "🇫🇷 França", "🇱🇹 Lituânia", "Resto do mundo"],
    pricing: ["Totalmente grátis", "Plano grátis disponível", "Teste grátis", "Pago antecipadamente"],
    geography: ["EUA", "Índia", "Reino Unido", "Canadá", "Vietname", "China", "Japão", "Alemanha", "Austrália", "França"],
    reviewsTip: { title: "Apps com {x} avaliações", body: "{n} apps ({p}%)" },
    geoTiers: ["0 avaliações", "1–9 avaliações", "10–99 avaliações", "100–999 avaliações", "1,000+ avaliações"],
    geoCountries: { US: "EUA", India: "Índia", UK: "Reino Unido", Canada: "Canadá", Vietnam: "Vietname", Germany: "Alemanha", Japan: "Japão", China: "China", Australia: "Austrália", France: "França", Pakistan: "Paquistão", Israel: "Israel", Singapore: "Singapura", "Hong Kong": "Hong Kong", Lithuania: "Lituânia", Romania: "Roménia" },
  },
  ar: {
    niches: ["التعريب", "التسعير والخصومات", "التسويق والنوافذ المنبثقة", "تصميم المتجر", "التحليلات والتقارير", "البيع الإضافي والتوصيات", "الشحن والتنفيذ", "الدردشة والدعم"],
    reviews: ["0", "1–9", "10–99", "100–999", "1,000+"],
    revenueDonut: ["أفضل 10 تطبيقات", "بقية أعلى 1%", "الـ99% الأخرى"],
    revenueCountries: ["🇺🇸 US", "🇨🇦 CA", "🇻🇳 VN", "🇮🇳 IN", "🇬🇧 UK", "🇮🇱 IL", "🇸🇬 SG", "🇫🇷 FR", "🇱🇹 LT", "بقية العالم"],
    revenueCountriesFull: ["🇺🇸 الولايات المتحدة", "🇨🇦 كندا", "🇻🇳 فيتنام", "🇮🇳 الهند", "🇬🇧 المملكة المتحدة", "🇮🇱 إسرائيل", "🇸🇬 سنغافورة", "🇫🇷 فرنسا", "🇱🇹 ليتوانيا", "بقية العالم"],
    pricing: ["مجاني تمامًا", "خطة مجانية متاحة", "تجربة مجانية", "مدفوع مقدمًا"],
    geography: ["الولايات المتحدة", "الهند", "المملكة المتحدة", "كندا", "فيتنام", "الصين", "اليابان", "ألمانيا", "أستراليا", "فرنسا"],
    reviewsTip: { title: "تطبيقات لها {x} مراجعات", body: "{n} تطبيق ({p}%)" },
    geoTiers: ["0 مراجعة", "1–9 مراجعات", "10–99 مراجعات", "100–999 مراجعات", "1,000+ مراجعات"],
    geoCountries: { US: "الولايات المتحدة", India: "الهند", UK: "المملكة المتحدة", Canada: "كندا", Vietnam: "فيتنام", Germany: "ألمانيا", Japan: "اليابان", China: "الصين", Australia: "أستراليا", France: "فرنسا", Pakistan: "باكستان", Israel: "إسرائيل", Singapore: "سنغافورة", "Hong Kong": "هونغ كونغ", Lithuania: "ليتوانيا", Romania: "رومانيا" },
  },
  he: {
    niches: ["לוקליזציה", "תמחור והנחות", "שיווק וחלונות קופצים", "עיצוב חנות", "אנליטיקה ודוחות", "מכירה נוספת והמלצות", "משלוח ומילוי", "צ'אט ותמיכה"],
    reviews: ["0", "1–9", "10–99", "100–999", "1,000+"],
    revenueDonut: ["10 האפליקציות המובילות", "שאר 1% העליון", "99% הנותרים"],
    revenueCountries: ["🇺🇸 US", "🇨🇦 CA", "🇻🇳 VN", "🇮🇳 IN", "🇬🇧 UK", "🇮🇱 IL", "🇸🇬 SG", "🇫🇷 FR", "🇱🇹 LT", "שאר העולם"],
    revenueCountriesFull: ["🇺🇸 ארצות הברית", "🇨🇦 קנדה", "🇻🇳 וייטנאם", "🇮🇳 הודו", "🇬🇧 בריטניה", "🇮🇱 ישראל", "🇸🇬 סינגפור", "🇫🇷 צרפת", "🇱🇹 ליטא", "שאר העולם"],
    pricing: ["חינם לחלוטין", "תוכנית חינמית זמינה", "ניסיון חינם", "בתשלום מראש"],
    geography: ["ארצות הברית", "הודו", "בריטניה", "קנדה", "וייטנאם", "סין", "יפן", "גרמניה", "אוסטרליה", "צרפת"],
    reviewsTip: { title: "אפליקציות עם {x} ביקורות", body: "{n} אפליקציות ({p}%)" },
    geoTiers: ["0 ביקורות", "1–9 ביקורות", "10–99 ביקורות", "100–999 ביקורות", "1,000+ ביקורות"],
    geoCountries: { US: "ארצות הברית", India: "הודו", UK: "בריטניה", Canada: "קנדה", Vietnam: "וייטנאם", Germany: "גרמניה", Japan: "יפן", China: "סין", Australia: "אוסטרליה", France: "צרפת", Pakistan: "פקיסטן", Israel: "ישראל", Singapore: "סינגפור", "Hong Kong": "הונג קונג", Lithuania: "ליטא", Romania: "רומניה" },
  },
};
