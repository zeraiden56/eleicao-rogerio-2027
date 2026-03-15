// src/components/VideoCarousel.tsx
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

type Supporter = {
  id: string;
  name: string;
  efetivo: string;
  comissionado: string;
  imageSrc: string;
};

const supporters: Supporter[] = [
  {
    id: "luziane",
    name: "Maria Luziane Ribeiro de Castro",
    efetivo: "Defensora Pública de Classe Especial",
    comissionado: "Defensora Pública-Geral",
    imageSrc: "/rogerio/Apoio/luziane.png",
  },
  {
    id: "cecilia",
    name: "Maria Cecília Alves da Cunha",
    efetivo: "Defensora Pública de Classe Especial",
    comissionado: "Segunda Subdefensora Pública-Geral",
    imageSrc: "/rogerio/Apoio/cecilia.png",
  },
  {
    id: "clodoaldo",
    name: "Clodoaldo Aparecido Gonçalves de Queiroz",
    efetivo: "Defensor Público de Segunda Instância",
    comissionado: "Secretário Executivo de Administração",
    imageSrc: "/rogerio/Apoio/clodoaldo.png",
  },
  {
    id: "evaldo",
    name: "Evaldo Duarte de Barros Sobrinho",
    efetivo: "Advogado",
    comissionado: "Diretor Jurídico",
    imageSrc: "/rogerio/Apoio/evaldo.png",
  },
  {
    id: "vitor",
    name: "Vitor José Batista Vittorazi",
    efetivo: "Controlador Interno",
    comissionado:
      "Presidente da Associação dos Servidores Públicos da Defensoria Pública do Estado de Mato Grosso",
    imageSrc: "/rogerio/Apoio/vitor.png",
  },
  // se quiser usar o tuca.png depois, é só acrescentar mais um objeto aqui
];

const VideoCarousel = () => {
  const [index, setIndex] = useState(0);

  const total = supporters.length;
  const current = supporters[index];

  const goTo = (newIndex: number) => {
    if (total === 0) return;
    const wrapped = ((newIndex % total) + total) % total;
    setIndex(wrapped);
  };

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <Card className="w-full bg-card/95 border border-border/60 shadow-xl overflow-hidden">
        {/* “Vídeo” – por enquanto só imagem + overlay + ícone de play */}
        <div className="relative w-full pt-[56.25%] bg-black">
          <img
            src={current.imageSrc}
            alt={current.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          </div>
        </div>

        {/* Texto – nome grande, cargo comissionado em destaque, efetivo logo abaixo */}
        <div className="px-6 py-5 flex flex-col items-center text-center gap-1.5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-700">
            Depoimento em vídeo
          </p>
          <h3 className="text-xl md:text-2xl font-bold text-foreground">
            {current.name}
          </h3>
          <p className="text-sm md:text-base font-semibold text-emerald-700">
            {current.comissionado}
          </p>
          <p className="text-xs md:text-sm text-muted-foreground">
            Cargo efetivo: {current.efetivo}
          </p>
        </div>
      </Card>

      {/* Controles (setas + bolinhas) */}
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-emerald-400/70 bg-emerald-900/60 text-emerald-50 hover:bg-emerald-800 hover:border-emerald-300 transition-colors"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2">
          {supporters.map((s, i) => {
            const isActive = i === index;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => goTo(i)}
                className={`h-2.5 rounded-full transition-all ${
                  isActive
                    ? "w-6 bg-emerald-300"
                    : "w-2.5 bg-emerald-700/60 hover:bg-emerald-400/80"
                }`}
                aria-label={`Selecionar depoimento de ${s.name}`}
              />
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => goTo(index + 1)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-emerald-400/70 bg-emerald-900/60 text-emerald-50 hover:bg-emerald-800 hover:border-emerald-300 transition-colors"
          aria-label="Próximo"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default VideoCarousel;
