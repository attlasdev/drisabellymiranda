import Image from "next/image";

import { ArrowUpRightIcon } from "@/components/icons/ArrowUpRightIcon";

import styles from "./consultation-planning-section.module.css";

export function ConsultationPlanningSection() {
  return (
    <section className={styles.section} id="sobre" aria-labelledby="consulta-title">
      <figure className={styles.profile}>
        <div className={styles.photoFrame}>
          <Image
            className={styles.photo}
            src="/images/consultation/isabely-consulta-planejamento.jpg"
            alt="Dra. Isabelly Miranda sentada em seu consultório"
            fill
            sizes="(max-width: 639px) 110vw, 840px"
          />
        </div>

        <figcaption className={styles.caption}>
          <p className={styles.name}>Dra. Isabelly Miranda</p>
          <p className={styles.credentials}>
            Cirurgiã-dentista · Harmonização Orofacial
            <span className={styles.registration}>
              <span className={styles.registrationSeparator} aria-hidden="true">
                {" · "}
              </span>
              CRO-MG 72298
            </span>
          </p>
        </figcaption>
      </figure>

      <div className={styles.content}>
        <h2 className={styles.title} id="consulta-title">
          Consulta e
          <br />
          planejamento
        </h2>

        <div className={styles.description}>
          <p>
            Na primeira consulta, eu quero entender você antes de pensar em qualquer procedimento.
            Observo o rosto como um todo, suas proporções, simetrias e características individuais,
            mas também escuto o que te incomoda e o que você espera melhorar.
          </p>
          <p>
            A partir dessa conversa, construo um planejamento pensado para o seu rosto, definindo o
            que realmente faz sentido e o que não precisa ser feito. Porque nem sempre fazer mais
            significa chegar a um resultado melhor.
          </p>
        </div>
      </div>

      <p className={styles.trajectory} aria-label="Conheça minha trajetória, em breve">
        <span>Conheça minha trajetória</span>
        <ArrowUpRightIcon className={styles.arrow} size={28} aria-hidden="true" />
      </p>
    </section>
  );
}
