import Link from "next/link";

import { ArrowUpRightIcon } from "@/components/icons/ArrowUpRightIcon";
import type { Treatment } from "@/content/treatments";

import styles from "./treatment-links.module.css";

type TreatmentLinksProps = {
  heading: string;
  treatments: Treatment[];
};

/*
  Lista de procedimentos como links. Serve à página de procedimento
  (`Outros tratamentos`) e à página de trajetória (`Áreas de atuação`), por
  isso o título vem por prop.
*/
export function TreatmentLinks({ heading, treatments }: TreatmentLinksProps) {
  if (treatments.length === 0) {
    return null;
  }

  return (
    <section className={styles.block}>
      <h2 className={styles.heading}>{heading}</h2>

      <ul className={styles.list}>
        {treatments.map((treatment) => (
          <li className={styles.item} key={treatment.slug}>
            <Link className={styles.link} href={`/tratamentos/${treatment.slug}`} scroll={false}>
              <span className={styles.label}>{treatment.title}</span>
              <ArrowUpRightIcon className={styles.arrow} size={20} aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
