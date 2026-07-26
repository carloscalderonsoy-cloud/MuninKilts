import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SiteSettingsProvider } from "@/components/SiteSettingsProvider";
import { AudioProvider } from "@/components/AudioProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Munin Kilts — Viste con dignidad",
  description:
    "Kilts y faldas para caballero, hechos a mano en Guadalajara. Tela pesada, herrajes de latón y un patrón que aguanta el uso diario.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Eczar:wght@400;600&family=Jost:wght@400;500&family=Karla:wght@400;500&family=Work+Sans:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SiteSettingsProvider>
          <AudioProvider>
            <div className="grain" aria-hidden="true" />
            <Header />
            {children}
            <Footer />
          </AudioProvider>
        </SiteSettingsProvider>
      </body>
    </html>
  );
}
