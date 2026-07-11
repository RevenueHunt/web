/** Real customer-review data, sourced from each marketplace listing.
 *  Used to render visible review sections AND matching Product/Review JSON-LD.
 *  Keep ratingValue/reviewCount in sync with the live marketplace listings -
 *  the structured data must reflect genuine, on-page reviews (Google policy).
 *
 *  Each listing below is the single source of truth for its own count; the
 *  cross-platform aggregate (COMBINED_REVIEWS) is derived, never hand-written.
 *
 *  Last verified: 2026-07-11
 *  - Shopify App Store:  4.9 / 434  (apps.shopify.com)
 *  - WordPress.org:      5.0 / 101  (wordpress.org plugin reviews)
 *  - WooCommerce.com:    4.64 / 25  (woocommerce.com marketplace listing)
 *  - BigCommerce:        5.0 / 6    (bigcommerce.com app listing)
 */

export interface Review {
  author: string;
  location?: string;
  /** ISO date (YYYY-MM-DD). */
  date: string;
  rating: number;
  quote: string;
}

export interface PlatformReviews {
  /** Display name of the marketplace. */
  platform: string;
  ratingValue: string;
  /** Exact integer count — used for JSON-LD reviewCount (must be numeric). */
  reviewCount: string;
  /** Optional display override for the visible "from X reviews" text (e.g. "550+"). */
  reviewCountDisplay?: string;
  /** Where the reviews live, e.g. "Shopify App Store". */
  sourceLabel: string;
  /** Link to the full review list on the marketplace. */
  sourceUrl: string;
  /** Visible quote cards. May be empty (then only the aggregate is shown). */
  reviews: Review[];
}

const SHOPIFY: PlatformReviews = {
  platform: "Shopify",
  ratingValue: "4.9",
  reviewCount: "434",
  sourceLabel: "Shopify App Store",
  sourceUrl:
    "https://apps.shopify.com/product-recommendation-quiz-revenuehunt/reviews",
  reviews: [
    {
      author: "Matcha Union",
      location: "UK",
      date: "2026-04-16",
      rating: 5,
      quote:
        "Setup was straightforward and the support team are genuinely helpful, with quick responses and clear explanations for our Shopify integration.",
    },
    {
      author: "Kae Paché",
      location: "United States",
      date: "2026-02-25",
      rating: 5,
      quote:
        "The design process was more intuitive and visually friendly than competitors, and the support staff gave lightning-speed responses.",
    },
    {
      author: "Marcelle",
      location: "Canada",
      date: "2026-02-19",
      rating: 5,
      quote:
        "Extremely patient, knowledgeable and thorough, guiding me step by step through the whole quiz setup.",
    },
  ],
};

const WOOCOMMERCE: PlatformReviews = {
  platform: "WooCommerce",
  ratingValue: "5.0",
  reviewCount: "101",
  sourceLabel: "WordPress.org",
  sourceUrl:
    "https://wordpress.org/support/plugin/product-recommendation-quiz-for-ecommerce/reviews/",
  reviews: [
    {
      author: "segun2",
      date: "2026-05-20",
      rating: 5,
      quote: "Excellent support and a very useful plugin.",
    },
    {
      author: "mayabenhrzel",
      date: "2026-03-25",
      rating: 5,
      quote: "Easy to use and amazing customer support.",
    },
    {
      author: "Yasmina Yende Suka",
      date: "2025-04-15",
      rating: 5,
      quote: "Great plugin - does exactly what we needed for our store.",
    },
  ],
};

const BIGCOMMERCE: PlatformReviews = {
  platform: "BigCommerce",
  ratingValue: "5.0",
  reviewCount: "6",
  sourceLabel: "BigCommerce",
  sourceUrl: "https://www.bigcommerce.com/apps/product-recommendation-quiz/",
  // BigCommerce renders review text client-side; we surface the aggregate only.
  reviews: [],
};

/** Keyed by platform-page slug (matches PLATFORM_CONFIGS in platforms.ts). */
export const PLATFORM_REVIEWS: Record<string, PlatformReviews> = {
  "product-recommendation-quiz-shopify": SHOPIFY,
  "product-recommendation-quiz-woocommerce": WOOCOMMERCE,
  "product-recommendation-quiz-bigcommerce": BIGCOMMERCE,
};

/** The woocommerce.com marketplace listing has no platform page of its own —
 *  it contributes to the cross-platform aggregate only. */
const WOOCOMMERCE_COM = { ratingValue: "4.64", reviewCount: "25" };

/** Total count + review-weighted average across every listing we're on. */
function aggregate(listings: { ratingValue: string; reviewCount: string }[]) {
  const count = listings.reduce((n, l) => n + Number(l.reviewCount), 0);
  const weighted = listings.reduce(
    (n, l) => n + Number(l.ratingValue) * Number(l.reviewCount),
    0,
  );
  return {
    reviewCount: String(count),
    ratingValue: (weighted / count).toFixed(1),
  };
}

/** Cross-platform aggregate for the pricing page. The exact count and rating are
 *  derived — do not hand-write them. reviewCountDisplay is the rounded MARKETING
 *  claim and stays manual on purpose: the same claim is written out in ~24 other
 *  places (homepage heroes + meta in every locale, lib/competitors.ts,
 *  lib/content/longtail.ts, quiz-readiness-assessment), several of them localised.
 *  Deriving it here alone would silently desync this page from all of them.
 *  Bump it only together with those. */
export const COMBINED_REVIEWS: PlatformReviews = {
  platform: "all platforms",
  ...aggregate([SHOPIFY, WOOCOMMERCE, WOOCOMMERCE_COM, BIGCOMMERCE]),
  reviewCountDisplay: "550+",
  sourceLabel: "Shopify, WooCommerce & BigCommerce",
  sourceUrl: "/testimonials/",
  reviews: [SHOPIFY.reviews[0]!, WOOCOMMERCE.reviews[0]!, SHOPIFY.reviews[2]!],
};
