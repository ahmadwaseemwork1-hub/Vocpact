"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Template({ children }) {
  const pathname = usePathname();
  const [wipe, setWipe] = useState(true);

  useEffect(() => {
    setWipe(true);
    // failsafe: never let the curtain linger even if animations are throttled
    const a = requestAnimationFrame(() => setWipe(false));
    const b = setTimeout(() => setWipe(false), 1000);
    return () => {
      cancelAnimationFrame(a);
      clearTimeout(b);
    };
  }, [pathname]);

  return (
    <>
      <div
        className={`curtain${wipe ? " curtain--in" : " curtain--out"}`}
        aria-hidden="true"
      >
        <span className="curtain__mark">Voxpact</span>
      </div>
      <div className="page-enter" key={pathname}>
        {children}
      </div>
    </>
  );
}
