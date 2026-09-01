import type { MetadataRoute } from "next";

import { treatments } from "@/content/treatments";
import { absoluteUrl } from "@/lib/site";

/*
  Data real da última revisão editorial do conteúdo. Não usar `new Date()`:
  isso marcaria toda página como alterada a cada build, o que é falso e faz o
  buscador desconfiar do sinal.

  `2026-09-01`: a Dra. Isabelly entregou o texto dos procedimentos e ele
  substituiu os rascunhos de pesquisa em `O que é` e `Quando é indicado` dos
  doze. Foi reescrita de conteúdo, não ajuste de forma, então a data anterior
  (`2026-08-24`, a rodada de pesquisa) deixou de descrever o que está no ar.

  Atualizar aqui só quando o texto mudar de verdade.
*/
const ultimaRevisaoEditorial = new Date("2026-09-01");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/"),
      lastModified: ultimaRevisaoEditorial,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: absoluteUrl("/trajetoria"),
      lastModified: ultimaRevisaoEditorial,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    ...treatments.map((treatment) => ({
      url: absoluteUrl(`/tratamentos/${treatment.slug}`),
      lastModified: ultimaRevisaoEditorial,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
