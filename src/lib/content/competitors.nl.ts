import type { Competitor } from "../competitors";

// Gedeelde waarden van de RevenueHunt-kolom (geverifieerd met overzicht + docs).
// Worden als benoemde constanten bewaard zodat elke concurrententabel
// hetzelfde RH-verhaal vertelt.
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

export const COMPETITORS_NL: Record<string, Competitor> = {
  "octane-ai": {
    slug: "octane-ai",
    name: "Octane AI",
    category: "Quiz-app voor Shopify",
    title: "RevenueHunt vs Octane AI: het alternatief voor Octane AI",
    description:
      "RevenueHunt vs Octane AI: gratis abonnement, geen Shopify-watermerk en onbeperkte quizzen vanaf $39/mo. Het alternatief voor Octane AI voor productquizzen.",
    h1: "RevenueHunt vs Octane AI",
    heroSubtitle:
      "Beide maken productaanbevelingsquizzen voor Shopify. RevenueHunt voegt een gratis abonnement, onbeperkte quizzen en geen watermerk toe, tegen een fractie van de prijs.",
    intro: [
      "Octane AI is een product- en personalisatiequiz-app gemaakt voor Shopify. De prijzen zijn gebaseerd op credits, beginnen bij $50/maand en er is geen gratis abonnement. Het is een capabele tool, vooral voor grote beautymerken. Maar het instapabonnement beperkt je tot twee quizzen en houdt het Octane AI-logo op je quiz totdat je het Plus-abonnement van $200/maand bereikt.",
      "RevenueHunt is de productaanbevelingsquiz die door meer dan 20.000 merken wordt gebruikt (4,9★, meer dan 450 reviews). Begin gratis, voegt nooit een watermerk toe aan je Shopify-quiz op welk abonnement dan ook, laat je vanaf dag één onbeperkt quizzen maken en werkt naast Shopify ook op WooCommerce, BigCommerce, Magento, Wix en meer.",
    ],
    rows: [
      { feature: "Gratis abonnement", rh: RH.freePlan, them: "no" },
      { feature: "Instapprijs betaald", rh: RH.startingPaid, them: "$50/mo" },
      { feature: "Prijsmodel", rh: "Vast tarief, per antwoord", them: "Op basis van credits + overschrijding" },
      { feature: "Onbeperkte quizzen in het instapabonnement", rh: RH.unlimitedQuizzes, them: "no" },
      { feature: "Geen watermerk van de aanbieder op Shopify (elk abonnement)", rh: RH.noForcedBranding, them: "Logo tot het Plus-abonnement van $200/mo" },
      { feature: "Beveelt echte producten uit je catalogus aan", rh: RH.catalogRecs, them: "yes" },
      { feature: "Native Shopify-app (Built for Shopify)", rh: RH.shopifyNative, them: "no" },
      { feature: "Werkt op WooCommerce, BigCommerce, Magento, Wix en meer", rh: RH.multiPlatform, them: "no" },
      { feature: "Quizbouwer met AI (setup in 60 seconden)", rh: RH.aiBuilder, them: "yes" },
      { feature: "Onbeperkte voorwaardelijke / vertakkingslogica", rh: RH.branching, them: "yes" },
      { feature: "Analytics van afhaken vraag voor vraag", rh: RH.analytics, them: "yes" },
      { feature: "Integraties met Klaviyo en e-mail / CRM", rh: RH.emailIntegrations, them: "yes" },
    ],
    whySwitch: [
      {
        title: "Begin gratis en betaal daarna een vast tarief",
        body: "Octane AI heeft geen gratis abonnement en begint bij $50/maand met credits, met overschrijdingen van $0,10 per credit zodra ze op zijn. RevenueHunt heeft een echt gratis abonnement en vaste prijzen per antwoord vanaf $39/maand. Geen creditberekeningen, geen onverwachte overschrijdingen.",
      },
      {
        title: "Houd je merk vanaf dag één",
        body: "Octane AI toont zijn logo op je quiz totdat je upgradet naar het Plus-abonnement van $200/maand. RevenueHunt voegt nooit een watermerk toe aan Shopify-quizzen, op welk abonnement dan ook, inclusief het gratis abonnement.",
      },
      {
        title: "Maak zoveel quizzen als je nodig hebt",
        body: "Het instapabonnement van Octane AI beperkt je tot twee quizzen. RevenueHunt laat je in elk abonnement onbeperkt quizzen maken, dus je kunt een quiz per collectie, campagne of landingspagina hebben.",
      },
      {
        title: "Verkoop overal, niet alleen op Shopify",
        body: "Octane AI is exclusief voor Shopify. RevenueHunt werkt native op Shopify en ook op WooCommerce, BigCommerce, Magento, Wix, Squarespace en als zelfstandige gehoste quiz.",
      },
    ],
    bestFor:
      "Octane AI is een redelijke optie voor enterprise-beautymerken die al op Shopify Plus zitten, die diepe personalisatie met AI willen en het budget hebben voor $200/maand en hoger. Als je een gratis abonnement, vaste prijzen, quizzen zonder merklogo of multiplatform-ondersteuning wilt, past RevenueHunt beter.",
    migration:
      "Overstappen van Octane AI gaat snel. Herbouw je quiz in de drag-and-drop-bouwer van RevenueHunt (of genereer hem in 60 seconden met onze AI Copilot), embed hem en koppel Klaviyo. De meeste winkels zijn dezelfde dag actief, en ons supportteam helpt je met de migratie.",
    faqs: [
      {
        question: "Is RevenueHunt goedkoper dan Octane AI?",
        answer:
          "Ja. RevenueHunt heeft een gratis abonnement en betaalde abonnementen vanaf $39/maand met vaste prijzen op basis van antwoorden. Octane AI heeft geen gratis abonnement, begint bij $50/maand met een creditsysteem en rekent $0,10 per credit bij overschrijdingen.",
      },
      {
        question: "Voegt RevenueHunt zijn logo toe aan mijn quiz zoals Octane AI doet?",
        answer:
          "Nee. RevenueHunt voegt nooit een watermerk toe aan Shopify-quizzen, op welk abonnement dan ook. Octane AI houdt zijn logo op je quiz totdat je upgradet naar het Plus-abonnement van $200/maand.",
      },
      {
        question: "Werkt RevenueHunt op andere platforms dan Shopify?",
        answer:
          "Ja. RevenueHunt werkt op Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace en als zelfstandige gehoste quiz. Octane AI is exclusief voor Shopify.",
      },
      {
        question: "Kan ik mijn Octane AI-quiz naar RevenueHunt migreren?",
        answer:
          "Ja. Maak je quiz opnieuw in de bouwer van RevenueHunt of genereer hem met de AI Quiz Copilot, en koppel daarna je e-mailtool. De meeste merchants zijn dezelfde dag actief, en ons team helpt met de migratie.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  typeform: {
    slug: "typeform",
    name: "Typeform",
    category: "Algemene formulier- en enquêtebouwer",
    title: "RevenueHunt vs Typeform voor e-commercequizzen",
    description:
      "RevenueHunt vs Typeform: een Built-for-Shopify-quiz die echte producten aanbeveelt en verkoop genereert, niet alleen een formulier. Gratis abonnement, vanaf $39/mo.",
    h1: "RevenueHunt vs Typeform",
    heroSubtitle:
      "Typeform maakt prachtige formulieren en enquêtes. RevenueHunt maakt productaanbevelingsquizzen die aansluiten op je Shopify-catalogus en antwoorden omzetten in verkoop.",
    intro: [
      "Typeform is een algemene online formulier- en enquêtebouwer. Het is geweldig voor enquêtes, leadgeneratieformulieren en onderzoek, met een conversationeel ontwerp van één vraag tegelijk. Maar het heeft geen native Shopify-integratie, geen synchronisatie van de productcatalogus en geen aanbevelingsmotor. Het verzamelt antwoorden; het beveelt geen producten aan.",
      "RevenueHunt is een Built-for-Shopify-productaanbevelingsquiz die door meer dan 20.000 merken wordt gebruikt (4,9★, meer dan 450 reviews). Het koppelt de antwoorden van elke koper aan de juiste producten uit je live catalogus, toont een gepersonaliseerde resultatenpagina met directe toevoegen aan winkelwagen en legt leads vast in Klaviyo. Een verkoopfunnel, niet alleen een formulier.",
    ],
    rows: [
      { feature: "Gratis abonnement", rh: RH.freePlan, them: "yes (beperkt)" },
      { feature: "Instapprijs betaald", rh: RH.startingPaid, them: "$29/mo" },
      { feature: "Gemaakt voor productaanbevelingen voor e-commerce", rh: RH.ecommerceRecs, them: "no" },
      { feature: "Beveelt echte producten uit de catalogus van je winkel aan", rh: RH.catalogRecs, them: "no" },
      { feature: "Synchronisatie van de productcatalogus", rh: "yes", them: "no" },
      { feature: "Native Shopify-app (Built for Shopify)", rh: RH.shopifyNative, them: "no" },
      { feature: "Resultatenpagina met directe toevoegen aan winkelwagen", rh: "yes", them: "no" },
      { feature: "Quizbouwer met AI (setup in 60 seconden)", rh: RH.aiBuilder, them: "yes (formulieren met AI)" },
      { feature: "Voorwaardelijke / vertakkingslogica", rh: RH.branching, them: "yes (logische sprongen)" },
      { feature: "Analytics van afhaken vraag voor vraag", rh: RH.analytics, them: "yes" },
      { feature: "Integraties met Klaviyo en e-mail / CRM", rh: RH.emailIntegrations, them: "yes" },
      { feature: "Werkt op WooCommerce, BigCommerce, Magento en meer", rh: RH.multiPlatform, them: "no" },
    ],
    whySwitch: [
      {
        title: "Beveelt producten aan, verzamelt niet alleen antwoorden",
        body: "Typeform registreert de antwoorden en daar blijft het bij. De aanbevelingsmotor van RevenueHunt rangschikt de exacte producten, varianten en collecties uit je catalogus op basis van de antwoorden van elke koper en toont ze op een gepersonaliseerde resultatenpagina.",
      },
      {
        title: "Gemaakt voor Shopify en voor e-commerce",
        body: "Typeform heeft geen native Shopify-integratie en geen catalogussynchronisatie. RevenueHunt is een Built-for-Shopify-app met realtime catalogussynchronisatie en automatische lokalisatie van productnamen, -beschrijvingen en -prijzen via Shopify Markets.",
      },
      {
        title: "Een funnel, geen formulier",
        body: "RevenueHunt verandert een quiz in een verkooppad: gepersonaliseerde resultaten, directe toevoegen aan winkelwagen, kortingsblokken en e-mailvastlegging in Klaviyo, zodat de quiz echt inkomsten genereert, niet alleen data.",
      },
      {
        title: "Gemaakt voor merchants",
        body: "Vergeet het bouwen van generieke formulieren. Gebruik kant-en-klare quiztemplates voor huidverzorging, supplementen, mode en meer, of laat de AI Copilot een complete productquiz maken op basis van een beschrijving van je winkel in zo'n 60 seconden.",
      },
    ],
    bestFor:
      "Typeform is uitstekend voor enquêtes, leadgeneratieformulieren, feedback en onderzoek waar je geen producten hoeft aan te bevelen. Als je doel is om Shopify-kopers te helpen het juiste product te vinden en te kopen, is RevenueHunt daar op maat voor gemaakt.",
    migration:
      "Gebruik je al een Typeform-quiz? Herbouw hem in minuten in RevenueHunt, of genereer hem met de AI Copilot, koppel je producten en verbind Klaviyo. Je behoudt het conversationele gevoel en voegt een echte aanbevelingsmotor en toevoegen aan winkelwagen toe.",
    faqs: [
      {
        question: "Kan Typeform producten aanbevelen zoals RevenueHunt?",
        answer:
          "Nee. Typeform is een algemene formulier- en enquêtebouwer zonder synchronisatie van de productcatalogus of aanbevelingsmotor. RevenueHunt koppelt de quizantwoorden aan echte producten uit je winkel en toont ze op een gepersonaliseerde resultatenpagina met toevoegen aan winkelwagen.",
      },
      {
        question: "Integreert RevenueHunt met Shopify en Typeform niet?",
        answer:
          "RevenueHunt is een Built-for-Shopify-app met realtime catalogussynchronisatie en Shopify Markets-lokalisatie. Typeform heeft geen native productaanbevelingsintegratie met Shopify. Het is niet gemaakt voor productontdekking in e-commerce.",
      },
      {
        question: "Is RevenueHunt beter dan Typeform voor een e-commercequiz?",
        answer:
          "Voor productaanbevelingsquizzen wel. RevenueHunt is daar op maat voor gemaakt. Voor algemene enquêtes en leadformulieren is Typeform een goede keuze. Ze lossen verschillende problemen op.",
      },
      {
        question: "Kan ik leads vastleggen en naar Klaviyo sturen?",
        answer:
          "Ja. RevenueHunt legt e-mails vast in de quiz en synchroniseert antwoorden en klantlabels met Klaviyo, Mailchimp, Omnisend, HubSpot en meer, zodat je kunt opvolgen met gepersonaliseerde campagnes.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  zoovu: {
    slug: "zoovu",
    name: "Zoovu",
    category: "Enterprise-platform voor productontdekking",
    title: "RevenueHunt vs Zoovu: een selfservice-alternatief",
    description:
      "RevenueHunt vs Zoovu: een gerichte, selfservice-productquiz voor Shopify, met gratis abonnement en prijzen vanaf $39/mo, geen enterprise-ontdekkingssuite.",
    h1: "RevenueHunt vs Zoovu",
    heroSubtitle:
      "Zoovu is een enterprise-platform voor productontdekking en begeleide verkoop dat via demo wordt verkocht. RevenueHunt is een gerichte productquiz die je vandaag kunt installeren: gratis om te beginnen, transparante prijzen, dezelfde dag actief.",
    intro: [
      "Zoovu is een enterprise-platform voor productontdekking dat AI-zoeken, begeleide verkoop, productaanbevelingen en visuele configurators (CPQ) bundelt voor grote B2C- en B2B-merken met enorme, complexe catalogi. Het is platformneutraal, wordt verkocht via demo's met op maat gemaakte enterprise-prijzen, en heeft geen gratis abonnement of selfservice-aanmelding.",
      "RevenueHunt is een gerichte productaanbevelingsquiz die door meer dan 20.000 merken wordt gebruikt (4,9★, meer dan 450 reviews). In plaats van een enterprise-ontdekkingssuite doet het één ding uitzonderlijk goed, Shopify-kopers begeleiden naar het juiste product, met transparante prijzen, een gratis abonnement en setup op dezelfde dag, zonder dat een verkoopgesprek nodig is.",
    ],
    rows: [
      { feature: "Gratis abonnement", rh: RH.freePlan, them: "no" },
      { feature: "Transparante openbare prijzen", rh: RH.transparentPricing, them: "Op maat / demo aanvragen" },
      { feature: "Instapprijs", rh: RH.startingPaid, them: "Sales-gedreven (enterprise)" },
      { feature: "Selfservice-setup (geen verkoopgesprek)", rh: "yes", them: "no" },
      { feature: "Op maat gemaakt voor productaanbevelingsquizzen", rh: RH.ecommerceRecs, them: "De quiz is een module van een ontdekkingssuite" },
      { feature: "Beveelt echte producten uit je catalogus aan", rh: RH.catalogRecs, them: "yes" },
      { feature: "Native Shopify-app (Built for Shopify)", rh: RH.shopifyNative, them: "Via integratie" },
      { feature: "Quizbouwer met AI (setup in 60 seconden)", rh: RH.aiBuilder, them: "Enterprise-AI-suite" },
      { feature: "Onbeperkte quizzen", rh: RH.unlimitedQuizzes, them: "yes" },
      { feature: "Onbeperkte voorwaardelijke / vertakkingslogica", rh: RH.branching, them: "yes" },
      { feature: "Analytics van afhaken vraag voor vraag", rh: RH.analytics, them: "yes" },
      { feature: "Integraties met Klaviyo en e-mail / CRM", rh: RH.emailIntegrations, them: "yes" },
    ],
    whySwitch: [
      {
        title: "Selfservice, geen verkoopgesprek",
        body: "Zoovu wordt verkocht via demo's en op maat gemaakte enterprise-contracten zonder openbare prijzen. RevenueHunt is installeren en klaar: kies een abonnement, maak je quiz en publiceer. Geen zakelijke inkoop, geen implementatieproject.",
      },
      {
        title: "Actief in minuten, geen uitrol",
        body: "Zoovu is een zware ontdekkingssuite die zoeken, configurators en begeleide verkoop over veel systemen omvat. RevenueHunt is een gerichte quiz-app die de meeste merchants dezelfde dag lanceren, met een AI Copilot die een complete quiz in 60 seconden samenstelt.",
      },
      {
        title: "Prijzen die passen bij een groeiend merk",
        body: "Enterprise-ontdekkingsplatforms hebben prijzen voor wereldwijde catalogi en grote teams. RevenueHunt begint gratis en schaalt per antwoord vanaf $39/maand, op maat van merken op Shopify en Shopify Plus.",
      },
      {
        title: "Built-for-Shopify-eenvoud",
        body: "RevenueHunt is een Built-for-Shopify-app met realtime catalogussynchronisatie en Shopify Markets-lokalisatie, met 4,9★ beoordeeld door meer dan 450 merchants. De diepgang die je nodig hebt voor productontdekking zonder de enterprise-last.",
      },
    ],
    bestFor:
      "Zoovu past bij grote ondernemingen met enorme, complexe catalogi (consumentenelektronica, witgoed, industrieel, B2B) die configurators, CPQ en begeleide verkoop over veel systemen nodig hebben, met het budget en het team voor een enterprise-uitrol. Als je een gerichte, betaalbare, selfservice Shopify-quiz wilt, past RevenueHunt beter.",
    migration:
      "Overstappen van Zoovu is eenvoudig. Maak je quiz in RevenueHunt (of genereer hem met de AI Copilot), embed hem en koppel Klaviyo of je CRM. Geen implementatieproject. De meeste winkels zijn dezelfde dag actief, en support helpt je erbij.",
    faqs: [
      {
        question: "Hoeveel kost RevenueHunt vergeleken met Zoovu?",
        answer:
          "RevenueHunt heeft een gratis abonnement en transparante betaalde abonnementen vanaf $39/maand. Zoovu publiceert geen prijzen. Het is een sales-gedreven enterprise-platform dat na een demo op maat gemaakte prijzen offreert.",
      },
      {
        question: "Is RevenueHunt een enterprise-ontdekkingsplatform zoals Zoovu?",
        answer:
          "Nee, en dat is het punt. Zoovu bundelt AI-zoeken, configurators, CPQ en begeleide verkoop voor grote catalogi. RevenueHunt richt zich op productaanbevelingsquizzen voor Shopify en doet die ene taak uitzonderlijk goed, met selfservice-setup en zonder verkoopgesprek.",
      },
      {
        question: "Doet RevenueHunt begeleide verkoop zoals Zoovu?",
        answer:
          "Ja. Een RevenueHunt-quiz is begeleide verkoop: hij stelt de juiste vragen en koppelt de antwoorden aan de exacte producten uit je catalogus, met een gepersonaliseerde resultatenpagina en directe toevoegen aan winkelwagen, zonder enterprise-prijzen of uitrol.",
      },
      {
        question: "Hoelang duurt de setup vergeleken met Zoovu?",
        answer:
          "De meeste RevenueHunt-merchants lanceren dezelfde dag, en de AI Quiz Copilot kan een complete quiz in zo'n 60 seconden samenstellen. Zoovu is doorgaans een sales-gedreven enterprise-implementatie.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  jebbit: {
    slug: "jebbit",
    name: "Jebbit",
    category: "Enterprise-platform voor declared data (nu onderdeel van BlueConic)",
    title: "RevenueHunt vs Jebbit: een selfservice-alternatief",
    description:
      "RevenueHunt vs Jebbit: een onafhankelijke, selfservice-productquiz voor Shopify, met gratis abonnement vanaf $39/mo. Jebbit is nu onderdeel van het enterprise-CDP van BlueConic.",
    h1: "RevenueHunt vs Jebbit",
    heroSubtitle:
      "Jebbit is nu onderdeel van het enterprise-klantdataplatform van BlueConic, dat via demo wordt verkocht. RevenueHunt is een onafhankelijke, selfservice-productquiz: gratis om te beginnen, native Shopify, dezelfde dag actief.",
    intro: [
      "Jebbit maakt interactieve quizzen, productzoekers en voorkeursflows om declared data (zero-party) te verzamelen. Het is overgenomen en is nu “Experiences by Jebbit”, onderdeel van het klantdataplatform van BlueConic, gericht op enterprise- en midmarket-B2C-merken (L'Oréal, Express, Heineken), platformneutraal en verkocht via demo's zonder openbare prijzen of gratis abonnement.",
      "RevenueHunt is een onafhankelijke productaanbevelingsquiz die door meer dan 20.000 merken wordt gebruikt (4,9★, meer dan 450 reviews). Je hoeft geen CDP te kopen om het te gebruiken: het is een gerichte, Built-for-Shopify-quiz, met transparante prijzen, een gratis abonnement en setup op dezelfde dag, selfservice, zonder verkoopgesprek.",
    ],
    rows: [
      { feature: "Gratis abonnement", rh: RH.freePlan, them: "no" },
      { feature: "Transparante openbare prijzen", rh: RH.transparentPricing, them: "Op maat / demo aanvragen" },
      { feature: "Instapprijs", rh: RH.startingPaid, them: "Sales-gedreven (enterprise)" },
      { feature: "Selfservice-setup (geen verkoopgesprek)", rh: "yes", them: "no" },
      { feature: "Onafhankelijk product (geen platform hoeven kopen)", rh: "yes", them: "Nu onderdeel van het CDP van BlueConic" },
      { feature: "Beveelt echte producten uit je catalogus aan", rh: RH.catalogRecs, them: "yes" },
      { feature: "Native Shopify-app (Built for Shopify)", rh: RH.shopifyNative, them: "Via integratie" },
      { feature: "Quizbouwer met AI (setup in 60 seconden)", rh: RH.aiBuilder, them: "no" },
      { feature: "Onbeperkte quizzen", rh: RH.unlimitedQuizzes, them: "yes" },
      { feature: "Onbeperkte voorwaardelijke / vertakkingslogica", rh: RH.branching, them: "yes" },
      { feature: "Analytics van afhaken vraag voor vraag", rh: RH.analytics, them: "yes" },
      { feature: "Legt zero-party / declared data vast", rh: "yes", them: "yes" },
    ],
    whySwitch: [
      {
        title: "Een onafhankelijke quiz, geen platformaankoop",
        body: "Jebbit is nu “Experiences by Jebbit” binnen het CDP van BlueConic. RevenueHunt is een gerichte app die je op zichzelf kunt gebruiken. Geen klantdataplatform om te kopen of te implementeren.",
      },
      {
        title: "Selfservice, geen verkoopgesprek",
        body: "Jebbit/BlueConic wordt verkocht via demo's en op maat gemaakte enterprise-contracten zonder openbare prijzen. RevenueHunt is installeren en klaar, met een gratis abonnement en transparante prijzen vanaf $39/maand.",
      },
      {
        title: "Gemaakt voor Shopify, dezelfde dag actief",
        body: "RevenueHunt is een Built-for-Shopify-app met realtime catalogussynchronisatie en directe toevoegen aan winkelwagen, en een AI Copilot die een complete quiz in 60 seconden samenstelt. De meeste merchants lanceren dezelfde dag.",
      },
      {
        title: "Je blijft eigenaar van je zero-party data",
        body: "Elk quizantwoord is zero-party data die je kopers vrijwillig geven. RevenueHunt synchroniseert antwoorden en klantlabels met Klaviyo, Mailchimp, Omnisend, HubSpot en meer. Je hebt geen CDP nodig om ze aan het werk te zetten.",
      },
    ],
    bestFor:
      "Jebbit past, als onderdeel van BlueConic, bij enterprise-B2C-merken die declared-data-ervaringen willen die nauw verbonden zijn met een compleet klantdataplatform en geactiveerd over veel kanalen, met het budget voor een CDP. Als je een onafhankelijke, betaalbare, selfservice Shopify-quiz wilt, past RevenueHunt beter.",
    migration:
      "Weg van Jebbit, of BlueConic evalueren, is eenvoudig. Maak je quiz in RevenueHunt (of genereer hem met de AI Copilot), embed hem en koppel Klaviyo of je CRM. De meeste winkels zijn dezelfde dag actief, en je zero-party data blijven naar je e-mailtools stromen.",
    faqs: [
      {
        question: "Is Jebbit nog steeds op zichzelf beschikbaar?",
        answer:
          "Jebbit is nu “Experiences by Jebbit”, onderdeel van het klantdataplatform van BlueConic. RevenueHunt is een onafhankelijke productquiz die je kunt gebruiken zonder een CDP te kopen: selfservice, met een gratis abonnement vanaf $39/maand.",
      },
      {
        question: "Hoeveel kost RevenueHunt vergeleken met Jebbit?",
        answer:
          "RevenueHunt heeft een gratis abonnement en transparante betaalde abonnementen vanaf $39/maand. Jebbit/BlueConic publiceert geen prijzen. Het is een sales-gedreven enterprise-platform dat na een demo op maat gemaakte prijzen offreert.",
      },
      {
        question: "Verzamelt RevenueHunt zero-party (declared) data zoals Jebbit?",
        answer:
          "Ja. Elk quizantwoord is zero-party data die je kopers vrijwillig geven. RevenueHunt synchroniseert antwoorden en klantlabels met Klaviyo, Mailchimp, Omnisend, HubSpot en meer voor segmentatie en gepersonaliseerde marketing.",
      },
      {
        question: "Hoelang duurt de setup vergeleken met Jebbit?",
        answer:
          "De meeste RevenueHunt-merchants lanceren dezelfde dag, en de AI Quiz Copilot kan een complete quiz in zo'n 60 seconden samenstellen. Jebbit/BlueConic is doorgaans een sales-gedreven enterprise-implementatie.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  nosto: {
    slug: "nosto",
    name: "Nosto",
    category: "Enterprise-platform voor personalisatie",
    title: "RevenueHunt vs Nosto: een selfservice-alternatief",
    description:
      "RevenueHunt vs Nosto: een gerichte, selfservice-productquiz die zero-party data vastlegt, met gratis abonnement vanaf $39/mo, geen enterprise-personalisatiesuite.",
    h1: "RevenueHunt vs Nosto",
    heroSubtitle:
      "Nosto is een enterprise-suite voor personalisatie, zoeken en merchandising die via demo wordt verkocht. RevenueHunt is een gerichte zero-party-productquiz die je vandaag kunt installeren: gratis om te beginnen, dezelfde dag actief.",
    intro: [
      "Nosto is een Commerce Experience Platform dat AI-productaanbevelingen, gepersonaliseerd on-site zoeken, merchandising en contentpersonalisatie bundelt voor enterprise- en midmarket-merken. Het is platformneutraal, wordt verkocht via demo's met op maat gemaakte enterprise-prijzen, en heeft geen gratis abonnement of selfservice-aanmelding. De personalisatie is vooral gebaseerd op gedragsdata in plaats van quizzen.",
      "RevenueHunt is een gerichte productaanbevelingsquiz die door meer dan 20.000 merken wordt gebruikt (4,9★, meer dan 450 reviews). In plaats van een enterprise-suite begeleidt het kopers naar het juiste product door het hun direct te vragen, en legt zero-party data vast waar je eigenaar van bent, met transparante prijzen, een gratis abonnement en setup op dezelfde dag, zonder dat een verkoopgesprek nodig is.",
    ],
    rows: [
      { feature: "Gratis abonnement", rh: RH.freePlan, them: "no" },
      { feature: "Transparante openbare prijzen", rh: RH.transparentPricing, them: "Op maat / demo aanvragen" },
      { feature: "Instapprijs", rh: RH.startingPaid, them: "Sales-gedreven (enterprise)" },
      { feature: "Selfservice-setup (geen verkoopgesprek)", rh: "yes", them: "no" },
      { feature: "Op maat gemaakt voor productaanbevelingsquizzen", rh: RH.ecommerceRecs, them: "Personalisatiesuite, niet quiz-gedreven" },
      { feature: "Legt zero-party data vast (kopers vertellen het je direct)", rh: "yes", them: "Vooral gedragsmatig / voorspellend" },
      { feature: "Beveelt echte producten uit je catalogus aan", rh: RH.catalogRecs, them: "yes" },
      { feature: "Native Shopify-app (Built for Shopify)", rh: RH.shopifyNative, them: "yes" },
      { feature: "Quizbouwer met AI (setup in 60 seconden)", rh: RH.aiBuilder, them: "no" },
      { feature: "Onbeperkte quizzen", rh: RH.unlimitedQuizzes, them: "Is geen quiztool" },
      { feature: "Analytics van afhaken vraag voor vraag", rh: RH.analytics, them: "yes" },
      { feature: "Integraties met Klaviyo en e-mail / CRM", rh: RH.emailIntegrations, them: "yes" },
    ],
    whySwitch: [
      {
        title: "Selfservice, geen verkoopgesprek",
        body: "Nosto wordt verkocht via demo's en op maat gemaakte enterprise-contracten zonder openbare prijzen. RevenueHunt is installeren en klaar: kies een abonnement, maak je quiz en publiceer, met een gratis abonnement en transparante prijzen vanaf $39/maand.",
      },
      {
        title: "Zero-party data, niet alleen gedragstracking",
        body: "Nosto personaliseert vooral op basis van gedrags- en voorspellende signalen. RevenueHunt vraagt kopers direct via een quiz, en legt zero-party data vast waar je eigenaar van bent en die je kunt synchroniseren met Klaviyo, Mailchimp, Omnisend en meer.",
      },
      {
        title: "Actief in minuten, geen uitrol",
        body: "Nosto is een suite met meerdere modules (aanbevelingen, zoeken, merchandising) die normaal onboarding vereist. RevenueHunt is een gerichte quiz-app die de meeste merchants dezelfde dag lanceren, met een AI Copilot die een complete quiz in 60 seconden samenstelt.",
      },
      {
        title: "Prijzen die passen bij een groeiend merk",
        body: "Enterprise-personalisatiesuites hebben prijzen voor grote teams en catalogi. RevenueHunt begint gratis en schaalt per antwoord vanaf $39/maand, op maat van merken op Shopify en Shopify Plus.",
      },
    ],
    bestFor:
      "Nosto past bij enterprise- en midmarket-merken die een complete suite voor gedragspersonalisatie, zoeken en merchandising over meerdere storefronts willen, met het budget en het team voor een enterprise-uitrol. Als je een gerichte, betaalbare, selfservice-productquiz wilt die zero-party data vastlegt, past RevenueHunt beter.",
    migration:
      "Overstappen van Nosto is eenvoudig. Maak je quiz in RevenueHunt (of genereer hem met de AI Copilot), embed hem en koppel Klaviyo of je CRM. Geen implementatieproject. De meeste winkels zijn dezelfde dag actief, en je zero-party data stromen rechtstreeks naar je e-mailtools.",
    faqs: [
      {
        question: "Hoeveel kost RevenueHunt vergeleken met Nosto?",
        answer:
          "RevenueHunt heeft een gratis abonnement en transparante betaalde abonnementen vanaf $39/maand. Nosto publiceert geen prijzen. Het is een sales-gedreven enterprise-platform dat na een demo op maat gemaakte prijzen offreert.",
      },
      {
        question: "Is RevenueHunt een personalisatiesuite zoals Nosto?",
        answer:
          "Nee, en dat is het punt. Nosto bundelt gedragsaanbevelingen, on-site zoeken en merchandising. RevenueHunt richt zich op productaanbevelingsquizzen die zero-party data vastleggen, met selfservice-setup en zonder verkoopgesprek.",
      },
      {
        question: "Gebruikt RevenueHunt zero-party data in plaats van gedragstracking?",
        answer:
          "Ja. RevenueHunt begeleidt kopers door een quiz en zij vertellen je hun voorkeuren, doelen en beperkingen direct: zero-party data waar je eigenaar van bent, in plaats van de intentie af te leiden uit gedrag en cookies.",
      },
      {
        question: "Hoelang duurt de setup vergeleken met Nosto?",
        answer:
          "De meeste RevenueHunt-merchants lanceren dezelfde dag, en de AI Quiz Copilot kan een complete quiz in zo'n 60 seconden samenstellen. Nosto is doorgaans een sales-gedreven enterprise-implementatie.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  tolstoy: {
    slug: "tolstoy",
    name: "Tolstoy",
    category: "Platform voor shoppable video en quiz",
    title: "RevenueHunt vs Tolstoy: een quiz-gericht alternatief",
    description:
      "RevenueHunt vs Tolstoy: een op maat gemaakte productquiz met een echte aanbevelingsmotor en zero-party data, tegenover een videoplatform met een quizfunctie.",
    h1: "RevenueHunt vs Tolstoy",
    heroSubtitle:
      "Tolstoy is een shoppable-videoplatform met een quizfunctie. RevenueHunt is een op maat gemaakte productaanbevelingsquiz, met een echte aanbevelingsmotor en zero-party data.",
    intro: [
      "Tolstoy is een AI-commerceplatform gebouwd rond shoppable video, AI-gegenereerde media en een AI-shoppingagent, met prijzen op basis van impressies vanaf $19/maand. Het is een solide tool gericht op video. Maar de productquiz is een secundaire functie naast de video-ervaring.",
      "RevenueHunt is een productaanbevelingsquiz die door meer dan 20.000 merken wordt gebruikt (4,9★, meer dan 450 reviews). Het is quiz-gericht: een toegewijde aanbevelingsmotor koppelt de antwoorden van elke koper aan de juiste producten uit je catalogus, legt zero-party data vast en converteert op een gepersonaliseerde resultatenpagina, op Shopify, WooCommerce, BigCommerce, Magento, Wix en meer.",
    ],
    rows: [
      { feature: "Gratis abonnement", rh: RH.freePlan, them: "yes (beperkt)" },
      { feature: "Instapprijs betaald", rh: RH.startingPaid, them: "$19/mo" },
      { feature: "Prijsmodel", rh: "Vast tarief, per antwoord", them: "Per impressie + AI-credits" },
      { feature: "Op maat gemaakt voor productaanbevelingsquizzen", rh: RH.ecommerceRecs, them: "De quiz is een secundaire functie (videogericht)" },
      { feature: "Toegewijde aanbevelingsmotor (upvote en uitsluiting, resultatenpagina)", rh: "yes", them: "Aankoop gedreven door video" },
      { feature: "Beveelt echte producten uit je catalogus aan", rh: RH.catalogRecs, them: "yes" },
      { feature: "Legt zero-party data vast (kopers vertellen het je direct)", rh: "yes", them: "Vooral data van video-interactie" },
      { feature: "Native Shopify-app (Built for Shopify)", rh: RH.shopifyNative, them: "yes" },
      { feature: "Werkt op WooCommerce, BigCommerce, Magento, Wix en meer", rh: RH.multiPlatform, them: "no" },
      { feature: "Quizbouwer met AI (setup in 60 seconden)", rh: RH.aiBuilder, them: "Videogerichte AI" },
      { feature: "Analytics van afhaken vraag voor vraag", rh: RH.analytics, them: "yes" },
      { feature: "Integraties met Klaviyo en e-mail / CRM", rh: RH.emailIntegrations, them: "yes" },
    ],
    whySwitch: [
      {
        title: "Een quiz-gerichte tool, geen video-aanvulling",
        body: "Tolstoy is een shoppable-videoplatform waar de quiz een secundaire functie is. RevenueHunt is op maat gemaakt voor productaanbevelingsquizzen, met een toegewijde aanbevelingsmotor en een resultatenpagina gericht op conversie.",
      },
      {
        title: "Een echte aanbevelingsmotor",
        body: "RevenueHunt rangschikt de exacte producten, varianten en collecties uit je live catalogus met een model van upvote en uitsluiting, met voorwaardelijke resultatenblokken en directe toevoegen aan winkelwagen. Een diepgang die de quiz van een videotool niet evenaart.",
      },
      {
        title: "Zero-party data waar je eigenaar van bent",
        body: "RevenueHunt legt vast wat kopers je vertellen (voorkeuren, doelen, beperkingen) en synchroniseert het met Klaviyo, Mailchimp, Omnisend en meer voor segmentatie. De kracht van Tolstoy is video-interactie, niet de gestructureerde data van een quiz.",
      },
      {
        title: "Verkoop overal, bewezen op schaal",
        body: "RevenueHunt werkt native op Shopify en ook op WooCommerce, BigCommerce, Magento, Wix, Squarespace en zelfstandig, met het vertrouwen van meer dan 20.000 merken en 4,9★ uit meer dan 450 reviews.",
      },
    ],
    bestFor:
      "Tolstoy is een goede keuze als je strategie videogedreven is (shoppable video, UGC, TikTok Shop) en een quiz nice-to-have maar niet essentieel is. Als je een toegewijde productaanbevelingsquiz wilt met een echte aanbevelingsmotor en zero-party data, past RevenueHunt beter.",
    migration:
      "Als je een quiz binnen Tolstoy gebruikte, gaat overstappen snel. Herbouw hem in de bouwer van RevenueHunt (of genereer hem in 60 seconden met onze AI Copilot), embed hem en koppel Klaviyo. De meeste winkels zijn dezelfde dag actief, en ons supportteam helpt je met de migratie.",
    faqs: [
      {
        question: "Is RevenueHunt beter dan Tolstoy voor een productquiz?",
        answer:
          "Voor een toegewijde productaanbevelingsquiz wel. RevenueHunt is daar op maat voor gemaakt, met een echte aanbevelingsmotor en zero-party data. Tolstoy is videogericht, met de quiz als secundaire functie. Voor shoppable video specifiek is Tolstoy op maat gemaakt.",
      },
      {
        question: "Maakt Tolstoy productaanbevelingsquizzen?",
        answer:
          "Ja, als secundaire functie naast zijn shoppable video. RevenueHunt is quiz-gericht: het is gebouwd rond de quiz en zijn aanbevelingsmotor, resultatenpagina en zero-party-datavastlegging.",
      },
      {
        question: "Ondersteunt RevenueHunt ook video?",
        answer:
          "Ja. Je kunt video toevoegen aan de quizvragen en aan de gepersonaliseerde resultatenpagina. RevenueHunt is quiz-gericht in plaats van een videoplatform, dus de video ondersteunt de quiz en niet andersom.",
      },
      {
        question: "Kan ik zero-party data vastleggen en naar Klaviyo sturen?",
        answer:
          "Ja. RevenueHunt legt de quizantwoorden vast als zero-party data en synchroniseert antwoorden en klantlabels met Klaviyo, Mailchimp, Omnisend, HubSpot en meer voor segmentatie en gepersonaliseerde marketing.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },
};
