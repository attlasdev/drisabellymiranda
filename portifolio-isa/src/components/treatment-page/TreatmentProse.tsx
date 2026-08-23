import styles from "./treatment-prose.module.css";

type TreatmentProseProps = {
  heading: string;
  text: string;
};

export function TreatmentProse({ heading, text }: TreatmentProseProps) {
  return (
    <section className={styles.block}>
      <h2 className={styles.heading}>{heading}</h2>
      <p className={styles.text}>{text}</p>
    </section>
  );
}
