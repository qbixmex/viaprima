import type { FC } from "react";
import { Icon } from "@iconify/react";
import { checkList } from "./data";

export const CheckList: FC = () => {
  return (
    <>
      {checkList.map((item) => (
        <div key={item} className="flex items-center gap-2.5">
          <Icon icon="mdi:check-circle" className="text-blue-400 text-[20px]" />
          <span>{item}</span>
        </div>
      ))}
    </>
  );
};