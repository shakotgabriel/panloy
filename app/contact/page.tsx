import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { PhotoFrame } from "@/components/photo-frame";
import { company, locations } from "@/lib/site";
import { media } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Contact us",
};

export const dynamic = "force-dynamic";

const locationFolders = ["office", "factory", "gumry", "unity"] as const;

export default async function ContactPage() {
  const shots = await Promise.all(
    locationFolders.map((folder, index) =>
      media(folder, 1).then(
        (items) =>
          items[0] ?? {
            caption: locations[index].name,
            fileHint: `gallery/${folder}/01.jpg`,
          },
      ),
    ),
  );

  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Write, call, or visit."
        lead="Office at Hai Malakal, Juba. Factory at Jebel Kujur. Plants in Paloch and Unity."
        folder="contact"
      />
      <div className="bg-paper">
        <div className="container-site grid gap-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {locations.map((place, index) => (
            <PhotoFrame
              key={place.name}
              item={shots[index]}
              alt={place.name}
              index={index}
              aspect="aspect-[4/5]"
              kicker={place.kind}
              title={place.name}
              labeled
            />
          ))}
        </div>
        <div className="container-site grid gap-12 pb-14 md:grid-cols-[0.9fr_1.1fr] md:pb-20">
          <div>
            <h2 className="font-display text-3xl text-navy">Reach us</h2>
            <dl className="mt-6 space-y-5 text-sm">
              <div>
                <dt className="font-cond uppercase tracking-[0.14em] text-muted">
                  Email
                </dt>
                <dd className="mt-1">
                  <a href={`mailto:${company.email}`} className="text-blue">
                    {company.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-cond uppercase tracking-[0.14em] text-muted">
                  Telephone
                </dt>
                <dd className="mt-1 space-y-1 text-ink">
                  {company.phones.map((phone) => (
                    <p key={phone.href}>
                      <span className="text-muted">{phone.label}: </span>
                      <a href={`tel:${phone.href}`} className="hover:text-blue">
                        {phone.display}
                      </a>
                    </p>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="font-cond uppercase tracking-[0.14em] text-muted">
                  Working hours
                </dt>
                <dd className="mt-1">{company.hours}</dd>
              </div>
            </dl>

            <div className="mt-10 grid gap-6">
              {locations.map((place) => (
                <div key={place.name} className="border-t border-line pt-4">
                  <p className="font-cond text-[0.7rem] uppercase tracking-[0.16em] text-blue">
                    {place.kind}
                  </p>
                  <h3 className="mt-1 font-display text-xl text-navy">{place.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {place.lines.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-line bg-white p-6 md:p-8">
            <h2 className="font-display text-3xl text-navy">Your request</h2>
            <p className="mt-2 mb-6 text-sm text-muted">
              The form opens your email application with the message addressed
              to Panloy.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
