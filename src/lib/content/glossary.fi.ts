import type { GlossaryTerm, GlossaryLink } from "../glossary";

const VERIFIED = "2026-06-07";

export const GLOSSARY_FI: Record<string, GlossaryTerm> = {
  "conversational-commerce": {
    slug: "conversational-commerce",
    term: "Keskusteleva kaupankäynti",
    chip: "Käsite",
    title: "Mitä on keskusteleva kaupankäynti?",
    description:
      "Keskusteleva kaupankäynti myy kaksisuuntaisen vuoropuhelun kautta staattisen ruudukon sijaan. Tässä on, mitä se kattaa, miksi se toimii ja miten kysely toteuttaa sen.",
    h1: "Mitä on keskusteleva kaupankäynti?",
    shortAnswer:
      "Keskusteleva kaupankäynti tarkoittaa myymistä vuorovaikutteisen, kaksisuuntaisen keskustelun kautta staattisen tuoteruudukon sijaan. Ostajat vastaavat kysymyksiin, ja kauppa vastaa henkilökohtaisilla suosituksilla, aivan kuten hyvä myyjä tekee fyysisessä kaupassa.",
    intro: [
      "Fyysisessä kaupassa hyvä myyjä kysyy, mitä tarvitset, kuuntelee ja ohjaa sinut oikean tuotteen luo. Verkossa useimmat kaupat ohittavat tämän vaiheen ja jättävät ostajat seisomaan ruudukon eteen, jossa on kaikki myytävät tuotteet. Keskusteleva kaupankäynti tuo vuoropuhelun takaisin keskiöön.",
    ],
    sections: [
      {
        heading: "Mikä lasketaan keskustelevaksi kaupankäynniksi",
        body: [
          "Kategoria on laaja. Se kattaa chatbotit, viestisovellukset, live-chatin, ääniavustajat ja tuotesuosittelukyselyt. Yhteistä niille on edestakainen vuoropuhelu: ostaja antaa tietoa ja kauppa vastaa jollain täsmällisemmällä kuin geneerinen luettelosivu.",
          "Muodot eroavat siinä, kuinka paljon hallitset niitä. Vapaatekstinen chatbot voi mennä minne tahansa ostaja kirjoittaa, mikä on tehokasta mutta arvaamatonta. Kysely on jäsenneltyä keskustelevaa kaupankäyntiä: jokaisen kysymyksen ja jokaisen polun olet suunnitellut sinä, joten keskustelu pysyy uskollisena brändillesi ja päättyy aina oikeaan tuotteeseen.",
        ],
      },
      {
        heading: "Miksi se konvertoi paremmin kuin ruudukko",
        body: [
          "Kategoriasivu pyytää ostajaa tekemään työn: lukemaan jokaisen vaihtoehdon, vertailemaan ominaisuuksia ja arvaamaan, mikä sopii. Se on analyysihalvausta, ja juuri siinä monet ostoskorit menetetään ennen kuin ne edes alkavat.",
          "Keskustelu tekee työn heidän puolestaan. Se kutistaa ison luettelon lyhyeksi, perustelluksi suositukseksi ja kertoo miksi. Ostajat, jotka saavat selkeän vastauksen, lisäävät tuotteen ostoskoriin sen sijaan, että lähtisivät vertailemaan muualle.",
          "Se myös tallentaa mieltymyksiä. Jokainen ostajan antama vastaus on tietoa, jota voit käyttää sähköpostin segmentointiin, jälkimarkkinoinnin personointiin ja parempaan myymälämarkkinointiin myöhemmin.",
        ],
      },
      {
        heading: "Keskusteleva kaupankäynti vs. chatbot",
        body: [
          "Näitä kahta termiä käytetään usein synonyymeinä, mutta chatbot on yksi työkalu kategorian sisällä, ei koko kategoria. Suureen kielimalliin perustuva chatbot voi vastata avoimiin kysymyksiin, mutta se voi myös tulkita aikomuksen väärin tai suositella jotain, mitä sinulla ei ole varastossa.",
          "Tuotesuosittelukysely vaihtaa vapauden luotettavuuteen. Se ei voi ajautua sivuraiteille, suosittelee aina elävästä luettelostasi ja toimii samalla tavalla jokaiselle ostajalle. Useimmille kaupoille tuo ennustettavuus on arvokkaampi kuin vapaamuotoinen chat.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt-kysely on luotettavin keskustelevan kaupankäynnin muoto, jota kauppa voi käyttää. Sinä suunnittelet jokaisen kysymyksen ja jokaisen polun, tulossivu suosittelee aina oikeita tuotteita ja variantteja luettelostasi, ja jokainen vastaus tallentuu zero-party-datana, jonka voit synkronoida Klaviyon ja muiden työkalujen kanssa.",
      "Se toimii Shopifylla, WooCommercella, BigCommercella, Magentolla, Wixilla, Squarespacella ja itsenäisesti isännöitynä kyselynä, ja sen voi aloittaa ilmaiseksi 100 vastauksella kuukaudessa.",
    ],
    faqs: [
      {
        question: "Lasketaanko tuotekysely keskustelevaksi kaupankäynniksi?",
        answer:
          "Kyllä. Kysely on jäsennelty keskustelevan kaupankäynnin muoto: ostaja vastaa kysymyksiin ja kauppa vastaa henkilökohtaisilla suosituksilla, samalla vuoropuhelumallilla kuin chatbot, mutta jokainen polku on suunniteltu etukäteen.",
      },
      {
        question: "Mikä on ero keskustelevan kaupankäynnin ja chatbotin välillä?",
        answer:
          "Chatbot on yksi työkalu keskustelevan kaupankäynnin sisällä. Keskusteleva kaupankäynti on laajempi idea myydä kaksisuuntaisen keskustelun kautta, ja siihen kuuluvat myös kyselyt, live-chat, viestintä ja ääni.",
      },
      {
        question: "Toimiiko keskusteleva kaupankäynti pienille kaupoille?",
        answer:
          "Kyllä. Tuotesuosittelukysely on vähäisimmän vaivan tapa aloittaa. Se ei tarvitse liikennehistoriaa toimiakseen, pyörii ilmaisella paketilla ja voi olla käytössä samana päivänä.",
      },
    ],
    related: [
      { label: "Tuotesuositusmoottori", href: "/glossary/product-recommendation-engine/" },
      { label: "Ostettava kysely", href: "/glossary/shoppable-quiz/" },
      { label: "Opastetun myynnin kysely", href: "/guided-selling-quiz/" },
      { label: "Miten se toimii", href: "/how-it-works/" },
      { label: "Kyselypohjat", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "product-recommendation-engine": {
    slug: "product-recommendation-engine",
    term: "Tuotesuositusmoottori",
    chip: "Käsite",
    title: "Mikä on tuotesuositusmoottori?",
    description:
      "Tuotesuositusmoottori päättää, mitkä tuotteet näytetään kullekin ostajalle. Tyypit, kylmäkäynnistysongelma ja miten kyselyyn perustuva moottori toimii.",
    h1: "Mikä on tuotesuositusmoottori?",
    shortAnswer:
      "Tuotesuositusmoottori on ohjelmisto, joka päättää, mitkä tuotteet näytetään tietylle ostajalle. Se ottaa syötteitä (selailukäyttäytyminen, ostohistoria tai ilmoitetut mieltymykset) ja järjestää luettelosi nostaakseen esiin parhaat osumat.",
    intro: [
      "Jokainen kauppa, joka näyttää ostajalle jotain muuta kuin koko luettelon, käyttää jonkinlaista suositusmoottoria, vaikka se olisi vain käsin koottu myydyimpien osio. Kiinnostava kysymys on, mitä moottori käyttää päätöksenteossa.",
    ],
    sections: [
      {
        heading: "Päätyypit",
        body: [
          "Käyttäytymismoottorit käyttävät sitä, mitä ostajat tekevät: katsotut sivut, klikatut tuotteet, ostetut asiat. Ne pyörittävät klassisia suositeltua sinulle- ja asiakkaat ostivat myös -osioita. Ne nojaavat yhteistoiminnalliseen suodatukseen, joka tarvitsee paljon liikennettä ja historiaa toimiakseen hyvin.",
          "Sääntö- tai attribuuttipohjaiset moottorit käyttävät tuotetietoja ja myyjän asettamaa logiikkaa: näytä lisätarvikkeet tämän kategorian kanssa, nosta varastossa olevat tuotteet ensin. Ne ovat ennustettavia mutta staattisia.",
          "Mieltymys- tai kyselypohjaiset moottorit käyttävät sitä, mitä ostaja kertoo sinulle suoraan. Ostaja vastaa muutamaan kysymykseen ja moottori järjestää luettelon näiden vastausten perusteella. Tämä on suorin aikomussignaali, koska se on vapaaehtoinen eikä päätelty.",
        ],
      },
      {
        heading: "Kylmäkäynnistysongelma",
        body: [
          "Käyttäytymismoottoreilla on tunnettu heikkous: ne epäonnistuvat uusien kävijöiden ja uusien tuotteiden kanssa. Ensimmäistä kertaa saapuvalla ostajalla ei ole historiaa, joten moottorilla ei ole mitään, mihin nojata, ja se turvautuu geneerisiin myydyimpiin. Juuri lisätyllä tuotteella ei ole vielä klikkauksia, joten sitä harvoin suositellaan.",
          "Mieltymyspohjaisella moottorilla ei ole kylmäkäynnistystä. Täysin uusi kävijä, joka vastaa kolmeen kysymykseen, antaa moottorille kaiken tarvittavan jo ensimmäisellä käynnillä, ilman seurantaa ja ilman datan kertymisen odottamista.",
        ],
      },
      {
        heading: "Miten kyselymoottori järjestää tuotteet",
        body: [
          "Jokaisella vastauksella on painoarvo. Välttämätön vastaus voi äänestää sopivien tuotteiden puolesta ja sopimattomia vastaan, kun taas kova rajoite kuten allergia tai yhteensopimaton ominaisuus voi sulkea tuotteet kokonaan pois riippumatta siitä, kuinka hyvin ne muuten pisteyttivät.",
          "Tuloksena on lyhyt, järjestetty ja perusteltu lista yhden arvauksen sijaan. Hyvät moottorit varaavat myös paikan kunkin kokonaisuuden roolille, joten tulos voi olla rutiini, paketti tai täysi setti yhden tuotteen sijaan.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt on mieltymyspohjainen, kyselyn voimalla toimiva tuotesuositusmoottori. Vastaukset äänestävät puolesta, äänestävät vastaan tai sulkevat pois tuotteita elävästä luettelostasi, suosituspaikat varaavat tilan kunkin kokonaisuuden roolille, ja se toimii ensimmäistä kertaa saapuvalle kävijälle ilman mitään historiaa.",
      "Koska syötteet ovat vapaaehtoisia, samat vastaukset toimivat samalla zero-party-datana, jonka omistat ja jota voit käyttää segmentointiin vielä pitkään ostajan lähdön jälkeen.",
    ],
    faqs: [
      {
        question: "Mikä on ero käyttäytymispohjaisen ja kyselypohjaisen suositusmoottorin välillä?",
        answer:
          "Käyttäytymismoottori päättelee aikomuksen klikkauksista ja ostohistoriasta, mikä vaatii liikennettä ja epäonnistuu uusien kävijöiden kanssa. Kyselypohjainen moottori käyttää ostajan suoraan ilmoittamia mieltymyksiä, joten se toimii jo ensimmäisellä käynnillä ilman historiaa.",
      },
      {
        question: "Tarvitsenko paljon liikennettä, jotta suositusmoottori toimii?",
        answer:
          "En kyselypohjaisessa moottorissa. Koska ostaja kertoo sinulle mieltymyksensä, se toimii jo ensimmäisestä käynnistä alkaen. Käyttäytymismoottorit sen sijaan tarvitsevat merkittävästi liikennettä ja ostohistoriaa, ennen kuin niiden suositukset ovat luotettavia.",
      },
      {
        question: "Voiko suositusmoottori ehdottaa useampaa kuin yhtä tuotetta?",
        answer:
          "Kyllä. Suosituspaikkojen avulla moottori varaa paikan kunkin kokonaisuuden roolille ja täyttää jokaisen parhaalla osumalla, palauttaen rutiinin, paketin tai täyden setin yhden tuotteen sijaan.",
      },
    ],
    related: [
      { label: "Henkilökohtaiset tuotesuositukset", href: "/glossary/personalized-product-recommendations/" },
      { label: "Keskusteleva kaupankäynti", href: "/glossary/conversational-commerce/" },
      { label: "Tuotteenetsijäkysely", href: "/product-finder-quiz/" },
      { label: "Miten se toimii", href: "/how-it-works/" },
      { label: "Kysely Shopifylle", href: "/product-recommendation-quiz-shopify/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "shoppable-quiz": {
    slug: "shoppable-quiz",
    term: "Ostettava kysely",
    chip: "Kyselytyyppi",
    title: "Mikä on ostettava kysely?",
    description:
      "Ostettava kysely päättyy tulossivulle, jossa ostajat lisäävät suositellut tuotteet ostoskoriin. Tässä on, mikä tekee kyselystä ostettavan ja missä kaupat käyttävät sitä.",
    h1: "Mikä on ostettava kysely?",
    shortAnswer:
      "Ostettava kysely on vuorovaikutteinen kysely, joka päättyy henkilökohtaiselle tulossivulle, jossa ostajat voivat lisätä suositellut tuotteet suoraan ostoskoriin. Kysely on osa kauppaa, ei erillään elävä kysely.",
    intro: [
      "Monet brändit käyttävät kyselyitä. Ero tuloja tuottavan ja pelkkiä vastauksia keräävän kyselyn välillä on siinä, voiko ostaja ostaa lopussa ilman, että hänen täytyy poistua.",
    ],
    sections: [
      {
        heading: "Mikä tekee kyselystä ostettavan",
        body: [
          "Kolme asiaa. Ensinnäkin se suosittelee oikeita tuotteita ja variantteja elävästä luettelostasi, ei täytetekstiä. Toiseksi tulossivulla on lisää ostoskoriin -vaihtoehto, joten ostaja voi ostaa suosituksen yhdellä askeleella. Kolmanneksi se voi viedä tarjouksen loppuun asti: vastauksiin sidottu alennus, settinä lisätty paketti, lisämyynti tulossivulla.",
          "Ilman tätä sinulla on persoonallisuuskysely tai kysely. Se voi olla hauska ja se voi kerätä sähköposteja, mutta se ei sulje juuri avaamaansa myyntiä.",
        ],
      },
      {
        heading: "Ostettava kysely vs. kysely tai persoonallisuuskysely",
        body: [
          "Kysely kerää vastauksia ja päättyy. Persoonallisuuskysely viihdyttää ja päättyy. Ostettava kysely käyttää vastauksia tuotteiden suosittelemiseen ja antaa sitten ostajan toimia suosituksen mukaan heti, kun hänen aikomuksensa on korkeimmillaan.",
          "Juuri tuo viimeinen askel ratkaisee. Hetki heti sen jälkeen, kun ostaja saa vastauksen luottavaisesti, on hetki, jolloin hän todennäköisimmin ostaa. Ostettava kysely tarttuu tuohon hetkeen sen sijaan, että lähettäisi hänet takaisin luetteloon aloittamaan alusta.",
        ],
      },
      {
        heading: "Missä ostettavia kyselyitä käytetään",
        body: [
          "Missä tahansa, missä valitseminen on vaikeaa: ihonhoitorutiinit, lisäravinnepaketit, meikkivoiteiden sävyt, koko ja istuvuus, lahjasetit, kahvisekoitukset. Mitä vaikeampaa on valita ruudukosta, sitä enemmän ostettava kysely ansaitsee paikkansa.",
          "Ne toimivat ponnahdusikkunana, sivulle upotettuna lohkona tai koko sivun kokemuksena, ja sama kysely voi samanaikaisesti ruokkia maksettua liikennettä, sähköpostia ja sivustolla tapahtuvaa löytämistä.",
        ],
      },
    ],
    withRevenueHunt: [
      "Jokainen RevenueHunt-kysely on oletuksena ostettava. Tulossivu vetää oikeita tuotteita ja variantteja luettelostasi, tukee yhden tuotteen tai koko setin lisäämistä ostoskoriin, ja voi näyttää alennuskoodin tai sisältölohkon ostajan vastausten mukaan.",
      "Voit rakentaa kyselyn pohjasta tai kuvailla kauppasi AI Quiz Copilotille ja saada koko kyselyn koottuna noin 60 sekunnissa, ja julkaista sen sitten ponnahdusikkunana, upotettuna tai laskeutumissivuna.",
    ],
    faqs: [
      {
        question: "Mikä on ero ostettavan kyselyn ja persoonallisuuskyselyn välillä?",
        answer:
          "Persoonallisuuskysely viihdyttää ja päättyy. Ostettava kysely suosittelee oikeita tuotteita luettelostasi ja antaa ostajien lisätä ne ostoskoriin tulossivulla, joten se sulkee myynnin sen sijaan, että vain keräisi vastauksia.",
      },
      {
        question: "Voivatko ostajat lisätä tuotteita ostoskoriin kyselystä?",
        answer:
          "Kyllä. Juuri se tekee siitä ostettavan. Tulossivu näyttää sopivat tuotteet ja variantit suoralla lisää ostoskoriin -vaihtoehdolla, yhdelle tuotteelle tai koko setille.",
      },
      {
        question: "Voiko ostettava kysely näyttää alennuksen?",
        answer:
          "Kyllä. Tulossivu tukee alennuskoodi- ja sisältölohkoja, jotka voit sitoa tiettyihin vastauksiin, joten oikeat ostajat näkevät oikean tarjouksen päätöksentekohetkellä.",
      },
    ],
    related: [
      { label: "Kyselysuppilo", href: "/glossary/quiz-funnel/" },
      { label: "Keskusteleva kaupankäynti", href: "/glossary/conversational-commerce/" },
      { label: "Pakettirakentajakysely", href: "/solutions/bundle-builder/" },
      { label: "Kyselypohjat", href: "/templates/" },
      { label: "Kyselyn ROI-laskuri", href: "/quiz-roi-calculator/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "quiz-funnel": {
    slug: "quiz-funnel",
    term: "Kyselysuppilo",
    chip: "Markkinointi",
    title: "Mikä on kyselysuppilo?",
    description:
      "Kyselysuppilo käyttää kyselyä sisääntulopisteenä muuttaakseen liikenteen päteviksi, tilanneiksi liideiksi. Tässä ovat vaiheet ja miksi se voittaa pelkän tilauksen.",
    h1: "Mikä on kyselysuppilo?",
    shortAnswer:
      "Kyselysuppilo on markkinointisuppilo, joka käyttää kyselyä sisääntulopisteenä. Ostaja tekee kyselyn, saa suosituksen, antaa sähköpostinsa ja siirtyy segmentoituun jälkimarkkinointisekvenssiin. Se muuttaa anonyymin liikenteen päteväksi liidiksi, jolla on tunnettu mieltymys.",
    intro: [
      "Useimmat verkkokauppasuppilot alkavat alennusponnahdusikkunalla ja yhdellä sähköpostikentällä. Kyselysuppilo korvaa sen jollain, mitä ostaja todella haluaa: henkilökohtaisella vastauksella.",
    ],
    sections: [
      {
        heading: "Kyselysuppilon vaiheet",
        body: [
          "Liikenne saapuu kyselyyn, mainoksesta, sähköpostista tai sivustosi linkistä. Ostaja vastaa muutamaan kysymykseen. Hän päätyy tulossivulle, jossa on henkilökohtainen suositus. Nähdäkseen tai tallentaakseen tuloksen hän antaa sähköpostinsa. Tuo sähköposti siirtyy jälkimarkkinointisekvenssiin, joka on segmentoitu sen mukaan, mitä hän kertoi sinulle.",
          "Ero tavalliseen suppiloon on siinä, mitä tiedät lopussa. Anonyymin tilaajan sijaan sinulla on yhteystieto, joka on merkitty hänen tavoitteillaan, mieltymyksillään ja tuotteilla, joiden kanssa hän sopi yhteen.",
        ],
      },
      {
        heading: "Miksi se voittaa geneerisen tilauksen",
        body: [
          "Pelkkä uutiskirjeen tilaus ei tarjoa mitään täsmällistä, joten se konvertoi pienen osan liikenteestä eikä anna sinulle mitään tietoa sähköpostiosoitteen lisäksi. Kyselysuppilo tarjoaa henkilökohtaisen suosituksen syyksi tilata, mikä on paljon vahvempi vaihtokauppa.",
          "Se myös parantaa jokaista myöhempää sähköpostia. Tilaaja, jonka tiedät etsivän tuotteita kuivalle ja herkälle iholle, saa erilaisia viestejä kuin se, joka etsii lahjaa. Tuo segmentointi rakentuu kyselyn aikana, sitä ei lisätä jälkikäteen.",
        ],
      },
      {
        heading: "Kyselysuppilot ja maksettu liikenne",
        body: [
          "Kyselysuppilot ovat suosittuja maksetussa hankinnassa, koska ne pätevöittävät ja tallentavat yhdellä askeleella. Kylmä liikenne, joka lähtisi tuotesivulta, täyttää usein kyselyn, ja sähköpostin tallennus tarkoittaa, että pidät liidin, vaikka hän ei ostaisi ensimmäisellä käynnillä.",
          "Kyselysuppilo on yksi konkreettinen suppilon muoto. Saadaksesi laajemman kuvan siitä, miten verkkokauppasuppiloita rakennetaan, katso suppiloesimerkkien opas.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt on tehty pyörittämään koko kyselysuppilo. Se tallentaa sähköpostin korkeimman aikomuksen hetkellä, synkronoi vastaukset ja asiakastunnisteet Klaviyon, Mailchimpin, Omnisendin, HubSpotin ja muiden kanssa, ja näyttää kysymyskohtaisen poistuman, jotta voit korjata vuodot.",
      "Tulossivun suositus on liidimagneetti, joten se, mikä ansaitsee sähköpostin, on myös se, mikä vauhdittaa myyntiä.",
    ],
    faqs: [
      {
        question: "Miten kyselysuppilo eroaa tavallisesta myyntisuppilosta?",
        answer:
          "Kyselysuppilo käyttää kyselyä sisääntulopisteenä, joten se pätevöittää ja segmentoi liidit samalla kun se tallentaa ne. Tavallinen suppilo alkaa yleensä geneerisellä tilauksella, joka tallentaa sähköpostin mutta ei mitään mieltymysdataa.",
      },
      {
        question: "Toimiiko kyselysuppilo maksetuissa mainoksissa?",
        answer:
          "Kyllä. Kyselysuppilot ovat tavallisia maksetussa hankinnassa, koska ne pätevöittävät kylmän liikenteen ja tallentavat sähköpostin yhdellä askeleella, joten pidät liidin, vaikka ostaja ei ostaisi ensimmäisellä käynnillä.",
      },
      {
        question: "Mitä teen kyselysuppilon tallentamilla liideillä?",
        answer:
          "Synkronoi ne sähköpostityökaluusi kyselyvastauksilla tunnisteina, ja lähetä sitten segmentoitua jälkimarkkinointia tavoitteen tai mieltymyksen mukaan. RevenueHunt synkronoi vastaukset ja asiakastunnisteet Klaviyon, Mailchimpin, Omnisendin, HubSpotin ja muiden kanssa.",
      },
    ],
    related: [
      { label: "Liidien hankintakysely", href: "/glossary/lead-generation-quiz/" },
      { label: "Ostettava kysely", href: "/glossary/shoppable-quiz/" },
      { label: "Verkkokauppasuppilon esimerkit", href: "/ecommerce-sales-funnel-examples/" },
      { label: "Kyselyn ROI-laskuri", href: "/quiz-roi-calculator/" },
      { label: "Integraatiot", href: "/integrations/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "personalized-product-recommendations": {
    slug: "personalized-product-recommendations",
    term: "Henkilökohtaiset tuotesuositukset",
    chip: "Käsite",
    title: "Mitä ovat henkilökohtaiset tuotesuositukset?",
    description:
      "Henkilökohtaiset tuotesuositukset räätälöivät ehdotukset kullekin ostajalle. Näin kaupat tekevät sen, kylmäkäynnistysongelma ja evästeetön tapa.",
    h1: "Mitä ovat henkilökohtaiset tuotesuositukset?",
    shortAnswer:
      "Henkilökohtaiset tuotesuositukset ovat yksittäiselle ostajalle räätälöityjä ehdotuksia sen sijaan, että kaikille näytettäisiin samat myydyimmät. Ne voivat perustua selailukäyttäytymiseen, menneisiin ostoihin tai, kaikkein suorimmin, siihen, mitä ostaja kertoo sinulle.",
    intro: [
      "Saman ruudukon näyttäminen jokaiselle ostajalle kohtelee ensikertalaista lahjaostajaa ja uskollista, toistuvasti ostavaa asiakasta samalla tavalla. Henkilökohtaiset suositukset mukautuvat siihen, kuka todella on ostamassa.",
    ],
    sections: [
      {
        heading: "Miten kaupat personoivat suosituksia",
        body: [
          "On kaksi yleistä lähestymistapaa. Käyttäytymispersonointi tarkkailee, mitä ostaja tekee, klikkaukset, katselut, aiemmat tilaukset, ja päättelee, mitä näyttää seuraavaksi. Ilmoitettuihin mieltymyksiin perustuva personointi kysyy ostajalta suoraan ja suosittelee hänen vastaustensa mukaan.",
          "Käyttäytyminen on ostajalle näkymätöntä ja skaalautuu automaattisesti, mutta se on päättelyä ja voi mennä pieleen. Ilmoitettu mieltymys on selkeä: ostaja kertoo sinulle haluavansa hajusteettoman kosteusvoiteen herkälle iholle, joten ei tarvitse arvata.",
        ],
      },
      {
        heading: "Kylmäkäynnistysongelma",
        body: [
          "Käyttäytymispersonoinnilla on vaikeuksia uusien ostajien kanssa. Ilman historiaa, josta oppia, se turvautuu oletuksena geneerisiin myydyimpiin juuri niille kävijöille, joille ensivaikutelma on tärkein.",
          "Ostajalta kysyminen ratkaisee tämän heti. Kysely kerää tarpeeksi personointiin jo ensimmäisellä käynnillä, ennen kuin mitään selailuhistoriaa on olemassa, minkä vuoksi se sopii niin hyvin yhteen kylmänä saapuvan maksetun ja sosiaalisen liikenteen kanssa.",
        ],
      },
      {
        heading: "Personointi ilman kolmannen osapuolen evästeitä",
        body: [
          "Käyttäytymiseen perustuva kohdentaminen on nojannut kolmannen osapuolen evästeisiin ja sivustojenväliseen seurantaan, joita molempia selaimet ja sääntely rajoittavat yhä enemmän. Suositukset, jotka rakentuvat ostajan vapaaehtoisesti antamaan dataan, eivät riipu mistään tästä.",
          "Kyselyn keräämä data on zero-party-dataa: mieltymyksiä ja aikomuksia, jotka ostaja jakaa tarkoituksella. Se eroaa first-party-datasta, joka on käyttäytymistä, jota tarkkailet omalla sivustollasi, kuten katsotut sivut ja aiemmat tilaukset. Zero-party-data on yksi first-party-datan tyyppi, mutta se on ilmoitettua eikä pääteltyä, joten mitään ei tarvitse arvata.",
          "Molemmat ovat kestäviä ja suostumukseen perustuvia, toisin kuin third-party-data. Saadaksesi koko kuvan, katso oppaat zero-party-datasta ja first-party-datasta.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt personoi suositukset niiden mieltymysten pohjalta, jotka ostaja ilmoittaa kyselyssä, joten se toimii jo ensimmäisellä käynnillä eikä riipu kolmannen osapuolen seurannasta. Vastaukset kohdistuvat oikeisiin tuotteisiin ja variantteihin, ja kovat rajoitteet sulkevat pois kaiken, mikä ei sovi.",
      "Samat vastaukset muuttuvat zero-party-dataksi, joten personointi jatkuu sähköpostissa: jokainen kyselyn jälkeinen kampanja voi puhua siitä, mitä kukin ostaja todella haluaa.",
    ],
    faqs: [
      {
        question: "Mikä data vauhdittaa henkilökohtaisia tuotesuosituksia?",
        answer:
          "Joko käyttäytymisdata (klikkaukset, katselut, ostohistoria) tai ilmoitetut mieltymykset, jotka ostaja antaa suoraan. Ilmoitetut mieltymykset ovat tarkimpia, koska ne ovat vapaaehtoisia eivätkä pääteltyjä, ja ne toimivat jo ensimmäisellä käynnillä.",
      },
      {
        question: "Voinko personoida suosituksia ensimmäistä kertaa saapuville kävijöille?",
        answer:
          "Kyllä, jos kysyt heiltä. Kysely kerää tarpeeksi personointiin jo ensimmäisellä käynnillä, mitä käyttäytymisjärjestelmät eivät voi tehdä, koska uusilla kävijöillä ei ole historiaa, josta oppia.",
      },
      {
        question: "Tarvitsevatko henkilökohtaiset suositukset kolmannen osapuolen evästeitä?",
        answer:
          "Eivät. Suositukset, jotka rakentuvat dataan, jonka ostaja antaa vapaaehtoisesti kyselyssä, eivät riipu kolmannen osapuolen evästeistä eivätkä sivustojenvälisestä seurannasta, joita molempia selaimet ja sääntelijät rajoittavat yhä enemmän.",
      },
    ],
    related: [
      { label: "Tuotesuositusmoottori", href: "/glossary/product-recommendation-engine/" },
      { label: "Verkkokaupan personointi", href: "/glossary/ecommerce-personalization/" },
      { label: "Zero-party-data", href: "/zero-party-data/" },
      { label: "First-party-data", href: "/first-party-data/" },
      { label: "Miten se toimii", href: "/how-it-works/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "ecommerce-personalization": {
    slug: "ecommerce-personalization",
    term: "Verkkokaupan personointi",
    chip: "Käsite",
    title: "Mitä on verkkokaupan personointi?",
    description:
      "Verkkokaupan personointi mukauttaa kaupan kullekin ostajalle. Tässä on, missä se tapahtuu, siirtymä zero-party-dataan ja vähäisimmän vaivan paikka aloittaa.",
    h1: "Mitä on verkkokaupan personointi?",
    shortAnswer:
      "Verkkokaupan personointi tarkoittaa ostokokemuksen, eli ostajan näkemien tuotteiden, sisällön ja tarjousten, mukauttamista yksilölle sen sijaan, että kaikille näytettäisiin sama kauppa. Hyvin tehtynä se nostaa konversiota ja keskimääräistä tilausarvoa.",
    intro: [
      "Personointi kattaa paljon maaperää, suositeltua sinulle -osiosta täysin räätälöityyn etusivuun. Yhteinen lanka on kohdella eri ostajia eri tavalla sen mukaan, mitä heistä tiedät.",
    ],
    sections: [
      {
        heading: "Missä personointi tapahtuu",
        body: [
          "Sivustolla se näkyy suositeltuina tuotteina, räätälöityinä laskeutumissivuina ja dynaamisena sisältönä. Suosituksissa se järjestää luettelon kullekin ostajalle. Sähköpostissa ja tekstiviestissä se segmentoi viestit käyttäytymisen tai mieltymyksen mukaan. Mainoksissa se mukauttaa mainosaineiston ja yleisöt.",
          "Useimmat kaupat eivät tarvitse kaikkea kerralla. Korkeimman tuoton paikat aloittaa ovat tuotesuositukset ja sähköpostin segmentointi, koska molemmat vaikuttavat suoraan siihen, mitä ostaja ostaa ja palaako hän.",
        ],
      },
      {
        heading: "Siirtymä third-party-datasta zero-party-dataan",
        body: [
          "Klassinen personointi nojasi vahvasti third-party-dataan ja sivustojenväliseen seurantaan. Selainten muutokset ja yksityisyyssääntely ovat tehneet tuosta lähestymistavasta hauraan ja monissa tapauksissa säännösten vastaisen.",
          "Kestävä korvaaja on oma datasi, ja se tulee kahdessa muodossa. First-party-data on sitä, mitä tarkkailet ostajan vuorovaikutuksista kauppasi kanssa, kuten katsotut sivut ja aiemmat tilaukset. Zero-party-data on sitä, mitä he tarjoavat tarkoituksella, kuten tavoitteet, mieltymykset ja ongelmat. Zero-party-data on first-party-datan ilmoitettu osajoukko, ja se on tarkin aikomussignaali, koska ostaja kertoi sen sinulle suoraan.",
          "Molemmat ovat suostumukseen perustuvia eivätkä katoa, kun selain estää evästeen. Kysely on suorin tapa kerätä zero-party-dataa skaalassa.",
        ],
      },
      {
        heading: "Vähäisimmän vaivan paikka aloittaa",
        body: [
          "Yritystason personointipaketit voivat räätälöidä jokaisen pikselin, ja hinta sekä käyttöönottoaikataulu vastaavat sitä. Useimmat kaupat eivät tarvitse sitä nähdäkseen tuloksia.",
          "Tuotesuosittelukysely on yksinkertaisin sisääntulopiste. Se personoi tärkeimmän hetken, tuotteen valitsemisen, tallentaa mieltymysdatan, joka sitten vauhdittaa henkilökohtaista sähköpostia, ja voi olla käytössä samana päivänä ilmaisella paketilla.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt on keskittynyt, itsepalveluinen tapa aloittaa personointi: kysely, joka räätälöi suositukset jo ensimmäisellä käynnillä ja syöttää sähköpostityökaluusi mieltymysdataa jatkuvaa segmentointia varten. Ei yrityssopimusta, ei datatiimiä.",
      "Se toimii kaikilla tärkeimmillä alustoilla ja synkronoituu Klaviyon, Mailchimpin, Omnisendin, HubSpotin ja muiden kanssa, joten personointi siirtyy kaupasta postilaatikkoon.",
    ],
    faqs: [
      {
        question: "Mikä on helpoin tapa aloittaa verkkokaupan personointi?",
        answer:
          "Tuotesuosittelukysely. Se personoi vaikuttavimman hetken, tuotteen valitsemisen, toimii jo ensimmäisellä käynnillä, tallentaa mieltymysdataa henkilökohtaista sähköpostia varten ja voi olla käytössä samana päivänä ilmaisella paketilla.",
      },
      {
        question: "Vaatiiko verkkokaupan personointi kolmannen osapuolen evästeitä?",
        answer:
          "Ei enää, ja se voi nojata niihin yhä vähemmän. Kestävä lähestymistapa käyttää dataa, jonka ostajat antavat vapaaehtoisesti ja suoraan, mikä on tarkempaa, suostumukseen perustuvaa eikä siihen vaikuta selain- ja yksityisyysrajoitukset.",
      },
      {
        question: "Tarvitsenko yritystason alustan kauppani personointiin?",
        answer:
          "Et. Yrityspaketit räätälöivät kaiken korkealla kustannuksella, mutta useimmat kaupat saavat vahvan tuoton keskittyneestä personoinnista: suosituksista ja sähköpostin segmentoinnista, jotka kysely toteuttaa itsepalvelupaketilla.",
      },
    ],
    related: [
      { label: "Henkilökohtaiset tuotesuositukset", href: "/glossary/personalized-product-recommendations/" },
      { label: "Tuotteiden löytäminen", href: "/glossary/product-discovery/" },
      { label: "Zero-party-data", href: "/zero-party-data/" },
      { label: "First-party-data", href: "/first-party-data/" },
      { label: "Vertaa RevenueHunt vs. Nosto", href: "/compare/nosto/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "product-discovery": {
    slug: "product-discovery",
    term: "Tuotteiden löytäminen",
    chip: "Käsite",
    title: "Mitä on tuotteiden löytäminen verkkokaupassa?",
    description:
      "Tuotteiden löytäminen on sitä, miten ostajat löytävät oikean tuotteen luettelostasi. Menetelmät, miksi suuret luettelot vaikeuttavat sitä ja miten opastettu myynti auttaa.",
    h1: "Mitä on tuotteiden löytäminen verkkokaupassa?",
    shortAnswer:
      "Tuotteiden löytäminen on sitä, miten ostajat löytävät oikean tuotteen luettelostasi. Hyvä löytäminen, haun, suodattimien ja opastettujen kyselyiden kautta, vie ostajan tilanteesta minulla on ongelma tilanteeseen tämä on se tuote mahdollisimman pienellä kitkalla.",
    intro: [
      "Ostaja saapuu harvoin tietäen tarkan SKU-koodisi. Hän saapuu tarpeen kanssa. Tuotteiden löytäminen on kaikki se, mitä on tuon tarpeen ja oikean tuotesivun välissä.",
    ],
    sections: [
      {
        heading: "Tärkeimmät löytämismenetelmät",
        body: [
          "Haku antaa ostajien, jotka tietävät mitä haluavat, kirjoittaa sen. Selailu ja suodattimet antavat heidän rajata kategorian ja attribuutin mukaan. Suositukset nostavat esiin osuvia tuotteita selailun aikana. Opastettu myynti, yleensä kysely, kysyy heidän tarpeestaan ja ohjaa heidät vastauksen luo.",
          "Jokainen sopii eri ostajalle. Haku toimii, kun joku tietää tuotteen nimen. Suodattimet toimivat, kun he tietävät attribuutit. Kysely toimii, kun he tietävät ongelman mutta eivät tuotetta, mikä on vaikein ja yleisin tapaus.",
        ],
      },
      {
        heading: "Miksi suuremmat luettelot vaikeuttavat löytämistä",
        body: [
          "Kauppa, jossa on kymmenen tuotetta, tuskin tarvitsee löytämistyökaluja. Kauppa, jossa on satoja tai tuhansia, tarvitsee. Mitä enemmän myyt, sitä todennäköisemmin ostaja kokee ylikuormitusta ja lähtee löytämättä sitä, mikä oli hänelle oikea.",
          "Tämä on valinnan paradoksi käytännössä: useammat vaihtoehdot voivat laskea konversiota, eivät nostaa sitä, ellet anna ostajille tapaa raivata tiensä niiden läpi. Opastettu löytäminen muuttaa suuren luettelon taakasta vahvuudeksi.",
        ],
      },
      {
        heading: "Löytäminen on konversion vipuvarsi",
        body: [
          "Ostaja, joka ei löydä oikeaa tuotetta, ei osta jotain toista, hän lähtee. Löytämisen parantaminen on usein suurin vipuvaikutuksen muutos, jonka kauppa, jolla on syvä luettelo, voi tehdä, koska se korjaa vaiheen, jossa aikomus kuolee hiljaa.",
          "Kysely on suorin löytämistyökalu tarpeeseen perustuvaan ostamiseen, koska se esittää kysymyksen, jonka myyjä esittäisi, ja palauttaa tuotteen, jota tämä osoittaisi.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt hoitaa tarpeeseen perustuvan tuotteiden löytämisen: ostaja kuvailee tavoitteensa tai ongelmansa, ja kysely järjestää elävän luettelosi palauttaakseen oikean osuman, kovilla rajoitteilla, jotka sulkevat pois kaiken, mikä ei sovi.",
      "Se skaalautuu luettelosi mukana, toimii jo ensimmäisellä käynnillä ja pyörii Shopifylla, WooCommercella, BigCommercella, Magentolla, Wixilla, Squarespacella ja itsenäisesti.",
    ],
    faqs: [
      {
        question: "Mikä on ero tuotteiden löytämisen ja haun välillä?",
        answer:
          "Haku on yksi löytämismenetelmä, ostajille, jotka jo tietävät mitä haluavat. Tuotteiden löytäminen on laajempaa ja sisältää suodattimet, suositukset ja opastetut kyselyt ostajille, jotka tietävät tarpeensa mutta eivät tiettyä tuotetta.",
      },
      {
        question: "Miten kysely parantaa tuotteiden löytämistä?",
        answer:
          "Se hoitaa vaikeimman tapauksen: ostajan, joka tietää ongelmansa mutta ei tuotetta. Kysely kysyy tarpeesta ja järjestää luettelon palauttaakseen oikean osuman, tavalla, jolla myyjä häntä opastaisi.",
      },
      {
        question: "Onko tuotteiden löytäminen tärkeämpää suurissa luetteloissa?",
        answer:
          "Kyllä. Mitä enemmän tuotteita myyt, sitä helpommin ostajat kokevat ylikuormitusta ja lähtevät. Opastettu löytäminen raivaa tien suuren luettelon läpi ja muuttaa sen koon eduksi esteen sijaan.",
      },
    ],
    related: [
      { label: "Opastetun myynnin kysely", href: "/guided-selling-quiz/" },
      { label: "Tuotteenetsijäkysely", href: "/product-finder-quiz/" },
      { label: "Verkkokaupan personointi", href: "/glossary/ecommerce-personalization/" },
      { label: "Vertaa RevenueHunt vs. Zoovu", href: "/compare/zoovu/" },
      { label: "Kyselypohjat", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "lead-generation-quiz": {
    slug: "lead-generation-quiz",
    term: "Liidien hankintakysely",
    chip: "Kyselytyyppi",
    title: "Mikä on liidien hankintakysely?",
    description:
      "Liidien hankintakysely tallentaa päteviä, tilanneita liidejä sisäänrakennetulla syyllä tilata. Tässä on, miksi se voittaa rekisteröitymislomakkeen ja mitä tallennat.",
    h1: "Mikä on liidien hankintakysely?",
    shortAnswer:
      "Liidien hankintakysely tallentaa päteviä liidejä: ostaja vastaa muutamaan kysymykseen, antaa sähköpostinsa nähdäkseen tuloksen, ja sinä saat yhteystiedon, joka on merkitty hänen ilmoittamillaan mieltymyksillä. Se on tilaus, jossa on sisäänrakennettu syy tilata.",
    intro: [
      "Sähköposti on yhä korkeimman tuoton kanava verkkokaupassa, mutta pelkkä rekisteröitymislomake konvertoi pienen osan kävijöistä eikä kerro mitään heistä. Liidien hankintakysely korjaa molemmat ongelmat kerralla.",
    ],
    sections: [
      {
        heading: "Miksi kysely voittaa pelkän rekisteröitymislomakkeen",
        body: [
          "Uutiskirjeruutu pyytää sähköpostia ja tarjoaa korkeintaan geneerisen alennuksen. Liidien hankintakysely tarjoaa henkilökohtaisen tuloksen, joka on syy, jonka vuoksi ostaja todella haluaa antaa osoitteensa. Vaihtokauppa tuntuu reilulta, joten useammat hyväksyvät sen.",
          "Se myös kerää enemmän kuin sähköpostin. Siihen mennessä kun ostaja tilaa, hän on vastannut kysymyksiin tavoitteistaan, mieltymyksistään ja rajoitteistaan, joten jokainen yhteystieto saapuu jo pätevänä ja segmentoituna.",
        ],
      },
      {
        heading: "Mitä tallennat ja miten sitä käytät",
        body: [
          "Tallennat sähköpostin sekä kyselyvastaukset zero-party-datana. Nuo vastaukset muuttuvat tunnisteiksi sähköpostityökalussasi: tavoite, ihotyyppi, budjetti, vastaanottaja, mitä ikinä kysely kysyikin.",
          "Tunnisteet muuttavat yhden listan segmenteiksi, joille voit puhua täsmällisesti. Liidi, joka kertoi ostavansa herkälle iholle, saa eri sähköpostin kuin se, joka ostaa lahjaa, ja ero rakentuu tallennushetkellä, sitä ei arvata jälkikäteen.",
        ],
      },
      {
        heading: "Säännöstenmukaisuuden etu",
        body: [
          "Koska ostaja antaa datan vapaaehtoisesti vastineeksi tuloksesta, se on zero-party-dataa: first-party-datan ilmoitettu tyyppi, suostumukseen perustuva määritelmän mukaan. Se kestää paljon paremmin kuin päätelty tai ostettu third-party-data, kun yksityisyyssäännöt tiukkenevat ja selaimet rajoittavat seurantaa.",
          "Sinä omistat datan, se on tarkkaa, koska se tuli suoraan ostajalta, eikä se riipu mistään kolmannen osapuolen evästeestä pysyäkseen hyödyllisenä.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt muuttaa minkä tahansa kyselyn liidien hankintakyselyksi: se tallentaa sähköpostin korkeimman aikomuksen hetkellä, ja synkronoi sitten yhteystiedon ja vastauksiin perustuvat tunnisteet Klaviyon, Mailchimpin, Omnisendin, HubSpotin ja muiden kanssa.",
      "Koska suositus on kannustin, sama kysely, joka kasvattaa listaasi, vauhdittaa myös myyntiä, ja poistuma-analytiikka näyttää tarkalleen, missä virtaa kannattaa hienosäätää.",
    ],
    faqs: [
      {
        question: "Miten liidien hankintakysely eroaa rekisteröitymislomakkeesta?",
        answer:
          "Rekisteröitymislomake pyytää sähköpostia ja tarjoaa geneerisen kannustimen. Liidien hankintakysely tarjoaa henkilökohtaisen tuloksen syyksi tilata ja tallentaa mieltymysdataa sähköpostin ohella, joten jokainen liidi on pätevä ja segmentoitu.",
      },
      {
        question: "Mitä tietoa liidien hankintakysely tallentaa?",
        answer:
          "Ostajan sähköpostin sekä hänen kyselyvastauksensa zero-party-datana. Nuo vastaukset synkronoituvat sähköpostityökaluusi tunnisteina, joten yhteystiedot saapuvat jo segmentoituina tavoitteen, mieltymyksen tai rajoitteen mukaan.",
      },
      {
        question: "Onko liidien hankintakyselyn datan käyttö säännösten mukaista?",
        answer:
          "Kyllä. Ostaja antaa sen vapaaehtoisesti vastineeksi tuloksesta, joten se on suostumukseen perustuvaa first-party-dataa. Se kestää paremmin kuin päätelty tai kolmannen osapuolen data, kun yksityisyyssäännöt ja selainrajoitukset tiukkenevat.",
      },
    ],
    related: [
      { label: "Kyselysuppilo", href: "/glossary/quiz-funnel/" },
      { label: "Ostettava kysely", href: "/glossary/shoppable-quiz/" },
      { label: "Zero-party-data", href: "/zero-party-data/" },
      { label: "Integraatiot", href: "/integrations/" },
      { label: "Kyselypohjat", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "conversion-rate-optimization": {
    slug: "conversion-rate-optimization",
    term: "Konversio-optimointi (CRO)",
    chip: "Käsite",
    title: "Mitä on konversio-optimointi?",
    description:
      "Konversio-optimointi (CRO) nostaa ostavien kävijöiden osuutta. Miten sitä mitataan, mihin keskittyä ja taktiikat, jotka siirtävät neulaa.",
    h1: "Mitä on konversio-optimointi (CRO)?",
    shortAnswer:
      "Konversio-optimointi (CRO) on käytäntö, jolla kasvatetaan toivotun toiminnon, yleensä oston, tekevien kävijöiden prosenttiosuutta. Mittaat konversioasteen konversioina jaettuna kävijöillä, ja parannat sitä sitten ostamatta lisää liikennettä.",
    intro: [
      "CRO tarkoittaa enemmän irti saamista liikenteestä, jota sinulla jo on. Konversioasteesi kaksinkertaistaminen vaikuttaa tuloihin yhtä paljon kuin liikenteen kaksinkertaistaminen, mutta maksaa paljon vähemmän.",
    ],
    sections: [
      {
        heading: "Miten konversioaste lasketaan",
        body: [
          "Konversioaste on konversiot jaettuna kävijöiden kokonaismäärällä, ilmaistuna prosentteina. Jos 1 000 kävijää tuottaa 20 ostosta, se on 2 prosentin konversioaste. Keskimääräiset verkkokaupan konversioasteet ovat matalissa yksinumeroisissa luvuissa, joten pienet absoluuttiset voitot ovat suuria suhteellisesti: 2 prosentista 3 prosenttiin nouseminen on 50 prosentin kasvu tilauksissa.",
          "Sama matematiikka pätee mihin tahansa tavoitteeseen, ei vain ostoksiin. Sähköpostitilaukset, kyselyn suorittamiset ja ostoskoriin lisäykset ovat kaikki konversioita, joita voit optimoida.",
        ],
      },
      {
        heading: "Mihin CRO oikeasti keskittyy",
        body: [
          "Hyvä CRO löytää sen tietyn vaiheen, jossa aikomus vuotaa, ja korjaa sen. Yleisiä vuotoja: tuotesivu, joka ei vastaa ostajan todelliseen kysymykseen, kassa, jossa on liikaa kitkaa, tai kategoriasivu, joka jättää epävarman ostajan seinämäisen vaihtoehtomäärän eteen ilman mitään opastusta.",
          "Se on silmukka, ei kertaluonteinen korjaus: muotoile hypoteesi, muuta yhtä asiaa, mittaa lähtötasoa vasten, säilytä se, mikä voittaa. Kuri on yhden muuttujan muuttamisessa kerrallaan, jotta tiedät, mikä siirsi lukua.",
        ],
      },
      {
        heading: "Taktiikat, jotka siirtävät lukua",
        body: [
          "Kestävät voitot ovat selkeyttä ja osuvuutta: nopeammat sivut, rehellinen tuotetieto, vähemmän vaiheita kassalla ja epävarmojen ostajien auttaminen valitsemaan. Alennusponnahdusikkunat voivat nostaa konversiota lyhyellä aikavälillä, mutta ne totuttavat ostajat odottamaan tarjouksia ja syövät katetta.",
          "Ostajien auttaminen valitsemaan on huomiotta jätetyin vipuvarsi. Ostaja, joka ei pysty päättämään, ei konvertoi, eikä vaihtoehtoruudukko auta häntä. Opastettu kokemus, joka kutistaa luettelon luottavaiseksi suositukseksi, poistaa epävarmuuden, joka hiljaa tappaa konversioita.",
        ],
      },
    ],
    withRevenueHunt: [
      "Tuotesuosittelukysely on CRO-taktiikka, joka tähtää epävarmuuden aiheuttamaan vuotoon. Sen sijaan, että jättäisi ostajan vertailemaan tuoteseinää, se esittää muutaman kysymyksen ja palauttaa henkilökohtaisen, luottavaisen suosituksen, joten useammat ostajat päätyvät ostopäätökseen.",
      "Se myös tallentaa sähköpostin ja mieltymysdatan matkan varrella, joten kävijät, jotka eivät osta ensimmäisellä käynnillä, eivät katoa. Voit mitoittaa mahdollisen nousun omille luvuillesi kyselyn ROI-laskurilla.",
    ],
    faqs: [
      {
        question: "Miten konversioaste lasketaan?",
        answer:
          "Jaa konversioiden määrä kävijöiden määrällä ja ilmaise se prosentteina. Esimerkiksi 20 ostosta 1 000 kävijästä on 2 prosentin konversioaste. Sama kaava pätee mihin tahansa tavoitteeseen, kuten tilauksiin tai kyselyn suorittamisiin.",
      },
      {
        question: "Mikä on hyvä konversioaste verkkokaupassa?",
        answer:
          "Useimmat verkkokaupat konvertoivat matalissa yksinumeroisissa luvuissa, usein noin 1-3 prosentin tienoilla. Koska pohja on pieni, vaatimattomat absoluuttiset voitot ovat suuria suhteellisesti: 2 prosentista 3 prosenttiin nouseminen on 50 prosentin kasvu tilauksissa.",
      },
      {
        question: "Miten tuotekysely parantaa konversioastetta?",
        answer:
          "Se tähtää epävarmuuden aiheuttamaan vuotoon. Kysely kutistaa suuren luettelon henkilökohtaiseksi, luottavaiseksi suositukseksi, joten epävarmat ostajat päätyvät ostopäätökseen sen sijaan, että lähtisivät vaihtoehtoruudukosta.",
      },
    ],
    related: [
      { label: "Keskimääräinen tilausarvo", href: "/glossary/average-order-value/" },
      { label: "Tuotteiden löytäminen", href: "/glossary/product-discovery/" },
      { label: "Konversio-optimoinnin vinkit", href: "/ecommerce-conversion-optimization-tips/" },
      { label: "Kyselyn ROI-laskuri", href: "/quiz-roi-calculator/" },
      { label: "Kyselysuppilo", href: "/glossary/quiz-funnel/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "average-order-value": {
    slug: "average-order-value",
    term: "Keskimääräinen tilausarvo (AOV)",
    chip: "Mittari",
    title: "Mikä on keskimääräinen tilausarvo (AOV)?",
    description:
      "Keskimääräinen tilausarvo (AOV) on se, mitä asiakas keskimäärin käyttää tilausta kohden. Miten se lasketaan, miksi sillä on väliä ja miten sitä nostetaan ilman lisäliikennettä.",
    h1: "Mikä on keskimääräinen tilausarvo (AOV)?",
    shortAnswer:
      "Keskimääräinen tilausarvo (AOV) on keskimääräinen summa, jonka asiakas käyttää yhdessä tilauksessa. Lasket sen jakamalla kokonaistulot tilausten määrällä samalla ajanjaksolla.",
    intro: [
      "AOV on yksi kolmesta luvusta, jotka määräävät tulosi, liikenteen ja konversioasteen ohella. Sen nostaminen kasvattaa tuloja täsmälleen samasta määrästä tilauksia, minkä vuoksi se on yksi halvimmista kasvun vipuvarsista, joita sinulla on.",
    ],
    sections: [
      {
        heading: "Miten AOV lasketaan",
        body: [
          "Jaa kokonaistulot tilausten määrällä tietyllä ajanjaksolla. Jos kauppa tuottaa 50 000 $ tuloja 1 000 tilauksella kuukaudessa, sen AOV on 50 $. Seuraa sitä ajan myötä ja liikenteen lähteen mukaan, koska korkeamman AOV:n kanava voi olla arvokkaampi, vaikka se konvertoisi vähemmän.",
          "AOV vuorovaikuttaa kaiken muun kanssa. Korkeampi AOV tarkoittaa, että jokainen konversio on arvokkaampi, mikä nostaa sitä, kuinka paljon sinulla on varaa käyttää asiakkaan hankkimiseen.",
        ],
      },
      {
        heading: "Miksi AOV:llä on väliä",
        body: [
          "Liikenne ja konversioaste vievät suurimman osan huomiosta, mutta ne ovat kalliita vipuvarsia: lisäliikenne maksaa mainospanostusta, ja konversiovoitot vaikeutuvat sitä mukaa kun optimoit. AOV on vipuvarsi, jota voit liikuttaa niissä tilauksissa, jotka jo voitat.",
          "Se myös rahoittaa hankinnan. Mitä arvokkaampi jokainen tilaus on, sitä enemmän voit tarjota maksetusta liikenteestä ja silti pysyä kannattavana, mikä kertautuu läpi koko suppilon.",
        ],
      },
      {
        heading: "Miten AOV:tä nostetaan",
        body: [
          "Rehelliset tavat nostaa AOV:tä lisäävät kaikki todellista arvoa: täydentävien tuotteiden suositteleminen, yhteensopivien tuotteiden niputtaminen ja ostajien auttaminen ostamaan koko ratkaisu yhden palan sijaan. Ristiinmyynti ja lisämyynti ovat taktiikat; osuva suositus on se, mikä saa ne toimimaan ärsyttämisen sijaan.",
          "Avainsana on osuva. Geneerinen lisätuotekehotus ohitetaan. Suositeltu kokonaisuus, joka todella sopii siihen, mitä ostaja on ostamassa, ostetaan, koska se luetaan apuna eikä myyntityöntönä.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt nostaa AOV:tä suosittelemalla kokonaista settiä yhden tuotteen sijaan. Suosituspaikat varaavat paikan kunkin rutiinin, paketin tai setin roolille, joten tulossivu palauttaa koko ratkaisun mahdollisuudella lisätä setti ostoskoriin ja vapaaehtoisella, vastauksiin sidotulla alennuksella.",
      "Koska jokainen tuote sopii ostajan vastauksiin, suurempi tilaus tuntuu suositukselta, ei lisämyynniltä. Voit arvioida tulovaikutuksen kaupallesi kyselyn ROI-laskurilla.",
    ],
    faqs: [
      {
        question: "Miten keskimääräinen tilausarvo lasketaan?",
        answer:
          "Jaa kokonaistulot tilausten määrällä samalla ajanjaksolla. Esimerkiksi 50 000 $ tuloja 1 000 tilauksesta on keskimääräinen tilausarvo 50 $.",
      },
      {
        question: "Miksi AOV on tärkeä?",
        answer:
          "Se kasvattaa tuloja tilauksista, jotka jo voitat, maksamatta lisäliikenteestä, ja korkeampi AOV antaa sinun käyttää enemmän kunkin asiakkaan hankkimiseen pysyen kannattavana. Se on yksi halvimmista saatavilla olevista kasvun vipuvarsista.",
      },
      {
        question: "Miten tuotekysely voi nostaa AOV:tä?",
        answer:
          "Suosittelemalla kokonaista settiä yhden tuotteen sijaan. Suosituspaikat palauttavat sopivan rutiinin, paketin tai setin mahdollisuudella lisätä koko setti ostoskoriin, joten jokainen tilaus on suurempi tuntumatta silti henkilökohtaiselta.",
      },
    ],
    related: [
      { label: "Ristiinmyynti ja lisämyynti", href: "/glossary/cross-selling-and-upselling/" },
      { label: "Konversio-optimointi", href: "/glossary/conversion-rate-optimization/" },
      { label: "Pakettirakentajakysely", href: "/solutions/bundle-builder/" },
      { label: "Rutiinirakentajakysely", href: "/solutions/routine-builder/" },
      { label: "Kyselyn ROI-laskuri", href: "/quiz-roi-calculator/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "cross-selling-and-upselling": {
    slug: "cross-selling-and-upselling",
    term: "Ristiinmyynti ja lisämyynti",
    chip: "Taktiikka",
    title: "Ristiinmyynti vs. lisämyynti selitettynä",
    description:
      "Ristiinmyynti lisää aiheeseen liittyviä tuotteita; lisämyynti nostaa parempaan. Tässä on ero, miksi molemmat toimivat ja miten kysely tekee sen ilman työntöä.",
    h1: "Mitä ovat ristiinmyynti ja lisämyynti?",
    shortAnswer:
      "Ristiinmyynti suosittelee aiheeseen liittyviä tuotteita, jotka täydentävät sitä, mitä ostaja on ostamassa, kuten kosteusvoidetta puhdistusaineen kanssa. Lisämyynti suosittelee parempaa tai suurempaa versiota siitä, mitä hän jo haluaa, kuten suurempaa kokoa tai premium-tasoa. Molemmat nostavat tilauksen arvoa.",
    intro: [
      "Nämä kaksi laitetaan samaan koriin, koska molemmat kasvattavat sitä, mitä ostaja käyttää, mutta ne toimivat eri suuntiin. Sen tietäminen, kumpi sopii mihinkin hetkeen, on ero hyödyllisen ja tyrkyttävän välillä.",
    ],
    sections: [
      {
        heading: "Ristiinmyynti vs. lisämyynti: ero",
        body: [
          "Ristiinmyynti kulkee sivusuunnassa. Se lisää tilaukseen täydentäviä tuotteita: klassinen otatko ranskalaisia sen kanssa?, tai näytönsuoja puhelimen kanssa. Tavoitteena on täydellisempi ostos.",
          "Lisämyynti kulkee ylöspäin. Se vie ostajan korkeamman arvon versioon siitä, mitä hän jo harkitsee: suurempi koko, premium-malli, pidempi tilaus. Tavoitteena on parempi sopivuus korkeampaan hintaan, ei enempää tuotteita.",
        ],
      },
      {
        heading: "Miksi molemmat toimivat, kun ne ovat osuvia",
        body: [
          "Molemmat taktiikat nostavat keskimääräistä tilausarvoa, ja molemmat voivat mennä pieleen. Osuva ristiin- tai lisämyynti luetaan hyödyllisenä neuvona; epäosuva luetaan kauppana, joka yrittää paisuttaa laskua, ja ostajat joko ohittavat sen tai ärsyyntyvät.",
          "Osuvuus on kaikki kaikessa, ja osuvuus vaatii ostajan tuntemista. Suositus, joka perustuu siihen, mitä joku todella yrittää saavuttaa, osuu. Geneerinen saatat myös pitää -osio, joka näytetään kaikille, ei.",
        ],
      },
      {
        heading: "Miten kysely tekee ristiin- ja lisämyyntiä ilman työntöä",
        body: [
          "Kysely tuntee ostajan tavoitteen ennen kuin suosittelee mitään, joten ristiin- ja lisämyynti ovat sisäänrakennettuja suositukseen sen sijaan, että ne lisättäisiin kassalla. Se voi palauttaa kokonaisen setin (ristiinmyynti) ja ohjata kohti ilmoitetun tarpeen oikeaa tasoa (lisämyynti) yhdellä liikkeellä.",
          "Koska suositus vastaa ostajan omiin kysymyksiin, suurempi tilaus tuntuu ansaitulta. Ostaja näkee sopivan ratkaisun, ei luetteloa lisätuotteista.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt rakentaa ristiin- ja lisämyynnit itse suositukseen. Suosituspaikat varaavat paikan kullekin täydentävälle roolille, jotta tulossivu palauttaa kokonaisen setin, ja vastauksiin perustuva logiikka ohjaa ostajat kohti kokoa, tasoa tai pakettia, joka sopii siihen, mitä he sinulle kertoivat.",
      "Tulossivu tukee koko setin lisäämistä ostoskoriin sekä vastauksiin sidottua alennusta, joten tilaus kasvaa siksi, että suositus on oikea, ei siksi, että ponnahdusikkuna keskeytti kassan.",
    ],
    faqs: [
      {
        question: "Mikä on ero ristiinmyynnin ja lisämyynnin välillä?",
        answer:
          "Ristiinmyynti lisää tilaukseen täydentäviä tuotteita, kuten kosteusvoiteen puhdistusaineen kanssa. Lisämyynti nostaa parempaan tai suurempaan versioon siitä, mitä ostaja jo haluaa, kuten premium-tasoon tai suurempaan kokoon. Molemmat kasvattavat tilauksen arvoa.",
      },
      {
        question: "Toimivatko ristiinmyynti ja lisämyynti todella?",
        answer:
          "Kyllä, kun suositus on osuva. Ehdotus, joka sopii ostajan tavoitteeseen, luetaan hyödyllisenä ja ostetaan. Geneerinen yhden koon kehotus ohitetaan tai ärsyttää, joten osuvuus on se, mikä erottaa nämä kaksi lopputulosta.",
      },
      {
        question: "Miten kysely tekee ristiin- ja lisämyyntiä?",
        answer:
          "Se oppii ensin ostajan tavoitteen, ja rakentaa sitten ristiin- ja lisämyynnin suositukseen. Suosituspaikat palauttavat kokonaisen setin, ja vastauksiin perustuva logiikka ohjaa kohti oikeaa tasoa, joten suurempi tilaus tuntuu neuvolta työnnön sijaan.",
      },
    ],
    related: [
      { label: "Keskimääräinen tilausarvo", href: "/glossary/average-order-value/" },
      { label: "Pakettirakentajakysely", href: "/solutions/bundle-builder/" },
      { label: "Rutiinirakentajakysely", href: "/solutions/routine-builder/" },
      { label: "Ostettava kysely", href: "/glossary/shoppable-quiz/" },
      { label: "Henkilökohtaiset tuotesuositukset", href: "/glossary/personalized-product-recommendations/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "customer-segmentation": {
    slug: "customer-segmentation",
    term: "Asiakassegmentointi",
    chip: "Markkinointi",
    title: "Mitä on asiakassegmentointi?",
    description:
      "Asiakassegmentointi ryhmittelee ostajat yhteisten piirteiden mukaan, jotta voit kohdistaa kullekin ryhmälle täsmällisesti. Tyypit, miksi se toimii ja miten kysely sitä ruokkii.",
    h1: "Mitä on asiakassegmentointi?",
    shortAnswer:
      "Asiakassegmentointi on käytäntö, jolla asiakkaat ryhmitellään yhteisten piirteiden mukaan, kuten tavoitteiden, käyttäytymisen tai demografisten tietojen, jotta voit kohdistaa kullekin ryhmälle osuvan viestin sen sijaan, että lähettäisit kaikille saman.",
    intro: [
      "Yksi viesti koko listallesi ei puhu kenellekään erityisesti. Segmentointi antaa sinun sanoa oikean asian oikealle ryhmälle, minkä vuoksi segmentoidut kampanjat ylittävät johdonmukaisesti umpimähkäisen massalähetyksen.",
    ],
    sections: [
      {
        heading: "Tärkeimmät tavat segmentoida",
        body: [
          "Demografinen segmentointi ryhmittelee attribuuttien kuten iän tai sijainnin mukaan. Käyttäytymissegmentointi ryhmittelee sen mukaan, mitä asiakkaat tekevät: menneet ostot, selailu, vuorovaikutus. Psykografinen segmentointi ryhmittelee asenteiden ja arvojen mukaan. Tarpeeseen perustuva segmentointi ryhmittelee sen ongelman mukaan, jonka asiakas yrittää ratkaista.",
          "Verkkokaupassa tarpeeseen ja käyttäytymiseen perustuvat segmentit ovat yleensä toiminnallisimpia, koska ne kohdistuvat suoraan siihen, mitä suositella ja mitä sanoa seuraavaksi.",
        ],
      },
      {
        heading: "Miksi segmentointi toimii",
        body: [
          "Osuvuus vauhdittaa vastetta. Asiakkaan, joka ostaa kuivalle ja herkälle iholle, ei pitäisi saada samaa sähköpostia kuin sen, joka ostaa lahjaa, ja kun he eivät saa, avausprosentit, klikkaukset ja konversiot nousevat.",
          "Segmentointi myös kertautuu ajan myötä. Jokainen kampanja, jonka lähetät hyvin määritellylle segmentille, opettaa sinulle siitä lisää, mikä terävöittää seuraavaa. Lista muuttuu voimavaraksi, ei vain lähetyskanavaksi.",
        ],
      },
      {
        heading: "Segmentoinnin takana oleva dataongelma",
        body: [
          "Voit segmentoida vain sen mukaan, mitä tiedät, eivätkä useimmat kaupat tiedä paljoakaan anonyymistä kävijästä. Käyttäytymisdata kertyy hitaasti ja epäonnistuu uusien ostajien kanssa, ja third-party-dataa rajoittavat yhä enemmän selaimet ja sääntely.",
          "Ratkaisu on kysyä. Kun ostaja kertoo sinulle tavoitteensa, mieltymyksensä tai rajoitteensa, voit segmentoida sen mukaan heti ja tarkasti, hänen suostumuksellaan. Tämä vapaaehtoisesti annettu tieto on zero-party-dataa.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt muuttaa kyselyvastaukset segmenteiksi automaattisesti. Jokainen vastaus muuttuu asiakastunnisteeksi, kuten tavoite:uni tai iho:herkkä, joka synkronoituu Klaviyon, Mailchimpin, Omnisendin, HubSpotin ja muiden kanssa, joten yhteystiedot saapuvat valmiiksi segmentoituina sen mukaan, mitä he sinulle kertoivat.",
      "Koska segmentit rakentuvat datasta, jonka ostaja antoi vapaaehtoisesti, ne ovat tarkkoja jo ensimmäisestä käynnistä eivätkä riipu seurannasta. Jokainen kyselyn jälkeinen kampanja voi puhua segmentille koko listan sijaan.",
    ],
    faqs: [
      {
        question: "Mitkä ovat asiakassegmentoinnin tärkeimmät tyypit?",
        answer:
          "Yleisiä perustoja ovat demografinen (ikä, sijainti), käyttäytymiseen perustuva (ostot, selailu, vuorovaikutus), psykografinen (asenteet, arvot) ja tarpeeseen perustuva (ongelma, jonka asiakas ratkaisee). Verkkokaupassa tarpeeseen ja käyttäytymiseen perustuvat segmentit ovat yleensä toiminnallisimpia.",
      },
      {
        question: "Miksi asiakassegmentointi on tärkeää?",
        answer:
          "Se tekee viestistä osuvan, mikä nostaa avausprosentteja, klikkauksia ja konversioita verrattuna siihen, että kaikille lähetettäisiin sama. Se myös kertautuu: jokainen kampanja määritellylle segmentille opettaa sinulle siitä lisää ja terävöittää seuraavaa.",
      },
      {
        question: "Miten kysely auttaa segmentoinnissa?",
        answer:
          "Se kysyy ostajilta suoraan, joten jokainen vastaus muuttuu asiakastunnisteeksi, joka synkronoituu sähköpostityökaluusi. Yhteystiedot saapuvat valmiiksi segmentoituina tavoitteen, mieltymyksen tai rajoitteen mukaan, tarkkoina jo ensimmäisestä käynnistä ja seurannasta riippumatta.",
      },
    ],
    related: [
      { label: "Henkilökohtaiset tuotesuositukset", href: "/glossary/personalized-product-recommendations/" },
      { label: "Liidien hankintakysely", href: "/glossary/lead-generation-quiz/" },
      { label: "Zero-party-data", href: "/zero-party-data/" },
      { label: "Verkkokaupan personointi", href: "/glossary/ecommerce-personalization/" },
      { label: "Integraatiot", href: "/integrations/" },
    ],
    verifiedAsOf: VERIFIED,
  },
};

/** Oppaat ja sivut, joihin sanaston keskus osoittaa. */
export const GLOSSARY_RELATED_GUIDES_FI: GlossaryLink[] = [
  {
    label: "Tuotteenetsijäkysely",
    href: "/product-finder-quiz/",
    blurb: "Mikä on tuotteenetsijäkysely, milloin sellaista kannattaa käyttää ja 12 elävää esimerkkiä.",
  },
  {
    label: "Opastetun myynnin kysely",
    href: "/guided-selling-quiz/",
    blurb: "Miten opastettu myynti toimii verkkokaupassa ja miten kysely rakennetaan.",
  },
  {
    label: "Zero-party-data",
    href: "/zero-party-data/",
    blurb: "Mitä on zero-party-data, miksi se voittaa käyttäytymisseurannan ja miten kysely sen tallentaa.",
  },
  {
    label: "Ratkaisut toimialoittain",
    href: "/solutions/",
    blurb: "Tuotesuosittelukyselyn ratkaisut ihonhoidolle, lisäravinteille, muodille ja muille.",
  },
  {
    label: "Kyselyn ROI-laskuri",
    href: "/quiz-roi-calculator/",
    blurb: "Arvioi lisätulot, jotka tuotesuosittelukysely voisi tuoda kauppaasi.",
  },
];
