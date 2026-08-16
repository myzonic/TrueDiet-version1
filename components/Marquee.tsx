"use client";

const items = [
  "Real Nutrition", "Real Science", "Real Results",
  "Evidence-Based", "Registered Dietitian",
  "23 Years Experience", "Medical Nutrition Therapy", "Cut the Noise",
];

function MarqueeItem({ text, dim }: { text: string; dim?: boolean }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", flexShrink: 0, paddingRight: "48px" }}>
      <span style={{
        fontFamily: "var(--font-heading)", fontWeight: dim ? 300 : 700,
        fontSize: "13px", letterSpacing: dim ? "0.2em" : "0.12em",
        textTransform: "uppercase", whiteSpace: "nowrap",
        color: dim ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.65)",
        fontStyle: dim ? "italic" : "normal",
      }}>{text}</span>
      <span style={{
        width: "4px", height: "4px", borderRadius: "50%",
        background: dim ? "rgba(96,144,0,0.5)" : "var(--orange)",
        opacity: 0.75, display: "inline-block", flexShrink: 0, marginLeft: "48px",
      }} />
    </span>
  );
}

function MarqueeRow({ reverse, dim }: { reverse?: boolean; dim?: boolean }) {
  const list = dim ? [...items].reverse() : items;
  // Duplicate for seamless loop
  const doubled = [...list, ...list];
  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: `marquee-scroll${reverse ? "-rev" : ""} 28s linear infinite`,
          willChange: "transform",
        }}
      >
        {doubled.map((item, i) => (
          <MarqueeItem key={i} text={item} dim={dim} />
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <div style={{
      background: "var(--charcoal-deep)",
      padding: "28px 0",
      overflow: "hidden",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
    }}>
      <div style={{ marginBottom: "10px" }}>
        <MarqueeRow />
      </div>
      <MarqueeRow reverse dim />

      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marquee-scroll-rev {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
