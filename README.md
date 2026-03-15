# Site da campanha — Rogério (Defensor Público-Geral MT)

Site institucional da campanha de Rogério para Defensor Público-Geral do Estado de Mato Grosso.

## Tecnologias

- **Vite** — build e dev server
- **React 18** + **TypeScript**
- **React Router** — rotas SPA
- **Tailwind CSS** + **shadcn/ui** (Radix) — UI e componentes
- **TanStack Query** — dados/estado assíncrono
- **Recharts** — gráficos (quantitativo, evolução)
- **Lucide React** — ícones

## Estrutura do projeto

```
frontend/
├── public/           # estáticos (imagens, PDFs)
├── src/
│   ├── components/   # componentes reutilizáveis e UI (shadcn)
│   ├── data/         # JSON e dados estáticos (notícias, galeria, quantitativo)
│   ├── hooks/        # useScrollToTopOnMount, useRevealOnScroll, etc.
│   ├── lib/          # utils (cn, etc.)
│   ├── pages/        # páginas por rota (Home, Propostas, Notícias, etc.)
│   ├── App.tsx       # rotas e layout global
│   └── main.tsx
├── package.json
├── vite.config.ts
└── tailwind.config.ts
```

### Páginas principais

- **/** — Home (hero, sobre campanha, equipe, depoimentos, notícias, CTA)
- **/propostas** — Eixos e plano de gestão (PDF em nova aba)
- **/chapa** — Chapa
- **/historia-na-defensoria** — Trajetória na Defensoria
- **/atuacao-nas-gestoes** — Atuação nas gestões
- **/atuacao-no-conselho** — Atuação no Conselho
- **/formacao** — Formação
- **/lattes** — Currículo Lattes
- **/noticias** — Listagem de notícias
- **/noticias/:slug** — Detalhe da notícia
- **/quantitativo** — Dados quantitativos e gráficos (evolução cargos, remuneração)

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
```

## Observações

- O `package-lock.json` será atualizado ao rodar `npm install` após remoção de dependências; não é necessário editar à mão.
- Commit e push ficam por sua conta para evitar lock no GitHub.
