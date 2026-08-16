"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Maureen", href: "#about" },
  { label: "Nutrition", href: "#nutrition" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 100,
          transition: "background 0.4s ease, backdrop-filter 0.4s ease, box-shadow 0.4s ease",
          background: scrolled ? "rgba(255,255,255,0.94)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          boxShadow: scrolled ? "0 1px 0 rgba(0,80,96,0.08)" : "none",
        }}
      >
        <div style={{
          maxWidth: "1280px", margin: "0 auto", padding: "0 32px",
          height: scrolled ? "68px" : "80px",
          transition: "height 0.4s ease",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          {/* Logo */}
          <a href="#home" style={{ textDecoration: "none", position: "relative", zIndex: 200 }}>
            <img src="/logo.png" alt="TrueDiet" style={{ height: "60px", width: "auto", display: "block" }} />
          </a>

          {/* Desktop Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: "8px" }} className="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: 500,
                  color: "var(--charcoal)", textDecoration: "none",
                  padding: "8px 14px", borderRadius: "8px",
                  transition: "color 0.2s ease, background 0.2s ease",
                }}
                onMouseEnter={e => {
                  (e.target as HTMLElement).style.color = "var(--charcoal-deep)";
                  (e.target as HTMLElement).style.background = "rgba(0,80,96,0.06)";
                }}
                onMouseLeave={e => {
                  (e.target as HTMLElement).style.color = "var(--charcoal)";
                  (e.target as HTMLElement).style.background = "transparent";
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#waitlist"
              style={{
                marginLeft: "8px",
                fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: 600,
                color: "var(--white)", textDecoration: "none",
                padding: "10px 20px", borderRadius: "10px",
                background: "var(--orange)",
                transition: "opacity 0.2s ease, transform 0.2s ease",
                display: "inline-block",
              }}
              onMouseEnter={e => {
                (e.target as HTMLElement).style.opacity = "0.88";
                (e.target as HTMLElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={e => {
                (e.target as HTMLElement).style.opacity = "1";
                (e.target as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Join the Waitlist
            </a>
          </nav>

          {/* Hamburger Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="mobile-menu-btn"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            style={{
              background: "none", border: "none", cursor: "pointer",
              padding: "8px", display: "none",
              position: "relative", zIndex: 200,
              width: "44px", height: "44px",
              alignItems: "center", justifyContent: "center",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "5px", width: "22px" }}>
              <motion.span
                animate={mobileOpen
                  ? { rotate: 45, y: 7, background: "#fff" }
                  : { rotate: 0, y: 0, background: "var(--charcoal-deep)" }
                }
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                style={{ display: "block", height: "2px", borderRadius: "2px", transformOrigin: "center" }}
              />
              <motion.span
                animate={mobileOpen
                  ? { opacity: 0, scaleX: 0 }
                  : { opacity: 1, scaleX: 1 }
                }
                transition={{ duration: 0.2 }}
                style={{ display: "block", height: "2px", borderRadius: "2px", background: "var(--charcoal-deep)", transformOrigin: "center" }}
              />
              <motion.span
                animate={mobileOpen
                  ? { rotate: -45, y: -7, background: "#fff" }
                  : { rotate: 0, y: 0, background: "var(--charcoal-deep)" }
                }
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                style={{ display: "block", height: "2px", borderRadius: "2px", transformOrigin: "center" }}
              />
            </div>
          </button>
        </div>
      </motion.header>

      {/* Full-screen mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "fixed", inset: 0, zIndex: 90,
              background: "var(--charcoal-deep)",
              display: "flex", flexDirection: "column",
              padding: "120px 40px 60px",
            }}
          >
            {/* Background orb decoration */}
            <div style={{
              position: "absolute", bottom: "-10%", right: "-10%",
              width: "300px", height: "300px", borderRadius: "50%",
              background: "radial-gradient(circle, rgba(240,128,0,0.15) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />
            <div style={{
              position: "absolute", top: "20%", left: "-5%",
              width: "200px", height: "200px", borderRadius: "50%",
              background: "radial-gradient(circle, rgba(96,144,0,0.1) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />

            {/* Nav links */}
            <nav style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      padding: "20px 0", textDecoration: "none",
                    }}
                  >
                    <span style={{
                      fontFamily: "var(--font-heading)", fontWeight: 800,
                      fontSize: "clamp(28px, 8vw, 48px)",
                      color: "#fff", letterSpacing: "-1px",
                    }}>
                      {link.label}
                    </span>
                    <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "11px", fontFamily: "var(--font-body)", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                      0{i + 1}
                    </span>
                  </a>
                </motion.div>
              ))}
            </nav>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              <a
                href="#waitlist"
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
                  padding: "18px 32px", borderRadius: "100px",
                  fontFamily: "var(--font-body)", fontSize: "15px", fontWeight: 700,
                  color: "#fff", textDecoration: "none",
                  background: "var(--orange)",
                  boxShadow: "0 12px 40px rgba(240,128,0,0.35)",
                }}
              >
                Join the Waitlist
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M8 3l5 4-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              <p style={{
                fontFamily: "var(--font-body)", fontSize: "11px",
                color: "rgba(255,255,255,0.3)", textAlign: "center",
                marginTop: "20px", letterSpacing: "0.06em",
              }}>
                TRUEDIET · BY MAUREEN ASHBARRY, RD
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
