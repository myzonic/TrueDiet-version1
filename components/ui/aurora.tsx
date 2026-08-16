"use client";

export function Aurora({ opacity = 0.55 }: { opacity?: number }) {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", opacity }}>
      <div style={{
        position: "absolute",
        top: "-30%", left: "-20%",
        width: "70%", height: "120%",
        borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(0,80,96,0.45) 0%, rgba(0,80,96,0.1) 50%, transparent 80%)",
        animation: "aurora-drift-1 12s ease-in-out infinite alternate",
        filter: "blur(48px)",
      }} />
      <div style={{
        position: "absolute",
        top: "-10%", right: "-25%",
        width: "65%", height: "100%",
        borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(96,144,0,0.35) 0%, rgba(96,144,0,0.08) 50%, transparent 80%)",
        animation: "aurora-drift-2 15s ease-in-out infinite alternate",
        filter: "blur(56px)",
      }} />
      <div style={{
        position: "absolute",
        bottom: "-20%", left: "30%",
        width: "55%", height: "90%",
        borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(240,128,0,0.2) 0%, rgba(240,128,0,0.04) 50%, transparent 80%)",
        animation: "aurora-drift-3 18s ease-in-out infinite alternate",
        filter: "blur(40px)",
      }} />
      <style>{`
        @keyframes aurora-drift-1 {
          0% { transform: translate(0,0) scale(1); }
          100% { transform: translate(8%,12%) scale(1.15); }
        }
        @keyframes aurora-drift-2 {
          0% { transform: translate(0,0) scale(1.1); }
          100% { transform: translate(-10%,8%) scale(0.95); }
        }
        @keyframes aurora-drift-3 {
          0% { transform: translate(0,0) scale(1); }
          100% { transform: translate(6%,-10%) scale(1.2); }
        }
      `}</style>
    </div>
  );
}
