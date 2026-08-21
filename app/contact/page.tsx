"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import SocialLinks from "@/components/SocialLinks";
import { ToastNotification, useToast } from "@/components/ToastNotification";
import Footer from "@/components/sections/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", subject: "", message: "" });
  const { toast, showToast, setToast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast("Message sent successfully! We'll get back to you soon.", "success");
    setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
  };

  const inputStyle: React.CSSProperties = {
    fontFamily: "var(--font-body)", fontSize: "16px",
    padding: "14px 16px", borderRadius: "10px", minHeight: "50px",
    border: "1.5px solid var(--border)", background: "var(--white)",
    color: "var(--charcoal)", boxSizing: "border-box", width: "100%",
    outline: "none", transition: "border-color 0.2s ease",
    appearance: "none" as any,
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 600,
    color: "var(--charcoal-deep)", display: "block", marginBottom: "8px",
  };

  return (
    <>
      <Header />
      <ToastNotification
        message={toast?.message || ""}
        type={toast?.type || "success"}
        isOpen={!!toast}
        onClose={() => setToast(null)}
      />
      <main>
        <PageHero
          eyebrow="Get in Touch"
          title="Let's Connect"
          subtitle="Have a nutrition question or want to learn more about TrueDiet? We'd love to hear from you."
        />

        <section style={{ background: "var(--white)", padding: "clamp(60px, 10vw, 120px) clamp(16px, 5vw, 64px)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div className="contact-grid" style={{
              display: "grid", gridTemplateColumns: "1fr 1fr",
              gap: "clamp(40px, 7vw, 100px)", alignItems: "start",
            }}>
              {/* Form — left */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                  <div style={{ width: "24px", height: "1px", background: "var(--orange)" }} />
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--orange)" }}>
                    Message Us
                  </span>
                </div>
                <h2 style={{
                  fontFamily: "var(--font-heading)", fontWeight: 800,
                  fontSize: "clamp(22px, 3vw, 36px)", lineHeight: 1.1,
                  color: "var(--charcoal-deep)", marginBottom: "32px", letterSpacing: "-0.5px",
                }}>
                  Send us a Message
                </h2>

                <form onSubmit={handleSubmit} style={{ display: "grid", gap: "20px" }}>
                  {/* Name row */}
                  <div className="name-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    <div>
                      <label style={labelStyle}>First Name</label>
                      <input
                        type="text"
                        placeholder="Jane"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        required
                        style={inputStyle}
                        onFocus={e => (e.target as HTMLInputElement).style.borderColor = "var(--charcoal-deep)"}
                        onBlur={e => (e.target as HTMLInputElement).style.borderColor = "var(--border)"}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Last Name</label>
                      <input
                        type="text"
                        placeholder="Smith"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        required
                        style={inputStyle}
                        onFocus={e => (e.target as HTMLInputElement).style.borderColor = "var(--charcoal-deep)"}
                        onBlur={e => (e.target as HTMLInputElement).style.borderColor = "var(--border)"}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Email Address</label>
                    <input
                      type="email"
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      style={inputStyle}
                      onFocus={e => (e.target as HTMLInputElement).style.borderColor = "var(--charcoal-deep)"}
                      onBlur={e => (e.target as HTMLInputElement).style.borderColor = "var(--border)"}
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>Subject</label>
                    <input
                      type="text"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      style={inputStyle}
                      onFocus={e => (e.target as HTMLInputElement).style.borderColor = "var(--charcoal-deep)"}
                      onBlur={e => (e.target as HTMLInputElement).style.borderColor = "var(--border)"}
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>Message</label>
                    <textarea
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                      style={{
                        ...inputStyle,
                        minHeight: "140px", resize: "vertical" as any,
                      }}
                      onFocus={e => (e.target as HTMLTextAreaElement).style.borderColor = "var(--charcoal-deep)"}
                      onBlur={e => (e.target as HTMLTextAreaElement).style.borderColor = "var(--border)"}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      padding: "16px 32px", borderRadius: "10px", minHeight: "52px",
                      background: "var(--orange)", color: "#fff", border: "none",
                      fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "15px",
                      cursor: "pointer", width: "100%",
                      transition: "background 0.2s ease, transform 0.2s ease",
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLButtonElement).style.background = "var(--charcoal-deep)";
                      (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLButtonElement).style.background = "var(--orange)";
                      (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                    }}
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>

              {/* Info — right */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                  <div style={{ width: "24px", height: "1px", background: "var(--orange)" }} />
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--orange)" }}>
                    Connect
                  </span>
                </div>
                <h2 style={{
                  fontFamily: "var(--font-heading)", fontWeight: 800,
                  fontSize: "clamp(22px, 3vw, 36px)", lineHeight: 1.1,
                  color: "var(--charcoal-deep)", marginBottom: "40px", letterSpacing: "-0.5px",
                }}>
                  Other Ways to Connect
                </h2>

                {/* Email */}
                <div style={{
                  padding: "clamp(20px, 3vw, 28px)", borderRadius: "16px", border: "1px solid var(--border)",
                  background: "var(--off-white)", marginBottom: "24px",
                }}>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gray-muted)", marginBottom: "12px" }}>
                    Email
                  </p>
                  <a href="mailto:contact@truediet.com" style={{
                    fontFamily: "var(--font-body)", fontSize: "16px", fontWeight: 500,
                    color: "var(--charcoal-deep)", textDecoration: "none",
                  }}>
                    [Email coming soon]
                  </a>
                </div>

                {/* Social */}
                <div style={{
                  padding: "clamp(20px, 3vw, 28px)", borderRadius: "16px", border: "1px solid var(--border)",
                  background: "var(--off-white)", marginBottom: "24px",
                }}>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gray-muted)", marginBottom: "20px" }}>
                    Follow Us
                  </p>
                  <SocialLinks />
                </div>

                {/* Waitlist card */}
                <div style={{
                  background: "var(--charcoal-deep)", padding: "clamp(24px, 4vw, 36px)", borderRadius: "20px",
                }}>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(16px, 2vw, 20px)", color: "#ffffff", marginBottom: "12px" }}>
                    Interested in the TrueDiet App?
                  </h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", lineHeight: 1.65, color: "rgba(255,255,255,0.6)", marginBottom: "24px" }}>
                    The app is currently in development. Join the waitlist to receive updates and be among the first to know when TrueDiet launches.
                  </p>
                  <a href="/app" style={{
                    display: "inline-flex", alignItems: "center", gap: "8px",
                    padding: "12px 24px", borderRadius: "10px", minHeight: "44px",
                    background: "var(--orange)", color: "#fff", textDecoration: "none",
                    fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "14px",
                    transition: "opacity 0.2s ease",
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "0.87"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "1"}
                  >
                    Learn More About the App
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section style={{ background: "var(--off-white)", padding: "clamp(32px, 5vw, 60px) clamp(16px, 5vw, 64px)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{
              background: "var(--white)", padding: "clamp(20px, 3vw, 28px)", borderRadius: "12px",
              border: "1px solid var(--border)",
            }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", lineHeight: 1.8, color: "var(--gray-muted)" }}>
                <strong style={{ color: "var(--charcoal-deep)" }}>Important:</strong> The information provided by TrueDiet is intended for educational purposes and is not a substitute for individualized medical or nutrition advice. Always consult your qualified healthcare professional regarding your specific health needs and circumstances.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .name-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
