"use client";

import { ThemeToggle } from "./theme-toggle";
import { GitHubIcon, LinkedInIcon, XIcon, InstagramIcon } from "./social-icons";
import { Mail, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Ventures", href: "#ventures" },
  { label: "Experience", href: "#experience" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: LinkedInIcon, href: "https://www.linkedin.com/in/reed-webster/", label: "LinkedIn" },
  { icon: XIcon, href: "https://x.com/ReedWebste95668", label: "Twitter" },
  { icon: GitHubIcon, href: "https://github.com/ReedWebster", label: "GitHub" },
  { icon: InstagramIcon, href: "https://instagram.com/reed.webster", label: "Instagram" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full flex justify-center px-4 pt-4">
      <nav
        className={`mx-auto flex w-full max-w-4xl items-center justify-between rounded-full px-6 py-3 transition-all duration-500 ${
          scrolled
            ? "bg-background/70 backdrop-blur-xl border border-border/50 shadow-[0_4px_24px_-4px_hsl(var(--shadow-color)/0.08)]"
            : "bg-background/40 backdrop-blur-md border border-transparent"
        }`}
      >
        {/* Logo */}
        <a href="/" className="font-logo text-lg font-semibold tracking-tight text-foreground">
          RW
        </a>

        {/* Center links */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary/60"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-1">
          <div className="hidden items-center gap-0.5 md:flex">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary/60"
                aria-label={s.label}
              >
                <s.icon className="h-3.5 w-3.5" />
              </a>
            ))}
            <a
              href="mailto:reedwebster7284@gmail.com"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary/60"
              aria-label="Email"
            >
              <Mail className="h-3.5 w-3.5" />
            </a>
          </div>
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary/60 md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-full left-4 right-4 mt-2 rounded-2xl bg-background/80 backdrop-blur-xl border border-border/50 px-6 py-4 shadow-lg md:hidden">
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary/60"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-4 flex gap-2 border-t border-border/50 pt-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/50 text-muted-foreground transition-colors hover:text-foreground"
                aria-label={s.label}
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
            <a
              href="mailto:reedwebster7284@gmail.com"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/50 text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
