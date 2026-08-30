import Reveal from "@/components/Reveal";
import SplitReveal from "@/components/SplitReveal";
import { PageHero, CTABand } from "@/components/ui";
import { Ph } from "@/components/Placeholder";
import { qualityIntro, qualityItems, qualityStandard } from "@/lib/content";

export const metadata = {
  title: "Quality",
  description:
    "Quality at Voxpact isn't a promise. It's a set of systems that produce evidence every day: recorded calls, daily KPI reports, live QA, and verified data.",
};

export default function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality"
        title={qualityIntro.heading}
        lead={qualityIntro.body}
      />

      <section className="section">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">How we protect quality</span>
            <SplitReveal
              as="h2"
              className="display-l"
              text="Systems that produce evidence"
            />
          </div>

          <div className="q-list">
            {qualityItems.map((q, i) => (
              <Reveal className="q-row" key={q.title} y={24}>
                <span className="q-row__n">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{q.title}</h3>
                  <p>{q.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container split">
          <div>
            <span className="eyebrow">The Voxpact standard</span>
            <SplitReveal
              as="h2"
              className="display-m"
              text="Targets we hold ourselves to"
            />
          </div>
          <Reveal>
            <dl className="sla">
              {qualityStandard.map((s) => (
                <div key={s.label}>
                  <dt>{s.label}</dt>
                  <dd>
                    <Ph value={s.value} />
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <CTABand
        heading="Ask us for a sample report and a redacted call clip."
        sub="We'll show you exactly what your daily visibility looks like before you commit to anything."
        button="Request a sample"
      />
    </>
  );
}
