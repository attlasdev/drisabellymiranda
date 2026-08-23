import Link from "next/link";

import { ArrowUpIcon } from "@/components/icons/ArrowUpIcon";

import styles from "./treatment-header.module.css";

type TreatmentHeaderProps = {
  summary: string;
  title: string;
};

export function TreatmentHeader({ summary, title }: TreatmentHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/*
          Destino absoluto: esta página não tem a âncora `#tratamentos`, que
          só existe na home.
        */}
        <Link className={styles.back} href="/#tratamentos">
          <ArrowUpIcon className={styles.backIcon} size={16} aria-hidden="true" />
          <span>Voltar para tratamentos</span>
        </Link>

        <p className={styles.eyebrow}>Tratamentos</p>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.summary}>{summary}</p>
      </div>
    </header>
  );
}
