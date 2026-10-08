import Link from "next/link";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="CODAWIZ home"
      className="group inline-flex items-center gap-3"
    >
      <span
        className={`grid size-9 place-items-center rounded-lg border text-xs font-bold transition-colors ${inverted ? "border-brand-inverse/20 bg-brand-inverse/5 text-brand-inverse group-hover:border-brand-accent" : "border-border bg-card text-foreground group-hover:border-brand-accent"}`}
      >
        C
      </span>
      <span
        className={`font-display text-[1.05rem] font-bold tracking-[0.12em] ${inverted ? "text-brand-inverse" : "text-foreground"}`}
      >
        CODAWIZ
      </span>
    </Link>
  );
}
