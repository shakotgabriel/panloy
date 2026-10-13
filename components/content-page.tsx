import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { toSlug } from "@/lib/projects";

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

  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} lead={lead} folder={key} />
      <div className="bg-paper">
        <div className="container-site py-14 md:py-20">{children}</div>
      </div>
      <CtaBand />
    </>
  );
}
