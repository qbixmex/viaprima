"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NavLink } from "./nav-link";
import { NAV_LINKS } from "./nav-link/data";

const LOGO = "/images/inicio_00_6dfae39e6af5.png";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  const onOpenMenu = () => {
    setOpen((v) => !v);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0c1322]/90 backdrop-blur-xl border-b border-slate-800/80 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
      {/* Main Navigation */}
      <div className="h-20 max-w-7xl mx-auto px-gutter flex items-center justify-between gap-space-md">
        <Link href="/" className="flex items-center gap-space-sm shrink-0">
          <Image
            src={LOGO}
            alt="ViaPrima"
            width={512}
            height={288}
            className="h-8 w-auto object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]"
            priority
          />
          <span className="font-headline-sm text-headline-sm tracking-tight font-extrabold ml-1 italic">
            <span className="text-primary">Via</span>
            <span className="text-secondary">Prima</span>
          </span>
        </Link>

        <nav className="hidden xl:flex-1 xl:flex xl:justify-center items-center gap-1">
          {NAV_LINKS.map(({ id, ...link }) => (
            <NavLink key={id} navLink={link} onOpenMenu={onOpenMenu} />
          ))}
        </nav>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="xl:hidden border-t border-slate-800/80 bg-[#0c1322]/95 backdrop-blur-xl shadow-2xl">
          <nav className="max-w-7xl mx-auto px-gutter py-3 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.href} navLink={link} onOpenMenu={onOpenMenu} />
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}