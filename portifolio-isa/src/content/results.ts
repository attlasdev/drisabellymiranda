export interface ResultCaseContent {
  id: string;
  testimonial?: string;
  author?: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
  };
}

export interface ResultCardContent {
  id: string;
  title: string;
  cases: ResultCaseContent[];
}

const createCaseSlots = (
  resultId: string,
  firstCase: Omit<ResultCaseContent, "id">,
): ResultCaseContent[] => [
  { id: `${resultId}-01`, ...firstCase },
  ...Array.from({ length: 11 }, (_, index) => ({
    id: `${resultId}-${String(index + 2).padStart(2, "0")}`,
  })),
];

export const resultCards: ResultCardContent[] = [
  {
    id: "preenchimento-labial",
    title: "Preenchimento labial",
    cases: createCaseSlots("preenchimento-labial", {
      testimonial: "Amei o resultado. Ficou natural e exatamente como eu esperava.",
      author: "Ana Carolina",
      image: {
        src: "/images/results/preenchimento-labial-antes-depois.png",
        alt: "Comparação de antes e depois de preenchimento labial.",
      },
    }),
  },
  {
    id: "toxina-botulinica",
    title: "Toxina Botulínica",
    cases: createCaseSlots("toxina-botulinica", {
      testimonial: "Fiquei muito feliz. O resultado ficou leve e do jeito que imaginei.",
      author: "Mariana Lopes",
      image: {
        src: "/images/results/toxina-botulinica-antes-depois.png",
        alt: "Comparação de antes e depois de toxina botulínica na região da testa.",
      },
    }),
  },
  {
    id: "rinomodelacao",
    title: "Rinomodelação",
    cases: createCaseSlots("rinomodelacao", {
      testimonial: "Me senti muito segura. O resultado ficou natural e muito harmônico.",
      author: "Júlia Martins",
      image: {
        src: "/images/results/rinomodelacao-antes-depois.png",
        alt: "Comparação de antes e depois de rinomodelação em vista lateral.",
      },
    }),
  },
  {
    id: "full-face",
    title: "Full Face",
    cases: createCaseSlots("full-face", {
      testimonial: "Adorei o resultado. Ficou equilibrado e respeitou meus traços.",
      author: "Camila Souza",
      image: {
        src: "/images/results/full-face-antes-depois.png",
        alt: "Comparação de antes e depois de tratamento Full Face em vista lateral.",
      },
    }),
  },
  {
    id: "bioestimulador",
    title: "Bioestimulador",
    cases: createCaseSlots("bioestimulador", {
      testimonial: "O cuidado em cada detalhe fez o resultado ficar ainda mais natural.",
      author: "Fernanda Alves",
      image: {
        src: "/images/results/bioestimulador-antes-depois.png",
        alt: "Comparação de antes e depois de bioestimulador facial.",
      },
    }),
  },
  {
    id: "outros-tratamentos",
    title: "Outros tratamentos",
    cases: createCaseSlots("outros-tratamentos", {
      testimonial: "Gostei muito do resultado. Ficou discreto, bonito e muito natural.",
      author: "Beatriz Rocha",
      image: {
        src: "/images/results/outros-tratamentos-antes-depois.png",
        alt: "Comparação de antes e depois de outro tratamento facial em vista lateral.",
      },
    }),
  },
];
