// src/pages/home/CtaFinalSection.tsx
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CtaFinalSection = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground relative">
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
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Juntos por uma Defensoria ainda mais forte
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Conheça as propostas e o plano de gestão para os próximos anos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/propostas">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto text-lg">
              Ver Propostas e Plano de Gestão
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaFinalSection;
