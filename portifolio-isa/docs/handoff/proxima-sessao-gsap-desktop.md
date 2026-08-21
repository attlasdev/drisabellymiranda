# Handoff — próxima sessão: animações GSAP no desktop

Última atualização: `2026-08-21`.

> **STATUS: CONCLUÍDO.** Este arquivo preserva o planejamento anterior como histórico. O estado implementado e os aprendizados finais estão em `docs/handoff/sessao-animacoes-concluida.md`.

> **REGISTRO HISTÓRICO:** esta era a instrução de abertura antes da implementação. Não usar como próxima tarefa; consultar o handoff atual indicado acima.

## 1. Forma de trabalho aprovada

1. O usuário explica o comportamento desejado da animação.
2. O agente confere a seção, as especificações e a estrutura do componente.
3. O agente devolve seu entendimento e um plano objetivo.
4. Somente depois da autorização do usuário a animação é implementada.
5. Cada efeito é validado primeiro no desktop antes de receber uma adaptação mobile.

Não antecipar movimento, pinning, scrub, duração ou easing que o usuário ainda não descreveu. O layout estático é a posição final aprovada e não deve ser deslocado para “acomodar” a animação.

## 2. Estado técnico ao encerrar a revisão mobile

- Home completa: Hero, frase de posicionamento, Tratamentos, Consulta e planejamento, Resultados reais, FAQ, CTA de WhatsApp e Footer.
- Layout estático desktop aprovado e preservado.
- Layout estático mobile aprovado e conferido em `360`, `390` e `430 px`.
- Sem overflow horizontal nas larguras validadas.
- `gsap` `3.15` já está instalado.
- Não existe import de GSAP, timeline nem ScrollTrigger em `src/`.
- `@gsap/react` não está instalado. Se ele for adotado, instalar explicitamente; caso contrário, usar `gsap.context()` com cleanup obrigatório.
- Servidor oficial: `http://localhost:3001/`.

## 3. Decisões mobile que não devem regredir

### Hero

- Frame-base mobile trabalhado em `390 × 844 px`, com verificação também em `360` e `430 px`.
- Foto original completa posicionada por CSS, sem recorte destrutivo.
- Monograma e botão de menu possuem posições responsivas e áreas de toque de `44 px`.
- Título usa cinco linhas intencionais para reservar a composição da fotografia.
- A descrição termina com `e suas expectativas reais.` na última linha.
- CTA fica centralizado próximo à base, com fotografia visível por trás e `backdrop-filter: blur(6px)` restrito à área do botão.
- Desktop do Hero permaneceu intocado durante a revisão mobile.

### Frase de posicionamento

- Seção 2 aprovada sem alterações finais nesta sessão.
- Preservar texto, destaques, centralização e comportamento de uma dobra.

### Tratamentos

- Cabeçalho mobile refinado: título fluido entre `40` e `48 px`; subtítulo entre `14` e `15 px`.
- Trilho dos cards ocupa `100vw`.
- Cada card mede `90vw`, proporção `1.18` e alterna automaticamente direita, esquerda, direita.
- Card à direita encosta na borda direita, mantém os cantos direitos retos e raio de `24 px` somente à esquerda.
- Card à esquerda espelha essa regra.
- Título interno fluido entre `24` e `28 px`; descrição e CTA em `13 px`.
- `Saiba mais` preserva a seta de `22 px` e ganhou alvo mínimo de toque de `44 px`.
- Conceito de animação já informado: o primeiro card deverá entrar da direita para a esquerda; o segundo, da esquerda para a direita; os seguintes alternam. Ainda faltam gatilho, duração, easing, scrub e eventual pinning.

### Consulta e planejamento

- Composição mobile aprovada sem redução adicional do título.
- Credencial quebra antes do registro no mobile:

```text
Cirurgiã-dentista · Harmonização Orofacial
CRO-MG 72298
```

- No desktop, a credencial continua em uma única linha com separador.

### Resultados reais

- Cards e seus conteúdos foram aprovados e não devem ser alterados.
- No mobile, o título usa escala fluida de `40–44 px`, entrelinha `1.1` e quebra natural balanceada em quatro linhas.
- A quebra manual depois de `refletem` existe somente no desktop, que permanece em `56/62 px`.

### FAQ e CTA final

- FAQ já estava visualmente aprovado; título, descrição, acordeão e controles permaneceram intactos.
- CTA final também foi mantido. Não redesenhar durante a etapa de animação sem novo pedido.

### Footer

- Abaixo de `768 px`, marca/credenciais e navegação ficam lado a lado.
- Grid mobile: `minmax(0, 3fr) minmax(7rem, 2fr)`, com `24 px` de intervalo.
- Atendimentos e Social continuam abaixo e ocupam as duas colunas.
- Em `390 px`, a altura do Footer caiu de `1249 px` para `1054 px`.
- Medidas finais observadas: `1098 px` em `360`, `1054 px` em `390`, `1068 px` em `430`; sem overflow horizontal.
- Tablet e desktop permaneceram intactos; desktop medido em `739 px` de altura.

## 4. Próxima etapa: desktop primeiro

- Começar em `1920 × 1080 px`, que é o frame oficial do projeto.
- Trabalhar uma seção por vez e manter as demais estáticas.
- Se a próxima explicação do usuário continuar pela Seção 3, usar os cards de Tratamentos como primeiro storyboard.
- Implementar a primeira versão apenas para desktop, preferencialmente dentro de `gsap.matchMedia()` com condição `min-width: 64rem`.
- Fora da condição desktop, o mobile deve continuar exatamente estático até sua etapa própria.
- Depois da aprovação do efeito desktop, discutir a tradução do mesmo conceito para mobile; não copiar valores de movimento cegamente.

## 5. Regras técnicas obrigatórias para GSAP

- Usar exclusivamente GSAP; não adicionar Framer Motion nem Lenis.
- Registrar `ScrollTrigger` antes do uso.
- Executar GSAP somente no cliente; manter o menor Client Component possível.
- Usar refs e escopo por seção.
- Preferir `useGSAP()` com `@gsap/react` se a dependência for adotada; caso contrário, usar `gsap.context()` e `ctx.revert()` no cleanup.
- Preferir `x`, `y`, `xPercent`, `yPercent`, `scale` e `autoAlpha`; evitar animar `top`, `left`, `width`, `height`, margens e paddings.
- Colocar ScrollTrigger na timeline ou tween de nível superior, nunca nos tweens filhos.
- Escolher entre `scrub` e `toggleActions`; não usar ambos no mesmo gatilho.
- Criar ScrollTriggers na ordem vertical da página.
- Usar markers somente durante o desenvolvimento e removê-los da versão entregue.
- Implementar fallback íntegro para `prefers-reduced-motion`; todo conteúdo deve continuar visível e funcional sem movimento.
- Evitar flash de conteúdo oculto e garantir que falha de JavaScript não esconda informações.
- Executar `ScrollTrigger.refresh()` somente quando imagens, fontes ou conteúdo alterarem a geometria já carregada.

## 6. Validação de cada animação

1. Comparar o estado final com o layout estático aprovado.
2. Conferir `1920 × 1080` e uma largura desktop intermediária antes de avançar.
3. Verificar scroll para frente e para trás.
4. Verificar resize e cleanup sem duplicar timelines ou ScrollTriggers.
5. Verificar `prefers-reduced-motion`.
6. Verificar anchors, foco, leitura e ausência de overflow.
7. Conferir console, ESLint e TypeScript.
8. Testar performance e evitar pinning sem função editorial clara.

## 7. Pendências externas preservadas

- Número oficial do WhatsApp.
- Link oficial do Google Maps.
- Copy final do FAQ.
- Lista e fotos finais de tratamentos.
- Destino de `Conheça minha trajetória`.
- Briefing detalhado das animações além da direção alternada já informada para Tratamentos.
