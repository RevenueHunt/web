---
title: "Custom CSS and JavaScript for Product Recommendation Quizzes"
description: "Learn how to customize your Shop Quiz: Product Recommendation Quiz with CSS and JavaScript to enhance brand consistency, improve user experience, and add unique functionalities."
pubDate: 2024-09-12T06:17:01Z
updatedDate: 2026-03-25T21:17:26Z
tags: []
categories:
  - "App New Features"
  - "Tips &amp; Tricks"
author: "Paulina Chodura"
legacySlug: "custom-css-and-javascript-for-product-recommendation-quizzes"
legacyId: 9740
legacyUrl: "https://revenuehunt.com/custom-css-and-javascript-for-product-recommendation-quizzes/"
featuredImage: "/img/blog/custom-css-and-javascript-for-product-recommendation-quizzes/52.png"
draft: false
---

<iframe loading="lazy" class="alignnone size-full" title="YouTube video player" src="https://www.youtube.com/embed/RpwgLOL4Uy8?si=kXP61YfyliQBWQR4" width="100%" height="400px" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe>

Every business is unique, and so are its customers. At [RevenueHunt](https://revenuehunt.com/), we understand the importance of personalization in eCommerce. Our [Shop Quiz: Product Recommendation Quiz](https://revenuehunt.com/product-recommendation-quiz/) is designed to help businesses offer tailored recommendations to their customers, enhancing the shopping experience and boosting conversion rates.

While our platform offers a robust set of customization options out-of-the-box, we recognize that some **businesses need that extra level of customization** to truly align with their brand identity. This is where quizzes that allow custom **CSS and JavaScript** designs come into play.

![Custom CSS and JavaScript for Product Recommendation Quizzes - image 1](/img/blog/custom-css-and-javascript-for-product-recommendation-quizzes/featuredimageCSS1.gif)

This isn't just about tweaking colors or moving a button around - it's about taking control. Want your quiz to feel like it's part of your brand's story? Or maybe you're ready to experiment with new interactive features that go beyond the standard options? Whether you're a seasoned coder or just dipping your toes into customization, this guide will walk you through the essentials.

No one said your quiz had to look or behave like anyone else's. Why not push the boundaries and see what you can create?

> **Why Customize Your Quiz with CSS and JavaScript?**
> 
> Customizing your [Shop Quiz: Product Recommendation Quiz](https://revenuehunt.com/product-recommendation-quiz/) with CSS and JavaScript allows you to:
> 
> **🏷️ Maintain Brand Consistency**: Ensure the quiz matches your brand's look and feel.
> 
> **💪 Enhance User Experience**: Improve the quiz interface to make it more user-friendly.
> 
> **✨ Add Unique Functionalities**: Introduce new features that are not available by default.
> 
> ![Custom CSS and JavaScript for Product Recommendation Quizzes - image 2](/img/blog/custom-css-and-javascript-for-product-recommendation-quizzes/Screenshot-2020-09-29-at-20.34.03-1024x594.png)

**Jump to:**

**[🎨 Styling with CSS](#styling-with-css)**

**[</> Adding Custom Features with JavaScript](#adding-custom-features-with-javascript)**

## 🎨 Styling with CSS

Custom CSS is a powerful way to change the visual style of your quiz. Here are some basic steps to get you started:

### Step 1:  Accessing the Custom CSS Editor

To open the custom CSS editor follow these steps:

-   Open the **Quiz Builder** on your Shop Quiz: Product Recommendation Quiz.
-   Navigate to the [**Quiz** **Design**](https://docs.revenuehunt.com/reference/quiz-builder/#quiz-design) section.
-   Scroll down to the **Custom CSS** section and click on `Add` to open the CSS console where you can input your CSS code.

![Custom CSS and JavaScript for Product Recommendation Quizzes - image 3](/img/blog/custom-css-and-javascript-for-product-recommendation-quizzes/Screenshot-2024-08-19-105145.png)

### Step 2: Basic Customizations

In the CSS editor, you can insert any custom styling rules to adjust the quiz appearance. You can modify elements of the quiz or the results page such as fonts, colors, and layouts.

**How do I find CSS selectors of quiz elements?**

To find the correct CSS selector for any quiz element, simply right-click the element on your browser and select **Inspect**. This will open the browser's Developer Tools, where you can view the HTML and locate the exact selector to target.

![Custom CSS and JavaScript for Product Recommendation Quizzes - image 4](/img/blog/custom-css-and-javascript-for-product-recommendation-quizzes/Screenshot-2024-08-30-091646.png)

![Custom CSS and JavaScript for Product Recommendation Quizzes - image 5](/img/blog/custom-css-and-javascript-for-product-recommendation-quizzes/Screenshot-2024-08-30-091731.png)

Here are some sample CSS codes you can use in your quiz:

<table style="width: 100%; border-collapse: collapse; background-color: #f8f9fa; border: 1px solid #dee2e6; font-family: Arial, sans-serif; color: #333; font-size: 14px;"><thead><tr style="background-color: #333; color: #ffffff;"><th style="padding: 12px; text-align: left; font-weight: bold;">Action</th><th style="padding: 12px; text-align: left; font-weight: bold;">Code</th></tr></thead><tbody><tr><td style="padding: 12px; background-color: #e0e0e0; border-bottom: 1px solid #ccc;">Change the background color</td><td style="padding: 12px; border-bottom: 1px solid #ccc;"><pre style="background-color: #f0f0f0; padding: 12px; border-radius: 8px; font-size: 13px; white-space: pre-wrap;">.lq-quiz {
  background-color: #f0f0f0;
}
</pre></td></tr><tr><td style="padding: 12px; background-color: #e0e0e0; border-bottom: 1px solid #ccc;">Modify the font style and size</td><td style="padding: 12px; border-bottom: 1px solid #ccc;"><pre style="background-color: #f0f0f0; padding: 12px; border-radius: 8px; font-size: 13px; white-space: pre-wrap;">.lq-quiz h1 {
  font-family: 'Arial, sans-serif';
  font-size: 18px;
}
</pre></td></tr><tr><td style="padding: 12px; background-color: #e0e0e0; border-bottom: 1px solid #ccc;">Uploading a Google Font</td><td style="padding: 12px; border-bottom: 1px solid #ccc;"><ol style="padding-left: 18px; margin-bottom: 8px; font-size: 13px;"><li>Find the desired font on Google Fonts.</li><li>Copy the import URL and font family CSS rules.</li><li>Add the CSS code to the custom CSS section in the Quiz Design tab.</li></ol><pre style="background-color: #f0f0f0; padding: 12px; border-radius: 8px; font-size: 13px; white-space: pre-wrap;">@import url('https://fonts.googleapis.com/css2?family=Quicksand&amp;display=swap');

.quicksand-bold { 
  font-family: "Quicksand", sans-serif; 
  font-optical-sizing: auto; 
  font-weight: 400; 
  font-style: normal; 
}

h1, h2, h3, h4, h5, h6, p, button, div{
  font-family: 'Quicksand', sans-serif;
}
</pre></td></tr><tr><td style="padding: 12px; background-color: #e0e0e0; border-bottom: 1px solid #ccc;">Style the buttons</td><td style="padding: 12px; border-bottom: 1px solid #ccc;"><pre style="background-color: #f0f0f0; padding: 12px; border-radius: 8px; font-size: 13px; white-space: pre-wrap;">#cta {
  background-color: #333;
  color: #ffffff;
  border-radius: 5px;
}
</pre></td></tr></tbody></table>

> **💡 Tip: Use Markdown for Text Styling**
> 
> You don't always need custom CSS to style your quiz. You can use [Markdown language](https://docs.revenuehunt.com/how-to-guides/use-markdown/) to format text within the quiz for basic styling such as headings, bold, italics, links, images, and videos.

### Step 3: Advanced CSS Customizations

For more complex design customizations, you may want to target specific quiz elements using advanced CSS selectors, pseudo-classes, or even animations.

**Add specificity to your CSS rules**

You can add specificity to your CSS rules, so that they are applied only to the quiz or a certain question. For example:

```
#quiz  p {color: red;}
```

will change the color of all the paragraphs in the quiz to red.

```
#question-AbC7Zde  p {color: red;}
```

will change the color of a paragraph to red ONLY for question `AbC7Zde`, where `AbC7Zde` is the question ID. You can find a specific question ID in Quiz Builder > [Question setttings](https://docs.revenuehunt.com/reference/quiz-builder/#question-settings).

Here are some examples of advanced CSS customizations you can apply to your quiz:

<table style="width: 100%; border-collapse: collapse; background-color: #f8f9fa; border: 1px solid #dee2e6; font-family: Arial, sans-serif; color: #333; font-size: 14px;"><thead><tr style="background-color: #333; color: #ffffff;"><th style="padding: 12px; text-align: left; font-weight: bold;">Action</th><th style="padding: 12px; text-align: left; font-weight: bold;">Code</th></tr></thead><tbody><tr><td style="padding: 12px; background-color: #e0e0e0; border-bottom: 1px solid #ccc;">Change Picture Choices to Icons</td><td style="padding: 12px; border-bottom: 1px solid #ccc;"><pre style="background-color: #f0f0f0; padding: 12px; border-radius: 8px; font-size: 13px; white-space: pre-wrap;">/* Change Picture Choices to Icons */

.lq-images li, .widget .lq-images li {
  max-width: none !important;
}

.lq-choices .lq-img, .widget .lq-choices .lq-img {
  width: 48px !important;
  height: 48px !important;
  padding-top: 0 !important;
  background-size: 48px !important;
  background-position: left;
  margin-top: 4px;
  margin-right: 8px;
  margin-bottom: 2px;
}

.lq-picture-choice .lq-letter {
  display: none;
}

.lq-picture-choice li div {
  width: calc(100% - 65px) !important;
  margin-top: 12px;
}

@media (pointer: fine) {
  .lq-picture-choice li:hover {
    background-color: #333 !important;
  }

  .lq-picture-choice li:hover div {
    color: #fff !important;
  }

  .lq-picture-choice li:hover .lq-img {
    content: "";
    width: 100%;
    height: 100%;
    background-color: black;
    filter: invert(100%);
    -webkit-filter: invert(100%);
  }
}

.lq-images li, .widget .lq-images li {
  width: calc(100% - 8px) !important;
}

@media (min-width: 768px) {
  .builder-container-preview .lq-images li, .widget .lq-images li {
    width: calc(50% - 8px) !important;
  }
}
</pre></td></tr><tr><td style="padding: 12px; background-color: #e0e0e0; border-bottom: 1px solid #ccc;">Hide Product Variants</td><td style="padding: 12px; border-bottom: 1px solid #ccc;"><pre style="background-color: #f0f0f0; padding: 12px; border-radius: 8px; font-size: 13px; white-space: pre-wrap;">/* this hides the product variants */
.no-variants-dropdown {
  display: none;
}

.lq-variants-dropdown {
  display: none;
}

.lq-results .el-input, .lq-results .el-input__inner {
  display: none;
}
</pre></td></tr></tbody></table>

### Step 4: Customization Examples

To enhance the appearance of your quiz, here are a few real creative customization ideas:

![Custom CSS and JavaScript for Product Recommendation Quizzes - image 6](/img/blog/custom-css-and-javascript-for-product-recommendation-quizzes/Screenshot-2021-04-14-at-04.14.16.png)

![Custom CSS and JavaScript for Product Recommendation Quizzes - image 7](/img/blog/custom-css-and-javascript-for-product-recommendation-quizzes/Screenshot-2020-10-20-at-11.41.36.png)

![Custom CSS and JavaScript for Product Recommendation Quizzes - image 8](/img/blog/custom-css-and-javascript-for-product-recommendation-quizzes/Screenshot-2020-10-20-at-11.33.57.png)

## </> Adding Custom Features with JavaScript

JavaScript enables you to incorporate interactivity and dynamic content into your quiz.

By using custom JavaScript, you can **implement custom behaviors**, such as adding specific images, text, or logic based on user responses. It also allows you to display personalized product recommendations and **redirect users to particular pages** on your store.

Additionally, you can **integrate tracking codes**, such as Google Analytics or Facebook Pixel, to monitor interactions with specific quiz questions, offering valuable insights into user behavior.

### Step 1: Accessing the Custom JavaScript Editor

You can add custom JavaScirpt to the quiz results page and the quiz questions.

**Results Page**

1.  Navigate to the [Results Page Settings](https://docs.revenuehunt.com/reference/quiz-builder/#results-page-settings) in the Quiz Builder.
2.  Select [**Advanced Settings**](https://docs.revenuehunt.com/reference/quiz-builder/#advanced-settings).
3.  Scroll down to find the **Custom JavaScript** section and click `add`.
4.  This is your canvas for crafting and deploying custom scripts that can modify the quiz's behavior based on user interactions and results.

**Quiz Questions**

1.  Navigate to the [Quiz Builder](https://docs.revenuehunt.com/reference/quiz-builder/).
2.  Open [question settings](https://docs.revenuehunt.com/reference/quiz-builder/#question-settings).
3.  Scroll down to find the **Custom JavaScript** section and click `add`.
4.  This is your canvas for crafting and deploying custom scripts that can modify the quiz's behavior based on user interactions and results.

### Step 2: Using the Console.log(prq) function

To begin, let's log the quiz response object to the console:

<pre id="__code_0"><button class="md-clipboard md-icon" style="box-sizing: inherit; -webkit-tap-highlight-color: transparent; background: rgba(0, 0, 0, 0); border: 0px; font-family: inherit; font-size: inherit; margin: 0px; padding: 0px; border-radius: 0.1rem; color: var(--md-default-fg-color--lightest); cursor: pointer; height: 1.5em; outline: none; outline-offset: 0.1rem; position: absolute; right: 0.5em; top: 0.5em; transition: color 0.25s; width: 1.5em; z-index: 1;" title="Copy to clipboard" data-clipboard-target="#__code_0 &gt; code"></button><code><a id="__codelineno-0-1" href="https://docs.revenuehunt.com/how-to-guides/add-javascript/#__codelineno-0-1" name="__codelineno-0-1"></a><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">prq</span><span class="p">);</span>
</code></pre>

This line of code will display the available Vue.js functions and properties within the prq scope in your browser's console, allowing you to inspect the quiz data in real-time.

![how to add javascript consolelog](https://docs.revenuehunt.com/images/how%20to%20add%20javascript%20consolelog.png)

The `prq` object is your gateway to customizing the quiz experience.  You can use it to fetch specific slide values, such as a question's response, by calling `prq.getSlideValue(slideId)`.

For participant information, methods like `prq.leadEmail()`, `prq.leadPhone()`, and `prq.leadName()` allow you to retrieve user details easily.

On the results page, you can customize product suggestions using `prq.recommendedProducts()` or highlight the top choice with `prq.mostVotedProduct()`.

### Step 3: Sample JavaScript Customizations

For complex functionalities, such as managing quiz flow or integrating third-party tools (e.g., analytics platforms), you can create custom scripts that interact with quiz events. Here are a few examples of JavaScript customizations you can add:

<table style="width: 100%; border-collapse: collapse; background-color: #f8f9fa; border: 1px solid #dee2e6; font-family: Arial, sans-serif; color: #333; font-size: 14px;"><thead><tr style="background-color: #333; color: #ffffff;"><th style="padding: 12px; text-align: left; font-weight: bold;">Action</th><th style="padding: 12px; text-align: left; font-weight: bold;">Code</th></tr></thead><tbody><tr><td style="padding: 12px; background-color: #e0e0e0; border-bottom: 1px solid #ccc;">Display an alert when a user selects an answer</td><td style="padding: 12px; border-bottom: 1px solid #ccc;"><pre style="background-color: #f0f0f0; padding: 12px; border-radius: 8px; font-size: 13px; white-space: pre-wrap;">document.querySelectorAll('.quiz-answer').forEach(answer =&gt; {
  answer.addEventListener('click', () =&gt; {
    alert('Answer selected: ' + answer.textContent);
  });
});
</pre></td></tr><tr><td style="padding: 12px; background-color: #e0e0e0; border-bottom: 1px solid #ccc;">Integrate with Analytics</td><td style="padding: 12px; border-bottom: 1px solid #ccc;"><pre style="background-color: #f0f0f0; padding: 12px; border-radius: 8px; font-size: 13px; white-space: pre-wrap;">document.querySelectorAll('.quiz-answer').forEach(answer =&gt; { 
  answer.addEventListener('click', () =&gt; { 
    // Example: Send answer data to Google Analytics
    gtag('event', 'quiz_answer', { 
      'event_category': 'Quiz', 
      'event_label': answer.textContent, 
      'value': 1 
    }); 
  }); 
});
</pre></td></tr><tr><td style="padding: 12px; background-color: #e0e0e0; border-bottom: 1px solid #ccc;">Insert calculations (BMI example)</td><td style="padding: 12px; border-bottom: 1px solid #ccc;"><pre style="background-color: #f0f0f0; padding: 12px; border-radius: 8px; font-size: 13px; white-space: pre-wrap;">*/ // get the element var element = document.getElementById("body_mass_index_calculation"); // get the values of the slides var weight = prq.getSlideValue("rgiq0oE"); var height = prq.getSlideValue("0Mi2qLN"); // Alternative way to get slide values: /* var slide_weight = prq.quiz.attributes.slides.data.find(s =&gt; s.id === "rgiq0oE"); var slide_height = prq.quiz.attributes.slides.data.find(s =&gt; s.id === "0Mi2qLN"); var weight = slide_weight.attributes.values[0]; var height = slide_height.attributes.values[0]; */ // calculate the Body Mass Index var bmi = weight / (height * height); // insert the calculation on the element in the result page element.innerHTML = bmi.toFixed(2); // You can also load jQuery this way.</pre></td></tr></tbody></table>

### Step 4: Advanced JavaScript Customizations – Callback Function

You can use a callback function for custom integrations with Shop Quiz: Product Recommendation Quiz. Whether you're aiming to build your own results page, add unique code, display custom product recommendations, or direct users to specific pages on your store, callback functions offer a versatile solution.

> **🙋🏻 What's a Callback Function?**
> 
> A callback function is a piece of JavaScript code that executes in response to an event – in this case, the completion of a quiz. You add this callback function to your website and a listener that will be triggered when the quiz is completed. Then you will have access to all the data from quiz responses.

**Implementing the Callback Function**

To begin, insert the following code into your store's theme, ideally just before the closing `</head>` tag:

<pre id="__code_0"><button class="md-clipboard md-icon" style="box-sizing: inherit; -webkit-tap-highlight-color: transparent; background: rgba(0, 0, 0, 0); border: 0px; font-family: inherit; font-size: inherit; margin: 0px; padding: 0px; border-radius: 0.1rem; color: var(--md-default-fg-color--lightest); cursor: pointer; height: 1.5em; outline: none; outline-offset: 0.1rem; position: absolute; right: 0.5em; top: 0.5em; transition: color 0.25s; width: 1.5em; z-index: 1;" title="Copy to clipboard" data-clipboard-target="#__code_0 &gt; code"></button><code><a id="__codelineno-0-1" href="https://docs.revenuehunt.com/how-to-guides/use-callback-function/#__codelineno-0-1" name="__codelineno-0-1"></a><span class="p">&lt;</span><span class="nt">script</span><span class="p">&gt;</span>
<a id="__codelineno-0-2" href="https://docs.revenuehunt.com/how-to-guides/use-callback-function/#__codelineno-0-2" name="__codelineno-0-2"></a>  <span class="kd">function</span> <span class="nx">prqQuizCallback</span><span class="p">(</span><span class="nx">quizResponse</span><span class="p">){</span>
<a id="__codelineno-0-3" href="https://docs.revenuehunt.com/how-to-guides/use-callback-function/#__codelineno-0-3" name="__codelineno-0-3"></a>    <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">quizResponse</span><span class="p">);</span>
<a id="__codelineno-0-4" href="https://docs.revenuehunt.com/how-to-guides/use-callback-function/#__codelineno-0-4" name="__codelineno-0-4"></a>  <span class="p">}</span>
<a id="__codelineno-0-5" href="https://docs.revenuehunt.com/how-to-guides/use-callback-function/#__codelineno-0-5" name="__codelineno-0-5"></a><span class="p">&lt;/</span><span class="nt">script</span><span class="p">&gt;</span>
</code></pre>

This simple example utilizes a `console.log()` function to output the JSON containing all the quiz response data.

![how use callback function example](https://docs.revenuehunt.com/images/how%20use%20callback%20function%20example.png)

By tapping into the quiz responses, developers can access a wealth of information including individual answers, customer tags, and recommended products. This data is delivered in a **JSON format** via a JavaScript Callback Function, enabling you to add it directly to your website.

With the quiz response JSON, you can access details such as:

-   All the questions asked during the quiz.
-   The customer's responses.
-   Customer tags assigned based on the answers.
-   Products recommended by the quiz.
-   The layout and logic of the results page blocks.

Developers can use this data to perform actions beyond logging it. For example, you can trigger specific actions like adding a product to the cart based on quiz results by using a custom function such as `prqAddOneToCartCallback(event);`. This allows for deeper integrations and personalized customer interactions based on their quiz experience.

## Best Practices

Customizing your Product Recommendation Quiz with custom CSS and JavaScript opens up a world of possibilities for creating a unique and engaging user experience.

**☑️ Use Browser DevTools**: Utilize browser Developer Tools to inspect elements and debug CSS/JavaScript in real-time. This helps in identifying issues and testing changes quickly.

**☑️ Use Version Control**: Commit your custom CSS and JavaScript changes to different quiz versions. This helps track changes and collaborate with other developers effectively.

**☑️ Optimize for Performance**: Minimize and compress your CSS and JavaScript files. Avoid excessive DOM manipulations and optimize animations for better performance.

**☑️ Test Across Browsers**: Test your customizations on multiple browsers and devices to ensure compatibility and a consistent user experience.

**☑️ Document Your Code**: Comment your CSS and JavaScript code to explain complex logic or styles. This helps others (and your future self) understand your work.

## Final Word

By following the guidelines and examples provided in this article, you can tailor the quiz to perfectly match your brand and meet your business goals.

At the end of the day, customizing your quiz with CSS and JavaScript isn't just about functionality - **it's about bringing your brand's personality to life**. You have the tools to create something that not only works but feels uniquely yours. Whether you're tweaking styles or adding some clever interactivity, the possibilities are wide open.

So go ahead, experiment, and make your quiz as bold, sleek, or playful as you want. The only limit is your imagination. And remember, if you ever need a nudge in the right direction, we're here to help you turn those ideas into reality. Now, it's your turn - what will you create?

Feel free to [reach out to our team](https://revenuehunt.com/contact/) for any specific customization queries or to share your unique customizations with us. We love seeing how our clients creatively use our tools to enhance their customer experience!

> **💡 Tip:** For more detailed guides, visit the following:
> 
> [👉 Add JavaScript](https://docs.revenuehunt.com/how-to-guides/add-javascript/)
> 
> [👉 Customize Quiz Design](https://docs.revenuehunt.com/how-to-guides/customize-quiz-design/)
> 
> [👉 Usign the Callback Function](https://docs.revenuehunt.com/how-to-guides/use-callback-function/)
