import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dinim3ak | VTC nouvelle génération pour l'Algérie",
  description:
    "Dinim3ak est la plateforme VTC conçue pour les passagers et chauffeurs en Algérie. Réservez votre course, rejoignez la communauté et profitez d'un transport sûr, transparent et abordable.",
  metadataBase: new URL("https://agentic-8c33ac9c.vercel.app"),
  openGraph: {
    title: "Dinim3ak | VTC nouvelle génération pour l'Algérie",
    description:
      "Réinventez vos déplacements avec Dinim3ak : sécurité, flexibilité et transparence au service des passagers et chauffeurs algériens.",
    url: "https://agentic-8c33ac9c.vercel.app",
    siteName: "Dinim3ak",
    locale: "fr_DZ",
    type: "website",
  },
  keywords: [
    "Dinim3ak",
    "VTC Algérie",
    "chauffeur privé",
    "indrive Algérie",
    "transport urbain",
    "réservation course",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${plusJakarta.variable} relative min-h-screen bg-sand-50 text-slate-900 antialiased`}
      >
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(254,225,134,0.35),transparent_55%),radial-gradient(circle_at_80%_10%,rgba(67,184,193,0.28),transparent_50%),radial-gradient(circle_at_30%_80%,rgba(203,213,225,0.4),transparent_45%)]" />
        {children}
      </body>
    </html>
  );
}
