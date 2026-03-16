// src/pages/home/HeroPhotoStrips.tsx
import { useEffect } from "react";
import { heroPhotos } from "@/data/heroPhotos";
import LazyImage from "@/components/LazyImage";

const rotateArray = <T,>(arr: T[], offset: number): T[] => {
  if (arr.length === 0) return [];
  const mod = ((offset % arr.length) + arr.length) % arr.length;
  return arr.slice(mod).concat(arr.slice(0, mod));
};

const MIN_IMAGES_PER_ROW = 10;

const HeroPhoto: React.FC<{ src: string }> = ({ src }) => {
  return (
    <div
      className="
        relative 
        h-full
        w-40 sm:w-56 md:w-64 lg:w-80 
        rounded-2xl overflow-hidden 
        shadow-md shadow-black/25 
        flex-shrink-0
      "
    >
      <LazyImage
        src={src}
        alt=""
        containerClassName="w-full h-full"
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
};

interface HeroPhotoStripsProps {
  /** Callback chamado após a montagem (não espera imagens carregarem) */
  onReady?: () => void;
}

const HeroPhotoStrips: React.FC<HeroPhotoStripsProps> = ({ onReady }) => {
  // todas as SELECIONADAS estão 1200x800 e comprimidas — usar todas para máxima variedade
  const usablePhotos = heroPhotos;

  // Notifica o pai imediatamente após montagem, sem bloquear renderização
  useEffect(() => {
    onReady?.();
  }, [onReady]);

  if (usablePhotos.length === 0) return null;

  const rows = [
    { animation: "animate-scroll-right-slow" },
    { animation: "animate-scroll-left-fast" },
    { animation: "animate-scroll-right-fast" },
    { animation: "animate-scroll-left-slow" },
  ];

  const rowCount = rows.length;

  // distribui as fotos em "round-robin" entre as linhas (pra não repetir a mesma em linhas diferentes)
  const rowImages: string[][] = Array.from({ length: rowCount }, () => []);
  usablePhotos.forEach((src, index) => {
    rowImages[index % rowCount].push(src);
  });

  return (
    // top coincide com a altura real da navbar: h-20 mobile, h-24 desktop
    <div className="absolute left-0 right-0 top-20 md:top-24 bottom-4 overflow-hidden pointer-events-none">
      <div className="flex h-full flex-col gap-3 py-3">
        {rows.map((row, rowIndex) => {
          let baseImages = rowImages[rowIndex];

          if (!baseImages || baseImages.length === 0) {
            baseImages = usablePhotos;
          }

          // garante que cada faixa tenha imagens suficientes pra ocupar a largura
          let filledImages = [...baseImages];
          while (filledImages.length < MIN_IMAGES_PER_ROW) {
            filledImages = filledImages.concat(baseImages);
          }

          // gira um pouco pra cada linha começar diferente
          const rotated = rotateArray(filledImages, rowIndex * 2);
          const scrollingImages = rotated.concat(rotated); // duplica pra loop contínuo

          return (
            <div key={rowIndex} className="flex-1 flex">
              <div className={`flex items-center gap-3 ${row.animation}`}>
                {scrollingImages.map((src, index) => (
                  <HeroPhoto key={`${rowIndex}-${index}-${src}`} src={src} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroPhotoStrips;
