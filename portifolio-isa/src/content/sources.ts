/**
 * Referências das páginas de tratamento.
 *
 * POR QUE ISTO EXISTE
 *
 * Conteúdo de saúde é avaliado pelo Google sob o critério mais rígido que
 * existe (YMYL). Fonte verificável é um dos poucos sinais de confiabilidade
 * que dependem só de nós — não de backlink, não de tempo de domínio. As
 * referências já haviam sido levantadas em `2026-08-24`, mas estavam presas
 * num documento interno (`docs/handoff/tratamentos-conteudo-pesquisa.md`),
 * onde nenhum buscador as alcança.
 *
 * ONDE ELAS APARECEM
 *
 * Somente no JSON-LD, no campo `citation` de `MedicalWebPage`. Em `2026-08-25`
 * o usuário decidiu não exibir bloco visível de procedência: alterar layout
 * não é escopo dele. Se um dia a decisão mudar, os dados já estão prontos e
 * basta um componente consumir `getTreatmentSources`.
 *
 * REGRA DE ADMISSÃO
 *
 * Só entra órgão regulador ou literatura científica indexada.
 *
 * As páginas de `drakureski.com.br` citadas no handoff NÃO entram. Elas
 * serviram de referência editorial de estrutura e são de uma concorrente:
 * publicá-las como fonte clínica mandaria autoridade para o site dela e
 * apresentaria material de marketing de terceiro como evidência.
 *
 * LACUNA CONHECIDA
 *
 * `toxina-botulinica` e `bioestimulador-de-colageno` ficam sem referência
 * porque o levantamento original só teve a página da concorrente para esses
 * dois. Preferimos a ausência visível à fonte inventada — a lacuna é o pedido
 * de pesquisa, e some quando a pesquisa acontecer.
 */

export type TreatmentSource = {
  /** Título curto e legível da fonte. */
  label: string;
  /** Quem publica. É o que dá peso à citação. */
  publisher: string;
  url: string;
};

export const treatmentSources: Record<string, readonly TreatmentSource[]> = {
  "preenchedores-faciais": [
    {
      label: "Dermal Fillers (Soft Tissue Fillers)",
      publisher: "FDA",
      url: "https://www.fda.gov/medical-devices/aesthetic-cosmetic-devices/dermal-fillers-soft-tissue-fillers",
    },
    {
      label: "Dermal Filler Do's and Don'ts",
      publisher: "FDA",
      url: "https://www.fda.gov/consumers/consumer-updates/dermal-filler-dos-and-donts-wrinkles-lips-and-more",
    },
    {
      label: "Ensaio clínico randomizado de preenchimento de queixo",
      publisher: "PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/36126213/",
    },
    {
      label: "Ensaio clínico randomizado sobre definição mandibular",
      publisher: "PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/38985546/",
    },
    {
      label: "Ensaio randomizado de aumento malar com 52 semanas de acompanhamento",
      publisher: "PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/32309093/",
    },
    {
      label: "Revisão sistemática e meta-análise sobre sulco nasolabial",
      publisher: "PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/34255156/",
    },
    {
      label: "Consenso sobre redução do risco de complicação vascular",
      publisher: "PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/31693068/",
    },
  ],
  "fios-de-pdo": [
    {
      label: "Revisão sistemática do perfil de segurança de fios faciais e cervicais",
      publisher: "PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/34699439/",
    },
    {
      label: "Meta-análise de complicações após lifting com fios",
      publisher: "PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/33821308/",
    },
    {
      label: "Revisão sistemática sobre evidência e durabilidade do efeito",
      publisher: "PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/29481392/",
    },
    {
      label: "Ensaio randomizado sobre quantidade de fios de PDO",
      publisher: "PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/40236886/",
    },
  ],
  microagulhamento: [
    {
      label: "Microneedling Devices",
      publisher: "FDA",
      url: "https://www.fda.gov/medical-devices/aesthetic-cosmetic-devices/microneedling-devices",
    },
    {
      label: "Benefícios, riscos e segurança do microagulhamento",
      publisher: "FDA",
      url: "https://www.fda.gov/consumers/consumer-updates/microneedling-devices-getting-point-benefits-risks-and-safety",
    },
    {
      label: "Comunicação de segurança sobre microagulhamento com radiofrequência",
      publisher: "FDA",
      url: "https://www.fda.gov/medical-devices/safety-communications/potential-risks-certain-uses-radiofrequency-rf-microneedling-fda-safety-communication",
    },
    {
      label: "Revisão sistemática de ensaios randomizados para cicatrizes atróficas",
      publisher: "PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/33538106/",
    },
  ],
  skinbooster: [
    {
      label: "Revisão sistemática sobre ácido hialurônico injetável e qualidade da pele",
      publisher: "PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/37038447/",
    },
    {
      label: "Ensaio clínico randomizado sobre hidratação e elasticidade",
      publisher: "PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/26910661/",
    },
    {
      label: "Estudo sobre aplicações de ácido hialurônico para qualidade da pele",
      publisher: "PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/32419355/",
    },
    {
      label: "Ensaio multicêntrico randomizado com ácido hialurônico não reticulado",
      publisher: "PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/41971651/",
    },
  ],
};

export const getTreatmentSources = (slug: string): readonly TreatmentSource[] =>
  treatmentSources[slug] ?? [];

/**
 * Estado editorial do conteúdo clínico.
 *
 * `revisadoPelaProfissional` é `false` porque a revisão da Dra. Isabelly ainda
 * não aconteceu. Enquanto for `false`, o JSON-LD omite `reviewedBy` e
 * `lastReviewed` — declarar a máquinas uma checagem que não houve seria falso,
 * e é justamente o campo que pesa autoridade médica.
 *
 * QUANDO A REVISÃO ACONTECER: virar a chave para `true` e preencher
 * `revisadoEm` com a data real. Os dados estruturados passam a declarar a
 * revisão clínica sozinhos, sem tocar em nenhum outro arquivo.
 */
export const editorialStatus = {
  revisadoPelaProfissional: false,
  /** Data real da última rodada editorial. */
  atualizadoEm: "2026-08-24",
  /** Preencher no formato `AAAA-MM-DD` somente quando a revisão ocorrer. */
  revisadoEm: null as string | null,
} as const;
