import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/content-page";
import { PhotoFrame } from "@/components/photo-frame";
import { media } from "@/lib/projects";

export const metadata: Metadata = {
  title: "How we do it",
};

const items = [
  {
    href: "/how-we-do-it/process",
    title: "Waste management process",
    body: "Monitor, collect, segregate, treat, then recycle or landfill.",
  },
  {
    href: "/how-we-do-it/technology",
    title: "Our technology",
    body: "Thermal desorption — four TDUs, soil receipt through laboratory release.",
  },
  {
    href: "/how-we-do-it/qhse",
    title: "HSE policies",
    body: "Health, safety and environment as part of every operating decision.",
  },
  {
    href: "/how-we-do-it/ethics",
    title: "Our ethics",
    body: "Ten Commandments and the Panloy corporate quadrant.",
  },
  {
    href: "/how-we-do-it/sustainability",
    title: "Sustainability",
    body: "Customer, environment, society, and profit held in one frame.",
  },
];

export default async function HowWeDoItPage() {
  const shots = await media("how-we-do-it", items.length);

  return (
    <ContentPage
      eyebrow="How we do it"
      title="Process, technology, policy, and ethics."
      lead="The way we work is as important as the plants we run."
      folder="how-we-do-it"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {items.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            className="group overflow-hidden ring-1 ring-line transition hover:ring-blue"
          >
            <PhotoFrame
              item={shots[index] ?? shots[0]}
              alt={item.title}
              index={index}
              aspect="aspect-[16/9]"
            />
            <div className="bg-white p-4 md:p-6">
              <h2 className="font-display text-xl md:text-3xl text-navy group-hover:text-blue">
                {item.title}
              </h2>
              <p className="mt-2 text-sm text-muted md:mt-3 md:text-base">{item.body}</p>
            </div>
          </Link>
        ))}
      </div>
    </ContentPage>
  );
}
