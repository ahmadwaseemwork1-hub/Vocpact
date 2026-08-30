"use client";

import { useEffect, useRef } from "react";

/**
 * Custom cursor: a small dot that lags a larger ring, with contextual
 * labels ("view", "drag", "book") driven by [data-cursor] on hovered elements.
 * Disabled on touch / coarse pointers.
 */
export default function Cursor() {
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;
    const ring = ringRef.current;
    const dot = dotRef.current;
    const label = labelRef.current;
    if (!ring || !dot) return;

    let mx = innerWidth / 2;
    let my = innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf;

    const loop = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    loop();

    const move = (e) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const over = (e) => {
      const el =
        e.target instanceof Element
          ? e.target.closest(
              "a, button, [data-cursor], input, textarea, select, .svc-card, .rev-card, .stack-card, .srow"
            )
          : null;
      const state = el?.getAttribute?.("data-cursor");
      ring.classList.toggle("is-hover", !!el);
      ring.classList.toggle("is-label", !!state && state !== "hover");
      if (label) label.textContent = state && state !== "hover" ? state : "";
    };

    const down = () => ring.classList.add("is-down");
    const up = () => ring.classList.remove("is-down");
    const leave = () => {
      ring.classList.add("is-hidden");
      dot.classList.add("is-hidden");
    };
    const enter = () => {
      ring.classList.remove("is-hidden");
      dot.classList.remove("is-hidden");
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, []);

  return (
    <>
      <div className="cursor-ring" ref={ringRef} aria-hidden="true">
        <span className="cursor-label" ref={labelRef} />
      </div>
      <div className="cursor-dot" ref={dotRef} aria-hidden="true" />
    </>
  );
}
