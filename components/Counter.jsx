"use client";

import { useRef, useState } from "react";
import { useIsomorphicLayoutEffect as useLayoutEffect } from "@/components/useIso";

/**
 * Counts up when scrolled into view.
 * - number / numeric string  -> animated count-up (rAF), with a timeout fallback
 * - {p:"..."} placeholder     -> renders the findable [token]
 * - other string             -> rendered as-is
 */
export default function Counter({ value, prefix = "", suffix = "", duration = 1800 }) {
  const ref = useRef(null);
  const isPlaceholder = value && typeof value === "object" && "p" in value;
  const target =
    typeof value === "number"
      ? value
      : isPlaceholder
      ? NaN
      : Number(String(value).replace(/[, ]/g, ""));
  const isNumeric = Number.isFinite(target);
  const decimals = isNumeric && !Number.isInteger(target) ? 1 : 0;
  const fmt = (n) =>
    n.toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  const [display, setDisplay] = useState(isNumeric ? fmt(0) : "");

  useLayoutEffect(() => {
    if (!isNumeric) return;
    const node = ref.current;
    if (!node) return;

    let raf;
    let started = false;
    let fallback;

    const run = () => {
      if (started) return;
      started = true;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setDisplay(fmt(target));
        return;
      }
      const t0 = performance.now();
      const tick = (now) => {
        const p = Math.min((now - t0) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setDisplay(fmt(target * eased));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
      fallback = setTimeout(() => setDisplay(fmt(target)), duration + 400);
    };

    let io;
    if (typeof IntersectionObserver === "undefined") {
      run();
    } else {
      io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            run();
            io.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      io.observe(node);
    }
    const startFallback = setTimeout(run, 2000);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(fallback);
      clearTimeout(startFallback);
      if (io) io.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, isNumeric, duration]);

  return (
    <span ref={ref} className="stat__val">
      {prefix}
      {isPlaceholder ? (
        <span className="ph">[{value.p}]</span>
      ) : isNumeric ? (
        display
      ) : (
        value
      )}
      {suffix ? <em>{suffix}</em> : null}
    </span>
  );
}
