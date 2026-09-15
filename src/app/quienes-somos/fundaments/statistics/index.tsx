import type { FC } from "react";
import type { StatisticType } from "../data";
import { Icon } from "@iconify/react";

type Props = Readonly<{ stat: StatisticType }>;

export const Statistic: FC<Props> = ({ stat }) => {
  return (
    <div
      key={stat.label}
      className="p-6 rounded-2xl bg-surface-container border border-slate-800 shadow-md text-center flex flex-col items-center"
    >
      <Icon icon={stat.icon} className="text-amber-400 text-[28px] mb-3" />
      <span className="font-headline-lg text-headline-lg text-white font-extrabold tracking-tight">
        {stat.value}
      </span>
      <span className="font-label-sm text-label-sm text-slate-400 mt-1">
        {stat.label}
      </span>
    </div>
  );
}