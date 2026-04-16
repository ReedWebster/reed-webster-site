"use client";

import { useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";

const SIZE = 600;

export function CursorFollower() {
  const x = useMotionValue(-9999);
  const y = useMotionValue(-9999);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none)").matches) return;

    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX - SIZE / 2);
      y.set(e.clientY - SIZE / 2);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 rounded-full blur-3xl"
      style={{
        x,
        y,
        width: SIZE,
        height: SIZE,
        background:
          "radial-gradient(circle, rgba(147,197,253,1) 0%, rgba(59,130,246,0.9) 25%, rgba(37,99,235,0.55) 50%, rgba(37,99,235,0) 75%)",
      }}
    />
  );
}
