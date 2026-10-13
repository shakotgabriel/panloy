import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <div className="container-site py-24 text-center">
      <p className="font-cond text-sm uppercase tracking-[0.2em] text-blue">404</p>
      <h1 className="mt-3 font-display text-3xl md:text-5xl text-navy">Page not found</h1>
      <p className="mt-4 text-muted">That address is not on this site.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex bg-blue px-5 py-3 font-cond text-sm font-semibold uppercase tracking-[0.14em] text-white hover:bg-navy"
        >
          Back to home
        </Link>
        <Link
          href="/what-we-do"
          className="inline-flex border border-line px-5 py-3 font-cond text-sm font-semibold uppercase tracking-[0.14em] text-navy hover:border-blue hover:text-blue"
        >
          Our services
        </Link>
        <Link
          href="/contact"
          className="inline-flex border border-line px-5 py-3 font-cond text-sm font-semibold uppercase tracking-[0.14em] text-navy hover:border-blue hover:text-blue"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
