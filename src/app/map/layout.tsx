import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interactive Map",
  description: "Explore animal protection laws by jurisdiction on an interactive world map. 126+ countries covered.",
};

export default function MapLayout({ children }: { children: React.ReactNode }) {
  return children;
}
