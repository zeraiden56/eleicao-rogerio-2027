// src/pages/home/HeroSection.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BookOpen, Target, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import HeroPhotoStrips from "./HeroPhotoStrips";
import LazyImage from "@/components/LazyImage";

/**
 * HeroSection sem HeroLoader bloqueante.
 * A foto principal é carregada com prioridade (fetchpriority="high").
 * O mural de fotos é montado em paralelo e fica visível só após o hero renderizar.
 * Isso evita que o usuário veja uma tela em branco enquanto 24+ fotos carregam.
 */
const HeroSection = () => {
  const [muralVisible, setMuralVisible] = useState(false);

  const handleScrollToGrowth = () => {
    const el = document.getElementById("crescimento-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* base em verde com gradiente */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "var(--gradient-primary-textured)",
        }}
      />

      {/* Textura granulada */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "var(--texture-grain-primary)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Mural de fotos — renderizado imediatamente, visibilidade controlada por CSS */}
      <div
        className="absolute inset-0 z-0 transition-opacity duration-700"
        style={{ opacity: muralVisible ? 0.8 : 0 }}
        aria-hidden="true"
      >
        <HeroPhotoStrips onReady={() => setMuralVisible(true)} />
      </div>

      {/* overlay para contraste */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/0 via-black/30 to-black/60" />

      {/* conteúdo principal */}
      <div className="container mx-auto px-4 z-10 relative pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Foto do candidato — alta prioridade */}
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
                fetchPriority="high"
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
              Candidato ao Biênio 2027 – 2028
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

    </section>
  );
};

export default HeroSection;
