import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Search } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-primary via-primary/95 to-primary/90 text-primary-foreground relative">
      {/* Gradiente e textura para footer verde */}
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
      {/* nada de mt-* aqui! */}
      <div className="container mx-auto px-4 py-10 md:py-14 relative z-10">
        {/* Conteúdo principal do rodapé */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr,1.5fr,1.5fr] gap-10 md:gap-12 text-sm">
          {/* Coluna 1 – Sobre */}
          <div>
            <h3 className="text-base font-semibold tracking-wide mb-2">
              Rogério Borges Freitas
            </h3>
            <p className="text-primary-foreground/80 mb-3">
              Candidato a Defensor Público-Geral do Estado de Mato Grosso – Biênio 2026–2028.
            </p>
            <p className="text-primary-foreground/70 text-xs leading-relaxed">
              Experiência na área fim, atuação em gestão e compromisso com o 
              fortalecimento da Defensoria Pública e a proteção dos direitos das 
              pessoas mais vulneráveis.
            </p>
          </div>

          {/* Coluna 2 – Navegação */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] mb-3 text-primary-foreground/70">
              Navegação
            </h4>
            <ul className="space-y-1.5">
              <li>
                <Link
                  to="/"
                  className="text-primary-foreground/85 hover:text-primary-foreground transition-colors"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  to="/propostas"
                  className="text-primary-foreground/85 hover:text-primary-foreground transition-colors"
                >
                  Propostas e Plano de Gestão
                </Link>
              </li>
              <li>
                <Link
                  to="/chapa"
                  className="text-primary-foreground/85 hover:text-primary-foreground transition-colors"
                >
                  Nossa Chapa
                </Link>
              </li>
              <li>
                <Link
                  to="/formacao"
                  className="text-primary-foreground/85 hover:text-primary-foreground transition-colors"
                >
                  Formação
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3 – Contato */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] mb-3 text-primary-foreground/70">
              Contato
            </h4>
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4" />
                <span className="text-primary-foreground/85">
                  contato@campanharogerio.com.br
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4" />
                <span className="text-primary-foreground/85">
                  (65) 98123-7712
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4" />
                <span className="text-primary-foreground/85">
                  Cuiabá – Mato Grosso
                </span>
              </div>
            </div>

            {/* Ícones sociais */}
            <div className="flex items-center gap-3 mt-5">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/rogerioborgesfreitas"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              {/* “Buscar / site” – só pra compor visualmente */}
              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent("openGlobalSearch"))}
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Abrir busca no site"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Linha de copyright */}
        <div className="border-t border-primary-foreground/25 mt-10 pt-4 text-center text-xs text-primary-foreground/75">
          <p>© 2026 Rogério Borges Freitas – Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
