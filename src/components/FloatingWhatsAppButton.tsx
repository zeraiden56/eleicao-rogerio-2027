import { MessageCircle } from "lucide-react";

const waUrl =
  "https://wa.me/5565981237712?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20sobre%20a%20campanha.";

const FloatingWhatsAppButton = () => {
  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed right-6 bottom-6 z-50 flex items-center rounded-full w-14 h-14 bg-primary text-primary-foreground shadow-xl shadow-black/30 border border-primary-foreground/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background
        group overflow-hidden
        transition-all duration-500 ease-in-out
        hover:w-[320px] hover:min-w-[320px] hover:rounded-2xl hover:-translate-y-0.5
        focus-visible:w-[320px] focus-visible:min-w-[320px] focus-visible:rounded-2xl"
      aria-label="Fale com a campanha pelo WhatsApp"
    >
      <span className="flex-shrink-0 w-14 h-14 flex items-center justify-center">
        <MessageCircle className="w-7 h-7" strokeWidth={2} />
      </span>
      <span
        className="flex flex-col justify-center gap-0.5 pl-0 pr-4 py-2.5 min-w-[256px] text-left
          opacity-0 scale-x-0 origin-left
          group-hover:opacity-100 group-hover:scale-x-100
          group-focus-visible:opacity-100 group-focus-visible:scale-x-100
          transition-[opacity,transform] duration-400 ease-out delay-100"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-primary-foreground/80 whitespace-nowrap">
          Fale com a campanha
        </span>
        <span className="text-sm font-semibold text-primary-foreground leading-snug break-words">
          Dúvidas, sugestões ou mensagens de apoio
        </span>
      </span>
    </a>
  );
};

export default FloatingWhatsAppButton;
