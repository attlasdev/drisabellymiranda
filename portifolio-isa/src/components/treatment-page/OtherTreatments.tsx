import Link from "next/link";

import { ArrowUpRightIcon } from "@/components/icons/ArrowUpRightIcon";
import type { Treatment } from "@/content/treatments";

import styles from "./other-treatments.module.css";

type OtherTreatmentsProps = {
  treatments: Treatment[];
};

export function OtherTreatments({ treatments }: OtherTreatmentsProps) {
  if (treatments.length === 0) {
    return null;
  }

  return (
    <section className={styles.block}>
      <h2 className={styles.heading}>Outros tratamentos</h2>

      <ul className={styles.list}>
        {treatments.map((treatment) => (
          <li className={styles.item} key={treatment.slug}>
            <Link className={styles.link} href={`/tratamentos/${treatment.slug}`}>
              <span className={styles.label}>{treatment.title}</span>
              <ArrowUpRightIcon className={styles.arrow} size={20} aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
