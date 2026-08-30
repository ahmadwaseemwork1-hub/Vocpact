"use client";

import { useEffect, useRef, useState } from "react";

/**
 * First-visit intro loader: counter 0 -> 100, wordmark, then the panel wipes up.
 * Only shows once per browser session (sessionStorage). Fully skipped for
 * prefers-reduced-motion.
 */
export default function Loader() {
  const [phase, setPhase] = useState("init"); // init | counting | out | done
  const [pct, setPct] = useState(0);
  const rootRef = useRef(null);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("vx_intro") === "1";
    } catch (_) {}
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const fire = () => window.dispatchEvent(new Event("vx:intro-done"));

    if (seen || reduce) {
      setPhase("done");
      setTimeout(fire, 40);
      return;
    }

    try {
      sessionStorage.setItem("vx_intro", "1");
    } catch (_) {}

    // lock scroll while the loader is up
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    window.__lenis?.stop?.();

    setPhase("counting");
    const start = performance.now();
    const dur = 1500;
    let raf;
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 2);
      setPct(Math.round(eased * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setPhase("out"), 220);
    };
    raf = requestAnimationFrame(tick);

    // hard fallback so the loader can never trap the page
    const bail = setTimeout(() => setPhase("out"), 3200);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(bail);
    };
  }, []);

  useEffect(() => {
    if (phase !== "out") return;
    const t = setTimeout(() => {
      setPhase("done");
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      window.__lenis?.start?.();
      window.dispatchEvent(new Event("vx:intro-done"));
    }, 900);
    return () => clearTimeout(t);
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div
      ref={rootRef}
      className={`loader loader--${phase}`}
      aria-hidden="true"
      role="presentation"
    >
      <div className="loader__inner">
        <span className="loader__word">
          {"Voxpact".split("").map((c, i) => (
            <span key={i} style={{ transitionDelay: `${i * 0.03}s` }}>
              {c}
            </span>
          ))}
        </span>
        <span className="loader__count">{String(pct).padStart(3, "0")}</span>
      </div>
      <span className="loader__bar" style={{ transform: `scaleX(${pct / 100})` }} />
    </div>
  );
}
