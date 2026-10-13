import Link from "next/link";
import type { GalleryItem } from "@/lib/projects";

type HeroStill = {
  item: GalleryItem;
  kicker: string;
  title: string;
  alt: string;
  objectPosition?: string;
};

type HomeHeroProps = {
  photo: GalleryItem;
  stills: HeroStill[];
  photoAlt?: string;
};

const card =
  "rounded-xl border border-navy/10 bg-white text-navy shadow-[0_18px_40px_rgba(7,15,58,0.12)]";

function imageSource(item: GalleryItem) {
  return item.src ?? `/${item.fileHint}`;
}

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={`h-5 w-5 shrink-0 ${diagonal ? "-rotate-45" : ""}`}
    >
      <path
        d="M4 12h15m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeroCopy() {
  return (
    <>
      <div className="mb-5 flex items-center gap-3">
        <span aria-hidden="true" className="h-px w-8 bg-blue" />
        <p className="font-cond text-xs font-semibold uppercase tracking-[0.16em] text-blue">
          Built on local capability
        </p>
      </div>

      <h1
        id="home-hero-heading"
        className="font-display text-[clamp(1.7rem,3.1vw,3.15rem)] leading-[1.12] tracking-[-0.03em] text-balance"
      >
        Pioneers in integrated hazardous wastes & environmental
        solutions in <span className="text-blue">South Sudan</span>
      </h1>

      <Link
        href="/what-we-do"
        className="group mt-6 inline-flex min-h-12 items-center gap-5 rounded-sm bg-blue px-5 py-3 font-cond text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
      >
        Explore our capabilities
        <span className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          <Arrow />
        </span>
      </Link>
    </>
  );
}

export function HomeHero({
  photo,
  stills,
  photoAlt = "",
}: HomeHeroProps) {
  return (
    <section
      aria-labelledby="home-hero-heading"
      className="bg-white text-navy"
    >
      <div className="border-b border-line">
        <div className="container-site flex flex-wrap items-center justify-between gap-3 py-4">
          <p className="font-cond text-xs font-semibold uppercase tracking-[0.18em]">
            Panloy Group
            <span aria-hidden="true" className="mx-3 text-navy/35">
              /
            </span>
            South Sudan
          </p>
          <p className="text-xs text-navy/70">
            Local knowledge. Lasting value.
          </p>
        </div>
      </div>

      <div className="grid bg-navy lg:grid-cols-[minmax(22rem,34rem)_minmax(0,1fr)] lg:items-center">
        <div className="order-2 flex items-center px-5 py-8 sm:px-8 lg:order-1 lg:px-10 lg:py-10">
          <div className={`${card} w-full p-6 sm:p-8`}>
            <HeroCopy />
          </div>
        </div>

        <div className="order-1 flex items-center justify-center px-4 py-4 lg:order-2 lg:px-6 lg:py-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSource(photo)}
            alt={photoAlt}
            fetchPriority="high"
            decoding="async"
            className="h-auto max-h-[28svh] w-[50rem] object-contain md:max-h-[36svh] lg:max-h-[35rem]"
          />
        </div>
      </div>

      <div className="container-site space-y-8 py-8 sm:py-10">
        <div
          className={`${card} grid gap-5 p-6 sm:p-7 md:grid-cols-[1fr_1.1fr_auto] md:items-center md:gap-7`}
        >
          <div>
            <p className="font-cond text-xs font-semibold uppercase tracking-[0.16em] text-blue">
              Our purpose
            </p>
            <h2 className="mt-2 font-display text-2xl leading-tight sm:text-3xl">
              Practical expertise.
              <br />
              Lasting value.
            </h2>
          </div>
          <p className="max-w-lg text-base leading-7 text-navy/75">
            We help businesses operate in demanding environments. Our people
            bring practical experience and local understanding to every project.
          </p>
          <Link
            href="/contact"
            className="group inline-flex min-h-12 w-fit items-center gap-5 rounded-sm border border-navy/20 px-5 py-3 font-cond text-xs font-semibold uppercase tracking-[0.12em] text-navy transition-colors hover:border-blue hover:bg-blue hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
          >
            Talk to our team
            <span className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none">
              <Arrow diagonal />
            </span>
          </Link>
        </div>

        {stills.length > 0 ? (
          <div>
            <h2 className="mb-4 font-cond text-xs font-semibold uppercase tracking-[0.16em] text-blue">
              A closer look at our work
            </h2>
            <ul className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
              {stills.map((still, index) => (
                <li
                  key={`${imageSource(still.item)}-${still.title}`}
                  className={`${card} min-w-0 overflow-hidden p-3`}
                >
                  <div className="aspect-[16/10] max-h-28 overflow-hidden rounded-md bg-navy/5 md:max-h-none">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={imageSource(still.item)}
                      alt={still.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                      style={{
                        objectPosition: still.objectPosition ?? "center",
                      }}
                    />
                  </div>
                  <div className="flex items-start gap-3 px-2 pb-2 pt-4">
                    <span
                      aria-hidden="true"
                      className="pt-0.5 font-cond text-xs tabular-nums text-blue"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-cond text-xs font-semibold uppercase tracking-[0.12em] text-blue">
                        {still.kicker}
                      </p>
                      <h3 className="mt-1 font-display text-xl leading-tight sm:text-2xl">
                        {still.title}
                      </h3>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}
