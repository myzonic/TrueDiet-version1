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
  const [submitted, setSubmitted] = useState(false);
  const { toast, showToast, setToast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast("Message sent successfully! We'll get back to you soon.", "success");
    setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
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
          subtitle="Have a Nutrition Question? Whether you have a question about TrueDiet, the upcoming app, nutrition education, or available resources, we'd love to hear from you."
        />

        <section style={{ background: "var(--white)", padding: "80px 48px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }} className="contact-grid">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 style={{
                  fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "24px",
                  color: "var(--charcoal-deep)", marginBottom: "32px",
                }}>
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} style={{ display: "grid", gap: "24px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                      <input
                        type="text"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        required
                        style={{
                          fontFamily: "var(--font-body)", fontSize: "14px",
                          padding: "12px 16px", borderRadius: "8px",
                          border: "1px solid var(--border)", background: "var(--white)",
                          color: "var(--charcoal)",
                        }}
                      />
                      <input
                        type="text"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        required
                        style={{
                          fontFamily: "var(--font-body)", fontSize: "14px",
                          padding: "12px 16px", borderRadius: "8px",
                          border: "1px solid var(--border)", background: "var(--white)",
                          color: "var(--charcoal)",
                        }}
                      />
                    </div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      style={{
                        fontFamily: "var(--font-body)", fontSize: "14px",
                        padding: "12px 16px", borderRadius: "8px",
                        border: "1px solid var(--border)", background: "var(--white)",
                        color: "var(--charcoal)",
                      }}
                    />
                    <input
                      type="text"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      style={{
                        fontFamily: "var(--font-body)", fontSize: "14px",
                        padding: "12px 16px", borderRadius: "8px",
                        border: "1px solid var(--border)", background: "var(--white)",
                        color: "var(--charcoal)",
                      }}
                    />
                    <textarea
                      placeholder="How Can We Help?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      style={{
                        fontFamily: "var(--font-body)", fontSize: "14px",
                        padding: "12px 16px", borderRadius: "8px",
                        border: "1px solid var(--border)", background: "var(--white)",
                        color: "var(--charcoal)", resize: "none",
                      }}
                    />
                    <button
                      type="submit"
                      style={{
                        padding: "14px 32px", borderRadius: "8px",
                        background: "var(--orange)", color: "#fff", border: "none",
                        fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "14px",
                        cursor: "pointer", transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.background = "var(--charcoal-deep)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.background = "var(--orange)";
                      }}
                    >
                      Send Message
                    </button>
                  </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 style={{
                  fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "24px",
                  color: "var(--charcoal-deep)", marginBottom: "40px",
                }}>
                  Other Ways to Connect
                </h2>

                {/* Email */}
                <div style={{ marginBottom: "40px" }}>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 600,
                    letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--gray-muted)",
                    marginBottom: "12px",
                  }}>
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
                <div style={{ marginBottom: "40px" }}>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 600,
                    letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--gray-muted)",
                    marginBottom: "24px",
                  }}>
                    Follow Us
                  </p>
                  <SocialLinks />
                </div>

                {/* Waitlist */}
                <div style={{
                  background: "var(--off-white)", padding: "32px", borderRadius: "16px",
                  border: "1px solid var(--border)",
                }}>
                  <h3 style={{
                    fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "18px",
                    color: "var(--charcoal-deep)", marginBottom: "12px",
                  }}>
                    Interested in the TrueDiet App?
                  </h3>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "14px", lineHeight: 1.6,
                    color: "var(--gray-muted)", marginBottom: "20px",
                  }}>
                    The app is currently in development. Join the waitlist to receive updates and be among the first to know when TrueDiet launches.
                  </p>
                  <a href="/app" style={{
                    display: "inline-block", padding: "12px 24px", borderRadius: "8px",
                    background: "var(--charcoal-deep)", color: "#fff", textDecoration: "none",
                    fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "14px",
                    transition: "all 0.3s ease",
                  }}>
                    Learn More
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          <style>{`
            @media (max-width: 768px) {
              .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
            }
          `}</style>
        </section>

        {/* Disclaimer */}
        <section style={{ background: "var(--off-white)", padding: "60px 48px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{
              background: "var(--white)", padding: "32px", borderRadius: "12px",
              border: "1px solid var(--border)",
            }}>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "13px", lineHeight: 1.8,
                color: "var(--gray-muted)",
              }}>
                <strong>Important:</strong> The information provided by TrueDiet is intended for educational purposes and is not a substitute for individualized medical or nutrition advice. Always consult your qualified healthcare professional regarding your specific health needs and circumstances.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
