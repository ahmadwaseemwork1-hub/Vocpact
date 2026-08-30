import Reveal from "@/components/Reveal";
import SplitReveal from "@/components/SplitReveal";
import ServicesIndex from "@/components/ServicesIndex";
import ServiceRows from "@/components/ServiceRows";
import { PageHero, CTABand } from "@/components/ui";
import {
  servicesIntro,
  serviceGroups,
  voiceIncludes,
} from "@/lib/content";

export const metadata = {
  title: "Services",
  description:
    "The full Voxpact catalog: lead generation and telemarketing, customer service, marketing, research, data and transcription, content, project management, and virtual assistance.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={servicesIntro.heading}
        lead={servicesIntro.body}
      />

      <section className="section">
        <div className="container svc-layout">
          <ServicesIndex />

          <div>
            {serviceGroups.map((g) => (
              <div className="svc-group" id={g.id} key={g.id}>
                <div className="svc-group__head">
                  <span className="svc-group__num">{g.number}</span>
                  <SplitReveal as="h2" className="display-m" text={g.name} />
                  {g.tag ? <span className="svc-group__tag">{g.tag}</span> : null}
                </div>
                <Reveal>
                  <p className="svc-group__blurb">{g.blurb}</p>
                </Reveal>

                <ServiceRows items={g.items} />

                {g.id === "lead-generation" ? (
                  <Reveal className="includes">
                    <h3>Included free with every voice engagement</h3>
                    <p className="k">The infrastructure most shops can&rsquo;t offer.</p>
                    <div className="includes__grid">
                      {voiceIncludes.map(([name, body]) => (
                        <div key={name}>
                          <h4>{name}</h4>
                          <p>{body}</p>
                        </div>
                      ))}
                    </div>
                  </Reveal>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        heading="Not sure which of these you need?"
        sub="Tell us the outcome you're after and we'll map the right mix. Most clients start with one service and expand once they see the numbers."
      />
    </>
  );
}
