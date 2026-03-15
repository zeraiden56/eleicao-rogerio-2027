// src/pages/NoticiaDetalhe.tsx
import { useParams, Link } from "react-router-dom";
import { getNewsBySlug } from "@/data/news";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useScrollToTopOnMount } from "@/hooks/useScrollToTopOnMount";

const NoticiaDetalhe = () => {
  useScrollToTopOnMount();
  const { slug } = useParams<{ slug: string }>();
  const noticia = slug ? getNewsBySlug(slug) : undefined;

  if (!noticia) {
    return (
      <div className="min-h-screen pt-24 pb-20 flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">Notícia não encontrada</h1>
          <p className="text-muted-foreground">
            O conteúdo que você tentou acessar não está disponível.
          </p>
          <Button asChild>
            <Link to="/noticias">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para notícias
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const coverImage = noticia.images?.[0]?.src ?? noticia.image;
  const coverAlt = noticia.images?.[0]?.alt ?? noticia.title;
  const extraImages = noticia.images?.slice(1) ?? [];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-background">
      {/* Corpo da notícia */}
      <section className="pt-6 md:pt-8">
        <div className="container mx-auto px-4 max-w-5xl space-y-10">
          {/* Cabeçalho simples */}
          <div className="space-y-5">
            <Button
              variant="ghost"
              className="px-0 hover:bg-transparent text-primary"
              asChild
            >
              <Link to="/noticias">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar para notícias
              </Link>
            </Button>

            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3 text-xs font-medium">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary uppercase tracking-wide">
                  Notícias
                </span>
                <span className="text-muted-foreground">
                  {noticia.displayDate}
                </span>
                {noticia.author && (
                  <>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">
                      Por {noticia.author}
                    </span>
                  </>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                {noticia.title}
              </h1>

              <p className="text-muted-foreground text-base md:text-lg">
                {noticia.summary}
              </p>
            </div>
          </div>

          {/* Capa */}
          <div className="rounded-2xl overflow-hidden shadow-xl bg-muted/40 border border-border/60">
            <img
              src={coverImage}
              alt={coverAlt}
              className="w-full h-[260px] md:h-[360px] lg:h-[420px] object-cover"
            />
          </div>

          {/* Texto */}
          <article className="prose prose-neutral max-w-none dark:prose-invert prose-headings:mt-0 prose-p:text-justify">
            {noticia.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </article>

          {/* Galeria de imagens extras, se houver */}
          {extraImages.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-foreground">
                Imagens relacionadas
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {extraImages.map((img) => (
                  <figure
                    key={img.src}
                    className="rounded-xl overflow-hidden bg-muted border border-border/60"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-64 object-cover"
                    />
                    {img.caption && (
                      <figcaption className="px-4 py-3 text-xs text-muted-foreground">
                        {img.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </div>
          )}

          {/* Botão voltar no final */}
          <div className="pt-4 border-t border-border/40 flex justify-center">
            <Button variant="outline" asChild>
              <Link to="/noticias">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Ver todas as notícias
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NoticiaDetalhe;
