import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { TduProcess } from "@/components/tdu-process";

export const metadata: Metadata = {
  title: "Waste management process",
};

export default function ProcessPage() {
  return (
    <ContentPage
      eyebrow="How we do it"
      title="TDU waste-treatment process"
      lead="Contaminated soil is received, prepared, fed to one of four TDUs, thermally treated, sampled, and released only after laboratory pH and AH testing and quality-control review."
      folder="tdu"
    >
      <TduProcess />
    </ContentPage>
  );
}
