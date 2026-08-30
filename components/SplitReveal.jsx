"use client";

import { useRef } from "react";
import { useIsomorphicLayoutEffect as useLayoutEffect } from "@/components/useIso";

/**
 * Masked word-by-word headline reveal (the effect used on phive / digitalists).
 * JS arms the hidden state + toggles `.is-in`; CSS runs the animation.
 */
export default function SplitReveal({
  text,
  as: Tag = "h2",
  className = "",
  trigger = "scroll", // "scroll" | "load"
  delay = 0,
  stagger = 0.045,
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

    node.classList.add("split-reveal--armed");
    const show = () => node.classList.add("is-in");

    if (trigger === "load" || typeof IntersectionObserver === "undefined") {
      setTimeout(show, 60);
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
      { rootMargin: "0px 0px -8% 0px", threshold: 0.01 }
    );
    io.observe(node);
    const t = setTimeout(show, 1800);

    return () => {
      clearTimeout(t);
      io.disconnect();
    };
  }, [text, trigger]);

  const words = String(text).split(" ");

  return (
    <Tag ref={ref} className={`split-reveal ${className}`.trim()}>
      {words.map((w, i) => (
        <span key={i}>
          <span className="sr-word">
            <span style={{ transitionDelay: `${delay + i * stagger}s` }}>{w}</span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
}
