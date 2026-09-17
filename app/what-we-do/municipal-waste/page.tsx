import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";

export const metadata: Metadata = {
  title: "Municipal and sewage",
};

export default function MunicipalWastePage() {
  return (
    <ContentPage
      eyebrow="What we do"
      title="Domestic, municipal, and sewage waste"
      lead="Collection that stops littering. Treatment that returns fertiliser, recyclate, water, or energy."
      folder="services/municipal"
    >
      <article className="prose-panloy max-w-3xl">
        <h2>Domestic and municipal solid waste</h2>
        <p>
          We cover household waste, commercial centres, and municipal streams.
          Joint collection containers or open tanks are designed so that waste
          is gathered rather than left to pollute streets. Safeguarded trucks
          take the load to segregation.
        </p>
        <p>
          After sorting, non-decomposing waste is stored and scheduled for the
          treatment plant. Organic waste — including food from households and
          commercial kitchens — is converted into agricultural fertiliser.
          Plastics and other non-organics are recycled into reusable products
          where possible. What cannot be converted is incinerated in a
          clean-emission unit, with energy recovered for household or commercial
          use.
        </p>
        <h2>Liquid and sewage waste</h2>
        <p>
          South Sudan does not yet have an underground sewer network that
          gathers sewage to one point. We collect from household, hotel, public,
          and commercial toilets with sewage tanks, then hold the load in
          storage designed to control odour and other air pollution.
        </p>
        <p>
          Treatment in the sewage plant runs through preliminary, primary,
          secondary, and tertiary stages. Separated solids can be used as
          fertiliser. Water can be recycled for irrigation or toilet flushing,
          or discharged with no harm to the receiving environment. The plant is
          automated and does not need a large crew.
        </p>
      </article>
    </ContentPage>
  );
}
