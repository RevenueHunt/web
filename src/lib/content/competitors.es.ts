import type { Competitor } from "../competitors";

// Valores compartidos de la columna de RevenueHunt (verificados con compendio + docs).
// Se mantienen como constantes con nombre para que cada tabla de competidor cuente
// la misma historia de RH.
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

export const COMPETITORS_ES: Record<string, Competitor> = {
  "octane-ai": {
    slug: "octane-ai",
    name: "Octane AI",
    category: "App de quiz para Shopify",
    title: "RevenueHunt vs Octane AI: la alternativa a Octane AI",
    description:
      "RevenueHunt vs Octane AI: plan gratuito, sin marca de agua de Shopify y quizzes ilimitados desde $39/mo. La alternativa a Octane AI para quizzes de producto.",
    h1: "RevenueHunt vs Octane AI",
    heroSubtitle:
      "Ambos crean quizzes de recomendación de productos para Shopify. RevenueHunt añade un plan gratuito, quizzes ilimitados y sin marca de agua, a una fracción del precio.",
    intro: [
      "Octane AI es una app de quiz de producto y personalización pensada para Shopify. Sus precios se basan en créditos, empiezan en $50/mes y no hay plan gratuito. Es una herramienta capaz, sobre todo para marcas de belleza grandes. Pero el plan de entrada te limita a dos quizzes y mantiene el logo de Octane AI en tu quiz hasta que llegas al plan Plus de $200/mes.",
      "RevenueHunt es el quiz de recomendación de productos usado por más de 20.000 marcas (4,9★, más de 550 reseñas). Empieza gratis, nunca añade una marca de agua a tu quiz de Shopify en ningún plan, te deja crear quizzes ilimitados desde el primer día y funciona más allá de Shopify en WooCommerce, BigCommerce, Magento, Wix y más.",
    ],
    rows: [
      { feature: "Plan gratuito", rh: RH.freePlan, them: "no" },
      { feature: "Precio inicial de pago", rh: RH.startingPaid, them: "$50/mo" },
      { feature: "Modelo de precios", rh: "Tarifa fija, por respuestas", them: "Basado en créditos + excedente" },
      { feature: "Quizzes ilimitados en el plan de entrada", rh: RH.unlimitedQuizzes, them: "no" },
      { feature: "Sin marca de agua del proveedor en Shopify (cualquier plan)", rh: RH.noForcedBranding, them: "Logo hasta el plan Plus de $200/mo" },
      { feature: "Recomienda productos reales de tu catálogo", rh: RH.catalogRecs, them: "yes" },
      { feature: "App nativa de Shopify (Built for Shopify)", rh: RH.shopifyNative, them: "no" },
      { feature: "Funciona en WooCommerce, BigCommerce, Magento, Wix y más", rh: RH.multiPlatform, them: "no" },
      { feature: "Constructor de quizzes con IA (configuración en 60 segundos)", rh: RH.aiBuilder, them: "yes" },
      { feature: "Lógica condicional / de ramificación ilimitada", rh: RH.branching, them: "yes" },
      { feature: "Analíticas de abandono pregunta a pregunta", rh: RH.analytics, them: "yes" },
      { feature: "Integraciones con Klaviyo y email / CRM", rh: RH.emailIntegrations, them: "yes" },
    ],
    whySwitch: [
      {
        title: "Empieza gratis y luego paga una tarifa fija",
        body: "Octane AI no tiene plan gratuito y empieza en $50/mes con créditos, con excedentes de $0,10 por crédito una vez que se te acaban. RevenueHunt tiene un plan realmente gratuito y precios planos por respuestas desde $39/mes. Sin cálculos de créditos, sin excedentes sorpresa.",
      },
      {
        title: "Mantén tu marca desde el primer día",
        body: "Octane AI muestra su logo en tu quiz hasta que actualizas al plan Plus de $200/mes. RevenueHunt nunca añade una marca de agua a los quizzes de Shopify, en ningún plan, incluido el gratuito.",
      },
      {
        title: "Crea tantos quizzes como necesites",
        body: "El plan de entrada de Octane AI te limita a dos quizzes. RevenueHunt te deja crear quizzes ilimitados en cada plan, así que puedes tener un quiz por colección, campaña o landing page.",
      },
      {
        title: "Vende en cualquier lugar, no solo en Shopify",
        body: "Octane AI es exclusivo de Shopify. RevenueHunt funciona de forma nativa en Shopify y también en WooCommerce, BigCommerce, Magento, Wix, Squarespace y como quiz alojado independiente.",
      },
    ],
    bestFor:
      "Octane AI es una opción razonable para marcas de belleza empresariales que ya están en Shopify Plus, que quieren personalización profunda con IA y tienen el presupuesto para $200/mes en adelante. Si quieres un plan gratuito, precios planos, quizzes sin marca o soporte multiplataforma, RevenueHunt encaja mejor.",
    migration:
      "Cambiarte desde Octane AI es rápido. Reconstruye tu quiz en el constructor de arrastrar y soltar de RevenueHunt (o genéralo en 60 segundos con nuestro AI Copilot), incrústalo y conecta Klaviyo. La mayoría de las tiendas están activas el mismo día, y nuestro equipo de soporte te ayuda a migrar.",
    faqs: [
      {
        question: "¿Es RevenueHunt más barato que Octane AI?",
        answer:
          "Sí. RevenueHunt tiene un plan gratuito y planes de pago desde $39/mes con precios planos basados en respuestas. Octane AI no tiene plan gratuito, empieza en $50/mes con un sistema de créditos y cobra $0,10 por crédito en los excedentes.",
      },
      {
        question: "¿RevenueHunt añade su logo a mi quiz como hace Octane AI?",
        answer:
          "No. RevenueHunt nunca añade una marca de agua a los quizzes de Shopify en ningún plan. Octane AI mantiene su logo en tu quiz hasta que actualizas al plan Plus de $200/mes.",
      },
      {
        question: "¿RevenueHunt funciona en plataformas distintas de Shopify?",
        answer:
          "Sí. RevenueHunt funciona en Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace y como quiz alojado independiente. Octane AI es exclusivo de Shopify.",
      },
      {
        question: "¿Puedo migrar mi quiz de Octane AI a RevenueHunt?",
        answer:
          "Sí. Recrea tu quiz en el constructor de RevenueHunt o genéralo con el AI Quiz Copilot, y luego conecta tu herramienta de email. La mayoría de los comerciantes están activos el mismo día, y nuestro equipo ayuda con la migración.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  typeform: {
    slug: "typeform",
    name: "Typeform",
    category: "Constructor general de formularios y encuestas",
    title: "RevenueHunt vs Typeform para quizzes de ecommerce",
    description:
      "RevenueHunt vs Typeform: un quiz Built-for-Shopify que recomienda productos reales y genera ventas, no solo un formulario. Plan gratuito, desde $39/mo.",
    h1: "RevenueHunt vs Typeform",
    heroSubtitle:
      "Typeform crea formularios y encuestas preciosos. RevenueHunt crea quizzes de recomendación de productos que se conectan a tu catálogo de Shopify y convierten respuestas en ventas.",
    intro: [
      "Typeform es un constructor de formularios y encuestas online de uso general. Es estupendo para encuestas, formularios de captación de leads e investigación, con un diseño conversacional, de una pregunta a la vez. Pero no tiene integración nativa con Shopify, ni sincronización del catálogo de productos, ni motor de recomendaciones. Recoge respuestas; no recomienda productos.",
      "RevenueHunt es un quiz de recomendación de productos Built-for-Shopify usado por más de 20.000 marcas (4,9★, más de 550 reseñas). Asigna las respuestas de cada comprador a los productos adecuados de tu catálogo en vivo, muestra una página de resultados personalizada con añadir al carrito directo y captura leads en Klaviyo. Un embudo de ventas, no solo un formulario.",
    ],
    rows: [
      { feature: "Plan gratuito", rh: RH.freePlan, them: "yes (limitado)" },
      { feature: "Precio inicial de pago", rh: RH.startingPaid, them: "$29/mo" },
      { feature: "Creado para recomendaciones de producto de ecommerce", rh: RH.ecommerceRecs, them: "no" },
      { feature: "Recomienda productos reales del catálogo de tu tienda", rh: RH.catalogRecs, them: "no" },
      { feature: "Sincronización del catálogo de productos", rh: "yes", them: "no" },
      { feature: "App nativa de Shopify (Built for Shopify)", rh: RH.shopifyNative, them: "no" },
      { feature: "Página de resultados con añadir al carrito directo", rh: "yes", them: "no" },
      { feature: "Constructor de quizzes con IA (configuración en 60 segundos)", rh: RH.aiBuilder, them: "yes (formularios con IA)" },
      { feature: "Lógica condicional / de ramificación", rh: RH.branching, them: "yes (saltos lógicos)" },
      { feature: "Analíticas de abandono pregunta a pregunta", rh: RH.analytics, them: "yes" },
      { feature: "Integraciones con Klaviyo y email / CRM", rh: RH.emailIntegrations, them: "yes" },
      { feature: "Funciona en WooCommerce, BigCommerce, Magento y más", rh: RH.multiPlatform, them: "no" },
    ],
    whySwitch: [
      {
        title: "Recomienda productos, no solo recoge respuestas",
        body: "Typeform registra las respuestas y ahí se queda. El motor de recomendaciones de RevenueHunt clasifica los productos, variantes y colecciones exactos de tu catálogo según las respuestas de cada comprador y los muestra en una página de resultados personalizada.",
      },
      {
        title: "Creado para Shopify y para el ecommerce",
        body: "Typeform no tiene integración nativa con Shopify ni sincronización de catálogo. RevenueHunt es una app Built-for-Shopify con sincronización del catálogo en tiempo real y localización automática de títulos, descripciones y precios de producto mediante Shopify Markets.",
      },
      {
        title: "Un embudo, no un formulario",
        body: "RevenueHunt convierte un quiz en un camino de venta: resultados personalizados, añadir al carrito directo, bloques de descuento y captura de email en Klaviyo, para que el quiz genere ingresos de verdad, no solo datos.",
      },
      {
        title: "Hecho para comerciantes",
        body: "Olvídate de construir formularios genéricos. Usa plantillas de quiz listas para usar de cuidado de la piel, suplementos, moda y más, o deja que el AI Copilot cree un quiz de producto completo a partir de una descripción de tu tienda en unos 60 segundos.",
      },
    ],
    bestFor:
      "Typeform es excelente para encuestas, formularios de captación de leads, feedback e investigación donde no necesitas recomendar productos. Si tu objetivo es ayudar a los compradores de Shopify a encontrar el producto adecuado y comprarlo, RevenueHunt está hecho a medida para eso.",
    migration:
      "¿Ya usas un quiz de Typeform? Reconstrúyelo en RevenueHunt en minutos, o genéralo con el AI Copilot, enlaza tus productos y conecta Klaviyo. Mantienes la sensación conversacional y añades un motor de recomendaciones real y añadir al carrito.",
    faqs: [
      {
        question: "¿Puede Typeform recomendar productos como RevenueHunt?",
        answer:
          "No. Typeform es un constructor general de formularios y encuestas sin sincronización del catálogo de productos ni motor de recomendaciones. RevenueHunt asigna las respuestas del quiz a productos reales de tu tienda y los muestra en una página de resultados personalizada con añadir al carrito.",
      },
      {
        question: "¿RevenueHunt se integra con Shopify y Typeform no?",
        answer:
          "RevenueHunt es una app Built-for-Shopify con sincronización del catálogo en tiempo real y localización de Shopify Markets. Typeform no tiene integración nativa de recomendación de productos con Shopify. No está creado para el descubrimiento de productos de ecommerce.",
      },
      {
        question: "¿Es RevenueHunt mejor que Typeform para un quiz de ecommerce?",
        answer:
          "Para quizzes de recomendación de productos, sí. RevenueHunt está hecho a medida para ello. Para encuestas generales y formularios de leads, Typeform es una buena opción. Resuelven problemas distintos.",
      },
      {
        question: "¿Puedo capturar leads y enviarlos a Klaviyo?",
        answer:
          "Sí. RevenueHunt captura emails en el quiz y sincroniza respuestas y etiquetas de cliente con Klaviyo, Mailchimp, Omnisend, HubSpot y más, para que puedas hacer seguimiento con campañas personalizadas.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  zoovu: {
    slug: "zoovu",
    name: "Zoovu",
    category: "Plataforma empresarial de descubrimiento de productos",
    title: "RevenueHunt vs Zoovu: una alternativa autoservicio",
    description:
      "RevenueHunt vs Zoovu: un quiz de producto para Shopify enfocado y autoservicio, con plan gratuito y precios desde $39/mo, no una suite empresarial de descubrimiento.",
    h1: "RevenueHunt vs Zoovu",
    heroSubtitle:
      "Zoovu es una plataforma empresarial de descubrimiento de productos y venta guiada que se vende mediante demo. RevenueHunt es un quiz de producto enfocado que puedes instalar hoy: gratis para empezar, precios transparentes, activo el mismo día.",
    intro: [
      "Zoovu es una plataforma empresarial de descubrimiento de productos que agrupa búsqueda con IA, venta guiada, recomendaciones de productos y configuradores visuales (CPQ) para grandes marcas B2C y B2B con catálogos enormes y complejos. Es agnóstica de plataforma, se vende mediante demos con precios empresariales personalizados, y no tiene plan gratuito ni registro autoservicio.",
      "RevenueHunt es un quiz de recomendación de productos enfocado usado por más de 20.000 marcas (4,9★, más de 550 reseñas). En lugar de una suite empresarial de descubrimiento, hace una sola cosa excepcionalmente bien, guiar a los compradores de Shopify hacia el producto adecuado, con precios transparentes, un plan gratuito y configuración el mismo día, sin necesidad de una llamada de ventas.",
    ],
    rows: [
      { feature: "Plan gratuito", rh: RH.freePlan, them: "no" },
      { feature: "Precios públicos transparentes", rh: RH.transparentPricing, them: "Personalizado / solicitar una demo" },
      { feature: "Precio inicial", rh: RH.startingPaid, them: "Liderado por ventas (empresarial)" },
      { feature: "Configuración autoservicio (sin llamada de ventas)", rh: "yes", them: "no" },
      { feature: "Hecho a medida para quizzes de recomendación de productos", rh: RH.ecommerceRecs, them: "El quiz es un módulo de una suite de descubrimiento" },
      { feature: "Recomienda productos reales de tu catálogo", rh: RH.catalogRecs, them: "yes" },
      { feature: "App nativa de Shopify (Built for Shopify)", rh: RH.shopifyNative, them: "Mediante integración" },
      { feature: "Constructor de quizzes con IA (configuración en 60 segundos)", rh: RH.aiBuilder, them: "Suite empresarial de IA" },
      { feature: "Quizzes ilimitados", rh: RH.unlimitedQuizzes, them: "yes" },
      { feature: "Lógica condicional / de ramificación ilimitada", rh: RH.branching, them: "yes" },
      { feature: "Analíticas de abandono pregunta a pregunta", rh: RH.analytics, them: "yes" },
      { feature: "Integraciones con Klaviyo y email / CRM", rh: RH.emailIntegrations, them: "yes" },
    ],
    whySwitch: [
      {
        title: "Autoservicio, no una llamada de ventas",
        body: "Zoovu se vende mediante demos y contratos empresariales personalizados sin precios públicos. RevenueHunt es instalar y listo: elige un plan, crea tu quiz y publica. Sin compras corporativas, sin proyecto de implementación.",
      },
      {
        title: "Activo en minutos, no un despliegue",
        body: "Zoovu es una suite de descubrimiento pesada que abarca búsqueda, configuradores y venta guiada en muchos sistemas. RevenueHunt es una app de quiz enfocada que la mayoría de los comerciantes lanzan el mismo día, con un AI Copilot que arma un quiz completo en 60 segundos.",
      },
      {
        title: "Precios que encajan con una marca en crecimiento",
        body: "Las plataformas empresariales de descubrimiento tienen precios para catálogos globales y equipos grandes. RevenueHunt empieza gratis y escala por respuestas desde $39/mes, a la medida de marcas en Shopify y Shopify Plus.",
      },
      {
        title: "Simplicidad Built-for-Shopify",
        body: "RevenueHunt es una app Built-for-Shopify con sincronización del catálogo en tiempo real y localización de Shopify Markets, valorada con 4,9★ por más de 550 comerciantes. La profundidad que necesitas para el descubrimiento de productos sin la carga empresarial.",
      },
    ],
    bestFor:
      "Zoovu encaja con grandes empresas con catálogos masivos y complejos (electrónica de consumo, electrodomésticos, industrial, B2B) que necesitan configuradores, CPQ y venta guiada en muchos sistemas, con el presupuesto y el equipo para un despliegue empresarial. Si quieres un quiz de Shopify enfocado, asequible y autoservicio, RevenueHunt encaja mejor.",
    migration:
      "Pasar de Zoovu es sencillo. Crea tu quiz en RevenueHunt (o genéralo con el AI Copilot), incrústalo y conecta Klaviyo o tu CRM. Sin proyecto de implementación. La mayoría de las tiendas están activas el mismo día, y el soporte te ayuda a llegar.",
    faqs: [
      {
        question: "¿Cuánto cuesta RevenueHunt comparado con Zoovu?",
        answer:
          "RevenueHunt tiene un plan gratuito y planes de pago transparentes desde $39/mes. Zoovu no publica precios. Es una plataforma empresarial liderada por ventas que cotiza precios personalizados tras una demo.",
      },
      {
        question: "¿Es RevenueHunt una plataforma empresarial de descubrimiento como Zoovu?",
        answer:
          "No, y esa es la idea. Zoovu agrupa búsqueda con IA, configuradores, CPQ y venta guiada para catálogos grandes. RevenueHunt se centra en quizzes de recomendación de productos para Shopify y hace ese único trabajo excepcionalmente bien, con configuración autoservicio y sin llamada de ventas.",
      },
      {
        question: "¿RevenueHunt hace venta guiada como Zoovu?",
        answer:
          "Sí. Un quiz de RevenueHunt es venta guiada: hace las preguntas adecuadas y asigna las respuestas a los productos exactos de tu catálogo, con una página de resultados personalizada y añadir al carrito directo, sin precios empresariales ni despliegue.",
      },
      {
        question: "¿Cuánto tarda la configuración frente a Zoovu?",
        answer:
          "La mayoría de los comerciantes de RevenueHunt lanzan el mismo día, y el AI Quiz Copilot puede armar un quiz completo en unos 60 segundos. Zoovu suele ser una implementación empresarial liderada por ventas.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  jebbit: {
    slug: "jebbit",
    name: "Jebbit",
    category: "Plataforma empresarial de datos declarados (ahora parte de BlueConic)",
    title: "RevenueHunt vs Jebbit: una alternativa autoservicio",
    description:
      "RevenueHunt vs Jebbit: un quiz de producto para Shopify independiente y autoservicio, con plan gratuito desde $39/mo. Jebbit ahora es parte del CDP empresarial de BlueConic.",
    h1: "RevenueHunt vs Jebbit",
    heroSubtitle:
      "Jebbit ahora es parte de la plataforma empresarial de datos de cliente de BlueConic, que se vende mediante demo. RevenueHunt es un quiz de producto independiente y autoservicio: gratis para empezar, nativo de Shopify, activo el mismo día.",
    intro: [
      "Jebbit crea quizzes interactivos, buscadores de productos y flujos de preferencias para recoger datos declarados (zero-party). Fue adquirida y ahora es “Experiences by Jebbit”, parte de la plataforma de datos de cliente de BlueConic, dirigida a marcas B2C empresariales y de mediano mercado (L'Oréal, Express, Heineken), agnóstica de plataforma y vendida mediante demos sin precios públicos ni plan gratuito.",
      "RevenueHunt es un quiz de recomendación de productos independiente usado por más de 20.000 marcas (4,9★, más de 550 reseñas). No tienes que comprar un CDP para usarlo: es un quiz enfocado, Built-for-Shopify, con precios transparentes, un plan gratuito y configuración el mismo día, autoservicio, sin llamada de ventas.",
    ],
    rows: [
      { feature: "Plan gratuito", rh: RH.freePlan, them: "no" },
      { feature: "Precios públicos transparentes", rh: RH.transparentPricing, them: "Personalizado / solicitar una demo" },
      { feature: "Precio inicial", rh: RH.startingPaid, them: "Liderado por ventas (empresarial)" },
      { feature: "Configuración autoservicio (sin llamada de ventas)", rh: "yes", them: "no" },
      { feature: "Producto independiente (sin necesidad de comprar una plataforma)", rh: "yes", them: "Ahora parte del CDP de BlueConic" },
      { feature: "Recomienda productos reales de tu catálogo", rh: RH.catalogRecs, them: "yes" },
      { feature: "App nativa de Shopify (Built for Shopify)", rh: RH.shopifyNative, them: "Mediante integración" },
      { feature: "Constructor de quizzes con IA (configuración en 60 segundos)", rh: RH.aiBuilder, them: "no" },
      { feature: "Quizzes ilimitados", rh: RH.unlimitedQuizzes, them: "yes" },
      { feature: "Lógica condicional / de ramificación ilimitada", rh: RH.branching, them: "yes" },
      { feature: "Analíticas de abandono pregunta a pregunta", rh: RH.analytics, them: "yes" },
      { feature: "Captura datos zero-party / declarados", rh: "yes", them: "yes" },
    ],
    whySwitch: [
      {
        title: "Un quiz independiente, no la compra de una plataforma",
        body: "Jebbit ahora es “Experiences by Jebbit” dentro del CDP de BlueConic. RevenueHunt es una app enfocada que puedes usar por su cuenta. Sin plataforma de datos de cliente que comprar o implementar.",
      },
      {
        title: "Autoservicio, no una llamada de ventas",
        body: "Jebbit/BlueConic se vende mediante demos y contratos empresariales personalizados sin precios públicos. RevenueHunt es instalar y listo, con un plan gratuito y precios transparentes desde $39/mes.",
      },
      {
        title: "Creado para Shopify, activo el mismo día",
        body: "RevenueHunt es una app Built-for-Shopify con sincronización del catálogo en tiempo real y añadir al carrito directo, y un AI Copilot que arma un quiz completo en 60 segundos. La mayoría de los comerciantes lanzan el mismo día.",
      },
      {
        title: "Sigues siendo dueño de tus datos zero-party",
        body: "Cada respuesta del quiz es un dato zero-party que tus compradores ofrecen voluntariamente. RevenueHunt sincroniza respuestas y etiquetas de cliente con Klaviyo, Mailchimp, Omnisend, HubSpot y más. No hace falta un CDP para ponerlos a trabajar.",
      },
    ],
    bestFor:
      "Jebbit, como parte de BlueConic, encaja con marcas B2C empresariales que quieren experiencias de datos declarados fuertemente acopladas a una plataforma completa de datos de cliente y activadas en muchos canales, con el presupuesto para un CDP. Si quieres un quiz de Shopify independiente, asequible y autoservicio, RevenueHunt encaja mejor.",
    migration:
      "Salir de Jebbit, o evaluar BlueConic, es sencillo. Crea tu quiz en RevenueHunt (o genéralo con el AI Copilot), incrústalo y conecta Klaviyo o tu CRM. La mayoría de las tiendas están activas el mismo día, y tus datos zero-party siguen fluyendo a tus herramientas de email.",
    faqs: [
      {
        question: "¿Sigue estando disponible Jebbit por su cuenta?",
        answer:
          "Jebbit ahora es “Experiences by Jebbit”, parte de la plataforma de datos de cliente de BlueConic. RevenueHunt es un quiz de producto independiente que puedes usar sin comprar un CDP: autoservicio, con un plan gratuito desde $39/mes.",
      },
      {
        question: "¿Cuánto cuesta RevenueHunt comparado con Jebbit?",
        answer:
          "RevenueHunt tiene un plan gratuito y planes de pago transparentes desde $39/mes. Jebbit/BlueConic no publica precios. Es una plataforma empresarial liderada por ventas que cotiza precios personalizados tras una demo.",
      },
      {
        question: "¿RevenueHunt recoge datos zero-party (declarados) como Jebbit?",
        answer:
          "Sí. Cada respuesta del quiz es un dato zero-party que tus compradores ofrecen voluntariamente. RevenueHunt sincroniza respuestas y etiquetas de cliente con Klaviyo, Mailchimp, Omnisend, HubSpot y más para segmentación y marketing personalizado.",
      },
      {
        question: "¿Cuánto tarda la configuración frente a Jebbit?",
        answer:
          "La mayoría de los comerciantes de RevenueHunt lanzan el mismo día, y el AI Quiz Copilot puede armar un quiz completo en unos 60 segundos. Jebbit/BlueConic suele ser una implementación empresarial liderada por ventas.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  nosto: {
    slug: "nosto",
    name: "Nosto",
    category: "Plataforma empresarial de personalización",
    title: "RevenueHunt vs Nosto: una alternativa autoservicio",
    description:
      "RevenueHunt vs Nosto: un quiz de producto enfocado y autoservicio que captura datos zero-party, con plan gratuito desde $39/mo, no una suite empresarial de personalización.",
    h1: "RevenueHunt vs Nosto",
    heroSubtitle:
      "Nosto es una suite empresarial de personalización, búsqueda y merchandising que se vende mediante demo. RevenueHunt es un quiz de producto zero-party enfocado que puedes instalar hoy: gratis para empezar, activo el mismo día.",
    intro: [
      "Nosto es una Commerce Experience Platform que agrupa recomendaciones de productos con IA, búsqueda en sitio personalizada, merchandising y personalización de contenido para marcas empresariales y de mediano mercado. Es agnóstica de plataforma, se vende mediante demos con precios empresariales personalizados, y no tiene plan gratuito ni registro autoservicio. Su personalización se basa principalmente en datos de comportamiento más que en quizzes.",
      "RevenueHunt es un quiz de recomendación de productos enfocado usado por más de 20.000 marcas (4,9★, más de 550 reseñas). En lugar de una suite empresarial, guía a los compradores hacia el producto adecuado preguntándoles directamente, capturando datos zero-party de los que eres dueño, con precios transparentes, un plan gratuito y configuración el mismo día, sin necesidad de una llamada de ventas.",
    ],
    rows: [
      { feature: "Plan gratuito", rh: RH.freePlan, them: "no" },
      { feature: "Precios públicos transparentes", rh: RH.transparentPricing, them: "Personalizado / solicitar una demo" },
      { feature: "Precio inicial", rh: RH.startingPaid, them: "Liderado por ventas (empresarial)" },
      { feature: "Configuración autoservicio (sin llamada de ventas)", rh: "yes", them: "no" },
      { feature: "Hecho a medida para quizzes de recomendación de productos", rh: RH.ecommerceRecs, them: "Suite de personalización, no liderada por quiz" },
      { feature: "Captura datos zero-party (los compradores te lo dicen directamente)", rh: "yes", them: "Principalmente conductual / predictivo" },
      { feature: "Recomienda productos reales de tu catálogo", rh: RH.catalogRecs, them: "yes" },
      { feature: "App nativa de Shopify (Built for Shopify)", rh: RH.shopifyNative, them: "yes" },
      { feature: "Constructor de quizzes con IA (configuración en 60 segundos)", rh: RH.aiBuilder, them: "no" },
      { feature: "Quizzes ilimitados", rh: RH.unlimitedQuizzes, them: "No es una herramienta de quiz" },
      { feature: "Analíticas de abandono pregunta a pregunta", rh: RH.analytics, them: "yes" },
      { feature: "Integraciones con Klaviyo y email / CRM", rh: RH.emailIntegrations, them: "yes" },
    ],
    whySwitch: [
      {
        title: "Autoservicio, no una llamada de ventas",
        body: "Nosto se vende mediante demos y contratos empresariales personalizados sin precios públicos. RevenueHunt es instalar y listo: elige un plan, crea tu quiz y publica, con un plan gratuito y precios transparentes desde $39/mes.",
      },
      {
        title: "Datos zero-party, no solo seguimiento conductual",
        body: "Nosto personaliza principalmente a partir de señales conductuales y predictivas. RevenueHunt pregunta a los compradores directamente mediante un quiz, capturando datos zero-party de los que eres dueño y que puedes sincronizar con Klaviyo, Mailchimp, Omnisend y más.",
      },
      {
        title: "Activo en minutos, no un despliegue",
        body: "Nosto es una suite de varios módulos (recomendaciones, búsqueda, merchandising) que normalmente requiere onboarding. RevenueHunt es una app de quiz enfocada que la mayoría de los comerciantes lanzan el mismo día, con un AI Copilot que arma un quiz completo en 60 segundos.",
      },
      {
        title: "Precios que encajan con una marca en crecimiento",
        body: "Las suites empresariales de personalización tienen precios para equipos y catálogos grandes. RevenueHunt empieza gratis y escala por respuestas desde $39/mes, a la medida de marcas en Shopify y Shopify Plus.",
      },
    ],
    bestFor:
      "Nosto encaja con marcas empresariales y de mediano mercado que quieren una suite completa de personalización conductual, búsqueda y merchandising en múltiples escaparates, con el presupuesto y el equipo para un despliegue empresarial. Si quieres un quiz de producto enfocado, asequible y autoservicio que capture datos zero-party, RevenueHunt encaja mejor.",
    migration:
      "Pasar de Nosto es sencillo. Crea tu quiz en RevenueHunt (o genéralo con el AI Copilot), incrústalo y conecta Klaviyo o tu CRM. Sin proyecto de implementación. La mayoría de las tiendas están activas el mismo día, y tus datos zero-party fluyen directamente a tus herramientas de email.",
    faqs: [
      {
        question: "¿Cuánto cuesta RevenueHunt comparado con Nosto?",
        answer:
          "RevenueHunt tiene un plan gratuito y planes de pago transparentes desde $39/mes. Nosto no publica precios. Es una plataforma empresarial liderada por ventas que cotiza precios personalizados tras una demo.",
      },
      {
        question: "¿Es RevenueHunt una suite de personalización como Nosto?",
        answer:
          "No, y esa es la idea. Nosto agrupa recomendaciones conductuales, búsqueda en sitio y merchandising. RevenueHunt se centra en quizzes de recomendación de productos que capturan datos zero-party, con configuración autoservicio y sin llamada de ventas.",
      },
      {
        question: "¿RevenueHunt usa datos zero-party en lugar de seguimiento conductual?",
        answer:
          "Sí. RevenueHunt guía a los compradores a través de un quiz y ellos te dicen sus preferencias, objetivos y restricciones directamente: datos zero-party de los que eres dueño, en lugar de inferir la intención a partir del comportamiento y las cookies.",
      },
      {
        question: "¿Cuánto tarda la configuración frente a Nosto?",
        answer:
          "La mayoría de los comerciantes de RevenueHunt lanzan el mismo día, y el AI Quiz Copilot puede armar un quiz completo en unos 60 segundos. Nosto suele ser una implementación empresarial liderada por ventas.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  tolstoy: {
    slug: "tolstoy",
    name: "Tolstoy",
    category: "Plataforma de vídeo comprable y quiz",
    title: "RevenueHunt vs Tolstoy: una alternativa centrada en el quiz",
    description:
      "RevenueHunt vs Tolstoy: un quiz de producto hecho a medida con un motor de recomendaciones real y datos zero-party, frente a una plataforma de vídeo con una función de quiz.",
    h1: "RevenueHunt vs Tolstoy",
    heroSubtitle:
      "Tolstoy es una plataforma de vídeo comprable con una función de quiz. RevenueHunt es un quiz de recomendación de productos hecho a medida, con un motor de recomendaciones real y datos zero-party.",
    intro: [
      "Tolstoy es una plataforma de comercio con IA construida en torno al vídeo comprable, los medios generados por IA y un agente de compras con IA, con precios basados en impresiones desde $19/mes. Es una herramienta sólida centrada en el vídeo. Pero el quiz de producto es una función secundaria junto a la experiencia de vídeo.",
      "RevenueHunt es un quiz de recomendación de productos usado por más de 20.000 marcas (4,9★, más de 550 reseñas). Está centrado en el quiz: un motor de recomendaciones dedicado asigna las respuestas de cada comprador a los productos adecuados de tu catálogo, captura datos zero-party y convierte en una página de resultados personalizada, en Shopify, WooCommerce, BigCommerce, Magento, Wix y más.",
    ],
    rows: [
      { feature: "Plan gratuito", rh: RH.freePlan, them: "yes (limitado)" },
      { feature: "Precio inicial de pago", rh: RH.startingPaid, them: "$19/mo" },
      { feature: "Modelo de precios", rh: "Tarifa fija, por respuestas", them: "Por impresiones + créditos de IA" },
      { feature: "Hecho a medida para quizzes de recomendación de productos", rh: RH.ecommerceRecs, them: "El quiz es una función secundaria (centrado en vídeo)" },
      { feature: "Motor de recomendaciones dedicado (voto positivo y exclusión, página de resultados)", rh: "yes", them: "Compra liderada por vídeo" },
      { feature: "Recomienda productos reales de tu catálogo", rh: RH.catalogRecs, them: "yes" },
      { feature: "Captura datos zero-party (los compradores te lo dicen directamente)", rh: "yes", them: "Principalmente datos de interacción con vídeo" },
      { feature: "App nativa de Shopify (Built for Shopify)", rh: RH.shopifyNative, them: "yes" },
      { feature: "Funciona en WooCommerce, BigCommerce, Magento, Wix y más", rh: RH.multiPlatform, them: "no" },
      { feature: "Constructor de quizzes con IA (configuración en 60 segundos)", rh: RH.aiBuilder, them: "IA centrada en vídeo" },
      { feature: "Analíticas de abandono pregunta a pregunta", rh: RH.analytics, them: "yes" },
      { feature: "Integraciones con Klaviyo y email / CRM", rh: RH.emailIntegrations, them: "yes" },
    ],
    whySwitch: [
      {
        title: "Una herramienta centrada en el quiz, no un complemento de vídeo",
        body: "Tolstoy es una plataforma de vídeo comprable donde el quiz es una función secundaria. RevenueHunt está hecho a medida para quizzes de recomendación de productos, con un motor de recomendaciones dedicado y una página de resultados enfocada en la conversión.",
      },
      {
        title: "Un motor de recomendaciones real",
        body: "RevenueHunt clasifica los productos, variantes y colecciones exactos de tu catálogo en vivo usando un modelo de voto positivo y exclusión, con bloques de resultados condicionales y añadir al carrito directo. Una profundidad que el quiz de una herramienta de vídeo no iguala.",
      },
      {
        title: "Datos zero-party de los que eres dueño",
        body: "RevenueHunt captura lo que los compradores te dicen (preferencias, objetivos, restricciones) y lo sincroniza con Klaviyo, Mailchimp, Omnisend y más para segmentación. La fortaleza de Tolstoy es la interacción con vídeo, no los datos estructurados de un quiz.",
      },
      {
        title: "Vende en cualquier lugar, probado a escala",
        body: "RevenueHunt funciona de forma nativa en Shopify y también en WooCommerce, BigCommerce, Magento, Wix, Squarespace e independiente, con la confianza de más de 20.000 marcas y 4,9★ de más de 550 reseñas.",
      },
    ],
    bestFor:
      "Tolstoy es una buena opción si tu estrategia está liderada por vídeo (vídeo comprable, UGC, TikTok Shop) y un quiz es algo deseable pero no esencial. Si quieres un quiz de recomendación de productos dedicado con un motor de recomendaciones real y datos zero-party, RevenueHunt encaja mejor.",
    migration:
      "Si has estado usando un quiz dentro de Tolstoy, cambiar es rápido. Reconstrúyelo en el constructor de RevenueHunt (o genéralo en 60 segundos con nuestro AI Copilot), incrústalo y conecta Klaviyo. La mayoría de las tiendas están activas el mismo día, y nuestro equipo de soporte te ayuda a migrar.",
    faqs: [
      {
        question: "¿Es RevenueHunt mejor que Tolstoy para un quiz de producto?",
        answer:
          "Para un quiz de recomendación de productos dedicado, sí. RevenueHunt está hecho a medida para ello, con un motor de recomendaciones real y datos zero-party. Tolstoy está centrado en el vídeo, con el quiz como función secundaria. Para vídeo comprable en concreto, Tolstoy está hecho a medida.",
      },
      {
        question: "¿Tolstoy hace quizzes de recomendación de productos?",
        answer:
          "Sí, como función secundaria junto a su vídeo comprable. RevenueHunt está centrado en el quiz: está construido en torno al quiz y a su motor de recomendaciones, página de resultados y captura de datos zero-party.",
      },
      {
        question: "¿RevenueHunt también admite vídeo?",
        answer:
          "Sí. Puedes añadir vídeo a las preguntas del quiz y a la página de resultados personalizada. RevenueHunt está centrado en el quiz más que en ser una plataforma de vídeo, así que el vídeo apoya al quiz y no al revés.",
      },
      {
        question: "¿Puedo capturar datos zero-party y enviarlos a Klaviyo?",
        answer:
          "Sí. RevenueHunt captura las respuestas del quiz como datos zero-party y sincroniza respuestas y etiquetas de cliente con Klaviyo, Mailchimp, Omnisend, HubSpot y más para segmentación y marketing personalizado.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },
};
