#!/usr/bin/env bash
# Regenerate downloadable copies of legal pages (Privacy, Security) as DOCX + CSV.
# Output: web/public/legal/*.docx and *.csv (committed; served as static assets).
# Requires: pandoc, python3 (both available via Homebrew on macOS).
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

echo "done. files in $OUT"
