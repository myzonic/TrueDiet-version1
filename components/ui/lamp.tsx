"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function LampContainer({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
        width: "100%",
        paddingTop: "48px",
      }}
      className={className}
    >
      {/* Left beam */}
      <motion.div
        initial={{ opacity: 0, width: "8rem" }}
        animate={inView ? { opacity: 1, width: "clamp(10rem, 30vw, 22rem)" } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: 0,
          left: "calc(50% - clamp(10rem,30vw,22rem))",
          height: "1px",
          background: "linear-gradient(90deg, transparent, var(--charcoal-deep))",
          transformOrigin: "right",
        }}
      />
      {/* Right beam */}
      <motion.div
        initial={{ opacity: 0, width: "8rem" }}
        animate={inView ? { opacity: 1, width: "clamp(10rem, 30vw, 22rem)" } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: 0,
          right: "calc(50% - clamp(10rem,30vw,22rem))",
          height: "1px",
          background: "linear-gradient(90deg, var(--charcoal-deep), transparent)",
          transformOrigin: "left",
        }}
      />

      {/* Glow cone */}
      <motion.div
        initial={{ opacity: 0, width: "4rem" }}
        animate={inView ? { opacity: 0.14, width: "clamp(8rem, 20vw, 18rem)" } : {}}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          height: "clamp(6rem, 12vw, 10rem)",
          background: "conic-gradient(from 270deg at 50% 0%, transparent 20%, var(--charcoal-deep) 50%, transparent 80%)",
          filter: "blur(20px)",
        }}
      />

      {/* Orange dot at top center */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
        style={{
          position: "absolute",
          top: "-2px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: "var(--orange)",
          boxShadow: "0 0 12px 4px rgba(240,128,0,0.5)",
        }}
      />

      {/* Inner glow */}
      <motion.div
        initial={{ opacity: 0, width: "4rem" }}
        animate={inView ? { opacity: 0.25, width: "clamp(4rem, 10vw, 8rem)" } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          height: "clamp(3rem, 6vw, 5rem)",
          background: "linear-gradient(to bottom, var(--orange), transparent)",
          filter: "blur(12px)",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
        {children}
      </div>
    </div>
  );
}
