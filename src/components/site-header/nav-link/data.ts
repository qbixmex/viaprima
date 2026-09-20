export type NavLinkType = {
  id: string;
  href: string;
  label: string;
};

export const NAV_LINKS: NavLinkType[] = [
  { id: "bkg7", href: "/quienes-somos", label: "Quiénes somos" },
  { id: "nlh4", href: "/servicios", label: "Servicios" },
  { id: "s7n3", href: "/preguntas-frecuentes", label: "Preguntas Frecuentes" },
  { id: "8n46", href: "/contacto", label: "Contacto" },
] as const;
