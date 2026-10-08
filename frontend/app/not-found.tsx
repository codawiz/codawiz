import { ButtonLink } from "@/components/ui/button";
export default function NotFound() {
  return (
    <section className="page-intro">
      <div className="page-shell text-center">
        <p className="eyebrow text-brand-accent">404</p>
        <h1 className="mt-5 text-4xl font-bold text-brand-inverse">
          Page not found
        </h1>
        <p className="mt-5 text-brand-inverse-muted">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <ButtonLink href="/" size="lg" className="mt-8">
          Go home
        </ButtonLink>
      </div>
    </section>
  );
}
