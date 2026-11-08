# Before launch: verify or replace

Everything lives in `lib/content.js` unless noted.

## Now filled with SAMPLE data (confirm each number and quote is one you can defend)

- `homeStats`: 68,000+ calls/mo, 31% connect to appointment, 4,200+ transfers/mo,
  2-hr response. Swap for your real figures, or delete a tile by removing it from the array.
- `homeTestimonial`: sample client quote ("M. Reyes"). Replace with a real one.
- `reviewPlaceholders`: six sample reviews with names and roles. Replace with real
  client quotes or Upwork feedback (first name or initial is fine). Do not ship
  invented reviews.
- `reviewResults`: 63% expand, 5,100+ meetings, 4.9 stars. Replace with real data or
  delete tiles.
- `qualityStandard`: sample SLA targets (30s chat, 70%+ show rate, 95%+ deliverability).
  Confirm against your actual commitments.
- `leadership[].note`: sample one-liners for Turab and Musa. Edit to taste.

## Contact (now live, from you)

- Email `ahmad.waseem.work1@gmail.com`, WhatsApp `+92 312 7008948`, hours Mon to Fri
  9 to 6 EST.
- Wired into the footer, the Book page, and the form's `mailto:` fallback.
- Decide whether to keep the Lahore location line (`brand.location`).

## Still to wire

- Team photo for Khawaja Muhammad Musa: drop the file in `public/team/khawaja-muhammad-musa.jpg`
  and uncomment the `photo` line on his entry in `lib/content.js` (an initials avatar shows until then).

- `components/BookingForm.jsx` submits via `mailto:`. Swap in Calendly, Formspree, or
  an API route.
- No favicon or `og:image` yet. Add to `app/` and `public/`.
- The logo is a wordmark + dot treatment, not a real mark.
- The trust strip is text only. Add client logos once you have permission.

## Brand decisions from the copy deck

- Spelling: Voxpact (one word), used everywhere.
- Trucking Dispatch is public (Home, Services, Book form). Remove if not offered.
- Standardized C-titles (CSO, COO, CDO) are in place.
