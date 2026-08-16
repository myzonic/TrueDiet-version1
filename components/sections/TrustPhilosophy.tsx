"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const words = ["Credible.", "Honest.", "Trusted.", "Evidence-Based.", "Clarity.", "Science-First."];
const pillars = [
  { text: "No unnecessary hype.", cross: true },
  { text: "No confusing nutrition jargon.", cross: true },
  { text: "No pressure to buy things you don't need.", cross: true },
  { text: "Just credible, evidence-based nutrition education.", cross: false },
];
const headlineLines = ["A Place You Can", "Trust for Nutrition", "Information."];

function TrustHeadlineLine({ text, delay }: { text: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <span ref={ref} style={{ display: "block", overflow: "hidden" }}>
      <motion.span
        initial={{ y: "110%" }}
        animate={inView ? { y: "0%" } : {}}
        transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
        style={{
          display: "block",
          fontFamily: "var(--font-heading)", fontWeight: 800,
          fontSize: "clamp(32px, 3.5vw, 52px)",
          lineHeight: 1.1, letterSpacing: "-1px", color: "#fff",
        }}
      >
        {text}
      </motion.span>
    </span>
  );
}

export default function TrustPhilosophy() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  useGSAP(() => {
    if (!marqueeRef.current) return;
    const strip = marqueeRef.current;
    const items = strip.querySelectorAll<HTMLElement>(".marquee-item");
    if (!items.length) return;

    const totalWidth = Array.from(items).reduce((acc, el) => acc + el.offsetWidth, 0);

    gsap.to(strip, {
      x: `-${totalWidth / 2}px`,
      duration: 28,
      ease: "none",
      repeat: -1,
    });
  }, { scope: sectionRef });

  useGSAP(() => {
    if (!sectionRef.current) return;
    const cards = sectionRef.current.querySelectorAll(".pillar-item");
    gsap.fromTo(cards,
      { opacity: 0, x: 30 },
      {
        opacity: 1, x: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section style={{ background: "var(--charcoal-deep)", overflow: "hidden", position: "relative" }} ref={sectionRef}>
      {/* Background orb */}
      <motion.div style={{ y: bgY, position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        <div style={{
          position: "absolute", top: "20%", right: "-10%",
          width: "600px", height: "600px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(240,128,0,0.10) 0%, transparent 70%)",
        }} />
        <div style={{
          position: "absolute", bottom: "10%", left: "-8%",
          width: "400px", height: "400px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(96,144,0,0.07) 0%, transparent 70%)",
        }} />
      </motion.div>

      {/* GSAP auto-scroll infinite marquee */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", overflow: "hidden", padding: "20px 0" }}>
        <div ref={marqueeRef} style={{ display: "flex", gap: "0", alignItems: "center", willChange: "transform" }}>
          {[...words, ...words, ...words, ...words].map((w, i) => (
            <span key={i} className="marquee-item" style={{ display: "inline-flex", alignItems: "center", gap: "0", flexShrink: 0, paddingRight: "64px" }}>
              <span style={{
                fontFamily: "var(--font-heading)", fontWeight: 800,
                fontSize: "clamp(32px, 4vw, 58px)", letterSpacing: "-1px",
                color: i % words.length === 0 ? "var(--orange)" : "rgba(255,255,255,0.06)",
                WebkitTextStroke: i % words.length !== 0 ? "1px rgba(255,255,255,0.18)" : "none",
                whiteSpace: "nowrap",
              }}>{w}</span>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--terracotta)", opacity: 0.5, flexShrink: 0, marginLeft: "64px" }} />
            </span>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "96px 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }} className="trust-grid">

          {/* Left — image */}
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0 round 20px)" }}
            animate={inView ? { clipPath: "inset(0 0 0% 0 round 20px)" } : {}}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            style={{ borderRadius: "20px", overflow: "hidden", aspectRatio: "4/5", position: "relative" }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1543362906-acfc16c67564?w=800&q=85&auto=format"
              alt="Wholesome nutrition"
              style={{ width: "100%", height: "110%", objectFit: "cover", scale: imgScale } as any}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(0,80,96,0.75) 0%, transparent 60%)" }} />
            <div style={{
              position: "absolute", bottom: "28px", left: "28px", right: "28px",
              padding: "20px 22px",
              background: "rgba(255,255,255,0.07)", backdropFilter: "blur(12px)",
              borderRadius: "14px", border: "1px solid rgba(255,255,255,0.1)",
            }}>
              <p style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "15px", color: "#fff", lineHeight: 1.4, fontStyle: "italic" }}>
                "A safe, credible place for evidence-based nutrition information."
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "rgba(255,255,255,0.5)", marginTop: "8px" }}>Maureen Ashbarry, RD</p>
            </div>
          </motion.div>

          {/* Right — content */}
          <div style={{ position: "relative", zIndex: 1 }}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "28px" }}
            >
              <div style={{ width: "24px", height: "1px", background: "var(--terracotta)" }} />
              <span style={{ fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--terracotta)" }}>
                Our Philosophy
              </span>
            </motion.div>

            <div style={{ marginBottom: "48px" }}>
              {headlineLines.map((line, i) => (
                <TrustHeadlineLine key={line} text={line} delay={0.15 + i * 0.11} />
              ))}
            </div>

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              {pillars.map((p, i) => (
                <div
                  key={i}
                  className="pillar-item"
                  style={{
                    display: "flex", alignItems: "center", gap: "16px",
                    padding: "18px 0", borderBottom: "1px solid rgba(255,255,255,0.06)",
                    opacity: 0,
                  }}
                >
                  <div style={{
                    width: "26px", height: "26px", borderRadius: "50%",
                    background: p.cross ? "rgba(255,255,255,0.05)" : "rgba(96,144,0,0.2)",
                    border: `1px solid ${p.cross ? "rgba(255,255,255,0.1)" : "rgba(96,144,0,0.45)"}`,
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    fontSize: "10px", fontWeight: 700,
                    color: p.cross ? "rgba(255,255,255,0.3)" : "var(--terracotta)",
                    fontFamily: "var(--font-heading)",
                  }}>
                    {p.cross ? "✕" : "✓"}
                  </div>
                  <span style={{
                    fontFamily: "var(--font-body)", fontSize: "15px",
                    fontWeight: p.cross ? 400 : 600,
                    color: p.cross ? "rgba(255,255,255,0.5)" : "#fff",
                    lineHeight: 1.45,
                  }}>
                    {p.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .trust-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .trust-grid > div:first-child { aspect-ratio: 3/2 !important; }
        }
      `}</style>
    </section>
  );
}
