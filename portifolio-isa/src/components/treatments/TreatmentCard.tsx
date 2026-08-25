import Image from "next/image";
import Link from "next/link";

import { ArrowUpRightIcon } from "@/components/icons/ArrowUpRightIcon";

import styles from "./treatment-card.module.css";

type TreatmentCardProps = {
  alignment: "left" | "right";
  cardItems?: readonly string[];
  description: string;
  /** Ausente enquanto o procedimento não tiver fotografia. */
  image?: string;
  imageAlt?: string;
  slug: string;
  title: string;
};

export function TreatmentCard({
  alignment,
  cardItems,
  description,
  image,
  imageAlt,
  slug,
  title,
}: TreatmentCardProps) {
  return (
    <article
      className={`${styles.card} ${alignment === "right" ? styles.right : styles.left}`}
      data-image-state={image ? "ready" : "empty"}
      data-card-layout={cardItems?.length ? "subtypes" : "description"}
      data-treatment-card
      data-treatment-alignment={alignment}
    >
      {/*
        Sem fotografia, o card fica no fundo sólido `#535353` que já é a cor
        base de `.card`. O degradê continua aplicado, então o texto mantém o
        mesmo contraste do card com foto.
      */}
      {image ? (
        <div className={styles.media}>
          <Image
            className={styles.image}
            src={image}
            alt={imageAlt ?? ""}
            fill
            sizes="(max-width: 1023px) 100vw, 55vw"
          />
        </div>
      ) : null}

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        {cardItems?.length ? (
          <ul className={styles.subtypes} aria-label={`Procedimentos de ${title}`}>
            {cardItems.map((item) => (
              <li className={styles.subtype} key={item}>
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.description}>{description}</p>
        )}

        {/*
          Afordância visual apenas. O alvo clicável é o `.overlay` abaixo, que
          cobre o card inteiro. Manter isto como link também criaria dois
          destinos para a mesma ação no mesmo card.
        */}
        <span className={styles.link} aria-hidden="true">
          <span className={styles.linkLabel}>Saiba mais</span>
          <ArrowUpRightIcon className={styles.arrow} size={22} aria-hidden="true" />
        </span>
      </div>

      {/*
        Link único do card, esticado sobre toda a área. Fica depois do conteúdo
        para receber o clique, e usa `aria-label` para o nome acessível não
        virar o texto inteiro do card.
      */}
      <Link
        className={styles.overlay}
        href={`/tratamentos/${slug}`}
        scroll={false}
        aria-label={`Saiba mais sobre ${title}`}
      />
    </article>
  );
}
