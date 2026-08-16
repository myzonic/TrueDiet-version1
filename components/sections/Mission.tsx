"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LampContainer } from "@/components/ui/lamp";

gsap.registerPlugin(ScrollTrigger);

const truths = [
  { num: "01", text: "Science over trends." },
  { num: "02", text: "Evidence over influencers." },
  { num: "03", text: "Facts over misinformation." },
  { num: "04", text: "Realistic nutrition over quick fixes." },
];

export default function Mission() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  useGSAP(() => {
    if (!imageWrapRef.current || !headlineRef.current) return;

    // Clip-path reveal on image
    gsap.fromTo(imageWrapRef.current,
      { clipPath: "inset(0 100% 0 0)" },
      {
        clipPath: "inset(0 0% 0 0)",
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: imageWrapRef.current,
          start: "top 80%",
        },
      }
    );

    // Headline word-by-word stagger
    const words = headlineRef.current.querySelectorAll<HTMLSpanElement>(".word");
    gsap.fromTo(words,
      { yPercent: 110, opacity: 0 },
      {
        yPercent: 0, opacity: 1,
        stagger: 0.07,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headlineRef.current,
          start: "top 80%",
        },
      }
    );
  }, { scope: sectionRef });

  const headlineText = "Cut Through\nthe Noise.";

  return (
    <section id="mission" ref={sectionRef} style={{ background: "var(--off-white)", overflow: "hidden" }}>

      {/* Full-width image reveal */}
      <div style={{ position: "relative", height: "60vh", overflow: "hidden" }}>
        <div ref={imageWrapRef} style={{ position: "absolute", inset: 0 }}>
          <motion.img
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1600&q=90&auto=format"
            alt="Wholesome nutrition"
            style={{ width: "100%", height: "120%", objectFit: "cover", y: imageY } as any}
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(0deg, var(--off-white) 0%, rgba(248,248,245,0.25) 60%, transparent 100%)",
          }} />
        </div>

        {/* Overlay headline */}
        <div style={{ position: "absolute", bottom: "32px", left: "48px", right: "48px", zIndex: 2 }}>
          <h2
            ref={headlineRef}
            style={{
              fontFamily: "var(--font-heading)", fontWeight: 800,
              fontSize: "clamp(48px, 8vw, 120px)",
              lineHeight: 0.95, letterSpacing: "-3px",
              color: "var(--charcoal-deep)", mixBlendMode: "multiply",
              overflow: "hidden",
            }}
          >
            {headlineText.split("\n").map((line, li) => (
              <span key={li} style={{ display: "block", overflow: "hidden" }}>
                {line.split(" ").map((word, wi) => (
                  <span key={wi} className="word" style={{ display: "inline-block", marginRight: "0.25em", opacity: 0 }}>
                    {word}
                  </span>
                ))}
              </span>
            ))}
          </h2>
        </div>
      </div>

      {/* Lamp header */}
      <LampContainer>
        <div style={{ textAlign: "center", padding: "0 24px 48px" }}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", marginBottom: "16px" }}
          >
            <div style={{ width: "28px", height: "1px", background: "var(--terracotta)" }} />
            <span style={{ fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--terracotta)" }}>Our Mission</span>
            <div style={{ width: "28px", height: "1px", background: "var(--terracotta)" }} />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            style={{ fontFamily: "var(--font-body)", fontSize: "clamp(14px, 2vw, 17px)", color: "var(--gray-muted)", maxWidth: "480px", margin: "0 auto" }}
          >
            Science-backed guidance for every nutrition question.
          </motion.p>
        </div>
      </LampContainer>

      {/* Content below */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "40px 48px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }} className="mission-content">

          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ fontFamily: "var(--font-body)", fontSize: "18px", lineHeight: 1.75, color: "var(--charcoal)", marginBottom: "40px" }}
            >
              People are overwhelmed by conflicting nutrition information. Social media trends, influencers, and claims that make it impossible to know what is actually true. TrueDiet was created to be a safe, credible place where the answer to nutrition questions is always grounded in science.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "6px 16px 6px 6px", borderRadius: "100px",
                background: "var(--white)", border: "1px solid var(--border)",
              }}
            >
              <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "var(--charcoal-deep)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8M7 3l3 3-3 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <a href="#nutrition" style={{ fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 600, color: "var(--charcoal-deep)", textDecoration: "none" }}>
                Explore TrueDiet
              </a>
            </motion.div>
          </div>

          {/* Right — numbered list with GSAP hover lines */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {truths.map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, x: 24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.25 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ x: 8 } as any}
                style={{
                  display: "flex", alignItems: "center", gap: "24px",
                  padding: "24px 0",
                  borderBottom: i < truths.length - 1 ? "1px solid var(--border)" : "none",
                  cursor: "default",
                }}
              >
                <span style={{
                  fontFamily: "var(--font-heading)", fontWeight: 300, fontSize: "12px",
                  color: "var(--terracotta)", letterSpacing: "0.04em", flexShrink: 0,
                }}>
                  {item.num}
                </span>
                <span style={{
                  fontFamily: "var(--font-heading)", fontWeight: 700,
                  fontSize: "clamp(16px, 1.8vw, 22px)", color: "var(--charcoal-deep)", lineHeight: 1.2,
                }}>
                  {item.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .mission-content { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
