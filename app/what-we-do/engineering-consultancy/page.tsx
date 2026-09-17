import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { engineeringDisciplines } from "@/lib/site";

export const metadata: Metadata = {
  title: "Engineering consultancy",
};

export default function EngineeringPage() {
  return (
    <ContentPage
      eyebrow="What we do"
      title="Engineering consultancy services"
      lead="Four disciplines covering plant, power, civil works, and mechanical integrity."
      folder="services/engineering"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {engineeringDisciplines.map((item, index) => (
          <article key={item.title} className="border border-line bg-white p-6">
            <p className="font-cond text-sm text-blue">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h2 className="mt-2 font-display text-2xl text-navy">{item.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
          </article>
        ))}
      </div>
    </ContentPage>
  );
}
