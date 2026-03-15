import { useEffect, useLayoutEffect } from "react";

const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  const main = document.querySelector("main");
  if (main && typeof main.scrollTo === "function") main.scrollTo(0, 0);
};

/**
 * Força a página a rolar para o topo ao montar.
 * Usado em páginas onde o ScrollToTop global não era suficiente (ex.: Gestões, Conselho).
 */
export const useScrollToTopOnMount = () => {
  useLayoutEffect(() => scrollToTop(), []);

  useEffect(() => {
    scrollToTop();
    const t1 = setTimeout(scrollToTop, 50);
    const t2 = setTimeout(scrollToTop, 150);
    const t3 = setTimeout(scrollToTop, 350);
    const t4 = setTimeout(scrollToTop, 600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);
};
