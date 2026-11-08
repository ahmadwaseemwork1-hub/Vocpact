"use client";

import { useEffect } from "react";

/** Pointer spotlight on the giant footer wordmark (sets --mx/--my/--glow). */
export default function FooterFx() {
  useEffect(() => {
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;
    const footer = document.querySelector(".footer");
    const word = footer?.querySelector(".footer__wordmark span");
    if (!footer || !word) return;

    const move = (e) => {
      const r = word.getBoundingClientRect();
      word.style.setProperty("--mx", `${e.clientX - r.left}px`);
      word.style.setProperty("--my", `${e.clientY - r.top}px`);
      word.style.setProperty("--glow", "1");
    };
    const leave = () => word.style.setProperty("--glow", "0");

    footer.addEventListener("mousemove", move);
    footer.addEventListener("mouseleave", leave);
    return () => {
      footer.removeEventListener("mousemove", move);
      footer.removeEventListener("mouseleave", leave);
    };
  }, []);

  return null;
}

export function BackToTop() {
  const go = () => {
    const lenis = window.__lenis;
    if (lenis) lenis.scrollTo(0, { duration: 1.4 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button type="button" className="footer__top-btn" onClick={go} aria-label="Back to top">
      <span>Back to top</span>
      <i>
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 19V5M6 11l6-6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </i>
    </button>
  );
}
