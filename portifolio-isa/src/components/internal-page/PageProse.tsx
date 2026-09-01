import type { ProseSection } from "@/content/prose";

import styles from "./page-prose.module.css";

type PageProseProps = {
  heading: string;
  text: string | ProseSection;
};

/** Bloco de prosa com título, usado pelas páginas internas. */
export function PageProse({ heading, text }: PageProseProps) {
  const content: ProseSection = typeof text === "string" ? { paragraphs: [text] } : text;

  return (
    <section className={styles.block}>
      <h2 className={styles.heading}>{heading}</h2>

      {content.paragraphs.map((paragraph) => (
        <p className={styles.text} key={paragraph}>
          {paragraph}
        </p>
      ))}

      {content.bullets?.length ? (
        <ul className={styles.list}>
          {content.bullets.map((item) => (
            <li className={styles.item} key={item}>
              {item}
            </li>
          ))}
        </ul>
      ) : null}

      {content.afterBullets?.map((paragraph) => (
        <p className={styles.text} key={paragraph}>
          {paragraph}
        </p>
      ))}
    </section>
  );
}
