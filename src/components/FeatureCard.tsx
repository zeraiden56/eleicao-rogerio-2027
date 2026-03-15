import { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  variant?: "default" | "highlight" | "minimal";
  onClick?: () => void;
}

/**
 * Componente reutilizável para exibir features/propostas/resultados
 * Usado em: GestaoResultadosSection, Propostas, PlanoDeGestao
 */
const FeatureCard = ({
  icon: Icon,
  title,
  description,
  className,
  variant = "default",
  onClick,
}: FeatureCardProps) => {
  const baseClasses = `
    relative
    p-6 md:p-8
    transition-all duration-300
    group
    flex flex-col
    ${onClick ? "cursor-pointer" : ""}
  `;

  const variantClasses = {
    default: `
      bg-card/95
      border border-border/60
      rounded-2xl
      hover:-translate-y-1
      hover:shadow-hover
      overflow-hidden
    `,
    highlight: `
      bg-primary/5
      border-2 border-primary/20
      rounded-2xl
      hover:border-primary/40
      hover:shadow-lg
    `,
    minimal: `
      bg-transparent
      border-0
      shadow-none
      hover:bg-muted/50
    `,
  };

  return (
    <Card
      className={cn(baseClasses, variantClasses[variant], className)}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
    >
      {/* Faixa institucional (apenas para variant default) - alinhada */}
      {variant === "default" && (
        <span
          className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-2xl transition-all duration-300 group-hover:w-1.5"
          aria-hidden="true"
        />
      )}

      <div className={cn(variant === "default" ? "pl-4" : "")}>
        {/* Ícone */}
        <div
          className={cn(
            "w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 flex-shrink-0",
            variant === "default"
              ? "bg-primary/10"
              : variant === "highlight"
                ? "bg-primary/20"
                : "bg-muted"
          )}
        >
          <Icon
            className={cn(
              "w-6 h-6 transition-colors duration-300",
              variant === "minimal" ? "text-muted-foreground" : "text-primary"
            )}
            aria-hidden="true"
          />
        </div>

        {/* Título */}
        <h3 className="text-lg md:text-xl font-semibold mb-2.5 text-foreground leading-tight">
          {title}
        </h3>

        {/* Descrição */}
        <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
          {description}
        </p>
      </div>
    </Card>
  );
};

export default FeatureCard;
