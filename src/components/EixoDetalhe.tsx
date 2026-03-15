import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getEixoItemIcon } from "@/data/eixoIcons";

interface EixoDetalheProps {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
  onPrevious?: () => void;
  onNext?: () => void;
  hasPrevious?: boolean;
  hasNext?: boolean;
  currentIndex: number;
  total: number;
}

/**
 * Componente para exibir os detalhes do eixo ativo
 */
const EixoDetalhe = ({
  icon: Icon,
  title,
  description,
  items,
  onPrevious,
  onNext,
  hasPrevious = false,
  hasNext = false,
  currentIndex,
  total,
}: EixoDetalheProps) => {
  return (
    <Card className="p-8 md:p-12 bg-muted/30 border border-border/60 rounded-3xl relative">
      {/* Navegação entre eixos */}
      {(hasPrevious || hasNext) && (
        <div className="absolute top-6 right-6 flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={onPrevious}
            disabled={!hasPrevious}
            className="rounded-full"
            aria-label="Eixo anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <span className="text-sm text-muted-foreground px-2">
            {currentIndex + 1} / {total}
          </span>
          <Button
            variant="ghost"
            size="icon"
            onClick={onNext}
            disabled={!hasNext}
            className="rounded-full"
            aria-label="Próximo eixo"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      )}

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
          <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold flex-1">{title}</h2>
      </div>

      {/* Descrição */}
      <p className="text-muted-foreground max-w-3xl mb-10 text-base md:text-lg leading-relaxed">
        {description}
      </p>

      {/* Lista de itens com ícones */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((item, i) => {
          const ItemIcon = getEixoItemIcon(item);
          return (
            <div
              key={i}
              className="rounded-xl border bg-background p-4 text-sm md:text-base text-muted-foreground transition-all duration-200 hover:border-primary/30 hover:bg-primary/5 hover:shadow-sm"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ItemIcon className="w-4 h-4 text-primary" aria-hidden="true" />
                </div>
                <span className="flex-1 leading-relaxed">{item}</span>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default EixoDetalhe;
