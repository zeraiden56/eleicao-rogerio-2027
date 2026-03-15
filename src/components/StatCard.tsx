import { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState, useRef } from "react";

interface StatCardProps {
  icon?: LucideIcon;
  value: number | string;
  label: string;
  suffix?: string;
  prefix?: string;
  description?: string;
  className?: string;
  animate?: boolean;
  duration?: number;
  variant?: "default" | "primary" | "muted";
}

/**
 * Componente para exibir estatísticas com animação opcional
 * Usado em: CrescimentoSection, ResumoQuantitativoSection
 */
const StatCard = ({
  icon: Icon,
  value,
  label,
  suffix = "",
  prefix = "",
  description,
  className,
  animate = true,
  duration = 2000,
  variant = "default",
}: StatCardProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const numericValue = typeof value === "number" ? value : parseFloat(value);

  useEffect(() => {
    if (!animate || typeof value !== "number") {
      setDisplayValue(numericValue);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [animate, isVisible, numericValue, value]);

  useEffect(() => {
    if (!isVisible || !animate || typeof value !== "number") {
      return;
    }

    const startTime = Date.now();
    const startValue = 0;

    const animateValue = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);

      const currentValue = startValue + (numericValue - startValue) * easeOut;
      setDisplayValue(Math.floor(currentValue));

      if (progress < 1) {
        requestAnimationFrame(animateValue);
      } else {
        setDisplayValue(numericValue);
      }
    };

    animateValue();
  }, [isVisible, animate, numericValue, duration, value]);

  const variantClasses = {
    default: "bg-white border-border/60",
    primary: "bg-primary/5 border-primary/20",
    muted: "bg-muted/50 border-border/40",
  };

  return (
    <Card
      ref={cardRef}
      className={cn(
        "p-6 md:p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        variantClasses[variant],
        className
      )}
    >
      {Icon && (
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
        </div>
      )}

      <div className="mb-2">
        <div className="flex items-baseline gap-1">
          {prefix && (
            <span className="text-2xl md:text-3xl font-bold text-foreground">
              {prefix}
            </span>
          )}
          <span
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tabular-nums"
            aria-live="polite"
          >
            {typeof value === "number" && animate
              ? displayValue.toLocaleString("pt-BR")
              : value}
          </span>
          {suffix && (
            <span className="text-xl md:text-2xl font-semibold text-muted-foreground">
              {suffix}
            </span>
          )}
        </div>
      </div>

      <h3 className="text-base md:text-lg font-semibold text-foreground mb-1">
        {label}
      </h3>

      {description && (
        <p className="text-sm text-muted-foreground mt-2">{description}</p>
      )}
    </Card>
  );
};

export default StatCard;
