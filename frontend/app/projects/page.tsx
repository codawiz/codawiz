import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/site-shell";
import { ProjectPreview } from "@/components/visuals";
import { placeholderProjects } from "@/content/projects";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: { absolute: "Projects & Case Studies | CODAWIZ" },
  description:
    "Explore the CODAWIZ case study framework for digital platforms, ERP systems and automated business workflows.",
};
export default function ProjectsRoute() {
  return (
    <>
      <PageIntro
        eyebrow="Projects"
        title="Digital solutions in their business context."
        description="This portfolio structure is ready for verified CODAWIZ work. Current entries are clearly marked placeholders and contain no invented clients, results or claims."
      />
      <section className="section-space pt-0">
        <div className="page-shell grid gap-7 lg:grid-cols-3">
          {placeholderProjects.map((project, index) => (
            <Link
              key={project.slug}
              href={"/projects/" + project.slug}
              className="project-card group"
            >
              <ProjectPreview variant={index} />
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <p className="eyebrow text-brand-accent">PLACEHOLDER</p>
                  <p className="text-xs text-muted-foreground">
                    {project.industry}
                  </p>
                </div>
                <h2 className="mt-4 text-2xl font-bold">{project.type}</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {project.description}
                </p>
                <p className="mt-5 border-t border-border pt-4 text-xs font-semibold text-muted-foreground">
                  {project.services}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-accent">
                  View case study structure{" "}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
