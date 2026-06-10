import type { Solution } from "../solutions";

const VERIFIED = "2026-06-07";

export const SOLUTIONS_ES: Record<string, Solution> = {
  // ----------------------------------------------------------------- verticals
  skincare: {
    slug: "skincare",
    type: "vertical",
    name: "Cuidado de la piel",
    chip: "Industria",
    title: "Quiz de skincare para Shopify y WooCommerce",
    description:
      "Crea un quiz de cuidado de la piel que detecte el tipo de piel y las preocupaciones, y luego recomiende la rutina adecuada. Plan gratuito, creador con AI, en línea el mismo día.",
    h1: "Quizzes de skincare que convierten a quienes navegan en una rutina",
    heroSubtitle:
      "La mayoría de quienes compran skincare por primera vez no saben qué productos les convienen. Un quiz hace las preguntas correctas y devuelve una rutina personalizada que pueden añadir al carrito.",
    intro: [
      "El cuidado de la piel es la categoría más difícil de comprar en frío. Los compradores llegan con una preocupación, no con un producto en mente, y un muro de limpiadores, sérums y SPF no les ayuda a elegir. Un quiz de skincare reemplaza ese muro con una breve conversación guiada: entra el tipo de piel, la preocupación principal, las sensibilidades y el presupuesto, y sale una rutina personalizada.",
      "RevenueHunt lo usan más de 20.000 marcas para hacer exactamente esto. Asigna cada respuesta a productos reales de tu catálogo, agrupa el resultado por paso de la rutina (limpiador, tratamiento, hidratante, SPF) y captura el perfil de piel del comprador como zero-party data que puedes sincronizar con Klaviyo.",
    ],
    quizTypes: [
      {
        title: "Detector de tipo de piel",
        body: "Cinco a siete preguntas sobre tipo de piel, preocupaciones y objetivos devuelven una rutina a medida. El quiz de skincare clásico, y el punto de partida que más convierte.",
      },
      {
        title: "Constructor de rutina",
        body: "Usa los recommendation slots para reservar un lugar para cada paso, de modo que cada comprador reciba una rutina completa de 3 o 5 pasos en lugar de un solo producto.",
      },
      {
        title: "Quiz centrado en la preocupación",
        body: "Empieza por el problema (acné, envejecimiento, sequedad, sensibilidad) y ramifica con lógica condicional para que cada comprador solo vea las preguntas relevantes para él.",
      },
      {
        title: "Coincidencia por ingrediente o sensibilidad",
        body: "Excluye los productos que choquen con una alergia o sensibilidad declarada, de modo que un comprador que marca sin fragancia nunca vea un producto con fragancia en sus resultados.",
      },
    ],
    howItHelps: [
      "El motor de recomendaciones clasifica los productos según las respuestas que más importan. Da más peso a una preocupación imprescindible que a una deseable, y excluye todo lo que el comprador descarte, para que la página de resultados sea realmente a medida en lugar de un carrusel genérico de más vendidos.",
      "Cada respuesta es zero-party data. Un comprador que te dice que su piel es seca y sensible y que le importa el antienvejecimiento es un segmento al que puedes hacer marketing durante años. RevenueHunt sincroniza ese perfil y las customer tags con Klaviyo, Mailchimp, Omnisend y más.",
      "Créalo en minutos, no en semanas. Empieza desde una plantilla de skincare, o describe tu tienda al AI Quiz Copilot y estructura las preguntas, la lógica y las asignaciones de productos en unos 60 segundos. Luego publícalo como popup, embed o landing a página completa.",
    ],
    demo: {
      label: "Prueba el quiz de tipo de piel",
      href: "https://productrecommendationquiz.com/pages/skin-type-quiz?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_skincare",
      blurb: "Un quiz de skincare en vivo en nuestra tienda demo. Responde unas preguntas y mira la rutina que devuelve.",
    },
    faqs: [
      {
        question: "¿Cuántas preguntas debería tener un quiz de skincare?",
        answer:
          "Cinco a siete preguntas visibles funcionan para la mayoría de las marcas. Usa lógica condicional para saltar las preguntas que no apliquen, de modo que un comprador sin sensibilidades nunca vea el paso de alergias.",
      },
      {
        question: "¿Puede el quiz recomendar una rutina completa, no solo un producto?",
        answer:
          "Sí. Los recommendation slots reservan un lugar para cada paso de la rutina (limpiador, tratamiento, hidratante, SPF), de modo que cada comprador obtiene una rutina completa con añadir al carrito para todo el conjunto.",
      },
      {
        question: "¿Funciona para pieles sensibles y alergias?",
        answer:
          "Sí. Cada respuesta puede excluir productos, así que marcar una alergia o sensibilidad elimina cualquier producto en conflicto de los resultados, aunque por lo demás fuera una coincidencia fuerte.",
      },
      {
        question: "¿Puedo capturar emails y enviar la rutina a Klaviyo?",
        answer:
          "Sí. El quiz captura el email y el perfil de piel completo como zero-party data, y sincroniza las respuestas y las customer tags con Klaviyo, Mailchimp, Omnisend, HubSpot y más.",
      },
    ],
    related: [
      { label: "Plantillas de quiz de skincare", href: "/templates/" },
      { label: "Quiz de constructor de rutina", href: "/solutions/routine-builder/" },
      { label: "Quiz de detector de tono", href: "/solutions/shade-finder/" },
      { label: "Para marcas de belleza", href: "/for-beauty-brands/" },
      { label: "Quiz para Shopify", href: "/product-recommendation-quiz-shopify/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  beauty: {
    slug: "beauty",
    type: "vertical",
    name: "Belleza y cosmética",
    chip: "Industria",
    title: "Quiz de belleza y cosmética para tu tienda",
    description:
      "Un quiz de belleza que iguala el tono, encuentra los productos adecuados y construye una rutina a partir de tu catálogo. Plan gratuito, creador con AI, multiplataforma.",
    h1: "Quizzes de belleza que conectan a los compradores con el producto adecuado",
    heroSubtitle:
      "Tono de base, color de labios, una rutina completa: un quiz de belleza responde las preguntas que una cuadrícula de productos no puede, y lleva a los compradores a una página de resultados personalizada.",
    intro: [
      "Quienes compran belleza enfrentan dos problemas a la vez: demasiada elección y demasiado riesgo. Elige el tono de base equivocado y se devuelve. Un quiz de belleza elimina las conjeturas preguntando por el subtono, la cobertura, el acabado y la preocupación, y luego recomendando los productos exactos que encajan.",
      "RevenueHunt impulsa quizzes de belleza para miles de marcas. Extrae productos y variantes reales de tu catálogo, los muestra en una página de resultados con añadir al carrito directo, y captura el perfil de belleza de cada comprador como zero-party data para un seguimiento por email segmentado.",
    ],
    quizTypes: [
      {
        title: "Igualador de tono",
        body: "Las preguntas sobre subtono, profundidad y acabado se asignan al tono adecuado de base, corrector o labial. Las respuestas con imágenes lo hacen rápido en móvil.",
      },
      {
        title: "Constructor de rutina completa",
        body: "Recomienda un conjunto completo (preparación, base, color, fijación) usando los recommendation slots, para que los compradores adquieran la rutina en lugar de un solo artículo.",
      },
      {
        title: "Quiz de preocupación de piel o cabello",
        body: "Ramifica por preocupación y tipo de piel o cabello para que la página de resultados hable al objetivo específico de cada comprador.",
      },
      {
        title: "Detector de set de regalo o de iniciación",
        body: "Ayuda a quienes compran regalos y a los primerizos que no conocen el catálogo recomendando un set de iniciación o un pack curado.",
      },
    ],
    howItHelps: [
      "El tono y el ajuste son exactamente donde ocurren las devoluciones. Al preguntar por el subtono y la cobertura desde el principio y excluir todo lo que no coincide, el quiz lleva a los compradores a productos que es mucho más probable que conserven.",
      "Las preguntas con imágenes permiten a los compradores tocar una imagen en lugar de describirse, lo que mantiene altas las tasas de finalización en móvil, donde aterriza la mayoría del tráfico de belleza.",
      "El perfil del comprador (subtono, tipo de piel, acabado favorito) se sincroniza con tu herramienta de email como customer tags, de modo que cada campaña tras el quiz puede personalizarse en lugar de ser genérica.",
    ],
    demo: {
      label: "Prueba el quiz de igualación de base",
      href: "https://productrecommendationquiz.com/pages/foundation-match?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_beauty",
      blurb: "Un quiz de igualación de tono basado en imágenes en vivo en nuestra tienda demo, con resultados de coincidencia exacta.",
    },
    faqs: [
      {
        question: "¿Puede un quiz de belleza igualar tonos de base?",
        answer:
          "Sí. Pregunta por el subtono, la profundidad y el acabado, vincula cada respuesta a los tonos que coinciden y excluye el resto. La página de resultados muestra la coincidencia de tono exacta con añadir al carrito.",
      },
      {
        question: "¿Admite preguntas con imágenes?",
        answer:
          "Sí. Las opciones pueden mostrarse como imágenes en las que se puede hacer clic, lo cual es ideal para preguntas de tono, acabado y estilo y mejora la finalización en móvil.",
      },
      {
        question: "¿Funcionará en WooCommerce o BigCommerce, no solo en Shopify?",
        answer:
          "Sí. RevenueHunt funciona de forma nativa en Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace, y como quiz alojado independiente.",
      },
      {
        question: "¿Puedo agrupar productos en un solo resultado?",
        answer:
          "Sí. Usa los recommendation slots para reservar un lugar para cada rol de producto y devolver un conjunto o pack completo, con añadir al carrito para toda la rutina.",
      },
    ],
    related: [
      { label: "Quiz de detector de tono", href: "/solutions/shade-finder/" },
      { label: "Quiz de skincare", href: "/solutions/skincare/" },
      { label: "Quiz de buscador de regalos", href: "/solutions/gift-finder/" },
      { label: "Para marcas de belleza", href: "/for-beauty-brands/" },
      { label: "Plantillas de quiz", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  supplements: {
    slug: "supplements",
    type: "vertical",
    name: "Suplementos",
    chip: "Industria",
    title: "Quiz de suplementos: recomienda el stack adecuado",
    description:
      "Un quiz de suplementos que convierte los objetivos de salud en un stack recomendado. Ramifica por dieta y restricciones, sincroniza objetivos con Klaviyo. Gratis para empezar.",
    h1: "Quizzes de suplementos que recomiendan el stack adecuado",
    heroSubtitle:
      "Los compradores adquieren suplementos por un objetivo, no por un SKU. Un quiz convierte dormir, energía, inmunidad o concentración en un stack recomendado de tu catálogo.",
    intro: [
      "Quienes compran suplementos piensan en objetivos: dormir mejor, más energía, mejor salud intestinal. Tu catálogo está organizado por producto. Un quiz de suplementos cierra esa brecha preguntando por objetivos, dieta y estilo de vida, y luego recomendando el stack que encaja.",
      "RevenueHunt asigna cada objetivo a los SKU adecuados, gestiona las restricciones dietéticas con exclusiones y devuelve un stack de varios productos en una página de resultados con un descuento de primer pedido. Los objetivos del comprador se sincronizan con Klaviyo como tags para un email continuo y segmentado.",
    ],
    quizTypes: [
      {
        title: "Detector de objetivos de salud",
        body: "Los compradores eligen sus objetivos (dormir, energía, inmunidad, intestino, concentración) y cada objetivo suma puntos a los productos que coinciden para construir un stack recomendado.",
      },
      {
        title: "Constructor de stack",
        body: "Reserva un slot para cada rol (base, específico, rendimiento) para que cada comprador se vaya con un stack completo y coherente.",
      },
      {
        title: "Filtro de dieta y restricciones",
        body: "Excluye los productos que entren en conflicto con vegano, sin gluten u otras restricciones, para que los resultados respeten la dieta de cada comprador automáticamente.",
      },
      {
        title: "Onboarding de suscripción",
        body: "Usa el quiz al inicio de un embudo de suscripción, captura el email y conecta la página de resultados a una oferta de suscríbete y ahorra.",
      },
    ],
    howItHelps: [
      "La lógica condicional mantiene el quiz corto. Si un comprador dice que no tiene restricciones dietéticas, el quiz se salta por completo las preguntas de restricción, de modo que nadie responde preguntas que no le aplican.",
      "Las exclusiones gestionan las restricciones rígidas con limpieza. Un comprador vegano nunca ve un producto no vegano en sus resultados, aunque fuera una coincidencia fuerte solo por objetivos.",
      "Los objetivos son lo más valioso que puede aprender una marca de suplementos. Sincronizar tags como goal:sleep o goal:gut con Klaviyo te permite ejecutar email de ciclo de vida que realmente coincide con lo que cada cliente intenta lograr.",
    ],
    faqs: [
      {
        question: "¿Puede un quiz de suplementos recomendar un stack de varios productos?",
        answer:
          "Sí. Cada objetivo suma puntos a los productos que coinciden, y los recommendation slots reservan un lugar para cada rol, de modo que la página de resultados devuelve un stack completo con añadir al carrito para el conjunto.",
      },
      {
        question: "¿Cómo gestiona las dietas veganas o sin gluten?",
        answer:
          "Usa exclusiones. Vincular una respuesta de dieta a una lista de exclusión elimina cualquier producto en conflicto de los resultados, sin importar lo bien que puntuara por objetivos.",
      },
      {
        question: "¿Puedo añadir un descuento de primer pedido en la página de resultados?",
        answer:
          "Sí. La página de resultados admite un bloque de código de descuento que puedes mostrar a los compradores primerizos o vincular a combinaciones de respuestas específicas.",
      },
      {
        question: "¿Funciona para una marca de suscripción?",
        answer:
          "Sí. Ejecuta el quiz al inicio del embudo, captura el email en Klaviyo y dirige la página de resultados a una oferta de suscríbete y ahorra.",
      },
    ],
    related: [
      { label: "Quiz de constructor de packs", href: "/solutions/bundle-builder/" },
      { label: "Quiz de fitness y nutrición", href: "/solutions/fitness/" },
      { label: "Quiz de venta guiada", href: "/guided-selling-quiz/" },
      { label: "Plantillas de quiz", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  fashion: {
    slug: "fashion",
    type: "vertical",
    name: "Moda y ropa",
    chip: "Industria",
    title: "Quiz de estilo de moda y ropa para ecommerce",
    description:
      "Un quiz de estilo que encuentra el ajuste, el corte y el color adecuados de tu catálogo y reduce las devoluciones. Plan gratuito, multiplataforma, multiidioma.",
    h1: "Quizzes de estilo que encuentran el ajuste y el corte adecuados",
    heroSubtitle:
      "El estilo es personal y el ajuste es arriesgado. Un quiz de moda aprende el gusto y la talla de un comprador, y luego recomienda prendas que es probable que conserve.",
    intro: [
      "La moda tiene la tasa de devoluciones más alta del ecommerce, y la mayoría viene de desajustes de talla y estilo. Un quiz de estilo reduce ambos preguntando por el tipo de cuerpo, la preferencia de ajuste, la ocasión y el gusto, y luego recomendando prendas que realmente le sientan al comprador.",
      "RevenueHunt construye el quiz contra tu catálogo en vivo, incluidas las variantes, de modo que la talla y el color fluyen hasta la página de resultados. Para las marcas que venden en varios mercados, un quiz base puede traducirse y asignarse por Shopify Market, con los títulos y precios de los productos localizados automáticamente.",
    ],
    quizTypes: [
      {
        title: "Quiz de perfil de estilo",
        body: "Las preguntas sobre gusto, ocasión y color hacen aflorar las prendas que coinciden con la estética de un comprador en lugar de una cuadrícula genérica de novedades.",
      },
      {
        title: "Detector de ajuste y talla",
        body: "Las preguntas sobre tipo de cuerpo y preferencia de ajuste acotan hasta el corte y la talla adecuados, que es donde empiezan la mayoría de las devoluciones de ropa.",
      },
      {
        title: "Constructor de cápsula o conjunto",
        body: "Usa los recommendation slots para armar un conjunto coordinado o una cápsula en lugar de un solo artículo.",
      },
      {
        title: "Detector de ocasión",
        body: "Ramifica por ocasión (trabajo, boda, viaje) para que cada comprador vea una selección curada para el momento para el que está comprando.",
      },
    ],
    howItHelps: [
      "Recomendar por ajuste y gusto, no solo por popularidad, lleva a los compradores a prendas que es más probable que conserven, que es la palanca más directa que tiene una marca de moda sobre las devoluciones.",
      "Las variantes fluyen de principio a fin. Vincula las respuestas a tallas y colores específicos, y la página de resultados muestra la variante correcta con añadir al carrito, de modo que los compradores no rebotan a una página de producto para volver a elegir.",
      "¿Vendes en toda la UE o más allá? Construye un quiz base, deja que el AI Copilot lo traduzca, asigna cada versión a su Shopify Market y los datos de producto se localizan automáticamente. Sin trabajo de traducción de productos por idioma.",
    ],
    faqs: [
      {
        question: "¿Puede un quiz de moda reducir las devoluciones?",
        answer:
          "Apunta a la principal causa de las devoluciones recomendando por ajuste y gusto en lugar de por popularidad. Vincular las respuestas a tallas y colores específicos lleva a los compradores a prendas que es más probable que conserven.",
      },
      {
        question: "¿Admite variantes de producto como talla y color?",
        answer:
          "Sí. Las respuestas pueden vincularse a variantes específicas, y la página de resultados muestra la talla y el color que coinciden con añadir al carrito directo.",
      },
      {
        question: "¿Puedo ejecutar el quiz en varios idiomas?",
        answer:
          "Sí. Construye un quiz base, tradúcelo con el AI Copilot y asigna cada versión a su Shopify Market. Los títulos y precios de los productos se localizan automáticamente vía Shopify Markets.",
      },
      {
        question: "¿En qué plataformas funciona?",
        answer:
          "Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace, y como quiz alojado independiente.",
      },
    ],
    related: [
      { label: "Quiz de detector de talla y ajuste", href: "/solutions/size-finder/" },
      { label: "Quiz de buscador de regalos", href: "/solutions/gift-finder/" },
      { label: "Plantillas de quiz", href: "/templates/" },
      { label: "Quiz para Shopify", href: "/product-recommendation-quiz-shopify/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  coffee: {
    slug: "coffee",
    type: "vertical",
    name: "Café y té",
    chip: "Industria",
    title: "Quiz de café: conecta tuestes con el gusto",
    description:
      "Un quiz de perfil de gusto que conecta a los compradores con el tueste o blend adecuado y capta suscriptores. Plan gratuito, listo para Klaviyo y ReCharge.",
    h1: "Quizzes de café que conectan el gusto con el tueste adecuado",
    heroSubtitle:
      "Tueste, origen, método de preparación, notas de sabor: un quiz de café convierte un menú confuso en una recomendación segura, y en un nuevo suscriptor.",
    intro: [
      "El café y el té se rigen por el gusto, y el gusto es difícil de comprar desde una lista de productos. Un breve quiz de perfil de gusto pregunta por la preferencia de tueste, el método de preparación y las notas de sabor, y luego recomienda el blend que el comprador realmente disfrutará.",
      "RevenueHunt convierte esto en un embudo, no solo en una recomendación. Captura el email al inicio, recomienda un blend de iniciación y conecta la página de resultados a una oferta de suscríbete y ahorra a través de ReCharge, con las preferencias de tueste y preparación sincronizadas con Klaviyo.",
    ],
    quizTypes: [
      {
        title: "Detector de perfil de gusto",
        body: "Unas pocas preguntas sobre tueste, cuerpo y notas de sabor conectan a cada comprador con el blend que coincide con su paladar.",
      },
      {
        title: "Coincidencia por método de preparación",
        body: "Espresso, pour-over, prensa francesa o de goteo: ramifica por método para que el molido y el blend encajen con cómo preparan el café de verdad.",
      },
      {
        title: "Onboarding de suscripción",
        body: "Ejecuta el quiz al inicio del embudo, recomienda un blend de iniciación y ofrece suscríbete y ahorra en la página de resultados.",
      },
      {
        title: "Detector de regalo o muestrario",
        body: "Ayuda a quienes compran regalos a elegir un muestrario o set de regalo sin conocer el gusto exacto del destinatario.",
      },
    ],
    howItHelps: [
      "Un perfil de gusto es una gran razón para pedir un email. Los compradores comparten encantados sus preferencias de tueste y preparación para obtener una recomendación, lo que llena tu lista de suscriptores presegmentados.",
      "La página de resultados hace la venta. Recomienda el blend que coincide, muestra una oferta de suscríbete y ahorra conectada a ReCharge, y deja que los compradores añadan al carrito sin salir del quiz.",
      "Las preferencias se convierten en segmentos duraderos. Sincronizar tags de tueste y método de preparación con Klaviyo significa que cada campaña futura puede hablarle de forma distinta a quien bebe espresso de tueste oscuro frente a quien prefiere pour-over de tueste claro.",
    ],
    demo: {
      label: "Prueba el quiz de café",
      href: "https://productrecommendationquiz.com/pages/coffee-quiz?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_coffee",
      blurb: "Un quiz de café de coincidencia por gusto en vivo en nuestra tienda demo.",
    },
    faqs: [
      {
        question: "¿Puede un quiz de café recomendar una suscripción?",
        answer:
          "Sí. Captura el email al inicio, recomienda un blend de iniciación y dirige la página de resultados a una oferta de suscríbete y ahorra conectada a ReCharge.",
      },
      {
        question: "¿Hace coincidencia por método de preparación?",
        answer:
          "Sí. Ramifica por método de preparación para que el molido y el blend encajen específicamente con quienes beben espresso, pour-over, prensa francesa o goteo.",
      },
      {
        question: "¿Hará crecer mi lista de email?",
        answer:
          "Sí. El perfil de gusto es una razón sólida para que los compradores compartan su email, y las respuestas se sincronizan con Klaviyo presegmentadas por preferencia de tueste y preparación.",
      },
      {
        question: "¿Funciona para té u otras bebidas?",
        answer:
          "Sí. El mismo enfoque de perfil de gusto funciona para té, vino, licores y cualquier catálogo regido por el gusto.",
      },
    ],
    related: [
      { label: "Quiz de constructor de packs", href: "/solutions/bundle-builder/" },
      { label: "Quiz de buscador de regalos", href: "/solutions/gift-finder/" },
      { label: "Plantillas de quiz", href: "/templates/" },
      { label: "Quiz de venta guiada", href: "/guided-selling-quiz/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  fitness: {
    slug: "fitness",
    type: "vertical",
    name: "Fitness y nutrición",
    chip: "Industria",
    title: "Quiz de fitness para equipo, ropa y programas",
    description:
      "Un quiz de fitness basado en objetivos que recomienda el equipo, la ropa o el programa adecuado de tu catálogo. Plan gratuito, creador con AI, listo para Klaviyo.",
    h1: "Quizzes de fitness construidos en torno al objetivo del comprador",
    heroSubtitle:
      "Fuerza, resistencia, pérdida de peso, recuperación: un quiz de fitness convierte un objetivo en el equipo, la ropa, los suplementos o el programa adecuados.",
    intro: [
      "Quienes compran fitness empiezan con un objetivo y un estilo de entrenamiento, no con un producto. Un quiz basado en objetivos pregunta hacia qué están trabajando, su nivel de experiencia y cómo entrenan, y luego recomienda el equipo, la ropa o el programa que encaja.",
      "RevenueHunt construye el embudo de principio a fin: recomienda los productos adecuados de tu catálogo, captura el objetivo y el nivel del comprador como zero-party data, y hace seguimiento a través de Klaviyo con contenido y ofertas que coinciden con aquello para lo que entrenan.",
    ],
    quizTypes: [
      {
        title: "Detector basado en objetivos",
        body: "Fuerza, resistencia, movilidad o pérdida de peso: cada objetivo suma puntos al equipo, la ropa o los suplementos que coinciden.",
      },
      {
        title: "Coincidencia por nivel de experiencia",
        body: "Ramifica por principiante, intermedio o avanzado para que las recomendaciones encajen donde el comprador realmente está.",
      },
      {
        title: "Detector de programa o plan",
        body: "Recomienda el programa de entrenamiento o el nivel de coaching adecuado según el objetivo, el horario y el acceso a equipo.",
      },
      {
        title: "Constructor de kit o pack",
        body: "Arma un kit completo (ropa más equipo más suplemento) usando los recommendation slots para un valor medio de pedido más alto.",
      },
    ],
    howItHelps: [
      "El objetivo y el nivel de experiencia son las dos preguntas que lo cambian todo. Preguntarlas desde el principio significa que un principiante que trabaja la movilidad nunca verá un producto avanzado de fuerza como su resultado principal.",
      "Un kit completo supera a un solo artículo. Los recommendation slots te permiten devolver ropa, equipo y un suplemento juntos, lo que eleva el valor medio del pedido sin resultar insistente.",
      "El objetivo que capturas impulsa todo lo que viene tras la venta. Sincronizar tags de objetivo y nivel con Klaviyo te permite enviar contenido de entrenamiento y recordatorios de reposición que coinciden con el programa real de cada cliente.",
    ],
    faqs: [
      {
        question: "¿Puede un quiz de fitness recomendar un programa, no solo productos?",
        answer:
          "Sí. Vincula las respuestas a un programa de entrenamiento o un nivel de coaching igual que vinculas productos, y la página de resultados puede recomendar el plan adecuado según el objetivo y el horario.",
      },
      {
        question: "¿Puede armar un kit completo en un solo resultado?",
        answer:
          "Sí. Los recommendation slots reservan un lugar para cada rol (ropa, equipo, suplemento) para que los compradores obtengan un kit completo con añadir al carrito para el conjunto.",
      },
      {
        question: "¿Cómo personaliza para principiantes frente a avanzados?",
        answer:
          "Ramifica con lógica condicional sobre el nivel de experiencia, de modo que principiantes y atletas avanzados vean preguntas distintas y recomendaciones distintas.",
      },
      {
        question: "¿Puedo hacer seguimiento por email según los objetivos?",
        answer:
          "Sí. Los objetivos y el nivel se sincronizan con Klaviyo, Mailchimp, Omnisend y más como customer tags para un seguimiento por email que coincide con el objetivo.",
      },
    ],
    related: [
      { label: "Quiz de suplementos", href: "/solutions/supplements/" },
      { label: "Quiz de constructor de packs", href: "/solutions/bundle-builder/" },
      { label: "Plantillas de quiz", href: "/templates/" },
      { label: "Quiz de venta guiada", href: "/guided-selling-quiz/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "pet-products": {
    slug: "pet-products",
    type: "vertical",
    name: "Productos para mascotas",
    chip: "Industria",
    title: "Quiz de productos para mascotas para tu tienda",
    description:
      "Un quiz de mascotas que recomienda comida, suplementos o accesorios por especie, raza, edad y alergias. Las exclusiones gestionan las dietas. Gratis para empezar.",
    h1: "Quizzes de mascotas que conectan productos con cada animal",
    heroSubtitle:
      "Especie, raza, edad, actividad, alergias: un quiz de mascotas convierte esos detalles en la comida, el suplemento o el accesorio adecuados, y respeta cada restricción dietética.",
    intro: [
      "Quienes tienen mascotas compran para un animal, no para una categoría, y el producto adecuado depende de la especie, el tamaño de la raza, la edad y las alergias. Un quiz de mascotas recopila esos detalles una vez y recomienda productos que encajan en todas las dimensiones al mismo tiempo.",
      "RevenueHunt se encarga de la parte difícil: las exclusiones aplican las reglas de alergia y dieta con limpieza, la página de resultados recomienda la fórmula o el kit adecuado, y un email de resultados resume la recomendación para quienes no compran en el momento.",
    ],
    quizTypes: [
      {
        title: "Detector de comida para mascotas",
        body: "Especie, tamaño de raza, edad y nivel de actividad se asignan a la fórmula adecuada, con las alergias gestionadas por exclusiones.",
      },
      {
        title: "Coincidencia de suplemento o salud",
        body: "Recomienda apoyo para articulaciones, piel o digestión según la edad y las preocupaciones declaradas.",
      },
      {
        title: "Detector de accesorios y equipo",
        body: "Conecta arneses, camas o juguetes con el tamaño de la raza y el comportamiento para que los dueños elijan bien a la primera.",
      },
      {
        title: "Kit de iniciación para nuevos dueños",
        body: "Arma un kit de iniciación completo para nuevos dueños de mascotas usando los recommendation slots.",
      },
    ],
    howItHelps: [
      "Las alergias son una restricción rígida, y las exclusiones las aplican a la perfección. Marcar una alergia al pollo elimina todas las fórmulas a base de pollo de los resultados, incluso las que puntuaron bien por raza y edad.",
      "Una customer tag como dueño-de-perro-pequeño es oro para la retención. Sincronizarla con Klaviyo te permite enviar contenido relevante para la raza, recordatorios de reposición y ofertas que realmente encajan con el animal.",
      "Los emails de resultados atrapan a los compradores que rebotan. Los dueños suelen investigar antes de comprar, así que un email automático que resume la recomendación los trae de vuelta para terminar la compra.",
    ],
    demo: {
      label: "Prueba el detector de comida para perros",
      href: "https://productrecommendationquiz.com/pages/dog-food?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_pet_products",
      blurb: "Un detector de comida para perros multiatributo en vivo en nuestra tienda demo.",
    },
    faqs: [
      {
        question: "¿Cómo gestiona las alergias un quiz de mascotas?",
        answer:
          "Con exclusiones. Vincular una respuesta de alergia a una lista de exclusión elimina todos los productos en conflicto de los resultados, por bien que coincidieran en otras preguntas.",
      },
      {
        question: "¿Puede hacer coincidencia por raza y edad?",
        answer:
          "Sí. Cada respuesta (especie, tamaño de raza, edad, nivel de actividad) suma puntos a los productos que coinciden, de modo que las recomendaciones encajan con el animal específico.",
      },
      {
        question: "¿Puedo enviar la recomendación por email si no compran?",
        answer:
          "Sí. Los emails de resultados resumen automáticamente la recomendación, lo cual es útil para los dueños que investigan antes de comprar.",
      },
      {
        question: "¿Segmenta a los clientes para marketing?",
        answer:
          "Sí. Customer tags como dueño-de-perro-pequeño se sincronizan con Klaviyo y otras herramientas para campañas dirigidas y relevantes para el animal.",
      },
    ],
    related: [
      { label: "Quiz de constructor de packs", href: "/solutions/bundle-builder/" },
      { label: "Quiz buscador de productos", href: "/product-finder-quiz/" },
      { label: "Plantillas de quiz", href: "/templates/" },
      { label: "Quiz para WooCommerce", href: "/product-recommendation-quiz-woocommerce/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  cbd: {
    slug: "cbd",
    type: "vertical",
    name: "CBD y bienestar",
    chip: "Industria",
    title: "Quiz buscador de productos CBD para tu tienda",
    description:
      "Un quiz de CBD que guía a los compradores hacia el formato y la potencia adecuados según el objetivo y la experiencia. Educa mientras vende. Plan gratuito, multiplataforma.",
    h1: "Quizzes de CBD que guían a los compradores hacia el formato adecuado",
    heroSubtitle:
      "El formato, la potencia y el objetivo confunden a la mayoría de quienes compran CBD. Un quiz enseña mientras vende y recomienda el producto adecuado con confianza.",
    intro: [
      "El CBD y el bienestar son categorías donde la mayoría de los compradores genuinamente no sabe qué comprar: aceite o gomita, qué potencia, para qué objetivo. Un quiz convierte esa incertidumbre en una recomendación clara preguntando por el objetivo, el nivel de experiencia y la preferencia de formato.",
      "RevenueHunt está hecho para compradores primerizos en la categoría como estos. El quiz educa mientras pregunta, recomienda el formato y la potencia adecuados de tu catálogo, y captura los objetivos como zero-party data que posees y a la que puedes hacer marketing.",
    ],
    quizTypes: [
      {
        title: "Detector basado en objetivos",
        body: "Sueño, calma, recuperación o concentración: cada objetivo suma puntos a los productos y las potencias que coinciden.",
      },
      {
        title: "Coincidencia de formato y potencia",
        body: "Ramifica por experiencia y preferencia de formato (aceite, gomita, tópico, cápsula) para que los principiantes obtengan un punto de partida accesible.",
      },
      {
        title: "Constructor de rutina o régimen",
        body: "Recomienda una combinación de día y noche usando los recommendation slots para una rutina completa.",
      },
      {
        title: "Quiz educativo primero",
        body: "Usa diapositivas de enunciado entre preguntas para enseñar lo básico, lo que genera confianza y seguridad antes de la recomendación.",
      },
    ],
    howItHelps: [
      "Los compradores primerizos en la categoría necesitan enseñanza, no solo filtrado. Las diapositivas de enunciado te permiten explicar la potencia y el formato en lenguaje sencillo a medida que avanza el comprador, para que la recomendación llegue con confianza.",
      "Hacer coincidir el nivel de experiencia con la potencia protege la experiencia. Un primerizo obtiene un punto de partida accesible en lugar del producto más fuerte, lo que significa menos devoluciones por decepción.",
      "Los objetivos capturados en el quiz se convierten en tus segmentos más útiles. Sincronizar goal:sleep o goal:recovery con Klaviyo impulsa email que coincide con lo que cada cliente realmente intenta resolver.",
    ],
    demo: {
      label: "Prueba el buscador de productos CBD",
      href: "https://productrecommendationquiz.com/pages/cbd-product-finder?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_cbd",
      blurb: "Un buscador de productos CBD en vivo en nuestra tienda demo.",
    },
    faqs: [
      {
        question: "¿Puede un quiz de CBD recomendar la potencia adecuada?",
        answer:
          "Sí. Ramifica por nivel de experiencia y objetivo, luego vincula cada ruta a la potencia apropiada, de modo que los principiantes y los usuarios experimentados obtengan recomendaciones distintas.",
      },
      {
        question: "¿Puede el quiz educar a los compradores a medida que avanzan?",
        answer:
          "Sí. Las diapositivas de enunciado muestran texto entre preguntas sin requerir ninguna entrada, de modo que puedes enseñar lo básico del formato y la potencia de forma integrada.",
      },
      {
        question: "¿Funciona para productos de bienestar más amplios?",
        answer:
          "Sí. El mismo enfoque de objetivo y formato funciona para adaptógenos, hongos y otras categorías de bienestar donde los compradores necesitan orientación.",
      },
      {
        question: "¿Qué plataformas admite?",
        answer:
          "Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace, y como quiz alojado independiente.",
      },
    ],
    related: [
      { label: "Quiz de suplementos", href: "/solutions/supplements/" },
      { label: "Quiz de constructor de rutina", href: "/solutions/routine-builder/" },
      { label: "Quiz buscador de productos", href: "/product-finder-quiz/" },
      { label: "Plantillas de quiz", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  jewelry: {
    slug: "jewelry",
    type: "vertical",
    name: "Joyería y accesorios",
    chip: "Industria",
    title: "Quiz de joyería: ayuda a encontrar la pieza",
    description:
      "Un quiz de joyería que conecta el estilo, el metal y la ocasión con la pieza adecuada, y ayuda a quienes compran regalos a elegir con confianza. Gratis para empezar.",
    h1: "Quizzes de joyería que conectan el estilo con la pieza adecuada",
    heroSubtitle:
      "Metal, estilo, ocasión, presupuesto: un quiz de joyería guía a los compradores y a quienes compran regalos hacia una pieza que amarán, en lugar de una cuadrícula interminable.",
    intro: [
      "La joyería es emocional y a menudo un regalo, lo que la hace difícil de comprar desde una cuadrícula. Un quiz pregunta por el estilo, la preferencia de metal, la ocasión y el presupuesto, y luego recomienda piezas que coinciden, convirtiendo la navegación en una elección segura.",
      "RevenueHunt recomienda piezas y variantes reales de tu catálogo, gestiona a quienes compran regalos sin conocer el gusto del destinatario, y captura las preferencias para el seguimiento. La página de resultados convierte con añadir al carrito directo y un mensaje de regalo opcional.",
    ],
    quizTypes: [
      {
        title: "Detector de estilo",
        body: "Las preguntas sobre estética, metal y ocasión hacen aflorar las piezas que coinciden con el gusto de un comprador.",
      },
      {
        title: "Buscador de regalos",
        body: "Pregunta por el destinatario y la ocasión, luego recomienda una selección curada o un set de regalo para quienes compran sin conocer el catálogo.",
      },
      {
        title: "Coincidencia consciente del presupuesto",
        body: "Incluye el presupuesto en la recomendación para que cada comprador vea piezas dentro de su rango.",
      },
      {
        title: "Detector de compromiso o hito",
        body: "Guía compras de alta consideración como piezas de compromiso o aniversario con un flujo enfocado y tranquilizador.",
      },
    ],
    howItHelps: [
      "Quienes compran regalos son una enorme parte del tráfico de joyería y los menos seguros de lo que quieren. Un quiz que pregunta por el destinatario en lugar del catálogo convierte esa incertidumbre en una compra de regalo segura.",
      "El presupuesto es una pregunta que la mayoría de las cuadrículas ignora. Incluirlo en la recomendación significa que los compradores ven piezas que realmente pueden comprar, lo que reduce el rebote y genera confianza.",
      "Las preferencias y ocasiones se sincronizan con tu herramienta de email, para que puedas hacer seguimiento en torno a aniversarios, reposiciones y piezas a juego con campañas que se sienten personales.",
    ],
    faqs: [
      {
        question: "¿Puede un quiz de joyería ayudar a quienes compran regalos?",
        answer:
          "Sí. Pregunta por el destinatario y la ocasión en lugar del catálogo, luego recomienda una selección curada o un set de regalo, lo cual es ideal para quienes compran sin saber exactamente qué quieren.",
      },
      {
        question: "¿Puede tener en cuenta el presupuesto?",
        answer:
          "Sí. Añade una pregunta de presupuesto y pondera o filtra las recomendaciones para que los compradores solo vean piezas dentro de su rango.",
      },
      {
        question: "¿Admite variantes como metal y talla?",
        answer:
          "Sí. Las respuestas pueden vincularse a variantes específicas, de modo que la página de resultados muestra el metal y la talla adecuados con añadir al carrito.",
      },
      {
        question: "¿Puedo capturar leads para el seguimiento?",
        answer:
          "Sí. El quiz captura el email y las preferencias como zero-party data y se sincroniza con Klaviyo y otras herramientas para un seguimiento basado en la ocasión.",
      },
    ],
    related: [
      { label: "Quiz de buscador de regalos", href: "/solutions/gift-finder/" },
      { label: "Quiz de moda y ropa", href: "/solutions/fashion/" },
      { label: "Plantillas de quiz", href: "/templates/" },
      { label: "Quiz buscador de productos", href: "/product-finder-quiz/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "home-goods": {
    slug: "home-goods",
    type: "vertical",
    name: "Hogar y decoración",
    chip: "Industria",
    title: "Quiz de productos de hogar y decoración para tu tienda",
    description:
      "Un quiz de hogar y decoración que conecta muebles y decoración con el espacio y el estilo de un comprador. Reduce las devoluciones en artículos voluminosos. Gratis para empezar.",
    h1: "Quizzes de hogar que conectan productos con el espacio",
    heroSubtitle:
      "Estilo, habitación, tamaño y presupuesto: un quiz de hogar y decoración guía a los compradores hacia piezas que encajan en su espacio, lo que más importa cuando los artículos son voluminosos.",
    intro: [
      "El hogar y la decoración son de alta consideración y caros de devolver. Los compradores necesitan saber que una pieza encaja en su espacio y estilo antes de comprometerse. Un quiz pregunta por la habitación, el estilo, las dimensiones y el presupuesto, y luego recomienda piezas que funcionan.",
      "RevenueHunt recomienda productos reales de tu catálogo, arma conjuntos coordinados con los recommendation slots, y captura las preferencias de estilo para el seguimiento, de modo que quien compra un mueble una vez se convierte en un cliente recurrente de decoración.",
    ],
    quizTypes: [
      {
        title: "Detector de estilo",
        body: "Las preguntas sobre estética y habitación hacen aflorar muebles y decoración que coinciden con el gusto de un comprador.",
      },
      {
        title: "Coincidencia por habitación o espacio",
        body: "Incluye el tipo de habitación y las dimensiones en las recomendaciones para que las piezas realmente encajen en el espacio.",
      },
      {
        title: "Constructor de conjunto coordinado",
        body: "Arma un conjunto a juego (sofá más alfombra más iluminación) con los recommendation slots para un look completo.",
      },
      {
        title: "Detector consciente del presupuesto",
        body: "Incluye el presupuesto para que los compradores vean piezas dentro de su rango y reboten menos.",
      },
    ],
    howItHelps: [
      "El ajuste y la escala impulsan las devoluciones en artículos voluminosos. Preguntar por las dimensiones de la habitación y recomendar piezas que funcionan reduce los costosos errores que llevan a devoluciones de muebles.",
      "Un conjunto coordinado eleva el valor del pedido de forma natural. Los recommendation slots te permiten sugerir un look completo en lugar de una sola pieza, lo que encaja a la perfección con la compra de decoración.",
      "Las preferencias de estilo son duraderas. Capturar la estética de un comprador y sincronizarla con tu herramienta de email significa que las campañas de temporada y de nueva colección pueden ajustarse al gusto en lugar de enviarse a todos por igual.",
    ],
    faqs: [
      {
        question: "¿Puede un quiz de hogar recomendar un conjunto coordinado?",
        answer:
          "Sí. Los recommendation slots reservan un lugar para cada rol (asiento, alfombra, iluminación), de modo que la página de resultados devuelve un conjunto completo y a juego con añadir al carrito.",
      },
      {
        question: "¿Puede tener en cuenta el tamaño de la habitación?",
        answer:
          "Sí. Añade preguntas de habitación y dimensión y vincula las respuestas a piezas que encajen, lo cual es clave para reducir las devoluciones en artículos grandes.",
      },
      {
        question: "¿Ayuda con el presupuesto?",
        answer:
          "Sí. Incluye una pregunta de presupuesto para que las recomendaciones se mantengan dentro del rango del comprador.",
      },
      {
        question: "¿En qué plataformas funciona?",
        answer:
          "Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace, y como quiz alojado independiente.",
      },
    ],
    related: [
      { label: "Quiz de constructor de packs", href: "/solutions/bundle-builder/" },
      { label: "Quiz de buscador de regalos", href: "/solutions/gift-finder/" },
      { label: "Plantillas de quiz", href: "/templates/" },
      { label: "Quiz de venta guiada", href: "/guided-selling-quiz/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  // ----------------------------------------------------------------- use-cases
  "gift-finder": {
    slug: "gift-finder",
    type: "use-case",
    name: "Buscador de regalos",
    chip: "Tipo de quiz",
    title: "Quiz buscador de regalos para tu tienda online",
    description:
      "Un quiz buscador de regalos que pregunta por el destinatario y devuelve un regalo curado, elevando el AOV para quienes compran sin conocer el catálogo. Gratis para empezar.",
    h1: "Quizzes buscadores de regalos que convierten las conjeturas en una venta",
    heroSubtitle:
      "Quienes compran regalos no tienen opinión sobre tu catálogo y mucha ansiedad por elegir mal. Un buscador de regalos pregunta por el destinatario y recomienda el regalo perfecto.",
    intro: [
      "Quienes compran regalos son los compradores más fáciles de perder y los más fáciles de ayudar. No conocen tus productos y les preocupa elegir mal. Un quiz buscador de regalos hace de tres a cinco preguntas sobre el destinatario (relación, edad, intereses, presupuesto) y devuelve un regalo curado que pueden comprar con confianza.",
      "RevenueHunt convierte el buscador de regalos en uno de los tipos de quiz que más convierten. Agrupa varios productos en un solo resultado de regalo para un mayor valor de pedido, añade un mensaje de regalo y un descuento en la página de resultados, y captura el email del comprador para la próxima ocasión.",
    ],
    quizTypes: [
      {
        title: "Detector centrado en el destinatario",
        body: "Pregunta por el destinatario (relación, edad, intereses) en lugar del catálogo, para que quienes no saben nada de tus productos aun así obtengan una gran coincidencia.",
      },
      {
        title: "Detector de ocasión",
        body: "Ramifica por ocasión (cumpleaños, fiestas, aniversario) para que la recomendación encaje con el momento.",
      },
      {
        title: "Constructor de pack de regalo",
        body: "Combina varios productos en un solo set de regalo curado usando los recommendation slots, lo que eleva el valor medio del pedido.",
      },
    ],
    howItHelps: [
      "El truco está en preguntar por el destinatario, no por el catálogo. Un comprador que puede responder tres preguntas sobre su hermana obtiene una recomendación segura sin necesitar entender nunca tu gama de productos.",
      "Los packs de regalo elevan el valor del pedido sin presión. Devolver un set curado como un solo resultado se siente útil, no insistente, y los compradores adquieren encantados el conjunto entero.",
      "Cada comprador de regalos es un cliente futuro. Capturar su email y la ocasión te permite traerlos de vuelta en el próximo cumpleaños o fiesta con ventaja en la recomendación.",
    ],
    faqs: [
      {
        question: "¿Cómo funciona un quiz buscador de regalos?",
        answer:
          "Hace de tres a cinco preguntas sobre el destinatario y la ocasión, luego recomienda un regalo o set de regalo curado, de modo que quienes no conocen tu catálogo aun así pueden elegir con confianza.",
      },
      {
        question: "¿Puede agrupar productos en un solo regalo?",
        answer:
          "Sí. Los recommendation slots combinan varios productos en un solo set de regalo curado, lo que eleva el valor medio del pedido.",
      },
      {
        question: "¿Puedo añadir un descuento o un mensaje de regalo?",
        answer:
          "Sí. La página de resultados admite bloques de código de descuento y de contenido que puedes mostrar según las respuestas del comprador.",
      },
      {
        question: "¿Captura leads para futuras ocasiones?",
        answer:
          "Sí. El quiz captura el email y la ocasión, que se sincronizan con Klaviyo y otras herramientas para que puedas reactivarlos antes del próximo momento de regalo.",
      },
    ],
    related: [
      { label: "Quiz de joyería", href: "/solutions/jewelry/" },
      { label: "Quiz de belleza y cosmética", href: "/solutions/beauty/" },
      { label: "Quiz buscador de productos", href: "/product-finder-quiz/" },
      { label: "Plantillas de quiz", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "size-finder": {
    slug: "size-finder",
    type: "use-case",
    name: "Detector de talla y ajuste",
    chip: "Tipo de quiz",
    title: "Quiz detector de talla y ajuste para ecommerce",
    description:
      "Un quiz detector de talla y ajuste que recomienda la talla adecuada o el producto compatible y reduce las devoluciones. Resuelve el ajuste multiatributo. Gratis para empezar.",
    h1: "Quizzes detectores de talla y ajuste que reducen las devoluciones",
    heroSubtitle:
      "La talla equivocada es la devolución número uno. Un detector de ajuste hace las preguntas correctas y recomienda la talla o el producto compatible que encaja.",
    intro: [
      "El ajuste y la compatibilidad son donde el ecommerce pierde dinero: devoluciones por talla equivocada en ropa y calzado, y devoluciones por ajuste equivocado en cualquier cosa que tenga que combinar con algo que el comprador ya posee. Un quiz detector de ajuste resuelve esas restricciones antes del pedido, no después.",
      "RevenueHunt gestiona el ajuste multiatributo con limpieza. Vincula las respuestas a variantes específicas y usa exclusiones para las restricciones rígidas, de modo que las medidas y los requisitos de un comprador se resuelvan en una talla correcta o un producto compatible en la página de resultados.",
    ],
    quizTypes: [
      {
        title: "Detector de talla",
        body: "Las preguntas sobre medidas y preferencia de ajuste acotan hasta la talla adecuada, que es la causa más común de devoluciones.",
      },
      {
        title: "Detector de compatibilidad",
        body: "Resuelve restricciones multiatributo (modelo de dispositivo, tipo de montura, accesorio) hasta el único producto que encaja.",
      },
      {
        title: "Coincidencia por preferencia de ajuste",
        body: "Ramifica por preferencia de ajuste (slim, regular, holgado) para que la recomendación encaje con cómo le gusta llevarlo al comprador.",
      },
    ],
    howItHelps: [
      "Las devoluciones por talla equivocada son el mayor coste que aborda un detector de ajuste. Preguntar por las medidas y la preferencia de ajuste desde el principio y vincularlas a variantes específicas lleva a los compradores a la talla que conservarán.",
      "La compatibilidad no es más que restricciones, y las exclusiones las gestionan a la perfección. Un comprador que declara su dispositivo y sus requisitos obtiene exactamente el producto compatible, con todo lo incompatible eliminado.",
      "La confianza convierte. Cuando el quiz le dice a un comprador esta es tu talla con una razón clara, añade al carrito en lugar de rebotar a una tabla de tallas y no volver nunca.",
    ],
    demo: {
      label: "Prueba el detector de compatibilidad",
      href: "https://productrecommendationquiz.com/pages/bicycle-quiz?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_size_finder",
      blurb: "Un detector estilo compatibilidad en vivo en nuestra tienda demo que resuelve una coincidencia técnica.",
    },
    faqs: [
      {
        question: "¿Puede un detector de ajuste reducir las devoluciones por talla equivocada?",
        answer:
          "Sí. Preguntar por las medidas y la preferencia de ajuste y vincular las respuestas a variantes específicas recomienda la talla que un comprador es más probable que conserve, lo que reduce directamente las devoluciones.",
      },
      {
        question: "¿Cómo gestiona la compatibilidad?",
        answer:
          "Con exclusiones y vinculación de variantes. Un comprador declara sus restricciones (dispositivo, montura, accesorio) y el quiz devuelve solo el producto compatible, eliminando todo lo que no encaja.",
      },
      {
        question: "¿Funciona para calzado y ropa?",
        answer:
          "Sí. Los detectores de talla y ajuste están entre los casos de uso más fuertes para ropa, calzado y cualquier cosa donde el ajuste impulse las devoluciones.",
      },
      {
        question: "¿Pueden los resultados explicar la recomendación?",
        answer:
          "Sí. Los bloques de contenido de la página de resultados pueden mostrar texto específico según las respuestas, de modo que puedes explicar por qué una talla o un producto determinado es el ajuste adecuado.",
      },
    ],
    related: [
      { label: "Quiz de moda y ropa", href: "/solutions/fashion/" },
      { label: "Quiz buscador de productos", href: "/product-finder-quiz/" },
      { label: "Plantillas de quiz", href: "/templates/" },
      { label: "Quiz para Shopify", href: "/product-recommendation-quiz-shopify/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "shade-finder": {
    slug: "shade-finder",
    type: "use-case",
    name: "Igualación de tono",
    chip: "Tipo de quiz",
    title: "Quiz de detector de tono: iguala base y color",
    description:
      "Un quiz detector de tono que iguala base, corrector o color por subtono y profundidad, con respuestas de imagen. Reduce las devoluciones. Gratis para empezar.",
    h1: "Quizzes detectores de tono que igualan el color con confianza",
    heroSubtitle:
      "Comprar maquillaje online significa adivinar tu tono. Un detector de tono pregunta por el subtono y la profundidad y devuelve la coincidencia exacta, lo que reduce las devoluciones.",
    intro: [
      "La igualación de tono es la pregunta de mayor riesgo en el ecommerce de belleza. Acertarla mal y el producto vuelve. Un quiz detector de tono pregunta por el subtono, la profundidad, la cobertura y el acabado, y luego recomienda el tono exacto de tu catálogo con respuestas de imagen que son rápidas en móvil.",
      "RevenueHunt vincula cada respuesta a variantes de tono específicas y excluye el resto, de modo que la página de resultados muestra una coincidencia segura en lugar de un muro de muestras. El perfil de tono del comprador se sincroniza con tu herramienta de email para reposiciones y productos a juego.",
    ],
    quizTypes: [
      {
        title: "Igualación de tono de base",
        body: "Las preguntas sobre subtono y profundidad se asignan al tono exacto de base o corrector, con respuestas de imagen para mayor rapidez.",
      },
      {
        title: "Igualación de labio o color",
        body: "Conecta el color de labio, rubor u ojos con la coloración y la preferencia de un comprador.",
      },
      {
        title: "Igualación de color de cabello",
        body: "Guía la coloración de cabello en casa según el tono actual, el tono objetivo y el subtono hacia la fórmula adecuada.",
      },
    ],
    howItHelps: [
      "Las respuestas de imagen sostienen las preguntas de tono. Dejar que los compradores toquen una imagen de un subtono o acabado supera a pedirles que lo describan, y mantiene alta la finalización en las pantallas móviles donde se vende la belleza.",
      "Las exclusiones convierten un muro de muestras en una sola respuesta. Vincular el subtono y la profundidad a variantes específicas y excluir el resto significa que la página de resultados muestra la coincidencia, no toda la gama.",
      "El tono es un perfil que vale la pena conservar. Sincronizar el tono que coincide de un comprador con Klaviyo te permite hacer marketing de reposiciones y productos coordinados a exactamente las personas adecuadas.",
    ],
    demo: {
      label: "Prueba el quiz de igualación de tono",
      href: "https://productrecommendationquiz.com/pages/foundation-match?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=solutions_shade_finder",
      blurb: "Un quiz de igualación de tono de base basado en imágenes en vivo en nuestra tienda demo.",
    },
    faqs: [
      {
        question: "¿Cómo iguala la base un detector de tono?",
        answer:
          "Pregunta por el subtono, la profundidad, la cobertura y el acabado, vincula cada respuesta a las variantes de tono que coinciden y excluye el resto. La página de resultados muestra la coincidencia exacta con añadir al carrito.",
      },
      {
        question: "¿Usa respuestas de imagen?",
        answer:
          "Sí. Las opciones pueden ser imágenes en las que se puede hacer clic, lo cual es ideal para preguntas de subtono y acabado y mejora la finalización en móvil.",
      },
      {
        question: "¿Puede reducir las devoluciones relacionadas con el tono?",
        answer:
          "Sí. Recomendar una coincidencia segura en lugar de un muro de muestras lleva a los compradores al tono que es más probable que conserven.",
      },
      {
        question: "¿Funciona más allá de la base?",
        answer:
          "Sí. El mismo enfoque iguala color de labio, rubor, color de ojos y coloración de cabello en casa.",
      },
    ],
    related: [
      { label: "Quiz de belleza y cosmética", href: "/solutions/beauty/" },
      { label: "Quiz de skincare", href: "/solutions/skincare/" },
      { label: "Para marcas de belleza", href: "/for-beauty-brands/" },
      { label: "Plantillas de quiz", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "routine-builder": {
    slug: "routine-builder",
    type: "use-case",
    name: "Constructor de rutina",
    chip: "Tipo de quiz",
    title: "Quiz de constructor de rutina para skincare y más",
    description:
      "Un quiz de constructor de rutina que devuelve una rutina completa de varios pasos, no un solo producto, usando los recommendation slots. Eleva el AOV. Gratis para empezar.",
    h1: "Quizzes de constructor de rutina que venden el conjunto completo",
    heroSubtitle:
      "Un producto es una venta. Una rutina es un carrito y un hábito. Un constructor de rutina devuelve un conjunto completo de varios pasos a medida de cada comprador.",
    intro: [
      "Algunos productos se compran como un sistema, no como un solo artículo: una rutina de skincare, un stack de suplementos, un régimen para el cabello. Un quiz de constructor de rutina devuelve el conjunto entero, con un lugar reservado para cada paso, de modo que los compradores adquieren la rutina completa en lugar de un producto.",
      "RevenueHunt lo hace con los recommendation slots. Reserva un slot para cada rol (limpiador, tratamiento, hidratante, SPF, o lo que tu categoría necesite) y el quiz llena cada uno con la mejor coincidencia, y luego muestra la rutina completa agrupada por paso con añadir al carrito para el conjunto.",
    ],
    quizTypes: [
      {
        title: "Rutina basada en pasos",
        body: "Reserva un slot para cada paso y llénalo con el producto que mejor coincide, para que cada comprador obtenga una rutina completa y coherente.",
      },
      {
        title: "Constructor de stack",
        body: "Arma un stack de varios productos (genial para suplementos y bienestar) con un rol para cada producto.",
      },
      {
        title: "Rutina de día y noche",
        body: "Devuelve rutinas AM y PM separadas a partir de un quiz usando lógica de visualización en la página de resultados.",
      },
    ],
    howItHelps: [
      "Los recommendation slots son la diferencia entre una venta y un carrito. Reservar un lugar para cada paso significa que la página de resultados devuelve una rutina completa, lo que eleva el valor del pedido sin sentirse como un upsell.",
      "Agrupar por paso hace que la rutina tenga sentido. Los compradores ven exactamente qué usar y cuándo, lo que genera confianza en la compra y el hábito que los trae de vuelta.",
      "Una rutina es un motor de retención. El conjunto que recomiendas te dice de qué se quedará sin cada cliente y cuándo, de modo que tu seguimiento por email puede sincronizar las ofertas de reposición con precisión.",
    ],
    faqs: [
      {
        question: "¿Cómo devuelve un conjunto completo un constructor de rutina?",
        answer:
          "Con recommendation slots. Cada slot se reserva para un rol (por ejemplo limpiador, tratamiento, hidratante, SPF) y se llena con el producto que mejor coincide, de modo que la página de resultados devuelve una rutina completa.",
      },
      {
        question: "¿Puede mostrar una rutina de día y noche separada?",
        answer:
          "Sí. Usa lógica de visualización en la página de resultados para mostrar rutinas AM y PM, o cualquier agrupación condicional, según las respuestas del comprador.",
      },
      {
        question: "¿Eleva el valor medio del pedido?",
        answer:
          "Recomendar un conjunto completo en lugar de un solo producto les da a los compradores una razón para comprar la rutina entera, lo que eleva el valor del pedido.",
      },
      {
        question: "¿Qué categorías encajan con un constructor de rutina?",
        answer:
          "Skincare, cuidado del cabello, suplementos, y cualquier catálogo que se compre como un sistema de varios pasos en lugar de un solo artículo.",
      },
    ],
    related: [
      { label: "Quiz de skincare", href: "/solutions/skincare/" },
      { label: "Quiz de suplementos", href: "/solutions/supplements/" },
      { label: "Quiz de constructor de packs", href: "/solutions/bundle-builder/" },
      { label: "Plantillas de quiz", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },

  "bundle-builder": {
    slug: "bundle-builder",
    type: "use-case",
    name: "Constructor de packs",
    chip: "Tipo de quiz",
    title: "Quiz de constructor de packs: vende sets curados",
    description:
      "Un quiz de constructor de packs que arma un set curado a partir de las respuestas de un comprador y eleva el valor medio del pedido. Añadir al carrito para todo el pack. Gratis.",
    h1: "Quizzes de constructor de packs que elevan el valor del pedido",
    heroSubtitle:
      "Un pack curado convierte mejor que un solo producto y un upsell genérico. Un constructor de packs arma el set a partir de las respuestas de cada comprador.",
    intro: [
      "Los packs funcionan, pero solo cuando son relevantes. Un upsell genérico de tres por dos ignora lo que el comprador realmente quiere. Un quiz de constructor de packs arma un set curado a partir de las respuestas de cada comprador, de modo que el pack se siente personal y el valor del pedido llega de forma natural.",
      "RevenueHunt construye packs con recommendation slots y resultados condicionales. Reserva un rol para cada producto del set, haz coincidir cada uno con el comprador, y presenta el pack completo en la página de resultados con añadir al carrito para todo a la vez.",
    ],
    quizTypes: [
      {
        title: "Constructor de set curado",
        body: "Reserva un rol para cada producto del pack y llena cada uno con la mejor coincidencia, para que el set encaje con el comprador en lugar del catálogo.",
      },
      {
        title: "Detector de kit de iniciación",
        body: "Arma un kit de iniciación completo para compradores primerizos o nuevos en la categoría que quieren una compra segura.",
      },
      {
        title: "Pack a tu medida",
        body: "Deja que las respuestas impulsen un pack flexible, con lógica de visualización que añade o quita artículos según lo que elige el comprador.",
      },
    ],
    howItHelps: [
      "Un pack relevante supera a uno genérico. Hacer coincidir cada artículo del set con las respuestas del comprador significa que el pack se lee como una recomendación, no como una táctica de descuento, y convierte en consecuencia.",
      "Un solo añadir al carrito para todo el set elimina la fricción. Los compradores adquieren el pack en una sola acción en lugar de buscar cada artículo, lo que protege el mayor valor de pedido que acabas de construir.",
      "Los bloques de descuento hacen que el pack llegue. Muestra un descuento de set en la página de resultados vinculado a la combinación específica, para que el ahorro se sienta merecido y el comprador complete la compra.",
    ],
    faqs: [
      {
        question: "¿Cómo funciona un quiz de constructor de packs?",
        answer:
          "Reserva un rol para cada producto del pack, hace coincidir cada uno con las respuestas del comprador, y presenta el set curado completo en la página de resultados con añadir al carrito para todo a la vez.",
      },
      {
        question: "¿Puedo añadir un descuento de pack?",
        answer:
          "Sí. La página de resultados admite bloques de código de descuento que puedes vincular a combinaciones de respuestas específicas, de modo que el ahorro del pack se muestra en contexto.",
      },
      {
        question: "¿Eleva el valor medio del pedido?",
        answer:
          "Recomendar un set relevante y curado en lugar de un solo producto les da a los compradores una razón para comprar más, lo que eleva el valor del pedido.",
      },
      {
        question: "¿Qué categorías encajan?",
        answer:
          "Suplementos, belleza, comida y bebida, hogar, y cualquier catálogo donde un set curado venda mejor que un solo artículo.",
      },
    ],
    related: [
      { label: "Quiz de constructor de rutina", href: "/solutions/routine-builder/" },
      { label: "Quiz de buscador de regalos", href: "/solutions/gift-finder/" },
      { label: "Quiz de suplementos", href: "/solutions/supplements/" },
      { label: "Plantillas de quiz", href: "/templates/" },
    ],
    verifiedAsOf: VERIFIED,
  },
};
