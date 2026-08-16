"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const topics = [
  { title: "Calories", tag: "Energy Balance", img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=700&q=85&auto=format", desc: "What calories actually mean for your body, without the obsession." },
  { title: "Macronutrients", tag: "Proteins · Carbs · Fats", img: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=700&q=85&auto=format", desc: "Why you need all three, and how to think about them simply." },
  { title: "Food Labels", tag: "Informed Shopping", img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=700&q=85&auto=format", desc: "Read nutrition labels accurately and make confident choices." },
  { title: "Mindful Eating", tag: "Relationship with Food", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=700&q=85&auto=format", desc: "Learning to listen to your body's real hunger and fullness signals." },
  { title: "Nutrition Trends", tag: "Fact vs. Fad", img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=700&q=85&auto=format", desc: "What the science says vs. what social media is promoting this week." },
  { title: "Misinformation", tag: "Critical Thinking", img: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=700&q=85&auto=format", desc: "Recognising false claims and finding credible nutrition science." },
  { title: "Peptides", tag: "Evidence Review", img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=700&q=85&auto=format", desc: "What the evidence actually says, critically evaluated." },
];

const headlineLines = ["Nutrition", "Shouldn't Be", "Complicated."];

function HeadlineLine({ text, delay }: { text: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <span ref={ref} style={{ display: "block", overflow: "hidden" }}>
      <motion.span
        initial={{ y: "110%" }}
        animate={inView ? { y: "0%" } : {}}
        transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
        style={{ display: "block" }}
      >
        {text}
      </motion.span>
    </span>
  );
}

function TopicCard({ topic, index }: { topic: typeof topics[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 56 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: "20px", overflow: "hidden",
        background: "var(--white)", border: "1px solid var(--border)",
        position: "relative", cursor: "default",
      }}
    >
      <div style={{ aspectRatio: "4/3", overflow: "hidden", position: "relative" }}>
        <motion.img
          src={topic.img}
          alt={topic.title}
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <motion.div
          animate={{ opacity: hovered ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          style={{
            position: "absolute", top: "14px", left: "14px",
            background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)",
            borderRadius: "100px", padding: "4px 12px",
          }}
        >
          <span style={{ fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--charcoal)" }}>
            {topic.tag}
          </span>
        </motion.div>
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          style={{
            position: "absolute", inset: 0,
            background: "rgba(0,80,96,0.82)",
            display: "flex", alignItems: "center", justifyContent: "center", padding: "24px",
          }}
        >
          <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", lineHeight: 1.6, color: "#fff", textAlign: "center" }}>
            {topic.desc}
          </p>
        </motion.div>
      </div>
      <div style={{ padding: "20px 22px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "17px", color: "var(--charcoal-deep)" }}>{topic.title}</h3>
        <motion.div
          animate={{ x: hovered ? 4 : 0, color: hovered ? "var(--orange)" : "var(--gray-muted)" }}
          transition={{ duration: 0.2 }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3 9h12M10 5l5 4-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function NutritionEducation() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="nutrition" style={{ background: "var(--off-white)", overflow: "hidden" }}>
      <div style={{ padding: "96px 48px 0", maxWidth: "1280px", margin: "0 auto" }}>
        <div ref={ref} style={{
          display: "flex", justifyContent: "space-between", alignItems: "flex-end",
          marginBottom: "64px", flexWrap: "wrap", gap: "32px",
        }}>
          <div style={{ flex: "1 1 460px" }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}
            >
              <div style={{ width: "28px", height: "1px", background: "var(--terracotta)" }} />
              <span style={{ fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--terracotta)" }}>
                Nutrition Education
              </span>
            </motion.div>
            <h2 style={{
              fontFamily: "var(--font-heading)", fontWeight: 800,
              fontSize: "clamp(40px, 5vw, 72px)", lineHeight: 1.0,
              letterSpacing: "-2px", color: "var(--charcoal-deep)",
            }}>
              {headlineLines.map((line, i) => (
                <HeadlineLine key={line} text={line} delay={0.1 + i * 0.1} />
              ))}
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ flex: "0 1 300px" }}
          >
            <p style={{ fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.7, color: "var(--charcoal)", marginBottom: "24px" }}>
              TrueDiet breaks down the nutrition topics that matter most, clearly, honestly, without the noise.
            </p>
            <a
              href="#nutrition"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 600,
                color: "var(--charcoal-deep)", textDecoration: "none",
                borderBottom: "1.5px solid currentColor", paddingBottom: "2px",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--terracotta)"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--charcoal-deep)"}
            >
              Explore Nutrition
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 6h10M7 2.5L10.5 6 7 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </motion.div>
        </div>
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 48px 96px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }} className="nutrition-grid">
          {topics.map((topic, i) => <TopicCard key={topic.title} topic={topic} index={i} />)}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .nutrition-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 600px) { .nutrition-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
