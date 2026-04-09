"use client";

import { SectionWrapper } from "./section-wrapper";
import { GitHubIcon, LinkedInIcon, XIcon, InstagramIcon } from "./social-icons";
import { Mail, Phone } from "lucide-react";

const socials = [
  { icon: LinkedInIcon, href: "https://www.linkedin.com/in/reed-webster/", label: "LinkedIn", hoverColor: "hover:text-[#0A66C2] hover:border-[#0A66C2]/40" },
  { icon: XIcon, href: "https://x.com/ReedWebste95668", label: "Twitter", hoverColor: "hover:text-foreground hover:border-foreground/40" },
  { icon: GitHubIcon, href: "https://github.com/ReedWebster", label: "GitHub", hoverColor: "hover:text-foreground hover:border-foreground/40" },
  { icon: InstagramIcon, href: "https://instagram.com/reed.webster", label: "Instagram", hoverColor: "hover:text-[#E4405F] hover:border-[#E4405F]/40" },
];

export function Contact() {
  return (
    <SectionWrapper id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-primary">
          Get in Touch
        </p>
        <h2 className="mt-2 font-heading text-center text-3xl tracking-tight text-foreground sm:text-4xl">
          Let&apos;s Connect
        </h2>
        <p className="mt-3 text-center text-muted-foreground">
          Give me a call or shoot me an email.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="tel:+18014980754"
            className="btn-primary inline-flex items-center gap-2 text-sm"
          >
            <Phone className="h-4 w-4" />
            (801) 498-0754
          </a>
          <a
            href="mailto:reedwebster7284@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-border/80 px-8 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:bg-secondary/60 hover:-translate-y-0.5"
          >
            <Mail className="h-4 w-4" />
            Email Me
          </a>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-all duration-300 ${s.hoverColor} hover:-translate-y-0.5`}
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

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Ventures", href: "#ventures" },
  { label: "Experience", href: "#experience" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="mx-6 mb-6 mt-12 rounded-[24px] bg-background/70 backdrop-blur-xl border border-border/50 px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="font-logo text-lg font-semibold tracking-tight text-foreground">
              Reed Webster
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Strategy, AI &amp; Entrepreneurship
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-4">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
                aria-label={s.label}
              >
                <s.icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-6 border-t border-border/40 pt-4 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Reed Webster. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
