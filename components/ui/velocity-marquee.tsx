"use client";
import { useRef } from "react";
import {
  motion, useScroll, useVelocity, useTransform,
  useSpring, useAnimationFrame, useMotionValue,
} from "framer-motion";

function wrap(min: number, max: number, v: number) {
  const r = max - min;
  return ((((v - min) % r) + r) % r) + min;
}

export function VelocityMarquee({
  children,
  baseVelocity = 80,
}: {
  children: React.ReactNode;
  baseVelocity?: number;
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [-1000, 1000], [-5, 5], { clamp: false });
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) directionFactor.current = -1;
    else if (velocityFactor.get() > 0) directionFactor.current = 1;
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
      <motion.div style={{ x, display: "flex", gap: 0 }}>
        {children}{children}{children}{children}
      </motion.div>
    </div>
  );
}
