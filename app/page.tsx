import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { HomeHero } from "@/components/home-hero";
import { PhotoFrame } from "@/components/photo-frame";
import { ProjectBand } from "@/components/project-band";
import { Reveal } from "@/components/reveal";
import { clientProfiles } from "@/lib/site";
import { pictures } from "@/lib/photos";
import { fieldProjects, galleryOrPlaceholders } from "@/lib/projects";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [gumry, unity] = await Promise.all([
    galleryOrPlaceholders(fieldProjects[0]),
    galleryOrPlaceholders(fieldProjects[1]),
  ]);
  const hero = pictures.site;
  const stills = [
    {
      item: pictures.team,
      kicker: "01 · People",
      title: "Field team",
      alt: "Panloy field team on site",
    },
    {
      item: pictures.tdu,
      kicker: "02 · Plant",
      title: "Thermal desorption",
      alt: "Thermal desorption unit at the plant",
    },
    {
      item: pictures.lab,
      kicker: "03 · Field lab",
      title: "On-site laboratory",
      alt: "Panloy field laboratory testing",
    },
  ] as const;

  return (
    <>
      <HomeHero photo={hero} stills={[stills[0], stills[1], stills[2]]} />

      <ProjectBand project={fieldProjects[0]} items={gumry} />
      <ProjectBand project={fieldProjects[1]} items={unity} reverse />

      <section className="bg-paper">
        <div className="container-site py-16 md:py-24">
          <Reveal>
            <p className="font-cond text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-blue">
              Our clientele
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-2xl text-navy md:text-5xl">
              Operators we work beside in the oil fields.
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-5">
            {clientProfiles.map((client, index) => (
              <Reveal key={client.short} delay={index * 80}>
                <PhotoFrame
                  item={{
                    src: `/${client.file}`,
                    caption: "",
                    fileHint: client.file,
                    fit: "contain",
                  }}
                  alt={client.name}
                  index={index}
                  aspect="aspect-square"
                  plain
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand">
        <div className="container-site grid gap-10 py-16 md:grid-cols-[0.85fr_1.15fr] md:py-24">
          <Reveal>
            <p className="font-cond text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-blue">
              Who we are
            </p>
            <h2 className="mt-3 font-display text-2xl text-navy md:text-5xl">
              The Panloy Group
            </h2>
            <div className="prose-panloy mt-6">
              <p>
                From the Thongpiny office in Juba, next to Universal Printers,
                the group works in the field at Paloch and Unity — with local
                talent at the centre of the operation.
              </p>
              <p>
                The name is the mandate. The work is manufacturing, petroleum,
                engineering, and supply, carried out under Panloy’s values and
                code of ethics.
              </p>
            </div>
            <Link
              href="/who-we-are"
              className="mt-6 inline-flex font-cond text-sm font-semibold uppercase tracking-[0.16em] text-blue hover:text-navy"
            >
              Read more →
            </Link>
          </Reveal>
          <div className="grid grid-cols-2 gap-3">
            <Reveal from="scale">
              <PhotoFrame
                item={pictures.team}
                alt="Panloy field team"
                aspect="aspect-[16/10] sm:aspect-[4/5]"
                index={0}
                kicker="People"
                title="Field team"
                labeled
              />
            </Reveal>
            <Reveal from="scale" delay={100} className="mt-10">
              <PhotoFrame
                item={pictures.lab}
                alt="Panloy field laboratory"
                aspect="aspect-[16/10] sm:aspect-[4/5]"
                index={1}
                kicker="Lab"
                title="On-site laboratory"
                labeled
              />
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
