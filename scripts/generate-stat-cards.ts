/**
 * Generate shareable stat cards (PNG) for the State of product quizzes report.
 *
 * One 1200x675 card per headline stat, in RevenueHunt's dark brand style, with
 * the source URL baked in so a re-share still credits the page. Output:
 * public/reports/cards/<id>.png. Run before `astro build` (committed assets).
 *
 *   bun scripts/generate-stat-cards.ts
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { STAT_CARDS, REPORT } from "../src/lib/quiz-benchmarks.ts";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const OUT_DIR = join(ROOT, "public", "reports", "cards");
const FONTS_DIR = join(ROOT, "public", "fonts");

const W = 1200;
const H = 675;

interface Card {
  id: string;
  stat: string;
  label: string;
  note: string;
}

function template({ stat, label, note }: Card) {
  return {
    type: "div",
    props: {
      style: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        padding: "72px 80px",
        background: "linear-gradient(135deg, #0F0F14 0%, #16161D 50%, #1F1F2A 100%)",
        color: "white",
        fontFamily: "Inter",
      },
      children: [
        {
          type: "div",
          props: {
            style: { display: "flex", fontSize: 30, fontWeight: 700, letterSpacing: "-0.02em" },
            children: "RevenueHunt",
          },
        },
        {
          type: "div",
          props: {
            style: { display: "flex", flexDirection: "column", gap: "18px" },
            children: [
              {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    fontSize: 132,
                    fontWeight: 700,
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                    color: "#FFFFFF",
                  },
                  children: stat,
                },
              },
              {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    fontSize: 38,
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.82)",
                    lineHeight: 1.25,
                    maxWidth: "900px",
                  },
                  children: label,
                },
              },
            ],
          },
        },
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              fontSize: 24,
              fontWeight: 600,
              color: "rgba(255,255,255,0.5)",
            },
            children: [
              { type: "div", props: { style: { display: "flex" }, children: note } },
              {
                type: "div",
                props: { style: { display: "flex" }, children: `revenuehunt.com/${REPORT.slug}` },
              },
            ],
          },
        },
      ],
    },
  } as const;
}

async function loadFonts() {
  const [bold, semiBold] = await Promise.all([
    readFile(join(FONTS_DIR, "Inter-Bold.ttf")),
    readFile(join(FONTS_DIR, "Inter-SemiBold.ttf")),
  ]);
  return [
    { name: "Inter", data: bold, weight: 700, style: "normal" },
    { name: "Inter", data: semiBold, weight: 600, style: "normal" },
  ] as const;
}

async function main() {
  if (!existsSync(OUT_DIR)) await mkdir(OUT_DIR, { recursive: true });
  const fonts = await loadFonts();
  console.log(`Rendering ${STAT_CARDS.length} stat cards -> public/reports/cards/`);
  for (const card of STAT_CARDS as Card[]) {
    const svg = await satori(template(card), {
      width: W,
      height: H,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      fonts: fonts as any,
    });
    const png = new Resvg(svg, { fitTo: { mode: "width", value: W } }).render().asPng();
    const out = join(OUT_DIR, `${card.id}.png`);
    await writeFile(out, png);
    console.log(`  ✓ ${out.replace(ROOT, "")}`);
  }
}

await main();
