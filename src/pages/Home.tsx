// src/pages/Home.tsx
import { useScrollToTopOnMount } from "@/hooks/useScrollToTopOnMount";
import HeroSection from "./home/HeroSection";
import EquipeSection from "./home/EquipeSection";
import GestaoResultadosSection from "./home/GestaoResultadosSection";
import CrescimentoContainer from "./home/crescimento";
import QuantitativoContainer from "./home/quantitativo";
import ApoiosSection from "./home/ApoiosSection";
import DepoimentosSection from "./home/DepoimentosSection";
import CtaFinalSection from "./home/CtaFinalSection";
import ResumoQuantitativoSection from "./home/ResumoQuantitativoSection";
import SectionTransition from "@/components/SectionTransition";

const Home = () => {
  useScrollToTopOnMount();
  return (
    <div className="min-h-screen">
      {/* 1. Liderança - VERDE */}
      <HeroSection />

      {/* 2. Equipe de gestão - VERDE (mantém verde) */}
      <div className="reveal-left">
        <EquipeSection />
      </div>

      {/* 3. Prova de gestão - VERDE → BRANCO (com transição suave) */}
      <SectionTransition fromColor="green" toColor="white">
        <div className="reveal-right">
          <GestaoResultadosSection />
        </div>
      </SectionTransition>

      {/* 4. Dados e crescimento - BRANCO → VERDE (com transição suave) */}
      <SectionTransition fromColor="white" toColor="green">
        <div className="reveal-left">
          <CrescimentoContainer />
        </div>
      </SectionTransition>
      
      {/* Resumo Quantitativo - VERDE → BRANCO (com transição suave) */}
      <SectionTransition fromColor="green" toColor="white">
        <div className="reveal-right">
          <ResumoQuantitativoSection />
        </div>
      </SectionTransition>

      {/* 5. Validação política - BRANCO → VERDE (com transição suave) */}
      <SectionTransition fromColor="white" toColor="green">
        <div className="reveal-left">
          <ApoiosSection />
        </div>
      </SectionTransition>

      {/* 6. Validação humana - VERDE → BRANCO (com transição suave) */}
      <SectionTransition fromColor="green" toColor="white">
        <div className="reveal-right">
          <DepoimentosSection />
        </div>
      </SectionTransition>

      {/* 7. Convite final - BRANCO → VERDE (com transição suave) */}
      <SectionTransition fromColor="white" toColor="green">
        <div className="reveal-up">
          <CtaFinalSection />
        </div>
      </SectionTransition>
    </div>
  );
};

export default Home;
