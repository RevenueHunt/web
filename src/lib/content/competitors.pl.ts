import type { Competitor } from "../competitors";

// Współdzielone wartości kolumny RevenueHunt (zweryfikowane z kompendium + dokumentacją).
// Trzymane jako nazwane stałe, aby każda tabela konkurenta opowiadała
// tę samą historię RH.
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

export const COMPETITORS_PL: Record<string, Competitor> = {
  "octane-ai": {
    slug: "octane-ai",
    name: "Octane AI",
    category: "Aplikacja quizowa dla Shopify",
    title: "RevenueHunt vs Octane AI: alternatywa dla Octane AI",
    description:
      "RevenueHunt vs Octane AI: darmowy plan, bez znaku wodnego Shopify i nielimitowane quizy od $39/mo. Alternatywa dla Octane AI w quizach produktowych.",
    h1: "RevenueHunt vs Octane AI",
    heroSubtitle:
      "Oba tworzą quizy rekomendacji produktów dla Shopify. RevenueHunt dodaje darmowy plan, nielimitowane quizy i brak znaku wodnego, za ułamek ceny.",
    intro: [
      "Octane AI to aplikacja do quizów produktowych i personalizacji stworzona dla Shopify. Jej cennik opiera się na kredytach, zaczyna się od $50/mies. i nie ma darmowego planu. To zdolne narzędzie, zwłaszcza dla dużych marek kosmetycznych. Ale plan wejściowy ogranicza Cię do dwóch quizów i utrzymuje logo Octane AI w Twoim quizie, dopóki nie przejdziesz na plan Plus za $200/mies.",
      "RevenueHunt to quiz rekomendacji produktów używany przez ponad 20 000 marek (4,9★, ponad 550 recenzji). Zacznij za darmo, nigdy nie dodaje znaku wodnego do Twojego quizu Shopify w żadnym planie, pozwala tworzyć nielimitowane quizy od pierwszego dnia i działa poza Shopify na WooCommerce, BigCommerce, Magento, Wix i nie tylko.",
    ],
    rows: [
      { feature: "Darmowy plan", rh: RH.freePlan, them: "no" },
      { feature: "Początkowa cena planu płatnego", rh: RH.startingPaid, them: "$50/mo" },
      { feature: "Model cenowy", rh: "Stała opłata, za odpowiedzi", them: "Oparty na kredytach + nadwyżka" },
      { feature: "Nielimitowane quizy w planie wejściowym", rh: RH.unlimitedQuizzes, them: "no" },
      { feature: "Bez znaku wodnego dostawcy na Shopify (dowolny plan)", rh: RH.noForcedBranding, them: "Logo do planu Plus za $200/mo" },
      { feature: "Poleca realne produkty z Twojego katalogu", rh: RH.catalogRecs, them: "yes" },
      { feature: "Natywna aplikacja Shopify (Built for Shopify)", rh: RH.shopifyNative, them: "no" },
      { feature: "Działa na WooCommerce, BigCommerce, Magento, Wix i nie tylko", rh: RH.multiPlatform, them: "no" },
      { feature: "Kreator quizów z AI (konfiguracja w 60 sekund)", rh: RH.aiBuilder, them: "yes" },
      { feature: "Nielimitowana logika warunkowa / rozgałęzień", rh: RH.branching, them: "yes" },
      { feature: "Analityka porzuceń pytanie po pytaniu", rh: RH.analytics, them: "yes" },
      { feature: "Integracje z Klaviyo i e-mail / CRM", rh: RH.emailIntegrations, them: "yes" },
    ],
    whySwitch: [
      {
        title: "Zacznij za darmo, a potem płać stałą opłatę",
        body: "Octane AI nie ma darmowego planu i zaczyna od $50/mies. z kredytami, z nadwyżkami $0,10 za kredyt, gdy się skończą. RevenueHunt ma naprawdę darmowy plan i płaski cennik za odpowiedzi od $39/mies. Bez przeliczeń kredytów, bez niespodziewanych nadwyżek.",
      },
      {
        title: "Zachowaj swoją markę od pierwszego dnia",
        body: "Octane AI pokazuje swoje logo w Twoim quizie, dopóki nie zaktualizujesz do planu Plus za $200/mies. RevenueHunt nigdy nie dodaje znaku wodnego do quizów Shopify, w żadnym planie, łącznie z darmowym.",
      },
      {
        title: "Twórz tyle quizów, ile potrzebujesz",
        body: "Plan wejściowy Octane AI ogranicza Cię do dwóch quizów. RevenueHunt pozwala tworzyć nielimitowane quizy w każdym planie, więc możesz mieć quiz na każdą kolekcję, kampanię lub landing page.",
      },
      {
        title: "Sprzedawaj wszędzie, nie tylko na Shopify",
        body: "Octane AI jest wyłącznie dla Shopify. RevenueHunt działa natywnie na Shopify, a także na WooCommerce, BigCommerce, Magento, Wix, Squarespace oraz jako niezależny hostowany quiz.",
      },
    ],
    bestFor:
      "Octane AI to rozsądny wybór dla enterprise'owych marek kosmetycznych, które są już na Shopify Plus, chcą głębokiej personalizacji z AI i mają budżet na $200/mies. i wyżej. Jeśli chcesz darmowego planu, płaskiego cennika, quizów bez marki lub wsparcia wieloplatformowego, RevenueHunt pasuje lepiej.",
    migration:
      "Przejście z Octane AI jest szybkie. Odbuduj swój quiz w kreatorze typu przeciągnij i upuść RevenueHunt (albo wygeneruj go w 60 sekund za pomocą naszego AI Copilota), osadź go i połącz Klaviyo. Większość sklepów jest aktywna tego samego dnia, a nasz zespół wsparcia pomaga w migracji.",
    faqs: [
      {
        question: "Czy RevenueHunt jest tańszy niż Octane AI?",
        answer:
          "Tak. RevenueHunt ma darmowy plan i plany płatne od $39/mies. z płaskim cennikiem opartym na odpowiedziach. Octane AI nie ma darmowego planu, zaczyna od $50/mies. z systemem kredytów i nalicza $0,10 za kredyt w nadwyżkach.",
      },
      {
        question: "Czy RevenueHunt dodaje swoje logo do mojego quizu, tak jak robi to Octane AI?",
        answer:
          "Nie. RevenueHunt nigdy nie dodaje znaku wodnego do quizów Shopify w żadnym planie. Octane AI utrzymuje swoje logo w Twoim quizie, dopóki nie zaktualizujesz do planu Plus za $200/mies.",
      },
      {
        question: "Czy RevenueHunt działa na platformach innych niż Shopify?",
        answer:
          "Tak. RevenueHunt działa na Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace oraz jako niezależny hostowany quiz. Octane AI jest wyłącznie dla Shopify.",
      },
      {
        question: "Czy mogę zmigrować mój quiz z Octane AI do RevenueHunt?",
        answer:
          "Tak. Odtwórz swój quiz w kreatorze RevenueHunt albo wygeneruj go za pomocą AI Quiz Copilota, a następnie połącz swoje narzędzie do e-maili. Większość sprzedawców jest aktywna tego samego dnia, a nasz zespół pomaga w migracji.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  typeform: {
    slug: "typeform",
    name: "Typeform",
    category: "Ogólny kreator formularzy i ankiet",
    title: "RevenueHunt vs Typeform dla quizów ecommerce",
    description:
      "RevenueHunt vs Typeform: quiz Built-for-Shopify, który poleca realne produkty i generuje sprzedaż, a nie tylko formularz. Darmowy plan, od $39/mo.",
    h1: "RevenueHunt vs Typeform",
    heroSubtitle:
      "Typeform tworzy piękne formularze i ankiety. RevenueHunt tworzy quizy rekomendacji produktów, które łączą się z Twoim katalogiem Shopify i zamieniają odpowiedzi w sprzedaż.",
    intro: [
      "Typeform to kreator formularzy i ankiet online ogólnego zastosowania. Świetnie nadaje się do ankiet, formularzy pozyskiwania leadów i badań, z konwersacyjnym designem, jedno pytanie naraz. Ale nie ma natywnej integracji z Shopify, synchronizacji katalogu produktów ani silnika rekomendacji. Zbiera odpowiedzi; nie poleca produktów.",
      "RevenueHunt to quiz rekomendacji produktów Built-for-Shopify używany przez ponad 20 000 marek (4,9★, ponad 550 recenzji). Przypisuje odpowiedzi każdego kupującego do odpowiednich produktów z Twojego katalogu na żywo, pokazuje spersonalizowaną stronę wyników z bezpośrednim dodawaniem do koszyka i przechwytuje leady w Klaviyo. Lejek sprzedażowy, a nie tylko formularz.",
    ],
    rows: [
      { feature: "Darmowy plan", rh: RH.freePlan, them: "yes (ograniczony)" },
      { feature: "Początkowa cena planu płatnego", rh: RH.startingPaid, them: "$29/mo" },
      { feature: "Stworzony do rekomendacji produktów ecommerce", rh: RH.ecommerceRecs, them: "no" },
      { feature: "Poleca realne produkty z katalogu Twojego sklepu", rh: RH.catalogRecs, them: "no" },
      { feature: "Synchronizacja katalogu produktów", rh: "yes", them: "no" },
      { feature: "Natywna aplikacja Shopify (Built for Shopify)", rh: RH.shopifyNative, them: "no" },
      { feature: "Strona wyników z bezpośrednim dodawaniem do koszyka", rh: "yes", them: "no" },
      { feature: "Kreator quizów z AI (konfiguracja w 60 sekund)", rh: RH.aiBuilder, them: "yes (formularze z AI)" },
      { feature: "Logika warunkowa / rozgałęzień", rh: RH.branching, them: "yes (skoki logiczne)" },
      { feature: "Analityka porzuceń pytanie po pytaniu", rh: RH.analytics, them: "yes" },
      { feature: "Integracje z Klaviyo i e-mail / CRM", rh: RH.emailIntegrations, them: "yes" },
      { feature: "Działa na WooCommerce, BigCommerce, Magento i nie tylko", rh: RH.multiPlatform, them: "no" },
    ],
    whySwitch: [
      {
        title: "Poleca produkty, nie tylko zbiera odpowiedzi",
        body: "Typeform rejestruje odpowiedzi i na tym koniec. Silnik rekomendacji RevenueHunt klasyfikuje dokładne produkty, warianty i kolekcje z Twojego katalogu na podstawie odpowiedzi każdego kupującego i pokazuje je na spersonalizowanej stronie wyników.",
      },
      {
        title: "Stworzony dla Shopify i dla ecommerce",
        body: "Typeform nie ma natywnej integracji z Shopify ani synchronizacji katalogu. RevenueHunt to aplikacja Built-for-Shopify z synchronizacją katalogu w czasie rzeczywistym i automatyczną lokalizacją tytułów, opisów i cen produktów przez Shopify Markets.",
      },
      {
        title: "Lejek, a nie formularz",
        body: "RevenueHunt zamienia quiz w ścieżkę sprzedaży: spersonalizowane wyniki, bezpośrednie dodawanie do koszyka, bloki rabatowe i przechwytywanie e-maili w Klaviyo, aby quiz naprawdę generował przychody, a nie tylko dane.",
      },
      {
        title: "Zrobiony dla sprzedawców",
        body: "Zapomnij o budowaniu generycznych formularzy. Wykorzystaj gotowe szablony quizów do pielęgnacji skóry, suplementów, mody i nie tylko, albo pozwól AI Copilotowi stworzyć kompletny quiz produktowy na podstawie opisu Twojego sklepu w jakieś 60 sekund.",
      },
    ],
    bestFor:
      "Typeform jest doskonały do ankiet, formularzy pozyskiwania leadów, opinii i badań, gdzie nie musisz polecać produktów. Jeśli Twoim celem jest pomóc kupującym na Shopify znaleźć odpowiedni produkt i go kupić, RevenueHunt jest do tego stworzony na miarę.",
    migration:
      "Używasz już quizu Typeform? Odbuduj go w RevenueHunt w kilka minut, albo wygeneruj go za pomocą AI Copilota, połącz swoje produkty i podłącz Klaviyo. Zachowujesz konwersacyjny charakter i dodajesz prawdziwy silnik rekomendacji oraz dodawanie do koszyka.",
    faqs: [
      {
        question: "Czy Typeform może polecać produkty jak RevenueHunt?",
        answer:
          "Nie. Typeform to ogólny kreator formularzy i ankiet bez synchronizacji katalogu produktów ani silnika rekomendacji. RevenueHunt przypisuje odpowiedzi z quizu do realnych produktów z Twojego sklepu i pokazuje je na spersonalizowanej stronie wyników z dodawaniem do koszyka.",
      },
      {
        question: "Czy RevenueHunt integruje się z Shopify, a Typeform nie?",
        answer:
          "RevenueHunt to aplikacja Built-for-Shopify z synchronizacją katalogu w czasie rzeczywistym i lokalizacją Shopify Markets. Typeform nie ma natywnej integracji rekomendacji produktów z Shopify. Nie jest stworzony do odkrywania produktów w ecommerce.",
      },
      {
        question: "Czy RevenueHunt jest lepszy niż Typeform do quizu ecommerce?",
        answer:
          "Do quizów rekomendacji produktów tak. RevenueHunt jest do tego stworzony na miarę. Do ogólnych ankiet i formularzy leadowych Typeform to dobry wybór. Rozwiązują różne problemy.",
      },
      {
        question: "Czy mogę przechwytywać leady i wysyłać je do Klaviyo?",
        answer:
          "Tak. RevenueHunt przechwytuje e-maile w quizie i synchronizuje odpowiedzi oraz tagi klienta z Klaviyo, Mailchimp, Omnisend, HubSpot i innymi, dzięki czemu możesz prowadzić follow-up ze spersonalizowanymi kampaniami.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  zoovu: {
    slug: "zoovu",
    name: "Zoovu",
    category: "Enterprise'owa platforma odkrywania produktów",
    title: "RevenueHunt vs Zoovu: alternatywa samoobsługowa",
    description:
      "RevenueHunt vs Zoovu: skoncentrowany i samoobsługowy quiz produktowy dla Shopify, z darmowym planem i cennikiem od $39/mo, a nie enterprise'owa suita do odkrywania.",
    h1: "RevenueHunt vs Zoovu",
    heroSubtitle:
      "Zoovu to enterprise'owa platforma odkrywania produktów i sprzedaży prowadzonej, sprzedawana przez demo. RevenueHunt to skoncentrowany quiz produktowy, który możesz zainstalować już dziś: darmowy start, przejrzysty cennik, aktywny tego samego dnia.",
    intro: [
      "Zoovu to enterprise'owa platforma odkrywania produktów, która łączy wyszukiwanie z AI, sprzedaż prowadzoną, rekomendacje produktów i wizualne konfiguratory (CPQ) dla dużych marek B2C i B2B z ogromnymi, złożonymi katalogami. Jest niezależna od platformy, sprzedawana przez dema z indywidualnym cennikiem enterprise i nie ma darmowego planu ani samoobsługowej rejestracji.",
      "RevenueHunt to skoncentrowany quiz rekomendacji produktów używany przez ponad 20 000 marek (4,9★, ponad 550 recenzji). Zamiast enterprise'owej suity do odkrywania robi jedną rzecz wyjątkowo dobrze - prowadzi kupujących na Shopify do odpowiedniego produktu - z przejrzystym cennikiem, darmowym planem i konfiguracją tego samego dnia, bez potrzeby rozmowy sprzedażowej.",
    ],
    rows: [
      { feature: "Darmowy plan", rh: RH.freePlan, them: "no" },
      { feature: "Przejrzysty, publiczny cennik", rh: RH.transparentPricing, them: "Indywidualny / poproś o demo" },
      { feature: "Cena początkowa", rh: RH.startingPaid, them: "Prowadzony przez sprzedaż (enterprise)" },
      { feature: "Konfiguracja samoobsługowa (bez rozmowy sprzedażowej)", rh: "yes", them: "no" },
      { feature: "Stworzony na miarę do quizów rekomendacji produktów", rh: RH.ecommerceRecs, them: "Quiz to moduł suity do odkrywania" },
      { feature: "Poleca realne produkty z Twojego katalogu", rh: RH.catalogRecs, them: "yes" },
      { feature: "Natywna aplikacja Shopify (Built for Shopify)", rh: RH.shopifyNative, them: "Przez integrację" },
      { feature: "Kreator quizów z AI (konfiguracja w 60 sekund)", rh: RH.aiBuilder, them: "Enterprise'owa suita AI" },
      { feature: "Nielimitowane quizy", rh: RH.unlimitedQuizzes, them: "yes" },
      { feature: "Nielimitowana logika warunkowa / rozgałęzień", rh: RH.branching, them: "yes" },
      { feature: "Analityka porzuceń pytanie po pytaniu", rh: RH.analytics, them: "yes" },
      { feature: "Integracje z Klaviyo i e-mail / CRM", rh: RH.emailIntegrations, them: "yes" },
    ],
    whySwitch: [
      {
        title: "Samoobsługa, a nie rozmowa sprzedażowa",
        body: "Zoovu jest sprzedawane przez dema i indywidualne kontrakty enterprise bez publicznego cennika. RevenueHunt to zainstaluj i gotowe: wybierz plan, stwórz swój quiz i opublikuj. Bez zakupów korporacyjnych, bez projektu wdrożeniowego.",
      },
      {
        title: "Aktywny w kilka minut, a nie wdrożenie",
        body: "Zoovu to ciężka suita do odkrywania obejmująca wyszukiwanie, konfiguratory i sprzedaż prowadzoną w wielu systemach. RevenueHunt to skoncentrowana aplikacja quizowa, którą większość sprzedawców uruchamia tego samego dnia, z AI Copilotem, który składa kompletny quiz w 60 sekund.",
      },
      {
        title: "Cennik pasujący do rozwijającej się marki",
        body: "Enterprise'owe platformy odkrywania mają cennik dla globalnych katalogów i dużych zespołów. RevenueHunt zaczyna za darmo i skaluje się za odpowiedzi od $39/mies., na miarę marek na Shopify i Shopify Plus.",
      },
      {
        title: "Prostota Built-for-Shopify",
        body: "RevenueHunt to aplikacja Built-for-Shopify z synchronizacją katalogu w czasie rzeczywistym i lokalizacją Shopify Markets, oceniona na 4,9★ przez ponad 550 sprzedawców. Głębia, której potrzebujesz do odkrywania produktów, bez ciężaru enterprise.",
      },
    ],
    bestFor:
      "Zoovu pasuje dużym przedsiębiorstwom z masywnymi, złożonymi katalogami (elektronika użytkowa, AGD, przemysł, B2B), które potrzebują konfiguratorów, CPQ i sprzedaży prowadzonej w wielu systemach, z budżetem i zespołem na wdrożenie enterprise. Jeśli chcesz skoncentrowanego, przystępnego i samoobsługowego quizu dla Shopify, RevenueHunt pasuje lepiej.",
    migration:
      "Przejście z Zoovu jest proste. Stwórz swój quiz w RevenueHunt (albo wygeneruj go za pomocą AI Copilota), osadź go i połącz Klaviyo lub swój CRM. Bez projektu wdrożeniowego. Większość sklepów jest aktywna tego samego dnia, a wsparcie pomaga Ci dotrzeć do celu.",
    faqs: [
      {
        question: "Ile kosztuje RevenueHunt w porównaniu z Zoovu?",
        answer:
          "RevenueHunt ma darmowy plan i przejrzyste plany płatne od $39/mies. Zoovu nie publikuje cen. To enterprise'owa platforma prowadzona przez sprzedaż, która podaje indywidualną wycenę po demie.",
      },
      {
        question: "Czy RevenueHunt to enterprise'owa platforma odkrywania jak Zoovu?",
        answer:
          "Nie, i o to chodzi. Zoovu łączy wyszukiwanie z AI, konfiguratory, CPQ i sprzedaż prowadzoną dla dużych katalogów. RevenueHunt skupia się na quizach rekomendacji produktów dla Shopify i robi to jedno zadanie wyjątkowo dobrze, z konfiguracją samoobsługową i bez rozmowy sprzedażowej.",
      },
      {
        question: "Czy RevenueHunt prowadzi sprzedaż prowadzoną jak Zoovu?",
        answer:
          "Tak. Quiz RevenueHunt to sprzedaż prowadzona: zadaje odpowiednie pytania i przypisuje odpowiedzi do dokładnych produktów z Twojego katalogu, ze spersonalizowaną stroną wyników i bezpośrednim dodawaniem do koszyka, bez cennika enterprise ani wdrożenia.",
      },
      {
        question: "Ile trwa konfiguracja w porównaniu z Zoovu?",
        answer:
          "Większość sprzedawców RevenueHunt uruchamia się tego samego dnia, a AI Quiz Copilot może złożyć kompletny quiz w jakieś 60 sekund. Zoovu to zazwyczaj wdrożenie enterprise prowadzone przez sprzedaż.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  jebbit: {
    slug: "jebbit",
    name: "Jebbit",
    category: "Enterprise'owa platforma danych deklarowanych (obecnie część BlueConic)",
    title: "RevenueHunt vs Jebbit: alternatywa samoobsługowa",
    description:
      "RevenueHunt vs Jebbit: niezależny i samoobsługowy quiz produktowy dla Shopify, z darmowym planem od $39/mo. Jebbit jest obecnie częścią enterprise'owego CDP BlueConic.",
    h1: "RevenueHunt vs Jebbit",
    heroSubtitle:
      "Jebbit jest obecnie częścią enterprise'owej platformy danych klienta BlueConic, sprzedawanej przez demo. RevenueHunt to niezależny i samoobsługowy quiz produktowy: darmowy start, natywny dla Shopify, aktywny tego samego dnia.",
    intro: [
      "Jebbit tworzy interaktywne quizy, wyszukiwarki produktów i przepływy preferencji, by zbierać dane deklarowane (zero-party). Zostało przejęte i jest obecnie „Experiences by Jebbit”, częścią platformy danych klienta BlueConic, skierowaną do enterprise'owych i średniej wielkości marek B2C (L'Oréal, Express, Heineken), niezależną od platformy i sprzedawaną przez dema bez publicznych cen ani darmowego planu.",
      "RevenueHunt to niezależny quiz rekomendacji produktów używany przez ponad 20 000 marek (4,9★, ponad 550 recenzji). Nie musisz kupować CDP, by go używać: to skoncentrowany quiz Built-for-Shopify, z przejrzystym cennikiem, darmowym planem i konfiguracją tego samego dnia, samoobsługowy, bez rozmowy sprzedażowej.",
    ],
    rows: [
      { feature: "Darmowy plan", rh: RH.freePlan, them: "no" },
      { feature: "Przejrzysty, publiczny cennik", rh: RH.transparentPricing, them: "Indywidualny / poproś o demo" },
      { feature: "Cena początkowa", rh: RH.startingPaid, them: "Prowadzony przez sprzedaż (enterprise)" },
      { feature: "Konfiguracja samoobsługowa (bez rozmowy sprzedażowej)", rh: "yes", them: "no" },
      { feature: "Niezależny produkt (bez potrzeby kupowania platformy)", rh: "yes", them: "Obecnie część CDP BlueConic" },
      { feature: "Poleca realne produkty z Twojego katalogu", rh: RH.catalogRecs, them: "yes" },
      { feature: "Natywna aplikacja Shopify (Built for Shopify)", rh: RH.shopifyNative, them: "Przez integrację" },
      { feature: "Kreator quizów z AI (konfiguracja w 60 sekund)", rh: RH.aiBuilder, them: "no" },
      { feature: "Nielimitowane quizy", rh: RH.unlimitedQuizzes, them: "yes" },
      { feature: "Nielimitowana logika warunkowa / rozgałęzień", rh: RH.branching, them: "yes" },
      { feature: "Analityka porzuceń pytanie po pytaniu", rh: RH.analytics, them: "yes" },
      { feature: "Przechwytuje dane zero-party / deklarowane", rh: "yes", them: "yes" },
    ],
    whySwitch: [
      {
        title: "Niezależny quiz, a nie zakup platformy",
        body: "Jebbit jest obecnie „Experiences by Jebbit” w ramach CDP BlueConic. RevenueHunt to skoncentrowana aplikacja, której możesz używać samodzielnie. Bez platformy danych klienta do kupowania lub wdrażania.",
      },
      {
        title: "Samoobsługa, a nie rozmowa sprzedażowa",
        body: "Jebbit/BlueConic jest sprzedawane przez dema i indywidualne kontrakty enterprise bez publicznych cen. RevenueHunt to zainstaluj i gotowe, z darmowym planem i przejrzystym cennikiem od $39/mies.",
      },
      {
        title: "Stworzony dla Shopify, aktywny tego samego dnia",
        body: "RevenueHunt to aplikacja Built-for-Shopify z synchronizacją katalogu w czasie rzeczywistym i bezpośrednim dodawaniem do koszyka oraz AI Copilotem, który składa kompletny quiz w 60 sekund. Większość sprzedawców uruchamia się tego samego dnia.",
      },
      {
        title: "Wciąż jesteś właścicielem swoich danych zero-party",
        body: "Każda odpowiedź z quizu to dane zero-party, które Twoi kupujący dobrowolnie podają. RevenueHunt synchronizuje odpowiedzi i tagi klienta z Klaviyo, Mailchimp, Omnisend, HubSpot i innymi. Nie potrzeba CDP, by wykorzystać je w działaniu.",
      },
    ],
    bestFor:
      "Jebbit, jako część BlueConic, pasuje enterprise'owym markom B2C, które chcą doświadczeń z danymi deklarowanymi mocno powiązanych z pełną platformą danych klienta i aktywowanych w wielu kanałach, z budżetem na CDP. Jeśli chcesz niezależnego, przystępnego i samoobsługowego quizu dla Shopify, RevenueHunt pasuje lepiej.",
    migration:
      "Wyjście z Jebbit albo ocena BlueConic jest proste. Stwórz swój quiz w RevenueHunt (albo wygeneruj go za pomocą AI Copilota), osadź go i połącz Klaviyo lub swój CRM. Większość sklepów jest aktywna tego samego dnia, a Twoje dane zero-party wciąż płyną do Twoich narzędzi e-mailowych.",
    faqs: [
      {
        question: "Czy Jebbit jest nadal dostępny samodzielnie?",
        answer:
          "Jebbit jest obecnie „Experiences by Jebbit”, częścią platformy danych klienta BlueConic. RevenueHunt to niezależny quiz produktowy, którego możesz używać bez kupowania CDP: samoobsługowy, z darmowym planem od $39/mies.",
      },
      {
        question: "Ile kosztuje RevenueHunt w porównaniu z Jebbit?",
        answer:
          "RevenueHunt ma darmowy plan i przejrzyste plany płatne od $39/mies. Jebbit/BlueConic nie publikuje cen. To enterprise'owa platforma prowadzona przez sprzedaż, która podaje indywidualną wycenę po demie.",
      },
      {
        question: "Czy RevenueHunt zbiera dane zero-party (deklarowane) jak Jebbit?",
        answer:
          "Tak. Każda odpowiedź z quizu to dane zero-party, które Twoi kupujący dobrowolnie podają. RevenueHunt synchronizuje odpowiedzi i tagi klienta z Klaviyo, Mailchimp, Omnisend, HubSpot i innymi do segmentacji i spersonalizowanego marketingu.",
      },
      {
        question: "Ile trwa konfiguracja w porównaniu z Jebbit?",
        answer:
          "Większość sprzedawców RevenueHunt uruchamia się tego samego dnia, a AI Quiz Copilot może złożyć kompletny quiz w jakieś 60 sekund. Jebbit/BlueConic to zazwyczaj wdrożenie enterprise prowadzone przez sprzedaż.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  nosto: {
    slug: "nosto",
    name: "Nosto",
    category: "Enterprise'owa platforma personalizacji",
    title: "RevenueHunt vs Nosto: alternatywa samoobsługowa",
    description:
      "RevenueHunt vs Nosto: skoncentrowany i samoobsługowy quiz produktowy, który przechwytuje dane zero-party, z darmowym planem od $39/mo, a nie enterprise'owa suita personalizacji.",
    h1: "RevenueHunt vs Nosto",
    heroSubtitle:
      "Nosto to enterprise'owa suita personalizacji, wyszukiwania i merchandisingu sprzedawana przez demo. RevenueHunt to skoncentrowany quiz produktowy zero-party, który możesz zainstalować już dziś: darmowy start, aktywny tego samego dnia.",
    intro: [
      "Nosto to Commerce Experience Platform, która łączy rekomendacje produktów z AI, spersonalizowane wyszukiwanie na stronie, merchandising i personalizację treści dla marek enterprise'owych i średniej wielkości. Jest niezależna od platformy, sprzedawana przez dema z indywidualnym cennikiem enterprise i nie ma darmowego planu ani samoobsługowej rejestracji. Jej personalizacja opiera się głównie na danych behawioralnych, a nie na quizach.",
      "RevenueHunt to skoncentrowany quiz rekomendacji produktów używany przez ponad 20 000 marek (4,9★, ponad 550 recenzji). Zamiast enterprise'owej suity prowadzi kupujących do odpowiedniego produktu, pytając ich bezpośrednio, przechwytując dane zero-party, których jesteś właścicielem, z przejrzystym cennikiem, darmowym planem i konfiguracją tego samego dnia, bez potrzeby rozmowy sprzedażowej.",
    ],
    rows: [
      { feature: "Darmowy plan", rh: RH.freePlan, them: "no" },
      { feature: "Przejrzysty, publiczny cennik", rh: RH.transparentPricing, them: "Indywidualny / poproś o demo" },
      { feature: "Cena początkowa", rh: RH.startingPaid, them: "Prowadzony przez sprzedaż (enterprise)" },
      { feature: "Konfiguracja samoobsługowa (bez rozmowy sprzedażowej)", rh: "yes", them: "no" },
      { feature: "Stworzony na miarę do quizów rekomendacji produktów", rh: RH.ecommerceRecs, them: "Suita personalizacji, nie prowadzona przez quiz" },
      { feature: "Przechwytuje dane zero-party (kupujący mówią Ci to bezpośrednio)", rh: "yes", them: "Głównie behawioralne / predykcyjne" },
      { feature: "Poleca realne produkty z Twojego katalogu", rh: RH.catalogRecs, them: "yes" },
      { feature: "Natywna aplikacja Shopify (Built for Shopify)", rh: RH.shopifyNative, them: "yes" },
      { feature: "Kreator quizów z AI (konfiguracja w 60 sekund)", rh: RH.aiBuilder, them: "no" },
      { feature: "Nielimitowane quizy", rh: RH.unlimitedQuizzes, them: "To nie narzędzie quizowe" },
      { feature: "Analityka porzuceń pytanie po pytaniu", rh: RH.analytics, them: "yes" },
      { feature: "Integracje z Klaviyo i e-mail / CRM", rh: RH.emailIntegrations, them: "yes" },
    ],
    whySwitch: [
      {
        title: "Samoobsługa, a nie rozmowa sprzedażowa",
        body: "Nosto jest sprzedawane przez dema i indywidualne kontrakty enterprise bez publicznych cen. RevenueHunt to zainstaluj i gotowe: wybierz plan, stwórz swój quiz i opublikuj, z darmowym planem i przejrzystym cennikiem od $39/mies.",
      },
      {
        title: "Dane zero-party, a nie tylko śledzenie behawioralne",
        body: "Nosto personalizuje głównie na podstawie sygnałów behawioralnych i predykcyjnych. RevenueHunt pyta kupujących bezpośrednio za pomocą quizu, przechwytując dane zero-party, których jesteś właścicielem i które możesz synchronizować z Klaviyo, Mailchimp, Omnisend i innymi.",
      },
      {
        title: "Aktywny w kilka minut, a nie wdrożenie",
        body: "Nosto to wielomodułowa suita (rekomendacje, wyszukiwanie, merchandising), która zwykle wymaga onboardingu. RevenueHunt to skoncentrowana aplikacja quizowa, którą większość sprzedawców uruchamia tego samego dnia, z AI Copilotem, który składa kompletny quiz w 60 sekund.",
      },
      {
        title: "Cennik pasujący do rozwijającej się marki",
        body: "Enterprise'owe suity personalizacji mają cennik dla dużych zespołów i katalogów. RevenueHunt zaczyna za darmo i skaluje się za odpowiedzi od $39/mies., na miarę marek na Shopify i Shopify Plus.",
      },
    ],
    bestFor:
      "Nosto pasuje markom enterprise'owym i średniej wielkości, które chcą pełnej suity personalizacji behawioralnej, wyszukiwania i merchandisingu w wielu witrynach, z budżetem i zespołem na wdrożenie enterprise. Jeśli chcesz skoncentrowanego, przystępnego i samoobsługowego quizu produktowego, który przechwytuje dane zero-party, RevenueHunt pasuje lepiej.",
    migration:
      "Przejście z Nosto jest proste. Stwórz swój quiz w RevenueHunt (albo wygeneruj go za pomocą AI Copilota), osadź go i połącz Klaviyo lub swój CRM. Bez projektu wdrożeniowego. Większość sklepów jest aktywna tego samego dnia, a Twoje dane zero-party płyną prosto do Twoich narzędzi e-mailowych.",
    faqs: [
      {
        question: "Ile kosztuje RevenueHunt w porównaniu z Nosto?",
        answer:
          "RevenueHunt ma darmowy plan i przejrzyste plany płatne od $39/mies. Nosto nie publikuje cen. To enterprise'owa platforma prowadzona przez sprzedaż, która podaje indywidualną wycenę po demie.",
      },
      {
        question: "Czy RevenueHunt to suita personalizacji jak Nosto?",
        answer:
          "Nie, i o to chodzi. Nosto łączy rekomendacje behawioralne, wyszukiwanie na stronie i merchandising. RevenueHunt skupia się na quizach rekomendacji produktów, które przechwytują dane zero-party, z konfiguracją samoobsługową i bez rozmowy sprzedażowej.",
      },
      {
        question: "Czy RevenueHunt używa danych zero-party zamiast śledzenia behawioralnego?",
        answer:
          "Tak. RevenueHunt prowadzi kupujących przez quiz, a oni mówią Ci swoje preferencje, cele i ograniczenia bezpośrednio: dane zero-party, których jesteś właścicielem, zamiast wnioskowania intencji z zachowania i plików cookie.",
      },
      {
        question: "Ile trwa konfiguracja w porównaniu z Nosto?",
        answer:
          "Większość sprzedawców RevenueHunt uruchamia się tego samego dnia, a AI Quiz Copilot może złożyć kompletny quiz w jakieś 60 sekund. Nosto to zazwyczaj wdrożenie enterprise prowadzone przez sprzedaż.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  tolstoy: {
    slug: "tolstoy",
    name: "Tolstoy",
    category: "Platforma wideo zakupowego i quizów",
    title: "RevenueHunt vs Tolstoy: alternatywa skoncentrowana na quizie",
    description:
      "RevenueHunt vs Tolstoy: quiz produktowy stworzony na miarę z prawdziwym silnikiem rekomendacji i danymi zero-party, kontra platforma wideo z funkcją quizu.",
    h1: "RevenueHunt vs Tolstoy",
    heroSubtitle:
      "Tolstoy to platforma wideo zakupowego z funkcją quizu. RevenueHunt to quiz rekomendacji produktów stworzony na miarę, z prawdziwym silnikiem rekomendacji i danymi zero-party.",
    intro: [
      "Tolstoy to platforma commerce z AI zbudowana wokół wideo zakupowego, mediów generowanych przez AI i agenta zakupowego z AI, z cennikiem opartym na wyświetleniach od $19/mies. To solidne narzędzie skoncentrowane na wideo. Ale quiz produktowy to funkcja drugorzędna obok doświadczenia wideo.",
      "RevenueHunt to quiz rekomendacji produktów używany przez ponad 20 000 marek (4,9★, ponad 550 recenzji). Jest skoncentrowany na quizie: dedykowany silnik rekomendacji przypisuje odpowiedzi każdego kupującego do odpowiednich produktów z Twojego katalogu, przechwytuje dane zero-party i konwertuje na spersonalizowanej stronie wyników, na Shopify, WooCommerce, BigCommerce, Magento, Wix i nie tylko.",
    ],
    rows: [
      { feature: "Darmowy plan", rh: RH.freePlan, them: "yes (ograniczony)" },
      { feature: "Początkowa cena planu płatnego", rh: RH.startingPaid, them: "$19/mo" },
      { feature: "Model cenowy", rh: "Stała opłata, za odpowiedzi", them: "Za wyświetlenia + kredyty AI" },
      { feature: "Stworzony na miarę do quizów rekomendacji produktów", rh: RH.ecommerceRecs, them: "Quiz to funkcja drugorzędna (skoncentrowany na wideo)" },
      { feature: "Dedykowany silnik rekomendacji (głos za i wykluczenie, strona wyników)", rh: "yes", them: "Zakup prowadzony przez wideo" },
      { feature: "Poleca realne produkty z Twojego katalogu", rh: RH.catalogRecs, them: "yes" },
      { feature: "Przechwytuje dane zero-party (kupujący mówią Ci to bezpośrednio)", rh: "yes", them: "Głównie dane interakcji z wideo" },
      { feature: "Natywna aplikacja Shopify (Built for Shopify)", rh: RH.shopifyNative, them: "yes" },
      { feature: "Działa na WooCommerce, BigCommerce, Magento, Wix i nie tylko", rh: RH.multiPlatform, them: "no" },
      { feature: "Kreator quizów z AI (konfiguracja w 60 sekund)", rh: RH.aiBuilder, them: "AI skoncentrowane na wideo" },
      { feature: "Analityka porzuceń pytanie po pytaniu", rh: RH.analytics, them: "yes" },
      { feature: "Integracje z Klaviyo i e-mail / CRM", rh: RH.emailIntegrations, them: "yes" },
    ],
    whySwitch: [
      {
        title: "Narzędzie skoncentrowane na quizie, a nie dodatek wideo",
        body: "Tolstoy to platforma wideo zakupowego, gdzie quiz jest funkcją drugorzędną. RevenueHunt jest stworzony na miarę do quizów rekomendacji produktów, z dedykowanym silnikiem rekomendacji i stroną wyników skoncentrowaną na konwersji.",
      },
      {
        title: "Prawdziwy silnik rekomendacji",
        body: "RevenueHunt klasyfikuje dokładne produkty, warianty i kolekcje z Twojego katalogu na żywo za pomocą modelu głosu za i wykluczenia, z warunkowymi blokami wyników i bezpośrednim dodawaniem do koszyka. Głębia, której quiz narzędzia wideo nie dorównuje.",
      },
      {
        title: "Dane zero-party, których jesteś właścicielem",
        body: "RevenueHunt przechwytuje to, co kupujący Ci mówią (preferencje, cele, ograniczenia) i synchronizuje to z Klaviyo, Mailchimp, Omnisend i innymi do segmentacji. Mocną stroną Tolstoya jest interakcja z wideo, a nie ustrukturyzowane dane z quizu.",
      },
      {
        title: "Sprzedawaj wszędzie, sprawdzone na skalę",
        body: "RevenueHunt działa natywnie na Shopify, a także na WooCommerce, BigCommerce, Magento, Wix, Squarespace i niezależnie, z zaufaniem ponad 20 000 marek i oceną 4,9★ z ponad 550 recenzji.",
      },
    ],
    bestFor:
      "Tolstoy to dobry wybór, jeśli Twoja strategia jest prowadzona przez wideo (wideo zakupowe, UGC, TikTok Shop), a quiz jest czymś mile widzianym, ale nie niezbędnym. Jeśli chcesz dedykowanego quizu rekomendacji produktów z prawdziwym silnikiem rekomendacji i danymi zero-party, RevenueHunt pasuje lepiej.",
    migration:
      "Jeśli używałeś quizu wewnątrz Tolstoya, zmiana jest szybka. Odbuduj go w kreatorze RevenueHunt (albo wygeneruj go w 60 sekund za pomocą naszego AI Copilota), osadź go i połącz Klaviyo. Większość sklepów jest aktywna tego samego dnia, a nasz zespół wsparcia pomaga w migracji.",
    faqs: [
      {
        question: "Czy RevenueHunt jest lepszy niż Tolstoy do quizu produktowego?",
        answer:
          "Do dedykowanego quizu rekomendacji produktów tak. RevenueHunt jest do tego stworzony na miarę, z prawdziwym silnikiem rekomendacji i danymi zero-party. Tolstoy jest skoncentrowany na wideo, z quizem jako funkcją drugorzędną. Do wideo zakupowego konkretnie Tolstoy jest stworzony na miarę.",
      },
      {
        question: "Czy Tolstoy robi quizy rekomendacji produktów?",
        answer:
          "Tak, jako funkcję drugorzędną obok swojego wideo zakupowego. RevenueHunt jest skoncentrowany na quizie: jest zbudowany wokół quizu oraz jego silnika rekomendacji, strony wyników i przechwytywania danych zero-party.",
      },
      {
        question: "Czy RevenueHunt też obsługuje wideo?",
        answer:
          "Tak. Możesz dodać wideo do pytań quizu i spersonalizowanej strony wyników. RevenueHunt jest skoncentrowany na quizie, a nie na byciu platformą wideo, więc wideo wspiera quiz, a nie odwrotnie.",
      },
      {
        question: "Czy mogę przechwytywać dane zero-party i wysyłać je do Klaviyo?",
        answer:
          "Tak. RevenueHunt przechwytuje odpowiedzi z quizu jako dane zero-party i synchronizuje odpowiedzi oraz tagi klienta z Klaviyo, Mailchimp, Omnisend, HubSpot i innymi do segmentacji i spersonalizowanego marketingu.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },
};
