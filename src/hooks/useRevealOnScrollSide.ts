import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Hook para animar elementos ao entrar na viewport.
 * Reexecuta ao mudar de rota para que conteúdo novo (Chapa, Home, etc.) seja observado
 * e as animações revelem ao rolar — evita páginas em branco ao navegar.
 */
export const useRevealOnScrollSide = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const observerOptions = {
      threshold: 0.08,
      rootMargin: "0px 0px -40px 0px",
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
      const elements = document.querySelectorAll(
        ".reveal-left, .reveal-right, .reveal-up, .scroll-reveal"
      );
      elements.forEach((el) => observer.observe(el));
    };

    observe();
    const timer = setTimeout(observe, 300);

    return () => {
      clearTimeout(timer);
      document
        .querySelectorAll(".reveal-left, .reveal-right, .reveal-up, .scroll-reveal")
        .forEach((el) => observer.unobserve(el));
    };
  }, [pathname]);
};
