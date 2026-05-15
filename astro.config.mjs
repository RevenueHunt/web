// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://revenuehunt.com",
  output: "static",
  trailingSlash: "always",
  redirects: {
    // Populate via scripts/scrape-wp.ts output. Any URL in the live
    // sitemap.xml that no Astro route produces must redirect here (or 410).
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
