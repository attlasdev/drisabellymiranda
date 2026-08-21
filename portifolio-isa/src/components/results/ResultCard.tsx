import Image from "next/image";
import type { ResultCardContent } from "@/content/results";
import styles from "./result-card.module.css";

export function ResultCard({ title, cases, testimonial, author, image }: ResultCardContent) {
  return (
    <article className={styles.card} data-result-card>
      <div className={styles.media}>
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 63.999rem) calc(100vw - 2.5rem), 472px"
            className={styles.image}
          />
        ) : null}
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>

        <div className={styles.metadata}>
          <span className={styles.caseCount}>{cases} casos</span>
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
            <p>{testimonial}</p>
            <footer>— {author}</footer>
          </div>
        </blockquote>
      </div>
    </article>
  );
}
