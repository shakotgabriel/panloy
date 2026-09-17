import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";

export const metadata: Metadata = { title: "Disclaimer" };

export default function DisclaimerPage() {
  return (
    <ContentPage
      eyebrow="Legal"
      title="Disclaimer"
      lead="Information on this site is published in good faith."
    >
      <article className="prose-panloy max-w-3xl">
        <p>
          Panloy Group makes no warranty that information on this website is
          complete or current for every operating site. Operational decisions
          should be confirmed in writing with the company. Nothing here creates
          a duty of care beyond that already owed under contract or law.
        </p>
      </article>
    </ContentPage>
  );
}
