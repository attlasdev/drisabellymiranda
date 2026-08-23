"use client";

import { useState } from "react";

import type { FaqItem } from "@/content/faq";

import styles from "./faq-accordion.module.css";

type FaqAccordionProps = {
  items: FaqItem[];
  /**
   * Prefixo dos `id` gerados. Precisa ser único quando mais de um acordeão
   * coexiste na mesma tela, senão `aria-controls` aponta para o elemento errado.
   */
  idPrefix?: string;
  /** Índice aberto na primeira renderização. `null` abre a lista toda fechada. */
  initialOpenIndex?: number | null;
};

export function FaqAccordion({
  items,
  idPrefix = "faq",
  initialOpenIndex = 0,
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(initialOpenIndex);

  return (
    <div className={styles.list}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const questionId = `${idPrefix}-question-${index + 1}`;
        const answerId = `${idPrefix}-answer-${index + 1}`;

        return (
          <article className={styles.item} key={item.question} data-faq-item>
            <h3 className={styles.heading}>
              <button
                className={styles.trigger}
                id={questionId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className={styles.question}>{item.question}</span>
                <span
                  className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`}
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" focusable="false">
                    <path d="m9 5 7 7-7 7" />
                  </svg>
                </span>
              </button>
            </h3>

            <div
              className={`${styles.answer} ${isOpen ? styles.answerOpen : ""}`}
              id={answerId}
              role="region"
              aria-labelledby={questionId}
              aria-hidden={!isOpen}
            >
              <div className={styles.answerInner}>
                <p>{item.answer}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
