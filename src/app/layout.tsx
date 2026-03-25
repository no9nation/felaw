import type { Metadata } from "next";
import { Public_Sans, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { NavLinks } from "@/components/NavLinks";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Fe Laws — Global Animal Protection Law",
    template: "%s | Fe Laws",
  },
  description:
    "A comprehensive database of animal protection legislation worldwide. Supporting legal professionals, policymakers, and advocates across 126+ jurisdictions.",
  openGraph: {
    title: "Fe Laws — Global Animal Protection Law",
    description: "Comprehensive legislation data across 126+ jurisdictions.",
    siteName: "Fe Laws",
    type: "website",
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/map", label: "Map" },
  { href: "/database", label: "Database" },
  { href: "/compare", label: "Compare" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${publicSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)]">
        {/* Skip to content */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-[100] focus:bg-[var(--highlight)] focus:text-white focus:px-6 focus:py-3 focus:text-sm focus:font-bold"
        >
          Skip to main content
        </a>

        <header className="sticky top-0 z-50 bg-[var(--nav-bg)] border-b border-white/[0.06]">
          <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
            <div className="flex items-center justify-between h-[72px]">
              <Link href="/" className="flex items-center gap-3 group" aria-label="Fe Laws Home">
                <span className="text-[22px] font-bold text-white tracking-tight">
                  Fe<span className="text-[var(--highlight)]">.</span>Laws
                </span>
              </Link>
              <NavLinks />
            </div>
          </div>
        </header>

        <main id="main-content" className="flex-1">{children}</main>

        <footer className="bg-[var(--nav-bg)]" role="contentinfo">
          <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Column 1: Brand */}
              <div>
                <span className="text-[22px] font-bold text-white tracking-tight block mb-3">
                  Fe<span className="text-[var(--highlight)]">.</span>Laws
                </span>
                <p className="text-sm text-white/50 leading-relaxed">
                  Global Animal Protection Law Database
                </p>
              </div>

              {/* Column 2: Research Tools */}
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 mb-4">
                  Research Tools
                </h3>
                <ul>
                  <li>
                    <Link href="/map" className="block py-1.5 text-sm text-white/50 hover:text-white transition-colors">
                      Map
                    </Link>
                  </li>
                  <li>
                    <Link href="/database" className="block py-1.5 text-sm text-white/50 hover:text-white transition-colors">
                      Database
                    </Link>
                  </li>
                  <li>
                    <Link href="/compare" className="block py-1.5 text-sm text-white/50 hover:text-white transition-colors">
                      Compare
                    </Link>
                  </li>
                  <li>
                    <Link href="/insights" className="block py-1.5 text-sm text-white/50 hover:text-white transition-colors">
                      Insights
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 3: Analysis */}
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 mb-4">
                  Analysis
                </h3>
                <ul>
                  <li>
                    <Link href="/insights" className="block py-1.5 text-sm text-white/50 hover:text-white transition-colors">
                      LSI Rankings
                    </Link>
                  </li>
                  <li>
                    <Link href="/insights" className="block py-1.5 text-sm text-white/50 hover:text-white transition-colors">
                      Gap Analysis
                    </Link>
                  </li>
                  <li>
                    <Link href="/insights" className="block py-1.5 text-sm text-white/50 hover:text-white transition-colors">
                      Regional Comparison
                    </Link>
                  </li>
                  <li>
                    <Link href="/insights" className="block py-1.5 text-sm text-white/50 hover:text-white transition-colors">
                      Key Cases
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 4: Resources */}
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 mb-4">
                  Resources
                </h3>
                <ul>
                  <li>
                    <Link href="/about" className="block py-1.5 text-sm text-white/50 hover:text-white transition-colors">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/about#methodology" className="block py-1.5 text-sm text-white/50 hover:text-white transition-colors">
                      Methodology
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10">
            <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-white/30">
                &copy; {new Date().getFullYear()} Fe.Laws
              </span>
              <span className="text-xs text-white/30 text-center">
                Built for legal professionals, policymakers, and advocates
              </span>
              <span className="text-xs text-white/30">
                107 countries &middot; 800+ law entries &middot; Data reviewed Mar 2026
              </span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
