"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || target === 0) { setCount(0); return; }
    let start = 0;
    const duration = 1800;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function RadialProgress({ pct, label, color = "var(--orange)", size = 120 }: {
  pct: number; label: string; color?: string; size?: number;
}) {
  const ref = useRef<SVGCircleElement>(null);
  const inView = useInView(ref as any, { once: true });
  const r = 46;
  const circ = 2 * Math.PI * r;
  const dash = circ * (pct / 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px", flex: "1 1 180px" }}
    >
      <div style={{ position: "relative", width: size, height: size }}>
        <svg width={size} height={size} viewBox="0 0 100 100">
          <circle
            cx="50" cy="50" r={r}
            stroke="rgba(255,255,255,0.07)"
            strokeWidth="7" fill="none"
          />
          <motion.circle
            ref={ref}
            cx="50" cy="50" r={r}
            stroke={color}
            strokeWidth="7" fill="none"
            strokeLinecap="round"
            strokeDasharray={circ}
            initial={{ strokeDashoffset: circ }}
            animate={inView ? { strokeDashoffset: circ - dash } : {}}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            transform="rotate(-90 50 50)"
          />
        </svg>
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
        }}>
          <span style={{
            fontFamily: "var(--font-heading)", fontWeight: 800,
            fontSize: "26px", lineHeight: 1, color: "#fff",
            letterSpacing: "-1px",
          }}>
            {pct}{pct < 100 ? "%" : "%"}
          </span>
        </div>
      </div>
      <p style={{
        fontFamily: "var(--font-body)", fontSize: "12px",
        fontWeight: 500, letterSpacing: "0.08em",
        color: "rgba(255,255,255,0.4)",
        textTransform: "uppercase", textAlign: "center",
        maxWidth: "120px",
      }}>
        {label}
      </p>
    </motion.div>
  );
}

function StatCounter({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ textAlign: "center", flex: "1 1 180px" }}
    >
      <div style={{
        fontFamily: "var(--font-heading)", fontWeight: 800,
        fontSize: "clamp(52px, 6vw, 88px)", lineHeight: 1,
        letterSpacing: "-2px", color: "#fff",
        fontVariantNumeric: "tabular-nums",
      }}>
        <CountUp target={value} suffix={suffix} />
      </div>
      <p style={{
        fontFamily: "var(--font-body)", fontSize: "13px",
        fontWeight: 500, letterSpacing: "0.08em",
        color: "rgba(255,255,255,0.45)",
        marginTop: "10px", textTransform: "uppercase",
      }}>
        {label}
      </p>
    </motion.div>
  );
}

export default function StatsStrip() {
  return (
    <section style={{
      background: "var(--charcoal-deep)",
      padding: "80px 48px", overflow: "hidden", position: "relative",
    }}>
      {/* Subtle grid bg */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
        backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div style={{
        maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1,
        display: "flex", alignItems: "center", justifyContent: "center",
        gap: "0", flexWrap: "wrap",
      }} className="stats-inner">

        {/* Number counters */}
        <div style={{ display: "flex", alignItems: "center", flex: "1 1 180px" }}>
          <StatCounter value={23} suffix="+" label="Years as Registered Dietitian" delay={0} />
          <div className="stat-divider" style={{ width: "1px", height: "60px", flexShrink: 0, background: "rgba(255,255,255,0.1)" }} />
        </div>

        <div style={{ display: "flex", alignItems: "center", flex: "1 1 180px" }}>
          <StatCounter value={500} suffix="+" label="Clients Helped" delay={0.08} />
          <div className="stat-divider" style={{ width: "1px", height: "60px", flexShrink: 0, background: "rgba(255,255,255,0.1)" }} />
        </div>

        {/* Radial progress rings */}
        <RadialProgress pct={100} label="Evidence-Based" color="var(--orange)" />
        <div className="stat-divider" style={{ width: "1px", height: "60px", flexShrink: 0, background: "rgba(255,255,255,0.1)", alignSelf: "center" }} />
        <RadialProgress pct={0} label="Gimmicks. Ever." color="var(--terracotta)" />
      </div>

      <style>{`
        @media (max-width: 600px) {
          .stats-inner { gap: 40px !important; }
          .stat-divider { display: none !important; }
        }
      `}</style>
    </section>
  );
}
