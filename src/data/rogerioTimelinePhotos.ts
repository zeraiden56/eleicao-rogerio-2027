/**
 * Fotos de Rogério (subpastas de public/rogerio) para usar na linha do tempo
 * em História na Defensoria. Ordem aleatória para variedade.
 */
export const ROGERIO_TIMELINE_PHOTOS: string[] = [
  "/rogerio/SELECIONADAS/IMG_7665.jpg",
  "/rogerio/SELECIONADAS/IMG_7655.jpg",
  "/rogerio/SELECIONADAS/IMG_7378.jpg",
  "/rogerio/SELECIONADAS/IMG_8601.jpg",
  "/rogerio/SELECIONADAS/IMG_4949.jpg",
  "/rogerio/SELECIONADAS/IMG_8537.jpg",
  "/rogerio/SELECIONADAS/IMG_1494.jpg",
  "/rogerio/SELECIONADAS/IMG_2530.jpg",
  "/rogerio/SELECIONADAS/IMG_2837.jpg",
  "/rogerio/SELECIONADAS/IMG_2816.jpg",
  "/rogerio/SELECIONADAS/IMG_3042.jpg",
  "/rogerio/SELECIONADAS/IMG_8329.jpg",
  "/rogerio/SELECIONADAS/IMG_2488.jpg",
  "/rogerio/SELECIONADAS/IMG_2799.jpg",
  "/rogerio/SELECIONADAS/IMG_3412.jpg",
  "/rogerio/SELECIONADAS/IMG_4532.jpg",
  "/rogerio/SELECIONADAS/IMG_5194.jpg",
  "/rogerio/SELECIONADAS/IMG_2510.jpg",
  "/rogerio/SELECIONADAS/IMG_7346.jpg",
  "/rogerio/2023/Reunião Conselho/IMG_8058.jpg",
  "/rogerio/2023/Posse Diretor ESDEP/IMG_9328.jpg",
  "/rogerio/2023/Inauguração Pantanal/IMG_1077.jpg",
  "/rogerio/2024/sessão solene DPMT/IMG_4562.jpg",
  "/rogerio/2025/Posse biênio 25-26/IMG_0404.jpg",
  "/rogerio/2022/Encontro dos Defensores/IMG_2810.jpg",
  "/rogerio/2019/Posse escola superior/IMG_6537.jpg",
];

/** Embaralha um array (Fisher-Yates) e retorna nova ordem estável por seed */
function shuffleWithSeed<T>(array: T[], seed: number): T[] {
  const out = [...array];
  let s = seed;
  for (let i = out.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280;
    const j = Math.floor((s / 233280) * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/** Retorna uma lista de fotos para a timeline (uma por item, ordem estável) */
export function getTimelinePhotosForCount(count: number): string[] {
  const shuffled = shuffleWithSeed(ROGERIO_TIMELINE_PHOTOS, 42);
  return Array.from({ length: count }, (_, i) => shuffled[i % shuffled.length]);
}
