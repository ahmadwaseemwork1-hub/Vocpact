# Voxpact website

Multi-page marketing site with an animated home scroller. Built with **Next.js 14
(App Router)**, **GSAP + ScrollTrigger**, **Lenis** smooth scroll, and
**Framer Motion**. Dark theme: premium blue on near-black.

## Run it

```bash
npm install
npm run dev
```

Opens on http://localhost:3000.

```bash
npm run build && npm run start
```

## Pages

| Route        | Page                     |
|--------------|--------------------------|
| `/`          | Home (animated scroller) |
| `/services`  | Services (sticky index)  |
| `/about`     | About & Team             |
| `/quality`   | Quality                  |
| `/reviews`   | Reviews                  |
| `/book`      | Book a Meeting           |

## Where things live

- **All copy** lives in `lib/content.js` (single source of truth).
- **Items to fill or verify before launch** are listed in `PLACEHOLDERS.md`.
- **Design tokens and all styling** are in `app/globals.css`. `:root` holds the
  dark palette; `.on-dark` drops the background a shade for the hero, stats,
  CTA, and footer.
- **Animation primitives** are in `components/`:
  - `SmoothScroll`: Lenis + GSAP ticker wiring.
  - `Loader`: first-visit intro (counter + wipe), once per browser session.
  - `Reveal`: scroll fade / clip / rise, optional child stagger.
  - `SplitReveal`: masked word-by-word headline reveal.
  - `Magnetic`: magnetic hover button / link.
  - `Marquee`: dual-row strip, opposite directions, velocity skew.
  - `Counter`: count-up stat with a timeout fallback.
  - `Cursor`: dot + lagging ring with contextual labels (off on touch).
  - `ScrollProgress`: top-of-viewport progress bar.
  - `ServiceRows`: expanding hover rows on `/services`.
  - `home/Hero`: mesh gradient, drifting orbs, ghost wordmark, KPI ticker,
    GSAP entrance timeline that waits for the loader, pointer parallax.
  - `home/ServicesStack`: sticky stacking cards that scale as the next slides over.
  - `home/HowScroller`: horizontal pinned scroll on desktop, vertical stack on mobile.
- **Page transition** is in `app/template.jsx` (blue curtain wipe + content fade).

## Accessibility / motion

Every animation checks `prefers-reduced-motion`. When reduced: Lenis, the loader,
the curtain, orb drift and card scaling are all skipped; reveals render static;
the horizontal scroller becomes a vertical list; the marquee stops.

Scroll reveals are CSS-driven. JS only toggles an `.is-in` class via
IntersectionObserver, with a timeout safety net, so content is never left hidden
if a script or `requestAnimationFrame` stalls. No-JS users get everything too
(the hidden state is armed by JS, not CSS).

Add `?nolenis` to any URL to disable the Lenis smooth-scroll layer when debugging.

## Not wired yet

- The booking form falls back to `mailto:`. Swap in Calendly, Formspree, or an
  API route before launch (see `components/BookingForm.jsx`).
- No favicon or `og:image` yet. Add to `app/` and `public/`.
- The logo is a wordmark + dot treatment, not a real mark.
