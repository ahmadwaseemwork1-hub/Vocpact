import Link from "next/link";
import {
  brand,
  footerServices,
  footerCompany,
  footerLegal,
} from "@/lib/content";
import Reveal from "@/components/Reveal";
import FooterFx, { BackToTop } from "@/components/FooterFx";

const Icon = {
  mail: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="m4 8 8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 4h3.2l1.5 4-2 1.3a11 11 0 0 0 5 5l1.3-2 4 1.5V17a2 2 0 0 1-2.2 2A14 14 0 0 1 3 6.2 2 2 0 0 1 5 4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  ),
  pin: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  arrow: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export default function Footer() {
  const year = new Date().getFullYear();
  const wa = `https://wa.me/${brand.whatsapp.replace(/[^\d]/g, "")}`;

  return (
    <footer className="footer on-dark">
      <FooterFx />
      <div className="footer__bg" aria-hidden="true">
        <span className="footer__glow footer__glow--a" />
        <span className="footer__glow footer__glow--b" />
        <span className="footer__grid-bg" />
      </div>

      <div className="container footer__inner">
        {/* ---- top: brand + big contact ---- */}
        <Reveal className="footer__head" stagger={0.1} y={26}>
          <div className="footer__brand">
            <Link href="/" className="footer__logo" aria-label="Voxpact home">
              <span className="nav__dot" />
              Voxpact
            </Link>
            <p className="footer__tag">We run the phones. You close the deals.</p>
            <span className="footer__status">
              <i className="pulse pulse--green" />
              Teams working US business hours
            </span>
          </div>

          <div className="footer__say">
            <span className="footer__say-label">Say hello</span>
            <a className="footer__mail" href={`mailto:${brand.email}`} data-cursor="email">
              <span>{brand.email}</span>
              <b>{Icon.arrow}</b>
            </a>
            <a className="footer__wa" href={wa} data-cursor="chat">
              or chat with us on WhatsApp
            </a>
          </div>
        </Reveal>

        {/* ---- link columns ---- */}
        <Reveal className="footer__cols" stagger={0.08} y={22}>
          <div className="footer__col footer__col--services">
            <h4>Services</h4>
            <ul>
              {footerServices.map((s) => (
                <li key={s}>
                  <Link href="/services">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4>Company</h4>
            <ul>
              {footerCompany.map((c) => (
                <li key={c.href}>
                  <Link href={c.href}>{c.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col footer__col--contact">
            <h4>Reach us</h4>
            <ul>
              <li>
                <span className="footer__ico">{Icon.phone}</span>
                <a href={wa}>{brand.whatsapp}</a>
              </li>
              <li>
                <span className="footer__ico">{Icon.clock}</span>
                <span>{brand.hours}</span>
              </li>
              <li>
                <span className="footer__ico">{Icon.pin}</span>
                <span>{brand.location}</span>
              </li>
            </ul>
          </div>
        </Reveal>

        {/* ---- bottom bar ---- */}
        <div className="footer__bottom">
          <span>© {year} Voxpact. All rights reserved.</span>
          <span className="footer__legal">{footerLegal}</span>
          <BackToTop />
        </div>
      </div>

      <div className="footer__wordmark" aria-hidden="true">
        <span>Voxpact</span>
      </div>
    </footer>
  );
}
