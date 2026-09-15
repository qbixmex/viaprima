import { Icon } from '@iconify/react';
import Link from 'next/link';
import type { FC } from 'react';
import { CheckList } from './check-list';

export const BottomBanner: FC = () => {

  return (
    <section className="w-full py-20 bg-[#080d1a] border-t border-slate-800 text-white relative overflow-hidden">
      <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-red-600/10 blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-gutter relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-amber-400 font-mono-tracking text-mono-tracking uppercase mb-4">
              <Icon icon="mdi:verified" className="text-[16px]" />
              <span>Identidad & Confianza Operativa</span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-white font-extrabold tracking-tight mb-4">
              ViaPrima: Tu paquete en el camino correcto.
            </h2>
            <p className="font-body-lg text-body-lg text-slate-300 max-w-2xl mb-8 leading-relaxed">
              Unimos tecnología, logística de precisión y presencia local para
              que cada destinatario reciba su paquete en el tiempo acordado y
              con total tranquilidad.
            </p>
            <div className="p-5 rounded-2xl bg-surface-container border border-slate-800 max-w-2xl mb-8">
              <div className="flex items-start gap-3">
                <Icon icon="info" className="text-amber-400 text-[22px] mt-0.5" />
                <div>
                  <span className="font-label-md text-label-md text-white font-bold block mb-1">
                    Claridad Institucional y Operativa
                  </span>
                  <p className="font-body-sm text-body-sm text-slate-300 leading-relaxed">
                    ViaPrima opera como una empresa y centro de distribución
                    independiente. Colaboramos estrechamente con proveedores
                    logísticos aliados, especialmente{" "}
                    <strong className="text-white">99minutos</strong>,
                    gestionando la recepción de carga mayorista y la ejecución
                    directa de la última milla en nuestra zona de cobertura
                    autorizada.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-label-md text-label-md px-6 py-3.5 rounded-xl shadow-lg shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 font-bold"
              >
                <Icon icon="mdi:forum" className="text-[20px]" />
                <span>Habla con nosotros</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 bg-surface-container/90 border border-slate-700/80 backdrop-blur-md p-8 rounded-3xl flex flex-col gap-6 shadow-2xl">
            <article>
              <h2 className="font-headline-sm text-headline-sm text-white font-extrabold block">
                ViaPrima Hub
              </h2>
              <p className="font-label-sm text-label-sm text-amber-400">
                Centro Operativo Autorizado
              </p>
            </article>
            <div className="space-y-3 font-body-sm text-body-sm text-slate-300">
              <CheckList />
            </div>
            <div className="pt-4 border-t border-slate-800 bg-surface-container-low p-4 rounded-xl">
              <p className="font-label-sm text-label-sm text-tertiary block mb-2">
                ¿ Necesitas soporte con un envío ?
              </p>
              <Link
                href="/contacto"
                className="font-label-md text-label-md text-blue-400 hover:text-blue-300 flex items-center gap-1 font-bold"
              >
                <span>Ponte en contacto con nosotros</span>
                <Icon icon="arrow_forward" className="text-[16px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
