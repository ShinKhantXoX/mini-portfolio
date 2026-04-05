export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  images: string[];
  /** When set, show an external link CTA */
  url?: string;
  /** Shown on the timeline node (e.g. year or phase) */
  period: string;
};

export const projects: Project[] = [
  {
    id: "portfolio",
    period: "2025",
    title: "Mini portfolio",
    description:
      "A single-page portfolio with horizontal sections, skills grid, and this projects timeline with image gallery.",
    tech: ["Next.js", "React", "Tailwind CSS", "Motion"],
    images: ["/next.svg", "/vercel.svg"],
    url: "https://github.com",
  },
  {
    id: "dashboard",
    period: "2024",
    title: "Analytics dashboard",
    description:
      "Internal dashboard for monitoring usage metrics and alerts. No public deployment.",
    tech: ["TypeScript", "React", "PostgreSQL"],
    images: ["/globe.svg", "/window.svg", "/file.svg"],
  },
  {
    id: "tooling",
    period: "2023",
    title: "CLI tooling",
    description:
      "Developer CLI for scaffolding and lint rules. Replace copy and images with your own work.",
    tech: ["Node.js", "TypeScript"],
    images: ["/file.svg"],
    url: "https://nodejs.org",
  },
];
