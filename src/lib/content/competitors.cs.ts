import type { Competitor } from "../competitors";

// Sdílené hodnoty sloupce RevenueHunt (ověřeno podle kompendia + dokumentace).
// Drží se jako pojmenované konstanty, aby každá tabulka konkurenta vyprávěla
// stejný příběh RH.
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

export const COMPETITORS_CS: Record<string, Competitor> = {
  "octane-ai": {
    slug: "octane-ai",
    name: "Octane AI",
    category: "Aplikace kvízů pro Shopify",
    title: "RevenueHunt vs Octane AI: alternativa k Octane AI",
    description:
      "RevenueHunt vs Octane AI: bezplatný plán, žádný vodoznak Shopify a neomezené kvízy od $39/mo. Alternativa k Octane AI pro produktové kvízy.",
    h1: "RevenueHunt vs Octane AI",
    heroSubtitle:
      "Oba vytvářejí kvízy s doporučením produktů pro Shopify. RevenueHunt navíc přidává bezplatný plán, neomezené kvízy a žádný vodoznak, a to za zlomek ceny.",
    intro: [
      "Octane AI je aplikace pro produktové kvízy a personalizaci určená pro Shopify. Ceny vycházejí z kreditů, začínají na $50/měsíc a bezplatný plán neexistuje. Je to schopný nástroj, hlavně pro velké kosmetické značky. Vstupní plán tě ale omezuje na dva kvízy a ponechává logo Octane AI ve tvém kvízu, dokud nepřejdeš na plán Plus za $200/měsíc.",
      "RevenueHunt je kvíz s doporučením produktů, který používá více než 20 000 značek (4,9★, více než 550 recenzí). Začni zdarma, RevenueHunt nikdy nepřidává vodoznak do tvého kvízu na Shopify v žádném plánu, umožní ti vytvářet neomezené kvízy od prvního dne a funguje i mimo Shopify na WooCommerce, BigCommerce, Magento, Wix a dalších.",
    ],
    rows: [
      { feature: "Bezplatný plán", rh: RH.freePlan, them: "no" },
      { feature: "Počáteční cena placeného plánu", rh: RH.startingPaid, them: "$50/mo" },
      { feature: "Cenový model", rh: "Pevná sazba, podle odpovědí", them: "Na základě kreditů + nadspotřeba" },
      { feature: "Neomezené kvízy ve vstupním plánu", rh: RH.unlimitedQuizzes, them: "no" },
      { feature: "Žádný vodoznak poskytovatele na Shopify (jakýkoliv plán)", rh: RH.noForcedBranding, them: "Logo až do plánu Plus za $200/mo" },
      { feature: "Doporučuje reálné produkty z tvého katalogu", rh: RH.catalogRecs, them: "yes" },
      { feature: "Nativní aplikace pro Shopify (Built for Shopify)", rh: RH.shopifyNative, them: "no" },
      { feature: "Funguje na WooCommerce, BigCommerce, Magento, Wix a dalších", rh: RH.multiPlatform, them: "no" },
      { feature: "Tvorba kvízů s AI (nastavení za 60 sekund)", rh: RH.aiBuilder, them: "yes" },
      { feature: "Neomezená podmíněná / větvící logika", rh: RH.branching, them: "yes" },
      { feature: "Analytika opouštění otázku po otázce", rh: RH.analytics, them: "yes" },
      { feature: "Integrace s Klaviyo a email / CRM", rh: RH.emailIntegrations, them: "yes" },
    ],
    whySwitch: [
      {
        title: "Začni zdarma a pak plať pevnou sazbu",
        body: "Octane AI nemá bezplatný plán a začíná na $50/měsíc s kredity, s nadspotřebou $0,10 za kredit, jakmile ti dojdou. RevenueHunt má skutečně bezplatný plán a pevné ceny podle odpovědí od $39/měsíc. Žádné počítání kreditů, žádné překvapivé nadspotřeby.",
      },
      {
        title: "Zachovej si svou značku od prvního dne",
        body: "Octane AI zobrazuje své logo ve tvém kvízu, dokud nepřejdeš na plán Plus za $200/měsíc. RevenueHunt nikdy nepřidává vodoznak do kvízů na Shopify, v žádném plánu, včetně bezplatného.",
      },
      {
        title: "Vytvoř tolik kvízů, kolik potřebuješ",
        body: "Vstupní plán Octane AI tě omezuje na dva kvízy. RevenueHunt ti umožní vytvářet neomezené kvízy v každém plánu, takže můžeš mít kvíz pro každou kolekci, kampaň nebo vstupní stránku.",
      },
      {
        title: "Prodávej kdekoliv, nejen na Shopify",
        body: "Octane AI je výhradně pro Shopify. RevenueHunt funguje nativně na Shopify a také na WooCommerce, BigCommerce, Magento, Wix, Squarespace a jako samostatný hostovaný kvíz.",
      },
    ],
    bestFor:
      "Octane AI je rozumná volba pro enterprise kosmetické značky, které už jsou na Shopify Plus, chtějí hlubokou personalizaci s AI a mají rozpočet na $200/měsíc a více. Pokud chceš bezplatný plán, pevné ceny, kvízy bez značky nebo podporu více platforem, RevenueHunt ti sedne lépe.",
    migration:
      "Přechod z Octane AI je rychlý. Znovu vytvoř svůj kvíz v drag-and-drop editoru RevenueHunt (nebo ho vygeneruj za 60 sekund s naším AI Copilotem), vlož ho a propoj Klaviyo. Většina obchodů je aktivní ještě týž den a náš tým podpory ti pomůže s migrací.",
    faqs: [
      {
        question: "Je RevenueHunt levnější než Octane AI?",
        answer:
          "Ano. RevenueHunt má bezplatný plán a placené plány od $39/měsíc s pevnými cenami podle odpovědí. Octane AI nemá bezplatný plán, začíná na $50/měsíc s kreditním systémem a účtuje $0,10 za kredit v nadspotřebě.",
      },
      {
        question: "Přidává RevenueHunt své logo do mého kvízu jako Octane AI?",
        answer:
          "Ne. RevenueHunt nikdy nepřidává vodoznak do kvízů na Shopify v žádném plánu. Octane AI ponechává své logo ve tvém kvízu, dokud nepřejdeš na plán Plus za $200/měsíc.",
      },
      {
        question: "Funguje RevenueHunt na jiných platformách než Shopify?",
        answer:
          "Ano. RevenueHunt funguje na Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace a jako samostatný hostovaný kvíz. Octane AI je výhradně pro Shopify.",
      },
      {
        question: "Můžu migrovat svůj kvíz z Octane AI do RevenueHunt?",
        answer:
          "Ano. Znovu vytvoř svůj kvíz v editoru RevenueHunt nebo ho vygeneruj pomocí AI Quiz Copilota a poté propoj svůj emailový nástroj. Většina obchodníků je aktivní týž den a náš tým pomáhá s migrací.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  typeform: {
    slug: "typeform",
    name: "Typeform",
    category: "Obecný nástroj na formuláře a dotazníky",
    title: "RevenueHunt vs Typeform pro ecommerce kvízy",
    description:
      "RevenueHunt vs Typeform: kvíz Built-for-Shopify, který doporučuje reálné produkty a generuje prodeje, ne jen formulář. Bezplatný plán, od $39/mo.",
    h1: "RevenueHunt vs Typeform",
    heroSubtitle:
      "Typeform vytváří krásné formuláře a dotazníky. RevenueHunt vytváří kvízy s doporučením produktů, které se napojí na tvůj katalog Shopify a mění odpovědi v prodeje.",
    intro: [
      "Typeform je univerzální online nástroj na tvorbu formulářů a dotazníků. Je skvělý pro dotazníky, formuláře na sběr leadů a výzkum, s konverzačním designem, jedna otázka po druhé. Nemá ale nativní integraci se Shopify, ani synchronizaci produktového katalogu, ani doporučovací engine. Sbírá odpovědi; nedoporučuje produkty.",
      "RevenueHunt je kvíz s doporučením produktů Built-for-Shopify, který používá více než 20 000 značek (4,9★, více než 550 recenzí). Přiřazuje odpovědi každého nakupujícího ke správným produktům z tvého živého katalogu, zobrazí personalizovanou stránku s výsledky s přímým přidáním do košíku a zachytí leady do Klaviyo. Prodejní trychtýř, ne jen formulář.",
    ],
    rows: [
      { feature: "Bezplatný plán", rh: RH.freePlan, them: "yes (omezený)" },
      { feature: "Počáteční cena placeného plánu", rh: RH.startingPaid, them: "$29/mo" },
      { feature: "Vytvořeno pro produktová doporučení v ecommerce", rh: RH.ecommerceRecs, them: "no" },
      { feature: "Doporučuje reálné produkty z katalogu tvého obchodu", rh: RH.catalogRecs, them: "no" },
      { feature: "Synchronizace produktového katalogu", rh: "yes", them: "no" },
      { feature: "Nativní aplikace pro Shopify (Built for Shopify)", rh: RH.shopifyNative, them: "no" },
      { feature: "Stránka s výsledky s přímým přidáním do košíku", rh: "yes", them: "no" },
      { feature: "Tvorba kvízů s AI (nastavení za 60 sekund)", rh: RH.aiBuilder, them: "yes (formuláře s AI)" },
      { feature: "Podmíněná / větvící logika", rh: RH.branching, them: "yes (logické skoky)" },
      { feature: "Analytika opouštění otázku po otázce", rh: RH.analytics, them: "yes" },
      { feature: "Integrace s Klaviyo a email / CRM", rh: RH.emailIntegrations, them: "yes" },
      { feature: "Funguje na WooCommerce, BigCommerce, Magento a dalších", rh: RH.multiPlatform, them: "no" },
    ],
    whySwitch: [
      {
        title: "Doporučuje produkty, nejen sbírá odpovědi",
        body: "Typeform zaznamená odpovědi a tím to končí. Doporučovací engine RevenueHunt řadí přesné produkty, varianty a kolekce z tvého katalogu podle odpovědí každého nakupujícího a zobrazí je na personalizované stránce s výsledky.",
      },
      {
        title: "Vytvořeno pro Shopify a pro ecommerce",
        body: "Typeform nemá nativní integraci se Shopify ani synchronizaci katalogu. RevenueHunt je aplikace Built-for-Shopify se synchronizací katalogu v reálném čase a automatickou lokalizací názvů, popisů a cen produktů přes Shopify Markets.",
      },
      {
        title: "Trychtýř, ne formulář",
        body: "RevenueHunt mění kvíz v prodejní cestu: personalizované výsledky, přímé přidání do košíku, slevové bloky a sběr emailů do Klaviyo, aby kvíz skutečně generoval příjmy, ne jen data.",
      },
      {
        title: "Stvořeno pro obchodníky",
        body: "Zapomeň na stavění obecných formulářů. Použij hotové šablony kvízů pro péči o pleť, doplňky stravy, módu a další, nebo nech AI Copilota vytvořit kompletní produktový kvíz z popisu tvého obchodu za zhruba 60 sekund.",
      },
    ],
    bestFor:
      "Typeform je vynikající pro dotazníky, formuláře na sběr leadů, zpětnou vazbu a výzkum tam, kde nepotřebuješ doporučovat produkty. Pokud je tvým cílem pomoci nakupujícím na Shopify najít správný produkt a koupit ho, RevenueHunt je na to ušitý na míru.",
    migration:
      "Už používáš kvíz v Typeformu? Znovu ho vytvoř v RevenueHunt za pár minut, nebo ho vygeneruj s AI Copilotem, propoj své produkty a připoj Klaviyo. Zachováš si konverzační pocit a přidáš skutečný doporučovací engine a přidání do košíku.",
    faqs: [
      {
        question: "Umí Typeform doporučovat produkty jako RevenueHunt?",
        answer:
          "Ne. Typeform je obecný nástroj na formuláře a dotazníky bez synchronizace produktového katalogu a bez doporučovacího enginu. RevenueHunt přiřazuje odpovědi z kvízu k reálným produktům z tvého obchodu a zobrazí je na personalizované stránce s výsledky s přidáním do košíku.",
      },
      {
        question: "Integruje se RevenueHunt se Shopify, zatímco Typeform ne?",
        answer:
          "RevenueHunt je aplikace Built-for-Shopify se synchronizací katalogu v reálném čase a lokalizací Shopify Markets. Typeform nemá nativní integraci doporučování produktů se Shopify. Není vytvořený pro objevování produktů v ecommerce.",
      },
      {
        question: "Je RevenueHunt lepší než Typeform pro ecommerce kvíz?",
        answer:
          "Pro kvízy s doporučením produktů ano. RevenueHunt je na to ušitý na míru. Pro obecné dotazníky a lead formuláře je Typeform dobrá volba. Řeší různé problémy.",
      },
      {
        question: "Můžu zachytávat leady a posílat je do Klaviyo?",
        answer:
          "Ano. RevenueHunt zachytí emaily v kvízu a synchronizuje odpovědi a zákaznické štítky s Klaviyo, Mailchimp, Omnisend, HubSpot a dalšími, takže můžeš navázat personalizovanými kampaněmi.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  zoovu: {
    slug: "zoovu",
    name: "Zoovu",
    category: "Enterprise platforma pro objevování produktů",
    title: "RevenueHunt vs Zoovu: samoobslužná alternativa",
    description:
      "RevenueHunt vs Zoovu: zaměřený a samoobslužný produktový kvíz pro Shopify, s bezplatným plánem a cenami od $39/mo, ne enterprise sada pro objevování produktů.",
    h1: "RevenueHunt vs Zoovu",
    heroSubtitle:
      "Zoovu je enterprise platforma pro objevování produktů a řízený prodej, která se prodává přes demo. RevenueHunt je zaměřený produktový kvíz, který si můžeš nainstalovat ještě dnes: zdarma na začátek, transparentní ceny, aktivní týž den.",
    intro: [
      "Zoovu je enterprise platforma pro objevování produktů, která spojuje vyhledávání s AI, řízený prodej, doporučení produktů a vizuální konfigurátory (CPQ) pro velké B2C a B2B značky s obrovskými a komplexními katalogy. Je nezávislá na platformě, prodává se přes dema s individuálními enterprise cenami a nemá bezplatný plán ani samoobslužnou registraci.",
      "RevenueHunt je zaměřený kvíz s doporučením produktů, který používá více než 20 000 značek (4,9★, více než 550 recenzí). Místo enterprise sady pro objevování dělá jednu věc výjimečně dobře, vede nakupující na Shopify ke správnému produktu, s transparentními cenami, bezplatným plánem a nastavením týž den, bez nutnosti prodejního hovoru.",
    ],
    rows: [
      { feature: "Bezplatný plán", rh: RH.freePlan, them: "no" },
      { feature: "Transparentní veřejné ceny", rh: RH.transparentPricing, them: "Individuální / vyžádej si demo" },
      { feature: "Počáteční cena", rh: RH.startingPaid, them: "Řízeno prodejem (enterprise)" },
      { feature: "Samoobslužné nastavení (bez prodejního hovoru)", rh: "yes", them: "no" },
      { feature: "Ušito na míru pro kvízy s doporučením produktů", rh: RH.ecommerceRecs, them: "Kvíz je modul v sadě pro objevování" },
      { feature: "Doporučuje reálné produkty z tvého katalogu", rh: RH.catalogRecs, them: "yes" },
      { feature: "Nativní aplikace pro Shopify (Built for Shopify)", rh: RH.shopifyNative, them: "Přes integraci" },
      { feature: "Tvorba kvízů s AI (nastavení za 60 sekund)", rh: RH.aiBuilder, them: "Enterprise sada AI" },
      { feature: "Neomezené kvízy", rh: RH.unlimitedQuizzes, them: "yes" },
      { feature: "Neomezená podmíněná / větvící logika", rh: RH.branching, them: "yes" },
      { feature: "Analytika opouštění otázku po otázce", rh: RH.analytics, them: "yes" },
      { feature: "Integrace s Klaviyo a email / CRM", rh: RH.emailIntegrations, them: "yes" },
    ],
    whySwitch: [
      {
        title: "Samoobsluha, ne prodejní hovor",
        body: "Zoovu se prodává přes dema a individuální enterprise smlouvy bez veřejných cen. RevenueHunt nainstaluješ a je hotovo: vyber plán, vytvoř kvíz a publikuj. Žádné firemní nákupy, žádný implementační projekt.",
      },
      {
        title: "Aktivní za pár minut, ne nasazení",
        body: "Zoovu je těžká sada pro objevování, která zahrnuje vyhledávání, konfigurátory a řízený prodej napříč mnoha systémy. RevenueHunt je zaměřená aplikace kvízů, kterou většina obchodníků spustí týž den, s AI Copilotem, který poskládá kompletní kvíz za 60 sekund.",
      },
      {
        title: "Ceny, které sednou rostoucí značce",
        body: "Enterprise platformy pro objevování mají ceny pro globální katalogy a velké týmy. RevenueHunt začíná zdarma a škáluje podle odpovědí od $39/měsíc, na míru značkám na Shopify a Shopify Plus.",
      },
      {
        title: "Jednoduchost Built-for-Shopify",
        body: "RevenueHunt je aplikace Built-for-Shopify se synchronizací katalogu v reálném čase a lokalizací Shopify Markets, hodnocená 4,9★ od více než 550 obchodníků. Hloubka, kterou potřebuješ pro objevování produktů, bez enterprise zátěže.",
      },
    ],
    bestFor:
      "Zoovu sedne velkým firmám s masivními a komplexními katalogy (spotřební elektronika, domácí spotřebiče, průmysl, B2B), které potřebují konfigurátory, CPQ a řízený prodej napříč mnoha systémy, a mají rozpočet a tým na enterprise nasazení. Pokud chceš zaměřený, cenově dostupný a samoobslužný kvíz pro Shopify, RevenueHunt ti sedne lépe.",
    migration:
      "Přechod ze Zoovu je jednoduchý. Vytvoř svůj kvíz v RevenueHunt (nebo ho vygeneruj s AI Copilotem), vlož ho a propoj Klaviyo nebo své CRM. Žádný implementační projekt. Většina obchodů je aktivní týž den a podpora ti pomůže to zvládnout.",
    faqs: [
      {
        question: "Kolik stojí RevenueHunt ve srovnání se Zoovu?",
        answer:
          "RevenueHunt má bezplatný plán a transparentní placené plány od $39/měsíc. Zoovu ceny nezveřejňuje. Je to enterprise platforma řízená prodejem, která cenu nabídne individuálně po demu.",
      },
      {
        question: "Je RevenueHunt enterprise platforma pro objevování jako Zoovu?",
        answer:
          "Ne, a o to právě jde. Zoovu spojuje vyhledávání s AI, konfigurátory, CPQ a řízený prodej pro velké katalogy. RevenueHunt se zaměřuje na kvízy s doporučením produktů pro Shopify a tu jednu věc dělá výjimečně dobře, se samoobslužným nastavením a bez prodejního hovoru.",
      },
      {
        question: "Dělá RevenueHunt řízený prodej jako Zoovu?",
        answer:
          "Ano. Kvíz RevenueHunt je řízený prodej: pokládá správné otázky a přiřazuje odpovědi přesným produktům z tvého katalogu, s personalizovanou stránkou s výsledky a přímým přidáním do košíku, bez enterprise cen a nasazení.",
      },
      {
        question: "Jak dlouho trvá nastavení oproti Zoovu?",
        answer:
          "Většina obchodníků RevenueHunt spustí týž den a AI Quiz Copilot dokáže poskládat kompletní kvíz za zhruba 60 sekund. Zoovu bývá enterprise implementace řízená prodejem.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  jebbit: {
    slug: "jebbit",
    name: "Jebbit",
    category: "Enterprise platforma pro zero-party data (nyní součást BlueConic)",
    title: "RevenueHunt vs Jebbit: samoobslužná alternativa",
    description:
      "RevenueHunt vs Jebbit: samostatný a samoobslužný produktový kvíz pro Shopify, s bezplatným plánem od $39/mo. Jebbit je nyní součástí enterprise CDP od BlueConic.",
    h1: "RevenueHunt vs Jebbit",
    heroSubtitle:
      "Jebbit je nyní součástí enterprise platformy zákaznických dat BlueConic, která se prodává přes demo. RevenueHunt je samostatný a samoobslužný produktový kvíz: zdarma na začátek, nativní pro Shopify, aktivní týž den.",
    intro: [
      "Jebbit vytváří interaktivní kvízy, vyhledávače produktů a toky preferencí pro sběr deklarovaných (zero-party) dat. Byl akvírován a nyní je „Experiences by Jebbit“, součást platformy zákaznických dat BlueConic, zaměřená na enterprise a střední B2C značky (L'Oréal, Express, Heineken), nezávislá na platformě a prodávaná přes dema bez veřejných cen a bez bezplatného plánu.",
      "RevenueHunt je samostatný kvíz s doporučením produktů, který používá více než 20 000 značek (4,9★, více než 550 recenzí). Nemusíš kupovat CDP, abys ho mohl používat: je to zaměřený kvíz, Built-for-Shopify, s transparentními cenami, bezplatným plánem a nastavením týž den, samoobslužně, bez prodejního hovoru.",
    ],
    rows: [
      { feature: "Bezplatný plán", rh: RH.freePlan, them: "no" },
      { feature: "Transparentní veřejné ceny", rh: RH.transparentPricing, them: "Individuální / vyžádej si demo" },
      { feature: "Počáteční cena", rh: RH.startingPaid, them: "Řízeno prodejem (enterprise)" },
      { feature: "Samoobslužné nastavení (bez prodejního hovoru)", rh: "yes", them: "no" },
      { feature: "Samostatný produkt (bez nutnosti koupit platformu)", rh: "yes", them: "Nyní součást CDP od BlueConic" },
      { feature: "Doporučuje reálné produkty z tvého katalogu", rh: RH.catalogRecs, them: "yes" },
      { feature: "Nativní aplikace pro Shopify (Built for Shopify)", rh: RH.shopifyNative, them: "Přes integraci" },
      { feature: "Tvorba kvízů s AI (nastavení za 60 sekund)", rh: RH.aiBuilder, them: "no" },
      { feature: "Neomezené kvízy", rh: RH.unlimitedQuizzes, them: "yes" },
      { feature: "Neomezená podmíněná / větvící logika", rh: RH.branching, them: "yes" },
      { feature: "Analytika opouštění otázku po otázce", rh: RH.analytics, them: "yes" },
      { feature: "Zachytává zero-party / deklarovaná data", rh: "yes", them: "yes" },
    ],
    whySwitch: [
      {
        title: "Samostatný kvíz, ne nákup platformy",
        body: "Jebbit je nyní „Experiences by Jebbit“ uvnitř CDP od BlueConic. RevenueHunt je zaměřená aplikace, kterou můžeš používat samostatně. Žádná platforma zákaznických dat k nákupu nebo implementaci.",
      },
      {
        title: "Samoobsluha, ne prodejní hovor",
        body: "Jebbit/BlueConic se prodává přes dema a individuální enterprise smlouvy bez veřejných cen. RevenueHunt nainstaluješ a je hotovo, s bezplatným plánem a transparentními cenami od $39/měsíc.",
      },
      {
        title: "Vytvořeno pro Shopify, aktivní týž den",
        body: "RevenueHunt je aplikace Built-for-Shopify se synchronizací katalogu v reálném čase a přímým přidáním do košíku, a s AI Copilotem, který poskládá kompletní kvíz za 60 sekund. Většina obchodníků spustí týž den.",
      },
      {
        title: "Tvá zero-party data zůstávají tvá",
        body: "Každá odpověď v kvízu je zero-party datum, které tvoji nakupující dobrovolně poskytnou. RevenueHunt synchronizuje odpovědi a zákaznické štítky s Klaviyo, Mailchimp, Omnisend, HubSpot a dalšími. K jejich využití nepotřebuješ CDP.",
      },
    ],
    bestFor:
      "Jebbit jako součást BlueConic sedne enterprise B2C značkám, které chtějí zážitky s deklarovanými daty pevně provázané s kompletní platformou zákaznických dat a aktivované napříč mnoha kanály, s rozpočtem na CDP. Pokud chceš samostatný, cenově dostupný a samoobslužný kvíz pro Shopify, RevenueHunt ti sedne lépe.",
    migration:
      "Odchod z Jebbitu, nebo zvažování BlueConic, je jednoduchý. Vytvoř svůj kvíz v RevenueHunt (nebo ho vygeneruj s AI Copilotem), vlož ho a propoj Klaviyo nebo své CRM. Většina obchodů je aktivní týž den a tvá zero-party data dál proudí do tvých emailových nástrojů.",
    faqs: [
      {
        question: "Je Jebbit stále dostupný samostatně?",
        answer:
          "Jebbit je nyní „Experiences by Jebbit“, součást platformy zákaznických dat BlueConic. RevenueHunt je samostatný produktový kvíz, který můžeš používat bez nákupu CDP: samoobslužně, s bezplatným plánem od $39/měsíc.",
      },
      {
        question: "Kolik stojí RevenueHunt ve srovnání s Jebbitem?",
        answer:
          "RevenueHunt má bezplatný plán a transparentní placené plány od $39/měsíc. Jebbit/BlueConic ceny nezveřejňuje. Je to enterprise platforma řízená prodejem, která cenu nabídne individuálně po demu.",
      },
      {
        question: "Sbírá RevenueHunt zero-party (deklarovaná) data jako Jebbit?",
        answer:
          "Ano. Každá odpověď v kvízu je zero-party datum, které tvoji nakupující dobrovolně poskytnou. RevenueHunt synchronizuje odpovědi a zákaznické štítky s Klaviyo, Mailchimp, Omnisend, HubSpot a dalšími pro segmentaci a personalizovaný marketing.",
      },
      {
        question: "Jak dlouho trvá nastavení oproti Jebbitu?",
        answer:
          "Většina obchodníků RevenueHunt spustí týž den a AI Quiz Copilot dokáže poskládat kompletní kvíz za zhruba 60 sekund. Jebbit/BlueConic bývá enterprise implementace řízená prodejem.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  nosto: {
    slug: "nosto",
    name: "Nosto",
    category: "Enterprise platforma pro personalizaci",
    title: "RevenueHunt vs Nosto: samoobslužná alternativa",
    description:
      "RevenueHunt vs Nosto: zaměřený a samoobslužný produktový kvíz, který zachytává zero-party data, s bezplatným plánem od $39/mo, ne enterprise sada pro personalizaci.",
    h1: "RevenueHunt vs Nosto",
    heroSubtitle:
      "Nosto je enterprise sada pro personalizaci, vyhledávání a merchandising, která se prodává přes demo. RevenueHunt je zaměřený zero-party produktový kvíz, který si můžeš nainstalovat ještě dnes: zdarma na začátek, aktivní týž den.",
    intro: [
      "Nosto je Commerce Experience Platform, která spojuje doporučení produktů s AI, personalizované vyhledávání na webu, merchandising a personalizaci obsahu pro enterprise a střední značky. Je nezávislá na platformě, prodává se přes dema s individuálními enterprise cenami a nemá bezplatný plán ani samoobslužnou registraci. Její personalizace vychází především z behaviorálních dat, ne z kvízů.",
      "RevenueHunt je zaměřený kvíz s doporučením produktů, který používá více než 20 000 značek (4,9★, více než 550 recenzí). Místo enterprise sady vede nakupující ke správnému produktu tak, že se jich přímo ptá, a zachytává zero-party data, která vlastníš, s transparentními cenami, bezplatným plánem a nastavením týž den, bez nutnosti prodejního hovoru.",
    ],
    rows: [
      { feature: "Bezplatný plán", rh: RH.freePlan, them: "no" },
      { feature: "Transparentní veřejné ceny", rh: RH.transparentPricing, them: "Individuální / vyžádej si demo" },
      { feature: "Počáteční cena", rh: RH.startingPaid, them: "Řízeno prodejem (enterprise)" },
      { feature: "Samoobslužné nastavení (bez prodejního hovoru)", rh: "yes", them: "no" },
      { feature: "Ušito na míru pro kvízy s doporučením produktů", rh: RH.ecommerceRecs, them: "Sada pro personalizaci, neřízená kvízem" },
      { feature: "Zachytává zero-party data (nakupující ti to řeknou přímo)", rh: "yes", them: "Převážně behaviorální / prediktivní" },
      { feature: "Doporučuje reálné produkty z tvého katalogu", rh: RH.catalogRecs, them: "yes" },
      { feature: "Nativní aplikace pro Shopify (Built for Shopify)", rh: RH.shopifyNative, them: "yes" },
      { feature: "Tvorba kvízů s AI (nastavení za 60 sekund)", rh: RH.aiBuilder, them: "no" },
      { feature: "Neomezené kvízy", rh: RH.unlimitedQuizzes, them: "Není to nástroj na kvízy" },
      { feature: "Analytika opouštění otázku po otázce", rh: RH.analytics, them: "yes" },
      { feature: "Integrace s Klaviyo a email / CRM", rh: RH.emailIntegrations, them: "yes" },
    ],
    whySwitch: [
      {
        title: "Samoobsluha, ne prodejní hovor",
        body: "Nosto se prodává přes dema a individuální enterprise smlouvy bez veřejných cen. RevenueHunt nainstaluješ a je hotovo: vyber plán, vytvoř kvíz a publikuj, s bezplatným plánem a transparentními cenami od $39/měsíc.",
      },
      {
        title: "Zero-party data, ne jen behaviorální sledování",
        body: "Nosto personalizuje hlavně z behaviorálních a prediktivních signálů. RevenueHunt se ptá nakupujících přímo pomocí kvízu a zachytává zero-party data, která vlastníš a můžeš synchronizovat s Klaviyo, Mailchimp, Omnisend a dalšími.",
      },
      {
        title: "Aktivní za pár minut, ne nasazení",
        body: "Nosto je sada více modulů (doporučení, vyhledávání, merchandising), která obvykle vyžaduje onboarding. RevenueHunt je zaměřená aplikace kvízů, kterou většina obchodníků spustí týž den, s AI Copilotem, který poskládá kompletní kvíz za 60 sekund.",
      },
      {
        title: "Ceny, které sednou rostoucí značce",
        body: "Enterprise sady pro personalizaci mají ceny pro velké týmy a katalogy. RevenueHunt začíná zdarma a škáluje podle odpovědí od $39/měsíc, na míru značkám na Shopify a Shopify Plus.",
      },
    ],
    bestFor:
      "Nosto sedne enterprise a středním značkám, které chtějí kompletní sadu pro behaviorální personalizaci, vyhledávání a merchandising napříč více obchody, s rozpočtem a týmem na enterprise nasazení. Pokud chceš zaměřený, cenově dostupný a samoobslužný produktový kvíz, který zachytává zero-party data, RevenueHunt ti sedne lépe.",
    migration:
      "Přechod z Nosto je jednoduchý. Vytvoř svůj kvíz v RevenueHunt (nebo ho vygeneruj s AI Copilotem), vlož ho a propoj Klaviyo nebo své CRM. Žádný implementační projekt. Většina obchodů je aktivní týž den a tvá zero-party data proudí přímo do tvých emailových nástrojů.",
    faqs: [
      {
        question: "Kolik stojí RevenueHunt ve srovnání s Nosto?",
        answer:
          "RevenueHunt má bezplatný plán a transparentní placené plány od $39/měsíc. Nosto ceny nezveřejňuje. Je to enterprise platforma řízená prodejem, která cenu nabídne individuálně po demu.",
      },
      {
        question: "Je RevenueHunt sada pro personalizaci jako Nosto?",
        answer:
          "Ne, a o to právě jde. Nosto spojuje behaviorální doporučení, vyhledávání na webu a merchandising. RevenueHunt se zaměřuje na kvízy s doporučením produktů, které zachytávají zero-party data, se samoobslužným nastavením a bez prodejního hovoru.",
      },
      {
        question: "Používá RevenueHunt zero-party data místo behaviorálního sledování?",
        answer:
          "Ano. RevenueHunt vede nakupující kvízem a oni ti řeknou své preference, cíle a omezení přímo: zero-party data, která vlastníš, místo odvozování záměru z chování a cookies.",
      },
      {
        question: "Jak dlouho trvá nastavení oproti Nosto?",
        answer:
          "Většina obchodníků RevenueHunt spustí týž den a AI Quiz Copilot dokáže poskládat kompletní kvíz za zhruba 60 sekund. Nosto bývá enterprise implementace řízená prodejem.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  tolstoy: {
    slug: "tolstoy",
    name: "Tolstoy",
    category: "Platforma nakupovatelného videa a kvízů",
    title: "RevenueHunt vs Tolstoy: alternativa zaměřená na kvíz",
    description:
      "RevenueHunt vs Tolstoy: produktový kvíz ušitý na míru se skutečným doporučovacím enginem a zero-party daty, oproti video platformě s funkcí kvízu.",
    h1: "RevenueHunt vs Tolstoy",
    heroSubtitle:
      "Tolstoy je platforma nakupovatelného videa s funkcí kvízu. RevenueHunt je kvíz s doporučením produktů ušitý na míru, se skutečným doporučovacím enginem a zero-party daty.",
    intro: [
      "Tolstoy je komerční platforma s AI postavená kolem nakupovatelného videa, médií generovaných AI a nákupního agenta s AI, s cenami podle zobrazení od $19/měsíc. Je to solidní nástroj zaměřený na video. Produktový kvíz je ale vedlejší funkce vedle video zážitku.",
      "RevenueHunt je kvíz s doporučením produktů, který používá více než 20 000 značek (4,9★, více než 550 recenzí). Je zaměřený na kvíz: dedikovaný doporučovací engine přiřazuje odpovědi každého nakupujícího ke správným produktům z tvého katalogu, zachytává zero-party data a převádí je na personalizovanou stránku s výsledky, na Shopify, WooCommerce, BigCommerce, Magento, Wix a dalších.",
    ],
    rows: [
      { feature: "Bezplatný plán", rh: RH.freePlan, them: "yes (omezený)" },
      { feature: "Počáteční cena placeného plánu", rh: RH.startingPaid, them: "$19/mo" },
      { feature: "Cenový model", rh: "Pevná sazba, podle odpovědí", them: "Podle zobrazení + AI kredity" },
      { feature: "Ušito na míru pro kvízy s doporučením produktů", rh: RH.ecommerceRecs, them: "Kvíz je vedlejší funkce (zaměřeno na video)" },
      { feature: "Dedikovaný doporučovací engine (kladný hlas a vyloučení, stránka s výsledky)", rh: "yes", them: "Nákup řízený videem" },
      { feature: "Doporučuje reálné produkty z tvého katalogu", rh: RH.catalogRecs, them: "yes" },
      { feature: "Zachytává zero-party data (nakupující ti to řeknou přímo)", rh: "yes", them: "Převážně data o interakci s videem" },
      { feature: "Nativní aplikace pro Shopify (Built for Shopify)", rh: RH.shopifyNative, them: "yes" },
      { feature: "Funguje na WooCommerce, BigCommerce, Magento, Wix a dalších", rh: RH.multiPlatform, them: "no" },
      { feature: "Tvorba kvízů s AI (nastavení za 60 sekund)", rh: RH.aiBuilder, them: "AI zaměřená na video" },
      { feature: "Analytika opouštění otázku po otázce", rh: RH.analytics, them: "yes" },
      { feature: "Integrace s Klaviyo a email / CRM", rh: RH.emailIntegrations, them: "yes" },
    ],
    whySwitch: [
      {
        title: "Nástroj zaměřený na kvíz, ne video doplněk",
        body: "Tolstoy je platforma nakupovatelného videa, kde je kvíz vedlejší funkce. RevenueHunt je ušitý na míru pro kvízy s doporučením produktů, s dedikovaným doporučovacím enginem a stránkou s výsledky zaměřenou na konverzi.",
      },
      {
        title: "Skutečný doporučovací engine",
        body: "RevenueHunt řadí přesné produkty, varianty a kolekce z tvého živého katalogu pomocí modelu kladného hlasu a vyloučení, s podmíněnými bloky výsledků a přímým přidáním do košíku. Hloubka, kterou kvíz ve video nástroji nedosáhne.",
      },
      {
        title: "Zero-party data, která vlastníš",
        body: "RevenueHunt zachytává to, co ti nakupující řeknou (preference, cíle, omezení) a synchronizuje to s Klaviyo, Mailchimp, Omnisend a dalšími pro segmentaci. Silnou stránkou Tolstoy je interakce s videem, ne strukturovaná data z kvízu.",
      },
      {
        title: "Prodávej kdekoliv, ověřeno ve velkém měřítku",
        body: "RevenueHunt funguje nativně na Shopify a také na WooCommerce, BigCommerce, Magento, Wix, Squarespace a samostatně, s důvěrou více než 20 000 značek a 4,9★ z více než 550 recenzí.",
      },
    ],
    bestFor:
      "Tolstoy je dobrá volba, pokud je tvoje strategie řízená videem (nakupovatelné video, UGC, TikTok Shop) a kvíz je něco žádoucího, ale ne zásadního. Pokud chceš dedikovaný kvíz s doporučením produktů se skutečným doporučovacím enginem a zero-party daty, RevenueHunt ti sedne lépe.",
    migration:
      "Pokud jsi používal kvíz uvnitř Tolstoy, přechod je rychlý. Znovu ho vytvoř v editoru RevenueHunt (nebo ho vygeneruj za 60 sekund s naším AI Copilotem), vlož ho a propoj Klaviyo. Většina obchodů je aktivní týž den a náš tým podpory ti pomůže s migrací.",
    faqs: [
      {
        question: "Je RevenueHunt lepší než Tolstoy pro produktový kvíz?",
        answer:
          "Pro dedikovaný kvíz s doporučením produktů ano. RevenueHunt je na to ušitý na míru, se skutečným doporučovacím enginem a zero-party daty. Tolstoy je zaměřený na video, s kvízem jako vedlejší funkcí. Pro nakupovatelné video konkrétně je Tolstoy ušitý na míru.",
      },
      {
        question: "Dělá Tolstoy kvízy s doporučením produktů?",
        answer:
          "Ano, jako vedlejší funkci vedle svého nakupovatelného videa. RevenueHunt je zaměřený na kvíz: je postavený kolem kvízu a jeho doporučovacího enginu, stránky s výsledky a sběru zero-party dat.",
      },
      {
        question: "Podporuje RevenueHunt také video?",
        answer:
          "Ano. Do otázek kvízu a na personalizovanou stránku s výsledky můžeš přidat video. RevenueHunt je zaměřený na kvíz spíše než aby byl video platformou, takže video podporuje kvíz, a ne naopak.",
      },
      {
        question: "Můžu zachytávat zero-party data a posílat je do Klaviyo?",
        answer:
          "Ano. RevenueHunt zachytává odpovědi z kvízu jako zero-party data a synchronizuje odpovědi a zákaznické štítky s Klaviyo, Mailchimp, Omnisend, HubSpot a dalšími pro segmentaci a personalizovaný marketing.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },
};
