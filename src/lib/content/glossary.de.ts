import type { GlossaryTerm, GlossaryLink } from "../glossary";

const VERIFIED = "2026-06-07";

export const GLOSSARY_DE: Record<string, GlossaryTerm> = {
  "conversational-commerce": {
    slug: "conversational-commerce",
    term: "Conversational Commerce",
    chip: "Konzept",
    title: "Was ist Conversational Commerce?",
    description:
      "Conversational Commerce verkauft über einen Dialog statt über ein statisches Raster. Hier erfährst du, was dazugehört, warum es funktioniert und wie ein Quiz es liefert.",
    h1: "Was ist Conversational Commerce?",
    shortAnswer:
      "Conversational Commerce ist der Verkauf über ein interaktives Gespräch in beide Richtungen statt über ein statisches Produktraster. Kunden beantworten Fragen, der Shop reagiert mit passenden Empfehlungen, so wie ein guter Verkäufer in einem Ladengeschäft arbeitet.",
    intro: [
      "In einem Ladengeschäft fragt eine gute Beratung, was du brauchst, hört zu und zeigt dir das richtige Produkt. Online überspringen die meisten Shops diesen Schritt und werfen Kunden auf ein Raster mit jedem einzelnen Produkt, das sie verkaufen. Conversational Commerce bringt den Dialog zurück.",
    ],
    sections: [
      {
        heading: "Was als Conversational Commerce zählt",
        body: [
          "Die Kategorie ist breit. Sie umfasst Chatbots, Messaging-Apps, Live-Chat, Sprachassistenten und Produktempfehlungs-Quiz. Gemeinsam ist ihnen ein Hin und Her: Der Kunde gibt etwas ein, der Shop reagiert mit etwas Konkreterem als einer generischen Katalogseite.",
          "Die Formen unterscheiden sich darin, wie stark du sie steuerst. Ein Freitext-Chatbot kann überallhin, wo ein Kunde tippt, was kraftvoll und unberechenbar zugleich ist. Ein Quiz ist strukturierter Conversational Commerce: Jede Frage und jeder Pfad ist von dir gestaltet, sodass das Gespräch markentreu bleibt und immer bei einem echten Produkt endet.",
        ],
      },
      {
        heading: "Warum es besser konvertiert als ein Raster",
        body: [
          "Eine Kategorieseite verlangt vom Kunden die Arbeit: jede Option lesen, Spezifikationen vergleichen und raten, welche passt. Das ist Entscheidungslähmung, und genau hier gehen viele Warenkörbe verloren, bevor sie überhaupt beginnen.",
          "Ein Gespräch nimmt ihm diese Arbeit ab. Es engt einen großen Katalog auf eine kurze, begründete Empfehlung ein und erklärt das Warum. Kunden, die eine klare Antwort bekommen, legen in den Warenkorb, statt zum Vergleichen woanders hinzuspringen.",
          "Es erfasst außerdem Präferenzen. Jede Antwort, die ein Kunde gibt, ist Information, die du zur E-Mail-Segmentierung, zur Personalisierung des Follow-ups und später zum besseren Merchandising nutzen kannst.",
        ],
      },
      {
        heading: "Conversational Commerce vs. ein Chatbot",
        body: [
          "Oft werden die beiden Begriffe synonym verwendet, aber ein Chatbot ist ein Werkzeug innerhalb der Kategorie, nicht das Ganze. Ein Chatbot auf Basis großer Sprachmodelle kann offene Fragen beantworten, kann aber auch die Absicht missverstehen oder etwas empfehlen, das du gar nicht führst.",
          "Ein Produktempfehlungs-Quiz tauscht Offenheit gegen Zuverlässigkeit. Es kann nicht vom Thema abkommen, empfiehlt immer aus deinem aktuellen Katalog und funktioniert für jeden Kunden gleich. Für die meisten Shops ist diese Berechenbarkeit mehr wert als freier Chat.",
        ],
      },
    ],
    withRevenueHunt: [
      "Ein RevenueHunt-Quiz ist die zuverlässigste Form von Conversational Commerce, die ein Shop betreiben kann. Du gestaltest jede Frage und jeden Pfad, die Ergebnisseite empfiehlt immer echte Produkte und Varianten aus deinem Katalog, und jede Antwort wird als Zero-Party-Data erfasst, die du mit Klaviyo und anderen Tools synchronisieren kannst.",
      "Es läuft auf Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace und als eigenständig gehostetes Quiz, und der Start ist kostenlos mit 100 Antworten pro Monat.",
    ],
    faqs: [
      {
        question: "Gilt ein Produkt-Quiz als Conversational Commerce?",
        answer:
          "Ja. Ein Quiz ist eine strukturierte Form von Conversational Commerce: Der Kunde beantwortet Fragen und der Shop reagiert mit passenden Empfehlungen, dasselbe Dialogmodell wie bei einem Chatbot, aber mit jedem Pfad im Voraus gestaltet.",
      },
      {
        question: "Was ist der Unterschied zwischen Conversational Commerce und einem Chatbot?",
        answer:
          "Ein Chatbot ist ein Werkzeug innerhalb des Conversational Commerce. Conversational Commerce ist die breitere Idee, über ein Gespräch in beide Richtungen zu verkaufen, was auch Quiz, Live-Chat, Messaging und Sprache umfasst.",
      },
      {
        question: "Funktioniert Conversational Commerce für kleine Shops?",
        answer:
          "Ja. Ein Produktempfehlungs-Quiz ist der einfachste Einstieg. Es braucht keine Traffic-Historie, läuft auf einem kostenlosen Plan und kann noch am selben Tag live sein.",
      },
    ],
    related: [
      { label: "Produktempfehlungs-Engine", href: "/glossary/product-recommendation-engine/" },
      { label: "Shoppable Quiz", href: "/glossary/shoppable-quiz/" },
      { label: "Guided-Selling-Quiz", href: "/guided-selling-quiz/" },
      { label: "So funktioniert es", href: "/how-it-works/" },
      { label: "Quiz-Vorlagen", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "product-recommendation-engine": {
    slug: "product-recommendation-engine",
    term: "Produktempfehlungs-Engine",
    chip: "Konzept",
    title: "Was ist eine Produktempfehlungs-Engine?",
    description:
      "Eine Produktempfehlungs-Engine entscheidet, welche Produkte jedem Kunden gezeigt werden. Die Typen, das Cold-Start-Problem und wie eine Quiz-Engine funktioniert.",
    h1: "Was ist eine Produktempfehlungs-Engine?",
    shortAnswer:
      "Eine Produktempfehlungs-Engine ist die Software, die entscheidet, welche Produkte einem bestimmten Kunden gezeigt werden. Sie nimmt Eingaben (Browsing-Verhalten, Kaufhistorie oder genannte Präferenzen) und sortiert deinen Katalog, um die besten Treffer hervorzuheben.",
    intro: [
      "Jeder Shop, der einem Kunden etwas anderes als den vollständigen Katalog zeigt, betreibt eine Empfehlungs-Engine irgendeiner Art, selbst wenn es nur eine manuelle Bestseller-Leiste ist. Die spannende Frage ist, was die Engine zur Entscheidung nutzt.",
    ],
    sections: [
      {
        heading: "Die wichtigsten Typen",
        body: [
          "Verhaltensbasierte Engines nutzen, was Kunden tun: aufgerufene Seiten, angeklickte Artikel, gekaufte Dinge. Sie treiben die klassischen Leisten „für dich empfohlen“ und „Kunden kauften auch“ an. Sie beruhen auf kollaborativem Filtern, das viel Traffic und Historie braucht, um gut zu funktionieren.",
          "Regel- oder attributbasierte Engines nutzen Produktdaten und vom Merchandiser gesetzte Logik: Zubehör zu dieser Kategorie zeigen, vorrätige Artikel zuerst hervorheben. Sie sind berechenbar, aber statisch.",
          "Präferenz- oder quizbasierte Engines nutzen, was der Kunde dir direkt sagt. Der Kunde beantwortet ein paar Fragen und die Engine sortiert den Katalog anhand dieser Antworten. Das ist das direkteste Signal der Absicht, weil es freiwillig gegeben statt abgeleitet wird.",
        ],
      },
      {
        heading: "Das Cold-Start-Problem",
        body: [
          "Verhaltensbasierte Engines haben eine bekannte Schwäche: Sie versagen bei neuen Besuchern und neuen Produkten. Ein Erstbesucher hat keine Historie, also hat die Engine nichts, woran sie sich orientieren kann, und fällt auf generische Bestseller zurück. Ein neu hinzugefügtes Produkt hat noch keine Klicks und wird daher selten empfohlen.",
          "Eine präferenzbasierte Engine hat keinen Cold Start. Ein brandneuer Besucher, der drei Fragen beantwortet, gibt der Engine schon beim allerersten Besuch alles, was sie braucht, ohne Tracking und ohne Warten darauf, dass sich Daten ansammeln.",
        ],
      },
      {
        heading: "Wie eine Quiz-Engine Produkte sortiert",
        body: [
          "Jede Antwort hat ein Gewicht. Eine Muss-Antwort kann passende Produkte hochstufen und unpassende herabstufen, während eine harte Einschränkung wie eine Allergie oder eine inkompatible Spezifikation Produkte vollständig ausschließen kann, egal wie gut sie ansonsten abgeschnitten haben.",
          "Das Ergebnis ist eine sortierte, begründete Auswahlliste statt einer einzelnen Vermutung. Gute Engines reservieren außerdem einen Platz für jede Rolle in einem Set, sodass das Ergebnis eine komplette Routine, ein Stack oder ein Bundle sein kann statt nur ein Produkt.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt ist eine präferenzbasierte Produktempfehlungs-Engine, die von einem Quiz angetrieben wird. Antworten stufen Produkte aus deinem aktuellen Katalog hoch, herab oder schließen sie aus, Empfehlungs-Slots reservieren einen Platz für jede Rolle in einem Set, und es funktioniert für einen Erstbesucher ohne jede Historie.",
      "Weil die Eingaben freiwillig sind, dienen dieselben Antworten zugleich als Zero-Party-Data, die dir gehört und die du für Segmentierung nutzen kannst, lange nachdem der Kunde gegangen ist.",
    ],
    faqs: [
      {
        question: "Was ist der Unterschied zwischen einer verhaltensbasierten und einer quizbasierten Empfehlungs-Engine?",
        answer:
          "Eine verhaltensbasierte Engine leitet die Absicht aus Klicks und Kaufhistorie ab, was Traffic braucht und bei neuen Besuchern versagt. Eine quizbasierte Engine nutzt Präferenzen, die der Kunde direkt nennt, sie funktioniert also schon beim ersten Besuch ohne Historie.",
      },
      {
        question: "Brauche ich viel Traffic, damit eine Empfehlungs-Engine funktioniert?",
        answer:
          "Nicht für eine quizbasierte Engine. Weil der Kunde dir seine Präferenzen nennt, funktioniert sie ab dem ersten Besuch. Verhaltensbasierte Engines hingegen brauchen viel Traffic und Kaufhistorie, bevor ihre Empfehlungen zuverlässig sind.",
      },
      {
        question: "Kann eine Empfehlungs-Engine mehr als ein Produkt vorschlagen?",
        answer:
          "Ja. Mit Empfehlungs-Slots reserviert die Engine einen Platz für jede Rolle in einem Set und füllt jeden mit dem besten Treffer, sodass sie eine komplette Routine, einen Stack oder ein Bundle statt eines einzelnen Artikels liefert.",
      },
    ],
    related: [
      { label: "Personalisierte Produktempfehlungen", href: "/glossary/personalized-product-recommendations/" },
      { label: "Conversational Commerce", href: "/glossary/conversational-commerce/" },
      { label: "Product-Finder-Quiz", href: "/product-finder-quiz/" },
      { label: "So funktioniert es", href: "/how-it-works/" },
      { label: "Quiz für Shopify", href: "/product-recommendation-quiz-shopify/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "shoppable-quiz": {
    slug: "shoppable-quiz",
    term: "Shoppable Quiz",
    chip: "Quiz-Typ",
    title: "Was ist ein Shoppable Quiz?",
    description:
      "Ein Shoppable Quiz endet auf einer Ergebnisseite, auf der Kunden empfohlene Produkte in den Warenkorb legen. Was ein Quiz shoppable macht und wo Shops sie einsetzen.",
    h1: "Was ist ein Shoppable Quiz?",
    shortAnswer:
      "Ein Shoppable Quiz ist ein interaktives Quiz, das auf einer personalisierten Ergebnisseite endet, auf der Kunden die empfohlenen Produkte direkt in den Warenkorb legen können. Das Quiz ist Teil des Shops, keine Umfrage, die abseits am Rand lebt.",
    intro: [
      "Viele Marken betreiben Quiz. Der Unterschied zwischen einem, das Umsatz bringt, und einem, das nur Antworten sammelt, ist, ob ein Kunde am Ende kaufen kann, ohne den Shop zu verlassen.",
    ],
    sections: [
      {
        heading: "Was ein Quiz shoppable macht",
        body: [
          "Drei Dinge. Erstens empfiehlt es echte Produkte und Varianten aus deinem aktuellen Katalog, keinen Platzhaltertext. Zweitens hat die Ergebnisseite eine In-den-Warenkorb-Funktion, sodass ein Kunde die Empfehlung in einem Schritt kaufen kann. Drittens kann es das Angebot weitertragen: ein an die Antworten gekoppelter Rabatt, ein als Set hinzugefügtes Bundle, ein Upsell auf der Ergebnisseite.",
          "Ohne diese hast du ein Persönlichkeitsquiz oder eine Umfrage. Es kann Spaß machen und E-Mails sammeln, aber es schließt den Verkauf nicht ab, den es gerade eröffnet hat.",
        ],
      },
      {
        heading: "Shoppable Quiz vs. eine Umfrage oder ein Persönlichkeitsquiz",
        body: [
          "Eine Umfrage sammelt Antworten und endet. Ein Persönlichkeitsquiz unterhält und endet. Ein Shoppable Quiz nutzt die Antworten, um Produkte zu empfehlen, und lässt den Kunden dann sofort auf die Empfehlung handeln, solange seine Absicht am höchsten ist.",
          "Dieser letzte Schritt ist der ganze Sinn. Der Moment, nachdem ein Kunde eine sichere Antwort bekommt, ist der Moment, in dem er am ehesten kauft. Ein Shoppable Quiz fängt diesen Moment ein, statt ihn zurück in den Katalog zu schicken, um von vorn anzufangen.",
        ],
      },
      {
        heading: "Wo Shoppable Quiz eingesetzt werden",
        body: [
          "Überall, wo die Wahl schwerfällt: Hautpflege-Routinen, Supplement-Stacks, Foundation-Töne, Passform und Größe, Geschenksets, Kaffeemischungen. Je schwerer es ist, aus einem Raster zu wählen, desto mehr verdient sich ein Shoppable Quiz seinen Platz.",
          "Sie laufen als Popup, als eingebetteter Block auf einer Seite oder als ganzseitiges Landing-Erlebnis, und dasselbe Quiz kann bezahlten Traffic, E-Mail und Onsite-Discovery gleichzeitig speisen.",
        ],
      },
    ],
    withRevenueHunt: [
      "Jedes RevenueHunt-Quiz ist standardmäßig shoppable. Die Ergebnisseite zieht echte Produkte und Varianten aus deinem Katalog, unterstützt In-den-Warenkorb für einen einzelnen Artikel oder ein ganzes Set und kann je nach den Antworten des Kunden einen Rabattcode oder Content-Block zeigen.",
      "Du kannst eins aus einer Vorlage bauen oder deinen Shop dem AI Quiz Copilot beschreiben und ein vollständiges Quiz in etwa 60 Sekunden gerüstet bekommen, dann als Popup, Embed oder Landingpage veröffentlichen.",
    ],
    faqs: [
      {
        question: "Was ist der Unterschied zwischen einem Shoppable Quiz und einem Persönlichkeitsquiz?",
        answer:
          "Ein Persönlichkeitsquiz unterhält und endet. Ein Shoppable Quiz empfiehlt echte Produkte aus deinem Katalog und lässt Kunden sie auf der Ergebnisseite in den Warenkorb legen, sodass es den Verkauf abschließt, statt nur Antworten zu sammeln.",
      },
      {
        question: "Können Kunden Produkte aus dem Quiz in den Warenkorb legen?",
        answer:
          "Ja. Genau das macht es shoppable. Die Ergebnisseite zeigt die passenden Produkte und Varianten mit direkter In-den-Warenkorb-Funktion, für einen einzelnen Artikel oder ein komplettes Set.",
      },
      {
        question: "Kann ein Shoppable Quiz einen Rabatt zeigen?",
        answer:
          "Ja. Die Ergebnisseite unterstützt Rabattcode- und Content-Blöcke, die du an bestimmte Antworten koppeln kannst, sodass die richtigen Kunden das richtige Angebot im Moment der Entscheidung sehen.",
      },
    ],
    related: [
      { label: "Quiz-Funnel", href: "/glossary/quiz-funnel/" },
      { label: "Conversational Commerce", href: "/glossary/conversational-commerce/" },
      { label: "Bundle-Builder-Quiz", href: "/solutions/bundle-builder/" },
      { label: "Quiz-Vorlagen", href: "/templates/" },
      { label: "Quiz-ROI-Rechner", href: "/quiz-roi-calculator/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "quiz-funnel": {
    slug: "quiz-funnel",
    term: "Quiz-Funnel",
    chip: "Marketing",
    title: "Was ist ein Quiz-Funnel?",
    description:
      "Ein Quiz-Funnel nutzt ein Quiz als Einstiegspunkt, um Traffic in qualifizierte, opted-in Leads zu verwandeln. Hier sind die Phasen und warum es ein einfaches Opt-in schlägt.",
    h1: "Was ist ein Quiz-Funnel?",
    shortAnswer:
      "Ein Quiz-Funnel ist ein Marketing-Funnel, der ein Quiz als Einstiegspunkt nutzt. Ein Kunde macht ein Quiz, bekommt eine Empfehlung, gibt seine E-Mail-Adresse und tritt in eine segmentierte Follow-up-Sequenz ein. Er verwandelt anonymen Traffic in einen qualifizierten Lead mit bekannter Präferenz.",
    intro: [
      "Die meisten E-Commerce-Funnel beginnen mit einem Rabatt-Popup und einem einzigen E-Mail-Feld. Ein Quiz-Funnel ersetzt das durch etwas, das der Kunde tatsächlich will: eine personalisierte Antwort.",
    ],
    sections: [
      {
        heading: "Die Phasen eines Quiz-Funnels",
        body: [
          "Traffic landet auf dem Quiz, aus einer Anzeige, einer E-Mail oder einem Link auf deiner Seite. Der Kunde beantwortet ein paar Fragen. Er erreicht eine Ergebnisseite mit einer personalisierten Empfehlung. Um das Ergebnis zu sehen oder zu speichern, gibt er seine E-Mail-Adresse. Diese E-Mail tritt in eine Follow-up-Sequenz ein, segmentiert nach dem, was er dir gesagt hat.",
          "Der Unterschied zu einem normalen Funnel ist, was du am Ende weißt. Statt eines anonymen Abonnenten hast du einen Kontakt, getaggt mit seinen Zielen, Präferenzen und den Produkten, zu denen er gematcht wurde.",
        ],
      },
      {
        heading: "Warum es ein generisches Opt-in übertrifft",
        body: [
          "Eine schlichte Newsletter-Anmeldung bietet nichts Konkretes, also konvertiert sie einen kleinen Bruchteil des Traffics und gibt dir keine Information außer einer E-Mail-Adresse. Ein Quiz-Funnel bietet eine maßgeschneiderte Empfehlung als Grund zum Abonnieren, was ein deutlich stärkerer Tausch ist.",
          "Er macht außerdem jede spätere E-Mail besser. Ein Abonnent, von dem du weißt, dass er für trockene, empfindliche Haut einkauft, bekommt eine andere Ansprache als einer, der ein Geschenk sucht. Diese Segmentierung wird während des Quiz aufgebaut, nicht hinterher draufgesetzt.",
        ],
      },
      {
        heading: "Quiz-Funnel und bezahlter Traffic",
        body: [
          "Quiz-Funnel sind bei bezahlter Akquise beliebt, weil sie in einem Schritt qualifizieren und erfassen. Kalter Traffic, der von einer Produktseite abspringen würde, schließt oft ein Quiz ab, und die E-Mail-Erfassung bedeutet, dass du den Lead behältst, selbst wenn er beim ersten Besuch nicht kauft.",
          "Ein Quiz-Funnel ist eine bestimmte Form von Funnel. Für das größere Bild davon, wie E-Commerce-Funnel aufgebaut werden, siehe den Leitfaden mit Funnel-Beispielen.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt ist darauf gebaut, den ganzen Quiz-Funnel zu betreiben. Es erfasst E-Mails im Moment der höchsten Absicht, synchronisiert Antworten und Kunden-Tags zu Klaviyo, Mailchimp, Omnisend, HubSpot und mehr und zeigt Frage-für-Frage-Abbrüche, sodass du die Lecks beheben kannst.",
      "Die Empfehlung auf der Ergebnisseite ist der Lead-Magnet, sodass das, was die E-Mail verdient, zugleich das ist, was den Verkauf antreibt.",
    ],
    faqs: [
      {
        question: "Wie unterscheidet sich ein Quiz-Funnel von einem regulären Sales-Funnel?",
        answer:
          "Ein Quiz-Funnel nutzt ein Quiz als Einstiegspunkt, sodass er Leads qualifiziert und segmentiert, während er sie erfasst. Ein regulärer Funnel beginnt oft mit einem generischen Opt-in, das eine E-Mail erfasst, aber keine Präferenzdaten.",
      },
      {
        question: "Funktioniert ein Quiz-Funnel für bezahlte Anzeigen?",
        answer:
          "Ja. Quiz-Funnel sind bei bezahlter Akquise verbreitet, weil sie kalten Traffic qualifizieren und die E-Mail in einem Schritt erfassen, sodass du den Lead behältst, selbst wenn der Kunde beim ersten Besuch nicht kauft.",
      },
      {
        question: "Was mache ich mit den Leads, die ein Quiz-Funnel erfasst?",
        answer:
          "Synchronisiere sie mit den Quiz-Antworten als Tags zu deinem E-Mail-Tool und sende dann Follow-ups, segmentiert nach Ziel oder Präferenz. RevenueHunt synchronisiert Antworten und Kunden-Tags zu Klaviyo, Mailchimp, Omnisend, HubSpot und mehr.",
      },
    ],
    related: [
      { label: "Lead-Generierungs-Quiz", href: "/glossary/lead-generation-quiz/" },
      { label: "Shoppable Quiz", href: "/glossary/shoppable-quiz/" },
      { label: "E-Commerce-Funnel-Beispiele", href: "/ecommerce-sales-funnel-examples/" },
      { label: "Quiz-ROI-Rechner", href: "/quiz-roi-calculator/" },
      { label: "Integrationen", href: "/integrations/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "personalized-product-recommendations": {
    slug: "personalized-product-recommendations",
    term: "Personalisierte Produktempfehlungen",
    chip: "Konzept",
    title: "Was sind personalisierte Produktempfehlungen?",
    description:
      "Personalisierte Produktempfehlungen passen Vorschläge an jeden Kunden an. So machen es Shops, das Cold-Start-Problem und der cookielose Weg.",
    h1: "Was sind personalisierte Produktempfehlungen?",
    shortAnswer:
      "Personalisierte Produktempfehlungen sind Vorschläge, die auf einen einzelnen Kunden zugeschnitten sind, statt der gleichen Bestseller, die allen gezeigt werden. Sie können auf Browsing-Verhalten, vergangenen Käufen oder, am direktesten, auf dem beruhen, was der Kunde dir sagt.",
    intro: [
      "Jedem Kunden dasselbe Raster zu zeigen, behandelt einen erstmaligen Geschenkkäufer und einen treuen Stammkunden gleich. Personalisierte Empfehlungen passen sich an, wer tatsächlich einkauft.",
    ],
    sections: [
      {
        heading: "Wie Shops Empfehlungen personalisieren",
        body: [
          "Es gibt zwei grobe Ansätze. Verhaltensbasierte Personalisierung beobachtet, was ein Kunde tut, Klicks, Aufrufe, vergangene Bestellungen, und leitet daraus ab, was als Nächstes gezeigt wird. Präferenzbasierte Personalisierung fragt den Kunden direkt und empfiehlt anhand seiner Antworten.",
          "Verhaltensbasiert ist für den Kunden unsichtbar und skaliert automatisch, aber es ist eine Ableitung und kann falsch sein. Präferenzbasiert ist explizit: Der Kunde sagt dir, dass er eine duftstofffreie Feuchtigkeitscreme für empfindliche Haut will, also gibt es nichts zu raten.",
        ],
      },
      {
        heading: "Das Cold-Start-Problem",
        body: [
          "Verhaltensbasierte Personalisierung tut sich mit neuen Kunden schwer. Ohne Historie zum Lernen fällt sie auf generische Bestseller zurück, ausgerechnet für die Besucher, bei denen ein erster Eindruck am meisten zählt.",
          "Den Kunden zu fragen löst das sofort. Ein Quiz sammelt genug, um schon beim ersten Besuch zu personalisieren, bevor irgendeine Browsing-Historie existiert, weshalb es so gut zu bezahltem und Social-Traffic passt, der kalt ankommt.",
        ],
      },
      {
        heading: "Personalisieren ohne Third-Party-Cookies",
        body: [
          "Verhaltensbasiertes Targeting hat sich auf Third-Party-Cookies und seitenübergreifendes Tracking gestützt, beides wird von Browsern und Regulierung eingeschränkt. Empfehlungen, die auf Daten beruhen, die der Kunde freiwillig gibt, hängen von all dem nicht ab.",
          "Die Daten, die ein Quiz sammelt, sind Zero-Party-Data: Präferenzen und Absichten, die der Kunde bewusst teilt. Das unterscheidet sich von First-Party-Data, also dem Verhalten, das du auf deiner eigenen Seite beobachtest, wie aufgerufene Seiten und vergangene Bestellungen. Zero-Party-Data ist eine Art von First-Party-Data, aber sie ist genannt statt abgeleitet, sodass es nichts zu raten gibt.",
          "Beide sind dauerhaft und mit Einwilligung, anders als Third-Party-Data. Für das vollständige Bild siehe die Leitfäden zu Zero-Party-Data und First-Party-Data.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt personalisiert Empfehlungen aus Präferenzen, die der Kunde in einem Quiz nennt, sodass es schon beim ersten Besuch funktioniert und nicht auf Third-Party-Tracking angewiesen ist. Antworten werden auf echte Produkte und Varianten abgebildet, und harte Einschränkungen schließen alles aus, was nicht passt.",
      "Dieselben Antworten werden zu Zero-Party-Data, sodass die Personalisierung in die E-Mail weiterläuft: Jede Kampagne nach dem Quiz kann ansprechen, was jeder Kunde tatsächlich will.",
    ],
    faqs: [
      {
        question: "Welche Daten treiben personalisierte Produktempfehlungen an?",
        answer:
          "Entweder Verhaltensdaten (Klicks, Aufrufe, Kaufhistorie) oder vom Kunden direkt genannte Präferenzen. Genannte Präferenzen sind am genauesten, weil sie freiwillig gegeben statt abgeleitet werden, und sie funktionieren schon beim ersten Besuch.",
      },
      {
        question: "Kann ich Empfehlungen für Erstbesucher personalisieren?",
        answer:
          "Ja, wenn du sie fragst. Ein Quiz sammelt genug, um schon beim ersten Besuch zu personalisieren, was verhaltensbasierte Systeme nicht können, weil neue Besucher keine Historie zum Lernen haben.",
      },
      {
        question: "Brauchen personalisierte Empfehlungen Third-Party-Cookies?",
        answer:
          "Nein. Empfehlungen, die auf Daten beruhen, die ein Kunde in einem Quiz freiwillig gibt, hängen nicht von Third-Party-Cookies oder seitenübergreifendem Tracking ab, das beides von Browsern und Regulierern eingeschränkt wird.",
      },
    ],
    related: [
      { label: "Produktempfehlungs-Engine", href: "/glossary/product-recommendation-engine/" },
      { label: "E-Commerce-Personalisierung", href: "/glossary/ecommerce-personalization/" },
      { label: "Zero-Party-Data", href: "/zero-party-data/" },
      { label: "First-Party-Data", href: "/first-party-data/" },
      { label: "So funktioniert es", href: "/how-it-works/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "ecommerce-personalization": {
    slug: "ecommerce-personalization",
    term: "E-Commerce-Personalisierung",
    chip: "Konzept",
    title: "Was ist E-Commerce-Personalisierung?",
    description:
      "E-Commerce-Personalisierung passt den Shop an jeden Kunden an. Wo sie passiert, der Wechsel zu Zero-Party-Data und der einfachste Einstieg.",
    h1: "Was ist E-Commerce-Personalisierung?",
    shortAnswer:
      "E-Commerce-Personalisierung bedeutet, das Einkaufserlebnis, die Produkte, Inhalte und Angebote, die ein Kunde sieht, auf den Einzelnen anzupassen, statt allen denselben Shop zu zeigen. Richtig gemacht, hebt sie die Conversion und den durchschnittlichen Bestellwert.",
    intro: [
      "Personalisierung deckt viel ab, von einer „für dich empfohlen“-Leiste bis zu einer vollständig maßgeschneiderten Startseite. Der rote Faden ist, verschiedene Kunden unterschiedlich zu behandeln, je nach dem, was du über sie weißt.",
    ],
    sections: [
      {
        heading: "Wo Personalisierung passiert",
        body: [
          "Onsite zeigt sie sich als empfohlene Produkte, maßgeschneiderte Landingpages und dynamische Inhalte. Bei Empfehlungen sortiert sie den Katalog für jeden Kunden. In E-Mail und SMS segmentiert sie die Ansprache nach Verhalten oder Präferenz. In Anzeigen passt sie Creatives und Zielgruppen an.",
          "Die meisten Shops brauchen nicht alles auf einmal. Die ertragreichsten Stellen zum Starten sind Produktempfehlungen und E-Mail-Segmentierung, weil beide direkt beeinflussen, was ein Kunde kauft und ob er wiederkommt.",
        ],
      },
      {
        heading: "Der Wechsel von Third-Party- zu Zero-Party-Data",
        body: [
          "Klassische Personalisierung stützte sich stark auf Third-Party-Data und seitenübergreifendes Tracking. Browser-Änderungen und Datenschutzregulierung haben diesen Ansatz fragil und in vielen Fällen nicht konform gemacht.",
          "Der dauerhafte Ersatz sind deine eigenen Daten, und sie kommen in zwei Formen. First-Party-Data ist, was du aus den Interaktionen eines Kunden mit deinem Shop beobachtest, wie aufgerufene Seiten und vergangene Bestellungen. Zero-Party-Data ist, was er bewusst freiwillig gibt, wie Ziele, Präferenzen und Probleme. Zero-Party-Data ist die genannte Teilmenge von First-Party-Data und das genaueste Signal der Absicht, weil der Kunde es dir direkt gesagt hat.",
          "Beide sind mit Einwilligung und verschwinden nicht, wenn ein Browser ein Cookie blockiert. Ein Quiz ist der direkteste Weg, Zero-Party-Data in großem Umfang zu sammeln.",
        ],
      },
      {
        heading: "Der einfachste Einstieg",
        body: [
          "Enterprise-Personalisierungs-Suites können jedes Pixel anpassen, mit einem Preisschild und einem Implementierungs-Zeitplan, der dazu passt. Die meisten Shops brauchen das nicht, um Ergebnisse zu sehen.",
          "Ein Produktempfehlungs-Quiz ist der einfachste Einstiegspunkt. Es personalisiert den einzelnen wichtigsten Moment, die Wahl eines Produkts, erfasst die Präferenzdaten, die danach personalisierte E-Mails antreiben, und kann noch am selben Tag auf einem kostenlosen Plan live sein.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt ist ein fokussierter Self-Service-Weg, um mit dem Personalisieren zu beginnen: ein Quiz, das Empfehlungen schon beim ersten Besuch anpasst und Präferenzdaten in dein E-Mail-Tool für laufende Segmentierung einspeist. Kein Enterprise-Vertrag, kein Data-Science-Team.",
      "Es läuft auf jeder großen Plattform und synchronisiert zu Klaviyo, Mailchimp, Omnisend, HubSpot und mehr, sodass die Personalisierung vom Shop bis in den Posteingang reicht.",
    ],
    faqs: [
      {
        question: "Was ist der einfachste Weg, mit E-Commerce-Personalisierung zu beginnen?",
        answer:
          "Ein Produktempfehlungs-Quiz. Es personalisiert den wirkungsvollsten Moment, die Wahl eines Produkts, funktioniert schon beim ersten Besuch, erfasst Präferenzdaten für personalisierte E-Mails und kann noch am selben Tag auf einem kostenlosen Plan live sein.",
      },
      {
        question: "Erfordert E-Commerce-Personalisierung Third-Party-Cookies?",
        answer:
          "Nicht mehr, und zunehmend kann sie sich nicht auf sie verlassen. Der dauerhafte Ansatz nutzt Daten, die Kunden direkt freiwillig geben, was genauer, mit Einwilligung und von Browser- und Datenschutzbeschränkungen unberührt ist.",
      },
      {
        question: "Brauche ich eine Enterprise-Plattform, um meinen Shop zu personalisieren?",
        answer:
          "Nein. Enterprise-Suites passen alles zu hohen Kosten an, aber die meisten Shops sehen starke Erträge aus fokussierter Personalisierung: Empfehlungen und E-Mail-Segmentierung, die ein Quiz auf einem Self-Service-Plan liefert.",
      },
    ],
    related: [
      { label: "Personalisierte Produktempfehlungen", href: "/glossary/personalized-product-recommendations/" },
      { label: "Produkt-Discovery", href: "/glossary/product-discovery/" },
      { label: "Zero-Party-Data", href: "/zero-party-data/" },
      { label: "First-Party-Data", href: "/first-party-data/" },
      { label: "RevenueHunt vs. Nosto vergleichen", href: "/compare/nosto/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "product-discovery": {
    slug: "product-discovery",
    term: "Produkt-Discovery",
    chip: "Konzept",
    title: "Was ist Produkt-Discovery im E-Commerce?",
    description:
      "Produkt-Discovery ist, wie Kunden das richtige Produkt in deinem Katalog finden. Die Methoden, warum große Kataloge es schwerer machen und wie Guided Selling hilft.",
    h1: "Was ist Produkt-Discovery im E-Commerce?",
    shortAnswer:
      "Produkt-Discovery ist, wie Kunden das richtige Produkt in deinem Katalog finden. Gute Discovery, über Suche, Filter und geführte Quiz, bringt einen Kunden mit so wenig Reibung wie möglich von „ich habe ein Problem“ zu „das ist das Produkt“.",
    intro: [
      "Ein Kunde kommt selten an und kennt deine genaue SKU. Er kommt mit einem Bedürfnis an. Produkt-Discovery ist alles zwischen diesem Bedürfnis und der richtigen Produktseite.",
    ],
    sections: [
      {
        heading: "Die wichtigsten Discovery-Methoden",
        body: [
          "Die Suche lässt Kunden, die wissen, was sie wollen, es eintippen. Navigation und Filter lassen sie nach Kategorie und Attribut einengen. Empfehlungen heben relevante Produkte hervor, während sie stöbern. Guided Selling, meist ein Quiz, fragt nach ihrem Bedürfnis und weist sie zur Antwort.",
          "Jede passt zu einem anderen Kunden. Die Suche funktioniert, wenn jemand den Produktnamen kennt. Filter funktionieren, wenn er die Attribute kennt. Ein Quiz funktioniert, wenn er das Problem kennt, aber nicht das Produkt, was der schwierigste und häufigste Fall ist.",
        ],
      },
      {
        heading: "Warum größere Kataloge Discovery schwerer machen",
        body: [
          "Ein Shop mit zehn Produkten braucht kaum Discovery-Tools. Ein Shop mit Hunderten oder Tausenden schon. Je mehr du verkaufst, desto wahrscheinlicher fühlt sich ein Kunde überfordert und geht, ohne das zu finden, was für ihn richtig war.",
          "Das ist das Paradox der Wahl in der Praxis: Mehr Optionen können die Conversion senken statt heben, es sei denn, du gibst Kunden einen Weg, sie zu durchdringen. Geführte Discovery macht aus einem großen Katalog aus einer Last eine Stärke.",
        ],
      },
      {
        heading: "Discovery ist der Conversion-Hebel",
        body: [
          "Ein Kunde, der das richtige Produkt nicht findet, kauft kein anderes, er geht. Discovery zu verbessern ist oft die wirkungsvollste Änderung, die ein Shop mit tiefem Katalog vornehmen kann, weil sie den Schritt behebt, an dem Absicht still verkümmert.",
          "Ein Quiz ist das direkteste Discovery-Tool für bedürfnisbasiertes Einkaufen, weil es die Frage stellt, die ein Verkäufer stellen würde, und das Produkt zurückgibt, auf das er zeigen würde.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt übernimmt bedürfnisbasierte Produkt-Discovery: Der Kunde beschreibt sein Ziel oder Problem, und das Quiz sortiert deinen aktuellen Katalog, um den richtigen Treffer zurückzugeben, wobei harte Einschränkungen alles ausschließen, was nicht passt.",
      "Es skaliert mit deinem Katalog, funktioniert schon beim ersten Besuch und läuft auf Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace und eigenständig.",
    ],
    faqs: [
      {
        question: "Was ist der Unterschied zwischen Produkt-Discovery und Suche?",
        answer:
          "Die Suche ist eine Discovery-Methode, für Kunden, die bereits wissen, was sie wollen. Produkt-Discovery ist breiter und umfasst Filter, Empfehlungen und geführte Quiz für Kunden, die ihr Bedürfnis kennen, aber nicht das konkrete Produkt.",
      },
      {
        question: "Wie verbessert ein Quiz die Produkt-Discovery?",
        answer:
          "Es übernimmt den schwierigsten Fall: einen Kunden, der sein Problem kennt, aber nicht das Produkt. Das Quiz fragt nach dem Bedürfnis und sortiert den Katalog, um den richtigen Treffer zurückzugeben, so wie es ein Verkäufer tun würde.",
      },
      {
        question: "Ist Produkt-Discovery für große Kataloge wichtiger?",
        answer:
          "Ja. Je mehr Produkte du verkaufst, desto leichter fühlen sich Kunden überfordert und gehen. Geführte Discovery durchdringt einen großen Katalog und macht aus seiner Größe einen Vorteil statt eine Barriere.",
      },
    ],
    related: [
      { label: "Guided-Selling-Quiz", href: "/guided-selling-quiz/" },
      { label: "Product-Finder-Quiz", href: "/product-finder-quiz/" },
      { label: "E-Commerce-Personalisierung", href: "/glossary/ecommerce-personalization/" },
      { label: "RevenueHunt vs. Zoovu vergleichen", href: "/compare/zoovu/" },
      { label: "Quiz-Vorlagen", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "lead-generation-quiz": {
    slug: "lead-generation-quiz",
    term: "Lead-Generierungs-Quiz",
    chip: "Quiz-Typ",
    title: "Was ist ein Lead-Generierungs-Quiz?",
    description:
      "Ein Lead-Generierungs-Quiz erfasst qualifizierte, opted-in Leads mit einem eingebauten Grund zum Abonnieren. Warum es ein Anmeldeformular schlägt und was du erfasst.",
    h1: "Was ist ein Lead-Generierungs-Quiz?",
    shortAnswer:
      "Ein Lead-Generierungs-Quiz erfasst qualifizierte Leads: Ein Kunde beantwortet ein paar Fragen, gibt seine E-Mail-Adresse, um das Ergebnis zu sehen, und du bekommst einen Kontakt, getaggt mit seinen genannten Präferenzen. Es ist ein Opt-in mit einem eingebauten Grund zum Abonnieren.",
    intro: [
      "E-Mail ist noch immer der ertragreichste Kanal im E-Commerce, aber ein schlichtes Anmeldeformular konvertiert nur einen kleinen Teil der Besucher und sagt dir nichts über sie. Ein Lead-Generierungs-Quiz behebt beide Probleme auf einmal.",
    ],
    sections: [
      {
        heading: "Warum ein Quiz ein schlichtes Anmeldeformular schlägt",
        body: [
          "Ein Newsletter-Feld bittet um eine E-Mail und bietet bestenfalls einen generischen Rabatt. Ein Lead-Generierungs-Quiz bietet ein personalisiertes Ergebnis, was ein Grund ist, aus dem ein Kunde seine Adresse tatsächlich geben will. Der Tausch fühlt sich fair an, also nehmen ihn mehr Leute an.",
          "Es sammelt außerdem mehr als eine E-Mail. Bis ein Kunde sich anmeldet, hat er Fragen zu seinen Zielen, Präferenzen und Einschränkungen beantwortet, sodass jeder Kontakt bereits qualifiziert und segmentiert ankommt.",
        ],
      },
      {
        heading: "Was du erfasst und wie du es nutzt",
        body: [
          "Du erfasst die E-Mail plus die Quiz-Antworten als Zero-Party-Data. Diese Antworten werden zu Tags in deinem E-Mail-Tool: Ziel, Hauttyp, Budget, Empfänger, was auch immer das Quiz gefragt hat.",
          "Tags machen aus einer einzigen Liste Segmente, die du gezielt ansprechen kannst. Ein Lead, der sagte, dass er für empfindliche Haut einkauft, bekommt eine andere E-Mail als einer, der ein Geschenk sucht, und der Unterschied wird bei der Erfassung aufgebaut, nicht später erraten.",
        ],
      },
      {
        heading: "Der Compliance-Vorteil",
        body: [
          "Weil der Kunde die Daten im Tausch gegen ein Ergebnis freiwillig gibt, sind es Zero-Party-Data: die genannte Art von First-Party-Data, per Definition mit Einwilligung. Das hält weit besser stand als abgeleitete oder gekaufte Third-Party-Data, während Datenschutzregeln strenger werden und Browser Tracking einschränken.",
          "Die Daten gehören dir, sie sind genau, weil sie direkt vom Kunden kamen, und sie hängen von keinem Third-Party-Cookie ab, um nützlich zu bleiben.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt verwandelt jedes Quiz in ein Lead-Generierungs-Quiz: Erfasse E-Mails im Moment der höchsten Absicht und synchronisiere dann den Kontakt und die antwortbasierten Tags zu Klaviyo, Mailchimp, Omnisend, HubSpot und mehr.",
      "Weil die Empfehlung der Anreiz ist, treibt dasselbe Quiz, das deine Liste wachsen lässt, auch den Verkauf an, und die Abbruch-Analyse zeigt genau, wo du den Ablauf straffen kannst.",
    ],
    faqs: [
      {
        question: "Wie unterscheidet sich ein Lead-Generierungs-Quiz von einem Anmeldeformular?",
        answer:
          "Ein Anmeldeformular bittet um eine E-Mail und bietet einen generischen Anreiz. Ein Lead-Generierungs-Quiz bietet ein personalisiertes Ergebnis als Grund zum Abonnieren und erfasst Präferenzdaten neben der E-Mail, sodass jeder Lead qualifiziert und segmentiert ist.",
      },
      {
        question: "Welche Informationen erfasst ein Lead-Generierungs-Quiz?",
        answer:
          "Die E-Mail des Kunden plus seine Quiz-Antworten als Zero-Party-Data. Diese Antworten synchronisieren sich als Tags zu deinem E-Mail-Tool, sodass Kontakte bereits nach Ziel, Präferenz oder Einschränkung segmentiert ankommen.",
      },
      {
        question: "Sind die Daten aus einem Lead-Generierungs-Quiz konform nutzbar?",
        answer:
          "Ja. Der Kunde gibt sie freiwillig im Tausch gegen ein Ergebnis, also sind es First-Party-Data mit Einwilligung. Das hält besser stand als abgeleitete oder Third-Party-Data, während Datenschutzregeln und Browser-Beschränkungen strenger werden.",
      },
    ],
    related: [
      { label: "Quiz-Funnel", href: "/glossary/quiz-funnel/" },
      { label: "Shoppable Quiz", href: "/glossary/shoppable-quiz/" },
      { label: "Zero-Party-Data", href: "/zero-party-data/" },
      { label: "Integrationen", href: "/integrations/" },
      { label: "Quiz-Vorlagen", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "conversion-rate-optimization": {
    slug: "conversion-rate-optimization",
    term: "Conversion-Rate-Optimierung (CRO)",
    chip: "Konzept",
    title: "Was ist Conversion-Rate-Optimierung?",
    description:
      "Conversion-Rate-Optimierung (CRO) hebt den Anteil der Besucher, die kaufen. Wie sie gemessen wird, worauf man sich fokussiert und welche Taktiken etwas bewegen.",
    h1: "Was ist Conversion-Rate-Optimierung (CRO)?",
    shortAnswer:
      "Conversion-Rate-Optimierung (CRO) ist die Praxis, den Prozentsatz der Besucher zu erhöhen, die eine gewünschte Aktion ausführen, meist einen Kauf. Du misst die Conversion-Rate als Conversions geteilt durch Besucher und verbesserst sie dann, ohne mehr Traffic zu kaufen.",
    intro: [
      "Bei CRO geht es darum, mehr aus dem Traffic herauszuholen, den du bereits hast. Deine Conversion-Rate zu verdoppeln hat denselben Effekt auf den Umsatz wie deinen Traffic zu verdoppeln, kostet aber weit weniger.",
    ],
    sections: [
      {
        heading: "Wie die Conversion-Rate berechnet wird",
        body: [
          "Die Conversion-Rate ist Conversions geteilt durch Gesamtbesucher, ausgedrückt als Prozentsatz. Wenn 1.000 Besucher 20 Käufe ergeben, ist das eine Conversion-Rate von 2 %. Durchschnittliche E-Commerce-Conversion-Raten liegen im niedrigen einstelligen Bereich, also sind kleine absolute Zuwächse große relative: von 2 % auf 3 % zu gehen, ist eine Steigerung der Bestellungen um 50 %.",
          "Dieselbe Rechnung gilt für jedes Ziel, nicht nur für Käufe. E-Mail-Anmeldungen, Quiz-Abschlüsse und In-den-Warenkorb-Aktionen sind alles Conversions, die du optimieren kannst.",
        ],
      },
      {
        heading: "Worauf sich CRO tatsächlich fokussiert",
        body: [
          "Gute CRO findet den konkreten Schritt, an dem Absicht versickert, und behebt ihn. Häufige Lecks: eine Produktseite, die die eigentliche Frage des Kunden nicht beantwortet, ein Checkout mit zu viel Reibung oder eine Kategorieseite, die einen unentschlossenen Kunden ohne Orientierung vor eine Wand aus Optionen wirft.",
          "Es ist eine Schleife, kein einmaliger Fix: eine Hypothese bilden, eine Sache ändern, gegen eine Baseline messen, behalten, was gewinnt. Die Disziplin besteht darin, jeweils eine Variable zu ändern, damit du weißt, was die Zahl bewegt hat.",
        ],
      },
      {
        heading: "Taktiken, die die Zahl bewegen",
        body: [
          "Die dauerhaften Erfolge sind Klarheit und Relevanz: schnellere Seiten, ehrliche Produktinformationen, weniger Checkout-Schritte und unentschlossenen Kunden beim Wählen helfen. Rabatt-Popups können die Conversion kurzfristig heben, aber sie erziehen Kunden dazu, auf Angebote zu warten, und schmälern die Marge.",
          "Kunden beim Wählen zu helfen ist der am meisten übersehene Hebel. Ein Kunde, der sich nicht entscheiden kann, konvertiert nicht, und ein Raster aus Optionen hilft ihm nicht. Ein geführtes Erlebnis, das den Katalog auf eine sichere Empfehlung einengt, beseitigt die Unentschlossenheit, die Conversions still tötet.",
        ],
      },
    ],
    withRevenueHunt: [
      "Ein Produktempfehlungs-Quiz ist eine CRO-Taktik, die auf das Unentschlossenheits-Leck zielt. Statt einen Kunden eine Wand aus Produkten vergleichen zu lassen, stellt es ein paar Fragen und gibt eine sichere, personalisierte Empfehlung zurück, sodass mehr Kunden zu einer Kaufentscheidung gelangen.",
      "Es erfasst zudem unterwegs E-Mail- und Präferenzdaten, sodass die Besucher, die beim ersten Besuch nicht kaufen, nicht verloren sind. Du kannst den möglichen Zuwachs für deine eigenen Zahlen mit dem Quiz-ROI-Rechner abschätzen.",
    ],
    faqs: [
      {
        question: "Wie berechnet man die Conversion-Rate?",
        answer:
          "Teile die Anzahl der Conversions durch die Anzahl der Besucher und drücke es als Prozentsatz aus. Zum Beispiel sind 20 Käufe aus 1.000 Besuchern eine Conversion-Rate von 2 %. Dieselbe Formel funktioniert für jedes Ziel, etwa Anmeldungen oder Quiz-Abschlüsse.",
      },
      {
        question: "Was ist eine gute E-Commerce-Conversion-Rate?",
        answer:
          "Die meisten E-Commerce-Shops konvertieren im niedrigen einstelligen Bereich, oft etwa 1 % bis 3 %. Weil die Basis klein ist, sind moderate absolute Zuwächse große relative: von 2 % auf 3 % zu gehen, ist eine Steigerung der Bestellungen um 50 %.",
      },
      {
        question: "Wie verbessert ein Produkt-Quiz die Conversion-Rate?",
        answer:
          "Es zielt auf das Unentschlossenheits-Leck. Ein Quiz engt einen großen Katalog auf eine sichere, personalisierte Empfehlung ein, sodass unentschlossene Kunden zu einer Kaufentscheidung gelangen, statt von einem Raster aus Optionen abzuspringen.",
      },
    ],
    related: [
      { label: "Durchschnittlicher Bestellwert", href: "/glossary/average-order-value/" },
      { label: "Produkt-Discovery", href: "/glossary/product-discovery/" },
      { label: "Tipps zur Conversion-Optimierung", href: "/ecommerce-conversion-optimization-tips/" },
      { label: "Quiz-ROI-Rechner", href: "/quiz-roi-calculator/" },
      { label: "Quiz-Funnel", href: "/glossary/quiz-funnel/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "average-order-value": {
    slug: "average-order-value",
    term: "Durchschnittlicher Bestellwert (AOV)",
    chip: "Kennzahl",
    title: "Was ist der durchschnittliche Bestellwert (AOV)?",
    description:
      "Der durchschnittliche Bestellwert (AOV) ist, was ein Kunde im Schnitt pro Bestellung ausgibt. Wie man ihn berechnet, warum er zählt und wie man ihn ohne mehr Traffic hebt.",
    h1: "Was ist der durchschnittliche Bestellwert (AOV)?",
    shortAnswer:
      "Der durchschnittliche Bestellwert (AOV) ist der durchschnittliche Betrag, den ein Kunde in einer einzelnen Bestellung ausgibt. Du berechnest ihn, indem du den Gesamtumsatz durch die Anzahl der Bestellungen im selben Zeitraum teilst.",
    intro: [
      "Der AOV ist eine der drei Zahlen, die deinen Umsatz bestimmen, neben Traffic und Conversion-Rate. Ihn zu heben, steigert den Umsatz aus genau derselben Anzahl an Bestellungen, weshalb er einer der günstigsten Wachstumshebel ist, die du hast.",
    ],
    sections: [
      {
        heading: "Wie man den AOV berechnet",
        body: [
          "Teile den Gesamtumsatz durch die Anzahl der Bestellungen über einen festgelegten Zeitraum. Wenn ein Shop in einem Monat 50.000 $ aus 1.000 Bestellungen macht, beträgt sein AOV 50 $. Verfolge ihn über die Zeit und nach Traffic-Quelle, denn ein Kanal mit höherem AOV kann mehr wert sein, selbst wenn er weniger konvertiert.",
          "Der AOV wirkt mit allem anderen zusammen. Ein höherer AOV bedeutet, dass jede Conversion mehr wert ist, was erhöht, wie viel du dir leisten kannst, um einen Kunden zu gewinnen.",
        ],
      },
      {
        heading: "Warum der AOV zählt",
        body: [
          "Traffic und Conversion-Rate bekommen die meiste Aufmerksamkeit, aber sie sind die teuren Hebel: Mehr Traffic kostet Werbebudget, und Conversion-Zuwächse werden schwerer, je mehr du optimierst. Der AOV ist der Hebel, den du an den Bestellungen bewegen kannst, die du bereits gewinnst.",
          "Er finanziert außerdem die Akquise. Je mehr jede Bestellung wert ist, desto mehr kannst du für bezahlten Traffic bieten und trotzdem profitabel bleiben, was sich über den ganzen Funnel hinweg verstärkt.",
        ],
      },
      {
        heading: "Wie man den AOV erhöht",
        body: [
          "Die ehrlichen Wege, den AOV zu heben, schaffen alle echten Mehrwert: ergänzende Produkte empfehlen, Artikel bündeln, die zusammengehören, und Kunden helfen, die komplette Lösung statt eines einzelnen Teils zu kaufen. Cross-Selling und Upselling sind die Taktiken; eine relevante Empfehlung ist das, was sie wirken lässt, statt zu nerven.",
          "Das Schlüsselwort ist relevant. Eine generische Zusatz-Aufforderung wird ignoriert. Ein empfohlenes Set, das tatsächlich zu dem passt, was der Kunde kauft, wird gekauft, weil es als Hilfe gelesen wird, nicht als Verkaufsdruck.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt hebt den AOV, indem es ein komplettes Set statt eines einzelnen Produkts empfiehlt. Empfehlungs-Slots reservieren einen Platz für jede Rolle in einer Routine, einem Stack oder einem Bundle, sodass die Ergebnisseite die ganze Lösung mit In-den-Warenkorb für das Set und einem optionalen, an die Antworten gekoppelten Rabatt zurückgibt.",
      "Weil jeder Artikel zu den Antworten des Kunden passt, fühlt sich die größere Bestellung wie eine Empfehlung an, nicht wie ein Upsell. Du kannst die Umsatzwirkung für deinen Shop mit dem Quiz-ROI-Rechner abschätzen.",
    ],
    faqs: [
      {
        question: "Wie wird der durchschnittliche Bestellwert berechnet?",
        answer:
          "Teile den Gesamtumsatz durch die Anzahl der Bestellungen über denselben Zeitraum. Zum Beispiel sind 50.000 $ Umsatz aus 1.000 Bestellungen ein durchschnittlicher Bestellwert von 50 $.",
      },
      {
        question: "Warum ist der AOV wichtig?",
        answer:
          "Er steigert den Umsatz aus den Bestellungen, die du bereits gewinnst, ohne für mehr Traffic zu zahlen, und ein höherer AOV lässt dich mehr für die Gewinnung jedes Kunden ausgeben und trotzdem profitabel bleiben. Er ist einer der günstigsten verfügbaren Wachstumshebel.",
      },
      {
        question: "Wie kann ein Produkt-Quiz den AOV erhöhen?",
        answer:
          "Indem es ein komplettes Set statt eines einzelnen Produkts empfiehlt. Empfehlungs-Slots geben eine passende Routine, einen Stack oder ein Bundle mit In-den-Warenkorb für das ganze Set zurück, sodass jede Bestellung größer ist und sich trotzdem personalisiert anfühlt.",
      },
    ],
    related: [
      { label: "Cross-Selling und Upselling", href: "/glossary/cross-selling-and-upselling/" },
      { label: "Conversion-Rate-Optimierung", href: "/glossary/conversion-rate-optimization/" },
      { label: "Bundle-Builder-Quiz", href: "/solutions/bundle-builder/" },
      { label: "Routine-Builder-Quiz", href: "/solutions/routine-builder/" },
      { label: "Quiz-ROI-Rechner", href: "/quiz-roi-calculator/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "cross-selling-and-upselling": {
    slug: "cross-selling-and-upselling",
    term: "Cross-Selling und Upselling",
    chip: "Taktik",
    title: "Cross-Selling vs. Upselling erklärt",
    description:
      "Cross-Selling fügt verwandte Produkte hinzu; Upselling steigt zu einem besseren auf. Der Unterschied, warum beide funktionieren und wie ein Quiz es ohne Druck macht.",
    h1: "Was ist Cross-Selling und Upselling?",
    shortAnswer:
      "Cross-Selling empfiehlt verwandte Produkte, die das ergänzen, was ein Kunde kauft, wie eine Feuchtigkeitscreme zu einem Reiniger. Upselling empfiehlt eine bessere oder größere Version dessen, was er bereits will, wie eine größere Größe oder eine Premium-Stufe. Beide heben den Bestellwert.",
    intro: [
      "Die beiden werden zusammengeworfen, weil beide steigern, was ein Kunde ausgibt, aber sie wirken in unterschiedliche Richtungen. Zu wissen, welches zu einem Moment passt, ist der Unterschied zwischen hilfreich und aufdringlich.",
    ],
    sections: [
      {
        heading: "Cross-Selling vs. Upselling: der Unterschied",
        body: [
          "Cross-Selling geht seitwärts. Es fügt der Bestellung ergänzende Artikel hinzu: das klassische „möchten Sie Pommes dazu“ oder eine Schutzfolie zu einem Smartphone. Das Ziel ist ein vollständigerer Kauf.",
          "Upselling geht nach oben. Es bewegt den Kunden zu einer höherwertigen Version dessen, was er bereits in Betracht zieht: eine größere Größe, ein Premium-Modell, ein längeres Abo. Das Ziel ist eine bessere Passung zu einem höheren Preis, nicht mehr Artikel.",
        ],
      },
      {
        heading: "Warum beide funktionieren, wenn sie relevant sind",
        body: [
          "Beide Taktiken heben den durchschnittlichen Bestellwert, und beide können nach hinten losgehen. Ein relevantes Cross-Sell oder Upsell wird als hilfreicher Rat gelesen; ein irrelevantes wird als Shop gelesen, der die Rechnung aufbläht, und Kunden blenden es aus oder nehmen es übel.",
          "Relevanz ist alles, und Relevanz erfordert, den Kunden zu kennen. Eine Empfehlung, die darauf beruht, was jemand tatsächlich erreichen will, landet. Eine generische „das könnte dir auch gefallen“-Leiste, allen gezeigt, nicht.",
        ],
      },
      {
        heading: "Wie ein Quiz cross-sellt und upsellt, ohne den Druck",
        body: [
          "Ein Quiz kennt das Ziel des Kunden, bevor es irgendetwas empfiehlt, sodass das Cross-Sell und das Upsell in die Empfehlung eingebaut sind statt am Checkout draufgesetzt. Es kann ein komplettes Set zurückgeben (Cross-Sell) und in einem Zug zur richtigen Stufe für das genannte Bedürfnis lenken (Upsell).",
          "Weil die Empfehlung die eigenen Fragen des Kunden beantwortet, fühlt sich die größere Bestellung verdient an. Der Kunde sieht eine Lösung, die passt, keine Liste von Zusätzen.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt baut Cross-Sells und Upsells in die Empfehlung selbst ein. Empfehlungs-Slots reservieren einen Platz für jede ergänzende Rolle, sodass die Ergebnisseite ein volles Set zurückgibt, und antwortbasierte Logik lenkt Kunden zu der Größe, Stufe oder dem Bundle, das zu dem passt, was sie dir gesagt haben.",
      "Die Ergebnisseite unterstützt In-den-Warenkorb für das ganze Set plus einen an die Antworten gekoppelten Rabatt, sodass die Bestellung wächst, weil die Empfehlung stimmt, nicht weil ein Popup den Checkout unterbrochen hat.",
    ],
    faqs: [
      {
        question: "Was ist der Unterschied zwischen Cross-Selling und Upselling?",
        answer:
          "Cross-Selling fügt einer Bestellung ergänzende Produkte hinzu, wie eine Feuchtigkeitscreme zu einem Reiniger. Upselling steigt zu einer besseren oder größeren Version dessen auf, was der Kunde bereits will, wie eine Premium-Stufe oder eine größere Größe. Beide erhöhen den Bestellwert.",
      },
      {
        question: "Funktionieren Cross-Selling und Upselling wirklich?",
        answer:
          "Ja, wenn die Empfehlung relevant ist. Ein Vorschlag, der zum Ziel des Kunden passt, wird als hilfreich gelesen und gekauft. Eine generische Einheits-Aufforderung wird ignoriert oder übelgenommen, sodass Relevanz die beiden Ergebnisse trennt.",
      },
      {
        question: "Wie cross-sellt und upsellt ein Quiz?",
        answer:
          "Es lernt zuerst das Ziel des Kunden und baut dann das Cross-Sell und Upsell in die Empfehlung ein. Empfehlungs-Slots geben ein komplettes Set zurück, und antwortbasierte Logik lenkt zur richtigen Stufe, sodass sich die größere Bestellung wie Rat anfühlt statt wie Druck.",
      },
    ],
    related: [
      { label: "Durchschnittlicher Bestellwert", href: "/glossary/average-order-value/" },
      { label: "Bundle-Builder-Quiz", href: "/solutions/bundle-builder/" },
      { label: "Routine-Builder-Quiz", href: "/solutions/routine-builder/" },
      { label: "Shoppable Quiz", href: "/glossary/shoppable-quiz/" },
      { label: "Personalisierte Produktempfehlungen", href: "/glossary/personalized-product-recommendations/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "customer-segmentation": {
    slug: "customer-segmentation",
    term: "Kundensegmentierung",
    chip: "Marketing",
    title: "Was ist Kundensegmentierung?",
    description:
      "Kundensegmentierung gruppiert Käufer nach gemeinsamen Merkmalen, sodass du jede Gruppe gezielt ansprechen kannst. Die Typen, warum es funktioniert und wie ein Quiz sie speist.",
    h1: "Was ist Kundensegmentierung?",
    shortAnswer:
      "Kundensegmentierung ist die Praxis, Kunden nach gemeinsamen Merkmalen zu gruppieren, wie Zielen, Verhalten oder Demografie, sodass du jede Gruppe mit relevanter Ansprache erreichst, statt allen dasselbe zu senden.",
    intro: [
      "Eine einzige Botschaft an deine ganze Liste spricht niemanden Bestimmtes an. Segmentierung lässt dich das Richtige zur richtigen Gruppe sagen, weshalb segmentierte Kampagnen Batch-and-Blast durchweg übertreffen.",
    ],
    sections: [
      {
        heading: "Die wichtigsten Wege zu segmentieren",
        body: [
          "Demografische Segmentierung gruppiert nach Merkmalen wie Alter oder Standort. Verhaltensbasierte Segmentierung gruppiert nach dem, was Kunden tun: vergangene Käufe, Browsing, Engagement. Psychografische Segmentierung gruppiert nach Einstellungen und Werten. Bedürfnisbasierte Segmentierung gruppiert nach dem Problem, das ein Kunde zu lösen versucht.",
          "Für den E-Commerce sind bedürfnisbasierte und verhaltensbasierte Segmente meist am handlungsfähigsten, weil sie direkt darauf abbilden, was zu empfehlen und was als Nächstes zu sagen ist.",
        ],
      },
      {
        heading: "Warum Segmentierung funktioniert",
        body: [
          "Relevanz treibt die Reaktion. Ein Kunde, der für trockene, empfindliche Haut einkauft, sollte nicht dieselbe E-Mail bekommen wie einer, der ein Geschenk sucht, und wenn das nicht passiert, steigen Öffnungsraten, Klicks und Conversions.",
          "Segmentierung verstärkt sich auch über die Zeit. Jede Kampagne, die du an ein gut definiertes Segment sendest, lehrt dich mehr darüber, was die nächste schärft. Die Liste wird ein Asset, kein bloßer Broadcast-Kanal.",
        ],
      },
      {
        heading: "Das Datenproblem hinter der Segmentierung",
        body: [
          "Du kannst nur nach dem segmentieren, was du weißt, und die meisten Shops wissen nicht viel über einen anonymen Besucher. Verhaltensdaten sammeln sich langsam an und versagen bei neuen Kunden, und Third-Party-Data wird von Browsern und Regulierung eingeschränkt.",
          "Die Lösung ist zu fragen. Wenn ein Kunde dir sein Ziel, seine Präferenz oder seine Einschränkung nennt, kannst du sofort und genau danach segmentieren, mit seiner Einwilligung. Diese freiwillig gegebene Information ist Zero-Party-Data.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt verwandelt Quiz-Antworten automatisch in Segmente. Jede Antwort wird zu einem Kunden-Tag, wie ziel:schlaf oder haut:empfindlich, das zu Klaviyo, Mailchimp, Omnisend, HubSpot und mehr synchronisiert, sodass Kontakte vorsegmentiert nach dem ankommen, was sie dir gesagt haben.",
      "Weil die Segmente aus Daten gebaut sind, die der Kunde freiwillig gab, sind sie schon ab dem ersten Besuch genau und hängen nicht von Tracking ab. Jede Kampagne nach dem Quiz kann das Segment ansprechen statt der ganzen Liste.",
    ],
    faqs: [
      {
        question: "Was sind die wichtigsten Arten der Kundensegmentierung?",
        answer:
          "Die gängigen Grundlagen sind demografisch (Alter, Standort), verhaltensbasiert (Käufe, Browsing, Engagement), psychografisch (Einstellungen, Werte) und bedürfnisbasiert (das Problem, das ein Kunde löst). Für den E-Commerce sind bedürfnisbasierte und verhaltensbasierte Segmente meist am handlungsfähigsten.",
      },
      {
        question: "Warum ist Kundensegmentierung wichtig?",
        answer:
          "Sie macht die Ansprache relevant, was Öffnungsraten, Klicks und Conversions hebt, verglichen damit, allen dasselbe zu senden. Sie verstärkt sich auch: Jede Kampagne an ein definiertes Segment lehrt dich mehr darüber und schärft die nächste.",
      },
      {
        question: "Wie hilft ein Quiz bei der Segmentierung?",
        answer:
          "Es fragt Kunden direkt, sodass jede Antwort zu einem Kunden-Tag wird, das zu deinem E-Mail-Tool synchronisiert. Kontakte kommen vorsegmentiert nach Ziel, Präferenz oder Einschränkung an, genau schon ab dem ersten Besuch und ohne sich auf Tracking zu verlassen.",
      },
    ],
    related: [
      { label: "Personalisierte Produktempfehlungen", href: "/glossary/personalized-product-recommendations/" },
      { label: "Lead-Generierungs-Quiz", href: "/glossary/lead-generation-quiz/" },
      { label: "Zero-Party-Data", href: "/zero-party-data/" },
      { label: "E-Commerce-Personalisierung", href: "/glossary/ecommerce-personalization/" },
      { label: "Integrationen", href: "/integrations/" },
    ],
    verifiedAsOf: VERIFIED,
  },
};

export const GLOSSARY_RELATED_GUIDES_DE: GlossaryLink[] = [
  {
    label: "Product-Finder-Quiz",
    href: "/product-finder-quiz/",
    blurb: "Was ein Product-Finder-Quiz ist, wann man eins einsetzt und 12 Live-Beispiele.",
  },
  {
    label: "Guided-Selling-Quiz",
    href: "/guided-selling-quiz/",
    blurb: "Wie Guided Selling im E-Commerce funktioniert und wie man das Quiz baut.",
  },
  {
    label: "Zero-Party-Data",
    href: "/zero-party-data/",
    blurb: "Was Zero-Party-Data ist, warum sie verhaltensbasiertes Tracking schlägt und wie ein Quiz sie erfasst.",
  },
  {
    label: "Lösungen nach Branche",
    href: "/solutions/",
    blurb: "Produktempfehlungs-Quiz-Lösungen für Hautpflege, Supplements, Mode und mehr.",
  },
  {
    label: "Quiz-ROI-Rechner",
    href: "/quiz-roi-calculator/",
    blurb: "Schätze den zusätzlichen Umsatz ab, den ein Produktempfehlungs-Quiz deinem Shop bringen könnte.",
  },
];
