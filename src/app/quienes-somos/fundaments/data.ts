export type StatisticType = {
  id: string;
  icon: string;
  value: string;
  label: string;
};

export const statistics: StatisticType[] = [
  { id: "f3g7", icon: "package_2", value: "100k+", label: "Paquetes procesados" },
  { id: "gph6", icon: "schedule", value: "24/7", label: "Operación continua" },
  { id: "b765", icon: "maps_ugc", value: "98.2%", label: "Satisfacción de entrega" },
  { id: "8y54", icon: "link", value: "100%", label: "Sincronía con 99minutos" },
];


export type FundamentType = {
  id: string;
  icon: string;
  title: string;
  desc: string;
  color: string;
  box: string;
};

export const fundaments: FundamentType[] = [
  {
    id: "fi7g",
    icon: "mdi:chart-line",
    title: "Eficiencia",
    desc: "Un mismo objetivo: distribuir bien. Minimizamos tiempos muertos, estandarizamos movimientos y validamos cada entrega para que el flujo operativo nunca se detenga.",
    color: "text-blue-400",
    box: "bg-blue-950/50 border-blue-700/40",
  },
  {
    id: "f4ug",
    icon: "mdi:handshake",
    title: "Confianza",
    desc: "Saber dónde está tu envío, en qué etapa y cuándo llegará. Construida sobre seguimiento digital, registro de guías y comunicación constante entre el proveedor logístico y nosotros.",
    color: "text-amber-400",
    box: "bg-amber-950/50 border-amber-700/40",
  },
  {
    id: "47fu",
    icon: "mdi:trending-up",
    title: "Calidad",
    desc: "Estandarización en recepción, clasificación y despacho. Trabajamos con indicadores de precisión por microruta y medimos resultados para mejorar cada ciclo de distribución.",
    color: "text-red-400",
    box: "bg-red-950/50 border-red-700/40",
  },
  {
    id: "d8gu",
    icon: "mdi:people",
    title: "Personas",
    desc: "Operación humana como diferenciador: no somos un punto ciego en el flujo logístico, somos el equipo que cuida, organiza y pone de tu lado cada paquete.",
    color: "text-blue-400",
    box: "bg-blue-950/50 border-blue-700/40",
  },
];
