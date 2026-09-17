import { Icon } from "@iconify/react";
import Link from "next/link";
import type { FC, ReactNode } from "react";

type SupportItem = {
  id: string;
  label: string;
  icon: string;
  url?: string;
};

const items: SupportItem[] = [
  {
    id: "5ef2",
    label: 'Contáctanos',
    icon: 'mdi:mail-ru',
    url: '/contacto',
  },
  /* {
    id: "c745",
    label: '331-123-456',
    icon: 'mdi:phone',
  }, */
  {
    id: "5c52",
    label: 'Preguntas frecuentes',
    icon: 'ci:help-questionmark',
    url: '/preguntas-frecuentes',
  },
  {
    id: "bf14",
    label: 'Políticas de Privacidad',
    icon: 'material-symbols:policy',
    url: '/politicas-privacidad',
  },
];

export const ContactSupport = () => {
  return (
    <div className="flex-1 flex flex-col gap-space-sm">
      <span className="font-headline-sm text-headline-sm text-white font-bold">
        Contacto &amp; Soporte
      </span>
      {
        items.map((item) => (
          <div key={item.id} className="flex flex-col gap-3 font-body-sm text-body-sm">
            {
              item.url
                ? (
                  <EmbeddedWithLink url={item.url}>
                    <Icon icon={item.icon} className="text-[24px] text-slate-400" />
                    <span>{item.label}</span>
                  </EmbeddedWithLink>
                )
                : (
                  <div className="flex items-center gap-2">
                    <Icon icon={item.icon} className="text-[24px] text-blue-200" />
                    <span className="text-slate-400">{item.label}</span>
                  </div>
                )
            }
          </div>
        ))
      }
    </div>
  );
};

type EmbeddedLinkProps = Readonly<{
  children: ReactNode;
  url: string;
}>;

const EmbeddedWithLink: FC<EmbeddedLinkProps> = ({ children, url }) => {
  return (
    <Link href={url} className="font-semibold italic text-slate-400 underline hover:text-blue-600 hover:no-underline transition-colors">
      <div className="flex items-center gap-2">
        {children}
      </div>
    </Link>
  );
};
