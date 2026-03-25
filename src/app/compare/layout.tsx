import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compare Laws",
  description: "Side-by-side comparison of animal protection laws across jurisdictions and categories.",
};

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return children;
}
