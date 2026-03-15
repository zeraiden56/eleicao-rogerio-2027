/**
 * Curiosidades sobre a campanha e membros da chapa
 * Exibidas durante o loading como easter egg
 */

export interface Curiosidade {
  id: string;
  membro?: string; // Se não especificado, é sobre o Rogério
  texto: string;
}

export const curiosidades: Curiosidade[] = [
  {
    id: "rogerio-1",
    membro: "Rogério",
    texto: "Rogério está na Administração Superior há vários anos, atuando como ordenador de despesas!",
  },
  {
    id: "rogerio-2",
    membro: "Rogério",
    texto: "Rogério fez parte da equipe que elevou a Defensoria Pública ao patamar de selo diamante de transparência no ano de 2025!",
  },
  {
    id: "rogerio-3",
    membro: "Rogério",
    texto: "Rogério está na equipe e participou ativamente das contratações para que a Defensoria estivesse em todos os núcleos até o prazo estabelecido na constituição federal!",
  },
  // TODO: Adicionar curiosidades sobre outros membros da chapa
  // Exemplo:
  // {
  //   id: "membro2-1",
  //   membro: "Nome do Membro",
  //   texto: "Curiosidade sobre o membro...",
  // },
];

/**
 * Retorna uma curiosidade aleatória
 */
export const getRandomCuriosidade = (): Curiosidade => {
  return curiosidades[Math.floor(Math.random() * curiosidades.length)];
};
