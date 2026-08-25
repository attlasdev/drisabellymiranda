"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
} from "react";
import { createPortal } from "react-dom";
import { gsap } from "gsap";

import { primaryNavigation } from "@/content/navigation";
import heroPortrait from "../../../public/images/hero/isabely-hero-original.jpg";

import styles from "./hero.module.css";

export function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPortraitReady, setIsPortraitReady] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const monogramRef = useRef<HTMLSpanElement>(null);
  const navigationRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLButtonElement>(null);
  const mobileMenuOverlayRef = useRef<HTMLDivElement>(null);
  const mobileMenuCloseRef = useRef<HTMLButtonElement>(null);
  const mobileMenuTimelineRef = useRef<gsap.core.Timeline | null>(null);
  const pendingMobileNavigationRef = useRef<string | null>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  const closeMobileMenu = useCallback(() => {
    const timeline = mobileMenuTimelineRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!timeline || reduceMotion) {
      setIsMenuOpen(false);
      return;
    }

    timeline.timeScale(1.45).reverse();
  }, []);

  const handleMobileNavigation = useCallback(
    (event: ReactMouseEvent<HTMLAnchorElement>) => {
      const hash = event.currentTarget.getAttribute("href");

      if (!hash?.startsWith("#")) {
        return;
      }

      event.preventDefault();
      pendingMobileNavigationRef.current = hash;
      closeMobileMenu();
    },
    [closeMobileMenu],
  );

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
              0.62,
            )
            .fromTo(
              descriptionRef.current,
              { autoAlpha: 0, y: 20 },
              { autoAlpha: 1, y: 0, duration: 0.65 },
              1.04,
            )
            .fromTo(
              ctaRef.current,
              { autoAlpha: 0, y: 16 },
              { autoAlpha: 1, y: 0, duration: 0.6 },
              1.34,
            );
        }, heroRef);

        return () => context.revert();
      },
    );

    media.add(
      {
        motion: "(prefers-reduced-motion: no-preference)",
        nonDesktop: "(max-width: 63.999rem)",
        phone: "(max-width: 47.999rem)",
      },
      (mediaContext) => {
        if (!mediaContext.conditions?.motion || !mediaContext.conditions.nonDesktop) {
          return;
        }

        const isPhone = Boolean(mediaContext.conditions.phone);
        const titleGroup = heroRef.current?.querySelector<HTMLElement>(
          isPhone ? "[data-hero-mobile-title]" : "[data-hero-desktop-title]",
        );
        const titleLines = titleGroup?.querySelectorAll<HTMLElement>(
          "[data-hero-title-line]",
        ) ?? [];
        const navigationLinks = navigationRef.current?.querySelectorAll("a") ?? [];
        const headerItems = isPhone
          ? [monogramRef.current, mobileMenuRef.current]
          : [monogramRef.current, ...Array.from(navigationLinks)];

        const context = gsap.context(() => {
          const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

          timeline
            .fromTo(
              headerItems,
              { autoAlpha: 0, y: 12 },
              { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.07 },
              0,
            )
            .fromTo(
              titleLines,
              { autoAlpha: 0, yPercent: 72 },
              {
                autoAlpha: 1,
                yPercent: 0,
                duration: 0.86,
                stagger: 0.12,
              },
              0.36,
            )
            .fromTo(
              descriptionRef.current,
              { autoAlpha: 0, y: 16 },
              { autoAlpha: 1, y: 0, duration: 0.58 },
              1.28,
            )
            .fromTo(
              ctaRef.current,
              { autoAlpha: 0, y: 14 },
              { autoAlpha: 1, y: 0, duration: 0.56 },
              1.52,
            );
        }, heroRef);

        return () => context.revert();
      },
    );

    return () => media.revert();
  }, []);

  useLayoutEffect(() => {
    const overlay = mobileMenuOverlayRef.current;

    if (!isMenuOpen || !overlay) {
      return;
    }

    const links = overlay.querySelectorAll<HTMLElement>("[data-mobile-menu-link]");
    const chrome = overlay.querySelectorAll<HTMLElement>("[data-mobile-menu-chrome]");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      gsap.set(overlay, { autoAlpha: 1, pointerEvents: "auto", x: 0, xPercent: 0 });
      gsap.set([chrome, links], { autoAlpha: 1, y: 0 });

      return;
    }

    const openTimeline = gsap
      .timeline({
        paused: true,
        onReverseComplete: () => {
          gsap.set(overlay, { autoAlpha: 0, pointerEvents: "none" });
          setIsMenuOpen(false);
        },
      })
      .set(overlay, { autoAlpha: 1, pointerEvents: "auto", x: 0, xPercent: 100 })
      .to(
        overlay,
        {
          xPercent: 0,
          duration: 0.54,
          ease: "power3.inOut",
          force3D: true,
        },
        0,
      )
      .fromTo(
        chrome,
        { autoAlpha: 0, y: -8 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.26,
          stagger: 0.04,
          ease: "power2.out",
        },
        0.06,
      )
      .fromTo(
        links,
        { autoAlpha: 0, y: 18 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.04,
          ease: "power2.out",
        },
        0.08,
      );

    mobileMenuTimelineRef.current = openTimeline;
    openTimeline.timeScale(1).play(0);

    return () => {
      openTimeline.kill();
      mobileMenuTimelineRef.current = null;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousBodyOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement as HTMLElement | null;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    const focusFrame = window.requestAnimationFrame(() => {
      mobileMenuCloseRef.current?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMobileMenu();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = Array.from(
        mobileMenuOverlayRef.current?.querySelectorAll<HTMLElement>(
          'button, a[href], [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements.at(-1);

      if (!firstElement || !lastElement) {
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    const desktopQuery = window.matchMedia("(min-width: 48rem)");
    const handleDesktopChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    desktopQuery.addEventListener("change", handleDesktopChange);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      window.removeEventListener("keydown", handleKeyDown);
      desktopQuery.removeEventListener("change", handleDesktopChange);
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousBodyOverflow;
      previousFocus?.focus({ preventScroll: true });
    };
  }, [closeMobileMenu, isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      return;
    }

    const hash = pendingMobileNavigationRef.current;

    if (!hash) {
      return;
    }

    pendingMobileNavigationRef.current = null;

    const navigationFrame = window.requestAnimationFrame(() => {
      const targetId = decodeURIComponent(hash.slice(1));
      const target = targetId ? document.getElementById(targetId) : null;
      const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth";

      if (!target) {
        return;
      }

      window.history.pushState(null, "", hash);

      if (targetId === "inicio") {
        window.scrollTo({ top: 0, left: 0, behavior });
      } else {
        target.scrollIntoView({ behavior, block: "start" });
      }
    });

    return () => window.cancelAnimationFrame(navigationFrame);
  }, [isMenuOpen]);

  return (
    <section
      className={styles.hero}
      id="inicio"
      aria-labelledby="hero-title"
      ref={heroRef}
    >
      <Image
        className={`${styles.portrait} ${isPortraitReady ? styles.portraitReady : ""}`}
        src={heroPortrait}
        alt="Isabelly Miranda sorrindo"
        sizes="(max-width: 767px) 105vw, (max-width: 1023px) 82vw, 60vw"
        preload
        decoding="sync"
        fetchPriority="high"
        onLoad={() => setIsPortraitReady(true)}
      />

      <header className={styles.header}>
        <a className={styles.monogram} href="#inicio" aria-label="Isabelly Miranda — início">
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

        <button
          className={styles.mobileMenu}
          type="button"
          aria-label="Abrir menu"
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          onClick={() => {
            pendingMobileNavigationRef.current = null;
            setIsMenuOpen(true);
          }}
          ref={mobileMenuRef}
        >
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
          <span className={styles.mobileTitle} aria-hidden="true" data-hero-mobile-title>
            <span data-hero-title-line>Harmonização</span>
            <span data-hero-title-line>orofacial</span>
            <span data-hero-title-line>
              com <em>precisão</em> e
            </span>
            <span data-hero-title-line>respeito à sua</span>
            <span data-hero-title-line>identidade.</span>
          </span>

          <span className={styles.desktopTitle} aria-hidden="true" data-hero-desktop-title>
            <span data-hero-title-line>Harmonização orofacial</span>
            <span data-hero-title-line>
              com <em>precisão</em> e respeito
            </span>
            <span data-hero-title-line>à sua identidade.</span>
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

      {isMenuOpen && typeof document !== "undefined"
        ? createPortal(
            <div
              className={styles.mobileMenuOverlay}
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Menu principal"
              ref={mobileMenuOverlayRef}
            >
              <div className={styles.mobileMenuOverlayHeader}>
                <Image
                  className={styles.mobileMenuBrand}
                  src="/images/brand/isabely-monogram.svg"
                  alt=""
                  width={1076}
                  height={824}
                  sizes="40px"
                  data-mobile-menu-chrome
                  aria-hidden="true"
                />

                <button
                  className={styles.mobileMenuClose}
                  type="button"
                  aria-label="Fechar menu"
                  onClick={closeMobileMenu}
                  ref={mobileMenuCloseRef}
                  data-mobile-menu-chrome
                >
                  <span />
                  <span />
                </button>
              </div>

              <nav className={styles.mobileMenuNavigation} aria-label="Navegação mobile">
                <a
                  className={styles.mobileMenuLink}
                  href="#inicio"
                  onClick={handleMobileNavigation}
                  data-mobile-menu-link
                >
                  INÍCIO
                </a>
                {primaryNavigation.map((item) => (
                  <a
                    key={item.href}
                    className={styles.mobileMenuLink}
                    href={item.href}
                    onClick={handleMobileNavigation}
                    data-mobile-menu-link
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>,
            document.body,
          )
        : null}
    </section>
  );
}
