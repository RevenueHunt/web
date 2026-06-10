import type { GlossaryTerm, GlossaryLink } from "../glossary";

const VERIFIED = "2026-06-07";

export const GLOSSARY_PL: Record<string, GlossaryTerm> = {
  "conversational-commerce": {
    slug: "conversational-commerce",
    term: "Handel konwersacyjny",
    chip: "Koncepcja",
    title: "Czym jest handel konwersacyjny?",
    description:
      "Handel konwersacyjny sprzedaje poprzez dwukierunkowy dialog zamiast statycznej siatki. Oto, co obejmuje, dlaczego działa i jak osiąga to quiz.",
    h1: "Czym jest handel konwersacyjny?",
    shortAnswer:
      "Handel konwersacyjny polega na sprzedawaniu poprzez interaktywną, dwukierunkową rozmowę zamiast statycznej siatki produktów. Kupujący odpowiadają na pytania, a sklep odpowiada spersonalizowanymi rekomendacjami, dokładnie tak, jak robi to dobry sprzedawca w sklepie stacjonarnym.",
    intro: [
      "W sklepie stacjonarnym dobry sprzedawca pyta, czego potrzebujesz, słucha i wskazuje Ci odpowiedni produkt. Online większość sklepów pomija ten krok i zostawia kupujących przed siatką ze wszystkimi produktami, które sprzedaje. Handel konwersacyjny z powrotem stawia dialog w centrum.",
    ],
    sections: [
      {
        heading: "Co liczy się jako handel konwersacyjny",
        body: [
          "Kategoria jest szeroka. Obejmuje chatboty, aplikacje do komunikatorów, czat na żywo, asystentów głosowych i quizy rekomendacji produktów. To, co je łączy, to wymiana zdań: kupujący wnosi informacje, a sklep odpowiada czymś bardziej konkretnym niż generyczna strona katalogu.",
          "Formy różnią się tym, jak bardzo je kontrolujesz. Chatbot z wolnym tekstem może pójść tam, gdzie kupujący napisze, co jest potężne i nieprzewidywalne. Quiz to ustrukturyzowany handel konwersacyjny: każde pytanie i każdą ścieżkę zaprojektowałeś Ty, więc rozmowa pozostaje wierna Twojej marce i zawsze kończy się realnym produktem.",
        ],
      },
      {
        heading: "Dlaczego konwertuje lepiej niż siatka",
        body: [
          "Strona kategorii prosi kupującego, by wykonał pracę: przeczytał każdą opcję, porównał specyfikacje i zgadł, która pasuje. To paraliż decyzyjny i miejsce, w którym wiele koszyków traci się, zanim się zacznie.",
          "Rozmowa wykonuje tę pracę za nich. Sprowadza duży katalog do krótkiej, uzasadnionej rekomendacji i wyjaśnia dlaczego. Kupujący, którzy otrzymują jasną odpowiedź, dodają do koszyka zamiast wychodzić, by porównywać gdzie indziej.",
          "Przechwytuje też preferencje. Każda odpowiedź, którą daje kupujący, to informacja, którą możesz wykorzystać do segmentacji e-maili, personalizacji follow-upu i lepszego merchandisingu później.",
        ],
      },
      {
        heading: "Handel konwersacyjny kontra chatbot",
        body: [
          "Często używa się obu terminów zamiennie, ale chatbot to narzędzie w ramach kategorii, a nie cała kategoria. Chatbot oparty na dużym modelu językowym może odpowiadać na pytania otwarte, ale może też źle zinterpretować intencję lub polecić coś, czego nie masz w magazynie.",
          "Quiz rekomendacji produktów zamienia swobodę na niezawodność. Nie może zboczyć z tematu, zawsze poleca z Twojego katalogu na żywo i działa tak samo dla każdego kupującego. Dla większości sklepów ta przewidywalność jest warta więcej niż czat o dowolnej formie.",
        ],
      },
    ],
    withRevenueHunt: [
      "Quiz RevenueHunt to najbardziej niezawodna forma handlu konwersacyjnego, jakiej może użyć sklep. Ty projektujesz każde pytanie i każdą ścieżkę, strona wyników zawsze poleca realne produkty i warianty z Twojego katalogu, a każda odpowiedź jest przechwytywana jako zero-party data, którą możesz synchronizować z Klaviyo i innymi narzędziami.",
      "Działa na Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace oraz jako niezależny hostowany quiz, a zaczynasz za darmo ze 100 odpowiedziami miesięcznie.",
    ],
    faqs: [
      {
        question: "Czy quiz produktowy uznaje się za handel konwersacyjny?",
        answer:
          "Tak. Quiz to ustrukturyzowana forma handlu konwersacyjnego: kupujący odpowiada na pytania, a sklep odpowiada spersonalizowanymi rekomendacjami, ten sam model dialogu co chatbot, ale z każdą ścieżką zaprojektowaną z góry.",
      },
      {
        question: "Jaka jest różnica między handlem konwersacyjnym a chatbotem?",
        answer:
          "Chatbot to narzędzie w ramach handlu konwersacyjnego. Handel konwersacyjny to szersza idea sprzedawania poprzez dwukierunkową rozmowę, która obejmuje także quizy, czat na żywo, komunikatory i głos.",
      },
      {
        question: "Czy handel konwersacyjny działa dla małych sklepów?",
        answer:
          "Tak. Quiz rekomendacji produktów to forma o najmniejszym wysiłku, by zacząć. Nie potrzebuje historii ruchu, by działać, działa na darmowym planie i może być aktywny tego samego dnia.",
      },
    ],
    related: [
      { label: "Silnik rekomendacji produktów", href: "/glossary/product-recommendation-engine/" },
      { label: "Quiz zakupowy", href: "/glossary/shoppable-quiz/" },
      { label: "Quiz sprzedaży prowadzonej", href: "/guided-selling-quiz/" },
      { label: "Jak to działa", href: "/how-it-works/" },
      { label: "Szablony quizu", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "product-recommendation-engine": {
    slug: "product-recommendation-engine",
    term: "Silnik rekomendacji produktów",
    chip: "Koncepcja",
    title: "Czym jest silnik rekomendacji produktów?",
    description:
      "Silnik rekomendacji produktów decyduje, które produkty pokazać każdemu kupującemu. Typy, problem zimnego startu i jak działa silnik oparty na quizie.",
    h1: "Czym jest silnik rekomendacji produktów?",
    shortAnswer:
      "Silnik rekomendacji produktów to oprogramowanie, które decyduje, które produkty pokazać konkretnemu kupującemu. Bierze dane wejściowe (zachowanie podczas przeglądania, historię zakupów lub zadeklarowane preferencje) i porządkuje Twój katalog, by wydobyć najlepsze dopasowania.",
    intro: [
      "Każdy sklep, który pokazuje kupującemu coś innego niż pełny katalog, używa jakiegoś rodzaju silnika rekomendacji, nawet jeśli to tylko ręczna sekcja bestsellerów. Ciekawe pytanie brzmi, czego silnik używa do podjęcia decyzji.",
    ],
    sections: [
      {
        heading: "Główne typy",
        body: [
          "Silniki behawioralne wykorzystują to, co robią kupujący: oglądane strony, klikane produkty, kupione rzeczy. Napędzają klasyczne sekcje polecane dla Ciebie i klienci kupili także. Opierają się na filtrowaniu kolaboratywnym, które potrzebuje dużo ruchu i historii, by dobrze działać.",
          "Silniki oparte na regułach lub atrybutach wykorzystują dane produktów i logikę ustaloną przez merchandisera: pokaż akcesoria z tą kategorią, wydobądź najpierw produkty dostępne w magazynie. Są przewidywalne, ale statyczne.",
          "Silniki oparte na preferencjach lub na quizie wykorzystują to, co kupujący mówi Ci bezpośrednio. Kupujący odpowiada na kilka pytań, a silnik porządkuje katalog względem tych odpowiedzi. To najbardziej bezpośredni sygnał intencji, ponieważ jest dobrowolny, a nie wywnioskowany.",
        ],
      },
      {
        heading: "Problem zimnego startu",
        body: [
          "Silniki behawioralne mają znaną słabość: zawodzą przy nowych odwiedzających i nowych produktach. Kupujący, który przychodzi po raz pierwszy, nie ma historii, więc silnik nie ma się na czym oprzeć i ucieka się do generycznych bestsellerów. Świeżo dodany produkt nie ma jeszcze kliknięć, więc rzadko jest polecany.",
          "Silnik oparty na preferencjach nie ma zimnego startu. Zupełnie nowy odwiedzający, który odpowiada na trzy pytania, daje silnikowi wszystko, czego potrzebuje przy pierwszej wizycie, bez śledzenia i bez czekania, aż dane się nazbierają.",
        ],
      },
      {
        heading: "Jak silnik quizowy porządkuje produkty",
        body: [
          "Każda odpowiedź niesie wagę. Odpowiedź konieczna może głosować za produktami, które pasują, i przeciw tym, które nie pasują, podczas gdy sztywne ograniczenie, takie jak alergia lub niekompatybilna specyfikacja, może całkowicie wykluczyć produkty, niezależnie od tego, jak dobrze punktowały w pozostałych kwestiach.",
          "Wynikiem jest krótka, uporządkowana i uzasadniona lista zamiast jednego zgadywania. Dobre silniki rezerwują też miejsce na każdą rolę w zestawie, więc wynikiem może być rutyna, stack lub kompletny pakiet zamiast pojedynczego produktu.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt to silnik rekomendacji produktów oparty na preferencjach i napędzany quizem. Odpowiedzi głosują za, głosują przeciw lub wykluczają produkty z Twojego katalogu na żywo, recommendation slots rezerwują miejsce na każdą rolę w zestawie, a działa to dla odwiedzającego, który przychodzi po raz pierwszy bez żadnej historii.",
      "Ponieważ dane wejściowe są dobrowolne, te same odpowiedzi służą jednocześnie jako zero-party data, którą posiadasz i możesz wykorzystać do segmentacji długo po tym, jak kupujący odejdzie.",
    ],
    faqs: [
      {
        question: "Jaka jest różnica między behawioralnym a opartym na quizie silnikiem rekomendacji?",
        answer:
          "Silnik behawioralny wnioskuje intencję z kliknięć i historii zakupów, co potrzebuje ruchu i zawodzi przy nowych odwiedzających. Silnik oparty na quizie wykorzystuje preferencje, które kupujący deklaruje bezpośrednio, więc działa przy pierwszej wizycie bez historii.",
      },
      {
        question: "Czy potrzebuję dużo ruchu, by silnik rekomendacji działał?",
        answer:
          "Nie w przypadku silnika opartego na quizie. Ponieważ kupujący mówi Ci swoje preferencje, działa od pierwszej wizyty. Silniki behawioralne natomiast potrzebują znacznego ruchu i historii zakupów, zanim ich rekomendacje będą wiarygodne.",
      },
      {
        question: "Czy silnik rekomendacji może zasugerować więcej niż jeden produkt?",
        answer:
          "Tak. Dzięki recommendation slots silnik rezerwuje miejsce na każdą rolę w zestawie i wypełnia każdą najlepszym dopasowaniem, zwracając rutynę, stack lub kompletny pakiet zamiast pojedynczego artykułu.",
      },
    ],
    related: [
      { label: "Spersonalizowane rekomendacje produktów", href: "/glossary/personalized-product-recommendations/" },
      { label: "Handel konwersacyjny", href: "/glossary/conversational-commerce/" },
      { label: "Quiz wyszukiwania produktów", href: "/product-finder-quiz/" },
      { label: "Jak to działa", href: "/how-it-works/" },
      { label: "Quiz dla Shopify", href: "/product-recommendation-quiz-shopify/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "shoppable-quiz": {
    slug: "shoppable-quiz",
    term: "Quiz zakupowy",
    chip: "Typ quizu",
    title: "Czym jest quiz zakupowy?",
    description:
      "Quiz zakupowy kończy się stroną wyników, gdzie kupujący dodają polecane produkty do koszyka. Oto, co czyni quiz zakupowym i gdzie sklepy go używają.",
    h1: "Czym jest quiz zakupowy?",
    shortAnswer:
      "Quiz zakupowy to interaktywny quiz, który kończy się spersonalizowaną stroną wyników, gdzie kupujący mogą dodać polecane produkty bezpośrednio do koszyka. Quiz jest częścią sklepu, a nie ankietą, która żyje osobno.",
    intro: [
      "Wiele marek używa quizów. Różnica między tym, który generuje przychody, a tym, który tylko zbiera odpowiedzi, polega na tym, czy kupujący może kupić na końcu, nie musząc wychodzić.",
    ],
    sections: [
      {
        heading: "Co czyni quiz zakupowym",
        body: [
          "Trzy rzeczy. Po pierwsze, poleca realne produkty i warianty z Twojego katalogu na żywo, a nie tekst wypełniający. Po drugie, strona wyników ma opcję dodania do koszyka, więc kupujący może kupić rekomendację w jednym kroku. Po trzecie, może doprowadzić ofertę do końca: zniżkę powiązaną z odpowiedziami, pakiet dodany jako zestaw, dosprzedaż na stronie wyników.",
          "Bez tego masz quiz osobowości lub ankietę. Może być zabawny i może zbierać e-maile, ale nie domyka sprzedaży, którą właśnie otworzył.",
        ],
      },
      {
        heading: "Quiz zakupowy kontra ankieta lub quiz osobowości",
        body: [
          "Ankieta zbiera odpowiedzi i kończy się. Quiz osobowości bawi i kończy się. Quiz zakupowy wykorzystuje odpowiedzi, by polecić produkty, a następnie pozwala kupującemu działać na podstawie rekomendacji od razu, gdy jego intencja jest najwyższa.",
          "Ten ostatni krok jest tym, co się liczy. Moment tuż po tym, jak kupujący otrzymuje odpowiedź z pewnością, to moment, w którym najprawdopodobniej kupi. Quiz zakupowy przechwytuje ten moment zamiast odsyłać go z powrotem do katalogu, by zaczynał od zera.",
        ],
      },
      {
        heading: "Gdzie używa się quizów zakupowych",
        body: [
          "Wszędzie tam, gdzie wybór jest trudny: rutyny pielęgnacji skóry, stacki suplementów, odcienie podkładu, rozmiar i dopasowanie, zestawy prezentowe, mieszanki kawy. Im trudniej wybrać z siatki, tym bardziej quiz zakupowy zasługuje na swoje miejsce.",
          "Działają jako popup, jako blok osadzony na stronie lub jako doświadczenie na całą stronę, a ten sam quiz może jednocześnie zasilać ruch płatny, e-mail i odkrywanie na stronie.",
        ],
      },
    ],
    withRevenueHunt: [
      "Każdy quiz RevenueHunt jest domyślnie zakupowy. Strona wyników pobiera realne produkty i warianty z Twojego katalogu, obsługuje dodanie do koszyka pojedynczego artykułu lub całego zestawu i może pokazać kod rabatowy lub blok treści na podstawie odpowiedzi kupującego.",
      "Możesz zbudować jeden z szablonu albo opisać swój sklep AI Quiz Copilotowi i mieć kompletny quiz złożony w jakieś 60 sekund, a następnie opublikować go jako popup, embed lub landing page.",
    ],
    faqs: [
      {
        question: "Jaka jest różnica między quizem zakupowym a quizem osobowości?",
        answer:
          "Quiz osobowości bawi i kończy się. Quiz zakupowy poleca realne produkty z Twojego katalogu i pozwala kupującym dodać je do koszyka na stronie wyników, więc domyka sprzedaż zamiast tylko zbierać odpowiedzi.",
      },
      {
        question: "Czy kupujący mogą dodawać produkty do koszyka z quizu?",
        answer:
          "Tak. To właśnie czyni go zakupowym. Strona wyników pokazuje pasujące produkty i warianty z bezpośrednią opcją dodania do koszyka, dla pojedynczego artykułu lub kompletnego zestawu.",
      },
      {
        question: "Czy quiz zakupowy może pokazać zniżkę?",
        answer:
          "Tak. Strona wyników obsługuje bloki kodu rabatowego i treści, które możesz powiązać z konkretnymi odpowiedziami, więc odpowiedni kupujący widzą odpowiednią ofertę w punkcie decyzji.",
      },
    ],
    related: [
      { label: "Lejek quizowy", href: "/glossary/quiz-funnel/" },
      { label: "Handel konwersacyjny", href: "/glossary/conversational-commerce/" },
      { label: "Quiz kreatora pakietów", href: "/solutions/bundle-builder/" },
      { label: "Szablony quizu", href: "/templates/" },
      { label: "Kalkulator ROI quizu", href: "/quiz-roi-calculator/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "quiz-funnel": {
    slug: "quiz-funnel",
    term: "Lejek quizowy",
    chip: "Marketing",
    title: "Czym jest lejek quizowy?",
    description:
      "Lejek quizowy wykorzystuje quiz jako punkt wejścia, by zamienić ruch w kwalifikowane, zapisane leady. Oto etapy i dlaczego przewyższa zwykły opt-in.",
    h1: "Czym jest lejek quizowy?",
    shortAnswer:
      "Lejek quizowy to lejek marketingowy, który wykorzystuje quiz jako punkt wejścia. Kupujący robi quiz, otrzymuje rekomendację, podaje swój e-mail i wchodzi w segmentowaną sekwencję follow-upu. Zamienia anonimowy ruch w kwalifikowany lead ze znaną preferencją.",
    intro: [
      "Większość lejków ecommerce zaczyna się od popupu z rabatem i pojedynczego pola e-mail. Lejek quizowy zastępuje to czymś, czego kupujący naprawdę chce: spersonalizowaną odpowiedzią.",
    ],
    sections: [
      {
        heading: "Etapy lejka quizowego",
        body: [
          "Ruch trafia do quizu, z reklamy, e-maila lub linku na Twojej stronie. Kupujący odpowiada na kilka pytań. Dociera do strony wyników ze spersonalizowaną rekomendacją. By zobaczyć lub zapisać wynik, podaje swój e-mail. Ten e-mail wchodzi w segmentowaną sekwencję follow-upu na podstawie tego, co Ci powiedział.",
          "Różnica względem zwykłego lejka tkwi w tym, co wiesz na końcu. Zamiast anonimowego subskrybenta masz kontakt oznaczony jego celami, preferencjami i produktami, z którymi się dopasował.",
        ],
      },
      {
        heading: "Dlaczego przewyższa generyczny opt-in",
        body: [
          "Zwykły zapis do newslettera nie oferuje niczego konkretnego, więc konwertuje niewielką część ruchu i nie daje Ci żadnej informacji poza adresem e-mail. Lejek quizowy oferuje spersonalizowaną rekomendację jako powód do zapisania się, co jest znacznie mocniejszą wymianą.",
          "Poprawia też każdy kolejny e-mail. Subskrybent, o którym wiesz, że szuka pod kątem skóry suchej i wrażliwej, otrzymuje inne wiadomości niż ten, kto szuka prezentu. Ta segmentacja powstaje podczas quizu, a nie jest dodawana później.",
        ],
      },
      {
        heading: "Lejki quizowe a ruch płatny",
        body: [
          "Lejki quizowe są popularne w płatnym pozyskiwaniu, ponieważ kwalifikują i przechwytują w jednym kroku. Zimny ruch, który odszedłby ze strony produktu, często kończy quiz, a przechwycenie e-maila oznacza, że zachowujesz lead, nawet jeśli nie kupi przy pierwszej wizycie.",
          "Lejek quizowy to konkretna forma lejka. Dla szerszego obrazu tego, jak buduje się lejki ecommerce, zajrzyj do przewodnika z przykładami lejków.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt jest stworzony, by prowadzić cały lejek quizowy. Przechwytuje e-mail w punkcie najwyższej intencji, synchronizuje odpowiedzi i tagi klienta z Klaviyo, Mailchimp, Omnisend, HubSpot i innymi oraz pokazuje porzucenia pytanie po pytaniu, byś mógł naprawić wycieki.",
      "Rekomendacja ze strony wyników to magnes na leady, więc to, co pozyskuje e-mail, jest jednocześnie tym, co napędza sprzedaż.",
    ],
    faqs: [
      {
        question: "Czym lejek quizowy różni się od zwykłego lejka sprzedażowego?",
        answer:
          "Lejek quizowy wykorzystuje quiz jako punkt wejścia, więc kwalifikuje i segmentuje leady w miarę ich przechwytywania. Zwykły lejek zazwyczaj zaczyna się od generycznego opt-inu, który przechwytuje e-mail, ale żadnych danych o preferencjach.",
      },
      {
        question: "Czy lejek quizowy działa dla reklam płatnych?",
        answer:
          "Tak. Lejki quizowe są częste w płatnym pozyskiwaniu, ponieważ kwalifikują zimny ruch i przechwytują e-mail w jednym kroku, więc zachowujesz lead nawet wtedy, gdy kupujący nie kupi przy pierwszej wizycie.",
      },
      {
        question: "Co robię z leadami, które przechwytuje lejek quizowy?",
        answer:
          "Synchronizuj je ze swoim narzędziem do e-maili z odpowiedziami z quizu jako tagami, a następnie wysyłaj segmentowany follow-up według celu lub preferencji. RevenueHunt synchronizuje odpowiedzi i tagi klienta z Klaviyo, Mailchimp, Omnisend, HubSpot i innymi.",
      },
    ],
    related: [
      { label: "Quiz generowania leadów", href: "/glossary/lead-generation-quiz/" },
      { label: "Quiz zakupowy", href: "/glossary/shoppable-quiz/" },
      { label: "Przykłady lejków ecommerce", href: "/ecommerce-sales-funnel-examples/" },
      { label: "Kalkulator ROI quizu", href: "/quiz-roi-calculator/" },
      { label: "Integracje", href: "/integrations/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "personalized-product-recommendations": {
    slug: "personalized-product-recommendations",
    term: "Spersonalizowane rekomendacje produktów",
    chip: "Koncepcja",
    title: "Czym są spersonalizowane rekomendacje produktów?",
    description:
      "Spersonalizowane rekomendacje produktów dopasowują sugestie do każdego kupującego. Oto, jak robią to sklepy, problem zimnego startu i forma bez plików cookie.",
    h1: "Czym są spersonalizowane rekomendacje produktów?",
    shortAnswer:
      "Spersonalizowane rekomendacje produktów to sugestie dopasowane do indywidualnego kupującego zamiast tych samych bestsellerów pokazywanych wszystkim. Mogą opierać się na zachowaniu podczas przeglądania, przeszłych zakupach lub, w najbardziej bezpośredniej formie, na tym, co kupujący Ci mówi.",
    intro: [
      "Pokazywanie każdemu kupującemu tej samej siatki traktuje tak samo kupującego prezent po raz pierwszy i lojalnego, powracającego klienta. Spersonalizowane rekomendacje dopasowują się do tego, kto naprawdę kupuje.",
    ],
    sections: [
      {
        heading: "Jak sklepy personalizują rekomendacje",
        body: [
          "Istnieją dwa ogólne podejścia. Personalizacja behawioralna obserwuje, co robi kupujący, kliknięcia, wyświetlenia, wcześniejsze zamówienia, i wnioskuje, co pokazać dalej. Personalizacja oparta na zadeklarowanych preferencjach pyta kupującego bezpośrednio i poleca na podstawie jego odpowiedzi.",
          "Zachowanie jest niewidoczne dla kupującego i skaluje się automatycznie, ale jest wnioskiem i może się mylić. Zadeklarowana preferencja jest jednoznaczna: kupujący mówi Ci, że chce bezzapachowego kremu nawilżającego do skóry wrażliwej, więc nie trzeba zgadywać.",
        ],
      },
      {
        heading: "Problem zimnego startu",
        body: [
          "Personalizacja behawioralna ma trudności z nowymi kupującymi. Bez historii, z której można się uczyć, domyślnie ucieka się do generycznych bestsellerów właśnie dla odwiedzających, dla których pierwsze wrażenie liczy się najbardziej.",
          "Zapytanie kupującego rozwiązuje to natychmiast. Quiz zbiera wystarczająco, by spersonalizować przy pierwszej wizycie, zanim istnieje jakakolwiek historia przeglądania, dlatego tak dobrze pasuje do ruchu płatnego i społecznościowego, który przychodzi na zimno.",
        ],
      },
      {
        heading: "Personalizacja bez plików cookie stron trzecich",
        body: [
          "Targetowanie behawioralne opierało się na plikach cookie stron trzecich i śledzeniu między witrynami, oba coraz bardziej ograniczane przez przeglądarki i regulacje. Rekomendacje zbudowane na danych, które kupujący podaje dobrowolnie, nie zależą od niczego z tego.",
          "Dane, które zbiera quiz, to zero-party data: preferencje i intencje, którymi kupujący dzieli się celowo. To coś innego niż first-party data, czyli zachowanie, które obserwujesz na własnej stronie, jak oglądane strony i wcześniejsze zamówienia. Zero-party data to rodzaj first-party data, ale jest deklarowana, a nie wnioskowana, więc nie ma czego zgadywać.",
          "Oba są trwałe i objęte zgodą, w przeciwieństwie do third-party data. Pełny obraz znajdziesz w przewodnikach o zero-party data i first-party data.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt personalizuje rekomendacje na podstawie preferencji, które kupujący deklaruje w quizie, więc działa przy pierwszej wizycie i nie zależy od śledzenia stron trzecich. Odpowiedzi przypisywane są do realnych produktów i wariantów, a sztywne ograniczenia wykluczają wszystko, co nie pasuje.",
      "Te same odpowiedzi stają się zero-party data, więc personalizacja trwa w e-mailu: każda kampania po quizie może mówić o tym, czego każdy kupujący naprawdę chce.",
    ],
    faqs: [
      {
        question: "Jakie dane napędzają spersonalizowane rekomendacje produktów?",
        answer:
          "Albo dane behawioralne (kliknięcia, wyświetlenia, historia zakupów), albo zadeklarowane preferencje, które kupujący podaje bezpośrednio. Zadeklarowane preferencje są najdokładniejsze, ponieważ są dobrowolne, a nie wnioskowane, i działają przy pierwszej wizycie.",
      },
      {
        question: "Czy mogę personalizować rekomendacje dla odwiedzających po raz pierwszy?",
        answer:
          "Tak, jeśli ich zapytasz. Quiz zbiera wystarczająco, by spersonalizować przy pierwszej wizycie, czego systemy behawioralne nie mogą zrobić, bo nowi odwiedzający nie mają historii, z której można się uczyć.",
      },
      {
        question: "Czy spersonalizowane rekomendacje potrzebują plików cookie stron trzecich?",
        answer:
          "Nie. Rekomendacje zbudowane na danych, które kupujący dobrowolnie podaje w quizie, nie zależą od plików cookie stron trzecich ani śledzenia między witrynami, oba coraz bardziej ograniczane przez przeglądarki i regulatorów.",
      },
    ],
    related: [
      { label: "Silnik rekomendacji produktów", href: "/glossary/product-recommendation-engine/" },
      { label: "Personalizacja w ecommerce", href: "/glossary/ecommerce-personalization/" },
      { label: "Zero-party data", href: "/zero-party-data/" },
      { label: "First-party data", href: "/first-party-data/" },
      { label: "Jak to działa", href: "/how-it-works/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "ecommerce-personalization": {
    slug: "ecommerce-personalization",
    term: "Personalizacja w ecommerce",
    chip: "Koncepcja",
    title: "Czym jest personalizacja w ecommerce?",
    description:
      "Personalizacja w ecommerce dopasowuje sklep do każdego kupującego. Oto, gdzie się dzieje, zwrot ku zero-party data i miejsce o najmniejszym wysiłku, by zacząć.",
    h1: "Czym jest personalizacja w ecommerce?",
    shortAnswer:
      "Personalizacja w ecommerce polega na dopasowaniu doświadczenia zakupowego, produktów, treści i ofert, które widzi kupujący, do jednostki zamiast pokazywania wszystkim tego samego sklepu. Dobrze zrobiona podnosi konwersję i średnią wartość zamówienia.",
    intro: [
      "Personalizacja obejmuje wiele terenu, od sekcji polecane dla Ciebie po całkowicie dopasowaną stronę główną. Wspólny wątek to traktowanie różnych kupujących inaczej, na podstawie tego, co o nich wiesz.",
    ],
    sections: [
      {
        heading: "Gdzie dzieje się personalizacja",
        body: [
          "Na stronie pojawia się jako polecane produkty, dopasowane landing page i dynamiczna treść. W rekomendacjach porządkuje katalog dla każdego kupującego. W e-mailu i SMS segmentuje wiadomości według zachowania lub preferencji. W reklamach dopasowuje kreację i grupy odbiorców.",
          "Większość sklepów nie potrzebuje wszystkiego naraz. Miejsca o najwyższym zwrocie, by zacząć, to rekomendacje produktów i segmentacja e-maili, ponieważ oba bezpośrednio wpływają na to, co kupuje kupujący i czy wróci.",
        ],
      },
      {
        heading: "Zwrot od third-party data ku zero-party data",
        body: [
          "Klasyczna personalizacja opierała się mocno na third-party data i śledzeniu między witrynami. Zmiany w przeglądarkach i regulacje prywatności sprawiły, że to podejście stało się kruche i w wielu przypadkach niezgodne z przepisami.",
          "Trwałym zastępnikiem są Twoje własne dane, a przychodzą w dwóch formach. First-party data to to, co obserwujesz z interakcji kupującego z Twoim sklepem, jak oglądane strony i wcześniejsze zamówienia. Zero-party data to to, co kupujący podają celowo, jak cele, preferencje i problemy. Zero-party data to deklarowany podzbiór first-party data i najdokładniejszy sygnał intencji, ponieważ kupujący powiedział Ci to bezpośrednio.",
          "Oba są objęte zgodą i nie znikają, gdy przeglądarka blokuje plik cookie. Quiz to najbardziej bezpośredni sposób zbierania zero-party data na skalę.",
        ],
      },
      {
        heading: "Miejsce o najmniejszym wysiłku, by zacząć",
        body: [
          "Enterprise'owe suity personalizacji potrafią dopasować każdy piksel, z odpowiednią ceną i harmonogramem wdrożenia. Większość sklepów nie potrzebuje tego, by zobaczyć rezultaty.",
          "Quiz rekomendacji produktów to najprostszy punkt wejścia. Personalizuje najważniejszy moment, wybór produktu, przechwytuje dane o preferencjach, które potem napędzają spersonalizowany e-mail, i może być aktywny tego samego dnia na darmowym planie.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt to skoncentrowany i samoobsługowy sposób, by zacząć personalizację: quiz, który dopasowuje rekomendacje przy pierwszej wizycie i zasila Twoje narzędzie do e-maili danymi o preferencjach do ciągłej segmentacji. Bez kontraktu enterprise, bez zespołu data science.",
      "Działa na wszystkich głównych platformach i synchronizuje się z Klaviyo, Mailchimp, Omnisend, HubSpot i innymi, więc personalizacja przechodzi ze sklepu do skrzynki odbiorczej.",
    ],
    faqs: [
      {
        question: "Jaki jest najłatwiejszy sposób, by zacząć z personalizacją w ecommerce?",
        answer:
          "Quiz rekomendacji produktów. Personalizuje moment o największym wpływie, wybór produktu, działa przy pierwszej wizycie, przechwytuje dane o preferencjach do spersonalizowanego e-maila i może być aktywny tego samego dnia na darmowym planie.",
      },
      {
        question: "Czy personalizacja w ecommerce wymaga plików cookie stron trzecich?",
        answer:
          "Już nie, i coraz mniej może na nich polegać. Trwałe podejście wykorzystuje dane, które kupujący dobrowolnie podają bezpośrednio, co jest dokładniejsze, objęte zgodą i nieobjęte ograniczeniami przeglądarek i prywatności.",
      },
      {
        question: "Czy potrzebuję platformy enterprise, by spersonalizować swój sklep?",
        answer:
          "Nie. Suity enterprise dopasowują wszystko wysokim kosztem, ale większość sklepów uzyskuje mocne zwroty ze skoncentrowanej personalizacji: rekomendacji i segmentacji e-maili, co quiz osiąga na planie samoobsługowym.",
      },
    ],
    related: [
      { label: "Spersonalizowane rekomendacje produktów", href: "/glossary/personalized-product-recommendations/" },
      { label: "Odkrywanie produktów", href: "/glossary/product-discovery/" },
      { label: "Zero-party data", href: "/zero-party-data/" },
      { label: "First-party data", href: "/first-party-data/" },
      { label: "Porównaj RevenueHunt z Nosto", href: "/compare/nosto/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "product-discovery": {
    slug: "product-discovery",
    term: "Odkrywanie produktów",
    chip: "Koncepcja",
    title: "Czym jest odkrywanie produktów w ecommerce?",
    description:
      "Odkrywanie produktów to sposób, w jaki kupujący znajdują odpowiedni produkt w Twoim katalogu. Metody, dlaczego duże katalogi to utrudniają i jak pomaga sprzedaż prowadzona.",
    h1: "Czym jest odkrywanie produktów w ecommerce?",
    shortAnswer:
      "Odkrywanie produktów to sposób, w jaki kupujący znajdują odpowiedni produkt w Twoim katalogu. Dobre odkrywanie, przez wyszukiwanie, filtry i prowadzone quizy, prowadzi kupującego od mam problem do oto produkt z możliwie najmniejszym tarciem.",
    intro: [
      "Kupujący rzadko przychodzi, znając Twoje dokładne SKU. Przychodzi z potrzebą. Odkrywanie produktów to wszystko, co znajduje się między tą potrzebą a odpowiednią stroną produktu.",
    ],
    sections: [
      {
        heading: "Główne metody odkrywania",
        body: [
          "Wyszukiwanie pozwala kupującym, którzy wiedzą, czego chcą, wpisać to. Nawigacja i filtry pozwalają im zawęzić według kategorii i atrybutu. Rekomendacje wydobywają istotne produkty podczas przeglądania. Sprzedaż prowadzona, zazwyczaj quiz, pyta o ich potrzebę i wskazuje im odpowiedź.",
          "Każda pasuje do innego kupującego. Wyszukiwanie działa, gdy ktoś zna nazwę produktu. Filtry działają, gdy zna atrybuty. Quiz działa, gdy zna problem, ale nie produkt, co jest najtrudniejszym i najczęstszym przypadkiem.",
        ],
      },
      {
        heading: "Dlaczego większe katalogi utrudniają odkrywanie",
        body: [
          "Sklep z dziesięcioma produktami ledwie potrzebuje narzędzi do odkrywania. Sklep z setkami lub tysiącami już tak. Im więcej sprzedajesz, tym bardziej prawdopodobne, że kupujący poczuje się przytłoczony i odejdzie, nie znajdując tego, co było dla niego odpowiednie.",
          "To paradoks wyboru w praktyce: więcej opcji może obniżyć konwersję, a nie ją podnieść, chyba że dasz kupującym sposób, by przez nie przebrnąć. Prowadzone odkrywanie zamienia duży katalog z obciążenia w atut.",
        ],
      },
      {
        heading: "Odkrywanie to dźwignia konwersji",
        body: [
          "Kupujący, który nie znajdzie odpowiedniego produktu, nie kupuje innego, odchodzi. Poprawa odkrywania jest często zmianą o największej dźwigni, jaką może wykonać sklep z głębokim katalogiem, ponieważ naprawia krok, w którym intencja po cichu umiera.",
          "Quiz to najbardziej bezpośrednie narzędzie odkrywania dla zakupu opartego na potrzebie, ponieważ zadaje pytanie, które zadałby sprzedawca, i zwraca produkt, który by wskazał.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt zajmuje się odkrywaniem produktów opartym na potrzebie: kupujący opisuje swój cel lub problem, a quiz porządkuje Twój katalog na żywo, by zwrócić odpowiednie dopasowanie, ze sztywnymi ograniczeniami, które wykluczają wszystko, co nie pasuje.",
      "Skaluje się z Twoim katalogiem, działa przy pierwszej wizycie i działa na Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace oraz niezależnie.",
    ],
    faqs: [
      {
        question: "Jaka jest różnica między odkrywaniem produktów a wyszukiwaniem?",
        answer:
          "Wyszukiwanie to jedna z metod odkrywania, dla kupujących, którzy już wiedzą, czego chcą. Odkrywanie produktów jest szersze i obejmuje filtry, rekomendacje i prowadzone quizy dla kupujących, którzy znają swoją potrzebę, ale nie konkretny produkt.",
      },
      {
        question: "Jak quiz poprawia odkrywanie produktów?",
        answer:
          "Zajmuje się najtrudniejszym przypadkiem: kupującym, który zna swój problem, ale nie produkt. Quiz pyta o potrzebę i porządkuje katalog, by zwrócić odpowiednie dopasowanie, w sposób, w jaki sprzedawca by go poprowadził.",
      },
      {
        question: "Czy odkrywanie produktów liczy się bardziej w dużych katalogach?",
        answer:
          "Tak. Im więcej produktów sprzedajesz, tym łatwiej kupującym poczuć się przytłoczonym i odejść. Prowadzone odkrywanie przebrnie przez duży katalog i zamienia jego rozmiar w przewagę zamiast bariery.",
      },
    ],
    related: [
      { label: "Quiz sprzedaży prowadzonej", href: "/guided-selling-quiz/" },
      { label: "Quiz wyszukiwania produktów", href: "/product-finder-quiz/" },
      { label: "Personalizacja w ecommerce", href: "/glossary/ecommerce-personalization/" },
      { label: "Porównaj RevenueHunt z Zoovu", href: "/compare/zoovu/" },
      { label: "Szablony quizu", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "lead-generation-quiz": {
    slug: "lead-generation-quiz",
    term: "Quiz generowania leadów",
    chip: "Typ quizu",
    title: "Czym jest quiz generowania leadów?",
    description:
      "Quiz generowania leadów przechwytuje kwalifikowane, zapisane leady z wbudowanym powodem do zapisania się. Oto, dlaczego przewyższa formularz rejestracji i co przechwytujesz.",
    h1: "Czym jest quiz generowania leadów?",
    shortAnswer:
      "Quiz generowania leadów przechwytuje kwalifikowane leady: kupujący odpowiada na kilka pytań, podaje swój e-mail, by zobaczyć wynik, a Ty otrzymujesz kontakt oznaczony jego zadeklarowanymi preferencjami. To opt-in z wbudowanym powodem do zapisania się.",
    intro: [
      "E-mail wciąż jest kanałem o najwyższym zwrocie w ecommerce, ale prosty formularz rejestracji konwertuje niewielki ułamek odwiedzających i nie mówi Ci o nich nic. Quiz generowania leadów naprawia oba problemy naraz.",
    ],
    sections: [
      {
        heading: "Dlaczego quiz przewyższa prosty formularz rejestracji",
        body: [
          "Pole newslettera prosi o e-mail i oferuje, co najwyżej, generyczną zniżkę. Quiz generowania leadów oferuje spersonalizowany wynik, czyli powód, dla którego kupujący naprawdę chce podać swój adres. Wymiana wydaje się sprawiedliwa, więc więcej osób ją przyjmuje.",
          "Zbiera też więcej niż e-mail. Zanim kupujący się zapisze, odpowiedział na pytania o swoje cele, preferencje i ograniczenia, więc każdy kontakt przychodzi już kwalifikowany i posegmentowany.",
        ],
      },
      {
        heading: "Co przechwytujesz i jak to wykorzystać",
        body: [
          "Przechwytujesz e-mail plus odpowiedzi z quizu jako zero-party data. Te odpowiedzi stają się tagami w Twoim narzędziu do e-maili: cel, typ skóry, budżet, obdarowany, cokolwiek pytał quiz.",
          "Tagi zamieniają pojedynczą listę w segmenty, do których możesz mówić w konkretny sposób. Lead, który powiedział, że kupuje pod kątem skóry wrażliwej, otrzymuje inny e-mail niż ten, kto kupuje prezent, a różnica powstaje przy przechwyceniu, a nie jest zgadywana później.",
        ],
      },
      {
        heading: "Przewaga zgodności z przepisami",
        body: [
          "Ponieważ kupujący podaje dane dobrowolnie w zamian za wynik, to zero-party data: deklarowany typ first-party data, z definicji objęty zgodą. To znosi się znacznie lepiej niż wnioskowane lub kupione third-party data, w miarę jak reguły prywatności się zaostrzają, a przeglądarki ograniczają śledzenie.",
          "Posiadasz te dane, są dokładne, bo pochodzą bezpośrednio od kupującego, i nie zależą od żadnych plików cookie stron trzecich, by pozostać przydatne.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt zamienia każdy quiz w quiz generowania leadów: przechwytuje e-mail w punkcie najwyższej intencji, a następnie synchronizuje kontakt i tagi oparte na odpowiedziach z Klaviyo, Mailchimp, Omnisend, HubSpot i innymi.",
      "Ponieważ rekomendacja jest zachętą, ten sam quiz, który powiększa Twoją listę, napędza też sprzedaż, a analityka porzuceń pokazuje dokładnie, gdzie dostroić przepływ.",
    ],
    faqs: [
      {
        question: "Czym quiz generowania leadów różni się od formularza rejestracji?",
        answer:
          "Formularz rejestracji prosi o e-mail i oferuje generyczną zachętę. Quiz generowania leadów oferuje spersonalizowany wynik jako powód do zapisania się i przechwytuje dane o preferencjach razem z e-mailem, więc każdy lead jest kwalifikowany i posegmentowany.",
      },
      {
        question: "Jakie informacje przechwytuje quiz generowania leadów?",
        answer:
          "E-mail kupującego plus jego odpowiedzi z quizu jako zero-party data. Te odpowiedzi synchronizują się z Twoim narzędziem do e-maili jako tagi, więc kontakty przychodzą już posegmentowane według celu, preferencji lub ograniczenia.",
      },
      {
        question: "Czy używanie danych z quizu generowania leadów jest zgodne z przepisami?",
        answer:
          "Tak. Kupujący podaje je dobrowolnie w zamian za wynik, więc to first-party data objęte zgodą. To znosi się lepiej niż dane wnioskowane lub od stron trzecich, w miarę jak reguły prywatności i ograniczenia przeglądarek się zaostrzają.",
      },
    ],
    related: [
      { label: "Lejek quizowy", href: "/glossary/quiz-funnel/" },
      { label: "Quiz zakupowy", href: "/glossary/shoppable-quiz/" },
      { label: "Zero-party data", href: "/zero-party-data/" },
      { label: "Integracje", href: "/integrations/" },
      { label: "Szablony quizu", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "conversion-rate-optimization": {
    slug: "conversion-rate-optimization",
    term: "Optymalizacja współczynnika konwersji (CRO)",
    chip: "Koncepcja",
    title: "Czym jest optymalizacja współczynnika konwersji?",
    description:
      "Optymalizacja współczynnika konwersji (CRO) podnosi odsetek odwiedzających, którzy kupują. Jak się ją mierzy, na czym się skupić i taktyki, które ruszają wskaźnik.",
    h1: "Czym jest optymalizacja współczynnika konwersji (CRO)?",
    shortAnswer:
      "Optymalizacja współczynnika konwersji (CRO) to praktyka zwiększania odsetka odwiedzających, którzy wykonują pożądaną akcję, zazwyczaj zakup. Mierzysz współczynnik konwersji jako konwersje podzielone przez odwiedzających, a następnie poprawiasz go bez kupowania większego ruchu.",
    intro: [
      "CRO polega na wyciągnięciu więcej z ruchu, który już masz. Podwojenie współczynnika konwersji ma taki sam wpływ na przychody jak podwojenie ruchu, ale kosztuje znacznie mniej.",
    ],
    sections: [
      {
        heading: "Jak oblicza się współczynnik konwersji",
        body: [
          "Współczynnik konwersji to konwersje podzielone przez łączną liczbę odwiedzających, wyrażone jako procent. Jeśli 1000 odwiedzających daje 20 zakupów, to współczynnik konwersji na poziomie 2%. Średnie współczynniki konwersji w ecommerce są w niskich, jednocyfrowych wartościach, więc niewielkie bezwzględne zyski są duże w ujęciu względnym: przejście z 2% na 3% to wzrost zamówień o 50%.",
          "Ta sama matematyka stosuje się do każdego celu, nie tylko do zakupów. Zapisy do e-maila, ukończenia quizu i dodania do koszyka to wszystko konwersje, które możesz optymalizować.",
        ],
      },
      {
        heading: "Na czym CRO naprawdę się skupia",
        body: [
          "Dobre CRO znajduje konkretny krok, w którym wycieka intencja, i go naprawia. Częste wycieki: strona produktu, która nie odpowiada na prawdziwe pytanie kupującego, kasa z nadmiernym tarciem albo strona kategorii, która zostawia niezdecydowanego kupującego przed ścianą opcji bez żadnej wskazówki.",
          "To pętla, a nie jednorazowa poprawka: postaw hipotezę, zmień jedną rzecz, zmierz względem punktu odniesienia, zachowaj to, co wygrywa. Dyscyplina polega na zmienianiu jednej zmiennej naraz, byś wiedział, co ruszyło liczbę.",
        ],
      },
      {
        heading: "Taktyki, które ruszają liczbę",
        body: [
          "Trwałe zwycięstwa to jasność i istotność: szybsze strony, uczciwe informacje o produkcie, mniej kroków w kasie i pomaganie niezdecydowanym kupującym w wyborze. Popupy z rabatem mogą krótkoterminowo podnieść konwersję, ale przyzwyczajają kupujących do oczekiwania ofert i erodują marżę.",
          "Pomaganie kupującym w wyborze to najbardziej niedoceniana dźwignia. Kupujący, który nie potrafi się zdecydować, nie konwertuje, a siatka opcji mu nie pomaga. Prowadzone doświadczenie, które sprowadza katalog do rekomendacji z pewnością, eliminuje niezdecydowanie, które po cichu zabija konwersje.",
        ],
      },
    ],
    withRevenueHunt: [
      "Quiz rekomendacji produktów to taktyka CRO wymierzona w wyciek z niezdecydowania. Zamiast zostawiać kupującego porównującego ścianę produktów, zadaje kilka pytań i zwraca spersonalizowaną, pewną rekomendację, więc więcej kupujących dochodzi do decyzji o zakupie.",
      "Po drodze przechwytuje też e-mail i dane o preferencjach, więc odwiedzający, którzy nie kupią przy pierwszej wizycie, nie są tracone. Możesz oszacować potencjalny wzrost dla własnych liczb za pomocą kalkulatora ROI quizu.",
    ],
    faqs: [
      {
        question: "Jak oblicza się współczynnik konwersji?",
        answer:
          "Podziel liczbę konwersji przez liczbę odwiedzających i wyraź to jako procent. Na przykład 20 zakupów z 1000 odwiedzających to współczynnik konwersji na poziomie 2%. Ta sama formuła działa dla każdego celu, jak zapisy czy ukończenia quizu.",
      },
      {
        question: "Co to jest dobry współczynnik konwersji w ecommerce?",
        answer:
          "Większość sklepów ecommerce konwertuje w niskich, jednocyfrowych wartościach, często około 1% do 3%. Ponieważ baza jest mała, skromne bezwzględne zyski są duże w ujęciu względnym: przejście z 2% na 3% to wzrost zamówień o 50%.",
      },
      {
        question: "Jak quiz produktowy poprawia współczynnik konwersji?",
        answer:
          "Celuje w wyciek z niezdecydowania. Quiz sprowadza duży katalog do spersonalizowanej, pewnej rekomendacji, więc niezdecydowani kupujący dochodzą do decyzji o zakupie zamiast odchodzić od siatki opcji.",
      },
    ],
    related: [
      { label: "Średnia wartość zamówienia", href: "/glossary/average-order-value/" },
      { label: "Odkrywanie produktów", href: "/glossary/product-discovery/" },
      { label: "Wskazówki optymalizacji konwersji", href: "/ecommerce-conversion-optimization-tips/" },
      { label: "Kalkulator ROI quizu", href: "/quiz-roi-calculator/" },
      { label: "Lejek quizowy", href: "/glossary/quiz-funnel/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "average-order-value": {
    slug: "average-order-value",
    term: "Średnia wartość zamówienia (AOV)",
    chip: "Metryka",
    title: "Czym jest średnia wartość zamówienia (AOV)?",
    description:
      "Średnia wartość zamówienia (AOV) to ile średnio wydaje klient na zamówienie. Jak ją obliczyć, dlaczego się liczy i jak ją podnieść bez większego ruchu.",
    h1: "Czym jest średnia wartość zamówienia (AOV)?",
    shortAnswer:
      "Średnia wartość zamówienia (AOV) to średnia kwota, jaką klient wydaje na pojedyncze zamówienie. Obliczasz ją, dzieląc łączne przychody przez liczbę zamówień w tym samym okresie.",
    intro: [
      "AOV to jedna z trzech liczb, które określają Twoje przychody, obok ruchu i współczynnika konwersji. Podniesienie go zwiększa przychody z dokładnie tej samej liczby zamówień, dlatego jest jedną z najtańszych dźwigni wzrostu, jakie masz.",
    ],
    sections: [
      {
        heading: "Jak obliczyć AOV",
        body: [
          "Podziel łączne przychody przez liczbę zamówień w danym okresie. Jeśli sklep generuje 50 000 $ z 1000 zamówień w miesiącu, jego AOV wynosi 50 $. Śledź go w czasie i według źródła ruchu, ponieważ kanał o wyższym AOV może być wart więcej, nawet jeśli konwertuje gorzej.",
          "AOV oddziałuje ze wszystkim innym. Wyższy AOV oznacza, że każda konwersja jest warta więcej, co podnosi to, ile możesz sobie pozwolić wydać na pozyskanie klienta.",
        ],
      },
      {
        heading: "Dlaczego AOV się liczy",
        body: [
          "Ruch i współczynnik konwersji przyciągają większość uwagi, ale to drogie dźwignie: więcej ruchu kosztuje inwestycji w reklamy, a zyski z konwersji stają się trudniejsze w miarę optymalizacji. AOV to dźwignia, którą możesz ruszyć na zamówieniach, które już pozyskujesz.",
          "Finansuje też pozyskiwanie. Im więcej warte jest każde zamówienie, tym więcej możesz licytować za ruch płatny i wciąż pozostawać rentowny, co składa się w całym lejku.",
        ],
      },
      {
        heading: "Jak zwiększyć AOV",
        body: [
          "Uczciwe sposoby podniesienia AOV wszystkie dodają realną wartość: polecanie produktów uzupełniających, łączenie artykułów, które do siebie pasują, i pomaganie kupującym kupić kompletne rozwiązanie zamiast pojedynczego elementu. Cross-selling i upselling to taktyki; istotna rekomendacja to to, co sprawia, że działają, a nie irytują.",
          "Słowo klucz to istotna. Generyczny komunikat o dodatku jest ignorowany. Polecany zestaw, który naprawdę pasuje do tego, co kupujący kupuje, jest kupowany, ponieważ czyta się jak pomoc, a nie jak nacisk sprzedażowy.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt podnosi AOV, polecając kompletny zestaw zamiast pojedynczego produktu. Recommendation slots rezerwują miejsce na każdą rolę w rutynie, stacku lub pakiecie, więc strona wyników zwraca całe rozwiązanie z opcją dodania zestawu do koszyka i opcjonalną zniżką powiązaną z odpowiedziami.",
      "Ponieważ każdy artykuł pasuje do odpowiedzi kupującego, większe zamówienie wydaje się rekomendacją, a nie upsellingiem. Możesz oszacować wpływ na przychody dla swojego sklepu za pomocą kalkulatora ROI quizu.",
    ],
    faqs: [
      {
        question: "Jak oblicza się średnią wartość zamówienia?",
        answer:
          "Podziel łączne przychody przez liczbę zamówień w tym samym okresie. Na przykład 50 000 $ przychodu z 1000 zamówień to średnia wartość zamówienia 50 $.",
      },
      {
        question: "Dlaczego AOV jest ważny?",
        answer:
          "Zwiększa przychody z zamówień, które już pozyskujesz, bez płacenia za większy ruch, a wyższy AOV pozwala Ci wydawać więcej na pozyskanie każdego klienta przy zachowaniu rentowności. To jedna z najtańszych dostępnych dźwigni wzrostu.",
      },
      {
        question: "Jak quiz produktowy może zwiększyć AOV?",
        answer:
          "Polecając kompletny zestaw zamiast pojedynczego produktu. Recommendation slots zwracają pasującą rutynę, stack lub pakiet z opcją dodania całego zestawu do koszyka, więc każde zamówienie jest większe, wciąż wydając się spersonalizowane.",
      },
    ],
    related: [
      { label: "Cross-selling i upselling", href: "/glossary/cross-selling-and-upselling/" },
      { label: "Optymalizacja współczynnika konwersji", href: "/glossary/conversion-rate-optimization/" },
      { label: "Quiz kreatora pakietów", href: "/solutions/bundle-builder/" },
      { label: "Quiz kreatora rutyn", href: "/solutions/routine-builder/" },
      { label: "Kalkulator ROI quizu", href: "/quiz-roi-calculator/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "cross-selling-and-upselling": {
    slug: "cross-selling-and-upselling",
    term: "Cross-selling i upselling",
    chip: "Taktyka",
    title: "Cross-selling kontra upselling wyjaśnione",
    description:
      "Cross-selling dodaje powiązane produkty; upselling przenosi na lepszy. Oto różnica, dlaczego oba działają i jak quiz robi to bez nacisku.",
    h1: "Czym są cross-selling i upselling?",
    shortAnswer:
      "Cross-selling poleca powiązane produkty, które uzupełniają to, co kupujący kupuje, jak krem nawilżający do żelu myjącego. Upselling poleca lepszą lub większą wersję tego, czego już chce, jak większy rozmiar lub poziom premium. Oba podnoszą wartość zamówienia.",
    intro: [
      "Oba wrzuca się do jednego worka, ponieważ oba zwiększają to, co wydaje kupujący, ale działają w różnych kierunkach. Wiedza, który pasuje w danym momencie, to różnica między pomocnym a nachalnym.",
    ],
    sections: [
      {
        heading: "Cross-selling kontra upselling: różnica",
        body: [
          "Cross-selling idzie w bok. Dodaje uzupełniające artykuły do zamówienia: klasyczne czy chcesz frytki do tego?, albo szkło ochronne do telefonu. Celem jest pełniejszy zakup.",
          "Upselling idzie w górę. Przenosi kupującego na wersję o wyższej wartości tego, co już rozważa: większy rozmiar, model premium, dłuższą subskrypcję. Celem jest lepsze dopasowanie po wyższej cenie, a nie więcej artykułów.",
        ],
      },
      {
        heading: "Dlaczego oba działają, gdy są istotne",
        body: [
          "Obie taktyki podnoszą średnią wartość zamówienia i obie mogą wyjść źle. Istotny cross-sell lub upsell czyta się jak pomocna porada; nieistotny czyta się jak sklep próbujący napompować rachunek, a kupujący go ignorują lub się irytują.",
          "Istotność jest wszystkim, a istotność wymaga poznania kupującego. Rekomendacja oparta na tym, co ktoś naprawdę próbuje osiągnąć, trafia. Generyczna sekcja może Ci się też spodobać, pokazywana wszystkim, nie.",
        ],
      },
      {
        heading: "Jak quiz robi cross-selling i upselling bez nacisku",
        body: [
          "Quiz zna cel kupującego, zanim cokolwiek poleci, więc cross-sell i upsell są wbudowane w rekomendację zamiast dodawane przy kasie. Może zwrócić kompletny zestaw (cross-sell) i pokierować ku odpowiedniemu poziomowi dla zadeklarowanej potrzeby (upsell) w jednym ruchu.",
          "Ponieważ rekomendacja odpowiada na własne pytania kupującego, większe zamówienie wydaje się zasłużone. Kupujący widzi rozwiązanie, które pasuje, a nie listę dodatków.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt wbudowuje cross-selle i upselle w samą rekomendację. Recommendation slots rezerwują miejsce na każdą rolę uzupełniającą, by strona wyników zwróciła kompletny zestaw, a logika oparta na odpowiedziach kieruje kupujących ku rozmiarowi, poziomowi lub pakietowi pasującemu do tego, co Ci powiedzieli.",
      "Strona wyników obsługuje dodanie całego zestawu do koszyka plus zniżkę powiązaną z odpowiedziami, więc zamówienie rośnie, bo rekomendacja jest odpowiednia, a nie dlatego, że popup przerwał kasę.",
    ],
    faqs: [
      {
        question: "Jaka jest różnica między cross-sellingiem a upsellingiem?",
        answer:
          "Cross-selling dodaje uzupełniające produkty do zamówienia, jak krem nawilżający do żelu myjącego. Upselling przenosi na lepszą lub większą wersję tego, czego kupujący już chce, jak poziom premium lub większy rozmiar. Oba zwiększają wartość zamówienia.",
      },
      {
        question: "Czy cross-selling i upselling naprawdę działają?",
        answer:
          "Tak, gdy rekomendacja jest istotna. Sugestia, która pasuje do celu kupującego, czyta się jak pomocna i jest kupowana. Generyczny komunikat dla wszystkich jest ignorowany lub irytuje, więc istotność to to, co rozdziela oba wyniki.",
      },
      {
        question: "Jak quiz robi cross-selling i upselling?",
        answer:
          "Najpierw poznaje cel kupującego, a następnie wbudowuje cross-sell i upsell w rekomendację. Recommendation slots zwracają kompletny zestaw, a logika oparta na odpowiedziach kieruje ku odpowiedniemu poziomowi, więc większe zamówienie wydaje się poradą zamiast naciskiem.",
      },
    ],
    related: [
      { label: "Średnia wartość zamówienia", href: "/glossary/average-order-value/" },
      { label: "Quiz kreatora pakietów", href: "/solutions/bundle-builder/" },
      { label: "Quiz kreatora rutyn", href: "/solutions/routine-builder/" },
      { label: "Quiz zakupowy", href: "/glossary/shoppable-quiz/" },
      { label: "Spersonalizowane rekomendacje produktów", href: "/glossary/personalized-product-recommendations/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "customer-segmentation": {
    slug: "customer-segmentation",
    term: "Segmentacja klientów",
    chip: "Marketing",
    title: "Czym jest segmentacja klientów?",
    description:
      "Segmentacja klientów grupuje kupujących według wspólnych cech, byś mógł targetować każdą grupę w konkretny sposób. Typy, dlaczego działa i jak zasila ją quiz.",
    h1: "Czym jest segmentacja klientów?",
    shortAnswer:
      "Segmentacja klientów to praktyka grupowania klientów według wspólnych cech, takich jak cele, zachowanie lub dane demograficzne, byś mógł targetować każdą grupę istotną wiadomością zamiast wysyłać wszystkim to samo.",
    intro: [
      "Jedna wiadomość do całej Twojej listy nie mówi do nikogo w szczególności. Segmentacja pozwala Ci powiedzieć właściwą rzecz właściwej grupie, dlatego segmentowane kampanie konsekwentnie przewyższają masową wysyłkę do wszystkich.",
    ],
    sections: [
      {
        heading: "Główne sposoby segmentacji",
        body: [
          "Segmentacja demograficzna grupuje według atrybutów takich jak wiek czy lokalizacja. Segmentacja behawioralna grupuje według tego, co robią klienci: przeszłe zakupy, przeglądanie, interakcja. Segmentacja psychograficzna grupuje według postaw i wartości. Segmentacja oparta na potrzebie grupuje według problemu, który klient próbuje rozwiązać.",
          "Dla ecommerce segmenty oparte na potrzebie i behawioralne są zazwyczaj najbardziej akcjonowalne, ponieważ przekładają się bezpośrednio na to, co polecić i co powiedzieć dalej.",
        ],
      },
      {
        heading: "Dlaczego segmentacja działa",
        body: [
          "Istotność napędza odpowiedź. Klient, który kupuje pod kątem skóry suchej i wrażliwej, nie powinien otrzymywać tego samego e-maila co ten, kto kupuje prezent, a gdy go nie otrzymuje, rosną wskaźniki otwarć, kliknięcia i konwersje.",
          "Segmentacja również składa się z czasem. Każda kampania, którą wysyłasz do dobrze zdefiniowanego segmentu, uczy Cię o nim więcej, co dostraja kolejną. Lista staje się aktywem, a nie tylko kanałem nadawczym.",
        ],
      },
      {
        heading: "Problem danych stojący za segmentacją",
        body: [
          "Możesz segmentować tylko według tego, co wiesz, a większość sklepów nie wie wiele o anonimowym odwiedzającym. Dane behawioralne gromadzą się powoli i zawodzą przy nowych kupujących, a third-party data jest coraz bardziej ograniczane przez przeglądarki i regulacje.",
          "Rozwiązaniem jest zapytać. Gdy kupujący mówi Ci swój cel, preferencję lub ograniczenie, możesz od razu i precyzyjnie segmentować według tego, za jego zgodą. Te dobrowolnie podane informacje to zero-party data.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt zamienia odpowiedzi z quizu w segmenty automatycznie. Każda odpowiedź staje się tagiem klienta, jak cel:sen czy skóra:wrażliwa, który synchronizuje się z Klaviyo, Mailchimp, Omnisend, HubSpot i innymi, więc kontakty przychodzą presegmentowane według tego, co Ci powiedziały.",
      "Ponieważ segmenty budowane są z danych, które kupujący podał dobrowolnie, są dokładne od pierwszej wizyty i nie zależą od śledzenia. Każda kampania po quizie może mówić do segmentu zamiast do całej listy.",
    ],
    faqs: [
      {
        question: "Jakie są główne typy segmentacji klientów?",
        answer:
          "Częste podstawy to demograficzna (wiek, lokalizacja), behawioralna (zakupy, przeglądanie, interakcja), psychograficzna (postawy, wartości) i oparta na potrzebie (problem, który klient rozwiązuje). Dla ecommerce segmenty oparte na potrzebie i behawioralne są zazwyczaj najbardziej akcjonowalne.",
      },
      {
        question: "Dlaczego segmentacja klientów jest ważna?",
        answer:
          "Sprawia, że wiadomość jest istotna, co podnosi wskaźniki otwarć, kliknięcia i konwersje w porównaniu z wysyłaniem wszystkim tego samego. Składa się też: każda kampania do zdefiniowanego segmentu uczy Cię o nim więcej i dostraja kolejną.",
      },
      {
        question: "Jak quiz pomaga w segmentacji?",
        answer:
          "Pyta kupujących bezpośrednio, więc każda odpowiedź staje się tagiem klienta, który synchronizuje się z Twoim narzędziem do e-maili. Kontakty przychodzą presegmentowane według celu, preferencji lub ograniczenia, dokładne od pierwszej wizyty i bez zależności od śledzenia.",
      },
    ],
    related: [
      { label: "Spersonalizowane rekomendacje produktów", href: "/glossary/personalized-product-recommendations/" },
      { label: "Quiz generowania leadów", href: "/glossary/lead-generation-quiz/" },
      { label: "Zero-party data", href: "/zero-party-data/" },
      { label: "Personalizacja w ecommerce", href: "/glossary/ecommerce-personalization/" },
      { label: "Integracje", href: "/integrations/" },
    ],
    verifiedAsOf: VERIFIED,
  },
};

/** Przewodniki i strony, do których kieruje hub glosariusza. */
export const GLOSSARY_RELATED_GUIDES_PL: GlossaryLink[] = [
  {
    label: "Quiz wyszukiwania produktów",
    href: "/product-finder-quiz/",
    blurb: "Czym jest quiz wyszukiwania produktów, kiedy go używać i 12 przykładów na żywo.",
  },
  {
    label: "Quiz sprzedaży prowadzonej",
    href: "/guided-selling-quiz/",
    blurb: "Jak działa sprzedaż prowadzona w ecommerce i jak zbudować quiz.",
  },
  {
    label: "Zero-party data",
    href: "/zero-party-data/",
    blurb: "Czym jest zero-party data, dlaczego przewyższa śledzenie behawioralne i jak przechwytuje je quiz.",
  },
  {
    label: "Rozwiązania według branży",
    href: "/solutions/",
    blurb: "Rozwiązania quizu rekomendacji produktów dla pielęgnacji skóry, suplementów, mody i nie tylko.",
  },
  {
    label: "Kalkulator ROI quizu",
    href: "/quiz-roi-calculator/",
    blurb: "Oszacuj dodatkowe przychody, jakie quiz rekomendacji produktów mógłby dodać Twojemu sklepowi.",
  },
];
