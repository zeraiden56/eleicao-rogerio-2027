import { MapPin, ExternalLink, CheckCircle2, Quote, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import LazyImage from "@/components/LazyImage";

const destaques = [
  "79 comarcas atendidas — cobertura 100% do estado",
  "Presença física em municípios antes sem acesso à Defensoria",
  "Espaços dignos para receber a população carente",
  "Meta estabelecida em 2019 e cumprida integralmente em 2025",
];

const ComarcasSection = () => {
  return (
    <section className="bg-background py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Rótulo */}
        <div className="text-center mb-10 reveal-up">
          <p className="text-sm font-bold uppercase tracking-widest text-primary mb-2">
            Marco Histórico · Mandato Constitucional Cumprido
          </p>
        </div>

        {/* Layout principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Coluna esquerda — conteúdo */}
          <div className="reveal-left order-2 lg:order-1">
            {/* Badge EC 80/2014 */}
            <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/20 rounded-full px-4 py-2 mb-5">
              <Scale className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              <span className="text-xs font-bold text-primary tracking-wide">
                Emenda Constitucional nº 80/2014 · Art. 98, § 1º
              </span>
              <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
            </div>

            {/* Número destaque */}
            <div className="flex items-end gap-4 mb-6">
              <span
                className="font-black leading-none text-primary select-none"
                style={{ fontSize: "clamp(5rem, 15vw, 9rem)" }}
                aria-hidden="true"
              >
                79
              </span>
              <div className="mb-3">
                <p className="text-xl md:text-2xl font-bold text-foreground leading-snug">
                  comarcas<br />em Mato Grosso
                </p>
                <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  100% de cobertura estadual
                </p>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight mb-4">
              A Defensoria Pública chegou a{" "}
              <span className="text-primary">todos os municípios</span> do estado
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-3">
              A EC nº 80/2014 determinou que estados e municípios deveriam ter
              defensores públicos em <strong className="text-foreground">todas as unidades jurisdicionais</strong> em
              até 8 anos — um prazo que exigiu planejamento, investimento e
              vontade política para ser cumprido.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Em 7 de maio de 2025, com a inauguração do núcleo em Cotriguaçu — a
              última comarca a receber atendimento presencial —, a Defensoria
              Pública de Mato Grosso concluiu esse compromisso: nenhum cidadão
              mato-grossense está mais distante do acesso gratuito à Justiça por
              falta de Defensoria no seu município.
            </p>

            {/* Destaques */}
            <ul className="space-y-2.5 mb-8">
              {destaques.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Citação */}
            <blockquote className="relative bg-primary/5 border-l-4 border-primary rounded-r-2xl p-5 mb-8">
              <Quote className="absolute top-4 right-4 w-6 h-6 text-primary/20" aria-hidden="true" />
              <p className="text-sm md:text-base text-foreground leading-relaxed italic">
                "Nossa meta de levar a Defensoria Pública para todo o Mato Grosso foi
                cumprida — e não só com a nossa presença em todas as comarcas, mas também
                com a entrega de espaços dignos para receber os cidadãos."
              </p>
              <footer className="mt-3 flex items-center gap-2">
                <div className="w-6 h-0.5 bg-primary rounded-full" />
                <cite className="not-italic text-xs font-bold uppercase tracking-widest text-primary">
                  Dra. Luziane Castro · Defensora Pública-Geral
                </cite>
              </footer>
            </blockquote>

            {/* Nota sobre Rogério */}
            <p className="text-sm text-muted-foreground mb-8 flex items-start gap-2">
              <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              Dr. Rogério Borges de Freitas, então 1º Subdefensor Público-Geral,
              esteve presente na inauguração em Cotriguaçu, simbolizando o comprometimento
              de toda a equipe de gestão com essa conquista histórica.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg">
                <a
                  href="https://www.defensoria.mt.def.br/dpmt/fale-conosco/nucleos-e-coordenadorias"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  Ver mapa das comarcas
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </Button>
            </div>
          </div>

          {/* Coluna direita — galeria de fotos da inauguração */}
          <div className="order-1 lg:order-2 reveal-right">
            <div className="grid grid-cols-2 gap-3">
              {/* Foto panorâmica principal */}
              <div className="col-span-2 rounded-2xl overflow-hidden aspect-[16/9] shadow-lg">
                <LazyImage
                  src="/rogerio/2025/Inauguração Contriguaçu/20250507_094806.jpg"
                  alt="Inauguração da Defensoria Pública em Cotriguaçu — maio de 2025"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Inferior esquerda: landscape 4/3 */}
              <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-md">
                <LazyImage
                  src="/rogerio/2025/Inauguração Contriguaçu/20250507_094308.jpg"
                  alt="Cerimônia de inauguração em Cotriguaçu"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Inferior direita: retrato (única foto original em portrait) */}
              <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-md">
                <LazyImage
                  src="/rogerio/2025/Inauguração Contriguaçu/20250507_094859.jpg"
                  alt="Autoridades na inauguração da Defensoria em Cotriguaçu"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Legenda */}
            <p className="text-xs text-muted-foreground text-center mt-3 flex items-center justify-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              Cotriguaçu, MT — 7 de maio de 2025 · A última comarca a receber presença física da Defensoria
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComarcasSection;
