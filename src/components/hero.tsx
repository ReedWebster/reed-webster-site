"use client";

import { motion } from "framer-motion";
import { ArrowDown, Calendar } from "lucide-react";

const nameWords = ["Reed", "Webster"];

export function Hero() {
  return (
    <section id="about" className="relative flex min-h-screen items-center justify-center px-6">
      <div className="mx-auto max-w-3xl text-center">
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm font-medium uppercase tracking-[0.2em] text-primary"
        >
          Strategy &middot; AI &middot; Entrepreneurship
        </motion.p>

        {/* Word-by-word animated name */}
        <h1 className="mt-6 font-heading text-5xl tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          {nameWords.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, filter: "blur(8px)", y: 12 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3 + i * 0.2,
                ease: "easeOut",
              }}
              className="inline-block mr-4"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground"
        >
          BYU junior studying strategy at the Marriott School of Management, building
          ventures at the intersection of AI and business. Co-founder of Vanta Marketing Co.
          and Templar AI. Active leader in the BYU AI in Business Society.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 text-sm"
          >
            <Calendar className="h-4 w-4" />
            Book a Call
          </a>
          <a
            href="#ventures"
            className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:bg-secondary/60 hover:-translate-y-0.5"
          >
            See my work
            <ArrowDown className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
