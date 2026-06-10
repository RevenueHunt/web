import type { Competitor } from "../competitors";

// ערכי עמודת RevenueHunt המשותפים (מאומתים מול הקומפנדיום + המסמכים).
// נשמרים כקבועים עם שם כדי שכל טבלת מתחרה תספר את אותו סיפור של RH.
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

export const COMPETITORS_HE: Record<string, Competitor> = {
  "octane-ai": {
    slug: "octane-ai",
    name: "Octane AI",
    category: "אפליקציית חידונים ל-Shopify",
    title: "RevenueHunt מול Octane AI: האלטרנטיבה ל-Octane AI",
    description:
      "RevenueHunt מול Octane AI: תוכנית חינמית, ללא סימן מים של Shopify, וחידונים ללא הגבלה מ-$39/mo. האלטרנטיבה ל-Octane AI לחידוני מוצרים.",
    h1: "RevenueHunt מול Octane AI",
    heroSubtitle:
      "שניהם בונים חידוני המלצת מוצרים ל-Shopify. RevenueHunt מוסיפה תוכנית חינמית, חידונים ללא הגבלה, וללא סימן מים, בשבריר מהמחיר.",
    intro: [
      "Octane AI היא אפליקציית חידון מוצרים והתאמה אישית שבנויה ל-Shopify. התמחור מבוסס קרדיטים, מתחיל ב-$50 לחודש, ואין תוכנית חינמית. זה כלי יכולתי, במיוחד למותגי יופי גדולים יותר. אבל תוכנית הכניסה מגבילה אתכם לשני חידונים ושומרת את הלוגו של Octane AI על החידון שלכם עד שתגיעו לתוכנית Plus של $200 לחודש.",
      "RevenueHunt היא חידון המלצת המוצרים שבו משתמשים יותר מ-20,000 מותגים (4.9★, יותר מ-450 ביקורות). היא מתחילה בחינם, לעולם לא מוסיפה סימן מים לחידון ה-Shopify שלכם בשום תוכנית, מאפשרת לכם לבנות חידונים ללא הגבלה מהיום הראשון, ועובדת מעבר ל-Shopify על WooCommerce, BigCommerce, Magento, Wix ועוד.",
    ],
    rows: [
      { feature: "תוכנית חינמית", rh: RH.freePlan, them: "no" },
      { feature: "מחיר התחלתי בתשלום", rh: RH.startingPaid, them: "$50/mo" },
      { feature: "מודל תמחור", rh: "תעריף קבוע, לפי תשובות", them: "מבוסס קרדיטים + חריגה" },
      { feature: "חידונים ללא הגבלה בתוכנית הכניסה", rh: RH.unlimitedQuizzes, them: "no" },
      { feature: "ללא סימן מים של הספק ב-Shopify (בכל תוכנית)", rh: RH.noForcedBranding, them: "לוגו עד תוכנית Plus של $200/mo" },
      { feature: "ממליצה על מוצרים אמיתיים מהקטלוג שלכם", rh: RH.catalogRecs, them: "yes" },
      { feature: "אפליקציית Shopify מקורית (Built for Shopify)", rh: RH.shopifyNative, them: "no" },
      { feature: "עובדת על WooCommerce, BigCommerce, Magento, Wix ועוד", rh: RH.multiPlatform, them: "no" },
      { feature: "בונה חידונים מבוסס AI (הקמה ב-60 שניות)", rh: RH.aiBuilder, them: "yes" },
      { feature: "לוגיקה מותנית / הסתעפות ללא הגבלה", rh: RH.branching, them: "yes" },
      { feature: "אנליטיקת נשירה שאלה-שאלה", rh: RH.analytics, them: "yes" },
      { feature: "אינטגרציות Klaviyo ומייל / CRM", rh: RH.emailIntegrations, them: "yes" },
    ],
    whySwitch: [
      {
        title: "התחילו בחינם, ואז שלמו תעריף קבוע",
        body: "ל-Octane AI אין תוכנית חינמית והיא מתחילה ב-$50 לחודש על קרדיטים, עם חריגות של $0.10 לקרדיט ברגע שנגמרים לכם. ל-RevenueHunt יש תוכנית חינמית באמת ותמחור קבוע לפי תשובות מ-$39 לחודש. ללא חישובי קרדיטים, ללא חריגות מפתיעות.",
      },
      {
        title: "שמרו על המיתוג שלכם מהיום הראשון",
        body: "Octane AI מציגה את הלוגו שלה על החידון שלכם עד שאתם משדרגים לתוכנית Plus של $200 לחודש. RevenueHunt לעולם לא מוסיפה סימן מים לחידוני Shopify, בשום תוכנית, כולל החינמית.",
      },
      {
        title: "בנו כמה חידונים שאתם צריכים",
        body: "תוכנית הכניסה של Octane AI מגבילה אתכם לשני חידונים. RevenueHunt מאפשרת לכם ליצור חידונים ללא הגבלה בכל תוכנית, כך שתוכלו להריץ חידון לכל קולקציה, קמפיין או עמוד נחיתה.",
      },
      {
        title: "מכרו בכל מקום, לא רק ב-Shopify",
        body: "Octane AI היא ל-Shopify בלבד. RevenueHunt רצה באופן מקורי על Shopify וגם על WooCommerce, BigCommerce, Magento, Wix, Squarespace, וכחידון מתארח עצמאי.",
      },
    ],
    bestFor:
      "Octane AI מתאימה למותגי יופי ארגוניים שכבר על Shopify Plus שרוצים התאמה אישית עמוקה מבוססת AI ויש להם תקציב ל-$200 לחודש ומעלה. אם אתם רוצים תוכנית חינמית, תמחור קבוע, חידונים ללא מיתוג, או תמיכה רב-פלטפורמתית, RevenueHunt היא ההתאמה הטובה יותר.",
    migration:
      "המעבר מ-Octane AI מהיר. בנו מחדש את החידון שלכם בבונה הגרירה-והשחרור של RevenueHunt (או צרו אותו ב-60 שניות עם ה-AI Copilot שלנו), הטמיעו אותו, וחברו את Klaviyo. רוב החנויות באוויר עוד באותו יום, וצוות התמיכה שלנו עוזר לכם לעבור.",
    faqs: [
      {
        question: "האם RevenueHunt זולה יותר מ-Octane AI?",
        answer:
          "כן. ל-RevenueHunt יש תוכנית חינמית ותוכניות בתשלום מ-$39 לחודש עם תמחור קבוע מבוסס תשובות. ל-Octane AI אין תוכנית חינמית, היא מתחילה ב-$50 לחודש על שיטת קרדיטים, וגובה $0.10 לקרדיט על חריגות.",
      },
      {
        question: "האם RevenueHunt מוסיפה את הלוגו שלה לחידון שלי כמו Octane AI?",
        answer:
          "לא. RevenueHunt לעולם לא מוסיפה סימן מים לחידוני Shopify בשום תוכנית. Octane AI שומרת את הלוגו שלה על החידון שלכם עד שאתם משדרגים לתוכנית Plus של $200 לחודש.",
      },
      {
        question: "האם RevenueHunt עובדת על פלטפורמות אחרות מלבד Shopify?",
        answer:
          "כן. RevenueHunt עובדת על Shopify, WooCommerce, BigCommerce, Magento, Wix, Squarespace, וכחידון מתארח עצמאי. Octane AI היא ל-Shopify בלבד.",
      },
      {
        question: "האם אני יכול להעביר את חידון ה-Octane AI שלי ל-RevenueHunt?",
        answer:
          "כן. צרו מחדש את החידון שלכם בבונה של RevenueHunt או צרו אותו עם ה-AI Quiz Copilot, ואז חברו את כלי המייל שלכם. רוב הסוחרים באוויר עוד באותו יום, וצוות שלנו עוזר עם המעבר.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  typeform: {
    slug: "typeform",
    name: "Typeform",
    category: "בונה טפסים וסקרים כללי",
    title: "RevenueHunt מול Typeform לחידוני איקומרס",
    description:
      "RevenueHunt מול Typeform: חידון Built-for-Shopify שממליץ על מוצרים אמיתיים ומניע מכירות, לא רק טופס. תוכנית חינמית, מ-$39/mo.",
    h1: "RevenueHunt מול Typeform",
    heroSubtitle:
      "Typeform בונה טפסים וסקרים יפים. RevenueHunt בונה חידוני המלצת מוצרים שמתחברים לקטלוג ה-Shopify שלכם והופכים תשובות למכירות.",
    intro: [
      "Typeform הוא בונה טפסים וסקרים אונליין לכל מטרה. הוא מצוין לסקרים, טופסי לידים ומחקר, עם עיצוב שיחתי, שאלה-אחת-בכל-פעם. אבל אין לו אינטגרציה מקורית ל-Shopify, אין סנכרון קטלוג מוצרים, ואין מנוע המלצות. הוא אוסף תשובות; הוא לא ממליץ על מוצרים.",
      "RevenueHunt היא חידון המלצת מוצרים Built-for-Shopify שבו משתמשים יותר מ-20,000 מותגים (4.9★, יותר מ-450 ביקורות). היא ממפה את התשובות של כל קונה למוצרים הנכונים מהקטלוג החי שלכם, מציגה עמוד תוצאות מותאם אישית עם הוספה ישירה לעגלה, ולוכדת לידים ל-Klaviyo. משפך מכירות, לא רק טופס.",
    ],
    rows: [
      { feature: "תוכנית חינמית", rh: RH.freePlan, them: "yes (מוגבל)" },
      { feature: "מחיר התחלתי בתשלום", rh: RH.startingPaid, them: "$29/mo" },
      { feature: "בנוי להמלצות מוצרים באיקומרס", rh: RH.ecommerceRecs, them: "no" },
      { feature: "ממליץ על מוצרים אמיתיים מקטלוג החנות שלכם", rh: RH.catalogRecs, them: "no" },
      { feature: "סנכרון קטלוג מוצרים", rh: "yes", them: "no" },
      { feature: "אפליקציית Shopify מקורית (Built for Shopify)", rh: RH.shopifyNative, them: "no" },
      { feature: "עמוד תוצאות עם הוספה ישירה לעגלה", rh: "yes", them: "no" },
      { feature: "בונה חידונים מבוסס AI (הקמה ב-60 שניות)", rh: RH.aiBuilder, them: "yes (טפסי AI)" },
      { feature: "לוגיקה מותנית / הסתעפות", rh: RH.branching, them: "yes (קפיצות לוגיקה)" },
      { feature: "אנליטיקת נשירה שאלה-שאלה", rh: RH.analytics, them: "yes" },
      { feature: "אינטגרציות Klaviyo ומייל / CRM", rh: RH.emailIntegrations, them: "yes" },
      { feature: "עובד על WooCommerce, BigCommerce, Magento ועוד", rh: RH.multiPlatform, them: "no" },
    ],
    whySwitch: [
      {
        title: "ממליץ על מוצרים, לא רק אוסף תשובות",
        body: "Typeform מתעד תשובות ועוצר שם. מנוע ההמלצות של RevenueHunt מדרג את המוצרים, הריאציות והקולקציות המדויקים מהקטלוג שלכם לפי התשובות של כל קונה ומציג אותם בעמוד תוצאות מותאם אישית.",
      },
      {
        title: "בנוי ל-Shopify ולאיקומרס",
        body: "ל-Typeform אין אינטגרציה מקורית ל-Shopify ואין סנכרון קטלוג. RevenueHunt היא אפליקציית Built-for-Shopify עם סנכרון קטלוג בזמן אמת ולוקליזציה אוטומטית של שמות, תיאורים ומחירי מוצרים דרך Shopify Markets.",
      },
      {
        title: "משפך, לא טופס",
        body: "RevenueHunt הופכת חידון למסלול מכירה: תוצאות מותאמות אישית, הוספה ישירה לעגלה, בלוקי הנחה ולכידת מייל ל-Klaviyo, כך שהחידון באמת מניע הכנסה, לא רק נתונים.",
      },
      {
        title: "עשוי בשביל סוחרים",
        body: "דלגו על בניית טפסים כללית. השתמשו בתבניות חידון מוכנות לטיפוח עור, תוספי תזונה, אופנה ועוד, או תנו ל-AI Copilot לבנות חידון מוצרים שלם מתיאור של החנות שלכם בערך ב-60 שניות.",
      },
    ],
    bestFor:
      "Typeform מצוין לסקרים, טופסי גיוס לידים, משוב ומחקר שבהם אינכם צריכים להמליץ על מוצרים. אם המטרה שלכם היא לעזור לקוני Shopify למצוא את המוצר הנכון ולקנות אותו, RevenueHunt בנויה ייעודית לכך.",
    migration:
      "כבר משתמשים בחידון Typeform? בנו אותו מחדש ב-RevenueHunt בדקות, או צרו אותו עם ה-AI Copilot, קשרו את המוצרים שלכם, וחברו את Klaviyo. אתם שומרים על התחושה השיחתית ומוסיפים מנוע המלצות אמיתי והוספה לעגלה.",
    faqs: [
      {
        question: "האם Typeform יכול להמליץ על מוצרים כמו RevenueHunt?",
        answer:
          "לא. Typeform הוא בונה טפסים וסקרים כללי ללא סנכרון קטלוג מוצרים או מנוע המלצות. RevenueHunt ממפה תשובות חידון למוצרים אמיתיים מהחנות שלכם ומציגה אותם בעמוד תוצאות מותאם אישית עם הוספה לעגלה.",
      },
      {
        question: "האם RevenueHunt משתלבת עם Shopify ו-Typeform לא?",
        answer:
          "RevenueHunt היא אפליקציית Built-for-Shopify עם סנכרון קטלוג בזמן אמת ולוקליזציה של Shopify Markets. ל-Typeform אין אינטגרציה מקורית של המלצת מוצרים ל-Shopify. הוא לא בנוי לגילוי מוצרים באיקומרס.",
      },
      {
        question: "האם RevenueHunt טובה יותר מ-Typeform לחידון איקומרס?",
        answer:
          "לחידוני המלצת מוצרים, כן. RevenueHunt בנויה ייעודית לכך. לסקרים כלליים ולטופסי לידים, Typeform הוא בחירה טובה. הם פותרים בעיות שונות.",
      },
      {
        question: "האם אני יכול ללכוד לידים ולשלוח אותם ל-Klaviyo?",
        answer:
          "כן. RevenueHunt לוכדת מיילים בחידון ומסנכרנת תשובות ו-customer tags ל-Klaviyo, Mailchimp, Omnisend, HubSpot ועוד, כך שתוכלו לעשות מעקב עם קמפיינים מותאמים אישית.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  zoovu: {
    slug: "zoovu",
    name: "Zoovu",
    category: "פלטפורמת גילוי מוצרים ארגונית",
    title: "RevenueHunt מול Zoovu: אלטרנטיבה לשירות עצמי",
    description:
      "RevenueHunt מול Zoovu: חידון מוצרים ממוקד לשירות עצמי ל-Shopify עם תוכנית חינמית ותמחור מ-$39/mo, לא חבילת גילוי ארגונית.",
    h1: "RevenueHunt מול Zoovu",
    heroSubtitle:
      "Zoovu היא פלטפורמת גילוי מוצרים ומכירה מודרכת ארגונית שנמכרת בדמו. RevenueHunt היא חידון מוצרים ממוקד שאפשר להתקין היום: חינם להתחלה, תמחור שקוף, באוויר עוד באותו יום.",
    intro: [
      "Zoovu היא פלטפורמת גילוי מוצרים ארגונית שמאגדת חיפוש AI, מכירה מודרכת, המלצות מוצרים וקונפיגורטורים חזותיים (CPQ) למותגי B2C ו-B2B גדולים עם קטלוגים עצומים ומורכבים. היא אגנוסטית לפלטפורמה, נמכרת דרך דמו עם תמחור ארגוני מותאם, ואין לה תוכנית חינמית או הרשמה בשירות עצמי.",
      "RevenueHunt היא חידון המלצת מוצרים ממוקד שבו משתמשים יותר מ-20,000 מותגים (4.9★, יותר מ-450 ביקורות). במקום חבילת גילוי ארגונית, היא עושה דבר אחד בצורה יוצאת דופן, מנחה קוני Shopify למוצר הנכון, עם תמחור שקוף, תוכנית חינמית, והקמה באותו יום, ללא צורך בשיחת מכירה.",
    ],
    rows: [
      { feature: "תוכנית חינמית", rh: RH.freePlan, them: "no" },
      { feature: "תמחור ציבורי שקוף", rh: RH.transparentPricing, them: "מותאם / בקשו דמו" },
      { feature: "מחיר התחלתי", rh: RH.startingPaid, them: "מונע-מכירות (ארגוני)" },
      { feature: "הקמה בשירות עצמי (ללא שיחת מכירה)", rh: "yes", them: "no" },
      { feature: "בנוי ייעודית לחידוני המלצת מוצרים", rh: RH.ecommerceRecs, them: "חידון הוא מודול אחד מחבילת גילוי" },
      { feature: "ממליץ על מוצרים אמיתיים מהקטלוג שלכם", rh: RH.catalogRecs, them: "yes" },
      { feature: "אפליקציית Shopify מקורית (Built for Shopify)", rh: RH.shopifyNative, them: "דרך אינטגרציה" },
      { feature: "בונה חידונים מבוסס AI (הקמה ב-60 שניות)", rh: RH.aiBuilder, them: "חבילת AI ארגונית" },
      { feature: "חידונים ללא הגבלה", rh: RH.unlimitedQuizzes, them: "yes" },
      { feature: "לוגיקה מותנית / הסתעפות ללא הגבלה", rh: RH.branching, them: "yes" },
      { feature: "אנליטיקת נשירה שאלה-שאלה", rh: RH.analytics, them: "yes" },
      { feature: "אינטגרציות Klaviyo ומייל / CRM", rh: RH.emailIntegrations, them: "yes" },
    ],
    whySwitch: [
      {
        title: "שירות עצמי, לא שיחת מכירה",
        body: "Zoovu נמכרת דרך דמו וחוזים ארגוניים מותאמים ללא תמחור ציבורי. RevenueHunt היא התקן-וצא: בחרו תוכנית, בנו את החידון שלכם, ופרסמו. ללא רכש, ללא פרויקט הטמעה.",
      },
      {
        title: "באוויר בדקות, לא בפריסה",
        body: "Zoovu היא חבילת גילוי כבדה שמשתרעת על חיפוש, קונפיגורטורים ומכירה מודרכת על פני מערכות רבות. RevenueHunt היא אפליקציית חידון ממוקדת שרוב הסוחרים משיקים עוד באותו יום, עם AI Copilot שבונה חידון שלם ב-60 שניות.",
      },
      {
        title: "תמחור שמתאים למותג שצומח",
        body: "פלטפורמות גילוי ארגוניות מתומחרות לקטלוגים גלובליים וצוותים גדולים. RevenueHunt מתחילה בחינם ומתרחבת לפי תשובות מ-$39 לחודש, בדיוק במידה למותגי Shopify ו-Shopify Plus.",
      },
      {
        title: "פשטות של Built-for-Shopify",
        body: "RevenueHunt היא אפליקציית Built-for-Shopify עם סנכרון קטלוג בזמן אמת ולוקליזציה של Shopify Markets, מדורגת 4.9★ על ידי יותר מ-450 סוחרים. העומק שאתם צריכים לגילוי מוצרים בלי תקורה ארגונית.",
      },
    ],
    bestFor:
      "Zoovu מתאימה לארגונים גדולים עם קטלוגים עצומים ומורכבים (אלקטרוניקה צרכנית, מכשירי חשמל, תעשייתי, B2B) שצריכים קונפיגורטורים, CPQ ומכירה מודרכת על פני מערכות רבות, עם התקציב והצוות לפריסה ארגונית. אם אתם רוצים חידון Shopify ממוקד, משתלם ובשירות עצמי, RevenueHunt היא ההתאמה הטובה יותר.",
    migration:
      "המעבר מ-Zoovu פשוט. בנו את החידון שלכם ב-RevenueHunt (או צרו אותו עם ה-AI Copilot), הטמיעו אותו, וחברו את Klaviyo או את ה-CRM שלכם. ללא פרויקט הטמעה. רוב החנויות באוויר עוד באותו יום, והתמיכה עוזרת לכם להגיע לשם.",
    faqs: [
      {
        question: "כמה RevenueHunt עולה בהשוואה ל-Zoovu?",
        answer:
          "ל-RevenueHunt יש תוכנית חינמית ותוכניות בתשלום שקופות מ-$39 לחודש. Zoovu לא מפרסמת תמחור. זו פלטפורמה ארגונית, מונעת-מכירות, שמצטטת תמחור מותאם אחרי דמו.",
      },
      {
        question: "האם RevenueHunt היא פלטפורמת גילוי ארגונית כמו Zoovu?",
        answer:
          "לא, וזו הנקודה. Zoovu מאגדת חיפוש AI, קונפיגורטורים, CPQ ומכירה מודרכת לקטלוגים גדולים. RevenueHunt מתמקדת בחידוני המלצת מוצרים ל-Shopify ועושה את העבודה האחת הזו בצורה יוצאת דופן, עם הקמה בשירות עצמי וללא שיחת מכירה.",
      },
      {
        question: "האם RevenueHunt עושה מכירה מודרכת כמו Zoovu?",
        answer:
          "כן. חידון RevenueHunt הוא מכירה מודרכת: הוא שואל את השאלות הנכונות וממפה תשובות למוצרים המדויקים מהקטלוג שלכם, עם עמוד תוצאות מותאם אישית והוספה ישירה לעגלה, ללא תמחור ארגוני או פריסה.",
      },
      {
        question: "כמה זמן לוקחת ההקמה לעומת Zoovu?",
        answer:
          "רוב הסוחרים של RevenueHunt משיקים עוד באותו יום, וה-AI Quiz Copilot יכול לבנות חידון שלם בערך ב-60 שניות. Zoovu היא בדרך כלל הטמעה ארגונית מונעת-מכירות.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  jebbit: {
    slug: "jebbit",
    name: "Jebbit",
    category: "פלטפורמת נתונים מוצהרים ארגונית (כעת חלק מ-BlueConic)",
    title: "RevenueHunt מול Jebbit: אלטרנטיבה לשירות עצמי",
    description:
      "RevenueHunt מול Jebbit: חידון מוצרים עצמאי לשירות עצמי ל-Shopify עם תוכנית חינמית מ-$39/mo. Jebbit כעת חלק מה-CDP הארגוני של BlueConic.",
    h1: "RevenueHunt מול Jebbit",
    heroSubtitle:
      "Jebbit כעת חלק מפלטפורמת נתוני הלקוחות הארגונית של BlueConic, שנמכרת בדמו. RevenueHunt היא חידון מוצרים עצמאי לשירות עצמי: חינם להתחלה, מקורי ל-Shopify, באוויר עוד באותו יום.",
    intro: [
      "Jebbit בונה חידונים אינטראקטיביים, מוצאי מוצרים וזרימות העדפה כדי לאסוף נתונים מוצהרים (zero-party). היא נרכשה והיא כעת “Experiences by Jebbit”, חלק מפלטפורמת נתוני הלקוחות של BlueConic, מכוונת למותגי B2C ארגוניים ובינוניים (L'Oréal, Express, Heineken), אגנוסטית לפלטפורמה, ונמכרת דרך דמו ללא תמחור ציבורי או תוכנית חינמית.",
      "RevenueHunt היא חידון המלצת מוצרים עצמאי שבו משתמשים יותר מ-20,000 מותגים (4.9★, יותר מ-450 ביקורות). אינכם צריכים לקנות CDP כדי להשתמש בה: זה חידון ממוקד, Built-for-Shopify, עם תמחור שקוף, תוכנית חינמית והקמה באותו יום, בשירות עצמי, ללא שיחת מכירה.",
    ],
    rows: [
      { feature: "תוכנית חינמית", rh: RH.freePlan, them: "no" },
      { feature: "תמחור ציבורי שקוף", rh: RH.transparentPricing, them: "מותאם / בקשו דמו" },
      { feature: "מחיר התחלתי", rh: RH.startingPaid, them: "מונע-מכירות (ארגוני)" },
      { feature: "הקמה בשירות עצמי (ללא שיחת מכירה)", rh: "yes", them: "no" },
      { feature: "מוצר עצמאי (ללא צורך ברכישת פלטפורמה)", rh: "yes", them: "כעת חלק מ-CDP של BlueConic" },
      { feature: "ממליץ על מוצרים אמיתיים מהקטלוג שלכם", rh: RH.catalogRecs, them: "yes" },
      { feature: "אפליקציית Shopify מקורית (Built for Shopify)", rh: RH.shopifyNative, them: "דרך אינטגרציה" },
      { feature: "בונה חידונים מבוסס AI (הקמה ב-60 שניות)", rh: RH.aiBuilder, them: "no" },
      { feature: "חידונים ללא הגבלה", rh: RH.unlimitedQuizzes, them: "yes" },
      { feature: "לוגיקה מותנית / הסתעפות ללא הגבלה", rh: RH.branching, them: "yes" },
      { feature: "אנליטיקת נשירה שאלה-שאלה", rh: RH.analytics, them: "yes" },
      { feature: "לוכד zero-party / נתונים מוצהרים", rh: "yes", them: "yes" },
    ],
    whySwitch: [
      {
        title: "חידון עצמאי, לא רכישת פלטפורמה",
        body: "Jebbit היא כעת “Experiences by Jebbit” בתוך ה-CDP של BlueConic. RevenueHunt היא אפליקציה ממוקדת שאפשר להריץ בפני עצמה. ללא פלטפורמת נתוני לקוחות לקנות או להטמיע.",
      },
      {
        title: "שירות עצמי, לא שיחת מכירה",
        body: "Jebbit/BlueConic נמכרת דרך דמו וחוזים ארגוניים מותאמים ללא תמחור ציבורי. RevenueHunt היא התקן-וצא עם תוכנית חינמית ותמחור שקוף מ-$39 לחודש.",
      },
      {
        title: "בנויה ל-Shopify, באוויר עוד באותו יום",
        body: "RevenueHunt היא אפליקציית Built-for-Shopify עם סנכרון קטלוג בזמן אמת והוספה ישירה לעגלה, ו-AI Copilot שבונה חידון שלם ב-60 שניות. רוב הסוחרים משיקים עוד באותו יום.",
      },
      {
        title: "עדיין בעלות על ה-zero-party data שלכם",
        body: "כל תשובת חידון היא zero-party data שהקונים שלכם מתנדבים. RevenueHunt מסנכרנת תשובות ו-customer tags ל-Klaviyo, Mailchimp, Omnisend, HubSpot ועוד. אין צורך ב-CDP כדי לרתום אותם.",
      },
    ],
    bestFor:
      "Jebbit, כחלק מ-BlueConic, מתאימה למותגי B2C ארגוניים שרוצים חוויות נתונים מוצהרים מצומדות הדוקות לפלטפורמת נתוני לקוחות מלאה ומופעלות על פני ערוצים רבים, עם התקציב ל-CDP. אם אתם רוצים חידון Shopify עצמאי, משתלם ובשירות עצמי, RevenueHunt היא ההתאמה הטובה יותר.",
    migration:
      "המעבר מ-Jebbit, או ההערכה של BlueConic, פשוט. בנו את החידון שלכם ב-RevenueHunt (או צרו אותו עם ה-AI Copilot), הטמיעו אותו, וחברו את Klaviyo או את ה-CRM שלכם. רוב החנויות באוויר עוד באותו יום, וה-zero-party data שלכם ממשיך לזרום לכלי המייל שלכם.",
    faqs: [
      {
        question: "האם Jebbit עדיין זמינה בפני עצמה?",
        answer:
          "Jebbit היא כעת “Experiences by Jebbit”, חלק מפלטפורמת נתוני הלקוחות של BlueConic. RevenueHunt היא חידון מוצרים עצמאי שאפשר להשתמש בו בלי לקנות CDP: בשירות עצמי, עם תוכנית חינמית מ-$39 לחודש.",
      },
      {
        question: "כמה RevenueHunt עולה בהשוואה ל-Jebbit?",
        answer:
          "ל-RevenueHunt יש תוכנית חינמית ותוכניות בתשלום שקופות מ-$39 לחודש. Jebbit/BlueConic לא מפרסמת תמחור. זו פלטפורמה ארגונית, מונעת-מכירות, שמצטטת תמחור מותאם אחרי דמו.",
      },
      {
        question: "האם RevenueHunt אוספת zero-party (נתונים מוצהרים) כמו Jebbit?",
        answer:
          "כן. כל תשובת חידון היא zero-party data שהקונים שלכם מתנדבים. RevenueHunt מסנכרנת תשובות ו-customer tags ל-Klaviyo, Mailchimp, Omnisend, HubSpot ועוד לפילוח ולשיווק מותאם אישית.",
      },
      {
        question: "כמה זמן לוקחת ההקמה לעומת Jebbit?",
        answer:
          "רוב הסוחרים של RevenueHunt משיקים עוד באותו יום, וה-AI Quiz Copilot יכול לבנות חידון שלם בערך ב-60 שניות. Jebbit/BlueConic היא בדרך כלל הטמעה ארגונית מונעת-מכירות.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  nosto: {
    slug: "nosto",
    name: "Nosto",
    category: "פלטפורמת התאמה אישית ארגונית",
    title: "RevenueHunt מול Nosto: אלטרנטיבה לשירות עצמי",
    description:
      "RevenueHunt מול Nosto: חידון מוצרים ממוקד לשירות עצמי שלוכד zero-party data, עם תוכנית חינמית מ-$39/mo, לא חבילת התאמה אישית ארגונית.",
    h1: "RevenueHunt מול Nosto",
    heroSubtitle:
      "Nosto היא חבילת התאמה אישית, חיפוש ומרצ'נדייזינג ארגונית שנמכרת בדמו. RevenueHunt היא חידון מוצרים ממוקד מבוסס zero-party שאפשר להתקין היום: חינם להתחלה, באוויר עוד באותו יום.",
    intro: [
      "Nosto היא Commerce Experience Platform שמאגדת המלצות מוצרים מבוססות AI, חיפוש אתר מותאם אישית, מרצ'נדייזינג והתאמת תוכן למותגים ארגוניים ובינוניים. היא אגנוסטית לפלטפורמה, נמכרת דרך דמו עם תמחור ארגוני מותאם, ואין לה תוכנית חינמית או הרשמה בשירות עצמי. ההתאמה האישית שלה מונעת בעיקר מנתונים התנהגותיים ולא מחידונים.",
      "RevenueHunt היא חידון המלצת מוצרים ממוקד שבו משתמשים יותר מ-20,000 מותגים (4.9★, יותר מ-450 ביקורות). במקום חבילה ארגונית, היא מנחה קונים למוצר הנכון על ידי שאלה ישירה, ולכידת zero-party data שבבעלותכם, עם תמחור שקוף, תוכנית חינמית והקמה באותו יום, ללא צורך בשיחת מכירה.",
    ],
    rows: [
      { feature: "תוכנית חינמית", rh: RH.freePlan, them: "no" },
      { feature: "תמחור ציבורי שקוף", rh: RH.transparentPricing, them: "מותאם / בקשו דמו" },
      { feature: "מחיר התחלתי", rh: RH.startingPaid, them: "מונע-מכירות (ארגוני)" },
      { feature: "הקמה בשירות עצמי (ללא שיחת מכירה)", rh: "yes", them: "no" },
      { feature: "בנוי ייעודית לחידוני המלצת מוצרים", rh: RH.ecommerceRecs, them: "חבילת התאמה אישית, לא מונעת-חידון" },
      { feature: "לוכד zero-party data (הקונים אומרים לכם ישירות)", rh: "yes", them: "בעיקר התנהגותי / חיזויי" },
      { feature: "ממליץ על מוצרים אמיתיים מהקטלוג שלכם", rh: RH.catalogRecs, them: "yes" },
      { feature: "אפליקציית Shopify מקורית (Built for Shopify)", rh: RH.shopifyNative, them: "yes" },
      { feature: "בונה חידונים מבוסס AI (הקמה ב-60 שניות)", rh: RH.aiBuilder, them: "no" },
      { feature: "חידונים ללא הגבלה", rh: RH.unlimitedQuizzes, them: "לא כלי חידונים" },
      { feature: "אנליטיקת נשירה שאלה-שאלה", rh: RH.analytics, them: "yes" },
      { feature: "אינטגרציות Klaviyo ומייל / CRM", rh: RH.emailIntegrations, them: "yes" },
    ],
    whySwitch: [
      {
        title: "שירות עצמי, לא שיחת מכירה",
        body: "Nosto נמכרת דרך דמו וחוזים ארגוניים מותאמים ללא תמחור ציבורי. RevenueHunt היא התקן-וצא: בחרו תוכנית, בנו את החידון שלכם, ופרסמו, עם תוכנית חינמית ותמחור שקוף מ-$39 לחודש.",
      },
      {
        title: "zero-party data, לא רק מעקב התנהגותי",
        body: "Nosto מתאימה אישית בעיקר מאותות התנהגותיים וחיזוייים. RevenueHunt שואלת את הקונים ישירות דרך חידון, ולוכדת zero-party data שבבעלותכם ושאפשר לסנכרן ל-Klaviyo, Mailchimp, Omnisend ועוד.",
      },
      {
        title: "באוויר בדקות, לא בפריסה",
        body: "Nosto היא חבילה רב-מודולרית (המלצות, חיפוש, מרצ'נדייזינג) שבדרך כלל צריכה אונבורדינג. RevenueHunt היא אפליקציית חידון ממוקדת שרוב הסוחרים משיקים עוד באותו יום, עם AI Copilot שבונה חידון שלם ב-60 שניות.",
      },
      {
        title: "תמחור שמתאים למותג שצומח",
        body: "חבילות התאמה אישית ארגוניות מתומחרות לצוותים ולקטלוגים גדולים. RevenueHunt מתחילה בחינם ומתרחבת לפי תשובות מ-$39 לחודש, בדיוק במידה למותגי Shopify ו-Shopify Plus.",
      },
    ],
    bestFor:
      "Nosto מתאימה למותגים ארגוניים ובינוניים שרוצים חבילת התאמה אישית התנהגותית, חיפוש ומרצ'נדייזינג מלאה על פני חזיתות חנות מרובות, עם התקציב והצוות לפריסה ארגונית. אם אתם רוצים חידון מוצרים ממוקד, משתלם ובשירות עצמי שלוכד zero-party data, RevenueHunt היא ההתאמה הטובה יותר.",
    migration:
      "המעבר מ-Nosto פשוט. בנו את החידון שלכם ב-RevenueHunt (או צרו אותו עם ה-AI Copilot), הטמיעו אותו, וחברו את Klaviyo או את ה-CRM שלכם. ללא פרויקט הטמעה. רוב החנויות באוויר עוד באותו יום, וה-zero-party data שלכם זורם ישר לכלי המייל שלכם.",
    faqs: [
      {
        question: "כמה RevenueHunt עולה בהשוואה ל-Nosto?",
        answer:
          "ל-RevenueHunt יש תוכנית חינמית ותוכניות בתשלום שקופות מ-$39 לחודש. Nosto לא מפרסמת תמחור. זו פלטפורמה ארגונית, מונעת-מכירות, שמצטטת תמחור מותאם אחרי דמו.",
      },
      {
        question: "האם RevenueHunt היא חבילת התאמה אישית כמו Nosto?",
        answer:
          "לא, וזו הנקודה. Nosto מאגדת המלצות התנהגותיות, חיפוש אתר ומרצ'נדייזינג. RevenueHunt מתמקדת בחידוני המלצת מוצרים שלוכדים zero-party data, עם הקמה בשירות עצמי וללא שיחת מכירה.",
      },
      {
        question: "האם RevenueHunt משתמשת ב-zero-party data במקום במעקב התנהגותי?",
        answer:
          "כן. RevenueHunt מנחה את הקונים דרך חידון והם אומרים לכם את ההעדפות, המטרות וההגבלות שלהם ישירות: zero-party data שבבעלותכם, במקום להסיק כוונה מהתנהגות ומעוגיות.",
      },
      {
        question: "כמה זמן לוקחת ההקמה לעומת Nosto?",
        answer:
          "רוב הסוחרים של RevenueHunt משיקים עוד באותו יום, וה-AI Quiz Copilot יכול לבנות חידון שלם בערך ב-60 שניות. Nosto היא בדרך כלל הטמעה ארגונית מונעת-מכירות.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },

  tolstoy: {
    slug: "tolstoy",
    name: "Tolstoy",
    category: "פלטפורמת וידאו ניתן-לקנייה וחידונים",
    title: "RevenueHunt מול Tolstoy: אלטרנטיבה שמתחילה בחידון",
    description:
      "RevenueHunt מול Tolstoy: חידון מוצרים בנוי ייעודית עם מנוע המלצות אמיתי ו-zero-party data, מול פלטפורמת וידאו עם פיצ'ר חידון.",
    h1: "RevenueHunt מול Tolstoy",
    heroSubtitle:
      "Tolstoy היא פלטפורמת וידאו ניתן-לקנייה עם פיצ'ר חידון. RevenueHunt היא חידון המלצת מוצרים בנוי ייעודית, עם מנוע המלצות אמיתי ו-zero-party data.",
    intro: [
      "Tolstoy היא פלטפורמת קומרס מבוססת AI שבנויה סביב וידאו ניתן-לקנייה, מדיה שנוצרת ב-AI וסוכן קניות AI, עם תמחור מבוסס חשיפות מ-$19 לחודש. זה כלי חזק שמתחיל בווידאו. אבל חידון המוצרים הוא פיצ'ר משני לצד חוויית הווידאו.",
      "RevenueHunt היא חידון המלצת מוצרים שבו משתמשים יותר מ-20,000 מותגים (4.9★, יותר מ-450 ביקורות). היא מתחילה בחידון: מנוע המלצות ייעודי ממפה את התשובות של כל קונה למוצרים הנכונים מהקטלוג שלכם, לוכד zero-party data, וממיר בעמוד תוצאות מותאם אישית, על פני Shopify, WooCommerce, BigCommerce, Magento, Wix ועוד.",
    ],
    rows: [
      { feature: "תוכנית חינמית", rh: RH.freePlan, them: "yes (מוגבל)" },
      { feature: "מחיר התחלתי בתשלום", rh: RH.startingPaid, them: "$19/mo" },
      { feature: "מודל תמחור", rh: "תעריף קבוע, לפי תשובות", them: "לפי חשיפות + קרדיטי AI" },
      { feature: "בנוי ייעודית לחידוני המלצת מוצרים", rh: RH.ecommerceRecs, them: "חידון הוא פיצ'ר משני (וידאו תחילה)" },
      { feature: "מנוע המלצות ייעודי (הצבעה והחרגה, עמוד תוצאות)", rh: "yes", them: "קנייה מובלת-וידאו" },
      { feature: "ממליץ על מוצרים אמיתיים מהקטלוג שלכם", rh: RH.catalogRecs, them: "yes" },
      { feature: "לוכד zero-party data (הקונים אומרים לכם ישירות)", rh: "yes", them: "בעיקר נתוני מעורבות וידאו" },
      { feature: "אפליקציית Shopify מקורית (Built for Shopify)", rh: RH.shopifyNative, them: "yes" },
      { feature: "עובד על WooCommerce, BigCommerce, Magento, Wix ועוד", rh: RH.multiPlatform, them: "no" },
      { feature: "בונה חידונים מבוסס AI (הקמה ב-60 שניות)", rh: RH.aiBuilder, them: "AI ממוקד-וידאו" },
      { feature: "אנליטיקת נשירה שאלה-שאלה", rh: RH.analytics, them: "yes" },
      { feature: "אינטגרציות Klaviyo ומייל / CRM", rh: RH.emailIntegrations, them: "yes" },
    ],
    whySwitch: [
      {
        title: "כלי שמתחיל בחידון, לא תוסף וידאו",
        body: "Tolstoy היא פלטפורמת וידאו ניתן-לקנייה שבה החידון הוא פיצ'ר משני. RevenueHunt בנויה ייעודית לחידוני המלצת מוצרים, עם מנוע המלצות ייעודי ועמוד תוצאות ממוקד-המרה.",
      },
      {
        title: "מנוע המלצות אמיתי",
        body: "RevenueHunt מדרגת את המוצרים, הריאציות והקולקציות המדויקים מהקטלוג החי שלכם באמצעות מודל הצבעה-והחרגה, עם בלוקי תוצאות מותנים והוספה ישירה לעגלה. עומק שחידון של כלי וידאו לא משתווה אליו.",
      },
      {
        title: "zero-party data שבבעלותכם",
        body: "RevenueHunt לוכדת את מה שהקונים אומרים לכם (העדפות, מטרות, הגבלות) ומסנכרנת אותו ל-Klaviyo, Mailchimp, Omnisend ועוד לפילוח. החוזק של Tolstoy הוא מעורבות וידאו, לא נתוני חידון מובנים.",
      },
      {
        title: "מכרו בכל מקום, מוכח בקנה מידה",
        body: "RevenueHunt רצה באופן מקורי על Shopify וגם על WooCommerce, BigCommerce, Magento, Wix, Squarespace ועצמאי, מהימנה על ידי יותר מ-20,000 מותגים עם 4.9★ מיותר מ-450 ביקורות.",
      },
    ],
    bestFor:
      "Tolstoy היא בחירה חזקה אם האסטרטגיה שלכם מובלת-וידאו (וידאו ניתן-לקנייה, UGC, TikTok Shop) וחידון הוא נחמד-שיהיה. אם אתם רוצים חידון המלצת מוצרים ייעודי עם מנוע המלצות אמיתי ו-zero-party data, RevenueHunt היא ההתאמה הטובה יותר.",
    migration:
      "אם הרצתם חידון בתוך Tolstoy, המעבר מהיר. בנו אותו מחדש בבונה של RevenueHunt (או צרו אותו ב-60 שניות עם ה-AI Copilot שלנו), הטמיעו אותו, וחברו את Klaviyo. רוב החנויות באוויר עוד באותו יום, וצוות התמיכה שלנו עוזר לכם לעבור.",
    faqs: [
      {
        question: "האם RevenueHunt טובה יותר מ-Tolstoy לחידון מוצרים?",
        answer:
          "לחידון המלצת מוצרים ייעודי, כן. RevenueHunt בנויה ייעודית לכך, עם מנוע המלצות אמיתי ו-zero-party data. Tolstoy מתחילה בווידאו, עם החידון כפיצ'ר משני. לווידאו ניתן-לקנייה ספציפית, Tolstoy בנויה ייעודית.",
      },
      {
        question: "האם Tolstoy עושה חידוני המלצת מוצרים?",
        answer:
          "כן, כפיצ'ר משני לצד הווידאו הניתן-לקנייה שלה. RevenueHunt מתחילה בחידון: היא בנויה סביב החידון ומנוע ההמלצות, עמוד התוצאות ולכידת ה-zero-party data שלו.",
      },
      {
        question: "האם RevenueHunt תומכת גם בווידאו?",
        answer:
          "כן. אתם יכולים להוסיף וידאו לשאלות החידון ולעמוד התוצאות המותאם אישית. RevenueHunt מתחילה בחידון ולא פלטפורמת וידאו, כך שהווידאו תומך בחידון ולא להיפך.",
      },
      {
        question: "האם אני יכול ללכוד zero-party data ולשלוח אותו ל-Klaviyo?",
        answer:
          "כן. RevenueHunt לוכדת תשובות חידון כ-zero-party data ומסנכרנת תשובות ו-customer tags ל-Klaviyo, Mailchimp, Omnisend, HubSpot ועוד לפילוח ולשיווק מותאם אישית.",
      },
    ],
    verifiedAsOf: "2026-06-07",
  },
};
