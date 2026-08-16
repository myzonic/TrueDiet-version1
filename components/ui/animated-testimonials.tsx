"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src?: string;
};

export function AnimatedTestimonials({ testimonials, autoplay = true }: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = () => {
    setDirection(1);
    setActive((p) => (p + 1) % testimonials.length);
  };
  const prev = () => {
    setDirection(-1);
    setActive((p) => (p - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!autoplay) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [autoplay]);

  const t = testimonials[active];

  return (
    <div style={{
      maxWidth: "860px", margin: "0 auto",
      display: "grid", gridTemplateColumns: "1fr 1.4fr",
      gap: "clamp(32px, 6vw, 72px)", alignItems: "center",
    }} className="testimonials-inner">

      {/* Left — avatar stack */}
      <div style={{ position: "relative", height: "clamp(260px, 35vw, 380px)" }}>
        {testimonials.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: i === active ? 1 : 0.4,
              scale: i === active ? 1 : 0.88,
              zIndex: i === active ? 10 : 5 - Math.abs(i - active),
              y: i === active ? 0 : (i - active) * 20,
              rotateY: i === active ? 0 : (i - active) * 8,
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "absolute", inset: 0,
              borderRadius: "20px", overflow: "hidden",
              background: item.src ? "transparent" : "var(--charcoal-deep)",
              border: "1px solid var(--border)",
            }}
          >
            {item.src ? (
              <img src={item.src} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            ) : (
              <div style={{
                width: "100%", height: "100%",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexDirection: "column", gap: "12px",
              }}>
                <div style={{
                  width: "72px", height: "72px", borderRadius: "50%",
                  background: "rgba(255,255,255,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <span style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "28px", color: "#fff" }}>
                    {item.name[0]}
                  </span>
                </div>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>
                  {item.designation}
                </p>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Right — quote */}
      <div>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 20 * direction }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 * direction }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Quote mark */}
            <div style={{
              fontFamily: "var(--font-heading)", fontSize: "72px", lineHeight: 0.8,
              color: "var(--terracotta)", opacity: 0.3, marginBottom: "16px",
            }}>
              "
            </div>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "clamp(15px, 2vw, 18px)",
              lineHeight: 1.75, color: "var(--charcoal)",
              marginBottom: "32px",
            }}>
              {t.quote}
            </p>
            <div>
              <p style={{
                fontFamily: "var(--font-heading)", fontWeight: 700,
                fontSize: "16px", color: "var(--charcoal-deep)", margin: 0,
              }}>
                {t.name}
              </p>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "12px",
                color: "var(--gray-muted)", marginTop: "4px",
              }}>
                {t.designation}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Nav buttons */}
        <div style={{ display: "flex", gap: "12px", marginTop: "32px" }}>
          <button
            onClick={prev}
            style={{
              width: "40px", height: "40px", borderRadius: "50%",
              border: "1px solid var(--border)", background: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", transition: "background 0.2s, border-color 0.2s",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--charcoal-deep)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--charcoal-deep)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#fff"; (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            onClick={next}
            style={{
              width: "40px", height: "40px", borderRadius: "50%",
              border: "1px solid var(--border)", background: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", transition: "background 0.2s, border-color 0.2s",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--charcoal-deep)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--charcoal-deep)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#fff"; (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Dots */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginLeft: "8px" }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > active ? 1 : -1); setActive(i); }}
                style={{
                  width: i === active ? "20px" : "6px",
                  height: "6px", borderRadius: "100px",
                  background: i === active ? "var(--charcoal-deep)" : "var(--border)",
                  border: "none", padding: 0, cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .testimonials-inner {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
