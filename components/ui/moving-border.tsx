"use client";
import React, { useRef } from "react";
import { motion, useAnimationFrame, useMotionTemplate, useMotionValue, useTransform } from "framer-motion";

export function MovingBorder({
  children,
  duration = 2000,
  rx = "30%",
  ry = "30%",
  ...props
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: unknown;
}) {
  const pathRef = useRef<SVGRectElement>(null);
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMs = length / duration;
      progress.set((time * pxPerMs) % length);
    }
  });

  const x = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val)?.x ?? 0);
  const y = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val)?.y ?? 0);
  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <div
      style={{ position: "relative", overflow: "hidden", borderRadius: "100px", padding: "1px" }}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", borderRadius: "100px" }}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0, left: 0,
          display: "inline-block",
          transform,
          width: "80px", height: "80px",
          background: "radial-gradient(circle at center, var(--orange) 0%, transparent 70%)",
          opacity: 0.9,
        }}
      />
      <div
        style={{
          position: "relative",
          background: "var(--charcoal-deep)",
          borderRadius: "100px",
          zIndex: 1,
        }}
      >
        {children}
      </div>
    </div>
  );
}
