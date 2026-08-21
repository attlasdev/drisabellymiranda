import { resultCards } from "@/content/results";
import { ResultCard } from "@/components/results/ResultCard";
import styles from "./results-section.module.css";

export function ResultsSection() {
  return (
    <section className={styles.section} id="resultados" aria-labelledby="resultados-title">
      <p className={styles.eyebrow} data-results-eyebrow>
        Resultados reais
      </p>
      <h2 className={styles.title} id="resultados-title" data-results-title>
        Resultados que refletem
        <br className={styles.desktopTitleBreak} />{" "}
        técnica, naturalidade e cuidado.
      </h2>

      <div className={styles.cards}>
        {resultCards.map((card) => (
          <ResultCard key={card.title} {...card} />
        ))}
      </div>
    </section>
  );
}
