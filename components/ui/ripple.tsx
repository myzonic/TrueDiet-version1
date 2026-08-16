"use client";

export function Ripple({
  color = "rgba(0,80,96,0.12)",
  count = 5,
  size = 200,
}: {
  color?: string;
  count?: number;
  size?: number;
}) {
  return (
    <div style={{
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      pointerEvents: "none",
      overflow: "hidden",
    }}>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            borderRadius: "50%",
            border: `1.5px solid ${color}`,
            width: `${size + i * 80}px`,
            height: `${size + i * 80}px`,
            animation: `ripple-expand 3.5s ease-out ${i * 0.6}s infinite`,
            opacity: 0,
            willChange: "transform, opacity",
            transform: "translateZ(0)",
            backfaceVisibility: "hidden" as const,
          }}
        />
      ))}
      <style>{`
        @keyframes ripple-expand {
          0% { transform: scale(0.6); opacity: 0.8; }
          100% { transform: scale(1.4); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
