"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789·";

export function HyperText({
  text,
  style,
  className,
  duration = 800,
}: {
  text: string;
  style?: React.CSSProperties;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(text);
  const animated = useRef(false);

  useEffect(() => {
    if (!inView || animated.current) return;
    animated.current = true;
    const chars = text.split("");
    const total = duration;
    const step = total / chars.length;
    let elapsed = 0;

    const interval = setInterval(() => {
      elapsed += 40;
      setDisplay(
        chars.map((char, i) => {
          if (char === " ") return " ";
          if (elapsed >= (i + 1) * step) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        }).join("")
      );
      if (elapsed >= total) {
        setDisplay(text);
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [inView, text, duration]);

  return (
    <span ref={ref} style={style} className={className}>
      {display}
    </span>
  );
}
