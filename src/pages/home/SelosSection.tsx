import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Selo {
  src: string;
  alt: string;
  nome: string;
  resumo: string;
  descricao: string;
}

const selos: Selo[] = [
  {
    src: "/selos/transparencia2023.png",
    alt: "Selo Qualidade em Transparência Ouro 2023",
    nome: "Selo Qualidade em Transparência Ouro 2023",
    resumo: "90,40% de transparência — 3ª melhor pontuação do estado, entregue pela Atricon e pelo TCE-MT.",
    descricao:
      "O Selo Ouro de Qualidade em Transparência Pública é concedido pelo Programa Nacional de Transparência Pública (PNTP), coordenado pela Atricon (Associação dos Membros dos Tribunais de Contas do Brasil), a entidades que atingem entre 85% e 94% no índice de transparência e cumprem 100% dos critérios essenciais.\n\nEm novembro de 2023, a Defensoria Pública de MT recebeu o Selo Ouro no 2º ciclo do PNTP, entregue pelo TCE-MT em solenidade no dia 22 de novembro. O Portal da DPEMT atingiu 90,40% de transparência — a 3ª melhor pontuação de MT, atrás apenas do TCE (95,31%) e do Judiciário (92,53%). Dos 288 portais avaliados no estado, apenas 45 foram certificados: 5 Diamante, 17 Ouro e 23 Prata.\n\nO Dr. Rogério Borges Freitas, então 1º Subdefensor Público-Geral, representou a instituição na cerimônia e afirmou: \"O selo reflete a gestão do órgão sob a liderança da defensora Luziane, que não mede esforços para que os atos da Defensoria sejam transparentes. Buscamos garantir a melhor fiscalização por parte do cidadão sobre o uso que fazemos do dinheiro público.\"\n\nUm salto expressivo: em 2022, a DPMT registrava apenas 64,54% no mesmo programa.",
  },
  {
    src: "/selos/transparencia2024.png",
    alt: "Selo Qualidade em Transparência Diamante 2024",
    nome: "Selo Qualidade em Transparência Diamante 2024",
    resumo: "97,48% de transparência — 1º lugar em MT e primeira conquista do nível Diamante pela Defensoria.",
    descricao:
      "O Selo Diamante é o mais alto nível do Programa Nacional de Transparência Pública (PNTP/Atricon), concedido a portais que superam 95% no índice de transparência.\n\nEm 2024, a Defensoria Pública de MT conquistou pela primeira vez o Diamante, atingindo 97,48% — o melhor resultado entre todos os poderes e órgãos do estado. A evolução é notável: saindo de 64,54% em 2022, passando por 90,40% em 2023 (Ouro), até chegar ao topo com 97,48%.\n\nO resultado consolidou a DPMT como referência estadual em transparência e accountability, confirmando que a cultura de abertura de dados — inaugurada com a chegada da equipe de gestão — é estrutural, não episódica.",
  },
  {
    src: "/selos/a3p-2024.png",
    alt: "Selo A3P 2024",
    nome: "Selo A3P 2024",
    resumo: "Reconhecimento federal pela gestão ambiental sustentável na administração pública.",
    descricao:
      "O Selo A3P (Agenda Ambiental na Administração Pública) é concedido pelo Ministério do Meio Ambiente e Mudança do Clima às instituições públicas que adotam práticas sustentáveis em sua rotina administrativa. Em 2024, a Defensoria Pública de MT foi reconhecida por iniciativas como redução do consumo de papel e energia, destinação adequada de resíduos, compras públicas sustentáveis e sensibilização de servidores. A adesão à A3P reforça o compromisso da instituição com a responsabilidade socioambiental e com a construção de uma administração pública mais eficiente e consciente.",
  },
  {
    src: "/selos/transparencia2025.png",
    alt: "Selo Qualidade em Transparência Diamante 2025",
    nome: "Selo Qualidade em Transparência Diamante 2025",
    resumo: "97,27% — 1º lugar em MT pelo 2º ano seguido, acima da média nacional de 91,71%.",
    descricao:
      "Em setembro de 2025, durante o IV Congresso Internacional dos Tribunais de Contas (IV CITC) em Florianópolis, a Defensoria Pública de MT recebeu o Selo Diamante pelo segundo ano consecutivo — atingindo 97,27% de transparência e se mantendo como o órgão mais transparente do estado.\n\nA DPEMT superou todos os demais poderes: Ministério Público (97,12%), Tribunal de Contas (95,24%), Poder Judiciário (95,06%), Executivo (75,53%) e Legislativo (70,13%). Também ficou acima da média nacional entre instituições certificadas (91,71%).\n\nNo universo do programa, foram avaliados mais de 10 mil portais em todo o Brasil; apenas 2.912 (28,91%) foram certificados, e somente 998 receberam o nível Diamante — o mais alto. A evolução da DPMT no programa: 71,11% (2022) → 90,40% (2023, Ouro) → 97,48% (2024, Diamante) → 97,27% (2025, Diamante).\n\n\"Esse reconhecimento confirma que estamos cumprindo, com rigor e responsabilidade, as exigências da Lei de Acesso à Informação. É um trabalho silencioso, mas essencial para que a Defensoria seja reconhecida nacionalmente pela sua integridade\", afirmou o secretário executivo Clodoaldo Queiroz.",
  },
  {
    src: "/selos/esperanca-garcia.png",
    alt: "Selo Esperança Garcia 2025",
    nome: "Selo Esperança Garcia 2025",
    resumo: "Quarto reconhecimento consecutivo pela luta antirracista e pela justiça social.",
    descricao:
      "Pelo quarto ano consecutivo, a Defensoria Pública de MT recebe o Selo Esperança Garcia, concedido pelo Conselho Nacional de Ouvidorias Externas das Defensorias (CNODP) em reconhecimento a contribuições relevantes à luta antirracista. Em 2025, três práticas são premiadas: o programa \"Defensoria Até Você – Edição Quilombola\", o Seminário sobre luta antirracista e valorização de povos negros e indígenas, e a \"Defensoria Até Você – Edição Quilombola e Indígena\".\n\nO programa \"Defensoria Até Você\" levou mais de 6 mil atendimentos às comunidades indígenas em seus dois primeiros anos. A primeira edição Quilombola, em Vila Bela da Santíssima Trindade, realizou 2.543 atendimentos em três dias, incluindo orientações jurídicas, emissão de documentos e apoio psicossocial.\n\nEsperança Garcia foi uma mulher negra escravizada no Piauí do século XVIII que, em 1770, redigiu uma carta denunciando maus-tratos — ato reconhecido como o primeiro habeas corpus da história brasileira. Em 2017, foi declarada a primeira advogada do Piauí, tornando-se símbolo de resistência e luta por direitos.",
  },
];

const SelosSection = () => {
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const fechar = useCallback(() => setModalIndex(null), []);
  const anterior = useCallback(
    () => setModalIndex((i) => (i !== null ? (i - 1 + selos.length) % selos.length : null)),
    []
  );
  const proximo = useCallback(
    () => setModalIndex((i) => (i !== null ? (i + 1) % selos.length : null)),
    []
  );

  // Fechar com Escape e navegar com setas
  useEffect(() => {
    if (modalIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") fechar();
      if (e.key === "ArrowLeft") anterior();
      if (e.key === "ArrowRight") proximo();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [modalIndex, fechar, anterior, proximo]);

  // Bloquear scroll do body quando modal aberto
  useEffect(() => {
    document.body.style.overflow = modalIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modalIndex]);

  const selo = modalIndex !== null ? selos[modalIndex] : null;

  return (
    <>
      <section className="bg-primary py-16 relative">
        {/* Textura */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "var(--gradient-primary-textured)" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "var(--texture-grain-primary)", backgroundSize: "60px 60px" }}
          aria-hidden="true"
        />

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          {/* Cabeçalho */}
          <div className="text-center mb-12 reveal-up">
            <p className="text-sm font-bold uppercase tracking-widest text-primary-foreground/70 mb-2">
              Reconhecimento
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground">
              Premiações e Selos
            </h2>
            <p className="text-primary-foreground/75 mt-2 text-sm md:text-base max-w-xl mx-auto">
              Conquistas que refletem o compromisso com a transparência,
              a sustentabilidade e a justiça social.
            </p>
          </div>

          {/* Grid de selos */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {selos.map((s, i) => (
              <button
                key={s.src}
                onClick={() => setModalIndex(i)}
                aria-label={`Ver detalhes: ${s.nome}`}
                className="group flex flex-col items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-4 focus-visible:ring-offset-primary rounded-xl"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {/* Container de tamanho fixo para o hover não mover vizinhos */}
                <div className="relative flex items-center justify-center" style={{ width: 160, height: 160 }}>
                  <img
                    src={s.src}
                    alt={s.alt}
                    className="max-w-full max-h-full object-contain drop-shadow-lg transition-transform duration-300 ease-out group-hover:scale-110"
                    loading="eager"
                    draggable={false}
                    style={{ width: "auto", height: "auto", maxWidth: 160, maxHeight: 160 }}
                  />
                </div>
                <span className="text-xs font-semibold text-primary-foreground/80 text-center max-w-[140px] leading-snug group-hover:text-primary-foreground transition-colors">
                  {s.nome}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal via portal — garante z-index e position:fixed corretos fora de qualquer stacking context pai */}
      {modalIndex !== null && selo && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={selo.nome}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={fechar}
            aria-hidden="true"
          />

          {/* Painel */}
          <div className="relative z-10 w-full max-w-3xl bg-card rounded-3xl border border-border/60 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            {/* Barra verde top */}
            <div className="h-1 bg-primary w-full flex-shrink-0" />

            {/* Conteúdo */}
            <div className="flex flex-col md:flex-row flex-1 min-h-0 overflow-hidden">
              {/* Coluna da imagem */}
              <div className="flex-shrink-0 flex items-center justify-center bg-muted/40 p-8 md:w-56 md:min-h-[320px]">
                <img
                  src={selo.src}
                  alt={selo.alt}
                  className="max-w-full max-h-40 md:max-h-48 w-auto h-auto object-contain drop-shadow-lg"
                  draggable={false}
                />
              </div>

              {/* Coluna de conteúdo */}
              <div className="flex-1 flex flex-col p-6 md:p-8 min-h-0 overflow-y-auto">
                {/* Cabeçalho do modal */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-primary mb-1">
                      {modalIndex + 1} de {selos.length}
                    </p>
                    <h2 className="text-xl md:text-2xl font-bold leading-tight">
                      {selo.nome}
                    </h2>
                  </div>
                  <button
                    onClick={fechar}
                    aria-label="Fechar"
                    className="flex-shrink-0 w-9 h-9 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors mt-0.5"
                  >
                    <X className="w-4 h-4 text-foreground" />
                  </button>
                </div>

                <hr className="border-border/60 mb-4" />

                <p className="text-sm font-semibold text-primary mb-3">
                  {selo.resumo}
                </p>

                <div className="text-sm text-muted-foreground leading-relaxed space-y-3 flex-1">
                  {selo.descricao.split("\n\n").map((paragrafo, pi) => (
                    <p key={pi}>{paragrafo}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Rodapé com navegação */}
            <div className="flex-shrink-0 flex items-center justify-between gap-4 px-6 py-4 border-t border-border/60 bg-muted/20">
              <Button
                variant="outline"
                size="sm"
                onClick={anterior}
                className="flex items-center gap-1.5"
              >
                <ChevronLeft className="w-4 h-4" />
                Anterior
              </Button>

              {/* Indicadores */}
              <div className="flex items-center gap-1.5">
                {selos.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setModalIndex(idx)}
                    aria-label={`Ver ${selos[idx].nome}`}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      idx === modalIndex
                        ? "bg-primary scale-125"
                        : "bg-border hover:bg-primary/40"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={proximo}
                className="flex items-center gap-1.5"
              >
                Próximo
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default SelosSection;
