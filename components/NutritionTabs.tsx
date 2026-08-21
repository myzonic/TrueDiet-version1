"use client";

import { Tabs } from "@ark-ui/react/tabs";
import { motion } from "framer-motion";

interface Topic {
  id: string;
  title: string;
  desc: string;
  cta: string;
  image: string;
}

interface NutritionTabsProps {
  topics: Topic[];
}

export default function NutritionTabs({ topics }: NutritionTabsProps) {
  return (
    <Tabs.Root defaultValue={topics[0].id}>
      {/* Tab list — horizontal scroll on mobile */}
      <Tabs.List
        style={{
          display: "flex",
          gap: "8px",
          borderBottom: "2px solid var(--border)",
          marginBottom: "48px",
          overflowX: "auto",
          WebkitOverflowScrolling: "touch" as any,
          scrollbarWidth: "none" as any,
          paddingBottom: "0",
          msOverflowStyle: "none" as any,
        }}
      >
        {topics.map((topic) => (
          <Tabs.Trigger
            key={topic.id}
            value={topic.id}
            style={{
              padding: "12px 20px",
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: "14px",
              color: "var(--gray-muted)",
              background: "transparent",
              border: "none",
              borderBottom: "2px solid transparent",
              marginBottom: "-2px",
              cursor: "pointer",
              transition: "all 0.25s ease",
              whiteSpace: "nowrap",
              flexShrink: 0,
              minWidth: "auto",
              minHeight: "44px",
            }}
          >
            {topic.title}
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      {/* Tab content */}
      {topics.map((topic) => (
        <Tabs.Content key={topic.id} value={topic.id}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="nutrition-tab-content"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(24px, 5vw, 64px)",
              alignItems: "center",
            }}
          >
            {/* Image */}
            <div style={{ borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 60px rgba(0,80,96,0.14)" }}>
              <img
                src={topic.image}
                alt={topic.title}
                style={{
                  width: "100%",
                  objectFit: "cover",
                  height: "clamp(220px, 35vw, 400px)",
                  display: "block",
                }}
              />
            </div>

            {/* Content */}
            <div>
              <h3 style={{
                fontFamily: "var(--font-heading)", fontWeight: 800,
                fontSize: "clamp(22px, 3vw, 36px)", lineHeight: 1.1,
                color: "var(--charcoal-deep)", marginBottom: "20px",
                letterSpacing: "-0.5px",
              }}>
                {topic.title}
              </h3>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "clamp(15px, 2vw, 17px)",
                lineHeight: 1.75, color: "var(--charcoal)", marginBottom: "20px",
              }}>
                {topic.desc}
              </p>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "clamp(14px, 1.8vw, 16px)",
                lineHeight: 1.7, color: "var(--gray-muted)",
              }}>
                {topic.cta}
              </p>
            </div>
          </motion.div>
        </Tabs.Content>
      ))}

      <style>{`
        [role="tablist"]::-webkit-scrollbar { display: none; }
        [role="tab"][data-state="active"] {
          color: var(--charcoal-deep) !important;
          border-bottom-color: var(--orange) !important;
        }
        [role="tab"]:hover:not([data-state="active"]) {
          color: var(--charcoal-deep) !important;
          background: rgba(0,80,96,0.04) !important;
          border-radius: 8px 8px 0 0;
        }
        @media (max-width: 768px) {
          .nutrition-tab-content {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          [role="tablist"] {
            gap: 4px !important;
            margin-bottom: 24px !important;
          }
          [role="tab"] {
            padding: 10px 14px !important;
            font-size: 13px !important;
          }
        }
      `}</style>
    </Tabs.Root>
  );
}
