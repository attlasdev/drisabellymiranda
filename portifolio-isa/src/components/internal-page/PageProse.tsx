import styles from "./page-prose.module.css";

type PageProseProps = {
  heading: string;
  text: string;
};

/** Bloco de prosa com título, usado pelas páginas internas. */
export function PageProse({ heading, text }: PageProseProps) {
  return (
    <section className={styles.block}>
      <h2 className={styles.heading}>{heading}</h2>
      <p className={styles.text}>{text}</p>
    </section>
  );
}
