import Image from "next/image";
import type { ResultCardContent } from "@/content/results";
import styles from "./result-card.module.css";

type ResultCardProps = ResultCardContent & {
  onOpen: () => void;
};

export function ResultCard({ title, cases, onOpen }: ResultCardProps) {
  const firstCase = cases[0];

  return (
    <article className={styles.card} data-result-card>
      <div className={styles.media}>
        {firstCase.image ? (
          <Image
            src={firstCase.image.src}
            alt={firstCase.image.alt}
            fill
            sizes="(max-width: 63.999rem) calc(100vw - 2.5rem), 472px"
            className={styles.image}
            unoptimized
          />
        ) : null}
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>

        <div className={styles.metadata}>
          <span className={styles.caseCount}>{cases.length} casos</span>
          <span className={styles.separator} aria-hidden="true" />
          <span className={styles.resultsLabel}>Ver resultados</span>
          <span className={styles.arrow} aria-hidden="true">
            →
          </span>
        </div>

        <blockquote className={styles.testimonial}>
          <span className={styles.quoteMark} aria-hidden="true">
            “
          </span>
          <div>
            <p>{firstCase.testimonial}</p>
            <footer>— {firstCase.author}</footer>
          </div>
        </blockquote>
      </div>

      <button
        type="button"
        className={styles.interaction}
        onPointerDown={(event) => {
          if (event.pointerType === "mouse" && event.button === 0) {
            onOpen();
          }
        }}
        onClick={onOpen}
        aria-label={`Ver os ${cases.length} casos de ${title}`}
        aria-haspopup="dialog"
        data-result-open
      />
    </article>
  );
}
