"use client";

import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    color: "#1877F2",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    color: "#E1306C",
    gradient: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    color: "#0A66C2",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.424-.103.249-.129.597-.129.946v5.435h-3.554s.047-8.814 0-9.722h3.554v1.375c.427-.659 1.19-1.597 2.898-1.597 2.117 0 3.704 1.384 3.704 4.363v5.581zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.955.77-1.71 1.955-1.71 1.187 0 1.918.755 1.933 1.71 0 .951-.746 1.71-1.973 1.71zm1.581 11.597H3.714V9.505h3.204v10.947zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "#",
    color: "#000000",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.22-6.817-5.974 6.817H2.066l7.755-8.876L1.154 2.25h6.837l4.716 6.231 5.441-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "#",
    color: "#000000",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.79a8.18 8.18 0 004.79 1.52V6.86a4.85 4.85 0 01-1.02-.17z"/>
      </svg>
    ),
  },
];

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  variant?: "default" | "dark" | "branded";
}

export default function SocialLinks({ className = "", iconSize = 20, variant = "default" }: SocialLinksProps) {
  const isDark = variant === "dark";
  const isBranded = variant === "branded";

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }} className={className}>
      {socialLinks.map((link, i) => (
        <motion.a
          key={link.name}
          href={link.href}
          aria-label={link.name}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: i * 0.07 }}
          whileHover={{ scale: 1.12, y: -3 }}
          whileTap={{ scale: 0.92 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "44px",
            height: "44px",
            borderRadius: "12px",
            border: isDark
              ? "1px solid rgba(255,255,255,0.12)"
              : "1px solid var(--border)",
            background: isDark ? "rgba(255,255,255,0.06)" : "var(--white)",
            color: isDark ? "rgba(255,255,255,0.7)" : "var(--charcoal)",
            textDecoration: "none",
            transition: "all 0.25s ease",
            cursor: "pointer",
            flexShrink: 0,
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            if (isBranded) {
              el.style.background = link.gradient || link.color;
              el.style.color = "#fff";
              el.style.border = `1px solid transparent`;
            } else if (isDark) {
              el.style.background = "rgba(255,255,255,0.15)";
              el.style.color = "#fff";
              el.style.border = "1px solid rgba(255,255,255,0.25)";
            } else {
              el.style.background = "var(--charcoal-deep)";
              el.style.color = "#fff";
              el.style.border = "1px solid var(--charcoal-deep)";
            }
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.background = isDark ? "rgba(255,255,255,0.06)" : "var(--white)";
            el.style.color = isDark ? "rgba(255,255,255,0.7)" : "var(--charcoal)";
            el.style.border = isDark ? "1px solid rgba(255,255,255,0.12)" : "1px solid var(--border)";
          }}
        >
          {link.icon}
        </motion.a>
      ))}
    </div>
  );
}
