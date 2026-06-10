/** Data for the /glossary/<slug>/ definitional pages.
 *  One template (components/pages/GlossaryPage.astro) renders every entry.
 *
 *  Intent: "what is X" question / AI-overview intent for quiz and
 *  personalization mechanics. Each page opens with a 1-2 sentence answer
 *  (the featured-snippet hook, also used as the DefinedTerm.description).
 *
 *  Scope fence (deliberate, see PRD-Octane-AI-SEO-Reverse-Engineering W7):
 *    - The *data* terms (zero-party data, first-party data, ecommerce sales
 *      funnel, "ecommerce quiz") are owned by PRD-SEO-Visibility. Not here.
 *      We cross-link to /zero-party-data/ and /first-party-data/ with
 *      non-head-term anchors instead of targeting those queries.
 *    - Terms that already have a dedicated page (guided selling ->
 *      /guided-selling-quiz/, product finder -> /product-finder-quiz/, gift
 *      finder -> /solutions/gift-finder/) are NOT duplicated as entries here.
 *      One query -> one URL. We cross-link to them instead.
 *
 *  Copy style: answer-first, no em dashes (use commas, colons, or periods),
 *  direct and specific, sentence case. Facts are grounded in
 *  product-compendium.md (root); no invented conversion-lift percentages.
 */

import type { Lang } from "./i18n";
import { GLOSSARY_ES, GLOSSARY_RELATED_GUIDES_ES } from "./content/glossary.es";
import { GLOSSARY_FR, GLOSSARY_RELATED_GUIDES_FR } from "./content/glossary.fr";
import { GLOSSARY_DE, GLOSSARY_RELATED_GUIDES_DE } from "./content/glossary.de";
import { GLOSSARY_PT, GLOSSARY_RELATED_GUIDES_PT } from "./content/glossary.pt";
import { GLOSSARY_IT, GLOSSARY_RELATED_GUIDES_IT } from "./content/glossary.it";
import { GLOSSARY_NL, GLOSSARY_RELATED_GUIDES_NL } from "./content/glossary.nl";
import { GLOSSARY_SV, GLOSSARY_RELATED_GUIDES_SV } from "./content/glossary.sv";
import { GLOSSARY_FI, GLOSSARY_RELATED_GUIDES_FI } from "./content/glossary.fi";
import { GLOSSARY_PL, GLOSSARY_RELATED_GUIDES_PL } from "./content/glossary.pl";
import { GLOSSARY_CS, GLOSSARY_RELATED_GUIDES_CS } from "./content/glossary.cs";
import { GLOSSARY_AR, GLOSSARY_RELATED_GUIDES_AR } from "./content/glossary.ar";
import { GLOSSARY_HE, GLOSSARY_RELATED_GUIDES_HE } from "./content/glossary.he";

export interface GlossaryFaq {
  question: string;
  answer: string;
}

export interface GlossarySection {
  heading: string;
  body: string[];
}

export interface GlossaryLink {
  label: string;
  href: string;
  /** Off-site link (opens in a new tab, gets rel=external). */
  external?: boolean;
  /** Optional one-line description, shown when rendered as a card. */
  blurb?: string;
}

export interface GlossaryTerm {
  slug: string;
  /** Display name of the term, e.g. "Conversational commerce". */
  term: string;
  /** Category chip label. */
  chip: string;
  /** SEO <title> (used raw by Base.astro, keep under 60 chars). */
  title: string;
  /** Meta description (keep under 155 chars). */
  description: string;
  /** H1. */
  h1: string;
  /** 1-2 sentence definition. Featured-snippet hook + DefinedTerm.description. */
  shortAnswer: string;
  /** Optional supporting paragraphs directly under the definition. */
  intro: string[];
  /** Main body: H2 + paragraphs. */
  sections: GlossarySection[];
  /** How RevenueHunt relates to the term (ties concept to product). */
  withRevenueHunt: string[];
  /** FAQ - rendered visibly AND as FAQPage JSON-LD. */
  faqs: GlossaryFaq[];
  /** Cross-links: solutions, platform pages, sibling terms, existing guides. */
  related: GlossaryLink[];
  /** Date the copy/facts were last checked. */
  verifiedAsOf: string;
}

const VERIFIED = "2026-06-07";

export const GLOSSARY: Record<string, GlossaryTerm> = {
  "conversational-commerce": {
    slug: "conversational-commerce",
    term: "Conversational commerce",
    chip: "Concept",
    title: "What is conversational commerce?",
    description:
      "Conversational commerce sells through a two-way dialogue instead of a static grid. Here is what it covers, why it works, and how a quiz delivers it.",
    h1: "What is conversational commerce?",
    shortAnswer:
      "Conversational commerce is selling through an interactive, two-way conversation instead of a static product grid. Shoppers answer questions, the store responds with tailored recommendations, the way a good salesperson works in a physical shop.",
    intro: [
      "In a physical store, a good assistant asks what you need, listens, and points you to the right product. Online, most stores skip that step and drop shoppers onto a grid of every product they sell. Conversational commerce puts the dialogue back in.",
    ],
    sections: [
      {
        heading: "What counts as conversational commerce",
        body: [
          "The category is broad. It includes chatbots, messaging apps, live chat, voice assistants, and product recommendation quizzes. What they share is a back-and-forth: the shopper gives input, the store responds with something more specific than a generic catalog page.",
          "The forms differ in how much you control them. A free-text chatbot can go anywhere a shopper types, which is powerful and unpredictable. A quiz is structured conversational commerce: every question and every path is one you designed, so the conversation stays on-brand and always ends in a real product.",
        ],
      },
      {
        heading: "Why it converts better than a grid",
        body: [
          "A category page asks the shopper to do the work: read every option, compare specs, and guess which one fits. That is choice paralysis, and it is where a lot of carts are lost before they start.",
          "A conversation does the work for them. It narrows a large catalog to a short, justified recommendation, and it explains why. Shoppers who get a clear answer add to cart instead of bouncing to compare elsewhere.",
          "It also captures preferences. Every answer a shopper gives is information you can use to segment email, personalize follow-up, and merchandise better later.",
        ],
      },
      {
        heading: "Conversational commerce vs a chatbot",
        body: [
          "People often use the two words interchangeably, but a chatbot is one tool inside the category, not the whole thing. A large-language-model chatbot can answer open questions, but it can also misread intent or recommend something you do not stock.",
          "A product recommendation quiz trades open-endedness for reliability. It cannot wander off topic, it always recommends from your live catalog, and it works the same for every shopper. For most stores, that predictability is worth more than free-form chat.",
        ],
      },
    ],
    withRevenueHunt: [
      "A RevenueHunt quiz is the most reliable form of conversational commerce a store can run. You design every question and every path, the results page always recommends real products and variants from your catalog, and each answer is captured as zero-party data you can sync to Klaviyo and other tools.",
      "It runs on Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace, and as a standalone hosted quiz, and it is free to start with 100 responses a month.",
    ],
    faqs: [
      {
        question: "Is a product quiz considered conversational commerce?",
        answer:
          "Yes. A quiz is a structured form of conversational commerce: the shopper answers questions and the store responds with tailored recommendations, the same dialogue model as a chatbot but with every path designed in advance.",
      },
      {
        question: "What is the difference between conversational commerce and a chatbot?",
        answer:
          "A chatbot is one tool within conversational commerce. Conversational commerce is the broader idea of selling through a two-way conversation, which also includes quizzes, live chat, messaging, and voice.",
      },
      {
        question: "Does conversational commerce work for small stores?",
        answer:
          "Yes. A product recommendation quiz is the lowest-lift way to start. It needs no traffic history to work, runs on a free plan, and can be live the same day.",
      },
    ],
    related: [
      { label: "Product recommendation engine", href: "/glossary/product-recommendation-engine/" },
      { label: "Shoppable quiz", href: "/glossary/shoppable-quiz/" },
      { label: "Guided selling quiz", href: "/guided-selling-quiz/" },
      { label: "How it works", href: "/how-it-works/" },
      { label: "Quiz templates", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "product-recommendation-engine": {
    slug: "product-recommendation-engine",
    term: "Product recommendation engine",
    chip: "Concept",
    title: "What is a product recommendation engine?",
    description:
      "A product recommendation engine decides which products to show each shopper. The types, the cold-start problem, and how a quiz-based engine works.",
    h1: "What is a product recommendation engine?",
    shortAnswer:
      "A product recommendation engine is the software that decides which products to show a given shopper. It takes inputs (browsing behavior, purchase history, or stated preferences) and ranks your catalog to surface the best matches.",
    intro: [
      "Every store that shows a shopper something other than the full catalog is running a recommendation engine of some kind, even if it is just a manual best-sellers rail. The interesting question is what the engine uses to decide.",
    ],
    sections: [
      {
        heading: "The main types",
        body: [
          "Behavioral engines use what shoppers do: pages viewed, items clicked, things bought. They power the classic recommended for you and customers also bought rails. They rely on collaborative filtering, which needs a lot of traffic and history to work well.",
          "Rules or attribute-based engines use product data and merchandiser-set logic: show accessories with this category, surface in-stock items first. They are predictable but static.",
          "Preference or quiz-based engines use what the shopper tells you directly. The shopper answers a few questions and the engine ranks the catalog against those answers. This is the most direct signal of intent, because it is volunteered rather than inferred.",
        ],
      },
      {
        heading: "The cold-start problem",
        body: [
          "Behavioral engines have a well-known weakness: they break for new visitors and new products. A first-time shopper has no history, so the engine has nothing to go on and falls back to generic best-sellers. A newly added product has no clicks yet, so it rarely gets recommended.",
          "A preference-based engine has no cold start. A brand-new visitor who answers three questions gives the engine everything it needs on the very first visit, with no tracking and no waiting for data to accumulate.",
        ],
      },
      {
        heading: "How a quiz engine ranks products",
        body: [
          "Each answer carries weight. A must-have answer can upvote the products that match and downvote the ones that do not, while a hard constraint like an allergy or an incompatible spec can exclude products entirely, no matter how well they scored otherwise.",
          "The result is a ranked, justified shortlist rather than a single guess. Good engines also reserve a slot for each role in a set, so the output can be a complete routine, stack, or bundle instead of one product.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt is a preference-based product recommendation engine driven by a quiz. Answers upvote, downvote, or exclude products from your live catalog, recommendation slots reserve a place for each role in a set, and it works for a first-time visitor with zero history.",
      "Because the inputs are volunteered, the same answers double as zero-party data you own and can use for segmentation long after the shopper leaves.",
    ],
    faqs: [
      {
        question: "What is the difference between a behavioral and a quiz-based recommendation engine?",
        answer:
          "A behavioral engine infers intent from clicks and purchase history, which needs traffic and breaks for new visitors. A quiz-based engine uses preferences the shopper states directly, so it works on the first visit with no history.",
      },
      {
        question: "Do I need a lot of traffic for a recommendation engine to work?",
        answer:
          "Not for a quiz-based engine. Because the shopper tells you their preferences, it works from the first visit. Behavioral engines, by contrast, need significant traffic and purchase history before their recommendations are reliable.",
      },
      {
        question: "Can a recommendation engine suggest more than one product?",
        answer:
          "Yes. With recommendation slots, the engine reserves a place for each role in a set and fills each with the best match, returning a complete routine, stack, or bundle rather than a single item.",
      },
    ],
    related: [
      { label: "Personalized product recommendations", href: "/glossary/personalized-product-recommendations/" },
      { label: "Conversational commerce", href: "/glossary/conversational-commerce/" },
      { label: "Product finder quiz", href: "/product-finder-quiz/" },
      { label: "How it works", href: "/how-it-works/" },
      { label: "Quiz for Shopify", href: "/product-recommendation-quiz-shopify/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "shoppable-quiz": {
    slug: "shoppable-quiz",
    term: "Shoppable quiz",
    chip: "Quiz type",
    title: "What is a shoppable quiz?",
    description:
      "A shoppable quiz ends in a results page where shoppers add recommended products to cart. Here is what makes a quiz shoppable and where stores use them.",
    h1: "What is a shoppable quiz?",
    shortAnswer:
      "A shoppable quiz is an interactive quiz that ends in a personalized results page where shoppers can add the recommended products straight to cart. The quiz is part of the storefront, not a survey that lives off to the side.",
    intro: [
      "Plenty of brands run quizzes. The difference between one that drives revenue and one that just collects answers is whether a shopper can buy at the end without leaving.",
    ],
    sections: [
      {
        heading: "What makes a quiz shoppable",
        body: [
          "Three things. First, it recommends real products and variants from your live catalog, not placeholder text. Second, the results page has add-to-cart, so a shopper can buy the recommendation in one step. Third, it can carry the offer through: a discount tied to the answers, a bundle added as a set, an upsell on the results page.",
          "Without those, you have a personality quiz or a survey. It might be fun, and it might collect emails, but it does not close the sale it just opened.",
        ],
      },
      {
        heading: "Shoppable quiz vs a survey or personality quiz",
        body: [
          "A survey collects answers and ends. A personality quiz entertains and ends. A shoppable quiz uses the answers to recommend products and then lets the shopper act on the recommendation immediately, while their intent is highest.",
          "That last step is the whole point. The moment after a shopper gets a confident answer is the moment they are most likely to buy. A shoppable quiz captures that moment instead of sending them back to the catalog to start over.",
        ],
      },
      {
        heading: "Where shoppable quizzes are used",
        body: [
          "Anywhere choice is hard: skincare routines, supplement stacks, foundation shades, fit and size, gift sets, coffee blends. The harder it is to pick from a grid, the more a shoppable quiz earns its place.",
          "They run as a popup, an embedded block on a page, or a full-page landing experience, and the same quiz can feed paid traffic, email, and onsite discovery at once.",
        ],
      },
    ],
    withRevenueHunt: [
      "Every RevenueHunt quiz is shoppable by default. The results page pulls real products and variants from your catalog, supports add-to-cart for a single item or a whole set, and can show a discount code or content block based on the shopper's answers.",
      "You can build one from a template or describe your store to the AI Quiz Copilot and have a full quiz scaffolded in about 60 seconds, then publish it as a popup, embed, or landing page.",
    ],
    faqs: [
      {
        question: "What is the difference between a shoppable quiz and a personality quiz?",
        answer:
          "A personality quiz entertains and ends. A shoppable quiz recommends real products from your catalog and lets shoppers add them to cart on the results page, so it closes the sale rather than just collecting answers.",
      },
      {
        question: "Can shoppers add products to cart from the quiz?",
        answer:
          "Yes. That is what makes it shoppable. The results page shows the matched products and variants with direct add-to-cart, for a single item or a complete set.",
      },
      {
        question: "Can a shoppable quiz show a discount?",
        answer:
          "Yes. The results page supports discount-code and content blocks you can tie to specific answers, so the right shoppers see the right offer at the point of decision.",
      },
    ],
    related: [
      { label: "Quiz funnel", href: "/glossary/quiz-funnel/" },
      { label: "Conversational commerce", href: "/glossary/conversational-commerce/" },
      { label: "Bundle builder quiz", href: "/solutions/bundle-builder/" },
      { label: "Quiz templates", href: "/templates/" },
      { label: "Quiz ROI calculator", href: "/quiz-roi-calculator/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "quiz-funnel": {
    slug: "quiz-funnel",
    term: "Quiz funnel",
    chip: "Marketing",
    title: "What is a quiz funnel?",
    description:
      "A quiz funnel uses a quiz as the entry point to turn traffic into qualified, opted-in leads. Here are the stages and why it beats a plain opt-in.",
    h1: "What is a quiz funnel?",
    shortAnswer:
      "A quiz funnel is a marketing funnel that uses a quiz as the entry point. A shopper takes a quiz, gets a recommendation, gives their email, and enters a segmented follow-up sequence. It turns anonymous traffic into a qualified lead with a known preference.",
    intro: [
      "Most ecommerce funnels start with a discount popup and a single email field. A quiz funnel replaces that with something the shopper actually wants: a personalized answer.",
    ],
    sections: [
      {
        heading: "The stages of a quiz funnel",
        body: [
          "Traffic lands on the quiz, from an ad, an email, or a link on your site. The shopper answers a few questions. They reach a results page with a personalized recommendation. To see or save the result, they give their email. That email enters a follow-up sequence segmented by what they told you.",
          "The difference from a normal funnel is what you know at the end. Instead of an anonymous subscriber, you have a contact tagged with their goals, preferences, and the products they were matched to.",
        ],
      },
      {
        heading: "Why it outperforms a generic opt-in",
        body: [
          "A plain newsletter signup offers nothing specific, so it converts a small slice of traffic and gives you no information beyond an email address. A quiz funnel offers a tailored recommendation as the reason to subscribe, which is a far stronger trade.",
          "It also makes every later email better. A subscriber you know is shopping for dry, sensitive skin gets different messaging than one shopping for a gift. That segmentation is built during the quiz, not bolted on afterward.",
        ],
      },
      {
        heading: "Quiz funnels and paid traffic",
        body: [
          "Quiz funnels are popular for paid acquisition because they qualify and capture in one step. Cold traffic that would bounce off a product page will often complete a quiz, and the email capture means you keep the lead even if they do not buy on the first visit.",
          "A quiz funnel is one specific shape of funnel. For the broader picture of how ecommerce funnels are built, see the funnel examples guide.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt is built to run the whole quiz funnel. It captures email at the point of highest intent, syncs answers and customer tags to Klaviyo, Mailchimp, Omnisend, HubSpot, and more, and shows question-by-question drop-off so you can fix the leaks.",
      "The recommendation on the results page is the lead magnet, so the thing that earns the email is also the thing that drives the sale.",
    ],
    faqs: [
      {
        question: "How is a quiz funnel different from a regular sales funnel?",
        answer:
          "A quiz funnel uses a quiz as the entry point, so it qualifies and segments leads as it captures them. A regular funnel often starts with a generic opt-in that captures an email but no preference data.",
      },
      {
        question: "Does a quiz funnel work for paid ads?",
        answer:
          "Yes. Quiz funnels are common for paid acquisition because they qualify cold traffic and capture the email in one step, so you keep the lead even when the shopper does not buy on the first visit.",
      },
      {
        question: "What do I do with the leads a quiz funnel captures?",
        answer:
          "Sync them to your email tool with the quiz answers as tags, then send follow-up segmented by goal or preference. RevenueHunt syncs responses and customer tags to Klaviyo, Mailchimp, Omnisend, HubSpot, and more.",
      },
    ],
    related: [
      { label: "Lead generation quiz", href: "/glossary/lead-generation-quiz/" },
      { label: "Shoppable quiz", href: "/glossary/shoppable-quiz/" },
      { label: "Ecommerce funnel examples", href: "/ecommerce-sales-funnel-examples/" },
      { label: "Quiz ROI calculator", href: "/quiz-roi-calculator/" },
      { label: "Integrations", href: "/integrations/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "personalized-product-recommendations": {
    slug: "personalized-product-recommendations",
    term: "Personalized product recommendations",
    chip: "Concept",
    title: "What are personalized product recommendations?",
    description:
      "Personalized product recommendations tailor suggestions to each shopper. Here is how stores do it, the cold-start problem, and the cookieless way.",
    h1: "What are personalized product recommendations?",
    shortAnswer:
      "Personalized product recommendations are suggestions tailored to an individual shopper rather than the same best-sellers shown to everyone. They can be based on browsing behavior, past purchases, or, most directly, on what the shopper tells you.",
    intro: [
      "Showing every shopper the same grid treats a first-time gift buyer and a loyal repeat customer identically. Personalized recommendations adapt to who is actually shopping.",
    ],
    sections: [
      {
        heading: "How stores personalize recommendations",
        body: [
          "There are two broad approaches. Behavioral personalization watches what a shopper does, clicks, views, past orders, and infers what to show next. Stated-preference personalization asks the shopper directly and recommends based on their answers.",
          "Behavioral is invisible to the shopper and scales automatically, but it is an inference and it can be wrong. Stated-preference is explicit: the shopper tells you they want a fragrance-free moisturizer for sensitive skin, so there is no guessing.",
        ],
      },
      {
        heading: "The cold-start problem",
        body: [
          "Behavioral personalization struggles with new shoppers. With no history to learn from, it defaults to generic best-sellers for exactly the visitors a first impression matters most for.",
          "Asking the shopper solves this instantly. A quiz gathers enough to personalize on the first visit, before any browsing history exists, which is why it pairs so well with paid and social traffic that arrives cold.",
        ],
      },
      {
        heading: "Personalizing without third-party cookies",
        body: [
          "Behavioral targeting has leaned on third-party cookies and cross-site tracking, both of which are being restricted by browsers and regulation. Recommendations built on data the shopper volunteers do not depend on any of that.",
          "The data a quiz collects is zero-party data: preferences and intentions the shopper shares on purpose. That is distinct from first-party data, which is the behavior you observe on your own site, like pages viewed and past orders. Zero-party data is a type of first-party data, but it is stated rather than inferred, so there is nothing to guess at.",
          "Both are durable and consented, unlike third-party data. For the full picture, see the guides on zero-party data and first-party data.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt personalizes recommendations from preferences the shopper states in a quiz, so it works on the first visit and does not rely on third-party tracking. Answers map to real products and variants, and hard constraints exclude anything that does not fit.",
      "The same answers become zero-party data, so the personalization continues into email: every campaign after the quiz can speak to what each shopper actually wants.",
    ],
    faqs: [
      {
        question: "What data powers personalized product recommendations?",
        answer:
          "Either behavioral data (clicks, views, purchase history) or stated preferences the shopper gives directly. Stated preferences are the most accurate because they are volunteered rather than inferred, and they work on the first visit.",
      },
      {
        question: "Can I personalize recommendations for first-time visitors?",
        answer:
          "Yes, if you ask them. A quiz gathers enough to personalize on the first visit, which behavioral systems cannot do because new visitors have no history to learn from.",
      },
      {
        question: "Do personalized recommendations need third-party cookies?",
        answer:
          "No. Recommendations built on data a shopper volunteers in a quiz do not depend on third-party cookies or cross-site tracking, both of which browsers and regulators are restricting.",
      },
    ],
    related: [
      { label: "Product recommendation engine", href: "/glossary/product-recommendation-engine/" },
      { label: "Ecommerce personalization", href: "/glossary/ecommerce-personalization/" },
      { label: "Zero-party data", href: "/zero-party-data/" },
      { label: "First-party data", href: "/first-party-data/" },
      { label: "How it works", href: "/how-it-works/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "ecommerce-personalization": {
    slug: "ecommerce-personalization",
    term: "Ecommerce personalization",
    chip: "Concept",
    title: "What is ecommerce personalization?",
    description:
      "Ecommerce personalization adapts the store to each shopper. Here is where it happens, the shift to zero-party data, and the lowest-lift place to start.",
    h1: "What is ecommerce personalization?",
    shortAnswer:
      "Ecommerce personalization is adapting the shopping experience, the products, content, and offers a shopper sees, to the individual rather than showing everyone the same store. Done well, it lifts conversion and average order value.",
    intro: [
      "Personalization covers a lot of ground, from a recommended-for-you rail to a fully tailored homepage. The common thread is treating different shoppers differently based on what you know about them.",
    ],
    sections: [
      {
        heading: "Where personalization happens",
        body: [
          "Onsite, it shows up as recommended products, tailored landing pages, and dynamic content. In recommendations, it ranks the catalog for each shopper. In email and SMS, it segments messaging by behavior or preference. In ads, it tailors creative and audiences.",
          "Most stores do not need all of it at once. The highest-return places to start are product recommendations and email segmentation, because both directly affect what a shopper buys and whether they come back.",
        ],
      },
      {
        heading: "The shift from third-party to zero-party data",
        body: [
          "Classic personalization relied heavily on third-party data and cross-site tracking. Browser changes and privacy regulation have made that approach fragile and, in many cases, non-compliant.",
          "The durable replacement is your own data, and it comes in two forms. First-party data is what you observe from a shopper's interactions with your store, like pages viewed and past orders. Zero-party data is what they volunteer on purpose, like goals, preferences, and problems. Zero-party data is the stated subset of first-party data, and it is the most accurate signal of intent because the shopper told you directly.",
          "Both are consented and do not disappear when a browser blocks a cookie. A quiz is the most direct way to collect zero-party data at scale.",
        ],
      },
      {
        heading: "The lowest-lift place to start",
        body: [
          "Enterprise personalization suites can tailor every pixel, with a price tag and an implementation timeline to match. Most stores do not need that to see results.",
          "A product recommendation quiz is the simplest entry point. It personalizes the single most important moment, choosing a product, captures the preference data that powers personalized email afterward, and can be live the same day on a free plan.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt is a focused, self-serve way to start personalizing: a quiz that tailors recommendations on the first visit and feeds preference data into your email tool for ongoing segmentation. No enterprise contract, no data-science team.",
      "It runs on every major platform and syncs to Klaviyo, Mailchimp, Omnisend, HubSpot, and more, so the personalization carries from the storefront into the inbox.",
    ],
    faqs: [
      {
        question: "What is the easiest way to start with ecommerce personalization?",
        answer:
          "A product recommendation quiz. It personalizes the highest-impact moment, choosing a product, works on the first visit, captures preference data for personalized email, and can be live the same day on a free plan.",
      },
      {
        question: "Does ecommerce personalization require third-party cookies?",
        answer:
          "Not anymore, and increasingly it cannot rely on them. The durable approach uses data shoppers volunteer directly, which is more accurate, consented, and unaffected by browser and privacy restrictions.",
      },
      {
        question: "Do I need an enterprise platform to personalize my store?",
        answer:
          "No. Enterprise suites tailor everything at a high cost, but most stores see strong returns from focused personalization: recommendations and email segmentation, which a quiz delivers on a self-serve plan.",
      },
    ],
    related: [
      { label: "Personalized product recommendations", href: "/glossary/personalized-product-recommendations/" },
      { label: "Product discovery", href: "/glossary/product-discovery/" },
      { label: "Zero-party data", href: "/zero-party-data/" },
      { label: "First-party data", href: "/first-party-data/" },
      { label: "Compare RevenueHunt vs Nosto", href: "/compare/nosto/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "product-discovery": {
    slug: "product-discovery",
    term: "Product discovery",
    chip: "Concept",
    title: "What is product discovery in ecommerce?",
    description:
      "Product discovery is how shoppers find the right product in your catalog. The methods, why big catalogs make it harder, and how guided selling helps.",
    h1: "What is product discovery in ecommerce?",
    shortAnswer:
      "Product discovery is how shoppers find the right product in your catalog. Good discovery, through search, filters, and guided quizzes, moves a shopper from I have a problem to this is the product with as little friction as possible.",
    intro: [
      "A shopper rarely arrives knowing your exact SKU. They arrive with a need. Product discovery is everything between that need and the right product page.",
    ],
    sections: [
      {
        heading: "The main discovery methods",
        body: [
          "Search lets shoppers who know what they want type it in. Navigation and filters let them narrow by category and attribute. Recommendations surface relevant products as they browse. Guided selling, usually a quiz, asks about their need and points them to the answer.",
          "Each suits a different shopper. Search works when someone knows the product name. Filters work when they know the attributes. A quiz works when they know the problem but not the product, which is the hardest and most common case.",
        ],
      },
      {
        heading: "Why bigger catalogs make discovery harder",
        body: [
          "A store with ten products barely needs discovery tools. A store with hundreds or thousands does. The more you sell, the more likely a shopper is to feel overwhelmed and leave without finding the thing that was right for them.",
          "This is the paradox of choice in practice: more options can lower conversion, not raise it, unless you give shoppers a way to cut through them. Guided discovery turns a large catalog from a liability into a strength.",
        ],
      },
      {
        heading: "Discovery is the conversion unlock",
        body: [
          "A shopper who cannot find the right product does not buy a different one, they leave. Improving discovery is often the highest-leverage change a store with a deep catalog can make, because it fixes the step where intent quietly dies.",
          "A quiz is the most direct discovery tool for need-based shopping, because it asks the question a salesperson would and returns the product they would point to.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt handles need-based product discovery: the shopper describes their goal or problem, and the quiz ranks your live catalog to return the right match, with hard constraints excluding anything that does not fit.",
      "It scales with your catalog, works on the first visit, and runs on Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace, and standalone.",
    ],
    faqs: [
      {
        question: "What is the difference between product discovery and search?",
        answer:
          "Search is one discovery method, for shoppers who already know what they want. Product discovery is broader and includes filters, recommendations, and guided quizzes for shoppers who know their need but not the specific product.",
      },
      {
        question: "How does a quiz improve product discovery?",
        answer:
          "It handles the hardest case: a shopper who knows their problem but not the product. The quiz asks about the need and ranks the catalog to return the right match, the way a salesperson would guide them.",
      },
      {
        question: "Does product discovery matter more for large catalogs?",
        answer:
          "Yes. The more products you sell, the easier it is for shoppers to feel overwhelmed and leave. Guided discovery cuts through a large catalog and turns its size into an advantage instead of a barrier.",
      },
    ],
    related: [
      { label: "Guided selling quiz", href: "/guided-selling-quiz/" },
      { label: "Product finder quiz", href: "/product-finder-quiz/" },
      { label: "Ecommerce personalization", href: "/glossary/ecommerce-personalization/" },
      { label: "Compare RevenueHunt vs Zoovu", href: "/compare/zoovu/" },
      { label: "Quiz templates", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "lead-generation-quiz": {
    slug: "lead-generation-quiz",
    term: "Lead generation quiz",
    chip: "Quiz type",
    title: "What is a lead generation quiz?",
    description:
      "A lead generation quiz captures qualified, opted-in leads with a built-in reason to subscribe. Here is why it beats a signup form and what you capture.",
    h1: "What is a lead generation quiz?",
    shortAnswer:
      "A lead generation quiz captures qualified leads: a shopper answers a few questions, gives their email to see the result, and you get a contact tagged with their stated preferences. It is an opt-in with a built-in reason to subscribe.",
    intro: [
      "Email is still the highest-return channel in ecommerce, but a plain signup form converts a small fraction of visitors and tells you nothing about them. A lead generation quiz fixes both problems at once.",
    ],
    sections: [
      {
        heading: "Why a quiz beats a plain signup form",
        body: [
          "A newsletter box asks for an email and offers, at best, a generic discount. A lead generation quiz offers a personalized result, which is a reason a shopper actually wants to give their address. The trade feels fair, so more people take it.",
          "It also collects more than an email. By the time a shopper opts in, they have answered questions about their goals, preferences, and constraints, so every contact arrives already qualified and segmented.",
        ],
      },
      {
        heading: "What you capture, and how to use it",
        body: [
          "You capture the email plus the quiz answers as zero-party data. Those answers become tags in your email tool: goal, skin type, budget, recipient, whatever the quiz asked.",
          "Tags turn a single list into segments you can speak to specifically. A lead who said they shop for sensitive skin gets different email than one shopping for a gift, and the difference is built at capture, not guessed later.",
        ],
      },
      {
        heading: "The compliance advantage",
        body: [
          "Because the shopper volunteers the data in exchange for a result, it is zero-party data: the stated kind of first-party data, consented by definition. That holds up far better than inferred or purchased third-party data as privacy rules tighten and browsers restrict tracking.",
          "You own the data, it is accurate because it came straight from the shopper, and it does not depend on any third-party cookie to stay useful.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt turns any quiz into a lead generation quiz: capture email at the point of highest intent, then sync the contact and the answer-based tags to Klaviyo, Mailchimp, Omnisend, HubSpot, and more.",
      "Because the recommendation is the incentive, the same quiz that grows your list also drives the sale, and drop-off analytics show exactly where to tighten the flow.",
    ],
    faqs: [
      {
        question: "How is a lead generation quiz different from a signup form?",
        answer:
          "A signup form asks for an email and offers a generic incentive. A lead generation quiz offers a personalized result as the reason to subscribe and captures preference data alongside the email, so every lead is qualified and segmented.",
      },
      {
        question: "What information does a lead generation quiz capture?",
        answer:
          "The shopper's email plus their quiz answers as zero-party data. Those answers sync to your email tool as tags, so contacts arrive already segmented by goal, preference, or constraint.",
      },
      {
        question: "Is the data from a lead generation quiz compliant to use?",
        answer:
          "Yes. The shopper volunteers it in exchange for a result, so it is consented, first-party data. That holds up better than inferred or third-party data as privacy rules and browser restrictions tighten.",
      },
    ],
    related: [
      { label: "Quiz funnel", href: "/glossary/quiz-funnel/" },
      { label: "Shoppable quiz", href: "/glossary/shoppable-quiz/" },
      { label: "Zero-party data", href: "/zero-party-data/" },
      { label: "Integrations", href: "/integrations/" },
      { label: "Quiz templates", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "conversion-rate-optimization": {
    slug: "conversion-rate-optimization",
    term: "Conversion rate optimization (CRO)",
    chip: "Concept",
    title: "What is conversion rate optimization?",
    description:
      "Conversion rate optimization (CRO) raises the share of visitors who buy. How it is measured, where to focus, and the tactics that move the needle.",
    h1: "What is conversion rate optimization (CRO)?",
    shortAnswer:
      "Conversion rate optimization (CRO) is the practice of increasing the percentage of visitors who take a desired action, usually a purchase. You measure conversion rate as conversions divided by visitors, then improve it without buying more traffic.",
    intro: [
      "CRO is about getting more out of the traffic you already have. Doubling your conversion rate has the same effect on revenue as doubling your traffic, but it costs far less.",
    ],
    sections: [
      {
        heading: "How conversion rate is calculated",
        body: [
          "Conversion rate is conversions divided by total visitors, expressed as a percentage. If 1,000 visitors produce 20 purchases, that is a 2% conversion rate. Average ecommerce conversion rates sit in the low single digits, so small absolute gains are large relative ones: moving from 2% to 3% is a 50% lift in orders.",
          "The same math applies to any goal, not just purchases. Email signups, quiz completions, and add-to-carts are all conversions you can optimize.",
        ],
      },
      {
        heading: "Where CRO actually focuses",
        body: [
          "Good CRO finds the specific step where intent leaks away and fixes it. Common leaks: a product page that does not answer the shopper's real question, a checkout with too much friction, or a category page that drops an undecided shopper into a wall of options with no guidance.",
          "It is a loop, not a one-time fix: form a hypothesis, change one thing, measure against a baseline, keep what wins. The discipline is changing one variable at a time so you know what moved the number.",
        ],
      },
      {
        heading: "Tactics that move the number",
        body: [
          "The durable wins are clarity and relevance: faster pages, honest product information, fewer checkout steps, and helping undecided shoppers choose. Discount popups can lift conversion in the short term, but they train shoppers to wait for deals and erode margin.",
          "Helping shoppers choose is the most overlooked lever. A shopper who cannot decide does not convert, and a grid of options does not help them. A guided experience that narrows the catalog to a confident recommendation removes the indecision that quietly kills conversions.",
        ],
      },
    ],
    withRevenueHunt: [
      "A product recommendation quiz is a CRO tactic aimed at the indecision leak. Instead of leaving a shopper to compare a wall of products, it asks a few questions and returns a confident, personalized recommendation, so more shoppers reach a buying decision.",
      "It also captures email and preference data along the way, so the visitors who do not buy on the first visit are not lost. You can size the potential lift for your own numbers with the quiz ROI calculator.",
    ],
    faqs: [
      {
        question: "How do you calculate conversion rate?",
        answer:
          "Divide the number of conversions by the number of visitors and express it as a percentage. For example, 20 purchases from 1,000 visitors is a 2% conversion rate. The same formula works for any goal, like signups or quiz completions.",
      },
      {
        question: "What is a good ecommerce conversion rate?",
        answer:
          "Most ecommerce stores convert in the low single digits, often around 1% to 3%. Because the base is small, modest absolute gains are large relative ones: moving from 2% to 3% is a 50% increase in orders.",
      },
      {
        question: "How does a product quiz improve conversion rate?",
        answer:
          "It targets the indecision leak. A quiz narrows a large catalog to a confident, personalized recommendation, so undecided shoppers reach a buying decision instead of bouncing off a grid of options.",
      },
    ],
    related: [
      { label: "Average order value", href: "/glossary/average-order-value/" },
      { label: "Product discovery", href: "/glossary/product-discovery/" },
      { label: "Conversion optimization tips", href: "/ecommerce-conversion-optimization-tips/" },
      { label: "Quiz ROI calculator", href: "/quiz-roi-calculator/" },
      { label: "Quiz funnel", href: "/glossary/quiz-funnel/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "average-order-value": {
    slug: "average-order-value",
    term: "Average order value (AOV)",
    chip: "Metric",
    title: "What is average order value (AOV)?",
    description:
      "Average order value (AOV) is the average a customer spends per order. How to calculate it, why it matters, and how to raise it without more traffic.",
    h1: "What is average order value (AOV)?",
    shortAnswer:
      "Average order value (AOV) is the average amount a customer spends in a single order. You calculate it by dividing total revenue by the number of orders over the same period.",
    intro: [
      "AOV is one of the three numbers that set your revenue, alongside traffic and conversion rate. Raising it lifts revenue from the exact same number of orders, which is why it is one of the cheapest growth levers you have.",
    ],
    sections: [
      {
        heading: "How to calculate AOV",
        body: [
          "Divide total revenue by the number of orders over a set period. If a store makes $50,000 from 1,000 orders in a month, its AOV is $50. Track it over time and by traffic source, because a higher-AOV channel can be worth more even if it converts less.",
          "AOV interacts with everything else. A higher AOV means each conversion is worth more, which raises how much you can afford to spend acquiring a customer.",
        ],
      },
      {
        heading: "Why AOV matters",
        body: [
          "Traffic and conversion rate get most of the attention, but they are the expensive levers: more traffic costs ad spend, and conversion gains get harder as you optimize. AOV is the lever you can move on the orders you are already winning.",
          "It also funds acquisition. The more each order is worth, the more you can bid for paid traffic and still stay profitable, which compounds across the whole funnel.",
        ],
      },
      {
        heading: "How to increase AOV",
        body: [
          "The honest ways to raise AOV all add genuine value: recommend complementary products, bundle items that belong together, and help shoppers buy the complete solution rather than a single piece. Cross-selling and upselling are the tactics; a relevant recommendation is what makes them work instead of annoy.",
          "The key word is relevant. A generic add-on prompt gets ignored. A recommended set that actually fits what the shopper is buying gets purchased, because it reads as help, not a sales push.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt raises AOV by recommending a complete set instead of one product. Recommendation slots reserve a place for each role in a routine, stack, or bundle, so the results page returns the whole solution with add-to-cart for the set and an optional discount tied to the answers.",
      "Because each item is matched to the shopper's answers, the larger order feels like a recommendation, not an upsell. You can estimate the revenue impact for your store with the quiz ROI calculator.",
    ],
    faqs: [
      {
        question: "How is average order value calculated?",
        answer:
          "Divide total revenue by the number of orders over the same period. For example, $50,000 in revenue from 1,000 orders is an average order value of $50.",
      },
      {
        question: "Why is AOV important?",
        answer:
          "It lifts revenue from the orders you already win, without paying for more traffic, and a higher AOV lets you spend more to acquire each customer while staying profitable. It is one of the cheapest growth levers available.",
      },
      {
        question: "How can a product quiz increase AOV?",
        answer:
          "By recommending a complete set rather than a single product. Recommendation slots return a matched routine, stack, or bundle with add-to-cart for the whole set, so each order is larger while still feeling personalized.",
      },
    ],
    related: [
      { label: "Cross-selling and upselling", href: "/glossary/cross-selling-and-upselling/" },
      { label: "Conversion rate optimization", href: "/glossary/conversion-rate-optimization/" },
      { label: "Bundle builder quiz", href: "/solutions/bundle-builder/" },
      { label: "Routine builder quiz", href: "/solutions/routine-builder/" },
      { label: "Quiz ROI calculator", href: "/quiz-roi-calculator/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "cross-selling-and-upselling": {
    slug: "cross-selling-and-upselling",
    term: "Cross-selling and upselling",
    chip: "Tactic",
    title: "Cross-selling vs upselling explained",
    description:
      "Cross-selling adds related products; upselling trades up to a better one. Here is the difference, why both work, and how a quiz does it without the push.",
    h1: "What is cross-selling and upselling?",
    shortAnswer:
      "Cross-selling recommends related products that complement what a shopper is buying, like a moisturizer with a cleanser. Upselling recommends a better or larger version of what they already want, like a bigger size or a premium tier. Both raise order value.",
    intro: [
      "The two get lumped together because both increase what a shopper spends, but they work in different directions. Knowing which one fits a moment is the difference between helpful and pushy.",
    ],
    sections: [
      {
        heading: "Cross-selling vs upselling: the difference",
        body: [
          "Cross-selling goes sideways. It adds complementary items to the order: the classic would you like fries with that, or a screen protector with a phone. The goal is a more complete purchase.",
          "Upselling goes up. It moves the shopper to a higher-value version of what they are already considering: a larger size, a premium model, a longer subscription. The goal is a better fit at a higher price, not more items.",
        ],
      },
      {
        heading: "Why both work, when they are relevant",
        body: [
          "Both tactics raise average order value, and both can backfire. A relevant cross-sell or upsell reads as helpful advice; an irrelevant one reads as a store trying to pad the bill, and shoppers tune it out or resent it.",
          "Relevance is everything, and relevance requires knowing the shopper. A recommendation based on what someone is actually trying to achieve lands. A generic you may also like rail, shown to everyone, does not.",
        ],
      },
      {
        heading: "How a quiz cross-sells and upsells without the push",
        body: [
          "A quiz knows the shopper's goal before it recommends anything, so the cross-sell and the upsell are built into the recommendation rather than bolted on at checkout. It can return a complete set (cross-sell) and steer toward the right tier for the stated need (upsell) in one move.",
          "Because the recommendation answers the shopper's own questions, the larger order feels earned. The shopper sees a solution that fits, not a list of add-ons.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt builds cross-sells and upsells into the recommendation itself. Recommendation slots reserve a place for each complementary role so the results page returns a full set, and answer-based logic steers shoppers to the size, tier, or bundle that fits what they told you.",
      "The results page supports add-to-cart for the whole set plus a discount tied to the answers, so the order grows because the recommendation is right, not because a popup interrupted checkout.",
    ],
    faqs: [
      {
        question: "What is the difference between cross-selling and upselling?",
        answer:
          "Cross-selling adds complementary products to an order, like a moisturizer with a cleanser. Upselling trades up to a better or larger version of what the shopper already wants, like a premium tier or a bigger size. Both increase order value.",
      },
      {
        question: "Do cross-selling and upselling actually work?",
        answer:
          "Yes, when the recommendation is relevant. A suggestion that fits the shopper's goal reads as helpful and gets bought. A generic, one-size-fits-all prompt gets ignored or resented, so relevance is what separates the two outcomes.",
      },
      {
        question: "How does a quiz cross-sell and upsell?",
        answer:
          "It learns the shopper's goal first, then builds the cross-sell and upsell into the recommendation. Recommendation slots return a complete set, and answer-based logic steers toward the right tier, so the larger order feels like advice rather than a push.",
      },
    ],
    related: [
      { label: "Average order value", href: "/glossary/average-order-value/" },
      { label: "Bundle builder quiz", href: "/solutions/bundle-builder/" },
      { label: "Routine builder quiz", href: "/solutions/routine-builder/" },
      { label: "Shoppable quiz", href: "/glossary/shoppable-quiz/" },
      { label: "Personalized product recommendations", href: "/glossary/personalized-product-recommendations/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "customer-segmentation": {
    slug: "customer-segmentation",
    term: "Customer segmentation",
    chip: "Marketing",
    title: "What is customer segmentation?",
    description:
      "Customer segmentation groups buyers by shared traits so you can market to each group specifically. The types, why it works, and how a quiz feeds it.",
    h1: "What is customer segmentation?",
    shortAnswer:
      "Customer segmentation is the practice of grouping customers by shared traits, like goals, behavior, or demographics, so you can market to each group with relevant messaging instead of sending everyone the same thing.",
    intro: [
      "A single message to your whole list speaks to no one in particular. Segmentation lets you say the right thing to the right group, which is why segmented campaigns consistently outperform batch-and-blast.",
    ],
    sections: [
      {
        heading: "The main ways to segment",
        body: [
          "Demographic segmentation groups by attributes like age or location. Behavioral segmentation groups by what customers do: past purchases, browsing, engagement. Psychographic segmentation groups by attitudes and values. Needs-based segmentation groups by the problem a customer is trying to solve.",
          "For ecommerce, needs-based and behavioral segments tend to be the most actionable, because they map directly to what to recommend and what to say next.",
        ],
      },
      {
        heading: "Why segmentation works",
        body: [
          "Relevance drives response. A customer shopping for dry, sensitive skin should not get the same email as one shopping for a gift, and when they do not, open rates, clicks, and conversions all rise.",
          "Segmentation also compounds over time. Every campaign you send to a well-defined segment teaches you more about it, which sharpens the next one. The list becomes an asset, not just a broadcast channel.",
        ],
      },
      {
        heading: "The data problem behind segmentation",
        body: [
          "You can only segment by what you know, and most stores do not know much about an anonymous visitor. Behavioral data accumulates slowly and breaks for new shoppers, and third-party data is being restricted by browsers and regulation.",
          "The fix is to ask. When a shopper tells you their goal, preference, or constraint, you can segment on it immediately and accurately, with their consent. That volunteered information is zero-party data.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt turns quiz answers into segments automatically. Each answer becomes a customer tag, like goal:sleep or skin:sensitive, that syncs to Klaviyo, Mailchimp, Omnisend, HubSpot, and more, so contacts arrive pre-segmented by what they told you.",
      "Because the segments are built from data the shopper volunteered, they are accurate from the first visit and do not depend on tracking. Every campaign after the quiz can speak to the segment instead of the whole list.",
    ],
    faqs: [
      {
        question: "What are the main types of customer segmentation?",
        answer:
          "The common bases are demographic (age, location), behavioral (purchases, browsing, engagement), psychographic (attitudes, values), and needs-based (the problem a customer is solving). For ecommerce, needs-based and behavioral segments are usually the most actionable.",
      },
      {
        question: "Why is customer segmentation important?",
        answer:
          "It makes messaging relevant, which lifts open rates, clicks, and conversions compared with sending everyone the same thing. It also compounds: each campaign to a defined segment teaches you more about it and sharpens the next one.",
      },
      {
        question: "How does a quiz help with segmentation?",
        answer:
          "It asks shoppers directly, so each answer becomes a customer tag that syncs to your email tool. Contacts arrive pre-segmented by goal, preference, or constraint, accurate from the first visit and without relying on tracking.",
      },
    ],
    related: [
      { label: "Personalized product recommendations", href: "/glossary/personalized-product-recommendations/" },
      { label: "Lead generation quiz", href: "/glossary/lead-generation-quiz/" },
      { label: "Zero-party data", href: "/zero-party-data/" },
      { label: "Ecommerce personalization", href: "/glossary/ecommerce-personalization/" },
      { label: "Integrations", href: "/integrations/" },
    ],
    verifiedAsOf: VERIFIED,
  },
};

/** Display order for the glossary hub. */
export const GLOSSARY_ORDER = [
  "conversational-commerce",
  "product-discovery",
  "product-recommendation-engine",
  "personalized-product-recommendations",
  "ecommerce-personalization",
  "shoppable-quiz",
  "quiz-funnel",
  "lead-generation-quiz",
  "conversion-rate-optimization",
  "average-order-value",
  "cross-selling-and-upselling",
  "customer-segmentation",
] as const;

/** Guides and pages the glossary hub points to (existing dedicated pages we
 *  deliberately do NOT duplicate as glossary entries: one query -> one URL). */
export const GLOSSARY_RELATED_GUIDES: GlossaryLink[] = [
  {
    label: "Product finder quiz",
    href: "/product-finder-quiz/",
    blurb: "What a product finder quiz is, when to use one, and 12 live examples.",
  },
  {
    label: "Guided selling quiz",
    href: "/guided-selling-quiz/",
    blurb: "How guided selling works in ecommerce and how to build the quiz.",
  },
  {
    label: "Zero-party data",
    href: "/zero-party-data/",
    blurb: "What zero-party data is, why it beats behavioral tracking, and how a quiz captures it.",
  },
  {
    label: "Solutions by industry",
    href: "/solutions/",
    blurb: "Product recommendation quiz solutions for skincare, supplements, fashion, and more.",
  },
  {
    label: "Quiz ROI calculator",
    href: "/quiz-roi-calculator/",
    blurb: "Estimate the extra revenue a product recommendation quiz could add to your store.",
  },
];

/** English source + per-locale translations of the glossary. */
export const GLOSSARY_BY_LANG: Record<Lang, Record<string, GlossaryTerm>> = {
  en: GLOSSARY,
  es: GLOSSARY_ES,
  fr: GLOSSARY_FR,
  de: GLOSSARY_DE,
  pt: GLOSSARY_PT,
  it: GLOSSARY_IT,
  nl: GLOSSARY_NL,
  sv: GLOSSARY_SV,
  fi: GLOSSARY_FI,
  pl: GLOSSARY_PL,
  cs: GLOSSARY_CS,
  ar: GLOSSARY_AR,
  he: GLOSSARY_HE,
};

export const GLOSSARY_RELATED_GUIDES_BY_LANG: Record<Lang, GlossaryLink[]> = {
  en: GLOSSARY_RELATED_GUIDES,
  es: GLOSSARY_RELATED_GUIDES_ES,
  fr: GLOSSARY_RELATED_GUIDES_FR,
  de: GLOSSARY_RELATED_GUIDES_DE,
  pt: GLOSSARY_RELATED_GUIDES_PT,
  it: GLOSSARY_RELATED_GUIDES_IT,
  nl: GLOSSARY_RELATED_GUIDES_NL,
  sv: GLOSSARY_RELATED_GUIDES_SV,
  fi: GLOSSARY_RELATED_GUIDES_FI,
  pl: GLOSSARY_RELATED_GUIDES_PL,
  cs: GLOSSARY_RELATED_GUIDES_CS,
  ar: GLOSSARY_RELATED_GUIDES_AR,
  he: GLOSSARY_RELATED_GUIDES_HE,
};
