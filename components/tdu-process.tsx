import { PhotoFrame } from "@/components/photo-frame";
import { Reveal } from "@/components/reveal";
import { tduAreas, tduQualityFlow, tduSteps } from "@/lib/site";

export function TduProcess() {
  return (
    <div className="space-y-20">
      <section>
        <p className="font-cond text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-blue">
          Plant layout
        </p>
        <h2 className="mt-2 font-display text-4xl text-navy">
          Main areas of the TDU site
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Four thermal desorption units sit at the centre of the plant, with
          receiving, preparation, discharge, control, utilities and emergency
          ground around them.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tduAreas.map((area, index) => (
            <Reveal key={area.step} delay={(index % 3) * 70}>
              <article>
                <PhotoFrame
                  item={{ caption: area.title, fileHint: area.file }}
                  alt={area.title}
                  index={index}
                  aspect="aspect-[4/3]"
                  kicker={area.step}
                  title={area.title}
                  labeled
                />
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {area.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section>
        <p className="font-cond text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-blue">
          Operating sequence
        </p>
        <h2 className="mt-2 font-display text-4xl text-navy">
          How soil moves through the four TDUs
        </h2>
        <ol className="mt-10 space-y-8">
          {tduSteps.map((item, index) => (
            <li key={item.step}>
              <Reveal>
                <article
                  className={`grid overflow-hidden ring-1 ring-line md:grid-cols-2 ${
                    index % 2 === 1 ? "md:[&>figure]:order-2" : ""
                  }`}
                >
                  <PhotoFrame
                    item={{ caption: item.title, fileHint: item.file }}
                    alt={item.title}
                    index={index}
                    aspect="aspect-[16/10] md:aspect-auto md:min-h-72"
                    kicker={`Step ${item.step}`}
                    title={item.title}
                    labeled
                  />
                  <div className="flex flex-col justify-center bg-white p-6 md:p-10">
                    <p className="font-cond text-sm text-blue">Step {item.step}</p>
                    <h3 className="mt-2 font-display text-3xl text-navy">
                      {item.title}
                    </h3>
                    <p className="mt-4 leading-relaxed text-muted">{item.body}</p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <p className="font-cond text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-blue">
          Release to the field
        </p>
        <h2 className="mt-2 font-display text-4xl text-navy">
          From contaminated soil to approved treated soil
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Nothing leaves the plant as approved until Panloy laboratory pH and AH
          testing and a quality-control review are complete.
        </p>
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tduQualityFlow.map((item, index) => (
            <li key={item.step}>
              <Reveal delay={(index % 4) * 60}>
                <PhotoFrame
                  item={{ caption: item.title, fileHint: item.file }}
                  alt={item.title}
                  index={index}
                  aspect="aspect-[4/5]"
                  kicker={item.step}
                  title={item.title}
                  labeled
                />
              </Reveal>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
