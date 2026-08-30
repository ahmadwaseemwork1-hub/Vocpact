"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";

/**
 * Magnetic hover wrapper. Renders a Next <Link> when `href` is set,
 * otherwise a <button>.
 */
export default function Magnetic({
  href,
  children,
  className,
  strength = 0.35,
  ...rest
}) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * strength;
    const y = (e.clientY - (r.top + r.height / 2)) * strength;
    gsap.to(el, { x, y, duration: 0.5, ease: "power3.out" });
  };

  const onLeave = () => {
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.4)" });
  };

  const shared = {
    ref,
    className,
    onMouseMove: onMove,
    onMouseLeave: onLeave,
    "data-cursor": "hover",
    ...rest,
  };

  if (href) {
    return (
      <Link href={href} {...shared}>
        {children}
      </Link>
    );
  }
  return <button {...shared}>{children}</button>;
}
