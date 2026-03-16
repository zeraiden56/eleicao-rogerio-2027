import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Lê `location.state.searchQuery` (definido pela busca global) e, após a
 * página renderizar, destaca visualmente os trechos que casam com o termo
 * pesquisado — estilo marca-texto amarelo. Rola até o primeiro resultado.
 * As marcações somem gradualmente após 6 s.
 */
const SearchHighlighter = () => {
  const { pathname, state } = useLocation();
  const searchQuery: string = (state as Record<string, unknown>)?.searchQuery as string || "";

  useEffect(() => {
    if (!searchQuery) return;

    // Garante que a página comece do topo antes de scrollar até o match
    window.scrollTo({ top: 0, behavior: "auto" });

    let marks: HTMLElement[] = [];
    let fadeTimer: ReturnType<typeof setTimeout>;

    // Aguarda a página terminar de renderizar (maior que os timers de useScrollToTopOnMount)
    const mainTimer = setTimeout(() => {
      const container = document.querySelector("main");
      if (!container) return;

      marks = markTextInContainer(container, searchQuery);

      if (marks.length > 0) {
        marks[0].scrollIntoView({ behavior: "smooth", block: "center" });
      }

      // Dissolve as marcações após 6 s
      fadeTimer = setTimeout(() => {
        for (const m of marks) {
          m.style.transition = "background-color 1s ease, box-shadow 1s ease";
          m.style.backgroundColor = "transparent";
          m.style.boxShadow = "none";
        }
        setTimeout(() => unwrapMarks(marks), 1100);
      }, 6000);
    }, 400);

    return () => {
      clearTimeout(mainTimer);
      clearTimeout(fadeTimer);
      unwrapMarks(marks);
    };
  }, [pathname, searchQuery]);

  return null;
};

/** Remove os elementos <mark> do DOM, deixando o texto original no lugar. */
function unwrapMarks(marks: HTMLElement[]) {
  for (const mark of marks) {
    const parent = mark.parentNode;
    if (parent) {
      while (mark.firstChild) parent.insertBefore(mark.firstChild, mark);
      parent.removeChild(mark);
    }
  }
}

const SKIP_TAGS = new Set([
  "script", "style", "input", "textarea", "button", "mark",
  "svg", "path", "noscript", "meta", "link",
]);

/**
 * Percorre os nós de texto dentro de `container` e envolve cada ocorrência
 * do `query` num elemento <mark> com estilo marca-texto amarelo.
 */
function markTextInContainer(container: Element, query: string): HTMLElement[] {
  const marks: HTMLElement[] = [];
  const queryLower = query.toLowerCase();

  // Coleta todos os nós de texto que contêm o termo (antes de alterar o DOM)
  const textNodes: Text[] = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      if (SKIP_TAGS.has(parent.tagName.toLowerCase())) return NodeFilter.FILTER_REJECT;
      if ((node.textContent ?? "").toLowerCase().includes(queryLower)) {
        return NodeFilter.FILTER_ACCEPT;
      }
      return NodeFilter.FILTER_SKIP;
    },
  });

  let current = walker.nextNode();
  while (current) {
    textNodes.push(current as Text);
    current = walker.nextNode();
  }

  // Substitui cada nó de texto pelo fragmento com <mark>s
  for (const textNode of textNodes) {
    const text = textNode.textContent ?? "";
    const lower = text.toLowerCase();
    const frag = document.createDocumentFragment();
    let last = 0;
    let idx = lower.indexOf(queryLower);
    let matched = false;

    while (idx !== -1) {
      matched = true;
      if (idx > last) frag.appendChild(document.createTextNode(text.slice(last, idx)));

      const mark = document.createElement("mark");
      mark.textContent = text.slice(idx, idx + query.length);
      mark.style.cssText =
        "background-color:#fef08a;color:inherit;border-radius:3px;" +
        "padding:0 2px;box-shadow:0 0 0 1px #eab30866;";
      frag.appendChild(mark);
      marks.push(mark);

      last = idx + query.length;
      idx = lower.indexOf(queryLower, last);
    }

    if (matched) {
      if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
      textNode.parentNode?.replaceChild(frag, textNode);
    }
  }

  return marks;
}

export default SearchHighlighter;
