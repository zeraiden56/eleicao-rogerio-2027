import { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

const SectionTitle = ({
  children,
  subtitle,
  centered = false,
  className = "",
  titleClassName = "",
  subtitleClassName = "",
}: SectionTitleProps) => {
  return (
    <div
      className={`mb-8 md:mb-12 ${centered ? "text-center" : ""} ${className}`}
    >
      <h2
        className={`
          text-3xl md:text-4xl lg:text-5xl
          font-bold
          ${titleClassName || "text-foreground"}
        `}
      >
        {children}
      </h2>

      {subtitle && (
        <p
          className={`
            mt-3
            text-lg md:text-xl
            max-w-3xl mx-auto
            ${subtitleClassName || "text-muted-foreground"}
          `}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
