import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { quadrant } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our ethics",
};

export default function EthicsPage() {
  return (
    <ContentPage
      eyebrow="How we do it"
      title="Code of business ethics"
      lead="A values-based organisation. Ethical behaviour is expected in daily work, not only in policy."
      folder="ethics"
    >
      <article className="prose-panloy max-w-3xl">
        <p>
          Guided by group values, we seek an ethical mindset in all daily
          business activity. Panloy’s cultural values — the Ten Commandments —
          guide staff in the work they execute.
        </p>
        <p>
          We place the needs of customers and society at the heart of operations.
          The aim is a balance between customer satisfaction, environmental
          sustainability, societal impact, and profitable growth. That balance
          is embodied in the Ten Commandments and shown as the Panloy corporate
          quadrant.
        </p>
      </article>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {quadrant.map((item) => (
          <div key={item.title} className="border border-line bg-sand px-5 py-8">
            <p className="font-display text-2xl text-navy">{item.title}</p>
          </div>
        ))}
      </div>
    </ContentPage>
  );
}
