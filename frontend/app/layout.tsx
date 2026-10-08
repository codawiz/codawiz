import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { CTASection, SiteFooter } from "@/components/site-shell";
import { MotionSystem } from "@/components/motion/motion-system";
import "lenis/dist/lenis.css";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});
const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "CODAWIZ | Technology, ERP & Digital Solutions",
    template: "%s | CODAWIZ",
  },
  description:
    "Technology and digital solutions designed around real business needs.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${sora.variable} antialiased`}
    >
      <body className="min-h-screen">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <MotionSystem>
          <SiteHeader />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <CTASection />
          <SiteFooter />
        </MotionSystem>
      </body>
    </html>
  );
}
