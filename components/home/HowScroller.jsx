"use client";

import { useRef, useState } from "react";
import { useIsomorphicLayoutEffect as useLayoutEffect } from "@/components/useIso";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { howItWorks } from "@/lib/content";
import SplitReveal from "@/components/SplitReveal";
import Reveal from "@/components/Reveal";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function HowScroller() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const fillRef = useRef(null);
  const [horizontal, setHorizontal] = useState(false);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const fill = fillRef.current;
    if (!section || !track) return;

    const canHorizontal =
      window.innerWidth >= 860 &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setHorizontal(canHorizontal);
    if (!canHorizontal) return;

    const ctx = gsap.context(() => {
      const distance = () => track.scrollWidth - window.innerWidth + 80;

      const tween = gsap.to(track, {
        x: () => -distance(),
        ease: "none",
      });

      ScrollTrigger.create({
        animation: tween,
        trigger: section,
        start: "top top",
        end: () => "+=" + distance(),
        scrub: 0.6,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (fill) fill.style.transform = `scaleX(${self.progress})`;
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className={`hscroll section${horizontal ? " is-horizontal" : ""}`}
      ref={sectionRef}
    >
      <div className="container hscroll__head">
        <span className="sec-index">04</span>
        <span className="eyebrow">How it works</span>
        <SplitReveal
          as="h2"
          className="display-l"
          text="From first call to first result in days, not months"
        />
        <div className="hscroll__progress">
          <span ref={fillRef} />
        </div>
      </div>

      <div className="hscroll__track" ref={trackRef}>
        {howItWorks.map((s, i) => (
          <Reveal className="hpanel" key={s.step} y={30} delay={i * 0.04}>
            <span className="hpanel__step">{s.step}</span>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
            <span className="hpanel__line" />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
