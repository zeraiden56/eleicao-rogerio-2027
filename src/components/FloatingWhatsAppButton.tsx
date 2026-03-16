import { MessageCircle } from "lucide-react";

const waUrl =
  "https://wa.me/5565981237712?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20sobre%20a%20campanha.";

const FloatingWhatsAppButton = () => {
  return (
    <div className="fixed right-6 bottom-6 z-50 flex items-end justify-end">
      {/* Anel de pulso */}
      <span
        className="absolute right-0 bottom-0 w-14 h-14 rounded-full bg-primary/40 animate-ping pointer-events-none"
        aria-hidden="true"
      />

      <a
        href={waUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Fale com a campanha pelo WhatsApp"
        className="
          group relative flex items-center
          rounded-2xl overflow-hidden
          bg-primary text-primary-foreground
          shadow-[0_8px_32px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]
          border border-primary-foreground/10
          transition-all duration-500 ease-in-out
          w-14 h-14
          hover:w-auto hover:pr-5
          focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/60 focus-visible:ring-offset-2
          hover:-translate-y-0.5
        "
      >
        {/* Ícone */}
        <span className="flex-shrink-0 w-14 h-14 flex items-center justify-center relative z-10">
          <MessageCircle className="w-6 h-6" strokeWidth={2} />
        </span>

        {/* Texto expandido no hover */}
        <span
          className="
            flex flex-col justify-center gap-0.5 pl-0 pr-0 py-3
            max-w-0 overflow-hidden whitespace-nowrap
            group-hover:max-w-xs group-hover:pr-1
            transition-all duration-400 ease-out
            opacity-0 group-hover:opacity-100
          "
        >
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary-foreground/70">
            Fale com a campanha
          </span>
          <span className="text-sm font-semibold text-primary-foreground leading-tight">
            WhatsApp
          </span>
        </span>
      </a>
    </div>
  );
};

export default FloatingWhatsAppButton;
