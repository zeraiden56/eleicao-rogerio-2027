/**
 * Depoimentos de apoio à candidatura.
 * Fonte única usada por TestimonialCarousel e qualquer outro componente.
 */
export interface Depoimento {
  id: number;
  nome: string;
  cargo: string;
  texto: string;
}

export const depoimentos: Depoimento[] = [
  {
    id: 1,
    nome: "Defensora Pública – Núcleo de Família",
    cargo: "Colega de atuação",
    texto:
      "O Dr. Rogério sempre se destacou pela disponibilidade em auxiliar os colegas, pela seriedade com que trata cada caso e pelo respeito às pessoas assistidas.",
  },
  {
    id: 2,
    nome: "Servidor da DPE-MT",
    cargo: "Equipe administrativa",
    texto:
      "Na gestão, demonstra atenção às condições de trabalho e à valorização da equipe, sempre aberto ao diálogo e à construção conjunta de soluções.",
  },
  {
    id: 3,
    nome: "Defensor Público do interior",
    cargo: "Atuação em comarca do interior",
    texto:
      "A interiorização da Defensoria só foi possível com planejamento e apoio da gestão. Rogério esteve presente, acompanhando as dificuldades das comarcas.",
  },
  {
    id: 4,
    nome: "Colaborador terceirizado",
    cargo: "Apoio operacional",
    texto:
      "Mesmo não sendo servidor efetivo, sempre fui tratado com respeito. Isso faz diferença no clima institucional e no resultado do trabalho.",
  },
  {
    id: 5,
    nome: "Estagiária de Direito",
    cargo: "Estágio na Defensoria",
    texto:
      "O contato com a gestão mostrou que é possível unir técnica, sensibilidade com o público e organização administrativa em um mesmo projeto institucional.",
  },
];
