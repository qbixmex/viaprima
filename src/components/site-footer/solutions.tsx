import Link from "next/link";

type Solution = { id: string; href: string; label: string; };

const SOLUTIONS: Solution[] = [
  { id: 'f6r8', href: "/para-empresas", label: "Para empresas" },
  { id: 'c9k3', href: "/servicios", label: "Recepción de carga" },
  { id: 'c73j', href: "/servicios", label: "Entregas mismo día" },
  { id: '0tm4', href: "/como-funciona", label: "Rutas de última milla" },
  { id: '4g6r', href: "/contacto", label: "Integración API" },
];

export const Solutions = () => {
  return (
    <div className="flex flex-col gap-space-sm">
      <span className="font-headline-sm text-headline-sm text-white font-bold">
        Soluciones
      </span>
      <div className="flex flex-col gap-2 font-body-sm text-body-sm">
        {SOLUTIONS.map((link) => (
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

export default Solutions;