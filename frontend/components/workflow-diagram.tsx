"use client";
import { useState } from "react";
import { ArrowDown, Check } from "lucide-react";
const workflow = [
  [
    "Customer request",
    "A form, message or enquiry enters one structured workflow.",
  ],
  ["CRM", "The contact and context are recorded without repeated data entry."],
  ["Notification", "The right people are notified immediately."],
  ["Team assignment", "Rules route the work to the right owner."],
  ["Approval", "Approvals follow a visible, consistent path."],
  ["Document", "Required documents are prepared from approved information."],
  ["Invoice", "Commercial steps connect to the same process."],
  ["Follow-up", "Nothing disappears because the next action is scheduled."],
] as const;
export function WorkflowDiagram() {
  const [active, setActive] = useState(0);
  const activeStep = workflow[active] ?? workflow[0];
  return (
    <div className="workflow-wrap">
      <div className="workflow-grid">
        {workflow.map(([title], index) => (
          <button
            key={title}
            type="button"
            aria-pressed={active === index}
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            onClick={() => setActive(index)}
            className={`workflow-step ${active === index ? "workflow-step-active" : ""}`}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{title}</strong>
            {index < workflow.length - 1 && <ArrowDown aria-hidden="true" />}
          </button>
        ))}
      </div>
      <div className="workflow-detail" aria-live="polite">
        <div key={active} className="workflow-content">
          <p className="eyebrow text-brand-accent">
            STEP {String(active + 1).padStart(2, "0")}
          </p>
          <h3>{activeStep[0]}</h3>
          <p>{activeStep[1]}</p>
          <div className="mt-7 flex items-center gap-2 text-xs font-semibold text-brand-success">
            <Check className="size-4" /> Process connected
          </div>
        </div>
      </div>
    </div>
  );
}
