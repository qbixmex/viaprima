import { Icon } from "@iconify/react";
import { stepsFlow } from "./data";
import { cn } from "@/lib/cn";

export const LogisticsFlow = () => {
  return (
    <section className="w-full py-24 bg-surface-container-low border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="p-8 md:p-12 rounded-3xl bg-surface-container border border-slate-800 shadow-2xl mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-700/40 text-blue-300 font-mono-tracking text-mono-tracking uppercase mb-4">
              <span>Control de Calidad en Cada Milla</span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-white font-extrabold tracking-tight mb-4">
              Una operación pensada para entregar.
            </h2>
            <p className="font-body-lg text-body-lg text-slate-300 leading-relaxed mb-6">
              Detrás de cada entrega existe un proceso. En ViaPrima nos
              encargamos de que los paquetes recibidos estén listos para
              continuar su recorrido de manera ordenada y eficiente.
            </p>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-surface-container-low border border-slate-800">
              <Icon icon="mdi:handshake" className="text-blue-400 text-[24px]" />
              <p className="font-body-sm text-body-sm text-slate-300 leading-snug">
                <strong className="text-white">Sinergia 99minutos + ViaPrima:</strong>{" "}
                La red principal abastece nuestro centro logístico; nuestro
                equipo local gestiona la clasificación táctica y el último
                tramo con repartidores especializados.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center max-w-xl mx-auto mb-12">
          <h3 className="font-headline-lg text-headline-lg text-white font-bold mb-2">
            Flujo integral de un envío
          </h3>
          <p className="font-body-md text-body-md text-slate-400">
            Trazabilidad milimétrica desde el ingreso mayorista hasta la puerta
            de tu domicilio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {stepsFlow.map((step, index) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-surface-container border border-slate-800/80 shadow-md relative group hover:border-slate-600 transition-all"
            >
              <div
                className={cn(
                  "w-14 h-14 rounded-2xl text-white flex items-center justify-center font-extrabold mb-4 group-hover:scale-105 transition-transform border",
                  step.iconBox
                )}
              >
                <Icon icon={step.icon} className="text-[26px]" />
              </div>
              <span
                className={cn(
                  "font-mono-tracking text-mono-tracking px-2.5 py-0.5 rounded-full mb-2 border",
                  step.badgeClass
                )}
              >
                {step.badge}
              </span>
              <h4 className="font-headline-sm text-headline-sm font-bold text-white mb-2">
                {step.title}
              </h4>
              <p className="font-body-sm text-body-sm text-slate-400">
                {step.description}
              </p>
              {index < stepsFlow.length - 1 && (
                <div className="hidden md:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-[#1e293b] border border-slate-700 text-blue-400 items-center justify-center shadow-md">
                  <Icon icon="mdi:chevron-right" className="text-[24px]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
