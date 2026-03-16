import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Hook para animar elementos ao entrar na viewport.
 * - Reexecuta ao mudar de rota para que novo conteúdo seja observado.
 * - Respeita prefers-reduced-motion: aplica revealed imediatamente sem animar.
 * - Limpa a classe "revealed" ao sair da rota para que o reveal ocorra
 *   novamente ao retornar (opcional, comentado abaixo se não for desejado).
 */
export const useRevealOnScrollSide = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const selectors =
      ".reveal-left, .reveal-right, .reveal-up, .scroll-reveal";

    if (prefersReduced) {
      document.querySelectorAll(selectors).forEach((el) => {
        el.classList.add("revealed");
      });
      return;
    }

    const observerOptions = {
      threshold: 0.06,
      rootMargin: "0px 0px -32px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const observe = () => {
      document
        .querySelectorAll(selectors)
        .forEach((el) => observer.observe(el));
    };

    observe();
    // Re-observa após 300ms para pegar elementos montados de forma assíncrona
    const timer = setTimeout(observe, 300);

    return () => {
      clearTimeout(timer);
      document
        .querySelectorAll(selectors)
        .forEach((el) => observer.unobserve(el));
    };
  }, [pathname]);
};
