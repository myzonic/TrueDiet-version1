"use client";

import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { MovingBorder } from "@/components/ui/moving-border";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { SparklesCore } from "@/components/ui/sparkles";
import SocialLinks from "@/components/SocialLinks";

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.06, 1, 1.04]);
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section
      id="contact"
      ref={ref}
      style={{ position: "relative", overflow: "hidden", minHeight: "640px", display: "flex", alignItems: "center" }}
    >
      {/* Background parallax image */}
      <motion.div style={{ position: "absolute", inset: "-15%", y: imgY, scale: imgScale, zIndex: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=1600&q=90&auto=format"
          alt="Fresh healthy food"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(0,80,96,0.92) 0%, rgba(0,80,96,0.78) 100%)" }} />
      </motion.div>

      {/* Noise grain */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
      }} />
      {/* Sparkles overlay */}
      <SparklesCore
        particleDensity={30}
        particleColor="#fff"
        minSize={0.4}
        maxSize={1}
        className="cta-sparkles"
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, width: "100%", maxWidth: "800px", margin: "0 auto", padding: "96px 48px", textAlign: "center" }}>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "12px", marginBottom: "32px" }}
        >
          <div style={{ width: "40px", height: "1px", background: "rgba(255,255,255,0.4)" }} />
          <span style={{ fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>
            Join the Waitlist
          </span>
          <div style={{ width: "40px", height: "1px", background: "rgba(255,255,255,0.4)" }} />
        </motion.div>

        <div style={{ marginBottom: "24px", overflow: "hidden" }}>
          {["Ready to Cut Through", "the Nutrition Noise?"].map((line, i) => (
            <motion.div
              key={i}
              initial={{ y: "110%", opacity: 0 }}
              animate={inView ? { y: "0%", opacity: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "var(--font-heading)", fontWeight: 800,
                fontSize: "clamp(36px, 6vw, 80px)",
                lineHeight: 1.05, letterSpacing: "-2px",
                color: i === 1 ? "var(--orange)" : "#fff",
              }}
            >
              {line}
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ fontFamily: "var(--font-body)", fontSize: "18px", lineHeight: 1.65, color: "rgba(255,255,255,0.75)", marginBottom: "48px" }}
        >
          Get trusted, evidence-based nutrition information from an experienced Registered Dietitian.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {done ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                display: "inline-flex", flexDirection: "column", alignItems: "center", gap: "12px",
                padding: "28px 40px", borderRadius: "20px",
                background: "rgba(255,255,255,0.08)", backdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "var(--terracotta)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10l4 4 8-8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <p style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "18px", color: "#fff" }}>You're on the waitlist!</p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "rgba(255,255,255,0.6)" }}>We'll be in touch when TrueDiet is ready.</p>
            </motion.div>
          ) : (
            <form
              onSubmit={e => { e.preventDefault(); if (email) setDone(true); }}
              style={{ display: "flex", gap: "12px", maxWidth: "520px", margin: "0 auto" }}
              className="cta-form"
            >
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                style={{
                  flex: 1, padding: "16px 20px", borderRadius: "100px",
                  border: "1px solid rgba(255,255,255,0.2)",
                  background: "rgba(255,255,255,0.1)", backdropFilter: "blur(12px)",
                  fontFamily: "var(--font-body)", fontSize: "15px", color: "#fff", outline: "none",
                  transition: "border-color 0.2s",
                }}
                onFocus={e => (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.45)"}
                onBlur={e => (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)"}
              />
              <GlowingEffect glowColor="var(--orange)">
                <MovingBorder duration={2200}>
                  <button
                    type="submit"
                    style={{
                      padding: "16px 28px", borderRadius: "100px", border: "none",
                      background: "transparent",
                      fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: 600,
                      color: "#fff", cursor: "none", whiteSpace: "nowrap",
                    }}
                  >
                    Join the TrueDiet Waitlist
                  </button>
                </MovingBorder>
              </GlowingEffect>
            </form>
          )}
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{ marginTop: "40px", display: "flex", flexDirection: "column", alignItems: "center", gap: "14px" }}
        >
          <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>
            Follow TrueDiet
          </p>
          <SocialLinks variant="dark" iconSize={18} />
        </motion.div>
      </div>

      <style>{`
        input::placeholder { color: rgba(255,255,255,0.4); }
        @media (max-width: 580px) { .cta-form { flex-direction: column !important; } }
      `}</style>
    </section>
  );
}
