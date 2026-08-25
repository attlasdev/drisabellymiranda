/**
 * Dados estruturados (JSON-LD) do site.
 *
 * REGRA DESTE ARQUIVO
 *
 * Só entra aqui informação verificável que já existe no site. Schema.org é
 * lido por máquina e tratado como declaração factual do negócio; inventar
 * endereço, horário ou avaliação para "completar" um tipo é exatamente o que
 * gera penalização manual. O que falta fica documentado como lacuna, não
 * preenchido por suposição.
 *
 * LACUNAS CONHECIDAS (dependem da Dra. Isabelly)
 *
 * - `address`: não há endereço divulgado. Sem ele o `Dentist` NÃO é elegível
 *   ao pacote local do Google. É a maior lacuna da lista.
 * - `openingHours`: os atendimentos são em datas programadas, sem grade fixa.
 * - `areaServed`: o CRO é de Minas Gerais, mas onde ela atende não foi dito.
 *   Deduzir a região a partir do DDD seria palpite.
 * - `aggregateRating` / `review`: não existem avaliações coletadas. Nunca
 *   inventar — é a violação mais punida da especificação.
 */

import { contactCta } from "@/content/contact";
import { faqItems, type FaqItem } from "@/content/faq";
import type { Treatment, TreatmentQuestion } from "@/content/treatments";
import { footerContent } from "@/content/footer";
import { editorialStatus, getTreatmentSources } from "@/content/sources";
import { trajetoria } from "@/content/trajetoria";
import { absoluteUrl } from "@/lib/site";

const nomeCompleto = `${footerContent.firstName} ${footerContent.lastName}`;
const nomeComTitulo = `Dra. ${nomeCompleto}`;

/*
  O número já é público no site, no botão de WhatsApp. Reaproveitar a mesma
  fonte evita que o telefone do schema e o do botão divirjam com o tempo.
*/
const telefone = `+${contactCta.whatsappHref.replace(/\D/g, "")}`;

const retratoOficial = absoluteUrl("/images/hero/isabely-hero-original.jpg");

const perfisOficiais = [footerContent.instagramHref];

const IDS = {
  pessoa: absoluteUrl("/#isabelly"),
  clinica: absoluteUrl("/#clinica"),
  site: absoluteUrl("/#website"),
} as const;

/** A profissional. Base de E-E-A-T para conteúdo de saúde. */
const pessoa = {
  "@type": "Person",
  "@id": IDS.pessoa,
  name: nomeComTitulo,
  alternateName: nomeCompleto,
  givenName: footerContent.firstName,
  familyName: footerContent.lastName,
  jobTitle: footerContent.profession,
  image: retratoOficial,
  url: absoluteUrl("/trajetoria"),
  sameAs: perfisOficiais,
  knowsAbout: footerContent.specialty,
  knowsLanguage: "pt-BR",
  /*
    O registro profissional é o sinal de credencial mais forte disponível.
    `recognizedBy` nomeia o Conselho Regional de Odontologia de Minas Gerais,
    que é o que a sigla CRO-MG significa.
  */
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Registro profissional",
    name: footerContent.registration,
    recognizedBy: {
      "@type": "Organization",
      name: "Conselho Regional de Odontologia de Minas Gerais",
    },
  },
} as const;

/** O consultório. Sem `address`, ainda inelegível ao pacote local. */
const clinica = {
  "@type": "Dentist",
  "@id": IDS.clinica,
  name: nomeComTitulo,
  url: absoluteUrl("/"),
  image: retratoOficial,
  description:
    "Harmonização orofacial com planejamento individualizado, escuta e respeito à identidade de cada pessoa.",
  telephone: telefone,
  sameAs: perfisOficiais,
  medicalSpecialty: footerContent.specialty,
  founder: { "@id": IDS.pessoa },
  employee: { "@id": IDS.pessoa },
  currenciesAccepted: "BRL",
} as const;

const website = {
  "@type": "WebSite",
  "@id": IDS.site,
  url: absoluteUrl("/"),
  name: nomeComTitulo,
  inLanguage: "pt-BR",
  publisher: { "@id": IDS.clinica },
} as const;

const montarFaq = (itens: readonly (FaqItem | TreatmentQuestion)[]) => ({
  "@type": "FAQPage",
  mainEntity: itens.map((item) => ({
    "@type": "Question",
    name: "question" in item ? item.question : "",
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
});

const montarBreadcrumb = (trilha: readonly { nome: string; caminho: string }[]) => ({
  "@type": "BreadcrumbList",
  itemListElement: trilha.map((passo, indice) => ({
    "@type": "ListItem",
    position: indice + 1,
    name: passo.nome,
    item: absoluteUrl(passo.caminho),
  })),
});

const comContexto = (grafo: readonly unknown[]) => ({
  "@context": "https://schema.org",
  "@graph": grafo,
});

/** Home: identidade do negócio, da profissional e o FAQ da seção 6. */
export const homeStructuredData = () =>
  comContexto([clinica, pessoa, website, montarFaq(faqItems)]);

/** Página de trajetória: perfil da profissional. */
export const trajectoryStructuredData = () =>
  comContexto([
    {
      "@type": "ProfilePage",
      url: absoluteUrl("/trajetoria"),
      name: `${trajetoria.eyebrow} | ${nomeCompleto}`,
      inLanguage: "pt-BR",
      mainEntity: { "@id": IDS.pessoa },
      isPartOf: { "@id": IDS.site },
    },
    pessoa,
    montarBreadcrumb([
      { nome: "Início", caminho: "/" },
      { nome: trajetoria.eyebrow, caminho: "/trajetoria" },
    ]),
  ]);

/**
 * Página de tratamento.
 *
 * `MedicalWebPage` apenas classifica a página; `about > MedicalProcedure`
 * nomeia o procedimento. Nenhum dos dois afirma eficácia, indicação ou
 * resultado — isso dependeria da aprovação clínica que ainda não existe.
 *
 * As perguntas dos subtipos entram junto: numa página guarda-chuva como
 * Preenchedores Faciais, elas são a maior parte do conteúdo real.
 */
export const treatmentStructuredData = (treatment: Treatment) => {
  const caminho = `/tratamentos/${treatment.slug}`;

  const fontes = getTreatmentSources(treatment.slug);

  const perguntas: TreatmentQuestion[] = [
    ...treatment.perguntas,
    ...(treatment.subtypes?.flatMap((subtype) => subtype.perguntas) ?? []),
  ];

  return comContexto([
    {
      "@type": "MedicalWebPage",
      url: absoluteUrl(caminho),
      name: `${treatment.title} | ${nomeCompleto}`,
      description: treatment.description,
      inLanguage: "pt-BR",
      isPartOf: { "@id": IDS.site },
      about: {
        "@type": "MedicalProcedure",
        name: treatment.title,
        /*
          `CosmeticProcedure` é o valor correto de `MedicalProcedureType` para
          procedimentos estéticos. Não usar `SurgicalProcedure`: nenhum destes
          tratamentos é cirúrgico.
        */
        procedureType: "https://schema.org/CosmeticProcedure",
      },
      author: { "@id": IDS.pessoa },
      publisher: { "@id": IDS.clinica },
      dateModified: editorialStatus.atualizadoEm,
      /*
        As referências que sustentam o texto. `citation` é o campo que o
        Google lê como sinal de embasamento em conteúdo YMYL. Elas vivem só
        aqui: não há bloco visível de procedência na página.
      */
      ...(fontes.length > 0
        ? {
            citation: fontes.map((fonte) => ({
              "@type": "CreativeWork",
              name: fonte.label,
              url: fonte.url,
              publisher: { "@type": "Organization", name: fonte.publisher },
            })),
          }
        : {}),
      /*
        `reviewedBy` e `lastReviewed` só aparecem depois da revisão clínica
        real. Emiti-los antes seria declarar a máquinas uma checagem que não
        houve — e é justamente o campo que o Google usa para pesar autoridade
        médica. Vira sozinho quando `editorialStatus` for atualizado.
      */
      ...(editorialStatus.revisadoPelaProfissional && editorialStatus.revisadoEm
        ? {
            reviewedBy: { "@id": IDS.pessoa },
            lastReviewed: editorialStatus.revisadoEm,
          }
        : {}),
    },
    ...(perguntas.length > 0 ? [montarFaq(perguntas)] : []),
    montarBreadcrumb([
      { nome: "Início", caminho: "/" },
      { nome: treatment.title, caminho },
    ]),
  ]);
};
