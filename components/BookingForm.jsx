"use client";

import { useState } from "react";
import { Arrow } from "@/components/ui";
import { bookHelpOptions, bookSizeOptions, brand } from "@/lib/content";

export default function BookingForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // No backend wired yet. Hand off to the operator's inbox as a fallback,
    // then show the confirmation state. Replace with a real endpoint (Calendly
    // or a form provider) before launch. See PLACEHOLDERS.md.
    const data = new FormData(e.currentTarget);
    const body = [...data.entries()]
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");
    try {
      window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent(
        "New call request: " + (data.get("company") || "")
      )}&body=${encodeURIComponent(body)}`;
    } catch (_) {}
    setSent(true);
  };

  if (sent) {
    return (
      <div className="form__ok">
        <h3>Thanks, we&rsquo;ve got it.</h3>
        <p>
          One of the team will reach out within one business day to lock in a time. If
          it&rsquo;s urgent, message us directly on WhatsApp at{" "}
          <a href={`https://wa.me/${brand.whatsapp.replace(/[^\d]/g, "")}`}>
            {brand.whatsapp}
          </a>{" "}
          or email <a href={`mailto:${brand.email}`}>{brand.email}</a>.
        </p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form__row form__row--2">
        <div className="field">
          <label htmlFor="name">
            Full name <span>*</span>
          </label>
          <input id="name" name="name" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="email">
            Work email <span>*</span>
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" />
        </div>
      </div>

      <div className="form__row form__row--2">
        <div className="field">
          <label htmlFor="company">
            Company name <span>*</span>
          </label>
          <input id="company" name="company" required autoComplete="organization" />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone / WhatsApp (optional)</label>
          <input id="phone" name="phone" autoComplete="tel" />
        </div>
      </div>

      <div className="form__row form__row--2">
        <div className="field">
          <label htmlFor="need">
            What do you need help with? <span>*</span>
          </label>
          <select id="need" name="need" required defaultValue="">
            <option value="" disabled>
              Select one…
            </option>
            {bookHelpOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="size">Roughly how big is the effort?</label>
          <select id="size" name="size" defaultValue="">
            <option value="" disabled>
              Select one…
            </option>
            {bookSizeOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="about">
          Tell us about your offer and audience <span>*</span>
        </label>
        <textarea id="about" name="about" required />
      </div>

      <div className="field">
        <label htmlFor="when">Preferred day/time to talk (optional)</label>
        <input id="when" name="when" placeholder="e.g. Tue or Wed afternoon, ET" />
      </div>

      <button type="submit" className="btn form__submit">
        Request my call <Arrow />
      </button>
    </form>
  );
}
