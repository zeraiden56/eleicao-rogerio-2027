/**
 * Dados da equipe de gestão / chapa.
 * Fonte única usada por EquipeSection e Chapa page.
 */
export interface MembroEquipe {
  nome: string;
  /** Cargo proposto na candidatura (ex: "Primeira Subdefensora Público-Geral") */
  cargoNaChapa: string;
  /** Cargo efetivo atual na Defensoria */
  cargoAtual: string;
  classe: string;
  ingresso: number;
  resumo: string;
  /** Foto única a ser usada (sem rotação) */
  foto: string;
  /** ID usado na página Chapa para link âncora (/chapa#id) */
  chapaId: string;
}

export const equipe: MembroEquipe[] = [
  {
    nome: "Dra. Maria Luziane Ribeiro de Castro",
    cargoNaChapa: "Secretária Executiva",
    cargoAtual: "Defensora Pública-Geral (2023–2026)",
    classe: "Classe Especial",
    ingresso: 2004,
    resumo:
      "Primeira defensora de primeira instância a comandar a DPE-MT e segunda mulher a chefiar a instituição. Eleita com 85% dos votos em 2022 e reeleita em 2024 com 190 votos.",
    foto: "/luziane/luziane3.jpg",
    chapaId: "luziane",
  },
  {
    nome: "Dr. Paulo Roberto da Silva Marquezini",
    cargoNaChapa: "Primeiro Subdefensor Público-Geral",
    cargoAtual: "Defensor Público",
    classe: "Classe Especial",
    ingresso: 2010,
    resumo:
      "Diretor da Escola Superior da Defensoria (2023–2025), membro do Conselho Superior em dois biênios e representante da DPE-MT no GAETS. Mestre em Direito Processual pela USP.",
    foto: "/paulo/paulo2.jpeg",
    chapaId: "paulo",
  },
  {
    nome: "Dra. Paula Ferreira Fernandes",
    cargoNaChapa: "Segunda Subdefensora Pública-Geral",
    cargoAtual: "Defensora Pública · Defensora do Júri",
    classe: "Classe Especial",
    ingresso: 2010,
    resumo:
      "Atuação na linha de frente da atividade-fim, com compromisso com a valorização da carreira e a defesa dos direitos fundamentais.",
    foto: "/paula/paula5.jpg",
    chapaId: "paula",
  },
];
