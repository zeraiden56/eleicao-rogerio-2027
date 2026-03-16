import SectionTitle from "@/components/SectionTitle";
import SectionContainer from "@/components/SectionContainer";
import { Card } from "@/components/ui/card";
import { GraduationCap, BookOpen, Award, FileText } from "lucide-react";
import { useScrollToTopOnMount } from "@/hooks/useScrollToTopOnMount";

const formacaoAcademica = [
  {
    tipo: "Pós-doutorado",
    nivel: "5",
    curso: "Pós-doutorado em Direitos Humanos",
    instituicao: "Universidade Regional do Noroeste do Estado do Rio Grande do Sul (UNIJUÍ)",
    ano: "2024 – 2025",
  },
  {
    tipo: "Doutorado",
    nivel: "4",
    curso: "Doutorado em Ciências Jurídicas",
    instituicao:
      'Centro Universitário de Maringá (UNICESUMAR) — Tese: "Vigilância e privacidade: intersecção entre a atividade de inteligência de Estado e os direitos de personalidade na Defensoria Pública" (defendida em 09/12/2024).',
    ano: "2021 – 2024",
  },
  {
    tipo: "Mestrado",
    nivel: "3",
    curso: "Mestrado em Ciências Jurídicas",
    instituicao:
      'Centro Universitário de Maringá (UNICESUMAR) — Dissertação: "O acesso à justiça e os litígios estratégicos: a Defensoria Pública na proteção dos direitos da personalidade" (2020).',
    ano: "2019 – 2020",
  },
  {
    tipo: "Pós-graduação",
    nivel: "2",
    curso: "Pós-graduação em Direito Imobiliário, Registral e Notarial",
    instituicao:
      "Grupo ATAME em convênio com a Universidade Candido Mendes (UCAM) — Rio de Janeiro/RJ",
    ano: "2020",
  },
  {
    tipo: "Pós-graduação",
    nivel: "2",
    curso: "Pós-graduação em Processo Civil",
    instituicao: "Instituto de Ensino LFG",
    ano: "2005",
  },
  {
    tipo: "Graduação",
    nivel: "1",
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
    cargaHoraria: "60h",
  },
  {
    nome: "Curso Master de Licitações e Contratos",
    instituicao: "Atame Pós-Graduação e Cursos",
    ano: "2020",
    cargaHoraria: "15h",
  },
  {
    nome: "Pós-graduação em Direito Civil e Empresarial (extensão universitária)",
    instituicao: "Damásio Educacional",
    ano: "2013",
    cargaHoraria: "Especialização lato sensu",
  },
  {
    nome: "Programa de Atualização Jurídica",
    instituicao: "Faculdade de Direito Prof. Damásio de Jesus",
    ano: "2001 – 2004",
    cargaHoraria: "Série de cursos de atualização",
  },
];

const destaques = [
  {
    icon: Award,
    title: "Títulos de Pós-Graduação e Doutorado",
    description:
      "Mestrado e doutorado em Ciências Jurídicas com pesquisas voltadas à efetivação dos direitos da personalidade e à relação entre cidadania, Estado e produção de dados sensíveis.",
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
];

const Formacao = () => {
  useScrollToTopOnMount();

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

        <div className="max-w-4xl mx-auto mt-12 space-y-5">
          {formacaoAcademica.map((item, index) => (
            <Card
              key={index}
              className="p-6 md:p-7 border border-border/60 rounded-2xl overflow-hidden relative scroll-reveal"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <span
                className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-2xl"
                aria-hidden="true"
              />

              <div className="flex items-start gap-5 pl-4">
                {/* Ícone com graduação */}
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-primary">
                      {item.tipo}
                    </span>
                    <span className="text-xs text-muted-foreground font-medium">
                      {item.ano}
                    </span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold mb-1 leading-snug">
                    {item.curso}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.instituicao}
                  </p>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 max-w-5xl mx-auto">
          {cursosRelevantes.map((curso, index) => (
            <Card
              key={index}
              className="p-5 md:p-6 border border-border/60 rounded-2xl overflow-hidden relative scroll-reveal bg-background"
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <span
                className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-2xl"
                aria-hidden="true"
              />

              <div className="flex items-start gap-4 pl-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold mb-1 leading-snug">{curso.nome}</h3>
                  <p className="text-xs text-muted-foreground mb-1">{curso.instituicao}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">{curso.ano}</span>
                    <span>·</span>
                    <span>{curso.cargaHoraria}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </SectionContainer>

      {/* Destaques Acadêmicos - BRANCO */}
      <SectionContainer background="default" padding="md" maxWidth="xl">
        <SectionTitle centered subtitle="Conquistas e reconhecimentos acadêmicos">
          Destaques Acadêmicos
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12 max-w-5xl mx-auto">
          {destaques.map((item, index) => {
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
                <div className="pl-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-bold mb-2 leading-snug">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10">
          Para informações mais detalhadas, consulte o{" "}
          <a href="/lattes" className="text-primary hover:underline font-semibold">
            Currículo Lattes completo
          </a>
          .
        </p>
      </SectionContainer>
    </main>
  );
};

export default Formacao;
