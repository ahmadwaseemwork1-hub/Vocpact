"use client";

import { useRef, useState, useEffect } from "react";
import { useIsomorphicLayoutEffect as useLayoutEffect } from "@/components/useIso";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnetic from "@/components/Magnetic";
import { ArrowCircle } from "@/components/ui";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const LINES = ["The team that works", "your pipeline like", "it's their own."];

const TICKS = [
  "Auto + manual dialers",
  "Calls recorded, daily",
  "US business hours",
  "KPI report every morning",
  "CRM kept clean",
];

export default function Hero() {
  const root = useRef(null);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => (t + 1) % TICKS.length), 2600);
    return () => clearInterval(id);
  }, []);

  /* ---------- entrance timeline (waits for the intro loader) ---------- */
  useLayoutEffect(() => {
    const node = root.current;
    if (!node) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const q = gsap.utils.selector(node);
    const lines = q(".hero__line-in");
    const fades = q(".hero__fade");
    const orbs = q(".hero__orb");
    const bits = q(".hero__eyebrow .bar, .hero__ghost, .hero__grid");

    if (reduce) return; // everything renders in place

    // pre-hide before first paint
    gsap.set(lines, { yPercent: 120, rotate: 3 });
    gsap.set(fades, { autoAlpha: 0, y: 24 });
    gsap.set(orbs, { autoAlpha: 0 });
    gsap.set(q(".hero__eyebrow .bar"), { scaleX: 0 });
    gsap.set(q(".hero__ghost"), { autoAlpha: 0 });
    gsap.set(q(".hero__grid"), { autoAlpha: 0 });

    let played = false;
    let ctx;
    const play = () => {
      if (played) return;
      played = true;
      ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
        tl.to(q(".hero__grid"), { autoAlpha: 1, duration: 1.2 }, 0)
          .to(orbs, { autoAlpha: 1, duration: 1.6, stagger: 0.14 }, 0)
          .to(q(".hero__eyebrow .bar"), { scaleX: 1, duration: 0.7 }, 0.1)
          .to(q(".hero__eyebrow"), { autoAlpha: 1, y: 0, duration: 0.7 }, 0.15)
          .to(lines, { yPercent: 0, rotate: 0, duration: 1.05, stagger: 0.11 }, 0.28)
          .to(fades, { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.09 }, 0.7)
          .to(q(".hero__ghost"), { autoAlpha: 1, duration: 1.4 }, 0.55);
      }, node);
    };

    // eyebrow needs its own pre-hide (it's not in .hero__fade nth targeting)
    gsap.set(q(".hero__eyebrow"), { autoAlpha: 0, y: 16 });

    window.addEventListener("vx:intro-done", play, { once: true });
    const failsafe = setTimeout(play, 2600);

    return () => {
      window.removeEventListener("vx:intro-done", play);
      clearTimeout(failsafe);
      ctx?.revert();
      gsap.set([lines, fades, orbs, q(".hero__eyebrow"), q(".hero__ghost"), q(".hero__grid")], {
        clearProps: "all",
      });
    };
  }, []);

  /* ---------- scroll parallax ---------- */
  useLayoutEffect(() => {
    const node = root.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const st = (scrub = 1) => ({
        trigger: node,
        start: "top top",
        end: "bottom top",
        scrub,
      });
      gsap.to(".hero__orb--1", { yPercent: 24, immediateRender: false, ease: "none", scrollTrigger: st() });
      gsap.to(".hero__orb--2", { yPercent: -18, immediateRender: false, ease: "none", scrollTrigger: st() });
      gsap.to(".hero__orb--3", { yPercent: 42, immediateRender: false, ease: "none", scrollTrigger: st(1.5) });
      gsap.to(".hero__ghost", { yPercent: -12, immediateRender: false, ease: "none", scrollTrigger: st(1.4) });
      gsap.to(".hero__content", {
        yPercent: 8,
        autoAlpha: 0.5,
        immediateRender: false,
        ease: "none",
        scrollTrigger: st(0.5),
      });
    }, node);

    return () => ctx.revert();
  }, []);

  /* ---------- pointer parallax ---------- */
  useEffect(() => {
    const node = root.current;
    if (!node) return;
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const layers = [
      { el: node.querySelector(".hero__orb--1"), d: 26 },
      { el: node.querySelector(".hero__orb--2"), d: -20 },
      { el: node.querySelector(".hero__orb--3"), d: 40 },
      { el: node.querySelector(".hero__ghost"), d: 14 },
      { el: node.querySelector(".hero__grid"), d: 8 },
      { el: node.querySelector(".hero__content"), d: -6 },
    ].filter((l) => l.el);

    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;
    let raf;
    const loop = () => {
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      layers.forEach(({ el, d }) => {
        el.style.setProperty("--px", `${cx * d}px`);
        el.style.setProperty("--py", `${cy * d}px`);
      });
      raf = requestAnimationFrame(loop);
    };
    loop();

    const onMove = (e) => {
      tx = e.clientX / window.innerWidth - 0.5;
      ty = e.clientY / window.innerHeight - 0.5;
    };
    node.addEventListener("mousemove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      node.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <section className="hero on-dark" ref={root}>
      <div className="hero__bg">
        <div className="hero__mesh" />
        <div className="hero__grid" />
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
      </div>
      <div className="grain" />
      <div className="hero__ghost" aria-hidden="true">Voxpact</div>

      <div className="container hero__content">
        <span className="eyebrow hero__eyebrow">
          <i className="bar" />
          <i className="pulse" /> Offshore teams. Onshore standards.
        </span>

        <h1 className="hero__title display-2xl">
          {LINES.map((line, i) => (
            <span
              className={`hero__line${i === 2 ? " hero__line--accent" : ""}`}
              key={i}
            >
              <span className="hero__line-in">{line}</span>
            </span>
          ))}
        </h1>

        <p className="hero__sub hero__fade">
          Outbound sales, live insurance transfers, customer support, and lead generation
          for US companies, with trained agents, real dialer infrastructure, and reporting
          in your inbox every morning.
        </p>

        <div className="hero__cta hero__fade">
          <Magnetic href="/book" className="btn btn--arrow" data-cursor="book">
            <span>Book a 15-minute call</span>
            <ArrowCircle />
          </Magnetic>
          <Magnetic href="/services" className="link-underline">
            See what we do
          </Magnetic>
        </div>

        <div className="hero__foot hero__fade">
          <div className="hero__ticker" aria-hidden="true">
            <span
              className="hero__ticker-rail"
              style={{ transform: `translateY(${-tick * 100}%)` }}
            >
              {TICKS.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </span>
          </div>
          <div className="hero__scroll">
            <span>Scroll</span>
            <i />
          </div>
        </div>
      </div>
    </section>
  );
}
