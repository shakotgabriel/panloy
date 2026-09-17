import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { manufacturingLines } from "@/lib/site";

export const metadata: Metadata = {
  title: "Manufacturing",
};

export default function ManufacturingPage() {
  return (
    <ContentPage
      eyebrow="What we do"
      title="Manufacturing"
      lead="Detergents, personal care, cooking oil, and mineral water from the factory at Tamania Biyut, Jebel Kujur."
      folder="services/manufacturing"
    >
      <article className="prose-panloy max-w-3xl">
        <p>
          Panloy manufactures a range of detergents, cooking oil, and mineral
          water. Cleaning products cover floor, dish, car, and window-glass use,
          together with laundry bar soap, hand wash, and shampoo.
        </p>
      </article>
      <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {manufacturingLines.map((item) => (
          <li key={item} className="border border-line bg-white px-5 py-6 text-navy">
            {item}
          </li>
        ))}
      </ul>
    </ContentPage>
  );
}
