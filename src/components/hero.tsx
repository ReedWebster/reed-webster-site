"use client";

import { motion } from "framer-motion";
import { ArrowDown, Calendar } from "lucide-react";
import Image from "next/image";

const nameWords = ["Reed", "Webster"];

export function Hero() {
  return (
    <section id="about" className="relative flex min-h-screen items-center justify-center px-6">
      <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[1fr_auto]">
        {/* Text — left side */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm font-medium uppercase tracking-[0.2em] text-primary"
          >
            Strategy &middot; AI &middot; Entrepreneurship
          </motion.p>

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
                className="mr-4 inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground"
          >
            BYU junior studying strategy at the Marriott School of Management, building
            ventures at the intersection of AI and business. Co-founder of Vanta Marketing Co.
            Active leader in the BYU AI in Business Society.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
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

        {/* Photo — right side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto h-[360px] w-[280px] overflow-hidden rounded-2xl border-2 border-border/60 shadow-[0_12px_40px_-8px_hsl(var(--shadow-color)/0.18)] lg:mx-0"
        >
          <Image
            src="/reedwebster.jpeg"
            alt="Reed Webster"
            width={280}
            height={360}
            className="h-full w-full object-cover object-[center_15%]"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
