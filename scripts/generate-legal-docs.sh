#!/usr/bin/env bash
# Regenerate downloadable copies of legal pages from their published source.
#   - Privacy, Security: DOCX + CSV (via pandoc)
#   - DPA: PDF (via pandoc + headless Chrome)
# Output: web/public/legal/* (committed; served as static assets).
# Requires: pandoc, python3, and Google Chrome (for the DPA PDF) on macOS.
#
# Run from the web/ directory: bun run legal  (or: bash scripts/generate-legal-docs.sh)

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/public/legal"
mkdir -p "$OUT"

if ! command -v pandoc >/dev/null 2>&1; then
  echo "error: pandoc not installed. brew install pandoc" >&2
  exit 1
fi

# Pairs: <source-md>:<output-basename>:<H1 title>
PAIRS=(
  "src/content/pages/privacy.md:RevenueHunt-Privacy-Policy:RevenueHunt Privacy Policy"
  "src/content/pages/security.md:RevenueHunt-Information-Security-Policy:RevenueHunt Information Security Policy"
)

for pair in "${PAIRS[@]}"; do
  IFS=':' read -r src base title <<< "$pair"
  src_abs="$ROOT/$src"
  tmp_md=$(mktemp -t legal.XXXXXX)
  mv "$tmp_md" "$tmp_md.md"
  tmp_md="$tmp_md.md"

  # Strip Astro frontmatter, prepend H1 title.
  {
    echo "# $title"
    echo
    awk 'BEGIN{p=0} /^---$/{p++; next} p>=2{print}' "$src_abs"
  } > "$tmp_md"

  pandoc "$tmp_md" -o "$OUT/$base.docx"

  python3 "$ROOT/scripts/md-to-csv.py" "$tmp_md" "$OUT/$base.csv"

  rm -f "$tmp_md"
  echo "  ✓ $base.docx + $base.csv"
done

# DPA: served as a downloadable PDF (the page itself is the source of truth).
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
if [ -x "$CHROME" ]; then
  dpa_dir=$(mktemp -d)
  # Strip frontmatter, drop the on-page "Download a copy" link, make the /tos/
  # link absolute (relative links don't resolve in a downloaded PDF), add title.
  {
    echo "# RevenueHunt Data Processing Agreement"
    echo
    awk 'BEGIN{p=0} /^---$/{p++; next} p>=2{print}' "$ROOT/src/content/pages/dpa.md" \
      | grep -v '^Download a copy:' \
      | sed 's#](/tos/)#](https://revenuehunt.com/tos/)#g'
  } > "$dpa_dir/dpa.md"

  cat > "$dpa_dir/style.css" <<'CSS'
@page { size: Letter; margin: 22mm 18mm; }
* { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
body { font-family: -apple-system, "Helvetica Neue", Arial, sans-serif; font-size: 10.5pt; line-height: 1.5; color: #16161D; }
h1 { font-size: 22pt; margin: 0 0 2pt; }
h2 { font-size: 14pt; margin: 22pt 0 6pt; border-bottom: 1px solid #d9d9e0; padding-bottom: 3pt; }
h3 { font-size: 11.5pt; margin: 14pt 0 4pt; }
p, li { margin: 4pt 0; }
em { color: #6b6b76; }
a { color: #16161D; text-decoration: none; }
hr { border: none; border-top: 1px solid #d9d9e0; margin: 14pt 0; }
table { border-collapse: collapse; width: 100%; margin: 8pt 0; font-size: 9.5pt; }
th, td { border: 1px solid #d9d9e0; padding: 5pt 7pt; text-align: left; vertical-align: top; }
th { background: #f4f4f6; }
ul { margin: 4pt 0; padding-left: 18pt; }
CSS

  pandoc "$dpa_dir/dpa.md" -f markdown+lists_without_preceding_blankline -t html5 -s \
    -c style.css -o "$dpa_dir/dpa.html"
  "$CHROME" --headless --disable-gpu --no-pdf-header-footer \
    --print-to-pdf="$OUT/RevenueHunt-Data-Processing-Agreement.pdf" "file://$dpa_dir/dpa.html" 2>/dev/null
  rm -rf "$dpa_dir"
  echo "  ✓ RevenueHunt-Data-Processing-Agreement.pdf"
else
  echo "  ! skipped DPA PDF (Google Chrome not found at $CHROME)"
fi

echo "done. files in $OUT"
