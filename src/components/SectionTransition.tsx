import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionTransitionProps {
  children: ReactNode;
  fromColor: "green" | "white";
  toColor: "green" | "white";
  className?: string;
}

/**
 * Componente para criar transições suaves entre seções
 * Adiciona gradiente de fade entre cores diferentes
 * Suaviza a quebra visual entre seções verdes consecutivas
 */
const SectionTransition = ({
  children,
  fromColor,
  toColor,
  className,
}: SectionTransitionProps) => {
  // Se as cores são diferentes, adiciona transição suave
  if (fromColor !== toColor) {
    const isGreenToWhite = fromColor === "green" && toColor === "white";
    const isWhiteToGreen = fromColor === "white" && toColor === "green";

    return (
      <div className={cn("relative", className)}>
        {/* Gradiente de transição suave no topo */}
        {(isGreenToWhite || isWhiteToGreen) && (
          <div
            className={cn(
              "absolute top-0 left-0 right-0 h-20 md:h-32 pointer-events-none z-10",
              isGreenToWhite
                ? "bg-gradient-to-b from-primary via-primary/50 to-background/80"
                : "bg-gradient-to-b from-background via-background/50 to-primary/80"
            )}
            style={{
              backgroundBlendMode: "normal",
            }}
            aria-hidden="true"
          />
        )}
        <div className="relative z-20 overflow-hidden">{children}</div>
      </div>
    );
  }

  // Se as cores são iguais (verde→verde ou branco→branco), adiciona transição muito suave
  if (fromColor === toColor && fromColor === "green") {
    return (
      <div className={cn("relative overflow-hidden", className)}>
        {/* Transição muito suave entre verdes */}
        <div
          className="absolute top-0 left-0 right-0 h-12 md:h-16 pointer-events-none z-10 bg-gradient-to-b from-primary/80 via-primary/95 to-primary"
          aria-hidden="true"
        />
        <div className="relative z-20">{children}</div>
      </div>
    );
  }

  // Se as cores são iguais e brancas, sem transição especial
  return <>{children}</>;
};

export default SectionTransition;
