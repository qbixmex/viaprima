"use client";

import type { FC, SubmitEvent } from "react";
import { useState } from "react";
import { Icon } from "@iconify/react";

const inputClasses =
  "w-full p-2.5 rounded-lg bg-[#0c1322] border border-slate-700/70 text-white placeholder:text-slate-500 text-body-md font-body-md focus:bg-[#10192e] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 outline-none transition-all";

export const ContactForm: FC = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <div className="lg:col-span-7 bg-surface-container border border-slate-800/90 rounded-2xl shadow-xl p-space-lg md:p-space-xl relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-48 h-48 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />
      <div className="flex items-center justify-between gap-4 pb-space-md border-b border-slate-800">
        <div>
          <span className="font-mono-tracking text-mono-tracking text-blue-400 uppercase tracking-wider">
            Mensajería Directa
          </span>
          <h2 className="font-headline-md text-headline-md text-white font-bold mt-0.5">
            Envíanos un mensaje
          </h2>
          <p className="font-body-sm text-body-sm text-slate-400 mt-1">
            Completa tus datos y nos pondremos en contacto a la brevedad posible.
          </p>
        </div>
        <div className="hidden sm:flex w-12 h-12 rounded-xl bg-[#1c273e] border border-slate-700/60 items-center justify-center shadow-inner">
          <Icon icon="mdi:mail-ru" className="text-2xl text-blue-200" />
        </div>
      </div>

      <form className="space-y-space-md mt-6" onSubmit={handleSubmit}>
        {/* Nombre y correo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
          <div className="flex flex-col gap-1.5">
            <label className="font-label-md text-label-md text-slate-200" htmlFor="contact-name">
              Nombre completo
            </label>
            <div className="relative flex items-center">
              <input
                id="contact-name"
                required
                type="text"
                className={inputClasses}
              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-label-md text-label-md text-slate-200" htmlFor="contact-email">
              Correo electrónico
            </label>
            <input id="contact-email" required type="email" className={inputClasses} />
          </div>
        </div>

        {/* Teléfono */}
        <div className="flex flex-col gap-1.5">
          <label className="font-label-md text-label-md text-slate-200" htmlFor="contact-phone">
            Teléfono / Celular
          </label>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-3 py-2.5 rounded-lg bg-[#182338] border border-slate-700/60 text-slate-200 text-label-md font-label-md select-none shrink-0">
              <span>🇲🇽</span> <span>+52</span>
            </div>
            <input id="contact-phone" type="tel" placeholder="331-123-4567" className={inputClasses} />
          </div>
        </div>

        {/* Mensaje */}
        <div className="flex flex-col gap-1.5">
          <label className="font-label-md text-label-md text-slate-200" htmlFor="contact-message">
            Mensaje
          </label>
          <textarea
            id="contact-message"
            required
            rows={5}
            className="w-full p-3.5 rounded-lg bg-[#0c1322] border border-slate-700/70 text-white placeholder:text-slate-500 text-body-md font-body-md focus:bg-[#10192e] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 outline-none transition-all resize-none"
          />
        </div>

        {/* Consentimiento */}
        <label className="flex items-start gap-3 cursor-pointer pt-1">
          <input
            required
            type="checkbox"
            className="mt-1 w-4 h-4 rounded text-blue-600 focus:ring-blue-500 bg-[#0c1322] border-slate-700"
          />
          <span className="font-body-sm text-body-sm text-slate-400">
            Acepto la{" "}
            <span className="text-blue-400 font-semibold hover:underline">
              política de privacidad
            </span>{" "}
            y tratamiento de datos para atención y gestión logística de ViaPrima.
          </span>
        </label>

        {/* Acción */}
        <div className="pt-2 flex justify-end items-stretch">
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-label-md text-label-md active:scale-95 transition-colors duration-300 ease-in-out"
          >
            <span>Enviar mensaje</span>
            <Icon icon="mdi:send" className="text-[20px] transform -rotate-45" />
          </button>
        </div>
      </form>

      {sent && (
        <div className="mt-4 p-4 rounded-lg bg-[#1a2b42] border border-blue-500/40 text-white flex items-center gap-3">
          <Icon icon="check_circle" className="text-blue-400 text-2xl" />
          <div className="text-body-sm font-body-sm">
            <p className="font-bold text-white">¡Mensaje recibido con éxito!</p>
            <p className="text-slate-300">
              Un ejecutivo de operaciones se pondrá en contacto al correo o
              teléfono proporcionado.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}