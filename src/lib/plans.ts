import type { Lang } from "./i18n";

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
  /** Yearly billing price (per-month equivalent - 20% off monthly). */
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

const PLANS_ES: Plan[] = [
  {
    name: "Plan gratuito",
    price: "FREE",
    priceNote: "* ¡Sí, en serio!",
    tagline: "Perfecto para marcas nuevas.",
    features: [
      { text: "100 respuestas de quiz/mes" },
      { text: "Soporte por email" },
      { text: "Crea quizzes ilimitados" },
      { text: "Diseño de quiz personalizado" },
      { text: "Lógica condicional" },
      { text: "Analítica avanzada de quiz" },
      { text: "Shopify Markets" },
      { text: "Exporta leads del quiz a CSV" },
      { text: "Cumple GDPR y CCPA" },
    ],
  },
  {
    name: "Plan básico",
    price: "39",
    priceYearly: "31",
    priceSuffix: "USD/mes",
    priceNote: "* Facturación mensual",
    priceNoteYearly: "* Facturación anual",
    tagline: "Para tiendas medianas en crecimiento.",
    features: [
      { text: "500 respuestas de quiz/mes" },
      { text: "Funciones del gratuito +" },
      { text: "Soporte por chat en vivo" },
      { text: "HTML, CSS y JS personalizados" },
      { text: "GA4 y Meta Pixel" },
      { text: "Webhooks y Zapier" },
      { text: "Klaviyo, Omnisend y", link: { label: "más integraciones", href: "/integrations/" } },
    ],
  },
  {
    name: "Plan Pro",
    price: "99",
    priceYearly: "79",
    priceSuffix: "USD/mes",
    priceNote: "* Facturación mensual",
    priceNoteYearly: "* Facturación anual",
    tagline: "Para marcas listas para escalar.",
    features: [
      { text: "1.000 respuestas de quiz/mes" },
      { text: "Funciones del básico +" },
      { text: "Soporte por videollamada" },
      { text: "Gestor de cuenta" },
    ],
  },
  {
    name: "Plan Premium",
    price: "199",
    priceYearly: "159",
    priceSuffix: "USD/mes",
    priceNote: "* Facturación mensual",
    priceNoteYearly: "* Facturación anual",
    tagline: "Marcas consolidadas y multimercado.",
    features: [
      { text: "2.500 respuestas de quiz/mes" },
      { text: "Funciones del Pro +" },
      { text: "Revisión de estrategia trimestral" },
      { text: "Planes mayores -", link: { label: "ver", href: "/demo/" }, plus: true },
    ],
  },
];

const PLANS_FR: Plan[] = [
  {
    name: "Offre gratuite",
    price: "FREE",
    priceNote: "* Oui, vraiment !",
    tagline: "Parfait pour les nouvelles marques.",
    features: [
      { text: "100 réponses de quiz/mois" },
      { text: "Support par email" },
      { text: "Créez des quiz illimités" },
      { text: "Design de quiz personnalisé" },
      { text: "Logique conditionnelle" },
      { text: "Analyse avancée des quiz" },
      { text: "Shopify Markets" },
      { text: "Exportez les leads du quiz en CSV" },
      { text: "Conforme RGPD et CCPA" },
    ],
  },
  {
    name: "Offre Basic",
    price: "39",
    priceYearly: "31",
    priceSuffix: "USD/mois",
    priceNote: "* Facturation mensuelle",
    priceNoteYearly: "* Facturation annuelle",
    tagline: "Pour les boutiques intermédiaires en croissance.",
    features: [
      { text: "500 réponses de quiz/mois" },
      { text: "Fonctionnalités de l'offre gratuite +" },
      { text: "Support par chat en direct" },
      { text: "HTML, CSS et JS personnalisés" },
      { text: "GA4 et Meta Pixel" },
      { text: "Webhooks et Zapier" },
      { text: "Klaviyo, Omnisend et", link: { label: "plus d'intégrations", href: "/integrations/" } },
    ],
  },
  {
    name: "Offre Pro",
    price: "99",
    priceYearly: "79",
    priceSuffix: "USD/mois",
    priceNote: "* Facturation mensuelle",
    priceNoteYearly: "* Facturation annuelle",
    tagline: "Pour les marques prêtes à passer à l'échelle.",
    features: [
      { text: "1 000 réponses de quiz/mois" },
      { text: "Fonctionnalités de l'offre Basic +" },
      { text: "Support par appel vidéo" },
      { text: "Gestionnaire de compte" },
    ],
  },
  {
    name: "Offre Premium",
    price: "199",
    priceYearly: "159",
    priceSuffix: "USD/mois",
    priceNote: "* Facturation mensuelle",
    priceNoteYearly: "* Facturation annuelle",
    tagline: "Marques établies et multi-marchés.",
    features: [
      { text: "2 500 réponses de quiz/mois" },
      { text: "Fonctionnalités de l'offre Pro +" },
      { text: "Revue de stratégie trimestrielle" },
      { text: "Offres plus larges -", link: { label: "voir", href: "/demo/" }, plus: true },
    ],
  },
];

const PLANS_DE: Plan[] = [
  {
    name: "Kostenloser Plan",
    price: "FREE",
    priceNote: "* Ja, wirklich!",
    tagline: "Perfekt für neue Marken.",
    features: [
      { text: "100 Quiz-Antworten/Mon." },
      { text: "E-Mail-Support" },
      { text: "Unbegrenzt Quizze erstellen" },
      { text: "Individuelles Quiz-Design" },
      { text: "Bedingte Logik" },
      { text: "Erweiterte Quiz-Analytik" },
      { text: "Shopify Markets" },
      { text: "Quiz-Leads als CSV exportieren" },
      { text: "DSGVO- & CCPA-konform" },
    ],
  },
  {
    name: "Basic-Plan",
    price: "39",
    priceYearly: "31",
    priceSuffix: "USD/Mon.",
    priceNote: "* Monatliche Abrechnung",
    priceNoteYearly: "* Jährliche Abrechnung",
    tagline: "Für wachsende Stores im mittleren Segment.",
    features: [
      { text: "500 Quiz-Antworten/Mon." },
      { text: "Funktionen des Kostenlosen +" },
      { text: "Live-Chat-Support" },
      { text: "Eigenes HTML, CSS & JS" },
      { text: "GA4 & Meta Pixel" },
      { text: "Webhooks & Zapier" },
      { text: "Klaviyo, Omnisend &", link: { label: "weitere Integrationen", href: "/integrations/" } },
    ],
  },
  {
    name: "Pro-Plan",
    price: "99",
    priceYearly: "79",
    priceSuffix: "USD/Mon.",
    priceNote: "* Monatliche Abrechnung",
    priceNoteYearly: "* Jährliche Abrechnung",
    tagline: "Für Marken, die bereit sind zu skalieren.",
    features: [
      { text: "1.000 Quiz-Antworten/Mon." },
      { text: "Funktionen des Basic +" },
      { text: "Support per Videocall" },
      { text: "Account-Manager" },
    ],
  },
  {
    name: "Premium-Plan",
    price: "199",
    priceYearly: "159",
    priceSuffix: "USD/Mon.",
    priceNote: "* Monatliche Abrechnung",
    priceNoteYearly: "* Jährliche Abrechnung",
    tagline: "Etablierte Marken mit mehreren Märkten.",
    features: [
      { text: "2.500 Quiz-Antworten/Mon." },
      { text: "Funktionen des Pro +" },
      { text: "Vierteljährliche Strategie-Review" },
      { text: "Größere Pläne -", link: { label: "ansehen", href: "/demo/" }, plus: true },
    ],
  },
];

const PLANS_PT: Plan[] = [
  {
    name: "Plano gratuito",
    price: "FREE",
    priceNote: "* Sim, a sério!",
    tagline: "Perfeito para marcas novas.",
    features: [
      { text: "100 respostas de quiz/mês" },
      { text: "Suporte por email" },
      { text: "Cria quizzes ilimitados" },
      { text: "Design de quiz personalizado" },
      { text: "Lógica condicional" },
      { text: "Analítica avançada de quiz" },
      { text: "Shopify Markets" },
      { text: "Exporta leads do quiz para CSV" },
      { text: "Conforme RGPD e CCPA" },
    ],
  },
  {
    name: "Plano básico",
    price: "39",
    priceYearly: "31",
    priceSuffix: "USD/mês",
    priceNote: "* Faturação mensal",
    priceNoteYearly: "* Faturação anual",
    tagline: "Para lojas intermédias em crescimento.",
    features: [
      { text: "500 respostas de quiz/mês" },
      { text: "Funcionalidades do gratuito +" },
      { text: "Suporte por chat ao vivo" },
      { text: "HTML, CSS e JS personalizados" },
      { text: "GA4 e Meta Pixel" },
      { text: "Webhooks e Zapier" },
      { text: "Klaviyo, Omnisend e", link: { label: "mais integrações", href: "/integrations/" } },
    ],
  },
  {
    name: "Plano Pro",
    price: "99",
    priceYearly: "79",
    priceSuffix: "USD/mês",
    priceNote: "* Faturação mensal",
    priceNoteYearly: "* Faturação anual",
    tagline: "Para marcas prontas para escalar.",
    features: [
      { text: "1.000 respostas de quiz/mês" },
      { text: "Funcionalidades do básico +" },
      { text: "Suporte por videochamada" },
      { text: "Gestor de conta" },
    ],
  },
  {
    name: "Plano Premium",
    price: "199",
    priceYearly: "159",
    priceSuffix: "USD/mês",
    priceNote: "* Faturação mensal",
    priceNoteYearly: "* Faturação anual",
    tagline: "Marcas consolidadas e multimercado.",
    features: [
      { text: "2.500 respostas de quiz/mês" },
      { text: "Funcionalidades do Pro +" },
      { text: "Revisão de estratégia trimestral" },
      { text: "Planos maiores -", link: { label: "ver", href: "/demo/" }, plus: true },
    ],
  },
];

const PLANS_IT: Plan[] = [
  {
    name: "Piano gratuito",
    price: "FREE",
    priceNote: "* Sì, davvero!",
    tagline: "Perfetto per i nuovi brand.",
    features: [
      { text: "100 risposte al quiz/mese" },
      { text: "Supporto via email" },
      { text: "Crea quiz illimitati" },
      { text: "Design del quiz personalizzato" },
      { text: "Logica condizionale" },
      { text: "Analisi avanzata dei quiz" },
      { text: "Shopify Markets" },
      { text: "Esporta i lead del quiz in CSV" },
      { text: "Conforme a GDPR e CCPA" },
    ],
  },
  {
    name: "Piano Basic",
    price: "39",
    priceYearly: "31",
    priceSuffix: "USD/mese",
    priceNote: "* Fatturazione mensile",
    priceNoteYearly: "* Fatturazione annuale",
    tagline: "Per store di fascia media in crescita.",
    features: [
      { text: "500 risposte al quiz/mese" },
      { text: "Funzionalità del gratuito +" },
      { text: "Supporto via chat dal vivo" },
      { text: "HTML, CSS e JS personalizzati" },
      { text: "GA4 e Meta Pixel" },
      { text: "Webhooks e Zapier" },
      { text: "Klaviyo, Omnisend e", link: { label: "altre integrazioni", href: "/integrations/" } },
    ],
  },
  {
    name: "Piano Pro",
    price: "99",
    priceYearly: "79",
    priceSuffix: "USD/mese",
    priceNote: "* Fatturazione mensile",
    priceNoteYearly: "* Fatturazione annuale",
    tagline: "Per brand pronti a scalare.",
    features: [
      { text: "1.000 risposte al quiz/mese" },
      { text: "Funzionalità del Basic +" },
      { text: "Supporto via videochiamata" },
      { text: "Account manager" },
    ],
  },
  {
    name: "Piano Premium",
    price: "199",
    priceYearly: "159",
    priceSuffix: "USD/mese",
    priceNote: "* Fatturazione mensile",
    priceNoteYearly: "* Fatturazione annuale",
    tagline: "Brand affermati e multi-mercato.",
    features: [
      { text: "2.500 risposte al quiz/mese" },
      { text: "Funzionalità del Pro +" },
      { text: "Revisione strategica trimestrale" },
      { text: "Piani più grandi -", link: { label: "vedi", href: "/demo/" }, plus: true },
    ],
  },
];

export const PLANS_BY_LANG: Record<Lang, Plan[]> = {
  en: PLANS,
  es: PLANS_ES,
  fr: PLANS_FR,
  de: PLANS_DE,
  pt: PLANS_PT,
  it: PLANS_IT,
};
