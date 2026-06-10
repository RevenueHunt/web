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
  cta_h2: "Convierte a tus compradores en clientes seguros con un Quiz de recomendación de productos que impulsa las ventas.",
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
  cta_h2: "Transformez vos visiteurs en acheteurs confiants avec un Quiz de recommandation de produits qui génère des ventes.",
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

const de: Chrome = {
  rc_heading: "Kostenlose Tools & Daten",
  rc_sub: "Setze diese Benchmarks in deinem eigenen Shop ein.",
  rc_roi_eyebrow: "Kostenloses Tool",
  rc_roi_title: "Quiz-ROI-Rechner",
  rc_roi_blurb:
    "Schätze den zusätzlichen Umsatz und ROI, den ein Produktempfehlungs-Quiz deinem Shop bringen kann. Auf echten Daten basierend, ohne E-Mail.",
  rc_roi_cta: "Berechne deinen ROI",
  rc_report_eyebrow: "Kostenloser Report",
  rc_report_title: "E-Commerce-Quiz-Benchmark-Report",
  rc_report_blurb:
    "Wie Produktempfehlungs-Quizze wirklich abschneiden: Conversion nach Kategorie, AOV-Steigerung und Abschlussrate, aus über 45 Mio. echten Quiz-Antworten.",
  rc_report_cta: "Report lesen",
  cta_kicker: "Die meisten Käufer gehen, weil sie das passende Produkt nicht finden",
  cta_h2: "Mach aus Käufern überzeugte Kunden mit einem Produktempfehlungs-Quiz, das den Umsatz steigert.",
  cta_install_shopify: "auf Shopify installieren",
  cta_get_woocommerce: "für WooCommerce holen",
  trial_note: "Kostenloser Plan verfügbar · 15 Tage kostenlos testen · 30 Tage Geld-zurück-Garantie",
  pillars: [
    {
      image: PILLAR_IMAGES.recommend,
      title: "Empfiehl die richtigen Produkte",
      body: "Shoppable Quizzes steigern den Umsatz, beraten Kunden bei der Suche nach den passenden Produkten und helfen ihnen, sichere Kaufentscheidungen zu treffen.",
    },
    {
      image: PILLAR_IMAGES.know,
      title: "Lerne deine Kunden kennen",
      body: "Quizzes liefern dir verwertbare Daten, indem sie deinen Kunden gezielte Fragen stellen. Segmentiere und tagge deine Käufer anhand ihrer Antworten.",
    },
    {
      image: PILLAR_IMAGES.grow,
      title: "Lass deine Audience wachsen",
      body: "Sende erfasste Leads an deine Mailingliste oder dein CRM. Nutze Kundenprofildaten für persönlichere Marketingkampagnen mit höherem ROI.",
    },
  ],
  compare_h2: "So schneiden wir ab",
  compare_sub:
    "RevenueHunt vs. Octane AI vs. Quiz Kit - die Funktionen, die für seriöse eCommerce-Shops zählen.",
  compare_col_feature: "Funktion",
  compare_rows: [
    "Klaviyo / Mailchimp Integration",
    "Bedingte / verzweigte Logik",
    "KI-Quiz-Builder (Einrichtung in 60 Sekunden)",
    "Built for Shopify",
    "Drop-off-Analytics",
    "WooCommerce & andere Plattformen",
    "Kostenloser Plan verfügbar",
  ],
  compare_starting_price: "Startpreis",
  compare_free: "Kostenlos",
  compare_note: "Vergleich basierend auf öffentlich verfügbaren Informationen Stand 2026.",
  platforms_h2: "Für jede Plattform verfügbar",
  platforms_sub:
    "Nicht auf {platform}? Das Produktempfehlungs-Quiz von RevenueHunt funktioniert überall, wo du verkaufst - wähle deinen Stack.",
  platforms_card_title: "Produktempfehlungs-Quiz für {platform}",
  platforms_card_cta: "{platform}-Seite ansehen",
  industry_h2: "Ein Quiz für deine Branche",
  industry_sub:
    "Egal wie du auf {platform} verkaufst, baue das Quiz, das zu deinem Katalog passt. Entdecke Lösungen nach Branche und Quiz-Typ.",
  industry_view: "Lösung ansehen",
  industry_see_all: "Alle Quiz-Lösungen ansehen",
  reviews_heading: "Mit {rating} von {platform}-Händlern bewertet",
  reviews_default_heading: "Was Händler sagen",
  reviews_from: "aus {count} Bewertungen auf {source}",
  plans_enterprise:
    "Große Marke? Wir haben dich abgedeckt. Hol dir einen maßgeschneiderten Enterprise-Plan ab {price} für unbegrenzte Quiz-Antworten.",
  plans_enterprise_cta: "Strategiegespräch buchen",
  cta_labels: {
    "install on Shopify": "auf Shopify installieren",
    "view demo store": "Demo-Shop ansehen",
    "download the plugin": "Plugin herunterladen",
    "install on BigCommerce": "auf BigCommerce installieren",
    "sign up": "registrieren",
    "use the standalone solution": "Standalone-Lösung nutzen",
    "use on Shopify instead": "stattdessen auf Shopify nutzen",
    "get started free": "kostenlos loslegen",
    "see quiz templates": "Quiz-Vorlagen ansehen",
    "get for Shopify": "für Shopify holen",
    "get for WooCommerce": "für WooCommerce holen",
  },
  sibling_taglines: {
    [SLUGS.shopify]: "Native Shopify-App, kostenloser Plan, sofortige Installation",
    [SLUGS.woocommerce]: "Selbst gehostetes WordPress-Plugin, ohne monatliche Gebühr",
    [SLUGS.bigcommerce]: "Native BigCommerce-App mit tiefer Katalogsynchronisation",
    [SLUGS.wix]: "Einbindung per Universalskript - funktioniert in jedem Wix-Shop",
    [SLUGS.squarespace]: "Einbindung per Universalskript - funktioniert auf jeder Squarespace-Site",
    [SLUGS.magento]: "Eigenständige gehostete Lösung, keine Magento-Erweiterung nötig",
    [SLUGS.standalone]:
      "Plattformunabhängig - läuft mit Google Product Feed, ohne Shop-Integration",
    [SLUGS.pos]: "In-Store-Quizzes auf iPad- / Android-POS-Tablets",
    [SLUGS.all]: "Der Überblick über alle Plattformen - starte hier, wenn du Optionen vergleichst",
  },
};

const pt: Chrome = {
  rc_heading: "Ferramentas e dados grátis",
  rc_sub: "Põe estes benchmarks a trabalhar na tua própria loja.",
  rc_roi_eyebrow: "Ferramenta grátis",
  rc_roi_title: "Calculadora de ROI do quiz",
  rc_roi_blurb:
    "Calcula a receita extra e o ROI que um Quiz de recomendação de produtos pode trazer à tua loja. Baseado em dados reais, sem email necessário.",
  rc_roi_cta: "Calcula o teu ROI",
  rc_report_eyebrow: "Relatório grátis",
  rc_report_title: "Relatório benchmark de quizzes de e-commerce",
  rc_report_blurb:
    "Como os Quizzes de recomendação de produtos realmente funcionam: conversão por categoria, aumento do AOV e taxa de conclusão, a partir de mais de 45M de respostas reais.",
  rc_report_cta: "Ler o relatório",
  cta_kicker: "A maioria dos compradores sai porque não encontra o produto certo",
  cta_h2: "Transforma compradores em clientes confiantes com um Quiz de recomendação de produtos que impulsiona as vendas.",
  cta_install_shopify: "instalar no Shopify",
  cta_get_woocommerce: "obter para WooCommerce",
  trial_note: "Plano grátis disponível · 15 dias de teste grátis · garantia de devolução de 30 dias",
  pillars: [
    {
      image: PILLAR_IMAGES.recommend,
      title: "Recomenda os produtos certos",
      body: "Os quizzes shoppable impulsionam as vendas, ajudam os clientes a encontrar os produtos ideais para eles e permitem-lhes tomar decisões de compra com confiança.",
    },
    {
      image: PILLAR_IMAGES.know,
      title: "Conhece os teus clientes",
      body: "Os quizzes permitem-te recolher dados acionáveis fazendo perguntas específicas aos teus clientes. Segmenta e etiqueta os teus compradores com base nas respostas.",
    },
    {
      image: PILLAR_IMAGES.grow,
      title: "Faz crescer a tua audiência",
      body: "Envia os leads captados para a tua lista de email ou CRM. Aproveita os dados de perfil do cliente para criar campanhas de marketing mais personalizadas e com maior ROI.",
    },
  ],
  compare_h2: "Como nos comparamos",
  compare_sub:
    "RevenueHunt vs. Octane AI vs. Quiz Kit - as funcionalidades que importam para lojas de eCommerce sérias.",
  compare_col_feature: "Funcionalidade",
  compare_rows: [
    "Integração com Klaviyo / Mailchimp",
    "Lógica condicional / de ramificação",
    "Construtor de quiz com IA (configuração em 60 segundos)",
    "Built for Shopify",
    "Análise de abandono",
    "WooCommerce e outras plataformas",
    "Plano grátis disponível",
  ],
  compare_starting_price: "Preço inicial",
  compare_free: "Grátis",
  compare_note: "Comparação baseada em informação pública disponível em 2026.",
  platforms_h2: "Disponível para todas as plataformas",
  platforms_sub:
    "Não usas {platform}? O Quiz de recomendação de produtos da RevenueHunt funciona onde quer que vendas - escolhe o teu stack.",
  platforms_card_title: "Quiz de recomendação de produtos para {platform}",
  platforms_card_cta: "Ver página de {platform}",
  industry_h2: "Um quiz para o teu setor",
  industry_sub:
    "Sejas qual for a forma como vendes no {platform}, cria o quiz que encaixa no teu catálogo. Explora soluções por setor e tipo de quiz.",
  industry_view: "Ver solução",
  industry_see_all: "Ver todas as soluções de quiz",
  reviews_heading: "Avaliado com {rating} por comerciantes de {platform}",
  reviews_default_heading: "O que dizem os comerciantes",
  reviews_from: "de {count} avaliações em {source}",
  plans_enterprise:
    "Marca grande? Temos tudo o que precisas. Obtém um Plano Enterprise à medida a partir de {price} para respostas de quiz ilimitadas.",
  plans_enterprise_cta: "Agendar uma chamada de estratégia",
  cta_labels: {
    "install on Shopify": "instalar no Shopify",
    "view demo store": "ver loja demo",
    "download the plugin": "descarregar o plugin",
    "install on BigCommerce": "instalar no BigCommerce",
    "sign up": "regista-te",
    "use the standalone solution": "usar a solução autónoma",
    "use on Shopify instead": "usar no Shopify",
    "get started free": "começa grátis",
    "see quiz templates": "ver modelos de quiz",
    "get for Shopify": "obter para Shopify",
    "get for WooCommerce": "obter para WooCommerce",
  },
  sibling_taglines: {
    [SLUGS.shopify]: "App nativa do Shopify, plano grátis, instalação instantânea",
    [SLUGS.woocommerce]: "Plugin WordPress self-hosted, sem mensalidade",
    [SLUGS.bigcommerce]: "App nativa do BigCommerce com sincronização profunda do catálogo",
    [SLUGS.wix]: "Integra via script universal - funciona em qualquer loja Wix",
    [SLUGS.squarespace]: "Integra via script universal - funciona em qualquer site Squarespace",
    [SLUGS.magento]: "Solução alojada autónoma, sem extensão Magento necessária",
    [SLUGS.standalone]:
      "Independente da plataforma - funciona com Google Product Feed, sem integração com a loja",
    [SLUGS.pos]: "Quizzes na loja em tablets POS iPad / Android",
    [SLUGS.all]: "A visão geral de todas as plataformas - começa aqui se estás a comparar opções",
  },
};

const it: Chrome = {
  rc_heading: "Strumenti e dati gratuiti",
  rc_sub: "Metti questi benchmark al lavoro nel tuo negozio.",
  rc_roi_eyebrow: "Strumento gratuito",
  rc_roi_title: "Calcolatore di ROI del quiz",
  rc_roi_blurb:
    "Stima il fatturato extra e il ROI che un Quiz di raccomandazione dei prodotti può portare al tuo negozio. Basato su dati reali, senza email richiesta.",
  rc_roi_cta: "Calcola il tuo ROI",
  rc_report_eyebrow: "Report gratuito",
  rc_report_title: "Report benchmark dei quiz e-commerce",
  rc_report_blurb:
    "Come performano davvero i Quiz di raccomandazione dei prodotti: conversione per categoria, aumento dell'AOV e tasso di completamento, da oltre 45M di risposte reali.",
  rc_report_cta: "Leggi il report",
  cta_kicker: "La maggior parte dei clienti se ne va perché non trova il prodotto giusto",
  cta_h2: "Trasforma i clienti in acquirenti sicuri con un Quiz di raccomandazione dei prodotti che fa crescere le vendite.",
  cta_install_shopify: "installa su Shopify",
  cta_get_woocommerce: "ottieni per WooCommerce",
  trial_note: "Piano gratuito disponibile · 15 giorni di prova gratuita · garanzia di rimborso di 30 giorni",
  pillars: [
    {
      image: PILLAR_IMAGES.recommend,
      title: "Consiglia i prodotti giusti",
      body: "I quiz shoppable fanno crescere le vendite, guidano i clienti nella ricerca dei prodotti ideali per loro e li aiutano a fare scelte d'acquisto sicure.",
    },
    {
      image: PILLAR_IMAGES.know,
      title: "Conosci i tuoi clienti",
      body: "I quiz ti permettono di raccogliere dati utili ponendo domande mirate ai tuoi clienti. Segmenta e tagga i tuoi clienti in base alle loro risposte.",
    },
    {
      image: PILLAR_IMAGES.grow,
      title: "Fai crescere la tua audience",
      body: "Invia i lead raccolti alla tua mailing list o al tuo CRM. Sfrutta i dati del profilo cliente per creare campagne marketing più personalizzate e con ROI più alto.",
    },
  ],
  compare_h2: "Come ci confrontiamo",
  compare_sub:
    "RevenueHunt vs. Octane AI vs. Quiz Kit - le funzionalità che contano per gli store eCommerce seri.",
  compare_col_feature: "Funzionalità",
  compare_rows: [
    "Integrazione con Klaviyo / Mailchimp",
    "Logica condizionale / di ramificazione",
    "Builder di quiz con IA (configurazione in 60 secondi)",
    "Built for Shopify",
    "Analisi degli abbandoni",
    "WooCommerce e altre piattaforme",
    "Piano gratuito disponibile",
  ],
  compare_starting_price: "Prezzo di partenza",
  compare_free: "Gratuito",
  compare_note: "Confronto basato su informazioni pubblicamente disponibili al 2026.",
  platforms_h2: "Disponibile per ogni piattaforma",
  platforms_sub:
    "Non sei su {platform}? Il Quiz di raccomandazione dei prodotti di RevenueHunt funziona ovunque tu venda - scegli il tuo stack.",
  platforms_card_title: "Quiz di raccomandazione dei prodotti per {platform}",
  platforms_card_cta: "Vedi la pagina {platform}",
  industry_h2: "Un quiz per il tuo settore",
  industry_sub:
    "Comunque tu venda su {platform}, crea il quiz adatto al tuo catalogo. Esplora le soluzioni per settore e tipo di quiz.",
  industry_view: "Vedi soluzione",
  industry_see_all: "Vedi tutte le soluzioni di quiz",
  reviews_heading: "Valutato {rating} dai merchant {platform}",
  reviews_default_heading: "Cosa dicono i merchant",
  reviews_from: "da {count} recensioni su {source}",
  plans_enterprise:
    "Brand grande? Ci pensiamo noi. Ottieni un Piano Enterprise su misura a partire da {price} per risposte di quiz illimitate.",
  plans_enterprise_cta: "Prenota una call strategica",
  cta_labels: {
    "install on Shopify": "installa su Shopify",
    "view demo store": "vedi lo store demo",
    "download the plugin": "scarica il plugin",
    "install on BigCommerce": "installa su BigCommerce",
    "sign up": "registrati",
    "use the standalone solution": "usa la soluzione standalone",
    "use on Shopify instead": "usa su Shopify",
    "get started free": "inizia gratis",
    "see quiz templates": "vedi i template di quiz",
    "get for Shopify": "ottieni per Shopify",
    "get for WooCommerce": "ottieni per WooCommerce",
  },
  sibling_taglines: {
    [SLUGS.shopify]: "App Shopify nativa, piano gratuito, installazione istantanea",
    [SLUGS.woocommerce]: "Plugin WordPress self-hosted, senza canone mensile",
    [SLUGS.bigcommerce]: "App BigCommerce nativa con sincronizzazione approfondita del catalogo",
    [SLUGS.wix]: "Integrazione via script universale - funziona su qualsiasi store Wix",
    [SLUGS.squarespace]: "Integrazione via script universale - funziona su qualsiasi sito Squarespace",
    [SLUGS.magento]: "Soluzione hosted standalone, senza estensione Magento necessaria",
    [SLUGS.standalone]:
      "Indipendente dalla piattaforma - funziona con Google Product Feed, senza integrazione con lo store",
    [SLUGS.pos]: "Quiz in negozio su tablet POS iPad / Android",
    [SLUGS.all]: "La panoramica di tutte le piattaforme - parti da qui se stai confrontando le opzioni",
  },
};

const nl: Chrome = {
  rc_heading: "Gratis tools & data",
  rc_sub: "Zet deze benchmarks aan het werk in je eigen store.",
  rc_roi_eyebrow: "Gratis tool",
  rc_roi_title: "Quiz ROI-calculator",
  rc_roi_blurb:
    "Bereken de extra omzet en ROI die een productaanbevelingsquiz aan je store kan toevoegen. Gebaseerd op echte data, geen e-mail nodig.",
  rc_roi_cta: "Bereken je ROI",
  rc_report_eyebrow: "Gratis rapport",
  rc_report_title: "Benchmarkrapport ecommerce-quiz",
  rc_report_blurb:
    "Hoe productaanbevelingsquizzen echt presteren: conversie per categorie, AOV-stijging en voltooiing, op basis van 45M+ echte quizantwoorden.",
  rc_report_cta: "Lees het rapport",
  cta_kicker: "De meeste shoppers haken af omdat ze het juiste product niet kunnen vinden",
  cta_h2: "Maak van shoppers zelfverzekerde kopers met een productaanbevelingsquiz die verkoop stimuleert.",
  cta_install_shopify: "installeer op Shopify",
  cta_get_woocommerce: "haal voor WooCommerce",
  trial_note: "Gratis plan beschikbaar · 15 dagen gratis proberen · 30 dagen niet-goed-geld-terug",
  pillars: [
    {
      image: PILLAR_IMAGES.recommend,
      title: "Beveel de juiste producten aan",
      body: "Shoppable quizzen stimuleren verkoop, helpen klanten de juiste producten voor hen te vinden en geven ze het vertrouwen om aan te kopen.",
    },
    {
      image: PILLAR_IMAGES.know,
      title: "Ken je klanten",
      body: "Quizzen laten je bruikbare data verzamelen door gerichte vragen aan je klanten te stellen. Segmenteer en label je shoppers op basis van hun antwoorden.",
    },
    {
      image: PILLAR_IMAGES.grow,
      title: "Laat je publiek groeien",
      body: "Stuur verzamelde leads naar je mailinglijst of CRM. Gebruik klantprofieldata om persoonlijkere marketingcampagnes met hogere ROI te maken.",
    },
  ],
  compare_h2: "Hoe wij ons verhouden",
  compare_sub:
    "RevenueHunt vs. Octane AI vs. Quiz Kit - de functies die ertoe doen voor serieuze eCommerce-stores.",
  compare_col_feature: "Functie",
  compare_rows: [
    "Klaviyo / Mailchimp integratie",
    "Conditionele / vertakkende logica",
    "AI-quizbuilder (setup in 60 seconden)",
    "Built for Shopify",
    "Drop-off analytics",
    "WooCommerce & andere platforms",
    "Gratis plan beschikbaar",
  ],
  compare_starting_price: "Startprijs",
  compare_free: "Gratis",
  compare_note: "Vergelijking op basis van openbaar beschikbare informatie per 2026.",
  platforms_h2: "Beschikbaar voor elk platform",
  platforms_sub:
    "Niet op {platform}? De productaanbevelingsquiz van RevenueHunt werkt overal waar je verkoopt - kies je stack.",
  platforms_card_title: "Productaanbevelingsquiz voor {platform}",
  platforms_card_cta: "Bekijk {platform}-pagina",
  industry_h2: "Een quiz voor jouw branche",
  industry_sub:
    "Hoe je ook verkoopt op {platform}, bouw de quiz die bij je catalogus past. Ontdek oplossingen per branche en quiztype.",
  industry_view: "Bekijk oplossing",
  industry_see_all: "Bekijk alle quizoplossingen",
  reviews_heading: "Beoordeeld met {rating} door {platform}-merchants",
  reviews_default_heading: "Wat merchants zeggen",
  reviews_from: "uit {count} reviews op {source}",
  plans_enterprise:
    "Groot merk? Wij hebben je gedekt. Krijg een Enterprise-plan op maat vanaf {price} voor onbeperkte quizantwoorden.",
  plans_enterprise_cta: "Boek een strategiegesprek",
  cta_labels: {
    "install on Shopify": "installeer op Shopify",
    "view demo store": "bekijk demostore",
    "download the plugin": "download de plugin",
    "install on BigCommerce": "installeer op BigCommerce",
    "sign up": "aanmelden",
    "use the standalone solution": "gebruik de standalone-oplossing",
    "use on Shopify instead": "gebruik op Shopify",
    "get started free": "begin gratis",
    "see quiz templates": "bekijk quiztemplates",
    "get for Shopify": "haal voor Shopify",
    "get for WooCommerce": "haal voor WooCommerce",
  },
  sibling_taglines: {
    [SLUGS.shopify]: "Native Shopify-app, gratis plan, directe installatie",
    [SLUGS.woocommerce]: "Self-hosted WordPress-plugin, geen maandelijkse kosten",
    [SLUGS.bigcommerce]: "Native BigCommerce-app met diepe catalogussynchronisatie",
    [SLUGS.wix]: "Insluiten via universeel script - werkt op elke Wix-store",
    [SLUGS.squarespace]: "Insluiten via universeel script - werkt op elke Squarespace-site",
    [SLUGS.magento]: "Standalone gehoste oplossing, geen Magento-extensie nodig",
    [SLUGS.standalone]:
      "Platformonafhankelijk - draait op Google Product Feed, geen store-integratie nodig",
    [SLUGS.pos]: "In-store quizzen op iPad / Android POS-tablets",
    [SLUGS.all]: "Het overzicht van alle platforms - begin hier als je opties vergelijkt",
  },
};

const sv: Chrome = {
  rc_heading: "Gratis verktyg & data",
  rc_sub: "Sätt dessa benchmarks i arbete i din egen butik.",
  rc_roi_eyebrow: "Gratis verktyg",
  rc_roi_title: "ROI-kalkylator för quiz",
  rc_roi_blurb:
    "Uppskatta den extra intäkten och ROI som en produktrekommendationsquiz kan ge din butik. Byggd på riktig data, ingen e-post krävs.",
  rc_roi_cta: "Beräkna din ROI",
  rc_report_eyebrow: "Gratis rapport",
  rc_report_title: "Benchmarkrapport för e-handelsquiz",
  rc_report_blurb:
    "Hur produktrekommendationsquizar faktiskt presterar: konvertering per kategori, AOV-ökning och slutförande, från 45M+ riktiga quizsvar.",
  rc_report_cta: "Läs rapporten",
  cta_kicker: "De flesta shoppare lämnar för att de inte hittar rätt produkt",
  cta_h2: "Förvandla shoppare till självsäkra köpare med en produktrekommendationsquiz som driver försäljning.",
  cta_install_shopify: "installera på Shopify",
  cta_get_woocommerce: "hämta för WooCommerce",
  trial_note: "Gratisplan tillgänglig · 15 dagars gratis testperiod · 30 dagars pengarna-tillbaka-garanti",
  pillars: [
    {
      image: PILLAR_IMAGES.recommend,
      title: "Rekommendera rätt produkter",
      body: "Shoppable quizar driver försäljning, vägleder kunder att hitta rätt produkter för dem och hjälper dem att fatta trygga köpbeslut.",
    },
    {
      image: PILLAR_IMAGES.know,
      title: "Lär känna dina kunder",
      body: "Quizar låter dig samla in användbar data genom att ställa riktade frågor till dina kunder. Segmentera och tagga dina shoppare utifrån deras svar.",
    },
    {
      image: PILLAR_IMAGES.grow,
      title: "Få din publik att växa",
      body: "Skicka insamlade leads till din e-postlista eller ditt CRM. Använd kundprofildata för att skapa mer personliga marknadsföringskampanjer med högre ROI.",
    },
  ],
  compare_h2: "Hur vi står oss",
  compare_sub:
    "RevenueHunt vs. Octane AI vs. Quiz Kit - funktionerna som spelar roll för seriösa eCommerce-butiker.",
  compare_col_feature: "Funktion",
  compare_rows: [
    "Klaviyo / Mailchimp-integration",
    "Villkorlig / förgrenande logik",
    "AI-quizbyggare (60 sekunders setup)",
    "Built for Shopify",
    "Drop-off-analys",
    "WooCommerce & andra plattformar",
    "Gratisplan tillgänglig",
  ],
  compare_starting_price: "Startpris",
  compare_free: "Gratis",
  compare_note: "Jämförelse baserad på offentligt tillgänglig information per 2026.",
  platforms_h2: "Tillgänglig för alla plattformar",
  platforms_sub:
    "Inte på {platform}? RevenueHunts produktrekommendationsquiz fungerar var du än säljer - välj din stack.",
  platforms_card_title: "Produktrekommendationsquiz för {platform}",
  platforms_card_cta: "Se {platform}-sidan",
  industry_h2: "En quiz för din bransch",
  industry_sub:
    "Hur du än säljer på {platform}, bygg quizen som passar din katalog. Utforska lösningar per bransch och quiztyp.",
  industry_view: "Se lösning",
  industry_see_all: "Se alla quizlösningar",
  reviews_heading: "Betygsatt {rating} av {platform}-handlare",
  reviews_default_heading: "Vad handlare säger",
  reviews_from: "från {count} recensioner på {source}",
  plans_enterprise:
    "Stort varumärke? Vi har dig täckt. Få en skräddarsydd Enterprise-plan från {price} för obegränsade quizsvar.",
  plans_enterprise_cta: "Boka ett strategisamtal",
  cta_labels: {
    "install on Shopify": "installera på Shopify",
    "view demo store": "se demobutik",
    "download the plugin": "ladda ner pluginet",
    "install on BigCommerce": "installera på BigCommerce",
    "sign up": "registrera dig",
    "use the standalone solution": "använd den fristående lösningen",
    "use on Shopify instead": "använd på Shopify istället",
    "get started free": "kom igång gratis",
    "see quiz templates": "se quizmallar",
    "get for Shopify": "hämta för Shopify",
    "get for WooCommerce": "hämta för WooCommerce",
  },
  sibling_taglines: {
    [SLUGS.shopify]: "Native Shopify-app, gratisplan, omedelbar installation",
    [SLUGS.woocommerce]: "Självhostat WordPress-plugin, ingen månadsavgift",
    [SLUGS.bigcommerce]: "Native BigCommerce-app med djup katalogsynkronisering",
    [SLUGS.wix]: "Bädda in via universellt skript - fungerar i alla Wix-butiker",
    [SLUGS.squarespace]: "Bädda in via universellt skript - fungerar på alla Squarespace-sajter",
    [SLUGS.magento]: "Fristående hostad lösning, ingen Magento-tillägg krävs",
    [SLUGS.standalone]:
      "Plattformsoberoende - körs på Google Product Feed, ingen butiksintegration behövs",
    [SLUGS.pos]: "Butiksquizar på iPad / Android POS-plattor",
    [SLUGS.all]: "Översikten över alla plattformar - börja här om du jämför alternativ",
  },
};

const fi: Chrome = {
  rc_heading: "Ilmaiset työkalut & data",
  rc_sub: "Laita nämä benchmarkit töihin omassa kaupassasi.",
  rc_roi_eyebrow: "Ilmainen työkalu",
  rc_roi_title: "Kyselyn ROI-laskuri",
  rc_roi_blurb:
    "Arvioi lisätuotto ja ROI, jonka tuotesuosittelukysely voi tuoda kauppaasi. Rakennettu oikealle datalle, sähköpostia ei vaadita.",
  rc_roi_cta: "Laske ROI:si",
  rc_report_eyebrow: "Ilmainen raportti",
  rc_report_title: "Verkkokaupan kyselyn benchmark-raportti",
  rc_report_blurb:
    "Miten tuotesuosittelukyselyt todella suoriutuvat: konversio kategorioittain, AOV:n nousu ja loppuun saattaminen, yli 45M:stä todellisesta kyselyvastauksesta.",
  rc_report_cta: "Lue raportti",
  cta_kicker: "Suurin osa ostajista lähtee, koska ei löydä oikeaa tuotetta",
  cta_h2: "Muuta ostajat itsevarmoiksi ostajiksi tuotesuosittelukyselyllä, joka kasvattaa myyntiä.",
  cta_install_shopify: "asenna Shopifyyn",
  cta_get_woocommerce: "hanki WooCommerceen",
  trial_note: "Ilmainen suunnitelma saatavilla · 15 päivän ilmainen kokeilu · 30 päivän rahat takaisin -takuu",
  pillars: [
    {
      image: PILLAR_IMAGES.recommend,
      title: "Suosittele oikeita tuotteita",
      body: "Shoppable-kyselyt kasvattavat myyntiä, opastavat asiakkaita löytämään heille sopivat tuotteet ja auttavat heitä tekemään varmoja ostopäätöksiä.",
    },
    {
      image: PILLAR_IMAGES.know,
      title: "Tunne asiakkaasi",
      body: "Kyselyt antavat sinun kerätä hyödyllistä dataa esittämällä asiakkaillesi kohdennettuja kysymyksiä. Segmentoi ja merkitse ostajasi heidän vastaustensa perusteella.",
    },
    {
      image: PILLAR_IMAGES.grow,
      title: "Kasvata yleisöäsi",
      body: "Lähetä kerätyt liidit sähköpostilistallesi tai CRM:ään. Hyödynnä asiakasprofiilidataa luodaksesi henkilökohtaisempia ja paremman ROI:n markkinointikampanjoita.",
    },
  ],
  compare_h2: "Miten pärjäämme vertailussa",
  compare_sub:
    "RevenueHunt vs. Octane AI vs. Quiz Kit - ominaisuudet, joilla on merkitystä vakaville eCommerce-kaupoille.",
  compare_col_feature: "Ominaisuus",
  compare_rows: [
    "Klaviyo / Mailchimp -integraatio",
    "Ehdollinen / haarautuva logiikka",
    "AI-kyselynrakentaja (60 sekunnin käyttöönotto)",
    "Built for Shopify",
    "Keskeytymisanalytiikka",
    "WooCommerce & muut alustat",
    "Ilmainen suunnitelma saatavilla",
  ],
  compare_starting_price: "Aloitushinta",
  compare_free: "Ilmainen",
  compare_note: "Vertailu perustuu julkisesti saatavilla olevaan tietoon vuonna 2026.",
  platforms_h2: "Saatavilla jokaiselle alustalle",
  platforms_sub:
    "Et ole {platform}-alustalla? RevenueHuntin tuotesuosittelukysely toimii missä tahansa myytkin - valitse stackisi.",
  platforms_card_title: "Tuotesuosittelukysely alustalle {platform}",
  platforms_card_cta: "Katso {platform}-sivu",
  industry_h2: "Kysely toimialallesi",
  industry_sub:
    "Miten ikinä myytkin {platform}-alustalla, rakenna kysely, joka sopii luettelollesi. Tutustu ratkaisuihin toimialan ja kyselytyypin mukaan.",
  industry_view: "Katso ratkaisu",
  industry_see_all: "Katso kaikki kyselyratkaisut",
  reviews_heading: "Arvioitu {rating} {platform}-kauppiaiden toimesta",
  reviews_default_heading: "Mitä kauppiaat sanovat",
  reviews_from: "{count} arviosta lähteessä {source}",
  plans_enterprise:
    "Iso brändi? Hoidamme homman. Hanki räätälöity Enterprise-suunnitelma alkaen {price} rajattomille kyselyvastauksille.",
  plans_enterprise_cta: "Varaa strategiapuhelu",
  cta_labels: {
    "install on Shopify": "asenna Shopifyyn",
    "view demo store": "katso demokauppa",
    "download the plugin": "lataa lisäosa",
    "install on BigCommerce": "asenna BigCommerceen",
    "sign up": "rekisteröidy",
    "use the standalone solution": "käytä itsenäistä ratkaisua",
    "use on Shopify instead": "käytä Shopifyssa",
    "get started free": "aloita ilmaiseksi",
    "see quiz templates": "katso kyselymallit",
    "get for Shopify": "hanki Shopifyyn",
    "get for WooCommerce": "hanki WooCommerceen",
  },
  sibling_taglines: {
    [SLUGS.shopify]: "Natiivi Shopify-sovellus, ilmainen suunnitelma, välitön asennus",
    [SLUGS.woocommerce]: "Itse isännöity WordPress-lisäosa, ei kuukausimaksua",
    [SLUGS.bigcommerce]: "Natiivi BigCommerce-sovellus syvällä luettelon synkronoinnilla",
    [SLUGS.wix]: "Upota universaalilla skriptillä - toimii missä tahansa Wix-kaupassa",
    [SLUGS.squarespace]: "Upota universaalilla skriptillä - toimii millä tahansa Squarespace-sivustolla",
    [SLUGS.magento]: "Itsenäinen isännöity ratkaisu, ei Magento-laajennusta tarvita",
    [SLUGS.standalone]:
      "Alustariippumaton - toimii Google Product Feedillä, ei kaupan integraatiota tarvita",
    [SLUGS.pos]: "Myymäläkyselyt iPad- / Android-POS-tableteilla",
    [SLUGS.all]: "Kaikkien alustojen yleiskatsaus - aloita tästä, jos vertailet vaihtoehtoja",
  },
};

const pl: Chrome = {
  rc_heading: "Darmowe narzędzia i dane",
  rc_sub: "Wykorzystaj te benchmarki we własnym sklepie.",
  rc_roi_eyebrow: "Darmowe narzędzie",
  rc_roi_title: "Kalkulator ROI quizu",
  rc_roi_blurb:
    "Oszacuj dodatkowy przychód i ROI, jakie quiz rekomendacji produktów może przynieść Twojemu sklepowi. Oparty na prawdziwych danych, bez podawania e-maila.",
  rc_roi_cta: "Oblicz swoje ROI",
  rc_report_eyebrow: "Darmowy raport",
  rc_report_title: "Raport benchmark quizów e-commerce",
  rc_report_blurb:
    "Jak naprawdę działają quizy rekomendacji produktów: konwersja według kategorii, wzrost AOV i ukończenie, na podstawie ponad 45M prawdziwych odpowiedzi.",
  rc_report_cta: "Przeczytaj raport",
  cta_kicker: "Większość kupujących odchodzi, bo nie może znaleźć odpowiedniego produktu",
  cta_h2: "Zamień kupujących w pewnych siebie klientów dzięki quizowi rekomendacji produktów, który napędza sprzedaż.",
  cta_install_shopify: "zainstaluj na Shopify",
  cta_get_woocommerce: "pobierz dla WooCommerce",
  trial_note: "Darmowy plan dostępny · 15 dni darmowego okresu próbnego · 30-dniowa gwarancja zwrotu pieniędzy",
  pillars: [
    {
      image: PILLAR_IMAGES.recommend,
      title: "Polecaj odpowiednie produkty",
      body: "Quizy typu shoppable napędzają sprzedaż, pomagają klientom znaleźć odpowiednie dla nich produkty i podejmować pewne decyzje zakupowe.",
    },
    {
      image: PILLAR_IMAGES.know,
      title: "Poznaj swoich klientów",
      body: "Quizy pozwalają zbierać użyteczne dane, zadając klientom ukierunkowane pytania. Segmentuj i taguj kupujących na podstawie ich odpowiedzi.",
    },
    {
      image: PILLAR_IMAGES.grow,
      title: "Rozwijaj swoją publiczność",
      body: "Wysyłaj zebrane leady na listę mailingową lub do CRM. Wykorzystaj dane profilu klienta, aby tworzyć bardziej spersonalizowane kampanie marketingowe o wyższym ROI.",
    },
  ],
  compare_h2: "Jak wypadamy na tle innych",
  compare_sub:
    "RevenueHunt vs. Octane AI vs. Quiz Kit - funkcje, które mają znaczenie dla poważnych sklepów eCommerce.",
  compare_col_feature: "Funkcja",
  compare_rows: [
    "Integracja z Klaviyo / Mailchimp",
    "Logika warunkowa / rozgałęziająca",
    "Kreator quizów AI (konfiguracja w 60 sekund)",
    "Built for Shopify",
    "Analityka porzuceń",
    "WooCommerce i inne platformy",
    "Darmowy plan dostępny",
  ],
  compare_starting_price: "Cena początkowa",
  compare_free: "Za darmo",
  compare_note: "Porównanie na podstawie publicznie dostępnych informacji z 2026 roku.",
  platforms_h2: "Dostępny dla każdej platformy",
  platforms_sub:
    "Nie korzystasz z {platform}? Quiz rekomendacji produktów RevenueHunt działa wszędzie tam, gdzie sprzedajesz - wybierz swój stack.",
  platforms_card_title: "Quiz rekomendacji produktów dla {platform}",
  platforms_card_cta: "Zobacz stronę {platform}",
  industry_h2: "Quiz dla Twojej branży",
  industry_sub:
    "Niezależnie od tego, jak sprzedajesz na {platform}, zbuduj quiz dopasowany do Twojego katalogu. Poznaj rozwiązania według branży i typu quizu.",
  industry_view: "Zobacz rozwiązanie",
  industry_see_all: "Zobacz wszystkie rozwiązania quizowe",
  reviews_heading: "Oceniony na {rating} przez sprzedawców {platform}",
  reviews_default_heading: "Co mówią sprzedawcy",
  reviews_from: "z {count} recenzji na {source}",
  plans_enterprise:
    "Duża marka? Mamy to ogarnięte. Otrzymaj indywidualny plan Enterprise od {price} dla nieograniczonej liczby odpowiedzi w quizie.",
  plans_enterprise_cta: "Umów rozmowę strategiczną",
  cta_labels: {
    "install on Shopify": "zainstaluj na Shopify",
    "view demo store": "zobacz sklep demo",
    "download the plugin": "pobierz wtyczkę",
    "install on BigCommerce": "zainstaluj na BigCommerce",
    "sign up": "zarejestruj się",
    "use the standalone solution": "użyj samodzielnego rozwiązania",
    "use on Shopify instead": "użyj na Shopify",
    "get started free": "zacznij za darmo",
    "see quiz templates": "zobacz szablony quizów",
    "get for Shopify": "pobierz dla Shopify",
    "get for WooCommerce": "pobierz dla WooCommerce",
  },
  sibling_taglines: {
    [SLUGS.shopify]: "Natywna aplikacja Shopify, darmowy plan, natychmiastowa instalacja",
    [SLUGS.woocommerce]: "Samodzielnie hostowana wtyczka WordPress, bez opłaty miesięcznej",
    [SLUGS.bigcommerce]: "Natywna aplikacja BigCommerce z głęboką synchronizacją katalogu",
    [SLUGS.wix]: "Osadź przez uniwersalny skrypt - działa w każdym sklepie Wix",
    [SLUGS.squarespace]: "Osadź przez uniwersalny skrypt - działa na każdej stronie Squarespace",
    [SLUGS.magento]: "Samodzielne hostowane rozwiązanie, bez potrzeby rozszerzenia Magento",
    [SLUGS.standalone]:
      "Niezależny od platformy - działa na Google Product Feed, bez integracji ze sklepem",
    [SLUGS.pos]: "Quizy w sklepie na tabletach POS iPad / Android",
    [SLUGS.all]: "Przegląd wszystkich platform - zacznij tutaj, jeśli porównujesz opcje",
  },
};

const cs: Chrome = {
  rc_heading: "Nástroje a data zdarma",
  rc_sub: "Zapoj tyto benchmarky do práce ve svém vlastním obchodě.",
  rc_roi_eyebrow: "Nástroj zdarma",
  rc_roi_title: "Kalkulačka ROI kvízu",
  rc_roi_blurb:
    "Odhadni dodatečné tržby a ROI, které může kvíz s doporučením produktů přinést tvému obchodu. Postaveno na reálných datech, bez nutnosti e-mailu.",
  rc_roi_cta: "Spočítej si ROI",
  rc_report_eyebrow: "Report zdarma",
  rc_report_title: "Benchmarkový report e-commerce kvízů",
  rc_report_blurb:
    "Jak kvízy s doporučením produktů skutečně fungují: konverze podle kategorie, růst AOV a míra dokončení, z více než 45M reálných odpovědí.",
  rc_report_cta: "Přečíst report",
  cta_kicker: "Většina nakupujících odchází, protože nemůže najít ten správný produkt",
  cta_h2: "Proměň nakupující v sebejisté kupce s kvízem s doporučením produktů, který zvyšuje prodeje.",
  cta_install_shopify: "nainstalovat na Shopify",
  cta_get_woocommerce: "získat pro WooCommerce",
  trial_note: "Plán zdarma k dispozici · 15denní zkušební verze zdarma · 30denní záruka vrácení peněz",
  pillars: [
    {
      image: PILLAR_IMAGES.recommend,
      title: "Doporuč ty správné produkty",
      body: "Shoppable kvízy zvyšují prodeje, radí zákazníkům, jak najít produkty vhodné právě pro ně, a pomáhají jim s jistotou nakupovat.",
    },
    {
      image: PILLAR_IMAGES.know,
      title: "Poznej své zákazníky",
      body: "Kvízy ti umožňují sbírat užitečná data kladením cílených otázek tvým zákazníkům. Segmentuj a označuj své nakupující podle jejich odpovědí.",
    },
    {
      image: PILLAR_IMAGES.grow,
      title: "Rozšiř své publikum",
      body: "Posílej získané leady do svého e-mailového seznamu nebo CRM. Využij data z profilu zákazníka k tvorbě osobnějších marketingových kampaní s vyšším ROI.",
    },
  ],
  compare_h2: "Jak si stojíme",
  compare_sub:
    "RevenueHunt vs. Octane AI vs. Quiz Kit - funkce, na kterých záleží seriózním eCommerce obchodům.",
  compare_col_feature: "Funkce",
  compare_rows: [
    "Integrace s Klaviyo / Mailchimp",
    "Podmíněná / větvící logika",
    "AI tvůrce kvízů (nastavení za 60 sekund)",
    "Built for Shopify",
    "Analytika odchodů",
    "WooCommerce a další platformy",
    "Plán zdarma k dispozici",
  ],
  compare_starting_price: "Počáteční cena",
  compare_free: "Zdarma",
  compare_note: "Srovnání založené na veřejně dostupných informacích k roku 2026.",
  platforms_h2: "Dostupné pro každou platformu",
  platforms_sub:
    "Nejsi na {platform}? Kvíz s doporučením produktů od RevenueHunt funguje všude, kde prodáváš - vyber si svůj stack.",
  platforms_card_title: "Kvíz s doporučením produktů pro {platform}",
  platforms_card_cta: "Zobrazit stránku {platform}",
  industry_h2: "Kvíz pro tvůj obor",
  industry_sub:
    "Ať prodáváš na {platform} jakkoli, vytvoř kvíz, který sedne tvému katalogu. Prozkoumej řešení podle oboru a typu kvízu.",
  industry_view: "Zobrazit řešení",
  industry_see_all: "Zobrazit všechna řešení kvízů",
  reviews_heading: "Hodnoceno {rating} obchodníky na {platform}",
  reviews_default_heading: "Co říkají obchodníci",
  reviews_from: "z {count} recenzí na {source}",
  plans_enterprise:
    "Velká značka? Postaráme se o tebe. Získej Enterprise plán na míru od {price} pro neomezené odpovědi v kvízu.",
  plans_enterprise_cta: "Rezervovat strategický hovor",
  cta_labels: {
    "install on Shopify": "nainstalovat na Shopify",
    "view demo store": "zobrazit demo obchod",
    "download the plugin": "stáhnout plugin",
    "install on BigCommerce": "nainstalovat na BigCommerce",
    "sign up": "zaregistrovat se",
    "use the standalone solution": "použít samostatné řešení",
    "use on Shopify instead": "použít na Shopify",
    "get started free": "začni zdarma",
    "see quiz templates": "zobrazit šablony kvízů",
    "get for Shopify": "získat pro Shopify",
    "get for WooCommerce": "získat pro WooCommerce",
  },
  sibling_taglines: {
    [SLUGS.shopify]: "Nativní Shopify aplikace, plán zdarma, okamžitá instalace",
    [SLUGS.woocommerce]: "Self-hosted WordPress plugin, bez měsíčního poplatku",
    [SLUGS.bigcommerce]: "Nativní BigCommerce aplikace s hlubokou synchronizací katalogu",
    [SLUGS.wix]: "Vlož přes univerzální skript - funguje v každém Wix obchodě",
    [SLUGS.squarespace]: "Vlož přes univerzální skript - funguje na každém Squarespace webu",
    [SLUGS.magento]: "Samostatné hostované řešení, bez nutnosti rozšíření Magento",
    [SLUGS.standalone]:
      "Nezávislé na platformě - běží na Google Product Feed, bez integrace s obchodem",
    [SLUGS.pos]: "Kvízy v prodejně na POS tabletech iPad / Android",
    [SLUGS.all]: "Přehled všech platforem - začni tady, pokud porovnáváš možnosti",
  },
};

const ar: Chrome = {
  rc_heading: "أدوات وبيانات مجانية",
  rc_sub: "وظّف هذه المعايير في متجرك الخاص.",
  rc_roi_eyebrow: "أداة مجانية",
  rc_roi_title: "حاسبة عائد الاستثمار للاختبار",
  rc_roi_blurb:
    "احسب الإيرادات الإضافية وعائد الاستثمار الذي يمكن أن يضيفه اختبار التوصية بالمنتجات إلى متجرك. مبني على بيانات حقيقية، دون الحاجة إلى بريد إلكتروني.",
  rc_roi_cta: "احسب عائد استثمارك",
  rc_report_eyebrow: "تقرير مجاني",
  rc_report_title: "تقرير معيار اختبارات التجارة الإلكترونية",
  rc_report_blurb:
    "كيف تؤدي اختبارات التوصية بالمنتجات فعليًا: التحويل حسب الفئة، وارتفاع AOV، ومعدل الإكمال، من أكثر من 45 مليون إجابة اختبار حقيقية.",
  rc_report_cta: "اقرأ التقرير",
  cta_kicker: "معظم المتسوقين يغادرون لأنهم لا يجدون المنتج المناسب",
  cta_h2: "حوّل المتسوقين إلى مشترين واثقين عبر اختبار التوصية بالمنتجات الذي يزيد المبيعات.",
  cta_install_shopify: "التثبيت على Shopify",
  cta_get_woocommerce: "الحصول عليه لـ WooCommerce",
  trial_note: "خطة مجانية متاحة · تجربة مجانية لمدة 15 يومًا · ضمان استرداد المال خلال 30 يومًا",
  pillars: [
    {
      image: PILLAR_IMAGES.recommend,
      title: "أوصِ بالمنتجات المناسبة",
      body: "الاختبارات القابلة للشراء تزيد المبيعات، وترشد العملاء إلى العثور على المنتجات المناسبة لهم، وتساعدهم على اتخاذ قرارات شراء واثقة.",
    },
    {
      image: PILLAR_IMAGES.know,
      title: "اعرف عملاءك",
      body: "تتيح لك الاختبارات جمع بيانات قابلة للتنفيذ عبر طرح أسئلة مستهدفة على عملائك. قسّم متسوقيك وضع لهم وسومًا بناءً على إجاباتهم.",
    },
    {
      image: PILLAR_IMAGES.grow,
      title: "نمِّ جمهورك",
      body: "أرسل العملاء المحتملين الذين جمعتهم إلى قائمتك البريدية أو نظام CRM. استفد من بيانات ملف العميل لإنشاء حملات تسويقية أكثر تخصيصًا وبعائد استثمار أعلى.",
    },
  ],
  compare_h2: "كيف نتقارن",
  compare_sub:
    "RevenueHunt مقابل Octane AI مقابل Quiz Kit - الميزات التي تهم متاجر التجارة الإلكترونية الجادة.",
  compare_col_feature: "الميزة",
  compare_rows: [
    "تكامل Klaviyo / Mailchimp",
    "منطق شرطي / متفرع",
    "منشئ اختبارات بالذكاء الاصطناعي (إعداد في 60 ثانية)",
    "Built for Shopify",
    "تحليلات التسرب",
    "WooCommerce ومنصات أخرى",
    "خطة مجانية متاحة",
  ],
  compare_starting_price: "السعر الابتدائي",
  compare_free: "مجاني",
  compare_note: "المقارنة مبنية على معلومات متاحة للعموم حتى 2026.",
  platforms_h2: "متاح لكل منصة",
  platforms_sub:
    "لست على {platform}؟ اختبار التوصية بالمنتجات من RevenueHunt يعمل أينما تبيع - اختر منصتك.",
  platforms_card_title: "اختبار التوصية بالمنتجات لـ {platform}",
  platforms_card_cta: "عرض صفحة {platform}",
  industry_h2: "اختبار لمجال عملك",
  industry_sub:
    "مهما كانت طريقة بيعك على {platform}، أنشئ الاختبار الذي يناسب كتالوجك. استكشف الحلول حسب المجال ونوع الاختبار.",
  industry_view: "عرض الحل",
  industry_see_all: "عرض جميع حلول الاختبارات",
  reviews_heading: "مقيّم بـ {rating} من قِبل تجار {platform}",
  reviews_default_heading: "ماذا يقول التجار",
  reviews_from: "من {count} مراجعة على {source}",
  plans_enterprise:
    "علامة تجارية كبيرة؟ نحن نغطيك. احصل على خطة Enterprise مخصصة تبدأ من {price} لإجابات اختبار غير محدودة.",
  plans_enterprise_cta: "احجز مكالمة استراتيجية",
  cta_labels: {
    "install on Shopify": "التثبيت على Shopify",
    "view demo store": "عرض المتجر التجريبي",
    "download the plugin": "تنزيل الإضافة",
    "install on BigCommerce": "التثبيت على BigCommerce",
    "sign up": "التسجيل",
    "use the standalone solution": "استخدام الحل المستقل",
    "use on Shopify instead": "الاستخدام على Shopify",
    "get started free": "ابدأ مجانًا",
    "see quiz templates": "عرض قوالب الاختبارات",
    "get for Shopify": "الحصول عليه لـ Shopify",
    "get for WooCommerce": "الحصول عليه لـ WooCommerce",
  },
  sibling_taglines: {
    [SLUGS.shopify]: "تطبيق Shopify أصلي، خطة مجانية، تثبيت فوري",
    [SLUGS.woocommerce]: "إضافة WordPress ذاتية الاستضافة، دون رسوم شهرية",
    [SLUGS.bigcommerce]: "تطبيق BigCommerce أصلي بمزامنة عميقة للكتالوج",
    [SLUGS.wix]: "التضمين عبر سكربت عالمي - يعمل على أي متجر Wix",
    [SLUGS.squarespace]: "التضمين عبر سكربت عالمي - يعمل على أي موقع Squarespace",
    [SLUGS.magento]: "حل مستضاف مستقل، دون حاجة إلى امتداد Magento",
    [SLUGS.standalone]:
      "مستقل عن المنصة - يعمل على Google Product Feed، دون حاجة إلى تكامل المتجر",
    [SLUGS.pos]: "اختبارات داخل المتجر على أجهزة POS اللوحية iPad / Android",
    [SLUGS.all]: "نظرة عامة على جميع المنصات - ابدأ هنا إذا كنت تقارن الخيارات",
  },
};

const he: Chrome = {
  rc_heading: "כלים ונתונים בחינם",
  rc_sub: "הפעילו את המדדים האלה בחנות שלכם.",
  rc_roi_eyebrow: "כלי חינמי",
  rc_roi_title: "מחשבון ROI לחידון",
  rc_roi_blurb:
    "העריכו את ההכנסה הנוספת וה-ROI שחידון המלצת מוצרים יכול להוסיף לחנות שלכם. בנוי על נתונים אמיתיים, בלי צורך באימייל.",
  rc_roi_cta: "חשבו את ה-ROI שלכם",
  rc_report_eyebrow: "דוח חינמי",
  rc_report_title: "דוח בנצ'מרק לחידוני איקומרס",
  rc_report_blurb:
    "איך חידוני המלצת מוצרים באמת מתפקדים: המרה לפי קטגוריה, עליית AOV והשלמה, מתוך יותר מ-45M תשובות חידון אמיתיות.",
  rc_report_cta: "קראו את הדוח",
  cta_kicker: "רוב הקונים עוזבים כי הם לא מוצאים את המוצר הנכון",
  cta_h2: "הפכו קונים לקונים בטוחים בעצמם עם חידון המלצת מוצרים שמגדיל מכירות.",
  cta_install_shopify: "התקינו ב-Shopify",
  cta_get_woocommerce: "השיגו ל-WooCommerce",
  trial_note: "תוכנית חינמית זמינה · 15 ימי ניסיון בחינם · החזר כספי תוך 30 יום",
  pillars: [
    {
      image: PILLAR_IMAGES.recommend,
      title: "המליצו על המוצרים הנכונים",
      body: "חידונים ניתנים לקנייה מגדילים מכירות, מייעצים ללקוחות איך למצוא את המוצרים המתאימים להם ועוזרים להם לקבל החלטות רכישה בטוחות.",
    },
    {
      image: PILLAR_IMAGES.know,
      title: "הכירו את הלקוחות שלכם",
      body: "חידונים מאפשרים לכם לאסוף נתונים ניתנים לפעולה על ידי שאילת שאלות ממוקדות ללקוחות. פלחו ותייגו את הקונים שלכם לפי התשובות שלהם.",
    },
    {
      image: PILLAR_IMAGES.grow,
      title: "הגדילו את הקהל שלכם",
      body: "שלחו את הלידים שאספתם לרשימת התפוצה או ל-CRM שלכם. נצלו את נתוני פרופיל הלקוח כדי ליצור קמפיינים שיווקיים מותאמים יותר עם ROI גבוה יותר.",
    },
  ],
  compare_h2: "איך אנחנו מתחרים",
  compare_sub:
    "RevenueHunt מול Octane AI מול Quiz Kit - הפיצ'רים שחשובים לחנויות eCommerce רציניות.",
  compare_col_feature: "פיצ'ר",
  compare_rows: [
    "אינטגרציית Klaviyo / Mailchimp",
    "לוגיקה מותנית / מסתעפת",
    "בונה חידונים מבוסס AI (הקמה ב-60 שניות)",
    "Built for Shopify",
    "אנליטיקת נטישה",
    "WooCommerce ופלטפורמות נוספות",
    "תוכנית חינמית זמינה",
  ],
  compare_starting_price: "מחיר התחלתי",
  compare_free: "חינם",
  compare_note: "ההשוואה מבוססת על מידע ציבורי זמין נכון ל-2026.",
  platforms_h2: "זמין לכל פלטפורמה",
  platforms_sub:
    "לא על {platform}? חידון המלצת המוצרים של RevenueHunt עובד בכל מקום שאתם מוכרים - בחרו את הסטאק שלכם.",
  platforms_card_title: "חידון המלצת מוצרים ל-{platform}",
  platforms_card_cta: "צפו בעמוד {platform}",
  industry_h2: "חידון לתחום שלכם",
  industry_sub:
    "לא משנה איך אתם מוכרים ב-{platform}, בנו את החידון שמתאים לקטלוג שלכם. גלו פתרונות לפי תחום וסוג חידון.",
  industry_view: "צפו בפתרון",
  industry_see_all: "צפו בכל פתרונות החידונים",
  reviews_heading: "דורג {rating} על ידי סוחרי {platform}",
  reviews_default_heading: "מה סוחרים אומרים",
  reviews_from: "מתוך {count} ביקורות ב-{source}",
  plans_enterprise:
    "מותג גדול? אנחנו מכוסים. קבלו תוכנית Enterprise מותאמת אישית החל מ-{price} לתשובות חידון בלתי מוגבלות.",
  plans_enterprise_cta: "קבעו שיחת אסטרטגיה",
  cta_labels: {
    "install on Shopify": "התקינו ב-Shopify",
    "view demo store": "צפו בחנות הדגמה",
    "download the plugin": "הורידו את התוסף",
    "install on BigCommerce": "התקינו ב-BigCommerce",
    "sign up": "הירשמו",
    "use the standalone solution": "השתמשו בפתרון העצמאי",
    "use on Shopify instead": "השתמשו ב-Shopify",
    "get started free": "התחילו בחינם",
    "see quiz templates": "צפו בתבניות חידונים",
    "get for Shopify": "השיגו ל-Shopify",
    "get for WooCommerce": "השיגו ל-WooCommerce",
  },
  sibling_taglines: {
    [SLUGS.shopify]: "אפליקציית Shopify מקורית, תוכנית חינמית, התקנה מיידית",
    [SLUGS.woocommerce]: "תוסף WordPress בהתארחות עצמית, ללא תשלום חודשי",
    [SLUGS.bigcommerce]: "אפליקציית BigCommerce מקורית עם סנכרון קטלוג מעמיק",
    [SLUGS.wix]: "הטמעה דרך סקריפט אוניברסלי - עובד בכל חנות Wix",
    [SLUGS.squarespace]: "הטמעה דרך סקריפט אוניברסלי - עובד בכל אתר Squarespace",
    [SLUGS.magento]: "פתרון מתארח עצמאי, ללא צורך בתוסף Magento",
    [SLUGS.standalone]:
      "בלתי תלוי בפלטפורמה - רץ על Google Product Feed, ללא צורך באינטגרציית חנות",
    [SLUGS.pos]: "חידונים בחנות על טאבלטי POS מסוג iPad / Android",
    [SLUGS.all]: "סקירת כל הפלטפורמות - התחילו כאן אם אתם משווים אפשרויות",
  },
};

export const CHROME = { en, es, fr, de, pt, it, nl, sv, fi, pl, cs, ar, he } satisfies Record<Lang, Chrome>;

/** Fill {platform} / {rating} placeholders. */
export function fill(tpl: string, vars: Record<string, string>): string {
  return tpl.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? `{${k}}`);
}
