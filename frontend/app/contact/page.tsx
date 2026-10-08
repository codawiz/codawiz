import type { Metadata } from "next";
import { PageIntro } from "@/components/site-shell";
import { ContactForm } from "@/components/contact-form";
export const metadata: Metadata = {
  title: "Start a Project | Contact",
  description:
    "Tell CODAWIZ about the digital platform, ERP solution, automated workflow or digital presence your business needs.",
};
export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Let's Build Something Useful."
        description="Whether you need a new digital platform, an ERP solution, an automated workflow or a stronger digital presence, tell us what you're working on."
      />
      <section className="section-space pt-0">
        <div className="page-shell grid gap-12 lg:grid-cols-[.55fr_1fr]">
          <aside>
            <h2 className="text-xl font-bold">Start with the challenge.</h2>
            <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
              You do not need a technical brief. Describe what you want to
              build, improve or automate.
            </p>
            <div className="mt-10 grid gap-5 border-t border-border pt-8">
              {[
                "Email",
                "Phone",
                "Address",
                "LinkedIn",
                "Instagram",
                "Facebook",
              ].map((item) => (
                <div key={item}>
                  <p className="eyebrow text-muted-foreground">{item}</p>
                  <p className="mt-1 text-sm font-semibold">To be provided</p>
                </div>
              ))}
            </div>
          </aside>
          <div className="border border-border bg-card p-6 shadow-card sm:p-9">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
