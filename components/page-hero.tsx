import { PhotoFrame } from "@/components/photo-frame";
import { media, toSlug } from "@/lib/projects";

export async function PageHero({
  eyebrow,
  title,
  lead,
  folder,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  folder?: string;
}) {
  const shots = await media(folder ?? toSlug(eyebrow), 3);

  return (
    <section className="relative isolate min-h-[38vh] overflow-hidden text-white md:min-h-[58vh]">
      <div className="absolute inset-0">
        <PhotoFrame
          item={shots[0]}
          alt=""
          fill
          index={0}
          priority
          className="min-h-[38vh] md:min-h-[58vh]"
        />
      </div>
      <div className="absolute inset-0 bg-linear-to-r from-black/45 via-black/15 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-t from-black/55 via-transparent to-black/20" />
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.1] mix-blend-overlay" />

      <div className="container-site relative grid min-h-[38vh] items-end gap-8 py-10 md:min-h-[58vh] md:grid-cols-[1.2fr_0.7fr] md:py-24">
        <div>
          <p className="font-cond text-[0.75rem] font-semibold uppercase tracking-[0.22em] text-gold">
            {eyebrow}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-3xl leading-[1.12] md:mt-4 md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {lead ? (
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80 md:mt-5 md:text-lg">
              {lead}
            </p>
          ) : null}
        </div>
        <div className="hidden gap-3 md:grid">
          <PhotoFrame
            item={shots[1] ?? shots[0]}
            alt=""
            index={1}
            aspect="aspect-[16/10]"
            className="translate-x-6 rotate-2"
          />
          <PhotoFrame
            item={shots[2] ?? shots[0]}
            alt=""
            index={2}
            aspect="aspect-[16/10]"
            className="-translate-x-2 -rotate-3"
          />
        </div>
      </div>
    </section>
  );
}
