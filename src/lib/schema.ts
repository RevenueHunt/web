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

// aggregateRating is the sum across every store we're listed on (Shopify 423 @4.9,
// WordPress.org 100 @5.0, WooCommerce.com 25 @4.64, BigCommerce 6 @5.0) → 554
// ratings, review-weighted average 4.9. Refresh when the listings move.
export function softwareApplication(
  reviews?: { author: string; quote: string }[],
) {
  const app: Record<string, unknown> = {
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
      ratingCount: "554",
    },
  };
  if (reviews?.length) {
    app.review = reviews.map((r) => ({
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: r.author },
      reviewBody: r.quote,
    }));
  }
  return app;
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
  authorUrl?: string;
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
    author: {
      "@type": "Person",
      name: opts.author ?? "RevenueHunt",
      ...(opts.authorUrl ? { url: opts.authorUrl } : {}),
    },
    publisher: organization(),
    keywords: opts.tags?.join(", "),
  };
}

export function faqPage(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.question,
      acceptedAnswer: { "@type": "Answer", text: it.answer },
    })),
  };
}

export function definedTerm(opts: {
  /** The term itself, e.g. "Conversational commerce". */
  name: string;
  /** 1-2 sentence definition. */
  description: string;
  /** Canonical URL of the glossary entry. */
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: opts.name,
    description: opts.description,
    url: new URL(opts.url, SITE.site_url).href,
    inDefinedTermSet: new URL("/glossary/", SITE.site_url).href,
  };
}

export function definedTermSet(
  terms: { name: string; description: string; url: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "RevenueHunt quiz & personalization glossary",
    url: new URL("/glossary/", SITE.site_url).href,
    hasDefinedTerm: terms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.name,
      description: t.description,
      url: new URL(t.url, SITE.site_url).href,
    })),
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
