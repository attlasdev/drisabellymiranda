# Seção 3 — abertura de tratamentos

## Escopo atual

Nesta etapa, a seção contém o título, o subtítulo e três cards completos usados para validação. Haverá outros procedimentos futuramente. As fotografias atuais já foram incorporadas e o layout estático mobile foi aprovado; a etapa seguinte planeja a animação primeiro no desktop.

## Base de medição

- Frame desktop de referência: `1920 × 1080 px`.
- Fundo: `#F8F7F4`, igual à seção 2.
- As coordenadas originais estavam dentro do frame conjunto das seções 2 e 3. Foi descontada a altura de `1080 px` da seção 2 para obter as posições locais abaixo.

## Título

- Texto: `Tratamentos`.
- Posição local: `X 518`, `Y 266`.
- Dimensões da caixa: `W 884`, `H 102`.
- Família: `Playfair Display`.
- Peso: `Regular` (`400`).
- Tamanho: `56 px`.
- Line-height: `62 px`.
- Letter-spacing: `0%`.
- Alinhamento: centralizado.
- Cor: `#535353`.

## Subtítulo

Texto:

```text
Abordagens pensadas a partir das necessidades e
características de cada rosto.
```

- Posição local: `X 741`, `Y 352`.
- Dimensões da caixa: `W 426`, `H 102`.
- Tamanho: `16 px`.
- Line-height: `18 px`.
- Letter-spacing: `0%`.
- Alinhamento: centralizado.
- Cor: `#535353`.
- A palavra `pensadas` recebe a variação itálica de `Playfair Display`, reproduzindo a tipografia mista mostrada na referência.

## Lista de tratamentos

- A sequência alterna automaticamente: direita, esquerda, direita, esquerda.
- Distância vertical entre os cards: `96 px` no frame desktop.
- O primeiro card começa alinhado à direita.
- As fotografias fornecidas foram incorporadas em `public/images/treatments/`:
  - `preenchimento-labial.png` para Preenchimento labial.
  - `toxina-botulinica.png` para Toxina Botulínica.
  - `rinomodelacao.png` para Rinomodelação.
- As imagens usam `object-fit: cover`; um degradê escuro suave à esquerda e na parte inferior mantém legíveis os textos claros.

## Mobile aprovado em 2026-08-21

- Validado em `360`, `390` e `430 px`, sem overflow horizontal.
- Título fluido entre `40` e `48 px`; subtítulo fluido entre `14` e `15 px`.
- O trilho de cards ocupa `100vw`, com distância vertical de `64 px`.
- Cada card mede `90vw` e preserva a proporção `1.18`.
- Ordem automática: direita, esquerda, direita.
- Card à direita encosta na borda direita, mantém esse lado reto e usa raio de `24 px` apenas à esquerda; o card à esquerda espelha a regra.
- Título interno fluido entre `24` e `28 px`; descrição e CTA em `13 px`.
- `Saiba mais` preserva a seta de `22 px` e possui alvo mínimo de toque de `44 px`.
- Conceito futuro informado: entrada alternada pelos lados correspondentes. Gatilho, pinning, scrub, duração e easing ainda dependem do briefing do usuário.

## Card-base

- Posição do primeiro card: `X 874`, `Y 561` dentro da seção 3.
- Dimensões: `W 1046.15`, `H 680`.
- Primeiro card: cantos esquerdos com `32 px`; cantos direitos retos.
- Cards alinhados à esquerda espelham os raios.

### Conteúdo do primeiro card

- Título: `Preenchimento labial`.
- Título: `X 80`, `Y 472`, `W 381`, `H 46`, Playfair Display Regular, `40/46 px`, `#F5F5F2`.
- Descrição: `Proporção, contorno e suporte planejados com naturalidade.`
- Descrição: `X 80`, `Y 530`, `W 420`, `H 47`, Inter Regular, `16/24 px`, `#F5F5F2` a `80%`.
- CTA: `Saiba mais` com `ArrowUpRightIcon` de `22 px`, traço `1.35`, inclinação de `45°` e alinhamento central.
- CTA: `X 80`, `Y 615`, `W 82`, `H 24`, Inter Regular, `16/24 px`, `#F5F5F2` a `90%`.

### Conteúdo do segundo card

- Alinhamento: esquerda.
- Título: `Toxina Botulínica`.
- Descrição: `Avaliação cuidadosa da expressão e do movimento para suavizar sem apagar o que torna seu rosto único.`

### Conteúdo do terceiro card

- Alinhamento: direita.
- Título: `Rinomodelação`.
- Descrição: `Uma alternativa sem cirurgia, indicada após avaliação cuidadosa de anatomia, proporção e segurança.`
