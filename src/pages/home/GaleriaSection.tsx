// src/pages/home/GaleriaSection.tsx
import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import { X } from "lucide-react";
import { galleryItems, GalleryItem } from "@/data/gallery";

const GaleriaSection = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <section className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="rounded-3xl border border-border/60 bg-gradient-to-b from-muted/40 via-card to-muted/40 px-6 sm:px-8 py-10 sm:py-12">
          <SectionTitle
            centered
            subtitle="Momentos marcantes da trajetória profissional"
          >
            Galeria de Fotos
          </SectionTitle>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
            {galleryItems.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setSelectedImage(image)}
                className="aspect-square rounded-lg overflow-hidden card-hover fade-in-up bg-card focus:outline-none focus:ring-2 focus:ring-primary/60"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />
              </button>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-8 text-sm">
            Fotos de atendimentos em mutirões, participação em reuniões, cursos
            e eventos institucionais.
          </p>
        </div>
      </div>

      {/* Modal da galeria */}
      {selectedImage && (
        <div className="fixed inset-0 z-[60] bg-black/75 flex items-center justify-center px-4">
          <div className="max-w-4xl w-full bg-background rounded-2xl overflow-hidden shadow-2xl relative">
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 z-10 rounded-full bg-black/40 hover:bg-black/60 text-white p-1.5"
              aria-label="Fechar imagem"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative w-full pt-[56.25%] bg-black">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>

            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">
                {selectedImage.alt}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GaleriaSection;
