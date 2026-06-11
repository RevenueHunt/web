/**
 * Google Ads conversion wiring. The retargeting Display campaign optimizes
 * toward "Shopify app install". We fire that conversion DIRECTLY to Google Ads
 * (not only as a GA4 event) so it never again depends on the GA4 -> Ads import
 * link, which silently broke during the site migration and starved the campaign
 * to $0 spend. To activate: create a "Website" conversion action in Google Ads
 * (account AW-391009741), paste its conversion label below, and every Shopify
 * App Store install CTA starts reporting. Empty label = direct tag disabled
 * (the GA4 `shopify_app_install` event still fires for reporting).
 */
export const ADS = {
  conversionId: "AW-391009741",
  installLabel: "", // e.g. "AbC-dEfGhIjKlMnOpQr" -> send_to AW-391009741/AbC-dEfGhIjKlMnOpQr
};

export const SITE = {
  name: "RevenueHunt",
  description:
    "Product recommendation quizzes for Shopify and Shopify Plus stores. Convert browsers into buyers with personalized quiz funnels.",
  app_url: import.meta.env.PUBLIC_APP_URL ?? "https://admin.revenuehunt.com",
  site_url: import.meta.env.PUBLIC_SITE_URL ?? "https://revenuehunt.com",
  signup_url: "https://admin.revenuehunt.com/register/",
  social: {
    linkedin: "https://www.linkedin.com/company/revenuehuntapps/",
    youtube: "https://www.youtube.com/@revenuehunt",
    github: "https://github.com/RevenueHunt/",
  },
};

/**
 * Resolve an OG image path for a given route. Pre-generated images live in
 * `/og/<slug>.png` and are produced by `scripts/generate-og.ts` (run on every
 * build). Unknown paths fall through to the caller, which uses `/og-default.png`.
 */
export function ogImageForPath(pathname: string): string | null {
  const stripped = pathname.replace(/\/$/, "").replace(/^\//, "");
  if (stripped === "") return "/og/index.png";
  // Routes that have their own pre-generated OG image. Anything matching one
  // of these path segments uses the matching PNG in /og/.
  const slug = stripped.split("/")[0]!;
  return `/og/${slug}.png`;
}
