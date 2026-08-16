"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const items = [
  "Real Nutrition", "Real Science", "Real Results",
  "Evidence-Based", "Registered Dietitian",
  "23 Years Experience", "Medical Nutrition Therapy", "Cut the Noise",
];

export default function Marquee() {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const rows = [row1Ref.current, row2Ref.current];
    rows.forEach((row, idx) => {
      if (!row) return;
      const items = row.querySelectorAll<HTMLSpanElement>(".mq-item");
      const itemW = items[0]?.offsetWidth ?? 200;
      const totalW = itemW * (items.length / 2);

      gsap.to(row, {
        x: idx === 0 ? `-${totalW}px` : `${totalW}px`,
        duration: 32,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % totalW),
        },
      });
    });
  }, { scope: wrapperRef });

  const row = [...items, ...items, ...items, ...items];

  return (
    <div
      ref={wrapperRef}
      style={{
        background: "var(--charcoal-deep)",
        padding: "28px 0",
        overflow: "hidden",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Row 1 — moving left */}
      <div ref={row1Ref} style={{ display: "flex", gap: "0", marginBottom: "10px", willChange: "transform" }}>
        {row.map((item, i) => (
          <span key={i} className="mq-item" style={{ display: "inline-flex", alignItems: "center", gap: "0", flexShrink: 0, paddingRight: "48px" }}>
            <span style={{
              fontFamily: "var(--font-heading)", fontWeight: 700,
              fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.6)", whiteSpace: "nowrap",
            }}>{item}</span>
            <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--orange)", opacity: 0.7, display: "inline-block", flexShrink: 0, marginLeft: "48px" }} />
          </span>
        ))}
      </div>

      {/* Row 2 — moving right */}
      <div ref={row2Ref} style={{ display: "flex", gap: "0", willChange: "transform" }}>
        {[...row].reverse().map((item, i) => (
          <span key={i} className="mq-item" style={{ display: "inline-flex", alignItems: "center", gap: "0", flexShrink: 0, paddingRight: "48px" }}>
            <span style={{
              fontFamily: "var(--font-heading)", fontWeight: 300,
              fontSize: "13px", letterSpacing: "0.2em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.2)", fontStyle: "italic", whiteSpace: "nowrap",
            }}>{item}</span>
            <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "rgba(96,144,0,0.5)", display: "inline-block", flexShrink: 0, marginLeft: "48px" }} />
          </span>
        ))}
      </div>
    </div>
  );
}
