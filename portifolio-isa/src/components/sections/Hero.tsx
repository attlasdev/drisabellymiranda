import Image from "next/image";

import { primaryNavigation } from "@/content/navigation";

import styles from "./hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} id="inicio" aria-labelledby="hero-title">
      <Image
        className={styles.portrait}
        src="/images/hero/isabely-hero-original.jpg"
        alt="Isabely Miranda sorrindo"
        width={4024}
        height={6048}
        sizes="(max-width: 767px) 105vw, (max-width: 1023px) 82vw, 60vw"
        priority
      />

      <header className={styles.header}>
        <a className={styles.monogram} href="#inicio" aria-label="Isabely Miranda — início">
          <span className={styles.monogramViewport} aria-hidden="true">
            <Image
              className={styles.monogramAsset}
              src="/images/brand/isabely-monogram.svg"
              alt=""
              width={1076}
              height={824}
              sizes="54px"
              priority
            />
          </span>
        </a>

        <nav className={styles.navigation} aria-label="Navegação principal">
          {primaryNavigation.map((item) => (
            <a key={item.href} className={styles.navigationLink} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <button className={styles.mobileMenu} type="button" aria-label="Abrir menu">
          <Image
            className={styles.mobileMenuIcon}
            src="/images/brand/mobile-menu.svg"
            alt=""
            width={28}
            height={14.4}
            sizes="28px"
            aria-hidden="true"
          />
        </button>

      </header>

      <div className={styles.content}>
        <h1
          className={styles.title}
          id="hero-title"
          aria-label="Harmonização orofacial com precisão e respeito à sua identidade."
        >
          <span className={styles.mobileTitle} aria-hidden="true">
            <span>Harmonização</span>
            <span>orofacial</span>
            <span>
              com <em>precisão</em> e
            </span>
            <span>respeito à sua</span>
            <span>identidade.</span>
          </span>

          <span className={styles.desktopTitle} aria-hidden="true">
            <span>Harmonização orofacial</span>
            <span>
              com <em>precisão</em> e respeito
            </span>
            <span>à sua identidade.</span>
          </span>
        </h1>

        <p className={styles.description}>
          Cada plano começa pela escuta, considerando e respeitando a
          <br className={styles.desktopBreak} /> anatomia, expressão, momento
          <br className={styles.mobileDescriptionBreak} /> e suas expectativas reais.
        </p>

        <a className={styles.cta} href="#contato">
          AGENDAR AVALIAÇÃO
        </a>
      </div>
    </section>
  );
}
