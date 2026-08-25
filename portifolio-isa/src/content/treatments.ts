/**
 * Conteúdo dos tratamentos.
 *
 * ATENÇÃO — CONTEÚDO EM VALIDAÇÃO
 *
 * Em 2026-08-24, todos os tratamentos receberam rascunhos autorais. Os quatro
 * primeiros foram construídos a partir das páginas fornecidas pelo usuário;
 * os demais usam sínteses de órgãos reguladores e literatura científica. Os
 * textos servem como norte editorial para a Dra. Isabelly e ainda precisam da
 * revisão e da aprovação clínica dela antes da publicação.
 *
 * Os campos `tiraDeDados` continuam com `A definir`, porque a faixa está
 * oculta e duração, anestesia e retorno dependem da conduta profissional.
 *
 * ESTADO DAS DESCRIÇÕES (atualizado em 2026-08-24)
 *
 * Todas as `description` permanecem provisórias. Elas alimentam os cards e a
 * meta description das páginas, portanto precisam da mesma validação.
 *
 * FOTOGRAFIA
 *
 * Os seis procedimentos possuem fotografia em WebP. Em `2026-08-23`, os
 * arquivos que já continham WebP sob extensão `.png` foram republicados com
 * a extensão correta, sem recompressão e sem alterar nenhum byte da imagem.
 *
 * As seis regiões de preenchimento (lábios, nariz, queixo, mandíbula, maçãs
 * do rosto e bigode chinês) deixaram de ser cards próprios e passaram a ser
 * subtipos de `preenchedores-faciais`. A foto de rinomodelação continua em
 * `public/images/treatments/` sem uso na Seção 3.
 *
 * A tira de dados foi retirada visualmente de todas as páginas em 2026-08-24.
 * Os campos continuam estruturados e com `A definir` para possível uso futuro.
 */

export type TreatmentDataItem = {
  label: string;
  value: string;
};

export type TreatmentQuestion = {
  question: string;
  answer: string;
};

export type TreatmentSubtype = {
  slug: string;
  /** Nome compacto usado no card da home. */
  cardLabel: string;
  /** Nome compacto usado no seletor da página guarda-chuva. */
  selectorLabel: string;
  /** Título completo exibido na coluna de conteúdo. */
  title: string;
  /** Rascunho para validação clínica. */
  oQueE: string;
  /** Rascunho para validação clínica. Deve incluir quando NÃO é indicado. */
  quandoIndicado: string;
  /** Rótulos fixos e aprovados; valores provisórios. */
  tiraDeDados: TreatmentDataItem[];
  /** Rascunho para validação clínica. */
  perguntas: TreatmentQuestion[];
};

export type Treatment = {
  slug: string;
  title: string;
  description: string;
  /** Conteúdos selecionáveis quando o tratamento funciona como guarda-chuva. */
  subtypes?: TreatmentSubtype[];
  /** Ausente enquanto a fotografia do procedimento não existir. */
  image?: string;
  /** Obrigatório sempre que houver `image`. */
  imageAlt?: string;
  /** Rascunho para validação clínica. */
  oQueE: string;
  /** Rascunho para validação clínica. Deve incluir quando NÃO é indicado. */
  quandoIndicado: string;
  /** Rótulos fixos e aprovados; valores provisórios. */
  tiraDeDados: TreatmentDataItem[];
  /** Rascunho para validação clínica. */
  perguntas: TreatmentQuestion[];
  /** Rascunho provisório. Linha única do encerramento da página. */
  convite: string;
};

type TreatmentDraftContent = Pick<
  TreatmentSubtype,
  "oQueE" | "quandoIndicado" | "perguntas"
>;

const criarTiraDeDados = (): TreatmentDataItem[] => [
  { label: "Duração", value: "A definir" },
  { label: "Anestesia", value: "A definir" },
  { label: "Retorno", value: "A definir" },
  { label: "Durabilidade", value: "A definir" },
];

const CONTEUDO_PREENCHIMENTO_LABIAL: TreatmentDraftContent = {
  oQueE:
    "O preenchimento labial é realizado com ácido hialurônico reabsorvível para ajustar aspectos como desenho, proporção e sustentação dos lábios. O planejamento pode priorizar definição, equilíbrio entre os lados ou relação com o restante do rosto, sem que o objetivo precise ser aumentar muito o volume. A quantidade e os pontos de aplicação dependem da anatomia e do resultado buscado.",
  quandoIndicado:
    "Pode ser considerado quando há perda de volume, lábios naturalmente finos, diferença entre os lados, pouca definição do contorno ou mudanças percebidas durante o sorriso. Antes de indicar, é importante observar o rosto em repouso e em movimento. Se o preenchimento não for capaz de responder à queixa, outra conduta deve ser discutida na avaliação.",
  perguntas: [
    {
      question: "Quanto tempo costuma durar o preenchimento labial?",
      answer:
        "Em geral, a permanência é estimada entre seis e doze meses. Esse intervalo pode mudar conforme o metabolismo, o produto escolhido, a quantidade aplicada, os hábitos e a movimentação intensa dos lábios. Uma nova aplicação deve ser decidida depois de reavaliar o resultado existente.",
    },
    {
      question: "O resultado aparece imediatamente?",
      answer:
        "A mudança já pode ser percebida ao final do procedimento, mas o aspecto dos primeiros dias inclui o inchaço esperado da região. Esse edema tende a ser mais evidente nas primeiras 24 a 48 horas e diminui gradualmente. A avaliação do resultado mais estável costuma acontecer por volta de duas semanas.",
    },
    {
      question: "É possível obter um resultado discreto?",
      answer:
        "Sim. Uma proposta conservadora considera a anatomia, a proporção com o rosto e a quantidade adequada para cada etapa. O objetivo pode ser melhorar contorno e equilíbrio sem criar a aparência de volume excessivo. Em alguns casos, trabalhar aos poucos permite avaliar a resposta antes de qualquer complemento.",
    },
    {
      question: "O preenchimento com ácido hialurônico pode ser revertido?",
      answer:
        "Quando o material utilizado é ácido hialurônico, existe uma enzima capaz de dissolvê-lo. A indicação dessa reversão precisa ser feita por profissional habilitado, depois de avaliar o produto, a região e o motivo da intervenção.",
    },
    {
      question: "Há situações em que o procedimento deve ser adiado?",
      answer:
        "Gestação, amamentação, infecção ativa ou herpes na região, alterações de coagulação, doenças autoimunes descompensadas, alergias e alguns medicamentos precisam ser informados durante a avaliação. O histórico de preenchimentos anteriores também deve ser conhecido antes de definir a conduta.",
    },
  ],
};

const CONTEUDO_RINOMODELACAO: TreatmentDraftContent = {
  oQueE:
    "A rinomodelação utiliza preenchedor injetável para modificar pontos do contorno nasal sem cirurgia. O planejamento pode atuar na projeção da ponta, em pequenas irregularidades do dorso, em assimetrias discretas e na relação entre nariz e lábio. O resultado é temporário e acrescenta produto em áreas estratégicas; o procedimento não reduz estruturas do nariz.",
  quandoIndicado:
    "Pode ser considerada quando a queixa está relacionada ao contorno, como uma irregularidade discreta no dorso, ponta caída ou pequena assimetria. Não substitui cirurgia quando o objetivo é diminuir o nariz, estreitar a base, corrigir alterações respiratórias ou produzir uma mudança estrutural ampla. Por ser uma região vascular delicada, a indicação exige análise anatômica e de segurança especialmente cuidadosa.",
  perguntas: [
    {
      question: "Rinomodelação substitui rinoplastia?",
      answer:
        "Não. A rinomodelação acrescenta volume em pontos específicos para reorganizar visualmente o contorno. Ela não reduz o tamanho do nariz, não corrige desvio de septo e não trata dificuldade respiratória. A avaliação deve identificar se a queixa pode ser atendida com preenchimento ou se precisa de abordagem cirúrgica.",
    },
    {
      question: "Quanto tempo o resultado pode permanecer?",
      answer:
        "A duração frequentemente estimada fica entre doze e dezoito meses, com variações ligadas ao metabolismo, ao produto e à quantidade utilizada. Como pode existir material residual, qualquer manutenção deve começar por uma nova avaliação da região.",
    },
    {
      question: "Quais cuidados de segurança esse procedimento exige?",
      answer:
        "O nariz possui uma vascularização complexa e a rinomodelação envolve riscos raros, porém potencialmente graves, inclusive complicações vasculares com repercussão visual. Por isso, deve ser realizada por profissional habilitado, com domínio anatômico, produto regularizado e protocolo preparado para reconhecer e conduzir intercorrências.",
    },
    {
      question: "A rinomodelação consegue diminuir o nariz?",
      answer:
        "Ela não diminui o nariz de forma estrutural, pois o procedimento adiciona produto. Em alguns casos, a correção do contorno pode mudar a percepção de proporção e fazer o nariz parecer mais equilibrado. Quando a expectativa é realmente reduzir volume, o preenchimento não é a solução indicada.",
    },
    {
      question: "O procedimento pode ser revertido?",
      answer:
        "Quando é utilizado ácido hialurônico, o material pode ser dissolvido com uma enzima específica. Essa possibilidade não elimina os riscos do procedimento e não substitui um planejamento rigoroso, mas permite intervir diante de um resultado indesejado ou de uma intercorrência, conforme avaliação profissional.",
    },
  ],
};

const CONTEUDO_TOXINA_BOTULINICA: TreatmentDraftContent = {
  oQueE:
    "A toxina botulínica reduz temporariamente a força de contração dos músculos nos pontos em que é aplicada. Como algumas linhas surgem ou se aprofundam pela repetição dos movimentos faciais, essa redução pode suavizar marcas existentes e ajudar a retardar sua progressão. O plano é definido a partir da expressão de cada pessoa, e não como uma aplicação igual para todo o rosto.",
  quandoIndicado:
    "Pode ser indicada quando as linhas de expressão começam a permanecer visíveis mesmo com o rosto em repouso ou quando determinados movimentos criam um aspecto que incomoda. Também pode fazer parte de estratégias preventivas em pessoas com musculatura muito ativa e de protocolos para regiões específicas. A escolha dos pontos e da dose depende da análise do movimento e dos objetivos individuais.",
  perguntas: [
    {
      question: "Em quanto tempo o efeito começa a aparecer?",
      answer:
        "As primeiras mudanças costumam ser percebidas entre o segundo e o quinto dia. O efeito se torna mais completo por volta de dez a quinze dias, período em que a resposta pode ser reavaliada e eventuais ajustes podem ser discutidos.",
    },
    {
      question: "Quanto tempo dura o efeito?",
      answer:
        "A duração mais comum fica em torno de três a quatro meses, embora algumas pessoas mantenham o efeito por mais tempo. Força muscular, metabolismo, dose e área tratada influenciam esse intervalo. A manutenção deve acompanhar a resposta individual, e não apenas uma data fixa.",
    },
    {
      question: "O rosto fica sem expressão?",
      answer:
        "Esse não precisa ser o resultado. A naturalidade depende da escolha dos músculos, dos pontos e da dose adequada. Uma abordagem conservadora busca reduzir a intensidade das marcas sem impedir que a pessoa continue sorrindo, franzindo ou elevando as sobrancelhas de forma compatível com sua expressão.",
    },
    {
      question: "Como é definida a quantidade aplicada?",
      answer:
        "Não existe uma quantidade única para todas as pessoas. A dose varia conforme a força da musculatura, a região, a anatomia e o efeito desejado. Usar mais produto não significa obter um resultado melhor; a definição precisa acontecer depois da avaliação facial em movimento.",
    },
    {
      question: "Quais condições precisam ser informadas na avaliação?",
      answer:
        "Gestação, amamentação, doenças neuromusculares, alergias conhecidas, infecção ou lesão ativa na área e o uso de medicamentos ou suplementos devem ser relatados antes do procedimento. Essas informações ajudam a identificar contraindicações e a conduzir o planejamento com segurança.",
    },
  ],
};

const CONTEUDO_BIOESTIMULADOR: TreatmentDraftContent = {
  oQueE:
    "O bioestimulador de colágeno é um produto injetável pensado para estimular uma resposta gradual do próprio organismo. Diferentemente do preenchimento, sua finalidade principal não é criar volume imediato em um ponto específico, mas favorecer firmeza, sustentação e qualidade da pele ao longo das semanas seguintes.",
  quandoIndicado:
    "Pode ser considerado quando a principal queixa é perda de firmeza, flacidez leve a moderada ou mudança na qualidade da pele do rosto e de outras regiões avaliadas. Também pode ser combinado com outros recursos dentro de um plano por etapas. Em casos de flacidez avançada e excesso importante de pele, é necessário reconhecer que tratamentos injetáveis não oferecem o mesmo resultado de uma abordagem cirúrgica.",
  perguntas: [
    {
      question: "Quando começam a aparecer os resultados?",
      answer:
        "A formação de colágeno é progressiva. As primeiras mudanças costumam ser observadas entre trinta e sessenta dias, e a evolução pode continuar por alguns meses depois da última sessão. A avaliação precisa considerar esse tempo biológico antes de concluir se o plano deve ser ajustado.",
    },
    {
      question: "Quantas sessões podem ser necessárias?",
      answer:
        "Muitos planos consideram duas ou três sessões, frequentemente separadas por intervalos de trinta a quarenta e cinco dias. O número real depende do produto, da região, do grau de flacidez e da resposta individual. A sequência pode ser revista depois de observar a primeira aplicação.",
    },
    {
      question: "Quanto tempo o resultado pode durar?",
      answer:
        "O resultado pode permanecer aproximadamente entre doze e vinte e quatro meses, com variações conforme produto, indicação e resposta do organismo. O material é absorvido, enquanto o colágeno produzido pode permanecer por mais tempo. A manutenção deve ser definida pela condição da pele em nova avaliação.",
    },
    {
      question: "Qual é a diferença entre bioestimulador e preenchimento?",
      answer:
        "O preenchimento costuma repor volume ou modificar contorno em uma região definida, com efeito visual mais imediato. O bioestimulador atua de forma gradual sobre qualidade e sustentação da pele. São recursos com objetivos diferentes e podem aparecer em momentos distintos de um mesmo planejamento.",
    },
    {
      question: "Em quais situações o tratamento exige cautela?",
      answer:
        "Gestação, amamentação, infecção ativa, doença autoimune descompensada, alergia a componentes do produto e histórico de cicatrização alterada precisam ser avaliados. Também é importante informar preenchimentos ou outros materiais já aplicados na região, pois eles podem modificar o planejamento.",
    },
  ],
};

const CONTEUDO_PREENCHEDORES_FACIAIS: TreatmentDraftContent = {
  oQueE:
    "Preenchedores faciais são materiais injetáveis utilizados para acrescentar ou restaurar volume, suavizar sulcos e ajustar contornos em regiões específicas do rosto. O ácido hialurônico é uma das opções absorvíveis mais utilizadas, mas cada produto possui indicação própria. O planejamento deve considerar anatomia, proporções, qualidade dos tecidos e o efeito desejado em cada área.",
  quandoIndicado:
    "Podem ser considerados quando existe perda de volume, assimetria, pouca projeção ou um contorno que pode ser melhorado com acréscimo controlado de produto. Nem toda queixa facial é resolvida com preenchimento: flacidez importante, excesso de pele, alterações funcionais e expectativas incompatíveis com a técnica exigem outra abordagem ou encaminhamento.",
  perguntas: [
    {
      question: "Todos os preenchimentos faciais são iguais?",
      answer:
        "Não. Os produtos variam em composição, consistência, capacidade de projeção, integração aos tecidos e tempo de permanência. A região tratada e o objetivo do plano influenciam a escolha. O paciente deve saber qual produto será utilizado e se ele está regularizado para aquela finalidade.",
    },
    {
      question: "O resultado aparece no mesmo dia?",
      answer:
        "O ganho de volume e a mudança de contorno costumam ser percebidos logo após a aplicação, mas o aspecto inicial inclui edema e possíveis marcas dos pontos de entrada. O resultado mais estável deve ser avaliado depois que a reação local diminuir, em prazo definido pelo profissional para cada região.",
    },
    {
      question: "Quanto tempo dura um preenchimento facial?",
      answer:
        "Não existe uma duração única. O material, a área aplicada, a movimentação local, o metabolismo e a quantidade utilizada interferem na permanência. Alguns produtos são absorvidos gradualmente, e qualquer manutenção deve partir de nova avaliação para considerar o que ainda existe na região.",
    },
    {
      question: "Preenchimento com ácido hialurônico é reversível?",
      answer:
        "O ácido hialurônico pode ser dissolvido com uma enzima específica quando existe indicação clínica. Essa possibilidade não torna o procedimento isento de risco e não substitui a escolha adequada do produto, o conhecimento anatômico e um protocolo preparado para intercorrências.",
    },
    {
      question: "Quais riscos precisam ser conhecidos?",
      answer:
        "Edema, sensibilidade, vermelhidão, hematomas e irregularidades locais podem ocorrer. Há também complicações menos comuns e potencialmente graves, como infecção, nódulos e obstrução vascular, que em determinadas áreas pode comprometer pele ou visão. Por isso, a aplicação deve ser feita por profissional habilitado e após avaliação de saúde completa.",
    },
  ],
};

const CONTEUDO_PREENCHIMENTO_QUEIXO: TreatmentDraftContent = {
  oQueE:
    "O preenchimento de queixo acrescenta volume em pontos planejados para modificar projeção, comprimento aparente e contorno do mento. Ele pode melhorar a leitura do perfil e a relação entre o terço inferior, os lábios e o nariz. Como o procedimento adiciona material, não altera a posição dos ossos nem substitui correções cirúrgicas ou funcionais quando elas são necessárias.",
  quandoIndicado:
    "Pode ser considerado em casos de queixo pouco projetado, contorno discreto, pequenas assimetrias ou desequilíbrio de proporção no perfil. A indicação precisa avaliar o rosto de frente e de lado, além da relação com a mandíbula e os lábios. Alterações estruturais importantes, queixas funcionais ou expectativas de redução não são resolvidas apenas com preenchimento.",
  perguntas: [
    {
      question: "O que pode mudar com o preenchimento de queixo?",
      answer:
        "O plano pode aumentar a projeção, organizar o contorno e modificar a percepção de proporção do terço inferior. A mudança adequada depende do formato inicial e não deve seguir um desenho padronizado. O objetivo é integrar o queixo ao restante do rosto, não criar uma característica isolada.",
    },
    {
      question: "O resultado é imediato?",
      answer:
        "A projeção costuma ser percebida logo após a aplicação, mas inchaço, sensibilidade e pequenos hematomas podem alterar a aparência nos primeiros dias. A análise final deve esperar a acomodação do produto e dos tecidos, conforme o prazo de retorno indicado pelo profissional.",
    },
    {
      question: "Quanto tempo pode durar?",
      answer:
        "Estudos com produtos específicos de ácido hialurônico observaram melhora por cerca de um ano em parte dos participantes. Isso não funciona como prazo garantido: produto, técnica, metabolismo e quantidade aplicada mudam a duração, e a manutenção exige nova avaliação.",
    },
    {
      question: "O preenchimento de queixo pode ser revertido?",
      answer:
        "Quando o produto é ácido hialurônico, existe a possibilidade de dissolução com enzima específica. A decisão de reverter ou corrigir deve considerar o material utilizado, o tempo desde a aplicação e a avaliação clínica da região.",
    },
    {
      question: "Quais riscos devem ser discutidos?",
      answer:
        "Além de edema, dor, vermelhidão, hematoma e irregularidade, todo preenchimento facial apresenta risco de infecção e de injeção ou compressão vascular. Eventos graves são incomuns, mas exigem que o profissional conheça a anatomia local e tenha protocolo de reconhecimento e atendimento imediato.",
    },
  ],
};

const CONTEUDO_PREENCHIMENTO_MANDIBULA: TreatmentDraftContent = {
  oQueE:
    "O preenchimento de mandíbula utiliza produto injetável para acrescentar estrutura visual ao ângulo e à linha mandibular. O tratamento pode reforçar a transição entre rosto e pescoço, compensar pequenas diferenças entre os lados e melhorar a definição do terço inferior. Ele não remove gordura, não elimina excesso de pele e não produz o mesmo efeito de uma cirurgia de lifting.",
  quandoIndicado:
    "Pode ser considerado quando há perda leve ou moderada de definição, deficiência de volume, assimetria ou desejo de equilibrar o contorno inferior do rosto. A avaliação deve separar o que depende de estrutura óssea, volume, flacidez e gordura submentoniana. Quando o principal problema é excesso importante de pele ou tecido, acrescentar preenchedor pode não ser a escolha adequada.",
  perguntas: [
    {
      question: "O preenchimento deixa o rosto necessariamente mais quadrado?",
      answer:
        "Não necessariamente. A aparência depende dos pontos tratados, da quantidade e das proporções do rosto. O planejamento pode buscar uma linha mais definida sem aumentar excessivamente a largura. Um mesmo desenho não deve ser repetido em pessoas com anatomias diferentes.",
    },
    {
      question: "A definição aparece logo após o procedimento?",
      answer:
        "A mudança de contorno pode ser vista no mesmo dia, mas edema, sensibilidade e pequenos nódulos transitórios podem interferir na leitura inicial. Estudos com produtos específicos relatam que a maioria das reações locais é leve ou moderada e melhora nos dias ou semanas seguintes.",
    },
    {
      question: "Quanto tempo o resultado pode permanecer?",
      answer:
        "Ensaios clínicos com alguns preenchedores de ácido hialurônico acompanharam melhora da definição por até doze meses. A duração real varia entre produtos e pessoas, portanto não deve ser tratada como garantia nem usada para programar reaplicação automática.",
    },
    {
      question: "Esse procedimento substitui tratamento para papada ou flacidez?",
      answer:
        "Não. O preenchimento acrescenta volume e contorno; ele não remove gordura e tem alcance limitado diante de flacidez importante. Em alguns planos, outras abordagens podem ser mais adequadas ou podem ser combinadas em etapas, depois de identificar a origem da perda de definição.",
    },
    {
      question: "Quais efeitos adversos podem ocorrer?",
      answer:
        "Inchaço, dor, sensibilidade, hematomas e irregularidades estão entre as reações locais possíveis. Como em outros preenchimentos, também existem riscos menos frequentes, incluindo infecção e complicações vasculares. Produto, plano anatômico e técnica precisam ser definidos por profissional habilitado.",
    },
  ],
};

const CONTEUDO_PREENCHIMENTO_MACAS: TreatmentDraftContent = {
  oQueE:
    "O preenchimento das maçãs do rosto atua na região malar e no terço médio para acrescentar ou restaurar volume. Dependendo do plano, pode reforçar a projeção das bochechas, organizar transições do rosto e oferecer suporte visual a áreas próximas. O objetivo não é criar o mesmo formato em todas as pessoas, mas recuperar ou ajustar proporções de acordo com a anatomia.",
  quandoIndicado:
    "Pode ser considerado diante de perda de volume no terço médio, pouca projeção malar, assimetria ou alteração do contorno associada ao envelhecimento. A avaliação deve observar pele, compartimentos de gordura e estrutura óssea, porque nem todo aspecto de cansaço ou flacidez é resolvido apenas com volume nessa região.",
  perguntas: [
    {
      question: "Preencher as maçãs do rosto aumenta muito as bochechas?",
      answer:
        "Não precisa aumentar de forma evidente. O efeito depende do produto, do plano de aplicação e da quantidade. Um planejamento conservador pode restaurar suporte ou corrigir uma diferença de volume sem produzir uma projeção incompatível com o restante do rosto.",
    },
    {
      question: "Esse preenchimento pode suavizar outras áreas do rosto?",
      answer:
        "Ao reorganizar o volume do terço médio, pode haver melhora visual de transições próximas. Isso não significa que todo sulco ou flacidez deva ser tratado indiretamente pelas maçãs do rosto. A causa da queixa precisa ser identificada para evitar excesso de produto.",
    },
    {
      question: "Qual é a diferença entre preenchimento malar e bioestimulador?",
      answer:
        "O preenchimento busca modificar volume e contorno em pontos definidos, com mudança visual mais imediata. O bioestimulador tem proposta gradual voltada principalmente à qualidade e à sustentação da pele. As indicações são diferentes e podem aparecer em etapas distintas do plano.",
    },
    {
      question: "Quanto tempo o resultado pode durar?",
      answer:
        "Estudos clínicos com determinados preenchedores de ácido hialurônico acompanharam benefícios na região malar por cerca de doze meses. A permanência varia conforme produto, metabolismo, quantidade e anatomia, por isso o retorno deve reavaliar o resultado antes de qualquer complemento.",
    },
    {
      question: "Quais reações são esperadas depois da aplicação?",
      answer:
        "Edema, sensibilidade, vermelhidão e hematomas podem aparecer nos primeiros dias. Irregularidades, infecção e eventos vasculares são menos comuns, mas precisam ser explicados. Dor intensa, mudança de cor da pele ou alteração visual exigem avaliação imediata.",
    },
  ],
};

const CONTEUDO_PREENCHIMENTO_BIGODE_CHINES: TreatmentDraftContent = {
  oQueE:
    "O chamado bigode chinês é o sulco que se estende da lateral do nariz em direção ao canto da boca. O preenchimento pode suavizar essa dobra ao repor volume de forma direta ou ao fazer parte de um plano que trate também o suporte do terço médio. A meta costuma ser reduzir a profundidade sem apagar completamente uma linha que participa da expressão normal do rosto.",
  quandoIndicado:
    "Pode ser considerado quando o sulco nasolabial se torna mais profundo por perda de volume, características anatômicas ou envelhecimento dos tecidos. A indicação deve identificar se a principal causa está no próprio sulco, na região das bochechas ou na flacidez. Em excesso importante de pele ou quando o movimento é predominante, o preenchimento isolado pode ter alcance limitado.",
  perguntas: [
    {
      question: "O preenchimento elimina totalmente o bigode chinês?",
      answer:
        "O objetivo mais equilibrado costuma ser suavizar, e não apagar por completo. O sulco nasolabial faz parte da anatomia e do sorriso. Tentar eliminá-lo com grande quantidade de produto pode pesar a região e produzir um resultado pouco natural.",
    },
    {
      question: "É melhor preencher o sulco ou as maçãs do rosto?",
      answer:
        "Depende da origem da marca. Em algumas pessoas, a perda de suporte no terço médio contribui para a profundidade; em outras, o tratamento direto do sulco faz mais sentido. A avaliação pode combinar estratégias ou concluir que acrescentar volume não é a melhor resposta.",
    },
    {
      question: "Quando o resultado pode ser avaliado?",
      answer:
        "A melhora inicial aparece logo após a aplicação, mas edema e sensibilidade podem alterar a aparência nos primeiros dias. O resultado deve ser reavaliado depois da acomodação dos tecidos, evitando decidir por complemento enquanto a região ainda está inchada.",
    },
    {
      question: "Quanto tempo pode durar?",
      answer:
        "Ensaios clínicos e revisões de preenchedores para sulcos nasolabiais mostram melhora que pode permanecer por vários meses e, com alguns produtos, chegar perto de um ano. A duração varia e não substitui a reavaliação individual antes de uma nova sessão.",
    },
    {
      question: "Quais efeitos adversos podem ocorrer?",
      answer:
        "Sensibilidade, inchaço, hematoma e pequenas irregularidades estão entre as reações mais relatadas. Também existem riscos menos comuns, como infecção, nódulos e comprometimento vascular. O conhecimento da anatomia e o reconhecimento rápido de sinais de alerta são essenciais.",
    },
  ],
};

const CONTEUDO_FIOS_PDO: TreatmentDraftContent = {
  oQueE:
    "Fios de PDO são suturas absorvíveis introduzidas sob a pele. Conforme o modelo utilizado, podem ter a função de apoiar ou reposicionar discretamente tecidos e provocar uma resposta local durante o período de absorção. O resultado é temporário, e a literatura ainda apresenta limitações sobre a intensidade e a duração do efeito de sustentação.",
  quandoIndicado:
    "Podem ser considerados em casos selecionados de flacidez leve e início de perda do contorno, quando a expectativa é de uma mudança discreta e não cirúrgica. Não são equivalentes a um lifting facial e tendem a ter alcance limitado diante de excesso de pele ou queda acentuada dos tecidos. A espessura da pele, a anatomia e a expectativa precisam ser avaliadas antes da indicação.",
  perguntas: [
    {
      question: "Fios de PDO substituem um lifting cirúrgico?",
      answer:
        "Não. A cirurgia permite reposicionamento e tratamento de excesso de pele em uma escala que os fios não alcançam. Os fios podem ser uma alternativa temporária para mudanças discretas em casos bem selecionados, desde que essa limitação seja explicada desde o início.",
    },
    {
      question: "Quanto tempo dura o efeito?",
      answer:
        "Não há um prazo único sustentado por evidência robusta. O material é absorvível e estudos mostram que parte do efeito inicial pode diminuir nos primeiros meses. Tipo de fio, técnica, tecido e resposta individual interferem, portanto promessas de duração fixa devem ser evitadas.",
    },
    {
      question: "Colocar mais fios produz um resultado melhor?",
      answer:
        "Não necessariamente. Um ensaio clínico recente não encontrou vantagem sustentada ao aumentar a quantidade de fios em relação ao deslocamento dos tecidos ou à satisfação. O planejamento anatômico e a indicação adequada são mais importantes do que um número padronizado.",
    },
    {
      question: "Como costuma ser a recuperação?",
      answer:
        "Dor, inchaço e hematomas são reações frequentes nos primeiros dias. Também podem ocorrer repuxamento, depressões na pele ou sensação do fio durante a acomodação. O prazo e os cuidados variam conforme a técnica, e movimentos ou manipulações da região devem seguir a orientação individual.",
    },
    {
      question: "Quais complicações precisam ser conhecidas?",
      answer:
        "Além das reações transitórias, há relatos de assimetria, ondulações, fios visíveis ou palpáveis, migração, extrusão, infecção e lesão de estruturas próximas. Eventos graves são menos frequentes, mas reforçam a necessidade de indicação criteriosa, técnica anatômica e acompanhamento pós-procedimento.",
    },
  ],
};

const CONTEUDO_MICROAGULHAMENTO: TreatmentDraftContent = {
  oQueE:
    "O microagulhamento convencional utiliza um dispositivo com pequenas agulhas estéreis para produzir perfurações controladas na pele. Essa microlesão ativa processos de reparo e remodelação do tecido. Profundidade, velocidade e número de passadas variam conforme o equipamento, a região e o objetivo; microagulhamento com radiofrequência é outra tecnologia e possui riscos próprios.",
  quandoIndicado:
    "Pode ser considerado para melhorar a aparência de cicatrizes faciais de acne, rugas e alterações de textura em pacientes adequadamente avaliados. O procedimento não é indicado para todas as peles nem para qualquer fase de uma condição dermatológica. Infecção ativa, tendência a alterações de cicatrização, uso de determinados medicamentos e risco de mudança de pigmentação precisam ser investigados.",
  perguntas: [
    {
      question: "Quantas sessões costumam ser necessárias?",
      answer:
        "É comum que o plano envolva mais de uma sessão, porque a remodelação da pele acontece gradualmente. O número e o intervalo dependem da indicação, da profundidade utilizada, da resposta da pele e do dispositivo. Não existe um protocolo único que sirva para todas as cicatrizes ou queixas.",
    },
    {
      question: "Como fica a pele depois do procedimento?",
      answer:
        "Vermelhidão, sensação de calor ou repuxamento, ressecamento, descamação, pequenos pontos de sangramento e sensibilidade podem ocorrer. Em geral são transitórios, mas a pele fica mais reativa ao sol e a cosméticos por um período, exigindo cuidados orientados pelo profissional.",
    },
    {
      question: "Quem precisa de avaliação mais cautelosa?",
      answer:
        "Pessoas com distúrbios de coagulação, uso de anticoagulantes, imunossupressão, diabetes não controlado, infecção ou herpes ativa, eczema, psoríase, histórico de queloide ou uso recente de isotretinoína precisam discutir riscos e contraindicações. Tons de pele mais escuros também exigem atenção ao risco de alteração de pigmentação.",
    },
    {
      question: "O cartucho de agulhas pode ser reutilizado?",
      answer:
        "Não. Um cartucho novo deve ser usado para cada paciente e para cada sessão. A reutilização aumenta o risco de contaminação e infecção, mesmo que o material pareça ter sido limpo. As partes reutilizáveis do equipamento precisam seguir o protocolo de limpeza e desinfecção do fabricante.",
    },
    {
      question: "Pode ser combinado com medicamentos, cosméticos ou PRP?",
      answer:
        "Combinações precisam ser avaliadas separadamente. Órgãos reguladores alertam que a segurança do dispositivo não pode ser automaticamente estendida ao uso para introduzir cosméticos, medicamentos ou produtos sanguíneos na pele. Produto, indicação e evidência da combinação devem ser confirmados antes do procedimento.",
    },
  ],
};

const CONTEUDO_SKINBOOSTER: TreatmentDraftContent = {
  oQueE:
    "Skinbooster é um nome usado para protocolos de pequenas aplicações intradérmicas voltadas à qualidade da pele, frequentemente com formulações de ácido hialurônico. A proposta principal é melhorar hidratação, elasticidade, textura e linhas finas, com distribuição mais superficial e difusa do que a empregada em preenchimentos de projeção e contorno.",
  quandoIndicado:
    "Pode ser considerado quando a queixa predominante é ressecamento, perda de elasticidade, textura irregular, pouca luminosidade ou linhas finas. A indicação depende do produto, da área autorizada e da condição da pele. Ele não substitui preenchimento quando falta volume estrutural, nem tratamentos cirúrgicos quando existe excesso importante de pele.",
  perguntas: [
    {
      question: "Skinbooster dá volume ao rosto?",
      answer:
        "Essa não é a finalidade principal. Embora o produto seja injetável, o planejamento busca distribuição intradérmica para melhorar características da pele, e não projeção de queixo, mandíbula ou maçãs do rosto. Formulação, profundidade e quantidade precisam acompanhar esse objetivo.",
    },
    {
      question: "Quando os resultados começam a aparecer?",
      answer:
        "A resposta tende a ser progressiva. Estudos observaram melhora de hidratação e elasticidade ao longo das semanas seguintes às aplicações. O momento de percepção varia com a formulação, o protocolo e a condição inicial da pele, por isso não deve ser apresentado como efeito idêntico para todos.",
    },
    {
      question: "Quantas sessões são realizadas?",
      answer:
        "Ensaios clínicos frequentemente estudam séries de três aplicações com intervalos aproximados de três a quatro semanas, mas isso não define uma regra universal. Produtos diferentes possuem instruções e evidências próprias; o número de sessões deve ser confirmado para a formulação escolhida.",
    },
    {
      question: "Quanto tempo dura a melhora?",
      answer:
        "Os estudos disponíveis apresentam protocolos e períodos de acompanhamento diferentes, com melhora observada por alguns meses em determinadas formulações. Ainda não existe uma duração única para a categoria. A necessidade de manutenção deve ser discutida a partir da resposta da pele e do produto utilizado.",
    },
    {
      question: "Quais reações podem ocorrer?",
      answer:
        "Vermelhidão, inchaço, sensibilidade, hematomas e pequenas elevações nos pontos de aplicação podem aparecer temporariamente. Como se trata de procedimento injetável, também existem riscos menos frequentes, como infecção, nódulos e eventos vasculares. O produto precisa ser regularizado e aplicado por profissional habilitado.",
    },
  ],
};

const criarSubtipoPreenchedor = (
  slug: string,
  cardLabel: string,
  selectorLabel: string,
  title: string,
  content: TreatmentDraftContent,
): TreatmentSubtype => ({
  slug,
  cardLabel,
  selectorLabel,
  title,
  oQueE: content.oQueE,
  quandoIndicado: content.quandoIndicado,
  tiraDeDados: criarTiraDeDados(),
  perguntas: content.perguntas,
});

/*
  A ordem define a alternância dos cards na Seção 3: índice par encosta na
  borda direita, ímpar na esquerda. O traçado pontilhado do desktop foi
  desenhado para esta sequência de seis; reordenar ou mudar a quantidade exige
  refazer o `path` em `TreatmentsIntroSection`.
*/
export const treatments: Treatment[] = [
  {
    slug: "preenchedores-faciais",
    title: "Preenchedores Faciais",
    description:
      "Planejamento de volume e definição facial com atenção às proporções de cada região.",
    subtypes: [
      criarSubtipoPreenchedor(
        "preenchimento-labial",
        "Preenchimento labial",
        "Labial",
        "Preenchimento labial",
        CONTEUDO_PREENCHIMENTO_LABIAL,
      ),
      criarSubtipoPreenchedor(
        "rinomodelacao",
        "Rinomodelação",
        "Rinomodelação",
        "Rinomodelação",
        CONTEUDO_RINOMODELACAO,
      ),
      criarSubtipoPreenchedor(
        "preenchimento-de-queixo",
        "Queixo",
        "Queixo",
        "Preenchimento de queixo",
        CONTEUDO_PREENCHIMENTO_QUEIXO,
      ),
      criarSubtipoPreenchedor(
        "preenchimento-de-mandibula",
        "Mandíbula",
        "Mandíbula",
        "Preenchimento de mandíbula",
        CONTEUDO_PREENCHIMENTO_MANDIBULA,
      ),
      criarSubtipoPreenchedor(
        "preenchimento-das-macas-do-rosto",
        "Maçãs do rosto",
        "Maçãs do rosto",
        "Preenchimento das maçãs do rosto",
        CONTEUDO_PREENCHIMENTO_MACAS,
      ),
      criarSubtipoPreenchedor(
        "preenchimento-do-bigode-chines",
        "Bigode chinês",
        "Bigode chinês",
        "Preenchimento do bigode chinês",
        CONTEUDO_PREENCHIMENTO_BIGODE_CHINES,
      ),
    ],
    image: "/images/treatments/preenchimento-labial.webp",
    imageAlt: "Close dos lábios hidratados após preenchimento labial, com contorno natural e arco do Cupido definido",
    oQueE: CONTEUDO_PREENCHEDORES_FACIAIS.oQueE,
    quandoIndicado: CONTEUDO_PREENCHEDORES_FACIAIS.quandoIndicado,
    tiraDeDados: criarTiraDeDados(),
    perguntas: CONTEUDO_PREENCHEDORES_FACIAIS.perguntas,
    convite:
      "A avaliação do rosto como um todo ajuda a definir qual região tratar, em que momento e com qual prioridade.",
  },
  {
    slug: "toxina-botulinica",
    title: "Toxina Botulínica",
    description:
      "Linhas de expressão suavizadas a partir de uma leitura individual do movimento facial.",
    image: "/images/treatments/toxina-botulinica.webp",
    imageAlt: "Marcação da testa com lápis dermográfico antes da aplicação de toxina botulínica",
    oQueE: CONTEUDO_TOXINA_BOTULINICA.oQueE,
    quandoIndicado: CONTEUDO_TOXINA_BOTULINICA.quandoIndicado,
    tiraDeDados: criarTiraDeDados(),
    perguntas: CONTEUDO_TOXINA_BOTULINICA.perguntas,
    convite:
      "Uma avaliação da expressão em movimento é o primeiro passo para planejar um resultado equilibrado.",
  },
  {
    slug: "bioestimulador-de-colageno",
    title: "Bioestimulador de Colágeno",
    description:
      "Cuidado gradual voltado à firmeza, à sustentação e à qualidade da pele.",
    image: "/images/treatments/bioestimulador-de-colageno.webp",
    imageAlt: "Perfil de pescoço e mandíbula em luz rasante, evidenciando firmeza de pele",
    oQueE: CONTEUDO_BIOESTIMULADOR.oQueE,
    quandoIndicado: CONTEUDO_BIOESTIMULADOR.quandoIndicado,
    tiraDeDados: criarTiraDeDados(),
    perguntas: CONTEUDO_BIOESTIMULADOR.perguntas,
    convite:
      "O planejamento começa pela leitura da pele, de suas necessidades e do tempo esperado para a resposta.",
  },
  {
    slug: "fios-de-pdo",
    title: "Fios de PDO",
    description:
      "Suturas absorvíveis para suporte discreto dos tecidos, com indicação e limites cuidadosamente avaliados.",
    image: "/images/treatments/fios-de-pdo.webp",
    imageAlt: "Leque de vetores marcados a lápis dermográfico a partir de um ponto no arco zigomático, indicando a direção de tração dos fios",
    oQueE: CONTEUDO_FIOS_PDO.oQueE,
    quandoIndicado: CONTEUDO_FIOS_PDO.quandoIndicado,
    tiraDeDados: criarTiraDeDados(),
    perguntas: CONTEUDO_FIOS_PDO.perguntas,
    convite:
      "A avaliação ajuda a entender se a flacidez comporta uma abordagem temporária com fios ou pede outro caminho.",
  },
  {
    slug: "microagulhamento",
    title: "Microagulhamento",
    description:
      "Microperfurações controladas para estimular a renovação da pele em indicações bem definidas.",
    image: "/images/treatments/microagulhamento.webp",
    imageAlt: "Caneta de microagulhamento aplicada perpendicularmente à bochecha, cartucho em foco",
    oQueE: CONTEUDO_MICROAGULHAMENTO.oQueE,
    quandoIndicado: CONTEUDO_MICROAGULHAMENTO.quandoIndicado,
    tiraDeDados: criarTiraDeDados(),
    perguntas: CONTEUDO_MICROAGULHAMENTO.perguntas,
    convite:
      "O plano começa pela avaliação da pele, do histórico de cicatrização e do objetivo de cada sessão.",
  },
  {
    slug: "skinbooster",
    title: "Skinbooster",
    description:
      "Aplicações intradérmicas voltadas à hidratação, à elasticidade e à textura da pele.",
    image: "/images/treatments/skinbooster.webp",
    imageAlt: "Perfil com dedo em repouso na têmpora, evidenciando o brilho saudável da pele hidratada",
    oQueE: CONTEUDO_SKINBOOSTER.oQueE,
    quandoIndicado: CONTEUDO_SKINBOOSTER.quandoIndicado,
    tiraDeDados: criarTiraDeDados(),
    perguntas: CONTEUDO_SKINBOOSTER.perguntas,
    convite:
      "Uma avaliação da qualidade da pele ajuda a definir se hidratação injetável faz sentido e qual protocolo considerar.",
  },
];

const treatmentsBySlug = new Map(treatments.map((treatment) => [treatment.slug, treatment]));

export function getTreatment(slug: string): Treatment | undefined {
  return treatmentsBySlug.get(slug);
}

/** Os demais procedimentos, para o bloco `Outros tratamentos`. */
export function getOtherTreatments(slug: string): Treatment[] {
  return treatments.filter((treatment) => treatment.slug !== slug);
}
