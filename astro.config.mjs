// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

/** Remove the first H1 from each Markdown document — the [slug] layout
 *  already renders frontmatter title as an H1, and most scraped pages
 *  open with their own H1. Without this, every marketing page has two. */
function stripLeadingH1Remark() {
  return (/** @type {{ children: Array<{ type: string; depth?: number }> }} */ tree) => {
    let stripped = false;
    tree.children = tree.children.filter((node) => {
      if (stripped) return true;
      if (node.type === "heading" && node.depth === 1) {
        stripped = true;
        return false;
      }
      // Only consider the very first content node; if the first thing isn't
      // an h1, leave the document alone.
      if (node.type !== "yaml" && node.type !== "html" && node.type !== "definition") {
        stripped = true;
      }
      return true;
    });
  };
}

/** Same intent, but operates on the HAST (post-remark) tree. Catches H1s
 *  that came in as raw HTML — e.g. pages whose content was sourced via
 *  the scraper's HTML fallback (testimonials, shop, etc.) and ended up
 *  as a single html node that the remark plugin can't introspect. */
function stripLeadingH1Rehype() {
  return (/** @type {{ children: Array<any> }} */ tree) => {
    /** @param {any} node */
    function walk(node) {
      if (!node || !Array.isArray(node.children)) return false;
      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        if (child.type === "element" && child.tagName === "h1") {
          node.children.splice(i, 1);
          return true;
        }
        if (child.type === "element" && walk(child)) return true;
      }
      return false;
    }
    walk(tree);
  };
}

export default defineConfig({
  site: "https://revenuehunt.com",
  output: "static",
  trailingSlash: "always",
  redirects: {
    // Populate via scripts/scrape-wp.ts output. Any URL in the live
    // sitemap.xml that no Astro route produces must redirect here (or 410).
  },
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [stripLeadingH1Remark],
    rehypePlugins: [stripLeadingH1Rehype],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
