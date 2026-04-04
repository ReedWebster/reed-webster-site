"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function BackgroundOrbs() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-[#e8ddd4] opacity-40 blur-[120px] dark:bg-[#2a2118] dark:opacity-30"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute -top-20 -right-20 h-[400px] w-[400px] rounded-full bg-[#bde0f5] opacity-25 blur-[120px] dark:bg-[#1a2a3d] dark:opacity-20"
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute -bottom-40 left-1/3 h-[500px] w-[500px] rounded-full bg-[#e8ddd4] opacity-20 blur-[140px] dark:bg-[#2a2118] dark:opacity-15"
      />
    </div>
  );
}
