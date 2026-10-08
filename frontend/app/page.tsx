import { WordReveal } from "@/components/motion/word-reveal";
import { WorkflowDiagram } from "@/components/workflow-diagram";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import {
  EcosystemVisual,
  ERPDashboard,
  ProjectPreview,
} from "@/components/visuals";
import { SectionHeading } from "@/components/site-shell";
import { approach, capabilityGroups, process } from "@/content/company";
import { placeholderProjects } from "@/content/projects";
import { services, solutions } from "@/content/services";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: { absolute: "CODAWIZ | Technology, ERP & Digital Solutions" },
  description:
    "CODAWIZ provides web development, ERP solutions, business automation, custom software and digital marketing designed around real business needs.",
};
export default function Index() {
  return (
    <>
      <section className="hero-section text-brand-inverse">
        <div className="page-shell grid items-center gap-12 lg:grid-cols-[1.02fr_.98fr]">
          <div className="pt-8 lg:pt-0">
            <div className="hero-kicker">
              <i /> Enterprise digital transformation
            </div>
            <h1 className="hero-title font-display mt-7 max-w-3xl text-balance text-4xl font-semibold leading-[1.06] sm:text-5xl lg:text-[4.15rem]">
              <span className="hero-line-mask">
                <span className="hero-line">Build Better.</span>
              </span>
              <span className="hero-line-mask">
                <span className="hero-line">Automate Smarter.</span>
              </span>
              <span className="hero-line-mask">
                <span className="hero-line hero-gradient">Grow Further.</span>
              </span>
            </h1>
            <p
              data-word-description
              className="mt-7 max-w-2xl text-base leading-7 text-brand-inverse-muted sm:text-lg sm:leading-8"
            >
              <WordReveal text="CODAWIZ helps businesses build digital products, optimize operations, automate repetitive processes and strengthen their digital presence." />
            </p>
            <div className="hero-actions mt-9 flex flex-wrap gap-3">
              <ButtonLink size="lg" href="/contact">
                Start a Project <ArrowRight />
              </ButtonLink>
              <ButtonLink
                size="lg"
                variant="outline"
                className="border-brand-inverse/20 bg-brand-inverse/5 text-brand-inverse hover:border-brand-inverse/40 hover:bg-brand-inverse/10 hover:text-brand-inverse"
                href="/services"
              >
                Explore Our Services
              </ButtonLink>
            </div>
            <div className="hero-capabilities">
              {["BUILD", "OPTIMIZE", "AUTOMATE", "GROW"].map((item, index) => (
                <span key={item}>
                  <b>0{index + 1}</b>
                  {item}
                </span>
              ))}
            </div>
          </div>
          <EcosystemVisual />
        </div>
      </section>
      <section className="border-y border-border bg-surface-subtle">
        <div className="page-shell flex flex-col gap-4 py-7 md:flex-row md:items-center md:justify-between">
          <p className="max-w-3xl text-base font-medium leading-7">
            From digital presence to business operations, CODAWIZ connects
            technology with real business needs.
          </p>
          <span className="eyebrow text-muted-foreground">
            BUSINESS + TECHNOLOGY
          </span>
        </div>
      </section>

      <section className="section-space">
        <div className="page-shell">
          <SectionHeading
            eyebrow="What we build"
            title="Technology Built Around Your Business."
            description="Five connected capabilities. One focus: solving the right business problem with the right digital solution."
          />
          <div className="mt-12 border-t border-border">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  href={"/services/" + service.slug}
                  className="service-row group"
                >
                  <span className="service-number">{service.number}</span>
                  <div className="service-icon">
                    <Icon />
                  </div>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.summary}</p>
                  </div>
                  <ArrowRight className="service-arrow" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space bg-brand-dark">
        <div className="page-shell">
          <SectionHeading
            light
            eyebrow="Business automation"
            title="Stop Repeating. Start Automating."
            description="We analyze your existing workflow and identify where technology can remove unnecessary manual work."
          />
          <div className="mt-12">
            <WorkflowDiagram />
          </div>
          <div className="mt-8">
            <ButtonLink size="lg" href={"/services/" + "business-automation"}>
              Automate Your Workflow <ArrowRight />
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="page-shell grid gap-12 lg:grid-cols-[.78fr_1.22fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="ERP & transformation"
              title="From Disconnected Processes to One Connected Business."
              description="CODAWIZ helps businesses centralize information, connect departments and improve visibility across their operations."
            />
            <ul className="mt-7 grid gap-3">
              {[
                "ERP implementation and Odoo solutions",
                "Customization and system integrations",
                "Workflow automation and reporting",
                "Business process optimization",
              ].map((item) => (
                <li
                  className="flex items-center gap-3 text-sm font-medium"
                  key={item}
                >
                  <span className="grid size-6 place-items-center bg-brand-accent-soft text-brand-accent">
                    <Check className="size-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <ButtonLink
              variant="outline"
              size="lg"
              className="mt-8"
              href={"/services/" + "erp-business-systems"}
            >
              Explore ERP Solutions <ArrowRight />
            </ButtonLink>
          </div>
          <ERPDashboard />
        </div>
      </section>

      <section className="section-space bg-surface-subtle">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Start with the challenge"
            title="What Are You Trying to Solve?"
            description="You do not need to know the technology yet. Start with what is getting in the way."
          />
          <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-5">
            {solutions.map((solution, index) => (
              <Link
                key={solution.slug}
                href={"/services/" + solution.slug}
                className="solution-card group"
              >
                <span>0{index + 1}</span>
                <h3>“{solution.problem}”</h3>
                <div>
                  <p>{solution.answer}</p>
                  <ArrowRight />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="page-shell">
          <SectionHeading
            eyebrow="How we think"
            title="Strategy before software."
            description="Our job is not to sell a preset tool. It is to understand the operation, frame the problem and build the right response."
          />
          <div className="mt-12 grid border-l border-t border-border md:grid-cols-2 lg:grid-cols-5">
            {approach.map(([number, title, text]) => (
              <div className="approach-cell" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-y border-border bg-surface-subtle">
        <div className="page-shell">
          <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
            <SectionHeading
              eyebrow="Our process"
              title="Clear thinking. Disciplined delivery."
            />
            <div className="grid gap-px bg-border sm:grid-cols-5">
              {process.map(([number, title, text]) => (
                <div className="process-cell" key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="page-shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Selected work"
              title="Solutions in context."
              description="Project placeholders are ready to become full case studies when verified client material is available."
            />
            <ButtonLink variant="outline" href="/projects">
              View Projects <ArrowRight />
            </ButtonLink>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {placeholderProjects.map((project, index) => (
              <Link
                key={project.slug}
                href={"/projects/" + project.slug}
                className="project-card group"
              >
                <ProjectPreview variant={index} />
                <div className="p-6">
                  <p className="eyebrow text-muted-foreground">
                    CASE STUDY PLACEHOLDER
                  </p>
                  <h3 className="mt-3 text-xl font-bold">{project.type}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {project.services}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-accent">
                    View structure{" "}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-brand-dark">
        <div className="page-shell">
          <SectionHeading
            light
            eyebrow="Capabilities"
            title="Technical depth, organized around outcomes."
            description="We use technology as an enabler—never as a wall of jargon between the problem and its solution."
          />
          <div className="mt-12 grid gap-px overflow-hidden border border-brand-inverse/10 bg-brand-inverse/10 md:grid-cols-2 lg:grid-cols-4">
            {capabilityGroups.map((group) => {
              const Icon = group.icon;
              return (
                <div className="capability-cell" key={group.title}>
                  <Icon />
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
