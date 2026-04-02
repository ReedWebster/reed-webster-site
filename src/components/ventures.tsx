"use client";

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
    href: "#",
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
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Ventures
        </h2>
        <p className="mt-2 text-muted-foreground">
          Companies and projects I&apos;m building.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ventures.map((v) => (
            <Card
              key={v.name}
              className="group relative transition-colors hover:border-primary/30"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg">{v.name}</CardTitle>
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
                <CardDescription className="mt-1">{v.description}</CardDescription>
                <div className="mt-4 flex flex-wrap gap-2">
                  {v.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
