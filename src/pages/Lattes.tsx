import SectionTitle from "@/components/SectionTitle";
import SectionContainer from "@/components/SectionContainer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollToTopOnMount } from "@/hooks/useScrollToTopOnMount";
import {
  FileText,
  ExternalLink,
  Award,
  BookOpen,
  Users,
  GraduationCap,
  Briefcase,
  Globe2,
} from "lucide-react";

const Lattes = () => {
  useScrollToTopOnMount();
  const destaques = [
    {
      icon: GraduationCap,
      title: "Formação Acadêmica",
      description: (
        <>
          <p>Doutor em Ciências Jurídicas – Centro Universitário de Maringá (2021–2024).</p>
          <p>Mestre em Ciências Jurídicas – Centro Universitário de Maringá (2019–2020).</p>
          <p>Graduação em Ciências Jurídicas – Faculdades Integradas de Três Lagoas (1996–2001).</p>
        </>
      ),
    },
    {
      icon: BookOpen,
      title: "Especializações e Cursos",
      description: (
        <>
          <p>Pós-graduação em Processo Civil – Instituto de Ensino LFG (2005).</p>
          <p>
            Pós-graduação em Direito Imobiliário, Registral e Notarial – ATAME / UCAM (2020).
          </p>
          <p>
            Especialista em Inteligência Estratégica de Estado – Faculdades Impactos Brasil e
            Instituto Cátedra (2022).
          </p>
        </>
      ),
    },
    {
      icon: Users,
      title: "Atuação Docente",
      description: (
        <>
          <p>Professor de Direito Civil e Processo Civil na UNIC, UNIP, FASIPE e Faculdades Unicen.</p>
          <p>
            Coordenador e professor em curso de extensão teórico-prático em Processo Civil, com
            foco em precedentes do STJ e STF.
          </p>
        </>
      ),
    },
    {
      icon: Briefcase,
      title: "Atuação na Defensoria Pública",
      description: (
        <>
          <p>Defensor Público do Estado de Mato Grosso desde 2004.</p>
          <p>
            Defensor Público de Entrância Especial, lotado no núcleo de feitos gerais da capital,
            com atuação em varas de direito bancário e ações coletivas.
          </p>
          <p>Atual Primeiro Subdefensor Público-Geral do Estado de Mato Grosso (gestão 2025–2026).</p>
        </>
      ),
    },
    {
      icon: FileText,
      title: "Produção Acadêmica e Técnica",
      description: (
        <>
          <p>
            Palestras e trabalhos sobre mandado de segurança, inventário e partilha, tribunal do
            júri, institutos fundamentais do processo civil e registros públicos.
          </p>
          <p>
            Textos sobre processo civil na sociedade da informação, condições da ação, competência
            e nulidades processuais.
          </p>
        </>
      ),
    },
    {
      icon: Globe2,
      title: "Idiomas",
      description: (
        <>
          <p>Inglês – compreende, fala, lê e escreve bem.</p>
          <p>Francês – compreende, fala, lê e escreve bem.</p>
        </>
      ),
    },
  ];

  return (
    <main className="min-h-screen pt-24">
      {/* Sobre o currículo / Resumo biográfico - BRANCO */}
      <SectionContainer background="default" padding="md" maxWidth="xl">
        <SectionTitle
          centered
          subtitle="Síntese da trajetória acadêmica, profissional e de pesquisa do Dr. Rogério Borges Freitas"
        >
          Currículo Lattes
        </SectionTitle>
          <Card className="max-w-5xl mx-auto p-8 md:p-12 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Trajetória em síntese
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
              <p className="text-lg">
                Defensor Público do Estado de Mato Grosso, Dr. Rogério Borges Freitas
                é o atual Primeiro Subdefensor Público-Geral do Estado (gestão 2025–2026).
                Ingressou na carreira em 2004 e atua como Defensor Público de Entrância
                Especial, lotado no núcleo de feitos gerais da capital, com atuação nas
                varas de direito bancário e em ações coletivas.
              </p>
              <p>
                Graduou-se em Ciências Jurídicas pelas Faculdades Integradas de Três Lagoas
                (AEMS, 2001). Concluiu pós-graduação em Processo Civil pelo Instituto de
                Ensino LFG (2005) e pós-graduação em Direito Imobiliário, Registral e
                Notarial pelo Grupo ATAME em convênio com a Universidade Candido Mendes
                – UCAM/RJ (2020). É também especialista em Inteligência Estratégica de
                Estado pelas Faculdades Impactos Brasil e Instituto Cátedra (2022).
              </p>
              <p>
                É Mestre em Ciências Jurídicas pelo Programa de Pós-Graduação em Ciências
                Jurídicas (PPGCJ) – MINTER PPGCJ / FASIPE-CPA (linha de pesquisa:
                instrumentos de efetivação dos direitos da personalidade), sob orientação
                do Prof. Dr. Marcelo Negri Soares, com dissertação sobre o acesso à justiça,
                litígios estratégicos e a atuação da Defensoria Pública na proteção dos
                direitos da personalidade.
              </p>
              <p>
                Doutor em Ciências Jurídicas pelo Centro Universitário de Maringá
                (PPGCJ/UNICESUMAR – turma 2021), na Linha de Pesquisa II – Instrumentos
                de efetivação dos direitos da personalidade. Sua tese, defendida em
                09/12/2024, analisa a relação de confiança entre o cidadão e o Estado no
                contexto da produção de dados sensíveis na sociedade da informação, com
                foco na tutela dos direitos da personalidade diante da implementação de
                um serviço de inteligência no âmbito da Defensoria Pública.
              </p>
              <p>
                Atuou como professor de Direito Civil e Processo Civil em diversas
                instituições de ensino superior, incluindo a Universidade de Cuiabá
                (UNIC), a Universidade Paulista (UNIP – campus ICEC), a Faculdade FASIPE
                – CPA e as Faculdades Unicen. Participou ainda como membro de banca do
                exame oral do V e VI Concursos para Defensor Público do Estado de
                Mato Grosso (2016 e 2023).
              </p>
            </div>
          </Card>
          <div className="flex justify-center mt-8">
            <Button
              size="lg"
              variant="secondary"
              asChild
            >
              <a href="#" target="_blank" rel="noreferrer">
                <ExternalLink className="w-5 h-5 mr-2" />
                Acessar Currículo completo
              </a>
            </Button>
          </div>
      </SectionContainer>

      {/* Destaques do Currículo - VERDE */}
      <SectionContainer background="primary" padding="md" maxWidth="xl">
        <SectionTitle
          centered
          titleClassName="text-primary-foreground"
          subtitleClassName="text-primary-foreground/80"
          subtitle="Principais eixos da trajetória acadêmica e profissional"
        >
          Destaques do Currículo
        </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
            {destaques.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="p-6 card-hover fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <div className="text-muted-foreground text-sm space-y-1">
                    {item.description}
                  </div>
                </Card>
              );
            })}
          </div>
      </SectionContainer>

      {/* Seção: Produção e Pesquisa - BRANCO */}
      <SectionContainer background="default" padding="md" maxWidth="xl">
        <SectionTitle centered subtitle="Pesquisa, publicações e produção técnica">
          Produção acadêmica e pesquisa
        </SectionTitle>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <Card className="p-6 space-y-3">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Produções bibliográficas</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Palestras e apresentações sobre:
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>A técnica do mandado de segurança e análise da Lei 12.016/09.</li>
                <li>A técnica processual do inventário e partilha.</li>
                <li>A técnica do Tribunal do Júri.</li>
                <li>
                  Os institutos fundamentais do processo civil (jurisdição, ação, exceção e
                  processo).
                </li>
                <li>Análise da Lei de Registros Públicos no Brasil.</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-3">
                Além disso, produziu textos sobre o processo civil na sociedade da informação,
                condições da ação e pressupostos processuais, competência e nulidades no
                processo civil brasileiro.
              </p>
            </Card>

            <Card className="p-6 space-y-3">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Projeto de pesquisa</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Projeto em andamento desde 2003:
              </p>
              <p className="text-sm font-medium">
                <em>Cidadania e controle social no Estado democrático de direito</em>
              </p>
              <p className="text-sm text-muted-foreground">
                O projeto investiga a cidadania na sociedade da informação sob a perspectiva do
                desenvolvimento da democracia e de uma tutela constitucional mais efetiva.
                Analisa a jurisdição constitucional no ambiente informacional e seus reflexos
                como construtora da democracia, com ênfase em mecanismos garantidores da
                Constituição e do Estado em um contexto de alta complexidade social.
              </p>
              <p className="text-xs text-muted-foreground">
                Coordenação: Dr. Rogério Borges Freitas.
              </p>
            </Card>
          </div>
      </SectionContainer>

      {/* Seção: Experiência profissional e docente - VERDE */}
      <SectionContainer background="primary" padding="md" maxWidth="xl">
        <SectionTitle
          centered
          titleClassName="text-primary-foreground"
          subtitleClassName="text-primary-foreground/80"
          subtitle="Atuação na Defensoria Pública e no ensino jurídico"
        >
          Experiência profissional
        </SectionTitle>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <Card className="p-6 space-y-3">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Defensoria Pública</h3>
              </div>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>
                  Defensor Público do Estado de Mato Grosso (vínculo estatutário) desde 2004.
                </li>
                <li>
                  Defensor Público de Entrância Especial, com atuação no núcleo de ações
                  coletivas, ação popular e ações civis públicas.
                </li>
                <li>
                  Endereço profissional: Defensoria Pública do Estado de Mato Grosso – Centro
                  Político Administrativo, Cuiabá/MT.
                </li>
                <li>
                  Atuação em pesquisa e desenvolvimento no núcleo de ações coletivas, desde
                  11/2007.
                </li>
              </ul>
            </Card>

            <Card className="p-6 space-y-3">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Docência e cursos</h3>
              </div>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Professor de Direito Civil e Processo Civil na UNIC Educacional.</li>
                <li>Professor na Universidade Paulista – UNIP (campus ICEC).</li>
                <li>Professor na Faculdade FASIPE – CPA, em Cuiabá/MT.</li>
                <li>Professor nas Faculdades Unicen.</li>
                <li>
                  Professor em curso de extensão em Processo Civil, com dedicação exclusiva,
                  voltado à aplicação prática do direito processual civil e à análise de
                  precedentes do STJ e STF.
                </li>
                <li>
                  Participação como membro de banca em concursos para Defensor Público do
                  Estado de Mato Grosso (V e VI Concursos – 2016 e 2023).
                </li>
              </ul>
            </Card>
          </div>
      </SectionContainer>

      {/* Call to Action - BRANCO */}
      <SectionContainer background="default" padding="md" maxWidth="xl">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-gradient-to-br from-primary/5 to-primary/10 text-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="w-10 h-10 text-primary" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Consulte o currículo em versão integral
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Esta página apresenta um resumo organizado das principais informações do
            Currículo Lattes do Dr. Rogério Borges Freitas. Para detalhes completos,
            liste de produções e atualizações em tempo real, acesse o currículo na
            plataforma oficial.
          </p>
          <Button size="lg" asChild>
            <a href="#" target="_blank" rel="noreferrer">
              <ExternalLink className="w-5 h-5 mr-2" />
              Acessar Currículo na plataforma
            </a>
          </Button>
        </Card>
      </SectionContainer>
    </main>
  );
};

export default Lattes;
