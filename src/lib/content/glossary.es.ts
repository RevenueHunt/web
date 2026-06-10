import type { GlossaryTerm, GlossaryLink } from "../glossary";

const VERIFIED = "2026-06-07";

export const GLOSSARY_ES: Record<string, GlossaryTerm> = {
  "conversational-commerce": {
    slug: "conversational-commerce",
    term: "Comercio conversacional",
    chip: "Concepto",
    title: "¿Qué es el comercio conversacional?",
    description:
      "El comercio conversacional vende a través de un diálogo en dos sentidos en lugar de una cuadrícula estática. Esto es lo que abarca, por qué funciona y cómo un quiz lo consigue.",
    h1: "¿Qué es el comercio conversacional?",
    shortAnswer:
      "El comercio conversacional consiste en vender a través de una conversación interactiva en dos sentidos en lugar de una cuadrícula estática de productos. Los compradores responden preguntas, la tienda responde con recomendaciones personalizadas, igual que hace un buen vendedor en una tienda física.",
    intro: [
      "En una tienda física, un buen dependiente pregunta qué necesitas, escucha y te señala el producto adecuado. Online, la mayoría de las tiendas se saltan ese paso y dejan a los compradores frente a una cuadrícula con todos los productos que venden. El comercio conversacional vuelve a poner el diálogo en el centro.",
    ],
    sections: [
      {
        heading: "Qué cuenta como comercio conversacional",
        body: [
          "La categoría es amplia. Incluye chatbots, apps de mensajería, chat en vivo, asistentes de voz y quizzes de recomendación de productos. Lo que comparten es un ida y vuelta: el comprador aporta información y la tienda responde con algo más específico que una página de catálogo genérica.",
          "Las formas se diferencian en cuánto las controlas. Un chatbot de texto libre puede ir a donde sea que el comprador escriba, lo cual es potente e impredecible. Un quiz es comercio conversacional estructurado: cada pregunta y cada camino lo has diseñado tú, así que la conversación se mantiene fiel a tu marca y siempre termina en un producto real.",
        ],
      },
      {
        heading: "Por qué convierte mejor que una cuadrícula",
        body: [
          "Una página de categoría le pide al comprador que haga el trabajo: leer cada opción, comparar especificaciones y adivinar cuál encaja. Eso es parálisis por análisis, y es donde se pierden muchos carritos antes de empezar.",
          "Una conversación hace el trabajo por ellos. Reduce un catálogo grande a una recomendación corta y justificada, y explica el porqué. Los compradores que obtienen una respuesta clara añaden al carrito en lugar de marcharse a comparar en otro sitio.",
          "También captura preferencias. Cada respuesta que da un comprador es información que puedes usar para segmentar el email, personalizar el seguimiento y hacer mejor merchandising más adelante.",
        ],
      },
      {
        heading: "Comercio conversacional frente a un chatbot",
        body: [
          "A menudo se usan los dos términos como sinónimos, pero un chatbot es una herramienta dentro de la categoría, no la categoría entera. Un chatbot basado en un modelo de lenguaje grande puede responder preguntas abiertas, pero también puede malinterpretar la intención o recomendar algo que no tienes en stock.",
          "Un quiz de recomendación de productos cambia la libertad por la fiabilidad. No puede desviarse del tema, siempre recomienda desde tu catálogo en vivo y funciona igual para cada comprador. Para la mayoría de las tiendas, esa previsibilidad vale más que un chat de formato libre.",
        ],
      },
    ],
    withRevenueHunt: [
      "Un quiz de RevenueHunt es la forma más fiable de comercio conversacional que puede usar una tienda. Tú diseñas cada pregunta y cada camino, la página de resultados siempre recomienda productos y variantes reales de tu catálogo, y cada respuesta se captura como zero-party data que puedes sincronizar con Klaviyo y otras herramientas.",
      "Funciona en Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace y como quiz alojado independiente, y es gratis para empezar con 100 respuestas al mes.",
    ],
    faqs: [
      {
        question: "¿Se considera un quiz de productos como comercio conversacional?",
        answer:
          "Sí. Un quiz es una forma estructurada de comercio conversacional: el comprador responde preguntas y la tienda responde con recomendaciones personalizadas, el mismo modelo de diálogo que un chatbot pero con cada camino diseñado de antemano.",
      },
      {
        question: "¿Cuál es la diferencia entre el comercio conversacional y un chatbot?",
        answer:
          "Un chatbot es una herramienta dentro del comercio conversacional. El comercio conversacional es la idea más amplia de vender a través de una conversación en dos sentidos, que también incluye quizzes, chat en vivo, mensajería y voz.",
      },
      {
        question: "¿Funciona el comercio conversacional para tiendas pequeñas?",
        answer:
          "Sí. Un quiz de recomendación de productos es la forma de menor esfuerzo para empezar. No necesita historial de tráfico para funcionar, corre en un plan gratuito y puede estar en vivo el mismo día.",
      },
    ],
    related: [
      { label: "Motor de recomendación de productos", href: "/glossary/product-recommendation-engine/" },
      { label: "Quiz comprable", href: "/glossary/shoppable-quiz/" },
      { label: "Quiz de venta guiada", href: "/guided-selling-quiz/" },
      { label: "Cómo funciona", href: "/how-it-works/" },
      { label: "Plantillas de quiz", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "product-recommendation-engine": {
    slug: "product-recommendation-engine",
    term: "Motor de recomendación de productos",
    chip: "Concepto",
    title: "¿Qué es un motor de recomendación de productos?",
    description:
      "Un motor de recomendación de productos decide qué productos mostrar a cada comprador. Los tipos, el problema del arranque en frío y cómo funciona un motor basado en quiz.",
    h1: "¿Qué es un motor de recomendación de productos?",
    shortAnswer:
      "Un motor de recomendación de productos es el software que decide qué productos mostrar a un comprador concreto. Toma entradas (comportamiento de navegación, historial de compras o preferencias declaradas) y ordena tu catálogo para hacer aflorar las mejores coincidencias.",
    intro: [
      "Toda tienda que muestra a un comprador algo que no sea el catálogo completo está usando un motor de recomendación de algún tipo, aunque sea solo una sección manual de más vendidos. La pregunta interesante es qué usa el motor para decidir.",
    ],
    sections: [
      {
        heading: "Los tipos principales",
        body: [
          "Los motores de comportamiento usan lo que hacen los compradores: páginas vistas, artículos clicados, cosas compradas. Impulsan las clásicas secciones de recomendado para ti y los clientes también compraron. Se apoyan en el filtrado colaborativo, que necesita mucho tráfico e historial para funcionar bien.",
          "Los motores basados en reglas o atributos usan datos de producto y lógica fijada por el merchandiser: mostrar accesorios con esta categoría, hacer aflorar primero los artículos en stock. Son previsibles pero estáticos.",
          "Los motores basados en preferencias o en quiz usan lo que el comprador te dice directamente. El comprador responde unas preguntas y el motor ordena el catálogo frente a esas respuestas. Esta es la señal de intención más directa, porque es voluntaria en lugar de inferida.",
        ],
      },
      {
        heading: "El problema del arranque en frío",
        body: [
          "Los motores de comportamiento tienen una debilidad conocida: fallan con los visitantes nuevos y los productos nuevos. Un comprador que llega por primera vez no tiene historial, así que el motor no tiene nada en lo que basarse y recurre a los más vendidos genéricos. Un producto recién añadido todavía no tiene clics, así que rara vez se recomienda.",
          "Un motor basado en preferencias no tiene arranque en frío. Un visitante completamente nuevo que responde tres preguntas le da al motor todo lo que necesita en la primera visita, sin rastreo y sin esperar a que se acumulen los datos.",
        ],
      },
      {
        heading: "Cómo ordena los productos un motor de quiz",
        body: [
          "Cada respuesta lleva un peso. Una respuesta imprescindible puede votar a favor de los productos que coinciden y en contra de los que no, mientras que una restricción dura como una alergia o una especificación incompatible puede excluir productos por completo, sin importar lo bien que hayan puntuado en lo demás.",
          "El resultado es una lista corta ordenada y justificada en lugar de una sola conjetura. Los buenos motores también reservan un hueco para cada rol de un conjunto, así que la salida puede ser una rutina, un stack o un pack completo en lugar de un solo producto.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt es un motor de recomendación de productos basado en preferencias e impulsado por un quiz. Las respuestas votan a favor, votan en contra o excluyen productos de tu catálogo en vivo, los huecos de recomendación reservan un lugar para cada rol de un conjunto, y funciona para un visitante que llega por primera vez sin ningún historial.",
      "Como las entradas son voluntarias, las mismas respuestas sirven a la vez como zero-party data que posees y puedes usar para segmentar mucho después de que el comprador se vaya.",
    ],
    faqs: [
      {
        question: "¿Cuál es la diferencia entre un motor de recomendación de comportamiento y uno basado en quiz?",
        answer:
          "Un motor de comportamiento infiere la intención a partir de clics e historial de compras, lo que necesita tráfico y falla con los visitantes nuevos. Un motor basado en quiz usa las preferencias que el comprador declara directamente, así que funciona en la primera visita sin historial.",
      },
      {
        question: "¿Necesito mucho tráfico para que un motor de recomendación funcione?",
        answer:
          "No para un motor basado en quiz. Como el comprador te dice sus preferencias, funciona desde la primera visita. Los motores de comportamiento, en cambio, necesitan tráfico e historial de compras significativos antes de que sus recomendaciones sean fiables.",
      },
      {
        question: "¿Puede un motor de recomendación sugerir más de un producto?",
        answer:
          "Sí. Con los huecos de recomendación, el motor reserva un lugar para cada rol de un conjunto y rellena cada uno con la mejor coincidencia, devolviendo una rutina, un stack o un pack completo en lugar de un solo artículo.",
      },
    ],
    related: [
      { label: "Recomendaciones de productos personalizadas", href: "/glossary/personalized-product-recommendations/" },
      { label: "Comercio conversacional", href: "/glossary/conversational-commerce/" },
      { label: "Quiz buscador de productos", href: "/product-finder-quiz/" },
      { label: "Cómo funciona", href: "/how-it-works/" },
      { label: "Quiz para Shopify", href: "/product-recommendation-quiz-shopify/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "shoppable-quiz": {
    slug: "shoppable-quiz",
    term: "Quiz comprable",
    chip: "Tipo de quiz",
    title: "¿Qué es un quiz comprable?",
    description:
      "Un quiz comprable termina en una página de resultados donde los compradores añaden al carrito los productos recomendados. Esto es lo que hace que un quiz sea comprable y dónde lo usan las tiendas.",
    h1: "¿Qué es un quiz comprable?",
    shortAnswer:
      "Un quiz comprable es un quiz interactivo que termina en una página de resultados personalizada donde los compradores pueden añadir los productos recomendados directamente al carrito. El quiz forma parte de la tienda, no es una encuesta que vive aparte.",
    intro: [
      "Muchas marcas usan quizzes. La diferencia entre uno que genera ingresos y uno que solo recoge respuestas está en si un comprador puede comprar al final sin tener que irse.",
    ],
    sections: [
      {
        heading: "Qué hace que un quiz sea comprable",
        body: [
          "Tres cosas. Primero, recomienda productos y variantes reales de tu catálogo en vivo, no texto de relleno. Segundo, la página de resultados tiene la opción de añadir al carrito, así que un comprador puede comprar la recomendación en un solo paso. Tercero, puede llevar la oferta hasta el final: un descuento ligado a las respuestas, un pack añadido como conjunto, una venta adicional en la página de resultados.",
          "Sin eso, tienes un quiz de personalidad o una encuesta. Puede ser divertido y puede recoger emails, pero no cierra la venta que acaba de abrir.",
        ],
      },
      {
        heading: "Quiz comprable frente a una encuesta o un quiz de personalidad",
        body: [
          "Una encuesta recoge respuestas y termina. Un quiz de personalidad entretiene y termina. Un quiz comprable usa las respuestas para recomendar productos y luego deja que el comprador actúe sobre la recomendación de inmediato, mientras su intención está más alta.",
          "Ese último paso es lo que importa. El momento justo después de que un comprador obtiene una respuesta con confianza es el momento en que es más probable que compre. Un quiz comprable captura ese momento en lugar de devolverlo al catálogo para empezar de cero.",
        ],
      },
      {
        heading: "Dónde se usan los quizzes comprables",
        body: [
          "Donde sea que elegir resulte difícil: rutinas de skincare, stacks de suplementos, tonos de base de maquillaje, talla y ajuste, sets de regalo, mezclas de café. Cuanto más difícil sea elegir desde una cuadrícula, más se gana su lugar un quiz comprable.",
          "Funcionan como popup, como bloque incrustado en una página o como una experiencia de página completa, y el mismo quiz puede alimentar a la vez el tráfico de pago, el email y el descubrimiento en el sitio.",
        ],
      },
    ],
    withRevenueHunt: [
      "Cada quiz de RevenueHunt es comprable por defecto. La página de resultados extrae productos y variantes reales de tu catálogo, admite añadir al carrito un solo artículo o un conjunto entero, y puede mostrar un código de descuento o un bloque de contenido según las respuestas del comprador.",
      "Puedes construir uno desde una plantilla o describir tu tienda al AI Quiz Copilot y tener un quiz completo montado en unos 60 segundos, y luego publicarlo como popup, incrustado o página de aterrizaje.",
    ],
    faqs: [
      {
        question: "¿Cuál es la diferencia entre un quiz comprable y un quiz de personalidad?",
        answer:
          "Un quiz de personalidad entretiene y termina. Un quiz comprable recomienda productos reales de tu catálogo y deja que los compradores los añadan al carrito en la página de resultados, así que cierra la venta en lugar de solo recoger respuestas.",
      },
      {
        question: "¿Pueden los compradores añadir productos al carrito desde el quiz?",
        answer:
          "Sí. Eso es lo que lo hace comprable. La página de resultados muestra los productos y variantes coincidentes con la opción directa de añadir al carrito, para un solo artículo o un conjunto completo.",
      },
      {
        question: "¿Puede un quiz comprable mostrar un descuento?",
        answer:
          "Sí. La página de resultados admite bloques de código de descuento y de contenido que puedes ligar a respuestas concretas, así que los compradores adecuados ven la oferta adecuada en el punto de decisión.",
      },
    ],
    related: [
      { label: "Embudo de quiz", href: "/glossary/quiz-funnel/" },
      { label: "Comercio conversacional", href: "/glossary/conversational-commerce/" },
      { label: "Quiz creador de packs", href: "/solutions/bundle-builder/" },
      { label: "Plantillas de quiz", href: "/templates/" },
      { label: "Calculadora de ROI del quiz", href: "/quiz-roi-calculator/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "quiz-funnel": {
    slug: "quiz-funnel",
    term: "Embudo de quiz",
    chip: "Marketing",
    title: "¿Qué es un embudo de quiz?",
    description:
      "Un embudo de quiz usa un quiz como punto de entrada para convertir el tráfico en leads cualificados y suscritos. Estas son las etapas y por qué supera a un opt-in simple.",
    h1: "¿Qué es un embudo de quiz?",
    shortAnswer:
      "Un embudo de quiz es un embudo de marketing que usa un quiz como punto de entrada. Un comprador hace un quiz, obtiene una recomendación, da su email y entra en una secuencia de seguimiento segmentada. Convierte el tráfico anónimo en un lead cualificado con una preferencia conocida.",
    intro: [
      "La mayoría de los embudos de ecommerce empiezan con un popup de descuento y un solo campo de email. Un embudo de quiz lo sustituye por algo que el comprador realmente quiere: una respuesta personalizada.",
    ],
    sections: [
      {
        heading: "Las etapas de un embudo de quiz",
        body: [
          "El tráfico llega al quiz, desde un anuncio, un email o un enlace en tu sitio. El comprador responde unas preguntas. Llega a una página de resultados con una recomendación personalizada. Para ver o guardar el resultado, da su email. Ese email entra en una secuencia de seguimiento segmentada según lo que te ha dicho.",
          "La diferencia con un embudo normal está en lo que sabes al final. En lugar de un suscriptor anónimo, tienes un contacto etiquetado con sus objetivos, preferencias y los productos con los que coincidió.",
        ],
      },
      {
        heading: "Por qué supera a un opt-in genérico",
        body: [
          "Una simple suscripción a la newsletter no ofrece nada específico, así que convierte una pequeña parte del tráfico y no te da ninguna información más allá de una dirección de email. Un embudo de quiz ofrece una recomendación personalizada como motivo para suscribirse, lo cual es un intercambio mucho más fuerte.",
          "También mejora cada email posterior. Un suscriptor que sabes que busca para piel seca y sensible recibe mensajes distintos que uno que busca un regalo. Esa segmentación se construye durante el quiz, no se añade después.",
        ],
      },
      {
        heading: "Los embudos de quiz y el tráfico de pago",
        body: [
          "Los embudos de quiz son populares para la adquisición de pago porque cualifican y capturan en un solo paso. El tráfico frío que se marcharía de una página de producto a menudo completa un quiz, y la captura del email significa que conservas el lead aunque no compre en la primera visita.",
          "Un embudo de quiz es una forma concreta de embudo. Para tener la imagen más amplia de cómo se construyen los embudos de ecommerce, consulta la guía de ejemplos de embudos.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt está hecho para ejecutar el embudo de quiz completo. Captura el email en el punto de mayor intención, sincroniza respuestas y etiquetas de cliente con Klaviyo, Mailchimp, Omnisend, HubSpot y más, y muestra el abandono pregunta a pregunta para que puedas arreglar las fugas.",
      "La recomendación de la página de resultados es el imán de leads, así que lo que gana el email es también lo que impulsa la venta.",
    ],
    faqs: [
      {
        question: "¿En qué se diferencia un embudo de quiz de un embudo de ventas normal?",
        answer:
          "Un embudo de quiz usa un quiz como punto de entrada, así que cualifica y segmenta los leads a medida que los captura. Un embudo normal suele empezar con un opt-in genérico que captura un email pero ningún dato de preferencia.",
      },
      {
        question: "¿Funciona un embudo de quiz para los anuncios de pago?",
        answer:
          "Sí. Los embudos de quiz son habituales para la adquisición de pago porque cualifican el tráfico frío y capturan el email en un solo paso, así que conservas el lead incluso cuando el comprador no compra en la primera visita.",
      },
      {
        question: "¿Qué hago con los leads que captura un embudo de quiz?",
        answer:
          "Sincronízalos con tu herramienta de email con las respuestas del quiz como etiquetas, y luego envía seguimiento segmentado por objetivo o preferencia. RevenueHunt sincroniza respuestas y etiquetas de cliente con Klaviyo, Mailchimp, Omnisend, HubSpot y más.",
      },
    ],
    related: [
      { label: "Quiz de generación de leads", href: "/glossary/lead-generation-quiz/" },
      { label: "Quiz comprable", href: "/glossary/shoppable-quiz/" },
      { label: "Ejemplos de embudos de ecommerce", href: "/ecommerce-sales-funnel-examples/" },
      { label: "Calculadora de ROI del quiz", href: "/quiz-roi-calculator/" },
      { label: "Integraciones", href: "/integrations/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "personalized-product-recommendations": {
    slug: "personalized-product-recommendations",
    term: "Recomendaciones de productos personalizadas",
    chip: "Concepto",
    title: "¿Qué son las recomendaciones de productos personalizadas?",
    description:
      "Las recomendaciones de productos personalizadas adaptan las sugerencias a cada comprador. Así lo hacen las tiendas, el problema del arranque en frío y la forma sin cookies.",
    h1: "¿Qué son las recomendaciones de productos personalizadas?",
    shortAnswer:
      "Las recomendaciones de productos personalizadas son sugerencias adaptadas a un comprador individual en lugar de los mismos más vendidos que se muestran a todo el mundo. Pueden basarse en el comportamiento de navegación, en compras pasadas o, de la forma más directa, en lo que el comprador te dice.",
    intro: [
      "Mostrar a cada comprador la misma cuadrícula trata por igual a un comprador de regalos primerizo y a un cliente fiel que repite. Las recomendaciones personalizadas se adaptan a quién está comprando de verdad.",
    ],
    sections: [
      {
        heading: "Cómo personalizan las recomendaciones las tiendas",
        body: [
          "Hay dos enfoques generales. La personalización por comportamiento observa lo que hace un comprador, clics, vistas, pedidos anteriores, e infiere qué mostrar a continuación. La personalización por preferencias declaradas le pregunta directamente al comprador y recomienda según sus respuestas.",
          "El comportamiento es invisible para el comprador y escala automáticamente, pero es una inferencia y puede equivocarse. La preferencia declarada es explícita: el comprador te dice que quiere una crema hidratante sin fragancia para piel sensible, así que no hay que adivinar.",
        ],
      },
      {
        heading: "El problema del arranque en frío",
        body: [
          "La personalización por comportamiento tiene dificultades con los compradores nuevos. Sin historial del que aprender, recurre por defecto a los más vendidos genéricos justo para los visitantes en los que más importa una primera impresión.",
          "Preguntarle al comprador resuelve esto al instante. Un quiz reúne lo suficiente para personalizar en la primera visita, antes de que exista ningún historial de navegación, por eso encaja tan bien con el tráfico de pago y social que llega en frío.",
        ],
      },
      {
        heading: "Personalizar sin cookies de terceros",
        body: [
          "La segmentación por comportamiento se ha apoyado en las cookies de terceros y el rastreo entre sitios, ambos cada vez más restringidos por los navegadores y la regulación. Las recomendaciones construidas sobre datos que el comprador ofrece voluntariamente no dependen de nada de eso.",
          "Los datos que recoge un quiz son zero-party data: preferencias e intenciones que el comprador comparte a propósito. Eso es distinto del first-party data, que es el comportamiento que observas en tu propio sitio, como las páginas vistas y los pedidos anteriores. El zero-party data es un tipo de first-party data, pero es declarado en lugar de inferido, así que no hay nada que adivinar.",
          "Ambos son duraderos y consentidos, a diferencia del third-party data. Para la imagen completa, consulta las guías sobre zero-party data y first-party data.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt personaliza las recomendaciones a partir de las preferencias que el comprador declara en un quiz, así que funciona en la primera visita y no depende del rastreo de terceros. Las respuestas se asignan a productos y variantes reales, y las restricciones duras excluyen cualquier cosa que no encaje.",
      "Las mismas respuestas se convierten en zero-party data, así que la personalización continúa en el email: cada campaña posterior al quiz puede hablar de lo que cada comprador realmente quiere.",
    ],
    faqs: [
      {
        question: "¿Qué datos impulsan las recomendaciones de productos personalizadas?",
        answer:
          "O bien datos de comportamiento (clics, vistas, historial de compras) o bien preferencias declaradas que el comprador da directamente. Las preferencias declaradas son las más precisas porque son voluntarias en lugar de inferidas, y funcionan en la primera visita.",
      },
      {
        question: "¿Puedo personalizar las recomendaciones para visitantes que llegan por primera vez?",
        answer:
          "Sí, si les preguntas. Un quiz reúne lo suficiente para personalizar en la primera visita, algo que los sistemas de comportamiento no pueden hacer porque los visitantes nuevos no tienen historial del que aprender.",
      },
      {
        question: "¿Necesitan las recomendaciones personalizadas cookies de terceros?",
        answer:
          "No. Las recomendaciones construidas sobre datos que un comprador ofrece voluntariamente en un quiz no dependen de las cookies de terceros ni del rastreo entre sitios, ambos cada vez más restringidos por navegadores y reguladores.",
      },
    ],
    related: [
      { label: "Motor de recomendación de productos", href: "/glossary/product-recommendation-engine/" },
      { label: "Personalización en ecommerce", href: "/glossary/ecommerce-personalization/" },
      { label: "Zero-party data", href: "/zero-party-data/" },
      { label: "First-party data", href: "/first-party-data/" },
      { label: "Cómo funciona", href: "/how-it-works/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "ecommerce-personalization": {
    slug: "ecommerce-personalization",
    term: "Personalización en ecommerce",
    chip: "Concepto",
    title: "¿Qué es la personalización en ecommerce?",
    description:
      "La personalización en ecommerce adapta la tienda a cada comprador. Aquí está dónde ocurre, el cambio al zero-party data y el sitio de menor esfuerzo para empezar.",
    h1: "¿Qué es la personalización en ecommerce?",
    shortAnswer:
      "La personalización en ecommerce consiste en adaptar la experiencia de compra, los productos, el contenido y las ofertas que ve un comprador, al individuo en lugar de mostrar a todo el mundo la misma tienda. Bien hecha, sube la conversión y el valor medio de pedido.",
    intro: [
      "La personalización abarca mucho terreno, desde una sección de recomendado para ti hasta una página de inicio totalmente adaptada. El hilo común es tratar a distintos compradores de forma distinta según lo que sabes de ellos.",
    ],
    sections: [
      {
        heading: "Dónde ocurre la personalización",
        body: [
          "En el sitio, aparece como productos recomendados, páginas de aterrizaje adaptadas y contenido dinámico. En las recomendaciones, ordena el catálogo para cada comprador. En email y SMS, segmenta los mensajes por comportamiento o preferencia. En los anuncios, adapta la creatividad y las audiencias.",
          "La mayoría de las tiendas no necesitan todo a la vez. Los sitios de mayor retorno para empezar son las recomendaciones de productos y la segmentación de email, porque ambos afectan directamente a lo que compra un comprador y a si vuelve.",
        ],
      },
      {
        heading: "El cambio del third-party data al zero-party data",
        body: [
          "La personalización clásica se apoyaba mucho en el third-party data y el rastreo entre sitios. Los cambios en los navegadores y la regulación de privacidad han vuelto ese enfoque frágil y, en muchos casos, no conforme con la normativa.",
          "El reemplazo duradero son tus propios datos, y llegan en dos formas. El first-party data es lo que observas de las interacciones de un comprador con tu tienda, como las páginas vistas y los pedidos anteriores. El zero-party data es lo que ofrecen a propósito, como objetivos, preferencias y problemas. El zero-party data es el subconjunto declarado del first-party data, y es la señal de intención más precisa porque el comprador te lo dijo directamente.",
          "Ambos son consentidos y no desaparecen cuando un navegador bloquea una cookie. Un quiz es la forma más directa de recoger zero-party data a escala.",
        ],
      },
      {
        heading: "El sitio de menor esfuerzo para empezar",
        body: [
          "Las suites de personalización empresariales pueden adaptar cada píxel, con un precio y un calendario de implementación a la altura. La mayoría de las tiendas no necesitan eso para ver resultados.",
          "Un quiz de recomendación de productos es el punto de entrada más sencillo. Personaliza el momento más importante, elegir un producto, captura los datos de preferencia que luego impulsan el email personalizado, y puede estar en vivo el mismo día en un plan gratuito.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt es una forma enfocada y autoservicio de empezar a personalizar: un quiz que adapta las recomendaciones en la primera visita y alimenta tu herramienta de email con datos de preferencia para una segmentación continua. Sin contrato empresarial, sin equipo de ciencia de datos.",
      "Funciona en todas las plataformas principales y se sincroniza con Klaviyo, Mailchimp, Omnisend, HubSpot y más, así que la personalización va de la tienda a la bandeja de entrada.",
    ],
    faqs: [
      {
        question: "¿Cuál es la forma más fácil de empezar con la personalización en ecommerce?",
        answer:
          "Un quiz de recomendación de productos. Personaliza el momento de mayor impacto, elegir un producto, funciona en la primera visita, captura datos de preferencia para el email personalizado y puede estar en vivo el mismo día en un plan gratuito.",
      },
      {
        question: "¿Requiere la personalización en ecommerce cookies de terceros?",
        answer:
          "Ya no, y cada vez menos puede apoyarse en ellas. El enfoque duradero usa datos que los compradores ofrecen voluntariamente de forma directa, lo cual es más preciso, consentido y no se ve afectado por las restricciones de navegadores y privacidad.",
      },
      {
        question: "¿Necesito una plataforma empresarial para personalizar mi tienda?",
        answer:
          "No. Las suites empresariales adaptan todo a un alto coste, pero la mayoría de las tiendas obtienen fuertes retornos de una personalización enfocada: recomendaciones y segmentación de email, que un quiz consigue en un plan de autoservicio.",
      },
    ],
    related: [
      { label: "Recomendaciones de productos personalizadas", href: "/glossary/personalized-product-recommendations/" },
      { label: "Descubrimiento de productos", href: "/glossary/product-discovery/" },
      { label: "Zero-party data", href: "/zero-party-data/" },
      { label: "First-party data", href: "/first-party-data/" },
      { label: "Comparar RevenueHunt frente a Nosto", href: "/compare/nosto/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "product-discovery": {
    slug: "product-discovery",
    term: "Descubrimiento de productos",
    chip: "Concepto",
    title: "¿Qué es el descubrimiento de productos en ecommerce?",
    description:
      "El descubrimiento de productos es cómo los compradores encuentran el producto adecuado en tu catálogo. Los métodos, por qué los catálogos grandes lo dificultan y cómo ayuda la venta guiada.",
    h1: "¿Qué es el descubrimiento de productos en ecommerce?",
    shortAnswer:
      "El descubrimiento de productos es cómo los compradores encuentran el producto adecuado en tu catálogo. Un buen descubrimiento, a través de búsqueda, filtros y quizzes guiados, lleva a un comprador de tengo un problema a este es el producto con la menor fricción posible.",
    intro: [
      "Un comprador rara vez llega sabiendo tu SKU exacto. Llega con una necesidad. El descubrimiento de productos es todo lo que hay entre esa necesidad y la página de producto adecuada.",
    ],
    sections: [
      {
        heading: "Los principales métodos de descubrimiento",
        body: [
          "La búsqueda permite a los compradores que saben lo que quieren escribirlo. La navegación y los filtros les dejan acotar por categoría y atributo. Las recomendaciones hacen aflorar productos relevantes mientras navegan. La venta guiada, normalmente un quiz, pregunta por su necesidad y les señala la respuesta.",
          "Cada uno encaja con un comprador distinto. La búsqueda funciona cuando alguien sabe el nombre del producto. Los filtros funcionan cuando conocen los atributos. Un quiz funciona cuando conocen el problema pero no el producto, que es el caso más difícil y más común.",
        ],
      },
      {
        heading: "Por qué los catálogos más grandes dificultan el descubrimiento",
        body: [
          "Una tienda con diez productos apenas necesita herramientas de descubrimiento. Una tienda con cientos o miles sí. Cuanto más vendes, más probable es que un comprador se sienta abrumado y se vaya sin encontrar lo que era adecuado para él.",
          "Esta es la paradoja de la elección en la práctica: más opciones pueden bajar la conversión, no subirla, a menos que des a los compradores una forma de abrirse paso entre ellas. El descubrimiento guiado convierte un catálogo grande de un lastre en una fortaleza.",
        ],
      },
      {
        heading: "El descubrimiento es la palanca de conversión",
        body: [
          "Un comprador que no encuentra el producto adecuado no compra otro distinto, se va. Mejorar el descubrimiento suele ser el cambio de mayor palanca que puede hacer una tienda con un catálogo profundo, porque arregla el paso donde la intención muere en silencio.",
          "Un quiz es la herramienta de descubrimiento más directa para la compra basada en la necesidad, porque hace la pregunta que haría un vendedor y devuelve el producto que señalaría.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt se encarga del descubrimiento de productos basado en la necesidad: el comprador describe su objetivo o problema, y el quiz ordena tu catálogo en vivo para devolver la coincidencia adecuada, con restricciones duras que excluyen cualquier cosa que no encaje.",
      "Escala con tu catálogo, funciona en la primera visita y corre en Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace e independiente.",
    ],
    faqs: [
      {
        question: "¿Cuál es la diferencia entre el descubrimiento de productos y la búsqueda?",
        answer:
          "La búsqueda es un método de descubrimiento, para compradores que ya saben lo que quieren. El descubrimiento de productos es más amplio e incluye filtros, recomendaciones y quizzes guiados para compradores que conocen su necesidad pero no el producto concreto.",
      },
      {
        question: "¿Cómo mejora un quiz el descubrimiento de productos?",
        answer:
          "Se encarga del caso más difícil: un comprador que conoce su problema pero no el producto. El quiz pregunta por la necesidad y ordena el catálogo para devolver la coincidencia adecuada, de la forma en que un vendedor lo guiaría.",
      },
      {
        question: "¿Importa más el descubrimiento de productos en catálogos grandes?",
        answer:
          "Sí. Cuantos más productos vendes, más fácil es que los compradores se sientan abrumados y se vayan. El descubrimiento guiado se abre paso entre un catálogo grande y convierte su tamaño en una ventaja en lugar de una barrera.",
      },
    ],
    related: [
      { label: "Quiz de venta guiada", href: "/guided-selling-quiz/" },
      { label: "Quiz buscador de productos", href: "/product-finder-quiz/" },
      { label: "Personalización en ecommerce", href: "/glossary/ecommerce-personalization/" },
      { label: "Comparar RevenueHunt frente a Zoovu", href: "/compare/zoovu/" },
      { label: "Plantillas de quiz", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "lead-generation-quiz": {
    slug: "lead-generation-quiz",
    term: "Quiz de generación de leads",
    chip: "Tipo de quiz",
    title: "¿Qué es un quiz de generación de leads?",
    description:
      "Un quiz de generación de leads captura leads cualificados y suscritos con un motivo integrado para suscribirse. Aquí está por qué supera a un formulario de registro y qué capturas.",
    h1: "¿Qué es un quiz de generación de leads?",
    shortAnswer:
      "Un quiz de generación de leads captura leads cualificados: un comprador responde unas preguntas, da su email para ver el resultado, y tú obtienes un contacto etiquetado con sus preferencias declaradas. Es un opt-in con un motivo integrado para suscribirse.",
    intro: [
      "El email sigue siendo el canal de mayor retorno en ecommerce, pero un formulario de registro simple convierte una pequeña fracción de los visitantes y no te dice nada sobre ellos. Un quiz de generación de leads arregla los dos problemas a la vez.",
    ],
    sections: [
      {
        heading: "Por qué un quiz supera a un formulario de registro simple",
        body: [
          "Una casilla de newsletter pide un email y ofrece, como mucho, un descuento genérico. Un quiz de generación de leads ofrece un resultado personalizado, que es un motivo por el que un comprador realmente quiere dar su dirección. El intercambio parece justo, así que más gente lo acepta.",
          "También recoge más que un email. Para cuando un comprador se suscribe, ha respondido preguntas sobre sus objetivos, preferencias y restricciones, así que cada contacto llega ya cualificado y segmentado.",
        ],
      },
      {
        heading: "Qué capturas y cómo usarlo",
        body: [
          "Capturas el email más las respuestas del quiz como zero-party data. Esas respuestas se convierten en etiquetas en tu herramienta de email: objetivo, tipo de piel, presupuesto, destinatario, lo que sea que preguntara el quiz.",
          "Las etiquetas convierten una sola lista en segmentos a los que puedes hablar de forma específica. Un lead que dijo que compra para piel sensible recibe un email distinto que uno que compra un regalo, y la diferencia se construye en la captura, no se adivina después.",
        ],
      },
      {
        heading: "La ventaja de cumplimiento normativo",
        body: [
          "Como el comprador ofrece los datos voluntariamente a cambio de un resultado, es zero-party data: el tipo declarado de first-party data, consentido por definición. Eso aguanta mucho mejor que el third-party data inferido o comprado a medida que las reglas de privacidad se endurecen y los navegadores restringen el rastreo.",
          "Posees los datos, son precisos porque vinieron directamente del comprador, y no dependen de ninguna cookie de terceros para seguir siendo útiles.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt convierte cualquier quiz en un quiz de generación de leads: captura el email en el punto de mayor intención, y luego sincroniza el contacto y las etiquetas basadas en las respuestas con Klaviyo, Mailchimp, Omnisend, HubSpot y más.",
      "Como la recomendación es el incentivo, el mismo quiz que hace crecer tu lista también impulsa la venta, y la analítica de abandono muestra exactamente dónde ajustar el flujo.",
    ],
    faqs: [
      {
        question: "¿En qué se diferencia un quiz de generación de leads de un formulario de registro?",
        answer:
          "Un formulario de registro pide un email y ofrece un incentivo genérico. Un quiz de generación de leads ofrece un resultado personalizado como motivo para suscribirse y captura datos de preferencia junto con el email, así que cada lead está cualificado y segmentado.",
      },
      {
        question: "¿Qué información captura un quiz de generación de leads?",
        answer:
          "El email del comprador más sus respuestas del quiz como zero-party data. Esas respuestas se sincronizan con tu herramienta de email como etiquetas, así que los contactos llegan ya segmentados por objetivo, preferencia o restricción.",
      },
      {
        question: "¿Es conforme con la normativa usar los datos de un quiz de generación de leads?",
        answer:
          "Sí. El comprador los ofrece voluntariamente a cambio de un resultado, así que es first-party data consentido. Eso aguanta mejor que el dato inferido o de terceros a medida que las reglas de privacidad y las restricciones de los navegadores se endurecen.",
      },
    ],
    related: [
      { label: "Embudo de quiz", href: "/glossary/quiz-funnel/" },
      { label: "Quiz comprable", href: "/glossary/shoppable-quiz/" },
      { label: "Zero-party data", href: "/zero-party-data/" },
      { label: "Integraciones", href: "/integrations/" },
      { label: "Plantillas de quiz", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "conversion-rate-optimization": {
    slug: "conversion-rate-optimization",
    term: "Optimización de la tasa de conversión (CRO)",
    chip: "Concepto",
    title: "¿Qué es la optimización de la tasa de conversión?",
    description:
      "La optimización de la tasa de conversión (CRO) eleva la proporción de visitantes que compran. Cómo se mide, dónde centrarse y las tácticas que mueven la aguja.",
    h1: "¿Qué es la optimización de la tasa de conversión (CRO)?",
    shortAnswer:
      "La optimización de la tasa de conversión (CRO) es la práctica de aumentar el porcentaje de visitantes que realizan una acción deseada, normalmente una compra. Mides la tasa de conversión como conversiones dividido entre visitantes, y luego la mejoras sin comprar más tráfico.",
    intro: [
      "El CRO consiste en sacar más del tráfico que ya tienes. Duplicar tu tasa de conversión tiene el mismo efecto sobre los ingresos que duplicar tu tráfico, pero cuesta mucho menos.",
    ],
    sections: [
      {
        heading: "Cómo se calcula la tasa de conversión",
        body: [
          "La tasa de conversión es las conversiones dividido entre el total de visitantes, expresado como porcentaje. Si 1.000 visitantes producen 20 compras, eso es una tasa de conversión del 2%. Las tasas de conversión medias en ecommerce están en cifras de un solo dígito bajas, así que pequeñas ganancias absolutas son grandes en términos relativos: pasar del 2% al 3% es un aumento del 50% en pedidos.",
          "La misma matemática se aplica a cualquier objetivo, no solo a las compras. Las suscripciones de email, las finalizaciones de quiz y las adiciones al carrito son todas conversiones que puedes optimizar.",
        ],
      },
      {
        heading: "En qué se centra realmente el CRO",
        body: [
          "Un buen CRO encuentra el paso concreto donde la intención se fuga y lo arregla. Fugas comunes: una página de producto que no responde a la pregunta real del comprador, un checkout con demasiada fricción, o una página de categoría que deja a un comprador indeciso frente a un muro de opciones sin ninguna guía.",
          "Es un bucle, no un arreglo de una sola vez: formula una hipótesis, cambia una sola cosa, mide frente a una base de referencia, conserva lo que gana. La disciplina está en cambiar una variable a la vez para que sepas qué movió el número.",
        ],
      },
      {
        heading: "Tácticas que mueven el número",
        body: [
          "Las victorias duraderas son la claridad y la relevancia: páginas más rápidas, información de producto honesta, menos pasos en el checkout y ayudar a los compradores indecisos a elegir. Los popups de descuento pueden subir la conversión a corto plazo, pero acostumbran a los compradores a esperar ofertas y erosionan el margen.",
          "Ayudar a los compradores a elegir es la palanca más pasada por alto. Un comprador que no puede decidirse no convierte, y una cuadrícula de opciones no le ayuda. Una experiencia guiada que reduce el catálogo a una recomendación con confianza elimina la indecisión que mata en silencio las conversiones.",
        ],
      },
    ],
    withRevenueHunt: [
      "Un quiz de recomendación de productos es una táctica de CRO dirigida a la fuga por indecisión. En lugar de dejar a un comprador comparando un muro de productos, hace unas preguntas y devuelve una recomendación personalizada y con confianza, así que más compradores llegan a una decisión de compra.",
      "También captura email y datos de preferencia por el camino, así que los visitantes que no compran en la primera visita no se pierden. Puedes dimensionar el aumento potencial para tus propios números con la calculadora de ROI del quiz.",
    ],
    faqs: [
      {
        question: "¿Cómo se calcula la tasa de conversión?",
        answer:
          "Divide el número de conversiones entre el número de visitantes y exprésalo como porcentaje. Por ejemplo, 20 compras de 1.000 visitantes es una tasa de conversión del 2%. La misma fórmula sirve para cualquier objetivo, como suscripciones o finalizaciones de quiz.",
      },
      {
        question: "¿Qué es una buena tasa de conversión en ecommerce?",
        answer:
          "La mayoría de las tiendas de ecommerce convierten en cifras de un solo dígito bajas, a menudo en torno al 1% al 3%. Como la base es pequeña, ganancias absolutas modestas son grandes en términos relativos: pasar del 2% al 3% es un aumento del 50% en pedidos.",
      },
      {
        question: "¿Cómo mejora un quiz de productos la tasa de conversión?",
        answer:
          "Apunta a la fuga por indecisión. Un quiz reduce un catálogo grande a una recomendación personalizada y con confianza, así que los compradores indecisos llegan a una decisión de compra en lugar de marcharse de una cuadrícula de opciones.",
      },
    ],
    related: [
      { label: "Valor medio de pedido", href: "/glossary/average-order-value/" },
      { label: "Descubrimiento de productos", href: "/glossary/product-discovery/" },
      { label: "Consejos de optimización de conversión", href: "/ecommerce-conversion-optimization-tips/" },
      { label: "Calculadora de ROI del quiz", href: "/quiz-roi-calculator/" },
      { label: "Embudo de quiz", href: "/glossary/quiz-funnel/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "average-order-value": {
    slug: "average-order-value",
    term: "Valor medio de pedido (AOV)",
    chip: "Métrica",
    title: "¿Qué es el valor medio de pedido (AOV)?",
    description:
      "El valor medio de pedido (AOV) es lo que gasta de media un cliente por pedido. Cómo calcularlo, por qué importa y cómo subirlo sin más tráfico.",
    h1: "¿Qué es el valor medio de pedido (AOV)?",
    shortAnswer:
      "El valor medio de pedido (AOV) es la cantidad media que gasta un cliente en un solo pedido. Lo calculas dividiendo los ingresos totales entre el número de pedidos en el mismo periodo.",
    intro: [
      "El AOV es uno de los tres números que determinan tus ingresos, junto al tráfico y la tasa de conversión. Subirlo eleva los ingresos del mismo número exacto de pedidos, por eso es una de las palancas de crecimiento más baratas que tienes.",
    ],
    sections: [
      {
        heading: "Cómo calcular el AOV",
        body: [
          "Divide los ingresos totales entre el número de pedidos en un periodo determinado. Si una tienda genera 50.000 $ con 1.000 pedidos en un mes, su AOV es 50 $. Síguelo a lo largo del tiempo y por fuente de tráfico, porque un canal de AOV más alto puede valer más incluso si convierte menos.",
          "El AOV interactúa con todo lo demás. Un AOV más alto significa que cada conversión vale más, lo que eleva cuánto puedes permitirte gastar en adquirir un cliente.",
        ],
      },
      {
        heading: "Por qué importa el AOV",
        body: [
          "El tráfico y la tasa de conversión se llevan la mayor parte de la atención, pero son las palancas caras: más tráfico cuesta inversión en anuncios, y las ganancias de conversión se vuelven más difíciles a medida que optimizas. El AOV es la palanca que puedes mover sobre los pedidos que ya estás ganando.",
          "También financia la adquisición. Cuanto más vale cada pedido, más puedes pujar por tráfico de pago y aun así seguir siendo rentable, lo que se compone a lo largo de todo el embudo.",
        ],
      },
      {
        heading: "Cómo aumentar el AOV",
        body: [
          "Las formas honestas de subir el AOV todas añaden valor real: recomendar productos complementarios, agrupar artículos que van juntos y ayudar a los compradores a comprar la solución completa en lugar de una sola pieza. El cross-selling y el upselling son las tácticas; una recomendación relevante es lo que hace que funcionen en lugar de molestar.",
          "La palabra clave es relevante. Un aviso de complemento genérico se ignora. Un conjunto recomendado que de verdad encaja con lo que el comprador está comprando se compra, porque se lee como ayuda, no como un empujón de ventas.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt sube el AOV recomendando un conjunto completo en lugar de un solo producto. Los huecos de recomendación reservan un lugar para cada rol de una rutina, un stack o un pack, así que la página de resultados devuelve la solución entera con la opción de añadir al carrito el conjunto y un descuento opcional ligado a las respuestas.",
      "Como cada artículo coincide con las respuestas del comprador, el pedido más grande se siente como una recomendación, no como un upselling. Puedes estimar el impacto en ingresos para tu tienda con la calculadora de ROI del quiz.",
    ],
    faqs: [
      {
        question: "¿Cómo se calcula el valor medio de pedido?",
        answer:
          "Divide los ingresos totales entre el número de pedidos en el mismo periodo. Por ejemplo, 50.000 $ de ingresos de 1.000 pedidos es un valor medio de pedido de 50 $.",
      },
      {
        question: "¿Por qué es importante el AOV?",
        answer:
          "Eleva los ingresos de los pedidos que ya ganas, sin pagar por más tráfico, y un AOV más alto te deja gastar más en adquirir cada cliente manteniéndote rentable. Es una de las palancas de crecimiento más baratas disponibles.",
      },
      {
        question: "¿Cómo puede un quiz de productos aumentar el AOV?",
        answer:
          "Recomendando un conjunto completo en lugar de un solo producto. Los huecos de recomendación devuelven una rutina, un stack o un pack coincidente con la opción de añadir al carrito el conjunto entero, así que cada pedido es más grande sin dejar de sentirse personalizado.",
      },
    ],
    related: [
      { label: "Cross-selling y upselling", href: "/glossary/cross-selling-and-upselling/" },
      { label: "Optimización de la tasa de conversión", href: "/glossary/conversion-rate-optimization/" },
      { label: "Quiz creador de packs", href: "/solutions/bundle-builder/" },
      { label: "Quiz creador de rutinas", href: "/solutions/routine-builder/" },
      { label: "Calculadora de ROI del quiz", href: "/quiz-roi-calculator/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "cross-selling-and-upselling": {
    slug: "cross-selling-and-upselling",
    term: "Cross-selling y upselling",
    chip: "Táctica",
    title: "Cross-selling frente a upselling explicado",
    description:
      "El cross-selling añade productos relacionados; el upselling sube a uno mejor. Aquí está la diferencia, por qué funcionan ambos y cómo un quiz lo hace sin el empujón.",
    h1: "¿Qué son el cross-selling y el upselling?",
    shortAnswer:
      "El cross-selling recomienda productos relacionados que complementan lo que un comprador está comprando, como una crema hidratante con un limpiador. El upselling recomienda una versión mejor o más grande de lo que ya quiere, como un tamaño mayor o un nivel premium. Ambos suben el valor del pedido.",
    intro: [
      "Los dos se meten en el mismo saco porque ambos aumentan lo que gasta un comprador, pero funcionan en direcciones distintas. Saber cuál encaja en un momento es la diferencia entre útil e insistente.",
    ],
    sections: [
      {
        heading: "Cross-selling frente a upselling: la diferencia",
        body: [
          "El cross-selling va de lado. Añade artículos complementarios al pedido: el clásico ¿quieres patatas con eso?, o un protector de pantalla con un teléfono. El objetivo es una compra más completa.",
          "El upselling va hacia arriba. Lleva al comprador a una versión de mayor valor de lo que ya está considerando: un tamaño mayor, un modelo premium, una suscripción más larga. El objetivo es un mejor encaje a un precio más alto, no más artículos.",
        ],
      },
      {
        heading: "Por qué funcionan ambos, cuando son relevantes",
        body: [
          "Ambas tácticas suben el valor medio de pedido, y ambas pueden salir mal. Un cross-sell o un upsell relevante se lee como un consejo útil; uno irrelevante se lee como una tienda intentando inflar la cuenta, y los compradores lo ignoran o se molestan.",
          "La relevancia lo es todo, y la relevancia requiere conocer al comprador. Una recomendación basada en lo que alguien realmente intenta lograr cala. Una sección genérica de también te puede gustar, mostrada a todo el mundo, no.",
        ],
      },
      {
        heading: "Cómo un quiz hace cross-selling y upselling sin el empujón",
        body: [
          "Un quiz conoce el objetivo del comprador antes de recomendar nada, así que el cross-sell y el upsell están integrados en la recomendación en lugar de añadidos en el checkout. Puede devolver un conjunto completo (cross-sell) y orientar hacia el nivel adecuado para la necesidad declarada (upsell) en un solo movimiento.",
          "Como la recomendación responde a las propias preguntas del comprador, el pedido más grande se siente ganado. El comprador ve una solución que encaja, no una lista de complementos.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt integra los cross-sells y los upsells en la propia recomendación. Los huecos de recomendación reservan un lugar para cada rol complementario para que la página de resultados devuelva un conjunto completo, y la lógica basada en las respuestas orienta a los compradores hacia el tamaño, el nivel o el pack que encaja con lo que te dijeron.",
      "La página de resultados admite añadir al carrito el conjunto entero más un descuento ligado a las respuestas, así que el pedido crece porque la recomendación es la adecuada, no porque un popup interrumpiera el checkout.",
    ],
    faqs: [
      {
        question: "¿Cuál es la diferencia entre el cross-selling y el upselling?",
        answer:
          "El cross-selling añade productos complementarios a un pedido, como una crema hidratante con un limpiador. El upselling sube a una versión mejor o más grande de lo que el comprador ya quiere, como un nivel premium o un tamaño mayor. Ambos aumentan el valor del pedido.",
      },
      {
        question: "¿Funcionan de verdad el cross-selling y el upselling?",
        answer:
          "Sí, cuando la recomendación es relevante. Una sugerencia que encaja con el objetivo del comprador se lee como útil y se compra. Un aviso genérico de talla única se ignora o molesta, así que la relevancia es lo que separa los dos resultados.",
      },
      {
        question: "¿Cómo hace un quiz cross-selling y upselling?",
        answer:
          "Primero aprende el objetivo del comprador, y luego integra el cross-sell y el upsell en la recomendación. Los huecos de recomendación devuelven un conjunto completo, y la lógica basada en las respuestas orienta hacia el nivel adecuado, así que el pedido más grande se siente como un consejo en lugar de un empujón.",
      },
    ],
    related: [
      { label: "Valor medio de pedido", href: "/glossary/average-order-value/" },
      { label: "Quiz creador de packs", href: "/solutions/bundle-builder/" },
      { label: "Quiz creador de rutinas", href: "/solutions/routine-builder/" },
      { label: "Quiz comprable", href: "/glossary/shoppable-quiz/" },
      { label: "Recomendaciones de productos personalizadas", href: "/glossary/personalized-product-recommendations/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "customer-segmentation": {
    slug: "customer-segmentation",
    term: "Segmentación de clientes",
    chip: "Marketing",
    title: "¿Qué es la segmentación de clientes?",
    description:
      "La segmentación de clientes agrupa a los compradores por rasgos compartidos para que puedas dirigirte a cada grupo de forma específica. Los tipos, por qué funciona y cómo la alimenta un quiz.",
    h1: "¿Qué es la segmentación de clientes?",
    shortAnswer:
      "La segmentación de clientes es la práctica de agrupar a los clientes por rasgos compartidos, como objetivos, comportamiento o datos demográficos, para que puedas dirigirte a cada grupo con un mensaje relevante en lugar de enviar a todo el mundo lo mismo.",
    intro: [
      "Un solo mensaje a toda tu lista no le habla a nadie en particular. La segmentación te deja decir lo correcto al grupo correcto, por eso las campañas segmentadas superan de forma consistente al envío masivo indiscriminado.",
    ],
    sections: [
      {
        heading: "Las principales formas de segmentar",
        body: [
          "La segmentación demográfica agrupa por atributos como la edad o la ubicación. La segmentación por comportamiento agrupa por lo que hacen los clientes: compras pasadas, navegación, interacción. La segmentación psicográfica agrupa por actitudes y valores. La segmentación basada en la necesidad agrupa por el problema que un cliente intenta resolver.",
          "Para el ecommerce, los segmentos basados en la necesidad y en el comportamiento suelen ser los más accionables, porque se asignan directamente a qué recomendar y qué decir a continuación.",
        ],
      },
      {
        heading: "Por qué funciona la segmentación",
        body: [
          "La relevancia impulsa la respuesta. Un cliente que compra para piel seca y sensible no debería recibir el mismo email que uno que compra un regalo, y cuando no lo reciben, suben las tasas de apertura, los clics y las conversiones.",
          "La segmentación también se compone con el tiempo. Cada campaña que envías a un segmento bien definido te enseña más sobre él, lo que afina la siguiente. La lista se convierte en un activo, no solo en un canal de difusión.",
        ],
      },
      {
        heading: "El problema de datos detrás de la segmentación",
        body: [
          "Solo puedes segmentar por lo que sabes, y la mayoría de las tiendas no saben mucho sobre un visitante anónimo. Los datos de comportamiento se acumulan despacio y fallan con los compradores nuevos, y el third-party data está cada vez más restringido por los navegadores y la regulación.",
          "La solución es preguntar. Cuando un comprador te dice su objetivo, preferencia o restricción, puedes segmentar por ello de inmediato y con precisión, con su consentimiento. Esa información ofrecida voluntariamente es zero-party data.",
        ],
      },
    ],
    withRevenueHunt: [
      "RevenueHunt convierte las respuestas del quiz en segmentos automáticamente. Cada respuesta se convierte en una etiqueta de cliente, como objetivo:sueño o piel:sensible, que se sincroniza con Klaviyo, Mailchimp, Omnisend, HubSpot y más, así que los contactos llegan presegmentados por lo que te dijeron.",
      "Como los segmentos se construyen a partir de datos que el comprador ofreció voluntariamente, son precisos desde la primera visita y no dependen del rastreo. Cada campaña posterior al quiz puede hablarle al segmento en lugar de a toda la lista.",
    ],
    faqs: [
      {
        question: "¿Cuáles son los principales tipos de segmentación de clientes?",
        answer:
          "Las bases comunes son la demográfica (edad, ubicación), la de comportamiento (compras, navegación, interacción), la psicográfica (actitudes, valores) y la basada en la necesidad (el problema que un cliente está resolviendo). Para el ecommerce, los segmentos basados en la necesidad y en el comportamiento son normalmente los más accionables.",
      },
      {
        question: "¿Por qué es importante la segmentación de clientes?",
        answer:
          "Hace que el mensaje sea relevante, lo que sube las tasas de apertura, los clics y las conversiones frente a enviar a todo el mundo lo mismo. También se compone: cada campaña a un segmento definido te enseña más sobre él y afina la siguiente.",
      },
      {
        question: "¿Cómo ayuda un quiz con la segmentación?",
        answer:
          "Les pregunta a los compradores directamente, así que cada respuesta se convierte en una etiqueta de cliente que se sincroniza con tu herramienta de email. Los contactos llegan presegmentados por objetivo, preferencia o restricción, precisos desde la primera visita y sin depender del rastreo.",
      },
    ],
    related: [
      { label: "Recomendaciones de productos personalizadas", href: "/glossary/personalized-product-recommendations/" },
      { label: "Quiz de generación de leads", href: "/glossary/lead-generation-quiz/" },
      { label: "Zero-party data", href: "/zero-party-data/" },
      { label: "Personalización en ecommerce", href: "/glossary/ecommerce-personalization/" },
      { label: "Integraciones", href: "/integrations/" },
    ],
    verifiedAsOf: VERIFIED,
  },
};

/** Guías y páginas a las que apunta el hub del glosario. */
export const GLOSSARY_RELATED_GUIDES_ES: GlossaryLink[] = [
  {
    label: "Quiz buscador de productos",
    href: "/product-finder-quiz/",
    blurb: "Qué es un quiz buscador de productos, cuándo usar uno y 12 ejemplos en vivo.",
  },
  {
    label: "Quiz de venta guiada",
    href: "/guided-selling-quiz/",
    blurb: "Cómo funciona la venta guiada en ecommerce y cómo construir el quiz.",
  },
  {
    label: "Zero-party data",
    href: "/zero-party-data/",
    blurb: "Qué es el zero-party data, por qué supera al rastreo de comportamiento y cómo lo captura un quiz.",
  },
  {
    label: "Soluciones por sector",
    href: "/solutions/",
    blurb: "Soluciones de quiz de recomendación de productos para skincare, suplementos, moda y más.",
  },
  {
    label: "Calculadora de ROI del quiz",
    href: "/quiz-roi-calculator/",
    blurb: "Estima los ingresos extra que un quiz de recomendación de productos podría añadir a tu tienda.",
  },
];
