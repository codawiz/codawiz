import {
  Blocks,
  Bot,
  CodeXml,
  Megaphone,
  Network,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  number: string;
  shortTitle: string;
  title: string;
  summary: string;
  message: string;
  problem: string;
  approach: string;
  services: string[];
  deliverables: string[];
  capabilities: string[];
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: "web-software-development",
    number: "01",
    shortTitle: "Web & Software",
    title: "Web & Software Development",
    summary:
      "Digital products designed around user needs and measurable business objectives.",
    message: "Build a digital experience that works as hard as your business.",
    problem:
      "A weak, inflexible or disconnected digital experience makes it harder to earn trust, serve customers and operate efficiently.",
    approach:
      "We connect user experience, technical architecture and commercial goals before choosing how the solution should be built.",
    services: [
      "Corporate websites",
      "Business websites",
      "E-commerce",
      "Web applications",
      "Custom platforms",
      "UI/UX design",
      "Frontend development",
      "Backend development",
      "Website maintenance",
    ],
    deliverables: [
      "Product and content strategy",
      "Responsive interface system",
      "Production-ready application",
      "Technical documentation",
      "Launch and improvement roadmap",
    ],
    capabilities: [
      "Frontend",
      "Backend",
      "Responsive applications",
      "E-commerce",
      "API integration",
    ],
    icon: CodeXml,
  },
  {
    slug: "erp-business-systems",
    number: "02",
    shortTitle: "ERP & Systems",
    title: "ERP & Business Systems",
    summary:
      "Centralize operations, connect departments and see the whole business more clearly.",
    message: "Connect your business operations in one system.",
    problem:
      "Information spread across spreadsheets and disconnected tools slows decisions, creates duplication and hides what is happening.",
    approach:
      "We map how the business operates, prioritize the right modules and configure a connected system around real working practices.",
    services: [
      "ERP implementation",
      "Odoo solutions",
      "CRM",
      "Sales management",
      "Accounting",
      "Inventory",
      "Purchasing",
      "HR",
      "Project management",
      "Business reporting",
      "Custom ERP modules",
      "Process digitalization",
    ],
    deliverables: [
      "Process and requirement map",
      "Configured ERP environment",
      "Custom modules and integrations",
      "Reporting dashboards",
      "Adoption and rollout plan",
    ],
    capabilities: ["ERP", "CRM", "Odoo", "Business management", "Reporting"],
    icon: Blocks,
  },
  {
    slug: "business-automation",
    number: "03",
    shortTitle: "Automation",
    title: "Business Automation",
    summary:
      "Turn repetitive, inefficient or disconnected processes into streamlined digital workflows.",
    message: "Automate the work that slows your business down.",
    problem:
      "Manual handoffs, repeated data entry and missed follow-ups cost time, introduce errors and make performance difficult to track.",
    approach:
      "We analyze the current workflow first, identify valuable automation points and connect the tools your team already depends on.",
    services: [
      "Workflow automation",
      "CRM automation",
      "ERP automation",
      "Automated notifications",
      "Approval workflows",
      "Document workflows",
      "Automated reporting",
      "Data synchronization",
      "API integrations",
      "Email automation",
      "Lead automation",
      "Task automation",
      "Practical AI-assisted automation",
    ],
    deliverables: [
      "Current-state workflow analysis",
      "Automation opportunity map",
      "Connected workflow implementation",
      "Exception and approval logic",
      "Monitoring and handover",
    ],
    capabilities: [
      "APIs",
      "Workflow automation",
      "System integration",
      "Data synchronization",
      "AI-assisted processing",
    ],
    icon: Bot,
  },
  {
    slug: "custom-digital-solutions",
    number: "04",
    shortTitle: "Custom Solutions",
    title: "Custom Digital Solutions",
    summary:
      "Purpose-built systems for requirements that standard products cannot address well.",
    message: "When standard software isn't enough, build the right solution.",
    problem:
      "Off-the-shelf tools often force specialized businesses into compromises, fragmented workarounds or unnecessary complexity.",
    approach:
      "We translate specific operational requirements into a focused system that fits the people, data and decisions involved.",
    services: [
      "Internal management platforms",
      "Customer portals",
      "Business dashboards",
      "Industry-specific platforms",
      "Digital workflows",
      "Custom applications",
      "API integrations",
      "Data management systems",
      "Specialized business tools",
    ],
    deliverables: [
      "Requirements specification",
      "System architecture",
      "Interface prototype",
      "Custom application",
      "Integration and support plan",
    ],
    capabilities: [
      "Product strategy",
      "System architecture",
      "Data management",
      "Integrations",
      "Custom applications",
    ],
    icon: Network,
  },
  {
    slug: "digital-presence-content",
    number: "05",
    shortTitle: "Digital & Content",
    title: "Digital Presence & Content",
    summary:
      "A coordinated digital presence that supports reputation, communication and growth.",
    message: "Turn your digital presence into a business asset.",
    problem:
      "Inconsistent communication and disconnected content activity consume effort without building a clear, credible market presence.",
    approach:
      "We align content, channels and visual communication with the wider business strategy—not isolated vanity metrics.",
    services: [
      "Social media management",
      "Content strategy",
      "Content creation",
      "Graphic design",
      "LinkedIn management",
      "Social campaigns",
      "Digital communication",
      "Content calendars",
      "Performance analysis",
    ],
    deliverables: [
      "Channel and audience strategy",
      "Editorial direction",
      "Content system",
      "Campaign assets",
      "Performance review framework",
    ],
    capabilities: [
      "Content",
      "Social media",
      "Digital communication",
      "Analytics",
      "Campaigns",
    ],
    icon: Megaphone,
  },
];

export const solutions = [
  {
    problem: "I need a professional digital presence.",
    answer: "Web Design & Development",
    slug: "web-software-development",
  },
  {
    problem: "My business operations are difficult to manage.",
    answer: "ERP & Business Systems",
    slug: "erp-business-systems",
  },
  {
    problem: "My team wastes time on repetitive tasks.",
    answer: "Business Automation",
    slug: "business-automation",
  },
  {
    problem: "I need software built for my business.",
    answer: "Custom Digital Solutions",
    slug: "custom-digital-solutions",
  },
  {
    problem: "My company needs stronger communication.",
    answer: "Digital Presence & Content",
    slug: "digital-presence-content",
  },
] as const;
