import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { FaqAccordion } from "@/components/faq-accordion";
import { questions } from "./data";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes",
  description:
    "Resolvemos las dudas más comunes sobre el envío, rastreo y entrega de paquetes con ViaPrima.",
};

export default function PreguntasFrecuentesPage() {
  return (
    <div className="max-w-7xl mx-auto px-gutter py-20">
      <div className="lg:col-span-5 lg:sticky lg:top-28">
        <div className="rounded-2xl bg-surface-container border border-slate-800 p-7 shadow-xl overflow-hidden relative">
          <div className="absolute -top-16 -right-16 size-50 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 size-50 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="relative">
            <div className="flex justify-between items-center mb-5">
              <h1 className="font-headline-lg text-headline-xl text-amber-400 uppercase tracking-wider block">
                Preguntas Frecuentes
              </h1>
              <div className="size-12 rounded-xl bg-amber-950/60 border border-amber-700/40 text-amber-400 flex items-center justify-center">
                <Icon icon="mdi:help" className="text-2xl" />
              </div>
            </div>

            <FaqAccordion
              questions={questions}
              variant="card"
              showIcons defaultOpenIndex={0}
            />
          </div>
        </div>
      </div>
    </div>
  );
}