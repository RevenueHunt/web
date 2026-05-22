export const SITE = {
  name: "RevenueHunt",
  description:
    "Product recommendation quizzes for Shopify and Shopify Plus stores. Convert browsers into buyers with personalized quiz funnels.",
  app_url: import.meta.env.PUBLIC_APP_URL ?? "https://admin.revenuehunt.com",
  site_url: import.meta.env.PUBLIC_SITE_URL ?? "https://revenuehunt.com",
  signup_url: "https://admin.revenuehunt.com/register/",
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
