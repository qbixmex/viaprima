import { Icon } from "@iconify/react";
import Link from "next/link";
import { values } from "./data";

export const PrimaValues = () => {
  return (
    <div className="lg:col-span-6 rounded-3xl bg-surface-container border border-slate-800 p-8 flex flex-col justify-between shadow-xl">
      <div>
        <div className="flex items-center gap-2 text-amber-400 font-mono-tracking text-mono-tracking uppercase tracking-wider mb-3">
          <Icon icon="mdi:heart" className="text-[18px]" />
          <span>Por qué confían en nosotros</span>
        </div>
        <h3 className="font-headline-md text-headline-md text-white font-bold mb-4">
          El valor real de ViaPrima
        </h3>
        <div className="space-y-3">
          {values.map(({ id, label }) => (
            <div key={id} className="flex items-start gap-2.5">
              <Icon icon="mdi:check-circle" className="text-blue-400 text-[20px] mt-0.5" />
              <span className="font-body-sm text-body-sm text-slate-300 leading-snug">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <Link
        href="/contacto"
        className="mt-8 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-blue-100 hover:text-white font-label-md text-label-md px-5 py-3 rounded-xl font-bold transition-all"
      >
        <span>Ponte en contacto con nosotros</span>
        <Icon icon="mdi:chevron-right" className="text-[24px]" />
      </Link>
    </div>
  );
};
