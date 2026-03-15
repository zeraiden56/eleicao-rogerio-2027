import SectionTitle from "@/components/SectionTitle";
import SectionContainer from "@/components/SectionContainer";
import { Card } from "@/components/ui/card";
import { GraduationCap, BookOpen, Award, FileText } from "lucide-react";
import { useScrollToTopOnMount } from "@/hooks/useScrollToTopOnMount";

const Formacao = () => {
  useScrollToTopOnMount();
  const formacaoAcademica = [
    {
      tipo: "Doutorado",
      curso: "Doutorado em Ciências Jurídicas",
      instituicao:
        "Centro Universitário de Maringá (UNICESUMAR) – Linha de Pesquisa: Instrumentos de efetivação dos direitos da personalidade. Tese: “Vigilância e privacidade: intersecção entre a atividade de inteligência de Estado e os direitos de personalidade na Defensoria Pública” (tese defendida em 09/12/2024).",
      ano: "2021 – 2024",
    },
    {
      tipo: "Mestrado",
      curso: "Mestrado em Ciências Jurídicas",
      instituicao:
        "Centro Universitário de Maringá – Linha de Pesquisa: Instrumentos de efetivação dos direitos da personalidade. Dissertação: “O acesso à justiça e os litígios estratégicos: a Defensoria Pública na proteção dos direitos da personalidade” (ano de obtenção: 2020).",
      ano: "2019 – 2020",
    },
    {
      tipo: "Pós-graduação",
      curso:
        "Pós-graduação em Direito Imobiliário, Registral e Notarial",
      instituicao:
        "Grupo ATAME em convênio com a Universidade Candido Mendes (UCAM) – Rio de Janeiro/RJ",
      ano: "2020",
    },
    {
      tipo: "Pós-graduação",
      curso: "Pós-graduação em Processo Civil",
      instituicao: "Instituto de Ensino LFG",
      ano: "2005",
    },
    {
      tipo: "Graduação",
      curso: "Graduação em Ciências Jurídicas",
      instituicao: "Faculdades Integradas de Três Lagoas (AEMS)",
      ano: "1996 – 2001",
    },
  ];

  const cursosRelevantes = [
    {
      nome: "Recursos Cíveis: Teoria Geral e Recurso em Espécie",
      instituicao: "Damásio Educacional",
      ano: "2020",
      cargaHoraria: "Carga horária: 60h",
    },
    {
      nome: "Curso Master de Licitações e Contratos",
      instituicao: "Atame Pós-Graduação e Cursos",
      ano: "2020",
      cargaHoraria: "Carga horária: 15h",
    },
    {
      nome: "Pós-graduação em Direito Civil e Empresarial (extensão universitária)",
      instituicao: "Damásio Educacional",
      ano: "2013",
      cargaHoraria: "Curso de especialização lato sensu",
    },
    {
      nome: "Programa de Atualização Jurídica",
      instituicao: "Faculdade de Direito Prof. Damásio de Jesus",
      ano: "2001 – 2004",
      cargaHoraria: "Série de cursos de atualização jurídica",
    },
  ];

  return (
    <main className="min-h-screen pt-24">
      {/* Formação Acadêmica - BRANCO */}
      <SectionContainer background="default" padding="md" maxWidth="xl">
        <SectionTitle
          centered
          subtitle="Trajetória acadêmica e capacitação profissional contínua do Dr. Rogério Borges Freitas"
        >
          Formação Acadêmica
        </SectionTitle>

          <div className="max-w-4xl mx-auto mt-12 space-y-6">
            {formacaoAcademica.map((item, index) => (
              <Card
                key={index}
                className="p-6 md:p-8 card-hover fade-in-up overflow-hidden relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Barra verde alinhada */}
                <span
                  className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-lg"
                  aria-hidden="true"
                />
                
                <div className="flex items-start space-x-6 pl-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                        {item.tipo}
                      </span>
                      <span className="text-sm text-muted-foreground mt-1 md:mt-0">
                        {item.ano}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">
                      {item.curso}
                    </h3>
                    <p className="text-muted-foreground">{item.instituicao}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
      </SectionContainer>

      {/* Cursos e Especializações - VERDE */}
      <SectionContainer background="primary" padding="md" maxWidth="xl">
        <SectionTitle
          centered
          titleClassName="text-primary-foreground"
          subtitleClassName="text-primary-foreground/80"
          subtitle="Cursos de aperfeiçoamento e capacitação profissional"
        >
          Cursos Relevantes
        </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-6xl mx-auto">
            {cursosRelevantes.map((curso, index) => (
              <Card
                key={index}
                className="p-6 card-hover fade-in-up overflow-hidden relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Barra verde alinhada */}
                <span
                  className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-lg"
                  aria-hidden="true"
                />
                
                <div className="flex items-start space-x-4 pl-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">{curso.nome}</h3>
                    <p className="text-sm text-muted-foreground mb-1">
                      {curso.instituicao}
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <span>{curso.ano}</span>
                      <span>•</span>
                      <span>{curso.cargaHoraria}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
      </SectionContainer>

      {/* Destaques - BRANCO */}
      <SectionContainer background="default" padding="md" maxWidth="xl">
        <SectionTitle centered subtitle="Conquistas e reconhecimentos acadêmicos">
          Destaques Acadêmicos
        </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
            {[
              {
                icon: Award,
                title: "Títulos de Pós-Graduação e Doutorado",
                description:
                  "Trajetória marcada pela conclusão de mestrado e doutorado em Ciências Jurídicas, com pesquisas voltadas à efetivação dos direitos da personalidade e à relação entre cidadania, Estado e produção de dados sensíveis.",
              },
              {
                icon: BookOpen,
                title: "Produção Acadêmica e Palestras",
                description:
                  "Apresentações e conferências sobre processo civil, mandado de segurança, inventário e partilha, jurisdição e direitos da personalidade, além de outros temas jurídicos relevantes.",
              },
              {
                icon: FileText,
                title: "Pesquisa em Cidadania e Controle Social",
                description:
                  "Coordenação de projeto de pesquisa sobre cidadania, controle social e jurisdição constitucional na sociedade da informação, com foco na tutela dos direitos fundamentais.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="p-6 text-center card-hover fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </Card>
              );
            })}
          </div>
      </SectionContainer>

      {/* Compromisso com Aprendizagem - VERDE */}
      <SectionContainer background="primary" padding="md" maxWidth="xl">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-background border-border/60">
          <div className="text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Aprendizado Contínuo
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              A trajetória acadêmica do Dr. Rogério Borges Freitas — da
              graduação às pós-graduações, mestrado e doutorado — reflete um
              compromisso permanente com o estudo e a pesquisa. A capacitação
              contínua é entendida como instrumento essencial para uma
              atuação institucional tecnicamente qualificada, voltada à
              defesa dos direitos da população e ao aperfeiçoamento das
              instituições democráticas.
            </p>
            <p className="text-sm text-muted-foreground">
              Para informações mais detalhadas, consulte o{" "}
              <a href="/lattes" className="text-primary hover:underline font-medium">
                Currículo Lattes completo
              </a>
              .
            </p>
          </div>
        </Card>
      </SectionContainer>
    </main>
  );
};

export default Formacao;
