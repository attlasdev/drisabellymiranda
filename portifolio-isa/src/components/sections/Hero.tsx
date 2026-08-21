"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

import { primaryNavigation } from "@/content/navigation";

import styles from "./hero.module.css";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const monogramRef = useRef<HTMLSpanElement>(null);
  const navigationRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useLayoutEffect(() => {
    const media = gsap.matchMedia();

    media.add(
      "(min-width: 64rem) and (prefers-reduced-motion: no-preference)",
      () => {
        const context = gsap.context(() => {
          const navigationLinks = navigationRef.current?.querySelectorAll("a") ?? [];
          const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

          timeline
            .fromTo(
              monogramRef.current,
              { autoAlpha: 0, y: 18 },
              { autoAlpha: 1, y: 0, duration: 0.6 },
              0,
            )
            .fromTo(
              navigationLinks,
              { autoAlpha: 0, y: 14 },
              { autoAlpha: 1, y: 0, duration: 0.55, stagger: 0.06 },
              0.18,
            )
            .fromTo(
              titleRef.current,
              { autoAlpha: 0, y: 30 },
              { autoAlpha: 1, y: 0, duration: 0.9 },
              0.76,
            )
            .fromTo(
              descriptionRef.current,
              { autoAlpha: 0, y: 20 },
              { autoAlpha: 1, y: 0, duration: 0.65 },
              1.18,
            )
            .fromTo(
              ctaRef.current,
              { autoAlpha: 0, y: 16 },
              { autoAlpha: 1, y: 0, duration: 0.6 },
              1.48,
            );
        }, heroRef);

        return () => context.revert();
      },
    );

    return () => media.revert();
  }, []);

  return (
    <section
      className={styles.hero}
      id="inicio"
      aria-labelledby="hero-title"
      ref={heroRef}
    >
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
          <span
            className={styles.monogramViewport}
            aria-hidden="true"
            ref={monogramRef}
          >
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

        <nav
          className={styles.navigation}
          aria-label="Navegação principal"
          ref={navigationRef}
        >
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
          ref={titleRef}
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

        <p className={styles.description} ref={descriptionRef}>
          Cada plano começa pela escuta, considerando e respeitando a
          <br className={styles.desktopBreak} /> anatomia, expressão, momento
          <br className={styles.mobileDescriptionBreak} /> e suas expectativas reais.
        </p>

        <a className={styles.cta} href="#contato" ref={ctaRef}>
          AGENDAR AVALIAÇÃO
        </a>
      </div>
    </section>
  );
}
