import { WordReveal } from "@/components/motion/word-reveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { navItems } from "@/content/navigation";
import { services } from "@/content/services";
import { ButtonLink } from "@/components/ui/button";
import { Logo } from "@/components/brand";
export function SiteFooter() {
  return (
    <footer className="border-t border-brand-inverse/10 bg-brand-dark text-brand-inverse">
      <div className="page-shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.2fr_.7fr_1fr]">
        <div>
          <Logo inverted />
          <p className="mt-6 max-w-sm text-2xl font-semibold leading-tight">
            Build Better. Automate Smarter. Grow Further.
          </p>
          <p className="mt-4 max-w-sm text-sm leading-6 text-brand-inverse-muted">
            Technology and digital solutions designed around real business
            needs.
          </p>
        </div>
        <div>
          <p className="eyebrow text-brand-inverse-muted">Navigation</p>
          <div className="mt-5 grid gap-3">
            {navItems.map((item) => (
              <Link key={item.to} href={item.to} className="footer-link">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="eyebrow text-brand-inverse-muted">Services</p>
          <div className="mt-5 grid gap-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={"/services/" + service.slug}
                className="footer-link"
              >
                {service.shortTitle}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-brand-inverse/10">
        <div className="page-shell flex flex-col gap-2 py-6 text-xs text-brand-inverse-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 CODAWIZ COMPANY. All rights reserved.</p>
          <p>Business + Technology + Automation + Growth</p>
        </div>
      </div>
    </footer>
  );
}

export function PageIntro({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="page-intro">
      <div className="page-shell">
        <p className="eyebrow text-brand-accent">{eyebrow}</p>
        <h1 className="font-display mt-5 max-w-4xl text-balance text-4xl font-semibold leading-[1.08] text-brand-inverse sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p
          data-word-description
          className="mt-6 max-w-2xl text-lg leading-8 text-brand-inverse-muted"
        >
          <WordReveal text={description} />
        </p>
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl" data-reveal>
      <p
        className={`eyebrow ${light ? "text-brand-accent-soft" : "text-brand-accent"}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`font-display mt-4 text-balance text-3xl font-semibold leading-tight sm:text-4xl ${light ? "text-brand-inverse" : "text-foreground"}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-2xl text-base leading-7 sm:text-lg ${light ? "text-brand-inverse-muted" : "text-muted-foreground"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function CTASection() {
  return (
    <section className="cta-section bg-brand-accent">
      <div className="page-shell grid gap-8 py-16 lg:grid-cols-[1fr_auto] lg:items-end lg:py-20">
        <div>
          <p className="eyebrow text-accent-ink/70">Start with the problem</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight text-accent-ink sm:text-5xl">
            Have a Business Challenge?
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-accent-ink/75">
            Tell us what you’re trying to build, improve or automate. We’ll
            start by understanding the problem.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink variant="dark" size="lg" href="/contact">
            Start a Conversation <ArrowRight />
          </ButtonLink>
          <ButtonLink variant="accentOutline" size="lg" href="/services">
            Explore Our Services
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
