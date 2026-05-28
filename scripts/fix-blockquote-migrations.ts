/**
 * Fix WordPress→Markdown migration artifacts in blog post blockquotes.
 *
 * The migration wrapped non-quote content (tip callouts, images, headings,
 * bullet lists) in `>` syntax. This script identifies contiguous blockquote
 * blocks, classifies them by their first content line, and transforms them:
 *
 *   - `> **💡Tip:** ...`           → styled tip-box <div>
 *   - block of ONLY `> ![image]`   → strip > (plain images)
 *   - block of ONLY `> ####`       → strip > (plain headings)
 *   - block of ONLY `> - bullet`   → strip > (plain bullet list)
 *
 * Anything ambiguous (mixed content, multi-paragraph editorial inside a
 * quote, no clear classification) is left untouched for a manual pass.
 *
 * Usage:
 *   bun run scripts/fix-blockquote-migrations.ts           # dry run, list changes
 *   bun run scripts/fix-blockquote-migrations.ts --apply   # write the changes
 */
import { readFile, writeFile, readdir } from "node:fs/promises";
import { join } from "node:path";

const BLOG_DIR = "src/content/blog";
const APPLY = process.argv.includes("--apply");

interface Block {
  startLine: number;
  endLine: number; // exclusive
  lines: string[]; // raw lines including the leading `>`
}

/** Strip the leading "> " (or ">") from a quoted line. */
function unquote(line: string): string {
  // ">" alone, "> ", "> content", "  > content" all need to lose the leading marker
  return line.replace(/^>\s?/, "");
}

/** Find every contiguous blockquote block in a markdown document. */
function findBlockquoteBlocks(text: string): Block[] {
  const lines = text.split("\n");
  const blocks: Block[] = [];
  let current: number[] | null = null; // start indices
  for (let i = 0; i < lines.length; i++) {
    if (lines[i]!.startsWith(">")) {
      if (current === null) current = [i];
    } else if (current !== null) {
      // End of block
      blocks.push({
        startLine: current[0]!,
        endLine: i,
        lines: lines.slice(current[0]!, i),
      });
      current = null;
    }
  }
  if (current !== null) {
    blocks.push({ startLine: current[0]!, endLine: lines.length, lines: lines.slice(current[0]!) });
  }
  return blocks;
}

interface Classification {
  kind: "tip" | "image-only" | "heading-only" | "list-only" | "mixed";
  body?: string[]; // unquoted content lines (non-blank), for transformers
}

function classify(block: Block): Classification {
  const content = block.lines.map(unquote);
  const nonBlank = content.filter((l) => l.trim().length > 0);
  if (nonBlank.length === 0) return { kind: "mixed" };

  const first = nonBlank[0]!.trim();
  // Strip italic underscore wrapper used by some migrated tips
  const firstClean = first.replace(/^_+/, "").replace(/_+$/, "");

  // Pattern: tip callout starts with **💡Tip:** or **Tip:** (allowing for italic wrapping)
  if (/^\*\*\s*(?:💡\s*)?Tip\b/i.test(firstClean) || /^\*\*\s*💡/.test(firstClean)) {
    return { kind: "tip", body: nonBlank };
  }

  // Pattern: every non-blank line is an image
  if (nonBlank.every((l) => /^!\[.*?\]\(.+?\)\s*$/.test(l.trim()))) {
    return { kind: "image-only", body: nonBlank };
  }

  // Pattern: every non-blank line is a heading (#, ##, ###, ####, ##### or ######)
  if (nonBlank.every((l) => /^#{1,6}\s/.test(l.trim()))) {
    return { kind: "heading-only", body: nonBlank };
  }

  // Pattern: list block — first non-blank line is a list item, and every non-blank line
  // is either a list item or a continuation indent (4+ spaces from list item)
  if (/^[-*]\s/.test(firstClean) || /^\d+\.\s/.test(firstClean)) {
    const isListy = nonBlank.every((l) => /^[-*]\s|^\d+\.\s|^\s{2,}/.test(l));
    if (isListy) return { kind: "list-only", body: nonBlank };
  }

  // Pattern: editorial content misclassified as a quote. WordPress info-boxes
  // and "step list" components migrated with `>` syntax. Signals that a `>`
  // block is actually editorial content, not a pull quote:
  //   - contains a heading (`####`)
  //   - contains an image (`![]()`)
  //   - contains a step-style marker (`**Step 1:**`, `**Question 1:**`)
  //   - has 2+ lines starting with a bold prefix ending in `:`/`.`/`-`/`—`
  //     (`**Email 1 - ...**`, `**Tier 1 - ...**`, plus `_**For Dry Skin:**_`
  //     italic-wrapped variants)
  //   - has 3+ lines that look like en-dash "bullets" (`– text`)
  if (nonBlank.length >= 3) {
    const hasHeading = nonBlank.some((l) => /^#{1,6}\s/.test(l.trim()));
    const hasImage = nonBlank.some((l) => /^!\[.*?\]\(.+?\)/.test(l.trim()));
    const hasStepMarker = nonBlank.some((l) =>
      /^_?\*\*\s*(?:Step|Question|Phase|Stage|Part|Email|Tier|Level|Day|Week|Rule|For\b)/i.test(l.trim()),
    );
    const boldPrefixCount = nonBlank.filter((l) =>
      /^_?\*\*[^*]+\*\*_?\s*[:.\-—]?/.test(l.trim()),
    ).length;
    const enDashBulletCount = nonBlank.filter((l) => /^_?\s*[–—]\s+/.test(l.trim())).length;
    if (
      hasHeading ||
      hasImage ||
      hasStepMarker ||
      boldPrefixCount >= 2 ||
      enDashBulletCount >= 3
    ) {
      return { kind: "list-only", body: nonBlank }; // reuse strip-> transform
    }
  }

  return { kind: "mixed" };
}

/** Convert a subset of markdown inline syntax to HTML so the tip-box renders
 *  correctly when wrapped in HTML (markdown inside HTML isn't re-parsed). */
function mdInlineToHtml(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" style="color:#16161D;text-decoration:underline;">$1</a>')
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`]+)`/g, '<code style="background:#f1f5f9;padding:1px 6px;border-radius:4px;font-size:0.92em;">$1</code>');
}

function transformTip(block: Block): string {
  const content = block.lines.map(unquote);

  // Collapse to paragraphs (separated by blank lines), keeping multi-line
  // continuation joined with a space. Strip the migration's outer italic
  // `_..._` wrapper if present.
  const paragraphs: string[] = [];
  let buf: string[] = [];
  for (const raw of content) {
    const line = raw.replace(/^_([^_].*)_$/, "$1").trim();
    if (line === "") {
      if (buf.length) {
        paragraphs.push(buf.join(" "));
        buf = [];
      }
    } else {
      buf.push(line);
    }
  }
  if (buf.length) paragraphs.push(buf.join(" "));

  if (paragraphs.length === 0) return block.lines.join("\n");

  // Strip the "💡Tip:" label from the first paragraph — we move it to the
  // styled "TIP" eyebrow at the top of the box. Handle both `**💡Tip:**`
  // and `**💡Tip**:` variants.
  const stripLabel = (s: string) =>
    s
      .replace(/^\*\*\s*💡?\s*Tip\s*:?\s*\*\*\s*:?\s*/i, "")
      .replace(/^💡\s*Tip\s*:?\s*/i, "")
      .trim();
  paragraphs[0] = stripLabel(paragraphs[0]!);

  // For each paragraph: render image-only paragraphs as <img>, everything
  // else as a styled <p> with inline markdown converted to HTML.
  const rendered = paragraphs.map((p) => {
    const imageMatch = p.match(/^!\[([^\]]*)\]\(([^)]+)\)\s*$/);
    if (imageMatch) {
      return `  <img src="${imageMatch[2]}" alt="${imageMatch[1]}" style="display:block;max-width:100%;height:auto;border-radius:6px;margin:12px 0 4px;" loading="lazy" />`;
    }
    return `  <p style="margin:0 0 6px;font-size:15px;line-height:1.55;color:#0f172a;">${mdInlineToHtml(p)}</p>`;
  });

  return [
    `<div style="margin:24px 0;padding:18px 24px;background:#f8fafc;border-left:4px solid #16161D;border-radius:6px;">`,
    `  <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;">Tip</p>`,
    rendered.join("\n"),
    `</div>`,
  ].join("\n");
}

function transformStrip(block: Block): string {
  // Strip the leading `>` from every line; preserve blank/separator lines as plain blanks
  return block.lines.map((l) => unquote(l)).join("\n");
}

interface FileChange {
  path: string;
  before: string;
  after: string;
  tipCount: number;
  imageCount: number;
  headingCount: number;
  listCount: number;
}

async function processFile(path: string): Promise<FileChange | null> {
  const before = await readFile(path, "utf8");
  const blocks = findBlockquoteBlocks(before);
  if (blocks.length === 0) return null;

  // Build the new file by walking through original lines, splicing in
  // transformed blocks where applicable.
  const lines = before.split("\n");
  let result = "";
  let cursor = 0;
  let tipCount = 0,
    imageCount = 0,
    headingCount = 0,
    listCount = 0;

  for (const block of blocks) {
    // Emit unchanged content before this block
    result += lines.slice(cursor, block.startLine).join("\n");
    if (block.startLine > cursor) result += "\n";

    const cls = classify(block);
    let replacement: string;
    switch (cls.kind) {
      case "tip":
        replacement = transformTip(block);
        tipCount++;
        break;
      case "image-only":
        replacement = transformStrip(block);
        imageCount++;
        break;
      case "heading-only":
        replacement = transformStrip(block);
        headingCount++;
        break;
      case "list-only":
        replacement = transformStrip(block);
        listCount++;
        break;
      case "mixed":
        replacement = block.lines.join("\n");
        break;
    }
    result += replacement;
    cursor = block.endLine;
    if (cursor < lines.length) result += "\n";
  }
  // Emit trailing unchanged content
  result += lines.slice(cursor).join("\n");

  if (result === before) return null;

  return { path, before, after: result, tipCount, imageCount, headingCount, listCount };
}

const files = (await readdir(BLOG_DIR)).filter((f) => f.endsWith(".md"));

const changes: FileChange[] = [];
for (const f of files) {
  const change = await processFile(join(BLOG_DIR, f));
  if (change) changes.push(change);
}

// Sort by total impact (descending)
changes.sort((a, b) => {
  const ai = a.tipCount + a.imageCount + a.headingCount + a.listCount;
  const bi = b.tipCount + b.imageCount + b.headingCount + b.listCount;
  return bi - ai;
});

console.log(
  `\n${APPLY ? "Applying" : "Dry-run"}: ${changes.length} of ${files.length} files would change\n`,
);

let totals = { tip: 0, image: 0, heading: 0, list: 0 };
for (const c of changes) {
  const name = c.path.replace(/^.*[\\/]/, "");
  const parts: string[] = [];
  if (c.tipCount) parts.push(`${c.tipCount} tip`);
  if (c.imageCount) parts.push(`${c.imageCount} image`);
  if (c.headingCount) parts.push(`${c.headingCount} heading`);
  if (c.listCount) parts.push(`${c.listCount} list`);
  console.log(`  ${parts.join(", ").padEnd(40)} ${name}`);
  totals.tip += c.tipCount;
  totals.image += c.imageCount;
  totals.heading += c.headingCount;
  totals.list += c.listCount;
}

console.log(
  `\nTotal blocks transformed: ${totals.tip} tip, ${totals.image} image-only, ${totals.heading} heading-only, ${totals.list} list-only\n`,
);

if (APPLY) {
  for (const c of changes) {
    await writeFile(c.path, c.after, "utf8");
  }
  console.log(`Wrote ${changes.length} files.\n`);
} else {
  console.log(`Re-run with --apply to write the changes.\n`);
}
