import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/page-hero";
import { SearchPage } from "@/components/search-page";

export const metadata: Metadata = {
  title: "Search",
};

export default function SearchRoute() {
  return (
    <>
      <PageHero eyebrow="Search" title="Find a page." />
      <div className="bg-paper">
        <div className="container-site py-14 md:py-20">
          <Suspense fallback={<p className="text-muted">Loading search…</p>}>
            <SearchPage />
          </Suspense>
        </div>
      </div>
    </>
  );
}
