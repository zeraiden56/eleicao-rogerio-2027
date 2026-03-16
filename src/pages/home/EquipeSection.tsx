import { Link } from "react-router-dom";
import LazyImage from "@/components/LazyImage";
import { ChevronRight, Briefcase, Star } from "lucide-react";
import { equipe } from "@/data/equipe";

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
        {/* Título */}
        <div className="max-w-3xl mx-auto mb-16 text-center reveal-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Equipe de Gestão
          </h2>
          <p className="text-primary-foreground/85 text-lg">
            Uma gestão forte se constrói com pessoas que conhecem a Defensoria
            Pública por dentro, respeitam sua história e estão preparadas para
            conduzir o futuro da instituição.
          </p>
        </div>

        {/* Grid de cards */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {equipe.map((membro, index) => (
            <Link
              key={membro.chapaId}
              to={`/chapa#${membro.chapaId}`}
              className="scroll-reveal group flex flex-col rounded-2xl overflow-hidden bg-card border border-border/40 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary-foreground/40"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Foto — ocupa topo do card inteiro, proporção retrato */}
              <div className="relative w-full overflow-hidden bg-muted"
                style={{ aspectRatio: "3 / 4" }}
              >
                <LazyImage
                  src={membro.foto}
                  alt={membro.nome}
                  className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                />
                {/* Gradiente suave no rodapé da foto */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
              </div>

              {/* Conteúdo */}
              <div className="flex flex-col flex-1 p-5 md:p-6 gap-4">
                {/* Cargo na candidatura */}
                <div className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-0.5">
                      Cargo na candidatura
                    </p>
                    <p className="text-sm font-bold text-primary leading-snug">
                      {membro.cargoNaChapa}
                    </p>
                  </div>
                </div>

                {/* Linha divisória */}
                <hr className="border-border/60" />

                {/* Nome */}
                <h3 className="text-base md:text-lg font-bold text-foreground leading-snug">
                  {membro.nome}
                </h3>

                {/* Cargo atual */}
                <div className="flex items-start gap-2">
                  <Briefcase className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-0.5">
                      Cargo atual
                    </p>
                    <p className="text-sm text-foreground leading-snug">
                      {membro.cargoAtual} · {membro.classe}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Ingressou em {membro.ingresso}
                    </p>
                  </div>
                </div>

                {/* Resumo */}
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                  {membro.resumo}
                </p>

                {/* CTA */}
                <p className="flex items-center gap-1 text-primary font-semibold text-sm mt-auto group-hover:gap-2 transition-all">
                  Ver trajetória completa
                  <ChevronRight className="w-4 h-4" />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipeSection;
