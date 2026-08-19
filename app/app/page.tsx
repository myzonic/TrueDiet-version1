"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/sections/Footer";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export default function AppPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Coming Soon"
          title="Meet the TrueDiet App"
          subtitle="Evidence Based Nutrition. Built for Real Life."
        />

        <section style={{ background: "var(--white)", padding: "80px 48px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            {/* Why TrueDiet */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: "80px" }}
            >
              <h2 style={{
                fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "36px",
                color: "var(--charcoal-deep)", marginBottom: "32px",
              }}>
                Why TrueDiet?
              </h2>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "17px", lineHeight: 1.7,
                color: "var(--charcoal)", marginBottom: "24px",
              }}>
                Nutrition information shouldn't be controlled by algorithms. The TrueDiet app is being designed to help you move beyond conflicting advice, social media trends, nutrition misinformation, extreme diets, and quick fixes.
              </p>
              <div style={{
                display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px",
                marginTop: "40px",
              }}>
                {["Evidence", "Clarity", "Practical Guidance", "Sustainable Habits"].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    style={{
                      background: "var(--off-white)", padding: "24px", borderRadius: "12px",
                      border: "1px solid var(--border)", textAlign: "center",
                    }}
                  >
                    <p style={{
                      fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "16px",
                      color: "var(--charcoal-deep)",
                    }}>
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: "80px" }}
            >
              <h2 style={{
                fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "36px",
                color: "var(--charcoal-deep)", marginBottom: "48px",
              }}>
                What You Can Expect
              </h2>
              <div style={{
                display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px",
              }}>
                {[
                  { title: "Evidence Based Education", desc: "Nutrition information grounded in scientific evidence and presented in a way that's understandable." },
                  { title: "Practical Tools", desc: "Resources and frameworks designed to help you apply nutrition knowledge to everyday decisions." },
                  { title: "Nutrition Clarity", desc: "Cut through confusing claims and understand what the evidence actually says." },
                  { title: "Personalized Experience", desc: "A nutrition experience designed around real people and real life rather than a one size fits all approach." },
                ].map((feat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    style={{
                      background: "var(--off-white)", padding: "32px", borderRadius: "16px",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <h3 style={{
                      fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "18px",
                      color: "var(--charcoal-deep)", marginBottom: "12px",
                    }}>
                      {feat.title}
                    </h3>
                    <p style={{
                      fontFamily: "var(--font-body)", fontSize: "14px", lineHeight: 1.6,
                      color: "var(--gray-muted)",
                    }}>
                      {feat.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Coming Soon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                background: "linear-gradient(135deg, rgba(0,80,96,0.05), rgba(240,128,0,0.05))",
                borderRadius: "24px", padding: "60px 48px", textAlign: "center", marginBottom: "80px",
              }}
            >
              <h2 style={{
                fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "36px",
                color: "var(--charcoal-deep)", marginBottom: "24px",
              }}>
                Coming Soon
              </h2>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "17px", lineHeight: 1.7,
                color: "var(--charcoal)", marginBottom: "40px", maxWidth: "600px", margin: "24px auto 40px",
              }}>
                The TrueDiet App is currently in development. We're building TrueDiet carefully, with the goal of creating a trustworthy nutrition experience backed by decades of professional experience.
              </p>
              <ShimmerButton type="button">
                Join the Waitlist
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M1 6.5h11M7 2.5l4.5 4-4.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </ShimmerButton>
            </motion.div>

            {/* Philosophy */}
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
                color: "var(--charcoal-deep)", marginBottom: "32px",
              }}>
                App Philosophy
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, maxWidth: "600px", margin: "0 auto" }}>
                {["No gimmicks.", "No miracle promises.", "No supplement sponsorships driving recommendations.", "No nutrition fearmongering.", "Just evidence based nutrition."].map((item, i) => (
                  <li key={i} style={{
                    fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 2,
                    color: "var(--charcoal-deep)", fontWeight: 600,
                  }}>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
