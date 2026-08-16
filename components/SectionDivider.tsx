"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SectionDivider({ color = "var(--border)" }: { color?: string }) {
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!lineRef.current) return;
    gsap.fromTo(lineRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 90%",
        },
      }
    );
  }, { scope: lineRef });

  return (
    <div style={{ overflow: "hidden", lineHeight: 0 }}>
      <div
        ref={lineRef}
        style={{
          height: "1px",
          background: color,
          transformOrigin: "left center",
          transform: "scaleX(0)",
        }}
      />
    </div>
  );
}
