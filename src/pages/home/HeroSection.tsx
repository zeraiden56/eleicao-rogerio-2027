// src/pages/home/HeroSection.tsx
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { BookOpen, Target, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import HeroPhotoStrips from "./HeroPhotoStrips";
import HeroLoader from "@/components/HeroLoader";
import { heroPhotos } from "@/data/heroPhotos";
import LazyImage from "@/components/LazyImage";

const HeroSection = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  // Imagens do hero: foto principal + fotos do mural
  const heroImages = [
    "/rogerio.jpeg",
    ...heroPhotos.slice(0, 24), // Primeiras 24 para não pesar demais
  ];
  const handleScrollToGrowth = () => {
    const el = document.getElementById("crescimento-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {!imagesLoaded && (
        <HeroLoader images={heroImages} onLoadComplete={() => setImagesLoaded(true)} />
      )}
      
      <section 
        className={`relative min-h-[90vh] flex items-center justify-center overflow-hidden transition-opacity duration-500 ${
          imagesLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* base em verde com gradiente melhorado */}
        <div
          className="absolute inset-0 z-0"
          style={{ 
            background: "var(--gradient-primary-textured)",
          }}
        />

        {/* Textura granulada para fundo verde */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "var(--texture-grain-primary)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* mural de fotos */}
        {imagesLoaded && (
          <div className="absolute inset-0 z-0 opacity-80">
            <HeroPhotoStrips />
          </div>
        )}

        {/* overlay para contraste com gradiente melhorado */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/0 via-black/30 to-black/60" />

      {/* conteúdo principal */}
      <div className="container mx-auto px-4 z-10 relative pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Foto do candidato */}
          <div
            className="
              w-[21rem] h-[21rem]
              md:w-[27rem] md:h-[27rem]
              lg:w-[30rem] lg:h-[30rem]
              mx-auto mb-2 rounded-full
              flex items-center justify-center
            "
          >
            <div className="w-[86%] h-[86%] rounded-full border-[6px] overflow-hidden">
              <LazyImage
                src="/rogerio.jpeg"
                alt="Dr. Rogério Borges Freitas"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Nome */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] mb-4 fade-in-up">
            Dr. Rogério Borges Freitas
          </h1>

          {/* Mensagem central */}
          <div className="mb-6 fade-in-up stagger-1">
            <p className="text-lg md:text-2xl font-semibold text-primary-foreground drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
              Continuidade, responsabilidade e foco na atividade-fim.
            </p>
            <span className="mt-2 inline-block text-sm md:text-base text-primary-foreground/80 tracking-wide">
              Candidato ao Biênio 2026 – 2028
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up stagger-3">
            <Link to="/propostas">
              <Button
                size="lg"
                className="w-full sm:w-auto text-lg bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Target className="w-5 h-5 mr-2" />
                Conheça as Propostas e o Plano
              </Button>
            </Link>

            <Link to="/historia-na-defensoria">
              <Button
                size="lg"
                variant="outline"
                className="
                  w-full sm:w-auto text-lg
                  bg-primary-foreground text-primary
                  border-primary-foreground
                  hover:bg-primary-foreground/90 hover:text-primary
                "
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Veja a trajetória
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicador discreto */}
      <button
        type="button"
        onClick={handleScrollToGrowth}
        aria-label="Ver resultados da gestão"
        className="
          absolute left-1/2 bottom-5 -translate-x-1/2
          z-20
          flex items-center justify-center
          w-11 h-11
          rounded-full
          bg-background/70
          text-foreground
          shadow-md
          hover:bg-background
          transition-colors
        "
      >
        <ChevronDown className="w-5 h-5" />
      </button>
    </section>
    </>
  );
};

export default HeroSection;
