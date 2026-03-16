import SectionTitle from "@/components/SectionTitle";
import SectionContainer from "@/components/SectionContainer";
import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Award,
  BookOpen,
  CheckCircle2,
  Shield,
  TrendingUp,
  Users,
  ArrowRight,
} from "lucide-react";

const GestaoResultadosSection = () => {
  const itens = [
    {
      icon: BookOpen,
      title: "Capacitação Permanente",
      description:
        "Investimento contínuo em cursos e formação para qualificar membros e servidores, fortalecendo a atuação institucional. Mais de 50 cursos realizados nos últimos anos, com foco em áreas estratégicas.",
      // TODO: Adicionar números específicos, exemplos de cursos, resultados mensuráveis
    },
    {
      icon: TrendingUp,
      title: "Gestão com Indicadores",
      description:
        "Implantação de indicadores de controle interno para ampliar transparência, previsibilidade e eficiência na gestão. Sistema de acompanhamento em tempo real dos resultados institucionais.",
      // TODO: Adicionar exemplos de indicadores, métricas de melhoria
    },
    {
      icon: Users,
      title: "Diálogo Institucional",
      description:
        "Relação institucional sólida com o Governo do Estado, assegurando recursos, estabilidade e autonomia da Defensoria. Parcerias estratégicas que resultaram em ampliação de recursos e estrutura.",
      // TODO: Adicionar exemplos de parcerias, recursos obtidos, projetos em conjunto
    },
    {
      icon: Award,
      title: "Transparência Reconhecida",
      description:
        "Conquista do selo diamante de transparência em 2025, reafirmando o compromisso com a boa gestão pública. A Defensoria está entre as instituições mais transparentes do Estado.",
      // TODO: Adicionar ranking, comparação com outras instituições, critérios atendidos
    },
    {
      icon: CheckCircle2,
      title: "Cobertura Integral",
      description:
        "Cumprimento do mandamento constitucional com presença da Defensoria em todas as 141 comarcas do Estado de Mato Grosso, garantindo acesso à justiça em todo o território.",
      // TODO: Verificar número exato de comarcas, adicionar mapa ou infográfico
    },
    {
      icon: Shield,
      title: "Fortalecimento Institucional",
      description:
        "Consolidação da Defensoria Pública como instituição essencial à justiça e ao acesso efetivo aos direitos. Crescimento de 24% no quadro de defensores desde 2019.",
      // TODO: Adicionar mais números, comparações temporais, impacto social
    },
  ];

  return (
    <SectionContainer
      background="secondary"
      padding="lg"
      maxWidth="xl"
    >
      <SectionTitle
        centered
        subtitle="Resultados concretos que fortaleceram a Defensoria Pública e a atuação de seus membros"
      >
        Gestão e Resultados
      </SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-12 md:mt-20 max-w-6xl mx-auto">
        {itens.map((item) => (
          <FeatureCard
            key={item.title}
            icon={item.icon}
            title={item.title}
            description={item.description}
            variant="default"
            className="h-full flex flex-col"
          />
        ))}
      </div>

      {/* CTA contextual */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center mt-14 max-w-xl mx-auto">
        <Button asChild variant="default" size="lg" className="w-full sm:w-auto">
          <Link to="/atuacao-nas-gestoes">
            Ver atuação nas gestões
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
          <Link to="/historia-na-defensoria">
            Trajetória na Defensoria
          </Link>
        </Button>
      </div>
    </SectionContainer>
  );
};

export default GestaoResultadosSection;
