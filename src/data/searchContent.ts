/**
 * Índice de conteúdo para busca global.
 * Contém texto extraído de todas as páginas para busca full-text.
 * Ignora gráficos e dados numéricos complexos.
 */

export interface SearchContentItem {
  id: string;
  path: string;
  title: string;
  category: string;
  content: string[];
  keywords: string[];
}

export const searchContentIndex: SearchContentItem[] = [
  {
    id: "home",
    path: "/",
    title: "Início",
    category: "Navegação",
    content: [
      "Dr. Rogério Borges Freitas",
      "Candidato a Defensor Público-Geral do Estado de Mato Grosso",
      "Continuidade, responsabilidade e foco na atividade-fim",
      "Biênio 2027–2028",
      "79 comarcas",
      "Defensoria em todas as comarcas de Mato Grosso",
      "Emenda Constitucional nº 80/2014",
      "Premiações e Selos",
      "Selo Qualidade em Transparência",
      "Selo Esperança Garcia",
      "A3P 2024",
    ],
    keywords: [
      "inicio",
      "home",
      "candidato",
      "rogerio",
      "defensor",
      "geral",
      "mt",
      "mato grosso",
      "dpe",
      "dpe-mt",
      "dpmt",
      "comarcas",
      "79",
      "selos",
      "premiações",
      "transparencia",
      "transparência",
      "esperança garcia",
      "a3p",
    ],
  },
  {
    id: "chapa",
    path: "/chapa",
    title: "Nossa Chapa",
    category: "Equipe",
    content: [
      "Dr. Rogério Borges Freitas",
      "Candidato a Defensor Público-Geral",
      "Primeiro Subdefensor Público-Geral",
      "Ordenador de Despesas",
      "Administração Superior",
      "selo diamante de transparência",
      "contratações para que a Defensoria estivesse em todos os núcleos",
      "Cuiabá Mato Grosso",
      "Maria Luziane Ribeiro de Castro",
      "Paulo Marquezini",
      "Paula Ferreira Fernandes",
      "Segunda Subdefensora Pública-Geral",
    ],
    keywords: [
      "chapa",
      "equipe",
      "membros",
      "candidato",
      "rogerio",
      "rogério",
      "borges",
      "freitas",
      "maria",
      "luziane",
      "paulo",
      "marquezini",
      "paula",
      "fernandes",
      "subdefensor",
      "subdefensora",
      "defensora",
      "geral",
      "secretária",
    ],
  },
  {
    id: "propostas",
    path: "/propostas",
    title: "Propostas e Eixos",
    category: "Conteúdo",
    content: [
      "Fortalecimento Institucional",
      "Manutenção da presença da Defensoria em todas as comarcas",
      "Ampliação de núcleos especializados",
      "Modernização da infraestrutura física e tecnológica",
      "Valorização de Membros e Servidores",
      "Investimento contínuo em capacitação profissional",
      "Melhoria das condições de trabalho",
      "Gestão e Transparência",
      "selo diamante de transparência",
      "Inovação e Tecnologia",
      "Digitalização completa dos processos",
      "Qualidade no Atendimento",
      "Planejamento Estratégico",
      "Assessor Jurídico por gabinete",
      "auxílio-saúde",
      "teletrabalho",
      "IA inteligência artificial",
    ],
    keywords: [
      "propostas",
      "plano",
      "gestão",
      "objetivos",
      "fortalecimento",
      "eixos",
      "programa",
      "saúde",
      "tecnologia",
      "ia",
      "inteligência artificial",
      "transparência",
      "capacitação",
    ],
  },
  {
    id: "plano",
    path: "/propostas",
    title: "Plano de Gestão (PDF)",
    category: "Conteúdo",
    content: [
      "Plano de Gestão 2027–2028",
      "Fortalecimento da Atuação Finalística e Estrutural dos Gabinetes",
      "Segundo cargo de Assessor Jurídico por gabinete",
      "Valorização do estágio de graduação e pós-graduação",
      "Gestão de Pessoas, Saúde e Qualidade de Vida",
      "Fortalecimento Institucional e Transparência",
      "Inovação e Modernização",
      "Atendimento e Acesso à Justiça",
      "Baixar Plano de Gestão",
    ],
    keywords: [
      "plano",
      "pdf",
      "gestão",
      "eixos",
      "2027",
      "2028",
      "gabinetes",
      "baixar",
      "documento",
    ],
  },
  {
    id: "historia",
    path: "/historia-na-defensoria",
    title: "História na Defensoria",
    category: "Trajetória",
    content: [
      "Ingresso na Defensoria Pública",
      "Atuação em Comarcas do Interior",
      "Coordenação de Núcleo Especializado",
      "Participação em Comissões",
      "Corregedor-Geral",
      "Primeiro Subdefensor Público-Geral",
      "Ordenador de Despesas",
      "Candidatura a Defensor Público-Geral",
      "20 anos na Defensoria Pública",
    ],
    keywords: [
      "história",
      "trajetória",
      "carreira",
      "comarcas",
      "interior",
      "corregedor",
      "subdefensor",
      "ingresso",
      "defensoria",
    ],
  },
  {
    id: "conselho",
    path: "/atuacao-no-conselho",
    title: "Atuação no Conselho",
    category: "Trajetória",
    content: [
      "Atuação no Conselho",
      "Conselho Superior da Defensoria",
      "decisões colegiadas",
      "deliberações",
      "representação institucional",
    ],
    keywords: [
      "conselho",
      "superior",
      "decisões",
      "deliberações",
      "colegiado",
      "conselho superior",
    ],
  },
  {
    id: "lattes",
    path: "/lattes",
    title: "Currículo Lattes",
    category: "Informações",
    content: [
      "Currículo Lattes",
      "publicações acadêmicas",
      "artigos",
      "pesquisa científica",
    ],
    keywords: ["lattes", "currículo", "publicações", "artigos", "acadêmico", "pesquisa"],
  },
  {
    id: "noticias",
    path: "/noticias",
    title: "Notícias",
    category: "Navegação",
    content: [
      "Cobertura de imprensa",
      "matérias sobre a atuação",
      "doutorado",
      "Selo Diamante de Transparência",
      "expansão para todas as comarcas",
      "capacitação de defensores",
    ],
    keywords: [
      "notícias",
      "noticias",
      "imprensa",
      "matérias",
      "novidades",
      "atualizações",
    ],
  },
  {
    id: "quantitativo",
    path: "/quantitativo",
    title: "Dados Quantitativos",
    category: "Conteúdo",
    content: [
      "Evolução quantitativa da Defensoria",
      "crescimento do quadro de defensores",
      "analistas e técnicos",
      "evolução salarial",
      "gráficos",
      "dados históricos 2006 a 2025",
    ],
    keywords: [
      "quantitativo",
      "dados",
      "gráficos",
      "crescimento",
      "evolução",
      "cargos",
      "defensores",
      "remuneração",
      "salário",
    ],
  },
];

/**
 * Busca conteúdo dentro do índice.
 * Case-insensitive, busca em título, conteúdo e keywords.
 */
export const searchInContent = (query: string): SearchContentItem[] => {
  if (!query.trim()) return searchContentIndex;

  const queryLower = query.toLowerCase().trim();

  return searchContentIndex.filter((item) => {
    if (item.title.toLowerCase().includes(queryLower)) return true;
    if (item.keywords.some((kw) => kw.toLowerCase().includes(queryLower)))
      return true;
    if (item.content.some((text) => text.toLowerCase().includes(queryLower)))
      return true;
    return false;
  });
};
