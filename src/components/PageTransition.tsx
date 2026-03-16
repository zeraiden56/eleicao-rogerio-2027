import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: React.ReactNode;
}

/**
 * Transição suave entre páginas.
 * Usa um fade rápido (100ms) apenas no momento da saída e readere o DOM
 * diretamente via ref para evitar re-render desnecessário que causava flicker.
 * Respeita prefers-reduced-motion.
 */
const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) return;

    el.style.opacity = "0";
    el.style.transform = "translateY(6px)";

    const timer = requestAnimationFrame(() => {
      el.style.transition =
        "opacity 0.25s ease-out, transform 0.25s ease-out";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });

    return () => cancelAnimationFrame(timer);
  }, [location.pathname]);

  return (
    <div ref={ref} style={{ opacity: 1 }}>
      {children}
    </div>
  );
};

export default PageTransition;
