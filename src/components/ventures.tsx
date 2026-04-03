"use client";

import { SectionWrapper } from "./section-wrapper";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface Venture {
  name: string;
  description: string;
  tags: string[];
  href?: string;
  accentColor: string;
  logo?: string;
  logoFallback?: string;
}

const ventures: Venture[] = [
  {
    name: "Vanta Marketing LLC",
    description: "Paid social and lead generation agency for growth-stage companies.",
    tags: ["Founder", "Marketing", "Growth"],
    href: "https://vantamarketing.co",
    accentColor: "border-l-blue-500",
    logo: "/vanta-logo.png",
  },
  {
    name: "Rock Canyon AI",
    description: "Exploring applied AI solutions for real-world business challenges.",
    tags: ["Founder", "AI", "Product"],
    href: "#",
    accentColor: "border-l-emerald-500",
    logoFallback: "RC",
  },
  {
    name: "BYU AI in Business Society",
    description: "Driving AI literacy and applied projects within the BYU business community.",
    tags: ["Leadership", "AI", "Community"],
    href: "#",
    accentColor: "border-l-violet-500",
    logoFallback: "AI",
  },
  {
    name: "Nxt Property Management",
    description: "Leasing operations, tenant relations, and property tours for a multi-unit apartment community.",
    tags: ["Leasing Agent", "Real Estate", "Operations"],
    href: "https://nxtpropertymanagement.com",
    accentColor: "border-l-amber-500",
    logo: "/nxt-logo.png",
  },
];

export function Ventures() {
  return (
    <SectionWrapper id="ventures" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          Portfolio
        </p>
        <h2 className="mt-2 font-heading text-3xl tracking-tight text-foreground sm:text-4xl">
          Ventures &amp; Projects
        </h2>
        <p className="mt-3 text-muted-foreground">
          Companies and projects I&apos;m building.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {ventures.map((v) => (
            <div
              key={v.name}
              className={`group relative rounded-[24px] border border-border/60 border-l-[3px] ${v.accentColor} bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-t-2 hover:border-t-primary hover:shadow-[0_12px_32px_-8px_hsl(var(--shadow-color)/0.12)]`}
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-secondary">
                  {v.logo ? (
                    <Image src={v.logo} alt={v.name} width={40} height={40} className="h-full w-full object-contain p-1" />
                  ) : (
                    <span className="text-xs font-bold text-primary">{v.logoFallback}</span>
                  )}
                </div>
                <div className="flex flex-1 items-start justify-between">
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
