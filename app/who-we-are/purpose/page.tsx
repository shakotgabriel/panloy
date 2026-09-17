import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mission, vision, values",
};

const pillars = [
  {
    id: "vision",
    label: "Vision",
    title: company.vision,
    body: "Panloy is guided by this vision throughout its business operations and offerings.",
  },
  {
    id: "mission",
    label: "Mission",
    title: "Trade quality goods and services across boundaries",
    body: company.mission,
  },
  {
    id: "goal",
    label: "Goals",
    title: "The company of choice",
    body: company.goal,
  },
];

export default function PurposePage() {
  return (
    <ContentPage
      eyebrow="Who we are"
      title="Mission, vision, values, and goals"
      lead="The same statements that sit in the company profile — and the cultural values that staff work by."
      folder="purpose"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {pillars.map((item) => (
          <article
            key={item.id}
            id={item.id}
            className="scroll-mt-32 border border-line bg-white p-6"
          >
            <p className="font-cond text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-blue">
              {item.label}
            </p>
            <h2 className="mt-3 font-display text-2xl text-navy">{item.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
          </article>
        ))}
      </div>

      <article id="values" className="prose-panloy mt-14 max-w-3xl scroll-mt-32">
        <h2>Cultural values</h2>
        <p>
          Panloy has cultural values — its Ten Commandments — that guide every
          member of staff in the work they carry out. Hard work and integrity
          sit at the centre. These values apply across manufacturing, petroleum
          and waste work, engineering, and supply chain.
        </p>
        <p>
          The commandments are expressed in daily conduct and in the Panloy
          corporate quadrant: customer satisfaction, environmental
          sustainability, societal impact, and profitable growth.
        </p>
      </article>
    </ContentPage>
  );
}
