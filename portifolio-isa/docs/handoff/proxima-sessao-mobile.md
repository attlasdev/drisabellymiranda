# Handoff histórico — validação mobile concluída

Última atualização: `2026-08-21`.

> **STATUS: concluído em `2026-08-21`. Não usar este arquivo como instrução da próxima tarefa. A retomada atual está em `proxima-sessao-gsap-desktop.md`.**

A revisão estática mobile foi aprovada. O conteúdo abaixo permanece como registro do roteiro que orientou essa etapa.

## 1. Por que o mobile vem antes do GSAP

As animações dependerão de ordem de leitura, empilhamento, alturas, recortes de imagem, áreas de toque e quebras tipográficas. Criar timelines antes de estabilizar essas decisões provocaria retrabalho e poderia impor ao mobile uma lógica pensada somente para desktop.

O mobile deve preservar o mesmo conceito editorial do desktop, mas não copiar suas coordenadas. A experiência precisa preparar camadas e ritmos que possam receber GSAP depois sem comprometer legibilidade ou performance.

## 2. Estado real do projeto

- A home está estruturalmente completa do Hero ao Footer.
- O desktop foi validado visualmente ao longo da construção de todas as seções.
- Não há animações GSAP implementadas.
- Existe uma implementação responsiva funcional e sem overflow horizontal em `390 × 844`, porém ela ainda não recebeu aprovação visual sistemática do usuário.
- Portanto, não registrar o mobile como “finalizado” apenas porque renderiza corretamente.
- Servidor oficial: `http://localhost:3001/`.

## 3. Baseline técnico já observado em 390 × 844

Uma auditoria somente leitura foi iniciada e interrompida de propósito para preparar este handoff. Nenhum ajuste mobile foi feito nessa auditoria.

- Largura útil renderizada: `375 px` dentro do viewport de `390 px`.
- Altura total atual da página: aproximadamente `11.461 px`.
- Overflow horizontal do documento: `0 px`.
- Alturas atuais aproximadas:
  - Hero: `844 px`.
  - Frase de posicionamento: `844 px`.
  - Tratamentos: `1.467 px`.
  - Consulta e planejamento: `1.286 px`.
  - Resultados reais: `3.448 px`.
  - FAQ: `1.447 px`.
  - CTA final: `844 px`.
  - Footer: `1.281 px`.
- A foto do Hero ultrapassa lateralmente o frame como parte do crop, mas o overflow é contido pela seção.
- Pontos a conferir como interação, não corrigir automaticamente:
  - Links `Saiba mais` possuem caixa visual aproximada de `104 × 24 px`; considerar ampliar a área clicável sem alterar a aparência.
  - Links da navegação no Footer têm altura aproximada de `40 px`; conferir alvo mínimo de toque próximo de `44 px`.

## 4. Sistema visual desktop já consolidado

### Direção

- Editorial, minimalista, clínica, elegante, precisa e humana.
- Evitar excesso de elementos, efeitos genéricos ou microdetalhes que concorram com as fotografias e a tipografia.
- Playfair Display dá personalidade e emoção; Inter resolve leitura, metadados e interação.

### Paleta principal

- Creme: `#F8F7F4`.
- Escuro: `#535353`.
- Texto escuro: `#535353`.
- Cinza editorial: `#99A1A4`.
- Branco principal: `#FFFFFF`.

### Sistema de setas

- SVG diagonal compartilhado: `src/components/icons/ArrowUpRightIcon.tsx`.
- Traço: `1.35`, terminais arredondados, sem preenchimento, inclinação de `45°`.
- Tratamentos: `22 px`, alinhado a `Saiba mais`.
- Consulta: `28 px`; texto `Conheça minha trajetória` em `16 px`.
- Footer: `Como chegar` e Instagram em `20 px`.
- Resultados: seta horizontal original preservada, com correção óptica de `2 px` para cima.
- Voltar ao topo: `ArrowUpIcon` de `18 px`, encapsulado em círculo transparente de `44 px` e borda de `1 px`.
- FAQ: chevron circular próprio já aprovado; não redesenhar.

## 5. Roteiro de validação mobile por seção

Trabalhar uma seção por vez e obter validação do usuário antes de avançar. A ordem recomendada é a ordem narrativa da página.

### 5.1 Hero — começar aqui

Validar:

- Recorte e ponto focal da fotografia em `360`, `390` e `430 px`.
- Relação entre monograma, rosto, título, texto e botão.
- Quebras do título e legibilidade sobre a fotografia.
- Respiro superior com safe area e respiro inferior do CTA.
- Decisão de navegação mobile; não inventar menu antes de discutir com o usuário.
- Separação em camadas pensando na futura entrada GSAP, sem animar ainda.

### 5.2 Frase de posicionamento

- Escala tipográfica e quebras intencionais.
- Contraste entre trechos `#535353` e `#99A1A4`.
- Centralização vertical e quantidade de respiro.
- Possibilidade futura de revelar trechos, mantendo a leitura estática íntegra.

### 5.3 Tratamentos

- Título e subtítulo no início da seção.
- Cards em coluna única, proporção atual próxima de `1.18` e cantos arredondados no mobile.
- Crop das três fotografias e contraste do texto.
- Ritmo vertical entre cards.
- Área de toque de `Saiba mais`, preservando a seta diagonal de `22 px`.
- Estrutura futura de entrada/scroll dos cards sem assumir pinning antes do briefing de animação.

### 5.4 Consulta e planejamento

- Ordem atual: fotografia e identificação antes do conteúdo.
- Crop vertical e escala da foto.
- Distância entre foto, identificação, título, parágrafos e CTA editorial.
- `Conheça minha trajetória` em `16 px` com seta diagonal de `28 px`.
- Preparar foto, texto e CTA como grupos independentes para futura animação.

### 5.5 Resultados reais

- Seis cards atualmente empilhados em uma coluna; a seção é longa e precisa de ritmo cuidadoso.
- Validar se a coluna única será mantida ou se o usuário prefere outra navegação. Não transformar em carrossel sem aprovação.
- Escala das imagens antes/depois, título, metadados e depoimento.
- Seta de `Ver resultados` já está aprovada visualmente e centralizada.
- Considerar futura revelação por card, sem esconder conteúdo quando JS ou movimento reduzido estiver ativo.

### 5.6 FAQ

- O usuário declarou que esta seção já está boa.
- Usar como referência do sistema mobile existente.
- Fazer somente conferência de respiros, leitura e áreas de toque; não redesenhar controles, círculo ou hierarquia sem pedido.

### 5.7 CTA final

- Preservar composição centralizada e fundo `#535353`.
- Validar quebras do título, largura do texto e tamanho do botão.
- Botão do WhatsApp deve permanecer a ação dominante e confortável ao toque.
- O número oficial ainda não foi fornecido.

### 5.8 Footer

- Ordem mobile atual: marca/credenciais, navegação, atendimentos, social, legal e assinatura.
- Validar distâncias entre blocos para evitar um footer excessivamente longo ou apertado.
- `Como chegar` continua contornado e desabilitado até receber Google Maps.
- Instagram usa seta diagonal de `20 px`.
- `Voltar ao topo` usa círculo transparente de `44 px`; no mobile a linha legal pode quebrar em duas linhas.
- Garantir que a assinatura `Isabely Miranda` termine a página sem cortar descendentes.

## 6. Checklist obrigatório em cada seção

1. Hierarquia e ordem de leitura.
2. Quebras tipográficas em `360`, `390` e `430 px`.
3. Crop e ponto focal das imagens.
4. Respiro vertical e transição para a seção seguinte.
5. Alvos de toque próximos de `44 × 44 px`.
6. Ausência de overflow horizontal.
7. Safe areas e uso correto de `svh`.
8. HTML semântico, foco visível e conteúdo íntegro sem animação.
9. Separação de elementos que poderão receber animação, sem implementar GSAP.
10. Preservação do desktop já aprovado; preferir regras mobile isoladas quando necessário.

## 7. Etapa seguinte, somente após aprovação mobile

Criar com o usuário um storyboard GSAP por seção, definindo:

- Objetivo narrativo de cada movimento.
- Elementos que entram, saem, escalam ou revelam.
- ScrollTrigger, pinning e scrub somente onde tiverem função editorial.
- Comportamentos distintos por breakpoint com `gsap.matchMedia()`.
- Cleanup correto no React.
- Fallback completo para `prefers-reduced-motion`.
- Performance em aparelhos móveis, evitando animações pesadas de layout.

## 8. Pendências externas

- Número oficial do WhatsApp.
- Link do Google Maps.
- Copy final do FAQ.
- Lista e fotos finais de tratamentos.
- Destino de `Conheça minha trajetória`.
- Briefing detalhado das animações GSAP.
