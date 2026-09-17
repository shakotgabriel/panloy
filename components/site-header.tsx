"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/logo";
import { navigation } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/95 backdrop-blur">
      <div className="container-site flex min-h-20 items-center justify-between gap-6">
        <Logo />
        <button type="button" className="border border-line px-3 py-2 font-cond text-xs font-semibold uppercase tracking-[0.14em] text-navy md:hidden" onClick={() => setOpen(!open)} aria-expanded={open}>
          Menu
        </button>
        <nav className={`${open ? "block" : "hidden"} absolute inset-x-0 top-full border-b border-line bg-paper px-5 py-5 md:static md:block md:border-0 md:bg-transparent md:p-0`}>
          <ul className="flex flex-col gap-4 md:flex-row md:items-center md:gap-7">
            {navigation.map((item) => <li key={item.href}><Link href={item.href} onClick={() => setOpen(false)} className="font-cond text-sm font-semibold uppercase tracking-[0.12em] text-navy hover:text-blue">{item.label}</Link></li>)}
            <li><Link href="/contact" onClick={() => setOpen(false)} className="inline-flex bg-blue px-4 py-2 font-cond text-sm font-semibold uppercase tracking-[0.12em] text-white hover:bg-navy">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}