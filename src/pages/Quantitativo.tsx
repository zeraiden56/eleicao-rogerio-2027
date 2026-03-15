import EvolucaoComposicaoCargosSection from "@/pages/home/crescimento/EvolucaoComposicaoCargosSection";

const QuantitativoPage = () => {
  return (
    <main className="min-h-screen bg-primary py-24 relative">
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
        {/* Header */}
        <header className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Evolução Quantitativa da Defensoria
          </h1>
          <p className="text-primary-foreground/80 text-lg">
            Análise detalhada da composição dos cargos ao longo do tempo,
            comparando o período anterior a 2019 com a reorganização recente das
            carreiras.
          </p>
        </header>

        {/* Card branco com conteúdo técnico */}
        <div className="max-w-7xl mx-auto">
          <EvolucaoComposicaoCargosSection />
        </div>
      </div>
    </main>
  );
};

export default QuantitativoPage;
