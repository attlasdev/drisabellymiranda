import { WhatsappLineIcon } from "@/components/icons/WhatsappLineIcon";
import { contactCta } from "@/content/contact";

import styles from "./contact-cta-section.module.css";

export function ContactCtaSection() {
  return (
    <section className={styles.section} id="contato" aria-labelledby="contact-cta-title">
      <div className={styles.content}>
        <p className={styles.eyebrow}>{contactCta.eyebrow}</p>

        <h2 className={styles.title} id="contact-cta-title">
          {contactCta.titleStart} <em>{contactCta.titleEmphasis}</em>
        </h2>

        <p className={styles.description}>{contactCta.description}</p>

        <a
          className={styles.button}
          href={contactCta.whatsappHref}
          target="_blank"
          rel="noreferrer"
          aria-label={`${contactCta.linkLabel} ${contactCta.linkBrand} (abre em uma nova guia)`}
        >
          <WhatsappLineIcon
            className={styles.whatsappIcon}
            size={20}
            aria-hidden="true"
            focusable="false"
          />
          <span>
            {contactCta.linkLabel} <span translate="no">{contactCta.linkBrand}</span>
          </span>
        </a>
      </div>
    </section>
  );
}
