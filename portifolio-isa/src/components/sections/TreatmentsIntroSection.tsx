import { TreatmentCard } from "@/components/treatments/TreatmentCard";
import { treatments } from "@/content/treatments";

import styles from "./treatments-intro-section.module.css";

export function TreatmentsIntroSection() {
  return (
    <section className={styles.section} id="tratamentos" aria-labelledby="tratamentos-title">
      <h2 className={styles.title} id="tratamentos-title">
        Tratamentos
      </h2>

      <p className={styles.subtitle}>
        Abordagens <em>pensadas</em> a partir das necessidades e características de cada rosto.
      </p>

      <div className={styles.cards} aria-label="Tratamentos disponíveis">
        {treatments.map((treatment, index) => (
          <TreatmentCard
            key={treatment.title}
            alignment={index % 2 === 0 ? "right" : "left"}
            title={treatment.title}
            description={treatment.description}
            image={treatment.image}
            imageAlt={treatment.imageAlt}
          />
        ))}
      </div>
    </section>
  );
}
