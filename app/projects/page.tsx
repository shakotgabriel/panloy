import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { ProjectGallery } from "@/components/project-gallery";
import { Reveal } from "@/components/reveal";
import { fieldProjects, galleryOrPlaceholders } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Ongoing projects",
};

export const dynamic = "force-dynamic";

export default async function ProjectsPage() {
  const [gumry, unity] = await Promise.all([
    galleryOrPlaceholders(fieldProjects[0]),
    galleryOrPlaceholders(fieldProjects[1]),
  ]);

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Work on the ground, now."
        lead="Two live oilfield treatment programmes: Gumry at Paloch for DPOC, and the Unity oil field for GPOC."
      />

      <section className="bg-paper py-14 md:py-20">
        <div className="container-site space-y-20">
          {fieldProjects.map((project, index) => {
            const items = index === 0 ? gumry : unity;
            return (
              <article key={project.slug}>
                <Reveal>
                  <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                    <div>
                      <p className="font-cond text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-blue">
                        {project.status} · {project.clientShort}
                      </p>
                      <h2 className="mt-2 font-display text-4xl text-navy">
                        {project.title}
                      </h2>
                      <p className="mt-2 text-muted">
                        {project.location} · {project.client}
                      </p>
                    </div>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="font-cond text-sm font-semibold uppercase tracking-[0.16em] text-blue"
                    >
                      Full gallery →
                    </Link>
                  </div>
                </Reveal>
                <ProjectGallery project={project} items={items} layout="film" />
                <p className="mt-6 max-w-2xl text-muted">{project.summary}</p>
              </article>
            );
          })}
        </div>
      </section>
      <CtaBand title="Need the same treatment standard on another block?" />
    </>
  );
}
