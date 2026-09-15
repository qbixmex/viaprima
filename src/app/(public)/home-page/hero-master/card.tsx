import { Icon } from "@iconify/react";
import { cn } from "@/lib/cn";
import type { FC } from "react";
import type { OperativeCard } from "../operative-modules/data";

type Props = Readonly<{ card: OperativeCard }>;

export const Card: FC<Props> = ({ card }) => {
  return (
    <div
      key={card.index}
      className={cn(
        "group p-8 rounded-2xl bg-surface-container border border-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1",
        card.cardHover
      )}
    >
      <div>
        <div className="flex items-center justify-between mb-6">
          <div
            className={cn(
              "w-14 h-14 rounded-2xl border flex items-center justify-center transition-colors",
              card.iconBox
            )}
          >
            <Icon icon={card.icon} className="text-[30px]" />
          </div>
          <span className="font-mono-tracking text-mono-tracking text-slate-600 font-extrabold text-lg">
            {card.index}
          </span>
        </div>
        <h3 className="font-headline-sm text-headline-sm text-white font-bold mb-3">
          {card.title}
        </h3>
        <p className="font-body-md text-body-md text-slate-300 leading-relaxed">
          {card.desc}
        </p>
      </div>
      <div
        className={cn(
          "pt-6 mt-6 flex items-center gap-2 font-label-sm text-label-sm font-bold border-t border-slate-800/80",
          card.tagColor
        )}
      >
        <Icon icon={card.tagIcon} className="text-[16px]" />
        <span>{card.tag}</span>
      </div>
    </div>
  );
};
