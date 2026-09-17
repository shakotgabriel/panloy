import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";

export const metadata: Metadata = { title: "Terms of use" };

export default function TermsPage() {
  return (
    <ContentPage
      eyebrow="Legal"
      title="Terms of use"
      lead="Please read these terms before using the website."
    >
      <article className="prose-panloy max-w-3xl">
        <p>
          This website is provided by Panloy Group for general information. It
          does not constitute a contract, an offer of employment, or professional
          advice. Content may change without notice.
        </p>
        <p>
          You may not copy substantial parts of the site for commercial use
          without permission. Links to the site are welcome provided they are
          not misleading.
        </p>
      </article>
    </ContentPage>
  );
}
