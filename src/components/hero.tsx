"use client";

import { motion } from "framer-motion";
import { ArrowDown, Calendar } from "lucide-react";
import Image from "next/image";

const nameWords = ["Reed", "Webster"];

export function Hero() {
  return (
    <section id="about" className="relative flex min-h-screen items-center justify-center px-6 pt-20 lg:pt-0">
      <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-12">
        {/* Photo — shows first on mobile, right side on desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto h-[380px] w-[295px] rotate-1 overflow-hidden rounded-2xl border-2 border-border/60 shadow-[0_16px_48px_-12px_hsl(var(--shadow-color)/0.22)] sm:h-[520px] sm:w-[400px] lg:order-2 lg:mx-0"
        >
          <Image
            src="/reedwebster.jpeg"
            alt="Reed Webster"
            width={400}
            height={520}
            className="h-full w-full scale-125 object-cover object-[center_20%]"
            priority
          />
        </motion.div>

        {/* Text — shows second on mobile, left side on desktop */}
        <div className="text-center lg:order-1 lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base font-medium uppercase tracking-[0.15em] text-primary"
          >
            Strategy &middot; AI &middot; Entrepreneurship
          </motion.p>

          <h1 className="mt-6 font-heading text-4xl leading-tight tracking-tight text-foreground sm:text-5xl lg:text-7xl">
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
                className="mr-3 inline-block sm:mr-4"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:mt-8 lg:mx-0"
          >
            Building ventures at the intersection of AI and business. Co-founder of
            Vanta Marketing. Active leader in the BYU AI in Business Society.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="mt-8 flex flex-col items-center gap-4 sm:mt-10 sm:flex-row lg:justify-start"
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
              className="group inline-flex items-center gap-2 rounded-full border border-border/80 px-8 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:bg-secondary/60 hover:-translate-y-0.5"
            >
              See my work
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
