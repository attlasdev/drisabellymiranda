import type { TimelineItem } from "@/content/trajetoria";

import styles from "./timeline-list.module.css";

type TimelineListProps = {
  heading: string;
  items: TimelineItem[];
};

/*
  Lista cronológica usada tanto por `Formação` quanto por
  `Trajetória e atualização`. A diferença entre as duas é só a presença do
  campo `meta`, que carrega o ano.

  Decisão registrada: certificados entram como texto estruturado, nunca como
  imagem escaneada.
*/
export function TimelineList({ heading, items }: TimelineListProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className={styles.block}>
      <h2 className={styles.heading}>{heading}</h2>

      <ul className={styles.list}>
        {items.map((item) => (
          <li className={styles.item} key={`${item.primary}-${item.secondary}`}>
            <div className={styles.body}>
              <p className={styles.primary}>{item.primary}</p>
              <p className={styles.secondary}>{item.secondary}</p>
            </div>

            {item.meta ? <span className={styles.meta}>{item.meta}</span> : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
