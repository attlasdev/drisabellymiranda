# Hero — especificação de referência

## Base de medição

- Frame desktop de referência: `1920 × 1080 px`.
- Origem das coordenadas: canto superior esquerdo do frame.
- O Hero ocupa toda a primeira dobra nesse frame.
- Fundo sólido: `#555A5D`.
- Cor principal dos textos: `#FFFFFF`.
- Asset original: `/public/images/hero/isabely-hero-original.jpg` (`4024 × 6048 px`).

As coordenadas abaixo descrevem exatamente a composição desktop de referência. Elas não devem ser reutilizadas como valores absolutos em todos os viewports; a implementação responsiva deve preservar as relações visuais no frame de 1920 × 1080 e adaptar a composição nos demais tamanhos.

## Cabeçalho

### Monograma

- Asset oficial: `/public/images/brand/isabely-monogram.svg`.
- O SVG preserva os dois paths vetoriais do arquivo original, com a prancha branca e os metadados externos removidos para uso transparente no site.
- Bounding box no frame desktop: `X 114`, `Y 59.3`, `W 54`, `H 41.3`.
- Centro vertical: `Y 80`, alinhado exatamente ao centro vertical do frame da navegação (`Y 68`, `H 24`).

### Navegação

- Posição: `X 373`, `Y 68`.
- Dimensões do frame: `W 583`, `H 24` (Hug × Hug).
- Auto layout: horizontal.
- Gap: `-15 px`.
- Padding: `0`.
- Itens: `SOBRE`, `RESULTADOS`, `TRATAMENTOS`, `CONTATO`.

Tipografia dos itens:

- Família: `Inter`.
- Peso: `Medium`.
- Tamanho: `13 px`.
- Line-height: `16 px`.
- Letter-spacing: `4%` (`0.04em`).
- Cor: `#FFFFFF`.
- Alinhamento: centralizado.
- O item `SOBRE`, selecionado na referência, mede `157 × 24 px` dentro do frame e começa em `X 0`, `Y 0` relativamente ao container da navegação.

## Conteúdo principal

### Bloco de conteúdo

- Âncora do bloco: `X 114`, `Y 264`.
- Caixa selecionada na referência: `W 842`, `H 506`.

### Título

Texto:

```text
Harmonização orofacial
com precisão e respeito
à sua identidade.
```

- Família: `Playfair Display`.
- Peso-base: `Medium`.
- Tamanho: `72 px`.
- Line-height: `78 px`.
- Letter-spacing: `0%`.
- Cor: `#FFFFFF`.
- Posição inicial: `X 114`, `Y 264`.
- A palavra `precisão` usa a variação itálica da mesma família.
- Caixa/largura de referência do bloco selecionado: `842 px`.

### Texto de apoio

Texto:

```text
Cada plano começa pela escuta, considerando e respeitando a
anatomia, expressão, momento e suas expectativas reais.
```

- Posição: `X 114`, `Y 540`.
- Largura: `600 px`.
- Família: `Inter`.
- Peso: `ExtraLight`.
- Tamanho: `20 px`.
- Line-height: `30 px`.
- Letter-spacing: `0%`.
- Cor: `#FFFFFF`.
- O valor `H 178` exibido na referência corresponde à caixa selecionada que também alcança a região do CTA; o texto em si ocupa duas linhas.

### CTA

- Texto: `AGENDAR AVALIAÇÃO`.
- Posição: `X 114`, `Y 643`.
- Dimensões: `W 284`, `H 56`.
- Raio: `28 px`.
- Borda: `1.5 px`, cor `#D1D6D8`.
- Texto/elementos claros: `#D1D6D8`.
- A composição visual mostra interior transparente sobre o fundo do Hero; a cor exibida como Fill na seleção do grupo também representa elementos internos. Não aplicar preenchimento cinza opaco sem uma nova confirmação.
- A tipografia do rótulo não foi mostrada em seleção individual e permanece pendente.

## Fotografia

- A pessoa ocupa o lado direito do Hero e termina alinhada à base do frame.
- O fundo original da fotografia é compatível com a cor sólida do Hero.
- Manter o arquivo original sem compressão ou recorte destrutivo.
- Posição, dimensão e crop exatos da camada de imagem não foram mostrados em seleção individual; devem ser validados na primeira implementação visual de 1920 × 1080.

## Valores relativos no frame de referência

Estes valores ajudam a preservar a composição em telas desktop proporcionais:

- Margem esquerda principal: `114 / 1920 = 5.9375%`.
- Título Y: `264 / 1080 = 24.4444%`.
- Texto de apoio Y: `540 / 1080 = 50%`.
- CTA Y: `643 / 1080 = 59.5370%`.
- Navegação X: `373 / 1920 = 19.4271%`.
- Cabeçalho Y: `68 / 1080 = 6.2963%`.

## Mobile estático aprovado em 2026-08-21

- Validado em `360`, `390` e `430 px`.
- A fotografia usa o asset original completo e é posicionada por CSS, sem recorte destrutivo.
- Título em cinco linhas intencionais para preservar a relação com a fotografia.
- A descrição termina com `e suas expectativas reais.` na última linha.
- Monograma e botão de menu seguem posicionamento responsivo e área de toque de `44 px`.
- CTA centralizado próximo à base, com `backdrop-filter: blur(6px)` somente na área do botão.
- O desktop permaneceu inalterado durante esta validação.

## Abertura e drawer mobile implementados em 2026-08-22

- Monograma e botão de menu formam a primeira camada da abertura.
- As cinco linhas intencionais do título entram em cascata vertical, seguidas por descrição e CTA.
- A fotografia permanece visível desde o primeiro frame para impedir flicker.
- O Hero permanece pinado, sem espaçamento artificial, durante a transição para a frase de posicionamento.
- O menu abre um drawer integral creme da direita para a esquerda em `0.54 s`, com `power3.inOut`.
- O fechamento percorre a mesma timeline no sentido inverso em `1.45×`; um link só executa a navegação depois que o painel termina de fechar.
- O painel é renderizado por portal, inicia em `translate3d(100%, 0, 0)` e controla `visibility` e `pointer-events` para não piscar no clique.
- Enquanto aberto, o drawer trava o scroll, confina o foco, fecha por `Escape` e restaura o foco no botão de menu.
- Controles mantêm alvo mínimo de `44 px`, foco visível, `aria-expanded`, `aria-controls`, `role="dialog"` e `aria-modal`.
- A implementação foi verificada em emulação mobile. Ainda falta a validação tátil em celular físico para confirmar a ausência de flick e o tempo percebido sem atraso.

## Pendências antes da aprovação final do Hero

- Tipografia exata do rótulo do CTA.
- Bounding box, posição e crop exatos da fotografia.
- Regras editoriais específicas para tablet, caso sejam solicitadas futuramente.
- Diagnóstico das animações GSAP que funcionam na emulação, mas não aparecem no celular físico relatado pelo usuário.
