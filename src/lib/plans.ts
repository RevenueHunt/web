export interface PlanFeature {
  text: string;
  link?: { label: string; href: string };
  /** Plus icon instead of check (used for Premium's "+ Larger plans" line). */
  plus?: boolean;
}

export interface Plan {
  name: string;
  /** Big price. "FREE" for the free plan, otherwise the numeric amount. */
  price: string;
  /** Yearly billing price (per-month equivalent — 20% off monthly). */
  priceYearly?: string;
  /** Small text adjacent to the price (e.g. "USD/mo."). Omit on Free. */
  priceSuffix?: string;
  /** Asterisked sub-price line. */
  priceNote: string;
  /** Asterisked sub-price line when yearly billing is selected. */
  priceNoteYearly?: string;
  tagline: string;
  features: PlanFeature[];
}

export const PLANS: Plan[] = [
  {
    name: "Free Plan",
    price: "FREE",
    priceNote: "* Yes, really!",
    tagline: "Perfect for new brands.",
    features: [
      { text: "100 quiz responses/mo." },
      { text: "Email support" },
      { text: "Create unlimited quizzes" },
      { text: "Custom quiz design" },
      { text: "Conditional logic" },
      { text: "Advanced quiz analytics" },
      { text: "Shopify Markets" },
      { text: "Export quiz leads to CSV" },
      { text: "GDPR & CCPA compliant" },
    ],
  },
  {
    name: "Basic Plan",
    price: "39",
    priceYearly: "31",
    priceSuffix: "USD/mo.",
    priceNote: "* Billed monthly",
    priceNoteYearly: "* Billed yearly",
    tagline: "For growing mid-tier stores.",
    features: [
      { text: "500 quiz responses/mo." },
      { text: "Free features +" },
      { text: "Live chat support" },
      { text: "Custom HTML, CSS & JS" },
      { text: "GA4 & Meta Pixel" },
      { text: "Webhooks & Zapier" },
      { text: "Klaviyo, Omnisend &", link: { label: "more integrations", href: "/integrations/" } },
    ],
  },
  {
    name: "Pro Plan",
    price: "99",
    priceYearly: "79",
    priceSuffix: "USD/mo.",
    priceNote: "* Billed monthly",
    priceNoteYearly: "* Billed yearly",
    tagline: "For brands ready to scale.",
    features: [
      { text: "1,000 quiz responses/mo." },
      { text: "Basic features +" },
      { text: "Video call support" },
      { text: "Account manager" },
    ],
  },
  {
    name: "Premium Plan",
    price: "199",
    priceYearly: "159",
    priceSuffix: "USD/mo.",
    priceNote: "* Billed monthly",
    priceNoteYearly: "* Billed yearly",
    tagline: "Established, multi-market brands.",
    features: [
      { text: "2,500 quiz responses/mo." },
      { text: "Pro features +" },
      { text: "Quarterly strategy review" },
      { text: "Larger plans -", link: { label: "view", href: "/demo/" }, plus: true },
    ],
  },
];
