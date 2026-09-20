export type OperativeCard = {
  index: string;
  icon: string;
  title: string;
  description: string;
  tag: string;
  cardHover: string;
  iconBox: string;
  numberStyles: string,
  tagColor: string;
};

export const cards: OperativeCard[] = [
  {
    index: "1",
    icon: "material-symbols:package-2-outline",
    title: "Recepción de paquetes",
    description: "Arribo programado de unidades directas de nuestros proveedores. Descarga automatizada, control volumétrico inicial e ingreso formal a inventario operativo.",
    tag: "Registro digital inmediato",
    cardHover: "hover:border-blue-500/50 hover:shadow-blue-500/10",
    iconBox: "bg-blue-950/60 border-blue-700/40 text-blue-400 group-hover:bg-blue-600 group-hover:text-white",
    numberStyles: "group-hover:bg-blue-500! group-hover:text-blue-50!",
    tagColor: "text-blue-400",
  },
  {
    index: "2",
    icon: "mdi:magnify",
    title: "Clasificación y organización",
    description: "Segmentación por código postal, zonas urbanas y planeación de rutas de entrega para garantizar una mejor entrega de productos.",
    tag: "Segmentación por microrutas",
    cardHover: "hover:border-red-500/50 hover:shadow-red-500/10",
    iconBox: "bg-rose-950/60 border-rose-700/40 text-rose-400 group-hover:bg-rose-600 group-hover:text-white",
    numberStyles: "group-hover:bg-rose-500! group-hover:text-rose-50!",
    tagColor: "text-rose-400",
  },
  {
    index: "3",
    icon: "mdi:clipboard-check-outline",
    title: "Preparación para reparto",
    description: "Verificación física de los paquetes y asignación de embarque asignadas a transportistas locales.",
    tag: "Revisión de integridad física",
    cardHover: "hover:border-amber-500/50 hover:shadow-amber-500/10",
    iconBox: "bg-amber-950/60 border-amber-700/40 text-amber-400 group-hover:bg-amber-600 group-hover:text-white",
    numberStyles: "group-hover:bg-amber-500! group-hover:text-amber-50!",
    tagColor: "text-amber-400",
  },
  {
    index: "4",
    icon: "material-symbols:delivery-truck-speed",
    title: "Distribución de última milla",
    description: "Despliegue de flotillas con navegación asistida en tiempo real para evitar atascos y asegurar ventanas horarias prometidas al usuario.",
    tag: "Rutas optimizadas dinámicas",
    cardHover: "hover:border-blue-500/50 hover:shadow-blue-500/10",
    iconBox: "bg-sky-950/60 border-sky-700/40 text-sky-400 group-hover:bg-sky-600 group-hover:text-sky-50",
    numberStyles: "group-hover:bg-sky-500! group-hover:text-sky-50!",
    tagColor: "text-sky-400",
  },
  {
    index: "5",
    icon: "material-symbols:home",
    title: "Entrega a domicilio",
    description: "Llegada directa al destinatario con confirmación por firma digital, comprobación de código de entrega y validación de identidad para máxima seguridad.",
    tag: "Confirmación de identidad",
    cardHover: "hover:border-red-500/50 hover:shadow-red-500/10",
    iconBox: "bg-teal-950/60 border-teal-700/40 text-teal-400 group-hover:bg-teal-600 group-hover:text-teal-50",
    numberStyles: "group-hover:bg-teal-500! group-hover:text-teal-50!",
    tagColor: "text-teal-400",
  },
  {
    index: "6",
    icon: "material-symbols:analytics",
    title: "Gestión operativa de los envíos",
    description: "Monitoreo continuo de incidencias, soporte de re-programación, seguimiento de paquetes rezagados y resolución proactiva ante contingencias.",
    tag: "Mesa de soporte proactiva",
    cardHover: "hover:border-slate-600",
    iconBox: "bg-indigo-800/80 border-indigo-700 text-indigo-300 group-hover:bg-indigo-700 group-hover:text-indigo-50",
    numberStyles: "group-hover:bg-indigo-500! group-hover:text-indigo-50!",
    tagColor: "text-indigo-400",
  },
];
