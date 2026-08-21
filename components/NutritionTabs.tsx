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
      {/* Tab list */}
      <Tabs.List
        style={{
          display: "flex",
          gap: "8px",
          borderBottom: "1px solid var(--border)",
          marginBottom: "48px",
          overflowX: "auto",
          paddingBottom: "16px",
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
              cursor: "pointer",
              transition: "all 0.3s ease",
              whiteSpace: "nowrap",
              position: "relative",
            }}
            onMouseEnter={(e) => {
              if ((e.currentTarget as HTMLButtonElement).getAttribute("data-state") !== "active") {
                (e.currentTarget as HTMLButtonElement).style.color = "var(--charcoal-deep)";
              }
            }}
            onMouseLeave={(e) => {
              if ((e.currentTarget as HTMLButtonElement).getAttribute("data-state") !== "active") {
                (e.currentTarget as HTMLButtonElement).style.color = "var(--gray-muted)";
              }
            }}
          >
            {topic.title}
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      {/* Tab content */}
      {topics.map((topic, i) => (
        <Tabs.Content key={topic.id} value={topic.id}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "48px",
              alignItems: "center",
            }}
            className="nutrition-tab-content"
          >
            {/* Image */}
            <motion.img
              src={topic.image}
              alt={topic.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              style={{
                width: "100%",
                borderRadius: "16px",
                objectFit: "cover",
                height: "350px",
                boxShadow: "0 12px 40px rgba(0,80,96,0.12)",
              }}
            />

            {/* Content */}
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  fontSize: "32px",
                  color: "var(--charcoal-deep)",
                  marginBottom: "16px",
                }}
              >
                {topic.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "var(--charcoal)",
                  marginBottom: "24px",
                }}
              >
                {topic.desc}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "var(--gray-muted)",
                }}
              >
                {topic.cta}
              </p>
            </div>
          </motion.div>
        </Tabs.Content>
      ))}

      <style>{`
        [role="tab"][data-state="active"] {
          color: var(--charcoal-deep) !important;
          border-bottom-color: var(--orange) !important;
        }
        @media (max-width: 768px) {
          .nutrition-tab-content {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          [role="tablist"] {
            gap: 4px !important;
            padding-bottom: 12px !important;
            margin-bottom: 24px !important;
          }
          [role="tab"] {
            padding: 10px 14px !important;
            font-size: 13px !important;
            white-space: normal !important;
          }
          .nutrition-tab-content img {
            height: 250px !important;
            border-radius: 12px !important;
          }
          .nutrition-tab-content h3 {
            font-size: clamp(18px, 5vw, 32px) !important;
          }
        }
      `}</style>
    </Tabs.Root>
  );
}
