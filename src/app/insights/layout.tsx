import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Analysis",
  description: "Data-driven analysis of global animal protection laws — coverage gaps, regional comparisons, and key findings.",
};

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
