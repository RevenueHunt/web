import type { Competitor } from "../competitors";

// Shared RevenueHunt column values - kept identical to competitors.ts so the
// RH column tells the same story in every locale (tokens/prices, not translated).
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

export const COMPETITORS_IT: Record<string, Competitor> = {
  "octane-ai": {
    slug: "octane-ai",
    name: "Octane AI",
    category: "app quiz per Shopify",
    title: "RevenueHunt vs Octane AI: l'alternativa a Octane AI",
    description:
      "RevenueHunt vs Octane AI: piano gratuito, nessun watermark Shopify e quiz illimitati da $39/mo. L'alternativa a Octane AI per i quiz sui prodotti.",
    h1: "RevenueHunt vs Octane AI",
    heroSubtitle:
      "Entrambi creano quiz di raccomandazione prodotti per Shopify. RevenueHunt aggiunge un piano gratuito, quiz illimitati e nessun watermark, a una frazione del prezzo.",
    intro: [
      "Octane AI è un'app per quiz sui prodotti e personalizzazione creata per Shopify. Il prezzo è basato sui crediti, parte da $50/mese e non c'è alcun piano gratuito. È uno strumento valido, soprattutto per i brand di bellezza più grandi. Ma il piano di ingresso ti limita a due quiz e mantiene il logo Octane AI sul tuo quiz finché non passi al piano Plus da $200/mese.",
      "RevenueHunt è il Quiz di raccomandazione dei prodotti usato da oltre 20.000 brand (4,9★, oltre 450 recensioni). Parte gratis, non aggiunge mai un watermark al tuo quiz Shopify in nessun piano, ti permette di creare quiz illimitati fin dal primo giorno e funziona oltre Shopify, su WooCommerce, BigCommerce, Magento, Wix e altro.",
    ],
    rows: [
      { feature: "Piano gratuito", rh: RH.freePlan, them: "no" },
      { feature: "Prezzo iniziale a pagamento", rh: RH.startingPaid, them: "$50/mo" },
      { feature: "Modello di prezzo", rh: "Fisso, in base alle risposte", them: "Basato sui crediti + eccedenza" },
      { feature: "Quiz illimitati nel piano di ingresso", rh: RH.unlimitedQuizzes, them: "no" },
      { feature: "Nessun watermark del fornitore su Shopify (qualsiasi piano)", rh: RH.noForcedBranding, them: "Logo fino al piano Plus da $200/mo" },
      { feature: "Raccomanda prodotti reali dal tuo catalogo", rh: RH.catalogRecs, them: "yes" },
      { feature: "App Shopify nativa (Built for Shopify)", rh: RH.shopifyNative, them: "no" },
      { feature: "Funziona su WooCommerce, BigCommerce, Magento, Wix e altro", rh: RH.multiPlatform, them: "no" },
      { feature: "Builder di quiz con AI (setup in 60 secondi)", rh: RH.aiBuilder, them: "yes" },
      { feature: "Logica condizionale / branching illimitata", rh: RH.branching, them: "yes" },
      { feature: "Analisi degli abbandoni domanda per domanda", rh: RH.analytics, them: "yes" },
      { feature: "Integrazioni con Klaviyo ed email / CRM", rh: RH.emailIntegrations, them: "yes" },
    ],
    whySwitch: [
      {
        title: "Parti gratis, poi paghi un prezzo fisso",
        body: "Octane AI non ha un piano gratuito e parte da $50/mese a crediti, con eccedenze di $0,10 per credito una volta esauriti. RevenueHunt ha un piano davvero gratuito e un prezzo fisso in base alle risposte da $39/mese. Niente calcoli sui crediti, nessuna eccedenza a sorpresa.",
      },
      {
        title: "Mantieni il tuo branding fin dal primo giorno",
        body: "Octane AI mostra il suo logo sul tuo quiz finché non passi al piano Plus da $200/mese. RevenueHunt non aggiunge mai un watermark ai quiz Shopify, in nessun piano, incluso quello gratuito.",
      },
      {
        title: "Crea tutti i quiz che ti servono",
        body: "Il piano di ingresso di Octane AI ti limita a due quiz. RevenueHunt ti permette di creare quiz illimitati in ogni piano, così puoi avere un quiz per ogni collezione, campagna o landing page.",
      },
      {
        title: "Vendi ovunque, non solo su Shopify",
        body: "Octane AI funziona solo su Shopify. RevenueHunt funziona in modo nativo su Shopify e anche su WooCommerce, BigCommerce, Magento, Wix, Squarespace e come quiz ospitato standalone.",
      },
    ],
    bestFor:
      "Octane AI è una scelta ragionevole per i brand di bellezza enterprise già su Shopify Plus che vogliono una personalizzazione AI avanzata e hanno il budget per $200/mese e oltre. Se vuoi un piano gratuito, prezzi fissi, quiz senza branding o supporto multi-piattaforma, RevenueHunt è la scelta migliore.",
    migration:
      "Passare da Octane AI è veloce. Ricostruisci il tuo quiz nel builder drag-and-drop di RevenueHunt (o generalo in 60 secondi con il nostro AI Copilot), incorporalo e collega Klaviyo. La maggior parte degli store va online lo stesso giorno e il nostro team di supporto ti aiuta nella migrazione.",
    faqs: [
      {
        question: "RevenueHunt costa meno di Octane AI?",
        answer:
          "Sì. RevenueHunt ha un piano gratuito e piani a pagamento da $39/mese con prezzi fissi basati sulle risposte. Octane AI non ha un piano gratuito, parte da $50/mese con un sistema a crediti e addebita $0,10 per credito per le eccedenze.",
      },
      {
        question: "RevenueHunt aggiunge il suo logo al mio quiz come fa Octane AI?",
        answer:
          "No. RevenueHunt non aggiunge mai un watermark ai quiz Shopify in nessun piano. Octane AI mantiene il suo logo sul tuo quiz finché non passi al piano Plus da $200/mese.",
      },
      {
        question: "RevenueHunt funziona su piattaforme diverse da Shopify?",
        answer:
          "Sì. RevenueHunt funziona su Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace e come quiz ospitato standalone. Octane AI funziona solo su Shopify.",
      },
      {
        question: "Posso migrare il mio quiz Octane AI su RevenueHunt?",
        answer:
          "Sì. Ricrea il tuo quiz nel builder di RevenueHunt o generalo con l'AI Quiz Copilot, poi collega il tuo strumento email. La maggior parte dei merchant va online lo stesso giorno e il nostro team ti aiuta con la migrazione.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  typeform: {
    slug: "typeform",
    name: "Typeform",
    category: "builder generico di form e sondaggi",
    title: "RevenueHunt vs Typeform per quiz ecommerce",
    description:
      "RevenueHunt vs Typeform: un quiz Built-for-Shopify che raccomanda prodotti reali e genera vendite, non solo un form. Piano gratuito, da $39/mo.",
    h1: "RevenueHunt vs Typeform",
    heroSubtitle:
      "Typeform crea form e sondaggi bellissimi. RevenueHunt crea quiz di raccomandazione prodotti che si collegano al tuo catalogo Shopify e trasformano le risposte in vendite.",
    intro: [
      "Typeform è un builder generico di form e sondaggi online. È ottimo per sondaggi, form di lead generation e ricerca, con un design conversazionale, una domanda alla volta. Ma non ha un'integrazione nativa con Shopify, nessuna sincronizzazione del catalogo prodotti e nessun motore di raccomandazione. Raccoglie risposte; non raccomanda prodotti.",
      "RevenueHunt è un Quiz di raccomandazione dei prodotti Built-for-Shopify usato da oltre 20.000 brand (4,9★, oltre 450 recensioni). Mappa le risposte di ogni cliente con i prodotti giusti dal tuo catalogo live, mostra una pagina dei risultati personalizzata con aggiungi al carrello diretto e cattura lead su Klaviyo. Un funnel di vendita, non solo un form.",
    ],
    rows: [
      { feature: "Piano gratuito", rh: RH.freePlan, them: "sì (limitato)" },
      { feature: "Prezzo iniziale a pagamento", rh: RH.startingPaid, them: "$29/mo" },
      { feature: "Creato per raccomandazioni prodotti ecommerce", rh: RH.ecommerceRecs, them: "no" },
      { feature: "Raccomanda prodotti reali dal catalogo del tuo store", rh: RH.catalogRecs, them: "no" },
      { feature: "Sincronizzazione del catalogo prodotti", rh: "yes", them: "no" },
      { feature: "App Shopify nativa (Built for Shopify)", rh: RH.shopifyNative, them: "no" },
      { feature: "Pagina dei risultati con aggiungi al carrello diretto", rh: "yes", them: "no" },
      { feature: "Builder di quiz con AI (setup in 60 secondi)", rh: RH.aiBuilder, them: "sì (form con AI)" },
      { feature: "Logica condizionale / branching", rh: RH.branching, them: "sì (salti logici)" },
      { feature: "Analisi degli abbandoni domanda per domanda", rh: RH.analytics, them: "yes" },
      { feature: "Integrazioni con Klaviyo ed email / CRM", rh: RH.emailIntegrations, them: "yes" },
      { feature: "Funziona su WooCommerce, BigCommerce, Magento e altro", rh: RH.multiPlatform, them: "no" },
    ],
    whySwitch: [
      {
        title: "Raccomanda prodotti, non si limita a raccogliere risposte",
        body: "Typeform registra le risposte e si ferma lì. Il motore di raccomandazione di RevenueHunt classifica i prodotti, le varianti e le collezioni esatte dal tuo catalogo in base alle risposte di ogni cliente e le mostra su una pagina dei risultati personalizzata.",
      },
      {
        title: "Creato per Shopify e l'ecommerce",
        body: "Typeform non ha un'integrazione nativa con Shopify né la sincronizzazione del catalogo. RevenueHunt è un'app Built-for-Shopify con sincronizzazione del catalogo in tempo reale e localizzazione automatica di titoli, descrizioni e prezzi dei prodotti tramite Shopify Markets.",
      },
      {
        title: "Un funnel, non un form",
        body: "RevenueHunt trasforma un quiz in un percorso di vendita: risultati personalizzati, aggiungi al carrello diretto, blocchi sconto e cattura email su Klaviyo, così il quiz genera davvero ricavi, non solo dati.",
      },
      {
        title: "Pensato per i merchant",
        body: "Niente costruzione di form generici. Usa template di quiz pronti per skincare, integratori, moda e altro, oppure lascia che l'AI Copilot crei un quiz prodotti completo da una descrizione del tuo store in circa 60 secondi.",
      },
    ],
    bestFor:
      "Typeform è eccellente per sondaggi, form di lead generation, feedback e ricerca, dove non hai bisogno di raccomandare prodotti. Se il tuo obiettivo è aiutare i clienti Shopify a trovare il prodotto giusto e acquistarlo, RevenueHunt è costruito apposta per questo.",
    migration:
      "Usi già un quiz Typeform? Ricostruiscilo in RevenueHunt in pochi minuti, o generalo con l'AI Copilot, collega i tuoi prodotti e Klaviyo. Mantieni il tocco conversazionale e aggiungi un vero motore di raccomandazione e l'aggiungi al carrello.",
    faqs: [
      {
        question: "Typeform può raccomandare prodotti come RevenueHunt?",
        answer:
          "No. Typeform è un builder generico di form e sondaggi senza sincronizzazione del catalogo prodotti né motore di raccomandazione. RevenueHunt mappa le risposte del quiz con prodotti reali dal tuo store e li mostra su una pagina dei risultati personalizzata con aggiungi al carrello.",
      },
      {
        question: "RevenueHunt si integra con Shopify mentre Typeform no?",
        answer:
          "RevenueHunt è un'app Built-for-Shopify con sincronizzazione del catalogo in tempo reale e localizzazione Shopify Markets. Typeform non ha un'integrazione nativa di raccomandazione prodotti con Shopify. Non è creato per la product discovery ecommerce.",
      },
      {
        question: "RevenueHunt è migliore di Typeform per un quiz ecommerce?",
        answer:
          "Per i quiz di raccomandazione prodotti, sì. RevenueHunt è costruito apposta per questo. Per sondaggi generici e form di lead generation, Typeform è una buona scelta. Risolvono problemi diversi.",
      },
      {
        question: "Posso catturare lead e inviarli a Klaviyo?",
        answer:
          "Sì. RevenueHunt cattura le email nel quiz e sincronizza risposte e tag cliente con Klaviyo, Mailchimp, Omnisend, HubSpot e altro, così puoi fare follow-up con campagne personalizzate.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  zoovu: {
    slug: "zoovu",
    name: "Zoovu",
    category: "piattaforma enterprise di product discovery",
    title: "RevenueHunt vs Zoovu: un'alternativa self-serve",
    description:
      "RevenueHunt vs Zoovu: un quiz prodotti Shopify focalizzato e self-serve con un piano gratuito e prezzi da $39/mo, non una suite enterprise di discovery.",
    h1: "RevenueHunt vs Zoovu",
    heroSubtitle:
      "Zoovu è una piattaforma enterprise di product discovery e guided selling venduta tramite demo. RevenueHunt è un quiz prodotti focalizzato che puoi installare oggi: gratis per iniziare, prezzi trasparenti, online lo stesso giorno.",
    intro: [
      "Zoovu è una piattaforma enterprise di product discovery che riunisce ricerca AI, guided selling, raccomandazioni prodotti e configuratori visivi (CPQ) per grandi brand B2C e B2B con cataloghi enormi e complessi. È platform-agnostic, venduta tramite demo con prezzi enterprise personalizzati e non ha un piano gratuito né registrazione self-serve.",
      "RevenueHunt è un Quiz di raccomandazione dei prodotti focalizzato usato da oltre 20.000 brand (4,9★, oltre 450 recensioni). Invece di una suite enterprise di discovery, fa una cosa in modo eccezionale, guidare i clienti Shopify verso il prodotto giusto, con prezzi trasparenti, un piano gratuito e setup in giornata, senza alcuna chiamata commerciale.",
    ],
    rows: [
      { feature: "Piano gratuito", rh: RH.freePlan, them: "no" },
      { feature: "Prezzi pubblici e trasparenti", rh: RH.transparentPricing, them: "Personalizzato / richiedi una demo" },
      { feature: "Prezzo iniziale", rh: RH.startingPaid, them: "Sales-led (enterprise)" },
      { feature: "Setup self-serve (nessuna chiamata commerciale)", rh: "yes", them: "no" },
      { feature: "Creato apposta per quiz di raccomandazione prodotti", rh: RH.ecommerceRecs, them: "Il quiz è un modulo di una suite di discovery" },
      { feature: "Raccomanda prodotti reali dal tuo catalogo", rh: RH.catalogRecs, them: "yes" },
      { feature: "App Shopify nativa (Built for Shopify)", rh: RH.shopifyNative, them: "Tramite integrazione" },
      { feature: "Builder di quiz con AI (setup in 60 secondi)", rh: RH.aiBuilder, them: "Suite AI enterprise" },
      { feature: "Quiz illimitati", rh: RH.unlimitedQuizzes, them: "yes" },
      { feature: "Logica condizionale / branching illimitata", rh: RH.branching, them: "yes" },
      { feature: "Analisi degli abbandoni domanda per domanda", rh: RH.analytics, them: "yes" },
      { feature: "Integrazioni con Klaviyo ed email / CRM", rh: RH.emailIntegrations, them: "yes" },
    ],
    whySwitch: [
      {
        title: "Self-serve, non una chiamata commerciale",
        body: "Zoovu è venduta tramite demo e contratti enterprise personalizzati senza prezzi pubblici. RevenueHunt è installa-e-vai: scegli un piano, crea il tuo quiz e pubblica. Niente procurement, nessun progetto di implementazione.",
      },
      {
        title: "Online in pochi minuti, non un rollout",
        body: "Zoovu è una suite di discovery pesante che spazia tra ricerca, configuratori e guided selling su molti sistemi. RevenueHunt è un'app quiz focalizzata che la maggior parte dei merchant lancia in giornata, con un AI Copilot che imposta un quiz completo in 60 secondi.",
      },
      {
        title: "Prezzi adatti a un brand in crescita",
        body: "Le piattaforme enterprise di discovery hanno prezzi pensati per cataloghi globali e team grandi. RevenueHunt parte gratis e cresce in base alle risposte da $39/mese, su misura per i brand Shopify e Shopify Plus.",
      },
      {
        title: "Semplicità Built-for-Shopify",
        body: "RevenueHunt è un'app Built-for-Shopify con sincronizzazione del catalogo in tempo reale e localizzazione Shopify Markets, valutata 4,9★ da oltre 450 merchant. La profondità che ti serve per la product discovery senza l'overhead enterprise.",
      },
    ],
    bestFor:
      "Zoovu è adatta a grandi imprese con cataloghi enormi e complessi (elettronica di consumo, elettrodomestici, industriale, B2B) che hanno bisogno di configuratori, CPQ e guided selling su molti sistemi, con il budget e il team per un rollout enterprise. Se vuoi un quiz Shopify focalizzato, economico e self-serve, RevenueHunt è la scelta migliore.",
    migration:
      "Passare da Zoovu è semplice. Crea il tuo quiz in RevenueHunt (o generalo con l'AI Copilot), incorporalo e collega Klaviyo o il tuo CRM. Nessun progetto di implementazione. La maggior parte degli store va online lo stesso giorno e il supporto ti aiuta ad arrivarci.",
    faqs: [
      {
        question: "Quanto costa RevenueHunt rispetto a Zoovu?",
        answer:
          "RevenueHunt ha un piano gratuito e piani a pagamento trasparenti da $39/mese. Zoovu non pubblica i prezzi. È una piattaforma enterprise sales-led che fornisce un preventivo personalizzato dopo una demo.",
      },
      {
        question: "RevenueHunt è una piattaforma enterprise di discovery come Zoovu?",
        answer:
          "No, ed è proprio questo il punto. Zoovu riunisce ricerca AI, configuratori, CPQ e guided selling per cataloghi grandi. RevenueHunt si concentra sui quiz di raccomandazione prodotti per Shopify e fa quell'unico lavoro in modo eccezionale, con setup self-serve e nessuna chiamata commerciale.",
      },
      {
        question: "RevenueHunt fa guided selling come Zoovu?",
        answer:
          "Sì. Un quiz RevenueHunt è guided selling: pone le domande giuste e mappa le risposte con i prodotti esatti dal tuo catalogo, con una pagina dei risultati personalizzata e aggiungi al carrello diretto, senza prezzi enterprise o un rollout.",
      },
      {
        question: "Quanto tempo richiede il setup rispetto a Zoovu?",
        answer:
          "La maggior parte dei merchant RevenueHunt va online lo stesso giorno e l'AI Quiz Copilot può impostare un quiz completo in circa 60 secondi. Zoovu è in genere un'implementazione enterprise sales-led.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  jebbit: {
    slug: "jebbit",
    name: "Jebbit",
    category: "piattaforma enterprise di declared-data (ora parte di BlueConic)",
    title: "RevenueHunt vs Jebbit: un'alternativa self-serve",
    description:
      "RevenueHunt vs Jebbit: un quiz prodotti Shopify standalone e self-serve con un piano gratuito da $39/mo. Jebbit ora fa parte del CDP enterprise di BlueConic.",
    h1: "RevenueHunt vs Jebbit",
    heroSubtitle:
      "Jebbit ora fa parte della piattaforma enterprise di customer data di BlueConic, venduta tramite demo. RevenueHunt è un quiz prodotti standalone e self-serve: gratis per iniziare, Shopify-native, online lo stesso giorno.",
    intro: [
      "Jebbit crea quiz interattivi, product finder e flussi di preferenze per raccogliere dati dichiarati (zero-party). È stato acquisito ed è ora “Experiences by Jebbit”, parte della piattaforma di customer data di BlueConic, rivolto a brand B2C enterprise e mid-market (L'Oréal, Express, Heineken), platform-agnostic e venduto tramite demo senza prezzi pubblici né piano gratuito.",
      "RevenueHunt è un Quiz di raccomandazione dei prodotti standalone usato da oltre 20.000 brand (4,9★, oltre 450 recensioni). Non devi acquistare un CDP per usarlo: è un quiz focalizzato e Built-for-Shopify con prezzi trasparenti, un piano gratuito e setup in giornata, self-serve, nessuna chiamata commerciale.",
    ],
    rows: [
      { feature: "Piano gratuito", rh: RH.freePlan, them: "no" },
      { feature: "Prezzi pubblici e trasparenti", rh: RH.transparentPricing, them: "Personalizzato / richiedi una demo" },
      { feature: "Prezzo iniziale", rh: RH.startingPaid, them: "Sales-led (enterprise)" },
      { feature: "Setup self-serve (nessuna chiamata commerciale)", rh: "yes", them: "no" },
      { feature: "Prodotto standalone (nessun acquisto di piattaforma richiesto)", rh: "yes", them: "Ora parte del CDP di BlueConic" },
      { feature: "Raccomanda prodotti reali dal tuo catalogo", rh: RH.catalogRecs, them: "yes" },
      { feature: "App Shopify nativa (Built for Shopify)", rh: RH.shopifyNative, them: "Tramite integrazione" },
      { feature: "Builder di quiz con AI (setup in 60 secondi)", rh: RH.aiBuilder, them: "no" },
      { feature: "Quiz illimitati", rh: RH.unlimitedQuizzes, them: "yes" },
      { feature: "Logica condizionale / branching illimitata", rh: RH.branching, them: "yes" },
      { feature: "Analisi degli abbandoni domanda per domanda", rh: RH.analytics, them: "yes" },
      { feature: "Cattura dati zero-party / dichiarati", rh: "yes", them: "yes" },
    ],
    whySwitch: [
      {
        title: "Un quiz standalone, non l'acquisto di una piattaforma",
        body: "Jebbit è ora “Experiences by Jebbit” all'interno del CDP di BlueConic. RevenueHunt è un'app focalizzata che puoi usare da sola. Nessuna customer data platform da acquistare o implementare.",
      },
      {
        title: "Self-serve, non una chiamata commerciale",
        body: "Jebbit/BlueConic è venduto tramite demo e contratti enterprise personalizzati senza prezzi pubblici. RevenueHunt è installa-e-vai con un piano gratuito e prezzi trasparenti da $39/mese.",
      },
      {
        title: "Creato per Shopify, online lo stesso giorno",
        body: "RevenueHunt è un'app Built-for-Shopify con sincronizzazione del catalogo in tempo reale e aggiungi al carrello diretto, e un AI Copilot che imposta un quiz completo in 60 secondi. La maggior parte dei merchant va online in giornata.",
      },
      {
        title: "Continui a possedere i tuoi dati zero-party",
        body: "Ogni risposta al quiz è un dato zero-party che i tuoi clienti forniscono spontaneamente. RevenueHunt sincronizza risposte e tag cliente con Klaviyo, Mailchimp, Omnisend, HubSpot e altro. Nessun CDP richiesto per metterlo al lavoro.",
      },
    ],
    bestFor:
      "Jebbit, come parte di BlueConic, è adatto a brand B2C enterprise che vogliono esperienze di declared-data strettamente integrate a una piattaforma completa di customer data e attivate su molti canali, con il budget per un CDP. Se vuoi un quiz Shopify standalone, economico e self-serve, RevenueHunt è la scelta migliore.",
    migration:
      "Lasciare Jebbit, o valutare BlueConic, è semplice. Crea il tuo quiz in RevenueHunt (o generalo con l'AI Copilot), incorporalo e collega Klaviyo o il tuo CRM. La maggior parte degli store va online lo stesso giorno e i tuoi dati zero-party continuano a fluire verso i tuoi strumenti email.",
    faqs: [
      {
        question: "Jebbit è ancora disponibile da solo?",
        answer:
          "Jebbit è ora “Experiences by Jebbit”, parte della piattaforma di customer data di BlueConic. RevenueHunt è un quiz prodotti standalone che puoi usare senza acquistare un CDP: self-serve, con un piano gratuito da $39/mese.",
      },
      {
        question: "Quanto costa RevenueHunt rispetto a Jebbit?",
        answer:
          "RevenueHunt ha un piano gratuito e piani a pagamento trasparenti da $39/mese. Jebbit/BlueConic non pubblica i prezzi. È una piattaforma enterprise sales-led che fornisce un preventivo personalizzato dopo una demo.",
      },
      {
        question: "RevenueHunt raccoglie dati zero-party (dichiarati) come Jebbit?",
        answer:
          "Sì. Ogni risposta al quiz è un dato zero-party che i tuoi clienti forniscono spontaneamente. RevenueHunt sincronizza risposte e tag cliente con Klaviyo, Mailchimp, Omnisend, HubSpot e altro per la segmentazione e il marketing personalizzato.",
      },
      {
        question: "Quanto tempo richiede il setup rispetto a Jebbit?",
        answer:
          "La maggior parte dei merchant RevenueHunt va online lo stesso giorno e l'AI Quiz Copilot può impostare un quiz completo in circa 60 secondi. Jebbit/BlueConic è in genere un'implementazione enterprise sales-led.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  nosto: {
    slug: "nosto",
    name: "Nosto",
    category: "piattaforma enterprise di personalizzazione",
    title: "RevenueHunt vs Nosto: un'alternativa self-serve",
    description:
      "RevenueHunt vs Nosto: un quiz prodotti focalizzato e self-serve che cattura dati zero-party, con un piano gratuito da $39/mo, non una suite enterprise di personalizzazione.",
    h1: "RevenueHunt vs Nosto",
    heroSubtitle:
      "Nosto è una suite enterprise di personalizzazione, ricerca e merchandising venduta tramite demo. RevenueHunt è un quiz prodotti zero-party focalizzato che puoi installare oggi: gratis per iniziare, online lo stesso giorno.",
    intro: [
      "Nosto è una Commerce Experience Platform che riunisce raccomandazioni prodotti AI, ricerca personalizzata del sito, merchandising e personalizzazione dei contenuti per brand enterprise e mid-market. È platform-agnostic, venduta tramite demo con prezzi enterprise personalizzati e non ha un piano gratuito né registrazione self-serve. La sua personalizzazione è guidata principalmente dai dati comportamentali piuttosto che dai quiz.",
      "RevenueHunt è un Quiz di raccomandazione dei prodotti focalizzato usato da oltre 20.000 brand (4,9★, oltre 450 recensioni). Invece di una suite enterprise, guida i clienti verso il prodotto giusto chiedendoglielo direttamente, catturando dati zero-party che possiedi, con prezzi trasparenti, un piano gratuito e setup in giornata, senza alcuna chiamata commerciale.",
    ],
    rows: [
      { feature: "Piano gratuito", rh: RH.freePlan, them: "no" },
      { feature: "Prezzi pubblici e trasparenti", rh: RH.transparentPricing, them: "Personalizzato / richiedi una demo" },
      { feature: "Prezzo iniziale", rh: RH.startingPaid, them: "Sales-led (enterprise)" },
      { feature: "Setup self-serve (nessuna chiamata commerciale)", rh: "yes", them: "no" },
      { feature: "Creato apposta per quiz di raccomandazione prodotti", rh: RH.ecommerceRecs, them: "Suite di personalizzazione, non quiz-led" },
      { feature: "Cattura dati zero-party (i clienti te li dicono direttamente)", rh: "yes", them: "Principalmente comportamentale / predittivo" },
      { feature: "Raccomanda prodotti reali dal tuo catalogo", rh: RH.catalogRecs, them: "yes" },
      { feature: "App Shopify nativa (Built for Shopify)", rh: RH.shopifyNative, them: "yes" },
      { feature: "Builder di quiz con AI (setup in 60 secondi)", rh: RH.aiBuilder, them: "no" },
      { feature: "Quiz illimitati", rh: RH.unlimitedQuizzes, them: "Non è uno strumento di quiz" },
      { feature: "Analisi degli abbandoni domanda per domanda", rh: RH.analytics, them: "yes" },
      { feature: "Integrazioni con Klaviyo ed email / CRM", rh: RH.emailIntegrations, them: "yes" },
    ],
    whySwitch: [
      {
        title: "Self-serve, non una chiamata commerciale",
        body: "Nosto è venduta tramite demo e contratti enterprise personalizzati senza prezzi pubblici. RevenueHunt è installa-e-vai: scegli un piano, crea il tuo quiz e pubblica, con un piano gratuito e prezzi trasparenti da $39/mese.",
      },
      {
        title: "Dati zero-party, non solo tracciamento comportamentale",
        body: "Nosto personalizza principalmente da segnali comportamentali e predittivi. RevenueHunt chiede ai clienti direttamente tramite un quiz, catturando dati zero-party che possiedi e che puoi sincronizzare con Klaviyo, Mailchimp, Omnisend e altro.",
      },
      {
        title: "Online in pochi minuti, non un rollout",
        body: "Nosto è una suite multi-modulo (raccomandazioni, ricerca, merchandising) che in genere richiede onboarding. RevenueHunt è un'app quiz focalizzata che la maggior parte dei merchant lancia in giornata, con un AI Copilot che imposta un quiz completo in 60 secondi.",
      },
      {
        title: "Prezzi adatti a un brand in crescita",
        body: "Le suite enterprise di personalizzazione hanno prezzi pensati per team e cataloghi grandi. RevenueHunt parte gratis e cresce in base alle risposte da $39/mese, su misura per i brand Shopify e Shopify Plus.",
      },
    ],
    bestFor:
      "Nosto è adatta a brand enterprise e mid-market che vogliono una suite completa di personalizzazione comportamentale, ricerca e merchandising su più storefront, con il budget e il team per un rollout enterprise. Se vuoi un quiz prodotti focalizzato, economico e self-serve che cattura dati zero-party, RevenueHunt è la scelta migliore.",
    migration:
      "Passare da Nosto è semplice. Crea il tuo quiz in RevenueHunt (o generalo con l'AI Copilot), incorporalo e collega Klaviyo o il tuo CRM. Nessun progetto di implementazione. La maggior parte degli store va online lo stesso giorno e i tuoi dati zero-party fluiscono direttamente verso i tuoi strumenti email.",
    faqs: [
      {
        question: "Quanto costa RevenueHunt rispetto a Nosto?",
        answer:
          "RevenueHunt ha un piano gratuito e piani a pagamento trasparenti da $39/mese. Nosto non pubblica i prezzi. È una piattaforma enterprise sales-led che fornisce un preventivo personalizzato dopo una demo.",
      },
      {
        question: "RevenueHunt è una suite di personalizzazione come Nosto?",
        answer:
          "No, ed è proprio questo il punto. Nosto riunisce raccomandazioni comportamentali, ricerca del sito e merchandising. RevenueHunt si concentra sui quiz di raccomandazione prodotti che catturano dati zero-party, con setup self-serve e nessuna chiamata commerciale.",
      },
      {
        question: "RevenueHunt usa dati zero-party invece del tracciamento comportamentale?",
        answer:
          "Sì. RevenueHunt guida i clienti attraverso un quiz e loro ti dicono direttamente le loro preferenze, obiettivi e vincoli: dati zero-party che possiedi, invece di dedurre l'intento dal comportamento e dai cookie.",
      },
      {
        question: "Quanto tempo richiede il setup rispetto a Nosto?",
        answer:
          "La maggior parte dei merchant RevenueHunt va online lo stesso giorno e l'AI Quiz Copilot può impostare un quiz completo in circa 60 secondi. Nosto è in genere un'implementazione enterprise sales-led.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  tolstoy: {
    slug: "tolstoy",
    name: "Tolstoy",
    category: "piattaforma di video shoppable e quiz",
    title: "RevenueHunt vs Tolstoy: un'alternativa quiz-first",
    description:
      "RevenueHunt vs Tolstoy: un quiz prodotti creato apposta con un vero motore di raccomandazione e dati zero-party, contro una piattaforma video con una funzione quiz.",
    h1: "RevenueHunt vs Tolstoy",
    heroSubtitle:
      "Tolstoy è una piattaforma di video shoppable con una funzione quiz. RevenueHunt è un Quiz di raccomandazione dei prodotti creato apposta, con un vero motore di raccomandazione e dati zero-party.",
    intro: [
      "Tolstoy è una piattaforma di commerce AI costruita intorno ai video shoppable, ai media generati con AI e a un AI shopping agent, con prezzi basati sulle impression da $19/mese. È un solido strumento video-first. Ma il quiz prodotti è una funzione secondaria accanto all'esperienza video.",
      "RevenueHunt è un Quiz di raccomandazione dei prodotti usato da oltre 20.000 brand (4,9★, oltre 450 recensioni). È quiz-first: un motore di raccomandazione dedicato mappa le risposte di ogni cliente con i prodotti giusti dal tuo catalogo, cattura dati zero-party e converte su una pagina dei risultati personalizzata, su Shopify, WooCommerce, BigCommerce, Magento, Wix e altro.",
    ],
    rows: [
      { feature: "Piano gratuito", rh: RH.freePlan, them: "sì (limitato)" },
      { feature: "Prezzo iniziale a pagamento", rh: RH.startingPaid, them: "$19/mo" },
      { feature: "Modello di prezzo", rh: "Fisso, in base alle risposte", them: "In base alle impression + crediti AI" },
      { feature: "Creato apposta per quiz di raccomandazione prodotti", rh: RH.ecommerceRecs, them: "Il quiz è una funzione secondaria (video-first)" },
      { feature: "Motore di raccomandazione dedicato (upvote ed esclusione, pagina dei risultati)", rh: "yes", them: "Shopping guidato dal video" },
      { feature: "Raccomanda prodotti reali dal tuo catalogo", rh: RH.catalogRecs, them: "yes" },
      { feature: "Cattura dati zero-party (i clienti te li dicono direttamente)", rh: "yes", them: "Principalmente dati di engagement video" },
      { feature: "App Shopify nativa (Built for Shopify)", rh: RH.shopifyNative, them: "yes" },
      { feature: "Funziona su WooCommerce, BigCommerce, Magento, Wix e altro", rh: RH.multiPlatform, them: "no" },
      { feature: "Builder di quiz con AI (setup in 60 secondi)", rh: RH.aiBuilder, them: "AI focalizzata sul video" },
      { feature: "Analisi degli abbandoni domanda per domanda", rh: RH.analytics, them: "yes" },
      { feature: "Integrazioni con Klaviyo ed email / CRM", rh: RH.emailIntegrations, them: "yes" },
    ],
    whySwitch: [
      {
        title: "Uno strumento quiz-first, non un add-on video",
        body: "Tolstoy è una piattaforma di video shoppable dove il quiz è una funzione secondaria. RevenueHunt è creato apposta per i quiz di raccomandazione prodotti, con un motore di raccomandazione dedicato e una pagina dei risultati focalizzata sulla conversione.",
      },
      {
        title: "Un vero motore di raccomandazione",
        body: "RevenueHunt classifica i prodotti, le varianti e le collezioni esatte dal tuo catalogo live usando un modello di upvote ed esclusione, con blocchi di risultati condizionali e aggiungi al carrello diretto. Una profondità che il quiz di uno strumento video non eguaglia.",
      },
      {
        title: "Dati zero-party che possiedi",
        body: "RevenueHunt cattura ciò che i clienti ti dicono (preferenze, obiettivi, vincoli) e lo sincronizza con Klaviyo, Mailchimp, Omnisend e altro per la segmentazione. Il punto forte di Tolstoy è l'engagement video, non i dati strutturati del quiz.",
      },
      {
        title: "Vendi ovunque, comprovato su larga scala",
        body: "RevenueHunt funziona in modo nativo su Shopify e anche su WooCommerce, BigCommerce, Magento, Wix, Squarespace e standalone, scelto da oltre 20.000 brand con 4,9★ da oltre 450 recensioni.",
      },
    ],
    bestFor:
      "Tolstoy è una scelta valida se la tua strategia è guidata dal video (video shoppable, UGC, TikTok Shop) e un quiz è un nice-to-have. Se vuoi un Quiz di raccomandazione dei prodotti dedicato con un vero motore di raccomandazione e dati zero-party, RevenueHunt è la scelta migliore.",
    migration:
      "Se gestivi un quiz dentro Tolstoy, spostarsi è veloce. Ricostruiscilo nel builder di RevenueHunt (o generalo in 60 secondi con il nostro AI Copilot), incorporalo e collega Klaviyo. La maggior parte degli store va online lo stesso giorno e il nostro team di supporto ti aiuta nella migrazione.",
    faqs: [
      {
        question: "RevenueHunt è migliore di Tolstoy per un quiz prodotti?",
        answer:
          "Per un Quiz di raccomandazione dei prodotti dedicato, sì. RevenueHunt è creato apposta per questo, con un vero motore di raccomandazione e dati zero-party. Tolstoy è video-first, con il quiz come funzione secondaria. Per i video shoppable nello specifico, Tolstoy è creato apposta.",
      },
      {
        question: "Tolstoy fa quiz di raccomandazione prodotti?",
        answer:
          "Sì, come funzione secondaria accanto ai suoi video shoppable. RevenueHunt è quiz-first: è costruito intorno al quiz e al suo motore di raccomandazione, alla pagina dei risultati e alla cattura di dati zero-party.",
      },
      {
        question: "RevenueHunt supporta anche i video?",
        answer:
          "Sì. Puoi aggiungere video alle domande del quiz e alla pagina dei risultati personalizzata. RevenueHunt è quiz-first piuttosto che una piattaforma video, quindi il video supporta il quiz e non il contrario.",
      },
      {
        question: "Posso catturare dati zero-party e inviarli a Klaviyo?",
        answer:
          "Sì. RevenueHunt cattura le risposte del quiz come dati zero-party e sincronizza risposte e tag cliente con Klaviyo, Mailchimp, Omnisend, HubSpot e altro per la segmentazione e il marketing personalizzato.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },
};
