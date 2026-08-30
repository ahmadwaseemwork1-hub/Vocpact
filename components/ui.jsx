import Link from "next/link";
import Magnetic from "@/components/Magnetic";
import SplitReveal from "@/components/SplitReveal";
import Reveal from "@/components/Reveal";

export function Arrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Circular arrow badge that spins/slides on hover (used on primary CTAs). */
export function ArrowCircle() {
  return (
    <span className="arrow-circle" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M6 18L18 6M18 6H9M18 6v9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

/** Section heading block: eyebrow + masked title + optional lead. */
export function SectionHead({ eyebrow, title, lead, align = "left" }) {
  return (
    <div className={`sec-head sec-head--${align}`}>
      {eyebrow ? (
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
      ) : null}
      <SplitReveal as="h2" className="display-l" text={title} />
      {lead ? (
        <Reveal delay={0.12}>
          <p className="lead">{lead}</p>
        </Reveal>
      ) : null}
    </div>
  );
}

/** Full-bleed blue closing CTA used on every page. */
export function CTABand({ heading, sub, button = "Book a call", href = "/book" }) {
  return (
    <section className="cta section">
      <div className="cta__word" aria-hidden="true">Let&rsquo;s&nbsp;talk</div>
      <div className="container cta__inner">
        <SplitReveal as="h2" className="cta__title" text={heading} />
        {sub ? (
          <Reveal delay={0.1}>
            <p>{sub}</p>
          </Reveal>
        ) : null}
        <Reveal delay={0.18}>
          <Magnetic href={href} className="btn btn--light btn--arrow" data-cursor="book">
            <span>{button}</span>
            <ArrowCircle />
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}

/** Inner-page hero (About / Quality / Services / Reviews / Book). */
export function PageHero({ eyebrow, title, lead }) {
  return (
    <header className="page-hero on-dark">
      <div className="page-hero__bg" aria-hidden="true">
        <span className="page-hero__orb" />
        <span className="hero__grid" />
      </div>
      <div className="grain" />
      <div className="container page-hero__inner">
        {eyebrow ? (
          <Reveal>
            <span className="eyebrow">{eyebrow}</span>
          </Reveal>
        ) : null}
        <SplitReveal as="h1" className="display-xl" text={title} trigger="load" delay={0.15} />
        {lead ? (
          <Reveal delay={0.12}>
            <p className="lead">{lead}</p>
          </Reveal>
        ) : null}
      </div>
    </header>
  );
}

export { Link };
