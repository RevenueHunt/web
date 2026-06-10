import type { GlossaryTerm, GlossaryLink } from "../glossary";

const VERIFIED = "2026-06-07";

export const GLOSSARY_SV: Record<string, GlossaryTerm> = {
  "conversational-commerce": {
    slug: "conversational-commerce",
    term: "Konversationshandel",
    chip: "Koncept",
    title: "Vad är konversationshandel?",
    description:
      "Konversationshandel säljer genom en dialog i båda riktningarna i stället för ett statiskt rutnät. Det här är vad det omfattar, varför det fungerar och hur ett quiz åstadkommer det.",
    h1: "Vad är konversationshandel?",
    shortAnswer:
      "Konversationshandel handlar om att sälja genom en interaktiv dialog i båda riktningarna i stället för ett statiskt produktrutnät. Köparna svarar på frågor, butiken svarar med personliga rekommendationer, precis som en bra säljare gör i en fysisk butik.",
    intro: [
      "I en fysisk butik frågar en bra expedit vad du behöver, lyssnar och pekar dig mot rätt produkt. Online hoppar de flesta butiker över det steget och lämnar köparna framför ett rutnät med alla produkter de säljer. Konversationshandel sätter dialogen i centrum igen.",
    ],
    sections: [
      {
        heading: "Vad som räknas som konversationshandel",
        body: [
          "Kategorin är bred. Den inkluderar chatbotar, meddelandeappar, livechatt, röstassistenter och produktrekommendationsquiz. Det de delar är ett fram och tillbaka: köparen bidrar med information och butiken svarar med något mer specifikt än en generisk katalogsida.",
          "Formerna skiljer sig åt i hur mycket du styr dem. En chatbot med fritext kan gå vart köparen än skriver, vilket är kraftfullt och oförutsägbart. Ett quiz är strukturerad konversationshandel: varje fråga och varje väg har du designat, så samtalet håller sig troget ditt varumärke och slutar alltid i en riktig produkt.",
        ],
      },
      {
        heading: "Varför det konverterar bättre än ett rutnät",
        body: [
          "En kategorisida ber köparen att göra jobbet: läsa varje alternativ, jämföra specifikationer och gissa vilket som passar. Det är analysförlamning, och det är där många varukorgar tappas innan de ens börjat.",
          "Ett samtal gör jobbet åt dem. Det reducerar en stor katalog till en kort, motiverad rekommendation och förklarar varför. Köpare som får ett tydligt svar lägger i varukorgen i stället för att gå och jämföra någon annanstans.",
          "Det fångar också preferenser. Varje svar en köpare ger är information du kan använda för att segmentera email, personalisera uppföljningen och göra bättre merchandising längre fram.",
        ],
      },
      {
        heading: "Konversationshandel jämfört med en chatbot",
        body: [
          "Ofta används de två termerna som synonymer, men en chatbot är ett verktyg inom kategorin, inte hela kategorin. En chatbot byggd på en stor språkmodell kan svara på öppna frågor, men kan också misstolka avsikten eller rekommendera något du inte har i lager.",
          "Ett produktrekommendationsquiz byter frihet mot tillförlitlighet. Det kan inte avvika från ämnet, rekommenderar alltid från din livekatalog och fungerar likadant för varje köpare. För de flesta butiker är den förutsägbarheten värd mer än en chatt i fritt format.",
        ],
      },
    ],
    withRevenueHunt: [
      "Ett RevenueHunt-quiz är den mest tillförlitliga formen av konversationshandel en butik kan använda. Du designar varje fråga och varje väg, resultatsidan rekommenderar alltid riktiga produkter och varianter från din katalog, och varje svar fångas som zero-party-data som du kan synkronisera med Klaviyo och andra verktyg.",
      "Det fungerar på Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace och som fristående värdbaserat quiz, och det är gratis att börja med 100 svar i månaden.",
    ],
    faqs: [
      {
        question: "Räknas ett produktquiz som konversationshandel?",
        answer:
          "Ja. Ett quiz är en strukturerad form av konversationshandel: köparen svarar på frågor och butiken svarar med personliga rekommendationer, samma dialogmodell som en chatbot men med varje väg designad i förväg.",
      },
      {
        question: "Vad är skillnaden mellan konversationshandel och en chatbot?",
        answer:
          "En chatbot är ett verktyg inom konversationshandel. Konversationshandel är den bredare idén att sälja genom ett samtal i båda riktningarna, som också inkluderar quiz, livechatt, meddelanden och röst.",
      },
      {
        question: "Fungerar konversationshandel för små butiker?",
        answer:
          "Ja. Ett produktrekommendationsquiz är den minst krävande vägen att börja. Det behöver ingen trafikhistorik för att fungera, körs på en gratisplan och kan vara live samma dag.",
      },
    ],
    related: [
      { label: "Produktrekommendationsmotor", href: "/glossary/product-recommendation-engine/" },
      { label: "Shoppingbart quiz", href: "/glossary/shoppable-quiz/" },
      { label: "Quiz för guidad försäljning", href: "/guided-selling-quiz/" },
      { label: "Så fungerar det", href: "/how-it-works/" },
      { label: "Quizmallar", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "product-recommendation-engine": {
    slug: "product-recommendation-engine",
    term: "Produktrekommendationsmotor",
    chip: "Koncept",
    title: "Vad är en produktrekommendationsmotor?",
    description:
      "En produktrekommendationsmotor avgör vilka produkter som ska visas för varje köpare. Typerna, kallstartsproblemet och hur en quizbaserad motor fungerar.",
    h1: "Vad är en produktrekommendationsmotor?",
    shortAnswer:
      "En produktrekommendationsmotor är mjukvaran som avgör vilka produkter som ska visas för en specifik köpare. Den tar in indata (surfbeteende, köphistorik eller deklarerade preferenser) och rangordnar din katalog för att lyfta fram de bästa matchningarna.",
    intro: [
      "Varje butik som visar en köpare något annat än hela katalogen använder en rekommendationsmotor av något slag, även om det bara är en manuell sektion med bästsäljare. Den intressanta frågan är vad motorn använder för att besluta.",
    ],
    sections: [
      {
        heading: "De viktigaste typerna",
        body: [
          "Beteendemotorer använder vad köpare gör: sedda sidor, klickade artiklar, köpta saker. De driver de klassiska sektionerna rekommenderat för dig och kunder köpte också. De bygger på kollaborativ filtrering, som behöver mycket trafik och historik för att fungera bra.",
          "Regel- eller attributbaserade motorer använder produktdata och logik som merchandisern sätter: visa tillbehör med den här kategorin, lyft fram artiklar i lager först. De är förutsägbara men statiska.",
          "Preferens- eller quizbaserade motorer använder vad köparen berättar för dig direkt. Köparen svarar på några frågor och motorn rangordnar katalogen mot de svaren. Detta är den mest direkta avsiktssignalen, eftersom den är frivillig snarare än härledd.",
        ],
      },
      {
        heading: "Kallstartsproblemet",
        body: [
          "Beteendemotorer har en känd svaghet: de misslyckas med nya besökare och nya produkter. En köpare som kommer för första gången har ingen historik, så motorn har inget att utgå från och faller tillbaka på generiska bästsäljare. En nyligen tillagd produkt har inga klick ännu, så den rekommenderas sällan.",
          "En preferensbaserad motor har ingen kallstart. En helt ny besökare som svarar på tre frågor ger motorn allt den behöver vid första besöket, utan spårning och utan att vänta på att data ska samlas in.",
        ],
      },
      {
        heading: "Hur en quizmotor rangordnar produkter",
        body: [
          "Varje svar bär en vikt. Ett måste-ha-svar kan rösta för produkter som matchar och emot dem som inte gör det, medan en hård begränsning som en allergi eller en inkompatibel specifikation kan utesluta produkter helt, oavsett hur bra de fick poäng på allt annat.",
          "Resultatet är en kort, rangordnad och motiverad lista i stället för en enda gissning. Bra motorer reserverar också en plats för varje roll i ett set, så utdata kan vara en rutin, en stack eller ett komplett paket i stället för en enda produkt.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt är en preferensbaserad produktrekommendationsmotor driven av ett quiz. Svaren röstar för, röstar emot eller utesluter produkter från din livekatalog, rekommendationsplatserna reserverar en plats för varje roll i ett set, och det fungerar för en besökare som kommer för första gången utan någon historik.",
      "Eftersom indata är frivilliga fungerar samma svar samtidigt som zero-party-data som du äger och kan använda för att segmentera långt efter att köparen lämnat.",
    ],
    faqs: [
      {
        question: "Vad är skillnaden mellan en beteendebaserad rekommendationsmotor och en quizbaserad?",
        answer:
          "En beteendemotor härleder avsikt utifrån klick och köphistorik, vilket behöver trafik och misslyckas med nya besökare. En quizbaserad motor använder de preferenser köparen deklarerar direkt, så den fungerar vid första besöket utan historik.",
      },
      {
        question: "Behöver jag mycket trafik för att en rekommendationsmotor ska fungera?",
        answer:
          "Inte för en quizbaserad motor. Eftersom köparen berättar sina preferenser för dig fungerar den från första besöket. Beteendemotorer behöver däremot betydande trafik och köphistorik innan deras rekommendationer är tillförlitliga.",
      },
      {
        question: "Kan en rekommendationsmotor föreslå mer än en produkt?",
        answer:
          "Ja. Med rekommendationsplatser reserverar motorn en plats för varje roll i ett set och fyller varje med den bästa matchningen, och returnerar en rutin, en stack eller ett komplett paket i stället för en enda artikel.",
      },
    ],
    related: [
      { label: "Personliga produktrekommendationer", href: "/glossary/personalized-product-recommendations/" },
      { label: "Konversationshandel", href: "/glossary/conversational-commerce/" },
      { label: "Produktfinnarquiz", href: "/product-finder-quiz/" },
      { label: "Så fungerar det", href: "/how-it-works/" },
      { label: "Quiz för Shopify", href: "/product-recommendation-quiz-shopify/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "shoppable-quiz": {
    slug: "shoppable-quiz",
    term: "Shoppingbart quiz",
    chip: "Quiztyp",
    title: "Vad är ett shoppingbart quiz?",
    description:
      "Ett shoppingbart quiz slutar på en resultatsida där köpare lägger de rekommenderade produkterna i varukorgen. Det här är vad som gör ett quiz shoppingbart och var butiker använder det.",
    h1: "Vad är ett shoppingbart quiz?",
    shortAnswer:
      "Ett shoppingbart quiz är ett interaktivt quiz som slutar på en personlig resultatsida där köpare kan lägga de rekommenderade produkterna direkt i varukorgen. Quizet är en del av butiken, inte en enkät som lever vid sidan av.",
    intro: [
      "Många varumärken använder quiz. Skillnaden mellan ett som genererar intäkter och ett som bara samlar in svar ligger i om en köpare kan köpa i slutet utan att behöva lämna.",
    ],
    sections: [
      {
        heading: "Vad som gör ett quiz shoppingbart",
        body: [
          "Tre saker. För det första rekommenderar det riktiga produkter och varianter från din livekatalog, inte fyllnadstext. För det andra har resultatsidan alternativet att lägga i varukorgen, så en köpare kan köpa rekommendationen i ett enda steg. För det tredje kan det ta erbjudandet ända fram: en rabatt kopplad till svaren, ett paket tillagt som ett set, en merförsäljning på resultatsidan.",
          "Utan det har du ett personlighetsquiz eller en enkät. Det kan vara roligt och kan samla in email, men det stänger inte försäljningen det just öppnade.",
        ],
      },
      {
        heading: "Shoppingbart quiz jämfört med en enkät eller ett personlighetsquiz",
        body: [
          "En enkät samlar in svar och slutar. Ett personlighetsquiz underhåller och slutar. Ett shoppingbart quiz använder svaren för att rekommendera produkter och låter sedan köparen agera på rekommendationen omedelbart, medan deras avsikt är som störst.",
          "Det sista steget är det som spelar roll. Ögonblicket precis efter att en köpare fått ett svar med tillförsikt är ögonblicket då de är som mest benägna att köpa. Ett shoppingbart quiz fångar det ögonblicket i stället för att skicka tillbaka dem till katalogen för att börja om från noll.",
        ],
      },
      {
        heading: "Var shoppingbara quiz används",
        body: [
          "Var som helst där det är svårt att välja: hudvårdsrutiner, kosttillskottsstackar, foundationnyanser, storlek och passform, presentset, kaffeblandningar. Ju svårare det är att välja från ett rutnät, desto mer förtjänar ett shoppingbart quiz sin plats.",
          "De fungerar som popup, som inbäddat block på en sida eller som en helsidesupplevelse, och samma quiz kan samtidigt mata betaltrafik, email och upptäckt på sajten.",
        ],
      },
    ],
    withRevenueHunt: [
      "Varje RevenueHunt-quiz är shoppingbart som standard. Resultatsidan hämtar riktiga produkter och varianter från din katalog, stöder att lägga en enda artikel eller ett helt set i varukorgen, och kan visa en rabattkod eller ett innehållsblock beroende på köparens svar.",
      "Du kan bygga ett från en mall eller beskriva din butik för AI Quiz Copilot och ha ett komplett quiz ihopsatt på runt 60 sekunder, och sedan publicera det som popup, inbäddat eller landningssida.",
    ],
    faqs: [
      {
        question: "Vad är skillnaden mellan ett shoppingbart quiz och ett personlighetsquiz?",
        answer:
          "Ett personlighetsquiz underhåller och slutar. Ett shoppingbart quiz rekommenderar riktiga produkter från din katalog och låter köpare lägga dem i varukorgen på resultatsidan, så det stänger försäljningen i stället för att bara samla in svar.",
      },
      {
        question: "Kan köpare lägga produkter i varukorgen från quizet?",
        answer:
          "Ja. Det är det som gör det shoppingbart. Resultatsidan visar de matchande produkterna och varianterna med det direkta alternativet att lägga i varukorgen, för en enda artikel eller ett helt set.",
      },
      {
        question: "Kan ett shoppingbart quiz visa en rabatt?",
        answer:
          "Ja. Resultatsidan stöder rabattkods- och innehållsblock som du kan koppla till specifika svar, så rätt köpare ser rätt erbjudande vid beslutspunkten.",
      },
    ],
    related: [
      { label: "Quiztratt", href: "/glossary/quiz-funnel/" },
      { label: "Konversationshandel", href: "/glossary/conversational-commerce/" },
      { label: "Paketbyggarquiz", href: "/solutions/bundle-builder/" },
      { label: "Quizmallar", href: "/templates/" },
      { label: "ROI-kalkylator för quiz", href: "/quiz-roi-calculator/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "quiz-funnel": {
    slug: "quiz-funnel",
    term: "Quiztratt",
    chip: "Marknadsföring",
    title: "Vad är en quiztratt?",
    description:
      "En quiztratt använder ett quiz som ingångspunkt för att förvandla trafik till kvalificerade, prenumererade leads. Här är stegen och varför det slår ett enkelt opt-in.",
    h1: "Vad är en quiztratt?",
    shortAnswer:
      "En quiztratt är en marknadsföringstratt som använder ett quiz som ingångspunkt. En köpare gör ett quiz, får en rekommendation, ger sin email och går in i en segmenterad uppföljningssekvens. Den förvandlar anonym trafik till ett kvalificerat lead med en känd preferens.",
    intro: [
      "De flesta ecommerce-trattar börjar med en rabattpopup och ett enda email-fält. En quiztratt ersätter det med något köparen faktiskt vill ha: ett personligt svar.",
    ],
    sections: [
      {
        heading: "Stegen i en quiztratt",
        body: [
          "Trafik kommer till quizet, från en annons, ett email eller en länk på din sajt. Köparen svarar på några frågor. De når en resultatsida med en personlig rekommendation. För att se eller spara resultatet ger de sin email. Den emailen går in i en uppföljningssekvens som är segmenterad efter vad de berättat för dig.",
          "Skillnaden mot en vanlig tratt ligger i vad du vet i slutet. I stället för en anonym prenumerant har du en kontakt taggad med sina mål, preferenser och de produkter de matchade med.",
        ],
      },
      {
        heading: "Varför den slår ett generiskt opt-in",
        body: [
          "En enkel nyhetsbrevsprenumeration erbjuder inget specifikt, så den konverterar en liten del av trafiken och ger dig ingen information utöver en email-adress. En quiztratt erbjuder en personlig rekommendation som skäl att prenumerera, vilket är ett mycket starkare utbyte.",
          "Den förbättrar också varje email efteråt. En prenumerant som du vet letar efter torr och känslig hud får andra meddelanden än en som letar efter en present. Den segmenteringen byggs upp under quizet, inte i efterhand.",
        ],
      },
      {
        heading: "Quiztrattar och betaltrafik",
        body: [
          "Quiztrattar är populära för betald förvärvning eftersom de kvalificerar och fångar i ett enda steg. Kall trafik som skulle lämna en produktsida slutför ofta ett quiz, och email-fångsten innebär att du behåller leadet även om det inte köper vid första besöket.",
          "En quiztratt är en specifik form av tratt. För den bredare bilden av hur ecommerce-trattar byggs, se guiden med exempel på trattar.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt är gjort för att köra hela quiztratten. Det fångar emailen vid punkten med högst avsikt, synkroniserar svar och kundtaggar med Klaviyo, Mailchimp, Omnisend, HubSpot och mer, och visar avhopp fråga för fråga så att du kan åtgärda läckorna.",
      "Rekommendationen på resultatsidan är leadmagneten, så det som vinner emailen är också det som driver försäljningen.",
    ],
    faqs: [
      {
        question: "Hur skiljer sig en quiztratt från en vanlig säljtratt?",
        answer:
          "En quiztratt använder ett quiz som ingångspunkt, så den kvalificerar och segmenterar leads i takt med att den fångar dem. En vanlig tratt börjar oftast med ett generiskt opt-in som fångar en email men ingen preferensdata.",
      },
      {
        question: "Fungerar en quiztratt för betalda annonser?",
        answer:
          "Ja. Quiztrattar är vanliga för betald förvärvning eftersom de kvalificerar kall trafik och fångar emailen i ett enda steg, så du behåller leadet även när köparen inte köper vid första besöket.",
      },
      {
        question: "Vad gör jag med de leads som en quiztratt fångar?",
        answer:
          "Synkronisera dem med ditt email-verktyg med quizsvaren som taggar, och skicka sedan segmenterad uppföljning efter mål eller preferens. RevenueHunt synkroniserar svar och kundtaggar med Klaviyo, Mailchimp, Omnisend, HubSpot och mer.",
      },
    ],
    related: [
      { label: "Leadsgenereringsquiz", href: "/glossary/lead-generation-quiz/" },
      { label: "Shoppingbart quiz", href: "/glossary/shoppable-quiz/" },
      { label: "Exempel på ecommerce-trattar", href: "/ecommerce-sales-funnel-examples/" },
      { label: "ROI-kalkylator för quiz", href: "/quiz-roi-calculator/" },
      { label: "Integrationer", href: "/integrations/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "personalized-product-recommendations": {
    slug: "personalized-product-recommendations",
    term: "Personliga produktrekommendationer",
    chip: "Koncept",
    title: "Vad är personliga produktrekommendationer?",
    description:
      "Personliga produktrekommendationer anpassar förslagen till varje köpare. Så gör butiker det, kallstartsproblemet och den cookiefria metoden.",
    h1: "Vad är personliga produktrekommendationer?",
    shortAnswer:
      "Personliga produktrekommendationer är förslag anpassade till en enskild köpare i stället för samma bästsäljare som visas för alla. De kan bygga på surfbeteende, tidigare köp eller, på det mest direkta sättet, på vad köparen berättar för dig.",
    intro: [
      "Att visa varje köpare samma rutnät behandlar en förstagångs-presentköpare och en lojal återkommande kund likadant. Personliga rekommendationer anpassar sig till vem som faktiskt handlar.",
    ],
    sections: [
      {
        heading: "Hur butiker personaliserar rekommendationer",
        body: [
          "Det finns två övergripande tillvägagångssätt. Beteendebaserad personalisering observerar vad en köpare gör, klick, visningar, tidigare ordrar, och härleder vad som ska visas härnäst. Personalisering baserad på deklarerade preferenser frågar köparen direkt och rekommenderar utifrån svaren.",
          "Beteendet är osynligt för köparen och skalar automatiskt, men det är en härledning och kan ha fel. Deklarerad preferens är uttrycklig: köparen berättar att de vill ha en parfymfri fuktkräm för känslig hud, så det finns inget att gissa.",
        ],
      },
      {
        heading: "Kallstartsproblemet",
        body: [
          "Beteendebaserad personalisering har svårt med nya köpare. Utan historik att lära av faller den tillbaka på generiska bästsäljare just för de besökare där ett första intryck spelar störst roll.",
          "Att fråga köparen löser detta omedelbart. Ett quiz samlar ihop tillräckligt för att personalisera vid första besöket, innan någon surfhistorik existerar, vilket är varför det passar så bra med betald och social trafik som kommer in kall.",
        ],
      },
      {
        heading: "Personalisera utan tredjepartscookies",
        body: [
          "Beteendebaserad inriktning har lutat sig mot tredjepartscookies och spårning över sajter, båda alltmer begränsade av webbläsare och regelverk. Rekommendationer byggda på data som köparen frivilligt erbjuder är inte beroende av något av det.",
          "Datan som ett quiz samlar in är zero-party-data: preferenser och avsikter som köparen avsiktligt delar. Det skiljer sig från first-party-data, som är beteendet du observerar på din egen sajt, som sedda sidor och tidigare ordrar. Zero-party-data är en typ av first-party-data, men deklarerad i stället för härledd, så det finns inget att gissa.",
          "Båda är hållbara och samtyckta, till skillnad från third-party-data. För hela bilden, se guiderna om zero-party-data och first-party-data.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt personaliserar rekommendationer utifrån de preferenser köparen deklarerar i ett quiz, så det fungerar vid första besöket och är inte beroende av tredjepartsspårning. Svaren matchas mot riktiga produkter och varianter, och hårda begränsningar utesluter allt som inte passar.",
      "Samma svar blir zero-party-data, så personaliseringen fortsätter i emailen: varje kampanj efter quizet kan tala om vad varje köpare verkligen vill ha.",
    ],
    faqs: [
      {
        question: "Vilken data driver personliga produktrekommendationer?",
        answer:
          "Antingen beteendedata (klick, visningar, köphistorik) eller deklarerade preferenser som köparen ger direkt. Deklarerade preferenser är de mest exakta eftersom de är frivilliga i stället för härledda, och de fungerar vid första besöket.",
      },
      {
        question: "Kan jag personalisera rekommendationer för förstagångsbesökare?",
        answer:
          "Ja, om du frågar dem. Ett quiz samlar ihop tillräckligt för att personalisera vid första besöket, något beteendesystem inte kan göra eftersom nya besökare inte har någon historik att lära av.",
      },
      {
        question: "Behöver personliga rekommendationer tredjepartscookies?",
        answer:
          "Nej. Rekommendationer byggda på data som en köpare frivilligt erbjuder i ett quiz är inte beroende av tredjepartscookies eller spårning över sajter, båda alltmer begränsade av webbläsare och tillsynsmyndigheter.",
      },
    ],
    related: [
      { label: "Produktrekommendationsmotor", href: "/glossary/product-recommendation-engine/" },
      { label: "Personalisering inom ecommerce", href: "/glossary/ecommerce-personalization/" },
      { label: "Zero-party-data", href: "/zero-party-data/" },
      { label: "First-party-data", href: "/first-party-data/" },
      { label: "Så fungerar det", href: "/how-it-works/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "ecommerce-personalization": {
    slug: "ecommerce-personalization",
    term: "Personalisering inom ecommerce",
    chip: "Koncept",
    title: "Vad är personalisering inom ecommerce?",
    description:
      "Personalisering inom ecommerce anpassar butiken till varje köpare. Här är var det sker, skiftet till zero-party-data och den minst krävande platsen att börja.",
    h1: "Vad är personalisering inom ecommerce?",
    shortAnswer:
      "Personalisering inom ecommerce handlar om att anpassa köpupplevelsen, produkterna, innehållet och erbjudandena som en köpare ser, till individen i stället för att visa samma butik för alla. Rätt gjort höjer det konverteringen och det genomsnittliga ordervärdet.",
    intro: [
      "Personalisering täcker mycket mark, från en sektion med rekommenderat för dig till en helt anpassad startsida. Den gemensamma tråden är att behandla olika köpare olika utifrån vad du vet om dem.",
    ],
    sections: [
      {
        heading: "Var personalisering sker",
        body: [
          "På sajten dyker det upp som rekommenderade produkter, anpassade landningssidor och dynamiskt innehåll. I rekommendationerna rangordnar det katalogen för varje köpare. I email och SMS segmenterar det meddelandena efter beteende eller preferens. I annonserna anpassar det kreativitet och målgrupper.",
          "De flesta butiker behöver inte allt på en gång. Platserna med högst avkastning att börja på är produktrekommendationer och email-segmentering, eftersom båda direkt påverkar vad en köpare köper och om de återvänder.",
        ],
      },
      {
        heading: "Skiftet från third-party-data till zero-party-data",
        body: [
          "Klassisk personalisering lutade sig hårt mot third-party-data och spårning över sajter. Förändringar i webbläsare och integritetsregelverk har gjort den metoden bräcklig och, i många fall, icke regelefterlevande.",
          "Den hållbara ersättningen är din egen data, och den kommer i två former. First-party-data är vad du observerar från en köpares interaktioner med din butik, som sedda sidor och tidigare ordrar. Zero-party-data är vad de avsiktligt erbjuder, som mål, preferenser och problem. Zero-party-data är den deklarerade delmängden av first-party-data, och det är den mest exakta avsiktssignalen eftersom köparen berättade det direkt för dig.",
          "Båda är samtyckta och försvinner inte när en webbläsare blockerar en cookie. Ett quiz är det mest direkta sättet att samla in zero-party-data i skala.",
        ],
      },
      {
        heading: "Den minst krävande platsen att börja",
        body: [
          "Enterprise-sviter för personalisering kan anpassa varje pixel, med ett pris och en implementeringstidslinje därefter. De flesta butiker behöver inte det för att se resultat.",
          "Ett produktrekommendationsquiz är den enklaste ingångspunkten. Det personaliserar det viktigaste ögonblicket, att välja en produkt, fångar preferensdatan som sedan driver personlig email, och kan vara live samma dag på en gratisplan.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt är ett fokuserat sätt med självbetjäning att börja personalisera: ett quiz som anpassar rekommendationerna vid första besöket och matar ditt email-verktyg med preferensdata för löpande segmentering. Inget enterprise-avtal, inget data science-team.",
      "Det fungerar på alla de viktigaste plattformarna och synkroniserar med Klaviyo, Mailchimp, Omnisend, HubSpot och mer, så personaliseringen går från butiken till inkorgen.",
    ],
    faqs: [
      {
        question: "Vilket är det enklaste sättet att börja med personalisering inom ecommerce?",
        answer:
          "Ett produktrekommendationsquiz. Det personaliserar ögonblicket med störst effekt, att välja en produkt, fungerar vid första besöket, fångar preferensdata för personlig email och kan vara live samma dag på en gratisplan.",
      },
      {
        question: "Kräver personalisering inom ecommerce tredjepartscookies?",
        answer:
          "Inte längre, och den kan luta sig mot dem allt mindre. Den hållbara metoden använder data som köpare frivilligt erbjuder direkt, vilket är mer exakt, samtyckt och opåverkat av webbläsar- och integritetsbegränsningar.",
      },
      {
        question: "Behöver jag en enterprise-plattform för att personalisera min butik?",
        answer:
          "Nej. Enterprise-sviter anpassar allt till en hög kostnad, men de flesta butiker får stark avkastning av fokuserad personalisering: rekommendationer och email-segmentering, som ett quiz åstadkommer på en självbetjäningsplan.",
      },
    ],
    related: [
      { label: "Personliga produktrekommendationer", href: "/glossary/personalized-product-recommendations/" },
      { label: "Produktupptäckt", href: "/glossary/product-discovery/" },
      { label: "Zero-party-data", href: "/zero-party-data/" },
      { label: "First-party-data", href: "/first-party-data/" },
      { label: "Jämför RevenueHunt mot Nosto", href: "/compare/nosto/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "product-discovery": {
    slug: "product-discovery",
    term: "Produktupptäckt",
    chip: "Koncept",
    title: "Vad är produktupptäckt inom ecommerce?",
    description:
      "Produktupptäckt är hur köpare hittar rätt produkt i din katalog. Metoderna, varför stora kataloger försvårar det och hur guidad försäljning hjälper.",
    h1: "Vad är produktupptäckt inom ecommerce?",
    shortAnswer:
      "Produktupptäckt är hur köpare hittar rätt produkt i din katalog. Bra upptäckt, genom sökning, filter och guidade quiz, tar en köpare från jag har ett problem till det här är produkten med minsta möjliga friktion.",
    intro: [
      "En köpare kommer sällan in och vet din exakta SKU. De kommer med ett behov. Produktupptäckt är allt som finns mellan det behovet och rätt produktsida.",
    ],
    sections: [
      {
        heading: "De huvudsakliga metoderna för upptäckt",
        body: [
          "Sökning låter köpare som vet vad de vill ha skriva in det. Navigering och filter låter dem begränsa efter kategori och attribut. Rekommendationer lyfter fram relevanta produkter medan de surfar. Guidad försäljning, vanligtvis ett quiz, frågar efter deras behov och pekar dem mot svaret.",
          "Var och en passar en annan köpare. Sökning fungerar när någon vet produktnamnet. Filter fungerar när de känner till attributen. Ett quiz fungerar när de känner till problemet men inte produkten, vilket är det svåraste och vanligaste fallet.",
        ],
      },
      {
        heading: "Varför större kataloger försvårar upptäckt",
        body: [
          "En butik med tio produkter behöver knappt verktyg för upptäckt. En butik med hundratals eller tusentals gör det. Ju mer du säljer, desto mer sannolikt är det att en köpare känner sig överväldigad och lämnar utan att hitta det som var rätt för dem.",
          "Detta är valets paradox i praktiken: fler alternativ kan sänka konverteringen, inte höja den, om du inte ger köparna ett sätt att ta sig igenom dem. Guidad upptäckt förvandlar en stor katalog från en belastning till en styrka.",
        ],
      },
      {
        heading: "Upptäckt är konverteringsspaken",
        body: [
          "En köpare som inte hittar rätt produkt köper inte en annan, de lämnar. Att förbättra upptäckt är ofta den förändring med störst hävstång en butik med en djup katalog kan göra, eftersom den åtgärdar steget där avsikten dör i tysthet.",
          "Ett quiz är det mest direkta verktyget för upptäckt vid behovsbaserade köp, eftersom det ställer frågan en säljare skulle ställa och returnerar produkten de skulle peka ut.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt sköter behovsbaserad produktupptäckt: köparen beskriver sitt mål eller problem, och quizet rangordnar din livekatalog för att returnera rätt matchning, med hårda begränsningar som utesluter allt som inte passar.",
      "Det skalar med din katalog, fungerar vid första besöket och körs på Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace och fristående.",
    ],
    faqs: [
      {
        question: "Vad är skillnaden mellan produktupptäckt och sökning?",
        answer:
          "Sökning är en metod för upptäckt, för köpare som redan vet vad de vill ha. Produktupptäckt är bredare och inkluderar filter, rekommendationer och guidade quiz för köpare som känner till sitt behov men inte den specifika produkten.",
      },
      {
        question: "Hur förbättrar ett quiz produktupptäckt?",
        answer:
          "Det sköter det svåraste fallet: en köpare som känner till sitt problem men inte produkten. Quizet frågar efter behovet och rangordnar katalogen för att returnera rätt matchning, på det sätt en säljare skulle vägleda dem.",
      },
      {
        question: "Spelar produktupptäckt större roll i stora kataloger?",
        answer:
          "Ja. Ju fler produkter du säljer, desto lättare är det för köpare att känna sig överväldigade och lämna. Guidad upptäckt tar sig igenom en stor katalog och förvandlar dess storlek till en fördel i stället för en barriär.",
      },
    ],
    related: [
      { label: "Quiz för guidad försäljning", href: "/guided-selling-quiz/" },
      { label: "Produktfinnarquiz", href: "/product-finder-quiz/" },
      { label: "Personalisering inom ecommerce", href: "/glossary/ecommerce-personalization/" },
      { label: "Jämför RevenueHunt mot Zoovu", href: "/compare/zoovu/" },
      { label: "Quizmallar", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "lead-generation-quiz": {
    slug: "lead-generation-quiz",
    term: "Leadsgenereringsquiz",
    chip: "Quiztyp",
    title: "Vad är ett leadsgenereringsquiz?",
    description:
      "Ett leadsgenereringsquiz fångar kvalificerade, prenumererade leads med ett inbyggt skäl att prenumerera. Här är varför det slår ett registreringsformulär och vad du fångar.",
    h1: "Vad är ett leadsgenereringsquiz?",
    shortAnswer:
      "Ett leadsgenereringsquiz fångar kvalificerade leads: en köpare svarar på några frågor, ger sin email för att se resultatet, och du får en kontakt taggad med sina deklarerade preferenser. Det är ett opt-in med ett inbyggt skäl att prenumerera.",
    intro: [
      "Email är fortfarande den kanal med högst avkastning inom ecommerce, men ett enkelt registreringsformulär konverterar en liten andel av besökarna och berättar inget om dem. Ett leadsgenereringsquiz åtgärdar båda problemen samtidigt.",
    ],
    sections: [
      {
        heading: "Varför ett quiz slår ett enkelt registreringsformulär",
        body: [
          "En nyhetsbrevsruta ber om en email och erbjuder, som mest, en generisk rabatt. Ett leadsgenereringsquiz erbjuder ett personligt resultat, vilket är ett skäl till att en köpare verkligen vill ge sin adress. Utbytet känns rättvist, så fler accepterar det.",
          "Det samlar också in mer än en email. När en köpare prenumererar har de svarat på frågor om sina mål, preferenser och begränsningar, så varje kontakt kommer in redan kvalificerad och segmenterad.",
        ],
      },
      {
        heading: "Vad du fångar och hur du använder det",
        body: [
          "Du fångar emailen plus quizsvaren som zero-party-data. De svaren blir taggar i ditt email-verktyg: mål, hudtyp, budget, mottagare, vad quizet än frågade om.",
          "Taggarna förvandlar en enda lista till segment du kan tala specifikt till. Ett lead som sa att de handlar för känslig hud får ett annat email än ett som köper en present, och skillnaden byggs in i fångsten, gissas inte efteråt.",
        ],
      },
      {
        heading: "Fördelen med regelefterlevnad",
        body: [
          "Eftersom köparen frivilligt erbjuder datan i utbyte mot ett resultat är det zero-party-data: den deklarerade typen av first-party-data, samtyckt per definition. Det håller mycket bättre än härledd eller skräddarsydd köpt third-party-data när integritetsreglerna skärps och webbläsarna begränsar spårning.",
          "Du äger datan, den är exakt eftersom den kom direkt från köparen, och den är inte beroende av någon tredjepartscookie för att förbli användbar.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt förvandlar vilket quiz som helst till ett leadsgenereringsquiz: det fångar emailen vid punkten med högst avsikt, och synkroniserar sedan kontakten och taggarna baserade på svaren med Klaviyo, Mailchimp, Omnisend, HubSpot och mer.",
      "Eftersom rekommendationen är incitamentet driver samma quiz som låter din lista växa också försäljningen, och avhoppsanalysen visar exakt var du ska justera flödet.",
    ],
    faqs: [
      {
        question: "Hur skiljer sig ett leadsgenereringsquiz från ett registreringsformulär?",
        answer:
          "Ett registreringsformulär ber om en email och erbjuder ett generiskt incitament. Ett leadsgenereringsquiz erbjuder ett personligt resultat som skäl att prenumerera och fångar preferensdata tillsammans med emailen, så varje lead är kvalificerat och segmenterat.",
      },
      {
        question: "Vilken information fångar ett leadsgenereringsquiz?",
        answer:
          "Köparens email plus deras quizsvar som zero-party-data. De svaren synkroniseras med ditt email-verktyg som taggar, så kontakterna kommer in redan segmenterade efter mål, preferens eller begränsning.",
      },
      {
        question: "Är det regelefterlevande att använda datan från ett leadsgenereringsquiz?",
        answer:
          "Ja. Köparen erbjuder den frivilligt i utbyte mot ett resultat, så det är samtyckt first-party-data. Det håller bättre än härledd data eller tredjepartsdata när integritetsregler och webbläsarbegränsningar skärps.",
      },
    ],
    related: [
      { label: "Quiztratt", href: "/glossary/quiz-funnel/" },
      { label: "Shoppingbart quiz", href: "/glossary/shoppable-quiz/" },
      { label: "Zero-party-data", href: "/zero-party-data/" },
      { label: "Integrationer", href: "/integrations/" },
      { label: "Quizmallar", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "conversion-rate-optimization": {
    slug: "conversion-rate-optimization",
    term: "Konverteringsoptimering (CRO)",
    chip: "Koncept",
    title: "Vad är konverteringsoptimering?",
    description:
      "Konverteringsoptimering (CRO) höjer andelen besökare som köper. Hur det mäts, var du ska fokusera och de taktiker som flyttar nålen.",
    h1: "Vad är konverteringsoptimering (CRO)?",
    shortAnswer:
      "Konverteringsoptimering (CRO) är praktiken att öka andelen besökare som utför en önskad handling, vanligtvis ett köp. Du mäter konverteringsgraden som konverteringar delat med besökare, och förbättrar den sedan utan att köpa mer trafik.",
    intro: [
      "CRO handlar om att få ut mer av trafiken du redan har. Att fördubbla din konverteringsgrad har samma effekt på intäkterna som att fördubbla din trafik, men kostar mycket mindre.",
    ],
    sections: [
      {
        heading: "Hur konverteringsgraden beräknas",
        body: [
          "Konverteringsgraden är konverteringar delat med totalt antal besökare, uttryckt som procent. Om 1 000 besökare ger 20 köp är det en konverteringsgrad på 2 %. Genomsnittliga konverteringsgrader inom ecommerce ligger på låga ensiffriga tal, så små absoluta vinster är stora i relativa termer: att gå från 2 % till 3 % är en ökning på 50 % i antal ordrar.",
          "Samma matematik gäller för vilket mål som helst, inte bara köp. Email-prenumerationer, slutförda quiz och tillägg i varukorgen är alla konverteringar du kan optimera.",
        ],
      },
      {
        heading: "Vad CRO egentligen fokuserar på",
        body: [
          "Bra CRO hittar det specifika steg där avsikten läcker och åtgärdar det. Vanliga läckor: en produktsida som inte besvarar köparens verkliga fråga, en checkout med för mycket friktion, eller en kategorisida som lämnar en obeslutsam köpare framför en mur av alternativ utan någon vägledning.",
          "Det är en loop, inte en engångsfix: formulera en hypotes, ändra en enda sak, mät mot en referensnivå, behåll det som vinner. Disciplinen ligger i att ändra en variabel i taget så att du vet vad som flyttade siffran.",
        ],
      },
      {
        heading: "Taktiker som flyttar siffran",
        body: [
          "De hållbara vinsterna är tydlighet och relevans: snabbare sidor, ärlig produktinformation, färre steg i checkouten och att hjälpa obeslutsamma köpare att välja. Rabattpopups kan höja konverteringen på kort sikt, men vänjer köpare vid att vänta på erbjudanden och urholkar marginalen.",
          "Att hjälpa köpare att välja är den mest förbisedda spaken. En köpare som inte kan bestämma sig konverterar inte, och ett rutnät med alternativ hjälper dem inte. En guidad upplevelse som reducerar katalogen till en rekommendation med tillförsikt eliminerar den obeslutsamhet som i tysthet dödar konverteringar.",
        ],
      },
    ],
    withRevenueHunt: [
      "Ett produktrekommendationsquiz är en CRO-taktik riktad mot läckan av obeslutsamhet. I stället för att lämna en köpare jämförande en mur av produkter ställer det några frågor och returnerar en personlig rekommendation med tillförsikt, så att fler köpare når ett köpbeslut.",
      "Det fångar också email och preferensdata på vägen, så besökare som inte köper vid första besöket går inte förlorade. Du kan dimensionera den potentiella ökningen för dina egna siffror med ROI-kalkylatorn för quiz.",
    ],
    faqs: [
      {
        question: "Hur beräknas konverteringsgraden?",
        answer:
          "Dela antalet konverteringar med antalet besökare och uttryck det som procent. Till exempel är 20 köp av 1 000 besökare en konverteringsgrad på 2 %. Samma formel gäller för vilket mål som helst, som prenumerationer eller slutförda quiz.",
      },
      {
        question: "Vad är en bra konverteringsgrad inom ecommerce?",
        answer:
          "De flesta ecommerce-butiker konverterar på låga ensiffriga tal, ofta runt 1 % till 3 %. Eftersom basen är liten är blygsamma absoluta vinster stora i relativa termer: att gå från 2 % till 3 % är en ökning på 50 % i antal ordrar.",
      },
      {
        question: "Hur förbättrar ett produktquiz konverteringsgraden?",
        answer:
          "Det riktar in sig på läckan av obeslutsamhet. Ett quiz reducerar en stor katalog till en personlig rekommendation med tillförsikt, så obeslutsamma köpare når ett köpbeslut i stället för att lämna ett rutnät med alternativ.",
      },
    ],
    related: [
      { label: "Genomsnittligt ordervärde", href: "/glossary/average-order-value/" },
      { label: "Produktupptäckt", href: "/glossary/product-discovery/" },
      { label: "Tips för konverteringsoptimering", href: "/ecommerce-conversion-optimization-tips/" },
      { label: "ROI-kalkylator för quiz", href: "/quiz-roi-calculator/" },
      { label: "Quiztratt", href: "/glossary/quiz-funnel/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "average-order-value": {
    slug: "average-order-value",
    term: "Genomsnittligt ordervärde (AOV)",
    chip: "Mätvärde",
    title: "Vad är genomsnittligt ordervärde (AOV)?",
    description:
      "Genomsnittligt ordervärde (AOV) är vad en kund i snitt spenderar per order. Hur du beräknar det, varför det spelar roll och hur du höjer det utan mer trafik.",
    h1: "Vad är genomsnittligt ordervärde (AOV)?",
    shortAnswer:
      "Genomsnittligt ordervärde (AOV) är det genomsnittliga belopp en kund spenderar i en enda order. Du beräknar det genom att dela de totala intäkterna med antalet ordrar under samma period.",
    intro: [
      "AOV är ett av de tre tal som bestämmer dina intäkter, tillsammans med trafik och konverteringsgrad. Att höja det lyfter intäkterna från exakt samma antal ordrar, vilket är varför det är en av de billigaste tillväxtspakar du har.",
    ],
    sections: [
      {
        heading: "Hur du beräknar AOV",
        body: [
          "Dela de totala intäkterna med antalet ordrar under en given period. Om en butik genererar 50 000 $ på 1 000 ordrar under en månad är dess AOV 50 $. Följ det över tid och per trafikkälla, eftersom en kanal med högre AOV kan vara värd mer även om den konverterar mindre.",
          "AOV samspelar med allt annat. Ett högre AOV innebär att varje konvertering är värd mer, vilket höjer hur mycket du har råd att spendera på att förvärva en kund.",
        ],
      },
      {
        heading: "Varför AOV spelar roll",
        body: [
          "Trafik och konverteringsgrad får det mesta av uppmärksamheten, men de är de dyra spakarna: mer trafik kostar annonsinvesteringar, och konverteringsvinster blir svårare i takt med att du optimerar. AOV är spaken du kan flytta på de ordrar du redan vinner.",
          "Det finansierar också förvärvning. Ju mer varje order är värd, desto mer kan du buda på betaltrafik och fortfarande vara lönsam, vilket sammansätts genom hela tratten.",
        ],
      },
      {
        heading: "Hur du ökar AOV",
        body: [
          "De ärliga sätten att höja AOV tillför alla verkligt värde: att rekommendera kompletterande produkter, att paketera artiklar som hör ihop och att hjälpa köpare att köpa hela lösningen i stället för en enda del. Cross-selling och upselling är taktikerna; en relevant rekommendation är det som får dem att fungera i stället för att störa.",
          "Nyckelordet är relevant. En generisk tilläggsuppmaning ignoreras. Ett rekommenderat set som verkligen passar det köparen handlar köps, eftersom det läses som hjälp, inte som en säljpush.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt höjer AOV genom att rekommendera ett komplett set i stället för en enda produkt. Rekommendationsplatserna reserverar en plats för varje roll i en rutin, en stack eller ett paket, så resultatsidan returnerar hela lösningen med alternativet att lägga setet i varukorgen och en valfri rabatt kopplad till svaren.",
      "Eftersom varje artikel matchar köparens svar känns den större ordern som en rekommendation, inte som upselling. Du kan uppskatta intäktseffekten för din butik med ROI-kalkylatorn för quiz.",
    ],
    faqs: [
      {
        question: "Hur beräknas genomsnittligt ordervärde?",
        answer:
          "Dela de totala intäkterna med antalet ordrar under samma period. Till exempel är 50 000 $ i intäkter av 1 000 ordrar ett genomsnittligt ordervärde på 50 $.",
      },
      {
        question: "Varför är AOV viktigt?",
        answer:
          "Det lyfter intäkterna från de ordrar du redan vinner, utan att betala för mer trafik, och ett högre AOV låter dig spendera mer på att förvärva varje kund och förbli lönsam. Det är en av de billigaste tillväxtspakar som finns.",
      },
      {
        question: "Hur kan ett produktquiz öka AOV?",
        answer:
          "Genom att rekommendera ett komplett set i stället för en enda produkt. Rekommendationsplatserna returnerar en matchande rutin, stack eller paket med alternativet att lägga hela setet i varukorgen, så varje order är större utan att sluta kännas personlig.",
      },
    ],
    related: [
      { label: "Cross-selling och upselling", href: "/glossary/cross-selling-and-upselling/" },
      { label: "Konverteringsoptimering", href: "/glossary/conversion-rate-optimization/" },
      { label: "Paketbyggarquiz", href: "/solutions/bundle-builder/" },
      { label: "Rutinbyggarquiz", href: "/solutions/routine-builder/" },
      { label: "ROI-kalkylator för quiz", href: "/quiz-roi-calculator/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "cross-selling-and-upselling": {
    slug: "cross-selling-and-upselling",
    term: "Cross-selling och upselling",
    chip: "Taktik",
    title: "Cross-selling jämfört med upselling förklarat",
    description:
      "Cross-selling lägger till relaterade produkter; upselling uppgraderar till en bättre. Här är skillnaden, varför båda fungerar och hur ett quiz gör det utan pushen.",
    h1: "Vad är cross-selling och upselling?",
    shortAnswer:
      "Cross-selling rekommenderar relaterade produkter som kompletterar det en köpare köper, som en fuktkräm med en rengöring. Upselling rekommenderar en bättre eller större version av det de redan vill ha, som en större storlek eller en premiumnivå. Båda höjer ordervärdet.",
    intro: [
      "De två buntas ihop eftersom båda ökar vad en köpare spenderar, men de fungerar i olika riktningar. Att veta vilken som passar i ett ögonblick är skillnaden mellan hjälpsam och påträngande.",
    ],
    sections: [
      {
        heading: "Cross-selling jämfört med upselling: skillnaden",
        body: [
          "Cross-selling går i sidled. Det lägger till kompletterande artiklar i ordern: det klassiska vill du ha pommes till det?, eller ett skärmskydd med en telefon. Målet är ett mer komplett köp.",
          "Upselling går uppåt. Det leder köparen till en version med högre värde av det de redan överväger: en större storlek, en premiummodell, en längre prenumeration. Målet är en bättre passform till ett högre pris, inte fler artiklar.",
        ],
      },
      {
        heading: "Varför båda fungerar, när de är relevanta",
        body: [
          "Båda taktikerna höjer det genomsnittliga ordervärdet, och båda kan gå fel. En relevant cross-sell eller upsell läses som ett hjälpsamt råd; en irrelevant läses som en butik som försöker blåsa upp notan, och köpare ignorerar den eller blir irriterade.",
          "Relevansen är allt, och relevans kräver att man känner köparen. En rekommendation baserad på vad någon verkligen försöker uppnå går hem. En generisk sektion med kanske gillar du också, visad för alla, gör det inte.",
        ],
      },
      {
        heading: "Hur ett quiz gör cross-selling och upselling utan pushen",
        body: [
          "Ett quiz känner köparens mål innan det rekommenderar något, så cross-sell och upsell är inbyggda i rekommendationen i stället för tillagda i checkouten. Det kan returnera ett komplett set (cross-sell) och styra mot rätt nivå för det deklarerade behovet (upsell) i ett enda drag.",
          "Eftersom rekommendationen besvarar köparens egna frågor känns den större ordern förtjänad. Köparen ser en lösning som passar, inte en lista med tillägg.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt bygger in cross-sells och upsells i själva rekommendationen. Rekommendationsplatserna reserverar en plats för varje kompletterande roll så att resultatsidan returnerar ett komplett set, och logiken baserad på svaren styr köpare mot den storlek, nivå eller paket som passar det de berättade för dig.",
      "Resultatsidan stöder att lägga hela setet i varukorgen plus en rabatt kopplad till svaren, så ordern växer eftersom rekommendationen är rätt, inte eftersom en popup avbröt checkouten.",
    ],
    faqs: [
      {
        question: "Vad är skillnaden mellan cross-selling och upselling?",
        answer:
          "Cross-selling lägger till kompletterande produkter i en order, som en fuktkräm med en rengöring. Upselling uppgraderar till en bättre eller större version av det köparen redan vill ha, som en premiumnivå eller en större storlek. Båda ökar ordervärdet.",
      },
      {
        question: "Fungerar cross-selling och upselling verkligen?",
        answer:
          "Ja, när rekommendationen är relevant. Ett förslag som passar köparens mål läses som hjälpsamt och köps. En generisk uppmaning av modellen en storlek passar alla ignoreras eller stör, så relevansen är det som skiljer de två utfallen.",
      },
      {
        question: "Hur gör ett quiz cross-selling och upselling?",
        answer:
          "Det lär sig först köparens mål, och bygger sedan in cross-sell och upsell i rekommendationen. Rekommendationsplatserna returnerar ett komplett set, och logiken baserad på svaren styr mot rätt nivå, så den större ordern känns som ett råd i stället för en push.",
      },
    ],
    related: [
      { label: "Genomsnittligt ordervärde", href: "/glossary/average-order-value/" },
      { label: "Paketbyggarquiz", href: "/solutions/bundle-builder/" },
      { label: "Rutinbyggarquiz", href: "/solutions/routine-builder/" },
      { label: "Shoppingbart quiz", href: "/glossary/shoppable-quiz/" },
      { label: "Personliga produktrekommendationer", href: "/glossary/personalized-product-recommendations/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "customer-segmentation": {
    slug: "customer-segmentation",
    term: "Kundsegmentering",
    chip: "Marknadsföring",
    title: "Vad är kundsegmentering?",
    description:
      "Kundsegmentering grupperar köpare efter delade egenskaper så att du kan rikta dig till varje grupp specifikt. Typerna, varför det fungerar och hur ett quiz matar det.",
    h1: "Vad är kundsegmentering?",
    shortAnswer:
      "Kundsegmentering är praktiken att gruppera kunder efter delade egenskaper, som mål, beteende eller demografi, så att du kan rikta dig till varje grupp med ett relevant budskap i stället för att skicka samma sak till alla.",
    intro: [
      "Ett enda budskap till hela din lista talar inte till någon särskild. Segmentering låter dig säga rätt sak till rätt grupp, vilket är varför segmenterade kampanjer konsekvent slår urskillningslöst massutskick.",
    ],
    sections: [
      {
        heading: "De huvudsakliga sätten att segmentera",
        body: [
          "Demografisk segmentering grupperar efter attribut som ålder eller plats. Beteendesegmentering grupperar efter vad kunder gör: tidigare köp, surfande, interaktion. Psykografisk segmentering grupperar efter attityder och värderingar. Behovsbaserad segmentering grupperar efter det problem en kund försöker lösa.",
          "För ecommerce är behovsbaserade och beteendebaserade segment ofta de mest handlingsbara, eftersom de mappas direkt till vad du ska rekommendera och vad du ska säga härnäst.",
        ],
      },
      {
        heading: "Varför segmentering fungerar",
        body: [
          "Relevans driver respons. En kund som handlar för torr och känslig hud bör inte få samma email som en som köper en present, och när de inte gör det stiger öppningsgraderna, klicken och konverteringarna.",
          "Segmentering sammansätts också över tid. Varje kampanj du skickar till ett väldefinierat segment lär dig mer om det, vilket finslipar nästa. Listan blir en tillgång, inte bara en spridningskanal.",
        ],
      },
      {
        heading: "Dataproblemet bakom segmentering",
        body: [
          "Du kan bara segmentera efter det du vet, och de flesta butiker vet inte mycket om en anonym besökare. Beteendedata samlas långsamt och misslyckas med nya köpare, och third-party-data är alltmer begränsad av webbläsare och regelverk.",
          "Lösningen är att fråga. När en köpare berättar sitt mål, sin preferens eller sin begränsning för dig kan du segmentera efter det omedelbart och exakt, med deras samtycke. Den frivilligt erbjudna informationen är zero-party-data.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt förvandlar quizsvaren till segment automatiskt. Varje svar blir en kundtagg, som mål:sömn eller hud:känslig, som synkroniseras med Klaviyo, Mailchimp, Omnisend, HubSpot och mer, så kontakterna kommer in försegmenterade efter vad de berättade för dig.",
      "Eftersom segmenten byggs av data som köparen frivilligt erbjöd är de exakta från första besöket och inte beroende av spårning. Varje kampanj efter quizet kan tala till segmentet i stället för till hela listan.",
    ],
    faqs: [
      {
        question: "Vilka är de huvudsakliga typerna av kundsegmentering?",
        answer:
          "De vanliga grunderna är demografisk (ålder, plats), beteendebaserad (köp, surfande, interaktion), psykografisk (attityder, värderingar) och behovsbaserad (problemet en kund löser). För ecommerce är behovsbaserade och beteendebaserade segment normalt de mest handlingsbara.",
      },
      {
        question: "Varför är kundsegmentering viktigt?",
        answer:
          "Det gör budskapet relevant, vilket höjer öppningsgraderna, klicken och konverteringarna jämfört med att skicka samma sak till alla. Det sammansätts också: varje kampanj till ett definierat segment lär dig mer om det och finslipar nästa.",
      },
      {
        question: "Hur hjälper ett quiz med segmentering?",
        answer:
          "Det frågar köparna direkt, så varje svar blir en kundtagg som synkroniseras med ditt email-verktyg. Kontakterna kommer in försegmenterade efter mål, preferens eller begränsning, exakta från första besöket och utan att vara beroende av spårning.",
      },
    ],
    related: [
      { label: "Personliga produktrekommendationer", href: "/glossary/personalized-product-recommendations/" },
      { label: "Leadsgenereringsquiz", href: "/glossary/lead-generation-quiz/" },
      { label: "Zero-party-data", href: "/zero-party-data/" },
      { label: "Personalisering inom ecommerce", href: "/glossary/ecommerce-personalization/" },
      { label: "Integrationer", href: "/integrations/" },
    ],
    verifiedAsOf: VERIFIED,
  },
};

/** Guider och sidor som glossarets hubb pekar mot. */
export const GLOSSARY_RELATED_GUIDES_SV: GlossaryLink[] = [
  {
    label: "Produktfinnarquiz",
    href: "/product-finder-quiz/",
    blurb: "Vad ett produktfinnarquiz är, när du ska använda ett och 12 levande exempel.",
  },
  {
    label: "Quiz för guidad försäljning",
    href: "/guided-selling-quiz/",
    blurb: "Hur guidad försäljning fungerar inom ecommerce och hur du bygger quizet.",
  },
  {
    label: "Zero-party-data",
    href: "/zero-party-data/",
    blurb: "Vad zero-party-data är, varför det slår beteendespårning och hur ett quiz fångar det.",
  },
  {
    label: "Lösningar per bransch",
    href: "/solutions/",
    blurb: "Produktrekommendationsquiz-lösningar för hudvård, kosttillskott, mode och mer.",
  },
  {
    label: "ROI-kalkylator för quiz",
    href: "/quiz-roi-calculator/",
    blurb: "Uppskatta de extra intäkter som ett produktrekommendationsquiz skulle kunna tillföra din butik.",
  },
];
