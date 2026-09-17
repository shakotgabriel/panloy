import { PhotoFrame } from "@/components/photo-frame";
import { media, toSlug, type GalleryItem } from "@/lib/projects";

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
    <section className="relative isolate min-h-[58vh] overflow-hidden text-white">
      <div className="absolute inset-0">
        <PhotoFrame
          item={shots[0]}
          alt=""
          fill
          index={0}
          className="min-h-[58vh]"
        />
      </div>
      <div className="absolute inset-0 bg-linear-to-r from-navy via-navy/82 to-navy/35" />
      <div className="absolute inset-0 bg-linear-to-t from-navy/50 to-transparent" />
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.1] mix-blend-overlay" />

      <div className="container-site relative grid min-h-[58vh] items-end gap-8 py-16 md:grid-cols-[1.2fr_0.7fr] md:py-24">
        <div>
          <p className="font-cond text-[0.75rem] font-semibold uppercase tracking-[0.22em] text-gold">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.1] md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {lead ? (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
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

export function PhotoRail({
  items,
  label,
}: {
  items: GalleryItem[];
  label: string;
}) {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {items.map((item, index) => (
        <PhotoFrame
          key={item.fileHint}
          item={item}
          alt={`${label} ${index + 1}`}
          index={index}
          aspect={index % 3 === 0 ? "aspect-[3/4]" : "aspect-[4/3]"}
        />
      ))}
    </div>
  );
}
