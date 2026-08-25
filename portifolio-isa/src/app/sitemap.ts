import type { MetadataRoute } from "next";

import { treatments } from "@/content/treatments";
import { absoluteUrl } from "@/lib/site";

/*
  Data real da última revisão editorial do conteúdo (a rodada de pesquisa dos
  tratamentos). Não usar `new Date()`: isso marcaria toda página como alterada
  a cada build, o que é falso e faz o buscador desconfiar do sinal.
*/
const ultimaRevisaoEditorial = new Date("2026-08-24");

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
