"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/sections/Footer";
import { ShimmerButton } from "@/components/ui/shimmer-button";

const timelineItems = [
  { year: "2001", title: "Registered Dietitian", desc: "Began her professional career as a Registered Dietitian, building a foundation in clinical nutrition and patient care." },
  { year: "~2008", title: "Medical Nutrition Therapy", desc: "Developed expertise applying nutrition science to complex health and medical needs through Medical Nutrition Therapy." },
  { year: "~2015", title: "Clinical & Healthcare Experience", desc: "Worked across multiple healthcare environments, helping people navigate nutrition in real-world situations." },
  { year: "~2020", title: "Nutrition Education Focus", desc: "Expanded her focus toward helping people understand nutrition information and separate evidence from misinformation." },
  { year: "2026", title: "TrueDiet Founded", desc: "Created TrueDiet to bring credible, evidence-based nutrition education to a broader audience." },
];

const philosophyCards = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3C9.03 3 5 7.03 5 12c0 3.5 1.9 6.56 4.75 8.22V22h8.5v-1.78C21.1 18.56 23 15.5 23 12c0-4.97-4.03-9-9-9z" stroke="var(--terracotta)" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M9.75 22v2h8.5v-2" stroke="var(--terracotta)" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Science Over Trends",
    desc: "Every recommendation is grounded in peer-reviewed research, not social media cycles or influencer opinion.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4l2 6h6l-5 3.6 2 6L14 16l-5 3.6 2-6L6 10h6z" stroke="var(--terracotta)" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Individual Context",
    desc: "There is no single perfect diet. Your health, goals, lifestyle, and circumstances all shape what good nutrition means for you.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 24s-8-5.5-8-12a8 8 0 0116 0c0 6.5-8 12-8 12z" stroke="var(--terracotta)" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="14" cy="12" r="2.5" stroke="var(--terracotta)" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Sustainable Habits",
    desc: "Short-term rules are easy to follow and hard to maintain. TrueDiet focuses on knowledge that fits into everyday life for the long haul.",
  },
];

const differentiators = [
  { title: "Science You Can Understand", desc: "Nutrition research can be complicated. TrueDiet translates complex concepts into clear, practical information without unnecessary jargon." },
  { title: "Context Matters", desc: "There isn't one perfect way of eating that works for everyone. Your health, preferences, lifestyle, goals, and circumstances all matter." },
  { title: "No Fear-Based Nutrition", desc: "Food doesn't need to be divided into \"good\" and \"bad.\" TrueDiet focuses on understanding food and making informed choices rather than creating unnecessary fear." },
  { title: "Sustainable Thinking", desc: "Short-term rules can be easy to follow and difficult to maintain. TrueDiet focuses on knowledge and habits that can fit into everyday life." },
];

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

        {/* Bio Section — image + text */}
        <section style={{ background: "var(--off-white)", padding: "clamp(60px, 10vw, 120px) clamp(16px, 5vw, 64px)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div className="bio-grid" style={{
              display: "grid",
              gridTemplateColumns: "40% 1fr",
              gap: "clamp(32px, 6vw, 80px)",
              alignItems: "start",
            }}>
              {/* Image column */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=90&auto=format"
                  alt="Maureen Ashbarry, Registered Dietitian"
                  style={{
                    width: "100%", aspectRatio: "4/5", objectFit: "cover",
                    borderRadius: "20px", display: "block",
                    boxShadow: "0 24px 80px rgba(0,80,96,0.18)",
                  }}
                />
                {/* Stat boxes */}
                <div className="stat-boxes" style={{
                  display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", marginTop: "16px",
                }}>
                  {[
                    { num: "23+", label: "Years Experience" },
                    { num: "RD", label: "Registered Dietitian" },
                    { num: "EB", label: "Evidence-Based" },
                  ].map((s, i) => (
                    <div key={i} style={{
                      border: "1px solid var(--border)", borderRadius: "12px",
                      padding: "16px 12px", textAlign: "center", background: "var(--white)",
                    }}>
                      <p style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "22px", color: "var(--charcoal-deep)", lineHeight: 1 }}>{s.num}</p>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "var(--gray-muted)", marginTop: "6px", lineHeight: 1.4 }}>{s.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Text column */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                  <div style={{ width: "24px", height: "1px", background: "var(--orange)" }} />
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--orange)" }}>
                    About Maureen
                  </span>
                </div>
                <h2 style={{
                  fontFamily: "var(--font-heading)", fontWeight: 800,
                  fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.1,
                  letterSpacing: "-1px", color: "var(--charcoal-deep)", marginBottom: "24px",
                }}>
                  Nutrition Expertise Built on Real Clinical Experience
                </h2>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(15px, 2vw, 18px)", lineHeight: 1.75, color: "var(--charcoal)", marginBottom: "20px" }}>
                  Maureen Ashbarry is a Registered Dietitian with extensive experience across healthcare and nutrition settings. Her professional background includes clinical nutrition, Medical Nutrition Therapy, healthcare, and nutrition education.
                </p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(15px, 2vw, 18px)", lineHeight: 1.75, color: "var(--charcoal)", marginBottom: "28px" }}>
                  Her approach is centered around one simple idea:
                </p>
                <div style={{
                  background: "var(--white)", borderRadius: "16px", padding: "clamp(20px, 4vw, 32px)",
                  borderLeft: "4px solid var(--orange)", marginBottom: "28px",
                }}>
                  <p style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(17px, 2.5vw, 22px)", color: "var(--charcoal-deep)", lineHeight: 1.4 }}>
                    "Nutrition should be understandable, practical, and grounded in science."
                  </p>
                </div>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(15px, 2vw, 18px)", lineHeight: 1.75, color: "var(--charcoal)" }}>
                  Rather than promoting restrictive diets, quick fixes, or the latest social media trend, Maureen focuses on evidence-based nutrition education and helping people make informed decisions that fit their individual lives.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline section */}
        <section style={{ background: "var(--white)", padding: "clamp(60px, 10vw, 120px) clamp(16px, 5vw, 64px)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div style={{ width: "24px", height: "1px", background: "var(--orange)" }} />
              <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--orange)" }}>
                Career Journey
              </span>
            </div>
            <h2 style={{
              fontFamily: "var(--font-heading)", fontWeight: 800,
              fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.1,
              letterSpacing: "-1px", color: "var(--charcoal-deep)", marginBottom: "clamp(40px, 7vw, 72px)",
            }}>
              A Career Built Around Nutrition
            </h2>

            <div style={{ position: "relative", maxWidth: "760px" }}>
              {/* Vertical line */}
              <div style={{
                position: "absolute", left: "20px", top: "8px", bottom: "8px",
                width: "1px", background: "var(--border)",
              }} />

              {timelineItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  style={{ display: "flex", gap: "clamp(20px, 4vw, 36px)", alignItems: "flex-start", marginBottom: i < timelineItems.length - 1 ? "clamp(28px, 5vw, 48px)" : "0", position: "relative" }}
                >
                  {/* Dot */}
                  <div style={{
                    width: "14px", height: "14px", borderRadius: "50%",
                    background: i === timelineItems.length - 1 ? "var(--orange)" : "var(--charcoal-deep)",
                    border: "2px solid var(--white)",
                    boxShadow: i === timelineItems.length - 1 ? "0 0 0 4px rgba(240,128,0,0.18)" : "0 0 0 2px var(--border)",
                    flexShrink: 0, marginTop: "4px", position: "relative", zIndex: 1,
                  }} />

                  {/* Content */}
                  <div>
                    <span style={{
                      display: "inline-block",
                      fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "11px",
                      letterSpacing: "0.08em", color: "var(--white)",
                      background: i === timelineItems.length - 1 ? "var(--orange)" : "var(--charcoal-deep)",
                      borderRadius: "100px", padding: "4px 12px", marginBottom: "10px",
                    }}>
                      {item.year}
                    </span>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(16px, 2.5vw, 20px)", color: "var(--charcoal-deep)", marginBottom: "8px" }}>
                      {item.title}
                    </h3>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(14px, 1.8vw, 16px)", lineHeight: 1.65, color: "var(--gray-muted)" }}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy cards — 3 col */}
        <section style={{ background: "var(--off-white)", padding: "clamp(60px, 10vw, 120px) clamp(16px, 5vw, 64px)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "clamp(40px, 7vw, 72px)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "16px" }}>
                <div style={{ width: "24px", height: "1px", background: "var(--orange)" }} />
                <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--orange)" }}>
                  Why TrueDiet
                </span>
                <div style={{ width: "24px", height: "1px", background: "var(--orange)" }} />
              </div>
              <h2 style={{
                fontFamily: "var(--font-heading)", fontWeight: 800,
                fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.1,
                letterSpacing: "-1px", color: "var(--charcoal-deep)", marginBottom: "16px",
              }}>
                Her Philosophy
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(15px, 2vw, 18px)", lineHeight: 1.7, color: "var(--gray-muted)", maxWidth: "560px", margin: "0 auto" }}>
                Three core beliefs that guide every piece of content, tool, and resource within TrueDiet.
              </p>
            </div>

            <div className="three-col-grid" style={{
              display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "clamp(16px, 3vw, 28px)",
            }}>
              {philosophyCards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  style={{
                    background: "var(--white)", borderRadius: "20px", padding: "clamp(24px, 4vw, 40px)",
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
                  <div style={{ marginBottom: "20px" }}>{card.icon}</div>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(16px, 2vw, 20px)", color: "var(--charcoal-deep)", marginBottom: "12px" }}>
                    {card.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(13px, 1.6vw, 15px)", lineHeight: 1.7, color: "var(--gray-muted)" }}>
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section style={{ background: "var(--white)", padding: "clamp(60px, 10vw, 120px) clamp(16px, 5vw, 64px)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div style={{ width: "24px", height: "1px", background: "var(--orange)" }} />
              <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--orange)" }}>
                Credentials
              </span>
            </div>
            <h2 style={{
              fontFamily: "var(--font-heading)", fontWeight: 800,
              fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.1,
              letterSpacing: "-1px", color: "var(--charcoal-deep)", marginBottom: "clamp(32px, 6vw, 56px)",
            }}>
              Professional Background
            </h2>
            <div className="creds-grid" style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "clamp(16px, 3vw, 24px)",
              marginBottom: "clamp(48px, 8vw, 80px)",
            }}>
              {[
                { abbr: "MS", title: "Master's Level Education", detail: "Advanced graduate-level nutrition science training." },
                { abbr: "RD", title: "Registered Dietitian", detail: "Fully credentialed by the Commission on Dietetic Registration." },
                { abbr: "CDN", title: "Certified Dietitian Nutritionist", detail: "State-level nutrition licensure and certification." },
                { abbr: "CNPR", title: "Certified Pharmaceutical Rep", detail: "Formal pharmaceutical and clinical nutrition training." },
              ].map((cred, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  style={{
                    background: "var(--off-white)", padding: "clamp(24px, 4vw, 36px) clamp(20px, 3vw, 28px)",
                    borderRadius: "16px", border: "1px solid var(--border)",
                  }}
                >
                  <p style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "32px", color: "var(--orange)", marginBottom: "10px", lineHeight: 1 }}>
                    {cred.abbr}
                  </p>
                  <p style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "15px", color: "var(--charcoal-deep)", marginBottom: "8px" }}>
                    {cred.title}
                  </p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", lineHeight: 1.6, color: "var(--gray-muted)" }}>
                    {cred.detail}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* What Makes the Approach Different */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div style={{ width: "24px", height: "1px", background: "var(--orange)" }} />
              <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--orange)" }}>
                Less Noise. More Understanding.
              </span>
            </div>
            <h2 style={{
              fontFamily: "var(--font-heading)", fontWeight: 800,
              fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.1,
              letterSpacing: "-1px", color: "var(--charcoal-deep)", marginBottom: "clamp(32px, 6vw, 56px)",
            }}>
              What Makes TrueDiet Different?
            </h2>
            <div className="diff-grid" style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "clamp(16px, 3vw, 24px)",
            }}>
              {differentiators.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  style={{
                    background: "var(--off-white)", padding: "clamp(20px, 3vw, 32px)", borderRadius: "16px", border: "1px solid var(--border)",
                  }}
                >
                  <div style={{ width: "32px", height: "2px", background: "var(--orange)", borderRadius: "2px", marginBottom: "16px" }} />
                  <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(15px, 2vw, 18px)", color: "var(--charcoal-deep)", marginBottom: "10px" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(13px, 1.6vw, 15px)", lineHeight: 1.7, color: "var(--gray-muted)" }}>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Credentials CTA — dark strip */}
        <section style={{
          background: "var(--charcoal-deep)",
          padding: "clamp(60px, 10vw, 120px) clamp(16px, 5vw, 64px)",
        }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", textAlign: "center" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "20px" }}>
                Get Started
              </p>
              <h2 style={{
                fontFamily: "var(--font-heading)", fontWeight: 800,
                fontSize: "clamp(28px, 4.5vw, 56px)", lineHeight: 1.1,
                letterSpacing: "-1px", color: "#ffffff", marginBottom: "20px",
              }}>
                Nutrition doesn't have to be confusing.
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(15px, 2vw, 18px)", lineHeight: 1.7, color: "rgba(255,255,255,0.6)", marginBottom: "40px", maxWidth: "520px", margin: "0 auto 40px" }}>
                Get evidence-based nutrition guidance from an experienced Registered Dietitian.
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

        {/* Section A — What 23 Years Has Taught Me */}
        <section style={{ background: "var(--off-white)", padding: "clamp(60px, 10vw, 120px) clamp(16px, 5vw, 64px)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div style={{ width: "24px", height: "1px", background: "var(--orange)" }} />
              <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--orange)" }}>
                23 Years of Experience
              </span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                fontFamily: "var(--font-heading)", fontWeight: 800,
                fontSize: "clamp(28px, 5vw, 48px)", lineHeight: 1.1,
                letterSpacing: "-1px", color: "var(--charcoal-deep)", marginBottom: "24px",
              }}
            >
              What 23 Years Has Taught Me
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontFamily: "var(--font-body)", fontSize: "clamp(15px, 2vw, 17px)", lineHeight: 1.75, color: "var(--charcoal)", maxWidth: "780px", marginBottom: "clamp(40px, 7vw, 64px)" }}
            >
              Experience has taught Maureen that there is no single approach to nutrition that works perfectly for everyone. People have different lifestyles, schedules, preferences, cultures, experiences, goals, and relationships with food. That is why TrueDiet places education and individual understanding at the center of the nutrition journey.
            </motion.p>

            <div className="about-three-col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "clamp(16px, 3vw, 28px)" }}>
              {[
                { title: "Science", desc: "Nutrition information grounded in credible scientific evidence rather than passing trends or unsupported promises." },
                { title: "Practicality", desc: "Real life includes busy schedules, restaurants, travel, family meals, celebrations, and unexpected days. Nutrition advice needs to work in real life." },
                { title: "Sustainability", desc: "A nutrition approach should be realistic enough to maintain long term through consistent habits and informed choices." },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6, boxShadow: "0 24px 64px rgba(0,80,96,0.14)" }}
                  style={{ background: "var(--white)", borderRadius: "16px", border: "1px solid var(--border)", padding: "clamp(20px, 4vw, 36px)", cursor: "default" }}
                >
                  <div style={{ width: "32px", height: "2px", background: "var(--orange)", borderRadius: "2px", marginBottom: "16px" }} />
                  <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(16px, 2vw, 20px)", color: "var(--charcoal-deep)", marginBottom: "12px" }}>{card.title}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(13px, 1.6vw, 15px)", lineHeight: 1.75, color: "var(--gray-muted)" }}>{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section B — Beyond Diets and Restrictions */}
        <section style={{ background: "var(--white)", padding: "clamp(60px, 10vw, 120px) clamp(16px, 5vw, 64px)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div style={{ width: "24px", height: "1px", background: "var(--orange)" }} />
              <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--orange)" }}>
                A Different Perspective
              </span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                fontFamily: "var(--font-heading)", fontWeight: 800,
                fontSize: "clamp(28px, 5vw, 48px)", lineHeight: 1.1,
                letterSpacing: "-1px", color: "var(--charcoal-deep)", marginBottom: "clamp(32px, 6vw, 56px)",
              }}
            >
              Beyond Diets and Restrictions
            </motion.h2>

            <div className="about-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(32px, 6vw, 80px)", alignItems: "start" }}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(15px, 2vw, 17px)", lineHeight: 1.75, color: "var(--charcoal)" }}>
                  At TrueDiet, nutrition is viewed as more than a list of foods to avoid. Healthy eating can include variety, flexibility, enjoyment, balance, and nourishment. There is room for real life within a healthy lifestyle.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{
                  background: "var(--charcoal-deep)", borderRadius: "16px",
                  padding: "clamp(20px, 4vw, 36px)", borderLeft: "4px solid var(--orange)",
                }}
              >
                <p style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(15px, 2.2vw, 20px)", color: "#ffffff", lineHeight: 1.5 }}>
                  "Nutrition should not be about following every new trend. It should be about understanding your individual needs, developing realistic habits, and having the knowledge to make confident choices."
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section C — FAQ */}
        <section style={{ background: "var(--off-white)", padding: "clamp(60px, 10vw, 120px) clamp(16px, 5vw, 64px)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div style={{ width: "24px", height: "1px", background: "var(--orange)" }} />
              <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--orange)" }}>
                FAQ
              </span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                fontFamily: "var(--font-heading)", fontWeight: 800,
                fontSize: "clamp(28px, 5vw, 48px)", lineHeight: 1.1,
                letterSpacing: "-1px", color: "var(--charcoal-deep)", marginBottom: "clamp(32px, 6vw, 56px)",
              }}
            >
              Frequently Asked Questions
            </motion.h2>

            <div style={{ maxWidth: "820px" }}>
              {[
                { q: "How long has Maureen worked in nutrition?", a: "More than 23 years of professional experience." },
                { q: "Is TrueDiet based on nutrition trends?", a: "TrueDiet focuses on evidence based nutrition rather than following every new trend." },
                { q: "Does TrueDiet believe in one perfect diet?", a: "No. Individual nutrition needs and circumstances vary, which is why a personalized approach is important." },
                { q: "Is healthy eating about eliminating foods?", a: "Healthy eating is more complex than labeling foods as good or bad. Overall patterns, balance, variety, and individual needs all matter." },
                { q: "Why does nutrition education matter?", a: "Understanding nutrition can help people make more informed decisions and develop greater confidence in everyday food choices." },
                { q: "Can nutrition advice work for busy lifestyles?", a: "Practical nutrition considers the realities of everyday life including busy schedules, travel, eating out, and changing routines." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  style={{ borderBottom: "1px solid var(--border)" }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                      padding: "clamp(20px, 3vw, 28px) 0", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: "16px",
                    }}
                  >
                    <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(15px, 2vw, 17px)", color: "var(--charcoal-deep)" }}>{item.q}</span>
                    <motion.span
                      animate={{ rotate: openFaq === i ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      style={{ flexShrink: 0, width: "24px", height: "24px", borderRadius: "50%", background: "var(--charcoal-deep)", display: "flex", alignItems: "center", justifyContent: "center" }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M6 1v10M1 6h10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === i && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: "hidden" }}
                      >
                        <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(14px, 1.8vw, 16px)", lineHeight: 1.75, color: "var(--gray-muted)", paddingBottom: "clamp(20px, 3vw, 28px)" }}>{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section D — Continue Your TrueDiet Journey */}
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
                fontSize: "clamp(28px, 5vw, 48px)", lineHeight: 1.1,
                letterSpacing: "-1px", color: "#ffffff", marginBottom: "20px",
              }}>
                Better Nutrition Begins With Better Understanding
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(15px, 2vw, 17px)", lineHeight: 1.75, color: "rgba(255,255,255,0.65)", marginBottom: "40px", maxWidth: "600px", margin: "0 auto 40px" }}>
                Explore TrueDiet&apos;s nutrition education and resources to learn more about food, nutrients, balanced eating, and practical nutrition strategies.
              </p>
              <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                <a href="/nutrition-education" style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  padding: "14px 32px", borderRadius: "100px",
                  background: "var(--orange)", color: "#fff", textDecoration: "none",
                  fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "15px",
                  transition: "opacity 0.2s, transform 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.87"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                >
                  Nutrition Education
                </a>
                <a href="/resources" style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  padding: "14px 32px", borderRadius: "100px",
                  background: "transparent", color: "#fff", textDecoration: "none",
                  border: "1.5px solid rgba(255,255,255,0.5)",
                  fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "15px",
                  transition: "border-color 0.2s, transform 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#fff"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.5)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                >
                  View Resources
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .bio-grid { grid-template-columns: 1fr !important; }
          .three-col-grid { grid-template-columns: 1fr !important; }
          .stat-boxes { grid-template-columns: repeat(3, 1fr) !important; }
          .about-three-col { grid-template-columns: 1fr !important; }
          .about-two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
