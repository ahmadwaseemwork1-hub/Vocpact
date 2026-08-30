"use client";

import { useRef } from "react";
import { useIsomorphicLayoutEffect as useLayoutEffect } from "@/components/useIso";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { homeServices } from "@/lib/content";
import { Arrow } from "@/components/ui";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function ServicesStack() {
  const wrap = useRef(null);

  useLayoutEffect(() => {
    const node = wrap.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.innerWidth < 760) return; // stacked-scale only makes sense with room

    const cards = gsap.utils.toArray(".stack-card", node);
    const ctx = gsap.context(() => {
      cards.forEach((card, i) => {
        const next = cards[i + 1];
        if (!next) return;
        gsap.fromTo(
          card,
          { scale: 1, filter: "brightness(1)" },
          {
            scale: 0.9,
            filter: "brightness(0.72)",
            ease: "none",
            immediateRender: false,
            scrollTrigger: {
              trigger: next,
              start: "top 80%",
              end: "top 18%",
              scrub: true,
            },
          }
        );
      });
    }, node);

    return () => ctx.revert();
  }, []);

  return (
    <div className="stack" ref={wrap}>
      {homeServices.map((s, i) => (
        <article
          className={`stack-card${i === 1 ? " stack-card--accent" : ""}`}
          style={{ top: `calc(var(--stack-top) + ${i * 14}px)`, zIndex: i + 1 }}
          key={s.title}
          data-cursor="hover"
        >
          <div className="stack-card__top">
            <span className="stack-card__idx">{String(i + 1).padStart(2, "0")}</span>
            <span className="stack-card__count">/ 06</span>
          </div>
          <div className="stack-card__body">
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </div>
          <div className="stack-card__foot">
            <span className="stack-card__tag">
              {i === 1 ? "Specialty desk" : "Service"}
            </span>
            <Arrow />
          </div>
        </article>
      ))}
    </div>
  );
}
