import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "../lib/site";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const posts = (await getCollection("blog", ({ data }) => !data.draft))
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

  return rss({
    title: `${SITE.name} blog`,
    description: "Product recommendation quiz strategies, case studies, and updates.",
    site: context.site ?? SITE.site_url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/${post.data.legacySlug}/`,
      author: post.data.author,
      categories: [...(post.data.categories ?? []), ...(post.data.tags ?? [])],
    })),
  });
}
