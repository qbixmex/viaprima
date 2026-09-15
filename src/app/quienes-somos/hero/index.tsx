import { Icon } from "@iconify/react";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-surface-container-low py-24 border-b border-slate-800/60">
      <div className="absolute -top-24 left-1/4 size-120 bg-blue-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#131d31] border border-blue-500/30 mb-6">
          <span className="font-mono-tracking text-mono-tracking tracking-wider text-blue-400 uppercase font-bold">
            Quiénes Somos
          </span>
        </div>
        <h1 className="font-display-hero text-display-hero text-white tracking-tight leading-[1.08] mb-6 max-w-3xl text-balance">
          El eslabón que hace posible la entrega
        </h1>
        <p className="font-body-lg text-body-lg text-slate-300 max-w-2xl leading-relaxed">
          En <strong className="text-white">ViaPrima</strong> nos especializamos
          en la recepción, clasificación y preparación de paquetería para su
          entrega a domicilio. Somos un centro de distribución enfocado en la
          logística urbana, aliados de{" "}
          <strong className="text-white">99minutos</strong> para conectar los
          centros de operación con el destinatario final.
        </p>
        <div className="flex flex-wrap gap-3 mt-7">
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-label-md text-label-md px-6 py-3.5 rounded-xl shadow-lg shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 font-bold"
          >
            <Icon icon="mdi:handshake" className="text-[20px]" />
            <span>Conocer nuestra propuesta</span>
          </Link>
          <Link
            href="/como-funciona"
            className="inline-flex items-center gap-2 bg-[#182338] border border-slate-700 text-slate-200 hover:bg-[#202c44] hover:text-white font-label-md text-label-md px-6 py-3.5 rounded-xl transition-all font-semibold"
          >
            <Icon icon="mdi:timeline" className="text-[20px] text-blue-400" />
            <span>Ver cómo operamos</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
