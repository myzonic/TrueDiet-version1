import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "TrueDiet — Real Nutrition. Real Science. Real Results.",
  description: "Cut through the nutrition noise with evidence-based guidance from Maureen Ashbarry, Registered Dietitian with 23 years of experience in nutrition and Medical Nutrition Therapy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
