import Link from "next/link";

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
          <h2 className="font-display text-3xl leading-tight md:text-[2.1rem]">{title}</h2>
          <p className="mt-3 text-white/80">{body}</p>
        </div>
        <Link
          href="/contact"
          className="shrink-0 bg-gold px-6 py-3 font-cond text-sm font-semibold uppercase tracking-[0.16em] text-navy hover:bg-white"
        >
          Contact us
        </Link>
      </div>
    </section>
  );
}
