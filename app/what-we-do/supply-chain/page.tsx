import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { supplyCategories } from "@/lib/site";

export const metadata: Metadata = {
  title: "Supply chain",
};

export default function SupplyChainPage() {
  return (
    <ContentPage
      eyebrow="What we do"
      title="Supply chain management and procurement"
      lead="Oil-production chemicals and industrial supplies from internationally recognised partners, plus general merchandise and stationery."
      folder="services/supply"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {supplyCategories.map((group) => (
          <article key={group.title} className="border border-line bg-white p-6">
            <h2 className="font-display text-2xl text-navy">{group.title}</h2>
            <ul className="mt-4 space-y-1.5 text-sm text-muted">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </ContentPage>
  );
}
