"use client";
import { useEffect, useId, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Sparkle {
  id: string;
  x: string;
  y: string;
  color: string;
  delay: number;
  scale: number;
  lifespan: number;
}

function generateSparkle(color: string): Sparkle {
  return {
    id: Math.random().toString(36).slice(2),
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`,
    color,
    delay: Math.random() * 2,
    scale: 0.5 + Math.random() * 1,
    lifespan: 750 + Math.random() * 1000,
  };
}

export function SparklesCore({
  background = "transparent",
  minSize = 0.8,
  maxSize = 1.6,
  particleDensity = 80,
  className = "",
  particleColor = "#005060",
}: {
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  className?: string;
  particleColor?: string;
}) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const id = useId();

  useEffect(() => {
    const count = Math.min(particleDensity, 40); // cap for mobile perf
    const initial = Array.from({ length: count }, () => generateSparkle(particleColor));
    setSparkles(initial);

    const interval = setInterval(() => {
      setSparkles((prev) => {
        const next = [...prev.slice(1), generateSparkle(particleColor)];
        return next;
      });
    }, 400);

    return () => clearInterval(interval);
  }, [particleDensity, particleColor]);

  return (
    <div
      style={{ position: "absolute", inset: 0, background, overflow: "hidden", pointerEvents: "none" }}
      className={className}
    >
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <defs>
          <radialGradient id={`${id}-grad`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={particleColor} stopOpacity="1" />
            <stop offset="100%" stopColor={particleColor} stopOpacity="0" />
          </radialGradient>
        </defs>
        {sparkles.map((s) => (
          <motion.circle
            key={s.id}
            cx={s.x}
            cy={s.y}
            r={minSize + (maxSize - minSize) * s.scale}
            fill={`url(#${id}-grad)`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, s.scale, 0] }}
            transition={{ duration: s.lifespan / 1000, delay: s.delay, ease: "easeInOut" }}
          />
        ))}
      </svg>
    </div>
  );
}
