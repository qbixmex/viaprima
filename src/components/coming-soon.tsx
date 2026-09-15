import Link from "next/link";
import { Icon } from "@iconify/react";

type ComingSoonProps = {
  title: string;
  eyebrow: string;
  description: string;
  chip: string;
  icon: string;
};

export function ComingSoon({
  title,
  eyebrow,
  description,
  chip,
  icon,
}: ComingSoonProps) {
  return (
    <div className="relative w-full overflow-hidden bg-surface-container-low py-32 border-b border-slate-800/60">
      <div className="absolute -top-24 left-1/4 w-120 h-120 bg-blue-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-red-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="max-w-4xl mx-auto px-gutter flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#131d31] border border-blue-500/30 mb-8">
          <span className="font-mono-tracking text-mono-tracking tracking-wider text-blue-400 uppercase font-bold">
            {eyebrow}
          </span>
        </div>

        <div className="w-20 h-20 rounded-3xl bg-surface-container border border-slate-700 text-blue-400 flex items-center justify-center shadow-xl mb-8 relative">
          <div className="absolute inset-0 rounded-3xl border border-blue-500/30 animate-ping opacity-40" />
          <Icon icon={icon} className="text-[40px]" />
        </div>

        <h1 className="font-display-hero text-display-hero text-white tracking-tight leading-[1.08] mb-6">
          {title}
        </h1>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-950/50 border border-amber-600/40 text-amber-300 font-label-md text-label-md font-bold mb-6">
          <Icon icon="mdi:construction" className="text-[20px]" />
          <span>{chip}</span>
        </div>

        <p className="font-body-lg text-body-lg text-slate-300 max-w-2xl leading-relaxed mb-10">
          {description}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-label-md text-label-md px-6 py-3.5 rounded-xl shadow-lg shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 font-bold"
          >
            <Icon icon="mdi:headset_mic" className="text-[20px]" />
            <span>Consultar disponibilidad</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#182338] border border-slate-700 text-slate-200 hover:bg-[#202c44] hover:text-white font-label-md text-label-md px-6 py-3.5 rounded-xl transition-all font-semibold"
          >
            <Icon icon="mdi:home" className="text-[20px] text-blue-400" />
            <span>Volver al inicio</span>
          </Link>
        </div>

        <div className="mt-16 p-6 rounded-2xl bg-surface-container border border-slate-800 max-w-2xl text-left">
          <h2 className="font-headline-lg font-bold text-headline-lg text-amber-400 mb-2">
            Mientras tanto
          </h2>
          <p className="text-body-lg leading-relaxed text-slate-300">
            Si necesitas información sobre nuestras zonas de operación
            ó quieres resolver una duda puntual,
            nuestro equipo de operaciones está disponible para atenderte.
          </p>
        </div>
      </div>
    </div>
  );
}