import type { Competitor } from "../competitors";

// Valores partilhados da coluna RevenueHunt (compendium + docs verificados).
// Mantidos como constantes para que cada tabela de comparação conte a mesma
// história sobre a RH.
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

export const COMPETITORS_PT: Record<string, Competitor> = {
  "octane-ai": {
    slug: "octane-ai",
    name: "Octane AI",
    category: "App de quiz para Shopify",
    title: "RevenueHunt vs Octane AI: alternativa ao Octane AI",
    description:
      "RevenueHunt vs Octane AI: plano gratuito, sem marca de água da Shopify e quizzes ilimitados a partir de $39/mo. A alternativa ao Octane AI para quizzes de produtos.",
    h1: "RevenueHunt vs Octane AI",
    heroSubtitle:
      "Ambos criam quizzes de recomendação de produtos para a Shopify. A RevenueHunt acrescenta um plano gratuito, quizzes ilimitados e nenhuma marca de água, por uma fração do preço.",
    intro: [
      "O Octane AI é uma app de quiz de produtos e personalização criada para a Shopify. O preço é baseado em créditos, começa nos $50/mês e não há plano gratuito. É uma ferramenta capaz, sobretudo para marcas de beleza maiores. Mas o plano de entrada limita-te a dois quizzes e mantém o logótipo do Octane AI no teu quiz até chegares ao plano Plus de $200/mês.",
      "A RevenueHunt é o quiz de recomendação de produtos usado por mais de 20.000 marcas (4,9★, mais de 550 avaliações). Começa grátis, nunca acrescenta uma marca de água ao teu quiz na Shopify em nenhum plano, deixa-te criar quizzes ilimitados desde o primeiro dia e funciona para além da Shopify em WooCommerce, BigCommerce, Magento, Wix e mais.",
    ],
    rows: [
      { feature: "Plano gratuito", rh: RH.freePlan, them: "no" },
      { feature: "Preço inicial pago", rh: RH.startingPaid, them: "$50/mo" },
      { feature: "Modelo de preços", rh: "Fixo, por respostas", them: "Baseado em créditos + excedente" },
      { feature: "Quizzes ilimitados no plano de entrada", rh: RH.unlimitedQuizzes, them: "no" },
      { feature: "Sem marca de água do fornecedor na Shopify (qualquer plano)", rh: RH.noForcedBranding, them: "Logótipo até ao Plus de $200/mo" },
      { feature: "Recomenda produtos reais do teu catálogo", rh: RH.catalogRecs, them: "yes" },
      { feature: "App nativa da Shopify (Built for Shopify)", rh: RH.shopifyNative, them: "no" },
      { feature: "Funciona em WooCommerce, BigCommerce, Magento, Wix e mais", rh: RH.multiPlatform, them: "no" },
      { feature: "Construtor de quiz com AI (configuração em 60 segundos)", rh: RH.aiBuilder, them: "yes" },
      { feature: "Lógica condicional / de ramificação ilimitada", rh: RH.branching, them: "yes" },
      { feature: "Análise de abandono pergunta a pergunta", rh: RH.analytics, them: "yes" },
      { feature: "Integrações com Klaviyo e email / CRM", rh: RH.emailIntegrations, them: "yes" },
    ],
    whySwitch: [
      {
        title: "Começa grátis, depois paga um preço fixo",
        body: "O Octane AI não tem plano gratuito e começa nos $50/mês em créditos, com excedentes de $0,10 por crédito quando estes acabam. A RevenueHunt tem um plano genuinamente gratuito e preços fixos por respostas a partir de $39/mês. Sem contas de créditos, sem excedentes inesperados.",
      },
      {
        title: "Mantém a tua marca desde o primeiro dia",
        body: "O Octane AI mostra o seu logótipo no teu quiz até fazeres upgrade para o plano Plus de $200/mês. A RevenueHunt nunca acrescenta uma marca de água aos quizzes na Shopify, em nenhum plano, incluindo o gratuito.",
      },
      {
        title: "Cria tantos quizzes quantos precisares",
        body: "O plano de entrada do Octane AI limita-te a dois quizzes. A RevenueHunt deixa-te criar quizzes ilimitados em todos os planos, para que possas ter um quiz por coleção, campanha ou landing page.",
      },
      {
        title: "Vende em qualquer lado, não só na Shopify",
        body: "O Octane AI funciona apenas na Shopify. A RevenueHunt corre nativamente na Shopify e também no WooCommerce, BigCommerce, Magento, Wix, Squarespace e como quiz alojado autónomo.",
      },
    ],
    bestFor:
      "O Octane AI faz sentido para marcas de beleza enterprise já na Shopify Plus que querem personalização profunda com AI e têm orçamento para $200/mês ou mais. Se queres um plano gratuito, preços fixos, quizzes sem marca ou suporte multiplataforma, a RevenueHunt encaixa melhor.",
    migration:
      "Mudar do Octane AI é rápido. Reconstrói o teu quiz no construtor drag-and-drop da RevenueHunt (ou gera-o em 60 segundos com o nosso AI Copilot), insere-o e liga o Klaviyo. A maioria das lojas fica online no mesmo dia, e a nossa equipa de suporte ajuda-te na migração.",
    faqs: [
      {
        question: "A RevenueHunt é mais barata do que o Octane AI?",
        answer:
          "Sim. A RevenueHunt tem um plano gratuito e planos pagos a partir de $39/mês com preços fixos baseados em respostas. O Octane AI não tem plano gratuito, começa nos $50/mês num sistema de créditos e cobra $0,10 por crédito nos excedentes.",
      },
      {
        question: "A RevenueHunt acrescenta o seu logótipo ao meu quiz, como o Octane AI?",
        answer:
          "Não. A RevenueHunt nunca acrescenta uma marca de água aos quizzes na Shopify em nenhum plano. O Octane AI mantém o seu logótipo no teu quiz até fazeres upgrade para o plano Plus de $200/mês.",
      },
      {
        question: "A RevenueHunt funciona em plataformas além da Shopify?",
        answer:
          "Sim. A RevenueHunt funciona na Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace e como quiz alojado autónomo. O Octane AI funciona apenas na Shopify.",
      },
      {
        question: "Posso migrar o meu quiz do Octane AI para a RevenueHunt?",
        answer:
          "Sim. Recria o teu quiz no construtor da RevenueHunt ou gera-o com o AI Quiz Copilot, depois liga a tua ferramenta de email. A maioria dos comerciantes fica online no mesmo dia, e a nossa equipa ajuda na migração.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  typeform: {
    slug: "typeform",
    name: "Typeform",
    category: "construtor genérico de formulários e inquéritos",
    title: "RevenueHunt vs Typeform para quizzes de ecommerce",
    description:
      "RevenueHunt vs Typeform: um quiz Built-for-Shopify que recomenda produtos reais e gera vendas, não apenas um formulário. Plano gratuito, a partir de $39/mo.",
    h1: "RevenueHunt vs Typeform",
    heroSubtitle:
      "O Typeform cria formulários e inquéritos bonitos. A RevenueHunt cria quizzes de recomendação de produtos que se ligam ao teu catálogo da Shopify e transformam respostas em vendas.",
    intro: [
      "O Typeform é um construtor genérico de formulários e inquéritos online. É ótimo para inquéritos, formulários de leads e investigação, com um design conversacional, uma pergunta de cada vez. Mas não tem integração nativa com a Shopify, nem sincronização de catálogo de produtos, nem motor de recomendações. Recolhe respostas; não recomenda produtos.",
      "A RevenueHunt é um quiz de recomendação de produtos Built-for-Shopify usado por mais de 20.000 marcas (4,9★, mais de 550 avaliações). Associa as respostas de cada comprador aos produtos certos do teu catálogo em tempo real, mostra uma página de resultados personalizada com adicionar ao carrinho direto e capta leads para o Klaviyo. Um funil de vendas, não apenas um formulário.",
    ],
    rows: [
      { feature: "Plano gratuito", rh: RH.freePlan, them: "yes (limitado)" },
      { feature: "Preço inicial pago", rh: RH.startingPaid, them: "$29/mo" },
      { feature: "Feito para recomendações de produtos de ecommerce", rh: RH.ecommerceRecs, them: "no" },
      { feature: "Recomenda produtos reais do catálogo da tua loja", rh: RH.catalogRecs, them: "no" },
      { feature: "Sincronização do catálogo de produtos", rh: "yes", them: "no" },
      { feature: "App nativa da Shopify (Built for Shopify)", rh: RH.shopifyNative, them: "no" },
      { feature: "Página de resultados com adicionar ao carrinho direto", rh: "yes", them: "no" },
      { feature: "Construtor de quiz com AI (configuração em 60 segundos)", rh: RH.aiBuilder, them: "yes (formulários com AI)" },
      { feature: "Lógica condicional / de ramificação", rh: RH.branching, them: "yes (saltos lógicos)" },
      { feature: "Análise de abandono pergunta a pergunta", rh: RH.analytics, them: "yes" },
      { feature: "Integrações com Klaviyo e email / CRM", rh: RH.emailIntegrations, them: "yes" },
      { feature: "Funciona em WooCommerce, BigCommerce, Magento e mais", rh: RH.multiPlatform, them: "no" },
    ],
    whySwitch: [
      {
        title: "Recomenda produtos, não apenas recolhe respostas",
        body: "O Typeform regista respostas e fica por aí. O motor de recomendações da RevenueHunt classifica os produtos, variantes e coleções exatos do teu catálogo com base nas respostas de cada comprador e mostra-os numa página de resultados personalizada.",
      },
      {
        title: "Feito para a Shopify e o ecommerce",
        body: "O Typeform não tem integração nativa com a Shopify nem sincronização de catálogo. A RevenueHunt é uma app Built-for-Shopify com sincronização de catálogo em tempo real e localização automática de títulos, descrições e preços de produtos via Shopify Markets.",
      },
      {
        title: "Um funil, não um formulário",
        body: "A RevenueHunt transforma um quiz num percurso de vendas: resultados personalizados, adicionar ao carrinho direto, blocos de desconto e captação de email para o Klaviyo, para que o quiz gere mesmo receita, não apenas dados.",
      },
      {
        title: "Feito para comerciantes",
        body: "Esquece a construção genérica de formulários. Usa templates de quiz prontos para skincare, suplementos, moda e mais, ou deixa o AI Copilot construir um quiz de produtos completo a partir de uma descrição da tua loja em cerca de 60 segundos.",
      },
    ],
    bestFor:
      "O Typeform é excelente para inquéritos, formulários de geração de leads, feedback e investigação onde não precisas de recomendar produtos. Se o teu objetivo é ajudar compradores da Shopify a encontrar o produto certo e comprá-lo, a RevenueHunt foi feita de raiz para isso.",
    migration:
      "Já usas um quiz no Typeform? Reconstrói-o na RevenueHunt em minutos, ou gera-o com o AI Copilot, liga os teus produtos e o Klaviyo. Mantens a sensação conversacional e acrescentas um motor de recomendações real e o adicionar ao carrinho.",
    faqs: [
      {
        question: "O Typeform consegue recomendar produtos como a RevenueHunt?",
        answer:
          "Não. O Typeform é um construtor genérico de formulários e inquéritos sem sincronização de catálogo de produtos nem motor de recomendações. A RevenueHunt associa as respostas do quiz a produtos reais da tua loja e mostra-os numa página de resultados personalizada com adicionar ao carrinho.",
      },
      {
        question: "A RevenueHunt integra com a Shopify e o Typeform não?",
        answer:
          "A RevenueHunt é uma app Built-for-Shopify com sincronização de catálogo em tempo real e localização via Shopify Markets. O Typeform não tem integração nativa de recomendação de produtos com a Shopify. Não foi feito para a descoberta de produtos no ecommerce.",
      },
      {
        question: "A RevenueHunt é melhor do que o Typeform para um quiz de ecommerce?",
        answer:
          "Para quizzes de recomendação de produtos, sim. A RevenueHunt foi feita de raiz para isso. Para inquéritos genéricos e formulários de leads, o Typeform é uma boa escolha. Resolvem problemas diferentes.",
      },
      {
        question: "Posso captar leads e enviá-los para o Klaviyo?",
        answer:
          "Sim. A RevenueHunt capta emails no quiz e sincroniza respostas e tags de clientes com o Klaviyo, Mailchimp, Omnisend, HubSpot e mais, para que possas fazer seguimento com campanhas personalizadas.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  zoovu: {
    slug: "zoovu",
    name: "Zoovu",
    category: "plataforma enterprise de descoberta de produtos",
    title: "RevenueHunt vs Zoovu: uma alternativa self-serve",
    description:
      "RevenueHunt vs Zoovu: um quiz de produtos focado e self-serve para a Shopify, com plano gratuito e preços a partir de $39/mo, não uma suite de descoberta enterprise.",
    h1: "RevenueHunt vs Zoovu",
    heroSubtitle:
      "O Zoovu é uma plataforma enterprise de descoberta de produtos e venda guiada vendida por demo. A RevenueHunt é um quiz de produtos focado que podes instalar hoje: grátis para começar, preços transparentes, online no mesmo dia.",
    intro: [
      "O Zoovu é uma plataforma enterprise de descoberta de produtos que junta pesquisa com AI, venda guiada, recomendações de produtos e configuradores visuais (CPQ) para grandes marcas B2C e B2B com catálogos enormes e complexos. É independente de plataforma, vendido através de demos com preços enterprise personalizados, e não tem plano gratuito nem registo self-serve.",
      "A RevenueHunt é um quiz de recomendação de produtos focado usado por mais de 20.000 marcas (4,9★, mais de 550 avaliações). Em vez de uma suite de descoberta enterprise, faz uma coisa excecionalmente bem, guiar os compradores da Shopify até ao produto certo, com preços transparentes, um plano gratuito e configuração no mesmo dia, sem chamada de vendas necessária.",
    ],
    rows: [
      { feature: "Plano gratuito", rh: RH.freePlan, them: "no" },
      { feature: "Preços públicos transparentes", rh: RH.transparentPricing, them: "Personalizado / pedir uma demo" },
      { feature: "Preço inicial", rh: RH.startingPaid, them: "Liderado por vendas (enterprise)" },
      { feature: "Configuração self-serve (sem chamada de vendas)", rh: "yes", them: "no" },
      { feature: "Feito de raiz para quizzes de recomendação de produtos", rh: RH.ecommerceRecs, them: "O quiz é um módulo de uma suite de descoberta" },
      { feature: "Recomenda produtos reais do teu catálogo", rh: RH.catalogRecs, them: "yes" },
      { feature: "App nativa da Shopify (Built for Shopify)", rh: RH.shopifyNative, them: "Via integração" },
      { feature: "Construtor de quiz com AI (configuração em 60 segundos)", rh: RH.aiBuilder, them: "Suite de AI enterprise" },
      { feature: "Quizzes ilimitados", rh: RH.unlimitedQuizzes, them: "yes" },
      { feature: "Lógica condicional / de ramificação ilimitada", rh: RH.branching, them: "yes" },
      { feature: "Análise de abandono pergunta a pergunta", rh: RH.analytics, them: "yes" },
      { feature: "Integrações com Klaviyo e email / CRM", rh: RH.emailIntegrations, them: "yes" },
    ],
    whySwitch: [
      {
        title: "Self-serve, não uma chamada de vendas",
        body: "O Zoovu é vendido através de demos e contratos enterprise personalizados sem preços públicos. A RevenueHunt é instalar e usar: escolhe um plano, constrói o teu quiz e publica. Sem procurement, sem projeto de implementação.",
      },
      {
        title: "Online em minutos, não um rollout",
        body: "O Zoovu é uma suite de descoberta pesada que abrange pesquisa, configuradores e venda guiada em muitos sistemas. A RevenueHunt é uma app de quiz focada que a maioria dos comerciantes lança no mesmo dia, com um AI Copilot que monta um quiz completo em 60 segundos.",
      },
      {
        title: "Preços que cabem numa marca em crescimento",
        body: "As plataformas de descoberta enterprise têm preços para catálogos globais e equipas grandes. A RevenueHunt começa grátis e cresce por respostas a partir de $39/mês, à medida certa para marcas na Shopify e na Shopify Plus.",
      },
      {
        title: "Simplicidade Built-for-Shopify",
        body: "A RevenueHunt é uma app Built-for-Shopify com sincronização de catálogo em tempo real e localização via Shopify Markets, avaliada com 4,9★ por mais de 550 comerciantes. A profundidade de que precisas para a descoberta de produtos sem o peso enterprise.",
      },
    ],
    bestFor:
      "O Zoovu encaixa em grandes empresas com catálogos enormes e complexos (eletrónica de consumo, eletrodomésticos, industrial, B2B) que precisam de configuradores, CPQ e venda guiada em muitos sistemas, com o orçamento e a equipa para um rollout enterprise. Se queres um quiz para a Shopify focado, acessível e self-serve, a RevenueHunt encaixa melhor.",
    migration:
      "Mudar do Zoovu é simples. Constrói o teu quiz na RevenueHunt (ou gera-o com o AI Copilot), insere-o e liga o Klaviyo ou o teu CRM. Sem projeto de implementação. A maioria das lojas fica online no mesmo dia, e o suporte ajuda-te a chegar lá.",
    faqs: [
      {
        question: "Quanto custa a RevenueHunt face ao Zoovu?",
        answer:
          "A RevenueHunt tem um plano gratuito e planos pagos transparentes a partir de $39/mês. O Zoovu não publica preços. É uma plataforma enterprise, liderada por vendas, que dá um orçamento personalizado após uma demo.",
      },
      {
        question: "A RevenueHunt é uma plataforma de descoberta enterprise como o Zoovu?",
        answer:
          "Não, e é esse o ponto. O Zoovu junta pesquisa com AI, configuradores, CPQ e venda guiada para grandes catálogos. A RevenueHunt foca-se em quizzes de recomendação de produtos para a Shopify e faz esse trabalho excecionalmente bem, com configuração self-serve e sem chamada de vendas.",
      },
      {
        question: "A RevenueHunt faz venda guiada como o Zoovu?",
        answer:
          "Sim. Um quiz da RevenueHunt é venda guiada: faz as perguntas certas e associa as respostas aos produtos exatos do teu catálogo, com uma página de resultados personalizada e adicionar ao carrinho direto, sem preços enterprise nem rollout.",
      },
      {
        question: "Quanto tempo demora a configuração face ao Zoovu?",
        answer:
          "A maioria dos comerciantes da RevenueHunt lança no mesmo dia, e o AI Quiz Copilot consegue montar um quiz completo em cerca de 60 segundos. O Zoovu é normalmente uma implementação enterprise liderada por vendas.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  jebbit: {
    slug: "jebbit",
    name: "Jebbit",
    category: "plataforma enterprise de declared data (agora parte da BlueConic)",
    title: "RevenueHunt vs Jebbit: uma alternativa self-serve",
    description:
      "RevenueHunt vs Jebbit: um quiz de produtos autónomo e self-serve para a Shopify, com plano gratuito a partir de $39/mo. O Jebbit é agora parte do CDP enterprise da BlueConic.",
    h1: "RevenueHunt vs Jebbit",
    heroSubtitle:
      "O Jebbit é agora parte da plataforma enterprise de dados de clientes da BlueConic, vendida por demo. A RevenueHunt é um quiz de produtos autónomo e self-serve: grátis para começar, nativo da Shopify, online no mesmo dia.",
    intro: [
      "O Jebbit cria quizzes interativos, localizadores de produtos e fluxos de preferências para recolher declared data (zero-party data). Foi adquirido e é agora o “Experiences by Jebbit”, parte da plataforma de dados de clientes da BlueConic, dirigido a marcas B2C enterprise e mid-market (L'Oréal, Express, Heineken), independente de plataforma, e vendido através de demos sem preços públicos nem plano gratuito.",
      "A RevenueHunt é um quiz de recomendação de produtos autónomo usado por mais de 20.000 marcas (4,9★, mais de 550 avaliações). Não tens de comprar um CDP para o usar: é um quiz focado, Built-for-Shopify, com preços transparentes, um plano gratuito e configuração no mesmo dia, self-serve, sem chamada de vendas.",
    ],
    rows: [
      { feature: "Plano gratuito", rh: RH.freePlan, them: "no" },
      { feature: "Preços públicos transparentes", rh: RH.transparentPricing, them: "Personalizado / pedir uma demo" },
      { feature: "Preço inicial", rh: RH.startingPaid, them: "Liderado por vendas (enterprise)" },
      { feature: "Configuração self-serve (sem chamada de vendas)", rh: "yes", them: "no" },
      { feature: "Produto autónomo (sem compra de plataforma necessária)", rh: "yes", them: "Agora parte do CDP da BlueConic" },
      { feature: "Recomenda produtos reais do teu catálogo", rh: RH.catalogRecs, them: "yes" },
      { feature: "App nativa da Shopify (Built for Shopify)", rh: RH.shopifyNative, them: "Via integração" },
      { feature: "Construtor de quiz com AI (configuração em 60 segundos)", rh: RH.aiBuilder, them: "no" },
      { feature: "Quizzes ilimitados", rh: RH.unlimitedQuizzes, them: "yes" },
      { feature: "Lógica condicional / de ramificação ilimitada", rh: RH.branching, them: "yes" },
      { feature: "Análise de abandono pergunta a pergunta", rh: RH.analytics, them: "yes" },
      { feature: "Capta zero-party data / declared data", rh: "yes", them: "yes" },
    ],
    whySwitch: [
      {
        title: "Um quiz autónomo, não a compra de uma plataforma",
        body: "O Jebbit é agora o “Experiences by Jebbit” dentro do CDP da BlueConic. A RevenueHunt é uma app focada que podes usar por conta própria. Sem plataforma de dados de clientes para comprar ou implementar.",
      },
      {
        title: "Self-serve, não uma chamada de vendas",
        body: "O Jebbit/BlueConic é vendido através de demos e contratos enterprise personalizados sem preços públicos. A RevenueHunt é instalar e usar, com um plano gratuito e preços transparentes a partir de $39/mês.",
      },
      {
        title: "Feito para a Shopify, online no mesmo dia",
        body: "A RevenueHunt é uma app Built-for-Shopify com sincronização de catálogo em tempo real e adicionar ao carrinho direto, e um AI Copilot que monta um quiz completo em 60 segundos. A maioria dos comerciantes lança no mesmo dia.",
      },
      {
        title: "Continuas a ser dono dos teus zero-party data",
        body: "Cada resposta do quiz é zero-party data que os teus compradores fornecem voluntariamente. A RevenueHunt sincroniza respostas e tags de clientes com o Klaviyo, Mailchimp, Omnisend, HubSpot e mais. Sem CDP necessário para os pôr a trabalhar.",
      },
    ],
    bestFor:
      "O Jebbit, como parte da BlueConic, encaixa em marcas B2C enterprise que querem experiências de declared data fortemente acopladas a uma plataforma de dados de clientes completa e ativadas em muitos canais, com orçamento para um CDP. Se queres um quiz para a Shopify autónomo, acessível e self-serve, a RevenueHunt encaixa melhor.",
    migration:
      "Sair do Jebbit, ou avaliar a BlueConic, é simples. Constrói o teu quiz na RevenueHunt (ou gera-o com o AI Copilot), insere-o e liga o Klaviyo ou o teu CRM. A maioria das lojas fica online no mesmo dia, e os teus zero-party data continuam a fluir para as tuas ferramentas de email.",
    faqs: [
      {
        question: "O Jebbit ainda está disponível por conta própria?",
        answer:
          "O Jebbit é agora o “Experiences by Jebbit”, parte da plataforma de dados de clientes da BlueConic. A RevenueHunt é um quiz de produtos autónomo que podes usar sem comprar um CDP: self-serve, com um plano gratuito a partir de $39/mês.",
      },
      {
        question: "Quanto custa a RevenueHunt face ao Jebbit?",
        answer:
          "A RevenueHunt tem um plano gratuito e planos pagos transparentes a partir de $39/mês. O Jebbit/BlueConic não publica preços. É uma plataforma enterprise, liderada por vendas, que dá um orçamento personalizado após uma demo.",
      },
      {
        question: "A RevenueHunt recolhe zero-party data (declared data) como o Jebbit?",
        answer:
          "Sim. Cada resposta do quiz é zero-party data que os teus compradores fornecem voluntariamente. A RevenueHunt sincroniza respostas e tags de clientes com o Klaviyo, Mailchimp, Omnisend, HubSpot e mais para segmentação e marketing personalizado.",
      },
      {
        question: "Quanto tempo demora a configuração face ao Jebbit?",
        answer:
          "A maioria dos comerciantes da RevenueHunt lança no mesmo dia, e o AI Quiz Copilot consegue montar um quiz completo em cerca de 60 segundos. O Jebbit/BlueConic é normalmente uma implementação enterprise liderada por vendas.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  nosto: {
    slug: "nosto",
    name: "Nosto",
    category: "plataforma enterprise de personalização",
    title: "RevenueHunt vs Nosto: uma alternativa self-serve",
    description:
      "RevenueHunt vs Nosto: um quiz de produtos focado e self-serve que capta zero-party data, com plano gratuito a partir de $39/mo, não uma suite de personalização enterprise.",
    h1: "RevenueHunt vs Nosto",
    heroSubtitle:
      "O Nosto é uma suite enterprise de personalização, pesquisa e merchandising vendida por demo. A RevenueHunt é um quiz de produtos focado, com zero-party data, que podes instalar hoje: grátis para começar, online no mesmo dia.",
    intro: [
      "O Nosto é uma Commerce Experience Platform que junta recomendações de produtos com AI, pesquisa personalizada no site, merchandising e personalização de conteúdo para marcas enterprise e mid-market. É independente de plataforma, vendido através de demos com preços enterprise personalizados, e não tem plano gratuito nem registo self-serve. A sua personalização é impulsionada sobretudo por dados comportamentais, não por quizzes.",
      "A RevenueHunt é um quiz de recomendação de produtos focado usado por mais de 20.000 marcas (4,9★, mais de 550 avaliações). Em vez de uma suite enterprise, guia os compradores até ao produto certo perguntando-lhes diretamente, captando zero-party data que te pertence, com preços transparentes, um plano gratuito e configuração no mesmo dia, sem chamada de vendas necessária.",
    ],
    rows: [
      { feature: "Plano gratuito", rh: RH.freePlan, them: "no" },
      { feature: "Preços públicos transparentes", rh: RH.transparentPricing, them: "Personalizado / pedir uma demo" },
      { feature: "Preço inicial", rh: RH.startingPaid, them: "Liderado por vendas (enterprise)" },
      { feature: "Configuração self-serve (sem chamada de vendas)", rh: "yes", them: "no" },
      { feature: "Feito de raiz para quizzes de recomendação de produtos", rh: RH.ecommerceRecs, them: "Suite de personalização, não liderada por quiz" },
      { feature: "Capta zero-party data (os compradores dizem-te diretamente)", rh: "yes", them: "Sobretudo comportamental / preditivo" },
      { feature: "Recomenda produtos reais do teu catálogo", rh: RH.catalogRecs, them: "yes" },
      { feature: "App nativa da Shopify (Built for Shopify)", rh: RH.shopifyNative, them: "yes" },
      { feature: "Construtor de quiz com AI (configuração em 60 segundos)", rh: RH.aiBuilder, them: "no" },
      { feature: "Quizzes ilimitados", rh: RH.unlimitedQuizzes, them: "Não é uma ferramenta de quiz" },
      { feature: "Análise de abandono pergunta a pergunta", rh: RH.analytics, them: "yes" },
      { feature: "Integrações com Klaviyo e email / CRM", rh: RH.emailIntegrations, them: "yes" },
    ],
    whySwitch: [
      {
        title: "Self-serve, não uma chamada de vendas",
        body: "O Nosto é vendido através de demos e contratos enterprise personalizados sem preços públicos. A RevenueHunt é instalar e usar: escolhe um plano, constrói o teu quiz e publica, com um plano gratuito e preços transparentes a partir de $39/mês.",
      },
      {
        title: "Zero-party data, não apenas rastreio comportamental",
        body: "O Nosto personaliza sobretudo a partir de sinais comportamentais e preditivos. A RevenueHunt pergunta diretamente aos compradores através de um quiz, captando zero-party data que te pertence e que podes sincronizar com o Klaviyo, Mailchimp, Omnisend e mais.",
      },
      {
        title: "Online em minutos, não um rollout",
        body: "O Nosto é uma suite multi-módulo (recomendações, pesquisa, merchandising) que normalmente exige onboarding. A RevenueHunt é uma app de quiz focada que a maioria dos comerciantes lança no mesmo dia, com um AI Copilot que monta um quiz completo em 60 segundos.",
      },
      {
        title: "Preços que cabem numa marca em crescimento",
        body: "As suites de personalização enterprise têm preços para equipas e catálogos grandes. A RevenueHunt começa grátis e cresce por respostas a partir de $39/mês, à medida certa para marcas na Shopify e na Shopify Plus.",
      },
    ],
    bestFor:
      "O Nosto encaixa em marcas enterprise e mid-market que querem uma suite completa de personalização comportamental, pesquisa e merchandising em várias storefronts, com o orçamento e a equipa para um rollout enterprise. Se queres um quiz de produtos focado, acessível e self-serve que capta zero-party data, a RevenueHunt encaixa melhor.",
    migration:
      "Mudar do Nosto é simples. Constrói o teu quiz na RevenueHunt (ou gera-o com o AI Copilot), insere-o e liga o Klaviyo ou o teu CRM. Sem projeto de implementação. A maioria das lojas fica online no mesmo dia, e os teus zero-party data fluem diretamente para as tuas ferramentas de email.",
    faqs: [
      {
        question: "Quanto custa a RevenueHunt face ao Nosto?",
        answer:
          "A RevenueHunt tem um plano gratuito e planos pagos transparentes a partir de $39/mês. O Nosto não publica preços. É uma plataforma enterprise, liderada por vendas, que dá um orçamento personalizado após uma demo.",
      },
      {
        question: "A RevenueHunt é uma suite de personalização como o Nosto?",
        answer:
          "Não, e é esse o ponto. O Nosto junta recomendações comportamentais, pesquisa no site e merchandising. A RevenueHunt foca-se em quizzes de recomendação de produtos que captam zero-party data, com configuração self-serve e sem chamada de vendas.",
      },
      {
        question: "A RevenueHunt usa zero-party data em vez de rastreio comportamental?",
        answer:
          "Sim. A RevenueHunt guia os compradores por um quiz e eles dizem-te diretamente as suas preferências, objetivos e restrições: zero-party data que te pertence, em vez de inferir a intenção a partir do comportamento e dos cookies.",
      },
      {
        question: "Quanto tempo demora a configuração face ao Nosto?",
        answer:
          "A maioria dos comerciantes da RevenueHunt lança no mesmo dia, e o AI Quiz Copilot consegue montar um quiz completo em cerca de 60 segundos. O Nosto é normalmente uma implementação enterprise liderada por vendas.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  tolstoy: {
    slug: "tolstoy",
    name: "Tolstoy",
    category: "plataforma de vídeo shoppable e quiz",
    title: "RevenueHunt vs Tolstoy: uma alternativa quiz-first",
    description:
      "RevenueHunt vs Tolstoy: um quiz de produtos feito de raiz com um motor de recomendações real e zero-party data, vs uma plataforma de vídeo com uma funcionalidade de quiz.",
    h1: "RevenueHunt vs Tolstoy",
    heroSubtitle:
      "O Tolstoy é uma plataforma de vídeo shoppable com uma funcionalidade de quiz. A RevenueHunt é um quiz de recomendação de produtos feito de raiz, com um motor de recomendações real e zero-party data.",
    intro: [
      "O Tolstoy é uma plataforma de comércio com AI construída em torno de vídeo shoppable, media gerada por AI e um agente de compras com AI, com preços baseados em impressões a partir de $19/mês. É uma ferramenta forte e focada em vídeo. Mas o quiz de produtos é uma funcionalidade secundária a par da experiência de vídeo.",
      "A RevenueHunt é um quiz de recomendação de produtos usado por mais de 20.000 marcas (4,9★, mais de 550 avaliações). É quiz-first: um motor de recomendações dedicado associa as respostas de cada comprador aos produtos certos do teu catálogo, capta zero-party data e converte numa página de resultados personalizada, em Shopify, WooCommerce, BigCommerce, Magento, Wix e mais.",
    ],
    rows: [
      { feature: "Plano gratuito", rh: RH.freePlan, them: "yes (limitado)" },
      { feature: "Preço inicial pago", rh: RH.startingPaid, them: "$19/mo" },
      { feature: "Modelo de preços", rh: "Fixo, por respostas", them: "Por impressões + créditos de AI" },
      { feature: "Feito de raiz para quizzes de recomendação de produtos", rh: RH.ecommerceRecs, them: "O quiz é uma funcionalidade secundária (vídeo-first)" },
      { feature: "Motor de recomendações dedicado (upvote e exclusão, página de resultados)", rh: "yes", them: "Compra liderada por vídeo" },
      { feature: "Recomenda produtos reais do teu catálogo", rh: RH.catalogRecs, them: "yes" },
      { feature: "Capta zero-party data (os compradores dizem-te diretamente)", rh: "yes", them: "Sobretudo dados de engagement de vídeo" },
      { feature: "App nativa da Shopify (Built for Shopify)", rh: RH.shopifyNative, them: "yes" },
      { feature: "Funciona em WooCommerce, BigCommerce, Magento, Wix e mais", rh: RH.multiPlatform, them: "no" },
      { feature: "Construtor de quiz com AI (configuração em 60 segundos)", rh: RH.aiBuilder, them: "AI focada em vídeo" },
      { feature: "Análise de abandono pergunta a pergunta", rh: RH.analytics, them: "yes" },
      { feature: "Integrações com Klaviyo e email / CRM", rh: RH.emailIntegrations, them: "yes" },
    ],
    whySwitch: [
      {
        title: "Uma ferramenta quiz-first, não um extra de vídeo",
        body: "O Tolstoy é uma plataforma de vídeo shoppable onde o quiz é uma funcionalidade secundária. A RevenueHunt foi feita de raiz para quizzes de recomendação de produtos, com um motor de recomendações dedicado e uma página de resultados focada na conversão.",
      },
      {
        title: "Um motor de recomendações real",
        body: "A RevenueHunt classifica os produtos, variantes e coleções exatos do teu catálogo em tempo real usando um modelo de upvote e exclusão, com blocos de resultados condicionais e adicionar ao carrinho direto. Uma profundidade que o quiz de uma ferramenta de vídeo não iguala.",
      },
      {
        title: "Zero-party data que te pertence",
        body: "A RevenueHunt capta o que os compradores te dizem (preferências, objetivos, restrições) e sincroniza-o com o Klaviyo, Mailchimp, Omnisend e mais para segmentação. A força do Tolstoy é o engagement de vídeo, não dados de quiz estruturados.",
      },
      {
        title: "Vende em qualquer lado, comprovado em escala",
        body: "A RevenueHunt corre nativamente na Shopify e também no WooCommerce, BigCommerce, Magento, Wix, Squarespace e de forma autónoma, com a confiança de mais de 20.000 marcas e 4,9★ de mais de 550 avaliações.",
      },
    ],
    bestFor:
      "O Tolstoy é uma boa escolha se a tua estratégia é liderada por vídeo (vídeo shoppable, UGC, TikTok Shop) e um quiz é um extra desejável. Se queres um quiz de recomendação de produtos dedicado com um motor de recomendações real e zero-party data, a RevenueHunt encaixa melhor.",
    migration:
      "Se andas a usar um quiz dentro do Tolstoy, mudar é rápido. Reconstrói-o no construtor da RevenueHunt (ou gera-o em 60 segundos com o nosso AI Copilot), insere-o e liga o Klaviyo. A maioria das lojas fica online no mesmo dia, e a nossa equipa de suporte ajuda-te na migração.",
    faqs: [
      {
        question: "A RevenueHunt é melhor do que o Tolstoy para um quiz de produtos?",
        answer:
          "Para um quiz de recomendação de produtos dedicado, sim. A RevenueHunt foi feita de raiz para isso, com um motor de recomendações real e zero-party data. O Tolstoy é vídeo-first, com o quiz como funcionalidade secundária. Para vídeo shoppable especificamente, o Tolstoy foi feito de raiz.",
      },
      {
        question: "O Tolstoy faz quizzes de recomendação de produtos?",
        answer:
          "Sim, como funcionalidade secundária a par do seu vídeo shoppable. A RevenueHunt é quiz-first: foi construída em torno do quiz e do seu motor de recomendações, página de resultados e captação de zero-party data.",
      },
      {
        question: "A RevenueHunt também suporta vídeo?",
        answer:
          "Sim. Podes adicionar vídeo às perguntas do quiz e à página de resultados personalizada. A RevenueHunt é quiz-first em vez de uma plataforma de vídeo, por isso o vídeo apoia o quiz, e não o contrário.",
      },
      {
        question: "Posso captar zero-party data e enviá-los para o Klaviyo?",
        answer:
          "Sim. A RevenueHunt capta as respostas do quiz como zero-party data e sincroniza respostas e tags de clientes com o Klaviyo, Mailchimp, Omnisend, HubSpot e mais para segmentação e marketing personalizado.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },
};
