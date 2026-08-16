"use client";

import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const resources = [
  {
    category: "Meal Planning",
    title: "7-Day Anti-Inflammatory Reset",
    desc: "Evidence-based meal plan designed to reduce inflammation and restore energy naturally.",
    tag: "Guide",
    color: "var(--charcoal-deep)",
    accent: "var(--orange)",
    num: "01",
  },
  {
    category: "Label Reading",
    title: "Decode Any Nutrition Label in 60 Seconds",
    desc: "The exact framework Maureen uses with every client to cut through marketing noise.",
    tag: "Framework",
    color: "var(--terracotta)",
    accent: "#fff",
    num: "02",
  },
  {
    category: "Mindful Eating",
    title: "The Hunger–Fullness Scale",
    desc: "Rebuild your body's natural hunger signals, a cornerstone of sustainable nutrition.",
    tag: "Worksheet",
    color: "var(--off-white)",
    accent: "var(--charcoal-deep)",
    num: "03",
  },
  {
    category: "Myth Busting",
    title: "Top 12 Nutrition Myths, Debunked",
    desc: "From detox teas to clean eating, a Registered Dietitian's unfiltered take.",
    tag: "Article",
    color: "var(--blush)",
    accent: "var(--charcoal-deep)",
    num: "04",
  },
  {
    category: "Supplements",
    title: "What Your Body Actually Needs",
    desc: "A science-first breakdown of which supplements are worth considering and which to skip.",
    tag: "Deep Dive",
    color: "var(--charcoal-deep)",
    accent: "var(--terracotta)",
    num: "05",
  },
];

function ResourceCard({ r, index, inView }: { r: typeof resources[0]; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false);
  const isDark = r.color === "var(--charcoal-deep)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay: 0.08 + index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: "0 0 340px",
        height: "420px",
        borderRadius: "24px",
        background: r.color,
        border: isDark ? "none" : "1px solid var(--border)",
        padding: "40px 36px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",
        cursor: "default",
        scrollSnapAlign: "start",
      }}
    >
      {/* Large number watermark */}
      <div style={{
        position: "absolute", bottom: "-20px", right: "-10px",
        fontFamily: "var(--font-heading)", fontWeight: 800,
        fontSize: "160px", lineHeight: 1,
        color: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,80,96,0.05)",
        userSelect: "none", pointerEvents: "none",
      }}>
        {r.num}
      </div>

      {/* Hover glow */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{
          position: "absolute", inset: 0,
          background: isDark
            ? "radial-gradient(circle at 80% 20%, rgba(240,128,0,0.12) 0%, transparent 60%)"
            : "radial-gradient(circle at 80% 20%, rgba(0,80,96,0.06) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "28px" }}>
          <span style={{
            fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 700,
            letterSpacing: "0.14em", textTransform: "uppercase",
            color: isDark ? "rgba(255,255,255,0.4)" : "var(--gray-muted)",
          }}>
            {r.category}
          </span>
          <span style={{
            fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 600,
            letterSpacing: "0.1em", textTransform: "uppercase",
            padding: "4px 10px", borderRadius: "100px",
            background: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,80,96,0.08)",
            color: isDark ? "rgba(255,255,255,0.5)" : "var(--charcoal-deep)",
          }}>
            {r.tag}
          </span>
        </div>

        <h3 style={{
          fontFamily: "var(--font-heading)", fontWeight: 800,
          fontSize: "22px", lineHeight: 1.2, letterSpacing: "-0.5px",
          color: isDark ? "#fff" : "var(--charcoal-deep)",
          marginBottom: "16px",
        }}>
          {r.title}
        </h3>

        <p style={{
          fontFamily: "var(--font-body)", fontSize: "14px", lineHeight: 1.65,
          color: isDark ? "rgba(255,255,255,0.55)" : "var(--charcoal)",
        }}>
          {r.desc}
        </p>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{
          fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 600,
          color: isDark ? "rgba(255,255,255,0.35)" : "var(--gray-muted)",
          letterSpacing: "0.04em",
        }}>
          Coming in TrueDiet App
        </span>
        <motion.div
          animate={{
            x: hovered ? 5 : 0,
            color: hovered
              ? (isDark ? "var(--orange)" : "var(--charcoal-deep)")
              : (isDark ? "rgba(255,255,255,0.3)" : "var(--gray-muted)"),
          }}
          transition={{ duration: 0.2 }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 10h12M11 5.5L15.5 10 11 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function FutureContent() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const stripX = useTransform(scrollYProgress, [0, 1], ["0%", "-4%"]);

  return (
    <section id="resources" style={{ background: "var(--white)", overflow: "hidden" }}>
      <div ref={ref} style={{ maxWidth: "1280px", margin: "0 auto", padding: "96px 48px 0" }}>
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "flex-end", flexWrap: "wrap", gap: "32px",
          marginBottom: "56px",
        }}>
          <div style={{ flex: "1 1 400px" }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}
            >
              <div style={{ width: "28px", height: "1px", background: "var(--terracotta)" }} />
              <span style={{
                fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 600,
                letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--terracotta)",
              }}>
                Resources & Tools
              </span>
            </motion.div>

            <div style={{ overflow: "hidden" }}>
              {["Real Nutrition", "Resources,", "No Gimmicks."].map((line, i) => (
                <motion.div
                  key={line}
                  initial={{ y: "110%" }}
                  animate={inView ? { y: "0%" } : {}}
                  transition={{ duration: 0.85, delay: 0.08 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    fontFamily: "var(--font-heading)", fontWeight: 800,
                    fontSize: "clamp(40px, 5vw, 68px)", lineHeight: 1.0,
                    letterSpacing: "-2px",
                    color: i === 2 ? "var(--orange)" : "var(--charcoal-deep)",
                    display: "block",
                  }}
                >
                  {line}
                </motion.div>
              ))}
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            style={{
              flex: "0 1 300px",
              fontFamily: "var(--font-body)", fontSize: "16px",
              lineHeight: 1.7, color: "var(--charcoal)",
            }}
          >
            Practical guides, frameworks and deep dives built on 23 years of clinical experience, launching with the TrueDiet app.
          </motion.p>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <motion.div style={{ x: stripX }}>
        <div style={{
          display: "flex", gap: "20px",
          padding: "8px 48px 96px",
          overflowX: "auto", scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          msOverflowStyle: "none", scrollbarWidth: "none",
        }} className="resource-scroll">
          {resources.map((r, i) => (
            <ResourceCard key={r.num} r={r} index={i} inView={inView} />
          ))}

          {/* Final teaser card */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
              flex: "0 0 280px", height: "420px",
              borderRadius: "24px",
              background: "var(--off-white)",
              border: "2px dashed var(--border)",
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              gap: "16px", padding: "40px",
              textAlign: "center", scrollSnapAlign: "start",
            }}
          >
            <div style={{
              width: "56px", height: "56px", borderRadius: "50%",
              background: "rgba(0,80,96,0.08)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M11 4v14M4 11h14" stroke="var(--charcoal-deep)" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <p style={{
              fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "17px",
              color: "var(--charcoal-deep)", lineHeight: 1.3,
            }}>
              More resources dropping soon
            </p>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "13px",
              color: "var(--gray-muted)", lineHeight: 1.6,
            }}>
              Join the waitlist to be notified when new content launches.
            </p>
            <a
              href="#waitlist"
              style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 600,
                color: "var(--charcoal-deep)", textDecoration: "none",
                borderBottom: "1.5px solid var(--charcoal-deep)", paddingBottom: "1px",
              }}
            >
              Join Waitlist
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M1 5h8M6 2.5L8.5 5 6 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </motion.div>

      <style>{`
        .resource-scroll::-webkit-scrollbar { display: none; }
        @media (max-width: 768px) {
          .resource-scroll { padding-left: 24px !important; padding-right: 24px !important; }
        }
      `}</style>
    </section>
  );
}
