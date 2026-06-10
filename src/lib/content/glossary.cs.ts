import type { GlossaryTerm, GlossaryLink } from "../glossary";

const VERIFIED = "2026-06-07";

export const GLOSSARY_CS: Record<string, GlossaryTerm> = {
  "conversational-commerce": {
    slug: "conversational-commerce",
    term: "Konverzační obchod",
    chip: "Koncept",
    title: "Co je konverzační obchod?",
    description:
      "Konverzační obchod prodává prostřednictvím obousměrného dialogu místo statické mřížky. Tady je, co zahrnuje, proč funguje a jak to kvíz dokáže.",
    h1: "Co je konverzační obchod?",
    shortAnswer:
      "Konverzační obchod spočívá v prodeji prostřednictvím interaktivní obousměrné konverzace místo statické mřížky produktů. Nakupující odpovídají na otázky, obchod reaguje personalizovanými doporučeními, přesně jako to dělá dobrý prodejce v kamenné prodejně.",
    intro: [
      "V kamenné prodejně se dobrý prodavač zeptá, co potřebuješ, naslouchá a ukáže ti správný produkt. Online většina obchodů tento krok přeskočí a postaví nakupující před mřížku se všemi produkty, které prodávají. Konverzační obchod vrací dialog zpět do středu pozornosti.",
    ],
    sections: [
      {
        heading: "Co se počítá jako konverzační obchod",
        body: [
          "Kategorie je široká. Zahrnuje chatboty, messaging aplikace, živý chat, hlasové asistenty a kvízy s doporučením produktů. Co mají společné, je výměna sem a tam: nakupující poskytne informaci a obchod odpoví něčím konkrétnějším než obecnou stránkou katalogu.",
          "Formy se liší v tom, nakolik je ovládáš. Chatbot s volným textem může jít kamkoliv nakupující napíše, což je mocné a nepředvídatelné. Kvíz je strukturovaný konverzační obchod: každou otázku a každou cestu jsi navrhl ty, takže konverzace zůstává věrná tvé značce a vždy končí u reálného produktu.",
        ],
      },
      {
        heading: "Proč konvertuje lépe než mřížka",
        body: [
          "Stránka kategorie žádá nakupujícího, aby udělal práci: přečíst každou možnost, porovnat parametry a hádat, která sedne. To je paralýza z analýzy a tady se ztrácí spousta košíků, ještě než začnou.",
          "Konverzace dělá práci za ně. Zredukuje velký katalog na krátké, zdůvodněné doporučení a vysvětlí proč. Nakupující, kteří dostanou jasnou odpověď, přidají do košíku místo aby odešli porovnávat jinam.",
          "Také zachytává preference. Každá odpověď, kterou nakupující dá, je informace, kterou můžeš použít k segmentaci emailu, personalizaci follow-upu a lepšímu merchandisingu později.",
        ],
      },
      {
        heading: "Konverzační obchod oproti chatbotu",
        body: [
          "Oba termíny se často používají jako synonyma, ale chatbot je nástroj uvnitř kategorie, ne celá kategorie. Chatbot založený na velkém jazykovém modelu může odpovídat na otevřené otázky, ale může také špatně pochopit záměr nebo doporučit něco, co nemáš skladem.",
          "Kvíz s doporučením produktů vyměňuje svobodu za spolehlivost. Nemůže odbočit od tématu, vždy doporučuje z tvého živého katalogu a funguje stejně pro každého nakupujícího. Pro většinu obchodů má tahle předvídatelnost větší cenu než chat ve volné formě.",
        ],
      },
    ],
    withRevenueHunt: [
      "Kvíz RevenueHunt je nejspolehlivější forma konverzačního obchodu, jakou obchod může použít. Ty navrhneš každou otázku a každou cestu, stránka s výsledky vždy doporučuje reálné produkty a varianty z tvého katalogu a každá odpověď se zachytí jako zero-party data, která můžeš synchronizovat s Klaviyo a dalšími nástroji.",
      "Funguje na Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace a jako samostatný hostovaný kvíz a je zdarma na začátek se 100 odpověďmi měsíčně.",
    ],
    faqs: [
      {
        question: "Považuje se produktový kvíz za konverzační obchod?",
        answer:
          "Ano. Kvíz je strukturovaná forma konverzačního obchodu: nakupující odpovídá na otázky a obchod reaguje personalizovanými doporučeními, stejný model dialogu jako chatbot, ale s každou cestou navrženou předem.",
      },
      {
        question: "Jaký je rozdíl mezi konverzačním obchodem a chatbotem?",
        answer:
          "Chatbot je nástroj uvnitř konverzačního obchodu. Konverzační obchod je širší myšlenka prodeje prostřednictvím obousměrné konverzace, která zahrnuje i kvízy, živý chat, messaging a hlas.",
      },
      {
        question: "Funguje konverzační obchod pro malé obchody?",
        answer:
          "Ano. Kvíz s doporučením produktů je nejméně náročný způsob, jak začít. Nepotřebuje historii provozu, aby fungoval, běží na bezplatném plánu a může být online týž den.",
      },
    ],
    related: [
      { label: "Doporučovací engine produktů", href: "/glossary/product-recommendation-engine/" },
      { label: "Nakupovatelný kvíz", href: "/glossary/shoppable-quiz/" },
      { label: "Kvíz pro řízený prodej", href: "/guided-selling-quiz/" },
      { label: "Jak to funguje", href: "/how-it-works/" },
      { label: "Šablony kvízů", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "product-recommendation-engine": {
    slug: "product-recommendation-engine",
    term: "Doporučovací engine produktů",
    chip: "Koncept",
    title: "Co je doporučovací engine produktů?",
    description:
      "Doporučovací engine produktů rozhoduje, které produkty každému nakupujícímu ukázat. Typy, problém studeného startu a jak funguje engine založený na kvízu.",
    h1: "Co je doporučovací engine produktů?",
    shortAnswer:
      "Doporučovací engine produktů je software, který rozhoduje, které produkty ukázat konkrétnímu nakupujícímu. Bere vstupy (chování při procházení, historii nákupů nebo deklarované preference) a seřadí tvůj katalog, aby vynesl na povrch nejlepší shody.",
    intro: [
      "Každý obchod, který nakupujícímu ukáže něco jiného než celý katalog, používá nějakou formu doporučovacího enginu, i kdyby to byla jen ruční sekce nejprodávanějších. Zajímavá otázka je, co engine používá k rozhodování.",
    ],
    sections: [
      {
        heading: "Hlavní typy",
        body: [
          "Behaviorální enginy používají to, co nakupující dělají: zobrazené stránky, klikané položky, koupené věci. Pohánějí klasické sekce doporučeno pro tebe a zákazníci si koupili také. Spoléhají na kolaborativní filtrování, které potřebuje hodně provozu a historie, aby dobře fungovalo.",
          "Enginy založené na pravidlech nebo atributech používají data o produktu a logiku nastavenou merchandiserem: zobrazit doplňky u této kategorie, vynést nejdřív skladové položky. Jsou předvídatelné, ale statické.",
          "Enginy založené na preferencích nebo na kvízu používají to, co ti nakupující řekne přímo. Nakupující odpoví na pár otázek a engine seřadí katalog proti těmto odpovědím. To je nejpřímější signál záměru, protože je dobrovolný, ne odvozený.",
        ],
      },
      {
        heading: "Problém studeného startu",
        body: [
          "Behaviorální enginy mají známou slabinu: selhávají u nových návštěvníků a nových produktů. Nakupující, který přichází poprvé, nemá historii, takže engine nemá z čeho vycházet a uchýlí se k obecným nejprodávanějším. Nově přidaný produkt ještě nemá kliknutí, takže se zřídka doporučuje.",
          "Engine založený na preferencích nemá studený start. Zcela nový návštěvník, který odpoví na tři otázky, dá enginu vše, co potřebuje, při první návštěvě, bez sledování a bez čekání, až se data nasbírají.",
        ],
      },
      {
        heading: "Jak engine kvízu seřadí produkty",
        body: [
          "Každá odpověď nese váhu. Nezbytná odpověď může hlasovat pro produkty, které odpovídají, a proti těm, které ne, zatímco tvrdé omezení jako alergie nebo nekompatibilní parametr může produkty zcela vyloučit, bez ohledu na to, jak dobře bodovaly ve zbytku.",
          "Výsledkem je krátký seřazený a zdůvodněný seznam místo jediného odhadu. Dobré enginy také vyhradí místo pro každou roli v sadě, takže výstupem může být kompletní rutina, stack nebo balíček místo jediného produktu.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt je doporučovací engine produktů založený na preferencích a poháněný kvízem. Odpovědi hlasují pro, hlasují proti nebo vylučují produkty z tvého živého katalogu, recommendation slots vyhradí místo pro každou roli v sadě a funguje pro návštěvníka, který přichází poprvé bez jakékoliv historie.",
      "Protože jsou vstupy dobrovolné, stejné odpovědi slouží zároveň jako zero-party data, která vlastníš a můžeš použít k segmentaci dlouho po odchodu nakupujícího.",
    ],
    faqs: [
      {
        question: "Jaký je rozdíl mezi behaviorálním doporučovacím enginem a tím založeným na kvízu?",
        answer:
          "Behaviorální engine odvozuje záměr z kliknutí a historie nákupů, což potřebuje provoz a selhává u nových návštěvníků. Engine založený na kvízu používá preference, které nakupující deklaruje přímo, takže funguje při první návštěvě bez historie.",
      },
      {
        question: "Potřebuji hodně provozu, aby doporučovací engine fungoval?",
        answer:
          "Ne pro engine založený na kvízu. Protože ti nakupující řekne své preference, funguje od první návštěvy. Behaviorální enginy naproti tomu potřebují významný provoz a historii nákupů, než jsou jejich doporučení spolehlivá.",
      },
      {
        question: "Může doporučovací engine navrhnout více než jeden produkt?",
        answer:
          "Ano. Pomocí recommendation slots engine vyhradí místo pro každou roli v sadě a naplní každou nejlepší shodou, čímž vrátí kompletní rutinu, stack nebo balíček místo jediné položky.",
      },
    ],
    related: [
      { label: "Personalizovaná doporučení produktů", href: "/glossary/personalized-product-recommendations/" },
      { label: "Konverzační obchod", href: "/glossary/conversational-commerce/" },
      { label: "Kvíz na hledání produktů", href: "/product-finder-quiz/" },
      { label: "Jak to funguje", href: "/how-it-works/" },
      { label: "Kvíz pro Shopify", href: "/product-recommendation-quiz-shopify/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "shoppable-quiz": {
    slug: "shoppable-quiz",
    term: "Nakupovatelný kvíz",
    chip: "Typ kvízu",
    title: "Co je nakupovatelný kvíz?",
    description:
      "Nakupovatelný kvíz končí stránkou s výsledky, kde nakupující přidají doporučené produkty do košíku. Tady je, co dělá kvíz nakupovatelným a kde ho obchody používají.",
    h1: "Co je nakupovatelný kvíz?",
    shortAnswer:
      "Nakupovatelný kvíz je interaktivní kvíz, který končí personalizovanou stránkou s výsledky, kde mohou nakupující přidat doporučené produkty přímo do košíku. Kvíz je součástí obchodu, ne dotazník, který žije zvlášť.",
    intro: [
      "Spousta značek používá kvízy. Rozdíl mezi tím, který generuje příjmy, a tím, který jen sbírá odpovědi, je v tom, zda nakupující může na konci nakoupit, aniž by musel odejít.",
    ],
    sections: [
      {
        heading: "Co dělá kvíz nakupovatelným",
        body: [
          "Tři věci. Za prvé, doporučuje reálné produkty a varianty z tvého živého katalogu, ne výplňový text. Za druhé, stránka s výsledky má možnost přidat do košíku, takže nakupující může koupit doporučení v jediném kroku. Za třetí, dokáže dovést nabídku až do konce: sleva navázaná na odpovědi, balíček přidaný jako sada, dodatečný prodej na stránce s výsledky.",
          "Bez toho máš osobnostní kvíz nebo dotazník. Může být zábavný a může sbírat emaily, ale neuzavře prodej, který právě otevřel.",
        ],
      },
      {
        heading: "Nakupovatelný kvíz oproti dotazníku nebo osobnostnímu kvízu",
        body: [
          "Dotazník sbírá odpovědi a končí. Osobnostní kvíz pobaví a končí. Nakupovatelný kvíz použije odpovědi k doporučení produktů a pak nechá nakupujícího jednat na základě doporučení okamžitě, dokud je jeho záměr nejvyšší.",
          "Ten poslední krok je to, na čem záleží. Moment těsně poté, co nakupující dostane sebejistou odpověď, je moment, kdy je nejpravděpodobnější, že koupí. Nakupovatelný kvíz tento moment zachytí místo aby ho poslal zpět do katalogu začínat od nuly.",
        ],
      },
      {
        heading: "Kde se nakupovatelné kvízy používají",
        body: [
          "Kdekoliv je výběr těžký: rutiny péče o pleť, stacky doplňků, odstíny make-upu, velikost a sednutí, dárkové sady, kávové směsi. Čím těžší je vybrat z mřížky, tím víc si nakupovatelný kvíz zaslouží své místo.",
          "Fungují jako popup, jako blok vložený na stránku nebo jako celostránkový zážitek a stejný kvíz může zároveň živit placený provoz, email a objevování na webu.",
        ],
      },
    ],
    withRevenueHunt: [
      "Každý kvíz RevenueHunt je ve výchozím nastavení nakupovatelný. Stránka s výsledky vytáhne reálné produkty a varianty z tvého katalogu, podporuje přidání jediné položky nebo celé sady do košíku a může zobrazit slevový kód nebo blok s obsahem podle odpovědí nakupujícího.",
      "Můžeš ho sestavit ze šablony nebo popsat svůj obchod AI Quiz Copilotovi a mít kompletní kvíz sestavený za zhruba 60 sekund a pak ho publikovat jako popup, embed nebo landing page.",
    ],
    faqs: [
      {
        question: "Jaký je rozdíl mezi nakupovatelným kvízem a osobnostním kvízem?",
        answer:
          "Osobnostní kvíz pobaví a končí. Nakupovatelný kvíz doporučí reálné produkty z tvého katalogu a nechá nakupující přidat je do košíku na stránce s výsledky, takže uzavře prodej místo aby jen sbíral odpovědi.",
      },
      {
        question: "Mohou nakupující přidat produkty do košíku přímo z kvízu?",
        answer:
          "Ano. To je to, co ho dělá nakupovatelným. Stránka s výsledky zobrazí odpovídající produkty a varianty s přímou možností přidat do košíku, pro jedinou položku nebo kompletní sadu.",
      },
      {
        question: "Může nakupovatelný kvíz zobrazit slevu?",
        answer:
          "Ano. Stránka s výsledky podporuje bloky se slevovým kódem a s obsahem, které můžeš navázat na konkrétní odpovědi, takže ti správní nakupující uvidí správnou nabídku v bodě rozhodnutí.",
      },
    ],
    related: [
      { label: "Kvízový trychtýř", href: "/glossary/quiz-funnel/" },
      { label: "Konverzační obchod", href: "/glossary/conversational-commerce/" },
      { label: "Kvíz na tvorbu balíčků", href: "/solutions/bundle-builder/" },
      { label: "Šablony kvízů", href: "/templates/" },
      { label: "Kalkulačka ROI kvízu", href: "/quiz-roi-calculator/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "quiz-funnel": {
    slug: "quiz-funnel",
    term: "Kvízový trychtýř",
    chip: "Marketing",
    title: "Co je kvízový trychtýř?",
    description:
      "Kvízový trychtýř používá kvíz jako vstupní bod k převedení provozu na kvalifikované přihlášené leady. Tady jsou fáze a proč překonává jednoduchý opt-in.",
    h1: "Co je kvízový trychtýř?",
    shortAnswer:
      "Kvízový trychtýř je marketingový trychtýř, který používá kvíz jako vstupní bod. Nakupující udělá kvíz, dostane doporučení, zadá svůj email a vstoupí do segmentované follow-up sekvence. Mění anonymní provoz v kvalifikovaný lead se známou preferencí.",
    intro: [
      "Většina ecommerce trychtýřů začíná slevovým popupem a jediným polem na email. Kvízový trychtýř ho nahradí něčím, co nakupující skutečně chce: personalizovanou odpovědí.",
    ],
    sections: [
      {
        heading: "Fáze kvízového trychtýře",
        body: [
          "Provoz přijde na kvíz, z reklamy, emailu nebo odkazu na tvém webu. Nakupující odpoví na pár otázek. Dorazí na stránku s výsledky s personalizovaným doporučením. Aby výsledek viděl nebo uložil, zadá svůj email. Ten email vstoupí do follow-up sekvence segmentované podle toho, co ti řekl.",
          "Rozdíl oproti běžnému trychtýři je v tom, co na konci víš. Místo anonymního předplatitele máš kontakt označený jeho cíli, preferencemi a produkty, se kterými se shodl.",
        ],
      },
      {
        heading: "Proč překonává obecný opt-in",
        body: [
          "Prosté přihlášení k newsletteru nenabízí nic konkrétního, takže konvertuje jen malou část provozu a nedá ti žádnou informaci kromě emailové adresy. Kvízový trychtýř nabízí personalizované doporučení jako důvod k přihlášení, což je mnohem silnější výměna.",
          "Také zlepšuje každý následující email. Předplatitel, o kterém víš, že hledá pro suchou a citlivou pleť, dostane jiné zprávy než ten, kdo kupuje dárek. Tahle segmentace se buduje během kvízu, ne se přidává potom.",
        ],
      },
      {
        heading: "Kvízové trychtýře a placený provoz",
        body: [
          "Kvízové trychtýře jsou oblíbené pro placenou akvizici, protože kvalifikují a zachytávají v jediném kroku. Studený provoz, který by odešel ze stránky produktu, často dokončí kvíz, a zachycení emailu znamená, že lead udržíš, i když nenakoupí při první návštěvě.",
          "Kvízový trychtýř je konkrétní forma trychtýře. Pro širší obrázek, jak se ecommerce trychtýře staví, viz průvodce příklady trychtýřů.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt je stvořený pro provoz celého kvízového trychtýře. Zachytí email v bodě nejvyššího záměru, synchronizuje odpovědi a zákaznické štítky s Klaviyo, Mailchimp, Omnisend, HubSpot a dalšími a zobrazí opouštění otázku po otázce, abys mohl opravit netěsnosti.",
      "Doporučení na stránce s výsledky je magnet na leady, takže to, co získá email, je zároveň to, co pohání prodej.",
    ],
    faqs: [
      {
        question: "Jak se kvízový trychtýř liší od běžného prodejního trychtýře?",
        answer:
          "Kvízový trychtýř používá kvíz jako vstupní bod, takže kvalifikuje a segmentuje leady, jak je zachytává. Běžný trychtýř obvykle začíná obecným opt-inem, který zachytí email, ale žádná data o preferencích.",
      },
      {
        question: "Funguje kvízový trychtýř pro placené reklamy?",
        answer:
          "Ano. Kvízové trychtýře jsou běžné pro placenou akvizici, protože kvalifikují studený provoz a zachytí email v jediném kroku, takže lead udržíš, i když nakupující nenakoupí při první návštěvě.",
      },
      {
        question: "Co dělám s leady, které kvízový trychtýř zachytí?",
        answer:
          "Synchronizuj je s tvým emailovým nástrojem s odpověďmi z kvízu jako štítky a pak posílej follow-up segmentovaný podle cíle nebo preference. RevenueHunt synchronizuje odpovědi a zákaznické štítky s Klaviyo, Mailchimp, Omnisend, HubSpot a dalšími.",
      },
    ],
    related: [
      { label: "Kvíz na generování leadů", href: "/glossary/lead-generation-quiz/" },
      { label: "Nakupovatelný kvíz", href: "/glossary/shoppable-quiz/" },
      { label: "Příklady ecommerce trychtýřů", href: "/ecommerce-sales-funnel-examples/" },
      { label: "Kalkulačka ROI kvízu", href: "/quiz-roi-calculator/" },
      { label: "Integrace", href: "/integrations/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "personalized-product-recommendations": {
    slug: "personalized-product-recommendations",
    term: "Personalizovaná doporučení produktů",
    chip: "Koncept",
    title: "Co jsou personalizovaná doporučení produktů?",
    description:
      "Personalizovaná doporučení produktů přizpůsobují návrhy každému nakupujícímu. Jak to obchody dělají, problém studeného startu a forma bez cookies.",
    h1: "Co jsou personalizovaná doporučení produktů?",
    shortAnswer:
      "Personalizovaná doporučení produktů jsou návrhy přizpůsobené individuálnímu nakupujícímu místo stejných nejprodávanějších zobrazených všem. Mohou vycházet z chování při procházení, z minulých nákupů nebo, nejpřímější formou, z toho, co ti nakupující řekne.",
    intro: [
      "Ukázat každému nakupujícímu stejnou mřížku zachází stejně s tím, kdo kupuje dárek poprvé, i s věrným opakujícím zákazníkem. Personalizovaná doporučení se přizpůsobují tomu, kdo skutečně nakupuje.",
    ],
    sections: [
      {
        heading: "Jak obchody personalizují doporučení",
        body: [
          "Existují dva obecné přístupy. Behaviorální personalizace pozoruje, co nakupující dělá, kliknutí, zobrazení, předchozí objednávky, a odvozuje, co ukázat dál. Personalizace podle deklarovaných preferencí se nakupujícího zeptá přímo a doporučuje podle jeho odpovědí.",
          "Chování je pro nakupujícího neviditelné a škáluje automaticky, ale je to odhad a může se mýlit. Deklarovaná preference je explicitní: nakupující ti řekne, že chce hydratační krém bez parfemace pro citlivou pleť, takže není co hádat.",
        ],
      },
      {
        heading: "Problém studeného startu",
        body: [
          "Behaviorální personalizace má potíže s novými nakupujícími. Bez historie, z níž by se učila, se uchýlí k obecným nejprodávanějším právě u návštěvníků, u kterých na prvním dojmu nejvíc záleží.",
          "Zeptat se nakupujícího to vyřeší okamžitě. Kvíz nasbírá dost na personalizaci při první návštěvě, ještě než existuje jakákoliv historie procházení, proto se tak dobře hodí k placenému a sociálnímu provozu, který přichází studený.",
        ],
      },
      {
        heading: "Personalizace bez cookies třetích stran",
        body: [
          "Behaviorální segmentace se spoléhala na cookies třetích stran a sledování napříč weby, obojí stále více omezované prohlížeči a regulací. Doporučení postavená na datech, která nakupující dobrovolně poskytne, na ničem z toho nezávisí.",
          "Data, která kvíz sbírá, jsou zero-party data: preference a záměry, které nakupující záměrně sdílí. To je odlišné od first-party dat, což je chování, které pozoruješ na vlastním webu, jako zobrazené stránky a předchozí objednávky. Zero-party data jsou typem first-party dat, ale jsou deklarovaná, ne odvozená, takže není co hádat.",
          "Obojí je trvalé a se souhlasem, na rozdíl od third-party dat. Pro úplný obrázek viz průvodce o zero-party datech a first-party datech.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt personalizuje doporučení z preferencí, které nakupující deklaruje v kvízu, takže funguje při první návštěvě a nezávisí na sledování třetích stran. Odpovědi se přiřadí reálným produktům a variantám a tvrdá omezení vyloučí cokoliv, co nesedí.",
      "Stejné odpovědi se stanou zero-party daty, takže personalizace pokračuje v emailu: každá kampaň po kvízu může mluvit o tom, co každý nakupující skutečně chce.",
    ],
    faqs: [
      {
        question: "Jaká data pohánějí personalizovaná doporučení produktů?",
        answer:
          "Buď behaviorální data (kliknutí, zobrazení, historie nákupů), nebo deklarované preference, které nakupující dá přímo. Deklarované preference jsou nejpřesnější, protože jsou dobrovolné, ne odvozené, a fungují při první návštěvě.",
      },
      {
        question: "Můžu personalizovat doporučení pro návštěvníky, kteří přicházejí poprvé?",
        answer:
          "Ano, pokud se jich zeptáš. Kvíz nasbírá dost na personalizaci při první návštěvě, což behaviorální systémy nedokážou, protože noví návštěvníci nemají historii, z níž by se učily.",
      },
      {
        question: "Potřebují personalizovaná doporučení cookies třetích stran?",
        answer:
          "Ne. Doporučení postavená na datech, která nakupující dobrovolně poskytne v kvízu, nezávisí na cookies třetích stran ani na sledování napříč weby, obojí stále více omezovaném prohlížeči a regulátory.",
      },
    ],
    related: [
      { label: "Doporučovací engine produktů", href: "/glossary/product-recommendation-engine/" },
      { label: "Personalizace v ecommerce", href: "/glossary/ecommerce-personalization/" },
      { label: "Zero-party data", href: "/zero-party-data/" },
      { label: "First-party data", href: "/first-party-data/" },
      { label: "Jak to funguje", href: "/how-it-works/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "ecommerce-personalization": {
    slug: "ecommerce-personalization",
    term: "Personalizace v ecommerce",
    chip: "Koncept",
    title: "Co je personalizace v ecommerce?",
    description:
      "Personalizace v ecommerce přizpůsobuje obchod každému nakupujícímu. Tady je, kde se odehrává, posun k zero-party datům a nejméně náročné místo, kde začít.",
    h1: "Co je personalizace v ecommerce?",
    shortAnswer:
      "Personalizace v ecommerce spočívá v přizpůsobení nákupního zážitku, produktů, obsahu a nabídek, které nakupující vidí, jednotlivci místo aby se všem zobrazoval stejný obchod. Když je dobře udělaná, zvyšuje konverzi a průměrnou hodnotu objednávky.",
    intro: [
      "Personalizace pokrývá hodně terénu, od sekce doporučeno pro tebe po zcela přizpůsobenou domovskou stránku. Společným vláknem je zacházet s různými nakupujícími různě podle toho, co o nich víš.",
    ],
    sections: [
      {
        heading: "Kde se personalizace odehrává",
        body: [
          "Na webu se objevuje jako doporučené produkty, přizpůsobené landing pages a dynamický obsah. V doporučeních seřazuje katalog pro každého nakupujícího. V emailu a SMS segmentuje zprávy podle chování nebo preference. V reklamách přizpůsobuje kreativu a publika.",
          "Většina obchodů nepotřebuje vše najednou. Nejnávratnější místa, kde začít, jsou doporučení produktů a segmentace emailu, protože obojí přímo ovlivňuje, co nakupující koupí a zda se vrátí.",
        ],
      },
      {
        heading: "Posun od third-party dat k zero-party datům",
        body: [
          "Klasická personalizace se silně spoléhala na third-party data a sledování napříč weby. Změny v prohlížečích a regulace soukromí učinily tento přístup křehkým a v mnoha případech nevyhovujícím předpisům.",
          "Trvalou náhradou jsou tvá vlastní data a přicházejí ve dvou formách. First-party data jsou to, co pozoruješ z interakcí nakupujícího s tvým obchodem, jako zobrazené stránky a předchozí objednávky. Zero-party data jsou to, co záměrně nabídnou, jako cíle, preference a problémy. Zero-party data jsou deklarovaná podmnožina first-party dat a jsou nejpřesnějším signálem záměru, protože ti to nakupující řekl přímo.",
          "Obojí je se souhlasem a nezmizí, když prohlížeč zablokuje cookie. Kvíz je nejpřímější způsob, jak sbírat zero-party data ve velkém měřítku.",
        ],
      },
      {
        heading: "Nejméně náročné místo, kde začít",
        body: [
          "Enterprise sady pro personalizaci dokážou přizpůsobit každý pixel, s cenou a harmonogramem implementace tomu odpovídajícím. Většina obchodů to nepotřebuje, aby viděla výsledky.",
          "Kvíz s doporučením produktů je nejjednodušší vstupní bod. Personalizuje nejdůležitější moment, výběr produktu, zachytí data o preferencích, která pak pohánějí personalizovaný email, a může být online týž den na bezplatném plánu.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt je zaměřený a samoobslužný způsob, jak začít personalizovat: kvíz, který přizpůsobí doporučení při první návštěvě a živí tvůj emailový nástroj daty o preferencích pro průběžnou segmentaci. Žádná enterprise smlouva, žádný tým datových vědců.",
      "Funguje na všech hlavních platformách a synchronizuje se s Klaviyo, Mailchimp, Omnisend, HubSpot a dalšími, takže personalizace jde z obchodu do schránky.",
    ],
    faqs: [
      {
        question: "Jaký je nejjednodušší způsob, jak začít s personalizací v ecommerce?",
        answer:
          "Kvíz s doporučením produktů. Personalizuje moment s největším dopadem, výběr produktu, funguje při první návštěvě, zachytí data o preferencích pro personalizovaný email a může být online týž den na bezplatném plánu.",
      },
      {
        question: "Vyžaduje personalizace v ecommerce cookies třetích stran?",
        answer:
          "Už ne, a stále méně se na ně může spoléhat. Trvalý přístup používá data, která nakupující dobrovolně poskytnou přímo, což je přesnější, se souhlasem a neovlivněné omezeními prohlížečů a soukromí.",
      },
      {
        question: "Potřebuji enterprise platformu, abych personalizoval svůj obchod?",
        answer:
          "Ne. Enterprise sady přizpůsobí vše za vysokou cenu, ale většina obchodů získá silnou návratnost ze zaměřené personalizace: doporučení a segmentace emailu, které kvíz zvládne na samoobslužném plánu.",
      },
    ],
    related: [
      { label: "Personalizovaná doporučení produktů", href: "/glossary/personalized-product-recommendations/" },
      { label: "Objevování produktů", href: "/glossary/product-discovery/" },
      { label: "Zero-party data", href: "/zero-party-data/" },
      { label: "First-party data", href: "/first-party-data/" },
      { label: "Porovnání RevenueHunt vs Nosto", href: "/compare/nosto/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "product-discovery": {
    slug: "product-discovery",
    term: "Objevování produktů",
    chip: "Koncept",
    title: "Co je objevování produktů v ecommerce?",
    description:
      "Objevování produktů je způsob, jak nakupující najdou správný produkt v tvém katalogu. Metody, proč to velké katalogy ztěžují a jak pomáhá řízený prodej.",
    h1: "Co je objevování produktů v ecommerce?",
    shortAnswer:
      "Objevování produktů je způsob, jak nakupující najdou správný produkt v tvém katalogu. Dobré objevování, přes vyhledávání, filtry a řízené kvízy, zavede nakupujícího z mám problém k tohle je ten produkt s co nejmenším třením.",
    intro: [
      "Nakupující málokdy přichází s přesnou znalostí tvého SKU. Přichází s potřebou. Objevování produktů je vše, co je mezi touto potřebou a správnou stránkou produktu.",
    ],
    sections: [
      {
        heading: "Hlavní metody objevování",
        body: [
          "Vyhledávání umožní nakupujícím, kteří vědí, co chtějí, to napsat. Procházení a filtry jim umožní zúžit podle kategorie a atributu. Doporučení vynesou na povrch relevantní produkty, jak procházejí. Řízený prodej, obvykle kvíz, se zeptá na jejich potřebu a ukáže jim odpověď.",
          "Každá metoda sedne jinému nakupujícímu. Vyhledávání funguje, když někdo zná název produktu. Filtry fungují, když znají atributy. Kvíz funguje, když znají problém, ale ne produkt, což je nejtěžší a nejčastější případ.",
        ],
      },
      {
        heading: "Proč větší katalogy ztěžují objevování",
        body: [
          "Obchod s deseti produkty sotva potřebuje nástroje pro objevování. Obchod se stovkami nebo tisíci ano. Čím víc prodáváš, tím pravděpodobnější je, že se nakupující cítí zahlcen a odejde, aniž by našel to, co pro něj bylo správné.",
          "To je paradox výběru v praxi: víc možností může konverzi snížit, ne zvýšit, pokud nakupujícím nedáš způsob, jak se jimi prokousat. Řízené objevování mění velký katalog z přítěže v přednost.",
        ],
      },
      {
        heading: "Objevování je páka konverze",
        body: [
          "Nakupující, který nenajde správný produkt, nekoupí jiný, odejde. Zlepšit objevování je často změna s největší pákou, jakou může obchod s hlubokým katalogem udělat, protože opraví krok, kde záměr potichu umírá.",
          "Kvíz je nejpřímější nástroj objevování pro nákup založený na potřebě, protože položí otázku, kterou by položil prodejce, a vrátí produkt, na který by ukázal.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt se postará o objevování produktů založené na potřebě: nakupující popíše svůj cíl nebo problém a kvíz seřadí tvůj živý katalog, aby vrátil správnou shodu, s tvrdými omezeními, která vyloučí cokoliv, co nesedí.",
      "Škáluje s tvým katalogem, funguje při první návštěvě a běží na Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace a samostatně.",
    ],
    faqs: [
      {
        question: "Jaký je rozdíl mezi objevováním produktů a vyhledáváním?",
        answer:
          "Vyhledávání je jedna metoda objevování, pro nakupující, kteří už vědí, co chtějí. Objevování produktů je širší a zahrnuje filtry, doporučení a řízené kvízy pro nakupující, kteří znají svou potřebu, ale ne konkrétní produkt.",
      },
      {
        question: "Jak kvíz zlepšuje objevování produktů?",
        answer:
          "Postará se o nejtěžší případ: nakupující, který zná svůj problém, ale ne produkt. Kvíz se zeptá na potřebu a seřadí katalog, aby vrátil správnou shodu, způsobem, jakým by ho vedl prodejce.",
      },
      {
        question: "Záleží na objevování produktů víc u velkých katalogů?",
        answer:
          "Ano. Čím víc produktů prodáváš, tím snadněji se nakupující cítí zahlceni a odejdou. Řízené objevování se prokouše velkým katalogem a mění jeho velikost ve výhodu místo v bariéru.",
      },
    ],
    related: [
      { label: "Kvíz pro řízený prodej", href: "/guided-selling-quiz/" },
      { label: "Kvíz na hledání produktů", href: "/product-finder-quiz/" },
      { label: "Personalizace v ecommerce", href: "/glossary/ecommerce-personalization/" },
      { label: "Porovnání RevenueHunt vs Zoovu", href: "/compare/zoovu/" },
      { label: "Šablony kvízů", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "lead-generation-quiz": {
    slug: "lead-generation-quiz",
    term: "Kvíz na generování leadů",
    chip: "Typ kvízu",
    title: "Co je kvíz na generování leadů?",
    description:
      "Kvíz na generování leadů zachytí kvalifikované přihlášené leady s integrovaným důvodem k přihlášení. Tady je, proč překonává registrační formulář a co zachytíš.",
    h1: "Co je kvíz na generování leadů?",
    shortAnswer:
      "Kvíz na generování leadů zachytí kvalifikované leady: nakupující odpoví na pár otázek, zadá svůj email, aby viděl výsledek, a ty získáš kontakt označený jeho deklarovanými preferencemi. Je to opt-in s integrovaným důvodem k přihlášení.",
    intro: [
      "Email zůstává nejnávratnějším kanálem v ecommerce, ale prostý registrační formulář konvertuje jen malý zlomek návštěvníků a neřekne ti o nich nic. Kvíz na generování leadů opraví oba problémy najednou.",
    ],
    sections: [
      {
        heading: "Proč kvíz překonává prostý registrační formulář",
        body: [
          "Políčko pro newsletter žádá o email a nabízí nanejvýš obecnou slevu. Kvíz na generování leadů nabízí personalizovaný výsledek, což je důvod, proč nakupující skutečně chce dát svou adresu. Výměna působí férově, takže ji přijme víc lidí.",
          "Také sbírá víc než email. Než se nakupující přihlásí, odpověděl na otázky o svých cílech, preferencích a omezeních, takže každý kontakt přichází už kvalifikovaný a segmentovaný.",
        ],
      },
      {
        heading: "Co zachytíš a jak to použít",
        body: [
          "Zachytíš email plus odpovědi z kvízu jako zero-party data. Ty odpovědi se stanou štítky v tvém emailovém nástroji: cíl, typ pleti, rozpočet, obdarovaný, cokoliv se kvíz ptal.",
          "Štítky mění jediný seznam v segmenty, ke kterým můžeš mluvit konkrétně. Lead, který řekl, že nakupuje pro citlivou pleť, dostane jiný email než ten, kdo kupuje dárek, a rozdíl se buduje při zachycení, nehádá se potom.",
        ],
      },
      {
        heading: "Výhoda souladu s předpisy",
        body: [
          "Protože nakupující nabízí data dobrovolně výměnou za výsledek, jsou to zero-party data: deklarovaný typ first-party dat, se souhlasem z definice. To obstojí mnohem lépe než odvozená nebo nakoupená third-party data, jak se pravidla soukromí zpřísňují a prohlížeče omezují sledování.",
          "Data vlastníš, jsou přesná, protože přišla přímo od nakupujícího, a nezávisí na žádné cookie třetí strany, aby zůstala užitečná.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt mění jakýkoliv kvíz v kvíz na generování leadů: zachytí email v bodě nejvyššího záměru a pak synchronizuje kontakt a štítky založené na odpovědích s Klaviyo, Mailchimp, Omnisend, HubSpot a dalšími.",
      "Protože je doporučení tím stimulem, stejný kvíz, který rozšiřuje tvůj seznam, také pohání prodej, a analytika opouštění ukáže přesně, kde upravit tok.",
    ],
    faqs: [
      {
        question: "Jak se kvíz na generování leadů liší od registračního formuláře?",
        answer:
          "Registrační formulář žádá o email a nabízí obecný stimul. Kvíz na generování leadů nabízí personalizovaný výsledek jako důvod k přihlášení a zachytí data o preferencích spolu s emailem, takže každý lead je kvalifikovaný a segmentovaný.",
      },
      {
        question: "Jaké informace kvíz na generování leadů zachytí?",
        answer:
          "Email nakupujícího plus jeho odpovědi z kvízu jako zero-party data. Ty odpovědi se synchronizují s tvým emailovým nástrojem jako štítky, takže kontakty přicházejí už segmentované podle cíle, preference nebo omezení.",
      },
      {
        question: "Je v souladu s předpisy používat data z kvízu na generování leadů?",
        answer:
          "Ano. Nakupující je nabízí dobrovolně výměnou za výsledek, takže jsou to first-party data se souhlasem. To obstojí lépe než odvozená nebo třetí strana, jak se pravidla soukromí a omezení prohlížečů zpřísňují.",
      },
    ],
    related: [
      { label: "Kvízový trychtýř", href: "/glossary/quiz-funnel/" },
      { label: "Nakupovatelný kvíz", href: "/glossary/shoppable-quiz/" },
      { label: "Zero-party data", href: "/zero-party-data/" },
      { label: "Integrace", href: "/integrations/" },
      { label: "Šablony kvízů", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "conversion-rate-optimization": {
    slug: "conversion-rate-optimization",
    term: "Optimalizace konverzního poměru (CRO)",
    chip: "Koncept",
    title: "Co je optimalizace konverzního poměru?",
    description:
      "Optimalizace konverzního poměru (CRO) zvyšuje podíl návštěvníků, kteří nakoupí. Jak se měří, kam se zaměřit a taktiky, které pohnou jehlou.",
    h1: "Co je optimalizace konverzního poměru (CRO)?",
    shortAnswer:
      "Optimalizace konverzního poměru (CRO) je praxe zvyšování procenta návštěvníků, kteří provedou požadovanou akci, obvykle nákup. Konverzní poměr měříš jako konverze dělené návštěvníky a pak ho zlepšuješ, aniž bys kupoval víc provozu.",
    intro: [
      "CRO spočívá v tom, vytěžit víc z provozu, který už máš. Zdvojnásobit konverzní poměr má stejný efekt na příjmy jako zdvojnásobit provoz, ale stojí mnohem méně.",
    ],
    sections: [
      {
        heading: "Jak se počítá konverzní poměr",
        body: [
          "Konverzní poměr je konverze dělené celkovým počtem návštěvníků, vyjádřené jako procento. Pokud 1 000 návštěvníků vyprodukuje 20 nákupů, je to konverzní poměr 2 %. Průměrné konverzní poměry v ecommerce jsou v nízkých jednociferných číslech, takže malé absolutní zisky jsou v relativním vyjádření velké: přejít z 2 % na 3 % je nárůst objednávek o 50 %.",
          "Stejná matematika platí pro jakýkoliv cíl, nejen pro nákupy. Přihlášení k emailu, dokončení kvízů a přidání do košíku jsou všechno konverze, které můžeš optimalizovat.",
        ],
      },
      {
        heading: "Na co se CRO ve skutečnosti zaměřuje",
        body: [
          "Dobré CRO najde konkrétní krok, kde záměr uniká, a opraví ho. Časté netěsnosti: stránka produktu, která neodpoví na skutečnou otázku nakupujícího, checkout s příliš velkým třením nebo stránka kategorie, která nechá nerozhodného nakupujícího před stěnou možností bez jakéhokoliv vedení.",
          "Je to smyčka, ne jednorázová oprava: zformuluj hypotézu, změň jen jednu věc, změř proti výchozí hodnotě, ponech to, co vyhraje. Disciplína je v měnění jedné proměnné najednou, abys věděl, co pohnulo číslem.",
        ],
      },
      {
        heading: "Taktiky, které pohnou číslem",
        body: [
          "Trvalá vítězství jsou srozumitelnost a relevance: rychlejší stránky, poctivé informace o produktu, méně kroků v checkoutu a pomoc nerozhodným nakupujícím vybrat. Slevové popupy mohou krátkodobě zvednout konverzi, ale zvyknou nakupující čekat na nabídky a nahlodávají marži.",
          "Pomoct nakupujícím vybrat je nejvíc přehlížená páka. Nakupující, který se nedokáže rozhodnout, nekonvertuje, a mřížka možností mu nepomůže. Řízený zážitek, který zredukuje katalog na sebejisté doporučení, odstraní nerozhodnost, která potichu zabíjí konverze.",
        ],
      },
    ],
    withRevenueHunt: [
      "Kvíz s doporučením produktů je taktika CRO zaměřená na únik kvůli nerozhodnosti. Místo aby nechal nakupujícího porovnávat stěnu produktů, položí pár otázek a vrátí personalizované a sebejisté doporučení, takže víc nakupujících dospěje k rozhodnutí o nákupu.",
      "Cestou také zachytí email a data o preferencích, takže návštěvníci, kteří při první návštěvě nenakoupí, se neztratí. Potenciální nárůst pro tvá vlastní čísla můžeš odhadnout kalkulačkou ROI kvízu.",
    ],
    faqs: [
      {
        question: "Jak se počítá konverzní poměr?",
        answer:
          "Vyděl počet konverzí počtem návštěvníků a vyjádři to jako procento. Například 20 nákupů z 1 000 návštěvníků je konverzní poměr 2 %. Stejný vzorec platí pro jakýkoliv cíl, jako přihlášení nebo dokončení kvízů.",
      },
      {
        question: "Jaký je dobrý konverzní poměr v ecommerce?",
        answer:
          "Většina ecommerce obchodů konvertuje v nízkých jednociferných číslech, často kolem 1 % až 3 %. Protože je základna malá, skromné absolutní zisky jsou v relativním vyjádření velké: přejít z 2 % na 3 % je nárůst objednávek o 50 %.",
      },
      {
        question: "Jak produktový kvíz zlepšuje konverzní poměr?",
        answer:
          "Míří na únik kvůli nerozhodnosti. Kvíz zredukuje velký katalog na personalizované a sebejisté doporučení, takže nerozhodní nakupující dospějí k rozhodnutí o nákupu místo aby odešli od mřížky možností.",
      },
    ],
    related: [
      { label: "Průměrná hodnota objednávky", href: "/glossary/average-order-value/" },
      { label: "Objevování produktů", href: "/glossary/product-discovery/" },
      { label: "Tipy na optimalizaci konverze", href: "/ecommerce-conversion-optimization-tips/" },
      { label: "Kalkulačka ROI kvízu", href: "/quiz-roi-calculator/" },
      { label: "Kvízový trychtýř", href: "/glossary/quiz-funnel/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "average-order-value": {
    slug: "average-order-value",
    term: "Průměrná hodnota objednávky (AOV)",
    chip: "Metrika",
    title: "Co je průměrná hodnota objednávky (AOV)?",
    description:
      "Průměrná hodnota objednávky (AOV) je to, kolik zákazník v průměru utratí za objednávku. Jak ji spočítat, proč na ní záleží a jak ji zvednout bez většího provozu.",
    h1: "Co je průměrná hodnota objednávky (AOV)?",
    shortAnswer:
      "Průměrná hodnota objednávky (AOV) je průměrná částka, kterou zákazník utratí v jediné objednávce. Spočítáš ji vydělením celkových příjmů počtem objednávek ve stejném období.",
    intro: [
      "AOV je jedno ze tří čísel, která určují tvé příjmy, vedle provozu a konverzního poměru. Zvednout ho zvyšuje příjmy z přesně stejného počtu objednávek, proto je to jedna z nejlevnějších růstových pák, které máš.",
    ],
    sections: [
      {
        heading: "Jak spočítat AOV",
        body: [
          "Vyděl celkové příjmy počtem objednávek v daném období. Pokud obchod vygeneruje 50 000 $ z 1 000 objednávek za měsíc, jeho AOV je 50 $. Sleduj ho v čase a podle zdroje provozu, protože kanál s vyšším AOV může mít větší hodnotu, i když konvertuje méně.",
          "AOV interaguje se vším ostatním. Vyšší AOV znamená, že každá konverze má větší hodnotu, což zvyšuje, kolik si můžeš dovolit utratit za získání zákazníka.",
        ],
      },
      {
        heading: "Proč na AOV záleží",
        body: [
          "Provoz a konverzní poměr přitahují většinu pozornosti, ale jsou to drahé páky: víc provozu stojí investici do reklam a zisky z konverze jsou stále těžší, jak optimalizuješ. AOV je páka, kterou můžeš pohnout u objednávek, které už získáváš.",
          "Také financuje akvizici. Čím větší hodnotu má každá objednávka, tím víc můžeš dražit za placený provoz a stále zůstat ziskový, což se skládá napříč celým trychtýřem.",
        ],
      },
      {
        heading: "Jak zvýšit AOV",
        body: [
          "Poctivé způsoby, jak zvednout AOV, všechny přidávají skutečnou hodnotu: doporučit doplňkové produkty, sdružit položky, které jdou dohromady, a pomoct nakupujícím koupit kompletní řešení místo jediného kousku. Cross-selling a upselling jsou taktiky; relevantní doporučení je to, co je činí funkčními místo otravnými.",
          "Klíčové slovo je relevantní. Obecné upozornění na doplněk se ignoruje. Doporučená sada, která skutečně sedne k tomu, co nakupující kupuje, se koupí, protože se čte jako pomoc, ne jako prodejní popostrčení.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt zvyšuje AOV doporučením kompletní sady místo jediného produktu. Recommendation slots vyhradí místo pro každou roli rutiny, stacku nebo balíčku, takže stránka s výsledky vrátí celé řešení s možností přidat sadu do košíku a volitelnou slevou navázanou na odpovědi.",
      "Protože každá položka odpovídá odpovědím nakupujícího, větší objednávka působí jako doporučení, ne jako upselling. Dopad na příjmy pro tvůj obchod můžeš odhadnout kalkulačkou ROI kvízu.",
    ],
    faqs: [
      {
        question: "Jak se počítá průměrná hodnota objednávky?",
        answer:
          "Vyděl celkové příjmy počtem objednávek ve stejném období. Například 50 000 $ příjmů z 1 000 objednávek je průměrná hodnota objednávky 50 $.",
      },
      {
        question: "Proč je AOV důležitý?",
        answer:
          "Zvyšuje příjmy z objednávek, které už získáváš, bez placení za víc provozu, a vyšší AOV ti umožní utratit víc za získání každého zákazníka při zachování ziskovosti. Je to jedna z nejlevnějších dostupných růstových pák.",
      },
      {
        question: "Jak může produktový kvíz zvýšit AOV?",
        answer:
          "Doporučením kompletní sady místo jediného produktu. Recommendation slots vrátí odpovídající rutinu, stack nebo balíček s možností přidat celou sadu do košíku, takže každá objednávka je větší, aniž by přestala působit personalizovaně.",
      },
    ],
    related: [
      { label: "Cross-selling a upselling", href: "/glossary/cross-selling-and-upselling/" },
      { label: "Optimalizace konverzního poměru", href: "/glossary/conversion-rate-optimization/" },
      { label: "Kvíz na tvorbu balíčků", href: "/solutions/bundle-builder/" },
      { label: "Kvíz na tvorbu rutiny", href: "/solutions/routine-builder/" },
      { label: "Kalkulačka ROI kvízu", href: "/quiz-roi-calculator/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "cross-selling-and-upselling": {
    slug: "cross-selling-and-upselling",
    term: "Cross-selling a upselling",
    chip: "Taktika",
    title: "Cross-selling vs upselling vysvětleno",
    description:
      "Cross-selling přidává související produkty; upselling posouvá k lepšímu. Tady je rozdíl, proč oba fungují a jak to kvíz dělá bez popostrčení.",
    h1: "Co je cross-selling a upselling?",
    shortAnswer:
      "Cross-selling doporučuje související produkty, které doplňují to, co nakupující kupuje, jako hydratační krém k čisticímu přípravku. Upselling doporučuje lepší nebo větší verzi toho, co už chce, jako větší velikost nebo prémiovou úroveň. Obojí zvyšuje hodnotu objednávky.",
    intro: [
      "Oba se házejí do jednoho pytle, protože oba zvyšují, kolik nakupující utratí, ale fungují v odlišných směrech. Vědět, který sedne do daného momentu, je rozdíl mezi užitečným a vtíravým.",
    ],
    sections: [
      {
        heading: "Cross-selling vs upselling: ten rozdíl",
        body: [
          "Cross-selling jde do strany. Přidá doplňkové položky k objednávce: klasické chceš k tomu hranolky?, nebo ochrannou fólii k telefonu. Cílem je úplnější nákup.",
          "Upselling jde nahoru. Posune nakupujícího k hodnotnější verzi toho, co už zvažuje: větší velikost, prémiový model, delší předplatné. Cílem je lepší sednutí za vyšší cenu, ne víc položek.",
        ],
      },
      {
        heading: "Proč oba fungují, když jsou relevantní",
        body: [
          "Obě taktiky zvyšují průměrnou hodnotu objednávky a obě se mohou pokazit. Relevantní cross-sell nebo upsell se čte jako užitečná rada; nerelevantní se čte jako obchod, který se snaží nafouknout účet, a nakupující ho ignorují nebo se naštvou.",
          "Relevance je vším, a relevance vyžaduje znát nakupujícího. Doporučení založené na tom, čeho se někdo skutečně snaží dosáhnout, zabere. Obecná sekce mohlo by se ti také líbit, zobrazená všem, ne.",
        ],
      },
      {
        heading: "Jak kvíz dělá cross-selling a upselling bez popostrčení",
        body: [
          "Kvíz zná cíl nakupujícího, než cokoliv doporučí, takže cross-sell a upsell jsou integrované do doporučení místo přidané v checkoutu. Může vrátit kompletní sadu (cross-sell) a nasměrovat ke správné úrovni pro deklarovanou potřebu (upsell) v jediném pohybu.",
          "Protože doporučení odpovídá na vlastní otázky nakupujícího, větší objednávka působí zaslouženě. Nakupující vidí řešení, které sedne, ne seznam doplňků.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt integruje cross-selly a upselly do samotného doporučení. Recommendation slots vyhradí místo pro každou doplňkovou roli, aby stránka s výsledky vrátila kompletní sadu, a logika založená na odpovědích nasměruje nakupující k velikosti, úrovni nebo balíčku, který sedne k tomu, co ti řekli.",
      "Stránka s výsledky podporuje přidání celé sady do košíku plus slevu navázanou na odpovědi, takže objednávka roste, protože je doporučení to správné, ne protože popup přerušil checkout.",
    ],
    faqs: [
      {
        question: "Jaký je rozdíl mezi cross-sellingem a upsellingem?",
        answer:
          "Cross-selling přidává doplňkové produkty k objednávce, jako hydratační krém k čisticímu přípravku. Upselling posouvá k lepší nebo větší verzi toho, co nakupující už chce, jako prémiové úrovni nebo větší velikosti. Obojí zvyšuje hodnotu objednávky.",
      },
      {
        question: "Fungují cross-selling a upselling vážně?",
        answer:
          "Ano, když je doporučení relevantní. Návrh, který sedne k cíli nakupujícího, se čte jako užitečný a koupí se. Obecné upozornění pro všechny stejně se ignoruje nebo otravuje, takže relevance je to, co odděluje oba výsledky.",
      },
      {
        question: "Jak kvíz dělá cross-selling a upselling?",
        answer:
          "Nejdřív se naučí cíl nakupujícího a pak integruje cross-sell a upsell do doporučení. Recommendation slots vrátí kompletní sadu a logika založená na odpovědích nasměruje ke správné úrovni, takže větší objednávka působí jako rada místo popostrčení.",
      },
    ],
    related: [
      { label: "Průměrná hodnota objednávky", href: "/glossary/average-order-value/" },
      { label: "Kvíz na tvorbu balíčků", href: "/solutions/bundle-builder/" },
      { label: "Kvíz na tvorbu rutiny", href: "/solutions/routine-builder/" },
      { label: "Nakupovatelný kvíz", href: "/glossary/shoppable-quiz/" },
      { label: "Personalizovaná doporučení produktů", href: "/glossary/personalized-product-recommendations/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "customer-segmentation": {
    slug: "customer-segmentation",
    term: "Segmentace zákazníků",
    chip: "Marketing",
    title: "Co je segmentace zákazníků?",
    description:
      "Segmentace zákazníků seskupuje nakupující podle sdílených rysů, abys mohl cílit na každou skupinu konkrétně. Typy, proč funguje a jak ji kvíz živí.",
    h1: "Co je segmentace zákazníků?",
    shortAnswer:
      "Segmentace zákazníků je praxe seskupování zákazníků podle sdílených rysů, jako jsou cíle, chování nebo demografie, abys mohl cílit na každou skupinu relevantní zprávou místo aby všichni dostali totéž.",
    intro: [
      "Jediná zpráva celému tvému seznamu nemluví k nikomu konkrétně. Segmentace ti umožní říct správnou věc správné skupině, proto segmentované kampaně konzistentně překonávají plošné nerozlišené rozesílání.",
    ],
    sections: [
      {
        heading: "Hlavní způsoby segmentace",
        body: [
          "Demografická segmentace seskupuje podle atributů jako věk nebo poloha. Behaviorální segmentace seskupuje podle toho, co zákazníci dělají: minulé nákupy, procházení, interakce. Psychografická segmentace seskupuje podle postojů a hodnot. Segmentace založená na potřebě seskupuje podle problému, který se zákazník snaží vyřešit.",
          "Pro ecommerce jsou segmenty založené na potřebě a chování obvykle nejvíc akční, protože se přímo přiřazují k tomu, co doporučit a co říct dál.",
        ],
      },
      {
        heading: "Proč segmentace funguje",
        body: [
          "Relevance pohání odezvu. Zákazník, který nakupuje pro suchou a citlivou pleť, by neměl dostat stejný email jako ten, kdo kupuje dárek, a když ho nedostanou, rostou míry otevření, kliknutí a konverze.",
          "Segmentace se také skládá v čase. Každá kampaň, kterou pošleš dobře definovanému segmentu, tě o něm naučí víc, což zpřesní tu další. Seznam se stane aktivem, ne jen kanálem pro rozesílání.",
        ],
      },
      {
        heading: "Datový problém za segmentací",
        body: [
          "Segmentovat můžeš jen podle toho, co víš, a většina obchodů toho o anonymním návštěvníkovi moc neví. Behaviorální data se hromadí pomalu a selhávají u nových nakupujících a third-party data jsou stále více omezovaná prohlížeči a regulací.",
          "Řešením je zeptat se. Když ti nakupující řekne svůj cíl, preferenci nebo omezení, můžeš podle toho segmentovat okamžitě a přesně, s jeho souhlasem. Tahle dobrovolně nabídnutá informace jsou zero-party data.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt mění odpovědi z kvízu v segmenty automaticky. Každá odpověď se stane zákaznickým štítkem, jako cíl:spánek nebo pleť:citlivá, který se synchronizuje s Klaviyo, Mailchimp, Omnisend, HubSpot a dalšími, takže kontakty přicházejí předem segmentované podle toho, co ti řekly.",
      "Protože jsou segmenty postavené z dat, která nakupující dobrovolně poskytl, jsou přesné od první návštěvy a nezávisí na sledování. Každá kampaň po kvízu může mluvit k segmentu místo k celému seznamu.",
    ],
    faqs: [
      {
        question: "Jaké jsou hlavní typy segmentace zákazníků?",
        answer:
          "Běžné základy jsou demografická (věk, poloha), behaviorální (nákupy, procházení, interakce), psychografická (postoje, hodnoty) a založená na potřebě (problém, který zákazník řeší). Pro ecommerce jsou segmenty založené na potřebě a chování obvykle nejvíc akční.",
      },
      {
        question: "Proč je segmentace zákazníků důležitá?",
        answer:
          "Dělá zprávu relevantní, což zvyšuje míry otevření, kliknutí a konverze oproti tomu, když všichni dostanou totéž. Také se skládá: každá kampaň definovanému segmentu tě o něm naučí víc a zpřesní tu další.",
      },
      {
        question: "Jak kvíz pomáhá se segmentací?",
        answer:
          "Ptá se nakupujících přímo, takže každá odpověď se stane zákaznickým štítkem, který se synchronizuje s tvým emailovým nástrojem. Kontakty přicházejí předem segmentované podle cíle, preference nebo omezení, přesné od první návštěvy a bez závislosti na sledování.",
      },
    ],
    related: [
      { label: "Personalizovaná doporučení produktů", href: "/glossary/personalized-product-recommendations/" },
      { label: "Kvíz na generování leadů", href: "/glossary/lead-generation-quiz/" },
      { label: "Zero-party data", href: "/zero-party-data/" },
      { label: "Personalizace v ecommerce", href: "/glossary/ecommerce-personalization/" },
      { label: "Integrace", href: "/integrations/" },
    ],
    verifiedAsOf: VERIFIED,
  },
};

/** Průvodci a stránky, na které odkazuje hub glosáře. */
export const GLOSSARY_RELATED_GUIDES_CS: GlossaryLink[] = [
  {
    label: "Kvíz na hledání produktů",
    href: "/product-finder-quiz/",
    blurb: "Co je kvíz na hledání produktů, kdy ho použít a 12 živých příkladů.",
  },
  {
    label: "Kvíz pro řízený prodej",
    href: "/guided-selling-quiz/",
    blurb: "Jak funguje řízený prodej v ecommerce a jak kvíz sestavit.",
  },
  {
    label: "Zero-party data",
    href: "/zero-party-data/",
    blurb: "Co jsou zero-party data, proč překonávají behaviorální sledování a jak je kvíz zachytí.",
  },
  {
    label: "Řešení podle oboru",
    href: "/solutions/",
    blurb: "Řešení kvízů s doporučením produktů pro péči o pleť, doplňky stravy, módu a další.",
  },
  {
    label: "Kalkulačka ROI kvízu",
    href: "/quiz-roi-calculator/",
    blurb: "Odhadni příjmy navíc, které by kvíz s doporučením produktů mohl přidat tvému obchodu.",
  },
];
