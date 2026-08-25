"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import type { ResultCardContent } from "@/content/results";

import styles from "./results-modal.module.css";

type ResultsModalProps = {
  result: ResultCardContent;
  onClose: () => void;
};

type Direction = "previous" | "next";

function NavigationIcon({ direction }: { direction: Direction }) {
  const path = direction === "previous" ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6";

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d={path}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function ResultsModal({ result, onClose }: ResultsModalProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const activeCase = result.cases[activeIndex];
  const hasImage = Boolean(activeCase.image);
  const caseNumber = activeIndex + 1;

  useEffect(() => {
    const page = document.getElementById("smooth-wrapper");
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousBodyOverflow = document.body.style.overflow;
    previousFocusRef.current = document.activeElement as HTMLElement | null;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    page?.setAttribute("inert", "");
    page?.setAttribute("aria-hidden", "true");
    closeButtonRef.current?.focus();

    return () => {
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousBodyOverflow;
      page?.removeAttribute("inert");
      page?.removeAttribute("aria-hidden");
      previousFocusRef.current?.focus();
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Tab") {
        const focusableElements = Array.from(
          modalRef.current?.querySelectorAll<HTMLElement>(
            'button:not(:disabled), [href], [tabindex]:not([tabindex="-1"])',
          ) ?? [],
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements.at(-1);

        if (!firstElement || !lastElement) {
          return;
        }

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }

      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((current) => Math.max(0, current - 1));
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((current) => Math.min(result.cases.length - 1, current + 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, result.cases.length]);

  return createPortal(
    <div
      className={styles.overlay}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
      data-results-modal
    >
      <section
        className={styles.modal}
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="results-modal-title"
        aria-describedby="results-modal-description"
      >
        <header className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Resultados reais</p>
            <h2 className={styles.title} id="results-modal-title">
              {result.title}
            </h2>
          </div>

          <div className={styles.headerActions}>
            <span className={styles.counter} aria-live="polite">
              Caso {String(caseNumber).padStart(2, "0")} de {String(result.cases.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              className={styles.closeButton}
              onClick={onClose}
              aria-label="Fechar resultados"
              ref={closeButtonRef}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
        </header>

        <div className={styles.viewer}>
          <div className={styles.media} key={activeCase.id} data-case-index={activeIndex}>
            {activeCase.image ? (
              <>
                <Image
                  src={activeCase.image.src}
                  alt={activeCase.image.alt}
                  fill
                  sizes="(max-width: 80rem) 78vw, 62rem"
                  className={styles.image}
                  priority
                  unoptimized
                />
                <span className={`${styles.imageLabel} ${styles.beforeLabel}`}>Antes</span>
                <span className={`${styles.imageLabel} ${styles.afterLabel}`}>Depois</span>
              </>
            ) : (
              <div className={styles.placeholder}>
                <span className={styles.placeholderNumber}>{String(caseNumber).padStart(2, "0")}</span>
                <p>Imagem do caso ainda não adicionada</p>
              </div>
            )}
          </div>

          <div className={styles.navigationBar}>
            <span className={styles.viewerCounter} aria-live="polite">
              Caso {String(caseNumber).padStart(2, "0")} de {String(result.cases.length).padStart(2, "0")}
            </span>

            <button
              type="button"
              className={`${styles.navigation} ${styles.previous}`}
              onClick={() => setActiveIndex((current) => Math.max(0, current - 1))}
              disabled={activeIndex === 0}
              aria-label="Ver caso anterior"
            >
              <NavigationIcon direction="previous" />
            </button>

            <button
              type="button"
              className={`${styles.navigation} ${styles.next}`}
              onClick={() => setActiveIndex((current) => Math.min(result.cases.length - 1, current + 1))}
              disabled={activeIndex === result.cases.length - 1}
              aria-label="Ver próximo caso"
            >
              <NavigationIcon direction="next" />
            </button>
          </div>
        </div>

        <footer className={styles.footer} id="results-modal-description">
          <div className={styles.caseIdentity}>
            <span>Resultado</span>
            <strong>Caso {String(caseNumber).padStart(2, "0")}</strong>
          </div>

          {hasImage && activeCase.testimonial ? (
            <blockquote className={styles.testimonial}>
              <p>“{activeCase.testimonial}”</p>
              {activeCase.author ? <footer>— {activeCase.author}</footer> : null}
            </blockquote>
          ) : activeCase.description ? (
            <p className={styles.pendingCopy}>{activeCase.description}</p>
          ) : (
            <p className={styles.pendingCopy}>
              Espaço preparado para receber as imagens e informações deste caso.
            </p>
          )}
        </footer>
      </section>
    </div>,
    document.body,
  );
}
