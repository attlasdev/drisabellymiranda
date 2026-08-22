# Seção 4 — Consulta e planejamento

## Base de medição

- Frame desktop de referência: `1920 × 1080 px`.
- Fundo: `#535353`.
- A seção ocupa uma dobra completa no desktop.
- Em desktop, a altura mínima é `1080 px`, preservando o respiro inferior do frame-base mesmo quando a janela tiver menos altura.
- ID da seção: `sobre`.

## Fotografia e identificação

- Asset: `public/images/consultation/isabely-consulta-planejamento.jpg`.
- Foto: `X 220`, `Y 160`, `560 × 720 px`.
- Proporção: `7 / 9`.
- Cantos: `12 px` em todos os lados.
- A foto usa `object-fit: cover`, foco na base, zoom de `1.5` e deslocamento de `5%` para a esquerda e `25%` para baixo no desktop.
- Para manter a nitidez após o crop, o asset é servido pelo `next/image` com largura de referência de `840 px` no desktop, para que o navegador selecione a versão otimizada de `1080 px`.
- Nome: `X 220`, `Y 900`; Playfair Display Regular, `24/30 px`, `#FFFFFF`.
- Credencial: `X 220`, `Y 938`; Inter Regular, `13/18 px`, tracking `3%`, `#FFFFFF` a `65%`.
- Texto de credencial: `Cirurgiã-dentista · Harmonização Orofacial · CRO-MG 72298`.

## Conteúdo

- Bloco de texto: `X 980`, `Y 300`, largura `560 px`.
- Título: `Consulta e` / `planejamento`; Playfair Display Regular, `56/62 px`, `#FFFEFE`.
- Corpo: `X 980`, `Y 462`, largura `482 px`; Inter Regular, `16/24 px`, `#FFFEFE`.
- CTA visual: `X 980`, `Y 821`, `392 × 38 px`; Inter Medium, `16/24 px`, `#FFFFFF` a `85%`.
- Texto do CTA: `Conheça minha trajetória`, acompanhado por `ArrowUpRightIcon` diagonal de `28 px`.
- O CTA não tem destino nem comportamento nesta etapa.

## Responsividade

- Em telas menores que `1024 px`, a foto, a identificação e o conteúdo são empilhados, sem overflow horizontal.
- A hierarquia, as cores, a proporção da imagem e a legibilidade são preservadas; as coordenadas absolutas do frame desktop não são forçadas.
- Mobile aprovado em `360`, `390` e `430 px`.
- No mobile, a moldura da fotografia usa cantos retos (`border-radius: 0`); o raio de `12 px` é exclusivo do desktop.
- No mobile, a credencial quebra antes do registro: `CRO-MG 72298` ocupa a segunda linha.
- No desktop, a credencial permanece em uma única linha e conserva o separador `·`.

## Animação atual

- Foto, nome e credencial permanecem estáticos em todos os viewports.
- Somente título, corpo e `Conheça minha trajetória` entram em cascata.
- Desktop e mobile usam timings e gatilhos responsivos, sempre com execução única e estado final idêntico ao layout aprovado.
- Em `prefers-reduced-motion`, todo o conteúdo permanece visível sem transição.
