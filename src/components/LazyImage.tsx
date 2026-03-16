import { useState, useEffect, useRef, ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholder?: string;
  blurDataURL?: string;
  className?: string;
  containerClassName?: string;
  onLoad?: () => void;
}

/**
 * Componente de imagem com lazy loading e blur-up effect
 * Otimiza performance carregando imagens apenas quando visíveis
 */
const LazyImage = ({
  src,
  alt,
  placeholder,
  blurDataURL,
  className,
  containerClassName,
  onLoad,
  ...props
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "300px", // Pré-carrega 300px antes de entrar na viewport
      }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setError(true);
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden w-full h-full", containerClassName)}
    >
      {/* Placeholder/Blur */}
      {(placeholder || blurDataURL) && !isLoaded && !error && (
        <div
          className={cn(
            "absolute inset-0 bg-muted animate-pulse w-full h-full",
            blurDataURL && "blur-sm scale-110"
          )}
          style={
            blurDataURL
              ? {
                  backgroundImage: `url(${blurDataURL})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }
              : undefined
          }
          aria-hidden="true"
        />
      )}

      {/* Imagem real */}
      {isInView && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className={cn(
            "transition-opacity duration-500 w-full h-full",
            isLoaded ? "opacity-100" : "opacity-0",
            className
          )}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
          {...props}
        />
      )}

      {/* Fallback para erro */}
      {error && placeholder && (
        <div
          className={cn(
            "absolute inset-0 bg-muted flex items-center justify-center w-full h-full",
            className
          )}
          aria-label={alt}
        >
          <span className="text-muted-foreground text-sm">Imagem não disponível</span>
        </div>
      )}
    </div>
  );
};

export default LazyImage;
