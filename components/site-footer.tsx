import Link from "next/link";
import { Logo } from "@/components/logo";
import { company, locations, navigation } from "@/lib/site";

const legal = [
  { href: "/privacy", label: "Privacy policy" },
  { href: "/terms", label: "Terms of use" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <Logo inverted />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
            {company.tagline}
          </p>
          <div className="mt-6 space-y-2 text-sm">
            <p>
              <a
                href={`mailto:${company.email}`}
                className="text-white/80 hover:text-gold"
              >
                {company.email}
              </a>
            </p>
            {company.phones.map((phone) => (
              <p key={phone.href}>
                <a
                  href={`tel:${phone.href}`}
                  className="text-white/80 hover:text-gold"
                >
                  {phone.display}
                </a>
              </p>
            ))}
            <p className="text-white/55">{company.hours}</p>
          </div>
          {company.social.length ? (
            <div className="mt-6 flex flex-wrap gap-3">
              {company.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="border border-white/15 px-2.5 py-1 font-cond text-[0.7rem] uppercase tracking-[0.14em] text-white/75 hover:border-gold hover:text-gold"
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.name}
                </a>
              ))}
            </div>
          ) : null}
        </div>

        {navigation.map((item) => (
          <FooterColumn
            key={item.href}
            title={item.label}
            href={item.href}
            links={item.children ?? []}
          />
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="container-site grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((place) => (
            <div key={place.name}>
              <p className="font-cond text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold">
                {place.kind}
              </p>
              <h3 className="mt-2 font-display text-base md:text-xl">{place.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {place.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-4 py-6 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {company.group}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="hover:text-white">
              Contact us
            </Link>
            <Link href="/search" className="hover:text-white">
              Search
            </Link>
            {legal.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  href,
  links,
}: {
  title: string;
  href: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h2 className="font-cond text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-gold">
        <Link href={href} className="hover:text-white">
          {title}
        </Link>
      </h2>
      <ul className="mt-4 space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-white/75 hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
