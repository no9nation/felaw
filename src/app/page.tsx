import type { Metadata } from "next";
import Link from "next/link";
import { countries, laws, categories, regions, getCountriesByRegion } from "@/data/laws";
import { computeAllLSI, computeRegionalLSI } from "@/data/lsi";
import { getAllLandmarkCases } from "@/data/landmark-cases";

export const metadata: Metadata = {
  title: "Fe Laws — Global Animal Protection Law",
  description: `Comprehensive animal protection legislation data across ${126} jurisdictions. Built for legal professionals, policymakers, and advocates.`,
};

export default function Home() {
  const lpCount = new Set(
    laws.filter((l) => l.category === "Animal Rights & Legal Personhood").map((l) => l.countryCode)
  ).size;

  // Pre-compute law counts per country (O(n) instead of O(n*m))
  const lawCountByCountry: Record<string, number> = {};
  for (const l of laws) {
    lawCountByCountry[l.countryCode] = (lawCountByCountry[l.countryCode] || 0) + 1;
  }

  // Recent legislative milestones: laws enacted after 2018 with high significance
  const recentLaws = laws
    .filter((l) => l.year >= 2018)
    .sort((a, b) => b.year - a.year)
    .slice(0, 9);

  // LSI data for hero showcase and regional context
  const allLSI = computeAllLSI();
  const regionalLSI = computeRegionalLSI();
  const regionAvgMap: Record<string, number> = {};
  for (const r of regionalLSI) regionAvgMap[r.region] = r.avgScore;
  const topCountries = allLSI.slice(0, 5);
  const gradeDistribution = { A: 0, B: 0, C: 0, D: 0, F: 0 };
  for (const s of allLSI) gradeDistribution[s.grade as keyof typeof gradeDistribution]++;
  const avgLSI = Math.round(allLSI.reduce((sum, s) => sum + s.total, 0) / allLSI.length);
  const allLandmarkCasesData = getAllLandmarkCases();
  const landmarkCasesCount = allLandmarkCasesData.length;
  const landmarkJurisdictionsCount = new Set(allLandmarkCasesData.map((c) => c.countryCode)).size;

  return (
    <div>
      {/* Hero — data-driven, communicates analytical depth */}
      <section className="bg-[var(--hero-bg)] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#1e1e38] to-[#12122a]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.03]" style={{
          background: "radial-gradient(circle at center, white 0%, transparent 70%)"
        }} />
        <div className="relative max-w-[1320px] mx-auto px-6 lg:px-10 pt-28 pb-24">
          <div className="lg:grid lg:grid-cols-[1fr_380px] lg:gap-16 items-start">
            {/* Left: headline + CTAs */}
            <div>
              <div className="ll-divider mb-8" />
              <h1 className="text-[3rem] sm:text-[4rem] lg:text-[4.5rem] font-bold text-white leading-[1.05] mb-6 tracking-[-0.03em]">
                Animal Protection
                <br />
                Law, Globally
              </h1>
              <p className="text-[17px] text-white/50 mb-4 leading-[1.7] max-w-xl">
                Quantitative analysis of animal protection legislation across {countries.length} jurisdictions.
                Scored, ranked, and compared using the Legislative Strength Index.
              </p>
              <p className="text-[14px] text-white/30 mb-10 leading-[1.7] max-w-lg">
                Built for legal professionals, policymakers, and advocates —
                with policy gap analysis, cross-jurisdictional comparison, and
                evidence-based recommendations.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  href="/map"
                  className="inline-flex items-center px-8 py-4 bg-[var(--highlight)] text-white text-[14px] font-semibold hover:bg-[var(--highlight-soft)] transition-colors duration-200"
                >
                  Explore the Map
                </Link>
                <Link
                  href="/insights"
                  className="inline-flex items-center px-8 py-4 border border-white/20 text-white text-[14px] font-semibold hover:bg-white/5 transition-colors duration-200"
                >
                  View LSI Rankings
                </Link>
              </div>

              {/* Inline stats row */}
              <div className="flex flex-wrap gap-8 text-white/40 text-[13px]">
                <span><strong className="text-white font-bold text-[15px]">{countries.length}</strong> jurisdictions</span>
                <span><strong className="text-white font-bold text-[15px]">{laws.length}</strong> law entries</span>
                <span><strong className="text-white font-bold text-[15px]">{lpCount}</strong> with legal personhood</span>
                <span><strong className="text-white font-bold text-[15px]">{landmarkCasesCount}</strong> landmark cases</span>
              </div>
            </div>

            {/* Right: live LSI snapshot card */}
            <div className="hidden lg:block mt-4">
              <div className="bg-white/[0.04] border border-white/[0.08] p-6">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-5">
                  LSI Global Snapshot
                </div>

                {/* Grade distribution mini-bar */}
                <div className="flex gap-1 mb-4 h-3">
                  {(["A", "B", "C", "D", "F"] as const).map((g) => {
                    const pct = (gradeDistribution[g] / allLSI.length) * 100;
                    const colors = { A: "bg-emerald-500", B: "bg-blue-400", C: "bg-amber-400", D: "bg-orange-400", F: "bg-red-500" };
                    return pct > 0 ? (
                      <div key={g} className={`${colors[g]} opacity-80`} style={{ width: `${pct}%` }}
                        title={`Grade ${g}: ${gradeDistribution[g]} countries (${Math.round(pct)}%)`} />
                    ) : null;
                  })}
                </div>
                <div className="flex justify-between text-[10px] text-white/30 mb-6">
                  <span>A: {gradeDistribution.A}</span>
                  <span>B: {gradeDistribution.B}</span>
                  <span>C: {gradeDistribution.C}</span>
                  <span>D: {gradeDistribution.D}</span>
                  <span>F: {gradeDistribution.F}</span>
                </div>

                {/* Top 5 countries */}
                <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/30 mb-3">
                  Top-Ranked Jurisdictions
                </div>
                <div className="space-y-2.5">
                  {topCountries.map((s, i) => (
                    <Link key={s.country.code} href={`/country/${s.country.code}`}
                      className="flex items-center gap-3 group">
                      <span className="text-[11px] text-white/20 w-4 text-right font-mono">{i + 1}</span>
                      <span className="text-[13px] text-white/70 group-hover:text-white transition-colors flex-1 truncate">
                        {s.country.flag} {s.country.name}
                      </span>
                      <span className="text-[12px] font-bold text-white/50 font-mono">{s.total}</span>
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 ${
                        s.grade === "A" ? "bg-emerald-500/20 text-emerald-400" : "bg-blue-500/20 text-blue-400"
                      }`}>{s.grade}</span>
                    </Link>
                  ))}
                </div>

                {/* Global average */}
                <div className="border-t border-white/[0.08] mt-5 pt-4 flex justify-between items-center">
                  <span className="text-[11px] text-white/30">Global Average</span>
                  <span className="text-[14px] font-bold text-white/60 font-mono">{avgLSI}/100</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities — what makes this platform a research tool, not just a database */}
      <section className="bg-[var(--background)]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-24">
          <div className="mb-16">
            <div className="ll-divider mb-6" />
            <h2 className="text-[2rem] font-bold text-[var(--accent)] mb-4">
              Research & Analysis Tools
            </h2>
            <p className="text-[16px] text-[var(--accent-soft)] max-w-lg leading-[1.7]">
              Beyond a database — quantitative analysis, policy recommendations, and cross-jurisdictional intelligence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)]">
            {[
              { title: "Legislative Strength Index", desc: "Composite scoring (0–100) across 5 dimensions: coverage breadth, penalty severity, recency, legal personhood, and legislative depth. Includes sensitivity analysis.", href: "/insights", num: "01" },
              { title: "Policy Gap Analysis", desc: "Identify missing legislative categories per country with model jurisdiction recommendations, projected LSI impact, and landmark cases for each gap.", href: "/insights", num: "02" },
              { title: "Interactive Map", desc: "Click any jurisdiction to explore its animal protection framework and LSI score. Toggle between LSI Grade and Legal Family coloring modes for tradition-based comparative visualization.", href: "/map", num: "03" },
              { title: "Cross-Jurisdictional Compare", desc: "Side-by-side comparison with LSI dimension breakdowns, legal family analysis (Zweigert & Kötz), landmark cases, auto-generated narrative summary, and BibTeX export.", href: "/compare", num: "04" },
              { title: "Searchable Database", desc: `Full-text search across ${laws.length} entries with filters for legal family, region, category, penalty, and tag — plus CSV export with legal family column and BibTeX.`, href: "/database", num: "05" },
              { title: "Country Profiles", desc: `${countries.length} in-depth profiles with coverage matrices, comparable jurisdictions, what-if impact analysis, and cross-jurisdictional inspiration cases.`, href: `/country/${topCountries[0]?.country.code || "JP"}`, num: "06" },
              { title: "Landmark Cases", desc: `${landmarkCasesCount} landmark judicial decisions and legislative milestones across ${landmarkJurisdictionsCount} jurisdictions — filterable by legal family, region, and case type, each with formal citation and BibTeX export.`, href: "/insights", num: "07" },
              { title: "Legal Family Analysis", desc: "Comparative analysis by legal tradition (Common Law, Civil Law, Nordic, Mixed, Islamic Law) using the Zweigert & Kötz taxonomy — with category coverage heatmaps.", href: "/insights", num: "08" },
            ].map((f) => (
              <Link key={f.title} href={f.href} className="group bg-[var(--background)]">
                <div className="p-8 h-full hover:bg-[var(--muted)] transition-colors duration-300">
                  <span className="text-[11px] font-bold text-[var(--highlight)] tracking-wider mb-3 block">{f.num}</span>
                  <h3 className="font-bold text-[var(--accent)] mb-2 text-[17px] group-hover:text-[var(--highlight)] transition-colors duration-200">
                    {f.title}
                  </h3>
                  <p className="text-[14px] text-[var(--accent-soft)] leading-[1.7]">{f.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="bg-[var(--muted)]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-24">
          <div className="mb-14">
            <div className="ll-divider mb-6" />
            <h2 className="text-[2rem] font-bold text-[var(--accent)] mb-4">
              Global Coverage
            </h2>
            <p className="text-[16px] text-[var(--accent-soft)]">
              {countries.length} jurisdictions across {regions.length} regions
            </p>
          </div>
          {regions.map((region) => {
            const regionCountries = getCountriesByRegion(region);
            return (
              <div key={region} className="mb-12 last:mb-0">
                <div className="flex items-baseline gap-6 mb-5">
                  <h3 className="text-[14px] font-bold text-[var(--accent)] uppercase tracking-wide">{region}</h3>
                  <div className="flex-1 border-t border-[var(--border)]" />
                  <span className="text-[11px] text-[var(--accent-soft)] font-medium">
                    avg LSI <strong className="text-[var(--accent)]">{regionAvgMap[region] || 0}</strong>/100
                  </span>
                  <span className="text-[13px] text-[var(--accent-soft)] tabular-nums font-medium">{regionCountries.length}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {regionCountries.map((country) => {
                    
                    return (
                      <Link
                        key={country.code}
                        href={`/country/${country.code}`}
                        className="group inline-flex items-center gap-2.5 bg-white hover:bg-[var(--accent)] px-4 py-2.5 text-sm transition-all duration-200 border border-[var(--border)] hover:border-[var(--accent)]"
                      >
                        <span className="font-mono text-[11px] text-[var(--accent-soft)] group-hover:text-white/50 transition-colors">{country.code}</span>
                        <span className="text-[var(--accent)] group-hover:text-white font-medium text-[13px] transition-colors">{country.name}</span>
                        <span className="text-[11px] text-[var(--accent-soft)] group-hover:text-white/40 transition-colors tabular-nums">{lawCountByCountry[country.code] || 0}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* For Researchers — concrete research workflows */}
      <section className="bg-[var(--background)] border-t border-[var(--border)]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-24">
          <div className="mb-12">
            <div className="ll-divider mb-6" />
            <h2 className="text-[2rem] font-bold text-[var(--accent)] mb-4">For Researchers</h2>
            <p className="text-[15px] text-[var(--accent-soft)] max-w-xl leading-[1.7]">
              Common research workflows — from comparative analysis to policy advocacy
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                role: "Legal Scholars",
                steps: [
                  { n: "01", text: `Run a keyword search across all ${laws.length} entries to locate statutory text, then export filtered results to CSV`, href: "/database" },
                  { n: "02", text: "Generate Bluebook citations for each law entry directly from the Database (use the Permalink to bookmark individual entries)", href: "/database" },
                  { n: "03", text: "Compare 2–4 jurisdictions side-by-side on penalty severity and legislative coverage", href: "/compare" },
                ],
              },
              {
                role: "Policymakers & Advocates",
                steps: [
                  { n: "01", text: "Review your country's profile: LSI score, coverage gaps, and model jurisdictions with existing legislation in each missing area", href: `/country/${topCountries[0]?.country.code || "JP"}` },
                  { n: "02", text: "Use the What-If Impact Analysis to quantify the projected LSI gain from introducing legislation in each missing category", href: `/country/${topCountries[0]?.country.code || "JP"}` },
                  { n: "03", text: "Check the Gap Analysis tab on Insights to identify which countries in your region have enacted laws you haven't yet", href: "/insights" },
                ],
              },
              {
                role: "Comparative Researchers",
                steps: [
                  { n: "01", text: "Use the Sensitivity Analysis tool to reweight LSI dimensions and see how rankings shift under different normative assumptions", href: "/insights" },
                  { n: "02", text: "Download the full dataset as CSV (Database page) and load into R, Python, or STATA for quantitative analysis", href: "/database" },
                  { n: "03", text: "Use BibTeX export from the Database to import all cited laws directly into citation managers", href: "/database" },
                ],
              },
              {
                role: "Students & Educators",
                steps: [
                  { n: "01", text: "Read the LSI methodology and worked example on the About page — includes weight justifications and methodological limitations to cite in coursework", href: "/about#methodology" },
                  { n: "02", text: "Use country profiles as pre-built jurisdiction summaries with citable data (each profile has a ready-to-use Bluebook and APA citation)", href: `/country/${topCountries[2]?.country.code || "DE"}` },
                  { n: "03", text: "Explore the Timeline tab in Insights to visualize how global animal law has evolved over decades", href: "/insights" },
                ],
              },
              {
                role: "Comparative Law Scholars",
                steps: [
                  { n: "01", text: "Use the Legal Families tab in Insights to analyze how Common Law, Civil Law, and Nordic traditions differ in animal protection — with category-level heatmaps and average LSI by tradition", href: "/insights" },
                  { n: "02", text: `Browse ${landmarkCasesCount} landmark cases across ${landmarkJurisdictionsCount} jurisdictions — filterable by legal family, region, and case type, each formatted with court, summary, significance, and Bluebook-ready citations`, href: "/insights" },
                  { n: "03", text: "On any country profile, see landmark cases from comparable-LSI jurisdictions and from model jurisdictions that address legislative gaps — designed for policy transfer research", href: `/country/${topCountries[0]?.country.code || "JP"}` },
                ],
              },
            ].map((workflow) => (
              <div key={workflow.role} className="border border-[var(--border)] bg-white">
                <div className="px-6 py-4 border-b border-[var(--border)] bg-[var(--muted)]">
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--accent-soft)]">{workflow.role}</h3>
                </div>
                <div className="p-6 space-y-4">
                  {workflow.steps.map((step) => (
                    <Link key={step.n} href={step.href} className="group flex items-start gap-4 hover:bg-[var(--muted)] -mx-2 px-2 py-2 transition-colors">
                      <span className="text-[11px] font-bold text-[var(--highlight)] font-mono shrink-0 mt-0.5">{step.n}</span>
                      <span className="text-[13px] text-[var(--accent-soft)] group-hover:text-[var(--accent)] leading-[1.6] transition-colors">{step.text}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Legislative Milestones */}
      {recentLaws.length > 0 && (
        <section className="bg-[var(--muted)] border-t border-[var(--border)]">
          <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-20">
            <div className="mb-10">
              <div className="ll-divider mb-6" />
              <div className="flex items-baseline justify-between gap-4">
                <div>
                  <h2 className="text-[2rem] font-bold text-[var(--accent)] mb-2">Recent Legislative Activity</h2>
                  <p className="text-[14px] text-[var(--accent-soft)]">Laws enacted from 2018 onwards — showing global legislative momentum</p>
                </div>
                <Link href="/database?yearFrom=2018" className="text-[11px] font-bold uppercase tracking-[0.15em] text-[var(--highlight)] hover:text-[var(--highlight-soft)] transition-colors shrink-0">
                  View all →
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[var(--border)] bg-[var(--border)]">
              {recentLaws.map((law) => {
                const country = countries.find((c) => c.code === law.countryCode);
                return (
                  <Link
                    key={law.id}
                    href={`/country/${law.countryCode}`}
                    className="group bg-white hover:bg-[var(--muted)] transition-colors p-6"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg">{country?.flag}</span>
                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--accent-soft)]">{law.countryCode}</span>
                      <span className="ml-auto text-[10px] font-mono font-bold text-[var(--highlight)]">{law.year}</span>
                    </div>
                    <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--highlight)] mb-1.5">{law.category.split(" ").slice(0, 3).join(" ")}</div>
                    <h3 className="text-sm font-bold text-[var(--accent)] group-hover:text-[var(--highlight)] transition-colors mb-2 leading-snug">{law.topic}</h3>
                    <p className="text-[12px] text-[var(--accent-soft)] leading-relaxed line-clamp-2">{law.summary}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA — specific use cases */}
      <section className="bg-[var(--nav-bg)]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-24">
          <div className="text-center mb-16">
            <div className="ll-divider mx-auto mb-8" />
            <h2 className="text-[2.25rem] font-bold text-white mb-4">
              Start Your Research
            </h2>
            <p className="text-[15px] text-white/40 max-w-lg mx-auto leading-[1.7]">
              Whether you&apos;re drafting legislation, conducting comparative research,
              or advocating for stronger protections — the data is here.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/insights" className="group border border-white/10 p-8 hover:bg-white/[0.04] transition-colors text-center">
              <div className="text-[28px] font-bold text-white mb-2 font-mono">{avgLSI}</div>
              <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/30 mb-3">Global Avg LSI</div>
              <div className="text-[13px] text-white/50 leading-relaxed">
                See how jurisdictions rank and identify where legislation falls short
              </div>
            </Link>
            <Link href="/compare" className="group border border-white/10 p-8 hover:bg-white/[0.04] transition-colors text-center">
              <div className="text-[28px] font-bold text-white mb-2 font-mono">{countries.length}</div>
              <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/30 mb-3">Jurisdictions</div>
              <div className="text-[13px] text-white/50 leading-relaxed">
                Compare up to 4 countries across any legislative category
              </div>
            </Link>
            <Link href="/database" className="group border border-white/10 p-8 hover:bg-white/[0.04] transition-colors text-center">
              <div className="text-[28px] font-bold text-white mb-2 font-mono">{laws.length}</div>
              <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/30 mb-3">Law Entries</div>
              <div className="text-[13px] text-white/50 leading-relaxed">
                Search, filter, and export with Bluebook-style citations
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
