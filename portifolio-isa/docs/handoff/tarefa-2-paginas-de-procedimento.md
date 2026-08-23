# Handoff — Tarefa 2: páginas de procedimento

Data: `2026-08-22`.
Escopo: esqueleto completo das rotas `/tratamentos/[slug]`, com conteúdo provisório.

Este documento existe para quem for substituir o conteúdo e ajustar os detalhes depois. Ele registra **o que foi construído, por que cada decisão foi tomada e o que foi verificado de fato**.

---

## 1. Resumo

As três rotas de procedimento existem, são geradas estaticamente e estão navegáveis a partir dos cards da home. Toda a estrutura, o layout, a acessibilidade e a navegação estão prontos.

**O texto é provisório.** Os campos de prosa usam Lorem Ipsum e os campos curtos usam `A definir`. Nenhuma linha descreve procedimento de verdade.

Rotas geradas:

- `/tratamentos/preenchimento-labial`
- `/tratamentos/toxina-botulinica`
- `/tratamentos/rinomodelacao`

---

## 2. Arquivos criados e alterados

### Criados

| Arquivo | Papel |
| --- | --- |
| `src/app/tratamentos/[slug]/page.tsx` | Rota, `generateStaticParams`, `generateMetadata`, `notFound()` e composição da página |
| `src/components/treatment-page/treatment-page.module.css` | Casca da página: medida, cores e régua, herdadas pelos blocos |
| `src/components/treatment-page/TreatmentHeader.tsx` + CSS | Retorno, eyebrow, `h1` e frase-resumo |
| `src/components/treatment-page/TreatmentDataStrip.tsx` + CSS | Faixa escura de dados |
| `src/components/treatment-page/TreatmentProse.tsx` + CSS | Bloco de prosa com título (usado duas vezes) |
| `src/components/treatment-page/TreatmentQuestions.tsx` + CSS | Acordeão de perguntas |
| `src/components/treatment-page/OtherTreatments.tsx` + CSS | Navegação cruzada entre procedimentos |
| `src/components/treatment-page/TreatmentClosing.tsx` + CSS | Encerramento próprio da página |

### Alterados

| Arquivo | Mudança |
| --- | --- |
| `src/content/treatments.ts` | Reescrito: ganhou `slug` e o modelo de conteúdo; expõe `getTreatment` e `getOtherTreatments` |
| `src/components/treatments/TreatmentCard.tsx` | Card inteiro clicável, apontando para a rota do procedimento |
| `src/components/treatments/treatment-card.module.css` | Classe `.overlay` do alvo clicável |
| `src/components/sections/TreatmentsIntroSection.tsx` | Repassa `slug` ao card |
| `src/components/layout/SiteFooter.tsx` | Prop `hrefBase` |

---

## 3. Decisões e o motivo de cada uma

### 3.1. O card inteiro virou link, e `Saiba mais` deixou de ser o link

O requisito é que toda a área do card leve à rota. Havia dois caminhos:

- Envolver o card inteiro num `<Link>`. Rejeitado: o nome acessível do link passaria a ser o texto inteiro do card, título e descrição juntos, o que é verborrágico no leitor de tela.
- Manter o `<a>` de `Saiba mais` e esticá-lo com um pseudo-elemento. **Não funciona aqui**: `.content` é `position: absolute`, então um `::after` do link se ancoraria em `.content`, não no card, cobrindo só o rodapé do card.

**Escolhido:** um `<Link>` absoluto, irmão de `.media` e `.content`, cobrindo o card (`.overlay`, `z-index: 3`), com o nome acessível vindo de `aria-label`. O `Saiba mais` continua visível, mas virou `<span aria-hidden="true">` — afordância visual apenas.

Motivo de o `Saiba mais` não continuar sendo link: dois links para o mesmo destino no mesmo card criam duas paradas de tabulação redundantes.

**Preservados** por serem seletores da cascata GSAP: `data-treatment-card` e `data-treatment-alignment`. Se sumirem, a animação de entrada dos cards para de funcionar.

### 3.2. O footer ganhou `hrefBase` — e por que não bastava trocar os hrefs

`primaryNavigation` usa `#sobre`, `#tratamentos`, `#resultados`, `#contato`, e o footer usa `#inicio` no monograma. **Essas âncoras só existem na home.** Reusar o footer numa página de procedimento entregaria um menu inteiro de links mortos.

A correção óbvia — trocar a fonte para `/#sobre` — **quebraria a home**: o `SmoothScroll` intercepta os cliques pelo seletor `a[href^="#"]`, que deixaria de casar. O resultado é o bug já documentado no handoff de animações: a tela se desloca visualmente, mas `window.scrollY` continua em zero e os ScrollTriggers não disparam.

**Escolhido:** `SiteFooter` recebe `hrefBase`, padrão `""`. A home renderiza `<SiteFooter />` e nada muda no caminho aprovado. As páginas internas passam `hrefBase="/"`.

O `Voltar ao topo` ficou **de fora** do prefixo de propósito: ele precisa resolver dentro da página atual. Para isso, o `<main>` da página de procedimento expõe `id="inicio"`.

### 3.3. O encerramento é uma faixa horizontal, não a Seção 7

A Regra 10 do plano proíbe clonar seção da home. Além de cumprir o que ela pede — sem fotografia de fundo, sem `min-height` de dobra, sem eyebrow, sem título editorial, sem parágrafo de apoio, CSS próprio — a **composição** foi deliberadamente invertida: frase à esquerda e botão à direita, contra a composição centralizada de dobra inteira da home. Empilha no mobile.

Reaproveita o **dado** de `contact.ts`. Não importa `ContactCtaSection` nem o CSS Module dele.

### 3.4. Acordeão reusado com prefixo próprio e tudo fechado

`FaqAccordion` recebe `idPrefix={`faq-${slug}`}` e `initialOpenIndex={null}`.

O prefixo evita colisão de `aria-controls` com o FAQ da home. O estado inicial fechado é diferente da home de propósito: ali o primeiro item abre para apresentar o estado aberto; aqui o bloco é secundário.

### 3.5. Medida de leitura estreita

O corpo usa `min(100% - 2.5rem, 56rem)`, bem mais estreito que a home. Duas razões: conforto de leitura, já que página interna é leitura e não vitrine; e reforço do critério visual de que nenhuma tela pareça a home duas vezes.

Tokens locais (`--tp-shell`, `--tp-ink`, `--tp-paper`, `--tp-rule`) vivem em `.page` e são herdados pelos blocos, para nenhum deles repetir valor solto.

### 3.6. Sem animação

Nenhum GSAP nesta página, conforme o plano. Ela também não é envolvida pelo `SmoothScroll`, que é aplicado no `page.tsx` da home e não no layout raiz.

---

## 4. O que é provisório e onde trocar

Tudo vive em `src/content/treatments.ts`, que abre com um aviso.

| Campo | Estado | Observação |
| --- | --- | --- |
| `title` | **real** | mesmo da home |
| `description` | **real** | alimenta a frase-resumo e a meta description |
| `image`, `imageAlt` | **real** | usados só pelo card da home |
| `oQueE` | Lorem Ipsum | |
| `quandoIndicado` | Lorem Ipsum | deve incluir quando NÃO é indicado |
| `tiraDeDados` | rótulos reais, valores `A definir` | rótulos aprovados: Duração, Anestesia, Retorno, Durabilidade |
| `perguntas` | Lorem Ipsum | quantidade livre |
| `convite` | Lorem Ipsum | linha única do encerramento |

Os rótulos da tira de dados **precisam continuar iguais nos três procedimentos**, senão a faixa escura muda de forma de uma página para outra.

`convite` não constava do modelo de conteúdo do plano; foi acrescentado porque o layout do encerramento exige uma frase e a Regra 12 proíbe inventá-la.

### Como adicionar um quarto procedimento

Basta acrescentar um objeto ao array `treatments`. A rota, o `generateStaticParams`, o bloco `Outros tratamentos` e o card da home saem de lá. Nada de layout precisa mudar — o template é único.

---

## 5. O que foi verificado, e como

Servidor de produção (`npm run build` + `npm start`), nunca o dev — ver a nota sobre o bloqueio cross-origin em `anexo-memoria-curta.md`.

| Verificação | Resultado |
| --- | --- |
| `npm run lint` | limpo |
| `npx tsc --noEmit` | limpo |
| `npm run build` | passa; as três rotas saem como SSG |
| As três rotas respondem | `200` |
| Slug inexistente | `404` |
| Cards da home apontam para as rotas | 3 links corretos |
| `#contato` restante em `TreatmentCard` | zero |
| Overflow horizontal em 360, 390, 430 e 1920 px | nenhum, nas 4 páginas — 16 cenários |
| Erros de console | nenhum, além de um 404 de `/favicon.ico` pré-existente |
| Ordem de tabulação na página de procedimento | lógica, com anel de foco visível em todos os controles |
| Card por teclado | foca e navega, em desktop e mobile |
| Card por clique fora do rótulo | canto oposto do card navega |
| Acordeão da página | ids prefixados pelo slug, zero colisão com a home, todos fechados |
| FAQ da home | inalterado: `faq-question-1..7`, primeiro aberto |

O script de overflow e console está em `tmp/validar.mjs` (pasta ignorada pelo git). Ele usa o Chrome do sistema via `channel: "chrome"`, então **não** exige `playwright install`. Para repetir: subir `npm start` e rodar `node tmp/validar.mjs`.

### Armadilha encontrada ao validar

`scrollIntoViewIfNeeded` **não** funciona na home em desktop: o `ScrollSmoother` transforma o conteúdo e a rolagem real não acompanha. Para trazer um card à viewport num teste automatizado é preciso usar eventos reais de roda (`page.mouse.wheel`). Sem isso o card continua com `visibility: hidden` — que é o estado inicial correto da entrada GSAP — e o teste falha dando a impressão de que o link está quebrado.

---

## 6. Pendências

### Desta tarefa

- Substituir todo o conteúdo provisório da tabela da seção 4.
- Revisão visual humana das três páginas. A validação automatizada cobre overflow, console, foco e navegação, **não** julgamento estético.
- Critério visual do plano a conferir a olho: nenhuma tela pode parecer a home duas vezes.

### Encontradas de passagem, fora do escopo

- **Grafia do nome.** `Isabelly` foi confirmada como correta em `2026-08-22`. As páginas novas já usam `Isabelly` na metadata. O restante do site ainda usa `Isabely` em 7 pontos, incluindo o `<title>` da home, o rodapé e o `aria-label` do monograma. Corrigir é mudança de conteúdo aprovado e precisa de pedido explícito.
- **O site não tem favicon.** `/favicon.ico` responde 404 em toda navegação. Pré-existente, não introduzido aqui.
