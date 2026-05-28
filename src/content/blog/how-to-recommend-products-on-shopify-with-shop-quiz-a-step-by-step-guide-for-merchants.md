---
title: "Begginers Guide to Recommending Products on Shopify (with Shop Quiz)"
description: "Discover how Shop Quiz can boost your Shopify store by providing personalized product recommendations, increasing conversions, and enhancing customer satisfaction."
pubDate: 2024-10-14T10:00:34Z
updatedDate: 2026-03-25T21:14:30Z
tags: []
categories:
  - "eCommerce"
  - "Shopify Apps"
  - "Tips &amp; Tricks"
author: "Paulina Chodura"
legacySlug: "how-to-recommend-products-on-shopify-with-shop-quiz-a-step-by-step-guide-for-merchants"
legacyId: 10201
legacyUrl: "https://revenuehunt.com/how-to-recommend-products-on-shopify-with-shop-quiz-a-step-by-step-guide-for-merchants/"
featuredImage: "/img/blog/how-to-recommend-products-on-shopify-with-shop-quiz-a-step-by-step-guide-for-merchants/49.webp"
draft: false
---

There are several ways to recommend products to customers in your Shopify store.

-   You can use **product recommendation widgets** on product or collection pages, which provide suggestions based on browsing history or related products.
-   Another common approach is upselling or **cross-selling complementary products during checkout** to increase average order value.
-   **Bundles** and sets of complementary items can also encourage customers to buy more by offering related products together at a discount.
-   **Pop-ups** that recommend items based on a customer's shopping cart behavior or recent browsing are also effective.

However, one of the most impactful ways to recommend products is through **personalized quizzes** like the ones built with [Shop Quiz: Product Recommendation Quiz](https://revenuehunt.com/product-recommendation-quiz/).

These quizzes engage customers by asking them targeted questions and providing tailored product suggestions based on their answers. This interactive experience not only makes shopping more fun but also ensures that the products recommended are precisely what the customer is looking for, leading to higher conversion rates and better overall satisfaction.

![Begginersguide torecommendations](/img/blog/how-to-recommend-products-on-shopify-with-shop-quiz-a-step-by-step-guide-for-merchants/begginersguide-torecommendations-featured-image.webp)

In this guide, you'll learn how to recommend products in Shopify using an interactive quiz built with Shop Quiz: Product Recommendation Quiz. Let's get started!

## Overview of Product Recommendation

[Shop Quiz: Product Recommendation Quiz](https://revenuehunt.com/product-recommendation-quiz/) provides tailored recommendations by analyzing the customer's responses throughout the quiz. The results page can display product variants, main products, and even subscription products if integrated with ReCharge.

Note that it cannot directly recommend collections of products, though it's possible to recommend products within a specific collection.

### Voting System Algorithm

The product recommendation algorithm functions as a **voting system**, ensuring that customers receive the most relevant product suggestions based on their choices throughout the quiz:

-   Product variants are linked to quiz choices.
-   Each time a customer selects a choice, all linked products receive ⬆️ one vote.
-   The results page displays the **most voted product variants**, sorted by the number of votes.
-   If there's a tie in votes, the order is randomized.

This voting-based approach allows you to offer personalized, highly relevant recommendations.

_For example, if a customer selects 'dry skin' as their concern and '30s and above' as their age group, products linked to these choices, such as a hydrating serum or age-specific moisturizer, will each receive a vote. Products that are common across multiple answers (e.g., both 'dry skin' and '30s and above') will accumulate more votes, making them more likely to appear in the final results. The final results will display the products with the highest votes, ensuring the recommendations are tailored specifically to the customer's needs._

### Product Inclusion and Exclusion

The **link product/collection or exclude product/collection** settings are essential for controlling which products are prioritized or filtered out in the quiz. By strategically including or excluding products, you can ensure that the recommendations match customer preferences and business goals, providing a more refined and relevant shopping experience.

#### **✅ Inclusion**

By using the **include** field in the quiz setup, specific products, collections, or tags can be upvoted, improving their chances of appearing in the recommendations. Here are ways to include products:

-   **Product Variants**: Receive a vote when the linked choice is selected.
-   **Collections or Tags**: Every product linked via a collection or tag receives a vote when chosen.
-   **All Variants of a Product**: You can opt for all product variants to be upvoted together.

> **⚠️ Note**: If the same product is linked through different inclusion paths, it may receive multiple votes from a single choice.

#### **❌ Exclusion**

The **exclude** feature allows you to filter out products that may not be suitable based on customer preferences, such as avoiding allergens or staying within a price range. If a product is excluded at any point, it will never appear in the recommendations, even if it is upvoted in other quiz responses.

## Setting Up Product Recommendations

<div class="aspect-video overflow-hidden rounded-xl bg-slate-900 not-prose my-6"><button type="button" class="yt-facade group relative block h-full w-full cursor-pointer overflow-hidden" data-yt-id="bdt75wZnAZA" aria-label="Play video"><picture><source srcset="https://i.ytimg.com/vi_webp/bdt75wZnAZA/maxresdefault.webp" type="image/webp" /><img src="https://i.ytimg.com/vi/bdt75wZnAZA/maxresdefault.jpg" alt="" width="1280" height="720" loading="lazy" decoding="async" class="h-full w-full object-cover" /></picture><span class="absolute inset-0 flex items-center justify-center bg-black/10 transition group-hover:bg-black/20"><span class="flex h-20 w-20 items-center justify-center rounded-full bg-black/70 shadow-lg transition group-hover:scale-105 group-hover:bg-[#FF0000]"><svg class="ml-0.5 h-9 w-9 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg></span></span></button></div>

Before proceeding, ensure you have added all the necessary questions and choices to your quiz.

<div style="margin:24px 0;padding:18px 24px;background:#f8fafc;border-left:4px solid #16161D;border-radius:6px;">
  <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;">Tip</p>
  <p style="margin:0 0 6px;font-size:15px;line-height:1.55;color:#0f172a;">Check <a href="https://docs.revenuehunt.com/how-to-guides/create-first-quiz/" style="color:#16161D;text-decoration:underline;">this guide</a> for building your first product quiz with <a href="https://revenuehunt.com/product-recommendation-quiz/" style="color:#16161D;text-decoration:underline;">Shop Quiz: Product Recommendation Quiz</a>.</p>
</div>

Once that is done, you can follow these steps to configure product recommendations in your quiz:

**1️⃣ Link Products to Choices**: Navigate to the [Link Products](https://docs.revenuehunt.com/reference/quiz-builder/#link-products) or [Link Collections](https://docs.revenuehunt.com/reference/quiz-builder/#link-collections) tab in your quiz setup. Link relevant products or collections to each choice to ensure they receive votes.

**2️⃣ Edit the Results Page**: In the [Results Page](https://docs.revenuehunt.com/reference/quiz-builder/#results-page) tab, add content and product blocks. Products can be displayed using either a **Product Block** (sorted by the number of votes) or **Product Slot Blocks** (ideal for recommending items in a clear order, such as a skincare routine).

![quiz builder results page add block menu](/img/blog/how-to-recommend-products-on-shopify-with-shop-quiz-a-step-by-step-guide-for-merchants/manual_quizbuilder_resultspage_addblockmenu.webp)

**3️⃣ Test and Troubleshoot**: Test your quiz using the **Preview** function and adjust as needed. You can use the built-in search bar in the [Metrics > Responses](https://docs.revenuehunt.com/how-to-guides/troubleshoot-product-results/) section to identify any issues.

![quiz builder top menu](/img/blog/how-to-recommend-products-on-shopify-with-shop-quiz-a-step-by-step-guide-for-merchants/manual_quizbuilder_topmenu.webp)

> **🛠️ Troubleshooting Tips**: If you encounter unexpected results, check that all choices are correctly linked to products. Make sure no products are unintentionally excluded, and that each quiz choice has at least one product linked. Use the responses data to pinpoint which selections might be causing incorrect or missing recommendations.

### Refine Your Recommendations

To make your recommendations as precise as possible, consider these refinements:

**🚧 Minimum Number of Votes**: You can set a threshold so that only products with a certain number of votes appear on the results page.

_For example, if you set the minimum number of votes to 3 and a product receives only 2 votes, it will not be displayed in the final recommendations. This helps to ensure that only the most relevant and popular products are shown to customers._

**❌ Use Exclusions**: To make sure that only the most relevant products are recommended, use exclusions when necessary.

_For example, if a customer selects 'sensitive skin' as a choice, you can exclude products that contain common irritants like fragrances or harsh chemicals to ensure that only suitable products are recommended._

### Special Features for Recommendations

In this section, we will explore some advanced features of the Shop Quiz app that help in creating more tailored product recommendations. These features can be particularly useful for providing a structured shopping experience, such as building multi-step routines or handling complex product matrices.

#### **Skincare Routine with Product Slots**

To recommend a multi-step routine, use **Product Slot Blocks**. Each slot can represent a different category (e.g., cleanser, toner, serum) and will recommend the top-voted product for that step. This approach is particularly useful for industries like skincare, where a structured product sequence is beneficial.

<div style="margin:24px 0;padding:18px 24px;background:#f8fafc;border-left:4px solid #16161D;border-radius:6px;">
  <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;">Tip</p>
  <p style="margin:0 0 6px;font-size:15px;line-height:1.55;color:#0f172a;">Check <a href="https://docs.revenuehunt.com/how-to-guides/recommend-skincare-routine-slots/" style="color:#16161D;text-decoration:underline;">this guide</a> to learn how to set up slots step-by-step.</p>
</div>

#### **Matrix Criteria Recommendations**

For more complex criteria, such as combining age and skin type, create collections that cater to different segments (e.g., teenagers with oily skin). You can use a product matrix to link quiz questions and show recommendations that meet multiple requirements.

![how to recommend products matrix table2](/img/blog/how-to-recommend-products-on-shopify-with-shop-quiz-a-step-by-step-guide-for-merchants/how_to_recommend_products_table3.webp)

For very complex product matrices, consider using conditional logic to create branching paths that offer even more tailored recommendations.

<div style="margin:24px 0;padding:18px 24px;background:#f8fafc;border-left:4px solid #16161D;border-radius:6px;">
  <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;">Tip</p>
  <p style="margin:0 0 6px;font-size:15px;line-height:1.55;color:#0f172a;">Check <a href="https://docs.revenuehunt.com/how-to-guides/recommend-product-matrix/" style="color:#16161D;text-decoration:underline;">this guide</a> to learn more about setting up complex quizzes.</p>
</div>

#### **Recommending Subscription Products**

Integrating ReCharge Subscriptions can enhance your recommendation strategy by promoting subscription products. Here's how to do it:

-   Start by navigating to the [Connect](https://docs.revenuehunt.com/reference/quiz-builder/#connect) tab in your quiz dashboard, then scroll down to the ReCharge section and click on the \`connect\` button. After connecting, [run a catalog sync](https://docs.revenuehunt.com/how-to-guides/sync-catalog/) to ensure your subscription products are updated.
-   In the [Link Products](https://docs.revenuehunt.com/reference/quiz-builder/#link-products) tab, associate subscription products with quiz choices.
-   Use the Results Page settings > Basic > [Checkout Settings](https://docs.revenuehunt.com/how-to-guides/change-checkout-settings/) to either direct users to add subscription items directly to their cart.

**📝 Other Subscription Apps**: If you are using a different subscription app instead of ReCharge, you can still guide customers towards a subscription option by creating one-time purchase versions of your subscription products. Link these products to the quiz choices, and set the checkout settings to direct users to the product page where they can choose the subscription option.

<div style="margin:24px 0;padding:18px 24px;background:#f8fafc;border-left:4px solid #16161D;border-radius:6px;">
  <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;">Tip</p>
  <p style="margin:0 0 6px;font-size:15px;line-height:1.55;color:#0f172a;">Check <a href="https://docs.revenuehunt.com/how-to-guides/recommend-subscription-products/" style="color:#16161D;text-decoration:underline;">this guide</a> for information about recommending subscription products.</p>
</div>

#### **Ensuring Specific Products Always Appear**

If you want **certain products to always show up on the results page**, you can do so to highlight key products, ensure new arrivals or bestsellers are consistently featured, or to align with specific promotional goals. There are a few ways to achieve this, for example, you can:

⬆️ Link Products to Every Choice in the Quiz > This will ensure your product receives the most votes and consistently appears in the recommendations.

or

🎰 Create a Dedicated Product Slot > Use a separate slot on the results page to feature specific products, ensuring consistent visibility. Ensure that the product gets at least one vote in the end by linking it to every choice in one of the questions.

Highlighting a product can be beneficial if you want to ensure visibility for new arrivals, promotional items, or products with high profit margins. However, make sure not to recommend too many products at once, as this can confuse the customer and potentially lower sales. Focusing on a few key items helps draw customer attention effectively and makes the purchasing decision easier.

<div style="margin:24px 0;padding:18px 24px;background:#f8fafc;border-left:4px solid #16161D;border-radius:6px;">
  <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;">Tip</p>
  <p style="margin:0 0 6px;font-size:15px;line-height:1.55;color:#0f172a;">Check <a href="https://docs.revenuehunt.com/how-to-guides/always-recommend-the-same-product/" style="color:#16161D;text-decoration:underline;">this guide</a> for step-by-step instructions on how to always recommend certain products.</p>
</div>

### Adding Explanations to Recommendations

Our app doesn't automatically provide explanations for recommendations, but you can achieve this manually with:

**  
@ Information Recalls**: Display answers from the quiz in a content block to explain recommendations.

You can use [information recalls](https://docs.revenuehunt.com/how-to-guides/use-information-recalls/) to display specific customer answers as part of the recommendation, such as 'You answered \`dry skin\`, which is why we recommend this hydrating moisturizer.' This is a straightforward way to provide context to the recommendation, making it clear and easy to understand.

**🔀 Block Logic**: Show or hide text based on customer responses to help contextualize why a particular product was suggested.

Use [block logic](https://docs.revenuehunt.com/how-to-guides/use-block-logic/) to display different text based on customer responses. For example, if a customer selects 'dry skin,' the content block could automatically adjust to show, 'Since you mentioned dry skin, this moisturizer is ideal for keeping your skin hydrated.' This helps in making the experience more seamless and relevant to the customer's needs.

**</> Custom JavaScript**: For more sophisticated explanations, use custom JavaScript to display product-specific text.

Using [JavaScript](https://docs.revenuehunt.com/how-to-guides/add-javascript/), you can dynamically insert the customer's answers into the recommendation text, such as 'Based on your response for dry skin, we suggest this hydrating moisturizer.' This method is more flexible and allows for greater customization, ensuring each customer sees a message tailored specifically to their input.

## Final Thoughts

As a Shopify merchant, you know how important it is to connect your customers with the right products. There are various ways to recommend products, such as widgets, cross-selling, pop-ups, and personalized emails, but using personalized shop quizzes stands out as the most effective.

By using [Shop Quiz: Product Recommendation Quiz](https://revenuehunt.com/product-recommendation-quiz/), you can make that connection more personal and effective. The app's voting system and inclusion/exclusion settings let you customize each recommendation, while specialized product blocks help make the **shopping journey feel intuitive and helpful.**

> _Shop Quiz helps connect customers to the right products, increasing the chance of sales and satisfaction._

When customers see products that match their needs at just the right time, they're more likely to buy - and be happy with their purchase. Whether you want to guide them through a simple product list, build a multi-step skincare routine, or promote subscriptions, [Shop Quiz: Product Recommendation Quiz](https://revenuehunt.com/product-recommendation-quiz/) gives you the tools to make those recommendations feel personal and meaningful.

Ready to create your personalized quiz? Start by outlining your customer journey and identifying key decision points. Then use the voting system, product slots, and other advanced features to offer your customers an experience they'll love.
