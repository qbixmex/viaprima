import type { FC } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { Icon } from "@iconify/react";
import { objectives } from "./data";

export const MainFeature: FC = () => {
  return (
    <section className="w-full py-24 bg-background">
      <div className="flex flex-col lg:flex-row gap-12 items-center max-w-7xl mx-auto px-gutter mb-18">
        <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
          <div className="absolute -inset-3 bg-linear-to-tr from-blue-600/20 via-transparent to-red-600/10 rounded-3xl pointer-events-none" />
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-surface-container border border-slate-800">
            <div className="relative h-105 w-full">
              <Image
                src="/images/recepcion-de-paquetes.png"
                alt="Recorrido interior del centro de distribución ViaPrima"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-90"
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <div className="flex items-center gap-2 text-blue-400 font-mono-tracking text-mono-tracking uppercase tracking-wider mb-3">
            <Icon icon="mdi:description" className="text-[18px]" />
            <span>Nuestra Operación</span>
          </div>
          <h2 className="font-headline-xl text-headline-xl text-white font-extrabold tracking-tight mb-6">
            Un centro de distribución pensado para la ciudad
          </h2>
          <div className="space-y-4">
            <p className="font-body-lg text-body-lg text-slate-300 leading-relaxed">
              <b><i><span className="text-primary">Via</span><span className="text-secondary">Prima</span></i></b>&nbsp;
              funciona como un nodo intermedio de logística donde&nbsp;
              recibimos paquetes desde los centros de operación.
            </p>
            <p className="font-body-lg text-body-lg text-slate-300 leading-relaxed">
              Esta operación se lleva a cabo en colaboración con proveedores logísticos&nbsp;
              donde los paquetes que llegan a nuestras instalaciones, se capturan&nbsp;
              y se crean rutas eficientes para que nuestros repartidores&nbsp;
              comiencen a repartir y por lo siguiente entregar en tiempo y forma.
            </p>
            <p className="font-body-lg text-body-lg text-slate-300 leading-relaxed">
              Para ello tenemos un control de inventarios a nivel de guía,&nbsp;
              clasificación física y coordinación con las rutas de entrega final.
            </p>
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-gutter">
        <div className="mt-8 grid grid-cols-2 gap-4">
          {objectives.map((objective) => (
            <div
              key={objective.title}
              className="p-5 rounded-2xl bg-surface-container border border-slate-800 shadow-md"
            >
              <span
                className={cn(
                  "inline-flex items-center font-mono-tracking text-mono-tracking px-2 py-0.5 rounded-full border mb-3",
                  objective.eyebrowClass
                )}
              >
                {objective.eyebrow}
              </span>
              <h3 className="font-headline-sm text-headline-sm text-white font-bold leading-snug mb-2">
                {objective.title}
              </h3>
              <p className="font-body-sm text-body-sm text-slate-400 leading-relaxed">
                {objective.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};
