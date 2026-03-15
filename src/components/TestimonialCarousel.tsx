// src/components/TestimonialCarousel.tsx
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Defensora Pública – Núcleo de Família",
    role: "Colega de atuação",
    text: "O Dr. Rogério sempre se destacou pela disponibilidade em auxiliar os colegas, pela seriedade com que trata cada caso e pelo respeito às pessoas assistidas."
  },
  {
    id: 2,
    name: "Servidor da DPE-MT",
    role: "Equipe administrativa",
    text: "Na gestão, demonstra atenção às condições de trabalho e à valorização da equipe, sempre aberto ao diálogo e à construção conjunta de soluções."
  },
  {
    id: 3,
    name: "Defensor Público do interior",
    role: "Atuação em comarca do interior",
    text: "A interiorização da Defensoria só foi possível com planejamento e apoio da gestão. Rogério esteve presente, acompanhando as dificuldades das comarcas."
  },
  {
    id: 4,
    name: "Colaborador terceirizado",
    role: "Apoio operacional",
    text: "Mesmo não sendo servidor efetivo, sempre fui tratado com respeito. Isso faz diferença no clima institucional e no resultado do trabalho."
  },
  {
    id: 5,
    name: "Estagiária de Direito",
    role: "Estágio na Defensoria",
    text: "O contato com a gestão mostrou que é possível unir técnica, sensibilidade com o público e organização administrativa em um mesmo projeto institucional."
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // autoplay a cada 15s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const goTo = (index: number) => {
    const total = testimonials.length;
    const normalized = ((index % total) + total) % total;
    setCurrentIndex(normalized);
  };

  const goPrev = () => goTo(currentIndex - 1);
  const goNext = () => goTo(currentIndex + 1);

  const getIndex = (offset: number) => {
    const total = testimonials.length;
    return ((currentIndex + offset) % total + total) % total;
  };

  const renderCard = (testimonial: Testimonial, variant: "prev" | "current" | "next") => {
    const isCenter = variant === "current";

    const baseClasses =
      "transition-all duration-500 h-full flex flex-col justify-between";

    const variantClasses =
      variant === "current"
        ? "opacity-100 scale-100 shadow-xl bg-card"
        : "opacity-40 scale-95 bg-card/80 blur-[1px]";

    return (
      <Card
        key={testimonial.id}
        className={`${baseClasses} ${variantClasses}`}
      >
        <div className="p-6 md:p-8">
          <p className="text-muted-foreground mb-4 leading-relaxed">
            “{testimonial.text}”
          </p>
          <div className="mt-4">
            <p className="font-semibold">{testimonial.name}</p>
            <p className="text-xs text-muted-foreground mt-1">
              {testimonial.role}
            </p>
          </div>
        </div>
      </Card>
    );
  };

  const current = testimonials[getIndex(0)];
  const prev = testimonials[getIndex(-1)];
  const next = testimonials[getIndex(1)];

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
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        <div className="flex gap-2">
          {testimonials.map((t, index) => (
            <button
              key={t.id}
              onClick={() => goTo(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary w-7"
                  : "bg-muted hover:bg-muted-foreground/40"
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
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
