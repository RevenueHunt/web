import type { Solution } from "../solutions";

const VERIFIED = "2026-06-07";

export const SOLUTIONS_PL: Record<string, Solution> = {
  // ----------------------------------------------------------------- verticals
  skincare: {
    slug: "skincare",
    type: "vertical",
    name: "Pielęgnacja skóry",
    chip: "Branża",
    title: "Quiz pielęgnacji skóry dla Shopify i WooCommerce",
    description:
      "Stwórz quiz pielęgnacji skóry, który wykryje typ skóry i jej potrzeby, a następnie poleci odpowiednią rutynę. Darmowy plan, kreator z AI, działa już tego samego dnia.",
    h1: "Quizy pielęgnacji skóry, które zamieniają przeglądanie w rutynę",
    heroSubtitle:
      "Większość osób kupujących kosmetyki do pielęgnacji po raz pierwszy nie wie, które produkty są dla nich odpowiednie. Quiz zadaje właściwe pytania i zwraca spersonalizowaną rutynę, którą można dodać do koszyka.",
    intro: [
      "Pielęgnacja skóry to najtrudniejsza kategoria do kupowania na zimno. Kupujący przychodzą z konkretnym problemem, a nie z produktem w głowie, i ściana żeli myjących, serum oraz filtrów SPF wcale nie pomaga im w wyborze. Quiz pielęgnacji skóry zastępuje tę ścianę krótką, prowadzoną rozmową: na wejściu typ skóry, główny problem, wrażliwości i budżet, a na wyjściu spersonalizowana rutyna.",
      "RevenueHunt wykorzystuje do tego ponad 20 000 marek. Przypisuje każdą odpowiedź do realnych produktów z Twojego katalogu, grupuje wynik według kroku rutyny (żel myjący, kuracja, krem nawilżający, SPF) i przechwytuje profil skóry kupującego jako zero-party data, które możesz zsynchronizować z Klaviyo.",
    ],
    quizTypes: [
      {
        title: "Wykrywanie typu skóry",
        body: "Od pięciu do siedmiu pytań o typ skóry, jej potrzeby i cele zwraca rutynę szytą na miarę. Klasyczny quiz pielęgnacji skóry i punkt wyjścia, który konwertuje najlepiej.",
      },
      {
        title: "Kreator rutyny",
        body: "Wykorzystaj recommendation slots, aby zarezerwować miejsce na każdy krok, dzięki czemu każdy kupujący otrzyma pełną rutynę z 3 lub 5 kroków zamiast pojedynczego produktu.",
      },
      {
        title: "Quiz skoncentrowany na problemie",
        body: "Zacznij od problemu (trądzik, starzenie, suchość, wrażliwość) i rozgałęziaj się logiką warunkową, aby każdy kupujący widział tylko pytania istotne dla siebie.",
      },
      {
        title: "Dopasowanie po składniku lub wrażliwości",
        body: "Wyklucz produkty kolidujące z zadeklarowaną alergią lub wrażliwością, dzięki czemu kupujący, który zaznaczy brak zapachu, nigdy nie zobaczy w wynikach produktu zapachowego.",
      },
    ],
    howItHelps: [
      "Silnik rekomendacji klasyfikuje produkty według odpowiedzi, które najbardziej się liczą. Nadaje większą wagę problemowi koniecznemu niż mile widzianemu i wyklucza wszystko, co kupujący odrzuci, dzięki czemu strona wyników jest naprawdę szyta na miarę zamiast generycznej karuzeli bestsellerów.",
      "Każda odpowiedź to zero-party data. Kupujący, który mówi Ci, że ma skórę suchą i wrażliwą oraz że zależy mu na przeciwstarzeniowości, to segment, do którego możesz prowadzić marketing przez lata. RevenueHunt synchronizuje ten profil i customer tags z Klaviyo, Mailchimp, Omnisend i innymi.",
      "Stwórz go w kilka minut, a nie tygodni. Zacznij od szablonu pielęgnacji skóry albo opisz swój sklep AI Quiz Copilotowi, a on ułoży pytania, logikę i przypisania produktów w jakieś 60 sekund. Następnie opublikuj go jako popup, embed lub landing na całą stronę.",
    ],
    demo: {
      label: "Wypróbuj quiz typu skóry",
      href: "https://productrecommendationquiz.com/pages/skin-type-quiz?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_skincare",
      blurb: "Działający na żywo quiz pielęgnacji skóry w naszym sklepie demo. Odpowiedz na kilka pytań i zobacz, jaką rutynę zwróci.",
    },
    faqs: [
      {
        question: "Ile pytań powinien mieć quiz pielęgnacji skóry?",
        answer:
          "Od pięciu do siedmiu widocznych pytań sprawdza się w przypadku większości marek. Wykorzystaj logikę warunkową, aby pomijać pytania, które nie mają zastosowania, dzięki czemu kupujący bez wrażliwości nigdy nie zobaczy kroku o alergiach.",
      },
      {
        question: "Czy quiz może polecić całą rutynę, a nie tylko jeden produkt?",
        answer:
          "Tak. Recommendation slots rezerwują miejsce na każdy krok rutyny (żel myjący, kuracja, krem nawilżający, SPF), dzięki czemu każdy kupujący otrzymuje pełną rutynę z opcją dodania do koszyka całego zestawu.",
      },
      {
        question: "Czy działa dla skóry wrażliwej i alergii?",
        answer:
          "Tak. Każda odpowiedź może wykluczać produkty, więc zaznaczenie alergii lub wrażliwości usuwa z wyników wszelkie kolidujące produkty, nawet gdyby poza tym były mocnym dopasowaniem.",
      },
      {
        question: "Czy mogę przechwytywać e-maile i wysyłać rutynę do Klaviyo?",
        answer:
          "Tak. Quiz przechwytuje e-mail i pełny profil skóry jako zero-party data oraz synchronizuje odpowiedzi i customer tags z Klaviyo, Mailchimp, Omnisend, HubSpot i innymi.",
      },
    ],
    related: [
      { label: "Szablony quizu pielęgnacji skóry", href: "/templates/" },
      { label: "Quiz kreatora rutyny", href: "/solutions/routine-builder/" },
      { label: "Quiz wykrywania odcienia", href: "/solutions/shade-finder/" },
      { label: "Dla marek kosmetycznych", href: "/for-beauty-brands/" },
      { label: "Quiz dla Shopify", href: "/product-recommendation-quiz-shopify/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  beauty: {
    slug: "beauty",
    type: "vertical",
    name: "Uroda i kosmetyki",
    chip: "Branża",
    title: "Quiz urody i kosmetyków dla Twojego sklepu",
    description:
      "Quiz urody, który dopasowuje odcień, znajduje odpowiednie produkty i buduje rutynę z Twojego katalogu. Darmowy plan, kreator z AI, wieloplatformowy.",
    h1: "Quizy urody, które łączą kupujących z odpowiednim produktem",
    heroSubtitle:
      "Odcień podkładu, kolor ust, cała rutyna: quiz urody odpowiada na pytania, na które siatka produktów nie potrafi, i prowadzi kupujących na spersonalizowaną stronę wyników.",
    intro: [
      "Osoby kupujące kosmetyki mierzą się z dwoma problemami naraz: zbyt dużym wyborem i zbyt dużym ryzykiem. Wybierz zły odcień podkładu, a produkt wraca. Quiz urody eliminuje zgadywanie, pytając o podton, krycie, wykończenie i potrzeby, a następnie polecając dokładnie te produkty, które pasują.",
      "RevenueHunt napędza quizy urody dla tysięcy marek. Pobiera realne produkty i warianty z Twojego katalogu, pokazuje je na stronie wyników z bezpośrednim dodawaniem do koszyka i przechwytuje profil urody każdego kupującego jako zero-party data do segmentowanego follow-upu e-mailowego.",
    ],
    quizTypes: [
      {
        title: "Dopasowanie odcienia",
        body: "Pytania o podton, głębię i wykończenie przypisują się do odpowiedniego odcienia podkładu, korektora lub pomadki. Odpowiedzi z obrazkami sprawiają, że jest to szybkie na telefonie.",
      },
      {
        title: "Kreator pełnej rutyny",
        body: "Poleca kompletny zestaw (baza, podkład, kolor, utrwalenie) za pomocą recommendation slots, dzięki czemu kupujący nabywają całą rutynę zamiast jednego produktu.",
      },
      {
        title: "Quiz problemu skóry lub włosów",
        body: "Rozgałęzia się według problemu oraz typu skóry lub włosów, aby strona wyników odnosiła się do konkretnego celu każdego kupującego.",
      },
      {
        title: "Wykrywanie zestawu prezentowego lub startowego",
        body: "Pomaga kupującym prezenty i nowicjuszom, którzy nie znają katalogu, polecając zestaw startowy lub wyselekcjonowany pakiet.",
      },
    ],
    howItHelps: [
      "Odcień i dopasowanie to dokładnie miejsca, gdzie pojawiają się zwroty. Pytając o podton i krycie od samego początku oraz wykluczając wszystko, co nie pasuje, quiz prowadzi kupujących do produktów, które o wiele bardziej prawdopodobnie zatrzymają.",
      "Pytania z obrazkami pozwalają kupującym dotknąć zdjęcia zamiast się opisywać, co utrzymuje wysokie wskaźniki ukończenia na telefonie, gdzie trafia większość ruchu w branży urodowej.",
      "Profil kupującego (podton, typ skóry, ulubione wykończenie) synchronizuje się z Twoim narzędziem do e-maili jako customer tags, dzięki czemu każda kampania po quizie może być spersonalizowana zamiast generyczna.",
    ],
    demo: {
      label: "Wypróbuj quiz dopasowania podkładu",
      href: "https://productrecommendationquiz.com/pages/foundation-match?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_beauty",
      blurb: "Działający na żywo quiz dopasowania odcienia oparty na obrazkach w naszym sklepie demo, z wynikami dokładnego dopasowania.",
    },
    faqs: [
      {
        question: "Czy quiz urody może dopasować odcienie podkładu?",
        answer:
          "Tak. Pytaj o podton, głębię i wykończenie, wiąż każdą odpowiedź z pasującymi odcieniami i wykluczaj resztę. Strona wyników pokazuje dokładne dopasowanie odcienia z opcją dodania do koszyka.",
      },
      {
        question: "Czy obsługuje pytania z obrazkami?",
        answer:
          "Tak. Opcje mogą być wyświetlane jako klikalne obrazki, co świetnie sprawdza się przy pytaniach o odcień, wykończenie i styl oraz poprawia ukończenie na telefonie.",
      },
      {
        question: "Czy zadziała na WooCommerce lub BigCommerce, nie tylko na Shopify?",
        answer:
          "Tak. RevenueHunt działa natywnie na Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace oraz jako niezależny hostowany quiz.",
      },
      {
        question: "Czy mogę zgrupować produkty w jeden wynik?",
        answer:
          "Tak. Wykorzystaj recommendation slots, aby zarezerwować miejsce na każdą rolę produktu i zwrócić kompletny zestaw lub pakiet, z opcją dodania do koszyka całej rutyny.",
      },
    ],
    related: [
      { label: "Quiz wykrywania odcienia", href: "/solutions/shade-finder/" },
      { label: "Quiz pielęgnacji skóry", href: "/solutions/skincare/" },
      { label: "Quiz wyszukiwania prezentów", href: "/solutions/gift-finder/" },
      { label: "Dla marek kosmetycznych", href: "/for-beauty-brands/" },
      { label: "Szablony quizu", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  supplements: {
    slug: "supplements",
    type: "vertical",
    name: "Suplementy",
    chip: "Branża",
    title: "Quiz suplementów: poleć odpowiedni stack",
    description:
      "Quiz suplementów, który zamienia cele zdrowotne w polecany stack. Rozgałęzia się według diety i ograniczeń, synchronizuje cele z Klaviyo. Darmowy start.",
    h1: "Quizy suplementów, które polecają odpowiedni stack",
    heroSubtitle:
      "Kupujący nabywają suplementy dla celu, a nie SKU. Quiz zamienia sen, energię, odporność lub koncentrację w polecany stack z Twojego katalogu.",
    intro: [
      "Osoby kupujące suplementy myślą celami: lepszy sen, więcej energii, lepsze zdrowie jelit. Twój katalog jest zorganizowany według produktu. Quiz suplementów zasypuje tę lukę, pytając o cele, dietę i styl życia, a następnie polecając pasujący stack.",
      "RevenueHunt przypisuje każdy cel do odpowiednich SKU, zarządza ograniczeniami dietetycznymi za pomocą wykluczeń i zwraca wieloproduktowy stack na stronie wyników ze zniżką na pierwsze zamówienie. Cele kupującego synchronizują się z Klaviyo jako tagi do ciągłego, segmentowanego e-mailingu.",
    ],
    quizTypes: [
      {
        title: "Wykrywanie celów zdrowotnych",
        body: "Kupujący wybierają swoje cele (sen, energia, odporność, jelita, koncentracja), a każdy cel dodaje punkty pasującym produktom, budując polecany stack.",
      },
      {
        title: "Kreator stacku",
        body: "Zarezerwuj slot na każdą rolę (baza, specyficzny, wydajność), aby każdy kupujący odszedł z kompletnym, spójnym stackiem.",
      },
      {
        title: "Filtr diety i ograniczeń",
        body: "Wyklucza produkty kolidujące z dietą wegańską, bezglutenową lub innymi ograniczeniami, dzięki czemu wyniki automatycznie respektują dietę każdego kupującego.",
      },
      {
        title: "Onboarding subskrypcji",
        body: "Wykorzystaj quiz na początku lejka subskrypcji, przechwyć e-mail i połącz stronę wyników z ofertą subskrybuj i oszczędzaj.",
      },
    ],
    howItHelps: [
      "Logika warunkowa utrzymuje quiz krótkim. Jeśli kupujący powie, że nie ma ograniczeń dietetycznych, quiz całkowicie pomija pytania o ograniczenia, dzięki czemu nikt nie odpowiada na pytania, które go nie dotyczą.",
      "Wykluczenia czysto zarządzają sztywnymi ograniczeniami. Kupujący weganin nigdy nie zobaczy w wynikach produktu niewegańskiego, nawet gdyby był mocnym dopasowaniem wyłącznie pod kątem celów.",
      "Cele to najcenniejsza rzecz, jaką może poznać marka suplementów. Synchronizacja tagów takich jak goal:sleep czy goal:gut z Klaviyo pozwala prowadzić e-mailing cyklu życia, który naprawdę odpowiada temu, co każdy klient próbuje osiągnąć.",
    ],
    faqs: [
      {
        question: "Czy quiz suplementów może polecić wieloproduktowy stack?",
        answer:
          "Tak. Każdy cel dodaje punkty pasującym produktom, a recommendation slots rezerwują miejsce na każdą rolę, dzięki czemu strona wyników zwraca kompletny stack z opcją dodania całego zestawu do koszyka.",
      },
      {
        question: "Jak zarządza dietą wegańską lub bezglutenową?",
        answer:
          "Za pomocą wykluczeń. Powiązanie odpowiedzi o diecie z listą wykluczeń usuwa z wyników wszelkie kolidujące produkty, niezależnie od tego, jak dobrze punktowały pod kątem celów.",
      },
      {
        question: "Czy mogę dodać zniżkę na pierwsze zamówienie na stronie wyników?",
        answer:
          "Tak. Strona wyników obsługuje blok kodu rabatowego, który możesz pokazać kupującym po raz pierwszy lub powiązać z konkretnymi kombinacjami odpowiedzi.",
      },
      {
        question: "Czy działa dla marki subskrypcyjnej?",
        answer:
          "Tak. Uruchom quiz na początku lejka, przechwyć e-mail w Klaviyo i skieruj stronę wyników do oferty subskrybuj i oszczędzaj.",
      },
    ],
    related: [
      { label: "Quiz kreatora pakietów", href: "/solutions/bundle-builder/" },
      { label: "Quiz fitnessu i odżywiania", href: "/solutions/fitness/" },
      { label: "Quiz sprzedaży prowadzonej", href: "/guided-selling-quiz/" },
      { label: "Szablony quizu", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  fashion: {
    slug: "fashion",
    type: "vertical",
    name: "Moda i odzież",
    chip: "Branża",
    title: "Quiz stylu mody i odzieży dla ecommerce",
    description:
      "Quiz stylu, który znajduje odpowiednie dopasowanie, krój i kolor z Twojego katalogu i ogranicza zwroty. Darmowy plan, wieloplatformowy, wielojęzyczny.",
    h1: "Quizy stylu, które znajdują odpowiednie dopasowanie i krój",
    heroSubtitle:
      "Styl jest osobisty, a dopasowanie ryzykowne. Quiz mody poznaje gust i rozmiar kupującego, a następnie poleca ubrania, które prawdopodobnie zatrzyma.",
    intro: [
      "Moda ma najwyższy wskaźnik zwrotów w ecommerce, a większość bierze się z niedopasowania rozmiaru i stylu. Quiz stylu ogranicza oba, pytając o typ sylwetki, preferencję dopasowania, okazję i gust, a następnie polecając ubrania, które naprawdę leżą na kupującym.",
      "RevenueHunt buduje quiz na bazie Twojego katalogu na żywo, łącznie z wariantami, dzięki czemu rozmiar i kolor przepływają aż do strony wyników. Dla marek sprzedających na wielu rynkach bazowy quiz można przetłumaczyć i przypisać według Shopify Market, z automatycznie zlokalizowanymi tytułami i cenami produktów.",
    ],
    quizTypes: [
      {
        title: "Quiz profilu stylu",
        body: "Pytania o gust, okazję i kolor wydobywają ubrania pasujące do estetyki kupującego zamiast generycznej siatki nowości.",
      },
      {
        title: "Wykrywanie dopasowania i rozmiaru",
        body: "Pytania o typ sylwetki i preferencję dopasowania zawężają wybór do odpowiedniego kroju i rozmiaru, czyli tam, gdzie zaczyna się większość zwrotów odzieży.",
      },
      {
        title: "Kreator kapsuły lub stylizacji",
        body: "Wykorzystaj recommendation slots, aby skomponować skoordynowaną stylizację lub kapsułę zamiast pojedynczego produktu.",
      },
      {
        title: "Wykrywanie okazji",
        body: "Rozgałęzia się według okazji (praca, ślub, podróż), aby każdy kupujący widział wyselekcjonowany wybór na moment, na który kupuje.",
      },
    ],
    howItHelps: [
      "Polecanie według dopasowania i gustu, a nie tylko popularności, prowadzi kupujących do ubrań, które prawdopodobniej zatrzymają, co jest najbardziej bezpośrednią dźwignią marki modowej w kwestii zwrotów.",
      "Warianty przepływają od początku do końca. Powiąż odpowiedzi z konkretnymi rozmiarami i kolorami, a strona wyników pokaże właściwy wariant z opcją dodania do koszyka, dzięki czemu kupujący nie odbijają się na stronę produktu, by wybierać od nowa.",
      "Sprzedajesz w całej UE lub poza nią? Zbuduj bazowy quiz, pozwól AI Copilotowi go przetłumaczyć, przypisz każdą wersję do jej Shopify Market, a dane produktów zlokalizują się automatycznie. Bez pracy tłumaczeniowej produktów dla każdego języka.",
    ],
    faqs: [
      {
        question: "Czy quiz mody może ograniczyć zwroty?",
        answer:
          "Celuje w główną przyczynę zwrotów, polecając według dopasowania i gustu zamiast popularności. Powiązanie odpowiedzi z konkretnymi rozmiarami i kolorami prowadzi kupujących do ubrań, które prawdopodobniej zatrzymają.",
      },
      {
        question: "Czy obsługuje warianty produktu, takie jak rozmiar i kolor?",
        answer:
          "Tak. Odpowiedzi można powiązać z konkretnymi wariantami, a strona wyników pokazuje pasujący rozmiar i kolor z bezpośrednim dodawaniem do koszyka.",
      },
      {
        question: "Czy mogę uruchomić quiz w wielu językach?",
        answer:
          "Tak. Zbuduj bazowy quiz, przetłumacz go za pomocą AI Copilota i przypisz każdą wersję do jej Shopify Market. Tytuły i ceny produktów lokalizują się automatycznie przez Shopify Markets.",
      },
      {
        question: "Na jakich platformach działa?",
        answer:
          "Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace oraz jako niezależny hostowany quiz.",
      },
    ],
    related: [
      { label: "Quiz wykrywania rozmiaru i dopasowania", href: "/solutions/size-finder/" },
      { label: "Quiz wyszukiwania prezentów", href: "/solutions/gift-finder/" },
      { label: "Szablony quizu", href: "/templates/" },
      { label: "Quiz dla Shopify", href: "/product-recommendation-quiz-shopify/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  coffee: {
    slug: "coffee",
    type: "vertical",
    name: "Kawa i herbata",
    chip: "Branża",
    title: "Quiz kawowy: połącz wypał z gustem",
    description:
      "Quiz profilu smaku, który łączy kupujących z odpowiednim wypałem lub blendem i pozyskuje subskrybentów. Darmowy plan, gotowy na Klaviyo i ReCharge.",
    h1: "Quizy kawowe, które łączą gust z odpowiednim wypałem",
    heroSubtitle:
      "Wypał, pochodzenie, metoda parzenia, nuty smakowe: quiz kawowy zamienia mylące menu w pewną rekomendację i nowego subskrybenta.",
    intro: [
      "Kawa i herbata rządzą się gustem, a gust trudno kupować z listy produktów. Krótki quiz profilu smaku pyta o preferencję wypału, metodę parzenia i nuty smakowe, a następnie poleca blend, który kupujący naprawdę polubi.",
      "RevenueHunt zamienia to w lejek, a nie tylko rekomendację. Przechwytuje e-mail na początku, poleca blend startowy i łączy stronę wyników z ofertą subskrybuj i oszczędzaj przez ReCharge, z preferencjami wypału i parzenia zsynchronizowanymi z Klaviyo.",
    ],
    quizTypes: [
      {
        title: "Wykrywanie profilu smaku",
        body: "Kilka pytań o wypał, ciało i nuty smakowe łączy każdego kupującego z blendem pasującym do jego podniebienia.",
      },
      {
        title: "Dopasowanie po metodzie parzenia",
        body: "Espresso, pour-over, prasa francuska lub przelew: rozgałęzia się według metody, aby mielenie i blend pasowały do tego, jak naprawdę parzą kawę.",
      },
      {
        title: "Onboarding subskrypcji",
        body: "Uruchom quiz na początku lejka, poleć blend startowy i zaproponuj subskrybuj i oszczędzaj na stronie wyników.",
      },
      {
        title: "Wykrywanie prezentu lub zestawu próbnego",
        body: "Pomaga kupującym prezenty wybrać zestaw próbny lub prezentowy bez znajomości dokładnego gustu obdarowanego.",
      },
    ],
    howItHelps: [
      "Profil smaku to świetny powód, by poprosić o e-mail. Kupujący chętnie dzielą się preferencjami wypału i parzenia, aby dostać rekomendację, co zapełnia Twoją listę presegmentowanymi subskrybentami.",
      "Strona wyników finalizuje sprzedaż. Poleca pasujący blend, pokazuje ofertę subskrybuj i oszczędzaj połączoną z ReCharge i pozwala kupującym dodać do koszyka bez wychodzenia z quizu.",
      "Preferencje stają się trwałymi segmentami. Synchronizacja tagów wypału i metody parzenia z Klaviyo oznacza, że każda przyszła kampania może inaczej przemawiać do pijącego espresso z ciemnego wypału niż do tego, kto woli pour-over z jasnego wypału.",
    ],
    demo: {
      label: "Wypróbuj quiz kawowy",
      href: "https://productrecommendationquiz.com/pages/coffee-quiz?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_coffee",
      blurb: "Działający na żywo quiz kawowy z dopasowaniem po guście w naszym sklepie demo.",
    },
    faqs: [
      {
        question: "Czy quiz kawowy może polecić subskrypcję?",
        answer:
          "Tak. Przechwyć e-mail na początku, poleć blend startowy i skieruj stronę wyników do oferty subskrybuj i oszczędzaj połączonej z ReCharge.",
      },
      {
        question: "Czy dopasowuje po metodzie parzenia?",
        answer:
          "Tak. Rozgałęzia się według metody parzenia, aby mielenie i blend pasowały konkretnie do pijących espresso, pour-over, z prasy francuskiej lub przelewu.",
      },
      {
        question: "Czy powiększy moją listę e-mailową?",
        answer:
          "Tak. Profil smaku to solidny powód, by kupujący podzielili się e-mailem, a odpowiedzi synchronizują się z Klaviyo presegmentowane według preferencji wypału i parzenia.",
      },
      {
        question: "Czy działa dla herbaty lub innych napojów?",
        answer:
          "Tak. To samo podejście profilu smaku działa dla herbaty, wina, alkoholi i każdego katalogu rządzącego się gustem.",
      },
    ],
    related: [
      { label: "Quiz kreatora pakietów", href: "/solutions/bundle-builder/" },
      { label: "Quiz wyszukiwania prezentów", href: "/solutions/gift-finder/" },
      { label: "Szablony quizu", href: "/templates/" },
      { label: "Quiz sprzedaży prowadzonej", href: "/guided-selling-quiz/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  fitness: {
    slug: "fitness",
    type: "vertical",
    name: "Fitness i odżywianie",
    chip: "Branża",
    title: "Quiz fitnessu dla sprzętu, odzieży i programów",
    description:
      "Quiz fitnessu oparty na celach, który poleca odpowiedni sprzęt, odzież lub program z Twojego katalogu. Darmowy plan, kreator z AI, gotowy na Klaviyo.",
    h1: "Quizy fitnessu zbudowane wokół celu kupującego",
    heroSubtitle:
      "Siła, wytrzymałość, utrata wagi, regeneracja: quiz fitnessu zamienia cel w odpowiedni sprzęt, odzież, suplementy lub program.",
    intro: [
      "Osoby kupujące fitness zaczynają od celu i stylu treningu, a nie od produktu. Quiz oparty na celach pyta, do czego dążą, jaki mają poziom doświadczenia i jak trenują, a następnie poleca pasujący sprzęt, odzież lub program.",
      "RevenueHunt buduje lejek od początku do końca: poleca odpowiednie produkty z Twojego katalogu, przechwytuje cel i poziom kupującego jako zero-party data i prowadzi follow-up przez Klaviyo z treściami i ofertami pasującymi do tego, na co trenują.",
    ],
    quizTypes: [
      {
        title: "Wykrywanie oparte na celach",
        body: "Siła, wytrzymałość, mobilność lub utrata wagi: każdy cel dodaje punkty pasującemu sprzętowi, odzieży lub suplementom.",
      },
      {
        title: "Dopasowanie po poziomie doświadczenia",
        body: "Rozgałęzia się według początkującego, średniozaawansowanego lub zaawansowanego, aby rekomendacje pasowały do tego, gdzie naprawdę jest kupujący.",
      },
      {
        title: "Wykrywanie programu lub planu",
        body: "Poleca odpowiedni program treningowy lub poziom coachingu na podstawie celu, grafiku i dostępu do sprzętu.",
      },
      {
        title: "Kreator zestawu lub pakietu",
        body: "Komponuje kompletny zestaw (odzież plus sprzęt plus suplement) za pomocą recommendation slots dla wyższej średniej wartości zamówienia.",
      },
    ],
    howItHelps: [
      "Cel i poziom doświadczenia to dwa pytania, które zmieniają wszystko. Zadanie ich na początku oznacza, że początkujący pracujący nad mobilnością nigdy nie zobaczy zaawansowanego produktu siłowego jako swojego głównego wyniku.",
      "Kompletny zestaw przewyższa pojedynczy produkt. Recommendation slots pozwalają zwrócić odzież, sprzęt i suplement razem, co podnosi średnią wartość zamówienia, nie będąc nachalnym.",
      "Cel, który przechwytujesz, napędza wszystko po sprzedaży. Synchronizacja tagów celu i poziomu z Klaviyo pozwala wysyłać treści treningowe i przypomnienia o uzupełnieniu zapasów pasujące do realnego programu każdego klienta.",
    ],
    faqs: [
      {
        question: "Czy quiz fitnessu może polecić program, a nie tylko produkty?",
        answer:
          "Tak. Powiąż odpowiedzi z programem treningowym lub poziomem coachingu tak samo, jak wiążesz produkty, a strona wyników może polecić odpowiedni plan na podstawie celu i grafiku.",
      },
      {
        question: "Czy może skomponować kompletny zestaw w jednym wyniku?",
        answer:
          "Tak. Recommendation slots rezerwują miejsce na każdą rolę (odzież, sprzęt, suplement), aby kupujący otrzymali kompletny zestaw z opcją dodania całości do koszyka.",
      },
      {
        question: "Jak personalizuje dla początkujących i zaawansowanych?",
        answer:
          "Rozgałęzia się logiką warunkową według poziomu doświadczenia, dzięki czemu początkujący i zaawansowani sportowcy widzą różne pytania i różne rekomendacje.",
      },
      {
        question: "Czy mogę prowadzić follow-up e-mailowy według celów?",
        answer:
          "Tak. Cele i poziom synchronizują się z Klaviyo, Mailchimp, Omnisend i innymi jako customer tags do follow-upu e-mailowego pasującego do celu.",
      },
    ],
    related: [
      { label: "Quiz suplementów", href: "/solutions/supplements/" },
      { label: "Quiz kreatora pakietów", href: "/solutions/bundle-builder/" },
      { label: "Szablony quizu", href: "/templates/" },
      { label: "Quiz sprzedaży prowadzonej", href: "/guided-selling-quiz/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "pet-products": {
    slug: "pet-products",
    type: "vertical",
    name: "Produkty dla zwierząt",
    chip: "Branża",
    title: "Quiz produktów dla zwierząt dla Twojego sklepu",
    description:
      "Quiz dla zwierząt, który poleca karmę, suplementy lub akcesoria według gatunku, rasy, wieku i alergii. Wykluczenia zarządzają dietą. Darmowy start.",
    h1: "Quizy dla zwierząt, które łączą produkty z każdym zwierzakiem",
    heroSubtitle:
      "Gatunek, rasa, wiek, aktywność, alergie: quiz dla zwierząt zamienia te szczegóły w odpowiednią karmę, suplement lub akcesorium i respektuje każde ograniczenie dietetyczne.",
    intro: [
      "Właściciele zwierząt kupują dla konkretnego zwierzaka, a nie dla kategorii, a odpowiedni produkt zależy od gatunku, wielkości rasy, wieku i alergii. Quiz dla zwierząt zbiera te szczegóły raz i poleca produkty, które pasują we wszystkich wymiarach jednocześnie.",
      "RevenueHunt zajmuje się trudną częścią: wykluczenia czysto stosują reguły alergii i diety, strona wyników poleca odpowiednią formułę lub zestaw, a e-mail z wynikami podsumowuje rekomendację dla tych, którzy nie kupują od razu.",
    ],
    quizTypes: [
      {
        title: "Wykrywanie karmy dla zwierząt",
        body: "Gatunek, wielkość rasy, wiek i poziom aktywności przypisują się do odpowiedniej formuły, z alergiami zarządzanymi przez wykluczenia.",
      },
      {
        title: "Dopasowanie suplementu lub zdrowia",
        body: "Poleca wsparcie dla stawów, skóry lub trawienia na podstawie wieku i zadeklarowanych potrzeb.",
      },
      {
        title: "Wykrywanie akcesoriów i sprzętu",
        body: "Łączy szelki, legowiska lub zabawki z wielkością rasy i zachowaniem, aby właściciele dobrze wybierali za pierwszym razem.",
      },
      {
        title: "Zestaw startowy dla nowych właścicieli",
        body: "Komponuje kompletny zestaw startowy dla nowych właścicieli zwierząt za pomocą recommendation slots.",
      },
    ],
    howItHelps: [
      "Alergie to sztywne ograniczenie, a wykluczenia stosują je perfekcyjnie. Zaznaczenie alergii na kurczaka usuwa z wyników wszystkie formuły na bazie kurczaka, nawet te, które dobrze punktowały według rasy i wieku.",
      "Customer tag taki jak właściciel-małego-psa to złoto dla retencji. Synchronizacja z Klaviyo pozwala wysyłać treści istotne dla rasy, przypomnienia o uzupełnieniu zapasów i oferty, które naprawdę pasują do zwierzaka.",
      "E-maile z wynikami łapią kupujących, którzy się odbijają. Właściciele często robią research przed zakupem, więc automatyczny e-mail podsumowujący rekomendację sprowadza ich z powrotem, by dokończyli zakup.",
    ],
    demo: {
      label: "Wypróbuj wykrywanie karmy dla psa",
      href: "https://productrecommendationquiz.com/pages/dog-food?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_pet_products",
      blurb: "Działające na żywo wieloatrybutowe wykrywanie karmy dla psa w naszym sklepie demo.",
    },
    faqs: [
      {
        question: "Jak quiz dla zwierząt zarządza alergiami?",
        answer:
          "Za pomocą wykluczeń. Powiązanie odpowiedzi o alergii z listą wykluczeń usuwa z wyników wszystkie kolidujące produkty, niezależnie od tego, jak dobrze pasowały przy innych pytaniach.",
      },
      {
        question: "Czy może dopasować po rasie i wieku?",
        answer:
          "Tak. Każda odpowiedź (gatunek, wielkość rasy, wiek, poziom aktywności) dodaje punkty pasującym produktom, dzięki czemu rekomendacje pasują do konkretnego zwierzaka.",
      },
      {
        question: "Czy mogę wysłać rekomendację e-mailem, jeśli nie kupią?",
        answer:
          "Tak. E-maile z wynikami automatycznie podsumowują rekomendację, co jest przydatne dla właścicieli, którzy robią research przed zakupem.",
      },
      {
        question: "Czy segmentuje klientów pod marketing?",
        answer:
          "Tak. Customer tags takie jak właściciel-małego-psa synchronizują się z Klaviyo i innymi narzędziami do ukierunkowanych, istotnych dla zwierzaka kampanii.",
      },
    ],
    related: [
      { label: "Quiz kreatora pakietów", href: "/solutions/bundle-builder/" },
      { label: "Quiz wyszukiwania produktów", href: "/product-finder-quiz/" },
      { label: "Szablony quizu", href: "/templates/" },
      { label: "Quiz dla WooCommerce", href: "/product-recommendation-quiz-woocommerce/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  cbd: {
    slug: "cbd",
    type: "vertical",
    name: "CBD i wellness",
    chip: "Branża",
    title: "Quiz wyszukiwania produktów CBD dla Twojego sklepu",
    description:
      "Quiz CBD, który prowadzi kupujących do odpowiedniej formy i mocy na podstawie celu i doświadczenia. Edukuje, sprzedając. Darmowy plan, wieloplatformowy.",
    h1: "Quizy CBD, które prowadzą kupujących do odpowiedniej formy",
    heroSubtitle:
      "Forma, moc i cel mylą większość osób kupujących CBD. Quiz uczy, sprzedając, i poleca odpowiedni produkt z pewnością.",
    intro: [
      "CBD i wellness to kategorie, w których większość kupujących naprawdę nie wie, co kupić: olejek czy żelka, jaka moc, na jaki cel. Quiz zamienia tę niepewność w jasną rekomendację, pytając o cel, poziom doświadczenia i preferencję formy.",
      "RevenueHunt jest stworzony dla kupujących po raz pierwszy w kategorii takich jak ci. Quiz edukuje, pytając, poleca odpowiednią formę i moc z Twojego katalogu i przechwytuje cele jako zero-party data, które posiadasz i do których możesz prowadzić marketing.",
    ],
    quizTypes: [
      {
        title: "Wykrywanie oparte na celach",
        body: "Sen, spokój, regeneracja lub koncentracja: każdy cel dodaje punkty pasującym produktom i mocom.",
      },
      {
        title: "Dopasowanie formy i mocy",
        body: "Rozgałęzia się według doświadczenia i preferencji formy (olejek, żelka, produkt do stosowania miejscowego, kapsułka), aby początkujący otrzymali przystępny punkt startowy.",
      },
      {
        title: "Kreator rutyny lub kuracji",
        body: "Poleca kombinację dzienną i nocną za pomocą recommendation slots dla pełnej rutyny.",
      },
      {
        title: "Quiz najpierw edukacyjny",
        body: "Wykorzystaj slajdy z treścią między pytaniami, by uczyć podstaw, co buduje zaufanie i pewność przed rekomendacją.",
      },
    ],
    howItHelps: [
      "Kupujący po raz pierwszy w kategorii potrzebują nauki, a nie tylko filtrowania. Slajdy z treścią pozwalają wyjaśnić moc i formę prostym językiem w miarę postępów kupującego, aby rekomendacja docierała z pewnością.",
      "Dopasowanie poziomu doświadczenia do mocy chroni doświadczenie. Nowicjusz otrzymuje przystępny punkt startowy zamiast najmocniejszego produktu, co oznacza mniej zwrotów z rozczarowania.",
      "Cele przechwycone w quizie stają się Twoimi najprzydatniejszymi segmentami. Synchronizacja goal:sleep lub goal:recovery z Klaviyo napędza e-mailing pasujący do tego, co każdy klient naprawdę próbuje rozwiązać.",
    ],
    demo: {
      label: "Wypróbuj wyszukiwanie produktów CBD",
      href: "https://productrecommendationquiz.com/pages/cbd-product-finder?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_cbd",
      blurb: "Działające na żywo wyszukiwanie produktów CBD w naszym sklepie demo.",
    },
    faqs: [
      {
        question: "Czy quiz CBD może polecić odpowiednią moc?",
        answer:
          "Tak. Rozgałęzia się według poziomu doświadczenia i celu, a następnie wiąże każdą ścieżkę z właściwą mocą, dzięki czemu początkujący i doświadczeni użytkownicy otrzymują różne rekomendacje.",
      },
      {
        question: "Czy quiz może edukować kupujących w miarę postępów?",
        answer:
          "Tak. Slajdy z treścią pokazują tekst między pytaniami bez wymagania żadnych danych, dzięki czemu możesz uczyć podstaw formy i mocy w sposób zintegrowany.",
      },
      {
        question: "Czy działa dla szerszych produktów wellness?",
        answer:
          "Tak. To samo podejście celu i formy działa dla adaptogenów, grzybów i innych kategorii wellness, gdzie kupujący potrzebują wskazówek.",
      },
      {
        question: "Jakie platformy obsługuje?",
        answer:
          "Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace oraz jako niezależny hostowany quiz.",
      },
    ],
    related: [
      { label: "Quiz suplementów", href: "/solutions/supplements/" },
      { label: "Quiz kreatora rutyny", href: "/solutions/routine-builder/" },
      { label: "Quiz wyszukiwania produktów", href: "/product-finder-quiz/" },
      { label: "Szablony quizu", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  jewelry: {
    slug: "jewelry",
    type: "vertical",
    name: "Biżuteria i akcesoria",
    chip: "Branża",
    title: "Quiz biżuterii: pomóż znaleźć właściwy element",
    description:
      "Quiz biżuterii, który łączy styl, metal i okazję z odpowiednim elementem oraz pomaga kupującym prezenty wybierać z pewnością. Darmowy start.",
    h1: "Quizy biżuterii, które łączą styl z odpowiednim elementem",
    heroSubtitle:
      "Metal, styl, okazja, budżet: quiz biżuterii prowadzi kupujących i kupujących prezenty do elementu, który pokochają, zamiast nieskończonej siatki.",
    intro: [
      "Biżuteria jest emocjonalna i często bywa prezentem, co utrudnia jej kupowanie z siatki. Quiz pyta o styl, preferencję metalu, okazję i budżet, a następnie poleca pasujące elementy, zamieniając przeglądanie w pewny wybór.",
      "RevenueHunt poleca realne elementy i warianty z Twojego katalogu, zarządza kupującymi prezenty bez znajomości gustu obdarowanego i przechwytuje preferencje do follow-upu. Strona wyników konwertuje z bezpośrednim dodawaniem do koszyka i opcjonalną wiadomością prezentową.",
    ],
    quizTypes: [
      {
        title: "Wykrywanie stylu",
        body: "Pytania o estetykę, metal i okazję wydobywają elementy pasujące do gustu kupującego.",
      },
      {
        title: "Wyszukiwarka prezentów",
        body: "Pyta o obdarowanego i okazję, a następnie poleca wyselekcjonowany wybór lub zestaw prezentowy dla tych, którzy kupują bez znajomości katalogu.",
      },
      {
        title: "Dopasowanie świadome budżetu",
        body: "Włącza budżet do rekomendacji, aby każdy kupujący widział elementy w swoim przedziale.",
      },
      {
        title: "Wykrywanie zaręczyn lub ważnego momentu",
        body: "Prowadzi zakupy wysokiej rozwagi, takie jak elementy na zaręczyny lub rocznicę, ze skoncentrowanym i uspokajającym przepływem.",
      },
    ],
    howItHelps: [
      "Kupujący prezenty to ogromna część ruchu w biżuterii i najmniej pewni tego, czego chcą. Quiz, który pyta o obdarowanego zamiast o katalog, zamienia tę niepewność w pewny zakup prezentu.",
      "Budżet to pytanie, które większość siatek ignoruje. Włączenie go do rekomendacji oznacza, że kupujący widzą elementy, na które naprawdę mogą sobie pozwolić, co ogranicza odbicia i buduje zaufanie.",
      "Preferencje i okazje synchronizują się z Twoim narzędziem do e-maili, dzięki czemu możesz prowadzić follow-up wokół rocznic, uzupełnień i pasujących elementów z kampaniami, które wydają się osobiste.",
    ],
    faqs: [
      {
        question: "Czy quiz biżuterii może pomóc kupującym prezenty?",
        answer:
          "Tak. Pyta o obdarowanego i okazję zamiast o katalog, a następnie poleca wyselekcjonowany wybór lub zestaw prezentowy, co jest idealne dla tych, którzy kupują, nie wiedząc dokładnie, czego chcą.",
      },
      {
        question: "Czy może uwzględnić budżet?",
        answer:
          "Tak. Dodaj pytanie o budżet i waż lub filtruj rekomendacje, aby kupujący widzieli tylko elementy w swoim przedziale.",
      },
      {
        question: "Czy obsługuje warianty, takie jak metal i rozmiar?",
        answer:
          "Tak. Odpowiedzi można powiązać z konkretnymi wariantami, dzięki czemu strona wyników pokazuje odpowiedni metal i rozmiar z opcją dodania do koszyka.",
      },
      {
        question: "Czy mogę przechwytywać leady do follow-upu?",
        answer:
          "Tak. Quiz przechwytuje e-mail i preferencje jako zero-party data oraz synchronizuje się z Klaviyo i innymi narzędziami do follow-upu opartego na okazji.",
      },
    ],
    related: [
      { label: "Quiz wyszukiwania prezentów", href: "/solutions/gift-finder/" },
      { label: "Quiz mody i odzieży", href: "/solutions/fashion/" },
      { label: "Szablony quizu", href: "/templates/" },
      { label: "Quiz wyszukiwania produktów", href: "/product-finder-quiz/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "home-goods": {
    slug: "home-goods",
    type: "vertical",
    name: "Dom i dekoracje",
    chip: "Branża",
    title: "Quiz produktów dla domu i dekoracji dla Twojego sklepu",
    description:
      "Quiz dla domu i dekoracji, który łączy meble i dekoracje z przestrzenią i stylem kupującego. Ogranicza zwroty artykułów gabarytowych. Darmowy start.",
    h1: "Quizy dla domu, które łączą produkty z przestrzenią",
    heroSubtitle:
      "Styl, pomieszczenie, rozmiar i budżet: quiz dla domu i dekoracji prowadzi kupujących do elementów pasujących do ich przestrzeni, co liczy się najbardziej, gdy artykuły są gabarytowe.",
    intro: [
      "Dom i dekoracje to kategorie wysokiej rozwagi i drogie w zwrocie. Kupujący muszą wiedzieć, że element pasuje do ich przestrzeni i stylu, zanim się zdecydują. Quiz pyta o pomieszczenie, styl, wymiary i budżet, a następnie poleca elementy, które działają.",
      "RevenueHunt poleca realne produkty z Twojego katalogu, komponuje skoordynowane zestawy za pomocą recommendation slots i przechwytuje preferencje stylu do follow-upu, dzięki czemu ten, kto raz kupuje mebel, staje się powracającym klientem dekoracji.",
    ],
    quizTypes: [
      {
        title: "Wykrywanie stylu",
        body: "Pytania o estetykę i pomieszczenie wydobywają meble i dekoracje pasujące do gustu kupującego.",
      },
      {
        title: "Dopasowanie po pomieszczeniu lub przestrzeni",
        body: "Włącza typ pomieszczenia i wymiary do rekomendacji, aby elementy naprawdę pasowały do przestrzeni.",
      },
      {
        title: "Kreator skoordynowanego zestawu",
        body: "Komponuje pasujący do siebie zestaw (sofa plus dywan plus oświetlenie) za pomocą recommendation slots dla kompletnego looku.",
      },
      {
        title: "Wykrywanie świadome budżetu",
        body: "Włącza budżet, aby kupujący widzieli elementy w swoim przedziale i rzadziej się odbijali.",
      },
    ],
    howItHelps: [
      "Dopasowanie i skala napędzają zwroty artykułów gabarytowych. Pytanie o wymiary pomieszczenia i polecanie elementów, które działają, ogranicza kosztowne błędy prowadzące do zwrotów mebli.",
      "Skoordynowany zestaw naturalnie podnosi wartość zamówienia. Recommendation slots pozwalają zasugerować kompletny look zamiast pojedynczego elementu, co perfekcyjnie pasuje do zakupu dekoracji.",
      "Preferencje stylu są trwałe. Przechwycenie estetyki kupującego i zsynchronizowanie jej z Twoim narzędziem do e-maili oznacza, że kampanie sezonowe i nowych kolekcji mogą być dopasowane do gustu zamiast wysyłane do wszystkich jednakowo.",
    ],
    faqs: [
      {
        question: "Czy quiz dla domu może polecić skoordynowany zestaw?",
        answer:
          "Tak. Recommendation slots rezerwują miejsce na każdą rolę (siedzisko, dywan, oświetlenie), dzięki czemu strona wyników zwraca kompletny, pasujący do siebie zestaw z opcją dodania do koszyka.",
      },
      {
        question: "Czy może uwzględnić wielkość pomieszczenia?",
        answer:
          "Tak. Dodaj pytania o pomieszczenie i wymiary oraz powiąż odpowiedzi z pasującymi elementami, co jest kluczowe dla ograniczenia zwrotów dużych artykułów.",
      },
      {
        question: "Czy pomaga z budżetem?",
        answer:
          "Tak. Włącz pytanie o budżet, aby rekomendacje pozostawały w przedziale kupującego.",
      },
      {
        question: "Na jakich platformach działa?",
        answer:
          "Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace oraz jako niezależny hostowany quiz.",
      },
    ],
    related: [
      { label: "Quiz kreatora pakietów", href: "/solutions/bundle-builder/" },
      { label: "Quiz wyszukiwania prezentów", href: "/solutions/gift-finder/" },
      { label: "Szablony quizu", href: "/templates/" },
      { label: "Quiz sprzedaży prowadzonej", href: "/guided-selling-quiz/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  // ----------------------------------------------------------------- use-cases
  "gift-finder": {
    slug: "gift-finder",
    type: "use-case",
    name: "Wyszukiwarka prezentów",
    chip: "Typ quizu",
    title: "Quiz wyszukiwania prezentów dla Twojego sklepu online",
    description:
      "Quiz wyszukiwania prezentów, który pyta o obdarowanego i zwraca wyselekcjonowany prezent, podnosząc AOV dla tych, którzy kupują bez znajomości katalogu. Darmowy start.",
    h1: "Quizy wyszukiwania prezentów, które zamieniają zgadywanie w sprzedaż",
    heroSubtitle:
      "Kupujący prezenty nie mają zdania o Twoim katalogu i sporo lęku przed złym wyborem. Wyszukiwarka prezentów pyta o obdarowanego i poleca idealny prezent.",
    intro: [
      "Kupujący prezenty to najłatwiejsi do stracenia i najłatwiejsi do pomocy kupujący. Nie znają Twoich produktów i martwią się złym wyborem. Quiz wyszukiwania prezentów zadaje od trzech do pięciu pytań o obdarowanego (relacja, wiek, zainteresowania, budżet) i zwraca wyselekcjonowany prezent, który mogą kupić z pewnością.",
      "RevenueHunt czyni z wyszukiwarki prezentów jeden z najlepiej konwertujących typów quizu. Grupuje kilka produktów w jeden wynik prezentowy dla wyższej wartości zamówienia, dodaje wiadomość prezentową i zniżkę na stronie wyników oraz przechwytuje e-mail kupującego na następną okazję.",
    ],
    quizTypes: [
      {
        title: "Wykrywanie skoncentrowane na obdarowanym",
        body: "Pyta o obdarowanego (relacja, wiek, zainteresowania) zamiast o katalog, aby ci, którzy nic nie wiedzą o Twoich produktach, mimo to otrzymali świetne dopasowanie.",
      },
      {
        title: "Wykrywanie okazji",
        body: "Rozgałęzia się według okazji (urodziny, święta, rocznica), aby rekomendacja pasowała do momentu.",
      },
      {
        title: "Kreator pakietu prezentowego",
        body: "Łączy kilka produktów w jeden wyselekcjonowany zestaw prezentowy za pomocą recommendation slots, co podnosi średnią wartość zamówienia.",
      },
    ],
    howItHelps: [
      "Sztuczka polega na pytaniu o obdarowanego, a nie o katalog. Kupujący, który potrafi odpowiedzieć na trzy pytania o swoją siostrę, otrzymuje pewną rekomendację bez potrzeby rozumienia kiedykolwiek Twojej gamy produktów.",
      "Pakiety prezentowe podnoszą wartość zamówienia bez nacisku. Zwrócenie wyselekcjonowanego zestawu jako jednego wyniku wydaje się pomocne, a nie nachalne, a kupujący chętnie nabywają cały zestaw.",
      "Każdy kupujący prezenty to przyszły klient. Przechwycenie jego e-maila i okazji pozwala sprowadzić go z powrotem przy następnych urodzinach lub świętach z przewagą w rekomendacji.",
    ],
    faqs: [
      {
        question: "Jak działa quiz wyszukiwania prezentów?",
        answer:
          "Zadaje od trzech do pięciu pytań o obdarowanego i okazję, a następnie poleca wyselekcjonowany prezent lub zestaw prezentowy, dzięki czemu ci, którzy nie znają Twojego katalogu, mimo to mogą wybierać z pewnością.",
      },
      {
        question: "Czy może zgrupować produkty w jeden prezent?",
        answer:
          "Tak. Recommendation slots łączą kilka produktów w jeden wyselekcjonowany zestaw prezentowy, co podnosi średnią wartość zamówienia.",
      },
      {
        question: "Czy mogę dodać zniżkę lub wiadomość prezentową?",
        answer:
          "Tak. Strona wyników obsługuje bloki kodu rabatowego i treści, które możesz pokazać na podstawie odpowiedzi kupującego.",
      },
      {
        question: "Czy przechwytuje leady na przyszłe okazje?",
        answer:
          "Tak. Quiz przechwytuje e-mail i okazję, które synchronizują się z Klaviyo i innymi narzędziami, abyś mógł reaktywować ich przed następnym momentem prezentowym.",
      },
    ],
    related: [
      { label: "Quiz biżuterii", href: "/solutions/jewelry/" },
      { label: "Quiz urody i kosmetyków", href: "/solutions/beauty/" },
      { label: "Quiz wyszukiwania produktów", href: "/product-finder-quiz/" },
      { label: "Szablony quizu", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "size-finder": {
    slug: "size-finder",
    type: "use-case",
    name: "Wykrywanie rozmiaru i dopasowania",
    chip: "Typ quizu",
    title: "Quiz wykrywania rozmiaru i dopasowania dla ecommerce",
    description:
      "Quiz wykrywania rozmiaru i dopasowania, który poleca odpowiedni rozmiar lub kompatybilny produkt i ogranicza zwroty. Rozwiązuje dopasowanie wieloatrybutowe. Darmowy start.",
    h1: "Quizy wykrywania rozmiaru i dopasowania, które ograniczają zwroty",
    heroSubtitle:
      "Zły rozmiar to zwrot numer jeden. Wykrywanie dopasowania zadaje właściwe pytania i poleca rozmiar lub kompatybilny produkt, który pasuje.",
    intro: [
      "Dopasowanie i kompatybilność to miejsca, gdzie ecommerce traci pieniądze: zwroty z powodu złego rozmiaru w odzieży i obuwiu oraz zwroty z powodu złego dopasowania we wszystkim, co musi pasować do czegoś, co kupujący już posiada. Quiz wykrywania dopasowania rozwiązuje te ograniczenia przed zamówieniem, a nie po nim.",
      "RevenueHunt czysto zarządza dopasowaniem wieloatrybutowym. Wiąż odpowiedzi z konkretnymi wariantami i używaj wykluczeń dla sztywnych ograniczeń, dzięki czemu wymiary i wymagania kupującego rozwiązują się w odpowiedni rozmiar lub kompatybilny produkt na stronie wyników.",
    ],
    quizTypes: [
      {
        title: "Wykrywanie rozmiaru",
        body: "Pytania o wymiary i preferencję dopasowania zawężają wybór do odpowiedniego rozmiaru, czyli najczęstszej przyczyny zwrotów.",
      },
      {
        title: "Wykrywanie kompatybilności",
        body: "Rozwiązuje ograniczenia wieloatrybutowe (model urządzenia, typ montażu, akcesorium) aż do jedynego pasującego produktu.",
      },
      {
        title: "Dopasowanie po preferencji dopasowania",
        body: "Rozgałęzia się według preferencji dopasowania (slim, regular, luźny), aby rekomendacja pasowała do tego, jak kupujący lubi to nosić.",
      },
    ],
    howItHelps: [
      "Zwroty z powodu złego rozmiaru to największy koszt, który adresuje wykrywanie dopasowania. Pytanie o wymiary i preferencję dopasowania od początku oraz wiązanie ich z konkretnymi wariantami prowadzi kupujących do rozmiaru, który zatrzymają.",
      "Kompatybilność to nic innego jak ograniczenia, a wykluczenia zarządzają nimi perfekcyjnie. Kupujący, który zadeklaruje swoje urządzenie i wymagania, otrzymuje dokładnie kompatybilny produkt, z usuniętym wszystkim, co niekompatybilne.",
      "Zaufanie konwertuje. Kiedy quiz mówi kupującemu to jest Twój rozmiar z jasnym uzasadnieniem, dodaje do koszyka zamiast odbijać się na tabelę rozmiarów i nigdy nie wracać.",
    ],
    demo: {
      label: "Wypróbuj wykrywanie kompatybilności",
      href: "https://productrecommendationquiz.com/pages/bicycle-quiz?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_size_finder",
      blurb: "Działające na żywo wykrywanie w stylu kompatybilności w naszym sklepie demo, które rozwiązuje techniczne dopasowanie.",
    },
    faqs: [
      {
        question: "Czy wykrywanie dopasowania może ograniczyć zwroty z powodu złego rozmiaru?",
        answer:
          "Tak. Pytanie o wymiary i preferencję dopasowania oraz wiązanie odpowiedzi z konkretnymi wariantami poleca rozmiar, który kupujący najprawdopodobniej zatrzyma, co bezpośrednio ogranicza zwroty.",
      },
      {
        question: "Jak zarządza kompatybilnością?",
        answer:
          "Za pomocą wykluczeń i wiązania wariantów. Kupujący deklaruje swoje ograniczenia (urządzenie, montaż, akcesorium), a quiz zwraca tylko kompatybilny produkt, usuwając wszystko, co nie pasuje.",
      },
      {
        question: "Czy działa dla obuwia i odzieży?",
        answer:
          "Tak. Wykrywanie rozmiaru i dopasowania jest jednym z najmocniejszych zastosowań dla odzieży, obuwia i wszystkiego, gdzie dopasowanie napędza zwroty.",
      },
      {
        question: "Czy wyniki mogą wyjaśnić rekomendację?",
        answer:
          "Tak. Bloki treści na stronie wyników mogą pokazywać konkretny tekst na podstawie odpowiedzi, dzięki czemu możesz wyjaśnić, dlaczego dany rozmiar lub produkt jest odpowiednim dopasowaniem.",
      },
    ],
    related: [
      { label: "Quiz mody i odzieży", href: "/solutions/fashion/" },
      { label: "Quiz wyszukiwania produktów", href: "/product-finder-quiz/" },
      { label: "Szablony quizu", href: "/templates/" },
      { label: "Quiz dla Shopify", href: "/product-recommendation-quiz-shopify/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "shade-finder": {
    slug: "shade-finder",
    type: "use-case",
    name: "Dopasowanie odcienia",
    chip: "Typ quizu",
    title: "Quiz wykrywania odcienia: dopasuj podkład i kolor",
    description:
      "Quiz wykrywania odcienia, który dopasowuje podkład, korektor lub kolor według podtonu i głębi, z odpowiedziami obrazkowymi. Ogranicza zwroty. Darmowy start.",
    h1: "Quizy wykrywania odcienia, które dopasowują kolor z pewnością",
    heroSubtitle:
      "Kupowanie makijażu online oznacza zgadywanie swojego odcienia. Wykrywanie odcienia pyta o podton i głębię i zwraca dokładne dopasowanie, co ogranicza zwroty.",
    intro: [
      "Dopasowanie odcienia to pytanie najwyższego ryzyka w ecommerce urody. Pomyl się, a produkt wraca. Quiz wykrywania odcienia pyta o podton, głębię, krycie i wykończenie, a następnie poleca dokładny odcień z Twojego katalogu z odpowiedziami obrazkowymi, które są szybkie na telefonie.",
      "RevenueHunt wiąże każdą odpowiedź z konkretnymi wariantami odcienia i wyklucza resztę, dzięki czemu strona wyników pokazuje pewne dopasowanie zamiast ściany próbek. Profil odcienia kupującego synchronizuje się z Twoim narzędziem do e-maili pod uzupełnienia i pasujące produkty.",
    ],
    quizTypes: [
      {
        title: "Dopasowanie odcienia podkładu",
        body: "Pytania o podton i głębię przypisują się do dokładnego odcienia podkładu lub korektora, z odpowiedziami obrazkowymi dla większej szybkości.",
      },
      {
        title: "Dopasowanie ust lub koloru",
        body: "Łączy kolor ust, różu lub oczu z karnacją i preferencją kupującego.",
      },
      {
        title: "Dopasowanie koloru włosów",
        body: "Prowadzi koloryzację włosów w domu na podstawie obecnego odcienia, docelowego odcienia i podtonu do odpowiedniej formuły.",
      },
    ],
    howItHelps: [
      "Odpowiedzi obrazkowe wspierają pytania o odcień. Pozwolenie kupującym dotknąć obrazka podtonu lub wykończenia przewyższa proszenie ich o opisanie tego i utrzymuje wysokie ukończenie na ekranach telefonów, gdzie sprzedaje się uroda.",
      "Wykluczenia zamieniają ścianę próbek w jedną odpowiedź. Powiązanie podtonu i głębi z konkretnymi wariantami oraz wykluczenie reszty oznacza, że strona wyników pokazuje dopasowanie, a nie całą gamę.",
      "Odcień to profil, który warto zachować. Synchronizacja pasującego odcienia kupującego z Klaviyo pozwala prowadzić marketing uzupełnień i skoordynowanych produktów do dokładnie właściwych osób.",
    ],
    demo: {
      label: "Wypróbuj quiz dopasowania odcienia",
      href: "https://productrecommendationquiz.com/pages/foundation-match?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_shade_finder",
      blurb: "Działający na żywo quiz dopasowania odcienia podkładu oparty na obrazkach w naszym sklepie demo.",
    },
    faqs: [
      {
        question: "Jak wykrywanie odcienia dopasowuje podkład?",
        answer:
          "Pyta o podton, głębię, krycie i wykończenie, wiąże każdą odpowiedź z pasującymi wariantami odcienia i wyklucza resztę. Strona wyników pokazuje dokładne dopasowanie z opcją dodania do koszyka.",
      },
      {
        question: "Czy używa odpowiedzi obrazkowych?",
        answer:
          "Tak. Opcje mogą być klikalnymi obrazkami, co świetnie sprawdza się przy pytaniach o podton i wykończenie oraz poprawia ukończenie na telefonie.",
      },
      {
        question: "Czy może ograniczyć zwroty związane z odcieniem?",
        answer:
          "Tak. Polecanie pewnego dopasowania zamiast ściany próbek prowadzi kupujących do odcienia, który najprawdopodobniej zatrzymają.",
      },
      {
        question: "Czy działa poza podkładem?",
        answer:
          "Tak. To samo podejście dopasowuje kolor ust, różu, kolor oczu i koloryzację włosów w domu.",
      },
    ],
    related: [
      { label: "Quiz urody i kosmetyków", href: "/solutions/beauty/" },
      { label: "Quiz pielęgnacji skóry", href: "/solutions/skincare/" },
      { label: "Dla marek kosmetycznych", href: "/for-beauty-brands/" },
      { label: "Szablony quizu", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "routine-builder": {
    slug: "routine-builder",
    type: "use-case",
    name: "Kreator rutyny",
    chip: "Typ quizu",
    title: "Quiz kreatora rutyny dla pielęgnacji skóry i nie tylko",
    description:
      "Quiz kreatora rutyny, który zwraca kompletną, wielokrokową rutynę, a nie pojedynczy produkt, za pomocą recommendation slots. Podnosi AOV. Darmowy start.",
    h1: "Quizy kreatora rutyny, które sprzedają cały zestaw",
    heroSubtitle:
      "Jeden produkt to sprzedaż. Rutyna to koszyk i nawyk. Kreator rutyny zwraca kompletny, wielokrokowy zestaw szyty na miarę każdego kupującego.",
    intro: [
      "Niektóre produkty kupuje się jako system, a nie pojedynczy artykuł: rutynę pielęgnacji skóry, stack suplementów, kurację do włosów. Quiz kreatora rutyny zwraca cały zestaw, z zarezerwowanym miejscem na każdy krok, dzięki czemu kupujący nabywają kompletną rutynę zamiast jednego produktu.",
      "RevenueHunt robi to za pomocą recommendation slots. Zarezerwuj slot na każdą rolę (żel myjący, kuracja, krem nawilżający, SPF lub cokolwiek potrzebuje Twoja kategoria), a quiz wypełni każdy najlepszym dopasowaniem, a następnie pokaże kompletną rutynę pogrupowaną według kroku z opcją dodania całego zestawu do koszyka.",
    ],
    quizTypes: [
      {
        title: "Rutyna oparta na krokach",
        body: "Zarezerwuj slot na każdy krok i wypełnij go najlepiej pasującym produktem, aby każdy kupujący otrzymał kompletną, spójną rutynę.",
      },
      {
        title: "Kreator stacku",
        body: "Komponuje wieloproduktowy stack (świetny dla suplementów i wellness) z rolą dla każdego produktu.",
      },
      {
        title: "Rutyna dzienna i nocna",
        body: "Zwraca oddzielne rutyny AM i PM z jednego quizu za pomocą logiki wyświetlania na stronie wyników.",
      },
    ],
    howItHelps: [
      "Recommendation slots to różnica między sprzedażą a koszykiem. Zarezerwowanie miejsca na każdy krok oznacza, że strona wyników zwraca kompletną rutynę, co podnosi wartość zamówienia bez wrażenia upsellu.",
      "Grupowanie według kroku sprawia, że rutyna ma sens. Kupujący widzą dokładnie, czego użyć i kiedy, co buduje zaufanie do zakupu oraz nawyk, który sprowadza ich z powrotem.",
      "Rutyna to silnik retencji. Zestaw, który polecasz, mówi Ci, co i kiedy się skończy każdemu klientowi, dzięki czemu Twój follow-up e-mailowy może precyzyjnie synchronizować oferty uzupełnień.",
    ],
    faqs: [
      {
        question: "Jak kreator rutyny zwraca kompletny zestaw?",
        answer:
          "Za pomocą recommendation slots. Każdy slot jest rezerwowany na rolę (na przykład żel myjący, kuracja, krem nawilżający, SPF) i wypełniany najlepiej pasującym produktem, dzięki czemu strona wyników zwraca kompletną rutynę.",
      },
      {
        question: "Czy może pokazać oddzielną rutynę dzienną i nocną?",
        answer:
          "Tak. Wykorzystaj logikę wyświetlania na stronie wyników, aby pokazać rutyny AM i PM lub dowolne grupowanie warunkowe na podstawie odpowiedzi kupującego.",
      },
      {
        question: "Czy podnosi średnią wartość zamówienia?",
        answer:
          "Polecanie kompletnego zestawu zamiast pojedynczego produktu daje kupującym powód, by kupić całą rutynę, co podnosi wartość zamówienia.",
      },
      {
        question: "Jakie kategorie pasują do kreatora rutyny?",
        answer:
          "Pielęgnacja skóry, pielęgnacja włosów, suplementy i każdy katalog, który kupuje się jako wielokrokowy system zamiast pojedynczego artykułu.",
      },
    ],
    related: [
      { label: "Quiz pielęgnacji skóry", href: "/solutions/skincare/" },
      { label: "Quiz suplementów", href: "/solutions/supplements/" },
      { label: "Quiz kreatora pakietów", href: "/solutions/bundle-builder/" },
      { label: "Szablony quizu", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "bundle-builder": {
    slug: "bundle-builder",
    type: "use-case",
    name: "Kreator pakietów",
    chip: "Typ quizu",
    title: "Quiz kreatora pakietów: sprzedawaj wyselekcjonowane zestawy",
    description:
      "Quiz kreatora pakietów, który komponuje wyselekcjonowany zestaw na podstawie odpowiedzi kupującego i podnosi średnią wartość zamówienia. Dodawanie całego pakietu do koszyka. Za darmo.",
    h1: "Quizy kreatora pakietów, które podnoszą wartość zamówienia",
    heroSubtitle:
      "Wyselekcjonowany pakiet konwertuje lepiej niż pojedynczy produkt i generyczny upsell. Kreator pakietów komponuje zestaw na podstawie odpowiedzi każdego kupującego.",
    intro: [
      "Pakiety działają, ale tylko gdy są istotne. Generyczny upsell typu trzy za dwa ignoruje to, czego kupujący naprawdę chce. Quiz kreatora pakietów komponuje wyselekcjonowany zestaw na podstawie odpowiedzi każdego kupującego, dzięki czemu pakiet wydaje się osobisty, a wartość zamówienia przychodzi naturalnie.",
      "RevenueHunt buduje pakiety za pomocą recommendation slots i warunkowych wyników. Zarezerwuj rolę na każdy produkt z zestawu, dopasuj każdy do kupującego i przedstaw kompletny pakiet na stronie wyników z opcją dodania wszystkiego naraz do koszyka.",
    ],
    quizTypes: [
      {
        title: "Kreator wyselekcjonowanego zestawu",
        body: "Zarezerwuj rolę na każdy produkt z pakietu i wypełnij każdy najlepszym dopasowaniem, aby zestaw pasował do kupującego, a nie do katalogu.",
      },
      {
        title: "Wykrywanie zestawu startowego",
        body: "Komponuje kompletny zestaw startowy dla kupujących po raz pierwszy lub nowych w kategorii, którzy chcą pewnego zakupu.",
      },
      {
        title: "Pakiet szyty na miarę",
        body: "Pozwól odpowiedziom napędzać elastyczny pakiet, z logiką wyświetlania, która dodaje lub usuwa artykuły na podstawie wyboru kupującego.",
      },
    ],
    howItHelps: [
      "Istotny pakiet przewyższa generyczny. Dopasowanie każdego artykułu z zestawu do odpowiedzi kupującego oznacza, że pakiet czyta się jak rekomendacja, a nie taktyka rabatowa, i odpowiednio konwertuje.",
      "Jedno dodanie całego zestawu do koszyka eliminuje tarcie. Kupujący nabywają pakiet w jednej akcji zamiast szukać każdego artykułu, co chroni wyższą wartość zamówienia, którą właśnie zbudowałeś.",
      "Bloki rabatowe sprawiają, że pakiet dociera. Pokaż zniżkę na zestaw na stronie wyników powiązaną z konkretną kombinacją, aby oszczędność wydała się zasłużona, a kupujący dokończył zakup.",
    ],
    faqs: [
      {
        question: "Jak działa quiz kreatora pakietów?",
        answer:
          "Rezerwuje rolę na każdy produkt z pakietu, dopasowuje każdy do odpowiedzi kupującego i przedstawia kompletny wyselekcjonowany zestaw na stronie wyników z opcją dodania wszystkiego naraz do koszyka.",
      },
      {
        question: "Czy mogę dodać zniżkę na pakiet?",
        answer:
          "Tak. Strona wyników obsługuje bloki kodu rabatowego, które możesz powiązać z konkretnymi kombinacjami odpowiedzi, dzięki czemu oszczędność na pakiecie pokazuje się w kontekście.",
      },
      {
        question: "Czy podnosi średnią wartość zamówienia?",
        answer:
          "Polecanie istotnego, wyselekcjonowanego zestawu zamiast pojedynczego produktu daje kupującym powód, by kupić więcej, co podnosi wartość zamówienia.",
      },
      {
        question: "Jakie kategorie pasują?",
        answer:
          "Suplementy, uroda, jedzenie i napoje, dom i każdy katalog, gdzie wyselekcjonowany zestaw sprzedaje się lepiej niż pojedynczy artykuł.",
      },
    ],
    related: [
      { label: "Quiz kreatora rutyny", href: "/solutions/routine-builder/" },
      { label: "Quiz wyszukiwania prezentów", href: "/solutions/gift-finder/" },
      { label: "Quiz suplementów", href: "/solutions/supplements/" },
      { label: "Szablony quizu", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },
};
