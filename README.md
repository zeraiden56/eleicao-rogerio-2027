# Site da campanha — Rogério (Defensor Público-Geral MT)

Site institucional da campanha de Rogério para Defensor Público-Geral do Estado de Mato Grosso. SPA com navegação por rotas, busca global (Ctrl+K), botão flutuante WhatsApp e layout responsivo.

---

## Mapa do site (rotas)

| Rota | Página | Conteúdo |
|------|--------|----------|
| `/` | Home | Hero, Equipe, Gestão e Resultados, Crescimento (evolução remuneração), Resumo Quantitativo, Apoios, Depoimentos, CTA, Notícias, Galeria |
| `/propostas` | Propostas | Eixos do plano de gestão; link para PDF do plano em nova aba |
| `/plano-de-gestao` | Redirect | Redireciona para `/propostas` |
| `/chapa` | Chapa | Nossa Chapa |
| `/historia-na-defensoria` | História na Defensoria | Trajetória na Defensoria |
| `/atuacao-nas-gestoes` | Atuação nas Gestões | Atuação nas gestões |
| `/atuacao-no-conselho` | Atuação no Conselho | Atuação no Conselho |
| `/formacao` | Formação | Formação acadêmica e profissional |
| `/lattes` | Lattes | Currículo Lattes |
| `/noticias` | Notícias | Listagem de notícias |
| `/noticias/:slug` | Notícia | Detalhe da notícia por slug |
| `/quantitativo` | Quantitativo | Dados e gráficos: evolução de cargos (2006–2025), evolução remuneratória |
| `*` | 404 | Página não encontrada |

---

## Tecnologias

### Build e runtime
- **Vite 5** — bundler e dev server (porta 8080, host `::`)
- **React 18** + **TypeScript**
- **React Router 6** — rotas SPA

### UI e estilo
- **Tailwind CSS** — utilitários e tema (cores, tipografia)
- **shadcn/ui** — componentes baseados em **Radix UI** (accordion, dialog, tabs, carousel, sheet, dropdown, etc.)
- **Lucide React** — ícones
- **tailwindcss-animate** + **class-variance-authority** — animações e variantes
- **next-themes** — tema claro/escuro (se usado)

### Dados, formulários e estado
- **TanStack Query (React Query)** — cache e estado assíncrono
- **React Hook Form** + **Zod** + **@hookform/resolvers** — formulários e validação

### Gráficos e visualização
- **Recharts** — gráficos na página Quantitativo e seções de crescimento/evolução

### Outros
- **date-fns** — datas
- **embla-carousel-react** — carrosséis (depoimentos, vídeos, etc.)
- **cmdk** — busca global (Command palette)
- **sonner** — toasts
- **vaul** — drawer
- **react-resizable-panels** — painéis redimensionáveis (se usado)

### Dev
- **ESLint** (typescript-eslint, react-hooks, react-refresh)
- **PostCSS** + **Autoprefixer**
- **@tailwindcss/typography** — estilos para conteúdo em prosa

---

## Estrutura do projeto

```
frontend/
├── public/                    # Assets estáticos
│   └── pdf/                   # PDFs (ex.: plano-de-gestao.pdf)
├── src/
│   ├── components/            # Componentes reutilizáveis
│   │   ├── ui/                # Componentes shadcn (button, card, dialog, etc.)
│   │   ├── Navbar.tsx         # Menu principal + atalho busca (Ctrl+K)
│   │   ├── Footer.tsx
│   │   ├── FloatingWhatsAppButton.tsx
│   │   ├── GlobalSearch.tsx
│   │   ├── PageTransition.tsx
│   │   ├── SectionTransition.tsx
│   │   ├── SectionContainer.tsx / SectionTitle.tsx
│   │   ├── HeroLoader.tsx, LazyImage.tsx, RotatingPhoto.tsx
│   │   ├── AnimatedCounter.tsx, StatCard.tsx, EixoCard.tsx, EixoDetalhe.tsx
│   │   ├── TestimonialCarousel.tsx, VideoCarousel.tsx
│   │   └── NavLink.tsx
│   ├── data/                  # Dados estáticos e conteúdo
│   │   ├── news.ts            # Notícias
│   │   ├── gallery.ts         # Galeria
│   │   ├── heroPhotos.ts      # Fotos do hero
│   │   ├── rogerioTimelinePhotos.ts
│   │   ├── eixoIcons.ts       # Ícones dos eixos
│   │   ├── searchContent.ts   # Conteúdo indexado para busca global
│   │   ├── curiosidades.ts
│   │   ├── quantitativo_cargos_2006_2025.json
│   │   ├── evolucao_percentual_cargos_2006_2025.json
│   │   ├── evolucao_salarial_defensoria.json
│   │   └── indices_inflacao.json
│   ├── hooks/
│   │   ├── useScrollToTopOnMount.ts
│   │   ├── useRevealOnScroll.ts / useRevealOnScrollSide.ts
│   │   ├── useEixoAtivo.ts
│   │   └── use-mobile.tsx
│   ├── lib/
│   │   └── utils.ts           # cn(), etc.
│   ├── pages/                 # Uma página por rota
│   │   ├── Home.tsx           # Composição das seções da home
│   │   ├── home/              # Seções da home
│   │   │   ├── HeroSection.tsx, EquipeSection.tsx, GestaoResultadosSection.tsx
│   │   │   ├── CrescimentoSection.tsx, crescimento/, quantitativo/
│   │   │   ├── ResumoQuantitativoSection.tsx, ApoiosSection.tsx
│   │   │   ├── DepoimentosSection.tsx, CtaFinalSection.tsx
│   │   │   ├── NoticiasSection.tsx, GaleriaSection.tsx
│   │   │   └── SobreCampanhaSection.tsx, HeroPhotoStrips.tsx
│   │   ├── Propostas.tsx, Chapa.tsx, NotFound.tsx
│   │   ├── HistoriaNaDefensoria.tsx, AtuacaoNasGestoes.tsx, AtuacaoNoConselho.tsx
│   │   ├── Formacao.tsx, Lattes.tsx
│   │   ├── Noticias.tsx, NoticiaDetalhe.tsx
│   │   └── ...
│   ├── App.tsx                # Rotas, layout (Navbar + main + Footer), providers
│   ├── main.tsx
│   └── index.css
├── components.json            # Config shadcn
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json / tsconfig.app.json / tsconfig.node.json
└── README.md
```

---

## Comandos

```bash
# Instalar dependências
npm i

# Desenvolvimento (porta 8080)
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview

# Lint
npm run lint
```
