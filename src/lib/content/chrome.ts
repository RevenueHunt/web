// Localized "chrome" strings for content/markdown pages: the shared sections
// that wrap the markdown body (ResourceCards, the bottom CTA band) and the
// bespoke PlatformPage layout (pillars, comparison table, sibling + industry
// blocks, review heading, CTA labels). English is the source of truth; es/fr
// mirror it. Templates use {platform} / {rating} placeholders filled at render.
//
// Phase 2 adds de/pt/it.

import type { Lang } from "../i18n";

export interface Pillar {
  image: string;
  title: string;
  body: string;
}

export interface Chrome {
  // ResourceCards
  rc_heading: string;
  rc_sub: string;
  rc_roi_eyebrow: string;
  rc_roi_title: string;
  rc_roi_blurb: string;
  rc_roi_cta: string;
  rc_report_eyebrow: string;
  rc_report_title: string;
  rc_report_blurb: string;
  rc_report_cta: string;
  // Bottom CTA band
  cta_kicker: string;
  cta_h2: string;
  cta_install_shopify: string;
  cta_get_woocommerce: string;
  // Platform page
  trial_note: string;
  pillars: Pillar[];
  compare_h2: string;
  compare_sub: string;
  compare_col_feature: string;
  compare_rows: string[]; // 7 feature labels
  compare_starting_price: string;
  compare_free: string;
  compare_note: string;
  platforms_h2: string;
  platforms_sub: string; // {platform}
  platforms_card_title: string; // {platform}
  platforms_card_cta: string; // {platform}
  industry_h2: string;
  industry_sub: string; // {platform}
  industry_view: string;
  industry_see_all: string;
  reviews_heading: string; // {rating} {platform}
  // Reviews component
  reviews_default_heading: string;
  reviews_from: string; // {count} {source}
  // PlanCards enterprise paragraph
  plans_enterprise: string; // {price}
  plans_enterprise_cta: string;
  // PLATFORM_CONFIGS CTA labels, keyed by the English label
  cta_labels: Record<string, string>;
  // Sibling taglines, keyed by platform slug
  sibling_taglines: Record<string, string>;
}

const PILLAR_IMAGES = {
  recommend: "/img/pages/home/recommend-right-products.svg",
  know: "/img/pages/home/know-your-customers.svg",
  grow: "/img/pages/home/grow-your-audience.svg",
} as const;

const SLUGS = {
  shopify: "product-recommendation-quiz-shopify",
  woocommerce: "product-recommendation-quiz-woocommerce",
  bigcommerce: "product-recommendation-quiz-bigcommerce",
  wix: "product-recommendation-quiz-wix-stores",
  squarespace: "product-recommendation-quiz-for-squarespace-commerce",
  magento: "product-recommendation-quiz-for-magento",
  standalone: "product-recommendation-quiz-standalone-google-product-feed",
  pos: "product-recommendation-quiz-pos-tablet-stands",
  all: "product-recommendation-quiz",
} as const;

const en: Chrome = {
  rc_heading: "Free tools & data",
  rc_sub: "Put these benchmarks to work on your own store.",
  rc_roi_eyebrow: "Free tool",
  rc_roi_title: "Quiz ROI calculator",
  rc_roi_blurb:
    "Estimate the extra revenue and ROI a product recommendation quiz could add to your store. Built on real data, no email required.",
  rc_roi_cta: "Calculate your ROI",
  rc_report_eyebrow: "Free report",
  rc_report_title: "Ecommerce quiz benchmark report",
  rc_report_blurb:
    "How product recommendation quizzes really perform: conversion by category, AOV uplift, and completion, from 45M+ real quiz responses.",
  rc_report_cta: "Read the report",
  cta_kicker: "Most shoppers leave because they can't find the right product",
  cta_h2: "Turn shoppers into confident buyers with a Product Recommendation Quiz that drives sales.",
  cta_install_shopify: "install on Shopify",
  cta_get_woocommerce: "get for WooCommerce",
  trial_note: "Free plan available · 15-day free trial · 30-day money-back guarantee",
  pillars: [
    {
      image: PILLAR_IMAGES.recommend,
      title: "Recommend the right products",
      body: "Shoppable quizzes drive sales, advise customers on finding the right products for them, and help them make confident purchasing decisions.",
    },
    {
      image: PILLAR_IMAGES.know,
      title: "Know your customers",
      body: "Quizzes let you collect actionable data by asking your customers targeted questions. Segment and tag your shoppers based on their responses.",
    },
    {
      image: PILLAR_IMAGES.grow,
      title: "Grow your audience",
      body: "Send captured leads to your mailing list or CRM. Leverage customer profile data to create more personalized, higher ROI marketing campaigns.",
    },
  ],
  compare_h2: "How we compare",
  compare_sub:
    "RevenueHunt vs. Octane AI vs. Quiz Kit - the features that matter for serious eCommerce stores.",
  compare_col_feature: "Feature",
  compare_rows: [
    "Klaviyo / Mailchimp integration",
    "Conditional / branching logic",
    "AI quiz builder (60-second setup)",
    "Built for Shopify",
    "Drop-off analytics",
    "WooCommerce & other platforms",
    "Free plan available",
  ],
  compare_starting_price: "Starting price",
  compare_free: "Free",
  compare_note: "Comparison based on publicly available information as of 2026.",
  platforms_h2: "Available for every platform",
  platforms_sub:
    "Not on {platform}? RevenueHunt's product recommendation quiz works wherever you sell - pick your stack.",
  platforms_card_title: "Product recommendation quiz for {platform}",
  platforms_card_cta: "See {platform} page",
  industry_h2: "A quiz for your industry",
  industry_sub:
    "However you sell on {platform}, build the quiz that fits your catalog. Explore solutions by industry and quiz type.",
  industry_view: "View solution",
  industry_see_all: "See all quiz solutions",
  reviews_heading: "Rated {rating} by {platform} merchants",
  reviews_default_heading: "What merchants say",
  reviews_from: "from {count} reviews on {source}",
  plans_enterprise:
    "Large brand? We've got you covered. Get a custom Enterprise Plan starting at {price} for unlimited quiz responses.",
  plans_enterprise_cta: "Book a strategy call",
  cta_labels: {
    "install on Shopify": "install on Shopify",
    "view demo store": "view demo store",
    "download the plugin": "download the plugin",
    "install on BigCommerce": "install on BigCommerce",
    "sign up": "sign up",
    "use the standalone solution": "use the standalone solution",
    "use on Shopify instead": "use on Shopify instead",
    "get started free": "get started free",
    "see quiz templates": "see quiz templates",
    "get for Shopify": "get for Shopify",
    "get for WooCommerce": "get for WooCommerce",
  },
  sibling_taglines: {
    [SLUGS.shopify]: "Native Shopify app, free plan, instant install",
    [SLUGS.woocommerce]: "Self-hosted WordPress plugin, no monthly fee",
    [SLUGS.bigcommerce]: "Native BigCommerce app with deep catalog sync",
    [SLUGS.wix]: "Embed via universal script - works on any Wix store",
    [SLUGS.squarespace]: "Embed via universal script - works on any Squarespace site",
    [SLUGS.magento]: "Standalone hosted solution, no Magento extension required",
    [SLUGS.standalone]:
      "Platform-agnostic - runs on Google Product Feed, no store integration needed",
    [SLUGS.pos]: "In-store quizzes on iPad / Android POS tablets",
    [SLUGS.all]: "The all-platforms overview - start here if you're comparing options",
  },
};

const es: Chrome = {
  rc_heading: "Herramientas y datos gratis",
  rc_sub: "Pon estos benchmarks a trabajar en tu propia tienda.",
  rc_roi_eyebrow: "Herramienta gratis",
  rc_roi_title: "Calculadora de ROI del quiz",
  rc_roi_blurb:
    "Calcula los ingresos extra y el ROI que un quiz de recomendación de productos puede aportar a tu tienda. Basado en datos reales, sin necesidad de email.",
  rc_roi_cta: "Calcula tu ROI",
  rc_report_eyebrow: "Informe gratis",
  rc_report_title: "Informe benchmark de quizzes de ecommerce",
  rc_report_blurb:
    "Cómo funcionan de verdad los quizzes de recomendación de productos: conversión por categoría, aumento del AOV y tasa de finalización, a partir de más de 45M de respuestas reales.",
  rc_report_cta: "Leer el informe",
  cta_kicker: "La mayoría de compradores se va porque no encuentra el producto adecuado",
  cta_h2: "Convierte a tus compradores en clientes seguros con un Product Recommendation Quiz que impulsa las ventas.",
  cta_install_shopify: "instalar en Shopify",
  cta_get_woocommerce: "obtener para WooCommerce",
  trial_note: "Plan gratuito disponible · 15 días de prueba gratis · garantía de devolución de 30 días",
  pillars: [
    {
      image: PILLAR_IMAGES.recommend,
      title: "Recomienda los productos adecuados",
      body: "Los quizzes shoppable impulsan las ventas, ayudan a los clientes a encontrar los productos ideales para ellos y les permiten tomar decisiones de compra con confianza.",
    },
    {
      image: PILLAR_IMAGES.know,
      title: "Conoce a tus clientes",
      body: "Los quizzes te permiten recopilar datos accionables haciendo preguntas específicas a tus clientes. Segmenta y etiqueta a tus compradores según sus respuestas.",
    },
    {
      image: PILLAR_IMAGES.grow,
      title: "Haz crecer tu audiencia",
      body: "Envía los leads captados a tu lista de correo o CRM. Aprovecha los datos del perfil de cliente para crear campañas de marketing más personalizadas y con mayor ROI.",
    },
  ],
  compare_h2: "Cómo nos comparamos",
  compare_sub:
    "RevenueHunt vs. Octane AI vs. Quiz Kit: las funciones que importan para tiendas de eCommerce serias.",
  compare_col_feature: "Función",
  compare_rows: [
    "Integración con Klaviyo / Mailchimp",
    "Lógica condicional / de ramificación",
    "Creador de quiz con IA (configuración en 60 segundos)",
    "Built for Shopify",
    "Analítica de abandono",
    "WooCommerce y otras plataformas",
    "Plan gratuito disponible",
  ],
  compare_starting_price: "Precio inicial",
  compare_free: "Gratis",
  compare_note: "Comparación basada en información pública disponible en 2026.",
  platforms_h2: "Disponible para todas las plataformas",
  platforms_sub:
    "¿No usas {platform}? El quiz de recomendación de productos de RevenueHunt funciona allá donde vendas: elige tu stack.",
  platforms_card_title: "Quiz de recomendación de productos para {platform}",
  platforms_card_cta: "Ver página de {platform}",
  industry_h2: "Un quiz para tu sector",
  industry_sub:
    "Vendas como vendas en {platform}, crea el quiz que encaja con tu catálogo. Explora soluciones por sector y tipo de quiz.",
  industry_view: "Ver solución",
  industry_see_all: "Ver todas las soluciones de quiz",
  reviews_heading: "Valorado {rating} por comerciantes de {platform}",
  reviews_default_heading: "Lo que dicen los comerciantes",
  reviews_from: "de {count} reseñas en {source}",
  plans_enterprise:
    "¿Marca grande? Te tenemos cubierto. Consigue un Plan Enterprise a medida desde {price} para respuestas de quiz ilimitadas.",
  plans_enterprise_cta: "Reserva una llamada de estrategia",
  cta_labels: {
    "install on Shopify": "instalar en Shopify",
    "view demo store": "ver tienda demo",
    "download the plugin": "descargar el plugin",
    "install on BigCommerce": "instalar en BigCommerce",
    "sign up": "regístrate",
    "use the standalone solution": "usar la solución independiente",
    "use on Shopify instead": "usar en Shopify",
    "get started free": "empieza gratis",
    "see quiz templates": "ver plantillas de quiz",
    "get for Shopify": "obtener para Shopify",
    "get for WooCommerce": "obtener para WooCommerce",
  },
  sibling_taglines: {
    [SLUGS.shopify]: "App nativa de Shopify, plan gratuito, instalación instantánea",
    [SLUGS.woocommerce]: "Plugin autoalojado de WordPress, sin cuota mensual",
    [SLUGS.bigcommerce]: "App nativa de BigCommerce con sincronización profunda del catálogo",
    [SLUGS.wix]: "Integra con un script universal: funciona en cualquier tienda Wix",
    [SLUGS.squarespace]: "Integra con un script universal: funciona en cualquier sitio Squarespace",
    [SLUGS.magento]: "Solución alojada independiente, sin extensión de Magento",
    [SLUGS.standalone]:
      "Independiente de la plataforma: funciona con Google Product Feed, sin integración con la tienda",
    [SLUGS.pos]: "Quizzes en tienda en tablets POS iPad / Android",
    [SLUGS.all]: "La visión general de todas las plataformas: empieza aquí si estás comparando opciones",
  },
};

const fr: Chrome = {
  rc_heading: "Outils et données gratuits",
  rc_sub: "Mettez ces benchmarks au travail sur votre propre boutique.",
  rc_roi_eyebrow: "Outil gratuit",
  rc_roi_title: "Calculateur de ROI du quiz",
  rc_roi_blurb:
    "Estimez le chiffre d'affaires et le ROI supplémentaires qu'un quiz de recommandation de produits peut apporter à votre boutique. Basé sur des données réelles, sans email requis.",
  rc_roi_cta: "Calculez votre ROI",
  rc_report_eyebrow: "Rapport gratuit",
  rc_report_title: "Rapport benchmark des quiz e-commerce",
  rc_report_blurb:
    "Comment les quiz de recommandation de produits performent vraiment : conversion par catégorie, hausse du panier moyen et taux de complétion, à partir de plus de 45M de réponses réelles.",
  rc_report_cta: "Lire le rapport",
  cta_kicker: "La plupart des clients partent parce qu'ils ne trouvent pas le bon produit",
  cta_h2: "Transformez vos visiteurs en acheteurs confiants avec un Product Recommendation Quiz qui génère des ventes.",
  cta_install_shopify: "installer sur Shopify",
  cta_get_woocommerce: "obtenir pour WooCommerce",
  trial_note: "Offre gratuite disponible · essai gratuit de 15 jours · garantie de remboursement de 30 jours",
  pillars: [
    {
      image: PILLAR_IMAGES.recommend,
      title: "Recommandez les bons produits",
      body: "Les quiz shoppables génèrent des ventes, aident vos clients à trouver les produits qui leur conviennent et leur permettent d'acheter en toute confiance.",
    },
    {
      image: PILLAR_IMAGES.know,
      title: "Connaissez vos clients",
      body: "Les quiz vous permettent de collecter des données exploitables en posant des questions ciblées. Segmentez et taguez vos clients selon leurs réponses.",
    },
    {
      image: PILLAR_IMAGES.grow,
      title: "Développez votre audience",
      body: "Envoyez les leads collectés vers votre liste de diffusion ou votre CRM. Exploitez les données de profil pour créer des campagnes plus personnalisées et plus rentables.",
    },
  ],
  compare_h2: "Comment nous nous comparons",
  compare_sub:
    "RevenueHunt vs. Octane AI vs. Quiz Kit : les fonctionnalités qui comptent pour les boutiques e-commerce sérieuses.",
  compare_col_feature: "Fonctionnalité",
  compare_rows: [
    "Intégration Klaviyo / Mailchimp",
    "Logique conditionnelle / de branchement",
    "Créateur de quiz IA (configuration en 60 secondes)",
    "Built for Shopify",
    "Analyse des abandons",
    "WooCommerce et autres plateformes",
    "Offre gratuite disponible",
  ],
  compare_starting_price: "Prix de départ",
  compare_free: "Gratuit",
  compare_note: "Comparaison basée sur les informations publiques disponibles en 2026.",
  platforms_h2: "Disponible sur toutes les plateformes",
  platforms_sub:
    "Pas sur {platform} ? Le quiz de recommandation de produits de RevenueHunt fonctionne partout où vous vendez : choisissez votre stack.",
  platforms_card_title: "Quiz de recommandation de produits pour {platform}",
  platforms_card_cta: "Voir la page {platform}",
  industry_h2: "Un quiz pour votre secteur",
  industry_sub:
    "Quelle que soit votre façon de vendre sur {platform}, créez le quiz adapté à votre catalogue. Explorez les solutions par secteur et type de quiz.",
  industry_view: "Voir la solution",
  industry_see_all: "Voir toutes les solutions de quiz",
  reviews_heading: "Noté {rating} par les marchands {platform}",
  reviews_default_heading: "Ce que disent les marchands",
  reviews_from: "à partir de {count} avis sur {source}",
  plans_enterprise:
    "Grande marque ? On s'occupe de vous. Obtenez un Plan Enterprise sur mesure à partir de {price} pour des réponses de quiz illimitées.",
  plans_enterprise_cta: "Réservez un appel stratégique",
  cta_labels: {
    "install on Shopify": "installer sur Shopify",
    "view demo store": "voir la boutique démo",
    "download the plugin": "télécharger le plugin",
    "install on BigCommerce": "installer sur BigCommerce",
    "sign up": "s'inscrire",
    "use the standalone solution": "utiliser la solution autonome",
    "use on Shopify instead": "utiliser sur Shopify",
    "get started free": "commencer gratuitement",
    "see quiz templates": "voir les modèles de quiz",
    "get for Shopify": "obtenir pour Shopify",
    "get for WooCommerce": "obtenir pour WooCommerce",
  },
  sibling_taglines: {
    [SLUGS.shopify]: "App Shopify native, offre gratuite, installation instantanée",
    [SLUGS.woocommerce]: "Plugin WordPress auto-hébergé, sans abonnement mensuel",
    [SLUGS.bigcommerce]: "App BigCommerce native avec synchronisation catalogue avancée",
    [SLUGS.wix]: "Intégration via script universel : fonctionne sur toute boutique Wix",
    [SLUGS.squarespace]: "Intégration via script universel : fonctionne sur tout site Squarespace",
    [SLUGS.magento]: "Solution hébergée autonome, sans extension Magento requise",
    [SLUGS.standalone]:
      "Indépendant de la plateforme : fonctionne avec Google Product Feed, sans intégration boutique",
    [SLUGS.pos]: "Quiz en magasin sur tablettes POS iPad / Android",
    [SLUGS.all]: "La vue d'ensemble toutes plateformes : commencez ici si vous comparez les options",
  },
};

export const CHROME = { en, es, fr } satisfies Record<Lang, Chrome>;

/** Fill {platform} / {rating} placeholders. */
export function fill(tpl: string, vars: Record<string, string>): string {
  return tpl.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? `{${k}}`);
}
