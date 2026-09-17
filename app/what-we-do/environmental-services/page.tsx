import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { environmentalConsultancy } from "@/lib/site";

export const metadata: Metadata = {
  title: "Environmental services",
};

export default function EnvironmentalServicesPage() {
  return (
    <ContentPage
      eyebrow="What we do"
      title="Environmental consultancy"
      lead="Assessment, audit, management plans, and oil-spill planning for operators in South Sudan."
      folder="services/environment"
    >
      <ul className="grid gap-4 md:grid-cols-2">
        {environmentalConsultancy.map((item) => (
          <li key={item} className="border border-line bg-white p-6 font-display text-2xl text-navy">
            {item}
          </li>
        ))}
      </ul>
    </ContentPage>
  );
}
