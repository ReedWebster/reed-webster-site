"use client";

import { SectionWrapper } from "./section-wrapper";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface Venture {
  name: string;
  description: string;
  tags: string[];
  href?: string;
  logo?: string;
  logoFallback?: string;
  logoBg?: string;
  logoWide?: boolean;
  status?: string;
  statusColor?: string;
}

const ventures: Venture[] = [
  {
    name: "Vanta Marketing",
    description: "AI-powered paid social and lead generation agency for growth-stage companies. We handle end-to-end campaign strategy, creative production, and performance optimization to drive scalable customer acquisition.",
    tags: ["Founder", "Marketing", "Growth"],
    href: "https://vantamarketing.co",
    logo: "/vanta-logo.png",
    logoBg: "bg-blue-50 dark:bg-blue-950/40",
    status: "Active",
    statusColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
  {
    name: "Rock Canyon AI",
    description: "AI consulting firm helping businesses integrate intelligent automation. Ended up pivoting the team and learnings into Vanta Marketing, building an agency powered by AI.",
    tags: ["Founder", "AI", "Product"],
    logo: "/rock-canyon-logo.png",
    logoWide: true,
    logoBg: "bg-emerald-50 dark:bg-emerald-950/40",
    status: "Pivoted",
    statusColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },
  {
    name: "BYU AI in Business Society",
    description: "Driving AI literacy and applied projects within the BYU business community.",
    tags: ["Leadership", "AI", "Community"],
    href: "https://aiinbusinesssociety.org",
    logo: "/byu-ai-logo.png",
    logoWide: true,
    logoBg: "bg-violet-50 dark:bg-violet-950/40",
    status: "Active",
    statusColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
  {
    name: "Nxt Property Management",
    description: "Leasing operations, tenant relations, and property tours for a multi-unit apartment community.",
    tags: ["Leasing Agent", "Real Estate", "Operations"],
    href: "https://nxtpropertymanagement.com",
    logo: "/nxt-logo.png",
    logoBg: "bg-amber-50 dark:bg-amber-950/40",
    status: "Active",
    statusColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
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

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {ventures.map((v) => (
            <div
              key={v.name}
              className="group relative flex flex-col rounded-[24px] border border-border/60 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_-8px_hsl(var(--shadow-color)/0.12)] hover:border-primary/30"
            >
              {/* Header: logo + name + status */}
              <div className="flex items-center gap-3">
                <div className={`flex shrink-0 items-center justify-center overflow-hidden rounded-xl bg-transparent ${v.logoWide ? "h-16 w-40" : "h-20 w-20"}`}>
                  {v.logo ? (
                    <Image src={v.logo} alt={v.name} width={v.logoWide ? 160 : 80} height={v.logoWide ? 64 : 80} className="h-full w-full object-contain" />
                  ) : (
                    <span className="text-sm font-bold text-primary">{v.logoFallback}</span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="truncate font-heading text-lg text-card-foreground">{v.name}</h3>
                    {v.href && (
                      <a
                        href={v.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                        aria-label={`Visit ${v.name}`}
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                  {v.status && (
                    <span className={`mt-0.5 inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${v.statusColor}`}>
                      {v.status}
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {v.description}
              </p>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {v.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-border/50 bg-secondary/50 px-2.5 py-0.5 text-[11px] font-medium text-secondary-foreground"
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
