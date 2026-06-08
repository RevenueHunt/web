/**
 * Generate the downloadable PDF for the State of product recommendation quizzes report.
 *
 * Builds a self-contained, print-oriented HTML from the shared data module
 * (src/lib/quiz-benchmarks.ts) and prints it to PDF with headless Chrome, the
 * same approach as the DPA in generate-legal-docs.sh. Output (committed):
 * public/reports/state-of-product-recommendation-quizzes-2026.pdf
 *
 *   bun scripts/generate-benchmark-report.ts
 *
 * Requires Google Chrome on macOS. Skips with a warning if Chrome is absent.
 */
import { mkdir, writeFile, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  REPORT,
  DATASET,
  HEADLINE,
  VERTICAL_CONVERSION,
  AOV_UPLIFT,
  ATTRIBUTION,
  BASELINES,
  METHODOLOGY,
} from "../src/lib/quiz-benchmarks.ts";

const execFileP = promisify(execFile);
const ROOT = fileURLToPath(new URL("..", import.meta.url));
const OUT_DIR = join(ROOT, "public", "reports");
// Derived from REPORT.pdfPath ("/reports/<name>.pdf") so the page link and the
// generated file can never drift apart.
const OUT_PDF = join(ROOT, "public", REPORT.pdfPath.replace(/^\//, ""));
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const fmtN = (n: number | null) => (n === null ? "all" : n.toLocaleString("en-US"));
const published = new Date(REPORT.datePublished).toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

// Conversion expressed against a typical 2% store: 6.9% / 2% = 345%.
const boostPct = (rate: number) => Math.round((rate / HEADLINE.baselinePct) * 100);

function convRows() {
  return VERTICAL_CONVERSION.map((r) => {
    const total = r.kind === "total";
    const approx = r.kind === "grouped" ? "~" : "";
    const rate = `${approx}${r.rate}%`;
    const boost = `${approx}${boostPct(r.rate)}%`;
    return `<tr${total ? ' class="total"' : ""}><td>${r.vertical}</td><td class="num">${rate}</td><td class="num">${boost}</td><td class="num muted">${fmtN(r.n)}</td></tr>`;
  }).join("");
}

function aovRows() {
  return AOV_UPLIFT.perVertical
    .map(
      (r) =>
        `<tr><td>${r.vertical}</td><td class="num">${r.uplift === null ? "Flat" : `+${r.uplift}%`}</td><td class="num muted">${r.storesUp === null ? "n/a" : `${r.storesUp}%`}</td></tr>`,
    )
    .join("");
}

function baselineRows() {
  return BASELINES.map(
    (b) => `<tr><td>${b.source}</td><td class="num">${b.rate}</td><td class="muted">${b.scope}</td></tr>`,
  ).join("");
}

const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8" />
<style>
@page { size: Letter; margin: 18mm 16mm; }
* { -webkit-print-color-adjust: exact; print-color-adjust: exact; box-sizing: border-box; }
body { font-family: -apple-system, "Helvetica Neue", Arial, sans-serif; font-size: 10.5pt; line-height: 1.5; color: #16161D; margin: 0; }
.cover { background: linear-gradient(135deg, #0F0F14 0%, #16161D 55%, #1F1F2A 100%); color: #fff; padding: 26mm 16mm; margin: -18mm -16mm 14pt; }
.cover .kicker { font-size: 10pt; letter-spacing: .12em; text-transform: uppercase; color: rgba(255,255,255,.55); margin: 0 0 10pt; }
.cover h1 { font-size: 34pt; line-height: 1.05; margin: 0 0 6pt; letter-spacing: -.02em; }
.cover .sub { font-size: 16pt; color: rgba(255,255,255,.75); margin: 0 0 18pt; }
.cover .lede { font-size: 11.5pt; color: rgba(255,255,255,.85); max-width: 150mm; margin: 0; }
h2 { font-size: 15pt; margin: 20pt 0 6pt; }
p { margin: 6pt 0; }
.stats { display: flex; gap: 10pt; margin: 10pt 0; }
.stat { flex: 1; border: 1px solid #d9d9e0; border-radius: 8pt; padding: 10pt 12pt; }
.stat .big { font-size: 22pt; font-weight: 700; letter-spacing: -.02em; }
.stat .lab { font-size: 9pt; color: #4b4b57; margin-top: 3pt; }
table { border-collapse: collapse; width: 100%; margin: 8pt 0; font-size: 9.5pt; }
th, td { border-bottom: 1px solid #e3e3e8; padding: 5pt 8pt; text-align: left; }
th { color: #6b6b76; font-size: 8.5pt; text-transform: uppercase; letter-spacing: .05em; }
td.num, th.num { text-align: right; font-variant-numeric: tabular-nums; }
.muted { color: #6b6b76; }
tr.total td { border-top: 1.5px solid #16161D; border-bottom: none; font-weight: 700; }
.note { font-size: 8.5pt; color: #6b6b76; margin: 4pt 0 0; }
ul { margin: 6pt 0; padding-left: 16pt; }
li { margin: 5pt 0; }
.foot { margin-top: 18pt; padding-top: 8pt; border-top: 1px solid #d9d9e0; font-size: 8.5pt; color: #6b6b76; display: flex; justify-content: space-between; }
.avoid-break { break-inside: avoid; }
</style></head>
<body>
  <div class="cover">
    <p class="kicker">Benchmark report &middot; ${published}</p>
    <h1>The state of product recommendation quizzes</h1>
    <p class="sub">2026 benchmark report</p>
    <p class="lede">1 in ${HEADLINE.completedOneIn} shoppers who finish a product recommendation quiz place an order, nearly 3x a typical online store. This report breaks down which categories convert highest, how much more quiz shoppers spend, and how long a single quiz keeps paying. Based on real data from ${DATASET.responses} quiz responses across ${DATASET.brands} ecommerce stores. Aggregate and anonymized.</p>
  </div>

  <h2>The headline numbers</h2>
  <div class="stats avoid-break">
    <div class="stat"><div class="big">${HEADLINE.completedConv}%</div><div class="lab">of shoppers who finish a quiz place an order (about 1 in ${HEADLINE.completedOneIn})</div></div>
    <div class="stat"><div class="big">+${AOV_UPLIFT.headlineLow}-${AOV_UPLIFT.headlineHigh}%</div><div class="lab">higher average order value, within the same store</div></div>
    <div class="stat"><div class="big">${HEADLINE.completionRate}%</div><div class="lab">of shoppers who start a quiz finish it</div></div>
    <div class="stat"><div class="big">1 in 5</div><div class="lab">quiz-attributed orders land 30+ days later</div></div>
  </div>

  <h2>Conversion by category</h2>
  <p>Consumable and replenishable categories convert two to three times higher than the average online store. High-ticket and high-consideration purchases convert an order of magnitude lower: the quiz drives discovery there, but the sale lands later, off-session, or not at all.</p>
  <table class="avoid-break"><thead><tr><th>Category</th><th class="num">Conversion</th><th class="num">Quiz conversion boost</th><th class="num">Responses</th></tr></thead><tbody>${convRows()}</tbody></table>
  <p class="note">${VERTICAL_CONVERSION.find((r) => r.kind === "grouped")!.note}</p>

  <h2>Do quiz shoppers spend more?</h2>
  <p>Measured within the same store, quiz orders run ${AOV_UPLIFT.headlineLow}% to ${AOV_UPLIFT.headlineHigh}% larger than non-quiz orders, and that holds in ${AOV_UPLIFT.storesUpLow}% to ${AOV_UPLIFT.storesUpHigh}% of stores. Strongest where the quiz can build a set or routine, close to flat where the purchase is a single item.</p>
  <table class="avoid-break"><thead><tr><th>Category</th><th class="num">Within-store AOV uplift</th><th class="num">Stores with a lift</th></tr></thead><tbody>${aovRows()}</tbody></table>
  <p class="note">Currency-robust and store-mix-controlled. Triangulated across three independent samples at +11%, +15% and +14% median.</p>

  <h2>A quiz keeps paying after the session</h2>
  <p>${ATTRIBUTION.sameDay}% of first quiz-attributed orders happen the same day, ${ATTRIBUTION.within7}% within 7 days, ${ATTRIBUTION.within30}% within 30 days. But about 1 in 5 of all quiz-attributed orders land more than 30 days after the quiz. The quiz segments the shopper, and that segmentation keeps converting for months.</p>

  <h2>What counts as "the average store"</h2>
  <p>There is no single true number for ecommerce conversion. The honest range is roughly 1.6% to 2.9%. We benchmark against a round ${HEADLINE.baselinePct}%, which puts quiz finishers at about ${HEADLINE.multiple}x the average store.</p>
  <table class="avoid-break"><thead><tr><th>Source</th><th class="num">Average conversion</th><th>Scope</th></tr></thead><tbody>${baselineRows()}</tbody></table>
  <p class="note">Our 5.5% is a quiz-taker rate (orders per completed quiz); every figure above is a site-wide rate (orders per visitor). Quiz finishers are self-selected, so part of the gap is the funnel, not just the quiz.</p>

  <h2>Methodology</h2>
  <ul>${METHODOLOGY.map((m) => `<li>${m}</li>`).join("")}</ul>

  <div class="foot"><span>RevenueHunt &middot; The state of product recommendation quizzes 2026</span><span>revenuehunt.com/${REPORT.slug}</span></div>
</body></html>`;

async function main() {
  if (!existsSync(OUT_DIR)) await mkdir(OUT_DIR, { recursive: true });
  if (!existsSync(CHROME)) {
    console.warn(`! skipped PDF (Google Chrome not found at ${CHROME})`);
    return;
  }
  const tmp = join(tmpdir(), `report-${REPORT.slug}`);
  await mkdir(tmp, { recursive: true });
  const htmlPath = join(tmp, "report.html");
  await writeFile(htmlPath, html);
  await execFileP(CHROME, [
    "--headless",
    "--disable-gpu",
    "--no-pdf-header-footer",
    `--print-to-pdf=${OUT_PDF}`,
    `file://${htmlPath}`,
  ]);
  await rm(tmp, { recursive: true, force: true });
  console.log(`  ✓ ${OUT_PDF.replace(ROOT, "")}`);
}

await main();
