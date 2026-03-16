import SectionTitle from "@/components/SectionTitle";
import SectionContainer from "@/components/SectionContainer";
import { Card } from "@/components/ui/card";
import { Shield, Users, TrendingUp, Briefcase, Calendar } from "lucide-react";
import { useScrollToTopOnMount } from "@/hooks/useScrollToTopOnMount";

const gestoes = [
  {
    icon: Briefcase,
    gestao: "2023 – 2026",
    cargo: "Primeiro Subdefensor Público-Geral",
    periodo: "2023 – presente",
    duracao: "2º mandato",
    descricao:
      "Segundo em comando da Defensoria Pública de MT, responsável por substituir o Defensor Público-Geral, ordenar despesas e coordenar a administração superior da instituição.",
    destaques: [
      "Ordenador de despesas — controle orçamentário e financeiro",
      "Participação nas contratações para cobertura de todos os 79 núcleos no prazo constitucional",
      "Comissões de governança e eleitorais; integração ao CONDEGE (Proteção de Dados)",
      "Conquista do Selo Diamante de Transparência pelo 3º ano consecutivo (2025)",
    ],
  },
  {
    icon: Shield,
    gestao: "2019 – 2022",
    cargo: "Primeiro Subdefensor Público-Geral",
    periodo: "2019 – 2022",
    duracao: "1º mandato",
    descricao:
      "Primeiro mandato como Subdefensor Público-Geral, com atuação estratégica na expansão dos serviços da Defensoria ao interior do estado e modernização administrativa.",
    destaques: [
      "Coordenação temporária do Núcleo da Capital",
      "Auxiliar da Corregedoria-Geral — apoio ao controle interno e disciplinar",
      "Suplente no Conselho de Previdência do Estado",
      "Apoio à interiorização da Defensoria em comarcas sem atendimento presencial",
    ],
  },
  {
    icon: Users,
    gestao: "2004 – 2018",
    cargo: "Defensor Público — Área Fim e Núcleo Cível",
    periodo: "2004 – 2018",
    duracao: "14 anos",
    descricao:
      "Aprovado no 2º concurso da Defensoria Pública de MT, atuou na área fim — Núcleo Cível de Cuiabá e comarcas do interior — antes de assumir funções de direção.",
    destaques: [
      "Interiorização em Sinop e demais comarcas durante o estágio probatório",
      "Atuação no Núcleo Cível de Cuiabá em direito de família, consumidor e saúde",
      "Título de Cidadão Mato-grossense concedido pela ALMT (2013)",
      "Participação em bancas examinadoras de concursos da instituição",
    ],
  },
];

const AtuacaoNasGestoes = () => {
  useScrollToTopOnMount();

  return (
    <main className="min-h-screen pt-24">
      {/* Experiência em Gestão - VERDE */}
      <SectionContainer background="primary" padding="md" maxWidth="xl">
        <SectionTitle
          centered
          titleClassName="text-primary-foreground"
          subtitleClassName="text-primary-foreground/80"
          subtitle="Funções de liderança exercidas ao longo da carreira na Defensoria Pública"
        >
          Atuação nas Gestões
        </SectionTitle>

        <div className="max-w-4xl mx-auto mt-12 space-y-6">
          {gestoes.map((cargo, index) => {
            const Icon = cargo.icon;
            return (
              <Card
                key={index}
                className="p-6 md:p-8 bg-background border-border/60 rounded-2xl overflow-hidden relative scroll-reveal"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <span
                  className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-2xl"
                  aria-hidden="true"
                />

                <div className="flex flex-col md:flex-row md:items-start gap-6 pl-4">
                  {/* Ícone */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  <div className="flex-1 space-y-4">
                    {/* Cabeçalho */}
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-primary">
                          <Calendar className="w-3.5 h-3.5" />
                          {cargo.gestao}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {cargo.periodo} · {cargo.duracao}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground">
                        {cargo.cargo}
                      </h3>
                    </div>

                    <hr className="border-border/60" />

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {cargo.descricao}
                    </p>

                    {/* Destaques */}
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-3">
                        Principais entregas
                      </p>
                      <ul className="space-y-2">
                        {cargo.destaques.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <TrendingUp className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </SectionContainer>

      {/* Área Fim - BRANCO */}
      <SectionContainer background="default" padding="md" maxWidth="xl">
        <SectionTitle centered subtitle="Atuação direta no atendimento e defesa dos cidadãos">
          Experiência na Área Fim
        </SectionTitle>

        <div className="max-w-4xl mx-auto mt-10 space-y-5">
          {[
            {
              icon: Briefcase,
              title: "Defensor Público Atuante",
              text: "Durante toda a carreira, o Dr. Rogério manteve atuação constante na área fim, atendendo diretamente cidadãos em diversas situações de vulnerabilidade e defendendo direitos fundamentais perante o Poder Judiciário.",
            },
            {
              icon: Users,
              title: "Atendimento Humanizado",
              text: "Participou ativamente de mutirões de atendimento, audiências públicas e projetos de extensão, levando a assistência jurídica gratuita a comunidades de difícil acesso e contribuindo para a ampliação do alcance da Defensoria.",
            },
            {
              icon: Shield,
              title: "Interiorização",
              text: "Atuou nas comarcas do interior do Estado, incluindo Sinop, durante o estágio probatório, desenvolvendo profunda compreensão da realidade da população mato-grossense e das demandas jurídicas regionais.",
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="p-6 border border-border/60 rounded-2xl overflow-hidden relative scroll-reveal"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <span
                  className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-2xl"
                  aria-hidden="true"
                />
                <div className="flex items-start gap-4 pl-4">
                  <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </SectionContainer>
    </main>
  );
};

export default AtuacaoNasGestoes;
