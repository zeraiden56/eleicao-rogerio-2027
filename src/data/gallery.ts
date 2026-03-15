// src/data/gallery.ts
export type GalleryItem = {
  src: string;
  alt: string;
  description: string;
};

export const galleryItems: GalleryItem[] = [
  {
    src: "/1.jpeg",
    alt: "Lançamento de programa institucional",
    description:
      "Registro da participação do Dr. Rogério em lançamento de programa voltado ao fortalecimento de políticas públicas municipais.",
  },
  {
    src: "/2.jpg",
    alt: "Entrega de equipamentos e viaturas",
    description:
      "Cerimônia de entrega de viaturas e equipamentos, marcando a expansão da estrutura da Defensoria Pública no interior do Estado.",
  },
  {
    src: "/3.jpeg",
    alt: "Evento sobre gestão e inovação",
    description:
      "Momento de fala do Dr. Rogério em painel sobre inovação, tecnologia e gestão pública voltada ao cidadão.",
  },
  {
    src: "/4.jpeg",
    alt: "Atuação em plenário",
    description:
      "Participação em sessão solene com foco no fortalecimento das instituições de justiça e defesa de direitos.",
  },
  {
    src: "/5.jpeg",
    alt: "Capacitação de servidores e membros",
    description:
      "Aula ministrada em curso de capacitação interna, reforçando a importância da formação continuada para a Defensoria.",
  },
  {
    src: "/6.jpeg",
    alt: "Encontro com autoridades e parceiros",
    description:
      "Reunião com representantes de outros poderes e órgãos para alinhar ações conjuntas em prol da população vulnerável.",
  },
  {
    src: "/7.jpeg",
    alt: "Registro com equipe de trabalho",
    description:
      "Foto com equipe técnica responsável pela implementação de projetos estratégicos da Defensoria Pública.",
  },
  {
    src: "/9.jpg",
    alt: "Atividade com a equipe em unidade de atendimento",
    description:
      "Visita a unidade de atendimento, acompanhando de perto a rotina de trabalho e o contato direto com os assistidos.",
  },
  {
    src: "/10.jpg",
    alt: "Evento institucional com autoridades locais",
    description:
      "Participação em evento institucional com autoridades locais, reforçando o diálogo e a cooperação interinstitucional.",
  },
  {
    src: "/11.jpeg",
    alt: "Encontro formal com representantes da sociedade",
    description:
      "Reunião com representantes da sociedade civil para ouvir demandas e construir soluções coletivas.",
  },
  {
    src: "/doutorado.png",
    alt: "Defesa de tese de doutorado",
    description:
      "Momento da defesa da tese de doutorado sobre proteção de dados sensíveis de pessoas em situação de vulnerabilidade.",
  },
];
