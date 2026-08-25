"use client";

import { useEffect, useLayoutEffect, useRef, useState, type KeyboardEvent } from "react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";

import { BackLink } from "@/components/internal-page/BackLink";
import { PageProse } from "@/components/internal-page/PageProse";
import { TreatmentLinks } from "@/components/internal-page/TreatmentLinks";
import { TreatmentQuestions } from "@/components/treatment-page/TreatmentQuestions";
import type { Treatment, TreatmentSubtype } from "@/content/treatments";

import internalStyles from "@/components/internal-page/internal-page.module.css";
import styles from "./facial-fillers-experience.module.css";

type FacialFillersExperienceProps = {
  otherTreatments: Treatment[];
  subtypes: TreatmentSubtype[];
  treatmentSlug: string;
  treatmentTitle: string;
};

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function scrollPageToTop() {
  const smoother = ScrollSmoother.get();

  if (smoother) {
    smoother.scrollTo(0, false);
    return;
  }

  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

export function FacialFillersExperience({
  otherTreatments,
  subtypes,
  treatmentSlug,
  treatmentTitle,
}: FacialFillersExperienceProps) {
  const [activeSlug, setActiveSlug] = useState(subtypes[0]?.slug ?? "");
  const panelRef = useRef<HTMLDivElement>(null);
  const previousSlugRef = useRef(activeSlug);
  const selectorRef = useRef<HTMLDivElement>(null);
  const transitionRef = useRef<gsap.core.Tween | null>(null);
  const activeSubtype = subtypes.find((subtype) => subtype.slug === activeSlug) ?? subtypes[0];

  useLayoutEffect(() => {
    if (previousSlugRef.current === activeSlug) {
      return;
    }

    previousSlugRef.current = activeSlug;
    const panel = panelRef.current;

    if (!panel || prefersReducedMotion()) {
      return;
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        panel,
        { autoAlpha: 0 },
        {
          autoAlpha: 1,
          duration: 0.36,
          ease: "power2.out",
          clearProps: "opacity,visibility",
        },
      );
    }, panel);

    return () => context.revert();
  }, [activeSlug]);

  useEffect(() => {
    return () => {
      transitionRef.current?.kill();
    };
  }, []);

  if (!activeSubtype) {
    return null;
  }

  function selectSubtype(slug: string) {
    if (slug === activeSubtype.slug) {
      return;
    }

    const panel = panelRef.current;
    transitionRef.current?.kill();

    if (!panel || prefersReducedMotion()) {
      scrollPageToTop();
      setActiveSlug(slug);
      return;
    }

    transitionRef.current = gsap.to(panel, {
      autoAlpha: 0,
      duration: 0.18,
      ease: "power1.out",
      overwrite: true,
      onComplete: () => {
        scrollPageToTop();
        setActiveSlug(slug);
        transitionRef.current = null;
      },
    });
  }

  function handleSelectorKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex: number | null = null;

    if (event.key === "ArrowRight") nextIndex = (index + 1) % subtypes.length;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + subtypes.length) % subtypes.length;
    if (event.key === "ArrowDown") nextIndex = (index + 2) % subtypes.length;
    if (event.key === "ArrowUp") nextIndex = (index - 2 + subtypes.length) % subtypes.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = subtypes.length - 1;

    if (nextIndex === null) {
      return;
    }

    event.preventDefault();
    selectSubtype(subtypes[nextIndex].slug);

    const buttons = selectorRef.current?.querySelectorAll<HTMLButtonElement>("[role='tab']");
    buttons?.[nextIndex]?.focus();
  }

  return (
    <section className={styles.experience} aria-label="Procedimentos de preenchimento facial">
      <h1 className={styles.visuallyHidden}>{treatmentTitle}</h1>

      <aside className={styles.selectorColumn}>
        <div className={styles.selectorSticky}>
          <div className={styles.backLink}>
            <BackLink href="/#tratamentos" label="Voltar para tratamentos" />
          </div>

          <h2 className={styles.selectorTitle}>Escolha o tratamento</h2>

          <div
            className={styles.selectorGrid}
            ref={selectorRef}
            role="tablist"
            aria-label="Escolha um procedimento"
          >
            {subtypes.map((subtype, index) => {
              const isActive = subtype.slug === activeSubtype.slug;

              return (
                <button
                  className={`${styles.selectorOption} ${isActive ? styles.selectorOptionActive : ""}`}
                  id={`filler-tab-${subtype.slug}`}
                  key={subtype.slug}
                  type="button"
                  role="tab"
                  aria-controls="filler-procedure-panel"
                  aria-label={subtype.title}
                  aria-selected={isActive}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => selectSubtype(subtype.slug)}
                  onKeyDown={(event) => handleSelectorKeyDown(event, index)}
                >
                  <span className={styles.selectorDot} aria-hidden="true" />
                  <span className={styles.selectorLabel}>{subtype.selectorLabel}</span>
                </button>
              );
            })}
          </div>
        </div>
      </aside>

      <div className={styles.detail}>
        <div
          className={styles.panel}
          id="filler-procedure-panel"
          key={activeSubtype.slug}
          ref={panelRef}
          role="tabpanel"
          aria-labelledby={`filler-tab-${activeSubtype.slug}`}
          tabIndex={0}
        >
          <header className={styles.detailHeader}>
            <div className={styles.detailHeaderInner}>
              <div className={styles.detailEyebrowRow}>
                <span className={styles.detailEyebrowLine} aria-hidden="true" />
                <p className={styles.detailEyebrow}>Procedimento selecionado</p>
              </div>
              <h2 className={styles.detailTitle}>{activeSubtype.title}</h2>
            </div>
          </header>

          <div className={`${internalStyles.chapter} ${styles.detailChapter}`}>
            <div className={internalStyles.chapterInner}>
              <PageProse heading="O que é" text={activeSubtype.oQueE} />
              <PageProse heading="Quando é indicado" text={activeSubtype.quandoIndicado} />

              <hr className={internalStyles.divider} />

              <TreatmentQuestions
                items={activeSubtype.perguntas}
                slug={`${treatmentSlug}-${activeSubtype.slug}`}
              />

              <hr className={internalStyles.divider} />

              <TreatmentLinks heading="Outros tratamentos" treatments={otherTreatments} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
