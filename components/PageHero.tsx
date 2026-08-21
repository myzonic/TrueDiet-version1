"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export default function PageHero({ eyebrow, title, subtitle, children }: PageHeroProps) {
  return (
    <section style={{
      background: "linear-gradient(135deg, var(--charcoal-deep) 0%, #003844 60%, #004d3a 100%)",
      overflow: "hidden",
      position: "relative",
      paddingTop: "clamp(100px, 18vw, 160px)",
      paddingBottom: "clamp(60px, 10vw, 120px)",
      paddingLeft: "clamp(16px, 5vw, 64px)",
      paddingRight: "clamp(16px, 5vw, 64px)",
    }}>
      {/* Decorative orbs */}
      <div style={{
        position: "absolute", top: "-20%", right: "-10%",
        width: "600px", height: "600px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(240,128,0,0.08) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "-30%", left: "10%",
        width: "400px", height: "400px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(96,144,0,0.07) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {eyebrow && (
            <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
              <div style={{ width: "24px", height: "1px", background: "var(--orange)" }} />
              <span style={{
                fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600,
                letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--orange)",
              }}>
                {eyebrow}
              </span>
            </div>
          )}

          <h1 style={{
            fontFamily: "var(--font-heading)", fontWeight: 800,
            fontSize: "clamp(32px, 6vw, 72px)", lineHeight: 1.05,
            letterSpacing: "-1.5px", color: "#ffffff",
            marginBottom: subtitle ? "24px" : "0",
            maxWidth: "860px",
          }}>
            {title}
          </h1>

          {subtitle && (
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "clamp(16px, 2.5vw, 22px)",
              lineHeight: 1.7, color: "rgba(255,255,255,0.72)",
              maxWidth: "600px",
            }}>
              {subtitle}
            </p>
          )}
        </motion.div>

        {children}
      </div>
    </section>
  );
}
