/**
 * Fonte única dos dados de origem do site.
 *
 * DOMÍNIO
 *
 * `NEXT_PUBLIC_SITE_URL` ainda não existe porque o domínio não foi definido.
 * Enquanto isso, o fallback aponta para o servidor local. É proposital: um
 * domínio inventado como fallback vazaria para o `sitemap.xml` e para as URLs
 * canônicas sem ninguém perceber. `localhost` é obviamente errado e denuncia
 * a falta de configuração no primeiro olhar.
 *
 * INDEXAÇÃO
 *
 * `NEXT_PUBLIC_SITE_INDEXABLE` precisa valer exatamente `"true"` para o site
 * liberar buscadores. O padrão é bloquear.
 *
 * O motivo não é técnico, é editorial: todo o conteúdo clínico das páginas de
 * tratamento é rascunho sem aprovação da Dra. Isabelly. Um preview da Vercel
 * indexado publicaria texto médico não revisado sob o nome e o CRO dela. O
 * padrão seguro é não aparecer; liberar exige um passo consciente.
 */

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const siteUrl = (rawSiteUrl && rawSiteUrl.length > 0
  ? rawSiteUrl
  : "http://localhost:3001"
).replace(/\/$/, "");

/** `true` somente quando o domínio real foi configurado. */
export const hasRealDomain = Boolean(rawSiteUrl && !rawSiteUrl.includes("localhost"));

/** Buscadores só entram com liberação explícita. Ver comentário acima. */
export const isIndexable =
  process.env.NEXT_PUBLIC_SITE_INDEXABLE?.trim() === "true" && hasRealDomain;

/** Monta uma URL absoluta a partir de um caminho interno. */
export const absoluteUrl = (path: string): string =>
  `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
