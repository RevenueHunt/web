// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

/** Remove the first H1 from each Markdown document — the [slug] layout
 *  already renders frontmatter title as an H1, and most scraped pages
 *  open with their own H1. Without this, every marketing page has two. */
function stripLeadingH1() {
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
    remarkPlugins: [stripLeadingH1],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
