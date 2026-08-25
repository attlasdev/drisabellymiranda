import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { ScrollToTopOnMount } from "@/components/navigation/ScrollToTopOnMount";
import { PageClosing } from "@/components/internal-page/PageClosing";
import { PageDataStrip } from "@/components/internal-page/PageDataStrip";
import { PageProse } from "@/components/internal-page/PageProse";
import { TreatmentLinks } from "@/components/internal-page/TreatmentLinks";
import { TimelineList } from "@/components/trajectory-page/TimelineList";
import { TrajectoryHeader } from "@/components/trajectory-page/TrajectoryHeader";
import { footerContent } from "@/content/footer";
import { trajetoria } from "@/content/trajetoria";
import { treatments } from "@/content/treatments";

import styles from "@/components/internal-page/internal-page.module.css";

/*
  A descrição usa apenas dados reais e verificáveis — profissão, especialidade
  e registro, os mesmos do rodapé. Não é copy definitiva; quando o texto real
  da página chegar, revisar também esta linha.
*/
export const metadata: Metadata = {
  title: `${trajetoria.eyebrow} | ${trajetoria.nome}`,
  description: `${footerContent.profession} especializada em ${footerContent.specialty}. ${footerContent.registration}.`,
};

export default function TrajectoryPage() {
  return (
    <>
      {/* O id `inicio` serve ao `Voltar ao topo` do rodapé. */}
      <main className={styles.page} id="inicio">
        <ScrollToTopOnMount routeKey="trajetoria" />

        <TrajectoryHeader
          eyebrow={trajetoria.eyebrow}
          name={trajetoria.nome}
          opening={trajetoria.abertura}
          photo={trajetoria.foto}
          photoPendingLabel={trajetoria.fotoPendenteRotulo}
        />

        <PageDataStrip ariaLabel="Dados profissionais" items={[...trajetoria.fatosRapidos]} />

        <div className={styles.chapter}>
          <div className={styles.chapterInner}>
            <PageProse heading="Minha abordagem" text={trajetoria.minhaAbordagem} />

            {/* Já nasce como links porque as rotas de procedimento existem. */}
            <TreatmentLinks heading={trajetoria.areasHeading} treatments={treatments} />

            <hr className={styles.divider} />

            <TimelineList heading={trajetoria.formacaoHeading} items={[...trajetoria.formacao]} />
            <TimelineList
              heading={trajetoria.atualizacaoHeading}
              items={[...trajetoria.atualizacao]}
            />
          </div>
        </div>

        <PageClosing invite={trajetoria.convite} />
      </main>

      <SiteFooter hrefBase="/" />
    </>
  );
}
