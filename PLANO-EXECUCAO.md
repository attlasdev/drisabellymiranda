# Plano de execução — Portfólio Isabely Miranda

Última atualização: `2026-08-22`.
Status do plano: **em construção** — novas tarefas ainda estão sendo mapeadas com o responsável pelo projeto.

Este arquivo é um plano executável. Ele existe para que outra pessoa, com outro agente, consiga abrir o repositório, entender o estado atual e executar as tarefas abaixo sem precisar do histórico de conversas anteriores.

---

## Como usar este plano

1. Ler as seções `Contexto`, `Regras invioláveis` e `Antes de começar` por completo.
2. Escolher a próxima tarefa pendente respeitando a ordem de prioridade.
3. Executar apenas o escopo descrito na tarefa. Não expandir, não refatorar o que está fora dela.
4. Validar contra os critérios de aceite da própria tarefa.
5. Marcar a tarefa como concluída e atualizar `anexo-memoria-curta.md`.

Uma tarefa só pode ser marcada como concluída quando todos os seus critérios de aceite forem verificados de fato, com o comando executado ou a tela observada. Não declarar conclusão por inspeção de código apenas.

### Legenda de status

| Símbolo | Significado |
| --- | --- |
| `[ ]` | Pendente, pronta para execução |
| `[~]` | Em andamento |
| `[x]` | Concluída e verificada |
| `[!]` | Bloqueada — depende de informação externa que ainda não foi fornecida |

---

## Contexto

Portfólio profissional da Dra. Isabely Miranda, cirurgiã-dentista especializada em harmonização orofacial. A direção visual é editorial, elegante, clínica e humana.

A aplicação vive em `portifolio-isa/`. A home está estruturalmente completa, do Hero ao Footer, com oito seções. O layout desktop está aprovado, a revisão estática mobile está aprovada e a camada de animações GSAP está implementada e validada em desktop, emulação mobile e aparelho físico.

**Stack:** Next.js 16 (App Router), React 19, TypeScript estrito, Tailwind CSS 4 via PostCSS, CSS Modules, GSAP 3.15, npm.

**Servidor local oficial:** `http://localhost:3001/`

**Repositório:** `https://github.com/attlasdev/drisabellymiranda.git`, branch `main`.

### Documentação de apoio

| Arquivo | Papel |
| --- | --- |
| `anexo-memoria-curta.md` | Estado atual resumido do projeto |
| `portifolio-isa/anexo.md` | Briefing visual e técnico permanente |
| `portifolio-isa/docs/design/` | Especificação detalhada de cada seção |
| `portifolio-isa/docs/handoff/sessao-animacoes-concluida.md` | Contrato técnico do sistema de animações |
| `CLAUDE.md` | Diretrizes gerais do projeto |

---

## Regras invioláveis

Estas regras valem para toda tarefa deste plano.

1. **GSAP é a única biblioteca de animação.** Não adicionar Framer Motion, Lenis ou qualquer outra lib de movimento.
2. **Não regredir layouts aprovados.** Desktop e mobile estáticos estão validados. Mudança visual relevante exige pedido explícito do responsável.
3. **Não alterar timings, direções ou escopos de animação já aprovados** sem pedido explícito.
4. **Não tocar no acervo original de fotos.** As pastas `FOTOS - PACIENTES` e `FOTOS ISA` não podem ser alteradas, apagadas, renomeadas ou comprimidas. Apenas assets aprovados entram em `portifolio-isa/public/`.
5. **Não inventar conteúdo clínico.** Textos, tratamentos, promessas, credenciais e resultados só entram no site quando fornecidos pelo responsável. Se faltar conteúdo, a tarefa fica bloqueada — não preencher com suposição.
6. **Preferir Server Components.** Usar `"use client"` apenas quando houver interatividade real, API de browser ou animação GSAP.
7. **Respeitar `prefers-reduced-motion`.** A página precisa continuar íntegra e legível sem movimento.
8. **Consultar a spec da seção em `portifolio-isa/docs/design/` antes de editá-la.**
9. **Ler antes de escrever.** Nenhuma tarefa começa sem ler a documentação de apoio relevante.

### 10. Nunca clonar uma seção da home dentro de uma página interna

Esta regra existe porque o erro já foi cometido: uma versão anterior deste plano dizia "reuso literal da Seção 7" e o resultado foi a seção de CTA da home reproduzida inteira, com a mesma fotografia de fundo, no fim de uma página interna. O usuário via a mesma tela duas vezes na mesma navegação.

**Reuso permitido é de vocabulário visual, não de seção inteira.** Concretamente:

- **Pode** reaproveitar tokens de cor da paleta aprovada, escalas tipográficas, o desenho do botão pill, o `ArrowUpRightIcon`, a espessura das divisórias, o padrão de eyebrow em caixa alta.
- **Pode** importar um componente que já foi construído para receber conteúdo por prop, como `FaqAccordion`.
- **Não pode** importar o CSS Module de uma seção da home para vestir um bloco de página interna.
- **Não pode** reproduzir a composição de uma seção da home (mesmo fundo + mesma fotografia + mesma hierarquia + mesmo peso vertical) em outra rota.

Uma página interna termina com um encerramento **próprio e menor** que o da home: sem fotografia de fundo, sem ocupar dobra inteira, sem repetir o título editorial do CTA da home. A home é o palco; as páginas internas são leitura.

### 11. Nenhum layout novo pode nascer de decisão do executor

Todo bloco visual de uma tarefa deve estar descrito neste plano antes de ser construído. Se durante a execução aparecer uma necessidade de layout que o plano não previu, **parar e perguntar ao responsável** — não improvisar uma composição e seguir.

O critério é: qualquer pessoa que leia a tarefa deve conseguir prever como a tela vai ficar. Se a tarefa deixa margem para duas telas muito diferentes, ela está mal escrita e precisa ser detalhada antes de executar.

### 12. Não criar conteúdo genérico de preenchimento

Não escrever textos, títulos, itens de lista ou dados fictícios para "dar volume" a uma página. Se o conteúdo real não chegou, a tarefa fica bloqueada.

A única exceção é um **estado vazio declarado** — uma área que se anuncia como pendente, como o placeholder já existente no modal de Resultados. Estado vazio é honesto; texto inventado que parece final não é.

---

## Antes de começar

```bash
cd portifolio-isa && npm install
```

```bash
cd portifolio-isa && npm run dev
```

Abrir `http://localhost:3001/`. Verificar se a porta `3001` já está em uso antes de subir outro servidor.

### Verificações obrigatórias ao final de cada tarefa

```bash
cd portifolio-isa && npm run lint
```

```bash
cd portifolio-isa && npx tsc --noEmit
```

Em marcos maiores, rodar também o build com o servidor de desenvolvimento parado, para evitar conflito na pasta `.next`:

```bash
cd portifolio-isa && npm run build
```

Validar visualmente em `1920 × 1080 px` e em pelo menos um viewport móvel próximo de `390 × 844 px`, conferindo ausência de overflow horizontal e de erros no console.

---

## Tarefas

### 1. Ativar o link oficial do WhatsApp

**Status:** `[x]` concluída e verificada em `2026-08-22`

**Problema atual:** o CTA de contato aponta para `https://wa.me/` sem número. O botão principal de conversão do site não leva a lugar nenhum.

**Dado oficial:** o WhatsApp da Dra. Isabely é `+55 33 98849-7305`, o que produz o destino `https://wa.me/5533988497305`.

**Escopo:**

- Em `portifolio-isa/src/content/contact.ts`, trocar `whatsappHref` de `https://wa.me/` para `https://wa.me/5533988497305` e remover o comentário de destino provisório.
- Manter o número em um único lugar. Nenhum componente pode ter o número escrito diretamente.
- Verificar todos os pontos do site que levam ao WhatsApp e garantir que todos consumam essa mesma fonte.
- Não adicionar mensagem pré-preenchida (`?text=`) nesta tarefa. Se for desejada depois, ela vira tarefa própria com a copy definida pelo responsável.

**Critérios de aceite:**

- O número existe em um único lugar do código.
- O CTA abre a conversa correta em desktop e em celular.
- O link abre em nova aba com `rel` adequado.
- `npm run lint` e `npx tsc --noEmit` passam.

**Conferência antes do deploy:** confirmar com a responsável que o número com o nono dígito (`98849-7305`) está correto, abrindo o link em um aparelho real e checando se cai na conversa certa.

**Verificado em `2026-08-22`:** `whatsappHref` passou a ser `https://wa.me/5533988497305` em `src/content/contact.ts`, fonte única — o único consumidor é `ContactCtaSection`, e nenhum componente escreve o número diretamente. No HTML renderizado o link sai como `href="https://wa.me/5533988497305" target="_blank" rel="noopener noreferrer"`, sem nenhuma ocorrência restante de `wa.me/` vazio. O `rel` ganhou `noopener` explícito. `lint`, `tsc --noEmit` e `build` passaram.

**Continua pendente:** a conferência do número com a responsável em aparelho real, descrita acima. Isso não é verificável por código.

---

### 2. Páginas de procedimento — uma rota por tratamento

**Status:** `[!]` bloqueada — esqueleto travado, aguardando conteúdo real de cada procedimento

**Comportamento definido:** cada card da seção Tratamentos abre uma rota própria com uma página que explica aquele procedimento. Não é modal, não é âncora, não é seção da home: é navegação para uma página nova. Toda a área do card é clicável, não apenas o rótulo `Saiba mais`.

O destino atual `#contato` do `Saiba mais` é provisório e está errado ([TreatmentCard.tsx](portifolio-isa/src/components/treatments/TreatmentCard.tsx)). Ele deve ser substituído pela rota do procedimento correspondente.

As três rotas iniciais correspondem aos três tratamentos atuais: Preenchimento labial, Toxina Botulínica e Rinomodelação. O layout e a arquitetura de informação são **os mesmos para todos os procedimentos, presentes e futuros** — este esqueleto é o template único.

**Referência de partida:** páginas de tratamento de `drakureski.com.br` (concorrente direta). Usadas só para mapear estrutura de informação — nunca para copiar texto, imagem ou o bloco de resultados/conteúdo em vídeo que elas têm.

#### Arquitetura de informação e layout — travados

Alternância clara/escuro em capítulos, reproduzindo em miniatura o ritmo que a home inteira já usa (Hero escuro → Seção 2 clara → Consulta escura → Resultados/FAQ claras → CTA escuro). **Sem fotografia em nenhum bloco** — nem as fotos já usadas nos cards de Tratamentos, nem qualquer foto nova. Sem link ou referência à seção Resultados reais: o modal de Resultados é território exclusivo da home, não é reaberto nem referenciado por esta página.

```
#F8F7F4 ──────────────────────────────
  link discreto de retorno "Voltar para tratamentos" (topo, alinhado
  à esquerda, Inter caixa alta, mesma escala do eyebrow)
  eyebrow "TRATAMENTOS" · H1 Playfair · frase-resumo
  (a frase-resumo é a mesma description do card na home — continuidade do clique)
──────────────────────────────────────
#535353 (mesmo registro escuro da Seção 4 — Consulta)
  tira de dados — até 4 itens curtos, Inter, texto claro #F5F5F2
  faixa de altura contida: padding-block generoso mas SEM min-height de
  dobra; este bloco é uma faixa de dados, não uma seção de tela cheia
──────────────────────────────────────
#F8F7F4
  O que é
  Quando é indicado (incluindo, quando fizer sentido, quando NÃO é indicado)
  ─── divisória fina ───
  Perguntas que chegam antes da avaliação (acordeão FaqAccordion)
  ─── divisória fina ───
  Outros tratamentos (links para as demais rotas de procedimento)
──────────────────────────────────────
#535353 — encerramento próprio da página (NÃO é a Seção 7 da home)
  ver especificação abaixo
──────────────────────────────────────
```

**Especificação do encerramento** — leia a Regra 10 antes de construir. Este bloco é um rodapé de conversão enxuto, deliberadamente menor que o CTA da home:

- Fundo `#535353` chapado. **Sem a fotografia de fundo** que a Seção 7 usa (`harmonizacao.webp` a 12%) — essa imagem é assinatura da home.
- **Sem `min-height` de dobra.** Altura definida apenas pelo conteúdo mais padding. A Seção 7 usa `min-height: 100svh`; aqui isso é proibido.
- Uma linha curta de convite (uma frase, Inter, não Playfair em escala editorial) + o botão pill de WhatsApp. **Sem eyebrow, sem título editorial grande, sem parágrafo de apoio** — esses três elementos são o que caracteriza a Seção 7 e não se repetem aqui.
- O botão reutiliza o desenho aprovado (pill, fundo `#F8F7F4`, texto `#535353`, ícone `WhatsappLineIcon` de 20px, caixa alta, `min-height` de toque preservado), mas com CSS próprio desta página. **Não importar `contact-cta-section.module.css`.**

No mobile, a tira de dados empilha verticalmente, seguindo o mesmo padrão de empilhamento que os cards de Tratamentos já usam.

#### Decisões técnicas — padrão a seguir salvo objeção

- Rota dinâmica `portifolio-isa/src/app/tratamentos/[slug]/page.tsx`, slugs iguais aos títulos em kebab-case: `preenchimento-labial`, `toxina-botulinica`, `rinomodelacao`.
- Sem rota índice de tratamentos. A Seção 3 da home já é o índice; o bloco `Outros tratamentos` no rodapé de cada página faz a navegação cruzada. Reavaliar só se a lista de procedimentos crescer muito.
- Conteúdo estruturado migra de `treatments` (array simples em `src/content/treatments.ts`) para um objeto por slug com os campos do modelo abaixo, mantendo os campos hoje usados pelo card da home (`title`, `description`, `image`, `imageAlt`).
- O número de WhatsApp vem de `src/content/contact.ts` (Tarefa 1). Reutilizar o **dado**, não o componente `ContactCtaSection`. Mensagem pré-preenchida por procedimento fica de fora deste escopo.
- Definir `generateStaticParams` e `generateMetadata` por slug; slug inexistente chama `notFound()`.
- **Reuso do `FaqAccordion`** ([FaqAccordion.tsx](portifolio-isa/src/components/faq/FaqAccordion.tsx)): **as duas armadilhas foram resolvidas em `2026-08-22`.** O componente agora aceita `idPrefix` (padrão `"faq"`) e `initialOpenIndex` (padrão `0`). Os defaults preservam exatamente o comportamento aprovado na home, que foi reverificado no HTML renderizado. Ao reutilizar nesta página, passar um `idPrefix` próprio — senão dois acordeões na mesma tela colidem em `aria-controls` — e decidir explicitamente o `initialOpenIndex`.
- **Não animar** esta página nesta tarefa. A camada GSAP atual está montada para a home dentro de `SmoothScroll`; introduzir movimento aqui é escopo separado e precisa de pedido explícito.

#### Estrutura de arquivos esperada

Para não gerar um componente monolítico:

```
src/app/tratamentos/[slug]/page.tsx      — rota, metadata, notFound
src/components/treatment-page/            — blocos desta página
src/content/treatments.ts                 — conteúdo por slug
```

#### Modelo de conteúdo necessário, por procedimento

Campos que precisam de texto real da responsável antes da implementação começar — nenhum deles pode ser inventado:

- `oQueE`: texto corrido explicando o procedimento.
- `quandoIndicado`: texto corrido, incluindo quando não é indicado, quando fizer sentido.
- `tiraDeDados`: até 4 pares rótulo/valor curtos.
- `perguntas`: lista de perguntas e respostas para o acordeão (quantidade livre, sem precisar bater com as 7 do FAQ da home).

#### Critérios de aceite

Técnicos:

- As três rotas respondem e o card inteiro da home leva à rota correta.
- Nenhum `#contato` restante em `TreatmentCard.tsx`.
- `npm run lint`, `npx tsc --noEmit` e `npm run build` passam.
- Sem overflow horizontal em `360`, `390`, `430` e `1920 px`; sem erros de console.
- Navegação por teclado funciona e o foco é visível em todos os controles.

Visuais — a página reprovada se qualquer um falhar:

- Colocando um print desta página ao lado de um print da home, **não existe nenhuma tela que pareça a mesma coisa duas vezes**.
- O encerramento não ocupa dobra inteira e não tem fotografia de fundo.
- Nenhum CSS Module de `src/components/sections/` foi importado por esta página.
- Nenhum texto visível foi inventado pelo executor: todo conteúdo veio do que a responsável entregou.

**Não iniciar a implementação enquanto o conteúdo real dos três procedimentos não for entregue.** Escopo estrutural, layout e decisões técnicas desta tarefa estão fechados; falta somente o conteúdo.

---

### 3. Página `Conheça minha trajetória`

**Status:** `[!]` bloqueada — esqueleto travado, aguardando conteúdo real (formação, certificados, eventos) e a fotografia

**Comportamento definido:** o botão `Conheça minha trajetória`, hoje desabilitado (`<p>` estático, sem `href`, `aria-label` "em breve") na seção Consulta e planejamento ([ConsultationPlanningSection.tsx](portifolio-isa/src/components/sections/ConsultationPlanningSection.tsx)), passa a ser um link real para uma rota nova com página institucional sobre a Dra. Isabely, em 1ª pessoa (é portfólio pessoal, não terceiros).

**Referência de partida:** página `dra-paula` de `drakureski.com.br` (mesma concorrente usada como referência da Tarefa 2). Usada só para estrutura — adaptar para 1ª pessoa, nunca copiar texto.

#### Arquitetura de informação e layout — travados

Mesma gramática clara/escura que a Tarefa 2 já estabeleceu, para o site inteiro falar a mesma língua visual.

```
#F8F7F4 ──────────────────────────────
  link discreto de retorno "Voltar para o início" (topo, à esquerda)
  cápsula de foto (ver abaixo) + eyebrow "Minha trajetória" ·
  H1 "Isabely Miranda" · parágrafo de abertura em 1ª pessoa
  (mobile: foto acima do texto; desktop: foto à esquerda, texto à direita —
  mesma leitura da Seção 4, sem copiar suas coordenadas absolutas)
──────────────────────────────────────
#535353 (mesma faixa de dados da Tarefa 2, altura contida, sem dobra)
  fatos rápidos: especialidade · registro profissional · atendimento
  (Especialidade "Harmonização Orofacial" e registro "CRO-MG 72298" já
  são dados reais, já usados no Footer — não são placeholder)
──────────────────────────────────────
#F8F7F4
  Minha abordagem — curto; aprofunda, não repete o que a Seção 4 já diz
  Áreas de atuação — lista dos procedimentos (mesmos títulos de
  src/content/treatments.ts); vira lista de links quando a Tarefa 2 sair
  ─── divisória fina ───
  Formação — lista cronológica: curso · instituição · ano
  Trajetória e atualização — cursos, palestras, eventos, certificados,
  como texto estruturado (título + descrição breve) — SEM exibir
  certificados escaneados como imagem, decisão já validada
──────────────────────────────────────
#535353 — encerramento próprio da página
  mesma especificação de encerramento definida na Tarefa 2:
  fundo chapado, sem fotografia, sem min-height de dobra,
  uma linha de convite + botão pill de WhatsApp, CSS próprio
──────────────────────────────────────
```

**Cápsula de foto:** a responsável vai fornecer uma fotografia nova especificamente para esta página (não reaproveitar `hero` nem `consulta-planejamento`, já usadas em outras seções). Até a foto chegar, reservar a área com um estado vazio explícito — mesmo vocabulário visual já usado no placeholder do modal de Resultados ([results-modal.module.css](portifolio-isa/src/components/results/results-modal.module.css): fundo `#dedbd6` com destaque radial suave, texto `#6c6862`, rótulo em caixa alta) — em vez de uma caixa cinza genérica ou de inventar uma foto. A cápsula deve usar a mesma proporção `7 / 9` que a foto da Seção 4 usa, para que a troca pela imagem real não mexa no layout.

#### Decisões técnicas — padrão a seguir salvo objeção

- Rota `portifolio-isa/src/app/trajetoria/page.tsx`.
- `ConsultationPlanningSection.tsx`: trocar o `<p aria-label="...em breve">` por um `<Link href="/trajetoria">`, preservando o atributo `data-consultation-trajectory` (é o seletor que a cascata GSAP em `SmoothScroll.tsx` já usa — trocar de `<p>` para link não pode remover esse atributo). Adicionar `:focus-visible` visível, já que o elemento passa a ser focável.
- Sem link nem referência à seção Resultados reais, mesma regra da Tarefa 2.
- **Não animar** esta página nesta tarefa, mesma regra da Tarefa 2.
- O `SiteFooter` pode ser reutilizado como está — ele já é um componente de layout global, não uma seção de conteúdo da home.

#### Conteúdo necessário antes de implementar

- Fotografia nova para o topo da página.
- Parágrafo de abertura em 1ª pessoa (quem sou, especialidade, desde quando atuo).
- Lista de formação: curso, instituição, ano — pode chegar aos poucos, item por item.
- Lista de trajetória/atualização: certificados, especializações únicas, eventos — também pode chegar aos poucos.
- Uma linha de convite para o encerramento.
- Confirmar se um bloco pessoal/humanizado (tipo "como comecei") entra ou não; não faz parte do esqueleto travado.

#### Critérios de aceite

Técnicos:

- `/trajetoria` responde e o botão da Seção 4 leva até ela.
- A cascata GSAP da Seção 4 continua funcionando (o `data-consultation-trajectory` foi preservado).
- `npm run lint`, `npx tsc --noEmit` e `npm run build` passam.
- Sem overflow horizontal em `360`, `390`, `430` e `1920 px`; sem erros de console.
- Navegação por teclado funciona e o foco é visível em todos os controles.

Visuais — a página reprovada se qualquer um falhar:

- Colocando um print desta página ao lado de um print da home, **não existe nenhuma tela que pareça a mesma coisa duas vezes**.
- O encerramento não ocupa dobra inteira e não tem fotografia de fundo.
- Nenhum CSS Module de `src/components/sections/` foi importado por esta página.
- Nenhum texto visível foi inventado pelo executor: todo conteúdo veio do que a responsável entregou.
- A área de foto está claramente anunciada como pendente enquanto a imagem real não chegar.

**Não iniciar a implementação enquanto o conteúdo mínimo (foto + abertura + ao menos um item de formação) não for entregue.** Se algum bloco continuar sem conteúdo no momento da execução, ele **não é renderizado** — não preencher com texto genérico (Regra 12).

---

> Novas tarefas serão adicionadas conforme o mapeamento avançar com a responsável.

---

## Dados oficiais confirmados

Valores reais já fornecidos, para não serem tratados como provisórios.

| Dado | Valor | Onde vive |
| --- | --- | --- |
| WhatsApp | `https://wa.me/5533988497305` | `src/content/contact.ts` |
| Instagram | `https://www.instagram.com/draisabellymiranda/` | `src/content/footer.ts` — já implementado |

---

## Backlog a refinar

Itens já conhecidos que ainda precisam ser transformados em tarefas completas, com escopo e critérios de aceite.

| Item | Natureza | Bloqueio |
| --- | --- | --- |
| Link oficial do Google Maps no botão `Como chegar` do footer | Conteúdo + código | Aguarda URL oficial |
| Copy final das sete perguntas e respostas do FAQ | Conteúdo | Aguarda texto final |
| Lista final de tratamentos e suas fotografias | Conteúdo + código | Aguarda definição e assets |
| 66 casos reais do modal de Resultados, 11 por categoria | Conteúdo + código | Aguarda assets |
| SEO completo: metadata, Open Graph, sitemap, robots | Código | Aguarda domínio definido |
| Auditoria final de acessibilidade e performance | Código | Depende das tarefas acima |
| Deploy | Infra | Último passo do projeto |

---

## Histórico

- `2026-08-22` — Plano criado. Pendência das animações GSAP em celular físico encerrada como resolvida.
- `2026-08-22` — WhatsApp oficial recebido e tarefa 1 desbloqueada. Definido que os cards de Tratamentos e o botão `Conheça minha trajetória` abrem rotas próprias; esqueletos das páginas em definição.
- `2026-08-22` — Esqueleto da página de procedimento travado: capítulos claro/escuro sem fotografia, sem referência à seção Resultados, acordeão de perguntas reaproveitado do FAQ, fechamento reaproveitado da Seção 7. Tarefa 2 aguarda apenas conteúdo real.
- `2026-08-22` — Esqueleto da página `Conheça minha trajetória` travado, mesma gramática clara/escura das outras tarefas. Foto nova a caminho (área reservada com placeholder no padrão do modal de Resultados); certificados entram como texto, não imagem. Chegou a ser implementada em código por engano e foi revertida — este plano permanece só documentação até a etapa de execução.
- `2026-08-22` — Tarefa 1 concluída: WhatsApp oficial ativo, com o número em fonte única e verificado no HTML renderizado. `FaqAccordion` preparado para reuso (`idPrefix` e `initialOpenIndex`), sem alterar o comportamento da home.
- `2026-08-22` — Plano lapidado após a implementação revertida ter clonado a seção de CTA da home dentro da página de trajetória. Adicionadas as Regras 10, 11 e 12 (proibição de clonar seções da home, proibição de layout decidido pelo executor, proibição de conteúdo genérico). O encerramento das páginas internas passou a ter especificação própria e explícita em vez de "reuso literal da Seção 7". Adicionados critérios de aceite visuais às Tarefas 2 e 3, e registradas as armadilhas reais do `FaqAccordion` (ids fixos e primeiro item aberto por padrão).
