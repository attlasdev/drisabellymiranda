import type { TreatmentDataItem } from "@/content/treatments";

import styles from "./treatment-data-strip.module.css";

type TreatmentDataStripProps = {
  items: TreatmentDataItem[];
};

export function TreatmentDataStrip({ items }: TreatmentDataStripProps) {
  return (
    <section className={styles.strip} aria-label="Informações do procedimento">
      <dl className={styles.list}>
        {items.map((item) => (
          <div className={styles.item} key={item.label}>
            <dt className={styles.label}>{item.label}</dt>
            <dd className={styles.value}>{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
