import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Investor relations",
};

export default function InvestorRelationsPage() {
  return (
    <ContentPage
      eyebrow="Investor relations"
      title="Building a multi-sector South Sudanese company."
      lead="Panloy Group was incorporated in May 2018 to take a long view of petroleum, environment, manufacturing, and supply chain work in South Sudan."
      folder="investor-relations"
    >
      <article className="prose-panloy max-w-3xl">
        <p>
          The group manufactures detergents and food products, treats oilfield
          and municipal waste, trains HSE teams, consults on engineering, and
          supplies chemicals and industrial goods. Treatment plants operate in
          Paloch and Unity. The factory is at Jebel Kujur.
        </p>
        <p>
          We do not publish market-sensitive figures on this website. Partners
          and prospective investors who need information should write to{" "}
          <a href={`mailto:${company.email}`}>{company.email}</a> with the
          subject “Investor relations”.
        </p>
      </article>
    </ContentPage>
  );
}
