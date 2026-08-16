"use client";
import { useEffect, useRef, useState } from "react";

const MORPH_TIME = 1.2;
const COOLDOWN = 2.0;

export function MorphingText({
  texts,
  className = "",
}: {
  texts: string[];
  className?: string;
}) {
  const text1Ref = useRef<SVGTextElement>(null);
  const text2Ref = useRef<SVGTextElement>(null);
  const indexRef = useRef(0);
  const morphRef = useRef(0);
  const cooldownRef = useRef(COOLDOWN);
  const lastTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number>();

  const setMorph = (fraction: number) => {
    const t1 = text1Ref.current;
    const t2 = text2Ref.current;
    if (!t1 || !t2) return;

    const f1 = Math.min(fraction / 0.7, 1);
    const f2 = Math.max((fraction - 0.3) / 0.7, 0);

    t2.style.filter = `blur(${Math.min(8 / f2 - 8, 100)}px)`;
    t2.style.opacity = `${Math.pow(f2, 0.4)}`;

    t1.style.filter = `blur(${Math.min(8 / (1 - f1) - 8, 100)}px)`;
    t1.style.opacity = `${Math.pow(1 - f1, 0.4)}`;

    t1.textContent = texts[indexRef.current % texts.length];
    t2.textContent = texts[(indexRef.current + 1) % texts.length];
  };

  useEffect(() => {
    const loop = (time: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = time;
      const dt = (time - lastTimeRef.current) / 1000;
      lastTimeRef.current = time;

      cooldownRef.current -= dt;

      if (cooldownRef.current <= 0) {
        if (cooldownRef.current <= -MORPH_TIME) {
          morphRef.current = 0;
          cooldownRef.current = COOLDOWN;
          indexRef.current++;
        } else {
          const f = 1 - Math.abs(cooldownRef.current / MORPH_TIME);
          setMorph(f);
        }
      } else {
        setMorph(0);
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [texts]);

  return (
    <div className={className} style={{ position: "relative", display: "inline-flex", alignItems: "center" }}>
      <svg
        viewBox="0 0 300 60"
        style={{ overflow: "visible", width: "100%", height: "1.2em" }}
      >
        <defs>
          <filter id="morph-blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0" result="blur" />
            <feColorMatrix in="blur" mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
          </filter>
        </defs>
        <g filter="url(#morph-blur)">
          <text
            ref={text1Ref}
            x="50%"
            y="75%"
            textAnchor="middle"
            style={{
              fontSize: "40px",
              fill: "var(--charcoal-deep)",
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
            }}
          >
            {texts[0]}
          </text>
          <text
            ref={text2Ref}
            x="50%"
            y="75%"
            textAnchor="middle"
            style={{
              fontSize: "40px",
              fill: "var(--terracotta)",
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
              opacity: 0,
            }}
          >
            {texts[1]}
          </text>
        </g>
      </svg>
    </div>
  );
}
