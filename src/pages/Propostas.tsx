import SectionTitle from "@/components/SectionTitle";
import SectionContainer from "@/components/SectionContainer";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useEixoAtivo } from "@/hooks/useEixoAtivo";
import { useScrollToTopOnMount } from "@/hooks/useScrollToTopOnMount";
import EixoCard from "@/components/EixoCard";
import EixoDetalhe from "@/components/EixoDetalhe";
import { EIXOS } from "@/data/eixos";

const Propostas = () => {
  useScrollToTopOnMount();
  const {
    ativo,
    selecionarEixo,
    proximoEixo,
    eixoAnterior,
    totalEixos,
    indiceAtual,
  } = useEixoAtivo(EIXOS);

  return (
    <main className="min-h-screen pt-24">
      {/* Eixos – FUNDO VERDE */}
      <SectionContainer background="primary" padding="md" maxWidth="xl">
        {/* Título + download integrados */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <SectionTitle
            centered
            titleClassName="text-primary-foreground"
            subtitleClassName="text-primary-foreground/80"
            subtitle="Plano de Gestão 2027–2028 — clique em um eixo para ver as propostas detalhadas"
          >
            Propostas e Eixos
          </SectionTitle>
          <div className="flex justify-center mt-6">
            <Button
              size="lg"
              variant="secondary"
              asChild
            >
              <a
                href="/pdf/plano-de-gestao.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="w-5 h-5 mr-2" />
                Baixar Plano de Gestão (PDF)
              </a>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {EIXOS.map((eixo, index) => (
            <EixoCard
              key={eixo.id}
              id={eixo.id}
              title={eixo.title}
              order={index + 1}
              isActive={ativo.id === eixo.id}
              onClick={() => selecionarEixo(eixo.id)}
            />
          ))}
        </div>
      </SectionContainer>

      {/* Detalhe do eixo ativo – FUNDO CLARO */}
      <SectionContainer background="default" padding="md" maxWidth="xl">
        <EixoDetalhe
          icon={ativo.icon}
          title={ativo.title}
          description={ativo.description}
          items={ativo.items}
          onPrevious={eixoAnterior}
          onNext={proximoEixo}
          hasPrevious={indiceAtual > 0}
          hasNext={indiceAtual < totalEixos - 1}
          currentIndex={indiceAtual}
          total={totalEixos}
        />
      </SectionContainer>
    </main>
  );
};

export default Propostas;
