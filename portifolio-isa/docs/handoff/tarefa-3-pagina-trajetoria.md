# Handoff — Tarefa 3: página `Conheça minha trajetória`

Data: `2026-08-22`.
Escopo: rota `/trajetoria` completa, com conteúdo provisório, mais a extração das primitivas compartilhadas entre páginas internas.

Este documento registra **o que foi construído, por que cada decisão foi tomada e o que foi verificado de fato**. Ele é irmão de `tarefa-2-paginas-de-procedimento.md`; ler os dois antes de mexer em página interna.

---

## 1. Resumo

A rota `/trajetoria` existe, é estática e está ligada ao botão `Conheça minha trajetória` da Seção 4, que deixou de ser um `<p>` desabilitado.

**O texto é provisório.** Prosa em Lorem Ipsum, `Atendimento` como `A definir` e a fotografia como estado vazio declarado.

Esta tarefa também **mexeu no código da Tarefa 2**, para extrair as peças que as duas páginas compartilham. A Tarefa 2 foi revalidada por inteiro depois disso — ver seção 5.

---

## 2. A extração das primitivas compartilhadas

### Por que

Quatro peças construídas na Tarefa 2 eram exatamente o que a Tarefa 3 precisava: a casca com os tokens, o link de retorno, a faixa escura de dados e o encerramento.

Duplicá-las significaria manter a **especificação do encerramento em dois lugares** — e specs duplicadas divergem. O plano já dizia que as duas páginas usam "a mesma gramática clara/escura"; a extração é essa frase virando código.

### O que ficou onde

`src/components/internal-page/` — compartilhado pelas duas páginas:

| Arquivo | Origem |
| --- | --- |
| `internal-page.module.css` | era `treatment-page.module.css` |
| `BackLink.tsx` | extraído de `TreatmentHeader` |
| `PageDataStrip.tsx` | era `TreatmentDataStrip` |
| `PageProse.tsx` | era `TreatmentProse` |
| `PageClosing.tsx` | era `TreatmentClosing` |
| `TreatmentLinks.tsx` | era `OtherTreatments`, agora com o título por prop |

`src/components/treatment-page/` — só o que é específico de procedimento: `TreatmentHeader` e `TreatmentQuestions`.

`src/components/trajectory-page/` — específico da trajetória: `TrajectoryHeader` e `TimelineList`.

### Mudanças de comportamento que a extração trouxe

- Os tokens passaram de `--tp-*` para `--ip-*`, porque `tp` significava *treatment page* e agora servem às duas.
- **A faixa de dados deixou de ser uma grade fixa de 4 colunas** e passou a `repeat(auto-fit, minmax(9rem, 1fr))`. Foi necessário porque a trajetória tem 3 fatos e o procedimento tem 4. Efeito colateral desejável: em larguras intermediárias a faixa agora se reorganiza em vez de espremer. Verificado sem overflow nas quatro larguras.
- `OtherTreatments` virou `TreatmentLinks` e recebe `heading`. A página de procedimento passa `Outros tratamentos`; a de trajetória passa `Áreas de atuação`.

---

## 3. Decisões e o motivo de cada uma

### 3.1. O botão da Seção 4 virou link preservando o seletor de animação

O `<p aria-label="Conheça minha trajetória, em breve">` virou `<Link href="/trajetoria">`. O `aria-label` de "em breve" saiu porque deixou de ser verdade.

**O atributo `data-consultation-trajectory` foi preservado.** Ele é o seletor que a cascata GSAP da Seção 4 usa em `SmoothScroll.tsx`; removê-lo faria o elemento parar de animar. Isso foi verificado no navegador, não só no código: o elemento continua começando invisível e sendo revelado pela cascata, em desktop e mobile.

O elemento passou a ser focável, então ganhou `:focus-visible` com anel branco — antes, sendo um `<p>`, não precisava.

O `SmoothScroll` intercepta âncoras pelo seletor `a[href^="#"]`. Como o destino é `/trajetoria`, ele não é interceptado e a navegação acontece normalmente.

### 3.2. Cápsula de foto na proporção 7 / 9

A fotografia própria desta página ainda não existe. A área reserva `aspect-ratio: 7 / 9`, **a mesma da foto da Seção 4**, para que a troca pela imagem real não mexa no layout.

Enquanto `foto` for `null`, a área mostra um estado vazio que se anuncia — no vocabulário do placeholder do modal de Resultados (`#dedbd6` com destaque radial, texto `#6c6862`, rótulo em caixa alta). O CSS foi **reescrito**, não importado: reuso permitido é de vocabulário visual, não de arquivo.

Basta preencher `foto` em `src/content/trajetoria.ts` para a imagem entrar no lugar do estado vazio.

### 3.3. `Áreas de atuação` já nasce como links

O plano dizia "vira lista de links quando a Tarefa 2 sair". A Tarefa 2 saiu, então já nasce ligada às três rotas de procedimento.

### 3.4. A meta description usa só dado real

`Cirurgiã-dentista especializada em Harmonização Orofacial. CRO-MG 72298.` — profissão, especialidade e registro vêm de `footer.ts` e são reais. Não é copy definitiva; quando o texto da página chegar, revisar também essa linha.

### 3.5. O bloco pessoal "como comecei" não entrou

Decisão de `2026-08-22`: fica fora do esqueleto. Acrescentar um bloco depois é barato; deixar um bloco sem definição no esqueleto trava a tarefa.

### 3.6. Sem animação

Nenhum GSAP nesta página, conforme o plano. Ela não é envolvida pelo `SmoothScroll`, que é aplicado no `page.tsx` da home e não no layout raiz.

---

## 4. O que é provisório e onde trocar

Tudo vive em `src/content/trajetoria.ts`, que abre com um aviso.

| Campo | Estado |
| --- | --- |
| `nome` | **real** — grafia `Isabelly` confirmada em 2026-08-22 |
| `fatosRapidos[0]` e `[1]` | **reais** — vêm de `footer.ts` |
| `fatosRapidos[2]` (Atendimento) | `A definir` — não existe valor real |
| Títulos em `Áreas de atuação` | **reais** — vêm de `treatments.ts` |
| `abertura` | Lorem — deve ser 1ª pessoa |
| `minhaAbordagem` | Lorem — deve aprofundar, não repetir a Seção 4 |
| `formacao` | Lorem, 3 itens de exemplo |
| `atualizacao` | Lorem, 3 itens |
| `convite` | Lorem |
| `foto` | `null` — estado vazio declarado |

`minhaAbordagem` não constava da lista de conteúdo do plano, mas o layout previa o bloco; foi acrescentado ao modelo para a página não nascer com um buraco.

Blocos sem conteúdo **não são renderizados**: `TimelineList` retorna `null` com lista vazia, e `TreatmentLinks` também.

---

## 5. O que foi verificado, e como

Servidor de produção (`npm run build` + `npm start`), nunca o dev.

### Não regrediu (Tarefa 2, depois da extração)

| Verificação | Resultado |
| --- | --- |
| As três rotas de procedimento | `200`; slug inexistente `404` |
| Cards da home apontando para as rotas | 3 |
| FAQ da home | intacto: `faq-question-1..7`, primeiro aberto |
| Acordeão da página de procedimento | ids prefixados pelo slug, todos fechados |
| Rótulos da faixa de dados | os 4 aprovados presentes |
| Rodapé da subpágina | 6 destinos com base absoluta, `Voltar ao topo` local |

### Tarefa 3

| Verificação | Resultado |
| --- | --- |
| `npm run lint`, `npx tsc --noEmit`, `npm run build` | limpos; `/trajetoria` sai como estática |
| Overflow horizontal em 360, 390, 430 e 1920 px, nas 5 páginas | nenhum — 20 cenários |
| Erros de console | nenhum, além do 404 de `/favicon.ico` pré-existente |
| Botão da Seção 4 | é `<a href="/trajetoria">`, navega por teclado e por clique, desktop e mobile |
| Cascata GSAP da Seção 4 | preservada: o elemento começa invisível e é revelado ao rolar |
| Ordem de tabulação em `/trajetoria` | lógica, com anel de foco visível em todos os controles |
| Estado vazio da foto | presente e anunciado |
| Fatos rápidos | especialidade e registro reais |
| `Áreas de atuação` | 3 links para as rotas de procedimento |

Repetir a bateria de overflow e console: subir `npm start` e rodar `node tmp/validar.mjs` (pasta ignorada pelo git). Usa o Chrome do sistema, não exige `playwright install`.

---

## 6. Pendências e pontos de julgamento

### Desta tarefa

- Substituir todo o conteúdo provisório da tabela da seção 4.
- Fornecer a fotografia própria da página e preencher `foto`.
- Definir o valor de `Atendimento` nos fatos rápidos.
- Decidir se o bloco pessoal "como comecei" entra.
- Revisão visual humana, incluindo o critério de que nenhuma tela pareça a home duas vezes.

### Ponto de julgamento que ficou em aberto

O plano pede que a página não tenha "link nem referência à seção Resultados reais". O **rodapé global** inclui `RESULTADOS` na navegação, e ele aparece nesta página e nas de procedimento. Interpretei que a regra vale para o conteúdo da página, não para a navegação global do rodapé — excluir só esse item quebraria a consistência do menu. Se a leitura correta for outra, é ajuste pequeno.

### Fora do escopo, já registrado

- A grafia do nome: esta página usa `Isabelly` no `h1`, enquanto a assinatura do rodapé, na mesma tela, mostra `Isabely`. O responsável optou por não corrigir agora.
- O site não tem favicon; `/favicon.ico` responde 404 em toda navegação.
