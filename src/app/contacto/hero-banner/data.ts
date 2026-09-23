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
    description: "<b>Lunes a Viernes:</b> 8:00 a.m. - 6:00 p.m.<br /><b>Sábados:</b> 9:00 a.m. - 2:00 p.m.",
    color: "bg-sky-950/60 border-sky-700/40 text-sky-400",
  },
  // TODO: Uncomment once you have the phone number
  // {
  //   id: "v95h",
  //   icon: "mdi:call",
  //   title: "Teléfono",
  //   description: "<span class='text-amber-500'><b><i>331-234-5678</i></b></span>",
  //   color: "bg-amber-950/60 border-amber-700/40 text-amber-400",
  // },
  {
    id: "b83h",
    icon: "mdi:alternate-email",
    title: "Correo Electrónico",
    description: "<span class='text-primary'><b><i>contacto@viaprima.com.mx</i></b></span>",
    color: "bg-blue-950/60 border-blue-700/40 text-blue-400",
  },
];