"use client";

import { useRef } from "react";
import { useIsomorphicLayoutEffect as useLayoutEffect } from "@/components/useIso";

/**
 * Scroll-reveal wrapper. JS arms the hidden state (so no-JS users see content),
 * CSS runs the animation, IntersectionObserver toggles `.is-in`.
 * - default: fades/slides the element itself
 * - stagger (truthy): animates direct children in sequence
 * - variant: "fade" | "clip" | "rise"
 */
export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  y = 28,
  delay = 0,
  stagger = false,
  variant = "fade",
}) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      node.classList.add("is-in");
      return;
    }

    node.classList.add("reveal--armed");
    if (delay) node.style.transitionDelay = `${delay}s`;

    const show = () => node.classList.add("is-in");

    if (typeof IntersectionObserver === "undefined") {
      show();
      return;
    }

    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) {
      setTimeout(show, 60);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          show();
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.01 }
    );
    io.observe(node);
    const t = setTimeout(show, 1800); // safety net

    return () => {
      clearTimeout(t);
      io.disconnect();
    };
  }, [delay]);

  const cls = [
    "reveal",
    `reveal--${variant}`,
    stagger ? "reveal--stagger" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag ref={ref} className={cls} style={{ "--rev-y": `${y}px` }}>
      {children}
    </Tag>
  );
}
