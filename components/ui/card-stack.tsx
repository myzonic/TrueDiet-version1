"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type CardStackItem = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

const CARD_OFFSET = 10;
const SCALE_FACTOR = 0.06;

export function CardStack({
  items,
  offset = CARD_OFFSET,
  scaleFactor = SCALE_FACTOR,
}: {
  items: CardStackItem[];
  offset?: number;
  scaleFactor?: number;
}) {
  const [cards, setCards] = useState(items);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prev) => {
        const newArr = [...prev];
        newArr.unshift(newArr.pop()!);
        return newArr;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", maxWidth: "420px", height: "clamp(220px, 30vw, 280px)" }}>
      {cards.map((card, i) => (
        <motion.div
          key={card.id}
          style={{
            position: "absolute",
            width: "100%",
            background: i === 0 ? "var(--charcoal-deep)" : "#fff",
            borderRadius: "24px",
            padding: "clamp(20px, 4vw, 32px)",
            boxShadow: i === 0
              ? "0 20px 60px rgba(0,80,96,0.25)"
              : "0 4px 20px rgba(0,0,0,0.08)",
            border: "1px solid var(--border)",
          }}
          animate={{
            top: i * -offset,
            scale: 1 - i * scaleFactor,
            zIndex: cards.length - i,
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(13px, 2vw, 15px)",
            lineHeight: 1.75,
            color: i === 0 ? "rgba(255,255,255,0.85)" : "var(--charcoal)",
            marginBottom: "24px",
          }}>
            {card.content}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{
              width: "36px", height: "36px", borderRadius: "50%",
              background: i === 0 ? "rgba(255,255,255,0.15)" : "var(--blush)",
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              <span style={{
                fontFamily: "var(--font-heading)", fontWeight: 800,
                fontSize: "12px",
                color: i === 0 ? "#fff" : "var(--charcoal-deep)",
              }}>
                {card.name[0]}
              </span>
            </div>
            <div>
              <p style={{
                fontFamily: "var(--font-heading)", fontWeight: 700,
                fontSize: "13px",
                color: i === 0 ? "#fff" : "var(--charcoal-deep)",
                margin: 0,
              }}>
                {card.name}
              </p>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "11px",
                color: i === 0 ? "rgba(255,255,255,0.5)" : "var(--gray-muted)",
                margin: "2px 0 0",
              }}>
                {card.designation}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
