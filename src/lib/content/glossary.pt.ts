import type { GlossaryTerm, GlossaryLink } from "../glossary";

const VERIFIED = "2026-06-07";

export const GLOSSARY_PT: Record<string, GlossaryTerm> = {
  "conversational-commerce": {
    slug: "conversational-commerce",
    term: "Comércio conversacional",
    chip: "Conceito",
    title: "O que é o comércio conversacional?",
    description:
      "O comércio conversacional vende através de um diálogo bidirecional em vez de uma grelha estática. Eis o que abrange, porque funciona e como um quiz o concretiza.",
    h1: "O que é o comércio conversacional?",
    shortAnswer:
      "O comércio conversacional é vender através de uma conversa interativa e bidirecional em vez de uma grelha estática de produtos. Os compradores respondem a perguntas, a loja responde com recomendações à medida, tal como um bom vendedor faz numa loja física.",
    intro: [
      "Numa loja física, um bom assistente pergunta-te o que precisas, ouve-te e aponta-te para o produto certo. Online, a maioria das lojas salta esse passo e despeja os compradores numa grelha com todos os produtos que vendem. O comércio conversacional devolve o diálogo ao processo.",
    ],
    sections: [
      {
        heading: "O que conta como comércio conversacional",
        body: [
          "A categoria é ampla. Inclui chatbots, apps de mensagens, chat ao vivo, assistentes de voz e quizzes de recomendação de produtos. O que têm em comum é o vaivém: o comprador dá uma indicação e a loja responde com algo mais específico do que uma página de catálogo genérica.",
          "As formas diferem na medida em que as controlas. Um chatbot de texto livre pode ir para onde o comprador escrever, o que é poderoso e imprevisível. Um quiz é comércio conversacional estruturado: cada pergunta e cada caminho foram desenhados por ti, por isso a conversa mantém-se fiel à marca e termina sempre num produto real.",
        ],
      },
      {
        heading: "Porque converte melhor do que uma grelha",
        body: [
          "Uma página de categoria pede ao comprador que faça o trabalho: ler todas as opções, comparar especificações e adivinhar qual encaixa. Isso é paralisia de escolha, e é onde muitos carrinhos se perdem antes sequer de começarem.",
          "Uma conversa faz o trabalho por ele. Reduz um catálogo grande a uma recomendação curta e justificada, e explica porquê. Os compradores que recebem uma resposta clara adicionam ao carrinho em vez de saltarem para comparar noutro sítio.",
          "Também capta preferências. Cada resposta que um comprador dá é informação que podes usar para segmentar emails, personalizar o seguimento e fazer melhor merchandising mais tarde.",
        ],
      },
      {
        heading: "Comércio conversacional vs um chatbot",
        body: [
          "É comum usarem-se as duas expressões como sinónimos, mas um chatbot é uma ferramenta dentro da categoria, não a categoria inteira. Um chatbot baseado num modelo de linguagem consegue responder a perguntas abertas, mas também pode interpretar mal a intenção ou recomendar algo que não tens em stock.",
          "Um quiz de recomendação de produtos troca a abertura pela fiabilidade. Não se desvia do tema, recomenda sempre a partir do teu catálogo ao vivo e funciona da mesma forma para todos os compradores. Para a maioria das lojas, essa previsibilidade vale mais do que um chat de texto livre.",
        ],
      },
    ],
    withRevenueHunt: [
      "Um quiz da RevenueHunt é a forma mais fiável de comércio conversacional que uma loja pode usar. Desenhas cada pergunta e cada caminho, a página de resultados recomenda sempre produtos e variantes reais do teu catálogo, e cada resposta é captada como zero-party data que podes sincronizar com o Klaviyo e outras ferramentas.",
      "Funciona em Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace e como quiz alojado independente, e é grátis começar com 100 respostas por mês.",
    ],
    faqs: [
      {
        question: "Um quiz de produtos é considerado comércio conversacional?",
        answer:
          "Sim. Um quiz é uma forma estruturada de comércio conversacional: o comprador responde a perguntas e a loja responde com recomendações à medida, o mesmo modelo de diálogo de um chatbot mas com cada caminho desenhado de antemão.",
      },
      {
        question: "Qual é a diferença entre comércio conversacional e um chatbot?",
        answer:
          "Um chatbot é uma ferramenta dentro do comércio conversacional. O comércio conversacional é a ideia mais ampla de vender através de uma conversa bidirecional, que inclui também quizzes, chat ao vivo, mensagens e voz.",
      },
      {
        question: "O comércio conversacional funciona para lojas pequenas?",
        answer:
          "Sim. Um quiz de recomendação de produtos é a forma mais simples de começar. Não precisa de histórico de tráfego para funcionar, corre num plano gratuito e pode estar no ar no próprio dia.",
      },
    ],
    related: [
      { label: "Motor de recomendação de produtos", href: "/glossary/product-recommendation-engine/" },
      { label: "Quiz comprável", href: "/glossary/shoppable-quiz/" },
      { label: "Quiz de venda guiada", href: "/guided-selling-quiz/" },
      { label: "Como funciona", href: "/how-it-works/" },
      { label: "Modelos de quiz", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "product-recommendation-engine": {
    slug: "product-recommendation-engine",
    term: "Motor de recomendação de produtos",
    chip: "Conceito",
    title: "O que é um motor de recomendação de produtos?",
    description:
      "Um motor de recomendação de produtos decide que produtos mostrar a cada comprador. Os tipos, o problema do arranque a frio e como funciona um motor baseado em quiz.",
    h1: "O que é um motor de recomendação de produtos?",
    shortAnswer:
      "Um motor de recomendação de produtos é o software que decide que produtos mostrar a um determinado comprador. Recebe entradas (comportamento de navegação, histórico de compras ou preferências declaradas) e ordena o teu catálogo para realçar as melhores correspondências.",
    intro: [
      "Toda a loja que mostra a um comprador algo que não seja o catálogo completo está a usar um motor de recomendação de algum tipo, mesmo que seja só uma prateleira manual de mais vendidos. A questão interessante é o que o motor usa para decidir.",
    ],
    sections: [
      {
        heading: "Os principais tipos",
        body: [
          "Os motores comportamentais usam o que os compradores fazem: páginas vistas, itens clicados, coisas compradas. Alimentam as clássicas prateleiras de recomendado para ti e de quem comprou também levou. Apoiam-se em filtragem colaborativa, que precisa de muito tráfego e histórico para funcionar bem.",
          "Os motores baseados em regras ou atributos usam dados de produto e lógica definida pelo merchandiser: mostrar acessórios com esta categoria, realçar primeiro os itens em stock. São previsíveis, mas estáticos.",
          "Os motores baseados em preferências ou em quiz usam o que o comprador te diz diretamente. O comprador responde a algumas perguntas e o motor ordena o catálogo com base nessas respostas. Este é o sinal de intenção mais direto, porque é voluntário e não inferido.",
        ],
      },
      {
        heading: "O problema do arranque a frio",
        body: [
          "Os motores comportamentais têm uma fraqueza bem conhecida: falham com visitantes novos e produtos novos. Um comprador de primeira viagem não tem histórico, por isso o motor não tem nada em que se apoiar e recorre aos mais vendidos genéricos. Um produto recém-adicionado ainda não tem cliques, por isso raramente é recomendado.",
          "Um motor baseado em preferências não tem arranque a frio. Um visitante completamente novo que responde a três perguntas dá ao motor tudo o que ele precisa logo na primeira visita, sem rastreamento e sem esperar que os dados se acumulem.",
        ],
      },
      {
        heading: "Como um motor de quiz ordena os produtos",
        body: [
          "Cada resposta tem peso. Uma resposta indispensável pode valorizar os produtos que correspondem e desvalorizar os que não correspondem, enquanto uma restrição rígida, como uma alergia ou uma especificação incompatível, pode excluir produtos por completo, por muito bem que tivessem pontuado de resto.",
          "O resultado é uma lista curta ordenada e justificada, em vez de um único palpite. Os bons motores reservam também um lugar para cada função de um conjunto, para que o resultado possa ser uma rotina, um stack ou um pacote completo em vez de um só produto.",
        ],
      },
    ],
    withRevenueHunt: [
      "A RevenueHunt é um motor de recomendação de produtos baseado em preferências, conduzido por um quiz. As respostas valorizam, desvalorizam ou excluem produtos do teu catálogo ao vivo, os lugares de recomendação reservam um espaço para cada função de um conjunto, e funciona para um visitante de primeira viagem sem qualquer histórico.",
      "Como as entradas são voluntárias, as mesmas respostas funcionam também como zero-party data que é tua e podes usar para segmentação muito depois de o comprador sair.",
    ],
    faqs: [
      {
        question: "Qual é a diferença entre um motor de recomendação comportamental e um baseado em quiz?",
        answer:
          "Um motor comportamental infere a intenção a partir de cliques e histórico de compras, o que precisa de tráfego e falha com visitantes novos. Um motor baseado em quiz usa as preferências que o comprador declara diretamente, por isso funciona logo na primeira visita sem histórico.",
      },
      {
        question: "Preciso de muito tráfego para um motor de recomendação funcionar?",
        answer:
          "Não para um motor baseado em quiz. Como o comprador te diz as suas preferências, funciona logo na primeira visita. Os motores comportamentais, por outro lado, precisam de tráfego significativo e histórico de compras antes de as suas recomendações serem fiáveis.",
      },
      {
        question: "Um motor de recomendação pode sugerir mais do que um produto?",
        answer:
          "Sim. Com os lugares de recomendação, o motor reserva um espaço para cada função de um conjunto e preenche cada um com a melhor correspondência, devolvendo uma rotina, um stack ou um pacote completo em vez de um único item.",
      },
    ],
    related: [
      { label: "Recomendações de produtos personalizadas", href: "/glossary/personalized-product-recommendations/" },
      { label: "Comércio conversacional", href: "/glossary/conversational-commerce/" },
      { label: "Quiz de localizador de produtos", href: "/product-finder-quiz/" },
      { label: "Como funciona", href: "/how-it-works/" },
      { label: "Quiz para Shopify", href: "/product-recommendation-quiz-shopify/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "shoppable-quiz": {
    slug: "shoppable-quiz",
    term: "Quiz comprável",
    chip: "Tipo de quiz",
    title: "O que é um quiz comprável?",
    description:
      "Um quiz comprável termina numa página de resultados onde os compradores adicionam ao carrinho os produtos recomendados. Eis o que torna um quiz comprável e onde as lojas os usam.",
    h1: "O que é um quiz comprável?",
    shortAnswer:
      "Um quiz comprável é um quiz interativo que termina numa página de resultados personalizada onde os compradores podem adicionar os produtos recomendados diretamente ao carrinho. O quiz faz parte da loja, não é um inquérito que vive à parte.",
    intro: [
      "Muitas marcas usam quizzes. A diferença entre um que gera receita e um que apenas recolhe respostas está em saber se o comprador pode comprar no fim sem sair.",
    ],
    sections: [
      {
        heading: "O que torna um quiz comprável",
        body: [
          "Três coisas. Primeiro, recomenda produtos e variantes reais do teu catálogo ao vivo, não texto de marcador de posição. Segundo, a página de resultados tem adicionar ao carrinho, para que o comprador possa comprar a recomendação num só passo. Terceiro, consegue levar a oferta até ao fim: um desconto associado às respostas, um pacote adicionado como conjunto, um upsell na página de resultados.",
          "Sem isso, tens um quiz de personalidade ou um inquérito. Pode ser divertido e pode recolher emails, mas não fecha a venda que acabou de abrir.",
        ],
      },
      {
        heading: "Quiz comprável vs um inquérito ou quiz de personalidade",
        body: [
          "Um inquérito recolhe respostas e termina. Um quiz de personalidade entretém e termina. Um quiz comprável usa as respostas para recomendar produtos e depois deixa o comprador agir sobre a recomendação de imediato, enquanto a sua intenção está no máximo.",
          "Esse último passo é tudo o que importa. O momento depois de um comprador receber uma resposta segura é o momento em que está mais propenso a comprar. Um quiz comprável capta esse momento em vez de o mandar de volta ao catálogo para começar do zero.",
        ],
      },
      {
        heading: "Onde se usam os quizzes compráveis",
        body: [
          "Em qualquer sítio onde escolher seja difícil: rotinas de cuidado da pele, stacks de suplementos, tons de base, ajuste e tamanho, conjuntos de presente, blends de café. Quanto mais difícil é escolher numa grelha, mais um quiz comprável justifica o seu lugar.",
          "Funcionam como popup, como bloco incorporado numa página ou como experiência de página inteira, e o mesmo quiz pode alimentar tráfego pago, email e descoberta no site ao mesmo tempo.",
        ],
      },
    ],
    withRevenueHunt: [
      "Todos os quizzes da RevenueHunt são compráveis por defeito. A página de resultados puxa produtos e variantes reais do teu catálogo, suporta adicionar ao carrinho para um único item ou para um conjunto inteiro, e pode mostrar um código de desconto ou um bloco de conteúdo com base nas respostas do comprador.",
      "Podes criar um a partir de um modelo ou descrever a tua loja ao AI Quiz Copilot e ter um quiz completo montado em cerca de 60 segundos, e depois publicá-lo como popup, incorporação ou página de destino.",
    ],
    faqs: [
      {
        question: "Qual é a diferença entre um quiz comprável e um quiz de personalidade?",
        answer:
          "Um quiz de personalidade entretém e termina. Um quiz comprável recomenda produtos reais do teu catálogo e deixa os compradores adicioná-los ao carrinho na página de resultados, por isso fecha a venda em vez de apenas recolher respostas.",
      },
      {
        question: "Os compradores podem adicionar produtos ao carrinho a partir do quiz?",
        answer:
          "Sim. É isso que o torna comprável. A página de resultados mostra os produtos e variantes correspondentes com adicionar ao carrinho direto, para um único item ou um conjunto completo.",
      },
      {
        question: "Um quiz comprável pode mostrar um desconto?",
        answer:
          "Sim. A página de resultados suporta blocos de código de desconto e de conteúdo que podes associar a respostas específicas, para que os compradores certos vejam a oferta certa no momento da decisão.",
      },
    ],
    related: [
      { label: "Funil de quiz", href: "/glossary/quiz-funnel/" },
      { label: "Comércio conversacional", href: "/glossary/conversational-commerce/" },
      { label: "Quiz de criação de pacotes", href: "/solutions/bundle-builder/" },
      { label: "Modelos de quiz", href: "/templates/" },
      { label: "Calculadora de ROI do quiz", href: "/quiz-roi-calculator/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "quiz-funnel": {
    slug: "quiz-funnel",
    term: "Funil de quiz",
    chip: "Marketing",
    title: "O que é um funil de quiz?",
    description:
      "Um funil de quiz usa um quiz como ponto de entrada para transformar tráfego em leads qualificadas e subscritas. Eis as fases e porque supera um opt-in simples.",
    h1: "O que é um funil de quiz?",
    shortAnswer:
      "Um funil de quiz é um funil de marketing que usa um quiz como ponto de entrada. Um comprador faz um quiz, recebe uma recomendação, dá o seu email e entra numa sequência de seguimento segmentada. Transforma tráfego anónimo numa lead qualificada com uma preferência conhecida.",
    intro: [
      "A maioria dos funis de ecommerce começa com um popup de desconto e um único campo de email. Um funil de quiz substitui isso por algo que o comprador realmente quer: uma resposta personalizada.",
    ],
    sections: [
      {
        heading: "As fases de um funil de quiz",
        body: [
          "O tráfego chega ao quiz, vindo de um anúncio, de um email ou de uma ligação no teu site. O comprador responde a algumas perguntas. Chega a uma página de resultados com uma recomendação personalizada. Para ver ou guardar o resultado, dá o seu email. Esse email entra numa sequência de seguimento segmentada por aquilo que te disse.",
          "A diferença em relação a um funil normal é o que sabes no fim. Em vez de um subscritor anónimo, tens um contacto etiquetado com os seus objetivos, preferências e os produtos a que foi associado.",
        ],
      },
      {
        heading: "Porque supera um opt-in genérico",
        body: [
          "Uma simples inscrição na newsletter não oferece nada específico, por isso converte uma fatia pequena do tráfego e não te dá informação para além de um endereço de email. Um funil de quiz oferece uma recomendação à medida como motivo para subscrever, o que é uma troca bem mais forte.",
          "Também torna cada email posterior melhor. Um subscritor que sabes que procura para pele seca e sensível recebe uma mensagem diferente de um que procura um presente. Essa segmentação é construída durante o quiz, não acrescentada depois.",
        ],
      },
      {
        heading: "Funis de quiz e tráfego pago",
        body: [
          "Os funis de quiz são populares para aquisição paga porque qualificam e captam num só passo. Tráfego frio que saltaria de uma página de produto muitas vezes completa um quiz, e a captura de email significa que ficas com a lead mesmo que não compre na primeira visita.",
          "Um funil de quiz é uma forma específica de funil. Para o panorama mais amplo de como se constroem os funis de ecommerce, vê o guia de exemplos de funil.",
        ],
      },
    ],
    withRevenueHunt: [
      "A RevenueHunt foi feita para gerir o funil de quiz por inteiro. Capta o email no momento de maior intenção, sincroniza respostas e etiquetas de cliente com o Klaviyo, Mailchimp, Omnisend, HubSpot e mais, e mostra o abandono pergunta a pergunta para poderes corrigir as fugas.",
      "A recomendação na página de resultados é o íman de leads, por isso aquilo que conquista o email é também aquilo que impulsiona a venda.",
    ],
    faqs: [
      {
        question: "Em que é um funil de quiz diferente de um funil de vendas normal?",
        answer:
          "Um funil de quiz usa um quiz como ponto de entrada, por isso qualifica e segmenta as leads à medida que as capta. Um funil normal começa muitas vezes com um opt-in genérico que capta um email mas nenhum dado de preferência.",
      },
      {
        question: "Um funil de quiz funciona para anúncios pagos?",
        answer:
          "Sim. Os funis de quiz são comuns na aquisição paga porque qualificam tráfego frio e captam o email num só passo, por isso ficas com a lead mesmo quando o comprador não compra na primeira visita.",
      },
      {
        question: "O que faço com as leads que um funil de quiz capta?",
        answer:
          "Sincroniza-as com a tua ferramenta de email com as respostas do quiz como etiquetas, e depois envia seguimento segmentado por objetivo ou preferência. A RevenueHunt sincroniza respostas e etiquetas de cliente com o Klaviyo, Mailchimp, Omnisend, HubSpot e mais.",
      },
    ],
    related: [
      { label: "Quiz de geração de leads", href: "/glossary/lead-generation-quiz/" },
      { label: "Quiz comprável", href: "/glossary/shoppable-quiz/" },
      { label: "Exemplos de funil de ecommerce", href: "/ecommerce-sales-funnel-examples/" },
      { label: "Calculadora de ROI do quiz", href: "/quiz-roi-calculator/" },
      { label: "Integrações", href: "/integrations/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "personalized-product-recommendations": {
    slug: "personalized-product-recommendations",
    term: "Recomendações de produtos personalizadas",
    chip: "Conceito",
    title: "O que são as recomendações de produtos personalizadas?",
    description:
      "As recomendações de produtos personalizadas adaptam as sugestões a cada comprador. Eis como as lojas o fazem, o problema do arranque a frio e a via sem cookies.",
    h1: "O que são as recomendações de produtos personalizadas?",
    shortAnswer:
      "As recomendações de produtos personalizadas são sugestões à medida de um comprador individual, em vez dos mesmos mais vendidos mostrados a toda a gente. Podem basear-se no comportamento de navegação, em compras anteriores ou, de forma mais direta, no que o comprador te diz.",
    intro: [
      "Mostrar a mesma grelha a todos os compradores trata da mesma forma um comprador de presente de primeira viagem e um cliente fiel e recorrente. As recomendações personalizadas adaptam-se a quem está mesmo a comprar.",
    ],
    sections: [
      {
        heading: "Como as lojas personalizam as recomendações",
        body: [
          "Há duas abordagens gerais. A personalização comportamental observa o que um comprador faz, cliques, visualizações, encomendas anteriores, e infere o que mostrar a seguir. A personalização por preferência declarada pergunta diretamente ao comprador e recomenda com base nas suas respostas.",
          "A comportamental é invisível para o comprador e escala automaticamente, mas é uma inferência e pode estar errada. A de preferência declarada é explícita: o comprador diz-te que quer um hidratante sem fragrância para pele sensível, por isso não há adivinhação.",
        ],
      },
      {
        heading: "O problema do arranque a frio",
        body: [
          "A personalização comportamental tem dificuldades com compradores novos. Sem histórico para aprender, recorre aos mais vendidos genéricos precisamente para os visitantes em que uma primeira impressão mais importa.",
          "Perguntar ao comprador resolve isto na hora. Um quiz reúne o suficiente para personalizar logo na primeira visita, antes de existir qualquer histórico de navegação, e é por isso que combina tão bem com tráfego pago e social que chega frio.",
        ],
      },
      {
        heading: "Personalizar sem cookies de terceiros",
        body: [
          "A segmentação comportamental tem-se apoiado em cookies de terceiros e rastreamento entre sites, ambos a serem restringidos por browsers e regulação. As recomendações construídas sobre dados que o comprador disponibiliza voluntariamente não dependem de nada disso.",
          "Os dados que um quiz recolhe são zero-party data: preferências e intenções que o comprador partilha de propósito. Isso é distinto de first-party data, que é o comportamento que observas no teu próprio site, como páginas vistas e encomendas anteriores. Zero-party data é um tipo de first-party data, mas é declarada e não inferida, por isso não há nada para adivinhar.",
          "Ambas são duradouras e consentidas, ao contrário de third-party data. Para o panorama completo, vê os guias sobre zero-party data e first-party data.",
        ],
      },
    ],
    withRevenueHunt: [
      "A RevenueHunt personaliza as recomendações a partir das preferências que o comprador declara num quiz, por isso funciona logo na primeira visita e não depende de rastreamento de terceiros. As respostas mapeiam para produtos e variantes reais, e as restrições rígidas excluem tudo o que não encaixa.",
      "As mesmas respostas tornam-se zero-party data, por isso a personalização continua no email: cada campanha depois do quiz pode falar daquilo que cada comprador realmente quer.",
    ],
    faqs: [
      {
        question: "Que dados alimentam as recomendações de produtos personalizadas?",
        answer:
          "Ou dados comportamentais (cliques, visualizações, histórico de compras) ou preferências declaradas que o comprador dá diretamente. As preferências declaradas são as mais precisas porque são voluntárias e não inferidas, e funcionam logo na primeira visita.",
      },
      {
        question: "Posso personalizar recomendações para visitantes de primeira viagem?",
        answer:
          "Sim, se lhes perguntares. Um quiz reúne o suficiente para personalizar logo na primeira visita, algo que os sistemas comportamentais não conseguem fazer porque os visitantes novos não têm histórico para aprender.",
      },
      {
        question: "As recomendações personalizadas precisam de cookies de terceiros?",
        answer:
          "Não. As recomendações construídas sobre dados que um comprador disponibiliza num quiz não dependem de cookies de terceiros nem de rastreamento entre sites, ambos a serem restringidos por browsers e reguladores.",
      },
    ],
    related: [
      { label: "Motor de recomendação de produtos", href: "/glossary/product-recommendation-engine/" },
      { label: "Personalização de ecommerce", href: "/glossary/ecommerce-personalization/" },
      { label: "Zero-party data", href: "/zero-party-data/" },
      { label: "First-party data", href: "/first-party-data/" },
      { label: "Como funciona", href: "/how-it-works/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "ecommerce-personalization": {
    slug: "ecommerce-personalization",
    term: "Personalização de ecommerce",
    chip: "Conceito",
    title: "O que é a personalização de ecommerce?",
    description:
      "A personalização de ecommerce adapta a loja a cada comprador. Eis onde acontece, a mudança para a zero-party data e o ponto de partida mais simples.",
    h1: "O que é a personalização de ecommerce?",
    shortAnswer:
      "A personalização de ecommerce é adaptar a experiência de compra, os produtos, o conteúdo e as ofertas que um comprador vê, ao indivíduo em vez de mostrar a mesma loja a todos. Bem feita, aumenta a conversão e o valor médio de encomenda.",
    intro: [
      "A personalização abrange muito terreno, de uma prateleira de recomendado para ti a uma página inicial totalmente à medida. O fio comum é tratar compradores diferentes de forma diferente com base no que sabes sobre eles.",
    ],
    sections: [
      {
        heading: "Onde acontece a personalização",
        body: [
          "No site, aparece como produtos recomendados, páginas de destino à medida e conteúdo dinâmico. Nas recomendações, ordena o catálogo para cada comprador. No email e SMS, segmenta a mensagem por comportamento ou preferência. Nos anúncios, adapta a criatividade e as audiências.",
          "A maioria das lojas não precisa de tudo isto ao mesmo tempo. Os pontos de partida com maior retorno são as recomendações de produtos e a segmentação de email, porque ambos afetam diretamente o que um comprador compra e se volta.",
        ],
      },
      {
        heading: "A mudança de third-party para zero-party data",
        body: [
          "A personalização clássica apoiava-se fortemente em third-party data e rastreamento entre sites. As mudanças nos browsers e a regulação de privacidade tornaram essa abordagem frágil e, em muitos casos, não conforme.",
          "O substituto duradouro são os teus próprios dados, e vêm em duas formas. First-party data é o que observas das interações de um comprador com a tua loja, como páginas vistas e encomendas anteriores. Zero-party data é o que ele disponibiliza de propósito, como objetivos, preferências e problemas. Zero-party data é o subconjunto declarado de first-party data, e é o sinal de intenção mais preciso porque o comprador te disse diretamente.",
          "Ambas são consentidas e não desaparecem quando um browser bloqueia um cookie. Um quiz é a forma mais direta de recolher zero-party data em escala.",
        ],
      },
      {
        heading: "O ponto de partida mais simples",
        body: [
          "As suítes de personalização empresariais conseguem adaptar cada pixel, com um preço e um prazo de implementação à altura. A maioria das lojas não precisa disso para ver resultados.",
          "Um quiz de recomendação de produtos é o ponto de entrada mais simples. Personaliza o momento mais importante de todos, escolher um produto, capta os dados de preferência que alimentam o email personalizado depois, e pode estar no ar no próprio dia num plano gratuito.",
        ],
      },
    ],
    withRevenueHunt: [
      "A RevenueHunt é uma forma focada e self-serve de começar a personalizar: um quiz que adapta as recomendações na primeira visita e alimenta dados de preferência na tua ferramenta de email para segmentação contínua. Sem contrato empresarial, sem equipa de ciência de dados.",
      "Funciona em todas as principais plataformas e sincroniza com o Klaviyo, Mailchimp, Omnisend, HubSpot e mais, por isso a personalização passa da loja para a caixa de entrada.",
    ],
    faqs: [
      {
        question: "Qual é a forma mais fácil de começar com a personalização de ecommerce?",
        answer:
          "Um quiz de recomendação de produtos. Personaliza o momento de maior impacto, escolher um produto, funciona na primeira visita, capta dados de preferência para email personalizado e pode estar no ar no próprio dia num plano gratuito.",
      },
      {
        question: "A personalização de ecommerce exige cookies de terceiros?",
        answer:
          "Já não, e cada vez mais não pode depender deles. A abordagem duradoura usa dados que os compradores disponibilizam diretamente, que são mais precisos, consentidos e imunes às restrições de browsers e de privacidade.",
      },
      {
        question: "Preciso de uma plataforma empresarial para personalizar a minha loja?",
        answer:
          "Não. As suítes empresariais adaptam tudo a um custo elevado, mas a maioria das lojas vê fortes retornos numa personalização focada: recomendações e segmentação de email, que um quiz concretiza num plano self-serve.",
      },
    ],
    related: [
      { label: "Recomendações de produtos personalizadas", href: "/glossary/personalized-product-recommendations/" },
      { label: "Descoberta de produtos", href: "/glossary/product-discovery/" },
      { label: "Zero-party data", href: "/zero-party-data/" },
      { label: "First-party data", href: "/first-party-data/" },
      { label: "Comparar RevenueHunt vs Nosto", href: "/compare/nosto/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "product-discovery": {
    slug: "product-discovery",
    term: "Descoberta de produtos",
    chip: "Conceito",
    title: "O que é a descoberta de produtos no ecommerce?",
    description:
      "A descoberta de produtos é como os compradores encontram o produto certo no teu catálogo. Os métodos, porque os catálogos grandes a dificultam e como a venda guiada ajuda.",
    h1: "O que é a descoberta de produtos no ecommerce?",
    shortAnswer:
      "A descoberta de produtos é como os compradores encontram o produto certo no teu catálogo. Uma boa descoberta, através de pesquisa, filtros e quizzes guiados, leva um comprador de tenho um problema até é este o produto com o mínimo de atrito possível.",
    intro: [
      "Um comprador raramente chega a saber a tua SKU exata. Chega com uma necessidade. A descoberta de produtos é tudo o que está entre essa necessidade e a página do produto certo.",
    ],
    sections: [
      {
        heading: "Os principais métodos de descoberta",
        body: [
          "A pesquisa deixa os compradores que sabem o que querem escrevê-lo. A navegação e os filtros deixam-nos restringir por categoria e atributo. As recomendações realçam produtos relevantes à medida que navegam. A venda guiada, normalmente um quiz, pergunta pela sua necessidade e aponta-os para a resposta.",
          "Cada um serve um comprador diferente. A pesquisa funciona quando alguém sabe o nome do produto. Os filtros funcionam quando conhece os atributos. Um quiz funciona quando conhece o problema mas não o produto, que é o caso mais difícil e mais comum.",
        ],
      },
      {
        heading: "Porque os catálogos maiores dificultam a descoberta",
        body: [
          "Uma loja com dez produtos mal precisa de ferramentas de descoberta. Uma loja com centenas ou milhares precisa. Quanto mais vendes, mais provável é que um comprador se sinta sobrecarregado e saia sem encontrar aquilo que era certo para ele.",
          "Este é o paradoxo da escolha na prática: mais opções podem baixar a conversão, não aumentá-la, a menos que dês aos compradores uma forma de as cortar. A descoberta guiada transforma um catálogo grande de fraqueza em força.",
        ],
      },
      {
        heading: "A descoberta é a chave da conversão",
        body: [
          "Um comprador que não consegue encontrar o produto certo não compra outro qualquer, vai-se embora. Melhorar a descoberta é muitas vezes a mudança de maior alavancagem que uma loja com um catálogo profundo pode fazer, porque corrige o passo onde a intenção morre em silêncio.",
          "Um quiz é a ferramenta de descoberta mais direta para compras baseadas em necessidade, porque faz a pergunta que um vendedor faria e devolve o produto para o qual ele apontaria.",
        ],
      },
    ],
    withRevenueHunt: [
      "A RevenueHunt trata da descoberta de produtos baseada em necessidade: o comprador descreve o seu objetivo ou problema, e o quiz ordena o teu catálogo ao vivo para devolver a correspondência certa, com restrições rígidas a excluir tudo o que não encaixa.",
      "Escala com o teu catálogo, funciona na primeira visita e corre em Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace e de forma independente.",
    ],
    faqs: [
      {
        question: "Qual é a diferença entre descoberta de produtos e pesquisa?",
        answer:
          "A pesquisa é um método de descoberta, para compradores que já sabem o que querem. A descoberta de produtos é mais ampla e inclui filtros, recomendações e quizzes guiados para compradores que conhecem a necessidade mas não o produto específico.",
      },
      {
        question: "Como é que um quiz melhora a descoberta de produtos?",
        answer:
          "Trata do caso mais difícil: um comprador que conhece o seu problema mas não o produto. O quiz pergunta pela necessidade e ordena o catálogo para devolver a correspondência certa, da forma como um vendedor o guiaria.",
      },
      {
        question: "A descoberta de produtos importa mais para catálogos grandes?",
        answer:
          "Sim. Quanto mais produtos vendes, mais fácil é os compradores sentirem-se sobrecarregados e saírem. A descoberta guiada corta um catálogo grande e transforma o seu tamanho numa vantagem em vez de uma barreira.",
      },
    ],
    related: [
      { label: "Quiz de venda guiada", href: "/guided-selling-quiz/" },
      { label: "Quiz de localizador de produtos", href: "/product-finder-quiz/" },
      { label: "Personalização de ecommerce", href: "/glossary/ecommerce-personalization/" },
      { label: "Comparar RevenueHunt vs Zoovu", href: "/compare/zoovu/" },
      { label: "Modelos de quiz", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "lead-generation-quiz": {
    slug: "lead-generation-quiz",
    term: "Quiz de geração de leads",
    chip: "Tipo de quiz",
    title: "O que é um quiz de geração de leads?",
    description:
      "Um quiz de geração de leads capta leads qualificadas e subscritas com um motivo integrado para subscrever. Eis porque supera um formulário e o que captas.",
    h1: "O que é um quiz de geração de leads?",
    shortAnswer:
      "Um quiz de geração de leads capta leads qualificadas: um comprador responde a algumas perguntas, dá o seu email para ver o resultado, e tu ficas com um contacto etiquetado com as suas preferências declaradas. É um opt-in com um motivo integrado para subscrever.",
    intro: [
      "O email continua a ser o canal de maior retorno no ecommerce, mas um simples formulário de inscrição converte uma pequena fração dos visitantes e não te diz nada sobre eles. Um quiz de geração de leads resolve ambos os problemas de uma vez.",
    ],
    sections: [
      {
        heading: "Porque um quiz supera um simples formulário de inscrição",
        body: [
          "Uma caixa de newsletter pede um email e oferece, na melhor das hipóteses, um desconto genérico. Um quiz de geração de leads oferece um resultado personalizado, que é um motivo pelo qual um comprador realmente quer dar o seu endereço. A troca parece justa, por isso mais pessoas a fazem.",
          "Também recolhe mais do que um email. Quando um comprador subscreve, já respondeu a perguntas sobre os seus objetivos, preferências e restrições, por isso cada contacto chega já qualificado e segmentado.",
        ],
      },
      {
        heading: "O que captas, e como usá-lo",
        body: [
          "Captas o email mais as respostas do quiz como zero-party data. Essas respostas tornam-se etiquetas na tua ferramenta de email: objetivo, tipo de pele, orçamento, destinatário, o que quer que o quiz tenha perguntado.",
          "As etiquetas transformam uma única lista em segmentos com os quais podes falar de forma específica. Uma lead que disse que compra para pele sensível recebe um email diferente de uma que compra um presente, e a diferença é construída na captura, não adivinhada depois.",
        ],
      },
      {
        heading: "A vantagem de conformidade",
        body: [
          "Como o comprador disponibiliza os dados em troca de um resultado, é zero-party data: o tipo declarado de first-party data, consentida por definição. Isso aguenta-se muito melhor do que third-party data inferida ou comprada à medida que as regras de privacidade apertam e os browsers restringem o rastreamento.",
          "És dono dos dados, são precisos porque vieram diretamente do comprador, e não dependem de qualquer cookie de terceiros para se manterem úteis.",
        ],
      },
    ],
    withRevenueHunt: [
      "A RevenueHunt transforma qualquer quiz num quiz de geração de leads: capta o email no momento de maior intenção, e depois sincroniza o contacto e as etiquetas baseadas nas respostas com o Klaviyo, Mailchimp, Omnisend, HubSpot e mais.",
      "Como a recomendação é o incentivo, o mesmo quiz que faz crescer a tua lista também impulsiona a venda, e a análise de abandono mostra exatamente onde apertar o fluxo.",
    ],
    faqs: [
      {
        question: "Em que é um quiz de geração de leads diferente de um formulário de inscrição?",
        answer:
          "Um formulário de inscrição pede um email e oferece um incentivo genérico. Um quiz de geração de leads oferece um resultado personalizado como motivo para subscrever e capta dados de preferência junto com o email, por isso cada lead é qualificada e segmentada.",
      },
      {
        question: "Que informação capta um quiz de geração de leads?",
        answer:
          "O email do comprador mais as respostas do quiz como zero-party data. Essas respostas sincronizam com a tua ferramenta de email como etiquetas, por isso os contactos chegam já segmentados por objetivo, preferência ou restrição.",
      },
      {
        question: "Os dados de um quiz de geração de leads são conformes para usar?",
        answer:
          "Sim. O comprador disponibiliza-os em troca de um resultado, por isso são first-party data, consentidos. Isso aguenta-se melhor do que dados inferidos ou de terceiros à medida que as regras de privacidade e as restrições de browser apertam.",
      },
    ],
    related: [
      { label: "Funil de quiz", href: "/glossary/quiz-funnel/" },
      { label: "Quiz comprável", href: "/glossary/shoppable-quiz/" },
      { label: "Zero-party data", href: "/zero-party-data/" },
      { label: "Integrações", href: "/integrations/" },
      { label: "Modelos de quiz", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "conversion-rate-optimization": {
    slug: "conversion-rate-optimization",
    term: "Otimização da taxa de conversão (CRO)",
    chip: "Conceito",
    title: "O que é a otimização da taxa de conversão?",
    description:
      "A otimização da taxa de conversão (CRO) aumenta a fração de visitantes que compram. Como se mede, onde focar e as táticas que fazem a diferença.",
    h1: "O que é a otimização da taxa de conversão (CRO)?",
    shortAnswer:
      "A otimização da taxa de conversão (CRO) é a prática de aumentar a percentagem de visitantes que tomam uma ação desejada, normalmente uma compra. Medes a taxa de conversão como conversões a dividir por visitantes, e depois melhora-la sem comprar mais tráfego.",
    intro: [
      "A CRO é tirar mais partido do tráfego que já tens. Duplicar a tua taxa de conversão tem o mesmo efeito na receita que duplicar o tráfego, mas custa muito menos.",
    ],
    sections: [
      {
        heading: "Como se calcula a taxa de conversão",
        body: [
          "A taxa de conversão é conversões a dividir pelo total de visitantes, expressa em percentagem. Se 1.000 visitantes produzem 20 compras, isso é uma taxa de conversão de 2%. As taxas médias de conversão no ecommerce situam-se na casa de um dígito baixo, por isso pequenos ganhos absolutos são grandes em termos relativos: passar de 2% para 3% é um aumento de 50% nas encomendas.",
          "A mesma matemática aplica-se a qualquer objetivo, não só a compras. Inscrições por email, conclusões de quiz e adições ao carrinho são todas conversões que podes otimizar.",
        ],
      },
      {
        heading: "Onde a CRO se foca de facto",
        body: [
          "Uma boa CRO encontra o passo específico onde a intenção se perde e corrige-o. Fugas comuns: uma página de produto que não responde à verdadeira pergunta do comprador, um checkout com demasiado atrito, ou uma página de categoria que larga um comprador indeciso numa parede de opções sem orientação.",
          "É um ciclo, não uma correção única: formula uma hipótese, muda uma coisa, mede contra uma base de referência, fica com o que vence. A disciplina está em mudar uma variável de cada vez para saberes o que moveu o número.",
        ],
      },
      {
        heading: "Táticas que movem o número",
        body: [
          "Os ganhos duradouros são clareza e relevância: páginas mais rápidas, informação honesta sobre o produto, menos passos no checkout e ajudar os compradores indecisos a escolher. Os popups de desconto podem aumentar a conversão a curto prazo, mas habituam os compradores a esperar por promoções e corroem a margem.",
          "Ajudar os compradores a escolher é a alavanca mais esquecida. Um comprador que não consegue decidir não converte, e uma grelha de opções não o ajuda. Uma experiência guiada que reduz o catálogo a uma recomendação segura elimina a indecisão que mata a conversão em silêncio.",
        ],
      },
    ],
    withRevenueHunt: [
      "Um quiz de recomendação de produtos é uma tática de CRO dirigida à fuga da indecisão. Em vez de deixar um comprador a comparar uma parede de produtos, faz algumas perguntas e devolve uma recomendação segura e personalizada, para que mais compradores cheguem a uma decisão de compra.",
      "Também capta email e dados de preferência pelo caminho, por isso os visitantes que não compram na primeira visita não se perdem. Podes dimensionar o aumento potencial para os teus próprios números com a calculadora de ROI do quiz.",
    ],
    faqs: [
      {
        question: "Como se calcula a taxa de conversão?",
        answer:
          "Divide o número de conversões pelo número de visitantes e expressa-o em percentagem. Por exemplo, 20 compras em 1.000 visitantes é uma taxa de conversão de 2%. A mesma fórmula serve para qualquer objetivo, como inscrições ou conclusões de quiz.",
      },
      {
        question: "Qual é uma boa taxa de conversão de ecommerce?",
        answer:
          "A maioria das lojas de ecommerce converte na casa de um dígito baixo, muitas vezes à volta de 1% a 3%. Como a base é pequena, ganhos absolutos modestos são grandes em termos relativos: passar de 2% para 3% é um aumento de 50% nas encomendas.",
      },
      {
        question: "Como é que um quiz de produtos melhora a taxa de conversão?",
        answer:
          "Visa a fuga da indecisão. Um quiz reduz um catálogo grande a uma recomendação segura e personalizada, por isso os compradores indecisos chegam a uma decisão de compra em vez de saltarem de uma grelha de opções.",
      },
    ],
    related: [
      { label: "Valor médio de encomenda", href: "/glossary/average-order-value/" },
      { label: "Descoberta de produtos", href: "/glossary/product-discovery/" },
      { label: "Dicas de otimização da conversão", href: "/ecommerce-conversion-optimization-tips/" },
      { label: "Calculadora de ROI do quiz", href: "/quiz-roi-calculator/" },
      { label: "Funil de quiz", href: "/glossary/quiz-funnel/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "average-order-value": {
    slug: "average-order-value",
    term: "Valor médio de encomenda (AOV)",
    chip: "Métrica",
    title: "O que é o valor médio de encomenda (AOV)?",
    description:
      "O valor médio de encomenda (AOV) é a média que um cliente gasta por encomenda. Como calculá-lo, porque importa e como aumentá-lo sem mais tráfego.",
    h1: "O que é o valor médio de encomenda (AOV)?",
    shortAnswer:
      "O valor médio de encomenda (AOV) é a quantia média que um cliente gasta numa única encomenda. Calcula-lo dividindo a receita total pelo número de encomendas no mesmo período.",
    intro: [
      "O AOV é um dos três números que definem a tua receita, a par do tráfego e da taxa de conversão. Aumentá-lo eleva a receita a partir do mesmo número de encomendas, e é por isso que é uma das alavancas de crescimento mais baratas que tens.",
    ],
    sections: [
      {
        heading: "Como calcular o AOV",
        body: [
          "Divide a receita total pelo número de encomendas num período definido. Se uma loja fatura 50.000 $ com 1.000 encomendas num mês, o seu AOV é 50 $. Acompanha-o ao longo do tempo e por fonte de tráfego, porque um canal com AOV mais alto pode valer mais mesmo que converta menos.",
          "O AOV interage com tudo o resto. Um AOV mais alto significa que cada conversão vale mais, o que aumenta quanto podes gastar a adquirir um cliente.",
        ],
      },
      {
        heading: "Porque o AOV importa",
        body: [
          "O tráfego e a taxa de conversão recebem a maior parte da atenção, mas são as alavancas caras: mais tráfego custa investimento em anúncios, e os ganhos de conversão ficam mais difíceis à medida que otimizas. O AOV é a alavanca que podes mover nas encomendas que já estás a ganhar.",
          "Também financia a aquisição. Quanto mais cada encomenda vale, mais podes licitar por tráfego pago e ainda assim manter-te rentável, o que compõe ao longo de todo o funil.",
        ],
      },
      {
        heading: "Como aumentar o AOV",
        body: [
          "As formas honestas de aumentar o AOV acrescentam todas valor genuíno: recomendar produtos complementares, agrupar itens que combinam e ajudar os compradores a comprar a solução completa em vez de uma só peça. O cross-selling e o upselling são as táticas; uma recomendação relevante é o que as faz funcionar em vez de irritar.",
          "A palavra-chave é relevante. Um aviso de extra genérico é ignorado. Um conjunto recomendado que encaixa mesmo no que o comprador está a comprar é adquirido, porque é lido como ajuda, não como uma investida de venda.",
        ],
      },
    ],
    withRevenueHunt: [
      "A RevenueHunt aumenta o AOV ao recomendar um conjunto completo em vez de um só produto. Os lugares de recomendação reservam um espaço para cada função de uma rotina, stack ou pacote, por isso a página de resultados devolve a solução inteira com adicionar ao carrinho para o conjunto e um desconto opcional associado às respostas.",
      "Como cada item é associado às respostas do comprador, a encomenda maior parece uma recomendação, não um upsell. Podes estimar o impacto na receita da tua loja com a calculadora de ROI do quiz.",
    ],
    faqs: [
      {
        question: "Como se calcula o valor médio de encomenda?",
        answer:
          "Divide a receita total pelo número de encomendas no mesmo período. Por exemplo, 50.000 $ de receita em 1.000 encomendas é um valor médio de encomenda de 50 $.",
      },
      {
        question: "Porque é o AOV importante?",
        answer:
          "Eleva a receita a partir das encomendas que já ganhas, sem pagar por mais tráfego, e um AOV mais alto permite-te gastar mais para adquirir cada cliente mantendo-te rentável. É uma das alavancas de crescimento mais baratas disponíveis.",
      },
      {
        question: "Como é que um quiz de produtos pode aumentar o AOV?",
        answer:
          "Ao recomendar um conjunto completo em vez de um único produto. Os lugares de recomendação devolvem uma rotina, stack ou pacote correspondente com adicionar ao carrinho para o conjunto inteiro, por isso cada encomenda é maior continuando a parecer personalizada.",
      },
    ],
    related: [
      { label: "Cross-selling e upselling", href: "/glossary/cross-selling-and-upselling/" },
      { label: "Otimização da taxa de conversão", href: "/glossary/conversion-rate-optimization/" },
      { label: "Quiz de criação de pacotes", href: "/solutions/bundle-builder/" },
      { label: "Quiz de criação de rotinas", href: "/solutions/routine-builder/" },
      { label: "Calculadora de ROI do quiz", href: "/quiz-roi-calculator/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "cross-selling-and-upselling": {
    slug: "cross-selling-and-upselling",
    term: "Cross-selling e upselling",
    chip: "Tática",
    title: "Cross-selling vs upselling explicado",
    description:
      "O cross-selling adiciona produtos relacionados; o upselling sobe para um melhor. Eis a diferença, porque ambos funcionam e como um quiz o faz sem a investida.",
    h1: "O que é o cross-selling e o upselling?",
    shortAnswer:
      "O cross-selling recomenda produtos relacionados que complementam o que um comprador está a comprar, como um hidratante com um produto de limpeza. O upselling recomenda uma versão melhor ou maior do que ele já quer, como um tamanho maior ou um nível premium. Ambos aumentam o valor da encomenda.",
    intro: [
      "Os dois são metidos no mesmo saco porque ambos aumentam quanto um comprador gasta, mas funcionam em direções diferentes. Saber qual encaixa num momento é a diferença entre útil e insistente.",
    ],
    sections: [
      {
        heading: "Cross-selling vs upselling: a diferença",
        body: [
          "O cross-selling vai de lado. Acrescenta itens complementares à encomenda: o clássico quer batatas fritas com isso, ou uma película protetora com um telemóvel. O objetivo é uma compra mais completa.",
          "O upselling vai para cima. Move o comprador para uma versão de maior valor do que já está a considerar: um tamanho maior, um modelo premium, uma subscrição mais longa. O objetivo é um melhor ajuste a um preço mais alto, não mais itens.",
        ],
      },
      {
        heading: "Porque ambos funcionam, quando são relevantes",
        body: [
          "Ambas as táticas aumentam o valor médio de encomenda, e ambas podem sair pela culatra. Um cross-sell ou upsell relevante é lido como um conselho útil; um irrelevante é lido como uma loja a tentar inflacionar a conta, e os compradores ignoram-no ou ressentem-no.",
          "A relevância é tudo, e a relevância exige conhecer o comprador. Uma recomendação baseada no que alguém está mesmo a tentar alcançar resulta. Uma prateleira genérica de talvez também gostes, mostrada a toda a gente, não.",
        ],
      },
      {
        heading: "Como um quiz faz cross-sell e upsell sem a investida",
        body: [
          "Um quiz conhece o objetivo do comprador antes de recomendar o que quer que seja, por isso o cross-sell e o upsell estão integrados na recomendação em vez de acrescentados no checkout. Pode devolver um conjunto completo (cross-sell) e orientar para o nível certo para a necessidade declarada (upsell) num só movimento.",
          "Como a recomendação responde às próprias perguntas do comprador, a encomenda maior parece merecida. O comprador vê uma solução que encaixa, não uma lista de extras.",
        ],
      },
    ],
    withRevenueHunt: [
      "A RevenueHunt integra os cross-sells e upsells na própria recomendação. Os lugares de recomendação reservam um espaço para cada função complementar para que a página de resultados devolva um conjunto completo, e a lógica baseada nas respostas orienta os compradores para o tamanho, nível ou pacote que encaixa no que te disseram.",
      "A página de resultados suporta adicionar ao carrinho para o conjunto inteiro mais um desconto associado às respostas, por isso a encomenda cresce porque a recomendação está certa, não porque um popup interrompeu o checkout.",
    ],
    faqs: [
      {
        question: "Qual é a diferença entre cross-selling e upselling?",
        answer:
          "O cross-selling acrescenta produtos complementares a uma encomenda, como um hidratante com um produto de limpeza. O upselling sobe para uma versão melhor ou maior do que o comprador já quer, como um nível premium ou um tamanho maior. Ambos aumentam o valor da encomenda.",
      },
      {
        question: "O cross-selling e o upselling funcionam mesmo?",
        answer:
          "Sim, quando a recomendação é relevante. Uma sugestão que encaixa no objetivo do comprador é lida como útil e é comprada. Um aviso genérico, igual para todos, é ignorado ou ressentido, por isso a relevância é o que separa os dois resultados.",
      },
      {
        question: "Como é que um quiz faz cross-sell e upsell?",
        answer:
          "Aprende primeiro o objetivo do comprador, e depois integra o cross-sell e o upsell na recomendação. Os lugares de recomendação devolvem um conjunto completo, e a lógica baseada nas respostas orienta para o nível certo, por isso a encomenda maior parece um conselho em vez de uma investida.",
      },
    ],
    related: [
      { label: "Valor médio de encomenda", href: "/glossary/average-order-value/" },
      { label: "Quiz de criação de pacotes", href: "/solutions/bundle-builder/" },
      { label: "Quiz de criação de rotinas", href: "/solutions/routine-builder/" },
      { label: "Quiz comprável", href: "/glossary/shoppable-quiz/" },
      { label: "Recomendações de produtos personalizadas", href: "/glossary/personalized-product-recommendations/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "customer-segmentation": {
    slug: "customer-segmentation",
    term: "Segmentação de clientes",
    chip: "Marketing",
    title: "O que é a segmentação de clientes?",
    description:
      "A segmentação de clientes agrupa compradores por traços comuns para falares a cada grupo de forma específica. Os tipos, porque funciona e como um quiz a alimenta.",
    h1: "O que é a segmentação de clientes?",
    shortAnswer:
      "A segmentação de clientes é a prática de agrupar clientes por traços comuns, como objetivos, comportamento ou demografia, para falares a cada grupo com uma mensagem relevante em vez de enviar a mesma coisa a toda a gente.",
    intro: [
      "Uma única mensagem para toda a tua lista não fala a ninguém em particular. A segmentação deixa-te dizer a coisa certa ao grupo certo, e é por isso que as campanhas segmentadas superam consistentemente o envio em massa.",
    ],
    sections: [
      {
        heading: "As principais formas de segmentar",
        body: [
          "A segmentação demográfica agrupa por atributos como idade ou localização. A segmentação comportamental agrupa pelo que os clientes fazem: compras anteriores, navegação, envolvimento. A segmentação psicográfica agrupa por atitudes e valores. A segmentação baseada em necessidades agrupa pelo problema que um cliente está a tentar resolver.",
          "Para o ecommerce, os segmentos baseados em necessidades e comportamentais tendem a ser os mais acionáveis, porque mapeiam diretamente para o que recomendar e o que dizer a seguir.",
        ],
      },
      {
        heading: "Porque a segmentação funciona",
        body: [
          "A relevância gera resposta. Um cliente que procura para pele seca e sensível não deve receber o mesmo email que um que procura um presente, e quando isso não acontece, as taxas de abertura, os cliques e as conversões sobem todas.",
          "A segmentação também compõe com o tempo. Cada campanha que envias a um segmento bem definido ensina-te mais sobre ele, o que afina a próxima. A lista torna-se um ativo, não apenas um canal de difusão.",
        ],
      },
      {
        heading: "O problema dos dados por detrás da segmentação",
        body: [
          "Só consegues segmentar por aquilo que sabes, e a maioria das lojas não sabe muito sobre um visitante anónimo. Os dados comportamentais acumulam-se devagar e falham com compradores novos, e a third-party data está a ser restringida por browsers e regulação.",
          "A solução é perguntar. Quando um comprador te diz o seu objetivo, preferência ou restrição, podes segmentar com base nisso de imediato e com precisão, com o seu consentimento. Essa informação voluntária é zero-party data.",
        ],
      },
    ],
    withRevenueHunt: [
      "A RevenueHunt transforma as respostas do quiz em segmentos automaticamente. Cada resposta torna-se uma etiqueta de cliente, como objetivo:sono ou pele:sensível, que sincroniza com o Klaviyo, Mailchimp, Omnisend, HubSpot e mais, por isso os contactos chegam pré-segmentados por aquilo que te disseram.",
      "Como os segmentos são construídos a partir de dados que o comprador disponibilizou, são precisos desde a primeira visita e não dependem de rastreamento. Cada campanha depois do quiz pode falar ao segmento em vez de à lista inteira.",
    ],
    faqs: [
      {
        question: "Quais são os principais tipos de segmentação de clientes?",
        answer:
          "As bases comuns são demográfica (idade, localização), comportamental (compras, navegação, envolvimento), psicográfica (atitudes, valores) e baseada em necessidades (o problema que um cliente está a resolver). Para o ecommerce, os segmentos baseados em necessidades e comportamentais são normalmente os mais acionáveis.",
      },
      {
        question: "Porque é a segmentação de clientes importante?",
        answer:
          "Torna a mensagem relevante, o que eleva as taxas de abertura, os cliques e as conversões em comparação com enviar a mesma coisa a toda a gente. Também compõe: cada campanha a um segmento definido ensina-te mais sobre ele e afina a próxima.",
      },
      {
        question: "Como é que um quiz ajuda na segmentação?",
        answer:
          "Pergunta diretamente aos compradores, por isso cada resposta se torna uma etiqueta de cliente que sincroniza com a tua ferramenta de email. Os contactos chegam pré-segmentados por objetivo, preferência ou restrição, precisos desde a primeira visita e sem depender de rastreamento.",
      },
    ],
    related: [
      { label: "Recomendações de produtos personalizadas", href: "/glossary/personalized-product-recommendations/" },
      { label: "Quiz de geração de leads", href: "/glossary/lead-generation-quiz/" },
      { label: "Zero-party data", href: "/zero-party-data/" },
      { label: "Personalização de ecommerce", href: "/glossary/ecommerce-personalization/" },
      { label: "Integrações", href: "/integrations/" },
    ],
    verifiedAsOf: VERIFIED,
  },
};

/** Guides and pages the glossary hub points to. */
export const GLOSSARY_RELATED_GUIDES_PT: GlossaryLink[] = [
  {
    label: "Quiz de localizador de produtos",
    href: "/product-finder-quiz/",
    blurb: "O que é um quiz de localizador de produtos, quando usar um e 12 exemplos ao vivo.",
  },
  {
    label: "Quiz de venda guiada",
    href: "/guided-selling-quiz/",
    blurb: "Como funciona a venda guiada no ecommerce e como construir o quiz.",
  },
  {
    label: "Zero-party data",
    href: "/zero-party-data/",
    blurb: "O que é a zero-party data, porque supera o rastreamento comportamental e como um quiz a capta.",
  },
  {
    label: "Soluções por setor",
    href: "/solutions/",
    blurb: "Soluções de quiz de recomendação de produtos para cuidado da pele, suplementos, moda e mais.",
  },
  {
    label: "Calculadora de ROI do quiz",
    href: "/quiz-roi-calculator/",
    blurb: "Estima a receita extra que um quiz de recomendação de produtos poderia acrescentar à tua loja.",
  },
];
