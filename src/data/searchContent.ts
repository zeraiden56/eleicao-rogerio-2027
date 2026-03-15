/**
 * Índice de conteúdo para busca global
 * Contém texto extraído de todas as páginas para busca full-text
 * Ignora gráficos e dados numéricos complexos
 */

export interface SearchContentItem {
  id: string;
  path: string;
  title: string;
  category: string;
  content: string[]; // Array de strings com conteúdo indexável
  keywords: string[];
}

export const searchContentIndex: SearchContentItem[] = [
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
    keywords: ["chapa", "equipe", "membros", "candidato", "rogerio", "maria", "paulo", "paula"],
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
    ],
    keywords: ["propostas", "plano", "gestão", "objetivos", "fortalecimento"],
  },
  {
    id: "plano",
    path: "/propostas",
    title: "Propostas e Plano de Gestão",
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
    ],
    keywords: ["plano", "gestão", "eixos", "2027", "2028", "gabinetes"],
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
    ],
    keywords: ["história", "trajetória", "carreira", "comarcas"],
  },
  {
    id: "gestoes",
    path: "/atuacao-nas-gestoes",
    title: "Atuação nas Gestões",
    category: "Trajetória",
    content: [
      "Atuação nas Gestões",
      "Primeiro Subdefensor Público-Geral",
      "Ordenador de Despesas",
      "resultados de gestão",
    ],
    keywords: ["gestões", "atuação", "resultados"],
  },
  {
    id: "conselho",
    path: "/atuacao-no-conselho",
    title: "Atuação no Conselho",
    category: "Trajetória",
    content: [
      "Atuação no Conselho",
      "decisões",
      "deliberações",
    ],
    keywords: ["conselho", "decisões", "deliberações"],
  },
  {
    id: "formacao",
    path: "/formacao",
    title: "Formação",
    category: "Informações",
    content: [
      "Formação acadêmica do Dr. Rogério Borges Freitas",
      "Doutorado em Ciências Jurídicas",
      "Mestrado em Ciências Jurídicas",
      "Pós-graduação",
      "Graduação em Ciências Jurídicas",
      "cursos",
      "trajetória acadêmica",
    ],
    keywords: ["formação", "acadêmica", "cursos", "rogerio", "trajetória", "doutorado", "mestrado"],
  },
];

/**
 * Busca conteúdo dentro do índice
 * Case-insensitive, busca em título, conteúdo e keywords
 */
export const searchInContent = (query: string): SearchContentItem[] => {
  if (!query.trim()) return searchContentIndex;

  const queryLower = query.toLowerCase().trim();
  
  return searchContentIndex.filter((item) => {
    // Busca no título
    if (item.title.toLowerCase().includes(queryLower)) return true;
    
    // Busca nas keywords
    if (item.keywords.some((kw) => kw.toLowerCase().includes(queryLower))) return true;
    
    // Busca no conteúdo (array de strings)
    if (item.content.some((text) => text.toLowerCase().includes(queryLower))) return true;
    
    return false;
  });
};
