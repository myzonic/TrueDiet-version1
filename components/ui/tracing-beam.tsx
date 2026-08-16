"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export function TracingBeam({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const contentHeight = useRef(0);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setSvgHeight(ref.current.offsetHeight);
    }
  }, []);

  const y1 = useSpring(useTransform(scrollYProgress, [0, 0.8], [50, svgHeight * 0.8]), {
    stiffness: 500, damping: 90,
  });
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [50, svgHeight]), {
    stiffness: 500, damping: 90,
  });

  return (
    <div ref={ref} style={{ position: "relative" }} className={className}>
      {/* Beam line — hidden on mobile */}
      <div className="tracing-beam-line" style={{
        position: "absolute",
        top: 0, left: "20px",
        width: "20px",
        height: "100%",
        zIndex: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight}
          style={{ overflow: "visible" }}
        >
          <motion.path
            d={`M 10 0 L 10 ${svgHeight}`}
            fill="none"
            stroke="var(--border)"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
          <motion.path
            d={`M 10 0 L 10 ${svgHeight}`}
            fill="none"
            stroke="url(#beam-gradient)"
            strokeWidth="2"
            strokeLinecap="round"
            style={{
              pathLength: scrollYProgress,
            }}
          />
          <defs>
            <motion.linearGradient
              id="beam-gradient"
              gradientUnits="userSpaceOnUse"
              x1="0" x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="var(--orange)" stopOpacity="0" offset="0%" />
              <stop stopColor="var(--orange)" offset="30%" />
              <stop stopColor="var(--charcoal-deep)" offset="80%" />
              <stop stopColor="var(--charcoal-deep)" stopOpacity="0" offset="100%" />
            </motion.linearGradient>
          </defs>
          {/* Moving dot */}
          <motion.circle
            cx="10"
            style={{ cy: y1 }}
            r="4"
            fill="var(--orange)"
            filter="url(#glow)"
          />
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
        </svg>
      </div>

      <div style={{ paddingLeft: "clamp(0px, 4vw, 52px)" }}>
        {children}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .tracing-beam-line { display: none !important; }
        }
      `}</style>
    </div>
  );
}
