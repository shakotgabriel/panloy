import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { ProjectGallery } from "@/components/project-gallery";
import { fieldProjects, galleryOrPlaceholders, getProject } from "@/lib/projects";

type Params = { slug: string };

export function generateStaticParams() {
  return fieldProjects.map((project) => ({ slug: project.slug }));
}

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return { title: `${project.shortTitle} · ${project.clientShort}` };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const items = await galleryOrPlaceholders(project);

  return (
    <>
      <PageHero
        eyebrow={`${project.status} · ${project.clientShort}`}
        title={project.title}
        lead={`${project.location}. Client: ${project.client}.`}
      />
      <div className="bg-paper">
        <div className="container-site grid gap-12 py-14 md:grid-cols-[0.8fr_1.2fr] md:py-20">
          <aside>
            <p className="text-muted">{project.summary}</p>
            <ul className="mt-8 space-y-3">
              {project.work.map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-gold pl-3 text-sm text-navy"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-10 font-cond text-[0.7rem] uppercase tracking-[0.16em] text-muted">
              Add photographs to{" "}
              <span className="text-blue">public/gallery/{project.slug}/</span>
            </p>
          </aside>
          <ProjectGallery project={project} items={items} layout="masonry" />
        </div>
      </div>
      <CtaBand />
    </>
  );
}
