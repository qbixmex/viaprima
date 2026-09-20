export type Channel = {
  id: string;
  icon: string;
  title: string;
  description: string;
  value: string;
  color: string;
  box: string;
};

export const channels: Channel[] = [
  {
    id: "8dc0ffa6",
    icon: "mdi:email",
    title: "Correo directo",
    description: "Documentación formal, acuerdos y seguimiento de incidencias.",
    value: "operaciones@viaprima.com.mx",
    color: "text-blue-400",
    box: "bg-blue-950/50 border-blue-700/40",
  },
  {
    id: "fe1d4fda",
    icon: "mdi:support",
    title: "Mesa de control",
    description: "Línea directa con el centro para dudas puntuales de guías o despachos.",
    value: "Atención personalizada",
    color: "text-amber-400",
    box: "bg-amber-600/50 border-amber-500/50",
  },
  {
    id: "8b723b25",
    icon: "mdi:map-marker",
    title: "Puntos de contacto",
    description: "Coordinadores designados para enlace continuo entre el proveedor y el centro.",
    value: "Soporte exclusivo",
    color: "text-red-400",
    box: "bg-red-950/50 border-red-700/40",
  },
];
