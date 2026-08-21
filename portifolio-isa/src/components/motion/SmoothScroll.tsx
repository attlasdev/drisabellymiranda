"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

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
          statementReveal?.scrollTrigger?.kill();
          statementReveal?.kill();
          split?.revert();
          heroPin?.kill();
          smoother.kill();
        };
      },
    );

    return () => media.revert();
  }, []);

  return (
    <div id="smooth-wrapper" ref={wrapperRef}>
      <div id="smooth-content" ref={contentRef}>
        {children}
      </div>
    </div>
  );
}
