import Image from "next/image";

import { ArrowUpIcon } from "@/components/icons/ArrowUpIcon";
import { ArrowUpRightIcon } from "@/components/icons/ArrowUpRightIcon";
import { footerContent } from "@/content/footer";
import { primaryNavigation } from "@/content/navigation";

import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer} id="rodape" aria-label="Rodapé">
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brandColumn} data-footer-group>
            <a
              className={styles.brand}
              href="#inicio"
              aria-label="Isabely Miranda — voltar ao topo"
            >
              <Image
                className={styles.monogram}
                src="/images/brand/isabely-monogram.svg"
                alt=""
                width={1076}
                height={824}
                sizes="64px"
              />
            </a>

            <div className={styles.credentials}>
              <p>{footerContent.profession}</p>
              <p>{footerContent.specialty}</p>
              <p>{footerContent.registration}</p>
            </div>
          </div>

          <nav
            className={styles.footerNavigation}
            aria-label="Navegação do rodapé"
            data-footer-group
          >
            <p className={styles.label}>{footerContent.navigationLabel}</p>
            <ul className={styles.navigationList}>
              {primaryNavigation.map((item) => (
                <li key={item.href}>
                  <a className={styles.navigationLink} href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div
            className={styles.appointments}
            aria-label="Informações sobre atendimentos"
            data-footer-group
          >
            <p className={styles.label}>{footerContent.appointmentsLabel}</p>
            <p className={styles.appointmentsText}>{footerContent.appointmentsText}</p>

            {footerContent.locationHref ? (
              <a
                className={styles.locationButton}
                href={footerContent.locationHref}
                target="_blank"
                rel="noreferrer"
              >
                <span>{footerContent.locationLabel}</span>
                <ArrowUpRightIcon
                  className={styles.locationArrow}
                  size={20}
                  aria-hidden="true"
                />
              </a>
            ) : (
              <button
                className={styles.locationButton}
                type="button"
                disabled
                aria-label={`${footerContent.locationLabel} — link ainda não disponível`}
              >
                <span>{footerContent.locationLabel}</span>
                <ArrowUpRightIcon
                  className={styles.locationArrow}
                  size={20}
                  aria-hidden="true"
                />
              </button>
            )}
          </div>

          <div className={styles.social} aria-label="Rede social" data-footer-group>
            <p className={styles.label}>{footerContent.socialLabel}</p>
            <a
              className={styles.instagramLink}
              href={footerContent.instagramHref}
              target="_blank"
              rel="noreferrer"
              aria-label={`${footerContent.instagramLabel} ${footerContent.instagramHandle} (abre em uma nova guia)`}
            >
              <span className={styles.instagramName}>
                <span translate="no">{footerContent.instagramLabel}</span>
                <ArrowUpRightIcon
                  className={styles.instagramArrow}
                  size={20}
                  aria-hidden="true"
                />
              </span>
              <span className={styles.instagramHandle} translate="no">
                {footerContent.instagramHandle}
              </span>
            </a>
          </div>
        </div>

        <div className={styles.legal}>
          <span>{footerContent.copyright}</span>
          <a className={styles.backToTop} href="#inicio">
            <span>Voltar ao topo</span>
            <span className={styles.backToTopIcon} aria-hidden="true">
              <ArrowUpIcon className={styles.backToTopArrow} size={18} />
            </span>
          </a>
        </div>

        <p className={styles.signature} translate="no" aria-label="Isabely Miranda">
          <span className={styles.firstName}>{footerContent.firstName}</span>
          <span className={styles.lastName}>{footerContent.lastName}</span>
        </p>
      </div>
    </footer>
  );
}
