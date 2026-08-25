"use client";

import { useLayoutEffect } from "react";

type ScrollToTopOnMountProps = {
  routeKey: string;
};

/**
 * Reposiciona a rota recém-renderizada antes do navegador pintá-la. Os links
 * que chegam aqui usam `scroll={false}` para a página anterior não animar até
 * o topo enquanto o Next.js troca o conteúdo.
 */
export function ScrollToTopOnMount({ routeKey }: ScrollToTopOnMountProps) {
  useLayoutEffect(() => {
    const root = document.documentElement;
    const previousScrollBehavior = root.style.getPropertyValue("scroll-behavior");
    const previousPriority = root.style.getPropertyPriority("scroll-behavior");

    root.style.setProperty("scroll-behavior", "auto", "important");
    // Força o navegador a aplicar `auto` antes do reposicionamento.
    void window.getComputedStyle(root).scrollBehavior;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    const restoreFrame = window.requestAnimationFrame(() => {
      if (previousScrollBehavior) {
        root.style.setProperty("scroll-behavior", previousScrollBehavior, previousPriority);
      } else {
        root.style.removeProperty("scroll-behavior");
      }
    });

    return () => {
      window.cancelAnimationFrame(restoreFrame);

      if (previousScrollBehavior) {
        root.style.setProperty("scroll-behavior", previousScrollBehavior, previousPriority);
      } else {
        root.style.removeProperty("scroll-behavior");
      }
    };
  }, [routeKey]);

  return null;
}
