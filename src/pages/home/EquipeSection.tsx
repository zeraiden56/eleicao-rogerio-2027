import { Link } from "react-router-dom";
import RotatingPhoto from "@/components/RotatingPhoto";
import LazyImage from "@/components/LazyImage";
import { ChevronRight } from "lucide-react";

type MembroEquipe = {
  nome: string;
  cargoGestao: string;
  cargoEfetivo: string;
  classe: string;
  ingresso: number;
  resumo: string;
  foto?: string;
  fotos?: string[];
  /** id usado na página Chapa para link âncora (/chapa#paulo) */
  chapaId: string;
};

const equipe: MembroEquipe[] = [
  {
    nome: "Dr. Paulo Marquezini",
    cargoGestao: "Primeiro Subdefensor Público-Geral",
    cargoEfetivo: "Defensor Público",
    classe: "Classe Especial",
    ingresso: 2008,
    resumo:
      "Atuação na condução administrativa da instituição, com profundo conhecimento da estrutura interna da Defensoria Pública.",
    fotos: ["/paulo/paulo1.png", "/paulo/paulo2.jpeg", "/paulo/paulo3.png"],
    chapaId: "paulo",
  },
  {
    nome: "Dra. Paula Ferreira Fernandes",
    cargoGestao: "Segunda Subdefensora Pública-Geral · Defensora do Júri",
    cargoEfetivo: "Defensora Pública",
    classe: "Classe Especial",
    ingresso: 2010,
    resumo:
      "Atuação na linha de frente da atividade-fim, com compromisso com a valorização da carreira e a defesa dos direitos fundamentais.",
    fotos: ["/paula/paula1.jpeg", "/paula/paula2.jpg", "/paula/paula3.jpg", "/paula/paula4.jpg", "/paula/paula5.jpg", "/paula/paula6.jpg"],
    chapaId: "paula",
  },
  {
    nome: "Dra. Maria Luziane Ribeiro de Castro",
    cargoGestao: "Secretária Executiva · Atual Defensora Pública-Geral",
    cargoEfetivo: "Defensora Pública",
    classe: "Classe Especial",
    ingresso: 2007,
    resumo:
      "Responsável pela condução administrativa da instituição, garantindo continuidade, estabilidade e responsabilidade na gestão.",
    fotos: ["/luziane/luziane1.jpg", "/luziane/luziane2.jpg", "/luziane/luziane3.jpg"],
    chapaId: "luziane",
  },
];

const EquipeSection = () => {
  return (
    <section className="bg-primary py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-primary-textured)" }}
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

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto mb-20 text-center reveal-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Equipe de Gestão
          </h2>
          <p className="text-primary-foreground/85 text-lg">
            Uma gestão forte se constrói com pessoas que conhecem a Defensoria
            Pública por dentro, respeitam sua história e estão preparadas para
            conduzir o futuro da instituição.
          </p>
        </div>

        <div className="grid gap-8 md:gap-10 md:grid-cols-3 max-w-6xl mx-auto items-stretch">
          {equipe.map((membro, index) => (
            <Link
              key={membro.nome}
              to={`/chapa#${membro.chapaId}`}
              className="scroll-reveal flex flex-col items-center w-full group"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Card único: círculo integrado ao topo do card (sobreposição) */}
              <div className="w-full h-full flex flex-col items-center flex-1 min-h-[420px] md:min-h-[440px]">
                {/* Círculo que “entra” no card */}
                <div className="relative z-10 flex justify-center -mb-14">
                  <div className="w-40 h-40 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-primary-foreground/20 bg-card shadow-xl ring-2 ring-primary-foreground/10 group-hover:ring-primary-foreground/25 transition-all duration-300">
                    {membro.fotos?.length ? (
                      <RotatingPhoto
                        images={membro.fotos}
                        alt={membro.nome}
                        className="w-full h-full"
                        fadeMs={700}
                        shuffle
                      />
                    ) : membro.foto ? (
                      <LazyImage
                        src={membro.foto}
                        alt={membro.nome}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : null}
                  </div>
                </div>

                {/* Card com padding-top para o círculo; altura igual entre os três */}
                <div className="flex-1 w-full flex flex-col rounded-2xl border border-border/50 bg-card text-card-foreground shadow-card overflow-hidden transition-all duration-300 group-hover:shadow-hover group-hover:border-primary/25 pt-16 pb-6 px-5 md:px-6 md:pt-20">
                  <div className="flex-1 flex flex-col min-h-0">
                    <h3 className="text-base md:text-lg font-semibold text-foreground mb-1.5 break-words leading-snug">
                      {membro.nome}
                    </h3>
                    <p className="text-primary font-semibold mb-3 text-sm md:text-base leading-snug line-clamp-2">
                      {membro.cargoGestao}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                      {membro.resumo}
                    </p>
                  </div>

                  <div className="text-sm text-muted-foreground pt-4 border-t border-border/60 space-y-1">
                    <p className="leading-snug">
                      <strong className="text-foreground">Cargo efetivo:</strong>{" "}
                      {membro.cargoEfetivo} · {membro.classe}
                    </p>
                    <p className="leading-snug">
                      <strong className="text-foreground">Ingresso na Defensoria:</strong> {membro.ingresso}
                    </p>
                  </div>

                  <p className="mt-4 flex items-center gap-1 text-primary font-medium text-sm group-hover:gap-2 transition-all">
                    Ver trajetória completa
                    <ChevronRight className="w-4 h-4" />
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipeSection;
