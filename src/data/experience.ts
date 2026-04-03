export interface ExperienceEntry {
  title: string;
  organization: string;
  location?: string;
  period: string;
  description: string;
  current?: boolean;
}

export const experiences: ExperienceEntry[] = [
  {
    title: "Co-Founder",
    organization: "Vanta Marketing Co.",
    period: "2024 — Present",
    description:
      "Built a paid social and lead generation agency serving growth-stage companies.",
    current: true,
  },
  {
    title: "Co-Founder",
    organization: "Templar AI LLC",
    location: "Utah",
    period: "2024 — Present",
    description:
      "AI consulting firm helping businesses integrate intelligent automation into their workflows.",
    current: true,
  },
  {
    title: "Leadership",
    organization: "BYU AI in Business Society",
    period: "2023 — Present",
    description:
      "Driving AI literacy and applied projects within the BYU business community.",
    current: true,
  },
  {
    title: "Leasing Agent",
    organization: "Arden Place Apartments",
    location: "Orem, UT",
    period: "2023 — Present",
    description:
      "Managing leasing operations, tenant relations, and property tours for a multi-unit apartment community.",
    current: true,
  },
  {
    title: "B.S. Strategy",
    organization: "Brigham Young University",
    location: "Provo, UT",
    period: "2022 — 2026 (Expected)",
    description:
      "Marriott School of Management. Coursework in finance, communications, and Chinese.",
  },
];
