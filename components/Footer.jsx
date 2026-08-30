import Link from "next/link";
import {
  brand,
  footerServices,
  footerCompany,
  footerLegal,
} from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <div className="footer__word">Voxpact</div>
            <p className="footer__tag">
              We run the phones, you close the deals.
            </p>
          </div>

          <div className="footer__col">
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

          <div className="footer__col">
            <h4>Contact</h4>
            <ul>
              <li>
                <a href={`mailto:${brand.email}`}>{brand.email}</a>
              </li>
              <li>
                <a href={`https://wa.me/${brand.whatsapp.replace(/[^\d]/g, "")}`}>
                  {brand.whatsapp}
                </a>
              </li>
              <li>{brand.location}</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {year} Voxpact. All rights reserved.</span>
          <span className="footer__legal">{footerLegal}</span>
        </div>
      </div>
    </footer>
  );
}
