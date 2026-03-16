// src/components/TestimonialCarousel.tsx
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { depoimentos, type Depoimento } from "@/data/depoimentos";

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // autoplay a cada 15s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % depoimentos.length);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const goTo = (index: number) => {
    const total = depoimentos.length;
    const normalized = ((index % total) + total) % total;
    setCurrentIndex(normalized);
  };

  const goPrev = () => goTo(currentIndex - 1);
  const goNext = () => goTo(currentIndex + 1);

  const getIndex = (offset: number) => {
    const total = depoimentos.length;
    return ((currentIndex + offset) % total + total) % total;
  };

  const renderCard = (
    depoimento: Depoimento,
    variant: "prev" | "current" | "next"
  ) => {
    const baseClasses =
      "transition-all duration-500 h-full flex flex-col justify-between";

    const variantClasses =
      variant === "current"
        ? "opacity-100 scale-100 shadow-xl bg-card"
        : "opacity-40 scale-95 bg-card/80 blur-[1px]";

    return (
      <Card key={depoimento.id} className={`${baseClasses} ${variantClasses}`}>
        <div className="p-6 md:p-8">
          <p className="text-muted-foreground mb-4 leading-relaxed">
            "{depoimento.texto}"
          </p>
          <div className="mt-4">
            <p className="font-semibold">{depoimento.nome}</p>
            <p className="text-xs text-muted-foreground mt-1">
              {depoimento.cargo}
            </p>
          </div>
        </div>
      </Card>
    );
  };

  const current = depoimentos[getIndex(0)];
  const prev = depoimentos[getIndex(-1)];
  const next = depoimentos[getIndex(1)];

  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Versão desktop: 3 cards (prev, current, next) */}
      <div className="hidden md:grid grid-cols-[0.8fr,1.1fr,0.8fr] gap-4 items-stretch">
        {renderCard(prev, "prev")}
        {renderCard(current, "current")}
        {renderCard(next, "next")}
      </div>

      {/* Versão mobile: apenas o card atual */}
      <div className="md:hidden">
        {renderCard(current, "current")}
      </div>

      {/* Navegação */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={goPrev}
          aria-label="Depoimento anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        <div className="flex gap-2">
          {depoimentos.map((d, index) => (
            <button
              key={d.id}
              onClick={() => goTo(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary w-7"
                  : "w-2.5 bg-muted hover:bg-muted-foreground/40"
              }`}
              aria-label={`Ir para depoimento ${index + 1}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={goNext}
          aria-label="Próximo depoimento"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
