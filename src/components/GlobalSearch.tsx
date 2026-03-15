import { useState, useEffect, useRef, type ReactNode } from "react";
import { FileText, Users, Target, History, Briefcase, Gavel, GraduationCap, BookOpen, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command";
import { searchInContent, type SearchContentItem } from "@/data/searchContent";
import { cn } from "@/lib/utils";

// Mapeamento de ícones por categoria
const categoryIcons: Record<string, any> = {
  "Navegação": Home,
  "Conteúdo": FileText,
  "Equipe": Users,
  "Trajetória": History,
  "Informações": BookOpen,
};

interface GlobalSearchProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

/**
 * Barra de pesquisa global melhorada
 * Busca full-text dentro do conteúdo das páginas (estilo Reddit/GitHub)
 * Case-insensitive, busca em títulos, conteúdo e keywords
 */
const GlobalSearch = ({ open, onOpenChange }: GlobalSearchProps) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      // Foca no input quando abre
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      setSearch("");
    }
  }, [open]);

  // Busca no índice de conteúdo
  const searchResults = searchInContent(search);

  // Destaca o termo pesquisado no texto
  const highlightMatch = (text: string, query: string): ReactNode => {
    if (!query.trim()) return text;
    
    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return parts.map((part, i) => 
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={i} className="bg-primary/20 text-primary font-medium px-1 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  // Encontra o snippet de conteúdo relevante
  const getRelevantSnippet = (item: SearchContentItem, query: string): string | null => {
    if (!query.trim()) return null;
    
    const queryLower = query.toLowerCase();
    const matchingContent = item.content.find((text) => 
      text.toLowerCase().includes(queryLower)
    );
    
    return matchingContent || null;
  };

  const handleSelect = (path: string) => {
    navigate(path);
    onOpenChange(false);
    setSearch("");
  };

  return (
    <CommandDialog 
      open={open} 
      onOpenChange={onOpenChange}
      className="[&>div]:max-w-2xl"
    >
      <CommandInput
        ref={inputRef}
        placeholder="Buscar no site"
        value={search}
        onValueChange={setSearch}
        className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 border-0"
      />
      <CommandList>
        {searchResults.length === 0 && search.trim() ? (
          <CommandEmpty>
            <div className="py-6 text-center text-sm">
              <p className="font-medium mb-1">Nenhum resultado encontrado</p>
              <p className="text-muted-foreground">
                Tente buscar por termos como: "maria", "propostas", "gestão", "rogerio"
              </p>
            </div>
          </CommandEmpty>
        ) : searchResults.length === 0 ? (
          <div className="py-6 text-center text-sm text-muted-foreground">
            <p>Digite para buscar no site...</p>
            <p className="mt-2 text-xs">Exemplos: maria, propostas, gestão, rogerio</p>
          </div>
        ) : (
          <>
            {Object.entries(
              searchResults.reduce((acc, item) => {
                if (!acc[item.category]) {
                  acc[item.category] = [];
                }
                acc[item.category].push(item);
                return acc;
              }, {} as Record<string, SearchContentItem[]>)
            ).map(([category, items]) => {
              const CategoryIcon = categoryIcons[category] || FileText;
              return (
                <CommandGroup key={category} heading={category}>
                  {items.map((item) => {
                    const snippet = getRelevantSnippet(item, search);
                    return (
                      <CommandItem
                        key={item.id}
                        onSelect={() => handleSelect(item.path)}
                        className={cn(
                          "flex flex-col items-start gap-1 cursor-pointer py-3 px-3 rounded-md",
                          "hover:bg-accent hover:text-accent-foreground"
                        )}
                      >
                        <div className="flex items-center gap-2 w-full">
                          <CategoryIcon className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                          <span className="font-medium">{highlightMatch(item.title, search)}</span>
                        </div>
                        {snippet && (
                          <p className="text-xs text-muted-foreground ml-6 line-clamp-1">
                            {highlightMatch(snippet, search)}
                          </p>
                        )}
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
              );
            })}
          </>
        )}
      </CommandList>
    </CommandDialog>
  );
};

export default GlobalSearch;
