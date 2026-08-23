import { WhatsappLineIcon } from "@/components/icons/WhatsappLineIcon";
import { contactCta } from "@/content/contact";

import styles from "./page-closing.module.css";

type PageClosingProps = {
  invite: string;
};

/*
  Encerramento das páginas internas.

  Deliberadamente menor que a Seção 7 da home e com composição diferente:
  faixa horizontal com a frase à esquerda e o botão à direita, contra a
  composição centralizada de dobra inteira da home. Sem fotografia de fundo,
  sem `min-height` de dobra, sem eyebrow, sem título editorial e sem parágrafo
  de apoio.

  Reaproveita o DADO de `contact.ts`, nunca o componente `ContactCtaSection`
  nem o CSS Module dele.
*/
export function PageClosing({ invite }: PageClosingProps) {
  return (
    <section className={styles.closing}>
      <div className={styles.inner}>
        <p className={styles.invite}>{invite}</p>

        <a
          className={styles.button}
          href={contactCta.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${contactCta.linkLabel} ${contactCta.linkBrand} (abre em uma nova guia)`}
        >
          <WhatsappLineIcon
            className={styles.icon}
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
