"use client";

import { useRef } from "react";
import { useIsomorphicLayoutEffect as useLayoutEffect } from "@/components/useIso";
import { Arrow } from "@/components/ui";

/**
 * Expanding service rows. Description is always in the DOM; on pointer devices
 * it collapses and expands on hover/focus, on touch it stays open.
 */
export default function ServiceRows({ items = [] }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;
    const rows = Array.from(node.children);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") {
      rows.forEach((r) => r.classList.add("is-in"));
      return;
    }
    rows.forEach((r) => r.classList.add("srow--armed"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.01 }
    );
    rows.forEach((r, i) => {
      r.style.transitionDelay = `${Math.min(i, 8) * 0.04}s`;
      if (r.getBoundingClientRect().top < window.innerHeight * 0.92)
        r.classList.add("is-in");
      else io.observe(r);
    });
    const t = setTimeout(() => rows.forEach((r) => r.classList.add("is-in")), 1800);
    return () => {
      clearTimeout(t);
      io.disconnect();
    };
  }, [items]);

  return (
    <ul className="srows" ref={ref}>
      {items.map(([name, body]) => (
        <li className="srow" key={name} tabIndex={0} data-cursor="hover">
          <div className="srow__bar">
            <span className="srow__name">{name}</span>
            <span className="srow__icon">
              <Arrow />
            </span>
          </div>
          <div className="srow__panel">
            <p>{body}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
