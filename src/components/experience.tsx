"use client";

import { experiences } from "@/data/experience";
import { SectionWrapper } from "./section-wrapper";

export function Experience() {
  return (
    <SectionWrapper id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Experience
        </h2>
        <p className="mt-2 text-muted-foreground">
          Where I&apos;ve been and what I&apos;ve built.
        </p>

        <div className="relative mt-10 ml-4 border-l border-border pl-8">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pb-10 last:pb-0">
              {/* Timeline dot */}
              <div
                className={`absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full border-2 ${
                  exp.current
                    ? "border-primary bg-primary"
                    : "border-muted-foreground bg-background"
                }`}
              />

              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                {exp.period}
              </p>
              <h3 className="mt-1 text-base font-semibold text-foreground">
                {exp.title}
                <span className="font-normal text-muted-foreground">
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
