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
 * Se a URL contiver um hash (#ancora), o scroll ao topo é ignorado
 * para permitir que a navegação por âncora funcione corretamente.
 */
export const useScrollToTopOnMount = () => {
  const hasHash = typeof window !== "undefined" && window.location.hash !== "";

  useLayoutEffect(() => {
    if (hasHash) return;
    scrollToTop();
  }, [hasHash]);

  useEffect(() => {
    if (hasHash) return;
    scrollToTop();
    const t1 = setTimeout(scrollToTop, 50);
    const t2 = setTimeout(scrollToTop, 150);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [hasHash]);
};
