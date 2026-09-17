import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/content-page";
import { PhotoFrame } from "@/components/photo-frame";
import { stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "Who we are",
};

export default function WhoWeArePage() {
  return (
    <ContentPage
      eyebrow="Who we are"
      title="A South Sudanese company built for nation-building."
      lead="Incorporated in May 2018. Named for the work of building a country."
      folder="who-we-are"
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr]">
        <article className="prose-panloy max-w-2xl">
          <h2>Our history</h2>
          <p>
            Incorporated in May 2018, Panloy was founded upon the core values of
            hard work and integrity, and to take up the business opportunities
            and natural endowments that South Sudan offers. Through those
            opportunities, and reinforced by Panloy’s cultural values, the
            founders see the potential to build Panloy into one of the country’s
            leading private companies while contributing to national economic
            growth and nation-building.
          </p>
          <p>
            The name Panloy means a country, a nation, or a home being worked on
            — in other words, nation-building. Panloy is guided by the vision to
            deliver “quality and reliability at excellence” throughout its
            operations. The company adheres to its core values and code of
            business ethics to achieve that vision.
          </p>
          <p>
            Business areas include manufacturing, petroleum and waste treatment,
            engineering consultancy, and supply chain management and
            procurement.
          </p>
        </article>

        <aside className="grid gap-4">
          <PhotoFrame
            item={{ caption: "Team", fileHint: "team-1.JPG" }}
            alt="Panloy team"
            aspect="aspect-[4/5]"
            index={0}
            kicker="People"
            title="Local talent, 90%"
            labeled
          />
          <div className="border border-line bg-sand p-6">
          <p className="font-cond text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-blue">
            In figures
          </p>
          <ul className="mt-5 space-y-5">
            {stats.map((item) => (
              <li key={item.label} className="flex items-baseline justify-between">
                <span className="font-display text-3xl text-navy">{item.value}</span>
                <span className="font-cond text-xs uppercase tracking-[0.14em] text-muted">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-2 text-sm">
            <Link href="/who-we-are/purpose" className="text-blue hover:underline">
              Mission, vision and values →
            </Link>
            <Link href="/who-we-are/quadrant" className="text-blue hover:underline">
              Panloy quadrant →
            </Link>
            <Link
              href="/who-we-are/corporate-structure"
              className="text-blue hover:underline"
            >
              Corporate structure →
            </Link>
          </div>
          </div>
        </aside>
      </div>
    </ContentPage>
  );
}
