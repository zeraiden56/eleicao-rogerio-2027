// src/pages/Home.tsx
import { useScrollToTopOnMount } from "@/hooks/useScrollToTopOnMount";
import HeroSection from "./home/HeroSection";
import ResumoQuantitativoSection from "./home/ResumoQuantitativoSection";
import EquipeSection from "./home/EquipeSection";
import CrescimentoContainer from "./home/crescimento";
import ComarcasSection from "./home/ComarcasSection";
import SelosSection from "./home/SelosSection";
import PropostasPreviewSection from "./home/PropostasPreviewSection";
import CtaFinalSection from "./home/CtaFinalSection";
import SectionTransition from "@/components/SectionTransition";

/**
 * Ordem da Home:
 * 1. Hero (verde)
 * 2. Equipe (verde)
 * 3. Evolução Quantitativa (branco)
 * 4. Crescimento da Defensoria (verde)
 * 5. Marco Histórico: 79 comarcas (branco)
 * 6. Selos e Premiações (verde)
 * 7. Propostas / Eixos preview (branco)
 * 8. CTA Final (verde)
 */
const Home = () => {
  useScrollToTopOnMount();
  return (
    <div className="min-h-screen">
      {/* 1. Hero - VERDE */}
      <HeroSection />

      {/* 2. Equipe de gestão - VERDE → VERDE */}
      <SectionTransition fromColor="green" toColor="green">
        <div className="reveal-up">
          <EquipeSection />
        </div>
      </SectionTransition>

      {/* 3. Evolução quantitativa - VERDE → BRANCO */}
      <SectionTransition fromColor="green" toColor="white">
        <div className="reveal-up">
          <ResumoQuantitativoSection />
        </div>
      </SectionTransition>

      {/* 4. Crescimento da Defensoria - BRANCO → VERDE */}
      <SectionTransition fromColor="white" toColor="green">
        <div className="reveal-left">
          <CrescimentoContainer />
        </div>
      </SectionTransition>

      {/* 5. Marco 79 comarcas - VERDE → BRANCO */}
      <SectionTransition fromColor="green" toColor="white">
        <div className="reveal-up">
          <ComarcasSection />
        </div>
      </SectionTransition>

      {/* 6. Selos e Premiações - BRANCO → VERDE */}
      <SectionTransition fromColor="white" toColor="green">
        <SelosSection />
      </SectionTransition>

      {/* 7. Propostas / Eixos preview - VERDE → BRANCO */}
      <SectionTransition fromColor="green" toColor="white">
        <div className="reveal-up">
          <PropostasPreviewSection />
        </div>
      </SectionTransition>

      {/* 8. CTA Final - BRANCO → VERDE */}
      <SectionTransition fromColor="white" toColor="green">
        <div className="reveal-up">
          <CtaFinalSection />
        </div>
      </SectionTransition>
    </div>
  );
};

export default Home;
