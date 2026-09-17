import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { HomeHero } from "@/components/home-hero";
import { PhotoFrame } from "@/components/photo-frame";
import { ProjectBand } from "@/components/project-band";
import { Reveal } from "@/components/reveal";
import {
  clientProfiles,
  localPartners,
  partners,
  services,
  stats,
  wasteProcess,
} from "@/lib/site";
import {
  fieldProjects,
  galleryOrPlaceholders,
  media,
} from "@/lib/projects";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [gumry, unity, clientShots, partnerShots, processShots] =
    await Promise.all([
      galleryOrPlaceholders(fieldProjects[0]),
      galleryOrPlaceholders(fieldProjects[1]),
      media("clients", 4, clientProfiles.map((item) => item.short)),
      media("partners", 6),
      media("process", 5),
    ]);
  const hero = {
    src: "/team-1.JPG",
    caption: "",
    fileHint: "team-1.JPG",
  };
  const stills = [
    {
      item: {
        src: "/treatment-plant.JPG",
        caption: "Site",
        fileHint: "treatment-plant.JPG",
      },
      kicker: "01 · Site",
      title: "Treatment plant",
      alt: "Panloy treatment plant site",
      objectPosition: "center 60%",
    },
    {
      item: {
        src: "/unity-plant.JPG",
        caption: "Unity",
        fileHint: "unity-plant.JPG",
      },
      kicker: "02 · Unity",
      title: "Unity oil field",
      alt: "Unity field plant under a blue roof",
      objectPosition: "55% 40%",
    },
    {
      item: {
        src: "/panloy-fieldlab.JPG",
        caption: "Field lab",
        fileHint: "panloy-fieldlab.JPG",
      },
      kicker: "03 · Field lab",
      title: "On-site laboratory",
      alt: "Panloy field laboratory testing",
      objectPosition: "42% 35%",
    },
  ] as const;

  return (
    <>
      <HomeHero photo={hero} stills={[stills[0], stills[1], stills[2]]} />

      <section className="relative bg-navy text-white">
        <div className="container-site grid gap-6 py-10 md:grid-cols-4">
          {stats.map((item, index) => (
            <Reveal key={item.label} delay={index * 80}>
              <p className="font-display text-4xl text-gold">{item.value}</p>
              <p className="mt-1 font-cond text-xs uppercase tracking-[0.16em] text-white/60">
                {item.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <ProjectBand project={fieldProjects[0]} items={gumry} />
      <ProjectBand project={fieldProjects[1]} items={unity} reverse />

      <section className="bg-paper">
        <div className="container-site py-16 md:py-24">
          <Reveal>
            <p className="font-cond text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-blue">
              Our clientele
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl text-navy md:text-5xl">
              Operators we work beside in the oil fields.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {clientProfiles.map((client, index) => (
              <Reveal key={client.short} delay={index * 80}>
                <PhotoFrame
                  item={clientShots[index] ?? {
                    caption: client.short,
                    fileHint: client.file,
                    fit: client.file.endsWith(".png") ? "contain" : "cover",
                  }}
                  alt={client.name}
                  index={index}
                  aspect="aspect-[3/4]"
                  kicker={client.short}
                  title={client.name}
                  labeled
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
            <h2 className="mt-3 font-display text-4xl text-navy md:text-5xl">
              The Panloy Group
            </h2>
            <div className="prose-panloy mt-6">
              <p>
                From the Hai Malakal office in Juba and the Jebel Kujur factory,
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
                item={{ caption: "Field team", fileHint: "team-1.JPG" }}
                alt="Panloy field team"
                aspect="aspect-[4/5]"
                index={0}
                kicker="People"
                title="Field team"
                labeled
              />
            </Reveal>
            <Reveal from="scale" delay={100} className="mt-10">
              <PhotoFrame
                item={{ caption: "Field laboratory", fileHint: "panloy-fieldlab.JPG" }}
                alt="Panloy field laboratory"
                aspect="aspect-[4/5]"
                index={1}
                kicker="Lab"
                title="On-site laboratory"
                labeled
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="container-site py-16 md:py-24">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <Reveal>
              <p className="font-cond text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-blue">
                Our services
              </p>
              <h2 className="mt-3 font-display text-4xl text-navy md:text-5xl">
                Eight lines of work.
              </h2>
            </Reveal>
            <Link
              href="/what-we-do"
              className="font-cond text-sm font-semibold uppercase tracking-[0.16em] text-muted hover:text-blue"
            >
              All services →
            </Link>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {services.map((service, index) => (
              <Reveal key={service.href} delay={(index % 4) * 60}>
                <Link
                  href={service.href}
                  className="group grid overflow-hidden ring-1 ring-line transition hover:ring-blue md:grid-cols-[11rem_1fr]"
                >
                  <PhotoFrame
                    item={{
                      caption: service.title,
                      fileHint: service.photo,
                    }}
                    alt={service.title}
                    index={index}
                    aspect="aspect-[4/3] md:aspect-auto md:h-full md:min-h-40"
                  />
                  <div className="bg-paper p-6">
                    <p className="font-cond text-sm text-blue">{service.number}</p>
                    <h3 className="mt-2 font-display text-2xl text-navy group-hover:text-blue">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{service.summary}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="container-site py-16 md:py-24">
          <Reveal>
            <p className="font-cond text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-gold">
              Waste management process
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl md:text-5xl">
              From accumulation to a treated, reusable material.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {wasteProcess.map((item, index) => (
              <Reveal key={item.step} delay={index * 70}>
                <PhotoFrame
                  item={processShots[index] ?? {
                    caption: item.title,
                    fileHint: item.file,
                  }}
                  alt={item.title}
                  index={index}
                  aspect="aspect-[4/5]"
                  kicker={item.step}
                  title={item.title}
                  labeled
                />
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand">
        <div className="container-site py-16 md:py-24">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <Reveal>
              <p className="font-cond text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-blue">
                Partners
              </p>
              <h2 className="mt-3 font-display text-4xl text-navy md:text-5xl">
                Local names. International plant know-how.
              </h2>
            </Reveal>
            <Link
              href="/partners"
              className="font-cond text-sm font-semibold uppercase tracking-[0.16em] text-blue"
            >
              All partners →
            </Link>
          </div>
          <div className="mt-12 flex gap-4 overflow-x-auto pb-4 film-track">
            {[...localPartners.map((p) => ({ ...p, kicker: "Local" })), ...partners.map((p) => ({ name: p.name, kicker: p.country, folder: p.folder, file: p.file }))].map(
              (partner, index) => (
                <div key={partner.name} className="w-[16rem] shrink-0 snap-start">
                  <PhotoFrame
                    item={partnerShots[index] ?? {
                      caption: partner.name,
                      fileHint: `gallery/${partner.folder}/${partner.file}`,
                    }}
                    alt={partner.name}
                    index={index}
                    aspect="aspect-[4/5]"
                    kicker={partner.kicker}
                    title={partner.name}
                    labeled
                  />
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
