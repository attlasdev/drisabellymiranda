import styles from "./statement-section.module.css";

const statement =
  "Harmonizar não é sobre transformar, mas sim saber o que preservar. Uma avaliação cuidadosa define o que faz sentido em cada caso.";

export function StatementSection() {
  return (
    <section className={styles.section} id="essencia" aria-labelledby="essencia-title">
      <h2 className={styles.statement} id="essencia-title" aria-label={statement}>
        <span aria-hidden="true">
          <span className={styles.line}>HARMONIZAR NÃO É SOBRE TRANSFORMAR,</span>
          <span className={styles.line}>
            MAS SIM SABER O QUE <span className={styles.highlight}>PRESERVAR.</span>
          </span>
          <span className={styles.line}>
            UMA <span className={styles.highlight}>AVALIAÇÃO CUIDADOSA</span> DEFINE O QUE
          </span>
          <span className={styles.line}>
            <span className={styles.highlight}>FAZ SENTIDO</span> EM CADA CASO.
          </span>
        </span>
      </h2>
    </section>
  );
}
