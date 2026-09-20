export type ServiceType = {
  id: string;
  icon: string;
  title: string;
  tag: string;
  description: string;
  bullets: string[];
  accent: string,
  highlight: string;
};

export const services: ServiceType[] = [
  {
    id: "df15ddc6",
    icon: "mdi:inbox",
    title: "Recepción de carga y paquetería",
    tag: "Recepción",
    description: "Recibimos de manera diaria la carga y paquetería proveniente del proveedor logístico principal. Realizamos verificación física, registro guía por guía y control de pesaje para garantizar consistencia.",
    bullets: [
      "Integración con el sistema de guías",
      "Escaneo, pesaje y registro inmediato",
      "Control de cantidad y condición del embalaje",
    ],
    accent: "bg-blue-950/60 border-blue-700/40 text-blue-400 group-hover:bg-blue-600 group-hover:text-blue-50",
    highlight: "border-blue-500/40 hover:shadow-blue-500/10",
  },
  {
    id: "1f9d4498",
    icon: "mdi:magnify",
    title: "Clasificación por cuadrantes",
    tag: "Organización",
    description: "Los paquetes se clasifican según su código postal, microzona y prioridad de entrega. Esta segmentación reduce el tiempo de último tramo y mejora la precisión en las rutas diarias.",
    bullets: [
      "Segmentación por sector",
      "Jerarquización de entregas prioritarias",
      "Despacho ordenado por ventanas horarias",
    ],
    accent: "bg-olive-800/60 border-olive-600/40 text-olive-400 group-hover:bg-olive-600 group-hover:text-olive-50",
    highlight: "border-olive-500/40 hover:shadow-olive-500/10",
  },
  {
    id: "ae2f2951",
    icon: "mdi:map",
    title: "Preparación y optimización de rutas",
    tag: "Despacho",
    description: "Preparamos los lotes de envío para cada repartidor con información completa de direcciones, orden de paradas y ventanas críticas, reduciendo interrupciones y demoras por direcciones imprecisas.",
    bullets: [
      "Documentación de entrega por repartidor",
      "Ordenamiento inteligente de paradas",
      "Reducción de reintentos",
    ],
    accent: "bg-purple-900/60 border-purple-600/50 text-purple-400 group-hover:bg-purple-600 group-hover:text-purple-50",
    highlight: "border-purple-500/40 hover:shadow-purple-500/10",
  },
  {
    id: "9a320731",
    icon: "material-symbols:local-shipping",
    title: "Reparto de última milla",
    tag: "Entrega",
    description: "Coordinamos la salida de flotillas locales hacia los domicilios con confirmación de entrega, fotografía y firma digital, manteniendo contacto directo con el equipo de reparto en todo momento.",
    bullets: [
      "Flotilla validada con geolocalización activa",
      "Confirmación fotográfica de cada paquete",
      "Enlace en tiempo real con la mesa de control",
    ],
    accent: "bg-amber-800/60 border-amber-700/50 text-amber-400 group-hover:bg-amber-600 group-hover:text-amber-50",
    highlight: "border-amber-500/40 hover:shadow-amber-500/10",
  },
  {
    id: "1c66c8a9",
    icon: "material-symbols:headset-mic",
    title: "Atención a incidencias",
    tag: "Soporte",
    description: "Canal de comunicación directo para atender paquetes dañados, direcciones incorrectas o devoluciones. El equipo de operación mantiene contactabilidad con los auxiliares y resuelve en el momento.",
    bullets: [
      "Canal directo con cuadrillas de reparto",
      "Protocolo para devoluciones y re-expedición",
      "Registro claro de incidentes para mejoras",
    ],
    accent: "bg-rose-800/60 border-rose-600/50 text-rose-300 group-hover:bg-rose-700 group-hover:text-rose-50",
    highlight: "border-rose-500/40 hover:shadow-rose-500/10",
  },
  {
    id: "39044797",
    icon: "mdi:monitor",
    title: "Control operativo y reportes",
    tag: "Control",
    description: "Monitoreamos KPI de puntualidad, tiempo de llegada, volumen procesado y estado de cada guía. Presentamos reportes consolidados para identificar desviaciones y corregir operación.",
    bullets: [
      "Métricas de puntualidad y volumen",
      "Indicadores por repartidor y ruta",
      "Reportes de acción para el cliente",
    ],
    accent: "bg-sky-800/50 border-sky-700/50 text-sky-300 group-hover:bg-sky-700 group-hover:text-sky-50",
    highlight: "border-sky-500/40 hover:shadow-sky-600/10",
  },
];
