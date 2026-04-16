"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
  animate,
  type AnimationPlaybackControls,
} from "framer-motion";
import { useTheme } from "next-themes";

const SIZE = 600;
const IDLE_DELAY_MS = 2500;

export function CursorFollower() {
  const reducedMotion = useReducedMotion();
  const { resolvedTheme } = useTheme();

  // Start with the orb's center at the top-left corner (0, 0)
  const x = useMotionValue(-SIZE / 2);
  const y = useMotionValue(-SIZE / 2);
  const scale = useMotionValue(1);

  const springX = useSpring(x, { damping: 28, stiffness: 70, mass: 1 });
  const springY = useSpring(y, { damping: 28, stiffness: 70, mass: 1 });
  const springScale = useSpring(scale, { damping: 18, stiffness: 220 });

  useEffect(() => {
    if (reducedMotion) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none)").matches) return;

    let idleTimer: ReturnType<typeof setTimeout> | null = null;
    let idleAnimation: AnimationPlaybackControls | null = null;

    const stopIdle = () => {
      if (idleTimer) {
        clearTimeout(idleTimer);
        idleTimer = null;
      }
      if (idleAnimation) {
        idleAnimation.stop();
        idleAnimation = null;
      }
      scale.set(1);
    };

    const scheduleIdle = () => {
      if (idleTimer) clearTimeout(idleTimer);
      if (idleAnimation) {
        idleAnimation.stop();
        idleAnimation = null;
      }
      idleTimer = setTimeout(() => {
        idleAnimation = animate(scale, [1, 1.15, 1], {
          duration: 3.5,
          ease: "easeInOut",
          repeat: Infinity,
        });
      }, IDLE_DELAY_MS);
    };

    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX - SIZE / 2);
      y.set(e.clientY - SIZE / 2);
      scheduleIdle();
    };

    window.addEventListener("mousemove", handleMove);
    scheduleIdle();

    return () => {
      window.removeEventListener("mousemove", handleMove);
      stopIdle();
    };
  }, [x, y, scale, reducedMotion]);

  if (reducedMotion) return null;

  const isDark = resolvedTheme === "dark";
  const gradient = isDark
    ? "radial-gradient(circle, rgba(165,180,252,1) 0%, rgba(129,140,248,0.85) 25%, rgba(99,102,241,0.45) 50%, rgba(79,70,229,0) 75%)"
    : "radial-gradient(circle, rgba(147,197,253,1) 0%, rgba(59,130,246,0.9) 25%, rgba(37,99,235,0.55) 50%, rgba(37,99,235,0) 75%)";

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 rounded-full blur-3xl"
      style={{
        x: springX,
        y: springY,
        scale: springScale,
        width: SIZE,
        height: SIZE,
        background: gradient,
      }}
    />
  );
}
