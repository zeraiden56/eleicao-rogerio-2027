// src/components/VideoCarousel.tsx
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { apoiadores } from "@/data/apoios";

const VideoCarousel = () => {
  const [index, setIndex] = useState(0);

  const total = apoiadores.length;
  const current = apoiadores[index];

  const goTo = (newIndex: number) => {
    if (total === 0) return;
    const wrapped = ((newIndex % total) + total) % total;
    setIndex(wrapped);
  };

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <Card className="w-full bg-card/95 border border-border/60 shadow-xl overflow-hidden">
        {/* Foto do apoiador */}
        <div className="relative w-full pt-[56.25%] bg-black">
          <img
            src={current.imageSrc}
            alt={current.nome}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </div>

        {/* Identificação */}
        <div className="px-6 py-5 flex flex-col items-center text-center gap-1.5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
            Apoio à candidatura
          </p>
          <h3 className="text-xl md:text-2xl font-bold text-foreground">
            {current.nome}
          </h3>
          <p className="text-sm md:text-base font-semibold text-primary">
            {current.cargoComissionado}
          </p>
          <p className="text-xs md:text-sm text-muted-foreground">
            Cargo efetivo: {current.cargoEfetivo}
          </p>
        </div>
      </Card>

      {/* Controles (setas + bolinhas) */}
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/40 bg-primary/80 text-primary-foreground hover:bg-primary hover:border-primary-foreground/60 transition-colors"
          aria-label="Apoiador anterior"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2">
          {apoiadores.map((a, i) => {
            const isActive = i === index;
            return (
              <button
                key={a.id}
                type="button"
                onClick={() => goTo(i)}
                className={`h-2.5 rounded-full transition-all ${
                  isActive
                    ? "w-6 bg-primary-foreground"
                    : "w-2.5 bg-primary-foreground/40 hover:bg-primary-foreground/70"
                }`}
                aria-label={`Selecionar apoiador ${a.nome}`}
              />
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => goTo(index + 1)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/40 bg-primary/80 text-primary-foreground hover:bg-primary hover:border-primary-foreground/60 transition-colors"
          aria-label="Próximo apoiador"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default VideoCarousel;
