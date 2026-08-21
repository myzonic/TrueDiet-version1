"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/sections/Footer";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <PageHero
          eyebrow="About Maureen"
          title="Meet Maureen Ashbarry, MS, RD, CDN, CNPR"
          subtitle="Real Experience. Real Science. Real Nutrition."
        />

        {/* Hero image */}
        <section style={{ background: "var(--off-white)", padding: "60px 48px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <motion.img
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=900&q=90&auto=format"
              alt="Maureen Ashbarry, Registered Dietitian"
              style={{
                width: "100%", maxWidth: "500px", height: "600px",
                objectFit: "cover", borderRadius: "20px", margin: "0 auto",
                display: "block", boxShadow: "0 20px 60px rgba(0,80,96,0.15)",
              }}
            />
          </div>
        </section>

        {/* Main content */}
        <section style={{ background: "var(--off-white)", padding: "80px 48px" }}>
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
                Nutrition Expertise Built on Real Clinical Experience
              </h2>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "18px", lineHeight: 1.75,
                color: "var(--charcoal)", marginBottom: "20px",
              }}>
                Maureen Ashbarry is a Registered Dietitian with extensive experience across healthcare and nutrition settings. Her professional background includes clinical nutrition, Medical Nutrition Therapy, healthcare, and nutrition education.
              </p>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "18px", lineHeight: 1.75,
                color: "var(--charcoal)", marginBottom: "20px",
              }}>
                Her approach is centered around one simple idea:
              </p>
              <div style={{
                background: "var(--white)", borderRadius: "16px", padding: "32px",
                borderLeft: "4px solid var(--terracotta)", marginBottom: "40px",
              }}>
                <p style={{
                  fontFamily: "var(--font-heading)", fontWeight: 700,
                  fontSize: "22px", color: "var(--charcoal-deep)",
                }}>
                  Nutrition should be understandable, practical, and grounded in science.
                </p>
              </div>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "18px", lineHeight: 1.75,
                color: "var(--charcoal)",
              }}>
                Rather than promoting restrictive diets, quick fixes, or the latest social media trend, Maureen focuses on evidence based nutrition education and helping people make informed decisions that fit their individual lives.
              </p>
            </motion.div>

            {/* Career Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: "80px" }}
            >
              <h3 style={{
                fontFamily: "var(--font-heading)", fontWeight: 800,
                fontSize: "clamp(28px, 3.5vw, 48px)", letterSpacing: "-1px",
                color: "var(--charcoal-deep)", marginBottom: "48px",
              }}>
                A Career Built Around Nutrition
              </h3>
              <div style={{ display: "grid", gap: "32px" }}>
                {[
                  { year: "2001", title: "Registered Dietitian", desc: "Began her professional career as a Registered Dietitian, developing a foundation in clinical nutrition and patient care." },
                  { year: "", title: "Medical Nutrition Therapy", desc: "Developed experience applying nutrition science to complex health and medical needs through Medical Nutrition Therapy." },
                  { year: "", title: "Clinical & Healthcare Experience", desc: "Worked across multiple healthcare environments and gained experience helping people navigate nutrition in real world situations." },
                  { year: "", title: "Nutrition Education", desc: "Expanded her focus toward helping people understand nutrition information and separate evidence from misinformation." },
                  { year: "2026", title: "TrueDiet", desc: "Created TrueDiet to bring credible, evidence based nutrition education to a broader audience." },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    style={{
                      display: "flex", gap: "24px", padding: "24px 0",
                      borderBottom: i < 4 ? "1px solid var(--border)" : "none",
                    }}
                  >
                    {item.year && (
                      <span style={{
                        fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "14px",
                        color: "var(--terracotta)", minWidth: "60px",
                      }}>
                        {item.year}
                      </span>
                    )}
                    <div>
                      <h4 style={{
                        fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "18px",
                        color: "var(--charcoal-deep)", marginBottom: "8px",
                      }}>
                        {item.title}
                      </h4>
                      <p style={{
                        fontFamily: "var(--font-body)", fontSize: "15px", lineHeight: 1.6,
                        color: "var(--gray-muted)",
                      }}>
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: "80px", textAlign: "center", padding: "60px 0" }}
            >
              <h3 style={{
                fontFamily: "var(--font-heading)", fontWeight: 800,
                fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 1.1,
                letterSpacing: "-1.5px", color: "var(--charcoal-deep)",
                marginBottom: "32px",
              }}>
                Her Philosophy
              </h3>
              <p style={{
                fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "28px",
                color: "var(--charcoal-deep)", maxWidth: "600px", margin: "0 auto",
              }}>
                It's About You.
              </p>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.7,
                color: "var(--gray-muted)", maxWidth: "700px", margin: "24px auto 0",
              }}>
                Maureen's publicly listed care philosophy emphasizes a patient centered approach: meeting people where they are, listening to their goals, providing education, and using evidence based nutrition information rather than one size fits all recommendations.
              </p>
            </motion.div>

            {/* Credentials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: "60px" }}
            >
              <h3 style={{
                fontFamily: "var(--font-heading)", fontWeight: 800,
                fontSize: "clamp(28px, 3.5vw, 48px)", letterSpacing: "-1px",
                color: "var(--charcoal-deep)", marginBottom: "48px",
              }}>
                Credentials & Professional Background
              </h3>
              <div style={{
                display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px",
              }}>
                {[
                  { abbr: "MS", title: "Master's level education" },
                  { abbr: "RD", title: "Registered Dietitian" },
                  { abbr: "CDN", title: "Certified Dietitian Nutritionist" },
                  { abbr: "CNPR", title: "Certified National Pharmaceutical Representative" },
                ].map((cred, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    style={{
                      background: "var(--white)", padding: "32px 24px", borderRadius: "16px",
                      textAlign: "center", boxShadow: "0 4px 12px rgba(0,80,96,0.08)",
                    }}
                  >
                    <p style={{
                      fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "28px",
                      color: "var(--orange)", marginBottom: "12px",
                    }}>
                      {cred.abbr}
                    </p>
                    <p style={{
                      fontFamily: "var(--font-body)", fontSize: "14px", lineHeight: 1.6,
                      color: "var(--charcoal-deep)",
                    }}>
                      {cred.title}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Why I Created TrueDiet */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: "80px" }}
            >
              <h3 style={{
                fontFamily: "var(--font-heading)", fontWeight: 800,
                fontSize: "clamp(28px, 3.5vw, 48px)", letterSpacing: "-1px",
                color: "var(--charcoal-deep)", marginBottom: "48px",
              }}>
                Why I Created TrueDiet
              </h3>
              <div style={{ maxWidth: "800px" }}>
                <h4 style={{
                  fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "20px",
                  color: "var(--charcoal-deep)", marginBottom: "24px",
                }}>
                  Nutrition Information Should Help You Feel More Confident, Not More Confused
                </h4>
                <div style={{ display: "grid", gap: "20px" }}>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.75,
                    color: "var(--charcoal)",
                  }}>
                    Nutrition advice is everywhere. Social media, advertisements, podcasts, news articles, influencers, and wellness trends are constantly telling us what we should or shouldn't eat.
                  </p>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.75,
                    color: "var(--charcoal)",
                  }}>
                    But more information doesn't always mean better information.
                  </p>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.75,
                    color: "var(--charcoal)",
                  }}>
                    After years of working in clinical and healthcare settings, I've seen firsthand how difficult it can be to separate helpful nutrition guidance from oversimplified advice, marketing claims, and constantly changing trends.
                  </p>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.75,
                    color: "var(--charcoal)", fontWeight: 600,
                  }}>
                    TrueDiet was created to make that process easier.
                  </p>
                </div>
                <div style={{
                  background: "var(--white)", borderRadius: "16px", padding: "32px",
                  borderLeft: "4px solid var(--orange)", marginTop: "32px",
                }}>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.75,
                    color: "var(--charcoal)", marginBottom: "16px",
                  }}>
                    The goal isn't to tell you what to eat through another set of rigid rules. It's to help you understand why nutrition matters, what the evidence actually says, and how to apply that knowledge to your own life.
                  </p>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.75,
                    color: "var(--charcoal)",
                  }}>
                    TrueDiet brings together professional nutrition experience, evidence based education, and practical tools designed to make nutrition easier to understand and easier to use.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* What Makes the Approach Different */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: "80px" }}
            >
              <h3 style={{
                fontFamily: "var(--font-heading)", fontWeight: 800,
                fontSize: "clamp(28px, 3.5vw, 48px)", letterSpacing: "-1px",
                color: "var(--charcoal-deep)", marginBottom: "20px",
              }}>
                What Makes the TrueDiet Approach Different?
              </h3>
              <p style={{
                fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "16px",
                color: "var(--orange)", marginBottom: "48px",
              }}>
                Less Noise. More Understanding.
              </p>
              <div style={{
                display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px",
              }}>
                {[
                  {
                    title: "Science You Can Understand",
                    desc: "Nutrition research can be complicated. TrueDiet translates complex concepts into clear, understandable information without unnecessary jargon."
                  },
                  {
                    title: "Context Matters",
                    desc: "There isn't one perfect way of eating that works for everyone. Your health, preferences, lifestyle, goals, and circumstances all matter."
                  },
                  {
                    title: "No Fear Based Nutrition",
                    desc: "Food doesn't need to be divided into \"good\" and \"bad.\" TrueDiet focuses on understanding food and making informed choices rather than creating unnecessary fear."
                  },
                  {
                    title: "Sustainable Thinking",
                    desc: "Short term rules can be easy to follow and difficult to maintain. TrueDiet focuses on knowledge and habits that can fit into everyday life."
                  },
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
                    <h4 style={{
                      fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "18px",
                      color: "var(--charcoal-deep)", marginBottom: "16px",
                    }}>
                      {item.title}
                    </h4>
                    <p style={{
                      fontFamily: "var(--font-body)", fontSize: "14px", lineHeight: 1.7,
                      color: "var(--gray-muted)",
                    }}>
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* From Clinical Experience to TrueDiet */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: "80px" }}
            >
              <h3 style={{
                fontFamily: "var(--font-heading)", fontWeight: 800,
                fontSize: "clamp(28px, 3.5vw, 48px)", letterSpacing: "-1px",
                color: "var(--charcoal-deep)", marginBottom: "48px",
              }}>
                From Clinical Experience to TrueDiet
              </h3>
              <div style={{ maxWidth: "800px" }}>
                <p style={{
                  fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "16px",
                  color: "var(--orange)", marginBottom: "48px",
                }}>
                  Years of Experience. One Clear Mission.
                </p>
                <div style={{ display: "grid", gap: "24px" }}>
                  {[
                    { step: "Clinical Nutrition", desc: "Building a strong foundation in nutrition science and patient care." },
                    { step: "Medical Nutrition Therapy", desc: "Applying nutrition knowledge to complex health and medical needs." },
                    { step: "Healthcare Experience", desc: "Understanding the challenges people face when trying to apply nutrition guidance in real life." },
                    { step: "Nutrition Education", desc: "Helping people understand nutrition and distinguish credible information from misinformation." },
                    { step: "TrueDiet", desc: "Bringing evidence based nutrition education, practical resources, and tools to a broader audience." },
                  ].map((item, i) => (
                    <div key={i}>
                      <p style={{
                        fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "16px",
                        color: "var(--charcoal-deep)", marginBottom: "8px",
                      }}>
                        {item.step}
                      </p>
                      <p style={{
                        fontFamily: "var(--font-body)", fontSize: "14px", lineHeight: 1.6,
                        color: "var(--gray-muted)", marginBottom: i < 4 ? "12px" : "0",
                      }}>
                        {item.desc}
                      </p>
                      {i < 4 && (
                        <p style={{
                          fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "16px",
                          color: "var(--terracotta)", textAlign: "center", marginBottom: "12px",
                        }}>
                          ↓
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* The Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                textAlign: "center", padding: "60px 48px", marginBottom: "60px",
                background: "linear-gradient(135deg, rgba(0,80,96,0.05), rgba(96,144,0,0.05))",
                borderRadius: "24px",
              }}
            >
              <h3 style={{
                fontFamily: "var(--font-heading)", fontWeight: 800,
                fontSize: "clamp(28px, 3.5vw, 48px)", letterSpacing: "-1px",
                color: "var(--charcoal-deep)", marginBottom: "24px",
              }}>
                The Mission
              </h3>
              <p style={{
                fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "24px",
                color: "var(--charcoal-deep)", maxWidth: "600px", margin: "0 auto 24px",
              }}>
                Make nutrition easier to understand.
              </p>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.7,
                color: "var(--gray-muted)", maxWidth: "700px", margin: "0 auto",
              }}>
                TrueDiet exists to help people become more informed about nutrition without becoming overwhelmed by it.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                textAlign: "center", padding: "60px 0",
                borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)",
              }}
            >
              <h3 style={{
                fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "24px",
                color: "var(--charcoal-deep)", marginBottom: "24px",
              }}>
                Nutrition doesn't have to be confusing.
              </h3>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.6,
                color: "var(--gray-muted)", marginBottom: "32px",
              }}>
                Get evidence based nutrition guidance from an experienced Registered Dietitian.
              </p>
              <ShimmerButton type="button" onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}>
                Join the Waitlist
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
