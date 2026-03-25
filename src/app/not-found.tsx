import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-28">
      <div className="max-w-xl">
        <div className="ll-divider mb-8" />
        <h1 className="text-5xl font-bold text-[var(--accent)] tracking-tight mb-4">
          Page Not Found
        </h1>
        <p className="text-[var(--accent-soft)] text-base leading-relaxed mb-10">
          The page you requested doesn&apos;t exist or may have been moved.
        </p>

        <div className="space-y-3">
          {[
            { href: "/map", label: "Interactive Map", desc: "Explore animal protection laws by jurisdiction" },
            { href: "/database", label: "Legislative Database", desc: "Search across all law entries" },
            { href: "/insights", label: "Insights & Rankings", desc: "LSI rankings and gap analysis" },
            { href: "/compare", label: "Compare Laws", desc: "Side-by-side jurisdictional comparison" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center justify-between p-5 border border-[var(--border)] hover:bg-[var(--muted)] hover:border-[var(--accent)] transition-all group"
            >
              <div>
                <div className="text-sm font-bold text-[var(--accent)] group-hover:text-[var(--highlight)] transition-colors">
                  {link.label}
                </div>
                <div className="text-xs text-[var(--accent-soft)] mt-0.5">{link.desc}</div>
              </div>
              <span className="text-[var(--accent-soft)] group-hover:text-[var(--highlight)] transition-colors">&rarr;</span>
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-[var(--accent)] text-white text-sm font-bold hover:bg-[var(--highlight)] transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
