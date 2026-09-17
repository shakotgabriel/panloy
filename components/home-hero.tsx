import Link from "next/link";
import { PhotoFrame } from "@/components/photo-frame";
import type { GalleryItem } from "@/lib/projects";

export function HomeHero({ photo, stills }: { photo: GalleryItem; stills: { item: GalleryItem; kicker: string; title: string; alt: string; objectPosition?: string }[] }) {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <div className="absolute inset-0"><PhotoFrame item={photo} alt="Panloy field operations" fill className="min-h-[78vh]" /></div>
      <div className="absolute inset-0 bg-linear-to-r from-navy via-navy/75 to-navy/20" />
      <div className="container-site relative grid min-h-[78vh] items-end gap-10 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-24">
        <div className="max-w-2xl">
          <p className="font-cond text-xs font-semibold uppercase tracking-[0.22em] text-gold">Panloy Group · South Sudan</p>
          <h1 className="mt-4 font-display text-5xl leading-[1.02] md:text-7xl">Local capability for a working future.</h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">Energy, engineering, manufacturing, and environmental services delivered with local knowledge and international standards.</p>
          <Link href="/what-we-do" className="mt-8 inline-flex bg-gold px-5 py-3 font-cond text-sm font-semibold uppercase tracking-[0.14em] text-navy hover:bg-white">Explore our work</Link>
        </div>
        <div className="hidden grid-cols-2 gap-3 md:grid">
          {stills.map((still, index) => <PhotoFrame key={still.title} item={still.item} alt={still.alt} index={index} aspect="aspect-[4/3]" kicker={still.kicker} title={still.title} labeled objectPosition={still.objectPosition} />)}
        </div>
      </div>
    </section>
  );
}