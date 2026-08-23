"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

import { buildTreatmentRoute, readTreatmentGeometry } from "@/lib/treatment-route";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
}

type SmoothScrollProps = {
  children: ReactNode;
};

export function SmoothScroll({ children }: SmoothScrollProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;

    if (!wrapper || !content) {
      return;
    }

    const previousScrollRestoration = window.history.scrollRestoration;
    const initialUrl = `${window.location.pathname}${window.location.search}`;

    window.history.scrollRestoration = "manual";

    if (window.location.hash) {
      window.history.replaceState(null, "", initialUrl);
    }

    window.scrollTo(0, 0);

    const initialTopFrame = window.requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });

    const media = gsap.matchMedia();

    media.add(
      "(min-width: 64rem) and (prefers-reduced-motion: no-preference)",
      () => {
        const smoother = ScrollSmoother.create({
          wrapper,
          content,
          smooth: 0.8,
          effects: false,
        });

        const anchorLinks = Array.from(
          content.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'),
        );

        const scrollToHash = (hash: string, smooth = true) => {
          const targetId = decodeURIComponent(hash.slice(1));
          const target = targetId ? document.getElementById(targetId) : null;

          if (!target || !content.contains(target)) {
            return false;
          }

          smoother.scrollTo(targetId === "inicio" ? 0 : target, smooth, "top top");
          return true;
        };

        const handleAnchorClick = (event: MouseEvent) => {
          if (
            event.defaultPrevented ||
            event.button !== 0 ||
            event.metaKey ||
            event.ctrlKey ||
            event.shiftKey ||
            event.altKey
          ) {
            return;
          }

          const link = event.currentTarget as HTMLAnchorElement;
          const hash = link.getAttribute("href");

          if (!hash || !scrollToHash(hash)) {
            return;
          }

          event.preventDefault();
          window.history.pushState(null, "", hash);
        };

        const handleHistoryNavigation = () => {
          if (window.location.hash) {
            scrollToHash(window.location.hash);
          } else {
            smoother.scrollTo(0, true);
          }
        };

        const initialSmootherFrame = window.requestAnimationFrame(() => {
          smoother.scrollTo(0, false);
        });

        anchorLinks.forEach((link) => {
          link.addEventListener("click", handleAnchorClick);
        });
        window.addEventListener("popstate", handleHistoryNavigation);

        const hero = content.querySelector<HTMLElement>("#inicio");
        const statement = content.querySelector<HTMLElement>("#essencia");
        const statementHeading = statement?.querySelector<HTMLElement>("h2");
        const statementCopy = statement?.querySelector<HTMLElement>(
          "[data-statement-copy]",
        );

        const heroPin = hero
          ? ScrollTrigger.create({
              trigger: hero,
              start: "top top",
              end: "bottom top",
              pin: true,
              pinSpacing: false,
              invalidateOnRefresh: true,
            })
          : null;

        const split = statementCopy
          ? SplitText.create(statementCopy, {
              type: "words",
              mask: "words",
              deepSlice: true,
              aria: "none",
            })
          : null;

        let statementReveal: gsap.core.Tween | null = null;

        if (split && statementHeading) {
          gsap.set(split.masks, { overflowClipMargin: "0.25em" });
          gsap.set(split.words, { yPercent: 135, autoAlpha: 0 });

          statementReveal = gsap.to(split.words, {
            yPercent: 0,
            autoAlpha: 1,
            duration: 0.95,
            stagger: 0.04,
            ease: "power3.out",
            scrollTrigger: {
              trigger: statementHeading,
              start: "top 85%",
              toggleActions: "play none none none",
              invalidateOnRefresh: true,
            },
          });
        }

        return () => {
          anchorLinks.forEach((link) => {
            link.removeEventListener("click", handleAnchorClick);
          });
          window.removeEventListener("popstate", handleHistoryNavigation);
          window.cancelAnimationFrame(initialSmootherFrame);
          statementReveal?.scrollTrigger?.kill();
          statementReveal?.kill();
          split?.revert();
          heroPin?.kill();
          smoother.kill();
        };
      },
    );

    media.add(
      {
        motion: "(prefers-reduced-motion: no-preference)",
        nonDesktop: "(max-width: 63.999rem)",
        phone: "(max-width: 47.999rem)",
      },
      (context) => {
        if (!context.conditions?.motion || !context.conditions.nonDesktop) {
          return;
        }

        const isPhone = Boolean(context.conditions.phone);
        const hero = content.querySelector<HTMLElement>("#inicio");
        const statement = content.querySelector<HTMLElement>("#essencia");
        const statementHeading = statement?.querySelector<HTMLElement>("h2");
        const statementCopy = statement?.querySelector<HTMLElement>(
          "[data-statement-copy]",
        );

        let heroPin: ScrollTrigger | null = null;
        let split: SplitText | null = null;
        let statementReveal: gsap.core.Tween | null = null;

        const mobileOpeningContext = gsap.context(() => {
          heroPin = hero
            ? ScrollTrigger.create({
                trigger: hero,
                start: "top top",
                end: "bottom top",
                pin: true,
                pinSpacing: false,
                anticipatePin: 1,
                invalidateOnRefresh: true,
              })
            : null;

          split = statementCopy
            ? SplitText.create(statementCopy, {
                type: "words",
                mask: "words",
                deepSlice: true,
                aria: "none",
              })
            : null;

          if (split && statementHeading) {
            gsap.set(split.masks, { overflowClipMargin: "0.25em" });
            gsap.set(split.words, { yPercent: 135, autoAlpha: 0 });

            statementReveal = gsap.to(split.words, {
              yPercent: 0,
              autoAlpha: 1,
              duration: isPhone ? 0.82 : 0.9,
              stagger: isPhone ? 0.032 : 0.038,
              ease: "power3.out",
              scrollTrigger: {
                trigger: statementHeading,
                start: isPhone ? "top 84%" : "top 86%",
                toggleActions: "play none none none",
                invalidateOnRefresh: true,
              },
            });
          }

        }, content);

        return () => {
          statementReveal?.scrollTrigger?.kill();
          statementReveal?.kill();
          split?.revert();
          heroPin?.kill();
          mobileOpeningContext.revert();
        };
      },
    );

    media.add(
      {
        motion: "(prefers-reduced-motion: no-preference)",
        desktop: "(min-width: 64rem)",
      },
      (context) => {
        if (!context.conditions?.motion) {
          return;
        }

        const treatments = content.querySelector<HTMLElement>("#tratamentos");

        if (!treatments) {
          return;
        }

        const isDesktop = context.conditions.desktop;
        const title = treatments.querySelector<HTMLElement>("[data-treatment-title]");
        const subtitle = treatments.querySelector<HTMLElement>(
          "[data-treatment-subtitle]",
        );
        const cards = treatments.querySelectorAll<HTMLElement>("[data-treatment-card]");
        const routeReveal = treatments.querySelector<SVGRectElement>(
          "[data-treatment-route-reveal]",
        );

        const routeSvg = treatments.querySelector<SVGSVGElement>(
          "[data-treatment-route]",
        );
        const routeLine = routeSvg?.querySelector<SVGPathElement>("path") ?? null;
        const routeOrigin = treatments.querySelector<SVGCircleElement>(
          "[data-treatment-route-origin]",
        );
        const routeEnds = treatments.querySelectorAll<SVGCircleElement>(
          "[data-treatment-route-end]",
        );

        /*
          O traçado é redesenhado a partir da posição real dos cards. O `path`
          que vem do servidor é só um ponto de partida; a proporção da seção
          muda com o viewport e um `path` fixo desalinha fora de 1920 × 1080.
        */
        let revealHeight = 0;

        const drawRoute = () => {
          if (!routeSvg || !routeLine || !isDesktop) {
            return;
          }

          const route = buildTreatmentRoute(readTreatmentGeometry(treatments));

          if (!route) {
            return;
          }

          routeSvg.setAttribute("viewBox", route.viewBox);
          routeLine.setAttribute("d", route.d);
          routeOrigin?.setAttribute("cx", String(route.origin.x));
          routeOrigin?.setAttribute("cy", String(route.origin.y));
          routeEnds.forEach((circle) => {
            circle.setAttribute("cx", String(route.end.x));
            circle.setAttribute("cy", String(route.end.y));
          });
          routeReveal?.setAttribute("y", String(route.revealY));

          revealHeight = route.revealHeight;
        };

        drawRoute();

        /*
          `refreshInit` cobre os refreshes que o próprio ScrollTrigger dispara,
          e roda antes dele remedir — então `revealHeight` já está atualizado
          quando `invalidateOnRefresh` reavalia o alvo do scrub.

          O ResizeObserver cobre o resto: mudança de viewport, barra de
          endereço recolhendo, fonte carregando. Ele observa o box da seção em
          vez do evento global, então só reage quando a geometria realmente
          muda. O `refresh()` daqui não realimenta o observer, porque redesenhar
          o traçado não altera o tamanho da seção.
        */
        ScrollTrigger.addEventListener("refreshInit", drawRoute);

        let lastWidth = treatments.offsetWidth;
        let lastHeight = treatments.offsetHeight;

        const observer = new ResizeObserver(() => {
          if (
            treatments.offsetWidth === lastWidth &&
            treatments.offsetHeight === lastHeight
          ) {
            return;
          }

          lastWidth = treatments.offsetWidth;
          lastHeight = treatments.offsetHeight;

          drawRoute();
          ScrollTrigger.refresh();
        });

        observer.observe(treatments);

        const treatmentsContext = gsap.context(() => {
          if (routeReveal && isDesktop) {
            gsap.fromTo(
              routeReveal,
              { attr: { height: 0 } },
              {
                // Reavaliado a cada refresh graças a `invalidateOnRefresh`.
                attr: { height: () => revealHeight },
                ease: "none",
                scrollTrigger: {
                  trigger: treatments,
                  start: "top -25%",
                  end: "bottom 40%",
                  scrub: 1.2,
                  invalidateOnRefresh: true,
                },
              },
            );
          }

          if (title && subtitle) {
            gsap
              .timeline({
                scrollTrigger: {
                  trigger: title,
                  start: isDesktop ? "top 86%" : "top 90%",
                  once: true,
                  invalidateOnRefresh: true,
                },
              })
              .fromTo(
                title,
                { autoAlpha: 0, y: isDesktop ? 26 : 20 },
                { autoAlpha: 1, y: 0, duration: 0.75, ease: "power3.out" },
              )
              .fromTo(
                subtitle,
                { autoAlpha: 0, y: isDesktop ? 18 : 14 },
                { autoAlpha: 1, y: 0, duration: 0.65, ease: "power3.out" },
                "-=0.38",
              );
          }

          cards.forEach((card) => {
            const direction = card.dataset.treatmentAlignment === "right" ? 1 : -1;

            gsap.fromTo(
              card,
              {
                autoAlpha: 0,
                scale: 0.985,
                x: direction * (isDesktop ? 120 : 42),
              },
              {
                autoAlpha: 1,
                scale: 1,
                x: 0,
                duration: isDesktop ? 1.15 : 0.9,
                ease: "power4.out",
                clearProps: "transform,opacity,visibility",
                scrollTrigger: {
                  trigger: card,
                  start: isDesktop ? "top 82%" : "top 88%",
                  once: true,
                  invalidateOnRefresh: true,
                },
              },
            );
          });
        }, treatments);

        return () => {
          observer.disconnect();
          ScrollTrigger.removeEventListener("refreshInit", drawRoute);
          treatmentsContext.revert();
        };
      },
    );

    media.add(
      {
        motion: "(prefers-reduced-motion: no-preference)",
        desktop: "(min-width: 64rem)",
        wide: "(min-width: 90rem)",
      },
      (context) => {
        if (!context.conditions?.motion) {
          return;
        }

        const isDesktop = Boolean(context.conditions.desktop);
        const consultation = content.querySelector<HTMLElement>("#sobre");
        const results = content.querySelector<HTMLElement>("#resultados");
        const faq = content.querySelector<HTMLElement>("#faq");
        const contact = content.querySelector<HTMLElement>("#contato");
        const footer = content.querySelector<HTMLElement>("#rodape");

        const remainingMotionContext = gsap.context(() => {
          if (consultation) {
            const title = consultation.querySelector<HTMLElement>(
              "[data-consultation-title]",
            );
            const description = consultation.querySelector<HTMLElement>(
              "[data-consultation-description]",
            );
            const trajectory = consultation.querySelector<HTMLElement>(
              "[data-consultation-trajectory]",
            );

            if (title && description) {
              const consultationTimeline = gsap
                .timeline({
                  scrollTrigger: {
                    trigger: title,
                    start: isDesktop ? "top 84%" : "top 90%",
                    once: true,
                    invalidateOnRefresh: true,
                  },
                })
                .fromTo(
                  title,
                  { autoAlpha: 0, y: isDesktop ? 28 : 20 },
                  {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.78,
                    ease: "power3.out",
                    clearProps: "transform,opacity,visibility",
                  },
                )
                .fromTo(
                  description,
                  { autoAlpha: 0, y: isDesktop ? 22 : 16 },
                  {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.72,
                    ease: "power3.out",
                    clearProps: "transform,opacity,visibility",
                  },
                  "-=0.42",
                );

              if (trajectory && isDesktop) {
                consultationTimeline.fromTo(
                  trajectory,
                  { autoAlpha: 0, y: 16 },
                  {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.62,
                    ease: "power3.out",
                    clearProps: "transform,opacity,visibility",
                  },
                  "-=0.4",
                );
              }
            }

            if (trajectory && !isDesktop) {
              gsap.fromTo(
                trajectory,
                { autoAlpha: 0, y: 16 },
                {
                  autoAlpha: 1,
                  y: 0,
                  duration: 0.62,
                  ease: "power3.out",
                  clearProps: "transform,opacity,visibility",
                  scrollTrigger: {
                    trigger: trajectory,
                    start: "top 92%",
                    once: true,
                    invalidateOnRefresh: true,
                  },
                },
              );
            }
          }

          if (results) {
            const eyebrow = results.querySelector<HTMLElement>("[data-results-eyebrow]");
            const title = results.querySelector<HTMLElement>("[data-results-title]");
            const cards = Array.from(
              results.querySelectorAll<HTMLElement>("[data-result-card]"),
            );

            if (eyebrow && title) {
              gsap
                .timeline({
                  scrollTrigger: {
                    trigger: eyebrow,
                    start: isDesktop ? "top 86%" : "top 90%",
                    once: true,
                    invalidateOnRefresh: true,
                  },
                })
                .fromTo(
                  eyebrow,
                  { autoAlpha: 0, y: 14 },
                  {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.52,
                    ease: "power3.out",
                    clearProps: "transform,opacity,visibility",
                  },
                )
                .fromTo(
                  title,
                  { autoAlpha: 0, y: isDesktop ? 28 : 20 },
                  {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.78,
                    ease: "power3.out",
                    clearProps: "transform,opacity,visibility",
                  },
                  "-=0.3",
                );
            }

            const rows = cards.reduce<HTMLElement[][]>((groups, card) => {
              const currentRow = groups.at(-1);

              if (
                currentRow &&
                Math.abs(currentRow[0].offsetTop - card.offsetTop) < 2
              ) {
                currentRow.push(card);
              } else {
                groups.push([card]);
              }

              return groups;
            }, []);

            rows.forEach((row) => {
              gsap.set(row, {
                autoAlpha: 0,
                y: isDesktop ? 34 : 24,
                scale: 0.99,
              });

              gsap.to(row, {
                  autoAlpha: 1,
                  y: 0,
                  scale: 1,
                  duration: isDesktop ? 1.08 : 0.86,
                  stagger: isDesktop ? 0.17 : 0,
                  ease: "power3.out",
                  onComplete: () => {
                    gsap.set(row, { clearProps: "transform,opacity,visibility" });
                  },
                  scrollTrigger: {
                    trigger: row[0],
                    start: isDesktop ? "top 84%" : "top 90%",
                    once: true,
                    invalidateOnRefresh: true,
                  },
              });
            });
          }

          if (faq) {
            const eyebrow = faq.querySelector<HTMLElement>("[data-faq-eyebrow]");
            const title = faq.querySelector<HTMLElement>("[data-faq-title]");
            const description = faq.querySelector<HTMLElement>("[data-faq-description]");
            const list = faq.querySelector<HTMLElement>("[data-faq-list]");
            const items = Array.from(faq.querySelectorAll<HTMLElement>("[data-faq-item]"));

            if (eyebrow && title && description) {
              gsap
                .timeline({
                  scrollTrigger: {
                    trigger: eyebrow,
                    start: isDesktop ? "top 86%" : "top 90%",
                    once: true,
                    invalidateOnRefresh: true,
                  },
                })
                .fromTo(
                  eyebrow,
                  { autoAlpha: 0, y: 14 },
                  {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "power3.out",
                    clearProps: "transform,opacity,visibility",
                  },
                )
                .fromTo(
                  title,
                  { autoAlpha: 0, y: isDesktop ? 26 : 20 },
                  {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.75,
                    ease: "power3.out",
                    clearProps: "transform,opacity,visibility",
                  },
                  "-=0.3",
                )
                .fromTo(
                  description,
                  { autoAlpha: 0, y: 18 },
                  {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.65,
                    ease: "power3.out",
                    clearProps: "transform,opacity,visibility",
                  },
                  "-=0.38",
                );
            }

            if (list && items.length > 0 && isDesktop) {
              gsap.set(items, { autoAlpha: 0, y: 22 });

              gsap.to(items, {
                  autoAlpha: 1,
                  y: 0,
                  duration: 0.7,
                  stagger: 0.11,
                  ease: "power3.out",
                  onComplete: () => {
                    gsap.set(items, { clearProps: "transform,opacity,visibility" });
                  },
                  scrollTrigger: {
                    trigger: list,
                    start: "top 86%",
                    once: true,
                    invalidateOnRefresh: true,
                  },
              });
            }

            if (!isDesktop) {
              items.forEach((item) => {
                gsap.fromTo(
                  item,
                  { autoAlpha: 0, y: 16 },
                  {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.65,
                    ease: "power3.out",
                    clearProps: "transform,opacity,visibility",
                    scrollTrigger: {
                      trigger: item,
                      start: "top 92%",
                      once: true,
                      invalidateOnRefresh: true,
                    },
                  },
                );
              });
            }
          }

          if (contact) {
            const eyebrow = contact.querySelector<HTMLElement>("[data-contact-eyebrow]");
            const title = contact.querySelector<HTMLElement>("[data-contact-title]");
            const description = contact.querySelector<HTMLElement>(
              "[data-contact-description]",
            );
            const button = contact.querySelector<HTMLElement>("[data-contact-button]");

            if (eyebrow && title && description && button) {
              gsap
                .timeline({
                  scrollTrigger: {
                    trigger: eyebrow,
                    start: isDesktop ? "top 88%" : "top 90%",
                    once: true,
                    invalidateOnRefresh: true,
                  },
                })
                .fromTo(
                  eyebrow,
                  { autoAlpha: 0, y: 14 },
                  {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "power3.out",
                    clearProps: "transform,opacity,visibility",
                  },
                )
                .fromTo(
                  title,
                  { autoAlpha: 0, y: isDesktop ? 30 : 22 },
                  {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    clearProps: "transform,opacity,visibility",
                  },
                  "-=0.32",
                )
                .fromTo(
                  description,
                  { autoAlpha: 0, y: 18 },
                  {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.66,
                    ease: "power3.out",
                    clearProps: "transform,opacity,visibility",
                  },
                  "-=0.4",
                )
                .fromTo(
                  button,
                  { autoAlpha: 0, y: 16 },
                  {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.62,
                    ease: "power3.out",
                    clearProps: "transform,opacity,visibility",
                  },
                  "-=0.38",
                );
            }
          }

          if (footer) {
            const groups = footer.querySelectorAll<HTMLElement>("[data-footer-group]");

            if (groups.length > 0) {
              gsap.set(groups, {
                autoAlpha: 0,
                y: isDesktop ? 24 : 18,
              });

              gsap.to(groups, {
                  autoAlpha: 1,
                  y: 0,
                  duration: 0.72,
                  stagger: isDesktop ? 0.12 : 0.09,
                  ease: "power3.out",
                  onComplete: () => {
                    gsap.set(groups, { clearProps: "transform,opacity,visibility" });
                  },
                  scrollTrigger: {
                    trigger: groups[0],
                    start: isDesktop ? "top 88%" : "top 92%",
                    once: true,
                    invalidateOnRefresh: true,
                  },
              });
            }
          }
        }, content);

        return () => remainingMotionContext.revert();
      },
    );

    return () => {
      window.cancelAnimationFrame(initialTopFrame);
      media.revert();
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  return (
    <div id="smooth-wrapper" ref={wrapperRef}>
      <div id="smooth-content" ref={contentRef}>
        {children}
      </div>
    </div>
  );
}
