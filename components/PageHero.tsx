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
    <section style={{ background: "var(--white)", overflow: "hidden", paddingTop: "120px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "80px 48px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {eyebrow && (
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
              <div style={{ width: "28px", height: "1px", background: "var(--terracotta)" }} />
              <span style={{
                fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 600,
                letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--terracotta)",
              }}>
                {eyebrow}
              </span>
            </div>
          )}

          <h1 style={{
            fontFamily: "var(--font-heading)", fontWeight: 800,
            fontSize: "clamp(40px, 5.5vw, 80px)", lineHeight: 1.0,
            letterSpacing: "-2px", color: "var(--charcoal-deep)",
            marginBottom: subtitle ? "24px" : "0",
          }}>
            {title}
          </h1>

          {subtitle && (
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "clamp(16px, 2vw, 20px)",
              lineHeight: 1.7, color: "var(--charcoal)",
              maxWidth: "700px",
            }}>
              {subtitle}
            </p>
          )}
        </motion.div>

        {children}
      </div>

      <style>{`
        @media (max-width: 768px) {
          section { padding-top: 100px !important; }
          div { padding: 60px 24px !important; }
        }
      `}</style>
    </section>
  );
}
