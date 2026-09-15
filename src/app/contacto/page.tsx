import Image from "next/image";
import { ContactForm } from "@/app/contacto/contact-form";
import { Icon } from "@iconify/react";

const CONTACTO_HERO_IMAGE = "/images/contacto_01_b9e4caa64fca.png";

const INFO_CARDS = [
  {
    icon: "mdi:schedule",
    title: "Horario de Atención",
    description: "Lunes a Viernes: 8:00 a.m. - 6:00 p.m. Sábados: 9:00 a.m. - 2:00 p.m. Domingos: Recepción y soporte 24/7.",
    color: "bg-blue-950/60 border-blue-700/40 text-blue-400",
  },
  {
    icon: "mdi:call",
    title: "Línea de Contacto",
    description: "331-234-5678",
    color: "bg-amber-950/60 border-amber-700/40 text-amber-400",
  },
  {
    icon: "mdi:alternate-email",
    title: "Correo Electrónico",
    description: "contacto@viaprima.mx",
    color: "bg-red-950/60 border-red-700/40 text-red-400",
  },
];

const ContactoPage = () => {
  return (
    <div className="flex flex-col w-full">
      {/* HERO */}
      <section className="relative w-full overflow-hidden bg-surface-container-low py-24 border-b border-slate-800/60">
        <div className="absolute -top-24 left-1/4 size-120 bg-blue-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#131d31] border border-blue-500/30 mb-6">
              <span className="font-mono-tracking text-mono-tracking tracking-wider text-blue-400 uppercase font-bold">
                Contacto
              </span>
            </div>

            <h1 className="font-display-hero text-display-hero text-white tracking-tight leading-[1.08] mb-6 text-balance">
              Hablemos sobre tu próxima entrega
            </h1>

            <p className="font-body-lg text-body-lg text-slate-300 max-w-xl leading-relaxed">
              ¿Tienes dudas sobre un envío, un servicio o deseas información sobre
              nuestros canales de distribución? Escríbenos y te atenderemos con
              el mismo compromiso que ponemos en cada paquete.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              {INFO_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="flex gap-3 p-5 rounded-2xl bg-surface-container border border-slate-800 shadow-md hover:border-slate-700 transition-all"
                >
                  <div
                    className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-3 ${card.color}`}
                  >
                    <Icon icon={card.icon} className="text-[22px]" />
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-white font-bold mb-1">
                      {card.title}
                    </h3>
                    <p className="font-body-sm text-body-sm text-slate-300 leading-snug">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 bg-linear-to-tr from-blue-600/20 via-transparent to-red-600/10 rounded-3xl pointer-events-none" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-surface-container border border-slate-800">
              <div className="relative h-90 w-full">
                <Image
                  src={CONTACTO_HERO_IMAGE}
                  alt="Sala de control y atención al cliente ViaPrima"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover opacity-90"
                />
              </div>
              <div className="p-6 bg-surface-container">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-600/30">
                    <Icon icon="mdi:question-answer" className="text-[22px]" />
                  </div>
                  <div>
                    <span className="font-headline-sm text-headline-sm text-white font-bold block">
                      Atención personalizada
                    </span>
                    <span className="font-label-sm text-label-sm text-amber-400">
                      Tiempo de respuesta &lt; 2 hrs hábiles
                    </span>
                  </div>
                </div>
                <p className="font-body-sm text-body-sm text-slate-300 leading-relaxed">
                  Cada mensaje es atendido por un ejecutivo de operaciones que
                  conoce el flujo logístico a detalle, no por un bot.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM + FAQ */}
      <section className="w-full max-w-7xl mx-auto px-gutter py-20 bg-background">
        <ContactForm />
      </section>

      {/* MAPA */}
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
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.630900310791!2d-103.36085642488038!3d20.687757380877667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b1e0046ab13f%3A0xbee44453dd9be284!2sC.%20Arista%201456%2C%20Artesanos%2C%2044200%20Guadalajara%2C%20Jal.!5e1!3m2!1ses-419!2smx!4v1789515447337!5m2!1ses-419!2smx"
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
                <span>
                  Calle Arista #1456, Guadalajara, Jalisco, México
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactoPage;