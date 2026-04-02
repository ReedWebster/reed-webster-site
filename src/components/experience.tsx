"use client";

import { experiences } from "@/data/experience";
import { SectionWrapper } from "./section-wrapper";

export function Experience() {
  return (
    <SectionWrapper id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-heading text-3xl tracking-tight text-foreground sm:text-4xl">
          Experience
        </h2>
        <p className="mt-3 text-muted-foreground">
          Where I&apos;ve been and what I&apos;ve built.
        </p>

        <div className="relative mt-12 ml-4 border-l-2 border-border pl-8">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pb-10 last:pb-0">
              {/* Timeline dot */}
              <div
                className={`absolute -left-[calc(2rem+5px)] top-1.5 h-3 w-3 rounded-full border-2 transition-colors ${
                  exp.current
                    ? "border-primary bg-primary shadow-[0_0_8px_hsl(var(--primary)/0.4)]"
                    : "border-muted-foreground/40 bg-background"
                }`}
              />

              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                {exp.period}
              </p>
              <h3 className="mt-1.5 font-heading text-lg text-foreground">
                {exp.title}
                <span className="font-sans text-base font-normal text-muted-foreground">
                  {" "}
                  — {exp.organization}
                </span>
              </h3>
              {exp.location && (
                <p className="mt-0.5 text-xs text-muted-foreground">{exp.location}</p>
              )}
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
