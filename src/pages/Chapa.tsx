import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useScrollToTopOnMount } from "@/hooks/useScrollToTopOnMount";
import SectionTitle from "@/components/SectionTitle";
import SectionContainer from "@/components/SectionContainer";
import { Card } from "@/components/ui/card";
import {
  User,
  Briefcase,
  GraduationCap,
  Award,
  Mail,
  Phone,
  MapPin,
  Star,
} from "lucide-react";
import LazyImage from "@/components/LazyImage";

/**
 * Interface para membros da chapa
 */
interface MembroChapa {
  id: string;
  nome: string;
  /** Cargo na candidatura */
  cargoNaChapa: string;
  /** Cargo atual na Defensoria */
  cargoAtual?: string;
  /** Foto única */
  foto?: string;
  trajetoria: string[];
  formacao?: string[];
  biografia?: string;
  contato?: {
    email?: string;
    telefone?: string;
    localizacao?: string;
  };
}

const MEMBROS_CHAPA: MembroChapa[] = [
  {
    id: "rogerio",
    nome: "Dr. Rogério Borges Freitas",
    cargoNaChapa: "Candidato a Defensor Público-Geral",
    cargoAtual: "Primeiro Subdefensor Público-Geral (gestão 2025–2026)",
    foto: "/rogerio.jpeg",
    biografia:
      "Rogério Borges Freitas é Defensor Público do Estado de Mato Grosso e atualmente exerce o cargo de Primeiro Subdefensor Público-Geral (gestão 2025–2026). Graduado em Ciências Jurídicas pelas Faculdades Integradas de Três Lagoas – AEMS (2001), é mestre e doutor em Ciências Jurídicas pela UNICESUMAR e possui sete pós-graduações na área do Direito. Nascido em Três Lagoas/MS, foi aprovado no segundo concurso da Defensoria Pública de MT (2004), atuou nas comarcas do interior e no Núcleo Cível de Cuiabá, e desde 2019 exerce funções de direção superior como Primeiro Subdefensor. Foi agraciado com o Título de Cidadão Mato-grossense pela ALMT (2013) e participou de bancas examinadoras de concursos da instituição. Mantém compromisso com a missão constitucional da Defensoria, o acesso à justiça e o fortalecimento do Estado Democrático de Direito.",
    trajetoria: [
      "Primeiro Subdefensor Público-Geral (2019 e desde 2023); Ordenador de Despesas",
      "Atuação na área fim e no Núcleo Cível da capital; interiorização em Sinop e outras comarcas",
      "Auxiliar da Corregedoria-Geral; coordenação temporária do Núcleo da Capital",
      "Participação nas contratações para cobertura de todos os núcleos no prazo constitucional",
      "Selo diamante de transparência (2025); comissões eleitorais e de governança",
      "Suplente no Conselho de Previdência do Estado; CONDEGE (Proteção de Dados); Comissão de Normativas",
      "Título de Cidadão Mato-grossense (ALMT, 2013); notas de elogio institucionais",
    ],
    formacao: [
      "Graduação em Ciências Jurídicas (AEMS, 2001)",
      "Mestrado e Doutorado em Ciências Jurídicas (UNICESUMAR); Pós-doutorado em Direitos Humanos (UNIJUÍ)",
      "Pós-graduações: Processo Civil; Direito Imobiliário, Registral e Notarial (UCAM); Inteligência Estratégica de Estado; entre outras",
    ],
    contato: {
      email: "contato@campanharogerio.com.br",
      telefone: "(65) 98123-7712",
      localizacao: "Cuiabá - MT",
    },
  },
  {
    id: "luziane",
    nome: "Dra. Maria Luziane Ribeiro de Castro",
    cargoNaChapa: "Candidata a Secretária Executiva",
    cargoAtual: "Defensora Pública-Geral · Gestões 2023–2024 e 2025–2026",
    foto: "/luziane/luziane3.jpg",
    biografia:
      "Maria Luziane Ribeiro de Castro tomou posse no cargo de Defensora Pública-Geral de Mato Grosso pela primeira vez em 16 de dezembro de 2022, para mandato iniciado em 2 de janeiro de 2023. Em novembro de 2024, foi reeleita com 190 votos e tomou posse em 6 de fevereiro de 2025. Ingressou na Defensoria em 2004, sendo a primeira defensora de primeira instância a comandar o órgão e a segunda mulher a chefiar a Defensoria Pública Estadual.",
    trajetoria: [
      "Defensora Pública-Geral — eleita com 177 votos (85% dos válidos) em 2022 e reeleita com 190 votos em 2024",
      "Secretária Executiva da Defensoria Pública de MT por quatro anos (2019–2022)",
      "Atuação no Núcleo de Defesa do Consumidor em Cuiabá",
      "Defensora Pública desde 2004 — pioneira de primeira instância na liderança do órgão",
      "Ganhadora do Prêmio de Inovação Judiciário Exponencial 2024",
    ],
    formacao: [
      "Graduação em Direito — Universidade de Cuiabá (UNIC), 2001",
      "Especialização em Direito Civil, Processual Civil, Direito Penal e Processual Penal",
      "Graduação em Ciências Contábeis — Universidade Federal de Mato Grosso (UFMT), 1996",
    ],
  },
  {
    id: "paulo",
    nome: "Dr. Paulo Roberto da Silva Marquezini",
    cargoNaChapa: "Candidato a Primeiro Subdefensor Público-Geral",
    cargoAtual: "Defensor Público do Estado de Mato Grosso desde 19/08/2010",
    foto: "/paulo/paulo2.jpeg",
    biografia:
      "Paulo Roberto da Silva Marquezini é Defensor Público do Estado de Mato Grosso desde 19 de agosto de 2010. Exerceu a advocacia em São Paulo de fevereiro de 2007 a agosto de 2010. Docente universitário em Alta Floresta (UNEMAT e FADAF) entre 2010 e 2016. Mestre em Direito Processual Civil pela Universidade de São Paulo (2012), com dissertação sobre técnicas de julgamento de causas repetitivas.",
    trajetoria: [
      "Diretor da Escola Superior da Defensoria Pública de MT (abril/2023 – abril/2025)",
      "Vice-Diretor da Escola Superior da Defensoria Pública de MT (abril/2021 – abril/2023)",
      "Membro do Conselho Superior da DPE-MT nos biênios 2017–2018 e 2019–2020",
      "Representante da DPE-MT no Grupo de Atuação Estratégica nos Tribunais Superiores (GAETS) desde maio de 2022",
      "Coordenador do GAEDIC – Carcerário desde fevereiro de 2022; membro desde 2019",
      "Membro do GAEDIC – Direito das Catadoras e Catadores de Materiais Recicláveis desde 2020",
      "Docente do Curso de Direito da UNEMAT (Alta Floresta, 2015–2016) e da FADAF (2010, 2012 e 2013)",
    ],
    formacao: [
      "Mestrado em Direito Processual Civil — Universidade de São Paulo (USP), 2009–2012. Dissertação: \"Técnicas de Julgamento de Causas Repetitivas no Direito Brasileiro\". Orientador: Carlos Alberto Carmona.",
      "Graduação em Direito — Universidade de São Paulo (USP), 2002–2006.",
    ],
  },
  {
    id: "paula",
    nome: "Dra. Paula Ferreira Fernandes",
    cargoNaChapa: "Candidata a Segunda Subdefensora Pública-Geral",
    cargoAtual: "Defensora Pública · Defensora do Júri",
    foto: "/paula/paula5.jpg",
    biografia:
      "Paula Ferreira Fernandes é Defensora Pública titular da 9ª Defensoria Cível de Várzea Grande, com formação em Direito pela Faculdade de Direito de Campos e especialização em Direito Privado (FASE). Ingressou na Defensoria em 2010 e, em 15 anos de instituição, atuou em São José do Rio Claro, Diamantino, Cáceres, Chapada dos Guimarães e no Tribunal do Júri de Cuiabá. Sua atuação é pautada pela convicção de que a justiça deve ser acessível a todos, com empatia, integridade e compromisso social. Defende uma Defensoria humanizada para assistidos, colaboradores e membros, equilibrando fortalecimento institucional e da Classe. Mãe de Valentina e Alice, trabalha pela transformação de realidades e pela garantia de direitos fundamentais.",
    trajetoria: [
      "Defensoria desde 2010; atuação contínua na atividade-fim",
      "Passagem por diversas comarcas do Estado e Tribunal do Júri (Cuiabá)",
      "Compromisso com valorização da carreira e atendimento de excelência",
      "Visão de Defensoria humanizada e estruturada para serviço público de qualidade",
    ],
    formacao: [
      "Graduação em Direito (Faculdade de Direito de Campos)",
      "Especialização em Direito Privado (FASE)",
    ],
  },
];

const Chapa = () => {
  useScrollToTopOnMount();
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    let attempts = 0;
    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (attempts < 6) {
        attempts++;
        setTimeout(tryScroll, 100);
      }
    };
    // Aguarda 80ms para o DOM estar pronto antes da primeira tentativa
    const init = setTimeout(tryScroll, 80);
    return () => clearTimeout(init);
  }, [hash]);

  return (
    <main className="bg-background text-foreground pt-24">
      <SectionContainer background="default" padding="lg" maxWidth="xl">
        <SectionTitle
          centered
          subtitle="Conheça a equipe que vai liderar a Defensoria Pública"
        >
          Nossa Chapa
        </SectionTitle>

        <div className="space-y-10">
          {MEMBROS_CHAPA.map((membro, index) => (
            <div
              key={membro.id}
              id={membro.id}
              className="scroll-mt-28"
            >
              <Card
                className="overflow-hidden border border-border/60 rounded-3xl scroll-reveal"
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <div className="grid grid-cols-1 md:grid-cols-[300px,1fr]">
                  {/* Coluna da foto */}
                  <div className="relative bg-muted">
                    {membro.foto ? (
                      <div className="relative h-[340px] md:h-full min-h-[340px]">
                        <LazyImage
                          src={membro.foto}
                          alt={membro.nome}
                          className="w-full h-full object-cover object-top"
                        />
                        {/* Gradiente lateral para transição suave com o conteúdo */}
                        <div className="hidden md:block absolute inset-y-0 right-0 w-8 bg-gradient-to-r from-transparent to-card pointer-events-none" />
                      </div>
                    ) : (
                      <div className="h-[340px] md:h-full flex items-center justify-center bg-muted">
                        <User className="w-24 h-24 text-muted-foreground" />
                      </div>
                    )}
                  </div>

                  {/* Coluna de conteúdo */}
                  <div className="p-8 md:p-10 space-y-6">
                    {/* Cargo na candidatura */}
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Star className="w-4 h-4 text-primary" />
                      </span>
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-1">
                          Cargo na candidatura
                        </p>
                        <p className="text-lg font-bold text-primary leading-snug">
                          {membro.cargoNaChapa}
                        </p>
                      </div>
                    </div>

                    {/* Nome */}
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-2 leading-tight">
                        {membro.nome}
                      </h2>

                      {/* Cargo atual */}
                      {membro.cargoAtual && (
                        <div className="flex items-center gap-2 mt-2">
                          <Briefcase className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            <span className="font-semibold text-foreground">Cargo atual: </span>
                            {membro.cargoAtual}
                          </span>
                        </div>
                      )}
                    </div>

                    <hr className="border-border/60" />

                    {/* Biografia */}
                    {membro.biografia && (
                      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                        {membro.biografia}
                      </p>
                    )}

                    {/* Trajetória */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Award className="w-5 h-5 text-primary" />
                        <h3 className="text-base font-semibold">Trajetória</h3>
                      </div>
                      <ul className="space-y-2">
                        {membro.trajetoria.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-muted-foreground text-sm"
                          >
                            <span className="text-primary font-bold mt-1 flex-shrink-0">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Formação */}
                    {membro.formacao && membro.formacao.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <GraduationCap className="w-5 h-5 text-primary" />
                          <h3 className="text-base font-semibold">Formação</h3>
                        </div>
                        <ul className="space-y-2">
                          {membro.formacao.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-muted-foreground text-sm"
                            >
                              <span className="text-primary font-bold mt-1 flex-shrink-0">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Contato */}
                    {membro.contato && (
                      <div className="pt-4 border-t border-border/60">
                        <div className="flex flex-wrap gap-4 text-sm">
                          {membro.contato.email && (
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Mail className="w-4 h-4 flex-shrink-0" />
                              <span>{membro.contato.email}</span>
                            </div>
                          )}
                          {membro.contato.telefone && (
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Phone className="w-4 h-4 flex-shrink-0" />
                              <span>{membro.contato.telefone}</span>
                            </div>
                          )}
                          {membro.contato.localizacao && (
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <MapPin className="w-4 h-4 flex-shrink-0" />
                              <span>{membro.contato.localizacao}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </SectionContainer>
    </main>
  );
};

export default Chapa;
