# Site de campanha — Dr. Rogério Borges Freitas
**Candidato a Defensor Público-Geral do Estado de Mato Grosso · Biênio 2027–2028**

SPA institucional de campanha com navegação por rotas, busca global com destaque (Ctrl+K), scroll animado por âncoras, botão flutuante WhatsApp e layout totalmente responsivo.

---

## Mapa do site (rotas)

| Rota | Página | Conteúdo |
|------|--------|----------|
| `/` | Home | Hero · Equipe de Gestão · Evolução Quantitativa · Crescimento da Defensoria · 79 Comarcas · Premiações e Selos · Propostas e Eixos (preview) · CTA Final |
| `/propostas` | Propostas e Eixos | 5 eixos do plano de gestão com detalhes; botão de download do PDF |
| `/plano-de-gestao` | Redirect | Redireciona para `/propostas` |
| `/chapa` | Nossa Chapa | Perfil completo dos 4 candidatos com foto, trajetória e formação; suporte a âncora (`/chapa#luziane`, `/chapa#paulo`, `/chapa#paula`, `/chapa#rogerio`) |
| `/historia-na-defensoria` | História na Defensoria | Linha do tempo da trajetória de Rogério na DPE-MT |
| `/atuacao-no-conselho` | Atuação no Conselho | Participação no Conselho Superior da Defensoria |
| `/lattes` | Currículo Lattes | Link para o Lattes e publicações acadêmicas |
| `/noticias` | Notícias | Listagem de notícias e cobertura de imprensa |
| `/noticias/:slug` | Notícia | Detalhe da notícia por slug |
| `/quantitativo` | Dados Quantitativos | Gráfico interativo de evolução de cargos (2006–2025) com eixo Y proporcional por cargo |
| `*` | 404 | Página não encontrada |

> **Páginas removidas da navegação principal** (rotas ainda existem): `/formacao`, `/atuacao-nas-gestoes`

---

## Seções da Home (ordem)

1. **Hero** — foto de Rogério, título da candidatura, strips de fotos animadas (pasta `SELECIONADAS`, 1200×800 px)
2. **Equipe de Gestão** — cards dos 4 candidatos com foto estática, cargo na candidatura × cargo atual; link âncora para `/chapa#id`
3. **Evolução Quantitativa** — gráfico Recharts com eixo Y adaptativo por cargo selecionado
4. **Crescimento da Defensoria** — evolução remuneratória e dados históricos
5. **79 Comarcas** — marco constitucional (EC 80/2014), galeria de Cotriguaçu, citação de Luziane
6. **Premiações e Selos** — 5 selos estáticos clicáveis; modal com logo + descrição + navegação por setas (via `createPortal`)
7. **Propostas e Eixos (preview)** — 5 eixos com número, título e resumo; link para `/propostas`
8. **CTA Final** — botões "Conhecer a Chapa" e "Ver Propostas"

---

## Tecnologias

### Build e runtime
- **Vite 5** — bundler e dev server
- **React 18** + **TypeScript**
- **React Router 6** — rotas SPA com suporte a hash anchors

### UI e estilo
- **Tailwind CSS** — utilitários e tema customizado (CSS variables para cores primárias)
- **shadcn/ui** — componentes baseados em **Radix UI** (dialog, tabs, card, command, sheet, etc.)
- **Lucide React** — ícones
- **tailwindcss-animate** + **class-variance-authority** — animações e variantes

### Dados e estado
- **TanStack Query (React Query)** — cache e estado assíncrono
- **React Hook Form** + **Zod** — formulários e validação

### Gráficos
- **Recharts** — gráficos na página `/quantitativo` e seções de crescimento

### Outros
- **date-fns** — manipulação de datas
- **embla-carousel-react** — carrosséis
- **cmdk** — paleta de busca global (Command palette)
- **sonner** — toasts
- **vaul** — drawer mobile

### Dev
- **ESLint** (typescript-eslint, react-hooks, react-refresh)
- **PostCSS** + **Autoprefixer**
- **@tailwindcss/typography**

---

## Estrutura do projeto

```
frontend/
├── public/
│   ├── pdf/                        # plano-de-gestao.pdf
│   ├── selos/                      # Imagens dos 5 selos (transparencia, a3p, esperança garcia)
│   ├── luziane/ paulo/ paula/      # Fotos dos candidatos
│   └── rogerio/
│       ├── SELECIONADAS/           # Fotos do hero (1200×800 px, formato 3:2)
│       └── 2025/                   # Fotos de eventos 2025
├── src/
│   ├── components/
│   │   ├── ui/                     # Componentes shadcn/ui
│   │   ├── Navbar.tsx              # Navegação + busca Ctrl+K
│   │   ├── Footer.tsx
│   │   ├── FloatingWhatsAppButton.tsx
│   │   ├── GlobalSearch.tsx        # Busca full-text (cmdk)
│   │   ├── SearchHighlighter.tsx   # Destaca termo pesquisado na página destino
│   │   ├── ScrollToTop.tsx         # Reset de scroll (respeita hash e searchQuery)
│   │   ├── PageTransition.tsx
│   │   ├── SectionTransition.tsx   # Transições de cor entre seções (verde ↔ branco)
│   │   ├── LazyImage.tsx           # Lazy loading com IntersectionObserver
│   │   ├── EixoCard.tsx            # Card de eixo do plano de gestão
│   │   └── AnimatedCounter.tsx / StatCard.tsx
│   ├── data/
│   │   ├── equipe.ts               # Dados dos 4 candidatos (foto, cargos, bio)
│   │   ├── eixos.ts                # 5 eixos do plano de gestão
│   │   ├── heroPhotos.ts           # Lista de fotos do hero (SELECIONADAS)
│   │   ├── rogerioTimelinePhotos.ts
│   │   ├── searchContent.ts        # Índice de busca full-text por página
│   │   ├── news.ts                 # Notícias
│   │   └── *.json                  # Dados quantitativos (cargos, salários, inflação)
│   ├── hooks/
│   │   ├── useScrollToTopOnMount.ts  # Scroll ao topo (ignora hash)
│   │   └── useRevealOnScrollSide.ts  # Animações de entrada via IntersectionObserver
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── HeroPhotoStrips.tsx
│   │   │   ├── EquipeSection.tsx
│   │   │   ├── ComarcasSection.tsx       # Seção "79 Comarcas" (EC 80/2014)
│   │   │   ├── SelosSection.tsx          # Selos estáticos + modal
│   │   │   ├── PropostasPreviewSection.tsx
│   │   │   ├── CtaFinalSection.tsx
│   │   │   ├── crescimento/              # Seção crescimento da Defensoria
│   │   │   └── quantitativo/             # Gráfico de evolução de cargos
│   │   ├── Chapa.tsx                     # Scroll por âncora (/chapa#id)
│   │   ├── Propostas.tsx
│   │   ├── HistoriaNaDefensoria.tsx
│   │   ├── AtuacaoNoConselho.tsx
│   │   └── ...
│   ├── App.tsx                           # Rotas, layout, SearchHighlighter
│   ├── main.tsx
│   └── index.css
├── vite.config.ts
├── tailwind.config.ts
└── package.json
```

---

## Comandos

```bash
# Instalar dependências
npm install

# Desenvolvimento (porta 8080 — usar apenas localmente, nunca expor publicamente)
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview

# Lint
npm run lint
```

---

## Deploy

O site é servido como SPA estática pelo **Nginx**, com `try_files $uri $uri/ /index.html` para suporte às rotas client-side.

```
Build: npm run build → frontend/dist/
Nginx root: /srv/eleicao-rogerio/frontend/dist
SSL: Let's Encrypt (Certbot) — TLS 1.2/1.3
```

### Atualizar o site em produção

```bash
cd /srv/eleicao-rogerio/frontend
git pull origin main
npm run build
# nginx recarrega automaticamente os arquivos estáticos
```

---

## Busca global

- Atalho: **Ctrl+K** (ou ícone na navbar)
- Busca full-text em título, conteúdo e keywords de cada página (`src/data/searchContent.ts`)
- Ao selecionar um resultado, navega para a página e **destaca o termo pesquisado** com fundo amarelo (marca-texto), rolando automaticamente até a primeira ocorrência
- O destaque desaparece gradualmente após 6 segundos

---

## Navegação por âncora

Ao clicar em um candidato na seção **Equipe de Gestão** (home), o usuário é redirecionado para `/chapa#<id>` e a página rola suavemente até a seção do candidato. IDs disponíveis: `rogerio`, `luziane`, `paulo`, `paula`.
