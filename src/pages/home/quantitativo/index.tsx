import EvolucaoComposicaoCargosSection from "./EvolucaoComposicaoCargosSection";
import { useScrollToTopOnMount } from "@/hooks/useScrollToTopOnMount";

const QuantitativoPage = () => {
  useScrollToTopOnMount();
  return (
    <section className="py-28 bg-primary scroll-mt-24 relative">
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
      
      <div className="container mx-auto px-4 relative z-10">
        {/* TÍTULO NO FUNDO VERDE */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Evolução Quantitativa da Defensoria
          </h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Visualização da evolução do quadro de cargos ao longo do tempo,
            comparando períodos históricos e a reorganização recente.
          </p>
        </div>

        {/* CARD BRANCO */}
        <EvolucaoComposicaoCargosSection />
      </div>
    </section>
  );
};

export default QuantitativoPage;
