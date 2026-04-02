"use client";

import { SectionWrapper } from "./section-wrapper";

export function Academic() {
  return (
    <SectionWrapper className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl rounded-xl border border-border bg-card p-8 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-primary">
            Academic Context
          </p>
          <h3 className="mt-3 text-xl font-semibold text-foreground">
            BYU Marriott School of Management
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Studying strategy with coursework spanning finance, communications, and
            Chinese — building an interdisciplinary foundation for navigating global
            business at the intersection of technology and human systems.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
