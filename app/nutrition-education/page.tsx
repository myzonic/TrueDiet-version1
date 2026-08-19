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
      image: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?w=500&h=400&auto=compress&cs=tinysrgb",
    },
    {
      title: "Macronutrients",
      desc: "Protein. Carbohydrates. Fat.",
      cta: "Learn what each macronutrient does, why your body needs them, and how to think about them without unnecessary complexity.",
      image: "https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?w=500&h=400&auto=compress&cs=tinysrgb",
    },
    {
      title: "Food Labels",
      desc: "Marketing can make food packaging confusing.",
      cta: "Learn how to read nutrition labels, understand serving sizes, evaluate ingredients, and make more informed choices at the grocery store.",
      image: "https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?w=500&h=400&auto=compress&cs=tinysrgb",
    },
    {
      title: "Mindful Eating",
      desc: "Develop a healthier relationship with food and your body.",
      cta: "Learn to recognize hunger and fullness cues while developing a healthier, more sustainable relationship with food.",
      image: "https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?w=500&h=400&auto=compress&cs=tinysrgb",
    },
    {
      title: "Nutrition Trends",
      desc: "Every week brings another nutrition trend.",
      cta: "TrueDiet separates what is supported by evidence from what is simply popular online.",
      image: "https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?w=500&h=400&auto=compress&cs=tinysrgb",
    },
    {
      title: "Nutrition Misinformation",
      desc: "Navigate conflicting claims and unreliable sources.",
      cta: "Learn how to identify questionable claims, recognize misleading nutrition advice, and find credible sources of information.",
      image: "https://images.pexels.com/photos/7974/pexels-photo.jpg?w=500&h=400&auto=compress&cs=tinysrgb",
    },
    {
      title: "Peptides & Supplements",
      desc: "Understand the evidence behind popular supplements.",
      cta: "Understand what current evidence says about supplements and emerging nutrition topics.",
      image: "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?w=500&h=400&auto=compress&cs=tinysrgb",
    },
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

        {/* Introduction */}
        <section style={{ background: "var(--white)", padding: "80px 48px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: "80px" }}
            >
              <h2 style={{
                fontFamily: "var(--font-heading)", fontWeight: 800,
                fontSize: "clamp(32px, 4.5vw, 56px)", lineHeight: 1.1,
                letterSpacing: "-1.5px", color: "var(--charcoal-deep)",
                marginBottom: "32px",
              }}>
                Nutrition Shouldn't Be Complicated
              </h2>
              <div style={{ display: "grid", gap: "24px", maxWidth: "700px" }}>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: "18px", lineHeight: 1.75,
                  color: "var(--charcoal)",
                }}>
                  You shouldn't need to become a nutrition scientist to understand what you're eating.
                </p>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: "18px", lineHeight: 1.75,
                  color: "var(--charcoal)",
                }}>
                  TrueDiet takes complex nutrition topics and breaks them down into clear, practical information grounded in evidence.
                </p>
                <div style={{
                  background: "rgba(240,128,0,0.05)", borderRadius: "12px", padding: "24px",
                  borderLeft: "4px solid var(--orange)",
                }}>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {["No unnecessary jargon.", "No miracle claims.", "No fear based nutrition."].map((item, i) => (
                      <li key={i} style={{
                        fontFamily: "var(--font-body)", fontSize: "15px", lineHeight: 1.8,
                        color: "var(--charcoal)", paddingLeft: "24px", position: "relative",
                      }}>
                        <span style={{ position: "absolute", left: 0, color: "var(--orange)", fontWeight: 700 }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "15px", lineHeight: 1.8,
                    color: "var(--charcoal)", marginTop: "12px", paddingLeft: "24px", position: "relative",
                  }}>
                    <span style={{ position: "absolute", left: 0, color: "var(--orange)", fontWeight: 700 }}>✓</span>
                    Just credible information you can understand and use.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Topics with Tabs */}
            <div style={{ marginBottom: "80px" }}>
              <h3 style={{
                fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "32px",
                color: "var(--charcoal-deep)", marginBottom: "48px",
              }}>
                Explore Nutrition Topics
              </h3>
              <NutritionTabs topics={topics.map((t, i) => ({ id: String(i), ...t }))} />
            </div>

            {/* Approach */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: "60px" }}
            >
              <h3 style={{
                fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "32px",
                color: "var(--charcoal-deep)", marginBottom: "48px",
              }}>
                TrueDiet Approach
              </h3>
              <div style={{
                display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px",
              }}>
                {[
                  { num: "01", step: "Ask the Question", desc: "Start with the nutrition question you're actually trying to answer." },
                  { num: "02", step: "Examine the Evidence", desc: "Look beyond headlines, influencers, and marketing." },
                  { num: "03", step: "Understand the Science", desc: "Translate complicated research into understandable information." },
                  { num: "04", step: "Apply It to Real Life", desc: "Turn knowledge into practical decisions that work for you." },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    style={{
                      background: "var(--white)", padding: "32px", borderRadius: "16px",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <p style={{
                      fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "36px",
                      color: "var(--orange)", marginBottom: "12px",
                    }}>
                      {item.num}
                    </p>
                    <h4 style={{
                      fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "18px",
                      color: "var(--charcoal-deep)", marginBottom: "12px",
                    }}>
                      {item.step}
                    </h4>
                    <p style={{
                      fontFamily: "var(--font-body)", fontSize: "14px", lineHeight: 1.6,
                      color: "var(--gray-muted)",
                    }}>
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                textAlign: "center", padding: "60px 0",
                borderTop: "1px solid var(--border)",
              }}
            >
              <h3 style={{
                fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "24px",
                color: "var(--charcoal-deep)", marginBottom: "24px",
              }}>
                Have a Nutrition Question?
              </h3>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.6,
                color: "var(--gray-muted)", marginBottom: "32px",
              }}>
                Don't let another social media trend decide what you believe.
              </p>
              <ShimmerButton type="button" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
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
    </>
  );
}
