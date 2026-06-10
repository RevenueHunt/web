import type { Competitor } from "../competitors";

// Delade värden för RevenueHunt-kolumnen (verifierade mot kompendium + dokumentation).
// De behålls som namngivna konstanter så att varje konkurrenttabell berättar
// samma RH-historia.
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

export const COMPETITORS_SV: Record<string, Competitor> = {
  "octane-ai": {
    slug: "octane-ai",
    name: "Octane AI",
    category: "Quiz-app för Shopify",
    title: "RevenueHunt vs Octane AI: alternativet till Octane AI",
    description:
      "RevenueHunt vs Octane AI: gratisplan, ingen Shopify-vattenstämpel och obegränsat antal quiz från $39/mo. Alternativet till Octane AI för produktquiz.",
    h1: "RevenueHunt vs Octane AI",
    heroSubtitle:
      "Båda skapar produktrekommendationsquiz för Shopify. RevenueHunt lägger till en gratisplan, obegränsat antal quiz och ingen vattenstämpel, till en bråkdel av priset.",
    intro: [
      "Octane AI är en app för produktquiz och personalisering byggd för Shopify. Prissättningen bygger på krediter, börjar på $50/mån och det finns ingen gratisplan. Det är ett kompetent verktyg, framför allt för stora skönhetsvarumärken. Men instegsplanen begränsar dig till två quiz och behåller Octane AI:s logga på ditt quiz tills du når Plus-planen för $200/mån.",
      "RevenueHunt är produktrekommendationsquizet som används av över 20 000 varumärken (4,9★, fler än 450 recensioner). Det startar gratis, lägger aldrig till en vattenstämpel på ditt Shopify-quiz på någon plan, låter dig skapa obegränsat antal quiz från första dagen och fungerar utöver Shopify på WooCommerce, BigCommerce, Magento, Wix och mer.",
    ],
    rows: [
      { feature: "Gratisplan", rh: RH.freePlan, them: "no" },
      { feature: "Startpris för betalplan", rh: RH.startingPaid, them: "$50/mo" },
      { feature: "Prismodell", rh: "Fast avgift, per svar", them: "Kreditbaserad + överskridning" },
      { feature: "Obegränsat antal quiz i instegsplanen", rh: RH.unlimitedQuizzes, them: "no" },
      { feature: "Ingen leverantörsvattenstämpel på Shopify (vilken plan som helst)", rh: RH.noForcedBranding, them: "Logga fram till Plus-planen på $200/mo" },
      { feature: "Rekommenderar riktiga produkter från din katalog", rh: RH.catalogRecs, them: "yes" },
      { feature: "Inbyggd Shopify-app (Built for Shopify)", rh: RH.shopifyNative, them: "no" },
      { feature: "Fungerar på WooCommerce, BigCommerce, Magento, Wix och mer", rh: RH.multiPlatform, them: "no" },
      { feature: "Quiz-byggare med AI (konfiguration på 60 sekunder)", rh: RH.aiBuilder, them: "yes" },
      { feature: "Obegränsad villkorlig logik / förgrening", rh: RH.branching, them: "yes" },
      { feature: "Avhoppsanalys fråga för fråga", rh: RH.analytics, them: "yes" },
      { feature: "Integrationer med Klaviyo och email / CRM", rh: RH.emailIntegrations, them: "yes" },
    ],
    whySwitch: [
      {
        title: "Börja gratis och betala sedan en fast avgift",
        body: "Octane AI har ingen gratisplan och börjar på $50/mån med krediter, med en överskridning på $0,10 per kredit när de tar slut. RevenueHunt har en på riktigt gratis plan och fast prissättning per svar från $39/mån. Inga kreditkalkyler, inga överraskningsavgifter.",
      },
      {
        title: "Behåll ditt varumärke från första dagen",
        body: "Octane AI visar sin logga på ditt quiz tills du uppgraderar till Plus-planen för $200/mån. RevenueHunt lägger aldrig till en vattenstämpel på Shopify-quiz, på någon plan, inklusive den gratis.",
      },
      {
        title: "Skapa så många quiz du behöver",
        body: "Octane AI:s instegsplan begränsar dig till två quiz. RevenueHunt låter dig skapa obegränsat antal quiz på varje plan, så du kan ha ett quiz per kollektion, kampanj eller landningssida.",
      },
      {
        title: "Sälj överallt, inte bara på Shopify",
        body: "Octane AI är exklusivt för Shopify. RevenueHunt fungerar inbyggt på Shopify och även på WooCommerce, BigCommerce, Magento, Wix, Squarespace och som fristående värdbaserat quiz.",
      },
    ],
    bestFor:
      "Octane AI är ett rimligt val för enterprise-skönhetsvarumärken som redan finns på Shopify Plus, som vill ha djup AI-personalisering och har budgeten för $200/mån och uppåt. Om du vill ha en gratisplan, fast prissättning, quiz utan varumärke eller stöd för flera plattformar passar RevenueHunt bättre.",
    migration:
      "Att byta från Octane AI går snabbt. Bygg om ditt quiz i RevenueHunts dra-och-släpp-byggare (eller generera det på 60 sekunder med vår AI Copilot), bädda in det och koppla Klaviyo. De flesta butiker är igång samma dag, och vårt supportteam hjälper dig att migrera.",
    faqs: [
      {
        question: "Är RevenueHunt billigare än Octane AI?",
        answer:
          "Ja. RevenueHunt har en gratisplan och betalplaner från $39/mån med fast prissättning baserad på svar. Octane AI har ingen gratisplan, börjar på $50/mån med ett kreditsystem och tar $0,10 per kredit vid överskridning.",
      },
      {
        question: "Lägger RevenueHunt till sin logga på mitt quiz som Octane AI gör?",
        answer:
          "Nej. RevenueHunt lägger aldrig till en vattenstämpel på Shopify-quiz på någon plan. Octane AI behåller sin logga på ditt quiz tills du uppgraderar till Plus-planen för $200/mån.",
      },
      {
        question: "Fungerar RevenueHunt på andra plattformar än Shopify?",
        answer:
          "Ja. RevenueHunt fungerar på Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace och som fristående värdbaserat quiz. Octane AI är exklusivt för Shopify.",
      },
      {
        question: "Kan jag migrera mitt Octane AI-quiz till RevenueHunt?",
        answer:
          "Ja. Återskapa ditt quiz i RevenueHunts byggare eller generera det med AI Quiz Copilot, och koppla sedan ditt email-verktyg. De flesta handlare är igång samma dag, och vårt team hjälper till med migreringen.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  typeform: {
    slug: "typeform",
    name: "Typeform",
    category: "Allmän formulär- och enkätbyggare",
    title: "RevenueHunt vs Typeform för ecommerce-quiz",
    description:
      "RevenueHunt vs Typeform: ett Built-for-Shopify-quiz som rekommenderar riktiga produkter och genererar försäljning, inte bara ett formulär. Gratisplan, från $39/mo.",
    h1: "RevenueHunt vs Typeform",
    heroSubtitle:
      "Typeform skapar vackra formulär och enkäter. RevenueHunt skapar produktrekommendationsquiz som kopplas till din Shopify-katalog och förvandlar svar till försäljning.",
    intro: [
      "Typeform är en allmän formulär- och enkätbyggare online. Det är fantastiskt för enkäter, formulär för leadsgenerering och research, med en konversationsdriven design, en fråga i taget. Men det har ingen inbyggd Shopify-integration, ingen synkronisering av produktkatalogen och ingen rekommendationsmotor. Det samlar in svar; det rekommenderar inte produkter.",
      "RevenueHunt är ett Built-for-Shopify produktrekommendationsquiz som används av över 20 000 varumärken (4,9★, fler än 450 recensioner). Det matchar varje köpares svar mot rätt produkter i din livekatalog, visar en personlig resultatsida med direkt lägg-i-varukorg och fångar leads i Klaviyo. En säljtratt, inte bara ett formulär.",
    ],
    rows: [
      { feature: "Gratisplan", rh: RH.freePlan, them: "yes (begränsad)" },
      { feature: "Startpris för betalplan", rh: RH.startingPaid, them: "$29/mo" },
      { feature: "Byggt för produktrekommendationer inom ecommerce", rh: RH.ecommerceRecs, them: "no" },
      { feature: "Rekommenderar riktiga produkter från din butiks katalog", rh: RH.catalogRecs, them: "no" },
      { feature: "Synkronisering av produktkatalogen", rh: "yes", them: "no" },
      { feature: "Inbyggd Shopify-app (Built for Shopify)", rh: RH.shopifyNative, them: "no" },
      { feature: "Resultatsida med direkt lägg-i-varukorg", rh: "yes", them: "no" },
      { feature: "Quiz-byggare med AI (konfiguration på 60 sekunder)", rh: RH.aiBuilder, them: "yes (formulär med AI)" },
      { feature: "Villkorlig logik / förgrening", rh: RH.branching, them: "yes (logiska hopp)" },
      { feature: "Avhoppsanalys fråga för fråga", rh: RH.analytics, them: "yes" },
      { feature: "Integrationer med Klaviyo och email / CRM", rh: RH.emailIntegrations, them: "yes" },
      { feature: "Fungerar på WooCommerce, BigCommerce, Magento och mer", rh: RH.multiPlatform, them: "no" },
    ],
    whySwitch: [
      {
        title: "Rekommenderar produkter, samlar inte bara in svar",
        body: "Typeform registrerar svaren och stannar där. RevenueHunts rekommendationsmotor rangordnar de exakta produkterna, varianterna och kollektionerna i din katalog utifrån varje köpares svar och visar dem på en personlig resultatsida.",
      },
      {
        title: "Byggt för Shopify och för ecommerce",
        body: "Typeform har ingen inbyggd Shopify-integration eller katalogsynkronisering. RevenueHunt är en Built-for-Shopify-app med katalogsynk i realtid och automatisk lokalisering av produkttitlar, beskrivningar och priser via Shopify Markets.",
      },
      {
        title: "En tratt, inte ett formulär",
        body: "RevenueHunt förvandlar ett quiz till en säljväg: personliga resultat, direkt lägg-i-varukorg, rabattblock och email-insamling i Klaviyo, så att quizet genererar riktiga intäkter, inte bara data.",
      },
      {
        title: "Gjort för handlare",
        body: "Glöm att bygga generiska formulär. Använd färdiga quizmallar för hudvård, kosttillskott, mode och mer, eller låt AI Copilot skapa ett komplett produktquiz utifrån en beskrivning av din butik på runt 60 sekunder.",
      },
    ],
    bestFor:
      "Typeform är utmärkt för enkäter, formulär för leadsgenerering, feedback och research där du inte behöver rekommendera produkter. Om ditt mål är att hjälpa Shopify-köpare att hitta rätt produkt och köpa den är RevenueHunt skräddarsytt för det.",
    migration:
      "Använder du redan ett Typeform-quiz? Bygg om det i RevenueHunt på några minuter, eller generera det med AI Copilot, länka dina produkter och koppla Klaviyo. Du behåller den konversationsdrivna känslan och lägger till en riktig rekommendationsmotor och lägg-i-varukorg.",
    faqs: [
      {
        question: "Kan Typeform rekommendera produkter som RevenueHunt?",
        answer:
          "Nej. Typeform är en allmän formulär- och enkätbyggare utan synkronisering av produktkatalogen eller rekommendationsmotor. RevenueHunt matchar quizsvaren mot riktiga produkter i din butik och visar dem på en personlig resultatsida med lägg-i-varukorg.",
      },
      {
        question: "Integreras RevenueHunt med Shopify men inte Typeform?",
        answer:
          "RevenueHunt är en Built-for-Shopify-app med katalogsynk i realtid och Shopify Markets-lokalisering. Typeform har ingen inbyggd produktrekommendationsintegration med Shopify. Det är inte byggt för produktupptäckt inom ecommerce.",
      },
      {
        question: "Är RevenueHunt bättre än Typeform för ett ecommerce-quiz?",
        answer:
          "För produktrekommendationsquiz, ja. RevenueHunt är skräddarsytt för det. För allmänna enkäter och leadsformulär är Typeform ett bra val. De löser olika problem.",
      },
      {
        question: "Kan jag fånga leads och skicka dem till Klaviyo?",
        answer:
          "Ja. RevenueHunt fångar email i quizet och synkroniserar svar och kundtaggar med Klaviyo, Mailchimp, Omnisend, HubSpot och mer, så att du kan följa upp med personliga kampanjer.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  zoovu: {
    slug: "zoovu",
    name: "Zoovu",
    category: "Enterprise-plattform för produktupptäckt",
    title: "RevenueHunt vs Zoovu: ett självbetjäningsalternativ",
    description:
      "RevenueHunt vs Zoovu: ett fokuserat produktquiz med självbetjäning för Shopify, med gratisplan och priser från $39/mo, inte en enterprise-svit för produktupptäckt.",
    h1: "RevenueHunt vs Zoovu",
    heroSubtitle:
      "Zoovu är en enterprise-plattform för produktupptäckt och guidad försäljning som säljs via demo. RevenueHunt är ett fokuserat produktquiz du kan installera idag: gratis att börja, transparent prissättning, igång samma dag.",
    intro: [
      "Zoovu är en enterprise-plattform för produktupptäckt som samlar AI-sökning, guidad försäljning, produktrekommendationer och visuella konfiguratorer (CPQ) för stora B2C- och B2B-varumärken med enorma, komplexa kataloger. Den är plattformsoberoende, säljs via demo med anpassad enterprise-prissättning och har ingen gratisplan eller registrering med självbetjäning.",
      "RevenueHunt är ett fokuserat produktrekommendationsquiz som används av över 20 000 varumärken (4,9★, fler än 450 recensioner). I stället för en enterprise-svit för produktupptäckt gör det en enda sak exceptionellt bra, att vägleda Shopify-köpare till rätt produkt, med transparent prissättning, en gratisplan och konfiguration samma dag, utan att behöva ett säljsamtal.",
    ],
    rows: [
      { feature: "Gratisplan", rh: RH.freePlan, them: "no" },
      { feature: "Transparent offentlig prissättning", rh: RH.transparentPricing, them: "Anpassad / begär en demo" },
      { feature: "Startpris", rh: RH.startingPaid, them: "Säljdrivet (enterprise)" },
      { feature: "Konfiguration med självbetjäning (inget säljsamtal)", rh: "yes", them: "no" },
      { feature: "Skräddarsytt för produktrekommendationsquiz", rh: RH.ecommerceRecs, them: "Quizet är en modul i en upptäcktssvit" },
      { feature: "Rekommenderar riktiga produkter från din katalog", rh: RH.catalogRecs, them: "yes" },
      { feature: "Inbyggd Shopify-app (Built for Shopify)", rh: RH.shopifyNative, them: "Via integration" },
      { feature: "Quiz-byggare med AI (konfiguration på 60 sekunder)", rh: RH.aiBuilder, them: "Enterprise-AI-svit" },
      { feature: "Obegränsat antal quiz", rh: RH.unlimitedQuizzes, them: "yes" },
      { feature: "Obegränsad villkorlig logik / förgrening", rh: RH.branching, them: "yes" },
      { feature: "Avhoppsanalys fråga för fråga", rh: RH.analytics, them: "yes" },
      { feature: "Integrationer med Klaviyo och email / CRM", rh: RH.emailIntegrations, them: "yes" },
    ],
    whySwitch: [
      {
        title: "Självbetjäning, inte ett säljsamtal",
        body: "Zoovu säljs via demos och anpassade enterprise-avtal utan offentlig prissättning. RevenueHunt är installera-och-kör: välj en plan, skapa ditt quiz och publicera. Inga företagsinköp, inget implementeringsprojekt.",
      },
      {
        title: "Igång på minuter, inte en utrullning",
        body: "Zoovu är en tung upptäcktssvit som täcker sökning, konfiguratorer och guidad försäljning över många system. RevenueHunt är en fokuserad quiz-app som de flesta handlare lanserar samma dag, med en AI Copilot som sätter ihop ett komplett quiz på 60 sekunder.",
      },
      {
        title: "Prissättning som passar ett växande varumärke",
        body: "Enterprise-plattformar för produktupptäckt prissätts för globala kataloger och stora team. RevenueHunt börjar gratis och skalar per svar från $39/mån, anpassat för varumärken på Shopify och Shopify Plus.",
      },
      {
        title: "Built-for-Shopify-enkelhet",
        body: "RevenueHunt är en Built-for-Shopify-app med katalogsynk i realtid och Shopify Markets-lokalisering, betygsatt 4,9★ av fler än 450 handlare. Det djup du behöver för produktupptäckt utan enterprise-tyngden.",
      },
    ],
    bestFor:
      "Zoovu passar stora företag med massiva, komplexa kataloger (konsumentelektronik, vitvaror, industri, B2B) som behöver konfiguratorer, CPQ och guidad försäljning över många system, med budgeten och teamet för en enterprise-utrullning. Om du vill ha ett fokuserat, prisvärt Shopify-quiz med självbetjäning passar RevenueHunt bättre.",
    migration:
      "Att byta från Zoovu är enkelt. Skapa ditt quiz i RevenueHunt (eller generera det med AI Copilot), bädda in det och koppla Klaviyo eller ditt CRM. Inget implementeringsprojekt. De flesta butiker är igång samma dag, och supporten hjälper dig dit.",
    faqs: [
      {
        question: "Vad kostar RevenueHunt jämfört med Zoovu?",
        answer:
          "RevenueHunt har en gratisplan och transparenta betalplaner från $39/mån. Zoovu publicerar inga priser. Det är en säljdriven enterprise-plattform som lämnar anpassade prisuppgifter efter en demo.",
      },
      {
        question: "Är RevenueHunt en enterprise-plattform för produktupptäckt som Zoovu?",
        answer:
          "Nej, och det är poängen. Zoovu samlar AI-sökning, konfiguratorer, CPQ och guidad försäljning för stora kataloger. RevenueHunt fokuserar på produktrekommendationsquiz för Shopify och gör det enda jobbet exceptionellt bra, med konfiguration via självbetjäning och inget säljsamtal.",
      },
      {
        question: "Gör RevenueHunt guidad försäljning som Zoovu?",
        answer:
          "Ja. Ett RevenueHunt-quiz är guidad försäljning: det ställer rätt frågor och matchar svaren mot de exakta produkterna i din katalog, med en personlig resultatsida och direkt lägg-i-varukorg, utan enterprise-prissättning eller utrullning.",
      },
      {
        question: "Hur lång tid tar konfigurationen jämfört med Zoovu?",
        answer:
          "De flesta RevenueHunt-handlare lanserar samma dag, och AI Quiz Copilot kan sätta ihop ett komplett quiz på runt 60 sekunder. Zoovu är vanligtvis en säljdriven enterprise-implementering.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  jebbit: {
    slug: "jebbit",
    name: "Jebbit",
    category: "Enterprise-plattform för deklarerad data (nu en del av BlueConic)",
    title: "RevenueHunt vs Jebbit: ett självbetjäningsalternativ",
    description:
      "RevenueHunt vs Jebbit: ett fristående produktquiz med självbetjäning för Shopify, med gratisplan från $39/mo. Jebbit är nu en del av BlueConics enterprise-CDP.",
    h1: "RevenueHunt vs Jebbit",
    heroSubtitle:
      "Jebbit är nu en del av BlueConics enterprise-plattform för kunddata, som säljs via demo. RevenueHunt är ett fristående produktquiz med självbetjäning: gratis att börja, inbyggt i Shopify, igång samma dag.",
    intro: [
      "Jebbit skapar interaktiva quiz, produktfinnare och preferensflöden för att samla in deklarerad data (zero-party). Företaget förvärvades och är nu ”Experiences by Jebbit”, en del av BlueConics plattform för kunddata, riktad till enterprise- och mid-market-B2C-varumärken (L'Oréal, Express, Heineken), plattformsoberoende och sålt via demo utan offentliga priser eller gratisplan.",
      "RevenueHunt är ett fristående produktrekommendationsquiz som används av över 20 000 varumärken (4,9★, fler än 450 recensioner). Du behöver inte köpa en CDP för att använda det: det är ett fokuserat, Built-for-Shopify-quiz, med transparent prissättning, en gratisplan och konfiguration samma dag, med självbetjäning, utan säljsamtal.",
    ],
    rows: [
      { feature: "Gratisplan", rh: RH.freePlan, them: "no" },
      { feature: "Transparent offentlig prissättning", rh: RH.transparentPricing, them: "Anpassad / begär en demo" },
      { feature: "Startpris", rh: RH.startingPaid, them: "Säljdrivet (enterprise)" },
      { feature: "Konfiguration med självbetjäning (inget säljsamtal)", rh: "yes", them: "no" },
      { feature: "Fristående produkt (du behöver inte köpa en plattform)", rh: "yes", them: "Nu en del av BlueConics CDP" },
      { feature: "Rekommenderar riktiga produkter från din katalog", rh: RH.catalogRecs, them: "yes" },
      { feature: "Inbyggd Shopify-app (Built for Shopify)", rh: RH.shopifyNative, them: "Via integration" },
      { feature: "Quiz-byggare med AI (konfiguration på 60 sekunder)", rh: RH.aiBuilder, them: "no" },
      { feature: "Obegränsat antal quiz", rh: RH.unlimitedQuizzes, them: "yes" },
      { feature: "Obegränsad villkorlig logik / förgrening", rh: RH.branching, them: "yes" },
      { feature: "Avhoppsanalys fråga för fråga", rh: RH.analytics, them: "yes" },
      { feature: "Fångar zero-party-data / deklarerad data", rh: "yes", them: "yes" },
    ],
    whySwitch: [
      {
        title: "Ett fristående quiz, inte köpet av en plattform",
        body: "Jebbit är nu ”Experiences by Jebbit” inom BlueConics CDP. RevenueHunt är en fokuserad app du kan använda på egen hand. Ingen kunddataplattform att köpa eller implementera.",
      },
      {
        title: "Självbetjäning, inte ett säljsamtal",
        body: "Jebbit/BlueConic säljs via demos och anpassade enterprise-avtal utan offentlig prissättning. RevenueHunt är installera-och-kör, med en gratisplan och transparent prissättning från $39/mån.",
      },
      {
        title: "Byggt för Shopify, igång samma dag",
        body: "RevenueHunt är en Built-for-Shopify-app med katalogsynk i realtid och direkt lägg-i-varukorg, och en AI Copilot som sätter ihop ett komplett quiz på 60 sekunder. De flesta handlare lanserar samma dag.",
      },
      {
        title: "Du äger fortfarande din zero-party-data",
        body: "Varje quizsvar är zero-party-data som dina köpare frivilligt erbjuder. RevenueHunt synkroniserar svar och kundtaggar med Klaviyo, Mailchimp, Omnisend, HubSpot och mer. Ingen CDP behövs för att sätta den i arbete.",
      },
    ],
    bestFor:
      "Jebbit, som en del av BlueConic, passar enterprise-B2C-varumärken som vill ha upplevelser med deklarerad data tätt kopplade till en komplett kunddataplattform och aktiverade över många kanaler, med budgeten för en CDP. Om du vill ha ett fristående, prisvärt Shopify-quiz med självbetjäning passar RevenueHunt bättre.",
    migration:
      "Att lämna Jebbit, eller utvärdera BlueConic, är enkelt. Skapa ditt quiz i RevenueHunt (eller generera det med AI Copilot), bädda in det och koppla Klaviyo eller ditt CRM. De flesta butiker är igång samma dag, och din zero-party-data fortsätter att flöda till dina email-verktyg.",
    faqs: [
      {
        question: "Finns Jebbit fortfarande tillgängligt på egen hand?",
        answer:
          "Jebbit är nu ”Experiences by Jebbit”, en del av BlueConics plattform för kunddata. RevenueHunt är ett fristående produktquiz du kan använda utan att köpa en CDP: självbetjäning, med en gratisplan från $39/mån.",
      },
      {
        question: "Vad kostar RevenueHunt jämfört med Jebbit?",
        answer:
          "RevenueHunt har en gratisplan och transparenta betalplaner från $39/mån. Jebbit/BlueConic publicerar inga priser. Det är en säljdriven enterprise-plattform som lämnar anpassade prisuppgifter efter en demo.",
      },
      {
        question: "Samlar RevenueHunt in zero-party-data (deklarerad) som Jebbit?",
        answer:
          "Ja. Varje quizsvar är zero-party-data som dina köpare frivilligt erbjuder. RevenueHunt synkroniserar svar och kundtaggar med Klaviyo, Mailchimp, Omnisend, HubSpot och mer för segmentering och personlig marknadsföring.",
      },
      {
        question: "Hur lång tid tar konfigurationen jämfört med Jebbit?",
        answer:
          "De flesta RevenueHunt-handlare lanserar samma dag, och AI Quiz Copilot kan sätta ihop ett komplett quiz på runt 60 sekunder. Jebbit/BlueConic är vanligtvis en säljdriven enterprise-implementering.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  nosto: {
    slug: "nosto",
    name: "Nosto",
    category: "Enterprise-plattform för personalisering",
    title: "RevenueHunt vs Nosto: ett självbetjäningsalternativ",
    description:
      "RevenueHunt vs Nosto: ett fokuserat produktquiz med självbetjäning som fångar zero-party-data, med gratisplan från $39/mo, inte en enterprise-svit för personalisering.",
    h1: "RevenueHunt vs Nosto",
    heroSubtitle:
      "Nosto är en enterprise-svit för personalisering, sökning och merchandising som säljs via demo. RevenueHunt är ett fokuserat zero-party-produktquiz du kan installera idag: gratis att börja, igång samma dag.",
    intro: [
      "Nosto är en Commerce Experience Platform som samlar AI-drivna produktrekommendationer, personaliserad sökning på sajten, merchandising och innehållspersonalisering för enterprise- och mid-market-varumärken. Den är plattformsoberoende, säljs via demo med anpassad enterprise-prissättning och har ingen gratisplan eller registrering med självbetjäning. Dess personalisering bygger främst på beteendedata snarare än quiz.",
      "RevenueHunt är ett fokuserat produktrekommendationsquiz som används av över 20 000 varumärken (4,9★, fler än 450 recensioner). I stället för en enterprise-svit vägleder det köpare till rätt produkt genom att fråga dem direkt, fångar zero-party-data som du äger, med transparent prissättning, en gratisplan och konfiguration samma dag, utan att behöva ett säljsamtal.",
    ],
    rows: [
      { feature: "Gratisplan", rh: RH.freePlan, them: "no" },
      { feature: "Transparent offentlig prissättning", rh: RH.transparentPricing, them: "Anpassad / begär en demo" },
      { feature: "Startpris", rh: RH.startingPaid, them: "Säljdrivet (enterprise)" },
      { feature: "Konfiguration med självbetjäning (inget säljsamtal)", rh: "yes", them: "no" },
      { feature: "Skräddarsytt för produktrekommendationsquiz", rh: RH.ecommerceRecs, them: "Personaliseringssvit, inte quizdriven" },
      { feature: "Fångar zero-party-data (köparna berättar direkt för dig)", rh: "yes", them: "Främst beteendebaserad / prediktiv" },
      { feature: "Rekommenderar riktiga produkter från din katalog", rh: RH.catalogRecs, them: "yes" },
      { feature: "Inbyggd Shopify-app (Built for Shopify)", rh: RH.shopifyNative, them: "yes" },
      { feature: "Quiz-byggare med AI (konfiguration på 60 sekunder)", rh: RH.aiBuilder, them: "no" },
      { feature: "Obegränsat antal quiz", rh: RH.unlimitedQuizzes, them: "Det är inte ett quiz-verktyg" },
      { feature: "Avhoppsanalys fråga för fråga", rh: RH.analytics, them: "yes" },
      { feature: "Integrationer med Klaviyo och email / CRM", rh: RH.emailIntegrations, them: "yes" },
    ],
    whySwitch: [
      {
        title: "Självbetjäning, inte ett säljsamtal",
        body: "Nosto säljs via demos och anpassade enterprise-avtal utan offentlig prissättning. RevenueHunt är installera-och-kör: välj en plan, skapa ditt quiz och publicera, med en gratisplan och transparent prissättning från $39/mån.",
      },
      {
        title: "Zero-party-data, inte bara beteendespårning",
        body: "Nosto personaliserar främst utifrån beteendemässiga och prediktiva signaler. RevenueHunt frågar köparna direkt via ett quiz och fångar zero-party-data som du äger och kan synkronisera med Klaviyo, Mailchimp, Omnisend och mer.",
      },
      {
        title: "Igång på minuter, inte en utrullning",
        body: "Nosto är en svit med flera moduler (rekommendationer, sökning, merchandising) som normalt kräver onboarding. RevenueHunt är en fokuserad quiz-app som de flesta handlare lanserar samma dag, med en AI Copilot som sätter ihop ett komplett quiz på 60 sekunder.",
      },
      {
        title: "Prissättning som passar ett växande varumärke",
        body: "Enterprise-sviter för personalisering prissätts för stora team och kataloger. RevenueHunt börjar gratis och skalar per svar från $39/mån, anpassat för varumärken på Shopify och Shopify Plus.",
      },
    ],
    bestFor:
      "Nosto passar enterprise- och mid-market-varumärken som vill ha en komplett svit för beteendemässig personalisering, sökning och merchandising över flera butiksfronter, med budgeten och teamet för en enterprise-utrullning. Om du vill ha ett fokuserat, prisvärt produktquiz med självbetjäning som fångar zero-party-data passar RevenueHunt bättre.",
    migration:
      "Att byta från Nosto är enkelt. Skapa ditt quiz i RevenueHunt (eller generera det med AI Copilot), bädda in det och koppla Klaviyo eller ditt CRM. Inget implementeringsprojekt. De flesta butiker är igång samma dag, och din zero-party-data flödar direkt till dina email-verktyg.",
    faqs: [
      {
        question: "Vad kostar RevenueHunt jämfört med Nosto?",
        answer:
          "RevenueHunt har en gratisplan och transparenta betalplaner från $39/mån. Nosto publicerar inga priser. Det är en säljdriven enterprise-plattform som lämnar anpassade prisuppgifter efter en demo.",
      },
      {
        question: "Är RevenueHunt en personaliseringssvit som Nosto?",
        answer:
          "Nej, och det är poängen. Nosto samlar beteendebaserade rekommendationer, sökning på sajten och merchandising. RevenueHunt fokuserar på produktrekommendationsquiz som fångar zero-party-data, med konfiguration via självbetjäning och inget säljsamtal.",
      },
      {
        question: "Använder RevenueHunt zero-party-data i stället för beteendespårning?",
        answer:
          "Ja. RevenueHunt vägleder köpare genom ett quiz och de berättar sina preferenser, mål och begränsningar direkt för dig: zero-party-data som du äger, i stället för att härleda avsikt utifrån beteende och cookies.",
      },
      {
        question: "Hur lång tid tar konfigurationen jämfört med Nosto?",
        answer:
          "De flesta RevenueHunt-handlare lanserar samma dag, och AI Quiz Copilot kan sätta ihop ett komplett quiz på runt 60 sekunder. Nosto är vanligtvis en säljdriven enterprise-implementering.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  tolstoy: {
    slug: "tolstoy",
    name: "Tolstoy",
    category: "Plattform för shoppingbar video och quiz",
    title: "RevenueHunt vs Tolstoy: ett quizfokuserat alternativ",
    description:
      "RevenueHunt vs Tolstoy: ett skräddarsytt produktquiz med en riktig rekommendationsmotor och zero-party-data, jämfört med en videoplattform med en quizfunktion.",
    h1: "RevenueHunt vs Tolstoy",
    heroSubtitle:
      "Tolstoy är en plattform för shoppingbar video med en quizfunktion. RevenueHunt är ett skräddarsytt produktrekommendationsquiz, med en riktig rekommendationsmotor och zero-party-data.",
    intro: [
      "Tolstoy är en AI-driven handelsplattform byggd kring shoppingbar video, AI-genererad media och en AI-shoppingagent, med prissättning baserad på visningar från $19/mån. Det är ett starkt verktyg med fokus på video. Men produktquizet är en sekundär funktion vid sidan av videoupplevelsen.",
      "RevenueHunt är ett produktrekommendationsquiz som används av över 20 000 varumärken (4,9★, fler än 450 recensioner). Det är quizfokuserat: en dedikerad rekommendationsmotor matchar varje köpares svar mot rätt produkter i din katalog, fångar zero-party-data och konverterar till en personlig resultatsida, på Shopify, WooCommerce, BigCommerce, Magento, Wix och mer.",
    ],
    rows: [
      { feature: "Gratisplan", rh: RH.freePlan, them: "yes (begränsad)" },
      { feature: "Startpris för betalplan", rh: RH.startingPaid, them: "$19/mo" },
      { feature: "Prismodell", rh: "Fast avgift, per svar", them: "Per visning + AI-krediter" },
      { feature: "Skräddarsytt för produktrekommendationsquiz", rh: RH.ecommerceRecs, them: "Quizet är en sekundär funktion (videofokuserat)" },
      { feature: "Dedikerad rekommendationsmotor (positivt röst och exkludering, resultatsida)", rh: "yes", them: "Videodriven shopping" },
      { feature: "Rekommenderar riktiga produkter från din katalog", rh: RH.catalogRecs, them: "yes" },
      { feature: "Fångar zero-party-data (köparna berättar direkt för dig)", rh: "yes", them: "Främst data om videointeraktion" },
      { feature: "Inbyggd Shopify-app (Built for Shopify)", rh: RH.shopifyNative, them: "yes" },
      { feature: "Fungerar på WooCommerce, BigCommerce, Magento, Wix och mer", rh: RH.multiPlatform, them: "no" },
      { feature: "Quiz-byggare med AI (konfiguration på 60 sekunder)", rh: RH.aiBuilder, them: "Videofokuserad AI" },
      { feature: "Avhoppsanalys fråga för fråga", rh: RH.analytics, them: "yes" },
      { feature: "Integrationer med Klaviyo och email / CRM", rh: RH.emailIntegrations, them: "yes" },
    ],
    whySwitch: [
      {
        title: "Ett quizfokuserat verktyg, inte ett videotillägg",
        body: "Tolstoy är en plattform för shoppingbar video där quizet är en sekundär funktion. RevenueHunt är skräddarsytt för produktrekommendationsquiz, med en dedikerad rekommendationsmotor och en resultatsida fokuserad på konvertering.",
      },
      {
        title: "En riktig rekommendationsmotor",
        body: "RevenueHunt rangordnar de exakta produkterna, varianterna och kollektionerna i din livekatalog med en modell för positivt röst och exkludering, med villkorliga resultatblock och direkt lägg-i-varukorg. Ett djup som quizet i ett videoverktyg inte matchar.",
      },
      {
        title: "Zero-party-data som du äger",
        body: "RevenueHunt fångar det köparna berättar för dig (preferenser, mål, begränsningar) och synkroniserar det med Klaviyo, Mailchimp, Omnisend och mer för segmentering. Tolstoys styrka är videointeraktion, inte strukturerad data från ett quiz.",
      },
      {
        title: "Sälj överallt, beprövat i skala",
        body: "RevenueHunt fungerar inbyggt på Shopify och även på WooCommerce, BigCommerce, Magento, Wix, Squarespace och fristående, med förtroendet från över 20 000 varumärken och 4,9★ från fler än 450 recensioner.",
      },
    ],
    bestFor:
      "Tolstoy är ett bra val om din strategi är videodriven (shoppingbar video, UGC, TikTok Shop) och ett quiz är önskvärt men inte avgörande. Om du vill ha ett dedikerat produktrekommendationsquiz med en riktig rekommendationsmotor och zero-party-data passar RevenueHunt bättre.",
    migration:
      "Om du har använt ett quiz inuti Tolstoy går bytet snabbt. Bygg om det i RevenueHunts byggare (eller generera det på 60 sekunder med vår AI Copilot), bädda in det och koppla Klaviyo. De flesta butiker är igång samma dag, och vårt supportteam hjälper dig att migrera.",
    faqs: [
      {
        question: "Är RevenueHunt bättre än Tolstoy för ett produktquiz?",
        answer:
          "För ett dedikerat produktrekommendationsquiz, ja. RevenueHunt är skräddarsytt för det, med en riktig rekommendationsmotor och zero-party-data. Tolstoy är videofokuserat, med quizet som en sekundär funktion. För shoppingbar video specifikt är Tolstoy skräddarsytt.",
      },
      {
        question: "Gör Tolstoy produktrekommendationsquiz?",
        answer:
          "Ja, som en sekundär funktion vid sidan av sin shoppingbara video. RevenueHunt är quizfokuserat: det är byggt kring quizet och dess rekommendationsmotor, resultatsida och insamling av zero-party-data.",
      },
      {
        question: "Stöder RevenueHunt också video?",
        answer:
          "Ja. Du kan lägga till video i quizfrågorna och på den personliga resultatsidan. RevenueHunt är quizfokuserat snarare än en videoplattform, så videon stöder quizet och inte tvärtom.",
      },
      {
        question: "Kan jag fånga zero-party-data och skicka den till Klaviyo?",
        answer:
          "Ja. RevenueHunt fångar quizsvaren som zero-party-data och synkroniserar svar och kundtaggar med Klaviyo, Mailchimp, Omnisend, HubSpot och mer för segmentering och personlig marknadsföring.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },
};
