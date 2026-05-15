/** Per-platform config for the bespoke platform-page layout.
 *  Keyed by the page slug. Add a new entry here and create an override
 *  file at src/pages/<slug>/index.astro pointing at <PlatformPage>. */

export interface CTA {
  label: string;
  href: string;
  external?: boolean;
}

export interface PlatformConfig {
  /** Short name shown in chrome / breadcrumb chip. */
  platform: string;
  /** Primary call-to-action (eigengrau filled). */
  primary: CTA;
  /** Secondary call-to-action (white bg, eigengrau border + text). */
  secondary?: CTA;
  /** YouTube video ID embedded in the hero (right column on widescreen). */
  youtubeId?: string;
}

export const PLATFORM_CONFIGS: Record<string, PlatformConfig> = {
  "product-recommendation-quiz-shopify": {
    platform: "Shopify",
    primary: {
      label: "install on Shopify",
      href: "https://apps.shopify.com/product-recommendation-quiz-revenuehunt/install?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=platform_hero",
      external: true,
    },
    secondary: {
      label: "view demo store",
      href: "https://skincarequiz.myshopify.com",
      external: true,
    },
    youtubeId: "GcpJb09S4AY",
  },
  "product-recommendation-quiz-woocommerce": {
    platform: "WooCommerce",
    primary: {
      label: "download the plugin",
      href: "https://downloads.wordpress.org/plugin/product-recommendation-quiz-for-ecommerce.latest-stable.zip",
      external: true,
    },
    secondary: { label: "view demo store", href: "https://skincarequiz.myshopify.com", external: true },
    youtubeId: "SX-BZBl1PFw",
  },
  "product-recommendation-quiz-bigcommerce": {
    platform: "BigCommerce",
    primary: {
      label: "install on BigCommerce",
      href: "https://www.bigcommerce.com/apps/product-recommendation-quiz/",
      external: true,
    },
    secondary: { label: "view demo store", href: "https://skincarequiz.myshopify.com", external: true },
    youtubeId: "9uGXJYk4mgY",
  },
  "product-recommendation-quiz-wix-stores": {
    platform: "Wix",
    primary: { label: "sign up", href: "https://admin.revenuehunt.com/register/", external: true },
    secondary: { label: "view demo store", href: "https://skincarequiz.myshopify.com", external: true },
  },
  "product-recommendation-quiz-for-squarespace-commerce": {
    platform: "Squarespace",
    primary: { label: "sign up", href: "https://admin.revenuehunt.com/register/", external: true },
    secondary: { label: "view demo store", href: "https://skincarequiz.myshopify.com", external: true },
  },
  "product-recommendation-quiz-for-magento": {
    platform: "Magento",
    primary: {
      label: "use the standalone solution",
      href: "/product-recommendation-quiz-standalone-google-product-feed/",
    },
    secondary: { label: "use on Shopify instead", href: "/product-recommendation-quiz-shopify/" },
    youtubeId: "38niHET5cAU",
  },
  "product-recommendation-quiz-standalone-google-product-feed": {
    platform: "Google Product Feed",
    primary: { label: "get started free", href: "https://admin.revenuehunt.com/register/", external: true },
    secondary: { label: "view demo store", href: "https://skincarequiz.myshopify.com", external: true },
  },
  "product-recommendation-quiz-pos-tablet-stands": {
    platform: "POS tablet stands",
    primary: { label: "sign up", href: "https://admin.revenuehunt.com/register/", external: true },
    secondary: { label: "see quiz templates", href: "/templates/" },
  },
  "product-recommendation-quiz": {
    platform: "All platforms",
    primary: { label: "get for Shopify", href: "/product-recommendation-quiz-shopify/" },
    secondary: { label: "get for WooCommerce", href: "/product-recommendation-quiz-woocommerce/" },
  },
};

export function platformSlugs(): string[] {
  return Object.keys(PLATFORM_CONFIGS);
}
