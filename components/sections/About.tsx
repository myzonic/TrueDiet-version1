"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { HyperText } from "@/components/ui/hyper-text";

const timeline = [
  { year: "2001", title: "Registered Dietitian", desc: "Began clinical practice after completing her dietetics degree and RD credential." },
  { year: "2008", title: "Medical Nutrition Therapy", desc: "Specialised in MNT — working with complex medical conditions through targeted nutrition intervention." },
  { year: "2015", title: "Digital Education", desc: "Expanded reach to online nutrition education, helping people navigate an increasingly noisy information landscape." },
  { year: "2026", title: "TrueDiet Founded", desc: "Created TrueDiet as a dedicated evidence-based platform to make credible nutrition accessible to everyone." },
];

const credBadges = [
  { id: 1, name: "Registered Dietitian", designation: "Fully credentialed & qualified", initials: "RD" },
  { id: 2, name: "MNT Specialist", designation: "Medical Nutrition Therapy", initials: "MNT" },
  { id: 3, name: "23 Yrs Experience", designation: "Helping real people, daily", initials: "23+" },
  { id: 4, name: "Evidence-Based", designation: "Scientifically supported guidance", initials: "EB" },
];

const lines = [
  "Maureen brings 23 years of",
  "experience in nutrition and",
  "Medical Nutrition Therapy.",
];

function RevealLine({ text, delay }: { text: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <span ref={ref} style={{ display: "block", overflow: "hidden", lineHeight: 1.1 }}>
      <motion.span
        initial={{ y: "105%" }}
        animate={inView ? { y: "0%" } : {}}
        transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
        style={{ display: "block" }}
      >
        {text}
      </motion.span>
    </span>
  );
}

const creds = [
  { label: "Registered Dietitian", detail: "Fully credentialed & qualified" },
  { label: "Evidence-Based Educator", detail: "Scientifically supported guidance" },
  { label: "MNT Specialist", detail: "Medical Nutrition Therapy" },
  { label: "23 Years Experience", detail: "Helping real people, daily" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} style={{ background: "var(--white)", overflow: "hidden" }}>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        style={{ height: "1px", background: "var(--border)", transformOrigin: "left" }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "clamp(32px, 8vw, 96px) clamp(16px, 4vw, 48px)" }}>

        {/* Top row */}
        <div style={{
          display: "grid", gridTemplateColumns: "200px 1fr", gap: "clamp(24px, 6vw, 48px)",
          marginBottom: "clamp(32px, 8vw, 80px)", alignItems: "start",
        }} className="about-header">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ paddingTop: "12px" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
              <div style={{ width: "24px", height: "1px", background: "var(--terracotta)" }} />
              <HyperText
                text="About"
                style={{ fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--terracotta)" }}
              />
            </div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "var(--gray-muted)", lineHeight: 1.6 }}>
              Maureen Ashbarry<br />Registered Dietitian
            </p>
          </motion.div>

          <h2 style={{
            fontFamily: "var(--font-heading)", fontWeight: 800,
            fontSize: "clamp(40px, 5.5vw, 80px)", lineHeight: 1.0,
            letterSpacing: "-2px", color: "var(--charcoal-deep)",
          }}>
            {lines.map((line, i) => <RevealLine key={i} text={line} delay={0.1 + i * 0.12} />)}
          </h2>
        </div>

        {/* Main content */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(32px, 8vw, 64px)", alignItems: "center" }} className="about-split">

          {/* Left — image */}
          <motion.div style={{ y: imgY, position: "relative" }}>
            <motion.div
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={inView ? { clipPath: "inset(0% 0 0 0)" } : {}}
              transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ borderRadius: "20px", overflow: "hidden", aspectRatio: "3/4" }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=900&q=90&auto=format"
                alt="Maureen Ashbarry, Registered Dietitian"
                style={{ width: "100%", height: "115%", objectFit: "cover", objectPosition: "top" }}
                whileHover={{ scale: 1.04 } as any}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: "absolute", bottom: "32px", right: "-24px",
                background: "var(--charcoal-deep)",
                borderRadius: "16px", padding: "20px 24px",
                boxShadow: "0 16px 48px rgba(0,80,96,0.35)",
              }}
            >
              <p style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "36px", color: "#fff", lineHeight: 1 }}>23</p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "rgba(255,255,255,0.75)", marginTop: "4px", letterSpacing: "0.04em", textTransform: "uppercase" }}>
                Years of<br />Experience
              </p>
            </motion.div>
          </motion.div>

          {/* Right — text + creds */}
          <motion.div style={{ y: textY }}>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ fontFamily: "var(--font-body)", fontSize: "17px", lineHeight: 1.75, color: "var(--charcoal)", marginBottom: "20px" }}
            >
              Her experience helping people one-on-one showed her how frequently people are confused and overwhelmed by nutrition information.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              style={{ fontFamily: "var(--font-body)", fontSize: "17px", lineHeight: 1.75, color: "var(--charcoal)", marginBottom: "48px" }}
            >
              TrueDiet was created so she can educate and help more people with credible, scientifically supported nutrition information.
            </motion.p>

            <div style={{ borderTop: "1px solid var(--border)" }}>
              {creds.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.45 + i * 0.09 }}
                  style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "16px 0", borderBottom: "1px solid var(--border)", gap: "16px",
                  }}
                  whileHover={{ x: 6 } as any}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--terracotta)", flexShrink: 0 }} />
                    <span style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "15px", color: "var(--charcoal-deep)" }}>{c.label}</span>
                  </div>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "var(--gray-muted)", textAlign: "right" }}>{c.detail}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.85 }}
              style={{ marginTop: "32px" }}
            >
              <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gray-muted)", marginBottom: "14px" }}>
                Credentials
              </p>
              <AnimatedTooltip items={credBadges} />
            </motion.div>

            {/* Orbiting credentials visual */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              style={{ marginTop: "40px", display: "flex", justifyContent: "flex-start" }}
              className="orbiting-wrap"
            >
              <OrbitingCircles
                size={220}
                items={[
                  { label: "RD", radius: 75, duration: 18, delay: 0 },
                  { label: "MNT", radius: 75, duration: 18, delay: -6, reverse: true },
                  { label: "23 Yrs", radius: 105, duration: 26, delay: 0 },
                  { label: "Evidence", radius: 105, duration: 26, delay: -9 },
                ]}
                center={
                  <div style={{
                    width: "64px", height: "64px", borderRadius: "50%",
                    background: "var(--charcoal-deep)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "0 8px 32px rgba(0,80,96,0.3)",
                  }}>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <circle cx="14" cy="14" r="12" stroke="#fff" strokeWidth="1.5"/>
                      <path d="M9 14l3 3 7-7" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                }
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Career Timeline */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 48px) clamp(32px, 8vw, 96px)" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "40px" }}>
            <div style={{ width: "28px", height: "1px", background: "var(--terracotta)" }} />
            <HyperText
              text="Career Milestones"
              style={{ fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--terracotta)" }}
            />
          </div>

          <div style={{ position: "relative" }}>
            {/* Vertical line */}
            <div style={{
              position: "absolute", left: "64px", top: "8px", bottom: "8px",
              width: "1px", background: "var(--border)",
            }} />

            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{ display: "flex", gap: "32px", alignItems: "flex-start", marginBottom: i < timeline.length - 1 ? "32px" : "0", position: "relative" }}
              >
                {/* Year label */}
                <div style={{ width: "48px", flexShrink: 0, paddingTop: "2px" }}>
                  <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "12px", color: "var(--terracotta)", letterSpacing: "0.04em" }}>
                    {item.year}
                  </span>
                </div>

                {/* Dot */}
                <div style={{
                  width: "12px", height: "12px", borderRadius: "50%",
                  background: i === timeline.length - 1 ? "var(--orange)" : "var(--charcoal-deep)",
                  border: "2px solid var(--white)",
                  boxShadow: i === timeline.length - 1 ? "0 0 0 3px rgba(240,128,0,0.2)" : "0 0 0 2px var(--border)",
                  flexShrink: 0, marginTop: "4px",
                }} />

                {/* Content */}
                <div style={{ flex: 1 }}>
                  <p style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "15px", color: "var(--charcoal-deep)", marginBottom: "4px" }}>
                    {item.title}
                  </p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", lineHeight: 1.6, color: "var(--gray-muted)" }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-header { grid-template-columns: 1fr !important; gap: 24px !important; }
          .about-split { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 768px) {
          .about-header { gap: 16px !important; }
          .about-split { gap: 24px !important; }
          .orbiting-wrap { display: none !important; }
        }
      `}</style>
    </section>
  );
}
