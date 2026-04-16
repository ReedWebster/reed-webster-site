"use client";

import { useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";

export function CursorFollower() {
  const x = useMotionValue(-9999);
  const y = useMotionValue(-9999);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none)").matches) return;

    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-3xl"
      style={{
        x,
        y,
        background:
          "radial-gradient(circle, rgba(96,165,250,0.55) 0%, rgba(59,130,246,0.25) 40%, rgba(59,130,246,0) 70%)",
      }}
    />
  );
}
