/**
 * Conteúdo dos tratamentos.
 *
 * ATENÇÃO — CONTEÚDO PROVISÓRIO
 *
 * Os campos `oQueE`, `quandoIndicado`, `perguntas` e `convite` estão
 * preenchidos com Lorem Ipsum, autorizado como marcador de posição enquanto o
 * texto real não chega. Nenhum deles descreve o procedimento de verdade e
 * nenhum pode ir para produção como está.
 *
 * Os campos `tiraDeDados` usam o valor `A definir` em vez de Lorem Ipsum,
 * porque são campos curtos onde o latim ficaria ilegível.
 *
 * ESTADO DAS DESCRIÇÕES (atualizado em 2026-08-23)
 *
 * `title` e `description` de `toxina-botulinica` seguem aprovados desde a
 * validação original da Seção 3.
 *
 * As demais `description` foram redigidas a partir do texto da própria
 * profissional (`texto 3.txt`) e ainda **não passaram por aprovação dela**.
 * São curtas e fiéis à fonte, mas devem ser confirmadas antes de publicar,
 * porque também alimentam a meta description da página do procedimento.
 *
 * FOTOGRAFIA
 *
 * `image` e `imageAlt` são opcionais. Quatro procedimentos ainda não têm
 * fotografia; o card cai para o fundo sólido `#535353` sem quebrar o layout.
 * Decisão de `2026-08-23`: subir a estrutura sem as fotos e preenchê-las
 * depois.
 *
 * As seis regiões de preenchimento (lábios, nariz, queixo, mandíbula, maçãs
 * do rosto e bigode chinês) deixaram de ser cards próprios e passaram a ser
 * subtipos de `preenchedores-faciais`. A foto de rinomodelação continua em
 * `public/images/treatments/` sem uso na Seção 3.
 *
 * Os rótulos da tira de dados foram aprovados em 2026-08-22 e precisam ser
 * iguais em todos os procedimentos, senão a faixa escura muda de forma entre
 * as páginas.
 */

const LOREM_LONGO =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

const LOREM_MEDIO =
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.";

const LOREM_CURTO =
  "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.";

export type TreatmentDataItem = {
  label: string;
  value: string;
};

export type TreatmentQuestion = {
  question: string;
  answer: string;
};

export type Treatment = {
  slug: string;
  title: string;
  description: string;
  /** Ausente enquanto a fotografia do procedimento não existir. */
  image?: string;
  /** Obrigatório sempre que houver `image`. */
  imageAlt?: string;
  /** Provisório: Lorem Ipsum. */
  oQueE: string;
  /** Provisório: Lorem Ipsum. Deve incluir quando NÃO é indicado. */
  quandoIndicado: string;
  /** Rótulos fixos e aprovados; valores provisórios. */
  tiraDeDados: TreatmentDataItem[];
  /** Provisório: Lorem Ipsum. */
  perguntas: TreatmentQuestion[];
  /** Provisório: Lorem Ipsum. Linha única do encerramento da página. */
  convite: string;
};

const criarTiraDeDados = (): TreatmentDataItem[] => [
  { label: "Duração", value: "A definir" },
  { label: "Anestesia", value: "A definir" },
  { label: "Retorno", value: "A definir" },
  { label: "Durabilidade", value: "A definir" },
];

const criarPerguntas = (): TreatmentQuestion[] => [
  { question: "Lorem ipsum dolor sit amet consectetur?", answer: LOREM_MEDIO },
  { question: "Ut enim ad minim veniam quis nostrud?", answer: LOREM_LONGO },
  { question: "Duis aute irure dolor in reprehenderit?", answer: LOREM_MEDIO },
  { question: "Excepteur sint occaecat cupidatat non proident?", answer: LOREM_CURTO },
];

/*
  A ordem define a alternância dos cards na Seção 3: índice par encosta na
  borda direita, ímpar na esquerda. O traçado pontilhado do desktop foi
  desenhado para esta sequência de seis; reordenar ou mudar a quantidade exige
  refazer o `path` em `TreatmentsIntroSection`.
*/
export const treatments: Treatment[] = [
  {
    slug: "toxina-botulinica",
    title: "Toxina Botulínica",
    description:
      "Avaliação cuidadosa da expressão e do movimento para suavizar sem apagar o que torna seu rosto único.",
    image: "/images/treatments/toxina-botulinica.png",
    imageAlt: "Aplicação de toxina botulínica na testa de uma paciente",
    oQueE: LOREM_LONGO,
    quandoIndicado: LOREM_MEDIO,
    tiraDeDados: criarTiraDeDados(),
    perguntas: criarPerguntas(),
    convite: LOREM_CURTO,
  },
  {
    slug: "preenchedores-faciais",
    title: "Preenchedores Faciais",
    description:
      "Volume, contorno e suporte devolvidos com proporção, região a região do rosto.",
    image: "/images/treatments/preenchimento-labial.png",
    imageAlt: "Detalhe de lábios em procedimento de preenchimento",
    oQueE: LOREM_LONGO,
    quandoIndicado: LOREM_MEDIO,
    tiraDeDados: criarTiraDeDados(),
    perguntas: criarPerguntas(),
    convite: LOREM_CURTO,
  },
  {
    slug: "bioestimulador-de-colageno",
    title: "Bioestimulador de Colágeno",
    description:
      "Estímulo à produção do próprio colágeno, com resultado progressivo em firmeza e qualidade de pele.",
    oQueE: LOREM_LONGO,
    quandoIndicado: LOREM_MEDIO,
    tiraDeDados: criarTiraDeDados(),
    perguntas: criarPerguntas(),
    convite: LOREM_CURTO,
  },
  {
    slug: "fios-de-pdo",
    title: "Fios de PDO",
    description:
      "Filamentos absorvíveis que estimulam colágeno e, em técnicas específicas, sustentam os tecidos.",
    oQueE: LOREM_LONGO,
    quandoIndicado: LOREM_MEDIO,
    tiraDeDados: criarTiraDeDados(),
    perguntas: criarPerguntas(),
    convite: LOREM_CURTO,
  },
  {
    slug: "microagulhamento",
    title: "Microagulhamento",
    description:
      "Microperfurações controladas que ativam a regeneração da pele e melhoram textura e cicatrizes.",
    oQueE: LOREM_LONGO,
    quandoIndicado: LOREM_MEDIO,
    tiraDeDados: criarTiraDeDados(),
    perguntas: criarPerguntas(),
    convite: LOREM_CURTO,
  },
  {
    slug: "skinbooster",
    title: "Skinbooster",
    description:
      "Hidratação profunda para uma pele mais viçosa e uniforme, sem alterar volume ou contorno.",
    oQueE: LOREM_LONGO,
    quandoIndicado: LOREM_MEDIO,
    tiraDeDados: criarTiraDeDados(),
    perguntas: criarPerguntas(),
    convite: LOREM_CURTO,
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
