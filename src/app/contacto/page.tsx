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
              para la clasificación y despacho de paquetería de última milla.
            </p>
          </div>

          {/* Mapa decorativo SVG */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-surface-container border border-slate-800">
            <div className="relative h-105 w-full">
              <div className="absolute inset-0">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 1200 420"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid slice"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                      <path d="M60 0H0V60" fill="none" stroke="#334155" strokeWidth="0.6" opacity="0.35" />
                    </pattern>
                    <linearGradient id="glow" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#ff4d5a" stopOpacity="0.25" />
                    </linearGradient>
                  </defs>
                  <rect width="1200" height="420" fill="#0d1424" />
                  <rect width="1200" height="420" fill="url(#grid)" />
                  {/* Principales avenidas */}
                  <path d="M0 220 C 150 190, 260 300, 400 250 S 700 120, 850 210 S 1080 300, 1200 250" stroke="#1e293b" strokeWidth="10" fill="none" opacity="0.8" />
                  <path d="M180 0 C 210 120, 120 240, 240 420" stroke="#1e293b" strokeWidth="8" fill="none" opacity="0.8" />
                  <path d="M520 0 C 490 130, 560 260, 530 420" stroke="#1e293b" strokeWidth="8" fill="none" opacity="0.8" />
                  <path d="M0 100 C 260 130, 420 60, 620 110 S 980 150, 1200 90" stroke="#1e293b" strokeWidth="5" fill="none" opacity="0.6" />
                  {/* Recorrido del envío */}
                  <path d="M320 200 C 420 170, 470 230, 560 210 S 700 150, 760 190 S 880 240, 950 180" stroke="url(#glow)" strokeWidth="4" strokeLinecap="round" strokeDasharray="12 10" fill="none" />
                  {/* Nodos de tránsito */}
                  {[
                    [520, 200],
                    [680, 190],
                    [830, 210],
                  ].map(([cx, cy]) => (
                    <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="6" fill="#0a0f1d" stroke="#64748b" strokeWidth="2" />
                  ))}
                  {/* Destino final */}
                </svg>

                {/* Pin Hub */}
                <div className="absolute top-[44%] left-[27%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5">
                  <div className="px-3.5 py-2 rounded-xl bg-background/90 backdrop-blur-md border border-blue-500/60 shadow-xl flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-600/40">
                      <Icon icon="mdi:warehouse" className="text-[18px]" />
                    </div>
                    <div className="text-left">
                      <span className="font-label-md text-label-md text-white font-bold block leading-tight">
                        Hub ViaPrima
                      </span>
                      <span className="font-label-sm text-label-sm text-blue-300">
                        Zona Metropolitana
                      </span>
                    </div>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-blue-500 border-2 border-background shadow-[0_0_12px_rgba(59,130,246,0.9)]" />
                </div>

                {/* Destiny Pin */}
                <div className="absolute top-[40%] right-[20%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5">
                  <div className="px-3.5 py-2 rounded-xl bg-background/90 backdrop-blur-md border border-red-500/60 shadow-xl flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-red-600 text-white flex items-center justify-center shadow-md shadow-red-600/40">
                      <Icon icon="mdi:map-marker" className="text-[18px]" />
                    </div>
                    <div className="text-left">
                      <span className="font-label-md text-label-md text-white font-bold block leading-tight">
                        Domicilio Destino
                      </span>
                      <span className="font-label-sm text-label-sm text-red-300">
                        Última milla
                      </span>
                    </div>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-red-500 border-2 border-background shadow-[0_0_12px_rgba(255,77,90,0.9)]" />
                </div>

                {/* Chip de ruta */}
                <div className="absolute bottom-5 left-5 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-background/90 backdrop-blur-md border border-slate-700 shadow-lg">
                  <Icon icon="ic:twotone-route" className="text-amber-400 text-[20px]" />
                  <span className="font-label-md text-label-md text-slate-200">
                    Ruta 12:{" "}
                    <strong className="text-white">Centro &amp; Corporativo</strong>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-6 bg-surface-container flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 font-label-md text-label-md text-slate-300">
                <Icon icon="storefront" className="text-blue-400 text-[20px]" />
                <span>
                  Calle Arista #123, Guadalajara, Jalisco, México
                </span>
              </div>
              <div className="flex items-center gap-2 font-label-sm text-label-sm text-slate-400">
                <Icon icon="satellite_alt" className="text-amber-400 text-[18px]" />
                <span>Visitas con cita previa</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactoPage;