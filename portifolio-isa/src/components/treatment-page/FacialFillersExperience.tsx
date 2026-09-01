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

/*
  TODOS os subtipos são renderizados; os inativos ficam com o atributo
  `hidden`. Antes existia um painel só, remontado a cada troca.

  POR QUE MUDOU

  O JSON-LD da página declara as perguntas dos sete subtipos, mas o HTML só
  continha as do subtipo aberto. Marcação de FAQ precisa descrever conteúdo
  que está na página; declarar 35 perguntas e entregar 5 é promessa sem
  lastro, e o buscador tende a ignorar a marcação inteira. Com todos os
  painéis no HTML, o que é declarado existe e o visitante alcança clicando.

  De quebra, isto corrige o padrão ARIA: cada aba passa a apontar para o seu
  próprio painel, em vez de todas dividirem um único `id`.

  O QUE FOI PRESERVADO

  A spec do seletor exige que o estado interno, como o FAQ aberto, não vaze
  de um procedimento para outro. Sem a remontagem do painel, isso viria de
  graça só até alguém voltar a um procedimento já visitado e reencontrar a
  pergunta aberta. Por isso `faqReset` incrementa a cada seleção e entra como
  `key` dos blocos de perguntas: eles remontam e voltam fechados, que é o
  comportamento aprovado.

  `Outros tratamentos` saiu de dentro do painel. Repetido em sete painéis, o
  mesmo conjunto de links apareceria sete vezes no HTML.
*/
export function FacialFillersExperience({
  otherTreatments,
  subtypes,
  treatmentSlug,
  treatmentTitle,
}: FacialFillersExperienceProps) {
  const [activeSlug, setActiveSlug] = useState(subtypes[0]?.slug ?? "");
  const [faqReset, setFaqReset] = useState(0);
  const detailRef = useRef<HTMLDivElement>(null);
  const previousSlugRef = useRef(activeSlug);
  const selectorRef = useRef<HTMLDivElement>(null);
  const transitionRef = useRef<gsap.core.Tween | null>(null);
  const activeSubtype = subtypes.find((subtype) => subtype.slug === activeSlug) ?? subtypes[0];

  useLayoutEffect(() => {
    if (previousSlugRef.current === activeSlug) {
      return;
    }

    previousSlugRef.current = activeSlug;
    const detail = detailRef.current;

    if (!detail || prefersReducedMotion()) {
      return;
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        detail,
        { autoAlpha: 0 },
        {
          autoAlpha: 1,
          duration: 0.36,
          ease: "power2.out",
          clearProps: "opacity,visibility",
        },
      );
    }, detail);

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

    const detail = detailRef.current;
    transitionRef.current?.kill();

    const aplicar = () => {
      scrollPageToTop();
      setActiveSlug(slug);
      setFaqReset((valor) => valor + 1);
    };

    if (!detail || prefersReducedMotion()) {
      aplicar();
      return;
    }

    transitionRef.current = gsap.to(detail, {
      autoAlpha: 0,
      duration: 0.18,
      ease: "power1.out",
      overwrite: true,
      onComplete: () => {
        aplicar();
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
                  aria-controls={`filler-panel-${subtype.slug}`}
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

      <div className={styles.detail} ref={detailRef}>
        {/*
          Um cabeçalho por subtipo, fora do `.chapter` como no layout aprovado.
          Só o do procedimento ativo fica visível.
        */}
        {subtypes.map((subtype) => (
          <header
            className={styles.detailHeader}
            hidden={subtype.slug !== activeSubtype.slug}
            key={subtype.slug}
          >
            <div className={styles.detailHeaderInner}>
              <div className={styles.detailEyebrowRow}>
                <span className={styles.detailEyebrowLine} aria-hidden="true" />
                <p className={styles.detailEyebrow}>Procedimento selecionado</p>
              </div>
              <h2 className={styles.detailTitle}>{subtype.title}</h2>
            </div>
          </header>
        ))}

        <div className={`${internalStyles.chapter} ${styles.detailChapter}`}>
          <div className={internalStyles.chapterInner}>
            {subtypes.map((subtype) => (
              <div
                aria-labelledby={`filler-tab-${subtype.slug}`}
                className={styles.panel}
                hidden={subtype.slug !== activeSubtype.slug}
                id={`filler-panel-${subtype.slug}`}
                key={subtype.slug}
                role="tabpanel"
                tabIndex={subtype.slug === activeSubtype.slug ? 0 : -1}
              >
                <PageProse heading="O que é" text={subtype.oQueE} />
                <PageProse heading="Quando é indicado" text={subtype.quandoIndicado} />

                {/*
                  O bloco de perguntas some inteiro quando o subtipo não tem
                  conteúdo, e a divisória vai junto: sem isso o painel mostraria
                  dois traços colados ao trocar para um subtipo sem perguntas.
                */}
                {subtype.perguntas?.length ? (
                  <>
                    <hr className={internalStyles.divider} />

                    <TreatmentQuestions
                      items={subtype.perguntas}
                      key={`${subtype.slug}-${faqReset}`}
                      slug={`${treatmentSlug}-${subtype.slug}`}
                    />
                  </>
                ) : null}
              </div>
            ))}

            <hr className={internalStyles.divider} />

            <TreatmentLinks heading="Outros tratamentos" treatments={otherTreatments} />
          </div>
        </div>
      </div>
    </section>
  );
}
