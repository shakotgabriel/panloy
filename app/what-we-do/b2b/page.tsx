import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { b2bServices } from "@/lib/site";

export const metadata: Metadata = {
  title: "B2B services",
};

export default function B2bPage() {
  return (
    <ContentPage
      eyebrow="What we do"
      title="B2B services"
      lead="Primary and auxiliary services for oil companies, private firms, and NGOs — plus commodity trading."
      folder="services/b2b"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {b2bServices.map((item) => (
          <article key={item.title} className="border border-line bg-white p-8">
            <h2 className="font-display text-3xl text-navy">{item.title}</h2>
            <p className="mt-3 text-muted">{item.body}</p>
          </article>
        ))}
      </div>
    </ContentPage>
  );
}
