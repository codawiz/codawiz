import { Blocks, CodeXml, Network, ChartNoAxesCombined } from "lucide-react";
export const approach = [
  [
    "01",
    "Understand first",
    "We start with the business, its processes and its objectives.",
  ],
  [
    "02",
    "Design the right solution",
    "Requirements shape the solution—not a predefined template.",
  ],
  [
    "03",
    "Build with purpose",
    "Technology should be practical, scalable and easy to use.",
  ],
  [
    "04",
    "Connect & automate",
    "We connect systems and remove unnecessary manual work.",
  ],
  ["05", "Improve continuously", "The solution evolves as the business grows."],
] as const;

export const process = [
  ["01", "Discover", "Business, users, challenges and objectives."],
  ["02", "Plan", "Scope, priorities, architecture and roadmap."],
  ["03", "Design", "User experience, interface and system structure."],
  ["04", "Develop", "Build, integrate, test and optimize."],
  ["05", "Launch & evolve", "Deploy, learn and keep improving."],
] as const;

export const capabilityGroups = [
  {
    title: "Web",
    icon: CodeXml,
    items: ["Frontend", "Backend", "Responsive applications", "E-commerce"],
  },
  {
    title: "Business systems",
    icon: Blocks,
    items: ["ERP", "CRM", "Odoo", "Business management"],
  },
  {
    title: "Automation",
    icon: Network,
    items: [
      "APIs",
      "Workflow automation",
      "System integration",
      "Data synchronization",
    ],
  },
  {
    title: "Digital",
    icon: ChartNoAxesCombined,
    items: ["Content", "Social media", "Digital communication", "Analytics"],
  },
] as const;
