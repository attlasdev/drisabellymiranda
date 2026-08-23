import { BackLink } from "@/components/internal-page/BackLink";

import styles from "./treatment-header.module.css";

type TreatmentHeaderProps = {
  summary: string;
  title: string;
};

export function TreatmentHeader({ summary, title }: TreatmentHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* Destino absoluto: `#tratamentos` só existe na home. */}
        <BackLink href="/#tratamentos" label="Voltar para tratamentos" />

        <p className={styles.eyebrow}>Tratamentos</p>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.summary}>{summary}</p>
      </div>
    </header>
  );
}
