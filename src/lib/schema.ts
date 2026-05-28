import { SITE } from "./site";

export function organization() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.site_url,
    logo: new URL("/img/logos/revenuehunt-logo-horizontal.svg", SITE.site_url).href,
    sameAs: Object.values(SITE.social),
  };
}

export function softwareApplication() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "RevenueHunt Product Recommendation Quiz",
    url: SITE.site_url,
    description: SITE.description,
    image: new URL("/og/index.png", SITE.site_url).href,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "450",
    },
  };
}

export function productWithReviews(opts: {
  name: string;
  description: string;
  /** Path or absolute URL; resolved against SITE.site_url. */
  image: string;
  /** Canonical URL of the page the Product appears on. */
  url: string;
  ratingValue: string;
  reviewCount: string;
  reviews?: { author: string; quote: string; rating: number; date: string }[];
  offers?: { name: string; price: string }[];
}) {
  const product: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: opts.name,
    description: opts.description,
    image: new URL(opts.image, SITE.site_url).href,
    brand: { "@type": "Brand", name: SITE.name },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: opts.ratingValue,
      reviewCount: opts.reviewCount,
    },
  };
  if (opts.offers?.length) {
    product.offers = opts.offers.map((o) => ({
      "@type": "Offer",
      name: o.name,
      price: o.price === "FREE" ? "0" : o.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: opts.url,
    }));
  }
  if (opts.reviews?.length) {
    product.review = opts.reviews.map((r) => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(r.rating),
        bestRating: "5",
      },
      author: { "@type": "Person", name: r.author },
      reviewBody: r.quote,
      datePublished: r.date,
    }));
  }
  return product;
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
