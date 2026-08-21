"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import NutritionTabs from "@/components/NutritionTabs";
import Footer from "@/components/sections/Footer";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export default function NutritionEducationPage() {
  const topics = [
    {
      title: "Calories & Energy Balance",
      desc: "Understand what calories actually mean, how energy balance works, and why nutrition is about more than simply counting numbers.",
      cta: "Learn the science behind energy, metabolism, and sustainable nutrition.",
      image: "/images/nutrition/Calories.jpg",
    },
    {
      title: "Macronutrients",
      desc: "Protein. Carbohydrates. Fat.",
      cta: "Learn what each macronutrient does, why your body needs them, and how to think about them without unnecessary complexity.",
      image: "/images/nutrition/Macronutrients.jpg",
    },
    {
      title: "Food Labels",
      desc: "Marketing can make food packaging confusing.",
      cta: "Learn how to read nutrition labels, understand serving sizes, evaluate ingredients, and make more informed choices at the grocery store.",
      image: "/images/nutrition/Food Labels.jpg",
    },
    {
      title: "Mindful Eating",
      desc: "Develop a healthier relationship with food and your body.",
      cta: "Learn to recognize hunger and fullness cues while developing a healthier, more sustainable relationship with food.",
      image: "/images/nutrition/Mindful Eating.jpg",
    },
    {
      title: "Nutrition Trends",
      desc: "Every week brings another nutrition trend.",
      cta: "TrueDiet separates what is supported by evidence from what is simply popular online.",
      image: "/images/nutrition/Nutrition Trends.jpg",
    },
    {
      title: "Nutrition Misinformation",
      desc: "Navigate conflicting claims and unreliable sources.",
      cta: "Learn how to identify questionable claims, recognize misleading nutrition advice, and find credible sources of information.",
      image: "/images/nutrition/Nutrition Misinformation.jpg",
    },
    {
      title: "Peptides & Supplements",
      desc: "Understand the evidence behind popular supplements.",
      cta: "Understand what current evidence says about supplements and emerging nutrition topics.",
      image: "/images/nutrition/Peptides & Supplements.jpg",
    },
  ];

  const qaItems = [
    { q: "Are carbohydrates really bad for you?", a: "Carbohydrates are an important source of energy, but the type, amount, and overall dietary pattern matter." },
    { q: "Do I need to avoid processed foods?", a: "Food processing exists on a spectrum. Understanding the difference between different types of processed foods can be more useful than labeling every processed food as unhealthy." },
    { q: "Do I need supplements?", a: "Supplements can have a role in certain situations, but more isn't automatically better. Understanding individual needs and the available evidence matters." },
    { q: "Is \"clean eating\" actually healthier?", a: "Healthy eating doesn't require perfection or fear of individual ingredients. A sustainable overall dietary pattern matters more than chasing a perfect food list." },
    { q: "Are nutrition trends based on science?", a: "Some trends may have evidence behind them. Others may rely primarily on anecdotes, marketing, or selective interpretation of research." },
    { q: "How can I tell whether a nutrition claim is credible?", a: "Look beyond the person making the claim. Consider the source, quality of evidence, research design, consistency of findings, and whether the claim goes beyond what the evidence supports." },
  ];

  const approachSteps = [
    { num: "01", step: "Ask the Question", desc: "Start with the nutrition question you're actually trying to answer." },
    { num: "02", step: "Examine the Evidence", desc: "Look beyond headlines, influencers, and marketing." },
    { num: "03", step: "Understand the Science", desc: "Translate complicated research into understandable information." },
    { num: "04", step: "Apply It to Real Life", desc: "Turn knowledge into practical decisions that work for you." },
  ];

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Education"
          title="Nutrition Without the Noise"
          subtitle="Real Nutrition. Real Science. Real Understanding."
        />

        {/* Introduction — text left, bullets right */}
        <section style={{ background: "var(--white)", padding: "clamp(60px, 10vw, 120px) clamp(16px, 5vw, 64px)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div className="intro-grid" style={{
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(32px, 7vw, 96px)", alignItems: "center",
            }}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                  <div style={{ width: "24px", height: "1px", background: "var(--orange)" }} />
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--orange)" }}>
                    Our Approach
                  </span>
                </div>
                <h2 style={{
                  fontFamily: "var(--font-heading)", fontWeight: 800,
                  fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.1,
                  letterSpacing: "-1px", color: "var(--charcoal-deep)", marginBottom: "24px",
                }}>
                  Nutrition Shouldn't Be Complicated
                </h2>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(15px, 2vw, 18px)", lineHeight: 1.75, color: "var(--charcoal)", marginBottom: "16px" }}>
                  You shouldn't need to become a nutrition scientist to understand what you're eating.
                </p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(15px, 2vw, 18px)", lineHeight: 1.75, color: "var(--charcoal)" }}>
                  TrueDiet takes complex nutrition topics and breaks them down into clear, practical information grounded in evidence.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div style={{
                  background: "var(--off-white)", borderRadius: "20px", padding: "clamp(24px, 4vw, 40px)",
                  border: "1px solid var(--border)",
                }}>
                  <p style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "15px", color: "var(--charcoal-deep)", marginBottom: "20px" }}>
                    What you can expect from TrueDiet:
                  </p>
                  {[
                    "No unnecessary jargon.",
                    "No miracle claims.",
                    "No fear-based nutrition.",
                    "Just credible information you can understand and use.",
                  ].map((item, i) => (
                    <div key={i} style={{
                      display: "flex", alignItems: "flex-start", gap: "14px", marginBottom: i < 3 ? "16px" : "0",
                    }}>
                      <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "rgba(240,128,0,0.12)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", marginTop: "2px" }}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="var(--orange)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(14px, 1.8vw, 16px)", lineHeight: 1.65, color: "var(--charcoal)" }}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Topics with Tabs */}
        <section style={{ background: "var(--off-white)", padding: "clamp(60px, 10vw, 120px) clamp(16px, 5vw, 64px)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div style={{ width: "24px", height: "1px", background: "var(--orange)" }} />
              <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--orange)" }}>
                Topic Library
              </span>
            </div>
            <h2 style={{
              fontFamily: "var(--font-heading)", fontWeight: 800,
              fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.1,
              letterSpacing: "-1px", color: "var(--charcoal-deep)", marginBottom: "clamp(32px, 6vw, 56px)",
            }}>
              Explore Nutrition Topics
            </h2>
            <NutritionTabs topics={topics.map((t, i) => ({ id: String(i), ...t }))} />
          </div>
        </section>

        {/* Philosophy cards — numbered */}
        <section style={{ background: "var(--white)", padding: "clamp(60px, 10vw, 120px) clamp(16px, 5vw, 64px)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "clamp(40px, 7vw, 72px)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "16px" }}>
                <div style={{ width: "24px", height: "1px", background: "var(--orange)" }} />
                <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--orange)" }}>
                  Our Method
                </span>
                <div style={{ width: "24px", height: "1px", background: "var(--orange)" }} />
              </div>
              <h2 style={{
                fontFamily: "var(--font-heading)", fontWeight: 800,
                fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.1,
                letterSpacing: "-1px", color: "var(--charcoal-deep)",
              }}>
                The TrueDiet Approach
              </h2>
            </div>

            <div className="approach-grid" style={{
              display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "clamp(16px, 3vw, 24px)",
            }}>
              {approachSteps.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  style={{
                    background: "var(--off-white)", padding: "clamp(24px, 4vw, 36px)", borderRadius: "20px",
                    border: "1px solid var(--border)",
                  }}
                >
                  <p style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(32px, 4vw, 44px)", color: "var(--orange)", marginBottom: "16px", lineHeight: 1 }}>
                    {item.num}
                  </p>
                  <h4 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(15px, 2vw, 18px)", color: "var(--charcoal-deep)", marginBottom: "10px" }}>
                    {item.step}
                  </h4>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(13px, 1.6vw, 15px)", lineHeight: 1.65, color: "var(--gray-muted)" }}>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Questions worth asking */}
        <section style={{ background: "var(--off-white)", padding: "clamp(60px, 10vw, 120px) clamp(16px, 5vw, 64px)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div style={{ width: "24px", height: "1px", background: "var(--orange)" }} />
              <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--orange)" }}>
                Let's Look Beyond the Headlines
              </span>
            </div>
            <h2 style={{
              fontFamily: "var(--font-heading)", fontWeight: 800,
              fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.1,
              letterSpacing: "-1px", color: "var(--charcoal-deep)", marginBottom: "clamp(32px, 6vw, 56px)",
            }}>
              Nutrition Questions Worth Asking
            </h2>

            <div className="qa-grid" style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "clamp(16px, 3vw, 24px)",
            }}>
              {qaItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  style={{
                    background: "var(--white)", padding: "clamp(20px, 3vw, 28px)", borderRadius: "16px",
                    border: "1px solid var(--border)",
                  }}
                >
                  <h4 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(14px, 1.8vw, 16px)", color: "var(--charcoal-deep)", marginBottom: "12px" }}>
                    {item.q}
                  </h4>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(13px, 1.6vw, 15px)", lineHeight: 1.7, color: "var(--gray-muted)" }}>
                    {item.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Dark CTA */}
        <section style={{ background: "var(--charcoal-deep)", padding: "clamp(60px, 10vw, 120px) clamp(16px, 5vw, 64px)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", textAlign: "center" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 style={{
                fontFamily: "var(--font-heading)", fontWeight: 800,
                fontSize: "clamp(28px, 4.5vw, 56px)", lineHeight: 1.1,
                letterSpacing: "-1px", color: "#ffffff", marginBottom: "20px",
              }}>
                Have a Nutrition Question?
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(15px, 2vw, 18px)", lineHeight: 1.7, color: "rgba(255,255,255,0.6)", marginBottom: "40px", maxWidth: "520px", margin: "0 auto 40px" }}>
                Don't let another social media trend decide what you believe. Get in touch with us.
              </p>
              <ShimmerButton type="button" onClick={() => window.location.href = "/contact"}>
                Contact Us
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M1 6.5h11M7 2.5l4.5 4-4.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </ShimmerButton>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .intro-grid { grid-template-columns: 1fr !important; }
          .approach-grid { grid-template-columns: 1fr 1fr !important; }
          .qa-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .approach-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
