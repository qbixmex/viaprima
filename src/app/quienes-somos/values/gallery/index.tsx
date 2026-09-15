import type { FC } from "react";
import Image from "next/image";
import type { GalleryType } from "./data";
import { cn } from "@/lib/cn";

type Props = Readonly<{
  item: GalleryType;
  index: number;
}>;

export const GalleryItem: FC<Props> = ({ item, index }) => {
  return (
    <div
      key={item.id}
      className={cn(
        "relative rounded-3xl overflow-hidden shadow-xl border border-slate-800 group",
        index === 0
          ? "lg:col-span-6 lg:row-span-2"
          : "lg:col-span-3"
      )}
    >
      <div
        className={cn(
          "relative w-full",
          index === 0 ? "h-full min-h-105" : "h-64"
        )}
      >
        <Image
          src={item.url}
          alt={item.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#080d1a]/90 via-transparent to-transparent pointer-events-none" />
      </div>
    </div>
  );
};
