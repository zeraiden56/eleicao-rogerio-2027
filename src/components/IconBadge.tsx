import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconBadgeProps {
  icon: LucideIcon;
  label: string;
  variant?: "default" | "primary" | "muted" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

/**
 * Badge reutilizável com ícone e texto
 * Usado para categorias, tags, status, etc.
 */
const IconBadge = ({
  icon: Icon,
  label,
  variant = "default",
  size = "md",
  className,
}: IconBadgeProps) => {
  const sizeClasses = {
    sm: "text-xs px-2 py-1 gap-1.5",
    md: "text-sm px-3 py-1.5 gap-2",
    lg: "text-base px-4 py-2 gap-2.5",
  };

  const variantClasses = {
    default: "bg-primary/10 text-primary border-primary/20",
    primary: "bg-primary text-primary-foreground border-primary",
    muted: "bg-muted text-muted-foreground border-border",
    outline: "bg-transparent text-foreground border-border",
  };

  const iconSizes = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border font-medium transition-colors",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      role="status"
      aria-label={label}
    >
      <Icon className={iconSizes[size]} aria-hidden="true" />
      <span>{label}</span>
    </span>
  );
};

export default IconBadge;
