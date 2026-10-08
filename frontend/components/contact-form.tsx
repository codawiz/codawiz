"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const options = [
  "Web Design & Development",
  "ERP / Odoo",
  "Business Automation",
  "Custom Software",
  "Social Media & Content",
  "Digital Transformation",
  "Other",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      {submitted && (
        <div
          role="status"
          className="grid min-h-[30rem] place-items-center text-center"
        >
          <div>
            <span className="mx-auto grid size-12 place-items-center bg-brand-accent-soft text-brand-accent">
              ✓
            </span>
            <h2 className="mt-5 text-2xl font-bold">Request prepared.</h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
              The form is presentation-ready. Message delivery will be connected
              once the official CODAWIZ contact destination is provided.
            </p>
            <Button
              className="mt-6"
              variant="outline"
              onClick={() => setSubmitted(false)}
            >
              Back to form
            </Button>
          </div>
        </div>
      )}
      <form
        hidden={submitted}
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Full Name" id="name">
            <input
              className="form-control"
              id="name"
              name="name"
              required
              autoComplete="name"
            />
          </Field>
          <Field label="Company" id="company">
            <input
              className="form-control"
              id="company"
              name="company"
              autoComplete="organization"
            />
          </Field>
          <Field label="Email" id="email">
            <input
              className="form-control"
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
            />
          </Field>
          <Field label="Phone" id="phone">
            <input
              className="form-control"
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
            />
          </Field>
          <Field label="Service" id="service">
            <select
              id="service"
              name="service"
              className="form-control"
              defaultValue=""
            >
              <option value="" disabled>
                Select a service
              </option>
              {options.map((item) => (
                <option
                  key={item}
                  value={item.toLowerCase().replaceAll(" ", "-")}
                >
                  {item}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Budget Range" id="budget">
            <select
              id="budget"
              name="budget"
              className="form-control"
              defaultValue=""
            >
              <option value="" disabled>
                Select a range
              </option>
              {[
                "To be discussed",
                "Under 5,000",
                "5,000–15,000",
                "15,000–30,000",
                "30,000+",
              ].map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Timeline" id="timeline">
            <select
              id="timeline"
              name="timeline"
              className="form-control"
              defaultValue=""
            >
              <option value="" disabled>
                Select a timeline
              </option>
              {[
                "As soon as practical",
                "1–3 months",
                "3–6 months",
                "6+ months",
                "Not sure yet",
              ].map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </Field>
          <div className="sm:col-span-2">
            <Field label="Project Description" id="description">
              <textarea
                className="form-control"
                id="description"
                name="description"
                required
                rows={6}
                placeholder="What are you trying to build, improve or automate?"
              />
            </Field>
          </div>
        </div>
        <p className="mt-5 text-xs leading-5 text-muted-foreground">
          Official contact delivery details have not been provided yet. This
          demonstration does not send data externally.
        </p>
        <Button type="submit" size="lg" className="mt-7 w-full sm:w-auto">
          Send Project Request <ArrowRight />
        </Button>
      </form>
    </>
  );
}
function Field({
  label,
  id,
  children,
}: {
  label: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <label className="text-sm font-medium" htmlFor={id}>
        {label}
      </label>
      {children}
    </div>
  );
}
