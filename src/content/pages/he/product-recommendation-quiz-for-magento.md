---
title: "חידון המלצת מוצרים ל-Magento"
description: "חידון המלצת מוצרים ל-Magento - המודול כבר אינו נתמך. הנה החלופות שלכם: החידון העצמאי, או מעבר ל-Shopify או WooCommerce."
pubDate: 2020-11-27T15:51:27Z
updatedDate: 2026-05-18T00:00:00Z
legacySlug: "product-recommendation-quiz-for-magento"
legacyId: 1847
legacyUrl: "https://revenuehunt.com/product-recommendation-quiz-for-magento/"
featuredImage: "/img/pages/product-recommendation-quiz-for-magento/plus-background.webp"
draft: false
lang: "he"
---

### חידון המלצת מוצרים ל-Magento - מצב נוכחי

ההרחבה הנייטיב של Magento לחידון המלצת המוצרים של RevenueHunt **כבר אינה נתמכת באופן פעיל.** אם אתם מנהלים חנות Magento היום ורוצים חידון מותאם אישית שממליץ על מוצרים ולוכד לידים, יש לכם שלושה נתיבים שעובדים - ונעבור על כולם למטה.

העמוד הזה קיים כדי שתוכלו לנחות עליו מחיפוש בגוגל, להבין את המצב בכנות, ולבחור את הנתיב שמתאים לחנות שלכם בלי לבזבז זמן על התקנה ללא מוצא.

### שלוש האפשרויות שלכם ל-Magento

#### אפשרות 1 - השתמשו בחידון העצמאי (מומלץ לרוב חנויות Magento)

[חידון המלצת המוצרים העצמאי](/product-recommendation-quiz-standalone-google-product-feed/) שלנו מתחבר לקטלוג Magento שלכם דרך Google Product Feed או ייצוא CSV. הקונים עוברים את החידון בעמוד שמתארח על ידי בונה החידונים (או iframe מוטמע בחנות Magento שלכם), וההמלצות מקשרות ישירות בחזרה לעמודי פרטי המוצר שלכם. העגלה והקופה נשארות נייטיב ל-Magento - החידון מטפל רק בשכבת הגילוי.

זו הבחירה הנכונה אם אתם רוצים לשמור את ה-backend, התשתית וההרחבות הקיימות של Magento שלכם ללא שינוי. ההגדרה בדרך כלל לוקחת פחות משעה, אתם מקבלים את כל אינטגרציות האנליטיקה (GA4, Meta Pixel, Klaviyo), ואין מודול Magento לתחזק.

#### אפשרות 2 - העבירו את החנות ל-Shopify או WooCommerce

אם שקלתם מעבר פלטפורמה, זה זרז חזק. הן ל-[Shopify](/product-recommendation-quiz-shopify/) והן ל-[WooCommerce](/product-recommendation-quiz-woocommerce/) יש אינטגרציות RevenueHunt מהשורה הראשונה עם אנליטיקה עמוקה יותר, סנכרון עגלה נייטיב, ופיתוח תכונות מתמשך. רוב המעברים מ-Magento → Shopify או Magento → WooCommerce לוקחים 4 עד 12 שבועות, תלוי בגודל הקטלוג ובהתאמות האישיות.

אנחנו לא יכולים לעזור עם המעבר עצמו, אבל ברגע שאתם על Shopify או WooCommerce, התקנת החידון לוקחת פחות מ-15 דקות.

#### אפשרות 3 - בנו אינטגרציה משלכם מול ה-REST API שלנו

אם לצוות שלכם יש יכולת פיתוח PHP ל-Magento ואתם רוצים אינטגרציה מותאמת אישית לעומק, ה-REST API ומשטח ה-webhook שלנו זמינים בכל תוכנית בתשלום. אתם מנהלים את אינטגרציית החנות; אנחנו מריצים את מנוע החידון, ניקוד התוצאות והאנליטיקה. כתבו ל[צוות התמיכה](https://docs.revenuehunt.com/) שלנו לגישת API ולמפרט OpenAPI.

### למה הפסקנו את מודול Magento

קצב הגרסאות והשינויים הארכיטקטוניים של Magento (סוף החיים של Magento 1, המעבר ל-Adobe Commerce, כיוון PWA Studio, השינויים השוברים החוזרים ב-API ההרחבות של Magento 2.x) הפכו את התחזוקה של מודול נייטיב איכותי ליקרה בהשוואה לנפח חנויות Magento שהשתמשו בו. בחרנו להוציא משימוש את המודול הנייטיב במקום לשלוח גרסה חצי-עובדת, ומיקדנו את ההנדסה בנתיבי Shopify, WooCommerce, BigCommerce, והעצמאי.

אם אתם לקוח נוכחי של מודול Magento שהוצא משימוש, הוא ממשיך לתפקד עבור התקנות קיימות אבל לא מקבל עדכונים נוספים. אנחנו ממליצים לתכנן מעבר לאחת משלוש האפשרויות למעלה ב-12 החודשים הקרובים.

### צפו בחידון חי לפני שאתם מחליטים

הדרך המהירה ביותר להבין מה חידון המלצת מוצרים עושה להמרות היא לעבור אחד. לחנות הדמו שלנו יש 12 דוגמאות עובדות בוורטיקלים שונים:

-   [חידון טיפוח עור](https://productrecommendationquiz.com/pages/skin-analysis?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=product-recommendation-quiz-for-magento) - הסתעפות ויזואלית, תוצאות מרובות מוצרים
-   [חידון תוספי תזונה](https://productrecommendationquiz.com/pages/supplements-quiz?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=product-recommendation-quiz-for-magento) - וורטיקל בריאות ורווחה
-   [התאמת גוון מייקאפ בסיס](https://productrecommendationquiz.com/pages/foundation-match?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=product-recommendation-quiz-for-magento) - שאלות מבוססות תמונות
-   [כל 12 דוגמאות החידון →](https://productrecommendationquiz.com/?utm_source=revenuehunt.com&utm_medium=referral&utm_campaign=product-recommendation-quiz-for-magento)

כל אחד הוא חידון RevenueHunt עובד שאתם יכולים להשלים מקצה לקצה. ההתנהגות זהה ללא קשר לנתיב האינטגרציה שאתם בוחרים.

### זמין גם ב

-   [Shopify](/product-recommendation-quiz-shopify/) - נתמך במלואו, האינטגרציה הפעילה ביותר
-   [WooCommerce](/product-recommendation-quiz-woocommerce/) - נתמך במלואו
-   [BigCommerce](/product-recommendation-quiz-bigcommerce/) - נתמך במלואו
-   [Wix Stores](/product-recommendation-quiz-wix-stores/)
-   [Squarespace](/product-recommendation-quiz-for-squarespace-commerce/)
-   [עצמאי (Google Product Feed)](/product-recommendation-quiz-standalone-google-product-feed/) - הנתיב המומלץ לחנויות Magento הנוכחיות

### שאלות נפוצות

<details>
<summary><strong>האם עדיין קיים חידון המלצת מוצרים שעובד ל-Magento?</strong></summary>

מודול Magento הנייטיב כבר אינו מתוחזק, אבל אתם יכולים להשתמש בחידון העצמאי שלנו עם ייצוא Google Product Feed מ-Magento, או להעביר את החנות שלכם לפלטפורמה נתמכת. התקנות קיימות של המודול הנייטיב ממשיכות לרוץ אבל לא מקבלות עדכונים.
</details>

<details>
<summary><strong>האם אני עדיין יכול להתקין את מודול Magento הישן?</strong></summary>

אם יש לכם את חבילת המודול, היא תותקן ותרוץ על חנויות Magento 2 קיימות, אבל אנחנו לא מספקים תמיכת התקנה או עדכוני תאימות. אנחנו לא ממליצים על התקנות חדשות.
</details>

<details>
<summary><strong>מהו נתיב המעבר מ-Magento ל-Shopify או WooCommerce?</strong></summary>

רוב הסוכנויות מטפלות במעברים מ-Magento → Shopify ב-4 עד 12 שבועות, תלוי בגודל הקטלוג, בהתאמות האישיות ובאינטגרציות. ברגע שעברתם, התקנת החידון בפלטפורמה החדשה לוקחת פחות מ-15 דקות.
</details>

<details>
<summary><strong>האם החידון העצמאי עובד עם נתוני קטלוג Magento?</strong></summary>

כן. ייצאו את קטלוג Magento שלכם כ-Google Product Feed (ל-Magento יש אינטגרציה נייטיב עם Google Shopping) או כ-CSV שטוח, הפנו את בונה החידונים שלנו אל כתובת ה-URL של הפיד, והתאמות המוצרים נשארות מסונכרנות אוטומטית.
</details>

<details>
<summary><strong>איך ההמלצות מקשרות בחזרה לעמודי מוצר של Magento?</strong></summary>

כל כרטיס מוצר בעמוד תוצאות החידון מקשר ישירות לעמוד פרטי המוצר שלכם ב-Magento באמצעות כתובת ה-URL של המוצר מהפיד שלכם. העגלה והקופה נשארות לחלוטין בחנות Magento שלכם.
</details>

<details>
<summary><strong>האם תמיכה ב-Magento אי פעם תחזור?</strong></summary>

כרגע אין לנו תוכניות להחיות את המודול הנייטיב. מפת הדרכים ההנדסית שלנו ממוקדת ב-Shopify, WooCommerce, BigCommerce, והנתיב העצמאי. אם אתם סוחר Magento גדול ותמיכת המודול קריטית, צרו קשר - אנחנו מעריכים פרויקטי אינטגרציה ארגוניים מקרה לגופו.
</details>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "האם עדיין קיים חידון המלצת מוצרים שעובד ל-Magento?", "acceptedAnswer": {"@type": "Answer", "text": "מודול Magento הנייטיב כבר אינו מתוחזק, אבל אתם יכולים להשתמש בחידון העצמאי שלנו עם ייצוא Google Product Feed מ-Magento, או להעביר את החנות שלכם לפלטפורמה נתמכת. התקנות קיימות של המודול הנייטיב ממשיכות לרוץ אבל לא מקבלות עדכונים."}},
    {"@type": "Question", "name": "האם אני עדיין יכול להתקין את מודול Magento הישן?", "acceptedAnswer": {"@type": "Answer", "text": "אם יש לכם את חבילת המודול, היא תותקן ותרוץ על חנויות Magento 2 קיימות, אבל אנחנו לא מספקים תמיכת התקנה או עדכוני תאימות. אנחנו לא ממליצים על התקנות חדשות."}},
    {"@type": "Question", "name": "מהו נתיב המעבר מ-Magento ל-Shopify או WooCommerce?", "acceptedAnswer": {"@type": "Answer", "text": "רוב הסוכנויות מטפלות במעברים מ-Magento ל-Shopify ב-4 עד 12 שבועות, תלוי בגודל הקטלוג, בהתאמות האישיות ובאינטגרציות. ברגע שעברתם, התקנת החידון בפלטפורמה החדשה לוקחת פחות מ-15 דקות."}},
    {"@type": "Question", "name": "האם החידון העצמאי עובד עם נתוני קטלוג Magento?", "acceptedAnswer": {"@type": "Answer", "text": "כן. ייצאו את קטלוג Magento שלכם כ-Google Product Feed או כ-CSV שטוח, הפנו את בונה החידונים שלנו אל כתובת ה-URL של הפיד, והתאמות המוצרים נשארות מסונכרנות אוטומטית."}},
    {"@type": "Question", "name": "איך ההמלצות מקשרות בחזרה לעמודי מוצר של Magento?", "acceptedAnswer": {"@type": "Answer", "text": "כל כרטיס מוצר בעמוד תוצאות החידון מקשר ישירות לעמוד פרטי המוצר שלכם ב-Magento באמצעות כתובת ה-URL של המוצר מהפיד שלכם. העגלה והקופה נשארות לחלוטין בחנות Magento שלכם."}},
    {"@type": "Question", "name": "האם תמיכה ב-Magento אי פעם תחזור?", "acceptedAnswer": {"@type": "Answer", "text": "כרגע אין לנו תוכניות להחיות את המודול הנייטיב. מפת הדרכים ההנדסית שלנו ממוקדת ב-Shopify, WooCommerce, BigCommerce, והנתיב העצמאי. אם אתם סוחר Magento גדול ותמיכת המודול קריטית, צרו קשר."}}
  ]
}
</script>

### צריכים עזרה?

עיינו ב[אתר התיעוד](https://docs.revenuehunt.com/) שלנו למדריכי הגדרה של החידון העצמאי, או [צרו איתנו קשר](/contact/) אם תרצו לדבר על אינטגרציית Magento מותאמת אישית.
