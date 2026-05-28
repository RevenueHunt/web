import { readdir, stat, unlink } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const dir = process.argv[2] || "public/img/blog/ecommerce-sales-funnel-examples";
const MAX_WIDTH = 1600;
const QUALITY = 85;

const files = (await readdir(dir)).filter((f) => f.toLowerCase().endsWith(".png"));

let totalBefore = 0;
let totalAfter = 0;

for (const file of files) {
  const src = join(dir, file);
  const dst = src.replace(/\.png$/i, ".webp");

  const before = (await stat(src)).size;
  totalBefore += before;

  const meta = await sharp(src).metadata();
  let pipeline = sharp(src);
  if (meta.width && meta.width > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, kernel: "lanczos3" });
  }
  await pipeline.webp({ quality: QUALITY, effort: 6 }).toFile(dst);

  const after = (await stat(dst)).size;
  totalAfter += after;

  const pct = ((1 - after / before) * 100).toFixed(0);
  console.log(`${file}: ${(before / 1024).toFixed(0)} KB → ${(after / 1024).toFixed(0)} KB (-${pct}%)`);

  await unlink(src);
}

const totalPct = ((1 - totalAfter / totalBefore) * 100).toFixed(0);
console.log(
  `\nTotal: ${(totalBefore / 1024).toFixed(0)} KB → ${(totalAfter / 1024).toFixed(0)} KB (-${totalPct}%)`,
);
