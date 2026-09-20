import Link from "next/link";

type Navigation = {
  id: string;
  href: string;
  label: string;
};

const NAVIGATION: Navigation[] = [
  { id: "d85j", href: "/", label: "Inicio" },
  { id: "m4k2", href: "/quienes-somos", label: "¿ Quiénes somos ?" },
  { id: "x7y5", href: "/servicios", label: "Servicios" },
  { id: "a58b", href: "/preguntas-frecuentes", label: "Preguntas frecuentes" },
] as const;

export const NavigationLinks = () => {
  return (
    <div className="flex-1 flex flex-col gap-space-sm">
      <span className="font-headline-sm text-headline-sm text-white font-bold">
        Navegación
      </span>
      <div className="flex flex-col gap-2 font-body-sm text-body-sm">
        {NAVIGATION.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className="text-slate-400 hover:text-blue-400 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};
