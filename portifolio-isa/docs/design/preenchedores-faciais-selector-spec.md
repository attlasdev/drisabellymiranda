# Preenchedores Faciais — seletor de procedimentos

## Status

Segunda rodada funcional para validação visual e de interação em `2026-08-24`. O conteúdo clínico continua provisório; esta rodada valida apenas a nova regra de navegação dentro da página guarda-chuva.

## Regra central

- A rota continua sendo `/tratamentos/preenchedores-faciais`.
- O cabeçalho visual geral com `Preenchedores Faciais` e sua descrição foi removido para não repetir o card da home nem competir com os títulos das duas colunas.
- Um `h1` visualmente oculto preserva o título semântico da rota.
- A página abre diretamente no modelo `seletor + conteúdo`.
- `Preenchimento labial` inicia selecionado.
- Somente um procedimento é apresentado por vez.
- Ao escolher outro item, apenas a coluna de conteúdo é atualizada; não há recarregamento nem empilhamento dos seis conteúdos.

## Composição desktop amplo

- Breakpoint inicial da composição lateral: `75rem` (`1200 px`).
- Casca máxima: `80rem` (`1280 px`).
- Coluna de seleção: até `20rem` (`320 px`).
- Intervalo entre colunas: até `4rem` (`64 px`).
- Coluna de conteúdo: até `56rem` (`896 px`), a mesma medida aprovada das páginas internas.
- O seletor usa `position: sticky` e acompanha a leitura da coluna direita sem criar rolagem interna.
- `Voltar para tratamentos` aparece na coluna esquerda, acima de `Escolha o tratamento`.
- O topo de `Preenchimento labial` se alinha ao topo de `Escolha o tratamento`; o eyebrow da direita ocupa a faixa imediatamente acima, fazendo o conteúdo principal começar na mesma altura sem rebaixar sua hierarquia.
- Os seis controles aparecem numa grade de duas colunas por três linhas.
- Cada controle é um botão horizontal compacto com marcador circular; os cards numerados da primeira rodada foram removidos.

## Coluna direita preservada

- Mantém `PageProse`, `TreatmentQuestions` e `TreatmentLinks`.
- Mantém os capítulos `O que é`, `Quando é indicado`, perguntas frequentes e `Outros tratamentos`.
- Recebe apenas um cabeçalho local para identificar o procedimento selecionado.
- O cabeçalho local usa um pequeno marcador linear antes do rótulo, título de maior presença e divisória inferior; o primeiro capítulo se aproxima para que a abertura da direita pareça composta, não solta.
- A faixa escura de duração, anestesia, retorno e durabilidade foi retirada de todas as páginas de tratamentos. Os dados continuam estruturados, mas não aparecem até ser validado um local menos precoce, possivelmente no FAQ.
- O capítulo editorial ocupa toda a largura disponível da coluna direita.
- O encerramento com WhatsApp permanece global, depois da experiência `seletor + conteúdo`.

## Tablet e mobile

- Abaixo de `75rem`, a página volta a uma única coluna e preserva a largura aprovada `--ip-shell`.
- O seletor aparece antes do conteúdo e continua em grade `2 × 3`.
- Os controles mantêm área mínima de toque superior a `44 px`.
- Não há coluna sticky nem rolagem interna no mobile nesta rodada.

## Interação e acessibilidade

- Os mini cards são botões com semântica de tabs (`tablist`, `tab`, `tabpanel`).
- O selecionado usa `aria-selected="true"`, fundo escuro e texto claro.
- O teclado navega entre as opções por setas, `Home` e `End`.
- A troca remonta o painel ativo para que estados internos, como o FAQ aberto, não vazem de um procedimento para outro.
- Ao trocar o procedimento, a página volta ao topo e somente a coluna direita faz uma saída e entrada em fade com GSAP.
- Em `prefers-reduced-motion`, a seleção e o retorno ao topo são imediatos, sem fade.
- Nesta rodada, a seleção vive apenas no estado da página; a URL compartilhável fica para uma rodada posterior.

## Conteúdo em validação

- Cada subtipo recebe estrutura própria em `src/content/treatments.ts`.
- `Preenchimento labial` e `Rinomodelação` receberam rascunhos autorais em `2026-08-24`, baseados nas páginas de referência fornecidas pelo usuário.
- `Queixo`, `Mandíbula`, `Maçãs do rosto` e `Bigode chinês` receberam rascunhos complementares baseados em documentação regulatória e literatura científica.
- Todos os seis rascunhos precisam de revisão e aprovação da Dra. Isabelly antes da publicação.
- O conteúdo de `Full Face` não foi usado como se fosse uma explicação específica das quatro regiões; ele orientou apenas o princípio de avaliação global.
- O mapeamento de fontes e limitações está em `docs/handoff/tratamentos-conteudo-pesquisa.md`.
