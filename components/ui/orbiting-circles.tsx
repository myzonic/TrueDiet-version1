"use client";
import React from "react";
import { motion } from "framer-motion";

interface OrbitItem {
  label: string;
  icon?: React.ReactNode;
  radius?: number;
  duration?: number;
  delay?: number;
  reverse?: boolean;
}

export function OrbitingCircles({
  items,
  center,
  size = 280,
  className = "",
}: {
  items: OrbitItem[];
  center?: React.ReactNode;
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={className}
      style={{
        position: "relative",
        width: size,
        height: size,
        flexShrink: 0,
      }}
    >
      {/* Orbit rings */}
      {[...new Set(items.map((i) => i.radius ?? 100))].map((r) => (
        <div
          key={r}
          style={{
            position: "absolute",
            top: "50%", left: "50%",
            width: r * 2, height: r * 2,
            marginTop: -r, marginLeft: -r,
            borderRadius: "50%",
            border: "1px dashed rgba(0,80,96,0.15)",
          }}
        />
      ))}

      {/* Center element */}
      <div style={{
        position: "absolute",
        top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 10,
      }}>
        {center}
      </div>

      {/* Orbiting items */}
      {items.map((item, i) => {
        const r = item.radius ?? 100;
        const dur = item.duration ?? 20;
        const delay = item.delay ?? 0;
        const dir = item.reverse ? -1 : 1;

        return (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              top: "50%", left: "50%",
              width: r * 2, height: r * 2,
              marginTop: -r, marginLeft: -r,
              borderRadius: "50%",
            }}
            animate={{ rotate: dir * 360 }}
            transition={{ duration: dur, repeat: Infinity, ease: "linear", delay }}
          >
            {/* Item positioned at top of orbit */}
            <div style={{
              position: "absolute",
              top: -20,
              left: "50%",
              transform: "translateX(-50%)",
            }}>
              <motion.div
                animate={{ rotate: -dir * 360 }}
                transition={{ duration: dur, repeat: Infinity, ease: "linear", delay }}
                style={{
                  display: "flex", flexDirection: "column", alignItems: "center", gap: "4px",
                  background: "#fff",
                  borderRadius: "12px",
                  padding: "8px 12px",
                  boxShadow: "0 4px 16px rgba(0,80,96,0.12)",
                  border: "1px solid var(--border)",
                  whiteSpace: "nowrap",
                }}
              >
                {item.icon && <span style={{ fontSize: "18px", lineHeight: 1 }}>{item.icon}</span>}
                <span style={{
                  fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 600,
                  color: "var(--charcoal-deep)", letterSpacing: "0.05em",
                }}>
                  {item.label}
                </span>
              </motion.div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
