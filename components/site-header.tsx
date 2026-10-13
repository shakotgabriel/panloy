"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { Logo } from "@/components/logo";
import { navigation } from "@/lib/site";

function pathMatches(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const menuId = useId();

  useEffect(() => {
    setOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/95 backdrop-blur">
      <div className="container-site flex min-h-20 items-center justify-between gap-6">
        <Logo />
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="/search"
            className="grid h-10 w-10 place-items-center text-navy hover:text-blue"
            aria-label="Search the site"
          >
            <SearchIcon />
          </Link>
          <button
            type="button"
            className="border border-line px-3 py-2 font-cond text-xs font-semibold uppercase tracking-[0.14em] text-navy"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        <nav
          id={menuId}
          className={`${
            open ? "block" : "hidden"
          } absolute inset-x-0 top-full max-h-[calc(100vh-5rem)] overflow-y-auto border-b border-line bg-paper px-5 py-5 md:static md:block md:max-h-none md:overflow-visible md:border-0 md:bg-transparent md:p-0`}
        >
          <ul className="flex flex-col gap-1 md:flex-row md:items-center md:gap-1 lg:gap-2">
            {navigation.map((item) => {
              const active = pathMatches(pathname, item.href);
              const expanded = openMenu === item.href;
              const wide = (item.children?.length ?? 0) > 5;

              return (
                <li key={item.href} className="group relative">
                  <div className="flex items-center justify-between gap-2 md:block">
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`block py-2 font-cond text-sm font-semibold uppercase tracking-[0.12em] hover:text-blue md:px-2.5 ${
                        active ? "text-blue" : "text-navy"
                      }`}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                    {item.children ? (
                      <button
                        type="button"
                        className="grid h-8 w-8 place-items-center text-navy md:hidden"
                        aria-expanded={expanded}
                        aria-label={`${expanded ? "Hide" : "Show"} ${item.label} pages`}
                        onClick={() =>
                          setOpenMenu(expanded ? null : item.href)
                        }
                      >
                        <span className="font-display text-lg leading-none md:text-xl">
                          {expanded ? "–" : "+"}
                        </span>
                      </button>
                    ) : null}
                  </div>
                  {item.children ? (
                    <ul
                      className={`${
                        expanded ? "grid" : "hidden md:grid"
                      } gap-x-4 gap-y-1 border-l border-line py-2 pl-4 md:invisible md:absolute md:top-full md:z-50 md:min-w-[16rem] md:border md:border-line md:bg-paper md:p-3 md:shadow-lg md:group-hover:visible md:group-focus-within:visible ${
                        wide ? "md:w-[28rem] md:grid-cols-2" : ""
                      }`}
                    >
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className={`block py-1.5 text-sm hover:text-blue md:px-2 ${
                              pathMatches(pathname, child.href)
                                ? "text-blue"
                                : "text-muted"
                            }`}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              );
            })}
            <li className="hidden md:block">
              <Link
                href="/search"
                className="grid h-10 w-10 place-items-center text-navy hover:text-blue"
                aria-label="Search the site"
              >
                <SearchIcon />
              </Link>
            </li>
            <li className="pt-3 md:pt-0 md:pl-2">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex bg-blue px-4 py-2 font-cond text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-navy"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M16 16l4.5 4.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}
