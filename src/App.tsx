import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import SearchHighlighter from "./components/SearchHighlighter";
import Footer from "./components/Footer";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton";
import PageTransition from "./components/PageTransition";
import { useRevealOnScrollSide } from "@/hooks/useRevealOnScrollSide";

import Home from "./pages/Home";
import HistoriaNaDefensoria from "./pages/HistoriaNaDefensoria";
import AtuacaoNasGestoes from "./pages/AtuacaoNasGestoes";
import AtuacaoNoConselho from "./pages/AtuacaoNoConselho";
import Formacao from "./pages/Formacao";
import Lattes from "./pages/Lattes";
import Propostas from "./pages/Propostas";
import Noticias from "./pages/Noticias";
import NoticiaDetalhe from "./pages/NoticiaDetalhe";
import NotFound from "./pages/NotFound";
import Chapa from "./pages/Chapa";

// 👉 IMPORTANTE: importar a página Quantitativo
import QuantitativoPage from "./pages/home/quantitativo";


const queryClient = new QueryClient();

const AppContent = () => {
  useRevealOnScrollSide();
  return (
    <>
      <ScrollToTop />
      <SearchHighlighter />
      <div className="flex flex-col min-h-screen">
        <Navbar />

          <main className="flex-1 pb-24 md:pb-0">
            <PageTransition>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/plano-de-gestao" element={<Navigate to="/propostas" replace />} />
                <Route
                  path="/historia-na-defensoria"
                  element={<HistoriaNaDefensoria />}
                />
                <Route
                  path="/atuacao-nas-gestoes"
                  element={<AtuacaoNasGestoes />}
                />
                <Route
                  path="/atuacao-no-conselho"
                  element={<AtuacaoNoConselho />}
                />
                <Route path="/formacao" element={<Formacao />} />
                <Route path="/lattes" element={<Lattes />} />
                <Route path="/propostas" element={<Propostas />} />
                <Route path="/chapa" element={<Chapa />} />
                <Route path="/noticias" element={<Noticias />} />
                <Route path="/noticias/:slug" element={<NoticiaDetalhe />} />

                {/* ✅ NOVA ROTA */}
                <Route path="/quantitativo" element={<QuantitativoPage />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </PageTransition>
          </main>

        <Footer />
      </div>
      <FloatingWhatsAppButton />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
