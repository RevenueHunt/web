import type { Solution } from "../solutions";

const VERIFIED = "2026-06-07";

export const SOLUTIONS_PT: Record<string, Solution> = {
  // ----------------------------------------------------------------- verticals
  skincare: {
    slug: "skincare",
    type: "vertical",
    name: "Skincare",
    chip: "Indústria",
    title: "Quiz de skincare para Shopify e WooCommerce",
    description:
      "Cria um quiz de skincare que identifica o tipo de pele e as preocupações e depois recomenda a rotina certa. Plano gratuito, construtor com AI, online no mesmo dia.",
    h1: "Quizzes de skincare que transformam visitantes numa rotina",
    heroSubtitle:
      "A maioria dos compradores de skincare de primeira viagem não sabe que produtos são os certos para eles. Um quiz faz as perguntas certas e devolve uma rotina personalizada que podem adicionar ao carrinho.",
    intro: [
      "Skincare é a categoria mais difícil de comprar às cegas. Os compradores chegam com uma preocupação, não com um produto em mente, e uma parede de cleansers, sérums e SPF não os ajuda a escolher. Um quiz de skincare substitui essa parede por uma conversa curta e guiada: tipo de pele, preocupação principal, sensibilidades e orçamento à entrada, uma rotina personalizada à saída.",
      "A RevenueHunt é usada por mais de 20.000 marcas para fazer exatamente isto. Mapeia cada resposta a produtos reais do teu catálogo, agrupa o resultado por passo da rotina (cleanser, tratamento, hidratante, SPF) e captura o perfil de pele do comprador como zero-party data que podes sincronizar com o Klaviyo.",
    ],
    quizTypes: [
      {
        title: "Identificador de tipo de pele",
        body: "Cinco a sete perguntas sobre tipo de pele, preocupações e objetivos devolvem uma rotina à medida. O quiz de skincare clássico e o ponto de partida com maior taxa de conversão.",
      },
      {
        title: "Construtor de rotina",
        body: "Usa slots de recomendação para reservar um lugar para cada passo, para que cada comprador receba uma rotina completa de 3 ou 5 passos em vez de um único produto.",
      },
      {
        title: "Quiz orientado por preocupação",
        body: "Começa pelo problema (acne, envelhecimento, secura, sensibilidade) e ramifica com lógica condicional para que cada comprador veja apenas as perguntas relevantes para ele.",
      },
      {
        title: "Correspondência por ingrediente ou sensibilidade",
        body: "Exclui produtos que entrem em conflito com uma alergia ou sensibilidade indicada, para que um comprador que assinale «sem perfume» nunca veja um produto perfumado nos seus resultados.",
      },
    ],
    howItHelps: [
      "O motor de recomendação ordena os produtos pelas respostas que mais importam. Dá mais peso a uma preocupação imprescindível do que a uma que seja apenas desejável, e exclui tudo o que o comprador descarte, para que a página de resultados seja genuinamente à medida e não uma prateleira genérica de best-sellers.",
      "Cada resposta é zero-party data. Um comprador que te diz que tem pele seca e sensível e que se preocupa com o anti-envelhecimento é um segmento ao qual podes fazer marketing durante anos. A RevenueHunt sincroniza esse perfil e as tags de cliente com o Klaviyo, Mailchimp, Omnisend e mais.",
      "Constrói-o em minutos, não em semanas. Começa a partir de um template de skincare, ou descreve a tua loja ao AI Quiz Copilot e ele monta as perguntas, a lógica e os mapeamentos de produtos em cerca de 60 segundos. Depois publica como popup, embed ou landing de página inteira.",
    ],
    demo: {
      label: "Experimenta o quiz de tipo de pele",
      href: "https://productrecommendationquiz.com/pages/skin-type-quiz?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_skincare",
      blurb: "Um quiz de skincare ao vivo na nossa loja de demonstração. Responde a algumas perguntas e vê a rotina que devolve.",
    },
    faqs: [
      {
        question: "Quantas perguntas deve ter um quiz de skincare?",
        answer:
          "Cinco a sete perguntas visíveis funciona para a maioria das marcas. Usa lógica condicional para saltar perguntas que não se apliquem, para que um comprador sem sensibilidades nunca veja o passo das alergias.",
      },
      {
        question: "O quiz pode recomendar uma rotina completa, não apenas um produto?",
        answer:
          "Sim. Os slots de recomendação reservam um lugar para cada passo da rotina (cleanser, tratamento, hidratante, SPF), para que cada comprador receba uma rotina completa com adicionar ao carrinho para o conjunto inteiro.",
      },
      {
        question: "Funciona para pele sensível e alergias?",
        answer:
          "Sim. Cada resposta pode excluir produtos, por isso assinalar uma alergia ou sensibilidade remove qualquer produto em conflito dos resultados, mesmo que de outra forma fosse uma forte correspondência.",
      },
      {
        question: "Posso capturar emails e enviar a rotina para o Klaviyo?",
        answer:
          "Sim. O quiz captura o email e o perfil de pele completo como zero-party data, e sincroniza respostas e tags de cliente com o Klaviyo, Mailchimp, Omnisend, HubSpot e mais.",
      },
    ],
    related: [
      { label: "Templates de quiz de skincare", href: "/templates/" },
      { label: "Quiz construtor de rotina", href: "/solutions/routine-builder/" },
      { label: "Quiz de correspondência de tom", href: "/solutions/shade-finder/" },
      { label: "Para marcas de beleza", href: "/for-beauty-brands/" },
      { label: "Quiz para Shopify", href: "/product-recommendation-quiz-shopify/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  beauty: {
    slug: "beauty",
    type: "vertical",
    name: "Beauty & cosmetics",
    chip: "Indústria",
    title: "Quiz de beleza e cosmética para a tua loja",
    description:
      "Um quiz de beleza que faz a correspondência de tom, encontra os produtos certos e constrói uma rotina a partir do teu catálogo. Plano gratuito, construtor com AI, multiplataforma.",
    h1: "Quizzes de beleza que ligam os compradores ao produto certo",
    heroSubtitle:
      "Tom de base, cor de batom, um regime completo: um quiz de beleza responde às perguntas que uma grelha de produtos não consegue, e envia os compradores para uma página de resultados personalizada.",
    intro: [
      "Os compradores de beleza enfrentam dois problemas ao mesmo tempo: demasiada escolha e demasiado risco. Escolhe o tom de base errado e o produto é devolvido. Um quiz de beleza elimina a adivinhação ao perguntar sobre subtom, cobertura, acabamento e preocupação, e depois recomenda os produtos exatos que encaixam.",
      "A RevenueHunt dá energia a quizzes de beleza para milhares de marcas. Vai buscar produtos e variantes reais do teu catálogo, mostra-os numa página de resultados com adicionar ao carrinho direto e captura o perfil de beleza de cada comprador como zero-party data para um follow-up de email segmentado.",
    ],
    quizTypes: [
      {
        title: "Correspondência de tom",
        body: "Perguntas sobre subtom, profundidade e acabamento mapeiam para o tom certo de base, corretor ou batom. As respostas de escolha por imagem tornam-no rápido no telemóvel.",
      },
      {
        title: "Construtor de regime completo",
        body: "Recomenda um conjunto completo (preparação, base, cor, fixação) usando slots de recomendação, para que os compradores comprem a rotina em vez de um único produto.",
      },
      {
        title: "Quiz de preocupação de pele ou cabelo",
        body: "Ramifica por preocupação e tipo de pele ou cabelo para que a página de resultados fale com o objetivo específico de cada comprador.",
      },
      {
        title: "Identificador de prenda ou kit inicial",
        body: "Ajuda quem compra prendas e quem é principiante e não conhece o catálogo, recomendando um kit inicial ou conjunto selecionado.",
      },
    ],
    howItHelps: [
      "Tom e ajuste são exatamente onde acontecem as devoluções. Ao perguntar o subtom e a cobertura logo no início e ao excluir tudo o que não corresponde, o quiz envia os compradores para produtos que têm muito mais probabilidade de manter.",
      "As perguntas de escolha por imagem deixam os compradores tocar numa imagem em vez de se descreverem, o que mantém altas as taxas de conclusão no telemóvel, onde aterra a maior parte do tráfego de beleza.",
      "O perfil do comprador (subtom, tipo de pele, acabamento favorito) sincroniza com a tua ferramenta de email como tags de cliente, para que cada campanha depois do quiz possa ser personalizada em vez de genérica.",
    ],
    demo: {
      label: "Experimenta o quiz de correspondência de base",
      href: "https://productrecommendationquiz.com/pages/foundation-match?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_beauty",
      blurb: "Um quiz de correspondência de tom baseado em imagens, ao vivo na nossa loja de demonstração, com resultados de correspondência exata.",
    },
    faqs: [
      {
        question: "Um quiz de beleza consegue fazer a correspondência de tons de base?",
        answer:
          "Sim. Pergunta sobre subtom, profundidade e acabamento, liga cada resposta aos tons correspondentes e exclui os restantes. A página de resultados mostra a correspondência de tom exata com adicionar ao carrinho.",
      },
      {
        question: "Suporta perguntas de escolha por imagem?",
        answer:
          "Sim. As escolhas podem ser apresentadas como imagens clicáveis, o que é ideal para perguntas de tom, acabamento e estilo e aumenta a conclusão no telemóvel.",
      },
      {
        question: "Vai funcionar no WooCommerce ou BigCommerce, não só no Shopify?",
        answer:
          "Sim. A RevenueHunt corre nativamente no Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace e como quiz alojado autónomo.",
      },
      {
        question: "Posso juntar produtos num único resultado?",
        answer:
          "Sim. Usa slots de recomendação para reservar um lugar para cada papel de produto e devolver um conjunto ou bundle completo, com adicionar ao carrinho para a rotina inteira.",
      },
    ],
    related: [
      { label: "Quiz de correspondência de tom", href: "/solutions/shade-finder/" },
      { label: "Quiz de skincare", href: "/solutions/skincare/" },
      { label: "Quiz para encontrar prendas", href: "/solutions/gift-finder/" },
      { label: "Para marcas de beleza", href: "/for-beauty-brands/" },
      { label: "Templates de quiz", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  supplements: {
    slug: "supplements",
    type: "vertical",
    name: "Supplements",
    chip: "Indústria",
    title: "Quiz de suplementos: recomenda o stack certo",
    description:
      "Um quiz de suplementos que transforma objetivos de saúde num stack recomendado. Ramifica por dieta e restrições, sincroniza objetivos com o Klaviyo. Grátis para começar.",
    h1: "Quizzes de suplementos que recomendam o stack certo",
    heroSubtitle:
      "Os compradores compram suplementos por um objetivo, não por um SKU. Um quiz transforma sono, energia, imunidade ou foco num stack recomendado a partir do teu catálogo.",
    intro: [
      "Os compradores de suplementos pensam em objetivos: dormir melhor, mais energia, melhor saúde intestinal. O teu catálogo está organizado por produto. Um quiz de suplementos liga os dois ao perguntar sobre objetivos, dieta e estilo de vida, e depois recomenda o stack que encaixa.",
      "A RevenueHunt mapeia cada objetivo aos SKUs certos, gere restrições alimentares com exclusões e devolve um stack de vários produtos numa página de resultados com um desconto de primeira compra. Os objetivos do comprador sincronizam com o Klaviyo como tags para um email contínuo e segmentado.",
    ],
    quizTypes: [
      {
        title: "Identificador de objetivo de saúde",
        body: "Os compradores escolhem os seus objetivos (sono, energia, imunidade, intestino, foco) e cada objetivo dá um voto positivo aos produtos correspondentes para construir um stack recomendado.",
      },
      {
        title: "Construtor de stack",
        body: "Reserva um slot para cada papel (base, alvo, performance) para que cada comprador saia com um stack completo e coerente.",
      },
      {
        title: "Filtro de dieta e restrições",
        body: "Exclui produtos que entrem em conflito com vegan, sem glúten ou outras restrições, para que os resultados respeitem automaticamente a dieta de cada comprador.",
      },
      {
        title: "Onboarding de subscrição",
        body: "Usa o quiz no topo de um funil de subscrição, captura o email e liga a página de resultados a uma oferta de subscrever e poupar.",
      },
    ],
    howItHelps: [
      "A lógica condicional mantém o quiz curto. Se um comprador diz que não tem restrições alimentares, o quiz salta inteiramente as perguntas de restrições, para que ninguém responda a perguntas que não se lhe aplicam.",
      "As exclusões tratam de restrições rígidas de forma limpa. Um comprador vegan nunca vê um produto não-vegan nos seus resultados, mesmo que fosse uma forte correspondência só pelos objetivos.",
      "Os objetivos são a coisa mais valiosa que uma marca de suplementos pode aprender. Sincronizar tags como goal:sleep ou goal:gut com o Klaviyo permite-te correr email de ciclo de vida que corresponde mesmo ao que cada cliente está a tentar alcançar.",
    ],
    faqs: [
      {
        question: "Um quiz de suplementos consegue recomendar um stack de vários produtos?",
        answer:
          "Sim. Cada objetivo dá um voto positivo aos produtos correspondentes, e os slots de recomendação reservam um lugar para cada papel, para que a página de resultados devolva um stack completo com adicionar ao carrinho para o conjunto.",
      },
      {
        question: "Como lida com dietas vegan ou sem glúten?",
        answer:
          "Usa exclusões. Ligar uma resposta de dieta a uma lista de exclusão remove qualquer produto em conflito dos resultados, independentemente de quão bem pontuou nos objetivos.",
      },
      {
        question: "Posso adicionar um desconto de primeira compra na página de resultados?",
        answer:
          "Sim. A página de resultados suporta um bloco de código de desconto que podes mostrar a compradores de primeira viagem ou associar a combinações de respostas específicas.",
      },
      {
        question: "Funciona para uma marca de subscrição?",
        answer:
          "Sim. Corre o quiz no topo do funil, captura o email para o Klaviyo e aponta a página de resultados a uma oferta de subscrever e poupar.",
      },
    ],
    related: [
      { label: "Quiz construtor de bundles", href: "/solutions/bundle-builder/" },
      { label: "Quiz de fitness e nutrição", href: "/solutions/fitness/" },
      { label: "Quiz de venda guiada", href: "/guided-selling-quiz/" },
      { label: "Templates de quiz", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  fashion: {
    slug: "fashion",
    type: "vertical",
    name: "Fashion & apparel",
    chip: "Indústria",
    title: "Quiz de estilo de moda e vestuário para ecommerce",
    description:
      "Um quiz de estilo que encontra o ajuste, o corte e a cor certos a partir do teu catálogo e reduz devoluções. Plano gratuito, multiplataforma, multilíngue.",
    h1: "Quizzes de estilo que encontram o ajuste e o corte certos",
    heroSubtitle:
      "O estilo é pessoal e o ajuste é arriscado. Um quiz de moda aprende o gosto e o tamanho de um comprador e depois recomenda peças que ele provavelmente vai manter.",
    intro: [
      "A moda tem a maior taxa de devolução no ecommerce, e a maior parte vem de incompatibilidades de ajuste e estilo. Um quiz de estilo reduz ambos ao perguntar sobre tipo de corpo, preferência de ajuste, ocasião e gosto, e depois recomenda peças que assentam mesmo no comprador.",
      "A RevenueHunt constrói o quiz contra o teu catálogo ao vivo, incluindo variantes, para que tamanho e cor cheguem à página de resultados. Para marcas que vendem em vários mercados, um quiz base pode ser traduzido e atribuído por Shopify Market, com títulos de produtos e preços localizados automaticamente.",
    ],
    quizTypes: [
      {
        title: "Quiz de perfil de estilo",
        body: "Perguntas sobre gosto, ocasião e cor fazem emergir as peças que correspondem à estética de um comprador em vez de uma grelha genérica de novidades.",
      },
      {
        title: "Identificador de ajuste e tamanho",
        body: "Perguntas sobre tipo de corpo e preferência de ajuste estreitam até ao corte e tamanho certos, que é onde começam a maioria das devoluções de vestuário.",
      },
      {
        title: "Construtor de cápsula ou conjunto",
        body: "Usa slots de recomendação para montar um conjunto ou cápsula coordenado em vez de um único artigo.",
      },
      {
        title: "Identificador de ocasião",
        body: "Ramifica por ocasião (trabalho, casamento, viagem) para que cada comprador veja uma seleção curada para o momento para o qual está a comprar.",
      },
    ],
    howItHelps: [
      "Recomendar por ajuste e gosto, e não só por popularidade, envia os compradores para peças que têm mais probabilidade de manter, que é a alavanca mais direta que uma marca de moda tem sobre as devoluções.",
      "As variantes fluem de ponta a ponta. Liga respostas a tamanhos e cores específicos, e a página de resultados mostra a variante certa com adicionar ao carrinho, para que os compradores não saltem para uma página de produto para voltar a escolher.",
      "Vendes na UE ou mais além? Constrói um quiz base, deixa o AI Copilot traduzi-lo, atribui cada versão ao seu Shopify Market e os dados do produto localizam-se automaticamente. Sem trabalho de tradução de produtos por idioma.",
    ],
    faqs: [
      {
        question: "Um quiz de moda consegue reduzir devoluções?",
        answer:
          "Ataca a principal causa de devoluções ao recomendar pelo ajuste e gosto em vez da popularidade. Ligar respostas a tamanhos e cores específicos envia os compradores para peças que têm mais probabilidade de manter.",
      },
      {
        question: "Suporta variantes de produto como tamanho e cor?",
        answer:
          "Sim. As respostas podem ligar a variantes específicas, e a página de resultados mostra o tamanho e a cor correspondentes com adicionar ao carrinho direto.",
      },
      {
        question: "Posso correr o quiz em vários idiomas?",
        answer:
          "Sim. Constrói um quiz base, traduz com o AI Copilot e atribui cada versão ao seu Shopify Market. Títulos de produtos e preços localizam-se automaticamente via Shopify Markets.",
      },
      {
        question: "Em que plataformas funciona?",
        answer:
          "Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace e como quiz alojado autónomo.",
      },
    ],
    related: [
      { label: "Quiz de tamanho e ajuste", href: "/solutions/size-finder/" },
      { label: "Quiz para encontrar prendas", href: "/solutions/gift-finder/" },
      { label: "Templates de quiz", href: "/templates/" },
      { label: "Quiz para Shopify", href: "/product-recommendation-quiz-shopify/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  coffee: {
    slug: "coffee",
    type: "vertical",
    name: "Coffee & tea",
    chip: "Indústria",
    title: "Quiz de café: faz a correspondência de torras ao gosto",
    description:
      "Um quiz de perfil de gosto que liga os compradores à torra ou blend certos e faz onboarding de subscritores. Plano gratuito, pronto para Klaviyo e ReCharge.",
    h1: "Quizzes de café que ligam o gosto à torra certa",
    heroSubtitle:
      "Torra, origem, método de extração, notas de sabor: um quiz de café transforma um menu confuso numa recomendação confiante, e num novo subscritor.",
    intro: [
      "O café e o chá são guiados pelo gosto, e o gosto é difícil de comprar a partir de uma lista de produtos. Um quiz curto de perfil de gosto pergunta sobre preferência de torra, método de extração e notas de sabor, e depois recomenda o blend de que o comprador vai mesmo gostar.",
      "A RevenueHunt torna isto num funil, não apenas numa recomendação. Captura o email no início, recomenda um blend inicial e liga a página de resultados a uma oferta de subscrever e poupar através do ReCharge, com as preferências de torra e extração sincronizadas com o Klaviyo.",
    ],
    quizTypes: [
      {
        title: "Identificador de perfil de gosto",
        body: "Algumas perguntas sobre torra, corpo e notas de sabor ligam cada comprador ao blend que corresponde ao seu paladar.",
      },
      {
        title: "Correspondência por método de extração",
        body: "Espresso, pour-over, prensa francesa ou drip: ramifica por método para que a moagem e o blend sirvam a forma como fazem mesmo o café.",
      },
      {
        title: "Onboarding de subscrição",
        body: "Corre o quiz no topo do funil, recomenda um blend inicial e oferece subscrever e poupar na página de resultados.",
      },
      {
        title: "Identificador de prenda ou amostra",
        body: "Ajuda quem compra prendas a escolher um conjunto de amostras ou um conjunto de prenda sem saber o gosto exato do destinatário.",
      },
    ],
    howItHelps: [
      "Um perfil de gosto é uma ótima razão para pedir um email. Os compradores partilham de bom grado as preferências de torra e extração para receberem uma recomendação, o que enche a tua lista de subscritores pré-segmentados.",
      "A página de resultados é que faz a venda. Recomenda o blend correspondente, mostra uma oferta de subscrever e poupar ligada ao ReCharge, e deixa os compradores adicionar ao carrinho sem saírem do quiz.",
      "As preferências tornam-se segmentos duradouros. Sincronizar tags de torra e método de extração com o Klaviyo significa que cada campanha futura pode falar de forma diferente a quem bebe espresso de torra escura e a quem é fã de pour-over de torra clara.",
    ],
    demo: {
      label: "Experimenta o quiz de café",
      href: "https://productrecommendationquiz.com/pages/coffee-quiz?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_coffee",
      blurb: "Um quiz de café de correspondência de gosto, ao vivo na nossa loja de demonstração.",
    },
    faqs: [
      {
        question: "Um quiz de café consegue recomendar uma subscrição?",
        answer:
          "Sim. Captura o email no início, recomenda um blend inicial e aponta a página de resultados a uma oferta de subscrever e poupar ligada ao ReCharge.",
      },
      {
        question: "Faz a correspondência por método de extração?",
        answer:
          "Sim. Ramifica por método de extração para que a moagem e o blend sirvam especificamente quem bebe espresso, pour-over, prensa francesa ou drip.",
      },
      {
        question: "Vai fazer crescer a minha lista de email?",
        answer:
          "Sim. O perfil de gosto é uma forte razão para os compradores partilharem o seu email, e as respostas sincronizam com o Klaviyo pré-segmentadas por preferência de torra e extração.",
      },
      {
        question: "Isto funciona para chá ou outras bebidas?",
        answer:
          "Sim. A mesma abordagem de perfil de gosto funciona para chá, vinho, bebidas espirituosas e qualquer catálogo guiado pelo gosto.",
      },
    ],
    related: [
      { label: "Quiz construtor de bundles", href: "/solutions/bundle-builder/" },
      { label: "Quiz para encontrar prendas", href: "/solutions/gift-finder/" },
      { label: "Templates de quiz", href: "/templates/" },
      { label: "Quiz de venda guiada", href: "/guided-selling-quiz/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  fitness: {
    slug: "fitness",
    type: "vertical",
    name: "Fitness & nutrition",
    chip: "Indústria",
    title: "Quiz de fitness para equipamento, vestuário e programas",
    description:
      "Um quiz de fitness baseado em objetivos que recomenda o equipamento, vestuário ou programa certo a partir do teu catálogo. Plano gratuito, construtor com AI, pronto para Klaviyo.",
    h1: "Quizzes de fitness construídos à volta do objetivo do comprador",
    heroSubtitle:
      "Força, resistência, perda de peso, recuperação: um quiz de fitness transforma um objetivo no equipamento, vestuário, suplementos ou programa certos.",
    intro: [
      "Os compradores de fitness começam com um objetivo e um estilo de treino, não com um produto. Um quiz baseado em objetivos pergunta o que estão a tentar alcançar, o seu nível de experiência e como treinam, e depois recomenda o equipamento, vestuário ou programa que encaixa.",
      "A RevenueHunt constrói o funil de ponta a ponta: recomenda os produtos certos do teu catálogo, captura o objetivo e o nível do comprador como zero-party data, e faz follow-up através do Klaviyo com conteúdos e ofertas alinhados com aquilo para que estão a treinar.",
    ],
    quizTypes: [
      {
        title: "Identificador baseado em objetivos",
        body: "Força, resistência, mobilidade ou perda de peso: cada objetivo dá um voto positivo ao equipamento, vestuário ou suplementos correspondentes.",
      },
      {
        title: "Correspondência por nível de experiência",
        body: "Ramifica por principiante, intermédio ou avançado para que as recomendações encaixem onde o comprador realmente está.",
      },
      {
        title: "Identificador de programa ou plano",
        body: "Recomenda o programa de treino ou o nível de coaching certos com base no objetivo, horário e acesso a equipamento.",
      },
      {
        title: "Construtor de kit ou bundle",
        body: "Monta um kit completo (vestuário mais equipamento mais suplemento) usando slots de recomendação para um valor médio de encomenda mais alto.",
      },
    ],
    howItHelps: [
      "O objetivo e o nível de experiência são as duas perguntas que mudam tudo. Fazê-las logo no início significa que um principiante a trabalhar a mobilidade nunca vê um produto avançado de força como resultado principal.",
      "Um kit completo bate um único artigo. Os slots de recomendação deixam-te devolver vestuário, equipamento e um suplemento juntos, o que aumenta o valor médio de encomenda sem parecer insistente.",
      "O objetivo que capturas alimenta tudo depois da venda. Sincronizar tags de objetivo e nível com o Klaviyo permite-te enviar conteúdos de treino e lembretes de reposição que correspondem ao programa real de cada cliente.",
    ],
    faqs: [
      {
        question: "Um quiz de fitness consegue recomendar um programa, não apenas produtos?",
        answer:
          "Sim. Liga respostas a um programa de treino ou nível de coaching da mesma forma que ligas produtos, e a página de resultados pode recomendar o plano certo com base no objetivo e horário.",
      },
      {
        question: "Consegue montar um kit completo num só resultado?",
        answer:
          "Sim. Os slots de recomendação reservam um lugar para cada papel (vestuário, equipamento, suplemento) para que os compradores recebam um kit completo com adicionar ao carrinho para o conjunto.",
      },
      {
        question: "Como personaliza para principiantes vs avançados?",
        answer:
          "Ramifica com lógica condicional no nível de experiência, para que principiantes e atletas avançados vejam perguntas diferentes e recomendações diferentes.",
      },
      {
        question: "Posso fazer follow-up por email com base nos objetivos?",
        answer:
          "Sim. Os objetivos e o nível sincronizam com o Klaviyo, Mailchimp, Omnisend e mais como tags de cliente para um follow-up de email alinhado com o objetivo.",
      },
    ],
    related: [
      { label: "Quiz de suplementos", href: "/solutions/supplements/" },
      { label: "Quiz construtor de bundles", href: "/solutions/bundle-builder/" },
      { label: "Templates de quiz", href: "/templates/" },
      { label: "Quiz de venda guiada", href: "/guided-selling-quiz/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "pet-products": {
    slug: "pet-products",
    type: "vertical",
    name: "Pet products",
    chip: "Indústria",
    title: "Quiz de produtos para animais para a tua loja",
    description:
      "Um quiz para animais que recomenda comida, suplementos ou equipamento por espécie, raça, idade e alergias. As exclusões tratam das dietas. Grátis para começar.",
    h1: "Quizzes para animais que ligam produtos a cada animal",
    heroSubtitle:
      "Espécie, raça, idade, atividade, alergias: um quiz para animais transforma esses detalhes na comida, suplemento ou equipamento certos, e respeita cada restrição alimentar.",
    intro: [
      "Os donos de animais compram para um animal, não para uma categoria, e o produto certo depende da espécie, do tamanho da raça, da idade e das alergias. Um quiz para animais recolhe esses detalhes uma vez e recomenda produtos que encaixam em todas as dimensões ao mesmo tempo.",
      "A RevenueHunt trata da parte difícil: as exclusões aplicam de forma limpa as regras de alergia e dieta, a página de resultados recomenda a fórmula ou o kit certos, e um email de resultado recapitula a recomendação para os donos que não compram na hora.",
    ],
    quizTypes: [
      {
        title: "Identificador de comida para animais",
        body: "Espécie, tamanho da raça, idade e nível de atividade mapeiam para a fórmula certa, com as alergias tratadas por exclusões.",
      },
      {
        title: "Correspondência de suplemento ou saúde",
        body: "Recomenda apoio para articulações, pele ou digestão com base na idade e nas preocupações indicadas.",
      },
      {
        title: "Identificador de equipamento e acessórios",
        body: "Liga arneses, camas ou brinquedos ao tamanho da raça e ao comportamento para que os donos escolham o ajuste certo à primeira.",
      },
      {
        title: "Kit inicial para novos donos",
        body: "Monta um kit inicial completo para novos donos de animais usando slots de recomendação.",
      },
    ],
    howItHelps: [
      "As alergias são uma restrição rígida, e as exclusões aplicam-nas na perfeição. Assinalar uma alergia a frango remove dos resultados todas as fórmulas à base de frango, mesmo as que pontuaram bem na raça e na idade.",
      "Uma tag de cliente como dono-de-cão-pequeno é ouro para a retenção. Sincronizá-la com o Klaviyo permite-te enviar conteúdos relevantes para a raça, lembretes de reposição e ofertas que encaixam mesmo no animal.",
      "Os emails de resultado apanham os compradores que saem. Os donos pesquisam muitas vezes antes de comprar, por isso um email automático que recapitula a recomendação trá-los de volta para concluir a compra.",
    ],
    demo: {
      label: "Experimenta o identificador de comida para cães",
      href: "https://productrecommendationquiz.com/pages/dog-food?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_pet_products",
      blurb: "Um identificador de comida para cães multi-atributo, ao vivo na nossa loja de demonstração.",
    },
    faqs: [
      {
        question: "Como é que um quiz para animais lida com alergias?",
        answer:
          "Com exclusões. Ligar uma resposta de alergia a uma lista de exclusão remove dos resultados todos os produtos em conflito, por muito bem que tenham correspondido nas outras perguntas.",
      },
      {
        question: "Consegue fazer a correspondência por raça e idade?",
        answer:
          "Sim. Cada resposta (espécie, tamanho da raça, idade, nível de atividade) dá um voto positivo aos produtos correspondentes, para que as recomendações encaixem no animal específico.",
      },
      {
        question: "Posso enviar a recomendação por email se não comprarem?",
        answer:
          "Sim. Os emails de resultado recapitulam automaticamente a recomendação, o que é útil para os donos que pesquisam antes de comprar.",
      },
      {
        question: "Segmenta clientes para marketing?",
        answer:
          "Sim. Tags de cliente como dono-de-cão-pequeno sincronizam com o Klaviyo e outras ferramentas para campanhas direcionadas e relevantes para o animal.",
      },
    ],
    related: [
      { label: "Quiz construtor de bundles", href: "/solutions/bundle-builder/" },
      { label: "Quiz para encontrar produtos", href: "/product-finder-quiz/" },
      { label: "Templates de quiz", href: "/templates/" },
      { label: "Quiz para WooCommerce", href: "/product-recommendation-quiz-woocommerce/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  cbd: {
    slug: "cbd",
    type: "vertical",
    name: "CBD & wellness",
    chip: "Indústria",
    title: "Quiz para encontrar produtos CBD para a tua loja",
    description:
      "Um quiz de CBD que guia os compradores ao formato e à força certos por objetivo e experiência. Educa enquanto vende. Plano gratuito, multiplataforma.",
    h1: "Quizzes de CBD que guiam os compradores ao formato certo",
    heroSubtitle:
      "Formato, força e objetivo confundem a maioria dos compradores de CBD. Um quiz ensina enquanto vende e recomenda o produto certo com confiança.",
    intro: [
      "CBD e wellness são categorias onde a maioria dos compradores genuinamente não sabe o que comprar: óleo ou gomas, que força, para que objetivo. Um quiz transforma essa incerteza numa recomendação clara ao perguntar sobre objetivo, nível de experiência e preferência de formato.",
      "A RevenueHunt foi feita para compradores de primeira viagem numa categoria como estes. O quiz educa enquanto pergunta, recomenda o formato e a força certos a partir do teu catálogo, e captura objetivos como zero-party data que te pertence e à qual podes fazer marketing.",
    ],
    quizTypes: [
      {
        title: "Identificador baseado em objetivos",
        body: "Sono, calma, recuperação ou foco: cada objetivo dá um voto positivo aos produtos e forças correspondentes.",
      },
      {
        title: "Correspondência de formato e força",
        body: "Ramifica por experiência e preferência de formato (óleo, gomas, tópico, cápsula) para que os principiantes tenham um ponto de partida acessível.",
      },
      {
        title: "Construtor de rotina ou regime",
        body: "Recomenda uma combinação de dia e de noite usando slots de recomendação para uma rotina completa.",
      },
      {
        title: "Quiz com educação em primeiro lugar",
        body: "Usa slides de afirmação entre perguntas para ensinar o básico, o que constrói confiança e segurança antes da recomendação.",
      },
    ],
    howItHelps: [
      "Os compradores de primeira viagem numa categoria precisam de ensino, não apenas de filtragem. Os slides de afirmação deixam-te explicar força e formato em linguagem simples à medida que o comprador avança, para que a recomendação aterre com confiança.",
      "Fazer corresponder o nível de experiência à força protege a experiência. Quem é de primeira viagem recebe um ponto de partida acessível em vez do produto mais forte, o que significa menos devoluções por desilusão.",
      "Os objetivos capturados no quiz tornam-se os teus segmentos mais úteis. Sincronizar goal:sleep ou goal:recovery com o Klaviyo alimenta email que corresponde ao que cada cliente está mesmo a tentar resolver.",
    ],
    demo: {
      label: "Experimenta o identificador de produtos CBD",
      href: "https://productrecommendationquiz.com/pages/cbd-product-finder?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_cbd",
      blurb: "Um identificador de produtos CBD ao vivo na nossa loja de demonstração.",
    },
    faqs: [
      {
        question: "Um quiz de CBD consegue recomendar a força certa?",
        answer:
          "Sim. Ramifica por nível de experiência e objetivo, depois liga cada caminho à força adequada, para que principiantes e utilizadores experientes recebam recomendações diferentes.",
      },
      {
        question: "O quiz consegue educar os compradores à medida que avançam?",
        answer:
          "Sim. Os slides de afirmação mostram texto entre perguntas sem qualquer input necessário, para que possas ensinar o básico de formato e força inline.",
      },
      {
        question: "Funciona para produtos de wellness mais abrangentes?",
        answer:
          "Sim. A mesma abordagem de objetivo e formato funciona para adaptogénios, cogumelos e outras categorias de wellness onde os compradores precisam de orientação.",
      },
      {
        question: "Que plataformas suporta?",
        answer:
          "Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace e como quiz alojado autónomo.",
      },
    ],
    related: [
      { label: "Quiz de suplementos", href: "/solutions/supplements/" },
      { label: "Quiz construtor de rotina", href: "/solutions/routine-builder/" },
      { label: "Quiz para encontrar produtos", href: "/product-finder-quiz/" },
      { label: "Templates de quiz", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  jewelry: {
    slug: "jewelry",
    type: "vertical",
    name: "Jewelry & accessories",
    chip: "Indústria",
    title: "Quiz de joias: ajuda os compradores a encontrar a peça",
    description:
      "Um quiz de joias que faz a correspondência de estilo, metal e ocasião à peça certa, e ajuda quem compra prendas a escolher com confiança. Grátis para começar.",
    h1: "Quizzes de joias que ligam o estilo à peça certa",
    heroSubtitle:
      "Metal, estilo, ocasião, orçamento: um quiz de joias guia os compradores e quem compra prendas a uma peça que vão adorar, em vez de uma grelha sem fim.",
    intro: [
      "As joias são emocionais e muitas vezes uma prenda, o que as torna difíceis de comprar a partir de uma grelha. Um quiz pergunta sobre estilo, preferência de metal, ocasião e orçamento, e depois recomenda peças que correspondem, transformando a navegação numa escolha confiante.",
      "A RevenueHunt recomenda peças e variantes reais do teu catálogo, lida com quem compra prendas e não conhece o gosto do destinatário, e captura preferências para follow-up. A página de resultados converte com adicionar ao carrinho direto e uma mensagem de prenda opcional.",
    ],
    quizTypes: [
      {
        title: "Identificador de estilo",
        body: "Perguntas sobre estética, metal e ocasião fazem emergir as peças que correspondem ao gosto de um comprador.",
      },
      {
        title: "Identificador de prendas",
        body: "Pergunta sobre o destinatário e a ocasião, depois recomenda uma seleção curada ou um conjunto de prenda para quem compra e não conhece o catálogo.",
      },
      {
        title: "Correspondência atenta ao orçamento",
        body: "Inclui o orçamento na recomendação para que cada comprador veja peças dentro do seu intervalo.",
      },
      {
        title: "Identificador de noivado ou marco",
        body: "Guia compras de elevada consideração como peças de noivado ou aniversário com um fluxo focado e tranquilizador.",
      },
    ],
    howItHelps: [
      "Quem compra prendas é uma fatia enorme do tráfego de joias e a menos certa do que quer. Um quiz que pergunta sobre o destinatário em vez do catálogo transforma essa incerteza numa compra de prenda confiante.",
      "O orçamento é uma pergunta que a maioria das grelhas ignora. Incluí-lo na recomendação significa que os compradores veem peças que conseguem mesmo comprar, o que reduz o abandono e constrói confiança.",
      "As preferências e ocasiões sincronizam com a tua ferramenta de email, para que possas fazer follow-up à volta de aniversários, reposições e peças a condizer com campanhas que parecem pessoais.",
    ],
    faqs: [
      {
        question: "Um quiz de joias consegue ajudar quem compra prendas?",
        answer:
          "Sim. Pergunta sobre o destinatário e a ocasião em vez do catálogo, depois recomenda uma seleção curada ou um conjunto de prenda, o que é ideal para quem compra e não sabe exatamente o que quer.",
      },
      {
        question: "Consegue ter em conta o orçamento?",
        answer:
          "Sim. Adiciona uma pergunta de orçamento e dá peso ou filtra as recomendações para que os compradores só vejam peças dentro do seu intervalo.",
      },
      {
        question: "Suporta variantes como metal e tamanho?",
        answer:
          "Sim. As respostas podem ligar a variantes específicas, para que a página de resultados mostre o metal e o tamanho certos com adicionar ao carrinho.",
      },
      {
        question: "Posso capturar leads para follow-up?",
        answer:
          "Sim. O quiz captura o email e as preferências como zero-party data e sincroniza com o Klaviyo e outras ferramentas para follow-up baseado em ocasiões.",
      },
    ],
    related: [
      { label: "Quiz para encontrar prendas", href: "/solutions/gift-finder/" },
      { label: "Quiz de moda e vestuário", href: "/solutions/fashion/" },
      { label: "Templates de quiz", href: "/templates/" },
      { label: "Quiz para encontrar produtos", href: "/product-finder-quiz/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "home-goods": {
    slug: "home-goods",
    type: "vertical",
    name: "Home & decor",
    chip: "Indústria",
    title: "Quiz de produtos para casa e decoração para a tua loja",
    description:
      "Um quiz de casa e decoração que liga mobília e decoração ao espaço e estilo de um comprador. Reduz devoluções em artigos volumosos. Grátis para começar.",
    h1: "Quizzes de casa que ligam produtos ao espaço",
    heroSubtitle:
      "Estilo, divisão, tamanho e orçamento: um quiz de casa e decoração guia os compradores a peças que encaixam no seu espaço, o que mais importa quando os artigos são volumosos.",
    intro: [
      "Casa e decoração é uma categoria de elevada consideração e cara de devolver. Os compradores precisam de saber que uma peça encaixa no seu espaço e estilo antes de se comprometerem. Um quiz pergunta sobre divisão, estilo, dimensões e orçamento, e depois recomenda peças que funcionam.",
      "A RevenueHunt recomenda produtos reais do teu catálogo, monta conjuntos coordenados com slots de recomendação e captura preferências de estilo para follow-up, para que um comprador único de mobília se torne um cliente recorrente de decoração.",
    ],
    quizTypes: [
      {
        title: "Identificador de estilo",
        body: "Perguntas sobre estética e divisão fazem emergir mobília e decoração que correspondem ao gosto de um comprador.",
      },
      {
        title: "Correspondência por divisão ou espaço",
        body: "Inclui o tipo de divisão e as dimensões nas recomendações para que as peças encaixem mesmo no espaço.",
      },
      {
        title: "Construtor de conjunto coordenado",
        body: "Monta um conjunto a condizer (sofá mais tapete mais iluminação) com slots de recomendação para um visual completo.",
      },
      {
        title: "Identificador atento ao orçamento",
        body: "Inclui o orçamento para que os compradores vejam peças no seu intervalo e abandonem menos.",
      },
    ],
    howItHelps: [
      "O ajuste e a escala impulsionam as devoluções em artigos volumosos. Perguntar sobre as dimensões da divisão e recomendar peças que funcionam reduz os erros dispendiosos que levam a devoluções de mobília.",
      "Um conjunto coordenado aumenta o valor da encomenda de forma natural. Os slots de recomendação deixam-te sugerir um visual completo em vez de uma única peça, o que se adequa perfeitamente às compras de decoração.",
      "As preferências de estilo são duradouras. Capturar a estética de um comprador e sincronizá-la com a tua ferramenta de email significa que as campanhas sazonais e de novas coleções podem ser alinhadas com o gosto em vez de disparadas para toda a gente.",
    ],
    faqs: [
      {
        question: "Um quiz de casa consegue recomendar um conjunto coordenado?",
        answer:
          "Sim. Os slots de recomendação reservam um lugar para cada papel (assento, tapete, iluminação), para que a página de resultados devolva um conjunto completo a condizer com adicionar ao carrinho.",
      },
      {
        question: "Consegue ter em conta o tamanho da divisão?",
        answer:
          "Sim. Adiciona perguntas de divisão e dimensão e liga as respostas a peças que encaixam, o que é fundamental para reduzir devoluções em artigos grandes.",
      },
      {
        question: "Ajuda com o orçamento?",
        answer:
          "Sim. Inclui uma pergunta de orçamento para que as recomendações se mantenham no intervalo do comprador.",
      },
      {
        question: "Em que plataformas funciona?",
        answer:
          "Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace e como quiz alojado autónomo.",
      },
    ],
    related: [
      { label: "Quiz construtor de bundles", href: "/solutions/bundle-builder/" },
      { label: "Quiz para encontrar prendas", href: "/solutions/gift-finder/" },
      { label: "Templates de quiz", href: "/templates/" },
      { label: "Quiz de venda guiada", href: "/guided-selling-quiz/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  // ----------------------------------------------------------------- use-cases
  "gift-finder": {
    slug: "gift-finder",
    type: "use-case",
    name: "Gift finder",
    chip: "Tipo de quiz",
    title: "Quiz para encontrar prendas para a tua loja online",
    description:
      "Um quiz para encontrar prendas que pergunta sobre o destinatário e devolve uma prenda curada, aumentando o AOV de quem compra e não conhece o catálogo. Grátis para começar.",
    h1: "Quizzes para encontrar prendas que transformam adivinhação numa venda",
    heroSubtitle:
      "Quem compra prendas não tem opinião sobre o teu catálogo e tem muita ansiedade de escolher mal. Um identificador de prendas pergunta sobre o destinatário e recomenda a prenda perfeita.",
    intro: [
      "Quem compra prendas são os compradores mais fáceis de perder e os mais fáceis de ajudar. Não conhecem os teus produtos e estão preocupados em escolher mal. Um quiz para encontrar prendas faz três a cinco perguntas sobre o destinatário (relação, idade, interesses, orçamento) e devolve uma prenda curada que podem comprar com confiança.",
      "A RevenueHunt torna o identificador de prendas num dos tipos de quiz com maior taxa de conversão. Junta vários produtos num único resultado de prenda para um valor de encomenda mais alto, adiciona uma mensagem de prenda e um desconto na página de resultados, e captura o email do comprador para a próxima ocasião.",
    ],
    quizTypes: [
      {
        title: "Identificador orientado ao destinatário",
        body: "Pergunta sobre o destinatário (relação, idade, interesses) em vez do catálogo, para que quem não sabe nada sobre os teus produtos receba na mesma uma ótima correspondência.",
      },
      {
        title: "Identificador de ocasião",
        body: "Ramifica por ocasião (aniversário, festas, aniversário de relação) para que a recomendação encaixe no momento.",
      },
      {
        title: "Construtor de bundle de prenda",
        body: "Combina vários produtos num único conjunto de prenda curado usando slots de recomendação, o que aumenta o valor médio de encomenda.",
      },
    ],
    howItHelps: [
      "O truque é perguntar sobre o destinatário, não sobre o catálogo. Quem consegue responder a três perguntas sobre a sua irmã recebe uma recomendação confiante sem nunca precisar de perceber a tua gama de produtos.",
      "Os bundles de prenda aumentam o valor da encomenda sem pressão. Devolver um conjunto curado como um único resultado parece útil, não insistente, e os compradores compram de bom grado a coisa toda.",
      "Cada comprador de prendas é um cliente futuro. Capturar o seu email e a ocasião permite-te trazê-lo de volta no próximo aniversário ou festa com um avanço na recomendação.",
    ],
    faqs: [
      {
        question: "Como funciona um quiz para encontrar prendas?",
        answer:
          "Faz três a cinco perguntas sobre o destinatário e a ocasião, depois recomenda uma prenda curada ou um conjunto de prenda, para que quem não conhece o teu catálogo possa na mesma escolher com confiança.",
      },
      {
        question: "Consegue juntar produtos numa só prenda?",
        answer:
          "Sim. Os slots de recomendação combinam vários produtos num único conjunto de prenda curado, o que aumenta o valor médio de encomenda.",
      },
      {
        question: "Posso adicionar um desconto ou mensagem de prenda?",
        answer:
          "Sim. A página de resultados suporta blocos de código de desconto e de conteúdo que podes mostrar com base nas respostas do comprador.",
      },
      {
        question: "Captura leads para ocasiões futuras?",
        answer:
          "Sim. O quiz captura o email e a ocasião, que sincronizam com o Klaviyo e outras ferramentas para que possas voltar a envolver antes do próximo momento de oferta.",
      },
    ],
    related: [
      { label: "Quiz de joias", href: "/solutions/jewelry/" },
      { label: "Quiz de beleza e cosmética", href: "/solutions/beauty/" },
      { label: "Quiz para encontrar produtos", href: "/product-finder-quiz/" },
      { label: "Templates de quiz", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "size-finder": {
    slug: "size-finder",
    type: "use-case",
    name: "Size & fit finder",
    chip: "Tipo de quiz",
    title: "Quiz de tamanho e ajuste para ecommerce",
    description:
      "Um quiz de tamanho e ajuste que recomenda o tamanho certo ou um produto compatível e reduz devoluções. Resolve ajustes multi-atributo. Grátis para começar.",
    h1: "Quizzes de tamanho e ajuste que reduzem devoluções",
    heroSubtitle:
      "O tamanho errado é a devolução número um. Um identificador de ajuste faz as perguntas certas e recomenda o tamanho ou o produto compatível que encaixa.",
    intro: [
      "O ajuste e a compatibilidade são onde o ecommerce perde dinheiro: devoluções de tamanho errado em vestuário e calçado, e devoluções de ajuste errado em tudo o que tenha de combinar com algo que o comprador já possui. Um quiz de ajuste resolve essas restrições antes da encomenda, não depois.",
      "A RevenueHunt lida de forma limpa com o ajuste multi-atributo. Liga respostas a variantes específicas e usa exclusões para restrições rígidas, para que as medidas e os requisitos de um comprador se resolvam num único tamanho correto ou num único produto compatível na página de resultados.",
    ],
    quizTypes: [
      {
        title: "Identificador de tamanho",
        body: "Perguntas sobre medidas e preferência de ajuste estreitam até ao tamanho certo, que é a causa mais comum de devoluções.",
      },
      {
        title: "Identificador de compatibilidade",
        body: "Resolve restrições multi-atributo (modelo do dispositivo, tipo de suporte, acessório) até ao único produto que encaixa.",
      },
      {
        title: "Correspondência por preferência de ajuste",
        body: "Ramifica por preferência de ajuste (slim, regular, relaxed) para que a recomendação sirva a forma como o comprador gosta de o usar.",
      },
    ],
    howItHelps: [
      "As devoluções de tamanho errado são o maior custo isolado que um identificador de ajuste resolve. Perguntar as medidas e a preferência de ajuste logo no início e ligá-las a variantes específicas envia os compradores para o tamanho que vão manter.",
      "A compatibilidade são apenas restrições, e as exclusões tratam delas na perfeição. Um comprador que indica o seu dispositivo e os seus requisitos recebe exatamente o produto compatível, com tudo o que é incompatível removido.",
      "A confiança converte. Quando o quiz diz a um comprador «este é o teu tamanho» com uma razão clara, ele adiciona ao carrinho em vez de saltar para uma tabela de tamanhos e nunca mais voltar.",
    ],
    demo: {
      label: "Experimenta o identificador de compatibilidade",
      href: "https://productrecommendationquiz.com/pages/bicycle-quiz?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_size_finder",
      blurb: "Um identificador no estilo de compatibilidade, ao vivo na nossa loja de demonstração, que resolve uma correspondência técnica.",
    },
    faqs: [
      {
        question: "Um identificador de ajuste consegue reduzir devoluções de tamanho errado?",
        answer:
          "Sim. Perguntar as medidas e a preferência de ajuste e ligar as respostas a variantes específicas recomenda o tamanho que um comprador tem mais probabilidade de manter, o que reduz diretamente as devoluções.",
      },
      {
        question: "Como lida com a compatibilidade?",
        answer:
          "Com exclusões e ligação a variantes. Um comprador indica as suas restrições (dispositivo, suporte, acessório) e o quiz devolve apenas o produto compatível, removendo tudo o que não encaixa.",
      },
      {
        question: "Funciona para calçado e vestuário?",
        answer:
          "Sim. Os identificadores de tamanho e ajuste estão entre os casos de uso mais fortes para vestuário, calçado e tudo onde o ajuste impulsiona devoluções.",
      },
      {
        question: "Os resultados conseguem explicar a recomendação?",
        answer:
          "Sim. Os blocos de conteúdo da página de resultados conseguem mostrar texto específico para cada resposta, para que possas explicar porque é que um dado tamanho ou produto é o ajuste certo.",
      },
    ],
    related: [
      { label: "Quiz de moda e vestuário", href: "/solutions/fashion/" },
      { label: "Quiz para encontrar produtos", href: "/product-finder-quiz/" },
      { label: "Templates de quiz", href: "/templates/" },
      { label: "Quiz para Shopify", href: "/product-recommendation-quiz-shopify/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "shade-finder": {
    slug: "shade-finder",
    type: "use-case",
    name: "Shade matching",
    chip: "Tipo de quiz",
    title: "Quiz de correspondência de tom: base e cor",
    description:
      "Um quiz de correspondência de tom que liga base, corretor ou cor por subtom e profundidade, com respostas de escolha por imagem. Reduz devoluções. Grátis para começar.",
    h1: "Quizzes de correspondência de tom que ligam a cor com confiança",
    heroSubtitle:
      "Comprar maquilhagem online significa adivinhar o teu tom. Um identificador de tom pergunta sobre subtom e profundidade e devolve a correspondência exata, o que reduz devoluções.",
    intro: [
      "A correspondência de tom é a pergunta de maior risco no ecommerce de beleza. Erra-a e o produto é devolvido. Um quiz de correspondência de tom pergunta sobre subtom, profundidade, cobertura e acabamento, e depois recomenda o tom exato do teu catálogo com respostas de escolha por imagem que são rápidas no telemóvel.",
      "A RevenueHunt liga cada resposta a variantes de tom específicas e exclui as restantes, para que a página de resultados mostre uma correspondência confiante em vez de uma parede de amostras. O perfil de tom do comprador sincroniza com a tua ferramenta de email para reposições e produtos a condizer.",
    ],
    quizTypes: [
      {
        title: "Correspondência de tom de base",
        body: "Perguntas sobre subtom e profundidade mapeiam para o tom exato de base ou corretor, com respostas de escolha por imagem para rapidez.",
      },
      {
        title: "Correspondência de batom ou cor",
        body: "Liga a cor de batom, blush ou olhos à coloração e preferência de um comprador.",
      },
      {
        title: "Correspondência de cor de cabelo",
        body: "Guia a coloração de cabelo em casa pelo tom atual, tom alvo e subtom até à fórmula certa.",
      },
    ],
    howItHelps: [
      "As respostas de escolha por imagem suportam as perguntas de tom. Deixar os compradores tocar numa imagem de um subtom ou acabamento bate pedir-lhes que o descrevam, e mantém alta a conclusão nos ecrãs de telemóvel onde a beleza vende.",
      "As exclusões transformam uma parede de amostras numa única resposta. Ligar subtom e profundidade a variantes específicas e excluir as restantes significa que a página de resultados mostra a correspondência, não a gama toda.",
      "O tom é um perfil que vale a pena guardar. Sincronizar o tom correspondente de um comprador com o Klaviyo permite-te fazer marketing de reposições e produtos coordenados exatamente às pessoas certas.",
    ],
    demo: {
      label: "Experimenta o quiz de correspondência de tom",
      href: "https://productrecommendationquiz.com/pages/foundation-match?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_shade_finder",
      blurb: "Um quiz de correspondência de tom de base baseado em imagens, ao vivo na nossa loja de demonstração.",
    },
    faqs: [
      {
        question: "Como é que um identificador de tom faz a correspondência da base?",
        answer:
          "Pergunta sobre subtom, profundidade, cobertura e acabamento, liga cada resposta às variantes de tom correspondentes e exclui as restantes. A página de resultados mostra a correspondência exata com adicionar ao carrinho.",
      },
      {
        question: "Usa respostas de escolha por imagem?",
        answer:
          "Sim. As escolhas podem ser imagens clicáveis, o que é ideal para perguntas de subtom e acabamento e aumenta a conclusão no telemóvel.",
      },
      {
        question: "Consegue reduzir devoluções relacionadas com o tom?",
        answer:
          "Sim. Recomendar uma correspondência confiante em vez de uma parede de amostras envia os compradores para o tom que têm mais probabilidade de manter.",
      },
      {
        question: "Funciona para além da base?",
        answer:
          "Sim. A mesma abordagem faz a correspondência de cor de batom, blush, cor de olhos e coloração de cabelo em casa.",
      },
    ],
    related: [
      { label: "Quiz de beleza e cosmética", href: "/solutions/beauty/" },
      { label: "Quiz de skincare", href: "/solutions/skincare/" },
      { label: "Para marcas de beleza", href: "/for-beauty-brands/" },
      { label: "Templates de quiz", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "routine-builder": {
    slug: "routine-builder",
    type: "use-case",
    name: "Routine builder",
    chip: "Tipo de quiz",
    title: "Quiz construtor de rotina para skincare e mais",
    description:
      "Um quiz construtor de rotina que devolve uma rotina completa de vários passos, não um único produto, usando slots de recomendação. Aumenta o AOV. Grátis para começar.",
    h1: "Quizzes construtores de rotina que vendem o conjunto inteiro",
    heroSubtitle:
      "Um produto é uma venda. Uma rotina é um carrinho e um hábito. Um construtor de rotina devolve um conjunto completo de vários passos à medida de cada comprador.",
    intro: [
      "Alguns produtos são comprados como um sistema, não como um único artigo: uma rotina de skincare, um stack de suplementos, um regime de cuidado de cabelo. Um quiz construtor de rotina devolve o conjunto inteiro, com um lugar reservado para cada passo, para que os compradores comprem a rotina completa em vez de um produto.",
      "A RevenueHunt faz isto com slots de recomendação. Reserva um slot para cada papel (cleanser, tratamento, hidratante, SPF, ou o que a tua categoria precise) e o quiz preenche cada um com a melhor correspondência, depois mostra a rotina completa agrupada por passo com adicionar ao carrinho para o conjunto.",
    ],
    quizTypes: [
      {
        title: "Rotina baseada em passos",
        body: "Reserva um slot para cada passo e preenche-o com o produto que melhor corresponde, para que cada comprador receba uma rotina completa e coerente.",
      },
      {
        title: "Construtor de stack",
        body: "Monta um stack de vários produtos (ótimo para suplementos e wellness) com um papel para cada produto.",
      },
      {
        title: "Rotina de dia e de noite",
        body: "Devolve rotinas AM e PM separadas a partir de um único quiz usando lógica de apresentação na página de resultados.",
      },
    ],
    howItHelps: [
      "Os slots de recomendação são a diferença entre uma venda e um carrinho. Reservar um lugar para cada passo significa que a página de resultados devolve uma rotina completa, o que aumenta o valor da encomenda sem parecer um upsell.",
      "Agrupar por passo faz a rotina fazer sentido. Os compradores veem exatamente o que usar e quando, o que constrói confiança na compra e no hábito que os traz de volta.",
      "Uma rotina é um motor de retenção. O conjunto que recomendas diz-te o que cada cliente vai esgotar e quando, para que o teu follow-up de email possa cronometrar as ofertas de reposição com precisão.",
    ],
    faqs: [
      {
        question: "Como é que um construtor de rotina devolve um conjunto completo?",
        answer:
          "Com slots de recomendação. Cada slot é reservado para um papel (por exemplo cleanser, tratamento, hidratante, SPF) e preenchido com o produto que melhor corresponde, para que a página de resultados devolva uma rotina completa.",
      },
      {
        question: "Consegue mostrar uma rotina de dia e de noite separada?",
        answer:
          "Sim. Usa lógica de apresentação na página de resultados para mostrar rotinas AM e PM, ou qualquer agrupamento condicional, com base nas respostas do comprador.",
      },
      {
        question: "Aumenta o valor médio de encomenda?",
        answer:
          "Recomendar um conjunto completo em vez de um único produto dá aos compradores uma razão para comprar a rotina inteira, o que aumenta o valor da encomenda.",
      },
      {
        question: "Que categorias se adequam a um construtor de rotina?",
        answer:
          "Skincare, cuidado de cabelo, suplementos e qualquer catálogo comprado como um sistema de vários passos em vez de um único artigo.",
      },
    ],
    related: [
      { label: "Quiz de skincare", href: "/solutions/skincare/" },
      { label: "Quiz de suplementos", href: "/solutions/supplements/" },
      { label: "Quiz construtor de bundles", href: "/solutions/bundle-builder/" },
      { label: "Templates de quiz", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "bundle-builder": {
    slug: "bundle-builder",
    type: "use-case",
    name: "Bundle builder",
    chip: "Tipo de quiz",
    title: "Quiz construtor de bundles: vende conjuntos curados",
    description:
      "Um quiz construtor de bundles que monta um conjunto curado a partir das respostas de um comprador e aumenta o valor médio de encomenda. Adicionar ao carrinho para o bundle inteiro. Grátis.",
    h1: "Quizzes construtores de bundles que aumentam o valor da encomenda",
    heroSubtitle:
      "Um bundle curado converte melhor do que um único produto e um upsell genérico. Um construtor de bundles monta o conjunto a partir das respostas de cada comprador.",
    intro: [
      "Os bundles funcionam, mas só quando são relevantes. Um upsell genérico de três pelo preço de dois ignora o que o comprador realmente quer. Um quiz construtor de bundles monta um conjunto curado a partir das respostas de cada comprador, para que o bundle pareça pessoal e o valor da encomenda venha naturalmente.",
      "A RevenueHunt constrói bundles com slots de recomendação e resultados condicionais. Reserva um papel para cada produto no conjunto, faz a correspondência de cada um ao comprador, e apresenta o bundle completo na página de resultados com adicionar ao carrinho para tudo de uma vez.",
    ],
    quizTypes: [
      {
        title: "Construtor de conjunto curado",
        body: "Reserva um papel para cada produto no bundle e preenche cada um com a melhor correspondência, para que o conjunto encaixe no comprador em vez do catálogo.",
      },
      {
        title: "Identificador de kit inicial",
        body: "Monta um kit inicial completo para compradores de primeira viagem ou novos numa categoria que querem uma compra confiante.",
      },
      {
        title: "Bundle à tua medida",
        body: "Deixa as respostas guiar um bundle flexível, com lógica de apresentação a adicionar ou remover itens com base no que o comprador escolhe.",
      },
    ],
    howItHelps: [
      "Um bundle relevante supera um genérico. Fazer a correspondência de cada item do conjunto às respostas do comprador significa que o bundle se lê como uma recomendação, não como uma tática de desconto, e converte em conformidade.",
      "Um único adicionar ao carrinho para o conjunto inteiro remove fricção. Os compradores compram o bundle numa só ação em vez de andarem à caça de cada item, o que protege o valor de encomenda mais alto que acabaste de construir.",
      "Os blocos de desconto fazem o bundle aterrar. Mostra um desconto de conjunto na página de resultados associado à combinação específica, para que a poupança pareça merecida e o comprador conclua a compra.",
    ],
    faqs: [
      {
        question: "Como funciona um quiz construtor de bundles?",
        answer:
          "Reserva um papel para cada produto no bundle, faz a correspondência de cada um às respostas do comprador, e apresenta o conjunto curado completo na página de resultados com adicionar ao carrinho para tudo de uma vez.",
      },
      {
        question: "Posso adicionar um desconto de bundle?",
        answer:
          "Sim. A página de resultados suporta blocos de código de desconto que podes associar a combinações de respostas específicas, para que a poupança do bundle seja mostrada em contexto.",
      },
      {
        question: "Aumenta o valor médio de encomenda?",
        answer:
          "Recomendar um conjunto relevante e curado em vez de um único produto dá aos compradores uma razão para comprar mais, o que aumenta o valor da encomenda.",
      },
      {
        question: "A que categorias se adequa?",
        answer:
          "Suplementos, beleza, comida e bebida, casa, e qualquer catálogo onde um conjunto curado venda melhor do que um único artigo.",
      },
    ],
    related: [
      { label: "Quiz construtor de rotina", href: "/solutions/routine-builder/" },
      { label: "Quiz para encontrar prendas", href: "/solutions/gift-finder/" },
      { label: "Quiz de suplementos", href: "/solutions/supplements/" },
      { label: "Templates de quiz", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },
};
