import Reveal from "@/components/Reveal";
import SplitReveal from "@/components/SplitReveal";
import { PageHero, CTABand } from "@/components/ui";
import { Ph } from "@/components/Placeholder";
import { aboutStory, aboutValues, leadership } from "@/lib/content";

export const metadata = {
  title: "About & Team",
  description:
    "Voxpact is built by operators, not middlemen. A team run out of Lahore, working US hours, with the infrastructure of a proper call center and one rule: the client can see everything.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Built by operators, not middlemen"
      />

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Our story</span>
          </div>
          <Reveal className="about-story stack-md" stagger={0.08} y={22}>
            {aboutStory.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">What we hold to</span>
            <SplitReveal as="h2" className="display-l" text="Three values, kept short" />
          </div>
          <Reveal className="values" stagger={0.1} y={26}>
            {aboutValues.map((v) => (
              <div className="value" key={v.title}>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Leadership</span>
            <SplitReveal
              as="h2"
              className="display-l"
              text="The people accountable for your account"
            />
          </div>
          <Reveal className="team-grid" stagger={0.08} y={24}>
            {leadership.map((m) => (
              <article className="team-card" key={m.name}>
                <span className="team-card__role">{m.role}</span>
                <h3>{m.name}</h3>
                <p>{m.body}</p>
                {m.note ? (
                  <p className="team-card__note">
                    <Ph value={m.note} />
                  </p>
                ) : null}
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <CTABand heading="Want to talk to the people who'll actually run your account?" />
    </>
  );
}
