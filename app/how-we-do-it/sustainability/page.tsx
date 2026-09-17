import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { quadrant } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sustainability",
};

export default function SustainabilityPage() {
  return (
    <ContentPage
      eyebrow="How we do it"
      title="Environmental sustainability"
      lead="One corner of the Panloy quadrant — held in balance with customers, society, and a profitable company."
      folder="sustainability"
    >
      <article className="prose-panloy max-w-3xl">
        <p>
          Manufacturing, waste treatment, and supply work are judged by their
          effect on land, water, and air. Treatment methods — thermal
          desorption, soil washing, bioremediation, and clean-emission
          incineration — are chosen so that residues can be reused or placed in
          secure landfills.
        </p>
        <p>
          Municipal organics become fertiliser. Sewage solids and water are
          returned to agriculture and toilets where the plant allows it. Partner
          licences in Malaysia and operating plants in China and Taiwan are the
          reference for how we specify equipment in South Sudan.
        </p>
      </article>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {quadrant.map((item) => (
          <div key={item.title} className="bg-navy px-5 py-8 text-white">
            <p className="font-display text-2xl">{item.title}</p>
          </div>
        ))}
      </div>
    </ContentPage>
  );
}
