import type { Solution } from "../solutions";

const VERIFIED = "2026-06-07";

export const SOLUTIONS_FI: Record<string, Solution> = {
  // ----------------------------------------------------------------- verticals
  skincare: {
    slug: "skincare",
    type: "vertical",
    name: "Ihonhoito",
    chip: "Toimiala",
    title: "Ihonhoitokysely Shopifylle ja WooCommercelle",
    description:
      "Luo ihonhoitokysely, joka tunnistaa ihotyypin ja huolenaiheet ja suosittelee sitten sopivan rutiinin. Ilmainen taso, AI-rakentaja, julki samana päivänä.",
    h1: "Ihonhoitokyselyt, jotka muuttavat selailijat rutiiniksi",
    heroSubtitle:
      "Useimmat ensikertalaiset ihonhoidon ostajat eivät tiedä, mitkä tuotteet heille sopivat. Kysely esittää oikeat kysymykset ja palauttaa personoidun rutiinin, jonka he voivat lisätä ostoskoriin.",
    intro: [
      "Ihonhoito on kylmiltään vaikein kategoria ostaa. Ostajat saapuvat huolenaihe, eivät tuote mielessään, eikä puhdistusaineiden, seerumeiden ja aurinkosuojien muuri auta heitä valitsemaan. Ihonhoitokysely korvaa tuon muurin lyhyellä, ohjatulla keskustelulla: sisään menee ihotyyppi, tärkein huolenaihe, herkkyydet ja budjetti, ja ulos tulee personoitu rutiini.",
      "Yli 20 000 brändiä käyttää RevenueHuntia juuri tähän. Se yhdistää jokaisen vastauksen oikeisiin tuotteisiin katalogistasi, ryhmittelee tuloksen rutiinin vaiheen mukaan (puhdistusaine, hoito, kosteusvoide, SPF) ja kerää ostajan ihoprofiilin zero-party-datana, jonka voit synkronoida Klaviyoon.",
    ],
    quizTypes: [
      {
        title: "Ihotyypin tunnistaja",
        body: "Viidestä seitsemään kysymystä ihotyypistä, huolenaiheista ja tavoitteista palauttaa räätälöidyn rutiinin. Klassinen ihonhoitokysely ja parhaiten konvertoiva lähtökohta.",
      },
      {
        title: "Rutiinin rakentaja",
        body: "Käytä suosituspaikkoja varataksesi paikan jokaiselle vaiheelle, jotta jokainen ostaja saa täydellisen 3- tai 5-vaiheisen rutiinin yhden tuotteen sijaan.",
      },
      {
        title: "Huolenaiheeseen keskittyvä kysely",
        body: "Aloita ongelmasta (akne, ikääntyminen, kuivuus, herkkyys) ja haaroita ehdollisella logiikalla, jotta jokainen ostaja näkee vain hänelle olennaiset kysymykset.",
      },
      {
        title: "Ainesosa- tai herkkyysyhteensovitus",
        body: "Sulje pois tuotteet, jotka ovat ristiriidassa ilmoitetun allergian tai herkkyyden kanssa, jotta hajusteeton-vaihtoehdon valinnut ostaja ei koskaan näe hajustettua tuotetta tuloksissaan.",
      },
    ],
    howItHelps: [
      "Suositusmoottori luokittelee tuotteet tärkeimpien vastausten mukaan. Se painottaa pakollista huolenaihetta enemmän kuin toivottavaa ja sulkee pois kaiken, mitä ostaja hylkää, jotta tulossivu on aidosti räätälöity geneerisen bestseller-karusellin sijaan.",
      "Jokainen vastaus on zero-party-dataa. Ostaja, joka kertoo ihonsa olevan kuiva ja herkkä ja että hän välittää ikääntymisen ehkäisystä, on segmentti, jolle voit markkinoida vuosia. RevenueHunt synkronoi tuon profiilin ja asiakastagit Klaviyoon, Mailchimpiin, Omnisendiin ja muihin.",
      "Rakenna se minuuteissa, ei viikoissa. Aloita ihonhoitomallista tai kuvaile kauppasi AI Quiz Copilotille, niin se rakentaa kysymykset, logiikan ja tuotekohdennukset noin 60 sekunnissa. Julkaise se sitten popupina, upotuksena tai koko sivun laskeutumissivuna.",
    ],
    demo: {
      label: "Kokeile ihotyyppikyselyä",
      href: "https://productrecommendationquiz.com/pages/skin-type-quiz?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_skincare",
      blurb: "Live-ihonhoitokysely demokaupassamme. Vastaa muutamaan kysymykseen ja katso, minkä rutiinin se palauttaa.",
    },
    faqs: [
      {
        question: "Kuinka monta kysymystä ihonhoitokyselyssä tulisi olla?",
        answer:
          "Viidestä seitsemään näkyvää kysymystä toimii useimmille brändeille. Käytä ehdollista logiikkaa ohittaaksesi kysymykset, jotka eivät päde, jotta ostaja ilman herkkyyksiä ei koskaan näe allergiavaihetta.",
      },
      {
        question: "Voiko kysely suositella koko rutiinia, ei vain yhtä tuotetta?",
        answer:
          "Kyllä. Suosituspaikat varaavat paikan jokaiselle rutiinin vaiheelle (puhdistusaine, hoito, kosteusvoide, SPF), jotta jokainen ostaja saa täydellisen rutiinin, jossa koko setti voidaan lisätä ostoskoriin kerralla.",
      },
      {
        question: "Toimiiko se herkälle iholle ja allergioille?",
        answer:
          "Kyllä. Jokainen vastaus voi sulkea pois tuotteita, joten allergian tai herkkyyden merkitseminen poistaa tuloksista kaikki ristiriitaiset tuotteet, vaikka ne muuten olisivat vahva osuma.",
      },
      {
        question: "Voinko kerätä sähköposteja ja lähettää rutiinin Klaviyoon?",
        answer:
          "Kyllä. Kysely kerää sähköpostin ja koko ihoprofiilin zero-party-datana ja synkronoi vastaukset ja asiakastagit Klaviyoon, Mailchimpiin, Omnisendiin, HubSpotiin ja muihin.",
      },
    ],
    related: [
      { label: "Ihonhoitokyselyn mallit", href: "/templates/" },
      { label: "Rutiinin rakentaja -kysely", href: "/solutions/routine-builder/" },
      { label: "Sävyn tunnistaja -kysely", href: "/solutions/shade-finder/" },
      { label: "Kauneusbrändeille", href: "/for-beauty-brands/" },
      { label: "Kysely Shopifylle", href: "/product-recommendation-quiz-shopify/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  beauty: {
    slug: "beauty",
    type: "vertical",
    name: "Kauneus ja kosmetiikka",
    chip: "Toimiala",
    title: "Kauneus- ja kosmetiikkakysely kauppaasi",
    description:
      "Kauneuskysely, joka sovittaa sävyn, löytää oikeat tuotteet ja rakentaa rutiinin katalogistasi. Ilmainen taso, AI-rakentaja, monialustainen.",
    h1: "Kauneuskyselyt, jotka yhdistävät ostajat oikeaan tuotteeseen",
    heroSubtitle:
      "Meikkivoiteen sävy, huulien väri, kokonainen rutiini: kauneuskysely vastaa kysymyksiin, joihin tuoteruudukko ei pysty, ja vie ostajat personoidulle tulossivulle.",
    intro: [
      "Kauneuden ostajat kohtaavat kaksi ongelmaa kerralla: liikaa valinnanvaraa ja liikaa riskiä. Valitse väärä meikkivoiteen sävy, ja se palautetaan. Kauneuskysely poistaa arvailun kysymällä alasävyä, peittävyyttä, viimeistelyä ja huolenaihetta ja suosittelemalla sitten täsmälleen sopivat tuotteet.",
      "RevenueHunt pyörittää kauneuskyselyjä tuhansille brändeille. Se poimii oikeat tuotteet ja variantit katalogistasi, näyttää ne tulossivulla, jossa on suora lisää ostoskoriin -toiminto, ja kerää jokaisen ostajan kauneusprofiilin zero-party-datana segmentoitua sähköpostiseurantaa varten.",
    ],
    quizTypes: [
      {
        title: "Sävyn sovittaja",
        body: "Kysymykset alasävystä, syvyydestä ja viimeistelystä kohdennetaan oikeaan meikkivoiteen, peitevoiteen tai huulipunan sävyyn. Kuvavastaukset tekevät siitä nopeaa mobiilissa.",
      },
      {
        title: "Koko rutiinin rakentaja",
        body: "Suosittele täydellistä settiä (pohjustus, meikkivoide, väri, kiinnitys) suosituspaikkoja käyttäen, jotta ostajat hankkivat rutiinin yhden tuotteen sijaan.",
      },
      {
        title: "Iho- tai hiushuolen kysely",
        body: "Haaroita huolenaiheen ja iho- tai hiustyypin mukaan, jotta tulossivu puhuu jokaisen ostajan tarkasta tavoitteesta.",
      },
      {
        title: "Lahja- tai aloitussetin tunnistaja",
        body: "Auta lahjaostajia ja ensikertalaisia, jotka eivät tunne katalogia, suosittelemalla aloitussettiä tai kuratoitua pakettia.",
      },
    ],
    howItHelps: [
      "Sävy ja sopivuus ovat juuri se kohta, jossa palautukset tapahtuvat. Kysymällä alasävyä ja peittävyyttä heti alussa ja sulkemalla pois kaiken, mikä ei sovi, kysely vie ostajat tuotteisiin, jotka he paljon todennäköisemmin pitävät.",
      "Kuvakysymykset antavat ostajien koskettaa kuvaa sen sijaan, että he kuvailisivat itseään, mikä pitää suoritusasteet korkeina mobiilissa, jonne suurin osa kauneusliikenteestä laskeutuu.",
      "Ostajaprofiili (alasävy, ihotyyppi, lempiviimeistely) synkronoidaan sähköpostityökaluusi asiakastageina, jotta jokainen kyselyn jälkeinen kampanja voidaan personoida geneerisen sijaan.",
    ],
    demo: {
      label: "Kokeile meikkivoiteen sovituskyselyä",
      href: "https://productrecommendationquiz.com/pages/foundation-match?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_beauty",
      blurb: "Kuvapohjainen sävynsovituskysely live-tilassa demokaupassamme, tarkkoine osumatuloksineen.",
    },
    faqs: [
      {
        question: "Voiko kauneuskysely sovittaa meikkivoiteen sävyjä?",
        answer:
          "Kyllä. Kysy alasävyä, syvyyttä ja viimeistelyä, yhdistä jokainen vastaus sopiviin sävyihin ja sulje loput pois. Tulossivu näyttää tarkan sävyosuman lisää ostoskoriin -toiminnolla.",
      },
      {
        question: "Tukeeko se kuvakysymyksiä?",
        answer:
          "Kyllä. Vaihtoehdot voidaan näyttää klikattavina kuvina, mikä on ihanteellista sävy-, viimeistely- ja tyylikysymyksille ja parantaa suoritusta mobiilissa.",
      },
      {
        question: "Toimiiko se WooCommercessa tai BigCommercessa, ei vain Shopifyssä?",
        answer:
          "Kyllä. RevenueHunt toimii natiivisti Shopifyssä, WooCommercessa, BigCommercessa, Magentossa, Wixissä, Squarespacessa ja itsenäisenä isännöitynä kyselynä.",
      },
      {
        question: "Voinko ryhmitellä tuotteet yhdeksi tulokseksi?",
        answer:
          "Kyllä. Käytä suosituspaikkoja varataksesi paikan jokaiselle tuoteroolille ja palauttaaksesi täydellisen setin tai paketin, jossa koko rutiini voidaan lisätä ostoskoriin.",
      },
    ],
    related: [
      { label: "Sävyn tunnistaja -kysely", href: "/solutions/shade-finder/" },
      { label: "Ihonhoitokysely", href: "/solutions/skincare/" },
      { label: "Lahjaetsijä-kysely", href: "/solutions/gift-finder/" },
      { label: "Kauneusbrändeille", href: "/for-beauty-brands/" },
      { label: "Kyselymallit", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  supplements: {
    slug: "supplements",
    type: "vertical",
    name: "Lisäravinteet",
    chip: "Toimiala",
    title: "Lisäravinnekysely: suosittele oikea stack",
    description:
      "Lisäravinnekysely, joka muuttaa terveystavoitteet suositelluksi stackiksi. Haaroittaa ruokavalion ja rajoitusten mukaan, synkronoi tavoitteet Klaviyoon. Ilmainen aloittaa.",
    h1: "Lisäravinnekyselyt, jotka suosittelevat oikean stackin",
    heroSubtitle:
      "Ostajat hankkivat lisäravinteita tavoitteen, eivät SKU:n perusteella. Kysely muuttaa unen, energian, immuniteetin tai keskittymisen suositelluksi stackiksi katalogistasi.",
    intro: [
      "Lisäravinteiden ostajat ajattelevat tavoitteita: parempaa unta, lisää energiaa, parempaa suolistoterveyttä. Katalogisi on järjestetty tuotteittain. Lisäravinnekysely kuroo umpeen tuon kuilun kysymällä tavoitteita, ruokavaliota ja elämäntapaa ja suosittelemalla sitten sopivan stackin.",
      "RevenueHunt kohdentaa jokaisen tavoitteen oikeisiin SKU:ihin, hallitsee ruokavaliorajoitukset poissulkemisilla ja palauttaa monituoteisen stackin tulossivulla ensitilauksen alennuksella. Ostajan tavoitteet synkronoidaan Klaviyoon tageina jatkuvaa, segmentoitua sähköpostia varten.",
    ],
    quizTypes: [
      {
        title: "Terveystavoitteiden tunnistaja",
        body: "Ostajat valitsevat tavoitteensa (uni, energia, immuniteetti, suolisto, keskittyminen) ja jokainen tavoite lisää pisteitä sopiville tuotteille rakentaen suositellun stackin.",
      },
      {
        title: "Stackin rakentaja",
        body: "Varaa paikka jokaiselle roolille (perusta, kohdennettu, suorituskyky), jotta jokainen ostaja lähtee täydellisellä ja johdonmukaisella stackilla.",
      },
      {
        title: "Ruokavalio- ja rajoitussuodatin",
        body: "Sulje pois tuotteet, jotka ovat ristiriidassa vegaanisen, gluteenittoman tai muiden rajoitusten kanssa, jotta tulokset kunnioittavat jokaisen ostajan ruokavaliota automaattisesti.",
      },
      {
        title: "Tilauksen perehdytys",
        body: "Käytä kyselyä tilaussuppilon alussa, kerää sähköposti ja yhdistä tulossivu tilaa ja säästä -tarjoukseen.",
      },
    ],
    howItHelps: [
      "Ehdollinen logiikka pitää kyselyn lyhyenä. Jos ostaja sanoo, ettei hänellä ole ruokavaliorajoituksia, kysely ohittaa rajoituskysymykset kokonaan, jotta kukaan ei vastaa kysymyksiin, jotka eivät häntä koske.",
      "Poissulkemiset hoitavat tiukat rajoitukset siististi. Vegaaniostaja ei koskaan näe ei-vegaanista tuotetta tuloksissaan, vaikka se olisi vahva osuma pelkkien tavoitteiden perusteella.",
      "Tavoitteet ovat arvokkainta, mitä lisäravinnebrändi voi oppia. Tagien kuten goal:sleep tai goal:gut synkronointi Klaviyoon antaa sinun ajaa elinkaarisähköposteja, jotka todella vastaavat sitä, mitä kukin asiakas yrittää saavuttaa.",
    ],
    faqs: [
      {
        question: "Voiko lisäravinnekysely suositella monituoteista stackia?",
        answer:
          "Kyllä. Jokainen tavoite lisää pisteitä sopiville tuotteille, ja suosituspaikat varaavat paikan jokaiselle roolille, jotta tulossivu palauttaa täydellisen stackin, jossa koko setti voidaan lisätä ostoskoriin.",
      },
      {
        question: "Miten se hoitaa vegaaniset tai gluteenittomat ruokavaliot?",
        answer:
          "Käyttämällä poissulkemisia. Ruokavaliovastauksen yhdistäminen poissulkulistaan poistaa kaikki ristiriitaiset tuotteet tuloksista riippumatta siitä, kuinka hyvin ne pisteyttivät tavoitteiden mukaan.",
      },
      {
        question: "Voinko lisätä ensitilauksen alennuksen tulossivulle?",
        answer:
          "Kyllä. Tulossivu tukee alennuskoodilohkoa, jonka voit näyttää ensikertalaisille ostajille tai yhdistää tiettyihin vastausyhdistelmiin.",
      },
      {
        question: "Toimiiko se tilausbrändille?",
        answer:
          "Kyllä. Aja kysely suppilon alussa, kerää sähköposti Klaviyoon ja ohjaa tulossivu tilaa ja säästä -tarjoukseen.",
      },
    ],
    related: [
      { label: "Pakettien rakentaja -kysely", href: "/solutions/bundle-builder/" },
      { label: "Fitness- ja ravitsemuskysely", href: "/solutions/fitness/" },
      { label: "Ohjatun myynnin kysely", href: "/guided-selling-quiz/" },
      { label: "Kyselymallit", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  fashion: {
    slug: "fashion",
    type: "vertical",
    name: "Muoti ja vaatteet",
    chip: "Toimiala",
    title: "Muodin ja vaatteiden tyylikysely verkkokauppaan",
    description:
      "Tyylikysely, joka löytää oikean istuvuuden, leikkauksen ja värin katalogistasi ja vähentää palautuksia. Ilmainen taso, monialustainen, monikielinen.",
    h1: "Tyylikyselyt, jotka löytävät oikean istuvuuden ja leikkauksen",
    heroSubtitle:
      "Tyyli on henkilökohtaista ja istuvuus on riskialtista. Muotikysely oppii ostajan maun ja koon ja suosittelee sitten vaatteita, jotka hän todennäköisesti pitää.",
    intro: [
      "Muodilla on verkkokaupan korkein palautusaste, ja suurin osa siitä johtuu koko- ja tyyliepäsuhdista. Tyylikysely vähentää molempia kysymällä vartalotyyppiä, istuvuusmieltymystä, tilaisuutta ja makua ja suosittelemalla sitten vaatteita, jotka todella istuvat ostajalle.",
      "RevenueHunt rakentaa kyselyn elävää katalogiasi vasten, variantit mukaan lukien, jotta koko ja väri virtaavat tulossivulle asti. Useilla markkinoilla myyville brändeille peruskysely voidaan kääntää ja kohdentaa Shopify Marketin mukaan, jolloin tuotenimet ja hinnat lokalisoidaan automaattisesti.",
    ],
    quizTypes: [
      {
        title: "Tyyliprofiilikysely",
        body: "Kysymykset mausta, tilaisuudesta ja väristä nostavat esiin vaatteet, jotka vastaavat ostajan estetiikkaa geneerisen uutuusruudukon sijaan.",
      },
      {
        title: "Istuvuuden ja koon tunnistaja",
        body: "Kysymykset vartalotyypistä ja istuvuusmieltymyksestä rajaavat oikeaan leikkaukseen ja kokoon, mistä suurin osa vaatepalautuksista alkaa.",
      },
      {
        title: "Kapseli- tai asukokonaisuuden rakentaja",
        body: "Käytä suosituspaikkoja koota yhteensopiva asu tai kapselikokonaisuus yhden tuotteen sijaan.",
      },
      {
        title: "Tilaisuuden tunnistaja",
        body: "Haaroita tilaisuuden mukaan (työ, häät, matka), jotta jokainen ostaja näkee kuratoidun valikoiman juuri siihen hetkeen, jota varten hän ostaa.",
      },
    ],
    howItHelps: [
      "Suositteleminen istuvuuden ja maun, ei pelkän suosion, perusteella vie ostajat vaatteisiin, jotka he todennäköisemmin pitävät, mikä on suorin vipu, joka muotibrändillä on palautuksiin.",
      "Variantit virtaavat alusta loppuun. Yhdistä vastaukset tiettyihin kokoihin ja väreihin, niin tulossivu näyttää oikean variantin lisää ostoskoriin -toiminnolla, jotta ostajat eivät pomppaa tuotesivulle valitsemaan uudelleen.",
      "Myytkö koko EU:ssa tai sen ulkopuolella? Rakenna peruskysely, anna AI Copilotin kääntää se, kohdenna jokainen versio omaan Shopify Marketiinsa, niin tuotetiedot lokalisoidaan automaattisesti. Ei kielikohtaista tuotekäännöstyötä.",
    ],
    faqs: [
      {
        question: "Voiko muotikysely vähentää palautuksia?",
        answer:
          "Se kohdistuu palautusten päasialliseen syyhyn suosittelemalla istuvuuden ja maun, ei suosion, perusteella. Vastausten yhdistäminen tiettyihin kokoihin ja väreihin vie ostajat vaatteisiin, jotka he todennäköisemmin pitävät.",
      },
      {
        question: "Tukeeko se tuotevariantteja kuten kokoa ja väriä?",
        answer:
          "Kyllä. Vastaukset voidaan yhdistää tiettyihin variantteihin, ja tulossivu näyttää sopivan koon ja värin suoralla lisää ostoskoriin -toiminnolla.",
      },
      {
        question: "Voinko ajaa kyselyn useilla kielillä?",
        answer:
          "Kyllä. Rakenna peruskysely, käännä se AI Copilotilla ja kohdenna jokainen versio omaan Shopify Marketiinsa. Tuotenimet ja hinnat lokalisoidaan automaattisesti Shopify Marketsin kautta.",
      },
      {
        question: "Millä alustoilla se toimii?",
        answer:
          "Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace ja itsenäisenä isännöitynä kyselynä.",
      },
    ],
    related: [
      { label: "Koon ja istuvuuden tunnistaja -kysely", href: "/solutions/size-finder/" },
      { label: "Lahjaetsijä-kysely", href: "/solutions/gift-finder/" },
      { label: "Kyselymallit", href: "/templates/" },
      { label: "Kysely Shopifylle", href: "/product-recommendation-quiz-shopify/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  coffee: {
    slug: "coffee",
    type: "vertical",
    name: "Kahvi ja tee",
    chip: "Toimiala",
    title: "Kahvikysely: yhdistä paahdot makuun",
    description:
      "Makuprofiilikysely, joka yhdistää ostajat oikeaan paahtoon tai sekoitukseen ja kerää tilaajia. Ilmainen taso, valmis Klaviyoon ja ReChargeen.",
    h1: "Kahvikyselyt, jotka yhdistävät maun oikeaan paahtoon",
    heroSubtitle:
      "Paahto, alkuperä, valmistustapa, makuvivahteet: kahvikysely muuttaa sekavan valikon varmaksi suositukseksi ja uudeksi tilaajaksi.",
    intro: [
      "Kahvia ja teetä ohjaa maku, ja makua on vaikea ostaa tuotelistalta. Lyhyt makuprofiilikysely kysyy paahtomieltymystä, valmistustapaa ja makuvivahteita ja suosittelee sitten sekoituksen, josta ostaja todella nauttii.",
      "RevenueHunt muuttaa tämän suppiloksi, ei vain suositukseksi. Se kerää sähköpostin alussa, suosittelee aloitussekoituksen ja yhdistää tulossivun tilaa ja säästä -tarjoukseen ReChargen kautta, paahto- ja valmistusmieltymykset Klaviyoon synkronoituina.",
    ],
    quizTypes: [
      {
        title: "Makuprofiilin tunnistaja",
        body: "Muutama kysymys paahdosta, täyteläisyydestä ja makuvivahteista yhdistää jokaisen ostajan sekoitukseen, joka vastaa hänen makuaan.",
      },
      {
        title: "Valmistustavan mukainen yhteensovitus",
        body: "Espresso, pour-over, ranskalaispannu tai suodatin: haaroita valmistustavan mukaan, jotta jauhatus ja sekoitus sopivat siihen, miten kahvi todella valmistetaan.",
      },
      {
        title: "Tilauksen perehdytys",
        body: "Aja kysely suppilon alussa, suosittele aloitussekoitus ja tarjoa tilaa ja säästä tulossivulla.",
      },
      {
        title: "Lahja- tai maistelusetin tunnistaja",
        body: "Auta lahjaostajia valitsemaan maistelusetti tai lahjasetti tietämättä saajan tarkkaa makua.",
      },
    ],
    howItHelps: [
      "Makuprofiili on hyvä syy pyytää sähköpostia. Ostajat jakavat mielellään paahto- ja valmistusmieltymyksensä saadakseen suosituksen, mikä täyttää tilaajalistasi valmiiksi segmentoiduilla yhteystiedoilla.",
      "Tulossivu tekee myynnin. Se suosittelee sopivan sekoituksen, näyttää ReChargeen yhdistetyn tilaa ja säästä -tarjouksen ja antaa ostajien lisätä ostoskoriin poistumatta kyselystä.",
      "Mieltymyksistä tulee pysyviä segmenttejä. Paahto- ja valmistustapatagien synkronointi Klaviyoon tarkoittaa, että jokainen tuleva kampanja voi puhua eri tavalla tummapaahtoisen espresson juojalle kuin vaaleapaahtoisen pour-overin suosijalle.",
    ],
    demo: {
      label: "Kokeile kahvikyselyä",
      href: "https://productrecommendationquiz.com/pages/coffee-quiz?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_coffee",
      blurb: "Maun mukaan sovittava kahvikysely live-tilassa demokaupassamme.",
    },
    faqs: [
      {
        question: "Voiko kahvikysely suositella tilausta?",
        answer:
          "Kyllä. Kerää sähköposti alussa, suosittele aloitussekoitus ja ohjaa tulossivu ReChargeen yhdistettyyn tilaa ja säästä -tarjoukseen.",
      },
      {
        question: "Tekeekö se yhteensovituksen valmistustavan mukaan?",
        answer:
          "Kyllä. Haaroita valmistustavan mukaan, jotta jauhatus ja sekoitus sopivat erityisesti espresson, pour-overin, ranskalaispannun tai suodattimen käyttäjille.",
      },
      {
        question: "Kasvattaako se sähköpostilistaani?",
        answer:
          "Kyllä. Makuprofiili on vankka syy ostajille jakaa sähköpostinsa, ja vastaukset synkronoidaan Klaviyoon valmiiksi segmentoituina paahto- ja valmistusmieltymyksen mukaan.",
      },
      {
        question: "Toimiiko se teelle tai muille juomille?",
        answer:
          "Kyllä. Sama makuprofiililähestymistapa toimii teelle, viinille, väkeville ja mille tahansa maun ohjaamalle katalogille.",
      },
    ],
    related: [
      { label: "Pakettien rakentaja -kysely", href: "/solutions/bundle-builder/" },
      { label: "Lahjaetsijä-kysely", href: "/solutions/gift-finder/" },
      { label: "Kyselymallit", href: "/templates/" },
      { label: "Ohjatun myynnin kysely", href: "/guided-selling-quiz/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  fitness: {
    slug: "fitness",
    type: "vertical",
    name: "Fitness ja ravitsemus",
    chip: "Toimiala",
    title: "Fitnesskysely varusteille, vaatteille ja ohjelmille",
    description:
      "Tavoitepohjainen fitnesskysely, joka suosittelee oikean varusteen, vaatteen tai ohjelman katalogistasi. Ilmainen taso, AI-rakentaja, valmis Klaviyoon.",
    h1: "Fitnesskyselyt, jotka rakentuvat ostajan tavoitteen ympärille",
    heroSubtitle:
      "Voima, kestävyys, painonpudotus, palautuminen: fitnesskysely muuttaa tavoitteen oikeaksi varusteeksi, vaatteeksi, lisäravinteeksi tai ohjelmaksi.",
    intro: [
      "Fitnessin ostajat aloittavat tavoitteesta ja harjoitustyylistä, eivät tuotteesta. Tavoitepohjainen kysely kysyy, mitä kohti he työskentelevät, mikä on heidän kokemustasonsa ja miten he harjoittelevat, ja suosittelee sitten sopivan varusteen, vaatteen tai ohjelman.",
      "RevenueHunt rakentaa suppilon alusta loppuun: se suosittelee oikeat tuotteet katalogistasi, kerää ostajan tavoitteen ja tason zero-party-datana ja seuraa Klaviyon kautta sisällöllä ja tarjouksilla, jotka vastaavat sitä, mitä varten he harjoittelevat.",
    ],
    quizTypes: [
      {
        title: "Tavoitepohjainen tunnistaja",
        body: "Voima, kestävyys, liikkuvuus tai painonpudotus: jokainen tavoite lisää pisteitä sopiville varusteille, vaatteille tai lisäravinteille.",
      },
      {
        title: "Kokemustason mukainen yhteensovitus",
        body: "Haaroita aloittelijan, keskitason tai edistyneen mukaan, jotta suositukset sopivat siihen, missä ostaja todella on.",
      },
      {
        title: "Ohjelman tai suunnitelman tunnistaja",
        body: "Suosittele oikea harjoitusohjelma tai valmennustaso tavoitteen, aikataulun ja varustepääsyn mukaan.",
      },
      {
        title: "Kitin tai paketin rakentaja",
        body: "Kokoa täydellinen kitti (vaate plus varuste plus lisäravinne) suosituspaikkoja käyttäen korkeammalle keskiostosarvolle.",
      },
    ],
    howItHelps: [
      "Tavoite ja kokemustaso ovat kaksi kysymystä, jotka muuttavat kaiken. Niiden kysyminen heti alussa tarkoittaa, että liikkuvuutta treenaava aloittelija ei koskaan näe edistynyttä voimatuotetta päätuloksenaan.",
      "Täydellinen kitti voittaa yksittäisen tuotteen. Suosituspaikat antavat sinun palauttaa vaatteen, varusteen ja lisäravinteen yhdessä, mikä nostaa keskiostosarvoa tuntumatta tyrkyttävältä.",
      "Keräämäsi tavoite ohjaa kaikkea myynnin jälkeen. Tavoite- ja tasotagien synkronointi Klaviyoon antaa sinun lähettää harjoitussisältöä ja täydennysmuistutuksia, jotka vastaavat kunkin asiakkaan todellista ohjelmaa.",
    ],
    faqs: [
      {
        question: "Voiko fitnesskysely suositella ohjelmaa, ei vain tuotteita?",
        answer:
          "Kyllä. Yhdistä vastaukset harjoitusohjelmaan tai valmennustasoon aivan kuten yhdistät tuotteita, ja tulossivu voi suositella oikean suunnitelman tavoitteen ja aikataulun mukaan.",
      },
      {
        question: "Voiko se koota täydellisen kitin yhteen tulokseen?",
        answer:
          "Kyllä. Suosituspaikat varaavat paikan jokaiselle roolille (vaate, varuste, lisäravinne), jotta ostajat saavat täydellisen kitin, jossa koko setti voidaan lisätä ostoskoriin.",
      },
      {
        question: "Miten se personoi aloittelijoille ja edistyneille?",
        answer:
          "Haaroita ehdollisella logiikalla kokemustason mukaan, jotta aloittelijat ja edistyneet urheilijat näkevät eri kysymyksiä ja eri suosituksia.",
      },
      {
        question: "Voinko seurata sähköpostilla tavoitteiden mukaan?",
        answer:
          "Kyllä. Tavoitteet ja taso synkronoidaan Klaviyoon, Mailchimpiin, Omnisendiin ja muihin asiakastageina tavoitteeseen sopivaa sähköpostiseurantaa varten.",
      },
    ],
    related: [
      { label: "Lisäravinnekysely", href: "/solutions/supplements/" },
      { label: "Pakettien rakentaja -kysely", href: "/solutions/bundle-builder/" },
      { label: "Kyselymallit", href: "/templates/" },
      { label: "Ohjatun myynnin kysely", href: "/guided-selling-quiz/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "pet-products": {
    slug: "pet-products",
    type: "vertical",
    name: "Lemmikkituotteet",
    chip: "Toimiala",
    title: "Lemmikkituotekysely kauppaasi",
    description:
      "Lemmikkikysely, joka suosittelee ruokaa, lisäravinteita tai tarvikkeita lajin, rodun, iän ja allergioiden mukaan. Poissulkemiset hoitavat ruokavaliot. Ilmainen aloittaa.",
    h1: "Lemmikkikyselyt, jotka yhdistävät tuotteet jokaiseen eläimeen",
    heroSubtitle:
      "Laji, rotu, ikä, aktiivisuus, allergiat: lemmikkikysely muuttaa nämä tiedot oikeaksi ruoaksi, lisäravinteeksi tai tarvikkeeksi ja kunnioittaa jokaista ruokavaliorajoitusta.",
    intro: [
      "Lemmikinomistajat ostavat eläimelle, eivät kategorialle, ja oikea tuote riippuu lajista, rodun koosta, iästä ja allergioista. Lemmikkikysely kerää nämä tiedot kerran ja suosittelee tuotteita, jotka sopivat kaikkien ulottuvuuksien suhteen samanaikaisesti.",
      "RevenueHunt hoitaa vaikean osan: poissulkemiset soveltavat allergia- ja ruokavaliosääntöjä siististi, tulossivu suosittelee oikean reseptin tai kitin, ja tulossähköposti tiivistää suosituksen niille, jotka eivät osta heti.",
    ],
    quizTypes: [
      {
        title: "Lemmikkiruoan tunnistaja",
        body: "Laji, rodun koko, ikä ja aktiivisuustaso kohdennetaan oikeaan reseptiin, allergiat poissulkemisilla hoidettuina.",
      },
      {
        title: "Lisäravinne- tai terveysyhteensovitus",
        body: "Suosittele nivel-, iho- tai ruoansulatustukea iän ja ilmoitettujen huolenaiheiden mukaan.",
      },
      {
        title: "Tarvike- ja varustetunnistaja",
        body: "Yhdistä valjaat, pedit tai lelut rodun kokoon ja käyttäytymiseen, jotta omistajat valitsevat oikein ensimmäisellä kerralla.",
      },
      {
        title: "Aloituskitti uusille omistajille",
        body: "Kokoa täydellinen aloituskitti uusille lemmikinomistajille suosituspaikkoja käyttäen.",
      },
    ],
    howItHelps: [
      "Allergiat ovat tiukka rajoitus, ja poissulkemiset soveltavat niitä täydellisesti. Kana-allergian merkitseminen poistaa kaikki kanapohjaiset reseptit tuloksista, myös ne, jotka pisteyttivät hyvin rodun ja iän mukaan.",
      "Asiakastagi kuten pienen-koiran-omistaja on kultaa pysyvyydelle. Sen synkronointi Klaviyoon antaa sinun lähettää rotuun sopivaa sisältöä, täydennysmuistutuksia ja tarjouksia, jotka todella sopivat eläimelle.",
      "Tulossähköpostit nappaavat pomppivat ostajat. Omistajat usein tutkivat ennen ostoa, joten automaattinen sähköposti, joka tiivistää suosituksen, tuo heidät takaisin viimeistelemään oston.",
    ],
    demo: {
      label: "Kokeile koiranruoan tunnistajaa",
      href: "https://productrecommendationquiz.com/pages/dog-food?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_pet_products",
      blurb: "Moniattribuuttinen koiranruoan tunnistaja live-tilassa demokaupassamme.",
    },
    faqs: [
      {
        question: "Miten lemmikkikysely hoitaa allergiat?",
        answer:
          "Poissulkemisilla. Allergiavastauksen yhdistäminen poissulkulistaan poistaa kaikki ristiriitaiset tuotteet tuloksista riippumatta siitä, kuinka hyvin ne sopivat muihin kysymyksiin.",
      },
      {
        question: "Voiko se tehdä yhteensovituksen rodun ja iän mukaan?",
        answer:
          "Kyllä. Jokainen vastaus (laji, rodun koko, ikä, aktiivisuustaso) lisää pisteitä sopiville tuotteille, jotta suositukset sopivat tiettyyn eläimeen.",
      },
      {
        question: "Voinko lähettää suosituksen sähköpostilla, jos he eivät osta?",
        answer:
          "Kyllä. Tulossähköpostit tiivistävät suosituksen automaattisesti, mikä on hyödyllistä omistajille, jotka tutkivat ennen ostoa.",
      },
      {
        question: "Segmentoiko se asiakkaat markkinointia varten?",
        answer:
          "Kyllä. Asiakastagit kuten pienen-koiran-omistaja synkronoidaan Klaviyoon ja muihin työkaluihin kohdennettuihin, eläimelle olennaisiin kampanjoihin.",
      },
    ],
    related: [
      { label: "Pakettien rakentaja -kysely", href: "/solutions/bundle-builder/" },
      { label: "Tuote-etsijä-kysely", href: "/product-finder-quiz/" },
      { label: "Kyselymallit", href: "/templates/" },
      { label: "Kysely WooCommercelle", href: "/product-recommendation-quiz-woocommerce/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  cbd: {
    slug: "cbd",
    type: "vertical",
    name: "CBD ja hyvinvointi",
    chip: "Toimiala",
    title: "CBD-tuote-etsijä-kysely kauppaasi",
    description:
      "CBD-kysely, joka ohjaa ostajat oikeaan muotoon ja vahvuuteen tavoitteen ja kokemuksen mukaan. Opettaa myynnin ohessa. Ilmainen taso, monialustainen.",
    h1: "CBD-kyselyt, jotka ohjaavat ostajat oikeaan muotoon",
    heroSubtitle:
      "Muoto, vahvuus ja tavoite hämmentävät useimpia CBD:n ostajia. Kysely opettaa myynnin ohessa ja suosittelee oikean tuotteen luottavaisin mielin.",
    intro: [
      "CBD ja hyvinvointi ovat kategorioita, joissa useimmat ostajat eivät aidosti tiedä, mitä ostaa: öljyä vai karkkia, mikä vahvuus, mitä tavoitetta varten. Kysely muuttaa tuon epävarmuuden selkeäksi suositukseksi kysymällä tavoitetta, kokemustasoa ja muotomieltymystä.",
      "RevenueHunt on tehty juuri tällaisille kategorian ensikertalaisille ostajille. Kysely opettaa kysyessään, suosittelee oikean muodon ja vahvuuden katalogistasi ja kerää tavoitteet zero-party-datana, jonka omistat ja jolle voit markkinoida.",
    ],
    quizTypes: [
      {
        title: "Tavoitepohjainen tunnistaja",
        body: "Uni, rauhoittuminen, palautuminen tai keskittyminen: jokainen tavoite lisää pisteitä sopiville tuotteille ja vahvuuksille.",
      },
      {
        title: "Muodon ja vahvuuden yhteensovitus",
        body: "Haaroita kokemuksen ja muotomieltymyksen mukaan (öljy, karkki, paikallinen, kapseli), jotta aloittelijat saavat helposti lähestyttävän lähtökohdan.",
      },
      {
        title: "Rutiinin tai ohjelman rakentaja",
        body: "Suosittele päivä- ja yöyhdistelmää suosituspaikkoja käyttäen täydelliseen rutiiniin.",
      },
      {
        title: "Opettava kysely ensin",
        body: "Käytä lausedioja kysymysten välissä opettaaksesi perusteet, mikä rakentaa luottamusta ja varmuutta ennen suositusta.",
      },
    ],
    howItHelps: [
      "Kategorian ensikertalaiset ostajat tarvitsevat opetusta, eivät vain suodatusta. Lausediat antavat sinun selittää vahvuuden ja muodon yksinkertaisella kielellä ostajan edetessä, jotta suositus saapuu luottavaisin mielin.",
      "Kokemustason sovittaminen vahvuuteen suojaa kokemusta. Ensikertalainen saa helposti lähestyttävän lähtökohdan vahvimman tuotteen sijaan, mikä tarkoittaa vähemmän pettymyspalautuksia.",
      "Kyselyssä kerätyistä tavoitteista tulee hyödyllisimpiä segmenttejäsi. goal:sleep tai goal:recovery -tagien synkronointi Klaviyoon ohjaa sähköpostia, joka vastaa sitä, mitä kukin asiakas todella yrittää ratkaista.",
    ],
    demo: {
      label: "Kokeile CBD-tuote-etsijää",
      href: "https://productrecommendationquiz.com/pages/cbd-product-finder?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_cbd",
      blurb: "CBD-tuote-etsijä live-tilassa demokaupassamme.",
    },
    faqs: [
      {
        question: "Voiko CBD-kysely suositella oikean vahvuuden?",
        answer:
          "Kyllä. Haaroita kokemustason ja tavoitteen mukaan, yhdistä sitten jokainen reitti sopivaan vahvuuteen, jotta aloittelijat ja kokeneet käyttäjät saavat eri suosituksia.",
      },
      {
        question: "Voiko kysely opettaa ostajia heidän edetessään?",
        answer:
          "Kyllä. Lausediat näyttävät tekstiä kysymysten välissä vaatimatta mitään syötettä, jotta voit opettaa muodon ja vahvuuden perusteet saumattomasti.",
      },
      {
        question: "Toimiiko se laajemmille hyvinvointituotteille?",
        answer:
          "Kyllä. Sama tavoite- ja muotolähestymistapa toimii adaptogeeneille, sienille ja muille hyvinvointikategorioille, joissa ostajat tarvitsevat opastusta.",
      },
      {
        question: "Mitä alustoja se tukee?",
        answer:
          "Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace ja itsenäisenä isännöitynä kyselynä.",
      },
    ],
    related: [
      { label: "Lisäravinnekysely", href: "/solutions/supplements/" },
      { label: "Rutiinin rakentaja -kysely", href: "/solutions/routine-builder/" },
      { label: "Tuote-etsijä-kysely", href: "/product-finder-quiz/" },
      { label: "Kyselymallit", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  jewelry: {
    slug: "jewelry",
    type: "vertical",
    name: "Korut ja asusteet",
    chip: "Toimiala",
    title: "Korukysely: auta löytämään oikea kappale",
    description:
      "Korukysely, joka yhdistää tyylin, metallin ja tilaisuuden oikeaan kappaleeseen ja auttaa lahjaostajia valitsemaan luottavaisin mielin. Ilmainen aloittaa.",
    h1: "Korukyselyt, jotka yhdistävät tyylin oikeaan kappaleeseen",
    heroSubtitle:
      "Metalli, tyyli, tilaisuus, budjetti: korukysely ohjaa ostajat ja lahjaostajat kappaleeseen, jota he rakastavat, loputtoman ruudukon sijaan.",
    intro: [
      "Korut ovat tunteellisia ja usein lahja, mikä tekee niistä vaikeita ostaa ruudukosta. Kysely kysyy tyyliä, metallimieltymystä, tilaisuutta ja budjettia ja suosittelee sitten sopivia kappaleita, muuttaen selailun varmaksi valinnaksi.",
      "RevenueHunt suosittelee oikeita kappaleita ja variantteja katalogistasi, hallitsee lahjaostajia, jotka eivät tunne saajan makua, ja kerää mieltymykset seurantaa varten. Tulossivu konvertoi suoralla lisää ostoskoriin -toiminnolla ja valinnaisella lahjaviestillä.",
    ],
    quizTypes: [
      {
        title: "Tyylin tunnistaja",
        body: "Kysymykset estetiikasta, metallista ja tilaisuudesta nostavat esiin kappaleet, jotka vastaavat ostajan makua.",
      },
      {
        title: "Lahjaetsijä",
        body: "Kysy saajaa ja tilaisuutta, suosittele sitten kuratoitu valikoima tai lahjasetti niille, jotka ostavat tuntematta katalogia.",
      },
      {
        title: "Budjettitietoinen yhteensovitus",
        body: "Sisällytä budjetti suositukseen, jotta jokainen ostaja näkee kappaleita oman hintaluokkansa sisällä.",
      },
      {
        title: "Kihla- tai merkkipaalutunnistaja",
        body: "Ohjaa harkitut ostot kuten kihla- tai vuosipäiväkappaleet keskittyneellä ja rauhoittavalla kululla.",
      },
    ],
    howItHelps: [
      "Lahjaostajat ovat valtava osa korujen liikenteestä ja epävarmimpia siitä, mitä haluavat. Kysely, joka kysyy saajaa katalogin sijaan, muuttaa tuon epävarmuuden varmaksi lahjaostoksi.",
      "Budjetti on kysymys, jonka useimmat ruudukot sivuuttavat. Sen sisällyttäminen suositukseen tarkoittaa, että ostajat näkevät kappaleita, joihin heillä todella on varaa, mikä vähentää pomppimista ja rakentaa luottamusta.",
      "Mieltymykset ja tilaisuudet synkronoidaan sähköpostityökaluusi, jotta voit seurata vuosipäivien, täydennysten ja yhteensopivien kappaleiden ympärillä kampanjoilla, jotka tuntuvat henkilökohtaisilta.",
    ],
    faqs: [
      {
        question: "Voiko korukysely auttaa lahjaostajia?",
        answer:
          "Kyllä. Kysy saajaa ja tilaisuutta katalogin sijaan, suosittele sitten kuratoitu valikoima tai lahjasetti, mikä on ihanteellista niille, jotka ostavat tietämättä tarkalleen, mitä haluavat.",
      },
      {
        question: "Voiko se ottaa budjetin huomioon?",
        answer:
          "Kyllä. Lisää budjettikysymys ja painota tai suodata suosituksia, jotta ostajat näkevät vain kappaleita oman hintaluokkansa sisällä.",
      },
      {
        question: "Tukeeko se variantteja kuten metallia ja kokoa?",
        answer:
          "Kyllä. Vastaukset voidaan yhdistää tiettyihin variantteihin, jotta tulossivu näyttää oikean metallin ja koon lisää ostoskoriin -toiminnolla.",
      },
      {
        question: "Voinko kerätä liidejä seurantaa varten?",
        answer:
          "Kyllä. Kysely kerää sähköpostin ja mieltymykset zero-party-datana ja synkronoituu Klaviyoon ja muihin työkaluihin tilaisuuspohjaista seurantaa varten.",
      },
    ],
    related: [
      { label: "Lahjaetsijä-kysely", href: "/solutions/gift-finder/" },
      { label: "Muoti- ja vaatekysely", href: "/solutions/fashion/" },
      { label: "Kyselymallit", href: "/templates/" },
      { label: "Tuote-etsijä-kysely", href: "/product-finder-quiz/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "home-goods": {
    slug: "home-goods",
    type: "vertical",
    name: "Koti ja sisustus",
    chip: "Toimiala",
    title: "Koti- ja sisustustuotekysely kauppaasi",
    description:
      "Koti- ja sisustuskysely, joka yhdistää huonekalut ja sisustuksen ostajan tilaan ja tyyliin. Vähentää palautuksia isokokoisissa tuotteissa. Ilmainen aloittaa.",
    h1: "Kotikyselyt, jotka yhdistävät tuotteet tilaan",
    heroSubtitle:
      "Tyyli, huone, koko ja budjetti: koti- ja sisustuskysely ohjaa ostajat kappaleisiin, jotka sopivat heidän tilaansa, mikä on tärkeintä isokokoisissa tuotteissa.",
    intro: [
      "Koti ja sisustus ovat harkittuja ostoja ja kalliita palauttaa. Ostajien on tiedettävä, että kappale sopii heidän tilaansa ja tyyliinsä ennen sitoutumista. Kysely kysyy huonetta, tyyliä, mittoja ja budjettia ja suosittelee sitten toimivia kappaleita.",
      "RevenueHunt suosittelee oikeita tuotteita katalogistasi, kokoaa yhteensopivia kokonaisuuksia suosituspaikoilla ja kerää tyylimieltymykset seurantaa varten, jotta kerran huonekalun ostavasta tulee toistuva sisustusasiakas.",
    ],
    quizTypes: [
      {
        title: "Tyylin tunnistaja",
        body: "Kysymykset estetiikasta ja huoneesta nostavat esiin huonekalut ja sisustuksen, jotka vastaavat ostajan makua.",
      },
      {
        title: "Huoneen tai tilan mukainen yhteensovitus",
        body: "Sisällytä huonetyyppi ja mitat suosituksiin, jotta kappaleet todella sopivat tilaan.",
      },
      {
        title: "Yhteensopivan kokonaisuuden rakentaja",
        body: "Kokoa yhteensopiva kokonaisuus (sohva plus matto plus valaistus) suosituspaikoilla täydelliseen ilmeeseen.",
      },
      {
        title: "Budjettitietoinen tunnistaja",
        body: "Sisällytä budjetti, jotta ostajat näkevät kappaleita oman hintaluokkansa sisällä ja pomppivat vähemmän.",
      },
    ],
    howItHelps: [
      "Sopivuus ja mittakaava ajavat palautuksia isokokoisissa tuotteissa. Huoneen mittojen kysyminen ja toimivien kappaleiden suositteleminen vähentää kalliita virheitä, jotka johtavat huonekalupalautuksiin.",
      "Yhteensopiva kokonaisuus nostaa tilausarvoa luonnollisesti. Suosituspaikat antavat sinun ehdottaa täydellistä ilmettä yksittäisen kappaleen sijaan, mikä sopii saumattomasti sisustuksen ostamiseen.",
      "Tyylimieltymykset ovat pysyviä. Ostajan estetiikan kerääminen ja synkronointi sähköpostityökaluusi tarkoittaa, että kausi- ja uutuusmallistokampanjat voidaan säätää maun mukaan sen sijaan, että ne lähetettäisiin kaikille samanlaisina.",
    ],
    faqs: [
      {
        question: "Voiko kotikysely suositella yhteensopivan kokonaisuuden?",
        answer:
          "Kyllä. Suosituspaikat varaavat paikan jokaiselle roolille (istuin, matto, valaistus), jotta tulossivu palauttaa täydellisen, yhteensopivan kokonaisuuden lisää ostoskoriin -toiminnolla.",
      },
      {
        question: "Voiko se ottaa huoneen koon huomioon?",
        answer:
          "Kyllä. Lisää huone- ja mittakysymyksiä ja yhdistä vastaukset sopiviin kappaleisiin, mikä on avain palautusten vähentämiseen suurissa tuotteissa.",
      },
      {
        question: "Auttaako se budjetin kanssa?",
        answer:
          "Kyllä. Sisällytä budjettikysymys, jotta suositukset pysyvät ostajan hintaluokan sisällä.",
      },
      {
        question: "Millä alustoilla se toimii?",
        answer:
          "Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace ja itsenäisenä isännöitynä kyselynä.",
      },
    ],
    related: [
      { label: "Pakettien rakentaja -kysely", href: "/solutions/bundle-builder/" },
      { label: "Lahjaetsijä-kysely", href: "/solutions/gift-finder/" },
      { label: "Kyselymallit", href: "/templates/" },
      { label: "Ohjatun myynnin kysely", href: "/guided-selling-quiz/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  // ----------------------------------------------------------------- use-cases
  "gift-finder": {
    slug: "gift-finder",
    type: "use-case",
    name: "Lahjaetsijä",
    chip: "Kyselytyyppi",
    title: "Lahjaetsijä-kysely verkkokauppaasi",
    description:
      "Lahjaetsijä-kysely, joka kysyy saajaa ja palauttaa kuratoidun lahjan, nostaen AOV:tä niille, jotka ostavat tuntematta katalogia. Ilmainen aloittaa.",
    h1: "Lahjaetsijä-kyselyt, jotka muuttavat arvailun myynniksi",
    heroSubtitle:
      "Lahjaostajilla ei ole mielipidettä katalogistasi ja paljon ahdistusta väärästä valinnasta. Lahjaetsijä kysyy saajaa ja suosittelee täydellisen lahjan.",
    intro: [
      "Lahjaostajat ovat helpoimmin menetettäviä ostajia ja helpoimmin autettavia. He eivät tunne tuotteitasi ja pelkäävät valitsevansa väärin. Lahjaetsijä-kysely esittää kolmesta viiteen kysymystä saajasta (suhde, ikä, kiinnostuksen kohteet, budjetti) ja palauttaa kuratoidun lahjan, jonka he voivat ostaa luottavaisin mielin.",
      "RevenueHunt tekee lahjaetsijästä yhden parhaiten konvertoivista kyselytyypeistä. Se ryhmittelee useita tuotteita yhteen lahjatulokseen korkeammalle tilausarvolle, lisää lahjaviestin ja alennuksen tulossivulle ja kerää ostajan sähköpostin seuraavaa tilaisuutta varten.",
    ],
    quizTypes: [
      {
        title: "Saajaan keskittyvä tunnistaja",
        body: "Kysy saajaa (suhde, ikä, kiinnostuksen kohteet) katalogin sijaan, jotta nekin, jotka eivät tiedä mitään tuotteistasi, saavat silti hyvän osuman.",
      },
      {
        title: "Tilaisuuden tunnistaja",
        body: "Haaroita tilaisuuden mukaan (syntymäpäivä, juhlat, vuosipäivä), jotta suositus sopii hetkeen.",
      },
      {
        title: "Lahjapaketin rakentaja",
        body: "Yhdistä useita tuotteita yhdeksi kuratoiduksi lahjasetiksi suosituspaikkoja käyttäen, mikä nostaa keskiostosarvoa.",
      },
    ],
    howItHelps: [
      "Niksi on kysyä saajaa, ei katalogia. Ostaja, joka osaa vastata kolmeen kysymykseen siskostaan, saa varman suosituksen tarvitsematta koskaan ymmärtää tuotevalikoimaasi.",
      "Lahjapaketit nostavat tilausarvoa ilman painetta. Kuratoidun setin palauttaminen yhtenä tuloksena tuntuu hyödylliseltä, ei tyrkyttävältä, ja ostajat hankkivat mielellään koko kokonaisuuden.",
      "Jokainen lahjaostaja on tuleva asiakas. Hänen sähköpostinsa ja tilaisuuden kerääminen antaa sinun tuoda heidät takaisin seuraavana syntymäpäivänä tai juhlana etumatkalla suosituksessa.",
    ],
    faqs: [
      {
        question: "Miten lahjaetsijä-kysely toimii?",
        answer:
          "Se esittää kolmesta viiteen kysymystä saajasta ja tilaisuudesta, suosittelee sitten kuratoidun lahjan tai lahjasetin, jotta nekin, jotka eivät tunne katalogiasi, voivat silti valita luottavaisin mielin.",
      },
      {
        question: "Voiko se ryhmitellä tuotteet yhdeksi lahjaksi?",
        answer:
          "Kyllä. Suosituspaikat yhdistävät useita tuotteita yhdeksi kuratoiduksi lahjasetiksi, mikä nostaa keskiostosarvoa.",
      },
      {
        question: "Voinko lisätä alennuksen tai lahjaviestin?",
        answer:
          "Kyllä. Tulossivu tukee alennuskoodi- ja sisältölohkoja, jotka voit näyttää ostajan vastausten mukaan.",
      },
      {
        question: "Kerääkö se liidejä tulevia tilaisuuksia varten?",
        answer:
          "Kyllä. Kysely kerää sähköpostin ja tilaisuuden, jotka synkronoidaan Klaviyoon ja muihin työkaluihin, jotta voit aktivoida heidät uudelleen ennen seuraavaa lahjahetkeä.",
      },
    ],
    related: [
      { label: "Korukysely", href: "/solutions/jewelry/" },
      { label: "Kauneus- ja kosmetiikkakysely", href: "/solutions/beauty/" },
      { label: "Tuote-etsijä-kysely", href: "/product-finder-quiz/" },
      { label: "Kyselymallit", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "size-finder": {
    slug: "size-finder",
    type: "use-case",
    name: "Koon ja istuvuuden tunnistaja",
    chip: "Kyselytyyppi",
    title: "Koon ja istuvuuden tunnistaja -kysely verkkokauppaan",
    description:
      "Koon ja istuvuuden tunnistaja -kysely, joka suosittelee oikean koon tai yhteensopivan tuotteen ja vähentää palautuksia. Ratkaisee moniattribuuttisen istuvuuden. Ilmainen aloittaa.",
    h1: "Koon ja istuvuuden tunnistaja -kyselyt, jotka vähentävät palautuksia",
    heroSubtitle:
      "Väärä koko on palautusten ykkössyy. Istuvuuden tunnistaja esittää oikeat kysymykset ja suosittelee sopivan koon tai yhteensopivan tuotteen.",
    intro: [
      "Istuvuus ja yhteensopivuus ovat siellä, missä verkkokauppa menettää rahaa: väärän koon palautukset vaatteissa ja kengissä, ja väärän istuvuuden palautukset kaikessa, minkä on sovittava yhteen jonkin kanssa, mitä ostaja jo omistaa. Istuvuuden tunnistaja -kysely ratkaisee nämä rajoitukset ennen tilausta, ei sen jälkeen.",
      "RevenueHunt hallitsee moniattribuuttista istuvuutta siististi. Yhdistä vastaukset tiettyihin variantteihin ja käytä poissulkemisia tiukkoihin rajoituksiin, jotta ostajan mitat ja vaatimukset ratkaistaan oikeaksi kooksi tai yhteensopivaksi tuotteeksi tulossivulla.",
    ],
    quizTypes: [
      {
        title: "Koon tunnistaja",
        body: "Kysymykset mitoista ja istuvuusmieltymyksestä rajaavat oikeaan kokoon, mikä on yleisin palautusten syy.",
      },
      {
        title: "Yhteensopivuuden tunnistaja",
        body: "Ratkaise moniattribuuttiset rajoitukset (laitemalli, kehystyyppi, tarvike) ainoaksi sopivaksi tuotteeksi.",
      },
      {
        title: "Istuvuusmieltymyksen mukainen yhteensovitus",
        body: "Haaroita istuvuusmieltymyksen mukaan (slim, regular, väljä), jotta suositus sopii siihen, miten ostaja haluaa pukeutua.",
      },
    ],
    howItHelps: [
      "Väärän koon palautukset ovat suurin kustannus, jota istuvuuden tunnistaja käsittelee. Mittojen ja istuvuusmieltymyksen kysyminen heti alussa ja niiden yhdistäminen tiettyihin variantteihin vie ostajat kokoon, jonka he pitävät.",
      "Yhteensopivuus on vain rajoituksia, ja poissulkemiset hoitavat ne täydellisesti. Ostaja, joka ilmoittaa laitteensa ja vaatimuksensa, saa täsmälleen yhteensopivan tuotteen, kaikki yhteensopimaton poistettuna.",
      "Luottamus konvertoi. Kun kysely kertoo ostajalle tämä on sinun kokosi selkeällä perustelulla, hän lisää ostoskoriin sen sijaan, että pomppisi kokotaulukkoon eikä koskaan palaisi.",
    ],
    demo: {
      label: "Kokeile yhteensopivuuden tunnistajaa",
      href: "https://productrecommendationquiz.com/pages/bicycle-quiz?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_size_finder",
      blurb: "Yhteensopivuustyylinen tunnistaja live-tilassa demokaupassamme, joka ratkaisee teknisen osuman.",
    },
    faqs: [
      {
        question: "Voiko istuvuuden tunnistaja vähentää väärän koon palautuksia?",
        answer:
          "Kyllä. Mittojen ja istuvuusmieltymyksen kysyminen ja vastausten yhdistäminen tiettyihin variantteihin suosittelee koon, jonka ostaja todennäköisimmin pitää, mikä vähentää palautuksia suoraan.",
      },
      {
        question: "Miten se hoitaa yhteensopivuuden?",
        answer:
          "Poissulkemisilla ja varianttien yhdistämisellä. Ostaja ilmoittaa rajoituksensa (laite, kehys, tarvike) ja kysely palauttaa vain yhteensopivan tuotteen, poistaen kaiken, mikä ei sovi.",
      },
      {
        question: "Toimiiko se kengille ja vaatteille?",
        answer:
          "Kyllä. Koon ja istuvuuden tunnistajat ovat vahvimpia käyttötapauksia vaatteille, kengille ja kaikelle, missä istuvuus ajaa palautuksia.",
      },
      {
        question: "Voivatko tulokset selittää suosituksen?",
        answer:
          "Kyllä. Tulossivun sisältölohkot voivat näyttää tiettyä tekstiä vastausten mukaan, jotta voit selittää, miksi tietty koko tai tuote on oikea istuvuus.",
      },
    ],
    related: [
      { label: "Muoti- ja vaatekysely", href: "/solutions/fashion/" },
      { label: "Tuote-etsijä-kysely", href: "/product-finder-quiz/" },
      { label: "Kyselymallit", href: "/templates/" },
      { label: "Kysely Shopifylle", href: "/product-recommendation-quiz-shopify/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "shade-finder": {
    slug: "shade-finder",
    type: "use-case",
    name: "Sävynsovitus",
    chip: "Kyselytyyppi",
    title: "Sävyn tunnistaja -kysely: sovita meikkivoide ja väri",
    description:
      "Sävyn tunnistaja -kysely, joka sovittaa meikkivoiteen, peitevoiteen tai värin alasävyn ja syvyyden mukaan, kuvavastauksin. Vähentää palautuksia. Ilmainen aloittaa.",
    h1: "Sävyn tunnistaja -kyselyt, jotka sovittavat värin luottavaisin mielin",
    heroSubtitle:
      "Meikin ostaminen verkossa tarkoittaa sävyn arvailua. Sävyn tunnistaja kysyy alasävyä ja syvyyttä ja palauttaa tarkan osuman, mikä vähentää palautuksia.",
    intro: [
      "Sävynsovitus on kauneuden verkkokaupan riskialttein kysymys. Mene siinä pieleen, ja tuote palautuu. Sävyn tunnistaja -kysely kysyy alasävyä, syvyyttä, peittävyyttä ja viimeistelyä ja suosittelee sitten tarkan sävyn katalogistasi kuvavastauksilla, jotka ovat nopeita mobiilissa.",
      "RevenueHunt yhdistää jokaisen vastauksen tiettyihin sävyvariantteihin ja sulkee loput pois, jotta tulossivu näyttää varman osuman näytemuurin sijaan. Ostajan sävyprofiili synkronoidaan sähköpostityökaluusi täydennyksiä ja yhteensopivia tuotteita varten.",
    ],
    quizTypes: [
      {
        title: "Meikkivoiteen sävynsovitus",
        body: "Kysymykset alasävystä ja syvyydestä kohdennetaan tarkkaan meikkivoiteen tai peitevoiteen sävyyn, kuvavastauksin nopeuden vuoksi.",
      },
      {
        title: "Huulen tai värin sovitus",
        body: "Yhdistä huulen, poskipunan tai silmien väri ostajan väritykseen ja mieltymykseen.",
      },
      {
        title: "Hiusvärin sovitus",
        body: "Ohjaa kotihiusvärjäys nykyisen sävyn, tavoitesävyn ja alasävyn mukaan oikeaan reseptiin.",
      },
    ],
    howItHelps: [
      "Kuvavastaukset kantavat sävykysymyksiä. Antaa ostajien koskettaa kuvaa alasävystä tai viimeistelystä voittaa sen pyytämisen, että he kuvailisivat sen, ja pitää suorituksen korkealla mobiilinäytöillä, joilla kauneutta myydään.",
      "Poissulkemiset muuttavat näytemuurin yhdeksi vastaukseksi. Alasävyn ja syvyyden yhdistäminen tiettyihin variantteihin ja loppujen poissulkeminen tarkoittaa, että tulossivu näyttää osuman, ei koko valikoimaa.",
      "Sävy on profiili, jota kannattaa säilyttää. Ostajan osumasävyn synkronointi Klaviyoon antaa sinun markkinoida täydennyksiä ja yhteensopivia tuotteita juuri oikeille ihmisille.",
    ],
    demo: {
      label: "Kokeile sävynsovituskyselyä",
      href: "https://productrecommendationquiz.com/pages/foundation-match?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_shade_finder",
      blurb: "Kuvapohjainen meikkivoiteen sävynsovituskysely live-tilassa demokaupassamme.",
    },
    faqs: [
      {
        question: "Miten sävyn tunnistaja sovittaa meikkivoiteen?",
        answer:
          "Se kysyy alasävyä, syvyyttä, peittävyyttä ja viimeistelyä, yhdistää jokaisen vastauksen sopiviin sävyvariantteihin ja sulkee loput pois. Tulossivu näyttää tarkan osuman lisää ostoskoriin -toiminnolla.",
      },
      {
        question: "Käyttääkö se kuvavastauksia?",
        answer:
          "Kyllä. Vaihtoehdot voivat olla klikattavia kuvia, mikä on ihanteellista alasävy- ja viimeistelykysymyksille ja parantaa suoritusta mobiilissa.",
      },
      {
        question: "Voiko se vähentää sävyyn liittyviä palautuksia?",
        answer:
          "Kyllä. Varman osuman suositteleminen näytemuurin sijaan vie ostajat sävyyn, jonka he todennäköisimmin pitävät.",
      },
      {
        question: "Toimiiko se meikkivoiteen lisäksi?",
        answer:
          "Kyllä. Sama lähestymistapa sovittaa huulen värin, poskipunan, silmien värin ja kotihiusvärjäyksen.",
      },
    ],
    related: [
      { label: "Kauneus- ja kosmetiikkakysely", href: "/solutions/beauty/" },
      { label: "Ihonhoitokysely", href: "/solutions/skincare/" },
      { label: "Kauneusbrändeille", href: "/for-beauty-brands/" },
      { label: "Kyselymallit", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "routine-builder": {
    slug: "routine-builder",
    type: "use-case",
    name: "Rutiinin rakentaja",
    chip: "Kyselytyyppi",
    title: "Rutiinin rakentaja -kysely ihonhoitoon ja muuhun",
    description:
      "Rutiinin rakentaja -kysely, joka palauttaa täydellisen monivaiheisen rutiinin, ei yhtä tuotetta, suosituspaikkoja käyttäen. Nostaa AOV:tä. Ilmainen aloittaa.",
    h1: "Rutiinin rakentaja -kyselyt, jotka myyvät koko kokonaisuuden",
    heroSubtitle:
      "Yksi tuote on myynti. Rutiini on ostoskori ja tapa. Rutiinin rakentaja palauttaa täydellisen monivaiheisen kokonaisuuden räätälöitynä jokaiselle ostajalle.",
    intro: [
      "Jotkin tuotteet ostetaan järjestelmänä, ei yksittäisenä tuotteena: ihonhoitorutiini, lisäravinnestack, hiusohjelma. Rutiinin rakentaja -kysely palauttaa koko kokonaisuuden, varatulla paikalla jokaiselle vaiheelle, jotta ostajat hankkivat koko rutiinin yhden tuotteen sijaan.",
      "RevenueHunt tekee tämän suosituspaikoilla. Varaa paikka jokaiselle roolille (puhdistusaine, hoito, kosteusvoide, SPF tai mitä kategoriasi tarvitsee), ja kysely täyttää jokaisen parhaalla osumalla ja näyttää sitten täydellisen rutiinin vaiheittain ryhmiteltynä lisää ostoskoriin -toiminnolla koko setille.",
    ],
    quizTypes: [
      {
        title: "Vaihepohjainen rutiini",
        body: "Varaa paikka jokaiselle vaiheelle ja täytä se parhaiten sopivalla tuotteella, jotta jokainen ostaja saa täydellisen ja johdonmukaisen rutiinin.",
      },
      {
        title: "Stackin rakentaja",
        body: "Kokoa monituoteinen stack (loistava lisäravinteille ja hyvinvoinnille) roolilla jokaiselle tuotteelle.",
      },
      {
        title: "Päivä- ja yörutiini",
        body: "Palauta erilliset AM- ja PM-rutiinit yhdestä kyselystä käyttäen näyttölogiikkaa tulossivulla.",
      },
    ],
    howItHelps: [
      "Suosituspaikat ovat ero myynnin ja ostoskorin välillä. Paikan varaaminen jokaiselle vaiheelle tarkoittaa, että tulossivu palauttaa täydellisen rutiinin, mikä nostaa tilausarvoa tuntumatta lisämyynniltä.",
      "Vaiheittain ryhmittely tekee rutiinista järkevän. Ostajat näkevät tarkalleen, mitä käyttää ja milloin, mikä rakentaa luottamusta ostoon ja tavan, joka tuo heidät takaisin.",
      "Rutiini on pysyvyysmoottori. Suosittelemasi kokonaisuus kertoo, mikä kullakin asiakkaalla loppuu ja milloin, jotta sähköpostiseurantasi voi ajoittaa täydennystarjoukset tarkasti.",
    ],
    faqs: [
      {
        question: "Miten rutiinin rakentaja palauttaa täydellisen kokonaisuuden?",
        answer:
          "Suosituspaikoilla. Jokainen paikka varataan roolille (esimerkiksi puhdistusaine, hoito, kosteusvoide, SPF) ja täytetään parhaiten sopivalla tuotteella, jotta tulossivu palauttaa täydellisen rutiinin.",
      },
      {
        question: "Voiko se näyttää erillisen päivä- ja yörutiinin?",
        answer:
          "Kyllä. Käytä näyttölogiikkaa tulossivulla näyttääksesi AM- ja PM-rutiinit tai minkä tahansa ehdollisen ryhmittelyn ostajan vastausten mukaan.",
      },
      {
        question: "Nostaako se keskiostosarvoa?",
        answer:
          "Täydellisen kokonaisuuden suositteleminen yhden tuotteen sijaan antaa ostajille syyn ostaa koko rutiini, mikä nostaa tilausarvoa.",
      },
      {
        question: "Mitkä kategoriat sopivat rutiinin rakentajaan?",
        answer:
          "Ihonhoito, hiustenhoito, lisäravinteet ja mikä tahansa katalogi, joka ostetaan monivaiheisena järjestelmänä yhden tuotteen sijaan.",
      },
    ],
    related: [
      { label: "Ihonhoitokysely", href: "/solutions/skincare/" },
      { label: "Lisäravinnekysely", href: "/solutions/supplements/" },
      { label: "Pakettien rakentaja -kysely", href: "/solutions/bundle-builder/" },
      { label: "Kyselymallit", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "bundle-builder": {
    slug: "bundle-builder",
    type: "use-case",
    name: "Pakettien rakentaja",
    chip: "Kyselytyyppi",
    title: "Pakettien rakentaja -kysely: myy kuratoituja settejä",
    description:
      "Pakettien rakentaja -kysely, joka kokoaa kuratoidun setin ostajan vastauksista ja nostaa keskiostosarvoa. Lisää ostoskoriin koko paketille. Ilmainen.",
    h1: "Pakettien rakentaja -kyselyt, jotka nostavat tilausarvoa",
    heroSubtitle:
      "Kuratoitu paketti konvertoi paremmin kuin yksittäinen tuote ja geneerinen lisämyynti. Pakettien rakentaja kokoaa setin jokaisen ostajan vastauksista.",
    intro: [
      "Paketit toimivat, mutta vain kun ne ovat olennaisia. Geneerinen kolme kahden hinnalla -lisämyynti sivuuttaa sen, mitä ostaja todella haluaa. Pakettien rakentaja -kysely kokoaa kuratoidun setin jokaisen ostajan vastauksista, jotta paketti tuntuu henkilökohtaiselta ja tilausarvo tulee luonnollisesti.",
      "RevenueHunt rakentaa paketteja suosituspaikoilla ja ehdollisilla tuloksilla. Varaa rooli jokaiselle setin tuotteelle, sovita jokainen ostajaan ja esitä koko paketti tulossivulla lisää ostoskoriin -toiminnolla kaikelle kerralla.",
    ],
    quizTypes: [
      {
        title: "Kuratoidun setin rakentaja",
        body: "Varaa rooli jokaiselle paketin tuotteelle ja täytä jokainen parhaalla osumalla, jotta setti sopii ostajaan katalogin sijaan.",
      },
      {
        title: "Aloituskitin tunnistaja",
        body: "Kokoa täydellinen aloituskitti ensikertalaisille tai kategoriassa uusille ostajille, jotka haluavat varman oston.",
      },
      {
        title: "Räätälöity paketti",
        body: "Anna vastausten ohjata joustavaa pakettia, näyttölogiikalla, joka lisää tai poistaa tuotteita sen mukaan, mitä ostaja valitsee.",
      },
    ],
    howItHelps: [
      "Olennainen paketti voittaa geneerisen. Jokaisen setin tuotteen sovittaminen ostajan vastauksiin tarkoittaa, että paketti luetaan suosituksena, ei alennustaktiikkana, ja konvertoi sen mukaisesti.",
      "Yksi lisää ostoskoriin koko setille poistaa kitkan. Ostajat hankkivat paketin yhdellä toiminnolla sen sijaan, että etsisivät jokaisen tuotteen, mikä suojaa juuri rakentamaasi korkeampaa tilausarvoa.",
      "Alennuslohkot saavat paketin perille. Näytä settialennus tulossivulla yhdistettynä tiettyyn yhdistelmään, jotta säästö tuntuu ansaitulta ja ostaja viimeistelee oston.",
    ],
    faqs: [
      {
        question: "Miten pakettien rakentaja -kysely toimii?",
        answer:
          "Se varaa roolin jokaiselle paketin tuotteelle, sovittaa jokaisen ostajan vastauksiin ja esittää koko kuratoidun setin tulossivulla lisää ostoskoriin -toiminnolla kaikelle kerralla.",
      },
      {
        question: "Voinko lisätä pakettialennuksen?",
        answer:
          "Kyllä. Tulossivu tukee alennuskoodilohkoja, jotka voit yhdistää tiettyihin vastausyhdistelmiin, jotta pakettisäästö näytetään asiayhteydessä.",
      },
      {
        question: "Nostaako se keskiostosarvoa?",
        answer:
          "Olennaisen ja kuratoidun setin suositteleminen yhden tuotteen sijaan antaa ostajille syyn ostaa enemmän, mikä nostaa tilausarvoa.",
      },
      {
        question: "Mitkä kategoriat sopivat?",
        answer:
          "Lisäravinteet, kauneus, ruoka ja juoma, koti ja mikä tahansa katalogi, jossa kuratoitu setti myy paremmin kuin yksittäinen tuote.",
      },
    ],
    related: [
      { label: "Rutiinin rakentaja -kysely", href: "/solutions/routine-builder/" },
      { label: "Lahjaetsijä-kysely", href: "/solutions/gift-finder/" },
      { label: "Lisäravinnekysely", href: "/solutions/supplements/" },
      { label: "Kyselymallit", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },
};
