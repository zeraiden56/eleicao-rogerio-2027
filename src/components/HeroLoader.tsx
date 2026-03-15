import { useEffect, useState } from "react";
import { Loader2, Lightbulb } from "lucide-react";
import { curiosidades, getRandomCuriosidade, type Curiosidade } from "@/data/curiosidades";

interface HeroLoaderProps {
  images: string[];
  onLoadComplete: () => void;
}

/**
 * Componente de loading que aguarda todas as imagens do hero carregarem
 * Exibe curiosidades sobre a campanha durante o carregamento
 */
const HeroLoader = ({ images, onLoadComplete }: HeroLoaderProps) => {
  const [loadedCount, setLoadedCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [curiosidade, setCuriosidade] = useState<Curiosidade>(getRandomCuriosidade());

  useEffect(() => {
    if (images.length === 0) {
      onLoadComplete();
      return;
    }

    let loaded = 0;
    const imagePromises = images.map((src) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.onload = () => {
          loaded++;
          setLoadedCount(loaded);
          resolve();
        };
        img.onerror = () => {
          loaded++;
          setLoadedCount(loaded);
          resolve(); // Continua mesmo se houver erro
        };
        img.src = src;
      });
    });

    Promise.all(imagePromises).then(() => {
      setIsComplete(true);
      // Pequeno delay para animação suave
      setTimeout(() => {
        onLoadComplete();
      }, 500);
    });
  }, [images, onLoadComplete]);

  // Trocar curiosidade a cada 3 segundos
  useEffect(() => {
    if (isComplete) return;
    
    const interval = setInterval(() => {
      setCuriosidade(getRandomCuriosidade());
    }, 3000);

    return () => clearInterval(interval);
  }, [isComplete]);

  if (isComplete) return null;

  const progress = images.length > 0 ? (loadedCount / images.length) * 100 : 100;

  return (
    <div className="fixed inset-0 z-[100] bg-gradient-to-br from-primary via-primary/95 to-primary flex items-center justify-center relative w-screen h-screen">
      {/* Gradiente e textura para loading verde */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ 
          background: "var(--gradient-primary-textured)",
        }}
        aria-hidden="true"
      />
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "var(--texture-grain-primary)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />
      
      <div className="text-center max-w-2xl px-8 relative z-10">
        <Loader2 className="w-16 h-16 md:w-20 md:h-20 text-primary-foreground animate-spin mx-auto mb-6" />
        
        <p className="text-primary-foreground/90 text-base md:text-lg mb-6 font-medium">
          Carregando conteúdo...
        </p>
        
        {/* Barra de progresso */}
        <div className="w-full max-w-md mx-auto h-2 bg-primary-foreground/20 rounded-full overflow-hidden mb-8">
          <div
            className="h-full bg-primary-foreground transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Curiosidade */}
        <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-primary-foreground/20">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
              <Lightbulb className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
            </div>
            <div className="text-left flex-1">
              <p className="text-xs md:text-sm font-semibold text-primary-foreground/70 mb-2 uppercase tracking-wide">
                Você sabia?
              </p>
              <p className="text-sm md:text-base text-primary-foreground leading-relaxed">
                {curiosidade.texto}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroLoader;
