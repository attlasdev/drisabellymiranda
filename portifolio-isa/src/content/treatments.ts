/**
 * Conteúdo dos tratamentos.
 *
 * ORIGEM DO TEXTO — ATUALIZADO EM 2026-09-01
 *
 * Os campos `oQueE` e `quandoIndicado` de todos os doze procedimentos passaram
 * a reproduzir o material escrito pela própria Dra. Isabelly. Ele substituiu
 * integralmente os rascunhos anteriores, que tinham sido construídos a partir
 * de páginas de referência de outra profissional e de pesquisa em órgãos
 * reguladores. Onde o texto dela e o rascunho anterior diziam a mesma coisa,
 * o dela prevaleceu, inclusive na forma de dizer.
 *
 * Correções ortográficas aplicadas: acentos ausentes (`mandibula`, `maças`,
 * `chines`) e `Podendo melhorar` → `Pode melhorar` em `Preenchimento labial`,
 * para a frase deixar de ser fragmento.
 *
 * PASSADA EDITORIAL — 2026-09-01
 *
 * Depois de aplicado, o material foi lapidado a pedido do usuário, com a
 * proporção acordada de manter cerca de 90% da linguagem dela e usar os 10%
 * restantes para clareza. **Nenhuma afirmação clínica foi acrescentada,
 * removida ou alterada.** O que mudou foi a forma:
 *
 * - Abertura nomeia o procedimento em vez de começar por `Procedimento feito
 *   com...`. Mento, mandíbula e malar usavam esse mesmo molde e, como ficam
 *   lado a lado no seletor, liam-se como o mesmo texto.
 * - `Quando é indicado` virou lista onde ela escreveu enumeração corrida. O
 *   formato passou a ser o mesmo em todos, em vez de seis marcadores em
 *   labial e uma frase solta em mento. As palavras da lista são as dela.
 * - Onde o título usa termo técnico, uma frase liga o termo à palavra comum:
 *   `O mento é a região do queixo`, `A mandíbula é a linha que separa o rosto
 *   do pescoço`, `A região malar é a das maçãs do rosto`. São as **três
 *   únicas frases inteiramente novas** do arquivo, e são definição
 *   anatômica, não conduta. Precisam do aval dela.
 * - `Fios de PDO` e `Preenchimento de olheiras` seguem em prosa: a indicação
 *   que ela deu é uma condição só, e transformá-la em lista seria encher
 *   linguiça.
 *
 * Sem travessão (`—`) em nenhum texto visível, por decisão do usuário.
 *
 * O QUE AINDA NÃO VEIO DELA
 *
 * - `perguntas`: ela não entregou perguntas para nenhum procedimento. As dos
 *   onze primeiros são o rascunho de pesquisa anterior, mantido porque ela não
 *   pediu a remoção. As de `Preenchimento de olheiras` foram pesquisadas em
 *   2026-09-01, a pedido do usuário, para o procedimento novo não ficar sem
 *   FAQ enquanto os outros têm. Todas seguem pendentes de aprovação clínica.
 *   O tipo aceita a ausência do campo e o bloco só é renderizado onde existe
 *   conteúdo, então remover um FAQ não deixa buraco na página.
 * - `convite`: também é rascunho anterior.
 * - `description`: os cinco tratamentos que não são guarda-chuva usam a linha
 *   de apresentação escrita por ela. A de `Preenchedores Faciais` continua
 *   sendo rascunho, e alimenta apenas a meta description, porque o card
 *   exibe a grade de subtipos no lugar dela.
 * - `tiraDeDados`: segue com `A definir`. A faixa está oculta desde
 *   2026-08-24 e os valores dependem da conduta profissional.
 *
 * MUDANÇAS DE ESTRUTURA PEDIDAS POR ELA
 *
 * - `Preenchimento de queixo` passou a se chamar `Preenchimento de mento`.
 * - `Preenchimento das maçãs do rosto` passou a `Preenchimento de malar`.
 *   Nos dois casos, o corpo do texto continua usando as palavras do dia a dia
 *   (`queixo`, `maçãs do rosto`), porque foi assim que ela escreveu.
 * - `Preenchimento de olheiras` entrou como sétimo subtipo de
 *   `Preenchedores Faciais`. Ela o listou solto no fim do documento; foi
 *   agrupado aqui por ser um preenchimento regional, que é exatamente o que
 *   a página guarda-chuva reúne. Virar um sétimo card exigiria fotografia
 *   própria e revisão do ritmo da Seção 3.
 *
 * FOTOGRAFIA
 *
 * Os seis cards possuem fotografia em WebP. Em `2026-08-23`, os arquivos que
 * já continham WebP sob extensão `.png` foram republicados com a extensão
 * correta, sem recompressão e sem alterar nenhum byte da imagem. Subtipos não
 * têm fotografia própria, então `Preenchimento de olheiras` não pediu imagem
 * nova. A foto de rinomodelação continua em `public/images/treatments/` sem
 * uso na Seção 3.
 */

import type { ProseSection } from "@/content/prose";

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
  /** Texto entregue pela profissional. */
  oQueE: ProseSection;
  /** Texto entregue pela profissional. */
  quandoIndicado: ProseSection;
  /** Rótulos fixos e aprovados; valores provisórios. */
  tiraDeDados: TreatmentDataItem[];
  /**
   * Opcional: a profissional não entregou perguntas, e o bloco só é
   * renderizado onde existe conteúdo. Os itens presentes ainda são rascunho.
   */
  perguntas?: TreatmentQuestion[];
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
  /** Texto entregue pela profissional. */
  oQueE: ProseSection;
  /** Texto entregue pela profissional. */
  quandoIndicado: ProseSection;
  /** Rótulos fixos e aprovados; valores provisórios. */
  tiraDeDados: TreatmentDataItem[];
  /**
   * Opcional: a profissional não entregou perguntas, e o bloco só é
   * renderizado onde existe conteúdo. Os itens presentes ainda são rascunho.
   */
  perguntas?: TreatmentQuestion[];
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
  /*
    Parágrafo único de propósito. A divisão anterior separava duas frases que
    dizem a mesma coisa (valorizar/harmonizar e melhorar contorno, definição,
    proporção e volume), então a quebra não carregava ideia nova e deixava uma
    linha órfã. Nos outros procedimentos a quebra separa o que o procedimento
    é do que ele muda, e por isso continua.
  */
  oQueE: {
    paragraphs: [
      "O preenchimento labial é feito com ácido hialurônico para valorizar e harmonizar os lábios, melhorando o contorno, a definição, a proporção e o volume.",
    ],
  },
  quandoIndicado: {
    paragraphs: ["Pode ser uma opção para quem deseja:"],
    bullets: [
      "deixar os lábios mais definidos",
      "melhorar alguma diferença entre os lados",
      "recuperar volume perdido",
      "melhorar a proporção dos lábios com o rosto",
      "ter mais volume ou sustentação",
      "melhorar o formato dos lábios ao sorrir",
    ],
    afterBullets: [
      "Cada pessoa tem uma anatomia diferente. Por isso, o resultado e a quantidade de produto são definidos de forma individual, de acordo com o rosto e o objetivo de cada paciente.",
    ],
  },
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
  oQueE: {
    paragraphs: [
      "A rinomodelação é um procedimento feito sem cirurgia, com ácido hialurônico, para melhorar o formato do nariz.",
      "Pode ajudar a corrigir pequenas imperfeições, melhorar o formato da ponta e deixar o nariz mais equilibrado com o restante do rosto.",
    ],
  },
  quandoIndicado: {
    paragraphs: ["Pode ser uma opção para quem deseja melhorar:"],
    bullets: [
      "pequenas diferenças no formato do nariz",
      "uma pequena elevação ou queda da ponta",
      "pequenas diferenças entre os lados",
      "a harmonia entre o nariz, os lábios e o rosto",
    ],
  },
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
  oQueE: {
    paragraphs: [
      "A toxina botulínica reduz temporariamente a força dos músculos responsáveis por alguns movimentos do rosto.",
      "Com isso, ajuda a suavizar as linhas de expressão e a prevenir que elas se tornem mais marcadas. A aplicação é planejada de acordo com os movimentos e as características de cada rosto.",
    ],
  },
  quandoIndicado: {
    paragraphs: ["É indicada para suavizar as linhas que aparecem com o movimento, principalmente:"],
    bullets: [
      "na testa",
      "entre as sobrancelhas",
      "ao redor dos olhos",
    ],
    afterBullets: [
      "Também pode ser utilizada de forma preventiva, principalmente quando há movimentos muito intensos nessas regiões.",
    ],
  },
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
  oQueE: {
    paragraphs: [
      "O bioestimulador estimula o próprio organismo a produzir mais colágeno. Com o passar do tempo, isso pode melhorar a firmeza, a sustentação e a aparência da pele.",
      "Diferente do preenchimento, o resultado acontece de forma gradual e natural, sem criar volume imediato.",
    ],
  },
  quandoIndicado: {
    paragraphs: ["É indicado principalmente para:"],
    bullets: [
      "flacidez leve a moderada",
      "perda de firmeza",
      "alterações na qualidade da pele",
    ],
    afterBullets: [
      "O tratamento é definido de acordo com as necessidades de cada paciente e pode fazer parte de um plano de cuidados associado a outros procedimentos.",
    ],
  },
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
  oQueE: {
    paragraphs: [
      "Preenchedores faciais são materiais injetáveis utilizados para acrescentar ou restaurar volume, suavizar sulcos e ajustar contornos em regiões específicas do rosto. O ácido hialurônico é uma das opções absorvíveis mais utilizadas, mas cada produto possui indicação própria. O planejamento deve considerar anatomia, proporções, qualidade dos tecidos e o efeito desejado em cada área.",
    ],
  },
  quandoIndicado: {
    paragraphs: [
      "Podem ser considerados quando existe perda de volume, assimetria, pouca projeção ou um contorno que pode ser melhorado com acréscimo controlado de produto. Nem toda queixa facial é resolvida com preenchimento: flacidez importante, excesso de pele, alterações funcionais e expectativas incompatíveis com a técnica exigem outra abordagem ou encaminhamento.",
    ],
  },
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

const CONTEUDO_PREENCHIMENTO_MENTO: TreatmentDraftContent = {
  oQueE: {
    paragraphs: [
      "O mento é a região do queixo. O preenchimento é feito com ácido hialurônico para valorizar seu formato e melhorar o equilíbrio do rosto.",
      "Pode deixar o perfil mais harmônico, equilibrando a relação entre queixo, lábios e nariz.",
    ],
  },
  quandoIndicado: {
    paragraphs: ["Pode ser uma opção para quem deseja:"],
    bullets: [
      "mais definição no queixo",
      "corrigir pequenas diferenças na região",
      "deixar o rosto mais proporcional",
    ],
  },
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
  oQueE: {
    paragraphs: [
      "A mandíbula é a linha que separa o rosto do pescoço. O preenchimento com ácido hialurônico atua sobre esse contorno para defini-lo e valorizá-lo.",
      "Pode deixar o rosto mais marcado e trazer mais equilíbrio para a região entre o queixo e o pescoço.",
    ],
  },
  quandoIndicado: {
    paragraphs: ["Pode ser uma opção para quem deseja:"],
    bullets: [
      "mais definição no contorno do rosto",
      "corrigir pequenas diferenças na linha da mandíbula",
      "melhorar a harmonia facial",
    ],
  },
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

const CONTEUDO_PREENCHIMENTO_MALAR: TreatmentDraftContent = {
  oQueE: {
    paragraphs: [
      "A região malar é a das maçãs do rosto. O preenchimento devolve volume a essa área e destaca o seu contorno.",
      "Pode deixar a face mais equilibrada e com aparência mais descansada.",
    ],
  },
  quandoIndicado: {
    paragraphs: ["Pode ser uma opção para quem percebe:"],
    bullets: [
      "perda de volume na região",
      "bochechas pouco marcadas",
      "mudanças no rosto com o passar do tempo",
    ],
    afterBullets: [
      "O resultado deve ser delicado e respeitar o formato natural de cada rosto.",
    ],
  },
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
  oQueE: {
    paragraphs: [
      "O bigode chinês é a linha que se forma entre o nariz e o canto da boca. O preenchimento pode suavizar essa marca, devolvendo volume e melhorando a harmonia do rosto.",
      "O objetivo é reduzir a profundidade da linha, mantendo a naturalidade das expressões.",
    ],
  },
  quandoIndicado: {
    paragraphs: ["É indicado quando a marca está mais evidente por:"],
    bullets: [
      "perda de volume na região",
      "formato do rosto",
      "envelhecimento",
    ],
    afterBullets: [
      "Em alguns casos, o melhor resultado pode ser obtido tratando outras regiões do rosto, e não apenas a linha.",
    ],
  },
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

/*
  `oQueE` e `quandoIndicado` são texto da profissional. As `perguntas` foram
  pesquisadas a pedido do usuário em 2026-09-01, no mesmo status de rascunho
  das demais: pendentes de aprovação clínica.

  A pergunta sobre tipos de olheira abre o bloco de propósito. Ela desdobra a
  ressalva que a própria profissional escreveu — `Nem toda olheira precisa de
  preenchimento` — em vez de contradizê-la.
*/
const CONTEUDO_PREENCHIMENTO_OLHEIRAS: TreatmentDraftContent = {
  oQueE: {
    paragraphs: [
      "O preenchimento de olheiras pode repor o volume da região abaixo dos olhos.",
      "Isso suaviza a aparência de algumas olheiras e melhora a transição entre a pálpebra e a bochecha.",
    ],
  },
  quandoIndicado: {
    paragraphs: [
      "Pode ser indicado quando a olheira está relacionada principalmente à falta de volume e à profundidade da região.",
      "Nem toda olheira precisa de preenchimento. Por isso, a avaliação é importante para identificar a causa e indicar o tratamento mais adequado.",
    ],
  },
  perguntas: [
    {
      question: "Todo tipo de olheira melhora com preenchimento?",
      answer:
        "Não. As olheiras costumam ser descritas como vasculares, quando os vasos ficam visíveis sob uma pele fina; pigmentares, quando há acúmulo de melanina; e estruturais, quando existe perda de volume e a sombra vem da própria depressão da região. Muitas pessoas apresentam uma combinação delas. O preenchimento atua sobre o componente de volume, então a avaliação precisa identificar o que predomina antes de definir a conduta.",
    },
    {
      question: "Quanto tempo costuma durar o resultado?",
      answer:
        "As estimativas mais citadas ficam entre seis e dezoito meses. Esse intervalo pode mudar conforme o metabolismo, o produto escolhido, a quantidade aplicada e os hábitos de cada pessoa. Uma nova aplicação deve ser decidida depois de reavaliar o que ainda permanece da anterior.",
    },
    {
      question: "Quando o resultado fica estável?",
      answer:
        "A mudança já pode ser percebida logo após a aplicação, mas os primeiros dias incluem o inchaço esperado e a possibilidade de hematomas, comuns em uma região de pele fina. Esses sinais costumam ceder em poucos dias, e a avaliação do resultado mais estável acontece por volta de uma a duas semanas.",
    },
    {
      question: "A região pode ficar com aparência azulada depois da aplicação?",
      answer:
        "Pode. Esse aspecto é conhecido como efeito Tyndall e acontece quando o produto fica posicionado de forma muito superficial em uma pele fina, alterando a maneira como a luz é refletida. A escolha do produto, a profundidade e a quantidade aplicada influenciam esse risco. Quando acontece, o ácido hialurônico pode ser dissolvido por uma enzima própria, sempre por indicação de profissional habilitado.",
    },
    {
      question: "Há situações em que o procedimento deve ser adiado?",
      answer:
        "Gestação, amamentação, infecção ativa na região, alterações de coagulação, doenças autoimunes descompensadas, alergias e alguns medicamentos precisam ser informados durante a avaliação. Bolsas de gordura evidentes, excesso de pele e inchaço frequente na região também mudam a conduta, porque acrescentar produto pode acentuar esses aspectos em vez de suavizá-los.",
    },
  ],
};

const CONTEUDO_FIOS_PDO: TreatmentDraftContent = {
  oQueE: {
    paragraphs: [
      "Os fios de PDO são fios absorvíveis colocados sob a pele para dar suporte aos tecidos e melhorar o contorno facial.",
      "O efeito é gradual e temporário, com resultado discreto e natural.",
    ],
  },
  quandoIndicado: {
    paragraphs: [
      "Podem ser indicados para flacidez leve e para o início da perda de definição do rosto.",
    ],
  },
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
  oQueE: {
    paragraphs: [
      "O microagulhamento utiliza pequenas agulhas para fazer microperfurações controladas na pele, estimulando a sua renovação e a produção de colágeno.",
      "Com o tempo, pode melhorar a textura, a aparência dos poros e algumas marcas da pele.",
    ],
  },
  quandoIndicado: {
    paragraphs: ["Pode ser indicado para:"],
    bullets: [
      "cicatrizes de acne",
      "linhas finas",
      "alterações na textura da pele",
    ],
    afterBullets: [
      "A indicação é feita após avaliação, considerando as características e as necessidades de cada pele.",
    ],
  },
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
  oQueE: {
    paragraphs: [
      "O skinbooster é feito com pequenas aplicações de ácido hialurônico na pele, com o objetivo de melhorar a hidratação, a textura e a elasticidade.",
      "O resultado é uma pele com aparência mais hidratada, luminosa e bem cuidada.",
    ],
  },
  quandoIndicado: {
    paragraphs: ["Pode ser indicado para:"],
    bullets: [
      "pele ressecada ou sem viço",
      "textura irregular",
      "linhas finas",
    ],
    afterBullets: [
      "É um tratamento voltado para a qualidade da pele, e não para dar volume ou mudar o contorno do rosto.",
    ],
  },
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
  borda direita, ímpar na esquerda. O traçado pontilhado do desktop é derivado
  da posição medida dos cards por `buildTreatmentRoute`, então reordenar ou
  mudar a quantidade não quebra a linha — mas continua exigindo conferir a
  seção, porque a alternância muda de lado a cada card.
*/
export const treatments: Treatment[] = [
  {
    slug: "preenchedores-faciais",
    title: "Preenchedores Faciais",
    description:
      "Planejamento de volume e definição facial com atenção às proporções de cada região.",
    subtypes: [
      /*
        `cardLabel` é só `Labial`: com `Preenchimento labial` o item quebrava
        em duas linhas e desalinhava a primeira fileira da grade. O título do
        card já diz `Preenchedores Faciais`, então repetir a palavra em cada
        item não acrescentava nada. O nome completo continua no `title`, que é
        o que a página interna exibe.
      */
      criarSubtipoPreenchedor(
        "preenchimento-labial",
        "Labial",
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
        "preenchimento-de-mento",
        "Mento",
        "Mento",
        "Preenchimento de mento",
        CONTEUDO_PREENCHIMENTO_MENTO,
      ),
      criarSubtipoPreenchedor(
        "preenchimento-de-mandibula",
        "Mandíbula",
        "Mandíbula",
        "Preenchimento de mandíbula",
        CONTEUDO_PREENCHIMENTO_MANDIBULA,
      ),
      criarSubtipoPreenchedor(
        "preenchimento-de-malar",
        "Malar",
        "Malar",
        "Preenchimento de malar",
        CONTEUDO_PREENCHIMENTO_MALAR,
      ),
      criarSubtipoPreenchedor(
        "preenchimento-do-bigode-chines",
        "Bigode chinês",
        "Bigode chinês",
        "Preenchimento do bigode chinês",
        CONTEUDO_PREENCHIMENTO_BIGODE_CHINES,
      ),
      criarSubtipoPreenchedor(
        "preenchimento-de-olheiras",
        "Olheiras",
        "Olheiras",
        "Preenchimento de olheiras",
        CONTEUDO_PREENCHIMENTO_OLHEIRAS,
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
      "Linhas de expressão mais suaves, preservando a naturalidade do rosto.",
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
      "Um cuidado gradual para melhorar a firmeza e a qualidade da pele.",
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
      "Uma opção não cirúrgica para melhorar a sustentação e o contorno do rosto.",
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
      "Um tratamento que estimula a renovação da pele e melhora sua aparência.",
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
      "Hidratação profunda para uma pele mais viçosa, uniforme e saudável.",
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
