"use client";

import { SectionWrapper } from "./section-wrapper";
import { GitHubIcon, LinkedInIcon, XIcon, InstagramIcon } from "./social-icons";
import { Mail, Video } from "lucide-react";

const socials = [
  { icon: LinkedInIcon, href: "https://linkedin.com/in/reedwebster", label: "LinkedIn" },
  { icon: XIcon, href: "https://twitter.com/reedwebster", label: "Twitter" },
  { icon: GitHubIcon, href: "https://github.com/reedwebster", label: "GitHub" },
  { icon: InstagramIcon, href: "https://instagram.com/reedwebster", label: "Instagram" },
];

export function Contact() {
  return (
    <SectionWrapper id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Let&apos;s Connect
        </h2>
        <p className="mt-2 text-center text-muted-foreground">
          Book a call or reach out through any channel.
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Video className="h-4 w-4" />
            Schedule a Google Meet
          </a>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
              aria-label={s.label}
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
          <a
            href="mailto:reed@reedwebster.com"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto max-w-5xl text-center text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} Reed Webster. All rights reserved.
      </div>
    </footer>
  );
}
