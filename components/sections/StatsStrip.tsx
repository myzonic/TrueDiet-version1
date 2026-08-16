"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 23, suffix: "+", label: "Years as Registered Dietitian" },
  { value: 500, suffix: "+", label: "Clients Helped" },
  { value: 100, suffix: "%", label: "Evidence-Based" },
  { value: 0, suffix: "", label: "Gimmicks. Ever." },
];

function StatCounter({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView || value === 0) { if (value === 0) setCount(0); return; }
    let start = 0;
    const duration = 1800;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(eased * value));
      if (p < 1) requestAnimationFrame(step);
      else setCount(value);
    };
    requestAnimationFrame(step);
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
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
        {count}{suffix}
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
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;
    const dividers = sectionRef.current.querySelectorAll(".stat-divider");
    gsap.fromTo(dividers,
      { scaleY: 0 },
      {
        scaleY: 1, stagger: 0.15, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} style={{
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
        {stats.map((s, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", flex: "1 1 180px" }}>
            <StatCounter value={s.value} suffix={s.suffix} label={s.label} delay={i * 0.08} />
            {i < stats.length - 1 && (
              <div
                className="stat-divider"
                style={{
                  width: "1px", height: "60px", flexShrink: 0,
                  background: "rgba(255,255,255,0.1)",
                  transformOrigin: "center", transform: "scaleY(0)",
                }}
              />
            )}
          </div>
        ))}
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
