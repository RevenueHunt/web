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

export const CHROME = { en, es, fr, de, pt, it } satisfies Record<Lang, Chrome>;

/** Fill {platform} / {rating} placeholders. */
export function fill(tpl: string, vars: Record<string, string>): string {
  return tpl.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? `{${k}}`);
}
