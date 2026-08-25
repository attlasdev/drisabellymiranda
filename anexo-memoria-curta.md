# Memória curta — Portfólio Isabely

Última atualização: `2026-08-23`.

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
- Rotas de procedimento `/tratamentos/[slug]` construídas em `2026-08-22` para os três tratamentos, geradas estaticamente. Estrutura pronta e verificada; o texto é provisório (Lorem Ipsum) e vive em `src/content/treatments.ts`. Handoff: `portifolio-isa/docs/handoff/tarefa-2-paginas-de-procedimento.md`.
- Os cards da Seção 3 deixaram de apontar para `#contato`: o card inteiro leva à rota do procedimento.
- Rota `/trajetoria` construída em `2026-08-22`, ligada ao botão `Conheça minha trajetória` da Seção 4, que deixou de ser um `<p>` desabilitado. Estrutura pronta e verificada; texto provisório em `src/content/trajetoria.ts` e fotografia como estado vazio declarado. Handoff: `portifolio-isa/docs/handoff/tarefa-3-pagina-trajetoria.md`.
- Primitivas compartilhadas das páginas internas vivem em `src/components/internal-page/`. Não duplicar a casca, a faixa de dados nem o encerramento ao criar uma página interna nova.
- Grafia oficial do nome confirmada em `2026-08-22`: **`Isabelly`**. O footer foi corrigido em `2026-08-23`; ainda restam três ocorrências de `Isabely` no `<title>` da home e nos rótulos acessíveis do Hero, pendentes de pedido explícito.
- Repositório remoto: `https://github.com/attlasdev/drisabellymiranda.git`, branch `main`.
- Último commit funcional publicado: `b7ee30b` (`feat: refine mobile interactions and results experience`).

## Decisões que não devem regredir

- Hero mobile com fotografia original posicionada por CSS, título em cinco linhas, descrição validada e CTA com `backdrop-filter: blur(6px)`.
- Drawer mobile com painel integral creme, abertura `0.54 s` em `power3.inOut`, fechamento reverso acelerado em `1.45×`, trava de scroll, foco confinado, fechamento por `Escape` e navegação executada somente após o painel terminar de fechar.
- Seção 2 aprovada sem alterações finais.
- Tratamentos mobile: cards de `90vw`, proporção `1.18`, alternância direita/esquerda e borda encostada na tela com cantos retos nesse lado.
- Tratamentos: cards entram uma única vez em direções alternadas conforme o alinhamento e assentam com `power4.out`; a rota pontilhada desktop é a única animação de seção com scrub.
- Consulta mobile: fotografia sem cantos arredondados e `CRO-MG 72298` sozinho na segunda linha; desktop mantém raio de `12 px` e credencial em linha única.
- Consulta: fotografia definitiva `DSC_9825.jpg`, servida pelo asset WebP lossless `isabelly-consulta-planejamento-9825-v2.webp`, pré-recortado exatamente em `7 / 9` e com os mesmos pixels decodificados da versão JPEG aprovada. A moldura original `560 × 720` não deve ser alterada e a imagem deve permanecer sem `scale` ou `translate`.
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

- WhatsApp: destino oficial ativo desde `2026-08-22` (`https://wa.me/5533988497305`, fonte única em `src/content/contact.ts`). Resta apenas confirmar o número com a responsável abrindo o link num aparelho real.
- Link oficial do Google Maps; `Como chegar` continua desabilitado.
- Copy final das sete perguntas e respostas do FAQ.
- As `description` dos cinco tratamentos além de `toxina-botulinica` foram redigidas a partir do texto da profissional mas **ainda não têm aprovação dela** (ver comentário no topo de `src/content/treatments.ts`).
- Destino definitivo de `Conheça minha trajetória`.
- Conteúdo real para as 11 posições restantes de cada uma das seis categorias do modal de Resultados (`66` posições provisórias no total).

## Validação mobile concluída

- As animações GSAP foram confirmadas funcionando no celular físico. A investigação técnica que estava aberta foi encerrada.
- O drawer mobile foi validado no aparelho real.

## Sistema externo — ferramenta de upload (2026-08-23)

O upload de imagens **não** será feito por dentro deste site nem pelo dashboard do Supabase. Será um **programa de mesa separado**, em Electron, rodado localmente, com repositório próprio. A especificação está sendo escrita em `FERRAMENTA-UPLOAD.md`, na raiz — **mas esse arquivo não é versionado** (está no `.gitignore`). Ele vive apenas na máquina onde está sendo redigido e migra para o repositório próprio da ferramenta quando ela ganhar um. Se você não encontrou o arquivo, não é engano: peça a versão atual a quem está redigindo.

Por que ficou fora daqui: a ferramenta usa a `service_role key`, que ignora RLS. Rodando só na máquina, some a necessidade de autenticação, políticas e URL assinada. E ela nasce pensada para servir a outros projetos, apontando para outro banco por configuração.

O que isso muda para o portfólio: a lista fixa de 12 posições por categoria em `src/content/results.ts` deixa de existir. O site passa a descobrir as imagens listando o bucket, para que subir a 13ª foto faça o site mostrar 13 casos sem editar código nem publicar de novo.

Consequências já aceitas enquanto não houver tabela: depoimento passa a ser um por categoria e não por caso; o texto alternativo das imagens é derivado da categoria e do número, não descritivo por imagem; a ordem é a do nome do arquivo.

Decisão de `2026-08-23`: o modelo com tabela ficou **parado para estudo**, não descartado.

## Próxima frente definida e pausada (2026-08-22)

Sistema de imagens em Supabase Storage, para trocar as fotos dos casos sem commit e sem deploy. Decidido em `2026-08-22` e pausado logo em seguida a pedido do usuário; retomar mais tarde.

Desenho acordado, para não reabrir a discussão na retomada:

- Conta Supabase separada, usada só para o Storage. Git e Vercel continuam na conta Attlas.
- ~~O dashboard do Supabase como painel de upload.~~ **Superado em `2026-08-23`**: o upload passa a ser feito pela ferramenta externa descrita acima. O bucket segue sem banco e sem API própria.
- ~~Nome do arquivo espelha o id do slot existente.~~ **Superado em `2026-08-23`**: slots fixos não permitem crescer para 13 imagens. O nome passa a ser sequencial com zero à esquerda, e o site descobre o que existe listando o bucket.
- Implica remover `unoptimized` dos componentes de Resultados, senão o site serve o arquivo cru; transformação de imagem no Storage é recurso pago e não existe no plano free.
- Implica `images.remotePatterns` no `next.config.ts` e um cron diário na Vercel, porque projeto free hiberna após cerca de 7 dias e leva o Storage junto.

Esta frente é independente da validação mobile: a pendência das animações no celular físico foi encerrada nesta mesma data (ver "Validação mobile concluída" acima), sem relação com o Supabase Storage.

## Seção 3 — seis tratamentos com fotografia (2026-08-23)

Os seis cards de Tratamentos agora têm imagem e `alt` preenchidos em `portifolio-isa/src/content/treatments.ts`. As seis regiões de preenchimento que antes eram cards próprios viraram subtipos de `preenchedores-faciais`; a ordem atual é `preenchedores-faciais`, `toxina-botulinica`, `bioestimulador-de-colageno`, `fios-de-pdo`, `microagulhamento`, `skinbooster`. Preenchedores Faciais foi definido como o primeiro card em `2026-08-24`. Reordenar ou mudar a quantidade exige revisar o `path` da rota pontilhada em `TreatmentsIntroSection` (ver `src/lib/treatment-route.ts`).

Em `2026-08-24`, o card `Preenchedores Faciais` ganhou uma variação própria: a descrição deixou de aparecer na home e foi substituída por uma grade `2 × 3` com `Preenchimento labial`, `Rinomodelação`, `Queixo`, `Mandíbula`, `Maçãs do rosto` e `Bigode chinês`. A grade permanece em duas colunas no mobile e é informativa; o card inteiro continua sendo um único link para a página guarda-chuva. A descrição segue disponível em `treatments.ts` para a página interna e a metadata.

Na mesma data, a rota `/tratamentos/preenchedores-faciais` chegou à segunda rodada visual e aguarda validação do usuário. O cabeçalho visível que repetia `Preenchedores Faciais` foi removido, mantendo um `h1` apenas semântico. A experiência usa `seletor + conteúdo`: o retorno aos tratamentos, o título `Escolha o tratamento` e seis botões compactos com bullets ficam à esquerda; somente o procedimento ativo ocupa a direita. O topo da direita agora tem composição editorial com marcador, eyebrow, título em destaque e linha divisória; no desktop, o título ativo se alinha pelo topo com `Escolha o tratamento`. `Preenchimento labial` abre selecionado; clique e teclado retornam ao topo e trocam o conteúdo com fade. A faixa técnica escura foi removida de todas as páginas de tratamentos, sem apagar os dados estruturados. Em desktop a composição lateral entra a partir de `1200 px`, com seletor sticky; abaixo disso, o seletor empilha acima do conteúdo. A estrutura e medidas estão em `portifolio-isa/docs/design/preenchedores-faciais-selector-spec.md`. O conteúdo clínico dos seis subtipos continua provisório e não foi inventado nesta rodada.

Também em `2026-08-24`, as páginas de referência fornecidas pelo usuário em `drakureski.com.br` foram usadas para criar rascunhos autorais de `Preenchimento labial`, `Rinomodelação`, `Toxina Botulínica` e `Bioestimulador de Colágeno`. Foram preenchidos `O que é`, `Quando é indicado`, perguntas e convite final quando aplicável; as descrições curtas dos cards cobertos também foram reescritas. O material serve apenas como norte para a Dra. Isabelly e ainda exige revisão clínica. `Fios de PDO`, `Microagulhamento`, `Skinbooster`, `Queixo`, `Mandíbula`, `Maçãs do rosto` e `Bigode chinês` permanecem com Lorem Ipsum, porque os links não oferecem base específica para eles. O conteúdo de Full Face não foi reutilizado como se descrevesse outra região.

Na rodada seguinte do mesmo dia, os sete conteúdos restantes foram pesquisados em órgãos reguladores e literatura científica e também receberam rascunhos autorais. Não existe mais Lorem Ipsum em `src/content/treatments.ts`: todos os seis cards e os seis subtipos de Preenchedores Faciais têm `O que é`, indicação com limites, cinco perguntas e convite quando aplicável. Os textos continuam sem aprovação clínica e não podem ser tratados como versão final. O inventário de fontes, ressalvas e itens que a profissional precisa confirmar está em `portifolio-isa/docs/handoff/tratamentos-conteudo-pesquisa.md`.

Os seis assets publicados nos cards usam a extensão `.webp`. Os arquivos anteriores com extensão `.png` já continham WebP internamente; por isso, a mudança foi feita por cópia byte a byte, sem nova compressão, redimensionamento ou perda de qualidade. Os nomes antigos foram preservados no diretório apenas como histórico e não são mais usados pelo código.

Todas as fotos foram geradas por IA (Higgsfield CLI, `nano_banana_2`) na pasta `Human Images - ISA/`, que fica um nível acima de `portifolio-isa/` e é um kit autocontido de geração de imagem (não confundir com as pastas de fotos reais `FOTOS - PACIENTES` e `FOTOS ISA`, que continuam intocadas). Os prompts, briefs e todas as variantes descartadas ficam em `Human Images - ISA/human-output/image/card-0N-*/` — útil se for preciso regenerar ou entender por que uma composição foi escolhida.

Regras de composição fixadas para a seção inteira (valem para qualquer foto futura):

- Sujeito sempre à direita do quadro; a metade esquerda é zona morta com fundo liso, porque `.content` no CSS fica fixo em `left: 7.6473%` independente do `alignment` do card.
- Fundo na área do texto precisa ficar entre 28–36% de luminância depois do degradê do CSS (`treatment-card.module.css`) — testado com o script de preview em `card_preview.py` no scratchpad da sessão, que não foi salvo no repositório.
- Sempre close, nunca plano aberto; sem contato visual com a câmera; nunca o rosto da profissional, só mão e antebraço.
- Agulha visível é aceitável quando o instrumento em si não é ameaçador (ex.: cartucho de dermapen) — a regra não é "nunca mostrar o mecanismo", é "não mostrar nada que pareça uma seringa". Mostrar o instrumento com clareza é preferível a evitar, porque é o que diferencia um card do outro.
- Toda foto tenta variar a aparência da paciente (idade, tom de pele, cor e textura de cabelo) para os seis cards não parecerem a mesma pessoa.

## Camada de SEO — primeira frente (2026-08-25)

A descoberta nunca tinha sido construída. O `<head>` que ia ao ar tinha seis tags, não havia `robots.txt`, `sitemap.xml` nem uma linha de dado estruturado. Isso foi resolvido; Open Graph, canonical e `metadataBase` real continuam pendentes porque dependem do domínio.

### Decisões que não devem regredir

- **O padrão é NÃO indexar.** `NEXT_PUBLIC_SITE_INDEXABLE` precisa valer exatamente `"true"` E existir domínio real em `NEXT_PUBLIC_SITE_URL`. Sem isso, `robots.txt` recusa tudo e cada página sai com `noindex, nofollow`. O motivo é editorial, não técnico: assim que o deploy da Vercel subir, o preview vira URL pública, e o conteúdo clínico ainda não tem aprovação da Dra. Isabelly. Indexar texto médico não revisado sob o CRO dela é o risco que este bloqueio existe para impedir. Tirar do índice depois é lento e nunca fica limpo.
- **As duas camadas de bloqueio são necessárias e não são redundantes.** `robots.txt` impede a varredura; uma URL descoberta por link externo ainda pode ser indexada sem nunca ter sido lida. Só a diretiva `noindex` no HTML impede a indexação de fato.
- **O fallback de `siteUrl` é `localhost` de propósito.** Domínio inventado como fallback vazaria para o sitemap e para as canônicas sem ninguém notar. `localhost` é obviamente errado e denuncia a falta de configuração.
- **`lastModified` do sitemap é uma data fixa**, nunca `new Date()`. Marcar toda página como alterada a cada build é sinal falso.
- **Nada entra no JSON-LD sem ser verificável.** Endereço, horário e avaliação estão ausentes porque não existem. Inventá-los para "completar" um tipo é o caminho direto para penalização manual.
- **`reviewedBy` e `lastReviewed` só aparecem depois da revisão clínica real.** Enquanto `editorialStatus.revisadoPelaProfissional` for `false`, os campos são omitidos. A revisão vai acontecer em bloco antes da entrega final, então o estado global basta — granularidade por tratamento foi avaliada e descartada.
- **Página de concorrente não vira citação.** As URLs de `drakureski.com.br` do handoff de pesquisa serviram de referência editorial de estrutura; publicá-las como fonte clínica mandaria autoridade para o site dela.
- **Sem bloco visível de procedência.** Decisão do usuário em `2026-08-25`: alterar layout não é escopo dele. As fontes vivem só no `citation` do JSON-LD. Os dados já estão prontos em `src/content/sources.ts` caso a decisão mude.
- **`FAQPage` foi mantido sabendo que não gera rich result.** O Google aposentou o recurso para todos os sites em `2026-05-07`. Continua schema válido e ajuda extração por IA, mas não espere sanfona no resultado de busca.

### Lacunas que dependem de terceiros

- **Domínio** — destrava Open Graph, canonical, sitemap com URL real e a liberação da indexação. Sem OG, link colado no WhatsApp aparece sem preview, e WhatsApp e Instagram são o funil principal do negócio.
- **Endereço** — sem `address`, o `Dentist` não é elegível ao pacote local do Google, que costuma ser o maior canal de uma clínica. `footerContent.locationHref` continua `null`.
- **Fontes de `toxina-botulinica` e `bioestimulador-de-colageno`** — são os dois únicos tratamentos sem referência citável, porque o levantamento original só teve a página da concorrente para eles.

### Decisões tomadas para a migração das imagens ao bucket (2026-08-25)

Não haverá tabela. O software da Attlas sobe as imagens já no tamanho final e em WebP, com dimensão configurável por projeto.

**Correção ao que este arquivo dizia antes:** uma versão anterior desta seção afirmava que os metadados continuariam em `src/content/results.ts`. Isso contradizia a decisão de `2026-08-23` registrada acima, em que a lista fixa sai do código e o site passa a descobrir as imagens listando o bucket. Vale a decisão de `2026-08-23`.

**Também estava errado o risco de CLS.** A afirmação de que imagem remota sem `width`/`height` faria a página pular não se aplica aqui: os dois componentes de Resultados usam `fill`, e a caixa vem do CSS — `aspect-ratio: 2 / 1` no card e `height: min(52svh, 30rem)` no modal. Com `fill`, o Next nem aceita `width` e `height`. **Nenhuma dimensão precisa ser armazenada em lugar nenhum.**

### Separação entre card e galeria (2026-08-25)

Os dois grupos de imagem têm requisitos diferentes e não devem ser tratados igual:

- **As 6 imagens de card**, na home, ficam no código com `alt` escrito à mão. São renderizadas no servidor e são as únicas com peso real de busca e de LCP. Seis textos alternativos bons são meia hora de trabalho.
- **As demais imagens da galeria** seguem a decisão de `2026-08-23`: listagem do bucket e `alt` derivado da categoria e do número. Elas vivem atrás do modal, que o Google não indexa como conteúdo da página — o `alt` genérico ali não custa busca.

Isso substitui uma recomendação anterior de escrever 66 textos alternativos à mão, que ignorava a decisão já tomada e gastaria esforço onde não rende.

### Dimensões a implementar no software (2026-08-25)

Os dois destinos são quase o mesmo formato: o card é exatamente `2:1` e o modal fica em no máximo `62rem × 30rem` (≈ `2,07:1`). Ambos usam `object-fit: cover`, que **corta o excedente** — entregar `4:3` ou `3:2` faz o recorte comer testa e queixo, justamente o que um antes/depois precisa mostrar.

Padronizar em `2:1`, com **duas saídas por caso**:

| saída | dimensão | uso |
|---|---|---|
| card | `1000 × 500` | grade da home, 6 arquivos |
| full | `2000 × 1000` | modal, sob demanda |

O motivo das duas: com `unoptimized` não há `srcset`, então um arquivo único de `2000 px` seria baixado inteiro também pelos 6 cards da home, que precisam de `472 px` (944 em tela 2x). Seriam ~1,8 MB onde ~480 KB resolvem, na página que mais importa para LCP.

Convenção de nome para o código derivar as duas de uma base só: `{categoria}-{nn}-{versao}-card.webp` e `{categoria}-{nn}-{versao}-full.webp`.

### Tensão a resolver: "sem redeploy" versus HTML estático

As duas coisas não coexistem. Hoje as 12 rotas são SSG e o HTML sai pronto no build. Se a lista de imagens vem de listagem do bucket, ou se lê no build — e a 13ª foto só aparece no próximo deploy, que é o que a decisão de `2026-08-23` quer evitar — ou se lê em tempo de execução, e a página deixa de ser estática.

O impacto de SEO é quase nulo, porque as 66 imagens ficam atrás de um modal e não são indexadas como conteúdo de qualquer forma. O que precisa continuar renderizando no servidor são os 6 cards.

Se o "sem redeploy" for desejado também para os 6, o caminho limpo é **revalidação sob demanda**: a ferramenta Electron chama um webhook depois do upload e a página se regenera. Mantém HTML estático e atualiza na hora. Mais trabalho que revalidação por tempo, e o único caminho que entrega as duas coisas.

- **`unoptimized` nas imagens de Resultados está CORRETO** e deve permanecer. Imagem que já chega pronta não deve passar pelo otimizador do Next.
- **Por isso `next.config.ts` NÃO precisa de `images.remotePatterns`.** Verificado no código do Next: com `unoptimized`, `generateImgAttrs` retorna antes de chamar o loader, e é o loader que valida o hostname. **Estopim:** se alguém remover `unoptimized`, o build quebra com "hostname is not configured".
- **Nome de arquivo nunca se repete.** As URLs do bucket serão assadas no HTML estático; sobrescrever um arquivo mantendo o nome repete o bug de cache já documentado neste arquivo, numa camada mais difícil de limpar.
- **As imagens acima da dobra ficam locais.** O retrato do Hero é o elemento de LCP e é pré-carregado; movê-lo para o bucket adiciona DNS e conexão nova no caminho crítico. Bucket só para a galeria de Resultados.
- **O bucket precisa ser público**, porque URL assinada expira e o HTML é estático. Isso colide com a pendência de LGPD/CFO abaixo.

### Pendência levantada e ainda não respondida

Publicidade odontológica no Brasil tem restrição sobre divulgação de antes e depois, e a seção Resultados é construída sobre isso, com 66 posições reservadas. A regra vigente **não foi verificada** — precisa vir da Dra. Isabelly ou do CRO-MG. Se a resposta impedir, é melhor saber antes de alguém coletar e editar dezenas de fotos de pacientes, e antes de o bucket ser definido como público.

## Ordem macro restante

O plano executável `PLANO-EXECUCAO.md` na raiz do repositório é a fonte de verdade das tarefas em aberto.

## Retomada local

Windows:

```powershell
cd "C:\Users\victo\Desktop\Isabely Portifolio\portifolio-isa"
npm run dev
```

Linux:

```bash
cd /home/agostinho/Desktop/projetos/drisabellymiranda/portifolio-isa
npm install
npm run dev
```

Abrir `http://localhost:3001/`. Antes de iniciar outro servidor, verificar se a porta `3001` já está em uso.

### Notas de ambiente (verificadas em 2026-08-22)

- O repositório é trabalhado em duas máquinas: Windows e Linux. Manter os dois blocos acima.
- `node_modules` não vem no repositório: rodar `npm install` antes de qualquer coisa após clonar ou trocar de máquina.
- `npx tsc --noEmit` só fica limpo depois de um `npm run build`, porque o `next-env.d.ts` é gerado por ele e está no `.gitignore`. Antes do primeiro build, o erro em `Hero.tsx` sobre o import do `.jpg` é falso positivo.
- Baseline verificada no Linux: `lint` limpo, `tsc` limpo, `build` passou e o dev server respondeu `200`.
- As pastas originais `FOTOS - PACIENTES` e `FOTOS ISA` estão no `.gitignore` e existem somente na máquina Windows.

### Trocar imagem em `public/`: limpar o cache do otimizador (verificado em 2026-08-23)

Copiar um arquivo novo por cima de outro em `portifolio-isa/public/` **mantendo o mesmo nome** não faz o site mostrar a imagem nova. O otimizador do `next/image` guarda uma entrada de cache **por largura** em `.next/dev/cache/images` — caminho do Next 16 com Turbopack, não é `.next/cache/images` — e essa entrada não invalida quando o arquivo de origem muda.

O sintoma engana: a URL crua (`/images/treatments/arquivo.png`) já serve a imagem nova, e algumas larguras do endpoint otimizado também. Mas a largura que a tela realmente pede continua devolvendo a antiga, com `X-Nextjs-Cache: HIT`. Recarregar o navegador, forçar com `Ctrl+Shift+R` ou abrir aba anônima **não resolve**, porque o cache é do servidor, não do cliente.

Procedimento obrigatório ao trocar uma imagem:

1. Copiar o arquivo novo por cima.
2. Parar o dev server.
3. `rm -rf .next/dev/cache/images`
4. Subir o servidor de novo. A configuração está em `portifolio-isa/.claude/launch.json` (nome `portifolio-isa`, porta `3001`).
5. Conferir em **várias larguras**, nunca em uma só:

```bash
curl -s -D - -o /dev/null "http://localhost:3001/_next/image?url=%2Fimages%2Ftreatments%2FARQUIVO.png&w=1080&q=75"
```

   Olhar `X-Nextjs-Cache` e o `Content-Length`. Larguras candidatas: `640 750 828 1080 1200 1920 2048 3840`. Um `200 OK` numa largura não prova as outras.

Alternativa que evita o problema de vez: trocar também o nome do arquivo, o que muda a chave de cache. Custa uma edição em `treatments.ts`, mas dispensa reiniciar o servidor.

**Origem:** em `2026-08-23` a foto do card de Fios de PDO foi substituída e o site continuou exibindo a antiga. A largura `3840` respondia com a nova e a `1080` com a antiga. O diagnóstico inicial atribuiu a culpa ao cache do navegador do usuário, o que era falso e custou três rodadas de ida e volta até a causa real aparecer.

### Teste em celular: usar build de produção, nunca o dev (verificado em 2026-08-22)

O `npm run dev` do Next 16 **bloqueia por padrão** o acesso aos recursos internos `/_next/*` vindo de uma origem diferente de `localhost`. Ao abrir o site pelo IP da rede local, o servidor entrega o HTML normalmente — a página *parece* certa — mas recusa os chunks de JavaScript. Sem JS o React não hidrata, e todo componente client morre de uma vez: menu mobile, acordeão do FAQ, modal de Resultados e as animações GSAP.

O log do dev denuncia o caso com `Blocked cross-origin request to Next.js dev resource /_next/webpack-hmr`.

- **Procedimento correto para testar no celular:** `npm run build` e depois `npm start`, e abrir o IP de rede. Verificado: pelo IP da rede o servidor de produção responde `200` tanto na página quanto no chunk de JS que o dev recusava.
- **Decisão do usuário em `2026-08-22`:** não adicionar `allowedDevOrigins` ao `next.config.ts`. O IP muda de rede para rede, e o build de produção é mais fiel ao que vai ao ar.
- **Diagnóstico retroativo:** a pendência antiga de "animações GSAP não aparecem no celular físico" tem toda a aparência de ter sido este bloqueio, e não um problema de GSAP. Se o sintoma reaparecer, conferir primeiro por qual servidor o aparelho está acessando antes de investigar movimento.
- No celular, após trocar de servidor, forçar recarga: a página quebrada do dev pode ficar em cache.

Para validar em um celular na mesma rede, iniciar o servidor exposto à LAN e usar o IPv4 atual do computador; não registrar um IP fixo na documentação porque ele pode mudar.
