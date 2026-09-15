export type Question = {
  id: string;
  title: string;
  body: string;
};

export const questions: Question[] = [
  {
    id: "f6t8",
    title: "¿ En cuánto tiempo responden mi mensaje ?",
    body: "Nuestro equipo atiende los mensajes en un plazo menor a 2 horas hábiles. Los correos y llamadas registradas después de las 6:00 p.m. se revisan al inicio de la siguiente jornada operativa.",
  },
  {
    id: "gu48",
    title: "¿ Atienden volúmenes para empresas ?",
    body: "Sí. Recibimos y clasificamos carga de paquetería de diversos tamaños. Ponte en contacto con nuestro equipo de operaciones para recibir una propuesta de servicio a la medida de tu volumen.",
  },
  {
    id: "e537",
    title: "¿ En qué zonas tienen cobertura ?",
    body: "Operamos en toda la Zona Metropolitana de Guadalajara, Zapopan, Tonalá y Tlaquepaque",
  },
];