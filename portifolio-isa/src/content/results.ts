export interface ResultCardContent {
  title: string;
  cases: number;
  testimonial: string;
  author: string;
  image?: {
    src: string;
    alt: string;
  };
}

export const resultCards: ResultCardContent[] = [
  {
    title: "Preenchimento labial",
    cases: 12,
    testimonial: "Amei o resultado. Ficou natural e exatamente como eu esperava.",
    author: "Ana Carolina",
    image: {
      src: "/images/results/preenchimento-labial-antes-depois.png",
      alt: "Comparação de antes e depois de preenchimento labial.",
    },
  },
  {
    title: "Toxina Botulínica",
    cases: 12,
    testimonial: "Fiquei muito feliz. O resultado ficou leve e do jeito que imaginei.",
    author: "Mariana Lopes",
    image: {
      src: "/images/results/toxina-botulinica-antes-depois.png",
      alt: "Comparação de antes e depois de toxina botulínica na região da testa.",
    },
  },
  {
    title: "Rinomodelação",
    cases: 12,
    testimonial: "Me senti muito segura. O resultado ficou natural e muito harmônico.",
    author: "Júlia Martins",
    image: {
      src: "/images/results/rinomodelacao-antes-depois.png",
      alt: "Comparação de antes e depois de rinomodelação em vista lateral.",
    },
  },
  {
    title: "Full Face",
    cases: 12,
    testimonial: "Adorei o resultado. Ficou equilibrado e respeitou meus traços.",
    author: "Camila Souza",
    image: {
      src: "/images/results/full-face-antes-depois.png",
      alt: "Comparação de antes e depois de tratamento Full Face em vista lateral.",
    },
  },
  {
    title: "Bioestimulador",
    cases: 12,
    testimonial: "O cuidado em cada detalhe fez o resultado ficar ainda mais natural.",
    author: "Fernanda Alves",
    image: {
      src: "/images/results/bioestimulador-antes-depois.png",
      alt: "Comparação de antes e depois de bioestimulador facial.",
    },
  },
  {
    title: "Outros tratamentos",
    cases: 12,
    testimonial: "Gostei muito do resultado. Ficou discreto, bonito e muito natural.",
    author: "Beatriz Rocha",
    image: {
      src: "/images/results/outros-tratamentos-antes-depois.png",
      alt: "Comparação de antes e depois de outro tratamento facial em vista lateral.",
    },
  },
];
