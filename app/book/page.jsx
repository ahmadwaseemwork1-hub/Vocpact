import Reveal from "@/components/Reveal";
import BookingForm from "@/components/BookingForm";
import { PageHero } from "@/components/ui";
import { bookExpect, brand } from "@/lib/content";

export const metadata = {
  title: "Book a Meeting",
  description:
    "Book a 15-minute call with Voxpact. Tell us what you're selling and who you're selling to. We'll tell you honestly whether we can help, and exactly how we'd start.",
};

export default function BookPage() {
  return (
    <>
      <PageHero
        eyebrow="Book a meeting"
        title="Book a 15-minute call"
        lead="Tell us what you're selling and who you're selling to. We'll tell you honestly whether we can help, and if we can, exactly how we'd start. No scripted pitch, no pressure."
      />

      <section className="section">
        <div className="container book-layout">
          <div>
            <Reveal>
              <span className="eyebrow">What to expect</span>
              <ul className="expect" style={{ marginTop: "1.4rem" }}>
                {bookExpect.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </Reveal>

            <div className="contact-fallback">
              <span>Prefer to reach out directly?</span>
              <span>
                <b>Email</b>{" "}
                <a href={`mailto:${brand.email}`}>{brand.email}</a>
              </span>
              <span>
                <b>WhatsApp</b>{" "}
                <a href={`https://wa.me/${brand.whatsapp.replace(/[^\d]/g, "")}`}>
                  {brand.whatsapp}
                </a>
              </span>
              <span>
                <b>Hours</b> {brand.hours}
              </span>
            </div>
          </div>

          <Reveal delay={0.1}>
            <BookingForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
