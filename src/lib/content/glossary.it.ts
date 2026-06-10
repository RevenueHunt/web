import type { GlossaryTerm, GlossaryLink } from "../glossary";

const VERIFIED = "2026-06-07";

export const GLOSSARY_IT: Record<string, GlossaryTerm> = {
  "conversational-commerce": {
    slug: "conversational-commerce",
    term: "Conversational commerce",
    chip: "Concetto",
    title: "Cos'è il conversational commerce?",
    description:
      "Il conversational commerce vende attraverso un dialogo bidirezionale invece che con una griglia statica. Ecco cosa comprende, perché funziona e come un quiz lo rende possibile.",
    h1: "Cos'è il conversational commerce?",
    shortAnswer:
      "Il conversational commerce è la vendita attraverso una conversazione interattiva e bidirezionale, invece che con una griglia statica di prodotti. I clienti rispondono a delle domande, lo store risponde con raccomandazioni su misura, proprio come fa un bravo venditore in un negozio fisico.",
    intro: [
      "In un negozio fisico, un buon assistente ti chiede di cosa hai bisogno, ascolta e ti indica il prodotto giusto. Online, la maggior parte degli store salta questo passaggio e scarica i clienti su una griglia con tutti i prodotti che vendono. Il conversational commerce rimette il dialogo al centro.",
    ],
    sections: [
      {
        heading: "Cosa rientra nel conversational commerce",
        body: [
          "La categoria è ampia. Comprende chatbot, app di messaggistica, live chat, assistenti vocali e quiz di raccomandazione dei prodotti. Ciò che hanno in comune è lo scambio: il cliente fornisce un input, lo store risponde con qualcosa di più specifico di una generica pagina di catalogo.",
          "Le forme differiscono per quanto le puoi controllare. Un chatbot a testo libero può andare ovunque il cliente digiti, il che è potente e imprevedibile. Un quiz è conversational commerce strutturato: ogni domanda e ogni percorso lo hai progettato tu, così la conversazione resta in linea con il brand e finisce sempre con un prodotto reale.",
        ],
      },
      {
        heading: "Perché converte meglio di una griglia",
        body: [
          "Una pagina di categoria chiede al cliente di fare il lavoro: leggere ogni opzione, confrontare le specifiche e indovinare quale fa al caso suo. Questa è la paralisi da scelta, ed è dove molti carrelli si perdono prima ancora di iniziare.",
          "Una conversazione fa il lavoro al posto suo. Restringe un catalogo grande a una raccomandazione breve e motivata, e ne spiega il perché. I clienti che ricevono una risposta chiara aggiungono al carrello invece di rimbalzare via per confrontare altrove.",
          "Cattura anche le preferenze. Ogni risposta che un cliente dà è un'informazione che puoi usare per segmentare le email, personalizzare i follow-up e fare merchandising migliore in seguito.",
        ],
      },
      {
        heading: "Conversational commerce vs un chatbot",
        body: [
          "Spesso si usano le due parole come sinonimi, ma un chatbot è uno strumento all'interno della categoria, non la categoria intera. Un chatbot basato su un large language model può rispondere a domande aperte, ma può anche fraintendere l'intento o raccomandare qualcosa che non hai a magazzino.",
          "Un quiz di raccomandazione dei prodotti scambia l'apertura con l'affidabilità. Non può uscire dal seminato, raccomanda sempre dal tuo catalogo live e funziona allo stesso modo per ogni cliente. Per la maggior parte degli store, questa prevedibilità vale più di una chat a ruota libera.",
        ],
      },
    ],
    withRevenueHunt: [
      "Un quiz RevenueHunt è la forma più affidabile di conversational commerce che uno store possa avere. Progetti ogni domanda e ogni percorso, la pagina dei risultati raccomanda sempre prodotti e varianti reali dal tuo catalogo, e ogni risposta viene catturata come zero-party data che puoi sincronizzare con Klaviyo e altri strumenti.",
      "Funziona su Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace e come quiz ospitato a sé stante, ed è gratuito da iniziare con 100 risposte al mese.",
    ],
    faqs: [
      {
        question: "Un quiz sui prodotti è considerato conversational commerce?",
        answer:
          "Sì. Un quiz è una forma strutturata di conversational commerce: il cliente risponde alle domande e lo store risponde con raccomandazioni su misura, lo stesso modello di dialogo di un chatbot ma con ogni percorso progettato in anticipo.",
      },
      {
        question: "Qual è la differenza tra conversational commerce e un chatbot?",
        answer:
          "Un chatbot è uno strumento all'interno del conversational commerce. Il conversational commerce è l'idea più ampia di vendere attraverso una conversazione bidirezionale, che include anche quiz, live chat, messaggistica e voce.",
      },
      {
        question: "Il conversational commerce funziona per gli store piccoli?",
        answer:
          "Sì. Un quiz di raccomandazione dei prodotti è il modo più semplice per iniziare. Non ha bisogno di uno storico di traffico per funzionare, gira su un piano gratuito e può essere online lo stesso giorno.",
      },
    ],
    related: [
      { label: "Motore di raccomandazione dei prodotti", href: "/glossary/product-recommendation-engine/" },
      { label: "Shoppable quiz", href: "/glossary/shoppable-quiz/" },
      { label: "Quiz di vendita guidata", href: "/guided-selling-quiz/" },
      { label: "Come funziona", href: "/how-it-works/" },
      { label: "Template di quiz", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "product-recommendation-engine": {
    slug: "product-recommendation-engine",
    term: "Motore di raccomandazione dei prodotti",
    chip: "Concetto",
    title: "Cos'è un motore di raccomandazione dei prodotti?",
    description:
      "Un motore di raccomandazione dei prodotti decide quali prodotti mostrare a ciascun cliente. I tipi, il problema del cold-start e come funziona un motore basato su quiz.",
    h1: "Cos'è un motore di raccomandazione dei prodotti?",
    shortAnswer:
      "Un motore di raccomandazione dei prodotti è il software che decide quali prodotti mostrare a un determinato cliente. Prende degli input (comportamento di navigazione, storico degli acquisti o preferenze dichiarate) e ordina il tuo catalogo per far emergere le corrispondenze migliori.",
    intro: [
      "Ogni store che mostra a un cliente qualcosa di diverso dall'intero catalogo sta usando un motore di raccomandazione di qualche tipo, anche se è solo un carosello di best-seller fatto a mano. La domanda interessante è cosa usa il motore per decidere.",
    ],
    sections: [
      {
        heading: "I tipi principali",
        body: [
          "I motori comportamentali usano ciò che fanno i clienti: pagine viste, articoli cliccati, cose acquistate. Alimentano i classici caroselli \"consigliati per te\" e \"i clienti hanno acquistato anche\". Si basano sul collaborative filtering, che ha bisogno di molto traffico e storico per funzionare bene.",
          "I motori basati su regole o attributi usano i dati di prodotto e la logica impostata dal merchandiser: mostra gli accessori con questa categoria, fai emergere prima gli articoli disponibili. Sono prevedibili ma statici.",
          "I motori basati su preferenze o quiz usano ciò che il cliente ti dice direttamente. Il cliente risponde a qualche domanda e il motore ordina il catalogo in base a quelle risposte. Questo è il segnale di intento più diretto, perché è offerto volontariamente invece che dedotto.",
        ],
      },
      {
        heading: "Il problema del cold-start",
        body: [
          "I motori comportamentali hanno una debolezza ben nota: si bloccano con i nuovi visitatori e i nuovi prodotti. Un cliente alla prima visita non ha storico, quindi il motore non ha niente su cui basarsi e ripiega su best-seller generici. Un prodotto appena aggiunto non ha ancora click, quindi viene raccomandato di rado.",
          "Un motore basato su preferenze non ha cold-start. Un visitatore del tutto nuovo che risponde a tre domande dà al motore tutto ciò che gli serve fin dalla prima visita, senza tracciamento e senza aspettare che i dati si accumulino.",
        ],
      },
      {
        heading: "Come un motore a quiz ordina i prodotti",
        body: [
          "Ogni risposta ha un peso. Una risposta irrinunciabile può far salire i prodotti che corrispondono e scendere quelli che non corrispondono, mentre un vincolo rigido come un'allergia o una specifica incompatibile può escludere del tutto dei prodotti, per quanto bene avessero altrimenti totalizzato.",
          "Il risultato è una rosa di candidati ordinata e motivata, invece di un singolo tentativo. I motori migliori riservano anche uno slot per ciascun ruolo di un set, così l'output può essere una routine, uno stack o un bundle completo invece di un solo prodotto.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt è un motore di raccomandazione dei prodotti basato sulle preferenze e guidato da un quiz. Le risposte fanno salire, scendere o escludono i prodotti dal tuo catalogo live, gli slot di raccomandazione riservano un posto per ciascun ruolo di un set, e funziona per un visitatore alla prima visita con storico zero.",
      "Poiché gli input sono offerti volontariamente, le stesse risposte fungono anche da zero-party data che possiedi e puoi usare per la segmentazione molto dopo che il cliente se n'è andato.",
    ],
    faqs: [
      {
        question: "Qual è la differenza tra un motore di raccomandazione comportamentale e uno basato su quiz?",
        answer:
          "Un motore comportamentale deduce l'intento dai click e dallo storico degli acquisti, il che richiede traffico e si blocca con i nuovi visitatori. Un motore basato su quiz usa le preferenze che il cliente dichiara direttamente, così funziona fin dalla prima visita senza storico.",
      },
      {
        question: "Ho bisogno di molto traffico perché un motore di raccomandazione funzioni?",
        answer:
          "Non per un motore basato su quiz. Poiché il cliente ti dice le sue preferenze, funziona dalla prima visita. I motori comportamentali, al contrario, hanno bisogno di traffico e storico degli acquisti consistenti prima che le loro raccomandazioni siano affidabili.",
      },
      {
        question: "Un motore di raccomandazione può suggerire più di un prodotto?",
        answer:
          "Sì. Con gli slot di raccomandazione, il motore riserva un posto per ciascun ruolo di un set e riempie ciascuno con la migliore corrispondenza, restituendo una routine, uno stack o un bundle completo invece di un singolo articolo.",
      },
    ],
    related: [
      { label: "Raccomandazioni di prodotti personalizzate", href: "/glossary/personalized-product-recommendations/" },
      { label: "Conversational commerce", href: "/glossary/conversational-commerce/" },
      { label: "Quiz trova-prodotto", href: "/product-finder-quiz/" },
      { label: "Come funziona", href: "/how-it-works/" },
      { label: "Quiz per Shopify", href: "/product-recommendation-quiz-shopify/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "shoppable-quiz": {
    slug: "shoppable-quiz",
    term: "Shoppable quiz",
    chip: "Tipo di quiz",
    title: "Cos'è uno shoppable quiz?",
    description:
      "Uno shoppable quiz termina con una pagina dei risultati dove i clienti aggiungono al carrello i prodotti consigliati. Ecco cosa rende un quiz shoppable e dove gli store li usano.",
    h1: "Cos'è uno shoppable quiz?",
    shortAnswer:
      "Uno shoppable quiz è un quiz interattivo che termina con una pagina dei risultati personalizzata dove i clienti possono aggiungere i prodotti consigliati direttamente al carrello. Il quiz fa parte dello store, non è un sondaggio che vive in disparte.",
    intro: [
      "Tanti brand usano i quiz. La differenza tra uno che genera fatturato e uno che si limita a raccogliere risposte sta nel fatto che un cliente possa acquistare alla fine senza uscire.",
    ],
    sections: [
      {
        heading: "Cosa rende un quiz shoppable",
        body: [
          "Tre cose. Primo, raccomanda prodotti e varianti reali dal tuo catalogo live, non testo segnaposto. Secondo, la pagina dei risultati ha l'aggiungi al carrello, così un cliente può acquistare la raccomandazione in un solo passaggio. Terzo, può portarsi dietro l'offerta: uno sconto legato alle risposte, un bundle aggiunto come set, un upsell sulla pagina dei risultati.",
          "Senza queste, hai un quiz sulla personalità o un sondaggio. Può essere divertente e può raccogliere email, ma non chiude la vendita che ha appena aperto.",
        ],
      },
      {
        heading: "Shoppable quiz vs un sondaggio o un quiz sulla personalità",
        body: [
          "Un sondaggio raccoglie le risposte e finisce. Un quiz sulla personalità intrattiene e finisce. Uno shoppable quiz usa le risposte per raccomandare prodotti e poi lascia che il cliente agisca sulla raccomandazione immediatamente, mentre il suo intento è al massimo.",
          "Quest'ultimo passaggio è tutto il punto. Il momento dopo che un cliente ottiene una risposta sicura è il momento in cui è più probabile che acquisti. Uno shoppable quiz cattura quel momento invece di rimandarlo al catalogo per ricominciare da capo.",
        ],
      },
      {
        heading: "Dove si usano gli shoppable quiz",
        body: [
          "Ovunque scegliere sia difficile: routine per la cura della pelle, stack di integratori, tonalità di fondotinta, vestibilità e taglia, set regalo, miscele di caffè. Più è difficile scegliere da una griglia, più uno shoppable quiz si guadagna il suo posto.",
          "Girano come popup, come blocco incorporato in una pagina o come esperienza landing a tutta pagina, e lo stesso quiz può alimentare traffico a pagamento, email e scoperta sul sito tutto in una volta.",
        ],
      },
    ],
    withRevenueHunt: [
      "Ogni quiz RevenueHunt è shoppable per impostazione predefinita. La pagina dei risultati attinge prodotti e varianti reali dal tuo catalogo, supporta l'aggiungi al carrello per un singolo articolo o per un intero set, e può mostrare un codice sconto o un blocco di contenuto in base alle risposte del cliente.",
      "Puoi costruirne uno da un template oppure descrivere il tuo store all'AI Quiz Copilot e avere un quiz completo impostato in circa 60 secondi, poi pubblicarlo come popup, embed o landing page.",
    ],
    faqs: [
      {
        question: "Qual è la differenza tra uno shoppable quiz e un quiz sulla personalità?",
        answer:
          "Un quiz sulla personalità intrattiene e finisce. Uno shoppable quiz raccomanda prodotti reali dal tuo catalogo e lascia che i clienti li aggiungano al carrello sulla pagina dei risultati, così chiude la vendita invece di limitarsi a raccogliere risposte.",
      },
      {
        question: "I clienti possono aggiungere prodotti al carrello dal quiz?",
        answer:
          "Sì. È ciò che lo rende shoppable. La pagina dei risultati mostra i prodotti e le varianti corrispondenti con l'aggiungi al carrello diretto, per un singolo articolo o per un set completo.",
      },
      {
        question: "Uno shoppable quiz può mostrare uno sconto?",
        answer:
          "Sì. La pagina dei risultati supporta blocchi con codice sconto e contenuto che puoi legare a risposte specifiche, così i clienti giusti vedono l'offerta giusta nel momento della decisione.",
      },
    ],
    related: [
      { label: "Quiz funnel", href: "/glossary/quiz-funnel/" },
      { label: "Conversational commerce", href: "/glossary/conversational-commerce/" },
      { label: "Quiz crea-bundle", href: "/solutions/bundle-builder/" },
      { label: "Template di quiz", href: "/templates/" },
      { label: "Calcolatore di ROI del quiz", href: "/quiz-roi-calculator/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "quiz-funnel": {
    slug: "quiz-funnel",
    term: "Quiz funnel",
    chip: "Marketing",
    title: "Cos'è un quiz funnel?",
    description:
      "Un quiz funnel usa un quiz come punto di ingresso per trasformare il traffico in lead qualificati e opted-in. Ecco le fasi e perché batte un semplice opt-in.",
    h1: "Cos'è un quiz funnel?",
    shortAnswer:
      "Un quiz funnel è un funnel di marketing che usa un quiz come punto di ingresso. Un cliente fa un quiz, ottiene una raccomandazione, lascia la sua email ed entra in una sequenza di follow-up segmentata. Trasforma il traffico anonimo in un lead qualificato con una preferenza nota.",
    intro: [
      "La maggior parte dei funnel ecommerce inizia con un popup di sconto e un solo campo email. Un quiz funnel lo sostituisce con qualcosa che il cliente vuole davvero: una risposta personalizzata.",
    ],
    sections: [
      {
        heading: "Le fasi di un quiz funnel",
        body: [
          "Il traffico arriva sul quiz, da un annuncio, da un'email o da un link sul tuo sito. Il cliente risponde a qualche domanda. Raggiunge una pagina dei risultati con una raccomandazione personalizzata. Per vedere o salvare il risultato, lascia la sua email. Quell'email entra in una sequenza di follow-up segmentata in base a ciò che ti ha detto.",
          "La differenza rispetto a un funnel normale è ciò che sai alla fine. Invece di un iscritto anonimo, hai un contatto etichettato con i suoi obiettivi, le sue preferenze e i prodotti a cui è stato abbinato.",
        ],
      },
      {
        heading: "Perché supera un opt-in generico",
        body: [
          "Una semplice iscrizione alla newsletter non offre niente di specifico, quindi converte una piccola fetta di traffico e non ti dà alcuna informazione oltre a un indirizzo email. Un quiz funnel offre una raccomandazione su misura come motivo per iscriversi, il che è uno scambio molto più forte.",
          "Rende anche migliore ogni email successiva. Un iscritto che sai sta cercando prodotti per pelle secca e sensibile riceve messaggi diversi da uno che sta cercando un regalo. Quella segmentazione si costruisce durante il quiz, non si attacca dopo.",
        ],
      },
      {
        heading: "Quiz funnel e traffico a pagamento",
        body: [
          "I quiz funnel sono popolari per l'acquisizione a pagamento perché qualificano e catturano in un solo passaggio. Il traffico freddo che rimbalzerebbe via da una pagina prodotto spesso completa un quiz, e la cattura dell'email significa che mantieni il lead anche se non acquista alla prima visita.",
          "Un quiz funnel è una forma specifica di funnel. Per il quadro più ampio di come si costruiscono i funnel ecommerce, vedi la guida con gli esempi di funnel.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt è costruito per gestire l'intero quiz funnel. Cattura l'email nel momento di massimo intento, sincronizza le risposte e i tag cliente con Klaviyo, Mailchimp, Omnisend, HubSpot e altri, e mostra l'abbandono domanda per domanda così puoi sistemare le falle.",
      "La raccomandazione sulla pagina dei risultati è il lead magnet, così ciò che ti fa guadagnare l'email è anche ciò che guida la vendita.",
    ],
    faqs: [
      {
        question: "In cosa un quiz funnel è diverso da un normale funnel di vendita?",
        answer:
          "Un quiz funnel usa un quiz come punto di ingresso, così qualifica e segmenta i lead mentre li cattura. Un funnel normale spesso inizia con un opt-in generico che cattura un'email ma nessun dato sulle preferenze.",
      },
      {
        question: "Un quiz funnel funziona per gli annunci a pagamento?",
        answer:
          "Sì. I quiz funnel sono comuni per l'acquisizione a pagamento perché qualificano il traffico freddo e catturano l'email in un solo passaggio, così mantieni il lead anche quando il cliente non acquista alla prima visita.",
      },
      {
        question: "Cosa faccio con i lead che un quiz funnel cattura?",
        answer:
          "Sincronizzali con il tuo strumento email con le risposte del quiz come tag, poi invia follow-up segmentati per obiettivo o preferenza. RevenueHunt sincronizza le risposte e i tag cliente con Klaviyo, Mailchimp, Omnisend, HubSpot e altri.",
      },
    ],
    related: [
      { label: "Quiz per la generazione di lead", href: "/glossary/lead-generation-quiz/" },
      { label: "Shoppable quiz", href: "/glossary/shoppable-quiz/" },
      { label: "Esempi di funnel ecommerce", href: "/ecommerce-sales-funnel-examples/" },
      { label: "Calcolatore di ROI del quiz", href: "/quiz-roi-calculator/" },
      { label: "Integrazioni", href: "/integrations/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "personalized-product-recommendations": {
    slug: "personalized-product-recommendations",
    term: "Raccomandazioni di prodotti personalizzate",
    chip: "Concetto",
    title: "Cosa sono le raccomandazioni di prodotti personalizzate?",
    description:
      "Le raccomandazioni di prodotti personalizzate adattano i suggerimenti a ciascun cliente. Ecco come fanno gli store, il problema del cold-start e il modo senza cookie.",
    h1: "Cosa sono le raccomandazioni di prodotti personalizzate?",
    shortAnswer:
      "Le raccomandazioni di prodotti personalizzate sono suggerimenti su misura per il singolo cliente, invece degli stessi best-seller mostrati a tutti. Possono basarsi sul comportamento di navigazione, sugli acquisti passati o, nel modo più diretto, su ciò che il cliente ti dice.",
    intro: [
      "Mostrare a ogni cliente la stessa griglia tratta in modo identico chi compra un regalo per la prima volta e un cliente abituale fedele. Le raccomandazioni personalizzate si adattano a chi sta davvero facendo acquisti.",
    ],
    sections: [
      {
        heading: "Come gli store personalizzano le raccomandazioni",
        body: [
          "Ci sono due approcci ampi. La personalizzazione comportamentale osserva ciò che fa un cliente, click, visualizzazioni, ordini passati, e deduce cosa mostrare dopo. La personalizzazione basata sulle preferenze dichiarate chiede direttamente al cliente e raccomanda in base alle sue risposte.",
          "Quella comportamentale è invisibile al cliente e scala in automatico, ma è una deduzione e può sbagliare. Quella basata sulle preferenze dichiarate è esplicita: il cliente ti dice che vuole una crema idratante senza profumo per pelle sensibile, quindi non c'è niente da indovinare.",
        ],
      },
      {
        heading: "Il problema del cold-start",
        body: [
          "La personalizzazione comportamentale fatica con i nuovi clienti. Senza storico da cui imparare, ripiega su best-seller generici proprio per i visitatori per cui la prima impressione conta di più.",
          "Chiedere al cliente risolve la cosa all'istante. Un quiz raccoglie abbastanza per personalizzare alla prima visita, prima che esista qualsiasi storico di navigazione, ed è per questo che si abbina così bene al traffico a pagamento e social che arriva freddo.",
        ],
      },
      {
        heading: "Personalizzare senza cookie di terze parti",
        body: [
          "Il targeting comportamentale si è appoggiato sui cookie di terze parti e sul tracciamento cross-site, entrambi in via di limitazione da parte di browser e normative. Le raccomandazioni costruite su dati che il cliente offre volontariamente non dipendono da nulla di tutto ciò.",
          "I dati che un quiz raccoglie sono zero-party data: preferenze e intenzioni che il cliente condivide di proposito. Questo è distinto dai first-party data, che sono il comportamento che osservi sul tuo stesso sito, come le pagine viste e gli ordini passati. Gli zero-party data sono un tipo di first-party data, ma sono dichiarati invece che dedotti, quindi non c'è niente da indovinare.",
          "Entrambi sono duraturi e consensuali, a differenza dei dati di terze parti. Per il quadro completo, vedi le guide su zero-party data e first-party data.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt personalizza le raccomandazioni a partire dalle preferenze che il cliente dichiara in un quiz, così funziona alla prima visita e non si basa sul tracciamento di terze parti. Le risposte si abbinano a prodotti e varianti reali, e i vincoli rigidi escludono tutto ciò che non va bene.",
      "Le stesse risposte diventano zero-party data, così la personalizzazione continua nelle email: ogni campagna dopo il quiz può parlare di ciò che ogni cliente vuole davvero.",
    ],
    faqs: [
      {
        question: "Quali dati alimentano le raccomandazioni di prodotti personalizzate?",
        answer:
          "O dati comportamentali (click, visualizzazioni, storico degli acquisti) o preferenze dichiarate che il cliente fornisce direttamente. Le preferenze dichiarate sono le più accurate perché sono offerte volontariamente invece che dedotte, e funzionano alla prima visita.",
      },
      {
        question: "Posso personalizzare le raccomandazioni per i visitatori alla prima visita?",
        answer:
          "Sì, se glielo chiedi. Un quiz raccoglie abbastanza per personalizzare alla prima visita, cosa che i sistemi comportamentali non possono fare perché i nuovi visitatori non hanno storico da cui imparare.",
      },
      {
        question: "Le raccomandazioni personalizzate hanno bisogno di cookie di terze parti?",
        answer:
          "No. Le raccomandazioni costruite su dati che un cliente offre volontariamente in un quiz non dipendono da cookie di terze parti o tracciamento cross-site, entrambi in via di limitazione da parte di browser e regolatori.",
      },
    ],
    related: [
      { label: "Motore di raccomandazione dei prodotti", href: "/glossary/product-recommendation-engine/" },
      { label: "Personalizzazione ecommerce", href: "/glossary/ecommerce-personalization/" },
      { label: "Zero-party data", href: "/zero-party-data/" },
      { label: "First-party data", href: "/first-party-data/" },
      { label: "Come funziona", href: "/how-it-works/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "ecommerce-personalization": {
    slug: "ecommerce-personalization",
    term: "Personalizzazione ecommerce",
    chip: "Concetto",
    title: "Cos'è la personalizzazione ecommerce?",
    description:
      "La personalizzazione ecommerce adatta lo store a ciascun cliente. Ecco dove avviene, lo spostamento verso gli zero-party data e il punto più semplice da cui iniziare.",
    h1: "Cos'è la personalizzazione ecommerce?",
    shortAnswer:
      "La personalizzazione ecommerce è adattare l'esperienza d'acquisto, i prodotti, i contenuti e le offerte che un cliente vede, al singolo invece di mostrare a tutti lo stesso store. Fatta bene, alza la conversione e il valore medio dell'ordine.",
    intro: [
      "La personalizzazione copre molto terreno, da un carosello \"consigliati per te\" a una homepage interamente su misura. Il filo conduttore è trattare clienti diversi in modo diverso in base a ciò che sai di loro.",
    ],
    sections: [
      {
        heading: "Dove avviene la personalizzazione",
        body: [
          "Sul sito, si manifesta come prodotti consigliati, landing page su misura e contenuti dinamici. Nelle raccomandazioni, ordina il catalogo per ciascun cliente. Nelle email e negli SMS, segmenta i messaggi per comportamento o preferenza. Negli annunci, adatta creatività e audience.",
          "La maggior parte degli store non ha bisogno di tutto questo in una volta. I punti a più alto rendimento da cui iniziare sono le raccomandazioni di prodotti e la segmentazione delle email, perché entrambi influenzano direttamente cosa acquista un cliente e se torna.",
        ],
      },
      {
        heading: "Lo spostamento dai dati di terze parti agli zero-party data",
        body: [
          "La personalizzazione classica si appoggiava molto sui dati di terze parti e sul tracciamento cross-site. I cambiamenti dei browser e le normative sulla privacy hanno reso quell'approccio fragile e, in molti casi, non conforme.",
          "Il sostituto duraturo sono i tuoi stessi dati, e arrivano in due forme. I first-party data sono ciò che osservi dalle interazioni di un cliente con il tuo store, come le pagine viste e gli ordini passati. Gli zero-party data sono ciò che offre di proposito, come obiettivi, preferenze e problemi. Gli zero-party data sono il sottoinsieme dichiarato dei first-party data, e sono il segnale di intento più accurato perché il cliente te lo ha detto direttamente.",
          "Entrambi sono consensuali e non spariscono quando un browser blocca un cookie. Un quiz è il modo più diretto per raccogliere zero-party data su larga scala.",
        ],
      },
      {
        heading: "Il punto più semplice da cui iniziare",
        body: [
          "Le suite di personalizzazione enterprise possono fare su misura ogni pixel, con un prezzo e tempi di implementazione all'altezza. La maggior parte degli store non ne ha bisogno per vedere risultati.",
          "Un quiz di raccomandazione dei prodotti è il punto di ingresso più semplice. Personalizza il momento più importante in assoluto, scegliere un prodotto, cattura i dati sulle preferenze che alimentano le email personalizzate in seguito, e può essere online lo stesso giorno con un piano gratuito.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt è un modo mirato e self-serve per iniziare a personalizzare: un quiz che adatta le raccomandazioni alla prima visita e alimenta i dati sulle preferenze nel tuo strumento email per una segmentazione continua. Nessun contratto enterprise, nessun team di data science.",
      "Funziona su ogni piattaforma principale e si sincronizza con Klaviyo, Mailchimp, Omnisend, HubSpot e altri, così la personalizzazione si porta dallo store fino alla casella di posta.",
    ],
    faqs: [
      {
        question: "Qual è il modo più facile per iniziare con la personalizzazione ecommerce?",
        answer:
          "Un quiz di raccomandazione dei prodotti. Personalizza il momento a più alto impatto, scegliere un prodotto, funziona alla prima visita, cattura i dati sulle preferenze per le email personalizzate, e può essere online lo stesso giorno con un piano gratuito.",
      },
      {
        question: "La personalizzazione ecommerce richiede cookie di terze parti?",
        answer:
          "Non più, e sempre meno può basarsi su di essi. L'approccio duraturo usa dati che i clienti offrono volontariamente in modo diretto, il che è più accurato, consensuale e non toccato dalle restrizioni di browser e privacy.",
      },
      {
        question: "Ho bisogno di una piattaforma enterprise per personalizzare il mio store?",
        answer:
          "No. Le suite enterprise fanno su misura ogni cosa a costi elevati, ma la maggior parte degli store ottiene ritorni forti da una personalizzazione mirata: raccomandazioni e segmentazione delle email, che un quiz fornisce con un piano self-serve.",
      },
    ],
    related: [
      { label: "Raccomandazioni di prodotti personalizzate", href: "/glossary/personalized-product-recommendations/" },
      { label: "Product discovery", href: "/glossary/product-discovery/" },
      { label: "Zero-party data", href: "/zero-party-data/" },
      { label: "First-party data", href: "/first-party-data/" },
      { label: "Confronta RevenueHunt vs Nosto", href: "/compare/nosto/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "product-discovery": {
    slug: "product-discovery",
    term: "Product discovery",
    chip: "Concetto",
    title: "Cos'è la product discovery nell'ecommerce?",
    description:
      "La product discovery è come i clienti trovano il prodotto giusto nel tuo catalogo. I metodi, perché i cataloghi grandi la rendono più difficile e come aiuta la vendita guidata.",
    h1: "Cos'è la product discovery nell'ecommerce?",
    shortAnswer:
      "La product discovery è come i clienti trovano il prodotto giusto nel tuo catalogo. Una buona discovery, tramite ricerca, filtri e quiz guidati, porta un cliente da \"ho un problema\" a \"questo è il prodotto\" con il minor attrito possibile.",
    intro: [
      "Un cliente arriva raramente conoscendo il tuo SKU esatto. Arriva con un bisogno. La product discovery è tutto ciò che sta tra quel bisogno e la pagina prodotto giusta.",
    ],
    sections: [
      {
        heading: "I principali metodi di discovery",
        body: [
          "La ricerca permette ai clienti che sanno cosa vogliono di digitarlo. La navigazione e i filtri permettono loro di restringere per categoria e attributo. Le raccomandazioni fanno emergere prodotti rilevanti mentre navigano. La vendita guidata, di solito un quiz, chiede del loro bisogno e li indirizza alla risposta.",
          "Ciascuno si adatta a un cliente diverso. La ricerca funziona quando qualcuno conosce il nome del prodotto. I filtri funzionano quando conosce gli attributi. Un quiz funziona quando conosce il problema ma non il prodotto, che è il caso più difficile e più comune.",
        ],
      },
      {
        heading: "Perché i cataloghi più grandi rendono la discovery più difficile",
        body: [
          "Uno store con dieci prodotti non ha quasi bisogno di strumenti di discovery. Uno store con centinaia o migliaia sì. Più vendi, più è probabile che un cliente si senta sopraffatto e se ne vada senza trovare ciò che era giusto per lui.",
          "Questo è il paradosso della scelta nella pratica: più opzioni possono abbassare la conversione, non alzarla, a meno che tu non dia ai clienti un modo per farsi strada tra di esse. La discovery guidata trasforma un catalogo grande da debolezza a punto di forza.",
        ],
      },
      {
        heading: "La discovery è la leva della conversione",
        body: [
          "Un cliente che non riesce a trovare il prodotto giusto non ne compra uno diverso, se ne va. Migliorare la discovery è spesso il cambiamento a più alta leva che uno store con un catalogo profondo possa fare, perché sistema il passaggio dove l'intento muore in silenzio.",
          "Un quiz è lo strumento di discovery più diretto per gli acquisti basati sul bisogno, perché pone la domanda che porrebbe un venditore e restituisce il prodotto che indicherebbe.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt gestisce la product discovery basata sul bisogno: il cliente descrive il suo obiettivo o problema, e il quiz ordina il tuo catalogo live per restituire la corrispondenza giusta, con i vincoli rigidi a escludere tutto ciò che non va bene.",
      "Scala con il tuo catalogo, funziona alla prima visita e gira su Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace e a sé stante.",
    ],
    faqs: [
      {
        question: "Qual è la differenza tra product discovery e ricerca?",
        answer:
          "La ricerca è un metodo di discovery, per i clienti che sanno già cosa vogliono. La product discovery è più ampia e include filtri, raccomandazioni e quiz guidati per i clienti che conoscono il loro bisogno ma non il prodotto specifico.",
      },
      {
        question: "Come migliora la product discovery un quiz?",
        answer:
          "Gestisce il caso più difficile: un cliente che conosce il suo problema ma non il prodotto. Il quiz chiede del bisogno e ordina il catalogo per restituire la corrispondenza giusta, nel modo in cui lo guiderebbe un venditore.",
      },
      {
        question: "La product discovery conta di più per i cataloghi grandi?",
        answer:
          "Sì. Più prodotti vendi, più è facile che i clienti si sentano sopraffatti e se ne vadano. La discovery guidata si fa strada in un catalogo grande e trasforma le sue dimensioni in un vantaggio invece che in una barriera.",
      },
    ],
    related: [
      { label: "Quiz di vendita guidata", href: "/guided-selling-quiz/" },
      { label: "Quiz trova-prodotto", href: "/product-finder-quiz/" },
      { label: "Personalizzazione ecommerce", href: "/glossary/ecommerce-personalization/" },
      { label: "Confronta RevenueHunt vs Zoovu", href: "/compare/zoovu/" },
      { label: "Template di quiz", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "lead-generation-quiz": {
    slug: "lead-generation-quiz",
    term: "Quiz per la generazione di lead",
    chip: "Tipo di quiz",
    title: "Cos'è un quiz per la generazione di lead?",
    description:
      "Un quiz per la generazione di lead cattura lead qualificati e opted-in con un motivo integrato per iscriversi. Ecco perché batte un modulo di iscrizione e cosa catturi.",
    h1: "Cos'è un quiz per la generazione di lead?",
    shortAnswer:
      "Un quiz per la generazione di lead cattura lead qualificati: un cliente risponde a qualche domanda, lascia la sua email per vedere il risultato, e tu ottieni un contatto etichettato con le sue preferenze dichiarate. È un opt-in con un motivo integrato per iscriversi.",
    intro: [
      "L'email è ancora il canale a più alto rendimento nell'ecommerce, ma un semplice modulo di iscrizione converte una piccola frazione di visitatori e non ti dice niente di loro. Un quiz per la generazione di lead risolve entrambi i problemi in una volta.",
    ],
    sections: [
      {
        heading: "Perché un quiz batte un semplice modulo di iscrizione",
        body: [
          "Una casella newsletter chiede un'email e offre, nel migliore dei casi, uno sconto generico. Un quiz per la generazione di lead offre un risultato personalizzato, che è un motivo per cui un cliente vuole davvero lasciare il suo indirizzo. Lo scambio sembra equo, quindi più persone lo accettano.",
          "Raccoglie anche più di un'email. Nel momento in cui un cliente si iscrive, ha risposto a domande sui suoi obiettivi, preferenze e vincoli, così ogni contatto arriva già qualificato e segmentato.",
        ],
      },
      {
        heading: "Cosa catturi, e come usarlo",
        body: [
          "Catturi l'email più le risposte del quiz come zero-party data. Quelle risposte diventano tag nel tuo strumento email: obiettivo, tipo di pelle, budget, destinatario, qualunque cosa abbia chiesto il quiz.",
          "I tag trasformano una singola lista in segmenti a cui puoi parlare in modo specifico. Un lead che ha detto di fare acquisti per pelle sensibile riceve email diverse da uno che cerca un regalo, e la differenza si costruisce alla cattura, non si indovina dopo.",
        ],
      },
      {
        heading: "Il vantaggio sulla conformità",
        body: [
          "Poiché il cliente offre volontariamente i dati in cambio di un risultato, sono zero-party data: il tipo dichiarato di first-party data, consensuali per definizione. Questo regge molto meglio dei dati di terze parti dedotti o acquistati man mano che le regole sulla privacy si stringono e i browser limitano il tracciamento.",
          "Possiedi i dati, sono accurati perché vengono direttamente dal cliente, e non dipendono da alcun cookie di terze parti per restare utili.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt trasforma qualsiasi quiz in un quiz per la generazione di lead: cattura l'email nel momento di massimo intento, poi sincronizza il contatto e i tag basati sulle risposte con Klaviyo, Mailchimp, Omnisend, HubSpot e altri.",
      "Poiché la raccomandazione è l'incentivo, lo stesso quiz che fa crescere la tua lista guida anche la vendita, e le analytics sull'abbandono mostrano esattamente dove stringere il flusso.",
    ],
    faqs: [
      {
        question: "In cosa un quiz per la generazione di lead è diverso da un modulo di iscrizione?",
        answer:
          "Un modulo di iscrizione chiede un'email e offre un incentivo generico. Un quiz per la generazione di lead offre un risultato personalizzato come motivo per iscriversi e cattura i dati sulle preferenze insieme all'email, così ogni lead è qualificato e segmentato.",
      },
      {
        question: "Quali informazioni cattura un quiz per la generazione di lead?",
        answer:
          "L'email del cliente più le sue risposte al quiz come zero-party data. Quelle risposte si sincronizzano con il tuo strumento email come tag, così i contatti arrivano già segmentati per obiettivo, preferenza o vincolo.",
      },
      {
        question: "I dati di un quiz per la generazione di lead sono conformi da usare?",
        answer:
          "Sì. Il cliente li offre volontariamente in cambio di un risultato, quindi sono first-party data consensuali. Questo regge meglio dei dati dedotti o di terze parti man mano che le regole sulla privacy e le restrizioni dei browser si stringono.",
      },
    ],
    related: [
      { label: "Quiz funnel", href: "/glossary/quiz-funnel/" },
      { label: "Shoppable quiz", href: "/glossary/shoppable-quiz/" },
      { label: "Zero-party data", href: "/zero-party-data/" },
      { label: "Integrazioni", href: "/integrations/" },
      { label: "Template di quiz", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "conversion-rate-optimization": {
    slug: "conversion-rate-optimization",
    term: "Conversion rate optimization (CRO)",
    chip: "Concetto",
    title: "Cos'è la conversion rate optimization?",
    description:
      "La conversion rate optimization (CRO) aumenta la quota di visitatori che acquistano. Come si misura, dove concentrarsi e le tattiche che fanno la differenza.",
    h1: "Cos'è la conversion rate optimization (CRO)?",
    shortAnswer:
      "La conversion rate optimization (CRO) è la pratica di aumentare la percentuale di visitatori che compiono un'azione desiderata, di solito un acquisto. Misuri il tasso di conversione come conversioni diviso visitatori, poi lo migliori senza comprare altro traffico.",
    intro: [
      "La CRO riguarda l'ottenere di più dal traffico che hai già. Raddoppiare il tuo tasso di conversione ha lo stesso effetto sul fatturato che raddoppiare il traffico, ma costa molto meno.",
    ],
    sections: [
      {
        heading: "Come si calcola il tasso di conversione",
        body: [
          "Il tasso di conversione è le conversioni diviso il totale dei visitatori, espresso in percentuale. Se 1.000 visitatori producono 20 acquisti, è un tasso di conversione del 2%. I tassi di conversione medi nell'ecommerce si attestano sulle unità basse, quindi piccoli guadagni assoluti sono grandi guadagni relativi: passare dal 2% al 3% è un aumento del 50% degli ordini.",
          "La stessa matematica si applica a qualsiasi obiettivo, non solo agli acquisti. Iscrizioni alle email, completamenti del quiz e aggiunte al carrello sono tutte conversioni che puoi ottimizzare.",
        ],
      },
      {
        heading: "Dove si concentra davvero la CRO",
        body: [
          "Una buona CRO trova il passaggio specifico dove l'intento si disperde e lo sistema. Falle comuni: una pagina prodotto che non risponde alla vera domanda del cliente, un checkout con troppo attrito, o una pagina di categoria che scarica un cliente indeciso in un muro di opzioni senza guida.",
          "È un ciclo, non una correzione una tantum: formula un'ipotesi, cambia una cosa, misura rispetto a una baseline, tieni ciò che vince. La disciplina sta nel cambiare una variabile alla volta così sai cosa ha mosso il numero.",
        ],
      },
      {
        heading: "Tattiche che muovono il numero",
        body: [
          "I successi duraturi sono chiarezza e rilevanza: pagine più veloci, informazioni di prodotto oneste, meno passaggi al checkout, e aiutare i clienti indecisi a scegliere. I popup di sconto possono alzare la conversione nel breve termine, ma abituano i clienti ad aspettare le offerte ed erodono il margine.",
          "Aiutare i clienti a scegliere è la leva più trascurata. Un cliente che non riesce a decidere non converte, e una griglia di opzioni non lo aiuta. Un'esperienza guidata che restringe il catalogo a una raccomandazione sicura rimuove l'indecisione che uccide in silenzio le conversioni.",
        ],
      },
    ],
    withRevenueHunt: [
      "Un quiz di raccomandazione dei prodotti è una tattica di CRO mirata alla falla dell'indecisione. Invece di lasciare un cliente a confrontare un muro di prodotti, pone qualche domanda e restituisce una raccomandazione sicura e personalizzata, così più clienti arrivano a una decisione d'acquisto.",
      "Cattura anche l'email e i dati sulle preferenze lungo il percorso, così i visitatori che non acquistano alla prima visita non vengono persi. Puoi stimare il potenziale aumento per i tuoi numeri con il calcolatore di ROI del quiz.",
    ],
    faqs: [
      {
        question: "Come si calcola il tasso di conversione?",
        answer:
          "Dividi il numero di conversioni per il numero di visitatori ed esprimilo in percentuale. Per esempio, 20 acquisti su 1.000 visitatori è un tasso di conversione del 2%. La stessa formula funziona per qualsiasi obiettivo, come le iscrizioni o i completamenti del quiz.",
      },
      {
        question: "Qual è un buon tasso di conversione per l'ecommerce?",
        answer:
          "La maggior parte degli store ecommerce converte sulle unità basse, spesso intorno all'1% - 3%. Poiché la base è piccola, modesti guadagni assoluti sono grandi guadagni relativi: passare dal 2% al 3% è un aumento del 50% degli ordini.",
      },
      {
        question: "Come migliora il tasso di conversione un quiz sui prodotti?",
        answer:
          "Punta alla falla dell'indecisione. Un quiz restringe un catalogo grande a una raccomandazione sicura e personalizzata, così i clienti indecisi arrivano a una decisione d'acquisto invece di rimbalzare via da una griglia di opzioni.",
      },
    ],
    related: [
      { label: "Valore medio dell'ordine", href: "/glossary/average-order-value/" },
      { label: "Product discovery", href: "/glossary/product-discovery/" },
      { label: "Consigli di ottimizzazione delle conversioni", href: "/ecommerce-conversion-optimization-tips/" },
      { label: "Calcolatore di ROI del quiz", href: "/quiz-roi-calculator/" },
      { label: "Quiz funnel", href: "/glossary/quiz-funnel/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "average-order-value": {
    slug: "average-order-value",
    term: "Valore medio dell'ordine (AOV)",
    chip: "Metrica",
    title: "Cos'è il valore medio dell'ordine (AOV)?",
    description:
      "Il valore medio dell'ordine (AOV) è la media che un cliente spende per ordine. Come calcolarlo, perché conta e come alzarlo senza più traffico.",
    h1: "Cos'è il valore medio dell'ordine (AOV)?",
    shortAnswer:
      "Il valore medio dell'ordine (AOV) è l'importo medio che un cliente spende in un singolo ordine. Lo calcoli dividendo il fatturato totale per il numero di ordini nello stesso periodo.",
    intro: [
      "L'AOV è uno dei tre numeri che determinano il tuo fatturato, insieme al traffico e al tasso di conversione. Alzarlo aumenta il fatturato dallo stesso identico numero di ordini, ed è per questo che è una delle leve di crescita più economiche che hai.",
    ],
    sections: [
      {
        heading: "Come calcolare l'AOV",
        body: [
          "Dividi il fatturato totale per il numero di ordini in un periodo definito. Se uno store fa $50.000 da 1.000 ordini in un mese, il suo AOV è $50. Monitoralo nel tempo e per fonte di traffico, perché un canale con AOV più alto può valere di più anche se converte meno.",
          "L'AOV interagisce con tutto il resto. Un AOV più alto significa che ogni conversione vale di più, il che aumenta quanto puoi permetterti di spendere per acquisire un cliente.",
        ],
      },
      {
        heading: "Perché l'AOV conta",
        body: [
          "Il traffico e il tasso di conversione ricevono la maggior parte dell'attenzione, ma sono le leve costose: più traffico costa spesa pubblicitaria, e i guadagni di conversione diventano più difficili man mano che ottimizzi. L'AOV è la leva che puoi muovere sugli ordini che stai già conquistando.",
          "Finanzia anche l'acquisizione. Più vale ogni ordine, più puoi offrire per il traffico a pagamento restando comunque profittevole, il che si compone lungo tutto il funnel.",
        ],
      },
      {
        heading: "Come aumentare l'AOV",
        body: [
          "I modi onesti per alzare l'AOV aggiungono tutti valore reale: raccomandare prodotti complementari, mettere in bundle articoli che stanno bene insieme, e aiutare i clienti a comprare la soluzione completa invece di un singolo pezzo. Il cross-selling e l'upselling sono le tattiche; una raccomandazione rilevante è ciò che le fa funzionare invece di infastidire.",
          "La parola chiave è rilevante. Un suggerimento di aggiunta generico viene ignorato. Un set consigliato che si adatta davvero a ciò che il cliente sta comprando viene acquistato, perché si legge come aiuto, non come una spinta di vendita.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt alza l'AOV raccomandando un set completo invece di un solo prodotto. Gli slot di raccomandazione riservano un posto per ciascun ruolo di una routine, uno stack o un bundle, così la pagina dei risultati restituisce l'intera soluzione con l'aggiungi al carrello per il set e uno sconto opzionale legato alle risposte.",
      "Poiché ogni articolo è abbinato alle risposte del cliente, l'ordine più grande sembra una raccomandazione, non un upsell. Puoi stimare l'impatto sul fatturato per il tuo store con il calcolatore di ROI del quiz.",
    ],
    faqs: [
      {
        question: "Come si calcola il valore medio dell'ordine?",
        answer:
          "Dividi il fatturato totale per il numero di ordini nello stesso periodo. Per esempio, $50.000 di fatturato da 1.000 ordini è un valore medio dell'ordine di $50.",
      },
      {
        question: "Perché l'AOV è importante?",
        answer:
          "Aumenta il fatturato dagli ordini che già conquisti, senza pagare per più traffico, e un AOV più alto ti permette di spendere di più per acquisire ogni cliente restando profittevole. È una delle leve di crescita più economiche disponibili.",
      },
      {
        question: "Come può aumentare l'AOV un quiz sui prodotti?",
        answer:
          "Raccomandando un set completo invece di un singolo prodotto. Gli slot di raccomandazione restituiscono una routine, uno stack o un bundle abbinato con l'aggiungi al carrello per l'intero set, così ogni ordine è più grande pur restando personalizzato.",
      },
    ],
    related: [
      { label: "Cross-selling e upselling", href: "/glossary/cross-selling-and-upselling/" },
      { label: "Conversion rate optimization", href: "/glossary/conversion-rate-optimization/" },
      { label: "Quiz crea-bundle", href: "/solutions/bundle-builder/" },
      { label: "Quiz crea-routine", href: "/solutions/routine-builder/" },
      { label: "Calcolatore di ROI del quiz", href: "/quiz-roi-calculator/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "cross-selling-and-upselling": {
    slug: "cross-selling-and-upselling",
    term: "Cross-selling e upselling",
    chip: "Tattica",
    title: "Cross-selling vs upselling spiegati",
    description:
      "Il cross-selling aggiunge prodotti correlati; l'upselling porta a uno migliore. Ecco la differenza, perché entrambi funzionano e come un quiz lo fa senza la spinta.",
    h1: "Cos'è il cross-selling e l'upselling?",
    shortAnswer:
      "Il cross-selling raccomanda prodotti correlati che completano ciò che un cliente sta comprando, come una crema idratante con un detergente. L'upselling raccomanda una versione migliore o più grande di ciò che già vuole, come una taglia più grande o un livello premium. Entrambi alzano il valore dell'ordine.",
    intro: [
      "I due vengono messi insieme perché entrambi aumentano quanto spende un cliente, ma funzionano in direzioni diverse. Sapere quale si adatta a un momento è la differenza tra utile e insistente.",
    ],
    sections: [
      {
        heading: "Cross-selling vs upselling: la differenza",
        body: [
          "Il cross-selling va di lato. Aggiunge articoli complementari all'ordine: il classico \"vuole le patatine con quello?\", o una pellicola protettiva con un telefono. L'obiettivo è un acquisto più completo.",
          "L'upselling va su. Sposta il cliente verso una versione di valore più alto di ciò che sta già considerando: una taglia più grande, un modello premium, un abbonamento più lungo. L'obiettivo è un'opzione migliore a un prezzo più alto, non più articoli.",
        ],
      },
      {
        heading: "Perché entrambi funzionano, quando sono rilevanti",
        body: [
          "Entrambe le tattiche alzano il valore medio dell'ordine, ed entrambe possono ritorcersi contro. Un cross-sell o un upsell rilevante si legge come un consiglio utile; uno irrilevante si legge come uno store che cerca di gonfiare il conto, e i clienti lo ignorano o se ne risentono.",
          "La rilevanza è tutto, e la rilevanza richiede di conoscere il cliente. Una raccomandazione basata su ciò che qualcuno sta davvero cercando di ottenere fa centro. Un generico carosello \"potrebbe anche piacerti\", mostrato a tutti, no.",
        ],
      },
      {
        heading: "Come un quiz fa cross-selling e upselling senza la spinta",
        body: [
          "Un quiz conosce l'obiettivo del cliente prima di raccomandare qualsiasi cosa, così il cross-sell e l'upsell sono integrati nella raccomandazione invece di attaccati al checkout. Può restituire un set completo (cross-sell) e indirizzare verso il livello giusto per il bisogno dichiarato (upsell) in una sola mossa.",
          "Poiché la raccomandazione risponde alle domande del cliente stesso, l'ordine più grande sembra meritato. Il cliente vede una soluzione che si adatta, non una lista di aggiunte.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt integra cross-sell e upsell nella raccomandazione stessa. Gli slot di raccomandazione riservano un posto per ciascun ruolo complementare così la pagina dei risultati restituisce un set completo, e la logica basata sulle risposte indirizza i clienti verso la taglia, il livello o il bundle che si adatta a ciò che ti hanno detto.",
      "La pagina dei risultati supporta l'aggiungi al carrello per l'intero set più uno sconto legato alle risposte, così l'ordine cresce perché la raccomandazione è giusta, non perché un popup ha interrotto il checkout.",
    ],
    faqs: [
      {
        question: "Qual è la differenza tra cross-selling e upselling?",
        answer:
          "Il cross-selling aggiunge prodotti complementari a un ordine, come una crema idratante con un detergente. L'upselling porta a una versione migliore o più grande di ciò che il cliente già vuole, come un livello premium o una taglia più grande. Entrambi aumentano il valore dell'ordine.",
      },
      {
        question: "Il cross-selling e l'upselling funzionano davvero?",
        answer:
          "Sì, quando la raccomandazione è rilevante. Un suggerimento che si adatta all'obiettivo del cliente si legge come utile e viene acquistato. Un generico messaggio uguale per tutti viene ignorato o risentito, quindi la rilevanza è ciò che separa i due risultati.",
      },
      {
        question: "Come fa cross-selling e upselling un quiz?",
        answer:
          "Impara prima l'obiettivo del cliente, poi integra il cross-sell e l'upsell nella raccomandazione. Gli slot di raccomandazione restituiscono un set completo, e la logica basata sulle risposte indirizza verso il livello giusto, così l'ordine più grande sembra un consiglio invece di una spinta.",
      },
    ],
    related: [
      { label: "Valore medio dell'ordine", href: "/glossary/average-order-value/" },
      { label: "Quiz crea-bundle", href: "/solutions/bundle-builder/" },
      { label: "Quiz crea-routine", href: "/solutions/routine-builder/" },
      { label: "Shoppable quiz", href: "/glossary/shoppable-quiz/" },
      { label: "Raccomandazioni di prodotti personalizzate", href: "/glossary/personalized-product-recommendations/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "customer-segmentation": {
    slug: "customer-segmentation",
    term: "Segmentazione dei clienti",
    chip: "Marketing",
    title: "Cos'è la segmentazione dei clienti?",
    description:
      "La segmentazione dei clienti raggruppa gli acquirenti per tratti condivisi così puoi fare marketing a ciascun gruppo in modo specifico. I tipi, perché funziona e come la alimenta un quiz.",
    h1: "Cos'è la segmentazione dei clienti?",
    shortAnswer:
      "La segmentazione dei clienti è la pratica di raggruppare i clienti per tratti condivisi, come obiettivi, comportamento o caratteristiche demografiche, così puoi fare marketing a ciascun gruppo con messaggi rilevanti invece di mandare a tutti la stessa cosa.",
    intro: [
      "Un singolo messaggio a tutta la tua lista non parla a nessuno in particolare. La segmentazione ti permette di dire la cosa giusta al gruppo giusto, ed è per questo che le campagne segmentate superano costantemente il \"batch-and-blast\".",
    ],
    sections: [
      {
        heading: "I principali modi di segmentare",
        body: [
          "La segmentazione demografica raggruppa per attributi come età o località. La segmentazione comportamentale raggruppa per ciò che fanno i clienti: acquisti passati, navigazione, coinvolgimento. La segmentazione psicografica raggruppa per atteggiamenti e valori. La segmentazione basata sui bisogni raggruppa per il problema che un cliente sta cercando di risolvere.",
          "Per l'ecommerce, i segmenti basati sui bisogni e comportamentali tendono a essere i più azionabili, perché si mappano direttamente su cosa raccomandare e cosa dire dopo.",
        ],
      },
      {
        heading: "Perché la segmentazione funziona",
        body: [
          "La rilevanza guida la risposta. Un cliente che cerca prodotti per pelle secca e sensibile non dovrebbe ricevere la stessa email di uno che cerca un regalo, e quando non lo fa, tassi di apertura, click e conversioni salgono tutti.",
          "La segmentazione si compone anche nel tempo. Ogni campagna che invii a un segmento ben definito ti insegna di più su di esso, il che affina la successiva. La lista diventa un asset, non solo un canale di trasmissione.",
        ],
      },
      {
        heading: "Il problema dei dati dietro la segmentazione",
        body: [
          "Puoi segmentare solo per ciò che sai, e la maggior parte degli store non sa granché di un visitatore anonimo. I dati comportamentali si accumulano lentamente e si bloccano con i nuovi clienti, e i dati di terze parti vengono limitati da browser e normative.",
          "La soluzione è chiedere. Quando un cliente ti dice il suo obiettivo, la sua preferenza o il suo vincolo, puoi segmentare su quello immediatamente e con accuratezza, con il suo consenso. Quell'informazione offerta volontariamente è zero-party data.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt trasforma automaticamente le risposte del quiz in segmenti. Ogni risposta diventa un tag cliente, come goal:sleep o skin:sensitive, che si sincronizza con Klaviyo, Mailchimp, Omnisend, HubSpot e altri, così i contatti arrivano pre-segmentati in base a ciò che ti hanno detto.",
      "Poiché i segmenti sono costruiti da dati che il cliente ha offerto volontariamente, sono accurati fin dalla prima visita e non dipendono dal tracciamento. Ogni campagna dopo il quiz può parlare al segmento invece che a tutta la lista.",
    ],
    faqs: [
      {
        question: "Quali sono i principali tipi di segmentazione dei clienti?",
        answer:
          "Le basi comuni sono demografica (età, località), comportamentale (acquisti, navigazione, coinvolgimento), psicografica (atteggiamenti, valori) e basata sui bisogni (il problema che un cliente sta risolvendo). Per l'ecommerce, i segmenti basati sui bisogni e comportamentali sono di solito i più azionabili.",
      },
      {
        question: "Perché la segmentazione dei clienti è importante?",
        answer:
          "Rende i messaggi rilevanti, il che alza i tassi di apertura, i click e le conversioni rispetto a mandare a tutti la stessa cosa. Si compone anche: ogni campagna a un segmento definito ti insegna di più su di esso e affina la successiva.",
      },
      {
        question: "Come aiuta con la segmentazione un quiz?",
        answer:
          "Chiede direttamente ai clienti, così ogni risposta diventa un tag cliente che si sincronizza con il tuo strumento email. I contatti arrivano pre-segmentati per obiettivo, preferenza o vincolo, accurati fin dalla prima visita e senza basarsi sul tracciamento.",
      },
    ],
    related: [
      { label: "Raccomandazioni di prodotti personalizzate", href: "/glossary/personalized-product-recommendations/" },
      { label: "Quiz per la generazione di lead", href: "/glossary/lead-generation-quiz/" },
      { label: "Zero-party data", href: "/zero-party-data/" },
      { label: "Personalizzazione ecommerce", href: "/glossary/ecommerce-personalization/" },
      { label: "Integrazioni", href: "/integrations/" },
    ],
    verifiedAsOf: VERIFIED,
  },
};

/** Guides and pages the glossary hub points to. */
export const GLOSSARY_RELATED_GUIDES_IT: GlossaryLink[] = [
  {
    label: "Quiz trova-prodotto",
    href: "/product-finder-quiz/",
    blurb: "Cos'è un quiz trova-prodotto, quando usarne uno e 12 esempi dal vivo.",
  },
  {
    label: "Quiz di vendita guidata",
    href: "/guided-selling-quiz/",
    blurb: "Come funziona la vendita guidata nell'ecommerce e come costruire il quiz.",
  },
  {
    label: "Zero-party data",
    href: "/zero-party-data/",
    blurb: "Cosa sono gli zero-party data, perché battono il tracciamento comportamentale e come un quiz li cattura.",
  },
  {
    label: "Soluzioni per settore",
    href: "/solutions/",
    blurb: "Soluzioni di quiz di raccomandazione dei prodotti per cura della pelle, integratori, moda e altro.",
  },
  {
    label: "Calcolatore di ROI del quiz",
    href: "/quiz-roi-calculator/",
    blurb: "Stima il fatturato extra che un quiz di raccomandazione dei prodotti potrebbe aggiungere al tuo store.",
  },
];
