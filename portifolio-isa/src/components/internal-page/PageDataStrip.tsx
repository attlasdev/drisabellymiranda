import styles from "./page-data-strip.module.css";

export type PageDataItem = {
  label: string;
  value: string;
};

type PageDataStripProps = {
  ariaLabel: string;
  items: PageDataItem[];
};

/*
  Faixa escura de dados das páginas internas.

  É uma tira de altura contida, não uma seção de tela cheia: a altura vem do
  conteúdo mais o padding, sem `min-height` de dobra. Empilha no mobile.
*/
export function PageDataStrip({ ariaLabel, items }: PageDataStripProps) {
  return (
    <section className={styles.strip} aria-label={ariaLabel}>
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
