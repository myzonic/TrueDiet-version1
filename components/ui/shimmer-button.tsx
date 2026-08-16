"use client";
import React from "react";
import { motion } from "framer-motion";

export function ShimmerButton({
  children,
  className = "",
  shimmerColor = "rgba(255,255,255,0.4)",
  background = "var(--orange)",
  borderRadius = "100px",
  shimmerSize = "0.1em",
  shimmerDuration = "2.5s",
  style = {},
  onClick,
  type,
}: {
  children: React.ReactNode;
  className?: string;
  shimmerColor?: string;
  background?: string;
  borderRadius?: string;
  shimmerSize?: string;
  shimmerDuration?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius,
        background,
        border: "none",
        cursor: "none",
        padding: "16px 32px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        fontFamily: "var(--font-body)",
        fontSize: "14px",
        fontWeight: 600,
        color: "#fff",
        textDecoration: "none",
        whiteSpace: "nowrap",
        boxShadow: "0 8px 32px rgba(240,128,0,0.35)",
        ...style,
      }}
    >
      {/* Shimmer sweep */}
      <span
        style={{
          position: "absolute",
          inset: 0,
          borderRadius,
          background: `linear-gradient(110deg, transparent 25%, ${shimmerColor} 50%, transparent 75%)`,
          backgroundSize: "200% 100%",
          animation: `shimmer-sweep ${shimmerDuration} linear infinite`,
          pointerEvents: "none",
        }}
      />
      <span style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", gap: "8px" }}>
        {children}
      </span>
      <style>{`
        @keyframes shimmer-sweep {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}</style>
    </button>
  );
}
