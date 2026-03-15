import { useMemo } from "react";
import SectionTitle from "@/components/SectionTitle";
import { useScrollToTopOnMount } from "@/hooks/useScrollToTopOnMount";
import SectionContainer from "@/components/SectionContainer";
import { Card } from "@/components/ui/card";
import { Calendar, Briefcase, Award, Users, GraduationCap } from "lucide-react";
import LazyImage from "@/components/LazyImage";
import { getTimelinePhotosForCount } from "@/data/rogerioTimelinePhotos";

const timelineData = [
  {
    year: "2004",
    title: "Ingresso na Defensoria Pública",
    description: "Aprovação no segundo concurso da Defensoria Pública do Estado de Mato Grosso",
    details: "Nomeado em 6 de maio de 2004, posse em 15 de maio, em exercício desde 20 de maio. Integrou a segunda turma de defensores públicos da instituição.",
  },
  {
    year: "2004–2007",
    title: "Interiorização e estágio probatório",
    description: "Atuação nas comarcas do interior, especialmente em Sinop",
    details: "Trajetória que marcou profundamente sua relação com o Estado e com a população mato-grossense.",
  },
  {
    year: "2007",
    title: "Confirmação na carreira",
    description: "Conclusão do estágio probatório",
    details: "Confirmado na carreira em 18 de maio de 2007, após atuação no interior.",
  },
  {
    year: "Capital",
    title: "Núcleo Cível de Cuiabá",
    description: "Atuação em varas cíveis e fazendárias; regularização fundiária",
    details: "Exercício perante diversas varas da comarca e em áreas especializadas, incluindo processos administrativos.",
  },
  {
    year: "Institucional",
    title: "Funções e comissões",
    description: "Auxiliar da Corregedoria-Geral; comissões eleitorais; coordenação do Núcleo da Capital",
    details: "Atividades correicionais, avaliações de estágio probatório e participação em equipes administrativas estratégicas.",
  },
  {
    year: "2019 e 2023",
    title: "Primeiro Subdefensor Público-Geral",
    description: "Direção superior e assessoramento estratégico",
    details: "Nomeado em 2019 e novamente a partir de 2023; Ordenador de Despesas e participação nas decisões da administração.",
  },
  {
    year: "2025",
    title: "Candidatura a Defensor Público-Geral",
    description: "Biênio 2026–2028",
    details: "Experiência acumulada na área fim e na gestão, compromisso com transparência e fortalecimento da instituição.",
  },
];

const HistoriaNaDefensoria = () => {
  useScrollToTopOnMount();
  const timelinePhotos = useMemo(() => getTimelinePhotosForCount(timelineData.length), []);

  return (
    <main className="min-h-screen pt-24">
      {/* Introdução - BRANCO */}
      <SectionContainer background="default" padding="md" maxWidth="xl">
        <div className="scroll-reveal">
          <SectionTitle centered subtitle="Uma trajetória de mais de 20 anos dedicados à instituição">
            História na Defensoria
          </SectionTitle>
          <Card className="max-w-4xl mx-auto p-8 md:p-12">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                A trajetória do Dr. Rogério Borges Freitas na Defensoria Pública do Estado de
                Mato Grosso é marcada por dedicação, comprometimento e constante busca pela
                excelência no atendimento à população.
              </p>
              <p>
                Desde o ingresso na carreira, sempre demonstrou vocação para o serviço público
                e profundo respeito pelas pessoas atendidas pela instituição. Sua atuação se
                destaca pela combinação entre conhecimento técnico, sensibilidade social e
                capacidade de gestão.
              </p>
              <p>
                Ao longo dos anos, acumulou experiências tanto na área fim quanto em diversos
                cargos de gestão, o que lhe proporciona visão ampla e profunda dos desafios
                e potencialidades da Defensoria Pública.
              </p>
            </div>
          </Card>
        </div>
      </SectionContainer>

      {/* Linha do Tempo - VERDE */}
      <SectionContainer background="primary" padding="md" maxWidth="xl">
        <SectionTitle
          centered
          titleClassName="text-primary-foreground"
          subtitleClassName="text-primary-foreground/80"
          subtitle="Principais marcos da trajetória profissional"
        >
          Linha do Tempo
        </SectionTitle>

        <div className="max-w-4xl mx-auto mt-12 relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-foreground/20 hidden md:block" />

          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className="relative pl-0 md:pl-20 scroll-reveal"
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <div className="absolute left-0 md:left-5 top-6 w-12 h-12 bg-primary-foreground rounded-full flex items-center justify-center shadow-lg hidden md:flex">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>

                <Card className="p-6 card-hover bg-background border-border/60 overflow-hidden relative">
                  <span
                    className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-lg"
                    aria-hidden="true"
                  />

                  <div className="flex flex-col md:flex-row gap-4 pl-4">
                    <div className="w-full md:w-48 h-48 rounded-lg overflow-hidden border border-border/60 flex-shrink-0 bg-muted/30">
                      <LazyImage
                        src={timelinePhotos[index]}
                        alt={`Rogério Borges Freitas - ${item.year}`}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start gap-4">
                        <span className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-full font-bold w-fit">
                          {item.year}
                        </span>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                          <p className="text-foreground mb-3">{item.description}</p>
                          <p className="text-sm text-muted-foreground">{item.details}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* Destaques - BRANCO */}
      <SectionContainer background="default" padding="md" maxWidth="xl">
        <SectionTitle centered subtitle="Momentos marcantes da atuação profissional">
          Destaques da Trajetória
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto">
          {[
            { title: "Mutirões de Atendimento", description: "Participação ativa em inúmeros mutirões, levando assistência jurídica a comunidades remotas" },
            { title: "Projetos Inovadores", description: "Idealizou e implementou projetos que modernizaram o atendimento e ampliaram o acesso à justiça" },
            { title: "Reconhecimento Institucional", description: "Título de Cidadão Mato-grossense (ALMT, 2013); notas de elogio e participação em bancas de concurso" },
            { title: "Formação de Novos Defensores", description: "Membro da banca examinadora do exame oral do V e do VI Concursos de Defensor Público de MT (2016 e 2023)" },
          ].map((item, index) => {
            const icons = [Briefcase, Award, Users, GraduationCap];
            const Icon = icons[index % icons.length];
            return (
              <Card
                key={index}
                className="p-6 card-hover scroll-reveal"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </SectionContainer>
    </main>
  );
};

export default HistoriaNaDefensoria;
