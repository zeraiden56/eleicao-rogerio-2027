// src/pages/home/NoticiasSection.tsx
import SectionTitle from "@/components/SectionTitle";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { newsItems } from "@/data/news";

const NoticiasSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container max-w-6xl mx-auto px-4">
        <SectionTitle
          centered
          subtitle="Cobertura da imprensa e matérias sobre a atuação"
        >
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
              <div className="relative h-36 -mx-6 -mt-6 mb-4 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="flex-1 flex flex-col px-2 pb-2">
                <p className="text-sm text-primary font-semibold mb-2">
                  {item.displayDate}
                </p>
                <h3 className="text-lg font-bold mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {item.summary}
                </p>
                <div className="mt-auto">
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
  );
};

export default NoticiasSection;
