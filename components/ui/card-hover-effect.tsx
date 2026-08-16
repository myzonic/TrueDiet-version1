"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function HoverEffect({
  items,
  className = "",
}: {
  items: { title: string; description: string; icon?: React.ReactNode }[];
  className?: string;
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={className}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "0",
      }}
    >
      {items.map((item, i) => (
        <div
          key={i}
          style={{ position: "relative", padding: "4px" }}
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === i && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                style={{
                  position: "absolute", inset: "4px",
                  borderRadius: "20px",
                  background: "rgba(0,80,96,0.06)",
                  zIndex: 0,
                }}
              />
            )}
          </AnimatePresence>
          <div
            style={{
              position: "relative", zIndex: 1,
              padding: "32px 28px",
              borderRadius: "16px",
              border: "1px solid var(--border)",
              background: "#fff",
              height: "100%",
              transition: "border-color 0.2s",
              borderColor: hoveredIndex === i ? "rgba(0,80,96,0.2)" : "var(--border)",
            }}
          >
            {item.icon && (
              <div style={{
                width: "48px", height: "48px", borderRadius: "12px",
                background: "var(--blush)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "20px",
              }}>
                {item.icon}
              </div>
            )}
            <h3 style={{
              fontFamily: "var(--font-heading)", fontWeight: 700,
              fontSize: "18px", color: "var(--charcoal-deep)",
              marginBottom: "10px", lineHeight: 1.3,
            }}>
              {item.title}
            </h3>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "14px",
              color: "var(--gray-muted)", lineHeight: 1.7,
            }}>
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
