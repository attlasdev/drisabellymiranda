# Handoff — sistema GSAP e interações mobile

Última atualização: `2026-08-22`.

## Estado atual

- O layout estático desktop continua aprovado e a revisão estática mobile permanece aprovada em `360`, `390` e `430 px`.
- A implementação GSAP da home está centralizada em `src/components/motion/SmoothScroll.tsx` e agora contém variantes desktop, tablet e telefone.
- O drawer mobile está em `src/components/hero/Hero.tsx` e no CSS Module do Hero.
- O modal de Resultados está em `src/components/results/ResultsModal.tsx` e seu CSS Module.
- Último commit funcional publicado: `b7ee30b feat: refine mobile interactions and results experience`.
- Repositório: `https://github.com/attlasdev/drisabellymiranda.git`, branch `main`.
- Servidor local oficial: `http://localhost:3001/`.
- `npm run lint`, `npx tsc --noEmit` e `npm run build` passaram no marco publicado.

## Scroll e abertura

- Desktop usa `ScrollSmoother` com `smooth: 0.8`.
- Mobile e tablet usam scroll nativo com `ScrollTrigger`; não criar uma segunda camada de smooth scroll nesses viewports.
- A restauração do scroll é temporariamente manual e a página começa no topo, sem reutilizar um hash inicial que possa deixar gatilhos em estado incorreto.
- O Hero é pinado sem espaço artificial durante a passagem para a frase de posicionamento.
- A fotografia principal existe desde o primeiro frame; não aplicar entrada que produza flicker.
- Desktop: cascata em camadas de monograma, links, título inteiro, descrição e CTA.
- Mobile: monograma e menu entram primeiro; as cinco linhas do título entram de baixo para cima em cascata, seguidas por descrição e CTA.

## Drawer mobile

- Painel integral creme renderizado por portal, inicialmente fora da viewport com `translate3d(100%, 0, 0)`.
- Abre da direita para a esquerda em `0.54 s`, com `power3.inOut`.
- Fecha pela reversão da mesma timeline em `1.45×`, reduzindo o atraso percebido.
- O destino de navegação só é executado quando o fechamento termina.
- O drawer trava o scroll da página, confina o foco, fecha por `Escape`, restaura o foco no botão e volta ao estado fechado quando o viewport muda para desktop.
- `aria-expanded`, `aria-controls`, `role="dialog"` e `aria-modal` fazem parte do contrato acessível.
- Não reintroduzir escala no clique nem alternar montagem/transform sem coordenação; isso pode causar flick.
- A estrutura e as áreas de toque de `44 px` foram verificadas. A validação tátil final em celular físico ainda está pendente.

## Frase de posicionamento

- É o único split por palavras desta camada.
- Usa máscaras por palavra, entrada vertical e opacidade.
- Máscaras usam `overflowClipMargin: 0.25em` para não cortar acentos, cedilhas nem extremidades horizontais.
- A variante mobile usa duração e stagger mais curtos que o desktop, preservando a mesma leitura.
- O encontro entre Hero e seção 2 não pode revelar linha ou seam durante o scroll.

## Tratamentos

- Título e subtítulo entram em cascata curta.
- Cada card anima uma única vez quando entra na área visível; não recolhe ao voltar a página.
- Direções alternadas seguem o alinhamento visual: card à direita vem da direita; card à esquerda vem da esquerda.
- Movimento rápido no início e assentamento suave com `power4.out`.
- No desktop, uma rota SVG pontilhada é desenhada verticalmente atrás dos cards conforme o scroll, com `scrub: 1.2`.
- A rota é a única exceção à regra geral de não usar scrub. Ela não é renderizada no mobile e é ocultada em `prefers-reduced-motion`.
- Os cards receberam sombra sutil sem mudar medidas, alternância ou raios aprovados.

## Consulta e planejamento

- Foto e identificação permanecem estáticas.
- Somente título, descrição e `Conheça minha trajetória` participam da cascata.
- No mobile, a foto tem cantos retos; no desktop, preserva raio de `12 px`.

## Resultados reais e modal

- Tag e título entram primeiro.
- Cards entram inteiros, sem animar informações internas.
- No desktop, a grade é agrupada por linha; duração `1.08 s`, stagger `0.17 s`, `power3.out`.
- No mobile, cada card possui seu próprio gatilho visual.
- Toda a área do card funciona como botão e abre um diálogo de casos.
- Cada categoria possui 12 posições; somente a primeira contém o comparativo atual e as outras 11 exibem placeholders.
- O modal fecha pelo botão, pelo fundo ou por `Escape`; setas do teclado e botões anterior/próximo navegam entre casos.
- Enquanto aberto, o conteúdo principal fica `inert`, o scroll é travado e o foco permanece no diálogo, retornando ao card ao fechar.
- Ainda faltam 66 casos reais no total, 11 para cada uma das seis categorias.

## FAQ, CTA e Footer

- FAQ: tag, título e descrição entram em cascata; as perguntas entram sequencialmente. No desktop, duração `0.7 s`, stagger `0.11 s` e deslocamento `22 px`.
- A abertura das respostas usa transição de grid (`0fr` para `1fr`) e rotação do chevron.
- CTA: tag, título, descrição e botão entram em cascata sobreposta. A fotografia contextual do fundo permanece estática e em baixa opacidade.
- Footer: somente os quatro grupos acima da divisória animam; copyright, voltar ao topo e assinatura permanecem fora da cascata.

## Regras técnicas consolidadas

- Animações de entrada usam `once: true`, sem scrub, e permanecem visíveis ao rolar de volta.
- A rota pontilhada desktop de Tratamentos é a única exceção explícita por usar scrub.
- Usar `gsap.matchMedia()` e manter o conteúdo íntegro com `prefers-reduced-motion`.
- Esconder grupos com `gsap.set()` antes do tween quando o gatilho é compartilhado; isso evita que itens posteriores apareçam antes da vez.
- Limpar transform, opacity e visibility depois da animação quando não forem mais necessários.
- Instâncias, listeners, splits, timelines e ScrollTriggers precisam de cleanup.
- O estado final de toda animação deve coincidir exatamente com o layout estático aprovado.

## Âncoras e navegação interna

- Âncoras nativas e conteúdo transformado pelo `ScrollSmoother` não podem ser combinados sem coordenação.
- No desktop, links internos são interceptados e usam `smoother.scrollTo(..., "top top")`; o hash continua sendo gravado no histórico.
- No mobile, o drawer fecha primeiro e só então atualiza o histórico e executa o scroll suave até o destino.
- Destinos: `#sobre`, `#tratamentos`, `#resultados` e `#contato`.
- Não validar navegação apenas pelo hash: conferir posição real do alvo, `window.scrollY`, visibilidade do conteúdo e continuidade do scroll.

## Validação em aparelho físico

- A revisão estática mobile não encontrou overflow horizontal em `360`, `390` e `430 px`.
- A emulação mobile do navegador executa as animações e os componentes chegam ao estado final correto.
- As animações GSAP foram confirmadas funcionando no celular físico. A divergência relatada anteriormente está resolvida e não é mais uma pendência.
- O drawer mobile foi validado por toque no aparelho real.

## Próxima retomada

O plano executável `PLANO-EXECUCAO.md`, na raiz do repositório, é a fonte de verdade das tarefas em aberto.
