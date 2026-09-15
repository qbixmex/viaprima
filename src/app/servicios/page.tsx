import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/cn";

const WAREHOUSE_IMAGE = "/images/servicios_01_871bfa552171.png";

const SERVICES = [
  {
    icon: "mdi:inbox",
    title: "Recepción de carga y paquetería",
    tag: "Recepción",
    desc: "Recibimos de manera diaria la carga y paquetería proveniente del proveedor logístico principal. Realizamos verificación física, registro guía por guía y control de pesaje para garantizar consistencia.",
    bullets: [
      "Integración con el sistema de guías de 99minutos",
      "Escaneo, pesaje y registro inmediato",
      "Control de cantidad y condición del embalaje",
    ],
    accent: "bg-blue-950/60 border-blue-700/40 text-blue-400 group-hover:bg-blue-600 group-hover:text-white",
    highlight: "border-blue-500/40 hover:shadow-blue-500/10",
  },
  {
    icon: "mdi:magnify",
    title: "Clasificación por cuadrantes",
    tag: "Organización",
    desc: "Los paquetes se clasifican según su código postal, microzona y prioridad de entrega. Esta segmentación reduce el tiempo de último tramo y mejora la precisión en las rutas diarias.",
    bullets: [
      "Segmentación por sector y microruta",
      "Jerarquización de entregas prioritarias",
      "Despacho ordenado por ventanas horarias",
    ],
    accent: "bg-amber-950/60 border-amber-500/40 text-amber-400 group-hover:bg-amber-600 group-hover:text-white",
    highlight: "border-amber-500/40 hover:shadow-amber-500/10",
  },
  {
    icon: "mdi:map",
    title: "Preparación y optimización de rutas",
    tag: "Despacho",
    desc: "Preparamos los lotes de envío para cada repartidor con información completa de direcciones, orden de paradas y ventanas críticas, reduciendo interrupciones y demoras por direcciones imprecisas.",
    bullets: [
      "Documentación de entrega por repartidor",
      "Ordenamiento inteligente de paradas",
      "Reducción de reintentos y TMR extrema",
    ],
    accent: "bg-red-950/60 border-red-700/40 text-red-400 group-hover:bg-red-600 group-hover:text-white",
    highlight: "border-red-500/40 hover:shadow-red-500/10",
  },
  {
    icon: "mdi:local-shipping",
    title: "Reparto de última milla",
    tag: "Entrega",
    desc: "Coordinamos la salida de flotillas locales hacia los domicilios con confirmación de entrega, fotografía y firma digital, manteniendo contacto directo con el equipo de reparto en todo momento.",
    bullets: [
      "Flotilla validada con geolocalización activa",
      "Confirmación fotográfica de cada paquete",
      "Enlace en tiempo real con la mesa de control",
    ],
    accent: "bg-blue-950/60 border-blue-700/40 text-blue-400 group-hover:bg-blue-600 group-hover:text-white",
    highlight: "border-blue-500/40 hover:shadow-blue-500/10",
  },
  {
    icon: "mdi:headset-mic",
    title: "Atención a incidencias",
    tag: "Soporte",
    desc: "Canal de comunicación directo para atender paquetes dañados, direcciones incorrectas o devoluciones. El equipo de operación mantiene contactabilidad con los auxiliares y resuelve en el momento.",
    bullets: [
      "Canal directo con cuadrillas de reparto",
      "Protocolo para devoluciones y reexpedición",
      "Registro claro de incidentes para mejoras",
    ],
    accent: "bg-red-950/60 border-red-700/40 text-red-400 group-hover:bg-red-600 group-hover:text-white",
    highlight: "border-red-500/40 hover:shadow-red-500/10",
  },
  {
    icon: "mdi:monitor",
    title: "Control operativo y reportes",
    tag: "Control",
    desc: "Monitoreamos KPI de puntualidad, tiempo de llegada, volumen procesado y estado de cada guía. Presentamos reportes consolidados para identificar desviaciones y corregir operación.",
    bullets: [
      "Métricas de puntualidad y volumen",
      "Indicadores por repartidor y ruta",
      "Reportes accionables para el cliente",
    ],
    accent: "bg-slate-800 border-slate-700 text-slate-300 group-hover:bg-slate-700 group-hover:text-white",
    highlight: "border-slate-600 hover:shadow-slate-600/10",
  },
];

const CHANNELS = [
  {
    icon: "mdi:email",
    title: "Correo directo",
    desc: "Documentación formal, acuerdos y seguimiento de incidencias.",
    value: "operaciones@viaprima.mx",
    color: "text-blue-400",
    box: "bg-blue-950/50 border-blue-700/40",
  },
  {
    icon: "mdi:support",
    title: "Mesa de control",
    desc: "Línea directa con el centro para dudas puntuales de guías o despachos.",
    value: "Mesa 24/7 disponible",
    color: "text-amber-400",
    box: "bg-amber-900/50 border-amber-500/50",
  },
  {
    icon: "mdi:map-marker",
    title: "Puntos de contacto",
    desc: "Coordinadores designados para enlace continuo entre el proveedor y el centro.",
    value: "Soporte exclusivo",
    color: "text-red-400",
    box: "bg-red-950/50 border-red-700/40",
  },
];

const ServiciosPage = () => {
  return (
    <div className="flex flex-col w-full">
      {/* HERO */}
      <section className="relative w-full overflow-hidden bg-[#0d1424] py-24 border-b border-slate-800/60">
        <div className="absolute -top-24 left-1/4 w-[480px] h-[480px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#131d31] border border-blue-500/30 mb-6">
            <span className="font-mono-tracking text-mono-tracking tracking-wider text-blue-400 uppercase font-bold">
              Servicios de Distribución
            </span>
          </div>
          <h1 className="font-display-hero text-display-hero text-white tracking-tight leading-[1.08] mb-6 max-w-3xl text-balance">
            Servicios que conectan tu carga con el destino final
          </h1>
          <p className="font-body-lg text-body-lg text-slate-300 max-w-2xl leading-relaxed">
            Operamos como un{" "}
            <strong className="text-white">centro de distribución de última
              milla</strong>: recibimos, clasificamos y alistamos la paquetería de
            nuestro proveedor logístico para que cada envío llegue a tiempo y en
            las condiciones correctas.
          </p>
        </div>
      </section>

      {/* FOTO + INTRO */}
      <section className="w-full py-24 bg-background">
        <div className="max-w-7xl mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 text-blue-400 font-mono-tracking text-mono-tracking uppercase tracking-wider mb-3">
              <Icon icon="mdi:circle" className="text-[12px]" />
              <span>Ecosistema de Servicios</span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-white font-extrabold tracking-tight mb-6">
              Un solo operador para toda la última milla
            </h2>
            <div className="space-y-4">
              <p className="font-body-lg text-body-lg text-slate-300 leading-relaxed">
                Cada servicio está diseñado para mantener el flujo operativo
                en movimiento: desde que el paquete llega a nuestro andén hasta
                que un repartidor lo entrega en el domicilio destino.
              </p>
              <p className="font-body-md text-body-md text-slate-50 leading-relaxed">
                La operación funciona en conjunto con el proveedor logístico{" "}
                <strong className="font-bold">99minutos</strong>: la carga se
                recibe en nuestras instalaciones, se clasifica y se prepara para
                la distribución final, alineados a sus estándares y sistemas de
                guías.
              </p>
            </div>
            <div className="mt-8 p-5 rounded-2xl bg-surface-container border border-slate-800 flex flex-col items-start gap-2 shadow-md">
              <h3 className="font-headline-lg text-xl text-amber-400 leading-relaxed font-bold">
                <strong>
                  Somos complemento, no competencia
                </strong>
              </h3>
              <p className="font-body-md leading-space-lg">
                La sinergia operacional con el proveedor logístico maximiza la cobertura y asegura entregas continuas.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 bg-linear-to-tr from-blue-600/20 via-transparent to-amber-500/10 rounded-3xl pointer-events-none" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-surface-container border border-slate-800">
              <div className="relative h-100 w-full">
                <Image
                  src={WAREHOUSE_IMAGE}
                  alt="Zona de almacenamiento y racks del centro ViaPrima"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover opacity-90"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 left-6 bg-surface-container border border-slate-700 p-4 rounded-2xl shadow-2xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-600/30">
                <Icon icon="mdi:link-variant" className="text-[22px]" />
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-white font-bold leading-tight">
                  Servicios Integrados
                </span>
                <span className="font-label-sm text-label-sm text-slate-400">
                  Cadena completa bajo un mismo techo
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="w-full py-24 bg-surface-container-low border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-amber-400 font-mono-tracking text-mono-tracking uppercase tracking-wider mb-2">
                <Icon icon="view_module" className="text-[18px]" />
                <span>Oferta de Valor</span>
              </div>
              <h2 className="font-headline-xl text-headline-xl text-white font-extrabold tracking-tight mb-4">
                Nuestra oferta de valor
              </h2>
              <p className="font-body-lg text-body-lg text-slate-300 leading-relaxed">
                En cada servicio entregamos resultados medibles y comunicación
                constante para que la operación sea transparente de inicio a fin.
              </p>
            </div>
            <Link
              href="/contacto"
              className="shrink-0 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-label-md text-label-md px-6 py-3.5 rounded-xl shadow-lg shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 font-bold"
            >
              <Icon icon="mail" className="text-[20px]" />
              <span>Solicitar servicio</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className={cn(
                  "group p-8 rounded-2xl bg-surface-container border shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col",
                  service.highlight
                )}
              >
                <div className="flex items-center justify-between mb-5">
                  <span
                    className={cn(
                      "font-mono-tracking text-mono-tracking px-2.5 py-1 rounded-full border uppercase",
                      service.accent.split(" ").slice(0, 3).join(" ")
                    )}
                  >
                    {service.tag}
                  </span>
                  <div
                    className={cn(
                      "w-12 h-12 rounded-xl border flex items-center justify-center transition-colors",
                      service.accent
                    )}
                  >
                    <Icon icon={service.icon} className="text-[26px]" />
                  </div>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-white font-bold mb-3">
                  {service.title}
                </h3>
                <p className="font-body-md text-body-md text-slate-300 leading-relaxed mb-5">
                  {service.desc}
                </p>
                <ul className="mt-auto space-y-2.5 pt-5 border-t border-slate-800/80">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5">
                      <Icon icon="check_circle" className="text-blue-400 text-[18px] mt-0.5" />
                      <span className="font-body-sm text-body-sm text-slate-300 leading-snug">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CANALES */}
      <section className="w-full py-20 bg-[#0a0f1d]">
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="rounded-3xl bg-[#131c2e] border border-slate-800 p-8 md:p-12 shadow-xl">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-10">
              <div className="max-w-xl">
                <div className="flex items-center gap-2 text-red-400 font-mono-tracking text-mono-tracking uppercase tracking-wider mb-2">
                  <Icon icon="alternate_email" className="text-[18px]" />
                  <span>Vías de Atención Operativa</span>
                </div>
                <h2 className="font-headline-xl text-headline-xl text-white font-extrabold tracking-tight">
                  Canales de comunicación efectivos
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-10 px-4 rounded-xl bg-[#0d1424] border border-slate-800 text-slate-200 font-label-md text-label-md flex items-center gap-2 shadow-sm">
                  <Icon icon="schedule_send" className="text-amber-400 text-[18px]" />
                  <span>Respuesta garantizada en jornada operativa</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {CHANNELS.map((channel) => (
                <div
                  key={channel.title}
                  className="p-6 rounded-2xl bg-surface-container-low border border-slate-800 hover:border-slate-700 transition-all flex flex-col items-start"
                >
                  <div
                    className={cn(
                      "w-12 h-12 rounded-xl border flex items-center justify-center mb-4",
                      channel.box
                    )}
                  >
                    <Icon icon={channel.icon} className="text-[24px]" />
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-white font-bold mb-2">
                    {channel.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-slate-400 leading-relaxed mb-4">
                    {channel.desc}
                  </p>
                  <span
                    className={cn(
                      "font-label-md text-label-md mt-auto font-bold flex items-center gap-1.5",
                      channel.color
                    )}
                  >
                    <Icon icon="verified" className="text-[18px]" />
                    {channel.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiciosPage;