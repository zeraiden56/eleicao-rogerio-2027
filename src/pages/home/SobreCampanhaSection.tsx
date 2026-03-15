// src/pages/home/SobreCampanhaSection.tsx
import SectionTitle from "@/components/SectionTitle";
import { Card } from "@/components/ui/card";
import { Award, Shield, TrendingUp, Users } from "lucide-react";

const SobreCampanhaSection = () => {
  return (
    <section className="py-20 bg-slate-950">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="rounded-3xl border border-emerald-900/40 bg-gradient-to-b from-emerald-950/70 via-slate-950 to-slate-950 px-6 sm:px-10 py-10 sm:py-12">
          <SectionTitle
            centered
            subtitle="Uma candidatura construída com experiência e compromisso"
          >
            Sobre a Campanha
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              {
                icon: Shield,
                title: "Atuação na Área Fim",
                description:
                  "Experiência sólida na defesa dos direitos dos cidadãos.",
              },
              {
                icon: Users,
                title: "Experiência em Gestão",
                description: "Primeiro Subdefensor e Ordenador de Despesas.",
              },
              {
                icon: Award,
                title: "Apoio aos Membros",
                description: "Compromisso com a valorização dos Defensores.",
              },
              {
                icon: TrendingUp,
                title: "Apoio aos Servidores",
                description: "Reconhecimento e suporte aos colaboradores.",
              },
            ].map((item, index) => (
              <Card
                key={item.title}
                className="p-6 card-hover fade-in-up bg-card/95 border border-border/60"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="mt-12 max-w-3xl mx-auto text-center">
            <p className="text-lg text-foreground/80 leading-relaxed">
              A candidatura do Dr. Rogério Borges Freitas representa a
              continuidade de um trabalho sério e comprometido com o
              fortalecimento da Defensoria Pública do Estado de Mato Grosso.
              Com ampla experiência tanto na área fim quanto na gestão
              institucional, sua trajetória demonstra capacidade de liderança e
              visão estratégica para os desafios futuros.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreCampanhaSection;
