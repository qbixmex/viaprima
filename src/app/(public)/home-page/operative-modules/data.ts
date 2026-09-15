export type OperativeCard = {
  index: string;
  icon: string;
  title: string;
  desc: string;
  tagIcon: string;
  tag: string;
  cardHover: string;
  iconBox: string;
  tagColor: string;
};

export const cards: OperativeCard[] = [
  {
    index: "01",
    icon: "mdi:package-down",
    title: "Recepción de paquetes",
    desc: "Arribo programado de unidades directas de nuestros proveedores. Descarga automatizada, control volumétrico inicial e ingreso formal a inventario operativo.",
    tagIcon: "qr_code_scanner",
    tag: "Registro digital inmediato",
    cardHover: "hover:border-blue-500/50 hover:shadow-blue-500/10",
    iconBox: "bg-blue-950/60 border-blue-700/40 text-blue-400 group-hover:bg-blue-600 group-hover:text-white",
    tagColor: "text-blue-400",
  },
  {
    index: "02",
    icon: "mdi:magnify",
    title: "Clasificación y organización",
    desc: "Segmentación por código postal, zonas urbanas y planeación de rutas de entrega para garantizar una mejor entrega de productos.",
    tagIcon: "sort",
    tag: "Segmentación por microrutas",
    cardHover: "hover:border-red-500/50 hover:shadow-red-500/10",
    iconBox: "bg-red-950/60 border-red-700/40 text-red-400 group-hover:bg-red-600 group-hover:text-white",
    tagColor: "text-red-400",
  },
  {
    index: "03",
    icon: "mdi:clipboard-check-outline",
    title: "Preparación para reparto",
    desc: "Verificación física de los paquetes y asignación de embarque asignadas a transportistas locales.",
    tagIcon: "checklist_rtl",
    tag: "Revisión de integridad física",
    cardHover: "hover:border-amber-500/50 hover:shadow-amber-500/10",
    iconBox: "bg-amber-950/60 border-amber-700/40 text-amber-400 group-hover:bg-amber-600 group-hover:text-white",
    tagColor: "text-amber-400",
  },
  {
    index: "04",
    icon: "mdi:truck-delivery-outline",
    title: "Distribución de última milla",
    desc: "Despliegue de flotillas con navegación asistida en tiempo real para evitar atascos y asegurar ventanas horarias prometidas al usuario.",
    tagIcon: "navigation",
    tag: "Rutas optimizadas dinámicas",
    cardHover: "hover:border-blue-500/50 hover:shadow-blue-500/10",
    iconBox: "bg-blue-950/60 border-blue-700/40 text-blue-400 group-hover:bg-blue-600 group-hover:text-white",
    tagColor: "text-blue-400",
  },
  {
    index: "05",
    icon: "mdi:home",
    title: "Entrega a domicilio",
    desc: "Llegada directa al destinatario con confirmación por firma digital, comprobación de código de entrega y validación de identidad para máxima seguridad.",
    tagIcon: "verified_user",
    tag: "Confirmación de identidad",
    cardHover: "hover:border-red-500/50 hover:shadow-red-500/10",
    iconBox: "bg-red-950/60 border-red-700/40 text-red-400 group-hover:bg-red-600 group-hover:text-white",
    tagColor: "text-red-400",
  },
  {
    index: "06",
    icon: "mdi:analytics",
    title: "Gestión operativa de los envíos",
    desc: "Monitoreo continuo de incidencias, soporte de re-programación, seguimiento de paquetes rezagados y resolución proactiva ante contingencias.",
    tagIcon: "support_agent",
    tag: "Mesa de soporte proactiva",
    cardHover: "hover:border-slate-600",
    iconBox: "bg-slate-800/80 border-slate-700 text-slate-300 group-hover:bg-slate-700 group-hover:text-white",
    tagColor: "text-blue-400",
  },
];
