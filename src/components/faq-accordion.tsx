"use client";

import type { FC } from "react";
import { useState } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "@iconify/react";
import type { Question } from "@/app/preguntas-frecuentes/data";

type Props = {
  questions: Question[];
  variant?: "card" | "contact";
  defaultOpenIndex?: number;
  showIcons?: boolean;
};

export const FaqAccordion: FC<Props> = ({
  questions,
  variant = "card",
  defaultOpenIndex,
  showIcons = false,
}) => {
  const [openIndex, setOpenIndex] = useState<number>(
    defaultOpenIndex ?? -1
  );

  const toggle = (index: number) =>
    setOpenIndex((current) => (current === index ? -1 : index));

  if (variant === "contact") {
    return (
      <div className="space-y-3">
        {questions.map((item, index) => {
          const open = openIndex === index;
          return (
            <div
              key={item.title}
              className="bg-surface-container border border-slate-800/90 rounded-xl shadow-md overflow-hidden transition-all"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full p-space-md text-left flex items-center justify-between gap-4 hover:bg-[#19253d] transition-colors"
              >
                <span className="flex items-center gap-3">
                  {showIcons && (
                    <span
                      className={cn(
                        "size-12 rounded-lg border flex items-center justify-center shrink-0",
                        open
                          ? "bg-blue-950/60 border-blue-700/40 text-blue-400"
                          : "bg-surface-container-low border-slate-700 text-slate-400"
                      )}
                    >
                      <Icon icon="mdi:chat-question-outline" className="text-[24px]" />
                    </span>
                  )}
                  <span className="font-headline-sm text-[16px] text-white font-bold">
                    {item.title}
                  </span>
                </span>
                <Icon
                  icon="expand_more"
                  className={cn(
                    "text-blue-400 text-[22px] transition-transform duration-300 shrink-0",
                    open && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "px-space-md pb-space-md text-body-sm font-body-sm text-slate-300 leading-relaxed border-t border-slate-800/50 pt-3",
                  !open && "hidden"
                )}
              >
                {item.body}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {questions.map((item, index) => {
        const open = openIndex === index;
        return (
          <div
            key={item.title}
            className="bg-[#10192d] border border-slate-800/80 p-space-md lg:p-space-lg rounded-xl shadow-md transition-all hover:border-slate-700"
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              className="w-full flex items-center gap-3 cursor-pointer select-none text-left"
            >
              <span className="size-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-400 shrink-0">
                <Icon icon="mdi:chat-question-outline" className="text-[18px]" />
              </span>
              <h4 className="font-headline-sm text-headline-sm text-white font-bold flex-1">
                {item.title}
              </h4>
              <Icon
                icon="expand_more"
                className={cn(
                  "text-slate-400 transition-transform duration-200",
                  open && "rotate-180"
                )}
              />
            </button>
            <div
              className={cn(
                "mt-3 pt-3 pl-11 text-slate-300 font-body-sm text-body-sm leading-relaxed border-t border-slate-800/60",
                !open && "hidden"
              )}
            >
              {item.body}
            </div>
          </div>
        );
      })}
    </div>
  );
}