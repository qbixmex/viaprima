import type { FC } from "react";
import type { FundamentType } from "../data";
import { cn } from "@/lib/cn";
import { Icon } from "@iconify/react";

type Props = Readonly<{ fundament: FundamentType }>;

export const Fundament: FC<Props> = ({ fundament }) => {
  return (
    <div
      key={fundament.title}
      className="group p-8 rounded-2xl bg-surface-container border border-slate-800 hover:border-slate-600 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
    >
      <div className="flex items-center gap-4 mb-5">
        <div
          className={cn(
            "w-12 h-12 rounded-xl border flex items-center justify-center transition-colors",
            fundament.box
          )}
        >
          <Icon icon={fundament.icon} className="text-[24px]" />
        </div>
        <h3 className="font-headline-md text-headline-md text-white font-bold">
          {fundament.title}
        </h3>
      </div>
      <p className="font-body-lg text-body-lg text-slate-300 leading-relaxed">
        {fundament.desc}
      </p>
    </div>
  );
};
