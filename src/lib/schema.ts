import { SITE } from "./site";

export function organization() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.site_url,
    logo: new URL("/img/logo.svg", SITE.site_url).href,
    sameAs: [
      "https://twitter.com/revenuehunt",
      "https://www.linkedin.com/company/revenuehunt",
      "https://www.youtube.com/@revenuehunt",
    ],
  };
}

export function website() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.site_url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE.site_url}/?s={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function article(opts: {
  title: string;
  description: string;
  url: string;
  image?: string | null;
  datePublished: Date | string;
  dateModified?: Date | string;
  author?: string;
  tags?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    mainEntityOfPage: opts.url,
    image: opts.image ? new URL(opts.image, SITE.site_url).href : undefined,
    datePublished: new Date(opts.datePublished).toISOString(),
    dateModified: new Date(opts.dateModified ?? opts.datePublished).toISOString(),
    author: { "@type": "Person", name: opts.author ?? "RevenueHunt" },
    publisher: organization(),
    keywords: opts.tags?.join(", "),
  };
}

export function breadcrumb(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: new URL(it.url, SITE.site_url).href,
    })),
  };
}
