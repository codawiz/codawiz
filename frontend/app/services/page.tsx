import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { PageIntro, SectionHeading } from "@/components/site-shell";
import { services } from "@/content/services";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: { absolute: "Business Technology Services | CODAWIZ" },
  description:
    "Explore CODAWIZ services across web development, ERP, business automation, custom software and digital communication.",
};
export default function ServicesRoute() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="One partner for connected digital progress."
        description="From the customer-facing experience to the operational systems behind it, CODAWIZ designs technology around how your business needs to work."
      />
      <section className="section-space pt-0">
        <div className="page-shell">
          <div className="grid gap-5 lg:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  href={"/services/" + service.slug}
                  key={service.slug}
                  className={`service-card group ${index === 0 ? "lg:col-span-2 lg:grid lg:grid-cols-[.8fr_1.2fr]" : ""}`}
                >
                  <div className="flex items-start justify-between">
                    <span className="service-card-number">
                      {service.number}
                    </span>
                    <Icon className="size-6 text-brand-accent" />
                  </div>
                  <div>
                    <h2>{service.title}</h2>
                    <p>{service.summary}</p>
                    <div className="mt-7 flex items-center justify-between border-t border-border pt-5">
                      <span className="text-sm font-semibold">
                        {service.message}
                      </span>
                      <ArrowRight className="size-5 text-brand-accent transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section-space bg-surface-subtle">
        <div className="page-shell grid gap-10 lg:grid-cols-2 lg:items-end">
          <SectionHeading
            eyebrow="A practical principle"
            title="Technology should solve business problems."
            description="The right project begins with a clear view of the challenge, the people involved and the result the business needs."
          />
          <div className="lg:text-right">
            <ButtonLink size="lg" href="/solutions">
              Find the right solution <ArrowRight />
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
