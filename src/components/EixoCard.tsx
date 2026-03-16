import { cn } from "@/lib/utils";

interface EixoCardProps {
  id: string;
  title: string;
  order: number;
  isActive: boolean;
  onClick: () => void;
}

/**
 * Card individual para cada eixo do plano de gestão.
 * Exibe o número do eixo em vez de ícone para leitura rápida.
 */
const EixoCard = ({ id, title, order, isActive, onClick }: EixoCardProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-left rounded-2xl p-5 transition-all duration-200 w-full",
        "bg-primary-foreground text-foreground",
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        isActive
          ? "ring-4 ring-primary/40 shadow-xl scale-[1.02]"
          : "hover:shadow-md hover:scale-[1.01]"
      )}
      aria-pressed={isActive}
      aria-label={`Eixo ${order}: ${title}`}
    >
      <div className="flex items-start gap-4">
        {/* Número do eixo */}
        <div
          className={cn(
            "w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-200",
            isActive ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
          )}
        >
          <span className="text-xl font-black leading-none">{order}</span>
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-bold text-muted-foreground mb-1 uppercase tracking-wide">
            {id.toUpperCase()}
          </p>
          <h3 className="font-bold text-sm leading-snug">{title}</h3>
        </div>
      </div>
    </button>
  );
};

export default EixoCard;
