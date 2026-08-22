"use client";

import { useState } from "react";
import { resultCards } from "@/content/results";
import type { ResultCardContent } from "@/content/results";
import { ResultCard } from "@/components/results/ResultCard";
import { ResultsModal } from "@/components/results/ResultsModal";
import styles from "./results-section.module.css";

export function ResultsSection() {
  const [selectedResult, setSelectedResult] = useState<ResultCardContent | null>(null);

  return (
    <>
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
            <ResultCard
              key={card.id}
              {...card}
              onOpen={() => setSelectedResult(card)}
            />
          ))}
        </div>
      </section>

      {selectedResult ? (
        <ResultsModal result={selectedResult} onClose={() => setSelectedResult(null)} />
      ) : null}
    </>
  );
}
