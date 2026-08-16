"use client";

export default function Footer() {
  return (
    <footer style={{ background: "var(--charcoal-deep)", padding: "56px 32px 32px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Top row */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "48px",
          paddingBottom: "40px",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          flexWrap: "wrap",
        }}>
          {/* Logo + tagline */}
          <div style={{ maxWidth: "280px" }}>
            <div style={{ marginBottom: "14px" }}>
              <img src="/logo.png" alt="TrueDiet" style={{ height: "44px", width: "auto", display: "block", filter: "brightness(0) invert(1)" }} />
            </div>
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.45)",
            }}>
              Real Nutrition. Real Science. Real Results. Evidence-based nutrition guidance from Maureen Ashbarry, Registered Dietitian.
            </p>
          </div>

          {/* Nav links */}
          <div style={{ display: "flex", gap: "48px", flexWrap: "wrap" }}>
            <div>
              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.35)",
                marginBottom: "16px",
              }}>
                Navigation
              </p>
              {[
                { label: "About Maureen", href: "#about" },
                { label: "Nutrition", href: "#nutrition" },
                { label: "Resources", href: "#resources" },
                { label: "Contact", href: "#contact" },
              ].map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    display: "block",
                    fontFamily: "var(--font-body)",
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.55)",
                    textDecoration: "none",
                    marginBottom: "10px",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => (e.target as HTMLElement).style.color = "var(--white)"}
                  onMouseLeave={e => (e.target as HTMLElement).style.color = "rgba(255,255,255,0.55)"}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div>
              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.35)",
                marginBottom: "16px",
              }}>
                Get Started
              </p>
              <a
                href="#waitlist"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "11px 20px",
                  borderRadius: "10px",
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "var(--white)",
                  textDecoration: "none",
                  background: "var(--orange)",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "0.85"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "1"}
              >
                Join the Waitlist
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "24px",
          flexWrap: "wrap",
          gap: "12px",
        }}>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "13px",
            color: "rgba(255,255,255,0.3)",
          }}>
            © {new Date().getFullYear()} TrueDiet by Maureen Ashbarry. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Privacy Policy", "Terms of Use"].map(link => (
              <a
                key={link}
                href="#"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.3)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.target as HTMLElement).style.color = "rgba(255,255,255,0.6)"}
                onMouseLeave={e => (e.target as HTMLElement).style.color = "rgba(255,255,255,0.3)"}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
