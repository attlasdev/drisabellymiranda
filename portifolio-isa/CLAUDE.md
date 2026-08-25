# Portfólio Isabely — Diretrizes do Projeto

## Leitura obrigatória ao retomar

1. Ler `../anexo-memoria-curta.md` para conhecer o estado atual e os próximos passos.
2. Ler `anexo.md` para conhecer o briefing visual e técnico permanente.
3. Consultar a especificação relevante em `docs/design/` antes de alterar uma seção existente.

Atualizar a memória curta ao concluir um novo marco. Atualizar o briefing quando uma decisão permanente do sistema visual for aprovada.

## Contexto

Esta pasta é a raiz da aplicação do portfólio da Isabely. O acervo bruto continua preservado um nível acima (`../FOTOS - PACIENTES` e `../FOTOS ISA`); somente os assets aprovados para uso devem entrar em `public/`.

- Não pressupor direção visual, comportamento ou textos ainda não fornecidos. Quando os parâmetros já existirem nos anexos e especificações, não depender do Figma para continuar.
- Preservar as pastas de fotos originais (`../FOTOS - PACIENTES` e `../FOTOS ISA`) até que exista um plano explícito de organização e otimização dos assets para a aplicação.
- Não alterar, apagar, renomear ou comprimir imagens originais sem autorização explícita.
- Registrar as medidas confirmadas de cada seção em `docs/design/` antes da implementação.

## Stack definida

- Next.js 16 com App Router
- React 19
- TypeScript com modo estrito
- Tailwind CSS 4 via PostCSS
- GSAP como única biblioteca de animação
- ESLint com a configuração do Next.js
- Playwright para validações de interface quando necessário
- npm como gerenciador de pacotes

Não adicionar Framer Motion nem Lenis. Para animações, usar exclusivamente GSAP e seus plugins quando forem necessários.

## Estrutura planejada

Quando a aplicação for inicializada, manter o código dentro de `src/`:

```text
src/
  app/          # rotas, layouts, metadata e estilos globais
  components/   # componentes de interface e de layout
  content/      # conteúdo estruturado do portfólio
  lib/          # utilitários, constantes e helpers
  styles/       # estilos complementares, se forem necessários
```

- Preferir componentes de servidor; adicionar `"use client"` somente quando houver interatividade, APIs de browser ou animações GSAP.
- Usar o alias `@/*` para imports internos.
- Criar componentes reutilizáveis e semanticamente nomeados; evitar páginas monolíticas.
- Usar `next/image` para imagens exibidas no site e fornecer `alt` significativo.

## Design e responsividade

- Implementar o wireframe validado com fidelidade quando ele for fornecido.
- A interface deve ser mobile-first e funcionar bem em telas pequenas, médias e grandes.
- Não usar valores arbitrários repetidos: transformar padrões visuais aprovados em tokens/utilitários reutilizáveis.
- Priorizar HTML semântico, navegação por teclado, foco visível, contraste adequado e suporte a `prefers-reduced-motion`.

## Animações com GSAP

- Animar somente o que reforçar a hierarquia, a leitura ou a transição de estado.
- Registrar e limpar corretamente timelines, listeners e instâncias de plugins no ciclo de vida dos componentes React.
- Respeitar `prefers-reduced-motion`; a página deve continuar íntegra sem animações.
- Medir e preservar a performance, especialmente em scroll e em dispositivos móveis.

## SEO e qualidade

- Definir metadata por rota usando as APIs do Next.js.
- Incluir títulos, descrições, Open Graph, sitemap e robots quando as páginas e o domínio estiverem definidos.
- Usar uma hierarquia de headings coerente e conteúdo acessível para mecanismos de busca e leitores de tela.
- Antes de concluir uma mudança, executar as verificações pertinentes: lint, build e, quando houver interface relevante, testes/validação visual.

## Skills locais

As habilidades de apoio vivem em `.claude/skills/`. Antes de trabalho relacionado, consultar a skill adequada:

- `next-best-practices` para arquitetura e implementação Next.js/React
- `tailwind-design-system`, `shadcn` e `web-design-guidelines` para interface e componentes
- `gsap` para animações
- `seo` e `seo-audit` para descoberta e revisão de SEO
- `deploy-to-vercel` para preparação e publicação na Vercel

Use somente as skills aplicáveis à tarefa; elas complementam estas diretrizes e não substituem decisões validadas do projeto.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
