import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  background?: "default" | "primary" | "secondary" | "muted" | "transparent";
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  id?: string;
}

/**
 * Container padronizado para seções
 * Garante consistência de espaçamento, largura máxima e backgrounds
 */
const SectionContainer = ({
  children,
  className,
  background = "default",
  padding = "lg",
  maxWidth = "2xl",
  id,
}: SectionContainerProps) => {
  const backgroundClasses = {
    default: "bg-background relative",
    primary: "bg-primary relative",
    secondary: "bg-secondary/40 relative",
    muted: "bg-muted/30 relative",
    transparent: "bg-transparent relative",
  };

  const paddingClasses = {
    none: "",
    sm: "py-12",
    md: "py-16 md:py-20",
    lg: "py-20 md:py-28",
    xl: "py-24 md:py-32",
  };

  const maxWidthClasses = {
    sm: "max-w-screen-sm",
    md: "max-w-screen-md",
    lg: "max-w-screen-lg",
    xl: "max-w-screen-xl",
    "2xl": "max-w-screen-2xl",
    full: "max-w-full",
  };

  return (
    <section
      id={id}
      className={cn(
        "w-full",
        backgroundClasses[background],
        className
      )}
    >
      {/* Textura e gradiente para fundos verdes (primary) */}
      {background === "primary" && (
        <>
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{ 
              background: "var(--gradient-primary-textured)",
            }}
            aria-hidden="true"
          />
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{ 
              backgroundImage: "var(--texture-grain-primary)",
              backgroundSize: "60px 60px",
            }}
            aria-hidden="true"
          />
        </>
      )}
      
      {/* Textura e gradiente para fundos brancos/claros */}
      {(background === "default" || background === "muted" || background === "secondary") && (
        <>
          {background === "default" && (
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{ 
                background: "var(--gradient-background-textured)",
              }}
              aria-hidden="true"
            />
          )}
          {background === "muted" && (
            <div 
              className="absolute inset-0 opacity-50 pointer-events-none"
              style={{ background: "var(--gradient-muted)" }}
              aria-hidden="true"
            />
          )}
          {background === "secondary" && (
            <div 
              className="absolute inset-0 opacity-60 pointer-events-none"
              style={{ background: "var(--gradient-secondary)" }}
              aria-hidden="true"
            />
          )}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{ 
              backgroundImage: "var(--texture-grain-light)",
              backgroundSize: "60px 60px",
            }}
            aria-hidden="true"
          />
        </>
      )}
      
      <div
        className={cn(
          "container mx-auto px-4 relative z-10",
          maxWidthClasses[maxWidth],
          paddingClasses[padding]
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
