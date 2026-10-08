"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navItems } from "@/content/navigation";
import { Logo } from "@/components/brand";
import { Button, ButtonLink } from "@/components/ui/button";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const [compact, setCompact] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const open = menuPath === pathname;
  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuPath(null);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);
  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${compact || open ? "border-brand-inverse/10 bg-brand-dark/95 py-3 shadow-nav backdrop-blur-xl" : "border-transparent bg-brand-dark/80 py-5 backdrop-blur-md"}`}
    >
      <div className="page-shell flex items-center justify-between">
        <Logo inverted />
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 lg:flex"
        >
          {navItems.map(({ to, label }) => (
            <Link
              key={to}
              href={to}
              aria-current={isActive(to) ? "page" : undefined}
              className={`nav-link ${isActive(to) ? "nav-link-active" : ""}`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <ButtonLink href="/contact" size="lg">
            Start a Project <ArrowRight />
          </ButtonLink>
        </div>
        <Button
          ref={toggleRef}
          variant="ghost"
          size="icon"
          className="text-brand-inverse hover:bg-brand-inverse/10 hover:text-brand-inverse lg:hidden"
          onClick={() => setMenuPath(open ? null : pathname)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      <div
        id="mobile-navigation"
        inert={!open}
        className={`overflow-hidden transition-all duration-300 lg:hidden ${open ? "max-h-[34rem] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav
          aria-label="Mobile navigation"
          className="page-shell flex flex-col gap-1 pb-5 pt-5"
        >
          {navItems.map(({ to, label }) => (
            <Link
              key={to}
              href={to}
              aria-current={isActive(to) ? "page" : undefined}
              onClick={() => setMenuPath(null)}
              className="border-b border-brand-inverse/10 py-3 text-base font-semibold text-brand-inverse"
            >
              {label}
            </Link>
          ))}
          <ButtonLink
            size="lg"
            className="mt-4"
            href="/contact"
            onClick={() => setMenuPath(null)}
          >
            Start a Project <ArrowRight />
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
