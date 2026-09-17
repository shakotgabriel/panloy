import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/content-page";
import { wasteTypes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Oilfield waste",
};

export default function HazardousWastePage() {
  return (
    <ContentPage
      eyebrow="What we do"
      title="Health, safety and environment — oilfield waste"
      lead="Internationally proven green technologies for wastes generated in oil and gas fields and in municipal areas."
      folder="services/waste"
    >
      <article className="prose-panloy max-w-3xl">
        <p>
          We manage and treat the waste streams listed below, using on-site
          laboratory control where the work requires it. Related pages cover
          crude-oil spills, hazardous chemicals, and municipal and sewage
          treatment.
        </p>
      </article>

      <h2 className="mt-12 font-display text-3xl text-navy">
        Types of waste we manage
      </h2>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {wasteTypes.map((item) => (
          <li key={item} className="border border-line bg-white px-5 py-4 text-navy">
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-10 flex flex-wrap gap-4 text-sm">
        <Link href="/what-we-do/oil-spill" className="text-blue hover:underline">
          Oil spill and chemical waste →
        </Link>
        <Link href="/what-we-do/municipal-waste" className="text-blue hover:underline">
          Municipal and sewage →
        </Link>
        <Link href="/how-we-do-it/process" className="text-blue hover:underline">
          Waste management process →
        </Link>
      </div>
    </ContentPage>
  );
}
