import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  onComplete?: () => void;
}

/**
 * Contador animado que incrementa até o valor final
 * Usado em estatísticas e métricas
 */
const AnimatedCounter = ({
  value,
  duration = 2000,
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
  onComplete,
}: AnimatedCounterProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);
  const hasCompletedRef = useRef(false);

  useEffect(() => {
    if (!counterRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(counterRef.current);

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible || hasCompletedRef.current) return;

    const startTime = Date.now();
    const startValue = 0;

    const animateValue = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out cubic)
      const easeOut = 1 - Math.pow(1 - progress, 3);

      const currentValue = startValue + (value - startValue) * easeOut;
      setDisplayValue(
        decimals > 0 ? parseFloat(currentValue.toFixed(decimals)) : Math.floor(currentValue)
      );

      if (progress < 1) {
        requestAnimationFrame(animateValue);
      } else {
        setDisplayValue(value);
        hasCompletedRef.current = true;
        onComplete?.();
      }
    };

    animateValue();
  }, [isVisible, value, duration, decimals, onComplete]);

  const formatValue = (val: number) => {
    return decimals > 0
      ? val.toFixed(decimals).replace(".", ",")
      : val.toLocaleString("pt-BR");
  };

  return (
    <span ref={counterRef} className={cn("tabular-nums", className)}>
      {prefix}
      {formatValue(displayValue)}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
