"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";
import { FlipWords } from "@/components/ui/flip-words";
import { SparklesCore } from "@/components/ui/sparkles";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { MorphingText } from "@/components/ui/morphing-text";

// Rotating cursor follower label shown on hero image hover
function CursorFollower({ visible, x, y }: { visible: boolean; x: number; y: number }) {
  return (
    <motion.div
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.7 }}
      transition={{ duration: 0.25 }}
      style={{
        position: "fixed", top: y - 40, left: x - 40,
        width: "80px", height: "80px",
        pointerEvents: "none", zIndex: 9000,
      }}
    >
      {/* Rotating text ring */}
      <svg viewBox="0 0 80 80" width="80" height="80" style={{ position: "absolute", inset: 0 }}>
        <defs>
          <path id="circle-path" d="M 40,40 m -28,0 a 28,28 0 1,1 56,0 a 28,28 0 1,1 -56,0" />
        </defs>
        <motion.text
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "40px 40px", fontSize: "9px", fill: "var(--charcoal-deep)", fontFamily: "var(--font-body)", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}
        >
          <textPath href="#circle-path">Evidence-Based · Science-First ·</textPath>
        </motion.text>
      </svg>
      {/* Center dot */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%,-50%)",
        width: "8px", height: "8px", borderRadius: "50%",
        background: "var(--orange)",
      }} />
    </motion.div>
  );
}

const charVariant: Variants = {
  hidden: { y: "110%", opacity: 0 },
  visible: (i: number) => ({
    y: "0%", opacity: 1,
    transition: { duration: 0.75, delay: 0.3 + i * 0.035, ease: [0.22, 1, 0.36, 1] },
  }),
};

function SplitLine({ text, startIndex, color }: { text: string; startIndex: number; color?: string }) {
  return (
    <span style={{ display: "block", overflow: "hidden", lineHeight: 1.05, color: color || "var(--charcoal-deep)", textAlign: "left", whiteSpace: "nowrap" }}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          custom={startIndex + i}
          variants={charVariant}
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

function MagneticButton({ href, children, primary }: { href: string; children: React.ReactNode; primary?: boolean }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.35;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.35;
    setPos({ x, y });
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      data-magnetic
      style={{
        display: "inline-flex", alignItems: "center", gap: "10px",
        padding: primary ? "16px 32px" : "15px 30px",
        borderRadius: "100px",
        fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: 600,
        letterSpacing: "0.02em", textDecoration: "none",
        position: "relative", overflow: "hidden",
        ...(primary
          ? { background: "var(--orange)", color: "#fff", border: "none" }
          : { background: "transparent", color: "var(--charcoal-deep)", border: "1.5px solid rgba(0,80,96,0.25)" }),
      }}
    >
      {primary && (
        <motion.span
          style={{ position: "absolute", inset: 0, borderRadius: "100px", background: "rgba(0,0,0,0.12)", opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}
      <span style={{ position: "relative", zIndex: 1 }}>{children}</span>
      {primary && (
        <span style={{ position: "relative", zIndex: 1 }}>
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M1 6.5h11M7 2.5l4.5 4-4.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      )}
    </motion.a>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [videoVisible, setVideoVisible] = useState(false);

  // Show video after 2s on mount (mobile only — CSS hides on desktop)
  useEffect(() => {
    const t = setTimeout(() => setVideoVisible(true), 5000);
    return () => clearTimeout(t);
  }, []);

  const handleImageMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      style={{ position: "relative", minHeight: "100dvh", overflow: "hidden", background: "#fff" }}
    >
      <CursorFollower visible={cursorVisible} x={cursorPos.x} y={cursorPos.y} />
      <Spotlight className="hero-spotlight" fill="rgba(0,80,96,0.07)" />
      <SparklesCore
        particleDensity={40}
        particleColor="#005060"
        minSize={0.6}
        maxSize={1.2}
        className="hero-sparkles"
      />

      {/* Full-bleed image — right half */}
      <div
        style={{
          position: "absolute", top: 0, right: 0,
          width: "52%", height: "100%",
          overflow: "hidden", zIndex: 0, cursor: "none",
        }}
        className="hero-img-wrap"
        onMouseEnter={() => setCursorVisible(true)}
        onMouseLeave={() => setCursorVisible(false)}
        onMouseMove={handleImageMouseMove}
      >
        <motion.div style={{ scale: imageScale, y: imageY, height: "100%", transformOrigin: "center top" }}>
          <motion.img
            src="https://images.unsplash.com/photo-1543362906-acfc16c67564?w=1200&q=90&auto=format"
            alt="Fresh nutritious food"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </motion.div>
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(90deg, #fff 0%, rgba(255,255,255,0.2) 40%, transparent 100%)",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(0deg, rgba(255,255,255,0.5) 0%, transparent 40%)",
        }} />
      </div>

      {/* Noise grain */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`,
        opacity: 0.4,
      }} />

      {/* Content */}
      <motion.div style={{ y: textY, opacity, position: "relative", zIndex: 10 }} className="hero-content">
        <div style={{
          maxWidth: "1280px", margin: "0 auto", padding: "0 48px",
          minHeight: "100dvh", display: "flex", flexDirection: "column",
          justifyContent: "center", paddingTop: "120px", paddingBottom: "80px",
        }}>
          {/* Label with MorphingText */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "32px", width: "fit-content" }}
          >
            <div style={{ width: "48px", height: "3px", background: "var(--terracotta)", borderRadius: "3px" }} />
            {/* Desktop: animated MorphingText */}
            <MorphingText
              texts={["Registered Dietitian", "23 Years Experience", "Evidence-Based", "Science-First"]}
              className="hero-morphing hero-label-desktop"
            />
            {/* Mobile: static label, no SVG lag */}
            <span className="hero-label-mobile" style={{
              fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 600,
              letterSpacing: "0.13em", textTransform: "uppercase", color: "var(--terracotta)",
              display: "none",
            }}>
              Registered Dietitian
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial="hidden"
            animate="visible"
            style={{
              fontFamily: "var(--font-heading)", fontWeight: 800,
              fontSize: "clamp(44px, 7vw, 110px)",
              lineHeight: 1.0, letterSpacing: "-3px",
              marginBottom: "36px", maxWidth: "640px",
              textAlign: "left",
            }}
          >
            <SplitLine text="Real Nutrition." startIndex={0} />
            <SplitLine text="Real Science." startIndex={16} color="var(--terracotta)" />
            <SplitLine text="Real Results." startIndex={30} color="var(--orange)" />
          </motion.h1>

          {/* Subline with FlipWords */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ marginBottom: "52px", maxWidth: "480px" }}
          >
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.7,
              color: "var(--charcoal)",
              borderLeft: "3px solid var(--terracotta)", paddingLeft: "22px",
            }}>
              Nutrition that is{" "}
              <span style={{ color: "var(--charcoal-deep)", fontWeight: 700, position: "relative", display: "inline-block", minWidth: "160px" }}>
                <FlipWords words={["Evidence-Based", "Science-First", "No-Gimmicks", "Trustworthy"]} duration={2800} />
              </span>
              <br />from a Registered Dietitian with 23 years of experience.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}
          >
            <ShimmerButton type="button" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Join the Waitlist
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M1 6.5h11M7 2.5l4.5 4-4.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </ShimmerButton>
            <MagneticButton href="#about">Meet Maureen</MagneticButton>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            style={{ position: "absolute", bottom: "40px", left: "48px", display: "flex", alignItems: "center", gap: "14px" }}
          >
            <motion.div
              animate={{ scaleY: [1, 0.3, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              style={{
                width: "1px", height: "40px",
                background: "linear-gradient(to bottom, var(--terracotta), transparent)",
                transformOrigin: "top",
              }}
            />
            <span style={{
              fontFamily: "var(--font-body)", fontSize: "12px",
              letterSpacing: "0.2em", textTransform: "uppercase",
              color: "var(--gray-muted)", writingMode: "vertical-rl",
            }}>Scroll</span>
          </motion.div>

          {/* Floating stat card */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "absolute", bottom: "120px", right: "calc(52% - 100px)",
              background: "rgba(255,255,255,0.94)", backdropFilter: "blur(20px)",
              borderRadius: "16px", padding: "20px 24px",
              boxShadow: "0 8px 40px rgba(0,80,96,0.12), 0 0 0 1px rgba(0,80,96,0.06)",
              display: "flex", alignItems: "center", gap: "16px", zIndex: 10,
            }}
            className="hero-card"
          >
            <div style={{
              width: "44px", height: "44px", borderRadius: "12px",
              background: "var(--blush)",
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8" stroke="var(--charcoal-deep)" strokeWidth="1.5"/>
                <path d="M7 10l2 2 4-4" stroke="var(--charcoal-deep)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "22px", color: "var(--charcoal-deep)", lineHeight: 1 }}>23+</p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "var(--gray-muted)", marginTop: "3px", letterSpacing: "0.04em" }}>Years as Registered Dietitian</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile-only background image + video */}
      <div className="hero-mobile-bg" style={{ display: "none", position: "absolute", inset: 0, zIndex: 0 }}>
        {/* Static image — always visible */}
        <img
          src="/hero-mobile.jpg"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            objectFit: "cover", objectPosition: "center right",
            opacity: 0.5, zIndex: 0,
          }}
        />
        {/* Video — fades in after 2s */}
        <motion.video
          src="/hero-mobile.mp4"
          autoPlay
          muted
          loop
          playsInline
          initial={{ opacity: 0 }}
          animate={{ opacity: videoVisible ? 0.5 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            objectFit: "cover", objectPosition: "center",
            zIndex: 1,
          }}
        />
        <div style={{
          position: "absolute", inset: 0, zIndex: 2,
          background: "linear-gradient(180deg, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.6) 40%, rgba(255,255,255,0.75) 100%)",
        }} />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-mobile-bg { display: block !important; }
          .hero-img-wrap { display: none !important; }
          .hero-card { display: none !important; }

          /* Layout */
          .hero-content > div {
            padding: 96px 24px 80px !important;
            min-height: unset !important;
            justify-content: flex-start !important;
            padding-top: 110px !important;
          }

          /* Label row */
          .hero-content > div > div:first-child {
            margin-bottom: 20px !important;
          }

          /* H1 */
          .hero-content h1 {
            font-size: clamp(34px, 9.5vw, 52px) !important;
            letter-spacing: -0.5px !important;
            line-height: 1.08 !important;
            margin-bottom: 24px !important;
            max-width: 100% !important;
          }

          /* Subline container */
          .hero-content h1 + div {
            margin-bottom: 32px !important;
            max-width: 100% !important;
          }

          /* Subline paragraph */
          .hero-content p {
            font-size: 15px !important;
            line-height: 1.65 !important;
          }

          /* Scroll hint */
          .hero-content > div > div[style*="bottom: 40px"] {
            display: none !important;
          }

          /* Label: hide morphing SVG, show static text */
          .hero-label-desktop { display: none !important; }
          .hero-label-mobile { display: inline !important; }

          /* Force framer-motion opacity reset */
          .hero-content h1,
          .hero-content h1 span,
          .hero-content p,
          .hero-content a,
          .hero-content span {
            opacity: 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
