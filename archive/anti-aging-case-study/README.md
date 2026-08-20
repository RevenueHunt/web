# Anti-ageing case study (unpublished 2026-08-20)

Taken offline at the merchant's request. The piece disclosed their store's
revenue, order counts and AOV, and included screenshots of their live quiz,
without consent on record.

Nothing is deleted. To restore, reverse these four things:

1. `src/content/blog/anti-aging-beauty-brand-quiz-funnel-case-study.md`
   still holds the full copy. Set `draft: true` back to `draft: false`.
2. Move `img/` back to
   `public/img/blog/anti-aging-beauty-brand-quiz-funnel-case-study/`.
3. Drop the redirect for
   `/anti-aging-beauty-brand-quiz-funnel-case-study/` from `astro.config.mjs`.
4. `blog_casestudy_aov42_img2.webp` and `blog_casestudy_aov42_img3v3.webp`
   were left in `public/` because `ecommerce-sales-funnel-examples.md`
   (example 10) still uses them.

Not done, and still outstanding: the merchant's figures ($691,128, 9.8% CVR,
+42.64% AOV, $107.16 AOV, 72,200 completions) are still quoted verbatim in
~20 other posts, and example 10 of `ecommerce-sales-funnel-examples.md`
still describes their funnel. Removing the page did not remove the data.
