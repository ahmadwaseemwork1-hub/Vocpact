import Hero from "@/components/home/Hero";
import HowScroller from "@/components/home/HowScroller";
import ServicesStack from "@/components/home/ServicesStack";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import SplitReveal from "@/components/SplitReveal";
import Counter from "@/components/Counter";
import Magnetic from "@/components/Magnetic";
import { Arrow, CTABand } from "@/components/ui";
import { Ph } from "@/components/Placeholder";
import {
  trustStrip,
  whyVoxpact,
  homeStats,
  homeTestimonial,
} from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Marquee items={trustStrip} />

      {/* ---- problem ---- */}
      <section className="section problem">
        <div className="container split">
          <div className="problem__aside">
            <span className="sec-index">01</span>
            <span className="eyebrow">The problem we fix</span>
          </div>
          <div>
            <SplitReveal
              as="h2"
              className="display-l"
              text="Most businesses don't lose deals because their offer is weak."
            />
            <Reveal className="prose" delay={0.1}>
              <p style={{ marginTop: "clamp(20px, 3vw, 34px)" }}>
                They lose them because nobody is working the phones consistently, the leads
                are stale, and the follow-up quietly falls through the cracks.
              </p>
              <p>
                Hiring in-house is slow and expensive. Cheap freelancers disappear. And most
                outsourcing feels like handing your brand to strangers and hoping.
              </p>
              <p>
                <strong>Voxpact is built to remove that risk.</strong> You get a trained
                team, real calling infrastructure, and a daily view of every dial, connect,
                and booked meeting, so outsourcing finally feels like control, not a gamble.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---- services (sticky intro + stacking cards) ---- */}
      <section className="section services">
        <div className="container services__grid">
          <div className="services__intro">
            <span className="sec-index">02</span>
            <span className="eyebrow">What we do</span>
            <SplitReveal
              as="h2"
              className="display-l"
              text="One team for the whole funnel"
            />
            <p className="lead">
              We fill the top of your funnel and work it all the way to a booked call, then
              keep your customers happy once they&rsquo;re in.
            </p>
            <Magnetic href="/services" className="link-underline">
              Explore all services <Arrow />
            </Magnetic>
          </div>

          <ServicesStack />
        </div>
      </section>

      {/* ---- why ---- */}
      <section className="section why">
        <div className="container">
          <div className="sec-head">
            <span className="sec-index">03</span>
            <span className="eyebrow">Why Voxpact</span>
            <SplitReveal as="h2" className="display-l" text="Why teams stay with us" />
          </div>
          <Reveal className="why-grid" stagger y={36}>
            {whyVoxpact.map((w, i) => (
              <div className="why-item" key={w.title}>
                <span className="why-item__n">{String(i + 1).padStart(2, "0")}</span>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <HowScroller />

      {/* ---- stats ---- */}
      <section className="section stats on-dark">
        <div className="hero__mesh stats__mesh" />
        <div className="grain" />
        <div className="container">
          <div className="sec-head">
            <span className="sec-index">05</span>
            <span className="eyebrow">By the numbers</span>
            <SplitReveal as="h2" className="display-l" text="The work, quantified" />
            <p className="lead" style={{ marginTop: "1rem" }}>
              A snapshot across active campaigns. Every number here is one we can back with
              recordings and daily reports.
            </p>
          </div>
          <div className="stats__grid">
            {homeStats.map((s, i) => (
              <div className="stat" key={i}>
                <Counter value={s.value} suffix={s.suffix} />
                <p className="stat__label">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- testimonial ---- */}
      <section className="section quote-sec">
        <div className="container split split--even">
          <div>
            <span className="sec-index">06</span>
            <span className="eyebrow">Client words</span>
          </div>
          <div className="quote">
            <SplitReveal as="blockquote" text={homeTestimonial.quote.p} />
            <div className="quote__by">
              <b>
                <Ph value={homeTestimonial.name} />
              </b>
              <span>
                <Ph value={homeTestimonial.role} />
              </span>
            </div>
            <Magnetic href="/reviews" className="link-underline">
              Read client reviews <Arrow />
            </Magnetic>
          </div>
        </div>
      </section>

      <CTABand
        heading="Tell us what you're selling. We'll tell you honestly if we can move the needle."
        sub="Fifteen minutes, no pressure, no scripts read at you. Just a straight conversation about your pipeline."
        button="Book your call"
      />
    </>
  );
}
