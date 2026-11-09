import React from "react";

interface FormattedAiMessageProps {
  content: string;
  isLight: boolean;
}

/**
 * Parses inline formatting: **bold**, *italic*, `code`, and [links](url).
 */
function renderInlineText(text: string, isLight: boolean): React.ReactNode[] {
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
          className={`not-italic font-medium underline underline-offset-2 transition-colors ${
            isLight
              ? "text-amber-700 hover:text-amber-900"
              : "text-amber-300 hover:text-amber-200"
          }`}
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
          className={`font-bold not-italic ${
            isLight ? "text-amber-950" : "text-amber-300"
          }`}
        >
          {part.slice(2, -2)}
        </strong>
      );
    }

    // Explicit italic markup
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <em
          key={i}
          className={`italic font-medium ${
            isLight ? "text-amber-900" : "text-amber-200"
          }`}
        >
          {part.slice(1, -1)}
        </em>
      );
    }

    // Inline code
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={i}
          className={`not-italic px-1.5 py-0.5 rounded font-mono text-[11px] ${
            isLight
              ? "bg-amber-500/15 text-amber-950"
              : "bg-slate-700/80 text-amber-200"
          }`}
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
            className={`my-2.5 overflow-x-auto rounded-xl border shadow-xs ${
              isLight
                ? "border-amber-900/15 bg-amber-50/50"
                : "border-slate-700 bg-slate-900/80"
            }`}
          >
            <table className="w-full border-collapse text-left text-[12px]">
              <thead>
                <tr
                  className={
                    isLight
                      ? "bg-amber-100/90 text-amber-950 border-b border-amber-200"
                      : "bg-slate-800 text-amber-300 border-b border-slate-700"
                  }
                >
                  {tableData.headers.map((h, hIdx) => (
                    <th key={hIdx} className="px-3 py-1.5 font-bold tracking-wide not-italic">
                      {renderInlineText(h, isLight)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody
                className={`divide-y ${
                  isLight ? "divide-amber-900/10" : "divide-slate-800/80"
                }`}
              >
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
                        className={`px-3 py-1.5 align-top leading-relaxed italic ${
                          isLight ? "text-slate-800" : "text-slate-100"
                        }`}
                      >
                        {renderInlineText(cell, isLight)}
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

    // 3. Headings
    if (trimmed.startsWith("### ")) {
      blocks.push(
        <h4
          key={`h3-${i}`}
          className={`font-bold text-xs uppercase tracking-wide not-italic mt-2 mb-1 ${
            isLight ? "text-amber-800" : "text-amber-300"
          }`}
        >
          {renderInlineText(trimmed.replace(/^###\s+/, ""), isLight)}
        </h4>
      );
      i++;
      continue;
    }

    if (trimmed.startsWith("## ")) {
      blocks.push(
        <h3
          key={`h2-${i}`}
          className={`font-extrabold text-sm not-italic mt-2.5 mb-1 flex items-center gap-1.5 ${
            isLight ? "text-amber-900" : "text-amber-200"
          }`}
        >
          {renderInlineText(trimmed.replace(/^##\s+/, ""), isLight)}
        </h3>
      );
      i++;
      continue;
    }

    if (trimmed.startsWith("# ")) {
      blocks.push(
        <h2
          key={`h1-${i}`}
          className={`font-black text-sm not-italic mt-2.5 mb-1 ${
            isLight ? "text-amber-950" : "text-amber-100"
          }`}
        >
          {renderInlineText(trimmed.replace(/^#\s+/, ""), isLight)}
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
          className={`my-1.5 border-l-2 pl-2.5 text-[12px] italic ${
            isLight
              ? "border-amber-600 text-slate-700"
              : "border-amber-400 text-slate-300"
          }`}
        >
          {renderInlineText(trimmed.replace(/^>\s*/, ""), isLight)}
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
            <li
              key={idx}
              className={`flex items-start gap-2 leading-relaxed text-[13.5px] italic ${
                isLight ? "text-slate-800" : "text-slate-100"
              }`}
            >
              <span className="select-none not-italic text-amber-500 font-bold text-xs mt-0.5">•</span>
              <span className="flex-1">{renderInlineText(item, isLight)}</span>
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
            <li
              key={idx}
              className={`flex items-start gap-2 leading-relaxed text-[13.5px] italic ${
                isLight ? "text-slate-800" : "text-slate-100"
              }`}
            >
              <span
                className={`select-none not-italic font-bold text-[11.5px] mt-0.5 ${
                  isLight ? "text-amber-700" : "text-amber-400"
                }`}
              >
                {item.num}.
              </span>
              <span className="flex-1">{renderInlineText(item.text, isLight)}</span>
            </li>
          ))}
        </ol>
      );
      continue;
    }

    // 7. Standard Paragraph (in italic with guaranteed theme contrast)
    blocks.push(
      <p
        key={`p-${i}`}
        className={`leading-relaxed text-[13.5px] italic ${
          isLight ? "text-slate-800" : "text-slate-100"
        }`}
      >
        {renderInlineText(trimmed, isLight)}
      </p>
    );
    i++;
  }

  return (
    <div
      className={`space-y-1.5 font-sans italic ${
        isLight ? "text-slate-800" : "text-slate-100"
      }`}
    >
      {blocks}
    </div>
  );
};

export default FormattedAiMessage;
