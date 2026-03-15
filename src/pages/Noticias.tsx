// src/pages/Noticias.tsx
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";
import { newsItems } from "@/data/news";
import { Link } from "react-router-dom";
import { useScrollToTopOnMount } from "@/hooks/useScrollToTopOnMount";

const Noticias = () => {
  useScrollToTopOnMount();
  return (
    <div className="min-h-screen pt-24 pb-20 bg-secondary/20">
      <section className="py-10">
        <div className="container mx-auto px-4">
          <SectionTitle centered subtitle="Cobertura da imprensa e matérias sobre a atuação">
            Notícias
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {newsItems.map((item, index) => (
              <Card
                key={item.slug}
                className="card-hover fade-in-up bg-card/95 border border-border/60 overflow-hidden flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Imagem de capa */}
                <div className="relative h-40 -mx-6 -mt-6 mb-4 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="flex-1 flex flex-col">
                  <p className="text-sm text-primary font-semibold mb-2 px-2">
                    {item.displayDate}
                  </p>
                  <h3 className="text-lg font-bold mb-3 line-clamp-2 px-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3 px-2">
                    {item.summary}
                  </p>

                  <div className="px-2 pb-2 mt-auto">
                    <Button
                      variant="link"
                      className="p-0 h-auto text-primary"
                      asChild
                    >
                      <Link to={`/noticias/${item.slug}`}>Ler mais →</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Noticias;
