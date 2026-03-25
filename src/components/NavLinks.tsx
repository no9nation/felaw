"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/map", label: "Map" },
  { href: "/database", label: "Database" },
  { href: "/compare", label: "Compare" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
];

export function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
        {links.map((link) => {
          const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`px-5 py-2 text-[14px] font-medium transition-colors duration-200 ${
                isActive
                  ? "text-white"
                  : "text-white/50 hover:text-white"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              {link.label}
              {isActive && (
                <span className="block h-[2px] bg-[var(--highlight)] mt-1 -mb-1" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Mobile nav */}
      <div className="md:hidden">
        <details className="relative group">
          <summary className="list-none cursor-pointer p-2 text-white/60 hover:text-white transition-colors" aria-label="Open menu">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </summary>
          <div className="absolute right-0 top-full mt-2 w-56 bg-[var(--nav-bg)] border border-white/10 shadow-2xl py-3 z-50">
            {links.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-6 py-3 text-[14px] transition-colors ${
                    isActive
                      ? "text-white bg-white/5 border-l-2 border-[var(--highlight)]"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </details>
      </div>
    </>
  );
}
