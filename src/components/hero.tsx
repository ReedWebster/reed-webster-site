"use client";

import { motion } from "framer-motion";
import { ArrowDown, Calendar } from "lucide-react";

export function Hero() {
  return (
    <section id="about" className="relative flex min-h-screen items-center justify-center px-6">
      <div className="mx-auto max-w-3xl text-center">
        {/* Initials avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground"
        >
          RW
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
        >
          Reed Webster
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-lg font-medium tracking-wide text-primary"
        >
          Strategy · AI · Entrepreneurship
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground"
        >
          BYU junior studying strategy at the Marriott School of Management, building
          ventures at the intersection of AI and business. Co-founder of Vanta Marketing Co.
          and Templar AI. Active leader in the BYU AI in Business Society.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Calendar className="h-4 w-4" />
            Book a Call
          </a>
          <a
            href="#ventures"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            See my work
            <ArrowDown className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
