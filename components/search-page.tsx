"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import { searchIndex } from "@/lib/site";

export function SearchPage() {
  const params = useSearchParams();
  const router = useRouter();
  const initial = params.get("q") ?? "";
  const [value, setValue] = useState(initial);
  const query = initial.trim().toLowerCase();

  const results = useMemo(() => {
    if (!query) return searchIndex;
    return searchIndex.filter((item) =>
      `${item.title} ${item.excerpt}`.toLowerCase().includes(query),
    );
  }, [query]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = value.trim();
    router.replace(next ? `/search?q=${encodeURIComponent(next)}` : "/search");
  }

  return (
    <div className="mx-auto max-w-2xl">
      <form onSubmit={onSubmit} className="flex border border-line bg-white">
        <input
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Search the site..."
          className="min-w-0 flex-1 px-4 py-3 outline-none"
          aria-label="Search"
        />
        <button
          type="submit"
          className="bg-navy px-5 font-cond text-sm font-semibold uppercase tracking-[0.14em] text-white"
        >
          Search
        </button>
      </form>

      <p className="mt-6 text-sm text-muted">
        {query
          ? `${results.length} result${results.length === 1 ? "" : "s"} for “${initial}”`
          : "Browse pages, or type a word such as waste, training, or Paloch."}
      </p>

      <ul className="mt-6 divide-y divide-line">
        {results.map((item) => (
          <li key={item.href} className="py-5">
            <Link href={item.href} className="group">
              <h2 className="font-display text-2xl text-navy group-hover:text-blue">
                {item.title}
              </h2>
              <p className="mt-1 text-sm text-muted">{item.excerpt}</p>
              <p className="mt-2 font-cond text-xs uppercase tracking-[0.14em] text-blue">
                {item.href}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
