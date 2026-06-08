/** Real customer-review data, sourced from each marketplace listing.
 *  Used to render visible review sections AND matching Product/Review JSON-LD.
 *  Keep ratingValue/reviewCount in sync with the live marketplace listings -
 *  the structured data must reflect genuine, on-page reviews (Google policy).
 *
 *  Last verified: 2026-06-08
 *  - Shopify App Store:  4.9 / 421  (apps.shopify.com)
 *  - WordPress.org:      5.0 / 100  (wordpress.org plugin reviews)
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
  reviewCount: string;
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
  reviewCount: "421",
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
  reviewCount: "100",
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

/** Cross-platform aggregate for the pricing page (Shopify + WooCommerce + BigCommerce). */
export const COMBINED_REVIEWS: PlatformReviews = {
  platform: "all platforms",
  ratingValue: "4.9",
  reviewCount: "523",
  sourceLabel: "Shopify, WooCommerce & BigCommerce",
  sourceUrl: "/testimonials/",
  reviews: [SHOPIFY.reviews[0]!, WOOCOMMERCE.reviews[0]!, SHOPIFY.reviews[2]!],
};
