# Briefing vivo — Portfólio Isabely Miranda

Este documento reúne a base visual, técnica e estrutural já validada para o portfólio. Ele deve orientar novas seções e componentes para que o projeto mantenha coerência sem recomeçar as decisões de design do zero.

Atualizar este briefing quando uma decisão permanente de identidade, layout, componente ou comportamento for aprovada. Medidas detalhadas de cada seção continuam documentadas em `docs/design/`.

## 1. Contexto e direção

- Projeto: portfólio profissional de Isabely Miranda, voltado à harmonização orofacial e aos tratamentos realizados no consultório.
- Direção percebida: editorial, elegante, clínica, humana e precisa.
- Ideia central: valorizar individualidade, escuta, naturalidade, proporção e cuidado; evitar uma linguagem visual agressiva ou genérica.
- Fonte de verdade atual: parâmetros, textos, imagens e capturas fornecidos diretamente pelo usuário.
- A implementação é construída manualmente e validada seção por seção. Não depender do Figma para continuar quando as configurações já tiverem sido fornecidas.
- Não inventar textos clínicos, tratamentos, promessas, imagens ou informações profissionais. Quando faltar conteúdo, aguardar o usuário.

## 2. Stack e regras técnicas

- Next.js `16.2.10`, App Router.
- React `19.2.4`.
- TypeScript estrito.
- Tailwind CSS 4 via PostCSS, complementado por CSS Modules para as composições específicas.
- `next/font/google` para as fontes.
- `next/image` para imagens do site.
- GSAP `3.15` como única biblioteca de animação.
- ESLint, Playwright e npm.
- Porta local oficial: `3001`.
- Não adicionar Framer Motion nem Lenis.
- Preferir Server Components; usar `"use client"` somente quando a animação GSAP ou uma interação realmente exigir.
- Manter conteúdo editável em `src/content/` e componentes reutilizáveis em `src/components/`.

## 3. Base de medição e responsividade

- Frame desktop oficial para validação: `1920 × 1080 px`.
- Cada primeira dobra validada usa `1080 px` de referência vertical.
- Coordenadas de desktop devem ser exatas no frame-base e convertidas em relações responsivas para outros viewports.
- Implementação mobile-first, sem overflow horizontal.
- Em telas pequenas, preservar hierarquia, legibilidade e conteúdo; não forçar as mesmas quebras ou coordenadas absolutas do desktop.
- Validar mudanças relevantes em `1920 × 1080` e pelo menos em um viewport móvel próximo de `390 × 844`.
- As animações implementadas suportam `prefers-reduced-motion` e devem continuar íntegras nesse modo.
- Desktop e revisão estática mobile foram validados; preservar os layouts aprovados.
- O handoff técnico atual está em `docs/handoff/sessao-animacoes-concluida.md`.
- A camada de animações GSAP da home recebeu as variantes mobile e as interações finais em `2026-08-22`.
- A implementação mobile foi confirmada funcionando tanto na emulação do navegador quanto no celular físico.

## 4. Paleta aprovada

| Uso | Cor |
| --- | --- |
| Fundo do Hero | `#555A5D` |
| Fundo das seções claras | `#F8F7F4` |
| Texto escuro principal | `#535353` |
| Texto/destaque cinza claro | `#99A1A4` |
| Branco principal | `#FFFFFF` |
| Elementos claros do CTA do Hero | `#D1D6D8` |
| Texto claro dos cards | `#F5F5F2` |
| Texto secundário dos cards | `#F5F5F2` a `80%` |
| CTA dos cards | `#F5F5F2` a `90%` |

O fundo `#535353` permanece como fallback dos cards, enquanto as fotografias aprovadas são exibidas por cima dele.

## 5. Tipografia

### Playfair Display

- Função: títulos editoriais, frases de maior personalidade e palavras em itálico.
- Variações usadas: Regular, Medium, normal e itálico.
- Hero: Medium, `72/78 px`.
- Título da seção Tratamentos: Regular, `56/62 px`.
- Títulos dos cards: Regular, `40/46 px`.
- Exemplos de ênfase itálica: `precisão` no Hero e `pensadas` no subtítulo de Tratamentos.

### Inter

- Função: navegação, textos de apoio, frases gráficas, descrições e CTAs.
- Navegação: Medium, `13/16 px`, tracking `4%`.
- Texto do Hero: ExtraLight, `20/30 px`.
- Frase da seção 2: Semibold, `78.53/78 px`, tracking `-7%`.
- Descrição e CTA dos cards: Regular, `16/24 px`.

### Princípio de uso

- Playfair Display fornece caráter editorial e emocional.
- Inter fornece clareza, precisão e apoio funcional.
- Não introduzir uma terceira família sem nova validação.

## 6. Elementos recorrentes

### Logo

- Asset oficial: `public/images/brand/isabely-monogram.svg`.
- Não recriar o monograma com texto.
- Desktop: `X 114`, `Y 59.3`, `54 × 41.3 px`.
- Centro vertical `Y 80`, alinhado ao centro da navbar.

### Navbar

- Desktop: `X 373`, `Y 68`, `583 × 24 px`.
- Itens: `SOBRE`, `RESULTADOS`, `TRATAMENTOS`, `CONTATO`.
- Inter Medium, `13/16 px`, tracking `4%`, branco.
- Gap de referência: `-15 px`.

### Drawer mobile

- Abaixo de `768 px`, o botão de menu abre um painel integral creme da direita para a esquerda.
- Abertura: `0.54 s`, `power3.inOut`; fechamento: reversão da mesma timeline em `1.45×` para resposta imediata.
- O painel não pode piscar no clique: permanece fora da viewport com `translate3d`, `visibility` e `pointer-events` controlados pela timeline.
- Durante a abertura, o scroll da página fica travado e o foco permanece dentro do diálogo; `Escape`, botão de fechar e clique em um destino fecham o painel.
- A navegação por âncora acontece depois da animação de fechamento, evitando troca de seção com o drawer ainda visível.
- Controles preservam alvo mínimo de toque de `44 px`, foco visível e atributos `aria` de diálogo e estado.

### Botão do Hero

- Dimensão: `284 × 56 px`.
- Raio: `28 px`.
- Borda: `1.5 px solid #D1D6D8`.
- Interior transparente.
- Texto: `AGENDAR AVALIAÇÃO`.

### Sistema de setas

- Não usar caracteres tipográficos para novas setas diagonais; reutilizar `src/components/icons/ArrowUpRightIcon.tsx`.
- A seta diagonal aprovada usa inclinação de `45°`, traço `1.35`, terminais arredondados, `fill: none` e `currentColor`.
- Tamanhos aprovados: Tratamentos `22 px`; Consulta `28 px`; `Como chegar` e Instagram `20 px`.
- Resultados mantém a seta horizontal existente, com correção óptica de `2 px` para cima.
- `Voltar ao topo` usa `ArrowUpIcon` de `18 px` dentro de círculo transparente de `44 px`, com borda fina de `1 px`.
- O FAQ mantém seu próprio chevron circular já validado; ele é a referência para controles encapsulados em stroke.
- Círculos devem permanecer transparentes no estado base. Não encapsular todas as setas: usar círculo somente quando o ícone funcionar como controle destacado.

### Cards de tratamentos

- Componente: `src/components/treatments/TreatmentCard.tsx`.
- Conteúdo: `src/content/treatments.ts`.
- Desktop: `1046.15 × 680 px`.
- Proporção: `1046.15 / 680`.
- Distância vertical: `96 px`.
- Ordem automática: direita, esquerda, direita, esquerda.
- Primeiro card alinhado à direita.
- Card à direita: cantos esquerdos com `32 px`; cantos direitos retos.
- Card à esquerda: cantos direitos com `32 px`; cantos esquerdos retos.
- Mobile aprovado: cards com `90vw`, proporção `1.18` e alternância encostada às bordas da viewport. O lado encostado fica reto; o lado interno usa raio de `24 px`.
- Conteúdo interno no frame desktop:
  - Título: `X 80`, `Y 472`, `381 × 46 px`.
  - Descrição: `X 80`, `Y 530`, `420 × 48 px`.
  - CTA: `X 80`, `Y 615`, `82 × 24 px`.
- CTA: `Saiba mais` sublinhado acompanhado pelo SVG diagonal `ArrowUpRightIcon` de `22 px`, com traço fino de `1.35` e alinhamento central.
- As seis fotos aprovadas estão em `public/images/treatments/`, usam extensão `.webp` e são renderizadas com `next/image`:
  - `toxina-botulinica.webp` — Toxina Botulínica.
  - `preenchimento-labial.webp` — Preenchedores Faciais.
  - `bioestimulador-de-colageno.webp` — Bioestimulador de Colágeno.
  - `fios-de-pdo.webp` — Fios de PDO.
  - `microagulhamento.webp` — Microagulhamento.
  - `skinbooster.webp` — Skinbooster.
- Esses seis arquivos já continham WebP sob a extensão antiga `.png`; a republicação com a extensão correta preservou os bytes integralmente, sem recompressão.
- Um degradê suave preserva o contraste do conteúdo claro no lado esquerdo dos cards.
- Os três tratamentos atuais servem para validar a seção; outros procedimentos serão adicionados depois.

## 7. Seções construídas

### Hero

- Fundo `#555A5D`, ocupa uma dobra completa.
- Imagem: `public/images/hero/isabely-hero-original.jpg`.
- Título em três linhas, com `precisão` em itálico.
- Posições principais: título `114/264`, texto `114/540`, CTA `114/643`.
- Especificação completa: `docs/design/hero-spec.md`.
- Mobile aprovado em `360`, `390` e `430 px`: título em cinco linhas, fotografia original posicionada por CSS e CTA com desfoque de fundo de `6 px` restrito ao botão.
- No mobile, monograma/menu, as cinco linhas do título, descrição e CTA entram em cascata própria; a fotografia permanece visível desde o primeiro frame.
- O menu mobile usa o drawer integral descrito na seção de elementos recorrentes.

### Seção 2 — frase de posicionamento

- Fundo `#F8F7F4`.
- Frase central grande em Inter Semibold.
- Texto principal `#535353`; destaques `#99A1A4`.
- Caixa desktop: `X 0`, `Y 410`, `W 1920`.
- Especificação completa: `docs/design/section-2-spec.md`.
- A frase usa SplitText por palavras também no mobile, com máscaras ampliadas para preservar acentos e laterais dos glifos.

### Seção 3 — tratamentos

- Fundo `#F8F7F4`.
- Título `Tratamentos`: `518/266 — 884 × 102 px`.
- Subtítulo: `741/352 — 426 × 102 px`.
- Primeiro card: `874/561 — 1046.15 × 680 px`.
- Cards atuais:
  1. Preenchimento labial — direita.
  2. Toxina Botulínica — esquerda.
  3. Rinomodelação — direita.
- Especificação completa: `docs/design/section-3-spec.md`.
- Mobile aprovado: cabeçalho tipográfico refinado, cards de `90vw` encostados alternadamente à direita e à esquerda e alvos de toque de `44 px` em `Saiba mais`.
- No desktop, uma rota pontilhada vertical é desenhada pelo scroll atrás dos cards; ela não aparece no mobile nem em redução de movimento.
- Os cards possuem sombra sutil e continuam entrando uma única vez pelo lado correspondente ao seu alinhamento.

### Seção 4 — consulta e planejamento

- Fundo `#535353`; ocupa uma dobra completa no desktop.
- O frame desktop mantém altura mínima de `1080 px`, preservando o respiro após a identificação mesmo em janelas mais baixas.
- Foto da Dra. Isabelly: `public/images/consultation/isabelly-consulta-planejamento-9825-v2.webp`, derivada de `FOTOS ISA/DSC_9825.jpg`, pré-recortada em `7 / 9` e convertida para WebP lossless nas mesmas dimensões e com pixels decodificados idênticos aos da versão JPEG aprovada.
- Desktop: foto `220/160 — 560 × 720 px`, com raio de `12 px`; conteúdo `980/300`.
- A moldura permanece em `560 × 720 px`; a foto já possui a proporção exata e é exibida sem zoom, translação ou redimensionamento do card.
- O `next/image` solicita versão de até `840 px`, selecionando a versão otimizada de `1080 px`; o crop definitivo está incorporado ao asset para manter o card original e o respiro superior.
- Título em Playfair Display Regular, `56/62 px`; corpo em Inter Regular, `16/24 px`.
- Identificação da foto: nome em Playfair Display `24/30 px`; credencial em Inter `13/18 px`, tracking `3%` e opacidade `65%`.
- O item `SOBRE` da navegação usa a âncora desta seção (`#sobre`).
- O CTA visual `Conheça minha trajetória ↗` não possui destino nesta etapa; o texto usa `16 px` e a seta diagonal compartilhada usa `28 px`.
- Especificação completa: `docs/design/section-4-spec.md`.
- No mobile, a fotografia fica sem raio de canto e `CRO-MG 72298` ocupa uma segunda linha própria; no desktop, a foto mantém `12 px` e a credencial permanece em uma única linha.

### Seção 5 — resultados reais

- Frame desktop: `1920 × 1600 px`; fundo `#F8F7F4`.
- Tag `RESULTADOS REAIS`: `220/150 — 152 × 15 px`; Inter Medium, `13/16 px`, tracking `10%`, `#535353` a `70%`.
- Título: `220/198 — 820 × 119 px`; Playfair Display Medium, `56/62 px`, `#535353`.
- A âncora `#resultados` do item de navegação aponta para esta seção.
- Grade de resultados: seis cards de `472 × 500 px`, em três colunas; gaps de `32 px` na horizontal e `33 px` na vertical.
- Os títulos atuais são Preenchimento labial, Toxina Botulínica, Rinomodelação, Full Face, Bioestimulador e Outros tratamentos.
- Cada área de mídia mede `472 × 236 px` e usa os comparativos aprovados em `public/images/results/`.
- A estrutura e os conteúdos provisórios dos cards ficam centralizados em `src/content/results.ts`; o componente reutilizável fica em `src/components/results/ResultCard.tsx`.
- Toda a área do card é interativa e abre um modal acessível em `src/components/results/ResultsModal.tsx`.
- Cada categoria possui 12 posições navegáveis. A primeira reutiliza o comparativo atual; as 11 restantes são placeholders até o conteúdo real ser fornecido.
- O modal suporta fechamento por fundo, botão e `Escape`, navegação por botões e setas do teclado, trava de scroll, foco confinado e restauração de foco.
- Implementação estática, interação do modal e animação de entrada dos cards concluídas.
- Especificação completa: `docs/design/section-5-spec.md`.
- Mobile aprovado: título fluido entre `40` e `44 px`, distribuído em quatro linhas; cards preservados sem alterações.
- No mobile, o modal adapta largura, altura e navegação ao viewport, respeitando safe areas.

### Seção 6 — perguntas frequentes

- Fundo `#F8F7F4`, mantendo continuidade com a seção Resultados reais.
- Composição editorial em duas colunas no desktop: apresentação à esquerda e acordeão à direita.
- No mobile, a composição passa para uma única coluna, com controles de toque de `48 px`.
- Sete perguntas e respostas provisórias ficam centralizadas em `src/content/faq.ts` para futura substituição.
- Apenas uma resposta permanece aberta por vez; a primeira inicia expandida para apresentar o estado aberto.
- Perguntas usam botões nativos, foco visível, `aria-expanded`, `aria-controls` e regiões associadas.
- Divisórias finas e controles circulares traduzem as referências fornecidas para o sistema visual do portfólio.
- Implementação validada em `1920 × 1080 px` e `390 × 844 px`, sem overflow horizontal ou erros de console.
- Especificação completa: `docs/design/section-6-faq-spec.md`.

### Seção 7 — CTA para WhatsApp

- Fundo `#535353`, igual à seção Consulta e planejamento.
- Ocupa uma dobra completa e usa composição centralizada para criar contraste com Resultados reais e FAQ.
- Tag `PRÓXIMO PASSO`, título editorial com `conversa` em itálico, texto de apoio e uma única ação principal.
- Botão pill com fundo `#F8F7F4`, rótulo `AGENDAR PELO WHATSAPP` e ícone linear do WhatsApp.
- A seção usa o ID `#contato`, atendendo aos links existentes no Hero, na navegação e nos tratamentos.
- Uma fotografia contextual (`public/images/contact/harmonizacao.webp`) ocupa o fundo com `12%` de opacidade, `cover` e foco superior central; o conteúdo permanece acima dela e com contraste dominante.
- A copy e o destino ficam centralizados em `src/content/contact.ts` para futura substituição.
- O link usa provisoriamente `https://wa.me/` até o número oficial ser fornecido.
- Implementação validada em `1920 × 1080 px` e `390 × 844 px`, sem overflow horizontal ou erros de console.
- Especificação completa: `docs/design/section-7-contact-cta-spec.md`.

### Footer final

- Fundo `#F8F7F4`, criando contraste direto com o CTA escuro.
- Grid superior com quatro áreas: marca/credenciais, navegação, atendimentos e Instagram.
- Monograma acompanhado por `CIRURGIÃ-DENTISTA`, `HARMONIZAÇÃO OROFACIAL` e `CRO-MG 72298`.
- Hero e footer compartilham uma única fonte de navegação em `src/content/navigation.ts`.
- Ordem dos links: `SOBRE`, `TRATAMENTOS`, `RESULTADOS`, `CONTATO`.
- Instagram funcional: `https://www.instagram.com/draisabellymiranda/`.
- `Como chegar` é um botão pill contornado desabilitado até o Google Maps oficial ser fornecido; não exibe `EM BREVE` e usa a seta diagonal compartilhada de `20 px`.
- Instagram também usa a seta diagonal compartilhada de `20 px`.
- Linha legal com copyright e `Voltar ao topo` aparece antes da assinatura; a seta vertical de voltar usa círculo transparente de `44 px` com stroke fino.
- Assinatura `Isabelly Miranda` ampliada, isolada e posicionada como o último elemento do site; primeiro nome em Playfair itálico `#99A1A4` e sobrenome em Playfair regular `#535353`.
- O footer é semanticamente separado do `<main>`.
- Implementação aprovada no desktop e tecnicamente verificada no mobile sem overflow horizontal ou erros de console; a revisão editorial mobile completa continua pendente.
- Especificação completa: `docs/design/section-8-footer-spec.md`.
- Mobile aprovado: abaixo de `768 px`, marca/credenciais e navegação ficam lado a lado; Atendimentos e Social ocupam a largura completa abaixo. Altura medida em `390 px`: `1054 px`.

## 8. Sistema de animação aprovado

- A camada GSAP da home está implementada no desktop e no mobile; detalhes e aprendizados estão em `docs/handoff/sessao-animacoes-concluida.md`.
- Usar exclusivamente GSAP, ScrollTrigger, ScrollSmoother e SplitText; não adicionar outra biblioteca de movimento.
- Desktop usa ScrollSmoother; mobile mantém o scroll nativo. O Hero é pinado na transição para a frase de posicionamento em ambos os contextos.
- Entradas são acionadas uma única vez, não usam scrub e permanecem visíveis quando o usuário volta a página.
- Hero usa cascata por camadas no desktop e por linhas no título mobile; seção 2 usa split por palavras; Tratamentos alterna as direções dos cards.
- Consulta anima somente o conteúdo da direita; Resultados anima cards inteiros por linha; FAQ anima perguntas em sequência e abre respostas suavemente.
- CTA usa cascata completa; Footer anima somente os grupos acima da divisória.
- A rota pontilhada de Tratamentos é a única exceção de scrub: existe somente no desktop e acompanha o scroll da seção.
- Usar `gsap.matchMedia()` para desktop, mobile e `prefers-reduced-motion`; a página deve permanecer legível e funcional sem movimento.
- Links internos sob ScrollSmoother devem usar `smoother.scrollTo`; não delegar esses saltos ao comportamento nativo da âncora.
- Não alterar timings, direções ou escopos aprovados sem novo pedido do usuário.

## 9. Acessibilidade e qualidade

- Preservar HTML semântico e hierarquia coerente de headings.
- Manter foco visível e áreas clicáveis adequadas.
- Usar `alt` significativo nas imagens reais; placeholders não devem se anunciar como conteúdo final.
- Não depender exclusivamente de animação ou cor para comunicar informação.
- Rodar `npm run lint` e `npx tsc --noEmit` após mudanças.
- Rodar `npm run build` em marcos maiores, preferencialmente com o servidor de desenvolvimento parado para evitar conflito na pasta `.next`.
- Validar visualmente no navegador local e verificar erros de console.

## 10. Pendências conhecidas

- Inclusão de outros procedimentos além dos três cards de validação.
- Substituição futura das sete perguntas e respostas provisórias do FAQ pela copy final; o sistema visual atual está aprovado.
- Substituição futura da copy provisória do CTA e inclusão do número oficial do WhatsApp.
- Inclusão futura do link oficial do Google Maps em `Como chegar`.
- Tipografia final do rótulo do CTA do Hero.
- Aprovação final dos crops e posições das imagens.
- Destinos definitivos dos links e CTAs, incluindo `Conheça minha trajetória ↗`.
- Inclusão dos 11 casos restantes em cada categoria do modal de Resultados (`66` posições provisórias).
- Próximas seções do portfólio.
- SEO completo, auditoria e deploy somente quando conteúdo, domínio e páginas estiverem definidos.

## 11. Regras para continuar o projeto

1. Ler `../anexo-memoria-curta.md` e este briefing antes de retomar.
2. Consultar o arquivo correspondente em `docs/design/` antes de alterar uma seção existente.
3. Preservar decisões aprovadas; mudanças visuais relevantes precisam de nova orientação do usuário.
4. Não usar Figma, geração de imagens ou ferramentas externas quando os parâmetros fornecidos já forem suficientes.
5. Não alterar nem comprimir os acervos originais um nível acima sem autorização.
6. Atualizar este arquivo quando surgir uma nova regra permanente do sistema visual.
7. Atualizar a memória curta da raiz ao concluir um novo marco.
8. A estrutura estática planejada da home está completa e o desktop está aprovado. Preservar essas decisões durante a revisão mobile.
9. A validação estática mobile, a camada GSAP mobile e a verificação em aparelho físico estão concluídas. Consultar `docs/handoff/sessao-animacoes-concluida.md` antes de alterar movimento ou navegação interna.
10. As tarefas em aberto do projeto vivem em `../PLANO-EXECUCAO.md`, o plano executável na raiz do repositório.
