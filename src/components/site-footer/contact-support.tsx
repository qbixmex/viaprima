import { Icon } from "@iconify/react";

type SupportItem = { id: string; label: string; icon: string; };

const items: SupportItem[] = [
  { id: "5ef2", label: 'contacto@viaprima.com', icon: 'mdi:mail-ru' },
  { id: "c745", label: '331-123-456', icon: 'mdi:phone' },
  { id: "5c52", label: 'Preguntas frecuentes', icon: 'ci:help-questionmark' },
  { id: "bf14", label: 'Términos y Privacidad', icon: 'ci:book' },
];

export const ContactSupport = () => {
  return (
    <div className="flex flex-col gap-space-sm">
      <span className="font-headline-sm text-headline-sm text-white font-bold">
        Contacto &amp; Soporte
      </span>
      {
        items.map((item) => (
          <div key={item.id} className="flex flex-col gap-3 font-body-sm text-body-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Icon icon={item.icon} className="text-[24px] text-blue-200" />
              <span className="text-slate-300">{item.label}</span>
            </div>
          </div>
        ))
      }
    </div>
  );
};
