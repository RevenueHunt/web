import type { Solution } from "../solutions";

const VERIFIED = "2026-06-07";

export const SOLUTIONS_FR: Record<string, Solution> = {
  // ----------------------------------------------------------------- verticals
  skincare: {
    slug: "skincare",
    type: "vertical",
    name: "Soins de la peau",
    chip: "Secteur",
    title: "Quiz soins de la peau pour Shopify et WooCommerce",
    description:
      "Créez un quiz soins de la peau qui identifie le type de peau et les besoins, puis recommande la bonne routine. Offre gratuite, créateur AI, en ligne le jour même.",
    h1: "Des quiz soins de la peau qui transforment les visiteurs en routine",
    heroSubtitle:
      "La plupart des clients qui achètent des soins de la peau pour la première fois ne savent pas quels produits leur conviennent. Un quiz pose les bonnes questions et renvoie une routine personnalisée qu'ils peuvent ajouter au panier.",
    intro: [
      "Les soins de la peau sont la catégorie la plus difficile à acheter à froid. Les clients arrivent avec un besoin, pas un produit en tête, et un mur de nettoyants, de sérums et de SPF ne les aide pas à choisir. Un quiz soins de la peau remplace ce mur par une courte conversation guidée : type de peau, besoin principal, sensibilités et budget en entrée, une routine personnalisée en sortie.",
      "RevenueHunt est utilisé par plus de 20 000 marques pour faire exactement cela. Il associe chaque réponse à de vrais produits de votre catalogue, regroupe le résultat par étape de routine (nettoyant, traitement, hydratant, SPF) et capture le profil de peau du client sous forme de zero-party data que vous pouvez synchroniser avec Klaviyo.",
    ],
    quizTypes: [
      {
        title: "Identification du type de peau",
        body: "Cinq à sept questions sur le type de peau, les besoins et les objectifs renvoient une routine adaptée. Le quiz soins de la peau classique, et le point de départ qui convertit le mieux.",
      },
      {
        title: "Création de routine",
        body: "Utilisez des emplacements de recommandation pour réserver une place à chaque étape, afin que chaque client reçoive une routine complète en 3 ou 5 étapes plutôt qu'un seul produit.",
      },
      {
        title: "Quiz axé sur le besoin",
        body: "Commencez par le problème (acné, vieillissement, sécheresse, sensibilité) et créez des embranchements avec une logique conditionnelle pour que chaque client ne voie que les questions qui le concernent.",
      },
      {
        title: "Correspondance ingrédient ou sensibilité",
        body: "Excluez les produits qui entrent en conflit avec une allergie ou une sensibilité déclarée, afin qu'un client qui signale sans parfum ne voie jamais un produit parfumé dans ses résultats.",
      },
    ],
    howItHelps: [
      "Le moteur de recommandation classe les produits selon les réponses qui comptent le plus. Donnez plus de poids à un besoin incontournable qu'à un besoin secondaire, et excluez tout ce qu'un client écarte, pour que la page de résultats soit réellement sur mesure plutôt qu'un simple rayon de meilleures ventes.",
      "Chaque réponse est de la zero-party data. Un client qui vous indique que sa peau est sèche et sensible et qu'il se soucie de l'anti-âge constitue un segment auprès duquel vous pouvez communiquer pendant des années. RevenueHunt synchronise ce profil et les customer tags avec Klaviyo, Mailchimp, Omnisend et plus encore.",
      "Créez-le en quelques minutes, pas en quelques semaines. Partez d'un modèle de soins de la peau, ou décrivez votre boutique à l'AI Quiz Copilot et il génère les questions, la logique et les associations de produits en environ 60 secondes. Publiez ensuite sous forme de popup, d'intégration ou de landing page complète.",
    ],
    demo: {
      label: "Essayer le quiz type de peau",
      href: "https://productrecommendationquiz.com/pages/skin-type-quiz?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_skincare",
      blurb: "Un quiz soins de la peau en ligne sur notre boutique de démonstration. Répondez à quelques questions et voyez la routine qu'il renvoie.",
    },
    faqs: [
      {
        question: "Combien de questions un quiz soins de la peau doit-il comporter ?",
        answer:
          "Cinq à sept questions visibles conviennent à la plupart des marques. Utilisez une logique conditionnelle pour ignorer les questions sans objet, afin qu'un client sans sensibilité ne voie jamais l'étape sur les allergies.",
      },
      {
        question: "Le quiz peut-il recommander une routine complète, pas seulement un produit ?",
        answer:
          "Oui. Les emplacements de recommandation réservent une place à chaque étape de la routine (nettoyant, traitement, hydratant, SPF), afin que chaque client reçoive une routine complète avec ajout au panier pour l'ensemble.",
      },
      {
        question: "Fonctionne-t-il pour les peaux sensibles et les allergies ?",
        answer:
          "Oui. Chaque réponse peut exclure des produits, donc signaler une allergie ou une sensibilité retire tout produit en conflit des résultats, même s'il correspondait fortement par ailleurs.",
      },
      {
        question: "Puis-je capturer des emails et envoyer la routine vers Klaviyo ?",
        answer:
          "Oui. Le quiz capture l'email et le profil de peau complet sous forme de zero-party data, et synchronise les réponses et les customer tags avec Klaviyo, Mailchimp, Omnisend, HubSpot et plus encore.",
      },
    ],
    related: [
      { label: "Modèles de quiz soins de la peau", href: "/templates/" },
      { label: "Quiz création de routine", href: "/solutions/routine-builder/" },
      { label: "Quiz identification de teinte", href: "/solutions/shade-finder/" },
      { label: "Pour les marques de beauté", href: "/for-beauty-brands/" },
      { label: "Quiz pour Shopify", href: "/product-recommendation-quiz-shopify/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  beauty: {
    slug: "beauty",
    type: "vertical",
    name: "Beauté et cosmétiques",
    chip: "Secteur",
    title: "Quiz beauté et cosmétiques pour votre boutique",
    description:
      "Un quiz beauté qui identifie la teinte, trouve les bons produits et construit une routine à partir de votre catalogue. Offre gratuite, créateur AI, multi-plateforme.",
    h1: "Des quiz beauté qui associent les clients au bon produit",
    heroSubtitle:
      "Teinte de fond de teint, couleur de lèvres, routine complète : un quiz beauté répond aux questions qu'une grille de produits ne peut pas traiter, et dirige les clients vers une page de résultats personnalisée.",
    intro: [
      "Les clients beauté font face à deux problèmes à la fois : trop de choix et trop de risque. Choisissez la mauvaise teinte de fond de teint et il sera retourné. Un quiz beauté supprime les approximations en posant des questions sur le sous-ton, la couvrance, le fini et le besoin, puis en recommandant les produits exacts qui conviennent.",
      "RevenueHunt alimente des quiz beauté pour des milliers de marques. Il récupère de vrais produits et variantes de votre catalogue, les affiche sur une page de résultats avec ajout au panier direct, et capture le profil beauté de chaque client sous forme de zero-party data pour des relances email segmentées.",
    ],
    quizTypes: [
      {
        title: "Correspondance de teinte",
        body: "Les questions sur le sous-ton, l'intensité et le fini orientent vers le bon fond de teint, correcteur ou rouge à lèvres. Les réponses à choix d'images rendent l'expérience rapide sur mobile.",
      },
      {
        title: "Création de routine complète",
        body: "Recommandez un ensemble complet (préparation, base, couleur, fixation) grâce aux emplacements de recommandation, afin que les clients achètent la routine plutôt qu'un article isolé.",
      },
      {
        title: "Quiz sur les besoins de peau ou de cheveux",
        body: "Créez des embranchements par besoin et type de peau ou de cheveux pour que la page de résultats s'adresse à l'objectif précis de chaque client.",
      },
      {
        title: "Recherche de cadeau ou de coffret découverte",
        body: "Aidez les acheteurs de cadeaux et les nouveaux clients qui ne connaissent pas le catalogue en recommandant un coffret découverte ou un assortiment soigneusement sélectionné.",
      },
    ],
    howItHelps: [
      "La teinte et l'ajustement sont précisément là où surviennent les retours. En demandant le sous-ton et la couvrance dès le départ et en excluant tout ce qui ne correspond pas, le quiz dirige les clients vers des produits qu'ils ont bien plus de chances de garder.",
      "Les questions à choix d'images permettent aux clients de toucher une image au lieu de se décrire, ce qui maintient des taux de complétion élevés sur mobile, où atterrit l'essentiel du trafic beauté.",
      "Le profil du client (sous-ton, type de peau, fini préféré) se synchronise avec votre outil email sous forme de customer tags, afin que chaque campagne après le quiz puisse être personnalisée au lieu d'être générique.",
    ],
    demo: {
      label: "Essayer le quiz fond de teint",
      href: "https://productrecommendationquiz.com/pages/foundation-match?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_beauty",
      blurb: "Un quiz de correspondance de teinte basé sur l'image, en ligne sur notre boutique de démonstration, avec des résultats exacts.",
    },
    faqs: [
      {
        question: "Un quiz beauté peut-il identifier les teintes de fond de teint ?",
        answer:
          "Oui. Posez des questions sur le sous-ton, l'intensité et le fini, reliez chaque réponse aux teintes correspondantes et excluez le reste. La page de résultats affiche la teinte exacte avec ajout au panier.",
      },
      {
        question: "Prend-il en charge les questions à choix d'images ?",
        answer:
          "Oui. Les choix peuvent être affichés sous forme d'images cliquables, ce qui est idéal pour les questions de teinte, de fini et de style et augmente la complétion sur mobile.",
      },
      {
        question: "Fonctionnera-t-il sur WooCommerce ou BigCommerce, pas seulement Shopify ?",
        answer:
          "Oui. RevenueHunt fonctionne nativement sur Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace, et en tant que quiz hébergé autonome.",
      },
      {
        question: "Puis-je regrouper des produits dans un seul résultat ?",
        answer:
          "Oui. Utilisez les emplacements de recommandation pour réserver une place à chaque rôle de produit et renvoyer un ensemble ou un assortiment complet, avec ajout au panier pour toute la routine.",
      },
    ],
    related: [
      { label: "Quiz identification de teinte", href: "/solutions/shade-finder/" },
      { label: "Quiz soins de la peau", href: "/solutions/skincare/" },
      { label: "Quiz recherche de cadeau", href: "/solutions/gift-finder/" },
      { label: "Pour les marques de beauté", href: "/for-beauty-brands/" },
      { label: "Modèles de quiz", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  supplements: {
    slug: "supplements",
    type: "vertical",
    name: "Compléments",
    chip: "Secteur",
    title: "Quiz compléments : recommandez la bonne cure",
    description:
      "Un quiz compléments qui transforme des objectifs santé en cure recommandée. Embranchements par régime et restrictions, synchronisation des objectifs vers Klaviyo. Gratuit pour démarrer.",
    h1: "Des quiz compléments qui recommandent la bonne cure",
    heroSubtitle:
      "Les clients achètent des compléments pour un objectif, pas un SKU. Un quiz transforme le sommeil, l'énergie, l'immunité ou la concentration en une cure recommandée à partir de votre catalogue.",
    intro: [
      "Les clients de compléments raisonnent en objectifs : mieux dormir, plus d'énergie, une meilleure santé intestinale. Votre catalogue est organisé par produit. Un quiz compléments fait le lien entre les deux en posant des questions sur les objectifs, le régime et le mode de vie, puis en recommandant la cure adaptée.",
      "RevenueHunt associe chaque objectif aux bons SKU, gère les contraintes alimentaires avec des exclusions, et renvoie une cure multi-produits sur une page de résultats avec une remise sur la première commande. Les objectifs du client se synchronisent avec Klaviyo sous forme de tags pour un email continu et segmenté.",
    ],
    quizTypes: [
      {
        title: "Recherche par objectif santé",
        body: "Les clients choisissent leurs objectifs (sommeil, énergie, immunité, digestion, concentration) et chaque objectif favorise les produits correspondants pour construire une cure recommandée.",
      },
      {
        title: "Création de cure",
        body: "Réservez un emplacement pour chaque rôle (base, ciblé, performance) afin que chaque client reparte avec une cure complète et cohérente.",
      },
      {
        title: "Filtre régime et restrictions",
        body: "Excluez les produits incompatibles avec un régime vegan, sans gluten ou d'autres contraintes, afin que les résultats respectent automatiquement le régime de chaque client.",
      },
      {
        title: "Onboarding d'abonnement",
        body: "Utilisez le quiz en haut d'un tunnel d'abonnement, capturez l'email, et reliez la page de résultats à une offre abonnez-vous et économisez.",
      },
    ],
    howItHelps: [
      "La logique conditionnelle garde le quiz court. Si un client indique n'avoir aucune restriction alimentaire, le quiz ignore entièrement les questions sur les restrictions, afin que personne ne réponde à des questions sans objet.",
      "Les exclusions gèrent proprement les contraintes strictes. Un client vegan ne voit jamais un produit non vegan dans ses résultats, même s'il correspondait fortement aux seuls objectifs.",
      "Les objectifs sont la chose la plus précieuse qu'une marque de compléments puisse apprendre. Synchroniser les tags goal:sleep ou goal:gut avec Klaviyo vous permet de mener un email de cycle de vie qui correspond réellement à ce que chaque client cherche à atteindre.",
    ],
    faqs: [
      {
        question: "Un quiz compléments peut-il recommander une cure multi-produits ?",
        answer:
          "Oui. Chaque objectif favorise les produits correspondants, et les emplacements de recommandation réservent une place à chaque rôle, afin que la page de résultats renvoie une cure complète avec ajout au panier pour l'ensemble.",
      },
      {
        question: "Comment gère-t-il les régimes vegan ou sans gluten ?",
        answer:
          "Utilisez les exclusions. Relier une réponse de régime à une liste d'exclusion retire tout produit en conflit des résultats, quel que soit son score sur les objectifs.",
      },
      {
        question: "Puis-je ajouter une remise sur la première commande sur la page de résultats ?",
        answer:
          "Oui. La page de résultats prend en charge un bloc de code de réduction que vous pouvez afficher aux nouveaux acheteurs ou lier à des combinaisons de réponses spécifiques.",
      },
      {
        question: "Fonctionne-t-il pour une marque d'abonnement ?",
        answer:
          "Oui. Lancez le quiz en haut du tunnel, capturez l'email vers Klaviyo, et dirigez la page de résultats vers une offre abonnez-vous et économisez.",
      },
    ],
    related: [
      { label: "Quiz création d'assortiment", href: "/solutions/bundle-builder/" },
      { label: "Quiz fitness et nutrition", href: "/solutions/fitness/" },
      { label: "Quiz vente guidée", href: "/guided-selling-quiz/" },
      { label: "Modèles de quiz", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  fashion: {
    slug: "fashion",
    type: "vertical",
    name: "Mode et vêtements",
    chip: "Secteur",
    title: "Quiz de style mode et vêtements pour l'ecommerce",
    description:
      "Un quiz de style qui trouve la bonne taille, la bonne coupe et la bonne couleur dans votre catalogue et réduit les retours. Offre gratuite, multi-plateforme, multilingue.",
    h1: "Des quiz de style qui trouvent la bonne taille et la bonne coupe",
    heroSubtitle:
      "Le style est personnel et la taille est risquée. Un quiz mode apprend les goûts et la taille d'un client, puis recommande des pièces qu'il a de fortes chances de garder.",
    intro: [
      "La mode affiche le taux de retour le plus élevé de l'ecommerce, et la plupart proviennent de problèmes de taille et de style. Un quiz de style réduit les deux en posant des questions sur la morphologie, la coupe préférée, l'occasion et les goûts, puis en recommandant des pièces qui conviennent réellement au client.",
      "RevenueHunt construit le quiz à partir de votre catalogue en direct, variantes comprises, afin que la taille et la couleur se répercutent jusqu'à la page de résultats. Pour les marques vendant sur plusieurs marchés, un même quiz de base peut être traduit et assigné par Shopify Market, avec les titres et prix de produits localisés automatiquement.",
    ],
    quizTypes: [
      {
        title: "Quiz de profil de style",
        body: "Les questions sur les goûts, l'occasion et la couleur font ressortir les pièces qui correspondent à l'esthétique d'un client plutôt qu'une grille générique de nouveautés.",
      },
      {
        title: "Recherche de coupe et de taille",
        body: "Les questions sur la morphologie et la coupe préférée affinent vers la bonne coupe et la bonne taille, là où débutent la plupart des retours de vêtements.",
      },
      {
        title: "Création de capsule ou de tenue",
        body: "Utilisez les emplacements de recommandation pour assembler une tenue ou une capsule coordonnée plutôt qu'un article isolé.",
      },
      {
        title: "Recherche par occasion",
        body: "Créez des embranchements par occasion (travail, mariage, voyage) afin que chaque client voie une sélection soignée pour le moment qu'il prépare.",
      },
    ],
    howItHelps: [
      "Recommander selon la coupe et les goûts, pas seulement la popularité, dirige les clients vers des pièces qu'ils ont plus de chances de garder, ce qui est le levier le plus direct dont dispose une marque de mode sur les retours.",
      "Les variantes se répercutent de bout en bout. Reliez les réponses à des tailles et couleurs précises, et la page de résultats affiche la bonne variante avec ajout au panier, afin que les clients ne rebondissent pas vers une fiche produit pour choisir de nouveau.",
      "Vous vendez dans toute l'UE ou au-delà ? Construisez un quiz de base, laissez l'AI Copilot le traduire, assignez chaque version à son Shopify Market, et les données produit se localisent automatiquement. Aucun travail de traduction de produit par langue.",
    ],
    faqs: [
      {
        question: "Un quiz mode peut-il réduire les retours ?",
        answer:
          "Il cible la principale cause des retours en recommandant selon la coupe et les goûts plutôt que la popularité. Relier les réponses à des tailles et couleurs précises dirige les clients vers des pièces qu'ils ont plus de chances de garder.",
      },
      {
        question: "Prend-il en charge les variantes de produit comme la taille et la couleur ?",
        answer:
          "Oui. Les réponses peuvent être reliées à des variantes spécifiques, et la page de résultats affiche la taille et la couleur correspondantes avec ajout au panier direct.",
      },
      {
        question: "Puis-je exécuter le quiz en plusieurs langues ?",
        answer:
          "Oui. Construisez un quiz de base, traduisez-le avec l'AI Copilot, et assignez chaque version à son Shopify Market. Les titres et prix de produits se localisent automatiquement via Shopify Markets.",
      },
      {
        question: "Sur quelles plateformes fonctionne-t-il ?",
        answer:
          "Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace, et en tant que quiz hébergé autonome.",
      },
    ],
    related: [
      { label: "Quiz recherche de taille et de coupe", href: "/solutions/size-finder/" },
      { label: "Quiz recherche de cadeau", href: "/solutions/gift-finder/" },
      { label: "Modèles de quiz", href: "/templates/" },
      { label: "Quiz pour Shopify", href: "/product-recommendation-quiz-shopify/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  coffee: {
    slug: "coffee",
    type: "vertical",
    name: "Café et thé",
    chip: "Secteur",
    title: "Quiz café : associez les torréfactions aux goûts",
    description:
      "Un quiz de profil gustatif qui associe les clients à la bonne torréfaction ou au bon mélange et intègre les abonnés. Offre gratuite, compatible Klaviyo et ReCharge.",
    h1: "Des quiz café qui associent le goût à la bonne torréfaction",
    heroSubtitle:
      "Torréfaction, origine, méthode d'infusion, notes aromatiques : un quiz café transforme un menu déroutant en une recommandation assurée, et un nouvel abonné.",
    intro: [
      "Le café et le thé reposent sur le goût, et le goût est difficile à acheter depuis une liste de produits. Un court quiz de profil gustatif pose des questions sur la torréfaction préférée, la méthode d'infusion et les notes aromatiques, puis recommande le mélange qu'un client appréciera réellement.",
      "RevenueHunt en fait un tunnel, pas seulement une recommandation. Capturez l'email au départ, recommandez un mélange de démarrage, et reliez la page de résultats à une offre abonnez-vous et économisez via ReCharge, avec les préférences de torréfaction et d'infusion synchronisées vers Klaviyo.",
    ],
    quizTypes: [
      {
        title: "Recherche de profil gustatif",
        body: "Quelques questions sur la torréfaction, le corps et les notes aromatiques associent chaque client au mélange qui correspond à son palais.",
      },
      {
        title: "Correspondance de méthode d'infusion",
        body: "Espresso, filtre lent, cafetière à piston ou goutte-à-goutte : créez des embranchements par méthode afin que la mouture et le mélange conviennent à la façon dont ils préparent réellement leur café.",
      },
      {
        title: "Onboarding d'abonnement",
        body: "Lancez le quiz en haut du tunnel, recommandez un mélange de démarrage, et proposez abonnez-vous et économisez sur la page de résultats.",
      },
      {
        title: "Recherche de cadeau ou de coffret découverte",
        body: "Aidez les acheteurs de cadeaux à choisir un coffret découverte ou un assortiment cadeau sans connaître le goût exact du destinataire.",
      },
    ],
    howItHelps: [
      "Un profil gustatif est une excellente raison de demander un email. Les clients partagent volontiers leurs préférences de torréfaction et d'infusion pour obtenir une recommandation, ce qui remplit votre liste d'abonnés déjà segmentés.",
      "La page de résultats fait la vente. Recommandez le mélange correspondant, affichez une offre abonnez-vous et économisez reliée à ReCharge, et laissez les clients ajouter au panier sans quitter le quiz.",
      "Les préférences deviennent des segments durables. Synchroniser les tags de torréfaction et de méthode d'infusion avec Klaviyo signifie que chaque future campagne peut s'adresser différemment à un amateur d'espresso torréfaction foncée et à un adepte du filtre lent torréfaction claire.",
    ],
    demo: {
      label: "Essayer le quiz café",
      href: "https://productrecommendationquiz.com/pages/coffee-quiz?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_coffee",
      blurb: "Un quiz café d'association de goûts en ligne sur notre boutique de démonstration.",
    },
    faqs: [
      {
        question: "Un quiz café peut-il recommander un abonnement ?",
        answer:
          "Oui. Capturez l'email au départ, recommandez un mélange de démarrage, et dirigez la page de résultats vers une offre abonnez-vous et économisez reliée à ReCharge.",
      },
      {
        question: "Associe-t-il selon la méthode d'infusion ?",
        answer:
          "Oui. Créez des embranchements par méthode d'infusion afin que la mouture et le mélange conviennent spécifiquement aux amateurs d'espresso, de filtre lent, de cafetière à piston ou de goutte-à-goutte.",
      },
      {
        question: "Va-t-il développer ma liste email ?",
        answer:
          "Oui. Le profil gustatif est une raison forte pour les clients de partager leur email, et les réponses se synchronisent avec Klaviyo, déjà segmentées par préférence de torréfaction et d'infusion.",
      },
      {
        question: "Cela fonctionne-t-il pour le thé ou d'autres boissons ?",
        answer:
          "Oui. La même approche de profil gustatif fonctionne pour le thé, le vin, les spiritueux et tout catalogue reposant sur le goût.",
      },
    ],
    related: [
      { label: "Quiz création d'assortiment", href: "/solutions/bundle-builder/" },
      { label: "Quiz recherche de cadeau", href: "/solutions/gift-finder/" },
      { label: "Modèles de quiz", href: "/templates/" },
      { label: "Quiz vente guidée", href: "/guided-selling-quiz/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  fitness: {
    slug: "fitness",
    type: "vertical",
    name: "Fitness et nutrition",
    chip: "Secteur",
    title: "Quiz fitness pour équipement, vêtements et programmes",
    description:
      "Un quiz fitness basé sur les objectifs qui recommande le bon équipement, les bons vêtements ou le bon programme à partir de votre catalogue. Offre gratuite, créateur AI, compatible Klaviyo.",
    h1: "Des quiz fitness construits autour de l'objectif du client",
    heroSubtitle:
      "Force, endurance, perte de poids, récupération : un quiz fitness transforme un objectif en équipement, vêtements, compléments ou programme adaptés.",
    intro: [
      "Les clients fitness partent d'un objectif et d'un style d'entraînement, pas d'un produit. Un quiz basé sur les objectifs demande vers quoi ils travaillent, leur niveau d'expérience et leur façon de s'entraîner, puis recommande l'équipement, les vêtements ou le programme qui conviennent.",
      "RevenueHunt construit le tunnel de bout en bout : recommandez les bons produits de votre catalogue, capturez l'objectif et le niveau du client sous forme de zero-party data, et relancez via Klaviyo avec du contenu et des offres adaptés à ce pour quoi ils s'entraînent.",
    ],
    quizTypes: [
      {
        title: "Recherche par objectif",
        body: "Force, endurance, mobilité ou perte de poids : chaque objectif favorise l'équipement, les vêtements ou les compléments correspondants.",
      },
      {
        title: "Correspondance par niveau d'expérience",
        body: "Créez des embranchements par niveau débutant, intermédiaire ou avancé afin que les recommandations correspondent au niveau réel du client.",
      },
      {
        title: "Recherche de programme ou de plan",
        body: "Recommandez le bon programme d'entraînement ou le bon palier de coaching selon l'objectif, l'emploi du temps et l'accès à l'équipement.",
      },
      {
        title: "Création de kit ou d'assortiment",
        body: "Assemblez un kit complet (vêtements plus équipement plus complément) grâce aux emplacements de recommandation pour un panier moyen plus élevé.",
      },
    ],
    howItHelps: [
      "L'objectif et le niveau d'expérience sont les deux questions qui changent tout. Les poser dès le départ signifie qu'un débutant travaillant sa mobilité ne voit jamais un produit de force avancé comme premier résultat.",
      "Un kit complet l'emporte sur un article isolé. Les emplacements de recommandation vous permettent de renvoyer ensemble vêtements, équipement et complément, ce qui augmente le panier moyen sans paraître insistant.",
      "L'objectif que vous capturez alimente tout après la vente. Synchroniser les tags d'objectif et de niveau avec Klaviyo vous permet d'envoyer du contenu d'entraînement et des rappels de réapprovisionnement qui correspondent au programme réel de chaque client.",
    ],
    faqs: [
      {
        question: "Un quiz fitness peut-il recommander un programme, pas seulement des produits ?",
        answer:
          "Oui. Reliez les réponses à un programme d'entraînement ou un palier de coaching de la même façon que vous reliez des produits, et la page de résultats peut recommander le bon plan selon l'objectif et l'emploi du temps.",
      },
      {
        question: "Peut-il construire un kit complet dans un seul résultat ?",
        answer:
          "Oui. Les emplacements de recommandation réservent une place à chaque rôle (vêtements, équipement, complément) afin que les clients obtiennent un kit complet avec ajout au panier pour l'ensemble.",
      },
      {
        question: "Comment personnalise-t-il pour les débutants par rapport aux avancés ?",
        answer:
          "Créez des embranchements avec une logique conditionnelle sur le niveau d'expérience, afin que les débutants et les athlètes avancés voient des questions et des recommandations différentes.",
      },
      {
        question: "Puis-je relancer par email en fonction des objectifs ?",
        answer:
          "Oui. Les objectifs et le niveau se synchronisent avec Klaviyo, Mailchimp, Omnisend et plus encore sous forme de customer tags pour des relances email adaptées aux objectifs.",
      },
    ],
    related: [
      { label: "Quiz compléments", href: "/solutions/supplements/" },
      { label: "Quiz création d'assortiment", href: "/solutions/bundle-builder/" },
      { label: "Modèles de quiz", href: "/templates/" },
      { label: "Quiz vente guidée", href: "/guided-selling-quiz/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "pet-products": {
    slug: "pet-products",
    type: "vertical",
    name: "Produits pour animaux",
    chip: "Secteur",
    title: "Quiz produits pour animaux pour votre boutique",
    description:
      "Un quiz animaux qui recommande nourriture, compléments ou accessoires par espèce, race, âge et allergies. Les exclusions gèrent les régimes. Gratuit pour démarrer.",
    h1: "Des quiz animaux qui associent les produits à chaque animal",
    heroSubtitle:
      "Espèce, race, âge, activité, allergies : un quiz animaux transforme ces détails en la bonne nourriture, le bon complément ou le bon accessoire, et respecte chaque contrainte alimentaire.",
    intro: [
      "Les propriétaires d'animaux achètent pour un animal, pas pour une catégorie, et le bon produit dépend de l'espèce, de la taille de la race, de l'âge et des allergies. Un quiz animaux collecte ces détails une seule fois et recommande des produits qui conviennent à toutes ces dimensions en même temps.",
      "RevenueHunt gère la partie difficile : les exclusions appliquent proprement les règles d'allergie et de régime, la page de résultats recommande la bonne formule ou le bon kit, et un email de résultat récapitule la recommandation pour les propriétaires qui n'achètent pas sur le moment.",
    ],
    quizTypes: [
      {
        title: "Recherche de nourriture pour animaux",
        body: "L'espèce, la taille de la race, l'âge et le niveau d'activité orientent vers la bonne formule, avec les allergies gérées par les exclusions.",
      },
      {
        title: "Correspondance complément ou santé",
        body: "Recommandez un soutien des articulations, de la peau ou de la digestion selon l'âge et les besoins déclarés.",
      },
      {
        title: "Recherche d'accessoires",
        body: "Associez harnais, paniers ou jouets à la taille de la race et au comportement afin que les propriétaires choisissent le bon modèle du premier coup.",
      },
      {
        title: "Kit de démarrage pour nouveau propriétaire",
        body: "Assemblez un kit de démarrage complet pour les nouveaux propriétaires d'animaux grâce aux emplacements de recommandation.",
      },
    ],
    howItHelps: [
      "Les allergies sont une contrainte stricte, et les exclusions les appliquent parfaitement. Signaler une allergie au poulet retire toutes les formules à base de poulet des résultats, même celles qui obtenaient un bon score sur la race et l'âge.",
      "Un customer tag comme propriétaire-petit-chien vaut de l'or pour la fidélisation. Le synchroniser avec Klaviyo vous permet d'envoyer du contenu pertinent par race, des rappels de réapprovisionnement et des offres réellement adaptées à l'animal.",
      "Les emails de résultat rattrapent les clients qui rebondissent. Les propriétaires se renseignent souvent avant d'acheter, donc un email automatique récapitulant la recommandation les ramène pour finaliser l'achat.",
    ],
    demo: {
      label: "Essayer la recherche de nourriture pour chien",
      href: "https://productrecommendationquiz.com/pages/dog-food?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_pet_products",
      blurb: "Une recherche de nourriture pour chien multi-attributs en ligne sur notre boutique de démonstration.",
    },
    faqs: [
      {
        question: "Comment un quiz animaux gère-t-il les allergies ?",
        answer:
          "Avec des exclusions. Relier une réponse d'allergie à une liste d'exclusion retire tout produit en conflit des résultats, quel que soit son score sur les autres questions.",
      },
      {
        question: "Peut-il associer selon la race et l'âge ?",
        answer:
          "Oui. Chaque réponse (espèce, taille de la race, âge, niveau d'activité) favorise les produits correspondants, afin que les recommandations conviennent à l'animal précis.",
      },
      {
        question: "Puis-je envoyer la recommandation par email s'ils n'achètent pas ?",
        answer:
          "Oui. Les emails de résultat récapitulent automatiquement la recommandation, ce qui est utile pour les propriétaires qui se renseignent avant d'acheter.",
      },
      {
        question: "Segmente-t-il les clients pour le marketing ?",
        answer:
          "Oui. Des customer tags comme propriétaire-petit-chien se synchronisent avec Klaviyo et d'autres outils pour des campagnes ciblées et pertinentes pour l'animal.",
      },
    ],
    related: [
      { label: "Quiz création d'assortiment", href: "/solutions/bundle-builder/" },
      { label: "Quiz recherche de produit", href: "/product-finder-quiz/" },
      { label: "Modèles de quiz", href: "/templates/" },
      { label: "Quiz pour WooCommerce", href: "/product-recommendation-quiz-woocommerce/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  cbd: {
    slug: "cbd",
    type: "vertical",
    name: "CBD et bien-être",
    chip: "Secteur",
    title: "Quiz recherche de produit CBD pour votre boutique",
    description:
      "Un quiz CBD qui oriente les clients vers le bon format et le bon dosage selon l'objectif et l'expérience. Il informe tout en vendant. Offre gratuite, multi-plateforme.",
    h1: "Des quiz CBD qui orientent les clients vers le bon format",
    heroSubtitle:
      "Le format, le dosage et l'objectif déroutent la plupart des clients CBD. Un quiz informe tout en vendant et recommande le bon produit avec assurance.",
    intro: [
      "Le CBD et le bien-être sont des catégories où la plupart des clients ne savent réellement pas quoi acheter : huile ou gomme, quel dosage, pour quel objectif. Un quiz transforme cette incertitude en une recommandation claire en posant des questions sur l'objectif, le niveau d'expérience et la préférence de format.",
      "RevenueHunt est conçu pour les clients découvrant une catégorie comme ceux-ci. Le quiz informe au fur et à mesure des questions, recommande le bon format et le bon dosage à partir de votre catalogue, et capture les objectifs sous forme de zero-party data que vous possédez et auprès desquels vous pouvez communiquer.",
    ],
    quizTypes: [
      {
        title: "Recherche par objectif",
        body: "Sommeil, calme, récupération ou concentration : chaque objectif favorise les produits et les dosages correspondants.",
      },
      {
        title: "Correspondance format et dosage",
        body: "Créez des embranchements par expérience et préférence de format (huile, gomme, topique, gélule) afin que les débutants obtiennent un point de départ accessible.",
      },
      {
        title: "Création de routine",
        body: "Recommandez une association jour et nuit grâce aux emplacements de recommandation pour une routine complète.",
      },
      {
        title: "Quiz axé sur la pédagogie",
        body: "Utilisez des diapositives d'information entre les questions pour expliquer les bases, ce qui renforce la confiance avant la recommandation.",
      },
    ],
    howItHelps: [
      "Les clients découvrant une catégorie ont besoin de pédagogie, pas seulement de filtrage. Les diapositives d'information vous permettent d'expliquer le dosage et le format en langage clair au fil du parcours, afin que la recommandation soit reçue avec assurance.",
      "Adapter le niveau d'expérience au dosage protège l'expérience. Un débutant obtient un point de départ accessible plutôt que le produit le plus puissant, ce qui signifie moins de retours déçus.",
      "Les objectifs capturés dans le quiz deviennent vos segments les plus utiles. Synchroniser goal:sleep ou goal:recovery avec Klaviyo alimente des emails qui correspondent à ce que chaque client cherche réellement à résoudre.",
    ],
    demo: {
      label: "Essayer la recherche de produit CBD",
      href: "https://productrecommendationquiz.com/pages/cbd-product-finder?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_cbd",
      blurb: "Une recherche de produit CBD en ligne sur notre boutique de démonstration.",
    },
    faqs: [
      {
        question: "Un quiz CBD peut-il recommander le bon dosage ?",
        answer:
          "Oui. Créez des embranchements par niveau d'expérience et objectif, puis reliez chaque parcours au dosage approprié, afin que les débutants et les utilisateurs expérimentés obtiennent des recommandations différentes.",
      },
      {
        question: "Le quiz peut-il informer les clients au fil du parcours ?",
        answer:
          "Oui. Les diapositives d'information affichent du texte entre les questions sans aucune saisie requise, afin que vous puissiez expliquer les bases du format et du dosage en ligne.",
      },
      {
        question: "Fonctionne-t-il pour des produits de bien-être plus larges ?",
        answer:
          "Oui. La même approche objectif et format fonctionne pour les adaptogènes, les champignons et d'autres catégories de bien-être où les clients ont besoin d'être guidés.",
      },
      {
        question: "Quelles plateformes prend-il en charge ?",
        answer:
          "Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace, et en tant que quiz hébergé autonome.",
      },
    ],
    related: [
      { label: "Quiz compléments", href: "/solutions/supplements/" },
      { label: "Quiz création de routine", href: "/solutions/routine-builder/" },
      { label: "Quiz recherche de produit", href: "/product-finder-quiz/" },
      { label: "Modèles de quiz", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  jewelry: {
    slug: "jewelry",
    type: "vertical",
    name: "Bijoux et accessoires",
    chip: "Secteur",
    title: "Quiz bijoux : aidez les clients à trouver la pièce",
    description:
      "Un quiz bijoux qui associe style, métal et occasion à la bonne pièce, et aide les acheteurs de cadeaux à choisir avec assurance. Gratuit pour démarrer.",
    h1: "Des quiz bijoux qui associent le style à la bonne pièce",
    heroSubtitle:
      "Métal, style, occasion, budget : un quiz bijoux oriente les clients et les acheteurs de cadeaux vers une pièce qu'ils adoreront, au lieu d'une grille interminable.",
    intro: [
      "Les bijoux sont chargés d'émotion et souvent destinés à être offerts, ce qui les rend difficiles à acheter depuis une grille. Un quiz pose des questions sur le style, la préférence de métal, l'occasion et le budget, puis recommande des pièces correspondantes, transformant la navigation en un choix assuré.",
      "RevenueHunt recommande de vraies pièces et variantes de votre catalogue, gère les acheteurs de cadeaux qui ne connaissent pas les goûts du destinataire, et capture les préférences pour la relance. La page de résultats convertit avec ajout au panier direct et un message cadeau facultatif.",
    ],
    quizTypes: [
      {
        title: "Recherche de style",
        body: "Les questions sur l'esthétique, le métal et l'occasion font ressortir les pièces qui correspondent aux goûts d'un client.",
      },
      {
        title: "Recherche de cadeau",
        body: "Posez des questions sur le destinataire et l'occasion, puis recommandez une sélection soignée ou un coffret cadeau pour les acheteurs qui ne connaissent pas le catalogue.",
      },
      {
        title: "Correspondance selon le budget",
        body: "Intégrez le budget dans la recommandation afin que chaque client voie des pièces dans sa fourchette.",
      },
      {
        title: "Recherche pour fiançailles ou occasion marquante",
        body: "Accompagnez les achats à forte implication comme les pièces de fiançailles ou d'anniversaire avec un parcours ciblé et rassurant.",
      },
    ],
    howItHelps: [
      "Les acheteurs de cadeaux représentent une part énorme du trafic bijoux et sont les moins sûrs de ce qu'ils veulent. Un quiz qui pose des questions sur le destinataire plutôt que sur le catalogue transforme cette incertitude en un achat cadeau assuré.",
      "Le budget est une question que la plupart des grilles ignorent. L'intégrer dans la recommandation signifie que les clients voient des pièces qu'ils peuvent réellement acheter, ce qui réduit le rebond et instaure la confiance.",
      "Les préférences et les occasions se synchronisent avec votre outil email, afin que vous puissiez relancer autour des anniversaires, des réapprovisionnements et des pièces assorties avec des campagnes qui paraissent personnelles.",
    ],
    faqs: [
      {
        question: "Un quiz bijoux peut-il aider les acheteurs de cadeaux ?",
        answer:
          "Oui. Posez des questions sur le destinataire et l'occasion plutôt que sur le catalogue, puis recommandez une sélection soignée ou un coffret cadeau, ce qui est idéal pour les acheteurs qui ne savent pas exactement ce qu'ils veulent.",
      },
      {
        question: "Peut-il tenir compte du budget ?",
        answer:
          "Oui. Ajoutez une question de budget et pondérez ou filtrez les recommandations afin que les clients ne voient que des pièces dans leur fourchette.",
      },
      {
        question: "Prend-il en charge les variantes comme le métal et la taille ?",
        answer:
          "Oui. Les réponses peuvent être reliées à des variantes spécifiques, afin que la page de résultats affiche le bon métal et la bonne taille avec ajout au panier.",
      },
      {
        question: "Puis-je capturer des prospects pour la relance ?",
        answer:
          "Oui. Le quiz capture l'email et les préférences sous forme de zero-party data et se synchronise avec Klaviyo et d'autres outils pour une relance basée sur l'occasion.",
      },
    ],
    related: [
      { label: "Quiz recherche de cadeau", href: "/solutions/gift-finder/" },
      { label: "Quiz mode et vêtements", href: "/solutions/fashion/" },
      { label: "Modèles de quiz", href: "/templates/" },
      { label: "Quiz recherche de produit", href: "/product-finder-quiz/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "home-goods": {
    slug: "home-goods",
    type: "vertical",
    name: "Maison et décoration",
    chip: "Secteur",
    title: "Quiz produits maison et décoration pour votre boutique",
    description:
      "Un quiz maison et décoration qui associe meubles et décoration à l'espace et au style d'un client. Réduit les retours sur les articles volumineux. Gratuit pour démarrer.",
    h1: "Des quiz maison qui associent les produits à l'espace",
    heroSubtitle:
      "Style, pièce, dimensions et budget : un quiz maison et décoration oriente les clients vers des pièces qui s'intègrent à leur espace, ce qui compte le plus quand les articles sont volumineux.",
    intro: [
      "La maison et la décoration relèvent d'achats à forte implication et coûteux à retourner. Les clients doivent savoir qu'une pièce s'intègre à leur espace et à leur style avant de s'engager. Un quiz pose des questions sur la pièce, le style, les dimensions et le budget, puis recommande des pièces qui conviennent.",
      "RevenueHunt recommande de vrais produits de votre catalogue, assemble des ensembles coordonnés avec des emplacements de recommandation, et capture les préférences de style pour la relance, afin qu'un acheteur ponctuel de meubles devienne un client récurrent de décoration.",
    ],
    quizTypes: [
      {
        title: "Recherche de style",
        body: "Les questions sur l'esthétique et la pièce font ressortir les meubles et la décoration qui correspondent aux goûts d'un client.",
      },
      {
        title: "Correspondance pièce ou espace",
        body: "Intégrez le type de pièce et les dimensions dans les recommandations afin que les pièces s'intègrent réellement à l'espace.",
      },
      {
        title: "Création d'ensemble coordonné",
        body: "Assemblez un ensemble assorti (canapé plus tapis plus éclairage) avec les emplacements de recommandation pour un rendu complet.",
      },
      {
        title: "Recherche selon le budget",
        body: "Intégrez le budget afin que les clients voient des pièces dans leur fourchette et rebondissent moins.",
      },
    ],
    howItHelps: [
      "L'ajustement et l'échelle génèrent des retours sur les articles volumineux. Poser des questions sur les dimensions de la pièce et recommander des pièces qui conviennent réduit les erreurs coûteuses qui mènent aux retours de meubles.",
      "Un ensemble coordonné augmente naturellement la valeur de la commande. Les emplacements de recommandation vous permettent de suggérer un rendu complet plutôt qu'une pièce isolée, ce qui convient parfaitement à l'achat de décoration.",
      "Les préférences de style sont durables. Capturer l'esthétique d'un client et la synchroniser avec votre outil email signifie que les campagnes saisonnières et de nouvelles collections peuvent être adaptées aux goûts au lieu d'être diffusées à tout le monde.",
    ],
    faqs: [
      {
        question: "Un quiz maison peut-il recommander un ensemble coordonné ?",
        answer:
          "Oui. Les emplacements de recommandation réservent une place à chaque rôle (assise, tapis, éclairage), afin que la page de résultats renvoie un ensemble assorti complet avec ajout au panier.",
      },
      {
        question: "Peut-il tenir compte de la taille de la pièce ?",
        answer:
          "Oui. Ajoutez des questions sur la pièce et les dimensions et reliez les réponses aux pièces qui conviennent, ce qui est essentiel pour réduire les retours sur les articles volumineux.",
      },
      {
        question: "Aide-t-il avec le budget ?",
        answer:
          "Oui. Intégrez une question de budget afin que les recommandations restent dans la fourchette du client.",
      },
      {
        question: "Sur quelles plateformes fonctionne-t-il ?",
        answer:
          "Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace, et en tant que quiz hébergé autonome.",
      },
    ],
    related: [
      { label: "Quiz création d'assortiment", href: "/solutions/bundle-builder/" },
      { label: "Quiz recherche de cadeau", href: "/solutions/gift-finder/" },
      { label: "Modèles de quiz", href: "/templates/" },
      { label: "Quiz vente guidée", href: "/guided-selling-quiz/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  // ----------------------------------------------------------------- use-cases
  "gift-finder": {
    slug: "gift-finder",
    type: "use-case",
    name: "Recherche de cadeau",
    chip: "Type de quiz",
    title: "Quiz recherche de cadeau pour votre boutique en ligne",
    description:
      "Un quiz recherche de cadeau qui pose des questions sur le destinataire et renvoie un cadeau soigné, augmentant l'AOV pour les acheteurs qui ne connaissent pas le catalogue. Gratuit pour démarrer.",
    h1: "Des quiz recherche de cadeau qui transforment l'incertitude en vente",
    heroSubtitle:
      "Les acheteurs de cadeaux n'ont aucun avis sur votre catalogue et une forte anxiété à l'idée de se tromper. Une recherche de cadeau pose des questions sur le destinataire et recommande le cadeau parfait.",
    intro: [
      "Les acheteurs de cadeaux sont les clients les plus faciles à perdre et les plus faciles à aider. Ils ne connaissent pas vos produits et ils craignent de mal choisir. Un quiz recherche de cadeau pose trois à cinq questions sur le destinataire (lien, âge, centres d'intérêt, budget) et renvoie un cadeau soigné qu'ils peuvent acheter avec assurance.",
      "RevenueHunt fait de la recherche de cadeau l'un des types de quiz qui convertissent le mieux. Regroupez plusieurs produits dans un seul résultat cadeau pour une valeur de commande plus élevée, ajoutez un message cadeau et une remise sur la page de résultats, et capturez l'email de l'acheteur pour la prochaine occasion.",
    ],
    quizTypes: [
      {
        title: "Recherche axée sur le destinataire",
        body: "Posez des questions sur le destinataire (lien, âge, centres d'intérêt) plutôt que sur le catalogue, afin que les acheteurs qui ne connaissent rien à vos produits obtiennent quand même une excellente correspondance.",
      },
      {
        title: "Recherche par occasion",
        body: "Créez des embranchements par occasion (anniversaire, fêtes, anniversaire de couple) afin que la recommandation corresponde au moment.",
      },
      {
        title: "Création d'assortiment cadeau",
        body: "Combinez plusieurs produits dans un seul coffret cadeau soigné grâce aux emplacements de recommandation, ce qui augmente le panier moyen.",
      },
    ],
    howItHelps: [
      "L'astuce consiste à poser des questions sur le destinataire, pas sur le catalogue. Un acheteur qui peut répondre à trois questions sur sa sœur obtient une recommandation assurée sans jamais avoir besoin de comprendre votre gamme de produits.",
      "Les assortiments cadeaux augmentent la valeur de la commande sans pression. Renvoyer un ensemble soigné en un seul résultat paraît utile, pas insistant, et les clients achètent volontiers le tout.",
      "Chaque acheteur de cadeau est un futur client. Capturer son email et l'occasion vous permet de le ramener au prochain anniversaire ou aux prochaines fêtes avec une longueur d'avance sur la recommandation.",
    ],
    faqs: [
      {
        question: "Comment fonctionne un quiz recherche de cadeau ?",
        answer:
          "Il pose trois à cinq questions sur le destinataire et l'occasion, puis recommande un cadeau ou un coffret cadeau soigné, afin que les acheteurs qui ne connaissent pas votre catalogue puissent quand même choisir avec assurance.",
      },
      {
        question: "Peut-il regrouper des produits dans un seul cadeau ?",
        answer:
          "Oui. Les emplacements de recommandation combinent plusieurs produits dans un seul coffret cadeau soigné, ce qui augmente le panier moyen.",
      },
      {
        question: "Puis-je ajouter une remise ou un message cadeau ?",
        answer:
          "Oui. La page de résultats prend en charge des blocs de code de réduction et de contenu que vous pouvez afficher selon les réponses du client.",
      },
      {
        question: "Capture-t-il des prospects pour de futures occasions ?",
        answer:
          "Oui. Le quiz capture l'email et l'occasion, qui se synchronisent avec Klaviyo et d'autres outils afin que vous puissiez relancer avant le prochain moment cadeau.",
      },
    ],
    related: [
      { label: "Quiz bijoux", href: "/solutions/jewelry/" },
      { label: "Quiz beauté et cosmétiques", href: "/solutions/beauty/" },
      { label: "Quiz recherche de produit", href: "/product-finder-quiz/" },
      { label: "Modèles de quiz", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "size-finder": {
    slug: "size-finder",
    type: "use-case",
    name: "Recherche de taille et de coupe",
    chip: "Type de quiz",
    title: "Quiz recherche de taille et de coupe pour l'ecommerce",
    description:
      "Un quiz recherche de taille et de coupe qui recommande la bonne taille ou le produit compatible et réduit les retours. Il résout l'ajustement multi-attributs. Gratuit pour démarrer.",
    h1: "Des quiz recherche de taille et de coupe qui réduisent les retours",
    heroSubtitle:
      "La mauvaise taille est le retour numéro un. Une recherche de coupe pose les bonnes questions et recommande la taille ou le produit compatible qui convient.",
    intro: [
      "L'ajustement et la compatibilité sont là où l'ecommerce perd de l'argent : retours pour mauvaise taille sur les vêtements et les chaussures, et retours pour mauvais ajustement sur tout ce qui doit s'accorder à quelque chose que le client possède déjà. Un quiz recherche de coupe résout ces contraintes avant la commande, pas après.",
      "RevenueHunt gère proprement l'ajustement multi-attributs. Reliez les réponses à des variantes spécifiques et utilisez les exclusions pour les contraintes strictes, afin que les mensurations et les exigences d'un client aboutissent à une seule taille correcte ou un seul produit compatible sur la page de résultats.",
    ],
    quizTypes: [
      {
        title: "Recherche de taille",
        body: "Les questions sur les mensurations et la coupe préférée affinent vers la bonne taille, ce qui est la cause la plus fréquente des retours.",
      },
      {
        title: "Recherche de compatibilité",
        body: "Résolvez des contraintes multi-attributs (modèle d'appareil, type de fixation, accessoire) jusqu'au seul produit qui convient.",
      },
      {
        title: "Correspondance de coupe préférée",
        body: "Créez des embranchements par coupe préférée (ajustée, classique, ample) afin que la recommandation corresponde à la façon dont le client aime porter le vêtement.",
      },
    ],
    howItHelps: [
      "Les retours pour mauvaise taille sont le coût le plus important qu'une recherche de coupe adresse. Demander les mensurations et la coupe préférée dès le départ et les relier à des variantes spécifiques dirige les clients vers la taille qu'ils garderont.",
      "La compatibilité n'est qu'une affaire de contraintes, et les exclusions les gèrent parfaitement. Un client qui indique son appareil et ses exigences obtient exactement le produit compatible, tout ce qui est incompatible étant retiré.",
      "L'assurance fait convertir. Quand le quiz indique à un client voici votre taille avec une raison claire, il ajoute au panier au lieu de rebondir vers un guide des tailles pour ne jamais revenir.",
    ],
    demo: {
      label: "Essayer la recherche de compatibilité",
      href: "https://productrecommendationquiz.com/pages/bicycle-quiz?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_size_finder",
      blurb: "Une recherche de type compatibilité en ligne sur notre boutique de démonstration qui résout une correspondance technique.",
    },
    faqs: [
      {
        question: "Une recherche de coupe peut-elle réduire les retours pour mauvaise taille ?",
        answer:
          "Oui. Demander les mensurations et la coupe préférée et relier les réponses à des variantes spécifiques recommande la taille qu'un client a le plus de chances de garder, ce qui réduit directement les retours.",
      },
      {
        question: "Comment gère-t-il la compatibilité ?",
        answer:
          "Avec les exclusions et la liaison de variantes. Un client indique ses contraintes (appareil, fixation, accessoire) et le quiz renvoie uniquement le produit compatible, retirant tout ce qui ne convient pas.",
      },
      {
        question: "Fonctionne-t-il pour les chaussures et les vêtements ?",
        answer:
          "Oui. Les recherches de taille et de coupe figurent parmi les cas d'usage les plus solides pour les vêtements, les chaussures et tout ce où l'ajustement génère des retours.",
      },
      {
        question: "Les résultats peuvent-ils expliquer la recommandation ?",
        answer:
          "Oui. Les blocs de contenu de la page de résultats peuvent afficher un texte spécifique aux réponses, afin que vous puissiez expliquer pourquoi une taille ou un produit donné est le bon choix.",
      },
    ],
    related: [
      { label: "Quiz mode et vêtements", href: "/solutions/fashion/" },
      { label: "Quiz recherche de produit", href: "/product-finder-quiz/" },
      { label: "Modèles de quiz", href: "/templates/" },
      { label: "Quiz pour Shopify", href: "/product-recommendation-quiz-shopify/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "shade-finder": {
    slug: "shade-finder",
    type: "use-case",
    name: "Correspondance de teinte",
    chip: "Type de quiz",
    title: "Quiz teinte : associez fond de teint et couleur",
    description:
      "Un quiz d'identification de teinte qui associe fond de teint, correcteur ou couleur par sous-ton et intensité, avec des réponses à choix d'images. Réduit les retours. Gratuit pour démarrer.",
    h1: "Des quiz d'identification de teinte qui associent la couleur avec assurance",
    heroSubtitle:
      "Acheter du maquillage en ligne, c'est deviner sa teinte. Une identification de teinte pose des questions sur le sous-ton et l'intensité et renvoie la correspondance exacte, ce qui réduit les retours.",
    intro: [
      "La correspondance de teinte est la question la plus déterminante de l'ecommerce beauté. Une erreur et le produit est retourné. Un quiz d'identification de teinte pose des questions sur le sous-ton, l'intensité, la couvrance et le fini, puis recommande la teinte exacte de votre catalogue avec des réponses à choix d'images rapides sur mobile.",
      "RevenueHunt relie chaque réponse à des variantes de teinte spécifiques et exclut le reste, afin que la page de résultats affiche une seule correspondance assurée plutôt qu'un mur de nuances. Le profil de teinte du client se synchronise avec votre outil email pour les réapprovisionnements et les produits assortis.",
    ],
    quizTypes: [
      {
        title: "Correspondance de teinte de fond de teint",
        body: "Les questions sur le sous-ton et l'intensité orientent vers la teinte exacte de fond de teint ou de correcteur, avec des réponses à choix d'images pour la rapidité.",
      },
      {
        title: "Correspondance de lèvres ou de couleur",
        body: "Associez une couleur de lèvres, de blush ou d'yeux à la carnation et à la préférence d'un client.",
      },
      {
        title: "Correspondance de couleur de cheveux",
        body: "Accompagnez la coloration à domicile selon la teinte actuelle, la teinte cible et le sous-ton vers la bonne formule.",
      },
    ],
    howItHelps: [
      "Les réponses à choix d'images portent les questions de teinte. Laisser les clients toucher une image d'un sous-ton ou d'un fini l'emporte sur leur demander de le décrire, et maintient une complétion élevée sur les écrans mobiles où la beauté se vend.",
      "Les exclusions transforment un mur de nuances en une seule réponse. Relier le sous-ton et l'intensité à des variantes spécifiques et exclure le reste signifie que la page de résultats affiche la correspondance, pas toute la gamme.",
      "La teinte est un profil qui vaut la peine d'être conservé. Synchroniser la teinte correspondante d'un client avec Klaviyo vous permet de communiquer sur les réapprovisionnements et les produits assortis exactement aux bonnes personnes.",
    ],
    demo: {
      label: "Essayer le quiz d'identification de teinte",
      href: "https://productrecommendationquiz.com/pages/foundation-match?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_shade_finder",
      blurb: "Un quiz d'identification de teinte de fond de teint basé sur l'image, en ligne sur notre boutique de démonstration.",
    },
    faqs: [
      {
        question: "Comment une identification de teinte associe-t-elle le fond de teint ?",
        answer:
          "Posez des questions sur le sous-ton, l'intensité, la couvrance et le fini, reliez chaque réponse aux variantes de teinte correspondantes, et excluez le reste. La page de résultats affiche la correspondance exacte avec ajout au panier.",
      },
      {
        question: "Utilise-t-il des réponses à choix d'images ?",
        answer:
          "Oui. Les choix peuvent être des images cliquables, ce qui est idéal pour les questions de sous-ton et de fini et augmente la complétion sur mobile.",
      },
      {
        question: "Peut-il réduire les retours liés à la teinte ?",
        answer:
          "Oui. Recommander une seule correspondance assurée au lieu d'un mur de nuances dirige les clients vers la teinte qu'ils ont le plus de chances de garder.",
      },
      {
        question: "Fonctionne-t-il au-delà du fond de teint ?",
        answer:
          "Oui. La même approche associe la couleur des lèvres, le blush, la couleur des yeux et la coloration des cheveux à domicile.",
      },
    ],
    related: [
      { label: "Quiz beauté et cosmétiques", href: "/solutions/beauty/" },
      { label: "Quiz soins de la peau", href: "/solutions/skincare/" },
      { label: "Pour les marques de beauté", href: "/for-beauty-brands/" },
      { label: "Modèles de quiz", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "routine-builder": {
    slug: "routine-builder",
    type: "use-case",
    name: "Création de routine",
    chip: "Type de quiz",
    title: "Quiz création de routine pour les soins et plus",
    description:
      "Un quiz création de routine qui renvoie une routine complète en plusieurs étapes, pas un seul produit, grâce aux emplacements de recommandation. Augmente l'AOV. Gratuit pour démarrer.",
    h1: "Des quiz création de routine qui vendent tout l'ensemble",
    heroSubtitle:
      "Un produit, c'est une vente. Une routine, c'est un panier et une habitude. Une création de routine renvoie un ensemble complet en plusieurs étapes adapté à chaque client.",
    intro: [
      "Certains produits s'achètent comme un système, pas un article isolé : une routine de soins de la peau, une cure de compléments, un programme capillaire. Un quiz création de routine renvoie tout l'ensemble, avec une place réservée à chaque étape, afin que les clients achètent la routine complète au lieu d'un seul produit.",
      "RevenueHunt le fait avec des emplacements de recommandation. Réservez un emplacement pour chaque rôle (nettoyant, traitement, hydratant, SPF, ou ce dont votre catégorie a besoin) et le quiz remplit chacun avec la meilleure correspondance, puis affiche la routine complète regroupée par étape avec ajout au panier pour l'ensemble.",
    ],
    quizTypes: [
      {
        title: "Routine par étapes",
        body: "Réservez un emplacement pour chaque étape et remplissez-le avec le produit le mieux adapté, afin que chaque client obtienne une routine complète et cohérente.",
      },
      {
        title: "Création de cure",
        body: "Assemblez une cure multi-produits (idéale pour les compléments et le bien-être) avec un rôle pour chaque produit.",
      },
      {
        title: "Routine jour et nuit",
        body: "Renvoyez des routines AM et PM distinctes à partir d'un seul quiz grâce à la logique d'affichage sur la page de résultats.",
      },
    ],
    howItHelps: [
      "Les emplacements de recommandation font la différence entre une vente et un panier. Réserver une place à chaque étape signifie que la page de résultats renvoie une routine complète, ce qui augmente la valeur de la commande sans donner l'impression d'un upsell.",
      "Le regroupement par étape donne du sens à la routine. Les clients voient exactement quoi utiliser et quand, ce qui renforce la confiance dans l'achat et l'habitude qui les ramène.",
      "Une routine est un moteur de fidélisation. L'ensemble que vous recommandez vous indique ce dont chaque client va manquer et quand, afin que votre relance email puisse programmer précisément les offres de réapprovisionnement.",
    ],
    faqs: [
      {
        question: "Comment une création de routine renvoie-t-elle un ensemble complet ?",
        answer:
          "Avec des emplacements de recommandation. Chaque emplacement est réservé à un rôle (par exemple nettoyant, traitement, hydratant, SPF) et rempli avec le produit le mieux adapté, afin que la page de résultats renvoie une routine complète.",
      },
      {
        question: "Peut-il afficher une routine jour et nuit distincte ?",
        answer:
          "Oui. Utilisez la logique d'affichage sur la page de résultats pour montrer des routines AM et PM, ou tout regroupement conditionnel, selon les réponses du client.",
      },
      {
        question: "Augmente-t-il le panier moyen ?",
        answer:
          "Recommander un ensemble complet plutôt qu'un seul produit donne aux clients une raison d'acheter toute la routine, ce qui augmente la valeur de la commande.",
      },
      {
        question: "Quelles catégories conviennent à une création de routine ?",
        answer:
          "Soins de la peau, soins capillaires, compléments, et tout catalogue acheté comme un système en plusieurs étapes plutôt qu'un article isolé.",
      },
    ],
    related: [
      { label: "Quiz soins de la peau", href: "/solutions/skincare/" },
      { label: "Quiz compléments", href: "/solutions/supplements/" },
      { label: "Quiz création d'assortiment", href: "/solutions/bundle-builder/" },
      { label: "Modèles de quiz", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "bundle-builder": {
    slug: "bundle-builder",
    type: "use-case",
    name: "Création d'assortiment",
    chip: "Type de quiz",
    title: "Quiz création d'assortiment : vendez des ensembles soignés",
    description:
      "Un quiz création d'assortiment qui assemble un ensemble soigné à partir des réponses d'un client et augmente le panier moyen. Ajout au panier pour tout l'assortiment. Gratuit.",
    h1: "Des quiz création d'assortiment qui augmentent la valeur de la commande",
    heroSubtitle:
      "Un assortiment soigné convertit mieux qu'un seul produit et qu'un upsell générique. Une création d'assortiment assemble l'ensemble à partir des réponses de chaque client.",
    intro: [
      "Les assortiments fonctionnent, mais seulement quand ils sont pertinents. Un upsell générique trois pour deux ignore ce que le client veut réellement. Un quiz création d'assortiment assemble un ensemble soigné à partir des réponses de chaque client, afin que l'assortiment paraisse personnel et que la valeur de la commande vienne naturellement.",
      "RevenueHunt construit les assortiments avec des emplacements de recommandation et des résultats conditionnels. Réservez un rôle pour chaque produit de l'ensemble, associez chacun au client, et présentez l'assortiment complet sur la page de résultats avec ajout au panier pour tout en une fois.",
    ],
    quizTypes: [
      {
        title: "Création d'ensemble soigné",
        body: "Réservez un rôle pour chaque produit de l'assortiment et remplissez chacun avec la meilleure correspondance, afin que l'ensemble convienne au client plutôt qu'au catalogue.",
      },
      {
        title: "Recherche de kit de démarrage",
        body: "Assemblez un kit de démarrage complet pour les acheteurs débutants ou découvrant une catégorie qui veulent un seul achat assuré.",
      },
      {
        title: "Composez votre assortiment",
        body: "Laissez les réponses piloter un assortiment flexible, avec une logique d'affichage qui ajoute ou retire des articles selon ce que le client choisit.",
      },
    ],
    howItHelps: [
      "Un assortiment pertinent surpasse un assortiment générique. Associer chaque article de l'ensemble aux réponses du client signifie que l'assortiment se lit comme une recommandation, pas une tactique de remise, et convertit en conséquence.",
      "Un seul ajout au panier pour tout l'ensemble supprime la friction. Les clients achètent l'assortiment en une seule action au lieu de chercher chaque article, ce qui protège la valeur de commande plus élevée que vous venez de construire.",
      "Les blocs de remise font aboutir l'assortiment. Affichez une remise sur l'ensemble sur la page de résultats liée à la combinaison spécifique, afin que l'économie paraisse méritée et que le client finalise l'achat.",
    ],
    faqs: [
      {
        question: "Comment fonctionne un quiz création d'assortiment ?",
        answer:
          "Il réserve un rôle pour chaque produit de l'assortiment, associe chacun aux réponses du client, et présente l'ensemble soigné complet sur la page de résultats avec ajout au panier pour tout en une fois.",
      },
      {
        question: "Puis-je ajouter une remise sur l'assortiment ?",
        answer:
          "Oui. La page de résultats prend en charge des blocs de code de réduction que vous pouvez lier à des combinaisons de réponses spécifiques, afin que l'économie sur l'assortiment soit affichée en contexte.",
      },
      {
        question: "Augmente-t-il le panier moyen ?",
        answer:
          "Recommander un ensemble pertinent et soigné plutôt qu'un seul produit donne aux clients une raison d'acheter plus, ce qui augmente la valeur de la commande.",
      },
      {
        question: "À quelles catégories convient-il ?",
        answer:
          "Compléments, beauté, alimentation et boissons, maison, et tout catalogue où un ensemble soigné se vend mieux qu'un article isolé.",
      },
    ],
    related: [
      { label: "Quiz création de routine", href: "/solutions/routine-builder/" },
      { label: "Quiz recherche de cadeau", href: "/solutions/gift-finder/" },
      { label: "Quiz compléments", href: "/solutions/supplements/" },
      { label: "Modèles de quiz", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },
};
