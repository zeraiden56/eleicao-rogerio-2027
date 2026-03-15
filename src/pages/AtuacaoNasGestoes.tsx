import SectionTitle from "@/components/SectionTitle";
import SectionContainer from "@/components/SectionContainer";
import { Card } from "@/components/ui/card";
import { Shield, Users, TrendingUp, Award, Target, Briefcase, Calendar } from "lucide-react";
import { useScrollToTopOnMount } from "@/hooks/useScrollToTopOnMount";

const AtuacaoNasGestoes = () => {
  useScrollToTopOnMount();
  return (
    <main className="min-h-screen pt-24">
      {/* Área Fim - BRANCO */}
      <SectionContainer background="default" padding="md" maxWidth="xl">
        <SectionTitle centered subtitle="Atuação direta no atendimento e defesa dos cidadãos">
          Experiência na Área Fim
        </SectionTitle>

        <Card className="max-w-4xl mx-auto p-8 md:p-12 mt-12">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Defensor Público Atuante</h3>
                <div className="space-y-3 text-muted-foreground leading-relaxed">
                  {/* TODO: preencher com texto real sobre atuação na área fim */}
                  <p>
                    Durante toda a carreira, o Dr. Rogério manteve atuação constante na área fim,
                    atendendo diretamente cidadãos em diversas situações de vulnerabilidade e
                    defendendo direitos fundamentais perante o Poder Judiciário.
                  </p>
                  <p>
                    Sua experiência abrange diversas áreas do Direito, com destaque para [áreas
                    de atuação específicas], sempre com foco na defesa técnica qualificada e no
                    atendimento humanizado.
                  </p>
                  <p>
                    Participou ativamente de mutirões de atendimento, audiências públicas e
                    projetos de extensão, levando a assistência jurídica gratuita a comunidades
                    de difícil acesso e contribuindo para a ampliação do alcance da Defensoria.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
          {/* TODO: ajustar com dados reais */}
          {[
            {
              icon: Target,
              number: "1000+",
              label: "Atendimentos Realizados",
            },
            {
              icon: Users,
              number: "500+",
              label: "Ações Judiciais",
            },
            {
              icon: Award,
              number: "15+",
              label: "Anos de Atuação",
            },
          ].map((item, index) => (
            <Card key={index} className="p-6 text-center card-hover fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="text-3xl font-bold text-primary mb-2">{item.number}</p>
              <p className="text-sm text-muted-foreground">{item.label}</p>
            </Card>
          ))}
        </div>
      </SectionContainer>

      {/* Gestão - VERDE */}
      <SectionContainer background="primary" padding="md" maxWidth="xl">
        <SectionTitle
          centered
          titleClassName="text-primary-foreground"
          subtitleClassName="text-primary-foreground/80"
          subtitle="Gestões em que participou, com funções e períodos"
        >
          Experiência em Gestão
        </SectionTitle>

        <div className="max-w-6xl mx-auto mt-12 space-y-6">
          {[
            {
              icon: Briefcase,
              gestao: "Gestão 2025–2026",
              cargo: "Primeiro Subdefensor Público-Geral",
              periodo: "2025 – 2026",
              duracao: "2 anos",
              descricao:
                "Atuação como segundo em comando da instituição, participando das decisões estratégicas e substituindo o Defensor Público-Geral quando necessário.",
              destaques: [
                "Ordenação de despesas e acompanhamento orçamentário",
                "Coordenação de projetos de modernização administrativa",
                "Interlocução com órgãos de controle e parceiros institucionais",
              ],
            },
            {
              icon: Shield,
              gestao: "Gestão 2018–2020",
              cargo: "Corregedor-Geral",
              periodo: "2018 – 2020",
              duracao: "2 anos",
              descricao:
                "Responsável pelo controle interno, apuração de irregularidades e aprimoramento dos procedimentos institucionais.",
              destaques: [
                "Revisão de fluxos e protocolos correcionais",
                "Fomento a práticas preventivas e educativas",
                "Fortalecimento de padrões de transparência",
              ],
            },
            {
              icon: Users,
              gestao: "Gestão 2012–2018",
              cargo: "Coordenador de Núcleo Especializado",
              periodo: "2012 – 2018",
              duracao: "6 anos",
              descricao:
                "Gestão de equipe especializada com foco em resultados e qualidade do atendimento ao cidadão.",
              destaques: [
                "Expansão da capacidade de atendimento",
                "Padronização de rotinas e capacitação de equipe",
                "Integração com projetos estratégicos do órgão",
              ],
            },
          ].map((cargo, index) => {
            const Icon = cargo.icon;
            return (
              <Card
                key={index}
                className="p-6 md:p-8 bg-background border-border/60 shadow-md fade-in-up overflow-hidden relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span
                  className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-lg"
                  aria-hidden="true"
                />

                <div className="flex flex-col md:flex-row md:items-start gap-6 pl-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
                          <Calendar className="w-4 h-4" />
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

                    <p className="text-muted-foreground">{cargo.descricao}</p>

                    <div>
                      <p className="font-semibold text-sm uppercase tracking-wide text-foreground">
                        Principais entregas
                      </p>
                      <ul className="mt-2 space-y-2">
                        {cargo.destaques.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
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

      {/* Conclusão - BRANCO */}
      <SectionContainer background="default" padding="md" maxWidth="xl">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Experiência Completa para Liderar
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A combinação entre ampla experiência na área fim e sólida trajetória em cargos
              de gestão proporciona ao Dr. Rogério Borges Freitas visão completa dos desafios
              e oportunidades da Defensoria Pública, capacitando-o para exercer a liderança
              máxima da instituição com competência, equilíbrio e comprometimento.
            </p>
          </div>
        </Card>
      </SectionContainer>
    </main>
  );
};

export default AtuacaoNasGestoes;
