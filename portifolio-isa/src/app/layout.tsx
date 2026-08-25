import type { Metadata, Viewport } from "next";

import { inter, playfairDisplay } from "@/lib/fonts";
import { isIndexable, siteUrl } from "@/lib/site";

import "./globals.css";

const initialScrollResetScript = `
  (() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const resetScroll = () => window.scrollTo(0, 0);

    resetScroll();
    window.addEventListener("pageshow", resetScroll, { once: true });
    window.addEventListener("load", resetScroll, { once: true });
    window.requestAnimationFrame(resetScroll);
  })();
`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Isabelly Miranda | Harmonização Orofacial",
  description:
    "Harmonização orofacial com precisão, escuta e respeito à sua identidade.",
  /*
    Segunda camada de bloqueio, e não redundância do `robots.txt`.

    O `robots.txt` impede a varredura, mas uma URL descoberta por link externo
    ainda pode ser indexada sem nunca ter sido lida — aparece no resultado sem
    título nem descrição. Só a diretiva `noindex` no HTML impede a indexação de
    fato. Enquanto o conteúdo clínico não for aprovado, valem as duas.
  */
  robots: isIndexable
    ? { index: true, follow: true }
    : { index: false, follow: false, nocache: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#555A5D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/*
          Executa antes da hidratação para impedir que o navegador restaure a
          posição de uma sessão anterior durante um refresh, inclusive no mobile.
        */}
        <script dangerouslySetInnerHTML={{ __html: initialScrollResetScript }} />
      </head>
      <body
        className={`${inter.variable} ${playfairDisplay.variable}`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
