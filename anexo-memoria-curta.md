# Memória curta — Portfólio Isabely

Última atualização: `2026-08-21`.

Este arquivo é a retomada rápida após reset de contexto. O handoff técnico atual está em `portifolio-isa/docs/handoff/sessao-animacoes-concluida.md`.

## Leitura obrigatória ao retomar

1. Este arquivo.
2. `portifolio-isa/docs/handoff/sessao-animacoes-concluida.md`.
3. `portifolio-isa/anexo.md` — briefing visual e técnico permanente.
4. A especificação da seção em `portifolio-isa/docs/design/` antes de editá-la.

## Marco atual

> **A fase de animações GSAP da home foi encerrada em `2026-08-21`. Preservar a implementação aprovada e não reabrir seus timings ou direção sem novo pedido do usuário.**

Na próxima sessão, primeiro confirmar qual frente o usuário deseja seguir. As opções ainda abertas são conteúdo e destinos definitivos, navegação mobile, SEO, auditoria final e deploy.

## Estado atual

- Aplicação em `portifolio-isa/`.
- Servidor oficial: `http://localhost:3001/` (`npm run dev`).
- Stack: Next.js 16, React 19, TypeScript, Tailwind CSS 4, CSS Modules e GSAP 3.15.
- Home estruturalmente completa do Hero ao Footer.
- Layout estático desktop aprovado.
- Revisão estática mobile concluída e aprovada em `360`, `390` e `430 px`, sem overflow horizontal.
- Camada GSAP implementada do Hero ao Footer, centralizada em `src/components/motion/SmoothScroll.tsx`.
- Desktop usa `ScrollSmoother`; entradas usam ScrollTrigger sem scrub e permanecem visíveis ao voltar.
- FAQ possui cascata das perguntas e abertura suave das respostas.
- Links internos do Hero estão integrados ao ScrollSmoother e validados para Sobre, Tratamentos, Resultados e Contato.
- Último commit funcional do marco: `43f0c7d`.

## Decisões que não devem regredir

- Hero mobile com fotografia original posicionada por CSS, título em cinco linhas, descrição validada e CTA com `backdrop-filter: blur(6px)`.
- Seção 2 aprovada sem alterações finais.
- Tratamentos mobile: cards de `90vw`, proporção `1.18`, alternância direita/esquerda e borda encostada na tela com cantos retos nesse lado.
- Tratamentos: cards entram uma única vez em direções alternadas conforme o alinhamento e assentam com `power4.out`; não usam scrub nem recolhem.
- Consulta mobile: `CRO-MG 72298` fica sozinho na segunda linha; desktop mantém a credencial em linha única.
- Resultados mobile: título de `40–44 px` em quatro linhas; cards permanecem intocados.
- FAQ e CTA final aprovados sem redesenho.
- Footer mobile: marca e navegação lado a lado abaixo de `768 px`; Atendimentos e Social ocupam a largura completa abaixo. Altura em `390 px`: `1054 px`.
- O desktop foi usado somente como referência durante a revisão mobile e não foi modificado.

## Decisões de animação que não devem regredir

- Hero: cascata em camadas de monograma, navegação, título inteiro, descrição e CTA; fotografia visível desde o primeiro frame.
- Seção 2: split por palavras com máscaras expandidas para não cortar acentos, cedilhas ou laterais das letras.
- Resultados: cards inteiros entram por linha; ritmo desktop final `1.08 s` com stagger `0.17 s`.
- FAQ: perguntas entram em sequência; ritmo desktop `0.7 s` com stagger `0.11 s`; acordeão abre suavemente.
- Consulta: somente o conteúdo da direita anima; foto e identificação permanecem estáticas.
- Footer: somente os grupos acima da divisória participam da cascata.
- Entradas usam `once: true`, sem scrub, respeitam `prefers-reduced-motion` e terminam exatamente no layout estático.
- Âncoras internas no desktop devem usar `ScrollSmoother.scrollTo`; salto nativo deixa o scroll real incorreto e impede ScrollTriggers.

## Pendências de conteúdo e destinos

- Número oficial do WhatsApp; o CTA ainda usa `https://wa.me/`.
- Link oficial do Google Maps; `Como chegar` continua desabilitado.
- Copy final das sete perguntas e respostas do FAQ.
- Lista final de tratamentos e suas fotografias.
- Destino definitivo de `Conheça minha trajetória`.

## Ordem macro restante

1. Receber do usuário a próxima frente desejada.
2. Substituir conteúdos e destinos provisórios quando forem fornecidos.
3. Finalizar a experiência de navegação mobile quando solicitado.
4. Fazer auditoria final, SEO, build e deploy somente no encerramento.

## Retomada local

```powershell
cd "C:\Users\victo\Desktop\Isabely Portifolio\portifolio-isa"
npm run dev
```

Abrir `http://localhost:3001/`. Antes de iniciar outro servidor, verificar se a porta `3001` já está em uso.
