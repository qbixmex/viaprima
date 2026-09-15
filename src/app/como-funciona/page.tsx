import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/cn";

const HUB_IMAGE = "/images/como_funciona_01_a8af751405e9.png";

const STEPS = [
  {
    num: "01",
    icon: "mdi:inbox",
    iconBox: "bg-blue-950/60 border-blue-700/40 text-blue-400",
    title: "Recepción en nuestro centro",
    desc: "Ingresan los paquetes desde el proveedor logístico 99minutos. Descargamos, escaneamos, pesamos y registramos en nuestro sistema de control interno en tiempo real.",
    badgeClass: "bg-blue-950/60 border-blue-700/40 text-blue-400",
  },
  {
    num: "02",
    icon: "mdi:magnify",
    iconBox: "bg-amber-950/60 border-amber-700/40 text-amber-400",
    title: "Clasificación y ordenamiento",
    desc: "Organizamos por sector, código postal y prioridad de entrega. Cada guía se asigna a su microruta y prepara para el despacho en tolvas por repartidor.",
    badgeClass: "bg-amber-950/60 border-amber-700/40 text-amber-400",
  },
  {
    num: "03",
    icon: "mdi:arrow-right",
    iconBox: "bg-red-950/60 border-red-700/40 text-red-400",
    title: "Preparación de rutas",
    desc: "Consolidamos las entregas por zona y asignamos las rutas a la flotilla de reparto con el orden de paradas y paquete de envío por entregador.",
    badgeClass: "bg-red-950/60 border-red-700/40 text-red-400",
  },
  {
    num: "04",
    icon: "mdi:truck-delivery",
    iconBox: "bg-blue-950/60 border-blue-700/40 text-blue-400",
    title: "Salida de última milla",
    desc: "El repartidor sale del centro con el lote asignado y geolocalización activa. Coordinamos el avance en tiempo real con la mesa de control de la ruta.",
    badgeClass: "bg-blue-950/60 border-blue-700/40 text-blue-400",
  },
];

const CADENCIA_STEPS = [
  {
    num: "01",
    icon: "mdi:truck",
    title: "Arribo al andén de Recepción",
    time: "10:00 a.m.",
    desc: "La unidad llega al centro ViaPrima con carga de paquetería identificada por guías.",
    color: "text-blue-400",
    box: "bg-blue-950/60 border-blue-700/40",
  },
  {
    num: "02",
    icon: "mdi:clipboard-text",
    title: "Verificación y registro",
    time: "10:30 a.m.",
    desc: "El operador verifica contra manifiesto el número de piezas y la integridad de cada paquete.",
    color: "text-amber-400",
    box: "bg-amber-950/60 border-amber-700/40",
  },
  {
    num: "03",
    icon: "mi:calendar",
    title: "Clasificación en tolvas",
    time: "12:00 p.m.",
    desc: "Los paquetes se distribuyen en tolvas por sector y repartidor asignado.",
    color: "text-red-400",
    box: "bg-red-950/60 border-red-700/40",
  },
  {
    num: "04",
    icon: "mdi:package-variant-closed",
    title: "Despacho paquetes",
    time: "01:00 p.m.",
    desc: "Se despachan los primeros lotes con folio de entrega para inicio de ruta.",
    color: "text-blue-400",
    box: "bg-blue-950/60 border-blue-700/40",
  },
];

const COBERTURA = [
  { zona: "Norte", detalle: "Plazas Comerciales y Fraccionamientos" },
  { zona: "Centro", detalle: "Calles Céntricas y Microcentro" },
  { zona: "Sur", detalle: "Zonas Residenciales y Avenidas Principales" },
  { zona: "Industrial", detalle: "Parques y Naves Industriales" },
];

const ComoFuncionaPage = () => {
  return (
    <div className="flex flex-col w-full">
      {/* HERO */}
      <section className="flex flex-col lg:flex-row max-w-7xl mx-auto py-10 px-gutter gap-8">
        <div className="w-full lg:w-1/2 relative overflow-hidden bg-[#0d1424] py-12 border-b border-slate-800/60">
          <div className="absolute -top-24 left-1/4 bg-blue-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
          <div className="max-w-7xl mx-auto px-gutter">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#131d31] border border-blue-500/30 mb-6">
              <span className="font-mono-tracking text-mono-tracking tracking-wider text-blue-400 uppercase font-bold">
                Cómo Funciona
              </span>
            </div>
            <h1 className="font-display-hero text-display-hero text-white tracking-tight leading-[1.08] mb-6 max-w-3xl text-balance">
              De la recepción a tu puerta en 4 pasos
            </h1>
            <p className="font-body-lg text-body-lg text-slate-300 max-w-2xl leading-relaxed">
              Operamos bajo un flujo claro y medible. Cada paquete transita por
              cuatro etapas verificables dentro de nuestro centro de distribución,
              siempre en sincronía con el proveedor logístico.
            </p>
            <div className="flex flex-wrap gap-3 mt-7">
              <Link
                href="/cobertura"
                className="inline-flex items-center gap-2 bg-blue-600 border border-slate-700 text-slate-100 hover:bg-blue-500 hover:text-white font-label-md text-label-md px-6 py-3.5 rounded-xl transition-all font-semibold"
              >
                <Icon icon="mdi:map" className="text-[24px]" />
                <span>Ver zonas de cobertura</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden shadow-2xl bg-surface-container border border-slate-800">
          <div className="relative h-72 w-full">
            <Image
              src={HUB_IMAGE}
              alt="Interior del hub de clasificación ViaPrima"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover opacity-90"
            />
          </div>
          <div className="p-6 bg-surface-container">
            <span className="font-mono-tracking text-mono-tracking text-red-400 uppercase tracking-wider">
              Centro ViaPrima
            </span>
            <h3 className="font-headline-md text-headline-md text-white font-bold mb-2">
              Un flujo, un solo objetivo
            </h3>
            <p className="font-body-sm text-body-sm text-slate-400 leading-relaxed mb-4">
              Cada paquete recibe un tratamiento estandarizado que permite
              conocer en qué etapa se encuentra SIEMPRE.
            </p>
          </div>
        </div>
      </section>

      {/* FLUJO 4 PASOS + HUB */}
      <section className="w-full py-10 bg-background">
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
            {STEPS.map((step) => (
              <div
                key={step.num}
                className="w-full p-6 rounded-2xl bg-surface-container border border-slate-800 shadow-md hover:border-slate-600 transition-all flex gap-5 hover:translate-x-1"
              >
                <div
                  className={cn(
                    "size-14 shrink-0 rounded-2xl border flex items-center justify-center",
                    step.iconBox
                  )}
                >
                  <Icon icon={step.icon} className="text-[26px]" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1.5">
                    <span
                      className={cn(
                        "font-mono-tracking text-mono-tracking px-2 py-0.5 rounded-full border font-bold",
                        step.badgeClass
                      )}
                    >
                      PASO {step.num}
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-white font-bold mb-1">
                    {step.title}
                  </h3>
                  <p className="font-body-md text-body-md text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CADENCIA DIARIA + COBERTURA */}
      <section className="w-full py-24 bg-surface-container-low border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="max-w-2xl mb-12">
            <div className="flex items-center gap-2 text-amber-400 font-mono-tracking text-mono-tracking uppercase tracking-wider mb-2">
              <Icon icon="mdi:clock" className="text-[24px]" />
              <span>Cadencia Operativa Diaria</span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-white font-extrabold tracking-tight mb-4">
              Un día típico de operación
            </h2>
            <p className="font-body-lg text-body-lg text-slate-300 leading-relaxed">
              Estos tiempos son una referencia de la dinámica del centro. La
              cadencia puede variar según el volumen diario y el tipo de despacho
              programado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {CADENCIA_STEPS.map((step, index) => (
              <div
                key={step.num}
                className="p-6 rounded-2xl bg-surface-container border border-slate-800 shadow-md text-center relative group hover:border-slate-600 transition-all"
              >
                <span className="font-mono-tracking text-mono-tracking text-slate-600 font-extrabold absolute top-4 right-5">
                  {step.num}
                </span>
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl border flex items-center justify-center mx-auto mb-4 transition-colors",
                    step.box
                  )}
                >
                  <Icon icon={step.icon} className="text-[22px]" />
                </div>
                <span className={cn("font-headline-sm text-headline-sm font-bold block mb-1", step.color)}>
                  {step.time}
                </span>
                <h3 className="font-headline-sm text-headline-sm text-white font-bold mb-2 leading-tight">
                  {step.title}
                </h3>
                <p className="font-body-sm text-body-sm text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
                {index < CADENCIA_STEPS.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-[#1e293b] border border-slate-700 text-blue-400 items-center justify-center shadow-md">
                    <Icon icon="mdi:chevron-right" className="text-[24px]" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* COBERTURA */}
          <div className="p-8 md:p-12 rounded-3xl bg-surface-container border border-slate-800 shadow-xl">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-950/60 border border-blue-700/40 text-blue-400 flex items-center justify-center">
                  <Icon icon="mdi:location" className="text-[26px]" />
                </div>
                <div>
                  <span className="font-mono-tracking text-mono-tracking text-blue-400 uppercase tracking-wider">
                    Zonas de Cobertura
                  </span>
                  <h3 className="font-headline-md text-headline-md text-white font-extrabold">
                    Despliegue por sectores
                  </h3>
                </div>
              </div>
              <Link
                href="/cobertura"
                className="inline-flex items-center gap-2 bg-surface-container-low border border-slate-700 text-slate-200 hover:border-blue-500/60 hover:text-white font-label-md text-label-md px-5 py-3 rounded-xl transition-all font-semibold"
              >
                <span>Ver detalle completo</span>
                <Icon icon="mdi:chevron-right" className="text-[24px]" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {COBERTURA.map((zone) => (
                <div
                  key={zone.zona}
                  className="p-5 rounded-2xl bg-surface-container-low border border-slate-800 hover:border-blue-500/40 transition-all"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <Icon icon="mdi:location" className="text-blue-400 text-[20px]" />
                    <span className="font-headline-sm text-headline-sm text-white font-bold">
                      {zone.zona}
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-slate-400 leading-snug">
                    {zone.detalle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComoFuncionaPage;