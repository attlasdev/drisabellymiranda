import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { JsonLd } from "@/components/seo/JsonLd";
import { ScrollToTopOnMount } from "@/components/navigation/ScrollToTopOnMount";
import { PageClosing } from "@/components/internal-page/PageClosing";
import { PageProse } from "@/components/internal-page/PageProse";
import { TreatmentLinks } from "@/components/internal-page/TreatmentLinks";
import { FacialFillersExperience } from "@/components/treatment-page/FacialFillersExperience";
import { TreatmentHeader } from "@/components/treatment-page/TreatmentHeader";
import { TreatmentQuestions } from "@/components/treatment-page/TreatmentQuestions";
import { getOtherTreatments, getTreatment, treatments } from "@/content/treatments";
import { treatmentStructuredData } from "@/lib/structured-data";

import styles from "@/components/internal-page/internal-page.module.css";

type TreatmentPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return treatments.map((treatment) => ({ slug: treatment.slug }));
}

export async function generateMetadata({ params }: TreatmentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatment(slug);

  if (!treatment) {
    return {};
  }

  return {
    title: `${treatment.title} | Isabelly Miranda`,
    description: treatment.description,
  };
}

export default async function TreatmentPage({ params }: TreatmentPageProps) {
  const { slug } = await params;
  const treatment = getTreatment(slug);

  if (!treatment) {
    notFound();
  }

  const otherTreatments = getOtherTreatments(treatment.slug);

  return (
    <>
      <JsonLd data={treatmentStructuredData(treatment)} />

      {/*
        O id `inicio` existe para o `Voltar ao topo` do rodapé resolver dentro
        desta página. Sem ele o link cairia numa âncora inexistente.
      */}
      <main className={styles.page} id="inicio">
        <ScrollToTopOnMount routeKey={treatment.slug} />

        {treatment.subtypes?.length ? (
          <FacialFillersExperience
            otherTreatments={otherTreatments}
            subtypes={treatment.subtypes}
            treatmentSlug={treatment.slug}
            treatmentTitle={treatment.title}
          />
        ) : (
          <>
            <TreatmentHeader title={treatment.title} summary={treatment.description} />

            <div className={styles.chapter}>
              <div className={styles.chapterInner}>
                <PageProse heading="O que é" text={treatment.oQueE} />
                <PageProse heading="Quando é indicado" text={treatment.quandoIndicado} />

                <hr className={styles.divider} />

                <TreatmentQuestions items={treatment.perguntas} slug={treatment.slug} />

                <hr className={styles.divider} />

                <TreatmentLinks heading="Outros tratamentos" treatments={otherTreatments} />
              </div>
            </div>
          </>
        )}

        <PageClosing invite={treatment.convite} />
      </main>

      {/* `hrefBase` absoluto: as âncoras da navegação só existem na home. */}
      <SiteFooter hrefBase="/" />
    </>
  );
}
