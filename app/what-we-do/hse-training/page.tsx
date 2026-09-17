import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { training } from "@/lib/site";

export const metadata: Metadata = {
  title: "HSE training",
};

export default function HseTrainingPage() {
  return (
    <ContentPage
      eyebrow="What we do"
      title="Health, safety and environment training"
      lead="Occupational safety, occupational health, fire safety, and environmental courses for operators, contractors, and our own staff."
      folder="services/training"
    >
      <article className="prose-panloy max-w-3xl">
        <p>
          Courses can be arranged through the Juba office for classroom delivery
          or for teams at field sites. OSHA and NEBOSH certified programmes are
          available alongside the catalogue below.
        </p>
      </article>

      <section className="mt-12">
        <h2 className="font-display text-3xl text-navy">Occupational safety</h2>
        <ul className="mt-5 grid gap-2 sm:grid-cols-2">
          {training.occupationalSafety.map((item) => (
            <li key={item} className="border-l-2 border-blue bg-white px-4 py-2.5 text-sm text-ink">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-3xl text-navy">Occupational health</h2>
        <ul className="mt-5 grid gap-2 sm:grid-cols-2">
          {training.occupationalHealth.map((item) => (
            <li key={item} className="border-l-2 border-green bg-white px-4 py-2.5 text-sm text-ink">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl text-navy">Fire safety</h2>
          <ul className="mt-5 divide-y divide-line border border-line bg-white">
            {training.fireSafety.map((item) => (
              <li key={item.code} className="flex gap-4 px-4 py-3 text-sm">
                <span className="font-cond text-blue">{item.code}</span>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-3xl text-navy">Environmental</h2>
          <ul className="mt-5 divide-y divide-line border border-line bg-white">
            {training.environmental.map((item) => (
              <li key={item.code} className="flex gap-4 px-4 py-3 text-sm">
                <span className="font-cond text-blue">{item.code}</span>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </ContentPage>
  );
}
