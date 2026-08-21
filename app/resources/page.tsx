"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/sections/Footer";

export default function ResourcesPage() {
  const resources = [
    {
      title: "7 Day Anti Inflammatory Reset",
      subtitle: "A Practical Starting Point for Better Nutrition",
      desc: "Explore an evidence based framework designed to help you build nutritious eating habits while focusing on sustainable choices.",
      status: "Coming with the TrueDiet App",
      image: "/images/resources/7 Day Anti Inflammatory Reset.png",
    },
    {
      title: "Label Reading Framework",
      subtitle: "Decode Any Nutrition Label in 60 Seconds",
      desc: "Learn how to move beyond front of package marketing and understand the information that actually matters on a nutrition label.",
      status: "Coming with the TrueDiet App",
      image: "/images/resources/Label Reading Framework.png",
    },
    {
      title: "Hunger Fullness Scale",
      subtitle: "Reconnect With Your Body's Signals",
      desc: "A practical tool designed to help you understand hunger and fullness cues and develop a more mindful approach to eating.",
      status: "Coming with the TrueDiet App",
      image: "/images/resources/Hunger & Fullness Scale.png",
    },
    {
      title: "Nutrition Myths, Debunked",
      subtitle: "Top 12 Nutrition Myths: What Does the Science Actually Say?",
      desc: "From detox products to 'clean eating,' explore common nutrition claims and learn how to evaluate them critically.",
      status: "Coming with the TrueDiet App",
      image: "/images/resources/Nutrition Myths, Debunked.png",
    },
    {
      title: "Supplements Deep Dive",
      subtitle: "What Does Your Body Actually Need?",
      desc: "Explore the evidence behind common supplements and learn how to distinguish useful information from marketing hype.",
      status: "Coming with the TrueDiet App",
      image: "/images/resources/5. Supplements Deep Dive.png",
    },
  ];

  const categories = [
    "Nutrition Basics",
    "Mindful Eating",
    "Nutrition Myths",
    "Supplements",
    "Nutrition Trends",
    "Medical Nutrition Therapy",
  ];

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Tools & Guides"
          title="TrueDiet Resources"
          subtitle="Practical Nutrition. Backed by Science."
        />

        {/* Intro */}
        <section style={{ background: "var(--white)", padding: "80px 48px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", marginBottom: "80px" }}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                fontFamily: "var(--font-body)", fontSize: "18px", lineHeight: 1.75,
                color: "var(--charcoal)", maxWidth: "700px",
              }}
            >
              Nutrition information should help you make better decisions, not leave you more confused. Explore practical guides, educational tools, nutrition explainers, and evidence based resources created from Maureen's professional experience.
            </motion.p>
          </div>

          {/* Featured Resources */}
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <h2 style={{
              fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "32px",
              color: "var(--charcoal-deep)", marginBottom: "48px",
            }}>
              Featured Resources
            </h2>
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px",
            }}>
              {resources.map((res, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  style={{
                    background: "var(--white)", borderRadius: "16px",
                    border: "1px solid var(--border)", display: "flex", flexDirection: "column",
                    overflow: "hidden", boxShadow: "0 4px 12px rgba(0,80,96,0.08)",
                  }}
                >
                  <img
                    src={res.image}
                    alt={res.title}
                    style={{
                      width: "100%", height: "auto", minHeight: "250px", objectFit: "contain", padding: "16px", background: "var(--off-white)",
                    }}
                  />
                  <div style={{ padding: "24px", display: "flex", flexDirection: "column", flex: 1 }}>
                    <h3 style={{
                      fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "18px",
                      color: "var(--charcoal-deep)", marginBottom: "8px",
                    }}>
                      {res.title}
                    </h3>
                    <p style={{
                      fontFamily: "var(--font-body)", fontSize: "13px", lineHeight: 1.6,
                      color: "var(--terracotta)", fontWeight: 600, marginBottom: "12px",
                    }}>
                      {res.subtitle}
                    </p>
                    <p style={{
                      fontFamily: "var(--font-body)", fontSize: "13px", lineHeight: 1.6,
                      color: "var(--gray-muted)", marginBottom: "24px", flex: 1,
                    }}>
                      {res.desc}
                    </p>
                    <div style={{
                      background: "rgba(240,128,0,0.1)", padding: "12px 16px", borderRadius: "8px",
                    }}>
                      <p style={{
                        fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600,
                        letterSpacing: "0.04em", textTransform: "uppercase",
                        color: "var(--orange)",
                      }}>
                        {res.status}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section style={{ background: "var(--off-white)", padding: "80px 48px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <h2 style={{
              fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "32px",
              color: "var(--charcoal-deep)", marginBottom: "48px",
            }}>
              Resource Categories
            </h2>
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px",
            }}>
              {categories.map((cat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  style={{
                    background: "var(--white)", padding: "24px", borderRadius: "12px",
                    border: "1px solid var(--border)", textAlign: "center", cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--orange)";
                    el.style.background = "rgba(240,128,0,0.05)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--border)";
                    el.style.background = "var(--white)";
                  }}
                >
                  <p style={{
                    fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "15px",
                    color: "var(--charcoal-deep)",
                  }}>
                    {cat}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* More Than Information */}
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
                fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "32px",
                color: "var(--charcoal-deep)", marginBottom: "48px",
              }}>
                More Than Information
              </h2>
              <h3 style={{
                fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "22px",
                color: "var(--charcoal-deep)", marginBottom: "32px",
              }}>
                Tools Designed to Help You Apply What You Learn
              </h3>
              <div style={{ maxWidth: "800px" }}>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.75,
                  color: "var(--charcoal)", marginBottom: "24px",
                }}>
                  Knowing what healthy nutrition looks like is one thing. Knowing how to use that information in everyday life is another.
                </p>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.75,
                  color: "var(--charcoal)", marginBottom: "32px",
                }}>
                  TrueDiet resources are designed to bridge that gap.
                </p>
                <div style={{
                  display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px",
                }}>
                  {[
                    { title: "Understand", desc: "Break complicated nutrition topics into clear, practical concepts." },
                    { title: "Evaluate", desc: "Learn how to question nutrition claims, marketing messages, and information you encounter online." },
                    { title: "Apply", desc: "Turn nutrition knowledge into realistic everyday decisions." },
                    { title: "Build", desc: "Develop habits and skills that can become part of your long term approach to nutrition." },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      style={{
                        background: "var(--off-white)", padding: "24px", borderRadius: "12px", border: "1px solid var(--border)",
                      }}
                    >
                      <h4 style={{
                        fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "16px",
                        color: "var(--charcoal-deep)", marginBottom: "8px",
                      }}>
                        {item.title}
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
              </div>
            </motion.div>

            {/* Resource Library */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: "80px" }}
            >
              <h2 style={{
                fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "32px",
                color: "var(--charcoal-deep)", marginBottom: "20px",
              }}>
                Resource Library
              </h2>
              <p style={{
                fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "16px",
                color: "var(--orange)", marginBottom: "48px",
              }}>
                Practical Nutrition Education, All in One Place
              </p>
              <div style={{ maxWidth: "900px", marginBottom: "24px" }}>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.75,
                  color: "var(--charcoal)",
                }}>
                  The TrueDiet resource library will continue to grow with guides, tools, explainers, and practical frameworks designed around the questions people actually have about nutrition.
                </p>
              </div>
              <div style={{
                display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px",
              }}>
                {[
                  { title: "Quick Guides", desc: "Short, focused resources designed to help you understand a specific nutrition topic without information overload." },
                  { title: "Practical Tools", desc: "Interactive resources designed to help you apply nutrition concepts to everyday decisions." },
                  { title: "Evidence Explainers", desc: "Clear explanations of nutrition topics, research findings, and commonly misunderstood concepts." },
                  { title: "Myth & Misinformation Guides", desc: "Explore popular nutrition claims and learn how to evaluate what is supported by evidence and what isn't." },
                  { title: "Deep Dives", desc: "More detailed resources for people who want to understand the science behind a nutrition topic." },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    style={{
                      background: "var(--white)", padding: "24px", borderRadius: "12px", border: "1px solid var(--border)",
                    }}
                  >
                    <h4 style={{
                      fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "16px",
                      color: "var(--charcoal-deep)", marginBottom: "8px",
                    }}>
                      {item.title}
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

            {/* What You'll Find */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: "80px" }}
            >
              <h2 style={{
                fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "32px",
                color: "var(--charcoal-deep)", marginBottom: "48px",
              }}>
                What You'll Find Inside TrueDiet Resources
              </h2>
              <div style={{
                display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "32px",
              }}>
                {[
                  { title: "Real Questions", desc: "Resources built around the questions people actually ask about food, nutrition, health, and wellness." },
                  { title: "Clear Explanations", desc: "Complex nutrition concepts translated into understandable language." },
                  { title: "Practical Frameworks", desc: "Simple ways to apply what you learn without unnecessary complexity." },
                  { title: "Evidence Based Thinking", desc: "A focus on understanding the quality and limitations of evidence rather than simply following the latest trend." },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    style={{
                      background: "linear-gradient(135deg, rgba(0,80,96,0.05), rgba(240,128,0,0.05))",
                      padding: "32px", borderRadius: "16px", border: "1px solid var(--border)",
                    }}
                  >
                    <h4 style={{
                      fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "18px",
                      color: "var(--charcoal-deep)", marginBottom: "12px",
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
          </div>
        </section>

        {/* More Resources Coming */}
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
                fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "32px",
                color: "var(--charcoal-deep)", marginBottom: "48px",
              }}>
                Coming Soon
              </h2>
              <p style={{
                fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "16px",
                color: "var(--orange)", marginBottom: "48px",
              }}>
                More Tools. More Guides. More Ways to Learn.
              </p>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.75,
                color: "var(--charcoal)", marginBottom: "48px", maxWidth: "800px",
              }}>
                TrueDiet is continuously developing new educational resources designed to make nutrition easier to understand and apply.
              </p>
              <div style={{
                display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px",
              }}>
                {[
                  { title: "Meal Planning Framework", desc: "Learn how to build balanced meals without relying on complicated meal plans or rigid rules." },
                  { title: "Protein Guide", desc: "Understand protein, common food sources, practical choices, and how protein fits into an overall balanced eating pattern." },
                  { title: "Grocery Shopping Guide", desc: "Learn how to navigate the grocery store with more confidence, from comparing products to understanding food labels and marketing claims." },
                  { title: "Nutrition Myth Library", desc: "Explore common nutrition claims and learn how to separate popular beliefs from what the evidence actually supports." },
                  { title: "Balanced Eating Guide", desc: "A practical framework for creating balanced meals and making sustainable nutrition choices in everyday life." },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    style={{
                      background: "var(--white)", padding: "24px", borderRadius: "12px", border: "1px solid var(--border)",
                    }}
                  >
                    <h4 style={{
                      fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "16px",
                      color: "var(--charcoal-deep)", marginBottom: "8px",
                    }}>
                      {item.title}
                    </h4>
                    <p style={{
                      fontFamily: "var(--font-body)", fontSize: "13px", lineHeight: 1.6,
                      color: "var(--gray-muted)", marginBottom: "12px",
                    }}>
                      {item.desc}
                    </p>
                    <p style={{
                      fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600,
                      letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--orange)",
                    }}>
                      Coming to the TrueDiet App
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section style={{ background: "var(--white)", padding: "80px 48px" }}>
          <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 style={{
                fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "32px",
                color: "var(--charcoal-deep)", marginBottom: "24px",
              }}>
                Keep Learning. Keep Questioning.
              </h2>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.7,
                color: "var(--gray-muted)", marginBottom: "24px",
              }}>
                Nutrition doesn't have to be perfect to be meaningful.
              </p>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.7,
                color: "var(--gray-muted)", marginBottom: "32px",
              }}>
                The more you understand about nutrition, the more confidently you can make decisions for yourself.
              </p>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.7,
                color: "var(--charcoal-deep)", marginBottom: "32px", fontWeight: 600,
              }}>
                Join the TrueDiet waitlist and be the first to know when new guides, tools, and resources become available.
              </p>
              <a href="/contact" style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                padding: "16px 32px", borderRadius: "100px",
                background: "var(--orange)", color: "#fff", textDecoration: "none",
                fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "14px",
              }}>
                Join the TrueDiet Waitlist
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M1 6.5h11M7 2.5l4.5 4-4.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
