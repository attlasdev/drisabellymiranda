"use client";

import { useState } from "react";

import type { FaqItem } from "@/content/faq";

import styles from "./faq-accordion.module.css";

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={styles.list}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const questionId = `faq-question-${index + 1}`;
        const answerId = `faq-answer-${index + 1}`;

        return (
          <article className={styles.item} key={item.question}>
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
              className={styles.answer}
              id={answerId}
              role="region"
              aria-labelledby={questionId}
              hidden={!isOpen}
            >
              <p>{item.answer}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
