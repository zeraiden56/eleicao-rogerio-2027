// src/pages/home/crescimento/EvolucaoRemuneracaoCard.tsx
import { useMemo, useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { TrendingUp, ChevronDown, ChevronUp } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  LabelList,
} from "recharts";

import salariosRaw from "@/data/evolucao_salarial_defensoria.json";
import indicesRaw from "@/data/indices_inflacao.json";

type SalaryPoint = {
  inicio: string; // "YYYY-MM-DD"
  fim: string;
  valor: number;
};

type CargoEntry = {
  id: string;
  grupo: string;
  classe: number | string;
  nivel: number | string;
  label: string;
  points: SalaryPoint[];
};

type SalariesJson = {
  generatedAt: string;
  cargos: CargoEntry[];
};

type InflationJson = {
  generatedAt: string;
  ipca: Record<string, number>; // "YYYY-MM" -> fator relativo a 2019-01
  inpc: Record<string, number>;
};

const salariosData = salariosRaw as SalariesJson;
const inflacaoData = indicesRaw as InflationJson;

type UiItemId =
  | "membroNivel0"
  | "membroNivel1"
  | "membroNivel2"
  | "membroNivel3"
  | "membroNivel4"
  | "membroNivel5"
  | "analistas"
  | "assessorTecnico"
  | "assessorEspecial"
  | "assessorDefensor"
  | "estagiarioMedio"
  | "estagiarioGraduacao"
  | "estagiarioPos"
  | "tecnicoAdm"
  | "controladorInterno";

type UiGroupId =
  | "g-membros"
  | "g-analistas"
  | "g-assessores"
  | "g-estagiarios"
  | "g-tecnico"
  | "g-controlador";

interface UiItemConfig {
  id: UiItemId;
  label: string;
  /** Exibe filtros Classe + Nível (ex.: Membros) */
  usesClassAndLevel?: boolean;
  /** Só Nível (sem Classe): Analistas, Técnico Administrativo, Controlador Interno */
  levelOnly?: boolean;
}

interface UiGroupConfig {
  id: UiGroupId;
  label: string;
  items: UiItemConfig[];
}

const uiGroups: UiGroupConfig[] = [
  {
    id: "g-membros",
    label: "Membros",
    items: [
      {
        id: "membroNivel5",
        label: "Defensor Público de Segunda Instância",
      },
      {
        id: "membroNivel4",
        label: "Defensor Público de Classe Especial",
      },
      {
        id: "membroNivel3",
        label: "Defensor Público de 3ª Classe",
      },
      {
        id: "membroNivel2",
        label: "Defensor Público de 2ª Classe",
      },
      {
        id: "membroNivel1",
        label: "Defensor Público de 1ª Classe",
      },
      {
        id: "membroNivel0",
        label:
          "Defensor Público Substituto (1ª Classe a se confirmar na carreira)",
      },
    ],
  },
  {
    id: "g-analistas",
    label: "Analistas",
    items: [
      {
        id: "analistas",
        label: "Analistas",
        usesClassAndLevel: true,
        levelOnly: true,
      },
    ],
  },
  {
    id: "g-assessores",
    label: "Assessores",
    items: [
      {
        id: "assessorTecnico",
        label: "Assessor Técnico",
      },
      {
        id: "assessorEspecial",
        label: "Assessor Especial",
      },
      {
        id: "assessorDefensor",
        label: "Assessor de Defensor (Jurídico)",
      },
    ],
  },
  {
    id: "g-estagiarios",
    label: "Estagiários",
    items: [
      {
        id: "estagiarioMedio",
        label: "Estagiário de Nível Médio",
      },
      {
        id: "estagiarioGraduacao",
        label: "Estagiário de Graduação",
      },
      {
        id: "estagiarioPos",
        label: "Estagiário de Pós-Graduação",
      },
    ],
  },
  {
    id: "g-tecnico",
    label: "Técnico Administrativo",
    items: [
      {
        id: "tecnicoAdm",
        label: "Técnico Administrativo",
        usesClassAndLevel: true,
        levelOnly: true,
      },
    ],
  },
  {
    id: "g-controlador",
    label: "Controlador Interno",
    items: [
      {
        id: "controladorInterno",
        label: "Controlador Interno",
        usesClassAndLevel: true,
        levelOnly: true,
      },
    ],
  },
];

// Helpers ----------------------------------------------------------

const normalize = (s: string) =>
  s
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();

const formatMonthKey = (isoDate: string) => {
  const d = new Date(isoDate);
  const y = d.getFullYear();
  const m = `${d.getMonth() + 1}`.padStart(2, "0");
  return `${y}-${m}`;
};

const formatMonthLabel = (isoDate: string) => {
  const d = new Date(isoDate);
  const m = `${d.getMonth() + 1}`.padStart(2, "0");
  const y = d.getFullYear();
  return `${m}/${y}`;
};

const formatCurrency = (value: number) =>
  value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 3,
  });

const formatPercent = (ratio: number) =>
  `${(ratio * 100).toFixed(1).replace(".", ",")}%`;

// Mapeamento do JSON -> itens da UI --------------------------------

const allCargos = salariosData.cargos;

const cargosByUiItem: Record<UiItemId, CargoEntry[]> = {
  // Membros
  membroNivel0: allCargos.filter(
    (c) => normalize(c.grupo).includes("membro") && String(c.nivel) === "0",
  ),
  membroNivel1: allCargos.filter(
    (c) => normalize(c.grupo).includes("membro") && String(c.nivel) === "1",
  ),
  membroNivel2: allCargos.filter(
    (c) => normalize(c.grupo).includes("membro") && String(c.nivel) === "2",
  ),
  membroNivel3: allCargos.filter(
    (c) => normalize(c.grupo).includes("membro") && String(c.nivel) === "3",
  ),
  membroNivel4: allCargos.filter(
    (c) => normalize(c.grupo).includes("membro") && String(c.nivel) === "4",
  ),
  membroNivel5: allCargos.filter(
    (c) => normalize(c.grupo).includes("membro") && String(c.nivel) === "5",
  ),

  // Analistas
  analistas: allCargos.filter((c) =>
    normalize(c.grupo).includes("analista"),
  ),

  // Assessores
  assessorTecnico: allCargos.filter((c) => {
    const g = normalize(c.grupo);
    return g.includes("assessor") && g.includes("tecnico");
  }),
  assessorEspecial: allCargos.filter((c) => {
    const g = normalize(c.grupo);
    return g.includes("assessor") && g.includes("especial");
  }),
  assessorDefensor: allCargos.filter((c) => {
    const g = normalize(c.grupo);
    return g.includes("assessor") && g.includes("defensor");
  }),

  // Estagiários
  estagiarioMedio: allCargos.filter((c) => {
    const g = normalize(c.grupo);
    return g.includes("estagi") && g.includes("medio");
  }),
  estagiarioGraduacao: allCargos.filter((c) => {
    const g = normalize(c.grupo);
    return (
      g.includes("estagi") && (g.includes("grad") || g.includes("superior"))
    );
  }),
  estagiarioPos: allCargos.filter((c) => {
    const g = normalize(c.grupo);
    return g.includes("estagi") && g.includes("pos");
  }),

  // Técnico Administrativo
  tecnicoAdm: allCargos.filter((c) =>
    normalize(c.grupo).includes("tecnico administrativo"),
  ),

  // Controlador
  controladorInterno: allCargos.filter((c) =>
    normalize(c.grupo).includes("controlador"),
  ),
};

// Componente principal ------------------------------------------------

const EvolucaoRemuneracaoCard = () => {
  const [openGroupId, setOpenGroupId] = useState<UiGroupId | null>("g-membros");
  const [selectedItemId, setSelectedItemId] = useState<UiItemId>("membroNivel0");

  const [selectedClasse, setSelectedClasse] = useState<string | undefined>();
  const [selectedNivel, setSelectedNivel] = useState<string | undefined>();

  const selectedGroup = useMemo(
    () =>
      uiGroups.find((g) =>
        g.items.some((it) => it.id === selectedItemId),
      ) ?? uiGroups[0],
    [selectedItemId],
  );

  const selectedItemConfig = useMemo(
    () =>
      selectedGroup.items.find((it) => it.id === selectedItemId) ??
      selectedGroup.items[0],
    [selectedGroup, selectedItemId],
  );

  const isMembroSelected = selectedGroup.id === "g-membros";

  // Inicializar / resetar selects de classe / nível
  useEffect(() => {
    if (!selectedItemConfig.usesClassAndLevel) {
      setSelectedClasse(undefined);
      setSelectedNivel(undefined);
      return;
    }

    const entries = cargosByUiItem[selectedItemConfig.id];
    if (!entries || entries.length === 0) return;

    const levelOnly = !!selectedItemConfig.levelOnly;
    const niveis = Array.from(
      new Set(entries.map((c) => String(c.nivel))),
    )
      .filter((niv) => niv.toUpperCase() !== "A-I")
      .sort();

    if (levelOnly) {
      setSelectedClasse(undefined);
      setSelectedNivel((prev) => prev ?? niveis[0]);
      return;
    }

    const classes = Array.from(
      new Set(entries.map((c) => String(c.classe))),
    ).sort();
    setSelectedClasse((prev) => prev ?? classes[0]);
    setSelectedNivel((prev) => prev ?? niveis[0]);
  }, [selectedItemConfig.id, selectedItemConfig.usesClassAndLevel, selectedItemConfig.levelOnly]);

  const currentCargo: CargoEntry | undefined = useMemo(() => {
    const entries = cargosByUiItem[selectedItemConfig.id] ?? [];
    if (entries.length === 0) return undefined;

    // para combos classe/nivel, ignorar A-I
    const filteredEntries = selectedItemConfig.usesClassAndLevel
      ? entries.filter(
          (c) => String(c.nivel).toUpperCase() !== "A-I",
        )
      : entries;

    if (filteredEntries.length === 0) return undefined;

    if (!selectedItemConfig.usesClassAndLevel) {
      return filteredEntries[0];
    }

    const baseEntry = filteredEntries[0];
    const nivelKey = selectedNivel ?? String(baseEntry.nivel);

    if (selectedItemConfig.levelOnly) {
      return (
        filteredEntries.find((c) => String(c.nivel) === nivelKey) ?? baseEntry
      );
    }

    const classeKey = selectedClasse ?? String(baseEntry.classe);
    return (
      filteredEntries.find(
        (c) =>
          String(c.classe) === classeKey && String(c.nivel) === nivelKey,
      ) ?? baseEntry
    );
  }, [selectedItemConfig, selectedClasse, selectedNivel]);

  const {
    chartData,
    resumoTitulo,
    periodoTexto,
    valorInicial,
    valorFinal,
    variacaoNominal,
    variacaoPercentual,
    ipcaPercent,
    inpcPercent,
    yDomain,
  } = useMemo(() => {
    if (!currentCargo || currentCargo.points.length === 0) {
      return {
        chartData: [] as any[],
        resumoTitulo: "Sem dados",
        periodoTexto: "",
        valorInicial: 0,
        valorFinal: 0,
        variacaoNominal: 0,
        variacaoPercentual: 0,
        ipcaPercent: 0,
        inpcPercent: 0,
        yDomain: [0, 1] as [number, number],
      };
    }

    const points = [...currentCargo.points].sort(
      (a, b) => new Date(a.inicio).getTime() - new Date(b.inicio).getTime(),
    );

    const primeira = points[0];
    const ultima = points[points.length - 1];

    const baseMonthKey = formatMonthKey(primeira.inicio);
    const endMonthKey = formatMonthKey(ultima.inicio);

    const baseIpca = inflacaoData.ipca[baseMonthKey] ?? 1;
    const baseInpc = inflacaoData.inpc[baseMonthKey] ?? 1;

    const endIpca = inflacaoData.ipca[endMonthKey] ?? baseIpca;
    const endInpc = inflacaoData.inpc[endMonthKey] ?? baseInpc;

    const ipcaFactor = baseIpca > 0 ? endIpca / baseIpca : 1;
    const inpcFactor = baseInpc > 0 ? endInpc / baseInpc : 1;

    const valorIni = primeira.valor;
    const valorFim = ultima.valor;
    const delta = valorFim - valorIni;
    const perc = valorIni > 0 ? valorFim / valorIni - 1 : 0;

    const valoresParaDomain: number[] = [];

    const chartData = points.map((p) => {
      const monthKey = formatMonthKey(p.inicio);
      const ipcaMonth = inflacaoData.ipca[monthKey];
      const inpcMonth = inflacaoData.inpc[monthKey];

      const ipcaFromStart =
        baseIpca > 0 && ipcaMonth ? ipcaMonth / baseIpca : 1;
      const inpcFromStart =
        baseInpc > 0 && inpcMonth ? inpcMonth / baseInpc : 1;

      valoresParaDomain.push(p.valor);

      return {
        date: formatMonthLabel(p.inicio),
        valor: p.valor,
        valorIpca: valorIni * ipcaFromStart,
        valorInpc: valorIni * inpcFromStart,
      };
    });

    let min = Math.min(...valoresParaDomain);
    let max = Math.max(...valoresParaDomain);

    if (!Number.isFinite(min) || !Number.isFinite(max)) {
      min = 0;
      max = 1;
    }

    if (min === max) {
      const padding = min * 0.05 || 1;
      min = min - padding;
      max = max + padding;
    } else {
      const padding = (max - min) * 0.08;
      min = min - padding;
      max = max + padding;
    }

    const domain: [number, number] = [min, max];

    let titulo = "";
    if (normalize(currentCargo.grupo).includes("membro")) {
      const membroItem = uiGroups
        .find((g) => g.id === "g-membros")
        ?.items.find((it) => it.id === selectedItemId);
      titulo = membroItem?.label ?? currentCargo.label ?? "Membros";
    } else if (selectedItemConfig.id === "analistas") {
      titulo = `Analista – Nível ${selectedNivel ?? currentCargo.nivel}`;
    } else if (selectedItemConfig.id === "tecnicoAdm") {
      titulo = `Técnico Administrativo – Nível ${selectedNivel ?? currentCargo.nivel}`;
    } else if (selectedItemConfig.id === "controladorInterno") {
      titulo = `Controlador Interno – Nível ${selectedNivel ?? currentCargo.nivel}`;
    } else if (normalize(currentCargo.grupo).includes("estagi")) {
      titulo = currentCargo.label || "Estagiário";
    } else if (normalize(currentCargo.grupo).includes("assessor")) {
      titulo = currentCargo.label.replace(/ -?\s*N[ií]vel\s*I/gi, "");
    } else {
      titulo = currentCargo.label || currentCargo.grupo;
    }

    const periodo = `${formatMonthLabel(primeira.inicio)} → ${formatMonthLabel(
      ultima.inicio,
    )}`;

    return {
      chartData,
      resumoTitulo: titulo,
      periodoTexto: periodo,
      valorInicial: valorIni,
      valorFinal: valorFim,
      variacaoNominal: delta,
      variacaoPercentual: perc,
      ipcaPercent: ipcaFactor - 1,
      inpcPercent: inpcFactor - 1,
      yDomain: domain,
    };
  }, [
    currentCargo,
    selectedItemId,
    selectedItemConfig,
    selectedClasse,
    selectedNivel,
  ]);

  const handleToggleGroup = (groupId: UiGroupId) => {
    setOpenGroupId((prev) => (prev === groupId ? null : groupId));
  };

  const handleSelectItem = (itemId: UiItemId) => {
    setSelectedItemId(itemId);
  };

  const showClassLevelControls = !!selectedItemConfig.usesClassAndLevel;
  const levelOnly = !!selectedItemConfig.levelOnly;
  const showClasseSelect = showClassLevelControls && !levelOnly;

  const classOptions = useMemo(() => {
    if (!showClasseSelect) return [];
    const entries = cargosByUiItem[selectedItemConfig.id] ?? [];
    return Array.from(new Set(entries.map((c) => String(c.classe)))).sort();
  }, [selectedItemConfig.id, showClasseSelect]);

  const levelOptions = useMemo(() => {
    if (!showClassLevelControls) return [];
    const entries = cargosByUiItem[selectedItemConfig.id] ?? [];
    return Array.from(new Set(entries.map((c) => String(c.nivel))))
      .filter((niv) => niv.toUpperCase() !== "A-I")
      .sort();
  }, [selectedItemConfig.id, showClassLevelControls]);

  return (
    <Card className="p-6 md:p-8 lg:p-10 bg-gradient-to-br from-card via-card/98 to-card/95 border border-border/60 shadow-sm backdrop-blur-sm">
      <div className="flex flex-col items-center text-center gap-3 mb-10">
        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
          <TrendingUp className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold">
            Evolução da remuneração por cargo
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            Visualize a valorização das carreiras ao longo dos anos.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[310px,1fr] gap-10">
        {/* Lateral esquerda */}
        <aside className="space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
              Selecione o tipo de cargo
            </p>
            <div className="space-y-3">
              {uiGroups.map((group) => {
                const isOpen = openGroupId === group.id;
                return (
                  <div key={group.id} className="rounded-2xl bg-gradient-to-br from-muted/50 to-muted/30 border border-border/40 backdrop-blur-sm">
                    <button
                      type="button"
                      onClick={() => handleToggleGroup(group.id)}
                      className={`flex w-full items-center justify-between px-4 py-2.5 rounded-2xl text-sm font-semibold transition-all ${
                        isOpen
                          ? "bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-sm"
                          : "bg-gradient-to-br from-background to-muted/30 hover:from-muted/50 hover:to-muted/40"
                      }`}
                    >
                      <span>{group.label}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-2 pb-2 pt-1 space-y-1">
                        {group.items.map((item) => {
                          const isActive = selectedItemId === item.id;
                          
                          // Calcular variação percentual para este item
                          const getVariacaoPercent = () => {
                            const entries = cargosByUiItem[item.id] ?? [];
                            if (entries.length === 0) return null;
                            const filtered = item.usesClassAndLevel
                              ? entries.filter((c) => String(c.nivel).toUpperCase() !== "A-I")
                              : entries;
                            if (filtered.length === 0) return null;

                            let cargo: CargoEntry | undefined;
                            if (item.usesClassAndLevel) {
                              if (item.levelOnly) {
                                const nivelKey = selectedNivel ?? String(filtered[0].nivel);
                                cargo = filtered.find((c) => String(c.nivel) === nivelKey) ?? filtered[0];
                              } else {
                                const baseEntry = filtered[0];
                                const classeKey = selectedClasse ?? String(baseEntry.classe);
                                const nivelKey = selectedNivel ?? String(baseEntry.nivel);
                                cargo = filtered.find(
                                  (c) =>
                                    String(c.classe) === classeKey && String(c.nivel) === nivelKey,
                                ) ?? filtered[0];
                              }
                            } else {
                              cargo = filtered[0];
                            }
                            
                            if (!cargo || cargo.points.length === 0) return null;
                            const points = [...cargo.points].sort(
                              (a, b) => new Date(a.inicio).getTime() - new Date(b.inicio).getTime(),
                            );
                            const primeira = points[0];
                            const ultima = points[points.length - 1];
                            if (primeira.valor === 0) return null;
                            return ((ultima.valor / primeira.valor - 1) * 100);
                          };
                          
                          const variacaoPercent = getVariacaoPercent();
                          
                          return (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => handleSelectItem(item.id)}
                              className={`w-full text-left px-3 py-2 rounded-xl text-sm border transition-all ${
                                isActive
                                  ? "bg-gradient-to-r from-primary/95 to-primary/85 text-primary-foreground border-primary shadow-sm"
                                  : "bg-gradient-to-br from-background to-muted/20 border-border/60 hover:from-muted/40 hover:to-muted/30"
                              }`}
                            >
                              <div className="flex items-center justify-between gap-2">
                                <span className="flex-1">{item.label}</span>
                                {variacaoPercent !== null && (
                                  <span className={`text-xs font-semibold whitespace-nowrap ${
                                    isActive 
                                      ? "text-primary-foreground/80" 
                                      : variacaoPercent >= 0 
                                        ? "text-emerald-600" 
                                        : "text-red-600"
                                  }`}>
                                    {variacaoPercent >= 0 ? "+" : ""}
                                    {variacaoPercent.toFixed(1)}%
                                  </span>
                                )}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {showClassLevelControls && (
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {levelOnly ? "Nível" : "Classe e nível"}
              </p>
              <div className="space-y-2">
                {showClasseSelect && (
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-muted-foreground">Classe</span>
                    <select
                      className="text-sm rounded-xl border border-border/70 bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40"
                      value={selectedClasse ?? ""}
                      onChange={(e) => setSelectedClasse(e.target.value)}
                    >
                      {classOptions.map((cls) => (
                        <option key={cls} value={cls}>
                          Classe {cls}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-muted-foreground">Nível</span>
                  <select
                    className="text-sm rounded-xl border border-border/70 bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40"
                    value={selectedNivel ?? ""}
                    onChange={(e) => setSelectedNivel(e.target.value)}
                  >
                    {levelOptions.map((niv) => (
                      <option key={niv} value={niv}>
                        Nível {niv}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}
        </aside>

        {/* Direita – gráfico e resumo */}
        <div className="space-y-6">
          {/* Gráfico melhorado - mais fácil de entender sem legendas */}
          <div className="h-[320px] md:h-[380px] lg:h-[420px] relative">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ left: 0, right: 24, top: 20, bottom: 20 }}>
                <CartesianGrid 
                  strokeDasharray="3 3" 
                  vertical={false} 
                  stroke="hsl(var(--border))"
                  opacity={0.3}
                />
                <XAxis
                  dataKey="date"
                  tickMargin={8}
                  tickLine={false}
                  axisLine={false}
                  style={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
                  angle={-45}
                  textAnchor="end"
                  height={60}
                />
                <YAxis
                  tickMargin={8}
                  tickLine={false}
                  axisLine={false}
                  domain={yDomain}
                  tickFormatter={(v) => {
                    if (v >= 1000) return `R$ ${(v / 1000).toFixed(1)}k`;
                    return `R$ ${v.toLocaleString("pt-BR", { maximumFractionDigits: 0 })}`;
                  }}
                  style={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
                  width={70}
                />
                <Tooltip
                  formatter={(value: any) => formatCurrency(Number(value))}
                  labelFormatter={(label) => `Período: ${label}`}
                  contentStyle={{
                    backgroundColor: "hsl(var(--background))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                    padding: "8px 12px",
                  }}
                />
                {/* Linha principal com valores inline */}
                <Line
                  type="monotone"
                  dataKey="valor"
                  stroke="hsl(var(--primary))"
                  strokeWidth={3}
                  dot={{ 
                    r: 4, 
                    fill: "hsl(var(--primary))",
                    strokeWidth: 2,
                    stroke: "hsl(var(--background))"
                  }}
                  activeDot={{ 
                    r: 6,
                    fill: "hsl(var(--primary))",
                    strokeWidth: 2,
                    stroke: "hsl(var(--background))"
                  }}
                >
                  {/* Labels inline nos pontos principais (primeiro, último e alguns intermediários) */}
                  <LabelList
                    dataKey="valor"
                    position="top"
                    formatter={(value: number, index: number) => {
                      // Mostra apenas primeiro, último e alguns pontos intermediários
                      const total = chartData.length;
                      if (index === 0 || index === total - 1) {
                        return formatCurrency(value);
                      }
                      // Mostra a cada 3-4 pontos se houver muitos
                      if (total > 8 && index % Math.ceil(total / 4) === 0) {
                        return formatCurrency(value);
                      }
                      return "";
                    }}
                    style={{ 
                      fontSize: 10, 
                      fill: "hsl(var(--foreground))",
                      fontWeight: 600
                    }}
                  />
                </Line>
                {/* Linhas de referência de inflação (apenas para não-membros) */}
                {!isMembroSelected && (
                  <>
                    <Line
                      type="monotone"
                      dataKey="valorIpca"
                      stroke="hsl(var(--muted-foreground))"
                      strokeWidth={1.5}
                      strokeDasharray="5 5"
                      dot={false}
                      strokeOpacity={0.5}
                    />
                    <Line
                      type="monotone"
                      dataKey="valorInpc"
                      stroke="hsl(var(--muted-foreground))"
                      strokeWidth={1.5}
                      strokeDasharray="3 3"
                      dot={false}
                      strokeOpacity={0.4}
                    />
                  </>
                )}
              </LineChart>
            </ResponsiveContainer>
            
            {/* Legenda simplificada inline (sem box separado) */}
            {!isMembroSelected && (
              <div className="absolute top-2 right-4 flex flex-col gap-1 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-0.5 bg-primary" />
                  <span className="text-muted-foreground">Remuneração</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-0.5 bg-muted-foreground border-dashed border-t" style={{ borderTopWidth: '1.5px', opacity: 0.5 }} />
                  <span className="text-muted-foreground">IPCA</span>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-1 text-sm md:text-base">
            <p className="font-semibold">
              {resumoTitulo}:{" "}
              <span className="font-normal text-muted-foreground">
                {periodoTexto}
              </span>
            </p>
            <p>
              <span className="font-semibold">Valor inicial:</span>{" "}
              {formatCurrency(valorInicial)}
            </p>
            <p>
              <span className="font-semibold">Valor atual:</span>{" "}
              {formatCurrency(valorFinal)}
            </p>
            <p>
              <span className="font-semibold">Variação nominal:</span>{" "}
              {formatCurrency(variacaoNominal)}{" "}
              <span
                className={
                  variacaoPercentual >= 0
                    ? "text-emerald-600 font-semibold"
                    : "text-red-600 font-semibold"
                }
              >
                ({formatPercent(variacaoPercentual)})
              </span>
            </p>
            {!isMembroSelected && (
              <p className="text-xs text-muted-foreground mt-2">
                Referências de inflação no período:&nbsp;
                <span className="font-medium">IPCA</span>{" "}
                {formatPercent(ipcaPercent)} &nbsp;|&nbsp;
                <span className="font-medium">INPC</span>{" "}
                {formatPercent(inpcPercent)}.
              </p>
            )}
            <p className="text-xs text-muted-foreground mt-2">
              Dados extraídos do portal da transparência da Defensoria Pública
              do Estado de Mato Grosso em 29/11/2025.
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EvolucaoRemuneracaoCard;
