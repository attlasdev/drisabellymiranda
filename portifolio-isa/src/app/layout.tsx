import type { Metadata, Viewport } from "next";

import { inter, playfairDisplay } from "@/lib/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "Isabely Miranda | Harmonização Orofacial",
  description:
    "Harmonização orofacial com precisão, escuta e respeito à sua identidade.",
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
      <body
        className={`${inter.variable} ${playfairDisplay.variable}`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
