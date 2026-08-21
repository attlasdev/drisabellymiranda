import { SiteFooter } from "@/components/layout/SiteFooter";
import { ConsultationPlanningSection } from "@/components/sections/ConsultationPlanningSection";
import { ContactCtaSection } from "@/components/sections/ContactCtaSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { Hero } from "@/components/sections/Hero";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { StatementSection } from "@/components/sections/StatementSection";
import { TreatmentsIntroSection } from "@/components/sections/TreatmentsIntroSection";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <StatementSection />
        <TreatmentsIntroSection />
        <ConsultationPlanningSection />
        <ResultsSection />
        <FaqSection />
        <ContactCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
