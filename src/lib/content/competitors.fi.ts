import type { Competitor } from "../competitors";

// RevenueHuntin sarakkeen jaetut arvot (varmennettu kokoelman + dokumenttien kanssa).
// Pidetään nimettyinä vakioina, jotta jokainen kilpailijataulukko kertoo
// saman RH-tarinan.
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

export const COMPETITORS_FI: Record<string, Competitor> = {
  "octane-ai": {
    slug: "octane-ai",
    name: "Octane AI",
    category: "Kyselysovellus Shopifylle",
    title: "RevenueHunt vs Octane AI: vaihtoehto Octane AI:lle",
    description:
      "RevenueHunt vs Octane AI: ilmainen taso, ei Shopify-vesileimaa ja rajattomat kyselyt alkaen $39/mo. Vaihtoehto Octane AI:lle tuotekyselyihin.",
    h1: "RevenueHunt vs Octane AI",
    heroSubtitle:
      "Molemmat luovat tuotesuosittelukyselyjä Shopifylle. RevenueHunt lisää ilmaisen tason, rajattomat kyselyt ja vesileimattomuuden murto-osalla hinnasta.",
    intro: [
      "Octane AI on tuotekysely- ja personointisovellus, joka on tarkoitettu Shopifylle. Sen hinnoittelu perustuu krediitteihin, alkaa $50/kk eikä ilmaista tasoa ole. Se on kyvykäs työkalu, etenkin isoille kauneusbrändeille. Mutta aloitustaso rajaa sinut kahteen kyselyyn ja pitää Octane AI:n logon kyselyssäsi, kunnes pääset $200/kk Plus-tasolle.",
      "RevenueHunt on tuotesuosittelukysely, jota käyttää yli 20 000 brändiä (4,9★, yli 450 arvostelua). Aloita ilmaiseksi, se ei koskaan lisää vesileimaa Shopify-kyselyysi millään tasolla, antaa sinun luoda rajattomasti kyselyjä ensimmäisestä päivästä lähtien ja toimii Shopifyn lisäksi WooCommercessa, BigCommercessa, Magentossa, Wixissä ja muissa.",
    ],
    rows: [
      { feature: "Ilmainen taso", rh: RH.freePlan, them: "no" },
      { feature: "Maksullisen aloitushinta", rh: RH.startingPaid, them: "$50/mo" },
      { feature: "Hinnoittelumalli", rh: "Kiinteä maksu, vastausten mukaan", them: "Krediittipohjainen + ylitys" },
      { feature: "Rajattomat kyselyt aloitustasolla", rh: RH.unlimitedQuizzes, them: "no" },
      { feature: "Ei toimittajan vesileimaa Shopifyssä (millä tahansa tasolla)", rh: RH.noForcedBranding, them: "Logo $200/mo Plus-tasoon asti" },
      { feature: "Suosittelee oikeita tuotteita katalogistasi", rh: RH.catalogRecs, them: "yes" },
      { feature: "Natiivi Shopify-sovellus (Built for Shopify)", rh: RH.shopifyNative, them: "no" },
      { feature: "Toimii WooCommercessa, BigCommercessa, Magentossa, Wixissä ja muissa", rh: RH.multiPlatform, them: "no" },
      { feature: "AI-kyselyrakentaja (asennus 60 sekunnissa)", rh: RH.aiBuilder, them: "yes" },
      { feature: "Rajaton ehdollinen / haarautuva logiikka", rh: RH.branching, them: "yes" },
      { feature: "Kysymyskohtainen keskeytysanalytiikka", rh: RH.analytics, them: "yes" },
      { feature: "Klaviyo- ja sähköposti- / CRM-integraatiot", rh: RH.emailIntegrations, them: "yes" },
    ],
    whySwitch: [
      {
        title: "Aloita ilmaiseksi ja maksa sitten kiinteä maksu",
        body: "Octane AI:lla ei ole ilmaista tasoa ja se alkaa $50/kk krediiteillä, ja ylitykset ovat $0,10 per krediitti, kun ne loppuvat. RevenueHuntilla on aidosti ilmainen taso ja kiinteä, vastauspohjainen hinnoittelu alkaen $39/kk. Ei krediittilaskelmia, ei yllätysylityksiä.",
      },
      {
        title: "Säilytä brändisi ensimmäisestä päivästä lähtien",
        body: "Octane AI näyttää logonsa kyselyssäsi, kunnes päivität $200/kk Plus-tasolle. RevenueHunt ei koskaan lisää vesileimaa Shopify-kyselyihin, ei millään tasolla, mukaan lukien ilmainen.",
      },
      {
        title: "Luo niin monta kyselyä kuin tarvitset",
        body: "Octane AI:n aloitustaso rajaa sinut kahteen kyselyyn. RevenueHunt antaa sinun luoda rajattomasti kyselyjä jokaisella tasolla, joten voit pitää kyselyn per kokoelma, kampanja tai laskeutumissivu.",
      },
      {
        title: "Myy missä tahansa, ei vain Shopifyssä",
        body: "Octane AI on yksinomaan Shopifylle. RevenueHunt toimii natiivisti Shopifyssä ja myös WooCommercessa, BigCommercessa, Magentossa, Wixissä, Squarespacessa ja itsenäisenä isännöitynä kyselynä.",
      },
    ],
    bestFor:
      "Octane AI on järkevä vaihtoehto yritystason kauneusbrändeille, jotka ovat jo Shopify Plussassa, jotka haluavat syvää AI-personointia ja joilla on budjettia $200/kk ylöspäin. Jos haluat ilmaisen tason, kiinteän hinnoittelun, vesileimattomat kyselyt tai monialustaisen tuen, RevenueHunt sopii paremmin.",
    migration:
      "Vaihtaminen Octane AI:sta on nopeaa. Rakenna kyselysi uudelleen RevenueHuntin vedä ja pudota -rakentajassa (tai luo se 60 sekunnissa AI Copilotillamme), upota se ja yhdistä Klaviyo. Useimmat kaupat ovat aktiivisia samana päivänä, ja tukitiimimme auttaa sinua migraatiossa.",
    faqs: [
      {
        question: "Onko RevenueHunt halvempi kuin Octane AI?",
        answer:
          "Kyllä. RevenueHuntilla on ilmainen taso ja maksulliset tasot alkaen $39/kk kiinteällä, vastauspohjaisella hinnoittelulla. Octane AI:lla ei ole ilmaista tasoa, se alkaa $50/kk krediittijärjestelmällä ja veloittaa $0,10 per krediitti ylityksissä.",
      },
      {
        question: "Lisääkö RevenueHunt logonsa kyselyyni kuten Octane AI tekee?",
        answer:
          "Ei. RevenueHunt ei koskaan lisää vesileimaa Shopify-kyselyihin millään tasolla. Octane AI pitää logonsa kyselyssäsi, kunnes päivität $200/kk Plus-tasolle.",
      },
      {
        question: "Toimiiko RevenueHunt muilla alustoilla kuin Shopifyssä?",
        answer:
          "Kyllä. RevenueHunt toimii Shopifyssä, WooCommercessa, BigCommercessa, Magentossa, Wixissä, Squarespacessa ja itsenäisenä isännöitynä kyselynä. Octane AI on yksinomaan Shopifylle.",
      },
      {
        question: "Voinko migratoida Octane AI -kyselyni RevenueHuntiin?",
        answer:
          "Kyllä. Luo kyselysi uudelleen RevenueHuntin rakentajassa tai luo se AI Quiz Copilotilla, ja yhdistä sitten sähköpostityökalusi. Useimmat kauppiaat ovat aktiivisia samana päivänä, ja tiimimme auttaa migraatiossa.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  typeform: {
    slug: "typeform",
    name: "Typeform",
    category: "Yleiskäyttöinen lomake- ja kyselyrakentaja",
    title: "RevenueHunt vs Typeform verkkokaupan kyselyihin",
    description:
      "RevenueHunt vs Typeform: Built-for-Shopify-kysely, joka suosittelee oikeita tuotteita ja tuottaa myyntiä, ei vain lomaketta. Ilmainen taso, alkaen $39/mo.",
    h1: "RevenueHunt vs Typeform",
    heroSubtitle:
      "Typeform luo kauniita lomakkeita ja kyselyitä. RevenueHunt luo tuotesuosittelukyselyjä, jotka yhdistyvät Shopify-katalogiisi ja muuttavat vastaukset myynniksi.",
    intro: [
      "Typeform on yleiskäyttöinen verkkolomake- ja kyselyrakentaja. Se on loistava kyselyihin, liidienkeruulomakkeisiin ja tutkimukseen keskustelevalla, yksi kysymys kerrallaan -suunnittelulla. Mutta sillä ei ole natiivia Shopify-integraatiota, tuotekatalogin synkronointia eikä suositusmoottoria. Se kerää vastauksia; se ei suosittele tuotteita.",
      "RevenueHunt on Built-for-Shopify-tuotesuosittelukysely, jota käyttää yli 20 000 brändiä (4,9★, yli 450 arvostelua). Se kohdentaa jokaisen ostajan vastaukset oikeisiin tuotteisiin elävästä katalogistasi, näyttää personoidun tulossivun suoralla lisää ostoskoriin -toiminnolla ja kerää liidit Klaviyoon. Myyntisuppilo, ei vain lomake.",
    ],
    rows: [
      { feature: "Ilmainen taso", rh: RH.freePlan, them: "yes (rajoitettu)" },
      { feature: "Maksullisen aloitushinta", rh: RH.startingPaid, them: "$29/mo" },
      { feature: "Luotu verkkokaupan tuotesuosituksiin", rh: RH.ecommerceRecs, them: "no" },
      { feature: "Suosittelee oikeita tuotteita kauppasi katalogista", rh: RH.catalogRecs, them: "no" },
      { feature: "Tuotekatalogin synkronointi", rh: "yes", them: "no" },
      { feature: "Natiivi Shopify-sovellus (Built for Shopify)", rh: RH.shopifyNative, them: "no" },
      { feature: "Tulossivu suoralla lisää ostoskoriin -toiminnolla", rh: "yes", them: "no" },
      { feature: "AI-kyselyrakentaja (asennus 60 sekunnissa)", rh: RH.aiBuilder, them: "yes (AI-lomakkeet)" },
      { feature: "Ehdollinen / haarautuva logiikka", rh: RH.branching, them: "yes (logiikkahypyt)" },
      { feature: "Kysymyskohtainen keskeytysanalytiikka", rh: RH.analytics, them: "yes" },
      { feature: "Klaviyo- ja sähköposti- / CRM-integraatiot", rh: RH.emailIntegrations, them: "yes" },
      { feature: "Toimii WooCommercessa, BigCommercessa, Magentossa ja muissa", rh: RH.multiPlatform, them: "no" },
    ],
    whySwitch: [
      {
        title: "Suosittelee tuotteita, ei vain kerää vastauksia",
        body: "Typeform tallentaa vastaukset ja siihen se jää. RevenueHuntin suositusmoottori luokittelee tarkat tuotteet, variantit ja kokoelmat katalogistasi jokaisen ostajan vastausten mukaan ja näyttää ne personoidulla tulossivulla.",
      },
      {
        title: "Luotu Shopifylle ja verkkokaupalle",
        body: "Typeformilla ei ole natiivia Shopify-integraatiota eikä katalogin synkronointia. RevenueHunt on Built-for-Shopify-sovellus reaaliaikaisella katalogin synkronoinnilla ja tuotenimien, kuvausten ja hintojen automaattisella lokalisoinnilla Shopify Marketsin kautta.",
      },
      {
        title: "Suppilo, ei lomake",
        body: "RevenueHunt muuttaa kyselyn myyntipoluksi: personoidut tulokset, suora lisää ostoskoriin, alennuslohkot ja sähköpostinkeruu Klaviyoon, jotta kysely tuottaa oikeaa liikevaihtoa, ei vain dataa.",
      },
      {
        title: "Tehty kauppiaille",
        body: "Unohda geneeristen lomakkeiden rakentaminen. Käytä valmiita kyselymalleja ihonhoidolle, lisäravinteille, muodille ja muille, tai anna AI Copilotin luoda täydellinen tuotekysely kauppasi kuvauksesta noin 60 sekunnissa.",
      },
    ],
    bestFor:
      "Typeform on erinomainen kyselyihin, liidienkeruulomakkeisiin, palautteeseen ja tutkimukseen, joissa et tarvitse tuotteiden suosittelua. Jos tavoitteesi on auttaa Shopify-ostajia löytämään oikea tuote ja ostamaan se, RevenueHunt on tehty juuri siihen.",
    migration:
      "Käytätkö jo Typeform-kyselyä? Rakenna se uudelleen RevenueHuntissa minuuteissa, tai luo se AI Copilotilla, linkitä tuotteesi ja yhdistä Klaviyo. Säilytät keskustelevan tunnun ja lisäät oikean suositusmoottorin ja lisää ostoskoriin -toiminnon.",
    faqs: [
      {
        question: "Voiko Typeform suositella tuotteita kuten RevenueHunt?",
        answer:
          "Ei. Typeform on yleiskäyttöinen lomake- ja kyselyrakentaja ilman tuotekatalogin synkronointia tai suositusmoottoria. RevenueHunt kohdentaa kyselyn vastaukset oikeisiin tuotteisiin kaupastasi ja näyttää ne personoidulla tulossivulla lisää ostoskoriin -toiminnolla.",
      },
      {
        question: "Integroituuko RevenueHunt Shopifyyn ja Typeform ei?",
        answer:
          "RevenueHunt on Built-for-Shopify-sovellus reaaliaikaisella katalogin synkronoinnilla ja Shopify Markets -lokalisoinnilla. Typeformilla ei ole natiivia tuotesuositusintegraatiota Shopifyyn. Sitä ei ole luotu verkkokaupan tuotteiden löytämiseen.",
      },
      {
        question: "Onko RevenueHunt parempi kuin Typeform verkkokaupan kyselyyn?",
        answer:
          "Tuotesuosittelukyselyihin kyllä. RevenueHunt on tehty juuri siihen. Yleisiin kyselyihin ja liidilomakkeisiin Typeform on hyvä vaihtoehto. Ne ratkaisevat eri ongelmia.",
      },
      {
        question: "Voinko kerätä liidit ja lähettää ne Klaviyoon?",
        answer:
          "Kyllä. RevenueHunt kerää sähköpostit kyselyssä ja synkronoi vastaukset ja asiakastagit Klaviyoon, Mailchimpiin, Omnisendiin, HubSpotiin ja muihin, jotta voit seurata personoiduilla kampanjoilla.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  zoovu: {
    slug: "zoovu",
    name: "Zoovu",
    category: "Yritystason tuotteiden löytämisalusta",
    title: "RevenueHunt vs Zoovu: itsepalveluvaihtoehto",
    description:
      "RevenueHunt vs Zoovu: keskittynyt ja itsepalveluinen Shopify-tuotekysely, jossa on ilmainen taso ja hinnoittelu alkaen $39/mo, ei yritystason löytämissviitti.",
    h1: "RevenueHunt vs Zoovu",
    heroSubtitle:
      "Zoovu on yritystason tuotteiden löytämis- ja ohjatun myynnin alusta, joka myydään demon kautta. RevenueHunt on keskittynyt tuotekysely, jonka voit asentaa tänään: ilmainen aloittaa, läpinäkyvä hinnoittelu, aktiivinen samana päivänä.",
    intro: [
      "Zoovu on yritystason tuotteiden löytämisalusta, joka yhdistää AI-haun, ohjatun myynnin, tuotesuositukset ja visuaaliset konfiguraattorit (CPQ) suurille B2C- ja B2B-brändeille, joilla on valtavat ja monimutkaiset katalogit. Se on alustariippumaton, myydään demojen kautta räätälöidyllä yritystason hinnoittelulla eikä siinä ole ilmaista tasoa tai itsepalvelurekisteröitymistä.",
      "RevenueHunt on keskittynyt tuotesuosittelukysely, jota käyttää yli 20 000 brändiä (4,9★, yli 450 arvostelua). Yritystason löytämissviitin sijaan se tekee yhden asian poikkeuksellisen hyvin, ohjaa Shopify-ostajat oikeaan tuotteeseen, läpinäkyvällä hinnoittelulla, ilmaisella tasolla ja saman päivän asennuksella, ilman myyntipuhelua.",
    ],
    rows: [
      { feature: "Ilmainen taso", rh: RH.freePlan, them: "no" },
      { feature: "Läpinäkyvä julkinen hinnoittelu", rh: RH.transparentPricing, them: "Räätälöity / pyydä demo" },
      { feature: "Aloitushinta", rh: RH.startingPaid, them: "Myyntivetoinen (yritystaso)" },
      { feature: "Itsepalveluasennus (ei myyntipuhelua)", rh: "yes", them: "no" },
      { feature: "Tehty tuotesuosittelukyselyihin", rh: RH.ecommerceRecs, them: "Kysely on yksi moduuli löytämissviitissä" },
      { feature: "Suosittelee oikeita tuotteita katalogistasi", rh: RH.catalogRecs, them: "yes" },
      { feature: "Natiivi Shopify-sovellus (Built for Shopify)", rh: RH.shopifyNative, them: "Integraation kautta" },
      { feature: "AI-kyselyrakentaja (asennus 60 sekunnissa)", rh: RH.aiBuilder, them: "Yritystason AI-sviitti" },
      { feature: "Rajattomat kyselyt", rh: RH.unlimitedQuizzes, them: "yes" },
      { feature: "Rajaton ehdollinen / haarautuva logiikka", rh: RH.branching, them: "yes" },
      { feature: "Kysymyskohtainen keskeytysanalytiikka", rh: RH.analytics, them: "yes" },
      { feature: "Klaviyo- ja sähköposti- / CRM-integraatiot", rh: RH.emailIntegrations, them: "yes" },
    ],
    whySwitch: [
      {
        title: "Itsepalvelu, ei myyntipuhelu",
        body: "Zoovu myydään demojen ja räätälöityjen yritystason sopimusten kautta ilman julkista hinnoittelua. RevenueHunt on asenna ja valmista: valitse taso, luo kyselysi ja julkaise. Ei yrityshankintaa, ei käyttöönottoprojektia.",
      },
      {
        title: "Aktiivinen minuuteissa, ei käyttöönotto",
        body: "Zoovu on raskas löytämissviitti, joka kattaa haun, konfiguraattorit ja ohjatun myynnin monissa järjestelmissä. RevenueHunt on keskittynyt kyselysovellus, jonka useimmat kauppiaat julkaisevat samana päivänä, ja AI Copilot, joka kokoaa täydellisen kyselyn 60 sekunnissa.",
      },
      {
        title: "Hinnoittelu, joka sopii kasvavalle brändille",
        body: "Yritystason löytämisalustat on hinnoiteltu globaaleille katalogeille ja suurille tiimeille. RevenueHunt aloittaa ilmaiseksi ja skaalautuu vastausten mukaan alkaen $39/kk, sopien Shopifyn ja Shopify Plussan brändeille.",
      },
      {
        title: "Built-for-Shopify-yksinkertaisuus",
        body: "RevenueHunt on Built-for-Shopify-sovellus reaaliaikaisella katalogin synkronoinnilla ja Shopify Markets -lokalisoinnilla, arvostettu 4,9★:lla yli 450 kauppiaan toimesta. Tuotteiden löytämiseen tarvittava syvyys ilman yritystason taakkaa.",
      },
    ],
    bestFor:
      "Zoovu sopii suurille yrityksille, joilla on massiiviset ja monimutkaiset katalogit (kulutuselektroniikka, kodinkoneet, teollisuus, B2B), jotka tarvitsevat konfiguraattoreita, CPQ:ta ja ohjattua myyntiä monissa järjestelmissä, ja joilla on budjetti ja tiimi yritystason käyttöönottoon. Jos haluat keskittyneen, edullisen ja itsepalveluisen Shopify-kyselyn, RevenueHunt sopii paremmin.",
    migration:
      "Zoovusta siirtyminen on yksinkertaista. Luo kyselysi RevenueHuntissa (tai luo se AI Copilotilla), upota se ja yhdistä Klaviyo tai CRM:si. Ei käyttöönottoprojektia. Useimmat kaupat ovat aktiivisia samana päivänä, ja tuki auttaa sinua perille.",
    faqs: [
      {
        question: "Paljonko RevenueHunt maksaa verrattuna Zoovuun?",
        answer:
          "RevenueHuntilla on ilmainen taso ja läpinäkyvät maksulliset tasot alkaen $39/kk. Zoovu ei julkaise hintoja. Se on myyntivetoinen yritystason alusta, joka antaa räätälöidyn hinnan demon jälkeen.",
      },
      {
        question: "Onko RevenueHunt yritystason löytämisalusta kuten Zoovu?",
        answer:
          "Ei, ja se on tarkoitus. Zoovu yhdistää AI-haun, konfiguraattorit, CPQ:n ja ohjatun myynnin suurille katalogeille. RevenueHunt keskittyy tuotesuosittelukyselyihin Shopifylle ja tekee sen yhden työn poikkeuksellisen hyvin, itsepalveluasennuksella ja ilman myyntipuhelua.",
      },
      {
        question: "Tekeekö RevenueHunt ohjattua myyntiä kuten Zoovu?",
        answer:
          "Kyllä. RevenueHunt-kysely on ohjattua myyntiä: se esittää oikeat kysymykset ja kohdentaa vastaukset tarkkoihin tuotteisiin katalogistasi, personoidulla tulossivulla ja suoralla lisää ostoskoriin -toiminnolla, ilman yritystason hinnoittelua tai käyttöönottoa.",
      },
      {
        question: "Kuinka kauan asennus kestää verrattuna Zoovuun?",
        answer:
          "Useimmat RevenueHunt-kauppiaat julkaisevat samana päivänä, ja AI Quiz Copilot voi koota täydellisen kyselyn noin 60 sekunnissa. Zoovu on yleensä myyntivetoinen yritystason käyttöönotto.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  jebbit: {
    slug: "jebbit",
    name: "Jebbit",
    category: "Yritystason ilmoitetun datan alusta (nyt osa BlueConicia)",
    title: "RevenueHunt vs Jebbit: itsepalveluvaihtoehto",
    description:
      "RevenueHunt vs Jebbit: itsenäinen ja itsepalveluinen Shopify-tuotekysely, jossa on ilmainen taso alkaen $39/mo. Jebbit on nyt osa BlueConicin yritystason CDP:tä.",
    h1: "RevenueHunt vs Jebbit",
    heroSubtitle:
      "Jebbit on nyt osa BlueConicin yritystason asiakasdata-alustaa, joka myydään demon kautta. RevenueHunt on itsenäinen ja itsepalveluinen tuotekysely: ilmainen aloittaa, natiivi Shopifylle, aktiivinen samana päivänä.",
    intro: [
      "Jebbit luo interaktiivisia kyselyitä, tuote-etsijöitä ja mieltymysflowja ilmoitetun (zero-party) datan keräämiseen. Se hankittiin ja on nyt “Experiences by Jebbit”, osa BlueConicin asiakasdata-alustaa, suunnattu yritystason ja keskisuuren markkinan B2C-brändeille (L'Oréal, Express, Heineken), alustariippumaton ja myydään demojen kautta ilman julkisia hintoja tai ilmaista tasoa.",
      "RevenueHunt on itsenäinen tuotesuosittelukysely, jota käyttää yli 20 000 brändiä (4,9★, yli 450 arvostelua). Sinun ei tarvitse ostaa CDP:tä käyttääksesi sitä: se on keskittynyt, Built-for-Shopify-kysely läpinäkyvällä hinnoittelulla, ilmaisella tasolla ja saman päivän asennuksella, itsepalveluna, ilman myyntipuhelua.",
    ],
    rows: [
      { feature: "Ilmainen taso", rh: RH.freePlan, them: "no" },
      { feature: "Läpinäkyvä julkinen hinnoittelu", rh: RH.transparentPricing, them: "Räätälöity / pyydä demo" },
      { feature: "Aloitushinta", rh: RH.startingPaid, them: "Myyntivetoinen (yritystaso)" },
      { feature: "Itsepalveluasennus (ei myyntipuhelua)", rh: "yes", them: "no" },
      { feature: "Itsenäinen tuote (ei tarvetta ostaa alustaa)", rh: "yes", them: "Nyt osa BlueConicin CDP:tä" },
      { feature: "Suosittelee oikeita tuotteita katalogistasi", rh: RH.catalogRecs, them: "yes" },
      { feature: "Natiivi Shopify-sovellus (Built for Shopify)", rh: RH.shopifyNative, them: "Integraation kautta" },
      { feature: "AI-kyselyrakentaja (asennus 60 sekunnissa)", rh: RH.aiBuilder, them: "no" },
      { feature: "Rajattomat kyselyt", rh: RH.unlimitedQuizzes, them: "yes" },
      { feature: "Rajaton ehdollinen / haarautuva logiikka", rh: RH.branching, them: "yes" },
      { feature: "Kysymyskohtainen keskeytysanalytiikka", rh: RH.analytics, them: "yes" },
      { feature: "Kerää zero-party- / ilmoitettua dataa", rh: "yes", them: "yes" },
    ],
    whySwitch: [
      {
        title: "Itsenäinen kysely, ei alustan ostaminen",
        body: "Jebbit on nyt “Experiences by Jebbit” osana BlueConicin CDP:tä. RevenueHunt on keskittynyt sovellus, jota voit käyttää itsenäisesti. Ei asiakasdata-alustaa, joka pitäisi ostaa tai ottaa käyttöön.",
      },
      {
        title: "Itsepalvelu, ei myyntipuhelu",
        body: "Jebbit/BlueConic myydään demojen ja räätälöityjen yritystason sopimusten kautta ilman julkista hinnoittelua. RevenueHunt on asenna ja valmista, ilmaisella tasolla ja läpinäkyvällä hinnoittelulla alkaen $39/kk.",
      },
      {
        title: "Luotu Shopifylle, aktiivinen samana päivänä",
        body: "RevenueHunt on Built-for-Shopify-sovellus reaaliaikaisella katalogin synkronoinnilla ja suoralla lisää ostoskoriin -toiminnolla, ja AI Copilot, joka kokoaa täydellisen kyselyn 60 sekunnissa. Useimmat kauppiaat julkaisevat samana päivänä.",
      },
      {
        title: "Omistat edelleen zero-party-datasi",
        body: "Jokainen kyselyvastaus on zero-party-dataa, jonka ostajasi tarjoavat vapaaehtoisesti. RevenueHunt synkronoi vastaukset ja asiakastagit Klaviyoon, Mailchimpiin, Omnisendiin, HubSpotiin ja muihin. CDP:tä ei tarvita niiden hyödyntämiseen.",
      },
    ],
    bestFor:
      "Jebbit, osana BlueConicia, sopii yritystason B2C-brändeille, jotka haluavat ilmoitetun datan kokemuksia tiiviisti kytkettyinä täydelliseen asiakasdata-alustaan ja aktivoituina monissa kanavissa, ja joilla on budjetti CDP:hen. Jos haluat itsenäisen, edullisen ja itsepalveluisen Shopify-kyselyn, RevenueHunt sopii paremmin.",
    migration:
      "Jebbitistä poistuminen tai BlueConicin arvioiminen on yksinkertaista. Luo kyselysi RevenueHuntissa (tai luo se AI Copilotilla), upota se ja yhdistä Klaviyo tai CRM:si. Useimmat kaupat ovat aktiivisia samana päivänä, ja zero-party-datasi jatkaa virtaamista sähköpostityökaluihisi.",
    faqs: [
      {
        question: "Onko Jebbit edelleen saatavilla itsenäisesti?",
        answer:
          "Jebbit on nyt “Experiences by Jebbit”, osa BlueConicin asiakasdata-alustaa. RevenueHunt on itsenäinen tuotekysely, jota voit käyttää ostamatta CDP:tä: itsepalvelu, ilmaisella tasolla alkaen $39/kk.",
      },
      {
        question: "Paljonko RevenueHunt maksaa verrattuna Jebbitiin?",
        answer:
          "RevenueHuntilla on ilmainen taso ja läpinäkyvät maksulliset tasot alkaen $39/kk. Jebbit/BlueConic ei julkaise hintoja. Se on myyntivetoinen yritystason alusta, joka antaa räätälöidyn hinnan demon jälkeen.",
      },
      {
        question: "Kerääkö RevenueHunt zero-party (ilmoitettua) dataa kuten Jebbit?",
        answer:
          "Kyllä. Jokainen kyselyvastaus on zero-party-dataa, jonka ostajasi tarjoavat vapaaehtoisesti. RevenueHunt synkronoi vastaukset ja asiakastagit Klaviyoon, Mailchimpiin, Omnisendiin, HubSpotiin ja muihin segmentointia ja personoitua markkinointia varten.",
      },
      {
        question: "Kuinka kauan asennus kestää verrattuna Jebbitiin?",
        answer:
          "Useimmat RevenueHunt-kauppiaat julkaisevat samana päivänä, ja AI Quiz Copilot voi koota täydellisen kyselyn noin 60 sekunnissa. Jebbit/BlueConic on yleensä myyntivetoinen yritystason käyttöönotto.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  nosto: {
    slug: "nosto",
    name: "Nosto",
    category: "Yritystason personointialusta",
    title: "RevenueHunt vs Nosto: itsepalveluvaihtoehto",
    description:
      "RevenueHunt vs Nosto: keskittynyt ja itsepalveluinen tuotekysely, joka kerää zero-party-dataa, ilmaisella tasolla alkaen $39/mo, ei yritystason personointisviitti.",
    h1: "RevenueHunt vs Nosto",
    heroSubtitle:
      "Nosto on yritystason personointi-, haku- ja myynninedistämissviitti, joka myydään demon kautta. RevenueHunt on keskittynyt zero-party-tuotekysely, jonka voit asentaa tänään: ilmainen aloittaa, aktiivinen samana päivänä.",
    intro: [
      "Nosto on Commerce Experience Platform, joka yhdistää AI-tuotesuositukset, personoidun sivustohaun, myynninedistämisen ja sisällön personoinnin yritystason ja keskisuuren markkinan brändeille. Se on alustariippumaton, myydään demojen kautta räätälöidyllä yritystason hinnoittelulla eikä siinä ole ilmaista tasoa tai itsepalvelurekisteröitymistä. Sen personointi perustuu pääosin käyttäytymisdataan ennemmin kuin kyselyihin.",
      "RevenueHunt on keskittynyt tuotesuosittelukysely, jota käyttää yli 20 000 brändiä (4,9★, yli 450 arvostelua). Yritystason sviitin sijaan se ohjaa ostajat oikeaan tuotteeseen kysymällä heiltä suoraan, keräten zero-party-dataa, jonka omistat, läpinäkyvällä hinnoittelulla, ilmaisella tasolla ja saman päivän asennuksella, ilman myyntipuhelua.",
    ],
    rows: [
      { feature: "Ilmainen taso", rh: RH.freePlan, them: "no" },
      { feature: "Läpinäkyvä julkinen hinnoittelu", rh: RH.transparentPricing, them: "Räätälöity / pyydä demo" },
      { feature: "Aloitushinta", rh: RH.startingPaid, them: "Myyntivetoinen (yritystaso)" },
      { feature: "Itsepalveluasennus (ei myyntipuhelua)", rh: "yes", them: "no" },
      { feature: "Tehty tuotesuosittelukyselyihin", rh: RH.ecommerceRecs, them: "Personointisviitti, ei kyselyvetoinen" },
      { feature: "Kerää zero-party-dataa (ostajat kertovat sinulle suoraan)", rh: "yes", them: "Pääosin käyttäytymis- / ennustava" },
      { feature: "Suosittelee oikeita tuotteita katalogistasi", rh: RH.catalogRecs, them: "yes" },
      { feature: "Natiivi Shopify-sovellus (Built for Shopify)", rh: RH.shopifyNative, them: "yes" },
      { feature: "AI-kyselyrakentaja (asennus 60 sekunnissa)", rh: RH.aiBuilder, them: "no" },
      { feature: "Rajattomat kyselyt", rh: RH.unlimitedQuizzes, them: "Ei ole kyselytyökalu" },
      { feature: "Kysymyskohtainen keskeytysanalytiikka", rh: RH.analytics, them: "yes" },
      { feature: "Klaviyo- ja sähköposti- / CRM-integraatiot", rh: RH.emailIntegrations, them: "yes" },
    ],
    whySwitch: [
      {
        title: "Itsepalvelu, ei myyntipuhelu",
        body: "Nosto myydään demojen ja räätälöityjen yritystason sopimusten kautta ilman julkista hinnoittelua. RevenueHunt on asenna ja valmista: valitse taso, luo kyselysi ja julkaise, ilmaisella tasolla ja läpinäkyvällä hinnoittelulla alkaen $39/kk.",
      },
      {
        title: "Zero-party-data, ei vain käyttäytymisseuranta",
        body: "Nosto personoi pääosin käyttäytymis- ja ennustavista signaaleista. RevenueHunt kysyy ostajilta suoraan kyselyn avulla, keräten zero-party-dataa, jonka omistat ja jonka voit synkronoida Klaviyoon, Mailchimpiin, Omnisendiin ja muihin.",
      },
      {
        title: "Aktiivinen minuuteissa, ei käyttöönotto",
        body: "Nosto on monimoduulinen sviitti (suositukset, haku, myynninedistäminen), joka tyypillisesti vaatii perehdytyksen. RevenueHunt on keskittynyt kyselysovellus, jonka useimmat kauppiaat julkaisevat samana päivänä, ja AI Copilot, joka kokoaa täydellisen kyselyn 60 sekunnissa.",
      },
      {
        title: "Hinnoittelu, joka sopii kasvavalle brändille",
        body: "Yritystason personointisviitit on hinnoiteltu suurille tiimeille ja katalogeille. RevenueHunt aloittaa ilmaiseksi ja skaalautuu vastausten mukaan alkaen $39/kk, sopien Shopifyn ja Shopify Plussan brändeille.",
      },
    ],
    bestFor:
      "Nosto sopii yritystason ja keskisuuren markkinan brändeille, jotka haluavat täydellisen sviitin käyttäytymispersonointiin, hakuun ja myynninedistämiseen useissa myymälöissä, ja joilla on budjetti ja tiimi yritystason käyttöönottoon. Jos haluat keskittyneen, edullisen ja itsepalveluisen tuotekyselyn, joka kerää zero-party-dataa, RevenueHunt sopii paremmin.",
    migration:
      "Nostosta siirtyminen on yksinkertaista. Luo kyselysi RevenueHuntissa (tai luo se AI Copilotilla), upota se ja yhdistä Klaviyo tai CRM:si. Ei käyttöönottoprojektia. Useimmat kaupat ovat aktiivisia samana päivänä, ja zero-party-datasi virtaa suoraan sähköpostityökaluihisi.",
    faqs: [
      {
        question: "Paljonko RevenueHunt maksaa verrattuna Nostoon?",
        answer:
          "RevenueHuntilla on ilmainen taso ja läpinäkyvät maksulliset tasot alkaen $39/kk. Nosto ei julkaise hintoja. Se on myyntivetoinen yritystason alusta, joka antaa räätälöidyn hinnan demon jälkeen.",
      },
      {
        question: "Onko RevenueHunt personointisviitti kuten Nosto?",
        answer:
          "Ei, ja se on tarkoitus. Nosto yhdistää käyttäytymissuositukset, sivustohaun ja myynninedistämisen. RevenueHunt keskittyy tuotesuosittelukyselyihin, jotka keräävät zero-party-dataa, itsepalveluasennuksella ja ilman myyntipuhelua.",
      },
      {
        question: "Käyttääkö RevenueHunt zero-party-dataa käyttäytymisseurannan sijaan?",
        answer:
          "Kyllä. RevenueHunt ohjaa ostajat kyselyn läpi ja he kertovat sinulle mieltymyksensä, tavoitteensa ja rajoituksensa suoraan: zero-party-dataa, jonka omistat, sen sijaan että päättelisit aikomuksen käyttäytymisestä ja evästeistä.",
      },
      {
        question: "Kuinka kauan asennus kestää verrattuna Nostoon?",
        answer:
          "Useimmat RevenueHunt-kauppiaat julkaisevat samana päivänä, ja AI Quiz Copilot voi koota täydellisen kyselyn noin 60 sekunnissa. Nosto on yleensä myyntivetoinen yritystason käyttöönotto.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  tolstoy: {
    slug: "tolstoy",
    name: "Tolstoy",
    category: "Ostettavan videon ja kyselyn alusta",
    title: "RevenueHunt vs Tolstoy: kyselykeskeinen vaihtoehto",
    description:
      "RevenueHunt vs Tolstoy: räätälöity tuotekysely oikealla suositusmoottorilla ja zero-party-datalla, vastaan videoalusta, jossa on kyselyominaisuus.",
    h1: "RevenueHunt vs Tolstoy",
    heroSubtitle:
      "Tolstoy on ostettavan videon alusta, jossa on kyselyominaisuus. RevenueHunt on räätälöity tuotesuosittelukysely, jossa on oikea suositusmoottori ja zero-party-data.",
    intro: [
      "Tolstoy on AI-pohjainen commerce-alusta, joka rakentuu ostettavan videon, AI-tuotettujen mediasisältöjen ja AI-ostosagentin ympärille, näyttökertoihin perustuvalla hinnoittelulla alkaen $19/kk. Se on vankka videoon keskittyvä työkalu. Mutta tuotekysely on toissijainen ominaisuus videokokemuksen rinnalla.",
      "RevenueHunt on tuotesuosittelukysely, jota käyttää yli 20 000 brändiä (4,9★, yli 450 arvostelua). Se on kyselykeskeinen: omistettu suositusmoottori kohdentaa jokaisen ostajan vastaukset oikeisiin tuotteisiin katalogistasi, kerää zero-party-dataa ja konvertoi personoidulla tulossivulla Shopifyssä, WooCommercessa, BigCommercessa, Magentossa, Wixissä ja muissa.",
    ],
    rows: [
      { feature: "Ilmainen taso", rh: RH.freePlan, them: "yes (rajoitettu)" },
      { feature: "Maksullisen aloitushinta", rh: RH.startingPaid, them: "$19/mo" },
      { feature: "Hinnoittelumalli", rh: "Kiinteä maksu, vastausten mukaan", them: "Näyttökertojen mukaan + AI-krediitit" },
      { feature: "Tehty tuotesuosittelukyselyihin", rh: RH.ecommerceRecs, them: "Kysely on toissijainen ominaisuus (videokeskeinen)" },
      { feature: "Omistettu suositusmoottori (kannatus ja poissulkeminen, tulossivu)", rh: "yes", them: "Videovetoinen ostaminen" },
      { feature: "Suosittelee oikeita tuotteita katalogistasi", rh: RH.catalogRecs, them: "yes" },
      { feature: "Kerää zero-party-dataa (ostajat kertovat sinulle suoraan)", rh: "yes", them: "Pääosin videointeraktiodataa" },
      { feature: "Natiivi Shopify-sovellus (Built for Shopify)", rh: RH.shopifyNative, them: "yes" },
      { feature: "Toimii WooCommercessa, BigCommercessa, Magentossa, Wixissä ja muissa", rh: RH.multiPlatform, them: "no" },
      { feature: "AI-kyselyrakentaja (asennus 60 sekunnissa)", rh: RH.aiBuilder, them: "Videokeskeinen AI" },
      { feature: "Kysymyskohtainen keskeytysanalytiikka", rh: RH.analytics, them: "yes" },
      { feature: "Klaviyo- ja sähköposti- / CRM-integraatiot", rh: RH.emailIntegrations, them: "yes" },
    ],
    whySwitch: [
      {
        title: "Kyselykeskeinen työkalu, ei videolisäosa",
        body: "Tolstoy on ostettavan videon alusta, jossa kysely on toissijainen ominaisuus. RevenueHunt on räätälöity tuotesuosittelukyselyihin, omistetulla suositusmoottorilla ja konversioon keskittyvällä tulossivulla.",
      },
      {
        title: "Oikea suositusmoottori",
        body: "RevenueHunt luokittelee tarkat tuotteet, variantit ja kokoelmat elävästä katalogistasi käyttäen kannatus- ja poissulkemismallia, ehdollisilla tuloslohkoilla ja suoralla lisää ostoskoriin -toiminnolla. Syvyys, johon videotyökalun kysely ei yllä.",
      },
      {
        title: "Zero-party-data, jonka omistat",
        body: "RevenueHunt kerää sen, mitä ostajat kertovat sinulle (mieltymykset, tavoitteet, rajoitukset) ja synkronoi sen Klaviyoon, Mailchimpiin, Omnisendiin ja muihin segmentointia varten. Tolstoyn vahvuus on videointeraktio, ei kyselyn jäsennelty data.",
      },
      {
        title: "Myy missä tahansa, testattu mittakaavassa",
        body: "RevenueHunt toimii natiivisti Shopifyssä ja myös WooCommercessa, BigCommercessa, Magentossa, Wixissä, Squarespacessa ja itsenäisesti, yli 20 000 brändin luottamuksella ja 4,9★:lla yli 450 arvostelusta.",
      },
    ],
    bestFor:
      "Tolstoy on hyvä vaihtoehto, jos strategiasi on videovetoinen (ostettava video, UGC, TikTok Shop) ja kysely on toivottava mutta ei välttämätön. Jos haluat omistetun tuotesuosittelukyselyn oikealla suositusmoottorilla ja zero-party-datalla, RevenueHunt sopii paremmin.",
    migration:
      "Jos olet käyttänyt kyselyä Tolstoyn sisällä, vaihtaminen on nopeaa. Rakenna se uudelleen RevenueHuntin rakentajassa (tai luo se 60 sekunnissa AI Copilotillamme), upota se ja yhdistä Klaviyo. Useimmat kaupat ovat aktiivisia samana päivänä, ja tukitiimimme auttaa sinua migraatiossa.",
    faqs: [
      {
        question: "Onko RevenueHunt parempi kuin Tolstoy tuotekyselyyn?",
        answer:
          "Omistettuun tuotesuosittelukyselyyn kyllä. RevenueHunt on tehty juuri siihen, oikealla suositusmoottorilla ja zero-party-datalla. Tolstoy on videokeskeinen, jossa kysely on toissijainen ominaisuus. Erityisesti ostettavaan videoon Tolstoy on tehty juuri siihen.",
      },
      {
        question: "Tekeekö Tolstoy tuotesuosittelukyselyjä?",
        answer:
          "Kyllä, toissijaisena ominaisuutena ostettavan videon rinnalla. RevenueHunt on kyselykeskeinen: se on rakennettu kyselyn ja sen suositusmoottorin, tulossivun ja zero-party-datan keruun ympärille.",
      },
      {
        question: "Tukeeko RevenueHunt myös videota?",
        answer:
          "Kyllä. Voit lisätä videon kyselyn kysymyksiin ja personoidulle tulossivulle. RevenueHunt on kyselykeskeinen ennemmin kuin videoalusta, joten video tukee kyselyä eikä toisin päin.",
      },
      {
        question: "Voinko kerätä zero-party-dataa ja lähettää sen Klaviyoon?",
        answer:
          "Kyllä. RevenueHunt kerää kyselyn vastaukset zero-party-datana ja synkronoi vastaukset ja asiakastagit Klaviyoon, Mailchimpiin, Omnisendiin, HubSpotiin ja muihin segmentointia ja personoitua markkinointia varten.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },
};
