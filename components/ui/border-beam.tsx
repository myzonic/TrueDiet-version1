"use client";
import { useEffect, useRef } from "react";

export function BorderBeam({
  size = 120,
  duration = 10,
  colorFrom = "var(--orange)",
  colorTo = "var(--charcoal-deep)",
  className = "",
}: {
  size?: number;
  duration?: number;
  colorFrom?: string;
  colorTo?: string;
  className?: string;
}) {
  const beamRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let start = 0;
    let raf: number;

    const animate = (ts: number) => {
      if (!start) start = ts;
      if (!containerRef.current || !beamRef.current) { raf = requestAnimationFrame(animate); return; }

      const elapsed = ts - start;
      const period = duration * 1000;
      const progress = (elapsed % period) / period;

      const { width: w, height: h } = containerRef.current.getBoundingClientRect();
      const perimeter = 2 * (w + h);
      const dist = progress * perimeter;

      let x: number, y: number;
      if (dist <= w) { x = dist; y = 0; }
      else if (dist <= w + h) { x = w; y = dist - w; }
      else if (dist <= 2 * w + h) { x = w - (dist - w - h); y = h; }
      else { x = 0; y = h - (dist - 2 * w - h); }

      beamRef.current.style.transform = `translate(${x - size / 2}px, ${y - size / 2}px)`;
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [duration, size]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ position: "absolute", inset: 0, overflow: "hidden", borderRadius: "inherit", pointerEvents: "none", zIndex: 0 }}
    >
      <div
        ref={beamRef}
        style={{
          position: "absolute",
          width: size,
          height: size,
          background: `radial-gradient(circle, ${colorFrom} 0%, ${colorTo}55 40%, transparent 70%)`,
          borderRadius: "50%",
          opacity: 0.55,
          willChange: "transform",
        }}
      />
    </div>
  );
}
