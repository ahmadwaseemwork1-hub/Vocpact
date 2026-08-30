"use client";

import { useEffect, useRef } from "react";

/**
 * Two marquee rows scrolling opposite ways (CSS). Scroll velocity nudges the
 * speed and adds a slight skew for a reactive, physical feel.
 */
export default function Marquee({ items = [], speed = 32, rows = 2 }) {
  const wrapRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const tracks = wrap.querySelectorAll(".marquee__track");
    const lenis = window.__lenis;
    if (!lenis) return;

    let skew = 0;
    let skewTarget = 0;
    let raf;
    const render = () => {
      skew += (skewTarget - skew) * 0.1;
      wrap.style.setProperty("--skew", `${skew.toFixed(2)}deg`);
      raf = requestAnimationFrame(render);
    };
    render();

    let resetT;
    const onScroll = ({ velocity = 0 }) => {
      const f = Math.max(-5, Math.min(5, velocity / 9));
      skewTarget = f;
      tracks.forEach((t) => {
        t.style.animationDuration = `${speed / (1 + Math.abs(f) / 3)}s`;
      });
      clearTimeout(resetT);
      resetT = setTimeout(() => {
        skewTarget = 0;
        tracks.forEach((t) => (t.style.animationDuration = `${speed}s`));
      }, 150);
    };
    lenis.on("scroll", onScroll);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(resetT);
      lenis.off("scroll", onScroll);
    };
  }, [speed]);

  const line = [...items, ...items, ...items];

  return (
    <div className="marquee" ref={wrapRef} style={{ "--speed": `${speed}s` }}>
      {Array.from({ length: rows }).map((_, r) => (
        <div
          className={`marquee__row marquee__row--${r % 2 === 0 ? "a" : "b"}`}
          key={r}
        >
          <div className="marquee__track">
            {line.map((it, i) => (
              <span className="marquee__item" key={i}>
                {it}
                <i className="marquee__star" />
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
