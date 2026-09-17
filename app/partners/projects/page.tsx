import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { PhotoFrame } from "@/components/photo-frame";
import { partnerProjects, scorLicences } from "@/lib/site";
import { media } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Partner projects",
};

export const dynamic = "force-dynamic";

export default async function PartnerProjectsPage() {
  const shots = await media("partners/projects", partnerProjects.length);

  return (
    <ContentPage
      eyebrow="Our partners"
      title="Past and current projects by technology partners"
      lead="Track record of Safe & Clean Oil Recycle SDN BHD (SCOR) and its joint-venture partners — the methods we bring to South Sudan."
      folder="partners/projects"
    >
      <section>
        <h2 className="font-display text-3xl text-navy">
          Licences awarded to SCOR
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          The Department of Environment, Malaysia, and PETRONAS licensed SCOR
          after evaluating its scheduled-waste and waste-water work.
        </p>
        <ul className="mt-6 space-y-2">
          {scorLicences.map((item) => (
            <li key={item} className="border border-line bg-white px-4 py-3 text-sm">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-3xl text-navy">Selected projects</h2>
        <div className="mt-6 grid gap-8">
          {partnerProjects.map((item, index) => (
            <article
              key={item.title}
              className="grid overflow-hidden ring-1 ring-line md:grid-cols-[18rem_1fr]"
            >
              <PhotoFrame
                item={shots[index] ?? {
                  caption: item.title,
                  fileHint: `gallery/partners/projects/${String(index + 1).padStart(2, "0")}.jpg`,
                }}
                alt={item.title}
                index={index}
                aspect="aspect-[4/3] md:aspect-auto md:h-full md:min-h-48"
              />
              <div className="bg-white p-6">
                <p className="font-cond text-[0.72rem] uppercase tracking-[0.16em] text-blue">
                  {item.partner}
                </p>
                <h3 className="mt-2 font-display text-2xl text-navy">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </ContentPage>
  );
}
