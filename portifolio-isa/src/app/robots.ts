import type { MetadataRoute } from "next";

import { absoluteUrl, isIndexable } from "@/lib/site";

/*
  Enquanto o conteúdo clínico não tiver aprovação da Dra. Isabelly, o site
  recusa buscadores por inteiro. Ver o comentário em `src/lib/site.ts`.
*/
export default function robots(): MetadataRoute.Robots {
  if (!isIndexable) {
    return {
      rules: { userAgent: "*", disallow: "/" },
    };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: absoluteUrl("/"),
  };
}
