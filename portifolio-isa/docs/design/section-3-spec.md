# Seção 3 — abertura de tratamentos

## Escopo atual

Nesta etapa, a seção contém o título, o subtítulo e três cards completos usados para validação. Haverá outros procedimentos futuramente. As fotografias, o layout responsivo e a camada de animação atual já foram incorporados.

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
- As seis fotografias aprovadas foram incorporadas em `public/images/treatments/`:
  - `toxina-botulinica.webp` para Toxina Botulínica.
  - `preenchimento-labial.webp` para Preenchedores Faciais.
  - `bioestimulador-de-colageno.webp` para Bioestimulador de Colágeno.
  - `fios-de-pdo.webp` para Fios de PDO.
  - `microagulhamento.webp` para Microagulhamento.
  - `skinbooster.webp` para Skinbooster.
- Os seis arquivos já continham WebP sob a extensão anterior `.png`; a correção da extensão foi feita por cópia byte a byte, sem recompressão, redimensionamento ou perda de qualidade.
- As imagens usam `object-fit: cover`; um degradê escuro suave à esquerda e na parte inferior mantém legíveis os textos claros.
- Os cards usam sombra sutil de referência `0 0.875rem 2.25rem rgb(58 47 41 / 10%)`, sem alterar medidas ou raios.

## Rota pontilhada desktop

- Um SVG vertical conecta visualmente o percurso entre os cards e permanece atrás de todo o conteúdo.
- Linha: cinza esverdeado em baixa opacidade, traço aproximado de `1.35 px` e padrão pontilhado `8 12`.
- Marcadores discretos identificam origem e término.
- A altura do traço é revelada conforme o scroll da seção, com `scrub: 1.2`, início em aproximadamente `top -25%` e fim em `bottom 40%`.
- Esta rota é a única animação da seção que usa scrub.
- O SVG não aparece abaixo do breakpoint desktop nem quando `prefers-reduced-motion` está ativo.

## Mobile aprovado em 2026-08-21

- Validado em `360`, `390` e `430 px`, sem overflow horizontal.
- Título fluido entre `40` e `48 px`; subtítulo fluido entre `14` e `15 px`.
- O trilho de cards ocupa `100vw`, com distância vertical de `64 px`.
- Cada card mede `90vw` e preserva a proporção `1.18`.
- Ordem automática: direita, esquerda, direita.
- Card à direita encosta na borda direita, mantém esse lado reto e usa raio de `24 px` apenas à esquerda; o card à esquerda espelha a regra.
- Título interno fluido entre `24` e `28 px`; descrição e CTA em `13 px`.
- `Saiba mais` preserva a seta de `22 px` e possui alvo mínimo de toque de `44 px`.
- Os cards entram uma única vez pelos lados correspondentes ao alinhamento e assentam com `power4.out`; no mobile, cada card possui seu próprio gatilho.
- A rota pontilhada desktop não é renderizada no mobile.

## Animação atual

- Título e subtítulo entram em uma cascata curta.
- Cards à direita entram pela direita; cards à esquerda entram pela esquerda.
- As entradas usam `once: true`, não recolhem ao rolar de volta e não usam scrub.
- A rota SVG desktop é a exceção explícita e acompanha o scroll.
- Em redução de movimento, cards e cabeçalho permanecem visíveis no estado estático e a rota é ocultada.

## Card-base

- Posição do primeiro card: `X 874`, `Y 561` dentro da seção 3.
- Dimensões: `W 1046.15`, `H 680`.
- Primeiro card: cantos esquerdos com `32 px`; cantos direitos retos.
- Cards alinhados à esquerda espelham os raios.

### Variação — Preenchedores Faciais

- Decisão aprovada em `2026-08-24`: esse card funciona como guarda-chuva e não exibe a descrição curta usada pelos demais tratamentos.
- Abaixo do título, uma lista em duas colunas por três linhas apresenta, nesta ordem: `Preenchimento labial`, `Rinomodelação`, `Queixo`, `Mandíbula`, `Maçãs do rosto` e `Bigode chinês`.
- Os itens usam marcadores circulares pequenos e são apenas informativos; o card inteiro continua sendo o único link para `/tratamentos/preenchedores-faciais`.
- A grade permanece em duas colunas no mobile. Os nomes compactos evitam aumentar a proporção aprovada de `90vw / 1.18`.
- A descrição original permanece no conteúdo estruturado porque alimenta a página interna e sua metadata.

### Conteúdo e ordem atual

- Título: `X 80`, `Y 472`, `W 381`, `H 46`, Playfair Display Regular, `40/46 px`, `#F5F5F2`.
- Descrição dos cards comuns: `X 80`, `Y 530`, `W 420`, `H 47`, Inter Regular, `16/24 px`, `#F5F5F2` a `80%`.
- CTA: `Saiba mais` com `ArrowUpRightIcon` de `22 px`, traço `1.35`, inclinação de `45°` e alinhamento central.
- CTA: `X 80`, `Y 615`, `W 82`, `H 24`, Inter Regular, `16/24 px`, `#F5F5F2` a `90%`.
- Ordem definida em `2026-08-24`:
  1. `Preenchedores Faciais` — direita.
  2. `Toxina Botulínica` — esquerda.
  3. `Bioestimulador de Colágeno` — direita.
  4. `Fios de PDO` — esquerda.
  5. `Microagulhamento` — direita.
  6. `Skinbooster` — esquerda.
