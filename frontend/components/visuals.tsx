import { HeroNetwork } from "@/components/motion/hero-network";
import {
  Activity,
  BarChart3,
  Box,
  Check,
  CircleDollarSign,
  FileText,
  PackageCheck,
  Users,
} from "lucide-react";

const nodes = ["WEB", "ERP", "AUTOMATION", "DATA", "MARKETING"];
export function EcosystemVisual() {
  return (
    <div
      className="ecosystem"
      aria-label="CODAWIZ connected business ecosystem"
    >
      <div className="ecosystem-top">
        <div className="window-dots">
          <i />
          <i />
          <i />
        </div>
        <span>SYSTEM / BUSINESS INFRASTRUCTURE</span>
        <b>CONNECTED</b>
      </div>
      <div className="ecosystem-grid">
        <HeroNetwork />
        <svg
          className="ecosystem-connections"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {[
            "M 20 18 L 35 18 L 50 50",
            "M 80 18 L 65 18 L 50 50",
            "M 20 82 L 35 82 L 50 50",
            "M 80 82 L 65 82 L 50 50",
            "M 50 92 L 50 50",
          ].map((path, index) => (
            <g key={path}>
              <path d={path} className="connection-track" />
              <path
                d={path}
                className="connection-pulse"
                style={{ animationDelay: `${index * -0.7}s` }}
              />
            </g>
          ))}
        </svg>
        {nodes.map((node, index) => (
          <div
            key={node}
            className={`ecosystem-node ecosystem-node-${index + 1}`}
          >
            <span>0{index + 1}</span>
            <strong>{node}</strong>
            <i />
          </div>
        ))}
        <div className="ecosystem-core">
          <span>CORE SYSTEM</span>
          <strong>CODAWIZ</strong>
          <small>Business operations</small>
        </div>
      </div>
      <div className="ecosystem-foot">
        <div>
          <span>OPERATING MODEL</span>
          <strong>Build · Connect · Automate</strong>
        </div>
        <div className="system-health">
          <i /> Systems aligned
        </div>
      </div>
    </div>
  );
}

const modules = [
  ["CRM", Users],
  ["Sales", CircleDollarSign],
  ["Purchasing", PackageCheck],
  ["Inventory", Box],
  ["Accounting", BarChart3],
  ["HR", Users],
  ["Projects", FileText],
  ["Reporting", Activity],
] as const;
export function ERPDashboard() {
  return (
    <div className="erp-ui">
      <div className="erp-bar">
        <div className="flex gap-1.5">
          <i />
          <i />
          <i />
        </div>
        <span>BUSINESS OPERATIONS</span>
        <b>LIVE</b>
      </div>
      <div className="erp-body">
        <aside>
          <div className="erp-mark">C</div>
          {[0, 1, 2, 3, 4].map((item) => (
            <span key={item} />
          ))}
        </aside>
        <div className="min-w-0 flex-1">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold text-muted-foreground">
                OVERVIEW
              </p>
              <h3 className="mt-1 text-xl font-bold">One connected business</h3>
            </div>
            <div className="hidden items-center gap-2 text-xs font-semibold text-brand-success sm:flex">
              <i className="status-light" /> Systems synced
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {modules.map(([name, Icon]) => (
              <div className="erp-module" key={name}>
                <Icon />
                <span>{name}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 grid gap-3 sm:grid-cols-[1.45fr_1fr]">
            <div className="erp-chart">
              <div className="flex items-center justify-between">
                <span>Operational visibility</span>
                <strong>+ clear</strong>
              </div>
              <div className="chart-bars">
                {[34, 58, 46, 74, 64, 88, 79, 94].map((height, index) => (
                  <i key={index} style={{ height: `${height}%` }} />
                ))}
              </div>
            </div>
            <div className="erp-list">
              {[
                "Departments connected",
                "Reporting available",
                "Workflows visible",
              ].map((item) => (
                <div key={item}>
                  <Check />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectPreview({ variant = 0 }: { variant?: number }) {
  return (
    <div className={`project-preview project-preview-${variant % 3}`}>
      <div className="project-browser">
        <div className="project-browser-bar">
          <i />
          <i />
          <i />
        </div>
        <div className="project-browser-body">
          <aside>
            {[1, 2, 3, 4, 5].map((item) => (
              <i key={item} />
            ))}
          </aside>
          <div className="flex-1">
            <div className="project-title-line" />
            <div className="project-metrics">
              <span />
              <span />
              <span />
            </div>
            <div className="project-chart">
              {[42, 70, 51, 82, 64, 91].map((height, index) => (
                <i style={{ height: `${height}%` }} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
