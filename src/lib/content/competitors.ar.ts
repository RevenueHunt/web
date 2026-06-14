import type { Competitor } from "../competitors";

// قيم عمود RevenueHunt المشتركة (مُتحقق منها بالموجز + الوثائق).
// تُحفظ كثوابت بأسماء حتى تروي كل جداول المنافسين القصة نفسها عن RH.
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

export const COMPETITORS_AR: Record<string, Competitor> = {
  "octane-ai": {
    slug: "octane-ai",
    name: "Octane AI",
    category: "تطبيق اختبار لـ Shopify",
    title: "RevenueHunt مقابل Octane AI: البديل لـ Octane AI",
    description:
      "RevenueHunt مقابل Octane AI: خطة مجانية، بلا علامة مائية من Shopify، واختبارات غير محدودة من $39/mo. البديل لـ Octane AI لاختبارات المنتجات.",
    h1: "RevenueHunt مقابل Octane AI",
    heroSubtitle:
      "كلاهما يبني اختبارات التوصية بالمنتجات لـ Shopify. يضيف RevenueHunt خطة مجانية واختبارات غير محدودة وبلا علامة مائية، بجزء من السعر.",
    intro: [
      "Octane AI تطبيق اختبار منتجات وتخصيص مبني لـ Shopify. التسعير قائم على الأرصدة، يبدأ من $50 شهريًا، ولا توجد خطة مجانية. هي أداة قادرة، خاصة لعلامات الجمال الكبرى. لكن خطة الدخول تحدّك باختبارين وتُبقي شعار Octane AI على اختبارك حتى تصل إلى خطة Plus بسعر $200 شهريًا.",
      "RevenueHunt هو اختبار التوصية بالمنتجات الذي تستخدمه أكثر من 20,000 علامة تجارية (4.9★، أكثر من 550 مراجعة). يبدأ مجانًا، ولا يضيف علامة مائية إلى اختبار Shopify الخاص بك في أي خطة، ويتيح لك بناء اختبارات غير محدودة منذ اليوم الأول، ويعمل أبعد من Shopify على WooCommerce و BigCommerce و Magento و Wix وغيرها.",
    ],
    rows: [
      { feature: "خطة مجانية", rh: RH.freePlan, them: "no" },
      { feature: "السعر المدفوع الأولي", rh: RH.startingPaid, them: "$50/mo" },
      { feature: "نموذج التسعير", rh: "ثابت، حسب الإجابات", them: "قائم على الأرصدة + رسوم تجاوز" },
      { feature: "اختبارات غير محدودة في خطة الدخول", rh: RH.unlimitedQuizzes, them: "no" },
      { feature: "بلا علامة مائية للمزوّد على Shopify (أي خطة)", rh: RH.noForcedBranding, them: "شعار حتى خطة Plus بسعر $200/mo" },
      { feature: "يوصي بمنتجات حقيقية من كتالوجك", rh: RH.catalogRecs, them: "yes" },
      { feature: "تطبيق Shopify أصيل (Built for Shopify)", rh: RH.shopifyNative, them: "no" },
      { feature: "يعمل على WooCommerce و BigCommerce و Magento و Wix وأكثر", rh: RH.multiPlatform, them: "no" },
      { feature: "أداة إنشاء اختبارات بـ AI (إعداد في 60 ثانية)", rh: RH.aiBuilder, them: "yes" },
      { feature: "منطق شرطي / متفرّع غير محدود", rh: RH.branching, them: "yes" },
      { feature: "تحليلات التسرّب سؤالًا بسؤال", rh: RH.analytics, them: "yes" },
      { feature: "تكاملات Klaviyo والبريد / CRM", rh: RH.emailIntegrations, them: "yes" },
    ],
    whySwitch: [
      {
        title: "ابدأ مجانًا، ثم ادفع سعرًا ثابتًا",
        body: "ليس لدى Octane AI خطة مجانية ويبدأ من $50 شهريًا بالأرصدة، مع رسوم تجاوز $0.10 لكل رصيد عند نفادها. لدى RevenueHunt خطة مجانية فعلًا وتسعير ثابت حسب الإجابات من $39 شهريًا. لا حسابات أرصدة، لا رسوم تجاوز مفاجئة.",
      },
      {
        title: "احتفظ بهويتك التجارية منذ اليوم الأول",
        body: "يعرض Octane AI شعاره على اختبارك حتى تُرقّي إلى خطة Plus بسعر $200 شهريًا. لا يضيف RevenueHunt علامة مائية إلى اختبارات Shopify أبدًا، في أي خطة، بما فيها المجانية.",
      },
      {
        title: "ابنِ اختبارات بقدر ما تحتاج",
        body: "تحدّك خطة دخول Octane AI باختبارين. يتيح لك RevenueHunt إنشاء اختبارات غير محدودة في كل خطة، حتى تستطيع تشغيل اختبار لكل مجموعة أو حملة أو صفحة هبوط.",
      },
      {
        title: "بِع في أي مكان، لا على Shopify فقط",
        body: "Octane AI حصري لـ Shopify. يعمل RevenueHunt بشكل أصيل على Shopify وأيضًا على WooCommerce و BigCommerce و Magento و Wix و Squarespace، وكاختبار مستضاف مستقل.",
      },
    ],
    bestFor:
      "Octane AI خيار معقول لعلامات الجمال المؤسسية الموجودة سلفًا على Shopify Plus والتي تريد تخصيصًا عميقًا بـ AI ولديها ميزانية لـ $200 شهريًا فما فوق. إن أردت خطة مجانية أو تسعيرًا ثابتًا أو اختبارات بلا علامة تجارية أو دعمًا متعدد المنصات، فإن RevenueHunt أنسب.",
    migration:
      "الانتقال من Octane AI سريع. أعد بناء اختبارك في أداة السحب والإفلات في RevenueHunt (أو أنشئه في 60 ثانية بـ AI Copilot)، ضمّنه، واربط Klaviyo. معظم المتاجر تنطلق في اليوم نفسه، وفريق دعمنا يساعدك على الانتقال.",
    faqs: [
      {
        question: "هل RevenueHunt أرخص من Octane AI؟",
        answer:
          "نعم. لدى RevenueHunt خطة مجانية وخطط مدفوعة من $39 شهريًا بتسعير ثابت قائم على الإجابات. ليس لدى Octane AI خطة مجانية، يبدأ من $50 شهريًا بنظام أرصدة، ويتقاضى $0.10 لكل رصيد في رسوم التجاوز.",
      },
      {
        question: "هل يضيف RevenueHunt شعاره إلى اختباري كما يفعل Octane AI؟",
        answer:
          "لا. لا يضيف RevenueHunt علامة مائية إلى اختبارات Shopify أبدًا في أي خطة. يُبقي Octane AI شعاره على اختبارك حتى تُرقّي إلى خطة Plus بسعر $200 شهريًا.",
      },
      {
        question: "هل يعمل RevenueHunt على منصات غير Shopify؟",
        answer:
          "نعم. يعمل RevenueHunt على Shopify و WooCommerce و BigCommerce و Magento و Wix و Squarespace، وكاختبار مستضاف مستقل. Octane AI حصري لـ Shopify.",
      },
      {
        question: "هل أستطيع ترحيل اختبار Octane AI الخاص بي إلى RevenueHunt؟",
        answer:
          "نعم. أعِد إنشاء اختبارك في أداة RevenueHunt أو أنشئه بـ AI Quiz Copilot، ثم اربط أداة بريدك. معظم التجار ينطلقون في اليوم نفسه، وفريقنا يساعد في الترحيل.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  typeform: {
    slug: "typeform",
    name: "Typeform",
    category: "أداة عامة لإنشاء النماذج والاستبيانات",
    title: "RevenueHunt مقابل Typeform لاختبارات التجارة الإلكترونية",
    description:
      "RevenueHunt مقابل Typeform: اختبار Built-for-Shopify يوصي بمنتجات حقيقية ويولّد مبيعات، لا مجرد نموذج. خطة مجانية، من $39/mo.",
    h1: "RevenueHunt مقابل Typeform",
    heroSubtitle:
      "ينشئ Typeform نماذج واستبيانات جميلة. ينشئ RevenueHunt اختبارات توصية بالمنتجات تتصل بكتالوج Shopify الخاص بك وتحوّل الإجابات إلى مبيعات.",
    intro: [
      "Typeform أداة عامة لإنشاء النماذج والاستبيانات عبر الإنترنت. رائعة للاستبيانات ونماذج جمع العملاء المحتملين والأبحاث، بتصميم حواري، سؤال واحد في كل مرة. لكن ليس لها تكامل أصيل مع Shopify، ولا مزامنة لكتالوج المنتجات، ولا محرك توصية. تجمع الإجابات؛ لا توصي بالمنتجات.",
      "RevenueHunt اختبار توصية بالمنتجات من نوع Built-for-Shopify تستخدمه أكثر من 20,000 علامة تجارية (4.9★، أكثر من 550 مراجعة). يربط إجابات كل متسوق بالمنتجات المناسبة من كتالوجك الحيّ، ويعرض صفحة نتائج مخصصة مع إضافة مباشرة إلى السلة، ويلتقط العملاء المحتملين إلى Klaviyo. قمع مبيعات، لا مجرد نموذج.",
    ],
    rows: [
      { feature: "خطة مجانية", rh: RH.freePlan, them: "yes (محدودة)" },
      { feature: "السعر المدفوع الأولي", rh: RH.startingPaid, them: "$29/mo" },
      { feature: "مبني لتوصيات منتجات التجارة الإلكترونية", rh: RH.ecommerceRecs, them: "no" },
      { feature: "يوصي بمنتجات حقيقية من كتالوج متجرك", rh: RH.catalogRecs, them: "no" },
      { feature: "مزامنة كتالوج المنتجات", rh: "yes", them: "no" },
      { feature: "تطبيق Shopify أصيل (Built for Shopify)", rh: RH.shopifyNative, them: "no" },
      { feature: "صفحة نتائج مع إضافة مباشرة إلى السلة", rh: "yes", them: "no" },
      { feature: "أداة إنشاء اختبارات بـ AI (إعداد في 60 ثانية)", rh: RH.aiBuilder, them: "yes (نماذج بـ AI)" },
      { feature: "منطق شرطي / متفرّع", rh: RH.branching, them: "yes (قفزات منطقية)" },
      { feature: "تحليلات التسرّب سؤالًا بسؤال", rh: RH.analytics, them: "yes" },
      { feature: "تكاملات Klaviyo والبريد / CRM", rh: RH.emailIntegrations, them: "yes" },
      { feature: "يعمل على WooCommerce و BigCommerce و Magento وأكثر", rh: RH.multiPlatform, them: "no" },
    ],
    whySwitch: [
      {
        title: "يوصي بالمنتجات، لا يجمع الإجابات فقط",
        body: "يسجّل Typeform الإجابات ويتوقف عند ذلك. يرتّب محرك توصية RevenueHunt المنتجات والأشكال والمجموعات الدقيقة من كتالوجك بناءً على إجابات كل متسوق ويعرضها على صفحة نتائج مخصصة.",
      },
      {
        title: "مبني لـ Shopify وللتجارة الإلكترونية",
        body: "ليس لدى Typeform تكامل أصيل مع Shopify ولا مزامنة كتالوج. RevenueHunt تطبيق Built-for-Shopify بمزامنة كتالوج فورية وتوطين تلقائي لعناوين المنتجات وأوصافها وأسعارها عبر Shopify Markets.",
      },
      {
        title: "قمع، لا نموذج",
        body: "يحوّل RevenueHunt الاختبار إلى مسار بيع: نتائج مخصصة، إضافة مباشرة إلى السلة، كتل خصم، والتقاط بريد إلى Klaviyo، حتى يولّد الاختبار إيرادات فعلًا، لا بيانات فقط.",
      },
      {
        title: "مصنوع للتجار",
        body: "تخطّ بناء النماذج العامة. استخدم قوالب اختبار جاهزة للعناية بالبشرة والمكمّلات والأزياء وأكثر، أو دع AI Copilot يبني اختبار منتجات كاملًا من وصف لمتجرك في نحو 60 ثانية.",
      },
    ],
    bestFor:
      "Typeform ممتاز للاستبيانات ونماذج جمع العملاء المحتملين والملاحظات والأبحاث حيث لا تحتاج إلى التوصية بالمنتجات. إن كان هدفك مساعدة متسوّقي Shopify على إيجاد المنتج المناسب وشرائه، فإن RevenueHunt مصمّم خصيصًا لذلك.",
    migration:
      "تستخدم اختبار Typeform سلفًا؟ أعِد بناءه في RevenueHunt في دقائق، أو أنشئه بـ AI Copilot، اربط منتجاتك، واربط Klaviyo. تحتفظ بالإحساس الحواري وتضيف محرك توصية حقيقيًا وإضافة إلى السلة.",
    faqs: [
      {
        question: "هل يستطيع Typeform التوصية بالمنتجات مثل RevenueHunt؟",
        answer:
          "لا. Typeform أداة عامة لإنشاء النماذج والاستبيانات بلا مزامنة كتالوج منتجات ولا محرك توصية. يربط RevenueHunt إجابات الاختبار بمنتجات حقيقية من متجرك ويعرضها على صفحة نتائج مخصصة مع إضافة إلى السلة.",
      },
      {
        question: "هل يتكامل RevenueHunt مع Shopify بينما لا يفعل Typeform؟",
        answer:
          "RevenueHunt تطبيق Built-for-Shopify بمزامنة كتالوج فورية وتوطين Shopify Markets. ليس لدى Typeform تكامل توصية منتجات أصيل مع Shopify. ليس مبنيًا لاكتشاف منتجات التجارة الإلكترونية.",
      },
      {
        question: "هل RevenueHunt أفضل من Typeform لاختبار تجارة إلكترونية؟",
        answer:
          "لاختبارات التوصية بالمنتجات، نعم. RevenueHunt مصمّم خصيصًا لها. للاستبيانات العامة ونماذج العملاء المحتملين، Typeform خيار جيد. يحلّان مشكلتين مختلفتين.",
      },
      {
        question: "هل أستطيع التقاط العملاء المحتملين وإرسالهم إلى Klaviyo؟",
        answer:
          "نعم. يلتقط RevenueHunt رسائل البريد الإلكتروني في الاختبار ويزامن الإجابات والـ customer tags مع Klaviyo و Mailchimp و Omnisend و HubSpot وغيرها، حتى تستطيع المتابعة بحملات مخصصة.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  zoovu: {
    slug: "zoovu",
    name: "Zoovu",
    category: "منصة اكتشاف منتجات مؤسسية",
    title: "RevenueHunt مقابل Zoovu: بديل ذاتي الخدمة",
    description:
      "RevenueHunt مقابل Zoovu: اختبار منتجات Shopify مركّز وذاتي الخدمة، بخطة مجانية وتسعير من $39/mo، لا حزمة اكتشاف مؤسسية.",
    h1: "RevenueHunt مقابل Zoovu",
    heroSubtitle:
      "Zoovu منصة اكتشاف منتجات وبيع موجّه مؤسسية تُباع عبر عرض توضيحي. RevenueHunt اختبار منتجات مركّز يمكنك تثبيته اليوم: مجاني للبدء، تسعير شفّاف، ينطلق في اليوم نفسه.",
    intro: [
      "Zoovu منصة اكتشاف منتجات مؤسسية تجمع البحث بـ AI والبيع الموجّه وتوصيات المنتجات والمكوّنات المرئية (CPQ) للعلامات التجارية الكبرى B2C و B2B ذات الكتالوجات الضخمة والمعقّدة. هي محايدة المنصة، تُباع عبر عروض توضيحية بتسعير مؤسسي مخصص، وليس لها خطة مجانية ولا تسجيل ذاتي الخدمة.",
      "RevenueHunt اختبار توصية بالمنتجات مركّز تستخدمه أكثر من 20,000 علامة تجارية (4.9★، أكثر من 550 مراجعة). بدلًا من حزمة اكتشاف مؤسسية، يفعل شيئًا واحدًا ببراعة استثنائية، توجيه متسوّقي Shopify إلى المنتج المناسب، بتسعير شفّاف وخطة مجانية وإعداد في اليوم نفسه، دون الحاجة إلى مكالمة مبيعات.",
    ],
    rows: [
      { feature: "خطة مجانية", rh: RH.freePlan, them: "no" },
      { feature: "تسعير عام شفّاف", rh: RH.transparentPricing, them: "مخصص / اطلب عرضًا توضيحيًا" },
      { feature: "السعر الأولي", rh: RH.startingPaid, them: "بقيادة المبيعات (مؤسسي)" },
      { feature: "إعداد ذاتي الخدمة (بلا مكالمة مبيعات)", rh: "yes", them: "no" },
      { feature: "مصمّم خصيصًا لاختبارات التوصية بالمنتجات", rh: RH.ecommerceRecs, them: "الاختبار وحدة من حزمة اكتشاف" },
      { feature: "يوصي بمنتجات حقيقية من كتالوجك", rh: RH.catalogRecs, them: "yes" },
      { feature: "تطبيق Shopify أصيل (Built for Shopify)", rh: RH.shopifyNative, them: "عبر التكامل" },
      { feature: "أداة إنشاء اختبارات بـ AI (إعداد في 60 ثانية)", rh: RH.aiBuilder, them: "حزمة AI مؤسسية" },
      { feature: "اختبارات غير محدودة", rh: RH.unlimitedQuizzes, them: "yes" },
      { feature: "منطق شرطي / متفرّع غير محدود", rh: RH.branching, them: "yes" },
      { feature: "تحليلات التسرّب سؤالًا بسؤال", rh: RH.analytics, them: "yes" },
      { feature: "تكاملات Klaviyo والبريد / CRM", rh: RH.emailIntegrations, them: "yes" },
    ],
    whySwitch: [
      {
        title: "ذاتي الخدمة، لا مكالمة مبيعات",
        body: "يُباع Zoovu عبر عروض توضيحية وعقود مؤسسية مخصصة بلا تسعير عام. RevenueHunt هو ثبّت وانطلق: اختر خطة، ابنِ اختبارك، وانشره. لا مشتريات مؤسسية، لا مشروع تنفيذ.",
      },
      {
        title: "ينطلق في دقائق، لا طرح كامل",
        body: "Zoovu حزمة اكتشاف ثقيلة تمتد عبر البحث والمكوّنات والبيع الموجّه في أنظمة كثيرة. RevenueHunt تطبيق اختبار مركّز يطلقه معظم التجار في اليوم نفسه، مع AI Copilot يبني هيكل اختبار كامل في 60 ثانية.",
      },
      {
        title: "تسعير يناسب علامة تجارية نامية",
        body: "منصات الاكتشاف المؤسسية مسعّرة للكتالوجات العالمية والفرق الكبيرة. يبدأ RevenueHunt مجانًا ويتوسّع حسب الإجابات من $39 شهريًا، بحجم مناسب لعلامات Shopify و Shopify Plus.",
      },
      {
        title: "بساطة Built-for-Shopify",
        body: "RevenueHunt تطبيق Built-for-Shopify بمزامنة كتالوج فورية وتوطين Shopify Markets، مقيَّم بـ 4.9★ من أكثر من 550 تاجرًا. العمق الذي تحتاجه لاكتشاف المنتجات دون العبء المؤسسي.",
      },
    ],
    bestFor:
      "Zoovu يناسب المؤسسات الكبرى ذات الكتالوجات الضخمة والمعقّدة (إلكترونيات استهلاكية، أجهزة منزلية، صناعي، B2B) التي تحتاج إلى مكوّنات و CPQ وبيع موجّه عبر أنظمة كثيرة، ولديها الميزانية والفريق لطرح مؤسسي. إن أردت اختبار Shopify مركّزًا وميسور التكلفة وذاتي الخدمة، فإن RevenueHunt أنسب.",
    migration:
      "الانتقال من Zoovu بسيط. ابنِ اختبارك في RevenueHunt (أو أنشئه بـ AI Copilot)، ضمّنه، واربط Klaviyo أو الـ CRM الخاص بك. لا مشروع تنفيذ. معظم المتاجر تنطلق في اليوم نفسه، والدعم يساعدك على الوصول.",
    faqs: [
      {
        question: "كم يكلّف RevenueHunt مقارنة بـ Zoovu؟",
        answer:
          "لدى RevenueHunt خطة مجانية وخطط مدفوعة شفّافة من $39 شهريًا. لا ينشر Zoovu تسعيرًا. هي منصة مؤسسية بقيادة المبيعات تقدّم تسعيرًا مخصصًا بعد عرض توضيحي.",
      },
      {
        question: "هل RevenueHunt منصة اكتشاف مؤسسية مثل Zoovu؟",
        answer:
          "لا، وهذا هو المقصد. يجمع Zoovu البحث بـ AI والمكوّنات و CPQ والبيع الموجّه للكتالوجات الكبيرة. يركّز RevenueHunt على اختبارات التوصية بالمنتجات لـ Shopify ويفعل هذه المهمة الواحدة ببراعة استثنائية، بإعداد ذاتي الخدمة وبلا مكالمة مبيعات.",
      },
      {
        question: "هل يقوم RevenueHunt بالبيع الموجّه مثل Zoovu؟",
        answer:
          "نعم. اختبار RevenueHunt هو بيع موجّه: يطرح الأسئلة الصحيحة ويربط الإجابات بالمنتجات الدقيقة من كتالوجك، مع صفحة نتائج مخصصة وإضافة مباشرة إلى السلة، دون تسعير مؤسسي أو طرح كامل.",
      },
      {
        question: "كم يستغرق الإعداد مقابل Zoovu؟",
        answer:
          "معظم تجار RevenueHunt ينطلقون في اليوم نفسه، ويستطيع AI Quiz Copilot بناء هيكل اختبار كامل في نحو 60 ثانية. Zoovu عادةً تنفيذ مؤسسي بقيادة المبيعات.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  jebbit: {
    slug: "jebbit",
    name: "Jebbit",
    category: "منصة بيانات معلنة مؤسسية (الآن جزء من BlueConic)",
    title: "RevenueHunt مقابل Jebbit: بديل ذاتي الخدمة",
    description:
      "RevenueHunt مقابل Jebbit: اختبار منتجات Shopify مستقل وذاتي الخدمة، بخطة مجانية من $39/mo. Jebbit الآن جزء من CDP المؤسسي لـ BlueConic.",
    h1: "RevenueHunt مقابل Jebbit",
    heroSubtitle:
      "Jebbit الآن جزء من منصة بيانات العملاء المؤسسية لـ BlueConic، تُباع عبر عرض توضيحي. RevenueHunt اختبار منتجات مستقل وذاتي الخدمة: مجاني للبدء، أصيل لـ Shopify، ينطلق في اليوم نفسه.",
    intro: [
      "ينشئ Jebbit اختبارات تفاعلية وباحثي منتجات وتدفّقات تفضيلات لجمع البيانات المعلنة (zero-party). جرى الاستحواذ عليه وأصبح الآن \"Experiences by Jebbit\"، جزءًا من منصة بيانات العملاء لـ BlueConic، موجّهًا لعلامات B2C المؤسسية والسوق المتوسطة (L'Oréal و Express و Heineken)، محايد المنصة، ويُباع عبر عروض توضيحية بلا تسعير عام ولا خطة مجانية.",
      "RevenueHunt اختبار توصية بالمنتجات مستقل تستخدمه أكثر من 20,000 علامة تجارية (4.9★، أكثر من 550 مراجعة). لست مضطرًا لشراء CDP لاستخدامه: هو اختبار مركّز من نوع Built-for-Shopify بتسعير شفّاف وخطة مجانية وإعداد في اليوم نفسه، ذاتي الخدمة، بلا مكالمة مبيعات.",
    ],
    rows: [
      { feature: "خطة مجانية", rh: RH.freePlan, them: "no" },
      { feature: "تسعير عام شفّاف", rh: RH.transparentPricing, them: "مخصص / اطلب عرضًا توضيحيًا" },
      { feature: "السعر الأولي", rh: RH.startingPaid, them: "بقيادة المبيعات (مؤسسي)" },
      { feature: "إعداد ذاتي الخدمة (بلا مكالمة مبيعات)", rh: "yes", them: "no" },
      { feature: "منتج مستقل (لا حاجة لشراء منصة)", rh: "yes", them: "الآن جزء من CDP الخاص بـ BlueConic" },
      { feature: "يوصي بمنتجات حقيقية من كتالوجك", rh: RH.catalogRecs, them: "yes" },
      { feature: "تطبيق Shopify أصيل (Built for Shopify)", rh: RH.shopifyNative, them: "عبر التكامل" },
      { feature: "أداة إنشاء اختبارات بـ AI (إعداد في 60 ثانية)", rh: RH.aiBuilder, them: "no" },
      { feature: "اختبارات غير محدودة", rh: RH.unlimitedQuizzes, them: "yes" },
      { feature: "منطق شرطي / متفرّع غير محدود", rh: RH.branching, them: "yes" },
      { feature: "تحليلات التسرّب سؤالًا بسؤال", rh: RH.analytics, them: "yes" },
      { feature: "يلتقط بيانات zero-party / معلنة", rh: "yes", them: "yes" },
    ],
    whySwitch: [
      {
        title: "اختبار مستقل، لا شراء منصة",
        body: "Jebbit الآن \"Experiences by Jebbit\" داخل CDP الخاص بـ BlueConic. RevenueHunt تطبيق مركّز يمكنك تشغيله بمفرده. لا منصة بيانات عملاء لشرائها أو تنفيذها.",
      },
      {
        title: "ذاتي الخدمة، لا مكالمة مبيعات",
        body: "يُباع Jebbit/BlueConic عبر عروض توضيحية وعقود مؤسسية مخصصة بلا تسعير عام. RevenueHunt هو ثبّت وانطلق، بخطة مجانية وتسعير شفّاف من $39 شهريًا.",
      },
      {
        title: "مبني لـ Shopify، ينطلق في اليوم نفسه",
        body: "RevenueHunt تطبيق Built-for-Shopify بمزامنة كتالوج فورية وإضافة مباشرة إلى السلة، و AI Copilot يبني هيكل اختبار كامل في 60 ثانية. معظم التجار ينطلقون في اليوم نفسه.",
      },
      {
        title: "تبقى مالكًا لبيانات zero-party الخاصة بك",
        body: "كل إجابة اختبار هي بيانات zero-party يقدّمها متسوّقوك طواعية. يزامن RevenueHunt الإجابات والـ customer tags مع Klaviyo و Mailchimp و Omnisend و HubSpot وغيرها. لا حاجة إلى CDP لتشغيلها.",
      },
    ],
    bestFor:
      "Jebbit، كجزء من BlueConic، يناسب علامات B2C المؤسسية التي تريد تجارب بيانات معلنة مرتبطة بإحكام بمنصة بيانات عملاء كاملة ومفعّلة عبر قنوات كثيرة، ولديها الميزانية لـ CDP. إن أردت اختبار Shopify مستقلًا وميسور التكلفة وذاتي الخدمة، فإن RevenueHunt أنسب.",
    migration:
      "الانتقال من Jebbit، أو تقييم BlueConic، بسيط. ابنِ اختبارك في RevenueHunt (أو أنشئه بـ AI Copilot)، ضمّنه، واربط Klaviyo أو الـ CRM الخاص بك. معظم المتاجر تنطلق في اليوم نفسه، وتظل بيانات zero-party الخاصة بك تتدفق إلى أدوات بريدك.",
    faqs: [
      {
        question: "هل ما زال Jebbit متاحًا بمفرده؟",
        answer:
          "Jebbit الآن \"Experiences by Jebbit\"، جزء من منصة بيانات العملاء لـ BlueConic. RevenueHunt اختبار منتجات مستقل يمكنك استخدامه دون شراء CDP: ذاتي الخدمة، بخطة مجانية من $39 شهريًا.",
      },
      {
        question: "كم يكلّف RevenueHunt مقارنة بـ Jebbit؟",
        answer:
          "لدى RevenueHunt خطة مجانية وخطط مدفوعة شفّافة من $39 شهريًا. لا ينشر Jebbit/BlueConic تسعيرًا. هي منصة مؤسسية بقيادة المبيعات تقدّم تسعيرًا مخصصًا بعد عرض توضيحي.",
      },
      {
        question: "هل يجمع RevenueHunt بيانات zero-party (معلنة) مثل Jebbit؟",
        answer:
          "نعم. كل إجابة اختبار هي بيانات zero-party يقدّمها متسوّقوك طواعية. يزامن RevenueHunt الإجابات والـ customer tags مع Klaviyo و Mailchimp و Omnisend و HubSpot وغيرها للتقسيم والتسويق المخصص.",
      },
      {
        question: "كم يستغرق الإعداد مقابل Jebbit؟",
        answer:
          "معظم تجار RevenueHunt ينطلقون في اليوم نفسه، ويستطيع AI Quiz Copilot بناء هيكل اختبار كامل في نحو 60 ثانية. Jebbit/BlueConic عادةً تنفيذ مؤسسي بقيادة المبيعات.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  nosto: {
    slug: "nosto",
    name: "Nosto",
    category: "منصة تخصيص مؤسسية",
    title: "RevenueHunt مقابل Nosto: بديل ذاتي الخدمة",
    description:
      "RevenueHunt مقابل Nosto: اختبار منتجات مركّز وذاتي الخدمة يلتقط بيانات zero-party، بخطة مجانية من $39/mo، لا حزمة تخصيص مؤسسية.",
    h1: "RevenueHunt مقابل Nosto",
    heroSubtitle:
      "Nosto حزمة تخصيص وبحث وتسويق بضائع مؤسسية تُباع عبر عرض توضيحي. RevenueHunt اختبار منتجات zero-party مركّز يمكنك تثبيته اليوم: مجاني للبدء، ينطلق في اليوم نفسه.",
    intro: [
      "Nosto منصة تجربة تجارة (Commerce Experience Platform) تجمع توصيات المنتجات بـ AI والبحث المخصص في الموقع وتسويق البضائع وتخصيص المحتوى للعلامات المؤسسية والسوق المتوسطة. هي محايدة المنصة، تُباع عبر عروض توضيحية بتسعير مؤسسي مخصص، وليس لها خطة مجانية ولا تسجيل ذاتي الخدمة. يعتمد تخصيصها أساسًا على البيانات السلوكية لا على الاختبارات.",
      "RevenueHunt اختبار توصية بالمنتجات مركّز تستخدمه أكثر من 20,000 علامة تجارية (4.9★، أكثر من 550 مراجعة). بدلًا من حزمة مؤسسية، يوجّه المتسوقين إلى المنتج المناسب بسؤالهم مباشرة، ملتقطًا بيانات zero-party تملكها، بتسعير شفّاف وخطة مجانية وإعداد في اليوم نفسه، دون الحاجة إلى مكالمة مبيعات.",
    ],
    rows: [
      { feature: "خطة مجانية", rh: RH.freePlan, them: "no" },
      { feature: "تسعير عام شفّاف", rh: RH.transparentPricing, them: "مخصص / اطلب عرضًا توضيحيًا" },
      { feature: "السعر الأولي", rh: RH.startingPaid, them: "بقيادة المبيعات (مؤسسي)" },
      { feature: "إعداد ذاتي الخدمة (بلا مكالمة مبيعات)", rh: "yes", them: "no" },
      { feature: "مصمّم خصيصًا لاختبارات التوصية بالمنتجات", rh: RH.ecommerceRecs, them: "حزمة تخصيص، لا يقودها الاختبار" },
      { feature: "يلتقط بيانات zero-party (المتسوقون يخبرونك مباشرة)", rh: "yes", them: "سلوكي / تنبّؤي أساسًا" },
      { feature: "يوصي بمنتجات حقيقية من كتالوجك", rh: RH.catalogRecs, them: "yes" },
      { feature: "تطبيق Shopify أصيل (Built for Shopify)", rh: RH.shopifyNative, them: "yes" },
      { feature: "أداة إنشاء اختبارات بـ AI (إعداد في 60 ثانية)", rh: RH.aiBuilder, them: "no" },
      { feature: "اختبارات غير محدودة", rh: RH.unlimitedQuizzes, them: "ليست أداة اختبار" },
      { feature: "تحليلات التسرّب سؤالًا بسؤال", rh: RH.analytics, them: "yes" },
      { feature: "تكاملات Klaviyo والبريد / CRM", rh: RH.emailIntegrations, them: "yes" },
    ],
    whySwitch: [
      {
        title: "ذاتي الخدمة، لا مكالمة مبيعات",
        body: "يُباع Nosto عبر عروض توضيحية وعقود مؤسسية مخصصة بلا تسعير عام. RevenueHunt هو ثبّت وانطلق: اختر خطة، ابنِ اختبارك، وانشره، بخطة مجانية وتسعير شفّاف من $39 شهريًا.",
      },
      {
        title: "بيانات zero-party، لا تتبّع سلوكي فقط",
        body: "يخصّص Nosto أساسًا من إشارات سلوكية وتنبّؤية. يسأل RevenueHunt المتسوقين مباشرة عبر اختبار، ملتقطًا بيانات zero-party تملكها ويمكنك مزامنتها مع Klaviyo و Mailchimp و Omnisend وغيرها.",
      },
      {
        title: "ينطلق في دقائق، لا طرح كامل",
        body: "Nosto حزمة متعددة الوحدات (توصيات، بحث، تسويق بضائع) تحتاج عادةً إلى تهيئة. RevenueHunt تطبيق اختبار مركّز يطلقه معظم التجار في اليوم نفسه، مع AI Copilot يبني هيكل اختبار كامل في 60 ثانية.",
      },
      {
        title: "تسعير يناسب علامة تجارية نامية",
        body: "حزم التخصيص المؤسسية مسعّرة للفرق والكتالوجات الكبيرة. يبدأ RevenueHunt مجانًا ويتوسّع حسب الإجابات من $39 شهريًا، بحجم مناسب لعلامات Shopify و Shopify Plus.",
      },
    ],
    bestFor:
      "Nosto يناسب العلامات المؤسسية والسوق المتوسطة التي تريد حزمة كاملة من التخصيص السلوكي والبحث وتسويق البضائع عبر واجهات متعددة، ولديها الميزانية والفريق لطرح مؤسسي. إن أردت اختبار منتجات مركّزًا وميسور التكلفة وذاتي الخدمة يلتقط بيانات zero-party، فإن RevenueHunt أنسب.",
    migration:
      "الانتقال من Nosto بسيط. ابنِ اختبارك في RevenueHunt (أو أنشئه بـ AI Copilot)، ضمّنه، واربط Klaviyo أو الـ CRM الخاص بك. لا مشروع تنفيذ. معظم المتاجر تنطلق في اليوم نفسه، وتتدفق بيانات zero-party الخاصة بك مباشرة إلى أدوات بريدك.",
    faqs: [
      {
        question: "كم يكلّف RevenueHunt مقارنة بـ Nosto؟",
        answer:
          "لدى RevenueHunt خطة مجانية وخطط مدفوعة شفّافة من $39 شهريًا. لا ينشر Nosto تسعيرًا. هي منصة مؤسسية بقيادة المبيعات تقدّم تسعيرًا مخصصًا بعد عرض توضيحي.",
      },
      {
        question: "هل RevenueHunt حزمة تخصيص مثل Nosto؟",
        answer:
          "لا، وهذا هو المقصد. يجمع Nosto التوصيات السلوكية والبحث في الموقع وتسويق البضائع. يركّز RevenueHunt على اختبارات التوصية بالمنتجات التي تلتقط بيانات zero-party، بإعداد ذاتي الخدمة وبلا مكالمة مبيعات.",
      },
      {
        question: "هل يستخدم RevenueHunt بيانات zero-party بدلًا من التتبّع السلوكي؟",
        answer:
          "نعم. يوجّه RevenueHunt المتسوقين عبر اختبار فيخبرونك بتفضيلاتهم وأهدافهم وقيودهم مباشرة: بيانات zero-party تملكها، بدلًا من استنتاج النيّة من السلوك وملفات تعريف الارتباط.",
      },
      {
        question: "كم يستغرق الإعداد مقابل Nosto؟",
        answer:
          "معظم تجار RevenueHunt ينطلقون في اليوم نفسه، ويستطيع AI Quiz Copilot بناء هيكل اختبار كامل في نحو 60 ثانية. Nosto عادةً تنفيذ مؤسسي بقيادة المبيعات.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  tolstoy: {
    slug: "tolstoy",
    name: "Tolstoy",
    category: "منصة فيديو قابل للتسوّق واختبار",
    title: "RevenueHunt مقابل Tolstoy: بديل يركّز على الاختبار",
    description:
      "RevenueHunt مقابل Tolstoy: اختبار منتجات مصمّم خصيصًا بمحرك توصية حقيقي وبيانات zero-party، مقابل منصة فيديو بميزة اختبار.",
    h1: "RevenueHunt مقابل Tolstoy",
    heroSubtitle:
      "Tolstoy منصة فيديو قابل للتسوّق بميزة اختبار. RevenueHunt اختبار توصية بالمنتجات مصمّم خصيصًا، بمحرك توصية حقيقي وبيانات zero-party.",
    intro: [
      "Tolstoy منصة تجارة بـ AI مبنية حول الفيديو القابل للتسوّق والوسائط المولّدة بـ AI ووكيل تسوّق بـ AI، بتسعير قائم على مرات الظهور من $19 شهريًا. هي أداة قوية تقودها الفيديو. لكن اختبار المنتجات ميزة ثانوية إلى جانب تجربة الفيديو.",
      "RevenueHunt اختبار توصية بالمنتجات تستخدمه أكثر من 20,000 علامة تجارية (4.9★، أكثر من 550 مراجعة). يركّز على الاختبار: محرك توصية مخصص يربط إجابات كل متسوق بالمنتجات المناسبة من كتالوجك، يلتقط بيانات zero-party، ويحوّل على صفحة نتائج مخصصة، عبر Shopify و WooCommerce و BigCommerce و Magento و Wix وغيرها.",
    ],
    rows: [
      { feature: "خطة مجانية", rh: RH.freePlan, them: "yes (محدودة)" },
      { feature: "السعر المدفوع الأولي", rh: RH.startingPaid, them: "$19/mo" },
      { feature: "نموذج التسعير", rh: "ثابت، حسب الإجابات", them: "حسب مرات الظهور + أرصدة AI" },
      { feature: "مصمّم خصيصًا لاختبارات التوصية بالمنتجات", rh: RH.ecommerceRecs, them: "الاختبار ميزة ثانوية (تقودها الفيديو)" },
      { feature: "محرك توصية مخصص (تصويت إيجابي واستبعاد، صفحة نتائج)", rh: "yes", them: "تسوّق تقوده الفيديو" },
      { feature: "يوصي بمنتجات حقيقية من كتالوجك", rh: RH.catalogRecs, them: "yes" },
      { feature: "يلتقط بيانات zero-party (المتسوقون يخبرونك مباشرة)", rh: "yes", them: "بيانات تفاعل الفيديو أساسًا" },
      { feature: "تطبيق Shopify أصيل (Built for Shopify)", rh: RH.shopifyNative, them: "yes" },
      { feature: "يعمل على WooCommerce و BigCommerce و Magento و Wix وأكثر", rh: RH.multiPlatform, them: "no" },
      { feature: "أداة إنشاء اختبارات بـ AI (إعداد في 60 ثانية)", rh: RH.aiBuilder, them: "AI يركّز على الفيديو" },
      { feature: "تحليلات التسرّب سؤالًا بسؤال", rh: RH.analytics, them: "yes" },
      { feature: "تكاملات Klaviyo والبريد / CRM", rh: RH.emailIntegrations, them: "yes" },
    ],
    whySwitch: [
      {
        title: "أداة تركّز على الاختبار، لا إضافة فيديو",
        body: "Tolstoy منصة فيديو قابل للتسوّق حيث الاختبار ميزة ثانوية. RevenueHunt مصمّم خصيصًا لاختبارات التوصية بالمنتجات، بمحرك توصية مخصص وصفحة نتائج تركّز على التحويل.",
      },
      {
        title: "محرك توصية حقيقي",
        body: "يرتّب RevenueHunt المنتجات والأشكال والمجموعات الدقيقة من كتالوجك الحيّ باستخدام نموذج تصويت إيجابي واستبعاد، مع كتل نتائج شرطية وإضافة مباشرة إلى السلة. عمق لا يضاهيه اختبار أداة فيديو.",
      },
      {
        title: "بيانات zero-party تملكها",
        body: "يلتقط RevenueHunt ما يخبرك به المتسوقون (التفضيلات، الأهداف، القيود) ويزامنه مع Klaviyo و Mailchimp و Omnisend وغيرها للتقسيم. قوة Tolstoy هي تفاعل الفيديو، لا بيانات اختبار مهيكلة.",
      },
      {
        title: "بِع في أي مكان، مثبت على نطاق واسع",
        body: "يعمل RevenueHunt بشكل أصيل على Shopify وأيضًا على WooCommerce و BigCommerce و Magento و Wix و Squarespace، ومستقلًا، بثقة أكثر من 20,000 علامة تجارية و 4.9★ من أكثر من 550 مراجعة.",
      },
    ],
    bestFor:
      "Tolstoy خيار قوي إن كانت استراتيجيتك تقودها الفيديو (فيديو قابل للتسوّق، محتوى يولّده المستخدمون، TikTok Shop) والاختبار أمر مرغوب لكن غير أساسي. إن أردت اختبار توصية بالمنتجات مخصصًا بمحرك توصية حقيقي وبيانات zero-party، فإن RevenueHunt أنسب.",
    migration:
      "إن كنت تشغّل اختبارًا داخل Tolstoy، فالانتقال سريع. أعِد بناءه في أداة RevenueHunt (أو أنشئه في 60 ثانية بـ AI Copilot)، ضمّنه، واربط Klaviyo. معظم المتاجر تنطلق في اليوم نفسه، وفريق دعمنا يساعدك على الانتقال.",
    faqs: [
      {
        question: "هل RevenueHunt أفضل من Tolstoy لاختبار منتجات؟",
        answer:
          "لاختبار توصية بالمنتجات مخصص، نعم. RevenueHunt مصمّم خصيصًا له، بمحرك توصية حقيقي وبيانات zero-party. Tolstoy تقوده الفيديو، والاختبار ميزة ثانوية. للفيديو القابل للتسوّق تحديدًا، Tolstoy مصمّم خصيصًا.",
      },
      {
        question: "هل يقوم Tolstoy باختبارات التوصية بالمنتجات؟",
        answer:
          "نعم، كميزة ثانوية إلى جانب فيديوه القابل للتسوّق. RevenueHunt يركّز على الاختبار: مبني حول الاختبار ومحرك التوصية الخاص به وصفحة النتائج والتقاط بيانات zero-party.",
      },
      {
        question: "هل يدعم RevenueHunt الفيديو أيضًا؟",
        answer:
          "نعم. يمكنك إضافة فيديو إلى أسئلة الاختبار وإلى صفحة النتائج المخصصة. يركّز RevenueHunt على الاختبار بدلًا من كونه منصة فيديو، فالفيديو يدعم الاختبار لا العكس.",
      },
      {
        question: "هل أستطيع التقاط بيانات zero-party وإرسالها إلى Klaviyo؟",
        answer:
          "نعم. يلتقط RevenueHunt إجابات الاختبار كبيانات zero-party ويزامن الإجابات والـ customer tags مع Klaviyo و Mailchimp و Omnisend و HubSpot وغيرها للتقسيم والتسويق المخصص.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },
};
