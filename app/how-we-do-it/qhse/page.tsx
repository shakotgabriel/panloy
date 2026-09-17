import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { qhseObjectives } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our QHSE policies",
};

export default function QhsePage() {
  return (
    <ContentPage
      eyebrow="How we do it"
      title="Quality, health, safety and environment"
      lead="Sound HSE performance is treated as part of every business decision, not as a separate programme."
      folder="qhse"
    >
      <article className="prose-panloy max-w-3xl">
        <p>
          Panloy Ltd is committed to continual health, safety and environment
          improvement through the active participation of employees,
          subcontractors, and the community. We take reasonable measures to
          protect the health and safety of our people and to protect the
          environment in which we operate.
        </p>
      </article>

      <h2 className="mt-12 font-display text-3xl text-navy">Policy objectives</h2>
      <ol className="mt-6 grid gap-3">
        {qhseObjectives.map((item, index) => (
          <li
            key={item}
            className="flex gap-4 border border-line bg-white px-4 py-4 text-sm leading-relaxed text-muted"
          >
            <span className="font-cond text-blue">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ol>
    </ContentPage>
  );
}
