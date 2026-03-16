/**
 * Apoiadores à candidatura.
 * Fonte única usada por VideoCarousel e qualquer outro componente.
 */
export interface Apoiador {
  id: string;
  nome: string;
  cargoEfetivo: string;
  cargoComissionado: string;
  imageSrc: string;
}

export const apoiadores: Apoiador[] = [
  {
    id: "luziane",
    nome: "Maria Luziane Ribeiro de Castro",
    cargoEfetivo: "Defensora Pública de Classe Especial",
    cargoComissionado: "Defensora Pública-Geral",
    imageSrc: "/rogerio/Apoio/luziane.png",
  },
  {
    id: "cecilia",
    nome: "Maria Cecília Alves da Cunha",
    cargoEfetivo: "Defensora Pública de Classe Especial",
    cargoComissionado: "Segunda Subdefensora Pública-Geral",
    imageSrc: "/rogerio/Apoio/cecilia.png",
  },
  {
    id: "clodoaldo",
    nome: "Clodoaldo Aparecido Gonçalves de Queiroz",
    cargoEfetivo: "Defensor Público de Segunda Instância",
    cargoComissionado: "Secretário Executivo de Administração",
    imageSrc: "/rogerio/Apoio/clodoaldo.png",
  },
  {
    id: "evaldo",
    nome: "Evaldo Duarte de Barros Sobrinho",
    cargoEfetivo: "Advogado",
    cargoComissionado: "Diretor Jurídico",
    imageSrc: "/rogerio/Apoio/evaldo.png",
  },
  {
    id: "vitor",
    nome: "Vitor José Batista Vittorazi",
    cargoEfetivo: "Controlador Interno",
    cargoComissionado:
      "Presidente da Associação dos Servidores Públicos da Defensoria Pública do Estado de Mato Grosso",
    imageSrc: "/rogerio/Apoio/vitor.png",
  },
];
