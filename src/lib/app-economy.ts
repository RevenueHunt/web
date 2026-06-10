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
    "Estimated monthly revenue is brutally top-heavy. The top 1% of apps (225 of them) take an estimated 72% of it, and just 10 of those apps take nearly 30% of all app revenue on their own. (And one name towers over the whole ecosystem: an app which draws an estimated 78% of its roughly $1B in annual revenue from merchants who also run on Shopify. Yes, we're looking at you, <a href='https://www.sec.gov/Archives/edgar/data/1835830/000162828023030618/klaviyoincs-1.htm' target='_blank' rel='external noopener nofollow' class='font-medium text-[#16161D] underline decoration-slate-500 underline-offset-2 hover:decoration-[#16161D]'>Klaviyo</a>.) Only about 36% of apps look like they earn anything at all. And it clusters by geography: <strong>the US and Canada alone take an estimated 57%</strong> of the Shopify App Store revenue.",
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

/**
 * Who builds them, on complete developer-country data. The original snapshot was
 * missing a country for ~37% of listings (absent from JSON-LD); it was recovered
 * from each listing's HTML location line, lifting coverage to 100% and 131
 * countries. `labels`/`values` are the legacy single-bar series still read by the
 * locale pages; English uses `builders` (stacked by review tier) and `signal`
 * (re-ranked by apps that cleared 10+ reviews).
 */
export const GEOGRAPHY = {
  labels: ["US", "India", "UK", "Canada", "Vietnam", "China", "Japan", "Germany", "Australia", "France"],
  values: [3582, 2105, 779, 766, 507, 416, 401, 389, 370, 326],
  builtForShopify: "6.7%",
  builtForShopifyCount: "1,502",
  usIndiaShare: "39%",
  vietnamSignal: "46%",
  /** Top 10 builders by total apps, each split into review tiers (absolute counts). */
  builders: {
    labels: ["US", "India", "UK", "Canada", "Vietnam", "Germany", "Japan", "China", "Australia", "France"],
    zero: [2463, 1882, 646, 514, 215, 338, 468, 374, 300, 251],
    low: [1690, 1049, 421, 324, 169, 236, 125, 164, 194, 180],
    high: [1202, 551, 242, 293, 326, 104, 49, 57, 98, 108],
  },
  /**
   * The same store re-ranked by apps that cleared 10+ reviews (real traction).
   * China and Japan fall out of the top 10; Israel and Singapore (highlight) take
   * their place.
   */
  signal: {
    labels: ["US", "India", "Vietnam", "Canada", "UK", "France", "Israel", "Germany", "Australia", "Singapore"],
    values: [1202, 551, 326, 293, 242, 108, 107, 104, 98, 94],
    highlight: [6, 9],
  },
  caption:
    "Two dominate: <strong>the US (24%) and India (15%) build two in five</strong> of the store between them. But <strong>volume is not traction</strong>. Rank countries only by the apps that cleared 10+ reviews and the leaderboard redraws - <strong>Vietnam</strong>, a mid-size builder, lands more apps with real traction than its size suggests, while <strong>Japan and China fall away</strong>.",
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
 * REVENUE.countries / PRICING.labels.
 */
export interface ChartLabels {
  reviews: string[];
  reviewsTip: { title: string; body: string };
  revenueDonut: [string, string, string];
  revenueCountries: string[];
  revenueCountriesFull: string[];
  pricing: [string, string, string];
  /** Top builder countries, same order as GEOGRAPHY.labels. Country names. */
  geography: string[];
  /** Stacked geography chart: review-tier legend. Optional until locale fan-out. */
  geoTiers?: [string, string, string];
  /** Signal-ranked geography bar tooltip; {n} = app count. Optional until fan-out. */
  geoSignalTip?: string;
}

export const CHART_LABELS: Record<string, ChartLabels> = {
  en: {
    reviews: ["0", "1–9", "10–99", "100–999", "1,000+"],
    revenueDonut: ["Top 10 apps", "Rest of the top 1%", "The other 99%"],
    revenueCountries: ["🇺🇸 US", "🇨🇦 CA", "🇻🇳 VN", "🇮🇳 IN", "🇬🇧 UK", "🇮🇱 IL", "🇸🇬 SG", "🇫🇷 FR", "🇱🇹 LT", "Rest of world"],
    revenueCountriesFull: ["🇺🇸 United States", "🇨🇦 Canada", "🇻🇳 Vietnam", "🇮🇳 India", "🇬🇧 United Kingdom", "🇮🇱 Israel", "🇸🇬 Singapore", "🇫🇷 France", "🇱🇹 Lithuania", "Rest of world"],
    pricing: ["Free", "Free trial", "Paid up front"],
    geography: ["US", "India", "UK", "Canada", "Vietnam", "China", "Japan", "Germany", "Australia", "France"],
    reviewsTip: { title: "Apps with {x} reviews", body: "{n} apps ({p}%)" },
    geoTiers: ["0 reviews", "1–9 reviews", "10+ reviews"],
    geoSignalTip: "{n} apps with 10+ reviews",
  },
  es: {
    reviews: ["0", "1–9", "10–99", "100–999", "1,000+"],
    revenueDonut: ["Las 10 primeras apps", "Resto del 1% superior", "El otro 99%"],
    revenueCountries: ["🇺🇸 US", "🇨🇦 CA", "🇻🇳 VN", "🇮🇳 IN", "🇬🇧 UK", "🇮🇱 IL", "🇸🇬 SG", "🇫🇷 FR", "🇱🇹 LT", "Resto del mundo"],
    revenueCountriesFull: ["🇺🇸 Estados Unidos", "🇨🇦 Canadá", "🇻🇳 Vietnam", "🇮🇳 India", "🇬🇧 Reino Unido", "🇮🇱 Israel", "🇸🇬 Singapur", "🇫🇷 Francia", "🇱🇹 Lituania", "Resto del mundo"],
    pricing: ["Gratis", "Prueba gratis", "De pago por adelantado"],
    geography: ["EE. UU.", "India", "Reino Unido", "Canadá", "Vietnam", "China", "Japón", "Alemania", "Australia", "Francia"],
    reviewsTip: { title: "Apps con {x} reseñas", body: "{n} apps ({p}%)" },
  },
  de: {
    reviews: ["0", "1–9", "10–99", "100–999", "1,000+"],
    revenueDonut: ["Die Top 10 Apps", "Rest der Top 1%", "Die anderen 99%"],
    revenueCountries: ["🇺🇸 US", "🇨🇦 CA", "🇻🇳 VN", "🇮🇳 IN", "🇬🇧 UK", "🇮🇱 IL", "🇸🇬 SG", "🇫🇷 FR", "🇱🇹 LT", "Übrige Welt"],
    revenueCountriesFull: ["🇺🇸 Vereinigte Staaten", "🇨🇦 Kanada", "🇻🇳 Vietnam", "🇮🇳 Indien", "🇬🇧 Vereinigtes Königreich", "🇮🇱 Israel", "🇸🇬 Singapur", "🇫🇷 Frankreich", "🇱🇹 Litauen", "Übrige Welt"],
    pricing: ["Kostenlos", "Kostenlose Testversion", "Vorab kostenpflichtig"],
    geography: ["USA", "Indien", "UK", "Kanada", "Vietnam", "China", "Japan", "Deutschland", "Australien", "Frankreich"],
    reviewsTip: { title: "Apps mit {x} Bewertungen", body: "{n} Apps ({p}%)" },
  },
  fr: {
    reviews: ["0", "1–9", "10–99", "100–999", "1,000+"],
    revenueDonut: ["Le top 10 des apps", "Reste du top 1%", "Les 99% restants"],
    revenueCountries: ["🇺🇸 US", "🇨🇦 CA", "🇻🇳 VN", "🇮🇳 IN", "🇬🇧 UK", "🇮🇱 IL", "🇸🇬 SG", "🇫🇷 FR", "🇱🇹 LT", "Reste du monde"],
    revenueCountriesFull: ["🇺🇸 États-Unis", "🇨🇦 Canada", "🇻🇳 Vietnam", "🇮🇳 Inde", "🇬🇧 Royaume-Uni", "🇮🇱 Israël", "🇸🇬 Singapour", "🇫🇷 France", "🇱🇹 Lituanie", "Reste du monde"],
    pricing: ["Gratuit", "Essai gratuit", "Payant d'avance"],
    geography: ["États-Unis", "Inde", "Royaume-Uni", "Canada", "Vietnam", "Chine", "Japon", "Allemagne", "Australie", "France"],
    reviewsTip: { title: "Apps avec {x} avis", body: "{n} apps ({p}%)" },
  },
  it: {
    reviews: ["0", "1–9", "10–99", "100–999", "1,000+"],
    revenueDonut: ["Le prime 10 app", "Resto del top 1%", "L'altro 99%"],
    revenueCountries: ["🇺🇸 US", "🇨🇦 CA", "🇻🇳 VN", "🇮🇳 IN", "🇬🇧 UK", "🇮🇱 IL", "🇸🇬 SG", "🇫🇷 FR", "🇱🇹 LT", "Resto del mondo"],
    revenueCountriesFull: ["🇺🇸 Stati Uniti", "🇨🇦 Canada", "🇻🇳 Vietnam", "🇮🇳 India", "🇬🇧 Regno Unito", "🇮🇱 Israele", "🇸🇬 Singapore", "🇫🇷 Francia", "🇱🇹 Lituania", "Resto del mondo"],
    pricing: ["Gratis", "Prova gratuita", "A pagamento in anticipo"],
    geography: ["USA", "India", "Regno Unito", "Canada", "Vietnam", "Cina", "Giappone", "Germania", "Australia", "Francia"],
    reviewsTip: { title: "App con {x} recensioni", body: "{n} app ({p}%)" },
  },
  nl: {
    reviews: ["0", "1–9", "10–99", "100–999", "1,000+"],
    revenueDonut: ["De top 10 apps", "Rest van de top 1%", "De andere 99%"],
    revenueCountries: ["🇺🇸 US", "🇨🇦 CA", "🇻🇳 VN", "🇮🇳 IN", "🇬🇧 UK", "🇮🇱 IL", "🇸🇬 SG", "🇫🇷 FR", "🇱🇹 LT", "Rest van de wereld"],
    revenueCountriesFull: ["🇺🇸 Verenigde Staten", "🇨🇦 Canada", "🇻🇳 Vietnam", "🇮🇳 India", "🇬🇧 Verenigd Koninkrijk", "🇮🇱 Israël", "🇸🇬 Singapore", "🇫🇷 Frankrijk", "🇱🇹 Litouwen", "Rest van de wereld"],
    pricing: ["Gratis", "Gratis proefperiode", "Vooraf betaald"],
    geography: ["VS", "India", "VK", "Canada", "Vietnam", "China", "Japan", "Duitsland", "Australië", "Frankrijk"],
    reviewsTip: { title: "Apps met {x} reviews", body: "{n} apps ({p}%)" },
  },
  sv: {
    reviews: ["0", "1–9", "10–99", "100–999", "1,000+"],
    revenueDonut: ["De 10 främsta apparna", "Resten av topp 1%", "De övriga 99%"],
    revenueCountries: ["🇺🇸 US", "🇨🇦 CA", "🇻🇳 VN", "🇮🇳 IN", "🇬🇧 UK", "🇮🇱 IL", "🇸🇬 SG", "🇫🇷 FR", "🇱🇹 LT", "Övriga världen"],
    revenueCountriesFull: ["🇺🇸 USA", "🇨🇦 Kanada", "🇻🇳 Vietnam", "🇮🇳 Indien", "🇬🇧 Storbritannien", "🇮🇱 Israel", "🇸🇬 Singapore", "🇫🇷 Frankrike", "🇱🇹 Litauen", "Övriga världen"],
    pricing: ["Gratis", "Gratis provperiod", "Betalning i förskott"],
    geography: ["USA", "Indien", "Storbritannien", "Kanada", "Vietnam", "Kina", "Japan", "Tyskland", "Australien", "Frankrike"],
    reviewsTip: { title: "Appar med {x} recensioner", body: "{n} appar ({p}%)" },
  },
  fi: {
    reviews: ["0", "1–9", "10–99", "100–999", "1,000+"],
    revenueDonut: ["10 parasta sovellusta", "Loput top 1%:sta", "Loput 99%"],
    revenueCountries: ["🇺🇸 US", "🇨🇦 CA", "🇻🇳 VN", "🇮🇳 IN", "🇬🇧 UK", "🇮🇱 IL", "🇸🇬 SG", "🇫🇷 FR", "🇱🇹 LT", "Muu maailma"],
    revenueCountriesFull: ["🇺🇸 Yhdysvallat", "🇨🇦 Kanada", "🇻🇳 Vietnam", "🇮🇳 Intia", "🇬🇧 Britannia", "🇮🇱 Israel", "🇸🇬 Singapore", "🇫🇷 Ranska", "🇱🇹 Liettua", "Muu maailma"],
    pricing: ["Ilmainen", "Ilmainen kokeilu", "Maksullinen etukäteen"],
    geography: ["USA", "Intia", "Britannia", "Kanada", "Vietnam", "Kiina", "Japani", "Saksa", "Australia", "Ranska"],
    reviewsTip: { title: "Sovellukset, joilla on {x} arvostelua", body: "{n} sovellusta ({p}%)" },
  },
  pl: {
    reviews: ["0", "1–9", "10–99", "100–999", "1,000+"],
    revenueDonut: ["10 najlepszych aplikacji", "Reszta z 1% najlepszych", "Pozostałe 99%"],
    revenueCountries: ["🇺🇸 US", "🇨🇦 CA", "🇻🇳 VN", "🇮🇳 IN", "🇬🇧 UK", "🇮🇱 IL", "🇸🇬 SG", "🇫🇷 FR", "🇱🇹 LT", "Reszta świata"],
    revenueCountriesFull: ["🇺🇸 Stany Zjednoczone", "🇨🇦 Kanada", "🇻🇳 Wietnam", "🇮🇳 Indie", "🇬🇧 Wielka Brytania", "🇮🇱 Izrael", "🇸🇬 Singapur", "🇫🇷 Francja", "🇱🇹 Litwa", "Reszta świata"],
    pricing: ["Za darmo", "Bezpłatny okres próbny", "Płatne z góry"],
    geography: ["USA", "Indie", "Wielka Brytania", "Kanada", "Wietnam", "Chiny", "Japonia", "Niemcy", "Australia", "Francja"],
    reviewsTip: { title: "Aplikacje z {x} recenzjami", body: "{n} aplikacji ({p}%)" },
  },
  cs: {
    reviews: ["0", "1–9", "10–99", "100–999", "1,000+"],
    revenueDonut: ["Prvních 10 aplikací", "Zbytek z 1% nejlepších", "Zbylých 99%"],
    revenueCountries: ["🇺🇸 US", "🇨🇦 CA", "🇻🇳 VN", "🇮🇳 IN", "🇬🇧 UK", "🇮🇱 IL", "🇸🇬 SG", "🇫🇷 FR", "🇱🇹 LT", "Zbytek světa"],
    revenueCountriesFull: ["🇺🇸 Spojené státy", "🇨🇦 Kanada", "🇻🇳 Vietnam", "🇮🇳 Indie", "🇬🇧 Spojené království", "🇮🇱 Izrael", "🇸🇬 Singapur", "🇫🇷 Francie", "🇱🇹 Litva", "Zbytek světa"],
    pricing: ["Zdarma", "Zkušební verze zdarma", "Placené předem"],
    geography: ["USA", "Indie", "Velká Británie", "Kanada", "Vietnam", "Čína", "Japonsko", "Německo", "Austrálie", "Francie"],
    reviewsTip: { title: "Aplikace s {x} recenzemi", body: "{n} aplikací ({p}%)" },
  },
  pt: {
    reviews: ["0", "1–9", "10–99", "100–999", "1,000+"],
    revenueDonut: ["As 10 primeiras apps", "Resto do 1% do topo", "Os outros 99%"],
    revenueCountries: ["🇺🇸 US", "🇨🇦 CA", "🇻🇳 VN", "🇮🇳 IN", "🇬🇧 UK", "🇮🇱 IL", "🇸🇬 SG", "🇫🇷 FR", "🇱🇹 LT", "Resto do mundo"],
    revenueCountriesFull: ["🇺🇸 Estados Unidos", "🇨🇦 Canadá", "🇻🇳 Vietname", "🇮🇳 Índia", "🇬🇧 Reino Unido", "🇮🇱 Israel", "🇸🇬 Singapura", "🇫🇷 França", "🇱🇹 Lituânia", "Resto do mundo"],
    pricing: ["Grátis", "Teste grátis", "Pago antecipadamente"],
    geography: ["EUA", "Índia", "Reino Unido", "Canadá", "Vietname", "China", "Japão", "Alemanha", "Austrália", "França"],
    reviewsTip: { title: "Apps com {x} avaliações", body: "{n} apps ({p}%)" },
  },
  ar: {
    reviews: ["0", "1–9", "10–99", "100–999", "1,000+"],
    revenueDonut: ["أفضل 10 تطبيقات", "بقية أعلى 1%", "الـ99% الأخرى"],
    revenueCountries: ["🇺🇸 US", "🇨🇦 CA", "🇻🇳 VN", "🇮🇳 IN", "🇬🇧 UK", "🇮🇱 IL", "🇸🇬 SG", "🇫🇷 FR", "🇱🇹 LT", "بقية العالم"],
    revenueCountriesFull: ["🇺🇸 الولايات المتحدة", "🇨🇦 كندا", "🇻🇳 فيتنام", "🇮🇳 الهند", "🇬🇧 المملكة المتحدة", "🇮🇱 إسرائيل", "🇸🇬 سنغافورة", "🇫🇷 فرنسا", "🇱🇹 ليتوانيا", "بقية العالم"],
    pricing: ["مجاني", "تجربة مجانية", "مدفوع مقدمًا"],
    geography: ["الولايات المتحدة", "الهند", "المملكة المتحدة", "كندا", "فيتنام", "الصين", "اليابان", "ألمانيا", "أستراليا", "فرنسا"],
    reviewsTip: { title: "تطبيقات لها {x} مراجعات", body: "{n} تطبيق ({p}%)" },
  },
  he: {
    reviews: ["0", "1–9", "10–99", "100–999", "1,000+"],
    revenueDonut: ["10 האפליקציות המובילות", "שאר 1% העליון", "99% הנותרים"],
    revenueCountries: ["🇺🇸 US", "🇨🇦 CA", "🇻🇳 VN", "🇮🇳 IN", "🇬🇧 UK", "🇮🇱 IL", "🇸🇬 SG", "🇫🇷 FR", "🇱🇹 LT", "שאר העולם"],
    revenueCountriesFull: ["🇺🇸 ארצות הברית", "🇨🇦 קנדה", "🇻🇳 וייטנאם", "🇮🇳 הודו", "🇬🇧 בריטניה", "🇮🇱 ישראל", "🇸🇬 סינגפור", "🇫🇷 צרפת", "🇱🇹 ליטא", "שאר העולם"],
    pricing: ["חינם", "ניסיון חינם", "בתשלום מראש"],
    geography: ["ארצות הברית", "הודו", "בריטניה", "קנדה", "וייטנאם", "סין", "יפן", "גרמניה", "אוסטרליה", "צרפת"],
    reviewsTip: { title: "אפליקציות עם {x} ביקורות", body: "{n} אפליקציות ({p}%)" },
  },
};
