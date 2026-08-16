"use client";
import { useEffect, useRef } from "react";

interface Ripple {
  x: number;
  y: number;
  r: number;
  maxR: number;
  opacity: number;
  color: string;
}

const COLORS = [
  "rgba(0,80,96,",
  "rgba(240,128,0,",
  "rgba(96,144,0,",
];

export default function SplashCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ripplesRef = useRef<Ripple[]>([]);
  const rafRef = useRef<number>();
  const lastPos = useRef({ x: -1, y: -1 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 12) return; // throttle

      lastPos.current = { x: e.clientX, y: e.clientY };

      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      ripplesRef.current.push({
        x: e.clientX,
        y: e.clientY,
        r: 2,
        maxR: 28 + Math.random() * 20,
        opacity: 0.35,
        color,
      });

      // Cap ripples for performance
      if (ripplesRef.current.length > 60) {
        ripplesRef.current.splice(0, ripplesRef.current.length - 60);
      }
    };

    window.addEventListener("mousemove", onMove);

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ripplesRef.current = ripplesRef.current.filter((rip) => rip.opacity > 0.005);

      for (const rip of ripplesRef.current) {
        rip.r += (rip.maxR - rip.r) * 0.08;
        rip.opacity *= 0.94;

        ctx.beginPath();
        ctx.arc(rip.x, rip.y, rip.r, 0, Math.PI * 2);
        ctx.strokeStyle = `${rip.color}${rip.opacity.toFixed(2)})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1,
        pointerEvents: "none",
      }}
      className="splash-cursor-canvas"
    />
  );
}
