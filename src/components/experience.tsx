"use client";

import { experiences } from "@/data/experience";
import { SectionWrapper } from "./section-wrapper";

export function Experience() {
  return (
    <SectionWrapper id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          Background
        </p>
        <h2 className="mt-2 font-heading text-3xl tracking-tight text-foreground sm:text-4xl">
          Experience
        </h2>
        <p className="mt-3 text-muted-foreground">
          Where I&apos;ve been and what I&apos;ve built.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="group relative flex flex-col rounded-[24px] border border-border/60 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_-8px_hsl(var(--shadow-color)/0.12)] hover:border-primary/30"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  {exp.period}
                </p>
                {exp.current && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                    Current
                  </span>
                )}
              </div>
              <h3 className="mt-2 font-heading text-xl text-foreground">
                {exp.title}
              </h3>
              <p className="mt-0.5 text-sm text-muted-foreground">
                {exp.organization}
                {exp.location && ` — ${exp.location}`}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
