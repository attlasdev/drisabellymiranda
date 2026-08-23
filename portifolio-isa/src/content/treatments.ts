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
 * Já são reais e aprovados: `title`, `description`, `image` e `imageAlt` — os
 * mesmos que a Seção 3 da home usa hoje. A `description` também alimenta a
 * frase-resumo e a meta description da página do procedimento.
 *
 * Os rótulos da tira de dados foram aprovados em 2026-08-22 e precisam ser
 * iguais nos três procedimentos, senão a faixa escura muda de forma entre as
 * páginas.
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
  image: string;
  imageAlt: string;
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

export const treatments: Treatment[] = [
  {
    slug: "preenchimento-labial",
    title: "Preenchimento labial",
    description: "Proporção, contorno e suporte planejados com naturalidade.",
    image: "/images/treatments/preenchimento-labial.png",
    imageAlt: "Detalhe de lábios em procedimento de preenchimento labial",
    oQueE: LOREM_LONGO,
    quandoIndicado: LOREM_MEDIO,
    tiraDeDados: criarTiraDeDados(),
    perguntas: criarPerguntas(),
    convite: LOREM_CURTO,
  },
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
    slug: "rinomodelacao",
    title: "Rinomodelação",
    description:
      "Uma alternativa sem cirurgia, indicada após avaliação cuidadosa de anatomia, proporção e segurança.",
    image: "/images/treatments/rinomodelacao.png",
    imageAlt: "Avaliação do perfil nasal para rinomodelação",
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
