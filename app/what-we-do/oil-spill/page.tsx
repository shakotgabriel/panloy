import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";

export const metadata: Metadata = {
  title: "Oil spill and chemical waste",
};

export default function OilSpillPage() {
  return (
    <ContentPage
      eyebrow="What we do"
      title="Crude-oil spill and hazardous chemical waste"
      lead="Spill kits for small releases. Thermal desorption and clean-emission incineration when the volume is larger."
      folder="services/oil-spill"
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <article className="prose-panloy">
          <h2>Petroleum hydrocarbon contaminated soil</h2>
          <p>
            With our technology partners we hold oil-spill kits for safe,
            economical clean-up. When a spill is large enough to contaminate
            soil, an on-site laboratory test sets the excavation depth. Soil is
            taken out until the lab shows the remaining ground is uncontaminated,
            then hauled to a leak-proof area and graded for treatment.
          </p>
          <p>
            Where oil recovery is required we use a low-temperature thermal
            desorption unit. Recovered oil is reused where it is safe to do so.
            Where recovery is not required we treat at 500–650 °C. Treated soil
            is reused for road construction or for backfilling the pits from
            which it was taken.
          </p>
        </article>
        <article className="prose-panloy">
          <h2>Hazardous chemical and expired-chemical waste</h2>
          <p>
            Work follows HAZOP practice. Chemical wastes are identified and
            sorted by group so they can be handled safely, then moved to
            treatment storage and destroyed in a clean-emission incinerator.
            Treatment is guided by an on-site laboratory. Residues that meet
            environmental standards go to secure landfills.
          </p>
          <p>
            Contaminated equipment is washed in dedicated machines with
            specified detergents and additives, then tested by laboratory
            technicians on site before reuse.
          </p>
        </article>
      </div>
    </ContentPage>
  );
}
