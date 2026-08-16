"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Ripple } from "@/components/ui/ripple";

const mockScreens = [
  { bg: "var(--charcoal-deep)", delay: 0.15, rotate: -6 },
  { bg: "var(--white)", delay: 0.25, rotate: 0 },
  { bg: "var(--blush)", delay: 0.35, rotate: 6 },
];

const appHeadlineLines = ["The TrueDiet", "App Is Coming", "Soon."];

function AppHeadlineLine({ text, delay }: { text: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <span ref={ref} style={{ display: "block", overflow: "hidden" }}>
      <motion.span
        initial={{ y: "110%" }}
        animate={inView ? { y: "0%" } : {}}
        transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
        style={{
          display: "block", fontFamily: "var(--font-heading)", fontWeight: 800,
          fontSize: "clamp(36px, 4.5vw, 64px)", lineHeight: 1.05,
          letterSpacing: "-1.5px", color: "var(--charcoal-deep)",
        }}
      >
        {text}
      </motion.span>
    </span>
  );
}

function MockScreen({ bg, rotate, delay, inView }: { bg: string; rotate: number; delay: number; inView: boolean }) {
  const isDark = bg === "var(--charcoal-deep)";
  const line = isDark ? "rgba(255,255,255,0.12)" : "rgba(0,80,96,0.1)";
  const accent = isDark ? "var(--orange)" : "rgba(0,80,96,0.5)";
  return (
    <motion.div
      initial={{ opacity: 0, y: 80, rotate: rotate * 1.5 }}
      animate={inView ? { opacity: 1, y: 0, rotate } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -12, rotate: 0, scale: 1.02, zIndex: 10 } as any}
      style={{
        width: "190px", height: "390px", borderRadius: "32px",
        background: bg,
        border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,80,96,0.08)"}`,
        boxShadow: "0 32px 80px rgba(0,80,96,0.15)",
        overflow: "hidden", padding: "22px 18px",
        display: "flex", flexDirection: "column", gap: "10px",
        cursor: "default", flexShrink: 0,
      }}
    >
      <div style={{ height: "8px", display: "flex", justifyContent: "center" }}>
        <div style={{ width: "40px", height: "4px", borderRadius: "2px", background: line }} />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: accent, flexShrink: 0 }} />
        <div style={{ height: "6px", width: "55%", borderRadius: "3px", background: line }} />
        <div style={{ marginLeft: "auto", width: "18px", height: "18px", borderRadius: "5px", background: accent, opacity: 0.5 }} />
      </div>
      <div style={{ background: accent, opacity: isDark ? 0.2 : 0.15, borderRadius: "10px", height: "80px" }} />
      {[80, 60, 70, 50].map((w, i) => (
        <div key={i} style={{ height: "7px", width: `${w}%`, borderRadius: "3px", background: line }} />
      ))}
      {[0, 1].map(i => (
        <div key={i} style={{ borderRadius: "10px", background: line, padding: "10px", display: "flex", gap: "8px", alignItems: "center" }}>
          <div style={{ width: "24px", height: "24px", borderRadius: "6px", background: accent, opacity: 0.5, flexShrink: 0 }} />
          <div style={{ flex: 1 }}>
            <div style={{ height: "6px", width: "65%", borderRadius: "2px", background: line, marginBottom: "4px" }} />
            <div style={{ height: "5px", width: "80%", borderRadius: "2px", background: line, opacity: 0.6 }} />
          </div>
        </div>
      ))}
      <div style={{ marginTop: "auto", background: accent, borderRadius: "10px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ height: "6px", width: "50%", borderRadius: "2px", background: isDark ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.9)" }} />
      </div>
    </motion.div>
  );
}

function PhoneMockup({ inView }: { inView: boolean }) {
  const isDark = true;
  const line = "rgba(255,255,255,0.12)";
  const accent = "var(--orange)";
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      style={{ display: "flex", justifyContent: "center" }}
    >
      {/* Phone outer shell */}
      <div style={{
        width: "220px",
        background: "var(--charcoal-deep)",
        borderRadius: "44px",
        padding: "12px",
        boxShadow: "0 0 0 2px rgba(255,255,255,0.08), 0 40px 80px rgba(0,80,96,0.4), 0 12px 32px rgba(0,0,0,0.3)",
        position: "relative",
      }}>
        {/* Side buttons */}
        <div style={{ position: "absolute", left: "-3px", top: "80px", width: "3px", height: "32px", background: "rgba(255,255,255,0.15)", borderRadius: "2px 0 0 2px" }} />
        <div style={{ position: "absolute", left: "-3px", top: "124px", width: "3px", height: "32px", background: "rgba(255,255,255,0.15)", borderRadius: "2px 0 0 2px" }} />
        <div style={{ position: "absolute", right: "-3px", top: "100px", width: "3px", height: "56px", background: "rgba(255,255,255,0.15)", borderRadius: "0 2px 2px 0" }} />

        {/* Screen bezel */}
        <div style={{
          background: "#0a1628",
          borderRadius: "34px",
          overflow: "hidden",
          height: "440px",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          padding: "20px 16px 16px",
          gap: "10px",
        }}>
          {/* Dynamic island */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "4px" }}>
            <div style={{ width: "80px", height: "22px", background: "#000", borderRadius: "100px" }} />
          </div>

          {/* Status bar */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: accent, flexShrink: 0 }} />
            <div style={{ height: "6px", width: "40%", borderRadius: "3px", background: line }} />
            <div style={{ width: "18px", height: "18px", borderRadius: "5px", background: accent, opacity: 0.5 }} />
          </div>

          {/* App banner */}
          <div style={{ background: "rgba(240,128,0,0.18)", borderRadius: "12px", padding: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "var(--orange)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6" stroke="#fff" strokeWidth="1.2"/>
                <path d="M5 8l2 2 4-4" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <div style={{ height: "6px", width: "70px", borderRadius: "2px", background: "rgba(240,128,0,0.6)", marginBottom: "5px" }} />
              <div style={{ height: "5px", width: "90px", borderRadius: "2px", background: line }} />
            </div>
          </div>

          {/* Content bars */}
          {[80, 60, 90, 50, 70].map((w, i) => (
            <div key={i} style={{ height: "7px", width: `${w}%`, borderRadius: "3px", background: line }} />
          ))}

          {/* Two cards */}
          {[0, 1].map(i => (
            <div key={i} style={{ borderRadius: "12px", background: "rgba(255,255,255,0.06)", padding: "12px", display: "flex", gap: "10px", alignItems: "center" }}>
              <div style={{ width: "28px", height: "28px", borderRadius: "8px", background: i === 0 ? "rgba(240,128,0,0.4)" : "rgba(96,144,0,0.4)", flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <div style={{ height: "6px", width: "65%", borderRadius: "2px", background: line, marginBottom: "5px" }} />
                <div style={{ height: "5px", width: "80%", borderRadius: "2px", background: line, opacity: 0.6 }} />
              </div>
            </div>
          ))}

          {/* CTA button */}
          <div style={{ marginTop: "auto", background: "var(--orange)", borderRadius: "12px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
            <div style={{ height: "7px", width: "50%", borderRadius: "2px", background: "rgba(255,255,255,0.85)" }} />
          </div>

          {/* Home indicator */}
          <div style={{ display: "flex", justifyContent: "center", marginTop: "4px" }}>
            <div style={{ width: "80px", height: "4px", borderRadius: "2px", background: "rgba(255,255,255,0.25)" }} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function AppComingSoon() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const floatY = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  return (
    <section id="app" ref={ref} style={{ background: "var(--off-white)", overflow: "hidden", position: "relative" }}>
      <div className="app-beams-desktop"><BackgroundBeams /></div>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ height: "1px", background: "var(--border)", transformOrigin: "left" }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "96px 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }} className="app-grid">

          {/* Left — Desktop: 3 tilted screens, Mobile: phone mockup */}
          <motion.div style={{ y: floatY }}>
            {/* Desktop screens */}
            <div className="app-screens-desktop" style={{
              display: "flex", justifyContent: "center", alignItems: "flex-end",
              gap: "16px", height: "430px", position: "relative",
            }}>
              {mockScreens.map((s, i) => (
                <MockScreen key={i} bg={s.bg} rotate={s.rotate} delay={s.delay} inView={inView} />
              ))}
              <div style={{
                position: "absolute", bottom: "-20px",
                left: "50%", transform: "translateX(-50%)",
                width: "60%", height: "60px",
                background: "radial-gradient(ellipse, rgba(0,80,96,0.15) 0%, transparent 70%)",
                filter: "blur(20px)", pointerEvents: "none",
              }} />
            </div>

            {/* Mobile phone mockup */}
            <div className="app-screens-mobile" style={{ display: "none", position: "relative" }}>
              <Ripple color="rgba(0,80,96,0.15)" count={4} size={180} />
              <PhoneMockup inView={inView} />
            </div>
          </motion.div>

          {/* Right — text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "5px 12px", borderRadius: "100px",
                background: "rgba(240,128,0,0.1)", border: "1px solid rgba(240,128,0,0.25)",
                marginBottom: "24px",
              }}
            >
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--orange)" }}
              />
              <span style={{ fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--orange)" }}>
                Coming Soon
              </span>
            </motion.div>

            <div style={{ marginBottom: "28px" }}>
              {appHeadlineLines.map((line, i) => (
                <AppHeadlineLine key={line} text={line} delay={0.15 + i * 0.12} />
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{ fontFamily: "var(--font-body)", fontSize: "17px", lineHeight: 1.7, color: "var(--charcoal)", marginBottom: "40px" }}
            >
              TrueDiet is being created to make evidence-based nutrition information more accessible, practical, and personalized. Join the waitlist to be first.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              href="#waitlist"
              whileHover={{ scale: 1.03 } as any}
              style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                padding: "16px 32px", borderRadius: "100px",
                fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: 600,
                color: "#fff", textDecoration: "none",
                background: "var(--orange)",
                boxShadow: "0 8px 32px rgba(240,128,0,0.3)",
              }}
            >
              Join the Waitlist
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M1 6.5h11M7 2.5l4.5 4-4.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </motion.a>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.75 }}
              style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "var(--gray-muted)", marginTop: "16px" }}
            >
              TrueDiet is in development. No App Store or Google Play listings yet.
            </motion.p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .app-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .app-screens-desktop { display: none !important; }
          .app-screens-mobile { display: block !important; }
          .app-beams-desktop { display: none !important; }
        }
      `}</style>
    </section>
  );
}
