"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { BorderBeam } from "@/components/ui/border-beam";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1600;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Credibility() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section style={{ background: "var(--white)", padding: "96px 32px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Label */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "56px" }}
        >
          <div style={{ width: "32px", height: "1px", background: "var(--terracotta)" }} />
          <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--terracotta)" }}>
            Credentials & Experience
          </span>
        </motion.div>

        {/* Bento grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1fr",
          gridTemplateRows: "auto auto",
          gap: "16px",
        }} className="bento-grid">

          {/* Large card — teal bg, spans 2 rows */}
          <motion.div
            className="bento-large"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            style={{
              gridRow: "span 2", borderRadius: "24px",
              background: "var(--charcoal-deep)",
              padding: "48px 40px",
              display: "flex", flexDirection: "column", justifyContent: "space-between",
              minHeight: "360px", position: "relative", overflow: "hidden",
            }}
          >
            <BorderBeam size={140} duration={8} colorFrom="rgba(240,128,0,0.8)" colorTo="rgba(96,144,0,0.4)" />
            <div style={{
              position: "absolute", bottom: "-40px", right: "-40px",
              width: "200px", height: "200px", borderRadius: "50%",
              background: "rgba(240,128,0,0.12)",
            }} />
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "32px" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--orange)" }} />
                <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>
                  TrueDiet
                </span>
              </div>
              <div style={{
                fontFamily: "var(--font-heading)", fontWeight: 800,
                fontSize: "clamp(80px, 10vw, 128px)",
                lineHeight: 0.9, letterSpacing: "-4px", color: "#fff",
              }}>
                <CountUp target={23} suffix="+" />
              </div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginTop: "12px" }}>
                Years as a Registered Dietitian
              </p>
            </div>
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "24px" }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", lineHeight: 1.6, color: "rgba(255,255,255,0.6)" }}>
                Two decades of clinical experience helping people navigate nutrition with confidence.
              </p>
            </div>
          </motion.div>

          {/* Small cards */}
          {[
            {
              label: "Registered Dietitian",
              sub: "Credentialed & qualified",
              bg: "var(--off-white)",
              icon: (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="12" stroke="var(--charcoal-deep)" strokeWidth="1.5"/>
                  <path d="M9 14l3.5 3.5 7-7" stroke="var(--charcoal-deep)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
            },
            {
              label: "Medical Nutrition Therapy",
              sub: "MNT Specialist",
              bg: "var(--blush)",
              icon: (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M14 4v20M4 14h20" stroke="var(--terracotta)" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              ),
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.12 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              style={{
                borderRadius: "20px", background: item.bg, padding: "32px",
                display: "flex", flexDirection: "column", justifyContent: "space-between",
                border: "1px solid var(--border)", minHeight: "160px",
              }}
              whileHover={{ y: -4, boxShadow: "0 16px 48px rgba(0,80,96,0.1)" } as any}
            >
              <div style={{
                width: "48px", height: "48px", borderRadius: "12px",
                background: "rgba(255,255,255,0.7)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                {item.icon}
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "16px", color: "var(--charcoal-deep)", marginBottom: "4px" }}>{item.label}</p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--gray-muted)" }}>{item.sub}</p>
              </div>
            </motion.div>
          ))}

          {/* Quote card — green bg, spans 2 cols */}
          <motion.div
            className="bento-quote"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{
              gridColumn: "span 2", borderRadius: "20px",
              background: "var(--terracotta)",
              padding: "40px", position: "relative", overflow: "hidden",
            }}
          >
            <BorderBeam size={100} duration={12} colorFrom="rgba(255,255,255,0.6)" colorTo="rgba(255,255,255,0.1)" />
            <div style={{
              position: "absolute", top: "-30px", right: "-20px",
              fontFamily: "Georgia, serif", fontSize: "180px", lineHeight: 1,
              color: "rgba(255,255,255,0.1)", fontWeight: 700, userSelect: "none",
            }}>"</div>
            <p style={{
              fontFamily: "var(--font-heading)", fontWeight: 600,
              fontSize: "clamp(16px, 2vw, 22px)", lineHeight: 1.45,
              color: "#fff", fontStyle: "italic", maxWidth: "560px", position: "relative",
            }}>
              Nutrition can be easy to understand when it's explained by the right expert.
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "rgba(255,255,255,0.65)", marginTop: "16px", letterSpacing: "0.04em" }}>
              Maureen Ashbarry, Registered Dietitian
            </p>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .bento-grid { grid-template-columns: 1fr 1fr !important; grid-template-rows: auto !important; }
          .bento-large { grid-row: span 1 !important; grid-column: span 2 !important; }
          .bento-quote { grid-column: span 2 !important; }
        }
        @media (max-width: 600px) {
          .bento-grid { grid-template-columns: 1fr !important; }
          .bento-large { grid-column: span 1 !important; }
          .bento-quote { grid-column: span 1 !important; }
        }
      `}</style>
    </section>
  );
}
