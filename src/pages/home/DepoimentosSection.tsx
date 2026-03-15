// src/pages/home/DepoimentosSection.tsx
import SectionTitle from "@/components/SectionTitle";
import TestimonialCarousel from "@/components/TestimonialCarousel";

const DepoimentosSection = () => {
  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle centered subtitle="Palavras de apoio de quem conhece o trabalho de perto">
          Depoimentos
        </SectionTitle>
        <div className="mt-12">
          <TestimonialCarousel />
        </div>
      </div>
    </section>
  );
};

export default DepoimentosSection;
