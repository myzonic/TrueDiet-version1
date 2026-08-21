"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/sections/Footer";

export default function ResourcesPage() {
  const resources = [
    {
      title: "7 Day Anti Inflammatory Reset",
      subtitle: "A Practical Starting Point for Better Nutrition",
      desc: "Explore an evidence-based framework designed to help you build nutritious eating habits while focusing on sustainable choices.",
      image: "/images/resources/7 Day Anti Inflammatory Reset.png",
    },
    {
      title: "Label Reading Framework",
      subtitle: "Decode Any Nutrition Label in 60 Seconds",
      desc: "Learn how to move beyond front-of-package marketing and understand the information that actually matters on a nutrition label.",
      image: "/images/resources/Label Reading Framework.png",
    },
    {
      title: "Hunger Fullness Scale",
      subtitle: "Reconnect With Your Body's Signals",
      desc: "A practical tool designed to help you understand hunger and fullness cues and develop a more mindful approach to eating.",
      image: "/images/resources/Hunger & Fullness Scale.png",
    },
    {
      title: "Nutrition Myths, Debunked",
      subtitle: "Top 12 Nutrition Myths: What Does the Science Actually Say?",
      desc: "From detox products to 'clean eating,' explore common nutrition claims and learn how to evaluate them critically.",
      image: "/images/resources/Nutrition Myths, Debunked.png",
    },
    {
      title: "Supplements Deep Dive",
      subtitle: "What Does Your Body Actually Need?",
      desc: "Explore the evidence behind common supplements and learn how to distinguish useful information from marketing hype.",
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

  const comingSoon = [
    { title: "Meal Planning Framework", desc: "Learn how to build balanced meals without relying on complicated meal plans or rigid rules." },
    { title: "Protein Guide", desc: "Understand protein, common food sources, practical choices, and how protein fits into an overall balanced eating pattern." },
    { title: "Grocery Shopping Guide", desc: "Navigate the grocery store with confidence — comparing products, understanding labels, and seeing through marketing claims." },
    { title: "Nutrition Myth Library", desc: "Explore common nutrition claims and learn how to separate popular beliefs from what the evidence actually supports." },
    { title: "Balanced Eating Guide", desc: "A practical framework for creating balanced meals and making sustainable nutrition choices in everyday life." },
  ];

  const [openFaqRes, setOpenFaqRes] = useState<number | null>(null);

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Tools & Guides"
          title="TrueDiet Resources"
          subtitle="Practical Nutrition. Backed by Science."
        />

        {/* Intro + Featured Resources */}
        <section style={{ background: "var(--white)", padding: "clamp(60px, 10vw, 120px) clamp(16px, 5vw, 64px)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                fontFamily: "var(--font-body)", fontSize: "clamp(15px, 2vw, 18px)", lineHeight: 1.75,
                color: "var(--charcoal)", maxWidth: "700px", marginBottom: "clamp(48px, 8vw, 80px)",
              }}
            >
              Nutrition information should help you make better decisions, not leave you more confused. Explore practical guides, educational tools, and evidence-based resources created from Maureen's professional experience.
            </motion.p>

            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div style={{ width: "24px", height: "1px", background: "var(--orange)" }} />
              <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--orange)" }}>
                Featured
              </span>
            </div>
            <h2 style={{
              fontFamily: "var(--font-heading)", fontWeight: 800,
              fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.1,
              letterSpacing: "-1px", color: "var(--charcoal-deep)", marginBottom: "clamp(32px, 6vw, 56px)",
            }}>
              Featured Resources
            </h2>

            <div className="resources-grid" style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "clamp(20px, 3vw, 32px)",
            }}>
              {resources.map((res, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  style={{
                    background: "var(--white)", borderRadius: "20px",
                    border: "1px solid var(--border)", display: "flex", flexDirection: "column",
                    overflow: "hidden", boxShadow: "0 4px 20px rgba(0,80,96,0.07)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 60px rgba(0,80,96,0.12)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,80,96,0.07)";
                  }}
                >
                  <div style={{ background: "var(--off-white)", overflow: "hidden" }}>
                    <img
                      src={res.image}
                      alt={res.title}
                      style={{ width: "100%", height: "200px", objectFit: "contain", padding: "16px", display: "block" }}
                    />
                  </div>
                  <div style={{ padding: "clamp(20px, 3vw, 28px)", display: "flex", flexDirection: "column", flex: 1 }}>
                    <div style={{
                      display: "inline-block", background: "rgba(240,128,0,0.1)",
                      padding: "4px 12px", borderRadius: "100px", marginBottom: "16px",
                    }}>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--orange)" }}>
                        Coming with App
                      </p>
                    </div>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(15px, 2vw, 18px)", color: "var(--charcoal-deep)", marginBottom: "8px" }}>
                      {res.title}
                    </h3>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 600, color: "var(--terracotta)", marginBottom: "10px" }}>
                      {res.subtitle}
                    </p>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", lineHeight: 1.65, color: "var(--gray-muted)", flex: 1 }}>
                      {res.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section style={{ background: "var(--off-white)", padding: "clamp(60px, 10vw, 120px) clamp(16px, 5vw, 64px)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div style={{ width: "24px", height: "1px", background: "var(--orange)" }} />
              <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--orange)" }}>
                Browse
              </span>
            </div>
            <h2 style={{
              fontFamily: "var(--font-heading)", fontWeight: 800,
              fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.1,
              letterSpacing: "-1px", color: "var(--charcoal-deep)", marginBottom: "clamp(32px, 6vw, 56px)",
            }}>
              Resource Categories
            </h2>
            <div className="categories-grid" style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "clamp(12px, 2.5vw, 20px)",
            }}>
              {categories.map((cat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  style={{
                    background: "var(--white)", padding: "clamp(18px, 3vw, 28px)", borderRadius: "16px",
                    border: "1px solid var(--border)", textAlign: "center", cursor: "pointer",
                    minHeight: "64px", display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--orange)";
                    el.style.background = "rgba(240,128,0,0.05)";
                    el.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--border)";
                    el.style.background = "var(--white)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  <p style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "clamp(13px, 1.8vw, 16px)", color: "var(--charcoal-deep)" }}>
                    {cat}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How resources help */}
        <section style={{ background: "var(--white)", padding: "clamp(60px, 10vw, 120px) clamp(16px, 5vw, 64px)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div style={{ width: "24px", height: "1px", background: "var(--orange)" }} />
              <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--orange)" }}>
                More Than Information
              </span>
            </div>
            <h2 style={{
              fontFamily: "var(--font-heading)", fontWeight: 800,
              fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.1,
              letterSpacing: "-1px", color: "var(--charcoal-deep)", marginBottom: "clamp(32px, 6vw, 56px)",
            }}>
              Tools Designed to Help You Apply What You Learn
            </h2>
            <div className="help-grid" style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "clamp(16px, 3vw, 24px)",
            }}>
              {[
                { title: "Understand", desc: "Break complicated nutrition topics into clear, practical concepts." },
                { title: "Evaluate", desc: "Learn how to question nutrition claims, marketing messages, and information you encounter online." },
                { title: "Apply", desc: "Turn nutrition knowledge into realistic everyday decisions." },
                { title: "Build", desc: "Develop habits and skills that can become part of your long-term approach to nutrition." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  style={{
                    background: "var(--off-white)", padding: "clamp(24px, 4vw, 36px)", borderRadius: "20px",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div style={{ width: "32px", height: "2px", background: "var(--orange)", borderRadius: "2px", marginBottom: "16px" }} />
                  <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(16px, 2vw, 20px)", color: "var(--charcoal-deep)", marginBottom: "10px" }}>
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

        {/* Coming Soon */}
        <section style={{ background: "var(--off-white)", padding: "clamp(60px, 10vw, 120px) clamp(16px, 5vw, 64px)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div style={{ width: "24px", height: "1px", background: "var(--orange)" }} />
              <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--orange)" }}>
                More Tools. More Guides.
              </span>
            </div>
            <h2 style={{
              fontFamily: "var(--font-heading)", fontWeight: 800,
              fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.1,
              letterSpacing: "-1px", color: "var(--charcoal-deep)", marginBottom: "20px",
            }}>
              Coming Soon
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(15px, 2vw, 18px)", lineHeight: 1.75, color: "var(--charcoal)", marginBottom: "clamp(32px, 6vw, 56px)", maxWidth: "700px" }}>
              TrueDiet is continuously developing new educational resources designed to make nutrition easier to understand and apply.
            </p>
            <div className="soon-grid" style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "clamp(16px, 3vw, 24px)",
            }}>
              {comingSoon.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  style={{
                    background: "var(--white)", padding: "clamp(20px, 3vw, 28px)", borderRadius: "16px", border: "1px solid var(--border)",
                  }}
                >
                  <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(14px, 1.8vw, 16px)", color: "var(--charcoal-deep)", marginBottom: "10px" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(13px, 1.5vw, 14px)", lineHeight: 1.65, color: "var(--gray-muted)", marginBottom: "16px" }}>
                    {item.desc}
                  </p>
                  <span style={{
                    fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600,
                    letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--orange)",
                  }}>
                    Coming to the TrueDiet App
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA — dark */}
        <section style={{ background: "var(--charcoal-deep)", padding: "clamp(60px, 10vw, 120px) clamp(16px, 5vw, 64px)" }}>
          <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 style={{
                fontFamily: "var(--font-heading)", fontWeight: 800,
                fontSize: "clamp(28px, 4.5vw, 52px)", lineHeight: 1.1,
                letterSpacing: "-1px", color: "#ffffff", marginBottom: "20px",
              }}>
                Keep Learning. Keep Questioning.
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(15px, 2vw, 18px)", lineHeight: 1.7, color: "rgba(255,255,255,0.6)", marginBottom: "16px" }}>
                Nutrition doesn&apos;t have to be perfect to be meaningful.
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(15px, 2vw, 18px)", lineHeight: 1.7, color: "rgba(255,255,255,0.6)", marginBottom: "40px" }}>
                Join the TrueDiet waitlist and be the first to know when new guides, tools, and resources become available.
              </p>
              <a href="/contact" style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "10px",
                padding: "16px 36px", borderRadius: "100px", minHeight: "52px",
                background: "var(--orange)", color: "#fff", textDecoration: "none",
                fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "15px",
                transition: "opacity 0.2s, transform 0.2s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.87"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
              >
                Join the TrueDiet Waitlist
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M1 6.5h11M7 2.5l4.5 4-4.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </motion.div>
          </div>
        </section>

        {/* RES Section A — Practical Guides */}
        <section style={{ background: "var(--off-white)", padding: "clamp(60px, 10vw, 120px) clamp(16px, 5vw, 64px)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div style={{ width: "24px", height: "1px", background: "var(--orange)" }} />
              <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--orange)" }}>
                Guides
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
                letterSpacing: "-1px", color: "var(--charcoal-deep)", marginBottom: "20px",
              }}
            >
              Practical Nutrition Guides
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontFamily: "var(--font-body)", fontSize: "clamp(15px, 2vw, 17px)", lineHeight: 1.75, color: "var(--charcoal)", maxWidth: "680px", marginBottom: "clamp(40px, 7vw, 64px)" }}
            >
              Finding reliable nutrition information should not feel overwhelming. These practical guides are designed to turn nutrition knowledge into everyday decisions.
            </motion.p>

            <div className="res-guides-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "clamp(16px, 3vw, 24px)" }}>
              {[
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <rect x="3" y="2" width="16" height="18" rx="2" stroke="white" strokeWidth="1.5"/>
                      <path d="M7 7h8M7 11h8M7 15h5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  ),
                  title: "Meal Planning Guide",
                  desc: "Plan your week without requiring every meal to be perfect. Start with familiar meals, choose versatile ingredients, and stay flexible.",
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path d="M6 2h10l2 4H4L6 2z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                      <path d="M4 6v13a1 1 0 001 1h12a1 1 0 001-1V6" stroke="white" strokeWidth="1.5"/>
                      <path d="M9 11h4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  ),
                  title: "Healthy Grocery Shopping",
                  desc: "A practical guide to building a grocery list that supports meals you will actually prepare and enjoy.",
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <rect x="4" y="2" width="14" height="18" rx="2" stroke="white" strokeWidth="1.5"/>
                      <path d="M8 7h6M8 11h6M8 15h4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M14 2v4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  ),
                  title: "Nutrition Label Guide",
                  desc: "Understand what nutrition labels really tell you and how to use them to make more informed choices.",
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <circle cx="11" cy="11" r="8" stroke="white" strokeWidth="1.5"/>
                      <path d="M11 7v4l3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                  title: "Balanced Plate Guide",
                  desc: "Build meals that provide nourishment and variety without trying to achieve mathematical perfection.",
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path d="M11 3c-2 4-6 5-6 9a6 6 0 0012 0c0-4-4-5-6-9z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                      <path d="M11 12v4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  ),
                  title: "Fiber Rich Foods Guide",
                  desc: "Discover fiber-containing foods and practical ways to include more variety in your eating pattern.",
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -6, boxShadow: "0 24px 64px rgba(0,80,96,0.14)" }}
                  style={{ background: "var(--white)", borderRadius: "16px", border: "1px solid var(--border)", padding: "clamp(20px, 4vw, 32px)", cursor: "default" }}
                >
                  <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "var(--charcoal-deep)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                    {card.icon}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(15px, 2vw, 18px)", color: "var(--charcoal-deep)", marginBottom: "10px" }}>{card.title}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(13px, 1.6vw, 15px)", lineHeight: 1.75, color: "var(--gray-muted)", marginBottom: "16px" }}>{card.desc}</p>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--orange)", background: "rgba(240,128,0,0.1)", padding: "4px 12px", borderRadius: "100px" }}>
                    Coming with App
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* RES Section B — Nutrition Glossary */}
        <section style={{ background: "var(--white)", padding: "clamp(60px, 10vw, 120px) clamp(16px, 5vw, 64px)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div style={{ width: "24px", height: "1px", background: "var(--orange)" }} />
              <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--orange)" }}>
                Glossary
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
                letterSpacing: "-1px", color: "var(--charcoal-deep)", marginBottom: "20px",
              }}
            >
              Nutrition Glossary
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontFamily: "var(--font-body)", fontSize: "clamp(15px, 2vw, 17px)", lineHeight: 1.75, color: "var(--charcoal)", maxWidth: "680px", marginBottom: "clamp(40px, 7vw, 64px)" }}
            >
              Understanding common nutrition terms can make it easier to evaluate information and make informed decisions.
            </motion.p>

            <div className="res-glossary-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "clamp(16px, 3vw, 24px)" }}>
              {[
                { term: "Macronutrients", def: "Nutrients needed in larger amounts: carbohydrates, proteins, and fats." },
                { term: "Micronutrients", def: "Vitamins and minerals needed in smaller amounts to support many body functions." },
                { term: "Fiber", def: "A type of carbohydrate found naturally in fruits, vegetables, whole grains, beans, lentils, nuts, and seeds." },
                { term: "Protein", def: "A nutrient that contributes to many important functions and is found in a wide variety of foods." },
                { term: "Carbohydrates", def: "A major source of energy found in grains, fruits, vegetables, beans, and other foods." },
                { term: "Dietary Fat", def: "A nutrient involved in many important functions and found in a wide variety of foods." },
                { term: "Added Sugar", def: "Sugars added to foods or beverages during processing or preparation." },
                { term: "Serving Size", def: "The standardized amount used on a nutrition label to provide nutritional information." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  style={{ borderLeft: "3px solid var(--terracotta)", paddingLeft: "16px", paddingTop: "4px", paddingBottom: "4px" }}
                >
                  <p style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(14px, 1.8vw, 16px)", color: "var(--charcoal-deep)", marginBottom: "6px" }}>{item.term}</p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(13px, 1.6vw, 15px)", lineHeight: 1.7, color: "var(--gray-muted)" }}>{item.def}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* RES Section C — Questions to Ask */}
        <section style={{ background: "var(--off-white)", padding: "clamp(60px, 10vw, 120px) clamp(16px, 5vw, 64px)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div style={{ width: "24px", height: "1px", background: "var(--orange)" }} />
              <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--orange)" }}>
                Critical Thinking
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
                letterSpacing: "-1px", color: "var(--charcoal-deep)", marginBottom: "20px",
              }}
            >
              Questions to Ask Before Trusting Nutrition Advice
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontFamily: "var(--font-body)", fontSize: "clamp(15px, 2vw, 17px)", lineHeight: 1.75, color: "var(--charcoal)", maxWidth: "680px", marginBottom: "clamp(32px, 6vw, 56px)" }}
            >
              These questions can help you evaluate nutrition claims and become a more informed consumer.
            </motion.p>

            <div style={{ maxWidth: "820px" }}>
              {[
                "Where did this information come from?",
                "Is the source credible?",
                "Is there scientific evidence supporting the claim?",
                "Is someone selling a product or program?",
                "Does the claim promise unusually fast results?",
                "Does it recognize individual differences?",
                "Is the recommendation realistic for everyday life?",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  style={{ display: "flex", alignItems: "flex-start", gap: "clamp(16px, 3vw, 28px)", borderBottom: "1px solid var(--border)", padding: "clamp(16px, 2.5vw, 24px) 0" }}
                >
                  <span style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "32px", color: "var(--charcoal-deep)", lineHeight: 1, flexShrink: 0, minWidth: "40px" }}>{i + 1}</span>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(15px, 2vw, 17px)", lineHeight: 1.75, color: "var(--charcoal)", paddingTop: "6px" }}>{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* RES Section D — FAQ */}
        <section style={{ background: "var(--white)", padding: "clamp(60px, 10vw, 120px) clamp(16px, 5vw, 64px)" }}>
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
                { q: "Are these resources a substitute for individualized advice?", a: "General resources provide useful information, but individual needs can vary significantly. These resources are educational." },
                { q: "Where should I start?", a: "Start with the topic most relevant to your current questions. You do not need to read everything at once." },
                { q: "How can I tell if nutrition information is reliable?", a: "Look at the source, evidence, qualifications, date, and whether claims are supported by credible research." },
                { q: "Should I follow advice from influencers?", a: "Personal experience is not necessarily evidence that a nutrition approach will work for everyone." },
                { q: "Can healthy eating include convenience foods?", a: "Yes. Convenience foods can be part of a balanced eating pattern depending on the product and individual needs." },
                { q: "Is meal preparation necessary?", a: "No. Meal preparation is simply one strategy that can make eating well easier." },
                { q: "Do I need to count every calorie?", a: "Not necessarily. Different people use different approaches. Individual needs and goals matter." },
                { q: "Can I eat at restaurants while maintaining healthy habits?", a: "Yes. Eating at restaurants can fit within an overall balanced eating pattern." },
                { q: "What if nutrition information online contradicts itself?", a: "Look for credible sources and consider speaking with a qualified nutrition professional." },
                { q: "How often should I change my diet?", a: "Sustainable nutrition is generally about building appropriate habits rather than constantly changing your diet." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  style={{ borderBottom: "1px solid var(--border)" }}
                >
                  <button
                    onClick={() => setOpenFaqRes(openFaqRes === i ? null : i)}
                    style={{
                      width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                      padding: "clamp(20px, 3vw, 28px) 0", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: "16px",
                    }}
                  >
                    <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(15px, 2vw, 17px)", color: "var(--charcoal-deep)" }}>{item.q}</span>
                    <motion.span
                      animate={{ rotate: openFaqRes === i ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      style={{ flexShrink: 0, width: "24px", height: "24px", borderRadius: "50%", background: "var(--charcoal-deep)", display: "flex", alignItems: "center", justifyContent: "center" }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M6 1v10M1 6h10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaqRes === i && (
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

        {/* RES Section E — Keep Learning */}
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
                Keep Learning With TrueDiet
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(15px, 2vw, 17px)", lineHeight: 1.75, color: "rgba(255,255,255,0.65)", marginBottom: "20px", maxWidth: "600px", margin: "0 auto 20px" }}>
                Nutrition knowledge becomes more valuable when you can apply it to everyday life. Continue exploring to build your understanding.
              </p>
              <p style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(20px, 3vw, 28px)", color: "var(--orange)", marginBottom: "40px" }}>
                Learn. Understand. Apply.
              </p>
              <a href="/nutrition-education" style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "10px",
                padding: "16px 36px", borderRadius: "100px",
                background: "var(--orange)", color: "#fff", textDecoration: "none",
                fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "15px",
                transition: "opacity 0.2s, transform 0.2s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.87"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
              >
                Nutrition Education
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M1 6.5h11M7 2.5l4.5 4-4.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .resources-grid { grid-template-columns: 1fr !important; }
          .categories-grid { grid-template-columns: 1fr 1fr !important; }
          .help-grid { grid-template-columns: 1fr !important; }
          .soon-grid { grid-template-columns: 1fr !important; }
          .res-guides-grid { grid-template-columns: 1fr !important; }
          .res-glossary-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .categories-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
