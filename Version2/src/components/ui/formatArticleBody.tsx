export function formatArticleBody(bodyStr: string): {
  toc: string;
  html: string;
} {
  const lines = bodyStr.split("\n");
  let headings: { id: string; text: string }[] = [];

  // Вставка текст-ссылок в строки
  const replaceLinks = (text: string): string => {
    return text.replace(
      /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
      `<a href="$2" target="_blank" class="text-blue-400 underline underline-offset-4 decoration-blue-400 hover:text-blue-300 hover:decoration-blue-300 transition-all duration-200 hover:underline-offset-8">$1</a>`
    );
  };

  const html = lines
    .map((line) => {
      if (/\[([^\]]+)\]\(([^)]+)\)/.test(line)) {
        line = replaceLinks(line);
      }

      if (line.trim().startsWith("#")) {
        const text = line.replace(/^#\s*/, "").trim();
        const id = text
          .toLowerCase()
          .replace(/[^\wа-яё0-9 ]/gi, "")
          .replace(/\s+/g, "-");

        headings.push({ id, text });

        return `<h2 id="${id}" class="text-2xl font-bold text-white my-4 scroll-mt-24">${text}</h2>`;
      } else if (line.trim().startsWith("https://")) {
        return `<br><img src="${line}">`;
      } else if (line.trim() == "") {
        return `<br>`;
      }

      return `<p class="text-gray-300 leading-relaxed">${line}</p>`;
    })
    .join("");

  const toc = headings
    .map(
      (h) =>
        `<li><a href="#${h.id}" class="block text-lg text-blue-400 hover:text-blue-300 transition-all duration-200 font-medium">${h.text}</a></li>`
    )
    .join("");

  return {
    toc: `<ul class="space-y-2">${toc}</ul>`,
    html,
  };
}
