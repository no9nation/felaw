"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { countries, laws, regions } from "@/data/laws";
import type { CountryInfo } from "@/data/laws";
import { computeAllLSI, computeRegionalLSI, computeTimeline, type LSIScore } from "@/data/lsi";
import { getAllLandmarkCases, getHistoricalCases, type LandmarkCase, type LandmarkCaseEra } from "@/data/landmark-cases";
import { getLegalFamily, LEGAL_FAMILY_COLORS, LEGAL_FAMILY_DESCRIPTIONS, type LegalFamily } from "@/data/legal-families";

// Core categories that every country ideally should have
const CORE_CATEGORIES = [
  "Anti-Cruelty",
  "Wildlife Protection",
  "Companion Animals",
  "Farm Animals",
  "Animal Testing",
  "Slaughter Regulations",
  "Penalties",
  "Animal Rights & Legal Personhood",
] as const;

const CATEGORY_LABELS: Record<string, { short: string; desc: string }> = {
  "Anti-Cruelty": { short: "Anti-Cruelty", desc: "Criminal penalties for animal abuse" },
  "Wildlife Protection": { short: "Wildlife", desc: "Endangered species & habitat protection" },
  "Companion Animals": { short: "Companions", desc: "Pet ownership, registration, welfare" },
  "Farm Animals": { short: "Farm Animals", desc: "Livestock welfare standards" },
  "Animal Testing": { short: "Testing", desc: "Regulation of animal experiments" },
  "Slaughter Regulations": { short: "Slaughter", desc: "Humane slaughter requirements" },
  "Penalties": { short: "Penalties", desc: "Criminal enforcement & sentencing" },
  "Animal Rights & Legal Personhood": { short: "Legal Personhood", desc: "Rights of nature, sentience recognition" },
};

function computeCountryGaps() {
  return countries.map((c) => {
    const countryLaws = laws.filter((l) => l.countryCode === c.code);
    const coveredCategories = [...new Set(countryLaws.map((l) => l.category))];
    const gaps = CORE_CATEGORIES.filter((cat) => !coveredCategories.includes(cat));
    const coverage = coveredCategories.length / CORE_CATEGORIES.length;
    return { country: c, covered: coveredCategories, gaps, coverage, lawCount: countryLaws.length };
  });
}

function computeGlobalStats() {
  const allCats = CORE_CATEGORIES.map((cat) => {
    const countriesWithCat = new Set(laws.filter((l) => l.category === cat).map((l) => l.countryCode));
    return { category: cat, count: countriesWithCat.size, pct: Math.round((countriesWithCat.size / countries.length) * 100) };
  });

  const lpCountries = new Set(
    laws.filter((l) => l.category === "Animal Rights & Legal Personhood").map((l) => l.countryCode)
  );

  const avgLawsPerCountry = Math.round((laws.length / countries.length) * 10) / 10;

  const lawsByDecade: Record<string, number> = {};
  countries.forEach((c) => {
    if (c.mainLawYear > 0) {
      const decade = `${Math.floor(c.mainLawYear / 10) * 10}s`;
      lawsByDecade[decade] = (lawsByDecade[decade] || 0) + 1;
    }
  });

  return { allCats, lpCountries: lpCountries.size, avgLawsPerCountry, lawsByDecade };
}

function computeRegionalStats() {
  return regions.map((region) => {
    const regionCountries = countries.filter((c) => c.region === region);
    const regionLaws = laws.filter((l) => regionCountries.some((c) => c.code === l.countryCode));

    const catCoverage = CORE_CATEGORIES.map((cat) => {
      const withCat = regionCountries.filter((c) =>
        regionLaws.some((l) => l.countryCode === c.code && l.category === cat)
      ).length;
      return { category: cat, count: withCat, pct: Math.round((withCat / regionCountries.length) * 100) };
    });

    const avgCoverage =
      regionCountries.reduce((sum, c) => {
        const cats = new Set(regionLaws.filter((l) => l.countryCode === c.code).map((l) => l.category));
        return sum + cats.size / CORE_CATEGORIES.length;
      }, 0) / regionCountries.length;

    return { region, countries: regionCountries.length, laws: regionLaws.length, catCoverage, avgCoverage };
  });
}

// Stat card component
function StatCard({ value, label, sub }: { value: string | number; label: string; sub?: string }) {
  return (
    <div className="bg-white border border-[var(--border)] p-8 hover:bg-[var(--muted)] transition-colors">
      <div className="text-4xl font-bold tracking-tight text-[var(--highlight)]">{value}</div>
      <div className="text-sm font-bold text-[var(--accent)] mt-3 tracking-tight uppercase">{label}</div>
      {sub && <div className="text-xs text-[var(--accent-soft)] mt-1">{sub}</div>}
    </div>
  );
}

function GlobalDashboard() {
  const stats = useMemo(computeGlobalStats, []);

  return (
    <div className="space-y-12">
      <div>
        <div className="ll-divider mb-4" />
        <h2 className="text-3xl font-bold tracking-tight text-[var(--accent)]">Global Overview</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mt-8 border border-[var(--border)] divide-x divide-y divide-[var(--border)]">
          <StatCard value={countries.length} label="Countries Surveyed" sub="across 10 regions" />
          <StatCard value={laws.length} label="Law Entries" sub={`avg ${stats.avgLawsPerCountry} per country`} />
          <StatCard value={stats.lpCountries} label="Legal Personhood" sub="countries with recognition" />
          <StatCard value={`${stats.allCats.find((c) => c.category === "Anti-Cruelty")?.pct}%`} label="Anti-Cruelty Coverage" sub="of countries have laws" />
        </div>
      </div>

      {/* Category coverage bars */}
      <div>
        <div className="text-xs font-bold text-[var(--accent-soft)] mb-6 uppercase tracking-[0.15em]">Global Category Coverage</div>
        <div className="space-y-4">
          {stats.allCats
            .sort((a, b) => b.pct - a.pct)
            .map((cat) => (
              <div key={cat.category} className="flex items-center gap-4">
                <div className="w-36 text-xs font-bold text-[var(--accent)] shrink-0">
                  {CATEGORY_LABELS[cat.category]?.short || cat.category}
                </div>
                <div className="flex-1 bg-[var(--muted)] h-2.5 overflow-hidden">
                  <div
                    className="h-full transition-all bg-[var(--accent)]"
                    style={{ width: `${Math.max(cat.pct, 3)}%` }}
                  />
                </div>
                <div className="w-12 text-xs font-bold text-[var(--accent)] text-right shrink-0">{cat.pct}%</div>
                <div className="w-16 text-xs text-[var(--accent-soft)] shrink-0">{cat.count}/{countries.length}</div>
              </div>
            ))}
        </div>
        <p className="text-xs text-[var(--accent-soft)] mt-6">
          Percentage of {countries.length} countries that have at least one law entry in each category.
        </p>
      </div>

      {/* Penalty severity ranking */}
      <div>
        <div className="text-xs font-bold text-[var(--accent-soft)] mb-6 uppercase tracking-[0.15em]">Maximum Imprisonment by Country (Top 15)</div>
        <div className="border border-[var(--border)]">
          {(() => {
            const allLSI = computeAllLSI();
            const withPenalty = allLSI
              .filter((s) => s.maxImprisonmentYears > 0)
              .sort((a, b) => b.maxImprisonmentYears - a.maxImprisonmentYears)
              .slice(0, 15);
            const maxYears = withPenalty[0]?.maxImprisonmentYears || 1;
            return withPenalty.map((s, i) => (
              <div key={s.country.code} className={`flex items-center gap-4 px-5 py-3 hover:bg-[var(--muted)] transition-colors ${i < withPenalty.length - 1 ? "border-b border-[var(--border)]" : ""}`}>
                <span className="text-[10px] font-mono text-[var(--accent-soft)] w-6 shrink-0">#{i + 1}</span>
                <Link href={`/country/${s.country.code}`} className="w-32 shrink-0 text-xs font-bold text-[var(--accent)] hover:text-[var(--highlight)] transition-colors truncate">
                  {s.country.name}
                </Link>
                <div className="flex-1 bg-[var(--muted)] h-2 overflow-hidden">
                  <div
                    className="h-full bg-[var(--highlight)]"
                    style={{ width: `${(s.maxImprisonmentYears / maxYears) * 100}%` }}
                  />
                </div>
                <span className="text-xs font-bold text-[var(--accent)] w-14 text-right shrink-0">{s.maxImprisonmentYears} yr{s.maxImprisonmentYears !== 1 ? "s" : ""}</span>
              </div>
            ));
          })()}
        </div>
        <p className="text-xs text-[var(--accent-soft)] mt-4">
          Maximum imprisonment term for animal cruelty or related offences, as stated in legislation.
          Actual sentences may vary based on judicial discretion and aggravating factors.
        </p>
      </div>

      {/* Category Co-enactment Patterns */}
      <div>
        <div className="text-xs font-bold text-[var(--accent-soft)] mb-2 uppercase tracking-[0.15em]">Legislative Co-enactment Patterns</div>
        <p className="text-xs text-[var(--accent-soft)] mb-6 leading-relaxed max-w-2xl">
          For each category pair, the percentage shows how often countries with the first category also have the second.
          High co-enactment suggests these areas tend to be legislated together, indicating policy clustering.
        </p>
        {(() => {
          const cats = [
            "Anti-Cruelty",
            "Wildlife Protection",
            "Companion Animals",
            "Farm Animals",
            "Animal Testing",
            "Slaughter Regulations",
            "Penalties",
            "Animal Rights & Legal Personhood",
          ] as const;

          // For each ordered pair (A, B), compute P(B | A)
          const pairs: { a: string; b: string; pctAgivenB: number; countA: number }[] = [];
          for (const catA of cats) {
            const countriesWithA = new Set(laws.filter((l) => l.category === catA).map((l) => l.countryCode));
            if (countriesWithA.size === 0) continue;
            for (const catB of cats) {
              if (catA === catB) continue;
              const countriesWithAandB = [...countriesWithA].filter((code) =>
                laws.some((l) => l.countryCode === code && l.category === catB)
              ).length;
              pairs.push({
                a: CATEGORY_LABELS[catA]?.short || catA,
                b: CATEGORY_LABELS[catB]?.short || catB,
                pctAgivenB: Math.round((countriesWithAandB / countriesWithA.size) * 100),
                countA: countriesWithA.size,
              });
            }
          }

          const top12 = pairs.sort((a, b) => b.pctAgivenB - a.pctAgivenB).slice(0, 12);

          return (
            <div className="border border-[var(--border)] divide-y divide-[var(--border)]">
              <div className="grid grid-cols-[1fr_1fr_auto] bg-[var(--muted)] px-5 py-3 text-[9px] font-bold uppercase tracking-[0.15em] text-[var(--accent-soft)]">
                <span>If country has...</span>
                <span>...it likely also has</span>
                <span className="text-right w-12">Rate</span>
              </div>
              {top12.map((p, i) => (
                <div key={i} className="grid grid-cols-[1fr_1fr_auto] items-center px-5 py-3 hover:bg-[var(--muted)] transition-colors">
                  <span className="text-xs font-bold text-[var(--accent)]">{p.a}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-16 bg-[var(--muted)] h-1.5 overflow-hidden">
                      <div className="h-full bg-[var(--accent)]" style={{ width: `${p.pctAgivenB}%` }} />
                    </div>
                    <span className="text-xs text-[var(--accent-soft)]">{p.b}</span>
                  </div>
                  <span className="text-xs font-bold text-[var(--accent)] text-right w-12">{p.pctAgivenB}%</span>
                </div>
              ))}
            </div>
          );
        })()}
        <p className="text-xs text-[var(--accent-soft)] mt-3 leading-relaxed">
          Conditional probability: the percentage of countries that have category A which also have category B.
          Does not imply causation — reflects shared legislative tradition, capacity, or political will.
        </p>
      </div>
    </div>
  );
}

function GapAnalysis() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<"gaps" | "coverage" | "name">("gaps");

  const gapData = useMemo(computeCountryGaps, []);

  const filtered = gapData
    .filter((d) => !selectedRegion || d.country.region === selectedRegion)
    .sort((a, b) => {
      if (sortBy === "gaps") return b.gaps.length - a.gaps.length;
      if (sortBy === "coverage") return a.coverage - b.coverage;
      return a.country.name.localeCompare(b.country.name);
    });

  return (
    <div className="space-y-8">
      <div>
        <div className="ll-divider mb-4" />
        <h2 className="text-3xl font-bold tracking-tight text-[var(--accent)] mb-3">Gap Analysis</h2>
        <p className="text-sm text-[var(--accent-soft)] leading-relaxed max-w-2xl">
          Identifying the legal gaps that advocates and lawmakers can target across each jurisdiction.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex flex-wrap gap-0">
          <button
            onClick={() => setSelectedRegion(null)}
            className={`px-4 py-2 text-xs font-bold transition-colors border border-[var(--border)] ${
              !selectedRegion ? "bg-[var(--accent)] text-white border-[var(--accent)]" : "text-[var(--accent-soft)] hover:bg-[var(--muted)]"
            }`}
          >
            All Regions
          </button>
          {regions.map((r) => (
            <button
              key={r}
              onClick={() => setSelectedRegion(r)}
              className={`px-4 py-2 text-xs font-bold transition-colors border border-l-0 border-[var(--border)] ${
                selectedRegion === r ? "bg-[var(--accent)] text-white border-[var(--accent)]" : "text-[var(--accent-soft)] hover:bg-[var(--muted)]"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
        <div className="ml-auto flex items-center gap-3 text-xs text-[var(--accent-soft)]">
          <span className="tracking-[0.15em] uppercase text-[10px] font-bold">Sort by</span>
          <div className="flex gap-0">
            {(["gaps", "coverage", "name"] as const).map((s, i) => (
              <button
                key={s}
                onClick={() => setSortBy(s)}
                className={`px-3 py-1.5 text-xs font-bold transition-colors border border-[var(--border)] ${i > 0 ? "border-l-0" : ""} ${
                  sortBy === s ? "bg-[var(--accent)] text-white border-[var(--accent)]" : "text-[var(--accent-soft)] hover:bg-[var(--muted)]"
                }`}
              >
                {s === "gaps" ? "Most Gaps" : s === "coverage" ? "Least Coverage" : "A-Z"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Summary insight */}
      <div className="bg-white border border-[var(--border)] border-l-[3px] border-l-[var(--highlight)] p-6">
        <div className="text-sm font-bold text-[var(--accent)]">
          {filtered.filter((d) => d.gaps.length >= 4).length} countries missing 4+ categories
          <span className="text-[var(--accent-soft)] font-normal"> out of {filtered.length} shown</span>
        </div>
        <div className="text-xs text-[var(--accent-soft)] mt-2">
          Most common gap: {(() => {
            const gapCounts: Record<string, number> = {};
            filtered.forEach((d) => d.gaps.forEach((g) => { gapCounts[g] = (gapCounts[g] || 0) + 1; }));
            const sorted = Object.entries(gapCounts).sort((a, b) => b[1] - a[1]);
            return sorted.length > 0
              ? `${CATEGORY_LABELS[sorted[0][0]]?.short || sorted[0][0]} (${sorted[0][1]} countries lack this)`
              : "None";
          })()}
        </div>
      </div>

      {/* Gap table */}
      <div className="overflow-x-auto bg-white border border-[var(--border)]">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b-[3px] border-b-[var(--highlight)]">
              <th className="text-left py-4 px-4 font-bold uppercase tracking-[0.15em] text-[var(--accent)] text-[10px] sticky left-0 bg-white">Country</th>
              {CORE_CATEGORIES.map((cat) => (
                <th key={cat} className="text-center py-4 px-1 font-bold uppercase tracking-[0.1em] text-[var(--accent)] text-[10px] w-10" title={cat}>
                  <div className="leading-tight">{CATEGORY_LABELS[cat]?.short}</div>
                </th>
              ))}
              <th className="text-center py-4 px-4 font-bold uppercase tracking-[0.15em] text-[var(--accent)] text-[10px]">Score</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((d) => (
              <tr key={d.country.code} className="border-b border-[var(--border)] hover:bg-[var(--muted)] transition-colors">
                <td className="py-3 px-4 sticky left-0 bg-white">
                  <Link href={`/country/${d.country.code}`} className="flex items-center gap-2 group">
                    <span className="text-[10px] font-mono text-[var(--accent-soft)] w-5 shrink-0">{d.country.code}</span>
                    <span className="font-bold text-[var(--accent)] group-hover:text-[var(--highlight)] transition-colors">{d.country.name}</span>
                  </Link>
                </td>
                {CORE_CATEGORIES.map((cat) => {
                  const has = d.covered.includes(cat);
                  return (
                    <td key={cat} className="text-center py-3 px-1">
                      {has ? (
                        <span className="text-[var(--highlight)] text-xs font-bold" title={`Has ${cat}`}>&#10003;</span>
                      ) : (
                        <span className="text-[var(--border)] text-xs" title={`Missing ${cat}`}>&mdash;</span>
                      )}
                    </td>
                  );
                })}
                <td className="text-center py-3 px-4">
                  <span className="text-xs font-bold text-[var(--accent)]">
                    {Math.round(d.coverage * 100)}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function RegionalComparison() {
  const regionalStats = useMemo(computeRegionalStats, []);

  return (
    <div className="space-y-8">
      <div>
        <div className="ll-divider mb-4" />
        <h2 className="text-3xl font-bold tracking-tight text-[var(--accent)] mb-3">Regional Comparison</h2>
        <p className="text-sm text-[var(--accent-soft)] leading-relaxed max-w-2xl">
          How regions compare in animal law coverage and depth of legislative frameworks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[var(--border)]">
        {regionalStats
          .sort((a, b) => b.avgCoverage - a.avgCoverage)
          .map((r, idx) => {
            const grade =
              r.avgCoverage >= 0.6 ? "A" :
              r.avgCoverage >= 0.45 ? "B" :
              r.avgCoverage >= 0.3 ? "C" : "D";

            return (
              <div key={r.region} className="bg-white border-b border-r border-[var(--border)] p-10 hover:bg-[var(--muted)] transition-colors">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-[var(--accent-soft)] font-mono">#{idx + 1}</span>
                      <h3 className="text-xl font-bold tracking-tight text-[var(--accent)]">{r.region}</h3>
                    </div>
                    <div className="text-xs text-[var(--accent-soft)] mt-1.5 ml-7">{r.countries} countries, {r.laws} law entries</div>
                  </div>
                  <span className={`text-sm font-bold px-4 py-1.5 ${
                    grade === "A" ? "bg-[var(--accent)] text-white" :
                    grade === "B" ? "bg-[var(--accent)]/15 text-[var(--accent)]" :
                    grade === "C" ? "bg-[var(--muted)] text-[var(--accent-soft)] border border-[var(--border)]" :
                    "bg-[var(--muted)] text-[var(--accent-soft)] border border-[var(--border)]"
                  }`}>
                    {grade}
                  </span>
                </div>

                <div className="space-y-2.5">
                  {r.catCoverage
                    .sort((a, b) => b.pct - a.pct)
                    .map((cat) => (
                      <div key={cat.category} className="flex items-center gap-3">
                        <span className="text-[10px] font-bold text-[var(--accent-soft)] w-20 shrink-0 truncate">{CATEGORY_LABELS[cat.category]?.short}</span>
                        <div className="flex-1 bg-[var(--muted)] h-2 overflow-hidden">
                          <div
                            className={`h-full ${cat.pct >= 80 ? "bg-[var(--highlight)]" : "bg-[var(--accent)]"}`}
                            style={{ width: `${Math.max(cat.pct, 2)}%` }}
                          />
                        </div>
                        <span className="text-[10px] font-bold text-[var(--accent)] w-8 text-right">{cat.pct}%</span>
                      </div>
                    ))}
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--border)] text-xs text-[var(--accent-soft)]">
                  Average coverage: <span className="font-bold text-[var(--highlight)]">{Math.round(r.avgCoverage * 100)}%</span> of 8 categories
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

function KeyFindings() {
  const gapData = useMemo(computeCountryGaps, []);
  const stats = useMemo(computeGlobalStats, []);
  const allScores = useMemo(computeAllLSI, []);

  const fullCoverage = gapData.filter((d) => d.gaps.length === 0);
  const noCruelty = gapData.filter((d) => d.gaps.includes("Anti-Cruelty"));
  const withLP = gapData.filter((d) => d.covered.includes("Animal Rights & Legal Personhood"));
  const worstGaps = [...gapData].sort((a, b) => b.gaps.length - a.gaps.length).slice(0, 5);

  // Regional LSI gap
  const regionalLSI = useMemo(() => computeRegionalLSI(), []);
  const sortedRegions = [...regionalLSI].sort((a, b) => b.avgScore - a.avgScore);
  const topRegion = sortedRegions[0];
  const bottomRegion = sortedRegions[sortedRegions.length - 1];
  const regionalGap = topRegion && bottomRegion ? topRegion.avgScore - bottomRegion.avgScore : 0;

  // Eta-squared (effect size): legal family membership explains what fraction of LSI variance?
  const familyList: LegalFamily[] = ["Common Law", "Civil Law", "Nordic", "Mixed", "Islamic Law", "Customary"];
  const grandMean = allScores.reduce((sum, s) => sum + s.total, 0) / allScores.length;
  const ssTot = allScores.reduce((sum, s) => sum + (s.total - grandMean) ** 2, 0);
  const ssBet = familyList.reduce((sum, fam) => {
    const famScores = allScores.filter((s) => getLegalFamily(s.country.code).family === fam);
    if (famScores.length === 0) return sum;
    const famMean = famScores.reduce((s2, s) => s2 + s.total, 0) / famScores.length;
    return sum + famScores.length * (famMean - grandMean) ** 2;
  }, 0);
  const etaSquared = ssTot > 0 ? Math.round((ssBet / ssTot) * 100) : 0;

  const findings = [
    {
      title: "Only " + fullCoverage.length + " countries have comprehensive coverage",
      detail: `Out of ${countries.length} countries, only ${fullCoverage.length} cover all 8 law categories: ${fullCoverage.map((d) => d.country.name).join(", ") || "none yet"}.`,
    },
    {
      title: noCruelty.length + " countries lack basic anti-cruelty laws",
      detail: `${noCruelty.map((d) => d.country.code).join(", ")} — These countries have no dedicated anti-cruelty legislation in our database, leaving animals with minimal legal protection.`,
    },
    {
      title: withLP.length + " countries recognize animal rights or legal personhood",
      detail: `The Legal Personhood movement has accelerated since Ecuador's 2008 constitutional recognition. ${withLP.length} countries now have some form of rights recognition — still just ${Math.round((withLP.length / countries.length) * 100)}% globally.`,
    },
    {
      title: "Farm animal welfare is the biggest global gap",
      detail: `Only ${stats.allCats.find((c) => c.category === "Farm Animals")?.pct}% of countries have farm animal welfare laws — the lowest coverage of any category. Billions of farm animals worldwide lack legal protection.`,
    },
    {
      title: `Legal family membership explains ${etaSquared}% of LSI variance`,
      detail: `One-way ANOVA analogue (η² = ${(etaSquared / 100).toFixed(2)}): legal tradition accounts for ${etaSquared}% of the between-country variation in LSI scores, suggesting that legal family is a significant but not determinative predictor of legislative ambition — political economy and civil society remain co-determinants.`,
    },
    {
      title: regionalGap > 0 ? `${regionalGap}-point gap between highest and lowest-scoring regions` : "Regional gap analysis",
      detail: regionalGap > 0
        ? `${topRegion.region} averages LSI ${topRegion.avgScore} vs. ${bottomRegion.region} at ${bottomRegion.avgScore} — a ${regionalGap}-point spread. This geographic clustering suggests institutional diffusion effects: neighbouring jurisdictions tend to borrow legislative models from one another.`
        : "Regional comparison data unavailable.",
    },
    {
      title: "Countries with the most legislative gaps",
      detail: worstGaps.map((d) => `${d.country.name} (${d.country.code}) — missing ${d.gaps.length}/8`).join("; "),
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <div className="ll-divider mb-4" />
        <h2 className="text-3xl font-bold tracking-tight text-[var(--accent)]">Key Findings</h2>
        <p className="text-sm text-[var(--accent-soft)] leading-relaxed mt-3 max-w-2xl">
          The most significant insights from our analysis of {countries.length} countries.
        </p>
      </div>
      <div className="space-y-0 border border-[var(--border)]">
        {findings.map((f, i) => (
          <div key={i} className="bg-white border-b border-[var(--border)] last:border-b-0 border-l-[3px] border-l-[var(--highlight)] pl-8 pr-8 py-6 hover:bg-[var(--muted)] transition-colors">
            <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--accent-soft)] mb-2">Finding {i + 1}</div>
            <h3 className="font-bold text-[var(--accent)] text-sm tracking-tight">{f.title}</h3>
            <p className="text-xs text-[var(--accent-soft)] mt-2 leading-relaxed">{f.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const CASE_TYPES = ["case", "constitutional", "legislation", "guideline", "treaty"] as const;
const TYPE_COLORS: Record<string, string> = {
  case: "bg-[var(--personhood)]/10 text-[var(--personhood)] border-[var(--personhood)]/20",
  constitutional: "bg-[var(--accent)]/10 text-[var(--accent)] border-[var(--accent)]/20",
  legislation: "bg-emerald-50 text-emerald-700 border-emerald-200",
  guideline: "bg-amber-50 text-amber-700 border-amber-200",
  treaty: "bg-purple-50 text-purple-700 border-purple-200",
};

function exportCasesBibTeX(cases: ReturnType<typeof getAllLandmarkCases>) {
  const entries = cases.map((c) => {
    const key = `felaws${c.countryCode.toLowerCase()}${c.year}${c.id.replace(/[^a-z0-9]/g, "")}`;
    const typeMap: Record<string, string> = {
      case: "@misc",
      constitutional: "@misc",
      legislation: "@legislation",
      guideline: "@misc",
      treaty: "@misc",
    };
    const bibtexType = typeMap[c.type] || "@misc";
    const country = countries.find((co) => co.code === c.countryCode);
    return [
      `${bibtexType}{${key},`,
      `  title        = {${c.title}},`,
      `  institution  = {${c.court}},`,
      `  year         = {${c.year}},`,
      `  note         = {${c.significance.replace(/[{}]/g, "")}},`,
      c.citation ? `  howpublished = {${c.citation}},` : null,
      `  keywords     = {${c.tags.join(", ")}},`,
      country ? `  address      = {${country.name}},` : null,
      `}`,
    ].filter(Boolean).join("\n");
  });
  const content = `% Landmark Cases — Fe Laws Animal Protection Law Database
% Generated ${new Date().toISOString().split("T")[0]}
% ${cases.length} entries

` + entries.join("\n\n");
  const blob = new Blob([content], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "felaws-landmark-cases.bib";
  a.click();
  URL.revokeObjectURL(url);
}

const LEGAL_FAMILIES_LIST: LegalFamily[] = ["Common Law", "Civil Law", "Nordic", "Mixed", "Islamic Law", "Customary"];

function LandmarkCasesTab() {
  const allCases = useMemo(getAllLandmarkCases, []);
  const [typeFilter, setTypeFilter] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState("");
  const [regionFilter, setRegionFilter] = useState<string>("");
  const [familyFilter, setFamilyFilter] = useState<string>("");

  // Build region options from cases
  const regionOptions = useMemo(() => {
    const regionSet = new Set<string>();
    allCases.forEach((c) => {
      const country = countries.find((co) => co.code === c.countryCode);
      if (country) regionSet.add(country.region);
    });
    return [...regionSet].sort();
  }, [allCases]);

  const filtered = allCases
    .filter((c) => !typeFilter || c.type === typeFilter)
    .filter((c) => {
      if (!regionFilter) return true;
      const country = countries.find((co) => co.code === c.countryCode);
      return country?.region === regionFilter;
    })
    .filter((c) => !familyFilter || getLegalFamily(c.countryCode).family === familyFilter)
    .filter((c) => {
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        c.title.toLowerCase().includes(q) ||
        c.court.toLowerCase().includes(q) ||
        c.summary.toLowerCase().includes(q) ||
        c.countryCode.toLowerCase().includes(q) ||
        c.tags.some((t) => t.toLowerCase().includes(q))
      );
    })
    .sort((a, b) => b.year - a.year);

  const typeCounts = Object.fromEntries(
    CASE_TYPES.map((t) => [t, allCases.filter((c) => c.type === t).length])
  );

  return (
    <div className="space-y-10">
      <div>
        <div className="ll-divider mb-4" />
        <h2 className="text-3xl font-bold tracking-tight text-[var(--accent)] mb-3">Landmark Cases & Key Decisions</h2>
        <p className="text-sm text-[var(--accent-soft)] mb-8 max-w-2xl leading-relaxed">
          Significant judicial decisions, constitutional milestones, and legislative landmarks in global animal protection law.
          Use these as starting points for comparative legal research and citation.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by keyword, country, court..."
            className="border border-[var(--border)] text-sm px-4 py-2.5 flex-1 min-w-60 outline-none focus:border-[var(--accent)] bg-white text-[var(--accent)]"
          />
          <select
            value={regionFilter}
            onChange={(e) => setRegionFilter(e.target.value)}
            className="border border-[var(--border)] text-sm px-4 py-2.5 outline-none focus:border-[var(--accent)] bg-white text-[var(--accent-soft)]"
          >
            <option value="">All Regions</option>
            {regionOptions.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
          <select
            value={familyFilter}
            onChange={(e) => setFamilyFilter(e.target.value)}
            className="border border-[var(--border)] text-sm px-4 py-2.5 outline-none focus:border-[var(--accent)] bg-white text-[var(--accent-soft)]"
          >
            <option value="">All Legal Families</option>
            {LEGAL_FAMILIES_LIST.map((f) => (
              <option key={f} value={f}>{f}</option>
            ))}
          </select>
          <button
            onClick={() => exportCasesBibTeX(filtered)}
            className="px-4 py-2.5 text-[11px] font-bold border border-[var(--border)] text-[var(--accent-soft)] hover:bg-[var(--muted)] transition-colors"
            title="Export filtered cases as BibTeX"
          >
            ↓ BibTeX ({filtered.length})
          </button>
        </div>
        <div className="flex gap-0 mb-6">
          <button
            onClick={() => setTypeFilter("")}
            className={`px-4 py-2.5 text-[11px] font-bold border border-[var(--border)] transition-colors ${!typeFilter ? "bg-[var(--accent)] text-white border-[var(--accent)]" : "text-[var(--accent-soft)] hover:bg-[var(--muted)]"}`}
          >All ({allCases.length})</button>
          {CASE_TYPES.map((t) => (
            <button
              key={t}
              onClick={() => setTypeFilter(typeFilter === t ? "" : t)}
              className={`px-4 py-2.5 text-[11px] font-bold border border-l-0 border-[var(--border)] transition-colors capitalize ${typeFilter === t ? "bg-[var(--accent)] text-white" : "text-[var(--accent-soft)] hover:bg-[var(--muted)]"}`}
            >{t} ({typeCounts[t] || 0})</button>
          ))}
        </div>

        <p className="text-xs text-[var(--accent-soft)] mb-6">{filtered.length} results</p>

        <div className="space-y-4">
          {filtered.map((c) => {
            const country = countries.find((co) => co.code === c.countryCode);
            const { family } = getLegalFamily(c.countryCode);
            const familyColor = LEGAL_FAMILY_COLORS[family];
            return (
              <div key={c.id} className="border border-[var(--border)] border-l-[3px] border-l-[var(--personhood)] bg-white">
                <div className="p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                        <span className="text-lg">{country?.flag}</span>
                        <Link href={`/country/${c.countryCode}`} className="text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--accent-soft)] hover:text-[var(--highlight)] transition-colors">
                          {country?.name || c.countryCode}
                        </Link>
                        <span
                          className="text-[9px] font-bold px-1.5 py-0.5 uppercase tracking-[0.08em]"
                          style={{ color: familyColor, background: familyColor + "18" }}
                        >
                          {family}
                        </span>
                        <span className="text-[10px] font-mono font-bold text-[var(--highlight)] bg-[var(--highlight)]/10 px-2 py-0.5">{c.year}</span>
                        <span className={`text-[9px] font-bold uppercase tracking-[0.1em] px-2 py-0.5 border capitalize ${TYPE_COLORS[c.type] || ""}`}>{c.type}</span>
                      </div>
                      <h3 className="text-sm font-bold text-[var(--accent)] tracking-tight">{c.title}</h3>
                      <div className="text-[11px] text-[var(--accent-soft)] mt-1">{c.court}</div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--accent-soft)] leading-relaxed mb-3">{c.summary}</p>
                  <div className="bg-[var(--muted)] border-l-2 border-[var(--personhood)] pl-4 py-3 mb-3">
                    <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-[var(--personhood)] mb-1">Global Significance</div>
                    <p className="text-xs text-[var(--accent-soft)] leading-relaxed">{c.significance}</p>
                  </div>
                  {c.citation && (
                    <div className="font-mono text-[10px] text-[var(--accent-soft)] bg-[var(--muted)] border border-[var(--border)] px-3 py-2 select-all mb-3">
                      {c.citation}
                    </div>
                  )}
                  <div className="flex flex-wrap gap-1.5">
                    {c.tags.map((tag) => (
                      <span key={tag} className="text-[9px] font-bold uppercase tracking-[0.1em] bg-[var(--muted)] border border-[var(--border)] px-2 py-0.5 text-[var(--accent-soft)]">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-[var(--muted)] border border-[var(--border)] p-5 mt-6">
          <p className="text-xs text-[var(--accent-soft)] leading-relaxed">
            Case summaries are research-oriented. Always verify against primary sources.
            Citation text is formatted for academic use — highlight to copy.
            Country profiles also feature country-specific landmark cases.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function InsightsPage() {
  const [tab, setTab] = useState<"overview" | "gaps" | "regional" | "lsi" | "sensitivity" | "cases" | "families" | "history">("overview");

  const tabs = [
    { id: "overview" as const, label: "Overview & Findings" },
    { id: "gaps" as const, label: "Gap Analysis" },
    { id: "regional" as const, label: "Regional Comparison" },
    { id: "lsi" as const, label: "LSI Rankings" },
    { id: "families" as const, label: "Legal Families" },
    { id: "cases" as const, label: "Key Cases" },
    { id: "history" as const, label: "Historical Origins" },
    { id: "sensitivity" as const, label: "Sensitivity" },
  ];

  return (
    <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-24">
      <div className="mb-14">
        <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-[var(--accent-soft)] mb-4">Data Analysis</div>
        <h1 className="text-5xl font-bold tracking-tight text-[var(--accent)] mb-3">Insights & Analysis</h1>
        <p className="text-[var(--accent-soft)] text-sm leading-relaxed max-w-2xl">
          Data-driven analysis of animal protection laws across {countries.length} countries,
          examining legislative coverage, regional disparities, and critical gaps.
        </p>
      </div>

      {/* Tabs - sharp Linklaters style */}
      <div className="flex gap-0 mb-14">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-6 py-3 text-sm font-bold transition-colors ${
              tab === t.id
                ? "bg-[var(--accent)] text-white"
                : "border border-[var(--border)] text-[var(--accent-soft)] hover:bg-[var(--muted)] hover:text-[var(--accent)]"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "overview" && (
        <div className="space-y-24">
          <GlobalDashboard />
          <div className="border-t border-[var(--border)]" />
          <KeyFindings />
          <div className="border-t border-[var(--border)]" />
          {/* Methodology & Limitations disclosure */}
          <div className="space-y-6">
            <div>
              <div className="ll-divider mb-4" />
              <h2 className="text-3xl font-bold tracking-tight text-[var(--accent)]">Methodology & Limitations</h2>
              <p className="text-sm text-[var(--accent-soft)] leading-relaxed mt-3 max-w-2xl">
                Transparency in methodology is essential for responsible use of comparative legal data.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[var(--border)]">
              <div className="p-8 border-b md:border-b-0 md:border-r border-[var(--border)]">
                <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--highlight)] mb-3">What LSI Measures</div>
                <ul className="text-xs text-[var(--accent-soft)] leading-[1.8] space-y-1">
                  <li>Breadth of legislative categories covered (40 pts)</li>
                  <li>Maximum statutory penalty severity (25 pts)</li>
                  <li>Recency of primary legislation (15 pts)</li>
                  <li>Legal personhood or rights recognition (10 pts)</li>
                  <li>Depth of legislative entries per category (10 pts)</li>
                </ul>
              </div>
              <div className="p-8">
                <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--highlight)] mb-3">What LSI Does Not Measure</div>
                <ul className="text-xs text-[var(--accent-soft)] leading-[1.8] space-y-1">
                  <li>Enforcement effectiveness or judicial outcomes</li>
                  <li>Cultural attitudes or public compliance</li>
                  <li>Quality or specificity of individual provisions</li>
                  <li>Sub-national or provincial legislation</li>
                  <li>International treaty obligations or soft law</li>
                </ul>
              </div>
            </div>
            <div className="bg-[var(--muted)] p-6 text-xs text-[var(--accent-soft)] leading-[1.8]">
              <strong className="text-[var(--accent)]">Data currency:</strong> Legislative data is compiled from primary sources and may not reflect the most recent
              amendments. The LSI is designed for relative comparison between jurisdictions, not as an absolute measure of animal welfare.
              Use the <Link href="/insights" className="text-[var(--highlight)] font-bold hover:underline" onClick={() => setTab("sensitivity")}>Sensitivity Analysis</Link> tab
              to explore how rankings change under different weighting assumptions.
            </div>
          </div>
        </div>
      )}
      {tab === "gaps" && <GapAnalysis />}
      {tab === "regional" && <RegionalComparison />}
      {tab === "lsi" && <LSIRankings />}
      {tab === "families" && <LegalFamiliesTab />}
      {tab === "cases" && <LandmarkCasesTab />}
      {tab === "history" && <HistoricalTimeline />}
      {tab === "sensitivity" && <SensitivityAnalysis />}
    </div>
  );
}

// ─── ERA CONFIG ────────────────────────────────────────────

const ERA_CONFIG: Record<LandmarkCaseEra, { label: string; range: string; color: string; desc: string }> = {
  ancient:       { label: "Ancient", range: "3000 BCE – 500 CE", color: "#7c3aed", desc: "Mesopotamia, Egypt, India, Greece, Rome — foundations of animal legal status" },
  medieval:      { label: "Medieval", range: "500 – 1500 CE", color: "#b45309", desc: "Islamic fiqh, Christian theology, European game law — competing frameworks" },
  "early-modern": { label: "Early Modern", range: "1500 – 1900 CE", color: "#2563eb", desc: "Enlightenment philosophy, first anti-cruelty statutes, RSPCA model" },
  modern:        { label: "Modern", range: "1900 CE – present", color: "#16a34a", desc: "Comprehensive welfare law, sentience recognition, legal personhood" },
};

const DOCTRINE_NODES = [
  {
    id: "res-nullius",
    label: "Ferae Naturae / Res Nullius",
    period: "450 BCE – present",
    color: "#7c3aed",
    desc: "Wild animals belong to no one until captured (Roman Twelve Tables, Justinian Digest). Still operative in most wildlife law systems globally.",
    source: "Twelve Tables ~450 BCE → Justinian Digest 533 CE → Common law (Blades v Higgs 1865) → US wildlife law",
  },
  {
    id: "pauperies",
    label: "Pauperies / Strict Liability",
    period: "450 BCE – present",
    color: "#7c3aed",
    desc: "Owners strictly liable for animal-caused harm; originating in Roman noxal surrender. Ancestor of modern product liability and strict liability torts.",
    source: "Twelve Tables → Lex Aquilia 286 BCE → common law scienter doctrine → modern strict liability",
  },
  {
    id: "ahimsa",
    label: "Ahimsa / Non-Harm Principle",
    period: "600 BCE – present",
    color: "#dc2626",
    desc: "Jain and Buddhist principle of non-harm to all sentient beings; incorporated into Hindu dharmaśāstra and state policy under Ashoka and Gandhi.",
    source: "Mahavira ~600 BCE → Ashoka Edicts ~250 BCE → Gandhi political philosophy → India's Constitution",
  },
  {
    id: "amanah",
    label: "Amanah / Islamic Stewardship",
    period: "630 CE – present",
    color: "#dc2626",
    desc: "Humans as trustees (not owners) of creation; animals have ḥuqūq (rights) against cruel treatment. Enforced through ḥisba system from 7th century.",
    source: "Quran (7th c.) → Hadith → Fiqh schools → Hisba enforcement → Modern OIC animal welfare standards",
  },
  {
    id: "indirect-duty",
    label: "Indirect Duty / Aquinas-Kant",
    period: "1265 CE – 1975 CE",
    color: "#b45309",
    desc: "Animals cannot be wronged directly; cruelty is wrong only because it corrupts human character. Dominated Western animal law theory until Singer (1975).",
    source: "Aquinas Summa Theologiae ~1265 → Kant Lectures on Ethics 1780 → UK anti-cruelty legislation 1822–1876",
  },
  {
    id: "sentience",
    label: "Sentience / Utilitarian Framework",
    period: "1789 CE – present",
    color: "#2563eb",
    desc: "Animals matter morally because they can suffer ('Can they suffer?' — Bentham 1789). Foundational to modern welfare law and sentience-recognition provisions.",
    source: "Bentham 1789 → RSPCA 1824 → Singer Animal Liberation 1975 → EU Lisbon Treaty 2007 → national sentience laws",
  },
  {
    id: "personhood",
    label: "Legal Personhood / Rights of Nature",
    period: "2008 – present",
    color: "#16a34a",
    desc: "Non-human entities as legal subjects with enforceable rights. Ecuador Pachamama 2008 → Colombian river personhood → Sandra orangutan 2014.",
    source: "Ecuador Constitution 2008 → Colombia Atrato River 2016 → NZ Te Awa Tupua 2017 → Argentina Sandra 2018",
  },
  {
    id: "metempsychosis",
    label: "Metempsychosis / Animal Logos",
    period: "570 BCE – 500 CE",
    color: "#7c3aed",
    desc: "Greek philosophical tradition (Pythagoras, Porphyry, Plutarch) arguing animals share souls or rationality with humans — generating obligations of justice, not merely welfare.",
    source: "Pythagoras ~570 BCE → Plutarch De Esu Carnium ~100 CE → Porphyry De Abstinentia ~268 CE",
  },
  {
    id: "fusessho",
    label: "Fusesshō / Buddhist Not-Killing (East Asia)",
    period: "675 CE – present",
    color: "#dc2626",
    desc: "Buddhist ahimsa as state law across East Asia: imperial meat prohibition edicts (Japan), Tang Code seasonal hunting bans (China), Korean and Vietnamese adaptations. Most sustained non-Western animal protection tradition.",
    source: "Emperor Tenmu 675 CE → Tang Code 653 CE → Tokugawa Shōrui Awaremi 1685 → modern Buddhist-state animal law",
  },
  {
    id: "seventh-generation",
    label: "Seventh Generation / Relational Stewardship",
    period: "~1450 CE – present",
    color: "#b45309",
    desc: "Indigenous legal principle that decisions must serve seven generations forward. Wildlife treated as treaty relations rather than property. Ubuntu communal stewardship in African customary law.",
    source: "Haudenosaunee Great Law ~1450 CE → Boldt Decision 1974 → UNDRIP 2007 → Juliana v. US climate litigation",
  },
];

function HistoricalTimeline() {
  const historicalCases = useMemo(() => getHistoricalCases(), []);
  const [selectedEra, setSelectedEra] = useState<LandmarkCaseEra | "">("");
  const [selectedCase, setSelectedCase] = useState<string | null>(null);

  const eras: LandmarkCaseEra[] = ["ancient", "medieval", "early-modern", "modern"];

  const filtered = selectedEra
    ? historicalCases.filter((c) => (c.era ?? "modern") === selectedEra)
    : historicalCases;

  // Sort chronologically (BCE = negative years)
  const sorted = [...filtered].sort((a, b) => a.year - b.year);

  // Group by era for the timeline
  const byEra = eras.map((era) => ({
    era,
    cases: historicalCases.filter((c) => (c.era ?? "modern") === era).sort((a, b) => a.year - b.year),
  }));

  function formatYear(y: number): string {
    if (y < 0) return `${Math.abs(y)} BCE`;
    return `${y} CE`;
  }

  function getCaseById(id: string) {
    return historicalCases.find((c) => c.id === id) ?? null;
  }

  const activeCase = selectedCase ? getCaseById(selectedCase) : null;

  return (
    <div className="space-y-16">
      {/* Header */}
      <div>
        <div className="ll-divider mb-4" />
        <h2 className="text-3xl font-bold tracking-tight text-[var(--accent)] mb-3">Historical Origins of Animal & Nature Law</h2>
        <p className="text-sm text-[var(--accent-soft)] leading-relaxed max-w-3xl mb-6">
          고대 메소포타미아부터 현대 법인격 운동까지 — 인간 외 존재의 법적 지위가 어떻게 형성되었는지를 학술적으로 추적합니다.
          Hammurabi의 수의학적 과실책임에서 Justinian의 <em>ferae naturae</em> 교리, Ashoka의 동물보호 칙령,
          이슬람 ḥisba 시스템을 거쳐 Bentham의 "Can they suffer?", 그리고 에콰도르의 Pachamama 헌법에 이르기까지.
        </p>
        <div className="bg-[var(--muted)] border border-[var(--border)] p-5">
          <p className="text-xs text-[var(--accent-soft)] leading-relaxed">
            <strong className="text-[var(--accent)]">Methodological note:</strong>{" "}
            Historical entries are drawn from primary sources and peer-reviewed scholarship.
            Citations are formatted for academic use (highlight to copy). Year dates for ancient texts follow
            standard scholarly consensus with ± notation where disputed.
            This dataset covers <strong>{historicalCases.length}</strong> entries across{" "}
            <strong>4,000+ years</strong> of legal history.
          </p>
        </div>
      </div>

      {/* Doctrine genealogy — the intellectual lineage map */}
      <div>
        <div className="ll-divider mb-4" />
        <h3 className="text-xl font-bold text-[var(--accent)] mb-2">Doctrine Genealogy</h3>
        <p className="text-xs text-[var(--accent-soft)] mb-6 max-w-2xl leading-relaxed">
          Seven major legal doctrines governing non-human legal status, each tracing from ancient origins to present law.
          These doctrines coexist — sometimes in tension — in modern animal law systems.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {DOCTRINE_NODES.map((d) => (
            <div key={d.id} className="border border-[var(--border)] bg-white p-5" style={{ borderLeftColor: d.color, borderLeftWidth: 3 }}>
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="text-xs font-bold text-[var(--accent)]">{d.label}</div>
                <div className="text-[10px] font-mono text-[var(--accent-soft)] shrink-0 whitespace-nowrap">{d.period}</div>
              </div>
              <p className="text-[11px] text-[var(--accent-soft)] leading-relaxed mb-2">{d.desc}</p>
              <div className="text-[9px] font-mono text-[var(--accent-soft)] bg-[var(--muted)] px-2 py-1 leading-relaxed select-all">
                {d.source}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Era filter */}
      <div>
        <div className="ll-divider mb-4" />
        <h3 className="text-xl font-bold text-[var(--accent)] mb-6">Chronological Archive</h3>

        <div className="flex flex-wrap gap-0 mb-8">
          <button
            onClick={() => setSelectedEra("")}
            className={`px-4 py-2.5 text-[11px] font-bold border border-[var(--border)] transition-colors ${!selectedEra ? "bg-[var(--accent)] text-white" : "text-[var(--accent-soft)] hover:bg-[var(--muted)]"}`}
          >
            All Periods ({historicalCases.length})
          </button>
          {eras.map((era) => {
            const cfg = ERA_CONFIG[era];
            const count = historicalCases.filter((c) => (c.era ?? "modern") === era).length;
            if (count === 0) return null;
            return (
              <button
                key={era}
                onClick={() => setSelectedEra(selectedEra === era ? "" : era)}
                className={`px-4 py-2.5 text-[11px] font-bold border border-l-0 border-[var(--border)] transition-colors ${selectedEra === era ? "text-white" : "text-[var(--accent-soft)] hover:bg-[var(--muted)]"}`}
                style={selectedEra === era ? { backgroundColor: cfg.color } : {}}
              >
                {cfg.label} ({count})
              </button>
            );
          })}
        </div>

        {/* Vertical timeline */}
        <div className="relative">
          <div className="absolute left-24 top-0 bottom-0 w-px bg-[var(--border)]" />
          <div className="space-y-0">
            {sorted.map((c, idx) => {
              const era = c.era ?? "modern";
              const cfg = ERA_CONFIG[era];
              const isActive = selectedCase === c.id;
              return (
                <div key={c.id} className="relative flex gap-0">
                  {/* Year column */}
                  <div className="w-24 shrink-0 text-right pr-5 pt-5">
                    <div className="text-[10px] font-mono font-bold" style={{ color: cfg.color }}>
                      {formatYear(c.year)}
                    </div>
                  </div>
                  {/* Timeline dot */}
                  <div className="relative flex flex-col items-center shrink-0">
                    <div
                      className="w-3 h-3 rounded-full border-2 border-white mt-5 shrink-0 z-10"
                      style={{ backgroundColor: cfg.color }}
                    />
                    {idx < sorted.length - 1 && <div className="flex-1 w-px bg-[var(--border)]" />}
                  </div>
                  {/* Content */}
                  <div className="flex-1 pl-5 pb-6 pt-3">
                    <button
                      onClick={() => setSelectedCase(isActive ? null : c.id)}
                      className={`w-full text-left border transition-colors ${isActive ? "border-[var(--accent)] bg-white" : "border-[var(--border)] hover:bg-[var(--muted)] bg-white"}`}
                    >
                      <div className="p-4">
                        <div className="flex items-start gap-3 flex-wrap mb-2">
                          <span
                            className="text-[9px] font-bold uppercase tracking-[0.1em] px-2 py-0.5 shrink-0"
                            style={{ color: cfg.color, backgroundColor: cfg.color + "18" }}
                          >
                            {cfg.label}
                          </span>
                          {c.civilization && (
                            <span className="text-[9px] font-bold uppercase tracking-[0.1em] px-2 py-0.5 bg-[var(--muted)] border border-[var(--border)] text-[var(--accent-soft)] shrink-0">
                              {c.civilization}
                            </span>
                          )}
                          <span className="text-[9px] font-bold uppercase tracking-[0.1em] px-2 py-0.5 border border-[var(--border)] bg-[var(--muted)] text-[var(--accent-soft)] capitalize shrink-0">
                            {c.type}
                          </span>
                        </div>
                        <div className="text-sm font-bold text-[var(--accent)] tracking-tight mb-1">{c.title}</div>
                        <div className="text-[10px] text-[var(--accent-soft)]">{c.court}</div>
                      </div>
                    </button>

                    {/* Expanded content */}
                    {isActive && (
                      <div className="border border-t-0 border-[var(--accent)] bg-white p-6 space-y-4">
                        <div>
                          <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-[var(--accent-soft)] mb-2">Summary</div>
                          <p className="text-sm text-[var(--accent-soft)] leading-relaxed">{c.summary}</p>
                        </div>
                        <div className="bg-[var(--muted)] border-l-2 pl-4 py-3" style={{ borderLeftColor: cfg.color }}>
                          <div className="text-[9px] font-bold uppercase tracking-[0.15em] mb-1" style={{ color: cfg.color }}>Global Significance for Animal Law</div>
                          <p className="text-xs text-[var(--accent-soft)] leading-relaxed">{c.significance}</p>
                        </div>
                        {c.citation && (
                          <div>
                            <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-[var(--accent-soft)] mb-2">Primary Citation</div>
                            <div className="font-mono text-[10px] text-[var(--accent-soft)] bg-[var(--muted)] border border-[var(--border)] px-3 py-2 select-all leading-relaxed">
                              {c.citation}
                            </div>
                          </div>
                        )}
                        <div className="flex flex-wrap gap-1.5">
                          {c.tags.map((tag) => (
                            <span key={tag} className="text-[9px] font-bold uppercase tracking-[0.1em] bg-[var(--muted)] border border-[var(--border)] px-2 py-0.5 text-[var(--accent-soft)]">{tag}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Comparative framework: Legal Status of Animals Across Traditions */}
      <div>
        <div className="ll-divider mb-4" />
        <h3 className="text-xl font-bold text-[var(--accent)] mb-3">Comparative Legal Status Matrix</h3>
        <p className="text-xs text-[var(--accent-soft)] mb-6 max-w-2xl leading-relaxed">
          How major legal traditions have conceptualized the legal status of animals and nature —
          from pure property through quasi-subjects to legal persons.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-xs">
            <thead>
              <tr>
                <th className="text-left p-3 border border-[var(--border)] bg-[var(--muted)] text-[var(--accent-soft)] font-bold text-[10px] uppercase tracking-[0.1em] w-32">Tradition</th>
                <th className="text-left p-3 border border-[var(--border)] bg-[var(--muted)] text-[var(--accent-soft)] font-bold text-[10px] uppercase tracking-[0.1em]">Animal Legal Status</th>
                <th className="text-left p-3 border border-[var(--border)] bg-[var(--muted)] text-[var(--accent-soft)] font-bold text-[10px] uppercase tracking-[0.1em]">Nature Legal Status</th>
                <th className="text-left p-3 border border-[var(--border)] bg-[var(--muted)] text-[var(--accent-soft)] font-bold text-[10px] uppercase tracking-[0.1em]">Duty Basis</th>
                <th className="text-left p-3 border border-[var(--border)] bg-[var(--muted)] text-[var(--accent-soft)] font-bold text-[10px] uppercase tracking-[0.1em] w-40">Key Source</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  tradition: "Mesopotamian",
                  animalStatus: "Res (property); working animals = res mancipi-equivalent",
                  natureStatus: "No independent legal status",
                  dutyBasis: "Economic — duty to maintain working capacity",
                  source: "Hammurabi §§224–252",
                  color: "#7c3aed",
                },
                {
                  tradition: "Ancient Egyptian",
                  animalStatus: "Sacred animals = quasi-divine legal persons; others = property",
                  natureStatus: "Nile river as divine — no separate legal status",
                  dutyBasis: "Religious — divine will & ma'at (cosmic order)",
                  source: "Pharaonic temple law",
                  color: "#7c3aed",
                },
                {
                  tradition: "Hindu / Dharmaśāstra",
                  animalStatus: "Sentient beings (jīva); cattle = sacred; all animals subject to ahimsa duty",
                  natureStatus: "Nature as divine (Bhūmi Devī); rivers as goddesses",
                  dutyBasis: "Religious-moral — dharma, karma, ahimsa",
                  source: "Manusmṛti; Arthaśāstra; Ashoka Edicts",
                  color: "#dc2626",
                },
                {
                  tradition: "Buddhist Law",
                  animalStatus: "Sentient beings in saṃsāra — potential Buddhas; no killing permitted",
                  natureStatus: "Interdependent — no separate legal status but protected de facto",
                  dutyBasis: "Karmic — causing suffering creates negative karma",
                  source: "Ashoka Edicts ~250 BCE; Vinaya Pitaka",
                  color: "#dc2626",
                },
                {
                  tradition: "Classical Islamic",
                  animalStatus: "Amāna (trust) — humans are stewards, not owners; animals have ḥuqūq",
                  natureStatus: "Amāna — all creation = divine trust; khilāfa (stewardship)",
                  dutyBasis: "Religious duty — fard (obligatory) care; cruelty = haram",
                  source: "Quran 6:38; Ḥadīth; Fiqh",
                  color: "#dc2626",
                },
                {
                  tradition: "Roman / Civil Law",
                  animalStatus: "Res corporales (things); ferae naturae = res nullius until capture",
                  natureStatus: "Res communes (air, water); no legal person status",
                  dutyBasis: "Proprietary — duties to avoid culpa (negligence) causing loss",
                  source: "Twelve Tables; Lex Aquilia; Justinian Digest",
                  color: "#7c3aed",
                },
                {
                  tradition: "Common Law",
                  animalStatus: "Property; scienter doctrine for dangerous animals; welfare via statute",
                  natureStatus: "No legal status (public trust doctrine = limited exception)",
                  dutyBasis: "Indirect — Aquinas/Kant desensitisation; Bentham welfare reform",
                  source: "Blades v Higgs (1865); Martin's Act (1822)",
                  color: "#2563eb",
                },
                {
                  tradition: "Modern Welfare Law",
                  animalStatus: "Sentient property — protected things with intrinsic interests",
                  natureStatus: "Limited: rights of nature in 10+ jurisdictions",
                  dutyBasis: "Utilitarian welfare / deontological rights (mixed)",
                  source: "EU Lisbon Treaty Art. 13; Ecuador Constitution 2008",
                  color: "#16a34a",
                },
                {
                  tradition: "Greek Philosophy",
                  animalStatus: "Ensouled beings (Pythagoras); possess logos, capacity for justice (Porphyry)",
                  natureStatus: "Animated cosmos (Stoic pneuma); sacred natural world",
                  dutyBasis: "Philosophical — metempsychosis, justice (dikē), shared rationality",
                  source: "Pythagoras ~570 BCE; Porphyry, De Abstinentia, ~268 CE",
                  color: "#7c3aed",
                },
                {
                  tradition: "Chinese Imperial Law",
                  animalStatus: "Economically protected property; plowing oxen quasi-protected for 700+ years",
                  natureStatus: "State resource — regulated but not rights-bearing",
                  dutyBasis: "Confucian — ren (benevolence); Buddhist seasonal abstinence edicts",
                  source: "Tang Code (唐律疏議) 653 CE; Buddhist imperial edicts",
                  color: "#dc2626",
                },
                {
                  tradition: "Japanese (Buddhist-Shinto)",
                  animalStatus: "Sentient beings (生き物) — killing prohibited in Buddhist periods; dogs state-protected under Tokugawa",
                  natureStatus: "Sacred landscape (satoyama); Shinto kami in animals and landforms",
                  dutyBasis: "Religious — fusesshō (not-killing precept); compassion (awaremi)",
                  source: "Emperor Tenmu Edict 675 CE; Tokugawa Shōrui Awaremi no Rei 1685",
                  color: "#dc2626",
                },
                {
                  tradition: "Indigenous / First Nations",
                  animalStatus: "Relations (not property) — animals as persons in treaty relationships",
                  natureStatus: "Living relative, not resource; seventh-generation stewardship duty",
                  dutyBasis: "Relational — reciprocity, kinship, treaty obligations to species",
                  source: "Haudenosaunee Great Law ~1450 CE; Boldt Decision 1974",
                  color: "#b45309",
                },
                {
                  tradition: "African Customary (Ubuntu)",
                  animalStatus: "Community resource — communal stewardship across generations",
                  natureStatus: "Living community of which humans are members, not owners",
                  dutyBasis: "Relational — ubuntu communal ethic; stewardship as community duty",
                  source: "Alexkor v Richtersveld [2003]; SADC customary wildlife law",
                  color: "#b45309",
                },
                {
                  tradition: "Rights of Nature",
                  animalStatus: "Legal subjects with enforceable rights (emerging)",
                  natureStatus: "Legal person with rights to exist, regenerate, be maintained",
                  dutyBasis: "Intrinsic value / ecocentric theory",
                  source: "Ecuador 2008; NZ Te Awa Tupua 2017; Colombia Atrato 2016",
                  color: "#16a34a",
                },
              ].map((row, i) => (
                <tr key={row.tradition} className={`hover:bg-[var(--muted)] transition-colors ${i % 2 === 0 ? "bg-white" : "bg-[var(--muted)]/40"}`}>
                  <td className="p-3 border border-[var(--border)] font-bold" style={{ color: row.color }}>{row.tradition}</td>
                  <td className="p-3 border border-[var(--border)] text-[var(--accent-soft)]">{row.animalStatus}</td>
                  <td className="p-3 border border-[var(--border)] text-[var(--accent-soft)]">{row.natureStatus}</td>
                  <td className="p-3 border border-[var(--border)] text-[var(--accent-soft)]">{row.dutyBasis}</td>
                  <td className="p-3 border border-[var(--border)] text-[var(--accent-soft)] font-mono text-[9px]">{row.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Scholarly reading list */}
      <div>
        <div className="ll-divider mb-4" />
        <h3 className="text-xl font-bold text-[var(--accent)] mb-3">Core Scholarship</h3>
        <p className="text-xs text-[var(--accent-soft)] mb-6 max-w-2xl">
          Foundational academic works for the comparative history of animal and nature law.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[var(--border)]">
          {[
            { cat: "Ancient & Mesopotamian Law", works: ["Roth, Martha. Law Collections from Mesopotamia and Asia Minor (2nd ed., 1997, Scholars Press)", "Zimmermann, Reinhard. The Law of Obligations: Roman Foundations of the Civilian Tradition (1990, OUP)", "Olivelle, Patrick. Ashoka: Portrait of a Philosopher King (2012, HarperCollins India)"] },
            { cat: "Greek Philosophy of Animals", works: ["Sorabji, Richard. Animal Minds and Human Morals: The Origins of the Western Debate (1993, Duckworth)", "Clark, Gillian (trans.). Porphyry: On Abstinence from Killing Animals (2000, Duckworth)", "Steiner, Gary. Anthropocentrism and Its Discontents (2005, U. Pittsburgh Press)"] },
            { cat: "East Asian Animal Law", works: ["Johnson, Wallace (trans.). The T'ang Code, vol. 1–2 (1979–1997, Princeton UP)", "Bodart-Bailey, Beatrice. The Dog Shogun: The Personality and Policies of Tokugawa Tsunayoshi (2007, U. Hawaii Press)", "Totman, Conrad. A History of Japan (2000, Blackwell) — Ch. 3 on Buddhist governance"] },
            { cat: "Islamic Animal Law", works: ["Masri, Al-Hafiz B.A. Animal Welfare in Islam (2007, Islamic Foundation)", "Foltz, Richard C. Animals in Islamic Tradition and Muslim Cultures (2006, Oneworld)", "Tlili, Sarra. Animals in the Quran (2012, Cambridge UP)"] },
            { cat: "Indigenous & Customary Law", works: ["Lyons, Oren & Mohawk, John (eds.). Exiled in the Land of the Free (1992, Clear Light Publishers)", "Wilkinson, Charles. Messages from Frank's Landing (2000, U. Washington Press)", "Deloria, Vine Jr. & Lytle, Clifford. American Indians, American Justice (1983, U. Texas Press)", "Ramose, Mogobe. African Philosophy Through Ubuntu (1999, Mond Books)"] },
            { cat: "History & Modern Theory", works: ["Thomas, Keith. Man and the Natural World (1983, Allen Lane)", "Ritvo, Harriet. The Animal Estate (1987, Harvard UP)", "Singer, Peter. Animal Liberation (1975, HarperCollins)", "Francione, Gary. Animals as Persons (2008, Columbia UP)", "Favre, David. 'Living Property', 93 Marquette L. Rev. 1021 (2010)"] },
          ].map((section, i) => (
            <div key={section.cat} className={`p-6 ${i % 2 === 0 ? "border-b md:border-b-0 md:border-r" : "border-b last:border-b-0"} border-[var(--border)]`}>
              <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--accent-soft)] mb-3">{section.cat}</div>
              <ul className="space-y-2">
                {section.works.map((w) => (
                  <li key={w} className="text-[11px] text-[var(--accent-soft)] leading-relaxed pl-3 border-l border-[var(--border)]">{w}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface FamilyStat {
  family: LegalFamily;
  count: number;
  avgLSI: number;
  medianLSI: number;
  minLSI: number;
  maxLSI: number;
  topScore: ReturnType<typeof computeAllLSI>[0];
  bottomScore: ReturnType<typeof computeAllLSI>[0];
  catCoverage: { cat: string; pct: number }[];
  personhoodPct: number;
  familyCases: ReturnType<typeof getAllLandmarkCases>;
  scores: ReturnType<typeof computeAllLSI>;
}

function LegalFamiliesTab() {
  const allScores = useMemo(() => computeAllLSI(), []);
  const allCases = useMemo(() => getAllLandmarkCases(), []);

  // Build per-family stats
  const familyStats = useMemo((): FamilyStat[] => {
    const familyList: LegalFamily[] = ["Common Law", "Civil Law", "Nordic", "Mixed", "Islamic Law", "Customary"];
    const result: FamilyStat[] = [];
    for (const family of familyList) {
      const familyScores = allScores.filter((s) => getLegalFamily(s.country.code).family === family);
      if (familyScores.length === 0) continue;
      const avgLSI = Math.round(familyScores.reduce((sum, s) => sum + s.total, 0) / familyScores.length);
      const sortedScores = [...familyScores].sort((a, b) => a.total - b.total);
      const midIdx = Math.floor(sortedScores.length / 2);
      const medianLSI = sortedScores.length % 2 === 0
        ? Math.round((sortedScores[midIdx - 1].total + sortedScores[midIdx].total) / 2)
        : sortedScores[midIdx].total;
      const minLSI = sortedScores[0].total;
      const maxLSI = sortedScores[sortedScores.length - 1].total;
      const catCoverage = CORE_CATEGORIES.map((cat) => {
        const covered = familyScores.filter((s) => s.coveredCategories.includes(cat)).length;
        return { cat, pct: Math.round((covered / familyScores.length) * 100) };
      }).sort((a, b) => b.pct - a.pct);
      const personhoodPct = Math.round(
        (familyScores.filter((s) => s.personhood > 0).length / familyScores.length) * 100
      );
      const familyCases = allCases.filter((c) => getLegalFamily(c.countryCode).family === family).slice(0, 3);
      result.push({
        family,
        count: familyScores.length,
        avgLSI,
        medianLSI,
        minLSI,
        maxLSI,
        topScore: familyScores[0],
        bottomScore: familyScores[familyScores.length - 1],
        catCoverage,
        personhoodPct,
        familyCases,
        scores: familyScores,
      });
    }
    return result;
  }, [allScores, allCases]);

  // Top 3 families by avg LSI for bar chart scale
  const maxAvgLSI = Math.max(...familyStats.map((f) => f.avgLSI));

  // Key findings: highest/lowest avg, widest dispersion, personhood leader
  const keyFindings = useMemo(() => {
    if (familyStats.length === 0) return null;
    const sorted = [...familyStats].sort((a, b) => b.avgLSI - a.avgLSI);
    const leader = sorted[0];
    const laggard = sorted[sorted.length - 1];
    const widest = [...familyStats].sort((a, b) => (b.maxLSI - b.minLSI) - (a.maxLSI - a.minLSI))[0];
    const personhoodLeader = [...familyStats].sort((a, b) => b.personhoodPct - a.personhoodPct)[0];
    const gap = leader.avgLSI - laggard.avgLSI;
    return { leader, laggard, widest, personhoodLeader, gap };
  }, [familyStats]);

  const [selectedFamily, setSelectedFamily] = useState<LegalFamily | null>(null);

  return (
    <div className="space-y-12">
      <div>
        <div className="ll-divider mb-4" />
        <h2 className="text-3xl font-bold tracking-tight text-[var(--accent)] mb-3">Legal Family Analysis</h2>
        <p className="text-sm text-[var(--accent-soft)] leading-relaxed max-w-3xl">
          Comparative law has long grouped national legal systems into families sharing common historical origins,
          methodology, and doctrine. This analysis examines whether legal family membership correlates with
          animal protection strength — following the taxonomy of Zweigert &amp; Kötz (3rd ed. 1998).
        </p>
      </div>

      {/* Key Findings */}
      {keyFindings && (
        <div className="border border-[var(--border)] bg-[var(--muted)] p-6">
          <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--accent-soft)] mb-4">Key Findings</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-white border border-[var(--border)] p-4">
              <div className="flex items-start gap-2">
                <span className="text-base shrink-0 mt-0.5">1.</span>
                <div>
                  <div className="text-xs font-bold text-[var(--accent)] mb-1">
                    Nordic systems lead by {keyFindings.gap} points
                  </div>
                  <p className="text-[11px] text-[var(--accent-soft)] leading-relaxed">
                    <span className="font-bold" style={{ color: LEGAL_FAMILY_COLORS[keyFindings.leader.family] }}>{keyFindings.leader.family}</span> traditions
                    average LSI {keyFindings.leader.avgLSI} vs.{" "}
                    <span className="font-bold" style={{ color: LEGAL_FAMILY_COLORS[keyFindings.laggard.family] }}>{keyFindings.laggard.family}</span> at{" "}
                    {keyFindings.laggard.avgLSI} — a {keyFindings.gap}-point gap suggesting legal tradition
                    is a significant predictor of legislative ambition.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[var(--border)] p-4">
              <div className="flex items-start gap-2">
                <span className="text-base shrink-0 mt-0.5">2.</span>
                <div>
                  <div className="text-xs font-bold text-[var(--accent)] mb-1">
                    {keyFindings.widest.family} shows highest internal dispersion
                  </div>
                  <p className="text-[11px] text-[var(--accent-soft)] leading-relaxed">
                    <span className="font-bold" style={{ color: LEGAL_FAMILY_COLORS[keyFindings.widest.family] }}>{keyFindings.widest.family}</span> jurisdictions
                    span LSI {keyFindings.widest.minLSI}–{keyFindings.widest.maxLSI} (range: {keyFindings.widest.maxLSI - keyFindings.widest.minLSI} points),
                    indicating that family membership alone does not determine outcomes — political economy
                    and civil society strength remain decisive.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[var(--border)] p-4">
              <div className="flex items-start gap-2">
                <span className="text-base shrink-0 mt-0.5">3.</span>
                <div>
                  <div className="text-xs font-bold text-[var(--accent)] mb-1">
                    Legal personhood concentrated in {keyFindings.personhoodLeader.family} systems
                  </div>
                  <p className="text-[11px] text-[var(--accent-soft)] leading-relaxed">
                    <span className="font-bold" style={{ color: LEGAL_FAMILY_COLORS[keyFindings.personhoodLeader.family] }}>{keyFindings.personhoodLeader.family}</span> leads
                    in rights-of-nature legislation at {keyFindings.personhoodLeader.personhoodPct}%
                    adoption. Constitutional rights frameworks in civil law systems create more
                    tractable pathways for extending legal subjectivity to non-human entities.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[var(--border)] p-4">
              <div className="flex items-start gap-2">
                <span className="text-base shrink-0 mt-0.5">4.</span>
                <div>
                  <div className="text-xs font-bold text-[var(--accent)] mb-1">
                    Median diverges from mean — skewed distributions
                  </div>
                  <p className="text-[11px] text-[var(--accent-soft)] leading-relaxed">
                    Several families show avg/median divergence, indicating right-skewed distributions
                    where a small cluster of high-performing jurisdictions pulls averages above the
                    typical member. Policy diffusion research suggests these leaders act as model
                    exporters under Luhmann&apos;s legal transplant theory.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Summary comparison grid */}
      <div>
        <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--accent-soft)] mb-4">Average LSI by Legal Tradition</div>
        <div className="space-y-3">
          {familyStats
            .sort((a, b) => b.avgLSI - a.avgLSI)
            .map((f) => (
              <button
                key={f.family}
                onClick={() => setSelectedFamily(selectedFamily === f.family ? null : f.family)}
                className={`w-full text-left border transition-colors ${
                  selectedFamily === f.family
                    ? "border-[var(--accent)] bg-[var(--muted)]"
                    : "border-[var(--border)] hover:bg-[var(--muted)]"
                }`}
              >
                <div className="flex items-center gap-4 p-4">
                  <div className="w-36 shrink-0">
                    <div className="text-xs font-bold text-[var(--accent)]">{f.family}</div>
                    <div className="text-[10px] text-[var(--accent-soft)]">{f.count} countries</div>
                  </div>
                  <div className="flex-1 relative h-5 flex items-center">
                    {/* Full-range track */}
                    <div className="absolute inset-0 bg-[var(--muted)]" />
                    {/* Min–max span bar */}
                    <div
                      className="absolute top-0 bottom-0"
                      style={{
                        left: `${(f.minLSI / 100) * 100}%`,
                        width: `${((f.maxLSI - f.minLSI) / 100) * 100}%`,
                        backgroundColor: LEGAL_FAMILY_COLORS[f.family as LegalFamily] + "40",
                      }}
                    />
                    {/* Avg marker */}
                    <div
                      className="absolute top-0 bottom-0 w-1"
                      style={{
                        left: `${(f.avgLSI / 100) * 100}%`,
                        backgroundColor: LEGAL_FAMILY_COLORS[f.family as LegalFamily],
                      }}
                    />
                    {/* Median dot */}
                    <div
                      className="absolute w-2 h-2 rounded-full border border-white"
                      style={{
                        left: `calc(${(f.medianLSI / 100) * 100}% - 4px)`,
                        top: "50%",
                        transform: "translateY(-50%)",
                        backgroundColor: LEGAL_FAMILY_COLORS[f.family as LegalFamily],
                        opacity: 0.7,
                      }}
                    />
                  </div>
                  <div className="w-24 text-right shrink-0">
                    <span className="text-sm font-bold text-[var(--accent)]">{f.avgLSI}</span>
                    <span className="text-[10px] text-[var(--accent-soft)]"> avg</span>
                    <div className="text-[10px] text-[var(--accent-soft)]">{f.minLSI}–{f.maxLSI} range</div>
                  </div>
                  <div className="text-[10px] text-[var(--accent-soft)] w-32 text-right shrink-0 hidden md:block">
                    {f.personhoodPct}% have personhood
                  </div>
                  <span className="text-[10px] text-[var(--accent-soft)] shrink-0">
                    {selectedFamily === f.family ? "▲" : "▼"}
                  </span>
                </div>
              </button>
            ))}
        </div>
      </div>

      {/* Expanded family detail */}
      {selectedFamily && (() => {
        const f = familyStats.find((fs) => fs.family === selectedFamily);
        if (!f) return null;
        return (
          <div className="border border-[var(--accent)] bg-white">
            <div className="p-6 border-b border-[var(--border)]">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <h3 className="text-xl font-bold text-[var(--accent)] mb-1">{selectedFamily}</h3>
                  <p className="text-xs text-[var(--accent-soft)] leading-relaxed max-w-2xl">
                    {LEGAL_FAMILY_DESCRIPTIONS[selectedFamily as LegalFamily]}
                  </p>
                </div>
                <div className="flex gap-6 text-center shrink-0 flex-wrap">
                  <div>
                    <div className="text-2xl font-bold text-[var(--accent)]">{f.avgLSI}</div>
                    <div className="text-[10px] text-[var(--accent-soft)] uppercase tracking-[0.1em]">Avg LSI</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[var(--accent)]">{f.medianLSI}</div>
                    <div className="text-[10px] text-[var(--accent-soft)] uppercase tracking-[0.1em]">Median LSI</div>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[var(--accent)]">{f.minLSI}–{f.maxLSI}</div>
                    <div className="text-[10px] text-[var(--accent-soft)] uppercase tracking-[0.1em]">Range</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[var(--accent)]">{f.count}</div>
                    <div className="text-[10px] text-[var(--accent-soft)] uppercase tracking-[0.1em]">Countries</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[var(--accent)]">{f.personhoodPct}%</div>
                    <div className="text-[10px] text-[var(--accent-soft)] uppercase tracking-[0.1em]">Personhood</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Category coverage */}
              <div className="p-6 border-b md:border-b-0 md:border-r border-[var(--border)]">
                <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--accent-soft)] mb-4">Category Coverage Rates</div>
                <div className="space-y-2">
                  {f.catCoverage.map(({ cat, pct }) => (
                    <div key={cat} className="flex items-center gap-3">
                      <span className="text-[10px] text-[var(--accent)] w-28 shrink-0 truncate">
                        {CATEGORY_LABELS[cat]?.short || cat}
                      </span>
                      <div className="flex-1 bg-[var(--muted)] h-2 overflow-hidden">
                        <div
                          className="h-full"
                          style={{
                            width: `${pct}%`,
                            backgroundColor: pct >= 60 ? "var(--accent)" : pct >= 30 ? "var(--highlight)" : "#9ca3af",
                          }}
                        />
                      </div>
                      <span className="text-[10px] font-bold text-[var(--accent)] w-8 text-right shrink-0">{pct}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top & bottom countries + landmark cases */}
              <div className="p-6">
                <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--accent-soft)] mb-4">Top Countries</div>
                <div className="space-y-2 mb-6">
                  {f.scores.slice(0, 5).map((s, i) => (
                    <Link
                      key={s.country.code}
                      href={`/country/${s.country.code}`}
                      className="flex items-center gap-3 hover:bg-[var(--muted)] px-2 py-1 -mx-2 transition-colors"
                    >
                      <span className="text-[10px] text-[var(--accent-soft)] w-4 shrink-0">#{i + 1}</span>
                      <span className="text-sm">{s.country.flag}</span>
                      <span className="text-xs font-bold text-[var(--accent)] flex-1 truncate">{s.country.name}</span>
                      <span className="text-xs font-bold text-[var(--accent-soft)]">{s.total}</span>
                    </Link>
                  ))}
                </div>
                {f.familyCases.length > 0 && (
                  <>
                    <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--accent-soft)] mb-3">Landmark Cases</div>
                    <div className="space-y-3">
                      {f.familyCases.map((c) => (
                        <div key={c.id} className="bg-[var(--muted)] p-3">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-bold text-[var(--personhood)] bg-[var(--personhood)]/10 px-1.5 py-0.5">{c.year}</span>
                            <span className="text-[10px] font-bold text-[var(--accent)] truncate">{c.title}</span>
                          </div>
                          <p className="text-[10px] text-[var(--accent-soft)] leading-relaxed">{c.significance}</p>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        );
      })()}

      {/* Cross-family category comparison heatmap */}
      <div>
        <div className="ll-divider mb-4" />
        <h3 className="text-xl font-bold text-[var(--accent)] mb-3">Category Coverage by Legal Family</h3>
        <p className="text-xs text-[var(--accent-soft)] mb-6 max-w-2xl leading-relaxed">
          Heatmap showing the percentage of countries in each legal family that have legislation in each core category.
          Reveals structural differences in legislative priorities across legal traditions.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-xs">
            <thead>
              <tr>
                <th className="text-left p-3 border border-[var(--border)] bg-[var(--muted)] text-[var(--accent-soft)] font-bold text-[10px] uppercase tracking-[0.1em] w-28">Category</th>
                {(["Nordic", "Common Law", "Civil Law", "Mixed", "Islamic Law"] as LegalFamily[]).map((fam) => (
                  <th key={fam} className="p-3 border border-[var(--border)] bg-[var(--muted)] text-[10px] font-bold text-center" style={{ color: LEGAL_FAMILY_COLORS[fam] }}>
                    {fam}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {CORE_CATEGORIES.map((cat) => {
                const catLabel = CATEGORY_LABELS[cat]?.short || cat;
                return (
                  <tr key={cat} className="hover:bg-[var(--muted)] transition-colors">
                    <td className="p-3 border border-[var(--border)] text-[var(--accent)] font-bold text-[10px]">{catLabel}</td>
                    {(["Nordic", "Common Law", "Civil Law", "Mixed", "Islamic Law"] as LegalFamily[]).map((fam) => {
                      const famScores = allScores.filter((s) => getLegalFamily(s.country.code).family === fam);
                      if (famScores.length === 0) return <td key={fam} className="p-3 border border-[var(--border)] text-center text-[var(--accent-soft)]">—</td>;
                      const pct = Math.round((famScores.filter((s) => s.coveredCategories.includes(cat)).length / famScores.length) * 100);
                      const intensity = pct >= 80 ? 0.85 : pct >= 50 ? 0.5 : pct >= 25 ? 0.25 : 0.05;
                      return (
                        <td
                          key={fam}
                          className="p-3 border border-[var(--border)] text-center font-bold"
                          style={{ backgroundColor: `${LEGAL_FAMILY_COLORS[fam]}${Math.round(intensity * 255).toString(16).padStart(2, "0")}` }}
                        >
                          <span className={pct >= 50 ? "text-white" : "text-[var(--accent)]"}>{pct}%</span>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="text-[10px] text-[var(--accent-soft)] mt-3 italic">
          Source: Fe Laws database, {countries.length} jurisdictions. Customary and unclassified excluded for clarity.
        </p>
      </div>

      <div className="bg-[var(--muted)] border border-[var(--border)] p-6">
        <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--accent-soft)] mb-2">Methodological Note</div>
        <p className="text-xs text-[var(--accent-soft)] leading-[1.8]">
          Legal family classification follows Zweigert &amp; Kötz, <em>Introduction to Comparative Law</em> (3rd ed. 1998)
          and David &amp; Brierley, <em>Major Legal Systems in the World Today</em> (3rd ed. 1985). Mixed systems are classified
          where two or more traditions exercise significant concurrent influence. Classification reflects the dominant tradition
          for animal protection law specifically — some jurisdictions may follow different traditions in other areas of law.
          Nordic systems are distinguished from civil law due to their distinctive pragmatic methodology and welfare-state legislative history.
        </p>
      </div>
    </div>
  );
}

// Preset weighting schemes representing different theoretical frameworks
const WEIGHT_PRESETS = [
  {
    key: "default",
    label: "Balanced (Default)",
    desc: "Gleichgewichtete Grundwertung — equal theoretical weight per dimension cluster",
    weights: { breadth: 40, penalty: 25, recency: 15, personhood: 10, depth: 10 },
  },
  {
    key: "enforcement",
    label: "Enforcement-Focused",
    desc: "Prioritises criminal deterrence; reflects positivist law-and-economics frameworks (Becker 1968)",
    weights: { breadth: 25, penalty: 45, recency: 10, personhood: 10, depth: 10 },
  },
  {
    key: "rights",
    label: "Rights-Centric",
    desc: "Maximises weight on legal personhood; reflects deontological animal rights theory (Regan 1983)",
    weights: { breadth: 25, penalty: 15, recency: 10, personhood: 40, depth: 10 },
  },
  {
    key: "coverage",
    label: "Coverage-Maximising",
    desc: "Values legislative breadth above all; reflects welfarist utilitarian approach (Singer 1975)",
    weights: { breadth: 60, penalty: 15, recency: 10, personhood: 5, depth: 10 },
  },
  {
    key: "recency",
    label: "Reform-Velocity",
    desc: "Rewards recent legislative activity; captures jurisdictions on an upward trajectory",
    weights: { breadth: 30, penalty: 20, recency: 35, personhood: 10, depth: 5 },
  },
] as const;

/** Spearman rank correlation between two orderings (same-length arrays of country codes) */
function spearmanRho(rankA: string[], rankB: string[]): number {
  const n = rankA.length;
  if (n < 2) return 1;
  const posB = new Map<string, number>();
  rankB.forEach((code, i) => posB.set(code, i + 1));
  let dSqSum = 0;
  rankA.forEach((code, i) => {
    const rA = i + 1;
    const rB = posB.get(code) ?? n;
    dSqSum += (rA - rB) ** 2;
  });
  return 1 - (6 * dSqSum) / (n * (n * n - 1));
}

function SensitivityAnalysis() {
  const DEFAULT_WEIGHTS = { breadth: 40, penalty: 25, recency: 15, personhood: 10, depth: 10 };

  const [breadthW, setBreadthW] = useState(DEFAULT_WEIGHTS.breadth);
  const [penaltyW, setPenaltyW] = useState(DEFAULT_WEIGHTS.penalty);
  const [recencyW, setRecencyW] = useState(DEFAULT_WEIGHTS.recency);
  const [personhoodW, setPersonhoodW] = useState(DEFAULT_WEIGHTS.personhood);
  const [depthW, setDepthW] = useState(DEFAULT_WEIGHTS.depth);

  const totalWeight = breadthW + penaltyW + recencyW + personhoodW + depthW;

  const baseScores = useMemo(computeAllLSI, []);

  const adjustedRankings = useMemo(() => {
    return baseScores
      .map((s) => {
        const adjustedTotal = Math.round(
          (s.breadth / 40) * breadthW +
          (s.penalty / 25) * penaltyW +
          (s.recency / 15) * recencyW +
          (s.personhood / 10) * personhoodW +
          (s.depth / 10) * depthW
        );
        return { ...s, adjustedTotal };
      })
      .sort((a, b) => b.adjustedTotal - a.adjustedTotal);
  }, [baseScores, breadthW, penaltyW, recencyW, personhoodW, depthW]);

  // Spearman ρ: ranking robustness relative to default
  const spearman = useMemo(() => {
    const baseOrder = baseScores.map((s) => s.country.code);
    const adjOrder = adjustedRankings.map((s) => s.country.code);
    const rho = spearmanRho(baseOrder, adjOrder);
    return Math.round(rho * 1000) / 1000;
  }, [baseScores, adjustedRankings]);

  const sensitiveCountries = useMemo(() => {
    const baseRankMap = new Map<string, number>();
    baseScores.forEach((s, i) => baseRankMap.set(s.country.code, i + 1));

    return adjustedRankings
      .map((s, i) => {
        const oldRank = baseRankMap.get(s.country.code)!;
        const newRank = i + 1;
        const change = oldRank - newRank;
        return { ...s, oldRank, newRank, change, absChange: Math.abs(change) };
      })
      .sort((a, b) => b.absChange - a.absChange)
      .slice(0, 10);
  }, [baseScores, adjustedRankings]);

  const top15 = useMemo(() => {
    const baseRankMap = new Map<string, number>();
    baseScores.forEach((s, i) => baseRankMap.set(s.country.code, i + 1));

    return adjustedRankings.slice(0, 15).map((s, i) => {
      const oldRank = baseRankMap.get(s.country.code)!;
      return { ...s, oldRank, newRank: i + 1, change: oldRank - (i + 1) };
    });
  }, [baseScores, adjustedRankings]);

  function resetWeights() {
    setBreadthW(DEFAULT_WEIGHTS.breadth);
    setPenaltyW(DEFAULT_WEIGHTS.penalty);
    setRecencyW(DEFAULT_WEIGHTS.recency);
    setPersonhoodW(DEFAULT_WEIGHTS.personhood);
    setDepthW(DEFAULT_WEIGHTS.depth);
  }

  function loadPreset(preset: typeof WEIGHT_PRESETS[number]) {
    setBreadthW(preset.weights.breadth);
    setPenaltyW(preset.weights.penalty);
    setRecencyW(preset.weights.recency);
    setPersonhoodW(preset.weights.personhood);
    setDepthW(preset.weights.depth);
  }

  const dimensions: { label: string; value: number; setValue: (v: number) => void; defaultVal: number }[] = [
    { label: "Breadth", value: breadthW, setValue: setBreadthW, defaultVal: 40 },
    { label: "Penalty", value: penaltyW, setValue: setPenaltyW, defaultVal: 25 },
    { label: "Recency", value: recencyW, setValue: setRecencyW, defaultVal: 15 },
    { label: "Personhood", value: personhoodW, setValue: setPersonhoodW, defaultVal: 10 },
    { label: "Depth", value: depthW, setValue: setDepthW, defaultVal: 10 },
  ];

  const isDefault = breadthW === 40 && penaltyW === 25 && recencyW === 15 && personhoodW === 10 && depthW === 10;

  return (
    <div className="space-y-16">
      {/* Header */}
      <div>
        <div className="ll-divider mb-4" />
        <h2 className="text-3xl font-bold tracking-tight text-[var(--accent)]">LSI Sensitivity Analysis</h2>
        <p className="text-sm text-[var(--accent-soft)] leading-relaxed mt-3 max-w-2xl">
          Explore how country rankings shift under different weighting schemes. This tool addresses
          a core methodological question: how robust are the LSI rankings to changes in dimension weights?
        </p>
      </div>

      {/* Methodology note */}
      <div className="bg-[var(--muted)] border border-[var(--border)] p-8">
        <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--accent-soft)] mb-3">How It Works</div>
        <p className="text-sm text-[var(--accent-soft)] leading-[1.8] max-w-3xl">
          Adjust the weight allocated to each LSI dimension below. The default weights are
          Breadth 40, Penalty 25, Recency 15, Personhood 10, Depth 10 (total 100).
          Each country&apos;s raw dimension score is normalized by its default maximum, then
          scaled to the new weight. Rankings are recomputed in real time.
        </p>
      </div>

      {/* Preset schemes */}
      <div>
        <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--accent-soft)] mb-3">Theoretical Presets</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {WEIGHT_PRESETS.map((preset) => {
            const isActive =
              breadthW === preset.weights.breadth &&
              penaltyW === preset.weights.penalty &&
              recencyW === preset.weights.recency &&
              personhoodW === preset.weights.personhood &&
              depthW === preset.weights.depth;
            return (
              <button
                key={preset.key}
                onClick={() => loadPreset(preset)}
                className={`text-left p-4 border transition-colors ${
                  isActive
                    ? "border-[var(--accent)] bg-[var(--muted)]"
                    : "border-[var(--border)] hover:bg-[var(--muted)] bg-white"
                }`}
              >
                <div className="text-xs font-bold text-[var(--accent)] mb-1">{preset.label}</div>
                <p className="text-[10px] text-[var(--accent-soft)] leading-relaxed">{preset.desc}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Weight controls */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--accent-soft)]">Weight Configuration</div>
          <button
            onClick={resetWeights}
            disabled={isDefault}
            className={`px-4 py-2 text-xs font-bold border border-[var(--border)] transition-colors ${
              isDefault
                ? "text-[var(--accent-soft)]/40 cursor-not-allowed"
                : "text-[var(--accent)] hover:bg-[var(--muted)]"
            }`}
          >
            Reset to Default
          </button>
        </div>

        {totalWeight !== 100 && (
          <div className="bg-[var(--highlight)]/10 border border-[var(--highlight)] p-4 mb-6">
            <div className="text-xs font-bold text-[var(--highlight)]">
              Warning: Total weight is {totalWeight}, not 100. Results may not be directly comparable to default LSI scores.
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-0 border border-[var(--border)]">
          {dimensions.map((dim, i) => (
            <div
              key={dim.label}
              className={`p-6 bg-white ${i < dimensions.length - 1 ? "border-b sm:border-b-0 sm:border-r border-[var(--border)]" : ""}`}
            >
              <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--accent-soft)] mb-3">{dim.label}</div>
              <div className="text-3xl font-bold tracking-tight text-[var(--accent)] mb-1">{dim.value}</div>
              <div className="text-[10px] text-[var(--accent-soft)] mb-4">default: {dim.defaultVal}</div>
              <div className="flex gap-0">
                <button
                  onClick={() => dim.setValue(Math.max(0, dim.value - 5))}
                  className="flex-1 py-2 text-xs font-bold border border-[var(--border)] text-[var(--accent)] hover:bg-[var(--muted)] transition-colors"
                >
                  -5
                </button>
                <button
                  onClick={() => dim.setValue(dim.value + 5)}
                  className="flex-1 py-2 text-xs font-bold border border-[var(--border)] border-l-0 text-[var(--accent)] hover:bg-[var(--muted)] transition-colors"
                >
                  +5
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mt-4 px-1 flex-wrap gap-3">
          <div className="text-xs text-[var(--accent-soft)]">
            Total: <span className={`font-bold ${totalWeight === 100 ? "text-[var(--accent)]" : "text-[var(--highlight)]"}`}>{totalWeight}</span> / 100
          </div>
          <div className="flex items-center gap-4">
            <div className="text-[10px] text-[var(--accent-soft)]">
              Rank robustness (Spearman ρ vs default):{" "}
              <span className={`font-bold ${spearman >= 0.95 ? "text-[var(--accent)]" : spearman >= 0.85 ? "text-[var(--highlight)]" : "text-red-500"}`}>
                {spearman.toFixed(3)}
              </span>
              {" "}
              <span className="text-[var(--accent-soft)]">
                {spearman >= 0.95 ? "(highly robust)" : spearman >= 0.85 ? "(moderately robust)" : "(structurally different)"}
              </span>
            </div>
            {!isDefault && (
              <div className="text-[10px] text-[var(--accent-soft)]">
                Modified from default weights
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Most Sensitive Countries */}
      <div>
        <div className="ll-divider mb-4" />
        <h2 className="text-3xl font-bold tracking-tight text-[var(--accent)] mb-3">Most Sensitive Countries</h2>
        <p className="text-sm text-[var(--accent-soft)] mb-8">
          Countries whose rank changes the most from default to adjusted weights.
          {isDefault && " Adjust the weights above to see rank changes."}
        </p>

        <div className="border border-[var(--border)]">
          {sensitiveCountries.map((s, i) => (
            <div
              key={s.country.code}
              className={`flex items-center gap-4 px-5 py-4 hover:bg-[var(--muted)] transition-colors ${
                i < sensitiveCountries.length - 1 ? "border-b border-[var(--border)]" : ""
              }`}
            >
              <span className="text-[10px] font-mono text-[var(--accent-soft)] w-6 shrink-0">#{i + 1}</span>
              <Link
                href={`/country/${s.country.code}`}
                className="w-40 shrink-0 text-xs font-bold text-[var(--accent)] hover:text-[var(--highlight)] transition-colors truncate"
              >
                {s.country.name}
              </Link>
              <div className="flex items-center gap-3 flex-1">
                <span className="text-xs text-[var(--accent-soft)] font-mono w-8 text-right">{s.oldRank}</span>
                <span className="text-[10px] text-[var(--accent-soft)]">&rarr;</span>
                <span className="text-xs font-bold text-[var(--accent)] font-mono w-8">{s.newRank}</span>
                <span
                  className={`text-xs font-bold ${
                    s.change > 0
                      ? "text-[var(--highlight)]"
                      : s.change < 0
                      ? "text-[var(--accent-soft)]"
                      : "text-[var(--accent-soft)]"
                  }`}
                >
                  {s.change > 0 ? `+${s.change}` : s.change < 0 ? `${s.change}` : "0"}
                </span>
              </div>
              <div className="text-xs text-[var(--accent-soft)] shrink-0">
                {s.total} &rarr; {s.adjustedTotal}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top 15 adjusted rankings */}
      <div>
        <div className="ll-divider mb-4" />
        <h2 className="text-3xl font-bold tracking-tight text-[var(--accent)] mb-3">Top 15 Adjusted Rankings</h2>
        <p className="text-sm text-[var(--accent-soft)] mb-8">
          Countries ranked by adjusted LSI score under the current weighting scheme.
        </p>

        <div className="overflow-x-auto border border-[var(--border)]">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b-[3px] border-b-[var(--highlight)]">
                <th className="text-left py-4 px-4 font-bold uppercase tracking-[0.15em] text-[var(--accent)] text-[10px] w-12">New</th>
                <th className="text-left py-4 px-4 font-bold uppercase tracking-[0.15em] text-[var(--accent)] text-[10px] w-12">Old</th>
                <th className="text-left py-4 px-4 font-bold uppercase tracking-[0.15em] text-[var(--accent)] text-[10px]">Country</th>
                <th className="text-center py-4 px-3 font-bold uppercase tracking-[0.1em] text-[var(--accent)] text-[10px]">Adj. LSI</th>
                <th className="text-center py-4 px-3 font-bold uppercase tracking-[0.1em] text-[var(--accent)] text-[10px]">Orig. LSI</th>
                <th className="text-center py-4 px-3 font-bold uppercase tracking-[0.1em] text-[var(--accent)] text-[10px]">Change</th>
                <th className="text-center py-4 px-3 font-bold uppercase tracking-[0.1em] text-[var(--accent)] text-[10px] hidden md:table-cell">Breadth</th>
                <th className="text-center py-4 px-3 font-bold uppercase tracking-[0.1em] text-[var(--accent)] text-[10px] hidden md:table-cell">Penalty</th>
                <th className="text-center py-4 px-3 font-bold uppercase tracking-[0.1em] text-[var(--accent)] text-[10px] hidden md:table-cell">Recency</th>
                <th className="text-center py-4 px-3 font-bold uppercase tracking-[0.1em] text-[var(--accent)] text-[10px] hidden lg:table-cell">Person.</th>
                <th className="text-center py-4 px-3 font-bold uppercase tracking-[0.1em] text-[var(--accent)] text-[10px] hidden lg:table-cell">Depth</th>
              </tr>
            </thead>
            <tbody>
              {top15.map((s) => (
                <tr key={s.country.code} className="border-b border-[var(--border)] hover:bg-[var(--muted)] transition-colors">
                  <td className="py-3 px-4 text-[var(--accent)] font-mono font-bold">{s.newRank}</td>
                  <td className="py-3 px-4 text-[var(--accent-soft)] font-mono">{s.oldRank}</td>
                  <td className="py-3 px-4">
                    <Link href={`/country/${s.country.code}`} className="flex items-center gap-2 group">
                      <span className="font-mono text-[10px] text-[var(--accent-soft)]">{s.country.code}</span>
                      <span className="font-bold text-[var(--accent)] group-hover:text-[var(--highlight)] transition-colors">{s.country.name}</span>
                    </Link>
                  </td>
                  <td className="py-3 px-3 text-center">
                    <span className="font-bold text-[var(--accent)] text-sm">{s.adjustedTotal}</span>
                  </td>
                  <td className="py-3 px-3 text-center text-[var(--accent-soft)]">{s.total}</td>
                  <td className="py-3 px-3 text-center">
                    <span className={`font-bold ${s.change > 0 ? "text-[var(--highlight)]" : s.change < 0 ? "text-[var(--accent-soft)]" : "text-[var(--accent-soft)]"}`}>
                      {s.change > 0 ? `+${s.change}` : s.change === 0 ? "--" : s.change}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-center text-[var(--accent-soft)] hidden md:table-cell">{s.breadth}/40</td>
                  <td className="py-3 px-3 text-center text-[var(--accent-soft)] hidden md:table-cell">{s.penalty}/25</td>
                  <td className="py-3 px-3 text-center text-[var(--accent-soft)] hidden md:table-cell">{s.recency}/15</td>
                  <td className="py-3 px-3 text-center text-[var(--accent-soft)] hidden lg:table-cell">{s.personhood}/10</td>
                  <td className="py-3 px-3 text-center text-[var(--accent-soft)] hidden lg:table-cell">{s.depth}/10</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-[var(--accent-soft)] mt-4">
          &ldquo;Change&rdquo; shows rank movement: positive means the country moved up in the adjusted rankings.
          Raw dimension scores (e.g., Breadth /40) reflect original LSI computation; the adjusted total
          rescales these proportionally to the new weights.
        </p>
      </div>
    </div>
  );
}

function LSIRankings() {
  const allScores = useMemo(computeAllLSI, []);
  const regionalLSI = useMemo(computeRegionalLSI, []);
  const timeline = useMemo(computeTimeline, []);
  const [selectedGrade, setSelectedGrade] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = allScores
    .filter((s) => !selectedGrade || s.grade === selectedGrade)
    .filter((s) => {
      if (!searchQuery.trim()) return true;
      const q = searchQuery.trim().toLowerCase();
      return s.country.name.toLowerCase().includes(q) || s.country.code.toLowerCase().includes(q);
    });

  const gradeDistribution = ["A", "B", "C", "D", "F"].map((g) => ({
    grade: g,
    count: allScores.filter((s) => s.grade === g).length,
  }));

  const globalAvg = Math.round(allScores.reduce((sum, s) => sum + s.total, 0) / allScores.length);
  const sortedTotals = [...allScores].sort((a, b) => a.total - b.total).map((s) => s.total);
  const n = sortedTotals.length;
  const globalMedian = n % 2 === 0
    ? Math.round((sortedTotals[n / 2 - 1] + sortedTotals[n / 2]) / 2)
    : sortedTotals[Math.floor(n / 2)];
  const globalStdDev = Math.round(
    Math.sqrt(allScores.reduce((sum, s) => sum + (s.total - globalAvg) ** 2, 0) / n)
  );

  return (
    <div className="space-y-16">
      {/* Methodology note */}
      <div className="bg-[var(--muted)] border border-[var(--border)] p-8">
        <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--accent-soft)] mb-3">Methodology</div>
        <p className="text-sm text-[var(--accent-soft)] leading-[1.8] max-w-3xl">
          The Legislative Strength Index (LSI) is a composite score (0--100) based on five dimensions:
          Coverage Breadth (40%), Penalty Severity (25%), Legislative Recency (15%),
          Legal Personhood Recognition (10%), and Legislative Depth (10%).
          Scores enable cross-jurisdictional comparison but should not be interpreted as
          absolute measures of animal welfare outcomes.
        </p>
      </div>

      {/* Enforcement limitation callout */}
      <div className="bg-white border border-[var(--border)] border-l-[3px] border-l-[var(--highlight)] p-8">
        <div className="text-sm font-bold text-[var(--accent)] mb-2">Important Limitation</div>
        <p className="text-sm text-[var(--accent-soft)] leading-[1.8] max-w-3xl">
          The LSI measures legislative framework strength — the quality and scope of laws as written.
          It does not measure enforcement effectiveness, judicial interpretation, or actual animal welfare
          outcomes. Countries with strong laws on paper may have weak enforcement, and vice versa.
          For enforcement data, see the World Animal Protection&apos;s Animal Protection Index (API)
          and the Voiceless Animal Cruelty Index (VACI).
        </p>
      </div>

      {/* Summary stats */}
      <div>
        <div className="ll-divider mb-4" />
        <h2 className="text-3xl font-bold tracking-tight text-[var(--accent)] mb-8">Global Summary</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0 border border-[var(--border)]">
          <div className="p-6 border-r border-b md:border-b-0 border-[var(--border)]">
            <div className="text-4xl font-bold text-[var(--accent)] tracking-tight">{globalAvg}</div>
            <div className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--accent-soft)] mt-2">Mean LSI</div>
          </div>
          <div className="p-6 border-b md:border-b-0 border-r border-[var(--border)]">
            <div className="text-4xl font-bold text-[var(--accent)] tracking-tight">{globalMedian}</div>
            <div className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--accent-soft)] mt-2">Median LSI</div>
            {globalAvg !== globalMedian && (
              <div className="text-[10px] text-[var(--accent-soft)] mt-1">
                {globalAvg > globalMedian ? "right-skewed" : "left-skewed"}
              </div>
            )}
          </div>
          <div className="p-6 border-r border-b md:border-b-0 border-[var(--border)]">
            <div className="text-4xl font-bold text-[var(--accent)] tracking-tight">±{globalStdDev}</div>
            <div className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--accent-soft)] mt-2">Std Dev</div>
            <div className="text-[10px] text-[var(--accent-soft)] mt-1">score dispersion</div>
          </div>
          <div className="p-6 border-r border-b md:border-b-0 border-[var(--border)]">
            <div className="text-4xl font-bold text-[var(--accent)] tracking-tight">{allScores[0]?.total}</div>
            <div className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--accent-soft)] mt-2">Highest Score</div>
            <div className="text-xs text-[var(--accent-soft)] mt-1 truncate">{allScores[0]?.country.name}</div>
          </div>
          <div className="p-6 border-r border-[var(--border)]">
            <div className="text-4xl font-bold text-[var(--accent)] tracking-tight">{gradeDistribution[0].count}</div>
            <div className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--accent-soft)] mt-2">Grade A</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-[var(--highlight)] tracking-tight">{gradeDistribution[4].count}</div>
            <div className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--accent-soft)] mt-2">Grade F</div>
          </div>
        </div>
      </div>

      {/* Grade distribution bar */}
      <div>
        <div className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--accent-soft)] mb-4">Grade Distribution</div>
        <div className="flex gap-0 h-10 border border-[var(--border)] overflow-hidden">
          {gradeDistribution.map((g) => {
            const pct = (g.count / allScores.length) * 100;
            return (
              <button
                key={g.grade}
                onClick={() => setSelectedGrade(selectedGrade === g.grade ? null : g.grade)}
                className={`flex items-center justify-center text-xs font-bold transition-all ${
                  g.grade === "A" ? "bg-[var(--accent)] text-white" :
                  g.grade === "B" ? "bg-[var(--accent)]/70 text-white" :
                  g.grade === "C" ? "bg-[var(--accent)]/40 text-white" :
                  g.grade === "D" ? "bg-[var(--muted)] text-[var(--accent)]" :
                  "bg-[var(--highlight)]/10 text-[var(--highlight)]"
                } ${selectedGrade === g.grade ? "ring-2 ring-[var(--highlight)] ring-inset" : ""}`}
                style={{ width: `${Math.max(pct, 5)}%` }}
                title={`Grade ${g.grade}: ${g.count} countries (${Math.round(pct)}%)`}
              >
                {g.grade} ({g.count})
              </button>
            );
          })}
        </div>
        {selectedGrade && (
          <div className="text-xs text-[var(--accent-soft)] mt-2">
            Showing {filtered.length} countries with grade {selectedGrade}.
            <button onClick={() => setSelectedGrade(null)} className="text-[var(--highlight)] ml-2 font-bold">Show all</button>
          </div>
        )}
      </div>

      {/* Rankings table */}
      <div>
        <div className="ll-divider mb-4" />
        <h2 className="text-3xl font-bold tracking-tight text-[var(--accent)] mb-3">Country Rankings</h2>
        <p className="text-sm text-[var(--accent-soft)] mb-8">
          {filtered.length} countries ranked by Legislative Strength Index
        </p>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search countries..."
          className="border border-[var(--border)] text-sm px-4 py-2.5 w-full mb-6 outline-none focus:border-[var(--accent)] bg-white text-[var(--accent)]"
        />
        <div className="overflow-x-auto border border-[var(--border)]">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b-[3px] border-b-[var(--highlight)]">
                <th className="text-left py-4 px-4 font-bold uppercase tracking-[0.15em] text-[var(--accent)] text-[10px] w-12">#</th>
                <th className="text-left py-4 px-4 font-bold uppercase tracking-[0.15em] text-[var(--accent)] text-[10px]">Country</th>
                <th className="text-center py-4 px-3 font-bold uppercase tracking-[0.1em] text-[var(--accent)] text-[10px]">LSI</th>
                <th className="text-center py-4 px-3 font-bold uppercase tracking-[0.1em] text-[var(--accent)] text-[10px]">Grade</th>
                <th className="text-center py-4 px-3 font-bold uppercase tracking-[0.1em] text-[var(--accent)] text-[10px] hidden md:table-cell">Breadth</th>
                <th className="text-center py-4 px-3 font-bold uppercase tracking-[0.1em] text-[var(--accent)] text-[10px] hidden md:table-cell">Penalty</th>
                <th className="text-center py-4 px-3 font-bold uppercase tracking-[0.1em] text-[var(--accent)] text-[10px] hidden md:table-cell">Recency</th>
                <th className="text-center py-4 px-3 font-bold uppercase tracking-[0.1em] text-[var(--accent)] text-[10px] hidden lg:table-cell">Personhood</th>
                <th className="text-center py-4 px-3 font-bold uppercase tracking-[0.1em] text-[var(--accent)] text-[10px] hidden lg:table-cell">Depth</th>
                <th className="text-center py-4 px-3 font-bold uppercase tracking-[0.1em] text-[var(--accent)] text-[10px] hidden md:table-cell">Max Prison</th>
                <th className="text-center py-4 px-3 font-bold uppercase tracking-[0.1em] text-[var(--accent)] text-[10px] hidden lg:table-cell" title="Data Confidence: how many verified law entries underpin this score">Conf.</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((s) => {
                const rank = allScores.indexOf(s) + 1;
                return (
                  <tr key={s.country.code} className="border-b border-[var(--border)] hover:bg-[var(--muted)] transition-colors">
                    <td className="py-3 px-4 text-[var(--accent-soft)] font-mono">{rank}</td>
                    <td className="py-3 px-4">
                      <Link href={`/country/${s.country.code}`} className="flex items-center gap-2 group">
                        <span className="font-mono text-[10px] text-[var(--accent-soft)]">{s.country.code}</span>
                        <span className="font-bold text-[var(--accent)] group-hover:text-[var(--highlight)] transition-colors">{s.country.name}</span>
                        <span className="text-[10px] text-[var(--accent-soft)]">{s.country.region}</span>
                      </Link>
                    </td>
                    <td className="py-3 px-3 text-center">
                      <span className="font-bold text-[var(--accent)] text-sm">{s.total}</span>
                    </td>
                    <td className="py-3 px-3 text-center">
                      <span className={`inline-block px-2.5 py-1 text-[10px] font-bold ${
                        s.grade === "A" ? "bg-[var(--accent)] text-white" :
                        s.grade === "B" ? "bg-[var(--accent)]/15 text-[var(--accent)]" :
                        s.grade === "C" ? "bg-[var(--muted)] text-[var(--accent-soft)] border border-[var(--border)]" :
                        s.grade === "D" ? "bg-[var(--muted)] text-[var(--accent-soft)] border border-[var(--border)]" :
                        "bg-[var(--highlight)]/10 text-[var(--highlight)]"
                      }`}>{s.grade}</span>
                    </td>
                    <td className="py-3 px-3 text-center text-[var(--accent-soft)] hidden md:table-cell">{s.breadth}/40</td>
                    <td className="py-3 px-3 text-center text-[var(--accent-soft)] hidden md:table-cell">{s.penalty}/25</td>
                    <td className="py-3 px-3 text-center text-[var(--accent-soft)] hidden md:table-cell">{s.recency}/15</td>
                    <td className="py-3 px-3 text-center text-[var(--accent-soft)] hidden lg:table-cell">{s.personhood}/10</td>
                    <td className="py-3 px-3 text-center text-[var(--accent-soft)] hidden lg:table-cell">{s.depth}/10</td>
                    <td className="py-3 px-3 text-center text-[var(--accent-soft)] hidden md:table-cell">
                      {s.maxImprisonmentYears > 0 ? `${s.maxImprisonmentYears}y` : "--"}
                    </td>
                    <td className="py-3 px-3 text-center hidden lg:table-cell">
                      <span className={`text-[9px] font-bold px-1.5 py-0.5 ${
                        s.dataConfidence === "High" ? "text-emerald-700 bg-emerald-50 border border-emerald-200" :
                        s.dataConfidence === "Medium" ? "text-amber-700 bg-amber-50 border border-amber-200" :
                        "text-red-600 bg-red-50 border border-red-200"
                      }`} title={`${s.dataConfidence} confidence: ${s.lawCount} law entries`}>
                        {s.dataConfidence === "High" ? "H" : s.dataConfidence === "Medium" ? "M" : "L"}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Regional LSI */}
      <div>
        <div className="ll-divider mb-4" />
        <h2 className="text-3xl font-bold tracking-tight text-[var(--accent)] mb-8">Regional Average LSI</h2>
        <div className="space-y-4">
          {regionalLSI.map((r, idx) => (
            <div key={r.region} className="flex items-center gap-4 border border-[var(--border)] p-5 hover:bg-[var(--muted)] transition-colors">
              <span className="text-xs text-[var(--accent-soft)] font-mono w-6">#{idx + 1}</span>
              <div className="w-40 shrink-0">
                <div className="font-bold text-sm text-[var(--accent)] tracking-tight">{r.region}</div>
                <div className="text-[10px] text-[var(--accent-soft)]">{r.countries} countries</div>
              </div>
              <div className="flex-1 bg-[var(--muted)] h-3 overflow-hidden">
                <div
                  className={`h-full ${r.avgScore >= 50 ? "bg-[var(--accent)]" : r.avgScore >= 30 ? "bg-[var(--accent)]/60" : "bg-[var(--highlight)]"}`}
                  style={{ width: `${r.avgScore}%` }}
                />
              </div>
              <span className="text-sm font-bold text-[var(--accent)] w-10 text-right">{r.avgScore}</span>
              <div className="text-[10px] text-[var(--accent-soft)] w-28 text-right shrink-0">
                Top: {r.topCountry.country.name} ({r.topCountry.total})
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div>
        <div className="ll-divider mb-4" />
        <h2 className="text-3xl font-bold tracking-tight text-[var(--accent)] mb-3">Legislative Timeline</h2>
        <p className="text-sm text-[var(--accent-soft)] mb-4">
          Primary animal protection law adoption by decade — with average LSI scores showing legislative quality trends
        </p>

        {/* Decade average LSI trend bars */}
        {(() => {
          const maxAvg = Math.max(...timeline.map((t) => Math.round(t.countries.reduce((s, c) => s + c.score, 0) / t.countries.length)));
          return (
            <div className="border border-[var(--border)] mb-8">
              <div className="grid grid-cols-[auto_1fr_auto_auto] bg-[var(--muted)] px-5 py-3 text-[9px] font-bold uppercase tracking-[0.15em] text-[var(--accent-soft)] gap-4">
                <span>Decade</span>
                <span>Avg LSI Quality (of countries enacting primary law that decade)</span>
                <span className="text-right">Avg LSI</span>
                <span className="text-right w-12">Count</span>
              </div>
              {timeline.map((t) => {
                const avgScore = Math.round(t.countries.reduce((s, c) => s + c.score, 0) / t.countries.length);
                return (
                  <div key={t.decade} className="grid grid-cols-[auto_1fr_auto_auto] items-center px-5 py-4 border-t border-[var(--border)] gap-4 hover:bg-[var(--muted)] transition-colors">
                    <span className="text-sm font-bold text-[var(--accent)] w-16">{t.decade}</span>
                    <div className="flex-1 bg-[var(--muted)] h-3 overflow-hidden">
                      <div
                        className={`h-full transition-all ${avgScore >= 55 ? "bg-[var(--accent)]" : avgScore >= 35 ? "bg-[var(--accent)]/60" : "bg-[var(--highlight)]"}`}
                        style={{ width: `${(avgScore / 100) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-bold text-[var(--accent)] w-10 text-right">{avgScore}</span>
                    <span className="text-xs text-[var(--accent-soft)] w-12 text-right">{t.countries.length} countries</span>
                  </div>
                );
              })}
            </div>
          );
        })()}

        <p className="text-xs text-[var(--accent-soft)] mb-8 leading-relaxed max-w-2xl">
          The trend above shows that countries enacting primary animal protection legislation in more recent decades tend to achieve higher LSI scores — reflecting both stronger baseline standards and more comprehensive coverage frameworks. Note: this reflects the year of the primary law, not all amendments.
        </p>

        <div className="space-y-6">
          {timeline.map((t) => {
            const avgScore = Math.round(t.countries.reduce((s, c) => s + c.score, 0) / t.countries.length);
            return (
              <div key={t.decade} className="flex items-start gap-6">
                <div className="w-20 shrink-0 text-right">
                  <span className="text-lg font-bold text-[var(--accent)] tracking-tight">{t.decade}</span>
                  <div className="text-[10px] text-[var(--accent-soft)]">{t.countries.length} enacted</div>
                  <div className="text-[10px] font-bold text-[var(--highlight)]">avg {avgScore}</div>
                </div>
                <div className="w-px bg-[var(--border)] self-stretch shrink-0" />
                <div className="flex flex-wrap gap-2 flex-1">
                  {t.countries.map((c) => (
                    <Link key={c.code} href={`/country/${c.code}`} className="group border border-[var(--border)] px-3 py-2 hover:bg-[var(--muted)] hover:border-[var(--accent)] transition-colors">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] text-[var(--accent-soft)]">{c.code}</span>
                        <span className="text-xs font-bold text-[var(--accent)] group-hover:text-[var(--highlight)] transition-colors">{c.name}</span>
                      </div>
                      <div className="text-[10px] text-[var(--accent-soft)] mt-0.5">{c.year} · LSI {c.score}</div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
