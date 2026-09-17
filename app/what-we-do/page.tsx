import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/content-page";
import { PhotoFrame } from "@/components/photo-frame";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "What we do",
};

export default function WhatWeDoPage() {
  return (
    <ContentPage
      eyebrow="What we do"
      title="Manufacturing, petroleum, engineering, and supply chain."
      lead="Waste treatment is one line. The group also trains, consults, manufactures, and supplies."
      folder="what-we-do"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {services.map((service, index) => (
          <Link
            key={service.href}
            href={service.href}
            className="group overflow-hidden ring-1 ring-line transition hover:ring-blue"
          >
            <PhotoFrame
              item={{
                caption: service.title,
                fileHint: service.photo,
              }}
              alt={service.title}
              index={index}
              aspect="aspect-[16/9]"
            />
            <div className="bg-paper p-6">
              <p className="font-cond text-sm text-blue">{service.number}</p>
              <h2 className="mt-2 font-display text-3xl text-navy group-hover:text-blue">
                {service.title}
              </h2>
              <p className="mt-3 text-muted">{service.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </ContentPage>
  );
}
