"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function GlowingEffect({
  children,
  className = "",
  glowColor = "var(--orange)",
}: {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}) {
  return (
    <div style={{ position: "relative", display: "inline-block" }} className={className}>
      {/* Pulsing glow ring */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          inset: "-3px",
          borderRadius: "100px",
          background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
          filter: "blur(6px)",
          opacity: 0.6,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      {/* Orbiting dot */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "100px",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <div style={{
          position: "absolute",
          top: "-3px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: glowColor,
          boxShadow: `0 0 8px 3px ${glowColor}`,
        }} />
      </motion.div>

      <div style={{ position: "relative", zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}
