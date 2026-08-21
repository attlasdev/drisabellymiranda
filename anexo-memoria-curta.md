# Memória curta — Portfólio Isabely

Última atualização: `2026-08-21`.

Este arquivo é a retomada rápida após reset de contexto. O handoff detalhado atual está em `portifolio-isa/docs/handoff/proxima-sessao-gsap-desktop.md`.

## Leitura obrigatória ao retomar

1. Este arquivo.
2. `portifolio-isa/docs/handoff/proxima-sessao-gsap-desktop.md`.
3. `portifolio-isa/anexo.md` — briefing visual e técnico permanente.
4. A especificação da seção em `portifolio-isa/docs/design/` antes de editá-la.

## Instrução explícita para a próxima sessão

> **PRÓXIMA TAREFA: planejar e implementar as animações GSAP primeiro no desktop, começando pelo comportamento que o usuário descrever. Usar `1920 × 1080 px` como frame principal e preservar integralmente os layouts estáticos desktop e mobile já aprovados.**

Fluxo obrigatório: ouvir o comportamento → conferir a seção → devolver entendimento e plano → aguardar autorização → implementar → validar no desktop. A adaptação mobile da animação vem depois da aprovação desktop.

## Estado atual

- Aplicação em `portifolio-isa/`.
- Servidor oficial: `http://localhost:3001/` (`npm run dev`).
- Stack: Next.js 16, React 19, TypeScript, Tailwind CSS 4, CSS Modules e GSAP 3.15.
- Home estruturalmente completa do Hero ao Footer.
- Layout estático desktop aprovado.
- Revisão estática mobile concluída e aprovada em `360`, `390` e `430 px`, sem overflow horizontal.
- Nenhuma animação GSAP foi implementada; `gsap` está instalado, mas não há imports em `src/`.
- `@gsap/react` ainda não está instalado.

## Decisões que não devem regredir

- Hero mobile com fotografia original posicionada por CSS, título em cinco linhas, descrição validada e CTA com `backdrop-filter: blur(6px)`.
- Seção 2 aprovada sem alterações finais.
- Tratamentos mobile: cards de `90vw`, proporção `1.18`, alternância direita/esquerda e borda encostada na tela com cantos retos nesse lado.
- Conceito futuro conhecido em Tratamentos: primeiro card entra da direita, segundo da esquerda e a sequência alterna; gatilho, scrub, pinning, duração e easing ainda não foram definidos.
- Consulta mobile: `CRO-MG 72298` fica sozinho na segunda linha; desktop mantém a credencial em linha única.
- Resultados mobile: título de `40–44 px` em quatro linhas; cards permanecem intocados.
- FAQ e CTA final aprovados sem redesenho.
- Footer mobile: marca e navegação lado a lado abaixo de `768 px`; Atendimentos e Social ocupam a largura completa abaixo. Altura em `390 px`: `1054 px`.
- O desktop foi usado somente como referência durante a revisão mobile e não foi modificado.

## Regras GSAP para a próxima etapa

- Trabalhar uma seção por vez e validar primeiro no desktop.
- Usar exclusivamente GSAP e ScrollTrigger quando o comportamento realmente exigir scroll.
- Manter GSAP em Client Components mínimos, com refs, escopo e cleanup.
- Usar `gsap.matchMedia()` para separar desktop, mobile e `prefers-reduced-motion`.
- Preferir transforms e `autoAlpha`; não animar propriedades de layout quando houver alternativa por transform.
- Mobile deve permanecer estático na primeira implementação desktop.
- A página precisa continuar legível e funcional sem animação.

## Pendências de conteúdo e destinos

- Número oficial do WhatsApp; o CTA ainda usa `https://wa.me/`.
- Link oficial do Google Maps; `Como chegar` continua desabilitado.
- Copy final das sete perguntas e respostas do FAQ.
- Lista final de tratamentos e suas fotografias.
- Destino definitivo de `Conheça minha trajetória`.
- Briefing detalhado das animações além da direção alternada dos cards de Tratamentos.

## Ordem macro restante

1. Planejar e validar as animações GSAP seção por seção no desktop.
2. Adaptar cada comportamento aprovado para mobile com `gsap.matchMedia()` e movimento reduzido.
3. Substituir conteúdos e destinos provisórios quando forem fornecidos.
4. Fazer auditoria final, SEO, build e deploy somente no encerramento.

## Retomada local

```powershell
cd "C:\Users\victo\Desktop\Isabely Portifolio\portifolio-isa"
npm run dev
```

Abrir `http://localhost:3001/`. Antes de iniciar outro servidor, verificar se a porta `3001` já está em uso.
