// Localized chrome for the long-tail SEO pages: solution (/solutions/<slug>/),
// comparison (/compare/<slug>/ + hub), and glossary (/glossary/<slug>/ + hub).
// English is the source of truth; es/fr/de/pt/it mirror it. Templates use
// {name} / {category} / {date} / {term} placeholders filled at render.
//
// The per-entry copy (solution/competitor/glossary bodies) lives in the
// *_BY_LANG maps in solutions.ts / competitors.ts / glossary.ts; this file is
// only the shared section headings, labels, and CTAs.

import type { Lang } from "../i18n";

export interface Cap {
  title: string;
  body: string;
}

export interface LongtailChrome {
  // shared
  faq_h2: string;
  cta_kicker: string;
  cta_h2: string;
  cta_start_shopify: string;
  cta_start_woo: string;
  trial_note: string;
  hub_brands_h2: string; // "See why 20,000+ brands choose RevenueHunt."
  // solution detail
  sol_breadcrumb: string;
  sol_eyebrow: string; // "Solution" (prefix before chip)
  sol_cta_demo: string;
  sol_proof_brands: string;
  sol_proof_quizzes: string;
  sol_proof_revenue: string;
  sol_proof_reviews: string;
  sol_quiztypes_h2: string; // {name}
  sol_quiztypes_sub: string;
  sol_howhelps_h2: string; // {name}
  sol_seeitlive: string;
  sol_caps_h2: string;
  sol_caps: Cap[]; // 6
  sol_related_h2: string;
  sol_more_industries: string;
  sol_more_quiztypes: string;
  sol_view: string;
  // compare detail
  cmp_breadcrumb: string;
  cmp_eyebrow_prefix: string; // "Comparison · RevenueHunt vs" (+ category)
  cmp_cta_install: string;
  cmp_cta_demo: string;
  cmp_table_h2: string; // {name}
  cmp_table_sub: string;
  cmp_col_feature: string;
  cmp_yes: string;
  cmp_no: string;
  cmp_note: string; // {date} {name}
  cmp_why_h2: string; // {name}
  cmp_bestfor_h2: string; // {name}
  cmp_switch_h2: string; // {name}
  cmp_cta_start: string;
  cmp_cta_book: string;
  cmp_other_h2: string;
  cmp_see: string;
  // compare hub
  cmp_hub_eyebrow: string;
  cmp_hub_h1: string;
  cmp_hub_sub: string;
  cmp_hub_title: string;
  cmp_hub_desc: string;
  // glossary detail
  gl_breadcrumb: string;
  gl_eyebrow: string; // "Glossary" (prefix before chip)
  gl_reviewed: string; // {date}
  gl_with_rh_h2: string; // {term}
  gl_cta_start: string;
  gl_cta_how: string;
  gl_related_h2: string;
  gl_more_h2: string;
  gl_cta_h2: string;
  // glossary hub
  gl_hub_eyebrow: string;
  gl_hub_h1: string;
  gl_hub_sub: string;
  gl_hub_title: string;
  gl_hub_desc: string;
  gl_hub_terms_h2: string;
  gl_hub_read: string;
  gl_hub_guides_h2: string;
  gl_hub_guides_sub: string;
  gl_hub_readmore: string;
}

const en: LongtailChrome = {
  faq_h2: "Frequently asked questions",
  cta_kicker: "Most shoppers leave because they can't find the right product",
  cta_h2: "Turn shoppers into confident buyers with a Product Recommendation Quiz that drives sales.",
  cta_start_shopify: "start free on Shopify",
  cta_start_woo: "start free on WooCommerce",
  trial_note: "Free plan available · 15-day free trial · 30-day money-back guarantee",
  hub_brands_h2: "See why 20,000+ brands choose RevenueHunt.",
  sol_breadcrumb: "Solutions",
  sol_eyebrow: "Solution",
  sol_cta_demo: "see a live demo",
  sol_proof_brands: "brands",
  sol_proof_quizzes: "quizzes completed",
  sol_proof_revenue: "merchant revenue",
  sol_proof_reviews: "450+ reviews",
  sol_quiztypes_h2: "Popular {name} quiz types",
  sol_quiztypes_sub: "Common patterns merchants build with RevenueHunt. Mix and match them in a single quiz.",
  sol_howhelps_h2: "What a {name} quiz does for your store",
  sol_seeitlive: "See it live",
  sol_caps_h2: "Everything a RevenueHunt quiz includes",
  sol_caps: [
    { title: "Free to start", body: "A genuinely free plan with 100 responses a month, on live stores. Paid plans from $39/month." },
    { title: "AI Quiz Copilot", body: "Describe your store and the Copilot scaffolds a full quiz, logic and product mappings, in about 60 seconds." },
    { title: "Real-time catalog sync", body: "Recommends real products and variants from your live catalog, kept in sync automatically." },
    { title: "Unlimited quizzes & logic", body: "Build as many quizzes as you want on every plan, with unlimited conditional and branching logic." },
    { title: "Klaviyo & email sync", body: "Answers and customer tags flow to Klaviyo, Mailchimp, Omnisend, HubSpot, and more for segmentation." },
    { title: "Drop-off analytics", body: "See question-by-question drop-off so you can fix friction and recover lost responses." },
  ],
  sol_related_h2: "Related solutions & resources",
  sol_more_industries: "More industries",
  sol_more_quiztypes: "More quiz types",
  sol_view: "View solution",
  cmp_breadcrumb: "Compare",
  cmp_eyebrow_prefix: "Comparison · RevenueHunt vs",
  cmp_cta_install: "install on Shopify",
  cmp_cta_demo: "see a live demo",
  cmp_table_h2: "RevenueHunt vs {name} at a glance",
  cmp_table_sub: "The features that matter most for a Shopify product quiz.",
  cmp_col_feature: "Feature",
  cmp_yes: "Yes",
  cmp_no: "No",
  cmp_note: "Comparison based on publicly available information from each vendor as of {date}. {name} pricing and features may have changed since, so check their site for the latest.",
  cmp_why_h2: "Why merchants choose RevenueHunt over {name}",
  cmp_bestfor_h2: "When {name} might be the better fit",
  cmp_switch_h2: "Switching from {name}",
  cmp_cta_start: "start free on Shopify",
  cmp_cta_book: "book a demo",
  cmp_other_h2: "Compare other quiz tools",
  cmp_see: "See comparison",
  cmp_hub_eyebrow: "Comparisons",
  cmp_hub_h1: "RevenueHunt vs the alternatives",
  cmp_hub_sub: "How RevenueHunt stacks up against other product quiz, guided-selling, and personalization tools, on pricing, features, and the platforms you sell on. Honest, up-to-date comparisons.",
  cmp_hub_title: "RevenueHunt vs the alternatives: compare quiz tools",
  cmp_hub_desc: "See how RevenueHunt compares to Octane AI, Typeform, Zoovu, Nosto, Jebbit, and Tolstoy on pricing, features, and platforms for product recommendation quizzes.",
  gl_breadcrumb: "Glossary",
  gl_eyebrow: "Glossary",
  gl_reviewed: "Last reviewed {date}",
  gl_with_rh_h2: "{term} with RevenueHunt",
  gl_cta_start: "start free on Shopify",
  gl_cta_how: "see how it works",
  gl_related_h2: "Related reading",
  gl_more_h2: "More glossary terms",
  gl_cta_h2: "Put it into practice with a product recommendation quiz.",
  gl_hub_eyebrow: "Glossary",
  gl_hub_h1: "Quiz and personalization glossary",
  gl_hub_sub: "Plain-English definitions of the terms behind product quizzes and ecommerce personalization. No jargon, no fluff, just what each one means and why it matters.",
  gl_hub_title: "Quiz & personalization glossary",
  gl_hub_desc: "Plain-English definitions of the quiz and personalization terms in ecommerce: conversational commerce, product discovery, quiz funnels, and more.",
  gl_hub_terms_h2: "Terms",
  gl_hub_read: "Read definition",
  gl_hub_guides_h2: "Guides and tools",
  gl_hub_guides_sub: "Deeper guides on the topics above, and a calculator to size the opportunity for your store.",
  gl_hub_readmore: "Read more",
};

const es: LongtailChrome = {
  faq_h2: "Preguntas frecuentes",
  cta_kicker: "La mayoría de los compradores se van porque no encuentran el producto adecuado",
  cta_h2: "Convierte a tus compradores en clientes seguros con un quiz de recomendación de productos que impulsa las ventas.",
  cta_start_shopify: "empieza gratis en Shopify",
  cta_start_woo: "empieza gratis en WooCommerce",
  trial_note: "Plan gratuito disponible · prueba gratis de 15 días · garantía de devolución de 30 días",
  hub_brands_h2: "Descubre por qué más de 20.000 marcas eligen RevenueHunt.",
  sol_breadcrumb: "Soluciones",
  sol_eyebrow: "Solución",
  sol_cta_demo: "ver una demo en directo",
  sol_proof_brands: "marcas",
  sol_proof_quizzes: "quizzes completados",
  sol_proof_revenue: "ingresos de comerciantes",
  sol_proof_reviews: "más de 450 reseñas",
  sol_quiztypes_h2: "Tipos de quiz populares de {name}",
  sol_quiztypes_sub: "Patrones habituales que los comerciantes crean con RevenueHunt. Combínalos en un mismo quiz.",
  sol_howhelps_h2: "Lo que un quiz de {name} hace por tu tienda",
  sol_seeitlive: "Míralo en directo",
  sol_caps_h2: "Todo lo que incluye un quiz de RevenueHunt",
  sol_caps: [
    { title: "Gratis para empezar", body: "Un plan realmente gratuito con 100 respuestas al mes, en tiendas reales. Planes de pago desde $39/month." },
    { title: "AI Quiz Copilot", body: "Describe tu tienda y el Copilot crea un quiz completo, con su lógica y la asignación de productos, en unos 60 segundos." },
    { title: "Sincronización del catálogo en tiempo real", body: "Recomienda productos y variantes reales de tu catálogo en directo, sincronizados automáticamente." },
    { title: "Quizzes y lógica ilimitados", body: "Crea todos los quizzes que quieras en cualquier plan, con lógica condicional y de ramificación ilimitada." },
    { title: "Sincronización con Klaviyo y email", body: "Las respuestas y las etiquetas de cliente llegan a Klaviyo, Mailchimp, Omnisend, HubSpot y más para segmentar." },
    { title: "Analítica de abandono", body: "Consulta el abandono pregunta a pregunta para corregir fricciones y recuperar respuestas perdidas." },
  ],
  sol_related_h2: "Soluciones y recursos relacionados",
  sol_more_industries: "Más sectores",
  sol_more_quiztypes: "Más tipos de quiz",
  sol_view: "Ver solución",
  cmp_breadcrumb: "Comparar",
  cmp_eyebrow_prefix: "Comparación · RevenueHunt vs",
  cmp_cta_install: "instalar en Shopify",
  cmp_cta_demo: "ver una demo en directo",
  cmp_table_h2: "RevenueHunt vs {name} de un vistazo",
  cmp_table_sub: "Las funciones que más importan en un quiz de productos para Shopify.",
  cmp_col_feature: "Función",
  cmp_yes: "Sí",
  cmp_no: "No",
  cmp_note: "Comparación basada en información pública de cada proveedor a fecha de {date}. Los precios y funciones de {name} pueden haber cambiado desde entonces, así que consulta su sitio para ver lo más reciente.",
  cmp_why_h2: "Por qué los comerciantes eligen RevenueHunt frente a {name}",
  cmp_bestfor_h2: "Cuándo {name} puede encajar mejor",
  cmp_switch_h2: "Cambiar desde {name}",
  cmp_cta_start: "empieza gratis en Shopify",
  cmp_cta_book: "reservar una demo",
  cmp_other_h2: "Compara otras herramientas de quiz",
  cmp_see: "Ver comparación",
  cmp_hub_eyebrow: "Comparaciones",
  cmp_hub_h1: "RevenueHunt frente a las alternativas",
  cmp_hub_sub: "Cómo se compara RevenueHunt con otras herramientas de quiz de productos, venta guiada y personalización, en precios, funciones y las plataformas en las que vendes. Comparaciones honestas y actualizadas.",
  cmp_hub_title: "RevenueHunt frente a las alternativas: compara herramientas de quiz",
  cmp_hub_desc: "Descubre cómo se compara RevenueHunt con Octane AI, Typeform, Zoovu, Nosto, Jebbit y Tolstoy en precios, funciones y plataformas para quizzes de recomendación de productos.",
  gl_breadcrumb: "Glosario",
  gl_eyebrow: "Glosario",
  gl_reviewed: "Última revisión {date}",
  gl_with_rh_h2: "{term} con RevenueHunt",
  gl_cta_start: "empieza gratis en Shopify",
  gl_cta_how: "ver cómo funciona",
  gl_related_h2: "Lecturas relacionadas",
  gl_more_h2: "Más términos del glosario",
  gl_cta_h2: "Ponlo en práctica con un quiz de recomendación de productos.",
  gl_hub_eyebrow: "Glosario",
  gl_hub_h1: "Glosario de quiz y personalización",
  gl_hub_sub: "Definiciones claras de los términos detrás de los quizzes de productos y la personalización en ecommerce. Sin jerga ni paja, solo lo que significa cada uno y por qué importa.",
  gl_hub_title: "Glosario de quiz y personalización",
  gl_hub_desc: "Definiciones claras de los términos de quiz y personalización en ecommerce: comercio conversacional, descubrimiento de productos, embudos de quiz y más.",
  gl_hub_terms_h2: "Términos",
  gl_hub_read: "Leer definición",
  gl_hub_guides_h2: "Guías y herramientas",
  gl_hub_guides_sub: "Guías más profundas sobre los temas de arriba, y una calculadora para dimensionar la oportunidad de tu tienda.",
  gl_hub_readmore: "Leer más",
};

const fr: LongtailChrome = {
  faq_h2: "Questions fréquentes",
  cta_kicker: "La plupart des clients partent parce qu'ils ne trouvent pas le bon produit",
  cta_h2: "Transformez vos clients en acheteurs confiants avec un quiz de recommandation de produits qui génère des ventes.",
  cta_start_shopify: "commencez gratuitement sur Shopify",
  cta_start_woo: "commencez gratuitement sur WooCommerce",
  trial_note: "Offre gratuite disponible · essai gratuit de 15 jours · garantie de remboursement de 30 jours",
  hub_brands_h2: "Découvrez pourquoi plus de 20 000 marques choisissent RevenueHunt.",
  sol_breadcrumb: "Solutions",
  sol_eyebrow: "Solution",
  sol_cta_demo: "voir une démo en direct",
  sol_proof_brands: "marques",
  sol_proof_quizzes: "quiz complétés",
  sol_proof_revenue: "chiffre d'affaires des marchands",
  sol_proof_reviews: "plus de 450 avis",
  sol_quiztypes_h2: "Types de quiz {name} populaires",
  sol_quiztypes_sub: "Modèles courants que les marchands créent avec RevenueHunt. Combinez-les dans un même quiz.",
  sol_howhelps_h2: "Ce qu'un quiz {name} apporte à votre boutique",
  sol_seeitlive: "Voir en direct",
  sol_caps_h2: "Tout ce qu'inclut un quiz RevenueHunt",
  sol_caps: [
    { title: "Gratuit pour démarrer", body: "Une offre vraiment gratuite avec 100 réponses par mois, sur des boutiques en ligne. Offres payantes à partir de $39/month." },
    { title: "AI Quiz Copilot", body: "Décrivez votre boutique et le Copilot structure un quiz complet, sa logique et l'association des produits, en environ 60 secondes." },
    { title: "Synchronisation du catalogue en temps réel", body: "Recommande de vrais produits et variantes de votre catalogue en direct, synchronisés automatiquement." },
    { title: "Quiz et logique illimités", body: "Créez autant de quiz que vous le souhaitez sur chaque offre, avec une logique conditionnelle et de branchement illimitée." },
    { title: "Synchronisation Klaviyo et e-mail", body: "Les réponses et les tags client sont transmis à Klaviyo, Mailchimp, Omnisend, HubSpot et plus pour la segmentation." },
    { title: "Analyse des abandons", body: "Visualisez les abandons question par question pour corriger les frictions et récupérer les réponses perdues." },
  ],
  sol_related_h2: "Solutions et ressources associées",
  sol_more_industries: "Plus de secteurs",
  sol_more_quiztypes: "Plus de types de quiz",
  sol_view: "Voir la solution",
  cmp_breadcrumb: "Comparer",
  cmp_eyebrow_prefix: "Comparaison · RevenueHunt vs",
  cmp_cta_install: "installer sur Shopify",
  cmp_cta_demo: "voir une démo en direct",
  cmp_table_h2: "RevenueHunt vs {name} en un coup d'œil",
  cmp_table_sub: "Les fonctionnalités qui comptent le plus pour un quiz produit Shopify.",
  cmp_col_feature: "Fonctionnalité",
  cmp_yes: "Oui",
  cmp_no: "Non",
  cmp_note: "Comparaison établie à partir des informations publiques de chaque fournisseur en date du {date}. Les prix et fonctionnalités de {name} ont pu changer depuis, consultez donc leur site pour les dernières informations.",
  cmp_why_h2: "Pourquoi les marchands choisissent RevenueHunt plutôt que {name}",
  cmp_bestfor_h2: "Quand {name} peut être le meilleur choix",
  cmp_switch_h2: "Passer de {name}",
  cmp_cta_start: "commencez gratuitement sur Shopify",
  cmp_cta_book: "réserver une démo",
  cmp_other_h2: "Comparer d'autres outils de quiz",
  cmp_see: "Voir la comparaison",
  cmp_hub_eyebrow: "Comparaisons",
  cmp_hub_h1: "RevenueHunt face aux alternatives",
  cmp_hub_sub: "Comment RevenueHunt se positionne face aux autres outils de quiz produit, de vente guidée et de personnalisation, sur les prix, les fonctionnalités et les plateformes où vous vendez. Des comparaisons honnêtes et à jour.",
  cmp_hub_title: "RevenueHunt face aux alternatives : comparez les outils de quiz",
  cmp_hub_desc: "Découvrez comment RevenueHunt se compare à Octane AI, Typeform, Zoovu, Nosto, Jebbit et Tolstoy sur les prix, les fonctionnalités et les plateformes pour les quiz de recommandation de produits.",
  gl_breadcrumb: "Glossaire",
  gl_eyebrow: "Glossaire",
  gl_reviewed: "Dernière révision le {date}",
  gl_with_rh_h2: "{term} avec RevenueHunt",
  gl_cta_start: "commencez gratuitement sur Shopify",
  gl_cta_how: "voir comment ça marche",
  gl_related_h2: "Lectures associées",
  gl_more_h2: "Plus de termes du glossaire",
  gl_cta_h2: "Mettez-le en pratique avec un quiz de recommandation de produits.",
  gl_hub_eyebrow: "Glossaire",
  gl_hub_h1: "Glossaire du quiz et de la personnalisation",
  gl_hub_sub: "Des définitions claires des termes derrière les quiz produit et la personnalisation e-commerce. Sans jargon ni remplissage, juste ce que chacun signifie et pourquoi il compte.",
  gl_hub_title: "Glossaire du quiz et de la personnalisation",
  gl_hub_desc: "Des définitions claires des termes de quiz et de personnalisation en e-commerce : commerce conversationnel, découverte de produits, tunnels de quiz et plus.",
  gl_hub_terms_h2: "Termes",
  gl_hub_read: "Lire la définition",
  gl_hub_guides_h2: "Guides et outils",
  gl_hub_guides_sub: "Des guides plus approfondis sur les sujets ci-dessus, et un calculateur pour mesurer le potentiel de votre boutique.",
  gl_hub_readmore: "Lire la suite",
};

const de: LongtailChrome = {
  faq_h2: "Häufig gestellte Fragen",
  cta_kicker: "Die meisten Kunden gehen, weil sie das richtige Produkt nicht finden",
  cta_h2: "Mach aus deinen Kunden sichere Käufer mit einem Produktempfehlungs-Quiz, das den Umsatz steigert.",
  cta_start_shopify: "kostenlos starten auf Shopify",
  cta_start_woo: "kostenlos starten auf WooCommerce",
  trial_note: "Kostenloser Plan verfügbar · 15 Tage kostenlos testen · 30 Tage Geld-zurück-Garantie",
  hub_brands_h2: "Erfahre, warum sich über 20.000 Marken für RevenueHunt entscheiden.",
  sol_breadcrumb: "Lösungen",
  sol_eyebrow: "Lösung",
  sol_cta_demo: "Live-Demo ansehen",
  sol_proof_brands: "Marken",
  sol_proof_quizzes: "abgeschlossene Quizze",
  sol_proof_revenue: "Händlerumsatz",
  sol_proof_reviews: "über 450 Bewertungen",
  sol_quiztypes_h2: "Beliebte {name}-Quiz-Typen",
  sol_quiztypes_sub: "Gängige Muster, die Händler mit RevenueHunt erstellen. Kombiniere sie in einem einzigen Quiz.",
  sol_howhelps_h2: "Was ein {name}-Quiz für deinen Shop leistet",
  sol_seeitlive: "Live ansehen",
  sol_caps_h2: "Alles, was ein RevenueHunt-Quiz enthält",
  sol_caps: [
    { title: "Kostenlos starten", body: "Ein wirklich kostenloser Plan mit 100 Antworten pro Monat, in Live-Shops. Bezahlpläne ab $39/month." },
    { title: "AI Quiz Copilot", body: "Beschreibe deinen Shop und der Copilot baut ein komplettes Quiz, die Logik und die Produktzuordnungen in etwa 60 Sekunden." },
    { title: "Echtzeit-Katalogsynchronisierung", body: "Empfiehlt echte Produkte und Varianten aus deinem Live-Katalog, automatisch synchron gehalten." },
    { title: "Unbegrenzte Quizze & Logik", body: "Erstelle so viele Quizze, wie du möchtest, in jedem Plan, mit unbegrenzter bedingter und verzweigter Logik." },
    { title: "Klaviyo- & E-Mail-Sync", body: "Antworten und Kunden-Tags fließen zur Segmentierung an Klaviyo, Mailchimp, Omnisend, HubSpot und mehr." },
    { title: "Abbruch-Analyse", body: "Sieh den Abbruch Frage für Frage, um Reibung zu beheben und verlorene Antworten zurückzugewinnen." },
  ],
  sol_related_h2: "Verwandte Lösungen & Ressourcen",
  sol_more_industries: "Weitere Branchen",
  sol_more_quiztypes: "Weitere Quiz-Typen",
  sol_view: "Lösung ansehen",
  cmp_breadcrumb: "Vergleichen",
  cmp_eyebrow_prefix: "Vergleich · RevenueHunt vs",
  cmp_cta_install: "auf Shopify installieren",
  cmp_cta_demo: "Live-Demo ansehen",
  cmp_table_h2: "RevenueHunt vs {name} auf einen Blick",
  cmp_table_sub: "Die Funktionen, die für ein Shopify-Produktquiz am wichtigsten sind.",
  cmp_col_feature: "Funktion",
  cmp_yes: "Ja",
  cmp_no: "Nein",
  cmp_note: "Vergleich auf Basis öffentlich verfügbarer Informationen jedes Anbieters mit Stand {date}. Preise und Funktionen von {name} können sich seither geändert haben, prüfe daher die Website für den aktuellen Stand.",
  cmp_why_h2: "Warum Händler RevenueHunt {name} vorziehen",
  cmp_bestfor_h2: "Wann {name} die bessere Wahl sein kann",
  cmp_switch_h2: "Wechsel von {name}",
  cmp_cta_start: "kostenlos starten auf Shopify",
  cmp_cta_book: "Demo buchen",
  cmp_other_h2: "Weitere Quiz-Tools vergleichen",
  cmp_see: "Vergleich ansehen",
  cmp_hub_eyebrow: "Vergleiche",
  cmp_hub_h1: "RevenueHunt im Vergleich zu den Alternativen",
  cmp_hub_sub: "Wie sich RevenueHunt gegen andere Tools für Produktquiz, Guided Selling und Personalisierung schlägt, bei Preisen, Funktionen und den Plattformen, auf denen du verkaufst. Ehrliche, aktuelle Vergleiche.",
  cmp_hub_title: "RevenueHunt im Vergleich zu den Alternativen: Quiz-Tools vergleichen",
  cmp_hub_desc: "Sieh, wie RevenueHunt im Vergleich zu Octane AI, Typeform, Zoovu, Nosto, Jebbit und Tolstoy bei Preisen, Funktionen und Plattformen für Produktempfehlungs-Quizze abschneidet.",
  gl_breadcrumb: "Glossar",
  gl_eyebrow: "Glossar",
  gl_reviewed: "Zuletzt geprüft {date}",
  gl_with_rh_h2: "{term} mit RevenueHunt",
  gl_cta_start: "kostenlos starten auf Shopify",
  gl_cta_how: "ansehen, wie es funktioniert",
  gl_related_h2: "Weiterführende Lektüre",
  gl_more_h2: "Weitere Glossarbegriffe",
  gl_cta_h2: "Setze es mit einem Produktempfehlungs-Quiz in die Praxis um.",
  gl_hub_eyebrow: "Glossar",
  gl_hub_h1: "Glossar zu Quiz und Personalisierung",
  gl_hub_sub: "Verständliche Definitionen der Begriffe hinter Produktquizzen und E-Commerce-Personalisierung. Kein Fachjargon, kein Füllwerk, nur was jeder bedeutet und warum er wichtig ist.",
  gl_hub_title: "Glossar zu Quiz & Personalisierung",
  gl_hub_desc: "Verständliche Definitionen der Quiz- und Personalisierungsbegriffe im E-Commerce: Conversational Commerce, Produktentdeckung, Quiz-Funnels und mehr.",
  gl_hub_terms_h2: "Begriffe",
  gl_hub_read: "Definition lesen",
  gl_hub_guides_h2: "Leitfäden und Tools",
  gl_hub_guides_sub: "Tiefergehende Leitfäden zu den Themen oben, und ein Rechner, um das Potenzial für deinen Shop zu bemessen.",
  gl_hub_readmore: "Mehr lesen",
};

const pt: LongtailChrome = {
  faq_h2: "Perguntas frequentes",
  cta_kicker: "A maioria dos compradores vai-se embora porque não encontra o produto certo",
  cta_h2: "Transforma os teus compradores em clientes confiantes com um quiz de recomendação de produtos que impulsiona as vendas.",
  cta_start_shopify: "começa grátis na Shopify",
  cta_start_woo: "começa grátis na WooCommerce",
  trial_note: "Plano gratuito disponível · teste grátis de 15 dias · garantia de devolução de 30 dias",
  hub_brands_h2: "Descobre porque mais de 20.000 marcas escolhem a RevenueHunt.",
  sol_breadcrumb: "Soluções",
  sol_eyebrow: "Solução",
  sol_cta_demo: "ver uma demo ao vivo",
  sol_proof_brands: "marcas",
  sol_proof_quizzes: "quizzes concluídos",
  sol_proof_revenue: "receita dos comerciantes",
  sol_proof_reviews: "mais de 450 avaliações",
  sol_quiztypes_h2: "Tipos de quiz {name} populares",
  sol_quiztypes_sub: "Padrões comuns que os comerciantes criam com a RevenueHunt. Combina-os num único quiz.",
  sol_howhelps_h2: "O que um quiz de {name} faz pela tua loja",
  sol_seeitlive: "Vê ao vivo",
  sol_caps_h2: "Tudo o que um quiz da RevenueHunt inclui",
  sol_caps: [
    { title: "Grátis para começar", body: "Um plano genuinamente gratuito com 100 respostas por mês, em lojas reais. Planos pagos a partir de $39/month." },
    { title: "AI Quiz Copilot", body: "Descreve a tua loja e o Copilot estrutura um quiz completo, a lógica e a associação de produtos, em cerca de 60 segundos." },
    { title: "Sincronização do catálogo em tempo real", body: "Recomenda produtos e variantes reais do teu catálogo ao vivo, mantidos em sincronia automaticamente." },
    { title: "Quizzes e lógica ilimitados", body: "Cria tantos quizzes quantos quiseres em qualquer plano, com lógica condicional e de ramificação ilimitada." },
    { title: "Sincronização com Klaviyo e email", body: "As respostas e as tags de cliente seguem para Klaviyo, Mailchimp, Omnisend, HubSpot e mais para segmentação." },
    { title: "Analítica de abandono", body: "Vê o abandono pergunta a pergunta para corrigir fricções e recuperar respostas perdidas." },
  ],
  sol_related_h2: "Soluções e recursos relacionados",
  sol_more_industries: "Mais setores",
  sol_more_quiztypes: "Mais tipos de quiz",
  sol_view: "Ver solução",
  cmp_breadcrumb: "Comparar",
  cmp_eyebrow_prefix: "Comparação · RevenueHunt vs",
  cmp_cta_install: "instalar na Shopify",
  cmp_cta_demo: "ver uma demo ao vivo",
  cmp_table_h2: "RevenueHunt vs {name} num relance",
  cmp_table_sub: "As funcionalidades que mais importam num quiz de produtos para Shopify.",
  cmp_col_feature: "Funcionalidade",
  cmp_yes: "Sim",
  cmp_no: "Não",
  cmp_note: "Comparação baseada em informação publicamente disponível de cada fornecedor à data de {date}. Os preços e funcionalidades da {name} podem ter mudado desde então, por isso consulta o site para as novidades.",
  cmp_why_h2: "Porque os comerciantes escolhem a RevenueHunt em vez da {name}",
  cmp_bestfor_h2: "Quando a {name} pode ser a melhor opção",
  cmp_switch_h2: "Mudar da {name}",
  cmp_cta_start: "começa grátis na Shopify",
  cmp_cta_book: "marcar uma demo",
  cmp_other_h2: "Compara outras ferramentas de quiz",
  cmp_see: "Ver comparação",
  cmp_hub_eyebrow: "Comparações",
  cmp_hub_h1: "RevenueHunt face às alternativas",
  cmp_hub_sub: "Como a RevenueHunt se compara com outras ferramentas de quiz de produtos, venda guiada e personalização, em preços, funcionalidades e nas plataformas onde vendes. Comparações honestas e atualizadas.",
  cmp_hub_title: "RevenueHunt face às alternativas: compara ferramentas de quiz",
  cmp_hub_desc: "Vê como a RevenueHunt se compara com Octane AI, Typeform, Zoovu, Nosto, Jebbit e Tolstoy em preços, funcionalidades e plataformas para quizzes de recomendação de produtos.",
  gl_breadcrumb: "Glossário",
  gl_eyebrow: "Glossário",
  gl_reviewed: "Última revisão {date}",
  gl_with_rh_h2: "{term} com a RevenueHunt",
  gl_cta_start: "começa grátis na Shopify",
  gl_cta_how: "ver como funciona",
  gl_related_h2: "Leituras relacionadas",
  gl_more_h2: "Mais termos do glossário",
  gl_cta_h2: "Põe em prática com um quiz de recomendação de produtos.",
  gl_hub_eyebrow: "Glossário",
  gl_hub_h1: "Glossário de quiz e personalização",
  gl_hub_sub: "Definições claras dos termos por trás dos quizzes de produtos e da personalização em ecommerce. Sem jargão nem enchimento, apenas o que cada um significa e porque importa.",
  gl_hub_title: "Glossário de quiz e personalização",
  gl_hub_desc: "Definições claras dos termos de quiz e personalização em ecommerce: comércio conversacional, descoberta de produtos, funis de quiz e mais.",
  gl_hub_terms_h2: "Termos",
  gl_hub_read: "Ler definição",
  gl_hub_guides_h2: "Guias e ferramentas",
  gl_hub_guides_sub: "Guias mais aprofundados sobre os temas acima, e uma calculadora para dimensionar a oportunidade da tua loja.",
  gl_hub_readmore: "Ler mais",
};

const it: LongtailChrome = {
  faq_h2: "Domande frequenti",
  cta_kicker: "La maggior parte dei clienti se ne va perché non trova il prodotto giusto",
  cta_h2: "Trasforma i tuoi clienti in acquirenti sicuri con un quiz di raccomandazione dei prodotti che fa crescere le vendite.",
  cta_start_shopify: "inizia gratis su Shopify",
  cta_start_woo: "inizia gratis su WooCommerce",
  trial_note: "Piano gratuito disponibile · prova gratuita di 15 giorni · garanzia di rimborso di 30 giorni",
  hub_brands_h2: "Scopri perché oltre 20.000 brand scelgono RevenueHunt.",
  sol_breadcrumb: "Soluzioni",
  sol_eyebrow: "Soluzione",
  sol_cta_demo: "guarda una demo dal vivo",
  sol_proof_brands: "brand",
  sol_proof_quizzes: "quiz completati",
  sol_proof_revenue: "fatturato dei merchant",
  sol_proof_reviews: "oltre 450 recensioni",
  sol_quiztypes_h2: "Tipi di quiz {name} più diffusi",
  sol_quiztypes_sub: "Schemi comuni che i merchant creano con RevenueHunt. Combinali in un unico quiz.",
  sol_howhelps_h2: "Cosa fa un quiz {name} per il tuo store",
  sol_seeitlive: "Guardalo dal vivo",
  sol_caps_h2: "Tutto ciò che include un quiz RevenueHunt",
  sol_caps: [
    { title: "Gratis per iniziare", body: "Un piano davvero gratuito con 100 risposte al mese, su store reali. Piani a pagamento da $39/month." },
    { title: "AI Quiz Copilot", body: "Descrivi il tuo store e il Copilot imposta un quiz completo, la logica e l'associazione dei prodotti, in circa 60 secondi." },
    { title: "Sincronizzazione del catalogo in tempo reale", body: "Consiglia prodotti e varianti reali dal tuo catalogo dal vivo, mantenuti sincronizzati automaticamente." },
    { title: "Quiz e logica illimitati", body: "Crea tutti i quiz che vuoi su ogni piano, con logica condizionale e di ramificazione illimitata." },
    { title: "Sincronizzazione con Klaviyo ed email", body: "Risposte e tag cliente passano a Klaviyo, Mailchimp, Omnisend, HubSpot e altri per la segmentazione." },
    { title: "Analisi degli abbandoni", body: "Visualizza gli abbandoni domanda per domanda per ridurre gli attriti e recuperare le risposte perse." },
  ],
  sol_related_h2: "Soluzioni e risorse correlate",
  sol_more_industries: "Altri settori",
  sol_more_quiztypes: "Altri tipi di quiz",
  sol_view: "Vedi soluzione",
  cmp_breadcrumb: "Confronta",
  cmp_eyebrow_prefix: "Confronto · RevenueHunt vs",
  cmp_cta_install: "installa su Shopify",
  cmp_cta_demo: "guarda una demo dal vivo",
  cmp_table_h2: "RevenueHunt vs {name} in breve",
  cmp_table_sub: "Le funzionalità che contano di più per un quiz prodotti su Shopify.",
  cmp_col_feature: "Funzionalità",
  cmp_yes: "Sì",
  cmp_no: "No",
  cmp_note: "Confronto basato su informazioni pubblicamente disponibili di ciascun fornitore alla data del {date}. I prezzi e le funzionalità di {name} potrebbero essere cambiati da allora, quindi controlla il loro sito per le ultime novità.",
  cmp_why_h2: "Perché i merchant scelgono RevenueHunt invece di {name}",
  cmp_bestfor_h2: "Quando {name} può essere la scelta migliore",
  cmp_switch_h2: "Passare da {name}",
  cmp_cta_start: "inizia gratis su Shopify",
  cmp_cta_book: "prenota una demo",
  cmp_other_h2: "Confronta altri strumenti per quiz",
  cmp_see: "Vedi confronto",
  cmp_hub_eyebrow: "Confronti",
  cmp_hub_h1: "RevenueHunt rispetto alle alternative",
  cmp_hub_sub: "Come RevenueHunt si confronta con altri strumenti di quiz prodotti, vendita guidata e personalizzazione, su prezzi, funzionalità e le piattaforme su cui vendi. Confronti onesti e aggiornati.",
  cmp_hub_title: "RevenueHunt rispetto alle alternative: confronta gli strumenti per quiz",
  cmp_hub_desc: "Scopri come RevenueHunt si confronta con Octane AI, Typeform, Zoovu, Nosto, Jebbit e Tolstoy su prezzi, funzionalità e piattaforme per i quiz di raccomandazione dei prodotti.",
  gl_breadcrumb: "Glossario",
  gl_eyebrow: "Glossario",
  gl_reviewed: "Ultima revisione {date}",
  gl_with_rh_h2: "{term} con RevenueHunt",
  gl_cta_start: "inizia gratis su Shopify",
  gl_cta_how: "guarda come funziona",
  gl_related_h2: "Letture correlate",
  gl_more_h2: "Altri termini del glossario",
  gl_cta_h2: "Mettilo in pratica con un quiz di raccomandazione dei prodotti.",
  gl_hub_eyebrow: "Glossario",
  gl_hub_h1: "Glossario di quiz e personalizzazione",
  gl_hub_sub: "Definizioni chiare dei termini dietro i quiz prodotti e la personalizzazione nell'ecommerce. Niente gergo né riempitivi, solo cosa significa ciascuno e perché conta.",
  gl_hub_title: "Glossario di quiz e personalizzazione",
  gl_hub_desc: "Definizioni chiare dei termini di quiz e personalizzazione nell'ecommerce: commercio conversazionale, scoperta dei prodotti, funnel di quiz e altro.",
  gl_hub_terms_h2: "Termini",
  gl_hub_read: "Leggi la definizione",
  gl_hub_guides_h2: "Guide e strumenti",
  gl_hub_guides_sub: "Guide più approfondite sui temi qui sopra, e un calcolatore per dimensionare l'opportunità per il tuo store.",
  gl_hub_readmore: "Leggi di più",
};

// Phase: es/fr/de/pt/it are filled in by a translator pass. Until then `LT`
// falls back to English for any missing locale so the site still builds.
const FILLED: Partial<Record<Lang, LongtailChrome>> = { en, es, fr, de, pt, it };

export const LT: Record<Lang, LongtailChrome> = {
  en,
  es: FILLED.es ?? en,
  fr: FILLED.fr ?? en,
  de: FILLED.de ?? en,
  pt: FILLED.pt ?? en,
  it: FILLED.it ?? en,
};

/** Fill {name}/{category}/{date}/{term} placeholders. */
export function fillLT(tpl: string, vars: Record<string, string>): string {
  return tpl.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? `{${k}}`);
}
