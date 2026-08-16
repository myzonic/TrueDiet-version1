"use client";
import { useState } from "react";
import { motion, AnimatePresence, useTransform, useMotionValue, useSpring } from "framer-motion";

export function AnimatedTooltip({
  items,
}: {
  items: { id: number; name: string; designation: string; image?: string; initials?: string }[];
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const halfWidth = rect.width / 2;
    x.set(e.clientX - rect.left - halfWidth);
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
      {items.map((item) => (
        <div
          key={item.id}
          style={{ position: "relative", display: "inline-block" }}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
          onMouseMove={handleMouseMove}
        >
          <AnimatePresence>
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{ opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 260, damping: 10 } }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  position: "absolute", bottom: "calc(100% + 10px)",
                  left: "50%", transform: "translateX(-50%)",
                  translateX,
                  rotate,
                  whiteSpace: "nowrap",
                  zIndex: 50,
                }}
              >
                <div style={{
                  background: "var(--charcoal-deep)",
                  borderRadius: "10px",
                  padding: "8px 14px",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                }}>
                  <p style={{
                    fontFamily: "var(--font-heading)", fontWeight: 700,
                    fontSize: "12px", color: "#fff", margin: 0,
                  }}>
                    {item.name}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "11px",
                    color: "rgba(255,255,255,0.6)", margin: "2px 0 0",
                  }}>
                    {item.designation}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div style={{
            width: "52px", height: "52px", borderRadius: "50%",
            background: "var(--charcoal-deep)",
            display: "flex", alignItems: "center", justifyContent: "center",
            border: "2px solid #fff",
            boxShadow: "0 4px 12px rgba(0,80,96,0.2)",
            cursor: "default",
          }}>
            {item.image ? (
              <img src={item.image} alt={item.name} style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover" }} />
            ) : (
              <span style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "16px", color: "#fff" }}>
                {item.initials}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
