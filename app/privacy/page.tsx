import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { company } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy policy" };

export default function PrivacyPage() {
  return (
    <ContentPage
      eyebrow="Legal"
      title="Privacy policy"
      lead="How this website handles the small amount of information it may collect."
    >
      <article className="prose-panloy max-w-3xl">
        <p>
          Panloy Group ({company.email}) operates this website to describe our
          services. If you send an enquiry, we use the name, organisation, and
          contact details you provide only to respond to that enquiry and to
          keep a record of correspondence.
        </p>
        <p>
          The site may store standard technical logs and, if enabled, cookies
          needed for the site to function. We do not sell personal information.
          For questions, write to {company.email}.
        </p>
      </article>
    </ContentPage>
  );
}
