#!/usr/bin/env python3
"""Convert a markdown document into a two-column CSV: section, content.

Each H2 (##) becomes a row; everything between H2s becomes the content for that
section. H1 becomes the first row labelled "Title". Markdown formatting in the
content is preserved as plain text (links flattened to "text (url)").
"""

import csv
import re
import sys
from pathlib import Path


LINK_RE = re.compile(r"\[([^\]]+)\]\(([^)]+)\)")


def flatten(text: str) -> str:
    text = LINK_RE.sub(r"\1 (\2)", text)
    text = re.sub(r"[*_`]+", "", text)
    text = re.sub(r"^\s*[-*]\s+", "• ", text, flags=re.MULTILINE)
    return text.strip()


def main() -> None:
    src = Path(sys.argv[1])
    dst = Path(sys.argv[2])

    title = None
    sections: list[tuple[str, list[str]]] = []
    current: list[str] | None = None

    for raw in src.read_text(encoding="utf-8").splitlines():
        if raw.startswith("# ") and title is None:
            title = raw[2:].strip()
            continue
        if raw.startswith("## "):
            heading = raw[3:].strip()
            current = []
            sections.append((heading, current))
            continue
        if current is not None:
            current.append(raw)

    with dst.open("w", encoding="utf-8", newline="") as f:
        w = csv.writer(f)
        w.writerow(["Section", "Content"])
        if title:
            w.writerow(["Title", title])
        for heading, lines in sections:
            body = flatten("\n".join(lines)).strip()
            if body:
                w.writerow([heading, body])


if __name__ == "__main__":
    main()
