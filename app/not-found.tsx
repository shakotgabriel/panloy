import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <div className="container-site py-24 text-center">
      <p className="font-cond text-sm uppercase tracking-[0.2em] text-blue">404</p>
      <h1 className="mt-3 font-display text-5xl text-navy">Page not found</h1>
      <p className="mt-4 text-muted">That address is not on this site.</p>
      <Link
        href="/"
        className="mt-8 inline-flex bg-blue px-5 py-3 font-cond text-sm font-semibold uppercase tracking-[0.14em] text-white"
      >
        Back to home
      </Link>
    </div>
  );
}
