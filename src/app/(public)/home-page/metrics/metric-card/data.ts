export type MetricCard = {
  id: string;
  image: string;
  accentIcon: string;
  accentClass: string;
  eyebrow: string;
  title: string;
  description: string;
  metricLabel: string;
  metricValue: string;
  metricClass: string;
};

export const metricsCards: MetricCard[] = [
  {
    id: "f974",
    image: "/images/inicio_02_b45d8f318c69.png",
    accentIcon: "speed",
    accentClass: "text-red-400",
    eyebrow: "Agilidad en Terreno",
    title: "Rutas urbanas de alta precisión",
    description: "Nuestros repartidores conocen cada sector, asegurando que paquetes prioritarios y entregas estándar lleguen a tiempo, evitando demoras comunes por dirección inexacta o reintentos innecesarios.",
    metricLabel: "Tasa de entrega en primer intento",
    metricValue: "96.8%",
    metricClass: "text-blue-400",
  },
  {
    id: "9f6j",
    image: "/images/inicio_03_c1b564f8e6ac.png",
    accentIcon: "hub",
    accentClass: "text-blue-400",
    eyebrow: "Infraestructura Propia",
    title: "Organización y resguardo de paquetes",
    description: "Instalaciones acondicionadas con protocolos de seguridad física y control digital permanente para garantizar que ningún artículo sufra daño durante su manipulación o permanencia en andén.",
    metricLabel: "Capacidad de procesamiento diario",
    metricValue: "+15,000 paq/día",
    metricClass: "text-red-400",
  }
];
