import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Rola janela e todos os containers de scroll para o topo.
 * Garante que, ao trocar de página, o usuário sempre veja o início da nova página (contexto de cima para baixo).
 */
const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  const main = document.querySelector("main");
  if (main && typeof main.scrollTo === "function") main.scrollTo(0, 0);
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  // Imediato, antes da pintura: nova página já abre no topo
  useLayoutEffect(() => {
    scrollToTop();
    const raf1 = requestAnimationFrame(() => {
      scrollToTop();
      requestAnimationFrame(scrollToTop);
    });
    return () => cancelAnimationFrame(raf1);
  }, [pathname]);

  // Repete após paint/transição para vencer qualquer restauração de scroll ou layout tardio
  useEffect(() => {
    const t1 = setTimeout(scrollToTop, 50);
    const t2 = setTimeout(scrollToTop, 150);
    const t3 = setTimeout(scrollToTop, 350);
    const t4 = setTimeout(scrollToTop, 600);
    const t5 = setTimeout(scrollToTop, 1000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;
