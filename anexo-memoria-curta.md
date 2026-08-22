# Memória curta — Portfólio Isabely

Última atualização: `2026-08-22`.

Este arquivo é a retomada rápida após reset de contexto. O handoff técnico atual está em `portifolio-isa/docs/handoff/sessao-animacoes-concluida.md`.

## Leitura obrigatória ao retomar

1. Este arquivo.
2. `portifolio-isa/docs/handoff/sessao-animacoes-concluida.md`.
3. `portifolio-isa/anexo.md` — briefing visual e técnico permanente.
4. A especificação da seção em `portifolio-isa/docs/design/` antes de editá-la.

## Marco atual

> **O desktop permanece aprovado e a camada mobile foi ampliada em `2026-08-22` com abertura animada, drawer, rota de Tratamentos e modal de Resultados. As animações GSAP no celular físico foram confirmadas funcionais; a pendência anterior de investigação está encerrada.**

Preservar o layout estático e os timings atuais. A partir daqui, o trabalho é conduzido pelo plano executável `PLANO-EXECUCAO.md` na raiz do repositório.

## Estado atual

- Aplicação em `portifolio-isa/`.
- Servidor oficial: `http://localhost:3001/` (`npm run dev`).
- Stack: Next.js 16, React 19, TypeScript, Tailwind CSS 4, CSS Modules e GSAP 3.15.
- Home estruturalmente completa do Hero ao Footer.
- Layout estático desktop aprovado.
- Revisão estática mobile concluída e aprovada em `360`, `390` e `430 px`, sem overflow horizontal.
- Camada GSAP implementada do Hero ao Footer, centralizada em `src/components/motion/SmoothScroll.tsx`.
- Desktop usa `ScrollSmoother`; mobile usa scroll nativo com `ScrollTrigger` e variantes próprias de timing e gatilho.
- Abertura mobile do Hero e revelação por palavras da seção 2 foram implementadas; o Hero permanece pinado durante a transição entre as duas primeiras seções.
- Drawer mobile em tela cheia abre da direita para a esquerda e fecha pelo caminho inverso; o fechamento começa imediatamente e a navegação interna aguarda sua conclusão.
- Resultados possui modal acessível com navegação entre 12 posições por categoria; somente o primeiro caso de cada categoria contém o comparativo atual e os demais são placeholders.
- Tratamentos possui rota pontilhada animada somente no desktop e sombra sutil nos cards.
- CTA final possui fotografia contextual em baixa opacidade no fundo.
- FAQ possui cascata das perguntas e abertura suave das respostas.
- Links internos do Hero estão integrados ao ScrollSmoother e validados para Sobre, Tratamentos, Resultados e Contato.
- Repositório remoto: `https://github.com/attlasdev/drisabellymiranda.git`, branch `main`.
- Último commit funcional publicado: `b7ee30b` (`feat: refine mobile interactions and results experience`).

## Decisões que não devem regredir

- Hero mobile com fotografia original posicionada por CSS, título em cinco linhas, descrição validada e CTA com `backdrop-filter: blur(6px)`.
- Drawer mobile com painel integral creme, abertura `0.54 s` em `power3.inOut`, fechamento reverso acelerado em `1.45×`, trava de scroll, foco confinado, fechamento por `Escape` e navegação executada somente após o painel terminar de fechar.
- Seção 2 aprovada sem alterações finais.
- Tratamentos mobile: cards de `90vw`, proporção `1.18`, alternância direita/esquerda e borda encostada na tela com cantos retos nesse lado.
- Tratamentos: cards entram uma única vez em direções alternadas conforme o alinhamento e assentam com `power4.out`; a rota pontilhada desktop é a única animação de seção com scrub.
- Consulta mobile: fotografia sem cantos arredondados e `CRO-MG 72298` sozinho na segunda linha; desktop mantém raio de `12 px` e credencial em linha única.
- Resultados mobile: título de `40–44 px` em quatro linhas; cards abrem o modal por toda a sua área clicável.
- FAQ e CTA final aprovados sem redesenho.
- Footer mobile: marca e navegação lado a lado abaixo de `768 px`; Atendimentos e Social ocupam a largura completa abaixo. Altura em `390 px`: `1054 px`.
- O desktop aprovado foi preservado; as adições desktop recentes são a rota pontilhada de Tratamentos, a interação dos cards de Resultados e o fundo contextual do CTA.

## Decisões de animação que não devem regredir

- Hero desktop: cascata em camadas de monograma, navegação, título inteiro, descrição e CTA; fotografia visível desde o primeiro frame.
- Hero mobile: monograma e menu entram primeiro; as cinco linhas do título entram em cascata, seguidas por descrição e CTA. A fotografia continua visível desde o primeiro frame para evitar flicker.
- Seção 2: split por palavras com máscaras expandidas para não cortar acentos, cedilhas ou laterais das letras, incluindo a variante mobile.
- Tratamentos: cabeçalho e cards usam variantes responsivas. A rota pontilhada é desenhada com scrub somente no desktop, fica atrás dos cards e é removida no mobile e em redução de movimento.
- Resultados: cards inteiros entram por linha; ritmo desktop final `1.08 s` com stagger `0.17 s`.
- FAQ: perguntas entram em sequência; ritmo desktop `0.7 s` com stagger `0.11 s`; acordeão abre suavemente.
- Consulta: somente o conteúdo da direita anima; foto e identificação permanecem estáticas.
- Footer: somente os grupos acima da divisória participam da cascata.
- Entradas usam `once: true`, sem scrub, respeitam `prefers-reduced-motion` e terminam exatamente no layout estático; a rota desktop de Tratamentos é a exceção explícita por usar scrub.
- Âncoras internas no desktop devem usar `ScrollSmoother.scrollTo`; salto nativo deixa o scroll real incorreto e impede ScrollTriggers.

## Pendências de conteúdo e destinos

- Número oficial do WhatsApp; o CTA ainda usa `https://wa.me/`.
- Link oficial do Google Maps; `Como chegar` continua desabilitado.
- Copy final das sete perguntas e respostas do FAQ.
- Lista final de tratamentos e suas fotografias.
- Destino definitivo de `Conheça minha trajetória`.
- Conteúdo real para as 11 posições restantes de cada uma das seis categorias do modal de Resultados (`66` posições provisórias no total).

## Validação mobile concluída

- As animações GSAP foram confirmadas funcionando no celular físico. A investigação técnica que estava aberta foi encerrada.
- O drawer mobile foi validado no aparelho real.

## Ordem macro restante

O plano executável `PLANO-EXECUCAO.md` na raiz do repositório é a fonte de verdade das tarefas em aberto.

## Retomada local

```powershell
cd "C:\Users\victo\Desktop\Isabely Portifolio\portifolio-isa"
npm run dev
```

Abrir `http://localhost:3001/`. Antes de iniciar outro servidor, verificar se a porta `3001` já está em uso.

Para validar em um celular na mesma rede, iniciar o servidor exposto à LAN e usar o IPv4 atual do computador; não registrar um IP fixo na documentação porque ele pode mudar.
