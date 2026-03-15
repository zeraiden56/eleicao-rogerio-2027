import { useState, useCallback } from "react";

export interface Eixo {
  id: string;
  title: string;
  description: string;
  items: string[];
  icon: any;
}

/**
 * Hook para gerenciar o eixo ativo no PlanoDeGestao
 * Centraliza a lógica de seleção e facilita testes
 */
export const useEixoAtivo = (eixos: Eixo[], initialEixoId?: string) => {
  const [ativo, setAtivo] = useState<Eixo>(
    initialEixoId
      ? eixos.find((e) => e.id === initialEixoId) || eixos[0]
      : eixos[0]
  );

  const selecionarEixo = useCallback(
    (eixoId: string) => {
      const eixo = eixos.find((e) => e.id === eixoId);
      if (eixo) {
        setAtivo(eixo);
      }
    },
    [eixos]
  );

  const proximoEixo = useCallback(() => {
    const currentIndex = eixos.findIndex((e) => e.id === ativo.id);
    const nextIndex = (currentIndex + 1) % eixos.length;
    setAtivo(eixos[nextIndex]);
  }, [ativo.id, eixos]);

  const eixoAnterior = useCallback(() => {
    const currentIndex = eixos.findIndex((e) => e.id === ativo.id);
    const prevIndex = (currentIndex - 1 + eixos.length) % eixos.length;
    setAtivo(eixos[prevIndex]);
  }, [ativo.id, eixos]);

  return {
    ativo,
    selecionarEixo,
    proximoEixo,
    eixoAnterior,
    totalEixos: eixos.length,
    indiceAtual: eixos.findIndex((e) => e.id === ativo.id),
  };
};
