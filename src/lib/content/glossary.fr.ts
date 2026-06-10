import type { GlossaryTerm, GlossaryLink } from "../glossary";

const VERIFIED = "2026-06-07";

export const GLOSSARY_FR: Record<string, GlossaryTerm> = {
  "conversational-commerce": {
    slug: "conversational-commerce",
    term: "Commerce conversationnel",
    chip: "Concept",
    title: "Qu'est-ce que le commerce conversationnel ?",
    description:
      "Le commerce conversationnel vend par le biais d'un dialogue à double sens plutôt que d'une grille statique. Voici ce qu'il recouvre, pourquoi il fonctionne et comment un quiz le met en œuvre.",
    h1: "Qu'est-ce que le commerce conversationnel ?",
    shortAnswer:
      "Le commerce conversationnel consiste à vendre par le biais d'une conversation interactive à double sens plutôt que par une grille de produits statique. Le client répond à des questions, la boutique réagit avec des recommandations sur mesure, à la manière d'un bon vendeur dans une boutique physique.",
    intro: [
      "Dans une boutique physique, un bon vendeur demande ce dont vous avez besoin, écoute et vous oriente vers le bon produit. En ligne, la plupart des boutiques sautent cette étape et déposent les clients sur une grille de tous les produits qu'elles vendent. Le commerce conversationnel remet le dialogue au centre.",
    ],
    sections: [
      {
        heading: "Ce qui relève du commerce conversationnel",
        body: [
          "La catégorie est large. Elle inclut les chatbots, les applications de messagerie, le chat en direct, les assistants vocaux et les quiz de recommandation de produits. Ce qu'ils ont en commun, c'est un échange à double sens : le client donne une information, la boutique répond avec quelque chose de plus précis qu'une page catalogue générique.",
          "Ces formes diffèrent par le degré de contrôle que vous exercez sur elles. Un chatbot à texte libre peut aller partout où le client tape, ce qui est puissant et imprévisible. Un quiz est une forme structurée de commerce conversationnel : chaque question et chaque parcours est conçu par vous, de sorte que la conversation reste fidèle à votre marque et se termine toujours sur un produit réel.",
        ],
      },
      {
        heading: "Pourquoi il convertit mieux qu'une grille",
        body: [
          "Une page catégorie demande au client de faire le travail : lire chaque option, comparer les caractéristiques et deviner laquelle convient. C'est la paralysie du choix, et c'est là que beaucoup de paniers sont perdus avant même de commencer.",
          "Une conversation fait le travail à leur place. Elle réduit un large catalogue à une recommandation courte et justifiée, et elle explique pourquoi. Les clients qui obtiennent une réponse claire ajoutent au panier au lieu de partir comparer ailleurs.",
          "Elle capte aussi les préférences. Chaque réponse donnée par un client est une information que vous pouvez utiliser pour segmenter vos e-mails, personnaliser vos relances et mieux mettre en avant vos produits par la suite.",
        ],
      },
      {
        heading: "Commerce conversationnel vs chatbot",
        body: [
          "On emploie souvent les deux termes de manière interchangeable, mais un chatbot est un outil au sein de la catégorie, pas l'ensemble. Un chatbot reposant sur un grand modèle de langage peut répondre à des questions ouvertes, mais il peut aussi mal interpréter l'intention ou recommander un produit que vous n'avez pas en stock.",
          "Un quiz de recommandation de produits échange l'ouverture contre la fiabilité. Il ne peut pas s'écarter du sujet, il recommande toujours à partir de votre catalogue en temps réel et il fonctionne de la même manière pour chaque client. Pour la plupart des boutiques, cette prévisibilité vaut plus qu'un échange à texte libre.",
        ],
      },
    ],
    withRevenueHunt: [
      "Un quiz RevenueHunt est la forme la plus fiable de commerce conversationnel qu'une boutique puisse mettre en place. Vous concevez chaque question et chaque parcours, la page de résultats recommande toujours des produits et des variantes réels de votre catalogue, et chaque réponse est captée sous forme de zero-party data que vous pouvez synchroniser avec Klaviyo et d'autres outils.",
      "Il fonctionne sur Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace, et en tant que quiz hébergé autonome, et il est gratuit pour démarrer avec 100 réponses par mois.",
    ],
    faqs: [
      {
        question: "Un quiz de produits est-il considéré comme du commerce conversationnel ?",
        answer:
          "Oui. Un quiz est une forme structurée de commerce conversationnel : le client répond à des questions et la boutique réagit avec des recommandations sur mesure, le même modèle de dialogue qu'un chatbot mais avec chaque parcours conçu à l'avance.",
      },
      {
        question: "Quelle est la différence entre le commerce conversationnel et un chatbot ?",
        answer:
          "Un chatbot est un outil au sein du commerce conversationnel. Le commerce conversationnel est l'idée plus large de vendre par le biais d'une conversation à double sens, qui inclut aussi les quiz, le chat en direct, la messagerie et la voix.",
      },
      {
        question: "Le commerce conversationnel fonctionne-t-il pour les petites boutiques ?",
        answer:
          "Oui. Un quiz de recommandation de produits est la manière la plus simple de démarrer. Il n'a besoin d'aucun historique de trafic pour fonctionner, tourne sur une offre gratuite et peut être en ligne le jour même.",
      },
    ],
    related: [
      { label: "Moteur de recommandation de produits", href: "/glossary/product-recommendation-engine/" },
      { label: "Quiz shoppable", href: "/glossary/shoppable-quiz/" },
      { label: "Quiz de vente guidée", href: "/guided-selling-quiz/" },
      { label: "Comment ça marche", href: "/how-it-works/" },
      { label: "Modèles de quiz", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "product-recommendation-engine": {
    slug: "product-recommendation-engine",
    term: "Moteur de recommandation de produits",
    chip: "Concept",
    title: "Qu'est-ce qu'un moteur de recommandation de produits ?",
    description:
      "Un moteur de recommandation de produits décide quels produits montrer à chaque client. Les types, le problème du démarrage à froid et le fonctionnement d'un moteur basé sur un quiz.",
    h1: "Qu'est-ce qu'un moteur de recommandation de produits ?",
    shortAnswer:
      "Un moteur de recommandation de produits est le logiciel qui décide quels produits montrer à un client donné. Il prend des données en entrée (comportement de navigation, historique d'achat ou préférences déclarées) et classe votre catalogue pour faire remonter les meilleures correspondances.",
    intro: [
      "Toute boutique qui montre à un client autre chose que le catalogue complet exécute une forme de moteur de recommandation, même s'il ne s'agit que d'un rayon de best-sellers défini manuellement. La question intéressante est de savoir ce que le moteur utilise pour décider.",
    ],
    sections: [
      {
        heading: "Les principaux types",
        body: [
          "Les moteurs comportementaux utilisent ce que font les clients : pages vues, articles cliqués, produits achetés. Ils alimentent les classiques rayons « recommandé pour vous » et « les clients ont aussi acheté ». Ils reposent sur le filtrage collaboratif, qui a besoin de beaucoup de trafic et d'historique pour bien fonctionner.",
          "Les moteurs à règles ou basés sur les attributs utilisent les données produit et une logique définie par le marchand : montrer les accessoires avec telle catégorie, faire remonter d'abord les articles en stock. Ils sont prévisibles mais statiques.",
          "Les moteurs basés sur les préférences ou sur un quiz utilisent ce que le client vous dit directement. Le client répond à quelques questions et le moteur classe le catalogue en fonction de ces réponses. C'est le signal d'intention le plus direct, car il est déclaré plutôt que déduit.",
        ],
      },
      {
        heading: "Le problème du démarrage à froid",
        body: [
          "Les moteurs comportementaux ont une faiblesse bien connue : ils ne fonctionnent pas pour les nouveaux visiteurs et les nouveaux produits. Un client qui visite pour la première fois n'a aucun historique, donc le moteur n'a rien sur quoi s'appuyer et se rabat sur des best-sellers génériques. Un produit nouvellement ajouté n'a encore aucun clic, donc il est rarement recommandé.",
          "Un moteur basé sur les préférences n'a pas de démarrage à froid. Un visiteur tout nouveau qui répond à trois questions donne au moteur tout ce dont il a besoin dès la première visite, sans aucun suivi et sans attendre que les données s'accumulent.",
        ],
      },
      {
        heading: "Comment un moteur de quiz classe les produits",
        body: [
          "Chaque réponse a un poids. Une réponse incontournable peut faire monter les produits qui correspondent et faire descendre ceux qui ne correspondent pas, tandis qu'une contrainte stricte comme une allergie ou une caractéristique incompatible peut exclure entièrement des produits, quel que soit leur score par ailleurs.",
          "Le résultat est une liste restreinte classée et justifiée plutôt qu'une simple supposition. Les bons moteurs réservent aussi une place pour chaque rôle dans un ensemble, de sorte que le résultat peut être une routine, une combinaison ou un coffret complet au lieu d'un seul produit.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt est un moteur de recommandation de produits basé sur les préférences, piloté par un quiz. Les réponses font monter, descendre ou excluent des produits de votre catalogue en temps réel, les emplacements de recommandation réservent une place pour chaque rôle dans un ensemble, et il fonctionne pour un visiteur de première fois sans aucun historique.",
      "Comme les données sont volontairement déclarées, les mêmes réponses font aussi office de zero-party data que vous possédez et pouvez utiliser pour la segmentation longtemps après le départ du client.",
    ],
    faqs: [
      {
        question: "Quelle est la différence entre un moteur de recommandation comportemental et un moteur basé sur un quiz ?",
        answer:
          "Un moteur comportemental déduit l'intention à partir des clics et de l'historique d'achat, ce qui nécessite du trafic et échoue pour les nouveaux visiteurs. Un moteur basé sur un quiz utilise les préférences que le client déclare directement, il fonctionne donc dès la première visite sans aucun historique.",
      },
      {
        question: "Ai-je besoin de beaucoup de trafic pour qu'un moteur de recommandation fonctionne ?",
        answer:
          "Pas pour un moteur basé sur un quiz. Comme le client vous indique ses préférences, il fonctionne dès la première visite. Les moteurs comportementaux, en revanche, ont besoin d'un trafic et d'un historique d'achat importants avant que leurs recommandations soient fiables.",
      },
      {
        question: "Un moteur de recommandation peut-il suggérer plus d'un produit ?",
        answer:
          "Oui. Avec les emplacements de recommandation, le moteur réserve une place pour chaque rôle dans un ensemble et la remplit avec la meilleure correspondance, renvoyant une routine, une combinaison ou un coffret complet plutôt qu'un seul article.",
      },
    ],
    related: [
      { label: "Recommandations de produits personnalisées", href: "/glossary/personalized-product-recommendations/" },
      { label: "Commerce conversationnel", href: "/glossary/conversational-commerce/" },
      { label: "Quiz chercheur de produits", href: "/product-finder-quiz/" },
      { label: "Comment ça marche", href: "/how-it-works/" },
      { label: "Quiz pour Shopify", href: "/product-recommendation-quiz-shopify/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "shoppable-quiz": {
    slug: "shoppable-quiz",
    term: "Quiz shoppable",
    chip: "Type de quiz",
    title: "Qu'est-ce qu'un quiz shoppable ?",
    description:
      "Un quiz shoppable se termine sur une page de résultats où les clients ajoutent les produits recommandés au panier. Voici ce qui rend un quiz shoppable et où les boutiques les utilisent.",
    h1: "Qu'est-ce qu'un quiz shoppable ?",
    shortAnswer:
      "Un quiz shoppable est un quiz interactif qui se termine sur une page de résultats personnalisée où les clients peuvent ajouter les produits recommandés directement au panier. Le quiz fait partie de la boutique, ce n'est pas un sondage relégué sur le côté.",
    intro: [
      "Beaucoup de marques proposent des quiz. La différence entre un quiz qui génère du chiffre d'affaires et un quiz qui ne fait que collecter des réponses, c'est de savoir si un client peut acheter à la fin sans quitter la page.",
    ],
    sections: [
      {
        heading: "Ce qui rend un quiz shoppable",
        body: [
          "Trois choses. Premièrement, il recommande des produits et des variantes réels de votre catalogue en temps réel, pas du texte fictif. Deuxièmement, la page de résultats dispose de l'ajout au panier, pour qu'un client puisse acheter la recommandation en une étape. Troisièmement, il peut porter l'offre jusqu'au bout : une remise liée aux réponses, un coffret ajouté comme ensemble, une vente additionnelle sur la page de résultats.",
          "Sans cela, vous avez un quiz de personnalité ou un sondage. Cela peut être amusant et collecter des e-mails, mais cela ne conclut pas la vente que cela vient d'ouvrir.",
        ],
      },
      {
        heading: "Quiz shoppable vs sondage ou quiz de personnalité",
        body: [
          "Un sondage collecte des réponses et se termine. Un quiz de personnalité divertit et se termine. Un quiz shoppable utilise les réponses pour recommander des produits, puis laisse le client agir immédiatement sur la recommandation, au moment où son intention est la plus forte.",
          "Cette dernière étape est tout l'intérêt. Le moment qui suit l'obtention d'une réponse sûre est celui où le client est le plus susceptible d'acheter. Un quiz shoppable saisit ce moment au lieu de renvoyer le client vers le catalogue pour tout recommencer.",
        ],
      },
      {
        heading: "Où les quiz shoppables sont utilisés",
        body: [
          "Partout où le choix est difficile : routines de soin de la peau, combinaisons de compléments, teintes de fond de teint, coupe et taille, coffrets cadeaux, assemblages de café. Plus il est difficile de choisir dans une grille, plus un quiz shoppable mérite sa place.",
          "Ils s'affichent en popup, en bloc intégré sur une page ou en expérience pleine page, et le même quiz peut alimenter à la fois le trafic payant, l'e-mail et la découverte sur le site.",
        ],
      },
    ],
    withRevenueHunt: [
      "Chaque quiz RevenueHunt est shoppable par défaut. La page de résultats fait remonter des produits et des variantes réels de votre catalogue, prend en charge l'ajout au panier pour un seul article ou un ensemble entier, et peut afficher un code de réduction ou un bloc de contenu selon les réponses du client.",
      "Vous pouvez en construire un à partir d'un modèle ou décrire votre boutique à l'AI Quiz Copilot et obtenir un quiz complet ébauché en environ 60 secondes, puis le publier en popup, en intégration ou en page d'atterrissage.",
    ],
    faqs: [
      {
        question: "Quelle est la différence entre un quiz shoppable et un quiz de personnalité ?",
        answer:
          "Un quiz de personnalité divertit et se termine. Un quiz shoppable recommande des produits réels de votre catalogue et permet aux clients de les ajouter au panier sur la page de résultats, il conclut donc la vente au lieu de simplement collecter des réponses.",
      },
      {
        question: "Les clients peuvent-ils ajouter des produits au panier depuis le quiz ?",
        answer:
          "Oui. C'est ce qui le rend shoppable. La page de résultats affiche les produits et variantes correspondants avec un ajout au panier direct, pour un seul article ou un ensemble complet.",
      },
      {
        question: "Un quiz shoppable peut-il afficher une remise ?",
        answer:
          "Oui. La page de résultats prend en charge des blocs de code de réduction et de contenu que vous pouvez lier à des réponses précises, de sorte que les bons clients voient la bonne offre au moment de la décision.",
      },
    ],
    related: [
      { label: "Tunnel de quiz", href: "/glossary/quiz-funnel/" },
      { label: "Commerce conversationnel", href: "/glossary/conversational-commerce/" },
      { label: "Quiz créateur de coffret", href: "/solutions/bundle-builder/" },
      { label: "Modèles de quiz", href: "/templates/" },
      { label: "Calculateur de ROI du quiz", href: "/quiz-roi-calculator/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "quiz-funnel": {
    slug: "quiz-funnel",
    term: "Tunnel de quiz",
    chip: "Marketing",
    title: "Qu'est-ce qu'un tunnel de quiz ?",
    description:
      "Un tunnel de quiz utilise un quiz comme point d'entrée pour transformer le trafic en leads qualifiés et opt-in. Voici les étapes et pourquoi il surpasse un simple opt-in.",
    h1: "Qu'est-ce qu'un tunnel de quiz ?",
    shortAnswer:
      "Un tunnel de quiz est un tunnel marketing qui utilise un quiz comme point d'entrée. Un client fait un quiz, obtient une recommandation, donne son e-mail et entre dans une séquence de relance segmentée. Il transforme un trafic anonyme en lead qualifié dont la préférence est connue.",
    intro: [
      "La plupart des tunnels e-commerce commencent par une popup de remise et un unique champ e-mail. Un tunnel de quiz remplace cela par quelque chose que le client veut réellement : une réponse personnalisée.",
    ],
    sections: [
      {
        heading: "Les étapes d'un tunnel de quiz",
        body: [
          "Le trafic arrive sur le quiz, depuis une publicité, un e-mail ou un lien sur votre site. Le client répond à quelques questions. Il atteint une page de résultats avec une recommandation personnalisée. Pour voir ou enregistrer le résultat, il donne son e-mail. Cet e-mail entre dans une séquence de relance segmentée selon ce qu'il vous a dit.",
          "La différence avec un tunnel classique, c'est ce que vous savez à la fin. Au lieu d'un abonné anonyme, vous avez un contact étiqueté avec ses objectifs, ses préférences et les produits auxquels il a été associé.",
        ],
      },
      {
        heading: "Pourquoi il surpasse un opt-in générique",
        body: [
          "Une simple inscription à la newsletter n'offre rien de précis, elle convertit donc une petite partie du trafic et ne vous donne aucune information au-delà d'une adresse e-mail. Un tunnel de quiz offre une recommandation sur mesure comme raison de s'abonner, ce qui est un échange bien plus avantageux.",
          "Il améliore aussi chaque e-mail ultérieur. Un abonné dont vous savez qu'il cherche pour une peau sèche et sensible reçoit un message différent de celui qui cherche un cadeau. Cette segmentation se construit pendant le quiz, pas après coup.",
        ],
      },
      {
        heading: "Tunnels de quiz et trafic payant",
        body: [
          "Les tunnels de quiz sont populaires pour l'acquisition payante car ils qualifient et capturent en une seule étape. Un trafic froid qui rebondirait sur une page produit complétera souvent un quiz, et la capture d'e-mail signifie que vous gardez le lead même s'il n'achète pas lors de la première visite.",
          "Un tunnel de quiz est une forme précise de tunnel. Pour une vue d'ensemble de la construction des tunnels e-commerce, consultez le guide d'exemples de tunnels.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt est conçu pour faire fonctionner tout le tunnel de quiz. Il capture l'e-mail au point d'intention le plus fort, synchronise les réponses et les étiquettes client vers Klaviyo, Mailchimp, Omnisend, HubSpot et d'autres, et affiche l'abandon question par question pour que vous puissiez colmater les fuites.",
      "La recommandation sur la page de résultats est l'aimant à leads, de sorte que ce qui mérite l'e-mail est aussi ce qui génère la vente.",
    ],
    faqs: [
      {
        question: "En quoi un tunnel de quiz diffère-t-il d'un tunnel de vente classique ?",
        answer:
          "Un tunnel de quiz utilise un quiz comme point d'entrée, il qualifie et segmente donc les leads au moment où il les capture. Un tunnel classique commence souvent par un opt-in générique qui capture un e-mail mais aucune donnée de préférence.",
      },
      {
        question: "Un tunnel de quiz fonctionne-t-il pour les publicités payantes ?",
        answer:
          "Oui. Les tunnels de quiz sont courants pour l'acquisition payante car ils qualifient le trafic froid et capturent l'e-mail en une seule étape, vous gardez donc le lead même quand le client n'achète pas lors de la première visite.",
      },
      {
        question: "Que faire des leads qu'un tunnel de quiz capture ?",
        answer:
          "Synchronisez-les vers votre outil d'e-mail avec les réponses du quiz comme étiquettes, puis envoyez des relances segmentées par objectif ou préférence. RevenueHunt synchronise les réponses et les étiquettes client vers Klaviyo, Mailchimp, Omnisend, HubSpot et d'autres.",
      },
    ],
    related: [
      { label: "Quiz de génération de leads", href: "/glossary/lead-generation-quiz/" },
      { label: "Quiz shoppable", href: "/glossary/shoppable-quiz/" },
      { label: "Exemples de tunnels e-commerce", href: "/ecommerce-sales-funnel-examples/" },
      { label: "Calculateur de ROI du quiz", href: "/quiz-roi-calculator/" },
      { label: "Intégrations", href: "/integrations/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "personalized-product-recommendations": {
    slug: "personalized-product-recommendations",
    term: "Recommandations de produits personnalisées",
    chip: "Concept",
    title: "Que sont les recommandations de produits personnalisées ?",
    description:
      "Les recommandations de produits personnalisées adaptent les suggestions à chaque client. Voici comment les boutiques s'y prennent, le problème du démarrage à froid et la méthode sans cookies.",
    h1: "Que sont les recommandations de produits personnalisées ?",
    shortAnswer:
      "Les recommandations de produits personnalisées sont des suggestions adaptées à un client individuel plutôt que les mêmes best-sellers montrés à tout le monde. Elles peuvent reposer sur le comportement de navigation, les achats passés ou, plus directement, sur ce que le client vous dit.",
    intro: [
      "Montrer à chaque client la même grille traite de manière identique un acheteur de cadeau de première fois et un client fidèle et récurrent. Les recommandations personnalisées s'adaptent à qui fait réellement ses achats.",
    ],
    sections: [
      {
        heading: "Comment les boutiques personnalisent les recommandations",
        body: [
          "Il existe deux grandes approches. La personnalisation comportementale observe ce que fait un client, clics, pages vues, commandes passées, et en déduit ce qu'il faut montrer ensuite. La personnalisation par préférences déclarées demande directement au client et recommande en fonction de ses réponses.",
          "La méthode comportementale est invisible pour le client et passe automatiquement à l'échelle, mais c'est une déduction et elle peut se tromper. La méthode par préférences déclarées est explicite : le client vous dit qu'il veut une crème hydratante sans parfum pour peau sensible, il n'y a donc aucune supposition.",
        ],
      },
      {
        heading: "Le problème du démarrage à froid",
        body: [
          "La personnalisation comportementale peine avec les nouveaux clients. Sans historique à exploiter, elle se rabat sur des best-sellers génériques précisément pour les visiteurs pour qui une première impression compte le plus.",
          "Demander au client résout cela instantanément. Un quiz recueille assez d'informations pour personnaliser dès la première visite, avant qu'aucun historique de navigation n'existe, ce qui explique pourquoi il s'associe si bien au trafic payant et social qui arrive à froid.",
        ],
      },
      {
        heading: "Personnaliser sans cookies tiers",
        body: [
          "Le ciblage comportemental s'est appuyé sur les cookies tiers et le suivi inter-sites, deux pratiques de plus en plus restreintes par les navigateurs et la réglementation. Les recommandations construites sur des données que le client fournit volontairement ne dépendent d'aucune de ces pratiques.",
          "Les données qu'un quiz collecte sont des zero-party data : des préférences et des intentions que le client partage volontairement. C'est distinct des first-party data, qui correspondent au comportement que vous observez sur votre propre site, comme les pages vues et les commandes passées. Les zero-party data sont un type de first-party data, mais elles sont déclarées plutôt que déduites, il n'y a donc rien à deviner.",
          "Les deux sont durables et consenties, contrairement aux third-party data. Pour la vue d'ensemble, consultez les guides sur les zero-party data et les first-party data.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt personnalise les recommandations à partir des préférences que le client déclare dans un quiz, il fonctionne donc dès la première visite et ne dépend pas du suivi par des tiers. Les réponses correspondent à des produits et variantes réels, et les contraintes strictes excluent tout ce qui ne convient pas.",
      "Les mêmes réponses deviennent des zero-party data, de sorte que la personnalisation se poursuit dans l'e-mail : chaque campagne après le quiz peut s'adresser à ce que chaque client veut réellement.",
    ],
    faqs: [
      {
        question: "Quelles données alimentent les recommandations de produits personnalisées ?",
        answer:
          "Soit des données comportementales (clics, pages vues, historique d'achat), soit des préférences déclarées que le client donne directement. Les préférences déclarées sont les plus précises car elles sont volontairement fournies plutôt que déduites, et elles fonctionnent dès la première visite.",
      },
      {
        question: "Puis-je personnaliser les recommandations pour les visiteurs de première fois ?",
        answer:
          "Oui, si vous les interrogez. Un quiz recueille assez d'informations pour personnaliser dès la première visite, ce que les systèmes comportementaux ne peuvent pas faire car les nouveaux visiteurs n'ont aucun historique à exploiter.",
      },
      {
        question: "Les recommandations personnalisées ont-elles besoin de cookies tiers ?",
        answer:
          "Non. Les recommandations construites sur des données qu'un client fournit volontairement dans un quiz ne dépendent ni des cookies tiers ni du suivi inter-sites, deux pratiques que les navigateurs et les régulateurs restreignent.",
      },
    ],
    related: [
      { label: "Moteur de recommandation de produits", href: "/glossary/product-recommendation-engine/" },
      { label: "Personnalisation e-commerce", href: "/glossary/ecommerce-personalization/" },
      { label: "Zero-party data", href: "/zero-party-data/" },
      { label: "First-party data", href: "/first-party-data/" },
      { label: "Comment ça marche", href: "/how-it-works/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "ecommerce-personalization": {
    slug: "ecommerce-personalization",
    term: "Personnalisation e-commerce",
    chip: "Concept",
    title: "Qu'est-ce que la personnalisation e-commerce ?",
    description:
      "La personnalisation e-commerce adapte la boutique à chaque client. Voici où elle se produit, le passage aux zero-party data et le point de départ le plus simple.",
    h1: "Qu'est-ce que la personnalisation e-commerce ?",
    shortAnswer:
      "La personnalisation e-commerce consiste à adapter l'expérience d'achat, les produits, le contenu et les offres qu'un client voit, à l'individu plutôt que de montrer la même boutique à tout le monde. Bien menée, elle augmente la conversion et le panier moyen.",
    intro: [
      "La personnalisation couvre un large terrain, d'un rayon « recommandé pour vous » à une page d'accueil entièrement sur mesure. Le fil conducteur est de traiter différents clients différemment selon ce que vous savez d'eux.",
    ],
    sections: [
      {
        heading: "Où la personnalisation se produit",
        body: [
          "Sur le site, elle se manifeste par des produits recommandés, des pages d'atterrissage sur mesure et du contenu dynamique. Dans les recommandations, elle classe le catalogue pour chaque client. Dans l'e-mail et le SMS, elle segmente les messages par comportement ou préférence. Dans les publicités, elle adapte les visuels et les audiences.",
          "La plupart des boutiques n'ont pas besoin de tout cela d'un coup. Les points de départ les plus rentables sont les recommandations de produits et la segmentation e-mail, car les deux influencent directement ce qu'un client achète et s'il revient.",
        ],
      },
      {
        heading: "Le passage des third-party data aux zero-party data",
        body: [
          "La personnalisation classique reposait fortement sur les third-party data et le suivi inter-sites. Les évolutions des navigateurs et la réglementation sur la vie privée ont rendu cette approche fragile et, dans bien des cas, non conforme.",
          "Le remplacement durable, ce sont vos propres données, et elles se présentent sous deux formes. Les first-party data sont ce que vous observez des interactions d'un client avec votre boutique, comme les pages vues et les commandes passées. Les zero-party data sont ce qu'il fournit volontairement, comme des objectifs, des préférences et des problèmes. Les zero-party data sont le sous-ensemble déclaré des first-party data, et c'est le signal d'intention le plus précis car le client vous l'a dit directement.",
          "Les deux sont consenties et ne disparaissent pas quand un navigateur bloque un cookie. Un quiz est la manière la plus directe de collecter des zero-party data à grande échelle.",
        ],
      },
      {
        heading: "Le point de départ le plus simple",
        body: [
          "Les suites de personnalisation pour entreprises peuvent adapter chaque pixel, avec un prix et un délai de mise en œuvre à la hauteur. La plupart des boutiques n'en ont pas besoin pour obtenir des résultats.",
          "Un quiz de recommandation de produits est le point d'entrée le plus simple. Il personnalise le moment le plus important, le choix d'un produit, capture les données de préférence qui alimentent ensuite l'e-mail personnalisé, et peut être en ligne le jour même sur une offre gratuite.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt est une manière ciblée et en libre-service de commencer à personnaliser : un quiz qui adapte les recommandations dès la première visite et alimente votre outil d'e-mail en données de préférence pour une segmentation continue. Pas de contrat d'entreprise, pas d'équipe de data science.",
      "Il fonctionne sur toutes les grandes plateformes et se synchronise avec Klaviyo, Mailchimp, Omnisend, HubSpot et d'autres, de sorte que la personnalisation se prolonge de la boutique jusqu'à la boîte de réception.",
    ],
    faqs: [
      {
        question: "Quelle est la manière la plus simple de commencer la personnalisation e-commerce ?",
        answer:
          "Un quiz de recommandation de produits. Il personnalise le moment le plus impactant, le choix d'un produit, fonctionne dès la première visite, capture des données de préférence pour l'e-mail personnalisé et peut être en ligne le jour même sur une offre gratuite.",
      },
      {
        question: "La personnalisation e-commerce nécessite-t-elle des cookies tiers ?",
        answer:
          "Plus maintenant, et de plus en plus elle ne peut pas s'y fier. L'approche durable utilise des données que les clients fournissent directement, ce qui est plus précis, consenti et insensible aux restrictions des navigateurs et de la vie privée.",
      },
      {
        question: "Ai-je besoin d'une plateforme d'entreprise pour personnaliser ma boutique ?",
        answer:
          "Non. Les suites pour entreprises adaptent tout à un coût élevé, mais la plupart des boutiques obtiennent de bons résultats avec une personnalisation ciblée : recommandations et segmentation e-mail, qu'un quiz fournit sur une offre en libre-service.",
      },
    ],
    related: [
      { label: "Recommandations de produits personnalisées", href: "/glossary/personalized-product-recommendations/" },
      { label: "Découverte de produits", href: "/glossary/product-discovery/" },
      { label: "Zero-party data", href: "/zero-party-data/" },
      { label: "First-party data", href: "/first-party-data/" },
      { label: "Comparer RevenueHunt vs Nosto", href: "/compare/nosto/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "product-discovery": {
    slug: "product-discovery",
    term: "Découverte de produits",
    chip: "Concept",
    title: "Qu'est-ce que la découverte de produits en e-commerce ?",
    description:
      "La découverte de produits, c'est la façon dont les clients trouvent le bon produit dans votre catalogue. Les méthodes, pourquoi les grands catalogues la compliquent et comment la vente guidée aide.",
    h1: "Qu'est-ce que la découverte de produits en e-commerce ?",
    shortAnswer:
      "La découverte de produits, c'est la façon dont les clients trouvent le bon produit dans votre catalogue. Une bonne découverte, via la recherche, les filtres et les quiz guidés, mène un client de « j'ai un problème » à « c'est le produit » avec le moins de friction possible.",
    intro: [
      "Un client arrive rarement en connaissant votre SKU exact. Il arrive avec un besoin. La découverte de produits, c'est tout ce qui se trouve entre ce besoin et la bonne page produit.",
    ],
    sections: [
      {
        heading: "Les principales méthodes de découverte",
        body: [
          "La recherche permet aux clients qui savent ce qu'ils veulent de le taper. La navigation et les filtres leur permettent d'affiner par catégorie et attribut. Les recommandations font remonter des produits pertinents au fil de la navigation. La vente guidée, généralement un quiz, interroge sur le besoin et oriente vers la réponse.",
          "Chacune convient à un client différent. La recherche fonctionne quand quelqu'un connaît le nom du produit. Les filtres fonctionnent quand il en connaît les attributs. Un quiz fonctionne quand il connaît le problème mais pas le produit, ce qui est le cas le plus difficile et le plus courant.",
        ],
      },
      {
        heading: "Pourquoi les grands catalogues compliquent la découverte",
        body: [
          "Une boutique de dix produits n'a presque pas besoin d'outils de découverte. Une boutique de centaines ou de milliers de produits, si. Plus vous vendez, plus il est probable qu'un client se sente submergé et parte sans trouver ce qui lui convenait.",
          "C'est le paradoxe du choix en pratique : plus d'options peut faire baisser la conversion, pas la monter, à moins que vous ne donniez aux clients un moyen de s'y retrouver. La découverte guidée transforme un grand catalogue d'un handicap en un atout.",
        ],
      },
      {
        heading: "La découverte est le levier de conversion",
        body: [
          "Un client qui ne trouve pas le bon produit n'en achète pas un autre, il part. Améliorer la découverte est souvent le changement le plus efficace qu'une boutique au catalogue profond puisse faire, car cela corrige l'étape où l'intention meurt en silence.",
          "Un quiz est l'outil de découverte le plus direct pour l'achat basé sur le besoin, car il pose la question qu'un vendeur poserait et renvoie le produit qu'il indiquerait.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt gère la découverte de produits basée sur le besoin : le client décrit son objectif ou son problème, et le quiz classe votre catalogue en temps réel pour renvoyer la bonne correspondance, les contraintes strictes excluant tout ce qui ne convient pas.",
      "Il passe à l'échelle avec votre catalogue, fonctionne dès la première visite et tourne sur Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace et en autonome.",
    ],
    faqs: [
      {
        question: "Quelle est la différence entre la découverte de produits et la recherche ?",
        answer:
          "La recherche est une méthode de découverte, pour les clients qui savent déjà ce qu'ils veulent. La découverte de produits est plus large et inclut les filtres, les recommandations et les quiz guidés pour les clients qui connaissent leur besoin mais pas le produit précis.",
      },
      {
        question: "Comment un quiz améliore-t-il la découverte de produits ?",
        answer:
          "Il gère le cas le plus difficile : un client qui connaît son problème mais pas le produit. Le quiz interroge sur le besoin et classe le catalogue pour renvoyer la bonne correspondance, comme un vendeur le guiderait.",
      },
      {
        question: "La découverte de produits compte-t-elle davantage pour les grands catalogues ?",
        answer:
          "Oui. Plus vous vendez de produits, plus il est facile pour les clients de se sentir submergés et de partir. La découverte guidée permet de s'y retrouver dans un grand catalogue et transforme sa taille en avantage plutôt qu'en obstacle.",
      },
    ],
    related: [
      { label: "Quiz de vente guidée", href: "/guided-selling-quiz/" },
      { label: "Quiz chercheur de produits", href: "/product-finder-quiz/" },
      { label: "Personnalisation e-commerce", href: "/glossary/ecommerce-personalization/" },
      { label: "Comparer RevenueHunt vs Zoovu", href: "/compare/zoovu/" },
      { label: "Modèles de quiz", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "lead-generation-quiz": {
    slug: "lead-generation-quiz",
    term: "Quiz de génération de leads",
    chip: "Type de quiz",
    title: "Qu'est-ce qu'un quiz de génération de leads ?",
    description:
      "Un quiz de génération de leads capture des leads qualifiés et opt-in avec une raison intégrée de s'abonner. Voici pourquoi il surpasse un formulaire d'inscription et ce que vous captez.",
    h1: "Qu'est-ce qu'un quiz de génération de leads ?",
    shortAnswer:
      "Un quiz de génération de leads capture des leads qualifiés : un client répond à quelques questions, donne son e-mail pour voir le résultat, et vous obtenez un contact étiqueté avec ses préférences déclarées. C'est un opt-in avec une raison intégrée de s'abonner.",
    intro: [
      "L'e-mail reste le canal le plus rentable en e-commerce, mais un simple formulaire d'inscription convertit une petite fraction des visiteurs et ne vous apprend rien sur eux. Un quiz de génération de leads résout les deux problèmes à la fois.",
    ],
    sections: [
      {
        heading: "Pourquoi un quiz surpasse un simple formulaire d'inscription",
        body: [
          "Une case newsletter demande un e-mail et offre, au mieux, une remise générique. Un quiz de génération de leads offre un résultat personnalisé, c'est-à-dire une raison qu'un client veut réellement avoir de donner son adresse. L'échange paraît juste, donc plus de gens l'acceptent.",
          "Il collecte aussi plus qu'un e-mail. Au moment où un client s'inscrit, il a répondu à des questions sur ses objectifs, ses préférences et ses contraintes, de sorte que chaque contact arrive déjà qualifié et segmenté.",
        ],
      },
      {
        heading: "Ce que vous captez, et comment l'utiliser",
        body: [
          "Vous captez l'e-mail plus les réponses du quiz sous forme de zero-party data. Ces réponses deviennent des étiquettes dans votre outil d'e-mail : objectif, type de peau, budget, destinataire, ce que le quiz a demandé.",
          "Les étiquettes transforment une liste unique en segments auxquels vous pouvez vous adresser de manière précise. Un lead qui a dit acheter pour une peau sensible reçoit un e-mail différent de celui qui cherche un cadeau, et la différence se construit à la capture, pas en la devinant plus tard.",
        ],
      },
      {
        heading: "L'avantage en matière de conformité",
        body: [
          "Comme le client fournit volontairement les données en échange d'un résultat, ce sont des zero-party data : le type déclaré de first-party data, consenti par définition. Cela tient bien mieux que des third-party data déduites ou achetées à mesure que les règles de confidentialité se durcissent et que les navigateurs restreignent le suivi.",
          "Vous possédez les données, elles sont précises car elles viennent directement du client, et elles ne dépendent d'aucun cookie tiers pour rester utiles.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt transforme n'importe quel quiz en quiz de génération de leads : capturez l'e-mail au point d'intention le plus fort, puis synchronisez le contact et les étiquettes basées sur les réponses vers Klaviyo, Mailchimp, Omnisend, HubSpot et d'autres.",
      "Comme la recommandation est l'incitation, le même quiz qui fait croître votre liste génère aussi la vente, et les analyses d'abandon montrent exactement où resserrer le parcours.",
    ],
    faqs: [
      {
        question: "En quoi un quiz de génération de leads diffère-t-il d'un formulaire d'inscription ?",
        answer:
          "Un formulaire d'inscription demande un e-mail et offre une incitation générique. Un quiz de génération de leads offre un résultat personnalisé comme raison de s'abonner et capte des données de préférence en plus de l'e-mail, de sorte que chaque lead est qualifié et segmenté.",
      },
      {
        question: "Quelles informations un quiz de génération de leads capture-t-il ?",
        answer:
          "L'e-mail du client plus ses réponses au quiz sous forme de zero-party data. Ces réponses se synchronisent vers votre outil d'e-mail comme étiquettes, de sorte que les contacts arrivent déjà segmentés par objectif, préférence ou contrainte.",
      },
      {
        question: "Les données d'un quiz de génération de leads sont-elles conformes à utiliser ?",
        answer:
          "Oui. Le client les fournit volontairement en échange d'un résultat, ce sont donc des first-party data consenties. Cela tient mieux que des données déduites ou tierces à mesure que les règles de confidentialité et les restrictions des navigateurs se durcissent.",
      },
    ],
    related: [
      { label: "Tunnel de quiz", href: "/glossary/quiz-funnel/" },
      { label: "Quiz shoppable", href: "/glossary/shoppable-quiz/" },
      { label: "Zero-party data", href: "/zero-party-data/" },
      { label: "Intégrations", href: "/integrations/" },
      { label: "Modèles de quiz", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "conversion-rate-optimization": {
    slug: "conversion-rate-optimization",
    term: "Optimisation du taux de conversion (CRO)",
    chip: "Concept",
    title: "Qu'est-ce que l'optimisation du taux de conversion ?",
    description:
      "L'optimisation du taux de conversion (CRO) augmente la part de visiteurs qui achètent. Comment on la mesure, où se concentrer et les tactiques qui font bouger les choses.",
    h1: "Qu'est-ce que l'optimisation du taux de conversion (CRO) ?",
    shortAnswer:
      "L'optimisation du taux de conversion (CRO) est la pratique consistant à augmenter le pourcentage de visiteurs qui réalisent une action souhaitée, généralement un achat. Vous mesurez le taux de conversion comme le nombre de conversions divisé par le nombre de visiteurs, puis vous l'améliorez sans acheter plus de trafic.",
    intro: [
      "La CRO consiste à tirer davantage du trafic que vous avez déjà. Doubler votre taux de conversion a le même effet sur le chiffre d'affaires que doubler votre trafic, mais cela coûte bien moins cher.",
    ],
    sections: [
      {
        heading: "Comment se calcule le taux de conversion",
        body: [
          "Le taux de conversion correspond au nombre de conversions divisé par le nombre total de visiteurs, exprimé en pourcentage. Si 1 000 visiteurs produisent 20 achats, c'est un taux de conversion de 2 %. Les taux de conversion e-commerce moyens se situent dans les bas pourcentages à un chiffre, donc de petits gains absolus sont de grands gains relatifs : passer de 2 % à 3 % est une hausse de 50 % des commandes.",
          "Le même calcul s'applique à n'importe quel objectif, pas seulement aux achats. Les inscriptions e-mail, les complétions de quiz et les ajouts au panier sont autant de conversions que vous pouvez optimiser.",
        ],
      },
      {
        heading: "Sur quoi la CRO se concentre réellement",
        body: [
          "Une bonne CRO trouve l'étape précise où l'intention fuit et la corrige. Fuites courantes : une page produit qui ne répond pas à la vraie question du client, un paiement trop contraignant, ou une page catégorie qui dépose un client indécis devant un mur d'options sans aucune aide.",
          "C'est une boucle, pas une correction unique : formuler une hypothèse, changer une seule chose, mesurer par rapport à une base de référence, garder ce qui gagne. La discipline consiste à modifier une variable à la fois pour savoir ce qui a fait bouger le chiffre.",
        ],
      },
      {
        heading: "Les tactiques qui font bouger le chiffre",
        body: [
          "Les gains durables sont la clarté et la pertinence : des pages plus rapides, des informations produit honnêtes, moins d'étapes de paiement et aider les clients indécis à choisir. Les popups de remise peuvent augmenter la conversion à court terme, mais elles habituent les clients à attendre les promotions et érodent la marge.",
          "Aider les clients à choisir est le levier le plus négligé. Un client qui n'arrive pas à se décider ne convertit pas, et une grille d'options ne l'aide pas. Une expérience guidée qui réduit le catalogue à une recommandation sûre supprime l'indécision qui tue les conversions en silence.",
        ],
      },
    ],
    withRevenueHunt: [
      "Un quiz de recommandation de produits est une tactique de CRO visant la fuite liée à l'indécision. Au lieu de laisser un client comparer un mur de produits, il pose quelques questions et renvoie une recommandation personnalisée et sûre, de sorte que plus de clients atteignent une décision d'achat.",
      "Il capte aussi l'e-mail et les données de préférence en chemin, de sorte que les visiteurs qui n'achètent pas lors de la première visite ne sont pas perdus. Vous pouvez estimer le gain potentiel pour vos propres chiffres avec le calculateur de ROI du quiz.",
    ],
    faqs: [
      {
        question: "Comment calcule-t-on le taux de conversion ?",
        answer:
          "Divisez le nombre de conversions par le nombre de visiteurs et exprimez-le en pourcentage. Par exemple, 20 achats sur 1 000 visiteurs représentent un taux de conversion de 2 %. La même formule fonctionne pour tout objectif, comme les inscriptions ou les complétions de quiz.",
      },
      {
        question: "Qu'est-ce qu'un bon taux de conversion e-commerce ?",
        answer:
          "La plupart des boutiques e-commerce convertissent dans les bas pourcentages à un chiffre, souvent autour de 1 % à 3 %. Comme la base est petite, des gains absolus modestes sont de grands gains relatifs : passer de 2 % à 3 % est une augmentation de 50 % des commandes.",
      },
      {
        question: "Comment un quiz de produits améliore-t-il le taux de conversion ?",
        answer:
          "Il vise la fuite liée à l'indécision. Un quiz réduit un grand catalogue à une recommandation personnalisée et sûre, de sorte que les clients indécis atteignent une décision d'achat au lieu de rebondir sur une grille d'options.",
      },
    ],
    related: [
      { label: "Panier moyen", href: "/glossary/average-order-value/" },
      { label: "Découverte de produits", href: "/glossary/product-discovery/" },
      { label: "Conseils d'optimisation de la conversion", href: "/ecommerce-conversion-optimization-tips/" },
      { label: "Calculateur de ROI du quiz", href: "/quiz-roi-calculator/" },
      { label: "Tunnel de quiz", href: "/glossary/quiz-funnel/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "average-order-value": {
    slug: "average-order-value",
    term: "Panier moyen (AOV)",
    chip: "Métrique",
    title: "Qu'est-ce que le panier moyen (AOV) ?",
    description:
      "Le panier moyen (AOV) est la dépense moyenne d'un client par commande. Comment le calculer, pourquoi il compte et comment l'augmenter sans plus de trafic.",
    h1: "Qu'est-ce que le panier moyen (AOV) ?",
    shortAnswer:
      "Le panier moyen (AOV) est le montant moyen qu'un client dépense en une seule commande. Vous le calculez en divisant le chiffre d'affaires total par le nombre de commandes sur la même période.",
    intro: [
      "L'AOV est l'un des trois chiffres qui déterminent votre chiffre d'affaires, aux côtés du trafic et du taux de conversion. L'augmenter accroît le chiffre d'affaires à partir du même nombre exact de commandes, ce qui en fait l'un des leviers de croissance les moins chers dont vous disposez.",
    ],
    sections: [
      {
        heading: "Comment calculer l'AOV",
        body: [
          "Divisez le chiffre d'affaires total par le nombre de commandes sur une période donnée. Si une boutique réalise 50 000 $ avec 1 000 commandes en un mois, son AOV est de 50 $. Suivez-le dans le temps et par source de trafic, car un canal à AOV plus élevé peut valoir davantage même s'il convertit moins.",
          "L'AOV interagit avec tout le reste. Un AOV plus élevé signifie que chaque conversion vaut davantage, ce qui augmente le montant que vous pouvez vous permettre de dépenser pour acquérir un client.",
        ],
      },
      {
        heading: "Pourquoi l'AOV compte",
        body: [
          "Le trafic et le taux de conversion reçoivent le plus d'attention, mais ce sont les leviers coûteux : plus de trafic coûte des dépenses publicitaires, et les gains de conversion deviennent plus difficiles à mesure que vous optimisez. L'AOV est le levier que vous pouvez actionner sur les commandes que vous remportez déjà.",
          "Il finance aussi l'acquisition. Plus chaque commande vaut cher, plus vous pouvez enchérir pour du trafic payant tout en restant rentable, ce qui se cumule sur tout le tunnel.",
        ],
      },
      {
        heading: "Comment augmenter l'AOV",
        body: [
          "Les manières honnêtes d'augmenter l'AOV apportent toutes une valeur réelle : recommander des produits complémentaires, regrouper des articles qui vont ensemble et aider les clients à acheter la solution complète plutôt qu'une seule pièce. La vente croisée et la vente incitative sont les tactiques ; une recommandation pertinente est ce qui les fait fonctionner au lieu d'agacer.",
          "Le mot-clé est « pertinent ». Une incitation à un ajout générique est ignorée. Un ensemble recommandé qui correspond réellement à ce que le client achète est acheté, car il est perçu comme une aide, pas comme une pression commerciale.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt augmente l'AOV en recommandant un ensemble complet plutôt qu'un seul produit. Les emplacements de recommandation réservent une place pour chaque rôle dans une routine, une combinaison ou un coffret, de sorte que la page de résultats renvoie la solution entière avec ajout au panier pour l'ensemble et une remise optionnelle liée aux réponses.",
      "Comme chaque article correspond aux réponses du client, la commande plus importante paraît être une recommandation, pas une vente incitative. Vous pouvez estimer l'impact sur le chiffre d'affaires pour votre boutique avec le calculateur de ROI du quiz.",
    ],
    faqs: [
      {
        question: "Comment calcule-t-on le panier moyen ?",
        answer:
          "Divisez le chiffre d'affaires total par le nombre de commandes sur la même période. Par exemple, 50 000 $ de chiffre d'affaires sur 1 000 commandes correspondent à un panier moyen de 50 $.",
      },
      {
        question: "Pourquoi l'AOV est-il important ?",
        answer:
          "Il accroît le chiffre d'affaires à partir des commandes que vous remportez déjà, sans payer pour plus de trafic, et un AOV plus élevé vous permet de dépenser davantage pour acquérir chaque client tout en restant rentable. C'est l'un des leviers de croissance les moins chers disponibles.",
      },
      {
        question: "Comment un quiz de produits peut-il augmenter l'AOV ?",
        answer:
          "En recommandant un ensemble complet plutôt qu'un seul produit. Les emplacements de recommandation renvoient une routine, une combinaison ou un coffret correspondants avec ajout au panier pour l'ensemble entier, de sorte que chaque commande est plus importante tout en restant personnalisée.",
      },
    ],
    related: [
      { label: "Vente croisée et vente incitative", href: "/glossary/cross-selling-and-upselling/" },
      { label: "Optimisation du taux de conversion", href: "/glossary/conversion-rate-optimization/" },
      { label: "Quiz créateur de coffret", href: "/solutions/bundle-builder/" },
      { label: "Quiz créateur de routine", href: "/solutions/routine-builder/" },
      { label: "Calculateur de ROI du quiz", href: "/quiz-roi-calculator/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "cross-selling-and-upselling": {
    slug: "cross-selling-and-upselling",
    term: "Vente croisée et vente incitative",
    chip: "Tactique",
    title: "La vente croisée vs la vente incitative expliquées",
    description:
      "La vente croisée ajoute des produits liés ; la vente incitative fait monter en gamme. Voici la différence, pourquoi les deux fonctionnent et comment un quiz le fait sans la pression.",
    h1: "Qu'est-ce que la vente croisée et la vente incitative ?",
    shortAnswer:
      "La vente croisée recommande des produits liés qui complètent ce qu'un client achète, comme une crème hydratante avec un nettoyant. La vente incitative recommande une version meilleure ou plus grande de ce qu'il veut déjà, comme une plus grande taille ou un niveau premium. Les deux augmentent la valeur de la commande.",
    intro: [
      "On regroupe souvent les deux car les deux augmentent ce qu'un client dépense, mais elles fonctionnent dans des directions différentes. Savoir laquelle convient à un moment, c'est la différence entre utile et insistant.",
    ],
    sections: [
      {
        heading: "Vente croisée vs vente incitative : la différence",
        body: [
          "La vente croisée va sur le côté. Elle ajoute des articles complémentaires à la commande : le classique « voulez-vous des frites avec ça », ou une protection d'écran avec un téléphone. L'objectif est un achat plus complet.",
          "La vente incitative va vers le haut. Elle fait passer le client à une version de plus grande valeur de ce qu'il envisage déjà : une plus grande taille, un modèle premium, un abonnement plus long. L'objectif est une meilleure adéquation à un prix plus élevé, pas plus d'articles.",
        ],
      },
      {
        heading: "Pourquoi les deux fonctionnent, quand elles sont pertinentes",
        body: [
          "Les deux tactiques augmentent le panier moyen, et les deux peuvent se retourner contre vous. Une vente croisée ou incitative pertinente est perçue comme un conseil utile ; une vente non pertinente est perçue comme une boutique qui cherche à gonfler la facture, et les clients l'ignorent ou s'en agacent.",
          "La pertinence est primordiale, et la pertinence exige de connaître le client. Une recommandation basée sur ce que quelqu'un essaie réellement d'accomplir fait mouche. Un rayon générique « vous pourriez aussi aimer », montré à tout le monde, non.",
        ],
      },
      {
        heading: "Comment un quiz fait de la vente croisée et incitative sans la pression",
        body: [
          "Un quiz connaît l'objectif du client avant de recommander quoi que ce soit, de sorte que la vente croisée et la vente incitative sont intégrées à la recommandation plutôt qu'ajoutées au paiement. Il peut renvoyer un ensemble complet (vente croisée) et orienter vers le bon niveau pour le besoin déclaré (vente incitative) en un seul mouvement.",
          "Comme la recommandation répond aux propres questions du client, la commande plus importante paraît méritée. Le client voit une solution qui convient, pas une liste d'options supplémentaires.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt intègre la vente croisée et la vente incitative à la recommandation elle-même. Les emplacements de recommandation réservent une place pour chaque rôle complémentaire afin que la page de résultats renvoie un ensemble complet, et la logique basée sur les réponses oriente les clients vers la taille, le niveau ou le coffret qui correspond à ce qu'ils vous ont dit.",
      "La page de résultats prend en charge l'ajout au panier pour l'ensemble entier plus une remise liée aux réponses, de sorte que la commande croît parce que la recommandation est juste, pas parce qu'une popup a interrompu le paiement.",
    ],
    faqs: [
      {
        question: "Quelle est la différence entre la vente croisée et la vente incitative ?",
        answer:
          "La vente croisée ajoute des produits complémentaires à une commande, comme une crème hydratante avec un nettoyant. La vente incitative fait monter en gamme vers une version meilleure ou plus grande de ce que le client veut déjà, comme un niveau premium ou une plus grande taille. Les deux augmentent la valeur de la commande.",
      },
      {
        question: "La vente croisée et la vente incitative fonctionnent-elles vraiment ?",
        answer:
          "Oui, quand la recommandation est pertinente. Une suggestion qui correspond à l'objectif du client est perçue comme utile et est achetée. Une incitation générique et universelle est ignorée ou mal vécue, c'est donc la pertinence qui sépare ces deux issues.",
      },
      {
        question: "Comment un quiz fait-il de la vente croisée et de la vente incitative ?",
        answer:
          "Il apprend d'abord l'objectif du client, puis intègre la vente croisée et la vente incitative à la recommandation. Les emplacements de recommandation renvoient un ensemble complet, et la logique basée sur les réponses oriente vers le bon niveau, de sorte que la commande plus importante paraît être un conseil plutôt qu'une pression.",
      },
    ],
    related: [
      { label: "Panier moyen", href: "/glossary/average-order-value/" },
      { label: "Quiz créateur de coffret", href: "/solutions/bundle-builder/" },
      { label: "Quiz créateur de routine", href: "/solutions/routine-builder/" },
      { label: "Quiz shoppable", href: "/glossary/shoppable-quiz/" },
      { label: "Recommandations de produits personnalisées", href: "/glossary/personalized-product-recommendations/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "customer-segmentation": {
    slug: "customer-segmentation",
    term: "Segmentation client",
    chip: "Marketing",
    title: "Qu'est-ce que la segmentation client ?",
    description:
      "La segmentation client regroupe les acheteurs par traits communs pour vous adresser à chaque groupe de manière précise. Les types, pourquoi elle fonctionne et comment un quiz l'alimente.",
    h1: "Qu'est-ce que la segmentation client ?",
    shortAnswer:
      "La segmentation client est la pratique consistant à regrouper les clients par traits communs, comme les objectifs, le comportement ou les caractéristiques démographiques, pour vous adresser à chaque groupe avec un message pertinent au lieu d'envoyer la même chose à tout le monde.",
    intro: [
      "Un message unique à toute votre liste ne parle à personne en particulier. La segmentation vous permet de dire la bonne chose au bon groupe, ce qui explique pourquoi les campagnes segmentées surpassent systématiquement l'envoi de masse.",
    ],
    sections: [
      {
        heading: "Les principales façons de segmenter",
        body: [
          "La segmentation démographique regroupe par attributs comme l'âge ou la localisation. La segmentation comportementale regroupe par ce que font les clients : achats passés, navigation, engagement. La segmentation psychographique regroupe par attitudes et valeurs. La segmentation par besoins regroupe par le problème qu'un client cherche à résoudre.",
          "Pour l'e-commerce, les segments par besoins et comportementaux tendent à être les plus exploitables, car ils correspondent directement à ce qu'il faut recommander et à ce qu'il faut dire ensuite.",
        ],
      },
      {
        heading: "Pourquoi la segmentation fonctionne",
        body: [
          "La pertinence stimule la réponse. Un client qui cherche pour une peau sèche et sensible ne devrait pas recevoir le même e-mail qu'un client qui cherche un cadeau, et quand ce n'est pas le cas, les taux d'ouverture, les clics et les conversions augmentent tous.",
          "La segmentation se cumule aussi avec le temps. Chaque campagne que vous envoyez à un segment bien défini vous en apprend davantage à son sujet, ce qui affine la suivante. La liste devient un actif, pas seulement un canal de diffusion.",
        ],
      },
      {
        heading: "Le problème de données derrière la segmentation",
        body: [
          "Vous ne pouvez segmenter que par ce que vous savez, et la plupart des boutiques ne savent pas grand-chose d'un visiteur anonyme. Les données comportementales s'accumulent lentement et échouent pour les nouveaux clients, et les third-party data sont de plus en plus restreintes par les navigateurs et la réglementation.",
          "La solution est de demander. Quand un client vous indique son objectif, sa préférence ou sa contrainte, vous pouvez segmenter dessus immédiatement et avec précision, avec son consentement. Cette information volontairement fournie correspond aux zero-party data.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt transforme automatiquement les réponses du quiz en segments. Chaque réponse devient une étiquette client, comme objectif:sommeil ou peau:sensible, qui se synchronise vers Klaviyo, Mailchimp, Omnisend, HubSpot et d'autres, de sorte que les contacts arrivent pré-segmentés selon ce qu'ils vous ont dit.",
      "Comme les segments sont construits à partir de données que le client a volontairement fournies, ils sont précis dès la première visite et ne dépendent pas du suivi. Chaque campagne après le quiz peut s'adresser au segment plutôt qu'à toute la liste.",
    ],
    faqs: [
      {
        question: "Quels sont les principaux types de segmentation client ?",
        answer:
          "Les bases courantes sont la segmentation démographique (âge, localisation), comportementale (achats, navigation, engagement), psychographique (attitudes, valeurs) et par besoins (le problème qu'un client résout). Pour l'e-commerce, les segments par besoins et comportementaux sont généralement les plus exploitables.",
      },
      {
        question: "Pourquoi la segmentation client est-elle importante ?",
        answer:
          "Elle rend le message pertinent, ce qui augmente les taux d'ouverture, les clics et les conversions par rapport à l'envoi de la même chose à tout le monde. Elle se cumule aussi : chaque campagne vers un segment défini vous en apprend davantage à son sujet et affine la suivante.",
      },
      {
        question: "Comment un quiz aide-t-il à la segmentation ?",
        answer:
          "Il interroge directement les clients, de sorte que chaque réponse devient une étiquette client qui se synchronise vers votre outil d'e-mail. Les contacts arrivent pré-segmentés par objectif, préférence ou contrainte, précis dès la première visite et sans dépendre du suivi.",
      },
    ],
    related: [
      { label: "Recommandations de produits personnalisées", href: "/glossary/personalized-product-recommendations/" },
      { label: "Quiz de génération de leads", href: "/glossary/lead-generation-quiz/" },
      { label: "Zero-party data", href: "/zero-party-data/" },
      { label: "Personnalisation e-commerce", href: "/glossary/ecommerce-personalization/" },
      { label: "Intégrations", href: "/integrations/" },
    ],
    verifiedAsOf: VERIFIED,
  },
};

/** Guides and pages the glossary hub points to. */
export const GLOSSARY_RELATED_GUIDES_FR: GlossaryLink[] = [
  {
    label: "Quiz chercheur de produits",
    href: "/product-finder-quiz/",
    blurb: "Ce qu'est un quiz chercheur de produits, quand l'utiliser et 12 exemples en ligne.",
  },
  {
    label: "Quiz de vente guidée",
    href: "/guided-selling-quiz/",
    blurb: "Comment la vente guidée fonctionne en e-commerce et comment construire le quiz.",
  },
  {
    label: "Zero-party data",
    href: "/zero-party-data/",
    blurb: "Ce que sont les zero-party data, pourquoi elles surpassent le suivi comportemental et comment un quiz les capte.",
  },
  {
    label: "Solutions par secteur",
    href: "/solutions/",
    blurb: "Des solutions de quiz de recommandation de produits pour les soins de la peau, les compléments, la mode et plus encore.",
  },
  {
    label: "Calculateur de ROI du quiz",
    href: "/quiz-roi-calculator/",
    blurb: "Estimez le chiffre d'affaires supplémentaire qu'un quiz de recommandation de produits pourrait apporter à votre boutique.",
  },
];
