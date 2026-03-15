import SectionTitle from "@/components/SectionTitle";
import SectionContainer from "@/components/SectionContainer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Target,
  Users,
  Lightbulb,
  Shield,
  TrendingUp,
  Award,
  Download,
} from "lucide-react";
import { useEixoAtivo, type Eixo } from "@/hooks/useEixoAtivo";
import { useScrollToTopOnMount } from "@/hooks/useScrollToTopOnMount";
import EixoCard from "@/components/EixoCard";
import EixoDetalhe from "@/components/EixoDetalhe";

const EIXOS: Eixo[] = [
  {
    id: "eixo1",
    title: "Fortalecimento da Atuação Finalística e Estrutural dos Gabinetes",
    description:
      "Dar condições estruturais e humanas para que os gabinetes atuem com eficiência, qualidade técnica e equilíbrio de carga de trabalho.",
    icon: Target,
    items: [
      "Segundo cargo de Assessor Jurídico por gabinete",
      "Valorização do estágio de graduação e pós-graduação",
      "Transformação do estágio em Ajudante Geral Jurídico",
      "Verba indenizatória vinculada ao acervo processual",
      "Proteção remuneratória em caso de reforma administrativa",
      "Verba de sobreaviso para plantões",
      "Defensores auxiliares nas Varas de Família",
      "Reorganização das audiências de custódia",
      "Distribuição equilibrada dos plantões",
      "Apoio técnico contábil institucional",
    ],
  },
  {
    id: "eixo2",
    title: "Gestão de Pessoas, Saúde e Qualidade de Vida",
    description:
      "Valorização profissional, saúde física e mental, reconhecimento institucional e ambiente de trabalho saudável.",
    icon: Users,
    items: [
      "Programa institucional de saúde e bem-estar",
      "Auxílio-saúde para ativos e inativos",
      "Apoio psicológico institucional",
      "Parcerias com academias e clínicas",
      "Plano de carreira para cargos de apoio",
      "Incentivo à titulação acadêmica",
      "Folga compensatória para capacitações",
      "Inamovibilidade e segurança funcional",
      "Política de enfrentamento ao preconceito",
      "Plano de capacitação continuada",
    ],
  },
  {
    id: "eixo3",
    title: "Modernização Administrativa e Tecnologia",
    description:
      "Redução da burocracia e uso estratégico da tecnologia e da inteligência artificial.",
    icon: Lightbulb,
    items: [
      "Simplificação do chatbot institucional",
      "Redução de campos obrigatórios nos sistemas",
      "Automatização de tarefas repetitivas",
      "Digitalização assistida de documentos",
      "IA para apoio ao atendimento",
      "Modernização do Solar e sistemas de RH",
      "Revisão do workflow interno",
      "Integração com o Judiciário",
    ],
  },
  {
    id: "eixo4",
    title: "Política Institucional e Eficiência na Atividade-Fim",
    description:
      "Gestão participativa, regras claras e fortalecimento da comunicação institucional.",
    icon: Shield,
    items: [
      "Núcleo de conciliação pré-judicial",
      "Gestão participativa com escuta ativa",
      "Revisão das unificadas",
      "Teletrabalho com critérios técnicos",
      "Calendário previsível de promoções",
      "Regras claras para gratificações",
      "Comunicação institucional estratégica",
      "Reuniões regionais periódicas",
    ],
  },
  {
    id: "eixo5",
    title: "Estrutura e Infraestrutura Organizacional",
    description:
      "Ampliação e adequação da estrutura física, humana e tecnológica.",
    icon: TrendingUp,
    items: [
      "Reforço de equipes em unidades críticas",
      "Ampliação da estrutura física",
      "Estrutura proporcional à demanda",
      "Mais salas de atendimento",
      "Informatização completa das unidades",
      "Aumento do quadro administrativo",
    ],
  },
  {
    id: "eixo6",
    title: "Sustentabilidade e Responsabilidade Institucional",
    description:
      "Uso consciente de recursos, responsabilidade ambiental e eficiência energética.",
    icon: Award,
    items: [
      "Política ambiental institucional",
      "Critérios sustentáveis em contratações",
      "Uso de materiais reciclados",
      "Prioridade a fornecedores locais",
      "Redução do consumo de água",
      "Captação de água da chuva",
      "Energia solar institucional",
    ],
  },
];

const Propostas = () => {
  useScrollToTopOnMount();
  const {
    ativo,
    selecionarEixo,
    proximoEixo,
    eixoAnterior,
    totalEixos,
    indiceAtual,
  } = useEixoAtivo(EIXOS);

  return (
    <main className="min-h-screen pt-24">
      {/* Introdução - BRANCO */}
      <SectionContainer background="default" padding="md" maxWidth="xl">
        <SectionTitle
          centered
          subtitle="Propostas e Plano de Gestão 2027–2028 — compromissos para uma Defensoria cada vez mais forte e atuante"
        >
          Propostas e Eixos
        </SectionTitle>
        <Card className="max-w-4xl mx-auto p-8 md:p-12">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              As propostas apresentadas nesta candidatura foram elaboradas com base na experiência
              acumulada ao longo de mais de 20 anos na Defensoria Pública e em diálogo constante
              com membros, servidores e a sociedade.
            </p>
            <p>
              Não se trata de promessas vazias, mas de compromissos fundamentados em diagnóstico
              preciso da realidade institucional e em planejamento estratégico cuidadoso. Cada
              proposta tem como objetivo o fortalecimento da Defensoria e a melhoria do atendimento
              à população.
            </p>
            <p>
              As ações estão organizadas em eixos temáticos e contemplam aspectos estruturais,
              de gestão, de valorização profissional e de inovação, sempre com foco na missão
              constitucional da Defensoria Pública.
            </p>
          </div>
        </Card>
        <div className="flex justify-center mt-8 gap-4 flex-wrap">
          <Button size="lg" variant="secondary">
            <Download className="w-5 h-5 mr-2" />
            Baixar Propostas Completas (PDF)
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <a href="/pdf/plano-de-gestao.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="w-5 h-5 mr-2" />
              Baixar Plano de Gestão (PDF)
            </a>
          </Button>
        </div>
      </SectionContainer>

      {/* Eixos – FUNDO VERDE */}
      <SectionContainer background="primary" padding="md" maxWidth="xl">
        <SectionTitle
          centered
          titleClassName="text-primary-foreground"
          subtitleClassName="text-primary-foreground/80"
          subtitle="Clique em um eixo para ver as propostas detalhadas"
        >
          Eixos do Plano de Gestão
        </SectionTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {EIXOS.map((eixo) => (
            <EixoCard
              key={eixo.id}
              id={eixo.id}
              title={eixo.title}
              icon={eixo.icon}
              isActive={ativo.id === eixo.id}
              onClick={() => selecionarEixo(eixo.id)}
            />
          ))}
        </div>
      </SectionContainer>

      {/* Detalhe do eixo ativo – FUNDO CLARO */}
      <SectionContainer background="default" padding="md" maxWidth="xl">
        <EixoDetalhe
          icon={ativo.icon}
          title={ativo.title}
          description={ativo.description}
          items={ativo.items}
          onPrevious={eixoAnterior}
          onNext={proximoEixo}
          hasPrevious={indiceAtual > 0}
          hasNext={indiceAtual < totalEixos - 1}
          currentIndex={indiceAtual}
          total={totalEixos}
        />
      </SectionContainer>

      {/* Compromisso - BRANCO */}
      <SectionContainer background="default" padding="md" maxWidth="xl">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-gradient-to-br from-primary/5 to-primary/10 text-center overflow-hidden relative">
          <span
            className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-lg"
            aria-hidden="true"
          />
          <div className="pl-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Compromisso com a Execução
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              Estas propostas não são apenas intenções, mas compromissos firmes que serão
              implementados de forma planejada, com metas claras, prazos definidos e
              acompanhamento constante. A experiência em gestão e o conhecimento profundo
              da instituição garantem a viabilidade e a efetividade de cada ação proposta.
            </p>
            <Button size="lg" asChild>
              <a href="/pdf/plano-de-gestao.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="w-5 h-5 mr-2" />
                Baixar Documento Completo
              </a>
            </Button>
          </div>
        </Card>
      </SectionContainer>
    </main>
  );
};

export default Propostas;
