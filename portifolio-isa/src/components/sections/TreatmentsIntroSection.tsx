import { TreatmentCard } from "@/components/treatments/TreatmentCard";
import { treatments } from "@/content/treatments";

import styles from "./treatments-intro-section.module.css";

export function TreatmentsIntroSection() {
  return (
    <section className={styles.section} id="tratamentos" aria-labelledby="tratamentos-title">
      <svg
        className={styles.route}
        viewBox="0 0 1920 2889"
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
            d="M -24 466 C 150 468 200 760 360 980 C 490 1140 650 1264 820 1264 L 960 1264 C 1120 1264 1350 1320 1450 1470 C 1550 1620 1510 1880 1320 2000 C 1230 2055 1160 2065 1080 2065 L 900 2065 C 760 2065 640 2140 575 2260 C 500 2400 510 2660 495 2835"
          />

          <circle className={styles.routeOrigin} cx="7" cy="469" r="4.5" />

          <g className={styles.routeEnd}>
            <circle cx="495" cy="2835" r="8" />
            <circle className={styles.routeEndDot} cx="495" cy="2835" r="2.5" />
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
            key={treatment.title}
            alignment={index % 2 === 0 ? "right" : "left"}
            title={treatment.title}
            description={treatment.description}
            image={treatment.image}
            imageAlt={treatment.imageAlt}
          />
        ))}
      </div>
    </section>
  );
}
