// src/pages/home/ApoiosSection.tsx
import VideoCarousel from "@/components/VideoCarousel";

const ApoiosSection = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Gradiente e textura para fundo verde */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ 
          background: "var(--gradient-primary-textured)",
        }}
        aria-hidden="true"
      />
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ 
          backgroundImage: "var(--texture-grain-primary)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />
      
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        {/* Título e subtítulo em modo “light” sobre fundo escuro */}
        <div className="text-center mb-10 space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-primary-foreground">
            Apoiadores à Candidatura
          </h2>
          <p className="text-sm md:text-base text-primary-foreground/80">
            Depoimentos em vídeo de membros, servidores e colaboradores que entendem que Rogério Borges Freitas é a melhor escolha para a Defensoria Pública do Estado de Mato Grosso.
          </p>
        </div>

        <VideoCarousel />
      </div>
    </section>
  );
};

export default ApoiosSection;
