import Reveal from "@/components/Reveal";
import SplitReveal from "@/components/SplitReveal";
import Counter from "@/components/Counter";
import { PageHero, CTABand } from "@/components/ui";
import { reviewPlaceholders, reviewResults } from "@/lib/content";

export const metadata = {
  title: "Reviews",
  description:
    "Straight from the businesses whose pipelines Voxpact runs. Real client reviews across insurance, sales, support, and data.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="What it's like to work with us"
        lead="Straight from the businesses whose pipelines we run."
      />

      <section className="section">
        <div className="container">
          <Reveal className="rev-grid" stagger={0.07} y={26}>
            {reviewPlaceholders.map((r, i) => (
              <article className="rev-card" key={i}>
                <span className="rev-card__stars">★★★★★</span>
                <p className="rev-card__quote">&ldquo;{r.quote}&rdquo;</p>
                <div className="rev-card__meta">
                  {r.name} · {r.role}
                  <span className="rev-card__svc">Service used: {r.service}</span>
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section stats on-dark">
        <div className="grain" />
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Results strip</span>
            <SplitReveal
              as="h2"
              className="display-l"
              text="The numbers so far"
            />
          </div>
          <div className="stats__grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
            {reviewResults.map((s, i) => (
              <div key={i}>
                <Counter value={s.value} suffix={s.suffix} />
                <p className="stat__label">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand heading="Want to be our next case study?" />
    </>
  );
}
