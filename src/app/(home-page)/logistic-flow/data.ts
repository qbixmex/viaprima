export type StepFlow = {
  id: string;
  badge: string;
  badgeClass: string;
  icon: string;
  iconBox: string;
  title: string;
  description: string;
};

export const stepsFlow: StepFlow[] = [
  {
    id: "d2t6",
    badge: "PASO 01",
    badgeClass: "bg-slate-800 text-slate-300 border-slate-700",
    icon: "mdi:truck",
    iconBox: "bg-[#1a2436] text-blue-400 border-slate-700",
    title: "Proveedor Logístico",
    description: "Transferencia inicial desde las bodegas centrales de 99minutos hacia nuestra terminal.",
  },
  {
    id: "f83j",
    badge: "PASO 02",
    badgeClass: "bg-blue-900/60 text-blue-300 border-blue-600/40",
    icon: "mdi:warehouse",
    iconBox: "bg-blue-950/60 text-blue-400 border-blue-700/40",
    title: "Centro ViaPrima",
    description: "Descarga, escaneo de ingreso en andén, pesaje y verificación de código de guía.",
  },
  {
    id: "9rh6",
    badge: "PASO 03",
    badgeClass: "bg-amber-900/60 text-amber-300 border-amber-600/40",
    icon: "mdi:magnify",
    iconBox: "bg-amber-950/60 text-amber-400 border-amber-700/40",
    title: "Clasificación",
    description: "Organización inteligente por cuadrantes urbanos y preparación en tolvas de despacho.",
  },
  {
    id: "95n2",
    badge: "PASO 04",
    badgeClass: "bg-red-900/60 text-red-300 border-red-600/40",
    icon: "mdi:map-check-outline",
    iconBox: "bg-red-950/60 text-red-400 border-red-700/40",
    title: "Ruta Optimizada",
    description: "Repartidor en trayecto con geolocalización activa y asignación de parada secuencial.",
  },
  {
    id: "f4c9",
    badge: "PASO 05",
    badgeClass: "bg-blue-600 text-white border-blue-600",
    icon: "mdi:done-all",
    iconBox: "bg-blue-600 text-white",
    title: "Entrega Exitosa",
    description: "Recepción en domicilio final, firma de acuse digital y notificación automática de entrega.",
  },
];
