import React from "react";

interface FormattedAiMessageProps {
  content: string;
  isLight: boolean;
}

/**
 * Parses inline formatting: **bold**, *italic*, `code`, and [links](url).
 */
function renderInlineText(text: string): React.ReactNode[] {
  // Regex matches markdown links [text](url), **bold**, *italic*, and `code`
  const regex = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g;
  const parts = text.split(regex);

  return parts.map((part, i) => {
    // Markdown links: [label](url)
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const [, label, url] = linkMatch;
      const safeUrl = url.startsWith("http://") || url.startsWith("https://") ? url : "#";
      return (
        <a
          key={i}
          href={safeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-600 dark:text-amber-400 font-medium underline underline-offset-2 hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
        >
          {label}
        </a>
      );
    }

    // Bold terms
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong
          key={i}
          className="font-bold not-italic text-amber-900 dark:text-amber-200"
        >
          {part.slice(2, -2)}
        </strong>
      );
    }

    // Italic terms (only when explicitly marked with *term*)
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <em key={i} className="italic text-amber-800/90 dark:text-amber-300/90">
          {part.slice(1, -1)}
        </em>
      );
    }

    // Inline code
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={i}
          className="not-italic px-1.5 py-0.5 rounded font-mono text-[11px] bg-amber-500/15 text-amber-900 dark:text-amber-200"
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    return part;
  });
}

/**
 * Parses markdown tables into clean structured table data.
 */
function parseMarkdownTable(lines: string[]): { headers: string[]; rows: string[][] } | null {
  if (lines.length < 2) return null;

  const cleanRow = (line: string) =>
    line
      .trim()
      .replace(/^\|/, "")
      .replace(/\|$/, "")
      .split("|")
      .map((c) => c.trim());

  const headers = cleanRow(lines[0]);
  const isSeparator = /^\|?(\s*:?-+:?\s*\|)+\s*:?-+:?\s*\|?$/.test(lines[1].trim());
  if (!isSeparator) return null;

  const rows: string[][] = [];
  for (let i = 2; i < lines.length; i++) {
    if (lines[i].trim()) {
      rows.push(cleanRow(lines[i]));
    }
  }

  return { headers, rows };
}

export const FormattedAiMessage: React.FC<FormattedAiMessageProps> = ({ content, isLight }) => {
  const lines = content.split("\n");
  const blocks: React.ReactNode[] = [];

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // 1. Skip empty lines
    if (!trimmed) {
      i++;
      continue;
    }

    // 2. Table Block Detection
    if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("|") && lines[i].trim().endsWith("|")) {
        tableLines.push(lines[i]);
        i++;
      }

      const tableData = parseMarkdownTable(tableLines);
      if (tableData) {
        blocks.push(
          <div
            key={`table-${i}`}
            className="my-2.5 overflow-x-auto rounded-xl border border-amber-900/15 dark:border-slate-700 bg-amber-50/50 dark:bg-slate-900/60 shadow-xs"
          >
            <table className="w-full border-collapse text-left text-[12px]">
              <thead>
                <tr
                  className={
                    isLight
                      ? "bg-amber-100/80 text-amber-950 border-b border-amber-200"
                      : "bg-slate-800 text-amber-300 border-b border-slate-700"
                  }
                >
                  {tableData.headers.map((h, hIdx) => (
                    <th key={hIdx} className="px-3 py-1.5 font-bold tracking-wide">
                      {renderInlineText(h)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-amber-900/10 dark:divide-slate-800/80">
                {tableData.rows.map((row, rIdx) => (
                  <tr
                    key={rIdx}
                    className={`transition-colors ${
                      isLight ? "hover:bg-amber-100/40" : "hover:bg-slate-800/50"
                    }`}
                  >
                    {row.map((cell, cIdx) => (
                      <td
                        key={cIdx}
                        className="px-3 py-1.5 align-top leading-relaxed text-slate-800 dark:text-slate-200"
                      >
                        {renderInlineText(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        continue;
      }
    }

    // 3. Headings (if generated)
    if (trimmed.startsWith("### ")) {
      blocks.push(
        <h4
          key={`h3-${i}`}
          className="font-bold text-xs uppercase tracking-wide text-amber-700 dark:text-amber-400 mt-2 mb-1"
        >
          {renderInlineText(trimmed.replace(/^###\s+/, ""))}
        </h4>
      );
      i++;
      continue;
    }

    if (trimmed.startsWith("## ")) {
      blocks.push(
        <h3
          key={`h2-${i}`}
          className="font-extrabold text-sm text-amber-800 dark:text-amber-300 mt-2.5 mb-1 flex items-center gap-1.5"
        >
          {renderInlineText(trimmed.replace(/^##\s+/, ""))}
        </h3>
      );
      i++;
      continue;
    }

    if (trimmed.startsWith("# ")) {
      blocks.push(
        <h2
          key={`h1-${i}`}
          className="font-black text-sm text-amber-900 dark:text-amber-200 mt-2.5 mb-1"
        >
          {renderInlineText(trimmed.replace(/^#\s+/, ""))}
        </h2>
      );
      i++;
      continue;
    }

    // 4. Blockquotes
    if (trimmed.startsWith("> ")) {
      blocks.push(
        <blockquote
          key={`quote-${i}`}
          className="my-1.5 border-l-2 border-amber-500 pl-2.5 text-[12px] opacity-85"
        >
          {renderInlineText(trimmed.replace(/^>\s*/, ""))}
        </blockquote>
      );
      i++;
      continue;
    }

    // 5. Bullet Lists (- or *)
    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      const listItems: string[] = [];
      while (
        i < lines.length &&
        (lines[i].trim().startsWith("- ") || lines[i].trim().startsWith("* "))
      ) {
        listItems.push(lines[i].trim().replace(/^[-*]\s+/, ""));
        i++;
      }

      blocks.push(
        <ul key={`ul-${i}`} className="my-1.5 space-y-1 pl-0.5">
          {listItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 leading-relaxed text-[13.5px]">
              <span className="select-none text-amber-500 font-bold text-xs mt-0.5">•</span>
              <span className="flex-1">{renderInlineText(item)}</span>
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // 6. Numbered Lists (1. 2. etc.)
    if (/^\d+\.\s+/.test(trimmed)) {
      const listItems: { num: string; text: string }[] = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
        const match = lines[i].trim().match(/^(\d+)\.\s+(.*)$/);
        if (match) {
          listItems.push({ num: match[1], text: match[2] });
        }
        i++;
      }

      blocks.push(
        <ol key={`ol-${i}`} className="my-1.5 space-y-1 pl-0.5">
          {listItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 leading-relaxed text-[13.5px]">
              <span className="select-none text-amber-600 dark:text-amber-400 font-bold text-[11.5px] mt-0.5">
                {item.num}.
              </span>
              <span className="flex-1">{renderInlineText(item.text)}</span>
            </li>
          ))}
        </ol>
      );
      continue;
    }

    // 7. Standard Paragraph (13.5px / 14px comfortable reading, non-italic)
    blocks.push(
      <p key={`p-${i}`} className="leading-relaxed text-[13.5px]">
        {renderInlineText(trimmed)}
      </p>
    );
    i++;
  }

  return (
    <div className="space-y-1.5 font-sans not-italic text-slate-800 dark:text-slate-100">
      {blocks}
    </div>
  );
};

export default FormattedAiMessage;
