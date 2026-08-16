"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

interface CarouselProps {
  children: React.ReactNode[];
  autoplay?: boolean;
  interval?: number;
}

export function Carousel({ children, autoplay = true, interval = 4000 }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selected, setSelected] = useState(0);
  const count = children.length;

  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  useEffect(() => {
    if (!autoplay || !emblaApi) return;
    const t = setInterval(() => emblaApi.scrollNext(), interval);
    return () => clearInterval(t);
  }, [emblaApi, autoplay, interval]);

  return (
    <div style={{ position: "relative" }}>
      <div ref={emblaRef} style={{ overflow: "hidden" }}>
        <div style={{ display: "flex", gap: "16px" }}>
          {children.map((child, i) => (
            <div
              key={i}
              style={{ flex: "0 0 88%", minWidth: 0 }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "8px",
        marginTop: "24px",
      }}>
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: selected === i ? "24px" : "8px",
              height: "8px",
              borderRadius: "100px",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "all 0.3s ease",
              background: selected === i ? "var(--charcoal-deep)" : "rgba(0,80,96,0.2)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
