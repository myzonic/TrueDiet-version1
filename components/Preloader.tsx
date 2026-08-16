"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState<"counting" | "reveal" | "done">("counting");
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Count from 0 to 100 over ~1.8s
    const total = 1800;
    const interval = 18;
    const steps = total / interval;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      // Ease out: faster at start, slower at end
      const eased = 1 - Math.pow(1 - progress, 2.5);
      setCount(Math.floor(eased * 100));

      if (step >= steps) {
        clearInterval(timer);
        setCount(100);
        setTimeout(() => setPhase("reveal"), 200);
        setTimeout(() => setVisible(false), 1400);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {/* Background panels — slide up on reveal */}
          <motion.div
            animate={phase === "reveal" ? { y: "-100%" } : { y: "0%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
            style={{
              position: "absolute", inset: 0,
              background: "var(--charcoal-deep)",
            }}
          />
          <motion.div
            animate={phase === "reveal" ? { y: "-100%" } : { y: "0%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0 }}
            style={{
              position: "absolute", inset: 0,
              background: "var(--orange)", opacity: 0.12,
              mixBlendMode: "screen",
            }}
          />

          {/* Content */}
          <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "48px" }}>

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src="/logo.png"
                alt="TrueDiet"
                style={{ height: "72px", width: "auto", filter: "brightness(0) invert(1)", display: "block" }}
              />
            </motion.div>

            {/* Counter */}
            <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                style={{
                  fontFamily: "var(--font-heading)", fontWeight: 800,
                  fontSize: "clamp(80px, 20vw, 160px)",
                  lineHeight: 1, letterSpacing: "-4px",
                  color: "#fff",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {count}
                <span style={{ fontSize: "0.35em", color: "rgba(255,255,255,0.4)", letterSpacing: "-1px" }}>%</span>
              </motion.div>

              {/* Progress bar */}
              <div style={{
                width: "200px", height: "1px",
                background: "rgba(255,255,255,0.1)", borderRadius: "1px",
                overflow: "hidden",
              }}>
                <motion.div
                  animate={{ width: `${count}%` }}
                  transition={{ ease: "linear", duration: 0 }}
                  style={{ height: "100%", background: "var(--orange)", borderRadius: "1px" }}
                />
              </div>

              {/* Label */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.45 }}
                transition={{ delay: 0.4 }}
                style={{
                  fontFamily: "var(--font-body)", fontSize: "10px",
                  fontWeight: 600, letterSpacing: "0.22em",
                  textTransform: "uppercase", color: "#fff",
                }}
              >
                Loading TrueDiet
              </motion.p>
            </div>
          </div>

          {/* Bottom brand line */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{
              position: "absolute", bottom: "32px",
              fontFamily: "var(--font-body)", fontSize: "10px",
              fontWeight: 600, letterSpacing: "0.18em",
              textTransform: "uppercase", color: "rgba(255,255,255,0.25)",
            }}
          >
            By Maureen Ashbarry · Registered Dietitian
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
