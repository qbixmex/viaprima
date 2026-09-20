import type { FC } from "react";
import { Icon } from "@iconify/react";
import { fundaments } from "./data";
import { Fundament } from "./fundament";

export const Fundaments: FC = () => {
  return (
    <section className="w-full py-24 bg-surface-container-low border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-blue-400 font-mono-tracking text-mono-tracking uppercase tracking-wider mb-2">
            <Icon icon="mdi:shield_moon" className="text-[18px]" />
            <span>Nuestros Pilares</span>
          </div>
          <h2 className="font-headline-xl text-headline-xl text-white font-extrabold tracking-tight mb-4">
            Lo que sostiene cada entrega
          </h2>
          <p className="font-body-lg text-body-lg text-slate-300 leading-relaxed">
            Somos conscientes de nuestra posición dentro de la cadena logística:
            cada movimiento debe sumar valor al envío y a la experiencia de
            quien lo recibe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fundaments.map((fundament) => (
            <Fundament key={fundament.id} fundament={fundament} />
          ))}
        </div>
      </div>
    </section>
  );
};
