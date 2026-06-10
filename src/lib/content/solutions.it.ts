import type { Solution } from "../solutions";

const VERIFIED = "2026-06-07";

export const SOLUTIONS_IT: Record<string, Solution> = {
  // ----------------------------------------------------------------- verticals
  skincare: {
    slug: "skincare",
    type: "vertical",
    name: "Skincare",
    chip: "Settore",
    title: "Quiz skincare per Shopify e WooCommerce",
    description:
      "Crea un quiz skincare che individua tipo di pelle ed esigenze, poi consiglia la routine giusta. Piano gratuito, builder AI, online in giornata.",
    h1: "Quiz skincare che trasformano chi naviga in una routine",
    heroSubtitle:
      "La maggior parte di chi compra skincare per la prima volta non sa quali prodotti facciano al caso suo. Un quiz pone le domande giuste e restituisce una routine personalizzata da aggiungere al carrello.",
    intro: [
      "La skincare è la categoria più difficile da acquistare a freddo. I clienti arrivano con un'esigenza, non con un prodotto in mente, e un muro di detergenti, sieri e SPF non li aiuta a scegliere. Un quiz skincare sostituisce quel muro con una breve conversazione guidata: in entrata tipo di pelle, esigenza principale, sensibilità e budget, in uscita una routine personalizzata.",
      "RevenueHunt è usato da oltre 20.000 brand proprio per questo. Associa ogni risposta a prodotti reali del tuo catalogo, raggruppa il risultato per fase della routine (detergente, trattamento, idratante, SPF) e cattura il profilo cutaneo del cliente come zero-party data che puoi sincronizzare con Klaviyo.",
    ],
    quizTypes: [
      {
        title: "Tipo di pelle finder",
        body: "Cinque o sette domande su tipo di pelle, esigenze e obiettivi restituiscono una routine su misura. Il classico quiz skincare, e il punto di partenza che converte di più.",
      },
      {
        title: "Routine builder",
        body: "Usa gli slot di raccomandazione per riservare un posto a ogni fase, così ogni cliente ottiene una routine completa a 3 o 5 step invece di un singolo prodotto.",
      },
      {
        title: "Quiz per esigenza",
        body: "Parti dal problema (acne, invecchiamento, secchezza, sensibilità) e ramifica con la logica condizionale, così ogni cliente vede solo le domande pertinenti.",
      },
      {
        title: "Match per ingredienti o sensibilità",
        body: "Escludi i prodotti in conflitto con un'allergia o una sensibilità dichiarata, così un cliente che segnala l'esigenza senza profumo non vede mai un prodotto profumato tra i suoi risultati.",
      },
    ],
    howItHelps: [
      "Il motore di raccomandazione ordina i prodotti in base alle risposte che contano di più. Dai più peso a un'esigenza imprescindibile rispetto a una desiderabile, ed escludi tutto ciò che un cliente scarta, così la pagina dei risultati è davvero su misura e non un generico carosello di best seller.",
      "Ogni risposta è zero-party data. Un cliente che ti dice di avere la pelle secca e sensibile e di tenere all'anti-età è un segmento a cui puoi rivolgerti per anni. RevenueHunt sincronizza quel profilo e i tag cliente con Klaviyo, Mailchimp, Omnisend e altri.",
      "Costruiscilo in pochi minuti, non in settimane. Parti da un template skincare, oppure descrivi il tuo store all'AI Quiz Copilot e in circa 60 secondi imposta domande, logica e associazioni ai prodotti. Poi pubblicalo come popup, embed o landing page a tutta pagina.",
    ],
    demo: {
      label: "Prova il quiz sul tipo di pelle",
      href: "https://productrecommendationquiz.com/pages/skin-type-quiz?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_skincare",
      blurb: "Un quiz skincare dal vivo sul nostro demo store. Rispondi a qualche domanda e guarda la routine che restituisce.",
    },
    faqs: [
      {
        question: "Quante domande dovrebbe avere un quiz skincare?",
        answer:
          "Da cinque a sette domande visibili vanno bene per la maggior parte dei brand. Usa la logica condizionale per saltare le domande non pertinenti, così un cliente senza sensibilità non vede mai lo step sulle allergie.",
      },
      {
        question: "Il quiz può consigliare una routine completa, non solo un prodotto?",
        answer:
          "Sì. Gli slot di raccomandazione riservano un posto a ogni fase della routine (detergente, trattamento, idratante, SPF), così ogni cliente ottiene una routine completa con aggiungi al carrello per l'intero set.",
      },
      {
        question: "Funziona per pelli sensibili e allergie?",
        answer:
          "Sì. Ogni risposta può escludere prodotti, quindi segnalare un'allergia o una sensibilità rimuove dai risultati qualsiasi prodotto in conflitto, anche se per il resto era un'ottima corrispondenza.",
      },
      {
        question: "Posso catturare le email e inviare la routine a Klaviyo?",
        answer:
          "Sì. Il quiz cattura l'email e l'intero profilo cutaneo come zero-party data, e sincronizza risposte e tag cliente con Klaviyo, Mailchimp, Omnisend, HubSpot e altri.",
      },
    ],
    related: [
      { label: "Template di quiz skincare", href: "/templates/" },
      { label: "Quiz routine builder", href: "/solutions/routine-builder/" },
      { label: "Quiz shade finder", href: "/solutions/shade-finder/" },
      { label: "Per i brand beauty", href: "/for-beauty-brands/" },
      { label: "Quiz per Shopify", href: "/product-recommendation-quiz-shopify/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  beauty: {
    slug: "beauty",
    type: "vertical",
    name: "Beauty e cosmetici",
    chip: "Settore",
    title: "Quiz beauty e cosmetici per il tuo store",
    description:
      "Un quiz beauty che trova la nuance, individua i prodotti giusti e costruisce una routine dal tuo catalogo. Piano gratuito, builder AI, multi-piattaforma.",
    h1: "Quiz beauty che abbinano i clienti al prodotto giusto",
    heroSubtitle:
      "Nuance del fondotinta, colore del rossetto, un'intera routine: un quiz beauty risponde alle domande a cui una griglia di prodotti non può rispondere, e porta i clienti a una pagina dei risultati personalizzata.",
    intro: [
      "Chi compra beauty affronta due problemi insieme: troppa scelta e troppo rischio. Sbagli la nuance del fondotinta e arriva il reso. Un quiz beauty elimina i dubbi chiedendo di sottotono, coprenza, finish ed esigenza, poi consigliando i prodotti esatti che corrispondono.",
      "RevenueHunt alimenta i quiz beauty di migliaia di brand. Estrae prodotti e varianti reali dal tuo catalogo, li mostra su una pagina dei risultati con aggiungi al carrello diretto, e cattura il profilo beauty di ogni cliente come zero-party data per follow-up email segmentati.",
    ],
    quizTypes: [
      {
        title: "Shade matcher",
        body: "Domande su sottotono, profondità e finish portano alla nuance giusta di fondotinta, correttore o rossetto. Le risposte a scelta per immagini lo rendono veloce su mobile.",
      },
      {
        title: "Builder di routine completa",
        body: "Consiglia un set completo (prep, base, colore, fissaggio) usando gli slot di raccomandazione, così i clienti comprano la routine invece di un singolo prodotto.",
      },
      {
        title: "Quiz per esigenza pelle o capelli",
        body: "Ramifica per esigenza e per tipo di pelle o capelli, così la pagina dei risultati parla all'obiettivo specifico di ogni cliente.",
      },
      {
        title: "Finder per regalo o set starter",
        body: "Aiuta chi compra regali e chi è alle prime armi e non conosce il catalogo consigliando un set starter o un bundle curato.",
      },
    ],
    howItHelps: [
      "Nuance e vestibilità sono esattamente dove avvengono i resi. Chiedendo sottotono e coprenza in anticipo ed escludendo tutto ciò che non corrisponde, il quiz indirizza i clienti verso prodotti che hanno molte più probabilità di tenere.",
      "Le domande a scelta per immagini permettono ai clienti di toccare un'immagine invece di descriversi, il che mantiene alti i tassi di completamento su mobile, dove arriva la maggior parte del traffico beauty.",
      "Il profilo del cliente (sottotono, tipo di pelle, finish preferito) si sincronizza con il tuo strumento email come tag cliente, così ogni campagna dopo il quiz può essere personalizzata invece che generica.",
    ],
    demo: {
      label: "Prova il quiz di match del fondotinta",
      href: "https://productrecommendationquiz.com/pages/foundation-match?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_beauty",
      blurb: "Un quiz dal vivo di shade-match basato su immagini sul nostro demo store, con risultati a corrispondenza esatta.",
    },
    faqs: [
      {
        question: "Un quiz beauty può abbinare le nuance del fondotinta?",
        answer:
          "Sì. Chiedi di sottotono, profondità e finish, collega ogni risposta alle nuance corrispondenti ed escludi le altre. La pagina dei risultati mostra la nuance esatta con aggiungi al carrello.",
      },
      {
        question: "Supporta le domande a scelta per immagini?",
        answer:
          "Sì. Le opzioni possono essere mostrate come immagini cliccabili, ideale per domande su nuance, finish e stile, e aumenta il completamento su mobile.",
      },
      {
        question: "Funziona su WooCommerce o BigCommerce, non solo Shopify?",
        answer:
          "Sì. RevenueHunt funziona nativamente su Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace e come quiz ospitato standalone.",
      },
      {
        question: "Posso raggruppare più prodotti in un solo risultato?",
        answer:
          "Sì. Usa gli slot di raccomandazione per riservare un posto a ogni ruolo di prodotto e restituire un set o bundle completo, con aggiungi al carrello per l'intera routine.",
      },
    ],
    related: [
      { label: "Quiz shade finder", href: "/solutions/shade-finder/" },
      { label: "Quiz skincare", href: "/solutions/skincare/" },
      { label: "Quiz gift finder", href: "/solutions/gift-finder/" },
      { label: "Per i brand beauty", href: "/for-beauty-brands/" },
      { label: "Template di quiz", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  supplements: {
    slug: "supplements",
    type: "vertical",
    name: "Integratori",
    chip: "Settore",
    title: "Quiz integratori: consiglia lo stack giusto",
    description:
      "Un quiz integratori che trasforma gli obiettivi di salute in uno stack consigliato. Ramifica per dieta e restrizioni, sincronizza gli obiettivi con Klaviyo. Inizi gratis.",
    h1: "Quiz integratori che consigliano lo stack giusto",
    heroSubtitle:
      "I clienti comprano integratori per un obiettivo, non per uno SKU. Un quiz trasforma sonno, energia, immunità o concentrazione in uno stack consigliato dal tuo catalogo.",
    intro: [
      "Chi compra integratori ragiona per obiettivi: dormire meglio, più energia, una migliore salute intestinale. Il tuo catalogo è organizzato per prodotto. Un quiz integratori unisce i due mondi chiedendo di obiettivi, dieta e stile di vita, poi consigliando lo stack che fa al caso.",
      "RevenueHunt associa ogni obiettivo agli SKU giusti, gestisce i vincoli dietetici con le esclusioni e restituisce uno stack multi-prodotto su una pagina dei risultati con uno sconto sul primo ordine. Gli obiettivi del cliente si sincronizzano con Klaviyo come tag per email continue e segmentate.",
    ],
    quizTypes: [
      {
        title: "Finder per obiettivo di salute",
        body: "I clienti scelgono i loro obiettivi (sonno, energia, immunità, intestino, concentrazione) e ogni obiettivo fa salire i prodotti corrispondenti per costruire uno stack consigliato.",
      },
      {
        title: "Stack builder",
        body: "Riserva uno slot per ogni ruolo (base, mirato, performance) così ogni cliente esce con uno stack completo e coerente.",
      },
      {
        title: "Filtro per dieta e restrizioni",
        body: "Escludi i prodotti in conflitto con vincoli vegan, gluten-free o altri, così i risultati rispettano automaticamente la dieta di ogni cliente.",
      },
      {
        title: "Onboarding abbonamento",
        body: "Usa il quiz in cima a un funnel di abbonamento, cattura l'email e collega la pagina dei risultati a un'offerta subscribe-and-save.",
      },
    ],
    howItHelps: [
      "La logica condizionale mantiene il quiz breve. Se un cliente dichiara di non avere restrizioni dietetiche, il quiz salta del tutto le domande sulle restrizioni, così nessuno risponde a domande che non lo riguardano.",
      "Le esclusioni gestiscono i vincoli rigidi in modo pulito. Un cliente vegan non vede mai un prodotto non vegan tra i risultati, anche se era un'ottima corrispondenza sui soli obiettivi.",
      "Gli obiettivi sono la cosa più preziosa che un brand di integratori possa imparare. Sincronizzare tag come goal:sleep o goal:gut con Klaviyo ti permette di inviare email lifecycle che corrispondono davvero a ciò che ogni cliente cerca di ottenere.",
    ],
    faqs: [
      {
        question: "Un quiz integratori può consigliare uno stack multi-prodotto?",
        answer:
          "Sì. Ogni obiettivo fa salire i prodotti corrispondenti, e gli slot di raccomandazione riservano un posto a ogni ruolo, così la pagina dei risultati restituisce uno stack completo con aggiungi al carrello per il set.",
      },
      {
        question: "Come gestisce le diete vegan o gluten-free?",
        answer:
          "Usa le esclusioni. Collegare una risposta sulla dieta a una lista di esclusione rimuove dai risultati qualsiasi prodotto in conflitto, a prescindere da quanto abbia ottenuto sugli obiettivi.",
      },
      {
        question: "Posso aggiungere uno sconto sul primo ordine nella pagina dei risultati?",
        answer:
          "Sì. La pagina dei risultati supporta un blocco con codice sconto che puoi mostrare a chi compra per la prima volta o legare a specifiche combinazioni di risposte.",
      },
      {
        question: "Funziona per un brand in abbonamento?",
        answer:
          "Sì. Usa il quiz in cima al funnel, cattura l'email su Klaviyo e indirizza la pagina dei risultati verso un'offerta subscribe-and-save.",
      },
    ],
    related: [
      { label: "Quiz bundle builder", href: "/solutions/bundle-builder/" },
      { label: "Quiz fitness e nutrizione", href: "/solutions/fitness/" },
      { label: "Quiz di vendita guidata", href: "/guided-selling-quiz/" },
      { label: "Template di quiz", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  fashion: {
    slug: "fashion",
    type: "vertical",
    name: "Moda e abbigliamento",
    chip: "Settore",
    title: "Quiz di stile moda e abbigliamento per l'ecommerce",
    description:
      "Un quiz di stile che trova vestibilità, taglio e colore giusti dal tuo catalogo e riduce i resi. Piano gratuito, multi-piattaforma, multilingua.",
    h1: "Quiz di stile che trovano vestibilità e taglio giusti",
    heroSubtitle:
      "Lo stile è personale e la vestibilità è rischiosa. Un quiz moda impara il gusto e la taglia di un cliente, poi consiglia capi che probabilmente terrà.",
    intro: [
      "La moda ha il tasso di reso più alto dell'ecommerce, e gran parte deriva da incongruenze di vestibilità e stile. Un quiz di stile riduce entrambe chiedendo di corporatura, preferenze di vestibilità, occasione e gusto, poi consigliando capi che si adattano davvero al cliente.",
      "RevenueHunt costruisce il quiz sul tuo catalogo live, varianti incluse, così taglia e colore arrivano fino alla pagina dei risultati. Per i brand che vendono su più mercati, un quiz base può essere tradotto e assegnato per ogni Shopify Market, con titoli e prezzi dei prodotti localizzati automaticamente.",
    ],
    quizTypes: [
      {
        title: "Quiz di profilo di stile",
        body: "Domande su gusto, occasione e colore fanno emergere i capi che corrispondono all'estetica di un cliente invece di una generica griglia di nuovi arrivi.",
      },
      {
        title: "Finder di vestibilità e taglia",
        body: "Domande su corporatura e preferenze di vestibilità restringono al taglio e alla taglia giusti, da dove parte la maggior parte dei resi di abbigliamento.",
      },
      {
        title: "Builder di capsule o outfit",
        body: "Usa gli slot di raccomandazione per comporre un outfit o una capsule coordinata invece di un singolo capo.",
      },
      {
        title: "Finder per occasione",
        body: "Ramifica per occasione (lavoro, matrimonio, viaggio) così ogni cliente vede una selezione curata per il momento per cui sta comprando.",
      },
    ],
    howItHelps: [
      "Consigliare per vestibilità e gusto, non solo per popolarità, indirizza i clienti verso capi che hanno più probabilità di tenere, la leva più diretta che un brand di moda ha sui resi.",
      "Le varianti arrivano da un capo all'altro. Collega le risposte a taglie e colori specifici, e la pagina dei risultati mostra la variante giusta con aggiungi al carrello, così i clienti non rimbalzano su una scheda prodotto per riselezionare.",
      "Vendi in tutta l'UE o oltre? Costruisci un quiz base, lascia che l'AI Copilot lo traduca, assegna ogni versione al suo Shopify Market, e i dati dei prodotti si localizzano automaticamente. Nessun lavoro di traduzione prodotti per ogni lingua.",
    ],
    faqs: [
      {
        question: "Un quiz moda può ridurre i resi?",
        answer:
          "Colpisce la causa principale dei resi consigliando per vestibilità e gusto invece che per popolarità. Collegare le risposte a taglie e colori specifici indirizza i clienti verso capi che hanno più probabilità di tenere.",
      },
      {
        question: "Supporta varianti di prodotto come taglia e colore?",
        answer:
          "Sì. Le risposte possono collegarsi a varianti specifiche, e la pagina dei risultati mostra taglia e colore abbinati con aggiungi al carrello diretto.",
      },
      {
        question: "Posso eseguire il quiz in più lingue?",
        answer:
          "Sì. Costruisci un quiz base, traducilo con l'AI Copilot e assegna ogni versione al suo Shopify Market. Titoli e prezzi dei prodotti si auto-localizzano tramite Shopify Markets.",
      },
      {
        question: "Su quali piattaforme funziona?",
        answer:
          "Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace e come quiz ospitato standalone.",
      },
    ],
    related: [
      { label: "Quiz size & fit finder", href: "/solutions/size-finder/" },
      { label: "Quiz gift finder", href: "/solutions/gift-finder/" },
      { label: "Template di quiz", href: "/templates/" },
      { label: "Quiz per Shopify", href: "/product-recommendation-quiz-shopify/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  coffee: {
    slug: "coffee",
    type: "vertical",
    name: "Caffè e tè",
    chip: "Settore",
    title: "Quiz caffè: abbina le tostature al gusto",
    description:
      "Un quiz di profilo di gusto che abbina i clienti alla tostatura o miscela giusta e fa l'onboarding degli abbonati. Piano gratuito, pronto per Klaviyo e ReCharge.",
    h1: "Quiz caffè che abbinano il gusto alla tostatura giusta",
    heroSubtitle:
      "Tostatura, origine, metodo di estrazione, note aromatiche: un quiz caffè trasforma un menu confuso in un consiglio sicuro, e in un nuovo abbonato.",
    intro: [
      "Caffè e tè sono guidati dal gusto, e il gusto è difficile da acquistare da una lista di prodotti. Un breve quiz di profilo di gusto chiede della preferenza di tostatura, del metodo di estrazione e delle note aromatiche, poi consiglia la miscela che il cliente apprezzerà davvero.",
      "RevenueHunt ne fa un funnel, non solo un consiglio. Cattura l'email all'inizio, consiglia una miscela starter e collega la pagina dei risultati a un'offerta subscribe-and-save tramite ReCharge, con le preferenze di tostatura ed estrazione sincronizzate con Klaviyo.",
    ],
    quizTypes: [
      {
        title: "Finder di profilo di gusto",
        body: "Poche domande su tostatura, corpo e note aromatiche abbinano ogni cliente alla miscela che corrisponde al suo palato.",
      },
      {
        title: "Match per metodo di estrazione",
        body: "Espresso, pour-over, French press o filtro: ramifica per metodo così macinatura e miscela si adattano a come prepara davvero il caffè.",
      },
      {
        title: "Onboarding abbonamento",
        body: "Usa il quiz in cima al funnel, consiglia una miscela starter e offri subscribe-and-save nella pagina dei risultati.",
      },
      {
        title: "Finder per regalo o sampler",
        body: "Aiuta chi compra regali a scegliere un sampler o un set regalo senza conoscere il gusto esatto del destinatario.",
      },
    ],
    howItHelps: [
      "Un profilo di gusto è un ottimo motivo per chiedere un'email. I clienti condividono volentieri le preferenze di tostatura ed estrazione per ricevere un consiglio, il che riempie la tua lista di abbonati già segmentati.",
      "La pagina dei risultati fa la vendita. Consiglia la miscela abbinata, mostra un'offerta subscribe-and-save collegata a ReCharge e lascia che i clienti aggiungano al carrello senza uscire dal quiz.",
      "Le preferenze diventano segmenti duraturi. Sincronizzare i tag di tostatura e metodo di estrazione con Klaviyo significa che ogni campagna futura può parlare a chi beve espresso a tostatura scura in modo diverso da chi ama il pour-over a tostatura chiara.",
    ],
    demo: {
      label: "Prova il quiz caffè",
      href: "https://productrecommendationquiz.com/pages/coffee-quiz?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_coffee",
      blurb: "Un quiz caffè dal vivo con abbinamento per gusto sul nostro demo store.",
    },
    faqs: [
      {
        question: "Un quiz caffè può consigliare un abbonamento?",
        answer:
          "Sì. Cattura l'email all'inizio, consiglia una miscela starter e indirizza la pagina dei risultati verso un'offerta subscribe-and-save collegata a ReCharge.",
      },
      {
        question: "Abbina per metodo di estrazione?",
        answer:
          "Sì. Ramifica per metodo di estrazione così macinatura e miscela si adattano specificamente a chi beve espresso, pour-over, French press o filtro.",
      },
      {
        question: "Farà crescere la mia lista email?",
        answer:
          "Sì. Il profilo di gusto è un forte motivo per cui i clienti condividono la loro email, e le risposte si sincronizzano con Klaviyo già segmentate per preferenza di tostatura ed estrazione.",
      },
      {
        question: "Funziona per il tè o altre bevande?",
        answer:
          "Sì. Lo stesso approccio del profilo di gusto funziona per tè, vino, distillati e qualsiasi catalogo guidato dal gusto.",
      },
    ],
    related: [
      { label: "Quiz bundle builder", href: "/solutions/bundle-builder/" },
      { label: "Quiz gift finder", href: "/solutions/gift-finder/" },
      { label: "Template di quiz", href: "/templates/" },
      { label: "Quiz di vendita guidata", href: "/guided-selling-quiz/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  fitness: {
    slug: "fitness",
    type: "vertical",
    name: "Fitness e nutrizione",
    chip: "Settore",
    title: "Quiz fitness per attrezzatura, abbigliamento e programmi",
    description:
      "Un quiz fitness basato sugli obiettivi che consiglia l'attrezzatura, l'abbigliamento o il programma giusto dal tuo catalogo. Piano gratuito, builder AI, pronto per Klaviyo.",
    h1: "Quiz fitness costruiti attorno all'obiettivo del cliente",
    heroSubtitle:
      "Forza, resistenza, dimagrimento, recupero: un quiz fitness trasforma un obiettivo in attrezzatura, abbigliamento, integratori o programma giusti.",
    intro: [
      "Chi compra fitness parte da un obiettivo e da uno stile di allenamento, non da un prodotto. Un quiz basato sugli obiettivi chiede a cosa stanno puntando, il loro livello di esperienza e come si allenano, poi consiglia l'attrezzatura, l'abbigliamento o il programma che fa al caso.",
      "RevenueHunt costruisce il funnel dall'inizio alla fine: consiglia i prodotti giusti dal tuo catalogo, cattura obiettivo e livello del cliente come zero-party data e fa follow-up tramite Klaviyo con contenuti e offerte allineati a ciò per cui si stanno allenando.",
    ],
    quizTypes: [
      {
        title: "Finder basato sull'obiettivo",
        body: "Forza, resistenza, mobilità o dimagrimento: ogni obiettivo fa salire l'attrezzatura, l'abbigliamento o gli integratori corrispondenti.",
      },
      {
        title: "Match per livello di esperienza",
        body: "Ramifica per principiante, intermedio o avanzato così i consigli si adattano al punto in cui il cliente si trova davvero.",
      },
      {
        title: "Finder di programma o piano",
        body: "Consiglia il programma di allenamento o il livello di coaching giusto in base a obiettivo, calendario e attrezzatura disponibile.",
      },
      {
        title: "Builder di kit o bundle",
        body: "Componi un kit completo (abbigliamento più attrezzatura più integratore) usando gli slot di raccomandazione per un valore medio dell'ordine più alto.",
      },
    ],
    howItHelps: [
      "Obiettivo e livello di esperienza sono le due domande che cambiano tutto. Porle in anticipo fa sì che un principiante che lavora sulla mobilità non veda mai un prodotto avanzato per la forza come primo risultato.",
      "Un kit completo batte un singolo articolo. Gli slot di raccomandazione ti permettono di restituire insieme abbigliamento, attrezzatura e un integratore, il che alza il valore medio dell'ordine senza risultare insistente.",
      "L'obiettivo che catturi alimenta tutto dopo la vendita. Sincronizzare i tag di obiettivo e livello con Klaviyo ti permette di inviare contenuti di allenamento e promemoria di riacquisto che corrispondono al programma reale di ogni cliente.",
    ],
    faqs: [
      {
        question: "Un quiz fitness può consigliare un programma, non solo prodotti?",
        answer:
          "Sì. Collega le risposte a un programma di allenamento o a un livello di coaching allo stesso modo in cui colleghi i prodotti, e la pagina dei risultati può consigliare il piano giusto in base a obiettivo e calendario.",
      },
      {
        question: "Può costruire un kit completo in un solo risultato?",
        answer:
          "Sì. Gli slot di raccomandazione riservano un posto a ogni ruolo (abbigliamento, attrezzatura, integratore) così i clienti ottengono un kit completo con aggiungi al carrello per il set.",
      },
      {
        question: "Come personalizza per principianti vs avanzati?",
        answer:
          "Ramifica con la logica condizionale sul livello di esperienza, così principianti e atleti avanzati vedono domande diverse e consigli diversi.",
      },
      {
        question: "Posso fare follow-up via email in base agli obiettivi?",
        answer:
          "Sì. Obiettivi e livello si sincronizzano con Klaviyo, Mailchimp, Omnisend e altri come tag cliente per follow-up email allineati all'obiettivo.",
      },
    ],
    related: [
      { label: "Quiz integratori", href: "/solutions/supplements/" },
      { label: "Quiz bundle builder", href: "/solutions/bundle-builder/" },
      { label: "Template di quiz", href: "/templates/" },
      { label: "Quiz di vendita guidata", href: "/guided-selling-quiz/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "pet-products": {
    slug: "pet-products",
    type: "vertical",
    name: "Prodotti per animali",
    chip: "Settore",
    title: "Quiz prodotti per animali per il tuo store",
    description:
      "Un quiz per animali che consiglia cibo, integratori o accessori per specie, razza, età e allergie. Le esclusioni gestiscono le diete. Inizi gratis.",
    h1: "Quiz per animali che abbinano i prodotti a ogni animale",
    heroSubtitle:
      "Specie, razza, età, attività, allergie: un quiz per animali trasforma questi dettagli nel cibo, integratore o accessorio giusto, e rispetta ogni vincolo dietetico.",
    intro: [
      "I proprietari di animali comprano per un animale, non per una categoria, e il prodotto giusto dipende da specie, taglia della razza, età e allergie. Un quiz per animali raccoglie questi dettagli una volta sola e consiglia prodotti che si adattano a ogni dimensione allo stesso tempo.",
      "RevenueHunt gestisce la parte difficile: le esclusioni applicano in modo pulito le regole su allergie e diete, la pagina dei risultati consiglia la formula o il kit giusto, e un'email con il risultato riepiloga il consiglio per i proprietari che non comprano subito.",
    ],
    quizTypes: [
      {
        title: "Finder di cibo per animali",
        body: "Specie, taglia della razza, età e livello di attività portano alla formula giusta, con le allergie gestite dalle esclusioni.",
      },
      {
        title: "Match per integratori o salute",
        body: "Consiglia supporto per articolazioni, pelle o digestione in base a età ed esigenze dichiarate.",
      },
      {
        title: "Finder di accessori e attrezzatura",
        body: "Abbina pettorine, cucce o giochi alla taglia della razza e al comportamento, così i proprietari scelgono la misura giusta al primo colpo.",
      },
      {
        title: "Kit starter per nuovi proprietari",
        body: "Componi un kit starter completo per i nuovi proprietari di animali usando gli slot di raccomandazione.",
      },
    ],
    howItHelps: [
      "Le allergie sono un vincolo rigido, e le esclusioni le applicano alla perfezione. Segnalare un'allergia al pollo rimuove dai risultati ogni formula a base di pollo, anche quelle che hanno ottenuto bene su razza ed età.",
      "Un tag cliente come small-dog-owner è oro per la retention. Sincronizzarlo con Klaviyo ti permette di inviare contenuti rilevanti per la razza, promemoria di riacquisto e offerte che si adattano davvero all'animale.",
      "Le email con il risultato recuperano i clienti che rimbalzano. I proprietari spesso si informano prima di comprare, quindi un'email automatica che riepiloga il consiglio li riporta a completare l'acquisto.",
    ],
    demo: {
      label: "Prova il finder di cibo per cani",
      href: "https://productrecommendationquiz.com/pages/dog-food?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_pet_products",
      blurb: "Un finder di cibo per cani multi-attributo dal vivo sul nostro demo store.",
    },
    faqs: [
      {
        question: "Come gestisce le allergie un quiz per animali?",
        answer:
          "Con le esclusioni. Collegare una risposta sull'allergia a una lista di esclusione rimuove dai risultati ogni prodotto in conflitto, a prescindere da quanto abbia corrisposto sulle altre domande.",
      },
      {
        question: "Può abbinare per razza ed età?",
        answer:
          "Sì. Ogni risposta (specie, taglia della razza, età, livello di attività) fa salire i prodotti corrispondenti, così i consigli si adattano all'animale specifico.",
      },
      {
        question: "Posso inviare il consiglio via email se non comprano?",
        answer:
          "Sì. Le email con il risultato riepilogano automaticamente il consiglio, utile per i proprietari che si informano prima di acquistare.",
      },
      {
        question: "Segmenta i clienti per il marketing?",
        answer:
          "Sì. Tag cliente come small-dog-owner si sincronizzano con Klaviyo e altri strumenti per campagne mirate e rilevanti per l'animale.",
      },
    ],
    related: [
      { label: "Quiz bundle builder", href: "/solutions/bundle-builder/" },
      { label: "Quiz product finder", href: "/product-finder-quiz/" },
      { label: "Template di quiz", href: "/templates/" },
      { label: "Quiz per WooCommerce", href: "/product-recommendation-quiz-woocommerce/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  cbd: {
    slug: "cbd",
    type: "vertical",
    name: "CBD e benessere",
    chip: "Settore",
    title: "Quiz product finder CBD per il tuo store",
    description:
      "Un quiz CBD che guida i clienti al formato e al dosaggio giusti per obiettivo ed esperienza. Educa mentre vende. Piano gratuito, multi-piattaforma.",
    h1: "Quiz CBD che guidano i clienti al formato giusto",
    heroSubtitle:
      "Formato, dosaggio e obiettivo confondono la maggior parte di chi compra CBD. Un quiz insegna mentre vende e consiglia il prodotto giusto con sicurezza.",
    intro: [
      "CBD e benessere sono categorie in cui la maggior parte dei clienti davvero non sa cosa comprare: olio o gummy, quale dosaggio, per quale obiettivo. Un quiz trasforma quell'incertezza in un consiglio chiaro chiedendo di obiettivo, livello di esperienza e preferenza di formato.",
      "RevenueHunt è pensato per i clienti che si avvicinano a una categoria per la prima volta come questi. Il quiz educa mentre chiede, consiglia il formato e il dosaggio giusti dal tuo catalogo e cattura gli obiettivi come zero-party data che possiedi e a cui puoi fare marketing.",
    ],
    quizTypes: [
      {
        title: "Finder basato sull'obiettivo",
        body: "Sonno, calma, recupero o concentrazione: ogni obiettivo fa salire i prodotti e i dosaggi corrispondenti.",
      },
      {
        title: "Match per formato e dosaggio",
        body: "Ramifica per esperienza e preferenza di formato (olio, gummy, topico, capsula) così i principianti ottengono un punto di partenza accessibile.",
      },
      {
        title: "Builder di routine o regime",
        body: "Consiglia un abbinamento giorno e notte usando gli slot di raccomandazione per una routine completa.",
      },
      {
        title: "Quiz education-first",
        body: "Usa slide informative tra le domande per insegnare le basi, il che costruisce sicurezza e fiducia prima del consiglio.",
      },
    ],
    howItHelps: [
      "Chi si avvicina a una categoria per la prima volta ha bisogno di essere educato, non solo filtrato. Le slide informative ti permettono di spiegare dosaggio e formato in parole semplici mentre il cliente procede, così il consiglio arriva con sicurezza.",
      "Abbinare il livello di esperienza al dosaggio protegge l'esperienza. Chi è alle prime armi ottiene un punto di partenza accessibile invece del prodotto più forte, il che significa meno resi delusi.",
      "Gli obiettivi catturati nel quiz diventano i tuoi segmenti più utili. Sincronizzare goal:sleep o goal:recovery con Klaviyo alimenta email che corrispondono a ciò che ogni cliente sta davvero cercando di risolvere.",
    ],
    demo: {
      label: "Prova il product finder CBD",
      href: "https://productrecommendationquiz.com/pages/cbd-product-finder?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_cbd",
      blurb: "Un product finder CBD dal vivo sul nostro demo store.",
    },
    faqs: [
      {
        question: "Un quiz CBD può consigliare il dosaggio giusto?",
        answer:
          "Sì. Ramifica per livello di esperienza e obiettivo, poi collega ogni percorso al dosaggio appropriato, così principianti ed esperti ottengono consigli diversi.",
      },
      {
        question: "Il quiz può educare i clienti mentre procedono?",
        answer:
          "Sì. Le slide informative mostrano testo tra le domande senza richiedere input, così puoi insegnare le basi di formato e dosaggio inline.",
      },
      {
        question: "Funziona per prodotti di benessere più ampi?",
        answer:
          "Sì. Lo stesso approccio per obiettivo e formato funziona per adattogeni, funghi e altre categorie di benessere in cui i clienti hanno bisogno di guida.",
      },
      {
        question: "Quali piattaforme supporta?",
        answer:
          "Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace e come quiz ospitato standalone.",
      },
    ],
    related: [
      { label: "Quiz integratori", href: "/solutions/supplements/" },
      { label: "Quiz routine builder", href: "/solutions/routine-builder/" },
      { label: "Quiz product finder", href: "/product-finder-quiz/" },
      { label: "Template di quiz", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  jewelry: {
    slug: "jewelry",
    type: "vertical",
    name: "Gioielli e accessori",
    chip: "Settore",
    title: "Quiz gioielli: aiuta i clienti a trovare il pezzo",
    description:
      "Un quiz gioielli che abbina stile, metallo e occasione al pezzo giusto, e aiuta chi compra regali a scegliere con sicurezza. Inizi gratis.",
    h1: "Quiz gioielli che abbinano lo stile al pezzo giusto",
    heroSubtitle:
      "Metallo, stile, occasione, budget: un quiz gioielli guida clienti e chi compra regali verso un pezzo che ameranno, invece di una griglia infinita.",
    intro: [
      "I gioielli sono emotivi e spesso un regalo, il che li rende difficili da acquistare da una griglia. Un quiz chiede di stile, preferenza di metallo, occasione e budget, poi consiglia i pezzi che corrispondono, trasformando la navigazione in una scelta sicura.",
      "RevenueHunt consiglia pezzi e varianti reali dal tuo catalogo, gestisce chi compra regali e non conosce il gusto del destinatario, e cattura le preferenze per il follow-up. La pagina dei risultati converte con aggiungi al carrello diretto e un messaggio regalo opzionale.",
    ],
    quizTypes: [
      {
        title: "Style finder",
        body: "Domande su estetica, metallo e occasione fanno emergere i pezzi che corrispondono al gusto di un cliente.",
      },
      {
        title: "Gift finder",
        body: "Chiedi del destinatario e dell'occasione, poi consiglia una selezione curata o un set regalo per chi non conosce il catalogo.",
      },
      {
        title: "Match consapevole del budget",
        body: "Considera il budget nel consiglio così ogni cliente vede pezzi nella sua fascia.",
      },
      {
        title: "Finder per fidanzamento o ricorrenza",
        body: "Guida gli acquisti ad alta considerazione come pezzi di fidanzamento o anniversario con un flusso mirato e rassicurante.",
      },
    ],
    howItHelps: [
      "Chi compra regali è una quota enorme del traffico gioielli e la meno sicura di ciò che vuole. Un quiz che chiede del destinatario invece che del catalogo trasforma quell'incertezza in un acquisto regalo sicuro.",
      "Il budget è una domanda che la maggior parte delle griglie ignora. Considerarlo nel consiglio significa che i clienti vedono pezzi che possono davvero comprare, il che riduce il rimbalzo e costruisce fiducia.",
      "Preferenze e occasioni si sincronizzano con il tuo strumento email, così puoi fare follow-up attorno ad anniversari, riassortimenti e pezzi abbinati con campagne che sembrano personali.",
    ],
    faqs: [
      {
        question: "Un quiz gioielli può aiutare chi compra regali?",
        answer:
          "Sì. Chiedi del destinatario e dell'occasione invece che del catalogo, poi consiglia una selezione curata o un set regalo, ideale per chi non sa esattamente cosa vuole.",
      },
      {
        question: "Può considerare il budget?",
        answer:
          "Sì. Aggiungi una domanda sul budget e pesa o filtra i consigli così i clienti vedono solo pezzi nella loro fascia.",
      },
      {
        question: "Supporta varianti come metallo e taglia?",
        answer:
          "Sì. Le risposte possono collegarsi a varianti specifiche, così la pagina dei risultati mostra il metallo e la taglia giusti con aggiungi al carrello.",
      },
      {
        question: "Posso catturare lead per il follow-up?",
        answer:
          "Sì. Il quiz cattura email e preferenze come zero-party data e si sincronizza con Klaviyo e altri strumenti per follow-up basati sull'occasione.",
      },
    ],
    related: [
      { label: "Quiz gift finder", href: "/solutions/gift-finder/" },
      { label: "Quiz moda e abbigliamento", href: "/solutions/fashion/" },
      { label: "Template di quiz", href: "/templates/" },
      { label: "Quiz product finder", href: "/product-finder-quiz/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "home-goods": {
    slug: "home-goods",
    type: "vertical",
    name: "Casa e arredo",
    chip: "Settore",
    title: "Quiz prodotti casa e arredo per il tuo store",
    description:
      "Un quiz casa e arredo che abbina mobili e decorazioni allo spazio e allo stile di un cliente. Riduce i resi sugli articoli ingombranti. Inizi gratis.",
    h1: "Quiz casa che abbinano i prodotti allo spazio",
    heroSubtitle:
      "Stile, stanza, misura e budget: un quiz casa e arredo guida i clienti verso pezzi che si adattano al loro spazio, ciò che conta di più quando gli articoli sono ingombranti.",
    intro: [
      "Casa e arredo sono ad alta considerazione e costosi da rendere. I clienti devono sapere che un pezzo si adatta al loro spazio e stile prima di impegnarsi. Un quiz chiede di stanza, stile, dimensioni e budget, poi consiglia i pezzi che funzionano.",
      "RevenueHunt consiglia prodotti reali dal tuo catalogo, compone set coordinati con gli slot di raccomandazione e cattura le preferenze di stile per il follow-up, così chi compra mobili una volta diventa un cliente di arredo abituale.",
    ],
    quizTypes: [
      {
        title: "Style finder",
        body: "Domande su estetica e stanza fanno emergere mobili e decorazioni che corrispondono al gusto di un cliente.",
      },
      {
        title: "Match per stanza o spazio",
        body: "Considera il tipo di stanza e le dimensioni nei consigli così i pezzi si adattano davvero allo spazio.",
      },
      {
        title: "Builder di set coordinato",
        body: "Componi un set coordinato (divano più tappeto più illuminazione) con gli slot di raccomandazione per un look completo.",
      },
      {
        title: "Finder consapevole del budget",
        body: "Includi il budget così i clienti vedono pezzi nella loro fascia e rimbalzano meno.",
      },
    ],
    howItHelps: [
      "Vestibilità e proporzioni guidano i resi sugli articoli ingombranti. Chiedere delle dimensioni della stanza e consigliare pezzi che funzionano riduce gli errori costosi che portano ai resi sui mobili.",
      "Un set coordinato alza il valore dell'ordine in modo naturale. Gli slot di raccomandazione ti permettono di suggerire un look completo invece di un singolo pezzo, il che si adatta perfettamente allo shopping di arredo.",
      "Le preferenze di stile sono durature. Catturare l'estetica di un cliente e sincronizzarla con il tuo strumento email significa che le campagne stagionali e di nuova collezione possono essere allineate al gusto invece di essere inviate indistintamente a tutti.",
    ],
    faqs: [
      {
        question: "Un quiz casa può consigliare un set coordinato?",
        answer:
          "Sì. Gli slot di raccomandazione riservano un posto a ogni ruolo (seduta, tappeto, illuminazione), così la pagina dei risultati restituisce un set completo e coordinato con aggiungi al carrello.",
      },
      {
        question: "Può considerare la misura della stanza?",
        answer:
          "Sì. Aggiungi domande su stanza e dimensioni e collega le risposte ai pezzi che si adattano, fondamentale per ridurre i resi sugli articoli grandi.",
      },
      {
        question: "Aiuta con il budget?",
        answer:
          "Sì. Includi una domanda sul budget così i consigli restano nella fascia del cliente.",
      },
      {
        question: "Su quali piattaforme funziona?",
        answer:
          "Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace e come quiz ospitato standalone.",
      },
    ],
    related: [
      { label: "Quiz bundle builder", href: "/solutions/bundle-builder/" },
      { label: "Quiz gift finder", href: "/solutions/gift-finder/" },
      { label: "Template di quiz", href: "/templates/" },
      { label: "Quiz di vendita guidata", href: "/guided-selling-quiz/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  // ----------------------------------------------------------------- use-cases
  "gift-finder": {
    slug: "gift-finder",
    type: "use-case",
    name: "Gift finder",
    chip: "Tipo di quiz",
    title: "Quiz gift finder per il tuo store online",
    description:
      "Un quiz gift finder che chiede del destinatario e restituisce un regalo curato, alzando l'AOV per chi non conosce il catalogo. Inizi gratis.",
    h1: "Quiz gift finder che trasformano l'incertezza in una vendita",
    heroSubtitle:
      "Chi compra regali non ha opinioni sul tuo catalogo e molta ansia di sbagliare. Un gift finder chiede del destinatario e consiglia il regalo perfetto.",
    intro: [
      "Chi compra regali è il cliente più facile da perdere e il più facile da aiutare. Non conosce i tuoi prodotti ed è preoccupato di scegliere male. Un quiz gift finder pone da tre a cinque domande sul destinatario (relazione, età, interessi, budget) e restituisce un regalo curato che può comprare con sicurezza.",
      "RevenueHunt rende il gift finder uno dei tipi di quiz che convertono di più. Raggruppa più prodotti in un unico risultato regalo per un valore dell'ordine più alto, aggiungi un messaggio regalo e uno sconto nella pagina dei risultati, e cattura l'email di chi compra per la prossima occasione.",
    ],
    quizTypes: [
      {
        title: "Finder per destinatario",
        body: "Chiedi del destinatario (relazione, età, interessi) invece che del catalogo, così chi non sa nulla dei tuoi prodotti ottiene comunque un'ottima corrispondenza.",
      },
      {
        title: "Finder per occasione",
        body: "Ramifica per occasione (compleanno, festività, anniversario) così il consiglio si adatta al momento.",
      },
      {
        title: "Builder di bundle regalo",
        body: "Combina più prodotti in un unico set regalo curato usando gli slot di raccomandazione, il che alza il valore medio dell'ordine.",
      },
    ],
    howItHelps: [
      "Il trucco è chiedere del destinatario, non del catalogo. Chi sa rispondere a tre domande sulla propria sorella ottiene un consiglio sicuro senza dover mai capire la tua gamma di prodotti.",
      "I bundle regalo alzano il valore dell'ordine senza pressione. Restituire un set curato come unico risultato sembra utile, non insistente, e i clienti comprano volentieri tutto l'insieme.",
      "Ogni acquirente di regali è un cliente futuro. Catturare la sua email e l'occasione ti permette di riportarlo al prossimo compleanno o festività con un vantaggio sul consiglio.",
    ],
    faqs: [
      {
        question: "Come funziona un quiz gift finder?",
        answer:
          "Pone da tre a cinque domande sul destinatario e sull'occasione, poi consiglia un regalo o un set regalo curato, così chi non conosce il tuo catalogo può comunque scegliere con sicurezza.",
      },
      {
        question: "Può raggruppare i prodotti in un solo regalo?",
        answer:
          "Sì. Gli slot di raccomandazione combinano più prodotti in un unico set regalo curato, il che alza il valore medio dell'ordine.",
      },
      {
        question: "Posso aggiungere uno sconto o un messaggio regalo?",
        answer:
          "Sì. La pagina dei risultati supporta blocchi con codice sconto e contenuto che puoi mostrare in base alle risposte del cliente.",
      },
      {
        question: "Cattura lead per le occasioni future?",
        answer:
          "Sì. Il quiz cattura l'email e l'occasione, che si sincronizzano con Klaviyo e altri strumenti così puoi ricontattare prima del prossimo momento regalo.",
      },
    ],
    related: [
      { label: "Quiz gioielli", href: "/solutions/jewelry/" },
      { label: "Quiz beauty e cosmetici", href: "/solutions/beauty/" },
      { label: "Quiz product finder", href: "/product-finder-quiz/" },
      { label: "Template di quiz", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "size-finder": {
    slug: "size-finder",
    type: "use-case",
    name: "Size & fit finder",
    chip: "Tipo di quiz",
    title: "Quiz size & fit finder per l'ecommerce",
    description:
      "Un quiz size e fit finder che consiglia la taglia giusta o il prodotto compatibile e riduce i resi. Risolve la vestibilità multi-attributo. Inizi gratis.",
    h1: "Quiz size e fit finder che riducono i resi",
    heroSubtitle:
      "La taglia sbagliata è il reso numero uno. Un fit finder pone le domande giuste e consiglia la taglia o il prodotto compatibile che si adatta.",
    intro: [
      "Vestibilità e compatibilità sono dove l'ecommerce perde soldi: resi per taglia sbagliata su abbigliamento e calzature, e resi per vestibilità sbagliata su qualsiasi cosa debba abbinarsi a qualcosa che il cliente già possiede. Un quiz fit finder risolve questi vincoli prima dell'ordine, non dopo.",
      "RevenueHunt gestisce in modo pulito la vestibilità multi-attributo. Collega le risposte a varianti specifiche e usa le esclusioni per i vincoli rigidi, così le misure e i requisiti di un cliente si risolvono in una taglia corretta o in un prodotto compatibile sulla pagina dei risultati.",
    ],
    quizTypes: [
      {
        title: "Size finder",
        body: "Domande su misure e preferenze di vestibilità restringono alla taglia giusta, la causa più comune dei resi.",
      },
      {
        title: "Compatibility finder",
        body: "Risolvi vincoli multi-attributo (modello del dispositivo, tipo di supporto, accessorio) fino all'unico prodotto che si adatta.",
      },
      {
        title: "Match per preferenza di vestibilità",
        body: "Ramifica per preferenza di vestibilità (slim, regular, relaxed) così il consiglio si adatta a come al cliente piace indossarlo.",
      },
    ],
    howItHelps: [
      "I resi per taglia sbagliata sono il costo singolo più grande che un fit finder affronta. Chiedere misure e preferenze di vestibilità in anticipo e collegarle a varianti specifiche indirizza i clienti verso la taglia che terranno.",
      "La compatibilità è solo vincoli, e le esclusioni li gestiscono alla perfezione. Un cliente che dichiara il proprio dispositivo e i requisiti ottiene esattamente il prodotto compatibile, con tutto l'incompatibile rimosso.",
      "La sicurezza converte. Quando il quiz dice a un cliente questa è la tua taglia con una ragione chiara, lui aggiunge al carrello invece di rimbalzare su una tabella taglie e non tornare più.",
    ],
    demo: {
      label: "Prova il compatibility finder",
      href: "https://productrecommendationquiz.com/pages/bicycle-quiz?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_size_finder",
      blurb: "Un finder in stile compatibilità dal vivo sul nostro demo store che risolve una corrispondenza tecnica.",
    },
    faqs: [
      {
        question: "Un fit finder può ridurre i resi per taglia sbagliata?",
        answer:
          "Sì. Chiedere misure e preferenze di vestibilità e collegare le risposte a varianti specifiche consiglia la taglia che un cliente ha più probabilità di tenere, il che riduce direttamente i resi.",
      },
      {
        question: "Come gestisce la compatibilità?",
        answer:
          "Con esclusioni e collegamento alle varianti. Un cliente dichiara i suoi vincoli (dispositivo, supporto, accessorio) e il quiz restituisce solo il prodotto compatibile, rimuovendo tutto ciò che non si adatta.",
      },
      {
        question: "Funziona per calzature e abbigliamento?",
        answer:
          "Sì. I size e fit finder sono tra i casi d'uso più forti per abbigliamento, calzature e qualsiasi cosa in cui la vestibilità guidi i resi.",
      },
      {
        question: "I risultati possono spiegare il consiglio?",
        answer:
          "Sì. I blocchi di contenuto della pagina dei risultati possono mostrare testo specifico per risposta, così puoi spiegare perché una certa taglia o prodotto è la vestibilità giusta.",
      },
    ],
    related: [
      { label: "Quiz moda e abbigliamento", href: "/solutions/fashion/" },
      { label: "Quiz product finder", href: "/product-finder-quiz/" },
      { label: "Template di quiz", href: "/templates/" },
      { label: "Quiz per Shopify", href: "/product-recommendation-quiz-shopify/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "shade-finder": {
    slug: "shade-finder",
    type: "use-case",
    name: "Shade matching",
    chip: "Tipo di quiz",
    title: "Quiz shade finder: abbina fondotinta e colore",
    description:
      "Un quiz shade finder che abbina fondotinta, correttore o colore per sottotono e profondità, con risposte a scelta per immagini. Riduce i resi. Inizi gratis.",
    h1: "Quiz shade finder che abbinano il colore con sicurezza",
    heroSubtitle:
      "Comprare make-up online significa indovinare la propria nuance. Uno shade finder chiede di sottotono e profondità e restituisce la corrispondenza esatta, il che riduce i resi.",
    intro: [
      "Lo shade matching è la domanda con la posta in gioco più alta nell'ecommerce beauty. Sbaglia e il prodotto torna indietro. Un quiz shade finder chiede di sottotono, profondità, coprenza e finish, poi consiglia la nuance esatta dal tuo catalogo con risposte a scelta per immagini che sono veloci su mobile.",
      "RevenueHunt collega ogni risposta a varianti di nuance specifiche ed esclude le altre, così la pagina dei risultati mostra una corrispondenza sicura invece di un muro di swatch. Il profilo di nuance del cliente si sincronizza con il tuo strumento email per riassortimenti e prodotti abbinati.",
    ],
    quizTypes: [
      {
        title: "Match della nuance del fondotinta",
        body: "Domande su sottotono e profondità portano alla nuance esatta di fondotinta o correttore, con risposte a scelta per immagini per la velocità.",
      },
      {
        title: "Match per labbra o colore",
        body: "Abbina il colore di labbra, blush o occhi alla colorazione e alla preferenza di un cliente.",
      },
      {
        title: "Match del colore dei capelli",
        body: "Guida la colorazione dei capelli a casa per nuance attuale, nuance target e sottotono fino alla formula giusta.",
      },
    ],
    howItHelps: [
      "Le risposte a scelta per immagini reggono le domande sulla nuance. Lasciare che i clienti tocchino l'immagine di un sottotono o di un finish batte chiedere loro di descriverlo, e mantiene alto il completamento sugli schermi mobile dove vende il beauty.",
      "Le esclusioni trasformano un muro di swatch in un'unica risposta. Collegare sottotono e profondità a varianti specifiche ed escludere le altre fa sì che la pagina dei risultati mostri la corrispondenza, non l'intera gamma.",
      "La nuance è un profilo che vale la pena conservare. Sincronizzare la nuance abbinata di un cliente con Klaviyo ti permette di fare marketing su riassortimenti e prodotti coordinati esattamente alle persone giuste.",
    ],
    demo: {
      label: "Prova il quiz di shade match",
      href: "https://productrecommendationquiz.com/pages/foundation-match?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_shade_finder",
      blurb: "Un quiz di shade-match del fondotinta basato su immagini dal vivo sul nostro demo store.",
    },
    faqs: [
      {
        question: "Come abbina il fondotinta uno shade finder?",
        answer:
          "Chiedi di sottotono, profondità, coprenza e finish, collega ogni risposta alle varianti di nuance corrispondenti ed escludi le altre. La pagina dei risultati mostra la corrispondenza esatta con aggiungi al carrello.",
      },
      {
        question: "Usa risposte a scelta per immagini?",
        answer:
          "Sì. Le opzioni possono essere immagini cliccabili, ideale per le domande su sottotono e finish, e aumenta il completamento su mobile.",
      },
      {
        question: "Può ridurre i resi legati alla nuance?",
        answer:
          "Sì. Consigliare una corrispondenza sicura invece di un muro di swatch indirizza i clienti verso la nuance che hanno più probabilità di tenere.",
      },
      {
        question: "Funziona oltre il fondotinta?",
        answer:
          "Sì. Lo stesso approccio abbina colore delle labbra, blush, colore degli occhi e colore dei capelli a casa.",
      },
    ],
    related: [
      { label: "Quiz beauty e cosmetici", href: "/solutions/beauty/" },
      { label: "Quiz skincare", href: "/solutions/skincare/" },
      { label: "Per i brand beauty", href: "/for-beauty-brands/" },
      { label: "Template di quiz", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "routine-builder": {
    slug: "routine-builder",
    type: "use-case",
    name: "Routine builder",
    chip: "Tipo di quiz",
    title: "Quiz routine builder per skincare e oltre",
    description:
      "Un quiz routine builder che restituisce una routine multi-step completa, non un singolo prodotto, usando gli slot di raccomandazione. Alza l'AOV. Inizi gratis.",
    h1: "Quiz routine builder che vendono l'intero set",
    heroSubtitle:
      "Un prodotto è una vendita. Una routine è un carrello e un'abitudine. Un routine builder restituisce un set multi-step completo abbinato a ogni cliente.",
    intro: [
      "Alcuni prodotti si comprano come sistema, non come singolo articolo: una routine skincare, uno stack di integratori, un regime per i capelli. Un quiz routine builder restituisce l'intero set, con un posto riservato a ogni step, così i clienti comprano la routine completa invece di un solo prodotto.",
      "RevenueHunt lo fa con gli slot di raccomandazione. Riserva uno slot a ogni ruolo (detergente, trattamento, idratante, SPF, o qualunque cosa serva alla tua categoria) e il quiz riempie ciascuno con la migliore corrispondenza, poi mostra l'intera routine raggruppata per step con aggiungi al carrello per il set.",
    ],
    quizTypes: [
      {
        title: "Routine basata sugli step",
        body: "Riserva uno slot a ogni step e riempilo con il prodotto meglio abbinato, così ogni cliente ottiene una routine completa e coerente.",
      },
      {
        title: "Stack builder",
        body: "Componi uno stack multi-prodotto (ottimo per integratori e benessere) con un ruolo per ogni prodotto.",
      },
      {
        title: "Routine giorno e notte",
        body: "Restituisci routine AM e PM separate da un solo quiz usando la logica di visualizzazione sulla pagina dei risultati.",
      },
    ],
    howItHelps: [
      "Gli slot di raccomandazione sono la differenza tra una vendita e un carrello. Riservare un posto a ogni step fa sì che la pagina dei risultati restituisca una routine completa, il che alza il valore dell'ordine senza sembrare un upsell.",
      "Raggruppare per step rende la routine sensata. I clienti vedono esattamente cosa usare e quando, il che costruisce sicurezza nell'acquisto e l'abitudine che li riporta indietro.",
      "Una routine è un motore di retention. Il set che consigli ti dice cosa ogni cliente finirà e quando, così il tuo follow-up email può programmare con precisione le offerte di rifornimento.",
    ],
    faqs: [
      {
        question: "Come restituisce un set completo un routine builder?",
        answer:
          "Con gli slot di raccomandazione. Ogni slot è riservato a un ruolo (per esempio detergente, trattamento, idratante, SPF) e riempito con il prodotto meglio abbinato, così la pagina dei risultati restituisce una routine completa.",
      },
      {
        question: "Può mostrare una routine giorno e notte separata?",
        answer:
          "Sì. Usa la logica di visualizzazione sulla pagina dei risultati per mostrare routine AM e PM, o qualsiasi raggruppamento condizionale, in base alle risposte del cliente.",
      },
      {
        question: "Alza il valore medio dell'ordine?",
        answer:
          "Consigliare un set completo invece di un singolo prodotto dà ai clienti un motivo per comprare l'intera routine, il che alza il valore dell'ordine.",
      },
      {
        question: "Quali categorie si adattano a un routine builder?",
        answer:
          "Skincare, haircare, integratori e qualsiasi catalogo acquistato come sistema multi-step invece che come singolo articolo.",
      },
    ],
    related: [
      { label: "Quiz skincare", href: "/solutions/skincare/" },
      { label: "Quiz integratori", href: "/solutions/supplements/" },
      { label: "Quiz bundle builder", href: "/solutions/bundle-builder/" },
      { label: "Template di quiz", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "bundle-builder": {
    slug: "bundle-builder",
    type: "use-case",
    name: "Bundle builder",
    chip: "Tipo di quiz",
    title: "Quiz bundle builder: vendi set curati",
    description:
      "Un quiz bundle builder che compone un set curato dalle risposte di un cliente e alza il valore medio dell'ordine. Aggiungi al carrello per l'intero bundle. Gratis.",
    h1: "Quiz bundle builder che alzano il valore dell'ordine",
    heroSubtitle:
      "Un bundle curato converte meglio di un singolo prodotto e di un upsell generico. Un bundle builder compone il set dalle risposte di ogni cliente.",
    intro: [
      "I bundle funzionano, ma solo quando sono rilevanti. Un generico upsell tre per due ignora ciò che il cliente vuole davvero. Un quiz bundle builder compone un set curato dalle risposte di ogni cliente, così il bundle sembra personale e il valore dell'ordine arriva in modo naturale.",
      "RevenueHunt costruisce bundle con slot di raccomandazione e risultati condizionali. Riserva un ruolo a ogni prodotto del set, abbina ciascuno al cliente e presenta il bundle completo sulla pagina dei risultati con aggiungi al carrello per tutto in una volta.",
    ],
    quizTypes: [
      {
        title: "Builder di set curato",
        body: "Riserva un ruolo a ogni prodotto del bundle e riempi ciascuno con la migliore corrispondenza, così il set si adatta al cliente invece che al catalogo.",
      },
      {
        title: "Finder di kit starter",
        body: "Componi un kit starter completo per chi compra per la prima volta o si avvicina a una nuova categoria e vuole un unico acquisto sicuro.",
      },
      {
        title: "Bundle build-your-own",
        body: "Lascia che le risposte guidino un bundle flessibile, con la logica di visualizzazione che aggiunge o rimuove articoli in base a ciò che il cliente sceglie.",
      },
    ],
    howItHelps: [
      "Un bundle rilevante batte uno generico. Abbinare ogni articolo del set alle risposte del cliente fa sì che il bundle si legga come un consiglio, non come una tattica di sconto, e converta di conseguenza.",
      "Un solo aggiungi al carrello per l'intero set rimuove l'attrito. I clienti comprano il bundle in un'unica azione invece di cercare ogni articolo, il che protegge il valore dell'ordine più alto che hai appena costruito.",
      "I blocchi sconto fanno funzionare il bundle. Mostra uno sconto sul set nella pagina dei risultati legato alla combinazione specifica, così il risparmio sembra meritato e il cliente completa l'acquisto.",
    ],
    faqs: [
      {
        question: "Come funziona un quiz bundle builder?",
        answer:
          "Riserva un ruolo a ogni prodotto del bundle, abbina ciascuno alle risposte del cliente e presenta il set curato completo sulla pagina dei risultati con aggiungi al carrello per tutto in una volta.",
      },
      {
        question: "Posso aggiungere uno sconto sul bundle?",
        answer:
          "Sì. La pagina dei risultati supporta blocchi con codice sconto che puoi legare a specifiche combinazioni di risposte, così il risparmio del bundle viene mostrato nel contesto.",
      },
      {
        question: "Alza il valore medio dell'ordine?",
        answer:
          "Consigliare un set rilevante e curato invece di un singolo prodotto dà ai clienti un motivo per comprare di più, il che alza il valore dell'ordine.",
      },
      {
        question: "A quali categorie si adatta?",
        answer:
          "Integratori, beauty, food and beverage, casa e qualsiasi catalogo in cui un set curato vende meglio di un singolo articolo.",
      },
    ],
    related: [
      { label: "Quiz routine builder", href: "/solutions/routine-builder/" },
      { label: "Quiz gift finder", href: "/solutions/gift-finder/" },
      { label: "Quiz integratori", href: "/solutions/supplements/" },
      { label: "Template di quiz", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },
};
