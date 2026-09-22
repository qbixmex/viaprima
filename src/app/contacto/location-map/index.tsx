import type { FC } from "react";
import { Icon } from "@iconify/react";

const GOOGLE_MAPS_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.630900310791!2d-103.36085642488038!3d20.687757380877667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b1e0046ab13f%3A0xbee44453dd9be284!2sC.%20Arista%201456%2C%20Artesanos%2C%2044200%20Guadalajara%2C%20Jal.!5e1!3m2!1ses-419!2smx!4v1789515447337!5m2!1ses-419!2smx";

export const LocationMap: FC = () => {
  return (
    <section className="w-full py-20 bg-surface-container-low border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-blue-400 font-mono-tracking text-mono-tracking uppercase tracking-wider mb-2">
            <Icon icon="location_on" className="text-[18px]" />
            <span>Ubicación del Centro</span>
          </div>
          <h2 className="font-headline-xl text-headline-xl text-white font-extrabold tracking-tight mb-4">
            Centro de Distribución ViaPrima
          </h2>
          <p className="font-body-lg text-body-lg text-slate-300 leading-relaxed">
            Nos encontramos en la Zona Metropolitana, estratégicamente ubicados
            para la clasificación y despacho de paquetería.
          </p>
        </div>

        {/* Mapa decorativo SVG */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-surface-container border border-slate-800">
          <div className="h-105 w-full overflow-hidden">
            <iframe
              src={GOOGLE_MAPS_URL}
              width="100%"
              height={420}
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          <div className="flex justify-end p-6 bg-surface-container">
            <div className="flex items-center gap-2 font-label-md text-label-md text-slate-400">
              <Icon icon="material-symbols:location-on" className="text-blue-400 text-[20px]" />
              <span>Calle Arista #1456, Guadalajara, Jalisco, México</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
