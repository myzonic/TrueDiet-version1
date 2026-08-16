"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    label: "Home",
    href: "#home",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M3 9.5L10 3l7 6.5V17a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
        <path d="M7 18v-6h6v6" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "About",
    href: "#about",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="7" r="3" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M3 17c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Nutrition",
    href: "#nutrition",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2C6 2 3 6 3 10c0 2.5 1.5 4.5 3 6h8c1.5-1.5 3-3.5 3-6 0-4-3-8-7-8z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
        <path d="M10 2v14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Waitlist",
    href: "#waitlist",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="14" height="13" rx="2" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M3 8h14" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M7 2v3M13 2v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    highlight: true,
  },
];

export default function MobileDock() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1200);

    const handleScroll = () => {
      const sections = ["home", "about", "nutrition", "waitlist"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Mobile navigation dock"
          style={{
            position: "fixed",
            bottom: "24px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 500,
            display: "none",
          }}
          className="mobile-dock"
        >
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            background: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderRadius: "100px",
            padding: "8px 12px",
            border: "1px solid rgba(0,80,96,0.1)",
            boxShadow: "0 8px 32px rgba(0,80,96,0.18), 0 2px 8px rgba(0,0,0,0.06)",
          }}>
            {items.map((item) => {
              const isActive = active === item.href.replace("#", "");
              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  onClick={() => setActive(item.href.replace("#", ""))}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "3px",
                    padding: "8px 14px",
                    borderRadius: "80px",
                    textDecoration: "none",
                    transition: "background 0.2s ease",
                    background: item.highlight
                      ? "var(--orange)"
                      : isActive
                      ? "rgba(0,80,96,0.08)"
                      : "transparent",
                    color: item.highlight
                      ? "#fff"
                      : isActive
                      ? "var(--charcoal-deep)"
                      : "var(--gray-muted)",
                    minWidth: "52px",
                  }}
                >
                  {item.icon}
                  <span style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "9px",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    lineHeight: 1,
                  }}>
                    {item.label}
                  </span>
                </a>
              );
            })}
          </div>
        </motion.nav>
      )}
      <style>{`
        @media (max-width: 768px) {
          .mobile-dock { display: flex !important; }
        }
      `}</style>
    </AnimatePresence>
  );
}
