import type { Competitor } from "../competitors";

// Valeurs partagées de la colonne RevenueHunt (compendium + docs vérifiés).
// Conservées comme constantes nommées pour que chaque tableau raconte la même
// histoire RH.
const RH = {
  freePlan: "yes",
  startingPaid: "$39/mo",
  ecommerceRecs: "yes",
  catalogRecs: "yes",
  shopifyNative: "yes",
  multiPlatform: "yes",
  branching: "yes",
  analytics: "yes",
  emailIntegrations: "yes",
  aiBuilder: "yes",
  noForcedBranding: "yes",
  unlimitedQuizzes: "yes",
  transparentPricing: "yes",
} as const;

export const COMPETITORS_FR: Record<string, Competitor> = {
  "octane-ai": {
    slug: "octane-ai",
    name: "Octane AI",
    category: "application de quiz pour Shopify",
    title: "RevenueHunt vs Octane AI : l'alternative à Octane AI",
    description:
      "RevenueHunt vs Octane AI : offre gratuite, aucun filigrane Shopify et des quiz illimités à partir de $39/mo. L'alternative à Octane AI pour les quiz produit.",
    h1: "RevenueHunt vs Octane AI",
    heroSubtitle:
      "Les deux créent des quiz de recommandation de produits pour Shopify. RevenueHunt ajoute une offre gratuite, des quiz illimités et aucun filigrane, à une fraction du prix.",
    intro: [
      "Octane AI est une application de quiz produit et de personnalisation conçue pour Shopify. La tarification repose sur des crédits, démarre à $50/month et il n'y a aucune offre gratuite. C'est un outil performant, surtout pour les grandes marques de beauté. Mais l'offre d'entrée vous limite à deux quiz et conserve le logo Octane AI sur votre quiz jusqu'à ce que vous atteigniez le plan Plus à $200/month.",
      "RevenueHunt est le quiz de recommandation de produits utilisé par plus de 20 000 marques (4,9★, plus de 450 avis). Il démarre gratuitement, n'ajoute jamais de filigrane à votre quiz Shopify sur aucun plan, vous permet de créer des quiz illimités dès le premier jour et fonctionne au-delà de Shopify sur WooCommerce, BigCommerce, Magento, Wix et plus encore.",
    ],
    rows: [
      { feature: "Offre gratuite", rh: RH.freePlan, them: "no" },
      { feature: "Prix payant de départ", rh: RH.startingPaid, them: "$50/mo" },
      { feature: "Modèle de tarification", rh: "Forfaitaire, selon les réponses", them: "Basé sur des crédits + dépassement" },
      { feature: "Quiz illimités sur l'offre d'entrée", rh: RH.unlimitedQuizzes, them: "no" },
      { feature: "Aucun filigrane du fournisseur sur Shopify (tout plan)", rh: RH.noForcedBranding, them: "Logo jusqu'au plan Plus à $200/mo" },
      { feature: "Recommande de vrais produits de votre catalogue", rh: RH.catalogRecs, them: "yes" },
      { feature: "Application Shopify native (Built for Shopify)", rh: RH.shopifyNative, them: "no" },
      { feature: "Fonctionne sur WooCommerce, BigCommerce, Magento, Wix et plus", rh: RH.multiPlatform, them: "no" },
      { feature: "Créateur de quiz par IA (configuration en 60 secondes)", rh: RH.aiBuilder, them: "yes" },
      { feature: "Logique conditionnelle / de branchement illimitée", rh: RH.branching, them: "yes" },
      { feature: "Analyse de l'abandon question par question", rh: RH.analytics, them: "yes" },
      { feature: "Intégrations Klaviyo et email / CRM", rh: RH.emailIntegrations, them: "yes" },
    ],
    whySwitch: [
      {
        title: "Commencez gratuitement, puis payez un prix forfaitaire",
        body: "Octane AI n'a aucune offre gratuite et démarre à $50/month en crédits, avec des dépassements à $0.10 par crédit une fois épuisés. RevenueHunt propose une offre réellement gratuite et une tarification forfaitaire selon les réponses à partir de $39/month. Aucun calcul de crédits, aucun dépassement surprise.",
      },
      {
        title: "Conservez votre image de marque dès le premier jour",
        body: "Octane AI affiche son logo sur votre quiz jusqu'à ce que vous passiez au plan Plus à $200/month. RevenueHunt n'ajoute jamais de filigrane aux quiz Shopify, sur aucun plan, y compris l'offre gratuite.",
      },
      {
        title: "Créez autant de quiz que nécessaire",
        body: "L'offre d'entrée d'Octane AI vous limite à deux quiz. RevenueHunt vous permet de créer des quiz illimités sur chaque plan, afin que vous puissiez lancer un quiz par collection, campagne ou page de destination.",
      },
      {
        title: "Vendez partout, pas seulement sur Shopify",
        body: "Octane AI fonctionne uniquement sur Shopify. RevenueHunt s'exécute nativement sur Shopify et aussi sur WooCommerce, BigCommerce, Magento, Wix, Squarespace, et comme quiz hébergé autonome.",
      },
    ],
    bestFor:
      "Octane AI est un choix raisonnable pour les grandes marques de beauté déjà sur Shopify Plus qui veulent une personnalisation IA poussée et disposent du budget de $200/month et plus. Si vous voulez une offre gratuite, une tarification forfaitaire, des quiz sans marque ou un support multi-plateforme, RevenueHunt est le meilleur choix.",
    migration:
      "Passer d'Octane AI est rapide. Reconstruisez votre quiz dans le créateur par glisser-déposer de RevenueHunt (ou générez-le en 60 secondes avec notre AI Copilot), intégrez-le et connectez Klaviyo. La plupart des boutiques sont en ligne le jour même, et notre équipe de support vous aide à migrer.",
    faqs: [
      {
        question: "RevenueHunt est-il moins cher qu'Octane AI ?",
        answer:
          "Oui. RevenueHunt propose une offre gratuite et des plans payants à partir de $39/month avec une tarification forfaitaire basée sur les réponses. Octane AI n'a aucune offre gratuite, démarre à $50/month sur un système de crédits et facture $0.10 par crédit pour les dépassements.",
      },
      {
        question: "RevenueHunt ajoute-t-il son logo à mon quiz comme Octane AI ?",
        answer:
          "Non. RevenueHunt n'ajoute jamais de filigrane aux quiz Shopify sur aucun plan. Octane AI conserve son logo sur votre quiz jusqu'à ce que vous passiez au plan Plus à $200/month.",
      },
      {
        question: "RevenueHunt fonctionne-t-il sur des plateformes autres que Shopify ?",
        answer:
          "Oui. RevenueHunt fonctionne sur Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace, et comme quiz hébergé autonome. Octane AI fonctionne uniquement sur Shopify.",
      },
      {
        question: "Puis-je migrer mon quiz Octane AI vers RevenueHunt ?",
        answer:
          "Oui. Recréez votre quiz dans le créateur de RevenueHunt ou générez-le avec l'AI Quiz Copilot, puis connectez votre outil d'email. La plupart des marchands sont en ligne le jour même, et notre équipe vous aide avec la migration.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  typeform: {
    slug: "typeform",
    name: "Typeform",
    category: "créateur de formulaires et de sondages généraliste",
    title: "RevenueHunt vs Typeform pour les quiz ecommerce",
    description:
      "RevenueHunt vs Typeform : un quiz Built-for-Shopify qui recommande de vrais produits et génère des ventes, pas seulement un formulaire. Offre gratuite, à partir de $39/mo.",
    h1: "RevenueHunt vs Typeform",
    heroSubtitle:
      "Typeform crée de beaux formulaires et sondages. RevenueHunt crée des quiz de recommandation de produits qui se connectent à votre catalogue Shopify et transforment les réponses en ventes.",
    intro: [
      "Typeform est un créateur de formulaires et de sondages en ligne généraliste. Il est excellent pour les sondages, les formulaires de prospects et la recherche, avec un design conversationnel, une question à la fois. Mais il n'a aucune intégration Shopify native, aucune synchronisation du catalogue produit et aucun moteur de recommandation. Il collecte des réponses ; il ne recommande pas de produits.",
      "RevenueHunt est un quiz de recommandation de produits Built-for-Shopify utilisé par plus de 20 000 marques (4,9★, plus de 450 avis). Il associe les réponses de chaque client aux bons produits de votre catalogue en direct, affiche une page de résultats personnalisée avec ajout direct au panier et capture des prospects vers Klaviyo. Un tunnel de vente, pas seulement un formulaire.",
    ],
    rows: [
      { feature: "Offre gratuite", rh: RH.freePlan, them: "yes (limitée)" },
      { feature: "Prix payant de départ", rh: RH.startingPaid, them: "$29/mo" },
      { feature: "Conçu pour les recommandations de produits ecommerce", rh: RH.ecommerceRecs, them: "no" },
      { feature: "Recommande de vrais produits du catalogue de votre boutique", rh: RH.catalogRecs, them: "no" },
      { feature: "Synchronisation du catalogue produit", rh: "yes", them: "no" },
      { feature: "Application Shopify native (Built for Shopify)", rh: RH.shopifyNative, them: "no" },
      { feature: "Page de résultats avec ajout direct au panier", rh: "yes", them: "no" },
      { feature: "Créateur de quiz par IA (configuration en 60 secondes)", rh: RH.aiBuilder, them: "yes (formulaires IA)" },
      { feature: "Logique conditionnelle / de branchement", rh: RH.branching, them: "yes (sauts logiques)" },
      { feature: "Analyse de l'abandon question par question", rh: RH.analytics, them: "yes" },
      { feature: "Intégrations Klaviyo et email / CRM", rh: RH.emailIntegrations, them: "yes" },
      { feature: "Fonctionne sur WooCommerce, BigCommerce, Magento et plus", rh: RH.multiPlatform, them: "no" },
    ],
    whySwitch: [
      {
        title: "Recommande des produits, ne collecte pas seulement des réponses",
        body: "Typeform enregistre les réponses et s'arrête là. Le moteur de recommandation de RevenueHunt classe les produits, variantes et collections exacts de votre catalogue en fonction des réponses de chaque client et les affiche sur une page de résultats personnalisée.",
      },
      {
        title: "Conçu pour Shopify et l'ecommerce",
        body: "Typeform n'a aucune intégration Shopify native ni synchronisation du catalogue. RevenueHunt est une application Built-for-Shopify avec synchronisation du catalogue en temps réel et localisation automatique des titres, descriptions et prix des produits via Shopify Markets.",
      },
      {
        title: "Un tunnel, pas un formulaire",
        body: "RevenueHunt transforme un quiz en parcours de vente : résultats personnalisés, ajout direct au panier, blocs de réduction et capture d'email vers Klaviyo, pour que le quiz génère réellement des revenus, pas seulement des données.",
      },
      {
        title: "Fait pour les marchands",
        body: "Évitez la création de formulaires générique. Utilisez des modèles de quiz prêts à l'emploi pour les soins de la peau, les compléments, la mode et plus, ou laissez l'AI Copilot créer un quiz produit complet à partir d'une description de votre boutique en environ 60 secondes.",
      },
    ],
    bestFor:
      "Typeform est excellent pour les sondages, les formulaires de génération de prospects, les retours et la recherche où vous n'avez pas besoin de recommander des produits. Si votre objectif est d'aider les clients Shopify à trouver le bon produit et à l'acheter, RevenueHunt est conçu spécifiquement pour cela.",
    migration:
      "Vous utilisez déjà un quiz Typeform ? Reconstruisez-le dans RevenueHunt en quelques minutes, ou générez-le avec l'AI Copilot, reliez vos produits et connectez Klaviyo. Vous conservez l'expérience conversationnelle et ajoutez un véritable moteur de recommandation et l'ajout au panier.",
    faqs: [
      {
        question: "Typeform peut-il recommander des produits comme RevenueHunt ?",
        answer:
          "Non. Typeform est un créateur de formulaires et de sondages généraliste sans synchronisation de catalogue produit ni moteur de recommandation. RevenueHunt associe les réponses du quiz à de vrais produits de votre boutique et les affiche sur une page de résultats personnalisée avec ajout au panier.",
      },
      {
        question: "RevenueHunt s'intègre-t-il à Shopify alors que Typeform ne le fait pas ?",
        answer:
          "RevenueHunt est une application Built-for-Shopify avec synchronisation du catalogue en temps réel et localisation Shopify Markets. Typeform n'a aucune intégration native de recommandation de produits Shopify. Il n'est pas conçu pour la découverte de produits ecommerce.",
      },
      {
        question: "RevenueHunt est-il meilleur que Typeform pour un quiz ecommerce ?",
        answer:
          "Pour les quiz de recommandation de produits, oui. RevenueHunt est conçu spécifiquement pour cela. Pour les sondages et formulaires de prospects généraux, Typeform est un bon choix. Ils résolvent des problèmes différents.",
      },
      {
        question: "Puis-je capturer des prospects et les envoyer vers Klaviyo ?",
        answer:
          "Oui. RevenueHunt capture les emails dans le quiz et synchronise les réponses et les étiquettes clients vers Klaviyo, Mailchimp, Omnisend, HubSpot et plus, afin que vous puissiez relancer avec des campagnes personnalisées.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  zoovu: {
    slug: "zoovu",
    name: "Zoovu",
    category: "plateforme de découverte de produits pour entreprises",
    title: "RevenueHunt vs Zoovu : une alternative en libre-service",
    description:
      "RevenueHunt vs Zoovu : un quiz produit Shopify ciblé et en libre-service, avec une offre gratuite et une tarification à partir de $39/mo, pas une suite de découverte pour entreprises.",
    h1: "RevenueHunt vs Zoovu",
    heroSubtitle:
      "Zoovu est une plateforme de découverte de produits et de vente guidée pour entreprises, vendue par démo. RevenueHunt est un quiz produit ciblé que vous pouvez installer aujourd'hui : gratuit pour commencer, tarification transparente, en ligne le jour même.",
    intro: [
      "Zoovu est une plateforme de découverte de produits pour entreprises qui regroupe la recherche IA, la vente guidée, les recommandations de produits et les configurateurs visuels (CPQ) pour les grandes marques B2C et B2B aux catalogues énormes et complexes. Elle est indépendante de la plateforme, vendue via des démos avec une tarification entreprise sur mesure, et n'a aucune offre gratuite ni inscription en libre-service.",
      "RevenueHunt est un quiz de recommandation de produits ciblé utilisé par plus de 20 000 marques (4,9★, plus de 450 avis). Au lieu d'une suite de découverte pour entreprises, il fait une chose exceptionnellement bien, guider les clients Shopify vers le bon produit, avec une tarification transparente, une offre gratuite et une configuration le jour même, sans appel commercial requis.",
    ],
    rows: [
      { feature: "Offre gratuite", rh: RH.freePlan, them: "no" },
      { feature: "Tarification publique transparente", rh: RH.transparentPricing, them: "Sur mesure / demander une démo" },
      { feature: "Prix de départ", rh: RH.startingPaid, them: "Piloté par les ventes (entreprise)" },
      { feature: "Configuration en libre-service (sans appel commercial)", rh: "yes", them: "no" },
      { feature: "Conçu spécifiquement pour les quiz de recommandation de produits", rh: RH.ecommerceRecs, them: "Le quiz est un module d'une suite de découverte" },
      { feature: "Recommande de vrais produits de votre catalogue", rh: RH.catalogRecs, them: "yes" },
      { feature: "Application Shopify native (Built for Shopify)", rh: RH.shopifyNative, them: "Via intégration" },
      { feature: "Créateur de quiz par IA (configuration en 60 secondes)", rh: RH.aiBuilder, them: "Suite IA pour entreprises" },
      { feature: "Quiz illimités", rh: RH.unlimitedQuizzes, them: "yes" },
      { feature: "Logique conditionnelle / de branchement illimitée", rh: RH.branching, them: "yes" },
      { feature: "Analyse de l'abandon question par question", rh: RH.analytics, them: "yes" },
      { feature: "Intégrations Klaviyo et email / CRM", rh: RH.emailIntegrations, them: "yes" },
    ],
    whySwitch: [
      {
        title: "Libre-service, pas un appel commercial",
        body: "Zoovu est vendu via des démos et des contrats entreprise sur mesure sans tarification publique. RevenueHunt s'installe et se lance directement : choisissez un plan, créez votre quiz et publiez. Aucun processus d'achat, aucun projet de mise en œuvre.",
      },
      {
        title: "En ligne en quelques minutes, pas un déploiement",
        body: "Zoovu est une suite de découverte lourde qui couvre la recherche, les configurateurs et la vente guidée sur de nombreux systèmes. RevenueHunt est une application de quiz ciblée que la plupart des marchands lancent le jour même, avec un AI Copilot qui ébauche un quiz complet en 60 secondes.",
      },
      {
        title: "Une tarification adaptée à une marque en croissance",
        body: "Les plateformes de découverte pour entreprises sont tarifées pour des catalogues mondiaux et de grandes équipes. RevenueHunt démarre gratuitement et évolue selon les réponses à partir de $39/month, dimensionné pour les marques Shopify et Shopify Plus.",
      },
      {
        title: "La simplicité Built-for-Shopify",
        body: "RevenueHunt est une application Built-for-Shopify avec synchronisation du catalogue en temps réel et localisation Shopify Markets, notée 4,9★ par plus de 450 marchands. La profondeur dont vous avez besoin pour la découverte de produits sans la lourdeur des entreprises.",
      },
    ],
    bestFor:
      "Zoovu convient aux grandes entreprises avec des catalogues massifs et complexes (électronique grand public, électroménager, industriel, B2B) qui ont besoin de configurateurs, de CPQ et de vente guidée sur de nombreux systèmes, avec le budget et l'équipe pour un déploiement d'entreprise. Si vous voulez un quiz Shopify ciblé, abordable et en libre-service, RevenueHunt est le meilleur choix.",
    migration:
      "Passer de Zoovu est simple. Créez votre quiz dans RevenueHunt (ou générez-le avec l'AI Copilot), intégrez-le et connectez Klaviyo ou votre CRM. Aucun projet de mise en œuvre. La plupart des boutiques sont en ligne le jour même, et le support vous aide à y arriver.",
    faqs: [
      {
        question: "Combien coûte RevenueHunt comparé à Zoovu ?",
        answer:
          "RevenueHunt propose une offre gratuite et des plans payants transparents à partir de $39/month. Zoovu ne publie pas de tarification. C'est une plateforme pour entreprises pilotée par les ventes qui propose une tarification sur mesure après une démo.",
      },
      {
        question: "RevenueHunt est-il une plateforme de découverte pour entreprises comme Zoovu ?",
        answer:
          "Non, et c'est tout l'intérêt. Zoovu regroupe la recherche IA, les configurateurs, le CPQ et la vente guidée pour les grands catalogues. RevenueHunt se concentre sur les quiz de recommandation de produits pour Shopify et fait ce travail exceptionnellement bien, avec une configuration en libre-service et aucun appel commercial.",
      },
      {
        question: "RevenueHunt fait-il de la vente guidée comme Zoovu ?",
        answer:
          "Oui. Un quiz RevenueHunt est de la vente guidée : il pose les bonnes questions et associe les réponses aux produits exacts de votre catalogue, avec une page de résultats personnalisée et un ajout direct au panier, sans tarification entreprise ni déploiement.",
      },
      {
        question: "Combien de temps prend la configuration par rapport à Zoovu ?",
        answer:
          "La plupart des marchands RevenueHunt se lancent le jour même, et l'AI Quiz Copilot peut ébaucher un quiz complet en environ 60 secondes. Zoovu est généralement une mise en œuvre d'entreprise pilotée par les ventes.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  jebbit: {
    slug: "jebbit",
    name: "Jebbit",
    category: "plateforme de données déclarées pour entreprises (désormais intégrée à BlueConic)",
    title: "RevenueHunt vs Jebbit : une alternative en libre-service",
    description:
      "RevenueHunt vs Jebbit : un quiz produit Shopify autonome et en libre-service avec une offre gratuite à partir de $39/mo. Jebbit fait désormais partie du CDP entreprise de BlueConic.",
    h1: "RevenueHunt vs Jebbit",
    heroSubtitle:
      "Jebbit fait désormais partie de la plateforme de données clients pour entreprises de BlueConic, vendue par démo. RevenueHunt est un quiz produit autonome et en libre-service : gratuit pour commencer, natif Shopify, en ligne le jour même.",
    intro: [
      "Jebbit crée des quiz interactifs, des sélecteurs de produits et des parcours de préférences pour collecter des données déclarées (zero-party). Il a été racheté et s'appelle désormais « Experiences by Jebbit », faisant partie de la plateforme de données clients de BlueConic, destinée aux marques B2C entreprise et mid-market (L'Oréal, Express, Heineken), indépendante de la plateforme, et vendue via des démos sans tarification publique ni offre gratuite.",
      "RevenueHunt est un quiz de recommandation de produits autonome utilisé par plus de 20 000 marques (4,9★, plus de 450 avis). Vous n'avez pas besoin d'acheter un CDP pour l'utiliser : c'est un quiz Built-for-Shopify ciblé avec une tarification transparente, une offre gratuite et une configuration le jour même, en libre-service, sans appel commercial.",
    ],
    rows: [
      { feature: "Offre gratuite", rh: RH.freePlan, them: "no" },
      { feature: "Tarification publique transparente", rh: RH.transparentPricing, them: "Sur mesure / demander une démo" },
      { feature: "Prix de départ", rh: RH.startingPaid, them: "Piloté par les ventes (entreprise)" },
      { feature: "Configuration en libre-service (sans appel commercial)", rh: "yes", them: "no" },
      { feature: "Produit autonome (aucun achat de plateforme requis)", rh: "yes", them: "Désormais intégré au CDP BlueConic" },
      { feature: "Recommande de vrais produits de votre catalogue", rh: RH.catalogRecs, them: "yes" },
      { feature: "Application Shopify native (Built for Shopify)", rh: RH.shopifyNative, them: "Via intégration" },
      { feature: "Créateur de quiz par IA (configuration en 60 secondes)", rh: RH.aiBuilder, them: "no" },
      { feature: "Quiz illimités", rh: RH.unlimitedQuizzes, them: "yes" },
      { feature: "Logique conditionnelle / de branchement illimitée", rh: RH.branching, them: "yes" },
      { feature: "Analyse de l'abandon question par question", rh: RH.analytics, them: "yes" },
      { feature: "Capture les données zero-party / déclarées", rh: "yes", them: "yes" },
    ],
    whySwitch: [
      {
        title: "Un quiz autonome, pas un achat de plateforme",
        body: "Jebbit s'appelle désormais « Experiences by Jebbit » au sein du CDP de BlueConic. RevenueHunt est une application ciblée que vous pouvez utiliser seule. Aucune plateforme de données clients à acheter ni à mettre en œuvre.",
      },
      {
        title: "Libre-service, pas un appel commercial",
        body: "Jebbit/BlueConic est vendu via des démos et des contrats entreprise sur mesure sans tarification publique. RevenueHunt s'installe et se lance directement, avec une offre gratuite et une tarification transparente à partir de $39/month.",
      },
      {
        title: "Conçu pour Shopify, en ligne le jour même",
        body: "RevenueHunt est une application Built-for-Shopify avec synchronisation du catalogue en temps réel et ajout direct au panier, et un AI Copilot qui ébauche un quiz complet en 60 secondes. La plupart des marchands se lancent le jour même.",
      },
      {
        title: "Vos données zero-party restent les vôtres",
        body: "Chaque réponse au quiz est une donnée zero-party que vos clients fournissent volontairement. RevenueHunt synchronise les réponses et les étiquettes clients vers Klaviyo, Mailchimp, Omnisend, HubSpot et plus. Aucun CDP requis pour les exploiter.",
      },
    ],
    bestFor:
      "Jebbit, en tant que partie de BlueConic, convient aux marques B2C entreprise qui veulent des expériences de données déclarées étroitement couplées à une plateforme de données clients complète et activées sur de nombreux canaux, avec le budget pour un CDP. Si vous voulez un quiz Shopify autonome, abordable et en libre-service, RevenueHunt est le meilleur choix.",
    migration:
      "Quitter Jebbit, ou évaluer BlueConic, est simple. Créez votre quiz dans RevenueHunt (ou générez-le avec l'AI Copilot), intégrez-le et connectez Klaviyo ou votre CRM. La plupart des boutiques sont en ligne le jour même, et vos données zero-party continuent d'alimenter vos outils d'email.",
    faqs: [
      {
        question: "Jebbit est-il encore disponible seul ?",
        answer:
          "Jebbit s'appelle désormais « Experiences by Jebbit », faisant partie de la plateforme de données clients de BlueConic. RevenueHunt est un quiz produit autonome que vous pouvez utiliser sans acheter de CDP : en libre-service, avec une offre gratuite à partir de $39/month.",
      },
      {
        question: "Combien coûte RevenueHunt comparé à Jebbit ?",
        answer:
          "RevenueHunt propose une offre gratuite et des plans payants transparents à partir de $39/month. Jebbit/BlueConic ne publie pas de tarification. C'est une plateforme pour entreprises pilotée par les ventes qui propose une tarification sur mesure après une démo.",
      },
      {
        question: "RevenueHunt collecte-t-il des données zero-party (déclarées) comme Jebbit ?",
        answer:
          "Oui. Chaque réponse au quiz est une donnée zero-party que vos clients fournissent volontairement. RevenueHunt synchronise les réponses et les étiquettes clients vers Klaviyo, Mailchimp, Omnisend, HubSpot et plus pour la segmentation et le marketing personnalisé.",
      },
      {
        question: "Combien de temps prend la configuration par rapport à Jebbit ?",
        answer:
          "La plupart des marchands RevenueHunt se lancent le jour même, et l'AI Quiz Copilot peut ébaucher un quiz complet en environ 60 secondes. Jebbit/BlueConic est généralement une mise en œuvre d'entreprise pilotée par les ventes.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  nosto: {
    slug: "nosto",
    name: "Nosto",
    category: "plateforme de personnalisation pour entreprises",
    title: "RevenueHunt vs Nosto : une alternative en libre-service",
    description:
      "RevenueHunt vs Nosto : un quiz produit ciblé et en libre-service qui capture des données zero-party, avec une offre gratuite à partir de $39/mo, pas une suite de personnalisation pour entreprises.",
    h1: "RevenueHunt vs Nosto",
    heroSubtitle:
      "Nosto est une suite de personnalisation, de recherche et de merchandising pour entreprises, vendue par démo. RevenueHunt est un quiz produit ciblé et zero-party que vous pouvez installer aujourd'hui : gratuit pour commencer, en ligne le jour même.",
    intro: [
      "Nosto est une Commerce Experience Platform qui regroupe les recommandations de produits par IA, la recherche personnalisée sur le site, le merchandising et la personnalisation du contenu pour les marques entreprise et mid-market. Elle est indépendante de la plateforme, vendue via des démos avec une tarification entreprise sur mesure, et n'a aucune offre gratuite ni inscription en libre-service. Sa personnalisation est principalement pilotée par les données comportementales plutôt que par des quiz.",
      "RevenueHunt est un quiz de recommandation de produits ciblé utilisé par plus de 20 000 marques (4,9★, plus de 450 avis). Au lieu d'une suite pour entreprises, il guide les clients vers le bon produit en les interrogeant directement, capturant des données zero-party qui vous appartiennent, avec une tarification transparente, une offre gratuite et une configuration le jour même, sans appel commercial requis.",
    ],
    rows: [
      { feature: "Offre gratuite", rh: RH.freePlan, them: "no" },
      { feature: "Tarification publique transparente", rh: RH.transparentPricing, them: "Sur mesure / demander une démo" },
      { feature: "Prix de départ", rh: RH.startingPaid, them: "Piloté par les ventes (entreprise)" },
      { feature: "Configuration en libre-service (sans appel commercial)", rh: "yes", them: "no" },
      { feature: "Conçu spécifiquement pour les quiz de recommandation de produits", rh: RH.ecommerceRecs, them: "Suite de personnalisation, pas axée quiz" },
      { feature: "Capture des données zero-party (les clients vous renseignent directement)", rh: "yes", them: "Principalement comportemental / prédictif" },
      { feature: "Recommande de vrais produits de votre catalogue", rh: RH.catalogRecs, them: "yes" },
      { feature: "Application Shopify native (Built for Shopify)", rh: RH.shopifyNative, them: "yes" },
      { feature: "Créateur de quiz par IA (configuration en 60 secondes)", rh: RH.aiBuilder, them: "no" },
      { feature: "Quiz illimités", rh: RH.unlimitedQuizzes, them: "Pas un outil de quiz" },
      { feature: "Analyse de l'abandon question par question", rh: RH.analytics, them: "yes" },
      { feature: "Intégrations Klaviyo et email / CRM", rh: RH.emailIntegrations, them: "yes" },
    ],
    whySwitch: [
      {
        title: "Libre-service, pas un appel commercial",
        body: "Nosto est vendu via des démos et des contrats entreprise sur mesure sans tarification publique. RevenueHunt s'installe et se lance directement : choisissez un plan, créez votre quiz et publiez, avec une offre gratuite et une tarification transparente à partir de $39/month.",
      },
      {
        title: "Des données zero-party, pas seulement du suivi comportemental",
        body: "Nosto personnalise principalement à partir de signaux comportementaux et prédictifs. RevenueHunt interroge les clients directement via un quiz, capturant des données zero-party qui vous appartiennent et que vous pouvez synchroniser vers Klaviyo, Mailchimp, Omnisend et plus.",
      },
      {
        title: "En ligne en quelques minutes, pas un déploiement",
        body: "Nosto est une suite multi-modules (recommandations, recherche, merchandising) qui nécessite généralement un onboarding. RevenueHunt est une application de quiz ciblée que la plupart des marchands lancent le jour même, avec un AI Copilot qui ébauche un quiz complet en 60 secondes.",
      },
      {
        title: "Une tarification adaptée à une marque en croissance",
        body: "Les suites de personnalisation pour entreprises sont tarifées pour de grandes équipes et de grands catalogues. RevenueHunt démarre gratuitement et évolue selon les réponses à partir de $39/month, dimensionné pour les marques Shopify et Shopify Plus.",
      },
    ],
    bestFor:
      "Nosto convient aux marques entreprise et mid-market qui veulent une suite complète de personnalisation comportementale, de recherche et de merchandising sur plusieurs vitrines, avec le budget et l'équipe pour un déploiement d'entreprise. Si vous voulez un quiz produit ciblé, abordable et en libre-service qui capture des données zero-party, RevenueHunt est le meilleur choix.",
    migration:
      "Passer de Nosto est simple. Créez votre quiz dans RevenueHunt (ou générez-le avec l'AI Copilot), intégrez-le et connectez Klaviyo ou votre CRM. Aucun projet de mise en œuvre. La plupart des boutiques sont en ligne le jour même, et vos données zero-party alimentent directement vos outils d'email.",
    faqs: [
      {
        question: "Combien coûte RevenueHunt comparé à Nosto ?",
        answer:
          "RevenueHunt propose une offre gratuite et des plans payants transparents à partir de $39/month. Nosto ne publie pas de tarification. C'est une plateforme pour entreprises pilotée par les ventes qui propose une tarification sur mesure après une démo.",
      },
      {
        question: "RevenueHunt est-il une suite de personnalisation comme Nosto ?",
        answer:
          "Non, et c'est tout l'intérêt. Nosto regroupe les recommandations comportementales, la recherche sur le site et le merchandising. RevenueHunt se concentre sur les quiz de recommandation de produits qui capturent des données zero-party, avec une configuration en libre-service et aucun appel commercial.",
      },
      {
        question: "RevenueHunt utilise-t-il des données zero-party plutôt que le suivi comportemental ?",
        answer:
          "Oui. RevenueHunt guide les clients à travers un quiz et ils vous indiquent leurs préférences, objectifs et contraintes directement : des données zero-party qui vous appartiennent, plutôt que de déduire l'intention à partir du comportement et des cookies.",
      },
      {
        question: "Combien de temps prend la configuration par rapport à Nosto ?",
        answer:
          "La plupart des marchands RevenueHunt se lancent le jour même, et l'AI Quiz Copilot peut ébaucher un quiz complet en environ 60 secondes. Nosto est généralement une mise en œuvre d'entreprise pilotée par les ventes.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  tolstoy: {
    slug: "tolstoy",
    name: "Tolstoy",
    category: "plateforme de vidéo shoppable et de quiz",
    title: "RevenueHunt vs Tolstoy : une alternative axée quiz",
    description:
      "RevenueHunt vs Tolstoy : un quiz produit conçu spécifiquement avec un véritable moteur de recommandation et des données zero-party, face à une plateforme vidéo dotée d'une fonction de quiz.",
    h1: "RevenueHunt vs Tolstoy",
    heroSubtitle:
      "Tolstoy est une plateforme de vidéo shoppable dotée d'une fonction de quiz. RevenueHunt est un quiz de recommandation de produits conçu spécifiquement, avec un véritable moteur de recommandation et des données zero-party.",
    intro: [
      "Tolstoy est une plateforme de commerce par IA construite autour de la vidéo shoppable, des médias générés par IA et d'un agent d'achat IA, avec une tarification basée sur les impressions à partir de $19/month. C'est un outil performant axé vidéo. Mais le quiz produit est une fonction secondaire aux côtés de l'expérience vidéo.",
      "RevenueHunt est un quiz de recommandation de produits utilisé par plus de 20 000 marques (4,9★, plus de 450 avis). Il est axé quiz : un moteur de recommandation dédié associe les réponses de chaque client aux bons produits de votre catalogue, capture des données zero-party et convertit sur une page de résultats personnalisée, sur Shopify, WooCommerce, BigCommerce, Magento, Wix et plus.",
    ],
    rows: [
      { feature: "Offre gratuite", rh: RH.freePlan, them: "yes (limitée)" },
      { feature: "Prix payant de départ", rh: RH.startingPaid, them: "$19/mo" },
      { feature: "Modèle de tarification", rh: "Forfaitaire, selon les réponses", them: "Selon les impressions + crédits IA" },
      { feature: "Conçu spécifiquement pour les quiz de recommandation de produits", rh: RH.ecommerceRecs, them: "Le quiz est une fonction secondaire (axé vidéo)" },
      { feature: "Moteur de recommandation dédié (vote favorable et exclusion, page de résultats)", rh: "yes", them: "Achat axé vidéo" },
      { feature: "Recommande de vrais produits de votre catalogue", rh: RH.catalogRecs, them: "yes" },
      { feature: "Capture des données zero-party (les clients vous renseignent directement)", rh: "yes", them: "Principalement données d'engagement vidéo" },
      { feature: "Application Shopify native (Built for Shopify)", rh: RH.shopifyNative, them: "yes" },
      { feature: "Fonctionne sur WooCommerce, BigCommerce, Magento, Wix et plus", rh: RH.multiPlatform, them: "no" },
      { feature: "Créateur de quiz par IA (configuration en 60 secondes)", rh: RH.aiBuilder, them: "IA axée vidéo" },
      { feature: "Analyse de l'abandon question par question", rh: RH.analytics, them: "yes" },
      { feature: "Intégrations Klaviyo et email / CRM", rh: RH.emailIntegrations, them: "yes" },
    ],
    whySwitch: [
      {
        title: "Un outil axé quiz, pas un module vidéo",
        body: "Tolstoy est une plateforme de vidéo shoppable où le quiz est une fonction secondaire. RevenueHunt est conçu spécifiquement pour les quiz de recommandation de produits, avec un moteur de recommandation dédié et une page de résultats axée conversion.",
      },
      {
        title: "Un véritable moteur de recommandation",
        body: "RevenueHunt classe les produits, variantes et collections exacts de votre catalogue en direct à l'aide d'un modèle de vote favorable et d'exclusion, avec des blocs de résultats conditionnels et un ajout direct au panier. Une profondeur que le quiz d'un outil vidéo n'égale pas.",
      },
      {
        title: "Des données zero-party qui vous appartiennent",
        body: "RevenueHunt capture ce que les clients vous indiquent (préférences, objectifs, contraintes) et le synchronise vers Klaviyo, Mailchimp, Omnisend et plus pour la segmentation. La force de Tolstoy est l'engagement vidéo, pas les données structurées de quiz.",
      },
      {
        title: "Vendez partout, éprouvé à grande échelle",
        body: "RevenueHunt s'exécute nativement sur Shopify et aussi sur WooCommerce, BigCommerce, Magento, Wix, Squarespace, et en autonome, plébiscité par plus de 20 000 marques avec 4,9★ sur plus de 450 avis.",
      },
    ],
    bestFor:
      "Tolstoy est un bon choix si votre stratégie est axée vidéo (vidéo shoppable, UGC, TikTok Shop) et qu'un quiz est un plus. Si vous voulez un quiz de recommandation de produits dédié avec un véritable moteur de recommandation et des données zero-party, RevenueHunt est le meilleur choix.",
    migration:
      "Si vous utilisiez un quiz au sein de Tolstoy, le déplacer est rapide. Reconstruisez-le dans le créateur de RevenueHunt (ou générez-le en 60 secondes avec notre AI Copilot), intégrez-le et connectez Klaviyo. La plupart des boutiques sont en ligne le jour même, et notre équipe de support vous aide à migrer.",
    faqs: [
      {
        question: "RevenueHunt est-il meilleur que Tolstoy pour un quiz produit ?",
        answer:
          "Pour un quiz de recommandation de produits dédié, oui. RevenueHunt est conçu spécifiquement pour cela, avec un véritable moteur de recommandation et des données zero-party. Tolstoy est axé vidéo, avec le quiz comme fonction secondaire. Pour la vidéo shoppable spécifiquement, Tolstoy est conçu spécifiquement.",
      },
      {
        question: "Tolstoy propose-t-il des quiz de recommandation de produits ?",
        answer:
          "Oui, en tant que fonction secondaire aux côtés de sa vidéo shoppable. RevenueHunt est axé quiz : il est construit autour du quiz et de son moteur de recommandation, de sa page de résultats et de sa capture de données zero-party.",
      },
      {
        question: "RevenueHunt prend-il aussi en charge la vidéo ?",
        answer:
          "Oui. Vous pouvez ajouter de la vidéo aux questions du quiz et à la page de résultats personnalisée. RevenueHunt est axé quiz plutôt qu'une plateforme vidéo, donc la vidéo soutient le quiz plutôt que l'inverse.",
      },
      {
        question: "Puis-je capturer des données zero-party et les envoyer vers Klaviyo ?",
        answer:
          "Oui. RevenueHunt capture les réponses au quiz comme données zero-party et synchronise les réponses et les étiquettes clients vers Klaviyo, Mailchimp, Omnisend, HubSpot et plus pour la segmentation et le marketing personnalisé.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },
};
