import { TrendingUp, Users, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";

const stats = [
  {
    icon: Users,
    title: "Defensores Públicos",
    value: "+24%",
    subtitle: "crescimento desde 2019",
  },
  {
    icon: TrendingUp,
    title: "Analistas e Técnicos",
    value: "+31%",
    subtitle: "reforço da estrutura de apoio",
  },
  {
    icon: ShieldCheck,
    title: "Estrutura Institucional",
    value: "+18%",
    subtitle: "crescimento global do quadro",
  },
];

const ResumoQuantitativoSection = () => {
  return (
    <section className="py-28 bg-background scroll-mt-24 relative">
      {/* Textura para fundo branco */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ 
          background: "var(--gradient-background-textured)",
        }}
        aria-hidden="true"
      />
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ 
          backgroundImage: "var(--texture-grain-light)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Título */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Evolução Quantitativa da Defensoria
          </h2>
          <p className="text-muted-foreground text-lg">
            O crescimento do quadro foi acompanhado de planejamento,
            responsabilidade fiscal e fortalecimento institucional.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto mb-12">
          {stats.map((item) => (
            <Card
              key={item.title}
              className="p-8 rounded-2xl bg-white border border-border/60 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <item.icon className="w-6 h-6 text-primary" />
              </div>

              <p className="text-sm text-muted-foreground mb-1">
                {item.title}
              </p>

              <p className="text-3xl font-bold text-foreground mb-1">
                {item.value}
              </p>

              <p className="text-sm text-muted-foreground">
                {item.subtitle}
              </p>
            </Card>
          ))}
        </div>

        {/* Texto político + CTA */}
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <p className="text-muted-foreground text-base md:text-lg">
            A ampliação da Defensoria Pública não foi apenas numérica.
            Ela refletiu uma estratégia de fortalecimento institucional,
            valorização das carreiras e ampliação do acesso à justiça
            em todo o Estado.
          </p>

          <a
            href="/quantitativo"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow hover:bg-primary/90 transition"
          >
            Ver evolução quantitativa completa
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResumoQuantitativoSection;
