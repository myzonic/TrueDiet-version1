"use client";

import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  return (
    <footer style={{ background: "var(--charcoal-deep)", padding: "clamp(48px, 8vw, 80px) clamp(16px, 5vw, 64px) clamp(24px, 4vw, 40px)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Top row */}
        <div className="footer-top" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "clamp(32px, 6vw, 64px)",
          paddingBottom: "clamp(32px, 6vw, 56px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}>
          {/* Logo + tagline */}
          <div>
            <div style={{ marginBottom: "16px" }}>
              <img src="/logo.png" alt="TrueDiet" style={{ height: "44px", width: "auto", display: "block", filter: "brightness(0) invert(1)" }} />
            </div>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "14px", lineHeight: 1.7,
              color: "rgba(255,255,255,0.45)", maxWidth: "260px",
            }}>
              Real Nutrition. Real Science. Real Results. Evidence-based guidance from Maureen Ashbarry, Registered Dietitian.
            </p>
            <div style={{ marginTop: "24px" }}>
              <SocialLinks variant="dark" iconSize={18} />
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600,
              letterSpacing: "0.1em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)", marginBottom: "20px",
            }}>
              Navigation
            </p>
            {[
              { label: "About Maureen", href: "/about" },
              { label: "Nutrition Education", href: "/nutrition-education" },
              { label: "Resources", href: "/resources" },
              { label: "Contact", href: "/contact" },
            ].map(link => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  display: "block",
                  fontFamily: "var(--font-body)", fontSize: "14px",
                  color: "rgba(255,255,255,0.55)", textDecoration: "none",
                  marginBottom: "12px", minHeight: "20px",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.target as HTMLElement).style.color = "var(--white)"}
                onMouseLeave={e => (e.target as HTMLElement).style.color = "rgba(255,255,255,0.55)"}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600,
              letterSpacing: "0.1em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)", marginBottom: "20px",
            }}>
              Get Started
            </p>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "14px", lineHeight: 1.6,
              color: "rgba(255,255,255,0.45)", marginBottom: "20px",
            }}>
              Join the waitlist and be first to access TrueDiet when we launch.
            </p>
            <a
              href="#waitlist"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "12px 22px", borderRadius: "10px",
                fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: 600,
                color: "var(--white)", textDecoration: "none",
                background: "var(--orange)", minHeight: "44px",
                transition: "opacity 0.2s, transform 0.2s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.87"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
            >
              Join the Waitlist
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 6h10M6.5 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="footer-bottom" style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          paddingTop: "clamp(20px, 3vw, 28px)", flexWrap: "wrap", gap: "12px",
        }}>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "13px",
            color: "rgba(255,255,255,0.28)",
          }}>
            © {new Date().getFullYear()} TrueDiet by Maureen Ashbarry. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Privacy Policy", "Terms of Use"].map(link => (
              <a
                key={link}
                href="#"
                style={{
                  fontFamily: "var(--font-body)", fontSize: "13px",
                  color: "rgba(255,255,255,0.28)", textDecoration: "none", minHeight: "44px",
                  display: "inline-flex", alignItems: "center",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.target as HTMLElement).style.color = "rgba(255,255,255,0.6)"}
                onMouseLeave={e => (e.target as HTMLElement).style.color = "rgba(255,255,255,0.28)"}
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Credit line */}
        <div style={{
          textAlign: "center",
          paddingTop: "clamp(16px, 3vw, 24px)",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          marginTop: "clamp(16px, 3vw, 24px)",
        }}>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "12px",
            color: "rgba(255,255,255,0.55)",
            margin: 0,
          }}>
            Design & Developed with ❤️ by <a href="https://myzonic.com" style={{ color: "rgba(255,255,255,0.65)", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={e => (e.target as HTMLElement).style.color = "var(--orange)"} onMouseLeave={e => (e.target as HTMLElement).style.color = "rgba(255,255,255,0.65)"}>Myzonic.com</a>
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-top {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </footer>
  );
}
