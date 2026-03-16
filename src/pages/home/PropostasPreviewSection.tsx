import { Link } from "react-router-dom";
import { EIXOS } from "@/data/eixos";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const PropostasPreviewSection = () => {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Cabeçalho */}
        <div className="max-w-3xl mx-auto text-center mb-14 reveal-up">
          <p className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
            Plano de Gestão 2027–2028
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Propostas e Eixos
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Seis eixos temáticos com compromissos concretos para fortalecer a
            Defensoria Pública e melhorar o atendimento à população.
          </p>
        </div>

        {/* Grid dos eixos numerados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
          {EIXOS.map((eixo, index) => (
            <div
              key={eixo.id}
              className="scroll-reveal"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <Link
                to={`/propostas?eixo=${eixo.id}`}
                className="group flex items-start gap-4 rounded-2xl border border-border bg-muted/40 p-5 transition-colors transition-transform duration-150 hover:bg-primary/5 hover:border-primary/30 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                {/* Número */}
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <span className="text-xl font-black text-primary leading-none">
                    {index + 1}
                  </span>
                </div>

                {/* Conteúdo */}
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">
                    Eixo {index + 1}
                  </p>
                  <h3 className="text-sm font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                    {eixo.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed line-clamp-2">
                    {eixo.description}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild size="lg">
            <Link to="/propostas">
              Ver propostas completas
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a
              href="/pdf/plano-de-gestao.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="w-4 h-4 mr-2" />
              Baixar Plano de Gestão (PDF)
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PropostasPreviewSection;
