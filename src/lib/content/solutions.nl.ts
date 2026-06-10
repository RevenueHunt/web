import type { Solution } from "../solutions";

const VERIFIED = "2026-06-07";

export const SOLUTIONS_NL: Record<string, Solution> = {
  // ----------------------------------------------------------------- verticals
  skincare: {
    slug: "skincare",
    type: "vertical",
    name: "Huidverzorging",
    chip: "Branche",
    title: "Skincare-quiz voor Shopify en WooCommerce",
    description:
      "Maak een huidverzorgingsquiz die het huidtype en de zorgen herkent en vervolgens de juiste routine aanbeveelt. Gratis abonnement, AI-bouwer, dezelfde dag online.",
    h1: "Skincare-quizzen die rondkijkers omzetten in een routine",
    heroSubtitle:
      "De meeste mensen die voor het eerst skincare kopen, weten niet welke producten bij hen passen. Een quiz stelt de juiste vragen en geeft een gepersonaliseerde routine terug die ze aan hun winkelwagen kunnen toevoegen.",
    intro: [
      "Huidverzorging is de categorie die het lastigst koud te kopen is. Kopers komen binnen met een zorg, niet met een product in gedachten, en een muur van reinigers, serums en SPF helpt ze niet kiezen. Een skincare-quiz vervangt die muur door een kort, begeleid gesprek: erin gaat het huidtype, de belangrijkste zorg, gevoeligheden en het budget, en eruit komt een gepersonaliseerde routine.",
      "RevenueHunt wordt door meer dan 20.000 merken gebruikt om precies dit te doen. Het koppelt elk antwoord aan echte producten uit je catalogus, groepeert het resultaat per routinestap (reiniger, behandeling, hydratatie, SPF) en legt het huidprofiel van de koper vast als zero-party data die je kunt synchroniseren met Klaviyo.",
    ],
    quizTypes: [
      {
        title: "Huidtype-detector",
        body: "Vijf tot zeven vragen over huidtype, zorgen en doelen geven een routine op maat terug. De klassieke skincare-quiz, en het startpunt dat het beste converteert.",
      },
      {
        title: "Routinebouwer",
        body: "Gebruik de recommendation slots om voor elke stap een plek te reserveren, zodat elke koper een complete routine van 3 of 5 stappen krijgt in plaats van één enkel product.",
      },
      {
        title: "Quiz gericht op de zorg",
        body: "Begin bij het probleem (acne, veroudering, droogheid, gevoeligheid) en vertak met voorwaardelijke logica, zodat elke koper alleen de voor hem relevante vragen ziet.",
      },
      {
        title: "Match op ingrediënt of gevoeligheid",
        body: "Sluit producten uit die botsen met een opgegeven allergie of gevoeligheid, zodat een koper die parfumvrij aanvinkt nooit een product met parfum in zijn resultaten ziet.",
      },
    ],
    howItHelps: [
      "De aanbevelingsmotor rangschikt producten op basis van de antwoorden die er het meest toe doen. Het geeft meer gewicht aan een must-have-zorg dan aan een nice-to-have, en sluit alles uit wat de koper afwijst, zodat de resultatenpagina echt op maat is in plaats van een generieke carrousel van bestsellers.",
      "Elk antwoord is zero-party data. Een koper die je vertelt dat zijn huid droog en gevoelig is en dat anti-aging belangrijk voor hem is, is een segment waaraan je jarenlang marketing kunt doen. RevenueHunt synchroniseert dat profiel en de customer tags met Klaviyo, Mailchimp, Omnisend en meer.",
      "Bouw het in minuten, niet in weken. Begin vanuit een skincare-template, of beschrijf je winkel aan de AI Quiz Copilot en hij structureert de vragen, de logica en de productkoppelingen in zo'n 60 seconden. Publiceer het daarna als popup, embed of landingspagina op volledig scherm.",
    ],
    demo: {
      label: "Probeer de huidtype-quiz",
      href: "https://productrecommendationquiz.com/pages/skin-type-quiz?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_skincare",
      blurb: "Een live skincare-quiz in onze demowinkel. Beantwoord een paar vragen en bekijk de routine die hij teruggeeft.",
    },
    faqs: [
      {
        question: "Hoeveel vragen zou een skincare-quiz moeten hebben?",
        answer:
          "Vijf tot zeven zichtbare vragen werken voor de meeste merken. Gebruik voorwaardelijke logica om vragen over te slaan die niet van toepassing zijn, zodat een koper zonder gevoeligheden nooit de allergiestap ziet.",
      },
      {
        question: "Kan de quiz een complete routine aanbevelen, niet alleen een product?",
        answer:
          "Ja. De recommendation slots reserveren een plek voor elke routinestap (reiniger, behandeling, hydratatie, SPF), zodat elke koper een complete routine krijgt met toevoegen aan winkelwagen voor de hele set.",
      },
      {
        question: "Werkt het voor de gevoelige huid en allergieën?",
        answer:
          "Ja. Elk antwoord kan producten uitsluiten, dus het aanvinken van een allergie of gevoeligheid verwijdert elk conflicterend product uit de resultaten, ook al was het verder een sterke match.",
      },
      {
        question: "Kan ik e-mails verzamelen en de routine naar Klaviyo sturen?",
        answer:
          "Ja. De quiz legt de e-mail en het volledige huidprofiel vast als zero-party data, en synchroniseert de antwoorden en de customer tags met Klaviyo, Mailchimp, Omnisend, HubSpot en meer.",
      },
    ],
    related: [
      { label: "Skincare-quiztemplates", href: "/templates/" },
      { label: "Routinebouwer-quiz", href: "/solutions/routine-builder/" },
      { label: "Tintdetector-quiz", href: "/solutions/shade-finder/" },
      { label: "Voor beautymerken", href: "/for-beauty-brands/" },
      { label: "Quiz voor Shopify", href: "/product-recommendation-quiz-shopify/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  beauty: {
    slug: "beauty",
    type: "vertical",
    name: "Beauty en cosmetica",
    chip: "Branche",
    title: "Beauty- en cosmeticaquiz voor je winkel",
    description:
      "Een beautyquiz die de tint matcht, de juiste producten vindt en een routine opbouwt uit je catalogus. Gratis abonnement, AI-bouwer, multiplatform.",
    h1: "Beautyquizzen die kopers koppelen aan het juiste product",
    heroSubtitle:
      "Foundationtint, lipkleur, een complete routine: een beautyquiz beantwoordt de vragen die een productraster niet kan, en leidt kopers naar een gepersonaliseerde resultatenpagina.",
    intro: [
      "Wie beauty koopt, kampt met twee problemen tegelijk: te veel keuze en te veel risico. Kies de verkeerde foundationtint en hij gaat retour. Een beautyquiz haalt het giswerk weg door te vragen naar de ondertoon, de dekking, de finish en de zorg, en beveelt vervolgens precies de producten aan die passen.",
      "RevenueHunt drijft beautyquizzen aan voor duizenden merken. Het haalt echte producten en varianten uit je catalogus, toont ze op een resultatenpagina met directe toevoegen aan winkelwagen, en legt het beautyprofiel van elke koper vast als zero-party data voor een gesegmenteerde e-mailopvolging.",
    ],
    quizTypes: [
      {
        title: "Tintmatcher",
        body: "Vragen over ondertoon, diepte en finish worden gekoppeld aan de juiste tint foundation, concealer of lippenstift. Antwoorden met afbeeldingen maken het snel op mobiel.",
      },
      {
        title: "Complete-routinebouwer",
        body: "Beveel een complete set aan (primer, foundation, kleur, fixeer) met de recommendation slots, zodat kopers de routine kopen in plaats van één enkel artikel.",
      },
      {
        title: "Quiz over huid- of haarzorg",
        body: "Vertak op zorg en huid- of haartype, zodat de resultatenpagina inspeelt op het specifieke doel van elke koper.",
      },
      {
        title: "Detector van cadeauset of starterset",
        body: "Help mensen die cadeaus kopen en beginners die de catalogus niet kennen door een starterset of een samengestelde pack aan te bevelen.",
      },
    ],
    howItHelps: [
      "Tint en pasvorm zijn precies waar retouren ontstaan. Door vanaf het begin naar de ondertoon en de dekking te vragen en alles uit te sluiten wat niet matcht, leidt de quiz kopers naar producten die ze veel waarschijnlijker houden.",
      "Met vragen met afbeeldingen kunnen kopers op een afbeelding tikken in plaats van zichzelf te beschrijven, wat de voltooiingspercentages hoog houdt op mobiel, waar het meeste beautyverkeer binnenkomt.",
      "Het profiel van de koper (ondertoon, huidtype, favoriete finish) wordt als customer tags gesynchroniseerd met je e-mailtool, zodat elke campagne na de quiz gepersonaliseerd kan zijn in plaats van generiek.",
    ],
    demo: {
      label: "Probeer de foundationmatch-quiz",
      href: "https://productrecommendationquiz.com/pages/foundation-match?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_beauty",
      blurb: "Een op afbeeldingen gebaseerde tintmatch-quiz, live in onze demowinkel, met exacte matchresultaten.",
    },
    faqs: [
      {
        question: "Kan een beautyquiz foundationtinten matchen?",
        answer:
          "Ja. Vraag naar de ondertoon, de diepte en de finish, koppel elk antwoord aan de matchende tinten en sluit de rest uit. De resultatenpagina toont de exacte tintmatch met toevoegen aan winkelwagen.",
      },
      {
        question: "Ondersteunt het vragen met afbeeldingen?",
        answer:
          "Ja. Opties kunnen worden getoond als aanklikbare afbeeldingen, wat ideaal is voor vragen over tint, finish en stijl en de voltooiing op mobiel verbetert.",
      },
      {
        question: "Werkt het op WooCommerce of BigCommerce, niet alleen op Shopify?",
        answer:
          "Ja. RevenueHunt werkt native op Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace, en als zelfstandige gehoste quiz.",
      },
      {
        question: "Kan ik producten groeperen in één resultaat?",
        answer:
          "Ja. Gebruik de recommendation slots om voor elke productrol een plek te reserveren en een complete set of pack terug te geven, met toevoegen aan winkelwagen voor de hele routine.",
      },
    ],
    related: [
      { label: "Tintdetector-quiz", href: "/solutions/shade-finder/" },
      { label: "Skincare-quiz", href: "/solutions/skincare/" },
      { label: "Cadeauzoeker-quiz", href: "/solutions/gift-finder/" },
      { label: "Voor beautymerken", href: "/for-beauty-brands/" },
      { label: "Quiztemplates", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  supplements: {
    slug: "supplements",
    type: "vertical",
    name: "Supplementen",
    chip: "Branche",
    title: "Supplementenquiz: beveel de juiste stack aan",
    description:
      "Een supplementenquiz die gezondheidsdoelen omzet in een aanbevolen stack. Vertakt op dieet en beperkingen, synchroniseert doelen met Klaviyo. Gratis om te beginnen.",
    h1: "Supplementenquizzen die de juiste stack aanbevelen",
    heroSubtitle:
      "Kopers schaffen supplementen aan voor een doel, niet voor een SKU. Een quiz zet slapen, energie, immuniteit of focus om in een aanbevolen stack uit je catalogus.",
    intro: [
      "Wie supplementen koopt, denkt in doelen: beter slapen, meer energie, een betere darmgezondheid. Je catalogus is georganiseerd per product. Een supplementenquiz overbrugt die kloof door te vragen naar doelen, dieet en levensstijl, en vervolgens de stack aan te bevelen die past.",
      "RevenueHunt koppelt elk doel aan de juiste SKU's, beheert de dieetbeperkingen met uitsluitingen en geeft een stack van meerdere producten terug op een resultatenpagina met een korting op de eerste bestelling. De doelen van de koper worden als tags gesynchroniseerd met Klaviyo voor doorlopende, gesegmenteerde e-mail.",
    ],
    quizTypes: [
      {
        title: "Detector van gezondheidsdoelen",
        body: "Kopers kiezen hun doelen (slapen, energie, immuniteit, darmen, focus) en elk doel kent punten toe aan de matchende producten om een aanbevolen stack op te bouwen.",
      },
      {
        title: "Stackbouwer",
        body: "Reserveer een slot voor elke rol (basis, specifiek, prestatie) zodat elke koper vertrekt met een complete, coherente stack.",
      },
      {
        title: "Dieet- en beperkingenfilter",
        body: "Sluit producten uit die botsen met veganistisch, glutenvrij of andere beperkingen, zodat de resultaten automatisch het dieet van elke koper respecteren.",
      },
      {
        title: "Abonnement-onboarding",
        body: "Gebruik de quiz aan het begin van een abonnementsfunnel, leg de e-mail vast en koppel de resultatenpagina aan een abonneer-en-bespaar-aanbod.",
      },
    ],
    howItHelps: [
      "Voorwaardelijke logica houdt de quiz kort. Als een koper zegt geen dieetbeperkingen te hebben, slaat de quiz de beperkingsvragen volledig over, zodat niemand vragen beantwoordt die niet van toepassing zijn.",
      "Uitsluitingen beheren de harde beperkingen netjes. Een veganistische koper ziet nooit een niet-veganistisch product in zijn resultaten, ook al was het qua doelen een sterke match.",
      "Doelen zijn het waardevolste wat een supplementenmerk kan leren. Tags als goal:sleep of goal:gut synchroniseren met Klaviyo laat je lifecycle-e-mail draaien die echt aansluit op wat elke klant probeert te bereiken.",
    ],
    faqs: [
      {
        question: "Kan een supplementenquiz een stack van meerdere producten aanbevelen?",
        answer:
          "Ja. Elk doel kent punten toe aan de matchende producten, en de recommendation slots reserveren een plek voor elke rol, zodat de resultatenpagina een complete stack teruggeeft met toevoegen aan winkelwagen voor de set.",
      },
      {
        question: "Hoe gaat het om met veganistische of glutenvrije diëten?",
        answer:
          "Met uitsluitingen. Een dieetantwoord koppelen aan een uitsluitingslijst verwijdert elk conflicterend product uit de resultaten, hoe goed het ook scoorde op doelen.",
      },
      {
        question: "Kan ik een korting op de eerste bestelling toevoegen op de resultatenpagina?",
        answer:
          "Ja. De resultatenpagina ondersteunt een kortingscodeblok dat je kunt tonen aan nieuwe kopers of kunt koppelen aan specifieke antwoordcombinaties.",
      },
      {
        question: "Werkt het voor een abonnementsmerk?",
        answer:
          "Ja. Draai de quiz aan het begin van de funnel, leg de e-mail vast in Klaviyo en stuur de resultatenpagina naar een abonneer-en-bespaar-aanbod.",
      },
    ],
    related: [
      { label: "Packbouwer-quiz", href: "/solutions/bundle-builder/" },
      { label: "Fitness- en voedingsquiz", href: "/solutions/fitness/" },
      { label: "Begeleide-verkoopquiz", href: "/guided-selling-quiz/" },
      { label: "Quiztemplates", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  fashion: {
    slug: "fashion",
    type: "vertical",
    name: "Mode en kleding",
    chip: "Branche",
    title: "Stijlquiz voor mode en kleding voor e-commerce",
    description:
      "Een stijlquiz die de juiste pasvorm, snit en kleur uit je catalogus vindt en retouren vermindert. Gratis abonnement, multiplatform, meertalig.",
    h1: "Stijlquizzen die de juiste pasvorm en snit vinden",
    heroSubtitle:
      "Stijl is persoonlijk en pasvorm is riskant. Een modequiz leert de smaak en de maat van een koper kennen en beveelt vervolgens kledingstukken aan die hij waarschijnlijk houdt.",
    intro: [
      "Mode heeft het hoogste retourpercentage in e-commerce, en het meeste komt door mismatches in maat en stijl. Een stijlquiz vermindert beide door te vragen naar het lichaamstype, de pasvormvoorkeur, de gelegenheid en de smaak, en vervolgens kledingstukken aan te bevelen die de koper echt staan.",
      "RevenueHunt bouwt de quiz tegen je live catalogus, inclusief de varianten, zodat maat en kleur doorstromen tot op de resultatenpagina. Voor merken die in meerdere markten verkopen, kan een basisquiz worden vertaald en toegewezen per Shopify Market, met productnamen en prijzen die automatisch gelokaliseerd worden.",
    ],
    quizTypes: [
      {
        title: "Stijlprofiel-quiz",
        body: "Vragen over smaak, gelegenheid en kleur brengen de kledingstukken naar boven die passen bij de esthetiek van een koper in plaats van een generiek raster met nieuwe binnenkomers.",
      },
      {
        title: "Pasvorm- en maatdetector",
        body: "Vragen over lichaamstype en pasvormvoorkeur grenzen af tot de juiste snit en maat, en dat is waar de meeste kledingretouren beginnen.",
      },
      {
        title: "Capsule- of outfitbouwer",
        body: "Gebruik de recommendation slots om een gecoördineerde outfit of capsule samen te stellen in plaats van één enkel artikel.",
      },
      {
        title: "Gelegenheidsdetector",
        body: "Vertak op gelegenheid (werk, bruiloft, reizen) zodat elke koper een samengestelde selectie ziet voor het moment waarvoor hij koopt.",
      },
    ],
    howItHelps: [
      "Aanbevelen op pasvorm en smaak, niet alleen op populariteit, leidt kopers naar kledingstukken die ze waarschijnlijker houden, en dat is de meest directe hefboom die een modemerk op retouren heeft.",
      "Varianten stromen van begin tot eind door. Koppel de antwoorden aan specifieke maten en kleuren, en de resultatenpagina toont de juiste variant met toevoegen aan winkelwagen, zodat kopers niet terugkaatsen naar een productpagina om opnieuw te kiezen.",
      "Verkoop je in de hele EU of daarbuiten? Bouw een basisquiz, laat de AI Copilot hem vertalen, wijs elke versie toe aan zijn Shopify Market en de productgegevens worden automatisch gelokaliseerd. Geen vertaalwerk aan producten per taal.",
    ],
    faqs: [
      {
        question: "Kan een modequiz retouren verminderen?",
        answer:
          "Hij richt zich op de belangrijkste oorzaak van retouren door aan te bevelen op pasvorm en smaak in plaats van op populariteit. Antwoorden koppelen aan specifieke maten en kleuren leidt kopers naar kledingstukken die ze waarschijnlijker houden.",
      },
      {
        question: "Ondersteunt het productvarianten zoals maat en kleur?",
        answer:
          "Ja. Antwoorden kunnen aan specifieke varianten worden gekoppeld, en de resultatenpagina toont de matchende maat en kleur met directe toevoegen aan winkelwagen.",
      },
      {
        question: "Kan ik de quiz in meerdere talen draaien?",
        answer:
          "Ja. Bouw een basisquiz, vertaal hem met de AI Copilot en wijs elke versie toe aan zijn Shopify Market. Productnamen en prijzen worden automatisch gelokaliseerd via Shopify Markets.",
      },
      {
        question: "Op welke platforms werkt het?",
        answer:
          "Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace, en als zelfstandige gehoste quiz.",
      },
    ],
    related: [
      { label: "Maat- en pasvormdetector-quiz", href: "/solutions/size-finder/" },
      { label: "Cadeauzoeker-quiz", href: "/solutions/gift-finder/" },
      { label: "Quiztemplates", href: "/templates/" },
      { label: "Quiz voor Shopify", href: "/product-recommendation-quiz-shopify/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  coffee: {
    slug: "coffee",
    type: "vertical",
    name: "Koffie en thee",
    chip: "Branche",
    title: "Koffiequiz: koppel branding aan smaak",
    description:
      "Een smaakprofielquiz die kopers koppelt aan de juiste branding of blend en abonnees werft. Gratis abonnement, klaar voor Klaviyo en ReCharge.",
    h1: "Koffiequizzen die smaak koppelen aan de juiste branding",
    heroSubtitle:
      "Branding, herkomst, zetmethode, smaaknoten: een koffiequiz zet een verwarrend menu om in een zekere aanbeveling, en in een nieuwe abonnee.",
    intro: [
      "Koffie en thee draaien om smaak, en smaak is lastig te kopen vanuit een productlijst. Een korte smaakprofielquiz vraagt naar de brandingvoorkeur, de zetmethode en de smaaknoten, en beveelt vervolgens de blend aan waar de koper echt van zal genieten.",
      "RevenueHunt zet dit om in een funnel, niet alleen in een aanbeveling. Het legt de e-mail aan het begin vast, beveelt een startblend aan en koppelt de resultatenpagina aan een abonneer-en-bespaar-aanbod via ReCharge, met de branding- en zetvoorkeuren gesynchroniseerd met Klaviyo.",
    ],
    quizTypes: [
      {
        title: "Smaakprofiel-detector",
        body: "Een paar vragen over branding, body en smaaknoten koppelen elke koper aan de blend die past bij zijn gehemelte.",
      },
      {
        title: "Match op zetmethode",
        body: "Espresso, pour-over, Frenchpress of filter: vertak op methode zodat de maling en de blend passen bij hoe ze hun koffie echt zetten.",
      },
      {
        title: "Abonnement-onboarding",
        body: "Draai de quiz aan het begin van de funnel, beveel een startblend aan en bied abonneer-en-bespaar aan op de resultatenpagina.",
      },
      {
        title: "Detector van cadeau of proefpakket",
        body: "Help mensen die cadeaus kopen om een proefpakket of cadeauset te kiezen zonder de precieze smaak van de ontvanger te kennen.",
      },
    ],
    howItHelps: [
      "Een smaakprofiel is een geweldige reden om om een e-mail te vragen. Kopers delen graag hun branding- en zetvoorkeuren om een aanbeveling te krijgen, wat je lijst vult met voorgesegmenteerde abonnees.",
      "De resultatenpagina sluit de verkoop. Beveel de matchende blend aan, toon een abonneer-en-bespaar-aanbod gekoppeld aan ReCharge, en laat kopers toevoegen aan winkelwagen zonder de quiz te verlaten.",
      "Voorkeuren worden duurzame segmenten. Branding- en zetmethode-tags synchroniseren met Klaviyo betekent dat elke toekomstige campagne anders kan inspelen op iemand die donkergebrande espresso drinkt dan op iemand die lichtgebrande pour-over verkiest.",
    ],
    demo: {
      label: "Probeer de koffiequiz",
      href: "https://productrecommendationquiz.com/pages/coffee-quiz?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_coffee",
      blurb: "Een koffiequiz met smaakmatch, live in onze demowinkel.",
    },
    faqs: [
      {
        question: "Kan een koffiequiz een abonnement aanbevelen?",
        answer:
          "Ja. Leg de e-mail aan het begin vast, beveel een startblend aan en stuur de resultatenpagina naar een abonneer-en-bespaar-aanbod gekoppeld aan ReCharge.",
      },
      {
        question: "Matcht het op zetmethode?",
        answer:
          "Ja. Vertak op zetmethode zodat de maling en de blend specifiek passen bij wie espresso, pour-over, Frenchpress of filter drinkt.",
      },
      {
        question: "Laat het mijn e-maillijst groeien?",
        answer:
          "Ja. Het smaakprofiel is een sterke reden voor kopers om hun e-mail te delen, en de antwoorden worden gesynchroniseerd met Klaviyo, voorgesegmenteerd op branding- en zetvoorkeur.",
      },
      {
        question: "Werkt het voor thee of andere dranken?",
        answer:
          "Ja. Dezelfde smaakprofielaanpak werkt voor thee, wijn, sterke drank en elke catalogus die om smaak draait.",
      },
    ],
    related: [
      { label: "Packbouwer-quiz", href: "/solutions/bundle-builder/" },
      { label: "Cadeauzoeker-quiz", href: "/solutions/gift-finder/" },
      { label: "Quiztemplates", href: "/templates/" },
      { label: "Begeleide-verkoopquiz", href: "/guided-selling-quiz/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  fitness: {
    slug: "fitness",
    type: "vertical",
    name: "Fitness en voeding",
    chip: "Branche",
    title: "Fitnessquiz voor apparatuur, kleding en programma's",
    description:
      "Een fitnessquiz op basis van doelen die de juiste apparatuur, kleding of het juiste programma uit je catalogus aanbeveelt. Gratis abonnement, AI-bouwer, klaar voor Klaviyo.",
    h1: "Fitnessquizzen gebouwd rond het doel van de koper",
    heroSubtitle:
      "Kracht, uithoudingsvermogen, gewichtsverlies, herstel: een fitnessquiz zet een doel om in de juiste apparatuur, kleding, supplementen of het juiste programma.",
    intro: [
      "Wie fitness koopt, begint met een doel en een trainingsstijl, niet met een product. Een quiz op basis van doelen vraagt waaraan ze werken, hun ervaringsniveau en hoe ze trainen, en beveelt vervolgens de apparatuur, kleding of het programma aan dat past.",
      "RevenueHunt bouwt de funnel van begin tot eind: het beveelt de juiste producten uit je catalogus aan, legt het doel en het niveau van de koper vast als zero-party data, en volgt op via Klaviyo met content en aanbiedingen die aansluiten op waarvoor ze trainen.",
    ],
    quizTypes: [
      {
        title: "Detector op basis van doelen",
        body: "Kracht, uithoudingsvermogen, mobiliteit of gewichtsverlies: elk doel kent punten toe aan de matchende apparatuur, kleding of supplementen.",
      },
      {
        title: "Match op ervaringsniveau",
        body: "Vertak op beginner, gevorderd of expert zodat de aanbevelingen passen bij waar de koper echt staat.",
      },
      {
        title: "Programma- of plandetector",
        body: "Beveel het juiste trainingsprogramma of coachingniveau aan op basis van het doel, het schema en de toegang tot apparatuur.",
      },
      {
        title: "Kit- of packbouwer",
        body: "Stel een complete kit samen (kleding plus apparatuur plus supplement) met de recommendation slots voor een hogere gemiddelde orderwaarde.",
      },
    ],
    howItHelps: [
      "Het doel en het ervaringsniveau zijn de twee vragen die alles veranderen. Ze vanaf het begin stellen betekent dat een beginner die aan mobiliteit werkt nooit een gevorderd krachtproduct als hoofdresultaat ziet.",
      "Een complete kit verslaat één enkel artikel. Met de recommendation slots kun je kleding, apparatuur en een supplement samen teruggeven, wat de gemiddelde orderwaarde verhoogt zonder opdringerig te zijn.",
      "Het doel dat je vastlegt, stuurt alles aan wat na de verkoop komt. Doel- en niveau-tags synchroniseren met Klaviyo laat je trainingscontent en bijbestelherinneringen sturen die aansluiten op het echte programma van elke klant.",
    ],
    faqs: [
      {
        question: "Kan een fitnessquiz een programma aanbevelen, niet alleen producten?",
        answer:
          "Ja. Koppel de antwoorden aan een trainingsprogramma of een coachingniveau net zoals je producten koppelt, en de resultatenpagina kan het juiste plan aanbevelen op basis van het doel en het schema.",
      },
      {
        question: "Kan het een complete kit in één resultaat samenstellen?",
        answer:
          "Ja. De recommendation slots reserveren een plek voor elke rol (kleding, apparatuur, supplement) zodat kopers een complete kit krijgen met toevoegen aan winkelwagen voor de set.",
      },
      {
        question: "Hoe personaliseert het voor beginners versus gevorderden?",
        answer:
          "Vertak met voorwaardelijke logica op het ervaringsniveau, zodat beginners en gevorderde atleten verschillende vragen en verschillende aanbevelingen zien.",
      },
      {
        question: "Kan ik per e-mail opvolgen op basis van de doelen?",
        answer:
          "Ja. De doelen en het niveau worden gesynchroniseerd met Klaviyo, Mailchimp, Omnisend en meer als customer tags voor een e-mailopvolging die aansluit op het doel.",
      },
    ],
    related: [
      { label: "Supplementenquiz", href: "/solutions/supplements/" },
      { label: "Packbouwer-quiz", href: "/solutions/bundle-builder/" },
      { label: "Quiztemplates", href: "/templates/" },
      { label: "Begeleide-verkoopquiz", href: "/guided-selling-quiz/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "pet-products": {
    slug: "pet-products",
    type: "vertical",
    name: "Producten voor huisdieren",
    chip: "Branche",
    title: "Quiz voor huisdierproducten voor je winkel",
    description:
      "Een huisdierquiz die voeding, supplementen of accessoires aanbeveelt op soort, ras, leeftijd en allergieën. Uitsluitingen beheren de diëten. Gratis om te beginnen.",
    h1: "Huisdierquizzen die producten koppelen aan elk dier",
    heroSubtitle:
      "Soort, ras, leeftijd, activiteit, allergieën: een huisdierquiz zet die details om in de juiste voeding, het juiste supplement of accessoire, en respecteert elke dieetbeperking.",
    intro: [
      "Wie een huisdier heeft, koopt voor een dier, niet voor een categorie, en het juiste product hangt af van de soort, de grootte van het ras, de leeftijd en de allergieën. Een huisdierquiz verzamelt die details één keer en beveelt producten aan die op alle dimensies tegelijk passen.",
      "RevenueHunt neemt het lastige deel voor zijn rekening: uitsluitingen passen de allergie- en dieetregels netjes toe, de resultatenpagina beveelt de juiste formule of kit aan, en een resultatenmail vat de aanbeveling samen voor wie niet meteen koopt.",
    ],
    quizTypes: [
      {
        title: "Huisdiervoer-detector",
        body: "Soort, rasgrootte, leeftijd en activiteitsniveau worden gekoppeld aan de juiste formule, met de allergieën beheerd via uitsluitingen.",
      },
      {
        title: "Supplement- of gezondheidsmatch",
        body: "Beveel ondersteuning voor gewrichten, huid of spijsvertering aan op basis van de leeftijd en de opgegeven zorgen.",
      },
      {
        title: "Detector van accessoires en uitrusting",
        body: "Koppel tuigjes, manden of speelgoed aan de rasgrootte en het gedrag zodat baasjes meteen goed kiezen.",
      },
      {
        title: "Starterkit voor nieuwe baasjes",
        body: "Stel een complete starterkit samen voor nieuwe huisdierbaasjes met de recommendation slots.",
      },
    ],
    howItHelps: [
      "Allergieën zijn een harde beperking, en uitsluitingen passen ze perfect toe. Een kippenallergie aanvinken verwijdert alle kipgebaseerde formules uit de resultaten, ook die welke goed scoorden op ras en leeftijd.",
      "Een customer tag als baasje-van-kleine-hond is goud waard voor retentie. Hem synchroniseren met Klaviyo laat je rasrelevante content, bijbestelherinneringen en aanbiedingen sturen die echt bij het dier passen.",
      "Resultatenmails vangen de kopers die terugkaatsen. Baasjes doen vaak onderzoek voordat ze kopen, dus een automatische e-mail die de aanbeveling samenvat haalt ze terug om de aankoop af te ronden.",
    ],
    demo: {
      label: "Probeer de hondenvoer-detector",
      href: "https://productrecommendationquiz.com/pages/dog-food?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_pet_products",
      blurb: "Een hondenvoer-detector met meerdere attributen, live in onze demowinkel.",
    },
    faqs: [
      {
        question: "Hoe gaat een huisdierquiz om met allergieën?",
        answer:
          "Met uitsluitingen. Een allergie-antwoord koppelen aan een uitsluitingslijst verwijdert alle conflicterende producten uit de resultaten, hoe goed ze ook matchten op andere vragen.",
      },
      {
        question: "Kan het matchen op ras en leeftijd?",
        answer:
          "Ja. Elk antwoord (soort, rasgrootte, leeftijd, activiteitsniveau) kent punten toe aan de matchende producten, zodat de aanbevelingen passen bij het specifieke dier.",
      },
      {
        question: "Kan ik de aanbeveling per e-mail sturen als ze niet kopen?",
        answer:
          "Ja. Resultatenmails vatten de aanbeveling automatisch samen, wat handig is voor baasjes die onderzoek doen voordat ze kopen.",
      },
      {
        question: "Segmenteert het klanten voor marketing?",
        answer:
          "Ja. Customer tags als baasje-van-kleine-hond worden gesynchroniseerd met Klaviyo en andere tools voor gerichte, dierrelevante campagnes.",
      },
    ],
    related: [
      { label: "Packbouwer-quiz", href: "/solutions/bundle-builder/" },
      { label: "Productzoeker-quiz", href: "/product-finder-quiz/" },
      { label: "Quiztemplates", href: "/templates/" },
      { label: "Quiz voor WooCommerce", href: "/product-recommendation-quiz-woocommerce/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  cbd: {
    slug: "cbd",
    type: "vertical",
    name: "CBD en wellness",
    chip: "Branche",
    title: "CBD-productzoeker-quiz voor je winkel",
    description:
      "Een CBD-quiz die kopers naar het juiste formaat en de juiste sterkte leidt op basis van het doel en de ervaring. Voedt op terwijl het verkoopt. Gratis abonnement, multiplatform.",
    h1: "CBD-quizzen die kopers naar het juiste formaat leiden",
    heroSubtitle:
      "Het formaat, de sterkte en het doel verwarren de meeste mensen die CBD kopen. Een quiz leert terwijl het verkoopt en beveelt met vertrouwen het juiste product aan.",
    intro: [
      "CBD en wellness zijn categorieën waar de meeste kopers oprecht niet weten wat ze moeten kopen: olie of gummy, welke sterkte, voor welk doel. Een quiz zet die onzekerheid om in een heldere aanbeveling door te vragen naar het doel, het ervaringsniveau en de formaatvoorkeur.",
      "RevenueHunt is gemaakt voor kopers die nieuw zijn in de categorie zoals deze. De quiz voedt op terwijl hij vraagt, beveelt het juiste formaat en de juiste sterkte uit je catalogus aan, en legt de doelen vast als zero-party data die je bezit en waaraan je marketing kunt doen.",
    ],
    quizTypes: [
      {
        title: "Detector op basis van doelen",
        body: "Slaap, kalmte, herstel of focus: elk doel kent punten toe aan de matchende producten en sterktes.",
      },
      {
        title: "Match op formaat en sterkte",
        body: "Vertak op ervaring en formaatvoorkeur (olie, gummy, topicaal, capsule) zodat beginners een toegankelijk startpunt krijgen.",
      },
      {
        title: "Routine- of regimebouwer",
        body: "Beveel een dag- en nachtcombinatie aan met de recommendation slots voor een complete routine.",
      },
      {
        title: "Quiz die eerst opvoedt",
        body: "Gebruik tekstslides tussen de vragen om de basis uit te leggen, wat vertrouwen en zekerheid opbouwt voorafgaand aan de aanbeveling.",
      },
    ],
    howItHelps: [
      "Kopers die nieuw zijn in de categorie hebben opvoeding nodig, niet alleen filtering. Met tekstslides kun je de sterkte en het formaat in eenvoudige taal uitleggen naarmate de koper vordert, zodat de aanbeveling met vertrouwen aankomt.",
      "Het ervaringsniveau matchen met de sterkte beschermt de ervaring. Een beginner krijgt een toegankelijk startpunt in plaats van het sterkste product, wat minder retouren door teleurstelling betekent.",
      "De doelen die je in de quiz vastlegt, worden je nuttigste segmenten. goal:sleep of goal:recovery synchroniseren met Klaviyo drijft e-mail aan die aansluit op wat elke klant echt probeert op te lossen.",
    ],
    demo: {
      label: "Probeer de CBD-productzoeker",
      href: "https://productrecommendationquiz.com/pages/cbd-product-finder?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_cbd",
      blurb: "Een CBD-productzoeker, live in onze demowinkel.",
    },
    faqs: [
      {
        question: "Kan een CBD-quiz de juiste sterkte aanbevelen?",
        answer:
          "Ja. Vertak op ervaringsniveau en doel, koppel daarna elke route aan de passende sterkte, zodat beginners en ervaren gebruikers verschillende aanbevelingen krijgen.",
      },
      {
        question: "Kan de quiz kopers opvoeden naarmate ze vorderen?",
        answer:
          "Ja. Tekstslides tonen tekst tussen de vragen zonder enige invoer te vereisen, zodat je de basis van het formaat en de sterkte geïntegreerd kunt uitleggen.",
      },
      {
        question: "Werkt het voor bredere wellnessproducten?",
        answer:
          "Ja. Dezelfde aanpak van doel en formaat werkt voor adaptogenen, paddenstoelen en andere wellnesscategorieën waar kopers begeleiding nodig hebben.",
      },
      {
        question: "Welke platforms ondersteunt het?",
        answer:
          "Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace, en als zelfstandige gehoste quiz.",
      },
    ],
    related: [
      { label: "Supplementenquiz", href: "/solutions/supplements/" },
      { label: "Routinebouwer-quiz", href: "/solutions/routine-builder/" },
      { label: "Productzoeker-quiz", href: "/product-finder-quiz/" },
      { label: "Quiztemplates", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  jewelry: {
    slug: "jewelry",
    type: "vertical",
    name: "Sieraden en accessoires",
    chip: "Branche",
    title: "Sieradenquiz: help het juiste stuk vinden",
    description:
      "Een sieradenquiz die stijl, metaal en gelegenheid koppelt aan het juiste stuk, en mensen die cadeaus kopen helpt met vertrouwen te kiezen. Gratis om te beginnen.",
    h1: "Sieradenquizzen die stijl koppelen aan het juiste stuk",
    heroSubtitle:
      "Metaal, stijl, gelegenheid, budget: een sieradenquiz leidt kopers en wie cadeaus koopt naar een stuk waar ze van houden, in plaats van een eindeloos raster.",
    intro: [
      "Sieraden zijn emotioneel en vaak een cadeau, wat ze lastig te kopen maakt vanuit een raster. Een quiz vraagt naar de stijl, de metaalvoorkeur, de gelegenheid en het budget, en beveelt vervolgens matchende stukken aan, waarmee rondkijken een zekere keuze wordt.",
      "RevenueHunt beveelt echte stukken en varianten uit je catalogus aan, helpt wie cadeaus koopt zonder de smaak van de ontvanger te kennen, en legt de voorkeuren vast voor de opvolging. De resultatenpagina converteert met directe toevoegen aan winkelwagen en een optioneel cadeaubericht.",
    ],
    quizTypes: [
      {
        title: "Stijldetector",
        body: "Vragen over esthetiek, metaal en gelegenheid brengen de stukken naar boven die passen bij de smaak van een koper.",
      },
      {
        title: "Cadeauzoeker",
        body: "Vraag naar de ontvanger en de gelegenheid, beveel daarna een samengestelde selectie of een cadeauset aan voor wie koopt zonder de catalogus te kennen.",
      },
      {
        title: "Budgetbewuste match",
        body: "Neem het budget op in de aanbeveling zodat elke koper stukken binnen zijn bereik ziet.",
      },
      {
        title: "Verlovings- of mijlpaaldetector",
        body: "Begeleid aankopen met veel overweging zoals verlovings- of jubileumstukken met een gerichte, geruststellende flow.",
      },
    ],
    howItHelps: [
      "Wie cadeaus koopt, vormt een enorm deel van het sieradenverkeer en is het minst zeker van wat hij wil. Een quiz die naar de ontvanger vraagt in plaats van naar de catalogus zet die onzekerheid om in een zekere cadeauaankoop.",
      "Budget is een vraag die de meeste rasters negeren. Het opnemen in de aanbeveling betekent dat kopers stukken zien die ze echt kunnen kopen, wat de bounce vermindert en vertrouwen opbouwt.",
      "Voorkeuren en gelegenheden worden gesynchroniseerd met je e-mailtool, zodat je kunt opvolgen rond jubilea, bijbestellingen en bijpassende stukken met campagnes die persoonlijk aanvoelen.",
    ],
    faqs: [
      {
        question: "Kan een sieradenquiz helpen wie cadeaus koopt?",
        answer:
          "Ja. Vraag naar de ontvanger en de gelegenheid in plaats van naar de catalogus, beveel daarna een samengestelde selectie of een cadeauset aan, wat ideaal is voor wie koopt zonder precies te weten wat hij wil.",
      },
      {
        question: "Kan het rekening houden met het budget?",
        answer:
          "Ja. Voeg een budgetvraag toe en weeg of filter de aanbevelingen zodat kopers alleen stukken binnen hun bereik zien.",
      },
      {
        question: "Ondersteunt het varianten zoals metaal en maat?",
        answer:
          "Ja. Antwoorden kunnen aan specifieke varianten worden gekoppeld, zodat de resultatenpagina het juiste metaal en de juiste maat toont met toevoegen aan winkelwagen.",
      },
      {
        question: "Kan ik leads vastleggen voor de opvolging?",
        answer:
          "Ja. De quiz legt de e-mail en de voorkeuren vast als zero-party data en synchroniseert met Klaviyo en andere tools voor een opvolging op basis van de gelegenheid.",
      },
    ],
    related: [
      { label: "Cadeauzoeker-quiz", href: "/solutions/gift-finder/" },
      { label: "Mode- en kledingquiz", href: "/solutions/fashion/" },
      { label: "Quiztemplates", href: "/templates/" },
      { label: "Productzoeker-quiz", href: "/product-finder-quiz/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "home-goods": {
    slug: "home-goods",
    type: "vertical",
    name: "Wonen en decoratie",
    chip: "Branche",
    title: "Quiz voor woon- en decoratieproducten voor je winkel",
    description:
      "Een woon- en decoratiequiz die meubels en decoratie koppelt aan de ruimte en stijl van een koper. Vermindert retouren op volumineuze artikelen. Gratis om te beginnen.",
    h1: "Woonquizzen die producten koppelen aan de ruimte",
    heroSubtitle:
      "Stijl, kamer, formaat en budget: een woon- en decoratiequiz leidt kopers naar stukken die in hun ruimte passen, wat het belangrijkst is wanneer de artikelen volumineus zijn.",
    intro: [
      "Wonen en decoratie zijn van hoge overweging en duur om te retourneren. Kopers moeten weten dat een stuk in hun ruimte en stijl past voordat ze zich vastleggen. Een quiz vraagt naar de kamer, de stijl, de afmetingen en het budget, en beveelt vervolgens stukken aan die werken.",
      "RevenueHunt beveelt echte producten uit je catalogus aan, stelt gecoördineerde sets samen met de recommendation slots, en legt de stijlvoorkeuren vast voor de opvolging, zodat wie eenmaal een meubel koopt een terugkerende decoratieklant wordt.",
    ],
    quizTypes: [
      {
        title: "Stijldetector",
        body: "Vragen over esthetiek en kamer brengen meubels en decoratie naar boven die passen bij de smaak van een koper.",
      },
      {
        title: "Match op kamer of ruimte",
        body: "Neem het kamertype en de afmetingen op in de aanbevelingen zodat de stukken echt in de ruimte passen.",
      },
      {
        title: "Bouwer van gecoördineerde set",
        body: "Stel een bijpassende set samen (bank plus vloerkleed plus verlichting) met de recommendation slots voor een complete look.",
      },
      {
        title: "Budgetbewuste detector",
        body: "Neem het budget op zodat kopers stukken binnen hun bereik zien en minder terugkaatsen.",
      },
    ],
    howItHelps: [
      "Pasvorm en schaal drijven de retouren op volumineuze artikelen. Vragen naar de kamerafmetingen en stukken aanbevelen die werken vermindert de kostbare fouten die tot meubelretouren leiden.",
      "Een gecoördineerde set verhoogt de orderwaarde op natuurlijke wijze. Met de recommendation slots kun je een complete look voorstellen in plaats van één enkel stuk, wat perfect aansluit op decoratieaankopen.",
      "Stijlvoorkeuren zijn duurzaam. De esthetiek van een koper vastleggen en synchroniseren met je e-mailtool betekent dat seizoens- en nieuwe-collectiecampagnes op de smaak afgestemd kunnen worden in plaats van naar iedereen gelijk verzonden.",
    ],
    faqs: [
      {
        question: "Kan een woonquiz een gecoördineerde set aanbevelen?",
        answer:
          "Ja. De recommendation slots reserveren een plek voor elke rol (zitmeubel, vloerkleed, verlichting), zodat de resultatenpagina een complete, bijpassende set teruggeeft met toevoegen aan winkelwagen.",
      },
      {
        question: "Kan het rekening houden met de kamergrootte?",
        answer:
          "Ja. Voeg kamer- en afmetingvragen toe en koppel de antwoorden aan passende stukken, wat cruciaal is om retouren op grote artikelen te verminderen.",
      },
      {
        question: "Helpt het met het budget?",
        answer:
          "Ja. Neem een budgetvraag op zodat de aanbevelingen binnen het bereik van de koper blijven.",
      },
      {
        question: "Op welke platforms werkt het?",
        answer:
          "Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace, en als zelfstandige gehoste quiz.",
      },
    ],
    related: [
      { label: "Packbouwer-quiz", href: "/solutions/bundle-builder/" },
      { label: "Cadeauzoeker-quiz", href: "/solutions/gift-finder/" },
      { label: "Quiztemplates", href: "/templates/" },
      { label: "Begeleide-verkoopquiz", href: "/guided-selling-quiz/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  // ----------------------------------------------------------------- use-cases
  "gift-finder": {
    slug: "gift-finder",
    type: "use-case",
    name: "Cadeauzoeker",
    chip: "Type quiz",
    title: "Cadeauzoeker-quiz voor je webshop",
    description:
      "Een cadeauzoeker-quiz die naar de ontvanger vraagt en een samengesteld cadeau teruggeeft, en de AOV verhoogt voor wie koopt zonder de catalogus te kennen. Gratis om te beginnen.",
    h1: "Cadeauzoeker-quizzen die giswerk omzetten in een verkoop",
    heroSubtitle:
      "Wie cadeaus koopt, heeft geen mening over je catalogus en veel angst om verkeerd te kiezen. Een cadeauzoeker vraagt naar de ontvanger en beveelt het perfecte cadeau aan.",
    intro: [
      "Wie cadeaus koopt, is de koper die het makkelijkst te verliezen is en het makkelijkst te helpen. Ze kennen je producten niet en zijn bang verkeerd te kiezen. Een cadeauzoeker-quiz stelt drie tot vijf vragen over de ontvanger (relatie, leeftijd, interesses, budget) en geeft een samengesteld cadeau terug dat ze met vertrouwen kunnen kopen.",
      "RevenueHunt maakt van de cadeauzoeker een van de quiztypes die het beste converteren. Het groepeert meerdere producten in één cadeauresultaat voor een hogere orderwaarde, voegt een cadeaubericht en een korting toe op de resultatenpagina, en legt de e-mail van de koper vast voor de volgende gelegenheid.",
    ],
    quizTypes: [
      {
        title: "Detector gericht op de ontvanger",
        body: "Vraag naar de ontvanger (relatie, leeftijd, interesses) in plaats van naar de catalogus, zodat wie niets van je producten weet toch een geweldige match krijgt.",
      },
      {
        title: "Gelegenheidsdetector",
        body: "Vertak op gelegenheid (verjaardag, feestdagen, jubileum) zodat de aanbeveling past bij het moment.",
      },
      {
        title: "Cadeaupack-bouwer",
        body: "Combineer meerdere producten in één samengestelde cadeauset met de recommendation slots, wat de gemiddelde orderwaarde verhoogt.",
      },
    ],
    howItHelps: [
      "De truc zit hem in vragen naar de ontvanger, niet naar de catalogus. Een koper die drie vragen over zijn zus kan beantwoorden krijgt een zekere aanbeveling zonder ooit je productgamma te hoeven begrijpen.",
      "Cadeaupacks verhogen de orderwaarde zonder druk. Een samengestelde set teruggeven als één enkel resultaat voelt nuttig, niet opdringerig, en kopers schaffen graag de hele set aan.",
      "Elke cadeaukoper is een toekomstige klant. Zijn e-mail en de gelegenheid vastleggen laat je hem op de volgende verjaardag of feestdag terughalen met een voorsprong op de aanbeveling.",
    ],
    faqs: [
      {
        question: "Hoe werkt een cadeauzoeker-quiz?",
        answer:
          "Hij stelt drie tot vijf vragen over de ontvanger en de gelegenheid, beveelt daarna een samengesteld cadeau of een cadeauset aan, zodat wie je catalogus niet kent toch met vertrouwen kan kiezen.",
      },
      {
        question: "Kan het producten groeperen in één cadeau?",
        answer:
          "Ja. De recommendation slots combineren meerdere producten in één samengestelde cadeauset, wat de gemiddelde orderwaarde verhoogt.",
      },
      {
        question: "Kan ik een korting of een cadeaubericht toevoegen?",
        answer:
          "Ja. De resultatenpagina ondersteunt kortingscode- en contentblokken die je kunt tonen op basis van de antwoorden van de koper.",
      },
      {
        question: "Legt het leads vast voor toekomstige gelegenheden?",
        answer:
          "Ja. De quiz legt de e-mail en de gelegenheid vast, die worden gesynchroniseerd met Klaviyo en andere tools zodat je ze kunt heractiveren vóór het volgende cadeaumoment.",
      },
    ],
    related: [
      { label: "Sieradenquiz", href: "/solutions/jewelry/" },
      { label: "Beauty- en cosmeticaquiz", href: "/solutions/beauty/" },
      { label: "Productzoeker-quiz", href: "/product-finder-quiz/" },
      { label: "Quiztemplates", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "size-finder": {
    slug: "size-finder",
    type: "use-case",
    name: "Maat- en pasvormdetector",
    chip: "Type quiz",
    title: "Maat- en pasvormdetector-quiz voor e-commerce",
    description:
      "Een maat- en pasvormdetector-quiz die de juiste maat of het compatibele product aanbeveelt en retouren vermindert. Lost de pasvorm met meerdere attributen op. Gratis om te beginnen.",
    h1: "Maat- en pasvormdetector-quizzen die retouren verminderen",
    heroSubtitle:
      "De verkeerde maat is de retour nummer één. Een pasvormdetector stelt de juiste vragen en beveelt de maat of het compatibele product aan dat past.",
    intro: [
      "Pasvorm en compatibiliteit zijn waar e-commerce geld verliest: retouren door de verkeerde maat bij kleding en schoenen, en retouren door de verkeerde pasvorm bij alles wat moet passen bij iets wat de koper al bezit. Een pasvormdetector-quiz lost die beperkingen op vóór de bestelling, niet erna.",
      "RevenueHunt beheert de pasvorm met meerdere attributen netjes. Het koppelt de antwoorden aan specifieke varianten en gebruikt uitsluitingen voor de harde beperkingen, zodat de maten en eisen van een koper worden opgelost in een juiste maat of een compatibel product op de resultatenpagina.",
    ],
    quizTypes: [
      {
        title: "Maatdetector",
        body: "Vragen over maten en pasvormvoorkeur grenzen af tot de juiste maat, wat de meest voorkomende oorzaak van retouren is.",
      },
      {
        title: "Compatibiliteitsdetector",
        body: "Lost beperkingen met meerdere attributen op (apparaatmodel, type vatting, accessoire) tot het enige product dat past.",
      },
      {
        title: "Match op pasvormvoorkeur",
        body: "Vertak op pasvormvoorkeur (slim, regular, ruim) zodat de aanbeveling past bij hoe de koper het graag draagt.",
      },
    ],
    howItHelps: [
      "Retouren door de verkeerde maat zijn de grootste kost die een pasvormdetector aanpakt. Vanaf het begin vragen naar de maten en de pasvormvoorkeur en ze koppelen aan specifieke varianten leidt kopers naar de maat die ze zullen houden.",
      "Compatibiliteit is niets meer dan beperkingen, en uitsluitingen beheren ze perfect. Een koper die zijn apparaat en zijn eisen opgeeft, krijgt precies het compatibele product, met alles wat niet past verwijderd.",
      "Vertrouwen converteert. Wanneer de quiz een koper vertelt dit is jouw maat met een duidelijke reden, voegt hij toe aan winkelwagen in plaats van terug te kaatsen naar een maattabel en nooit meer terug te komen.",
    ],
    demo: {
      label: "Probeer de compatibiliteitsdetector",
      href: "https://productrecommendationquiz.com/pages/bicycle-quiz?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_size_finder",
      blurb: "Een detector in compatibiliteitsstijl, live in onze demowinkel, die een technische match oplost.",
    },
    faqs: [
      {
        question: "Kan een pasvormdetector retouren door de verkeerde maat verminderen?",
        answer:
          "Ja. Vragen naar de maten en de pasvormvoorkeur en de antwoorden koppelen aan specifieke varianten beveelt de maat aan die een koper het waarschijnlijkst houdt, wat de retouren direct vermindert.",
      },
      {
        question: "Hoe gaat het om met compatibiliteit?",
        answer:
          "Met uitsluitingen en variantkoppeling. Een koper geeft zijn beperkingen op (apparaat, vatting, accessoire) en de quiz geeft alleen het compatibele product terug, en verwijdert alles wat niet past.",
      },
      {
        question: "Werkt het voor schoenen en kleding?",
        answer:
          "Ja. Maat- en pasvormdetectoren behoren tot de sterkste use-cases voor kleding, schoenen en alles waar de pasvorm de retouren drijft.",
      },
      {
        question: "Kunnen de resultaten de aanbeveling uitleggen?",
        answer:
          "Ja. De contentblokken op de resultatenpagina kunnen specifieke tekst tonen op basis van de antwoorden, zodat je kunt uitleggen waarom een bepaalde maat of een bepaald product de juiste pasvorm is.",
      },
    ],
    related: [
      { label: "Mode- en kledingquiz", href: "/solutions/fashion/" },
      { label: "Productzoeker-quiz", href: "/product-finder-quiz/" },
      { label: "Quiztemplates", href: "/templates/" },
      { label: "Quiz voor Shopify", href: "/product-recommendation-quiz-shopify/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "shade-finder": {
    slug: "shade-finder",
    type: "use-case",
    name: "Tintmatch",
    chip: "Type quiz",
    title: "Tintdetector-quiz: match foundation en kleur",
    description:
      "Een tintdetector-quiz die foundation, concealer of kleur matcht op ondertoon en diepte, met antwoorden met afbeeldingen. Vermindert retouren. Gratis om te beginnen.",
    h1: "Tintdetector-quizzen die de kleur met vertrouwen matchen",
    heroSubtitle:
      "Make-up online kopen betekent je tint gokken. Een tintdetector vraagt naar de ondertoon en de diepte en geeft de exacte match terug, wat de retouren vermindert.",
    intro: [
      "De tintmatch is de vraag met het hoogste risico in beauty-e-commerce. Verkeerd raden en het product gaat terug. Een tintdetector-quiz vraagt naar de ondertoon, de diepte, de dekking en de finish, en beveelt vervolgens de exacte tint uit je catalogus aan met antwoorden met afbeeldingen die snel zijn op mobiel.",
      "RevenueHunt koppelt elk antwoord aan specifieke tintvarianten en sluit de rest uit, zodat de resultatenpagina een zekere match toont in plaats van een muur van swatches. Het tintprofiel van de koper wordt gesynchroniseerd met je e-mailtool voor bijbestellingen en bijpassende producten.",
    ],
    quizTypes: [
      {
        title: "Foundationtint-match",
        body: "Vragen over ondertoon en diepte worden gekoppeld aan de exacte tint foundation of concealer, met antwoorden met afbeeldingen voor meer snelheid.",
      },
      {
        title: "Lip- of kleurmatch",
        body: "Koppel de lipkleur, blush of oogkleur aan de teint en de voorkeur van een koper.",
      },
      {
        title: "Haarkleurmatch",
        body: "Begeleid het thuis kleuren van haar op basis van de huidige tint, de doeltint en de ondertoon naar de juiste formule.",
      },
    ],
    howItHelps: [
      "Antwoorden met afbeeldingen ondersteunen de tintvragen. Kopers laten tikken op een afbeelding van een ondertoon of finish verslaat ze vragen het te beschrijven, en houdt de voltooiing hoog op de mobiele schermen waar beauty wordt verkocht.",
      "Uitsluitingen veranderen een muur van swatches in één antwoord. De ondertoon en de diepte koppelen aan specifieke varianten en de rest uitsluiten betekent dat de resultatenpagina de match toont, niet het hele gamma.",
      "De tint is een profiel dat het waard is om te bewaren. De matchende tint van een koper synchroniseren met Klaviyo laat je marketing doen voor bijbestellingen en gecoördineerde producten naar precies de juiste mensen.",
    ],
    demo: {
      label: "Probeer de tintmatch-quiz",
      href: "https://productrecommendationquiz.com/pages/foundation-match?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_shade_finder",
      blurb: "Een op afbeeldingen gebaseerde foundationtint-match-quiz, live in onze demowinkel.",
    },
    faqs: [
      {
        question: "Hoe matcht een tintdetector de foundation?",
        answer:
          "Hij vraagt naar de ondertoon, de diepte, de dekking en de finish, koppelt elk antwoord aan de matchende tintvarianten en sluit de rest uit. De resultatenpagina toont de exacte match met toevoegen aan winkelwagen.",
      },
      {
        question: "Gebruikt het antwoorden met afbeeldingen?",
        answer:
          "Ja. Opties kunnen aanklikbare afbeeldingen zijn, wat ideaal is voor vragen over ondertoon en finish en de voltooiing op mobiel verbetert.",
      },
      {
        question: "Kan het tintgerelateerde retouren verminderen?",
        answer:
          "Ja. Een zekere match aanbevelen in plaats van een muur van swatches leidt kopers naar de tint die ze het waarschijnlijkst houden.",
      },
      {
        question: "Werkt het verder dan foundation?",
        answer:
          "Ja. Dezelfde aanpak matcht lipkleur, blush, oogkleur en het thuis kleuren van haar.",
      },
    ],
    related: [
      { label: "Beauty- en cosmeticaquiz", href: "/solutions/beauty/" },
      { label: "Skincare-quiz", href: "/solutions/skincare/" },
      { label: "Voor beautymerken", href: "/for-beauty-brands/" },
      { label: "Quiztemplates", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "routine-builder": {
    slug: "routine-builder",
    type: "use-case",
    name: "Routinebouwer",
    chip: "Type quiz",
    title: "Routinebouwer-quiz voor skincare en meer",
    description:
      "Een routinebouwer-quiz die een complete routine van meerdere stappen teruggeeft, niet één enkel product, met de recommendation slots. Verhoogt de AOV. Gratis om te beginnen.",
    h1: "Routinebouwer-quizzen die de complete set verkopen",
    heroSubtitle:
      "Eén product is een verkoop. Een routine is een winkelwagen en een gewoonte. Een routinebouwer geeft een complete set van meerdere stappen terug op maat van elke koper.",
    intro: [
      "Sommige producten worden gekocht als een systeem, niet als één enkel artikel: een skincare-routine, een supplementenstack, een haarregime. Een routinebouwer-quiz geeft de hele set terug, met een plek gereserveerd voor elke stap, zodat kopers de complete routine aanschaffen in plaats van één product.",
      "RevenueHunt doet dit met de recommendation slots. Reserveer een slot voor elke rol (reiniger, behandeling, hydratatie, SPF, of wat je categorie nodig heeft) en de quiz vult elk in met de beste match, en toont vervolgens de complete routine gegroepeerd per stap met toevoegen aan winkelwagen voor de set.",
    ],
    quizTypes: [
      {
        title: "Routine op basis van stappen",
        body: "Reserveer een slot voor elke stap en vul hem met het best matchende product, zodat elke koper een complete, coherente routine krijgt.",
      },
      {
        title: "Stackbouwer",
        body: "Stel een stack van meerdere producten samen (ideaal voor supplementen en wellness) met een rol voor elk product.",
      },
      {
        title: "Dag- en nachtroutine",
        body: "Geef gescheiden AM- en PM-routines terug uit één quiz met weergavelogica op de resultatenpagina.",
      },
    ],
    howItHelps: [
      "De recommendation slots zijn het verschil tussen een verkoop en een winkelwagen. Een plek reserveren voor elke stap betekent dat de resultatenpagina een complete routine teruggeeft, wat de orderwaarde verhoogt zonder als een upsell aan te voelen.",
      "Groeperen per stap geeft de routine betekenis. Kopers zien precies wat ze moeten gebruiken en wanneer, wat vertrouwen opbouwt in de aankoop en de gewoonte die ze terugbrengt.",
      "Een routine is een retentiemotor. De set die je aanbeveelt vertelt je waar elke klant zonder zal komen te zitten en wanneer, zodat je e-mailopvolging de bijbestelaanbiedingen nauwkeurig kan timen.",
    ],
    faqs: [
      {
        question: "Hoe geeft een routinebouwer een complete set terug?",
        answer:
          "Met recommendation slots. Elk slot wordt gereserveerd voor een rol (bijvoorbeeld reiniger, behandeling, hydratatie, SPF) en gevuld met het best matchende product, zodat de resultatenpagina een complete routine teruggeeft.",
      },
      {
        question: "Kan het een gescheiden dag- en nachtroutine tonen?",
        answer:
          "Ja. Gebruik weergavelogica op de resultatenpagina om AM- en PM-routines te tonen, of welke voorwaardelijke groepering ook, op basis van de antwoorden van de koper.",
      },
      {
        question: "Verhoogt het de gemiddelde orderwaarde?",
        answer:
          "Een complete set aanbevelen in plaats van één enkel product geeft kopers een reden om de hele routine te kopen, wat de orderwaarde verhoogt.",
      },
      {
        question: "Welke categorieën passen bij een routinebouwer?",
        answer:
          "Skincare, haarverzorging, supplementen, en elke catalogus die wordt gekocht als een systeem van meerdere stappen in plaats van één enkel artikel.",
      },
    ],
    related: [
      { label: "Skincare-quiz", href: "/solutions/skincare/" },
      { label: "Supplementenquiz", href: "/solutions/supplements/" },
      { label: "Packbouwer-quiz", href: "/solutions/bundle-builder/" },
      { label: "Quiztemplates", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "bundle-builder": {
    slug: "bundle-builder",
    type: "use-case",
    name: "Packbouwer",
    chip: "Type quiz",
    title: "Packbouwer-quiz: verkoop samengestelde sets",
    description:
      "Een packbouwer-quiz die een samengestelde set samenstelt uit de antwoorden van een koper en de gemiddelde orderwaarde verhoogt. Toevoegen aan winkelwagen voor het hele pack. Gratis.",
    h1: "Packbouwer-quizzen die de orderwaarde verhogen",
    heroSubtitle:
      "Een samengestelde pack converteert beter dan één enkel product en een generieke upsell. Een packbouwer stelt de set samen uit de antwoorden van elke koper.",
    intro: [
      "Packs werken, maar alleen als ze relevant zijn. Een generieke drie-voor-twee-upsell negeert wat de koper echt wil. Een packbouwer-quiz stelt een samengestelde set samen uit de antwoorden van elke koper, zodat het pack persoonlijk aanvoelt en de orderwaarde op natuurlijke wijze binnenkomt.",
      "RevenueHunt bouwt packs met recommendation slots en voorwaardelijke resultaten. Reserveer een rol voor elk product in de set, match elk met de koper, en presenteer het complete pack op de resultatenpagina met toevoegen aan winkelwagen voor alles tegelijk.",
    ],
    quizTypes: [
      {
        title: "Bouwer van samengestelde set",
        body: "Reserveer een rol voor elk product in het pack en vul elk met de beste match, zodat de set past bij de koper in plaats van de catalogus.",
      },
      {
        title: "Starterkit-detector",
        body: "Stel een complete starterkit samen voor nieuwe kopers of wie nieuw is in de categorie en een zekere aankoop wil.",
      },
      {
        title: "Pack op jouw maat",
        body: "Laat de antwoorden een flexibel pack aansturen, met weergavelogica die artikelen toevoegt of weghaalt op basis van wat de koper kiest.",
      },
    ],
    howItHelps: [
      "Een relevant pack verslaat een generiek pack. Elk artikel in de set matchen met de antwoorden van de koper betekent dat het pack zich laat lezen als een aanbeveling, niet als een kortingstactiek, en daardoor converteert.",
      "Eén enkele toevoegen aan winkelwagen voor de hele set elimineert de frictie. Kopers schaffen het pack aan in één actie in plaats van elk artikel te zoeken, wat de hogere orderwaarde beschermt die je net hebt opgebouwd.",
      "Kortingsblokken zorgen dat het pack aankomt. Toon een setkorting op de resultatenpagina gekoppeld aan de specifieke combinatie, zodat de besparing verdiend aanvoelt en de koper de aankoop afrondt.",
    ],
    faqs: [
      {
        question: "Hoe werkt een packbouwer-quiz?",
        answer:
          "Hij reserveert een rol voor elk product in het pack, matcht elk met de antwoorden van de koper, en presenteert de complete samengestelde set op de resultatenpagina met toevoegen aan winkelwagen voor alles tegelijk.",
      },
      {
        question: "Kan ik een packkorting toevoegen?",
        answer:
          "Ja. De resultatenpagina ondersteunt kortingscodeblokken die je kunt koppelen aan specifieke antwoordcombinaties, zodat de packbesparing in context wordt getoond.",
      },
      {
        question: "Verhoogt het de gemiddelde orderwaarde?",
        answer:
          "Een relevante, samengestelde set aanbevelen in plaats van één enkel product geeft kopers een reden om meer te kopen, wat de orderwaarde verhoogt.",
      },
      {
        question: "Welke categorieën passen erbij?",
        answer:
          "Supplementen, beauty, eten en drinken, wonen, en elke catalogus waar een samengestelde set beter verkoopt dan één enkel artikel.",
      },
    ],
    related: [
      { label: "Routinebouwer-quiz", href: "/solutions/routine-builder/" },
      { label: "Cadeauzoeker-quiz", href: "/solutions/gift-finder/" },
      { label: "Supplementenquiz", href: "/solutions/supplements/" },
      { label: "Quiztemplates", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },
};
