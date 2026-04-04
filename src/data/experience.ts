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
    organization: "Vanta Marketing",
    period: "2024 — Present",
    description:
      "AI-powered paid social and lead generation agency serving growth-stage companies with end-to-end campaign strategy and performance optimization.",
    current: true,
  },
  {
    title: "Vice President",
    organization: "AI in Business Society",
    period: "2023 — Present",
    description:
      "Leading AI literacy initiatives and applied projects within the BYU business community. 1st place in the BYU x MindStudio \"Force Multiplier\" Hackathon.",
    current: true,
  },
  {
    title: "Student Consultant on AI",
    organization: "Brigham Young University",
    location: "Provo, UT",
    period: "2024 — Present",
    description:
      "Consulting on AI integration and applications across academic and business contexts at BYU.",
    current: true,
  },
  {
    title: "Leasing Agent",
    organization: "Nxt Property Management",
    location: "Bountiful, UT",
    period: "2023 — Present",
    description:
      "Managing leasing operations, tenant relations, and property tours. Integrating AI into real estate operations over the past two years.",
    current: true,
  },
  {
    title: "Co-Founder",
    organization: "Rock Canyon AI",
    period: "2024",
    description:
      "AI consulting firm helping businesses integrate intelligent automation. Pivoted the team and learnings into Vanta Marketing.",
  },
  {
    title: "B.S. Strategy",
    organization: "Brigham Young University",
    location: "Provo, UT",
    period: "2024 — 2028",
    description:
      "Marriott School of Management. Coursework in finance, communications, and Chinese.",
  },
];
