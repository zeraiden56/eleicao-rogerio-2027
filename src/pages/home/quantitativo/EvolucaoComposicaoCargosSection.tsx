// src/pages/home/quantitativo/EvolucaoComposicaoCargosSection.tsx
import React, { useMemo, useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  defs,
  linearGradient,
  stop,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import dataJson from "@/data/quantitativo_cargos_2006_2025.json";

const cargoKeys = [
  "Defensores",
  "Analistas",
  "Técnicos Administrativos",
  "Assessores Técnicos",
  "Assessores de Defensor (Jurídicos)",
  "Assessores Especiais",
  "Ajudante Geral",
] as const;

type CargoKey = (typeof cargoKeys)[number];

type RawData = Record<string, Record<CargoKey, number>>;

type ChartRow = { year: string } & Record<CargoKey, number>;

const raw = dataJson as RawData;

const chartData: ChartRow[] = Object.entries(raw)
  .sort(([a], [b]) => Number(a) - Number(b))
  .map(([year, cargos]) => ({ year, ...cargos }));

const colors: Record<CargoKey, string> = {
  Defensores: "#15803d",
  Analistas: "#2563eb",
  "Técnicos Administrativos": "#ea580c",
  "Assessores Técnicos": "#16a34a",
  "Assessores de Defensor (Jurídicos)": "#9333ea",
  "Assessores Especiais": "#dc2626",
  "Ajudante Geral": "#64748b",
};

type Stats = {
  avgPre2019: number;
  avgFrom2019: number;
  q2019: number;
  q2025: number;
  absDelta: number;
  relDelta: number | null;
};

const computeStats = (cargo: CargoKey): Stats => {
  const avg = (vals: number[]) =>
    vals.length ? vals.reduce((a, v) => a + v, 0) / vals.length : 0;

  const avgPre2019 = avg(
    chartData.filter((r) => Number(r.year) < 2019).map((r) => r[cargo])
  );
  const avgFrom2019 = avg(
    chartData.filter((r) => Number(r.year) >= 2019).map((r) => r[cargo])
  );
  const q2019 = chartData.find((r) => r.year === "2019")?.[cargo] ?? 0;
  const q2025 = chartData.find((r) => r.year === "2025")?.[cargo] ?? 0;
  const absDelta = q2025 - q2019;
  const relDelta = q2019 > 0 ? (absDelta / q2019) * 100 : null;

  return { avgPre2019, avgFrom2019, q2019, q2025, absDelta, relDelta };
};

const StatCard: React.FC<{
  label: string;
  value: string;
  trend?: "up" | "down" | "neutral";
  description?: string;
}> = ({ label, value, trend, description }) => {
  const TrendIcon =
    trend === "up" ? TrendingUp : trend === "down" ? TrendingDown : Minus;
  const trendColor =
    trend === "up"
      ? "text-emerald-600"
      : trend === "down"
      ? "text-red-500"
      : "text-muted-foreground";

  return (
    <Card className="border-border bg-card shadow-sm">
      <CardContent className="p-4 sm:p-5">
        <div className="flex items-start justify-between mb-1.5">
          <p className="text-xs sm:text-sm font-medium text-muted-foreground">
            {label}
          </p>
          {trend && <TrendIcon className={`h-4 w-4 ${trendColor}`} />}
        </div>
        <p className="text-xl sm:text-2xl font-bold text-foreground mb-0.5">
          {value}
        </p>
        {description && (
          <p className="text-[11px] sm:text-xs text-muted-foreground">
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

const EvolucaoComposicaoCargosSection: React.FC = () => {
  const [selectedCargo, setSelectedCargo] = useState<CargoKey>("Defensores");

  const stats = useMemo(() => computeStats(selectedCargo), [selectedCargo]);

  // Eixo Y proporcional ao cargo selecionado
  const yDomain = useMemo<[number, number]>(() => {
    const values = chartData.map((row) => row[selectedCargo]);
    const maxVal = Math.max(...values);
    return [0, Math.ceil(maxVal * 1.15)];
  }, [selectedCargo]);

  const color = colors[selectedCargo];

  const getTrend = (value: number): "up" | "down" | "neutral" => {
    if (value > 0.5) return "up";
    if (value < -0.5) return "down";
    return "neutral";
  };

  return (
    <section className="w-full space-y-6">
      <Card className="p-6 md:p-8 lg:p-10 bg-card/95 border border-border/60 shadow-sm rounded-2xl">
        {/* Cabeçalho */}
        <div className="flex flex-col items-center text-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold">
              Evolução do número de cargos
            </h3>
            <p className="text-sm text-muted-foreground mt-1 max-w-2xl mx-auto">
              Selecione um cargo para ver sua evolução histórica de 2006 a 2025.
              A linha pontilhada marca 2019, quando a reorganização das carreiras
              começa a aparecer.
            </p>
          </div>
          <span className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-[11px] sm:text-xs font-medium text-muted-foreground">
            Série histórica 2006–2025 · valores absolutos
          </span>
        </div>

        <CardContent className="space-y-8 p-0">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Filtro vertical — desktop */}
            <div className="hidden md:flex md:flex-col md:w-56 shrink-0 gap-2 pt-1">
              {cargoKeys.map((cargo) => (
                <Button
                  key={cargo}
                  type="button"
                  size="sm"
                  variant={selectedCargo === cargo ? "default" : "outline"}
                  onClick={() => setSelectedCargo(cargo)}
                  className="justify-start whitespace-normal text-left font-medium"
                >
                  {cargo}
                </Button>
              ))}
            </div>

            {/* Gráfico */}
            <div className="flex-1 space-y-4">
              {/* Filtro horizontal — mobile */}
              <div className="-mx-2 overflow-x-auto pt-1 md:hidden">
                <div className="flex w-max gap-2 px-2 mb-3">
                  {cargoKeys.map((cargo) => (
                    <Button
                      key={cargo}
                      type="button"
                      size="sm"
                      variant={selectedCargo === cargo ? "default" : "outline"}
                      onClick={() => setSelectedCargo(cargo)}
                      className="whitespace-nowrap font-medium"
                    >
                      {cargo}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="h-[260px] sm:h-[320px] md:h-[380px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={chartData}
                    margin={{ top: 5, right: 16, left: 0, bottom: 5 }}
                  >
                    <defs>
                      <linearGradient id="cargoFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={color} stopOpacity={0.25} />
                        <stop offset="90%" stopColor={color} stopOpacity={0.03} />
                      </linearGradient>
                    </defs>

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis
                      dataKey="year"
                      tick={{ fontSize: 11 }}
                      tickMargin={6}
                      tickLine={{ stroke: "hsl(var(--border))" }}
                    />
                    <YAxis
                      tick={{ fontSize: 11 }}
                      tickMargin={6}
                      tickLine={{ stroke: "hsl(var(--border))" }}
                      domain={yDomain}
                      allowDataOverflow={false}
                    />

                    <Tooltip
                      formatter={(value: unknown) =>
                        [`${Number(value).toLocaleString("pt-BR")} pessoas`, selectedCargo]
                      }
                      labelFormatter={(label) => `Ano ${label}`}
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: 8,
                        padding: 10,
                      }}
                      labelStyle={{
                        color: "hsl(var(--foreground))",
                        fontWeight: 600,
                        marginBottom: 4,
                      }}
                      itemStyle={{ color }}
                    />

                    <ReferenceLine
                      x="2019"
                      stroke="hsl(var(--muted-foreground))"
                      strokeDasharray="4 4"
                      strokeWidth={1.5}
                      label={{
                        value: "2019",
                        position: "insideTopRight",
                        fill: "hsl(var(--muted-foreground))",
                        fontSize: 11,
                        fontWeight: 600,
                      }}
                    />

                    {/* Área de preenchimento sob a linha */}
                    <Area
                      type="monotone"
                      dataKey={selectedCargo}
                      stroke="transparent"
                      fill="url(#cargoFill)"
                      fillOpacity={1}
                      isAnimationActive={false}
                    />

                    {/* Linha do cargo selecionado — única visível */}
                    <Line
                      type="monotone"
                      dataKey={selectedCargo}
                      name={selectedCargo}
                      stroke={color}
                      strokeWidth={3}
                      dot={{ r: 3.5, fill: color, strokeWidth: 0 }}
                      activeDot={{ r: 5, strokeWidth: 2 }}
                      isAnimationActive={false}
                      label={{
                        position: "top",
                        fontSize: 10,
                        fill: "hsl(var(--foreground))",
                        formatter: (value: number) =>
                          Number(value).toLocaleString("pt-BR"),
                      }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Estatísticas do cargo selecionado */}
          <div className="pt-4 border-t border-border">
            <h3 className="text-sm sm:text-base font-semibold text-foreground mb-3">
              Estatísticas do cargo selecionado —{" "}
              <span style={{ color }}>{selectedCargo}</span>
            </h3>
            <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard
                label="Média antes de 2019"
                value={`${stats.avgPre2019.toFixed(1)} pessoas`}
                description="Período 2006–2018"
              />
              <StatCard
                label="Média de 2019 em diante"
                value={`${stats.avgFrom2019.toFixed(1)} pessoas`}
                description="Período 2019–2025"
              />
              <StatCard
                label="Variação absoluta"
                value={`${stats.absDelta >= 0 ? "+" : ""}${stats.absDelta.toFixed(0)} pessoas`}
                trend={getTrend(stats.absDelta)}
                description="2019 → 2025"
              />
              <StatCard
                label="Variação relativa"
                value={
                  stats.relDelta === null
                    ? "—"
                    : `${stats.relDelta >= 0 ? "+" : ""}${stats.relDelta
                        .toFixed(1)
                        .replace(".", ",")}%`
                }
                trend={stats.relDelta !== null ? getTrend(stats.relDelta) : undefined}
                description="Crescimento sobre 2019"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default EvolucaoComposicaoCargosSection;
