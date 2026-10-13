import type { Metadata } from "next";
import { Barlow_Condensed, Instrument_Serif, Manrope } from "next/font/google";
import { ScrollTop } from "@/components/scroll-top";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { company, locations } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
});

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const title = `${company.name} ${company.division}`;

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s · ${title}`,
  },
  description: company.tagline,
  metadataBase: new URL("https://panloygroup.com.ss"),
  keywords: [
    "Panloy",
    "Panloy Group",
    "South Sudan",
    "waste treatment",
    "oilfield",
    "thermal desorption",
    "HSE training",
    "Juba",
    "Paloch",
    "Unity",
  ],
  openGraph: {
    type: "website",
    locale: "en",
    siteName: company.group,
    title,
    description: company.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: company.tagline,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.group,
  url: "https://panloygroup.com.ss",
  email: company.email,
  telephone: company.phones[0]?.href,
  description: company.tagline,
  address: {
    "@type": "PostalAddress",
    streetAddress: locations[0].lines[0],
    addressLocality: locations[0].name,
    addressCountry: "SS",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${instrument.variable} ${barlow.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-paper font-sans text-ink"
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-60 focus:bg-gold focus:px-3 focus:py-2 focus:text-navy"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <ScrollTop />
      </body>
    </html>
  );
}
