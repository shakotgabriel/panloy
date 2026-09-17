import { CtaBand } from "@/components/cta-band";
import { PageHero, PhotoRail } from "@/components/page-hero";
import { media, toSlug } from "@/lib/projects";

export async function ContentPage({
  eyebrow,
  title,
  lead,
  folder,
  children,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  folder?: string;
  children: React.ReactNode;
}) {
  const key = folder ?? toSlug(title);
  const shots = await media(key, 4);

  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} lead={lead} folder={key} />
      <div className="relative z-10 -mt-8 bg-transparent md:-mt-12">
        <div className="container-site">
          <PhotoRail items={shots} label={title} />
        </div>
      </div>
      <div className="bg-paper">
        <div className="container-site py-14 md:py-20">{children}</div>
      </div>
      <CtaBand />
    </>
  );
}
