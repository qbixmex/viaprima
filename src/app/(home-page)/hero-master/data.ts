export type Feature = {
  id: string;
  value: string;
  label: string;
  color: string;
};

export const features: Feature[] = [
  { id: "86a6", value: "99.4%", label: "Efectividad", color: "text-blue-400" },
  { id: "2b6d", value: "< 35m", label: "Clasificación", color: "text-white" },
  { id: "9c58", value: "100%", label: "Trazabilidad", color: "text-red-400" },
];
