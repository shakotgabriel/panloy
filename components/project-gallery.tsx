"use client";

import { useState } from "react";
import { Lightbox, PhotoFrame } from "@/components/photo-frame";
import { Reveal } from "@/components/reveal";
import type { FieldProject, GalleryItem } from "@/lib/projects";

export function ProjectGallery({
  project,
  items,
  layout = "masonry",
}: {
  project: FieldProject;
  items: GalleryItem[];
  layout?: "masonry" | "film" | "grid";
}) {
  const [open, setOpen] = useState<{ src: string; alt: string } | null>(null);

  if (layout === "film") {
    return (
      <>
        <div className="film-track -mx-5 flex gap-4 overflow-x-auto px-5 pb-4 md:-mx-0 md:px-0">
          {items.map((item, index) => (
            <div
              key={item.fileHint}
              className="w-[min(78vw,26rem)] shrink-0 snap-start"
            >
              <PhotoFrame
                item={item}
                index={index}
                alt={`${project.title} ${index + 1}`}
                aspect="aspect-[16/10]"
                onOpen={(src, alt) => setOpen({ src, alt })}
              />
            </div>
          ))}
        </div>
        {open ? (
          <Lightbox src={open.src} alt={open.alt} onClose={() => setOpen(null)} />
        ) : null}
      </>
    );
  }

  if (layout === "grid") {
    return (
      <>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <Reveal key={item.fileHint} delay={index * 60}>
              <PhotoFrame
                item={item}
                index={index}
                alt={`${project.title} ${index + 1}`}
                aspect={index % 5 === 0 ? "aspect-[4/5]" : "aspect-[4/3]"}
                onOpen={(src, alt) => setOpen({ src, alt })}
              />
            </Reveal>
          ))}
        </div>
        {open ? (
          <Lightbox src={open.src} alt={open.alt} onClose={() => setOpen(null)} />
        ) : null}
      </>
    );
  }

  return (
    <>
      <div className="columns-1 gap-3 sm:columns-2 lg:columns-3">
        {items.map((item, index) => (
          <div key={item.fileHint} className="mb-3 break-inside-avoid">
            <Reveal delay={(index % 6) * 70}>
              <PhotoFrame
                item={item}
                index={index}
                alt={`${project.title} ${index + 1}`}
                aspect={index % 3 === 0 ? "aspect-[4/5]" : "aspect-[4/3]"}
                onOpen={(src, alt) => setOpen({ src, alt })}
              />
            </Reveal>
          </div>
        ))}
      </div>
      {open ? (
        <Lightbox src={open.src} alt={open.alt} onClose={() => setOpen(null)} />
      ) : null}
    </>
  );
}
