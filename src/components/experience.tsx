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

        <div className="relative mt-12 ml-2 border-l-2 border-border pl-6 sm:ml-4 sm:pl-8">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pb-10 last:pb-0">
              {/* Timeline dot */}
              <div
                className={`absolute -left-[calc(1.5rem+5px)] sm:-left-[calc(2rem+5px)] top-1.5 h-3 w-3 rounded-full border-2 transition-colors ${
                  exp.current
                    ? "border-primary bg-primary shadow-[0_0_8px_hsl(var(--primary)/0.4)]"
                    : "border-muted-foreground/40 bg-background"
                }`}
              />

              <div className="flex items-center gap-2">
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  {exp.period}
                </p>
                {exp.current && (
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
                    Current
                  </span>
                )}
              </div>
              <h3 className={`mt-1.5 font-heading text-foreground ${exp.current ? "text-xl" : "text-lg"}`}>
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
