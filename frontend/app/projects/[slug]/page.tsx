import { PageIntro } from "@/components/site-shell";
import { ProjectPreview } from "@/components/visuals";
import { placeholderProjects } from "@/content/projects";

import type { Metadata } from "next";
import { notFound } from "next/navigation";
export const dynamicParams = false;
export function generateStaticParams() {
  return placeholderProjects.map((item) => ({ slug: item.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = placeholderProjects.find((item) => item.slug === slug);
  if (!item) notFound();
  return { title: item.type, description: item.description };
}
export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = placeholderProjects.findIndex((item) => item.slug === slug);
  const project = placeholderProjects[index];
  if (!project) notFound();
  const sections = [
    [
      "01",
      "The challenge",
      "Describe the verified business problem, its operational context and the people affected.",
    ],
    [
      "02",
      "The approach",
      "Explain how CODAWIZ analyzed the situation, clarified requirements and set priorities.",
    ],
    [
      "03",
      "The solution",
      "Present the digital product, system or workflow that was implemented.",
    ],
    [
      "04",
      "The technology",
      "List only the systems and tools actually used, with the reason each supported the solution.",
    ],
    [
      "05",
      "The outcome",
      "Document confirmed improvements. Add quantitative results only when real data is available.",
    ],
  ];
  return (
    <>
      <PageIntro
        eyebrow="Case study placeholder"
        title={project.type}
        description={project.description}
      >
        <div className="mt-7 flex flex-wrap gap-2">
          <span className="capability-tag">{project.industry}</span>
          <span className="capability-tag">{project.services}</span>
        </div>
      </PageIntro>
      <section className="pb-16 lg:pb-24">
        <div className="page-shell">
          <ProjectPreview variant={index} />
        </div>
      </section>
      <section className="section-space bg-surface-subtle">
        <div className="page-shell">
          <div className="mb-10 border-l-2 border-brand-accent pl-5">
            <p className="font-semibold">Content status: placeholder</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Replace each section below with verified project information
              before publication as a real case study.
            </p>
          </div>
          <div className="grid gap-px bg-border lg:grid-cols-5">
            {sections.map(([number, title, text]) => (
              <article className="case-cell" key={number}>
                <span>{number}</span>
                <h2>{title}</h2>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
