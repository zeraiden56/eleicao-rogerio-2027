// src/pages/home/CrescimentoSection.tsx
import { useMemo, useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import { Card } from "@/components/ui/card";
import { Calendar, TrendingUp, ChevronDown, ChevronRight } from "lucide-react";

import rawSalaryData from "@/data/evolucao_salarial_defensoria.json";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

type SalaryPoint = {
  inicio: string;
  fim: string;
  valor: number;
};

type SalaryCargo = {
  id: string;
  grupo: string;
  classe: number | string;
  nivel: number | string;
  label: string;
  points: SalaryPoint[];
};

type SalaryData = {
  generatedAt: string;
  cargos: SalaryCargo[];
};

const salaryData = rawSalaryData as SalaryData;

// ---------- helpers ----------
const formatCurrency = (value: number) =>
  value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });

const formatCurrencyCompact = (value: number) =>
  value.toLocaleString("pt-BR", {
    maximumFractionDigits: 0,
  });

const formatMonthYear = (iso: string) => {
  const parts = iso.split("-");
  if (parts.length < 2) return iso;
  const [year, month] = parts;
  return `${month}/${year}`;
};

const normalizeStr = (value: number | string | null | undefined) =>
  value == null ? "" : String(value);

const formatGeneratedAt = (iso: string) => {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("pt-BR", { timeZone: "UTC" });
};

// ---------- labels especiais ----------

// nomes dos cargos de Membros por nível
const MEMBER_LEVEL_LABELS: Record<string, string> = {
  "5": "Defensor Público de Segunda Instância",
  "4": "Defensor Público de Classe Especial",
  "3": "Defensor Público de 3ª Classe",
  "2": "Defensor Público de 2ª Classe",
  "1": "Defensor Público de 1ª Classe",
  "0":
    "Defensor Público Substituto (1ª Classe a se confirmar na carreira)",
};

// ---------- configuração de grupos visuais ----------
type DisplayGroup = {
  id: string;
  label: string;
  grupos: string[]; // nomes de grupo vindos do JSON
};

const BASE_DISPLAY_GROUPS: DisplayGroup[] = [
  { id: "Membros", label: "Membros", grupos: ["Membros"] },
  { id: "Analistas", label: "Analistas", grupos: ["Analistas"] },
  {
    id: "Assessores",
    label: "Assessores",
    grupos: [
      "Assessor Especial",
      "Assessor Técnico",
      "Assessor de Defensor (Jurídico)",
    ],
  },
  {
    id: "Estagiários",
    label: "Estagiários",
    grupos: ["Estagiários - Médio/Superior", "Estagiário de Pós-Graduação"],
  },
  {
    id: "Técnico Administrativo",
    label: "Técnico Administrativo",
    grupos: ["Técnico Administrativo"],
  },
  {
    id: "Controlador Interno",
    label: "Controlador Interno",
    grupos: ["Controlador Interno"],
  },
];

const allRawGroups = Array.from(new Set(salaryData.cargos.map((c) => c.grupo)));

const DISPLAY_GROUPS: DisplayGroup[] = (() => {
  const used: DisplayGroup[] = [];

  BASE_DISPLAY_GROUPS.forEach((cfg) => {
    if (cfg.grupos.some((g) => allRawGroups.includes(g))) {
      used.push(cfg);
    }
  });

  const remaining = allRawGroups.filter(
    (g) => !used.some((cfg) => cfg.grupos.includes(g))
  );
  remaining.sort().forEach((g) => {
    used.push({ id: g, label: g, grupos: [g] });
  });

  return used;
})();

// ---------- mapeia cargos por grupo visual ----------
type CargosByDisplayGroup = Record<string, SalaryCargo[]>;

const CARGOS_BY_DISPLAY_GROUP: CargosByDisplayGroup = (() => {
  const map: CargosByDisplayGroup = {};

  DISPLAY_GROUPS.forEach((g) => {
    map[g.id] = [];
  });

  salaryData.cargos.forEach((cargo) => {
    const groupCfg = DISPLAY_GROUPS.find((g) => g.grupos.includes(cargo.grupo));
    if (!groupCfg) return;
    map[groupCfg.id].push(cargo);
  });

  Object.keys(map).forEach((key) => {
    const arr = map[key];

    arr.sort((a, b) => {
      // Membros: ordena por nível numérico
      if (a.grupo === "Membros" && b.grupo === "Membros") {
        return Number(a.nivel) - Number(b.nivel);
      }

      // Demais: ordena por classe (se der), depois nível
      const classeA = Number(a.classe);
      const classeB = Number(b.classe);

      if (!Number.isNaN(classeA) && !Number.isNaN(classeB) && classeA !== classeB) {
        return classeA - classeB;
      }

      const nA = normalizeStr(a.nivel);
      const nB = normalizeStr(b.nivel);
      return nA.localeCompare(nB, "pt-BR", { numeric: true, sensitivity: "base" });
    });
  });

  return map;
})();

// default cargo por grupo (considerando suas manias específicas)
const getDefaultCargoForGroup = (groupId: string): SalaryCargo | undefined => {
  const arr = CARGOS_BY_DISPLAY_GROUP[groupId] || [];
  if (!arr.length) return undefined;

  // Estagiários: ordem Médio -> Graduação -> Pós
  if (groupId === "Estagiários") {
    const meio = arr.find(
      (c) =>
        c.grupo === "Estagiários - Médio/Superior" &&
        ["2", "II"].includes(normalizeStr(c.nivel).toUpperCase())
    );
    if (meio) return meio;

    const graduacao = arr.find(
      (c) =>
        c.grupo === "Estagiários - Médio/Superior" &&
        ["1", "I"].includes(normalizeStr(c.nivel).toUpperCase())
    );
    if (graduacao) return graduacao;

    const pos = arr.find(
      (c) => c.grupo === "Estagiário de Pós-Graduação"
    );
    if (pos) return pos;
  }

  // Assessores: deixa Especial primeiro, depois Técnico, depois Jurídico
  if (groupId === "Assessores") {
    const especial = arr.find((c) => c.grupo === "Assessor Especial");
    if (especial) return especial;

    const tecnico = arr.find((c) => c.grupo === "Assessor Técnico");
    if (tecnico) return tecnico;

    const juridico = arr.find(
      (c) => c.grupo === "Assessor de Defensor (Jurídico)"
    );
    if (juridico) return juridico;
  }

  // padrão: primeiro da lista já ordenada
  return arr[0];
};

// ---------- labels amigáveis ----------
const getCargoChipLabel = (cargo: SalaryCargo): string => {
  const grupo = cargo.grupo;
  const nivelStr = normalizeStr(cargo.nivel);
  const nivelUpper = nivelStr.toUpperCase();

  switch (grupo) {
    case "Membros": {
      const custom = MEMBER_LEVEL_LABELS[nivelStr];
      return custom || `Membros – Nível ${nivelStr}`;
    }

    case "Estagiários - Médio/Superior":
      if (nivelUpper === "1" || nivelUpper === "I") {
        return "Estagiário de Graduação";
      }
      if (nivelUpper === "2" || nivelUpper === "II") {
        return "Estagiário de Nível Médio";
      }
      return `Nível ${nivelStr}`;

    case "Estagiário de Pós-Graduação":
      return "Estagiário de Pós-Graduação";

    case "Analistas":
    case "Técnico Administrativo":
    case "Controlador Interno":
      return `Nível ${nivelStr}`;

    case "Assessor Técnico":
    case "Assessor Especial":
    case "Assessor de Defensor (Jurídico)":
      // sem "Nível I" no chip
      return grupo;

    default:
      if (nivelStr) return `Nível ${nivelStr}`;
      return grupo;
  }
};

const getResumoTitulo = (cargo: SalaryCargo): string => {
  const grupo = cargo.grupo;
  const nivelStr = normalizeStr(cargo.nivel);
  const nivelUpper = nivelStr.toUpperCase();

  switch (grupo) {
    case "Membros": {
      const custom = MEMBER_LEVEL_LABELS[nivelStr];
      return custom || `Membros – Nível ${nivelStr}`;
    }

    case "Analistas":
      return `Analista – Nível ${nivelStr}`;

    case "Técnico Administrativo":
      return `Técnico Administrativo – Nível ${nivelStr}`;

    case "Controlador Interno":
      return `Controlador Interno – Nível ${nivelStr}`;

    case "Estagiários - Médio/Superior":
      if (nivelUpper === "1" || nivelUpper === "I") {
        return "Estagiário de Graduação";
      }
      if (nivelUpper === "2" || nivelUpper === "II") {
        return "Estagiário de Nível Médio";
      }
      return "Estagiários";

    case "Estagiário de Pós-Graduação":
      return "Estagiário de Pós-Graduação";

    case "Assessor Técnico":
    case "Assessor Especial":
    case "Assessor de Defensor (Jurídico)":
      // aqui também sem "Nível"
      return grupo;

    default:
      if (nivelStr) return `${grupo} – Nível ${nivelStr}`;
      return grupo;
  }
};

// ---------- tipos para Recharts ----------
type ChartPoint = {
  label: string;
  dateIso: string;
  valor: number;
};

const buildValueLabelRenderer =
  (data: ChartPoint[]) =>
  (props: any): JSX.Element | null => {
    const { x, y, value, index } = props;
    if (typeof value !== "number") return null;
    if (index !== 0 && index !== data.length - 1) return null;
    return (
      <text
        x={x}
        y={y - 6}
        textAnchor="middle"
        fontSize={10}
        fill="hsl(var(--primary))"
      >
        {formatCurrencyCompact(value)}
      </text>
    );
  };

const CrescimentoSection = () => {
  const generatedAtBr = formatGeneratedAt(salaryData.generatedAt);

  const defaultGroupId =
    DISPLAY_GROUPS.find((g) => g.id === "Membros")?.id ||
    DISPLAY_GROUPS[0]?.id ||
    "";

  const defaultCargoForDefaultGroup =
    getDefaultCargoForGroup(defaultGroupId) ||
    salaryData.cargos[0];

  const [selectedGroupId, setSelectedGroupId] = useState<string>(defaultGroupId);
  const [openGroupId, setOpenGroupId] = useState<string | null>(defaultGroupId);
  const [selectedCargoId, setSelectedCargoId] = useState<string>(
    defaultCargoForDefaultGroup.id
  );

  const selectedDisplayGroup =
    DISPLAY_GROUPS.find((g) => g.id === selectedGroupId) || DISPLAY_GROUPS[0];

  const cargosDoGrupo = CARGOS_BY_DISPLAY_GROUP[selectedDisplayGroup.id] || [];

  const selectedCargo: SalaryCargo | null =
    cargosDoGrupo.find((c) => c.id === selectedCargoId) ??
    getDefaultCargoForGroup(selectedDisplayGroup.id) ??
    null;

  const isClassNivelGroup = [
    "Analistas",
    "Técnico Administrativo",
    "Controlador Interno",
  ].includes(selectedDisplayGroup.id);

  const classNivelInfo = useMemo(() => {
    if (!isClassNivelGroup || !selectedCargo) return null;

    const classesSet = new Set<string>();
    const niveisPerClasse: Record<string, string[]> = {};

    cargosDoGrupo.forEach((c) => {
      const cls = normalizeStr(c.classe);
      const niv = normalizeStr(c.nivel);
      if (!cls || !niv) return;

      classesSet.add(cls);
      if (!niveisPerClasse[cls]) niveisPerClasse[cls] = [];
      if (!niveisPerClasse[cls].includes(niv)) {
        niveisPerClasse[cls].push(niv);
      }
    });

    const classes = Array.from(classesSet).sort((a, b) => {
      const na = Number(a);
      const nb = Number(b);
      if (!Number.isNaN(na) && !Number.isNaN(nb) && na !== nb) return na - nb;
      return a.localeCompare(b, "pt-BR", { numeric: true, sensitivity: "base" });
    });

    if (!classes.length) return null;

    const selectedClasse =
      normalizeStr(selectedCargo.classe) || classes[0];

    const niveisForClasseRaw = niveisPerClasse[selectedClasse] || [];
    const niveisForClasse = niveisForClasseRaw
      .slice()
      .sort((a, b) =>
        a.localeCompare(b, "pt-BR", { numeric: true, sensitivity: "base" })
      );

    const selectedNivel =
      normalizeStr(selectedCargo.nivel) || niveisForClasse[0];

    return {
      classes,
      niveisPerClasse,
      selectedClasse,
      niveisForClasse,
      selectedNivel,
    };
  }, [isClassNivelGroup, cargosDoGrupo, selectedCargo]);

  const chartData: ChartPoint[] = useMemo(() => {
    if (!selectedCargo) return [];

    const validPoints = selectedCargo.points.filter((p) =>
      /^\d{4}-\d{2}-\d{2}$/.test(p.inicio)
    );

    return validPoints
      .slice()
      .sort((a, b) => a.inicio.localeCompare(b.inicio))
      .map((p) => ({
        label: formatMonthYear(p.inicio),
        dateIso: p.inicio,
        valor: p.valor,
      }));
  }, [selectedCargo]);

  const groupYAxisDomain = useMemo<[number, number] | undefined>(() => {
    if (!cargosDoGrupo.length) return undefined;

    let min = Infinity;
    let max = -Infinity;

    cargosDoGrupo.forEach((cargo) => {
      cargo.points.forEach((p) => {
        if (/^\d{4}-\d{2}-\d{2}$/.test(p.inicio) && typeof p.valor === "number") {
          if (p.valor < min) min = p.valor;
          if (p.valor > max) max = p.valor;
        }
      });
    });

    if (!isFinite(min) || !isFinite(max)) return undefined;
    const padding = (max - min) * 0.05 || max * 0.05 || 500;
    return [Math.max(0, min - padding), max + padding];
  }, [cargosDoGrupo]);

  const resumo = useMemo(() => {
    if (!chartData.length || !selectedCargo) return null;

    const first = chartData[0];
    const last = chartData[chartData.length - 1];
    const diffAbs = last.valor - first.valor;
    const diffPerc = (diffAbs / first.valor) * 100;

    return {
      first,
      last,
      diffAbs,
      diffPerc,
      titulo: getResumoTitulo(selectedCargo),
    };
  }, [chartData, selectedCargo]);

  // grupos que têm submenu lateral "cascata"
  const groupsWithSubmenu = ["Membros", "Estagiários", "Assessores"];

  return (
    <section
      id="crescimento-section"
      className="py-20 bg-muted/30 scroll-mt-24"
    >
      <div className="container mx-auto px-4">
        <SectionTitle
          centered
          subtitle="Durante a atuação na gestão como Primeiro Subdefensor Público-Geral e Ordenador de Despesas"
        >
          Crescimento da Defensoria
        </SectionTitle>

        {/* CARD PRINCIPAL */}
        <Card className="mt-12 p-6 md:p-8 bg-card/95 border border-border/60 shadow-md">
          {/* cabeçalho centralizado */}
          <div className="flex flex-col items-center text-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
              <TrendingUp className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">
                Evolução da remuneração por cargo
              </h3>
              <p className="text-sm text-muted-foreground max-w-xl mx-auto mt-1">
                Visualize a valorização das carreiras ao longo dos anos.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,2.6fr)] items-start">
            {/* MENU LATERAL EM CASCATA */}
            <div className="md:max-h-[26rem] md:overflow-y-auto md:pr-4 border-b md:border-b-0 md:border-r border-border/60 pb-4 md:pb-0">
              <p className="text-xs font-semibold text-muted-foreground mb-3">
                Selecione o tipo de cargo e, quando disponível, a classe / nível
              </p>

              <div className="space-y-2">
                {DISPLAY_GROUPS.map((grupo) => {
                  const isActiveGroup = grupo.id === selectedGroupId;
                  const isExpanded = openGroupId === grupo.id;
                  const allCargos = CARGOS_BY_DISPLAY_GROUP[grupo.id] || [];
                  const hasSubmenu = groupsWithSubmenu.includes(grupo.id);

                  const handleGroupClick = () => {
                    if (hasSubmenu) {
                      if (selectedGroupId === grupo.id) {
                        // só abre/fecha submenu
                        setOpenGroupId((prev) =>
                          prev === grupo.id ? null : grupo.id
                        );
                      } else {
                        setSelectedGroupId(grupo.id);
                        setOpenGroupId(grupo.id);
                        const def = getDefaultCargoForGroup(grupo.id);
                        if (def) setSelectedCargoId(def.id);
                      }
                    } else {
                      // grupo sem submenu: só seleciona
                      setSelectedGroupId(grupo.id);
                      setOpenGroupId(null);
                      const def = getDefaultCargoForGroup(grupo.id);
                      if (def) setSelectedCargoId(def.id);
                    }
                  };

                  // submenu específico por grupo
                  let submenu: JSX.Element | null = null;

                  if (hasSubmenu && isExpanded) {
                    if (grupo.id === "Membros") {
                      const membrosOptions = allCargos
                        .slice()
                        .sort(
                          (a, b) =>
                            Number(b.nivel) - Number(a.nivel) // 5 -> 0
                        );

                      submenu = (
                        <div className="border-t border-border/40 bg-muted/40">
                          {membrosOptions.map((cargo) => {
                            const active =
                              cargo.id === selectedCargoId && isActiveGroup;
                            const nivelStr = normalizeStr(cargo.nivel);
                            const label =
                              MEMBER_LEVEL_LABELS[nivelStr] ||
                              getCargoChipLabel(cargo);

                            return (
                              <button
                                key={cargo.id}
                                type="button"
                                onClick={() => {
                                  setSelectedGroupId(grupo.id);
                                  setOpenGroupId(grupo.id);
                                  setSelectedCargoId(cargo.id);
                                }}
                                className={`w-full text-left px-4 py-2 text-xs border-t border-border/30 first:border-t-0 transition-colors ${
                                  active
                                    ? "bg-primary/90 text-primary-foreground"
                                    : "text-foreground hover:bg-muted"
                                }`}
                              >
                                {label}
                              </button>
                            );
                          })}
                        </div>
                      );
                    } else if (grupo.id === "Estagiários") {
                      const medio = allCargos.find(
                        (c) =>
                          c.grupo === "Estagiários - Médio/Superior" &&
                          ["2", "II"].includes(
                            normalizeStr(c.nivel).toUpperCase()
                          )
                      );
                      const graduacao = allCargos.find(
                        (c) =>
                          c.grupo === "Estagiários - Médio/Superior" &&
                          ["1", "I"].includes(
                            normalizeStr(c.nivel).toUpperCase()
                          )
                      );
                      const pos = allCargos.find(
                        (c) => c.grupo === "Estagiário de Pós-Graduação"
                      );

                      const options: { cargo: SalaryCargo; label: string }[] = [];
                      if (medio)
                        options.push({
                          cargo: medio,
                          label: "Estagiário de Nível Médio",
                        });
                      if (graduacao)
                        options.push({
                          cargo: graduacao,
                          label: "Estagiário de Graduação",
                        });
                      if (pos)
                        options.push({
                          cargo: pos,
                          label: "Estagiário de Pós-Graduação",
                        });

                      submenu = (
                        <div className="border-t border-border/40 bg-muted/40">
                          {options.map(({ cargo, label }) => {
                            const active =
                              cargo.id === selectedCargoId && isActiveGroup;
                            return (
                              <button
                                key={cargo.id}
                                type="button"
                                onClick={() => {
                                  setSelectedGroupId(grupo.id);
                                  setOpenGroupId(grupo.id);
                                  setSelectedCargoId(cargo.id);
                                }}
                                className={`w-full text-left px-4 py-2 text-xs border-t border-border/30 first:border-t-0 transition-colors ${
                                  active
                                    ? "bg-primary/90 text-primary-foreground"
                                    : "text-foreground hover:bg-muted"
                                }`}
                              >
                                {label}
                              </button>
                            );
                          })}
                        </div>
                      );
                    } else if (grupo.id === "Assessores") {
                      const especial = allCargos.find(
                        (c) => c.grupo === "Assessor Especial"
                      );
                      const tecnico = allCargos.find(
                        (c) => c.grupo === "Assessor Técnico"
                      );
                      const juridico = allCargos.find(
                        (c) => c.grupo === "Assessor de Defensor (Jurídico)"
                      );

                      const options: { cargo: SalaryCargo; label: string }[] = [];
                      if (especial)
                        options.push({
                          cargo: especial,
                          label: "Assessor Especial",
                        });
                      if (tecnico)
                        options.push({
                          cargo: tecnico,
                          label: "Assessor Técnico",
                        });
                      if (juridico)
                        options.push({
                          cargo: juridico,
                          label: "Assessor de Defensor (Jurídico)",
                        });

                      submenu = (
                        <div className="border-t border-border/40 bg-muted/40">
                          {options.map(({ cargo, label }) => {
                            const active =
                              cargo.id === selectedCargoId && isActiveGroup;
                            return (
                              <button
                                key={cargo.id}
                                type="button"
                                onClick={() => {
                                  setSelectedGroupId(grupo.id);
                                  setOpenGroupId(grupo.id);
                                  setSelectedCargoId(cargo.id);
                                }}
                                className={`w-full text-left px-4 py-2 text-xs border-t border-border/30 first:border-t-0 transition-colors ${
                                  active
                                    ? "bg-primary/90 text-primary-foreground"
                                    : "text-foreground hover:bg-muted"
                                }`}
                              >
                                {label}
                              </button>
                            );
                          })}
                        </div>
                      );
                    }
                  }

                  return (
                    <div
                      key={grupo.id}
                      className="rounded-xl border border-border/60 bg-background/80 overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={handleGroupClick}
                        className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors ${
                          isActiveGroup
                            ? "bg-primary text-primary-foreground"
                            : "text-foreground hover:bg-muted"
                        }`}
                      >
                        <span>{grupo.label}</span>
                        {hasSubmenu && (
                          <>
                            {isExpanded ? (
                              <ChevronDown className="w-4 h-4" />
                            ) : (
                              <ChevronRight className="w-4 h-4" />
                            )}
                          </>
                        )}
                      </button>

                      {submenu}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* GRÁFICO + RESUMO */}
            <div className="space-y-6 md:pl-2">
              {/* filtros de Classe / Nível para grupos grandes */}
              {isClassNivelGroup && classNivelInfo && (
                <div className="mb-2 flex flex-wrap items-center gap-3 text-xs md:text-sm">
                  <span className="font-semibold text-muted-foreground">
                    Escolha a classe e o nível:
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] uppercase tracking-wide text-muted-foreground font-semibold">
                      Classe
                    </span>
                    <select
                      className="rounded-lg border border-border/60 bg-background px-2 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-primary/50"
                      value={classNivelInfo.selectedClasse}
                      onChange={(e) => {
                        const newClasse = e.target.value;
                        const niveis =
                          classNivelInfo.niveisPerClasse[newClasse] || [];
                        const niveisSorted = niveis
                          .slice()
                          .sort((a, b) =>
                            a.localeCompare(b, "pt-BR", {
                              numeric: true,
                              sensitivity: "base",
                            })
                          );
                        const nivelParaNovaClasse = niveisSorted[0];

                        const novoCargo =
                          cargosDoGrupo.find(
                            (c) =>
                              normalizeStr(c.classe) === newClasse &&
                              normalizeStr(c.nivel) === nivelParaNovaClasse
                          ) || cargosDoGrupo[0];

                        if (novoCargo) {
                          setSelectedCargoId(novoCargo.id);
                        }
                      }}
                    >
                      {classNivelInfo.classes.map((cls) => (
                        <option key={cls} value={cls}>
                          {cls}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] uppercase tracking-wide text-muted-foreground font-semibold">
                      Nível
                    </span>
                    <select
                      className="rounded-lg border border-border/60 bg-background px-2 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-primary/50"
                      value={classNivelInfo.selectedNivel}
                      onChange={(e) => {
                        const newNivel = e.target.value;
                        const currentClasse = classNivelInfo.selectedClasse;

                        const novoCargo =
                          cargosDoGrupo.find(
                            (c) =>
                              normalizeStr(c.classe) === currentClasse &&
                              normalizeStr(c.nivel) === newNivel
                          ) || selectedCargo;

                        if (novoCargo) {
                          setSelectedCargoId(novoCargo.id);
                        }
                      }}
                    >
                      {classNivelInfo.niveisForClasse.map((nivel) => (
                        <option key={nivel} value={nivel}>
                          {nivel}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              <div className="h-64 md:h-80">
                {chartData.length > 0 ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData} margin={{ left: 0, right: 8 }}>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        strokeOpacity={0.2}
                      />
                      <XAxis
                        dataKey="label"
                        tick={{ fontSize: 11 }}
                        tickMargin={8}
                      />
                      <YAxis
                        tick={{ fontSize: 11 }}
                        tickFormatter={(v: number) =>
                          formatCurrencyCompact(v).replace(".", ",")
                        }
                        width={70}
                        domain={groupYAxisDomain || ["auto", "auto"]}
                      />
                      <Tooltip
                        formatter={(value: number) => formatCurrency(value)}
                        labelFormatter={(label: string) =>
                          `Início: ${label}`
                        }
                      />
                      <Line
                        type="monotone"
                        dataKey="valor"
                        stroke="hsl(var(--primary))"
                        strokeWidth={3}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      >
                        <LabelList
                          dataKey="valor"
                          content={buildValueLabelRenderer(chartData)}
                        />
                      </Line>
                    </LineChart>
                  </ResponsiveContainer>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Não há dados de evolução salarial para este cargo.
                  </p>
                )}
              </div>

              <div className="space-y-3 text-sm md:text-base">
                {resumo ? (
                  <>
                    <p className="font-semibold">
                      {resumo.titulo}
                      <span className="font-normal text-muted-foreground">
                        {": "}
                        {formatMonthYear(resumo.first.dateIso)} →{" "}
                        {formatMonthYear(resumo.last.dateIso)}
                      </span>
                    </p>
                    <p>
                      <span className="font-semibold">Valor inicial:</span>{" "}
                      {formatCurrency(resumo.first.valor)}
                    </p>
                    <p>
                      <span className="font-semibold">Valor atual:</span>{" "}
                      {formatCurrency(resumo.last.valor)}
                    </p>
                    <p>
                      <span className="font-semibold">
                        Variação nominal:
                      </span>{" "}
                      {formatCurrency(resumo.diffAbs)}{" "}
                      <span
                        className={
                          resumo.diffPerc >= 0
                            ? "text-emerald-600 font-semibold"
                            : "text-red-600 font-semibold"
                        }
                      >
                        ({resumo.diffPerc >= 0 ? "+" : ""}
                        {resumo.diffPerc.toFixed(1)}%)
                      </span>
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Dados extraídos do portal da transparência da Defensoria
                      Pública do Estado de Mato Grosso em {generatedAtBr}.
                    </p>
                  </>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Selecione um cargo para visualizar a evolução salarial.
                  </p>
                )}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CrescimentoSection;
