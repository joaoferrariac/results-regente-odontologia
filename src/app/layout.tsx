import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import { report } from "@/data/report";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const pageTitle = `${report.meta.client} | Relatório de Performance`;

export const metadata: Metadata = {
  title: pageTitle,
  description: report.hero.headline,
  robots: { index: false, follow: false },
  openGraph: {
    title: pageTitle,
    description: report.hero.headline,
    locale: "pt_BR",
    type: "article",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      {/* Browser extensions (e.g. ColorZilla's `cz-shortcut-listen`) inject
          attributes on <body> before hydration; ignore those mismatches. */}
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
