import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legislative Database",
  description: "Search and filter animal protection laws across 126+ jurisdictions. Full-text search by keyword, region, or category.",
};

export default function DatabaseLayout({ children }: { children: React.ReactNode }) {
  return children;
}
