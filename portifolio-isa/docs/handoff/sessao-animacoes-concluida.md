# Handoff — sistema de animações GSAP concluído

Última atualização: `2026-08-21`.

## Estado ao encerrar

- A camada de animações da home foi concluída e aprovada como base atual.
- Implementação central: `src/components/motion/SmoothScroll.tsx`.
- Interação do FAQ: `src/components/faq/FaqAccordion.tsx` e seu CSS Module.
- Último commit funcional: `43f0c7d fix: coordinate internal navigation with smooth scroll`.
- Servidor local oficial: `http://localhost:3001/`.
- `npm run lint` e `npm run build` passaram no encerramento.

## Comportamentos aprovados

### Scroll e abertura

- Desktop usa `ScrollSmoother` com `smooth: 0.8`.
- Hero é pinado sem espaçamento artificial durante a passagem para a frase de posicionamento.
- A fotografia principal deve existir desde o primeiro frame; não aplicar entrada que produza flicker.
- A abertura do Hero é uma cascata em camadas, não um split por letra ou palavra: monograma, links, título inteiro, descrição e CTA.
- Os intervalos se sobrepõem: o próximo elemento começa antes de o anterior terminar.

### Frase de posicionamento

- É o único split por palavras desta camada.
- Usa máscaras por palavra, entrada vertical e opacidade.
- Máscaras precisam de `overflowClipMargin: 0.25em` para não cortar acentos, cedilhas nem extremidades horizontais das letras.
- O encontro entre Hero e seção 2 não pode revelar linha ou seam durante o scroll.

### Tratamentos

- Título e subtítulo entram em cascata curta.
- Cada card anima uma única vez quando entra na área visível; não usa scrub e não recolhe ao voltar a página.
- Direções alternadas seguem o alinhamento visual: card à direita vem da direita; card à esquerda vem da esquerda.
- Movimento rápido no início e assentamento suave com `power4.out`.

### Consulta e planejamento

- Foto e identificação permanecem estáticas.
- Somente título, descrição e `Conheça minha trajetória` participam da cascata.

### Resultados reais

- Tag e título entram primeiro.
- Cards entram inteiros, sem animar informações internas.
- No desktop, a grade é agrupada por linha e os cards da linha entram um a um.
- Ritmo final aprovado: duração `1.08 s`, stagger `0.17 s`, `power3.out`.
- No mobile, cada card é tratado pelo próprio gatilho visual.

### FAQ

- Tag, título e descrição entram em cascata.
- As perguntas da coluna direita também entram sequencialmente.
- Ritmo desktop aprovado: duração `0.7 s`, stagger `0.11 s`, deslocamento inicial `22 px`.
- A abertura das respostas usa transição suave de grid (`0fr` para `1fr`) e rotação do chevron; não alterar altura de forma brusca.

### CTA e Footer

- CTA final: tag, título, descrição e botão entram em cascata sobreposta.
- Footer: somente os quatro grupos acima da divisória animam; copyright, voltar ao topo e assinatura permanecem fora da cascata.

## Regras técnicas consolidadas

- Animações de entrada usam `once: true`, sem scrub, e permanecem visíveis ao rolar de volta.
- Usar `gsap.matchMedia()` e manter o conteúdo íntegro com `prefers-reduced-motion`.
- Esconder grupos com `gsap.set()` antes do tween quando o gatilho é compartilhado; isso evita que itens posteriores apareçam antes da vez.
- Limpar transform, opacity e visibility depois da animação quando não forem mais necessários.
- Instâncias, listeners, splits, timelines e ScrollTriggers precisam de cleanup.
- O estado final de toda animação deve coincidir exatamente com o layout estático aprovado.

## Aprendizado crítico sobre âncoras

- Âncoras nativas e conteúdo transformado pelo `ScrollSmoother` não podem ser combinados sem coordenação.
- O bug observado deslocava a tela visualmente para `#sobre`, mas mantinha `window.scrollY` em `0`; por isso ScrollTriggers não disparavam, o conteúdo ficava invisível e a rolagem parecia presa.
- Links internos no desktop agora são interceptados em `SmoothScroll.tsx` e usam `smoother.scrollTo(..., "top top")`.
- O hash continua sendo gravado no histórico e a restauração nativa do scroll é desativada enquanto o smoother está ativo.
- Destinos validados: `#sobre`, `#tratamentos`, `#resultados` e `#contato`; todos chegam com conteúdo visível e permitem continuar rolando nas duas direções.

## Aprendizados de validação

- Não validar navegação suave apenas pelo `location.hash`: conferir também `window.scrollY`, posição real do alvo e opacidade do conteúdo animado.
- Artefatos entre seções podem existir somente durante movimento; é obrigatório testar enquanto a página rola, não apenas em repouso.
- Para cascatas, amostrar a opacidade de vários itens durante a execução ajuda a confirmar a sequência real, não apenas o estado final.
- Mudanças de timing ainda exigem lint, build e validação no navegador, mesmo quando não alteram layout.

## Próxima retomada

- A fase de animação está encerrada. Não reabrir timings ou direção sem novo pedido do usuário.
- Próximas frentes continuam sendo conteúdo/destinos definitivos, navegação mobile, SEO, auditoria final e deploy, conforme o usuário escolher.
- Pendências externas: número oficial do WhatsApp, Google Maps, copy final do FAQ, lista/fotos finais de tratamentos e destino de `Conheça minha trajetória`.
