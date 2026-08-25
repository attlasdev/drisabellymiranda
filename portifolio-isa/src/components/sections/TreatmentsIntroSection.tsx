import { TreatmentCard } from "@/components/treatments/TreatmentCard";
import { treatments } from "@/content/treatments";

import styles from "./treatments-intro-section.module.css";

export function TreatmentsIntroSection() {
  return (
    <section className={styles.section} id="tratamentos" aria-labelledby="tratamentos-title">
      {/*
        O traçado abaixo é apenas o estado inicial, calculado para 1920 × 1080
        e para os seis cards atuais. No cliente ele é redesenhado a partir da
        posição medida dos cards por `buildTreatmentRoute`, e recalculado a
        cada refresh do ScrollTrigger.

        Não vale a pena ajustar estes números à mão: a altura da seção mistura
        `svh` (no `padding-top`) com `vw` (na altura dos cards), então um
        `path` fixo só coincide com os cards em uma resolução. Se a quantidade
        de cards mudar, isto aqui continua servindo como ponto de partida e o
        gerador cuida do resto.
      */}
      <svg
        className={styles.route}
        viewBox="0 0 1920 5217"
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
        data-treatment-route
      >
        <defs>
          <clipPath id="treatment-route-reveal" clipPathUnits="userSpaceOnUse">
            <rect
              x="-50"
              y="450"
              width="2020"
              height="0"
              data-treatment-route-reveal
            />
          </clipPath>
        </defs>

        <g clipPath="url(#treatment-route-reveal)">
          <path
            className={styles.routeLine}
            d="M -24 466 C 150 468 200 760 360 980 C 490 1150 650 1289 820 1289 L 960 1289 C 1120 1289 1350 1344 1450 1489 C 1550 1634 1510 1884 1320 2002 C 1230 2055 1160 2065 1080 2065 L 900 2065 C 800 2065 570 2120 470 2265 C 370 2410 410 2660 600 2778 C 690 2831 760 2841 840 2841 L 960 2841 C 1120 2841 1350 2896 1450 3041 C 1550 3186 1510 3436 1320 3554 C 1230 3607 1160 3617 1080 3617 L 900 3617 C 800 3617 570 3672 470 3817 C 370 3962 410 4212 600 4330 C 690 4383 760 4393 840 4393 L 960 4393 C 1120 4393 1350 4448 1450 4593 C 1550 4738 1535 4990 1470 5163"
          />

          <circle
            className={styles.routeOrigin}
            cx="7"
            cy="469"
            r="4.5"
            data-treatment-route-origin
          />

          <g className={styles.routeEnd}>
            <circle cx="1470" cy="5163" r="8" data-treatment-route-end />
            <circle
              className={styles.routeEndDot}
              cx="1470"
              cy="5163"
              r="2.5"
              data-treatment-route-end
            />
          </g>
        </g>
      </svg>

      <h2 className={styles.title} id="tratamentos-title" data-treatment-title>
        Tratamentos
      </h2>

      <p className={styles.subtitle} data-treatment-subtitle>
        Abordagens <em>pensadas</em> a partir das necessidades e características de cada rosto.
      </p>

      <div className={styles.cards} aria-label="Tratamentos disponíveis">
        {treatments.map((treatment, index) => (
          <TreatmentCard
            key={treatment.slug}
            alignment={index % 2 === 0 ? "right" : "left"}
            slug={treatment.slug}
            title={treatment.title}
            description={treatment.description}
            cardItems={treatment.subtypes?.map((subtype) => subtype.cardLabel)}
            image={treatment.image}
            imageAlt={treatment.imageAlt}
          />
        ))}
      </div>
    </section>
  );
}
