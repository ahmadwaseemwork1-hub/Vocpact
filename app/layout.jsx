import { Sora, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollReset from "@/components/ScrollReset";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import Loader from "@/components/Loader";
import ScrollProgress from "@/components/ScrollProgress";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://voxpact.com"),
  title: {
    default: "Voxpact | We run the phones. You close the deals.",
    template: "%s · Voxpact",
  },
  description:
    "Voxpact is an outsourced sales, support, and data team for US businesses, with real call-center infrastructure, US-hours agents, and KPI reporting in your inbox every morning.",
  openGraph: {
    title: "Voxpact | Offshore teams. Onshore standards.",
    description:
      "Outbound sales, live insurance transfers, customer support, and lead generation for US companies, with reporting you can actually see.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body>
        <SmoothScroll>
          <Loader />
          <ScrollReset />
          <ScrollProgress />
          <Cursor />
          <Nav />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
