import SectionTitle from "@/components/SectionTitle";
import SectionContainer from "@/components/SectionContainer";
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

const PlanoDeGestao = () => {
  const {
    ativo,
    selecionarEixo,
    proximoEixo,
    eixoAnterior,
    totalEixos,
    indiceAtual,
  } = useEixoAtivo(EIXOS);

  return (
    <main className="bg-background text-foreground pt-24">
      <SectionContainer
        background="default"
        padding="md"
        maxWidth="xl"
      >
        <SectionTitle
          centered
          subtitle="Plano de Gestão 2027–2028"
        >
          Compromisso com uma Defensoria mais humana, moderna e forte
        </SectionTitle>
        <div className="flex justify-center mt-6">
          <Button size="lg" aria-label="Baixar plano completo em PDF">
            <Download className="w-5 h-5 mr-2" aria-hidden="true" />
            Baixar plano completo (PDF)
          </Button>
        </div>
      </SectionContainer>

      {/* EIXOS – FUNDO VERDE (já tem textura via SectionContainer) */}
      <SectionContainer
        background="primary"
        padding="md"
        maxWidth="xl"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* DETALHE DO EIXO – FUNDO CLARO */}
      <SectionContainer
        background="default"
        padding="md"
        maxWidth="xl"
      >
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
    </main>
  );
};

export default PlanoDeGestao;
