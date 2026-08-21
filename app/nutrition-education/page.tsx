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

            {/* How to Think About Nutrition */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: "80px" }}
            >
              <h3 style={{
                fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "32px",
                color: "var(--charcoal-deep)", marginBottom: "48px",
              }}>
                How to Think About Nutrition
              </h3>
              <h4 style={{
                fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "22px",
                color: "var(--charcoal-deep)", marginBottom: "24px",
              }}>
                Start With Questions, Not Trends
              </h4>
              <div style={{ maxWidth: "800px" }}>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.75,
                  color: "var(--charcoal)", marginBottom: "24px",
                }}>
                  Good nutrition education begins with curiosity.
                </p>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.75,
                  color: "var(--charcoal)", marginBottom: "24px",
                }}>
                  Instead of asking, "What diet should I follow?" start by asking better questions:
                </p>
                <ul style={{
                  fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.75,
                  color: "var(--charcoal)", listStyle: "none", paddingLeft: "0", marginBottom: "24px",
                }}>
                  {[
                    "What does the evidence actually say?",
                    "Why is this recommendation being made?",
                    "Does the research apply to everyone?",
                    "What are the potential benefits and limitations?",
                    "How does this information fit into real life?"
                  ].map((item, i) => (
                    <li key={i} style={{ marginBottom: "12px", paddingLeft: "24px", position: "relative" }}>
                      <span style={{ position: "absolute", left: "0", color: "var(--orange)", fontWeight: 700 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.75,
                  color: "var(--charcoal)", fontWeight: 600,
                }}>
                  Understanding how to ask better questions is one of the most useful nutrition skills you can develop.
                </p>
              </div>
            </motion.div>

            {/* Beyond the Nutrition Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: "80px" }}
            >
              <h3 style={{
                fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "32px",
                color: "var(--charcoal-deep)", marginBottom: "48px",
              }}>
                Beyond the Nutrition Headline
              </h3>
              <h4 style={{
                fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "22px",
                color: "var(--charcoal-deep)", marginBottom: "24px",
              }}>
                A Headline Is Not the Whole Story
              </h4>
              <div style={{ maxWidth: "800px" }}>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.75,
                  color: "var(--charcoal)", marginBottom: "24px",
                }}>
                  Nutrition research is often reduced to a headline, social media post, or short video.
                </p>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.75,
                  color: "var(--charcoal)", marginBottom: "24px",
                }}>
                  But scientific evidence requires context.
                </p>
                <div style={{
                  background: "rgba(240,128,0,0.05)", borderRadius: "12px", padding: "24px",
                  borderLeft: "4px solid var(--orange)", marginBottom: "24px",
                }}>
                  <ul style={{
                    fontFamily: "var(--font-body)", fontSize: "15px", lineHeight: 1.8,
                    color: "var(--charcoal)", listStyle: "none", paddingLeft: "0", margin: "0",
                  }}>
                    {[
                      "A study may receive attention online because it sounds surprising.",
                      "A food may suddenly become a \"superfood.\"",
                      "A supplement may be promoted as the next big breakthrough."
                    ].map((item, i) => (
                      <li key={i} style={{ marginBottom: i < 2 ? "12px" : "0", paddingLeft: "24px", position: "relative" }}>
                        <span style={{ position: "absolute", left: "0", color: "var(--orange)", fontWeight: 700 }}>●</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.75,
                  color: "var(--charcoal)", marginBottom: "24px",
                }}>
                  TrueDiet encourages you to pause before accepting the claim. Look at the evidence. Understand what was actually studied. Consider who participated. Look at the limitations. Then ask what the findings actually mean for everyday life.
                </p>
              </div>
            </motion.div>

            {/* Nutrition Questions Worth Asking */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: "80px" }}
            >
              <h3 style={{
                fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "32px",
                color: "var(--charcoal-deep)", marginBottom: "48px",
              }}>
                Nutrition Questions Worth Asking
              </h3>
              <p style={{
                fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "16px",
                color: "var(--orange)", marginBottom: "48px",
              }}>
                Let's Look Beyond the Headlines
              </p>
              <div style={{
                display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px",
              }}>
                {[
                  {
                    q: "Are carbohydrates really bad for you?",
                    a: "Carbohydrates are an important source of energy, but the type, amount, and overall dietary pattern matter."
                  },
                  {
                    q: "Do I need to avoid processed foods?",
                    a: "Food processing exists on a spectrum. Understanding the difference between different types of processed foods can be more useful than labeling every processed food as unhealthy."
                  },
                  {
                    q: "Do I need supplements?",
                    a: "Supplements can have a role in certain situations, but more isn't automatically better. Understanding individual needs and the available evidence matters."
                  },
                  {
                    q: "Is \"clean eating\" actually healthier?",
                    a: "Healthy eating doesn't require perfection or fear of individual ingredients. A sustainable overall dietary pattern matters more than chasing a perfect food list."
                  },
                  {
                    q: "Are nutrition trends based on science?",
                    a: "Some trends may have evidence behind them. Others may rely primarily on anecdotes, marketing, or selective interpretation of research."
                  },
                  {
                    q: "How can I tell whether a nutrition claim is credible?",
                    a: "Look beyond the person making the claim. Consider the source, quality of evidence, research design, consistency of findings, and whether the claim goes beyond what the evidence supports."
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    style={{
                      background: "var(--white)", padding: "24px", borderRadius: "16px",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <h4 style={{
                      fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "16px",
                      color: "var(--charcoal-deep)", marginBottom: "12px",
                    }}>
                      {item.q}
                    </h4>
                    <p style={{
                      fontFamily: "var(--font-body)", fontSize: "14px", lineHeight: 1.7,
                      color: "var(--gray-muted)",
                    }}>
                      {item.a}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Build Nutrition Confidence */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: "80px" }}
            >
              <h3 style={{
                fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "32px",
                color: "var(--charcoal-deep)", marginBottom: "48px",
              }}>
                Build Nutrition Confidence
              </h3>
              <h4 style={{
                fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "20px",
                color: "var(--charcoal-deep)", marginBottom: "32px",
              }}>
                The Goal Isn't to Memorize Every Nutrition Rule
              </h4>
              <div style={{ maxWidth: "900px", marginBottom: "40px" }}>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.75,
                  color: "var(--charcoal)", marginBottom: "24px",
                }}>
                  You don't need to know everything about nutrition to make informed choices. You need the right framework.
                </p>
                <div style={{
                  display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px",
                }}>
                  {[
                    { title: "Understand the basics", desc: "Know how calories, macronutrients, food labels, and eating behaviors fit together." },
                    { title: "Question the claim", desc: "Don't automatically accept information because it is popular, confidently presented, or repeated frequently." },
                    { title: "Look for evidence", desc: "Learn to distinguish scientific evidence from testimonials, anecdotes, and marketing." },
                    { title: "Consider your context", desc: "Nutrition recommendations should make sense within your individual circumstances." },
                    { title: "Apply what you learn", desc: "Knowledge becomes useful when it helps you make practical decisions in everyday life." },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      style={{
                        background: "var(--off-white)", padding: "24px", borderRadius: "12px", border: "1px solid var(--border)",
                      }}
                    >
                      <p style={{
                        fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "15px",
                        color: "var(--charcoal-deep)", marginBottom: "8px",
                      }}>
                        {item.title}
                      </p>
                      <p style={{
                        fontFamily: "var(--font-body)", fontSize: "13px", lineHeight: 1.6,
                        color: "var(--gray-muted)",
                      }}>
                        {item.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Nutrition Education Should Evolve */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                marginBottom: "80px", padding: "60px 48px",
                background: "linear-gradient(135deg, rgba(96,144,0,0.05), rgba(0,80,96,0.05))",
                borderRadius: "24px",
              }}
            >
              <h3 style={{
                fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "32px",
                color: "var(--charcoal-deep)", marginBottom: "48px",
              }}>
                Nutrition Education Should Evolve
              </h3>
              <div style={{ maxWidth: "800px" }}>
                <div style={{ display: "grid", gap: "20px" }}>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.75,
                    color: "var(--charcoal)",
                  }}>
                    Nutrition science continues to develop. New studies are published. Recommendations change. New products appear. Trends come and go.
                  </p>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.75,
                    color: "var(--charcoal)",
                  }}>
                    That doesn't mean everything you heard yesterday was wrong.
                  </p>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.75,
                    color: "var(--charcoal)", fontWeight: 600,
                  }}>
                    It means good nutrition education requires the ability to learn, question, evaluate, and adapt.
                  </p>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.75,
                    color: "var(--charcoal)",
                  }}>
                    TrueDiet is built around that mindset.
                  </p>
                </div>
              </div>
            </motion.div>

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
