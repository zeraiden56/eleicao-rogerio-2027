// src/pages/AtuacaoNoConselho.tsx
import { useMemo, useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import { useScrollToTopOnMount } from "@/hooks/useScrollToTopOnMount";
import SectionContainer from "@/components/SectionContainer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Gavel, Search } from "lucide-react";

type CouncilDecision = {
  id: string;
  year: number;
  session: string;
  type: "Resolução" | "Deliberação" | "Parecer" | "Outro";
  number: string;
  title: string;
  summary: string;
  keywords: string[];
  rapporteur?: string;
  link?: string; // futuro: PDF / página oficial
};

// TODO: depois trocar isso por dados vindos de um JSON / API
const decisionsMock: CouncilDecision[] = [
  {
    id: "2024-RES-01",
    year: 2024,
    session: "Sessão Ordinária de 15/03/2024",
    type: "Resolução",
    number: "01/2024",
    title: "Regulamentação de fluxos para proteção de dados sensíveis no âmbito da Defensoria",
    summary:
      "Deliberação do Conselho Superior que disciplina diretrizes internas de segurança da informação e tratamento de dados sensíveis dos assistidos.",
    keywords: ["proteção de dados", "LGPD", "segurança da informação"],
    rapporteur: "Dr. Rogério Borges Freitas",
  },
  {
    id: "2023-DEL-07",
    year: 2023,
    session: "Sessão Extraordinária de 22/11/2023",
    type: "Deliberação",
    number: "07/2023",
    title: "Ampliação de núcleos especializados em defesa coletiva",
    summary:
      "Deliberação que autoriza a expansão de núcleos de atuação coletiva em áreas estratégicas, com prioridade para direitos humanos e políticas públicas.",
    keywords: ["núcleos especializados", "defesa coletiva", "expansão"],
    rapporteur: "Dr. Rogério Borges Freitas",
  },
  {
    id: "2022-PAR-03",
    year: 2022,
    session: "Sessão Ordinária de 05/09/2022",
    type: "Parecer",
    number: "03/2022",
    title: "Parecer sobre critérios de distribuição equilibrada de feitos",
    summary:
      "Manifestação do Conselho Superior acerca de parâmetros de distribuição de demandas entre unidades, visando equilíbrio e eficiência na prestação do serviço.",
    keywords: ["gestão", "distribuição de feitos", "equilíbrio de carga"],
    rapporteur: "Dr. Rogério Borges Freitas",
  },
];

const uniqueYears = Array.from(new Set(decisionsMock.map((d) => d.year))).sort(
  (a, b) => b - a
);

const decisionTypes: CouncilDecision["type"][] = [
  "Resolução",
  "Deliberação",
  "Parecer",
  "Outro",
];

const AtuacaoNoConselho = () => {
  useScrollToTopOnMount();
  const [searchTerm, setSearchTerm] = useState("");
  const [yearFilter, setYearFilter] = useState<string>("todos");
  const [typeFilter, setTypeFilter] = useState<string>("todos");

  const filteredDecisions = useMemo(() => {
    return decisionsMock.filter((decision) => {
      const matchesYear =
        yearFilter === "todos" || decision.year.toString() === yearFilter;
      const matchesType =
        typeFilter === "todos" || decision.type === typeFilter;

      const term = searchTerm.toLowerCase().trim();
      const matchesSearch =
        term.length === 0 ||
        decision.title.toLowerCase().includes(term) ||
        decision.summary.toLowerCase().includes(term) ||
        decision.keywords.some((k) => k.toLowerCase().includes(term)) ||
        decision.number.toLowerCase().includes(term);

      return matchesYear && matchesType && matchesSearch;
    });
  }, [searchTerm, yearFilter, typeFilter]);

  return (
    <main className="min-h-screen pt-24">
      {/* BUSCA DE DECISÕES - BRANCO */}
      <SectionContainer background="default" padding="md" maxWidth="xl">
        <SectionTitle
          centered
          subtitle="Participação do Dr. Rogério Borges Freitas nas deliberações, resoluções e pareceres do Conselho Superior da Defensoria Pública. Em breve, esta área reunirá as pautas, votos, manifestações e proposições apresentadas pelo Dr. Rogério no âmbito do Conselho, com foco em transparência, memória institucional e fortalecimento da gestão democrática."
        >
          Atuação no Conselho Superior
        </SectionTitle>
        <SectionTitle
          centered
          subtitle="Encontre deliberações, resoluções e pareceres em que houve participação do conselheiro."
        >
          Busca de Decisões do Conselho Superior
        </SectionTitle>

          {/* Filtros */}
          <Card className="max-w-5xl mx-auto mt-10 p-6 md:p-8">
            <div className="grid gap-4 md:grid-cols-[2fr,1fr,1fr] items-end">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Search className="w-4 h-4" />
                  Buscar por palavra-chave
                </label>
                <Input
                  placeholder="Número da decisão, tema, palavra-chave..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">
                  Ano
                </label>
                <select
                  value={yearFilter}
                  onChange={(e) => setYearFilter(e.target.value)}
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="todos">Todos</option>
                  {uniqueYears.map((year) => (
                    <option key={year} value={year.toString()}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">
                  Tipo
                </label>
                <select
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="todos">Todos</option>
                  {decisionTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSearchTerm("");
                  setYearFilter("todos");
                  setTypeFilter("todos");
                }}
              >
                Limpar filtros
              </Button>
            </div>
          </Card>

          {/* Resultados */}
          <div className="max-w-5xl mx-auto mt-10 space-y-4">
            <p className="text-sm text-muted-foreground">
              {filteredDecisions.length} resultado
              {filteredDecisions.length === 1 ? "" : "s"} encontrado
              {searchTerm || yearFilter !== "todos" || typeFilter !== "todos"
                ? " com os filtros aplicados."
                : "."}
            </p>

            {filteredDecisions.length === 0 && (
              <Card className="p-6 text-center text-muted-foreground">
                Nenhuma decisão encontrada com os critérios informados. Ajuste
                os filtros ou tente outros termos de busca.
              </Card>
            )}

            {filteredDecisions.map((decision) => (
              <Card
                key={decision.id}
                className="p-6 md:p-7 bg-card/95 border border-border/70 card-hover overflow-hidden relative"
              >
                {/* Barra verde alinhada */}
                <span
                  className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-lg"
                  aria-hidden="true"
                />
                
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 pl-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Gavel className="w-4 h-4 text-primary flex-shrink-0" />
                      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-primary">
                        <span>{decision.type}</span>
                        <span>•</span>
                        <span>{decision.number}</span>
                        <span>•</span>
                        <span>{decision.year}</span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-1">
                      {decision.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {decision.session}
                    </p>
                    {decision.rapporteur && (
                      <p className="text-xs text-muted-foreground mb-3">
                        Relatoria:{" "}
                        <span className="font-medium">
                          {decision.rapporteur}
                        </span>
                      </p>
                    )}
                    <p className="text-sm text-muted-foreground">
                      {decision.summary}
                    </p>
                  </div>

                  <div className="flex flex-col items-start md:items-end gap-3 min-w-[160px]">
                    <div className="flex flex-wrap gap-2 justify-end">
                      {decision.keywords.map((k) => (
                        <span
                          key={k}
                          className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-[11px] font-medium text-primary"
                        >
                          {k}
                        </span>
                      ))}
                    </div>

                    {decision.link && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="mt-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        <a
                          href={decision.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Ver decisão completa
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
      </SectionContainer>

      {/* BLOCO EXPLICATIVO FUTURO - VERDE */}
      <SectionContainer background="primary" padding="md" maxWidth="xl">
        <Card className="max-w-4xl mx-auto p-8 md:p-10 bg-background border-border/60">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Compromisso com o Conselho e com a Instituição
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            A atuação no Conselho Superior é um dos espaços centrais de
            definição dos rumos institucionais da Defensoria Pública. É nele
            que se discutem critérios de gestão, expansão de serviços,
            regulamentações internas e políticas voltadas à melhoria do
            atendimento à população.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Esta página será, progressivamente, alimentada com as decisões em
            que o Dr. Rogério Borges Freitas atuou como conselheiro, relator
            ou proponente, permitindo que membros, servidores e a sociedade
            acompanhem de forma transparente sua contribuição para o
            fortalecimento da Defensoria Pública.
          </p>
        </Card>
      </SectionContainer>
    </main>
  );
};

export default AtuacaoNoConselho;
