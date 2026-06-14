import type { Competitor } from "../competitors";

// Shared RevenueHunt column values - kept identical to competitors.ts so every
// table tells the same RH story. These are tokens/values, not translated copy.
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

export const COMPETITORS_DE: Record<string, Competitor> = {
  "octane-ai": {
    slug: "octane-ai",
    name: "Octane AI",
    category: "Shopify Quiz-App",
    title: "RevenueHunt vs Octane AI: Octane AI Alternative",
    description:
      "RevenueHunt vs Octane AI: kostenloser Plan, kein Shopify-Wasserzeichen und unbegrenzte Quizze ab $39/mo. Die Octane AI Alternative für Produkt-Quizze.",
    h1: "RevenueHunt vs Octane AI",
    heroSubtitle:
      "Beide erstellen Produktempfehlungs-Quizze für Shopify. RevenueHunt bietet zusätzlich einen kostenlosen Plan, unbegrenzte Quizze und kein Wasserzeichen - zu einem Bruchteil des Preises.",
    intro: [
      "Octane AI ist eine Produkt-Quiz- und Personalisierungs-App, die für Shopify entwickelt wurde. Die Preise basieren auf Credits, beginnen bei $50/Monat und es gibt keinen kostenlosen Plan. Es ist ein leistungsfähiges Tool, besonders für größere Beauty-Marken. Aber der Einstiegsplan begrenzt dich auf zwei Quizze und behält das Octane AI Logo auf deinem Quiz, bis du den $200/Monat Plus-Plan erreichst.",
      "RevenueHunt ist das Produktempfehlungs-Quiz, das von über 20.000 Marken genutzt wird (4,9★, über 550 Bewertungen). Es startet kostenlos, fügt deinem Shopify-Quiz in keinem Plan ein Wasserzeichen hinzu, lässt dich ab dem ersten Tag unbegrenzte Quizze erstellen und funktioniert über Shopify hinaus auch auf WooCommerce, BigCommerce, Magento, Wix und mehr.",
    ],
    rows: [
      { feature: "Kostenloser Plan", rh: RH.freePlan, them: "no" },
      { feature: "Einstiegspreis (kostenpflichtig)", rh: RH.startingPaid, them: "$50/mo" },
      { feature: "Preismodell", rh: "Pauschal, nach Antworten", them: "Credit-basiert + Mehrverbrauch" },
      { feature: "Unbegrenzte Quizze im Einstiegsplan", rh: RH.unlimitedQuizzes, them: "no" },
      { feature: "Kein Anbieter-Wasserzeichen auf Shopify (jeder Plan)", rh: RH.noForcedBranding, them: "Logo bis $200/mo Plus" },
      { feature: "Empfiehlt echte Produkte aus deinem Katalog", rh: RH.catalogRecs, them: "yes" },
      { feature: "Native Shopify-App (Built for Shopify)", rh: RH.shopifyNative, them: "no" },
      { feature: "Funktioniert auf WooCommerce, BigCommerce, Magento, Wix & mehr", rh: RH.multiPlatform, them: "no" },
      { feature: "AI Quiz-Builder (Einrichtung in 60 Sekunden)", rh: RH.aiBuilder, them: "yes" },
      { feature: "Unbegrenzte bedingte / verzweigte Logik", rh: RH.branching, them: "yes" },
      { feature: "Drop-off-Analytics pro Frage", rh: RH.analytics, them: "yes" },
      { feature: "Klaviyo & E-Mail- / CRM-Integrationen", rh: RH.emailIntegrations, them: "yes" },
    ],
    whySwitch: [
      {
        title: "Kostenlos starten, dann pauschal zahlen",
        body: "Octane AI hat keinen kostenlosen Plan und startet bei $50/Monat auf Credit-Basis, mit $0,10 Mehrkosten pro Credit, sobald die Credits aufgebraucht sind. RevenueHunt hat einen wirklich kostenlosen Plan und pauschale Preise nach Antworten ab $39/Monat. Keine Credit-Rechnerei, keine überraschenden Mehrkosten.",
      },
      {
        title: "Behalte dein Branding ab dem ersten Tag",
        body: "Octane AI zeigt sein Logo auf deinem Quiz, bis du auf den $200/Monat Plus-Plan upgradest. RevenueHunt fügt Shopify-Quizzen in keinem Plan ein Wasserzeichen hinzu, auch nicht im kostenlosen Plan.",
      },
      {
        title: "Erstelle so viele Quizze, wie du brauchst",
        body: "Der Einstiegsplan von Octane AI begrenzt dich auf zwei Quizze. RevenueHunt lässt dich in jedem Plan unbegrenzte Quizze erstellen, sodass du ein Quiz pro Kollektion, Kampagne oder Landingpage einsetzen kannst.",
      },
      {
        title: "Verkaufe überall, nicht nur auf Shopify",
        body: "Octane AI ist nur für Shopify. RevenueHunt läuft nativ auf Shopify und außerdem auf WooCommerce, BigCommerce, Magento, Wix, Squarespace und als eigenständiges gehostetes Quiz.",
      },
    ],
    bestFor:
      "Octane AI ist eine vernünftige Wahl für Enterprise-Beauty-Marken, die bereits auf Shopify Plus sind, tiefe AI-Personalisierung wollen und das Budget für $200/Monat und mehr haben. Wenn du einen kostenlosen Plan, pauschale Preise, Quizze ohne Branding oder Multi-Plattform-Unterstützung willst, passt RevenueHunt besser.",
    migration:
      "Der Wechsel von Octane AI ist schnell. Baue dein Quiz im Drag-and-drop-Builder von RevenueHunt neu auf (oder generiere es in 60 Sekunden mit unserem AI Copilot), bette es ein und verbinde Klaviyo. Die meisten Shops sind noch am selben Tag live, und unser Support-Team hilft dir bei der Migration.",
    faqs: [
      {
        question: "Ist RevenueHunt günstiger als Octane AI?",
        answer:
          "Ja. RevenueHunt hat einen kostenlosen Plan und kostenpflichtige Pläne ab $39/Monat mit pauschalen, antwortbasierten Preisen. Octane AI hat keinen kostenlosen Plan, startet bei $50/Monat auf einem Credit-System und berechnet $0,10 pro Credit für Mehrverbrauch.",
      },
      {
        question: "Fügt RevenueHunt meinem Quiz sein Logo hinzu, wie Octane AI?",
        answer:
          "Nein. RevenueHunt fügt Shopify-Quizzen in keinem Plan ein Wasserzeichen hinzu. Octane AI behält sein Logo auf deinem Quiz, bis du auf den $200/Monat Plus-Plan upgradest.",
      },
      {
        question: "Funktioniert RevenueHunt auf anderen Plattformen als Shopify?",
        answer:
          "Ja. RevenueHunt funktioniert auf Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace und als eigenständiges gehostetes Quiz. Octane AI ist nur für Shopify.",
      },
      {
        question: "Kann ich mein Octane AI Quiz zu RevenueHunt migrieren?",
        answer:
          "Ja. Erstelle dein Quiz im Builder von RevenueHunt neu oder generiere es mit dem AI Quiz Copilot, dann verbinde dein E-Mail-Tool. Die meisten Händler sind noch am selben Tag live, und unser Team hilft bei der Migration.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  typeform: {
    slug: "typeform",
    name: "Typeform",
    category: "allgemeiner Formular- & Umfrage-Builder",
    title: "RevenueHunt vs Typeform für E-Commerce-Quizze",
    description:
      "RevenueHunt vs Typeform: ein Built-for-Shopify-Quiz, das echte Produkte empfiehlt und Verkäufe antreibt, nicht nur ein Formular. Kostenloser Plan, ab $39/mo.",
    h1: "RevenueHunt vs Typeform",
    heroSubtitle:
      "Typeform erstellt schöne Formulare und Umfragen. RevenueHunt erstellt Produktempfehlungs-Quizze, die sich mit deinem Shopify-Katalog verbinden und Antworten in Verkäufe verwandeln.",
    intro: [
      "Typeform ist ein universeller Online-Formular- und Umfrage-Builder. Es eignet sich hervorragend für Umfragen, Lead-Formulare und Recherche, mit einem dialogorientierten Design, das eine Frage nach der anderen stellt. Aber es hat keine native Shopify-Integration, keine Produktkatalog-Synchronisierung und keine Empfehlungs-Engine. Es sammelt Antworten; es empfiehlt keine Produkte.",
      "RevenueHunt ist ein Built-for-Shopify Produktempfehlungs-Quiz, das von über 20.000 Marken genutzt wird (4,9★, über 550 Bewertungen). Es ordnet die Antworten jedes Kunden den richtigen Produkten aus deinem Live-Katalog zu, zeigt eine personalisierte Ergebnisseite mit direktem In-den-Warenkorb und erfasst Leads in Klaviyo. Ein Verkaufstrichter, nicht nur ein Formular.",
    ],
    rows: [
      { feature: "Kostenloser Plan", rh: RH.freePlan, them: "yes (eingeschränkt)" },
      { feature: "Einstiegspreis (kostenpflichtig)", rh: RH.startingPaid, them: "$29/mo" },
      { feature: "Für E-Commerce-Produktempfehlungen gebaut", rh: RH.ecommerceRecs, them: "no" },
      { feature: "Empfiehlt echte Produkte aus deinem Shop-Katalog", rh: RH.catalogRecs, them: "no" },
      { feature: "Produktkatalog-Synchronisierung", rh: "yes", them: "no" },
      { feature: "Native Shopify-App (Built for Shopify)", rh: RH.shopifyNative, them: "no" },
      { feature: "Ergebnisseite mit direktem In-den-Warenkorb", rh: "yes", them: "no" },
      { feature: "AI Quiz-Builder (Einrichtung in 60 Sekunden)", rh: RH.aiBuilder, them: "yes (AI-Formulare)" },
      { feature: "Bedingte / verzweigte Logik", rh: RH.branching, them: "yes (Logiksprünge)" },
      { feature: "Drop-off-Analytics pro Frage", rh: RH.analytics, them: "yes" },
      { feature: "Klaviyo & E-Mail- / CRM-Integrationen", rh: RH.emailIntegrations, them: "yes" },
      { feature: "Funktioniert auf WooCommerce, BigCommerce, Magento & mehr", rh: RH.multiPlatform, them: "no" },
    ],
    whySwitch: [
      {
        title: "Empfiehlt Produkte, sammelt nicht nur Antworten",
        body: "Typeform erfasst Antworten und hört da auf. Die Empfehlungs-Engine von RevenueHunt sortiert die genauen Produkte, Varianten und Kollektionen aus deinem Katalog basierend auf den Antworten jedes Kunden und zeigt sie auf einer personalisierten Ergebnisseite.",
      },
      {
        title: "Für Shopify und E-Commerce gebaut",
        body: "Typeform hat keine native Shopify-Integration und keine Katalog-Synchronisierung. RevenueHunt ist eine Built-for-Shopify-App mit Echtzeit-Katalog-Synchronisierung und automatischer Lokalisierung von Produkttiteln, -beschreibungen und -preisen über Shopify Markets.",
      },
      {
        title: "Ein Trichter, kein Formular",
        body: "RevenueHunt verwandelt ein Quiz in einen Verkaufspfad: personalisierte Ergebnisse, direktes In-den-Warenkorb, Rabattblöcke und E-Mail-Erfassung in Klaviyo, sodass das Quiz tatsächlich Umsatz antreibt, nicht nur Daten.",
      },
      {
        title: "Für Händler gemacht",
        body: "Spar dir das generische Formular-Bauen. Nutze fertige Quiz-Vorlagen für Skincare, Supplements, Fashion und mehr, oder lass den AI Copilot in etwa 60 Sekunden aus einer Beschreibung deines Shops ein komplettes Produkt-Quiz erstellen.",
      },
    ],
    bestFor:
      "Typeform ist hervorragend für Umfragen, Lead-Gen-Formulare, Feedback und Recherche, wo du keine Produkte empfehlen musst. Wenn dein Ziel ist, Shopify-Kunden zu helfen, das richtige Produkt zu finden und zu kaufen, ist RevenueHunt genau dafür gebaut.",
    migration:
      "Nutzt du bereits ein Typeform-Quiz? Baue es in Minuten in RevenueHunt neu auf, oder generiere es mit dem AI Copilot, verknüpfe deine Produkte und verbinde Klaviyo. Du behältst das dialogorientierte Gefühl und fügst eine echte Empfehlungs-Engine und In-den-Warenkorb hinzu.",
    faqs: [
      {
        question: "Kann Typeform Produkte empfehlen wie RevenueHunt?",
        answer:
          "Nein. Typeform ist ein allgemeiner Formular- und Umfrage-Builder ohne Produktkatalog-Synchronisierung oder Empfehlungs-Engine. RevenueHunt ordnet Quiz-Antworten echten Produkten aus deinem Shop zu und zeigt sie auf einer personalisierten Ergebnisseite mit In-den-Warenkorb.",
      },
      {
        question: "Integriert sich RevenueHunt mit Shopify und Typeform nicht?",
        answer:
          "RevenueHunt ist eine Built-for-Shopify-App mit Echtzeit-Katalog-Synchronisierung und Shopify-Markets-Lokalisierung. Typeform hat keine native Shopify-Produktempfehlungs-Integration. Es ist nicht für E-Commerce-Produktfindung gebaut.",
      },
      {
        question: "Ist RevenueHunt besser als Typeform für ein E-Commerce-Quiz?",
        answer:
          "Für Produktempfehlungs-Quizze ja. RevenueHunt ist genau dafür gebaut. Für allgemeine Umfragen und Lead-Formulare ist Typeform eine gute Wahl. Sie lösen unterschiedliche Probleme.",
      },
      {
        question: "Kann ich Leads erfassen und an Klaviyo senden?",
        answer:
          "Ja. RevenueHunt erfasst E-Mails im Quiz und synchronisiert Antworten und Kunden-Tags zu Klaviyo, Mailchimp, Omnisend, HubSpot und mehr, sodass du mit personalisierten Kampagnen nachfassen kannst.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  zoovu: {
    slug: "zoovu",
    name: "Zoovu",
    category: "Enterprise-Plattform für Produktfindung",
    title: "RevenueHunt vs Zoovu: eine Self-Serve-Alternative",
    description:
      "RevenueHunt vs Zoovu: ein fokussiertes, self-serve Shopify-Produkt-Quiz mit kostenlosem Plan und Preisen ab $39/mo, keine Enterprise-Discovery-Suite.",
    h1: "RevenueHunt vs Zoovu",
    heroSubtitle:
      "Zoovu ist eine Enterprise-Plattform für Produktfindung und Guided Selling, die per Demo verkauft wird. RevenueHunt ist ein fokussiertes Produkt-Quiz, das du heute installieren kannst: kostenlos starten, transparente Preise, noch am selben Tag live.",
    intro: [
      "Zoovu ist eine Enterprise-Plattform für Produktfindung, die AI-Suche, Guided Selling, Produktempfehlungen und visuelle Konfiguratoren (CPQ) für große B2C- und B2B-Marken mit riesigen, komplexen Katalogen bündelt. Sie ist plattformunabhängig, wird über Demos mit individuellen Enterprise-Preisen verkauft und hat keinen kostenlosen Plan oder Self-Serve-Anmeldung.",
      "RevenueHunt ist ein fokussiertes Produktempfehlungs-Quiz, das von über 20.000 Marken genutzt wird (4,9★, über 550 Bewertungen). Statt einer Enterprise-Discovery-Suite macht es eine Sache außergewöhnlich gut, nämlich Shopify-Kunden zum richtigen Produkt zu führen, mit transparenten Preisen, einem kostenlosen Plan und Einrichtung am selben Tag, ohne Verkaufsgespräch.",
    ],
    rows: [
      { feature: "Kostenloser Plan", rh: RH.freePlan, them: "no" },
      { feature: "Transparente öffentliche Preise", rh: RH.transparentPricing, them: "Individuell / Demo anfragen" },
      { feature: "Einstiegspreis", rh: RH.startingPaid, them: "Vertriebsgeführt (Enterprise)" },
      { feature: "Self-Serve-Einrichtung (kein Verkaufsgespräch)", rh: "yes", them: "no" },
      { feature: "Speziell für Produktempfehlungs-Quizze gebaut", rh: RH.ecommerceRecs, them: "Quiz ist ein Modul einer Discovery-Suite" },
      { feature: "Empfiehlt echte Produkte aus deinem Katalog", rh: RH.catalogRecs, them: "yes" },
      { feature: "Native Shopify-App (Built for Shopify)", rh: RH.shopifyNative, them: "Über Integration" },
      { feature: "AI Quiz-Builder (Einrichtung in 60 Sekunden)", rh: RH.aiBuilder, them: "Enterprise-AI-Suite" },
      { feature: "Unbegrenzte Quizze", rh: RH.unlimitedQuizzes, them: "yes" },
      { feature: "Unbegrenzte bedingte / verzweigte Logik", rh: RH.branching, them: "yes" },
      { feature: "Drop-off-Analytics pro Frage", rh: RH.analytics, them: "yes" },
      { feature: "Klaviyo & E-Mail- / CRM-Integrationen", rh: RH.emailIntegrations, them: "yes" },
    ],
    whySwitch: [
      {
        title: "Self-Serve, kein Verkaufsgespräch",
        body: "Zoovu wird über Demos und individuelle Enterprise-Verträge ohne öffentliche Preise verkauft. RevenueHunt ist install-and-go: Plan wählen, Quiz bauen und veröffentlichen. Kein Einkaufsprozess, kein Implementierungsprojekt.",
      },
      {
        title: "In Minuten live, kein Rollout",
        body: "Zoovu ist eine schwergewichtige Discovery-Suite, die Suche, Konfiguratoren und Guided Selling über viele Systeme hinweg umfasst. RevenueHunt ist eine fokussierte Quiz-App, die die meisten Händler noch am selben Tag starten, mit einem AI Copilot, der in 60 Sekunden ein vollständiges Quiz aufsetzt.",
      },
      {
        title: "Preise, die zu einer wachsenden Marke passen",
        body: "Enterprise-Discovery-Plattformen sind für globale Kataloge und große Teams ausgelegt. RevenueHunt startet kostenlos und skaliert nach Antworten ab $39/Monat, passgenau für Shopify- und Shopify-Plus-Marken.",
      },
      {
        title: "Built-for-Shopify-Einfachheit",
        body: "RevenueHunt ist eine Built-for-Shopify-App mit Echtzeit-Katalog-Synchronisierung und Shopify-Markets-Lokalisierung, bewertet mit 4,9★ von über 550 Händlern. Die Tiefe, die du für Produktfindung brauchst, ohne Enterprise-Overhead.",
      },
    ],
    bestFor:
      "Zoovu passt zu großen Unternehmen mit riesigen, komplexen Katalogen (Unterhaltungselektronik, Haushaltsgeräte, Industrie, B2B), die Konfiguratoren, CPQ und Guided Selling über viele Systeme hinweg brauchen, mit dem Budget und Team für einen Enterprise-Rollout. Wenn du ein fokussiertes, erschwingliches, self-serve Shopify-Quiz willst, passt RevenueHunt besser.",
    migration:
      "Der Wechsel von Zoovu ist unkompliziert. Baue dein Quiz in RevenueHunt (oder generiere es mit dem AI Copilot), bette es ein und verbinde Klaviyo oder dein CRM. Kein Implementierungsprojekt. Die meisten Shops sind noch am selben Tag live, und der Support hilft dir dabei.",
    faqs: [
      {
        question: "Wie viel kostet RevenueHunt im Vergleich zu Zoovu?",
        answer:
          "RevenueHunt hat einen kostenlosen Plan und transparente kostenpflichtige Pläne ab $39/Monat. Zoovu veröffentlicht keine Preise. Es ist eine vertriebsgeführte Enterprise-Plattform, die nach einer Demo individuelle Preise nennt.",
      },
      {
        question: "Ist RevenueHunt eine Enterprise-Discovery-Plattform wie Zoovu?",
        answer:
          "Nein, und das ist der Punkt. Zoovu bündelt AI-Suche, Konfiguratoren, CPQ und Guided Selling für große Kataloge. RevenueHunt konzentriert sich auf Produktempfehlungs-Quizze für Shopify und macht diese eine Aufgabe außergewöhnlich gut, mit Self-Serve-Einrichtung und ohne Verkaufsgespräch.",
      },
      {
        question: "Macht RevenueHunt Guided Selling wie Zoovu?",
        answer:
          "Ja. Ein RevenueHunt-Quiz ist Guided Selling: Es stellt die richtigen Fragen und ordnet Antworten den genauen Produkten aus deinem Katalog zu, mit einer personalisierten Ergebnisseite und direktem In-den-Warenkorb, ohne Enterprise-Preise oder einen Rollout.",
      },
      {
        question: "Wie lange dauert die Einrichtung im Vergleich zu Zoovu?",
        answer:
          "Die meisten RevenueHunt-Händler starten noch am selben Tag, und der AI Quiz Copilot kann in etwa 60 Sekunden ein vollständiges Quiz aufsetzen. Zoovu ist typischerweise eine vertriebsgeführte Enterprise-Implementierung.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  jebbit: {
    slug: "jebbit",
    name: "Jebbit",
    category: "Enterprise-Plattform für Declared Data (jetzt Teil von BlueConic)",
    title: "RevenueHunt vs Jebbit: eine Self-Serve-Alternative",
    description:
      "RevenueHunt vs Jebbit: ein eigenständiges, self-serve Shopify-Produkt-Quiz mit kostenlosem Plan ab $39/mo. Jebbit ist jetzt Teil von BlueConics Enterprise-CDP.",
    h1: "RevenueHunt vs Jebbit",
    heroSubtitle:
      "Jebbit ist jetzt Teil von BlueConics Enterprise-Customer-Data-Platform, verkauft per Demo. RevenueHunt ist ein eigenständiges, self-serve Produkt-Quiz: kostenlos starten, Shopify-nativ, noch am selben Tag live.",
    intro: [
      "Jebbit erstellt interaktive Quizze, Produktfinder und Präferenz-Flows, um declared (zero-party) Data zu sammeln. Es wurde übernommen und heißt jetzt „Experiences by Jebbit“, Teil von BlueConics Customer-Data-Platform, ausgerichtet auf Enterprise- und Mid-Market-B2C-Marken (L'Oréal, Express, Heineken), plattformunabhängig und über Demos ohne öffentliche Preise oder kostenlosen Plan verkauft.",
      "RevenueHunt ist ein eigenständiges Produktempfehlungs-Quiz, das von über 20.000 Marken genutzt wird (4,9★, über 550 Bewertungen). Du musst kein CDP kaufen, um es zu nutzen: Es ist ein fokussiertes, Built-for-Shopify-Quiz mit transparenten Preisen, einem kostenlosen Plan und Einrichtung am selben Tag, self-serve, ohne Verkaufsgespräch.",
    ],
    rows: [
      { feature: "Kostenloser Plan", rh: RH.freePlan, them: "no" },
      { feature: "Transparente öffentliche Preise", rh: RH.transparentPricing, them: "Individuell / Demo anfragen" },
      { feature: "Einstiegspreis", rh: RH.startingPaid, them: "Vertriebsgeführt (Enterprise)" },
      { feature: "Self-Serve-Einrichtung (kein Verkaufsgespräch)", rh: "yes", them: "no" },
      { feature: "Eigenständiges Produkt (kein Plattformkauf nötig)", rh: "yes", them: "Jetzt Teil von BlueConic CDP" },
      { feature: "Empfiehlt echte Produkte aus deinem Katalog", rh: RH.catalogRecs, them: "yes" },
      { feature: "Native Shopify-App (Built for Shopify)", rh: RH.shopifyNative, them: "Über Integration" },
      { feature: "AI Quiz-Builder (Einrichtung in 60 Sekunden)", rh: RH.aiBuilder, them: "no" },
      { feature: "Unbegrenzte Quizze", rh: RH.unlimitedQuizzes, them: "yes" },
      { feature: "Unbegrenzte bedingte / verzweigte Logik", rh: RH.branching, them: "yes" },
      { feature: "Drop-off-Analytics pro Frage", rh: RH.analytics, them: "yes" },
      { feature: "Erfasst zero-party / declared Data", rh: "yes", them: "yes" },
    ],
    whySwitch: [
      {
        title: "Ein eigenständiges Quiz, kein Plattformkauf",
        body: "Jebbit heißt jetzt „Experiences by Jebbit“ innerhalb von BlueConics CDP. RevenueHunt ist eine fokussierte App, die du eigenständig betreiben kannst. Keine Customer-Data-Platform, die du kaufen oder implementieren musst.",
      },
      {
        title: "Self-Serve, kein Verkaufsgespräch",
        body: "Jebbit/BlueConic wird über Demos und individuelle Enterprise-Verträge ohne öffentliche Preise verkauft. RevenueHunt ist install-and-go mit einem kostenlosen Plan und transparenten Preisen ab $39/Monat.",
      },
      {
        title: "Für Shopify gebaut, noch am selben Tag live",
        body: "RevenueHunt ist eine Built-for-Shopify-App mit Echtzeit-Katalog-Synchronisierung und direktem In-den-Warenkorb, und einem AI Copilot, der in 60 Sekunden ein vollständiges Quiz aufsetzt. Die meisten Händler starten noch am selben Tag.",
      },
      {
        title: "Du besitzt deine zero-party Data weiterhin",
        body: "Jede Quiz-Antwort ist zero-party Data, die deine Kunden freiwillig geben. RevenueHunt synchronisiert Antworten und Kunden-Tags zu Klaviyo, Mailchimp, Omnisend, HubSpot und mehr. Kein CDP nötig, um sie zu nutzen.",
      },
    ],
    bestFor:
      "Jebbit, als Teil von BlueConic, passt zu Enterprise-B2C-Marken, die Declared-Data-Erlebnisse eng an eine vollständige Customer-Data-Platform koppeln und über viele Kanäle aktivieren wollen, mit dem Budget für ein CDP. Wenn du ein eigenständiges, erschwingliches, self-serve Shopify-Quiz willst, passt RevenueHunt besser.",
    migration:
      "Der Wechsel von Jebbit, oder die Bewertung von BlueConic, ist einfach. Baue dein Quiz in RevenueHunt (oder generiere es mit dem AI Copilot), bette es ein und verbinde Klaviyo oder dein CRM. Die meisten Shops sind noch am selben Tag live, und deine zero-party Data fließt weiterhin zu deinen E-Mail-Tools.",
    faqs: [
      {
        question: "Ist Jebbit noch eigenständig verfügbar?",
        answer:
          "Jebbit heißt jetzt „Experiences by Jebbit“, Teil von BlueConics Customer-Data-Platform. RevenueHunt ist ein eigenständiges Produkt-Quiz, das du ohne den Kauf eines CDP nutzen kannst: self-serve, mit einem kostenlosen Plan ab $39/Monat.",
      },
      {
        question: "Wie viel kostet RevenueHunt im Vergleich zu Jebbit?",
        answer:
          "RevenueHunt hat einen kostenlosen Plan und transparente kostenpflichtige Pläne ab $39/Monat. Jebbit/BlueConic veröffentlicht keine Preise. Es ist eine vertriebsgeführte Enterprise-Plattform, die nach einer Demo individuelle Preise nennt.",
      },
      {
        question: "Sammelt RevenueHunt zero-party (declared) Data wie Jebbit?",
        answer:
          "Ja. Jede Quiz-Antwort ist zero-party Data, die deine Kunden freiwillig geben. RevenueHunt synchronisiert Antworten und Kunden-Tags zu Klaviyo, Mailchimp, Omnisend, HubSpot und mehr für Segmentierung und personalisiertes Marketing.",
      },
      {
        question: "Wie lange dauert die Einrichtung im Vergleich zu Jebbit?",
        answer:
          "Die meisten RevenueHunt-Händler starten noch am selben Tag, und der AI Quiz Copilot kann in etwa 60 Sekunden ein vollständiges Quiz aufsetzen. Jebbit/BlueConic ist typischerweise eine vertriebsgeführte Enterprise-Implementierung.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  nosto: {
    slug: "nosto",
    name: "Nosto",
    category: "Enterprise-Personalisierungsplattform",
    title: "RevenueHunt vs Nosto: eine Self-Serve-Alternative",
    description:
      "RevenueHunt vs Nosto: ein fokussiertes, self-serve Produkt-Quiz, das zero-party Data erfasst, mit kostenlosem Plan ab $39/mo, keine Enterprise-Personalisierungs-Suite.",
    h1: "RevenueHunt vs Nosto",
    heroSubtitle:
      "Nosto ist eine Enterprise-Suite für Personalisierung, Suche und Merchandising, verkauft per Demo. RevenueHunt ist ein fokussiertes Zero-Party-Produkt-Quiz, das du heute installieren kannst: kostenlos starten, noch am selben Tag live.",
    intro: [
      "Nosto ist eine Commerce Experience Platform, die AI-Produktempfehlungen, personalisierte Site-Suche, Merchandising und Content-Personalisierung für Enterprise- und Mid-Market-Marken bündelt. Sie ist plattformunabhängig, wird über Demos mit individuellen Enterprise-Preisen verkauft und hat keinen kostenlosen Plan oder Self-Serve-Anmeldung. Ihre Personalisierung wird hauptsächlich von Verhaltensdaten statt von Quizzen angetrieben.",
      "RevenueHunt ist ein fokussiertes Produktempfehlungs-Quiz, das von über 20.000 Marken genutzt wird (4,9★, über 550 Bewertungen). Statt einer Enterprise-Suite führt es Kunden zum richtigen Produkt, indem es sie direkt fragt und zero-party Data erfasst, die dir gehört, mit transparenten Preisen, einem kostenlosen Plan und Einrichtung am selben Tag, ohne Verkaufsgespräch.",
    ],
    rows: [
      { feature: "Kostenloser Plan", rh: RH.freePlan, them: "no" },
      { feature: "Transparente öffentliche Preise", rh: RH.transparentPricing, them: "Individuell / Demo anfragen" },
      { feature: "Einstiegspreis", rh: RH.startingPaid, them: "Vertriebsgeführt (Enterprise)" },
      { feature: "Self-Serve-Einrichtung (kein Verkaufsgespräch)", rh: "yes", them: "no" },
      { feature: "Speziell für Produktempfehlungs-Quizze gebaut", rh: RH.ecommerceRecs, them: "Personalisierungs-Suite, nicht quiz-geführt" },
      { feature: "Erfasst zero-party Data (Kunden sagen es dir direkt)", rh: "yes", them: "Hauptsächlich verhaltensbasiert / prädiktiv" },
      { feature: "Empfiehlt echte Produkte aus deinem Katalog", rh: RH.catalogRecs, them: "yes" },
      { feature: "Native Shopify-App (Built for Shopify)", rh: RH.shopifyNative, them: "yes" },
      { feature: "AI Quiz-Builder (Einrichtung in 60 Sekunden)", rh: RH.aiBuilder, them: "no" },
      { feature: "Unbegrenzte Quizze", rh: RH.unlimitedQuizzes, them: "Kein Quiz-Tool" },
      { feature: "Drop-off-Analytics pro Frage", rh: RH.analytics, them: "yes" },
      { feature: "Klaviyo & E-Mail- / CRM-Integrationen", rh: RH.emailIntegrations, them: "yes" },
    ],
    whySwitch: [
      {
        title: "Self-Serve, kein Verkaufsgespräch",
        body: "Nosto wird über Demos und individuelle Enterprise-Verträge ohne öffentliche Preise verkauft. RevenueHunt ist install-and-go: Plan wählen, Quiz bauen und veröffentlichen, mit einem kostenlosen Plan und transparenten Preisen ab $39/Monat.",
      },
      {
        title: "Zero-party Data, nicht nur Verhaltens-Tracking",
        body: "Nosto personalisiert hauptsächlich aus verhaltensbasierten und prädiktiven Signalen. RevenueHunt fragt Kunden direkt über ein Quiz und erfasst zero-party Data, die dir gehört und die du zu Klaviyo, Mailchimp, Omnisend und mehr synchronisieren kannst.",
      },
      {
        title: "In Minuten live, kein Rollout",
        body: "Nosto ist eine Multi-Modul-Suite (Empfehlungen, Suche, Merchandising), die typischerweise Onboarding braucht. RevenueHunt ist eine fokussierte Quiz-App, die die meisten Händler noch am selben Tag starten, mit einem AI Copilot, der in 60 Sekunden ein vollständiges Quiz aufsetzt.",
      },
      {
        title: "Preise, die zu einer wachsenden Marke passen",
        body: "Enterprise-Personalisierungs-Suiten sind für große Teams und Kataloge ausgelegt. RevenueHunt startet kostenlos und skaliert nach Antworten ab $39/Monat, passgenau für Shopify- und Shopify-Plus-Marken.",
      },
    ],
    bestFor:
      "Nosto passt zu Enterprise- und Mid-Market-Marken, die eine vollständige Suite für verhaltensbasierte Personalisierung, Suche und Merchandising über mehrere Storefronts hinweg wollen, mit dem Budget und Team für einen Enterprise-Rollout. Wenn du ein fokussiertes, erschwingliches, self-serve Produkt-Quiz willst, das zero-party Data erfasst, passt RevenueHunt besser.",
    migration:
      "Der Wechsel von Nosto ist unkompliziert. Baue dein Quiz in RevenueHunt (oder generiere es mit dem AI Copilot), bette es ein und verbinde Klaviyo oder dein CRM. Kein Implementierungsprojekt. Die meisten Shops sind noch am selben Tag live, und deine zero-party Data fließt direkt zu deinen E-Mail-Tools.",
    faqs: [
      {
        question: "Wie viel kostet RevenueHunt im Vergleich zu Nosto?",
        answer:
          "RevenueHunt hat einen kostenlosen Plan und transparente kostenpflichtige Pläne ab $39/Monat. Nosto veröffentlicht keine Preise. Es ist eine vertriebsgeführte Enterprise-Plattform, die nach einer Demo individuelle Preise nennt.",
      },
      {
        question: "Ist RevenueHunt eine Personalisierungs-Suite wie Nosto?",
        answer:
          "Nein, und das ist der Punkt. Nosto bündelt verhaltensbasierte Empfehlungen, Site-Suche und Merchandising. RevenueHunt konzentriert sich auf Produktempfehlungs-Quizze, die zero-party Data erfassen, mit Self-Serve-Einrichtung und ohne Verkaufsgespräch.",
      },
      {
        question: "Nutzt RevenueHunt zero-party Data statt Verhaltens-Tracking?",
        answer:
          "Ja. RevenueHunt führt Kunden durch ein Quiz und sie sagen dir ihre Präferenzen, Ziele und Einschränkungen direkt: zero-party Data, die dir gehört, statt Absichten aus Verhalten und Cookies abzuleiten.",
      },
      {
        question: "Wie lange dauert die Einrichtung im Vergleich zu Nosto?",
        answer:
          "Die meisten RevenueHunt-Händler starten noch am selben Tag, und der AI Quiz Copilot kann in etwa 60 Sekunden ein vollständiges Quiz aufsetzen. Nosto ist typischerweise eine vertriebsgeführte Enterprise-Implementierung.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  tolstoy: {
    slug: "tolstoy",
    name: "Tolstoy",
    category: "Shoppable-Video- & Quiz-Plattform",
    title: "RevenueHunt vs Tolstoy: eine Quiz-First-Alternative",
    description:
      "RevenueHunt vs Tolstoy: ein speziell gebautes Produkt-Quiz mit echter Empfehlungs-Engine und zero-party Data, vs eine Video-Plattform mit einer Quiz-Funktion.",
    h1: "RevenueHunt vs Tolstoy",
    heroSubtitle:
      "Tolstoy ist eine Shoppable-Video-Plattform mit einer Quiz-Funktion. RevenueHunt ist ein speziell gebautes Produktempfehlungs-Quiz, mit einer echten Empfehlungs-Engine und zero-party Data.",
    intro: [
      "Tolstoy ist eine AI-Commerce-Plattform, die um Shoppable Video, AI-generierte Medien und einen AI-Shopping-Agenten aufgebaut ist, mit impressionsbasierten Preisen ab $19/Monat. Es ist ein starkes Video-First-Tool. Aber das Produkt-Quiz ist eine sekundäre Funktion neben dem Video-Erlebnis.",
      "RevenueHunt ist ein Produktempfehlungs-Quiz, das von über 20.000 Marken genutzt wird (4,9★, über 550 Bewertungen). Es ist Quiz-First: Eine dedizierte Empfehlungs-Engine ordnet die Antworten jedes Kunden den richtigen Produkten aus deinem Katalog zu, erfasst zero-party Data und konvertiert auf einer personalisierten Ergebnisseite, über Shopify, WooCommerce, BigCommerce, Magento, Wix und mehr.",
    ],
    rows: [
      { feature: "Kostenloser Plan", rh: RH.freePlan, them: "yes (eingeschränkt)" },
      { feature: "Einstiegspreis (kostenpflichtig)", rh: RH.startingPaid, them: "$19/mo" },
      { feature: "Preismodell", rh: "Pauschal, nach Antworten", them: "Nach Impressionen + AI-Credits" },
      { feature: "Speziell für Produktempfehlungs-Quizze gebaut", rh: RH.ecommerceRecs, them: "Quiz ist eine sekundäre Funktion (Video-First)" },
      { feature: "Dedizierte Empfehlungs-Engine (Upvote & Ausschluss, Ergebnisseite)", rh: "yes", them: "Video-geführtes Shopping" },
      { feature: "Empfiehlt echte Produkte aus deinem Katalog", rh: RH.catalogRecs, them: "yes" },
      { feature: "Erfasst zero-party Data (Kunden sagen es dir direkt)", rh: "yes", them: "Hauptsächlich Video-Engagement-Daten" },
      { feature: "Native Shopify-App (Built for Shopify)", rh: RH.shopifyNative, them: "yes" },
      { feature: "Funktioniert auf WooCommerce, BigCommerce, Magento, Wix & mehr", rh: RH.multiPlatform, them: "no" },
      { feature: "AI Quiz-Builder (Einrichtung in 60 Sekunden)", rh: RH.aiBuilder, them: "Video-fokussierte AI" },
      { feature: "Drop-off-Analytics pro Frage", rh: RH.analytics, them: "yes" },
      { feature: "Klaviyo & E-Mail- / CRM-Integrationen", rh: RH.emailIntegrations, them: "yes" },
    ],
    whySwitch: [
      {
        title: "Ein Quiz-First-Tool, kein Video-Add-on",
        body: "Tolstoy ist eine Shoppable-Video-Plattform, bei der das Quiz eine sekundäre Funktion ist. RevenueHunt ist speziell für Produktempfehlungs-Quizze gebaut, mit einer dedizierten Empfehlungs-Engine und einer konversionsfokussierten Ergebnisseite.",
      },
      {
        title: "Eine echte Empfehlungs-Engine",
        body: "RevenueHunt sortiert die genauen Produkte, Varianten und Kollektionen aus deinem Live-Katalog mit einem Upvote-und-Ausschluss-Modell, mit bedingten Ergebnisblöcken und direktem In-den-Warenkorb. Eine Tiefe, die das Quiz eines Video-Tools nicht erreicht.",
      },
      {
        title: "Zero-party Data, die dir gehört",
        body: "RevenueHunt erfasst, was Kunden dir sagen (Präferenzen, Ziele, Einschränkungen) und synchronisiert es zu Klaviyo, Mailchimp, Omnisend und mehr für Segmentierung. Tolstoys Stärke ist Video-Engagement, nicht strukturierte Quiz-Daten.",
      },
      {
        title: "Verkaufe überall, bewährt im großen Maßstab",
        body: "RevenueHunt läuft nativ auf Shopify und außerdem auf WooCommerce, BigCommerce, Magento, Wix, Squarespace und eigenständig, vertraut von über 20.000 Marken mit 4,9★ aus über 550 Bewertungen.",
      },
    ],
    bestFor:
      "Tolstoy ist eine starke Wahl, wenn deine Strategie video-geführt ist (Shoppable Video, UGC, TikTok Shop) und ein Quiz ein Nice-to-have ist. Wenn du ein dediziertes Produktempfehlungs-Quiz mit einer echten Empfehlungs-Engine und zero-party Data willst, passt RevenueHunt besser.",
    migration:
      "Wenn du ein Quiz innerhalb von Tolstoy betrieben hast, ist der Wechsel schnell. Baue es im Builder von RevenueHunt neu auf (oder generiere es in 60 Sekunden mit unserem AI Copilot), bette es ein und verbinde Klaviyo. Die meisten Shops sind noch am selben Tag live, und unser Support-Team hilft dir bei der Migration.",
    faqs: [
      {
        question: "Ist RevenueHunt besser als Tolstoy für ein Produkt-Quiz?",
        answer:
          "Für ein dediziertes Produktempfehlungs-Quiz ja. RevenueHunt ist genau dafür gebaut, mit einer echten Empfehlungs-Engine und zero-party Data. Tolstoy ist Video-First, mit dem Quiz als sekundärer Funktion. Speziell für Shoppable Video ist Tolstoy genau dafür gebaut.",
      },
      {
        question: "Macht Tolstoy Produktempfehlungs-Quizze?",
        answer:
          "Ja, als sekundäre Funktion neben seinem Shoppable Video. RevenueHunt ist Quiz-First: Es ist rund um das Quiz und seine Empfehlungs-Engine, Ergebnisseite und Zero-Party-Data-Erfassung aufgebaut.",
      },
      {
        question: "Unterstützt RevenueHunt auch Video?",
        answer:
          "Ja. Du kannst Video zu Quiz-Fragen und zur personalisierten Ergebnisseite hinzufügen. RevenueHunt ist Quiz-First statt einer Video-Plattform, sodass Video das Quiz unterstützt und nicht umgekehrt.",
      },
      {
        question: "Kann ich zero-party Data erfassen und an Klaviyo senden?",
        answer:
          "Ja. RevenueHunt erfasst Quiz-Antworten als zero-party Data und synchronisiert Antworten und Kunden-Tags zu Klaviyo, Mailchimp, Omnisend, HubSpot und mehr für Segmentierung und personalisiertes Marketing.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },
};
