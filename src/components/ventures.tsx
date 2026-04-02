"use client";

import { SectionWrapper } from "./section-wrapper";
import { ArrowUpRight } from "lucide-react";

interface Venture {
  name: string;
  description: string;
  tags: string[];
  href?: string;
}

const ventures: Venture[] = [
  {
    name: "Vanta Marketing Co.",
    description: "Paid social and lead generation agency for growth-stage companies.",
    tags: ["Founder", "Marketing", "Growth"],
    href: "https://vantamarketing.co",
  },
  {
    name: "Templar AI LLC",
    description: "AI consulting firm helping Utah businesses integrate intelligent automation.",
    tags: ["Co-Founder", "AI", "Consulting"],
    href: "#",
  },
  {
    name: "Rock Canyon AI",
    description: "Exploring applied AI solutions for real-world business challenges.",
    tags: ["Founder", "AI", "Product"],
    href: "#",
  },
];

export function Ventures() {
  return (
    <SectionWrapper id="ventures" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-heading text-3xl tracking-tight text-foreground sm:text-4xl">
          Ventures
        </h2>
        <p className="mt-3 text-muted-foreground">
          Companies and projects I&apos;m building.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ventures.map((v) => (
            <div
              key={v.name}
              className="group relative rounded-[24px] border border-border/60 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-t-2 hover:border-t-primary hover:shadow-[0_12px_32px_-8px_hsl(var(--shadow-color)/0.12)]"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-heading text-lg text-card-foreground">{v.name}</h3>
                {v.href && (
                  <a
                    href={v.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors group-hover:text-primary"
                    aria-label={`Visit ${v.name}`}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {v.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {v.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
