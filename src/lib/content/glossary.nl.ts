import type { GlossaryTerm, GlossaryLink } from "../glossary";

const VERIFIED = "2026-06-07";

export const GLOSSARY_NL: Record<string, GlossaryTerm> = {
  "conversational-commerce": {
    slug: "conversational-commerce",
    term: "Conversational commerce",
    chip: "Concept",
    title: "Wat is conversational commerce?",
    description:
      "Conversational commerce verkoopt via een tweerichtingsdialoog in plaats van een statisch raster. Dit is wat het omvat, waarom het werkt en hoe een quiz het bereikt.",
    h1: "Wat is conversational commerce?",
    shortAnswer:
      "Conversational commerce draait om verkopen via een interactief gesprek in twee richtingen in plaats van een statisch productraster. Kopers beantwoorden vragen, de winkel reageert met gepersonaliseerde aanbevelingen, net zoals een goede verkoper in een fysieke winkel doet.",
    intro: [
      "In een fysieke winkel vraagt een goede verkoper wat je nodig hebt, luistert en wijst je het juiste product aan. Online slaan de meeste winkels die stap over en zetten kopers voor een raster met alle producten die ze verkopen. Conversational commerce zet de dialoog weer centraal.",
    ],
    sections: [
      {
        heading: "Wat telt als conversational commerce",
        body: [
          "De categorie is breed. Hij omvat chatbots, messaging-apps, livechat, spraakassistenten en productaanbevelingsquizzen. Wat ze delen is een heen en weer: de koper levert informatie aan en de winkel reageert met iets specifiekers dan een generieke cataloguspagina.",
          "De vormen verschillen in hoeveel je ze beheert. Een chatbot met vrije tekst kan overal heen gaan waar de koper typt, wat krachtig en onvoorspelbaar is. Een quiz is gestructureerde conversational commerce: elke vraag en elk pad heb jij ontworpen, dus het gesprek blijft trouw aan je merk en eindigt altijd bij een echt product.",
        ],
      },
      {
        heading: "Waarom het beter converteert dan een raster",
        body: [
          "Een categoriepagina vraagt de koper het werk te doen: elke optie lezen, specificaties vergelijken en raden welke past. Dat is verlamming door analyse, en daar gaan veel winkelwagens al verloren voordat ze beginnen.",
          "Een gesprek doet het werk voor ze. Het brengt een grote catalogus terug tot een korte, onderbouwde aanbeveling, en legt het waarom uit. Kopers die een helder antwoord krijgen, voegen toe aan winkelwagen in plaats van weg te gaan om elders te vergelijken.",
          "Het legt ook voorkeuren vast. Elk antwoord dat een koper geeft is informatie die je kunt gebruiken om e-mail te segmenteren, de opvolging te personaliseren en later beter te merchandisen.",
        ],
      },
      {
        heading: "Conversational commerce tegenover een chatbot",
        body: [
          "Vaak worden beide termen als synoniemen gebruikt, maar een chatbot is een tool binnen de categorie, niet de hele categorie. Een chatbot op basis van een groot taalmodel kan open vragen beantwoorden, maar kan ook de intentie verkeerd interpreteren of iets aanbevelen dat je niet op voorraad hebt.",
          "Een productaanbevelingsquiz ruilt vrijheid in voor betrouwbaarheid. Hij kan niet afdwalen van het onderwerp, beveelt altijd aan uit je live catalogus en werkt voor elke koper hetzelfde. Voor de meeste winkels is die voorspelbaarheid meer waard dan een vrije chat.",
        ],
      },
    ],
    withRevenueHunt: [
      "Een RevenueHunt-quiz is de meest betrouwbare vorm van conversational commerce die een winkel kan gebruiken. Jij ontwerpt elke vraag en elk pad, de resultatenpagina beveelt altijd echte producten en varianten uit je catalogus aan, en elk antwoord wordt vastgelegd als zero-party data die je kunt synchroniseren met Klaviyo en andere tools.",
      "Het werkt op Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace en als zelfstandige gehoste quiz, en is gratis om te beginnen met 100 antwoorden per maand.",
    ],
    faqs: [
      {
        question: "Geldt een productquiz als conversational commerce?",
        answer:
          "Ja. Een quiz is een gestructureerde vorm van conversational commerce: de koper beantwoordt vragen en de winkel reageert met gepersonaliseerde aanbevelingen, hetzelfde dialoogmodel als een chatbot maar met elk pad vooraf ontworpen.",
      },
      {
        question: "Wat is het verschil tussen conversational commerce en een chatbot?",
        answer:
          "Een chatbot is een tool binnen conversational commerce. Conversational commerce is het bredere idee van verkopen via een gesprek in twee richtingen, dat ook quizzen, livechat, messaging en spraak omvat.",
      },
      {
        question: "Werkt conversational commerce voor kleine winkels?",
        answer:
          "Ja. Een productaanbevelingsquiz is de manier met de minste inspanning om te beginnen. Hij heeft geen verkeershistorie nodig om te werken, draait op een gratis abonnement en kan dezelfde dag live staan.",
      },
    ],
    related: [
      { label: "Productaanbevelingsmotor", href: "/glossary/product-recommendation-engine/" },
      { label: "Shoppable quiz", href: "/glossary/shoppable-quiz/" },
      { label: "Begeleide-verkoopquiz", href: "/guided-selling-quiz/" },
      { label: "Hoe het werkt", href: "/how-it-works/" },
      { label: "Quiztemplates", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "product-recommendation-engine": {
    slug: "product-recommendation-engine",
    term: "Productaanbevelingsmotor",
    chip: "Concept",
    title: "Wat is een productaanbevelingsmotor?",
    description:
      "Een productaanbevelingsmotor beslist welke producten aan elke koper worden getoond. De types, het cold-startprobleem en hoe een quizgebaseerde motor werkt.",
    h1: "Wat is een productaanbevelingsmotor?",
    shortAnswer:
      "Een productaanbevelingsmotor is de software die beslist welke producten aan een specifieke koper worden getoond. Hij neemt invoer (browsegedrag, aankoopgeschiedenis of opgegeven voorkeuren) en ordent je catalogus om de beste matches naar boven te halen.",
    intro: [
      "Elke winkel die een koper iets anders toont dan de complete catalogus, gebruikt een aanbevelingsmotor van een of ander type, al is het maar een handmatige bestsellers-sectie. De interessante vraag is wat de motor gebruikt om te beslissen.",
    ],
    sections: [
      {
        heading: "De belangrijkste types",
        body: [
          "Gedragsmotoren gebruiken wat kopers doen: bekeken pagina's, aangeklikte artikelen, gekochte dingen. Ze drijven de klassieke secties aanbevolen voor jou en klanten kochten ook aan. Ze leunen op collaborative filtering, dat veel verkeer en historie nodig heeft om goed te werken.",
          "Op regels of attributen gebaseerde motoren gebruiken productdata en logica die de merchandiser instelt: toon accessoires bij deze categorie, haal de artikelen op voorraad eerst naar boven. Ze zijn voorspelbaar maar statisch.",
          "Op voorkeuren of quiz gebaseerde motoren gebruiken wat de koper je direct vertelt. De koper beantwoordt een paar vragen en de motor ordent de catalogus tegen die antwoorden. Dit is het meest directe intentiesignaal, omdat het vrijwillig is in plaats van afgeleid.",
        ],
      },
      {
        heading: "Het cold-startprobleem",
        body: [
          "Gedragsmotoren hebben een bekende zwakte: ze falen bij nieuwe bezoekers en nieuwe producten. Een koper die voor het eerst aankomt, heeft geen historie, dus de motor heeft niets om op te baseren en valt terug op generieke bestsellers. Een net toegevoegd product heeft nog geen clicks, dus het wordt zelden aanbevolen.",
          "Een op voorkeuren gebaseerde motor heeft geen cold start. Een volledig nieuwe bezoeker die drie vragen beantwoordt, geeft de motor alles wat hij nodig heeft bij het eerste bezoek, zonder tracking en zonder te wachten tot de data zich opstapelen.",
        ],
      },
      {
        heading: "Hoe een quizmotor producten ordent",
        body: [
          "Elk antwoord draagt een gewicht. Een must-have-antwoord kan stemmen vóór de producten die matchen en tegen de producten die niet matchen, terwijl een harde beperking zoals een allergie of een incompatibele specificatie producten volledig kan uitsluiten, hoe goed ze verder ook scoorden.",
          "Het resultaat is een korte, geordende en onderbouwde lijst in plaats van één enkele gok. Goede motoren reserveren ook een plek voor elke rol van een set, dus de output kan een routine, een stack of een compleet pack zijn in plaats van één enkel product.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt is een op voorkeuren gebaseerde productaanbevelingsmotor, aangedreven door een quiz. Antwoorden stemmen voor, stemmen tegen of sluiten producten uit je live catalogus uit, de recommendation slots reserveren een plek voor elke rol van een set, en het werkt voor een bezoeker die voor het eerst aankomt zonder enige historie.",
      "Omdat de invoer vrijwillig is, dienen dezelfde antwoorden tegelijk als zero-party data waar je eigenaar van bent en die je nog lang nadat de koper weg is kunt gebruiken om te segmenteren.",
    ],
    faqs: [
      {
        question: "Wat is het verschil tussen een gedragsaanbevelingsmotor en een quizgebaseerde?",
        answer:
          "Een gedragsmotor leidt de intentie af uit clicks en aankoopgeschiedenis, wat verkeer nodig heeft en faalt bij nieuwe bezoekers. Een quizgebaseerde motor gebruikt de voorkeuren die de koper direct opgeeft, dus hij werkt bij het eerste bezoek zonder historie.",
      },
      {
        question: "Heb ik veel verkeer nodig om een aanbevelingsmotor te laten werken?",
        answer:
          "Niet voor een quizgebaseerde motor. Omdat de koper je zijn voorkeuren vertelt, werkt hij vanaf het eerste bezoek. Gedragsmotoren daarentegen hebben aanzienlijk verkeer en aankoopgeschiedenis nodig voordat hun aanbevelingen betrouwbaar zijn.",
      },
      {
        question: "Kan een aanbevelingsmotor meer dan één product voorstellen?",
        answer:
          "Ja. Met de recommendation slots reserveert de motor een plek voor elke rol van een set en vult elk met de beste match, en geeft zo een complete routine, stack of pack terug in plaats van één enkel artikel.",
      },
    ],
    related: [
      { label: "Gepersonaliseerde productaanbevelingen", href: "/glossary/personalized-product-recommendations/" },
      { label: "Conversational commerce", href: "/glossary/conversational-commerce/" },
      { label: "Productzoeker-quiz", href: "/product-finder-quiz/" },
      { label: "Hoe het werkt", href: "/how-it-works/" },
      { label: "Quiz voor Shopify", href: "/product-recommendation-quiz-shopify/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "shoppable-quiz": {
    slug: "shoppable-quiz",
    term: "Shoppable quiz",
    chip: "Type quiz",
    title: "Wat is een shoppable quiz?",
    description:
      "Een shoppable quiz eindigt op een resultatenpagina waar kopers de aanbevolen producten aan hun winkelwagen toevoegen. Dit is wat een quiz shoppable maakt en waar winkels hem gebruiken.",
    h1: "Wat is een shoppable quiz?",
    shortAnswer:
      "Een shoppable quiz is een interactieve quiz die eindigt op een gepersonaliseerde resultatenpagina waar kopers de aanbevolen producten direct aan hun winkelwagen kunnen toevoegen. De quiz maakt deel uit van de winkel, het is geen enquête die apart leeft.",
    intro: [
      "Veel merken gebruiken quizzen. Het verschil tussen een quiz die inkomsten genereert en een die alleen antwoorden verzamelt, zit hem erin of een koper aan het eind kan kopen zonder te hoeven weggaan.",
    ],
    sections: [
      {
        heading: "Wat een quiz shoppable maakt",
        body: [
          "Drie dingen. Ten eerste beveelt hij echte producten en varianten uit je live catalogus aan, geen opvultekst. Ten tweede heeft de resultatenpagina de optie om aan de winkelwagen toe te voegen, zodat een koper de aanbeveling in één stap kan kopen. Ten derde kan hij de aanbieding tot het eind doorvoeren: een korting gekoppeld aan de antwoorden, een pack toegevoegd als set, een extra verkoop op de resultatenpagina.",
          "Zonder dat heb je een persoonlijkheidsquiz of een enquête. Die kan leuk zijn en e-mails verzamelen, maar sluit de verkoop die hij net opende niet.",
        ],
      },
      {
        heading: "Shoppable quiz tegenover een enquête of een persoonlijkheidsquiz",
        body: [
          "Een enquête verzamelt antwoorden en eindigt. Een persoonlijkheidsquiz vermaakt en eindigt. Een shoppable quiz gebruikt de antwoorden om producten aan te bevelen en laat de koper vervolgens meteen handelen naar de aanbeveling, terwijl zijn intentie het hoogst is.",
          "Die laatste stap is wat ertoe doet. Het moment net nadat een koper met vertrouwen een antwoord krijgt, is het moment waarop hij het waarschijnlijkst koopt. Een shoppable quiz vangt dat moment in plaats van hem terug te sturen naar de catalogus om van voren af aan te beginnen.",
        ],
      },
      {
        heading: "Waar shoppable quizzen worden gebruikt",
        body: [
          "Overal waar kiezen lastig blijkt: skincare-routines, supplementenstacks, foundationtinten, maat en pasvorm, cadeausets, koffieblends. Hoe lastiger het is om vanuit een raster te kiezen, hoe meer een shoppable quiz zijn plek verdient.",
          "Ze werken als popup, als ingesloten blok op een pagina of als een ervaring op volledig scherm, en dezelfde quiz kan tegelijk betaald verkeer, e-mail en on-site ontdekking voeden.",
        ],
      },
    ],
    withRevenueHunt: [
      "Elke RevenueHunt-quiz is standaard shoppable. De resultatenpagina haalt echte producten en varianten uit je catalogus, ondersteunt het toevoegen aan winkelwagen van één enkel artikel of een hele set, en kan een kortingscode of een contentblok tonen op basis van de antwoorden van de koper.",
      "Je kunt er een bouwen vanuit een template of je winkel beschrijven aan de AI Quiz Copilot en een complete quiz in zo'n 60 seconden in elkaar laten zetten, en hem daarna publiceren als popup, ingesloten of landingspagina.",
    ],
    faqs: [
      {
        question: "Wat is het verschil tussen een shoppable quiz en een persoonlijkheidsquiz?",
        answer:
          "Een persoonlijkheidsquiz vermaakt en eindigt. Een shoppable quiz beveelt echte producten uit je catalogus aan en laat kopers ze op de resultatenpagina aan de winkelwagen toevoegen, dus hij sluit de verkoop in plaats van alleen antwoorden te verzamelen.",
      },
      {
        question: "Kunnen kopers producten vanuit de quiz aan de winkelwagen toevoegen?",
        answer:
          "Ja. Dat is wat hem shoppable maakt. De resultatenpagina toont de matchende producten en varianten met de directe optie om aan de winkelwagen toe te voegen, voor één enkel artikel of een hele set.",
      },
      {
        question: "Kan een shoppable quiz een korting tonen?",
        answer:
          "Ja. De resultatenpagina ondersteunt kortingscode- en contentblokken die je kunt koppelen aan specifieke antwoorden, zodat de juiste kopers de juiste aanbieding zien op het beslismoment.",
      },
    ],
    related: [
      { label: "Quizfunnel", href: "/glossary/quiz-funnel/" },
      { label: "Conversational commerce", href: "/glossary/conversational-commerce/" },
      { label: "Packbouwer-quiz", href: "/solutions/bundle-builder/" },
      { label: "Quiztemplates", href: "/templates/" },
      { label: "Quiz-ROI-calculator", href: "/quiz-roi-calculator/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "quiz-funnel": {
    slug: "quiz-funnel",
    term: "Quizfunnel",
    chip: "Marketing",
    title: "Wat is een quizfunnel?",
    description:
      "Een quizfunnel gebruikt een quiz als instappunt om verkeer om te zetten in gekwalificeerde, geabonneerde leads. Dit zijn de fasen en waarom hij een simpele opt-in verslaat.",
    h1: "Wat is een quizfunnel?",
    shortAnswer:
      "Een quizfunnel is een marketingfunnel die een quiz als instappunt gebruikt. Een koper doet een quiz, krijgt een aanbeveling, geeft zijn e-mail en komt in een gesegmenteerde opvolgsequentie. Hij zet anoniem verkeer om in een gekwalificeerde lead met een bekende voorkeur.",
    intro: [
      "De meeste e-commercefunnels beginnen met een kortingspopup en één enkel e-mailveld. Een quizfunnel vervangt dat door iets wat de koper echt wil: een gepersonaliseerd antwoord.",
    ],
    sections: [
      {
        heading: "De fasen van een quizfunnel",
        body: [
          "Verkeer komt op de quiz, vanuit een advertentie, een e-mail of een link op je site. De koper beantwoordt een paar vragen. Hij komt op een resultatenpagina met een gepersonaliseerde aanbeveling. Om het resultaat te zien of op te slaan, geeft hij zijn e-mail. Die e-mail komt in een gesegmenteerde opvolgsequentie op basis van wat hij je heeft verteld.",
          "Het verschil met een normale funnel zit hem in wat je aan het eind weet. In plaats van een anonieme abonnee heb je een contact met labels voor zijn doelen, voorkeuren en de producten waarmee hij matchte.",
        ],
      },
      {
        heading: "Waarom hij een generieke opt-in verslaat",
        body: [
          "Een simpele nieuwsbriefaanmelding biedt niets specifieks, dus converteert een klein deel van het verkeer en geeft je geen informatie buiten een e-mailadres. Een quizfunnel biedt een gepersonaliseerde aanbeveling als reden om je aan te melden, wat een veel sterkere ruil is.",
          "Hij verbetert ook elke latere e-mail. Een abonnee waarvan je weet dat hij zoekt voor de droge en gevoelige huid krijgt andere berichten dan een die een cadeau koopt. Die segmentatie wordt tijdens de quiz opgebouwd, niet achteraf toegevoegd.",
        ],
      },
      {
        heading: "Quizfunnels en betaald verkeer",
        body: [
          "Quizfunnels zijn populair voor betaalde acquisitie omdat ze in één stap kwalificeren en vastleggen. Koud verkeer dat van een productpagina zou weggaan, voltooit vaak een quiz, en het vastleggen van de e-mail betekent dat je de lead behoudt ook al koopt hij niet bij het eerste bezoek.",
          "Een quizfunnel is een specifieke vorm van funnel. Voor het bredere plaatje van hoe e-commercefunnels worden opgebouwd, raadpleeg de gids met voorbeelden van funnels.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt is gemaakt om de complete quizfunnel te draaien. Het legt de e-mail vast op het punt van de hoogste intentie, synchroniseert antwoorden en klantlabels met Klaviyo, Mailchimp, Omnisend, HubSpot en meer, en toont het afhaken vraag voor vraag zodat je de lekken kunt dichten.",
      "De aanbeveling op de resultatenpagina is de leadmagneet, dus wat de e-mail wint is ook wat de verkoop aandrijft.",
    ],
    faqs: [
      {
        question: "Waarin verschilt een quizfunnel van een normale verkoopfunnel?",
        answer:
          "Een quizfunnel gebruikt een quiz als instappunt, dus hij kwalificeert en segmenteert de leads terwijl hij ze vastlegt. Een normale funnel begint meestal met een generieke opt-in die een e-mail vastlegt maar geen voorkeursdata.",
      },
      {
        question: "Werkt een quizfunnel voor betaalde advertenties?",
        answer:
          "Ja. Quizfunnels zijn gangbaar voor betaalde acquisitie omdat ze koud verkeer kwalificeren en de e-mail in één stap vastleggen, dus je behoudt de lead ook als de koper niet bij het eerste bezoek koopt.",
      },
      {
        question: "Wat doe ik met de leads die een quizfunnel vastlegt?",
        answer:
          "Synchroniseer ze met je e-mailtool met de quizantwoorden als labels, en stuur daarna gesegmenteerde opvolging per doel of voorkeur. RevenueHunt synchroniseert antwoorden en klantlabels met Klaviyo, Mailchimp, Omnisend, HubSpot en meer.",
      },
    ],
    related: [
      { label: "Leadgeneratiequiz", href: "/glossary/lead-generation-quiz/" },
      { label: "Shoppable quiz", href: "/glossary/shoppable-quiz/" },
      { label: "Voorbeelden van e-commercefunnels", href: "/ecommerce-sales-funnel-examples/" },
      { label: "Quiz-ROI-calculator", href: "/quiz-roi-calculator/" },
      { label: "Integraties", href: "/integrations/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "personalized-product-recommendations": {
    slug: "personalized-product-recommendations",
    term: "Gepersonaliseerde productaanbevelingen",
    chip: "Concept",
    title: "Wat zijn gepersonaliseerde productaanbevelingen?",
    description:
      "Gepersonaliseerde productaanbevelingen stemmen de suggesties af op elke koper. Zo doen winkels het, het cold-startprobleem en de cookievrije manier.",
    h1: "Wat zijn gepersonaliseerde productaanbevelingen?",
    shortAnswer:
      "Gepersonaliseerde productaanbevelingen zijn suggesties die zijn afgestemd op een individuele koper in plaats van dezelfde bestsellers die aan iedereen worden getoond. Ze kunnen gebaseerd zijn op browsegedrag, op eerdere aankopen of, op de meest directe manier, op wat de koper je vertelt.",
    intro: [
      "Elke koper hetzelfde raster tonen behandelt een first-time cadeaukoper en een trouwe terugkerende klant gelijk. Gepersonaliseerde aanbevelingen stemmen af op wie er echt aan het kopen is.",
    ],
    sections: [
      {
        heading: "Hoe winkels aanbevelingen personaliseren",
        body: [
          "Er zijn twee algemene benaderingen. Gedragspersonalisatie observeert wat een koper doet, clicks, weergaven, eerdere bestellingen, en leidt af wat hierna te tonen. Personalisatie op basis van opgegeven voorkeuren vraagt de koper direct en beveelt aan op basis van zijn antwoorden.",
          "Gedrag is onzichtbaar voor de koper en schaalt automatisch, maar het is een afleiding en kan ernaast zitten. Opgegeven voorkeur is expliciet: de koper vertelt je dat hij een parfumvrije hydratatie voor de gevoelige huid wil, dus er valt niets te raden.",
        ],
      },
      {
        heading: "Het cold-startprobleem",
        body: [
          "Gedragspersonalisatie heeft moeite met nieuwe kopers. Zonder historie om van te leren valt het terug op generieke bestsellers, juist voor de bezoekers bij wie een eerste indruk het meest telt.",
          "De koper vragen lost dit meteen op. Een quiz verzamelt genoeg om te personaliseren bij het eerste bezoek, voordat er enige browsehistorie bestaat, en daarom past het zo goed bij betaald en social verkeer dat koud aankomt.",
        ],
      },
      {
        heading: "Personaliseren zonder third-party cookies",
        body: [
          "Gedragstargeting heeft geleund op third-party cookies en cross-site tracking, beide steeds verder ingeperkt door browsers en regelgeving. Aanbevelingen gebouwd op data die de koper vrijwillig aanbiedt, zijn van niets daarvan afhankelijk.",
          "De data die een quiz verzamelt zijn zero-party data: voorkeuren en intenties die de koper bewust deelt. Dat is anders dan first-party data, namelijk het gedrag dat je op je eigen site observeert, zoals bekeken pagina's en eerdere bestellingen. Zero-party data is een soort first-party data, maar is opgegeven in plaats van afgeleid, dus er valt niets te raden.",
          "Beide zijn duurzaam en met toestemming, anders dan third-party data. Voor het complete plaatje, raadpleeg de gidsen over zero-party data en first-party data.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt personaliseert aanbevelingen op basis van de voorkeuren die de koper in een quiz opgeeft, dus het werkt bij het eerste bezoek en is niet afhankelijk van tracking door derden. De antwoorden worden gekoppeld aan echte producten en varianten, en harde beperkingen sluiten alles uit wat niet past.",
      "Dezelfde antwoorden worden zero-party data, dus de personalisatie loopt door in de e-mail: elke campagne na de quiz kan inspelen op wat elke koper echt wil.",
    ],
    faqs: [
      {
        question: "Welke data drijven gepersonaliseerde productaanbevelingen aan?",
        answer:
          "Ofwel gedragsdata (clicks, weergaven, aankoopgeschiedenis) ofwel opgegeven voorkeuren die de koper direct geeft. Opgegeven voorkeuren zijn het meest nauwkeurig omdat ze vrijwillig zijn in plaats van afgeleid, en ze werken bij het eerste bezoek.",
      },
      {
        question: "Kan ik aanbevelingen personaliseren voor bezoekers die voor het eerst aankomen?",
        answer:
          "Ja, als je het ze vraagt. Een quiz verzamelt genoeg om te personaliseren bij het eerste bezoek, iets wat gedragssystemen niet kunnen omdat nieuwe bezoekers geen historie hebben om van te leren.",
      },
      {
        question: "Hebben gepersonaliseerde aanbevelingen third-party cookies nodig?",
        answer:
          "Nee. Aanbevelingen gebouwd op data die een koper vrijwillig in een quiz aanbiedt, zijn niet afhankelijk van third-party cookies of cross-site tracking, beide steeds verder ingeperkt door browsers en regelgevers.",
      },
    ],
    related: [
      { label: "Productaanbevelingsmotor", href: "/glossary/product-recommendation-engine/" },
      { label: "E-commercepersonalisatie", href: "/glossary/ecommerce-personalization/" },
      { label: "Zero-party data", href: "/zero-party-data/" },
      { label: "First-party data", href: "/first-party-data/" },
      { label: "Hoe het werkt", href: "/how-it-works/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "ecommerce-personalization": {
    slug: "ecommerce-personalization",
    term: "E-commercepersonalisatie",
    chip: "Concept",
    title: "Wat is e-commercepersonalisatie?",
    description:
      "E-commercepersonalisatie stemt de winkel af op elke koper. Hier is waar het gebeurt, de verschuiving naar zero-party data en de plek met de minste inspanning om te beginnen.",
    h1: "Wat is e-commercepersonalisatie?",
    shortAnswer:
      "E-commercepersonalisatie draait om het afstemmen van de winkelervaring, de producten, content en aanbiedingen die een koper ziet, op het individu in plaats van iedereen dezelfde winkel te tonen. Goed gedaan verhoogt het de conversie en de gemiddelde orderwaarde.",
    intro: [
      "Personalisatie beslaat veel terrein, van een aanbevolen-voor-jou-sectie tot een volledig afgestemde homepage. De rode draad is verschillende kopers verschillend behandelen op basis van wat je over ze weet.",
    ],
    sections: [
      {
        heading: "Waar personalisatie gebeurt",
        body: [
          "Op de site verschijnt het als aanbevolen producten, afgestemde landingspagina's en dynamische content. In de aanbevelingen ordent het de catalogus voor elke koper. In e-mail en sms segmenteert het de berichten op gedrag of voorkeur. In advertenties stemt het de creatives en doelgroepen af.",
          "De meeste winkels hebben niet alles tegelijk nodig. De plekken met het hoogste rendement om te beginnen zijn productaanbevelingen en e-mailsegmentatie, omdat beide direct van invloed zijn op wat een koper koopt en of hij terugkomt.",
        ],
      },
      {
        heading: "De verschuiving van third-party data naar zero-party data",
        body: [
          "Klassieke personalisatie leunde zwaar op third-party data en cross-site tracking. Wijzigingen in browsers en privacyregelgeving hebben die benadering broos en in veel gevallen niet-conform gemaakt.",
          "De duurzame vervanging is je eigen data, en die komt in twee vormen. First-party data is wat je observeert uit de interacties van een koper met je winkel, zoals bekeken pagina's en eerdere bestellingen. Zero-party data is wat ze bewust aanbieden, zoals doelen, voorkeuren en problemen. Zero-party data is de opgegeven subset van first-party data, en is het meest nauwkeurige intentiesignaal omdat de koper het je direct vertelde.",
          "Beide zijn met toestemming en verdwijnen niet wanneer een browser een cookie blokkeert. Een quiz is de meest directe manier om zero-party data op schaal te verzamelen.",
        ],
      },
      {
        heading: "De plek met de minste inspanning om te beginnen",
        body: [
          "Enterprise-personalisatiesuites kunnen elke pixel afstemmen, met een prijs en een implementatieschema dat daarbij past. De meeste winkels hebben dat niet nodig om resultaten te zien.",
          "Een productaanbevelingsquiz is het eenvoudigste instappunt. Het personaliseert het belangrijkste moment, een product kiezen, legt de voorkeursdata vast die later gepersonaliseerde e-mail aandrijven, en kan dezelfde dag live staan op een gratis abonnement.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt is een gerichte, selfservice-manier om te beginnen met personaliseren: een quiz die de aanbevelingen afstemt bij het eerste bezoek en je e-mailtool voedt met voorkeursdata voor doorlopende segmentatie. Geen enterprise-contract, geen datascienceteam.",
      "Het werkt op alle belangrijke platforms en synchroniseert met Klaviyo, Mailchimp, Omnisend, HubSpot en meer, zodat de personalisatie van de winkel naar de inbox gaat.",
    ],
    faqs: [
      {
        question: "Wat is de makkelijkste manier om te beginnen met e-commercepersonalisatie?",
        answer:
          "Een productaanbevelingsquiz. Het personaliseert het moment met de hoogste impact, een product kiezen, werkt bij het eerste bezoek, legt voorkeursdata vast voor gepersonaliseerde e-mail en kan dezelfde dag live staan op een gratis abonnement.",
      },
      {
        question: "Vereist e-commercepersonalisatie third-party cookies?",
        answer:
          "Niet meer, en het kan er steeds minder op leunen. De duurzame benadering gebruikt data die kopers vrijwillig en direct aanbieden, wat nauwkeuriger en met toestemming is en niet wordt geraakt door browser- en privacybeperkingen.",
      },
      {
        question: "Heb ik een enterprise-platform nodig om mijn winkel te personaliseren?",
        answer:
          "Nee. Enterprise-suites stemmen alles af tegen hoge kosten, maar de meeste winkels behalen sterke rendementen uit gerichte personalisatie: aanbevelingen en e-mailsegmentatie, die een quiz bereikt op een selfservice-abonnement.",
      },
    ],
    related: [
      { label: "Gepersonaliseerde productaanbevelingen", href: "/glossary/personalized-product-recommendations/" },
      { label: "Productontdekking", href: "/glossary/product-discovery/" },
      { label: "Zero-party data", href: "/zero-party-data/" },
      { label: "First-party data", href: "/first-party-data/" },
      { label: "RevenueHunt vergelijken met Nosto", href: "/compare/nosto/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "product-discovery": {
    slug: "product-discovery",
    term: "Productontdekking",
    chip: "Concept",
    title: "Wat is productontdekking in e-commerce?",
    description:
      "Productontdekking is hoe kopers het juiste product in je catalogus vinden. De methoden, waarom grote catalogi het bemoeilijken en hoe begeleide verkoop helpt.",
    h1: "Wat is productontdekking in e-commerce?",
    shortAnswer:
      "Productontdekking is hoe kopers het juiste product in je catalogus vinden. Goede ontdekking, via zoeken, filters en begeleide quizzen, brengt een koper van ik heb een probleem naar dit is het product met zo min mogelijk frictie.",
    intro: [
      "Een koper komt zelden aan met jouw exacte SKU in gedachten. Hij komt met een behoefte. Productontdekking is alles wat er tussen die behoefte en de juiste productpagina zit.",
    ],
    sections: [
      {
        heading: "De belangrijkste ontdekkingsmethoden",
        body: [
          "Zoeken laat kopers die weten wat ze willen het intypen. Navigatie en filters laten ze afgrenzen op categorie en attribuut. Aanbevelingen halen relevante producten naar boven terwijl ze browsen. Begeleide verkoop, meestal een quiz, vraagt naar hun behoefte en wijst ze het antwoord aan.",
          "Elk past bij een andere koper. Zoeken werkt als iemand de productnaam kent. Filters werken als ze de attributen kennen. Een quiz werkt als ze het probleem kennen maar niet het product, wat het lastigste en meest voorkomende geval is.",
        ],
      },
      {
        heading: "Waarom grotere catalogi ontdekking bemoeilijken",
        body: [
          "Een winkel met tien producten heeft nauwelijks ontdekkingstools nodig. Een winkel met honderden of duizenden wel. Hoe meer je verkoopt, hoe waarschijnlijker het is dat een koper overweldigd raakt en weggaat zonder te vinden wat bij hem paste.",
          "Dit is de keuzeparadox in de praktijk: meer opties kunnen de conversie verlagen, niet verhogen, tenzij je kopers een manier geeft om eruit te komen. Begeleide ontdekking verandert een grote catalogus van een blok aan het been in een sterkte.",
        ],
      },
      {
        heading: "Ontdekking is de conversiehefboom",
        body: [
          "Een koper die het juiste product niet vindt, koopt geen ander, hij gaat weg. Ontdekking verbeteren is vaak de wijziging met de grootste hefboom die een winkel met een diepe catalogus kan maken, omdat het de stap repareert waar de intentie stilletjes sterft.",
          "Een quiz is de meest directe ontdekkingstool voor behoeftegestuurde aankopen, omdat hij de vraag stelt die een verkoper zou stellen en het product teruggeeft dat hij zou aanwijzen.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt neemt de behoeftegestuurde productontdekking voor zijn rekening: de koper beschrijft zijn doel of probleem, en de quiz ordent je live catalogus om de juiste match terug te geven, met harde beperkingen die alles uitsluiten wat niet past.",
      "Het schaalt mee met je catalogus, werkt bij het eerste bezoek en draait op Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace en zelfstandig.",
    ],
    faqs: [
      {
        question: "Wat is het verschil tussen productontdekking en zoeken?",
        answer:
          "Zoeken is een ontdekkingsmethode, voor kopers die al weten wat ze willen. Productontdekking is breder en omvat filters, aanbevelingen en begeleide quizzen voor kopers die hun behoefte kennen maar niet het concrete product.",
      },
      {
        question: "Hoe verbetert een quiz de productontdekking?",
        answer:
          "Hij neemt het lastigste geval voor zijn rekening: een koper die zijn probleem kent maar niet het product. De quiz vraagt naar de behoefte en ordent de catalogus om de juiste match terug te geven, op de manier waarop een verkoper hem zou begeleiden.",
      },
      {
        question: "Doet productontdekking er meer toe bij grote catalogi?",
        answer:
          "Ja. Hoe meer producten je verkoopt, hoe makkelijker kopers overweldigd raken en weggaan. Begeleide ontdekking baant zich een weg door een grote catalogus en maakt van de omvang een voordeel in plaats van een barrière.",
      },
    ],
    related: [
      { label: "Begeleide-verkoopquiz", href: "/guided-selling-quiz/" },
      { label: "Productzoeker-quiz", href: "/product-finder-quiz/" },
      { label: "E-commercepersonalisatie", href: "/glossary/ecommerce-personalization/" },
      { label: "RevenueHunt vergelijken met Zoovu", href: "/compare/zoovu/" },
      { label: "Quiztemplates", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "lead-generation-quiz": {
    slug: "lead-generation-quiz",
    term: "Leadgeneratiequiz",
    chip: "Type quiz",
    title: "Wat is een leadgeneratiequiz?",
    description:
      "Een leadgeneratiequiz legt gekwalificeerde, geabonneerde leads vast met een ingebouwde reden om je aan te melden. Hier is waarom hij een aanmeldformulier verslaat en wat je vastlegt.",
    h1: "Wat is een leadgeneratiequiz?",
    shortAnswer:
      "Een leadgeneratiequiz legt gekwalificeerde leads vast: een koper beantwoordt een paar vragen, geeft zijn e-mail om het resultaat te zien, en jij krijgt een contact met labels voor zijn opgegeven voorkeuren. Het is een opt-in met een ingebouwde reden om je aan te melden.",
    intro: [
      "E-mail blijft het kanaal met het hoogste rendement in e-commerce, maar een simpel aanmeldformulier converteert een kleine fractie van de bezoekers en vertelt je niets over ze. Een leadgeneratiequiz lost beide problemen tegelijk op.",
    ],
    sections: [
      {
        heading: "Waarom een quiz een simpel aanmeldformulier verslaat",
        body: [
          "Een nieuwsbriefvinkje vraagt om een e-mail en biedt hoogstens een generieke korting. Een leadgeneratiequiz biedt een gepersonaliseerd resultaat, wat een reden is waarom een koper zijn adres echt wil geven. De ruil voelt eerlijk, dus meer mensen accepteren hem.",
          "Hij verzamelt ook meer dan een e-mail. Tegen de tijd dat een koper zich aanmeldt, heeft hij vragen beantwoord over zijn doelen, voorkeuren en beperkingen, dus elk contact komt al gekwalificeerd en gesegmenteerd binnen.",
        ],
      },
      {
        heading: "Wat je vastlegt en hoe je het gebruikt",
        body: [
          "Je legt de e-mail plus de quizantwoorden vast als zero-party data. Die antwoorden worden labels in je e-mailtool: doel, huidtype, budget, ontvanger, wat de quiz ook vroeg.",
          "De labels veranderen één enkele lijst in segmenten die je gericht kunt aanspreken. Een lead die zei dat hij koopt voor de gevoelige huid krijgt een andere e-mail dan een die een cadeau koopt, en het verschil wordt opgebouwd bij de vastlegging, niet achteraf geraden.",
        ],
      },
      {
        heading: "Het conformiteitsvoordeel",
        body: [
          "Omdat de koper de data vrijwillig aanbiedt in ruil voor een resultaat, is het zero-party data: het opgegeven type first-party data, per definitie met toestemming. Dat houdt veel beter stand dan afgeleide of gekochte third-party data naarmate de privacyregels strenger worden en browsers tracking inperken.",
          "Je bent eigenaar van de data, ze zijn nauwkeurig omdat ze rechtstreeks van de koper kwamen, en ze zijn van geen enkele third-party cookie afhankelijk om nuttig te blijven.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt verandert elke quiz in een leadgeneratiequiz: het legt de e-mail vast op het punt van de hoogste intentie, en synchroniseert daarna het contact en de op antwoorden gebaseerde labels met Klaviyo, Mailchimp, Omnisend, HubSpot en meer.",
      "Omdat de aanbeveling de prikkel is, drijft dezelfde quiz die je lijst laat groeien ook de verkoop aan, en de afhaakanalytics tonen precies waar je de flow moet bijstellen.",
    ],
    faqs: [
      {
        question: "Waarin verschilt een leadgeneratiequiz van een aanmeldformulier?",
        answer:
          "Een aanmeldformulier vraagt om een e-mail en biedt een generieke prikkel. Een leadgeneratiequiz biedt een gepersonaliseerd resultaat als reden om je aan te melden en legt voorkeursdata samen met de e-mail vast, dus elke lead is gekwalificeerd en gesegmenteerd.",
      },
      {
        question: "Welke informatie legt een leadgeneratiequiz vast?",
        answer:
          "De e-mail van de koper plus zijn quizantwoorden als zero-party data. Die antwoorden worden gesynchroniseerd met je e-mailtool als labels, dus contacten komen al gesegmenteerd binnen op doel, voorkeur of beperking.",
      },
      {
        question: "Is het conform de regelgeving om de data van een leadgeneratiequiz te gebruiken?",
        answer:
          "Ja. De koper biedt ze vrijwillig aan in ruil voor een resultaat, dus het is first-party data met toestemming. Dat houdt beter stand dan afgeleide of third-party data naarmate de privacyregels en browserbeperkingen strenger worden.",
      },
    ],
    related: [
      { label: "Quizfunnel", href: "/glossary/quiz-funnel/" },
      { label: "Shoppable quiz", href: "/glossary/shoppable-quiz/" },
      { label: "Zero-party data", href: "/zero-party-data/" },
      { label: "Integraties", href: "/integrations/" },
      { label: "Quiztemplates", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "conversion-rate-optimization": {
    slug: "conversion-rate-optimization",
    term: "Conversieoptimalisatie (CRO)",
    chip: "Concept",
    title: "Wat is conversieoptimalisatie?",
    description:
      "Conversieoptimalisatie (CRO) verhoogt het aandeel bezoekers dat koopt. Hoe je het meet, waar je je op richt en de tactieken die het verschil maken.",
    h1: "Wat is conversieoptimalisatie (CRO)?",
    shortAnswer:
      "Conversieoptimalisatie (CRO) is de praktijk van het verhogen van het percentage bezoekers dat een gewenste actie uitvoert, meestal een aankoop. Je meet de conversieratio als conversies gedeeld door bezoekers, en verbetert hem vervolgens zonder meer verkeer te kopen.",
    intro: [
      "CRO draait om meer halen uit het verkeer dat je al hebt. Je conversieratio verdubbelen heeft hetzelfde effect op de inkomsten als je verkeer verdubbelen, maar het kost veel minder.",
    ],
    sections: [
      {
        heading: "Hoe je de conversieratio berekent",
        body: [
          "De conversieratio is de conversies gedeeld door het totaal aantal bezoekers, uitgedrukt als percentage. Als 1.000 bezoekers 20 aankopen opleveren, is dat een conversieratio van 2%. Gemiddelde conversieratio's in e-commerce liggen in de lage enkele cijfers, dus kleine absolute winsten zijn groot in relatieve termen: van 2% naar 3% gaan is een toename van 50% in bestellingen.",
          "Dezelfde rekensom geldt voor elk doel, niet alleen aankopen. E-mailaanmeldingen, quizvoltooiingen en toevoegingen aan de winkelwagen zijn allemaal conversies die je kunt optimaliseren.",
        ],
      },
      {
        heading: "Waar CRO zich echt op richt",
        body: [
          "Goede CRO vindt de concrete stap waar de intentie weglekt en repareert die. Veelvoorkomende lekken: een productpagina die de echte vraag van de koper niet beantwoordt, een checkout met te veel frictie, of een categoriepagina die een besluiteloze koper voor een muur van opties zet zonder enige begeleiding.",
          "Het is een lus, geen eenmalige reparatie: formuleer een hypothese, verander één ding, meet tegen een referentiepunt, behoud wat wint. De discipline zit hem erin één variabele tegelijk te wijzigen zodat je weet wat het getal bewoog.",
        ],
      },
      {
        heading: "Tactieken die het getal bewegen",
        body: [
          "De duurzame winsten zijn helderheid en relevantie: snellere pagina's, eerlijke productinformatie, minder stappen in de checkout en besluiteloze kopers helpen kiezen. Kortingspopups kunnen de conversie op korte termijn verhogen, maar wennen kopers aan het verwachten van aanbiedingen en knagen aan de marge.",
          "Kopers helpen kiezen is de meest over het hoofd geziene hefboom. Een koper die niet kan beslissen, converteert niet, en een raster van opties helpt hem niet. Een begeleide ervaring die de catalogus terugbrengt tot een aanbeveling met vertrouwen verwijdert de besluiteloosheid die stilletjes conversies doodt.",
        ],
      },
    ],
    withRevenueHunt: [
      "Een productaanbevelingsquiz is een CRO-tactiek gericht op het besluiteloosheidslek. In plaats van een koper een muur van producten te laten vergelijken, stelt hij een paar vragen en geeft een gepersonaliseerde aanbeveling met vertrouwen terug, zodat meer kopers tot een aankoopbeslissing komen.",
      "Hij legt onderweg ook e-mail en voorkeursdata vast, dus de bezoekers die niet bij het eerste bezoek kopen, gaan niet verloren. Je kunt de potentiële toename voor je eigen cijfers inschatten met de quiz-ROI-calculator.",
    ],
    faqs: [
      {
        question: "Hoe bereken je de conversieratio?",
        answer:
          "Deel het aantal conversies door het aantal bezoekers en druk het uit als percentage. Bijvoorbeeld, 20 aankopen uit 1.000 bezoekers is een conversieratio van 2%. Dezelfde formule geldt voor elk doel, zoals aanmeldingen of quizvoltooiingen.",
      },
      {
        question: "Wat is een goede conversieratio in e-commerce?",
        answer:
          "De meeste e-commercewinkels converteren in de lage enkele cijfers, vaak rond de 1% tot 3%. Omdat de basis klein is, zijn bescheiden absolute winsten groot in relatieve termen: van 2% naar 3% gaan is een toename van 50% in bestellingen.",
      },
      {
        question: "Hoe verbetert een productquiz de conversieratio?",
        answer:
          "Hij richt zich op het besluiteloosheidslek. Een quiz brengt een grote catalogus terug tot een gepersonaliseerde aanbeveling met vertrouwen, zodat besluiteloze kopers tot een aankoopbeslissing komen in plaats van weg te gaan van een raster van opties.",
      },
    ],
    related: [
      { label: "Gemiddelde orderwaarde", href: "/glossary/average-order-value/" },
      { label: "Productontdekking", href: "/glossary/product-discovery/" },
      { label: "Tips voor conversieoptimalisatie", href: "/ecommerce-conversion-optimization-tips/" },
      { label: "Quiz-ROI-calculator", href: "/quiz-roi-calculator/" },
      { label: "Quizfunnel", href: "/glossary/quiz-funnel/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "average-order-value": {
    slug: "average-order-value",
    term: "Gemiddelde orderwaarde (AOV)",
    chip: "Metric",
    title: "Wat is de gemiddelde orderwaarde (AOV)?",
    description:
      "De gemiddelde orderwaarde (AOV) is wat een klant gemiddeld per bestelling uitgeeft. Hoe je het berekent, waarom het ertoe doet en hoe je het verhoogt zonder meer verkeer.",
    h1: "Wat is de gemiddelde orderwaarde (AOV)?",
    shortAnswer:
      "De gemiddelde orderwaarde (AOV) is het gemiddelde bedrag dat een klant in één enkele bestelling uitgeeft. Je berekent het door de totale inkomsten te delen door het aantal bestellingen in dezelfde periode.",
    intro: [
      "AOV is een van de drie getallen die je inkomsten bepalen, samen met verkeer en conversieratio. Hem verhogen tilt de inkomsten op van precies hetzelfde aantal bestellingen, en daarom is het een van de goedkoopste groeihefbomen die je hebt.",
    ],
    sections: [
      {
        heading: "Hoe je de AOV berekent",
        body: [
          "Deel de totale inkomsten door het aantal bestellingen in een bepaalde periode. Als een winkel $50.000 genereert met 1.000 bestellingen in een maand, is de AOV $50. Volg hem in de loop van de tijd en per verkeersbron, want een kanaal met een hogere AOV kan meer waard zijn, ook al converteert het minder.",
          "AOV werkt samen met al het andere. Een hogere AOV betekent dat elke conversie meer waard is, wat verhoogt hoeveel je je kunt veroorloven uit te geven om een klant te werven.",
        ],
      },
      {
        heading: "Waarom AOV ertoe doet",
        body: [
          "Verkeer en conversieratio krijgen de meeste aandacht, maar het zijn de dure hefbomen: meer verkeer kost advertentie-investering, en conversiewinsten worden moeilijker naarmate je optimaliseert. AOV is de hefboom die je kunt bewegen op de bestellingen die je al wint.",
          "Het financiert ook de acquisitie. Hoe meer elke bestelling waard is, hoe meer je kunt bieden op betaald verkeer en toch winstgevend blijven, wat zich door de hele funnel samenstelt.",
        ],
      },
      {
        heading: "Hoe je de AOV verhoogt",
        body: [
          "De eerlijke manieren om de AOV te verhogen voegen allemaal echte waarde toe: complementaire producten aanbevelen, artikelen bundelen die bij elkaar horen en kopers helpen de complete oplossing te kopen in plaats van één enkel stuk. Cross-selling en upselling zijn de tactieken; een relevante aanbeveling is wat ze laat werken in plaats van irriteren.",
          "Het sleutelwoord is relevant. Een generieke aanvulprompt wordt genegeerd. Een aanbevolen set die echt past bij wat de koper koopt, wordt gekocht, omdat hij gelezen wordt als hulp, niet als een verkoopduwtje.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt verhoogt de AOV door een complete set aan te bevelen in plaats van één enkel product. De recommendation slots reserveren een plek voor elke rol van een routine, een stack of een pack, dus de resultatenpagina geeft de hele oplossing terug met de optie om de set aan de winkelwagen toe te voegen en een optionele korting gekoppeld aan de antwoorden.",
      "Omdat elk artikel matcht met de antwoorden van de koper, voelt de grotere bestelling aan als een aanbeveling, niet als upselling. Je kunt de inkomstenimpact voor je winkel schatten met de quiz-ROI-calculator.",
    ],
    faqs: [
      {
        question: "Hoe bereken je de gemiddelde orderwaarde?",
        answer:
          "Deel de totale inkomsten door het aantal bestellingen in dezelfde periode. Bijvoorbeeld, $50.000 aan inkomsten uit 1.000 bestellingen is een gemiddelde orderwaarde van $50.",
      },
      {
        question: "Waarom is AOV belangrijk?",
        answer:
          "Het tilt de inkomsten op van de bestellingen die je al wint, zonder te betalen voor meer verkeer, en een hogere AOV laat je meer uitgeven om elke klant te werven terwijl je winstgevend blijft. Het is een van de goedkoopste beschikbare groeihefbomen.",
      },
      {
        question: "Hoe kan een productquiz de AOV verhogen?",
        answer:
          "Door een complete set aan te bevelen in plaats van één enkel product. De recommendation slots geven een matchende routine, stack of pack terug met de optie om de hele set aan de winkelwagen toe te voegen, dus elke bestelling is groter zonder dat hij minder gepersonaliseerd aanvoelt.",
      },
    ],
    related: [
      { label: "Cross-selling en upselling", href: "/glossary/cross-selling-and-upselling/" },
      { label: "Conversieoptimalisatie", href: "/glossary/conversion-rate-optimization/" },
      { label: "Packbouwer-quiz", href: "/solutions/bundle-builder/" },
      { label: "Routinebouwer-quiz", href: "/solutions/routine-builder/" },
      { label: "Quiz-ROI-calculator", href: "/quiz-roi-calculator/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "cross-selling-and-upselling": {
    slug: "cross-selling-and-upselling",
    term: "Cross-selling en upselling",
    chip: "Tactiek",
    title: "Cross-selling tegenover upselling uitgelegd",
    description:
      "Cross-selling voegt verwante producten toe; upselling stuurt naar een betere. Hier is het verschil, waarom beide werken en hoe een quiz het doet zonder het duwtje.",
    h1: "Wat zijn cross-selling en upselling?",
    shortAnswer:
      "Cross-selling beveelt verwante producten aan die aanvullen wat een koper koopt, zoals een hydratatie bij een reiniger. Upselling beveelt een betere of grotere versie aan van wat hij al wil, zoals een groter formaat of een premium niveau. Beide verhogen de orderwaarde.",
    intro: [
      "De twee worden op één hoop gegooid omdat beide verhogen wat een koper uitgeeft, maar ze werken in verschillende richtingen. Weten welke op een moment past, is het verschil tussen behulpzaam en opdringerig.",
    ],
    sections: [
      {
        heading: "Cross-selling tegenover upselling: het verschil",
        body: [
          "Cross-selling gaat zijwaarts. Het voegt complementaire artikelen toe aan de bestelling: het klassieke wil je er frietjes bij?, of een schermbeschermer bij een telefoon. Het doel is een completere aankoop.",
          "Upselling gaat omhoog. Het stuurt de koper naar een versie met meer waarde van wat hij al overweegt: een groter formaat, een premium model, een langer abonnement. Het doel is een betere match tegen een hogere prijs, niet meer artikelen.",
        ],
      },
      {
        heading: "Waarom beide werken, wanneer ze relevant zijn",
        body: [
          "Beide tactieken verhogen de gemiddelde orderwaarde, en beide kunnen misgaan. Een relevante cross-sell of upsell wordt gelezen als een nuttig advies; een irrelevante wordt gelezen als een winkel die de rekening probeert op te blazen, en kopers negeren het of raken geïrriteerd.",
          "Relevantie is alles, en relevantie vereist de koper kennen. Een aanbeveling op basis van wat iemand echt probeert te bereiken slaat aan. Een generieke misschien-vind-je-dit-ook-leuk-sectie, aan iedereen getoond, niet.",
        ],
      },
      {
        heading: "Hoe een quiz cross-sellt en upsellt zonder het duwtje",
        body: [
          "Een quiz kent het doel van de koper voordat hij iets aanbeveelt, dus de cross-sell en de upsell zijn geïntegreerd in de aanbeveling in plaats van toegevoegd bij de checkout. Hij kan een complete set teruggeven (cross-sell) en sturen naar het juiste niveau voor de opgegeven behoefte (upsell) in één beweging.",
          "Omdat de aanbeveling antwoord geeft op de eigen vragen van de koper, voelt de grotere bestelling verdiend. De koper ziet een oplossing die past, geen lijst met aanvullingen.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt integreert de cross-sells en de upsells in de aanbeveling zelf. De recommendation slots reserveren een plek voor elke complementaire rol zodat de resultatenpagina een complete set teruggeeft, en de op antwoorden gebaseerde logica stuurt kopers naar het formaat, het niveau of het pack dat past bij wat ze je vertelden.",
      "De resultatenpagina ondersteunt het toevoegen van de hele set aan de winkelwagen plus een korting gekoppeld aan de antwoorden, dus de bestelling groeit omdat de aanbeveling de juiste is, niet omdat een popup de checkout onderbrak.",
    ],
    faqs: [
      {
        question: "Wat is het verschil tussen cross-selling en upselling?",
        answer:
          "Cross-selling voegt complementaire producten toe aan een bestelling, zoals een hydratatie bij een reiniger. Upselling stuurt naar een betere of grotere versie van wat de koper al wil, zoals een premium niveau of een groter formaat. Beide verhogen de orderwaarde.",
      },
      {
        question: "Werken cross-selling en upselling echt?",
        answer:
          "Ja, wanneer de aanbeveling relevant is. Een suggestie die past bij het doel van de koper wordt gelezen als nuttig en wordt gekocht. Een generieke eenheidsworst-prompt wordt genegeerd of irriteert, dus relevantie is wat de twee uitkomsten scheidt.",
      },
      {
        question: "Hoe doet een quiz aan cross-selling en upselling?",
        answer:
          "Hij leert eerst het doel van de koper, en integreert daarna de cross-sell en de upsell in de aanbeveling. De recommendation slots geven een complete set terug, en de op antwoorden gebaseerde logica stuurt naar het juiste niveau, dus de grotere bestelling voelt aan als een advies in plaats van een duwtje.",
      },
    ],
    related: [
      { label: "Gemiddelde orderwaarde", href: "/glossary/average-order-value/" },
      { label: "Packbouwer-quiz", href: "/solutions/bundle-builder/" },
      { label: "Routinebouwer-quiz", href: "/solutions/routine-builder/" },
      { label: "Shoppable quiz", href: "/glossary/shoppable-quiz/" },
      { label: "Gepersonaliseerde productaanbevelingen", href: "/glossary/personalized-product-recommendations/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "customer-segmentation": {
    slug: "customer-segmentation",
    term: "Klantsegmentatie",
    chip: "Marketing",
    title: "Wat is klantsegmentatie?",
    description:
      "Klantsegmentatie groepeert kopers op gedeelde kenmerken zodat je elke groep gericht kunt aanspreken. De types, waarom het werkt en hoe een quiz het voedt.",
    h1: "Wat is klantsegmentatie?",
    shortAnswer:
      "Klantsegmentatie is de praktijk van het groeperen van klanten op gedeelde kenmerken, zoals doelen, gedrag of demografie, zodat je elke groep met een relevante boodschap kunt aanspreken in plaats van iedereen hetzelfde te sturen.",
    intro: [
      "Eén enkele boodschap naar je hele lijst spreekt niemand in het bijzonder aan. Segmentatie laat je het juiste zeggen tegen de juiste groep, en daarom verslaan gesegmenteerde campagnes consistent het ongericht massaal versturen.",
    ],
    sections: [
      {
        heading: "De belangrijkste manieren om te segmenteren",
        body: [
          "Demografische segmentatie groepeert op attributen zoals leeftijd of locatie. Gedragssegmentatie groepeert op wat klanten doen: eerdere aankopen, browsen, interactie. Psychografische segmentatie groepeert op houdingen en waarden. Behoeftegestuurde segmentatie groepeert op het probleem dat een klant probeert op te lossen.",
          "Voor e-commerce zijn behoeftegestuurde en gedragssegmenten meestal het meest bruikbaar, omdat ze direct te koppelen zijn aan wat je vervolgens moet aanbevelen en zeggen.",
        ],
      },
      {
        heading: "Waarom segmentatie werkt",
        body: [
          "Relevantie drijft de respons aan. Een klant die koopt voor de droge en gevoelige huid zou niet dezelfde e-mail moeten krijgen als een die een cadeau koopt, en wanneer ze dat niet doen, stijgen de openpercentages, de clicks en de conversies.",
          "Segmentatie stelt zich ook samen in de loop van de tijd. Elke campagne die je naar een goed gedefinieerd segment stuurt, leert je er meer over, wat de volgende verfijnt. De lijst wordt een troef, niet alleen een uitzendkanaal.",
        ],
      },
      {
        heading: "Het dataprobleem achter segmentatie",
        body: [
          "Je kunt alleen segmenteren op wat je weet, en de meeste winkels weten niet veel over een anonieme bezoeker. Gedragsdata stapelen zich langzaam op en falen bij nieuwe kopers, en third-party data wordt steeds verder ingeperkt door browsers en regelgeving.",
          "De oplossing is vragen. Wanneer een koper je zijn doel, voorkeur of beperking vertelt, kun je er meteen en nauwkeurig op segmenteren, met zijn toestemming. Die vrijwillig aangeboden informatie is zero-party data.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt verandert de quizantwoorden automatisch in segmenten. Elk antwoord wordt een klantlabel, zoals doel:slaap of huid:gevoelig, dat wordt gesynchroniseerd met Klaviyo, Mailchimp, Omnisend, HubSpot en meer, dus contacten komen vooraf gesegmenteerd binnen op basis van wat ze je vertelden.",
      "Omdat de segmenten worden opgebouwd uit data die de koper vrijwillig aanbood, zijn ze nauwkeurig vanaf het eerste bezoek en niet afhankelijk van tracking. Elke campagne na de quiz kan het segment aanspreken in plaats van de hele lijst.",
    ],
    faqs: [
      {
        question: "Wat zijn de belangrijkste types klantsegmentatie?",
        answer:
          "De gangbare bases zijn demografisch (leeftijd, locatie), gedragsmatig (aankopen, browsen, interactie), psychografisch (houdingen, waarden) en behoeftegestuurd (het probleem dat een klant oplost). Voor e-commerce zijn behoeftegestuurde en gedragssegmenten meestal het meest bruikbaar.",
      },
      {
        question: "Waarom is klantsegmentatie belangrijk?",
        answer:
          "Het maakt de boodschap relevant, wat de openpercentages, clicks en conversies verhoogt ten opzichte van iedereen hetzelfde sturen. Het stelt zich ook samen: elke campagne naar een gedefinieerd segment leert je er meer over en verfijnt de volgende.",
      },
      {
        question: "Hoe helpt een quiz bij segmentatie?",
        answer:
          "Hij vraagt het kopers direct, dus elk antwoord wordt een klantlabel dat wordt gesynchroniseerd met je e-mailtool. Contacten komen vooraf gesegmenteerd binnen op doel, voorkeur of beperking, nauwkeurig vanaf het eerste bezoek en zonder afhankelijk te zijn van tracking.",
      },
    ],
    related: [
      { label: "Gepersonaliseerde productaanbevelingen", href: "/glossary/personalized-product-recommendations/" },
      { label: "Leadgeneratiequiz", href: "/glossary/lead-generation-quiz/" },
      { label: "Zero-party data", href: "/zero-party-data/" },
      { label: "E-commercepersonalisatie", href: "/glossary/ecommerce-personalization/" },
      { label: "Integraties", href: "/integrations/" },
    ],
    verifiedAsOf: VERIFIED,
  },
};

/** Gidsen en pagina's waar de glossariumhub naar verwijst. */
export const GLOSSARY_RELATED_GUIDES_NL: GlossaryLink[] = [
  {
    label: "Productzoeker-quiz",
    href: "/product-finder-quiz/",
    blurb: "Wat een productzoeker-quiz is, wanneer je er een gebruikt en 12 live voorbeelden.",
  },
  {
    label: "Begeleide-verkoopquiz",
    href: "/guided-selling-quiz/",
    blurb: "Hoe begeleide verkoop in e-commerce werkt en hoe je de quiz bouwt.",
  },
  {
    label: "Zero-party data",
    href: "/zero-party-data/",
    blurb: "Wat zero-party data is, waarom het gedragstracking verslaat en hoe een quiz het vastlegt.",
  },
  {
    label: "Oplossingen per sector",
    href: "/solutions/",
    blurb: "Productaanbevelingsquiz-oplossingen voor skincare, supplementen, mode en meer.",
  },
  {
    label: "Quiz-ROI-calculator",
    href: "/quiz-roi-calculator/",
    blurb: "Schat de extra inkomsten die een productaanbevelingsquiz aan je winkel zou kunnen toevoegen.",
  },
];
