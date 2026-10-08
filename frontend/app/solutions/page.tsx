import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/site-shell";
import { solutions } from "@/content/services";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: { absolute: "Business Solutions | CODAWIZ" },
  description:
    "Find the right CODAWIZ solution for digital presence, operations, automation, custom software and communication challenges.",
};
export default function SolutionsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Solutions"
        title="Start with what needs to change."
        description="Clients often know the problem before they know the service. Choose the challenge that sounds closest to yours."
      />
      <section className="section-space pt-0">
        <div className="page-shell grid gap-4">
          {solutions.map((item, index) => (
            <Link
              key={item.slug}
              href={"/services/" + item.slug}
              className="solution-row group"
            >
              <span>0{index + 1}</span>
              <h2>{item.problem}</h2>
              <div>
                <p>{item.answer}</p>
                <ArrowRight />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
