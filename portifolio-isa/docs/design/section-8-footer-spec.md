# Footer final

## Escopo atual

O footer encerra a home com uma assinatura editorial, informações práticas e apenas os destinos aprovados. O Instagram está funcional; o Google Maps permanece como estado visual até o link ser fornecido.

## Direção visual

- Fundo creme `#F8F7F4`, criando contraste direto com o CTA escuro anterior.
- Texto principal `#535353` e destaque secundário `#99A1A4`.
- Composição inspirada no footer editorial de referência: informações utilitárias na parte superior e assinatura tipográfica em grande escala na base.
- Sem newsletter, múltiplas redes sociais, cards, imagens promocionais ou um segundo CTA de agendamento.

## Base de medição desktop

- Frame de referência: `1920 px` de largura.
- Altura adaptável, sem uma dobra mínima forçada; referência aproximada entre `720` e `800 px` no desktop.
- Área útil: `1480 px`, de `X 220` a `X 1700`.
- Respiro superior: aproximadamente `96 px`.
- Grid superior em quatro áreas:
  - Monograma oficial acompanhado das credenciais profissionais.
  - Navegação principal.
  - Informações de atendimento e localização.
  - Instagram.

## Marca e credenciais

- O monograma não aparece isolado.
- Abaixo dele ficam `CIRURGIÃ-DENTISTA`, `HARMONIZAÇÃO OROFACIAL` e `CRO-MG 72298`.
- A credencial deixa a linha legal inferior e passa a integrar o bloco de marca.

## Navegação

- Os links são compartilhados com o Hero por uma única fonte de conteúdo.
- Ordem aprovada: `SOBRE`, `TRATAMENTOS`, `RESULTADOS`, `CONTATO`.
- Destinos: `#sobre`, `#tratamentos`, `#resultados`, `#contato`.

## Informações de atendimento

- Tag: `ATENDIMENTOS`, Inter Medium, caixa alta e tracking amplo.
- Copy provisória: `Os atendimentos acontecem em datas programadas. Consulte a próxima disponibilidade antes de planejar sua visita.`
- `Como chegar` aparece como botão pill contornado de peso visual intermediário e usa `ArrowUpRightIcon` de `20 px`.
- Enquanto o Google Maps não possuir URL, o controle é um botão desabilitado e não executa navegação.
- Não exibir `EM BREVE` no conteúdo visual.

## Social

- Apenas Instagram.
- URL aprovada: `https://www.instagram.com/draisabellymiranda/`.
- O link abre em uma nova guia e exibe `Instagram` com `ArrowUpRightIcon` de `20 px`, seguido por `@draisabellymiranda`.

## Assinatura

- Texto: `Isabelly Miranda`.
- Playfair Display em grande escala.
- `Isabelly` em itálico e `#99A1A4`.
- `Miranda` em regular e `#535353`.
- Em telas pequenas, os nomes quebram em duas linhas.
- A assinatura é maior que na primeira versão, ocupa quase toda a largura útil e é o último elemento absoluto da página.
- O espaço anterior à assinatura deve ser controlado, sem uma grande área vazia.
- Manter respiro inferior suficiente para não cortar os descendentes tipográficos, especialmente o `y`.

## Linha inferior

- Copyright estático: `© 2026 Isabelly Miranda`.
- Link funcional `Voltar ao topo`, apontando para `#inicio`, acompanhado por `ArrowUpIcon` de `18 px` dentro de círculo transparente de `44 px` e borda de `1 px`.
- A linha legal aparece antes da assinatura, sem nenhum conteúdo posterior ao nome.

## Responsividade

- Mobile-first, com padding lateral mínimo de `20 px` e safe areas.
- Abaixo de `768 px`, marca/credenciais e navegação ficam lado a lado em `minmax(0, 3fr) minmax(7rem, 2fr)`, com `24 px` de intervalo.
- Atendimentos e Social ocupam as duas colunas e permanecem abaixo da primeira linha.
- Áreas interativas com altura confortável e foco visível.
- Assinatura fluida, sem overflow horizontal.
- A partir de `1024 px`, adotar o grid em quatro colunas.

## Pendência

- Receber o link oficial do Google Maps e transformar o botão desabilitado `Como chegar` em um link externo.

## Animação atual

- Somente os quatro grupos informativos acima da divisória entram em cascata.
- Copyright, `Voltar ao topo` e a assinatura `Isabelly Miranda` permanecem estáticos.
- No mobile, o stagger de referência entre grupos é `0.09 s`.
- A entrada executa uma única vez e não altera a altura medida nem as quebras aprovadas.
- Em `prefers-reduced-motion`, todos os grupos permanecem imediatamente visíveis.

## Validação

- Desktop: `1920 × 1080 px`, enquadrando o footer a partir do seu início.
- Mobile aprovado em `360`, `390` e `430 px`, sem overflow horizontal.
- Alturas medidas: `1098 px` em `360`, `1054 px` em `390` e `1068 px` em `430`.
- Desktop permaneceu intacto, medido em aproximadamente `739 px` de altura.
- Preservar semântica do `footer`, links externos, foco e quebras tipográficas durante a etapa de animação.
