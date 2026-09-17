import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { PhotoFrame } from "@/components/photo-frame";
import { TduProcess } from "@/components/tdu-process";

export const metadata: Metadata = {
  title: "Our technology",
};

const otherTech = [
  {
    title: "Soil washing",
    body: "Used where total petroleum hydrocarbon in soil is below 3%. Partner work at Jianghan Oil Field followed this split: washing below 3% TPH, TDU above 3%.",
  },
  {
    title: "Bioremediation",
    body: "Biological treatment for suitable soils and sludges, chosen according to waste type and client preference.",
  },
  {
    title: "Clean-emission incineration",
    body: "Destroys hazardous chemical wastes and residual municipal streams that cannot be recycled, with energy recovery where the plant is configured for it.",
  },
  {
    title: "On-site laboratory",
    body: "pH and AH testing of treated soil, plus excavation depths and cleaned equipment, are signed off by Panloy laboratory technicians.",
  },
];

export default function TechnologyPage() {
  return (
    <ContentPage
      eyebrow="How we do it"
      title="TDU technology"
      lead="Four thermal desorption units treat oil-field contaminated soil. Heat drives hydrocarbons into the gas stream; the soil is sampled, tested in the Panloy laboratory, and released only after quality-control review."
      folder="tdu"
    >
      <TduProcess />

      <section className="mt-20">
        <h2 className="font-display text-3xl text-navy">Other treatment lines</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {otherTech.map((item) => (
            <article key={item.title} className="border border-line bg-white p-6">
              <h3 className="font-display text-2xl text-navy">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 overflow-hidden ring-1 ring-line md:max-w-xl">
          <PhotoFrame
            item={{
              caption: "Field laboratory",
              fileHint: "panloy-fieldlab.JPG",
            }}
            alt="Panloy field laboratory"
            aspect="aspect-[16/10]"
            kicker="Laboratory"
            title="pH and AH testing on site"
            labeled
          />
        </div>
      </section>
    </ContentPage>
  );
}
