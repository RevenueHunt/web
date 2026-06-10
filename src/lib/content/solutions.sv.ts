import type { Solution } from "../solutions";

const VERIFIED = "2026-06-07";

export const SOLUTIONS_SV: Record<string, Solution> = {
  // ----------------------------------------------------------------- verticals
  skincare: {
    slug: "skincare",
    type: "vertical",
    name: "Hudvård",
    chip: "Bransch",
    title: "Hudvårdsquiz för Shopify och WooCommerce",
    description:
      "Skapa ett hudvårdsquiz som upptäcker hudtyp och bekymmer, och rekommenderar sedan rätt rutin. Gratisplan, AI-byggare, live samma dag.",
    h1: "Hudvårdsquiz som förvandlar surfare till en rutin",
    heroSubtitle:
      "De flesta som handlar hudvård för första gången vet inte vilka produkter som passar dem. Ett quiz ställer rätt frågor och returnerar en personlig rutin de kan lägga i varukorgen.",
    intro: [
      "Hudvård är den svåraste kategorin att handla kall. Köpare kommer med ett bekymmer, inte en produkt i åtanke, och en mur av rengöringar, serum och SPF hjälper dem inte att välja. Ett hudvårdsquiz ersätter den muren med ett kort, guidat samtal: in kommer hudtyp, huvudbekymmer, känsligheter och budget, och ut kommer en personlig rutin.",
      "RevenueHunt används av över 20 000 varumärken för att göra exakt detta. Det matchar varje svar mot riktiga produkter i din katalog, grupperar resultatet efter rutinsteg (rengöring, behandling, fuktkräm, SPF) och fångar köparens hudprofil som zero-party-data som du kan synkronisera med Klaviyo.",
    ],
    quizTypes: [
      {
        title: "Hudtypsdetektor",
        body: "Fem till sju frågor om hudtyp, bekymmer och mål returnerar en skräddarsydd rutin. Det klassiska hudvårdsquizet, och utgångspunkten som konverterar bäst.",
      },
      {
        title: "Rutinbyggare",
        body: "Använd recommendation slots för att reservera en plats för varje steg, så att varje köpare får en komplett rutin med 3 eller 5 steg i stället för en enda produkt.",
      },
      {
        title: "Bekymmersfokuserat quiz",
        body: "Börja med problemet (akne, åldrande, torrhet, känslighet) och förgrena med villkorlig logik så att varje köpare bara ser de frågor som är relevanta för dem.",
      },
      {
        title: "Matchning efter ingrediens eller känslighet",
        body: "Uteslut produkter som krockar med en deklarerad allergi eller känslighet, så att en köpare som markerar parfymfritt aldrig ser en parfymerad produkt i sina resultat.",
      },
    ],
    howItHelps: [
      "Rekommendationsmotorn rangordnar produkter efter de svar som spelar störst roll. Den ger ett måste-ha-bekymmer mer vikt än ett önskvärt, och utesluter allt köparen väljer bort, så att resultatsidan verkligen är skräddarsydd i stället för en generisk karusell av bästsäljare.",
      "Varje svar är zero-party-data. En köpare som berättar att deras hud är torr och känslig och att de bryr sig om antiåldrande är ett segment du kan marknadsföra till i åratal. RevenueHunt synkroniserar den profilen och customer tags med Klaviyo, Mailchimp, Omnisend och mer.",
      "Skapa det på minuter, inte veckor. Börja från en hudvårdsmall, eller beskriv din butik för AI Quiz Copilot så strukturerar den frågorna, logiken och produktmatchningarna på runt 60 sekunder. Publicera det sedan som popup, embed eller landningssida i helsida.",
    ],
    demo: {
      label: "Testa hudtypsquizet",
      href: "https://productrecommendationquiz.com/pages/skin-type-quiz?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_skincare",
      blurb: "Ett levande hudvårdsquiz i vår demobutik. Svara på några frågor och se rutinen det returnerar.",
    },
    faqs: [
      {
        question: "Hur många frågor bör ett hudvårdsquiz ha?",
        answer:
          "Fem till sju synliga frågor fungerar för de flesta varumärken. Använd villkorlig logik för att hoppa över frågor som inte gäller, så att en köpare utan känsligheter aldrig ser allergisteget.",
      },
      {
        question: "Kan quizet rekommendera en komplett rutin, inte bara en produkt?",
        answer:
          "Ja. Recommendation slots reserverar en plats för varje rutinsteg (rengöring, behandling, fuktkräm, SPF), så att varje köpare får en komplett rutin med lägg-i-varukorg för hela setet.",
      },
      {
        question: "Fungerar det för känslig hud och allergier?",
        answer:
          "Ja. Varje svar kan utesluta produkter, så att markera en allergi eller känslighet tar bort alla produkter i konflikt från resultaten, även om de annars var en stark matchning.",
      },
      {
        question: "Kan jag fånga email och skicka rutinen till Klaviyo?",
        answer:
          "Ja. Quizet fångar emailen och hela hudprofilen som zero-party-data, och synkroniserar svaren och customer tags med Klaviyo, Mailchimp, Omnisend, HubSpot och mer.",
      },
    ],
    related: [
      { label: "Mallar för hudvårdsquiz", href: "/templates/" },
      { label: "Rutinbyggarquiz", href: "/solutions/routine-builder/" },
      { label: "Nyansdetektorquiz", href: "/solutions/shade-finder/" },
      { label: "För skönhetsvarumärken", href: "/for-beauty-brands/" },
      { label: "Quiz för Shopify", href: "/product-recommendation-quiz-shopify/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  beauty: {
    slug: "beauty",
    type: "vertical",
    name: "Skönhet och kosmetik",
    chip: "Bransch",
    title: "Quiz för skönhet och kosmetik för din butik",
    description:
      "Ett skönhetsquiz som matchar nyans, hittar rätt produkter och bygger en rutin från din katalog. Gratisplan, AI-byggare, multiplattform.",
    h1: "Skönhetsquiz som kopplar köpare till rätt produkt",
    heroSubtitle:
      "Foundationnyans, läppfärg, en komplett rutin: ett skönhetsquiz besvarar frågorna ett produktrutnät inte kan, och tar köpare till en personlig resultatsida.",
    intro: [
      "De som handlar skönhet möter två problem samtidigt: för mycket val och för mycket risk. Välj fel foundationnyans och den skickas tillbaka. Ett skönhetsquiz tar bort gissningarna genom att fråga efter underton, täckning, finish och bekymmer, och rekommenderar sedan de exakta produkter som passar.",
      "RevenueHunt driver skönhetsquiz för tusentals varumärken. Det hämtar riktiga produkter och varianter från din katalog, visar dem på en resultatsida med direkt lägg-i-varukorg, och fångar varje köpares skönhetsprofil som zero-party-data för segmenterad email-uppföljning.",
    ],
    quizTypes: [
      {
        title: "Nyansmatchare",
        body: "Frågor om underton, djup och finish matchas mot rätt nyans av foundation, concealer eller läppstift. Bildsvar gör det snabbt på mobil.",
      },
      {
        title: "Byggare för komplett rutin",
        body: "Rekommenderar ett komplett set (prep, foundation, färg, fixering) med recommendation slots, så att köpare köper rutinen i stället för en enda artikel.",
      },
      {
        title: "Quiz om hud- eller hårbekymmer",
        body: "Förgrenar efter bekymmer och hud- eller hårtyp så att resultatsidan talar till varje köpares specifika mål.",
      },
      {
        title: "Detektor för presentset eller startset",
        body: "Hjälper de som handlar presenter och nybörjare som inte känner katalogen genom att rekommendera ett startset eller ett kurerat paket.",
      },
    ],
    howItHelps: [
      "Nyans och passform är exakt där returer sker. Genom att fråga efter underton och täckning från början och utesluta allt som inte matchar tar quizet köpare till produkter de är mycket mer benägna att behålla.",
      "Bildfrågor låter köpare trycka på en bild i stället för att beskriva sig själva, vilket håller slutförandegraderna höga på mobil, där det mesta av skönhetstrafiken landar.",
      "Köparens profil (underton, hudtyp, favoritfinish) synkroniseras med ditt email-verktyg som customer tags, så att varje kampanj efter quizet kan personaliseras i stället för att vara generisk.",
    ],
    demo: {
      label: "Testa quizet för foundationmatchning",
      href: "https://productrecommendationquiz.com/pages/foundation-match?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_beauty",
      blurb: "Ett bildbaserat nyansmatchningsquiz live i vår demobutik, med resultat som är exakta matchningar.",
    },
    faqs: [
      {
        question: "Kan ett skönhetsquiz matcha foundationnyanser?",
        answer:
          "Ja. Det frågar efter underton, djup och finish, kopplar varje svar till de nyanser som matchar och utesluter resten. Resultatsidan visar den exakta nyansmatchningen med lägg-i-varukorg.",
      },
      {
        question: "Stöder det bildfrågor?",
        answer:
          "Ja. Alternativen kan visas som klickbara bilder, vilket är idealiskt för frågor om nyans, finish och stil och förbättrar slutförandet på mobil.",
      },
      {
        question: "Fungerar det på WooCommerce eller BigCommerce, inte bara Shopify?",
        answer:
          "Ja. RevenueHunt fungerar inbyggt på Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace och som fristående värdbaserat quiz.",
      },
      {
        question: "Kan jag gruppera produkter i ett enda resultat?",
        answer:
          "Ja. Använd recommendation slots för att reservera en plats för varje produktroll och returnera ett komplett set eller paket, med lägg-i-varukorg för hela rutinen.",
      },
    ],
    related: [
      { label: "Nyansdetektorquiz", href: "/solutions/shade-finder/" },
      { label: "Hudvårdsquiz", href: "/solutions/skincare/" },
      { label: "Presentfinnarquiz", href: "/solutions/gift-finder/" },
      { label: "För skönhetsvarumärken", href: "/for-beauty-brands/" },
      { label: "Quizmallar", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  supplements: {
    slug: "supplements",
    type: "vertical",
    name: "Kosttillskott",
    chip: "Bransch",
    title: "Kosttillskottsquiz: rekommendera rätt stack",
    description:
      "Ett kosttillskottsquiz som förvandlar hälsomål till en rekommenderad stack. Förgrenar efter kost och restriktioner, synkroniserar mål med Klaviyo. Gratis att börja.",
    h1: "Kosttillskottsquiz som rekommenderar rätt stack",
    heroSubtitle:
      "Köpare köper kosttillskott för ett mål, inte ett SKU. Ett quiz förvandlar sömn, energi, immunitet eller fokus till en rekommenderad stack från din katalog.",
    intro: [
      "De som handlar kosttillskott tänker i mål: sova bättre, mer energi, bättre tarmhälsa. Din katalog är organiserad efter produkt. Ett kosttillskottsquiz överbryggar den klyftan genom att fråga efter mål, kost och livsstil, och rekommenderar sedan den stack som passar.",
      "RevenueHunt matchar varje mål mot rätt SKU:er, hanterar kostrestriktioner med uteslutningar och returnerar en stack med flera produkter på en resultatsida med en rabatt på första beställningen. Köparens mål synkroniseras med Klaviyo som taggar för löpande, segmenterad email.",
    ],
    quizTypes: [
      {
        title: "Detektor för hälsomål",
        body: "Köpare väljer sina mål (sömn, energi, immunitet, tarm, fokus) och varje mål ger poäng till de produkter som matchar för att bygga en rekommenderad stack.",
      },
      {
        title: "Stackbyggare",
        body: "Reservera en slot för varje roll (bas, specifik, prestanda) så att varje köpare går därifrån med en komplett, sammanhängande stack.",
      },
      {
        title: "Kost- och restriktionsfilter",
        body: "Uteslut produkter som krockar med vegansk, glutenfri eller andra restriktioner, så att resultaten respekterar varje köpares kost automatiskt.",
      },
      {
        title: "Onboarding för prenumeration",
        body: "Använd quizet i början av en prenumerationstratt, fånga emailen och koppla resultatsidan till ett erbjudande av typen prenumerera och spara.",
      },
    ],
    howItHelps: [
      "Villkorlig logik håller quizet kort. Om en köpare säger att de inte har några kostrestriktioner hoppar quizet över restriktionsfrågorna helt, så att ingen svarar på frågor som inte gäller dem.",
      "Uteslutningar hanterar hårda restriktioner rent. En vegansk köpare ser aldrig en icke-vegansk produkt i sina resultat, även om den var en stark matchning enbart på mål.",
      "Mål är det mest värdefulla ett kosttillskottsvarumärke kan lära sig. Att synkronisera taggar som goal:sleep eller goal:gut med Klaviyo låter dig köra livscykel-email som verkligen matchar vad varje kund försöker uppnå.",
    ],
    faqs: [
      {
        question: "Kan ett kosttillskottsquiz rekommendera en stack med flera produkter?",
        answer:
          "Ja. Varje mål ger poäng till de produkter som matchar, och recommendation slots reserverar en plats för varje roll, så att resultatsidan returnerar en komplett stack med lägg-i-varukorg för setet.",
      },
      {
        question: "Hur hanterar det veganska eller glutenfria kostval?",
        answer:
          "Det använder uteslutningar. Att koppla ett kostsvar till en uteslutningslista tar bort alla produkter i konflikt från resultaten, oavsett hur bra de fick poäng på mål.",
      },
      {
        question: "Kan jag lägga till en rabatt på första beställningen på resultatsidan?",
        answer:
          "Ja. Resultatsidan stöder ett rabattkodsblock som du kan visa för förstagångsköpare eller koppla till specifika svarskombinationer.",
      },
      {
        question: "Fungerar det för ett prenumerationsvarumärke?",
        answer:
          "Ja. Kör quizet i början av tratten, fånga emailen i Klaviyo och rikta resultatsidan mot ett erbjudande av typen prenumerera och spara.",
      },
    ],
    related: [
      { label: "Paketbyggarquiz", href: "/solutions/bundle-builder/" },
      { label: "Quiz för fitness och nutrition", href: "/solutions/fitness/" },
      { label: "Quiz för guidad försäljning", href: "/guided-selling-quiz/" },
      { label: "Quizmallar", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  fashion: {
    slug: "fashion",
    type: "vertical",
    name: "Mode och kläder",
    chip: "Bransch",
    title: "Stilquiz för mode och kläder för ecommerce",
    description:
      "Ett stilquiz som hittar rätt passform, snitt och färg från din katalog och minskar returerna. Gratisplan, multiplattform, flerspråkigt.",
    h1: "Stilquiz som hittar rätt passform och snitt",
    heroSubtitle:
      "Stil är personligt och passform är riskabelt. Ett modequiz lär sig en köpares smak och storlek, och rekommenderar sedan plagg de troligen behåller.",
    intro: [
      "Mode har den högsta returgraden inom ecommerce, och det mesta kommer från storleks- och stilmissar. Ett stilquiz minskar båda genom att fråga efter kroppstyp, passformspreferens, tillfälle och smak, och rekommenderar sedan plagg som verkligen sitter på köparen.",
      "RevenueHunt bygger quizet mot din livekatalog, inklusive varianterna, så att storlek och färg flödar hela vägen till resultatsidan. För varumärken som säljer på flera marknader kan ett basquiz översättas och tilldelas per Shopify Market, med produkttitlar och priser automatiskt lokaliserade.",
    ],
    quizTypes: [
      {
        title: "Stilprofilquiz",
        body: "Frågor om smak, tillfälle och färg lyfter fram de plagg som matchar en köpares estetik i stället för ett generiskt rutnät med nyheter.",
      },
      {
        title: "Passforms- och storleksdetektor",
        body: "Frågor om kroppstyp och passformspreferens snävar in till rätt snitt och storlek, vilket är där de flesta klädreturer börjar.",
      },
      {
        title: "Kapsel- eller outfitbyggare",
        body: "Använd recommendation slots för att sätta ihop en koordinerad outfit eller en kapsel i stället för en enda artikel.",
      },
      {
        title: "Tillfällesdetektor",
        body: "Förgrenar efter tillfälle (jobb, bröllop, resa) så att varje köpare ser ett kurerat urval för det tillfälle de handlar för.",
      },
    ],
    howItHelps: [
      "Att rekommendera efter passform och smak, inte bara popularitet, tar köpare till plagg de är mer benägna att behålla, vilket är den mest direkta spaken ett modevarumärke har över returer.",
      "Varianter flödar från början till slut. Koppla svar till specifika storlekar och färger, och resultatsidan visar rätt variant med lägg-i-varukorg, så att köpare inte studsar till en produktsida för att välja om.",
      "Säljer du i hela EU eller längre? Bygg ett basquiz, låt AI Copilot översätta det, tilldela varje version till sin Shopify Market och produktdatan lokaliseras automatiskt. Inget produktöversättningsarbete per språk.",
    ],
    faqs: [
      {
        question: "Kan ett modequiz minska returerna?",
        answer:
          "Det riktar in sig på den främsta orsaken till returer genom att rekommendera efter passform och smak i stället för popularitet. Att koppla svar till specifika storlekar och färger tar köpare till plagg de är mer benägna att behålla.",
      },
      {
        question: "Stöder det produktvarianter som storlek och färg?",
        answer:
          "Ja. Svar kan kopplas till specifika varianter, och resultatsidan visar storleken och färgen som matchar med direkt lägg-i-varukorg.",
      },
      {
        question: "Kan jag köra quizet på flera språk?",
        answer:
          "Ja. Bygg ett basquiz, översätt det med AI Copilot och tilldela varje version till sin Shopify Market. Produkttitlar och priser lokaliseras automatiskt via Shopify Markets.",
      },
      {
        question: "Vilka plattformar fungerar det på?",
        answer:
          "Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace och som fristående värdbaserat quiz.",
      },
    ],
    related: [
      { label: "Storleks- och passformsdetektorquiz", href: "/solutions/size-finder/" },
      { label: "Presentfinnarquiz", href: "/solutions/gift-finder/" },
      { label: "Quizmallar", href: "/templates/" },
      { label: "Quiz för Shopify", href: "/product-recommendation-quiz-shopify/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  coffee: {
    slug: "coffee",
    type: "vertical",
    name: "Kaffe och te",
    chip: "Bransch",
    title: "Kaffequiz: matcha rostning med smak",
    description:
      "Ett smakprofilquiz som matchar köpare med rätt rostning eller blend och fångar prenumeranter. Gratisplan, redo för Klaviyo och ReCharge.",
    h1: "Kaffequiz som matchar smak med rätt rostning",
    heroSubtitle:
      "Rostning, ursprung, bryggmetod, smaknoter: ett kaffequiz förvandlar en förvirrande meny till en trygg rekommendation, och till en ny prenumerant.",
    intro: [
      "Kaffe och te styrs av smak, och smak är svårt att handla från en produktlista. Ett kort smakprofilquiz frågar efter rostningspreferens, bryggmetod och smaknoter, och rekommenderar sedan den blend köparen verkligen kommer att njuta av.",
      "RevenueHunt förvandlar detta till en tratt, inte bara en rekommendation. Det fångar emailen i början, rekommenderar en start-blend och kopplar resultatsidan till ett erbjudande av typen prenumerera och spara via ReCharge, med rostnings- och bryggpreferenser synkroniserade med Klaviyo.",
    ],
    quizTypes: [
      {
        title: "Smakprofildetektor",
        body: "Några få frågor om rostning, fyllighet och smaknoter matchar varje köpare med den blend som passar deras gom.",
      },
      {
        title: "Matchning efter bryggmetod",
        body: "Espresso, pour-over, French press eller bryggkaffe: förgrena efter metod så att malningen och blenden passar hur de faktiskt brygger kaffet.",
      },
      {
        title: "Onboarding för prenumeration",
        body: "Kör quizet i början av tratten, rekommendera en start-blend och erbjud prenumerera och spara på resultatsidan.",
      },
      {
        title: "Present- eller provdetektor",
        body: "Hjälp de som handlar presenter att välja ett provset eller presentset utan att känna mottagarens exakta smak.",
      },
    ],
    howItHelps: [
      "En smakprofil är ett starkt skäl att be om en email. Köpare delar gärna sina rostnings- och bryggpreferenser för att få en rekommendation, vilket fyller din lista med försegmenterade prenumeranter.",
      "Resultatsidan gör försäljningen. Den rekommenderar den blend som matchar, visar ett erbjudande av typen prenumerera och spara kopplat till ReCharge, och låter köpare lägga i varukorgen utan att lämna quizet.",
      "Preferenser blir hållbara segment. Att synkronisera taggar för rostning och bryggmetod med Klaviyo betyder att varje framtida kampanj kan tala olika till den som dricker mörkrostad espresso jämfört med den som föredrar ljusrostad pour-over.",
    ],
    demo: {
      label: "Testa kaffequizet",
      href: "https://productrecommendationquiz.com/pages/coffee-quiz?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_coffee",
      blurb: "Ett smakmatchande kaffequiz live i vår demobutik.",
    },
    faqs: [
      {
        question: "Kan ett kaffequiz rekommendera en prenumeration?",
        answer:
          "Ja. Det fångar emailen i början, rekommenderar en start-blend och riktar resultatsidan mot ett erbjudande av typen prenumerera och spara kopplat till ReCharge.",
      },
      {
        question: "Gör det matchning efter bryggmetod?",
        answer:
          "Ja. Det förgrenar efter bryggmetod så att malningen och blenden passar specifikt de som dricker espresso, pour-over, French press eller bryggkaffe.",
      },
      {
        question: "Får det min email-lista att växa?",
        answer:
          "Ja. Smakprofilen är ett starkt skäl för köpare att dela sin email, och svaren synkroniseras med Klaviyo försegmenterade efter rostnings- och bryggpreferens.",
      },
      {
        question: "Fungerar det för te eller andra drycker?",
        answer:
          "Ja. Samma smakprofilsmetod fungerar för te, vin, spritdrycker och vilken smakstyrd katalog som helst.",
      },
    ],
    related: [
      { label: "Paketbyggarquiz", href: "/solutions/bundle-builder/" },
      { label: "Presentfinnarquiz", href: "/solutions/gift-finder/" },
      { label: "Quizmallar", href: "/templates/" },
      { label: "Quiz för guidad försäljning", href: "/guided-selling-quiz/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  fitness: {
    slug: "fitness",
    type: "vertical",
    name: "Fitness och nutrition",
    chip: "Bransch",
    title: "Fitnessquiz för utrustning, kläder och program",
    description:
      "Ett målbaserat fitnessquiz som rekommenderar rätt utrustning, kläder eller program från din katalog. Gratisplan, AI-byggare, redo för Klaviyo.",
    h1: "Fitnessquiz byggda kring köparens mål",
    heroSubtitle:
      "Styrka, uthållighet, viktnedgång, återhämtning: ett fitnessquiz förvandlar ett mål till rätt utrustning, kläder, kosttillskott eller program.",
    intro: [
      "De som handlar fitness börjar med ett mål och en träningsstil, inte en produkt. Ett målbaserat quiz frågar vad de arbetar mot, deras erfarenhetsnivå och hur de tränar, och rekommenderar sedan den utrustning, de kläder eller det program som passar.",
      "RevenueHunt bygger tratten från början till slut: det rekommenderar rätt produkter från din katalog, fångar köparens mål och nivå som zero-party-data, och följer upp via Klaviyo med innehåll och erbjudanden som matchar vad de tränar för.",
    ],
    quizTypes: [
      {
        title: "Målbaserad detektor",
        body: "Styrka, uthållighet, rörlighet eller viktnedgång: varje mål ger poäng till den utrustning, de kläder eller de kosttillskott som matchar.",
      },
      {
        title: "Matchning efter erfarenhetsnivå",
        body: "Förgrenar efter nybörjare, medel eller avancerad så att rekommendationerna passar där köparen verkligen är.",
      },
      {
        title: "Program- eller plandetektor",
        body: "Rekommenderar rätt träningsprogram eller coachningsnivå utifrån mål, schema och tillgång till utrustning.",
      },
      {
        title: "Kit- eller paketbyggare",
        body: "Sätt ihop ett komplett kit (kläder plus utrustning plus kosttillskott) med recommendation slots för ett högre genomsnittligt ordervärde.",
      },
    ],
    howItHelps: [
      "Mål och erfarenhetsnivå är de två frågor som ändrar allt. Att ställa dem från början betyder att en nybörjare som arbetar med rörlighet aldrig ser en avancerad styrkeprodukt som sitt huvudresultat.",
      "Ett komplett kit slår en enda artikel. Recommendation slots låter dig returnera kläder, utrustning och ett kosttillskott tillsammans, vilket höjer det genomsnittliga ordervärdet utan att kännas påträngande.",
      "Målet du fångar driver allt som kommer efter försäljningen. Att synkronisera taggar för mål och nivå med Klaviyo låter dig skicka träningsinnehåll och påfyllningspåminnelser som matchar varje kunds verkliga program.",
    ],
    faqs: [
      {
        question: "Kan ett fitnessquiz rekommendera ett program, inte bara produkter?",
        answer:
          "Ja. Koppla svar till ett träningsprogram eller en coachningsnivå precis som du kopplar produkter, och resultatsidan kan rekommendera rätt plan utifrån mål och schema.",
      },
      {
        question: "Kan det sätta ihop ett komplett kit i ett enda resultat?",
        answer:
          "Ja. Recommendation slots reserverar en plats för varje roll (kläder, utrustning, kosttillskott) så att köpare får ett komplett kit med lägg-i-varukorg för setet.",
      },
      {
        question: "Hur personaliserar det för nybörjare jämfört med avancerade?",
        answer:
          "Det förgrenar med villkorlig logik efter erfarenhetsnivå, så att nybörjare och avancerade atleter ser olika frågor och olika rekommendationer.",
      },
      {
        question: "Kan jag följa upp via email utifrån målen?",
        answer:
          "Ja. Mål och nivå synkroniseras med Klaviyo, Mailchimp, Omnisend och mer som customer tags för en email-uppföljning som matchar målet.",
      },
    ],
    related: [
      { label: "Kosttillskottsquiz", href: "/solutions/supplements/" },
      { label: "Paketbyggarquiz", href: "/solutions/bundle-builder/" },
      { label: "Quizmallar", href: "/templates/" },
      { label: "Quiz för guidad försäljning", href: "/guided-selling-quiz/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "pet-products": {
    slug: "pet-products",
    type: "vertical",
    name: "Husdjursprodukter",
    chip: "Bransch",
    title: "Husdjursproduktquiz för din butik",
    description:
      "Ett husdjursquiz som rekommenderar foder, kosttillskott eller tillbehör efter art, ras, ålder och allergier. Uteslutningar hanterar kosten. Gratis att börja.",
    h1: "Husdjursquiz som kopplar produkter till varje djur",
    heroSubtitle:
      "Art, ras, ålder, aktivitet, allergier: ett husdjursquiz förvandlar de detaljerna till rätt foder, kosttillskott eller tillbehör, och respekterar varje kostrestriktion.",
    intro: [
      "De som har husdjur handlar för ett djur, inte en kategori, och rätt produkt beror på art, rasstorlek, ålder och allergier. Ett husdjursquiz samlar in de detaljerna en gång och rekommenderar produkter som passar på alla dimensioner samtidigt.",
      "RevenueHunt sköter den svåra delen: uteslutningar tillämpar reglerna för allergi och kost rent, resultatsidan rekommenderar rätt formel eller kit, och ett resultat-email sammanfattar rekommendationen för dem som inte köper på en gång.",
    ],
    quizTypes: [
      {
        title: "Husdjursfoderdetektor",
        body: "Art, rasstorlek, ålder och aktivitetsnivå matchas mot rätt formel, med allergier hanterade av uteslutningar.",
      },
      {
        title: "Kosttillskotts- eller hälsomatchning",
        body: "Rekommenderar stöd för leder, päls eller matsmältning utifrån ålder och deklarerade bekymmer.",
      },
      {
        title: "Tillbehörs- och utrustningsdetektor",
        body: "Kopplar selar, bäddar eller leksaker till rasstorlek och beteende så att ägare väljer rätt på första försöket.",
      },
      {
        title: "Startkit för nya ägare",
        body: "Sätt ihop ett komplett startkit för nya husdjursägare med recommendation slots.",
      },
    ],
    howItHelps: [
      "Allergier är en hård restriktion, och uteslutningar tillämpar dem perfekt. Att markera en kycklingallergi tar bort alla kycklingbaserade formler från resultaten, även de som fick bra poäng på ras och ålder.",
      "En customer tag som ägare-till-liten-hund är guld för retentionen. Att synkronisera den med Klaviyo låter dig skicka rasrelevant innehåll, påfyllningspåminnelser och erbjudanden som verkligen passar djuret.",
      "Resultat-email fångar de köpare som studsar. Ägare gör ofta research innan de köper, så ett automatiskt email som sammanfattar rekommendationen tar tillbaka dem för att slutföra köpet.",
    ],
    demo: {
      label: "Testa hundfoderdetektorn",
      href: "https://productrecommendationquiz.com/pages/dog-food?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_pet_products",
      blurb: "En multiattributs hundfoderdetektor live i vår demobutik.",
    },
    faqs: [
      {
        question: "Hur hanterar ett husdjursquiz allergier?",
        answer:
          "Med uteslutningar. Att koppla ett allergisvar till en uteslutningslista tar bort alla produkter i konflikt från resultaten, hur bra de än matchade på andra frågor.",
      },
      {
        question: "Kan det matcha efter ras och ålder?",
        answer:
          "Ja. Varje svar (art, rasstorlek, ålder, aktivitetsnivå) ger poäng till de produkter som matchar, så att rekommendationerna passar det specifika djuret.",
      },
      {
        question: "Kan jag skicka rekommendationen via email om de inte köper?",
        answer:
          "Ja. Resultat-email sammanfattar automatiskt rekommendationen, vilket är användbart för ägare som gör research innan de köper.",
      },
      {
        question: "Segmenterar det kunder för marknadsföring?",
        answer:
          "Ja. Customer tags som ägare-till-liten-hund synkroniseras med Klaviyo och andra verktyg för riktade, djurrelevanta kampanjer.",
      },
    ],
    related: [
      { label: "Paketbyggarquiz", href: "/solutions/bundle-builder/" },
      { label: "Produktfinnarquiz", href: "/product-finder-quiz/" },
      { label: "Quizmallar", href: "/templates/" },
      { label: "Quiz för WooCommerce", href: "/product-recommendation-quiz-woocommerce/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  cbd: {
    slug: "cbd",
    type: "vertical",
    name: "CBD och välmående",
    chip: "Bransch",
    title: "CBD-produktfinnarquiz för din butik",
    description:
      "Ett CBD-quiz som vägleder köpare mot rätt format och styrka utifrån mål och erfarenhet. Utbildar medan det säljer. Gratisplan, multiplattform.",
    h1: "CBD-quiz som vägleder köpare mot rätt format",
    heroSubtitle:
      "Format, styrka och mål förvirrar de flesta som handlar CBD. Ett quiz lär ut medan det säljer och rekommenderar rätt produkt med tillförsikt.",
    intro: [
      "CBD och välmående är kategorier där de flesta köpare genuint inte vet vad de ska köpa: olja eller gummi, vilken styrka, för vilket mål. Ett quiz förvandlar den osäkerheten till en tydlig rekommendation genom att fråga efter mål, erfarenhetsnivå och formatpreferens.",
      "RevenueHunt är gjort för förstagångsköpare i kategorin som dessa. Quizet utbildar medan det frågar, rekommenderar rätt format och styrka från din katalog, och fångar målen som zero-party-data som du äger och kan marknadsföra till.",
    ],
    quizTypes: [
      {
        title: "Målbaserad detektor",
        body: "Sömn, lugn, återhämtning eller fokus: varje mål ger poäng till de produkter och styrkor som matchar.",
      },
      {
        title: "Format- och styrkematchning",
        body: "Förgrenar efter erfarenhet och formatpreferens (olja, gummi, topisk, kapsel) så att nybörjare får en lättillgänglig utgångspunkt.",
      },
      {
        title: "Rutin- eller regimbyggare",
        body: "Rekommenderar en dag- och nattkombination med recommendation slots för en komplett rutin.",
      },
      {
        title: "Utbildning-först-quiz",
        body: "Använd informationsslides mellan frågorna för att lära ut grunderna, vilket bygger förtroende och trygghet före rekommendationen.",
      },
    ],
    howItHelps: [
      "Förstagångsköpare i kategorin behöver undervisning, inte bara filtrering. Informationsslides låter dig förklara styrka och format i enkelt språk medan köparen går vidare, så att rekommendationen landar med tillförsikt.",
      "Att matcha erfarenhetsnivå med styrka skyddar upplevelsen. En nybörjare får en lättillgänglig utgångspunkt i stället för den starkaste produkten, vilket betyder färre returer på grund av besvikelse.",
      "Målen som fångas i quizet blir dina mest användbara segment. Att synkronisera goal:sleep eller goal:recovery med Klaviyo driver email som matchar vad varje kund verkligen försöker lösa.",
    ],
    demo: {
      label: "Testa CBD-produktfinnaren",
      href: "https://productrecommendationquiz.com/pages/cbd-product-finder?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_cbd",
      blurb: "En CBD-produktfinnare live i vår demobutik.",
    },
    faqs: [
      {
        question: "Kan ett CBD-quiz rekommendera rätt styrka?",
        answer:
          "Ja. Det förgrenar efter erfarenhetsnivå och mål, kopplar sedan varje väg till lämplig styrka, så att nybörjare och erfarna användare får olika rekommendationer.",
      },
      {
        question: "Kan quizet utbilda köpare medan de går vidare?",
        answer:
          "Ja. Informationsslides visar text mellan frågorna utan att kräva någon inmatning, så att du kan lära ut grunderna i format och styrka på ett integrerat sätt.",
      },
      {
        question: "Fungerar det för bredare välmåendeprodukter?",
        answer:
          "Ja. Samma metod med mål och format fungerar för adaptogener, svampar och andra välmåendekategorier där köpare behöver vägledning.",
      },
      {
        question: "Vilka plattformar stöder det?",
        answer:
          "Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace och som fristående värdbaserat quiz.",
      },
    ],
    related: [
      { label: "Kosttillskottsquiz", href: "/solutions/supplements/" },
      { label: "Rutinbyggarquiz", href: "/solutions/routine-builder/" },
      { label: "Produktfinnarquiz", href: "/product-finder-quiz/" },
      { label: "Quizmallar", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  jewelry: {
    slug: "jewelry",
    type: "vertical",
    name: "Smycken och accessoarer",
    chip: "Bransch",
    title: "Smyckesquiz: hjälp till att hitta rätt smycke",
    description:
      "Ett smyckesquiz som matchar stil, metall och tillfälle med rätt smycke, och hjälper de som handlar presenter att välja med tillförsikt. Gratis att börja.",
    h1: "Smyckesquiz som matchar stil med rätt smycke",
    heroSubtitle:
      "Metall, stil, tillfälle, budget: ett smyckesquiz vägleder köpare och presentköpare mot ett smycke de kommer att älska, i stället för ett ändlöst rutnät.",
    intro: [
      "Smycken är emotionella och ofta en present, vilket gör dem svåra att handla från ett rutnät. Ett quiz frågar efter stil, metallpreferens, tillfälle och budget, och rekommenderar sedan smycken som matchar, vilket förvandlar surfande till ett tryggt val.",
      "RevenueHunt rekommenderar riktiga smycken och varianter från din katalog, hanterar de som handlar presenter utan att känna mottagarens smak, och fångar preferenserna för uppföljning. Resultatsidan konverterar med direkt lägg-i-varukorg och ett valfritt presentmeddelande.",
    ],
    quizTypes: [
      {
        title: "Stildetektor",
        body: "Frågor om estetik, metall och tillfälle lyfter fram de smycken som matchar en köpares smak.",
      },
      {
        title: "Presentfinnare",
        body: "Frågar efter mottagaren och tillfället, rekommenderar sedan ett kurerat urval eller ett presentset för dem som handlar utan att känna katalogen.",
      },
      {
        title: "Budgetmedveten matchning",
        body: "Inkluderar budgeten i rekommendationen så att varje köpare ser smycken inom sitt prisspann.",
      },
      {
        title: "Förlovnings- eller milstolpedetektor",
        body: "Vägleder köp med hög övervägning som förlovnings- eller jubileumssmycken med ett fokuserat, lugnande flöde.",
      },
    ],
    howItHelps: [
      "De som handlar presenter är en enorm del av smyckestrafiken och de minst säkra på vad de vill ha. Ett quiz som frågar efter mottagaren i stället för katalogen förvandlar den osäkerheten till ett tryggt presentköp.",
      "Budget är en fråga som de flesta rutnät ignorerar. Att inkludera den i rekommendationen betyder att köpare ser smycken de faktiskt kan köpa, vilket minskar studsen och bygger förtroende.",
      "Preferenser och tillfällen synkroniseras med ditt email-verktyg, så att du kan följa upp kring jubileer, påfyllningar och matchande smycken med kampanjer som känns personliga.",
    ],
    faqs: [
      {
        question: "Kan ett smyckesquiz hjälpa de som handlar presenter?",
        answer:
          "Ja. Det frågar efter mottagaren och tillfället i stället för katalogen, rekommenderar sedan ett kurerat urval eller ett presentset, vilket är idealiskt för dem som handlar utan att veta exakt vad de vill ha.",
      },
      {
        question: "Kan det ta hänsyn till budget?",
        answer:
          "Ja. Lägg till en budgetfråga och vikta eller filtrera rekommendationerna så att köpare bara ser smycken inom sitt prisspann.",
      },
      {
        question: "Stöder det varianter som metall och storlek?",
        answer:
          "Ja. Svar kan kopplas till specifika varianter, så att resultatsidan visar rätt metall och storlek med lägg-i-varukorg.",
      },
      {
        question: "Kan jag fånga leads för uppföljning?",
        answer:
          "Ja. Quizet fångar emailen och preferenserna som zero-party-data och synkroniserar med Klaviyo och andra verktyg för en tillfällesbaserad uppföljning.",
      },
    ],
    related: [
      { label: "Presentfinnarquiz", href: "/solutions/gift-finder/" },
      { label: "Quiz för mode och kläder", href: "/solutions/fashion/" },
      { label: "Quizmallar", href: "/templates/" },
      { label: "Produktfinnarquiz", href: "/product-finder-quiz/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "home-goods": {
    slug: "home-goods",
    type: "vertical",
    name: "Hem och inredning",
    chip: "Bransch",
    title: "Quiz för hem och inredning för din butik",
    description:
      "Ett quiz för hem och inredning som matchar möbler och inredning med en köpares utrymme och stil. Minskar returer på skrymmande artiklar. Gratis att börja.",
    h1: "Hemquiz som matchar produkter med utrymmet",
    heroSubtitle:
      "Stil, rum, storlek och budget: ett quiz för hem och inredning vägleder köpare mot pjäser som passar deras utrymme, vilket spelar störst roll när artiklarna är skrymmande.",
    intro: [
      "Hem och inredning är hög övervägning och dyra att returnera. Köpare behöver veta att en pjäs passar deras utrymme och stil innan de förbinder sig. Ett quiz frågar efter rum, stil, mått och budget, och rekommenderar sedan pjäser som fungerar.",
      "RevenueHunt rekommenderar riktiga produkter från din katalog, sätter ihop koordinerade set med recommendation slots, och fångar stilpreferenser för uppföljning, så att den som köper en möbel en gång blir en återkommande inredningskund.",
    ],
    quizTypes: [
      {
        title: "Stildetektor",
        body: "Frågor om estetik och rum lyfter fram möbler och inredning som matchar en köpares smak.",
      },
      {
        title: "Matchning efter rum eller utrymme",
        body: "Inkluderar rumstyp och mått i rekommendationerna så att pjäserna verkligen passar i utrymmet.",
      },
      {
        title: "Byggare för koordinerat set",
        body: "Sätt ihop ett matchande set (soffa plus matta plus belysning) med recommendation slots för en komplett look.",
      },
      {
        title: "Budgetmedveten detektor",
        body: "Inkludera budgeten så att köpare ser pjäser inom sitt prisspann och studsar mindre.",
      },
    ],
    howItHelps: [
      "Passform och skala driver returer på skrymmande artiklar. Att fråga efter rummets mått och rekommendera pjäser som fungerar minskar de kostsamma misstag som leder till möbelreturer.",
      "Ett koordinerat set höjer ordervärdet naturligt. Recommendation slots låter dig föreslå en komplett look i stället för en enda pjäs, vilket passar perfekt med inredningsköp.",
      "Stilpreferenser är hållbara. Att fånga en köpares estetik och synkronisera den med ditt email-verktyg betyder att säsongs- och nyhetskampanjer kan anpassas efter smak i stället för att skickas till alla likadant.",
    ],
    faqs: [
      {
        question: "Kan ett hemquiz rekommendera ett koordinerat set?",
        answer:
          "Ja. Recommendation slots reserverar en plats för varje roll (sittplats, matta, belysning), så att resultatsidan returnerar ett komplett, matchande set med lägg-i-varukorg.",
      },
      {
        question: "Kan det ta hänsyn till rummets storlek?",
        answer:
          "Ja. Lägg till frågor om rum och mått och koppla svaren till pjäser som passar, vilket är nyckeln till att minska returer på stora artiklar.",
      },
      {
        question: "Hjälper det med budget?",
        answer:
          "Ja. Inkludera en budgetfråga så att rekommendationerna håller sig inom köparens prisspann.",
      },
      {
        question: "Vilka plattformar fungerar det på?",
        answer:
          "Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace och som fristående värdbaserat quiz.",
      },
    ],
    related: [
      { label: "Paketbyggarquiz", href: "/solutions/bundle-builder/" },
      { label: "Presentfinnarquiz", href: "/solutions/gift-finder/" },
      { label: "Quizmallar", href: "/templates/" },
      { label: "Quiz för guidad försäljning", href: "/guided-selling-quiz/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  // ----------------------------------------------------------------- use-cases
  "gift-finder": {
    slug: "gift-finder",
    type: "use-case",
    name: "Presentfinnare",
    chip: "Quiztyp",
    title: "Presentfinnarquiz för din webbutik",
    description:
      "Ett presentfinnarquiz som frågar efter mottagaren och returnerar en kurerad present, vilket höjer AOV för dem som handlar utan att känna katalogen. Gratis att börja.",
    h1: "Presentfinnarquiz som förvandlar gissningar till en försäljning",
    heroSubtitle:
      "De som handlar presenter har ingen åsikt om din katalog och mycket ångest över att välja fel. En presentfinnare frågar efter mottagaren och rekommenderar den perfekta presenten.",
    intro: [
      "De som handlar presenter är de köpare som är lättast att förlora och lättast att hjälpa. De känner inte dina produkter och oroar sig för att välja fel. Ett presentfinnarquiz ställer tre till fem frågor om mottagaren (relation, ålder, intressen, budget) och returnerar en kurerad present de kan köpa med tillförsikt.",
      "RevenueHunt förvandlar presentfinnaren till en av de quiztyper som konverterar bäst. Det grupperar flera produkter i ett enda presentresultat för ett högre ordervärde, lägger till ett presentmeddelande och en rabatt på resultatsidan, och fångar köparens email för nästa tillfälle.",
    ],
    quizTypes: [
      {
        title: "Mottagarfokuserad detektor",
        body: "Frågar efter mottagaren (relation, ålder, intressen) i stället för katalogen, så att de som inte vet något om dina produkter ändå får en bra matchning.",
      },
      {
        title: "Tillfällesdetektor",
        body: "Förgrenar efter tillfälle (födelsedag, högtider, jubileum) så att rekommendationen passar tillfället.",
      },
      {
        title: "Presentpaketbyggare",
        body: "Kombinerar flera produkter i ett enda kurerat presentset med recommendation slots, vilket höjer det genomsnittliga ordervärdet.",
      },
    ],
    howItHelps: [
      "Tricket är att fråga efter mottagaren, inte katalogen. En köpare som kan svara på tre frågor om sin syster får en trygg rekommendation utan att någonsin behöva förstå ditt produktsortiment.",
      "Presentpaket höjer ordervärdet utan press. Att returnera ett kurerat set som ett enda resultat känns hjälpsamt, inte påträngande, och köpare köper gärna hela setet.",
      "Varje presentköpare är en framtida kund. Att fånga deras email och tillfället låter dig ta tillbaka dem på nästa födelsedag eller högtid med ett rekommendationsförsprång.",
    ],
    faqs: [
      {
        question: "Hur fungerar ett presentfinnarquiz?",
        answer:
          "Det ställer tre till fem frågor om mottagaren och tillfället, rekommenderar sedan en kurerad present eller ett presentset, så att de som inte känner din katalog ändå kan välja med tillförsikt.",
      },
      {
        question: "Kan det gruppera produkter i en enda present?",
        answer:
          "Ja. Recommendation slots kombinerar flera produkter i ett enda kurerat presentset, vilket höjer det genomsnittliga ordervärdet.",
      },
      {
        question: "Kan jag lägga till en rabatt eller ett presentmeddelande?",
        answer:
          "Ja. Resultatsidan stöder rabattkods- och innehållsblock som du kan visa utifrån köparens svar.",
      },
      {
        question: "Fångar det leads för framtida tillfällen?",
        answer:
          "Ja. Quizet fångar emailen och tillfället, som synkroniseras med Klaviyo och andra verktyg så att du kan återaktivera dem inför nästa presentögonblick.",
      },
    ],
    related: [
      { label: "Smyckesquiz", href: "/solutions/jewelry/" },
      { label: "Quiz för skönhet och kosmetik", href: "/solutions/beauty/" },
      { label: "Produktfinnarquiz", href: "/product-finder-quiz/" },
      { label: "Quizmallar", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "size-finder": {
    slug: "size-finder",
    type: "use-case",
    name: "Storleks- och passformsdetektor",
    chip: "Quiztyp",
    title: "Storleks- och passformsdetektorquiz för ecommerce",
    description:
      "Ett storleks- och passformsdetektorquiz som rekommenderar rätt storlek eller kompatibel produkt och minskar returerna. Löser multiattributs passform. Gratis att börja.",
    h1: "Storleks- och passformsdetektorquiz som minskar returerna",
    heroSubtitle:
      "Fel storlek är den vanligaste returen. En passformsdetektor ställer rätt frågor och rekommenderar den storlek eller kompatibla produkt som passar.",
    intro: [
      "Passform och kompatibilitet är där ecommerce förlorar pengar: returer på grund av fel storlek på kläder och skor, och returer på grund av fel passform på allt som måste matcha något köparen redan äger. Ett passformsdetektorquiz löser de restriktionerna före beställningen, inte efter.",
      "RevenueHunt hanterar multiattributs passform rent. Det kopplar svar till specifika varianter och använder uteslutningar för hårda restriktioner, så att en köpares mått och krav löses till en korrekt storlek eller kompatibel produkt på resultatsidan.",
    ],
    quizTypes: [
      {
        title: "Storleksdetektor",
        body: "Frågor om mått och passformspreferens snävar in till rätt storlek, vilket är den vanligaste orsaken till returer.",
      },
      {
        title: "Kompatibilitetsdetektor",
        body: "Löser multiattributs restriktioner (enhetsmodell, fästtyp, tillbehör) ner till den enda produkt som passar.",
      },
      {
        title: "Matchning efter passformspreferens",
        body: "Förgrenar efter passformspreferens (slim, regular, oversize) så att rekommendationen passar hur köparen gillar att bära det.",
      },
    ],
    howItHelps: [
      "Returer på grund av fel storlek är den största kostnaden en passformsdetektor tar itu med. Att fråga efter mått och passformspreferens från början och koppla dem till specifika varianter tar köpare till den storlek de behåller.",
      "Kompatibilitet är inget annat än restriktioner, och uteslutningar hanterar dem perfekt. En köpare som deklarerar sin enhet och sina krav får exakt den kompatibla produkten, med allt inkompatibelt borttaget.",
      "Tillförsikt konverterar. När quizet berättar för en köpare det här är din storlek med ett tydligt skäl lägger de i varukorgen i stället för att studsa till en storlekstabell och aldrig återvända.",
    ],
    demo: {
      label: "Testa kompatibilitetsdetektorn",
      href: "https://productrecommendationquiz.com/pages/bicycle-quiz?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_size_finder",
      blurb: "En kompatibilitetsdetektor live i vår demobutik som löser en teknisk matchning.",
    },
    faqs: [
      {
        question: "Kan en passformsdetektor minska returer på grund av fel storlek?",
        answer:
          "Ja. Att fråga efter mått och passformspreferens och koppla svaren till specifika varianter rekommenderar den storlek en köpare är mest benägen att behålla, vilket direkt minskar returerna.",
      },
      {
        question: "Hur hanterar det kompatibilitet?",
        answer:
          "Med uteslutningar och variantkoppling. En köpare deklarerar sina restriktioner (enhet, fäste, tillbehör) och quizet returnerar bara den kompatibla produkten, och tar bort allt som inte passar.",
      },
      {
        question: "Fungerar det för skor och kläder?",
        answer:
          "Ja. Storleks- och passformsdetektorer är bland de starkaste användningsfallen för kläder, skor och allt där passform driver returer.",
      },
      {
        question: "Kan resultaten förklara rekommendationen?",
        answer:
          "Ja. Innehållsblock på resultatsidan kan visa specifik text utifrån svaren, så att du kan förklara varför en viss storlek eller produkt är rätt passform.",
      },
    ],
    related: [
      { label: "Quiz för mode och kläder", href: "/solutions/fashion/" },
      { label: "Produktfinnarquiz", href: "/product-finder-quiz/" },
      { label: "Quizmallar", href: "/templates/" },
      { label: "Quiz för Shopify", href: "/product-recommendation-quiz-shopify/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "shade-finder": {
    slug: "shade-finder",
    type: "use-case",
    name: "Nyansmatchning",
    chip: "Quiztyp",
    title: "Nyansdetektorquiz: matcha foundation och färg",
    description:
      "Ett nyansdetektorquiz som matchar foundation, concealer eller färg efter underton och djup, med bildsvar. Minskar returer. Gratis att börja.",
    h1: "Nyansdetektorquiz som matchar färg med tillförsikt",
    heroSubtitle:
      "Att handla smink online betyder att gissa din nyans. En nyansdetektor frågar efter underton och djup och returnerar den exakta matchningen, vilket minskar returerna.",
    intro: [
      "Nyansmatchning är den fråga med högst risk inom skönhets-ecommerce. Gör fel och produkten kommer tillbaka. Ett nyansdetektorquiz frågar efter underton, djup, täckning och finish, och rekommenderar sedan den exakta nyansen från din katalog med bildsvar som är snabba på mobil.",
      "RevenueHunt kopplar varje svar till specifika nyansvarianter och utesluter resten, så att resultatsidan visar en trygg matchning i stället för en mur av prover. Köparens nyansprofil synkroniseras med ditt email-verktyg för påfyllningar och matchande produkter.",
    ],
    quizTypes: [
      {
        title: "Foundationnyansmatchning",
        body: "Frågor om underton och djup matchas mot exakt nyans av foundation eller concealer, med bildsvar för snabbhet.",
      },
      {
        title: "Läpp- eller färgmatchning",
        body: "Matchar läppfärg, rouge eller ögonfärg med en köpares färgsättning och preferens.",
      },
      {
        title: "Hårfärgsmatchning",
        body: "Vägleder hemmafärgning av håret utifrån nuvarande nyans, målnyans och underton mot rätt formel.",
      },
    ],
    howItHelps: [
      "Bildsvar bär nyansfrågorna. Att låta köpare trycka på en bild av en underton eller finish slår att be dem beskriva den, och håller slutförandet högt på mobilskärmar där skönhet säljs.",
      "Uteslutningar förvandlar en mur av prover till ett enda svar. Att koppla underton och djup till specifika varianter och utesluta resten betyder att resultatsidan visar matchningen, inte hela sortimentet.",
      "Nyans är en profil värd att behålla. Att synkronisera en köpares matchande nyans med Klaviyo låter dig marknadsföra påfyllningar och koordinerade produkter till exakt rätt personer.",
    ],
    demo: {
      label: "Testa nyansmatchningsquizet",
      href: "https://productrecommendationquiz.com/pages/foundation-match?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_shade_finder",
      blurb: "Ett bildbaserat foundationnyansmatchningsquiz live i vår demobutik.",
    },
    faqs: [
      {
        question: "Hur matchar en nyansdetektor foundation?",
        answer:
          "Den frågar efter underton, djup, täckning och finish, kopplar varje svar till de nyansvarianter som matchar och utesluter resten. Resultatsidan visar den exakta matchningen med lägg-i-varukorg.",
      },
      {
        question: "Använder den bildsvar?",
        answer:
          "Ja. Alternativen kan vara klickbara bilder, vilket är idealiskt för frågor om underton och finish och förbättrar slutförandet på mobil.",
      },
      {
        question: "Kan den minska returer relaterade till nyans?",
        answer:
          "Ja. Att rekommendera en trygg matchning i stället för en mur av prover tar köpare till den nyans de är mest benägna att behålla.",
      },
      {
        question: "Fungerar den utöver foundation?",
        answer:
          "Ja. Samma metod matchar läppfärg, rouge, ögonfärg och hemmafärgning av håret.",
      },
    ],
    related: [
      { label: "Quiz för skönhet och kosmetik", href: "/solutions/beauty/" },
      { label: "Hudvårdsquiz", href: "/solutions/skincare/" },
      { label: "För skönhetsvarumärken", href: "/for-beauty-brands/" },
      { label: "Quizmallar", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "routine-builder": {
    slug: "routine-builder",
    type: "use-case",
    name: "Rutinbyggare",
    chip: "Quiztyp",
    title: "Rutinbyggarquiz för hudvård och mer",
    description:
      "Ett rutinbyggarquiz som returnerar en komplett rutin med flera steg, inte en enda produkt, med recommendation slots. Höjer AOV. Gratis att börja.",
    h1: "Rutinbyggarquiz som säljer hela setet",
    heroSubtitle:
      "En produkt är en försäljning. En rutin är en varukorg och en vana. En rutinbyggare returnerar ett komplett set med flera steg skräddarsytt för varje köpare.",
    intro: [
      "Vissa produkter köps som ett system, inte som en enda artikel: en hudvårdsrutin, en kosttillskottsstack, en hårregim. Ett rutinbyggarquiz returnerar hela setet, med en reserverad plats för varje steg, så att köpare köper hela rutinen i stället för en produkt.",
      "RevenueHunt gör detta med recommendation slots. Reservera en slot för varje roll (rengöring, behandling, fuktkräm, SPF, eller vad din kategori behöver) och quizet fyller varje med den bästa matchningen, och visar sedan hela rutinen grupperad efter steg med lägg-i-varukorg för setet.",
    ],
    quizTypes: [
      {
        title: "Stegbaserad rutin",
        body: "Reservera en slot för varje steg och fyll den med den produkt som matchar bäst, så att varje köpare får en komplett, sammanhängande rutin.",
      },
      {
        title: "Stackbyggare",
        body: "Sätt ihop en stack med flera produkter (perfekt för kosttillskott och välmående) med en roll för varje produkt.",
      },
      {
        title: "Dag- och nattrutin",
        body: "Returnera separata AM- och PM-rutiner från ett quiz med visningslogik på resultatsidan.",
      },
    ],
    howItHelps: [
      "Recommendation slots är skillnaden mellan en försäljning och en varukorg. Att reservera en plats för varje steg betyder att resultatsidan returnerar en komplett rutin, vilket höjer ordervärdet utan att kännas som en upsell.",
      "Att gruppera efter steg gör rutinen begriplig. Köpare ser exakt vad de ska använda och när, vilket bygger förtroende för köpet och vanan som tar tillbaka dem.",
      "En rutin är en retentionsmotor. Setet du rekommenderar berättar vad varje kund kommer att få slut på och när, så att din email-uppföljning kan tajma påfyllningserbjudandena med precision.",
    ],
    faqs: [
      {
        question: "Hur returnerar en rutinbyggare ett komplett set?",
        answer:
          "Med recommendation slots. Varje slot reserveras för en roll (till exempel rengöring, behandling, fuktkräm, SPF) och fylls med den produkt som matchar bäst, så att resultatsidan returnerar en komplett rutin.",
      },
      {
        question: "Kan den visa en separat dag- och nattrutin?",
        answer:
          "Ja. Använd visningslogik på resultatsidan för att visa AM- och PM-rutiner, eller vilken villkorlig gruppering som helst, utifrån köparens svar.",
      },
      {
        question: "Höjer den det genomsnittliga ordervärdet?",
        answer:
          "Att rekommendera ett komplett set i stället för en enda produkt ger köpare ett skäl att köpa hela rutinen, vilket höjer ordervärdet.",
      },
      {
        question: "Vilka kategorier passar en rutinbyggare?",
        answer:
          "Hudvård, hårvård, kosttillskott, och vilken katalog som helst som köps som ett system med flera steg i stället för en enda artikel.",
      },
    ],
    related: [
      { label: "Hudvårdsquiz", href: "/solutions/skincare/" },
      { label: "Kosttillskottsquiz", href: "/solutions/supplements/" },
      { label: "Paketbyggarquiz", href: "/solutions/bundle-builder/" },
      { label: "Quizmallar", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "bundle-builder": {
    slug: "bundle-builder",
    type: "use-case",
    name: "Paketbyggare",
    chip: "Quiztyp",
    title: "Paketbyggarquiz: sälj kurerade set",
    description:
      "Ett paketbyggarquiz som sätter ihop ett kurerat set utifrån en köpares svar och höjer det genomsnittliga ordervärdet. Lägg-i-varukorg för hela paketet. Gratis.",
    h1: "Paketbyggarquiz som höjer ordervärdet",
    heroSubtitle:
      "Ett kurerat paket konverterar bättre än en enda produkt och en generisk upsell. En paketbyggare sätter ihop setet utifrån varje köpares svar.",
    intro: [
      "Paket fungerar, men bara när de är relevanta. En generisk tre-för-två-upsell ignorerar vad köparen verkligen vill ha. Ett paketbyggarquiz sätter ihop ett kurerat set utifrån varje köpares svar, så att paketet känns personligt och ordervärdet kommer naturligt.",
      "RevenueHunt bygger paket med recommendation slots och villkorliga resultat. Reservera en roll för varje produkt i setet, matcha varje med köparen, och presentera hela paketet på resultatsidan med lägg-i-varukorg för allt på en gång.",
    ],
    quizTypes: [
      {
        title: "Byggare för kurerat set",
        body: "Reservera en roll för varje produkt i paketet och fyll varje med den bästa matchningen, så att setet passar köparen i stället för katalogen.",
      },
      {
        title: "Startkitsdetektor",
        body: "Sätt ihop ett komplett startkit för förstagångsköpare eller nya i kategorin som vill ha ett tryggt köp.",
      },
      {
        title: "Paket efter dina mått",
        body: "Låt svaren driva ett flexibelt paket, med visningslogik som lägger till eller tar bort artiklar utifrån vad köparen väljer.",
      },
    ],
    howItHelps: [
      "Ett relevant paket slår ett generiskt. Att matcha varje artikel i setet med köparens svar betyder att paketet läses som en rekommendation, inte som en rabatttaktik, och konverterar därefter.",
      "Ett enda lägg-i-varukorg för hela setet tar bort friktion. Köpare köper paketet i en enda handling i stället för att leta upp varje artikel, vilket skyddar det högre ordervärde du just byggt.",
      "Rabattblock får paketet att landa. Visa en setrabatt på resultatsidan kopplad till den specifika kombinationen, så att besparingen känns förtjänad och köparen slutför köpet.",
    ],
    faqs: [
      {
        question: "Hur fungerar ett paketbyggarquiz?",
        answer:
          "Det reserverar en roll för varje produkt i paketet, matchar varje med köparens svar, och presenterar hela det kurerade setet på resultatsidan med lägg-i-varukorg för allt på en gång.",
      },
      {
        question: "Kan jag lägga till en paketrabatt?",
        answer:
          "Ja. Resultatsidan stöder rabattkodsblock som du kan koppla till specifika svarskombinationer, så att paketbesparingen visas i sammanhang.",
      },
      {
        question: "Höjer det det genomsnittliga ordervärdet?",
        answer:
          "Att rekommendera ett relevant, kurerat set i stället för en enda produkt ger köpare ett skäl att köpa mer, vilket höjer ordervärdet.",
      },
      {
        question: "Vilka kategorier passar?",
        answer:
          "Kosttillskott, skönhet, mat och dryck, hem, och vilken katalog som helst där ett kurerat set säljer bättre än en enda artikel.",
      },
    ],
    related: [
      { label: "Rutinbyggarquiz", href: "/solutions/routine-builder/" },
      { label: "Presentfinnarquiz", href: "/solutions/gift-finder/" },
      { label: "Kosttillskottsquiz", href: "/solutions/supplements/" },
      { label: "Quizmallar", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },
};
