export type Objective = {
  id: string;
  eyebrow: string;
  eyebrowClass: string;
  title: string;
  desc: string;
};

export const objectives: Objective[] = [
  {
    id: "4hb6",
    eyebrow: "MISIÓN",
    eyebrowClass: "text-blue-400 border-blue-600/30 bg-blue-950/40",
    title: "Distribución precisa, confianza absoluta.",
    desc: "Asegurar que cada paquete sea procesado, clasificado y entregado con precisión, alineándonos con los estándares de nuestro proveedor logístico y las expectativas del destinatario final.",
  },
  {
    id: "b95h",
    eyebrow: "VISIÓN",
    eyebrowClass: "text-amber-400 border-amber-600/30 bg-amber-950/40",
    title: "Ser el estándar de eficiencia en la última milla.",
    desc: "Convertirnos en una referencia nacional en operación de distribución de paquetería, expandiendo nuestra cobertura urbana y fortaleciendo alianzas estratégicas con proveedores logísticos.",
  },
];
