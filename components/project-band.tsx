import Link from "next/link";
import { PhotoFrame } from "@/components/photo-frame";
import { Reveal } from "@/components/reveal";
import type { FieldProject, GalleryItem } from "@/lib/projects";

export function ProjectBand({
  project,
  items,
  reverse = false,
}: {
  project: FieldProject;
  items: GalleryItem[];
  reverse?: boolean;
}) {
  const lead = items[0];
  const rest = items.slice(1, 5);

  return (
    <section className={reverse ? "bg-navy text-white" : "bg-sand text-ink"}>
      <div
        className={`container-site grid gap-10 py-16 md:py-24 lg:grid-cols-[0.9fr_1.2fr] lg:items-start ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <Reveal className="lg:sticky lg:top-32">
          <p
            className={`font-cond text-[0.75rem] font-semibold uppercase tracking-[0.22em] ${
              reverse ? "text-gold" : "text-blue"
            }`}
          >
            Ongoing · {project.clientShort}
          </p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">{project.title}</h2>
          <p className={`mt-2 font-cond text-sm uppercase tracking-[0.14em] ${reverse ? "text-white/60" : "text-muted"}`}>
            {project.location}
          </p>
          <p className={`mt-5 max-w-md leading-relaxed ${reverse ? "text-white/75" : "text-muted"}`}>
            {project.summary}
          </p>
          <Link
            href={`/projects/${project.slug}`}
            className={`mt-8 inline-flex font-cond text-sm font-semibold uppercase tracking-[0.16em] ${
              reverse ? "text-gold hover:text-white" : "text-blue hover:text-navy"
            }`}
          >
            Open gallery →
          </Link>
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2">
          <Reveal className="sm:col-span-2" from="scale">
            <PhotoFrame
              item={lead}
              index={0}
              alt={project.title}
              aspect="aspect-[16/9]"
            />
          </Reveal>
          {rest.map((item, index) => (
            <Reveal key={item.fileHint} delay={(index + 1) * 90}>
              <PhotoFrame
                item={item}
                index={index + 1}
                alt={`${project.title} ${index + 2}`}
                aspect={index === 1 ? "aspect-[3/4]" : "aspect-[4/3]"}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
