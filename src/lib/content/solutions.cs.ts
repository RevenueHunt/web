import type { Solution } from "../solutions";

const VERIFIED = "2026-06-07";

export const SOLUTIONS_CS: Record<string, Solution> = {
  // ----------------------------------------------------------------- verticals
  skincare: {
    slug: "skincare",
    type: "vertical",
    name: "Péče o pleť",
    chip: "Obor",
    title: "Kvíz na péči o pleť pro Shopify a WooCommerce",
    description:
      "Vytvoř kvíz na péči o pleť, který rozpozná typ pleti a její potřeby a pak doporučí správnou rutinu. Bezplatný plán, tvorba s AI, online týž den.",
    h1: "Kvízy na péči o pleť, které mění návštěvníky v rutinu",
    heroSubtitle:
      "Většina lidí, kteří kupují péči o pleť poprvé, neví, jaké produkty jim sednou. Kvíz položí správné otázky a vrátí personalizovanou rutinu, kterou si můžou přidat do košíku.",
    intro: [
      "Péče o pleť je nejtěžší kategorie na nákup naslepo. Nakupující přicházejí s problémem, ne s konkrétním produktem na mysli, a stěna čisticích přípravků, sér a SPF jim s výběrem nepomůže. Kvíz na péči o pleť nahradí tuhle stěnu krátkým řízeným rozhovorem: dovnitř jde typ pleti, hlavní problém, citlivosti a rozpočet, a ven vyjde personalizovaná rutina.",
      "RevenueHunt používá více než 20 000 značek právě k tomuto. Přiřadí každou odpověď k reálným produktům z tvého katalogu, seskupí výsledek podle kroku rutiny (čištění, ošetření, hydratace, SPF) a zachytí profil pleti nakupujícího jako zero-party data, která můžeš synchronizovat s Klaviyo.",
    ],
    quizTypes: [
      {
        title: "Rozpoznání typu pleti",
        body: "Pět až sedm otázek o typu pleti, jejích problémech a cílech vrátí rutinu na míru. Klasický kvíz na péči o pleť a výchozí bod, který nejvíc konvertuje.",
      },
      {
        title: "Tvorba rutiny",
        body: "Použij recommendation slots a vyhraď místo pro každý krok, takže každý nakupující dostane kompletní rutinu o 3 nebo 5 krocích místo jediného produktu.",
      },
      {
        title: "Kvíz zaměřený na problém",
        body: "Začni problémem (akné, stárnutí, suchost, citlivost) a větvi pomocí podmíněné logiky, aby každý nakupující viděl jen otázky, které jsou pro něj relevantní.",
      },
      {
        title: "Shoda podle složení nebo citlivosti",
        body: "Vyluč produkty, které kolidují s deklarovanou alergií nebo citlivostí, takže nakupující, který zaškrtne bez parfemace, nikdy neuvidí ve výsledcích produkt s parfemací.",
      },
    ],
    howItHelps: [
      "Doporučovací engine řadí produkty podle odpovědí, které nejvíc záleží. Dá větší váhu nezbytnému problému než tomu, který je jen příjemný, a vyloučí vše, co nakupující odmítne, aby byla stránka s výsledky skutečně na míru, a ne obecný karusel nejprodávanějších.",
      "Každá odpověď je zero-party datum. Nakupující, který ti řekne, že má suchou a citlivou pleť a záleží mu na boji proti stárnutí, je segment, kterému můžeš dělat marketing roky. RevenueHunt synchronizuje tento profil a zákaznické štítky s Klaviyo, Mailchimp, Omnisend a dalšími.",
      "Vytvoř ho za minuty, ne za týdny. Začni od šablony na péči o pleť, nebo popiš svůj obchod AI Quiz Copilotovi a ten poskládá otázky, logiku a přiřazení produktů za zhruba 60 sekund. Pak ho publikuj jako popup, embed nebo celostránkovou landing page.",
    ],
    demo: {
      label: "Vyzkoušej kvíz na typ pleti",
      href: "https://productrecommendationquiz.com/pages/skin-type-quiz?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_skincare",
      blurb: "Živý kvíz na péči o pleť v našem demo obchodě. Odpověz na pár otázek a podívej se na rutinu, kterou vrátí.",
    },
    faqs: [
      {
        question: "Kolik otázek by měl mít kvíz na péči o pleť?",
        answer:
          "Pět až sedm viditelných otázek funguje pro většinu značek. Použij podmíněnou logiku k přeskočení otázek, které se netýkají, aby nakupující bez citlivostí nikdy neviděl krok o alergiích.",
      },
      {
        question: "Může kvíz doporučit kompletní rutinu, ne jen jeden produkt?",
        answer:
          "Ano. Recommendation slots vyhradí místo pro každý krok rutiny (čištění, ošetření, hydratace, SPF), takže každý nakupující dostane kompletní rutinu s přidáním celé sady do košíku.",
      },
      {
        question: "Funguje to pro citlivou pleť a alergie?",
        answer:
          "Ano. Každá odpověď může vyloučit produkty, takže zaškrtnutí alergie nebo citlivosti odstraní z výsledků jakýkoliv kolidující produkt, i kdyby jinak byl silnou shodou.",
      },
      {
        question: "Můžu zachytávat emaily a posílat rutinu do Klaviyo?",
        answer:
          "Ano. Kvíz zachytí email a kompletní profil pleti jako zero-party data a synchronizuje odpovědi a zákaznické štítky s Klaviyo, Mailchimp, Omnisend, HubSpot a dalšími.",
      },
    ],
    related: [
      { label: "Šablony kvízů na péči o pleť", href: "/templates/" },
      { label: "Kvíz na tvorbu rutiny", href: "/solutions/routine-builder/" },
      { label: "Kvíz na rozpoznání odstínu", href: "/solutions/shade-finder/" },
      { label: "Pro kosmetické značky", href: "/for-beauty-brands/" },
      { label: "Kvíz pro Shopify", href: "/product-recommendation-quiz-shopify/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  beauty: {
    slug: "beauty",
    type: "vertical",
    name: "Krása a kosmetika",
    chip: "Obor",
    title: "Kvíz na krásu a kosmetiku pro tvůj obchod",
    description:
      "Kvíz na krásu, který sladí odstín, najde správné produkty a sestaví rutinu z tvého katalogu. Bezplatný plán, tvorba s AI, více platforem.",
    h1: "Kvízy na krásu, které spojí nakupující se správným produktem",
    heroSubtitle:
      "Odstín make-upu, barva rtěnky, kompletní rutina: kvíz na krásu odpoví na otázky, na které mřížka produktů odpovědět nedokáže, a zavede nakupující na personalizovanou stránku s výsledky.",
    intro: [
      "Lidé nakupující kosmetiku čelí dvěma problémům najednou: příliš mnoho možností a příliš velké riziko. Vyber špatný odstín make-upu a vrátí se. Kvíz na krásu odstraní hádání tím, že se zeptá na podtón, krytí, finiš a problém, a pak doporučí přesně produkty, které sednou.",
      "RevenueHunt pohání kvízy na krásu pro tisíce značek. Vytáhne reálné produkty a varianty z tvého katalogu, zobrazí je na stránce s výsledky s přímým přidáním do košíku a zachytí kosmetický profil každého nakupujícího jako zero-party data pro segmentovaný emailový follow-up.",
    ],
    quizTypes: [
      {
        title: "Sladění odstínu",
        body: "Otázky o podtónu, hloubce a finiši se přiřadí ke správnému odstínu make-upu, korektoru nebo rtěnky. Obrázkové odpovědi to zrychlí na mobilu.",
      },
      {
        title: "Tvorba kompletní rutiny",
        body: "Doporuč kompletní sadu (příprava, make-up, barva, fixace) pomocí recommendation slots, aby si nakupující pořídili rutinu místo jediné položky.",
      },
      {
        title: "Kvíz na problém pleti nebo vlasů",
        body: "Větvi podle problému a typu pleti nebo vlasů, aby stránka s výsledky mluvila ke konkrétnímu cíli každého nakupujícího.",
      },
      {
        title: "Rozpoznání dárkové nebo startovní sady",
        body: "Pomoz těm, kdo kupují dárky, a začátečníkům, kteří neznají katalog, tím, že jim doporučíš startovní sadu nebo kurátorovaný balíček.",
      },
    ],
    howItHelps: [
      "Odstín a sednutí jsou přesně tam, kde vznikají vrácení. Tím, že se hned na začátku zeptá na podtón a krytí a vyloučí vše, co neodpovídá, zavede kvíz nakupující k produktům, které si mnohem pravděpodobněji nechají.",
      "Obrázkové otázky umožní nakupujícím klepnout na obrázek místo aby se popisovali, což drží míru dokončení vysoko na mobilu, kam dopadá většina kosmetického provozu.",
      "Profil nakupujícího (podtón, typ pleti, oblíbený finiš) se synchronizuje s tvým emailovým nástrojem jako zákaznické štítky, takže každá kampaň po kvízu může být personalizovaná, a ne obecná.",
    ],
    demo: {
      label: "Vyzkoušej kvíz na sladění make-upu",
      href: "https://productrecommendationquiz.com/pages/foundation-match?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_beauty",
      blurb: "Živý kvíz na sladění odstínu na základě obrázků v našem demo obchodě, s výsledky přesné shody.",
    },
    faqs: [
      {
        question: "Může kvíz na krásu sladit odstíny make-upu?",
        answer:
          "Ano. Zeptej se na podtón, hloubku a finiš, propoj každou odpověď s odstíny, které odpovídají, a vyluč zbytek. Stránka s výsledky zobrazí přesnou shodu odstínu s přidáním do košíku.",
      },
      {
        question: "Podporuje obrázkové otázky?",
        answer:
          "Ano. Možnosti se můžou zobrazit jako klikatelné obrázky, což je ideální pro otázky o odstínu, finiši a stylu a zlepšuje dokončení na mobilu.",
      },
      {
        question: "Bude fungovat na WooCommerce nebo BigCommerce, ne jen na Shopify?",
        answer:
          "Ano. RevenueHunt funguje nativně na Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace a jako samostatný hostovaný kvíz.",
      },
      {
        question: "Můžu seskupit produkty do jednoho výsledku?",
        answer:
          "Ano. Použij recommendation slots a vyhraď místo pro každou roli produktu a vrať kompletní sadu nebo balíček, s přidáním celé rutiny do košíku.",
      },
    ],
    related: [
      { label: "Kvíz na rozpoznání odstínu", href: "/solutions/shade-finder/" },
      { label: "Kvíz na péči o pleť", href: "/solutions/skincare/" },
      { label: "Kvíz na hledání dárků", href: "/solutions/gift-finder/" },
      { label: "Pro kosmetické značky", href: "/for-beauty-brands/" },
      { label: "Šablony kvízů", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  supplements: {
    slug: "supplements",
    type: "vertical",
    name: "Doplňky stravy",
    chip: "Obor",
    title: "Kvíz na doplňky stravy: doporuč správný stack",
    description:
      "Kvíz na doplňky stravy, který mění zdravotní cíle v doporučený stack. Větví podle stravy a omezení, synchronizuje cíle s Klaviyo. Zdarma na začátek.",
    h1: "Kvízy na doplňky stravy, které doporučí správný stack",
    heroSubtitle:
      "Nakupující si pořizují doplňky kvůli cíli, ne kvůli SKU. Kvíz mění spánek, energii, imunitu nebo soustředění v doporučený stack z tvého katalogu.",
    intro: [
      "Lidé nakupující doplňky stravy myslí v cílech: lépe spát, více energie, lepší zdraví střev. Tvůj katalog je uspořádaný podle produktu. Kvíz na doplňky stravy překlene tuto mezeru tím, že se zeptá na cíle, stravu a životní styl, a pak doporučí stack, který sedne.",
      "RevenueHunt přiřadí každý cíl ke správným SKU, řeší stravovací omezení pomocí vyloučení a vrátí stack více produktů na stránce s výsledky se slevou na první objednávku. Cíle nakupujícího se synchronizují s Klaviyo jako štítky pro průběžný segmentovaný email.",
    ],
    quizTypes: [
      {
        title: "Rozpoznání zdravotních cílů",
        body: "Nakupující si vyberou své cíle (spánek, energie, imunita, střeva, soustředění) a každý cíl přidá body produktům, které odpovídají, aby se sestavil doporučený stack.",
      },
      {
        title: "Tvorba stacku",
        body: "Vyhraď slot pro každou roli (základ, specifický, výkon), aby každý nakupující odešel s kompletním a soudržným stackem.",
      },
      {
        title: "Filtr stravy a omezení",
        body: "Vyluč produkty, které kolidují s veganstvím, bezlepkovostí nebo jinými omezeními, aby výsledky automaticky respektovaly stravu každého nakupujícího.",
      },
      {
        title: "Onboarding předplatného",
        body: "Použij kvíz na začátku trychtýře předplatného, zachyť email a propoj stránku s výsledky s nabídkou předplať a ušetři.",
      },
    ],
    howItHelps: [
      "Podmíněná logika drží kvíz krátký. Pokud nakupující řekne, že nemá žádná stravovací omezení, kvíz zcela přeskočí otázky o omezeních, takže nikdo neodpovídá na otázky, které se ho netýkají.",
      "Vyloučení řeší tvrdá omezení čistě. Veganský nakupující nikdy neuvidí ve výsledcích neveganský produkt, i kdyby byl silnou shodou jen podle cílů.",
      "Cíle jsou to nejcennější, co se značka doplňků může naučit. Synchronizace štítků jako goal:sleep nebo goal:gut s Klaviyo ti umožní spustit životně-cyklický email, který skutečně odpovídá tomu, čeho se každý zákazník snaží dosáhnout.",
    ],
    faqs: [
      {
        question: "Může kvíz na doplňky stravy doporučit stack více produktů?",
        answer:
          "Ano. Každý cíl přidá body produktům, které odpovídají, a recommendation slots vyhradí místo pro každou roli, takže stránka s výsledky vrátí kompletní stack s přidáním celé sady do košíku.",
      },
      {
        question: "Jak řeší veganskou nebo bezlepkovou stravu?",
        answer:
          "Pomocí vyloučení. Propojení odpovědi o stravě se seznamem vyloučení odstraní z výsledků jakýkoliv kolidující produkt, bez ohledu na to, jak dobře bodoval podle cílů.",
      },
      {
        question: "Můžu přidat slevu na první objednávku na stránku s výsledky?",
        answer:
          "Ano. Stránka s výsledky podporuje blok se slevovým kódem, který můžeš zobrazit nakupujícím poprvé nebo navázat na konkrétní kombinace odpovědí.",
      },
      {
        question: "Funguje to pro značku s předplatným?",
        answer:
          "Ano. Spusť kvíz na začátku trychtýře, zachyť email do Klaviyo a nasměruj stránku s výsledky na nabídku předplať a ušetři.",
      },
    ],
    related: [
      { label: "Kvíz na tvorbu balíčků", href: "/solutions/bundle-builder/" },
      { label: "Kvíz na fitness a výživu", href: "/solutions/fitness/" },
      { label: "Kvíz pro řízený prodej", href: "/guided-selling-quiz/" },
      { label: "Šablony kvízů", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  fashion: {
    slug: "fashion",
    type: "vertical",
    name: "Móda a oblečení",
    chip: "Obor",
    title: "Stylový kvíz na módu a oblečení pro ecommerce",
    description:
      "Stylový kvíz, který najde správné sednutí, střih a barvu z tvého katalogu a sníží vrácení. Bezplatný plán, více platforem, více jazyků.",
    h1: "Stylové kvízy, které najdou správné sednutí a střih",
    heroSubtitle:
      "Styl je osobní a sednutí je riskantní. Kvíz na módu se naučí vkus a velikost nakupujícího a pak doporučí kousky, které si pravděpodobně nechá.",
    intro: [
      "Móda má nejvyšší míru vrácení v ecommerce a většina pramení z neshody ve velikosti a stylu. Stylový kvíz oboje snižuje tím, že se zeptá na typ postavy, preferenci sednutí, příležitost a vkus, a pak doporučí kousky, které nakupujícímu skutečně sednou.",
      "RevenueHunt sestaví kvíz proti tvému živému katalogu, včetně variant, takže velikost a barva protečou až na stránku s výsledky. Pro značky, které prodávají na více trzích, lze základní kvíz přeložit a přiřadit podle Shopify Marketu, s automaticky lokalizovanými názvy a cenami produktů.",
    ],
    quizTypes: [
      {
        title: "Kvíz na stylový profil",
        body: "Otázky o vkusu, příležitosti a barvě vynesou na povrch kousky, které odpovídají estetice nakupujícího, místo obecné mřížky novinek.",
      },
      {
        title: "Rozpoznání sednutí a velikosti",
        body: "Otázky o typu postavy a preferenci sednutí zúží výběr na správný střih a velikost, což je tam, kde začíná většina vrácení oblečení.",
      },
      {
        title: "Tvorba kapsle nebo outfitu",
        body: "Použij recommendation slots a sestav sladěný outfit nebo kapsli místo jediné položky.",
      },
      {
        title: "Rozpoznání příležitosti",
        body: "Větvi podle příležitosti (práce, svatba, cestování), aby každý nakupující viděl kurátorovaný výběr pro moment, na který nakupuje.",
      },
    ],
    howItHelps: [
      "Doporučování podle sednutí a vkusu, ne jen podle popularity, zavede nakupující ke kouskům, které si pravděpodobněji nechají, což je nejpřímější páka, kterou má módní značka na vrácení.",
      "Varianty protékají od začátku do konce. Propoj odpovědi s konkrétními velikostmi a barvami a stránka s výsledky zobrazí správnou variantu s přidáním do košíku, takže se nakupující nemusí odrazit na stránku produktu, aby znovu vybírali.",
      "Prodáváš po celé EU nebo i dál? Sestav základní kvíz, nech ho AI Copilota přeložit, přiřaď každou verzi jejímu Shopify Marketu a data produktů se lokalizují automaticky. Žádná práce s překladem produktů podle jazyka.",
    ],
    faqs: [
      {
        question: "Může kvíz na módu snížit vrácení?",
        answer:
          "Míří na hlavní příčinu vrácení tím, že doporučuje podle sednutí a vkusu místo podle popularity. Propojení odpovědí s konkrétními velikostmi a barvami zavede nakupující ke kouskům, které si pravděpodobněji nechají.",
      },
      {
        question: "Podporuje varianty produktu jako velikost a barva?",
        answer:
          "Ano. Odpovědi lze propojit s konkrétními variantami a stránka s výsledky zobrazí velikost a barvu, které odpovídají, s přímým přidáním do košíku.",
      },
      {
        question: "Můžu spustit kvíz ve více jazycích?",
        answer:
          "Ano. Sestav základní kvíz, přelož ho s AI Copilotem a přiřaď každou verzi jejímu Shopify Marketu. Názvy a ceny produktů se lokalizují automaticky přes Shopify Markets.",
      },
      {
        question: "Na jakých platformách funguje?",
        answer:
          "Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace a jako samostatný hostovaný kvíz.",
      },
    ],
    related: [
      { label: "Kvíz na rozpoznání velikosti a sednutí", href: "/solutions/size-finder/" },
      { label: "Kvíz na hledání dárků", href: "/solutions/gift-finder/" },
      { label: "Šablony kvízů", href: "/templates/" },
      { label: "Kvíz pro Shopify", href: "/product-recommendation-quiz-shopify/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  coffee: {
    slug: "coffee",
    type: "vertical",
    name: "Káva a čaj",
    chip: "Obor",
    title: "Kvíz na kávu: spoj pražení s chutí",
    description:
      "Kvíz na chuťový profil, který spojí nakupující se správným pražením nebo blendem a získá předplatitele. Bezplatný plán, připraveno pro Klaviyo a ReCharge.",
    h1: "Kvízy na kávu, které spojí chuť se správným pražením",
    heroSubtitle:
      "Pražení, původ, metoda přípravy, chuťové tóny: kvíz na kávu mění matoucí menu v sebejisté doporučení a v nového předplatitele.",
    intro: [
      "Káva a čaj se řídí chutí a chuť se těžko nakupuje ze seznamu produktů. Krátký kvíz na chuťový profil se zeptá na preferenci pražení, metodu přípravy a chuťové tóny, a pak doporučí blend, který si nakupující skutečně užije.",
      "RevenueHunt z toho udělá trychtýř, ne jen doporučení. Zachytí email na začátku, doporučí startovní blend a propojí stránku s výsledky s nabídkou předplať a ušetři přes ReCharge, s preferencemi pražení a přípravy synchronizovanými s Klaviyo.",
    ],
    quizTypes: [
      {
        title: "Rozpoznání chuťového profilu",
        body: "Pár otázek o pražení, tělu a chuťových tónech spojí každého nakupujícího s blendem, který odpovídá jeho chuti.",
      },
      {
        title: "Shoda podle metody přípravy",
        body: "Espresso, pour-over, french press nebo překapávaná: větvi podle metody, aby mletí a blend seděly s tím, jak skutečně připravují kávu.",
      },
      {
        title: "Onboarding předplatného",
        body: "Spusť kvíz na začátku trychtýře, doporuč startovní blend a nabídni předplať a ušetři na stránce s výsledky.",
      },
      {
        title: "Rozpoznání dárku nebo degustace",
        body: "Pomoz těm, kdo kupují dárky, vybrat degustační nebo dárkovou sadu, aniž by znali přesnou chuť obdarovaného.",
      },
    ],
    howItHelps: [
      "Chuťový profil je skvělý důvod požádat o email. Nakupující rádi sdílejí své preference pražení a přípravy, aby získali doporučení, což plní tvůj seznam předem segmentovanými předplatiteli.",
      "Stránka s výsledky uzavře prodej. Doporuč blend, který odpovídá, ukaž nabídku předplať a ušetři propojenou s ReCharge a nech nakupující přidat do košíku bez opuštění kvízu.",
      "Preference se mění v trvalé segmenty. Synchronizace štítků pražení a metody přípravy s Klaviyo znamená, že každá budoucí kampaň může mluvit jinak k tomu, kdo pije tmavě pražené espresso, a k tomu, kdo preferuje světle pražený pour-over.",
    ],
    demo: {
      label: "Vyzkoušej kvíz na kávu",
      href: "https://productrecommendationquiz.com/pages/coffee-quiz?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_coffee",
      blurb: "Živý kvíz na kávu se shodou podle chuti v našem demo obchodě.",
    },
    faqs: [
      {
        question: "Může kvíz na kávu doporučit předplatné?",
        answer:
          "Ano. Zachyť email na začátku, doporuč startovní blend a nasměruj stránku s výsledky na nabídku předplať a ušetři propojenou s ReCharge.",
      },
      {
        question: "Dělá shodu podle metody přípravy?",
        answer:
          "Ano. Větvi podle metody přípravy, aby mletí a blend seděly konkrétně s těmi, kdo pijí espresso, pour-over, french press nebo překapávanou.",
      },
      {
        question: "Pomůže mi to rozšířit emailový seznam?",
        answer:
          "Ano. Chuťový profil je pádný důvod, proč nakupující sdílejí svůj email, a odpovědi se synchronizují s Klaviyo předem segmentované podle preference pražení a přípravy.",
      },
      {
        question: "Funguje to pro čaj nebo jiné nápoje?",
        answer:
          "Ano. Stejný přístup chuťového profilu funguje pro čaj, víno, lihoviny a jakýkoliv katalog řízený chutí.",
      },
    ],
    related: [
      { label: "Kvíz na tvorbu balíčků", href: "/solutions/bundle-builder/" },
      { label: "Kvíz na hledání dárků", href: "/solutions/gift-finder/" },
      { label: "Šablony kvízů", href: "/templates/" },
      { label: "Kvíz pro řízený prodej", href: "/guided-selling-quiz/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  fitness: {
    slug: "fitness",
    type: "vertical",
    name: "Fitness a výživa",
    chip: "Obor",
    title: "Kvíz na fitness pro vybavení, oblečení a programy",
    description:
      "Kvíz na fitness založený na cílech, který doporučí správné vybavení, oblečení nebo program z tvého katalogu. Bezplatný plán, tvorba s AI, připraveno pro Klaviyo.",
    h1: "Kvízy na fitness postavené kolem cíle nakupujícího",
    heroSubtitle:
      "Síla, vytrvalost, hubnutí, regenerace: kvíz na fitness mění cíl ve správné vybavení, oblečení, doplňky nebo program.",
    intro: [
      "Lidé nakupující fitness začínají s cílem a stylem tréninku, ne s produktem. Kvíz založený na cílech se zeptá, k čemu směřují, na jejich úroveň zkušeností a jak trénují, a pak doporučí vybavení, oblečení nebo program, který sedne.",
      "RevenueHunt postaví trychtýř od začátku do konce: doporučí správné produkty z tvého katalogu, zachytí cíl a úroveň nakupujícího jako zero-party data a naváže přes Klaviyo obsahem a nabídkami, které odpovídají tomu, na co trénují.",
    ],
    quizTypes: [
      {
        title: "Rozpoznání podle cíle",
        body: "Síla, vytrvalost, mobilita nebo hubnutí: každý cíl přidá body vybavení, oblečení nebo doplňkům, které odpovídají.",
      },
      {
        title: "Shoda podle úrovně zkušeností",
        body: "Větvi podle začátečníka, pokročilého nebo experta, aby doporučení seděla tam, kde nakupující skutečně je.",
      },
      {
        title: "Rozpoznání programu nebo plánu",
        body: "Doporuč správný tréninkový program nebo úroveň koučinku podle cíle, časového rozvrhu a přístupu k vybavení.",
      },
      {
        title: "Tvorba kitu nebo balíčku",
        body: "Sestav kompletní kit (oblečení plus vybavení plus doplněk) pomocí recommendation slots pro vyšší průměrnou hodnotu objednávky.",
      },
    ],
    howItHelps: [
      "Cíl a úroveň zkušeností jsou dvě otázky, které mění všechno. Zeptat se na ně hned na začátku znamená, že začátečník pracující na mobilitě nikdy neuvidí jako svůj hlavní výsledek pokročilý silový produkt.",
      "Kompletní kit překoná jednu položku. Recommendation slots ti umožní vrátit oblečení, vybavení a doplněk společně, což zvyšuje průměrnou hodnotu objednávky, aniž by to působilo vtíravě.",
      "Cíl, který zachytíš, pohání vše, co přijde po prodeji. Synchronizace štítků cíle a úrovně s Klaviyo ti umožní posílat tréninkový obsah a připomínky doplnění zásob, které odpovídají skutečnému programu každého zákazníka.",
    ],
    faqs: [
      {
        question: "Může kvíz na fitness doporučit program, ne jen produkty?",
        answer:
          "Ano. Propoj odpovědi s tréninkovým programem nebo úrovní koučinku stejně, jako propojuješ produkty, a stránka s výsledky může doporučit správný plán podle cíle a rozvrhu.",
      },
      {
        question: "Může sestavit kompletní kit v jednom výsledku?",
        answer:
          "Ano. Recommendation slots vyhradí místo pro každou roli (oblečení, vybavení, doplněk), aby nakupující dostali kompletní kit s přidáním celé sady do košíku.",
      },
      {
        question: "Jak personalizuje pro začátečníky oproti pokročilým?",
        answer:
          "Větvi pomocí podmíněné logiky podle úrovně zkušeností, takže začátečníci a pokročilí atleti vidí jiné otázky a jiná doporučení.",
      },
      {
        question: "Můžu navázat emailem podle cílů?",
        answer:
          "Ano. Cíle a úroveň se synchronizují s Klaviyo, Mailchimp, Omnisend a dalšími jako zákaznické štítky pro emailový follow-up, který odpovídá cíli.",
      },
    ],
    related: [
      { label: "Kvíz na doplňky stravy", href: "/solutions/supplements/" },
      { label: "Kvíz na tvorbu balíčků", href: "/solutions/bundle-builder/" },
      { label: "Šablony kvízů", href: "/templates/" },
      { label: "Kvíz pro řízený prodej", href: "/guided-selling-quiz/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "pet-products": {
    slug: "pet-products",
    type: "vertical",
    name: "Produkty pro mazlíčky",
    chip: "Obor",
    title: "Kvíz na produkty pro mazlíčky pro tvůj obchod",
    description:
      "Kvíz na mazlíčky, který doporučí krmivo, doplňky nebo doplňky podle druhu, plemene, věku a alergií. Vyloučení řeší stravu. Zdarma na začátek.",
    h1: "Kvízy na mazlíčky, které spojí produkty s každým zvířetem",
    heroSubtitle:
      "Druh, plemeno, věk, aktivita, alergie: kvíz na mazlíčky mění tyto detaily ve správné krmivo, doplněk nebo doplněk a respektuje každé stravovací omezení.",
    intro: [
      "Lidé, kteří mají mazlíčky, nakupují pro zvíře, ne pro kategorii, a správný produkt závisí na druhu, velikosti plemene, věku a alergiích. Kvíz na mazlíčky shromáždí tyto detaily jednou a doporučí produkty, které sednou ve všech rozměrech najednou.",
      "RevenueHunt se postará o tu těžkou část: vyloučení aplikují pravidla alergií a stravy čistě, stránka s výsledky doporučí správnou recepturu nebo kit a email s výsledky shrne doporučení pro ty, kdo nenakupují hned v daný moment.",
    ],
    quizTypes: [
      {
        title: "Rozpoznání krmiva pro mazlíčky",
        body: "Druh, velikost plemene, věk a úroveň aktivity se přiřadí ke správné receptuře, s alergiemi řešenými přes vyloučení.",
      },
      {
        title: "Shoda doplňku nebo zdraví",
        body: "Doporuč podporu kloubů, kůže nebo trávení podle věku a deklarovaných problémů.",
      },
      {
        title: "Rozpoznání doplňků a vybavení",
        body: "Spoj postroje, pelíšky nebo hračky s velikostí plemene a chováním, aby majitelé vybrali dobře hned napoprvé.",
      },
      {
        title: "Startovní kit pro nové majitele",
        body: "Sestav kompletní startovní kit pro nové majitele mazlíčků pomocí recommendation slots.",
      },
    ],
    howItHelps: [
      "Alergie jsou tvrdé omezení a vyloučení je aplikují dokonale. Zaškrtnutí alergie na kuře odstraní z výsledků všechny receptury na bázi kuřete, i ty, které bodovaly dobře podle plemene a věku.",
      "Zákaznický štítek jako majitel-malého-psa je zlato pro retenci. Synchronizace s Klaviyo ti umožní posílat obsah relevantní pro plemeno, připomínky doplnění zásob a nabídky, které skutečně sednou ke zvířeti.",
      "Emaily s výsledky zachytí nakupující, kteří se odrazí. Majitelé často zkoumají před nákupem, takže automatický email, který shrne doporučení, je přivede zpět dokončit nákup.",
    ],
    demo: {
      label: "Vyzkoušej rozpoznání krmiva pro psy",
      href: "https://productrecommendationquiz.com/pages/dog-food?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_pet_products",
      blurb: "Živé multiatributové rozpoznání krmiva pro psy v našem demo obchodě.",
    },
    faqs: [
      {
        question: "Jak kvíz na mazlíčky řeší alergie?",
        answer:
          "Pomocí vyloučení. Propojení odpovědi o alergii se seznamem vyloučení odstraní z výsledků všechny kolidující produkty, ať už se shodovaly v jiných otázkách jakkoliv dobře.",
      },
      {
        question: "Může dělat shodu podle plemene a věku?",
        answer:
          "Ano. Každá odpověď (druh, velikost plemene, věk, úroveň aktivity) přidá body produktům, které odpovídají, takže doporučení sednou ke konkrétnímu zvířeti.",
      },
      {
        question: "Můžu poslat doporučení emailem, pokud nenakoupí?",
        answer:
          "Ano. Emaily s výsledky automaticky shrnou doporučení, což je užitečné pro majitele, kteří zkoumají před nákupem.",
      },
      {
        question: "Segmentuje zákazníky pro marketing?",
        answer:
          "Ano. Zákaznické štítky jako majitel-malého-psa se synchronizují s Klaviyo a dalšími nástroji pro cílené kampaně relevantní pro zvíře.",
      },
    ],
    related: [
      { label: "Kvíz na tvorbu balíčků", href: "/solutions/bundle-builder/" },
      { label: "Kvíz na hledání produktů", href: "/product-finder-quiz/" },
      { label: "Šablony kvízů", href: "/templates/" },
      { label: "Kvíz pro WooCommerce", href: "/product-recommendation-quiz-woocommerce/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  cbd: {
    slug: "cbd",
    type: "vertical",
    name: "CBD a wellness",
    chip: "Obor",
    title: "Kvíz na hledání CBD produktů pro tvůj obchod",
    description:
      "Kvíz na CBD, který vede nakupující ke správnému formátu a síle podle cíle a zkušeností. Vzdělává během prodeje. Bezplatný plán, více platforem.",
    h1: "Kvízy na CBD, které vedou nakupující ke správnému formátu",
    heroSubtitle:
      "Formát, síla a cíl matou většinu lidí, kteří kupují CBD. Kvíz učí během prodeje a doporučí správný produkt s jistotou.",
    intro: [
      "CBD a wellness jsou kategorie, kde většina nakupujících opravdu neví, co koupit: olej nebo bonbon, jaká síla, na jaký cíl. Kvíz mění tuto nejistotu v jasné doporučení tím, že se zeptá na cíl, úroveň zkušeností a preferenci formátu.",
      "RevenueHunt je stvořený pro nakupující poprvé v kategorii, jako jsou tito. Kvíz vzdělává během dotazování, doporučí správný formát a sílu z tvého katalogu a zachytí cíle jako zero-party data, která vlastníš a kterým můžeš dělat marketing.",
    ],
    quizTypes: [
      {
        title: "Rozpoznání podle cíle",
        body: "Spánek, klid, regenerace nebo soustředění: každý cíl přidá body produktům a silám, které odpovídají.",
      },
      {
        title: "Shoda formátu a síly",
        body: "Větvi podle zkušeností a preference formátu (olej, bonbon, lokální, kapsle), aby začátečníci dostali přístupný výchozí bod.",
      },
      {
        title: "Tvorba rutiny nebo režimu",
        body: "Doporuč kombinaci pro den a noc pomocí recommendation slots pro kompletní rutinu.",
      },
      {
        title: "Kvíz se vzděláváním na prvním místě",
        body: "Použij informační slidy mezi otázkami k vysvětlení základů, což buduje důvěru a jistotu před doporučením.",
      },
    ],
    howItHelps: [
      "Nakupující poprvé v kategorii potřebují učení, ne jen filtrování. Informační slidy ti umožní vysvětlit sílu a formát jednoduchým jazykem, jak nakupující postupuje, aby doporučení přišlo s jistotou.",
      "Sladění úrovně zkušeností se silou chrání zážitek. Začátečník dostane přístupný výchozí bod místo nejsilnějšího produktu, což znamená méně vrácení kvůli zklamání.",
      "Cíle zachycené v kvízu se stanou tvými nejužitečnějšími segmenty. Synchronizace goal:sleep nebo goal:recovery s Klaviyo pohání email, který odpovídá tomu, co se každý zákazník skutečně snaží vyřešit.",
    ],
    demo: {
      label: "Vyzkoušej hledání CBD produktů",
      href: "https://productrecommendationquiz.com/pages/cbd-product-finder?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_cbd",
      blurb: "Živé hledání CBD produktů v našem demo obchodě.",
    },
    faqs: [
      {
        question: "Může kvíz na CBD doporučit správnou sílu?",
        answer:
          "Ano. Větvi podle úrovně zkušeností a cíle, pak propoj každou cestu s vhodnou silou, aby začátečníci a zkušení uživatelé dostali jiná doporučení.",
      },
      {
        question: "Může kvíz vzdělávat nakupující, jak postupují?",
        answer:
          "Ano. Informační slidy zobrazí text mezi otázkami bez nutnosti jakéhokoliv vstupu, takže můžeš učit základy formátu a síly přirozeně integrovaně.",
      },
      {
        question: "Funguje to pro širší wellness produkty?",
        answer:
          "Ano. Stejný přístup cíle a formátu funguje pro adaptogeny, houby a další wellness kategorie, kde nakupující potřebují vedení.",
      },
      {
        question: "Jaké platformy podporuje?",
        answer:
          "Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace a jako samostatný hostovaný kvíz.",
      },
    ],
    related: [
      { label: "Kvíz na doplňky stravy", href: "/solutions/supplements/" },
      { label: "Kvíz na tvorbu rutiny", href: "/solutions/routine-builder/" },
      { label: "Kvíz na hledání produktů", href: "/product-finder-quiz/" },
      { label: "Šablony kvízů", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  jewelry: {
    slug: "jewelry",
    type: "vertical",
    name: "Šperky a doplňky",
    chip: "Obor",
    title: "Kvíz na šperky: pomoz najít ten pravý kousek",
    description:
      "Kvíz na šperky, který spojí styl, kov a příležitost se správným kouskem a pomůže těm, kdo kupují dárky, vybrat s jistotou. Zdarma na začátek.",
    h1: "Kvízy na šperky, které spojí styl se správným kouskem",
    heroSubtitle:
      "Kov, styl, příležitost, rozpočet: kvíz na šperky vede nakupující a ty, kdo kupují dárky, ke kousku, který si zamilují, místo nekonečné mřížky.",
    intro: [
      "Šperky jsou emocionální a často dárek, což je činí těžkými na nákup z mřížky. Kvíz se zeptá na styl, preferenci kovu, příležitost a rozpočet, a pak doporučí kousky, které odpovídají, a mění procházení v sebejistou volbu.",
      "RevenueHunt doporučí reálné kousky a varianty z tvého katalogu, řeší ty, kdo kupují dárky bez znalosti vkusu obdarovaného, a zachytí preference pro follow-up. Stránka s výsledky konvertuje s přímým přidáním do košíku a volitelným dárkovým vzkazem.",
    ],
    quizTypes: [
      {
        title: "Rozpoznání stylu",
        body: "Otázky o estetice, kovu a příležitosti vynesou na povrch kousky, které odpovídají vkusu nakupujícího.",
      },
      {
        title: "Hledání dárků",
        body: "Zeptej se na obdarovaného a příležitost, pak doporuč kurátorovaný výběr nebo dárkovou sadu pro ty, kdo nakupují bez znalosti katalogu.",
      },
      {
        title: "Shoda s ohledem na rozpočet",
        body: "Zahrň rozpočet do doporučení, aby každý nakupující viděl kousky ve svém rozpětí.",
      },
      {
        title: "Rozpoznání zásnub nebo milníku",
        body: "Veď nákupy s vysokým zvážením, jako jsou zásnubní nebo výroční kousky, zaměřeným a uklidňujícím tokem.",
      },
    ],
    howItHelps: [
      "Ti, kdo kupují dárky, jsou obrovskou částí provozu šperků a nejméně si jistí tím, co chtějí. Kvíz, který se zeptá na obdarovaného místo na katalog, mění tuto nejistotu v sebejistý nákup dárku.",
      "Rozpočet je otázka, kterou většina mřížek ignoruje. Zahrnout ho do doporučení znamená, že nakupující vidí kousky, které si skutečně můžou dovolit, což snižuje odraz a buduje důvěru.",
      "Preference a příležitosti se synchronizují s tvým emailovým nástrojem, takže můžeš navázat kolem výročí, doplnění a sladěných kousků kampaněmi, které působí osobně.",
    ],
    faqs: [
      {
        question: "Může kvíz na šperky pomoci těm, kdo kupují dárky?",
        answer:
          "Ano. Zeptej se na obdarovaného a příležitost místo na katalog, pak doporuč kurátorovaný výběr nebo dárkovou sadu, což je ideální pro ty, kdo nakupují bez přesné představy, co chtějí.",
      },
      {
        question: "Může zohlednit rozpočet?",
        answer:
          "Ano. Přidej otázku na rozpočet a zvaž nebo filtruj doporučení, aby nakupující viděli jen kousky ve svém rozpětí.",
      },
      {
        question: "Podporuje varianty jako kov a velikost?",
        answer:
          "Ano. Odpovědi lze propojit s konkrétními variantami, takže stránka s výsledky zobrazí správný kov a velikost s přidáním do košíku.",
      },
      {
        question: "Můžu zachytávat leady pro follow-up?",
        answer:
          "Ano. Kvíz zachytí email a preference jako zero-party data a synchronizuje se s Klaviyo a dalšími nástroji pro follow-up založený na příležitosti.",
      },
    ],
    related: [
      { label: "Kvíz na hledání dárků", href: "/solutions/gift-finder/" },
      { label: "Kvíz na módu a oblečení", href: "/solutions/fashion/" },
      { label: "Šablony kvízů", href: "/templates/" },
      { label: "Kvíz na hledání produktů", href: "/product-finder-quiz/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "home-goods": {
    slug: "home-goods",
    type: "vertical",
    name: "Bydlení a dekorace",
    chip: "Obor",
    title: "Kvíz na produkty pro bydlení a dekorace pro tvůj obchod",
    description:
      "Kvíz na bydlení a dekorace, který spojí nábytek a dekorace s prostorem a stylem nakupujícího. Snižuje vrácení objemných položek. Zdarma na začátek.",
    h1: "Kvízy na bydlení, které spojí produkty s prostorem",
    heroSubtitle:
      "Styl, místnost, velikost a rozpočet: kvíz na bydlení a dekorace vede nakupující ke kouskům, které sednou do jejich prostoru, což nejvíc záleží u objemných položek.",
    intro: [
      "Bydlení a dekorace jsou nákupy s vysokým zvážením a drahé na vrácení. Nakupující potřebují vědět, že kousek sedne do jejich prostoru a stylu, než se zaváží. Kvíz se zeptá na místnost, styl, rozměry a rozpočet, a pak doporučí kousky, které fungují.",
      "RevenueHunt doporučí reálné produkty z tvého katalogu, sestaví sladěné sady pomocí recommendation slots a zachytí stylové preference pro follow-up, takže ten, kdo koupí nábytek jednou, se stane stálým zákazníkem dekorací.",
    ],
    quizTypes: [
      {
        title: "Rozpoznání stylu",
        body: "Otázky o estetice a místnosti vynesou na povrch nábytek a dekorace, které odpovídají vkusu nakupujícího.",
      },
      {
        title: "Shoda podle místnosti nebo prostoru",
        body: "Zahrň typ místnosti a rozměry do doporučení, aby kousky skutečně seděly do prostoru.",
      },
      {
        title: "Tvorba sladěné sady",
        body: "Sestav sladěnou sadu (pohovka plus koberec plus osvětlení) pomocí recommendation slots pro kompletní vzhled.",
      },
      {
        title: "Rozpoznání s ohledem na rozpočet",
        body: "Zahrň rozpočet, aby nakupující viděli kousky ve svém rozpětí a méně se odráželi.",
      },
    ],
    howItHelps: [
      "Sednutí a měřítko ženou vrácení objemných položek. Zeptat se na rozměry místnosti a doporučit kousky, které fungují, snižuje nákladné chyby vedoucí k vrácení nábytku.",
      "Sladěná sada zvyšuje hodnotu objednávky přirozeně. Recommendation slots ti umožní navrhnout kompletní vzhled místo jediného kousku, což se dokonale hodí k nákupu dekorací.",
      "Stylové preference jsou trvalé. Zachytit estetiku nakupujícího a synchronizovat ji s tvým emailovým nástrojem znamená, že sezónní kampaně a kampaně nových kolekcí mohou být přizpůsobeny vkusu místo aby se posílaly všem stejně.",
    ],
    faqs: [
      {
        question: "Může kvíz na bydlení doporučit sladěnou sadu?",
        answer:
          "Ano. Recommendation slots vyhradí místo pro každou roli (sezení, koberec, osvětlení), takže stránka s výsledky vrátí kompletní a sladěnou sadu s přidáním do košíku.",
      },
      {
        question: "Může zohlednit velikost místnosti?",
        answer:
          "Ano. Přidej otázky o místnosti a rozměrech a propoj odpovědi s kousky, které sednou, což je klíčové pro snížení vrácení velkých položek.",
      },
      {
        question: "Pomáhá s rozpočtem?",
        answer:
          "Ano. Zahrň otázku na rozpočet, aby doporučení zůstala v rozpětí nakupujícího.",
      },
      {
        question: "Na jakých platformách funguje?",
        answer:
          "Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace a jako samostatný hostovaný kvíz.",
      },
    ],
    related: [
      { label: "Kvíz na tvorbu balíčků", href: "/solutions/bundle-builder/" },
      { label: "Kvíz na hledání dárků", href: "/solutions/gift-finder/" },
      { label: "Šablony kvízů", href: "/templates/" },
      { label: "Kvíz pro řízený prodej", href: "/guided-selling-quiz/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  // ----------------------------------------------------------------- use-cases
  "gift-finder": {
    slug: "gift-finder",
    type: "use-case",
    name: "Hledání dárků",
    chip: "Typ kvízu",
    title: "Kvíz na hledání dárků pro tvůj online obchod",
    description:
      "Kvíz na hledání dárků, který se zeptá na obdarovaného a vrátí kurátorovaný dárek, čímž zvyšuje AOV u těch, kdo nakupují bez znalosti katalogu. Zdarma na začátek.",
    h1: "Kvízy na hledání dárků, které mění hádání v prodej",
    heroSubtitle:
      "Ti, kdo kupují dárky, nemají názor na tvůj katalog a velkou úzkost ze špatné volby. Hledání dárků se zeptá na obdarovaného a doporučí ten dokonalý dárek.",
    intro: [
      "Ti, kdo kupují dárky, jsou nakupující, které je nejjednodušší ztratit a nejjednodušší pomoci. Neznají tvé produkty a bojí se špatné volby. Kvíz na hledání dárků položí tři až pět otázek o obdarovaném (vztah, věk, zájmy, rozpočet) a vrátí kurátorovaný dárek, který můžou koupit s jistotou.",
      "RevenueHunt mění hledání dárků v jeden z nejvíce konvertujících typů kvízů. Seskupí několik produktů do jediného dárkového výsledku pro vyšší hodnotu objednávky, přidá dárkový vzkaz a slevu na stránku s výsledky a zachytí email nakupujícího pro příští příležitost.",
    ],
    quizTypes: [
      {
        title: "Rozpoznání zaměřené na obdarovaného",
        body: "Zeptej se na obdarovaného (vztah, věk, zájmy) místo na katalog, aby ti, kdo o tvých produktech nic nevědí, přesto dostali skvělou shodu.",
      },
      {
        title: "Rozpoznání příležitosti",
        body: "Větvi podle příležitosti (narozeniny, svátky, výročí), aby doporučení sedlo k momentu.",
      },
      {
        title: "Tvorba dárkového balíčku",
        body: "Zkombinuj několik produktů do jediné kurátorované dárkové sady pomocí recommendation slots, což zvyšuje průměrnou hodnotu objednávky.",
      },
    ],
    howItHelps: [
      "Trik je ptát se na obdarovaného, ne na katalog. Nakupující, který dokáže odpovědět na tři otázky o své sestře, dostane sebejisté doporučení, aniž by kdy potřeboval rozumět tvé řadě produktů.",
      "Dárkové balíčky zvyšují hodnotu objednávky bez tlaku. Vrátit kurátorovanou sadu jako jediný výsledek působí užitečně, ne vtíravě, a nakupující rádi pořídí celou sadu.",
      "Každý, kdo kupuje dárek, je budoucí zákazník. Zachytit jeho email a příležitost ti umožní přivést ho zpět na příští narozeniny nebo svátek s náskokem v doporučení.",
    ],
    faqs: [
      {
        question: "Jak funguje kvíz na hledání dárků?",
        answer:
          "Položí tři až pět otázek o obdarovaném a příležitosti, pak doporučí kurátorovaný dárek nebo dárkovou sadu, takže ti, kdo neznají tvůj katalog, můžou přesto vybrat s jistotou.",
      },
      {
        question: "Může seskupit produkty do jednoho dárku?",
        answer:
          "Ano. Recommendation slots zkombinují několik produktů do jediné kurátorované dárkové sady, což zvyšuje průměrnou hodnotu objednávky.",
      },
      {
        question: "Můžu přidat slevu nebo dárkový vzkaz?",
        answer:
          "Ano. Stránka s výsledky podporuje bloky se slevovým kódem a s obsahem, které můžeš zobrazit podle odpovědí nakupujícího.",
      },
      {
        question: "Zachytává leady pro budoucí příležitosti?",
        answer:
          "Ano. Kvíz zachytí email a příležitost, které se synchronizují s Klaviyo a dalšími nástroji, abys je mohl reaktivovat před příštím dárkovým momentem.",
      },
    ],
    related: [
      { label: "Kvíz na šperky", href: "/solutions/jewelry/" },
      { label: "Kvíz na krásu a kosmetiku", href: "/solutions/beauty/" },
      { label: "Kvíz na hledání produktů", href: "/product-finder-quiz/" },
      { label: "Šablony kvízů", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "size-finder": {
    slug: "size-finder",
    type: "use-case",
    name: "Rozpoznání velikosti a sednutí",
    chip: "Typ kvízu",
    title: "Kvíz na rozpoznání velikosti a sednutí pro ecommerce",
    description:
      "Kvíz na rozpoznání velikosti a sednutí, který doporučí správnou velikost nebo kompatibilní produkt a sníží vrácení. Řeší multiatributové sednutí. Zdarma na začátek.",
    h1: "Kvízy na rozpoznání velikosti a sednutí, které snižují vrácení",
    heroSubtitle:
      "Špatná velikost je vrácení číslo jedna. Rozpoznání sednutí položí správné otázky a doporučí velikost nebo kompatibilní produkt, který sedne.",
    intro: [
      "Sednutí a kompatibilita jsou tam, kde ecommerce ztrácí peníze: vrácení kvůli špatné velikosti u oblečení a obuvi a vrácení kvůli špatnému sednutí u čehokoliv, co musí ladit s něčím, co nakupující už vlastní. Kvíz na rozpoznání sednutí vyřeší tato omezení před objednávkou, ne po ní.",
      "RevenueHunt řeší multiatributové sednutí čistě. Propoj odpovědi s konkrétními variantami a použij vyloučení pro tvrdá omezení, aby se míry a požadavky nakupujícího vyřešily ve správnou velikost nebo kompatibilní produkt na stránce s výsledky.",
    ],
    quizTypes: [
      {
        title: "Rozpoznání velikosti",
        body: "Otázky o mírách a preferenci sednutí zúží výběr na správnou velikost, což je nejčastější příčina vrácení.",
      },
      {
        title: "Rozpoznání kompatibility",
        body: "Vyřeš multiatributová omezení (model zařízení, typ uchycení, doplněk) až na jediný produkt, který sedne.",
      },
      {
        title: "Shoda podle preference sednutí",
        body: "Větvi podle preference sednutí (slim, regular, volný), aby doporučení sedlo s tím, jak to nakupující rád nosí.",
      },
    ],
    howItHelps: [
      "Vrácení kvůli špatné velikosti je největší náklad, který rozpoznání sednutí řeší. Zeptat se na míry a preferenci sednutí hned na začátku a propojit je s konkrétními variantami zavede nakupující k velikosti, kterou si nechají.",
      "Kompatibilita nejsou nic jiného než omezení a vyloučení je řeší dokonale. Nakupující, který deklaruje své zařízení a požadavky, dostane přesně kompatibilní produkt, se vším nekompatibilním odstraněným.",
      "Jistota konvertuje. Když kvíz nakupujícímu řekne tohle je tvá velikost s jasným důvodem, přidá do košíku místo aby se odrazil na tabulku velikostí a už se nikdy nevrátil.",
    ],
    demo: {
      label: "Vyzkoušej rozpoznání kompatibility",
      href: "https://productrecommendationquiz.com/pages/bicycle-quiz?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_size_finder",
      blurb: "Živé rozpoznání ve stylu kompatibility v našem demo obchodě, které vyřeší technickou shodu.",
    },
    faqs: [
      {
        question: "Může rozpoznání sednutí snížit vrácení kvůli špatné velikosti?",
        answer:
          "Ano. Zeptat se na míry a preferenci sednutí a propojit odpovědi s konkrétními variantami doporučí velikost, kterou si nakupující pravděpodobněji nechá, což přímo snižuje vrácení.",
      },
      {
        question: "Jak řeší kompatibilitu?",
        answer:
          "Pomocí vyloučení a propojení variant. Nakupující deklaruje svá omezení (zařízení, uchycení, doplněk) a kvíz vrátí jen kompatibilní produkt, čímž odstraní vše, co nesedí.",
      },
      {
        question: "Funguje to pro obuv a oblečení?",
        answer:
          "Ano. Rozpoznání velikosti a sednutí patří mezi nejsilnější případy užití pro oblečení, obuv a cokoliv, kde sednutí žene vrácení.",
      },
      {
        question: "Mohou výsledky vysvětlit doporučení?",
        answer:
          "Ano. Bloky s obsahem na stránce s výsledky mohou zobrazit konkrétní text podle odpovědí, takže můžeš vysvětlit, proč je daná velikost nebo produkt to správné sednutí.",
      },
    ],
    related: [
      { label: "Kvíz na módu a oblečení", href: "/solutions/fashion/" },
      { label: "Kvíz na hledání produktů", href: "/product-finder-quiz/" },
      { label: "Šablony kvízů", href: "/templates/" },
      { label: "Kvíz pro Shopify", href: "/product-recommendation-quiz-shopify/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "shade-finder": {
    slug: "shade-finder",
    type: "use-case",
    name: "Sladění odstínu",
    chip: "Typ kvízu",
    title: "Kvíz na rozpoznání odstínu: slaď make-up a barvu",
    description:
      "Kvíz na rozpoznání odstínu, který sladí make-up, korektor nebo barvu podle podtónu a hloubky, s obrázkovými odpověďmi. Snižuje vrácení. Zdarma na začátek.",
    h1: "Kvízy na rozpoznání odstínu, které sladí barvu s jistotou",
    heroSubtitle:
      "Nakupovat make-up online znamená hádat svůj odstín. Rozpoznání odstínu se zeptá na podtón a hloubku a vrátí přesnou shodu, což snižuje vrácení.",
    intro: [
      "Sladění odstínu je nejrizikovější otázka v kosmetickém ecommerce. Trefit ho špatně a produkt se vrátí. Kvíz na rozpoznání odstínu se zeptá na podtón, hloubku, krytí a finiš, a pak doporučí přesný odstín z tvého katalogu s obrázkovými odpověďmi, které jsou rychlé na mobilu.",
      "RevenueHunt propojí každou odpověď s konkrétními variantami odstínu a vyloučí zbytek, takže stránka s výsledky zobrazí sebejistou shodu místo stěny vzorků. Profil odstínu nakupujícího se synchronizuje s tvým emailovým nástrojem pro doplnění a sladěné produkty.",
    ],
    quizTypes: [
      {
        title: "Sladění odstínu make-upu",
        body: "Otázky o podtónu a hloubce se přiřadí k přesnému odstínu make-upu nebo korektoru, s obrázkovými odpověďmi pro vyšší rychlost.",
      },
      {
        title: "Sladění rtěnky nebo barvy",
        body: "Spoj barvu rtů, tváří nebo očí s koloritem a preferencí nakupujícího.",
      },
      {
        title: "Sladění barvy vlasů",
        body: "Veď domácí barvení vlasů podle aktuálního odstínu, cílového odstínu a podtónu ke správné receptuře.",
      },
    ],
    howItHelps: [
      "Obrázkové odpovědi podpírají otázky o odstínu. Nechat nakupující klepnout na obrázek podtónu nebo finiše překoná žádost, aby to popsali, a drží dokončení vysoko na mobilních obrazovkách, kde se kosmetika prodává.",
      "Vyloučení mění stěnu vzorků v jedinou odpověď. Propojení podtónu a hloubky s konkrétními variantami a vyloučení zbytku znamená, že stránka s výsledky zobrazí shodu, ne celou řadu.",
      "Odstín je profil, který stojí za to uchovat. Synchronizace odstínu nakupujícího, který odpovídá, s Klaviyo ti umožní dělat marketing doplnění a sladěných produktů přesně těm správným lidem.",
    ],
    demo: {
      label: "Vyzkoušej kvíz na sladění odstínu",
      href: "https://productrecommendationquiz.com/pages/foundation-match?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_shade_finder",
      blurb: "Živý kvíz na sladění odstínu make-upu na základě obrázků v našem demo obchodě.",
    },
    faqs: [
      {
        question: "Jak rozpoznání odstínu sladí make-up?",
        answer:
          "Zeptá se na podtón, hloubku, krytí a finiš, propojí každou odpověď s variantami odstínu, které odpovídají, a vyloučí zbytek. Stránka s výsledky zobrazí přesnou shodu s přidáním do košíku.",
      },
      {
        question: "Používá obrázkové odpovědi?",
        answer:
          "Ano. Možnosti můžou být klikatelné obrázky, což je ideální pro otázky o podtónu a finiši a zlepšuje dokončení na mobilu.",
      },
      {
        question: "Může snížit vrácení související s odstínem?",
        answer:
          "Ano. Doporučit sebejistou shodu místo stěny vzorků zavede nakupující k odstínu, který si pravděpodobněji nechají.",
      },
      {
        question: "Funguje to i mimo make-up?",
        answer:
          "Ano. Stejný přístup sladí barvu rtů, tváří, barvu očí a domácí barvení vlasů.",
      },
    ],
    related: [
      { label: "Kvíz na krásu a kosmetiku", href: "/solutions/beauty/" },
      { label: "Kvíz na péči o pleť", href: "/solutions/skincare/" },
      { label: "Pro kosmetické značky", href: "/for-beauty-brands/" },
      { label: "Šablony kvízů", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "routine-builder": {
    slug: "routine-builder",
    type: "use-case",
    name: "Tvorba rutiny",
    chip: "Typ kvízu",
    title: "Kvíz na tvorbu rutiny pro péči o pleť a další",
    description:
      "Kvíz na tvorbu rutiny, který vrátí kompletní vícekrokovou rutinu, ne jediný produkt, pomocí recommendation slots. Zvyšuje AOV. Zdarma na začátek.",
    h1: "Kvízy na tvorbu rutiny, které prodají kompletní sadu",
    heroSubtitle:
      "Produkt je prodej. Rutina je košík a návyk. Tvorba rutiny vrátí kompletní vícekrokovou sadu na míru každému nakupujícímu.",
    intro: [
      "Některé produkty se nakupují jako systém, ne jako jediná položka: rutina péče o pleť, stack doplňků, režim pro vlasy. Kvíz na tvorbu rutiny vrátí celou sadu, s vyhrazeným místem pro každý krok, takže si nakupující pořídí kompletní rutinu místo jednoho produktu.",
      "RevenueHunt to dělá pomocí recommendation slots. Vyhraď slot pro každou roli (čištění, ošetření, hydratace, SPF, nebo co tvá kategorie potřebuje) a kvíz každý naplní nejlepší shodou a pak zobrazí kompletní rutinu seskupenou podle kroku s přidáním celé sady do košíku.",
    ],
    quizTypes: [
      {
        title: "Rutina založená na krocích",
        body: "Vyhraď slot pro každý krok a naplň ho produktem, který nejlépe odpovídá, aby každý nakupující dostal kompletní a soudržnou rutinu.",
      },
      {
        title: "Tvorba stacku",
        body: "Sestav stack více produktů (skvělé pro doplňky a wellness) s rolí pro každý produkt.",
      },
      {
        title: "Denní a noční rutina",
        body: "Vrať oddělené ranní a večerní rutiny z jednoho kvízu pomocí zobrazovací logiky na stránce s výsledky.",
      },
    ],
    howItHelps: [
      "Recommendation slots jsou rozdíl mezi prodejem a košíkem. Vyhradit místo pro každý krok znamená, že stránka s výsledky vrátí kompletní rutinu, což zvyšuje hodnotu objednávky, aniž by to působilo jako upsell.",
      "Seskupení podle kroku dává rutině smysl. Nakupující vidí přesně, co použít a kdy, což buduje důvěru v nákup a návyk, který je přivede zpět.",
      "Rutina je motor retence. Sada, kterou doporučíš, ti řekne, co každému zákazníkovi dojde a kdy, takže tvůj emailový follow-up může načasovat nabídky doplnění s přesností.",
    ],
    faqs: [
      {
        question: "Jak tvorba rutiny vrátí kompletní sadu?",
        answer:
          "Pomocí recommendation slots. Každý slot je vyhrazen pro roli (například čištění, ošetření, hydratace, SPF) a naplní se produktem, který nejlépe odpovídá, takže stránka s výsledky vrátí kompletní rutinu.",
      },
      {
        question: "Může zobrazit oddělenou denní a noční rutinu?",
        answer:
          "Ano. Použij zobrazovací logiku na stránce s výsledky k zobrazení ranní a večerní rutiny nebo jakéhokoliv podmíněného seskupení podle odpovědí nakupujícího.",
      },
      {
        question: "Zvyšuje průměrnou hodnotu objednávky?",
        answer:
          "Doporučit kompletní sadu místo jediného produktu dá nakupujícím důvod koupit celou rutinu, což zvyšuje hodnotu objednávky.",
      },
      {
        question: "Jaké kategorie se hodí k tvorbě rutiny?",
        answer:
          "Péče o pleť, péče o vlasy, doplňky stravy a jakýkoliv katalog, který se nakupuje jako vícekrokový systém místo jediné položky.",
      },
    ],
    related: [
      { label: "Kvíz na péči o pleť", href: "/solutions/skincare/" },
      { label: "Kvíz na doplňky stravy", href: "/solutions/supplements/" },
      { label: "Kvíz na tvorbu balíčků", href: "/solutions/bundle-builder/" },
      { label: "Šablony kvízů", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "bundle-builder": {
    slug: "bundle-builder",
    type: "use-case",
    name: "Tvorba balíčků",
    chip: "Typ kvízu",
    title: "Kvíz na tvorbu balíčků: prodávej kurátorované sady",
    description:
      "Kvíz na tvorbu balíčků, který sestaví kurátorovanou sadu z odpovědí nakupujícího a zvýší průměrnou hodnotu objednávky. Přidání celého balíčku do košíku. Zdarma.",
    h1: "Kvízy na tvorbu balíčků, které zvyšují hodnotu objednávky",
    heroSubtitle:
      "Kurátorovaný balíček konvertuje lépe než jediný produkt a obecný upsell. Tvorba balíčků sestaví sadu z odpovědí každého nakupujícího.",
    intro: [
      "Balíčky fungují, ale jen když jsou relevantní. Obecný upsell tři za dva ignoruje, co nakupující skutečně chce. Kvíz na tvorbu balíčků sestaví kurátorovanou sadu z odpovědí každého nakupujícího, takže balíček působí osobně a hodnota objednávky přijde přirozeně.",
      "RevenueHunt staví balíčky pomocí recommendation slots a podmíněných výsledků. Vyhraď roli pro každý produkt sady, slaď každý s nakupujícím a představ kompletní balíček na stránce s výsledky s přidáním všeho do košíku najednou.",
    ],
    quizTypes: [
      {
        title: "Tvorba kurátorované sady",
        body: "Vyhraď roli pro každý produkt balíčku a naplň každou nejlepší shodou, aby sada seděla nakupujícímu místo katalogu.",
      },
      {
        title: "Rozpoznání startovního kitu",
        body: "Sestav kompletní startovní kit pro nakupující poprvé nebo nové v kategorii, kteří chtějí sebejistý nákup.",
      },
      {
        title: "Balíček na míru",
        body: "Nech odpovědi pohánět flexibilní balíček, se zobrazovací logikou, která přidává nebo odebírá položky podle toho, co nakupující vybere.",
      },
    ],
    howItHelps: [
      "Relevantní balíček překoná obecný. Sladit každou položku sady s odpověďmi nakupujícího znamená, že balíček se čte jako doporučení, ne jako slevová taktika, a podle toho konvertuje.",
      "Jediné přidání celé sady do košíku odstraní tření. Nakupující pořídí balíček jednou akcí místo aby hledali každou položku, což chrání vyšší hodnotu objednávky, kterou jsi právě vytvořil.",
      "Slevové bloky pomohou balíčku dosáhnout cíle. Ukaž slevu na sadu na stránce s výsledky propojenou s konkrétní kombinací, aby úspora působila zaslouženě a nakupující dokončil nákup.",
    ],
    faqs: [
      {
        question: "Jak funguje kvíz na tvorbu balíčků?",
        answer:
          "Vyhradí roli pro každý produkt balíčku, sladí každý s odpověďmi nakupujícího a představí kompletní kurátorovanou sadu na stránce s výsledky s přidáním všeho do košíku najednou.",
      },
      {
        question: "Můžu přidat slevu na balíček?",
        answer:
          "Ano. Stránka s výsledky podporuje bloky se slevovým kódem, které můžeš propojit s konkrétními kombinacemi odpovědí, takže se úspora balíčku zobrazí v kontextu.",
      },
      {
        question: "Zvyšuje průměrnou hodnotu objednávky?",
        answer:
          "Doporučit relevantní a kurátorovanou sadu místo jediného produktu dá nakupujícím důvod koupit víc, což zvyšuje hodnotu objednávky.",
      },
      {
        question: "Jaké kategorie se hodí?",
        answer:
          "Doplňky stravy, krása, jídlo a nápoje, bydlení a jakýkoliv katalog, kde kurátorovaná sada prodává lépe než jediná položka.",
      },
    ],
    related: [
      { label: "Kvíz na tvorbu rutiny", href: "/solutions/routine-builder/" },
      { label: "Kvíz na hledání dárků", href: "/solutions/gift-finder/" },
      { label: "Kvíz na doplňky stravy", href: "/solutions/supplements/" },
      { label: "Šablony kvízů", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },
};
