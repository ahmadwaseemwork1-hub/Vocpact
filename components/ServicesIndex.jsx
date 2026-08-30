"use client";

import { useEffect, useState } from "react";
import { serviceGroups } from "@/lib/content";

export default function ServicesIndex() {
  const [active, setActive] = useState(serviceGroups[0].id);

  useEffect(() => {
    const sections = serviceGroups
      .map((g) => document.getElementById(g.id))
      .filter(Boolean);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const go = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const lenis = window.__lenis;
    if (lenis) lenis.scrollTo(el, { offset: -100 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="svc-index" aria-label="Service categories">
      <ol>
        {serviceGroups.map((g) => (
          <li key={g.id}>
            <a
              href={`#${g.id}`}
              className={active === g.id ? "is-active" : ""}
              onClick={(e) => go(e, g.id)}
            >
              {g.name}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
