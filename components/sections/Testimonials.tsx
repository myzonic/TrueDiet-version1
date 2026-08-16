"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { LampContainer } from "@/components/ui/lamp";
import { Carousel } from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "Maureen completely changed how I think about food. After years of yo-yo dieting and following trends, she gave me a framework grounded in real science. I finally feel in control without obsessing over every meal.",
    name: "Sarah K.",
    designation: "TrueDiet Client",
  },
  {
    quote: "I was sceptical of another nutrition 'expert', but Maureen is the real thing. No supplements to sell, no miracle plans. Just honest, evidence-based guidance that actually fits my life. Completely refreshing.",
    name: "James R.",
    designation: "TrueDiet Client",
  },
  {
    quote: "As someone managing Type 2 diabetes, finding reliable nutrition information felt impossible. Maureen's Medical Nutrition Therapy approach gave me practical tools that my doctor actually supports.",
    name: "Linda M.",
    designation: "TrueDiet Client",
  },
  {
    quote: "I've followed dozens of influencers for nutrition advice. None of them have Maureen's depth of knowledge. She cuts through the noise and explains the science in a way that is genuinely understandable.",
    name: "Priya S.",
    designation: "TrueDiet Client",
  },
];

function TestimonialCard({ quote, name, designation }: { quote: string; name: string; designation: string }) {
  return (
    <div style={{
      background: "var(--off-white)",
      borderRadius: "20px",
      padding: "32px 28px",
      border: "1px solid var(--border)",
      minHeight: "240px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}>
      <div style={{
        fontFamily: "Georgia, serif",
        fontSize: "48px",
        lineHeight: 1,
        color: "var(--orange)",
        marginBottom: "12px",
      }}>"</div>
      <p style={{
        fontFamily: "var(--font-body)",
        fontSize: "15px",
        lineHeight: 1.7,
        color: "var(--charcoal)",
        flex: 1,
        fontStyle: "italic",
      }}>
        {quote}
      </p>
      <div style={{ marginTop: "20px", borderTop: "1px solid var(--border)", paddingTop: "16px" }}>
        <p style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "14px", color: "var(--charcoal-deep)" }}>{name}</p>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "var(--gray-muted)", marginTop: "2px" }}>{designation}</p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section style={{ background: "#fff", overflow: "hidden" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 48px 96px" }}>
        <LampContainer>
          <div ref={ref} style={{ textAlign: "center", paddingTop: "32px", paddingBottom: "64px" }}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", marginBottom: "20px" }}
            >
              <div style={{ width: "28px", height: "1px", background: "var(--terracotta)" }} />
              <span style={{ fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--terracotta)" }}>
                Client Stories
              </span>
              <div style={{ width: "28px", height: "1px", background: "var(--terracotta)" }} />
            </motion.div>

            <div style={{ overflow: "hidden" }}>
              {["What Clients Say", "About TrueDiet"].map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ y: "110%" }}
                  animate={inView ? { y: "0%" } : {}}
                  transition={{ duration: 0.8, delay: 0.25 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    fontFamily: "var(--font-heading)", fontWeight: 800,
                    fontSize: "clamp(36px, 5vw, 68px)", lineHeight: 1.0,
                    letterSpacing: "-2px",
                    color: i === 1 ? "var(--orange)" : "var(--charcoal-deep)",
                    display: "block",
                  }}
                >
                  {line}
                </motion.div>
              ))}
            </div>
          </div>
        </LampContainer>

        {/* Desktop: AnimatedTestimonials */}
        <motion.div
          className="testimonials-desktop"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <AnimatedTestimonials testimonials={testimonials} />
        </motion.div>

        {/* Mobile: Swipeable Carousel */}
        <motion.div
          className="testimonials-mobile"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Carousel autoplay interval={5000}>
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </Carousel>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          section > div { padding: 0 24px 64px !important; }
        }
        .testimonials-desktop { display: block; }
        .testimonials-mobile { display: none; }
        @media (max-width: 768px) {
          .testimonials-desktop { display: none !important; }
          .testimonials-mobile { display: block !important; }
        }
      `}</style>
    </section>
  );
}
