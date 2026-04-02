"use client";

import { SectionWrapper } from "./section-wrapper";
import { GitHubIcon, LinkedInIcon, XIcon, InstagramIcon } from "./social-icons";
import { Mail, Video } from "lucide-react";

const socials = [
  { icon: LinkedInIcon, href: "https://linkedin.com/in/reedwebster", label: "LinkedIn" },
  { icon: XIcon, href: "https://twitter.com/reedwebster4", label: "Twitter" },
  { icon: GitHubIcon, href: "https://github.com/ReedWebster", label: "GitHub" },
  { icon: InstagramIcon, href: "https://instagram.com/reed.webster", label: "Instagram" },
];

export function Contact() {
  return (
    <SectionWrapper id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-heading text-center text-3xl tracking-tight text-foreground sm:text-4xl">
          Let&apos;s Connect
        </h2>
        <p className="mt-3 text-center text-muted-foreground">
          Book a call or reach out through any channel.
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 text-sm"
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
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:text-foreground hover:-translate-y-0.5"
              aria-label={s.label}
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
          <a
            href="mailto:reedwebster7284@gmail.com"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:text-foreground hover:-translate-y-0.5"
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
    <footer className="mx-6 mb-6 mt-12 rounded-[24px] bg-background/70 backdrop-blur-xl border border-border/50 px-6 py-8">
      <div className="mx-auto max-w-5xl text-center text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} Reed Webster. All rights reserved.
      </div>
    </footer>
  );
}
