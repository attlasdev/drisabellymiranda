import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { faqItems } from "@/content/faq";

import styles from "./faq-section.module.css";

export function FaqSection() {
  return (
    <section className={styles.section} id="faq" aria-labelledby="faq-title">
      <div className={styles.layout}>
        <header className={styles.introduction}>
          <p className={styles.eyebrow}>Perguntas frequentes</p>
          <h2 className={styles.title} id="faq-title">
            Dúvidas que merecem respostas claras.
          </h2>
          <p className={styles.description}>
            Cada escolha começa com informação e uma conversa cuidadosa. Reunimos aqui respostas
            iniciais para tornar o seu atendimento mais simples e tranquilo.
          </p>
        </header>

        <div className={styles.accordion}>
          <FaqAccordion items={faqItems} />
        </div>
      </div>
    </section>
  );
}
