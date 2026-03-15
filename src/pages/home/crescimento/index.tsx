// src/pages/home/crescimento/index.tsx
import SectionTitle from "@/components/SectionTitle";
import EvolucaoRemuneracaoCard from "./EvolucaoRemuneracaoCard";

const CrescimentoContainer = () => {
  return (
    <section
      id="crescimento-section"
      className="
        py-28
        bg-primary
        scroll-mt-24
        relative
      "
    >
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
        {/* TÍTULO */}
        <SectionTitle
          centered
          titleClassName="text-primary-foreground"
          subtitleClassName="text-primary-foreground/80"
          subtitle="Durante a atuação na gestão como Primeiro Subdefensor Público-Geral e Ordenador de Despesas"
        >
          Crescimento da Defensoria
        </SectionTitle>

        {/* CARD BRANCO */}
        <div className="mt-16">
          <EvolucaoRemuneracaoCard />
        </div>
      </div>
    </section>
  );
};

export default CrescimentoContainer;
