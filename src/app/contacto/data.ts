export type InfoCard = {
  id: string;
  icon: string;
  title: string;
  description: string;
  color: string;
};

export const infoCards: InfoCard[] = [
  {
    id: "84yg",
    icon: "mdi:schedule",
    title: "Horario de Atención",
    description: "Lunes a Viernes: 8:00 a.m. - 6:00 p.m. Sábados: 9:00 a.m. - 2:00 p.m.",
    color: "bg-blue-950/60 border-blue-700/40 text-blue-400",
  },
  // {
  //   id: "v95h",
  //   icon: "mdi:call",
  //   title: "Línea de Contacto",
  //   description: "331-234-5678",
  //   color: "bg-amber-950/60 border-amber-700/40 text-amber-400",
  // },
  {
    id: "b83h",
    icon: "mdi:alternate-email",
    title: "Correo Electrónico",
    description: "contacto@viaprima.com.mx",
    color: "bg-red-950/60 border-red-700/40 text-red-400",
  },
];