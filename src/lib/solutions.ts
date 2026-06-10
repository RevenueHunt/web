/** Data for the /solutions/<slug>/ programmatic landing pages.
 *  One template (components/pages/SolutionPage.astro) renders every entry.
 *
 *  Two kinds of pages, distinguished by `type`:
 *    - "vertical"  : an industry (skincare, supplements, coffee, ...)
 *    - "use-case"  : a quiz type (gift finder, size finder, ...)
 *
 *  Facts are sourced from product-compendium.md (root) and the live demo
 *  store at productrecommendationquiz.com. Keep claims factual: no invented
 *  per-vertical conversion percentages (compendium guardrail). The shared
 *  proof band and capability band in the template carry the aggregate numbers.
 *
 *  Copy style: no em dashes (use commas, colons, or periods), direct and
 *  specific, sentence case.
 *
 *  One query -> one URL: the quiz-type pages here do NOT duplicate the existing
 *  /product-finder-quiz/ or /guided-selling-quiz/ guides; they cross-link to
 *  them from `related` instead.
 */

import type { Lang } from "./i18n";
import { SOLUTIONS_ES } from "./content/solutions.es";
import { SOLUTIONS_FR } from "./content/solutions.fr";
import { SOLUTIONS_DE } from "./content/solutions.de";
import { SOLUTIONS_PT } from "./content/solutions.pt";
import { SOLUTIONS_IT } from "./content/solutions.it";
import { SOLUTIONS_NL } from "./content/solutions.nl";
import { SOLUTIONS_SV } from "./content/solutions.sv";
import { SOLUTIONS_FI } from "./content/solutions.fi";
import { SOLUTIONS_PL } from "./content/solutions.pl";
import { SOLUTIONS_CS } from "./content/solutions.cs";

export interface SolutionQuizType {
  title: string;
  body: string;
}

export interface SolutionFaq {
  question: string;
  answer: string;
}

export interface SolutionLink {
  label: string;
  href: string;
  /** Off-site link (opens in a new tab, gets rel=external). */
  external?: boolean;
  /** Optional one-line description, shown when rendered as a card. */
  blurb?: string;
}

export interface SolutionDemo {
  /** Button label, e.g. "Try the skincare quiz". */
  label: string;
  /** Full URL to a live quiz on the demo store (utm-tagged). */
  href: string;
  /** One sentence describing what the demo shows. */
  blurb: string;
}

export interface Solution {
  slug: string;
  type: "vertical" | "use-case";
  /** Display name, e.g. "Skincare" or "Gift finder". */
  name: string;
  /** Breadcrumb / category chip label. */
  chip: string;
  /** SEO <title> (used raw by Base.astro, keep under 60 chars). */
  title: string;
  /** Meta description (keep under 155 chars). */
  description: string;
  /** H1. */
  h1: string;
  /** Hero sub-headline (answer-first, 1-2 sentences). */
  heroSubtitle: string;
  /** 1-2 short paragraphs: answer-first framing. */
  intro: string[];
  /** "Popular {name} quiz types" cards. */
  quizTypes: SolutionQuizType[];
  /** 2-3 paragraphs of specific value for this vertical / use-case. */
  howItHelps: string[];
  /** Optional live-demo quiz on the demo store. */
  demo?: SolutionDemo;
  /** FAQ - rendered visibly AND as FAQPage JSON-LD. */
  faqs: SolutionFaq[];
  /** Cross-links: templates, platform pages, sibling solutions, existing guides. */
  related: SolutionLink[];
  /** Date the copy/facts were last checked. */
  verifiedAsOf: string;
}

const VERIFIED = "2026-06-07";

export const SOLUTIONS: Record<string, Solution> = {
  // ----------------------------------------------------------------- verticals
  skincare: {
    slug: "skincare",
    type: "vertical",
    name: "Skincare",
    chip: "Industry",
    title: "Skincare quiz for Shopify & WooCommerce",
    description:
      "Build a skincare quiz that reads skin type and concerns, then recommends the right routine. Free plan, AI builder, live the same day.",
    h1: "Skincare quizzes that turn browsers into a routine",
    heroSubtitle:
      "Most first-time skincare shoppers don't know which products are right for them. A quiz asks the right questions and returns a personalized routine they can add to cart.",
    intro: [
      "Skincare is the hardest category to shop cold. Shoppers arrive with a concern, not a product in mind, and a wall of cleansers, serums, and SPF doesn't help them choose. A skincare quiz replaces that wall with a short guided conversation: skin type, primary concern, sensitivities, and budget in, a personalized routine out.",
      "RevenueHunt is used by 20,000+ brands to do exactly this. It maps each answer to real products from your catalog, groups the result by routine step (cleanser, treatment, moisturizer, SPF), and captures the shopper's skin profile as zero-party data you can sync to Klaviyo.",
    ],
    quizTypes: [
      {
        title: "Skin type finder",
        body: "Five to seven questions on skin type, concerns, and goals return a matched routine. The classic skincare quiz, and the highest-converting starting point.",
      },
      {
        title: "Routine builder",
        body: "Use recommendation slots to reserve a place for each step, so every shopper gets a complete 3-step or 5-step routine instead of a single product.",
      },
      {
        title: "Concern-led quiz",
        body: "Lead with the problem (acne, aging, dryness, sensitivity) and branch with conditional logic so each shopper only sees questions relevant to them.",
      },
      {
        title: "Ingredient or sensitivity match",
        body: "Exclude products that clash with a stated allergy or sensitivity, so a shopper who flags fragrance-free never sees a fragranced product in their results.",
      },
    ],
    howItHelps: [
      "The recommendation engine ranks products by the answers that matter most. Weight a must-have concern higher than a nice-to-have, and exclude anything a shopper rules out, so the results page is genuinely tailored rather than a generic best-sellers rail.",
      "Every answer is zero-party data. A shopper who tells you their skin is dry and sensitive and they care about anti-aging is a segment you can market to for years. RevenueHunt syncs that profile and customer tags to Klaviyo, Mailchimp, Omnisend, and more.",
      "Build it in minutes, not weeks. Start from a skincare template, or describe your store to the AI Quiz Copilot and it scaffolds the questions, logic, and product mappings in about 60 seconds. Then publish as a popup, embed, or full-page landing.",
    ],
    demo: {
      label: "Try the skin type quiz",
      href: "https://productrecommendationquiz.com/pages/skin-type-quiz?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_skincare",
      blurb: "A live skincare quiz on our demo store. Answer a few questions and see the routine it returns.",
    },
    faqs: [
      {
        question: "How many questions should a skincare quiz have?",
        answer:
          "Five to seven visible questions works for most brands. Use conditional logic to skip questions that don't apply, so a shopper with no sensitivities never sees the allergy step.",
      },
      {
        question: "Can the quiz recommend a full routine, not just one product?",
        answer:
          "Yes. Recommendation slots reserve a place for each routine step (cleanser, treatment, moisturizer, SPF), so every shopper gets a complete routine with add-to-cart for the whole set.",
      },
      {
        question: "Does it work for sensitive skin and allergies?",
        answer:
          "Yes. Each answer can exclude products, so flagging an allergy or sensitivity removes any conflicting product from the results, even if it was a strong match otherwise.",
      },
      {
        question: "Can I capture emails and send the routine to Klaviyo?",
        answer:
          "Yes. The quiz captures email and the full skin profile as zero-party data, and syncs responses and customer tags to Klaviyo, Mailchimp, Omnisend, HubSpot, and more.",
      },
    ],
    related: [
      { label: "Skincare quiz templates", href: "/templates/" },
      { label: "Routine builder quiz", href: "/solutions/routine-builder/" },
      { label: "Shade finder quiz", href: "/solutions/shade-finder/" },
      { label: "For beauty brands", href: "/for-beauty-brands/" },
      { label: "Quiz for Shopify", href: "/product-recommendation-quiz-shopify/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  beauty: {
    slug: "beauty",
    type: "vertical",
    name: "Beauty & cosmetics",
    chip: "Industry",
    title: "Beauty & cosmetics quiz for your store",
    description:
      "A beauty quiz that matches shade, finds the right products, and builds a routine from your catalog. Free plan, AI builder, multi-platform.",
    h1: "Beauty quizzes that match shoppers to the right product",
    heroSubtitle:
      "Foundation shade, lip color, a full regimen: a beauty quiz answers the questions a product grid can't, and sends shoppers to a personalized results page.",
    intro: [
      "Beauty shoppers face two problems at once: too much choice and too much risk. Pick the wrong foundation shade and it gets returned. A beauty quiz removes the guesswork by asking about undertone, coverage, finish, and concern, then recommending the exact products that fit.",
      "RevenueHunt powers beauty quizzes for thousands of brands. It pulls real products and variants from your catalog, shows them on a results page with direct add-to-cart, and captures each shopper's beauty profile as zero-party data for segmented email follow-up.",
    ],
    quizTypes: [
      {
        title: "Shade matcher",
        body: "Undertone, depth, and finish questions map to the right foundation, concealer, or lip shade. Picture-choice answers make it fast on mobile.",
      },
      {
        title: "Full-regimen builder",
        body: "Recommend a complete set (prep, base, color, set) using recommendation slots, so shoppers buy the routine rather than a single item.",
      },
      {
        title: "Skin or hair concern quiz",
        body: "Branch by concern and skin or hair type so the results page speaks to each shopper's specific goal.",
      },
      {
        title: "Gift or starter set finder",
        body: "Help gift-buyers and first-timers who don't know the catalog by recommending a curated starter set or bundle.",
      },
    ],
    howItHelps: [
      "Shade and fit are exactly where returns happen. By asking undertone and coverage up front and excluding anything that doesn't match, the quiz sends shoppers to products they're far more likely to keep.",
      "Picture-choice questions let shoppers tap an image instead of describing themselves, which keeps completion rates high on mobile where most beauty traffic lands.",
      "The shopper's profile (undertone, skin type, favorite finish) syncs to your email tool as customer tags, so every campaign after the quiz can be personalized instead of generic.",
    ],
    demo: {
      label: "Try the foundation match quiz",
      href: "https://productrecommendationquiz.com/pages/foundation-match?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_beauty",
      blurb: "A live image-based shade-match quiz on our demo store, with exact-match results.",
    },
    faqs: [
      {
        question: "Can a beauty quiz match foundation shades?",
        answer:
          "Yes. Ask about undertone, depth, and finish, link each answer to the matching shades, and exclude the rest. The results page shows the exact shade match with add-to-cart.",
      },
      {
        question: "Does it support picture-choice questions?",
        answer:
          "Yes. Choices can be displayed as clickable images, which is ideal for shade, finish, and style questions and lifts mobile completion.",
      },
      {
        question: "Will it work on WooCommerce or BigCommerce, not just Shopify?",
        answer:
          "Yes. RevenueHunt runs natively on Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace, and as a standalone hosted quiz.",
      },
      {
        question: "Can I bundle products into one result?",
        answer:
          "Yes. Use recommendation slots to reserve a place for each product role and return a complete set or bundle, with add-to-cart for the whole routine.",
      },
    ],
    related: [
      { label: "Shade finder quiz", href: "/solutions/shade-finder/" },
      { label: "Skincare quiz", href: "/solutions/skincare/" },
      { label: "Gift finder quiz", href: "/solutions/gift-finder/" },
      { label: "For beauty brands", href: "/for-beauty-brands/" },
      { label: "Quiz templates", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  supplements: {
    slug: "supplements",
    type: "vertical",
    name: "Supplements",
    chip: "Industry",
    title: "Supplement quiz: recommend the right stack",
    description:
      "A supplement quiz that turns health goals into a recommended stack. Branch by diet and restrictions, sync goals to Klaviyo. Free to start.",
    h1: "Supplement quizzes that recommend the right stack",
    heroSubtitle:
      "Shoppers buy supplements for a goal, not a SKU. A quiz turns sleep, energy, immunity, or focus into a recommended stack from your catalog.",
    intro: [
      "Supplement shoppers think in goals: sleep better, more energy, better gut health. Your catalog is organized by product. A supplement quiz bridges the two by asking about goals, diet, and lifestyle, then recommending the stack that fits.",
      "RevenueHunt maps each goal to the right SKUs, handles dietary constraints with exclusions, and returns a multi-product stack on a results page with a first-order discount. The shopper's goals sync to Klaviyo as tags for ongoing, segmented email.",
    ],
    quizTypes: [
      {
        title: "Health-goal finder",
        body: "Shoppers pick their goals (sleep, energy, immunity, gut, focus) and each goal upvotes the matching products to build a recommended stack.",
      },
      {
        title: "Stack builder",
        body: "Reserve a slot for each role (foundation, targeted, performance) so every shopper leaves with a complete, coherent stack.",
      },
      {
        title: "Diet and restriction filter",
        body: "Exclude products that conflict with vegan, gluten-free, or other constraints, so results respect every shopper's diet automatically.",
      },
      {
        title: "Subscription onboarding",
        body: "Use the quiz at the top of a subscription funnel, capture email, and wire the results page to a subscribe-and-save offer.",
      },
    ],
    howItHelps: [
      "Conditional logic keeps the quiz short. If a shopper says they have no dietary restrictions, the quiz skips the restriction questions entirely, so nobody answers questions that don't apply to them.",
      "Exclusions handle hard constraints cleanly. A vegan shopper never sees a non-vegan product in their results, even if it was a strong match on goals alone.",
      "Goals are the most valuable thing a supplement brand can learn. Syncing goal:sleep or goal:gut tags to Klaviyo lets you run lifecycle email that actually matches what each customer is trying to achieve.",
    ],
    faqs: [
      {
        question: "Can a supplement quiz recommend a multi-product stack?",
        answer:
          "Yes. Each goal upvotes the matching products, and recommendation slots reserve a place for each role, so the results page returns a complete stack with add-to-cart for the set.",
      },
      {
        question: "How does it handle vegan or gluten-free diets?",
        answer:
          "Use exclusions. Linking a diet answer to an exclude list removes any conflicting product from the results, regardless of how well it scored on goals.",
      },
      {
        question: "Can I add a first-order discount on the results page?",
        answer:
          "Yes. The results page supports a discount-code block you can show to first-time buyers or tie to specific answer combinations.",
      },
      {
        question: "Does it work for a subscription brand?",
        answer:
          "Yes. Run the quiz at the top of the funnel, capture email to Klaviyo, and point the results page at a subscribe-and-save offer.",
      },
    ],
    related: [
      { label: "Bundle builder quiz", href: "/solutions/bundle-builder/" },
      { label: "Fitness & nutrition quiz", href: "/solutions/fitness/" },
      { label: "Guided selling quiz", href: "/guided-selling-quiz/" },
      { label: "Quiz templates", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  fashion: {
    slug: "fashion",
    type: "vertical",
    name: "Fashion & apparel",
    chip: "Industry",
    title: "Fashion & apparel style quiz for ecommerce",
    description:
      "A style quiz that finds the right fit, cut, and color from your catalog and cuts returns. Free plan, multi-platform, multi-language.",
    h1: "Style quizzes that find the right fit and cut",
    heroSubtitle:
      "Style is personal and fit is risky. A fashion quiz learns a shopper's taste and size, then recommends pieces they're likely to keep.",
    intro: [
      "Fashion has the highest return rate in ecommerce, and most of it comes from fit and style mismatches. A style quiz reduces both by asking about body type, fit preference, occasion, and taste, then recommending pieces that actually suit the shopper.",
      "RevenueHunt builds the quiz against your live catalog, including variants, so size and color flow through to the results page. For brands selling across markets, one base quiz can be translated and assigned per Shopify Market, with product titles and prices auto-localized.",
    ],
    quizTypes: [
      {
        title: "Style profile quiz",
        body: "Taste, occasion, and color questions surface the pieces that match a shopper's aesthetic instead of a generic new-arrivals grid.",
      },
      {
        title: "Fit and size finder",
        body: "Body type and fit-preference questions narrow to the right cut and size, which is where most apparel returns start.",
      },
      {
        title: "Capsule or outfit builder",
        body: "Use recommendation slots to assemble a coordinated outfit or capsule rather than a single item.",
      },
      {
        title: "Occasion finder",
        body: "Branch by occasion (work, wedding, travel) so each shopper sees a curated edit for the moment they're shopping for.",
      },
    ],
    howItHelps: [
      "Recommending by fit and taste, not just popularity, sends shoppers to pieces they're more likely to keep, which is the most direct lever a fashion brand has on returns.",
      "Variants flow through end to end. Link answers to specific sizes and colors, and the results page shows the right variant with add-to-cart, so shoppers don't bounce to a product page to re-choose.",
      "Selling across the EU or beyond? Build one base quiz, let the AI Copilot translate it, assign each version to its Shopify Market, and product data localizes automatically. No per-locale product translation work.",
    ],
    faqs: [
      {
        question: "Can a fashion quiz reduce returns?",
        answer:
          "It targets the main cause of returns by recommending on fit and taste rather than popularity. Linking answers to specific sizes and colors sends shoppers to pieces they're more likely to keep.",
      },
      {
        question: "Does it support product variants like size and color?",
        answer:
          "Yes. Answers can link to specific variants, and the results page shows the matched size and color with direct add-to-cart.",
      },
      {
        question: "Can I run the quiz in multiple languages?",
        answer:
          "Yes. Build one base quiz, translate it with the AI Copilot, and assign each version to its Shopify Market. Product titles and prices auto-localize via Shopify Markets.",
      },
      {
        question: "Which platforms does it work on?",
        answer:
          "Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace, and as a standalone hosted quiz.",
      },
    ],
    related: [
      { label: "Size & fit finder quiz", href: "/solutions/size-finder/" },
      { label: "Gift finder quiz", href: "/solutions/gift-finder/" },
      { label: "Quiz templates", href: "/templates/" },
      { label: "Quiz for Shopify", href: "/product-recommendation-quiz-shopify/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  coffee: {
    slug: "coffee",
    type: "vertical",
    name: "Coffee & tea",
    chip: "Industry",
    title: "Coffee quiz: match roasts to taste",
    description:
      "A taste-profile quiz that matches shoppers to the right roast or blend and onboards subscribers. Free plan, Klaviyo and ReCharge ready.",
    h1: "Coffee quizzes that match taste to the right roast",
    heroSubtitle:
      "Roast, origin, brew method, flavor notes: a coffee quiz turns a confusing menu into one confident recommendation, and a new subscriber.",
    intro: [
      "Coffee and tea are taste-driven, and taste is hard to shop from a product list. A short taste-profile quiz asks about roast preference, brew method, and flavor notes, then recommends the blend a shopper will actually enjoy.",
      "RevenueHunt makes this a funnel, not just a recommendation. Capture email at the start, recommend a starter blend, and wire the results page to a subscribe-and-save offer through ReCharge, with roast and brew preferences synced to Klaviyo.",
    ],
    quizTypes: [
      {
        title: "Taste-profile finder",
        body: "A few questions on roast, body, and flavor notes map each shopper to the blend that matches their palate.",
      },
      {
        title: "Brew-method match",
        body: "Espresso, pour-over, French press, or drip: branch by method so the grind and blend suit how they actually make coffee.",
      },
      {
        title: "Subscription onboarding",
        body: "Run the quiz at the top of the funnel, recommend a starter blend, and offer subscribe-and-save on the results page.",
      },
      {
        title: "Gift or sampler finder",
        body: "Help gift-buyers pick a sampler or gift set without knowing the recipient's exact taste.",
      },
    ],
    howItHelps: [
      "A taste profile is a great reason to ask for an email. Shoppers happily share roast and brew preferences to get a recommendation, which fills your list with pre-segmented subscribers.",
      "The results page does the selling. Recommend the matched blend, show a subscribe-and-save offer wired to ReCharge, and let shoppers add to cart without leaving the quiz.",
      "Preferences become durable segments. Syncing roast and brew-method tags to Klaviyo means every future campaign can speak to a dark-roast espresso drinker differently from a light-roast pour-over fan.",
    ],
    demo: {
      label: "Try the coffee quiz",
      href: "https://productrecommendationquiz.com/pages/coffee-quiz?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_coffee",
      blurb: "A live taste-matching coffee quiz on our demo store.",
    },
    faqs: [
      {
        question: "Can a coffee quiz recommend a subscription?",
        answer:
          "Yes. Capture email at the start, recommend a starter blend, and point the results page at a subscribe-and-save offer wired to ReCharge.",
      },
      {
        question: "Does it match by brew method?",
        answer:
          "Yes. Branch by brew method so the grind and blend suit espresso, pour-over, French press, or drip drinkers specifically.",
      },
      {
        question: "Will it grow my email list?",
        answer:
          "Yes. The taste profile is a strong reason for shoppers to share their email, and responses sync to Klaviyo pre-segmented by roast and brew preference.",
      },
      {
        question: "Does this work for tea or other beverages?",
        answer:
          "Yes. The same taste-profile approach works for tea, wine, spirits, and any taste-driven catalog.",
      },
    ],
    related: [
      { label: "Bundle builder quiz", href: "/solutions/bundle-builder/" },
      { label: "Gift finder quiz", href: "/solutions/gift-finder/" },
      { label: "Quiz templates", href: "/templates/" },
      { label: "Guided selling quiz", href: "/guided-selling-quiz/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  fitness: {
    slug: "fitness",
    type: "vertical",
    name: "Fitness & nutrition",
    chip: "Industry",
    title: "Fitness quiz for gear, apparel & programs",
    description:
      "A goal-based fitness quiz that recommends the right gear, apparel, or program from your catalog. Free plan, AI builder, Klaviyo ready.",
    h1: "Fitness quizzes built around the shopper's goal",
    heroSubtitle:
      "Strength, endurance, weight loss, recovery: a fitness quiz turns a goal into the right gear, apparel, supplements, or program.",
    intro: [
      "Fitness shoppers start with a goal and a training style, not a product. A goal-based quiz asks what they're working toward, their experience level, and how they train, then recommends the gear, apparel, or program that fits.",
      "RevenueHunt builds the funnel end to end: recommend the right products from your catalog, capture the shopper's goal and level as zero-party data, and follow up through Klaviyo with content and offers matched to what they're training for.",
    ],
    quizTypes: [
      {
        title: "Goal-based finder",
        body: "Strength, endurance, mobility, or weight loss: each goal upvotes the matching gear, apparel, or supplements.",
      },
      {
        title: "Experience-level match",
        body: "Branch by beginner, intermediate, or advanced so recommendations fit where the shopper actually is.",
      },
      {
        title: "Program or plan finder",
        body: "Recommend the right training program or coaching tier based on goal, schedule, and equipment access.",
      },
      {
        title: "Kit or bundle builder",
        body: "Assemble a complete kit (apparel plus gear plus supplement) using recommendation slots for a higher average order value.",
      },
    ],
    howItHelps: [
      "Goal and experience level are the two questions that change everything. Asking them up front means a beginner working on mobility never sees an advanced strength product as their top result.",
      "A complete kit beats a single item. Recommendation slots let you return apparel, gear, and a supplement together, which lifts average order value without feeling pushy.",
      "The goal you capture powers everything after the sale. Syncing goal and level tags to Klaviyo lets you send training content and restock reminders that match each customer's actual program.",
    ],
    faqs: [
      {
        question: "Can a fitness quiz recommend a program, not just products?",
        answer:
          "Yes. Link answers to a training program or coaching tier the same way you link products, and the results page can recommend the right plan based on goal and schedule.",
      },
      {
        question: "Can it build a full kit in one result?",
        answer:
          "Yes. Recommendation slots reserve a place for each role (apparel, gear, supplement) so shoppers get a complete kit with add-to-cart for the set.",
      },
      {
        question: "How does it personalize for beginners vs advanced?",
        answer:
          "Branch with conditional logic on experience level, so beginners and advanced athletes see different questions and different recommendations.",
      },
      {
        question: "Can I follow up by email based on goals?",
        answer:
          "Yes. Goals and level sync to Klaviyo, Mailchimp, Omnisend, and more as customer tags for goal-matched email follow-up.",
      },
    ],
    related: [
      { label: "Supplement quiz", href: "/solutions/supplements/" },
      { label: "Bundle builder quiz", href: "/solutions/bundle-builder/" },
      { label: "Quiz templates", href: "/templates/" },
      { label: "Guided selling quiz", href: "/guided-selling-quiz/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "pet-products": {
    slug: "pet-products",
    type: "vertical",
    name: "Pet products",
    chip: "Industry",
    title: "Pet product quiz for your store",
    description:
      "A pet quiz that recommends food, supplements, or gear by species, breed, age, and allergies. Exclusions handle diets. Free to start.",
    h1: "Pet quizzes that match products to every animal",
    heroSubtitle:
      "Species, breed, age, activity, allergies: a pet quiz turns those details into the right food, supplement, or gear, and respects every dietary constraint.",
    intro: [
      "Pet owners shop for an animal, not a category, and the right product depends on species, breed size, age, and allergies. A pet quiz collects those details once and recommends products that fit every dimension at the same time.",
      "RevenueHunt handles the hard part: exclusions enforce allergy and diet rules cleanly, the results page recommends the right formula or kit, and a result email recaps the recommendation for owners who don't buy on the spot.",
    ],
    quizTypes: [
      {
        title: "Pet food finder",
        body: "Species, breed size, age, and activity level map to the right formula, with allergies handled by exclusions.",
      },
      {
        title: "Supplement or health match",
        body: "Recommend joint, skin, or digestion support based on age and stated concerns.",
      },
      {
        title: "Gear and accessory finder",
        body: "Match harnesses, beds, or toys to breed size and behavior so owners pick the right fit the first time.",
      },
      {
        title: "New-owner starter kit",
        body: "Assemble a complete starter kit for new pet owners using recommendation slots.",
      },
    ],
    howItHelps: [
      "Allergies are a hard constraint, and exclusions enforce them perfectly. Flagging a chicken allergy removes every chicken-based formula from the results, even ones that scored well on breed and age.",
      "A customer tag like small-dog-owner is gold for retention. Syncing it to Klaviyo lets you send breed-relevant content, restock reminders, and offers that actually fit the animal.",
      "Result emails catch the shoppers who bounce. Owners often research before they buy, so an automatic email that recaps the recommendation brings them back to finish the purchase.",
    ],
    demo: {
      label: "Try the dog food finder",
      href: "https://productrecommendationquiz.com/pages/dog-food?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_pet_products",
      blurb: "A live multi-attribute pet food finder on our demo store.",
    },
    faqs: [
      {
        question: "How does a pet quiz handle allergies?",
        answer:
          "With exclusions. Linking an allergy answer to an exclude list removes every conflicting product from the results, no matter how well it matched on other questions.",
      },
      {
        question: "Can it match by breed and age?",
        answer:
          "Yes. Each answer (species, breed size, age, activity level) upvotes the matching products, so recommendations fit the specific animal.",
      },
      {
        question: "Can I email the recommendation if they don't buy?",
        answer:
          "Yes. Result emails automatically recap the recommendation, which is useful for owners who research before purchasing.",
      },
      {
        question: "Does it segment customers for marketing?",
        answer:
          "Yes. Customer tags like small-dog-owner sync to Klaviyo and other tools for targeted, animal-relevant campaigns.",
      },
    ],
    related: [
      { label: "Bundle builder quiz", href: "/solutions/bundle-builder/" },
      { label: "Product finder quiz", href: "/product-finder-quiz/" },
      { label: "Quiz templates", href: "/templates/" },
      { label: "Quiz for WooCommerce", href: "/product-recommendation-quiz-woocommerce/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  cbd: {
    slug: "cbd",
    type: "vertical",
    name: "CBD & wellness",
    chip: "Industry",
    title: "CBD product finder quiz for your store",
    description:
      "A CBD quiz that guides shoppers to the right format and strength by goal and experience. Educates as it sells. Free plan, multi-platform.",
    h1: "CBD quizzes that guide shoppers to the right format",
    heroSubtitle:
      "Format, strength, and goal confuse most CBD shoppers. A quiz teaches as it sells and recommends the right product with confidence.",
    intro: [
      "CBD and wellness are categories where most shoppers genuinely don't know what to buy: oil or gummy, what strength, for what goal. A quiz turns that uncertainty into a clear recommendation by asking about goal, experience level, and format preference.",
      "RevenueHunt is built for first-time-category shoppers like these. The quiz educates as it asks, recommends the right format and strength from your catalog, and captures goals as zero-party data you own and can market to.",
    ],
    quizTypes: [
      {
        title: "Goal-based finder",
        body: "Sleep, calm, recovery, or focus: each goal upvotes the matching products and strengths.",
      },
      {
        title: "Format and strength match",
        body: "Branch by experience and format preference (oil, gummy, topical, capsule) so beginners get an approachable starting point.",
      },
      {
        title: "Routine or regimen builder",
        body: "Recommend a daytime and nighttime pairing using recommendation slots for a complete routine.",
      },
      {
        title: "Education-first quiz",
        body: "Use statement slides between questions to teach the basics, which builds confidence and trust before the recommendation.",
      },
    ],
    howItHelps: [
      "First-time-category shoppers need teaching, not just filtering. Statement slides let you explain strength and format in plain language as the shopper goes, so the recommendation lands with confidence.",
      "Matching experience level to strength protects the experience. A first-timer gets an approachable starting point rather than the strongest product, which means fewer disappointed returns.",
      "Goals captured in the quiz become your most useful segments. Syncing goal:sleep or goal:recovery to Klaviyo powers email that matches what each customer is actually trying to solve.",
    ],
    demo: {
      label: "Try the CBD product finder",
      href: "https://productrecommendationquiz.com/pages/cbd-product-finder?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_cbd",
      blurb: "A live CBD product finder on our demo store.",
    },
    faqs: [
      {
        question: "Can a CBD quiz recommend the right strength?",
        answer:
          "Yes. Branch by experience level and goal, then link each path to the appropriate strength, so beginners and experienced users get different recommendations.",
      },
      {
        question: "Can the quiz educate shoppers as they go?",
        answer:
          "Yes. Statement slides display text between questions with no input required, so you can teach format and strength basics inline.",
      },
      {
        question: "Does it work for broader wellness products?",
        answer:
          "Yes. The same goal-and-format approach works for adaptogens, mushrooms, and other wellness categories where shoppers need guidance.",
      },
      {
        question: "Which platforms does it support?",
        answer:
          "Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace, and as a standalone hosted quiz.",
      },
    ],
    related: [
      { label: "Supplement quiz", href: "/solutions/supplements/" },
      { label: "Routine builder quiz", href: "/solutions/routine-builder/" },
      { label: "Product finder quiz", href: "/product-finder-quiz/" },
      { label: "Quiz templates", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  jewelry: {
    slug: "jewelry",
    type: "vertical",
    name: "Jewelry & accessories",
    chip: "Industry",
    title: "Jewelry quiz: help shoppers find the piece",
    description:
      "A jewelry quiz that matches style, metal, and occasion to the right piece, and helps gift-buyers choose with confidence. Free to start.",
    h1: "Jewelry quizzes that match style to the right piece",
    heroSubtitle:
      "Metal, style, occasion, budget: a jewelry quiz guides shoppers and gift-buyers to a piece they'll love, instead of an endless grid.",
    intro: [
      "Jewelry is emotional and often a gift, which makes it hard to shop from a grid. A quiz asks about style, metal preference, occasion, and budget, then recommends pieces that match, turning browsing into a confident choice.",
      "RevenueHunt recommends real pieces and variants from your catalog, handles gift-buyers who don't know the recipient's taste, and captures preferences for follow-up. The results page converts with direct add-to-cart and an optional gift message.",
    ],
    quizTypes: [
      {
        title: "Style finder",
        body: "Aesthetic, metal, and occasion questions surface the pieces that match a shopper's taste.",
      },
      {
        title: "Gift finder",
        body: "Ask about the recipient and the occasion, then recommend a curated selection or gift set for buyers who don't know the catalog.",
      },
      {
        title: "Budget-aware match",
        body: "Factor budget into the recommendation so every shopper sees pieces in their range.",
      },
      {
        title: "Engagement or milestone finder",
        body: "Guide high-consideration purchases like engagement or anniversary pieces with a focused, reassuring flow.",
      },
    ],
    howItHelps: [
      "Gift-buyers are a huge share of jewelry traffic and the least sure of what they want. A quiz that asks about the recipient instead of the catalog turns that uncertainty into a confident gift purchase.",
      "Budget is a question most grids ignore. Factoring it into the recommendation means shoppers see pieces they can actually buy, which reduces bounce and builds trust.",
      "Preferences and occasions sync to your email tool, so you can follow up around anniversaries, restocks, and matching pieces with campaigns that feel personal.",
    ],
    faqs: [
      {
        question: "Can a jewelry quiz help gift-buyers?",
        answer:
          "Yes. Ask about the recipient and occasion rather than the catalog, then recommend a curated selection or gift set, which is ideal for buyers who don't know exactly what they want.",
      },
      {
        question: "Can it factor in budget?",
        answer:
          "Yes. Add a budget question and weight or filter recommendations so shoppers only see pieces in their range.",
      },
      {
        question: "Does it support variants like metal and size?",
        answer:
          "Yes. Answers can link to specific variants, so the results page shows the right metal and size with add-to-cart.",
      },
      {
        question: "Can I capture leads for follow-up?",
        answer:
          "Yes. The quiz captures email and preferences as zero-party data and syncs to Klaviyo and other tools for occasion-based follow-up.",
      },
    ],
    related: [
      { label: "Gift finder quiz", href: "/solutions/gift-finder/" },
      { label: "Fashion & apparel quiz", href: "/solutions/fashion/" },
      { label: "Quiz templates", href: "/templates/" },
      { label: "Product finder quiz", href: "/product-finder-quiz/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "home-goods": {
    slug: "home-goods",
    type: "vertical",
    name: "Home & decor",
    chip: "Industry",
    title: "Home & decor product quiz for your store",
    description:
      "A home and decor quiz that matches furniture and decor to a shopper's space and style. Reduces returns on bulky items. Free to start.",
    h1: "Home quizzes that match products to the space",
    heroSubtitle:
      "Style, room, size, and budget: a home and decor quiz guides shoppers to pieces that fit their space, which matters most when items are bulky.",
    intro: [
      "Home and decor is high-consideration and expensive to return. Shoppers need to know a piece fits their space and style before they commit. A quiz asks about room, style, dimensions, and budget, then recommends pieces that work.",
      "RevenueHunt recommends real products from your catalog, assembles coordinated sets with recommendation slots, and captures style preferences for follow-up, so a one-time furniture buyer becomes a repeat decor customer.",
    ],
    quizTypes: [
      {
        title: "Style finder",
        body: "Aesthetic and room questions surface furniture and decor that match a shopper's taste.",
      },
      {
        title: "Room or space match",
        body: "Factor room type and dimensions into recommendations so pieces actually fit the space.",
      },
      {
        title: "Coordinated set builder",
        body: "Assemble a matching set (sofa plus rug plus lighting) with recommendation slots for a complete look.",
      },
      {
        title: "Budget-aware finder",
        body: "Include budget so shoppers see pieces in their range and bounce less.",
      },
    ],
    howItHelps: [
      "Fit and scale drive returns on bulky items. Asking about room dimensions and recommending pieces that work reduces the costly mistakes that lead to returns on furniture.",
      "A coordinated set lifts order value naturally. Recommendation slots let you suggest a complete look rather than a single piece, which suits decor shopping perfectly.",
      "Style preferences are durable. Capturing a shopper's aesthetic and syncing it to your email tool means seasonal and new-collection campaigns can be matched to taste instead of blasted to everyone.",
    ],
    faqs: [
      {
        question: "Can a home quiz recommend a coordinated set?",
        answer:
          "Yes. Recommendation slots reserve a place for each role (seating, rug, lighting), so the results page returns a complete, matching set with add-to-cart.",
      },
      {
        question: "Can it factor in room size?",
        answer:
          "Yes. Add room and dimension questions and link answers to pieces that fit, which is key for reducing returns on large items.",
      },
      {
        question: "Does it help with budget?",
        answer:
          "Yes. Include a budget question so recommendations stay in the shopper's range.",
      },
      {
        question: "Which platforms does it work on?",
        answer:
          "Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace, and as a standalone hosted quiz.",
      },
    ],
    related: [
      { label: "Bundle builder quiz", href: "/solutions/bundle-builder/" },
      { label: "Gift finder quiz", href: "/solutions/gift-finder/" },
      { label: "Quiz templates", href: "/templates/" },
      { label: "Guided selling quiz", href: "/guided-selling-quiz/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  // ----------------------------------------------------------------- use-cases
  "gift-finder": {
    slug: "gift-finder",
    type: "use-case",
    name: "Gift finder",
    chip: "Quiz type",
    title: "Gift finder quiz for your online store",
    description:
      "A gift finder quiz that asks about the recipient and returns a curated gift, lifting AOV for buyers who don't know the catalog. Free to start.",
    h1: "Gift finder quizzes that turn guesswork into a sale",
    heroSubtitle:
      "Gift-buyers have no opinion about your catalog and high anxiety about choosing wrong. A gift finder asks about the recipient and recommends the perfect gift.",
    intro: [
      "Gift-buyers are the easiest shoppers to lose and the easiest to help. They don't know your products and they're worried about picking wrong. A gift finder quiz asks three to five questions about the recipient (relationship, age, interests, budget) and returns a curated gift they can buy with confidence.",
      "RevenueHunt makes the gift finder one of the highest-converting quiz types. Bundle multiple products into a single gift result for higher order value, add a gift message and discount on the results page, and capture the buyer's email for the next occasion.",
    ],
    quizTypes: [
      {
        title: "Recipient-led finder",
        body: "Ask about the recipient (relationship, age, interests) rather than the catalog, so buyers who know nothing about your products still get a great match.",
      },
      {
        title: "Occasion finder",
        body: "Branch by occasion (birthday, holiday, anniversary) so the recommendation fits the moment.",
      },
      {
        title: "Gift bundle builder",
        body: "Combine multiple products into a single curated gift set using recommendation slots, which lifts average order value.",
      },
    ],
    howItHelps: [
      "The trick is to ask about the recipient, not the catalog. A buyer who can answer three questions about their sister gets a confident recommendation without ever needing to understand your product range.",
      "Gift bundles raise order value without pressure. Returning a curated set as one result feels helpful, not pushy, and shoppers happily buy the whole thing.",
      "Every gift-buyer is a future customer. Capturing their email and the occasion lets you bring them back next birthday or holiday with a head start on the recommendation.",
    ],
    faqs: [
      {
        question: "How does a gift finder quiz work?",
        answer:
          "It asks three to five questions about the recipient and occasion, then recommends a curated gift or gift set, so buyers who don't know your catalog can still choose confidently.",
      },
      {
        question: "Can it bundle products into one gift?",
        answer:
          "Yes. Recommendation slots combine multiple products into a single curated gift set, which raises average order value.",
      },
      {
        question: "Can I add a discount or gift message?",
        answer:
          "Yes. The results page supports discount-code and content blocks you can show based on the shopper's answers.",
      },
      {
        question: "Does it capture leads for future occasions?",
        answer:
          "Yes. The quiz captures email and the occasion, which sync to Klaviyo and other tools so you can re-engage before the next gifting moment.",
      },
    ],
    related: [
      { label: "Jewelry quiz", href: "/solutions/jewelry/" },
      { label: "Beauty & cosmetics quiz", href: "/solutions/beauty/" },
      { label: "Product finder quiz", href: "/product-finder-quiz/" },
      { label: "Quiz templates", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "size-finder": {
    slug: "size-finder",
    type: "use-case",
    name: "Size & fit finder",
    chip: "Quiz type",
    title: "Size & fit finder quiz for ecommerce",
    description:
      "A size and fit finder quiz that recommends the right size or compatible product and cuts returns. Resolves multi-attribute fit. Free to start.",
    h1: "Size and fit finder quizzes that cut returns",
    heroSubtitle:
      "Wrong size is the number-one return. A fit finder asks the right questions and recommends the size or compatible product that fits.",
    intro: [
      "Fit and compatibility are where ecommerce loses money: wrong-size returns on apparel and footwear, and wrong-fit returns on anything that has to match something the shopper already owns. A fit finder quiz resolves those constraints before the order, not after.",
      "RevenueHunt handles multi-attribute fit cleanly. Link answers to specific variants and use exclusions for hard constraints, so a shopper's measurements and requirements resolve to one correct size or one compatible product on the results page.",
    ],
    quizTypes: [
      {
        title: "Size finder",
        body: "Measurements and fit-preference questions narrow to the right size, which is the most common cause of returns.",
      },
      {
        title: "Compatibility finder",
        body: "Resolve multi-attribute constraints (device model, mount type, accessory) down to the one product that fits.",
      },
      {
        title: "Fit-preference match",
        body: "Branch by fit preference (slim, regular, relaxed) so the recommendation suits how the shopper likes to wear it.",
      },
    ],
    howItHelps: [
      "Wrong-size returns are the single biggest cost a fit finder addresses. Asking measurements and fit preference up front and linking them to specific variants sends shoppers to the size they'll keep.",
      "Compatibility is just constraints, and exclusions handle them perfectly. A shopper who states their device and requirements gets exactly the compatible product, with everything incompatible removed.",
      "Confidence converts. When the quiz tells a shopper this is your size with a clear reason, they add to cart instead of bouncing to a sizing chart and never coming back.",
    ],
    demo: {
      label: "Try the compatibility finder",
      href: "https://productrecommendationquiz.com/pages/bicycle-quiz?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_size_finder",
      blurb: "A live compatibility-style finder on our demo store that resolves a technical match.",
    },
    faqs: [
      {
        question: "Can a fit finder reduce wrong-size returns?",
        answer:
          "Yes. Asking measurements and fit preference and linking answers to specific variants recommends the size a shopper is most likely to keep, which directly reduces returns.",
      },
      {
        question: "How does it handle compatibility?",
        answer:
          "With exclusions and variant linking. A shopper states their constraints (device, mount, accessory) and the quiz returns only the compatible product, removing everything that doesn't fit.",
      },
      {
        question: "Does it work for footwear and apparel?",
        answer:
          "Yes. Size and fit finders are among the strongest use cases for apparel, footwear, and anything where fit drives returns.",
      },
      {
        question: "Can the results explain the recommendation?",
        answer:
          "Yes. Results-page content blocks can show answer-specific text, so you can explain why a given size or product is the right fit.",
      },
    ],
    related: [
      { label: "Fashion & apparel quiz", href: "/solutions/fashion/" },
      { label: "Product finder quiz", href: "/product-finder-quiz/" },
      { label: "Quiz templates", href: "/templates/" },
      { label: "Quiz for Shopify", href: "/product-recommendation-quiz-shopify/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "shade-finder": {
    slug: "shade-finder",
    type: "use-case",
    name: "Shade matching",
    chip: "Quiz type",
    title: "Shade finder quiz: match foundation & color",
    description:
      "A shade finder quiz that matches foundation, concealer, or color by undertone and depth, with picture-choice answers. Cuts returns. Free to start.",
    h1: "Shade finder quizzes that match color with confidence",
    heroSubtitle:
      "Buying makeup online means guessing your shade. A shade finder asks about undertone and depth and returns the exact match, which cuts returns.",
    intro: [
      "Shade matching is the highest-stakes question in beauty ecommerce. Get it wrong and the product comes back. A shade finder quiz asks about undertone, depth, coverage, and finish, then recommends the exact shade from your catalog with picture-choice answers that are fast on mobile.",
      "RevenueHunt links each answer to specific shade variants and excludes the rest, so the results page shows one confident match rather than a swatch wall. The shopper's shade profile syncs to your email tool for restocks and matching products.",
    ],
    quizTypes: [
      {
        title: "Foundation shade match",
        body: "Undertone and depth questions map to the exact foundation or concealer shade, with picture-choice answers for speed.",
      },
      {
        title: "Lip or color match",
        body: "Match lip, blush, or eye color to a shopper's coloring and preference.",
      },
      {
        title: "Hair color match",
        body: "Guide at-home hair color by current shade, target shade, and undertone to the right formula.",
      },
    ],
    howItHelps: [
      "Picture-choice answers carry shade questions. Letting shoppers tap an image of an undertone or finish beats asking them to describe it, and keeps completion high on the mobile screens where beauty sells.",
      "Exclusions turn a swatch wall into one answer. Linking undertone and depth to specific variants and excluding the rest means the results page shows the match, not the whole range.",
      "Shade is a profile worth keeping. Syncing a shopper's matched shade to Klaviyo lets you market restocks and coordinating products to exactly the right people.",
    ],
    demo: {
      label: "Try the shade match quiz",
      href: "https://productrecommendationquiz.com/pages/foundation-match?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_shade_finder",
      blurb: "A live image-based foundation shade-match quiz on our demo store.",
    },
    faqs: [
      {
        question: "How does a shade finder match foundation?",
        answer:
          "Ask about undertone, depth, coverage, and finish, link each answer to the matching shade variants, and exclude the rest. The results page shows the exact match with add-to-cart.",
      },
      {
        question: "Does it use picture-choice answers?",
        answer:
          "Yes. Choices can be clickable images, which is ideal for undertone and finish questions and lifts mobile completion.",
      },
      {
        question: "Can it reduce shade-related returns?",
        answer:
          "Yes. Recommending one confident match instead of a swatch wall sends shoppers to the shade they're most likely to keep.",
      },
      {
        question: "Does it work beyond foundation?",
        answer:
          "Yes. The same approach matches lip color, blush, eye color, and at-home hair color.",
      },
    ],
    related: [
      { label: "Beauty & cosmetics quiz", href: "/solutions/beauty/" },
      { label: "Skincare quiz", href: "/solutions/skincare/" },
      { label: "For beauty brands", href: "/for-beauty-brands/" },
      { label: "Quiz templates", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "routine-builder": {
    slug: "routine-builder",
    type: "use-case",
    name: "Routine builder",
    chip: "Quiz type",
    title: "Routine builder quiz for skincare & more",
    description:
      "A routine builder quiz that returns a complete multi-step routine, not a single product, using recommendation slots. Lifts AOV. Free to start.",
    h1: "Routine builder quizzes that sell the whole set",
    heroSubtitle:
      "One product is a sale. A routine is a basket and a habit. A routine builder returns a complete multi-step set matched to each shopper.",
    intro: [
      "Some products are bought as a system, not a single item: a skincare routine, a supplement stack, a haircare regimen. A routine builder quiz returns the whole set, with a place reserved for each step, so shoppers buy the complete routine instead of one product.",
      "RevenueHunt does this with recommendation slots. Reserve a slot for each role (cleanser, treatment, moisturizer, SPF, or whatever your category needs) and the quiz fills each one with the best match, then shows the full routine grouped by step with add-to-cart for the set.",
    ],
    quizTypes: [
      {
        title: "Step-based routine",
        body: "Reserve a slot for each step and fill it with the best-matched product, so every shopper gets a complete, coherent routine.",
      },
      {
        title: "Stack builder",
        body: "Assemble a multi-product stack (great for supplements and wellness) with a role for each product.",
      },
      {
        title: "Day and night routine",
        body: "Return separate AM and PM routines from one quiz using display logic on the results page.",
      },
    ],
    howItHelps: [
      "Recommendation slots are the difference between a sale and a basket. Reserving a place for each step means the results page returns a full routine, which lifts order value without feeling like an upsell.",
      "Grouping by step makes the routine make sense. Shoppers see exactly what to use and when, which builds confidence in the purchase and the habit that brings them back.",
      "A routine is a retention engine. The set you recommend tells you what each customer will run out of and when, so your email follow-up can time replenishment offers precisely.",
    ],
    faqs: [
      {
        question: "How does a routine builder return a full set?",
        answer:
          "With recommendation slots. Each slot is reserved for a role (for example cleanser, treatment, moisturizer, SPF) and filled with the best-matched product, so the results page returns a complete routine.",
      },
      {
        question: "Can it show a separate day and night routine?",
        answer:
          "Yes. Use display logic on the results page to show AM and PM routines, or any conditional grouping, based on the shopper's answers.",
      },
      {
        question: "Does it lift average order value?",
        answer:
          "Recommending a complete set instead of a single product gives shoppers a reason to buy the whole routine, which raises order value.",
      },
      {
        question: "Which categories suit a routine builder?",
        answer:
          "Skincare, haircare, supplements, and any catalog bought as a multi-step system rather than a single item.",
      },
    ],
    related: [
      { label: "Skincare quiz", href: "/solutions/skincare/" },
      { label: "Supplement quiz", href: "/solutions/supplements/" },
      { label: "Bundle builder quiz", href: "/solutions/bundle-builder/" },
      { label: "Quiz templates", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "bundle-builder": {
    slug: "bundle-builder",
    type: "use-case",
    name: "Bundle builder",
    chip: "Quiz type",
    title: "Bundle builder quiz: sell curated sets",
    description:
      "A bundle builder quiz that assembles a curated set from a shopper's answers and lifts average order value. Add-to-cart for the whole bundle. Free.",
    h1: "Bundle builder quizzes that raise order value",
    heroSubtitle:
      "A curated bundle converts better than a single product and a generic upsell. A bundle builder assembles the set from each shopper's answers.",
    intro: [
      "Bundles work, but only when they're relevant. A generic three-for-two upsell ignores what the shopper actually wants. A bundle builder quiz assembles a curated set from each shopper's answers, so the bundle feels personal and the order value comes naturally.",
      "RevenueHunt builds bundles with recommendation slots and conditional results. Reserve a role for each product in the set, match each one to the shopper, and present the full bundle on the results page with add-to-cart for everything at once.",
    ],
    quizTypes: [
      {
        title: "Curated set builder",
        body: "Reserve a role for each product in the bundle and fill each with the best match, so the set fits the shopper rather than the catalog.",
      },
      {
        title: "Starter kit finder",
        body: "Assemble a complete starter kit for first-time or new-category buyers who want one confident purchase.",
      },
      {
        title: "Build-your-own bundle",
        body: "Let answers drive a flexible bundle, with display logic adding or removing items based on what the shopper picks.",
      },
    ],
    howItHelps: [
      "A relevant bundle outperforms a generic one. Matching each item in the set to the shopper's answers means the bundle reads as a recommendation, not a discount tactic, and converts accordingly.",
      "One add-to-cart for the whole set removes friction. Shoppers buy the bundle in a single action instead of hunting down each item, which protects the higher order value you just built.",
      "Discount blocks make the bundle land. Show a set discount on the results page tied to the specific combination, so the saving feels earned and the shopper completes the purchase.",
    ],
    faqs: [
      {
        question: "How does a bundle builder quiz work?",
        answer:
          "It reserves a role for each product in the bundle, matches each to the shopper's answers, and presents the full curated set on the results page with add-to-cart for everything at once.",
      },
      {
        question: "Can I add a bundle discount?",
        answer:
          "Yes. The results page supports discount-code blocks you can tie to specific answer combinations, so the bundle saving is shown in context.",
      },
      {
        question: "Does it lift average order value?",
        answer:
          "Recommending a relevant, curated set rather than a single product gives shoppers a reason to buy more, which raises order value.",
      },
      {
        question: "What categories does it suit?",
        answer:
          "Supplements, beauty, food and beverage, home, and any catalog where a curated set sells better than a single item.",
      },
    ],
    related: [
      { label: "Routine builder quiz", href: "/solutions/routine-builder/" },
      { label: "Gift finder quiz", href: "/solutions/gift-finder/" },
      { label: "Supplement quiz", href: "/solutions/supplements/" },
      { label: "Quiz templates", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },
};

/** Verticals, in display order for the hub. */
export const VERTICAL_ORDER = [
  "skincare",
  "beauty",
  "supplements",
  "fashion",
  "coffee",
  "fitness",
  "pet-products",
  "cbd",
  "jewelry",
  "home-goods",
] as const;

/** Use-cases (quiz types), in display order for the hub. */
export const USECASE_ORDER = [
  "gift-finder",
  "size-finder",
  "shade-finder",
  "routine-builder",
  "bundle-builder",
] as const;

/** Curated subset for cross-link sections on related pages (platform pages,
 *  templates gallery). A mix of top industries and quiz types. */
export const FEATURED_SOLUTIONS = [
  "skincare",
  "supplements",
  "fashion",
  "coffee",
  "pet-products",
  "gift-finder",
  "size-finder",
  "bundle-builder",
] as const;

/** Guides and explainers surfaced on the /solutions/ hub. The first three
 *  also live here instead of the header Resources menu, so keep them visible. */
export const RELATED_GUIDES: SolutionLink[] = [
  {
    label: "How it works",
    href: "/how-it-works/",
    blurb: "From shopper answers to a personalized results page: how the recommendation engine maps answers to products.",
  },
  {
    label: "Zero-party data",
    href: "/zero-party-data/",
    blurb: "What zero-party data is, why it beats behavioral tracking, and how a quiz captures it.",
  },
  {
    label: "For beauty brands",
    href: "/for-beauty-brands/",
    blurb: "Strategies, tutorials, and resources for beauty and skincare ecommerce.",
  },
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
    label: "Glossary",
    href: "/glossary/",
    blurb: "Plain-English definitions of the quiz and personalization terms that matter in ecommerce.",
  },
];

/** English source + per-locale translations of the solutions catalog. */
export const SOLUTIONS_BY_LANG: Record<Lang, Record<string, Solution>> = {
  en: SOLUTIONS,
  es: SOLUTIONS_ES,
  fr: SOLUTIONS_FR,
  de: SOLUTIONS_DE,
  pt: SOLUTIONS_PT,
  it: SOLUTIONS_IT,
  nl: SOLUTIONS_NL,
  sv: SOLUTIONS_SV,
  fi: SOLUTIONS_FI,
  pl: SOLUTIONS_PL,
  cs: SOLUTIONS_CS,
};
