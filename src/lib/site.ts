export const SITE = {
  name: "RevenueHunt",
  description:
    "Product recommendation quizzes for Shopify and Shopify Plus stores. Convert browsers into buyers with personalized quiz funnels.",
  app_url: import.meta.env.PUBLIC_APP_URL ?? "https://app.revenuehunt.com",
  site_url: import.meta.env.PUBLIC_SITE_URL ?? "http://localhost:4321",
};

export function ogImageForPath(pathname: string): string | null {
  const stripped = pathname.replace(/\/$/, "");
  const map: Record<string, string> = {
    "": "index",
    "/pricing": "pricing",
    "/features": "features",
    "/about": "about",
    "/contact": "contact",
    "/blog": "blog",
  };
  const slug = map[stripped];
  return slug ? `/og/${slug}.png` : null;
}
