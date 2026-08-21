"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/sections/Footer";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export default function AppPage() {
  const features = [
    { title: "Evidence Based Education", desc: "Nutrition information grounded in scientific evidence and presented in a way that's understandable." },
    { title: "Practical Tools", desc: "Resources and frameworks designed to help you apply nutrition knowledge to everyday decisions." },
    { title: "Nutrition Clarity", desc: "Cut through confusing claims and understand what the evidence actually says." },
    { title: "Personalized Experience", desc: "A nutrition experience designed around real people and real life rather than a one-size-fits-all approach." },
  ];

  const pillars = ["Evidence", "Clarity", "Practical Guidance", "Sustainable Habits"];

  const philosophy = [
    "No gimmicks.",
    "No miracle promises.",
    "No supplement sponsorships driving recommendations.",
    "No nutrition fearmongering.",
    "Just evidence-based nutrition.",
  ];

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Coming Soon"
          title="Meet the TrueDiet App"
          subtitle="Evidence-Based Nutrition. Built for Real Life."
        />

        {/* App visual + Why TrueDiet */}
        <section style={{ background: "var(--white)", padding: "clamp(60px, 10vw, 120px) clamp(16px, 5vw, 64px)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div className="app-intro-grid" style={{
              display: "grid", gridTemplateColumns: "1fr 1fr",
              gap: "clamp(40px, 7vw, 96px)", alignItems: "center",
              marginBottom: "clamp(60px, 10vw, 120px)",
            }}>
              {/* App image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1586253408452-8bc107f81060?w=600&h=500&auto=format&fit=crop&q=80"
                  alt="TrueDiet App"
                  style={{
                    maxWidth: "min(400px, 90vw)", width: "100%",
                    height: "auto", aspectRatio: "4/5", objectFit: "cover",
                    borderRadius: "24px", boxShadow: "0 24px 80px rgba(0,80,96,0.2)",
                    display: "block",
                  }}
                />
              </motion.div>

              {/* Why TrueDiet */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                  <div style={{ width: "24px", height: "1px", background: "var(--orange)" }} />
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--orange)" }}>
                    Why TrueDiet
                  </span>
                </div>
                <h2 style={{
                  fontFamily: "var(--font-heading)", fontWeight: 800,
                  fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.1,
                  letterSpacing: "-1px", color: "var(--charcoal-deep)", marginBottom: "24px",
                }}>
                  Nutrition Built on Evidence, Not Algorithms
                </h2>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(15px, 2vw, 18px)", lineHeight: 1.75, color: "var(--charcoal)", marginBottom: "32px" }}>
                  Nutrition information shouldn't be controlled by algorithms. The TrueDiet app is being designed to help you move beyond conflicting advice, social media trends, nutrition misinformation, extreme diets, and quick fixes.
                </p>
                <div className="pillars-grid" style={{
                  display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px",
                }}>
                  {pillars.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      style={{
                        background: "var(--off-white)", padding: "16px 20px", borderRadius: "12px",
                        border: "1px solid var(--border)", textAlign: "center",
                      }}
                    >
                      <p style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(13px, 1.5vw, 15px)", color: "var(--charcoal-deep)" }}>
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Features */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div style={{ width: "24px", height: "1px", background: "var(--orange)" }} />
              <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--orange)" }}>
                What to Expect
              </span>
            </div>
            <h2 style={{
              fontFamily: "var(--font-heading)", fontWeight: 800,
              fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.1,
              letterSpacing: "-1px", color: "var(--charcoal-deep)", marginBottom: "clamp(32px, 6vw, 56px)",
            }}>
              App Features
            </h2>
            <div className="features-grid" style={{
              display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "clamp(16px, 3vw, 28px)",
            }}>
              {features.map((feat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  style={{
                    background: "var(--off-white)", padding: "clamp(24px, 4vw, 40px)", borderRadius: "20px",
                    border: "1px solid var(--border)", transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 60px rgba(0,80,96,0.12)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <div style={{ width: "32px", height: "2px", background: "var(--orange)", borderRadius: "2px", marginBottom: "20px" }} />
                  <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(16px, 2vw, 20px)", color: "var(--charcoal-deep)", marginBottom: "12px" }}>
                    {feat.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(13px, 1.6vw, 15px)", lineHeight: 1.7, color: "var(--gray-muted)" }}>
                    {feat.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Coming Soon CTA */}
        <section style={{ background: "var(--charcoal-deep)", padding: "clamp(60px, 10vw, 120px) clamp(16px, 5vw, 64px)" }}>
          <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "20px" }}>
                In Development
              </p>
              <h2 style={{
                fontFamily: "var(--font-heading)", fontWeight: 800,
                fontSize: "clamp(28px, 4.5vw, 56px)", lineHeight: 1.1,
                letterSpacing: "-1px", color: "#ffffff", marginBottom: "20px",
              }}>
                Coming Soon
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(15px, 2vw, 18px)", lineHeight: 1.7, color: "rgba(255,255,255,0.6)", marginBottom: "40px", maxWidth: "540px", margin: "0 auto 40px" }}>
                We're building TrueDiet carefully, with the goal of creating a trustworthy nutrition experience backed by decades of professional experience.
              </p>
              <ShimmerButton type="button">
                Join the Waitlist
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M1 6.5h11M7 2.5l4.5 4-4.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </ShimmerButton>
            </motion.div>
          </div>
        </section>

        {/* Philosophy */}
        <section style={{ background: "var(--off-white)", padding: "clamp(60px, 10vw, 120px) clamp(16px, 5vw, 64px)" }}>
          <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "16px" }}>
                <div style={{ width: "24px", height: "1px", background: "var(--orange)" }} />
                <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--orange)" }}>
                  Our Promise
                </span>
                <div style={{ width: "24px", height: "1px", background: "var(--orange)" }} />
              </div>
              <h2 style={{
                fontFamily: "var(--font-heading)", fontWeight: 800,
                fontSize: "clamp(24px, 3.5vw, 40px)", lineHeight: 1.1,
                letterSpacing: "-0.5px", color: "var(--charcoal-deep)", marginBottom: "36px",
              }}>
                App Philosophy
              </h2>
              <div style={{ background: "var(--white)", borderRadius: "20px", padding: "clamp(28px, 5vw, 48px)", border: "1px solid var(--border)" }}>
                {philosophy.map((item, i) => (
                  <p key={i} style={{
                    fontFamily: "var(--font-body)", fontSize: "clamp(15px, 2vw, 18px)", lineHeight: 2,
                    color: i === philosophy.length - 1 ? "var(--charcoal-deep)" : "var(--charcoal)",
                    fontWeight: i === philosophy.length - 1 ? 700 : 500,
                  }}>
                    {item}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .app-intro-grid { grid-template-columns: 1fr !important; }
          .features-grid { grid-template-columns: 1fr !important; }
          .pillars-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </>
  );
}
