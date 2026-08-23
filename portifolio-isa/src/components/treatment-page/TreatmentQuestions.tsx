import { FaqAccordion } from "@/components/faq/FaqAccordion";
import type { TreatmentQuestion } from "@/content/treatments";

import styles from "./treatment-questions.module.css";

type TreatmentQuestionsProps = {
  items: TreatmentQuestion[];
  slug: string;
};

export function TreatmentQuestions({ items, slug }: TreatmentQuestionsProps) {
  return (
    <section className={styles.block}>
      <h2 className={styles.heading}>Perguntas que chegam antes da avaliação</h2>

      {/*
        `idPrefix` próprio: sem ele, este acordeão colidiria com o do FAQ da
        home em `aria-controls` caso os dois apareçam na mesma tela.
        `initialOpenIndex` nulo porque aqui o bloco é secundário, diferente da
        home, onde o primeiro item abre para apresentar o estado aberto.
      */}
      <FaqAccordion items={items} idPrefix={`faq-${slug}`} initialOpenIndex={null} />
    </section>
  );
}
