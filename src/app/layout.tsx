import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { jetbrainsMono, plusJakarta, spaceGrotesk } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ViaPrima | Centro de distribución",
    template: "%s | ViaPrima",
  },
  description:
    "Centro de distribución especializado en la recepción, organización y distribución de paquetes para entregas a domicilio con máxima velocidad y trazabilidad",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} bg-background antialiased`}
    >
      <head>
        <link rel="icon" href="favicon.png?v=1>" type="image/png" sizes="32x32" />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-on-surface font-body-md text-body-md selection:bg-primary selection:text-white">
        <SiteHeader />
        <main className="flex-1 w-full pt-20">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
};

export default RootLayout;