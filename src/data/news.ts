// src/data/news.ts

export interface NewsImage {
  src: string;       // caminho em /public
  alt: string;       // texto alternativo
  caption?: string;  // legenda opcional
}

export interface NewsItem {
  slug: string;
  date: string;        // ISO ou qualquer formato interno
  displayDate: string; // Formato para exibição, ex: 21/02/2025
  title: string;
  summary: string;
  image: string;       // imagem de capa (usada nas listagens / cards)
  images?: NewsImage[]; // imagens extras para a página de detalhe
  author?: string;
  content: string[];   // parágrafos da notícia
}

export const newsItems: NewsItem[] = [
  {
    slug: "primeiro-subdefensor-conquista-doutorado",
    date: "2025-02-21",
    displayDate: "21/02/2025",
    title:
      "Primeiro subdefensor-público de MT conquista doutorado com tese sobre proteção de dados de vulneráveis",
    summary:
      "O estudo coloca em pauta a proteção dos direitos da personalidade em um cenário cada vez mais digitalizado, com foco na atuação da Defensoria Pública.",
    image: "/doutorado.png",
    author: "Djhuliana Mundel",
    images: [
      {
        src: "/perfil.jpg",
        alt: "Subdefensor público-geral Rogério Borges Freitas",
        caption: "Rogério Borges Freitas, subdefensor público-geral do Estado de Mato Grosso."
      },
      {
        src: "/doutorado.png",
        alt: "Registro da defesa de doutorado de Rogério Borges Freitas",
        caption: "Momento da titulação de doutorado em Ciências Jurídicas."
      }
    ],
    content: [
      "A Defensoria Pública do Estado de Mato Grosso alcançou um marco importante ao passar a contar com seu primeiro membro doutor. O subdefensor público-geral, Rogério Borges Freitas, concluiu o doutorado em Ciências Jurídicas com uma pesquisa voltada à proteção de dados sensíveis de cidadãos em situação de vulnerabilidade. A conquista foi registrada em 21 de fevereiro de 2025, às 17h45.",

      "A tese, defendida no Programa de Pós-Graduação Stricto Sensu da UniCesumar, analisa como a implementação de serviços de inteligência de Estado pode contribuir para a segurança e a privacidade dos dados das pessoas que procuram a Defensoria Pública. O trabalho discute a proteção dos direitos da personalidade em um contexto de sociedade da informação, no qual a produção massiva de dados desafia permanentemente a ideia de privacidade.",

      "Segundo Rogério Borges Freitas, o tema do doutorado é um desdobramento direto da pesquisa desenvolvida no mestrado, que tratou de litígios estratégicos e processos estruturais. Ao estudar as etapas desse tipo de processo, ele identificou a necessidade de obter informações confiáveis para embasar decisões e, a partir daí, aprofundou-se na atividade de inteligência de Estado, área dedicada justamente ao tratamento qualificado de informações sensíveis.",

      "A pesquisa também destaca o pioneirismo da Defensoria Pública do Estado de Mato Grosso, primeira instituição do gênero no Brasil a estruturar uma unidade de inteligência e segurança institucional. Esse contexto motivou o autor a investigar como essa estrutura poderia ser orientada para a proteção de dados dos usuários da assistência jurídica gratuita, aliando segurança informacional e respeito aos direitos fundamentais.",

      "No trabalho, a segurança documental aparece como ponto central. A tese ressalta que a produção, classificação, circulação, arquivamento e destruição de documentos precisam seguir normas claras, em especial quando envolvem dados sensíveis. Esses registros podem ser alvo de espionagem ou uso indevido, o que torna indispensável a adoção de protocolos rígidos de proteção, semelhantes aos aplicados em outros órgãos de inteligência de Estado.",

      "O estudo também enfatiza a relação de confiança entre o cidadão e o Estado. Para o autor, ao utilizar práticas de inteligência voltadas à proteção dos dados de seus assistidos, a Defensoria Pública não apenas preserva o direito à privacidade, como também melhora a qualidade das decisões institucionais e o planejamento de políticas públicas voltadas à população vulnerável.",

      "Rogério observa que sistemas como o Solar, que reúne grande volume de informações pessoais — endereço, histórico familiar, detalhes de conflitos e situações extremamente sensíveis — exigem cuidados redobrados. A pesquisa conclui que esses dados podem ser utilizados para produção de conhecimento e para orientar decisões estratégicas, desde que exista um conjunto de balizas normativas e éticas bem definidas.",

      "Por isso, a tese propõe diretrizes para o tratamento responsável dessas informações e sugere, inclusive, a elaboração de um projeto de lei específico para regulamentar a atividade de inteligência no âmbito da Defensoria Pública. A ideia é garantir que a instituição possa usar os dados de forma segura e legítima, protegendo os usuários e fortalecendo a atuação em defesa dos seus direitos."
    ]
  },
  {
    slug: "selo-diamante-transparencia-dpe-mt",
    date: "2025-02-10",
    displayDate: "10/02/2025",
    title: "Selo Diamante reconhece transparência da DPE-MT",
    summary:
      "Defensoria Pública de Mato Grosso recebe a mais alta certificação em transparência institucional.",
    image: "/noticias/certificado_diamante.png",
    images: [
      {
        src: "/noticias/certificado_diamante.png",
        alt: "Certificado do Selo Diamante de Transparência",
        caption: "Reconhecimento nacional pela excelência em transparência pública."
      }
    ],
    content: [
      "A Defensoria Pública do Estado de Mato Grosso foi agraciada com o Selo Diamante de Transparência, reconhecimento concedido a órgãos que cumprem com excelência os requisitos de publicidade e acesso às informações.",
      "A certificação reflete o esforço de toda a gestão em implantar rotinas de controle, portais acessíveis e canais claros de comunicação com a sociedade.",
      "O resultado demonstra que é possível conciliar eficiência administrativa, responsabilidade com recursos públicos e respeito ao cidadão."
    ]
  },
  {
    slug: "expansao-para-todas-as-comarcas-e-concluida",
    date: "2025-01-05",
    displayDate: "05/01/2025",
    title: "Expansão para todas as comarcas é concluída",
    summary:
      "Defensoria Pública passa a ter presença em todas as comarcas do Estado de Mato Grosso.",
    image: "/noticias/expansao-comarcas.jpg",
    images: [
      {
        src: "/noticias/expansao-comarcas.jpg",
        alt: "Mapa ilustrando a presença da Defensoria em todas as comarcas",
        caption: "Defensoria Pública presente em 100% das comarcas do Estado."
      }
    ],
    content: [
      "Foi concluído o processo de expansão da Defensoria Pública para todas as comarcas do Estado de Mato Grosso, cumprindo a previsão constitucional de atendimento em todo o território.",
      "A interiorização do serviço garante que mais pessoas em situação de vulnerabilidade tenham acesso à orientação jurídica, à defesa de direitos e à solução de conflitos.",
      "A iniciativa contou com planejamento de gestão, estruturação de equipes e investimentos em tecnologia para permitir o atendimento remoto e presencial."
    ]
  },
  {
    slug: "curso-de-capacitacao-reune-defensores-de-todo-mt",
    date: "2024-12-20",
    displayDate: "20/12/2024",
    title: "Curso de capacitação reúne defensores de todo MT",
    summary:
      "Formação continuada reforça a atuação técnica da Defensoria em temas sensíveis e atuais.",
    image: "/noticias/capacitacao-defensores.jpg",
    images: [
      {
        src: "/noticias/capacitacao-defensores.jpg",
        alt: "Defensores públicos reunidos em curso de capacitação",
        caption: "Capacitação permanente como eixo estratégico da gestão."
      }
    ],
    content: [
      "Defensores públicos de diversas áreas de atuação participaram de curso de capacitação promovido pela Defensoria Pública do Estado de Mato Grosso.",
      "O programa abordou temas como precedentes judiciais, direitos fundamentais, proteção de dados e estratégias de litigância em defesa de grupos vulneráveis.",
      "A gestão aposta na formação continuada como instrumento central para qualificar a prestação do serviço e fortalecer a instituição."
    ]
  },
  {
    slug: "dialogo-com-governo-garante-novos-recursos",
    date: "2024-11-15",
    displayDate: "15/11/2024",
    title: "Diálogo com governo garante novos recursos",
    summary:
      "Reuniões institucionais asseguram investimentos em estrutura, tecnologia e pessoal.",
    image: "/noticias/dialogo-governo.jpg",
    images: [
      {
        src: "/noticias/dialogo-governo.jpg",
        alt: "Reunião institucional entre Defensoria Pública e Governo do Estado",
        caption: "Diálogo institucional garantindo investimentos estratégicos."
      }
    ],
    content: [
      "Por meio de diálogo institucional permanente com o Governo do Estado, a Defensoria Pública conquistou a ampliação de recursos financeiros para investimentos em estrutura física e tecnológica.",
      "Os novos aportes permitirão melhorias em unidades de atendimento, aquisição de equipamentos e fortalecimento das equipes.",
      "A gestão reforça que a negociação responsável com outros poderes é essencial para garantir autonomia funcional e condições adequadas de trabalho."
    ]
  },
  {
    slug: "indicadores-de-gestao-sao-implementados",
    date: "2024-10-10",
    displayDate: "10/10/2024",
    title: "Indicadores de gestão são implementados",
    summary:
      "Ferramentas de monitoramento ajudam a medir desempenho e aprimorar a atuação institucional.",
    image: "/noticias/indicadores-gestao.jpg",
    images: [
      {
        src: "/noticias/indicadores-gestao.jpg",
        alt: "Gráficos e indicadores de desempenho institucional",
        caption: "Gestão por resultados apoiada em dados e indicadores."
      }
    ],
    content: [
      "A Defensoria Pública implantou um novo sistema de indicadores de gestão, desenvolvido com assessoria especializada, para acompanhar resultados e otimizar processos internos.",
      "Os indicadores permitem identificar gargalos, planejar ações com base em dados e prestar contas de forma mais clara à sociedade.",
      "Com isso, a instituição avança na cultura de gestão por resultados, aliando transparência, eficiência e foco na defesa dos direitos dos assistidos."
    ]
  }
];

export const getNewsBySlug = (slug: string) =>
  newsItems.find((item) => item.slug === slug);
