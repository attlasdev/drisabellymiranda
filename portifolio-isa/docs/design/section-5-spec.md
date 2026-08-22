# Seção 5 — Resultados reais

## Escopo atual

Nesta etapa, a seção contém seu frame, tag, título e uma grade de seis cards interativos. Cada categoria abre um modal navegável de casos de antes/depois.

## Base de medição

- Frame desktop de referência: `1920 × 1600 px`.
- Fundo: `#F8F7F4`.
- ID da seção: `resultados`.

## Tag

- Texto: `RESULTADOS REAIS`.
- Posição: `X 220`, `Y 150`.
- Dimensões: `152 × 15 px`.
- Família: Inter Medium.
- Tipografia: `13/16 px`, tracking `10%`.
- Cor: `#535353` a `70%` de opacidade.

## Título

- Texto:

```text
Resultados que refletem
técnica, naturalidade e cuidado.
```

- Posição: `X 220`, `Y 198`.
- Dimensões: `820 × 119 px`.
- Família: Playfair Display Medium.
- Tipografia: `56/62 px`, tracking `0%`.
- Cor: `#535353`.

## Cards de resultados

- Dimensões de cada card: `472 × 500 px`.
- Fundo: `#D9D9D9`.
- Raio: `12 px` em todos os cantos.
- Espaçamento horizontal: `32 px`.
- Espaçamento vertical: `33 px`.
- Posições no frame desktop:
  - Preenchimento labial: `X 220`, `Y 400`.
  - Toxina Botulínica: `X 724`, `Y 400`.
  - Rinomodelação: `X 1228`, `Y 400`.
  - Full Face: `X 220`, `Y 933`.
  - Bioestimulador: `X 724`, `Y 933`.
  - Outros tratamentos: `X 1228`, `Y 933`.
- Área de fotos: `472 × 236 px`, na origem de cada card (`X 0`, `Y 0`).
  - Preenchimento labial: `public/images/results/preenchimento-labial-antes-depois.png`.
  - Toxina Botulínica: `public/images/results/toxina-botulinica-antes-depois.png`.
  - Rinomodelação: `public/images/results/rinomodelacao-antes-depois.png`.
  - Full Face: `public/images/results/full-face-antes-depois.png`.
  - Bioestimulador: `public/images/results/bioestimulador-antes-depois.png`.
  - Outros tratamentos: `public/images/results/outros-tratamentos-antes-depois.png`.
- Título: `X 28`, `Y 260`; Playfair Display Regular, `24/30 px`, `#535353`.
- Metadados: `X 28`, `Y 315`; Inter Medium, `11/14 px`, tracking `8%`.
  - `12 casos`: `#535353` a `70%` de opacidade.
  - `VER RESULTADOS →`: `#535353`.
  - A seta horizontal foi preservada e recebeu correção óptica de `2 px` para cima, ficando centralizada com os metadados.
- Depoimento: `X 28`, `Y 343`, `416 × 112 px`; fundo `#F1EFEB`, raio `8 px`.
  - Texto: `X 66`, `Y 29` no frame do depoimento; Inter Medium, `13/16 px`, tracking `8%`, `#535353`.
  - Assinatura: `X 66`, `Y 70` no frame do depoimento; Inter Medium, `11/14 px`, tracking `8%`, `#535353` a `65%` de opacidade.
  - Os depoimentos provisórios possuem comprimento equivalente e autores distintos, conforme orientação do usuário.
- Toda a área do card é um botão, com `aria-haspopup="dialog"`, foco visível e rótulo acessível.
- Hover/foco no desktop usa elevação suave, sombra, escala discreta da imagem e deslocamento óptico da seta; redução de movimento remove essas transições.

## Modal de casos

- Implementação: `src/components/results/ResultsModal.tsx` e `ResultsModal.module.css`.
- O modal é renderizado por portal e exposto como diálogo acessível com título e descrição associados.
- Cada uma das seis categorias possui 12 posições navegáveis.
- A posição 1 contém o comparativo atual, depoimento e autoria já exibidos no card.
- As posições 2 a 12 são placeholders explícitos até o usuário fornecer os casos reais; são 66 posições provisórias no total.
- Controles anterior e próximo ficam desabilitados nos extremos; `ArrowLeft` e `ArrowRight` oferecem a mesma navegação pelo teclado.
- O modal fecha pelo botão, por `Escape` ou pelo clique fora do painel.
- Durante a abertura, o conteúdo principal fica `inert` e `aria-hidden`, o scroll do documento é travado e o foco fica confinado no diálogo.
- Ao fechar, o foco retorna ao card que abriu o modal.
- A imagem preenchida apresenta rótulos visuais `Antes` e `Depois`; placeholders não se anunciam como resultados clínicos reais.

## Mobile estático aprovado em 2026-08-21

- O título usa escala fluida entre `40` e `44 px`, entrelinha `1.1` e quebra natural balanceada em quatro linhas.
- A quebra manual depois de `refletem` é exclusiva do desktop, que permanece em `56/62 px` e duas linhas.
- Os seis cards e seus conteúdos foram aprovados sem alterações nesta revisão.
- A composição estática deve permanecer preservada.

## Interação e animação implementadas em 2026-08-22

- Tag e título entram primeiro.
- Desktop: cards entram inteiros por linha em `1.08 s`, com stagger `0.17 s` e `power3.out`.
- Mobile: cada card recebe seu próprio gatilho e entra inteiro; as informações internas não animam separadamente.
- O modal se adapta à largura e à altura útil do mobile, preserva safe areas e mantém os controles alcançáveis.
- Em `prefers-reduced-motion`, cards e modal chegam diretamente ao estado final sem transições.
