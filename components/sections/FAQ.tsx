"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What makes TrueDiet different from other nutrition apps?",
    a: "TrueDiet is built by a Registered Dietitian with 23 years of clinical experience — not by marketers or influencers. Every piece of information is evidence-based, peer-reviewed, and free from supplement sponsorships or affiliate incentives. You get the truth about nutrition, not what's trending.",
  },
  {
    q: "Do I need to follow a specific diet to benefit from TrueDiet?",
    a: "Absolutely not. TrueDiet is not about pushing any single dietary approach. Whether you eat meat, follow a plant-based diet, or anything in between, the goal is to help you understand nutrition science so you can make informed choices that work for your life.",
  },
  {
    q: "Are peptides and supplements worth taking?",
    a: "It depends entirely on the individual and the specific supplement. Many supplements are unnecessary for people who eat a varied diet, while others have genuine evidence behind them. TrueDiet reviews the actual science — not what supplement companies want you to believe.",
  },
  {
    q: "How do I know if nutrition information online is reliable?",
    a: "Look for credentials (Registered Dietitian or PhD in nutrition), primary source citations, and absence of product promotion. If a claim sounds too good to be true — 'lose 10kg in a week' or 'this one food cures everything' — it almost certainly is. TrueDiet teaches you to critically evaluate what you read.",
  },
  {
    q: "What is Medical Nutrition Therapy (MNT)?",
    a: "Medical Nutrition Therapy is a clinical approach where a Registered Dietitian uses nutritional assessment and evidence-based interventions to treat or manage specific health conditions such as diabetes, cardiovascular disease, kidney disease, and eating disorders. It is a recognised, effective medical treatment.",
  },
  {
    q: "When will the TrueDiet app be available?",
    a: "The TrueDiet app is currently in development. Join the waitlist to be the first to know when it launches. Early waitlist members will receive priority access and exclusive launch benefits.",
  },
];

function FAQItem({ item, index, isOpen, onToggle }: {
  item: typeof faqs[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      style={{ borderBottom: "1px solid var(--border)" }}
    >
      <button
        onClick={onToggle}
        style={{
          width: "100%", display: "flex", alignItems: "center",
          justifyContent: "space-between", gap: "24px",
          padding: "28px 0", background: "none", border: "none",
          cursor: "pointer", textAlign: "left",
        }}
      >
        <span style={{
          fontFamily: "var(--font-heading)", fontWeight: 700,
          fontSize: "clamp(15px, 1.6vw, 18px)",
          color: isOpen ? "var(--charcoal-deep)" : "var(--charcoal)",
          lineHeight: 1.35, transition: "color 0.2s",
          flex: 1,
        }}>
          {item.q}
        </span>

        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{
            width: "36px", height: "36px", borderRadius: "50%", flexShrink: 0,
            background: isOpen ? "var(--charcoal-deep)" : "var(--off-white)",
            border: `1px solid ${isOpen ? "var(--charcoal-deep)" : "var(--border)"}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "background 0.25s, border-color 0.25s",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 2v10M2 7h10" stroke={isOpen ? "#fff" : "var(--charcoal-deep)"} strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "15px",
              lineHeight: 1.75, color: "var(--charcoal)",
              paddingBottom: "28px",
              borderLeft: "2px solid var(--terracotta)",
              paddingLeft: "20px",
              maxWidth: "720px",
            }}>
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" style={{ background: "var(--off-white)", overflow: "hidden" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "96px 48px" }}>

        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1.6fr",
          gap: "80px", alignItems: "start",
        }} className="faq-grid">

          {/* Left — heading */}
          <div ref={ref} style={{ position: "sticky", top: "120px" }}>
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
                Common Questions
              </span>
            </motion.div>

            <div style={{ overflow: "hidden" }}>
              {["Your", "Nutrition", "Questions,", "Answered."].map((word, i) => (
                <motion.div
                  key={word}
                  initial={{ y: "110%" }}
                  animate={inView ? { y: "0%" } : {}}
                  transition={{ duration: 0.75, delay: 0.08 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    fontFamily: "var(--font-heading)", fontWeight: 800,
                    fontSize: "clamp(36px, 4vw, 56px)", lineHeight: 1.0,
                    letterSpacing: "-1.5px",
                    color: i === 2 ? "var(--orange)" : "var(--charcoal-deep)",
                    display: "block",
                  }}
                >
                  {word}
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
              style={{
                fontFamily: "var(--font-body)", fontSize: "15px",
                lineHeight: 1.7, color: "var(--gray-muted)",
                marginTop: "24px",
              }}
            >
              Evidence-based answers to the questions Maureen hears most from clients.
            </motion.p>
          </div>

          {/* Right — accordion */}
          <div style={{ borderTop: "1px solid var(--border)" }}>
            {faqs.map((item, i) => (
              <FAQItem
                key={i}
                item={item}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .faq-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .faq-grid > div:first-child { position: static !important; }
        }
      `}</style>
    </section>
  );
}
