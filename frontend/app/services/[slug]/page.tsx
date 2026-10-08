import { WordReveal } from "@/components/motion/word-reveal";
import { ArrowRight, Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { SectionHeading } from "@/components/site-shell";
import { services } from "@/content/services";

import type { Metadata } from "next";
import { notFound } from "next/navigation";
export const dynamicParams = false;
export function generateStaticParams() {
  return services.map((item) => ({ slug: item.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = services.find((item) => item.slug === slug);
  if (!item) notFound();
  return { title: item.title, description: item.summary };
}
export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const Icon = service.icon;
  return (
    <>
      <section className="detail-intro">
        <div className="page-shell grid gap-10 lg:grid-cols-[1fr_.55fr] lg:items-end">
          <div>
            <p className="eyebrow text-brand-accent">
              SERVICE {service.number}
            </p>
            <h1 className="mt-5 max-w-4xl text-balance text-4xl font-bold leading-[1.08] sm:text-6xl">
              {service.title}
            </h1>
            <p
              data-word-description
              className="mt-6 max-w-2xl text-lg leading-8 text-brand-inverse-muted"
            >
              <WordReveal text={service.summary} />
            </p>
            <ButtonLink size="lg" className="mt-8" href="/contact">
              Discuss this service <ArrowRight />
            </ButtonLink>
          </div>
          <div className="detail-symbol">
            <Icon />
            <span>{service.message}</span>
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="page-shell grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-muted-foreground">
              THE BUSINESS PROBLEM
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight">
              What this solves
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              {service.problem}
            </p>
          </div>
          <div className="border-l-2 border-brand-accent pl-7">
            <p className="eyebrow text-muted-foreground">
              THE CODAWIZ APPROACH
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight">
              Business before tools
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              {service.approach}
            </p>
          </div>
        </div>
      </section>
      <section className="section-space bg-surface-subtle">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Included services"
            title="A focused capability set."
          />
          <div className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {service.services.map((item) => (
              <div key={item} className="list-cell">
                <Check />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="page-shell grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Possible deliverables"
              title="What the work can produce."
            />
            <div className="mt-8 grid gap-3">
              {service.deliverables.map((item, index) => (
                <div className="deliverable-row" key={item}>
                  <span>0{index + 1}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Relevant capabilities"
              title="Tools follow the requirement."
            />
            <div className="mt-8 flex flex-wrap gap-2">
              {service.capabilities.map((item) => (
                <span className="capability-tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-12">
              <h3 className="text-xl font-bold">A clear five-step process</h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                Discover, plan, design, develop, then launch and evolve. Each
                stage keeps business requirements and technical decisions
                connected.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-space border-t border-border">
        <div className="page-shell grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
          <SectionHeading eyebrow="FAQ" title="Questions worth asking." />
          <div>
            {[
              [
                "How do we know this is the right service?",
                "We begin with discovery. If another approach fits the business problem better, the recommendation should change before implementation begins.",
              ],
              [
                "Can this connect with our current systems?",
                "Integration requirements are assessed early, including data ownership, available APIs, security and the operational impact of any change.",
              ],
              [
                "What happens after launch?",
                "The launch plan can include handover, support, measurement and a practical roadmap for future improvement.",
              ],
            ].map(([q, a]) => (
              <details key={q} name="service-faq" className="faq-item">
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
