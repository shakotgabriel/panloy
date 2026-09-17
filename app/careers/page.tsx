import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
};

export default function CareersPage() {
  return (
    <ContentPage
      eyebrow="Careers"
      title="Work in plants, the factory, and the Juba office."
      lead="Ninety percent of our personnel are South Sudanese. We hire for waste treatment, manufacturing, HSE, engineering, and supply chain."
      folder="careers"
    >
      <article className="prose-panloy max-w-3xl">
        <p>
          Panloy employs more than 78 professionals and consultants, local and
          international. Roles sit in waste treatment, the Jebel Kujur factory,
          HSE training, environmental work, engineering, and the Hai Malakal
          office.
        </p>
        <p>
          Openings are not always listed here. Send a short letter and CV to{" "}
          <a href={`mailto:${company.email}?subject=Careers`}>
            {company.email}
          </a>{" "}
          with the subject “Careers”. We look for hard work, integrity, and the
          willingness to work to oilfield HSE standards.
        </p>
      </article>
    </ContentPage>
  );
}
