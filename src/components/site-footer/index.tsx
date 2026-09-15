import Image from "next/image";
import { ContactSupport } from "./contact-support";
import { NavigationLinks } from "./navigation-links";

export const SiteFooter = () => {
  return (
    <footer className="w-full bg-[#070b14] border-t border-slate-800/80 text-white pt-space-xl pb-space-lg">
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="flex flex-col md:flex-row gap-space-xl pb-space-xl">
          <div className="flex-1 md:flex-4 flex flex-col gap-space-md">
            <div className="flex items-center gap-space-sm">
              <Image
                src="/favicon.png"
                alt="Logo ViaPrima"
                width={512}
                height={288}
                className="h-8 w-auto object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]"
              />
              <span className="font-headline-sm text-headline-sm italic font-extrabold">
                <span className="text-primary">Via</span>
                <span className="text-secondary">Prima</span>
              </span>
            </div>

            <p className="text-slate-400 font-body-md text-body-md leading-relaxed">
              Centro de distribución especializado en la recepción, organización y distribución de paquetes para entregas a domicilio. Proveedor logístico aliado en última milla con infraestructura orientada a máxima velocidad y trazabilidad.
            </p>
          </div>

          <NavigationLinks />
          <ContactSupport />
        </div>

        <div className="pt-space-lg border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 font-label-sm text-label-sm">
          <p>&copy; 2026 ViaPrima. Todos los derechos reservados.</p>
          <p className="text-slate-500">
            Infraestructura logística independiente de distribución y recepción.
          </p>
        </div>
      </div>
    </footer>
  );
};
