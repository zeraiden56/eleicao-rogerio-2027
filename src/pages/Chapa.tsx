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
} from "lucide-react";
import LazyImage from "@/components/LazyImage";
import RotatingPhoto from "@/components/RotatingPhoto";

/**
 * Interface para membros da chapa
 */
interface MembroChapa {
  id: string;
  nome: string;
  cargo: string;
  foto?: string;
  fotos?: string[];
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
    cargo: "Candidato a Defensor Público-Geral",
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
    id: "paulo",
    nome: "Dr. Paulo Marquezini",
    cargo: "Primeiro Subdefensor Público-Geral",
    fotos: ["/paulo/paulo1.png", "/paulo/paulo2.jpeg", "/paulo/paulo3.png"],
    trajetoria: [
      "Atuação na condução administrativa da instituição",
      "Experiência em processos internos e organização de equipes",
      "Participação em projetos de modernização institucional",
    ],
    formacao: [
      "Formação em Direito",
      "Pós-graduações na área jurídica",
    ],
  },
  {
    id: "paula",
    nome: "Dra. Paula Ferreira Fernandes",
    cargo: "Segunda Subdefensora Pública-Geral · Defensora do Júri",
    fotos: ["/paula/paula1.jpeg", "/paula/paula2.jpg", "/paula/paula3.jpg", "/paula/paula4.jpg", "/paula/paula5.jpg", "/paula/paula6.jpg"],
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
  {
    id: "luziane",
    nome: "Dra. Maria Luziane Ribeiro de Castro",
    cargo: "Secretária Executiva",
    fotos: ["/luziane/luziane1.jpg", "/luziane/luziane2.jpg", "/luziane/luziane3.jpg"],
    trajetoria: [
      "Gestão administrativa e continuidade institucional",
      "Atuação em processos de governança e planejamento",
      "Integração com equipes técnicas e operacionais",
    ],
    formacao: [
      "Formação em Direito",
      "Pós-graduações na área jurídica",
    ],
  },
];

const Chapa = () => {
  useScrollToTopOnMount();
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    const timer = setTimeout(() => {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
    return () => clearTimeout(timer);
  }, [hash]);

  return (
    <main className="bg-background text-foreground pt-24">
      {/* Membros */}
      <SectionContainer
        background="default"
        padding="lg"
        maxWidth="xl"
      >
        <SectionTitle
          centered
          subtitle="Conheça a equipe que vai liderar a Defensoria Pública"
        >
          Nossa Chapa
        </SectionTitle>
        <div className="space-y-12">
          {MEMBROS_CHAPA.map((membro, index) => (
            <div
              key={membro.id}
              id={membro.id}
              className="scroll-mt-28"
            >
            <Card
              className="p-8 md:p-12 bg-card border border-border/60 rounded-3xl overflow-hidden relative scroll-reveal"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              {/* Barra verde alinhada */}
              <span
                className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-3xl"
                aria-hidden="true"
              />
              <div className="grid grid-cols-1 md:grid-cols-[280px,1fr] gap-8 pl-4">
                {/* Foto */}
                <div className="flex flex-col items-center md:items-start">
                  {membro.fotos?.length ? (
                    <div className="w-full max-w-[280px] aspect-square rounded-2xl overflow-hidden border-4 border-primary/20 shadow-lg">
                      <RotatingPhoto
                        images={membro.fotos}
                        alt={membro.nome}
                        className="w-full h-full"
                        fadeMs={700}
                        shuffle
                      />
                    </div>
                  ) : membro.foto ? (
                    <div className="w-full max-w-[280px] aspect-square rounded-2xl overflow-hidden border-4 border-primary/20 shadow-lg">
                      <LazyImage
                        src={membro.foto}
                        alt={membro.nome}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  ) : (
                    <div className="w-full max-w-[280px] aspect-square rounded-2xl bg-muted flex items-center justify-center border-4 border-primary/20">
                      <User className="w-24 h-24 text-muted-foreground" />
                    </div>
                  )}
                  
                  {/* Cargo */}
                  <div className="mt-6 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold">
                      <Briefcase className="w-4 h-4" />
                      <span className="text-sm">{membro.cargo}</span>
                    </div>
                  </div>
                </div>

                {/* Informações */}
                <div className="space-y-6">
                  {/* Nome */}
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">
                      {membro.nome}
                    </h2>
                  </div>

                  {/* Biografia (parágrafo único quando existir) */}
                  {membro.biografia && (
                    <div className="text-muted-foreground leading-relaxed">
                      <p>{membro.biografia}</p>
                    </div>
                  )}

                  {/* Trajetória */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="w-5 h-5 text-primary" />
                      <h3 className="text-lg font-semibold">Trajetória</h3>
                    </div>
                    <ul className="space-y-2">
                      {membro.trajetoria.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <span className="text-primary font-bold mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Formação */}
                  {membro.formacao && membro.formacao.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <GraduationCap className="w-5 h-5 text-primary" />
                        <h3 className="text-lg font-semibold">Formação</h3>
                      </div>
                      <ul className="space-y-2">
                        {membro.formacao.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-muted-foreground"
                          >
                            <span className="text-primary font-bold mt-1">•</span>
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
                            <Mail className="w-4 h-4" />
                            <span>{membro.contato.email}</span>
                          </div>
                        )}
                        {membro.contato.telefone && (
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Phone className="w-4 h-4" />
                            <span>{membro.contato.telefone}</span>
                          </div>
                        )}
                        {membro.contato.localizacao && (
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="w-4 h-4" />
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
