import { useEffect, useRef, useState, useMemo } from "react";
import { cn } from "@/lib/utils";

interface RotatingPhotoProps {
  images: string[];
  alt: string;
  className?: string;
  imgClassName?: string;
  /** Intervalo entre trocas (ms). Se não informado, usa valor aleatório entre 4,5s e 6,5s por instância */
  intervalMs?: number;
  /** Duração do crossfade (ms) */
  fadeMs?: number;
  /** Embaralhar ordem das imagens ao montar (aleatório por pessoa) */
  shuffle?: boolean;
}

function shuffleArray<T>(arr: T[], seed: number): T[] {
  const out = [...arr];
  let s = seed;
  for (let i = out.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280;
    const j = Math.floor((s / 233280) * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

const RotatingPhoto = ({
  images: imagesProp,
  alt,
  className,
  imgClassName,
  intervalMs: intervalMsProp,
  fadeMs = 600,
  shuffle = false,
}: RotatingPhotoProps) => {
  const images = useMemo(() => {
    if (!shuffle || imagesProp.length <= 1) return imagesProp;
    return shuffleArray(imagesProp, Math.floor(Math.random() * 1e6));
  }, [imagesProp, shuffle]);

  const intervalMs = useMemo(
    () => intervalMsProp ?? 4500 + Math.random() * 2000,
    [intervalMsProp]
  );

  const [index, setIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState<number | null>(null);
  const [nextVisible, setNextVisible] = useState(false);
  const indexRef = useRef(0);
  const intervalRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  indexRef.current = index;

  useEffect(() => {
    if (images.length <= 1) return undefined;

    const tick = () => {
      const current = indexRef.current;
      const next = (current + 1) % images.length;
      setNextVisible(false);
      setNextIndex(next);
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = requestAnimationFrame(() => {
          setNextVisible(true);
        });
      });
      timeoutRef.current = window.setTimeout(() => {
        setIndex(next);
        setNextIndex(null);
        setNextVisible(false);
      }, fadeMs);
    };

    intervalRef.current = window.setInterval(tick, intervalMs);

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [images.length, intervalMs, fadeMs]);

  return (
    <div className={cn("relative w-full h-full overflow-hidden bg-transparent", className)}>
      {/* Camada atual */}
      <img
        src={images[index]}
        alt={alt}
        className={cn(
          "absolute inset-0 w-full h-full object-cover object-top transition-opacity",
          nextIndex !== null ? "opacity-0" : "opacity-100",
          imgClassName
        )}
        style={{ transitionDuration: `${fadeMs}ms`, transitionTimingFunction: "ease-in-out" }}
      />
      {/* Camada seguinte (crossfade: sem flash branco) */}
      {nextIndex !== null && (
        <img
          src={images[nextIndex]}
          alt=""
          aria-hidden
          className={cn(
            "absolute inset-0 w-full h-full object-cover object-top transition-opacity",
            nextVisible ? "opacity-100" : "opacity-0",
            imgClassName
          )}
          style={{
            transitionDuration: `${fadeMs}ms`,
            transitionTimingFunction: "ease-in-out",
          }}
        />
      )}
    </div>
  );
};

export default RotatingPhoto;
