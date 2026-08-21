import Image from "next/image";

import { ArrowUpRightIcon } from "@/components/icons/ArrowUpRightIcon";

import styles from "./treatment-card.module.css";

type TreatmentCardProps = {
  alignment: "left" | "right";
  description: string;
  image: string;
  imageAlt: string;
  title: string;
};

export function TreatmentCard({ alignment, description, image, imageAlt, title }: TreatmentCardProps) {
  return (
    <article
      className={`${styles.card} ${alignment === "right" ? styles.right : styles.left}`}
      data-image-state="ready"
    >
      <div className={styles.media}>
        <Image className={styles.image} src={image} alt={imageAlt} fill sizes="(max-width: 1023px) 100vw, 55vw" />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <a className={styles.link} href="#contato" aria-label={`Saiba mais sobre ${title}`}>
          <span className={styles.linkLabel}>Saiba mais</span>
          <ArrowUpRightIcon className={styles.arrow} size={22} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
