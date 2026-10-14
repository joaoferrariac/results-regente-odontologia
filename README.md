# Regente Odontologia — Relatório de performance

Relatório de mídia paga entregue como página estática em Next.js (App Router) + Tailwind CSS v4.

## Stack

| Item       | Versão                                    |
| ---------- | ----------------------------------------- |
| Next.js    | 16 (App Router, Turbopack, RSC)           |
| React      | 19                                        |
| Tailwind   | v4 (configuração CSS-first via `@theme`)  |
| TypeScript | 5.9, `strict`                             |

A página é 100% Server Component e pré-renderizada estaticamente (`○ /` no output
do build) — zero JavaScript de aplicação enviado ao cliente.

## Scripts

```bash
npm run dev        # servidor de desenvolvimento
npm run build      # build de produção
npm start          # servir o build
npm run lint       # ESLint (next/core-web-vitals + next/typescript)
npm run typecheck  # tsc --noEmit
```

## Estrutura

```
src/
├── app/
│   ├── globals.css        # design tokens (@theme), base, print, reduced-motion
│   ├── icon.svg           # favicon
│   ├── layout.tsx         # fontes, metadata, viewport
│   └── page.tsx           # composição do relatório (única rota)
├── components/
│   ├── charts/            # visualizações sem biblioteca externa
│   │   ├── FrequencyGauge.tsx      # medidor de repetição contra o teto
│   │   ├── HorizontalBarChart.tsx
│   │   └── StackedBar.tsx
│   ├── layout/            # cabeçalho e rodapé do documento
│   ├── report/            # blocos de conteúdo do relatório
│   └── ui/                # primitivos: Container, Section, Legend, Pill
├── data/report.ts         # fonte única de verdade do conteúdo
├── lib/
│   ├── cn.ts              # junção de class names
│   └── tones.ts           # mapa tom semântico → classes Tailwind
└── types/report.ts        # modelo de domínio
```

### Princípios

**Conteúdo separado de apresentação.** Todo número, rótulo e texto vive em
`src/data/report.ts`, tipado por `src/types/report.ts`. Publicar a
próxima leitura de pulso é editar um arquivo de dados — nenhum componente muda.

**Cor é semântica, não literal.** Componentes recebem um tom (`familia`, `estetica`,
`perda`, `neutral`, `highlight`), nunca uma classe de cor. `src/lib/tones.ts`
resolve o tom para as classes concretas, o que garante que cada vídeo
tenha a mesma cor em todos os gráficos da página.

**Geometria derivada dos dados.** Larguras de barra, fatias e posição do
marcador do medidor são calculadas a partir dos valores brutos e do `max` do
eixo. Não há porcentagem escrita à mão no markup.

**Gráficos sem dependência.** Barras, barra empilhada e medidor são construídos
com primitivos de layout. Para três gráficos estáticos, uma biblioteca custaria
mais em bundle e customização do que entregaria.

## Responsividade

Mobile-first, com dois pontos de quebra relevantes:

- **Gráficos de barra** (`sm`): no celular, rótulo e valor dividem a primeira
  linha e a barra ocupa a largura total abaixo; a partir de `sm` viram uma grade
  `rótulo | trilha | valor` com eixo alinhado às linhas de grade.
- **Tabela de vídeos** (`lg`): `<table>` real no desktop e cartões de
  definição empilhados no celular — uma tabela de seis colunas com rolagem
  horizontal é inutilizável em tela pequena.

## Acessibilidade

- Hierarquia de headings correta, com `aria-labelledby` por seção.
- Barras expõem `role="img"` + `aria-label` com rótulo e valor; o medidor usa
  `role="meter"` com `aria-valuenow` / `aria-valuetext`.
- `:focus-visible` explícito e contraste dentro de AA para texto de corpo.
- Todas as animações de entrada são desativadas sob `prefers-reduced-motion`.

## Impressão

O relatório é exportado em PDF com frequência: `@media print` remove o fundo,
evita quebra dentro das seções e oculta elementos marcados com `.no-print`.
