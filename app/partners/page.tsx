import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/content-page";
import { PhotoFrame } from "@/components/photo-frame";
import { Reveal } from "@/components/reveal";
import { localPartners, partners } from "@/lib/site";
import { media } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Our partners",
};

export const dynamic = "force-dynamic";

export default async function PartnersPage() {
  const [localShots, intlShots] = await Promise.all([
    media("partners/local", 4, localPartners.map((item) => item.name)),
    media(
      "partners/international",
      5,
      partners.map((item) => item.name),
    ),
  ]);

  return (
    <ContentPage
      eyebrow="Our partners"
      title="Business and technology partners"
      lead="Local firms in South Sudan and international technology partners in China, Germany, Malaysia, and Turkey."
      folder="partners"
    >
      <h2 className="font-display text-3xl text-navy">Local partners</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {localPartners.map((partner, index) => (
          <Reveal key={partner.name} delay={index * 70}>
            <PhotoFrame
              item={localShots[index] ?? {
                caption: partner.name,
                fileHint: `gallery/${partner.folder}/${partner.file}`,
              }}
              alt={partner.name}
              index={index}
              aspect="aspect-[3/4]"
              kicker="South Sudan"
              title={partner.name}
              labeled
            />
          </Reveal>
        ))}
      </div>

      <h2 className="mt-16 font-display text-3xl text-navy">
        International partners
      </h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {partners.map((partner, index) => (
          <Reveal key={partner.name} delay={index * 70}>
            <PhotoFrame
              item={intlShots[index] ?? {
                caption: partner.name,
                fileHint: `gallery/${partner.folder}/${partner.file}`,
              }}
              alt={partner.name}
              index={index}
              aspect="aspect-[4/5]"
              kicker={partner.country}
              title={partner.name}
              labeled
            />
          </Reveal>
        ))}
      </div>

      <p className="mt-12">
        <Link
          href="/partners/projects"
          className="font-cond text-sm font-semibold uppercase tracking-[0.16em] text-blue"
        >
          Partner projects and licences →
        </Link>
      </p>
    </ContentPage>
  );
}
