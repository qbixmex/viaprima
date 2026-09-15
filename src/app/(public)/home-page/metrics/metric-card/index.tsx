import type { FC } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/cn";
import type { MetricCard } from "./data";

type Props = Readonly<{ card: MetricCard; }>;

export const MetricsCard: FC<Props> = ({ card }) => {
  return (
    <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-xl bg-surface-container border border-slate-800 flex flex-col">
      <div className="relative h-64 w-full">
        <Image
          src={card.image}
          alt={card.title}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover opacity-90"
        />
      </div>
      <div className="p-8 flex-1 flex flex-col justify-between">
        <div>
          <div className={cn("flex items-center gap-2 font-mono-tracking text-mono-tracking uppercase mb-2", card.accentClass)}>
            <Icon icon={card.accentIcon} className="text-[18px]" />
            <span>{card.eyebrow}</span>
          </div>
          <h3 className="font-headline-md text-headline-md text-white font-bold mb-2">
            {card.title}
          </h3>
          <p className="font-body-md text-body-md text-slate-300 leading-relaxed">
            {card.description}
          </p>
        </div>
        <div className="mt-6 pt-6 border-t border-slate-800 bg-surface-container-low p-4 rounded-xl flex items-center justify-between">
          <span className="font-label-md text-label-md text-slate-200 font-semibold">
            {card.metricLabel}
          </span>
          <span className={cn("font-headline-sm text-headline-sm font-bold", card.metricClass)}>
            {card.metricValue}
          </span>
        </div>
      </div>
    </div>
  );
};
