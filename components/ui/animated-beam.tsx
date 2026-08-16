"use client";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface BeamNode {
  label: string;
  sub?: string;
  icon?: React.ReactNode;
  highlight?: boolean;
}

export function AnimatedBeam({ nodes }: { nodes: BeamNode[] }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [paths, setPaths] = useState<string[]>([]);
  const [dims, setDims] = useState({ w: 0, h: 80 });

  useEffect(() => {
    function compute() {
      if (!svgRef.current) return;
      const svgRect = svgRef.current.getBoundingClientRect();
      setDims({ w: svgRect.width, h: svgRect.height });
      const newPaths: string[] = [];
      for (let i = 0; i < nodeRefs.current.length - 1; i++) {
        const a = nodeRefs.current[i];
        const b = nodeRefs.current[i + 1];
        if (!a || !b) continue;
        const ar = a.getBoundingClientRect();
        const br = b.getBoundingClientRect();
        const x1 = ar.right - svgRect.left;
        const y1 = ar.top + ar.height / 2 - svgRect.top;
        const x2 = br.left - svgRect.left;
        const y2 = br.top + br.height / 2 - svgRect.top;
        const cx = (x1 + x2) / 2;
        newPaths.push(`M${x1},${y1} C${cx},${y1} ${cx},${y2} ${x2},${y2}`);
      }
      setPaths(newPaths);
    }
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  const gradId = "beam-grad";

  return (
    <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0", width: "100%" }}>
      {/* SVG overlay for beams */}
      <svg
        ref={svgRef}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "visible", pointerEvents: "none", zIndex: 0 }}
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0,80,96,0)">
              <animate attributeName="offset" values="-1;1" dur="2.5s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="var(--orange)" stopOpacity="0.9">
              <animate attributeName="offset" values="-0.5;1.5" dur="2.5s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="rgba(96,144,0,0)">
              <animate attributeName="offset" values="0;2" dur="2.5s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>
        {paths.map((d, i) => (
          <g key={i}>
            <path d={d} stroke="rgba(0,80,96,0.12)" strokeWidth="2" fill="none" />
            <path d={d} stroke={`url(#${gradId})`} strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </g>
        ))}
      </svg>

      {nodes.map((node, i) => (
        <motion.div
          key={i}
          ref={(el) => { nodeRefs.current[i] = el; }}
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: "flex", flexDirection: "column", alignItems: "center",
            gap: "10px", position: "relative", zIndex: 1, flex: "0 0 auto",
          }}
        >
          <div style={{
            width: "56px", height: "56px", borderRadius: "16px",
            background: node.highlight ? "var(--charcoal-deep)" : "var(--white)",
            border: node.highlight ? "none" : "1.5px solid var(--border)",
            boxShadow: node.highlight ? "0 8px 32px rgba(0,80,96,0.25)" : "0 4px 16px rgba(0,80,96,0.08)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            {node.icon}
          </div>
          <div style={{ textAlign: "center" }}>
            <p style={{
              fontFamily: "var(--font-heading)", fontWeight: 700,
              fontSize: "13px", color: node.highlight ? "var(--charcoal-deep)" : "var(--charcoal)",
              whiteSpace: "nowrap",
            }}>
              {node.label}
            </p>
            {node.sub && (
              <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "var(--gray-muted)", marginTop: "2px", whiteSpace: "nowrap" }}>
                {node.sub}
              </p>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
