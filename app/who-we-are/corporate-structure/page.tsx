import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";

export const metadata: Metadata = {
  title: "Corporate structure",
};

export default function CorporateStructurePage() {
  return (
    <ContentPage
      eyebrow="Who we are"
      title="Corporate structure"
      lead="A mixed local and international team, with South Sudanese professionals at the core."
      folder="corporate-structure"
    >
      <article className="prose-panloy max-w-3xl">
        <p>
          Panloy Ltd currently employs more than 78 professionals and
          consultants, both local and international, creating a cultural mix,
          synergy, local talent development, and complementarity. Ninety percent
          of personnel are local. Staff have technical experience in waste
          management and are skilled in environmental safety.
        </p>
        <p>
          The group’s waste solutions work is delivered from the Juba head
          office, the Jebel Kujur factory, the Gummry Treatment Plant in Paloch,
          Upper Nile State, and the treatment plant site in the Unity oil field.
        </p>
      </article>

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {[
          { value: "78+", label: "Professionals and consultants" },
          { value: "90%", label: "Local personnel" },
          { value: "4", label: "Operating locations" },
        ].map((item) => (
          <div key={item.label} className="border border-line bg-sand p-6">
            <p className="font-display text-4xl text-navy">{item.value}</p>
            <p className="mt-2 text-sm text-muted">{item.label}</p>
          </div>
        ))}
      </div>
    </ContentPage>
  );
}
