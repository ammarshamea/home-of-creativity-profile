import type { Metadata } from "next";
import { Great_Vibes, IBM_Plex_Sans_Arabic, Inter } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-arabic",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Home of Creativity — Creativation Source",
  description:
    "Brand architects. Premium Minimalism and human-centric marketing for Syria and Saudi Arabia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${inter.variable} ${ibmPlexArabic.variable} ${greatVibes.variable}`}
    >
      <body>
        <div className="grain" aria-hidden />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
