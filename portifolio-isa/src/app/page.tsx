import { SiteFooter } from "@/components/layout/SiteFooter";
import { JsonLd } from "@/components/seo/JsonLd";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { ConsultationPlanningSection } from "@/components/sections/ConsultationPlanningSection";
import { ContactCtaSection } from "@/components/sections/ContactCtaSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { Hero } from "@/components/sections/Hero";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { StatementSection } from "@/components/sections/StatementSection";
import { TreatmentsIntroSection } from "@/components/sections/TreatmentsIntroSection";
import { homeStructuredData } from "@/lib/structured-data";

export default function Home() {
  return (
    <SmoothScroll>
      <JsonLd data={homeStructuredData()} />
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
    </SmoothScroll>
  );
}
