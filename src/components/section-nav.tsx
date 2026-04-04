"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "ventures", label: "Ventures" },
  { id: "experience", label: "Experience" },
  { id: "writing", label: "Writing" },
  { id: "contact", label: "Contact" },
];

export function SectionNav() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const sorted = visible.sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio
          );
          setActive(sorted[0].target.id);
        }
      },
      { threshold: 0.3 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-3 xl:flex">
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className="group flex items-center gap-2"
          aria-label={label}
        >
          <span
            className={`text-[11px] font-medium uppercase tracking-wider transition-all duration-300 ${
              active === id
                ? "opacity-100 text-foreground translate-x-0"
                : "opacity-0 text-muted-foreground translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
            }`}
          >
            {label}
          </span>
          <span
            className={`block rounded-full transition-all duration-300 ${
              active === id
                ? "h-3 w-3 bg-primary shadow-[0_0_8px_hsl(var(--primary)/0.4)]"
                : "h-2 w-2 bg-muted-foreground/30 group-hover:bg-muted-foreground/60"
            }`}
          />
        </a>
      ))}
    </nav>
  );
}
