'use client';

import type { FC } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { NavLinkType } from './data';
import { cn } from '@/lib/cn';

type Props = Readonly<{
  navLink: Omit<NavLinkType, 'id'>;
  onOpenMenu: (state: boolean) => void;
}>;

export const NavLink: FC<Props> = ({ navLink, onOpenMenu }) => {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const linkClasses = (href: string) =>
    cn(
      "px-3 py-2 rounded-lg transition-colors font-label-md text-label-md uppercase",
      isActive(href)
        ? "bg-surface-container-high text-blue-400 font-bold border border-slate-700/60"
        : "text-slate-300 hover:bg-slate-800/70 hover:text-white"
  );

  return (
    <>
      <Link
        key={navLink.href}
        href={navLink.href}
        onClick={() => onOpenMenu(false)}
        className={linkClasses(navLink.href)}
      >
        {navLink.label}
      </Link>
    </>
  );

};
