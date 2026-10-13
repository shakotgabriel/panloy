import Link from "next/link";
import { company } from "@/lib/site";

export function CtaBand({
  title = "Ready to discuss a site, a plant, or a training programme?",
  body = "Write to the Juba office or call the field teams in Paloch and Unity. We will respond during business hours.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-blue text-white">
      <div className="container-site flex flex-col items-start justify-between gap-8 py-12 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <h2 className="font-display text-xl leading-tight md:text-[2.1rem]">{title}</h2>
          <p className="mt-2 text-sm text-white/80 md:mt-3 md:text-base">{body}</p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="bg-gold px-6 py-3 text-center font-cond text-sm font-semibold uppercase tracking-[0.16em] text-navy transition hover:bg-white"
          >
            Contact us
          </Link>
          <a
            href={`mailto:${company.email}`}
            className="border border-white/30 px-6 py-3 text-center font-cond text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:border-white hover:bg-white/10"
          >
            Email the office
          </a>
        </div>
      </div>
    </section>
  );
}
