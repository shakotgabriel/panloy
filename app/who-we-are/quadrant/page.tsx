import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { quadrant } from "@/lib/site";

export const metadata: Metadata = {
  title: "Panloy quadrant",
};

export default function QuadrantPage() {
  return (
    <ContentPage
      eyebrow="Who we are"
      title="Panloy corporate quadrant"
      lead="We place the needs of customers and society at the heart of operations, and we hold four aims in balance."
      folder="quadrant"
    >
      <article className="prose-panloy max-w-3xl">
        <p>
          Guided by our cultural values, we strike a balance between customer
          satisfaction, environmental sustainability, societal impact, and
          profitable growth. That balance is embodied in the Ten Commandments
          and shown as the Panloy corporate quadrant.
        </p>
      </article>
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {quadrant.map((item) => (
          <article key={item.title} className="border border-line bg-white p-8">
            <h2 className="font-display text-3xl text-navy">{item.title}</h2>
            <p className="mt-3 text-muted">{item.body}</p>
          </article>
        ))}
      </div>
    </ContentPage>
  );
}
