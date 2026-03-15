import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface EixoCardProps {
  id: string;
  title: string;
  icon: LucideIcon;
  isActive: boolean;
  onClick: () => void;
}

/**
 * Card individual para cada eixo do plano de gestão
 */
const EixoCard = ({ id, title, icon: Icon, isActive, onClick }: EixoCardProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-left rounded-2xl p-6 transition-all duration-300",
        "bg-primary-foreground text-foreground",
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        isActive
          ? "ring-4 ring-primary/40 shadow-xl scale-[1.02]"
          : "hover:shadow-md hover:scale-[1.01]"
      )}
      aria-pressed={isActive}
      aria-label={`Eixo ${id}: ${title}`}
    >
      <div className="flex items-start gap-4">
        <div
          className={cn(
            "w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300",
            isActive ? "bg-primary/20" : "bg-primary/10"
          )}
        >
          <Icon
            className={cn(
              "w-6 h-6 transition-colors duration-300",
              isActive ? "text-primary" : "text-primary/80"
            )}
            aria-hidden="true"
          />
        </div>
        <div className="flex-1">
          <p className="text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wide">
            {id.toUpperCase()}
          </p>
          <h3 className="font-bold text-base leading-snug">{title}</h3>
        </div>
      </div>
    </button>
  );
};

export default EixoCard;
