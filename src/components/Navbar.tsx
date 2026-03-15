// src/components/Navbar.tsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  Users,
  History,
  Briefcase,
  GraduationCap,
  Target,
  Gavel,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import GlobalSearch from "@/components/GlobalSearch";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  
  // Atalho de teclado para busca (Ctrl+K ou Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === "Escape") {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Abrir busca a partir do footer ou outros componentes
  useEffect(() => {
    const openSearch = () => setIsSearchOpen(true);
    window.addEventListener("openGlobalSearch", openSearch);
    return () => window.removeEventListener("openGlobalSearch", openSearch);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Propostas e Eixos em uma única página; scroll ao topo ao clicar em qualquer link
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  };

  const navItems = [
    { path: "/", label: "Início", icon: Home, shortLabel: "Início" },
    { path: "/propostas", label: "Propostas e Eixos", icon: Target, shortLabel: "Propostas" },
    { path: "/chapa", label: "Nossa Chapa", icon: Users, shortLabel: "Chapa" },
    { path: "/historia-na-defensoria", label: "História na Defensoria", icon: History, shortLabel: "História" },
    { path: "/atuacao-nas-gestoes", label: "Atuação nas Gestões", icon: Briefcase, shortLabel: "Gestões" },
    { path: "/atuacao-no-conselho", label: "Atuação no Conselho", icon: Gavel, shortLabel: "Conselho" },
    { path: "/formacao", label: "Formação", icon: GraduationCap, shortLabel: "Formação" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* DESKTOP NAVBAR */}
      <div
        className={`
          hidden lg:block
          transition-all duration-300
          relative
          ${isScrolled ? "bg-gradient-to-r from-primary via-primary/98 to-primary shadow-lg backdrop-blur-sm" : "bg-gradient-to-r from-primary via-primary/95 to-primary"}
        `}
      >
        {/* Gradiente e textura para header verde - SEMPRE */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{ 
            background: "var(--gradient-primary-textured)",
          }}
          aria-hidden="true"
        />
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{ 
            backgroundImage: "var(--texture-grain-primary)",
            backgroundSize: "60px 60px",
          }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center h-20 md:h-24 justify-between">
            <div className="flex items-center space-x-1 flex-1 justify-center">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={scrollToTop}
                    className={`
                      px-5 py-3 rounded-full
                      flex items-center space-x-1.5
                      text-sm font-semibold whitespace-nowrap
                      transition-all duration-300
                      ${
                        isActive
                          ? "bg-primary-foreground text-primary shadow-sm"
                          : "text-primary-foreground/90 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                      }
                    `}
                    title={item.label}
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    <span className="hidden xl:inline">{item.shortLabel}</span>
                  </Link>
                );
              })}
            </div>
            
                  {/* Barra de pesquisa - fundo branco destacado */}
                  <Button
                    variant="ghost"
                    onClick={() => setIsSearchOpen(true)}
                    className="ml-4 bg-white text-foreground hover:bg-white/90 rounded-lg px-5 py-3 border border-border/60 shadow-sm"
                    title="Buscar no site"
                  >
                    <Search className="w-4 h-4 mr-2" />
                    <span className="hidden lg:inline text-sm font-medium">Buscar</span>
                  </Button>
          </div>
        </div>
      </div>
      
      {/* Global Search */}
      <GlobalSearch open={isSearchOpen} onOpenChange={setIsSearchOpen} />

      {/* MOBILE: só a bolinha do sanduíche */}
      <div className="lg:hidden pt-4 px-4 flex justify-end">
        <Button
          variant="ghost"
          size="icon"
          className="
            rounded-full w-11 h-11
            bg-primary/90 text-primary-foreground
            hover:bg-primary
            shadow-lg border border-primary-foreground/20
          "
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* MENU MOBILE DROPDOWN */}
      {isMobileMenuOpen && (
        <div className="lg:hidden px-4 mt-3">
          <div className="rounded-2xl bg-primary shadow-xl border border-primary-foreground/20 py-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    scrollToTop();
                  }}
                  className={`
                    flex items-center space-x-3 px-4 py-3 rounded-xl
                    text-sm font-semibold
                    transition-all duration-300
                    ${
                      isActive
                        ? "bg-primary-foreground text-primary"
                        : "text-primary-foreground/90 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
