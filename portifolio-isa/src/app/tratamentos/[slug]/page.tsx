import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { PageClosing } from "@/components/internal-page/PageClosing";
import { PageDataStrip } from "@/components/internal-page/PageDataStrip";
import { PageProse } from "@/components/internal-page/PageProse";
import { TreatmentLinks } from "@/components/internal-page/TreatmentLinks";
import { TreatmentHeader } from "@/components/treatment-page/TreatmentHeader";
import { TreatmentQuestions } from "@/components/treatment-page/TreatmentQuestions";
import { getOtherTreatments, getTreatment, treatments } from "@/content/treatments";

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

  return (
    <>
      {/*
        O id `inicio` existe para o `Voltar ao topo` do rodapé resolver dentro
        desta página. Sem ele o link cairia numa âncora inexistente.
      */}
      <main className={styles.page} id="inicio">
        <TreatmentHeader title={treatment.title} summary={treatment.description} />

        <PageDataStrip ariaLabel="Informações do procedimento" items={treatment.tiraDeDados} />

        <div className={styles.chapter}>
          <div className={styles.chapterInner}>
            <PageProse heading="O que é" text={treatment.oQueE} />
            <PageProse heading="Quando é indicado" text={treatment.quandoIndicado} />

            <hr className={styles.divider} />

            <TreatmentQuestions items={treatment.perguntas} slug={treatment.slug} />

            <hr className={styles.divider} />

            <TreatmentLinks heading="Outros tratamentos" treatments={getOtherTreatments(treatment.slug)} />
          </div>
        </div>

        <PageClosing invite={treatment.convite} />
      </main>

      {/* `hrefBase` absoluto: as âncoras da navegação só existem na home. */}
      <SiteFooter hrefBase="/" />
    </>
  );
}
