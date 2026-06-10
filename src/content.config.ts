import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "zod";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional().default(""),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).optional().default([]),
    categories: z.array(z.string()).optional().default([]),
    author: z.string().optional().default("RevenueHunt"),
    legacySlug: z.string(),
    legacyId: z.number().optional(),
    legacyUrl: z.string().optional(),
    featuredImage: z.string().nullable().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

const pages = defineCollection({
  loader: glob({ base: "./src/content/pages", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional().default(""),
    // Locale of this page. English files live at the collection root and default
    // to "en"; translations live in per-locale subfolders (pages/es/…, pages/fr/…)
    // and set this explicitly. Drives which [slug] route renders the entry.
    lang: z.enum(["en", "es", "fr", "de", "pt", "it", "nl", "sv", "fi", "pl", "cs", "ar", "he"]).optional().default("en"),
    pubDate: z.coerce.date().optional(),
    updatedDate: z.coerce.date().optional(),
    legacySlug: z.string(),
    legacyId: z.number().optional(),
    legacyUrl: z.string().optional(),
    featuredImage: z.string().nullable().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { blog, pages };
