import type { CollectionEntry } from "astro:content";

export type BlogPost = CollectionEntry<"blog">;

/** Decode the HTML entities that survived WP's REST API into our frontmatter
 *  (`&amp;`, `&#038;`, ...). Cheap, covers the cases we actually see. */
export function decodeEntities(s: string): string {
  return s
    .replace(/&#0?38;/g, "&")
    .replace(/&amp;/g, "&")
    .replace(/&#0?39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&#0?34;/g, '"')
    .replace(/&nbsp;/g, " ");
}

/** Display-friendly normalization for category/tag names - decode entities
 *  so "Tips &amp; Tricks" reads as "Tips & Tricks". */
export function normalizeName(s: string): string {
  return decodeEntities(s);
}

/** WordPress-style slugify: lowercase, hyphenated, ASCII-only, collapse runs.
 *  Matches WP's behavior of *dropping* ampersands rather than expanding them,
 *  so /cat/tips-tricks/ aligns with the legacy URL. */
export function slugify(input: string): string {
  return decodeEntities(input)
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/&/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function categoryHref(name: string): string {
  return `/cat/${slugify(name)}/`;
}

export function tagHref(name: string): string {
  return `/tag/${slugify(name)}/`;
}

export function postHref(post: BlogPost): string {
  return `/${post.data.legacySlug}/`;
}

/** Average reading time in minutes, rounded up. ~200 wpm - typical for blog prose. */
export function readingTime(body: string | undefined): number {
  if (!body) return 1;
  const words = body
    .replace(/<[^>]+>/g, " ")
    .replace(/!\[[^\]]*\]\([^)]+\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function sortByDate(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

/** Top N categories by post count. Stable order: count desc, name asc.
 *  Buckets are keyed by slug so encoding variants ("Tips &amp; Tricks"
 *  vs "Tips & Tricks") collapse into one entry. */
export function topCategories(posts: BlogPost[], n = 6): { name: string; count: number }[] {
  const counts = new Map<string, { name: string; count: number }>();
  for (const p of posts) {
    for (const c of p.data.categories ?? []) {
      const key = slugify(c);
      if (!key) continue;
      const existing = counts.get(key);
      if (existing) existing.count++;
      else counts.set(key, { name: normalizeName(c), count: 1 });
    }
  }
  return Array.from(counts.values())
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name))
    .slice(0, n);
}

/** Posts that share the most categories/tags with `post`. Excludes self. */
export function relatedPosts(post: BlogPost, all: BlogPost[], limit = 3): BlogPost[] {
  const cats = new Set(post.data.categories ?? []);
  const tags = new Set(post.data.tags ?? []);
  const scored = all
    .filter((p) => p.data.legacySlug !== post.data.legacySlug)
    .map((p) => {
      let score = 0;
      for (const c of p.data.categories ?? []) if (cats.has(c)) score += 2;
      for (const t of p.data.tags ?? []) if (tags.has(t)) score += 1;
      return { post: p, score };
    })
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score || b.post.data.pubDate.getTime() - a.post.data.pubDate.getTime())
    .slice(0, limit)
    .map((s) => s.post);
  return scored;
}

/** Previous/next by pubDate (newest first). */
export function prevNext(
  post: BlogPost,
  sorted: BlogPost[],
): { prev: BlogPost | null; next: BlogPost | null } {
  const idx = sorted.findIndex((p) => p.data.legacySlug === post.data.legacySlug);
  if (idx === -1) return { prev: null, next: null };
  return {
    next: idx > 0 ? sorted[idx - 1] : null,
    prev: idx < sorted.length - 1 ? sorted[idx + 1] : null,
  };
}
