import type { Solution } from "../solutions";

const VERIFIED = "2026-06-07";

export const SOLUTIONS_DE: Record<string, Solution> = {
  // ----------------------------------------------------------------- verticals
  skincare: {
    slug: "skincare",
    type: "vertical",
    name: "Hautpflege",
    chip: "Branche",
    title: "Hautpflege-Quiz für Shopify & WooCommerce",
    description:
      "Erstelle ein Hautpflege-Quiz, das Hauttyp und Anliegen erkennt und dann die richtige Routine empfiehlt. Kostenloser Plan, AI-Builder, noch am selben Tag live.",
    h1: "Hautpflege-Quizze, die aus Stöbernden eine Routine machen",
    heroSubtitle:
      "Die meisten Erstkäufer von Hautpflege wissen nicht, welche Produkte für sie richtig sind. Ein Quiz stellt die richtigen Fragen und liefert eine personalisierte Routine, die sie in den Warenkorb legen können.",
    intro: [
      "Hautpflege ist die schwierigste Kategorie, um sie spontan zu kaufen. Kunden kommen mit einem Anliegen, nicht mit einem konkreten Produkt im Kopf, und eine Wand aus Cleansern, Seren und SPF hilft ihnen bei der Auswahl nicht. Ein Hautpflege-Quiz ersetzt diese Wand durch ein kurzes, geführtes Gespräch: Hauttyp, Hauptanliegen, Empfindlichkeiten und Budget rein, eine personalisierte Routine raus.",
      "RevenueHunt wird von über 20.000 Marken genau dafür eingesetzt. Es ordnet jede Antwort echten Produkten aus deinem Katalog zu, gruppiert das Ergebnis nach Routine-Schritt (Cleanser, Treatment, Moisturizer, SPF) und erfasst das Hautprofil des Kunden als zero-party data, die du mit Klaviyo synchronisieren kannst.",
    ],
    quizTypes: [
      {
        title: "Hauttyp-Finder",
        body: "Fünf bis sieben Fragen zu Hauttyp, Anliegen und Zielen liefern eine passende Routine. Das klassische Hautpflege-Quiz und der Startpunkt mit der höchsten Conversion.",
      },
      {
        title: "Routine-Builder",
        body: "Nutze Empfehlungsslots, um für jeden Schritt einen Platz zu reservieren, sodass jeder Kunde eine komplette 3-Schritt- oder 5-Schritt-Routine erhält statt eines einzelnen Produkts.",
      },
      {
        title: "Anliegen-geführtes Quiz",
        body: "Beginne mit dem Problem (Akne, Hautalterung, Trockenheit, Empfindlichkeit) und verzweige mit bedingter Logik, sodass jeder Kunde nur die für ihn relevanten Fragen sieht.",
      },
      {
        title: "Inhaltsstoff- oder Empfindlichkeits-Match",
        body: "Schließe Produkte aus, die mit einer angegebenen Allergie oder Empfindlichkeit kollidieren, sodass ein Kunde, der parfümfrei angibt, in seinen Ergebnissen nie ein parfümiertes Produkt sieht.",
      },
    ],
    howItHelps: [
      "Die Empfehlungs-Engine ordnet Produkte nach den Antworten, die am wichtigsten sind. Gewichte ein Muss-Anliegen höher als ein Nice-to-have und schließe alles aus, was ein Kunde ausschließt, sodass die Ergebnisseite wirklich maßgeschneidert ist statt einer generischen Bestseller-Reihe.",
      "Jede Antwort ist zero-party data. Ein Kunde, der dir sagt, dass seine Haut trocken und empfindlich ist und ihm Anti-Aging wichtig ist, ist ein Segment, das du jahrelang bewerben kannst. RevenueHunt synchronisiert dieses Profil und Kunden-Tags mit Klaviyo, Mailchimp, Omnisend und mehr.",
      "Baue es in Minuten, nicht Wochen. Starte mit einer Hautpflege-Vorlage oder beschreibe deinen Shop dem AI Quiz Copilot, und er gerüstet die Fragen, die Logik und die Produktzuordnungen in etwa 60 Sekunden. Dann veröffentliche es als Popup, Embed oder Full-Page-Landingpage.",
    ],
    demo: {
      label: "Probier das Hauttyp-Quiz aus",
      href: "https://productrecommendationquiz.com/pages/skin-type-quiz?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_skincare",
      blurb: "Ein Live-Hautpflege-Quiz in unserem Demo-Shop. Beantworte ein paar Fragen und sieh dir die Routine an, die es liefert.",
    },
    faqs: [
      {
        question: "Wie viele Fragen sollte ein Hautpflege-Quiz haben?",
        answer:
          "Fünf bis sieben sichtbare Fragen funktionieren für die meisten Marken. Nutze bedingte Logik, um nicht zutreffende Fragen zu überspringen, sodass ein Kunde ohne Empfindlichkeiten nie den Allergie-Schritt sieht.",
      },
      {
        question: "Kann das Quiz eine komplette Routine empfehlen, nicht nur ein einzelnes Produkt?",
        answer:
          "Ja. Empfehlungsslots reservieren einen Platz für jeden Routine-Schritt (Cleanser, Treatment, Moisturizer, SPF), sodass jeder Kunde eine komplette Routine mit in-den-Warenkorb für das gesamte Set erhält.",
      },
      {
        question: "Funktioniert es für empfindliche Haut und Allergien?",
        answer:
          "Ja. Jede Antwort kann Produkte ausschließen, sodass das Angeben einer Allergie oder Empfindlichkeit jedes kollidierende Produkt aus den Ergebnissen entfernt, selbst wenn es ansonsten ein starker Treffer war.",
      },
      {
        question: "Kann ich E-Mails erfassen und die Routine an Klaviyo senden?",
        answer:
          "Ja. Das Quiz erfasst E-Mail und das vollständige Hautprofil als zero-party data und synchronisiert Antworten und Kunden-Tags mit Klaviyo, Mailchimp, Omnisend, HubSpot und mehr.",
      },
    ],
    related: [
      { label: "Hautpflege-Quiz-Vorlagen", href: "/templates/" },
      { label: "Routine-Builder-Quiz", href: "/solutions/routine-builder/" },
      { label: "Shade-Finder-Quiz", href: "/solutions/shade-finder/" },
      { label: "Für Beauty-Marken", href: "/for-beauty-brands/" },
      { label: "Quiz für Shopify", href: "/product-recommendation-quiz-shopify/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  beauty: {
    slug: "beauty",
    type: "vertical",
    name: "Beauty & Kosmetik",
    chip: "Branche",
    title: "Beauty- & Kosmetik-Quiz für deinen Shop",
    description:
      "Ein Beauty-Quiz, das den Farbton matcht, die richtigen Produkte findet und eine Routine aus deinem Katalog erstellt. Kostenloser Plan, AI-Builder, plattformübergreifend.",
    h1: "Beauty-Quizze, die Kunden mit dem richtigen Produkt zusammenbringen",
    heroSubtitle:
      "Foundation-Farbton, Lippenfarbe, eine komplette Pflege: Ein Beauty-Quiz beantwortet die Fragen, die ein Produktraster nicht kann, und schickt Kunden auf eine personalisierte Ergebnisseite.",
    intro: [
      "Beauty-Kunden haben zwei Probleme zugleich: zu viel Auswahl und zu viel Risiko. Wähle den falschen Foundation-Farbton und er wird retourniert. Ein Beauty-Quiz nimmt das Rätselraten heraus, indem es nach Unterton, Deckkraft, Finish und Anliegen fragt und dann genau die passenden Produkte empfiehlt.",
      "RevenueHunt betreibt Beauty-Quizze für tausende Marken. Es zieht echte Produkte und Varianten aus deinem Katalog, zeigt sie auf einer Ergebnisseite mit direktem in-den-Warenkorb und erfasst das Beauty-Profil jedes Kunden als zero-party data für segmentiertes E-Mail-Follow-up.",
    ],
    quizTypes: [
      {
        title: "Farbton-Matcher",
        body: "Fragen zu Unterton, Tiefe und Finish ordnen den richtigen Foundation-, Concealer- oder Lippen-Farbton zu. Bild-Auswahl-Antworten machen es auf dem Smartphone schnell.",
      },
      {
        title: "Komplettpflege-Builder",
        body: "Empfehle ein komplettes Set (Prep, Base, Color, Set) mit Empfehlungsslots, sodass Kunden die Routine kaufen statt eines einzelnen Artikels.",
      },
      {
        title: "Haut- oder Haar-Anliegen-Quiz",
        body: "Verzweige nach Anliegen und Haut- oder Haartyp, sodass die Ergebnisseite das spezifische Ziel jedes Kunden anspricht.",
      },
      {
        title: "Geschenk- oder Starterset-Finder",
        body: "Hilf Geschenkkäufern und Neueinsteigern, die den Katalog nicht kennen, indem du ein kuratiertes Starterset oder Bundle empfiehlst.",
      },
    ],
    howItHelps: [
      "Farbton und Passform sind genau dort, wo Retouren entstehen. Indem das Quiz von Anfang an nach Unterton und Deckkraft fragt und alles Unpassende ausschließt, schickt es Kunden zu Produkten, die sie viel eher behalten.",
      "Bild-Auswahl-Fragen lassen Kunden ein Bild antippen, statt sich selbst zu beschreiben, was die Abschlussraten auf dem Smartphone hoch hält, wo der meiste Beauty-Traffic landet.",
      "Das Profil des Kunden (Unterton, Hauttyp, Lieblings-Finish) synchronisiert sich als Kunden-Tags mit deinem E-Mail-Tool, sodass jede Kampagne nach dem Quiz personalisiert statt generisch sein kann.",
    ],
    demo: {
      label: "Probier das Foundation-Match-Quiz aus",
      href: "https://productrecommendationquiz.com/pages/foundation-match?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_beauty",
      blurb: "Ein bildbasiertes Live-Farbton-Match-Quiz in unserem Demo-Shop, mit exakten Treffer-Ergebnissen.",
    },
    faqs: [
      {
        question: "Kann ein Beauty-Quiz Foundation-Farbtöne matchen?",
        answer:
          "Ja. Frage nach Unterton, Tiefe und Finish, verknüpfe jede Antwort mit den passenden Farbtönen und schließe den Rest aus. Die Ergebnisseite zeigt den exakten Farbton-Match mit in-den-Warenkorb.",
      },
      {
        question: "Unterstützt es Bild-Auswahl-Fragen?",
        answer:
          "Ja. Auswahlmöglichkeiten können als anklickbare Bilder dargestellt werden, was ideal für Farbton-, Finish- und Stilfragen ist und die mobile Abschlussrate steigert.",
      },
      {
        question: "Funktioniert es auf WooCommerce oder BigCommerce, nicht nur Shopify?",
        answer:
          "Ja. RevenueHunt läuft nativ auf Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace und als eigenständiges gehostetes Quiz.",
      },
      {
        question: "Kann ich Produkte zu einem Ergebnis bündeln?",
        answer:
          "Ja. Nutze Empfehlungsslots, um einen Platz für jede Produktrolle zu reservieren, und liefere ein komplettes Set oder Bundle mit in-den-Warenkorb für die ganze Routine.",
      },
    ],
    related: [
      { label: "Shade-Finder-Quiz", href: "/solutions/shade-finder/" },
      { label: "Hautpflege-Quiz", href: "/solutions/skincare/" },
      { label: "Gift-Finder-Quiz", href: "/solutions/gift-finder/" },
      { label: "Für Beauty-Marken", href: "/for-beauty-brands/" },
      { label: "Quiz-Vorlagen", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  supplements: {
    slug: "supplements",
    type: "vertical",
    name: "Supplements",
    chip: "Branche",
    title: "Supplement-Quiz: empfiehl den richtigen Stack",
    description:
      "Ein Supplement-Quiz, das Gesundheitsziele in einen empfohlenen Stack verwandelt. Verzweige nach Ernährung und Einschränkungen, synchronisiere Ziele mit Klaviyo. Kostenlos starten.",
    h1: "Supplement-Quizze, die den richtigen Stack empfehlen",
    heroSubtitle:
      "Kunden kaufen Supplements für ein Ziel, nicht für eine SKU. Ein Quiz verwandelt Schlaf, Energie, Immunität oder Fokus in einen empfohlenen Stack aus deinem Katalog.",
    intro: [
      "Supplement-Kunden denken in Zielen: besser schlafen, mehr Energie, bessere Darmgesundheit. Dein Katalog ist nach Produkt organisiert. Ein Supplement-Quiz schlägt die Brücke, indem es nach Zielen, Ernährung und Lebensstil fragt und dann den passenden Stack empfiehlt.",
      "RevenueHunt ordnet jedes Ziel den richtigen SKUs zu, behandelt Ernährungseinschränkungen mit Ausschlüssen und liefert einen Multi-Produkt-Stack auf einer Ergebnisseite mit einem Rabatt auf die erste Bestellung. Die Ziele des Kunden synchronisieren sich als Tags mit Klaviyo für laufendes, segmentiertes E-Mail-Marketing.",
    ],
    quizTypes: [
      {
        title: "Gesundheitsziel-Finder",
        body: "Kunden wählen ihre Ziele (Schlaf, Energie, Immunität, Darm, Fokus) und jedes Ziel pusht die passenden Produkte hoch, um einen empfohlenen Stack zu bauen.",
      },
      {
        title: "Stack-Builder",
        body: "Reserviere einen Slot für jede Rolle (Foundation, Targeted, Performance), sodass jeder Kunde mit einem kompletten, stimmigen Stack geht.",
      },
      {
        title: "Ernährungs- und Einschränkungs-Filter",
        body: "Schließe Produkte aus, die mit vegan, glutenfrei oder anderen Einschränkungen kollidieren, sodass Ergebnisse die Ernährung jedes Kunden automatisch respektieren.",
      },
      {
        title: "Abo-Onboarding",
        body: "Nutze das Quiz am Anfang eines Abo-Funnels, erfasse E-Mail und verbinde die Ergebnisseite mit einem Subscribe-and-Save-Angebot.",
      },
    ],
    howItHelps: [
      "Bedingte Logik hält das Quiz kurz. Wenn ein Kunde sagt, dass er keine Ernährungseinschränkungen hat, überspringt das Quiz die Einschränkungs-Fragen komplett, sodass niemand Fragen beantwortet, die nicht auf ihn zutreffen.",
      "Ausschlüsse handhaben harte Einschränkungen sauber. Ein veganer Kunde sieht in seinen Ergebnissen nie ein nicht-veganes Produkt, selbst wenn es allein bei den Zielen ein starker Treffer war.",
      "Ziele sind das Wertvollste, was eine Supplement-Marke lernen kann. Das Synchronisieren von goal:sleep- oder goal:gut-Tags mit Klaviyo lässt dich Lifecycle-E-Mails versenden, die wirklich zu dem passen, was jeder Kunde erreichen will.",
    ],
    faqs: [
      {
        question: "Kann ein Supplement-Quiz einen Multi-Produkt-Stack empfehlen?",
        answer:
          "Ja. Jedes Ziel pusht die passenden Produkte hoch, und Empfehlungsslots reservieren einen Platz für jede Rolle, sodass die Ergebnisseite einen kompletten Stack mit in-den-Warenkorb für das Set liefert.",
      },
      {
        question: "Wie handhabt es vegane oder glutenfreie Ernährung?",
        answer:
          "Nutze Ausschlüsse. Das Verknüpfen einer Ernährungs-Antwort mit einer Ausschlussliste entfernt jedes kollidierende Produkt aus den Ergebnissen, egal wie gut es bei den Zielen abgeschnitten hat.",
      },
      {
        question: "Kann ich einen Rabatt auf die erste Bestellung auf der Ergebnisseite hinzufügen?",
        answer:
          "Ja. Die Ergebnisseite unterstützt einen Rabattcode-Block, den du Erstkäufern zeigen oder an bestimmte Antwortkombinationen koppeln kannst.",
      },
      {
        question: "Funktioniert es für eine Abo-Marke?",
        answer:
          "Ja. Lass das Quiz am Anfang des Funnels laufen, erfasse E-Mail in Klaviyo und richte die Ergebnisseite auf ein Subscribe-and-Save-Angebot aus.",
      },
    ],
    related: [
      { label: "Bundle-Builder-Quiz", href: "/solutions/bundle-builder/" },
      { label: "Fitness- & Ernährungs-Quiz", href: "/solutions/fitness/" },
      { label: "Guided-Selling-Quiz", href: "/guided-selling-quiz/" },
      { label: "Quiz-Vorlagen", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  fashion: {
    slug: "fashion",
    type: "vertical",
    name: "Mode & Bekleidung",
    chip: "Branche",
    title: "Mode- & Bekleidungs-Stil-Quiz für E-Commerce",
    description:
      "Ein Stil-Quiz, das die richtige Passform, den richtigen Schnitt und die richtige Farbe aus deinem Katalog findet und Retouren reduziert. Kostenloser Plan, plattformübergreifend, mehrsprachig.",
    h1: "Stil-Quizze, die die richtige Passform und den richtigen Schnitt finden",
    heroSubtitle:
      "Stil ist persönlich und Passform ist riskant. Ein Mode-Quiz lernt den Geschmack und die Größe eines Kunden und empfiehlt dann Teile, die er wahrscheinlich behält.",
    intro: [
      "Mode hat die höchste Retourenquote im E-Commerce, und das meiste davon kommt von Passform- und Stil-Fehlern. Ein Stil-Quiz reduziert beides, indem es nach Körperform, Passform-Vorliebe, Anlass und Geschmack fragt und dann Teile empfiehlt, die wirklich zum Kunden passen.",
      "RevenueHunt baut das Quiz anhand deines Live-Katalogs auf, inklusive Varianten, sodass Größe und Farbe bis zur Ergebnisseite durchfließen. Für Marken, die über mehrere Märkte verkaufen, kann ein Basis-Quiz übersetzt und pro Shopify Market zugewiesen werden, wobei Produkttitel und Preise automatisch lokalisiert werden.",
    ],
    quizTypes: [
      {
        title: "Stilprofil-Quiz",
        body: "Fragen zu Geschmack, Anlass und Farbe bringen die Teile zum Vorschein, die zur Ästhetik eines Kunden passen, statt eines generischen Neuheiten-Rasters.",
      },
      {
        title: "Passform- und Größen-Finder",
        body: "Fragen zu Körperform und Passform-Vorliebe grenzen auf den richtigen Schnitt und die richtige Größe ein, dort wo die meisten Bekleidungs-Retouren beginnen.",
      },
      {
        title: "Capsule- oder Outfit-Builder",
        body: "Nutze Empfehlungsslots, um ein abgestimmtes Outfit oder eine Capsule zusammenzustellen statt eines einzelnen Artikels.",
      },
      {
        title: "Anlass-Finder",
        body: "Verzweige nach Anlass (Arbeit, Hochzeit, Reise), sodass jeder Kunde eine kuratierte Auswahl für den Moment sieht, für den er einkauft.",
      },
    ],
    howItHelps: [
      "Empfehlungen nach Passform und Geschmack, nicht nur nach Beliebtheit, schicken Kunden zu Teilen, die sie eher behalten, was der direkteste Hebel ist, den eine Mode-Marke bei Retouren hat.",
      "Varianten fließen durchgängig durch. Verknüpfe Antworten mit bestimmten Größen und Farben, und die Ergebnisseite zeigt die richtige Variante mit in-den-Warenkorb, sodass Kunden nicht zur Produktseite springen, um neu zu wählen.",
      "Verkaufst du in der ganzen EU oder darüber hinaus? Baue ein Basis-Quiz, lass den AI Copilot es übersetzen, weise jede Version ihrem Shopify Market zu, und Produktdaten lokalisieren sich automatisch. Keine Produktübersetzungs-Arbeit pro Sprache.",
    ],
    faqs: [
      {
        question: "Kann ein Mode-Quiz Retouren reduzieren?",
        answer:
          "Es zielt auf die Hauptursache von Retouren, indem es nach Passform und Geschmack statt nach Beliebtheit empfiehlt. Das Verknüpfen von Antworten mit bestimmten Größen und Farben schickt Kunden zu Teilen, die sie eher behalten.",
      },
      {
        question: "Unterstützt es Produktvarianten wie Größe und Farbe?",
        answer:
          "Ja. Antworten können mit bestimmten Varianten verknüpft werden, und die Ergebnisseite zeigt die passende Größe und Farbe mit direktem in-den-Warenkorb.",
      },
      {
        question: "Kann ich das Quiz in mehreren Sprachen betreiben?",
        answer:
          "Ja. Baue ein Basis-Quiz, übersetze es mit dem AI Copilot und weise jede Version ihrem Shopify Market zu. Produkttitel und Preise lokalisieren sich automatisch über Shopify Markets.",
      },
      {
        question: "Auf welchen Plattformen funktioniert es?",
        answer:
          "Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace und als eigenständiges gehostetes Quiz.",
      },
    ],
    related: [
      { label: "Größen- & Passform-Finder-Quiz", href: "/solutions/size-finder/" },
      { label: "Gift-Finder-Quiz", href: "/solutions/gift-finder/" },
      { label: "Quiz-Vorlagen", href: "/templates/" },
      { label: "Quiz für Shopify", href: "/product-recommendation-quiz-shopify/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  coffee: {
    slug: "coffee",
    type: "vertical",
    name: "Kaffee & Tee",
    chip: "Branche",
    title: "Kaffee-Quiz: matche Röstungen mit Geschmack",
    description:
      "Ein Geschmacksprofil-Quiz, das Kunden mit der richtigen Röstung oder Mischung zusammenbringt und Abonnenten onboardet. Kostenloser Plan, Klaviyo- und ReCharge-ready.",
    h1: "Kaffee-Quizze, die Geschmack mit der richtigen Röstung matchen",
    heroSubtitle:
      "Röstung, Herkunft, Zubereitungsmethode, Geschmacksnoten: Ein Kaffee-Quiz verwandelt eine verwirrende Auswahl in eine selbstbewusste Empfehlung und einen neuen Abonnenten.",
    intro: [
      "Kaffee und Tee sind geschmacksgetrieben, und Geschmack ist aus einer Produktliste schwer zu kaufen. Ein kurzes Geschmacksprofil-Quiz fragt nach Röstvorliebe, Zubereitungsmethode und Geschmacksnoten und empfiehlt dann die Mischung, die einem Kunden wirklich schmeckt.",
      "RevenueHunt macht daraus einen Funnel, nicht nur eine Empfehlung. Erfasse E-Mail am Anfang, empfiehl eine Einsteiger-Mischung und verbinde die Ergebnisseite über ReCharge mit einem Subscribe-and-Save-Angebot, mit Röst- und Zubereitungsvorlieben, die mit Klaviyo synchronisiert werden.",
    ],
    quizTypes: [
      {
        title: "Geschmacksprofil-Finder",
        body: "Ein paar Fragen zu Röstung, Körper und Geschmacksnoten ordnen jeden Kunden der Mischung zu, die zu seinem Gaumen passt.",
      },
      {
        title: "Zubereitungsmethoden-Match",
        body: "Espresso, Pour-over, French Press oder Filter: Verzweige nach Methode, sodass Mahlgrad und Mischung dazu passen, wie sie ihren Kaffee tatsächlich zubereiten.",
      },
      {
        title: "Abo-Onboarding",
        body: "Lass das Quiz am Anfang des Funnels laufen, empfiehl eine Einsteiger-Mischung und biete Subscribe-and-Save auf der Ergebnisseite an.",
      },
      {
        title: "Geschenk- oder Probierset-Finder",
        body: "Hilf Geschenkkäufern, ein Probierset oder Geschenkset auszuwählen, ohne den genauen Geschmack des Beschenkten zu kennen.",
      },
    ],
    howItHelps: [
      "Ein Geschmacksprofil ist ein großartiger Grund, nach einer E-Mail zu fragen. Kunden teilen gern Röst- und Zubereitungsvorlieben, um eine Empfehlung zu erhalten, was deine Liste mit vorsegmentierten Abonnenten füllt.",
      "Die Ergebnisseite übernimmt den Verkauf. Empfiehl die passende Mischung, zeige ein mit ReCharge verbundenes Subscribe-and-Save-Angebot und lass Kunden in den Warenkorb legen, ohne das Quiz zu verlassen.",
      "Vorlieben werden zu dauerhaften Segmenten. Das Synchronisieren von Röst- und Zubereitungsmethoden-Tags mit Klaviyo bedeutet, dass jede zukünftige Kampagne einen Dark-Roast-Espresso-Trinker anders ansprechen kann als einen Light-Roast-Pour-over-Fan.",
    ],
    demo: {
      label: "Probier das Kaffee-Quiz aus",
      href: "https://productrecommendationquiz.com/pages/coffee-quiz?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_coffee",
      blurb: "Ein Live-Geschmacks-Match-Kaffee-Quiz in unserem Demo-Shop.",
    },
    faqs: [
      {
        question: "Kann ein Kaffee-Quiz ein Abo empfehlen?",
        answer:
          "Ja. Erfasse E-Mail am Anfang, empfiehl eine Einsteiger-Mischung und richte die Ergebnisseite auf ein mit ReCharge verbundenes Subscribe-and-Save-Angebot aus.",
      },
      {
        question: "Matcht es nach Zubereitungsmethode?",
        answer:
          "Ja. Verzweige nach Zubereitungsmethode, sodass Mahlgrad und Mischung speziell zu Espresso-, Pour-over-, French-Press- oder Filter-Trinkern passen.",
      },
      {
        question: "Wird es meine E-Mail-Liste vergrößern?",
        answer:
          "Ja. Das Geschmacksprofil ist ein starker Grund für Kunden, ihre E-Mail zu teilen, und Antworten synchronisieren sich vorsegmentiert nach Röst- und Zubereitungsvorliebe mit Klaviyo.",
      },
      {
        question: "Funktioniert das für Tee oder andere Getränke?",
        answer:
          "Ja. Derselbe Geschmacksprofil-Ansatz funktioniert für Tee, Wein, Spirituosen und jeden geschmacksgetriebenen Katalog.",
      },
    ],
    related: [
      { label: "Bundle-Builder-Quiz", href: "/solutions/bundle-builder/" },
      { label: "Gift-Finder-Quiz", href: "/solutions/gift-finder/" },
      { label: "Quiz-Vorlagen", href: "/templates/" },
      { label: "Guided-Selling-Quiz", href: "/guided-selling-quiz/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  fitness: {
    slug: "fitness",
    type: "vertical",
    name: "Fitness & Ernährung",
    chip: "Branche",
    title: "Fitness-Quiz für Ausrüstung, Bekleidung & Programme",
    description:
      "Ein zielbasiertes Fitness-Quiz, das die richtige Ausrüstung, Bekleidung oder das richtige Programm aus deinem Katalog empfiehlt. Kostenloser Plan, AI-Builder, Klaviyo-ready.",
    h1: "Fitness-Quizze, die um das Ziel des Kunden herum gebaut sind",
    heroSubtitle:
      "Kraft, Ausdauer, Gewichtsverlust, Regeneration: Ein Fitness-Quiz verwandelt ein Ziel in die richtige Ausrüstung, Bekleidung, Supplements oder das richtige Programm.",
    intro: [
      "Fitness-Kunden starten mit einem Ziel und einem Trainingsstil, nicht mit einem Produkt. Ein zielbasiertes Quiz fragt, worauf sie hinarbeiten, ihr Erfahrungslevel und wie sie trainieren, und empfiehlt dann die passende Ausrüstung, Bekleidung oder das passende Programm.",
      "RevenueHunt baut den Funnel durchgängig auf: Empfiehl die richtigen Produkte aus deinem Katalog, erfasse Ziel und Level des Kunden als zero-party data und folge über Klaviyo mit Inhalten und Angeboten nach, die zu dem passen, worauf er hintrainiert.",
    ],
    quizTypes: [
      {
        title: "Zielbasierter Finder",
        body: "Kraft, Ausdauer, Mobilität oder Gewichtsverlust: Jedes Ziel pusht die passende Ausrüstung, Bekleidung oder Supplements hoch.",
      },
      {
        title: "Erfahrungslevel-Match",
        body: "Verzweige nach Anfänger, Fortgeschritten oder Profi, sodass Empfehlungen dorthin passen, wo der Kunde tatsächlich steht.",
      },
      {
        title: "Programm- oder Plan-Finder",
        body: "Empfiehl das richtige Trainingsprogramm oder die richtige Coaching-Stufe basierend auf Ziel, Zeitplan und Equipment-Zugang.",
      },
      {
        title: "Kit- oder Bundle-Builder",
        body: "Stelle ein komplettes Kit zusammen (Bekleidung plus Ausrüstung plus Supplement) mit Empfehlungsslots für einen höheren durchschnittlichen Bestellwert.",
      },
    ],
    howItHelps: [
      "Ziel und Erfahrungslevel sind die zwei Fragen, die alles verändern. Sie von Anfang an zu stellen bedeutet, dass ein Anfänger, der an Mobilität arbeitet, nie ein fortgeschrittenes Kraft-Produkt als Top-Ergebnis sieht.",
      "Ein komplettes Kit schlägt einen einzelnen Artikel. Empfehlungsslots lassen dich Bekleidung, Ausrüstung und ein Supplement zusammen liefern, was den durchschnittlichen Bestellwert hebt, ohne aufdringlich zu wirken.",
      "Das Ziel, das du erfasst, treibt alles nach dem Verkauf an. Das Synchronisieren von Ziel- und Level-Tags mit Klaviyo lässt dich Trainingsinhalte und Nachbestell-Erinnerungen senden, die zum tatsächlichen Programm jedes Kunden passen.",
    ],
    faqs: [
      {
        question: "Kann ein Fitness-Quiz ein Programm empfehlen, nicht nur Produkte?",
        answer:
          "Ja. Verknüpfe Antworten mit einem Trainingsprogramm oder einer Coaching-Stufe genauso, wie du Produkte verknüpfst, und die Ergebnisseite kann den richtigen Plan basierend auf Ziel und Zeitplan empfehlen.",
      },
      {
        question: "Kann es ein komplettes Kit in einem Ergebnis bauen?",
        answer:
          "Ja. Empfehlungsslots reservieren einen Platz für jede Rolle (Bekleidung, Ausrüstung, Supplement), sodass Kunden ein komplettes Kit mit in-den-Warenkorb für das Set erhalten.",
      },
      {
        question: "Wie personalisiert es für Anfänger vs. Fortgeschrittene?",
        answer:
          "Verzweige mit bedingter Logik nach Erfahrungslevel, sodass Anfänger und fortgeschrittene Athleten unterschiedliche Fragen und unterschiedliche Empfehlungen sehen.",
      },
      {
        question: "Kann ich per E-Mail basierend auf Zielen nachfassen?",
        answer:
          "Ja. Ziele und Level synchronisieren sich als Kunden-Tags mit Klaviyo, Mailchimp, Omnisend und mehr für zielgerechtes E-Mail-Follow-up.",
      },
    ],
    related: [
      { label: "Supplement-Quiz", href: "/solutions/supplements/" },
      { label: "Bundle-Builder-Quiz", href: "/solutions/bundle-builder/" },
      { label: "Quiz-Vorlagen", href: "/templates/" },
      { label: "Guided-Selling-Quiz", href: "/guided-selling-quiz/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "pet-products": {
    slug: "pet-products",
    type: "vertical",
    name: "Tierprodukte",
    chip: "Branche",
    title: "Tierprodukt-Quiz für deinen Shop",
    description:
      "Ein Tier-Quiz, das Futter, Supplements oder Ausrüstung nach Tierart, Rasse, Alter und Allergien empfiehlt. Ausschlüsse handhaben Ernährungsformen. Kostenlos starten.",
    h1: "Tier-Quizze, die Produkte mit jedem Tier zusammenbringen",
    heroSubtitle:
      "Tierart, Rasse, Alter, Aktivität, Allergien: Ein Tier-Quiz verwandelt diese Details in das richtige Futter, Supplement oder die richtige Ausrüstung und respektiert jede Ernährungseinschränkung.",
    intro: [
      "Tierhalter kaufen für ein Tier, nicht für eine Kategorie, und das richtige Produkt hängt von Tierart, Rassengröße, Alter und Allergien ab. Ein Tier-Quiz erfasst diese Details einmal und empfiehlt Produkte, die zu jeder Dimension gleichzeitig passen.",
      "RevenueHunt übernimmt den schwierigen Teil: Ausschlüsse setzen Allergie- und Ernährungsregeln sauber durch, die Ergebnisseite empfiehlt die richtige Formel oder das richtige Kit, und eine Ergebnis-E-Mail fasst die Empfehlung für Halter zusammen, die nicht sofort kaufen.",
    ],
    quizTypes: [
      {
        title: "Tierfutter-Finder",
        body: "Tierart, Rassengröße, Alter und Aktivitätslevel ordnen die richtige Formel zu, wobei Allergien durch Ausschlüsse gehandhabt werden.",
      },
      {
        title: "Supplement- oder Gesundheits-Match",
        body: "Empfiehl Gelenk-, Haut- oder Verdauungs-Unterstützung basierend auf Alter und angegebenen Anliegen.",
      },
      {
        title: "Ausrüstungs- und Zubehör-Finder",
        body: "Matche Geschirre, Betten oder Spielzeug mit Rassengröße und Verhalten, sodass Halter beim ersten Mal die richtige Passform wählen.",
      },
      {
        title: "Starter-Kit für Neu-Halter",
        body: "Stelle mit Empfehlungsslots ein komplettes Starter-Kit für neue Tierhalter zusammen.",
      },
    ],
    howItHelps: [
      "Allergien sind eine harte Einschränkung, und Ausschlüsse setzen sie perfekt durch. Das Angeben einer Hühner-Allergie entfernt jede Formel auf Hühnerbasis aus den Ergebnissen, selbst solche, die bei Rasse und Alter gut abgeschnitten haben.",
      "Ein Kunden-Tag wie small-dog-owner ist Gold für die Kundenbindung. Das Synchronisieren mit Klaviyo lässt dich rassenrelevante Inhalte, Nachbestell-Erinnerungen und Angebote senden, die wirklich zum Tier passen.",
      "Ergebnis-E-Mails fangen die Kunden ab, die abspringen. Halter recherchieren oft, bevor sie kaufen, also bringt eine automatische E-Mail, die die Empfehlung zusammenfasst, sie zurück, um den Kauf abzuschließen.",
    ],
    demo: {
      label: "Probier den Hundefutter-Finder aus",
      href: "https://productrecommendationquiz.com/pages/dog-food?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_pet_products",
      blurb: "Ein Live-Hundefutter-Finder mit mehreren Attributen in unserem Demo-Shop.",
    },
    faqs: [
      {
        question: "Wie handhabt ein Tier-Quiz Allergien?",
        answer:
          "Mit Ausschlüssen. Das Verknüpfen einer Allergie-Antwort mit einer Ausschlussliste entfernt jedes kollidierende Produkt aus den Ergebnissen, egal wie gut es bei anderen Fragen abgeschnitten hat.",
      },
      {
        question: "Kann es nach Rasse und Alter matchen?",
        answer:
          "Ja. Jede Antwort (Tierart, Rassengröße, Alter, Aktivitätslevel) pusht die passenden Produkte hoch, sodass Empfehlungen zum spezifischen Tier passen.",
      },
      {
        question: "Kann ich die Empfehlung per E-Mail senden, wenn sie nicht kaufen?",
        answer:
          "Ja. Ergebnis-E-Mails fassen die Empfehlung automatisch zusammen, was für Halter nützlich ist, die vor dem Kauf recherchieren.",
      },
      {
        question: "Segmentiert es Kunden fürs Marketing?",
        answer:
          "Ja. Kunden-Tags wie small-dog-owner synchronisieren sich mit Klaviyo und anderen Tools für gezielte, tierrelevante Kampagnen.",
      },
    ],
    related: [
      { label: "Bundle-Builder-Quiz", href: "/solutions/bundle-builder/" },
      { label: "Produkt-Finder-Quiz", href: "/product-finder-quiz/" },
      { label: "Quiz-Vorlagen", href: "/templates/" },
      { label: "Quiz für WooCommerce", href: "/product-recommendation-quiz-woocommerce/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  cbd: {
    slug: "cbd",
    type: "vertical",
    name: "CBD & Wellness",
    chip: "Branche",
    title: "CBD-Produkt-Finder-Quiz für deinen Shop",
    description:
      "Ein CBD-Quiz, das Kunden nach Ziel und Erfahrung zum richtigen Format und zur richtigen Stärke führt. Klärt auf, während es verkauft. Kostenloser Plan, plattformübergreifend.",
    h1: "CBD-Quizze, die Kunden zum richtigen Format führen",
    heroSubtitle:
      "Format, Stärke und Ziel verwirren die meisten CBD-Kunden. Ein Quiz klärt auf, während es verkauft, und empfiehlt das richtige Produkt mit Sicherheit.",
    intro: [
      "CBD und Wellness sind Kategorien, in denen die meisten Kunden wirklich nicht wissen, was sie kaufen sollen: Öl oder Gummibärchen, welche Stärke, für welches Ziel. Ein Quiz verwandelt diese Unsicherheit in eine klare Empfehlung, indem es nach Ziel, Erfahrungslevel und Format-Vorliebe fragt.",
      "RevenueHunt ist für genau solche Erstkäufer einer Kategorie gemacht. Das Quiz klärt auf, während es fragt, empfiehlt das richtige Format und die richtige Stärke aus deinem Katalog und erfasst Ziele als zero-party data, die dir gehören und die du bewerben kannst.",
    ],
    quizTypes: [
      {
        title: "Zielbasierter Finder",
        body: "Schlaf, Ruhe, Regeneration oder Fokus: Jedes Ziel pusht die passenden Produkte und Stärken hoch.",
      },
      {
        title: "Format- und Stärken-Match",
        body: "Verzweige nach Erfahrung und Format-Vorliebe (Öl, Gummibärchen, Topical, Kapsel), sodass Anfänger einen zugänglichen Startpunkt erhalten.",
      },
      {
        title: "Routine- oder Pflege-Builder",
        body: "Empfiehl eine Tag- und Nacht-Kombination mit Empfehlungsslots für eine komplette Routine.",
      },
      {
        title: "Aufklärungs-orientiertes Quiz",
        body: "Nutze Statement-Slides zwischen den Fragen, um die Grundlagen zu vermitteln, was vor der Empfehlung Vertrauen aufbaut.",
      },
    ],
    howItHelps: [
      "Erstkäufer einer Kategorie brauchen Aufklärung, nicht nur Filterung. Statement-Slides lassen dich Stärke und Format in einfacher Sprache erklären, während der Kunde durchgeht, sodass die Empfehlung mit Sicherheit ankommt.",
      "Das Erfahrungslevel mit der Stärke abzugleichen schützt das Erlebnis. Ein Erstkäufer bekommt einen zugänglichen Startpunkt statt des stärksten Produkts, was weniger enttäuschte Retouren bedeutet.",
      "Im Quiz erfasste Ziele werden zu deinen nützlichsten Segmenten. Das Synchronisieren von goal:sleep oder goal:recovery mit Klaviyo treibt E-Mails an, die zu dem passen, was jeder Kunde tatsächlich lösen will.",
    ],
    demo: {
      label: "Probier den CBD-Produkt-Finder aus",
      href: "https://productrecommendationquiz.com/pages/cbd-product-finder?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_cbd",
      blurb: "Ein Live-CBD-Produkt-Finder in unserem Demo-Shop.",
    },
    faqs: [
      {
        question: "Kann ein CBD-Quiz die richtige Stärke empfehlen?",
        answer:
          "Ja. Verzweige nach Erfahrungslevel und Ziel, verknüpfe dann jeden Pfad mit der passenden Stärke, sodass Anfänger und erfahrene Nutzer unterschiedliche Empfehlungen erhalten.",
      },
      {
        question: "Kann das Quiz Kunden unterwegs aufklären?",
        answer:
          "Ja. Statement-Slides zeigen Text zwischen den Fragen ohne erforderliche Eingabe, sodass du Format- und Stärke-Grundlagen direkt vermitteln kannst.",
      },
      {
        question: "Funktioniert es für umfassendere Wellness-Produkte?",
        answer:
          "Ja. Derselbe Ziel-und-Format-Ansatz funktioniert für Adaptogene, Pilze und andere Wellness-Kategorien, in denen Kunden Orientierung brauchen.",
      },
      {
        question: "Welche Plattformen unterstützt es?",
        answer:
          "Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace und als eigenständiges gehostetes Quiz.",
      },
    ],
    related: [
      { label: "Supplement-Quiz", href: "/solutions/supplements/" },
      { label: "Routine-Builder-Quiz", href: "/solutions/routine-builder/" },
      { label: "Produkt-Finder-Quiz", href: "/product-finder-quiz/" },
      { label: "Quiz-Vorlagen", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  jewelry: {
    slug: "jewelry",
    type: "vertical",
    name: "Schmuck & Accessoires",
    chip: "Branche",
    title: "Schmuck-Quiz: hilf Kunden, das Stück zu finden",
    description:
      "Ein Schmuck-Quiz, das Stil, Metall und Anlass mit dem richtigen Stück matcht und Geschenkkäufern hilft, mit Sicherheit zu wählen. Kostenlos starten.",
    h1: "Schmuck-Quizze, die Stil mit dem richtigen Stück matchen",
    heroSubtitle:
      "Metall, Stil, Anlass, Budget: Ein Schmuck-Quiz führt Kunden und Geschenkkäufer zu einem Stück, das sie lieben werden, statt zu einem endlosen Raster.",
    intro: [
      "Schmuck ist emotional und oft ein Geschenk, was ihn schwer aus einem Raster zu kaufen macht. Ein Quiz fragt nach Stil, Metall-Vorliebe, Anlass und Budget und empfiehlt dann passende Stücke, was Stöbern in eine selbstbewusste Wahl verwandelt.",
      "RevenueHunt empfiehlt echte Stücke und Varianten aus deinem Katalog, handhabt Geschenkkäufer, die den Geschmack des Beschenkten nicht kennen, und erfasst Vorlieben fürs Follow-up. Die Ergebnisseite konvertiert mit direktem in-den-Warenkorb und einer optionalen Geschenknachricht.",
    ],
    quizTypes: [
      {
        title: "Stil-Finder",
        body: "Fragen zu Ästhetik, Metall und Anlass bringen die Stücke zum Vorschein, die zum Geschmack eines Kunden passen.",
      },
      {
        title: "Gift-Finder",
        body: "Frage nach dem Beschenkten und dem Anlass, und empfiehl dann eine kuratierte Auswahl oder ein Geschenkset für Käufer, die den Katalog nicht kennen.",
      },
      {
        title: "Budget-bewusstes Match",
        body: "Beziehe das Budget in die Empfehlung ein, sodass jeder Kunde Stücke in seiner Preisklasse sieht.",
      },
      {
        title: "Verlobungs- oder Meilenstein-Finder",
        body: "Führe Käufe mit hoher Bedeutung wie Verlobungs- oder Jubiläumsstücke mit einem fokussierten, beruhigenden Ablauf.",
      },
    ],
    howItHelps: [
      "Geschenkkäufer sind ein riesiger Anteil des Schmuck-Traffics und am wenigsten sicher, was sie wollen. Ein Quiz, das nach dem Beschenkten statt nach dem Katalog fragt, verwandelt diese Unsicherheit in einen selbstbewussten Geschenkkauf.",
      "Budget ist eine Frage, die die meisten Raster ignorieren. Es in die Empfehlung einzubeziehen bedeutet, dass Kunden Stücke sehen, die sie tatsächlich kaufen können, was Absprünge reduziert und Vertrauen aufbaut.",
      "Vorlieben und Anlässe synchronisieren sich mit deinem E-Mail-Tool, sodass du rund um Jubiläen, Nachbestellungen und passende Stücke mit Kampagnen nachfassen kannst, die persönlich wirken.",
    ],
    faqs: [
      {
        question: "Kann ein Schmuck-Quiz Geschenkkäufern helfen?",
        answer:
          "Ja. Frage nach dem Beschenkten und dem Anlass statt nach dem Katalog, und empfiehl dann eine kuratierte Auswahl oder ein Geschenkset, was ideal für Käufer ist, die nicht genau wissen, was sie wollen.",
      },
      {
        question: "Kann es das Budget einbeziehen?",
        answer:
          "Ja. Füge eine Budget-Frage hinzu und gewichte oder filtere Empfehlungen, sodass Kunden nur Stücke in ihrer Preisklasse sehen.",
      },
      {
        question: "Unterstützt es Varianten wie Metall und Größe?",
        answer:
          "Ja. Antworten können mit bestimmten Varianten verknüpft werden, sodass die Ergebnisseite das richtige Metall und die richtige Größe mit in-den-Warenkorb zeigt.",
      },
      {
        question: "Kann ich Leads fürs Follow-up erfassen?",
        answer:
          "Ja. Das Quiz erfasst E-Mail und Vorlieben als zero-party data und synchronisiert sie mit Klaviyo und anderen Tools für anlassbasiertes Follow-up.",
      },
    ],
    related: [
      { label: "Gift-Finder-Quiz", href: "/solutions/gift-finder/" },
      { label: "Mode- & Bekleidungs-Quiz", href: "/solutions/fashion/" },
      { label: "Quiz-Vorlagen", href: "/templates/" },
      { label: "Produkt-Finder-Quiz", href: "/product-finder-quiz/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "home-goods": {
    slug: "home-goods",
    type: "vertical",
    name: "Wohnen & Deko",
    chip: "Branche",
    title: "Wohn- & Deko-Produkt-Quiz für deinen Shop",
    description:
      "Ein Wohn- und Deko-Quiz, das Möbel und Deko mit dem Raum und Stil eines Kunden matcht. Reduziert Retouren bei sperrigen Artikeln. Kostenlos starten.",
    h1: "Wohn-Quizze, die Produkte mit dem Raum matchen",
    heroSubtitle:
      "Stil, Raum, Größe und Budget: Ein Wohn- und Deko-Quiz führt Kunden zu Stücken, die in ihren Raum passen, was am meisten zählt, wenn Artikel sperrig sind.",
    intro: [
      "Wohnen und Deko sind mit hoher Bedeutung verbunden und teuer zu retournieren. Kunden müssen wissen, dass ein Stück in ihren Raum und Stil passt, bevor sie sich festlegen. Ein Quiz fragt nach Raum, Stil, Maßen und Budget und empfiehlt dann passende Stücke.",
      "RevenueHunt empfiehlt echte Produkte aus deinem Katalog, stellt mit Empfehlungsslots abgestimmte Sets zusammen und erfasst Stil-Vorlieben fürs Follow-up, sodass aus einem einmaligen Möbelkäufer ein wiederkehrender Deko-Kunde wird.",
    ],
    quizTypes: [
      {
        title: "Stil-Finder",
        body: "Fragen zu Ästhetik und Raum bringen Möbel und Deko zum Vorschein, die zum Geschmack eines Kunden passen.",
      },
      {
        title: "Raum- oder Flächen-Match",
        body: "Beziehe Raumtyp und Maße in Empfehlungen ein, sodass Stücke tatsächlich in den Raum passen.",
      },
      {
        title: "Abgestimmter Set-Builder",
        body: "Stelle mit Empfehlungsslots ein zusammenpassendes Set zusammen (Sofa plus Teppich plus Beleuchtung) für einen kompletten Look.",
      },
      {
        title: "Budget-bewusster Finder",
        body: "Beziehe das Budget ein, sodass Kunden Stücke in ihrer Preisklasse sehen und weniger abspringen.",
      },
    ],
    howItHelps: [
      "Passform und Maßstab treiben Retouren bei sperrigen Artikeln. Nach Raummaßen zu fragen und passende Stücke zu empfehlen reduziert die kostspieligen Fehler, die zu Möbel-Retouren führen.",
      "Ein abgestimmtes Set hebt den Bestellwert ganz natürlich. Empfehlungsslots lassen dich einen kompletten Look statt eines einzelnen Stücks vorschlagen, was perfekt zum Deko-Shopping passt.",
      "Stil-Vorlieben sind dauerhaft. Die Ästhetik eines Kunden zu erfassen und mit deinem E-Mail-Tool zu synchronisieren bedeutet, dass saisonale und Neukollektions-Kampagnen am Geschmack ausgerichtet statt an alle verschickt werden können.",
    ],
    faqs: [
      {
        question: "Kann ein Wohn-Quiz ein abgestimmtes Set empfehlen?",
        answer:
          "Ja. Empfehlungsslots reservieren einen Platz für jede Rolle (Sitzmöbel, Teppich, Beleuchtung), sodass die Ergebnisseite ein komplettes, zusammenpassendes Set mit in-den-Warenkorb liefert.",
      },
      {
        question: "Kann es die Raumgröße einbeziehen?",
        answer:
          "Ja. Füge Raum- und Maß-Fragen hinzu und verknüpfe Antworten mit passenden Stücken, was entscheidend ist, um Retouren bei großen Artikeln zu reduzieren.",
      },
      {
        question: "Hilft es beim Budget?",
        answer:
          "Ja. Füge eine Budget-Frage hinzu, sodass Empfehlungen in der Preisklasse des Kunden bleiben.",
      },
      {
        question: "Auf welchen Plattformen funktioniert es?",
        answer:
          "Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace und als eigenständiges gehostetes Quiz.",
      },
    ],
    related: [
      { label: "Bundle-Builder-Quiz", href: "/solutions/bundle-builder/" },
      { label: "Gift-Finder-Quiz", href: "/solutions/gift-finder/" },
      { label: "Quiz-Vorlagen", href: "/templates/" },
      { label: "Guided-Selling-Quiz", href: "/guided-selling-quiz/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  // ----------------------------------------------------------------- use-cases
  "gift-finder": {
    slug: "gift-finder",
    type: "use-case",
    name: "Gift-Finder",
    chip: "Quiz-Typ",
    title: "Gift-Finder-Quiz für deinen Online-Shop",
    description:
      "Ein Gift-Finder-Quiz, das nach dem Beschenkten fragt und ein kuratiertes Geschenk liefert, was den AOV für Käufer hebt, die den Katalog nicht kennen. Kostenlos starten.",
    h1: "Gift-Finder-Quizze, die Rätselraten in einen Verkauf verwandeln",
    heroSubtitle:
      "Geschenkkäufer haben keine Meinung zu deinem Katalog und große Angst, falsch zu wählen. Ein Gift-Finder fragt nach dem Beschenkten und empfiehlt das perfekte Geschenk.",
    intro: [
      "Geschenkkäufer sind die Kunden, die am leichtesten zu verlieren und am leichtesten zu unterstützen sind. Sie kennen deine Produkte nicht und haben Angst, falsch zu wählen. Ein Gift-Finder-Quiz stellt drei bis fünf Fragen zum Beschenkten (Beziehung, Alter, Interessen, Budget) und liefert ein kuratiertes Geschenk, das sie mit Sicherheit kaufen können.",
      "RevenueHunt macht den Gift-Finder zu einem der Quiz-Typen mit der höchsten Conversion. Bündle mehrere Produkte zu einem einzelnen Geschenk-Ergebnis für einen höheren Bestellwert, füge eine Geschenknachricht und einen Rabatt auf der Ergebnisseite hinzu und erfasse die E-Mail des Käufers für den nächsten Anlass.",
    ],
    quizTypes: [
      {
        title: "Beschenkten-geführter Finder",
        body: "Frage nach dem Beschenkten (Beziehung, Alter, Interessen) statt nach dem Katalog, sodass Käufer, die nichts über deine Produkte wissen, trotzdem einen tollen Treffer erhalten.",
      },
      {
        title: "Anlass-Finder",
        body: "Verzweige nach Anlass (Geburtstag, Feiertag, Jubiläum), sodass die Empfehlung zum Moment passt.",
      },
      {
        title: "Geschenk-Bundle-Builder",
        body: "Kombiniere mit Empfehlungsslots mehrere Produkte zu einem einzelnen kuratierten Geschenkset, was den durchschnittlichen Bestellwert hebt.",
      },
    ],
    howItHelps: [
      "Der Trick ist, nach dem Beschenkten zu fragen, nicht nach dem Katalog. Ein Käufer, der drei Fragen über seine Schwester beantworten kann, erhält eine selbstbewusste Empfehlung, ohne je dein Produktsortiment verstehen zu müssen.",
      "Geschenk-Bundles heben den Bestellwert ohne Druck. Ein kuratiertes Set als ein Ergebnis zu liefern wirkt hilfreich, nicht aufdringlich, und Kunden kaufen gern das Ganze.",
      "Jeder Geschenkkäufer ist ein zukünftiger Kunde. Seine E-Mail und den Anlass zu erfassen lässt dich ihn zum nächsten Geburtstag oder Feiertag mit einem Vorsprung bei der Empfehlung zurückholen.",
    ],
    faqs: [
      {
        question: "Wie funktioniert ein Gift-Finder-Quiz?",
        answer:
          "Es stellt drei bis fünf Fragen zum Beschenkten und Anlass und empfiehlt dann ein kuratiertes Geschenk oder Geschenkset, sodass Käufer, die deinen Katalog nicht kennen, trotzdem selbstbewusst wählen können.",
      },
      {
        question: "Kann es Produkte zu einem Geschenk bündeln?",
        answer:
          "Ja. Empfehlungsslots kombinieren mehrere Produkte zu einem einzelnen kuratierten Geschenkset, was den durchschnittlichen Bestellwert hebt.",
      },
      {
        question: "Kann ich einen Rabatt oder eine Geschenknachricht hinzufügen?",
        answer:
          "Ja. Die Ergebnisseite unterstützt Rabattcode- und Content-Blöcke, die du basierend auf den Antworten des Kunden zeigen kannst.",
      },
      {
        question: "Erfasst es Leads für zukünftige Anlässe?",
        answer:
          "Ja. Das Quiz erfasst E-Mail und den Anlass, die sich mit Klaviyo und anderen Tools synchronisieren, sodass du vor dem nächsten Geschenkmoment erneut ansprechen kannst.",
      },
    ],
    related: [
      { label: "Schmuck-Quiz", href: "/solutions/jewelry/" },
      { label: "Beauty- & Kosmetik-Quiz", href: "/solutions/beauty/" },
      { label: "Produkt-Finder-Quiz", href: "/product-finder-quiz/" },
      { label: "Quiz-Vorlagen", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "size-finder": {
    slug: "size-finder",
    type: "use-case",
    name: "Größen- & Passform-Finder",
    chip: "Quiz-Typ",
    title: "Größen- & Passform-Finder-Quiz für E-Commerce",
    description:
      "Ein Größen- und Passform-Finder-Quiz, das die richtige Größe oder ein kompatibles Produkt empfiehlt und Retouren reduziert. Löst Multi-Attribut-Passform. Kostenlos starten.",
    h1: "Größen- und Passform-Finder-Quizze, die Retouren reduzieren",
    heroSubtitle:
      "Falsche Größe ist die Retoure Nummer eins. Ein Passform-Finder stellt die richtigen Fragen und empfiehlt die passende Größe oder das kompatible Produkt.",
    intro: [
      "Passform und Kompatibilität sind dort, wo der E-Commerce Geld verliert: Falschgrößen-Retouren bei Bekleidung und Schuhen und Fehlpassform-Retouren bei allem, was zu etwas passen muss, das der Kunde bereits besitzt. Ein Passform-Finder-Quiz löst diese Einschränkungen vor der Bestellung, nicht danach.",
      "RevenueHunt handhabt Multi-Attribut-Passform sauber. Verknüpfe Antworten mit bestimmten Varianten und nutze Ausschlüsse für harte Einschränkungen, sodass die Maße und Anforderungen eines Kunden auf der Ergebnisseite zu einer korrekten Größe oder einem kompatiblen Produkt aufgelöst werden.",
    ],
    quizTypes: [
      {
        title: "Größen-Finder",
        body: "Fragen zu Maßen und Passform-Vorliebe grenzen auf die richtige Größe ein, die häufigste Ursache von Retouren.",
      },
      {
        title: "Kompatibilitäts-Finder",
        body: "Löse Multi-Attribut-Einschränkungen (Gerätemodell, Halterungstyp, Zubehör) auf das eine passende Produkt herunter.",
      },
      {
        title: "Passform-Vorlieben-Match",
        body: "Verzweige nach Passform-Vorliebe (slim, regular, relaxed), sodass die Empfehlung dazu passt, wie der Kunde es gerne trägt.",
      },
    ],
    howItHelps: [
      "Falschgrößen-Retouren sind der größte einzelne Kostenfaktor, den ein Passform-Finder angeht. Von Anfang an nach Maßen und Passform-Vorliebe zu fragen und sie mit bestimmten Varianten zu verknüpfen schickt Kunden zu der Größe, die sie behalten.",
      "Kompatibilität ist nur eine Frage von Einschränkungen, und Ausschlüsse handhaben sie perfekt. Ein Kunde, der sein Gerät und seine Anforderungen angibt, bekommt genau das kompatible Produkt, wobei alles Inkompatible entfernt wird.",
      "Sicherheit konvertiert. Wenn das Quiz einem Kunden sagt, das ist deine Größe, mit einem klaren Grund, legt er in den Warenkorb, statt zu einer Größentabelle abzuspringen und nie wiederzukommen.",
    ],
    demo: {
      label: "Probier den Kompatibilitäts-Finder aus",
      href: "https://productrecommendationquiz.com/pages/bicycle-quiz?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_size_finder",
      blurb: "Ein Live-Kompatibilitäts-Finder in unserem Demo-Shop, der einen technischen Match auflöst.",
    },
    faqs: [
      {
        question: "Kann ein Passform-Finder Falschgrößen-Retouren reduzieren?",
        answer:
          "Ja. Nach Maßen und Passform-Vorliebe zu fragen und Antworten mit bestimmten Varianten zu verknüpfen empfiehlt die Größe, die ein Kunde am ehesten behält, was Retouren direkt reduziert.",
      },
      {
        question: "Wie handhabt es Kompatibilität?",
        answer:
          "Mit Ausschlüssen und Varianten-Verknüpfung. Ein Kunde gibt seine Einschränkungen an (Gerät, Halterung, Zubehör), und das Quiz liefert nur das kompatible Produkt, wobei alles Unpassende entfernt wird.",
      },
      {
        question: "Funktioniert es für Schuhe und Bekleidung?",
        answer:
          "Ja. Größen- und Passform-Finder gehören zu den stärksten Anwendungsfällen für Bekleidung, Schuhe und alles, wo die Passform Retouren treibt.",
      },
      {
        question: "Können die Ergebnisse die Empfehlung erklären?",
        answer:
          "Ja. Content-Blöcke auf der Ergebnisseite können antwortspezifischen Text zeigen, sodass du erklären kannst, warum eine bestimmte Größe oder ein bestimmtes Produkt die richtige Passform ist.",
      },
    ],
    related: [
      { label: "Mode- & Bekleidungs-Quiz", href: "/solutions/fashion/" },
      { label: "Produkt-Finder-Quiz", href: "/product-finder-quiz/" },
      { label: "Quiz-Vorlagen", href: "/templates/" },
      { label: "Quiz für Shopify", href: "/product-recommendation-quiz-shopify/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "shade-finder": {
    slug: "shade-finder",
    type: "use-case",
    name: "Farbton-Matching",
    chip: "Quiz-Typ",
    title: "Shade-Finder-Quiz: matche Foundation & Farbe",
    description:
      "Ein Shade-Finder-Quiz, das Foundation, Concealer oder Farbe nach Unterton und Tiefe matcht, mit Bild-Auswahl-Antworten. Reduziert Retouren. Kostenlos starten.",
    h1: "Shade-Finder-Quizze, die Farbe mit Sicherheit matchen",
    heroSubtitle:
      "Make-up online zu kaufen bedeutet, den eigenen Farbton zu raten. Ein Shade-Finder fragt nach Unterton und Tiefe und liefert den exakten Match, was Retouren reduziert.",
    intro: [
      "Farbton-Matching ist die folgenschwerste Frage im Beauty-E-Commerce. Liegst du falsch, kommt das Produkt zurück. Ein Shade-Finder-Quiz fragt nach Unterton, Tiefe, Deckkraft und Finish und empfiehlt dann den exakten Farbton aus deinem Katalog mit Bild-Auswahl-Antworten, die auf dem Smartphone schnell sind.",
      "RevenueHunt verknüpft jede Antwort mit bestimmten Farbton-Varianten und schließt den Rest aus, sodass die Ergebnisseite einen selbstbewussten Match zeigt statt einer Swatch-Wand. Das Farbton-Profil des Kunden synchronisiert sich mit deinem E-Mail-Tool für Nachbestellungen und passende Produkte.",
    ],
    quizTypes: [
      {
        title: "Foundation-Farbton-Match",
        body: "Fragen zu Unterton und Tiefe ordnen den exakten Foundation- oder Concealer-Farbton zu, mit Bild-Auswahl-Antworten für Tempo.",
      },
      {
        title: "Lippen- oder Farb-Match",
        body: "Matche Lippen-, Rouge- oder Augenfarbe mit dem Coloring und der Vorliebe eines Kunden.",
      },
      {
        title: "Haarfarben-Match",
        body: "Führe Heim-Haarfarbe anhand von aktuellem Farbton, Zielfarbton und Unterton zur richtigen Formel.",
      },
    ],
    howItHelps: [
      "Bild-Auswahl-Antworten tragen Farbton-Fragen. Kunden ein Bild eines Untertons oder Finishs antippen zu lassen schlägt es, sie um eine Beschreibung zu bitten, und hält die Abschlussrate auf den mobilen Bildschirmen hoch, auf denen Beauty verkauft wird.",
      "Ausschlüsse verwandeln eine Swatch-Wand in eine Antwort. Unterton und Tiefe mit bestimmten Varianten zu verknüpfen und den Rest auszuschließen bedeutet, dass die Ergebnisseite den Match zeigt, nicht das ganze Sortiment.",
      "Der Farbton ist ein Profil, das es wert ist, behalten zu werden. Den passenden Farbton eines Kunden mit Klaviyo zu synchronisieren lässt dich Nachbestellungen und abgestimmte Produkte an genau die richtigen Leute vermarkten.",
    ],
    demo: {
      label: "Probier das Shade-Match-Quiz aus",
      href: "https://productrecommendationquiz.com/pages/foundation-match?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_shade_finder",
      blurb: "Ein bildbasiertes Live-Foundation-Shade-Match-Quiz in unserem Demo-Shop.",
    },
    faqs: [
      {
        question: "Wie matcht ein Shade-Finder Foundation?",
        answer:
          "Frage nach Unterton, Tiefe, Deckkraft und Finish, verknüpfe jede Antwort mit den passenden Farbton-Varianten und schließe den Rest aus. Die Ergebnisseite zeigt den exakten Match mit in-den-Warenkorb.",
      },
      {
        question: "Nutzt es Bild-Auswahl-Antworten?",
        answer:
          "Ja. Auswahlmöglichkeiten können anklickbare Bilder sein, was ideal für Unterton- und Finish-Fragen ist und die mobile Abschlussrate steigert.",
      },
      {
        question: "Kann es farbtonbedingte Retouren reduzieren?",
        answer:
          "Ja. Einen selbstbewussten Match statt einer Swatch-Wand zu empfehlen schickt Kunden zu dem Farbton, den sie am ehesten behalten.",
      },
      {
        question: "Funktioniert es über Foundation hinaus?",
        answer:
          "Ja. Derselbe Ansatz matcht Lippenfarbe, Rouge, Augenfarbe und Heim-Haarfarbe.",
      },
    ],
    related: [
      { label: "Beauty- & Kosmetik-Quiz", href: "/solutions/beauty/" },
      { label: "Hautpflege-Quiz", href: "/solutions/skincare/" },
      { label: "Für Beauty-Marken", href: "/for-beauty-brands/" },
      { label: "Quiz-Vorlagen", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "routine-builder": {
    slug: "routine-builder",
    type: "use-case",
    name: "Routine-Builder",
    chip: "Quiz-Typ",
    title: "Routine-Builder-Quiz für Hautpflege & mehr",
    description:
      "Ein Routine-Builder-Quiz, das eine komplette mehrstufige Routine liefert, nicht ein einzelnes Produkt, mithilfe von Empfehlungsslots. Hebt den AOV. Kostenlos starten.",
    h1: "Routine-Builder-Quizze, die das ganze Set verkaufen",
    heroSubtitle:
      "Ein Produkt ist ein Verkauf. Eine Routine ist ein Warenkorb und eine Gewohnheit. Ein Routine-Builder liefert ein komplettes mehrstufiges Set, das auf jeden Kunden abgestimmt ist.",
    intro: [
      "Manche Produkte werden als System gekauft, nicht als einzelner Artikel: eine Hautpflege-Routine, ein Supplement-Stack, eine Haarpflege-Routine. Ein Routine-Builder-Quiz liefert das ganze Set, mit einem reservierten Platz für jeden Schritt, sodass Kunden die komplette Routine kaufen statt eines Produkts.",
      "RevenueHunt macht das mit Empfehlungsslots. Reserviere einen Slot für jede Rolle (Cleanser, Treatment, Moisturizer, SPF oder was auch immer deine Kategorie braucht), und das Quiz füllt jeden mit dem besten Match, zeigt dann die komplette Routine nach Schritt gruppiert mit in-den-Warenkorb für das Set.",
    ],
    quizTypes: [
      {
        title: "Schritt-basierte Routine",
        body: "Reserviere einen Slot für jeden Schritt und fülle ihn mit dem am besten passenden Produkt, sodass jeder Kunde eine komplette, stimmige Routine erhält.",
      },
      {
        title: "Stack-Builder",
        body: "Stelle einen Multi-Produkt-Stack zusammen (großartig für Supplements und Wellness) mit einer Rolle für jedes Produkt.",
      },
      {
        title: "Tag- und Nacht-Routine",
        body: "Liefere mit Anzeige-Logik auf der Ergebnisseite separate AM- und PM-Routinen aus einem Quiz.",
      },
    ],
    howItHelps: [
      "Empfehlungsslots sind der Unterschied zwischen einem Verkauf und einem Warenkorb. Einen Platz für jeden Schritt zu reservieren bedeutet, dass die Ergebnisseite eine komplette Routine liefert, was den Bestellwert hebt, ohne wie ein Upsell zu wirken.",
      "Die Gruppierung nach Schritt macht die Routine verständlich. Kunden sehen genau, was sie wann verwenden sollen, was Vertrauen in den Kauf und die Gewohnheit aufbaut, die sie zurückbringt.",
      "Eine Routine ist eine Kundenbindungs-Maschine. Das Set, das du empfiehlst, sagt dir, was jedem Kunden wann ausgeht, sodass dein E-Mail-Follow-up Nachschub-Angebote präzise timen kann.",
    ],
    faqs: [
      {
        question: "Wie liefert ein Routine-Builder ein komplettes Set?",
        answer:
          "Mit Empfehlungsslots. Jeder Slot ist für eine Rolle reserviert (zum Beispiel Cleanser, Treatment, Moisturizer, SPF) und mit dem am besten passenden Produkt gefüllt, sodass die Ergebnisseite eine komplette Routine liefert.",
      },
      {
        question: "Kann es eine separate Tag- und Nacht-Routine zeigen?",
        answer:
          "Ja. Nutze Anzeige-Logik auf der Ergebnisseite, um AM- und PM-Routinen oder jede bedingte Gruppierung basierend auf den Antworten des Kunden zu zeigen.",
      },
      {
        question: "Hebt es den durchschnittlichen Bestellwert?",
        answer:
          "Ein komplettes Set statt eines einzelnen Produkts zu empfehlen gibt Kunden einen Grund, die ganze Routine zu kaufen, was den Bestellwert hebt.",
      },
      {
        question: "Welche Kategorien passen zu einem Routine-Builder?",
        answer:
          "Hautpflege, Haarpflege, Supplements und jeder Katalog, der als mehrstufiges System statt als einzelner Artikel gekauft wird.",
      },
    ],
    related: [
      { label: "Hautpflege-Quiz", href: "/solutions/skincare/" },
      { label: "Supplement-Quiz", href: "/solutions/supplements/" },
      { label: "Bundle-Builder-Quiz", href: "/solutions/bundle-builder/" },
      { label: "Quiz-Vorlagen", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "bundle-builder": {
    slug: "bundle-builder",
    type: "use-case",
    name: "Bundle-Builder",
    chip: "Quiz-Typ",
    title: "Bundle-Builder-Quiz: verkaufe kuratierte Sets",
    description:
      "Ein Bundle-Builder-Quiz, das aus den Antworten eines Kunden ein kuratiertes Set zusammenstellt und den durchschnittlichen Bestellwert hebt. In-den-Warenkorb für das ganze Bundle. Gratis.",
    h1: "Bundle-Builder-Quizze, die den Bestellwert heben",
    heroSubtitle:
      "Ein kuratiertes Bundle konvertiert besser als ein einzelnes Produkt und ein generischer Upsell. Ein Bundle-Builder stellt das Set aus den Antworten jedes Kunden zusammen.",
    intro: [
      "Bundles funktionieren, aber nur, wenn sie relevant sind. Ein generischer Drei-für-zwei-Upsell ignoriert, was der Kunde tatsächlich will. Ein Bundle-Builder-Quiz stellt aus den Antworten jedes Kunden ein kuratiertes Set zusammen, sodass das Bundle persönlich wirkt und der Bestellwert ganz natürlich kommt.",
      "RevenueHunt baut Bundles mit Empfehlungsslots und bedingten Ergebnissen. Reserviere eine Rolle für jedes Produkt im Set, matche jedes mit dem Kunden und präsentiere das komplette Bundle auf der Ergebnisseite mit in-den-Warenkorb für alles auf einmal.",
    ],
    quizTypes: [
      {
        title: "Kuratierter Set-Builder",
        body: "Reserviere eine Rolle für jedes Produkt im Bundle und fülle jede mit dem besten Match, sodass das Set zum Kunden passt statt zum Katalog.",
      },
      {
        title: "Starter-Kit-Finder",
        body: "Stelle ein komplettes Starter-Kit für Erstkäufer oder Neueinsteiger einer Kategorie zusammen, die einen selbstbewussten Kauf wollen.",
      },
      {
        title: "Build-your-own-Bundle",
        body: "Lass Antworten ein flexibles Bundle steuern, mit Anzeige-Logik, die Artikel basierend auf der Auswahl des Kunden hinzufügt oder entfernt.",
      },
    ],
    howItHelps: [
      "Ein relevantes Bundle übertrifft ein generisches. Jeden Artikel im Set mit den Antworten des Kunden zu matchen bedeutet, dass das Bundle als Empfehlung gelesen wird, nicht als Rabatt-Taktik, und entsprechend konvertiert.",
      "Ein in-den-Warenkorb für das ganze Set beseitigt Reibung. Kunden kaufen das Bundle in einer einzigen Aktion, statt jeden Artikel zu suchen, was den höheren Bestellwert schützt, den du gerade aufgebaut hast.",
      "Rabatt-Blöcke lassen das Bundle ankommen. Zeige einen Set-Rabatt auf der Ergebnisseite, der an die spezifische Kombination gekoppelt ist, sodass die Ersparnis verdient wirkt und der Kunde den Kauf abschließt.",
    ],
    faqs: [
      {
        question: "Wie funktioniert ein Bundle-Builder-Quiz?",
        answer:
          "Es reserviert eine Rolle für jedes Produkt im Bundle, matcht jedes mit den Antworten des Kunden und präsentiert das komplette kuratierte Set auf der Ergebnisseite mit in-den-Warenkorb für alles auf einmal.",
      },
      {
        question: "Kann ich einen Bundle-Rabatt hinzufügen?",
        answer:
          "Ja. Die Ergebnisseite unterstützt Rabattcode-Blöcke, die du an bestimmte Antwortkombinationen koppeln kannst, sodass die Bundle-Ersparnis im Kontext gezeigt wird.",
      },
      {
        question: "Hebt es den durchschnittlichen Bestellwert?",
        answer:
          "Ein relevantes, kuratiertes Set statt eines einzelnen Produkts zu empfehlen gibt Kunden einen Grund, mehr zu kaufen, was den Bestellwert hebt.",
      },
      {
        question: "Welche Kategorien passen dazu?",
        answer:
          "Supplements, Beauty, Food und Beverage, Wohnen und jeder Katalog, in dem ein kuratiertes Set besser verkauft als ein einzelner Artikel.",
      },
    ],
    related: [
      { label: "Routine-Builder-Quiz", href: "/solutions/routine-builder/" },
      { label: "Gift-Finder-Quiz", href: "/solutions/gift-finder/" },
      { label: "Supplement-Quiz", href: "/solutions/supplements/" },
      { label: "Quiz-Vorlagen", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },
};
