import type { Metadata } from "next";
import Link from "next/link";
import { countries, laws, regions } from "@/data/laws";
import { computeAllLSI } from "@/data/lsi";

export const metadata: Metadata = {
  title: "About",
  description: "About Fe Laws — methodology, data sources, and how to use the global animal protection law database.",
};

export default function AboutPage() {
  const lpCount = new Set(
    laws.filter((l) => l.category === "Animal Rights & Legal Personhood").map((l) => l.countryCode)
  ).size;

  const steps = [
    {
      num: 1,
      title: "Interactive Map",
      desc: "Select any country to examine its animal protection legislation, penalty structures, and legal framework. Toggle map coloring between LSI Grade and Legal Family (Zweigert & Kötz taxonomy) to visualize comparative law traditions.",
    },
    {
      num: 2,
      title: "Database Search",
      desc: `Query across all ${laws.length} legislative entries by keyword, country, region, legal family, or category. Export results as CSV (with legal family column) or BibTeX.`,
    },
    {
      num: 3,
      title: "Compare",
      desc: "Select up to 4 countries and a subject area to generate side-by-side comparisons of law provisions, LSI dimensions, landmark cases, and coverage matrices.",
    },
    {
      num: 4,
      title: "Insights & Analysis",
      desc: "Eight analytical tabs: Overview, Gap Analysis, Regional Comparison, LSI Rankings, Legal Families (Zweigert & Kötz taxonomy), Key Cases, Historical Origins, and Sensitivity Analysis.",
    },
    {
      num: 5,
      title: "Landmark Cases",
      desc: "Browse and filter significant judicial decisions, constitutional milestones, and legislative landmarks across 90+ jurisdictions — plus a Historical Origins archive spanning 4,000 years of animal and nature law from Hammurabi, Ashoka, Pythagoras, and Tokugawa to Bentham and the Rights of Nature movement, filterable by era and legal tradition.",
    },
  ];

  return (
    <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-28">
      {/* Page header */}
      <div className="mb-16">
        <p className="text-xs tracking-[0.2em] uppercase text-[var(--accent-soft)] mb-4 font-medium">
          About
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--accent)] leading-tight">
          About Fe Laws
        </h1>
        <div className="ll-divider mt-5" />
      </div>

      <div className="space-y-0">
        {/* Mission */}
        <section className="bg-white border border-[var(--border)] p-10">
          <div className="ll-divider mb-4" />
          <h2 className="text-lg font-bold text-[var(--accent)] mb-6">
            Advancing the Legal Protection of Animals Worldwide
          </h2>
          <div className="max-w-3xl space-y-4 text-[var(--accent-soft)] text-[15px] leading-[1.8]">
            <p>
              Fe Laws provides a comprehensive, global database of animal
              protection legislation. Our platform serves legal professionals,
              policymakers, and advocates in advancing the legal recognition and
              protection of animals as sentient beings.
            </p>
            <p>
              Through this collaborative resource, our objective is to make
              animal law research accessible and actionable — enabling
              cross-border comparison, identifying legislative gaps, and
              supporting the global movement toward stronger animal protection
              frameworks.
            </p>
          </div>
        </section>

        <div className="border-t border-[var(--border)]" />

        {/* Global Coverage */}
        <section className="bg-white border border-[var(--border)] p-10">
          <div className="ll-divider mb-4" />
          <h2 className="text-lg font-bold text-[var(--accent)] mb-6">
            Global Coverage
          </h2>
          <p className="max-w-3xl text-[var(--accent-soft)] text-[15px] leading-[1.8] mb-10">
            The database encompasses <strong>{countries.length} countries</strong> across{" "}
            <strong>{regions.length} regions</strong>, comprising{" "}
            <strong>{laws.length} legislative entries</strong> spanning nine
            categories — from anti-cruelty statutes to legal personhood
            recognition.
          </p>

          {/* Region stats grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {regions.map((region) => {
              const count = countries.filter((c) => c.region === region).length;
              return (
                <div
                  key={region}
                  className="bg-[var(--muted)] p-4 text-center"
                >
                  <div className="text-2xl font-bold text-[var(--highlight)]">
                    {count}
                  </div>
                  <div className="text-[11px] tracking-wide text-[var(--accent-soft)] mt-1 font-medium">
                    {region}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Legal Personhood */}
          <div className="mt-10 border-l-[3px] border-[var(--personhood)] bg-[var(--muted)] p-6">
            <h3 className="text-sm font-bold text-[var(--personhood)] mb-2 tracking-wide uppercase">
              Legal Personhood &amp; Rights of Nature
            </h3>
            <p className="text-sm text-[var(--accent-soft)] leading-relaxed max-w-3xl">
              {lpCount} countries now recognize some form of animal rights,
              legal personhood, or rights of nature — from Ecuador&apos;s
              constitutional recognition (2008) to India&apos;s judicial
              recognition of animal personhood.
            </p>
          </div>
        </section>

        <div className="border-t border-[var(--border)]" />

        {/* How It Works */}
        <section className="bg-white border border-[var(--border)] p-10">
          <div className="ll-divider mb-4" />
          <h2 className="text-lg font-bold text-[var(--accent)] mb-10">
            How It Works
          </h2>
          <div className="space-y-8 max-w-3xl">
            {steps.map((step) => (
              <div key={step.num} className="flex items-start gap-5">
                <span className="text-[var(--highlight)] font-bold text-lg shrink-0 mt-0.5">
                  {String(step.num).padStart(2, "0")}
                </span>
                <div className="text-[15px] leading-[1.8] text-[var(--accent-soft)]">
                  <span className="text-[var(--accent)] font-semibold">
                    {step.title}
                  </span>{" "}
                  — {step.desc}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-[var(--border)]" />

        {/* Methodology */}
        <section id="methodology" className="bg-white border border-[var(--border)] p-10">
          <div className="ll-divider mb-4" />
          <h2 className="text-lg font-bold text-[var(--accent)] mb-6">
            Methodology & Sources
          </h2>
          <div className="max-w-3xl space-y-4 text-[var(--accent-soft)] text-[15px] leading-[1.8]">
            <p>
              Legislative data is compiled from primary legal sources including
              official government gazettes, national legislative databases, and
              authoritative legal repositories. Each entry is cross-referenced
              against at least two independent sources where available.
            </p>
            <p>
              The classification system uses eight core categories designed to
              enable consistent cross-jurisdictional comparison: Anti-Cruelty,
              Wildlife Protection, Companion Animals, Farm Animals, Animal
              Testing, Slaughter Regulations, Penalties, and Animal Rights &amp;
              Legal Personhood.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
            <div className="bg-[var(--muted)] p-6">
              <div className="text-[10px] font-bold text-[var(--highlight)] uppercase tracking-[0.15em] mb-2">Primary Sources</div>
              <ul className="text-sm text-[var(--accent-soft)] space-y-2 leading-relaxed">
                <li>National legislative databases and official gazettes</li>
                <li>FAOLEX (FAO Legal Database)</li>
                <li>ECOLEX (Environmental Law Database)</li>
                <li>World Animal Protection (API Index)</li>
              </ul>
            </div>
            <div className="bg-[var(--muted)] p-6">
              <div className="text-[10px] font-bold text-[var(--highlight)] uppercase tracking-[0.15em] mb-2">Academic References</div>
              <ul className="text-sm text-[var(--accent-soft)] space-y-2 leading-relaxed">
                <li>Animal Law Review (Lewis & Clark)</li>
                <li>Journal of Animal Ethics</li>
                <li>Global Animal Law Project (GAL)</li>
                <li>Brooks Institute Animal Law Programs</li>
              </ul>
            </div>
            <div className="bg-[var(--muted)] p-6">
              <div className="text-[10px] font-bold text-[var(--highlight)] uppercase tracking-[0.15em] mb-2">Comparative Law Taxonomy</div>
              <ul className="text-sm text-[var(--accent-soft)] space-y-2 leading-relaxed">
                <li>Zweigert &amp; Kötz, <em>Introduction to Comparative Law</em> (3rd ed. 1998)</li>
                <li>David &amp; Brierley, <em>Major Legal Systems in the World Today</em> (3rd ed. 1985)</li>
                <li>Landmark case data: primary judicial and legislative sources (127 entries — 100 modern cases across 90+ jurisdictions; 27 historical cases spanning 4,000 years across 11 legal traditions)</li>
              </ul>
            </div>
          </div>

          {/* Weight Justification */}
          <div className="mt-10 border-t border-[var(--border)] pt-10">
            <div className="text-[10px] font-bold text-[var(--highlight)] uppercase tracking-[0.15em] mb-4">LSI Weight Justification</div>
            <p className="text-sm text-[var(--accent-soft)] leading-relaxed max-w-3xl mb-6">
              The five LSI dimensions and their weights reflect a normative framework grounded in comparative animal law scholarship. The weight assignments are deliberate but contestable — the Sensitivity Analysis tool on the Insights page allows researchers to stress-test alternative weight configurations.
            </p>
            <div className="max-w-3xl space-y-3 text-sm text-[var(--accent-soft)]">
              <div className="grid grid-cols-[auto_auto_1fr] gap-x-6 gap-y-3 items-start">
                <span className="font-bold text-[var(--accent)] font-mono">Breadth</span>
                <span className="text-[var(--highlight)] font-bold">40 pts</span>
                <span>The largest weight reflects the threshold argument: a jurisdiction that criminalizes cruelty but lacks wildlife or farm animal coverage provides systematically incomplete protection. Coverage breadth is the necessary condition before depth or severity can be evaluated.</span>

                <span className="font-bold text-[var(--accent)] font-mono">Penalty</span>
                <span className="text-[var(--highlight)] font-bold">25 pts</span>
                <span>Penalty severity operationalizes deterrence theory — laws without enforcement mechanisms are aspirational rather than functional. Maximum imprisonment terms are used as the indicator since they represent the legislature&apos;s stated gravity of the offense.</span>

                <span className="font-bold text-[var(--accent)] font-mono">Recency</span>
                <span className="text-[var(--highlight)] font-bold">15 pts</span>
                <span>Newer legislation typically reflects contemporary scientific consensus on animal sentience and welfare standards. Post-2010 laws score highest; pre-1990 laws score lowest. This dimension rewards legislative modernization without invalidating older but comprehensive frameworks.</span>

                <span className="font-bold text-[var(--accent)] font-mono">Personhood</span>
                <span className="text-[var(--highlight)] font-bold">10 pts</span>
                <span>Legal personhood recognition is weighted lower because it represents an emergent and contested area of law — only a small minority of jurisdictions have enacted such provisions. Its inclusion signals progressive trajectory rather than baseline adequacy.</span>

                <span className="font-bold text-[var(--accent)] font-mono">Depth</span>
                <span className="text-[var(--highlight)] font-bold">10 pts</span>
                <span>Legislative depth rewards jurisdictions that have enacted multiple, category-specific instruments. A single omnibus statute covering eight categories scores lower than eight specialized laws — reflecting the hypothesis that targeted legislation produces more robust enforcement.</span>
              </div>
            </div>
          </div>

          {/* Methodological Limitations */}
          <div className="mt-10 border-t border-[var(--border)] pt-10">
            <div className="text-[10px] font-bold text-[var(--highlight)] uppercase tracking-[0.15em] mb-4">Methodological Limitations</div>
            <p className="text-sm text-[var(--accent-soft)] leading-relaxed max-w-3xl mb-6">
              Researchers using LSI scores in published work should acknowledge the following limitations explicitly:
            </p>
            <div className="max-w-3xl space-y-4">
              {[
                {
                  title: "1. Law-on-Books vs. Law-in-Action",
                  body: "The LSI measures legislative text, not enforcement practice. A country may score highly on paper while systematically underenforcing its animal protection laws. The LSI should not be interpreted as a measure of animal welfare outcomes.",
                },
                {
                  title: "2. English-Language Source Bias",
                  body: "Primary source material relies heavily on English-language databases (FAOLEX, ECOLEX) and official translations. Jurisdictions that publish legislation only in non-English languages may be systematically undercounted or misclassified.",
                },
                {
                  title: "3. Federal and Sub-National Variation",
                  body: "For federal states (United States, Australia, Canada, India, Germany), the database records national-level legislation only. State, provincial, or cantonal laws — which may exceed federal standards — are not included, potentially underestimating protections in federal systems.",
                },
                {
                  title: "4. Temporal Lag",
                  body: "Legislation is captured at a specific point in time. The database does not yet implement automated synchronization with legislative monitoring services. Entries may not reflect amendments enacted after the last manual review.",
                },
                {
                  title: "5. Categorization Subjectivity",
                  body: "Laws spanning multiple categories (e.g., an omnibus animal welfare act covering cruelty, wildlife, and slaughter) are classified under the dominant category. This introduces discretion that affects the Breadth dimension score.",
                },
                {
                  title: "6. Penalty Data Incompleteness",
                  body: "Maximum imprisonment data is available for approximately 60% of entries with penalty provisions. Jurisdictions with fine-only systems or administrative sanctions may appear weaker on the Penalty dimension despite robust enforcement regimes.",
                },
              ].map((lim) => (
                <div key={lim.title} className="bg-[var(--muted)] p-5">
                  <div className="text-sm font-bold text-[var(--accent)] mb-2">{lim.title}</div>
                  <p className="text-sm text-[var(--accent-soft)] leading-relaxed">{lim.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Worked LSI Example */}
          <div className="mt-10 border-t border-[var(--border)] pt-10">
            <div className="text-[10px] font-bold text-[var(--highlight)] uppercase tracking-[0.15em] mb-4">Legislative Strength Index (LSI) — Worked Example</div>
            {(() => {
              const allScores = computeAllLSI();
              // Pick a mid-range country for illustration
              const example = allScores.find((s) => s.grade === "B") || allScores[Math.floor(allScores.length / 2)];
              return (
                <div className="bg-[var(--muted)] p-6 max-w-3xl">
                  <div className="text-sm font-bold text-[var(--accent)] mb-4">
                    Example: {example.country.name} ({example.country.code}) — LSI {example.total}/100, Grade {example.grade}
                  </div>
                  <div className="space-y-3 text-xs text-[var(--accent-soft)]">
                    <div className="grid grid-cols-[1fr_auto_auto] gap-x-6 gap-y-2">
                      <span className="font-bold text-[var(--accent)]">Dimension</span>
                      <span className="font-bold text-[var(--accent)] text-right">Score</span>
                      <span className="font-bold text-[var(--accent)] text-right">Max</span>

                      <span>1. Coverage Breadth ({example.coveredCategories.length}/8 categories)</span>
                      <span className="text-right font-bold">{example.breadth}</span>
                      <span className="text-right">40</span>

                      <span>2. Penalty Severity ({example.maxImprisonmentYears > 0 ? `${example.maxImprisonmentYears}yr max imprisonment` : "no imprisonment data"})</span>
                      <span className="text-right font-bold">{example.penalty}</span>
                      <span className="text-right">25</span>

                      <span>3. Legislative Recency (primary law: {example.country.mainLawYear > 0 ? example.country.mainLawYear : "unknown"})</span>
                      <span className="text-right font-bold">{example.recency}</span>
                      <span className="text-right">15</span>

                      <span>4. Legal Personhood ({example.personhood > 0 ? "recognized" : "not recognized"})</span>
                      <span className="text-right font-bold">{example.personhood}</span>
                      <span className="text-right">10</span>

                      <span>5. Legislative Depth ({example.lawCount} entries across {example.coveredCategories.length} categories)</span>
                      <span className="text-right font-bold">{example.depth}</span>
                      <span className="text-right">10</span>

                      <span className="font-bold text-[var(--accent)] border-t border-[var(--border)] pt-2">Total</span>
                      <span className="text-right font-bold text-[var(--accent)] border-t border-[var(--border)] pt-2">{example.total}</span>
                      <span className="text-right border-t border-[var(--border)] pt-2">100</span>
                    </div>
                  </div>
                  <div className="mt-4 text-xs text-[var(--accent-soft)]">
                    <Link href={`/country/${example.country.code}`} className="text-[var(--highlight)] font-bold hover:underline">
                      View full {example.country.name} profile &rarr;
                    </Link>
                  </div>
                </div>
              );
            })()}
            <p className="text-xs text-[var(--accent-soft)] mt-4 max-w-3xl leading-relaxed">
              The LSI is designed for relative comparison, not absolute measurement.
              Grade boundaries: A (70+), B (55--69), C (40--54), D (25--39), F (&lt;25).
              See the <Link href="/insights" className="text-[var(--highlight)] font-bold hover:underline">Insights page</Link> for full rankings.
            </p>
          </div>
        </section>

        <div className="border-t border-[var(--border)]" />

        {/* How to Cite */}
        <section id="cite" className="bg-white border border-[var(--border)] p-10">
          <div className="ll-divider mb-4" />
          <h2 className="text-lg font-bold text-[var(--accent)] mb-6">
            How to Cite Fe Laws
          </h2>
          <p className="max-w-3xl text-[var(--accent-soft)] text-[15px] leading-[1.8] mb-8">
            When using Fe Laws data in published academic work, legal briefs, or policy documents, please use one of the following citation formats. For individual law entries, use the Bluebook-style citation available in the <Link href="/database" className="text-[var(--highlight)] font-bold hover:underline">Database</Link> — each entry includes a &ldquo;Copy Citation&rdquo; button.
          </p>
          <div className="max-w-3xl space-y-6">
            <div className="bg-[var(--muted)] p-6">
              <div className="text-[10px] font-bold text-[var(--highlight)] uppercase tracking-[0.15em] mb-3">Citing the Platform (Bluebook)</div>
              <p className="font-mono text-sm text-[var(--accent)] leading-relaxed">
                Fe Laws, <em>Global Animal Protection Law Database</em>, felaws.vercel.app (last visited {new Date().getFullYear()}).
              </p>
            </div>
            <div className="bg-[var(--muted)] p-6">
              <div className="text-[10px] font-bold text-[var(--highlight)] uppercase tracking-[0.15em] mb-3">Citing the Platform (APA 7th)</div>
              <p className="font-mono text-sm text-[var(--accent)] leading-relaxed">
                Fe Laws. ({new Date().getFullYear()}). <em>Global animal protection law database</em>. felaws.vercel.app
              </p>
            </div>
            <div className="bg-[var(--muted)] p-6">
              <div className="text-[10px] font-bold text-[var(--highlight)] uppercase tracking-[0.15em] mb-3">Citing a Country Profile (Bluebook)</div>
              <p className="font-mono text-sm text-[var(--accent)] leading-relaxed">
                Fe Laws, <em>Animal Protection Law Profile: [Country Name]</em>, felaws.vercel.app/country/[CODE] (last visited {new Date().getFullYear()}).
              </p>
            </div>
            <div className="bg-[var(--muted)] p-6">
              <div className="text-[10px] font-bold text-[var(--highlight)] uppercase tracking-[0.15em] mb-3">Citing the LSI Methodology</div>
              <p className="font-mono text-sm text-[var(--accent)] leading-relaxed">
                Fe Laws, <em>Legislative Strength Index: Methodology and Scoring</em>, felaws.vercel.app/about#methodology (last visited {new Date().getFullYear()}).
              </p>
            </div>
            <p className="text-xs text-[var(--accent-soft)] leading-relaxed">
              Country profile pages include a country-specific citation in the profile header. Individual law entries carry Bluebook citations accessible via the Database page.
            </p>
          </div>
        </section>

        <div className="border-t border-[var(--border)]" />

        {/* Disclaimer */}
        <section className="bg-[var(--muted)] p-10">
          <h2 className="text-xs tracking-[0.15em] uppercase text-[var(--accent-soft)] mb-3 font-bold">
            Disclaimer
          </h2>
          <p className="text-sm text-[var(--accent-soft)] leading-[1.8] max-w-3xl">
            The information provided on Fe Laws is for educational and
            informational purposes only and does not constitute legal advice.
            Legislation is subject to amendment, and this database may not
            reflect the most recent enactments or revisions. Users should
            consult qualified legal counsel for guidance on specific legal
            matters.
          </p>
        </section>
      </div>
    </div>
  );
}
