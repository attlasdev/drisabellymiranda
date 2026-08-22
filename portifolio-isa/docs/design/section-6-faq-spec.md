# Seção 6 — Perguntas frequentes

## Escopo atual

A seção estabelece o sistema visual e interativo do FAQ com sete perguntas e respostas provisórias. O conteúdo poderá ser substituído depois sem alterar a composição.

## Direção visual

- Linguagem editorial, minimalista, clínica e acolhedora.
- Fundo creme `#F8F7F4`, igual à seção Resultados reais.
- Texto principal `#535353`.
- Divisórias finas e controles circulares inspirados nas referências fornecidas.
- Sem cards, sombras ou volumes decorativos.
- Uma resposta aberta por vez; a primeira inicia aberta para apresentar o estado expandido.

## Base de medição desktop

- Frame de referência: `1920 × 1080 px`.
- Altura mínima: `1080 px`; a seção cresce quando o conteúdo exigir.
- Área útil: `1480 px`, de `X 220` a `X 1700`.
- Respiro superior: `150 px`.
- Composição em duas colunas:
  - Apresentação: até `472 px`.
  - Intervalo: até `180 px`.
  - Acordeão: espaço restante, aproximadamente `828 px` no frame-base.

## Apresentação

- Tag: `PERGUNTAS FREQUENTES`, Inter Medium, `13/16 px`, tracking `10%`, caixa alta e `#535353` a `70%`.
- Título provisório: `Dúvidas que merecem respostas claras.`
- Título: Playfair Display Medium, `56/62 px`, `#535353`.
- Texto introdutório provisório em Inter Regular, `16/24 px`, com largura máxima de `384 px`.

## Acordeão

- Sete itens vindos de `src/content/faq.ts`.
- Linhas divisórias de `1 px`, em `#535353` com opacidade reduzida.
- Pergunta em Inter Regular, `18/26 px` no desktop.
- Resposta em Inter Regular, `15/23 px`, com contraste secundário.
- Controle circular de `48 × 48 px`, com seta direcional.
- Estado aberto usa preenchimento cinza-claro `#D1D6D8` e seta rotacionada.
- Cada pergunta é um botão real com `aria-expanded` e `aria-controls`.
- Cada resposta possui região associada à pergunta.

## Responsividade

- Mobile-first e sem overflow horizontal.
- Em telas menores, apresentação e acordeão ficam em uma única coluna.
- Padding lateral mínimo de `20 px`, respeitando safe areas.
- Espaço mínimo de toque de `48 px` para os controles.
- Título fluido entre `44 px` e `56 px`.
- A partir de `1024 px`, a seção adota as duas colunas.

## Conteúdo provisório

- As perguntas e respostas servem somente para validar hierarquia, ritmo, expansão e comprimentos variados.
- Evitar promessas clínicas, prazos absolutos ou recomendações individualizadas.
- A troca futura do conteúdo deve acontecer apenas em `src/content/faq.ts`.

## Animação atual

- Tag, título e descrição entram em cascata.
- No desktop, as perguntas entram em sequência com duração `0.7 s`, stagger `0.11 s` e deslocamento inicial de `22 px`.
- No mobile, cada item recebe seu próprio gatilho, com duração aproximada de `0.65 s`.
- As entradas executam uma única vez; a expansão da resposta continua sendo controlada pela transição de grid do acordeão.
- Em `prefers-reduced-motion`, a lista permanece visível e a abertura continua funcional sem movimento.

## Validação

- Desktop: `1920 × 1080 px`.
- Mobile: aproximadamente `390 × 844 px`.
- Conferir foco visível, navegação por teclado, abertura exclusiva e ausência de overflow.
