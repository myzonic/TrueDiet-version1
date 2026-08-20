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
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=400&auto=format&fit=crop&q=80",
    },
    {
      title: "Label Reading Framework",
      subtitle: "Decode Any Nutrition Label in 60 Seconds",
      desc: "Learn how to move beyond front of package marketing and understand the information that actually matters on a nutrition label.",
      status: "Coming with the TrueDiet App",
      image: "https://images.unsplash.com/photo-1585518419759-14b5cfe4c173?w=500&h=400&auto=format&fit=crop&q=80",
    },
    {
      title: "Hunger Fullness Scale",
      subtitle: "Reconnect With Your Body's Signals",
      desc: "A practical tool designed to help you understand hunger and fullness cues and develop a more mindful approach to eating.",
      status: "Coming with the TrueDiet App",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&h=400&auto=format&fit=crop&q=80",
    },
    {
      title: "Nutrition Myths, Debunked",
      subtitle: "Top 12 Nutrition Myths: What Does the Science Actually Say?",
      desc: "From detox products to 'clean eating,' explore common nutrition claims and learn how to evaluate them critically.",
      status: "Coming with the TrueDiet App",
      image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500&h=400&auto=format&fit=crop&q=80",
    },
    {
      title: "Supplements Deep Dive",
      subtitle: "What Does Your Body Actually Need?",
      desc: "Explore the evidence behind common supplements and learn how to distinguish useful information from marketing hype.",
      status: "Coming with the TrueDiet App",
      image: "https://images.unsplash.com/photo-1505344565106-52b80b8b6195?w=500&h=400&auto=format&fit=crop&q=80",
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
                      width: "100%", height: "200px", objectFit: "cover",
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

        {/* CTA */}
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
                More Resources Are Coming
              </h2>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.7,
                color: "var(--gray-muted)", marginBottom: "32px",
              }}>
                TrueDiet is continuously developing new educational content. Join the waitlist to be notified when new resources become available.
              </p>
              <a href="/contact" style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                padding: "16px 32px", borderRadius: "100px",
                background: "var(--orange)", color: "#fff", textDecoration: "none",
                fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "14px",
              }}>
                Join the Waitlist
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
