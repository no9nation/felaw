"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { countries, laws, categories, regions, getCountriesByRegion } from "@/data/laws";
import { getCountryLSI, type LSIScore } from "@/data/lsi";
import { getLandmarkCasesByCountry } from "@/data/landmark-cases";
import { getLegalFamily, LEGAL_FAMILY_COLORS } from "@/data/legal-families";

export default function ComparePage() {
  const [selectedCountries, setSelectedCountries] = useState<string[]>([
    "JP",
    "KR",
  ]);

  // Read countries from URL search params on mount (e.g. /compare?countries=JP,KR,DE)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const countriesParam = params.get("countries");
    if (countriesParam) {
      const codes = countriesParam.split(",").filter((c) => countries.some((co) => co.code === c)).slice(0, 4);
      if (codes.length >= 2) setSelectedCountries(codes);
    }
  }, []);
  const [selectedCategory, setSelectedCategory] = useState<string>(
    "Anti-Cruelty"
  );

  const MAX_COUNTRIES = 4;

  function toggleCountry(code: string) {
    setSelectedCountries((prev) =>
      prev.includes(code)
        ? prev.filter((c) => c !== code)
        : prev.length >= MAX_COUNTRIES
          ? prev
          : [...prev, code]
    );
  }

  const comparisonData = selectedCountries.map((code) => {
    const country = countries.find((c) => c.code === code)!;
    const countryLaws = laws.filter(
      (l) => l.countryCode === code && l.category === selectedCategory
    );
    return { country, laws: countryLaws };
  });

  return (
    <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-20">
      {/* Page Header */}
      <div className="mb-16">
        <div className="ll-divider mb-6" />
        <div className="text-xs tracking-[0.3em] uppercase text-[var(--accent-soft)] mb-3 font-medium">
          Comparative Analysis
        </div>
        <h1 className="text-4xl font-semibold text-[var(--accent)] mb-5 tracking-tight">
          Compare Laws
        </h1>
        <p className="text-[var(--accent-soft)] max-w-[680px] leading-relaxed">
          Select countries and a category to compare animal protection laws
          side-by-side across {countries.length} jurisdictions.
        </p>
      </div>

      {/* Country Selection */}
      <div className="ll-card elevation-1 p-8 lg:p-10 mb-12">
        <div className="space-y-10">
          <div>
            <label className="block text-xs tracking-[0.15em] uppercase font-medium text-[var(--accent-soft)] mb-6">
              Select Jurisdictions &mdash; {selectedCountries.length}/{MAX_COUNTRIES} selected
            </label>
            {regions.map((region) => {
              const regionCountries = getCountriesByRegion(region);
              return (
                <div key={region} className="mb-7">
                  <div className="text-xs tracking-[0.15em] font-medium text-[var(--accent-soft)] mb-3 uppercase">
                    {region}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {regionCountries.map((c) => {
                      const isSelected = selectedCountries.includes(c.code);
                      const isDisabled = !isSelected && selectedCountries.length >= MAX_COUNTRIES;
                      return (
                        <button
                          key={c.code}
                          onClick={() => toggleCountry(c.code)}
                          disabled={isDisabled}
                          className={`px-4 py-2 text-xs font-medium transition-all border ${
                            isSelected
                              ? "bg-[var(--accent)] text-white border-[var(--accent)]"
                              : isDisabled
                                ? "bg-[var(--muted)] text-[var(--accent-soft)]/40 border-[var(--border)] cursor-not-allowed opacity-40"
                                : "bg-white text-[var(--accent-soft)] border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                          }`}
                        >
                          {c.name} ({c.code})
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
            {selectedCountries.length > 0 && (
              <button
                onClick={() => setSelectedCountries([])}
                className="text-xs text-[var(--highlight)] hover:text-[var(--highlight-soft)] font-medium mt-3 transition-colors"
              >
                Clear selection
              </button>
            )}
          </div>

          <div className="border-t border-[var(--border)] pt-10">
            <label className="block text-xs tracking-[0.15em] uppercase font-medium text-[var(--accent-soft)] mb-6">
              Category
            </label>
            <div className="flex flex-wrap gap-0 border-b border-[var(--border)]">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-3 text-sm font-medium transition-all relative ${
                    selectedCategory === cat
                      ? "text-[var(--accent)] border-b-2 border-[var(--highlight)]"
                      : "text-[var(--accent-soft)] hover:text-[var(--accent)]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Comparison */}
      {selectedCountries.length < 2 ? (
        <div className="ll-card elevation-1 p-16 text-center">
          <p className="text-sm text-[var(--accent-soft)]">
            Please select at least two jurisdictions to compare.
          </p>
        </div>
      ) : (
        <div className="space-y-12">
          {/* Overview cards */}
          <div>
            <div className="ll-divider mb-5" />
            <h2 className="text-xl font-semibold text-[var(--accent)] mb-8">
              Jurisdiction Overview
            </h2>
            <div className="overflow-x-auto">
            <div
              className="grid gap-6"
              style={{
                gridTemplateColumns: `repeat(${selectedCountries.length}, minmax(220px, 1fr))`,
              }}
            >
              {comparisonData.map(({ country }) => (
                <div
                  key={country.code}
                  className="ll-card elevation-1 p-6 lg:p-8"
                >
                  <div className="mb-6">
                    <Link href={`/country/${country.code}`} className="text-lg font-semibold text-[var(--accent)] mb-1 hover:text-[var(--highlight)] transition-colors block">
                      {country.name}
                    </Link>
                    <p className="text-xs tracking-wide text-[var(--accent-soft)] mb-2">
                      {country.code} &middot; {country.nameLocal}
                    </p>
                    <span
                      className="text-[10px] font-bold uppercase tracking-[0.12em] px-2 py-0.5 border inline-block"
                      style={{
                        color: LEGAL_FAMILY_COLORS[getLegalFamily(country.code).family],
                        borderColor: LEGAL_FAMILY_COLORS[getLegalFamily(country.code).family] + "40",
                        backgroundColor: LEGAL_FAMILY_COLORS[getLegalFamily(country.code).family] + "0d",
                      }}
                    >
                      {getLegalFamily(country.code).family}
                    </span>
                  </div>
                  <div className="border-t border-[var(--border)] pt-5 text-sm text-[var(--accent-soft)] space-y-4">
                    <div>
                      <span className="text-xs tracking-[0.15em] uppercase text-[var(--accent-soft)] font-medium">
                        Primary Legislation
                      </span>
                      <div className="mt-1">{country.mainLaw}</div>
                    </div>
                    <div>
                      <span className="text-xs tracking-[0.15em] uppercase text-[var(--accent-soft)] font-medium">
                        Year Enacted
                      </span>
                      <div className="mt-1">{country.mainLawYear}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </div>

          {/* LSI Score Comparison */}
          <div>
            <div className="ll-divider mb-5" />
            <h2 className="text-xl font-semibold text-[var(--accent)] mb-8">
              Legislative Strength Index
            </h2>
            <div className="border border-[var(--border)]">
              {(() => {
                const lsiScores = selectedCountries.map((code) => ({
                  code,
                  lsi: getCountryLSI(code),
                })).filter((d): d is { code: string; lsi: LSIScore } => d.lsi !== undefined);

                const maxScore = Math.max(...lsiScores.map((d) => d.lsi.total), 1);

                const dimensionLabels = [
                  { key: "breadth" as const, label: "Breadth", max: 40 },
                  { key: "penalty" as const, label: "Penalty", max: 25 },
                  { key: "recency" as const, label: "Recency", max: 15 },
                  { key: "personhood" as const, label: "Personhood", max: 10 },
                  { key: "depth" as const, label: "Depth", max: 10 },
                ];

                const gradeColor = (g: string) =>
                  g === "A" ? "bg-[var(--accent)] text-white" :
                  g === "B" ? "bg-[var(--accent)]/15 text-[var(--accent)]" :
                  g === "F" ? "bg-[var(--highlight)]/10 text-[var(--highlight)]" :
                  "bg-[var(--muted)] text-[var(--accent-soft)] border border-[var(--border)]";

                return (
                  <>
                    {/* Total score bars */}
                    {lsiScores.map((d, i) => (
                      <div key={d.code} className={`flex items-center gap-4 px-5 py-4 ${i < lsiScores.length - 1 ? "border-b border-[var(--border)]" : ""} hover:bg-[var(--muted)] transition-colors`}>
                        <Link href={`/country/${d.code}`} className="text-xs font-bold text-[var(--accent)] w-28 shrink-0 hover:text-[var(--highlight)] transition-colors truncate">
                          {d.lsi.country.name}
                        </Link>
                        <div className="flex-1 bg-[var(--muted)] h-4 overflow-hidden">
                          <div
                            className="h-full bg-[var(--accent)]"
                            style={{ width: `${(d.lsi.total / 100) * 100}%` }}
                          />
                        </div>
                        <span className="text-lg font-bold text-[var(--accent)] w-10 text-right">{d.lsi.total}</span>
                        <span className={`text-[10px] font-bold px-2.5 py-1 w-8 text-center ${gradeColor(d.lsi.grade)}`}>{d.lsi.grade}</span>
                      </div>
                    ))}
                    {/* Dimension breakdown */}
                    <div className="border-t-[2px] border-[var(--highlight)] px-5 py-4">
                      <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--accent-soft)] mb-4">Dimension Breakdown</div>
                      <div className="space-y-3">
                        {dimensionLabels.map((dim) => (
                          <div key={dim.key} className="flex items-center gap-3">
                            <span className="text-[10px] font-bold text-[var(--accent-soft)] w-20 shrink-0">{dim.label} /{dim.max}</span>
                            <div className="flex-1 flex gap-1">
                              {lsiScores.map((d) => (
                                <div key={d.code} className="flex-1 flex items-center gap-1">
                                  <div className="flex-1 bg-[var(--muted)] h-2 overflow-hidden">
                                    <div
                                      className="h-full bg-[var(--accent)]"
                                      style={{ width: `${(d.lsi[dim.key] / dim.max) * 100}%` }}
                                    />
                                  </div>
                                  <span className="text-[10px] font-bold text-[var(--accent)] w-5 text-right">{d.lsi[dim.key]}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-4 mt-4 text-[10px] text-[var(--accent-soft)]">
                        {lsiScores.map((d) => (
                          <span key={d.code} className="font-bold">{d.lsi.country.flag} {d.code}</span>
                        ))}
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>

          {/* Auto-generated comparative summary */}
          {(() => {
            const lsiScores = selectedCountries.map((code) => ({
              code,
              country: countries.find((c) => c.code === code)!,
              lsi: getCountryLSI(code),
            })).filter((d): d is { code: string; country: typeof countries[0]; lsi: LSIScore } => !!d.lsi && !!d.country);

            if (lsiScores.length < 2) return null;

            const sorted = [...lsiScores].sort((a, b) => b.lsi.total - a.lsi.total);
            const top = sorted[0];
            const bottom = sorted[sorted.length - 1];
            const gap = top.lsi.total - bottom.lsi.total;

            // Which dimension drives the biggest gap?
            const dimDiffs = [
              { label: "coverage breadth", key: "breadth" as const, max: 40 },
              { label: "penalty severity", key: "penalty" as const, max: 25 },
              { label: "legislative recency", key: "recency" as const, max: 15 },
              { label: "legal personhood", key: "personhood" as const, max: 10 },
              { label: "legislative depth", key: "depth" as const, max: 10 },
            ].map((d) => ({
              ...d,
              diff: top.lsi[d.key] - bottom.lsi[d.key],
              topVal: top.lsi[d.key],
              bottomVal: bottom.lsi[d.key],
            })).sort((a, b) => Math.abs(b.diff) - Math.abs(a.diff));

            const primaryDriver = dimDiffs[0];

            // Coverage comparison
            const topCoveredCount = top.lsi.coveredCategories.length;
            const bottomCoveredCount = bottom.lsi.coveredCategories.length;
            const uniqueToTop = top.lsi.coveredCategories.filter(
              (c) => !bottom.lsi.coveredCategories.includes(c)
            );

            // Penalty comparison
            const penaltyNote = top.lsi.maxImprisonmentYears > 0 && bottom.lsi.maxImprisonmentYears > 0
              ? `${top.country.name} imposes a maximum of ${top.lsi.maxImprisonmentYears}yr imprisonment vs. ${bottom.lsi.maxImprisonmentYears}yr for ${bottom.country.name}.`
              : top.lsi.maxImprisonmentYears > 0
              ? `${top.country.name} provides imprisonment as a penalty; ${bottom.country.name}'s penalty data is incomplete.`
              : "";

            const allSameGrade = lsiScores.every((s) => s.lsi.grade === lsiScores[0].lsi.grade);

            return (
              <div className="border border-[var(--border)] border-l-[3px] border-l-[var(--personhood)] bg-white">
                <div className="px-6 py-4 border-b border-[var(--border)] bg-[var(--muted)]">
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent-soft)]">Auto-Generated Comparative Summary</div>
                </div>
                <div className="p-6 space-y-3 text-sm text-[var(--accent-soft)] leading-relaxed">
                  {gap === 0 ? (
                    <p>
                      The selected jurisdictions score identically on the LSI ({top.lsi.total}/100),
                      though their legislative composition may differ.
                    </p>
                  ) : (
                    <p>
                      <strong className="text-[var(--accent)]">{top.country.name}</strong> leads
                      the comparison with an LSI of <strong>{top.lsi.total}</strong> (Grade {top.lsi.grade}),{" "}
                      {gap} points ahead of{" "}
                      <strong className="text-[var(--accent)]">{bottom.country.name}</strong> ({bottom.lsi.total}/100, Grade {bottom.lsi.grade}).{" "}
                      The primary driver of this gap is <strong>{primaryDriver.label}</strong>{" "}
                      ({primaryDriver.topVal}/{primaryDriver.max} vs. {primaryDriver.bottomVal}/{primaryDriver.max}).
                    </p>
                  )}
                  {topCoveredCount !== bottomCoveredCount && (
                    <p>
                      On coverage breadth, {top.country.name} addresses{" "}
                      <strong>{topCoveredCount}/8</strong> core categories compared to{" "}
                      <strong>{bottomCoveredCount}/8</strong> for {bottom.country.name}.
                      {uniqueToTop.length > 0 && (
                        <> Categories present in {top.country.name} but absent in {bottom.country.name}: <strong>{uniqueToTop.join(", ")}</strong>.</>
                      )}
                    </p>
                  )}
                  {penaltyNote && <p>{penaltyNote}</p>}
                  {allSameGrade && lsiScores.length > 1 && (
                    <p className="text-[var(--accent-soft)] italic">
                      All selected jurisdictions share Grade {lsiScores[0].lsi.grade}, indicating broadly comparable legislative frameworks — though dimension scores may differ significantly.
                    </p>
                  )}
                  <p className="text-xs text-[var(--accent-soft)]/70 border-t border-[var(--border)] pt-3 mt-1">
                    This summary is algorithmically generated from LSI data and is intended as a research starting point, not a substitute for primary legal analysis.
                  </p>
                </div>
              </div>
            );
          })()}

          {/* Category comparison table */}
          <div>
            <div className="ll-divider mb-5" />
            <div className="ll-card elevation-1 overflow-hidden">
              <div className="px-8 py-6 border-b border-[var(--border)]">
                <h2 className="text-xl font-semibold text-[var(--accent)]">
                  {selectedCategory}
                </h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="text-left px-6 py-4 text-xs tracking-[0.15em] uppercase font-medium text-[var(--accent-soft)] bg-[var(--muted)] w-52 border-b border-[var(--border)]">
                        Topic
                      </th>
                      {comparisonData.map(({ country }) => (
                        <th
                          key={country.code}
                          className="text-left px-6 py-4 text-xs tracking-[0.15em] uppercase font-medium text-[var(--accent-soft)] bg-[var(--muted)] border-b border-[var(--border)]"
                        >
                          {country.name} ({country.code})
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {getAllTopics(comparisonData).length === 0 ? (
                      <tr>
                        <td colSpan={comparisonData.length + 1} className="px-6 py-10 text-center text-sm text-[var(--accent-soft)] italic">
                          No provisions found for &ldquo;{selectedCategory}&rdquo; in the selected jurisdictions.
                        </td>
                      </tr>
                    ) : getAllTopics(comparisonData).map((topic) => (
                      <tr key={topic} className="border-b border-[var(--border)] last:border-0">
                        <td className="px-6 py-5 text-sm font-medium text-[var(--accent)] align-top">
                          {topic}
                        </td>
                        {comparisonData.map(({ country, laws: cLaws }) => {
                          const law = cLaws.find((l) => l.topic === topic);
                          return (
                            <td
                              key={country.code}
                              className="px-6 py-5 text-sm text-[var(--accent-soft)] align-top"
                            >
                              {law ? (
                                <div className="space-y-2">
                                  <p className="leading-relaxed">{law.summary}</p>
                                  {law.penaltyMax && (
                                    <p className="text-xs text-[var(--highlight)] font-semibold">
                                      Maximum Penalty: {law.penaltyMax}
                                    </p>
                                  )}
                                  <p className="text-xs text-[var(--accent-soft)]">
                                    {law.lawName}, {law.article}
                                  </p>
                                </div>
                              ) : (
                                <span className="text-sm italic text-[var(--accent-soft)]">
                                  No specific provision
                                </span>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Coverage Matrix Comparison */}
          <div>
            <div className="ll-divider mb-5" />
            <h2 className="text-xl font-semibold text-[var(--accent)] mb-8">
              Coverage Matrix
            </h2>
            <div className="border border-[var(--border)] overflow-x-auto">
              <table className="w-full border-collapse text-xs">
                <thead>
                  <tr>
                    <th className="text-left px-4 py-3 bg-[var(--muted)] border-b border-r border-[var(--border)] font-bold text-[var(--accent-soft)] uppercase tracking-[0.1em]">
                      Category
                    </th>
                    {comparisonData.map(({ country }) => (
                      <th key={country.code} className="text-center px-4 py-3 bg-[var(--muted)] border-b border-[var(--border)] font-bold text-[var(--accent-soft)] uppercase tracking-[0.1em]">
                        {country.code}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {categories.map((cat) => (
                    <tr key={cat} className="border-b border-[var(--border)] last:border-0">
                      <td className="px-4 py-2.5 text-[var(--accent)] font-medium border-r border-[var(--border)]">{cat}</td>
                      {comparisonData.map(({ country }) => {
                        const has = laws.some((l) => l.countryCode === country.code && l.category === cat);
                        const count = laws.filter((l) => l.countryCode === country.code && l.category === cat).length;
                        return (
                          <td key={country.code} className="text-center px-4 py-2.5">
                            {has ? (
                              <span className="text-[var(--accent)] font-bold">{count}</span>
                            ) : (
                              <span className="text-[var(--highlight)] font-bold">—</span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                  <tr className="bg-[var(--muted)]">
                    <td className="px-4 py-2.5 font-bold text-[var(--accent)] border-r border-t border-[var(--border)]">Total Coverage</td>
                    {comparisonData.map(({ country }) => {
                      const covered = new Set(laws.filter((l) => l.countryCode === country.code).map((l) => l.category)).size;
                      return (
                        <td key={country.code} className="text-center px-4 py-2.5 font-bold text-[var(--accent)] border-t border-[var(--border)]">
                          {covered}/{categories.length}
                        </td>
                      );
                    })}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Landmark Cases Comparison */}
          {(() => {
            const allCases = selectedCountries.flatMap((code) =>
              getLandmarkCasesByCountry(code).map((c) => ({ ...c, countryInfo: countries.find((co) => co.code === code)! }))
            );
            if (allCases.length === 0) return null;
            return (
              <div>
                <div className="ll-divider mb-5" />
                <h2 className="text-xl font-semibold text-[var(--accent)] mb-3">Landmark Cases</h2>
                <p className="text-xs text-[var(--accent-soft)] mb-6 leading-relaxed">
                  Significant judicial decisions and legislative milestones for the selected jurisdictions. Select text to copy Bluebook-formatted citations.
                </p>
                <div className="space-y-4">
                  {allCases.map((c) => (
                    <div key={c.id} className="border border-[var(--border)] border-l-[3px] border-l-[var(--personhood)]">
                      <div className="p-5">
                        <div className="flex items-start gap-3 mb-3">
                          <span className="text-xl shrink-0">{c.countryInfo?.flag}</span>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap mb-1">
                              <span className="text-[10px] font-bold uppercase tracking-[0.1em]" style={{ color: LEGAL_FAMILY_COLORS[getLegalFamily(c.countryCode).family] }}>
                                {c.countryInfo?.name} · {getLegalFamily(c.countryCode).family}
                              </span>
                              <span className="text-[10px] font-bold text-[var(--personhood)] bg-[var(--personhood)]/10 px-2 py-0.5">{c.year}</span>
                              <span className="text-[10px] font-bold bg-[var(--muted)] border border-[var(--border)] px-2 py-0.5 text-[var(--accent-soft)] uppercase tracking-[0.1em]">{c.type}</span>
                            </div>
                            <h3 className="text-sm font-bold text-[var(--accent)] tracking-tight">{c.title}</h3>
                            <div className="text-[10px] text-[var(--accent-soft)] mt-0.5">{c.court}</div>
                          </div>
                        </div>
                        <p className="text-xs text-[var(--accent-soft)] leading-relaxed mb-2">{c.significance}</p>
                        {c.citation && (
                          <div className="text-[10px] font-mono text-[var(--accent-soft)] bg-[var(--muted)] border border-[var(--border)] px-3 py-2 select-all">
                            {c.citation}
                          </div>
                        )}
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {c.tags.map((tag) => (
                            <span key={tag} className="text-[9px] font-bold uppercase tracking-[0.1em] bg-[var(--muted)] border border-[var(--border)] px-2 py-0.5 text-[var(--accent-soft)]">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}

          {/* Legal Family Analysis */}
          {(() => {
            const familyData = selectedCountries.map((code) => {
              const country = countries.find((c) => c.code === code)!;
              const { family, note } = getLegalFamily(code);
              const lsi = getCountryLSI(code);
              return { code, country, family, note, lsi };
            });
            const uniqueFamilies = new Set(familyData.map((d) => d.family));
            const allSameFamily = uniqueFamilies.size === 1;
            return (
              <div>
                <div className="ll-divider mb-5" />
                <h2 className="text-xl font-semibold text-[var(--accent)] mb-3">Legal Family Analysis</h2>
                <p className="text-xs text-[var(--accent-soft)] mb-6 max-w-2xl leading-relaxed">
                  Legal family classification following Zweigert &amp; Kötz, <em>Introduction to Comparative Law</em> (3rd ed. 1998).
                  Jurisdictions from the same legal tradition tend to employ similar legislative drafting conventions and cross-cite each other in jurisprudence.
                </p>
                <div
                  className="grid gap-4 mb-6"
                  style={{ gridTemplateColumns: `repeat(${selectedCountries.length}, minmax(180px, 1fr))` }}
                >
                  {familyData.map(({ code, country, family, note }) => {
                    const color = LEGAL_FAMILY_COLORS[family];
                    return (
                      <div key={code} className="border p-4" style={{ borderColor: color + "40", background: color + "08" }}>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-lg">{country.flag}</span>
                          <span className="text-xs font-bold text-[var(--accent)]">{country.name}</span>
                        </div>
                        <div
                          className="text-[10px] font-bold uppercase tracking-[0.12em] px-2.5 py-1 inline-block mb-2"
                          style={{ color, background: color + "20" }}
                        >
                          {family}
                        </div>
                        {note && <p className="text-[10px] text-[var(--accent-soft)] leading-relaxed italic">{note}</p>}
                      </div>
                    );
                  })}
                </div>
                <div className={`border p-4 text-xs leading-relaxed ${allSameFamily ? "border-emerald-200 bg-emerald-50 text-emerald-800" : "border-[var(--border)] bg-[var(--muted)] text-[var(--accent-soft)]"}`}>
                  {allSameFamily ? (
                    <>
                      <strong>Same legal family:</strong> All selected jurisdictions belong to the <strong>{familyData[0].family}</strong> tradition.
                      This increases the likelihood of cross-jurisdictional citation and legislative borrowing — judicial decisions and statutes from one jurisdiction are more likely to be persuasive authority in another.
                    </>
                  ) : (
                    <>
                      <strong>Mixed legal traditions:</strong> The selected jurisdictions span {uniqueFamilies.size} legal families ({[...uniqueFamilies].join(", ")}).
                      Cross-family comparison is valuable for identifying universal trends in animal protection law versus tradition-specific approaches, but direct transplantation of legislative models may require adaptation.
                    </>
                  )}
                </div>
              </div>
            );
          })()}

          {/* Animal definition comparison */}
          <div>
            <div className="ll-divider mb-5" />
            <div className="ll-card elevation-1 overflow-hidden">
              <div className="px-8 py-6 border-b border-[var(--border)]">
                <h2 className="text-xl font-semibold text-[var(--accent)]">
                  Definition of &ldquo;Animal&rdquo;
                </h2>
              </div>
              <div className="overflow-x-auto">
              <div
                className="grid divide-x divide-[var(--border)]"
                style={{
                  gridTemplateColumns: `repeat(${selectedCountries.length}, minmax(200px, 1fr))`,
                }}
              >
                {comparisonData.map(({ country }) => (
                  <div key={country.code} className="p-6 lg:p-8">
                    <div className="mb-4">
                      <span className="text-xs tracking-[0.15em] uppercase font-medium text-[var(--accent-soft)]">
                        {country.name} ({country.code})
                      </span>
                    </div>
                    <p className="text-sm text-[var(--accent-soft)] leading-relaxed">
                      {country.animalDefinition}
                    </p>
                  </div>
                ))}
              </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function getAllTopics(
  data: { laws: { topic: string }[] }[]
): string[] {
  const topics = new Set<string>();
  data.forEach(({ laws: cLaws }) => cLaws.forEach((l) => topics.add(l.topic)));
  return [...topics];
}
