import SectionTitle from "@/components/SectionTitle";
import { Card } from "@/components/ui/card";
import { Heart, Home, Compass, Smile, Users } from "lucide-react";

const Sobre = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Vida Pessoal */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle
            centered
            subtitle="Conheça mais sobre a trajetória pessoal, valores e princípios"
          >
            Sobre o Dr. Rogério Borges Freitas
          </SectionTitle>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <SectionTitle>Vida Pessoal</SectionTitle>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {/* TODO: preencher com informações reais sobre vida pessoal */}
                <p>
                  Natural de [cidade], o Dr. Rogério Borges Freitas construiu sua trajetória
                  profissional sempre pautado por valores sólidos e compromisso com a justiça social.
                </p>
                <p>
                  Desde cedo, desenvolveu interesse pelo Direito e pela defesa dos mais vulneráveis,
                  o que o motivou a seguir carreira na Defensoria Pública.
                </p>
                <p>
                  Sua formação humanística e senso de responsabilidade social sempre foram marcas
                  distintivas de sua atuação profissional e pessoal.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              {/* TODO: adicionar foto pessoal */}
              <Card className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Users className="w-32 h-32 text-primary/40" />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Família */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              {/* TODO: adicionar foto com a família */}
              <Card className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Home className="w-32 h-32 text-primary/40" />
              </Card>
            </div>
            <div>
              <SectionTitle>Família</SectionTitle>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {/* TODO: preencher com informações reais sobre família */}
                <p>
                  A família sempre foi fonte de inspiração e apoio para o Dr. Rogério. Casado com
                  [nome da esposa], juntos construíram uma família unida e baseada em valores de
                  respeito, diálogo e solidariedade.
                </p>
                <p>
                  Pai de [número] filhos, encontra na convivência familiar o equilíbrio necessário
                  para enfrentar os desafios da carreira e manter-se conectado com o que realmente
                  importa na vida.
                </p>
                <p>
                  Os valores familiares se refletem em sua atuação profissional, sempre pautada
                  pela empatia e pelo respeito à dignidade de cada pessoa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Princípios e Valores */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle centered subtitle="Os pilares que guiam a atuação profissional e pessoal">
            Princípios e Valores
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
            {/* TODO: ajustar com os valores reais do candidato */}
            {[
              {
                icon: Heart,
                title: "Empatia",
                description: "Capacidade de compreender e se solidarizar com as dificuldades alheias",
              },
              {
                icon: Compass,
                title: "Ética",
                description: "Conduta pautada pela transparência, honestidade e responsabilidade",
              },
              {
                icon: Users,
                title: "Colaboração",
                description: "Valorização do trabalho em equipe e do diálogo institucional",
              },
              {
                icon: Heart,
                title: "Justiça Social",
                description: "Compromisso com a defesa dos direitos dos mais vulneráveis",
              },
              {
                icon: Compass,
                title: "Respeito",
                description: "Tratamento digno e respeitoso a todos, sem distinção",
              },
              {
                icon: Smile,
                title: "Humanização",
                description: "Visão humanizada do Direito e das relações institucionais",
              },
            ].map((item, index) => (
              <Card key={index} className="p-6 card-hover fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hobbies */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionTitle centered subtitle="Atividades e interesses fora do ambiente profissional">
            Hobbies e Interesses
          </SectionTitle>

          <div className="max-w-4xl mx-auto mt-12">
            <Card className="p-8 md:p-12">
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                {/* TODO: preencher com hobbies reais */}
                <p>
                  Nas horas de lazer, o Dr. Rogério encontra tempo para [hobby 1], atividade que
                  proporciona momentos de relaxamento e renovação de energias.
                </p>
                <p>
                  Também é apreciador de [hobby 2], o que demonstra seu interesse por [área relacionada].
                  Acredita que manter interesses diversificados contribui para uma visão mais ampla
                  e equilibrada da vida.
                </p>
                <p>
                  Gosta de [hobby 3], especialmente quando pode compartilhar esses momentos com a
                  família e amigos, reforçando os laços de convivência e amizade.
                </p>
                <p>
                  Acredita que o equilíbrio entre vida profissional e pessoal é fundamental para
                  manter a saúde física e mental, e para desempenhar com excelência suas funções.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;
