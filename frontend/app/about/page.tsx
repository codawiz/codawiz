import { approach, capabilityGroups, process } from "@/content/company";
import { PageIntro, SectionHeading } from "@/components/site-shell";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: { absolute: "About CODAWIZ | Business Meets Technology" },
  description:
    "CODAWIZ helps businesses build, optimize and grow through practical technology, automation and digital solutions.",
};
export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About CODAWIZ"
        title="Business understanding. Technical capability. Practical outcomes."
        description="CODAWIZ is a technology and digital solutions company helping businesses build, optimize and grow through practical digital solutions."
      />
      <section className="section-space pt-0">
        <div className="page-shell grid gap-px bg-border md:grid-cols-5">
          {[
            "Technology",
            "Business systems",
            "Automation",
            "Digital solutions",
            "Communication",
          ].map((item, index) => (
            <div className="about-pillar" key={item}>
              <span>0{index + 1}</span>
              <h2>{item}</h2>
            </div>
          ))}
        </div>
      </section>
      <section className="section-space bg-brand-dark">
        <div className="page-shell">
          <SectionHeading
            light
            eyebrow="How we think"
            title="The solution starts before the software."
            description="We combine strategic analysis, design and technical delivery to make technology useful in the day-to-day reality of the business."
          />
          <div className="mt-12 grid border-l border-t border-brand-inverse/10 md:grid-cols-2 lg:grid-cols-5">
            {approach.map(([number, title, text]) => (
              <div className="approach-cell approach-cell-dark" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Our process"
            title="A clear path from question to working solution."
          />
          <div className="mt-12 grid gap-px bg-border sm:grid-cols-5">
            {process.map(([number, title, text]) => (
              <div className="process-cell" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-space bg-surface-subtle">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Capabilities"
            title="Connected disciplines, not isolated services."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {capabilityGroups.map((group) => {
              const Icon = group.icon;
              return (
                <div className="capability-card" key={group.title}>
                  <Icon />
                  <h3>{group.title}</h3>
                  <p>{group.items.join(" · ")}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
